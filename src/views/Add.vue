<template>
  <div class="add">
    <h2 style="padding-bottom: 20px">Add your report</h2>
    <form enctype="multipart/form-data">
    <div class="columns">
    <div class="column">
      <b-field style="width:100%" > <b-input v-model="inputName" placeholder="Enter the title"></b-input></b-field>
      <input class="button" type="file" ref="inputFile" @change=uploadFile()>
    </div>
    <div class="column" >
            <b-field >
            <b-input placeholder="Enter a summary oif the event" style="width:100%" v-model="inputDescription" maxlength="300" type="textarea"></b-input>
        </b-field>
    <!-- <p>Summary :<textarea style="width:100%" ></textarea></p> -->
    
    
   
    </div>
    
    </div>
       <button class="button is-success is-light" @click=createItem>Create this Item !</button>
    </form>
  </div>
</template>
<style>
.input .button {

}
</style>
<script>
import axios from 'axios';
  export default {
    //Name property names the component
    name: "add",
    components: {
        
        // ItemMap
      },
      props: ['URL', 'tokens', 'uuid', 'places', 'loggedIn'],
  // Here is the data we get from our HTML Form.
  data () {
    return {
      inputName: "",
      inputDescription: "",
      inputPicture: null
    }
  },
  methods: {
    // Saving the file in our data to send it !
    uploadFile: function() {
      this.inputPicture = this.$refs.inputFile.files[0];
    },

    // Collecting everything inside our FormData object
    createItem: function() {
      const params = {
        'title': this.inputName,
        'summary': this.inputDescription,
        'picture': this.inputPicture,
        'lat': this.places.lat,
        'long': this.places.lng,
        'user_id': this.uuid
      }
      console.log(this.places.lat)
      let formData = new FormData()

      Object.entries(params).forEach(
        ([key, value]) => formData.append(key, value)
      )
  
      // Finally, sending the POST request with our beloved Axios
      axios.post('https://django-backend-bx.herokuapp.com/upload-image', formData, {
        headers: {
          'authorization': `Bearer ${this.tokens.access}`,
          'Accept' : 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
    // return  response;
    console.log(response)
      })
      .catch((error) => {
    //return  error;
    console.log(error)
      });
    }
  }
}
</script>

// @ is an alias to /src


