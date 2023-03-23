import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ListarUser from "../components/ListarUser.vue";
import CrearUser from "../components/CrearUser.vue";


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:"/listar",
    name:"listar",
    component:ListarUser,

  },
  {
    path:"/crear",
    name:"crear",
    component:CrearUser,
  },
  {
    path: '/about',
    name: 'about',
    component: function () { return import(/* webpackChunkName: "about" */ '../views/AboutView.vue') }
  },
  {
    path: '/login',
    name: 'login',
    component: function () { return import(/* webpackChunkName: "login" */ '../views/LoginView.vue') }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: function () { return import(/* webpackChunkName: "dashboard" */ '../views/DashboardView.vue') }    
  },
  {
    path: '/register',
    name: 'register',
    component: function () { return import(/* webpackChunkName: "register" */ '../views/RegisterView.vue') }    
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
