<template>
  <div id="item">


    <h1>The Todo App</h1>
    <hr />
    <h1>Create a </h1>
    <form v-on:submit.prevent="createItem">
      <input type="text" v-model="createName" placeholder="Name"/>
       <input type="text" v-model="createUrl" placeholder="Link" />
       
      <textarea v-model="createBody" placeholder="Notes . . ."></textarea>
      <input type="submit" />
    </form>
    <hr />
    <h1>Edit a Todo</h1>
    <form v-on:submit.prevent="editItem">
      <input type="text" v-model="editName" />
      <input type="text" v-model="editUrl" />
     <textarea v-model="editBody"></textarea>
      <input type="submit" />
    </form>
    <hr />
    <h3>ITEMS</h3>
    <hr />
  
    <ul>
      <li v-for="item of items" v-bind:key="item.id">
        **********************
        <h4>{{item.name}}</h4>
        <h2>{{item.id}}</h2>

        **********************
        <button v-on:click="() => editSelect(item)">Edit</button>
        <button v-on:click="() => deleteItem(item)">Delete</button>
      </li>
    </ul>
  </div>
</template>


<script>


  export default {
    //Name property names the component
    
    name: "item",
    props: {
      places: {
        type: Object,}
    },
    components: {
      // "Home":Home,
      // "Item":Item
      },
    // data property has a function that returns an object with app data
    data: function () {
      return {
       items: [],
       baseUrl: "https://django-backend-bx.herokuapp.com/api/events/",
      //  createTitle: "",
      //  createEmail: "",
      //  createBody: "",
      //  editTitle: "",
      //  editBody: "",
      //  editEmail: "",
      editId: 0,
      createName: "",
      createBody: "",
      createPicture: "",
      createUrl: "",
      createLat: "",
      createLong: "",
      createGps: '',
      createUserid: "",
      // HARDCODED USER VARIABLE NEED MAKE SELECTED
      // UserID: "http://localhost:8000/api/user/3/",
      editBody: "",
      editPicture: "",
      editUrl: "",
      editName: "",
      editLat: "",
      editLong: "",
      editGps: '',
      editPictureID: "",
      // HARDCODED USER VARIABLE NEED MAKE SELECTED
      
      }
    },
    //methods is an object of functions
    methods: {
      getItems: async function () {
        const response = await fetch("http://localhost:8000/api/item/")
        const data = await response.json()
        console.log(data)
   
        this.items = data
      },
      createItem: async function () {
        // console.log(places[0].vicinty)
        await fetch(this.baseUrl, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: this.createName,
            url: this.createUrl,
            gps: this.createGps,
            body: this.createBody,
            lat: this.places.lat,
            // latRef: "F",
            long: this.places.lng,
            // longRef: "F",
            userid: "http://localhost:8000/api/user/3/"
          }),
        })
        this.createName = ""
        this.createBody = ""
        this.createGps = 'addresss'
        this.getItems()
      },
      editSelect: function (item) {
        this.editName = item.name
        this.editBody = item.body
        this.editGps = item.gps
        this.editId = item.id
      },
      editItem: async function () {
       let foo = await fetch(this.baseUrl + this.editId + '/', {
          method: "put",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: this.editName,
            url: this.editUrl,
            gps: this.editGps,
            body: this.editBody,
            // lat: this.editLat,
            // latRef: "N",
            // long: this.editLong,
            // picture_id: "",
            // longRef: "N",
            // userid: "http://localhost:8000/api/user/3/",
          }),
        })
        console.log(foo)
        this.editName= ""
        this.editBody = ""
        this.editGps= ""
        this.editId = 0
        this.getItems()
      },
      deleteItem: async function (item) {
        await fetch(this.baseUrl + item.id + "/" , {
          method: "delete",
        })
        this.getItems()
      },
    },
    //create runs after components is initially created, one of many lifecycle functions
    created: function () {
      this.getItems()
    },
  }
</script>