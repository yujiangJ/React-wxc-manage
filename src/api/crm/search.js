import request from "@/utils/request";
import { CRM_BASE_URL } from "@/api/urlBase";

// 全局搜索页面
export const search = datas => {
  return request
    .post({
      url: `${CRM_BASE_URL}/crm/customer/v1/whole/find`,
      data: datas,
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
