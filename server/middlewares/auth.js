module.exports = () => {
    const assert = require('http-assert')

    return async (req, res, next) => {
        const token = req.headers.authorization && req.headers.authorization.split(' ').pop()
        assert(token, 401, '请登录')

        const {_id} = require('jsonwebtoken').verify(token, req.app.get('secret'))
        assert(_id, 401, '')

        req.adminUser = await require('../models/AdminUser').findById(_id)
        assert(req.adminUser, 401, '请登录')

        next()
    }
}