import { initGlobalState, MicroAppStateActions } from 'qiankun'
// import store from '../store';

const initialState = {
  token: localStorage.getItem('token') || '',
  qiankun_GlobalName: 'global', // store.state.global.store_GlobalName
}

const actions: MicroAppStateActions = initGlobalState(initialState)

actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log('onGlobalStateChange: (主应用)')
  console.log(state, prev)
  // if (state.qiankun_GlobalName !== prev.qiankun_GlobalName) {
  //   store.commit('globalStore/setStoreGlobalName', state.qiankun_GlobalName);
  // }
})

export default actions
