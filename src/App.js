/*
 * @Description: 
 * @Autor: yubiao
 * @Date: 2021-06-16 16:44:37
 * @LastEditors: yubiao
 * @LastEditTime: 2021-06-23 14:10:39
 */
import React from 'react';
import {PrivateRoute, LoginRoute} from '@/components/PrivateRoute'
import { useDispatch } from "react-redux";
import { Switch} from 'react-router-dom'
import Index from '@/Layout/index'
import Login from '@/login'
import './App.css'

import {
  changehostName,
} from '@/store/app'

export default function App() {
  const dispatch = useDispatch();

  if (window.location.host.indexOf("localhost") !== -1) {
    dispatch(changehostName("localhost"));
  } else if (window.location.host.indexOf("crm-manage-i") > -1) {
    // 正式
    dispatch(changehostName("indoor"));
  } else {
    // 测试
    dispatch(changehostName("without"));
  }

  return (
    <Switch>
      <LoginRoute path='/login' component={Login}/>
      <PrivateRoute path='/' component={Index}/>
    </Switch>
  )
}
