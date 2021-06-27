const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    insTitle: {type: String},
    insArticle: {type: String},
    img: {type: String},
})

module.exports = mongoose.model('Instance', schema)