/*
 * @Author: your name
 * @Date: 2021-05-24 10:43:06
 * @LastEditTime: 2021-05-28 18:23:25
 * @LastEditors: Please set LastEditors
 * @Description: 接口管理 api 和 外部应用api
 * @FilePath: \ftd-crm-manage\src\api\marketing\interface.js
 */
import { PORT_BASE_URL } from "@/api/urlBase";
import qs from "qs";
import request from "@/utils/request";
import { Message } from "element-ui";

/***
 * 接口管理
 **/

// 开通能力
export const openOrCloseApi = rowData => {
  return request
    .put({
      url: `/${PORT_BASE_URL}/tenant/manage/product/openOrClose?` + qs.stringify(rowData),
      hideLoading: true
    })
    .then(res => {
      console.log(res);
      if (res.code == 0) {
        Message({
          message: "操作成功",
          type: "success"
        });
        return true;
      } else {
        return false;
      }
    });
};
// 获取开通的能力总数
export const getProductCount = () => {
  return request
    .get({
      url: `/${PORT_BASE_URL}/tenant/manage/product/count`,
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

/***
 * 外部应用
 **/

// 创建外部应用
export const createApplication = rowData => {
  return request
    .post({
      url: `/${PORT_BASE_URL}/application/add?` + qs.stringify(rowData),
      hideLoading: true
    })
    .then(res => {
      if (res.code == 0) {
        Message({
          message: "创建成功",
          type: "success"
        });
        return res.data;
      } else {
        return false;
      }
    });
};
// 获取应用详情
export const getApplicationDetail = id => {
  return request
    .get({
      url: `/${PORT_BASE_URL}/application/detail`,
      hideLoading: true,
      params: {
        id
      }
    })
    .then(res => {
      if (res.code == 0) {
        return res.data;
      } else {
        return false;
      }
    });
};
// 修改编辑
export const setInfo = (url, rowData) => {
  return request
    .put({
      url: `/${PORT_BASE_URL}${url}?` + qs.stringify(rowData),
      hideLoading: false
    })
    .then(res => {
      if (res.code == 0) {
        Message({
          message: "操作成功",
          type: "success"
        });
        return res.data;
      } else {
        return false;
      }
    });
};
// 获取回调地址
export const callbackPathList = rowData => {
  return request
    .get({
      url: `/${PORT_BASE_URL}/application/ability/page`,
      hideLoading: false,
      params: {
        ...rowData
      }
    })
    .then(res => {
      if (res.code == 0) {
        return res.data;
      } else {
        return false;
      }
    });
};
// 删除应用
export const deleteApplication = id => {
  return request
    .delete({
      url: `/${PORT_BASE_URL}/application/delete`,
      hideLoading: true,
      params: {
        id
      }
    })
    .then(res => {
      if (res.code == 0) {
        Message({
          type: "success",
          message: "删除成功!"
        });
        return res.data;
      } else {
        Message({
          type: "error",
          message: "删除失败"
        });
        return false;
      }
    });
};
// 保存应用回调
export const saveConfigCallBack = rowData => {
  return request
    .put({
      url: `/${PORT_BASE_URL}/application/configCallBack`,
      hideLoading: false,
      data: rowData
    })
    .then(res => {
      if (res.code == 0) {
        Message({
          message: "保存成功",
          type: "success"
        });
        return res.data;
      } else {
        return false;
      }
    });
};

// 获取密钥
export const getByTenantId = tenantId => {
  return request
    .get({
      url: `/${PORT_BASE_URL}/application/getByTenantId`,
      hideLoading: true,
      params: {
        tenantId
      }
    })
    .then(res => {
      if (res.code == 0) {
        return res.data;
      } else {
        return false;
      }
    });
};

// 发送验证码
export const verifyCode = rowData => {
  return request
    .get({
      url: `/${PORT_BASE_URL}/application/verifyCode`,
      hideLoading: false,
      params: {
        ...rowData
      }
    })
    .then(res => {
      if (res.code == 0) {
        return res.data;
      } else {
        return false;
      }
    });
};
// 重置私玥
export const resetCode = rowData => {
  return request
    .put({
      url: `/${PORT_BASE_URL}/application/verifyCode?` + qs.stringify(rowData),
      hideLoading: false
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
