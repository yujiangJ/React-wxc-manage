import request from "@/utils/request";
import { CRM_BASE_URL, BASE_URL } from "@/api/urlBase";
import qs from "qs";
export const listLabel = opId => {
  //标签查询
  return request
    .get({
      url: `${CRM_BASE_URL}/crm/custom/v1/listLabel?opId=${opId}`,
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

export const addLabelGroup = data => {
  //添加标签组
  return request
    .post({
      url: `${CRM_BASE_URL}/crm/custom/v1/addLabelGroup`,
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

export const updateLabelGroup = data => {
  //修改标签组
  return request
    .put({
      url: `${CRM_BASE_URL}/crm/custom/v1/updateLabelGroup`,
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

export const deleteLabelGroup = (id, params) => {
  //删除标签组
  let paramsStr = qs.stringify(params);
  return request
    .delete({
      url: `${CRM_BASE_URL}/crm/custom/v1/deleteLabelGroup/${id}?${paramsStr}`,
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

export const addLabel = data => {
  //添加标签
  return request
    .post({
      url: `${CRM_BASE_URL}/crm/custom/v1/addLabel`,
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

export const updateLabel = data => {
  //修改标签
  return request
    .put({
      url: `${CRM_BASE_URL}/crm/custom/v1/updateLabel`,
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

export const deleteLabel = (id, params) => {
  //删除标签
  let paramsStr = qs.stringify(params);
  return request
    .delete({
      url: `${CRM_BASE_URL}/crm/custom/v1/delLabel/${id}?${paramsStr}`,
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

// 获取应用信息
export const getConfig = configInfo => {
  return request
    .get({
      url: `${BASE_URL}/wecom/v1/corpSuiteInfo`,
      params: configInfo,
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

// 保存应用信息
export const saveConfig = configInfo => {
  return request
    .post({
      url: `${BASE_URL}/wecom/v1/configCorpSuite`,
      data: configInfo,
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
