/**
 * createBy yubiao 20/4/2021
 * 租户管理APi
 */
import request from "@/utils/request";
import { BASE_URL } from "@/api/urlBase";
import { Message } from "element-ui";

// 查看或者编辑租户
export const showOrEditTent = tenantId => {
  return request
    .get({
      url: `/${BASE_URL}/tenant/v1/tenant/${tenantId}`,
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

// 启用禁用租户
export const disabledTent = rowData => {
  return request
    .put({
      url: `/${BASE_URL}/tenant/v1/tenant-status/${rowData.tenantId}`,
      data: {
        status: rowData.status == 0 ? 1 : 0
      },
      hideLoading: true
    })
    .then(res => {
      if (res.code == 0) {
        Message({
          message: rowData.status == 0 ? "启用用户成功" : "禁用用户成功",
          type: "success"
        });
        return true;
      } else {
        return false;
      }
    });
};
// 重置密码
export const resetPassword = rowData => {
  return request
    .post({
      url: `/${BASE_URL}/tenant/v1/tenant-password-reset/${rowData.tenantId}`,
      data: {
        status: rowData.status == 0 ? 1 : 0
      },
      hideLoading: true
    })
    .then(res => {
      if (res.code == 0) {
        Message({
          message: "重置成功",
          type: "success"
        });
        return true;
      } else {
        return false;
      }
    });
};

// 新增用户
export const addTenant = rForm => {
  return request
    .post({
      url: `/${BASE_URL}/tenant/v1/tenant`,
      data: rForm,
      hideLoading: true
    })
    .then(res => {
      if (res.code == 0) {
        Message({
          showClose: true,
          message: "添加成功",
          type: "success"
        });
        return true;
      } else {
        return false;
      }
    });
};

// 编辑租户
export const editTenant = (rForm, tenantId) => {
  return request
    .put({
      url: `/${BASE_URL}/tenant/v1/tenant/${tenantId}`,
      data: rForm,
      hideLoading: true
    })
    .then(res => {
      if (res.code == 0) {
        Message({
          showClose: true,
          message: "修改成功",
          type: "success"
        });
        return true;
      } else {
        return false;
      }
    });
};

// 查看或者编辑合同
export const showOrContract = colVal => {
  return request
    .get({
      url: `/${BASE_URL}/contract/v1/contract/${colVal.contractId}`,
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
// 启用禁用合同
export const disabledContract = (rowData, clickStatus, forbiddenReason) => {
  let data = { updateStatusType: rowData.status != 0 ? 0 : 1 };
  if (clickStatus == "enable") {
    data.forbiddenReason = forbiddenReason;
  }
  return request
    .put({
      url: `/${BASE_URL}/contract/v1/contract-status/${rowData.contractId}`,
      data,
      hideLoading: true
    })
    .then(res => {
      if (res.code == 0) {
        Message({
          message: rowData.status != 0 ? "禁用合同成功" : "启用合同成功",
          type: "success"
        });
        return true;
      } else {
        return false;
      }
    });
};

// 新增合同
export const addContract = rForm => {
  return request
    .post({
      url: `/${BASE_URL}/contract/v1/contract`,
      data: rForm,
      hideLoading: true
    })
    .then(res => {
      if (res.code == 0) {
        Message({
          showClose: true,
          message: "添加成功",
          type: "success"
        });
        return true;
      } else {
        return false;
      }
    });
};

// 编辑合同
export const editContract = (rForm, id) => {
  return request
    .put({
      url: `/${BASE_URL}/contract/v1/contract/${id}`,
      data: rForm,
      hideLoading: true
    })
    .then(res => {
      if (res.code == 0) {
        Message({
          showClose: true,
          message: "修改成功",
          type: "success"
        });
        return true;
      } else {
        return false;
      }
    });
};
