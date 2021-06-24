import request from "@/utils/request";
import { CRM_BASE_URL } from "@/api/urlBase";
// 案场（跟进）设置
export const getSalesetting = estateId => {
  return request
    .get({
      url: `${CRM_BASE_URL}/crm/salesetting/v1/salesetting?estateId=${estateId}`,
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

export const setSalesetting = (data, estateId) => {
  return request
    .post({
      url: `${CRM_BASE_URL}/crm/salesetting/v1/salesetting?estateId=${estateId}`,
      data,
      hideLoading: true
    })
    .then(res => {
      if (res.code == 0) {
        return true;
      } else {
        return false;
      }
    });
};
