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
          <b-button @click="editItem" type="is-primary">blah</b-button>
    </section>


  <li v-for="event of events" v-bind:key="event.id">
  <b-message title="`${event.title}`" >
  {{event.title}} - {{event.summary}} - {{event.url}}
  <button @click="editSelect(event)" class="button is-success" v-bind:id="event.id" >Edit</button>
  <button @click="deleteEvent" class="button is-success" v-bind:id="event.id" >Delete</button>
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
      lat: '',
      long: '',
      user: '',
      uid: '',
    }
  },
  props: ['uuid', 'URL', 'tokens'],
  methods: {
  before : function (id){
          
          fetch("https://django-backend-bx.herokuapp.com/events/user/" + id, {
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
         console.log(this.$attrs.places.lat)
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
                  lat: this.$attrs.places.lat,
                  long: this.$attrs.places.lng,
                  user: this.uuid

              })
            
          })
          .then(response => response.json())
          .then(data => {
              this.before()
              console.log(data)
              this.title = ''
              this.summary = ''
              this.url = ''
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
                    this.title = ''
              this.summary = ''
              this.url = ''
            this.before()
          })
      },
    editSelect: function (item) {
        this.title = item.title
        this.url = item.url
        this.summary = item.summary
        this.uid = item.id
      },
         
         editItem: async function () {
                    //  const id = event.target.id
       let foo =     fetch("https://django-backend-bx.herokuapp.com/events/" + this.uid + '/', {
          method: "put",
          headers: {
                       'Content-Type': 'application/json',
                  authorization: `Bearer ${this.tokens.access}`
          },
          body: JSON.stringify({
            title: this.title,
            url: this.url,
            summary: this.summary,
            // lat: this.editLat,
            // latRef: "N",
            // long: this.editLong,
            // picture_id: "",
            // longRef: "N",
            // userid: "http://localhost:8000/api/user/3/",
          }),
        })
        console.log(foo)
            this.title = ''
              this.summary = ''
              this.url = ''
        this.before()
      },  
  
  },
   beforeMount(){
    this.before(this.uuid)
 },
  
}
</script>
