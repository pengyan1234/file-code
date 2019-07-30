import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import shequ from '@/components/shequ'     /*引入页面*/
import userList from '@/components/userList'

Vue.use(Router)

export default new Router({
  mode:'history', //去掉地址栏的#号
  routes: [
    {
      path: '/',
      name: 'HelloWorld',   //name:给路由起别名，可在router-link中to使用
      component: HelloWorld
    },
    {
      path: '/shequ',    //访问的路径 例：http://localhost:8080/shequ?userId=123
      name:'SheQu',     //这里的name值要与链接处的to属性后name一样
      component: (resolve) => require(['../components/shequ.vue'],resolve)   //页面（路由传参时刻使用）
    },
    {
      path:'toUserList',
      name:'userlist',
      component:(resolve) => require(['../components/userList.vue'],resolve)
    }
  ]
})
