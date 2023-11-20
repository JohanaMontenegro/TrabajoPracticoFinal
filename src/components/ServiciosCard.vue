<template>
  <div class="col-lg-4 col-md-4 mb-1" id="card">
    <div class="card">
      <h4 class="card-title">{{ servicio.nombreServicio }}</h4>
      <img :src="servicio.urlImagen" alt="imagen" class="card-img-top" />
      <div class="card-body">
        <p class="card-text">{{ servicio.descripcion }}</p>
        <p class="card-text"><strong>Tel: {{ servicio.telefono }}</strong></p>
      </div>
      <button @click="Consultar">Consultar</button>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "ServiciosCard",
  props: ["servicio"],
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

.card {
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