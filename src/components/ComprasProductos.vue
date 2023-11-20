<template>
 <ComprasProductosView/>
</template>
<script>
import ComprasProductosView from "../views/ComprasProductos.vue";

export default {
  name: "ComprasProductosView",
  props: {
    msg: String,
  },
  components: { ComprasProductosView},

  data() {
    return {
      Producto: [],
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
