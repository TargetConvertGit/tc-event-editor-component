import { openBlock as r, createElementBlock as s } from "vue";
const _ = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [n, c] of e)
    o[n] = c;
  return o;
}, l = {};
function d(t, e) {
  return r(), s("div", null, "TC Event Editor is loaded.");
}
const p = /* @__PURE__ */ _(l, [["render", d]]);
export {
  p as TCEventEditorApp
};
