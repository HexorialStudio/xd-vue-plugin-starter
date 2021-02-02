const Vue = require("vue").default;
const Vuex = require("vuex").default;

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    msg: "hello world",
  },
  mutations: {
    msg(state, payload) {
      state.msg = payload;
    },
  },
  getters: {
    msg(state) {
      return state.msg;
    },
  },
});

exports["default"] = store;
