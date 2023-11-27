<template>
  <header>
    <button
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasRight"
      aria-controls="offcanvasRight"
    >
      <box-icon name="menu"></box-icon>
    </button>
  </header>
  <div class="row">
    <div class="col-11">
      <nav class="navbar navbar-expand-lg rounded border border-secondary my-3">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarToggler">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li router-link class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home </a>
            </li>
            <li router-link class="nav-item">
              <a class="nav-link active" aria-current="page" href="productos"
                >Productos</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link active" arial-current="page" href="servicios"
                >Servicios</a
              >
            </li>
            <li router-link class="nav-item">
              <a class="nav-link active mt-3" aria-current="page" href="carrito"
                ><box-icon name="cart"></box-icon
              ></a>
            </li>
          </ul>
          <form class="d-flex" role="Buscar">
            <input
              class="form-control me-2"
              type="Buscar"
              placeholder="Buscar"
              aria-label="Buscar"
            />
            <button class="btn btn-primary" type="submit">Búsqueda</button>
          </form>
        </div>
      </nav>
    </div>
  </div>

  <div
    class="offcanvas offcanvas-start"
    tabindex="-1"
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
  >
    <div class="offcanvas-header">
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <div class="logoc">
        <img src="./assets/TodoElectro-logo-verde.jpeg" alt="" />
      </div>

      <div class="options">
        <ul class="nav-link">
          <li>
            <box-icon type="solid" name="user-circle" title="Ingresar"></box-icon>
            <a href="user">Ingresar</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <router-view></router-view>
  <footer>
    <div class="row">
      <div id="content" class="rounded border border-primary col-11">
        <ol class="text-center col-4 mt-3">
          <li>
            <h5><strong>Medios de Pago Habilitados</strong></h5>
          </li>
          <li>Tarjetas de Crédito y Débito</li>
          <li>Transferencia Bancaria</li>
          <li>Efectivo en Rapipago /PagoFácil</li>
        </ol>
        <ol class="text-center col-4 mt-3">
          <li>
            <h5><strong>Formas de Envío</strong></h5>
          </li>
          <li>MercadoEnvios</li>
          <li>Correo Argentino</li>
          <li>Retiro en Sucursal</li>
        </ol>
        <ol class="text-center col-4 mt-3">
          <li>
            <h5><strong>Área de servicios</strong></h5>
          </li>
          <li>Servicio técnico</li>
          <li>Reparaciones</li>
          <li>Venta Mayorista de insumos</li>
        </ol>
      </div>
    </div>
  </footer>
  <div id="press" class="text-center">
    <p>
      Copyright 2023 © TodoElectro eCommerce - Todos los derechos reservados -
      Desarrollado por Aida y Johana.
    </p>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style scoped>
footer{
  margin-left: 15px;
  margin-right: 6px;
  justify-content: center;
}

footer ol {
  list-style-type: none;
  float: inline-start;
  margin-bottom: 18px;
  padding: 10px 60px 0 40px;
}

footer ol li {
  width: 25em;
  text-transform:capitalize;
  text-align: center;
  margin-left: -30px;
  font-size: 19px;}

section {
  text-decoration: none;
  list-style-type: none;
  align-items: center;
  align-content: center;
}
.offcanvas-start {
  width: 200px !important ;
  background: rgba(216, 211, 211);
}

ul.nav-link {
  display: flex;
  text-decoration: none;
  list-style-type: none;
  position: fixed;
}

ul li {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 20px;
  padding: 15px;
  text-decoration: none;
  list-style-type: none;
  display: flex;
  margin-left: -5px;
  text-transform: uppercase;
}

.v {
  align-items: center;
  text-decoration: none;
  text-align: center;
}

.options ul li {
  display: flex;
  float: left;
  align-content: center;
  margin-top: -20px;
  position: relative;
  padding: -20px 20px;
  top: 100px;
}

.options a {
  display: flex;
  position: absolute;
  transition: color 300ms;
}

.options a:hoover {
  color: rgb(105, 168, 250);
}

.options i a {
  padding: 20px 0px;
  display: flex;
  align-items: center;
  width: 20px;
  margin-right: 20px;
  margin-left: -35px;
}

h5 {
  text-transform: uppercase;
}

form {
  margin-right: 20px;
}

header {
  margin-left: 200px;
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 200;
}

.icon-menu {
  width: 50px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: traslateX(10px);
}

a {
  display: flex;
  margin-top: 0px;
  padding: 0;
  align-items: center;
  text-decoration: none;
  box-sizing: border-box;
  transition: color 300ms;
  margin-left: 38px;
}

i {
  font-size: 40px;
  cursor: pointer;
  position: absolute;
  margin-left: 25px;
}

.sidebar {
  width: 200px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(216, 211, 211, 0.637);
  z-index: 300;
}

.row {
  display: flex;
  margin-left: 250px;
  margin-right:13px;
  margin-top: 20px;
}

nav {
  background: rgba(216, 211, 211, 0.637);
}

#content {
  background-color: rgb(50, 190, 173);
  margin-top: 20px;
}

.logoc img {
  aspect-ratio: 458;
  width: 140px;
  height: 135px;
  border-radius: 8px;
  margin-left: 20px;
  margin-top: 10px;
}
</style>
