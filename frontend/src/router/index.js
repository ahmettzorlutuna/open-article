import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UsersView from '../views/UsersView.vue'
import UserProfileView from '../views/UserProfileView.vue'
import PopularView from '@/views/PopularView.vue'
import PostDetailView from '../views/PostDetailView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/users',
    name: 'users',
    component: UsersView
  },
  {
    path: '/users/profile/:userId',
    name: 'user',
    component: UserProfileView
  },
  {
    path: '/popular',
    name: 'popular',
    component: PopularView
  },
  {
    path: '/posts/:postId',
    name: 'posts',
    component: PostDetailView
  }


  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
