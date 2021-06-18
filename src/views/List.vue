<template>
  <div class="list">
  foo
        <GmapAutocomplete
        @place_changed='setPlace'
      />
      <button
        @click='addMarker'
      >
        Find
      </button>
      <GmapMap
      :center='center'
      :zoom='12'
      style='width:100%;  height: 400px;'
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="setPlace"
      />
    </GmapMap>
 <div v-if="events.code !== 'token_not_valid'">  
   <li v-for="event of events" v-bind:key="event.id">
  <b-message title="`${event.title}`" >
  {{event.title}} - {{event.summary}} - {{event.url}} - {{event.lat}} - {{event.long}}

  </b-message> 
  </li>
  </div>
  </div>
</template>

<script>

  export default {
    //Name property names the component
    name: "list",
  props: ['URL', 'tokens', 'uuid', 'loggedIn'], 
  components: {
  
      },
    // dat
  data() {
    return {
 center: { lat: 42.3808, lng: -70.999 },
      currentPlace: null,
      places: [{position: {lat: 42.3, lng: -71.04}}, {position: {lat: 42.3, lng: -71.14}}, ],
      markers: [{position: {lat: 42.3, lng: -71.04}}, {position: {lat: 42.3, lng: -71.14}}, ],
      events: [],
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
        addMark(x,y) {
      if (this.currentPlace) {
        const marker = {
          lat: x,
          lng: y,
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
      before : function (){
          console.log("fetch")
          fetch("https://django-backend-bx.herokuapp.com/events/", {
              method: 'get',
              headers: {
                
                  authorization: `Bearer ${this.tokens.access}`

              },
        
          })
          .then(response => response.json())
          .then(data => {
              this.events = data
              for (const element of data) {
                        const marker = {
                         lat: element.lat,
                             lng: element.long,
                                };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace); 
              }
      })
   

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
   beforeMount(){
    this.before()
    
   }
};
</script>
// @ is an alias to /src


