import Vue from 'vue';
import App from './App.vue';
//三级联动组件--全局组件  在任何组件当中都可以使用
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
//全局组件的名字：哪一个组件
Vue.component(TypeNav.name,TypeNav)
Vue.component(Carousel.name,Carousel)
Vue.component(Pagination.name,Pagination)

//引入路由
import router from '@/router';
//引入仓库
import store from '@/store'

import '@/mock/mockServe'

import 'swiper/css/swiper.css'


new Vue({
  render: (h) => h(App),
  beforeCreate(){
    //全局事件总线
    Vue.prototype.$bus=this
  },
  router,
  //注册仓库  组件实例的身上会多个属性$store属性
  store
}).$mount('#app');
