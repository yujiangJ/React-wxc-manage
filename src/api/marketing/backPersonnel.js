/**
 * createBy yubiao 20/4/2021
 * 菜单管理APi
 */
import request from "@/utils/request";
import { BASE_URL } from "@/api/urlBase";

// 查看或者编辑角色
export const showOrEditRole = id => {
  return request
    .get({
      url: `/${BASE_URL}/role/v1/role/${id}`,
      hideLoading: true
    })
    .then(res => {
      if (res.code == 0) {
        return res.data;
      } else {
        return false;
      }
    });
};

// export
export const vaildUserName = account => {
  return request
    .get({
      url: `/${BASE_URL}/user/v1/user-account-duplicate?account=${account}`,
      hideLoading: true
    })
    .then(res => {
      if (res.code == 0) {
        return res.data;
      } else {
        return false;
      }
    });
};
