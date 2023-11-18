<template>
    <div class="container">
        <ServiciosCard v-for="servicio in servicios" :key="servicio.id" :servicio="servicio"
            @actualizarServicios="actualizarServicios($event)" :actualizar=this.actualizar></ServiciosCard>

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
            Servicios: [],
            filtros: [],
            actualizar: false,
        }
    },
    methods: {
        async loadAPI() {
            return fetch("http://localhost:3000/servicios")
                .then((response) => response.json())
                .then((servicio) => {
                    console.log(servicio)
                    this.servicios = servicio;
                    console.log(this.servicios)
                    console.log(this.servicios[1].stock)
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