<template>
    <div class="container">
        <ServiciosCard v-for="servicios in servicio" :key="servicios.id" :servicios="servicios"
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
            Servicio: [],
            filtros: [],
            actualizar: false,
        }
    },
    methods: {
        async loadAPI() {
            return fetch("http://localhost:3000/servicio")
                .then((response) => response.json())
                .then((servicios) => {
                    console.log(servicios)
                    this.servicio = servicios;
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