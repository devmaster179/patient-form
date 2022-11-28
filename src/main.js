import { createApp } from 'vue'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import router from './router'
import './assets/style.css';

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App);
app.use(vuetify);
app.use(router).mount("#app");

// import { createApp } from 'vue'
// import vuetify from '@/plugins/vuetify' // path to vuetify export
// import App from './App.vue'
// import router from './router'

// const app = createApp(App);

// app.use(vuetify);

// app.use(router).mount("#app");