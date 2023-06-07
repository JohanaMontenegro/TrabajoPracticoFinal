<template>
    <div class="row">
        <div class="col-11">
            <div id="content" class="rounded border border-primary">
                <h1 class="animate__animated animate__zoomIn"> Productos </h1>
                <div class="card-group">
                    <ProductosComponent />
                </div>
                <div class="row custom-div col-9">
                    <div class="col-3">
                        <div class="col-2">
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
                        <div class="col-2">
                        </div>
                    </div>
                    <div class="col-3">
                    </div>
                    <div class="col-3">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProductosComponent from "../components/Productos.vue";

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
    margin-left: 260px;
}

body {
    font-family: system-ui;
    color: rgb(14, 1, 1);
    text-align: center;
}

.custom-div {
    background: #f3ecbe;
    height: 17rem;
    display: flex;
    justify-content: space-evenly;
    margin-left: 150px;
}

.custom-div>.col-3 {
    background: #f2eaa0;
    height: 98%;
    border: 2px solid black;
    width: 15rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.custom-div>.col-3>.col-2 {
    background: white;
    width: 40%;
    height: 50%;
}
</style>