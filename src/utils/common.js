  /* eslint-disable */
export default {
  get getServiceName() {
    return {
      local: "/",
      default: "",
      customer: "/customer-flow",
      fileserver: "/fileserver",
      authority: "/authority",
    };
  },

  get getContentType() {
    return {
      form: "application/x-www-form-urlencoded",
      file: "multipart/form-data",
      json: "application/json",
      binary: "application/octet-stream",
    };
  },

  // 字符串转json
  formatToJSON(str, defaultValue = []) {
    let obj;
    try {
      obj = JSON.parse(str);
      return obj;
    } catch (err) {
      return defaultValue;
    }
  },

  // 移除对象的空字符串,数组的空数组等
  removeEmptyProp(data) {
    if (typeof data === "object") {
      if (Array.isArray(data)) {
        data.forEach((item) => {
          this.removeEmptyProp(item);
        });
      } else {
        Object.keys(data).forEach((key) => {
          if (
            data[key] === null ||
            data[key] === undefined ||
            data[key] === ""
          ) {
            delete data[key];
          } else if (typeof data[key] === "object") {
            if (Object.keys(data[key]).length === 0) {
              delete data[key];
            } else {
              this.removeEmptyProp(data[key]);
            }
          }
        });
      }
    }
  },

  msToDate(ms, type = "dateTime") {
    const datetime = new Date(ms);
    const year = datetime.getFullYear();
    const month = datetime.getMonth();
    const date = datetime.getDate();
    const hour = datetime.getHours();
    const minute = datetime.getMinutes();
    const second = datetime.getSeconds();

    const resultDateTime = `${year}-${
      month + 1 >= 10 ? month + 1 : `0${month + 1}`
    }-${date + 1 <= 10 ? `0${date}` : date} ${
      hour + 1 <= 10 ? `0${hour}` : hour
    }:${minute + 1 <= 10 ? `0${minute}` : minute}:${
      second + 1 <= 10 ? `0${second}` : second
    }`;
    const resultDate = `${year}-${
      month + 1 >= 10 ? month + 1 : `0${month + 1}`
    }-${date + 1 <= 10 ? `0${date}` : date}`;

    if (type === "dateTime") {
      return resultDateTime;
    }
    return resultDate;
  },
  getDate(time) {
    if (!time) {
      return "";
    }
    const timer = new Date(time);
    return `${timer.getMonth() + 1}/${timer.getDate()}`;
  },
  getMonth(time) {
    if (!time) {
      return "";
    }

    return new Date(time).getMonth() + 1;
  },
  pieChartTemplateOption: () => ({
    color: ["#10D1B4", "#00B2EE", "#00CE61", "#A485FA", "#F87B5A", "#F7CD23"],
    tooltip: {
      trigger: "item",
      formatter: "{b} : {c} ({d}%)",
    },
    legend: {
      bottom: 10,
      left: "center",
      data: [],
    },
    series: [
      {
        type: "pie",
        radius: "65%",
        center: ["50%", "50%"],
        selectedMode: "single",
        data: [],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  }),

  // 转换https
  urlToHttps(obj, propName) {
    if (!obj) {
      return;
    }
    if (Array.isArray(obj)) {
      obj.forEach((item) => {
        if (item[propName]) {
          item[propName] = item[propName].replace("http://", "https://");
        }
      });
    } else if (typeof obj === "object") {
      if (obj[propName]) {
        obj[propName] = obj[propName].replace("http://", "https://");
      }
    } else if (typeof obj === "string") {
      if (obj) {
        obj = obj.replace("http://", "https://");
      }
    }
  },
  GetRequest() {
    let url = window.location.href; //获取url中"?"符后的字串
    console.log("url数据", url);
    let theRequest = new Object();
    if (url.indexOf("?") != -1) {
      let str = url.split("/#/")[0];
      let strs = str.split("?");
      for (var i = 0; i < strs.length; i++) {
        theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
      }
    }
    return theRequest;
  },
};
