import { createStore } from 'vuex'

import axios from 'axios'
axios.defaults.baseURL = "http://localhost:3000"

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    async fetchUsers () {
      const request = await axios.get('/users')
      return request.data
    },
    async fetchUser (ctx, passengerId) {
      const request = await axios.get(`/users/${passengerId}`)
      return request.data
    },
    async deletePost (ctx, postId) {
      const request = await axios.delete(`/users/posts/${postId}`)
      return request.data
    }
  },
  modules: {
  }
})
