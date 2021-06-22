<template>
  <div class="font events">
    <hr />
    <b-button
      v-on:click="isHidden1 = false"
      v-if="isHidden1 === true"
      type="is-primary"
      >Create Post</b-button
    >
      <b-button
      v-on:click="isHidden1 = true"
      v-if="isHidden1 === false"
      type="is-danger"
      >Cancel</b-button
    >
    <div v-if="isHidden1 === false">
      <section v-if="this.loggedIn === true"></section>

      <Add
        v-bind:loggedIn="loggedIn"
        v-bind:places="places"
        v-bind:tokens="tokens"
        v-bind:uuid="uuid"
        v-bind:URL="URL"
      />
    </div>
    <div v-if="events.code !== 'token_not_valid'">
      <li v-for="event of events" v-bind:key="event.id">
        <hr />

        <div class="box">
          <div class="columns">
            <div class="column is-one-fifth is-narrow-mobile">
              <figure class="image">
                <img :src="event.url" alt="Image" />
              </figure>
            </div>
            <div class="column is-two-fifths is-narrow-mobile">
              <h2>
                {{ event.title }}
              </h2>
              <p style="text-align: left">
                {{ event.summary }} 
              </p>

              <div v-if="isHidden === false && uid === event.id">
                <b-field label="Title">
                  <b-input v-model="title" type="text"></b-input>
                </b-field>

                <b-field label="URL">
                  <b-input v-model="url" type="text"> </b-input>
                </b-field>

                <b-field label="Summary">
                  <b-input
                    v-model="summary"
                    maxlength="300"
                    type="textarea"
                  ></b-input>
                </b-field>
                <!-- <b-button v-on:click="isHidden = true" @click="create" type="is-primary"
          >Primary</b-button
        > -->
                <b-button
                  style="margin-right: 20px;"
                  v-on:click="isHidden = true"
                  @click="editItem"
                  type="is-primary"
                  >Submit</b-button
                >
                <button
                  @click="deleteEvent"
                  class="button is-danger"
                  v-bind:id="event.id"
                >
                  Delete
                </button>
              </div>
            </div>
            <div class="column is-two-fifths is-narrow-mobile">
              <button
                v-on:click="isHidden = !isHidden"
                @click="editSelect(event)"
                class="button is-warning"
                v-bind:id="event.id"
              >
                Edit
              </button>
            </div>
          </div>


</div>
      </li>
    </div>
    <hr />
  </div>
</template>
<style scoped src="@/assets/main.css">
@media only screen and (max-width: 600px) {
  .events {
    width: 300px;
  }
  .box {
    margin-right: -75px;
    margin-left: 75px;
  }
}
@media only screen and (max-width: 400px) {
  .events {
  }
  .box {
    margin-right: -50px;
    margin-left: 15px;
  }
}
</style>
<script>
// @ is an alias to /src
import Add from "./Add.vue";
export default {
  name: "Events",
  components: {
    Add,
  },
  data: function() {
    return {
      events: [],
      title: "",
      url: "",
      summary: "",
      lat: "",
      long: "",
      user: "",
      uid: "",
      isHidden: true,
      isHidden1: true,
    };
  },
  props: ["uuid", "URL", "loggedIn", "places", "tokens"],
  methods: {
    before: function(id) {
      fetch("https://django-backend-bx.herokuapp.com/events/user/" + id + "", {
        method: "get",
        headers: {
          authorization: `Bearer ${this.tokens.access}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          this.events = data;
          
        });
      
    },
    create: function() {
      console.log(this.$attrs.places.lat);
      fetch("https://django-backend-bx.herokuapp.com/events/", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${this.tokens.access}`,
        },
        body: JSON.stringify({
          title: this.title,
          url: this.url,
          summary: this.summary,
          lat: this.$attrs.places.lat,
          long: this.$attrs.places.lng,
          user: this.uuid,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          this.before(this.uuid);
          console.log(data);
          this.title = "";
          this.summary = "";
          this.url = "";
        });
    },
    deleteEvent: function() {
      const id = event.target.id;
      console.log(id);
      fetch("https://django-backend-bx.herokuapp.com/events/" + id + "/", {
        method: "delete",
        headers: {
          authorization: `Bearer ${this.tokens.access}`,
        },
      }).then(() => {
        this.title = "";
        this.summary = "";
        this.url = "";
        console.log(this.uuid);
        this.before(this.uuid);
      });
    },
    editSelect: function(item) {
      this.title = item.title;
      this.url = item.url;
      this.summary = item.summary;
      this.uid = item.id;
    },

    editItem: async function() {
      //  const id = event.target.id
      console.log(this.uid);
      fetch(
        "https://django-backend-bx.herokuapp.com/events/" + this.uid + "/",
        {
          method: "put",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${this.tokens.access}`,
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
        }
      );
    
      this.title = "";
      this.summary = "";
      this.url = "";
      console.log(this.uuid)
      this.before(this.uuid);
   
    },
  },
  
 
  beforeMount() {
  //  const delay = ms => new Promise(res => setTimeout(res, ms));
  //  let foo = async () => {
  //     await delay(5000)
  //     console.log("waiting time")
  //       this.before(this.uuid);
  //  }
  //  foo(8000)
   this.before(this.uuid);
  },
};
</script>
