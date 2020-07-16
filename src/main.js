import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faPaperPlane,
  faPhoneAlt,
  faUserCheck,
  faBookReader,
  faBookOpen,
  faFutbol,
  faCertificate,
  faChalkboardTeacher,
  faBars,
  faTrophy,
  faUserGraduate,
  faCaretDown,
  faChevronDown,
  faGraduationCap,
  faAngleDoubleRight,
  faHandHoldingUsd,
  faUsers,
  faAward,
  faGlobe,
  faCheckSquare
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
  faUserCheck,
  faBookReader,
  faBookOpen,
  faFutbol,
  faCertificate,
  faChalkboardTeacher,
  faTwitter,
  faFacebook,
  faBars,
  faLinkedin,
  faYoutube,
  faQuora,
  faTrophy,
  faUserGraduate,
  faCaretDown,
  faGraduationCap,
  faTrophy,
  faAngleDoubleRight,
  faHandHoldingUsd,
  faUsers,
  faAward,
  faGlobe,
  faChevronDown,
  faCheckSquare
)
Vue.config.productionTip = false

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('video-background', VideoBackground)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
