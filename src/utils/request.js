/*
 * @Description: axios 封装
 * @Autor: yubiao
 * @Date: 2021-06-22 10:25:50
 * @LastEditors: yubiao
 * @LastEditTime: 2021-06-22 15:02:14
 */
import axios from "axios";
import { message, Spin } from 'antd';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import qs from "qs";
import Common from "./common";

// 当前正在请求的数量
let requestCount = 0

// 显示loading
function showLoading (tip) {
  if (requestCount === 0) {
    var dom = document.createElement('div')
    dom.setAttribute('id', 'loading')
    document.body.appendChild(dom)
    ReactDOM.render(<Spin tip={tip || '加载中...'} size="large"/>, dom)
  }
  requestCount++
}

// 隐藏loading
function hideLoadingBox () {
  requestCount--
  if (requestCount === 0) {
    document.body.removeChild(document.getElementById('loading'))
  }
}

const method = ["get", "post", "delete", "put", "head"];
const request = {};

/* eslint-disable */
method.forEach(item => {
  request[item] = ({
    url,
    data,
    params,
    contentType = Common.getContentType.json,
    hideLoading = true,
    tip = "加载中...",
    removeEmpty = true,
    serviceName = Common.getServiceName.default,
    responseType
  }) =>
    new Promise((resolve, reject) => {
      if (!hideLoading) {
        showLoading(tip)
      }
      const config = {
        method: item,
        baseURL: serviceName,
        url: `/api${url}`,
        headers: { "Content-Type": contentType },
        paramsSerializer: function(params) {
          return qs.stringify(params);
        },
        // timeout: 1000 * 15,//是否需要判断超时？？
        responseType
      };
      if (data) {
        if (removeEmpty) {
          Common.removeEmptyProp(data);
        }
        if ([Common.getContentType.json, Common.getContentType.file].includes(contentType)) {
          config.data = data;
        } else {
          config.data = qs.stringify(data);
        }
      }
      if (params) {
        if (removeEmpty) {
          Common.removeEmptyProp(params);
        }
        config.params = params;
      }
      if (item === "get") {
        if (config.params) {
          Object.assign(config.params, { _rnd: Math.random() });
        } else {
          config.params = {
            _rnd: Math.random()
          };
        }
      }
      axios(config)
        .then(({ data }) => {
          if (data.code === "-1" || data.code === "-1001") {
            localStorage.clear();
            // window.location.href = "/";
          }
          if (data.code !== "0") {
            message.warning(data.msg || "发生异常，请重试");
          }
          resolve(data);
        })
        .catch(err => {
          if (err.response) {
            message.warning(err.response.data.msg || "发生异常，请重试");
          } else {
            message.warning('未连接到互联网，请检查');
          }
          reject(err);
        })
        .finally(() => {
          setTimeout(() => {
            hideLoadingBox();
          }, 200);
        });
    });
});
/* eslint-enable */

request.postFile = ({
  url,
  formData,
  hideLoading = false,
  tip = "上传中...",
  uploadProgress,
  serviceName = Common.getServiceName.local
}) =>
  new Promise((resolve, reject) => {
    if (!hideLoading) {
      showLoading(tip)
    }
    axios
      .post(
        `/api${url}`, 
        formData, 
        {
          baseURL: serviceName,
          headers: {
            "Content-Type": Common.getContentType.file
          },
          onUploadProgress(e) {
            if (typeof uploadProgress === "function") {
              uploadProgress(e);
            }
          }
        })
      .then(({ data }) => {
        if (data.code === "-1001" || data.code === "-1") {
          localStorage.clear();
          // window.location.href = "/";
        }
        resolve(data);
      })
      .catch(err => {
        message.error("上传失败！");
        reject(err);
      })
      .finally(() => {
        setTimeout(() => {
          hideLoadingBox();
        }, 200);
      });
  });

request.download = ({
  url,
  formData,
  hideLoading = false,
  tip = "上传中...",
  serviceName = Common.getServiceName.local,
  contentType = Common.getContentType.json
}) =>
  new Promise((resolve, reject) => {
    if (!hideLoading) {
      showLoading(tip)
    }
    axios
      .get(`/api${url}`, formData, {
        baseURL: serviceName,
        headers: {
          "Content-Type": contentType
        },
        responseType: "blob"
      })
      .then(({ data }) => {
        resolve(data);
      })
      .catch(err => {
        message.error("下载失败");
        reject(err);
      })
      .finally(() => {
        setTimeout(() => {
          hideLoadingBox();
        }, 200);
      });
  });

Component.prototype.$request = request;

export default request;
