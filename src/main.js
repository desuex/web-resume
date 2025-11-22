import {createApp} from 'vue'
import {createHead} from "@vueuse/head";
import './assets/main.css'
import App from './App.vue'
import {MotionPlugin} from "@vueuse/motion";
import {i18n} from "./i18n.js";

const app = createApp(App)
const head = createHead()
app.use(MotionPlugin)
app.use(i18n)
app.use(head)
app.mount('#app')
