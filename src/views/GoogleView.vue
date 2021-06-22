<template>
<div>
    
    
    <div v-if="this.loggedIn !== true">
    <br/>
    Please login to view your events. <br/>
  <br/>
   <router-link to="/login" v-bind:URL="URL" v-if="!loggedIn"><button class="button is-success">Login</button></router-link>
    </div>



  <div   v-if="this.loggedIn === true">

    <div>
      <h2>Click to submit position</h2>
      <button class="button is-info is-light"
        @click='addMarker'
      >
        Provide
      </button>
      
      <GmapAutocomplete  style="line-height: 34px; font-size: 20px;"  placeholder=" the location"
        @place_changed='setPlace'
      />
    </div>
    <br>
    <GmapMap
      :center='center'
      :zoom='12'
      style='width:100%;  height: 400px;'
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      />
    </GmapMap>
    <Events v-bind:loggedIn="loggedIn" :places="center"  v-bind:tokens="tokens" v-bind:uuid="uuid" v-bind:URL="URL"/>

  </div>
  </div>
</template>

<script>
    import Events from './Events.vue'

export default {
  name: 'GoogleView',   
  props: ['URL', 'tokens', 'uuid', 'loggedIn'], 
  components: {
    Events
      },
    // dat
  data() {
    return {
 center: { lat: 42.3808, lng: -70.999 },
      currentPlace: null,
      markers: [],
      places: [],
    }
  },
  // mounted() {
  //   this.geolocate();
  // },
  methods: {
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng(),
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    },
  },
};
</script>