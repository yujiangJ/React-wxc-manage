/*
 * @Description: 
 * @Autor: yubiao
 * @Date: 2021-06-22 11:32:45
 * @LastEditors: yubiao
 * @LastEditTime: 2021-06-24 16:32:02
 */
import * as actionTypes from './constants';
import { message } from 'antd';
import { login, getUserMessage } from "@/api/user";
import { getUserAppMenus } from "@/api/marketing/menu";

export function filterIndexRouter(data) {
  let path = "";
  if (data[0].subMenus && data[0].subMenus.length > 0 && data[0].subMenus[0].type !== 2) {
    path = filterIndexRouter(data[0].subMenus);
  } else {
    path = data[0].url;
  }
  return path;
}

export const changeLoginFlag = (res) =>  {
  localStorage.setItem("basiclFlag", res);
  return {
    type: actionTypes.SET_LOGINFLAG,
    LFLAG: res
  }
}
export const changeUserInfo = (res) =>  {
  return {
    type: actionTypes.SET_USERINFO,
    userInfo: res
  }
}

export const changeAppData= (data) => {
  localStorage.setItem("basicAppKey", data.appKey);
  localStorage.setItem("basicAppId", data.appId);
  return {
    type: actionTypes.SET_NOW_APP,
    appData: data
  }
}

export const changeLogo = (data) => {
  return {
    type: actionTypes.SET_LOGO,
    logo: data
  }
}

// 当前应用的menu
export const changeAppMenus = (data) => {
  return {
    type: actionTypes.SET_ROUTES,
    menusData: data
  }
}
// 当前用户在此应用的第一个path
export const changeFirstpath = (data) => ({
  type: actionTypes.SET_FIRST_ROUTE,
  firstPath: data
})

export const userLogin = (data) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      login(data).then(res => {
        const { data, code } = res;
        if (code === "0") {
          if (data.menus == null || !data.menus || data.menus.length === 0) {
            message.error("没有任何权限");
          }
          // 登录标志
          dispatch(changeLoginFlag(1));
          dispatch(changeAppData({appId: '0', appKey: 'platform'}));
          resolve(true)
        } else {
          reject('error');
        }
      })
    })
  }
}
// 获取用户拥有 的按钮
export const getAppMenus = (val) => {

  return async (dispatch) => {
    let res = await getUserAppMenus(val.appId, true);
    if(res) {
      let indexRoute = filterIndexRouter(res);
      console.log(indexRoute);
      dispatch(changeFirstpath(indexRoute));
      dispatch(changeAppMenus(res));
    }
  }
}

export const changeManage = (data) => {
   //切换平台getUserMessage
  return dispatch => {
    console.log('11111111111');
    // return new Promise(resolve => {
    //   dispatch("getAppMenus", data).then(() => {
    //     resolve(true);
    //   });
    // });
  }
};

// 获取用户信息
export const UserMessage = () => {
  return async (dispatch) => {
    let res = await getUserMessage();
    dispatch(changeUserInfo(res));
    dispatch(changeLogo(res.logo || ""));
  }
}