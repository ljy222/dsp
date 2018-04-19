# y

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

#后台管理项目总结思路
  ## 此项目的技术选型是用Vue vue-router Vuex Vue的生命周期 element-ui EChart 用vue init webpack dsp搭建脚手架，在项目中用到了es6,less的语法,我认为less语法结构清晰，便于扩展，可维护性高,可以轻松实现多重继承,方便维护。并且使用了代码规范
  ## 首先完成了vue的路由搭建，(首页,广告管理,数据中心,工具箱)这几个组件是一级路由，以及路由拦截的实现，
  ## 数据请求:
      我们封装了一个axios用于请求后端接口，请求列表数据，编辑，删除，添加，管理等操作来实现请求
# 项目的主要功能模块
  ## 登录页面:
     在点击登录时在后端产生token字段并返回前端，并在本地localStorage中存储token字段随后在路由跳转时从本地读取token并进行判断,如果没有token字段则不能登录密码或者账号有误，需返回重新登录，密码账号正确才可登录进入首页
  ## 首页
     登录成功后进入首页，在首页中我用了element-ui进行了排版，其中遇到的困难是日期的选择有些Bug,这个组件中难点是eChart有些用的不是很熟悉，有些生疏。在做折线图时通过日历之间的变化改变曝光量的数据,通过日期那些方法来改变年,月,日,在这里需要注意的是一年中12个月到下一年时是否从一月开始。
  ## 广告管理页面
     广告管理页面中下面有三个子路由分别是(广告设计,广告单元,广告创意),这些页面中需要通过请求后台接口并且渲染不同的数据,点击新建可以跳转到新建广告路由下,点击添加创意添加进去tab切换，点击上传图片后传到node模拟接口根据后台返回的数据和写成的文件展示到页面,点击添加创意生成tab以后没有默认显示第一条，必须点击一次以后渲染
  ## 数据管理：
     运用了vuex的知识管理数据，实现了数据的错做，在每次请求到数据以后传到store里进行统一管理
  ## 遇到的困难:
     在首页中的折线图遇到了Bug,主要是操作时间数据时出现的Bug,在操作Mock数据时出现了Bug
     解决方案:1.思路不清晰整理思路，主要是整理了判断年份条件的思路,Mock数据的解决方案是[`list|${count}`]解决的
     

  