import { createWebHistory, createRouter } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ProductosView from "@/views/ProductosView.vue";
import ServiciosView from "@/views/ServiciosView.vue";
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







