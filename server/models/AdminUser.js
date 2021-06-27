const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    username: {type: String},
    passwords: {
        type: String,
        //不允许查询该属性,且如果返回的是加密后的字串，那么点击保存就是加密再加密
        // select: false,
        // set(val) {
        //     return require('bcrypt').hashSync(val, 10)
        // }
    }
})

module.exports = mongoose.model('AdminUser', schema)