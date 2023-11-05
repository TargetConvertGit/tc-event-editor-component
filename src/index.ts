import { setApiUrlBase, setToken } from "./apiConfig";
import * as TCEventItems from "./types/event-items.ts";
import TCEventEditorApp from "./components/TCEventEditorApp.vue";
import { getDescription } from "./description.js";

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
};
