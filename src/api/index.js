//api进行统一管理
import requests from './requests';
import mockRequests from './mockAjax';

//三级联动接口
///api/product/getBaseCategoryList get 无参数

//发送请求：axios发请求结构promise对象
export const reqCategoryList = () =>
  requests({ url: '/product/getBaseCategoryList', method: 'get' });

//获取banner
export const reqGetBannerList = () => mockRequests.get('/banner');

//获取floor数据
export const reqFloorList = () => mockRequests.get('/floor');

//获取搜索模块数据
/*{
    "category3Id": "61",
    "categoryName": "手机",
    "keyword": "小米",
    "order": "1:desc",
    "pageNo": 1,
    "pageSize": 10,
    "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
    "trademark": "4:小米"
  }
*/
// export const reqGetSearchInfo=(params)=>requests({url:'/list',method:'post',data:params})
export const reqGetSearchInfo = (params) =>
  requests({ url: '/list', method: 'post', data: params });

//获取产品详情接口

export const reqGoodsInfo = (skuId) =>
  requests({ url: `/item/${skuId}`, method: 'get' });

//将产品添加到购物车 获取更新某一个产品的个数
export const reqAddOrUpdateCart = (skuId, skuNum) =>
  requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: 'post' });

//获取购物车列表数据接口
export const reqCartList = () =>
  requests({ url: '/cart/cartList', method: 'get' });

//删除购物产品的接口
export const reqDeleteCartById=(skuId)=>requests({url:`/cart/deleteCart/${skuId}`,method:'delete'})

//修改商品选中的状态
///api/cart/checkCart/{skuId}/{isChecked}
export const reqUpdateCheckedByid=(skuId,isChecked)=>requests({url:`/cart/checkCart/${skuId}/${isChecked}`,method:'GET'})

