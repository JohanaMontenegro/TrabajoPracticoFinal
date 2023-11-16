<template>
  <div class="col-lg-4 col-md-4 mb-1" id="card">
    <div class="card">
      <p v-if="producto.stock == true"><strong>En Stock</strong></p>
      <p v-else><strong>Sin Stock</strong></p>
      <img :src="producto.urlImagen" alt="imagen" class="card-img-top" />
      <div class="card-body">
        <h4 class="card-title">{{ producto.nombre }}</h4>
        <p class="card-text">{{ producto.descripcion }}</p>
        <p class="card-text"><strong>${{ producto.precio }}</strong></p>
      </div>
      <button @click="Comprar">Comprar</button>
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
#card {
  font-size: 20px;
  width: 28%;
  
  margin-right: 10px;
  margin-left: 35px;
  float: inline-start;
  background: rgb(245, 248, 248);
  cursor: pointer;
  color: rgb(2, 2, 2);
  border: 1px solid rgb(179, 179, 179);
  margin-top: 20px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

.card{
  height: 100%;
}
h4 {
  text-transform: uppercase;
}

#card img {
  max-width: 220px;
  margin: auto;
}
</style>
