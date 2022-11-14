import { createStore } from "vuex";

export default createStore({
  state: {
    timeFrame: "weekly",
  },
  getters: {},
  mutations: {
    getDailyStats(state) {
      state.timeFrame = "daily";
    },

    getWeeklyStats(state) {
      state.timeFrame = "weekly";
    },

    getMonthlyStats(state) {
      state.timeFrame = "monthly";
    },
  },

  actions: {
    getDailyStats({ commit }) {
      commit("getDailyStats");
    },

    getWeeklyStats({ commit }) {
      commit("getWeeklyStats");
    },

    getMonthlyStats({ commit }) {
      commit("getMonthlyStats");
    },
  },
  modules: {},
});
