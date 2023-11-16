<template>
    <div>

    </div>
</template>

<script>


import ProductosCard from '../components/ProductosCard.vue';

export default {
    name: "CelularesComponent",
    props: {
        msg: String
    },
    component: {
        ProductosCard
    },
 
    data() {
        return {
            productos: [],
            actualizar: false,
        }
    },
    methods: {
        async loadAPI() {
            return fetch("http//localhost.3000/productos/celulares")
                .then((response) => response.json())
                .then((productos) => {
                    this.productos = productos;
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
