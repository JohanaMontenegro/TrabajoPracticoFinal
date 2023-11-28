<template>
  <div class="row">
      <div id="main-home" class="justify-content-center col-11">
        <div id="homeContent" class="rounded border border-primary">
          <div id="carousel-captions" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="./img/TodoElectro-logos-pres-verde.jpeg" alt="..." />
                <div class="carousel-captions d-none d-md-flex text-center"></div>
              </div>
              <div class="carousel-item">
                <img
                  src="./img/AllinOneDell.png"
                  class="d-block w-50 h-75 m-auto"
                  alt="..."
                />
                <div class="carousel-captions d-none d-md-block text-center">
                  <h5><strong> Pc All in One Dell</strong></h5>
                  <p>
                    Pc de escritorio All-in-One AIO De 21,5 pulgadas Dell Optiplex 3280
                    Windows 11 Home Intel Core i5 / 4 GB RAM / 1 TB
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  src="./img/computadora-Game.png.png"
                  class="d-block w-50 h-75 m-auto"
                  alt="..."
                />
                <div class="carousel-captions d-none d-md-block text-center">
                  <h5><strong>Pc Gamer</strong></h5>
                  <p>
                    Computadora Gamer IbuYPower 7 5700G 16GB SSD 480. Incluye WIFI,
                    monitor 22", teclado y mouse retroiluminados
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  src="./img/computadoraGamer.png"
                  class="d-block w-50 h-75 m-auto"
                  alt="..."
                />
                <div class="carousel-captions d-none d-md-block text-center">
                  <h5><strong>Pc Gamer Rizen</strong></h5>
                  <p>
                    Pc Gamer AMD Ryzen 5 5600G | 16gb ram | SSD 480 +1TB HDD | Vga 1660
                    6GB | FTE 600W
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  src="./img/gabinete.png"
                  class="d-block w-50 h-75 m-auto"
                  alt="..."
                />
                <div class="carousel-captions d-none d-md-block text-center">
                  <h5>
                    <strong>Gabinete Gamer Aerox Hebe ARX 340G 3X FAN 120MM </strong>
                  </h5>
                  <p>
                    Es un gabinete Gamer con gran espacio, Ventana lateral transparente,
                    Luces RGB en el frontal, USB tanto 2.0 como 3.0 y numerosas ranuras de
                    expansión para seguir ampliando tu setup.
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  src="./img/MackBook.png"
                  class="d-block w-50 h-75 m-auto"
                  alt="..."
                />
                <div class="carousel-captions d-none d-md-block text-center">
                  <h5><strong>MacBook air laptop </strong></h5>
                  <p>Apple MacBook Air 13" M1 8GB Ram 256 GB SSD Space Gray</p>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carousel-captions"
                data-bs-slide="prev"
              >
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carousel-captions"
                data-bs-slide="next"
              >
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped>
.row {
  display: flex;
  justify-content: center;
}

#homeContent {
  background-color: rgb(50, 190, 173);
  margin-left:-70px;
  margin-right:70px
}

.carousel-inner,
p {
  font-size: 25px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  text-transform: uppercase;
}

.carousel-item img {
  width: 100%;
  height: 630px;
  display: block;
}
</style>
