import { setApiUrlBase, setToken } from "./apiConfig";
import * as TCEventItems from "./types/event-items.ts";
import TCEventEditorApp from "./components/TCEventEditorApp.vue";
import { getDescription } from "./description.js";
import { getActionDescription } from "./action.js";
import { getNotifyDescription } from "./notify.js";
// import "./style.css";

const install = (app) => {
  app.component("TCEventEditorApp", TCEventEditorApp);
};

export default {
  install,
};

export {
  setApiUrlBase,
  setToken,
  TCEventEditorApp,
  TCEventItems,
  getDescription,
  getActionDescription,
  getNotifyDescription,
};
