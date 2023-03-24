import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ListarUser from "../components/ListarUser.vue";
import CrearUser from "../components/CrearUser.vue";
import EditarUser from "../components/EditarUser.vue"
import ListarCliente from "../components/ListarCliente.vue"
import CrearCliente from "../components/CrearCliente.vue"
import EditarCliente from "../components/EditarCliente.vue"


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
    path:"/editar/:id",
    name:"editar",
    component:EditarUser,
  },
  {
    path:"/listarcli",
    name: "listarcli",
    component: ListarCliente,
  },
  {
    path:"/crearcli",
    name:"crearcli",
    component:CrearCliente,
  },
  {
    path:"/editarcliente/:id",
    name: "editarcliente",
    component:EditarCliente,
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
