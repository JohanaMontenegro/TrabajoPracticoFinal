<template>
  <header>
    <div class="icon-menu">
      <box-icon name="menu"></box-icon>
    </div>
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
              <a class="nav-link active" aria-current="page" href="/">Home</a>
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
  <div class="row">
    <div class="col-4">
      <div class="sidebar">
        <div>
          <section class="home-section">

            <div class="home-content">
              <button class="btn btn-primary d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive">
                <box-icon name='menu'></box-icon>
              <span class="text">Menú</span>
              </button>
             </div>
          </section>
        </div>
        <div class="options">
        <ol class="nav-link">
          <li>
            <box-icon type="solid" name="user-circle" title="Ingresar"></box-icon>
            <a href="user">Ingresar</a>
          </li>
          <li>
            <a href="black-mode">Modo Oscuro</a>
            <box-icon name="toggle-left" title="Modo oscuro"></box-icon>
          </li>
        </ol>
      </div>
    </div>
  </div>
</div>
  <router-view></router-view>
  <div class="row">
    <div class="col-11">
      <div id="content" class="rounded border border-primary">
        <footer>
          <div id="pagos">
            <ol class="text-center col-4 mt-3">
              <li>
                <h5><strong>Medios de Pago Habilitados</strong></h5>
              </li>
              <li><strong>Tarjetas de Crédito y Debito</strong></li>
              <li><strong>Transferencia Bancaria</strong></li>
              <li><strong>Efectivo en Rapipago /PagoFácil</strong></li>
            </ol>
            <div class="d-flex flex-row d-inline-flex p-1 bd-highlight w-100">
              <img
                src="./assets/logosmp.png"
                alt=""
                class="rounded border border-tertiary"
              />
            </div>
            <div id="envios" class="d-flex flex row d-inline-flex bd-highlight w-100">
              <h5 class="text-center col-4 mt-3"><strong>Formas de Envío</strong></h5>
            </div>
            <div class="text-center">
              <p>
                Copyright 2023 © TodoElectro eCommerce - Todos los derechos reservados -
                Desarrollado por Aida y Johana.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
section {
  display: flex;
  text-decoration: none;
  list-style-type: none;
  align-items: center;
}

ul {
  display: flex;
  text-decoration: none;
  list-style-type: none;
  align-items: flex-start;
}

li {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 20px;
  padding: 15px;
  text-decoration: none;
  list-style-type: none;
  margin-left: 20px;
}

.v {
  align-items: center;
  text-decoration: none;
  text-align: center;
}
.name{
  margin-top:100px;
  display:flex;
  padding: 20px 30px;
  align-items: center;
  margin-left:14px;
}

img {
  aspect-ratio:4/4;
  margin-left: 100px;
  width: 110px;
}

.options{
  margin-top:90px;
  position:absolute;
  padding:20px 30px;
  top:80px;
}

.options a{
display:block;
position:relative;
}

 .options ol li a:hoover{
  color:whithe;

 }
 .options li a {
  padding: 20px 0px;
  display:flex;
  align-items:center;
  position:relative;
 }

 .options li a box-icon{
  width:20px;
  margin-right:20px;
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
  position:fixed;
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
  margin: 0;
  padding: 0;
  align-items: center;
  text-decoration: none;
  box-sizing: border-box;
}

i {
  font-size: 25px;
  cursor: pointer;
  position: absolute;
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

.logo a {
  text-decoration: none;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.row {
  display: flex;
  margin-left: 260px;
  margin-top: 20px;
}

nav {
  background: rgba(216, 211, 211, 0.637);
}

#content {
  background-color: rgb(198, 213, 255);
  margin-top: 20px;
}

#pagos {
  font-size: 20px;
}

#pagos ol li {
  font-size: 15px;
  margin: 0;
  padding: 0;
  text-align: left;
  text-decoration: bullet-point;
}

footer img {
  align-content: left;
  width: 220px;
  height: 50px;
}

p {
  font-size: 15px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
</style>
