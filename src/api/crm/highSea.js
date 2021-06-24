import request from "@/utils/request";
import { CRM_BASE_URL } from "@/api/urlBase";

// 获取客户详情
export const getUserDetail = params => {
  return request
    .get({
      url: `${CRM_BASE_URL}/crm/customer/v1/detail`,
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

export const setClientDetail = datas => {
  return request
    .put({
      url: `${CRM_BASE_URL}/crm/customer/v1/edit`,
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
// 查询导入结果
export const getExportResult = params => {
  return request
    .post({
      url: `${CRM_BASE_URL}/crm/com/v1/excels`,
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
// 公海设置-wjq
export const pubsetting = estateId => {
  return request
    .get({
      url: `${CRM_BASE_URL}/crm/pubsetting/v1/pubsetting?estateId=${estateId}`,
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

export const updatePubsetting = (data, estateId) => {
  return request
    .post({
      url: `${CRM_BASE_URL}/crm/pubsetting/v1/pubsetting?estateId=${estateId}`,
      removeEmpty: false,
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

// 移入垃圾箱
export const setRemove = datas => {
  return request
    .post({
      url: `${CRM_BASE_URL}/crm/com/v1/release`,
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

// 获取跟进记录
export const getFloowData = params => {
  return request
    .get({
      url: `${CRM_BASE_URL}/crm/customer/v1/follow`,
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

// 获取操作日志
export const getLogData = params => {
  return request
    .get({
      url: `${CRM_BASE_URL}/crm/com/v1/log`,
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

// 获取客户购房意向
export const getpurposeHouse = params => {
  return request
    .get({
      url: `${CRM_BASE_URL}/crm/cus/purpose/v1/query`,
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

// 通过项目ID查询来源树结构
export const getChannelTree = params => {
  return request
    .get({
      url: `${CRM_BASE_URL}/crm/channel/v1/channelTree`,
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
