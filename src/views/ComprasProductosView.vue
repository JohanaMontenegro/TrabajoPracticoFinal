<template>
  <div class="row">
    <div class="col-11">
      <div id="contents" class="rounded border border-primary">
        <ComprasProductos />
      </div>
    </div>
  </div>
</template>

<script>
import ComprasProductos from "../components/ComprasProductos.vue"
export default {
  name: "ComprasView",
  components: {
    ComprasProductos
  }
}
</script>
<style scoped>
h2 {
  text-align: center;
}
</style>
