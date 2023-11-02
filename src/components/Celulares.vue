<template>
    <div>
        <ProductosCard v-for="producto in productos" :key="producto.id" :producto="producto" @actualizarProducto="actualizarProducto($event)" :actualizar=this.actualizar></ProductosCard>
    </div>
</template>

<script>


import CelularesCard from './CelularesCard.vue';

export default {
    name: "CelularesComponent",
    props: {
        msg: String
    },
    components: {
        CelularesCard
    },
 
    data() {
        return {
            cellphone: [],
            filtros: [],
            actualizar: false,
        }
    },
    methods: {
        async loadAPI() {
            return fetch("https://653f0e2e9e8bd3be29dfe395.mockapi.io/cellphone")
                .then((response) => response.json())
                .then((cellphone) => {
                    this.cellphone = cellphone;
                    console.log (this.cellphone)
                    console.log ("aida")
                    console.log (this.cellphone[1].stock)
                });
        }
    },
    mounted() {
        this.loadAPI();
    },
}
</script> 
