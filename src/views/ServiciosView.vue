<template>
    <div class="row">
        <div class="col-11">
            <div id="contents" class="rounded border border-primary">
                <h1 class="animate__animated animate__zoomIn">Área de Servicios</h1>
                <div class="card-group">
                    <ServiciosComponent/>
                </div>
                <div class="row custom-div col-11"></div>
            </div>
        </div>
    </div>
</template>
  
<script>
import ServiciosComponent from "../components/ServiciosC.vue";
export default {
    name: "ServiciosView",
    components: {
        ServiciosComponent,
    },
};
</script>

<style scoped>
#contents {
    border-color: 4px solid #0c98b1;
    margin-left: -40px;
    margin-right: 40px;
    text-align: center;
}

#card {
    height: 100%;
    margin: top 30px;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
    margin-bottom: 32px;
    text-transform: uppercase;
}

.row {
    justify-content: center;
}

.row2 li {
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
    font-size: 17px;
    justify-content: center;
    float: inline-start;
    align-items: center;
    text-align: center;
    text-decoration: none;
    text-decoration-line: none;
    list-style-type: none;
    text-transform: uppercase;
}

.nav-item a {
    margin-left: 120px;
    align-items: center;
}

a .nav-item-active {
    align-items: center;
}

.card-group {
    margin-top: 80px;
    max-width: 1200px;
    padding: 10px;
    margin: 0;
    display: flex;
    justify-content: space-between;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
    font-size: 17px;
    float: inline-start;
    text-decoration: none;
    contain: paint;
}
</style>
  