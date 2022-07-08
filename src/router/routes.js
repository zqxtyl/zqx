//引入路由组件
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'

//路由配置信息
export default [
  {
    path: '/shopcart',
    component: ShopCart,
    meta: { show: true },
  },
  {
    path: '/addcartsuccess',
    name:'addcartsuccess',
    component: AddCartSuccess,
    meta: { show: true },
  },
  {
    path: '/detail/:skuid',
    component: Detail,
    meta: { show: true },
  },
  {
    path: '/home',
    component: Home,
    meta: { show: true },
  },
  {
    path: '/login',
    component: Login,
    meta: { show: false },
  },
  {
    path: '/register',
    component: Register,
    meta: { show: false },
  },
  {
    path: '/search/:keyword?',
    component: Search,
    meta: { show: true },
    name: 'search',
  },
  {
    path: '/',
    redirect: '/home',
  },
];
