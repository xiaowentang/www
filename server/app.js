const express = require('express')

const app = express()

//token密匙
app.set('secret', 'falksdhlasdja')

//解决跨域
app.use(require('cors')())
//解析 JSON 格式的请求体数据
app.use(express.json())
//开放静态资源
app.use('/uploads', express.static(__dirname + '/uploads'))

require('./routes')(app)
require('./plugins/db')(app)

app.listen(8089, () => {
    console.log('Server is Running')
})