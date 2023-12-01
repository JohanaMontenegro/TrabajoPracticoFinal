<template>
  <div class="row">
    <div class="col-11">
      <div id="contents" class="rounded border border-primary">
        <div id="title"><h4>Computación</h4></div>
        <NavBarComponent />
        <ComputacionComponent />
      </div>
    </div>
  </div>
</template>

<script>
import NavBarComponent from "../components/NavBarC.vue";
import ComputacionComponent from "../components/ComputacionC.vue";
export default {
  name: "ComputacionView",
  components: {
    ComputacionComponent,
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
