<template>
    <div class="row">
        <div class="col-11">
            <div id="content" class="rounded border border-primary">
                <h1 class="animate__animated animate__zoomIn"> Productos </h1>
                <div class="card-group">
                    <!-- <ProductosComponent /> -->
                </div>
                <div class="row custom-div col-11">
                    <div class="col-4 d-flex flex-column">
                        <h2 class="text-center">COMPUTACIÓN</h2>
                        <div class="d-flex justify-content-stretch">
                            <div class="col-5 me-3 bg-light">
                                <div class="stock">
                                    <p>En Stock</p>
                                </div>
                                <div>
                                    <img src="./img/AllinOneDell.png" alt="imagen">
                                    <p>Pc de escritorio All-in-One AIO De 21,5 pulgadas Dell Optiplex 3280 Windows 11 Home
                                        Intel
                                        Core i5 / 4 GB RAM / 1 TB</p>
                                </div>
                                <div class="precio">
                                    <p>$349.999</p>
                                </div>
                                <button>Comprar</button>
                            </div>
                            <div class="col-5 bg-light">
                            </div>
                        </div>
                    </div>
                    <div class="col-4 d-flex flex-column">
                        <h2 class="text-center">CELULARES</h2>
                        <div class="d-flex justify-content-stretch">
                            <div class="col-5 me-3 bg-light">
                                <div class="stock">
                                    <p>En Stock</p>
                                </div>
                                <div>
                                    <img src="./img/samsung-s21.jpg" alt="imagen">
                                    <p>Smartphone Samsung Galaxy S21 con pantalla AMOLED de 6.2 pulgadas y cámara de MP.</p>
                                </div>
                                <div class="precio">
                                    <p>$249.999</p>
                                </div>
                                <button>Comprar</button>
                            </div>
                            <div class="col-5 bg-light">
                            </div>
                        </div>
                    </div>
                    <div class="col-4 d-flex flex-column">
                        <h2 class="text-center">ACCESORIOS</h2>
                        <div class="d-flex justify-content-stretch">
                            <div class="col-5 me-3 bg-light">
                                <div class="stock">
                                    <p>En Stock</p>
                                </div>
                                <div>
                                    <img src="./img/soporte-celular.jpg" alt="imagen">
                                    <p>Soporte para celular brazo flexible con pinza ajustable</p>
                                </div>
                                <div class="precio">
                                    <p>$795.000</p>
                                </div>
                                <div class="comprar">
                                    <button>Comprar</button>
                                </div>
                            </div>
                            <div class="col-5 bg-light">
                            </div>
                        </div>
                    </div>
                </div>
                <div classs="actualizar">
                    <box-icon name='revision'>Actualizar</box-icon>
            </div>
        </div>
    </div>
</div>
</template>

<!-- <script>
import ProductosComponent from "../components/ProductosC.vue";
export default {
    name: "ProductoComponent",
    components: {
        ProductosComponent
    },
}
</script> -->

<style>
#content {
    text-overflow: initial;

}

.stock {
    background-color: #f1d209;
    border-radius: 25px;

}

.precio {
    background-color: #98e9c3;
    border-radius: 25px;
    border-color: #21e68a;
    border: solid 1px;
    font-size: 12px;
    margin-bottom: 0;

}

.comprar{
    margin-top: 5px;
}

button {
    background-color: #98e9c3;
    border-radius: 25px;
    border-color: #21e68a;
    border: solid 1px;
    font-size: 12px;

}

.actualizar{
    display: flex;
    align-items: center;
    align-content: center;
  
}

.row {
    display: flex;
    margin-left: 240px;
}

body {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: rgb(0, 0, 0);
    text-align: center;
    font-weight: bold;
    font-style: italic;
}

.custom-div {

    background: #f3ecbe;
    display: flex;
    justify-content: stretch;
    margin-left: 70px;
    margin: 0;
    width: 100%;
    border-radius: solid #f2d40f 20px;

}

.custom-div>.col-4 {
    background: #f2eaa0;
    border: 1px solid black;
    display: flex;
    justify-content: stretch;
    align-items: center;


}

.custom-div>.col-4>.col-4 {
    background: white;
    border-radius: 25px;
    margin-left: 120px;
}

.col-4>.bg-light {
    height: 100px;
    width: 70rem;
}

img {
    margin-left: 0;
}

.col-5 {

    background-color: #f1d209;
    border-radius: solid 25px;

}
</style>
