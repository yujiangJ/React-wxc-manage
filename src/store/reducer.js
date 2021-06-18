import { reducer as appReducer } from './app';
// 多个reducer合并
const cRducer = {
  app: appReducer,
};

export default cRducer;