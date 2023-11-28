<template>
  <div class="row">
    <div class="col-11">
      <div id="contents" class="rounded border border-primary">
        <h3>Registrate ingresando tus datos</h3>
        <form action="·" @submit.prevent="register">
          <div clas="field justify-content-center">
            <label class="label">Nombre</label>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="ej.Juan Veron"
                v-model="nombre"
              />

              <div clas="field justify-content-center">
                <label class="label">Email</label>
                <div class="control">
                  <input
                    class="input"
                    type="text"
                    placeholder="ej.JuanV@Example.com"
                    v-model="email"
                  />

                  <div clas="field justify-content-center">
                    <label class="label">Contraseña</label>
                    <div class="control mb-3"></div>
                    <input class="input" type="text" v-model="contraseña" />
                  </div>
                </div>
              </div>
              <div class="button">
              <button type="submit">Registrarme</button>
            </div>

              <alert v-if="error">{{ error }}</alert>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nombre: "",
      email: "",
      contraseña: "",
      error: "",
    };
  },
  name: "RegisterComponent",
}
</script>

<style scoped>
#contents {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
}
button{
  
  margin-top:10px;
  margin-bottom:10px
}
</style>
