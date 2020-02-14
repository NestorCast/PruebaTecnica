import Vue from 'vue'
import firebase from 'firebase'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDjHYX0nVX2H1z55PUSs2qXjiyAKSZJ-gs",
    authDomain: "proyectvue.firebaseapp.com",
    databaseURL: "https://proyectvue.firebaseio.com",
    projectId: "proyectvue",
    storageBucket: "proyectvue.appspot.com",
    messagingSenderId: "851585697193",
    appId: "1:851585697193:web:cb503c7ddb088e0a10b0b8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  let app='';
  firebase.auth().onAuthStateChanged(() => {
    if(!app){
      app = new Vue({
        router,
        render: h =>h(App)
      }).$mount('#app')
    }
  })

// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')
