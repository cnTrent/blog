// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './router'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueRouter)
//自定义指令,第一个参数是指令名字，第二个是对象，给其绑定要实现的东西
//el:元素
//binding:传过来的东西
//binding.value:传过来的的值
//binding.arg:这个v-theme:colum传过来的coloum
Vue.directive("rainbow",{
  bind(el,binding,vnode){
    el.style.color="#"+ Math.random().toString(16).slice(2,8)
  }
})
Vue.directive("theme",{
  bind(el,binding,vnode){
    if(binding.value == "wide"){
      el.style.maxWidth="1260px";
    }else if (binding.value=="narrow"){
      el.style.width="800px"
    }
    if(binding.arg=="colum"){
      el.style.background="crimson"
      el.style.padding="10px"
    }
  }
})
//过滤器形参value的值接收是|前面的东西
Vue.filter("to-uppercase",function(value){
  return value.toUpperCase()
})
Vue.filter("snippet",function(value){
  return value.slice(0,100) + "....";
})
/* eslint-disable no-new */
//创建路由
const router=new VueRouter({
  routes:Routes,
  mode:"history"
})
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router:router,
})
