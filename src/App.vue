<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="logo">
      <i><img src="./assets/logoAzul.jpg" alt=""></i>
    </div>
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
      </ul>
      <form class="d-flex" role="Buscar">
        <input class="form-control me-2" type="Buscar" placeholder="Buscar" aria-label="Buscar">
        <button class="
                              btn btn-primary" type="submit">Búsqueda</button>
      </form>
    </div>
  </nav>
  <div class="content">
    <div class="sidebar">
      <div>
        <section class="home-section">
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
            <box-icon name='search-alt'></box-icon>
            <a href="search">Buscar</a>
          </li>
          <li>

            <a href="black-mode">Modo Oscuro</a>
            <box-icon name='toggle-left'></box-icon>
          </li>
        </ul>
      </div>
    </div>
    <div class="carousel">
      <div id="carouselDark" class="carousel carousel-dark slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselDark" data-bs-slide-to="0" class="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img src="./assets/celular.jpg" class="d-block w-100" alt="celular">
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src="./assets/computadora.jpg" class="d-block w-100" alt="computadora">
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="./assets/notebook.jpg" class="d-block w-100" alt="notebook">
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="./assets/Screenshot_2023-03-15-20-31-54-590.jpg" class="d-block w-100" alt="..">
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide </h5>
              <p>Some representative placeholder content for the slide.</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselDark" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselDark" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  color: #2c3e50;
  margin-top: 60px;
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

a {
  align-items: center;

}

.v {
  text-decoration: none;
  text-align: center;
}

img {
  border-radius: 27px;
  margin-left: 20px;
  /*width: 140px;*/
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
  background: hsl(0, 7%, 87%);
}

.carousel-inner {
  width:70%;
  align-items: center;
  align-content: center;
}

.carousel-item {
  align-items: center;
  align-content: center;
}
.carrousel {
  display:flex;
  width: 100%;
  height:70%
}
</style>
