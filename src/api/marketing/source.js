/**
 * createBy wjq 2021/06/02
 * 来源设置 APi
 */
import request from "@/utils/request";
import { CRM_BASE_URL } from "@/api/urlBase";

// 客户来源分页查询
export const getChannelPage = (params = {}) => {
  return request
    .get({
      url: `/${CRM_BASE_URL}/crm/channel/v1/channel-page`,
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
//客户子来源分页
export const getSonChannelPage = (params = {}) => {
  return request
    .get({
      url: `/${CRM_BASE_URL}/crm/channel/v1/subchannel-page`,
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

//获取租户来源
export const getTenantchannelList = (params = {}) => {
  return request
    .get({
      url: `/${CRM_BASE_URL}/crm/channel/v1/tenantchannel-list`,
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

//来源引用(租户来源被项目来源引用)
export const quoteChannel = (data = {}) => {
  return request
    .post({
      url: `/${CRM_BASE_URL}/crm/channel/v1/quote-channel`,
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
//来源引用(租户来源被项目来源引用,分页搜索)
export const getQuoteChannelPage = (params = {}) => {
  return request
    .get({
      url: `/${CRM_BASE_URL}/crm/channel/v1/tentantchannel-page`,
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

//新建来源
export const addSource = data => {
  return request
    .post({
      url: `/${CRM_BASE_URL}/crm/channel/v1/create-channel`,
      data,
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

// 添加修改来源
export const updateSource = (data = {}) => {
  return request
    .put({
      url: `/${CRM_BASE_URL}/crm/channel/v1/update-channel`,
      data,
      hideLoading: true
    })
    .then(res => {
      if (res.code == 0) {
        return res.data || true;
      } else {
        return false;
      }
    });
};

// 查看已引用项目(根据来源ID分页查询项目列表)
export const channelesatePage = (params = {}) => {
  return request
    .get({
      url: `/${CRM_BASE_URL}/crm/channel/v1/channelesate-page`,
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
