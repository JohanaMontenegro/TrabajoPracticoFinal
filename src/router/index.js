import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/HomeView.vue";
import Productos from "@/views/ProductosView.vue";
import Servicios from "@/views/ServiciosView.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
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
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;







