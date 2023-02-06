// import {
//   createApp
// } from 'vue'
// import App from './App.vue'


// createApp(App).mount('#app')
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {
  createApp
} from "vue";

/* import the fontawesome core */
import {
  library
} from '@fortawesome/fontawesome-svg-core'

/* 
   import specific icons 
   원하는 아이콘을 개별적으로 import
*/
import {
  faUserSecret
} from '@fortawesome/free-solid-svg-icons'

/* import font awesome 컴포넌트 */
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

/* 위에서 import한 아이콘들을 Core library에 등록 */
library.add(faUserSecret)

/* font awesome 컴포넌트를 전역으로 등록 */
// Vue.component('font-awesome-icon', FontAwesomeIcon)

// Vue.config.productionTip = false


export const app = createApp(App)
app.AOS = new AOS.init({
  disable: "phone"
});

app.use(AOS).mount('#app')