<template>
  <div>
    <h2>Carrito de Compras</h2>
    <ul>
    
      <li v-for="producto in Producto" :key="producto.id">
        {{ producto.nombre }} - ${{ producto.precio }}
        <button @click="agregarAlCarrito(producto)">Agregar</button>
      </li>

      <li v-for="item in carrito" :key="item.Producto.id">
        {{ item.Producto.nombre }} - Cantidad: {{ item.quantity }} - Total: ${{
          item.total
        }}
        <button @click="eliminarDelCarrito(item.Producto)">Eliminar del Carrito</button>
        <button @click="aumentarCantidad(item)">+</button>
        <button @click="disminuirCantidad(item)">-</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carrito: [],
    };
  },
  methods: {},
};
</script>
<style scoped></style>
