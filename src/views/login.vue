<template>
    <div class="login">
        <h3>Sign in</h3>
        <input type="text" v-model="email" placeholder="Correo"><br>
        <input type="password" v-model="password" placeholder="Contraseña"><br>
        <button @click="login">Iniciar</button>
        <p>¿No tienes cuenta?<router-link to="/sign-up">Crear cuenta</router-link></p>
    </div>
</template>

<script>
import firebase from 'firebase';
export default {
    name: 'login',
    data(){
        return{};
    },
    methods:{
        login: function() {
            firebase.auth().signInWithEmailAndPassword(this.email,this.password).then(
                ()=>{
                    this.$router.replace('home')
                },
                (err) => {
                    alert(err.message);
                }
            )
            // this.$router.replace('home');
        }
    }
}
</script>

<style scoped>
    .login{
        margin-top: 40px;
    }
    input{
        margin: 10px 0;
        width: 20%;
        padding: 15px;
    }
    button {
        margin-top: 20px;
        width: 10%;
        cursor: pointer;
    }
    p a {
        text-decoration: underline;
        cursor:pointer;
    }
</style>