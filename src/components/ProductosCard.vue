<template>
    <div claas="container">
        <div id="computacion">
            <div class="card">
                <div>
                <p v-if="producto.stock=='true'">En Stock</p>
                <p v-else>Sin Stock</p>
            </div>
                <img v-bind:src="producto.imagen" alt="imagen">
                <p class="descripcion">{{ producto.descripcion }}</p>
                <div>
                    <p class="precio">{{ producto.precio }}</p>
                </div>
                <button @click="Comprar">Comprar</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductosCard',

    props: ["producto"],

}  
</script>
    
<style>
.card {
    display: flex;
    flex-flow: column;
    justify-content: center;
    max-width: 270px;
    min-width: 230px;
    background: rgb(245, 248, 248);
    overflow: auto;
    padding: 10px 15px;
    margin-bottom: 24px;
    margin-right: 10px;
    cursor: pointer;
    color: rgb(2, 2, 2);
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.19);
    border: 1px solid rgb(179, 179, 179);
}

.card img {
    max-width: 220px;
    margin: auto;
}
</style>