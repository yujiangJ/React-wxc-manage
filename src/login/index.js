import React, { useState, useEffect } from "react";
import { shallowEqual, useSelector } from "react-redux";
import login from "./style.scss";
import imgUrlJSON from "../assests/iconUrl.js";
import { Form, Input, Button } from "antd";
import { Select } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

export default function Login() {
  const { Option } = Select;
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

  const [form, setform] = useState({account: "", password: "", tenantNo: "", loginType: localName === "without" ? 0 : 1});

  useEffect(() => {
  }, [form]);


  function handleChange(value) {
    setform({...form, loginType: parseInt(value)});
  }

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const showSelect = ()=> {
    if(localName === 'localhost') {
      return  <Select dropdownClassName="fr" value={form.loginType}  onChange={handleChange}>
        {changeData.map(item => (
          <Option key={item.value} value={item.value}>{item.label}</Option>
        ))}
    </Select>
    }else{
      return
    }
  };
  const showTentNo = () => {
    debugger
    if(localName === 'without' || form.loginType === 1) {
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
    <div className={login["login-box"]}>
      <img className={login["l-top-img"]} src={imgUrlJSON.LoginTop} alt="" />
      <img
        className={login["l-center-img"]}
        src={imgUrlJSON.loginCenter}
        alt=""
      />
      <img
        className={login["l-bottom-img"]}
        src={imgUrlJSON.loginBottom}
        alt=""
      />
      <div className={login["login-header"]}>
        <img src={imgUrlJSON.logo} alt="" />
        <span>{navTitle}</span>
      </div>
      <div className={login["line"]}></div>
      <div className={`${login["login-wrap"]} ${login.trans}`}>
        <div style={{marginBottom: 40}}>
          <span className={`${login["wrap-title"]} fl`}>登录</span>
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
              placeholder="Username"
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
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
