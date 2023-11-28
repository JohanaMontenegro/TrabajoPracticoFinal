<template>
  <div class="row">
    <div class="col-11">
      <div id="contents" class="rounded border border-primary">
        <h2>Carrito de Compras</h2>
        <ul>
          <li v-for="producto in productos" :key="producto.id">
            {{ producto.nombre }} - ${{ producto.precio }}
            <button @click="agregarAlCarrito(producto)">Agregar</button>
          </li>

          <li v-for="item in carrito" :key="item.Producto.id">
            {{ item.Producto.nombre }} - Cantidad: {{ item.quantity }} - Total: ${{
              item.total
            }}
            <button @click="eliminarDelCarrito(item.Producto)">
              Eliminar del Carrito
            </button>
            <button @click="aumentarCantidad(item)">+</button>
            <button @click="disminuirCantidad(item)">-</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "ComprasProductos",
  data() {
    return {
      productos: [],
      actualizar: false,
    };
  },
  methods: {
    agregarAlCarrito(producto) {
      this.$root.$emit("agregarAlCarrito", producto);
    },

    aumentarCantidad(index) {
      this.carrito[index].quantity++;
      this.actualizarTotal(index);
    },

    disminuirCantidad(index) {
      if (this.carrito[index].quantity > 1) {
        this.carrito[index].quantity--;
        this.actualizarTotal(index);
      }
    },
    actualizarTotal(index) {
      const item = this.carrito[index];
      item.total = item.quantity * item.precio;
    },
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
}
</style>
