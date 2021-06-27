module.exports = app => {
    const express = require('express')
    const assert = require('http-assert')
    const router = express.Router({
        //合并URL参数，将父级的参数合并到router里面
        mergeParams: true
    })

    router.post('/', async (req, res) => {
        const model = await req.Model.create(req.body)
        res.send(model)
    })

    router.put('/:id', async (req, res) => {
        console.log(req.body, 999)
        const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
        res.send(model)
    })

    router.get('/:id', async (req, res) => {
        // console.log(req.body, 999)
        const model = await req.Model.find({ _id: req.params.id });
        res.send(model)
    })

    router.delete('/:id', async (req, res) => {
        console.log(req.body, 111)
        const model = await req.Model.findByIdAndDelete(req.params.id)
        res.send({
            success: true
        })
    })

    const auth = require('../middlewares/auth')()
    const resource = require('../middlewares/resource')()

    router.get('/', auth, async (req, res) => {
        const queryOptions = {}
        console.log(req, 3333);

        if (req.Model.modelName === 'Category') {
            queryOptions.populate = 'parent'
        }

        const items = await req.Model.find().setOptions(queryOptions).limit(10)
        res.send(items)
    })

    //  动态获取接口地址:resource,中间件处理请求模板
    app.use('/api/rest/:resource', resource, auth, router)

    const multer = require('multer')
    const upload = multer({dest: __dirname + '/../uploads'})

    app.post('/api/upload', upload.single('file'), auth, async (req, res) => {
        const file = req.filef
        file.url = `http://localhost:8089/uploads/${file.filename}`
        res.send(file)
    })

    app.post('/api/login', async (req, res) => {
        const {username, passwords } = req.body
        const adminUser = await require('../models/AdminUser').findOne({username})

        assert(adminUser, 422, '用户不存在！')
        // const isValid = require('bcrypt').compareSync(passwords, adminUser.password)

        const isValid = passwords == adminUser.passwords

        assert(isValid, 422, '密码错误！')
        const token = require('jsonwebtoken').sign({_id: adminUser._id}, app.get('secret'))

        res.send({token, username: adminUser.username, message: '登录成功'})
    })

    app.use(async (err, req, res, next) => {
        res.status(err.statusCode || 500).send({
            message: err.message
        })
    })
}