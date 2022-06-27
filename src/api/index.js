//api进行统一管理
import requests from "./requests";
import mockRequests from './mockAjax'

//三级联动接口
///api/product/getBaseCategoryList get 无参数

//发送请求：axios发请求结构promise对象
export const reqCategoryList=()=>requests({url:'/product/getBaseCategoryList',method:'get'})

//获取banner
export const reqGetBannerList=()=>mockRequests.get('/banner')

//获取floor数据
export const reqFloorList=()=>mockRequests.get('/floor')

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
export const reqGetSearchInfo=(params)=>requests({url:"/list",method:'post',data:params})