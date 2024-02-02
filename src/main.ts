import './assets/scss/main.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { register } from 'swiper/element/bundle'

import App from './App.vue'
import router from './router'
import mixin from './mixin/globalMix'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mixin(mixin)

router.afterEach(() => {
  window.scrollTo(0, 0)
})

register();

app.directive('tel', {
  mounted(el) {
    el.addEventListener('input', (el:any) => {
      if(el.target.tagName === 'INPUT') {
        el.target.value =  el.target.value.replace(/[^\d\s()+-]/g, '')
      }
    })
  }
})




app.mount('#app')
