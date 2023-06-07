
<template>
  <div class="row">
    <div class="col-11">
      <nav class="navbar navbar-expand-lg rounded border border-secondary my-3">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li router-link class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li router-link class="nav-item">
              <a class="nav-link active" aria-current="page" href="productos">Productos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" arial-current="page" href="servicios">Servicios</a>
            </li>
            <li router-link class="nav-item">
              <a class="nav-link active mt-3" aria-current="page" href="carrito"><box-icon name='cart'></box-icon></a>
            </li>
          </ul>
          <form class="d-flex" role="Buscar">
            <input class="form-control me-2" type="Buscar" placeholder="Buscar" aria-label="Buscar">
            <button class=" btn btn-primary" type="submit">Búsqueda</button>
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

            <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling"
              aria-controls="offcanvasScrolling">Enable body scrolling</button>

            <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1"
              id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas with body scrolling</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body">
                <p>Try scrolling the rest of the page to see this option in action.</p>
              </div>
            </div>

            <div class="home-content">
              <box-icon name='menu'></box-icon>
              <span class="text">Menú</span>
            </div>
          </section>
        </div>
        <div class="logo">
          <i><img src="./assets/logoAzul.jpg" alt=""></i>
          <ul class="nav-link">
            <li>
              <box-icon type='solid' name='user-circle'></box-icon>
              <a href="user">Ingresar</a>
            </li>
            <li>
              <a href="black-mode">Modo Oscuro</a>
              <box-icon name='toggle-left'></box-icon>
            </li>
          </ul>
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
            <ol class=" text-center col-4 mt-3">
              <li>
                <h6><strong>Medios de Pago Habilitados</strong></h6>
              </li>
              <li><strong>Tarjetas de Crédito y Debito</strong></li>
              <li><strong>Transferencia Bancaria</strong></li>
              <li><strong>Efectivo en Rapipago /PagoFácil</strong></li>
            </ol>
            <div class="d-flex flex-row d-inline-flex p-1 bd-highlight w-100">
              <img src="./assets/logosmp.png" alt="" class="rounded border border-tertiary">
            </div>
            <div id="envios" class="d-flex flex row d-inline-flex bd-highlight w-100">

            </div>
            <div class="text-center">
              <p>Copyright 2023 © TodoElectro eCommerce - Todos los derechos reservados - Desarrollado por Aida y Johana.
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
  name: 'App',
  components: {

  },
}

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
  align-items: center;
}

li {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 22px;
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

img {
  border-radius: 27px;
  margin-left: 20px;
  width: 140px;
}

form {
  margin-right: 20px;
}

.sidebar {
  position: fixed;
  padding-top: 65px;
  padding-right: 30px;
  left: 0;
  top: 0;
  width: 180px;
  height: 100%;
  background: rgba(216, 211, 211, 0.637);
}

.logo a {
  text-decoration: none;
}

.row {
  display: flex;
  margin-left: 260px;

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

ol li {
  font-size: 13px;
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
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
</style>
