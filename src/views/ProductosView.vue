<template>
    <div id="content">
        <div>
            <h1 class="animate__animated animate__zoomIn"> Productos </h1>
            <ProductosComponent/>
        </div>
    </div>
</template>
<script>
import ProductosComponent from "../components/Productos.vue";
export default {
    name: "ProductoComponent",
    components: {
        ProductosComponent
    },
}
</script>
<style>
#content {
    text-align: center;
}
</style>
Aida Herrera Vilar ha pausado sus n