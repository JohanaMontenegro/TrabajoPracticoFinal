<template>
 <h3>Carrito de Compras</h3>
 </template>
<script>

export default {
  name: "ComprasProductos",
  props: {
    msg: String,
  },
  data() {
    return {
      productos: [],
      actualizar:false,
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
