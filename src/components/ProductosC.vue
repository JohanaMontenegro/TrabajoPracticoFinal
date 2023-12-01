<template>
  <div class="contenedor2">
    <ProductosCard
      v-for="producto in productos"
      :key="producto.id"
      :producto="producto"
      @actualizarProductos="actualizarProductos($event)"
      :actualizar="this.actualizar"
    ></ProductosCard>
  </div>
</template>

<script>
import ProductosCard from "../components/ProductosCard.vue";

export default {
  name: "ProductosComponent",
  props: {
    msg: String,
  },
  components: {
    ProductosCard,
  },
  data() {
    return {
      productos: [],
      filtrosTipo: [],
      actualizar: false,
    };
  },
  methods: {
    async loadAPI() {
      return fetch("https://todoelectro-y4q0.onrender.com/productos")
        .then((response) => response.json())
        .then((producto) => {
          console.log(producto);
          this.productos = producto;
          console.log(this.productos);
          console.log(this.productos[1].stock);
        });
    },
  },
  mounted() {
    this.loadAPI();
  },
};
</script>

<style scoped>
.contenedor2 {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-left: 70px;
}
</style>
