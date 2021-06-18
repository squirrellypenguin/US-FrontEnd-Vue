<template>
  <div class="events">
 
    <section>
        <b-field  label="Title">
            <b-input v-model="title" type="text" ></b-input>
        </b-field>



        <b-field label="URL">
            <b-input v-model="url" type="text" >
            </b-input>
        </b-field>

        <b-field label="Sumary">
            <b-input v-model="summary" maxlength="200" type="textarea"></b-input>
        </b-field>
        <b-button @click="create" type="is-primary">Primary</b-button>
    </section>


  <li v-for="event of events" v-bind:key="event.id">
  <b-message title="`${event.title}`" >
  {{event.title}} - {{event.summary}} - {{event.url}}
  <button @click="deleteEvent" class="button is-success" v-bind:id="event.id" > edit</button>
  </b-message> 
  </li>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Events',
  data: function () {
    return {
      events:[],
      title: '',
      url: '',
      summary: '',
    }
  },
  props: ['uuid', 'URL', 'tokens'],
  methods: {
  before : function (){
          fetch("https://django-backend-bx.herokuapp.com/events/", {
              method: 'get',
              headers: {
                
                  authorization: `Bearer ${this.tokens.access}`

              },
        
          })
          .then(response => response.json())
          .then(data => {
              this.events = data
      })
  },
  create: function () {
         console.log(this.title)
          fetch("https://django-backend-bx.herokuapp.com/events/", {
              method: 'post',
              headers: {
                  'Content-Type': 'application/json',
                  authorization: `Bearer ${this.tokens.access}`

              },      
              body:JSON.stringify ( {
                  title: this.title,
                  url: this.url,
                  summary: this.summary,
              })
        
          })
          .then(response => response.json())
          .then(data => {
              this.before()
              console.log(data)
      })
  },
    deleteEvent: function () {
        const id = event.target.id
          fetch("https://django-backend-bx.herokuapp.com/events/" + id + '/', {
              method: 'delete',
              headers: {
                  authorization: `Bearer ${this.tokens.access}`

              },      
          
        
          })
          .then(() => {
            this.before()
          })
      }
  
  },
   beforeMount(){
    this.before()
 },
  
}
</script>
