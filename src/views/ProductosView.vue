<template>
    <div class="row">
        <div class="col-11">
            <div id="content" class="rounded border border-primary">
                <h1 class="animate__animated animate__zoomIn"> Productos </h1>
                <div class="card-group">
                    <ProductosComponent />
                </div>
                <div class="row custom-div col-11">
                    <div class="col-4 d-flex flex-column">
                        <h2 class="text-center">COMPUTACIÓN</h2>
                        <div class="d-flex">
                        <div class="col-5 me-3 bg-light">
                            <div>
                                <p>En Stock</p>
                            </div>
                            <div>
                                <img src="./img/AllinOneDell.png" alt="imagen">
                                <p>Pc de escritorio All-in-One AIO De 21,5 pulgadas Dell Optiplex 3280 Windows 11 Home Intel
                                    Core i5 / 4 GB RAM / 1 TB</p>
                            </div>
                            <div>
                                <p>$249.999</p>
                            </div>
                            <button>Comprar</button>
                        </div>
                        <div class="col-5 bg-light">
                        </div>
                        </div>
                    </div>
                    <div class="col-4 d-flex flex-column">
                        <h2 class="text-center">CELULARES</h2>
                        
                    </div>
                    <div class="col-4 d-flex flex-column">
                        <h2 class="text-center">ACCESORIOS</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProductosComponent from "../components/ProductosC.vue";
export default {
    name: "ProductoComponent",
    components: {
        ProductosComponent
    },
}
</script>

<style>

#content {
    text-align: center;
   
}

.row {
    display: flex;
    margin-left: 240px;
}

body {
    font-family: system-ui;
    color: rgb(0, 0, 0);
    text-align: center;
    font-weight: bold;
    font-style: italic;
}

.custom-div {
    background: #f3ecbe;
    height: 28rem;
    display: flex;
    justify-content: space-evenly;
    margin-left: 60px;
}

.custom-div>.col-4 {
    background: #f2eaa0;
    height: 97%;
    border: 1px solid black;
    width: 18rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.custom-div>.col-4>.col-5 {
    background: white;
}

.col-5>.me-3>.bg-light{
    height: 100px;
    width: 80rem;
    }

</style>
