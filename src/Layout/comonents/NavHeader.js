/*
 * @Description:
 * @Autor: yubiao
 * @Date: 2021-06-17 15:53:08
 * @LastEditors: yubiao
 * @LastEditTime: 2021-06-24 10:49:01
 */
import loginStyle from "../style.scss";
import imgUrlJSON from "@/assests/iconUrl.js";
import { useSelector, useDispatch } from "react-redux";
import { getProject } from "@/api/marketing/project";
import { changeAppData, UserMessage } from "@/login/store/action";
import { LeftOutlined } from "@ant-design/icons";
import { Menu, Dropdown, Avatar } from "antd";
import React, { useEffect } from "react";

export default function NavHeader() {
  const { navTitle, useAPPkey, headerApp, appId, userInfo } = useSelector((state) => ({
    navTitle: state.app.navTitle,
    useAPPkey: state.user.useAPPkey,
    headerApp: state.user.headerApp,
    appId: state.user.appId,
    userInfo: state.user.userInfo
  }));
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(UserMessage());
    // eslint-disable-next-line
  }, [])
  // 获取用户信息
  const handleSelect = (key) => {
    if (appId === key) {
      return;
    }
    dispatch(changeAppData({ appId: "0", appKey: "platform" }));
    localStorage.removeItem("basicOpId");
    localStorage.removeItem("estateId");
  };
  const openNewApp = async (item) => {
    if (item.appPermit === "scrm") {
      return;
    }
    let projectData = await getProject({ appId: item.appId, opId: this.opId });
    if (!projectData || projectData.length === 0) {
      this.$message({
        message: "您没有此应用的权限,请为此应用配置项目",
        type: "error",
      });
      return;
    }
    if (localStorage.getItem("estateId")) {
      localStorage.removeItem("estateId");
    }
    if (
      window.location.host.indexOf("localhost") > -1 ||
      window.location.host.indexOf("127.0.0.1") > -1
    ) {
      window.location.href = `https://crm-manage.dev.wangxiaobao.com/${item.forwardPath}?opId=${this.opId}/#/`;
    } else {
      window.location.href = `//${window.location.host}/${item.forwardPath}?opId=${this.opId}/#/`;
    }
  };
  const showChangeApp = () => {
    if (useAPPkey !== "platform") {
      return (
        <div className="appList">
          <div class="appHome" onClick={handleSelect(headerApp[0].appId)}>
            <div className="icons-list">
              <LeftOutlined />
            </div>
            <span>返回系统管理</span>
          </div>
          {headerApp.forEach((item, index) => {
            return (
              <div className="appBox" key={index}>
                <div className={loginStyle.appLine}></div>
                <span
                  onClick={openNewApp(item)}
                  className={
                    appId === item.appId
                      ? (loginStyle.appBtnHover, loginStyle.appBtn)
                      : ""
                  }
                >
                  <span>{item.name}</span>
                </span>
              </div>
            );
          })}
        </div>
      );
    }
  };
  const menu = (
    <Menu>
      <Menu.Item  key="0">
        <span>修改密码</span>
      </Menu.Item>
      <Menu.Item  key="1">
        <span>退出</span>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className={loginStyle.navbar}>
      <div className={loginStyle.headerMenu}>
        <div className={loginStyle.sidebarLogoLink}>
          <img
            src={
              useAPPkey !== "platform" ? imgUrlJSON.logoWhite : imgUrlJSON.logo
            }
            alt=""
          />
          <span>{navTitle}</span>
        </div>
        {showChangeApp()}
      </div>
      <div className={loginStyle.rightMenu}>
        <Dropdown overlay={menu} placement="bottomLeft" arrow>
          <div>
            <Avatar src={imgUrlJSON.iconActive} size={52}></Avatar>
            <span>{userInfo.userName}</span>
          </div>
        </Dropdown>
      </div>
    </div>
  );
}
