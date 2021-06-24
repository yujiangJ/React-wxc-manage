import request from "@/utils/request";
import { CRM_BASE_URL } from "@/api/urlBase";

// 客户统计
export const composition = datas => {
  //客户构成
  return request
    .get({
      url: `${CRM_BASE_URL}/crm/custom/v1/overall/composition`,
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

//趋势统计
export const statistics = datas => {
  return request
    .get({
      url: `${CRM_BASE_URL}/crm/custom/v1/trend/statistics`,
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
//客户跟进统计卡片
export const cards = (estateId, datas) => {
  return request
    .post({
      url: `${CRM_BASE_URL}/crm/custom/v1/follow/cards?estateId=${estateId}`,
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

//团队列表
export const saleteams = (estateId, datas) => {
  return request
    .post({
      url: `${CRM_BASE_URL}/crm/custom/v1/saleteams?estateId=${estateId}`,
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

//来访明细列表
export const comeDetails = (estateId, datas) => {
  return request
    .post({
      url: `${CRM_BASE_URL}/crm/custom/v1/follow/details?estateId=${estateId}`,
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

//认筹明细列表
export const preDetails = (estateId, datas) => {
  return request
    .post({
      url: `${CRM_BASE_URL}/crm/custom/v1/follow/pre-details?estateId=${estateId}`,
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

//认购明细列表
export const subDetails = (estateId, datas) => {
  return request
    .post({
      url: `${CRM_BASE_URL}//crm/custom/v1/follow/sub-details?estateId=${estateId}`,
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

//签约明细列表
export const signDetails = (estateId, datas) => {
  return request
    .post({
      url: `${CRM_BASE_URL}//crm/custom/v1/follow/sign-details?estateId=${estateId}`,
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
