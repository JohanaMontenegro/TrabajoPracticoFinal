import { createWebHistory, createRouter } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ProductosView from "@/views/ProductosView.vue";
import ServiciosView from "@/views/ServiciosView.vue";
import ComprasProductosView from "@/views/ComprasProductosView.vue"
import CelularesView from "@/views/CelularesView.vue"
import ComputacionView from "@/views/ComputacionView.vue"
import AccesoriosView from "@/views/AccesoriosView.vue"
import IngresarView from "@/views/IngresarView"
import RegisterView from "@/views/RegisterView"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/ingresar',
    name: 'ingresar',
    component: IngresarView
  },

  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },

  {
    path: "/productos",
    name: "productos",
    component: ProductosView,
  },
  {
    path: "/servicios",
    name: "servicios",
    component: ServiciosView,
  },
  {
    path: "/carrito",
    name: "carrito",
    component: ComprasProductosView
  },
  {
    path: "/computacion",
    name: "computacion",
    component: ComputacionView
  },
  {
    path: "/accesorios",
    name: "accesorios",
    component: AccesoriosView
  },
  {
    path: "/celulares",
    name: "celulares",
    component: CelularesView
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;







