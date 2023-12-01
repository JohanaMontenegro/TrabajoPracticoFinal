<template>
  <div class="row2">

    <li router-link class="nav-item">
      <a class="nav-link active" aria-current="page" to="computacion">Computación</a>
    </li>

    <li router-link clas="nav-item">
      <a class="nav-link active" aria-current="page" to="celulares">Celulares</a>
    </li>

    <li router-link class="nav-item">
      <a class="nav-link active" aria-current="page" to="accesorios">Accesorios</a>
    </li>

  </div>
</template>

<script>
export default {
  name: "NavBarComponent",
  components: {},
};
</script>

<style scoped>
.row2{
  display:flex;
  justify-content: space-around;
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
  display: flex;
  align-items: center;

}

a .nav-link-active {
  align-items: center;
}



</style>
