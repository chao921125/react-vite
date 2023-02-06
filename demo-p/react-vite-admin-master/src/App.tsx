import React, { useEffect, useReducer } from "react";
import {
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Login from "./pages/login/Login";
import { store, StoreContext, reducer } from "./plugins/store/store";

export default function App() {
  const history = useHistory();
  const stores = useReducer(reducer, store)

  useEffect(() => {
    if (history.location.pathname !== '/login' && !stores[0].user) {
      history.replace('/login')
    }
  }, [history.location.pathname])
  return (
    <div>
      <StoreContext.Provider value={{
        store: stores[0],
        dispatch: stores[1]
      }}>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/admin" component={Layout}></Route>
        </Switch>
      </StoreContext.Provider>

    </div>
  );

}