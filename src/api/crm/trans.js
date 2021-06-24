import request from "@/utils/request";
import { CRM_BASE_URL } from "@/api/urlBase";
// 转化成交相关功能
export const getOrderList = params => {
  return request
    .get({
      url: `${CRM_BASE_URL}/crm/cus/order/v1/list`,
      params,
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

export const getOrderDetail = params => {
  return request
    .get({
      url: `${CRM_BASE_URL}/crm/cus/order/v1/detail`,
      params,
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

export const getSaleUsers = params => {
  return request
    .get({
      url: `${CRM_BASE_URL}/crm/pubsetting/v1/pubsetting/saleusers`,
      params,
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
