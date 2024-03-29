import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PostsView from "../views/PostsView.vue";
import UserProfileView from "../views/UserProfileView.vue";
import PopularView from "@/views/PopularView.vue";
import PostDetailView from "../views/PostDetailView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import ProtectedRoute from "../views/ProtectedView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/users",
    name: "users",
    component: PostsView,
  },
  {
    path: "/users/profile/:userId",
    name: "user",
    component: UserProfileView,
  },
  {
    path: "/popular",
    name: "popular",
    component: PopularView,
  },
  {
    path: "/posts/:postId",
    name: "posts",
    component: PostDetailView,
  },
  {
    path: "/user/login/",
    name: "userLogin",
    component: LoginView,
  },
  {
    path: "/user/register/",
    name: "userRegister",
    component: RegisterView,
  },
  {
    path: "/user/protected/",
    name: "protected",
    component: ProtectedRoute,
  }

  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
