import React, { useState, useEffect } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import loginStyle from "./style.scss";
import imgUrlJSON from "../assests/iconUrl.js";
import { Form, Input, Button } from "antd";
import { Select } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { userLogin } from './store/action';
let Base64 = require("js-base64").Base64;

export default function Login() {
  const { Option } = Select;
  const dispatch = useDispatch()
  const changeData  = [{
    value: 0,
    label: "平台登录"
  },
  {
    value: 1,
    label: "租户登录"
  }];

  const { navTitle, localName } = useSelector(
    (state) => ({
      navTitle: state.app.navTitle,
      localName: state.app.localName,
    }),
    shallowEqual
  );

  let history = useHistory();

  const [loginType, setloginType] = useState(localName === "without" ? 0 : 1);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
  }, [loginType]);

  const onFinish = (values) => {
    setLoading(true);
    let formData = JSON.parse(JSON.stringify(values));
    formData.password = Base64.encode(formData.password);
    formData.loginType = loginType;
    dispatch(userLogin(formData)).then((res) => {
      setLoading(false);
      history.push('/');
    })
  };
  const showSelect = ()=> {
    if(localName === 'localhost') {
      return  <Select dropdownClassName="fr" value={loginType}  onChange = {(e) => { console.log(e); setloginType(parseInt(e))}}>
        {changeData.map(item => (
          <Option key={item.value} value={item.value}>{item.label}</Option>
        ))}
    </Select>
    }else{
      return
    }
  };
  const showTentNo = () => {
    if(localName === 'without' || loginType === 1) {
      return  <Form.Item
      name="tenantNo"
      rules={[{ required: true, message: "请输入租户号" }]}
    >
      <Input
        size="large"
        prefix={<LockOutlined className="site-form-item-icon" />}
        placeholder="租户号"
      />
    </Form.Item>
    } else {
      return
    }
  };
  return (
    <div className={loginStyle["login-box"]}>
      <img className={loginStyle["l-top-img"]} src={imgUrlJSON.LoginTop} alt="" />
      <img
        className={loginStyle["l-center-img"]}
        src={imgUrlJSON.loginCenter}
        alt=""
      />
      <img
        className={loginStyle["l-bottom-img"]}
        src={imgUrlJSON.loginBottom}
        alt=""
      />
      <div className={loginStyle["login-header"]}>
        <img src={imgUrlJSON.logo} alt="" />
        <span>{navTitle}</span>
      </div>
      <div className={loginStyle["line"]}></div>
      <div className={`${loginStyle["login-wrap"]} ${loginStyle.trans}`}>
        <div style={{marginBottom: 40}}>
          <span className={`${loginStyle["wrap-title"]} fl`}>登录</span>
          {showSelect()}
        </div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          {showTentNo()}
          <Form.Item
            name="account"
            rules={[{ required: true, message: "请输入账号" }]}
          >
            <Input
              size="large"
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="账号"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "请输入密码" }]}
          >
            <Input
              size="large"
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="密码"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              loading={loading}
              htmlType="submit"
              className="login-form-button"
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
