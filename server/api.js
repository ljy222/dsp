const jwt = require('jsonwebtoken')
const fs = require('fs')
const http = require('http')
const querystring = require('querystring')
const Mock = require('mockjs')
const _=require('lodash')


function queryapi(url, methods, params) {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: 'www.lb717.com',
            port: 80,
            path: url,
            method: methods,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            }
        };
        let data = ''
        let request = http.request(options, (response) => {
            response.setEncoding('utf8');
            response.on('data', (chunk) => {
                data += chunk;
            });
            response.on('end', () => {
                resolve(JSON.stringify(data))
            });
        })
        if (methods.toLowerCase() == 'post') {
            request.write(querystring.stringify(params))
        }
        request.end()
    })

}
module.exports = function (app) {

    //注册接口
    app.post('/user/register', function (req, res) {
        console.log(req.body)
        let user = fs.readFileSync('user.json', { encoding: 'utf-8' })
        user = JSON.parse(user)
    
        user.push(req.body)
        fs.writeFile('user.json', JSON.stringify(user), function () {
            res.end(JSON.stringify({
                "success": 1,
                "info": "注册成功"
            }))
        })
    })

    //登录接口
    app.post('/dsp-admin/user/login', function (req, res) {
        let user = fs.readFileSync(__dirname + '/user.json', { encoding: 'utf-8' })
        user = JSON.parse(user)
        let login = req.body;

        let resInfo = {
            success: 0,
            info: '用户名或密码错误',
            token: ''
        }
        console.log(user,req.body)
        user.forEach((item, index) => {
            if (item.username == login.username && item.password == login.password) {
                resInfo.success = 1;
                resInfo.info = 'login success',
                resInfo.user={
                    name:item.username,
                    time:new Date().toLocaleTimeString(),
                    nickName:'jacky'
                }
            }
        })
        if (resInfo.success == 1) {
            resInfo.token = jwt.sign(login, '1511', {
                expiresIn: 60 * 60  //超时时间
            })
        }
        res.end(JSON.stringify(resInfo))
    })
}