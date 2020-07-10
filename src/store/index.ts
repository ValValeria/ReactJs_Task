import { createStore, applyMiddleware, compose } from "redux";
import reducer from './reducer'
import createSagaMiddleWare from 'redux-saga'
import apisaga from './sagas'
const initsaga=createSagaMiddleWare();
const storeEnhancers:Function = (Object.entries(window).find(([key,_value])=>key==="__REDUX_DEVTOOLS_EXTENSION_COMPOSE__")?.[1]|| compose) as Function;

const store=createStore(
      reducer,
      storeEnhancers(
          applyMiddleware(initsaga)
      ) 
    );
initsaga.run(apisaga);
export default store