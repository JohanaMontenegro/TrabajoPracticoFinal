<template>
  <div class="container">
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
  name: "AccesoriosComponent",
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
      return fetch("http://localhost:3000/productos/accesorios")
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
.container {
  display: flex;
  flex-wrap: wrap;
}
p{
  display: flex;
}

</style>
