/**
 * createBy yubiao 26/4/2021
 * 项目 APi
 */
import request from "@/utils/request";
import { BASE_URL } from "@/api/urlBase";

// 获取菜单中应用列表
export const getProject = params => {
  return request
    .get({
      url: `/${BASE_URL}/estate-sale/v1/op-estate-sales`,
      params,
      hideLoading: true
    })
    .then(res => {
      if (res.code === '0') {
        return res.data;
      } else {
        return false;
      }
    });
};

// 获取项目列表
export const getProjectList = params => {
  return request
    .get({
      url: `/${BASE_URL}/estate-sale/v1/estate-sale-page`,
      params
    })
    .then(res => {
      if (res.code === '0') {
        return res.data;
      } else {
        return false;
      }
    });
};

// 更改房产状态
export const changeStatus = (estateId, data) => {
  return request
    .put({
      url: `/${BASE_URL}/estate-sale/v1/estate-sale-status/${estateId}`,
      data,
      hideLoading: true
    })
    .then(res => {
      if (res.code === '0') {
        return true;
      } else {
        return false;
      }
    });
};

// 编辑项目
export const editProject = (estateId, data) => {
  return request
    .put({
      url: `/${BASE_URL}/estate-sale/v1/estate-sale/${estateId}`,
      data,
      hideLoading: true
    })
    .then(res => {
      if (res.code === '0') {
        return true;
      } else {
        return false;
      }
    });
};

// 新增项目
export const addProject = data => {
  return request
    .post({
      url: `/${BASE_URL}/estate-sale/v1/estate-sale`,
      data,
      hideLoading: true
    })
    .then(res => {
      if (res.code === '0') {
        return true;
      } else {
        return false;
      }
    });
};

// 获取项目详情
export const getProjectMessage = estateId => {
  return request
    .get({
      url: `/${BASE_URL}/estate-sale/v1/estate-sale/${estateId}`,
      hideLoading: true
    })
    .then(res => {
      if (res.code === '0') {
        return res.data;
      } else {
        return false;
      }
    });
};

// 获取所有应用以及合同列表
export const getAPPContractlist = params => {
  return request
    .get({
      url: `/${BASE_URL}/app/v1/app-contracts`,
      params,
      hideLoading: true
    })
    .then(res => {
      if (res.code === '0') {
        return res.data;
      } else {
        return false;
      }
    });
};

// 查询租户下全项目列表(只查项目，不带分期)
export const allProjects = (params = {}) => {
  return request
    .get({
      url: `/${BASE_URL}/estate-sale/v1/all-estate-projects`,
      params,
      hideLoading: true
    })
    .then(res => {
      if (res.code === '0') {
        return res.data;
      } else {
        return false;
      }
    });
};

// 查询租户下全项目列表（项目带分期）
export const vagueProjects = params => {
  return request
    .get({
      url: `/${BASE_URL}/estate-sale/v1/vague-estate-projects`,
      params,
      hideLoading: true
    })
    .then(res => {
      if (res.code === '0') {
        return res.data;
      } else {
        return false;
      }
    });
};
// 获取外部已关联关联项目
export const getEstateProject = params => {
  return request
    .get({
      url: `/${BASE_URL}/estate-sale/v1/estate-project-bind-exts`,
      params,
      hideLoading: true
    })
    .then(res => {
      if (res.code === '0') {
        return res.data;
      } else {
        return false;
      }
    });
};
// 获取外部未关联的项目
export const getNoEstateProject = params => {
  return request
    .get({
      url: `/${BASE_URL}/estate-sale/v1/estate-project-unbind-exts`,
      params,
      hideLoading: true
    })
    .then(res => {
      if (res.code === '0') {
        return res.data;
      } else {
        return false;
      }
    });
};

// 新增分期
export const addAging = data => {
  return request
    .post({
      url: `/${BASE_URL}/estate-sale/v1/estate-stage`,
      data,
      hideLoading: true
    })
    .then(res => {
      if (res.code === '0') {
        return true;
      } else {
        return false;
      }
    });
};
// 更新分期
export const editAging = (estateId, data) => {
  return request
    .put({
      url: `/${BASE_URL}/estate-sale/v1/estate-stage/${estateId}`,
      data,
      hideLoading: true
    })
    .then(res => {
      if (res.code === '0') {
        return true;
      } else {
        return false;
      }
    });
};

// 判断外部项目ID是都存在
export const vaildID = data => {
  return request
    .post({
      url: `${BASE_URL}/estate-sale/v1/check_manual_ext_estate`,
      data,
      hideLoading: true
    })
    .then(res => {
      if (res.code === '0') {
        return res.data;
      } else {
        return false;
      }
    });
};
