<template>
    <div class="row">
        <div class="col-11">
            <div id="contents" class="rounded border border-primary">
                <h3 class="justify-content-center">Bienvenido a Nuestro Sitio </h3>
                <div class="container justify-content-center mt-50">
                    <div class="columns justify-content-center">
                        <div class="column is-6 is offset-3">
                            <div class="title is-3 mb-3 ">Iniciar sesión</div>
                            <form action="#" @submit.prevent="register"></form>

                            <div clas="field justify-content-center">
                                <label class="label">Nombre</label>
                                <div class="control">
                                    <input class="input" type="text" v-model="name">

                                    <div clas="field justify-content-center">
                                        <label class="label">Email</label>
                                        <div class="control">
                                            <input class="input" type="text" v-model="email">

                                            <div clas="field justify-content-center">
                                                <label class="label">Contraseña</label>
                                                <div class="control mb-3">
                                                    <input class="input" type="text" v-model="password">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "LoginComponent",
    props: {
        msg: String
    }
}
</script>

<style scoped>

h3{
    display:flex;
    text-align:center;
}

</style>