<template>
  <div class="row">
    <div class="col-11">
      <div id="contents" class="rounded border border-primary">
        <h3 class="justify-content-center">Bienvenido a Nuestro Sitio</h3>
        <div class="container justify-content-center mt-50">
          <div class="columns justify-content-center">
           
              <div class="title"><strong>Iniciar sesión</strong></div>
              <form name="form" id="form" v-on:submit.prevent="procesar()"></form>

              <div id="label" clas="field justify-content-center">
                <label class="label">Email</label>
                <div class="control">
                  <input class="input" type="text" placeholder="ej.JuanV2@example.com" v-model="email" />

                  <div id="label" clas="field justify-content-center">
                    <label class="label">Contraseña</label>
                    <div class="control mb-3">
                      <input type="password" name="password" autocomplete="current-password" placeholder="password" id="id_password" v-model="contraseña"/>
                    </div>
                  </div>
                  <div class="button">
              <a type="submit" href="/"><strong>Ingresar</strong></a>
            </div>
                </div>
              </div>
            </div>
            <div class="register">
              <h5>¿Aún no sos parte?</h5>
              <p>Te invitamos a registrarte</p>
              <div class="boton">
                <a class="justify-content-center" href="register"
                  ><strong>Registrarme</strong></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 
</template>

<script>
export default {
  name: "LoginComponent",
  data() {
    return {
      submited: false,
      usuario: {
        nombre: "",
        email: "",
        contraseña: "",
      },
    };
  },
};
</script>

<style scoped>
.register {
  margin-top:30px;
  margin-bottom: 25px;
  text-align: center;
  justify-content: center;
  text-decoration: none;
}

h3,
h5,
p {
  margin-top:10 px;
  text-align: center;
}
a {
  text-decoration: none;
  border-radius: 5px;
}
.boton{
  margin-bottom: 14px;
}
.title{
  margin-top: 30px;
  margin-bottom: 25px;
  text-align: center;
  justify-content: center;

}
#label{
  margin-top:15px;
  text-align: center;
  justify-content: center;
}
</style>
