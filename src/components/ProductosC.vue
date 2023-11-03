lear<template>
    <div>
 <ProductosCard v-for="producto in productos" :key="producto.id" :producto="producto" @actualizarProducto="actualizarProducto($event)" :actualizar=this.actualizar></ProductosCard>

    </div>
</template>

<script>

import ProductosCard from '../components/ProductosCard.vue';

export default {
    name: "ProductosComponent",
    props: {
        msg: String
    },
    components: {
        ProductosCard
    },
    data() {
        return {
            productos: [],
            filtros: [],
            actualizar: false,
        }
    },
    methods: {
        async loadAPI() {
            return fetch("https://6449ca06a8370fb3213e14b1.mockapi.io/producto/productos")
                .then((response) => response.json())
                .then((producto) => {
                    this.productos = producto;
                    console.log (this.productos)
                    console.log ("aida")
                    console.log (this.productos[1].stock)
                });
        }
    },
    mounted() {
        this.loadAPI();
    },
}
</script>
