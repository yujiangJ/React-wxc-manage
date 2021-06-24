/*
 * @Description: 
 * @Autor: yubiao
 * @Date: 2021-06-22 10:25:21
 * @LastEditors: yubiao
 * @LastEditTime: 2021-06-23 17:42:55
 */
/**
 * createBy yubiao 20/4/2021
 * 菜单管理APi
 */
import request from "@/utils/request";
import { BASE_URL } from "@/api/urlBase";
// import { Message } from "element-ui";

// 查询所有菜单
export const getAppMenus = (name, appId, loading) => {
  return request
    .get({
      url: `/${BASE_URL}/menu/v1/menus`,
      params: {
        name: "",
        appId: appId
      },
      hideLoading: !loading
    })
    .then(res => {
      if (res.code === '0') {
        return res.data;
      } else {
        return false;
      }
    });
};
// 查询用户所拥有的菜单
export const getUserAppMenus = (appId, loading) => {
  return request
    .get({
      url: `/${BASE_URL}/menu/v1/app-login-menus/${appId}`,
      hideLoading: !loading
    })
    .then(res => {
      if (res.code === '0') {
        return res.data;
      } else {
        return false;
      }
    });
};
// 根据应用活父级id查询
export const getLevelAppMenus = (appId, menuId) => {
  return request
    .get({
      url: `/${BASE_URL}/menu/v1/sub-menus`,
      params: {
        appId: appId,
        menuId: menuId
      },
      hideLoading: true
    })
    .then(res => {
      if (res.code === '0') {
        return res.data;
      } else {
        return false;
      }
    });
};
