<template>
  <div class="home">
  <Map v-bind:loggedIn="loggedIn" v-bind:tokens="tokens" v-bind:uuid="uuid" v-bind:URL="URL" />
  </div>
</template>
<style>
.home {
width: 100%;
}

</style>
<script>
import Map from './Map.vue'

  export default {
    //Name property names the component
    name: "home",
    components: {
        Map
        // ItemMap
      },
      props: ['URL', 'tokens', 'uuid', 'loggedIn'],
    // data property has a function that returns an object with app data
   
  }
</script>
// @ is an alias to /src


