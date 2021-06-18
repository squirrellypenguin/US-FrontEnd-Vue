<template>
<div>
<GoogleView v-bind:tokens="tokens" v-bind:uuid="uuid" v-bind:URL="URL"/>

<!-- <ItemMap /> -->
</div>
</template>

<script>
import GoogleView from './GoogleView.vue'
// import ItemMap from './ItemMap.vue'
  export default {
    //Name property names the component
    name: "Map",
    components: {
        GoogleView,
        // ItemMap
      },
           props: ['URL', 'tokens', 'uuid', 'loggedIn'],

    // data property has a function that returns an object with app data
   
  }
</script>