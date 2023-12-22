import { createStore } from "vuex";

import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000";

export default createStore({
  state: {
    users: [],
    isLoading: true,
    errMessage: "",
  },
  getters: {},
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setErrMessage(state,error){
      state.errMessage = error
    },
    setLoading(state,loading){
      state.isLoading = loading
    }
  },
  actions: {
    async fetchUsers({ commit }) {
      try {
        commit("setLoading", true);
        const request = await axios.get("/users");
        commit("setUsers", request.data);
        return request.data;
      } catch (e) {
        commit("setErrMessage",e)
      }finally{
        commit("setLoading",false)
      }
    },
    async fetchUser(ctx, passengerId) {
      const request = await axios.get(`/users/${passengerId}`);
      return request.data;
    },
    async deletePost(ctx, postId) {
      const request = await axios.delete(`/users/posts/${postId}`);
      return request.data;
    },
  },
  modules: {},
});
