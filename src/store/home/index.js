import { reqCategoryList, reqGetBannerList, reqFloorList } from '@/api';
//home模块小仓库
const state = {
  categoryList: [],
  bannerList: [],
  floorList:[]
};
const mutations = {
//   GETSEARCHLIST(state, searchList) {
//     state.searchList = searchList;
// },
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList;
  },
  GETBANNERLIIST(state, bannerList) {
    state.bannerList = bannerList;
  },
  GETFLOORLIST(state,floorList){
    state.floorList=floorList
  }
};
const actions = {
  async categoryList({ commit }) {
    let result = await reqCategoryList();
    if (result.code == 200) {
      commit('CATEGORYLIST', result.data);
    }
  },
  //获取首页轮播图的数据
  async getBannerList({ commit }) {
    let result = await reqGetBannerList();
    if (result.code == 200) {
      commit('GETBANNERLIIST', result.data);
    }
  },
  //获取floor数据
  async getFloorList({ commit }) {
    let result = await reqFloorList();
    if(result.code==200){
      commit('GETFLOORLIST',result.data)
    }
  },
};
//计算属性
const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
