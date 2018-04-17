import Vue from 'vue'
import Router from 'vue-router'
//一级路由
import home from "../components/home/home.vue"
import advertising from "../components/advertising/advertising.vue"
import data from "../components/data/data.vue"
import toolkit from "../components/toolkit/toolkit.vue"

import neworigin from '../components/neworigin/neworigin.vue'
import root from '../components/root/root.vue'

Vue.use(Router)
//有两种方法--->重点是<router-view></router-view>放在哪里！！！
// 1.分别加路由 在App.vue里面渲染左边导航 我给写了个123，你切换个别的路由就可以看到无论在哪个路由123都有，变化的是router-view
//2.想你写的路由嵌套，但是要把router-view写在index.vue里面（App.vue里的router-view好像也要保留着）
let router= new Router({
  routes: [
    {
      path: "/home",
      name: "home",
      component: home
    },
    {
      path: "/advertising",
      name: "advertising",
      component: advertising
    },
    {
      path: "/toolkit",
      name: "toolkit",
      component: toolkit
    },
    {
      path: "/data",
      name: "data",
      component: data
    },
    {
      path: "/root",
      name: "root",
      component: root
    },
    {
      path: "/neworigin",
      name: "neworigin",
      component: neworigin
    }
  ]
})



router.beforeEach((to,from,next) => {
    if (to.name == 'login') {
        console.log(to.matched)
        next()
    } else {
        if (localStorage.getItem('token')) {
            next()
        } else {
            next({
                path:'login'
            })
        }
    }
})
export default rou