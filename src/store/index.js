import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import home from './home'
import search from './search'
//state 仓库存储数据的地方

// mutations 修改state的唯一手段

//actions 处理action，可以书写自己的业务逻辑，也可以处理异步

//getrers 理解为计算属性  用于简化仓库数据  让组件获取仓库的数据更加方便


export default new Vuex.Store({
    modules:{
        home,
        search
    }
})