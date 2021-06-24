import request from "@/utils/request";
import { CRM_BASE_URL } from "@/api/urlBase";
import qs from "qs";
// 字段设置

//获取客户字段集合（备用字，选中）
export const getFields = datas => {
  return request
    .get({
      url: `${CRM_BASE_URL}/crm/field/v1/cus-fields`,
      params: datas,
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

export const addField = (estateId, datas) => {
  //新增字段
  return request
    .post({
      url: `${CRM_BASE_URL}/crm/field/v1/cus-field?estateId=${estateId}`,
      data: datas,
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
export const putField = (fieldId, params, datas) => {
  //修改字段
  let paramsStr = qs.stringify(params);
  return request
    .put({
      url: `${CRM_BASE_URL}/crm/field/v1/cus-field/${fieldId}?${paramsStr}`,
      data: datas,
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

export const detailField = (cusFieldId, params) => {
  //字段详情
  let paramsStr = qs.stringify(params);
  return request
    .get({
      url: `${CRM_BASE_URL}/crm/field/v1/cus-field/${cusFieldId}?${paramsStr}`,
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

export const bindField = (cusFieldId, params) => {
  //选用备选
  let paramsStr = qs.stringify(params);
  return request
    .post({
      url: `${CRM_BASE_URL}/crm/field/v1/bind-cus-field/${cusFieldId}?${paramsStr}`,
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

//必填修改
export const changeRequiredField = (cusEstateFieldId, params) => {
  let paramsStr = qs.stringify(params);
  return request
    .post({
      url: `${CRM_BASE_URL}/crm/field/v1/field-require-status/${cusEstateFieldId}?${paramsStr}`,
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

//移除选中字段
export const unBindField = (cusEstateFieldId, params) => {
  let paramsStr = qs.stringify(params);
  return request
    .post({
      url: `${CRM_BASE_URL}/crm/field/v1/unbind-cus-field/${cusEstateFieldId}?${paramsStr}`,
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

//上下移选中字段
export const moveField = (cusEstateFieldId, params) => {
  let paramsStr = qs.stringify(params);
  return request
    .post({
      url: `${CRM_BASE_URL}/crm/field/v1/move-field/${cusEstateFieldId}?${paramsStr}`,
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
