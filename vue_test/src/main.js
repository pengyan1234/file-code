// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'    //映入才可使用this.$http.post，vue2以后就不更新vue-resource，所以推荐使用axios
import axios from 'axios'      //引入axios,完成前后数据交互
import qs from 'qs'           //想要发送带json格式参数的请求，则需要使用qs模块来处理参数
//QS是axios库中带的，不需要我们再npm安装一个

Vue.prototype.$ajax=axios     //将vue改为vue的原型链
Vue.prototype.$qs=qs
Vue.use(VueResource)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
