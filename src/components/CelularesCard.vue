<template>
  <div class="container">
    <div class="col-lg-4 col-md-6 mb-4" id="card">
      <div class="card h-100">
        <p v-if="producto.stock == 'true'">En Stock</p>
        <p v-else>Sin Stock</p>
        <img :src="producto.urlImagen" alt="imagen" class="card-img-top" />
        <div class="card-body">
          <h4 class="card-title">{{ producto.nombre }}</h4>
          <p class="card-text">{{ producto.descripcion }}</p>
        </div>
        <button @click="Comprar">Comprar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CelularesCard",
  props: ["producto"],
};
</script>

<style scoped>
#card {
  display: flex;
  flex-flow: column;
  justify-content: center;
  max-width: 270px;
  min-width: 230px;
  background: rgb(245, 248, 248);
  padding: 10px 15px;
  margin-bottom: 24px;
  margin-right: 10px;
  cursor: pointer;
  color: rgb(2, 2, 2);
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.19);
  border: 1px solid rgb(179, 179, 179);
}

#card img {
  max-width: 220px;
  margin: auto;
}

p{
  display: flex;
}

</style>
