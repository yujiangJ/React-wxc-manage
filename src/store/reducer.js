/*
 * @Description: 
 * @Autor: yubiao
 * @Date: 2021-06-18 10:03:48
 * @LastEditors: yubiao
 * @LastEditTime: 2021-06-23 09:51:39
 */
import { reducer as appReducer } from './app';
import { reducer as userReducer } from '@/login/store';
// 多个reducer合并
const cRducer = {
  app: appReducer,
  user: userReducer,
};

export default cRducer;