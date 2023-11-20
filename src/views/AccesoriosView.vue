<template>
  <div class="row">
    <div class="col-11">
      <div id="contents" class="rounded border border-primary">
        <h4>Accesorios</h4>
        <NavBarComponent />
          <AccesoriosComponent/>
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
    NavBarComponent
  },
};
</script>
<style scoped>

.card-group {
  margin-top: 80px;
  max-width: 1200px;
  padding: 10px;
  margin:0;
  display: flex;
  justify-content: space-between;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 17px;
  float: inline-start;
  text-decoration: none;
}

h4{
  text-align: center;
}
</style>
