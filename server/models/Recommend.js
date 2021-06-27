const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    recTitle: {type: String},
    recArticle: {type: String},
    img: {type: String},
})

module.exports = mongoose.model('Recommend', schema)