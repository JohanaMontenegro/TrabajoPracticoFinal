<template>
  <div class="row">
    <div class="col-11">
      <div id="contents" class="rounded border border-primary">
        <h1 class="animate__animated animate__zoomIn">Productos</h1>

        <div class="row2">
          <li router-link class="nav-item">
            <a class="nav-link active" aria-current="page" href="Computación"
              >Computación</a
            >
          </li>
          <li router-link class="nav-item">
            <a class="nav-link active" aria-current="page" href="celulares">Celulares</a>
          </li>
          <li router-link class="nav-item">
            <a class="nav-link active" aria-current="page" href="accesorios"
              >Accesorios</a
            >
          </li>
        </div>

        <div class="card-group w-100">
          <ProductosComponent></ProductosComponent>
        </div>
        <div class="row custom-div col-11"></div>
      </div>
      <div classs="actualizar">
        <box-icon name="revision">Actualizar</box-icon>
      </div>
    </div>
  </div>
</template>

<script>
import ProductosComponent from "../components/ProductosC.vue";
export default {
  name: "ProductosView",
  components: {
    ProductosComponent,
  },
};
</script>

<style scoped>
/* #contents {
  border-color: 4px solid #0c98b1;
  margin-left: -40px;
  margin-right: 40px;
  text-align: center;
}

.row {
  justify-content: center;
}
.row2 li {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 17px;
  justify-content: center;
  float: inline-start;
  align-items: center;
  text-align: center;
  text-decoration: none;
  text-decoration-line: none;
  list-style-type: none;
  text-transform: uppercase;
}

.nav-item a {
  margin-left: 120px;
  align-items: center;
}

a .nav-item-active {
  align-items: center;
}

.card-group {
  margin-top: 80px;
  padding: 10px;
  margin: auto;
  display: flex;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 17px;
  float: inline-start;
  text-decoration: none;
} */
</style>
