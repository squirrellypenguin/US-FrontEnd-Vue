<template>
  <div class="login">
   
      <section>
       
{{this.URL}}
        <b-field label="Username">
            <b-input value="johnsilver" v-model="username"></b-input>
        </b-field>

        <b-field label="Password">
            <b-input value="123" type="password" v-model="password"></b-input>
           
        </b-field>
        <button class='button is-danger' @click="handleLogin">Login</button>
    </section>


    <!-- <section>
      
<input class='input is-primary' type="text" v-model="username" />
<input class='input is-primary' type="password" v-model="password" />
<br />
<button class='button is-danger' @click="handleLogin">Login</button>
    </section>
 -->




  </div>
</template>
<style>

.login {
width: 70%;
margin: 10px auto;}
</style>
<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Login',
  components: {
    
  },
  data:function() {
      return {
            username: '',
            password: '',
           
      }
  },
  props: ['URL'],
  methods: {
      handleLogin: function() {
          console.log(this.URL)
          fetch("https://django-backend-bx.herokuapp.com/api/token/", {
              method: 'post',
              headers: {
                  "Content-Type":"application/json"
              },
              body:JSON.stringify ( {
                  username: this.username,
                  password: this.password
              })
          })
          .then(response => response.json())
          .then(data => {
              this.$emit('loggedIn', data)
      })
  }
  }
  
      
}
</script>
