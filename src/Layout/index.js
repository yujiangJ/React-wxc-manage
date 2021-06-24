/*
 * @Description: 
 * @Autor: yubiao
 * @Date: 2021-06-17 13:53:08
 * @LastEditors: yubiao
 * @LastEditTime: 2021-06-24 16:23:15
 */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Layout, Breadcrumb } from 'antd';
import AppMain from './comonents/appMain';
import NavHeader from './comonents/NavHeader';
import Sidebar from './comonents/sildebar/Sidebar';
import layoutStyle from './style.scss';
import imgUrlJSON from "../assests/iconUrl.js";
import { getAppMenus } from "@/login/store/action";

const {Sider, Header, Content} = Layout

export default function Index() {
  // const [collapsed, setcollapsed] = useState(false);
  const { appId, useAPPkey } = useSelector((state) => ({
    appId: state.user.appId,
    useAPPkey: state.user.useAPPkey
  }));
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(getAppMenus({appId: appId, permit: useAPPkey}))
    // eslint-disable-next-line
  }, [])
  return (
    <Layout className={layoutStyle.appWrapper}>
      <Header style={styles.header}>
        <img className={layoutStyle.backHeader} src={imgUrlJSON.headerBack} alt="" />
        <NavHeader />
        <span className="line"></span>
      </Header>
      <Layout className={layoutStyle.appMaincontent}>
        <Sider style={styles.header}>
          <Sidebar/>
        </Sider>
        <Layout>
          <Breadcrumb></Breadcrumb>
          <Content>
            <AppMain/>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

const styles = {
  header: {
    backgroundColor: "#ffffff",
    padding: '0px'
  },
}