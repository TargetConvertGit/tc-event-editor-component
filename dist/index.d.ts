import { setApiUrlBase } from "./apiConfig";
import * as TCEventItems from "./types/event-items.ts";
import TCEventEditorApp from "./components/TCEventEditorApp.vue";
import { getDescription } from "./description.js";
import { getActionDescription } from "./action.js";
import { getNotifyDescription } from "./notify.js";
import "./style.css";
declare const _default: {
    install: (app: any) => void;
};
export default _default;
export { setApiUrlBase, TCEventEditorApp, TCEventItems, getDescription, getActionDescription, getNotifyDescription, };
