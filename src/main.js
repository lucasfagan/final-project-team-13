import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import Chart from 'chart.js'
import $ from 'jquery'
import VueFire from 'vuefire'
import Firebase from 'firebase'

import Login from './component/login.vue'
import Home from './component/home.vue'
import SimilarArtists from './component/similar_artists.vue'
import AverageAudioFeatures from './component/average_audio_features.vue'
import Timeline from './component/timeline.vue'
import TopTracksArtists from './component/top_tracks_artists.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// turn off the console note about switching to production mode
Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(VueFire)

// Initialize Firebase
var config = {
  apiKey: process.env.FIREBASE_API_KEY || "",
  authDomain: "motif-290.firebaseapp.com",
  databaseURL: "https://motif-290.firebaseio.com",
  projectId: "motif-290",
  storageBucket: "motif-290.appspot.com",
  messagingSenderId: "427568271492"
}
Firebase.initializeApp(config)

const db = Firebase.database()
const users_ref = db.ref("users")

const routes = [
  {
    path: "/",
    component: Login
  },
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/top_tracks_artists",
    name: "top_tracks_artists",
    component: TopTracksArtists
  },
  {
    path: "/average_audio_features",
    name: "average_audio_features",
    component: AverageAudioFeatures
  },
  {
    path: "/similar_artists",
    name: "similar_artists",
    component: SimilarArtists
  },
  {
    path: "/timeline",
    name: "timeline",
    component: Timeline
  }

]

const router = new VueRouter({
  routes: routes,
  mode: 'history' // GitHub Pages (and locally opening the index.html) requires "hash" mode in order to work
})


new Vue({
  el: '#app',
  render: h => h(App), router
})

export { router, db, users_ref }
