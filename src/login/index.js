import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import './style.scss'
export default function Login() {
  const { navTitle, localName } = useSelector(
    (state) => ({
      navTitle: state.app.navTitle,
      localName: state.app.localName
    }),
    shallowEqual
  )

  return (
    <div className="login-box">
    <img className="l-top-img" src="../assets/LoginTop.png" alt="" />
    <img className="l-center-img" src="../assets/loginCenter.png" alt="" />
    <img className="l-bottom-img" src="../assets/loginBottom.png" alt="" />
    <div className="login-header">
      <img src="../assets/logo.png" alt="" />
      <span>{navTitle}</span>
    </div>
    <div className="line"></div>
    <div className="login-wrap trans">
      <span className="wrap-title fl">登录</span>
      <div className="login-auxiliary">
        <div className="rember-name"></div>
        <span></span>
      </div>
    </div>
  </div>
  )
}