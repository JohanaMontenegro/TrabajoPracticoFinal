<template>
  <div class="row">
    <div class="col-11">
      <div id="contents" class="rounded border border-primary">
        <div><h4>Celulares</h4></div>
        <NavBarComponent />
          <CelularesComponent/>
        <div class="row custom-div col-11"></div>
      </div>
        </div>
      </div>
</template>

<script>
import NavBarComponent from "@/components/NavBarC.vue";
import CelularesComponent from "../components/CelularesC.vue";
export default {
  name: "CelularesView",
  components: {
    CelularesComponent,
    NavBarComponent
},
};
</script>
<style scoped>
#title{
  margin-top: 20px;
  margin-bottom: 25px;
}

h4{
  text-align: center;
}

#contents {
  border-color: 4px solid #0c98b1;
  margin-left: -55px;
  margin-right: 55px;
  text-align: center;
}

.row {
  justify-content: center;
}
</style>

