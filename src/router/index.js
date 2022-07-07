import Vue from 'vue'
import routes from './routes'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

//先把vueRouter原型对象的push，先保存一份
let originPush=VueRouter.prototype.push
let originReplace=VueRouter.prototype.replace

//重写push||replace
VueRouter.prototype.push=function(location,resolve,reject){
   if(resolve&&reject){
    originPush.call(this,location,resolve,reject)
   } else{
    originPush.call(this,location,()=>{},()=>{})
   }
}
VueRouter.prototype.replace=function(location,resolve,reject){
    if(resolve&&reject){
        originReplace.call(this,location,resolve,reject)
    }else{
        originReplace.call(this,location,()=>{},()=>{})
    }
}
export default new VueRouter({
    routes,
    //滚动行为
    scrollBehavior(to,from,savedPositon){
        return {y:0}
    }
})