/*
 * @Description: 用户信息
 * @Autor: yubiao
 * @Date: 2021-06-22 10:25:21
 * @LastEditors: yubiao
 * @LastEditTime: 2021-06-24 10:30:40
 */
import request from "@/utils/request";
import { BASE_URL } from "./urlBase";

// 租户/用户/admin登录
export const login = datas => {
  return request.post({
    url: "/auth/login",
    data: datas
  });
};

// 获取菜单中应用列表
export const getUserMessage = () => {
  return request
    .get({
      url: `/${BASE_URL}/user/v1/user-info`
    })
    .then(res => {
      if (res.code === '0') {
        return res.data;
      } else {
        return false;
      }
    });
};
