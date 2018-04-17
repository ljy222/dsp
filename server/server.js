const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const api=require('./api.js')
app.use(bodyParser.json())
//设置跨域cors 
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8081");
    res.header("Access-Control-Allow-Headers", "Content-type,Token,plantform");
    res.header("Content-type", "application/json;charset=utf-8")
    next();
})

api(app)

app.listen(8022, function () {
    console.log('server is 8022') 
})