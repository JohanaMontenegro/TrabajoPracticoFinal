<template>
  <div class="row">
    <div class="col-11">
      <div id="contents" class="rounded border border-primary">
        <h3>Registrate ingresando tus datos</h3>
        <form action="·" @submit.prevent=register>

          <div id="cont" class="field justify-content-center">
            <label class="label">Nombre</label>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="ej.Juan Veron"
                v-model="nombre"
              />

              <div id="cont" class="field justify-content-center">
                <label class="label">Email</label>
                <div class="control">
                  <input
                    class="input"
                    type="text"
                    placeholder="ej.JuanV@example.com"
                    v-model="email"
                  />

                  <div id="cont" class="field justify-content-center">
                    <label class="label">Contraseña</label>
                    <div class="control"></div>
                    <input
                      type="password"
                      name="password"
                      autocomplete="current-password"
                      placeholder="password"
                      id="id_password"
                      v-model="contraseña"
                    />
                  </div>
                </div>
              </div>
              <div class="button">
              <a class="Justify-content-center"><strong>Registrarme</strong></a>
              </div>
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
};
</script>

<style scoped>
#contents {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
}
#cont{
  margin-top: 15px;
}
a {
  text-decoration: none;
}
.button{
  cursor: pointer;
  margin-bottom: 15px;  
  margin-top: 30px;
}
</style>
