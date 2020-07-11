import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
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
  faChevronLeft,
  faChevronRight,
  faBars,
  faTrophy,
  faUserGraduate,
  faCaretDown,
  faSquare,
  faCheckSquare,
  faChevronDown,
  faGraduationCap,
  faAngleDoubleRight,
  faHandHoldingUsd,
  faUsers,
  faAward,
  faGlobe
} from '@fortawesome/free-solid-svg-icons'
import {
  faTwitter,
  faFacebook,
  faLinkedin,
  faYoutube,
  faQuora
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueYoutube from 'vue-youtube'
import VideoBackground from 'vue-responsive-video-background-player'
import 'leaflet/dist/leaflet.css'

library.add(
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
  faChevronLeft,
  faChevronRight,
  faTwitter,
  faFacebook,
  faBars,
  faLinkedin,
  faYoutube,
  faQuora,
  faTrophy,
  faUserGraduate,
  faCaretDown,
  faSquare,
  faCheckSquare,
  faChevronDown,
  faGraduationCap,
  faTrophy,
  faAngleDoubleRight,
  faHandHoldingUsd,
  faUsers,
  faAward,
  faGlobe
)
Vue.config.productionTip = false

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueYoutube)
Vue.component('video-background', VideoBackground)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
