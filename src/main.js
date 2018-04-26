import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import 'material-design-icons-iconfont/dist/material-design-icons.min.css'

import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  VCard,
  VDivider,
  transitions
} from 'vuetify'
import '../node_modules/vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    VCard,
    VDivider,
    transitions
  },
  theme: {
    primary: '#FDD835',
    secondary: '#FFF59D',
    accent: '#FFD600',
    error: '#f44336',
    warning: '#FF5722',
    info: '#2196f3',
    success: '#4caf50'
  },
})

import './assets/stylus/main.styl'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
