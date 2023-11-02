import { createWebHistory, createRouter } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import Productos from "@/views/ProductosView.vue";
import Servicios from "@/views/ServiciosView.vue";
import ComprasProductosView from "@/views/ComprasProductosView.vue"
import CelularesView from"@/views/CelularesView.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
 
  {
    path: "/productos",
    name: "Productos",
    component: Productos,
  },
   {
    path: "/servicios",
    name: "servicios",
    component: Servicios,
  },
  {
    path: "/carrito",
    name: "carrito",
   component: ComprasProductosView
  }, 
  {
  path: "/celulares",
  name: "Celulares",
 component: CelularesView
},
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;







