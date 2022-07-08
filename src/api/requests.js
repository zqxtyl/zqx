//axios二次封装
import axios from 'axios'

//引入进度条
import nprogress from 'nprogress'
//start 开始 done结束

//在当前模块引入store
import store from '@/store'

//引入进度条样式
import 'nprogress/nprogress.css'

//利用axios对象方法 create 去创建一个axios实例
// request就是axios
let requests=axios.create({
    //配置对象
    //基础路径
    baseURL:'/api',
    timeout:5000,
})
//请求拦截器
requests.interceptors.request.use((config)=>{
    //header请求头
    //进度条开始动
    if(store.state.detail.uuid_token){
        config.headers.userTempId=store.state.detail.uuid_token
    }
    nprogress.start()
    return config
})

//响应拦截器
requests.interceptors.response.use((res)=>{
    //进度条结束
    nprogress.done()
    return res.data
},(error)=>{
    //响应失败的回调函数
    return Promise.reject(new Error('failed'))
})




//对外暴露
export default requests