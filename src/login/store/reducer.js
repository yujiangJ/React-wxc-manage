/*
 * @Description: 
 * @Autor: yubiao
 * @Date: 2021-06-22 11:33:07
 * @LastEditors: yubiao
 * @LastEditTime: 2021-06-24 16:11:26
 */
import * as actionTypes from "./constants";

const defaultState = {
  userInfo: { name: "", image: "", tenantId: "", tenantNo: "" }, // 用户信息
  logo: "", // logo
  LFLAG: localStorage.getItem("basiclFlag") ? localStorage.getItem("basiclFlag") : 0, // 登录标志
  headerApp: [], // app应用headerTableine
  useAPPkey: localStorage.getItem("basicAppKey") ? localStorage.getItem("basicAppKey") : "platform", // 当前使用的是哪个平台
  appId: localStorage.getItem("basicAppId") ? localStorage.getItem("basicAppId") : "0", // appId
  projectList: [], // 租户下的项目列表
  estateId: localStorage.getItem("estateId") ? localStorage.getItem("estateId") : "", // 当前的项目Id
  opId: localStorage.getItem("basicOpId") ? localStorage.getItem("basicOpId") : "", // appId
  menusData: [],
  firstPath: ''
}

export default function reducer(state = defaultState, action) {
  switch(action.type) {
    case actionTypes.SET_LOGINFLAG:
      return { ...state, LFLAG: action.LFLAG };
    case actionTypes.SET_NOW_APP:
      return { ...state, appId: action.appData.appId,  useAPPkey: action.appData.appKey};
    case actionTypes.SET_USERINFO:
      return { ...state, userInfo: action.userInfo};
    case actionTypes.SET_LOGO:
      return { ...state, logo: action.logo};
    case actionTypes.SET_ROUTES:
        return { ...state, menusData: action.menusData};
    case actionTypes.SET_FIRST_ROUTE:
      return {...state, firstPath: action.firstPath};
    default:
      return state;
  }
}