<template>
  <div class="card-group">
    <p>Hola Mundo</p>
    <CelularesComponent/>
    <div class="row custom-div col-11">
      <div class="col-4 d-flex flex-column"></div>
    </div>
  </div>
</template>
<script>
import CelularesComponent from "../components/CelularesC.vue";
export default {
  name: "CelularesView",
  component: {
    CelularesComponent,
  },
};
</script>
<style></style>
