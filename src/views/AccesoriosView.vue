<template>
  <div class="row">
    <div class="col-11">
      <div id="contents" class="rounded border border-primary">
      <div id="title">
        <h4>Accesorios</h4>
      </div>
        <NavBarComponent />
        <AccesoriosComponent />
        <div class="row custom-div col-11"></div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBarComponent from "../components/NavBarC.vue";
import AccesoriosComponent from "../components/AccesoriosC.vue";
export default {
  name: "AccesoriosView",
  components: {
    AccesoriosComponent,
    NavBarComponent,
  },
};
</script>
<style scoped>
#title{
  margin-top: 20px;
  margin-bottom: 25px;
}

h4 {
  text-align: center;
}

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
#card img {
  max-width: 220px;
  margin: auto;
}

#contents {
  border-color: 4px solid #0c98b1;
  margin-left: -55px;
  margin-right: 55px;
  text-align: center;
  justify-content: space-between;
}

#card {
  height: 100%;
  margin: top 30px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  margin-bottom: 32px;
  text-transform: uppercase;
  display: flex;
}
.row {
  justify-content: center;
}
.row li {
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
  max-width: 1200px;
  padding: 10px;
  margin: 0;
  display: flex;
  justify-content: space-between;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 17px;
  float: inline-start;
  text-decoration: none;
}
button {
  margin-top: 0%;
}
</style>
