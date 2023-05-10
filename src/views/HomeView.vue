<template>
    <div id="home" class="row justify-content-center">
        <div id="main-home" class="mx-4 col-10 rounded border border-primary">
            <div id="homeContent">
                <div id="carousel-captions" class="carousel slide">
                    <div class="carousel-indicators mb-0">
                        <button type="button" data-bs-target="#carousel-captions" data-bs-slide-to="0" class="active mt-3"
                            aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carousel-captions" data-bs-slide-to="1" class="mt-3"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carousel-captions" data-bs-slide-to="2" class="mt-3"
                            aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carousel-captions" data-bs-slide-to="3" class="mt-3"
                            aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carousel-captions" data-bs-slide-to="4" class="mt-3"
                            aria-label="Slide 5"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="./img/AllinOneDell.png" class="d-block w-50 h-75 m-auto" alt="...">
                            <div class="carousel-captions d-none d-md-block text-center">
                                <h5><strong> Pc All in One Dell</strong></h5>
                                <p>Pc de escritorio All-in-One AIO De 21,5 pulgadas Dell Optiplex 3280 Windows 11 Home Intel Core i5 / 4 GB RAM / 1 TB </p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="./img/computadora-Game.png.png" class="d-block w-50 h-75 m-auto" alt="...">
                            <div class="carousel-captions d-none d-md-block text-center">
                                <h5> <strong>Pc Gamer</strong></h5>
                                <p>Computadora Gamer IbuYPower 7 5700G 16GB SSD 480. Incluye WIFI, monitor 22", teclado y mouse retroiluminados</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="./img/computadoraGamer.png" class="d-block w-50 h-75 m-auto" alt="...">
                            <div class="carousel-captions d-none d-md-block text-center">
                                <h5><strong>Pc Gamer Rizen</strong></h5>
                                <p>Pc Gamer AMD Ryzen 5 5600G | 16gb ram | SSD 480 +1TB HDD | Vga 1660 6GB | FTE 600W</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="./img/gabinete.png" class="d-block w-50 h-75 m-auto" alt="...">
                            <div class="carousel-captions d-none d-md-block text-center">
                                <h5><strong>Gabinete Gamer Aerox Hebe ARX 340G 3X FAN 120MM </strong></h5>
                                <p>Es un gabinete Gamer con gran espacio, Ventana lateral transparente, Luces RGB en el frontal, USB tanto 2.0 como 3.0 y numerosas ranuras de expansión para seguir ampliando tu setup.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="./img/MackBook.png" class="d-block w-50 h-75 m-auto" alt="...">
                            <div class="carousel-captions d-none d-md-block text-center">
                                <h5><strong>MacBook air laptop </strong></h5>
                                <p>Apple MacBook Air 13" M1 8GB Ram 256 GB SSD Space Gray</p>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carousel-captions"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carousel-captions"
                            data-bs-slide="next">
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
    name: 'HomeView'
}

</script>

<style scoped>
#home.row {
    margin-left: 180px;
}

#main-home {
    background-color: rgb(198, 213, 255);
}
</style>
