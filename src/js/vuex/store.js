import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    User: {},
    msgCount: {
      messages: 2
    },
    siderCollapsed: false,

    // 主题
    theme: '',
    host: '',
    // 当前页面信息
    pageInfo: {
      // 所属模块
      module: '',
      // 当前组件
      component: '',
      // 路径，不包括host和？，在它们之间
      path: '',
      // 当前数据第几页
      page: 1,
      // 每页的数量
      num: 0,
      // 哈希，即#后面的
      hash: '',
      // 当前页数据
      data: {}
    },

    // 传参信息，用于页面之间交互，如跳转时
    param: {

    }

  },
  mutations: {
    updateAccount(state, data) {
      state.User = data;
    },
    updateSiderCollapse(state, isShow) {
      setTimeout(() => {
        G.trigger('page_resize');
      }, 600);
      state.siderCollapsed = isShow;
    },
    updateMsgCount(state, data) {
      state.msgCount = data;
    },

    // 页面数据更新
    updatePageinfo(state, data) {
      state.pageInfo = data;
    },
    updateParam(state, param) {
      state.param = param;
    },

    // 访问的主机域名，包括端口
    setHost(state, host) {
      state.host = host;
    }
  },
  actions: {
    updateAccount(context, data) {
      context.commit('updateAccount', data);
    },
    updateSiderCollapse(context, data) {
      context.commit('updateSiderCollapse', data);
    },
    updateMsgCount(context, data) {
      context.commit('updateMsgCount', data);
    },

    updatePageinfo(context, data) {
      context.commit('updatePageinfo', data);
    },
    updateParam(context, data) {
      context.commit('updateParam', data);
    },

    setHost(context, data) {
      context.commit('setHost', data);
    }
  },
  getters: {
    account: state => {
      return state.User;
    },
    siderCollapsed: state => {
      return state.siderCollapsed;
    },
    msgCount: state => {
      return state.msgCount;
    },
    pageInfo: state => {
      return state.pageInfo;
    },
    param: state => {
      return state.param;
    },
    host: state => {
      return state.host;
    }
  }
});
