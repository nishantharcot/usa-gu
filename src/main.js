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
import vuetify from './plugins/vuetify'
import VideoBackground from 'vue-responsive-video-background-player'

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
Vue.component('video-background', VideoBackground)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
