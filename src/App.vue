<template>
  <div id="app">
    
    <Header v-bind:URL="URL" v-bind:loggedIn="loggedIn" @logout="logout"/>
     
    
    <router-view v-bind:URL="URL" @loggedIn="login($event)"/>
    <Footer/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import jwt_decode from "jwt-decode";

export default {
  name: "App",
  components: {
    Header,
    Footer
  },

  data:function(){
        return {
            loggedIn: !JSON.parse(localStorage.getItem("token"))? false: true,
        
            tokens: JSON.parse(localStorage.getItem("token")),
            URL: 'https://django-backend-bx.herokuapp.com/'
        }
    },

    methods: {
      login:  function(event) {
        console.log(event)
        this.loggedIn = true
        this.tokens = event
        localStorage.setItem("token", JSON.stringify(event))
        let decoded = jwt_decode(event.access);
        let uuid = decoded.user_id
        localStorage.setItem("uuid", JSON.stringify(uuid))
        this.$router.push('/')
      },
      logout: function() {
        console.log("activated")
        this.loggedIn =false,
        this.tokens = ''
        localStorage.setItem("token", "")
        localStorage.setItem("uuid", "")
      }
    }
}
</script>


