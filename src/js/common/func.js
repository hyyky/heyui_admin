import store from '../vuex/store';

const func = {
  setUser(data = null) {
    if (!data) {
      return;
    }
    store.dispatch('updateAccount', data);
  },
  getUser(key = null) {
    if (key) {
      return store.getters.account[key];
    }
    return store.getters.account;
  },
  setPageInfo(data = null) {
    if (!data) {
      return;
    }
    store.dispatch('updatePageinfo', data);
  },
  setParam(data = null) {
    if (!data) {
      return;
    }
    store.dispatch('updateParam', data);
  },
  getPageInfo(key = null) {
    if (key) {
      return store.getters.pageInfo[key];
    }
    return store.getters.pageInfo;
  },
  getParam(key = null) {
    if (key) {
      return store.getters.param[key];
    }
    return store.getters.param;
  },

  setHost(host = null) {
    store.dispatch('setHost', host);
  },

  getHost() {
    return store.getters.host;
  }

  //   isObject(obj) {
  //     if (!obj) {
  //       return false;
  //     }
  //     return utils.isObject(obj);
  //   },
  //   isArray(arr) {
  //     if (!arr) {
  //       return false;
  //     }
  //     return utils.isArray(arr);
  //   }

};

export default func;
