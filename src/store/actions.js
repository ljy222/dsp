import {Login,List} from '../utils/request'
let actions = {
    getToken({commit},{data,notify,router}){
        // console.log(payload)
        Login(data).then(res => {
            console.log(res)
            if (res.success == 0) {//成功
                commit('saveToken',res.token)   
                commit('saveUser',res.user.name)   
                sessionStorage.setItem("token",res.token) 
                notify({
                    title:"登陆成功",
                    message:"用户名和密码都输对了哦",
                    type:"success"
                })        
                setTimeout(() => {
                    router.push({
                        path:"/index"
                    })
                },1000)    
            } else {
                notify({
                    title:"登陆出错",
                    message:"用户名和密码出错啦！！！",
                    type:"error"
                })
            }
        })
        
    },
    getList({commit}){
        // console.log('qingqiu')
        List().then(res => {
            // console.log(res)
            commit('xttList',res.list)
        })
        // commit('')
    }
}
export default actions