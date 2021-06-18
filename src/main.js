import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyABHQe7J6OOFzhEhAabIcasklxhDP_kfr0',
    libraries: 'places',
  }
});

Vue.use(Buefy)


Vue.use(Buefy)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
