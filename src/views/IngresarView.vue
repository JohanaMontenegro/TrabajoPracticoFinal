<template>
  <div class="row">
    <div class="col-11">
      <LoginComponent />
      <RegisterComponent />
    </div>
  </div>
</template>

<script>
import RegisterComponent from "@/components/RegisterC.vue";
import LoginComponent from "@/components/LoginC.vue";
export default {
  name: "IngresarView",
  props: {
    msg: String,
  },
  components: {
    LoginComponent,
    RegisterComponent,
  },
};
</script>

<stiye scoped>
    
</stiye>
