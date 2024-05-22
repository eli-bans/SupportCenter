import "./assets/style.css";
import "./icons";

import App from "./App.vue";
import router from "./router";

import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const app = createApp(App);

app.use(router);
app.use("/robots.txt");
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
