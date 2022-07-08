import { reqGoodsInfo ,reqAddOrUpdateCart} from '@/api';
//封装临时游客身份模块uuid 
import {getUUId} from '@/utils/uuid_token'

const state = {
  goodInfo: {},
  //游客临时身份
  uuid_token:getUUId()

};
const mutations = {
  GETGOODINFO(state, goodInfo) {
    state.goodInfo = goodInfo;
  },
};
const actions = {
  //获取产品信息
  async getGoodInfo({ commit }, skuId) {
    let result = await reqGoodsInfo(skuId);
    if (result.code == 200) {
      commit('GETGOODINFO', result.data);
    }
  },
  //将产品添加到购物车中
 async addOrUpdateShopCart({commit},{skuId,skuNum}){
  //加入购物车返回结果
  let result=  await reqAddOrUpdateCart(skuId,skuNum)
  //当前的这个函数如果执行返回promise
    if(result.code==200){
      return 'ok'
    }else{
      return Promise.reject(new Error('faile'))
    }
  }
};
//简化数据
const getters = {
  categoryView(state){
    //当前计算至少是一个对象，要不然会假报错
    return state.goodInfo.categoryView||{}
  },
  skuInfo(state){
    return state.goodInfo.skuInfo||{}
  },
  //产品售卖属性的简化
  spuSaleAttrList(state){
    return state.goodInfo.spuSaleAttrList||[]
  }
};
export default {
  state,
  actions,
  mutations,
  getters,
};
