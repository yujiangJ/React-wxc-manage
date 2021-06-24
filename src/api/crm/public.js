import request from "@/utils/request";
import { BASE_URL, CRM_BASE_URL } from "@/api/urlBase";

export const getSaleUsers = datas => {
  return request
    .get({
      url: `${CRM_BASE_URL}/crm/pubsetting/v1/pubsetting/saleusers`,
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
//操作者
export const querySaleusers = (datas, estateId) => {
  return request
    .post({
      url: `${BASE_URL}/sale-user/v1/saleusers/query?estateId=${estateId}`,
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
// 分页查询置业顾问列表
export const getSaleusersList = (datas, estateId) => {
  return request
    .post({
      url: `${BASE_URL}/sale-user/v1/users/page?estateId=${estateId}`,
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
// 不分页获取销售人员数据
export const getSaleNoPageUserList = estateId => {
  return request
    .get({
      url: `${BASE_URL}/sale-user/v1/saleusers?estateId=${estateId}`,
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

// 分配客户
export const clientAllocation = data => {
  return request
    .post({
      url: `${CRM_BASE_URL}/crm/com/v1/assign`,
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

// 上传文件
export const uploadExcalMethods = (data, uploadProgress) => {
  return request
    .postFile({
      url: `${CRM_BASE_URL}/crm/com/v1/import`,
      formData: data,
      hideLoading: true,
      uploadProgress: uploadProgress
    })
    .then(res => {
      if (res.code == 0) {
        return true;
      } else {
        return false;
      }
    });
};

// 失败文件下载
export const dowloadExcal = params => {
  return request
    .get({
      url: `${CRM_BASE_URL}/crm/com/v1/common/excel`,
      params,
      hideLoading: true
    })
    .then(res => {
      if (res.code == 0) {
        return res;
      } else {
        return false;
      }
    });
};

// 判断手机号是否存在
export const vaildPhone = data => {
  return request
    .post({
      url: `${CRM_BASE_URL}/crm/customer/v1/phone-duplicate`,
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
