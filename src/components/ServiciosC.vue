<template>
    <div class="container">
        <ServiciosCard v-for="servicio in servicios" :key="servicio.id" :servicio="servicio"
            @actualizarServicio="actualizarServicio($event)" :actualizar=this.actualizar></ServiciosCard>
    </div>
</template>

<script>

import ServiciosCard from '../components/ServiciosCard.vue';

export default {
    name: "ServiciosComponent",
    props: {
        msg: String
    },
    components: {
        ServiciosCard
    },
    data() {
        return {
            servicios: [],
            filtros: [],
            actualizar: false,
        }
    },
    methods: {
        async loadAPI() {
            return fetch("http://localhost:3000/servicio")
                .then((response) => response.json())
                .then((servicio) => {
                    console.log(servicio)
                    this.servicios = servicio;
                    console.log(this.servicio)
                    console.log(this.servicio[1].telefono)
                });
        }
    },
    mounted() {
        this.loadAPI();
    },
}
</script>
<style scoped>
.container {
    display: flex;
    flex-wrap: wrap;
}
</style>