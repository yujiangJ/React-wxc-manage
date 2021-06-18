import React, { useEffect } from 'react';
import PrivateRoute from '@/compoents/PrivateRoute'
import {Route, Switch} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Index from '@/Layout/index'
import Login from '@/login'
import './App.scss'

import {
  changehostName,
} from '@/store/app'

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.location.host.indexOf("localhost") !== -1) {
      dispatch(changehostName("localhost"));
    } else if (window.location.host.indexOf("crm-manage-i") > -1) {
      // 正式
      dispatch(changehostName("indoor"));
    } else {
      // 测试
      dispatch(changehostName("without"));
    }
  }, [dispatch]);

  return (
    <Switch>
      <Route path='/login' component={Login}/>
      <PrivateRoute path='/' component={Index}/>
    </Switch>
  )
}
