import axios from 'axios'
import Vue from 'vue'
//创建一个新的实例
let instance = axios.create({
    headers: {
        "plantform": "PC",
    },
    baseURL: "http://localhost:8022"
})


//请求拦截
instance.interceptors.request.use((config) => {
    console.log(config)
    return config
}, (err) => {
    return Promise.reject(err)
})



//响应拦截
instance.interceptors.response.use((response) => {
    if (response.status==200) {
        return response.data
    } else {
        return Promise.reject({
            status: response.status
        })
    }
}, (err) => {
    return Promise.reject(err)
})


// Vue.prototype.$http = instance;
Object.defineProperty(Vue.prototype, '$http', {
    value: instance,
    enumerable: true
})
export default instance

export function login(username, password, identifycode) {
    return new Promise((resolve,reject) => {
        instance.post('/dsp-admin/user/login', {
                username,
                password
        }).then(res => {
            resolve(res)
        })
    })
}