import { createApp } from "vue";
import { vfmPlugin } from "vue-final-modal";
import "./style.css";
import App from "./App.vue";

const app = createApp(App);

app.use(vfmPlugin);
app.mount("#app");
