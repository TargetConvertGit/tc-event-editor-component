import { setApiUrlBase } from "./apiConfig";
import * as TCEventItems from "./types/event-items.ts";
import TCEventEditorApp from "./components/TCEventEditorApp.vue";
import { getDescription } from "./description.js";
import { getActionDescription } from "./action.js";
import { getNotifyDescription } from "./notify.js";

import "./style.scss";

const install = (app) => {
  app.component("TCEventEditorApp", TCEventEditorApp);
};

export default {
  install,
};

export {
  setApiUrlBase,
  TCEventEditorApp,
  TCEventItems,
  getDescription,
  getActionDescription,
  getNotifyDescription,
};
