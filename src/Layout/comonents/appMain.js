/*
 * @Description: 
 * @Autor: yubiao
 * @Date: 2021-06-23 10:10:45
 * @LastEditors: yubiao
 * @LastEditTime: 2021-06-24 16:31:55
 */
import React, {Suspense, lazy, useEffect} from 'react'
import { useSelector } from "react-redux";
import { withRouter, Switch, Redirect } from 'react-router-dom'
import { PrivateRoute } from '@/components/PrivateRoute'

// 超级管理员 
const tenantPage = lazy(() => import('@/page/admin/tenant/tenant'));

export default withRouter(function ContentMain() {
  
  const { firstPath } = useSelector((state) => ({
    firstPath: state.user.firstPath
  }));
  useEffect(()=> {
  }, [firstPath])
  return (
    <div style={{padding: 16, position: 'relative'}}>
      <Suspense fallback={<div>loading</div>}>
        <Switch>
          <PrivateRoute exact path='/tenant/index' component={tenantPage}/>
          <Redirect exact from='/' to={firstPath} />
        </Switch>
      </Suspense>
    </div>
  )
})