import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createStore } from 'vuex'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000';

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
    }
  }
})

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
