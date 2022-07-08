import { reqCartList, reqDeleteCartById ,reqUpdateCheckedByid} from '@/api';
import { Promise } from 'core-js';
const state = {
  cartList: [],
};

const mutations = {
  GETCARTLIST(state, cartList) {
    state.cartList = cartList;
  },
};

const actions = {
  //获取购物车列表数据
  async getCartList({ commit }) {
    let result = await reqCartList();
    if (result.code == 200) {
      commit('GETCARTLIST', result.data);
    }
  },
  //删除购物车某一个产品
  async deleteCartListBySkuId({ commit }, skuId) {
    let result = await reqDeleteCartById(skuId);
    if(result.code==200){
        return 'ok'
    }else{
        return Promise.reject(new Error('faile'))
    }
  },
  //修改购物车某一个产品的选中状态
 async updateCheckedById({commit},{skuId,isChecked}){
    let result=  await  reqUpdateCheckedByid(skuId,isChecked)
    if(result.code==200){
      return 'ok'
    }else{
      return Promise.reject(new Error('faile'))
    }
  },
  //删除全部勾选的商品
  deleteAllCheckedCart({dispatch,getters}){
    //获取购物车全部产品
    let PromiseAll=[]
    getters.cartList.cartInfoList.forEach(item=>{
    let promise=  item.isChecked==1?dispatch('deleteCartListBySkuId',item.skuId):''
    //将每一次返回的promise添加到数组中
    PromiseAll.push(promise)
    })
    //只要全部的p1|p2。。。都成功，返回结果都成功
    //如果有一个失败，返回即为失败结果
    return Promise.all(PromiseAll)
  }
};

const getters = {
  cartList(state) {
    return state.cartList[0] || {};
  },
  //计算出来的购物车数据
};
export default {
  state,
  mutations,
  actions,
  getters,
};
