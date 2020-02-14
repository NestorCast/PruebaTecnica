<template>
    <div class="sign-up">
        <p>Crear cuenta</p>
        <input type="text" v-model="email" placeholder="Correo"><br>
        <input type="password" v-model="password" placeholder="Contraseña"><br>
        <button @click="signUp">Regístrate</button>
        <span>Regresar a inicio de sesión<router-link to="/login">Iniciar Sesión</router-link></span>
    </div>
</template>

<script>
import firebase from 'firebase';

export default {
    name: 'signUp',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        signUp: function(){
            firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then(
                () => {
                    this.$router.replace('home')
                },
                (err) => {
                    alert(err.message)
                }
            )
        }
    }
}
</script>

<style scoped>
    .signUp {
        margin-top: 40px;
    }
    input {
        margin: 10px 0;
        width: 20%;
        padding: 15px;
    }
    button {
        margin-top: 10px;
        width: 20%;
        padding: 15px;
    }
    span {
        display: block;
        margin-top: 20px;
        font-size: 11px;
    }
</style>