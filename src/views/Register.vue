<template>
  <div class="register">
   
      <section>
       
{{this.URL}}
        <b-field label="Username">
            <b-input value="johnsilver" v-model="username"></b-input>
        </b-field>

        <b-field label="Password">
            <b-input value="123" type="password" v-model="password"></b-input>
        </b-field>
        <b-field label="Email">
            <b-input value="123" type="text" v-model="email"></b-input>
           
        </b-field>
           <b-field label="First">
            <b-input value="123" type="text" v-model="first_name"></b-input>
           
        </b-field>
           <b-field label="Last">
            <b-input value="123" type="text" v-model="last_name"></b-input>
           
        </b-field>
        <button class='button is-danger' @click="handleLogin">Sign Ups</button>
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
  name: 'Register',
  components: {
    
  },
  data:function() {
      return {
            username: '',
            password: '',
            first_name: '',
            last_name: '',
            email: '',
           
      }
  },
   props: ['URL', 'uuid', 'tokens', 'loggedIn'],
  methods: {
      handleLogin: function() {
          console.log(this.URL)
          fetch("https://django-backend-bx.herokuapp.com/users/", {
              method: 'post',
              headers: {
                  "Content-Type":"application/json"
              },
              body:JSON.stringify ( {
                  username: this.username,
                  password: this.password,
                  first_name: this.first_name,
                  last_name: this.last_name,
                  email: this.email
              })
          })
          .then(response => response.json())
          .then(data => {
              this.$router.push('/login')
              console.log(data)
      })
  }
  }
  
      
}
</script>
