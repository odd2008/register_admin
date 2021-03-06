// 格式化时间
Date.prototype.Format = function (fmt) { //author: 
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import './assets/css/public.css'
import {Message} from 'element-ui'
Vue.prototype.$message = Message

import Es6Promise from 'es6-promise'
Es6Promise.polyfill()
Vue.config.productionTip = false
/* eslint-disable no-new */
router.beforeEach((to, from, next) => {
    if (to.path == '/login') {
      next()
    }else{
      if (!store.state.user_info) {
          next({path:'/login'})
      }else{
          next()
      }
    }
})
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
