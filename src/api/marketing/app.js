/**
 * createBy yubiao 20/4/2021
 * 应用管理 APi
 */
import request from "@/utils/request";
import { BASE_URL } from "@/api/urlBase";

// 获取菜单中应用列表
export const getMenusApp = (params = {}) => {
  return request
    .get({
      url: `/${BASE_URL}/app/v1/memu-apps`,
      hideLoading: true,
      params
    })
    .then(res => {
      if (res.code == 0) {
        return res.data;
      } else {
        return false;
      }
    });
};
