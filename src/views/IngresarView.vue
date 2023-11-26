<template>
    <div class="row">
        <div class="col-11">
            <div id="contents" class="rounded border border-primary">
                <div class="container mt-50">
                    <div class="columns">
                        <div class="column is-6 is offset-3">
                            <div class="title is-3">Iniciar sesión</div>
                            <form action="#" @submit.prevent="register"></form>

                            <div clas="field">
                                <label class="label">Nombre</label>
                                <div class="control">
                                    <input class="input" type="text" v-model="name">

                                    <div clas="field">
                                        <label class="label">Email</label>
                                        <div class="control">
                                            <input class="input" type="text" v-model="email">

                                            <div clas="field">
                                                <label class="label">Contraseña</label>
                                                <div class="control">
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
    data() {
        return {
            name: '',
            email: '',
            password: '',
        }
    }

}
</script>