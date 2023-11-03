<template>
  <!-- <div class="container">
    <div id="omputacion">
      <div clascs="card">
        <div>
          <p v-if="producto.stock == 'true'">En Stock</p>
          <p v-else>Sin Stock</p>
        </div>
        <img v-bind:src="producto.imagen" alt="imagen" />
        <p class="descripcion">{{ producto.descripcion }}</p>
        <div>
          <p class="precio">{{ producto.precio }}</p>
        </div>
        <button @click="Comprar">Comprar</button>
      </div>
    </div>
  </div> -->

  <div class="container">
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col-lg-4 col-md-6 mb-4" id="card">
        <div class="card h-100">
          <p v-if="producto.stock == 'true'">En Stock</p>
          <p v-else>Sin Stock</p>
          <img v-bind:src="producto.imagen" alt="imagen" class="card-img-top" />
          <div class="card-body">
            <h4 class="card-title">{{ producto.nombre }}</h4>
            <p class="card-text">{{ producto.descripcion }}</p>
          </div>
          <button @click="Comprar">Comprar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductosCard",

  props: ["producto"],
};
</script>

<style scoped>
.card{
  display: flex;
  float: inline-start;
  background: rgb(245, 248, 248);
  margin-right: 10px;
  cursor: pointer;
  color: rgb(2, 2, 2);
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.19);
  border: 1px solid rgb(179, 179, 179);
  margin-top: 60px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  text-transform: uppercase;
}

#card img {
  max-width: 220px;
  margin: auto;
} 


</style>
