/*
 * @Description: 
 * @Autor: yubiao
 * @Date: 2021-06-17 10:22:42
 * @LastEditors: yubiao
 * @LastEditTime: 2021-06-24 16:31:07
 */
import React from 'react'
import { Route, Redirect, } from 'react-router-dom'
import { isAuthenticated } from '../../utils/Session'

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={(props) => {
    return isAuthenticated()
      ? <Component {...props} />
      : <Redirect to={{
        pathname: '/login',
        state: {from: props.location}
      }}/>
  }}/>
)

const LoginRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={(props) => {
    return isAuthenticated()
    ? <Redirect to={{
      pathname: '/',
      state: {from: props.location}
    }}/>
    : <Component {...props} />
  }}/>
)

export{
  PrivateRoute,
  LoginRoute
}