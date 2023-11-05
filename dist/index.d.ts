import { setApiUrlBase, setToken } from "./apiConfig";
import * as TCEventItems from "./types/event-items.ts";
import TCEventEditorApp from "./components/TCEventEditorApp.vue";
import { getDescription } from "./description.js";
import { getActionDescription } from "./action.js";
import { getNotifyDescription } from "./notify.js";
declare const _default: {
    install: (app: any) => void;
};
export default _default;
export { setApiUrlBase, setToken, TCEventEditorApp, TCEventItems, getDescription, getActionDescription, getNotifyDescription, };
