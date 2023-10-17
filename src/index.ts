import { setApiUrlBase } from "./apiConfig";
import * as TCEventItems from "./types/event-items.ts";
import TCEventEditorApp from "./components/TCEventEditorApp.vue";
import QuickSetup from "./components/QuickSetup.vue";

const install = (app) => {
  app.component("TCEventEditorApp", TCEventEditorApp);
};

export default {
  install,
};

export { setApiUrlBase, TCEventEditorApp, TCEventItems, QuickSetup };
