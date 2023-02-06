import { legacy_createStore as createStore, Store, combineReducers, compose, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reduxPromise from "redux-promise";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import auth from "./modules/auth/reducer";

// 创建reducer(拆分reducer)
const reducer = combineReducers({ auth });
// redux 持久化配置
const persistConfig = {
	key: "root",
	storage: storage,
};
const persistReducerConfig = persistReducer(persistConfig, reducer);

// 开启 redux-devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 使用 redux 中间件
// 创建 store
const store: Store = createStore(persistReducerConfig, composeEnhancers(applyMiddleware(reduxThunk, reduxPromise)));
const persist = persistStore(store);
export { store, persist };
