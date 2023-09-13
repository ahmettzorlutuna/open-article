import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createStore } from 'vuex'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000';

//İmport bootstrap
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'


// Create a new store instance.
const store = createStore({
  state () {
    
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
  }
})

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
