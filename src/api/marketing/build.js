/**
 * createBy wujianqiang 25/45/2021
 * 项目 APi
 */
import request from "@/utils/request";
import { BASE_URL } from "@/api/urlBase";
import qs from "qs";

// 获取项目楼栋
export const getBuildList = params => {
  return request
    .get({
      url: `/${BASE_URL}/estate-house/v1/query-build-list`,
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

// 获取房源
export const getHoseList = params => {
  return request
    .get({
      url: `/${BASE_URL}/estate-house/v1/query-build-house-list`,
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

//查询房间
export const queryHouse = params => {
  return request
    .get({
      url: `/${BASE_URL}/estate-house/v1/query-house-detail`,
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

//编辑楼栋
export const editBuild = data => {
  return request
    .post({
      url: `/${BASE_URL}/estate-house/v1/edit-build`,
      data,
      removeEmpty: false,
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

//编辑房间
export const editHouse = data => {
  return request
    .post({
      url: `/${BASE_URL}/estate-house/v1/edit-house`,
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

//查询导入结果
export const getExcel = params => {
  let paramsStr = qs.stringify(params);
  return request
    .post({
      url: `/${BASE_URL}/estate-house/v1/excel?${paramsStr}`,
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

//下载exc & (获取模板链接:不需要传id)
export const downloadCommon = params => {
  return request
    .get({
      url: `/${BASE_URL}/estate-house/v1/common`,
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

//上传exc
export const importExc = (data, uploadProgress) => {
  return request
    .postFile({
      url: `${BASE_URL}/estate-house/v1/import`,
      formData: data,
      hideLoading: true,
      uploadProgress: uploadProgress
    })
    .then(res => {
      return res;
    });
};
