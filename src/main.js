import { createApp } from "vue";
import { createPinia } from "pinia";

import AOS from 'aos'
import 'aos/dist/aos.css'

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(AOS.init());

app.mount("#app");
