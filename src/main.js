import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faSearch,
  faPlusCircle,
  faMinusCircle,
  faCheck,
  faTimes,
  faHome,
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faPaperPlane,
  faPhoneAlt,
  faArrowRight,
  faUserCheck,
  faBookReader,
  faBookOpen,
  faFutbol,
  faCertificate,
  faRunning,
  faShieldAlt,
  faSchool,
  faPlus,
  faChalkboardTeacher,
  faCaretLeft,
  faCaretRight,
  faChevronLeft,
  faChevronRight,
  faCircle,
  faBars
} from '@fortawesome/free-solid-svg-icons'
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faPinterest,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueYoutube from 'vue-youtube'
import 'leaflet/dist/leaflet.css'

library.add(
  faSearch,
  faPlusCircle,
  faMinusCircle,
  faCheck,
  faTimes,
  faHome,
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faPaperPlane,
  faPhoneAlt,
  faArrowRight,
  faUserCheck,
  faBookReader,
  faBookOpen,
  faFutbol,
  faCertificate,
  faRunning,
  faShieldAlt,
  faSchool,
  faPlus,
  faChalkboardTeacher,
  faCaretLeft,
  faCaretRight,
  faChevronLeft,
  faChevronRight,
  faCircle,
  faTwitter,
  faFacebook,
  faInstagram,
  faPinterest,
  faBars,
  faLinkedin
)
Vue.config.productionTip = false

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueYoutube)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
