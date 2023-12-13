import { defineComponent as Le, openBlock as F, createElementBlock as z, createElementVNode as j, toDisplayString as ke, h as Yr, getCurrentInstance as xr, effectScope as Q0, inject as Tt, onMounted as Vr, onUnmounted as Cs, shallowRef as Ah, ref as J, computed as Y, onBeforeMount as WA, watch as ze, Fragment as Xe, isRef as un, createVNode as Pe, Text as UA, unref as y, getCurrentScope as Mh, onScopeDispose as Ch, shallowReadonly as Ci, mergeProps as nn, cloneVNode as BA, toRefs as io, reactive as El, mergeDefaults as ey, watchEffect as Gn, normalizeStyle as Es, withCtx as We, renderSlot as yt, markRaw as Tg, createBlock as tt, readonly as HA, nextTick as rr, onBeforeUnmount as ty, withKeys as Fd, withModifiers as xs, createCommentVNode as Te, resolveDynamicComponent as xc, normalizeProps as Ki, guardReactiveProps as Ph, provide as aa, customRef as ny, onBeforeUpdate as VA, onUpdated as jA, toHandlerKey as GA, camelize as ry, Teleport as ay, renderList as Lt, normalizeClass as it, withDirectives as br, toRef as md, resolveComponent as zs, Transition as Ol, createTextVNode as li, resolveDirective as zA, toHandlers as qA, vModelCheckbox as sy, vModelSelect as Ui, defineAsyncComponent as KA, vShow as iy } from "vue";
let oy = "", ly = "";
function EQ(e) {
  oy = e;
}
function ZA(e) {
  ly = e;
}
function XA() {
  return oy;
}
function JA() {
  return ly;
}
class QA {
  // 取得列舉索引
  getEnumKey(t, n) {
    return t[n];
  }
  // 從字串解析事件本身
  parseItem(t) {
    return JSON.parse(t);
  }
  getCurrent() {
    return (/* @__PURE__ */ new Date()).toISOString();
  }
}
var ll = /* @__PURE__ */ ((e) => (e[e.None = -1] = "None", e[e.All = 3] = "All", e[e.Error = 4] = "Error", e))(ll || {}), uy = /* @__PURE__ */ ((e) => (e[e.Off = 0] = "Off", e[e.On = 1] = "On", e))(uy || {}), ln = /* @__PURE__ */ ((e) => (e[e.Google = 1] = "Google", e[e.Facebook = 2] = "Facebook", e))(ln || {}), Rr = /* @__PURE__ */ ((e) => (e[e.Campaign = 2] = "Campaign", e[e.AdGroup = 3] = "AdGroup", e[e.AdTag = 5] = "AdTag", e))(Rr || {}), Bn = /* @__PURE__ */ ((e) => (e[e.Campaign = 2] = "Campaign", e[e.AdGroup = 3] = "AdGroup", e[e.Ad = 4] = "Ad", e[e.AdTag = 5] = "AdTag", e))(Bn || {}), Os = /* @__PURE__ */ ((e) => (e[e.ForAll = 1] = "ForAll", e[e.ForID = 2] = "ForID", e[e.ForActive = 3] = "ForActive", e))(Os || {}), cy = /* @__PURE__ */ ((e) => (e[e.Account = 1] = "Account", e[e.Campaign = 2] = "Campaign", e[e.AdGroup = 3] = "AdGroup", e))(cy || {}), fy = /* @__PURE__ */ ((e) => (e[e.Account = 1] = "Account", e[e.Campaign = 2] = "Campaign", e[e.AdGroup = 3] = "AdGroup", e))(fy || {}), xt = /* @__PURE__ */ ((e) => (e[e.Never = -1] = "Never", e[e.Hour = 1] = "Hour", e[e.Day = 2] = "Day", e))(xt || {}), _r = /* @__PURE__ */ ((e) => (e[e.Sunday = 0] = "Sunday", e[e.Monday = 1] = "Monday", e[e.Tuesday = 2] = "Tuesday", e[e.Wednesday = 3] = "Wednesday", e[e.Thursday = 4] = "Thursday", e[e.Friday = 5] = "Friday", e[e.Saturday = 6] = "Saturday", e[e.Weekday = -1] = "Weekday", e[e.Weekend = -2] = "Weekend", e))(_r || {}), Pa = /* @__PURE__ */ ((e) => (e[e.First = 1] = "First", e[e.Second = 2] = "Second", e[e.Third = 3] = "Third", e[e.Fourth = 4] = "Fourth", e[e.Fifth = 5] = "Fifth", e[e.Last = -1] = "Last", e))(Pa || {}), Un = /* @__PURE__ */ ((e) => (e[e.January = 1] = "January", e[e.February = 2] = "February", e[e.March = 3] = "March", e[e.April = 4] = "April", e[e.May = 5] = "May", e[e.June = 6] = "June", e[e.July = 7] = "July", e[e.August = 8] = "August", e[e.September = 9] = "September", e[e.October = 10] = "October", e[e.November = 11] = "November", e[e.December = 12] = "December", e))(Un || {}), Fe = /* @__PURE__ */ ((e) => (e[e.SetNewBudget = 1] = "SetNewBudget", e[e.IncreaseBudget = 2] = "IncreaseBudget", e[e.LowerBudget = 3] = "LowerBudget", e[e.OpenProject = 4] = "OpenProject", e[e.SuspendProject = 5] = "SuspendProject", e[e.None = -1] = "None", e))(Fe || {}), Gs = /* @__PURE__ */ ((e) => (e.DailyBudget = "dailyBudget", e.TotalBudget = "totalBudget", e))(Gs || {}), st = /* @__PURE__ */ ((e) => (e.Value = "value", e.Percentage = "percentage", e))(st || {}), dy = /* @__PURE__ */ ((e) => (e.BudgetRemaining = "accountBudget", e.BudgetCap = "budgetCap", e.Clicks = "clicks", e.Impressions = "impressions", e.Cpc = "cpc", e.Spend = "cost", e.Conversions = "conversions", e.ConversionSpend = "conversionsValue", e.ReturnOnADSpending = "roas", e))(dy || {}), hy = /* @__PURE__ */ ((e) => (e[e.Today = 1] = "Today", e[e.Yesterday = 2] = "Yesterday", e[e.Last3Days = 3] = "Last3Days", e[e.Last7Days = 4] = "Last7Days", e[e.ThisMonth = 5] = "ThisMonth", e[e.SpecifiedTime = -1] = "SpecifiedTime", e))(hy || {}), py = /* @__PURE__ */ ((e) => (e.MoreThan = ">", e.GreaterOrEqualTo = ">=", e.Equal = "==", e.LessThan = "<", e.LessThanOrEqualTo = "<=", e))(py || {});
const OQ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ActionType: Fe,
  AdLevelTypeFacebook: Bn,
  AdLevelTypeGoogle: Rr,
  BudgetType: Gs,
  ClientType: ln,
  ConditionAdLevelTypeFacebook: fy,
  ConditionAdLevelTypeGoogle: cy,
  ConditionType: dy,
  DateRangeType: hy,
  EmailNotify: ll,
  EventActionTargetType: Os,
  EventHelper: QA,
  FrequencyType: xt,
  MonthType: Un,
  OperationType: py,
  ToggleNotify: uy,
  ValueType: st,
  WeekOrdinalWordsType: Pa,
  WeekdaysType: _r
}, Symbol.toStringTag, { value: "Module" })), eM = { class: "flex" }, tM = ["checked", "id"], nM = ["for"], rM = /* @__PURE__ */ Le({
  __name: "CheckBox",
  props: {
    label: {},
    checked: { type: Boolean },
    fieldId: {}
  },
  emits: ["update:checked"],
  setup(e, { emit: t }) {
    return (n, r) => (F(), z("div", eM, [
      j("input", {
        onInput: r[0] || (r[0] = (s) => n.$emit("update:checked", s.target.checked)),
        type: "checkbox",
        checked: n.checked,
        id: n.fieldId,
        class: "hidden"
      }, null, 40, tM),
      j("label", {
        for: n.fieldId,
        class: "p3-b text-dark-3 cursor-pointer rounded hover:bg-light-4 shadow-01 px-1 py-0.5 flex justify-center items-center min-w-[1.75rem] min-h-[1.75rem]"
      }, ke(n.label), 9, nM)
    ]));
  }
});
const Dl = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
  return n;
}, Ag = /* @__PURE__ */ Dl(rM, [["__scopeId", "data-v-4f6ab498"]]);
/*!
  * shared v9.5.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */
const ia = typeof window < "u";
let ar, ti;
if (process.env.NODE_ENV !== "production") {
  const e = ia && window.performance;
  e && e.mark && e.measure && e.clearMarks && // @ts-ignore browser compat
  e.clearMeasures && (ar = (t) => {
    e.mark(t);
  }, ti = (t, n, r) => {
    e.measure(t, n, r), e.clearMarks(n), e.clearMarks(r);
  });
}
const aM = /\{([0-9a-zA-Z]+)\}/g;
function Nh(e, ...t) {
  return t.length === 1 && bt(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(aM, (n, r) => t.hasOwnProperty(r) ? t[r] : "");
}
const ca = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), sM = (e, t, n) => iM({ l: e, k: t, s: n }), iM = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), cn = (e) => typeof e == "number" && isFinite(e), oM = (e) => vy(e) === "[object Date]", Ss = (e) => vy(e) === "[object RegExp]", Sc = (e) => Ke(e) && Object.keys(e).length === 0, gn = Object.assign;
let Mg;
const Na = () => Mg || (Mg = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Cg(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const lM = Object.prototype.hasOwnProperty;
function $h(e, t) {
  return lM.call(e, t);
}
const Rt = Array.isArray, qt = (e) => typeof e == "function", ve = (e) => typeof e == "string", ut = (e) => typeof e == "boolean", bt = (e) => e !== null && typeof e == "object", my = Object.prototype.toString, vy = (e) => my.call(e), Ke = (e) => {
  if (!bt(e))
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t.constructor === Object;
}, uM = (e) => e == null ? "" : Rt(e) || Ke(e) && e.toString === my ? JSON.stringify(e, null, 2) : String(e);
function cM(e, t = "") {
  return e.reduce((n, r, s) => s === 0 ? n + r : n + t + r, "");
}
const Pg = 2;
function fM(e, t = 0, n = e.length) {
  const r = e.split(/\r?\n/);
  let s = 0;
  const i = [];
  for (let l = 0; l < r.length; l++)
    if (s += r[l].length + 1, s >= t) {
      for (let u = l - Pg; u <= l + Pg || n > s; u++) {
        if (u < 0 || u >= r.length)
          continue;
        const f = u + 1;
        i.push(`${f}${" ".repeat(3 - String(f).length)}|  ${r[u]}`);
        const h = r[u].length;
        if (u === l) {
          const d = t - (s - h) + 1, m = Math.max(1, n > s ? h - d : n - t);
          i.push("   |  " + " ".repeat(d) + "^".repeat(m));
        } else if (u > l) {
          if (n > s) {
            const d = Math.max(Math.min(n - s, h), 1);
            i.push("   |  " + "^".repeat(d));
          }
          s += h + 1;
        }
      }
      break;
    }
  return i.join(`
`);
}
function Ih(e) {
  let t = e;
  return () => ++t;
}
function hn(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const Ng = {};
function dM(e) {
  Ng[e] || (Ng[e] = !0, hn(e));
}
function Lh() {
  const e = /* @__PURE__ */ new Map();
  return {
    events: e,
    on(n, r) {
      const s = e.get(n);
      s && s.push(r) || e.set(n, [r]);
    },
    off(n, r) {
      const s = e.get(n);
      s && s.splice(s.indexOf(r) >>> 0, 1);
    },
    emit(n, r) {
      (e.get(n) || []).slice().map((s) => s(r)), (e.get("*") || []).slice().map((s) => s(n, r));
    }
  };
}
/*!
  * message-compiler v9.5.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */
function hM(e, t, n) {
  return { line: e, column: t, offset: n };
}
function Yd(e, t, n) {
  const r = { start: e, end: t };
  return n != null && (r.source = n), r;
}
const pM = /\{([0-9a-zA-Z]+)\}/g;
function mM(e, ...t) {
  return t.length === 1 && vM(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(pM, (n, r) => t.hasOwnProperty(r) ? t[r] : "");
}
const gy = Object.assign, $g = (e) => typeof e == "string", vM = (e) => e !== null && typeof e == "object";
function _y(e, t = "") {
  return e.reduce((n, r, s) => s === 0 ? n + r : n + t + r, "");
}
const Ge = {
  // tokenizer error codes
  EXPECTED_TOKEN: 1,
  INVALID_TOKEN_IN_PLACEHOLDER: 2,
  UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
  UNKNOWN_ESCAPE_SEQUENCE: 4,
  INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
  UNBALANCED_CLOSING_BRACE: 6,
  UNTERMINATED_CLOSING_BRACE: 7,
  EMPTY_PLACEHOLDER: 8,
  NOT_ALLOW_NEST_PLACEHOLDER: 9,
  INVALID_LINKED_FORMAT: 10,
  // parser error codes
  MUST_HAVE_MESSAGES_IN_PLURAL: 11,
  UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
  UNEXPECTED_EMPTY_LINKED_KEY: 13,
  UNEXPECTED_LEXICAL_ANALYSIS: 14,
  // generator error codes
  UNHANDLED_CODEGEN_NODE_TYPE: 15,
  // minifier error codes
  UNHANDLED_MINIFIER_NODE_TYPE: 16,
  // Special value for higher-order compilers to pick up the last code
  // to avoid collision of error codes. This should always be kept as the last
  // item.
  __EXTEND_POINT__: 17
}, gM = {
  // tokenizer error messages
  [Ge.EXPECTED_TOKEN]: "Expected token: '{0}'",
  [Ge.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
  [Ge.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
  [Ge.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
  [Ge.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
  [Ge.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
  [Ge.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
  [Ge.EMPTY_PLACEHOLDER]: "Empty placeholder",
  [Ge.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
  [Ge.INVALID_LINKED_FORMAT]: "Invalid linked format",
  // parser error messages
  [Ge.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
  [Ge.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
  [Ge.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
  [Ge.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
  // generator error messages
  [Ge.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
  // minimizer error messages
  [Ge.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
};
function oo(e, t, n = {}) {
  const { domain: r, messages: s, args: i } = n, l = mM((s || gM)[e] || "", ...i || []), u = new SyntaxError(String(l));
  return u.code = e, t && (u.location = t), u.domain = r, u;
}
function _M(e) {
  throw e;
}
const yM = /<\/?[\w\s="/.':;#-\/]+>/, bM = (e) => yM.test(e), Ta = " ", wM = "\r", Pn = `
`, EM = String.fromCharCode(8232), OM = String.fromCharCode(8233);
function DM(e) {
  const t = e;
  let n = 0, r = 1, s = 1, i = 0;
  const l = (I) => t[I] === wM && t[I + 1] === Pn, u = (I) => t[I] === Pn, f = (I) => t[I] === OM, h = (I) => t[I] === EM, d = (I) => l(I) || u(I) || f(I) || h(I), m = () => n, v = () => r, g = () => s, w = () => i, E = (I) => l(I) || f(I) || h(I) ? Pn : t[I], k = () => E(n), b = () => E(n + i);
  function D() {
    return i = 0, d(n) && (r++, s = 0), l(n) && n++, n++, s++, t[n];
  }
  function T() {
    return l(n + i) && i++, i++, t[n + i];
  }
  function x() {
    n = 0, r = 1, s = 1, i = 0;
  }
  function C(I = 0) {
    i = I;
  }
  function M() {
    const I = n + i;
    for (; I !== n; )
      D();
    i = 0;
  }
  return {
    index: m,
    line: v,
    column: g,
    peekOffset: w,
    charAt: E,
    currentChar: k,
    currentPeek: b,
    next: D,
    peek: T,
    reset: x,
    resetPeek: C,
    skipToPeek: M
  };
}
const fs = void 0, xM = ".", Ig = "'", SM = "tokenizer";
function kM(e, t = {}) {
  const n = t.location !== !1, r = DM(e), s = () => r.index(), i = () => hM(r.line(), r.column(), r.index()), l = i(), u = s(), f = {
    currentType: 14,
    offset: u,
    startLoc: l,
    endLoc: l,
    lastType: 14,
    lastOffset: u,
    lastStartLoc: l,
    lastEndLoc: l,
    braceNest: 0,
    inLinked: !1,
    text: ""
  }, h = () => f, { onError: d } = t;
  function m(N, A, G, ...he) {
    const Ee = h();
    if (A.column += G, A.offset += G, d) {
      const qe = n ? Yd(Ee.startLoc, A) : null, Ht = oo(N, qe, {
        domain: SM,
        args: he
      });
      d(Ht);
    }
  }
  function v(N, A, G) {
    N.endLoc = i(), N.currentType = A;
    const he = { type: A };
    return n && (he.loc = Yd(N.startLoc, N.endLoc)), G != null && (he.value = G), he;
  }
  const g = (N) => v(
    N,
    14
    /* TokenTypes.EOF */
  );
  function w(N, A) {
    return N.currentChar() === A ? (N.next(), A) : (m(Ge.EXPECTED_TOKEN, i(), 0, A), "");
  }
  function E(N) {
    let A = "";
    for (; N.currentPeek() === Ta || N.currentPeek() === Pn; )
      A += N.currentPeek(), N.peek();
    return A;
  }
  function k(N) {
    const A = E(N);
    return N.skipToPeek(), A;
  }
  function b(N) {
    if (N === fs)
      return !1;
    const A = N.charCodeAt(0);
    return A >= 97 && A <= 122 || // a-z
    A >= 65 && A <= 90 || // A-Z
    A === 95;
  }
  function D(N) {
    if (N === fs)
      return !1;
    const A = N.charCodeAt(0);
    return A >= 48 && A <= 57;
  }
  function T(N, A) {
    const { currentType: G } = A;
    if (G !== 2)
      return !1;
    E(N);
    const he = b(N.currentPeek());
    return N.resetPeek(), he;
  }
  function x(N, A) {
    const { currentType: G } = A;
    if (G !== 2)
      return !1;
    E(N);
    const he = N.currentPeek() === "-" ? N.peek() : N.currentPeek(), Ee = D(he);
    return N.resetPeek(), Ee;
  }
  function C(N, A) {
    const { currentType: G } = A;
    if (G !== 2)
      return !1;
    E(N);
    const he = N.currentPeek() === Ig;
    return N.resetPeek(), he;
  }
  function M(N, A) {
    const { currentType: G } = A;
    if (G !== 8)
      return !1;
    E(N);
    const he = N.currentPeek() === ".";
    return N.resetPeek(), he;
  }
  function I(N, A) {
    const { currentType: G } = A;
    if (G !== 9)
      return !1;
    E(N);
    const he = b(N.currentPeek());
    return N.resetPeek(), he;
  }
  function R(N, A) {
    const { currentType: G } = A;
    if (!(G === 8 || G === 12))
      return !1;
    E(N);
    const he = N.currentPeek() === ":";
    return N.resetPeek(), he;
  }
  function V(N, A) {
    const { currentType: G } = A;
    if (G !== 10)
      return !1;
    const he = () => {
      const qe = N.currentPeek();
      return qe === "{" ? b(N.peek()) : qe === "@" || qe === "%" || qe === "|" || qe === ":" || qe === "." || qe === Ta || !qe ? !1 : qe === Pn ? (N.peek(), he()) : b(qe);
    }, Ee = he();
    return N.resetPeek(), Ee;
  }
  function $(N) {
    E(N);
    const A = N.currentPeek() === "|";
    return N.resetPeek(), A;
  }
  function q(N) {
    const A = E(N), G = N.currentPeek() === "%" && N.peek() === "{";
    return N.resetPeek(), {
      isModulo: G,
      hasSpace: A.length > 0
    };
  }
  function W(N, A = !0) {
    const G = (Ee = !1, qe = "", Ht = !1) => {
      const Ot = N.currentPeek();
      return Ot === "{" ? qe === "%" ? !1 : Ee : Ot === "@" || !Ot ? qe === "%" ? !0 : Ee : Ot === "%" ? (N.peek(), G(Ee, "%", !0)) : Ot === "|" ? qe === "%" || Ht ? !0 : !(qe === Ta || qe === Pn) : Ot === Ta ? (N.peek(), G(!0, Ta, Ht)) : Ot === Pn ? (N.peek(), G(!0, Pn, Ht)) : !0;
    }, he = G();
    return A && N.resetPeek(), he;
  }
  function se(N, A) {
    const G = N.currentChar();
    return G === fs ? fs : A(G) ? (N.next(), G) : null;
  }
  function me(N) {
    return se(N, (G) => {
      const he = G.charCodeAt(0);
      return he >= 97 && he <= 122 || // a-z
      he >= 65 && he <= 90 || // A-Z
      he >= 48 && he <= 57 || // 0-9
      he === 95 || // _
      he === 36;
    });
  }
  function ce(N) {
    return se(N, (G) => {
      const he = G.charCodeAt(0);
      return he >= 48 && he <= 57;
    });
  }
  function ye(N) {
    return se(N, (G) => {
      const he = G.charCodeAt(0);
      return he >= 48 && he <= 57 || // 0-9
      he >= 65 && he <= 70 || // A-F
      he >= 97 && he <= 102;
    });
  }
  function Ae(N) {
    let A = "", G = "";
    for (; A = ce(N); )
      G += A;
    return G;
  }
  function Ue(N) {
    k(N);
    const A = N.currentChar();
    return A !== "%" && m(Ge.EXPECTED_TOKEN, i(), 0, A), N.next(), "%";
  }
  function Re(N) {
    let A = "";
    for (; ; ) {
      const G = N.currentChar();
      if (G === "{" || G === "}" || G === "@" || G === "|" || !G)
        break;
      if (G === "%")
        if (W(N))
          A += G, N.next();
        else
          break;
      else if (G === Ta || G === Pn)
        if (W(N))
          A += G, N.next();
        else {
          if ($(N))
            break;
          A += G, N.next();
        }
      else
        A += G, N.next();
    }
    return A;
  }
  function re(N) {
    k(N);
    let A = "", G = "";
    for (; A = me(N); )
      G += A;
    return N.currentChar() === fs && m(Ge.UNTERMINATED_CLOSING_BRACE, i(), 0), G;
  }
  function Me(N) {
    k(N);
    let A = "";
    return N.currentChar() === "-" ? (N.next(), A += `-${Ae(N)}`) : A += Ae(N), N.currentChar() === fs && m(Ge.UNTERMINATED_CLOSING_BRACE, i(), 0), A;
  }
  function mt(N) {
    k(N), w(N, "'");
    let A = "", G = "";
    const he = (qe) => qe !== Ig && qe !== Pn;
    for (; A = se(N, he); )
      A === "\\" ? G += At(N) : G += A;
    const Ee = N.currentChar();
    return Ee === Pn || Ee === fs ? (m(Ge.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, i(), 0), Ee === Pn && (N.next(), w(N, "'")), G) : (w(N, "'"), G);
  }
  function At(N) {
    const A = N.currentChar();
    switch (A) {
      case "\\":
      case "'":
        return N.next(), `\\${A}`;
      case "u":
        return Se(N, A, 4);
      case "U":
        return Se(N, A, 6);
      default:
        return m(Ge.UNKNOWN_ESCAPE_SEQUENCE, i(), 0, A), "";
    }
  }
  function Se(N, A, G) {
    w(N, A);
    let he = "";
    for (let Ee = 0; Ee < G; Ee++) {
      const qe = ye(N);
      if (!qe) {
        m(Ge.INVALID_UNICODE_ESCAPE_SEQUENCE, i(), 0, `\\${A}${he}${N.currentChar()}`);
        break;
      }
      he += qe;
    }
    return `\\${A}${he}`;
  }
  function nt(N) {
    k(N);
    let A = "", G = "";
    const he = (Ee) => Ee !== "{" && Ee !== "}" && Ee !== Ta && Ee !== Pn;
    for (; A = se(N, he); )
      G += A;
    return G;
  }
  function le(N) {
    let A = "", G = "";
    for (; A = me(N); )
      G += A;
    return G;
  }
  function pe(N) {
    const A = (G = !1, he) => {
      const Ee = N.currentChar();
      return Ee === "{" || Ee === "%" || Ee === "@" || Ee === "|" || Ee === "(" || Ee === ")" || !Ee || Ee === Ta ? he : Ee === Pn || Ee === xM ? (he += Ee, N.next(), A(G, he)) : (he += Ee, N.next(), A(!0, he));
    };
    return A(!1, "");
  }
  function Oe(N) {
    k(N);
    const A = w(
      N,
      "|"
      /* TokenChars.Pipe */
    );
    return k(N), A;
  }
  function ge(N, A) {
    let G = null;
    switch (N.currentChar()) {
      case "{":
        return A.braceNest >= 1 && m(Ge.NOT_ALLOW_NEST_PLACEHOLDER, i(), 0), N.next(), G = v(
          A,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), k(N), A.braceNest++, G;
      case "}":
        return A.braceNest > 0 && A.currentType === 2 && m(Ge.EMPTY_PLACEHOLDER, i(), 0), N.next(), G = v(
          A,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), A.braceNest--, A.braceNest > 0 && k(N), A.inLinked && A.braceNest === 0 && (A.inLinked = !1), G;
      case "@":
        return A.braceNest > 0 && m(Ge.UNTERMINATED_CLOSING_BRACE, i(), 0), G = ne(N, A) || g(A), A.braceNest = 0, G;
      default:
        let Ee = !0, qe = !0, Ht = !0;
        if ($(N))
          return A.braceNest > 0 && m(Ge.UNTERMINATED_CLOSING_BRACE, i(), 0), G = v(A, 1, Oe(N)), A.braceNest = 0, A.inLinked = !1, G;
        if (A.braceNest > 0 && (A.currentType === 5 || A.currentType === 6 || A.currentType === 7))
          return m(Ge.UNTERMINATED_CLOSING_BRACE, i(), 0), A.braceNest = 0, be(N, A);
        if (Ee = T(N, A))
          return G = v(A, 5, re(N)), k(N), G;
        if (qe = x(N, A))
          return G = v(A, 6, Me(N)), k(N), G;
        if (Ht = C(N, A))
          return G = v(A, 7, mt(N)), k(N), G;
        if (!Ee && !qe && !Ht)
          return G = v(A, 13, nt(N)), m(Ge.INVALID_TOKEN_IN_PLACEHOLDER, i(), 0, G.value), k(N), G;
        break;
    }
    return G;
  }
  function ne(N, A) {
    const { currentType: G } = A;
    let he = null;
    const Ee = N.currentChar();
    switch ((G === 8 || G === 9 || G === 12 || G === 10) && (Ee === Pn || Ee === Ta) && m(Ge.INVALID_LINKED_FORMAT, i(), 0), Ee) {
      case "@":
        return N.next(), he = v(
          A,
          8,
          "@"
          /* TokenChars.LinkedAlias */
        ), A.inLinked = !0, he;
      case ".":
        return k(N), N.next(), v(
          A,
          9,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return k(N), N.next(), v(
          A,
          10,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return $(N) ? (he = v(A, 1, Oe(N)), A.braceNest = 0, A.inLinked = !1, he) : M(N, A) || R(N, A) ? (k(N), ne(N, A)) : I(N, A) ? (k(N), v(A, 12, le(N))) : V(N, A) ? (k(N), Ee === "{" ? ge(N, A) || he : v(A, 11, pe(N))) : (G === 8 && m(Ge.INVALID_LINKED_FORMAT, i(), 0), A.braceNest = 0, A.inLinked = !1, be(N, A));
    }
  }
  function be(N, A) {
    let G = {
      type: 14
      /* TokenTypes.EOF */
    };
    if (A.braceNest > 0)
      return ge(N, A) || g(A);
    if (A.inLinked)
      return ne(N, A) || g(A);
    switch (N.currentChar()) {
      case "{":
        return ge(N, A) || g(A);
      case "}":
        return m(Ge.UNBALANCED_CLOSING_BRACE, i(), 0), N.next(), v(
          A,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return ne(N, A) || g(A);
      default:
        if ($(N))
          return G = v(A, 1, Oe(N)), A.braceNest = 0, A.inLinked = !1, G;
        const { isModulo: Ee, hasSpace: qe } = q(N);
        if (Ee)
          return qe ? v(A, 0, Re(N)) : v(A, 4, Ue(N));
        if (W(N))
          return v(A, 0, Re(N));
        break;
    }
    return G;
  }
  function Be() {
    const { currentType: N, offset: A, startLoc: G, endLoc: he } = f;
    return f.lastType = N, f.lastOffset = A, f.lastStartLoc = G, f.lastEndLoc = he, f.offset = s(), f.startLoc = i(), r.currentChar() === fs ? v(
      f,
      14
      /* TokenTypes.EOF */
    ) : be(r, f);
  }
  return {
    nextToken: Be,
    currentOffset: s,
    currentPosition: i,
    context: h
  };
}
const TM = "parser", AM = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function MM(e, t, n) {
  switch (e) {
    case "\\\\":
      return "\\";
    case "\\'":
      return "'";
    default: {
      const r = parseInt(t || n, 16);
      return r <= 55295 || r >= 57344 ? String.fromCodePoint(r) : "�";
    }
  }
}
function CM(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function r(b, D, T, x, ...C) {
    const M = b.currentPosition();
    if (M.offset += x, M.column += x, n) {
      const I = t ? Yd(T, M) : null, R = oo(D, I, {
        domain: TM,
        args: C
      });
      n(R);
    }
  }
  function s(b, D, T) {
    const x = { type: b };
    return t && (x.start = D, x.end = D, x.loc = { start: T, end: T }), x;
  }
  function i(b, D, T, x) {
    x && (b.type = x), t && (b.end = D, b.loc && (b.loc.end = T));
  }
  function l(b, D) {
    const T = b.context(), x = s(3, T.offset, T.startLoc);
    return x.value = D, i(x, b.currentOffset(), b.currentPosition()), x;
  }
  function u(b, D) {
    const T = b.context(), { lastOffset: x, lastStartLoc: C } = T, M = s(5, x, C);
    return M.index = parseInt(D, 10), b.nextToken(), i(M, b.currentOffset(), b.currentPosition()), M;
  }
  function f(b, D) {
    const T = b.context(), { lastOffset: x, lastStartLoc: C } = T, M = s(4, x, C);
    return M.key = D, b.nextToken(), i(M, b.currentOffset(), b.currentPosition()), M;
  }
  function h(b, D) {
    const T = b.context(), { lastOffset: x, lastStartLoc: C } = T, M = s(9, x, C);
    return M.value = D.replace(AM, MM), b.nextToken(), i(M, b.currentOffset(), b.currentPosition()), M;
  }
  function d(b) {
    const D = b.nextToken(), T = b.context(), { lastOffset: x, lastStartLoc: C } = T, M = s(8, x, C);
    return D.type !== 12 ? (r(b, Ge.UNEXPECTED_EMPTY_LINKED_MODIFIER, T.lastStartLoc, 0), M.value = "", i(M, x, C), {
      nextConsumeToken: D,
      node: M
    }) : (D.value == null && r(b, Ge.UNEXPECTED_LEXICAL_ANALYSIS, T.lastStartLoc, 0, Qr(D)), M.value = D.value || "", i(M, b.currentOffset(), b.currentPosition()), {
      node: M
    });
  }
  function m(b, D) {
    const T = b.context(), x = s(7, T.offset, T.startLoc);
    return x.value = D, i(x, b.currentOffset(), b.currentPosition()), x;
  }
  function v(b) {
    const D = b.context(), T = s(6, D.offset, D.startLoc);
    let x = b.nextToken();
    if (x.type === 9) {
      const C = d(b);
      T.modifier = C.node, x = C.nextConsumeToken || b.nextToken();
    }
    switch (x.type !== 10 && r(b, Ge.UNEXPECTED_LEXICAL_ANALYSIS, D.lastStartLoc, 0, Qr(x)), x = b.nextToken(), x.type === 2 && (x = b.nextToken()), x.type) {
      case 11:
        x.value == null && r(b, Ge.UNEXPECTED_LEXICAL_ANALYSIS, D.lastStartLoc, 0, Qr(x)), T.key = m(b, x.value || "");
        break;
      case 5:
        x.value == null && r(b, Ge.UNEXPECTED_LEXICAL_ANALYSIS, D.lastStartLoc, 0, Qr(x)), T.key = f(b, x.value || "");
        break;
      case 6:
        x.value == null && r(b, Ge.UNEXPECTED_LEXICAL_ANALYSIS, D.lastStartLoc, 0, Qr(x)), T.key = u(b, x.value || "");
        break;
      case 7:
        x.value == null && r(b, Ge.UNEXPECTED_LEXICAL_ANALYSIS, D.lastStartLoc, 0, Qr(x)), T.key = h(b, x.value || "");
        break;
      default:
        r(b, Ge.UNEXPECTED_EMPTY_LINKED_KEY, D.lastStartLoc, 0);
        const C = b.context(), M = s(7, C.offset, C.startLoc);
        return M.value = "", i(M, C.offset, C.startLoc), T.key = M, i(T, C.offset, C.startLoc), {
          nextConsumeToken: x,
          node: T
        };
    }
    return i(T, b.currentOffset(), b.currentPosition()), {
      node: T
    };
  }
  function g(b) {
    const D = b.context(), T = D.currentType === 1 ? b.currentOffset() : D.offset, x = D.currentType === 1 ? D.endLoc : D.startLoc, C = s(2, T, x);
    C.items = [];
    let M = null;
    do {
      const V = M || b.nextToken();
      switch (M = null, V.type) {
        case 0:
          V.value == null && r(b, Ge.UNEXPECTED_LEXICAL_ANALYSIS, D.lastStartLoc, 0, Qr(V)), C.items.push(l(b, V.value || ""));
          break;
        case 6:
          V.value == null && r(b, Ge.UNEXPECTED_LEXICAL_ANALYSIS, D.lastStartLoc, 0, Qr(V)), C.items.push(u(b, V.value || ""));
          break;
        case 5:
          V.value == null && r(b, Ge.UNEXPECTED_LEXICAL_ANALYSIS, D.lastStartLoc, 0, Qr(V)), C.items.push(f(b, V.value || ""));
          break;
        case 7:
          V.value == null && r(b, Ge.UNEXPECTED_LEXICAL_ANALYSIS, D.lastStartLoc, 0, Qr(V)), C.items.push(h(b, V.value || ""));
          break;
        case 8:
          const $ = v(b);
          C.items.push($.node), M = $.nextConsumeToken || null;
          break;
      }
    } while (D.currentType !== 14 && D.currentType !== 1);
    const I = D.currentType === 1 ? D.lastOffset : b.currentOffset(), R = D.currentType === 1 ? D.lastEndLoc : b.currentPosition();
    return i(C, I, R), C;
  }
  function w(b, D, T, x) {
    const C = b.context();
    let M = x.items.length === 0;
    const I = s(1, D, T);
    I.cases = [], I.cases.push(x);
    do {
      const R = g(b);
      M || (M = R.items.length === 0), I.cases.push(R);
    } while (C.currentType !== 14);
    return M && r(b, Ge.MUST_HAVE_MESSAGES_IN_PLURAL, T, 0), i(I, b.currentOffset(), b.currentPosition()), I;
  }
  function E(b) {
    const D = b.context(), { offset: T, startLoc: x } = D, C = g(b);
    return D.currentType === 14 ? C : w(b, T, x, C);
  }
  function k(b) {
    const D = kM(b, gy({}, e)), T = D.context(), x = s(0, T.offset, T.startLoc);
    return t && x.loc && (x.loc.source = b), x.body = E(D), e.onCacheKey && (x.cacheKey = e.onCacheKey(b)), T.currentType !== 14 && r(D, Ge.UNEXPECTED_LEXICAL_ANALYSIS, T.lastStartLoc, 0, b[T.offset] || ""), i(x, D.currentOffset(), D.currentPosition()), x;
  }
  return { parse: k };
}
function Qr(e) {
  if (e.type === 14)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function PM(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (i) => (n.helpers.add(i), i) };
}
function Lg(e, t) {
  for (let n = 0; n < e.length; n++)
    Rh(e[n], t);
}
function Rh(e, t) {
  switch (e.type) {
    case 1:
      Lg(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      Lg(e.items, t);
      break;
    case 6:
      Rh(e.key, t), t.helper(
        "linked"
        /* HelperNameMap.LINKED */
      ), t.helper(
        "type"
        /* HelperNameMap.TYPE */
      );
      break;
    case 5:
      t.helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      ), t.helper(
        "list"
        /* HelperNameMap.LIST */
      );
      break;
    case 4:
      t.helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      ), t.helper(
        "named"
        /* HelperNameMap.NAMED */
      );
      break;
  }
}
function NM(e, t = {}) {
  const n = PM(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && Rh(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function $M(e) {
  const t = e.body;
  return t.type === 2 ? Rg(t) : t.cases.forEach((n) => Rg(n)), e;
}
function Rg(e) {
  if (e.items.length === 1) {
    const t = e.items[0];
    (t.type === 3 || t.type === 9) && (e.static = t.value, delete t.value);
  } else {
    const t = [];
    for (let n = 0; n < e.items.length; n++) {
      const r = e.items[n];
      if (!(r.type === 3 || r.type === 9) || r.value == null)
        break;
      t.push(r.value);
    }
    if (t.length === e.items.length) {
      e.static = _y(t);
      for (let n = 0; n < e.items.length; n++) {
        const r = e.items[n];
        (r.type === 3 || r.type === 9) && delete r.value;
      }
    }
  }
}
const IM = "minifier";
function Ii(e) {
  switch (e.t = e.type, e.type) {
    case 0:
      const t = e;
      Ii(t.body), t.b = t.body, delete t.body;
      break;
    case 1:
      const n = e, r = n.cases;
      for (let d = 0; d < r.length; d++)
        Ii(r[d]);
      n.c = r, delete n.cases;
      break;
    case 2:
      const s = e, i = s.items;
      for (let d = 0; d < i.length; d++)
        Ii(i[d]);
      s.i = i, delete s.items, s.static && (s.s = s.static, delete s.static);
      break;
    case 3:
    case 9:
    case 8:
    case 7:
      const l = e;
      l.value && (l.v = l.value, delete l.value);
      break;
    case 6:
      const u = e;
      Ii(u.key), u.k = u.key, delete u.key, u.modifier && (Ii(u.modifier), u.m = u.modifier, delete u.modifier);
      break;
    case 5:
      const f = e;
      f.i = f.index, delete f.index;
      break;
    case 4:
      const h = e;
      h.k = h.key, delete h.key;
      break;
    default:
      throw oo(Ge.UNHANDLED_MINIFIER_NODE_TYPE, null, {
        domain: IM,
        args: [e.type]
      });
  }
  delete e.type;
}
const LM = "parser";
function RM(e, t) {
  const { sourceMap: n, filename: r, breakLineCode: s, needIndent: i } = t, l = t.location !== !1, u = {
    filename: r,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode: s,
    needIndent: i,
    indentLevel: 0
  };
  l && e.loc && (u.source = e.loc.source);
  const f = () => u;
  function h(k, b) {
    u.code += k;
  }
  function d(k, b = !0) {
    const D = b ? s : "";
    h(i ? D + "  ".repeat(k) : D);
  }
  function m(k = !0) {
    const b = ++u.indentLevel;
    k && d(b);
  }
  function v(k = !0) {
    const b = --u.indentLevel;
    k && d(b);
  }
  function g() {
    d(u.indentLevel);
  }
  return {
    context: f,
    push: h,
    indent: m,
    deindent: v,
    newline: g,
    helper: (k) => `_${k}`,
    needIndent: () => u.needIndent
  };
}
function FM(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), Zi(e, t.key), t.modifier ? (e.push(", "), Zi(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function YM(e, t) {
  const { helper: n, needIndent: r } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(r());
  const s = t.items.length;
  for (let i = 0; i < s && (Zi(e, t.items[i]), i !== s - 1); i++)
    e.push(", ");
  e.deindent(r()), e.push("])");
}
function WM(e, t) {
  const { helper: n, needIndent: r } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(r());
    const s = t.cases.length;
    for (let i = 0; i < s && (Zi(e, t.cases[i]), i !== s - 1); i++)
      e.push(", ");
    e.deindent(r()), e.push("])");
  }
}
function UM(e, t) {
  t.body ? Zi(e, t.body) : e.push("null");
}
function Zi(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      UM(e, t);
      break;
    case 1:
      WM(e, t);
      break;
    case 2:
      YM(e, t);
      break;
    case 6:
      FM(e, t);
      break;
    case 8:
      e.push(JSON.stringify(t.value), t);
      break;
    case 7:
      e.push(JSON.stringify(t.value), t);
      break;
    case 5:
      e.push(`${n(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      )}(${n(
        "list"
        /* HelperNameMap.LIST */
      )}(${t.index}))`, t);
      break;
    case 4:
      e.push(`${n(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      )}(${n(
        "named"
        /* HelperNameMap.NAMED */
      )}(${JSON.stringify(t.key)}))`, t);
      break;
    case 9:
      e.push(JSON.stringify(t.value), t);
      break;
    case 3:
      e.push(JSON.stringify(t.value), t);
      break;
    default:
      throw oo(Ge.UNHANDLED_CODEGEN_NODE_TYPE, null, {
        domain: LM,
        args: [t.type]
      });
  }
}
const BM = (e, t = {}) => {
  const n = $g(t.mode) ? t.mode : "normal", r = $g(t.filename) ? t.filename : "message.intl", s = !!t.sourceMap, i = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, l = t.needIndent ? t.needIndent : n !== "arrow", u = e.helpers || [], f = RM(e, {
    mode: n,
    filename: r,
    sourceMap: s,
    breakLineCode: i,
    needIndent: l
  });
  f.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), f.indent(l), u.length > 0 && (f.push(`const { ${_y(u.map((m) => `${m}: _${m}`), ", ")} } = ctx`), f.newline()), f.push("return "), Zi(f, e), f.deindent(l), f.push("}"), delete e.helpers;
  const { code: h, map: d } = f.context();
  return {
    ast: e,
    code: h,
    map: d ? d.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function HM(e, t = {}) {
  const n = gy({}, t), r = !!n.jit, s = !!n.minify, i = n.optimize == null ? !0 : n.optimize, u = CM(n).parse(e);
  return r ? (i && $M(u), s && Ii(u), { ast: u, code: "" }) : (NM(u, n), BM(u, n));
}
/*!
  * core-base v9.5.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */
function VM() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Na().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (Na().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Na().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const Ps = [];
Ps[
  0
  /* States.BEFORE_PATH */
] = {
  w: [
    0
    /* States.BEFORE_PATH */
  ],
  i: [
    3,
    0
    /* Actions.APPEND */
  ],
  "[": [
    4
    /* States.IN_SUB_PATH */
  ],
  o: [
    7
    /* States.AFTER_PATH */
  ]
};
Ps[
  1
  /* States.IN_PATH */
] = {
  w: [
    1
    /* States.IN_PATH */
  ],
  ".": [
    2
    /* States.BEFORE_IDENT */
  ],
  "[": [
    4
    /* States.IN_SUB_PATH */
  ],
  o: [
    7
    /* States.AFTER_PATH */
  ]
};
Ps[
  2
  /* States.BEFORE_IDENT */
] = {
  w: [
    2
    /* States.BEFORE_IDENT */
  ],
  i: [
    3,
    0
    /* Actions.APPEND */
  ],
  0: [
    3,
    0
    /* Actions.APPEND */
  ]
};
Ps[
  3
  /* States.IN_IDENT */
] = {
  i: [
    3,
    0
    /* Actions.APPEND */
  ],
  0: [
    3,
    0
    /* Actions.APPEND */
  ],
  w: [
    1,
    1
    /* Actions.PUSH */
  ],
  ".": [
    2,
    1
    /* Actions.PUSH */
  ],
  "[": [
    4,
    1
    /* Actions.PUSH */
  ],
  o: [
    7,
    1
    /* Actions.PUSH */
  ]
};
Ps[
  4
  /* States.IN_SUB_PATH */
] = {
  "'": [
    5,
    0
    /* Actions.APPEND */
  ],
  '"': [
    6,
    0
    /* Actions.APPEND */
  ],
  "[": [
    4,
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ],
  "]": [
    1,
    3
    /* Actions.PUSH_SUB_PATH */
  ],
  o: 8,
  l: [
    4,
    0
    /* Actions.APPEND */
  ]
};
Ps[
  5
  /* States.IN_SINGLE_QUOTE */
] = {
  "'": [
    4,
    0
    /* Actions.APPEND */
  ],
  o: 8,
  l: [
    5,
    0
    /* Actions.APPEND */
  ]
};
Ps[
  6
  /* States.IN_DOUBLE_QUOTE */
] = {
  '"': [
    4,
    0
    /* Actions.APPEND */
  ],
  o: 8,
  l: [
    6,
    0
    /* Actions.APPEND */
  ]
};
const jM = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function GM(e) {
  return jM.test(e);
}
function zM(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function qM(e) {
  if (e == null)
    return "o";
  switch (e.charCodeAt(0)) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
      return e;
    case 95:
    case 36:
    case 45:
      return "i";
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
      return "w";
  }
  return "i";
}
function KM(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : GM(t) ? zM(t) : "*" + t;
}
function ZM(e) {
  const t = [];
  let n = -1, r = 0, s = 0, i, l, u, f, h, d, m;
  const v = [];
  v[
    0
    /* Actions.APPEND */
  ] = () => {
    l === void 0 ? l = u : l += u;
  }, v[
    1
    /* Actions.PUSH */
  ] = () => {
    l !== void 0 && (t.push(l), l = void 0);
  }, v[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    v[
      0
      /* Actions.APPEND */
    ](), s++;
  }, v[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (s > 0)
      s--, r = 4, v[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (s = 0, l === void 0 || (l = KM(l), l === !1))
        return !1;
      v[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function g() {
    const w = e[n + 1];
    if (r === 5 && w === "'" || r === 6 && w === '"')
      return n++, u = "\\" + w, v[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; r !== null; )
    if (n++, i = e[n], !(i === "\\" && g())) {
      if (f = qM(i), m = Ps[r], h = m[f] || m.l || 8, h === 8 || (r = h[0], h[1] !== void 0 && (d = v[h[1]], d && (u = i, d() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const Fg = /* @__PURE__ */ new Map();
function XM(e, t) {
  return bt(e) ? e[t] : null;
}
function JM(e, t) {
  if (!bt(e))
    return null;
  let n = Fg.get(t);
  if (n || (n = ZM(t), n && Fg.set(t, n)), !n)
    return null;
  const r = n.length;
  let s = e, i = 0;
  for (; i < r; ) {
    const l = s[n[i]];
    if (l === void 0)
      return null;
    s = l, i++;
  }
  return s;
}
const QM = (e) => e, eC = (e) => "", tC = "text", nC = (e) => e.length === 0 ? "" : cM(e), rC = uM;
function Yg(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function aC(e) {
  const t = cn(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (cn(e.named.count) || cn(e.named.n)) ? cn(e.named.count) ? e.named.count : cn(e.named.n) ? e.named.n : t : t;
}
function sC(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function iC(e = {}) {
  const t = e.locale, n = aC(e), r = bt(e.pluralRules) && ve(t) && qt(e.pluralRules[t]) ? e.pluralRules[t] : Yg, s = bt(e.pluralRules) && ve(t) && qt(e.pluralRules[t]) ? Yg : void 0, i = (b) => b[r(n, b.length, s)], l = e.list || [], u = (b) => l[b], f = e.named || {};
  cn(e.pluralIndex) && sC(n, f);
  const h = (b) => f[b];
  function d(b) {
    const D = qt(e.messages) ? e.messages(b) : bt(e.messages) ? e.messages[b] : !1;
    return D || (e.parent ? e.parent.message(b) : eC);
  }
  const m = (b) => e.modifiers ? e.modifiers[b] : QM, v = Ke(e.processor) && qt(e.processor.normalize) ? e.processor.normalize : nC, g = Ke(e.processor) && qt(e.processor.interpolate) ? e.processor.interpolate : rC, w = Ke(e.processor) && ve(e.processor.type) ? e.processor.type : tC, k = {
    list: u,
    named: h,
    plural: i,
    linked: (b, ...D) => {
      const [T, x] = D;
      let C = "text", M = "";
      D.length === 1 ? bt(T) ? (M = T.modifier || M, C = T.type || C) : ve(T) && (M = T || M) : D.length === 2 && (ve(T) && (M = T || M), ve(x) && (C = x || C));
      const I = d(b)(k), R = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        C === "vnode" && Rt(I) && M ? I[0] : I
      );
      return M ? m(M)(R, C) : R;
    },
    message: d,
    type: w,
    interpolate: g,
    normalize: v,
    values: gn({}, l, f)
  };
  return k;
}
let ul = null;
function oC(e) {
  ul = e;
}
function lC(e, t, n) {
  ul && ul.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: n
  });
}
const uC = /* @__PURE__ */ cC(
  "function:translate"
  /* IntlifyDevToolsHooks.FunctionTranslate */
);
function cC(e) {
  return (t) => ul && ul.emit(e, t);
}
const Nn = {
  NOT_FOUND_KEY: 1,
  FALLBACK_TO_TRANSLATE: 2,
  CANNOT_FORMAT_NUMBER: 3,
  FALLBACK_TO_NUMBER_FORMAT: 4,
  CANNOT_FORMAT_DATE: 5,
  FALLBACK_TO_DATE_FORMAT: 6,
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: 7,
  __EXTEND_POINT__: 8
}, fC = {
  [Nn.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
  [Nn.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
  [Nn.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
  [Nn.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
  [Nn.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
  [Nn.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale.",
  [Nn.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: "This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future."
};
function ni(e, ...t) {
  return Nh(fC[e], ...t);
}
function Fh(e, t) {
  return t.locale != null ? Wg(t.locale) : Wg(e.locale);
}
let vd;
function Wg(e) {
  return ve(e) ? e : vd != null && e.resolvedOnce ? vd : vd = e();
}
function dC(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...Rt(t) ? t : bt(t) ? Object.keys(t) : ve(t) ? [t] : [n]
  ])];
}
function yy(e, t, n) {
  const r = ve(n) ? n : Xi, s = e;
  s.__localeChainCache || (s.__localeChainCache = /* @__PURE__ */ new Map());
  let i = s.__localeChainCache.get(r);
  if (!i) {
    i = [];
    let l = [n];
    for (; Rt(l); )
      l = Ug(i, l, t);
    const u = Rt(t) || !Ke(t) ? t : t.default ? t.default : null;
    l = ve(u) ? [u] : u, Rt(l) && Ug(i, l, !1), s.__localeChainCache.set(r, i);
  }
  return i;
}
function Ug(e, t, n) {
  let r = !0;
  for (let s = 0; s < t.length && ut(r); s++) {
    const i = t[s];
    ve(i) && (r = hC(e, t[s], n));
  }
  return r;
}
function hC(e, t, n) {
  let r;
  const s = t.split("-");
  do {
    const i = s.join("-");
    r = pC(e, i, n), s.splice(-1, 1);
  } while (s.length && r === !0);
  return r;
}
function pC(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== "!";
    const s = t.replace(/!/g, "");
    e.push(s), (Rt(n) || Ke(n)) && n[s] && (r = n[s]);
  }
  return r;
}
const mC = "9.5.0", kc = -1, Xi = "en-US", Ku = "", Bg = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function vC() {
  return {
    upper: (e, t) => t === "text" && ve(e) ? e.toUpperCase() : t === "vnode" && bt(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && ve(e) ? e.toLowerCase() : t === "vnode" && bt(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && ve(e) ? Bg(e) : t === "vnode" && bt(e) && "__v_isVNode" in e ? Bg(e.children) : e
  };
}
let by;
function Hg(e) {
  by = e;
}
let wy;
function gC(e) {
  wy = e;
}
let Ey;
function _C(e) {
  Ey = e;
}
let Oy = null;
const Vg = (e) => {
  Oy = e;
}, yC = () => Oy;
let Dy = null;
const jg = (e) => {
  Dy = e;
}, bC = () => Dy;
let Gg = 0;
function wC(e = {}) {
  const t = qt(e.onWarn) ? e.onWarn : hn, n = ve(e.version) ? e.version : mC, r = ve(e.locale) || qt(e.locale) ? e.locale : Xi, s = qt(r) ? Xi : r, i = Rt(e.fallbackLocale) || Ke(e.fallbackLocale) || ve(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : s, l = Ke(e.messages) ? e.messages : { [s]: {} }, u = Ke(e.datetimeFormats) ? e.datetimeFormats : { [s]: {} }, f = Ke(e.numberFormats) ? e.numberFormats : { [s]: {} }, h = gn({}, e.modifiers || {}, vC()), d = e.pluralRules || {}, m = qt(e.missing) ? e.missing : null, v = ut(e.missingWarn) || Ss(e.missingWarn) ? e.missingWarn : !0, g = ut(e.fallbackWarn) || Ss(e.fallbackWarn) ? e.fallbackWarn : !0, w = !!e.fallbackFormat, E = !!e.unresolving, k = qt(e.postTranslation) ? e.postTranslation : null, b = Ke(e.processor) ? e.processor : null, D = ut(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, T = !!e.escapeParameter, x = qt(e.messageCompiler) ? e.messageCompiler : by;
  process.env.NODE_ENV !== "production" && qt(e.messageCompiler) && dM(ni(Nn.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
  const C = qt(e.messageResolver) ? e.messageResolver : wy || XM, M = qt(e.localeFallbacker) ? e.localeFallbacker : Ey || dC, I = bt(e.fallbackContext) ? e.fallbackContext : void 0, R = e, V = bt(R.__datetimeFormatters) ? R.__datetimeFormatters : /* @__PURE__ */ new Map(), $ = bt(R.__numberFormatters) ? R.__numberFormatters : /* @__PURE__ */ new Map(), q = bt(R.__meta) ? R.__meta : {};
  Gg++;
  const W = {
    version: n,
    cid: Gg,
    locale: r,
    fallbackLocale: i,
    messages: l,
    modifiers: h,
    pluralRules: d,
    missing: m,
    missingWarn: v,
    fallbackWarn: g,
    fallbackFormat: w,
    unresolving: E,
    postTranslation: k,
    processor: b,
    warnHtmlMessage: D,
    escapeParameter: T,
    messageCompiler: x,
    messageResolver: C,
    localeFallbacker: M,
    fallbackContext: I,
    onWarn: t,
    __meta: q
  };
  return W.datetimeFormats = u, W.numberFormats = f, W.__datetimeFormatters = V, W.__numberFormatters = $, process.env.NODE_ENV !== "production" && (W.__v_emitter = R.__v_emitter != null ? R.__v_emitter : void 0), (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && lC(W, n, q), W;
}
function Tc(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function xy(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function Yh(e, t, n, r, s) {
  const { missing: i, onWarn: l } = e;
  if (process.env.NODE_ENV !== "production") {
    const u = e.__v_emitter;
    u && u.emit("missing", {
      locale: n,
      key: t,
      type: s,
      groupId: `${s}:${t}`
    });
  }
  if (i !== null) {
    const u = i(e, n, t, s);
    return ve(u) ? u : t;
  } else
    return process.env.NODE_ENV !== "production" && xy(r, t) && l(ni(Nn.NOT_FOUND_KEY, { key: t, locale: n })), t;
}
function Uo(e, t, n) {
  const r = e;
  r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function gd(e) {
  return (n) => EC(n, e);
}
function EC(e, t) {
  const n = t.b || t.body;
  if ((n.t || n.type) === 1) {
    const r = n, s = r.c || r.cases;
    return e.plural(s.reduce((i, l) => [
      ...i,
      zg(e, l)
    ], []));
  } else
    return zg(e, n);
}
function zg(e, t) {
  const n = t.s || t.static;
  if (n)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const r = (t.i || t.items).reduce((s, i) => [...s, Wd(e, i)], []);
    return e.normalize(r);
  }
}
function Wd(e, t) {
  const n = t.t || t.type;
  switch (n) {
    case 3:
      const r = t;
      return r.v || r.value;
    case 9:
      const s = t;
      return s.v || s.value;
    case 4:
      const i = t;
      return e.interpolate(e.named(i.k || i.key));
    case 5:
      const l = t;
      return e.interpolate(e.list(l.i != null ? l.i : l.index));
    case 6:
      const u = t, f = u.m || u.modifier;
      return e.linked(Wd(e, u.k || u.key), f ? Wd(e, f) : void 0, e.type);
    case 7:
      const h = t;
      return h.v || h.value;
    case 8:
      const d = t;
      return d.v || d.value;
    default:
      throw new Error(`unhandled node type on format message part: ${n}`);
  }
}
const Sy = Ge.__EXTEND_POINT__, Du = Ih(Sy), wr = {
  INVALID_ARGUMENT: Sy,
  INVALID_DATE_ARGUMENT: Du(),
  INVALID_ISO_DATE_ARGUMENT: Du(),
  NOT_SUPPORT_NON_STRING_MESSAGE: Du(),
  __EXTEND_POINT__: Du()
  // 22
};
function qs(e) {
  return oo(e, null, process.env.NODE_ENV !== "production" ? { messages: OC } : void 0);
}
const OC = {
  [wr.INVALID_ARGUMENT]: "Invalid arguments",
  [wr.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [wr.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
  [wr.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message"
}, DC = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function ky(e, t) {
  t && bM(e) && hn(Nh(DC, { source: e }));
}
const Ty = (e) => e;
let Fi = /* @__PURE__ */ Object.create(null);
const ri = (e) => bt(e) && (e.t === 0 || e.type === 0) && ("b" in e || "body" in e);
function Ay(e, t = {}) {
  let n = !1;
  const r = t.onError || _M;
  return t.onError = (s) => {
    n = !0, r(s);
  }, { ...HM(e, t), detectError: n };
}
const xC = (e, t) => {
  if (!ve(e))
    throw qs(wr.NOT_SUPPORT_NON_STRING_MESSAGE);
  {
    const n = ut(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && ky(e, n);
    const s = (t.onCacheKey || Ty)(e), i = Fi[s];
    if (i)
      return i;
    const { code: l, detectError: u } = Ay(e, t), f = new Function(`return ${l}`)();
    return u ? f : Fi[s] = f;
  }
};
function SC(e, t) {
  if (__INTLIFY_JIT_COMPILATION__ && !__INTLIFY_DROP_MESSAGE_COMPILER__ && ve(e)) {
    const n = ut(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && ky(e, n);
    const s = (t.onCacheKey || Ty)(e), i = Fi[s];
    if (i)
      return i;
    const { ast: l, detectError: u } = Ay(e, {
      ...t,
      location: process.env.NODE_ENV !== "production",
      jit: !0
    }), f = gd(l);
    return u ? f : Fi[s] = f;
  } else {
    if (process.env.NODE_ENV !== "production" && !ri(e))
      return hn(`the message that is resolve with key '${t.key}' is not supported for jit compilation`), () => e;
    const n = e.cacheKey;
    if (n) {
      const r = Fi[n];
      return r || (Fi[n] = gd(e));
    } else
      return gd(e);
  }
}
const qg = () => "", Fr = (e) => qt(e);
function Kg(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: s, messageCompiler: i, fallbackLocale: l, messages: u } = e, [f, h] = Ud(...t), d = ut(h.missingWarn) ? h.missingWarn : e.missingWarn, m = ut(h.fallbackWarn) ? h.fallbackWarn : e.fallbackWarn, v = ut(h.escapeParameter) ? h.escapeParameter : e.escapeParameter, g = !!h.resolvedMessage, w = ve(h.default) || ut(h.default) ? ut(h.default) ? i ? f : () => f : h.default : n ? i ? f : () => f : "", E = n || w !== "", k = Fh(e, h);
  v && kC(h);
  let [b, D, T] = g ? [
    f,
    k,
    u[k] || {}
  ] : My(e, f, k, l, m, d), x = b, C = f;
  if (!g && !(ve(x) || ri(x) || Fr(x)) && E && (x = w, C = x), !g && (!(ve(x) || ri(x) || Fr(x)) || !ve(D)))
    return s ? kc : f;
  if (process.env.NODE_ENV !== "production" && ve(x) && e.messageCompiler == null)
    return hn(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${f}'.`), f;
  let M = !1;
  const I = () => {
    M = !0;
  }, R = Fr(x) ? x : Cy(e, f, D, x, C, I);
  if (M)
    return x;
  const V = CC(e, D, T, h), $ = iC(V), q = TC(e, R, $), W = r ? r(q, f) : q;
  if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    const se = {
      timestamp: Date.now(),
      key: ve(f) ? f : Fr(x) ? x.key : "",
      locale: D || (Fr(x) ? x.locale : ""),
      format: ve(x) ? x : Fr(x) ? x.source : "",
      message: W
    };
    se.meta = gn({}, e.__meta, yC() || {}), uC(se);
  }
  return W;
}
function kC(e) {
  Rt(e.list) ? e.list = e.list.map((t) => ve(t) ? Cg(t) : t) : bt(e.named) && Object.keys(e.named).forEach((t) => {
    ve(e.named[t]) && (e.named[t] = Cg(e.named[t]));
  });
}
function My(e, t, n, r, s, i) {
  const { messages: l, onWarn: u, messageResolver: f, localeFallbacker: h } = e, d = h(e, r, n);
  let m = {}, v, g = null, w = n, E = null;
  const k = "translate";
  for (let b = 0; b < d.length; b++) {
    if (v = E = d[b], process.env.NODE_ENV !== "production" && n !== v && Tc(s, t) && u(ni(Nn.FALLBACK_TO_TRANSLATE, {
      key: t,
      target: v
    })), process.env.NODE_ENV !== "production" && n !== v) {
      const M = e.__v_emitter;
      M && M.emit("fallback", {
        type: k,
        key: t,
        from: w,
        to: E,
        groupId: `${k}:${t}`
      });
    }
    m = l[v] || {};
    let D = null, T, x;
    if (process.env.NODE_ENV !== "production" && ia && (D = window.performance.now(), T = "intlify-message-resolve-start", x = "intlify-message-resolve-end", ar && ar(T)), (g = f(m, t)) === null && (g = m[t]), process.env.NODE_ENV !== "production" && ia) {
      const M = window.performance.now(), I = e.__v_emitter;
      I && D && g && I.emit("message-resolve", {
        type: "message-resolve",
        key: t,
        message: g,
        time: M - D,
        groupId: `${k}:${t}`
      }), T && x && ar && ti && (ar(x), ti("intlify message resolve", T, x));
    }
    if (ve(g) || ri(g) || Fr(g))
      break;
    const C = Yh(
      e,
      // eslint-disable-line @typescript-eslint/no-explicit-any
      t,
      v,
      i,
      k
    );
    C !== t && (g = C), w = E;
  }
  return [g, v, m];
}
function Cy(e, t, n, r, s, i) {
  const { messageCompiler: l, warnHtmlMessage: u } = e;
  if (Fr(r)) {
    const v = r;
    return v.locale = v.locale || n, v.key = v.key || t, v;
  }
  if (l == null) {
    const v = () => r;
    return v.locale = n, v.key = t, v;
  }
  let f = null, h, d;
  process.env.NODE_ENV !== "production" && ia && (f = window.performance.now(), h = "intlify-message-compilation-start", d = "intlify-message-compilation-end", ar && ar(h));
  const m = l(r, AC(e, n, s, r, u, i));
  if (process.env.NODE_ENV !== "production" && ia) {
    const v = window.performance.now(), g = e.__v_emitter;
    g && f && g.emit("message-compilation", {
      type: "message-compilation",
      message: r,
      time: v - f,
      groupId: `translate:${t}`
    }), h && d && ar && ti && (ar(d), ti("intlify message compilation", h, d));
  }
  return m.locale = n, m.key = t, m.source = r, m;
}
function TC(e, t, n) {
  let r = null, s, i;
  process.env.NODE_ENV !== "production" && ia && (r = window.performance.now(), s = "intlify-message-evaluation-start", i = "intlify-message-evaluation-end", ar && ar(s));
  const l = t(n);
  if (process.env.NODE_ENV !== "production" && ia) {
    const u = window.performance.now(), f = e.__v_emitter;
    f && r && f.emit("message-evaluation", {
      type: "message-evaluation",
      value: l,
      time: u - r,
      groupId: `translate:${t.key}`
    }), s && i && ar && ti && (ar(i), ti("intlify message evaluation", s, i));
  }
  return l;
}
function Ud(...e) {
  const [t, n, r] = e, s = {};
  if (!ve(t) && !cn(t) && !Fr(t) && !ri(t))
    throw qs(wr.INVALID_ARGUMENT);
  const i = cn(t) ? String(t) : (Fr(t), t);
  return cn(n) ? s.plural = n : ve(n) ? s.default = n : Ke(n) && !Sc(n) ? s.named = n : Rt(n) && (s.list = n), cn(r) ? s.plural = r : ve(r) ? s.default = r : Ke(r) && gn(s, r), [i, s];
}
function AC(e, t, n, r, s, i) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: s,
    onError: (l) => {
      if (i && i(l), process.env.NODE_ENV !== "production") {
        const u = MC(r), f = `Message compilation error: ${l.message}`, h = l.location && u && fM(u, l.location.start.offset, l.location.end.offset), d = e.__v_emitter;
        d && u && d.emit("compile-error", {
          message: u,
          error: l.message,
          start: l.location && l.location.start.offset,
          end: l.location && l.location.end.offset,
          groupId: `translate:${n}`
        }), console.error(h ? `${f}
${h}` : f);
      } else
        throw l;
    },
    onCacheKey: (l) => sM(t, n, l)
  };
}
function MC(e) {
  var t;
  if (!ve(e)) {
    if ((t = e.loc) != null && t.source)
      return e.loc.source;
  }
}
function CC(e, t, n, r) {
  const { modifiers: s, pluralRules: i, messageResolver: l, fallbackLocale: u, fallbackWarn: f, missingWarn: h, fallbackContext: d } = e, v = {
    locale: t,
    modifiers: s,
    pluralRules: i,
    messages: (g) => {
      let w = l(n, g);
      if (w == null && d) {
        const [, , E] = My(d, g, t, u, f, h);
        w = l(E, g);
      }
      if (ve(w) || ri(w)) {
        let E = !1;
        const b = Cy(e, g, t, w, g, () => {
          E = !0;
        });
        return E ? qg : b;
      } else
        return Fr(w) ? w : qg;
    }
  };
  return e.processor && (v.processor = e.processor), r.list && (v.list = r.list), r.named && (v.named = r.named), cn(r.plural) && (v.pluralIndex = r.plural), v;
}
const Zg = typeof Intl < "u", Py = {
  dateTimeFormat: Zg && typeof Intl.DateTimeFormat < "u",
  numberFormat: Zg && typeof Intl.NumberFormat < "u"
};
function Xg(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: s, onWarn: i, localeFallbacker: l } = e, { __datetimeFormatters: u } = e;
  if (process.env.NODE_ENV !== "production" && !Py.dateTimeFormat)
    return i(ni(Nn.CANNOT_FORMAT_DATE)), Ku;
  const [f, h, d, m] = Bd(...t), v = ut(d.missingWarn) ? d.missingWarn : e.missingWarn, g = ut(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn, w = !!d.part, E = Fh(e, d), k = l(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    s,
    E
  );
  if (!ve(f) || f === "")
    return new Intl.DateTimeFormat(E, m).format(h);
  let b = {}, D, T = null, x = E, C = null;
  const M = "datetime format";
  for (let V = 0; V < k.length; V++) {
    if (D = C = k[V], process.env.NODE_ENV !== "production" && E !== D && Tc(g, f) && i(ni(Nn.FALLBACK_TO_DATE_FORMAT, {
      key: f,
      target: D
    })), process.env.NODE_ENV !== "production" && E !== D) {
      const $ = e.__v_emitter;
      $ && $.emit("fallback", {
        type: M,
        key: f,
        from: x,
        to: C,
        groupId: `${M}:${f}`
      });
    }
    if (b = n[D] || {}, T = b[f], Ke(T))
      break;
    Yh(e, f, D, v, M), x = C;
  }
  if (!Ke(T) || !ve(D))
    return r ? kc : f;
  let I = `${D}__${f}`;
  Sc(m) || (I = `${I}__${JSON.stringify(m)}`);
  let R = u.get(I);
  return R || (R = new Intl.DateTimeFormat(D, gn({}, T, m)), u.set(I, R)), w ? R.formatToParts(h) : R.format(h);
}
const Ny = [
  "localeMatcher",
  "weekday",
  "era",
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "timeZoneName",
  "formatMatcher",
  "hour12",
  "timeZone",
  "dateStyle",
  "timeStyle",
  "calendar",
  "dayPeriod",
  "numberingSystem",
  "hourCycle",
  "fractionalSecondDigits"
];
function Bd(...e) {
  const [t, n, r, s] = e, i = {};
  let l = {}, u;
  if (ve(t)) {
    const f = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!f)
      throw qs(wr.INVALID_ISO_DATE_ARGUMENT);
    const h = f[3] ? f[3].trim().startsWith("T") ? `${f[1].trim()}${f[3].trim()}` : `${f[1].trim()}T${f[3].trim()}` : f[1].trim();
    u = new Date(h);
    try {
      u.toISOString();
    } catch {
      throw qs(wr.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (oM(t)) {
    if (isNaN(t.getTime()))
      throw qs(wr.INVALID_DATE_ARGUMENT);
    u = t;
  } else if (cn(t))
    u = t;
  else
    throw qs(wr.INVALID_ARGUMENT);
  return ve(n) ? i.key = n : Ke(n) && Object.keys(n).forEach((f) => {
    Ny.includes(f) ? l[f] = n[f] : i[f] = n[f];
  }), ve(r) ? i.locale = r : Ke(r) && (l = r), Ke(s) && (l = s), [i.key || "", u, i, l];
}
function Jg(e, t, n) {
  const r = e;
  for (const s in n) {
    const i = `${t}__${s}`;
    r.__datetimeFormatters.has(i) && r.__datetimeFormatters.delete(i);
  }
}
function Qg(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: s, onWarn: i, localeFallbacker: l } = e, { __numberFormatters: u } = e;
  if (process.env.NODE_ENV !== "production" && !Py.numberFormat)
    return i(ni(Nn.CANNOT_FORMAT_NUMBER)), Ku;
  const [f, h, d, m] = Hd(...t), v = ut(d.missingWarn) ? d.missingWarn : e.missingWarn, g = ut(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn, w = !!d.part, E = Fh(e, d), k = l(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    s,
    E
  );
  if (!ve(f) || f === "")
    return new Intl.NumberFormat(E, m).format(h);
  let b = {}, D, T = null, x = E, C = null;
  const M = "number format";
  for (let V = 0; V < k.length; V++) {
    if (D = C = k[V], process.env.NODE_ENV !== "production" && E !== D && Tc(g, f) && i(ni(Nn.FALLBACK_TO_NUMBER_FORMAT, {
      key: f,
      target: D
    })), process.env.NODE_ENV !== "production" && E !== D) {
      const $ = e.__v_emitter;
      $ && $.emit("fallback", {
        type: M,
        key: f,
        from: x,
        to: C,
        groupId: `${M}:${f}`
      });
    }
    if (b = n[D] || {}, T = b[f], Ke(T))
      break;
    Yh(e, f, D, v, M), x = C;
  }
  if (!Ke(T) || !ve(D))
    return r ? kc : f;
  let I = `${D}__${f}`;
  Sc(m) || (I = `${I}__${JSON.stringify(m)}`);
  let R = u.get(I);
  return R || (R = new Intl.NumberFormat(D, gn({}, T, m)), u.set(I, R)), w ? R.formatToParts(h) : R.format(h);
}
const $y = [
  "localeMatcher",
  "style",
  "currency",
  "currencyDisplay",
  "currencySign",
  "useGrouping",
  "minimumIntegerDigits",
  "minimumFractionDigits",
  "maximumFractionDigits",
  "minimumSignificantDigits",
  "maximumSignificantDigits",
  "compactDisplay",
  "notation",
  "signDisplay",
  "unit",
  "unitDisplay",
  "roundingMode",
  "roundingPriority",
  "roundingIncrement",
  "trailingZeroDisplay"
];
function Hd(...e) {
  const [t, n, r, s] = e, i = {};
  let l = {};
  if (!cn(t))
    throw qs(wr.INVALID_ARGUMENT);
  const u = t;
  return ve(n) ? i.key = n : Ke(n) && Object.keys(n).forEach((f) => {
    $y.includes(f) ? l[f] = n[f] : i[f] = n[f];
  }), ve(r) ? i.locale = r : Ke(r) && (l = r), Ke(s) && (l = s), [i.key || "", u, i, l];
}
function e_(e, t, n) {
  const r = e;
  for (const s in n) {
    const i = `${t}__${s}`;
    r.__numberFormatters.has(i) && r.__numberFormatters.delete(i);
  }
}
VM();
function PC() {
  return Iy().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function Iy() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const NC = typeof Proxy == "function", $C = "devtools-plugin:setup", IC = "plugin:settings:set";
let Pi, Vd;
function LC() {
  var e;
  return Pi !== void 0 || (typeof window < "u" && window.performance ? (Pi = !0, Vd = window.performance) : typeof global < "u" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (Pi = !0, Vd = global.perf_hooks.performance) : Pi = !1), Pi;
}
function RC() {
  return LC() ? Vd.now() : Date.now();
}
class FC {
  constructor(t, n) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n;
    const r = {};
    if (t.settings)
      for (const l in t.settings) {
        const u = t.settings[l];
        r[l] = u.defaultValue;
      }
    const s = `__vue-devtools-plugin-settings__${t.id}`;
    let i = Object.assign({}, r);
    try {
      const l = localStorage.getItem(s), u = JSON.parse(l);
      Object.assign(i, u);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return i;
      },
      setSettings(l) {
        try {
          localStorage.setItem(s, JSON.stringify(l));
        } catch {
        }
        i = l;
      },
      now() {
        return RC();
      }
    }, n && n.on(IC, (l, u) => {
      l === this.plugin.id && this.fallbacks.setSettings(u);
    }), this.proxiedOn = new Proxy({}, {
      get: (l, u) => this.target ? this.target.on[u] : (...f) => {
        this.onQueue.push({
          method: u,
          args: f
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (l, u) => this.target ? this.target[u] : u === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(u) ? (...f) => (this.targetQueue.push({
        method: u,
        args: f,
        resolve: () => {
        }
      }), this.fallbacks[u](...f)) : (...f) => new Promise((h) => {
        this.targetQueue.push({
          method: u,
          args: f,
          resolve: h
        });
      })
    });
  }
  async setRealTarget(t) {
    this.target = t;
    for (const n of this.onQueue)
      this.target.on[n.method](...n.args);
    for (const n of this.targetQueue)
      n.resolve(await this.target[n.method](...n.args));
  }
}
function YC(e, t) {
  const n = e, r = Iy(), s = PC(), i = NC && n.enableEarlyProxy;
  if (s && (r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !i))
    s.emit($C, e, t);
  else {
    const l = i ? new FC(n, s) : null;
    (r.__VUE_DEVTOOLS_PLUGINS__ = r.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: l
    }), l && t(l.proxiedTarget);
  }
}
/*!
  * vue-i18n v9.5.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */
const WC = "9.5.0";
function UC() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (Na().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (Na().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (Na().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Na().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Na().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const Ly = Nn.__EXTEND_POINT__, ds = Ih(Ly), Jt = {
  FALLBACK_TO_ROOT: Ly,
  NOT_SUPPORTED_PRESERVE: ds(),
  NOT_SUPPORTED_FORMATTER: ds(),
  NOT_SUPPORTED_PRESERVE_DIRECTIVE: ds(),
  NOT_SUPPORTED_GET_CHOICE_INDEX: ds(),
  COMPONENT_NAME_LEGACY_COMPATIBLE: ds(),
  NOT_FOUND_PARENT_SCOPE: ds(),
  IGNORE_OBJ_FLATTEN: ds(),
  NOTICE_DROP_ALLOW_COMPOSITION: ds()
  // 17
}, BC = {
  [Jt.FALLBACK_TO_ROOT]: "Fall back to {type} '{key}' with root locale.",
  [Jt.NOT_SUPPORTED_PRESERVE]: "Not supported 'preserve'.",
  [Jt.NOT_SUPPORTED_FORMATTER]: "Not supported 'formatter'.",
  [Jt.NOT_SUPPORTED_PRESERVE_DIRECTIVE]: "Not supported 'preserveDirectiveContent'.",
  [Jt.NOT_SUPPORTED_GET_CHOICE_INDEX]: "Not supported 'getChoiceIndex'.",
  [Jt.COMPONENT_NAME_LEGACY_COMPATIBLE]: "Component name legacy compatible: '{name}' -> 'i18n'",
  [Jt.NOT_FOUND_PARENT_SCOPE]: "Not found parent scope. use the global scope.",
  [Jt.IGNORE_OBJ_FLATTEN]: "Ignore object flatten: '{key}' key has an string value",
  [Jt.NOTICE_DROP_ALLOW_COMPOSITION]: "'allowComposition' option will be dropped in the next major version. For more information, please see 👉 https://tinyurl.com/2p97mcze"
};
function nr(e, ...t) {
  return Nh(BC[e], ...t);
}
const Ry = wr.__EXTEND_POINT__, Wn = Ih(Ry), pt = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: Ry,
  // legacy module errors
  INVALID_ARGUMENT: Wn(),
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: Wn(),
  NOT_INSTALLED: Wn(),
  NOT_AVAILABLE_IN_LEGACY_MODE: Wn(),
  // directive module errors
  REQUIRED_VALUE: Wn(),
  INVALID_VALUE: Wn(),
  // vue-devtools errors
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: Wn(),
  NOT_INSTALLED_WITH_PROVIDE: Wn(),
  // unexpected error
  UNEXPECTED_ERROR: Wn(),
  // not compatible legacy vue-i18n constructor
  NOT_COMPATIBLE_LEGACY_VUE_I18N: Wn(),
  // bridge support vue 2.x only
  BRIDGE_SUPPORT_VUE_2_ONLY: Wn(),
  // need to define `i18n` option in `allowComposition: true` and `useScope: 'local' at `useI18n``
  MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: Wn(),
  // Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: Wn(),
  // for enhancement
  __EXTEND_POINT__: Wn()
  // 37
};
function rn(e, ...t) {
  return oo(e, null, process.env.NODE_ENV !== "production" ? { messages: HC, args: t } : void 0);
}
const HC = {
  [pt.UNEXPECTED_RETURN_TYPE]: "Unexpected return type in composer",
  [pt.INVALID_ARGUMENT]: "Invalid argument",
  [pt.MUST_BE_CALL_SETUP_TOP]: "Must be called at the top of a `setup` function",
  [pt.NOT_INSTALLED]: "Need to install with `app.use` function",
  [pt.UNEXPECTED_ERROR]: "Unexpected error",
  [pt.NOT_AVAILABLE_IN_LEGACY_MODE]: "Not available in legacy mode",
  [pt.REQUIRED_VALUE]: "Required in value: {0}",
  [pt.INVALID_VALUE]: "Invalid value",
  [pt.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: "Cannot setup vue-devtools plugin",
  [pt.NOT_INSTALLED_WITH_PROVIDE]: "Need to install with `provide` function",
  [pt.NOT_COMPATIBLE_LEGACY_VUE_I18N]: "Not compatible legacy VueI18n.",
  [pt.BRIDGE_SUPPORT_VUE_2_ONLY]: "vue-i18n-bridge support Vue 2.x only",
  [pt.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION]: "Must define ‘i18n’ option or custom block in Composition API with using local scope in Legacy API mode",
  [pt.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]: "Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"
}, jd = /* @__PURE__ */ ca("__translateVNode"), Gd = /* @__PURE__ */ ca("__datetimeParts"), zd = /* @__PURE__ */ ca("__numberParts"), ai = /* @__PURE__ */ ca("__enableEmitter"), cl = /* @__PURE__ */ ca("__disableEmitter"), Fy = ca("__setPluralRules"), Yy = /* @__PURE__ */ ca("__injectWithOption"), qd = /* @__PURE__ */ ca("__dispose");
function Kd(e) {
  if (!bt(e))
    return e;
  for (const t in e)
    if ($h(e, t))
      if (!t.includes("."))
        bt(e[t]) && Kd(e[t]);
      else {
        const n = t.split("."), r = n.length - 1;
        let s = e, i = !1;
        for (let l = 0; l < r; l++) {
          if (n[l] in s || (s[n[l]] = {}), !bt(s[n[l]])) {
            process.env.NODE_ENV !== "production" && hn(nr(Jt.IGNORE_OBJ_FLATTEN, {
              key: n[l]
            })), i = !0;
            break;
          }
          s = s[n[l]];
        }
        i || (s[n[r]] = e[t], delete e[t]), bt(s[n[r]]) && Kd(s[n[r]]);
      }
  return e;
}
function Ac(e, t) {
  const { messages: n, __i18n: r, messageResolver: s, flatJson: i } = t, l = Ke(n) ? n : Rt(r) ? {} : { [e]: {} };
  if (Rt(r) && r.forEach((u) => {
    if ("locale" in u && "resource" in u) {
      const { locale: f, resource: h } = u;
      f ? (l[f] = l[f] || {}, nl(h, l[f])) : nl(h, l);
    } else
      ve(u) && nl(JSON.parse(u), l);
  }), s == null && i)
    for (const u in l)
      $h(l, u) && Kd(l[u]);
  return l;
}
const xu = (e) => !bt(e) || Rt(e);
function nl(e, t) {
  if (xu(e) || xu(t))
    throw rn(pt.INVALID_VALUE);
  for (const n in e)
    $h(e, n) && (xu(e[n]) || xu(t[n]) ? t[n] = e[n] : nl(e[n], t[n]));
}
function Wy(e) {
  return e.type;
}
function Uy(e, t, n) {
  let r = bt(t.messages) ? t.messages : {};
  "__i18nGlobal" in n && (r = Ac(e.locale.value, {
    messages: r,
    __i18n: n.__i18nGlobal
  }));
  const s = Object.keys(r);
  s.length && s.forEach((i) => {
    e.mergeLocaleMessage(i, r[i]);
  });
  {
    if (bt(t.datetimeFormats)) {
      const i = Object.keys(t.datetimeFormats);
      i.length && i.forEach((l) => {
        e.mergeDateTimeFormat(l, t.datetimeFormats[l]);
      });
    }
    if (bt(t.numberFormats)) {
      const i = Object.keys(t.numberFormats);
      i.length && i.forEach((l) => {
        e.mergeNumberFormat(l, t.numberFormats[l]);
      });
    }
  }
}
function t_(e) {
  return Pe(UA, null, e, 0);
}
const n_ = "__INTLIFY_META__";
let r_ = 0;
function a_(e) {
  return (t, n, r, s) => e(n, r, xr() || void 0, s);
}
const VC = () => {
  const e = xr();
  let t = null;
  return e && (t = Wy(e)[n_]) ? { [n_]: t } : null;
};
function Wh(e = {}, t) {
  const { __root: n, __injectWithOption: r } = e, s = n === void 0;
  let i = ut(e.inheritLocale) ? e.inheritLocale : !0;
  const l = J(
    // prettier-ignore
    n && i ? n.locale.value : ve(e.locale) ? e.locale : Xi
  ), u = J(
    // prettier-ignore
    n && i ? n.fallbackLocale.value : ve(e.fallbackLocale) || Rt(e.fallbackLocale) || Ke(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : l.value
  ), f = J(Ac(l.value, e)), h = J(Ke(e.datetimeFormats) ? e.datetimeFormats : { [l.value]: {} }), d = J(Ke(e.numberFormats) ? e.numberFormats : { [l.value]: {} });
  let m = n ? n.missingWarn : ut(e.missingWarn) || Ss(e.missingWarn) ? e.missingWarn : !0, v = n ? n.fallbackWarn : ut(e.fallbackWarn) || Ss(e.fallbackWarn) ? e.fallbackWarn : !0, g = n ? n.fallbackRoot : ut(e.fallbackRoot) ? e.fallbackRoot : !0, w = !!e.fallbackFormat, E = qt(e.missing) ? e.missing : null, k = qt(e.missing) ? a_(e.missing) : null, b = qt(e.postTranslation) ? e.postTranslation : null, D = n ? n.warnHtmlMessage : ut(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, T = !!e.escapeParameter;
  const x = n ? n.modifiers : Ke(e.modifiers) ? e.modifiers : {};
  let C = e.pluralRules || n && n.pluralRules, M;
  M = (() => {
    s && jg(null);
    const Z = {
      version: WC,
      locale: l.value,
      fallbackLocale: u.value,
      messages: f.value,
      modifiers: x,
      pluralRules: C,
      missing: k === null ? void 0 : k,
      missingWarn: m,
      fallbackWarn: v,
      fallbackFormat: w,
      unresolving: !0,
      postTranslation: b === null ? void 0 : b,
      warnHtmlMessage: D,
      escapeParameter: T,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    Z.datetimeFormats = h.value, Z.numberFormats = d.value, Z.__datetimeFormatters = Ke(M) ? M.__datetimeFormatters : void 0, Z.__numberFormatters = Ke(M) ? M.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (Z.__v_emitter = Ke(M) ? M.__v_emitter : void 0);
    const oe = wC(Z);
    return s && jg(oe), oe;
  })(), Uo(M, l.value, u.value);
  function R() {
    return [
      l.value,
      u.value,
      f.value,
      h.value,
      d.value
    ];
  }
  const V = Y({
    get: () => l.value,
    set: (Z) => {
      l.value = Z, M.locale = l.value;
    }
  }), $ = Y({
    get: () => u.value,
    set: (Z) => {
      u.value = Z, M.fallbackLocale = u.value, Uo(M, l.value, Z);
    }
  }), q = Y(() => f.value), W = /* @__PURE__ */ Y(() => h.value), se = /* @__PURE__ */ Y(() => d.value);
  function me() {
    return qt(b) ? b : null;
  }
  function ce(Z) {
    b = Z, M.postTranslation = Z;
  }
  function ye() {
    return E;
  }
  function Ae(Z) {
    Z !== null && (k = a_(Z)), E = Z, M.missing = k;
  }
  function Ue(Z, oe) {
    return Z !== "translate" || !oe.resolvedMessage;
  }
  const Re = (Z, oe, jt, Mt, pn, lr) => {
    R();
    let kn;
    try {
      (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && Vg(VC()), s || (M.fallbackContext = n ? bC() : void 0), kn = Z(M);
    } finally {
      (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && Vg(null), s || (M.fallbackContext = void 0);
    }
    if (cn(kn) && kn === kc) {
      const [Tn, Cr] = oe();
      if (process.env.NODE_ENV !== "production" && n && ve(Tn) && Ue(jt, Cr) && (g && (Tc(v, Tn) || xy(m, Tn)) && hn(nr(Jt.FALLBACK_TO_ROOT, {
        key: Tn,
        type: jt
      })), process.env.NODE_ENV !== "production")) {
        const { __v_emitter: Kr } = M;
        Kr && g && Kr.emit("fallback", {
          type: jt,
          key: Tn,
          to: "global",
          groupId: `${jt}:${Tn}`
        });
      }
      return n && g ? Mt(n) : pn(Tn);
    } else {
      if (lr(kn))
        return kn;
      throw rn(pt.UNEXPECTED_RETURN_TYPE);
    }
  };
  function re(...Z) {
    return Re((oe) => Reflect.apply(Kg, null, [oe, ...Z]), () => Ud(...Z), "translate", (oe) => Reflect.apply(oe.t, oe, [...Z]), (oe) => oe, (oe) => ve(oe));
  }
  function Me(...Z) {
    const [oe, jt, Mt] = Z;
    if (Mt && !bt(Mt))
      throw rn(pt.INVALID_ARGUMENT);
    return re(oe, jt, gn({ resolvedMessage: !0 }, Mt || {}));
  }
  function mt(...Z) {
    return Re((oe) => Reflect.apply(Xg, null, [oe, ...Z]), () => Bd(...Z), "datetime format", (oe) => Reflect.apply(oe.d, oe, [...Z]), () => Ku, (oe) => ve(oe));
  }
  function At(...Z) {
    return Re((oe) => Reflect.apply(Qg, null, [oe, ...Z]), () => Hd(...Z), "number format", (oe) => Reflect.apply(oe.n, oe, [...Z]), () => Ku, (oe) => ve(oe));
  }
  function Se(Z) {
    return Z.map((oe) => ve(oe) || cn(oe) || ut(oe) ? t_(String(oe)) : oe);
  }
  const le = {
    normalize: Se,
    interpolate: (Z) => Z,
    type: "vnode"
  };
  function pe(...Z) {
    return Re(
      (oe) => {
        let jt;
        const Mt = oe;
        try {
          Mt.processor = le, jt = Reflect.apply(Kg, null, [Mt, ...Z]);
        } finally {
          Mt.processor = null;
        }
        return jt;
      },
      () => Ud(...Z),
      "translate",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (oe) => oe[jd](...Z),
      (oe) => [t_(oe)],
      (oe) => Rt(oe)
    );
  }
  function Oe(...Z) {
    return Re(
      (oe) => Reflect.apply(Qg, null, [oe, ...Z]),
      () => Hd(...Z),
      "number format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (oe) => oe[zd](...Z),
      () => [],
      (oe) => ve(oe) || Rt(oe)
    );
  }
  function ge(...Z) {
    return Re(
      (oe) => Reflect.apply(Xg, null, [oe, ...Z]),
      () => Bd(...Z),
      "datetime format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (oe) => oe[Gd](...Z),
      () => [],
      (oe) => ve(oe) || Rt(oe)
    );
  }
  function ne(Z) {
    C = Z, M.pluralRules = C;
  }
  function be(Z, oe) {
    if (!Z)
      return !1;
    const jt = ve(oe) ? oe : l.value, Mt = A(jt);
    return M.messageResolver(Mt, Z) !== null;
  }
  function Be(Z) {
    let oe = null;
    const jt = yy(M, u.value, l.value);
    for (let Mt = 0; Mt < jt.length; Mt++) {
      const pn = f.value[jt[Mt]] || {}, lr = M.messageResolver(pn, Z);
      if (lr != null) {
        oe = lr;
        break;
      }
    }
    return oe;
  }
  function N(Z) {
    const oe = Be(Z);
    return oe ?? (n ? n.tm(Z) || {} : {});
  }
  function A(Z) {
    return f.value[Z] || {};
  }
  function G(Z, oe) {
    f.value[Z] = oe, M.messages = f.value;
  }
  function he(Z, oe) {
    f.value[Z] = f.value[Z] || {}, nl(oe, f.value[Z]), M.messages = f.value;
  }
  function Ee(Z) {
    return h.value[Z] || {};
  }
  function qe(Z, oe) {
    h.value[Z] = oe, M.datetimeFormats = h.value, Jg(M, Z, oe);
  }
  function Ht(Z, oe) {
    h.value[Z] = gn(h.value[Z] || {}, oe), M.datetimeFormats = h.value, Jg(M, Z, oe);
  }
  function Ot(Z) {
    return d.value[Z] || {};
  }
  function Vt(Z, oe) {
    d.value[Z] = oe, M.numberFormats = d.value, e_(M, Z, oe);
  }
  function _n(Z, oe) {
    d.value[Z] = gn(d.value[Z] || {}, oe), M.numberFormats = d.value, e_(M, Z, oe);
  }
  r_++, n && ia && (ze(n.locale, (Z) => {
    i && (l.value = Z, M.locale = Z, Uo(M, l.value, u.value));
  }), ze(n.fallbackLocale, (Z) => {
    i && (u.value = Z, M.fallbackLocale = Z, Uo(M, l.value, u.value));
  }));
  const _t = {
    id: r_,
    locale: V,
    fallbackLocale: $,
    get inheritLocale() {
      return i;
    },
    set inheritLocale(Z) {
      i = Z, Z && n && (l.value = n.locale.value, u.value = n.fallbackLocale.value, Uo(M, l.value, u.value));
    },
    get availableLocales() {
      return Object.keys(f.value).sort();
    },
    messages: q,
    get modifiers() {
      return x;
    },
    get pluralRules() {
      return C || {};
    },
    get isGlobal() {
      return s;
    },
    get missingWarn() {
      return m;
    },
    set missingWarn(Z) {
      m = Z, M.missingWarn = m;
    },
    get fallbackWarn() {
      return v;
    },
    set fallbackWarn(Z) {
      v = Z, M.fallbackWarn = v;
    },
    get fallbackRoot() {
      return g;
    },
    set fallbackRoot(Z) {
      g = Z;
    },
    get fallbackFormat() {
      return w;
    },
    set fallbackFormat(Z) {
      w = Z, M.fallbackFormat = w;
    },
    get warnHtmlMessage() {
      return D;
    },
    set warnHtmlMessage(Z) {
      D = Z, M.warnHtmlMessage = Z;
    },
    get escapeParameter() {
      return T;
    },
    set escapeParameter(Z) {
      T = Z, M.escapeParameter = Z;
    },
    t: re,
    getLocaleMessage: A,
    setLocaleMessage: G,
    mergeLocaleMessage: he,
    getPostTranslationHandler: me,
    setPostTranslationHandler: ce,
    getMissingHandler: ye,
    setMissingHandler: Ae,
    [Fy]: ne
  };
  return _t.datetimeFormats = W, _t.numberFormats = se, _t.rt = Me, _t.te = be, _t.tm = N, _t.d = mt, _t.n = At, _t.getDateTimeFormat = Ee, _t.setDateTimeFormat = qe, _t.mergeDateTimeFormat = Ht, _t.getNumberFormat = Ot, _t.setNumberFormat = Vt, _t.mergeNumberFormat = _n, _t[Yy] = r, _t[jd] = pe, _t[Gd] = ge, _t[zd] = Oe, process.env.NODE_ENV !== "production" && (_t[ai] = (Z) => {
    M.__v_emitter = Z;
  }, _t[cl] = () => {
    M.__v_emitter = void 0;
  }), _t;
}
function jC(e) {
  const t = ve(e.locale) ? e.locale : Xi, n = ve(e.fallbackLocale) || Rt(e.fallbackLocale) || Ke(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t, r = qt(e.missing) ? e.missing : void 0, s = ut(e.silentTranslationWarn) || Ss(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0, i = ut(e.silentFallbackWarn) || Ss(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0, l = ut(e.fallbackRoot) ? e.fallbackRoot : !0, u = !!e.formatFallbackMessages, f = Ke(e.modifiers) ? e.modifiers : {}, h = e.pluralizationRules, d = qt(e.postTranslation) ? e.postTranslation : void 0, m = ve(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0, v = !!e.escapeParameterHtml, g = ut(e.sync) ? e.sync : !0;
  process.env.NODE_ENV !== "production" && e.formatter && hn(nr(Jt.NOT_SUPPORTED_FORMATTER)), process.env.NODE_ENV !== "production" && e.preserveDirectiveContent && hn(nr(Jt.NOT_SUPPORTED_PRESERVE_DIRECTIVE));
  let w = e.messages;
  if (Ke(e.sharedMessages)) {
    const C = e.sharedMessages;
    w = Object.keys(C).reduce((I, R) => {
      const V = I[R] || (I[R] = {});
      return gn(V, C[R]), I;
    }, w || {});
  }
  const { __i18n: E, __root: k, __injectWithOption: b } = e, D = e.datetimeFormats, T = e.numberFormats, x = e.flatJson;
  return {
    locale: t,
    fallbackLocale: n,
    messages: w,
    flatJson: x,
    datetimeFormats: D,
    numberFormats: T,
    missing: r,
    missingWarn: s,
    fallbackWarn: i,
    fallbackRoot: l,
    fallbackFormat: u,
    modifiers: f,
    pluralRules: h,
    postTranslation: d,
    warnHtmlMessage: m,
    escapeParameter: v,
    messageResolver: e.messageResolver,
    inheritLocale: g,
    __i18n: E,
    __root: k,
    __injectWithOption: b
  };
}
function Zd(e = {}, t) {
  {
    const n = Wh(jC(e)), { __extender: r } = e, s = {
      // id
      id: n.id,
      // locale
      get locale() {
        return n.locale.value;
      },
      set locale(i) {
        n.locale.value = i;
      },
      // fallbackLocale
      get fallbackLocale() {
        return n.fallbackLocale.value;
      },
      set fallbackLocale(i) {
        n.fallbackLocale.value = i;
      },
      // messages
      get messages() {
        return n.messages.value;
      },
      // datetimeFormats
      get datetimeFormats() {
        return n.datetimeFormats.value;
      },
      // numberFormats
      get numberFormats() {
        return n.numberFormats.value;
      },
      // availableLocales
      get availableLocales() {
        return n.availableLocales;
      },
      // formatter
      get formatter() {
        return process.env.NODE_ENV !== "production" && hn(nr(Jt.NOT_SUPPORTED_FORMATTER)), {
          interpolate() {
            return [];
          }
        };
      },
      set formatter(i) {
        process.env.NODE_ENV !== "production" && hn(nr(Jt.NOT_SUPPORTED_FORMATTER));
      },
      // missing
      get missing() {
        return n.getMissingHandler();
      },
      set missing(i) {
        n.setMissingHandler(i);
      },
      // silentTranslationWarn
      get silentTranslationWarn() {
        return ut(n.missingWarn) ? !n.missingWarn : n.missingWarn;
      },
      set silentTranslationWarn(i) {
        n.missingWarn = ut(i) ? !i : i;
      },
      // silentFallbackWarn
      get silentFallbackWarn() {
        return ut(n.fallbackWarn) ? !n.fallbackWarn : n.fallbackWarn;
      },
      set silentFallbackWarn(i) {
        n.fallbackWarn = ut(i) ? !i : i;
      },
      // modifiers
      get modifiers() {
        return n.modifiers;
      },
      // formatFallbackMessages
      get formatFallbackMessages() {
        return n.fallbackFormat;
      },
      set formatFallbackMessages(i) {
        n.fallbackFormat = i;
      },
      // postTranslation
      get postTranslation() {
        return n.getPostTranslationHandler();
      },
      set postTranslation(i) {
        n.setPostTranslationHandler(i);
      },
      // sync
      get sync() {
        return n.inheritLocale;
      },
      set sync(i) {
        n.inheritLocale = i;
      },
      // warnInHtmlMessage
      get warnHtmlInMessage() {
        return n.warnHtmlMessage ? "warn" : "off";
      },
      set warnHtmlInMessage(i) {
        n.warnHtmlMessage = i !== "off";
      },
      // escapeParameterHtml
      get escapeParameterHtml() {
        return n.escapeParameter;
      },
      set escapeParameterHtml(i) {
        n.escapeParameter = i;
      },
      // preserveDirectiveContent
      get preserveDirectiveContent() {
        return process.env.NODE_ENV !== "production" && hn(nr(Jt.NOT_SUPPORTED_PRESERVE_DIRECTIVE)), !0;
      },
      set preserveDirectiveContent(i) {
        process.env.NODE_ENV !== "production" && hn(nr(Jt.NOT_SUPPORTED_PRESERVE_DIRECTIVE));
      },
      // pluralizationRules
      get pluralizationRules() {
        return n.pluralRules || {};
      },
      // for internal
      __composer: n,
      // t
      t(...i) {
        const [l, u, f] = i, h = {};
        let d = null, m = null;
        if (!ve(l))
          throw rn(pt.INVALID_ARGUMENT);
        const v = l;
        return ve(u) ? h.locale = u : Rt(u) ? d = u : Ke(u) && (m = u), Rt(f) ? d = f : Ke(f) && (m = f), Reflect.apply(n.t, n, [
          v,
          d || m || {},
          h
        ]);
      },
      rt(...i) {
        return Reflect.apply(n.rt, n, [...i]);
      },
      // tc
      tc(...i) {
        const [l, u, f] = i, h = { plural: 1 };
        let d = null, m = null;
        if (!ve(l))
          throw rn(pt.INVALID_ARGUMENT);
        const v = l;
        return ve(u) ? h.locale = u : cn(u) ? h.plural = u : Rt(u) ? d = u : Ke(u) && (m = u), ve(f) ? h.locale = f : Rt(f) ? d = f : Ke(f) && (m = f), Reflect.apply(n.t, n, [
          v,
          d || m || {},
          h
        ]);
      },
      // te
      te(i, l) {
        return n.te(i, l);
      },
      // tm
      tm(i) {
        return n.tm(i);
      },
      // getLocaleMessage
      getLocaleMessage(i) {
        return n.getLocaleMessage(i);
      },
      // setLocaleMessage
      setLocaleMessage(i, l) {
        n.setLocaleMessage(i, l);
      },
      // mergeLocaleMessage
      mergeLocaleMessage(i, l) {
        n.mergeLocaleMessage(i, l);
      },
      // d
      d(...i) {
        return Reflect.apply(n.d, n, [...i]);
      },
      // getDateTimeFormat
      getDateTimeFormat(i) {
        return n.getDateTimeFormat(i);
      },
      // setDateTimeFormat
      setDateTimeFormat(i, l) {
        n.setDateTimeFormat(i, l);
      },
      // mergeDateTimeFormat
      mergeDateTimeFormat(i, l) {
        n.mergeDateTimeFormat(i, l);
      },
      // n
      n(...i) {
        return Reflect.apply(n.n, n, [...i]);
      },
      // getNumberFormat
      getNumberFormat(i) {
        return n.getNumberFormat(i);
      },
      // setNumberFormat
      setNumberFormat(i, l) {
        n.setNumberFormat(i, l);
      },
      // mergeNumberFormat
      mergeNumberFormat(i, l) {
        n.mergeNumberFormat(i, l);
      },
      // getChoiceIndex
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      getChoiceIndex(i, l) {
        return process.env.NODE_ENV !== "production" && hn(nr(Jt.NOT_SUPPORTED_GET_CHOICE_INDEX)), -1;
      }
    };
    return s.__extender = r, process.env.NODE_ENV !== "production" && (s.__enableEmitter = (i) => {
      const l = n;
      l[ai] && l[ai](i);
    }, s.__disableEmitter = () => {
      const i = n;
      i[cl] && i[cl]();
    }), s;
  }
}
const Uh = {
  tag: {
    type: [String, Object]
  },
  locale: {
    type: String
  },
  scope: {
    type: String,
    // NOTE: avoid https://github.com/microsoft/rushstack/issues/1050
    validator: (e) => e === "parent" || e === "global",
    default: "parent"
    /* ComponentI18nScope */
  },
  i18n: {
    type: Object
  }
};
function GC({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, s) => [
    ...r,
    // prettier-ignore
    ...s.type === Xe ? s.children : [s]
  ], []) : t.reduce((n, r) => {
    const s = e[r];
    return s && (n[r] = s()), n;
  }, {});
}
function By(e) {
  return Xe;
}
const zC = /* @__PURE__ */ Le({
  /* eslint-disable */
  name: "i18n-t",
  props: gn({
    keypath: {
      type: String,
      required: !0
    },
    plural: {
      type: [Number, String],
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      validator: (e) => cn(e) || !isNaN(e)
    }
  }, Uh),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const { slots: n, attrs: r } = t, s = e.i18n || Hh({
      useScope: e.scope,
      __useComponent: !0
    });
    return () => {
      const i = Object.keys(n).filter((m) => m !== "_"), l = {};
      e.locale && (l.locale = e.locale), e.plural !== void 0 && (l.plural = ve(e.plural) ? +e.plural : e.plural);
      const u = GC(t, i), f = s[jd](e.keypath, u, l), h = gn({}, r), d = ve(e.tag) || bt(e.tag) ? e.tag : By();
      return Yr(d, h, f);
    };
  }
}), _d = zC;
function qC(e) {
  return Rt(e) && !ve(e[0]);
}
function Hy(e, t, n, r) {
  const { slots: s, attrs: i } = t;
  return () => {
    const l = { part: !0 };
    let u = {};
    e.locale && (l.locale = e.locale), ve(e.format) ? l.key = e.format : bt(e.format) && (ve(e.format.key) && (l.key = e.format.key), u = Object.keys(e.format).reduce((v, g) => n.includes(g) ? gn({}, v, { [g]: e.format[g] }) : v, {}));
    const f = r(e.value, l, u);
    let h = [l.key];
    Rt(f) ? h = f.map((v, g) => {
      const w = s[v.type], E = w ? w({ [v.type]: v.value, index: g, parts: f }) : [v.value];
      return qC(E) && (E[0].key = `${v.type}-${g}`), E;
    }) : ve(f) && (h = [f]);
    const d = gn({}, i), m = ve(e.tag) || bt(e.tag) ? e.tag : By();
    return Yr(m, d, h);
  };
}
const KC = /* @__PURE__ */ Le({
  /* eslint-disable */
  name: "i18n-n",
  props: gn({
    value: {
      type: Number,
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, Uh),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const n = e.i18n || Hh({
      useScope: "parent",
      __useComponent: !0
    });
    return Hy(e, t, $y, (...r) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[zd](...r)
    ));
  }
}), s_ = KC, ZC = /* @__PURE__ */ Le({
  /* eslint-disable */
  name: "i18n-d",
  props: gn({
    value: {
      type: [Number, Date],
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, Uh),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const n = e.i18n || Hh({
      useScope: "parent",
      __useComponent: !0
    });
    return Hy(e, t, Ny, (...r) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[Gd](...r)
    ));
  }
}), i_ = ZC;
function XC(e, t) {
  const n = e;
  if (e.mode === "composition")
    return n.__getInstance(t) || e.global;
  {
    const r = n.__getInstance(t);
    return r != null ? r.__composer : e.global.__composer;
  }
}
function JC(e) {
  const t = (l) => {
    const { instance: u, modifiers: f, value: h } = l;
    if (!u || !u.$)
      throw rn(pt.UNEXPECTED_ERROR);
    const d = XC(e, u.$);
    process.env.NODE_ENV !== "production" && f.preserve && hn(nr(Jt.NOT_SUPPORTED_PRESERVE));
    const m = o_(h);
    return [
      Reflect.apply(d.t, d, [...l_(m)]),
      d
    ];
  };
  return {
    created: (l, u) => {
      const [f, h] = t(u);
      ia && e.global === h && (l.__i18nWatcher = ze(h.locale, () => {
        u.instance && u.instance.$forceUpdate();
      })), l.__composer = h, l.textContent = f;
    },
    unmounted: (l) => {
      ia && l.__i18nWatcher && (l.__i18nWatcher(), l.__i18nWatcher = void 0, delete l.__i18nWatcher), l.__composer && (l.__composer = void 0, delete l.__composer);
    },
    beforeUpdate: (l, { value: u }) => {
      if (l.__composer) {
        const f = l.__composer, h = o_(u);
        l.textContent = Reflect.apply(f.t, f, [
          ...l_(h)
        ]);
      }
    },
    getSSRProps: (l) => {
      const [u] = t(l);
      return { textContent: u };
    }
  };
}
function o_(e) {
  if (ve(e))
    return { path: e };
  if (Ke(e)) {
    if (!("path" in e))
      throw rn(pt.REQUIRED_VALUE, "path");
    return e;
  } else
    throw rn(pt.INVALID_VALUE);
}
function l_(e) {
  const { path: t, locale: n, args: r, choice: s, plural: i } = e, l = {}, u = r || {};
  return ve(n) && (l.locale = n), cn(s) && (l.plural = s), cn(i) && (l.plural = i), [t, u, l];
}
function QC(e, t, ...n) {
  const r = Ke(n[0]) ? n[0] : {}, s = !!r.useI18nComponentName, i = ut(r.globalInstall) ? r.globalInstall : !0;
  process.env.NODE_ENV !== "production" && i && s && hn(nr(Jt.COMPONENT_NAME_LEGACY_COMPATIBLE, {
    name: _d.name
  })), i && ([s ? "i18n" : _d.name, "I18nT"].forEach((l) => e.component(l, _d)), [s_.name, "I18nN"].forEach((l) => e.component(l, s_)), [i_.name, "I18nD"].forEach((l) => e.component(l, i_))), e.directive("t", JC(t));
}
const yd = {
  "vue-devtools-plugin-vue-i18n": "Vue I18n devtools",
  "vue-i18n-resource-inspector": "I18n Resources",
  "vue-i18n-timeline": "Vue I18n"
}, e2 = {
  "vue-i18n-resource-inspector": "Search for scopes ..."
}, t2 = {
  "vue-i18n-timeline": 16764185
}, Vy = "vue-i18n: composer properties";
let Xd;
async function n2(e, t) {
  return new Promise((n, r) => {
    try {
      YC({
        id: "vue-devtools-plugin-vue-i18n",
        label: yd[
          "vue-devtools-plugin-vue-i18n"
          /* VueDevToolsIDs.PLUGIN */
        ],
        packageName: "vue-i18n",
        homepage: "https://vue-i18n.intlify.dev",
        logo: "https://vue-i18n.intlify.dev/vue-i18n-devtools-logo.png",
        componentStateTypes: [Vy],
        app: e
        // eslint-disable-line @typescript-eslint/no-explicit-any
      }, (s) => {
        Xd = s, s.on.visitComponentTree(({ componentInstance: l, treeNode: u }) => {
          r2(l, u, t);
        }), s.on.inspectComponent(({ componentInstance: l, instanceData: u }) => {
          l.vnode.el && l.vnode.el.__VUE_I18N__ && u && (t.mode === "legacy" ? l.vnode.el.__VUE_I18N__ !== t.global.__composer && u_(u, l.vnode.el.__VUE_I18N__) : u_(u, l.vnode.el.__VUE_I18N__));
        }), s.addInspector({
          id: "vue-i18n-resource-inspector",
          label: yd[
            "vue-i18n-resource-inspector"
            /* VueDevToolsIDs.CUSTOM_INSPECTOR */
          ],
          icon: "language",
          treeFilterPlaceholder: e2[
            "vue-i18n-resource-inspector"
            /* VueDevToolsIDs.CUSTOM_INSPECTOR */
          ]
        }), s.on.getInspectorTree((l) => {
          l.app === e && l.inspectorId === "vue-i18n-resource-inspector" && l2(l, t);
        });
        const i = /* @__PURE__ */ new Map();
        s.on.getInspectorState(async (l) => {
          if (l.app === e && l.inspectorId === "vue-i18n-resource-inspector")
            if (s.unhighlightElement(), c2(l, t), l.nodeId === "global") {
              if (!i.has(l.app)) {
                const [u] = await s.getComponentInstances(l.app);
                i.set(l.app, u);
              }
              s.highlightElement(i.get(l.app));
            } else {
              const u = u2(l.nodeId, t);
              u && s.highlightElement(u);
            }
        }), s.on.editInspectorState((l) => {
          l.app === e && l.inspectorId === "vue-i18n-resource-inspector" && d2(l, t);
        }), s.addTimelineLayer({
          id: "vue-i18n-timeline",
          label: yd[
            "vue-i18n-timeline"
            /* VueDevToolsIDs.TIMELINE */
          ],
          color: t2[
            "vue-i18n-timeline"
            /* VueDevToolsIDs.TIMELINE */
          ]
        }), n(!0);
      });
    } catch (s) {
      console.error(s), r(!1);
    }
  });
}
function jy(e) {
  return e.type.name || e.type.displayName || e.type.__file || "Anonymous";
}
function r2(e, t, n) {
  const r = n.mode === "composition" ? n.global : n.global.__composer;
  if (e && e.vnode.el && e.vnode.el.__VUE_I18N__ && e.vnode.el.__VUE_I18N__ !== r) {
    const s = {
      label: `i18n (${jy(e)} Scope)`,
      textColor: 0,
      backgroundColor: 16764185
    };
    t.tags.push(s);
  }
}
function u_(e, t) {
  const n = Vy;
  e.state.push({
    type: n,
    key: "locale",
    editable: !0,
    value: t.locale.value
  }), e.state.push({
    type: n,
    key: "availableLocales",
    editable: !1,
    value: t.availableLocales
  }), e.state.push({
    type: n,
    key: "fallbackLocale",
    editable: !0,
    value: t.fallbackLocale.value
  }), e.state.push({
    type: n,
    key: "inheritLocale",
    editable: !0,
    value: t.inheritLocale
  }), e.state.push({
    type: n,
    key: "messages",
    editable: !1,
    value: Bh(t.messages.value)
  }), e.state.push({
    type: n,
    key: "datetimeFormats",
    editable: !1,
    value: t.datetimeFormats.value
  }), e.state.push({
    type: n,
    key: "numberFormats",
    editable: !1,
    value: t.numberFormats.value
  });
}
function Bh(e) {
  const t = {};
  return Object.keys(e).forEach((n) => {
    const r = e[n];
    qt(r) && "source" in r ? t[n] = o2(r) : ri(r) && r.loc && r.loc.source ? t[n] = r.loc.source : bt(r) ? t[n] = Bh(r) : t[n] = r;
  }), t;
}
const a2 = {
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "&": "&amp;"
};
function s2(e) {
  return e.replace(/[<>"&]/g, i2);
}
function i2(e) {
  return a2[e] || e;
}
function o2(e) {
  return {
    _custom: {
      type: "function",
      display: `<span>ƒ</span> ${e.source ? `("${s2(e.source)}")` : "(?)"}`
    }
  };
}
function l2(e, t) {
  e.rootNodes.push({
    id: "global",
    label: "Global Scope"
  });
  const n = t.mode === "composition" ? t.global : t.global.__composer;
  for (const [r, s] of t.__instances) {
    const i = t.mode === "composition" ? s : s.__composer;
    n !== i && e.rootNodes.push({
      id: i.id.toString(),
      label: `${jy(r)} Scope`
    });
  }
}
function u2(e, t) {
  let n = null;
  if (e !== "global") {
    for (const [r, s] of t.__instances.entries())
      if (s.id.toString() === e) {
        n = r;
        break;
      }
  }
  return n;
}
function Gy(e, t) {
  if (e === "global")
    return t.mode === "composition" ? t.global : t.global.__composer;
  {
    const n = Array.from(t.__instances.values()).find((r) => r.id.toString() === e);
    return n ? t.mode === "composition" ? n : n.__composer : null;
  }
}
function c2(e, t) {
  const n = Gy(e.nodeId, t);
  return n && (e.state = f2(n)), null;
}
function f2(e) {
  const t = {}, n = "Locale related info", r = [
    {
      type: n,
      key: "locale",
      editable: !0,
      value: e.locale.value
    },
    {
      type: n,
      key: "fallbackLocale",
      editable: !0,
      value: e.fallbackLocale.value
    },
    {
      type: n,
      key: "availableLocales",
      editable: !1,
      value: e.availableLocales
    },
    {
      type: n,
      key: "inheritLocale",
      editable: !0,
      value: e.inheritLocale
    }
  ];
  t[n] = r;
  const s = "Locale messages info", i = [
    {
      type: s,
      key: "messages",
      editable: !1,
      value: Bh(e.messages.value)
    }
  ];
  t[s] = i;
  {
    const l = "Datetime formats info", u = [
      {
        type: l,
        key: "datetimeFormats",
        editable: !1,
        value: e.datetimeFormats.value
      }
    ];
    t[l] = u;
    const f = "Datetime formats info", h = [
      {
        type: f,
        key: "numberFormats",
        editable: !1,
        value: e.numberFormats.value
      }
    ];
    t[f] = h;
  }
  return t;
}
function fl(e, t) {
  if (Xd) {
    let n;
    t && "groupId" in t && (n = t.groupId, delete t.groupId), Xd.addTimelineEvent({
      layerId: "vue-i18n-timeline",
      event: {
        title: e,
        groupId: n,
        time: Date.now(),
        meta: {},
        data: t || {},
        logType: e === "compile-error" ? "error" : e === "fallback" || e === "missing" ? "warning" : "default"
      }
    });
  }
}
function d2(e, t) {
  const n = Gy(e.nodeId, t);
  if (n) {
    const [r] = e.path;
    r === "locale" && ve(e.state.value) ? n.locale.value = e.state.value : r === "fallbackLocale" && (ve(e.state.value) || Rt(e.state.value) || bt(e.state.value)) ? n.fallbackLocale.value = e.state.value : r === "inheritLocale" && ut(e.state.value) && (n.inheritLocale = e.state.value);
  }
}
function h2(e, t, n) {
  return {
    beforeCreate() {
      const r = xr();
      if (!r)
        throw rn(pt.UNEXPECTED_ERROR);
      const s = this.$options;
      if (s.i18n) {
        const i = s.i18n;
        if (s.__i18n && (i.__i18n = s.__i18n), i.__root = t, this === this.$root)
          this.$i18n = c_(e, i);
        else {
          i.__injectWithOption = !0, i.__extender = n.__vueI18nExtend, this.$i18n = Zd(i);
          const l = this.$i18n;
          l.__extender && (l.__disposer = l.__extender(this.$i18n));
        }
      } else if (s.__i18n)
        if (this === this.$root)
          this.$i18n = c_(e, s);
        else {
          this.$i18n = Zd({
            __i18n: s.__i18n,
            __injectWithOption: !0,
            __extender: n.__vueI18nExtend,
            __root: t
          });
          const i = this.$i18n;
          i.__extender && (i.__disposer = i.__extender(this.$i18n));
        }
      else
        this.$i18n = e;
      s.__i18nGlobal && Uy(t, s, s), this.$t = (...i) => this.$i18n.t(...i), this.$rt = (...i) => this.$i18n.rt(...i), this.$tc = (...i) => this.$i18n.tc(...i), this.$te = (i, l) => this.$i18n.te(i, l), this.$d = (...i) => this.$i18n.d(...i), this.$n = (...i) => this.$i18n.n(...i), this.$tm = (i) => this.$i18n.tm(i), n.__setInstance(r, this.$i18n);
    },
    mounted() {
      if (process.env.NODE_ENV !== "production" && this.$el && this.$i18n) {
        const r = this.$i18n;
        this.$el.__VUE_I18N__ = r.__composer;
        const s = this.__v_emitter = Lh();
        r.__enableEmitter && r.__enableEmitter(s), s.on("*", fl);
      }
    },
    unmounted() {
      const r = xr();
      if (!r)
        throw rn(pt.UNEXPECTED_ERROR);
      const s = this.$i18n;
      process.env.NODE_ENV !== "production" && this.$el && this.$el.__VUE_I18N__ && (this.__v_emitter && (this.__v_emitter.off("*", fl), delete this.__v_emitter), this.$i18n && (s.__disableEmitter && s.__disableEmitter(), delete this.$el.__VUE_I18N__)), delete this.$t, delete this.$rt, delete this.$tc, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, s.__disposer && (s.__disposer(), delete s.__disposer, delete s.__extender), n.__deleteInstance(r), delete this.$i18n;
    }
  };
}
function c_(e, t) {
  e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[Fy](t.pluralizationRules || e.pluralizationRules);
  const n = Ac(e.locale, {
    messages: t.messages,
    __i18n: t.__i18n
  });
  return Object.keys(n).forEach((r) => e.mergeLocaleMessage(r, n[r])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach((r) => e.mergeDateTimeFormat(r, t.datetimeFormats[r])), t.numberFormats && Object.keys(t.numberFormats).forEach((r) => e.mergeNumberFormat(r, t.numberFormats[r])), e;
}
const p2 = /* @__PURE__ */ ca("global-vue-i18n");
function m2(e = {}, t) {
  const n = __VUE_I18N_LEGACY_API__ && ut(e.legacy) ? e.legacy : __VUE_I18N_LEGACY_API__, r = ut(e.globalInjection) ? e.globalInjection : !0, s = __VUE_I18N_LEGACY_API__ && n ? !!e.allowComposition : !0, i = /* @__PURE__ */ new Map(), [l, u] = v2(e, n), f = /* @__PURE__ */ ca(process.env.NODE_ENV !== "production" ? "vue-i18n" : "");
  process.env.NODE_ENV !== "production" && n && s && hn(nr(Jt.NOTICE_DROP_ALLOW_COMPOSITION));
  function h(v) {
    return i.get(v) || null;
  }
  function d(v, g) {
    i.set(v, g);
  }
  function m(v) {
    i.delete(v);
  }
  {
    const v = {
      // mode
      get mode() {
        return __VUE_I18N_LEGACY_API__ && n ? "legacy" : "composition";
      },
      // allowComposition
      get allowComposition() {
        return s;
      },
      // install plugin
      async install(g, ...w) {
        if (process.env.NODE_ENV !== "production" && (g.__VUE_I18N__ = v), g.__VUE_I18N_SYMBOL__ = f, g.provide(g.__VUE_I18N_SYMBOL__, v), Ke(w[0])) {
          const b = w[0];
          v.__composerExtend = b.__composerExtend, v.__vueI18nExtend = b.__vueI18nExtend;
        }
        let E = null;
        !n && r && (E = x2(g, v.global)), __VUE_I18N_FULL_INSTALL__ && QC(g, v, ...w), __VUE_I18N_LEGACY_API__ && n && g.mixin(h2(u, u.__composer, v));
        const k = g.unmount;
        if (g.unmount = () => {
          E && E(), v.dispose(), k();
        }, process.env.NODE_ENV !== "production") {
          if (!await n2(g, v))
            throw rn(pt.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN);
          const D = Lh();
          if (n) {
            const T = u;
            T.__enableEmitter && T.__enableEmitter(D);
          } else {
            const T = u;
            T[ai] && T[ai](D);
          }
          D.on("*", fl);
        }
      },
      // global accessor
      get global() {
        return u;
      },
      dispose() {
        l.stop();
      },
      // @internal
      __instances: i,
      // @internal
      __getInstance: h,
      // @internal
      __setInstance: d,
      // @internal
      __deleteInstance: m
    };
    return v;
  }
}
function Hh(e = {}) {
  const t = xr();
  if (t == null)
    throw rn(pt.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw rn(pt.NOT_INSTALLED);
  const n = g2(t), r = y2(n), s = Wy(t), i = _2(e, s);
  if (__VUE_I18N_LEGACY_API__ && n.mode === "legacy" && !e.__useComponent) {
    if (!n.allowComposition)
      throw rn(pt.NOT_AVAILABLE_IN_LEGACY_MODE);
    return O2(t, i, r, e);
  }
  if (i === "global")
    return Uy(r, e, s), r;
  if (i === "parent") {
    let f = b2(n, t, e.__useComponent);
    return f == null && (process.env.NODE_ENV !== "production" && hn(nr(Jt.NOT_FOUND_PARENT_SCOPE)), f = r), f;
  }
  const l = n;
  let u = l.__getInstance(t);
  if (u == null) {
    const f = gn({}, e);
    "__i18n" in s && (f.__i18n = s.__i18n), r && (f.__root = r), u = Wh(f), l.__composerExtend && (u[qd] = l.__composerExtend(u)), E2(l, t, u), l.__setInstance(t, u);
  }
  return u;
}
function v2(e, t, n) {
  const r = Q0();
  {
    const s = __VUE_I18N_LEGACY_API__ && t ? r.run(() => Zd(e)) : r.run(() => Wh(e));
    if (s == null)
      throw rn(pt.UNEXPECTED_ERROR);
    return [r, s];
  }
}
function g2(e) {
  {
    const t = Tt(e.isCE ? p2 : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t)
      throw rn(e.isCE ? pt.NOT_INSTALLED_WITH_PROVIDE : pt.UNEXPECTED_ERROR);
    return t;
  }
}
function _2(e, t) {
  return Sc(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function y2(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function b2(e, t, n = !1) {
  let r = null;
  const s = t.root;
  let i = w2(t, n);
  for (; i != null; ) {
    const l = e;
    if (e.mode === "composition")
      r = l.__getInstance(i);
    else if (__VUE_I18N_LEGACY_API__) {
      const u = l.__getInstance(i);
      u != null && (r = u.__composer, n && r && !r[Yy] && (r = null));
    }
    if (r != null || s === i)
      break;
    i = i.parent;
  }
  return r;
}
function w2(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function E2(e, t, n) {
  let r = null;
  Vr(() => {
    if (process.env.NODE_ENV !== "production" && t.vnode.el) {
      t.vnode.el.__VUE_I18N__ = n, r = Lh();
      const s = n;
      s[ai] && s[ai](r), r.on("*", fl);
    }
  }, t), Cs(() => {
    const s = n;
    process.env.NODE_ENV !== "production" && t.vnode.el && t.vnode.el.__VUE_I18N__ && (r && r.off("*", fl), s[cl] && s[cl](), delete t.vnode.el.__VUE_I18N__), e.__deleteInstance(t);
    const i = s[qd];
    i && (i(), delete s[qd]);
  }, t);
}
function O2(e, t, n, r = {}) {
  const s = t === "local", i = Ah(null);
  if (s && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n))
    throw rn(pt.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
  const l = ut(r.inheritLocale) ? r.inheritLocale : !ve(r.locale), u = J(
    // prettier-ignore
    !s || l ? n.locale.value : ve(r.locale) ? r.locale : Xi
  ), f = J(
    // prettier-ignore
    !s || l ? n.fallbackLocale.value : ve(r.fallbackLocale) || Rt(r.fallbackLocale) || Ke(r.fallbackLocale) || r.fallbackLocale === !1 ? r.fallbackLocale : u.value
  ), h = J(Ac(u.value, r)), d = J(Ke(r.datetimeFormats) ? r.datetimeFormats : { [u.value]: {} }), m = J(Ke(r.numberFormats) ? r.numberFormats : { [u.value]: {} }), v = s ? n.missingWarn : ut(r.missingWarn) || Ss(r.missingWarn) ? r.missingWarn : !0, g = s ? n.fallbackWarn : ut(r.fallbackWarn) || Ss(r.fallbackWarn) ? r.fallbackWarn : !0, w = s ? n.fallbackRoot : ut(r.fallbackRoot) ? r.fallbackRoot : !0, E = !!r.fallbackFormat, k = qt(r.missing) ? r.missing : null, b = qt(r.postTranslation) ? r.postTranslation : null, D = s ? n.warnHtmlMessage : ut(r.warnHtmlMessage) ? r.warnHtmlMessage : !0, T = !!r.escapeParameter, x = s ? n.modifiers : Ke(r.modifiers) ? r.modifiers : {}, C = r.pluralRules || s && n.pluralRules;
  function M() {
    return [
      u.value,
      f.value,
      h.value,
      d.value,
      m.value
    ];
  }
  const I = Y({
    get: () => i.value ? i.value.locale.value : u.value,
    set: (A) => {
      i.value && (i.value.locale.value = A), u.value = A;
    }
  }), R = Y({
    get: () => i.value ? i.value.fallbackLocale.value : f.value,
    set: (A) => {
      i.value && (i.value.fallbackLocale.value = A), f.value = A;
    }
  }), V = Y(() => i.value ? i.value.messages.value : h.value), $ = Y(() => d.value), q = Y(() => m.value);
  function W() {
    return i.value ? i.value.getPostTranslationHandler() : b;
  }
  function se(A) {
    i.value && i.value.setPostTranslationHandler(A);
  }
  function me() {
    return i.value ? i.value.getMissingHandler() : k;
  }
  function ce(A) {
    i.value && i.value.setMissingHandler(A);
  }
  function ye(A) {
    return M(), A();
  }
  function Ae(...A) {
    return i.value ? ye(() => Reflect.apply(i.value.t, null, [...A])) : ye(() => "");
  }
  function Ue(...A) {
    return i.value ? Reflect.apply(i.value.rt, null, [...A]) : "";
  }
  function Re(...A) {
    return i.value ? ye(() => Reflect.apply(i.value.d, null, [...A])) : ye(() => "");
  }
  function re(...A) {
    return i.value ? ye(() => Reflect.apply(i.value.n, null, [...A])) : ye(() => "");
  }
  function Me(A) {
    return i.value ? i.value.tm(A) : {};
  }
  function mt(A, G) {
    return i.value ? i.value.te(A, G) : !1;
  }
  function At(A) {
    return i.value ? i.value.getLocaleMessage(A) : {};
  }
  function Se(A, G) {
    i.value && (i.value.setLocaleMessage(A, G), h.value[A] = G);
  }
  function nt(A, G) {
    i.value && i.value.mergeLocaleMessage(A, G);
  }
  function le(A) {
    return i.value ? i.value.getDateTimeFormat(A) : {};
  }
  function pe(A, G) {
    i.value && (i.value.setDateTimeFormat(A, G), d.value[A] = G);
  }
  function Oe(A, G) {
    i.value && i.value.mergeDateTimeFormat(A, G);
  }
  function ge(A) {
    return i.value ? i.value.getNumberFormat(A) : {};
  }
  function ne(A, G) {
    i.value && (i.value.setNumberFormat(A, G), m.value[A] = G);
  }
  function be(A, G) {
    i.value && i.value.mergeNumberFormat(A, G);
  }
  const Be = {
    get id() {
      return i.value ? i.value.id : -1;
    },
    locale: I,
    fallbackLocale: R,
    messages: V,
    datetimeFormats: $,
    numberFormats: q,
    get inheritLocale() {
      return i.value ? i.value.inheritLocale : l;
    },
    set inheritLocale(A) {
      i.value && (i.value.inheritLocale = A);
    },
    get availableLocales() {
      return i.value ? i.value.availableLocales : Object.keys(h.value);
    },
    get modifiers() {
      return i.value ? i.value.modifiers : x;
    },
    get pluralRules() {
      return i.value ? i.value.pluralRules : C;
    },
    get isGlobal() {
      return i.value ? i.value.isGlobal : !1;
    },
    get missingWarn() {
      return i.value ? i.value.missingWarn : v;
    },
    set missingWarn(A) {
      i.value && (i.value.missingWarn = A);
    },
    get fallbackWarn() {
      return i.value ? i.value.fallbackWarn : g;
    },
    set fallbackWarn(A) {
      i.value && (i.value.missingWarn = A);
    },
    get fallbackRoot() {
      return i.value ? i.value.fallbackRoot : w;
    },
    set fallbackRoot(A) {
      i.value && (i.value.fallbackRoot = A);
    },
    get fallbackFormat() {
      return i.value ? i.value.fallbackFormat : E;
    },
    set fallbackFormat(A) {
      i.value && (i.value.fallbackFormat = A);
    },
    get warnHtmlMessage() {
      return i.value ? i.value.warnHtmlMessage : D;
    },
    set warnHtmlMessage(A) {
      i.value && (i.value.warnHtmlMessage = A);
    },
    get escapeParameter() {
      return i.value ? i.value.escapeParameter : T;
    },
    set escapeParameter(A) {
      i.value && (i.value.escapeParameter = A);
    },
    t: Ae,
    getPostTranslationHandler: W,
    setPostTranslationHandler: se,
    getMissingHandler: me,
    setMissingHandler: ce,
    rt: Ue,
    d: Re,
    n: re,
    tm: Me,
    te: mt,
    getLocaleMessage: At,
    setLocaleMessage: Se,
    mergeLocaleMessage: nt,
    getDateTimeFormat: le,
    setDateTimeFormat: pe,
    mergeDateTimeFormat: Oe,
    getNumberFormat: ge,
    setNumberFormat: ne,
    mergeNumberFormat: be
  };
  function N(A) {
    A.locale.value = u.value, A.fallbackLocale.value = f.value, Object.keys(h.value).forEach((G) => {
      A.mergeLocaleMessage(G, h.value[G]);
    }), Object.keys(d.value).forEach((G) => {
      A.mergeDateTimeFormat(G, d.value[G]);
    }), Object.keys(m.value).forEach((G) => {
      A.mergeNumberFormat(G, m.value[G]);
    }), A.escapeParameter = T, A.fallbackFormat = E, A.fallbackRoot = w, A.fallbackWarn = g, A.missingWarn = v, A.warnHtmlMessage = D;
  }
  return WA(() => {
    if (e.proxy == null || e.proxy.$i18n == null)
      throw rn(pt.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
    const A = i.value = e.proxy.$i18n.__composer;
    t === "global" ? (u.value = A.locale.value, f.value = A.fallbackLocale.value, h.value = A.messages.value, d.value = A.datetimeFormats.value, m.value = A.numberFormats.value) : s && N(A);
  }), Be;
}
const D2 = [
  "locale",
  "fallbackLocale",
  "availableLocales"
], f_ = ["t", "rt", "d", "n", "tm", "te"];
function x2(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  return D2.forEach((s) => {
    const i = Object.getOwnPropertyDescriptor(t, s);
    if (!i)
      throw rn(pt.UNEXPECTED_ERROR);
    const l = un(i.value) ? {
      get() {
        return i.value.value;
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      set(u) {
        i.value.value = u;
      }
    } : {
      get() {
        return i.get && i.get();
      }
    };
    Object.defineProperty(n, s, l);
  }), e.config.globalProperties.$i18n = n, f_.forEach((s) => {
    const i = Object.getOwnPropertyDescriptor(t, s);
    if (!i || !i.value)
      throw rn(pt.UNEXPECTED_ERROR);
    Object.defineProperty(e.config.globalProperties, `$${s}`, i);
  }), () => {
    delete e.config.globalProperties.$i18n, f_.forEach((s) => {
      delete e.config.globalProperties[`$${s}`];
    });
  };
}
UC();
__INTLIFY_JIT_COMPILATION__ ? Hg(SC) : Hg(xC);
gC(JM);
_C(yy);
if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const e = Na();
  e.__INTLIFY__ = !0, oC(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
const S2 = {
  Never: "只執行一次",
  Hour: "每小時一次",
  Day: "每天一次",
  Week: "每週一次",
  Month: "每月一次",
  Annual: "每年一次",
  repeatHour: "時",
  repeatDay: "日",
  repeatWeek: "週",
  repeatMonth: "月",
  repeatAnnual: "年",
  sHour: "小時",
  sDay: "日",
  sWeek: "週",
  sMonth: "月",
  sAnnual: "年",
  mailConditionMet: "符合條件時",
  mailAll: "僅執行動作或錯誤時",
  mailError: "僅出現錯誤時",
  mailNone: "不寄送",
  ForAll: "所有項目",
  ForID: "指定項目",
  ForActive: "已啟用項目",
  SetNewBudget: "設定新預算",
  IncreaseBudget: "提高預算",
  LowerBudget: "降低預算",
  OpenProject: "開啟項目",
  SuspendProject: "暫停項目",
  None: "不執行動作",
  dailyBudget: "每日預算",
  totalBudget: "總預算",
  BudgetRemaining: "帳戶剩餘預算",
  BudgetCap: "預算上限",
  Clicks: "點擊數",
  Impressions: "曝光數",
  Cpc: "CPC",
  Spend: "花費",
  Conversions: "轉換數",
  ConversionSpend: "單次轉換費用",
  ReturnOnADSpending: "ROAS",
  Today: "當天",
  Yesterday: "昨天",
  Last3Days: "近3天",
  Last7Days: "近7天",
  ThisMonth: "這個月",
  SpecifiedTime: "指定時間",
  MoreThan: "大於",
  GreaterOrEqualTo: "大於等於",
  Equal: "等於",
  LessThan: "小於",
  LessThanOrEqualTo: "小於等於",
  conditionValue: "數值",
  conditionPercentage: "百分比",
  actionvalue: "數值",
  actionpercentage: "百分比",
  dailyBudget: "每日預算",
  totalBudget: "總預算",
  GoogleCampaign: "廣告活動",
  GoogleAdGroup: "廣告群組",
  GoogleAd: "廣告文字",
  GoogleAdTag: "廣告標籤",
  GoogleAccount: "帳戶",
  FacebookCampaign: "行銷活動",
  FacebookAdGroup: "廣告組合",
  FacebookAd: "廣告",
  FacebookAdTag: "行銷活動標籤",
  FacebookAccount: "帳戶",
  FacebookOn2: "所有行銷活動",
  FacebookOn3: "所有廣告組合",
  FacebookOn4: "所有廣告",
  FacebookOff2: "已啟用行銷活動",
  FacebookOff3: "已啟用廣告組合",
  FacebookOff4: "已啟用廣告",
  GoogleOn2: "所有廣告活動",
  GoogleOn3: "所有廣告群組",
  GoogleOff2: "已啟用廣告活動",
  GoogleOff3: "已啟用廣告群組",
  所有的: "所有的",
  已開啟的: "已開啟的",
  個: "個",
  且: "且",
  加入條件: "加入條件",
  請選擇條件: "請選擇條件",
  "輸入關鍵字搜尋 ex: 轉換數": "輸入關鍵字搜尋 ex: 轉換數",
  自訂: "自訂",
  取消: "取消",
  規則名稱: "規則名稱",
  執行時間: "執行時間",
  通知: "通知",
  資料未填寫完整: "資料未填寫完整",
  保存: "保存",
  持續執行: "持續執行",
  未設定: "未設定",
  以電子郵件寄出結果: "以電子郵件寄出結果",
  請選擇: "請選擇",
  只執行一次: "只執行一次",
  每小時執行一次: "每小時執行一次",
  每日執行一次: "每日執行一次",
  每週執行一次: "每週執行一次",
  每月執行一次: "每月執行一次",
  每年執行一次: "每年執行一次",
  小時: "小時",
  日: "日",
  週: "週",
  月: "月",
  年: "年",
  每: "每",
  執行一次: "執行一次",
  開始: "開始",
  執行頻率: "執行頻率",
  自訂: "自訂",
  結束: "結束",
  日預算: "日預算",
  總預算: "總預算",
  "若{clientAndAdLevel}設定為{paramsBudgetTypeValue}，則不會變更": "若{clientAndAdLevel}設定為{paramsBudgetTypeValue}，則不會變更",
  加入動作: "加入動作",
  動作: "動作",
  平台: "平台",
  層級: "層級",
  項目: "項目",
  未選擇: "未選擇",
  "已選{count}個項目": "已選{count}個項目",
  請選擇目標: "請選擇目標",
  搜尋: "搜尋",
  篩選: "篩選",
  啟用中: "啟用中",
  暫停中: "暫停中",
  全選: "全選",
  確定: "確定",
  執行: "執行",
  類型: "類型",
  調整: "調整",
  元: "元",
  預算上限: "預算上限",
  預算下限: "預算下限",
  週日: "週日",
  週一: "週一",
  週二: "週二",
  週三: "週三",
  週四: "週四",
  週五: "週五",
  週六: "週六",
  平日: "平日",
  週末: "週末",
  第一週: "第一週",
  第二週: "第二週",
  第三週: "第三週",
  第四週: "第四週",
  第五週: "第五週",
  最後一週: "最後一週",
  最後一天: "最後一天",
  一月: "一月",
  二月: "二月",
  三月: "三月",
  四月: "四月",
  五月: "五月",
  六月: "六月",
  七月: "七月",
  八月: "八月",
  九月: "九月",
  十月: "十月",
  十一月: "十一月",
  十二月: "十二月",
  星期: "星期",
  日期: "日期",
  指定時段: "指定時段",
  月份: "月份",
  與作天相比: "與作天相比",
  與前一天相比: "與前一天相比",
  與前3天相比: "與前3天相比",
  與前7天相比: "與前7天相比",
  與上個月相比: "與上個月相比",
  "條件 {count}": "條件 {count}",
  條件: "條件",
  區間: "區間",
  請選定區間: "請選定區間",
  加入比較區間: "加入比較區間",
  運算: "運算",
  永不: "永不",
  天: "天",
  個月: "個月",
  "ex: 廣告開啟規則": "ex: 廣告開啟規則",
  "No Data": "沒有資料",
  無: "無"
}, k2 = {
  Never: "Once",
  Hour: "Hourly",
  Day: "Daily",
  Week: "Weekly",
  Month: "Monthly",
  Annual: "Yearly",
  repeatHour: "hour",
  repeatDay: "day",
  repeatWeek: "week",
  repeatMonth: "month",
  repeatAnnual: "year",
  sHour: "hour",
  sDay: "day",
  sWeek: "week",
  sMonth: "month",
  sAnnual: "year",
  mailConditionMet: "Only if conditions are met",
  mailAll: "Only if there are changes or errors",
  mailError: "Only if there are errors",
  mailNone: "No emails",
  ForAll: "All",
  ForID: "Selected",
  ForActive: "Enabled",
  SetNewBudget: "Change budgets",
  IncreaseBudget: "Increase budget",
  LowerBudget: "Decrease budget",
  OpenProject: "Enable",
  SuspendProject: "Pause",
  None: "Send email",
  dailyBudget: "Avg. Daily",
  totalBudget: "Total",
  BudgetRemaining: "Account remaining budget",
  BudgetCap: "Upper budget limit",
  Clicks: "Clicks",
  Impressions: "Imprssions",
  Cpc: "Avg. CPC",
  Spend: "Total Spent",
  Conversions: "Conversions",
  ConversionSpend: "Avg. CPA",
  ReturnOnADSpending: "ROAS",
  Today: "Today",
  Yesterday: "Yesterday",
  Last3Days: "Last 3 days",
  Last7Days: "Last 7 days",
  ThisMonth: "This month",
  SpecifiedTime: "Custom",
  MoreThan: ">",
  GreaterOrEqualTo: ">=",
  Equal: "=",
  LessThan: "<",
  LessThanOrEqualTo: "<=",
  conditionValue: "Amount",
  conditionPercentage: "Percentage",
  actionvalue: "Amount",
  actionpercentage: "Percentage",
  dailyBudget: "Avg. Daily",
  totalBudget: "Total",
  GoogleCampaign: "Campaign",
  GoogleAdGroup: "Ad group",
  GoogleAd: "Ad",
  GoogleAdTag: "Ad label",
  GoogleAccount: "Account",
  FacebookCampaign: "Campaign",
  FacebookAdGroup: "Ad sets",
  FacebookAd: "Ads",
  FacebookAdTag: "Campaign tags",
  FacebookAccount: "Account",
  FacebookOn2: "All Campaigns",
  FacebookOn3: "All ad sets",
  FacebookOn4: "All ads",
  FacebookOff2: "Enabled campaigns",
  FacebookOff3: "Enabled ad sets",
  FacebookOff4: "Enabled ads",
  GoogleOn2: "All campaigns",
  GoogleOn3: "All ad groups",
  GoogleOff2: "Enabled campaigns",
  GoogleOff3: "Enabled ad groups",
  所有的: "All",
  已開啟的: "Enabled",
  個: "items",
  且: "And",
  加入條件: "Add condition",
  請選擇條件: "Choose a condition",
  "輸入關鍵字搜尋 ex: 轉換數": "Search",
  自訂: "Custom",
  取消: "Cancel",
  規則名稱: "Task",
  執行時間: "Time",
  通知: "Notification",
  資料未填寫完整: "Missing Information",
  保存: "Save",
  持續執行: "Repeat Forever",
  未設定: "Select",
  以電子郵件寄出結果: "Email results",
  請選擇: "Select",
  只執行一次: "Once",
  每小時執行一次: "Hourly",
  每日執行一次: "Daily",
  每週執行一次: "Weekly",
  每月執行一次: "Monthly",
  每年執行一次: "Yearly",
  小時: "hour",
  日: "day",
  週: "week",
  月: "month",
  年: "year",
  每: "Every",
  執行一次: "Once",
  開始: "Start",
  執行頻率: "Frequency",
  自訂: "Custom",
  結束: "End",
  日預算: "Avg. Daily",
  總預算: "Campaign total",
  "若{clientAndAdLevel}設定為{paramsBudgetTypeValue}，則不會變更": "",
  加入動作: "Add action",
  動作: "Action",
  平台: "Platform",
  層級: "Level",
  項目: "Apply to",
  未選擇: "Select",
  "已選${count}個項目": "${count} Selected",
  請選擇目標: "Select",
  搜尋: "Search",
  篩選: "Filter",
  啟用中: "Enabled",
  暫停中: "Paused",
  全選: "Select All",
  確定: "Save",
  執行: "Choose what happens",
  類型: "Budget type",
  調整: "Action",
  元: "USD",
  預算上限: "Upper budget limit",
  預算下限: "Lower budget limit",
  週日: "Sunday",
  週一: "Monday",
  週二: "Tuesday",
  週三: "Wednesday",
  週四: "Thursday",
  週五: "Friday",
  週六: "Saturday",
  平日: "Weekdays",
  週末: "Weekends",
  第一週: "first week",
  第二週: "second week",
  第三週: "third week",
  第四週: "fourth week",
  第五週: "fifth week",
  最後一週: "last week",
  最後一天: "last day",
  一月: "Jan",
  二月: "Feb",
  三月: "Mar",
  四月: "Apr",
  五月: "May",
  六月: "Jun",
  七月: "Jul",
  八月: "Aug",
  九月: "Sep",
  十月: "Oct",
  十一月: "Nov",
  十二月: "Dec",
  星期: "day",
  日期: "date",
  指定時段: "Custom",
  月份: "Month",
  與作天相比: "compared with yesterday",
  與前一天相比: "Compared with the previous day",
  與前3天相比: "compared with previous 3 days",
  與前7天相比: "compared with previous 7 days",
  與上個月相比: "compared with last month",
  "條件 {count}": "Condition {count}",
  條件: "Condition",
  區間: "Using data from",
  請選定區間: "Select",
  加入比較區間: "Compare to",
  運算: "Value",
  永不: "Never",
  天: "days",
  個月: "months",
  "ex: 廣告開啟規則": "ex: Enable Ads",
  "No Data": "No Data",
  無: "None"
}, T2 = {
  zh_TW: S2,
  en_US: k2
}, fa = m2({
  locale: "zh_TW",
  legacy: !1,
  globalInjection: !0,
  messages: T2
}), Bo = {
  every: "每",
  frequency: {
    Never: "永不",
    Hour: "小時",
    Day: "天",
    Week: "週",
    Month: "個月",
    Annual: "年"
  },
  weekdays: {
    Sunday: "週日",
    Monday: "週一",
    Tuesday: "週二",
    Wednesday: "週三",
    Thursday: "週四",
    Friday: "週五",
    Saturday: "週六",
    Weekday: "平日",
    Weekend: "週末"
  },
  weekOrdinal: {
    First: "第一週",
    Second: "第二週",
    Third: "第三週",
    Fourth: "第四週",
    Fifth: "第五週",
    Last: "最後一週"
  }
};
function A2(e, t = !1) {
  const { t: n } = fa.global, r = new Date(e.start).toLocaleString("zh-TW", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    hour12: !1
  }), s = e.due ? new Date(e.due).toLocaleString("zh-TW", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    hour12: !1
  }) : null;
  if (e.frequency === xt.Never)
    return `於 ${r} 起`;
  const i = n(Bo.frequency[xt[e.frequency]]), l = e.weekdays ? e.weekdays.map((v) => n(Bo.weekdays[_r[v]])).join("、") : "", u = e.weekOrdinal ? e.weekOrdinal.map((v) => n(Bo.weekOrdinal[Pa[v]])).join("、") : "", f = e.monthDate ? `${e.monthDate.join("、")}號`.replace("-1", n()) : "", h = e.yearMonths ? `${e.yearMonths.sort((v, g) => g - v).reverse().join("、")}月` : "";
  let d = `於 ${r} 起，${Bo.every}${e.interval}${i}`, m = `${Bo.every}${e.interval}${i}`;
  if (u || l || f || h) {
    d += "的", m += "的";
    const v = [];
    h && v.push(`${h}的`), f && v.push(f), u && v.push(`${u}的`), l && v.push(l), d += v.join(""), m += v.join("");
  }
  return s && (d += `，並於 ${s} 結束循環`), t ? m : d;
}
const M2 = ["top", "right", "bottom", "left"], ks = Math.min, er = Math.max, Zu = Math.round, Su = Math.floor, Ts = (e) => ({
  x: e,
  y: e
}), C2 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, P2 = {
  start: "end",
  end: "start"
};
function Jd(e, t, n) {
  return er(e, ks(t, n));
}
function Ya(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Wa(e) {
  return e.split("-")[0];
}
function lo(e) {
  return e.split("-")[1];
}
function Vh(e) {
  return e === "x" ? "y" : "x";
}
function jh(e) {
  return e === "y" ? "height" : "width";
}
function uo(e) {
  return ["top", "bottom"].includes(Wa(e)) ? "y" : "x";
}
function Gh(e) {
  return Vh(uo(e));
}
function N2(e, t, n) {
  n === void 0 && (n = !1);
  const r = lo(e), s = Gh(e), i = jh(s);
  let l = s === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (l = Xu(l)), [l, Xu(l)];
}
function $2(e) {
  const t = Xu(e);
  return [Qd(e), t, Qd(t)];
}
function Qd(e) {
  return e.replace(/start|end/g, (t) => P2[t]);
}
function I2(e, t, n) {
  const r = ["left", "right"], s = ["right", "left"], i = ["top", "bottom"], l = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? s : r : t ? r : s;
    case "left":
    case "right":
      return t ? i : l;
    default:
      return [];
  }
}
function L2(e, t, n, r) {
  const s = lo(e);
  let i = I2(Wa(e), n === "start", r);
  return s && (i = i.map((l) => l + "-" + s), t && (i = i.concat(i.map(Qd)))), i;
}
function Xu(e) {
  return e.replace(/left|right|bottom|top/g, (t) => C2[t]);
}
function R2(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function zy(e) {
  return typeof e != "number" ? R2(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ju(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function d_(e, t, n) {
  let {
    reference: r,
    floating: s
  } = e;
  const i = uo(t), l = Gh(t), u = jh(l), f = Wa(t), h = i === "y", d = r.x + r.width / 2 - s.width / 2, m = r.y + r.height / 2 - s.height / 2, v = r[u] / 2 - s[u] / 2;
  let g;
  switch (f) {
    case "top":
      g = {
        x: d,
        y: r.y - s.height
      };
      break;
    case "bottom":
      g = {
        x: d,
        y: r.y + r.height
      };
      break;
    case "right":
      g = {
        x: r.x + r.width,
        y: m
      };
      break;
    case "left":
      g = {
        x: r.x - s.width,
        y: m
      };
      break;
    default:
      g = {
        x: r.x,
        y: r.y
      };
  }
  switch (lo(t)) {
    case "start":
      g[l] -= v * (n && h ? -1 : 1);
      break;
    case "end":
      g[l] += v * (n && h ? -1 : 1);
      break;
  }
  return g;
}
const F2 = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: s = "absolute",
    middleware: i = [],
    platform: l
  } = n, u = i.filter(Boolean), f = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let h = await l.getElementRects({
    reference: e,
    floating: t,
    strategy: s
  }), {
    x: d,
    y: m
  } = d_(h, r, f), v = r, g = {}, w = 0;
  for (let E = 0; E < u.length; E++) {
    const {
      name: k,
      fn: b
    } = u[E], {
      x: D,
      y: T,
      data: x,
      reset: C
    } = await b({
      x: d,
      y: m,
      initialPlacement: r,
      placement: v,
      strategy: s,
      middlewareData: g,
      rects: h,
      platform: l,
      elements: {
        reference: e,
        floating: t
      }
    });
    if (d = D ?? d, m = T ?? m, g = {
      ...g,
      [k]: {
        ...g[k],
        ...x
      }
    }, C && w <= 50) {
      w++, typeof C == "object" && (C.placement && (v = C.placement), C.rects && (h = C.rects === !0 ? await l.getElementRects({
        reference: e,
        floating: t,
        strategy: s
      }) : C.rects), {
        x: d,
        y: m
      } = d_(h, v, f)), E = -1;
      continue;
    }
  }
  return {
    x: d,
    y: m,
    placement: v,
    strategy: s,
    middlewareData: g
  };
};
async function dl(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: s,
    platform: i,
    rects: l,
    elements: u,
    strategy: f
  } = e, {
    boundary: h = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: m = "floating",
    altBoundary: v = !1,
    padding: g = 0
  } = Ya(t, e), w = zy(g), k = u[v ? m === "floating" ? "reference" : "floating" : m], b = Ju(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(k))) == null || n ? k : k.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(u.floating)),
    boundary: h,
    rootBoundary: d,
    strategy: f
  })), D = m === "floating" ? {
    ...l.floating,
    x: r,
    y: s
  } : l.reference, T = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u.floating)), x = await (i.isElement == null ? void 0 : i.isElement(T)) ? await (i.getScale == null ? void 0 : i.getScale(T)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = Ju(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: D,
    offsetParent: T,
    strategy: f
  }) : D);
  return {
    top: (b.top - C.top + w.top) / x.y,
    bottom: (C.bottom - b.bottom + w.bottom) / x.y,
    left: (b.left - C.left + w.left) / x.x,
    right: (C.right - b.right + w.right) / x.x
  };
}
const Y2 = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: s,
      rects: i,
      platform: l,
      elements: u,
      middlewareData: f
    } = t, {
      element: h,
      padding: d = 0
    } = Ya(e, t) || {};
    if (h == null)
      return {};
    const m = zy(d), v = {
      x: n,
      y: r
    }, g = Gh(s), w = jh(g), E = await l.getDimensions(h), k = g === "y", b = k ? "top" : "left", D = k ? "bottom" : "right", T = k ? "clientHeight" : "clientWidth", x = i.reference[w] + i.reference[g] - v[g] - i.floating[w], C = v[g] - i.reference[g], M = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(h));
    let I = M ? M[T] : 0;
    (!I || !await (l.isElement == null ? void 0 : l.isElement(M))) && (I = u.floating[T] || i.floating[w]);
    const R = x / 2 - C / 2, V = I / 2 - E[w] / 2 - 1, $ = ks(m[b], V), q = ks(m[D], V), W = $, se = I - E[w] - q, me = I / 2 - E[w] / 2 + R, ce = Jd(W, me, se), ye = !f.arrow && lo(s) != null && me != ce && i.reference[w] / 2 - (me < W ? $ : q) - E[w] / 2 < 0, Ae = ye ? me < W ? me - W : me - se : 0;
    return {
      [g]: v[g] + Ae,
      data: {
        [g]: ce,
        centerOffset: me - ce - Ae,
        ...ye && {
          alignmentOffset: Ae
        }
      },
      reset: ye
    };
  }
}), W2 = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: s,
        middlewareData: i,
        rects: l,
        initialPlacement: u,
        platform: f,
        elements: h
      } = t, {
        mainAxis: d = !0,
        crossAxis: m = !0,
        fallbackPlacements: v,
        fallbackStrategy: g = "bestFit",
        fallbackAxisSideDirection: w = "none",
        flipAlignment: E = !0,
        ...k
      } = Ya(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const b = Wa(s), D = Wa(u) === u, T = await (f.isRTL == null ? void 0 : f.isRTL(h.floating)), x = v || (D || !E ? [Xu(u)] : $2(u));
      !v && w !== "none" && x.push(...L2(u, E, w, T));
      const C = [u, ...x], M = await dl(t, k), I = [];
      let R = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (d && I.push(M[b]), m) {
        const W = N2(s, l, T);
        I.push(M[W[0]], M[W[1]]);
      }
      if (R = [...R, {
        placement: s,
        overflows: I
      }], !I.every((W) => W <= 0)) {
        var V, $;
        const W = (((V = i.flip) == null ? void 0 : V.index) || 0) + 1, se = C[W];
        if (se)
          return {
            data: {
              index: W,
              overflows: R
            },
            reset: {
              placement: se
            }
          };
        let me = ($ = R.filter((ce) => ce.overflows[0] <= 0).sort((ce, ye) => ce.overflows[1] - ye.overflows[1])[0]) == null ? void 0 : $.placement;
        if (!me)
          switch (g) {
            case "bestFit": {
              var q;
              const ce = (q = R.map((ye) => [ye.placement, ye.overflows.filter((Ae) => Ae > 0).reduce((Ae, Ue) => Ae + Ue, 0)]).sort((ye, Ae) => ye[1] - Ae[1])[0]) == null ? void 0 : q[0];
              ce && (me = ce);
              break;
            }
            case "initialPlacement":
              me = u;
              break;
          }
        if (s !== me)
          return {
            reset: {
              placement: me
            }
          };
      }
      return {};
    }
  };
};
function h_(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function p_(e) {
  return M2.some((t) => e[t] >= 0);
}
const U2 = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...s
      } = Ya(e, t);
      switch (r) {
        case "referenceHidden": {
          const i = await dl(t, {
            ...s,
            elementContext: "reference"
          }), l = h_(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: p_(l)
            }
          };
        }
        case "escaped": {
          const i = await dl(t, {
            ...s,
            altBoundary: !0
          }), l = h_(i, n.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: p_(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function B2(e, t) {
  const {
    placement: n,
    platform: r,
    elements: s
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(s.floating)), l = Wa(n), u = lo(n), f = uo(n) === "y", h = ["left", "top"].includes(l) ? -1 : 1, d = i && f ? -1 : 1, m = Ya(t, e);
  let {
    mainAxis: v,
    crossAxis: g,
    alignmentAxis: w
  } = typeof m == "number" ? {
    mainAxis: m,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...m
  };
  return u && typeof w == "number" && (g = u === "end" ? w * -1 : w), f ? {
    x: g * d,
    y: v * h
  } : {
    x: v * h,
    y: g * d
  };
}
const H2 = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r
      } = t, s = await B2(t, e);
      return {
        x: n + s.x,
        y: r + s.y,
        data: s
      };
    }
  };
}, V2 = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: s
      } = t, {
        mainAxis: i = !0,
        crossAxis: l = !1,
        limiter: u = {
          fn: (k) => {
            let {
              x: b,
              y: D
            } = k;
            return {
              x: b,
              y: D
            };
          }
        },
        ...f
      } = Ya(e, t), h = {
        x: n,
        y: r
      }, d = await dl(t, f), m = uo(Wa(s)), v = Vh(m);
      let g = h[v], w = h[m];
      if (i) {
        const k = v === "y" ? "top" : "left", b = v === "y" ? "bottom" : "right", D = g + d[k], T = g - d[b];
        g = Jd(D, g, T);
      }
      if (l) {
        const k = m === "y" ? "top" : "left", b = m === "y" ? "bottom" : "right", D = w + d[k], T = w - d[b];
        w = Jd(D, w, T);
      }
      const E = u.fn({
        ...t,
        [v]: g,
        [m]: w
      });
      return {
        ...E,
        data: {
          x: E.x - n,
          y: E.y - r
        }
      };
    }
  };
}, j2 = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: s,
        rects: i,
        middlewareData: l
      } = t, {
        offset: u = 0,
        mainAxis: f = !0,
        crossAxis: h = !0
      } = Ya(e, t), d = {
        x: n,
        y: r
      }, m = uo(s), v = Vh(m);
      let g = d[v], w = d[m];
      const E = Ya(u, t), k = typeof E == "number" ? {
        mainAxis: E,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...E
      };
      if (f) {
        const T = v === "y" ? "height" : "width", x = i.reference[v] - i.floating[T] + k.mainAxis, C = i.reference[v] + i.reference[T] - k.mainAxis;
        g < x ? g = x : g > C && (g = C);
      }
      if (h) {
        var b, D;
        const T = v === "y" ? "width" : "height", x = ["top", "left"].includes(Wa(s)), C = i.reference[m] - i.floating[T] + (x && ((b = l.offset) == null ? void 0 : b[m]) || 0) + (x ? 0 : k.crossAxis), M = i.reference[m] + i.reference[T] + (x ? 0 : ((D = l.offset) == null ? void 0 : D[m]) || 0) - (x ? k.crossAxis : 0);
        w < C ? w = C : w > M && (w = M);
      }
      return {
        [v]: g,
        [m]: w
      };
    }
  };
}, G2 = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      const {
        placement: n,
        rects: r,
        platform: s,
        elements: i
      } = t, {
        apply: l = () => {
        },
        ...u
      } = Ya(e, t), f = await dl(t, u), h = Wa(n), d = lo(n), m = uo(n) === "y", {
        width: v,
        height: g
      } = r.floating;
      let w, E;
      h === "top" || h === "bottom" ? (w = h, E = d === (await (s.isRTL == null ? void 0 : s.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (E = h, w = d === "end" ? "top" : "bottom");
      const k = g - f[w], b = v - f[E], D = !t.middlewareData.shift;
      let T = k, x = b;
      if (m) {
        const M = v - f.left - f.right;
        x = d || D ? ks(b, M) : M;
      } else {
        const M = g - f.top - f.bottom;
        T = d || D ? ks(k, M) : M;
      }
      if (D && !d) {
        const M = er(f.left, 0), I = er(f.right, 0), R = er(f.top, 0), V = er(f.bottom, 0);
        m ? x = v - 2 * (M !== 0 || I !== 0 ? M + I : er(f.left, f.right)) : T = g - 2 * (R !== 0 || V !== 0 ? R + V : er(f.top, f.bottom));
      }
      await l({
        ...t,
        availableWidth: x,
        availableHeight: T
      });
      const C = await s.getDimensions(i.floating);
      return v !== C.width || g !== C.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function As(e) {
  return qy(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function sr(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function za(e) {
  var t;
  return (t = (qy(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function qy(e) {
  return e instanceof Node || e instanceof sr(e).Node;
}
function Ua(e) {
  return e instanceof Element || e instanceof sr(e).Element;
}
function oa(e) {
  return e instanceof HTMLElement || e instanceof sr(e).HTMLElement;
}
function m_(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof sr(e).ShadowRoot;
}
function xl(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: s
  } = Sr(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(s);
}
function z2(e) {
  return ["table", "td", "th"].includes(As(e));
}
function zh(e) {
  const t = qh(), n = Sr(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function q2(e) {
  let t = Ji(e);
  for (; oa(t) && !Mc(t); ) {
    if (zh(t))
      return t;
    t = Ji(t);
  }
  return null;
}
function qh() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Mc(e) {
  return ["html", "body", "#document"].includes(As(e));
}
function Sr(e) {
  return sr(e).getComputedStyle(e);
}
function Cc(e) {
  return Ua(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function Ji(e) {
  if (As(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    m_(e) && e.host || // Fallback.
    za(e)
  );
  return m_(t) ? t.host : t;
}
function Ky(e) {
  const t = Ji(e);
  return Mc(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : oa(t) && xl(t) ? t : Ky(t);
}
function hl(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const s = Ky(e), i = s === ((r = e.ownerDocument) == null ? void 0 : r.body), l = sr(s);
  return i ? t.concat(l, l.visualViewport || [], xl(s) ? s : [], l.frameElement && n ? hl(l.frameElement) : []) : t.concat(s, hl(s, [], n));
}
function Zy(e) {
  const t = Sr(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const s = oa(e), i = s ? e.offsetWidth : n, l = s ? e.offsetHeight : r, u = Zu(n) !== i || Zu(r) !== l;
  return u && (n = i, r = l), {
    width: n,
    height: r,
    $: u
  };
}
function Kh(e) {
  return Ua(e) ? e : e.contextElement;
}
function Bi(e) {
  const t = Kh(e);
  if (!oa(t))
    return Ts(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: s,
    $: i
  } = Zy(t);
  let l = (i ? Zu(n.width) : n.width) / r, u = (i ? Zu(n.height) : n.height) / s;
  return (!l || !Number.isFinite(l)) && (l = 1), (!u || !Number.isFinite(u)) && (u = 1), {
    x: l,
    y: u
  };
}
const K2 = /* @__PURE__ */ Ts(0);
function Xy(e) {
  const t = sr(e);
  return !qh() || !t.visualViewport ? K2 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Z2(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== sr(e) ? !1 : t;
}
function si(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const s = e.getBoundingClientRect(), i = Kh(e);
  let l = Ts(1);
  t && (r ? Ua(r) && (l = Bi(r)) : l = Bi(e));
  const u = Z2(i, n, r) ? Xy(i) : Ts(0);
  let f = (s.left + u.x) / l.x, h = (s.top + u.y) / l.y, d = s.width / l.x, m = s.height / l.y;
  if (i) {
    const v = sr(i), g = r && Ua(r) ? sr(r) : r;
    let w = v.frameElement;
    for (; w && r && g !== v; ) {
      const E = Bi(w), k = w.getBoundingClientRect(), b = Sr(w), D = k.left + (w.clientLeft + parseFloat(b.paddingLeft)) * E.x, T = k.top + (w.clientTop + parseFloat(b.paddingTop)) * E.y;
      f *= E.x, h *= E.y, d *= E.x, m *= E.y, f += D, h += T, w = sr(w).frameElement;
    }
  }
  return Ju({
    width: d,
    height: m,
    x: f,
    y: h
  });
}
function X2(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: r
  } = e;
  const s = oa(n), i = za(n);
  if (n === i)
    return t;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = Ts(1);
  const f = Ts(0);
  if ((s || !s && r !== "fixed") && ((As(n) !== "body" || xl(i)) && (l = Cc(n)), oa(n))) {
    const h = si(n);
    u = Bi(n), f.x = h.x + n.clientLeft, f.y = h.y + n.clientTop;
  }
  return {
    width: t.width * u.x,
    height: t.height * u.y,
    x: t.x * u.x - l.scrollLeft * u.x + f.x,
    y: t.y * u.y - l.scrollTop * u.y + f.y
  };
}
function J2(e) {
  return Array.from(e.getClientRects());
}
function Jy(e) {
  return si(za(e)).left + Cc(e).scrollLeft;
}
function Q2(e) {
  const t = za(e), n = Cc(e), r = e.ownerDocument.body, s = er(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = er(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let l = -n.scrollLeft + Jy(e);
  const u = -n.scrollTop;
  return Sr(r).direction === "rtl" && (l += er(t.clientWidth, r.clientWidth) - s), {
    width: s,
    height: i,
    x: l,
    y: u
  };
}
function eP(e, t) {
  const n = sr(e), r = za(e), s = n.visualViewport;
  let i = r.clientWidth, l = r.clientHeight, u = 0, f = 0;
  if (s) {
    i = s.width, l = s.height;
    const h = qh();
    (!h || h && t === "fixed") && (u = s.offsetLeft, f = s.offsetTop);
  }
  return {
    width: i,
    height: l,
    x: u,
    y: f
  };
}
function tP(e, t) {
  const n = si(e, !0, t === "fixed"), r = n.top + e.clientTop, s = n.left + e.clientLeft, i = oa(e) ? Bi(e) : Ts(1), l = e.clientWidth * i.x, u = e.clientHeight * i.y, f = s * i.x, h = r * i.y;
  return {
    width: l,
    height: u,
    x: f,
    y: h
  };
}
function v_(e, t, n) {
  let r;
  if (t === "viewport")
    r = eP(e, n);
  else if (t === "document")
    r = Q2(za(e));
  else if (Ua(t))
    r = tP(t, n);
  else {
    const s = Xy(e);
    r = {
      ...t,
      x: t.x - s.x,
      y: t.y - s.y
    };
  }
  return Ju(r);
}
function Qy(e, t) {
  const n = Ji(e);
  return n === t || !Ua(n) || Mc(n) ? !1 : Sr(n).position === "fixed" || Qy(n, t);
}
function nP(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = hl(e, [], !1).filter((u) => Ua(u) && As(u) !== "body"), s = null;
  const i = Sr(e).position === "fixed";
  let l = i ? Ji(e) : e;
  for (; Ua(l) && !Mc(l); ) {
    const u = Sr(l), f = zh(l);
    !f && u.position === "fixed" && (s = null), (i ? !f && !s : !f && u.position === "static" && !!s && ["absolute", "fixed"].includes(s.position) || xl(l) && !f && Qy(e, l)) ? r = r.filter((d) => d !== l) : s = u, l = Ji(l);
  }
  return t.set(e, r), r;
}
function rP(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: s
  } = e;
  const l = [...n === "clippingAncestors" ? nP(t, this._c) : [].concat(n), r], u = l[0], f = l.reduce((h, d) => {
    const m = v_(t, d, s);
    return h.top = er(m.top, h.top), h.right = ks(m.right, h.right), h.bottom = ks(m.bottom, h.bottom), h.left = er(m.left, h.left), h;
  }, v_(t, u, s));
  return {
    width: f.right - f.left,
    height: f.bottom - f.top,
    x: f.left,
    y: f.top
  };
}
function aP(e) {
  return Zy(e);
}
function sP(e, t, n) {
  const r = oa(t), s = za(t), i = n === "fixed", l = si(e, !0, i, t);
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const f = Ts(0);
  if (r || !r && !i)
    if ((As(t) !== "body" || xl(s)) && (u = Cc(t)), r) {
      const h = si(t, !0, i, t);
      f.x = h.x + t.clientLeft, f.y = h.y + t.clientTop;
    } else
      s && (f.x = Jy(s));
  return {
    x: l.left + u.scrollLeft - f.x,
    y: l.top + u.scrollTop - f.y,
    width: l.width,
    height: l.height
  };
}
function g_(e, t) {
  return !oa(e) || Sr(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function e1(e, t) {
  const n = sr(e);
  if (!oa(e))
    return n;
  let r = g_(e, t);
  for (; r && z2(r) && Sr(r).position === "static"; )
    r = g_(r, t);
  return r && (As(r) === "html" || As(r) === "body" && Sr(r).position === "static" && !zh(r)) ? n : r || q2(e) || n;
}
const iP = async function(e) {
  let {
    reference: t,
    floating: n,
    strategy: r
  } = e;
  const s = this.getOffsetParent || e1, i = this.getDimensions;
  return {
    reference: sP(t, await s(n), r),
    floating: {
      x: 0,
      y: 0,
      ...await i(n)
    }
  };
};
function oP(e) {
  return Sr(e).direction === "rtl";
}
const lP = {
  convertOffsetParentRelativeRectToViewportRelativeRect: X2,
  getDocumentElement: za,
  getClippingRect: rP,
  getOffsetParent: e1,
  getElementRects: iP,
  getClientRects: J2,
  getDimensions: aP,
  getScale: Bi,
  isElement: Ua,
  isRTL: oP
};
function uP(e, t) {
  let n = null, r;
  const s = za(e);
  function i() {
    clearTimeout(r), n && n.disconnect(), n = null;
  }
  function l(u, f) {
    u === void 0 && (u = !1), f === void 0 && (f = 1), i();
    const {
      left: h,
      top: d,
      width: m,
      height: v
    } = e.getBoundingClientRect();
    if (u || t(), !m || !v)
      return;
    const g = Su(d), w = Su(s.clientWidth - (h + m)), E = Su(s.clientHeight - (d + v)), k = Su(h), D = {
      rootMargin: -g + "px " + -w + "px " + -E + "px " + -k + "px",
      threshold: er(0, ks(1, f)) || 1
    };
    let T = !0;
    function x(C) {
      const M = C[0].intersectionRatio;
      if (M !== f) {
        if (!T)
          return l();
        M ? l(!1, M) : r = setTimeout(() => {
          l(!1, 1e-7);
        }, 100);
      }
      T = !1;
    }
    try {
      n = new IntersectionObserver(x, {
        ...D,
        // Handle <iframe>s
        root: s.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(x, D);
    }
    n.observe(e);
  }
  return l(!0), i;
}
function cP(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: s = !0,
    ancestorResize: i = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: u = typeof IntersectionObserver == "function",
    animationFrame: f = !1
  } = r, h = Kh(e), d = s || i ? [...h ? hl(h) : [], ...hl(t)] : [];
  d.forEach((b) => {
    s && b.addEventListener("scroll", n, {
      passive: !0
    }), i && b.addEventListener("resize", n);
  });
  const m = h && u ? uP(h, n) : null;
  let v = -1, g = null;
  l && (g = new ResizeObserver((b) => {
    let [D] = b;
    D && D.target === h && g && (g.unobserve(t), cancelAnimationFrame(v), v = requestAnimationFrame(() => {
      g && g.observe(t);
    })), n();
  }), h && !f && g.observe(h), g.observe(t));
  let w, E = f ? si(e) : null;
  f && k();
  function k() {
    const b = si(e);
    E && (b.x !== E.x || b.y !== E.y || b.width !== E.width || b.height !== E.height) && n(), E = b, w = requestAnimationFrame(k);
  }
  return n(), () => {
    d.forEach((b) => {
      s && b.removeEventListener("scroll", n), i && b.removeEventListener("resize", n);
    }), m && m(), g && g.disconnect(), g = null, f && cancelAnimationFrame(w);
  };
}
const fP = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), s = {
    platform: lP,
    ...n
  }, i = {
    ...s.platform,
    _c: r
  };
  return F2(e, t, {
    ...s,
    platform: i
  });
};
function eh(e) {
  var t;
  return (t = e == null ? void 0 : e.$el) != null ? t : e;
}
function dP(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const n = eh(y(e.element));
      return n == null ? {} : Y2({
        element: n,
        padding: e.padding
      }).fn(t);
    }
  };
}
function t1(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function __(e, t) {
  const n = t1(e);
  return Math.round(t * n) / n;
}
function hP(e, t, n) {
  n === void 0 && (n = {});
  const r = n.whileElementsMounted, s = Y(() => {
    var I;
    return (I = y(n.open)) != null ? I : !0;
  }), i = Y(() => y(n.middleware)), l = Y(() => {
    var I;
    return (I = y(n.placement)) != null ? I : "bottom";
  }), u = Y(() => {
    var I;
    return (I = y(n.strategy)) != null ? I : "absolute";
  }), f = Y(() => {
    var I;
    return (I = y(n.transform)) != null ? I : !0;
  }), h = Y(() => eh(e.value)), d = Y(() => eh(t.value)), m = J(0), v = J(0), g = J(u.value), w = J(l.value), E = Ah({}), k = J(!1), b = Y(() => {
    const I = {
      position: g.value,
      left: "0",
      top: "0"
    };
    if (!d.value)
      return I;
    const R = __(d.value, m.value), V = __(d.value, v.value);
    return f.value ? {
      ...I,
      transform: "translate(" + R + "px, " + V + "px)",
      ...t1(d.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: g.value,
      left: R + "px",
      top: V + "px"
    };
  });
  let D;
  function T() {
    h.value == null || d.value == null || fP(h.value, d.value, {
      middleware: i.value,
      placement: l.value,
      strategy: u.value
    }).then((I) => {
      m.value = I.x, v.value = I.y, g.value = I.strategy, w.value = I.placement, E.value = I.middlewareData, k.value = !0;
    });
  }
  function x() {
    typeof D == "function" && (D(), D = void 0);
  }
  function C() {
    if (x(), r === void 0) {
      T();
      return;
    }
    if (h.value != null && d.value != null) {
      D = r(h.value, d.value, T);
      return;
    }
  }
  function M() {
    s.value || (k.value = !1);
  }
  return ze([i, l, u], T, {
    flush: "sync"
  }), ze([h, d], C, {
    flush: "sync"
  }), ze(s, M, {
    flush: "sync"
  }), Mh() && Ch(x), {
    x: Ci(m),
    y: Ci(v),
    strategy: Ci(g),
    placement: Ci(w),
    middlewareData: Ci(E),
    isPositioned: Ci(k),
    floatingStyles: b,
    update: T
  };
}
function da(e, t) {
  const n = typeof e == "string" && !t ? `${e}Context` : t, r = Symbol(n);
  return [(s) => {
    const i = Tt(r, s);
    if (i || i === null)
      return i;
    throw new Error(
      `Injection \`${r.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (s) => (aa(r, s), s)];
}
function n1(e, t, n) {
  const r = n.originalEvent.target, s = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && r.addEventListener(e, t, { once: !0 }), r.dispatchEvent(s);
}
function pP(e, t) {
  var n;
  const r = Ah();
  return Gn(() => {
    r.value = e();
  }, {
    ...t,
    flush: (n = t == null ? void 0 : t.flush) != null ? n : "sync"
  }), HA(r);
}
function mP(e, t) {
  let n, r, s;
  const i = J(!0), l = () => {
    i.value = !0, s();
  };
  ze(e, l, { flush: "sync" });
  const u = typeof t == "function" ? t : t.get, f = typeof t == "function" ? void 0 : t.set, h = ny((d, m) => (r = d, s = m, {
    get() {
      return i.value && (n = u(), i.value = !1), r(), n;
    },
    set(v) {
      f == null || f(v);
    }
  }));
  return Object.isExtensible(h) && (h.trigger = l), h;
}
function r1(e) {
  return Mh() ? (Ch(e), !0) : !1;
}
function Pc(e) {
  let t = !1, n;
  const r = Q0(!0);
  return (...s) => (t || (n = r.run(() => e(...s)), t = !0), n);
}
function Js(e) {
  return typeof e == "function" ? e() : y(e);
}
const co = typeof window < "u" && typeof document < "u", vP = (e) => typeof e < "u", gP = Object.prototype.toString, _P = (e) => gP.call(e) === "[object Object]", yP = () => {
};
function bP(e, t = 1e4) {
  return ny((n, r) => {
    let s = Js(e), i;
    const l = () => setTimeout(() => {
      s = Js(e), r();
    }, Js(t));
    return r1(() => {
      clearTimeout(i);
    }), {
      get() {
        return n(), s;
      },
      set(u) {
        s = u, r(), clearTimeout(i), i = l();
      }
    };
  });
}
function ui(e) {
  var t;
  const n = Js(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const a1 = co ? window : void 0;
function wP(...e) {
  let t, n, r, s;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, r, s] = e, t = a1) : [t, n, r, s] = e, !t)
    return yP;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const i = [], l = () => {
    i.forEach((d) => d()), i.length = 0;
  }, u = (d, m, v, g) => (d.addEventListener(m, v, g), () => d.removeEventListener(m, v, g)), f = ze(
    () => [ui(t), Js(s)],
    ([d, m]) => {
      if (l(), !d)
        return;
      const v = _P(m) ? { ...m } : m;
      i.push(
        ...n.flatMap((g) => r.map((w) => u(d, g, w, v)))
      );
    },
    { immediate: !0, flush: "post" }
  ), h = () => {
    f(), l();
  };
  return r1(h), h;
}
function EP(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function OP(...e) {
  let t, n, r = {};
  e.length === 3 ? (t = e[0], n = e[1], r = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], r = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: s = a1,
    eventName: i = "keydown",
    passive: l = !1,
    dedupe: u = !1
  } = r, f = EP(t);
  return wP(s, i, (h) => {
    h.repeat && Js(u) || f(h) && n(h);
  }, l);
}
function DP() {
  const e = J(!1);
  return xr() && Vr(() => {
    e.value = !0;
  }), e;
}
function xP(e) {
  return JSON.parse(JSON.stringify(e));
}
function Zh(e, t, n, r = {}) {
  var s, i, l;
  const {
    clone: u = !1,
    passive: f = !1,
    eventName: h,
    deep: d = !1,
    defaultValue: m,
    shouldEmit: v
  } = r, g = xr(), w = n || (g == null ? void 0 : g.emit) || ((s = g == null ? void 0 : g.$emit) == null ? void 0 : s.bind(g)) || ((l = (i = g == null ? void 0 : g.proxy) == null ? void 0 : i.$emit) == null ? void 0 : l.bind(g == null ? void 0 : g.proxy));
  let E = h;
  t || (t = "modelValue"), E = E || `update:${t.toString()}`;
  const k = (T) => u ? typeof u == "function" ? u(T) : xP(T) : T, b = () => vP(e[t]) ? k(e[t]) : m, D = (T) => {
    v ? v(T) && w(E, T) : w(E, T);
  };
  if (f) {
    const T = b(), x = J(T);
    let C = !1;
    return ze(
      () => e[t],
      (M) => {
        C || (C = !0, x.value = k(M), rr(() => C = !1));
      }
    ), ze(
      x,
      (M) => {
        !C && (M !== e[t] || d) && D(M);
      },
      { deep: d }
    ), x;
  } else
    return Y({
      get() {
        return b();
      },
      set(T) {
        D(T);
      }
    });
}
function Xh(e) {
  return e ? e.flatMap((t) => t.type === Xe ? Xh(t.children) : [t]) : [];
}
function SP(e, t, n, r = {}) {
  if (!t)
    return null;
  const {
    arrowKeyOptions: s = "both",
    attributeName: i = "data-radix-vue-collection-item",
    itemsArray: l = [],
    loop: u = !0,
    dir: f = "ltr",
    preventScroll: h = !0,
    focus: d = !1
  } = r, [m, v, g, w, E, k] = [
    e.key === "ArrowRight",
    e.key === "ArrowLeft",
    e.key === "ArrowUp",
    e.key === "ArrowDown",
    e.key === "Home",
    e.key === "End"
  ], b = g || w, D = m || v;
  if (!E && !k && (!b && !D || s === "vertical" && D || s === "horizontal" && b))
    return null;
  const T = n ? Array.from(n.querySelectorAll(`[${i}]`)) : l;
  if (!T.length)
    return null;
  h && e.preventDefault();
  let x = null;
  return D || b ? x = s1(T, t, {
    goForward: b ? w : f === "ltr" ? m : v,
    loop: u
  }) : E ? x = T.at(0) || null : k && (x = T.at(-1) || null), d && (x == null || x.focus()), x;
}
function s1(e, t, { goForward: n, loop: r }, s = e.length) {
  if (--s === 0)
    return null;
  const i = e.indexOf(t), l = n ? i + 1 : i - 1;
  if (!r && (l < 0 || l >= e.length))
    return null;
  const u = (l + e.length) % e.length, f = e[u];
  return f ? f.hasAttribute("disabled") && f.getAttribute("disabled") !== "false" ? s1(
    e,
    f,
    { goForward: n, loop: r },
    s
  ) : f : null;
}
function bd(e) {
  return e !== null && typeof e == "object";
}
function th(e, t, n = ".", r) {
  if (!bd(t))
    return th(e, {}, n, r);
  const s = Object.assign({}, t);
  for (const i in e) {
    if (i === "__proto__" || i === "constructor")
      continue;
    const l = e[i];
    l != null && (r && r(s, i, l, n) || (Array.isArray(l) && Array.isArray(s[i]) ? s[i] = [...l, ...s[i]] : bd(l) && bd(s[i]) ? s[i] = th(
      l,
      s[i],
      (n ? `${n}.` : "") + i.toString(),
      r
    ) : s[i] = l));
  }
  return s;
}
function kP(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((n, r) => th(n, r, "", e), {})
  );
}
const TP = kP(), [i1, DQ] = da("ConfigProvider"), AP = Pc(() => J()), MP = Pc(() => J(0));
function o1(e) {
  const t = i1({
    scrollBody: J(!0)
  }), n = MP(), r = AP(), s = J(e), i = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = r.value ?? "", r.value = void 0;
  };
  return e && n.value++, ze(s, (l) => {
    var u;
    if (co && l) {
      r.value === void 0 && (r.value = document.body.style.overflow);
      const f = window.innerWidth - document.documentElement.clientWidth, h = { padding: f, margin: 0 }, d = (u = t.scrollBody) != null && u.value ? typeof t.scrollBody.value == "object" ? TP({
        padding: t.scrollBody.value.padding === !0 ? f : t.scrollBody.value.padding,
        margin: t.scrollBody.value.margin === !0 ? f : t.scrollBody.value.margin
      }, h) : h : { padding: 0, margin: 0 };
      f > 0 && (document.body.style.paddingRight = `${d.padding}px`, document.body.style.marginRight = `${d.margin}px`, document.body.style.setProperty("--scrollbar-width", `${f}px`), document.body.style.overflow = "hidden"), rr(() => {
        document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
      });
    }
  }, { immediate: !0 }), ty(() => {
    e && n.value--, n.value === 0 && i();
  }), s;
}
const CP = "data-radix-vue-collection-item";
function l1(e, t = CP) {
  const n = e ?? Symbol();
  return { createCollection: (r) => {
    const s = J([]);
    function i() {
      const l = ui(r);
      return l ? s.value = Array.from(
        l.querySelectorAll(`[${t}]:not([data-disabled=true])`)
      ) : s.value = [];
    }
    return VA(() => {
      s.value = [];
    }), Vr(i), jA(i), ze(() => r == null ? void 0 : r.value, i, { immediate: !0 }), aa(n, s), s;
  }, injectCollection: () => Tt(n, J([])) };
}
function PP(e) {
  const t = i1({
    dir: J("ltr")
  });
  return Y(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.dir) == null ? void 0 : n.value) || "ltr";
  });
}
function NP(e) {
  const t = xr(), n = t == null ? void 0 : t.type.emits, r = {};
  return n != null && n.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), n == null || n.forEach((s) => {
    r[GA(ry(s))] = (...i) => e(s, ...i);
  }), r;
}
let wd = 0;
function u1() {
  Gn((e) => {
    if (!co)
      return;
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? y_()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? y_()
    ), wd++, e(() => {
      wd === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((n) => n.remove()), wd--;
    });
  });
}
function y_() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
function $P(e) {
  return Y(() => {
    var t;
    return Js(e) ? !!((t = ui(e)) != null && t.closest("form")) : !0;
  });
}
function c1(e) {
  const t = xr(), n = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((r, s) => {
    const i = (t == null ? void 0 : t.type.props[s]).default;
    return i !== void 0 && (r[s] = i), r;
  }, {});
  return mP(() => ({ ...e }), () => {
    const r = {}, s = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(s).forEach((i) => {
      r[ry(i)] = s[i];
    }), Object.keys({ ...n, ...r }).reduce((i, l) => (e[l] !== void 0 && (i[l] = e[l]), i), {});
  });
}
function fo(e, t) {
  const n = c1(e), r = t ? NP(t) : {};
  return Y(() => ({
    ...n.value,
    ...r
  }));
}
function IP() {
  const e = xr();
  function t(n) {
    typeof n == "object" && (e.exposed = n, e.exposeProxy = n);
  }
  return t;
}
var LP = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Ni = /* @__PURE__ */ new WeakMap(), ku = /* @__PURE__ */ new WeakMap(), Tu = {}, Ed = 0, f1 = function(e) {
  return e && (e.host || f1(e.parentNode));
}, RP = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = f1(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, FP = function(e, t, n, r) {
  var s = RP(t, Array.isArray(e) ? e : [e]);
  Tu[n] || (Tu[n] = /* @__PURE__ */ new WeakMap());
  var i = Tu[n], l = [], u = /* @__PURE__ */ new Set(), f = new Set(s), h = function(m) {
    !m || u.has(m) || (u.add(m), h(m.parentNode));
  };
  s.forEach(h);
  var d = function(m) {
    !m || f.has(m) || Array.prototype.forEach.call(m.children, function(v) {
      if (u.has(v))
        d(v);
      else {
        var g = v.getAttribute(r), w = g !== null && g !== "false", E = (Ni.get(v) || 0) + 1, k = (i.get(v) || 0) + 1;
        Ni.set(v, E), i.set(v, k), l.push(v), E === 1 && w && ku.set(v, !0), k === 1 && v.setAttribute(n, "true"), w || v.setAttribute(r, "true");
      }
    });
  };
  return d(t), u.clear(), Ed++, function() {
    l.forEach(function(m) {
      var v = Ni.get(m) - 1, g = i.get(m) - 1;
      Ni.set(m, v), i.set(m, g), v || (ku.has(m) || m.removeAttribute(r), ku.delete(m)), g || m.removeAttribute(n);
    }), Ed--, Ed || (Ni = /* @__PURE__ */ new WeakMap(), Ni = /* @__PURE__ */ new WeakMap(), ku = /* @__PURE__ */ new WeakMap(), Tu = {});
  };
}, YP = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), s = t || LP(e);
  return s ? (r.push.apply(r, Array.from(s.querySelectorAll("[aria-live]"))), FP(r, s, n, "aria-hidden")) : function() {
    return null;
  };
};
function WP(e) {
  let t;
  ze(() => ui(e), (n) => {
    n ? t = YP(n) : t && t();
  }), Cs(() => {
    t && t();
  });
}
const UP = Pc(() => ({ count: J(0) }));
function BP(e) {
  const { count: t } = UP();
  return e || t.value++, e || `radix-${t.value}`;
}
function HP(e) {
  const t = J(), n = Y(() => {
    var s;
    return ((s = t.value) == null ? void 0 : s.width) ?? 0;
  }), r = Y(() => {
    var s;
    return ((s = t.value) == null ? void 0 : s.height) ?? 0;
  });
  return Vr(() => {
    const s = ui(e);
    if (s) {
      t.value = { width: s.offsetWidth, height: s.offsetHeight };
      const i = new ResizeObserver((l) => {
        if (!Array.isArray(l) || !l.length)
          return;
        const u = l[0];
        let f, h;
        if ("borderBoxSize" in u) {
          const d = u.borderBoxSize, m = Array.isArray(d) ? d[0] : d;
          f = m.inlineSize, h = m.blockSize;
        } else
          f = s.offsetWidth, h = s.offsetHeight;
        t.value = { width: f, height: h };
      });
      return i.observe(s, { box: "border-box" }), () => i.unobserve(s);
    } else
      t.value = void 0;
  }), {
    width: n,
    height: r
  };
}
function VP(e, t) {
  const n = J(e);
  function r(s) {
    return t[n.value][s] ?? n.value;
  }
  return {
    state: n,
    dispatch: (s) => {
      n.value = r(s);
    }
  };
}
function jP(e) {
  const t = bP("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (n) => {
      var r, s;
      t.value = t.value + n;
      const i = e.value, l = document.activeElement, u = ((s = (r = i.find((m) => m === l)) == null ? void 0 : r.textContent) == null ? void 0 : s.trim()) ?? "", f = i.map((m) => {
        var v;
        return ((v = m.textContent) == null ? void 0 : v.trim()) ?? "";
      }), h = zP(f, t.value, u), d = i.find(
        (m) => {
          var v;
          return ((v = m.textContent) == null ? void 0 : v.trim()) === h;
        }
      );
      d && d.focus();
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function GP(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function zP(e, t, n) {
  const r = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let i = GP(e, Math.max(s, 0));
  r.length === 1 && (i = i.filter((u) => u !== n));
  const l = i.find(
    (u) => u.toLowerCase().startsWith(r.toLowerCase())
  );
  return l !== n ? l : void 0;
}
const Jh = Le({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n }) {
    return () => {
      var r, s;
      if (!n.default)
        return null;
      const i = Xh(n.default()), [l, ...u] = i;
      if (Object.keys(t).length > 0) {
        (r = l.props) == null || delete r.ref;
        const f = nn(t, l.props ?? {});
        t.class && (s = l.props) != null && s.class && delete l.props.class;
        const h = BA(l, f);
        for (const d in f)
          d.startsWith("on") && (h.props || (h.props = {}), h.props[d] = f[d]);
        return i.length === 1 ? h : [h, ...u];
      }
      return i;
    };
  }
}), Ba = Le({
  name: "Primitive",
  inheritAttrs: !1,
  props: {
    asChild: {
      type: Boolean,
      default: !1
    },
    as: {
      type: [String, Object],
      default: "div"
    }
  },
  setup(e, { attrs: t, slots: n }) {
    return (e.asChild ? "template" : e.as) !== "template" ? () => Yr(e.as, t, { default: n.default }) : () => Yr(Jh, t, { default: n.default });
  }
});
function jr() {
  const e = J(), t = Y(() => {
    var n, r;
    return ["#text", "#comment"].includes((n = e.value) == null ? void 0 : n.$el.nodeName) ? (r = e.value) == null ? void 0 : r.$el.nextElementSibling : ui(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
function qP(e, t) {
  const n = J({}), r = J("none"), s = e.value ? "mounted" : "unmounted", { state: i, dispatch: l } = VP(s, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  ze(
    e,
    async (m, v) => {
      var g;
      const w = v !== m;
      if (await rr(), w) {
        const E = r.value, k = Au(t.value);
        m ? l("MOUNT") : k === "none" || ((g = n.value) == null ? void 0 : g.display) === "none" ? l("UNMOUNT") : l(v && E !== k ? "ANIMATION_OUT" : "UNMOUNT");
      }
    },
    { immediate: !0 }
  );
  const u = (m) => {
    const v = Au(t.value), g = v.includes(
      m.animationName
    );
    m.target === t.value && g && l("ANIMATION_END"), m.target === t.value && v === "none" && l("ANIMATION_END");
  }, f = (m) => {
    m.target === t.value && (r.value = Au(t.value));
  }, h = ze(
    t,
    (m, v) => {
      m ? (n.value = getComputedStyle(m), m.addEventListener("animationstart", f), m.addEventListener("animationcancel", u), m.addEventListener("animationend", u)) : (l("ANIMATION_END"), v == null || v.removeEventListener("animationstart", f), v == null || v.removeEventListener("animationcancel", u), v == null || v.removeEventListener("animationend", u));
    },
    { immediate: !0 }
  ), d = ze(i, () => {
    const m = Au(t.value);
    r.value = i.value === "mounted" ? m : "none";
  });
  return Cs(() => {
    h(), d();
  }), {
    isPresent: Y(
      () => ["mounted", "unmountSuspended"].includes(i.value)
    )
  };
}
function Au(e) {
  return e && getComputedStyle(e).animationName || "none";
}
const d1 = Le({
  name: "Presence",
  props: {
    present: {
      type: Boolean,
      required: !0
    },
    forceMount: {
      type: Boolean
    }
  },
  slots: {},
  setup(e, { slots: t, expose: n }) {
    var r;
    const { present: s, forceMount: i } = io(e), l = J(), { isPresent: u } = qP(s, l);
    n({ present: u });
    let f = t.default({ present: u });
    f = Xh(f || []);
    const h = xr();
    if (f && (f == null ? void 0 : f.length) > 1) {
      const d = (r = h == null ? void 0 : h.parent) != null && r.type.name ? `<${h.parent.type.name} />` : "component";
      throw new Error(
        [
          `Detected an invalid children for \`${d}\` for  \`Presence\` component.`,
          "",
          "Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.",
          "You can apply a few solutions:",
          [
            "Provide a single child element so that `presence` directive attach correctly.rv",
            "Ensure the first child is an actual element instead of a raw text node or comment node."
          ].map((m) => `  - ${m}`).join(`
`)
        ].join(`
`)
      );
    }
    return () => i.value || s.value || u.value ? Yr(t.default({ present: u })[0], {
      ref: (d) => {
        const m = ui(d);
        return typeof (m == null ? void 0 : m.hasAttribute) > "u" || (m != null && m.hasAttribute("data-radix-popper-content-wrapper") ? l.value = m.firstChild : l.value = m), m;
      }
    }) : null;
  }
}), KP = /* @__PURE__ */ Le({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = DP();
    return (n, r) => y(t) || n.forceMount ? (F(), tt(ay, {
      key: 0,
      to: n.to,
      disabled: n.disabled
    }, [
      yt(n.$slots, "default")
    ], 8, ["to", "disabled"])) : Te("", !0);
  }
}), ZP = "dismissableLayer.pointerDownOutside", XP = "dismissableLayer.focusOutside";
function h1(e, t) {
  const n = t.closest(
    "[data-dismissable-layer]"
  ), r = e.querySelector(
    "[data-dismissable-layer]"
  ), s = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(n && r === n || s.indexOf(r) < s.indexOf(n));
}
function JP(e, t) {
  var n;
  const r = ((n = t == null ? void 0 : t.value) == null ? void 0 : n.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), s = J(!1), i = J(() => {
  });
  return Gn((l) => {
    if (!co)
      return;
    const u = async (h) => {
      if (t != null && t.value) {
        if (h1(t.value, h.target)) {
          s.value = !1;
          return;
        }
        if (h.target && !s.value) {
          let d = function() {
            n1(
              ZP,
              e,
              m
            );
          };
          const m = { originalEvent: h };
          h.pointerType === "touch" ? (r.removeEventListener("click", i.value), i.value = d, r.addEventListener("click", i.value, {
            once: !0
          })) : d();
        } else
          r.removeEventListener("click", i.value);
        s.value = !1;
      }
    }, f = window.setTimeout(() => {
      r.addEventListener("pointerdown", u);
    }, 0);
    l(() => {
      window.clearTimeout(f), r.removeEventListener("pointerdown", u), r.removeEventListener("click", i.value);
    });
  }), {
    onPointerDownCapture: () => s.value = !0
  };
}
function QP(e, t) {
  var n;
  const r = ((n = t == null ? void 0 : t.value) == null ? void 0 : n.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), s = J(!1);
  return Gn((i) => {
    if (!co)
      return;
    const l = async (u) => {
      t != null && t.value && (await rr(), !h1(t.value, u.target) && u.target && !s.value && n1(
        XP,
        e,
        { originalEvent: u }
      ));
    };
    r.addEventListener("focusin", l), i(() => r.removeEventListener("focusin", l));
  }), {
    onFocusCapture: () => s.value = !0,
    onBlurCapture: () => s.value = !1
  };
}
const Aa = El({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), p1 = /* @__PURE__ */ Le({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, r = t, { primitiveElement: s, currentElement: i } = jr(), l = Y(
      () => {
        var w;
        return ((w = i.value) == null ? void 0 : w.ownerDocument) ?? globalThis.document;
      }
    ), u = Y(() => Aa.layersRoot), f = Y(() => i.value ? Array.from(u.value).indexOf(i.value) : -1), h = Y(() => Aa.layersWithOutsidePointerEventsDisabled.size > 0), d = Y(() => {
      const w = Array.from(u.value), [E] = [...Aa.layersWithOutsidePointerEventsDisabled].slice(-1), k = w.indexOf(E);
      return f.value >= k;
    }), m = JP(async (w) => {
      const E = [...Aa.branches].some(
        (k) => k.contains(w.target)
      );
      !d.value || E || (r("pointerDownOutside", w), r("interactOutside", w), await rr(), w.defaultPrevented || r("dismiss"));
    }, i), v = QP((w) => {
      [...Aa.branches].some(
        (E) => E.contains(w.target)
      ) || (r("focusOutside", w), r("interactOutside", w), w.defaultPrevented || r("dismiss"));
    }, i);
    OP("Escape", (w) => {
      f.value === u.value.size - 1 && (r("escapeKeyDown", w), w.defaultPrevented || r("dismiss"));
    });
    let g;
    return Gn((w) => {
      i.value && (n.disableOutsidePointerEvents && (Aa.layersWithOutsidePointerEventsDisabled.size === 0 && (g = l.value.body.style.pointerEvents, l.value.body.style.pointerEvents = "none"), Aa.layersWithOutsidePointerEventsDisabled.add(i.value)), u.value.add(i.value), w(() => {
        n.disableOutsidePointerEvents && Aa.layersWithOutsidePointerEventsDisabled.size === 1 && (l.value.body.style.pointerEvents = g);
      }));
    }), Gn((w) => {
      w(() => {
        i.value && (u.value.delete(i.value), Aa.layersWithOutsidePointerEventsDisabled.delete(i.value));
      });
    }), (w, E) => (F(), tt(y(Ba), {
      ref_key: "primitiveElement",
      ref: s,
      "as-child": w.asChild,
      as: w.as,
      "data-dismissable-layer": "",
      style: Es({
        pointerEvents: h.value ? d.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: y(v).onFocusCapture,
      onBlurCapture: y(v).onBlurCapture,
      onPointerdownCapture: y(m).onPointerDownCapture
    }, {
      default: We(() => [
        yt(w.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
}), Od = "focusScope.autoFocusOnMount", Dd = "focusScope.autoFocusOnUnmount", b_ = { bubbles: !1, cancelable: !0 };
function eN(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (gs(r, { select: t }), document.activeElement !== n)
      return !0;
}
function tN(e) {
  const t = m1(e), n = w_(t, e), r = w_(t.reverse(), e);
  return [n, r];
}
function m1(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const s = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || s ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}
function w_(e, t) {
  for (const n of e)
    if (!nN(n, { upTo: t }))
      return n;
}
function nN(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (t !== void 0 && e === t)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}
function rN(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function gs(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && rN(e) && t && e.select();
  }
}
const aN = Pc(() => J([]));
function sN() {
  const e = aN();
  return {
    add(t) {
      const n = e.value[0];
      t !== n && (n == null || n.pause()), e.value = E_(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var n;
      e.value = E_(e.value, t), (n = e.value[0]) == null || n.resume();
    }
  };
}
function E_(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function iN(e) {
  return e.filter((t) => t.tagName !== "A");
}
const v1 = /* @__PURE__ */ Le({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, r = t, { primitiveElement: s, currentElement: i } = jr(), l = J(null), u = sN(), f = El({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    Gn((d) => {
      if (!co)
        return;
      const m = i.value;
      if (!n.trapped)
        return;
      function v(k) {
        if (f.paused || !m)
          return;
        const b = k.target;
        m.contains(b) ? l.value = b : gs(l.value, { select: !0 });
      }
      function g(k) {
        if (f.paused || !m)
          return;
        const b = k.relatedTarget;
        b !== null && (m.contains(b) || gs(l.value, { select: !0 }));
      }
      function w(k) {
        m.contains(l.value) || gs(m);
      }
      document.addEventListener("focusin", v), document.addEventListener("focusout", g);
      const E = new MutationObserver(w);
      m && E.observe(m, { childList: !0, subtree: !0 }), d(() => {
        document.removeEventListener("focusin", v), document.removeEventListener("focusout", g), E.disconnect();
      });
    }), Gn(async (d) => {
      const m = i.value;
      if (await rr(), !m)
        return;
      u.add(f);
      const v = document.activeElement;
      if (!m.contains(v)) {
        const g = new CustomEvent(Od, b_);
        m.addEventListener(
          Od,
          (w) => r("mountAutoFocus", w)
        ), m.dispatchEvent(g), g.defaultPrevented || (eN(iN(m1(m)), {
          select: !0
        }), document.activeElement === v && gs(m));
      }
      d(() => {
        m.removeEventListener(
          Od,
          (E) => r("mountAutoFocus", E)
        );
        const g = new CustomEvent(Dd, b_), w = (E) => {
          r("unmountAutoFocus", E);
        };
        m.addEventListener(Dd, w), m.dispatchEvent(g), setTimeout(() => {
          g.defaultPrevented || gs(v ?? document.body, { select: !0 }), m.removeEventListener(Dd, w), u.remove(f);
        }, 0);
      });
    });
    function h(d) {
      if (!n.loop && !n.trapped || f.paused)
        return;
      const m = d.key === "Tab" && !d.altKey && !d.ctrlKey && !d.metaKey, v = document.activeElement;
      if (m && v) {
        const g = d.currentTarget, [w, E] = tN(g);
        w && E ? !d.shiftKey && v === E ? (d.preventDefault(), n.loop && gs(w, { select: !0 })) : d.shiftKey && v === w && (d.preventDefault(), n.loop && gs(E, { select: !0 })) : v === g && d.preventDefault();
      }
    }
    return (d, m) => (F(), tt(y(Ba), {
      ref_key: "primitiveElement",
      ref: s,
      tabindex: "-1",
      "as-child": n.asChild,
      as: n.as,
      onKeydown: h
    }, {
      default: We(() => [
        yt(d.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), oN = ["ArrowDown", "PageUp", "Home"], g1 = ["ArrowUp", "PageDown", "End"], lN = [...oN, ...g1];
function uN(e) {
  return e ? "open" : "closed";
}
function cN(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function fN(e, t) {
  const { x: n, y: r } = e;
  let s = !1;
  for (let i = 0, l = t.length - 1; i < t.length; l = i++) {
    const u = t[i].x, f = t[i].y, h = t[l].x, d = t[l].y;
    f > r != d > r && n < (h - u) * (r - f) / (d - f) + u && (s = !s);
  }
  return s;
}
function dN(e, t) {
  if (!t)
    return !1;
  const n = { x: e.clientX, y: e.clientY };
  return fN(n, t);
}
function hN(e) {
  return e.pointerType === "mouse";
}
function Qh(e) {
  return e === "indeterminate";
}
function _1(e) {
  return Qh(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const pN = ["value", "checked", "name", "disabled", "required"], [mN, vN] = da("CheckboxRoot"), gN = /* @__PURE__ */ Le({
  inheritAttrs: !1,
  __name: "CheckboxRoot",
  props: {
    defaultChecked: { type: Boolean },
    checked: { type: [Boolean, String], default: void 0 },
    disabled: { type: Boolean },
    required: { type: Boolean },
    name: {},
    value: { default: "on" },
    id: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  emits: ["update:checked"],
  setup(e, { emit: t }) {
    const n = e, r = t, { disabled: s } = io(n), i = Zh(n, "checked", r, {
      defaultValue: n.defaultChecked,
      passive: n.checked === void 0
    }), { primitiveElement: l, currentElement: u } = jr(), f = $P(u), h = Y(() => {
      var d;
      return n.id && u.value ? (d = document.querySelector(`[for="${n.id}"]`)) == null ? void 0 : d.innerText : void 0;
    });
    return vN({
      disabled: s,
      state: i
    }), (d, m) => (F(), z(Xe, null, [
      Pe(y(Ba), nn(d.$attrs, {
        id: d.id,
        ref_key: "primitiveElement",
        ref: l,
        role: "checkbox",
        "as-child": n.asChild,
        as: d.as,
        type: d.as === "button" ? "button" : void 0,
        "aria-checked": y(Qh)(y(i)) ? "mixed" : y(i),
        "aria-required": !1,
        "aria-label": d.$attrs["aria-label"] || h.value,
        "data-state": y(_1)(y(i)),
        "data-disabled": y(s) ? "" : void 0,
        disabled: y(s),
        onKeydown: Fd(xs(() => {
        }, ["prevent"]), ["enter"]),
        onClick: m[0] || (m[0] = (v) => i.value = !y(i))
      }), {
        default: We(() => [
          yt(d.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "as-child", "as", "type", "aria-checked", "aria-label", "data-state", "data-disabled", "disabled", "onKeydown"]),
      y(f) ? (F(), z("input", {
        key: 0,
        type: "checkbox",
        tabindex: "-1",
        "aria-hidden": "",
        value: d.value,
        checked: !!y(i),
        name: n.name,
        disabled: n.disabled,
        required: n.required,
        style: Es({
          transform: "translateX(-100%)",
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        })
      }, null, 12, pN)) : Te("", !0)
    ], 64));
  }
}), _N = /* @__PURE__ */ Le({
  __name: "CheckboxIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = mN();
    return (n, r) => (F(), tt(y(d1), {
      present: n.forceMount || y(Qh)(y(t).state.value) || y(t).state.value === !0
    }, {
      default: We(() => [
        Pe(y(Ba), nn({
          "data-state": y(_1)(y(t).state.value),
          "data-disabled": y(t).disabled.value ? "" : void 0,
          style: { pointerEvents: "none" },
          "as-child": n.asChild,
          as: n.as
        }, n.$attrs), {
          default: We(() => [
            yt(n.$slots, "default")
          ]),
          _: 3
        }, 16, ["data-state", "data-disabled", "as-child", "as"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), [y1, yN] = da("PopperRoot"), bN = /* @__PURE__ */ Le({
  __name: "PopperRoot",
  setup(e) {
    const t = J();
    return yN({
      anchor: t,
      onAnchorChange: (n) => t.value = n
    }), (n, r) => yt(n.$slots, "default");
  }
}), wN = /* @__PURE__ */ Le({
  __name: "PopperAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { primitiveElement: n, currentElement: r } = jr(), s = y1();
    return ze(r, () => {
      s.onAnchorChange(t.element ?? r.value);
    }), (i, l) => (F(), tt(y(Ba), {
      ref_key: "primitiveElement",
      ref: n,
      as: i.as,
      "as-child": i.asChild
    }, {
      default: We(() => [
        yt(i.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function EN(e) {
  return e !== null;
}
function ON(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var n, r, s;
      const { placement: i, rects: l, middlewareData: u } = t, f = ((n = u.arrow) == null ? void 0 : n.centerOffset) !== 0, h = f ? 0 : e.arrowWidth, d = f ? 0 : e.arrowHeight, [m, v] = nh(i), g = { start: "0%", center: "50%", end: "100%" }[v], w = (((r = u.arrow) == null ? void 0 : r.x) ?? 0) + h / 2, E = (((s = u.arrow) == null ? void 0 : s.y) ?? 0) + d / 2;
      let k = "", b = "";
      return m === "bottom" ? (k = f ? g : `${w}px`, b = `${-d}px`) : m === "top" ? (k = f ? g : `${w}px`, b = `${l.floating.height + d}px`) : m === "right" ? (k = `${-d}px`, b = f ? g : `${E}px`) : m === "left" && (k = `${l.floating.width + d}px`, b = f ? g : `${E}px`), { data: { x: k, y: b } };
    }
  };
}
function nh(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
const b1 = {
  side: "bottom",
  sideOffset: 0,
  align: "center",
  alignOffset: 0,
  arrowPadding: 0,
  avoidCollisions: !0,
  collisionBoundary: () => [],
  collisionPadding: 0,
  sticky: "partial",
  hideWhenDetached: !1,
  updatePositionStrategy: "optimized",
  prioritizePosition: !1
}, [xQ, DN] = da("PopperContent"), w1 = /* @__PURE__ */ Le({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: ey({
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    onPlaced: { type: Function },
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  }, {
    ...b1
  }),
  setup(e, { expose: t }) {
    const n = e, r = y1(), s = IP(), { primitiveElement: i, currentElement: l } = jr(), u = J(), f = J(), { width: h, height: d } = HP(f), m = Y(
      () => n.side + (n.align !== "center" ? `-${n.align}` : "")
    ), v = Y(() => typeof n.collisionPadding == "number" ? n.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...n.collisionPadding }), g = Y(() => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]), w = Y(() => ({
      padding: v.value,
      boundary: g.value.filter(EN),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: g.value.length > 0
    })), E = pP(() => [
      H2({
        mainAxis: n.sideOffset + d.value,
        alignmentAxis: n.alignOffset
      }),
      n.avoidCollisions && V2({
        mainAxis: !0,
        crossAxis: !!n.prioritizePosition,
        limiter: n.sticky === "partial" ? j2() : void 0,
        ...w.value
      }),
      !n.prioritizePosition && n.avoidCollisions && W2({
        ...w.value
      }),
      G2({
        ...w.value,
        apply: ({ elements: $, rects: q, availableWidth: W, availableHeight: se }) => {
          const { width: me, height: ce } = q.reference, ye = $.floating.style;
          Object.assign($.floating.style, {
            maxWidth: `${W}px`,
            maxHeight: `${se}px`
          }), ye.setProperty(
            "--radix-popper-available-width",
            `${W}px`
          ), ye.setProperty(
            "--radix-popper-available-height",
            `${se}px`
          ), ye.setProperty(
            "--radix-popper-anchor-width",
            `${me}px`
          ), ye.setProperty(
            "--radix-popper-anchor-height",
            `${ce}px`
          );
        }
      }),
      f.value && dP({ element: f.value, padding: n.arrowPadding }),
      ON({
        arrowWidth: h.value,
        arrowHeight: d.value
      }),
      n.hideWhenDetached && U2({ strategy: "referenceHidden", ...w.value })
    ]), { floatingStyles: k, placement: b, isPositioned: D, middlewareData: T } = hP(
      r.anchor,
      u,
      {
        strategy: "fixed",
        placement: m,
        whileElementsMounted: (...$) => cP(...$, {
          animationFrame: n.updatePositionStrategy === "always"
        }),
        middleware: E
      }
    ), x = Y(
      () => nh(b.value)[0]
    ), C = Y(
      () => nh(b.value)[1]
    );
    Gn(() => {
      var $;
      D.value && (($ = n.onPlaced) == null || $.call(n));
    });
    const M = Y(
      () => {
        var $;
        return (($ = T.value.arrow) == null ? void 0 : $.centerOffset) !== 0;
      }
    ), I = J("");
    Gn(() => {
      l.value && (I.value = window.getComputedStyle(l.value).zIndex);
    });
    const R = Y(() => {
      var $;
      return (($ = T.value.arrow) == null ? void 0 : $.x) ?? 0;
    }), V = Y(() => {
      var $;
      return (($ = T.value.arrow) == null ? void 0 : $.y) ?? 0;
    });
    return DN({
      placedSide: x,
      onArrowChange: ($) => f.value = $,
      arrowX: R,
      arrowY: V,
      shouldHideArrow: M
    }), t({
      $el: l
    }), ($, q) => {
      var W, se, me;
      return F(), z("div", {
        ref_key: "floatingRef",
        ref: u,
        "data-radix-popper-content-wrapper": "",
        style: Es({
          ...y(k),
          transform: y(D) ? y(k).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: I.value,
          "--radix-popper-transform-origin": [
            (W = y(T).transformOrigin) == null ? void 0 : W.x,
            (se = y(T).transformOrigin) == null ? void 0 : se.y
          ].join(" ")
        })
      }, [
        Pe(y(Ba), nn({
          ref: (ce) => {
            y(s)(ce), i.value = ce;
          }
        }, $.$attrs, {
          "as-child": n.asChild,
          as: $.as,
          "data-side": x.value,
          "data-align": C.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: y(D) ? void 0 : "none",
            // hide the content if using the hide middleware and should be hidden
            opacity: (me = y(T).hide) != null && me.referenceHidden ? 0 : void 0
          }
        }), {
          default: We(() => [
            yt($.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
}), [E1, SQ] = da("CollectionProvider");
Le({
  name: "CollectionSlot",
  setup(e, { slots: t }) {
    const n = E1(), { primitiveElement: r, currentElement: s } = jr();
    return ze(s, () => {
      n.collectionRef.value = s.value;
    }), () => Yr(Jh, { ref: r }, t);
  }
});
Le({
  name: "CollectionItem",
  setup(e, { slots: t, attrs: n }) {
    const r = E1(), { primitiveElement: s, currentElement: i } = jr(), l = xr();
    return Gn((u) => {
      var f;
      if (i.value) {
        const h = Tg(i.value);
        r.itemMap.value.set(h, { ref: i.value, ...Tg(((f = l == null ? void 0 : l.parent) == null ? void 0 : f.props) ?? {}) }), u(() => r.itemMap.value.delete(h));
      }
    }), () => Yr(Jh, { ...n, [r.attrName]: "", ref: s }, t);
  }
});
const [xN, kQ] = da(["MenuRoot", "MenuSub"], "MenuContext"), [SN, TQ] = da("MenuRoot"), kN = "rovingFocusGroup.onEntryFocus", TN = { bubbles: !1, cancelable: !0 };
function AN(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
const [AQ, MN] = da("RovingFocusGroup"), CN = /* @__PURE__ */ Le({
  __name: "RovingFocusGroup",
  props: {
    orientation: { default: void 0 },
    dir: {},
    loop: { type: Boolean, default: !1 },
    currentTabStopId: {},
    defaultCurrentTabStopId: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["entryFocus", "update:currentTabStopId"],
  setup(e, { emit: t }) {
    const n = e, r = t, { loop: s, orientation: i, dir: l } = io(n), u = PP(l), f = Zh(n, "currentTabStopId", r, {
      defaultValue: n.defaultCurrentTabStopId,
      passive: n.currentTabStopId === void 0
    }), h = J(!1), d = J(!1), m = J(0), { primitiveElement: v, currentElement: g } = jr(), { createCollection: w } = l1("rovingFocus"), E = w(g);
    function k(b) {
      const D = !d.value;
      if (b.currentTarget && b.target === b.currentTarget && D && !h.value) {
        const T = new CustomEvent(kN, TN);
        if (b.currentTarget.dispatchEvent(T), r("entryFocus", T), !T.defaultPrevented) {
          const x = E.value, C = x.find((R) => R.getAttribute("data-active") === "true"), M = x.find(
            (R) => R.id === f.value
          ), I = [C, M, ...x].filter(
            Boolean
          );
          AN(I);
        }
      }
      d.value = !1;
    }
    return MN({
      loop: s,
      dir: u,
      orientation: i,
      currentTabStopId: f,
      onItemFocus: (b) => {
        f.value = b;
      },
      onItemShiftTab: () => {
        h.value = !0;
      },
      onFocusableItemAdd: () => {
        m.value++;
      },
      onFocusableItemRemove: () => {
        m.value--;
      }
    }), (b, D) => (F(), tt(y(Ba), {
      ref_key: "primitiveElement",
      ref: v,
      tabindex: h.value || m.value === 0 ? -1 : 0,
      "data-orientation": y(i),
      as: b.as,
      "as-child": b.asChild,
      dir: y(u),
      style: { outline: "none" },
      onMousedown: D[0] || (D[0] = (T) => d.value = !0),
      onFocus: k,
      onBlur: D[1] || (D[1] = (T) => h.value = !1)
    }, {
      default: We(() => [
        yt(b.$slots, "default")
      ]),
      _: 3
    }, 8, ["tabindex", "data-orientation", "as", "as-child", "dir"]));
  }
}), [MQ, PN] = da("MenuContent");
ey({
  loop: { type: Boolean },
  disableOutsidePointerEvents: { type: Boolean },
  disableOutsideScroll: { type: Boolean },
  trapFocus: { type: Boolean },
  side: {},
  sideOffset: {},
  align: {},
  alignOffset: {},
  avoidCollisions: { type: Boolean },
  collisionBoundary: {},
  collisionPadding: {},
  arrowPadding: {},
  sticky: {},
  hideWhenDetached: { type: Boolean },
  updatePositionStrategy: {},
  prioritizePosition: { type: Boolean },
  asChild: { type: Boolean },
  as: {}
}, {
  ...b1
});
const [Sl, NN] = da("PopoverRoot"), $N = /* @__PURE__ */ Le({
  __name: "PopoverRoot",
  props: {
    defaultOpen: { type: Boolean, default: !1 },
    open: { type: Boolean, default: void 0 },
    modal: { type: Boolean, default: !1 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, r = t, { modal: s } = io(n), i = Zh(n, "open", r, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), l = J(), u = J(!1);
    return NN({
      contentId: BP(),
      modal: s,
      open: i,
      onOpenChange: (f) => {
        i.value = f;
      },
      onOpenToggle: () => {
        i.value = !i.value;
      },
      triggerElement: l,
      hasCustomAnchor: u
    }), (f, h) => (F(), tt(y(bN), null, {
      default: We(() => [
        yt(f.$slots, "default")
      ]),
      _: 3
    }));
  }
}), IN = /* @__PURE__ */ Le({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e, { expose: t }) {
    const n = e, r = Sl(), { primitiveElement: s, currentElement: i } = jr();
    return Vr(() => {
      r.triggerElement.value = i.value;
    }), t({ $el: i }), (l, u) => (F(), tt(xc(y(r).hasCustomAnchor.value ? y(Ba) : y(wN)), { "as-child": "" }, {
      default: We(() => [
        Pe(y(Ba), {
          ref_key: "primitiveElement",
          ref: s,
          type: l.as === "button" ? "button" : void 0,
          "aria-haspopup": "dialog",
          "aria-expanded": y(r).open.value,
          "aria-controls": y(r).contentId,
          "data-state": y(r).open.value ? "open" : "closed",
          as: l.as,
          "as-child": n.asChild,
          onClick: y(r).onOpenToggle
        }, {
          default: We(() => [
            yt(l.$slots, "default")
          ]),
          _: 3
        }, 8, ["type", "aria-expanded", "aria-controls", "data-state", "as", "as-child", "onClick"])
      ]),
      _: 3
    }));
  }
}), LN = /* @__PURE__ */ Le({
  __name: "PopoverPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, r) => (F(), tt(y(KP), Ki(Ph(t)), {
      default: We(() => [
        yt(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), O1 = /* @__PURE__ */ Le({
  __name: "PopoverContentImpl",
  props: {
    trapFocus: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    onPlaced: { type: Function },
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, r = t, s = c1(n), i = Sl();
    return u1(), (l, u) => (F(), tt(y(v1), {
      "as-child": "",
      loop: "",
      trapped: l.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (f) => r("openAutoFocus", f)),
      onUnmountAutoFocus: u[6] || (u[6] = (f) => r("closeAutoFocus", f))
    }, {
      default: We(() => [
        Pe(y(p1), {
          "as-child": "",
          "disable-outside-pointer-events": l.disableOutsidePointerEvents,
          onPointerDownOutside: u[0] || (u[0] = (f) => r("pointerDownOutside", f)),
          onInteractOutside: u[1] || (u[1] = (f) => r("interactOutside", f)),
          onEscapeKeyDown: u[2] || (u[2] = (f) => r("escapeKeyDown", f)),
          onFocusOutside: u[3] || (u[3] = (f) => r("focusOutside", f)),
          onDismiss: u[4] || (u[4] = (f) => y(i).onOpenChange(!1))
        }, {
          default: We(() => [
            Pe(y(w1), nn(y(s), {
              id: y(i).contentId,
              "data-state": y(i).open.value ? "open" : "closed",
              role: "dialog",
              style: {
                "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
              }
            }), {
              default: We(() => [
                yt(l.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "data-state", "style"])
          ]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
}), RN = /* @__PURE__ */ Le({
  __name: "PopoverContentModal",
  props: {
    trapFocus: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    onPlaced: { type: Function },
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, r = t, s = Sl(), i = J(!1);
    o1(!0);
    const l = fo(n, r), { primitiveElement: u, currentElement: f } = jr();
    return WP(f), (h, d) => (F(), tt(O1, nn({
      ref_key: "primitiveElement",
      ref: u
    }, y(l), {
      "trap-focus": y(s).open.value,
      "disable-outside-pointer-events": "",
      onCloseAutoFocus: d[0] || (d[0] = xs(
        (m) => {
          var v;
          r("closeAutoFocus", m), i.value || (v = y(s).triggerElement.value) == null || v.focus();
        },
        ["prevent"]
      )),
      onPointerDownOutside: d[1] || (d[1] = (m) => {
        r("pointerDownOutside", m);
        const v = m.detail.originalEvent, g = v.button === 0 && v.ctrlKey === !0, w = v.button === 2 || g;
        i.value = w;
      }),
      onFocusOutside: d[2] || (d[2] = xs(() => {
      }, ["prevent"]))
    }), {
      default: We(() => [
        yt(h.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), FN = /* @__PURE__ */ Le({
  __name: "PopoverContentNonModal",
  props: {
    trapFocus: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    onPlaced: { type: Function },
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, r = t, s = Sl(), i = J(!1), l = J(!1), u = fo(n, r);
    return (f, h) => (F(), tt(O1, nn(y(u), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: h[0] || (h[0] = (d) => {
        var m;
        r("closeAutoFocus", d), d.defaultPrevented || (i.value || (m = y(s).triggerElement.value) == null || m.focus(), d.preventDefault()), i.value = !1, l.value = !1;
      }),
      onInteractOutside: h[1] || (h[1] = async (d) => {
        var m;
        r("interactOutside", d), d.defaultPrevented || (i.value = !0, d.detail.originalEvent.type === "pointerdown" && (l.value = !0));
        const v = d.target;
        (m = y(s).triggerElement.value) != null && m.contains(v) && d.preventDefault(), d.detail.originalEvent.type === "focusin" && l.value && d.preventDefault();
      })
    }), {
      default: We(() => [
        yt(f.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), YN = /* @__PURE__ */ Le({
  __name: "PopoverContent",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    onPlaced: { type: Function },
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, r = t, s = Sl(), i = fo(n, r);
    return (l, u) => (F(), tt(y(d1), {
      present: l.forceMount || y(s).open.value
    }, {
      default: We(() => [
        y(s).modal.value ? (F(), tt(RN, Ki(nn({ key: 0 }, y(i))), {
          default: We(() => [
            yt(l.$slots, "default")
          ]),
          _: 3
        }, 16)) : (F(), tt(FN, Ki(nn({ key: 1 }, y(i))), {
          default: We(() => [
            yt(l.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), WN = /* @__PURE__ */ Le({
  __name: "Popover",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const r = fo(e, t);
    return (s, i) => (F(), tt(y($N), Ki(Ph(y(r))), {
      default: We(() => [
        yt(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), UN = /* @__PURE__ */ Le({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, r) => (F(), tt(y(IN), nn(t, { class: "" }), {
      default: We(() => [
        yt(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function D1(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = D1(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function BN() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = D1(e)) && (r && (r += " "), r += t);
  return r;
}
const ep = "-";
function HN(e) {
  const t = jN(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  function s(l) {
    const u = l.split(ep);
    return u[0] === "" && u.length !== 1 && u.shift(), x1(u, t) || VN(l);
  }
  function i(l, u) {
    const f = n[l] || [];
    return u && r[l] ? [...f, ...r[l]] : f;
  }
  return {
    getClassGroupId: s,
    getConflictingClassGroupIds: i
  };
}
function x1(e, t) {
  var l;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), s = r ? x1(e.slice(1), r) : void 0;
  if (s)
    return s;
  if (t.validators.length === 0)
    return;
  const i = e.join(ep);
  return (l = t.validators.find(({
    validator: u
  }) => u(i))) == null ? void 0 : l.classGroupId;
}
const O_ = /^\[(.+)\]$/;
function VN(e) {
  if (O_.test(e)) {
    const t = O_.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function jN(e) {
  const {
    theme: t,
    prefix: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return zN(Object.entries(e.classGroups), n).forEach(([i, l]) => {
    rh(l, r, i, t);
  }), r;
}
function rh(e, t, n, r) {
  e.forEach((s) => {
    if (typeof s == "string") {
      const i = s === "" ? t : D_(t, s);
      i.classGroupId = n;
      return;
    }
    if (typeof s == "function") {
      if (GN(s)) {
        rh(s(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: s,
        classGroupId: n
      });
      return;
    }
    Object.entries(s).forEach(([i, l]) => {
      rh(l, D_(t, i), n, r);
    });
  });
}
function D_(e, t) {
  let n = e;
  return t.split(ep).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}
function GN(e) {
  return e.isThemeGetter;
}
function zN(e, t) {
  return t ? e.map(([n, r]) => {
    const s = r.map((i) => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([l, u]) => [t + l, u])) : i);
    return [n, s];
  }) : e;
}
function qN(e) {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  function s(i, l) {
    n.set(i, l), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  }
  return {
    get(i) {
      let l = n.get(i);
      if (l !== void 0)
        return l;
      if ((l = r.get(i)) !== void 0)
        return s(i, l), l;
    },
    set(i, l) {
      n.has(i) ? n.set(i, l) : s(i, l);
    }
  };
}
const S1 = "!";
function KN(e) {
  const t = e.separator, n = t.length === 1, r = t[0], s = t.length;
  return function(l) {
    const u = [];
    let f = 0, h = 0, d;
    for (let E = 0; E < l.length; E++) {
      let k = l[E];
      if (f === 0) {
        if (k === r && (n || l.slice(E, E + s) === t)) {
          u.push(l.slice(h, E)), h = E + s;
          continue;
        }
        if (k === "/") {
          d = E;
          continue;
        }
      }
      k === "[" ? f++ : k === "]" && f--;
    }
    const m = u.length === 0 ? l : l.substring(h), v = m.startsWith(S1), g = v ? m.substring(1) : m, w = d && d > h ? d - h : void 0;
    return {
      modifiers: u,
      hasImportantModifier: v,
      baseClassName: g,
      maybePostfixModifierPosition: w
    };
  };
}
function ZN(e) {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}
function XN(e) {
  return {
    cache: qN(e.cacheSize),
    splitModifiers: KN(e),
    ...HN(e)
  };
}
const JN = /\s+/;
function QN(e, t) {
  const {
    splitModifiers: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: s
  } = t, i = /* @__PURE__ */ new Set();
  return e.trim().split(JN).map((l) => {
    const {
      modifiers: u,
      hasImportantModifier: f,
      baseClassName: h,
      maybePostfixModifierPosition: d
    } = n(l);
    let m = r(d ? h.substring(0, d) : h), v = !!d;
    if (!m) {
      if (!d)
        return {
          isTailwindClass: !1,
          originalClassName: l
        };
      if (m = r(h), !m)
        return {
          isTailwindClass: !1,
          originalClassName: l
        };
      v = !1;
    }
    const g = ZN(u).join(":");
    return {
      isTailwindClass: !0,
      modifierId: f ? g + S1 : g,
      classGroupId: m,
      originalClassName: l,
      hasPostfixModifier: v
    };
  }).reverse().filter((l) => {
    if (!l.isTailwindClass)
      return !0;
    const {
      modifierId: u,
      classGroupId: f,
      hasPostfixModifier: h
    } = l, d = u + f;
    return i.has(d) ? !1 : (i.add(d), s(f, h).forEach((m) => i.add(u + m)), !0);
  }).reverse().map((l) => l.originalClassName).join(" ");
}
function e$() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = k1(t)) && (r && (r += " "), r += n);
  return r;
}
function k1(e) {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = k1(e[r])) && (n && (n += " "), n += t);
  return n;
}
function t$(e, ...t) {
  let n, r, s, i = l;
  function l(f) {
    const h = t.reduce((d, m) => m(d), e());
    return n = XN(h), r = n.cache.get, s = n.cache.set, i = u, u(f);
  }
  function u(f) {
    const h = r(f);
    if (h)
      return h;
    const d = QN(f, n);
    return s(f, d), d;
  }
  return function() {
    return i(e$.apply(null, arguments));
  };
}
function Yt(e) {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}
const T1 = /^\[(?:([a-z-]+):)?(.+)\]$/i, n$ = /^\d+\/\d+$/, r$ = /* @__PURE__ */ new Set(["px", "full", "screen"]), a$ = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, s$ = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, i$ = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, o$ = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function Lr(e) {
  return Ks(e) || r$.has(e) || n$.test(e);
}
function hs(e) {
  return ho(e, "length", m$);
}
function Ks(e) {
  return !!e && !Number.isNaN(Number(e));
}
function Mu(e) {
  return ho(e, "number", Ks);
}
function Ho(e) {
  return !!e && Number.isInteger(Number(e));
}
function l$(e) {
  return e.endsWith("%") && Ks(e.slice(0, -1));
}
function at(e) {
  return T1.test(e);
}
function ps(e) {
  return a$.test(e);
}
const u$ = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function c$(e) {
  return ho(e, u$, A1);
}
function f$(e) {
  return ho(e, "position", A1);
}
const d$ = /* @__PURE__ */ new Set(["image", "url"]);
function h$(e) {
  return ho(e, d$, g$);
}
function p$(e) {
  return ho(e, "", v$);
}
function Vo() {
  return !0;
}
function ho(e, t, n) {
  const r = T1.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}
function m$(e) {
  return s$.test(e);
}
function A1() {
  return !1;
}
function v$(e) {
  return i$.test(e);
}
function g$(e) {
  return o$.test(e);
}
function _$() {
  const e = Yt("colors"), t = Yt("spacing"), n = Yt("blur"), r = Yt("brightness"), s = Yt("borderColor"), i = Yt("borderRadius"), l = Yt("borderSpacing"), u = Yt("borderWidth"), f = Yt("contrast"), h = Yt("grayscale"), d = Yt("hueRotate"), m = Yt("invert"), v = Yt("gap"), g = Yt("gradientColorStops"), w = Yt("gradientColorStopPositions"), E = Yt("inset"), k = Yt("margin"), b = Yt("opacity"), D = Yt("padding"), T = Yt("saturate"), x = Yt("scale"), C = Yt("sepia"), M = Yt("skew"), I = Yt("space"), R = Yt("translate"), V = () => ["auto", "contain", "none"], $ = () => ["auto", "hidden", "clip", "visible", "scroll"], q = () => ["auto", at, t], W = () => [at, t], se = () => ["", Lr, hs], me = () => ["auto", Ks, at], ce = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], ye = () => ["solid", "dashed", "dotted", "double", "none"], Ae = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"], Ue = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], Re = () => ["", "0", at], re = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], Me = () => [Ks, Mu], mt = () => [Ks, at];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Vo],
      spacing: [Lr, hs],
      blur: ["none", "", ps, at],
      brightness: Me(),
      borderColor: [e],
      borderRadius: ["none", "", "full", ps, at],
      borderSpacing: W(),
      borderWidth: se(),
      contrast: Me(),
      grayscale: Re(),
      hueRotate: mt(),
      invert: Re(),
      gap: W(),
      gradientColorStops: [e],
      gradientColorStopPositions: [l$, hs],
      inset: q(),
      margin: q(),
      opacity: Me(),
      padding: W(),
      saturate: Me(),
      scale: Me(),
      sepia: Re(),
      skew: mt(),
      space: W(),
      translate: W()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", at]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [ps]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": re()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": re()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...ce(), at]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: $()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": $()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": $()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: V()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": V()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": V()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [E]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [E]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [E]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [E]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [E]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [E]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [E]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [E]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [E]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", Ho, at]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: q()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", at]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: Re()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: Re()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Ho, at]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Vo]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Ho, at]
        }, at]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": me()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": me()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Vo]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Ho, at]
        }, at]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": me()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": me()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", at]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", at]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [v]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [v]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [v]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...Ue()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...Ue(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...Ue(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [D]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [D]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [D]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [D]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [D]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [D]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [D]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [D]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [D]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [k]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [k]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [k]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [k]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [k]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [k]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [k]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [k]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [k]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [I]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [I]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", at, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", at, Lr]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [ps]
        }, ps, at]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [at, t, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", Lr, at]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [at, t, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", ps, hs]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Mu]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Vo]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", at]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Ks, Mu]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Lr, at]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", at]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", at]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [b]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [b]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...ye(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Lr, hs]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Lr, at]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: W()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", at]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", at]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [b]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...ce(), f$]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", c$]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, h$]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [w]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [w]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [w]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [g]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [g]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [g]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [i]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [i]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [i]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [i]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [i]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [i]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [i]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [i]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [i]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [i]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [i]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [i]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [i]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [i]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [i]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [u]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [u]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [u]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [u]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [u]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [u]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [u]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [u]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [u]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [b]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...ye(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [u]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [u]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [b]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: ye()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [s]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [s]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [s]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [s]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [s]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [s]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [s]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [s]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...ye()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Lr, at]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Lr, hs]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: se()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [b]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Lr, hs]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", ps, p$]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Vo]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [b]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": Ae()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Ae()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [n]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [r]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [f]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", ps, at]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [h]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [d]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [m]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [T]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [C]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [n]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [r]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [f]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [h]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [d]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [m]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [b]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [T]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [C]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [l]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [l]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [l]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", at]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: mt()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", at]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: mt()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", at]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [x]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [x]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [x]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Ho, at]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [R]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [R]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [M]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [M]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", at]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: ["appearance-none"],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", at]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": W()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": W()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": W()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": W()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": W()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": W()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": W()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": W()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": W()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": W()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": W()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": W()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": W()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": W()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": W()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": W()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": W()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": W()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", at]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Lr, hs, Mu]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}
const y$ = /* @__PURE__ */ t$(_$);
function M1(...e) {
  return y$(BN(e));
}
const b$ = /* @__PURE__ */ Le({
  __name: "PopoverContent",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    side: {},
    sideOffset: { default: 4 },
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    onPlaced: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean },
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, r = fo(n, t);
    return (s, i) => (F(), tt(y(LN), null, {
      default: We(() => [
        Pe(y(YN), nn({ ...y(r), ...s.$attrs }, {
          class: y(M1)(
            "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            n.class
          )
        }), {
          default: We(() => [
            yt(s.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), w$ = {
  key: 0,
  class: "flex items-center gap-2 relative"
}, E$ = { class: "p3-r text-dark-4" }, O$ = { class: "flex gap-6" }, D$ = { class: "p3-b text-true-blue-3 flex cursor-pointer items-center justify-center gap-2 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50" }, x$ = /* @__PURE__ */ j("template", null, null, -1), S$ = { class: "shadow-01 bg-light-5 z-[2] p-2 rounded flex flex-col gap-2" }, k$ = { class: "p3-b text-true-blue-3 w-fit flex cursor-pointer items-center justify-center gap-2 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50" }, T$ = {
  key: 0,
  class: "border-t p-2"
}, A$ = { class: "flex gap-1.5 flex-wrap" }, M$ = {
  key: 1,
  class: "shadow-01 flex w-fit items-center py-1 px-2 rounded p3-r text-dark-3"
}, C$ = ["onClick"], P$ = {
  key: 0,
  class: "text-dark-5 mx-1"
}, N$ = {
  key: 2,
  class: "flex gap-4 flex-wrap p-2 border-t"
}, $$ = /* @__PURE__ */ Le({
  __name: "SpecifyDate",
  props: {
    type: {},
    weekdays: {},
    weekOrdinal: {},
    monthDate: {},
    yearMonths: {}
  },
  emits: [
    "update:weekdays",
    "update:weekOrdinal",
    "update:monthDate",
    "update:yearMonths"
  ],
  setup(e, { emit: t }) {
    const n = e, { t: r } = fa.global, s = J(n.monthDate), i = J(n.weekOrdinal), l = J(n.weekdays), u = J(n.yearMonths), f = (x, C, M = !1) => {
      if (M) {
        C.findIndex((I) => I === x) === -1 ? C.push(x) : C.splice(C.indexOf(x), 1), C.sort((I, R) => I - R);
        return;
      }
      C.value.findIndex((I) => I === x) === -1 ? C.value.push(x) : C.value.splice(C.value.indexOf(x), 1), C.value.sort((I, R) => I - R);
    }, h = J(""), d = Tt("eventData");
    Gn(() => {
      t(
        "update:monthDate",
        s.value.length ? s.value : null
      ), t(
        "update:weekOrdinal",
        i.value.length ? i.value : null
      ), t(
        "update:weekdays",
        l.value.length ? l.value : null
      ), t(
        "update:yearMonths",
        u.value.length ? u.value : null
      ), h.value = A2(d.value, !0);
    });
    const m = J([
      { name: r("週日"), id: _r.Sunday },
      { name: r("週一"), id: _r.Monday },
      { name: r("週二"), id: _r.Tuesday },
      { name: r("週三"), id: _r.Wednesday },
      { name: r("週四"), id: _r.Thursday },
      { name: r("週五"), id: _r.Friday },
      { name: r("週六"), id: _r.Saturday },
      { name: r("平日"), id: _r.Weekday },
      { name: r("週末"), id: _r.Weekend }
    ]), v = J([
      { name: r("第一週"), id: Pa.First },
      { name: r("第二週"), id: Pa.Second },
      { name: r("第三週"), id: Pa.Third },
      { name: r("第四週"), id: Pa.Fourth },
      { name: r("第五週"), id: Pa.Fifth },
      { name: r("最後一週"), id: Pa.Last }
    ]), g = J([
      { name: "1", id: 1 },
      { name: "2", id: 2 },
      { name: "3", id: 3 },
      { name: "4", id: 4 },
      { name: "5", id: 5 },
      { name: "6", id: 6 },
      { name: "7", id: 7 },
      { name: "8", id: 8 },
      { name: "9", id: 9 },
      { name: "10", id: 10 },
      { name: "11", id: 11 },
      { name: "12", id: 12 },
      { name: "13", id: 13 },
      { name: "14", id: 14 },
      { name: "15", id: 15 },
      { name: "16", id: 16 },
      { name: "17", id: 17 },
      { name: "18", id: 18 },
      { name: "19", id: 19 },
      { name: "20", id: 20 },
      { name: "21", id: 21 },
      { name: "22", id: 22 },
      { name: "23", id: 23 },
      { name: "24", id: 24 },
      { name: "25", id: 25 },
      { name: "26", id: 26 },
      { name: "27", id: 27 },
      { name: "28", id: 28 },
      { name: "29", id: 29 },
      { name: "30", id: 30 },
      { name: "31", id: 31 },
      { name: r("最後一天"), id: -1 }
    ]), w = J([
      {
        name: r("一月"),
        id: Un.January
      },
      {
        name: r("二月"),
        id: Un.February
      },
      {
        name: r("三月"),
        id: Un.March
      },
      {
        name: r("四月"),
        id: Un.April
      },
      {
        name: r("五月"),
        id: Un.May
      },
      {
        name: r("六月"),
        id: Un.June
      },
      {
        name: r("七月"),
        id: Un.July
      },
      {
        name: r("八月"),
        id: Un.August
      },
      {
        name: r("九月"),
        id: Un.September
      },
      {
        name: r("十月"),
        id: Un.October
      },
      {
        name: r("十一月"),
        id: Un.November
      },
      {
        name: r("十二月"),
        id: Un.December
      }
    ]), E = Y(() => {
      if (n.type === xt.Week)
        return [
          {
            key: l,
            label: "weekdaysOrigin",
            options: m.value
          }
        ];
      if (n.type === xt.Month) {
        if (D.value.id === 0)
          return [
            {
              key: i,
              label: "weekOrdinalOrigin",
              options: v.value
            },
            {
              key: l,
              label: "weekdaysOrigin",
              options: m.value
            }
          ];
        if (D.value.id === 1)
          return [
            {
              key: s,
              label: "monthDateOrigin",
              options: g.value
            }
          ];
      }
      if (n.type === xt.Annual) {
        if (D.value.id === 0)
          return [
            {
              key: i,
              label: "weekOrdinalOrigin",
              options: v.value
            },
            {
              key: l,
              label: "weekdaysOrigin",
              options: m.value
            }
          ];
        if (D.value.id === 1)
          return [
            {
              key: s,
              label: "monthDateOrigin",
              options: g.value
            }
          ];
      }
    }), k = Y(() => n.type === xt.Month || n.type === xt.Annual ? !0 : (s.value = [], i.value = [], l.value = [], u.value = [], !1)), b = J([
      {
        name: r("星期"),
        id: 0
        /* Week */
      },
      {
        name: r("日期"),
        id: 1
        /* Date */
      }
    ]), D = J(b.value[0]);
    ze(D, (x) => {
      if (x.id === 0) {
        s.value = [];
        return;
      }
      if (x.id === 1) {
        i.value = [], l.value = [];
        return;
      }
    }), ze(
      () => n.type,
      (x) => {
        (x === xt.Month || x === xt.Annual) && (x != xt.Annual && (u.value = []), g.value && g.value.length > 0 ? D.value = b.value[1] : D.value = b.value[0]);
      },
      { immediate: !0 }
    ), ty(() => {
      s.value = [], i.value = [], l.value = [], u.value = [];
    });
    const T = Y(() => {
      if (n.type === xt.Week)
        return !!l.value.length;
      if (n.type === xt.Month) {
        if (D.value.id == 0)
          return !!i.value.length || !!l.value.length;
        if (D.value.id == 1)
          return !!s.value.length;
      }
      if (n.type === xt.Annual) {
        if (D.value.id == 0)
          return !!u.value.length || !!i.value.length || !!l.value.length;
        if (D.value.id == 1)
          return !!u.value.length || !!s.value.length;
      }
    });
    return (x, C) => x.type === y(xt).Annual || y(E) ? (F(), z("div", w$, [
      j("span", E$, ke(y(r)("指定時段")), 1),
      Pe(y(WN), null, {
        default: We(() => [
          Pe(y(UN), null, {
            default: We(() => [
              j("div", O$, [
                j("span", D$, ke(y(T) ? y(h) : y(r)("未設定")), 1),
                x$
              ])
            ]),
            _: 1
          }),
          Pe(y(b$), {
            class: "shadow-none border-none p-0 w-96",
            align: "start",
            side: "bottom"
          }, {
            default: We(() => [
              j("div", S$, [
                j("div", k$, ke(y(r)("月份")), 1),
                x.type === y(xt).Annual ? (F(), z("div", T$, [
                  j("div", A$, [
                    (F(!0), z(Xe, null, Lt(y(w), (M) => {
                      var I;
                      return F(), tt(Ag, {
                        key: M.id,
                        checked: (I = y(u)) == null ? void 0 : I.includes(M.id),
                        "onUpdate:checked": (R) => f(M.id, y(u), !0),
                        fieldId: M.name,
                        label: M.name
                      }, null, 8, ["checked", "onUpdate:checked", "fieldId", "label"]);
                    }), 128))
                  ])
                ])) : Te("", !0),
                y(k) ? (F(), z("div", M$, [
                  (F(!0), z(Xe, null, Lt(y(b), (M, I) => (F(), z("div", {
                    class: "flex items-center",
                    key: M
                  }, [
                    Number.isInteger(M) ? Te("", !0) : (F(), z(Xe, { key: 0 }, [
                      j("span", {
                        class: it(["cursor-pointer hover:drop-shadow-md", [
                          y(D).id == M.id ? "text-true-blue-3 drop-shadow-sm p3-b" : "p3-r"
                        ]]),
                        onClick: (R) => D.value = M
                      }, ke(M.name), 11, C$),
                      I < Object.keys(y(D)).filter(
                        (R) => isNaN(Number(R))
                      ).length - 1 ? (F(), z("div", P$, " | ")) : Te("", !0)
                    ], 64))
                  ]))), 128))
                ])) : Te("", !0),
                y(E) ? (F(), z("div", N$, [
                  (F(!0), z(Xe, null, Lt(y(E), (M) => (F(), z("div", {
                    class: "flex gap-1 flex-wrap",
                    key: M
                  }, [
                    (F(!0), z(Xe, null, Lt(M.options, (I) => {
                      var R;
                      return F(), tt(Ag, {
                        key: I.id,
                        checked: (R = M.key.value) == null ? void 0 : R.includes(I.id),
                        "onUpdate:checked": (V) => f(I.id, M.key),
                        fieldId: I.name,
                        label: I.name
                      }, null, 8, ["checked", "onUpdate:checked", "fieldId", "label"]);
                    }), 128))
                  ]))), 128))
                ])) : Te("", !0)
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ])) : Te("", !0);
  }
}), I$ = ["width", "height", "fill", "transform"], L$ = { key: 0 }, R$ = /* @__PURE__ */ j("path", { d: "M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z" }, null, -1), F$ = [
  R$
], Y$ = { key: 1 }, W$ = /* @__PURE__ */ j("path", {
  d: "M208,96l-80,80L48,96Z",
  opacity: "0.2"
}, null, -1), U$ = /* @__PURE__ */ j("path", { d: "M215.39,92.94A8,8,0,0,0,208,88H48a8,8,0,0,0-5.66,13.66l80,80a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,215.39,92.94ZM128,164.69,67.31,104H188.69Z" }, null, -1), B$ = [
  W$,
  U$
], H$ = { key: 2 }, V$ = /* @__PURE__ */ j("path", { d: "M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z" }, null, -1), j$ = [
  V$
], G$ = { key: 3 }, z$ = /* @__PURE__ */ j("path", { d: "M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z" }, null, -1), q$ = [
  z$
], K$ = { key: 4 }, Z$ = /* @__PURE__ */ j("path", { d: "M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" }, null, -1), X$ = [
  Z$
], J$ = { key: 5 }, Q$ = /* @__PURE__ */ j("path", { d: "M210.83,98.83l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,170.34l77.17-77.17a4,4,0,1,1,5.66,5.66Z" }, null, -1), eI = [
  Q$
], tI = {
  name: "PhCaretDown"
}, C1 = /* @__PURE__ */ Le({
  ...tI,
  props: {
    weight: {
      type: String
    },
    size: {
      type: [String, Number]
    },
    color: {
      type: String
    },
    mirrored: {
      type: Boolean
    }
  },
  setup(e) {
    const t = e, n = Tt("weight", "regular"), r = Tt("size", "1em"), s = Tt("color", "currentColor"), i = Tt("mirrored", !1), l = Y(() => t.weight ?? n), u = Y(() => t.size ?? r), f = Y(() => t.color ?? s), h = Y(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : i ? "scale(-1, 1)" : void 0);
    return (d, m) => (F(), z("svg", nn({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: u.value,
      height: u.value,
      fill: f.value,
      transform: h.value
    }, d.$attrs), [
      yt(d.$slots, "default"),
      l.value === "bold" ? (F(), z("g", L$, F$)) : l.value === "duotone" ? (F(), z("g", Y$, B$)) : l.value === "fill" ? (F(), z("g", H$, j$)) : l.value === "light" ? (F(), z("g", G$, q$)) : l.value === "regular" ? (F(), z("g", K$, X$)) : l.value === "thin" ? (F(), z("g", J$, eI)) : Te("", !0)
    ], 16, I$));
  }
}), nI = ["width", "height", "fill", "transform"], rI = { key: 0 }, aI = /* @__PURE__ */ j("path", { d: "M84,108A12,12,0,0,1,96,96h64a12,12,0,0,1,0,24H96A12,12,0,0,1,84,108Zm32,28H96a12,12,0,0,0,0,24h20a12,12,0,0,0,0-24ZM228,48V156.69a19.86,19.86,0,0,1-5.86,14.14l-51.31,51.31A19.86,19.86,0,0,1,156.69,228H48a20,20,0,0,1-20-20V48A20,20,0,0,1,48,28H208A20,20,0,0,1,228,48ZM52,204h92V156a12,12,0,0,1,12-12h48V52H52Zm139-36H168v23Z" }, null, -1), sI = [
  aI
], iI = { key: 1 }, oI = /* @__PURE__ */ j("path", {
  d: "M216,160l-56,56V160Z",
  opacity: "0.2"
}, null, -1), lI = /* @__PURE__ */ j("path", { d: "M88,96a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H96A8,8,0,0,1,88,96Zm8,40h64a8,8,0,0,0,0-16H96a8,8,0,0,0,0,16Zm32,16H96a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16ZM224,48V156.69A15.86,15.86,0,0,1,219.31,168L168,219.31A15.86,15.86,0,0,1,156.69,224H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM48,208H152V160a8,8,0,0,1,8-8h48V48H48Zm120-40v28.7L196.69,168Z" }, null, -1), uI = [
  oI,
  lI
], cI = { key: 2 }, fI = /* @__PURE__ */ j("path", { d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H156.69A15.92,15.92,0,0,0,168,219.31L219.31,168A15.92,15.92,0,0,0,224,156.69V48A16,16,0,0,0,208,32ZM96,88h64a8,8,0,0,1,0,16H96a8,8,0,0,1,0-16Zm32,80H96a8,8,0,0,1,0-16h32a8,8,0,0,1,0,16ZM96,136a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm64,68.69V160h44.7Z" }, null, -1), dI = [
  fI
], hI = { key: 3 }, pI = /* @__PURE__ */ j("path", { d: "M90,96a6,6,0,0,1,6-6h64a6,6,0,0,1,0,12H96A6,6,0,0,1,90,96Zm6,38h64a6,6,0,0,0,0-12H96a6,6,0,0,0,0,12Zm32,20H96a6,6,0,0,0,0,12h32a6,6,0,0,0,0-12ZM222,48V156.69a13.94,13.94,0,0,1-4.1,9.9L166.59,217.9a13.94,13.94,0,0,1-9.9,4.1H48a14,14,0,0,1-14-14V48A14,14,0,0,1,48,34H208A14,14,0,0,1,222,48ZM48,210H154V160a6,6,0,0,1,6-6h50V48a2,2,0,0,0-2-2H48a2,2,0,0,0-2,2V208A2,2,0,0,0,48,210Zm153.52-44H166v35.52Z" }, null, -1), mI = [
  pI
], vI = { key: 4 }, gI = /* @__PURE__ */ j("path", { d: "M88,96a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H96A8,8,0,0,1,88,96Zm8,40h64a8,8,0,0,0,0-16H96a8,8,0,0,0,0,16Zm32,16H96a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16ZM224,48V156.69A15.86,15.86,0,0,1,219.31,168L168,219.31A15.86,15.86,0,0,1,156.69,224H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM48,208H152V160a8,8,0,0,1,8-8h48V48H48Zm120-40v28.7L196.69,168Z" }, null, -1), _I = [
  gI
], yI = { key: 5 }, bI = /* @__PURE__ */ j("path", { d: "M92,96a4,4,0,0,1,4-4h64a4,4,0,0,1,0,8H96A4,4,0,0,1,92,96Zm4,36h64a4,4,0,0,0,0-8H96a4,4,0,0,0,0,8Zm32,24H96a4,4,0,0,0,0,8h32a4,4,0,0,0,0-8ZM220,48V156.69a11.9,11.9,0,0,1-3.52,8.48l-51.31,51.32a11.93,11.93,0,0,1-8.48,3.51H48a12,12,0,0,1-12-12V48A12,12,0,0,1,48,36H208A12,12,0,0,1,220,48ZM48,212H156V160a4,4,0,0,1,4-4h52V48a4,4,0,0,0-4-4H48a4,4,0,0,0-4,4V208A4,4,0,0,0,48,212Zm158.35-48H164v42.35Z" }, null, -1), wI = [
  bI
], EI = {
  name: "PhNote"
}, OI = /* @__PURE__ */ Le({
  ...EI,
  props: {
    weight: {
      type: String
    },
    size: {
      type: [String, Number]
    },
    color: {
      type: String
    },
    mirrored: {
      type: Boolean
    }
  },
  setup(e) {
    const t = e, n = Tt("weight", "regular"), r = Tt("size", "1em"), s = Tt("color", "currentColor"), i = Tt("mirrored", !1), l = Y(() => t.weight ?? n), u = Y(() => t.size ?? r), f = Y(() => t.color ?? s), h = Y(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : i ? "scale(-1, 1)" : void 0);
    return (d, m) => (F(), z("svg", nn({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: u.value,
      height: u.value,
      fill: f.value,
      transform: h.value
    }, d.$attrs), [
      yt(d.$slots, "default"),
      l.value === "bold" ? (F(), z("g", rI, sI)) : l.value === "duotone" ? (F(), z("g", iI, uI)) : l.value === "fill" ? (F(), z("g", cI, dI)) : l.value === "light" ? (F(), z("g", hI, mI)) : l.value === "regular" ? (F(), z("g", vI, _I)) : l.value === "thin" ? (F(), z("g", yI, wI)) : Te("", !0)
    ], 16, nI));
  }
}), DI = ["width", "height", "fill", "transform"], xI = { key: 0 }, SI = /* @__PURE__ */ j("path", { d: "M216,48H180V36A28,28,0,0,0,152,8H104A28,28,0,0,0,76,36V48H40a12,12,0,0,0,0,24h4V208a20,20,0,0,0,20,20H192a20,20,0,0,0,20-20V72h4a12,12,0,0,0,0-24ZM100,36a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4V48H100Zm88,168H68V72H188ZM116,104v64a12,12,0,0,1-24,0V104a12,12,0,0,1,24,0Zm48,0v64a12,12,0,0,1-24,0V104a12,12,0,0,1,24,0Z" }, null, -1), kI = [
  SI
], TI = { key: 1 }, AI = /* @__PURE__ */ j("path", {
  d: "M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56Z",
  opacity: "0.2"
}, null, -1), MI = /* @__PURE__ */ j("path", { d: "M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z" }, null, -1), CI = [
  AI,
  MI
], PI = { key: 2 }, NI = /* @__PURE__ */ j("path", { d: "M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM112,168a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm0-120H96V40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Z" }, null, -1), $I = [
  NI
], II = { key: 3 }, LI = /* @__PURE__ */ j("path", { d: "M216,50H174V40a22,22,0,0,0-22-22H104A22,22,0,0,0,82,40V50H40a6,6,0,0,0,0,12H50V208a14,14,0,0,0,14,14H192a14,14,0,0,0,14-14V62h10a6,6,0,0,0,0-12ZM94,40a10,10,0,0,1,10-10h48a10,10,0,0,1,10,10V50H94ZM194,208a2,2,0,0,1-2,2H64a2,2,0,0,1-2-2V62H194ZM110,104v64a6,6,0,0,1-12,0V104a6,6,0,0,1,12,0Zm48,0v64a6,6,0,0,1-12,0V104a6,6,0,0,1,12,0Z" }, null, -1), RI = [
  LI
], FI = { key: 4 }, YI = /* @__PURE__ */ j("path", { d: "M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z" }, null, -1), WI = [
  YI
], UI = { key: 5 }, BI = /* @__PURE__ */ j("path", { d: "M216,52H172V40a20,20,0,0,0-20-20H104A20,20,0,0,0,84,40V52H40a4,4,0,0,0,0,8H52V208a12,12,0,0,0,12,12H192a12,12,0,0,0,12-12V60h12a4,4,0,0,0,0-8ZM92,40a12,12,0,0,1,12-12h48a12,12,0,0,1,12,12V52H92ZM196,208a4,4,0,0,1-4,4H64a4,4,0,0,1-4-4V60H196ZM108,104v64a4,4,0,0,1-8,0V104a4,4,0,0,1,8,0Zm48,0v64a4,4,0,0,1-8,0V104a4,4,0,0,1,8,0Z" }, null, -1), HI = [
  BI
], VI = {
  name: "PhTrash"
}, jI = /* @__PURE__ */ Le({
  ...VI,
  props: {
    weight: {
      type: String
    },
    size: {
      type: [String, Number]
    },
    color: {
      type: String
    },
    mirrored: {
      type: Boolean
    }
  },
  setup(e) {
    const t = e, n = Tt("weight", "regular"), r = Tt("size", "1em"), s = Tt("color", "currentColor"), i = Tt("mirrored", !1), l = Y(() => t.weight ?? n), u = Y(() => t.size ?? r), f = Y(() => t.color ?? s), h = Y(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : i ? "scale(-1, 1)" : void 0);
    return (d, m) => (F(), z("svg", nn({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: u.value,
      height: u.value,
      fill: f.value,
      transform: h.value
    }, d.$attrs), [
      yt(d.$slots, "default"),
      l.value === "bold" ? (F(), z("g", xI, kI)) : l.value === "duotone" ? (F(), z("g", TI, CI)) : l.value === "fill" ? (F(), z("g", PI, $I)) : l.value === "light" ? (F(), z("g", II, RI)) : l.value === "regular" ? (F(), z("g", FI, WI)) : l.value === "thin" ? (F(), z("g", UI, HI)) : Te("", !0)
    ], 16, DI));
  }
}), GI = ["width", "height", "fill", "transform"], zI = { key: 0 }, qI = /* @__PURE__ */ j("path", { d: "M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z" }, null, -1), KI = [
  qI
], ZI = { key: 1 }, XI = /* @__PURE__ */ j("path", {
  d: "M216,48V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z",
  opacity: "0.2"
}, null, -1), JI = /* @__PURE__ */ j("path", { d: "M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" }, null, -1), QI = [
  XI,
  JI
], eL = { key: 2 }, tL = /* @__PURE__ */ j("path", { d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM181.66,170.34a8,8,0,0,1-11.32,11.32L128,139.31,85.66,181.66a8,8,0,0,1-11.32-11.32L116.69,128,74.34,85.66A8,8,0,0,1,85.66,74.34L128,116.69l42.34-42.35a8,8,0,0,1,11.32,11.32L139.31,128Z" }, null, -1), nL = [
  tL
], rL = { key: 3 }, aL = /* @__PURE__ */ j("path", { d: "M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z" }, null, -1), sL = [
  aL
], iL = { key: 4 }, oL = /* @__PURE__ */ j("path", { d: "M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" }, null, -1), lL = [
  oL
], uL = { key: 5 }, cL = /* @__PURE__ */ j("path", { d: "M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z" }, null, -1), fL = [
  cL
], dL = {
  name: "PhX"
}, ah = /* @__PURE__ */ Le({
  ...dL,
  props: {
    weight: {
      type: String
    },
    size: {
      type: [String, Number]
    },
    color: {
      type: String
    },
    mirrored: {
      type: Boolean
    }
  },
  setup(e) {
    const t = e, n = Tt("weight", "regular"), r = Tt("size", "1em"), s = Tt("color", "currentColor"), i = Tt("mirrored", !1), l = Y(() => t.weight ?? n), u = Y(() => t.size ?? r), f = Y(() => t.color ?? s), h = Y(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : i ? "scale(-1, 1)" : void 0);
    return (d, m) => (F(), z("svg", nn({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: u.value,
      height: u.value,
      fill: f.value,
      transform: h.value
    }, d.$attrs), [
      yt(d.$slots, "default"),
      l.value === "bold" ? (F(), z("g", zI, KI)) : l.value === "duotone" ? (F(), z("g", ZI, QI)) : l.value === "fill" ? (F(), z("g", eL, nL)) : l.value === "light" ? (F(), z("g", rL, sL)) : l.value === "regular" ? (F(), z("g", iL, lL)) : l.value === "thin" ? (F(), z("g", uL, fL)) : Te("", !0)
    ], 16, GI));
  }
});
var Vn = "top", kr = "bottom", Tr = "right", jn = "left", tp = "auto", kl = [Vn, kr, Tr, jn], Qi = "start", pl = "end", hL = "clippingParents", P1 = "viewport", jo = "popper", pL = "reference", x_ = /* @__PURE__ */ kl.reduce(function(e, t) {
  return e.concat([t + "-" + Qi, t + "-" + pl]);
}, []), N1 = /* @__PURE__ */ [].concat(kl, [tp]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Qi, t + "-" + pl]);
}, []), mL = "beforeRead", vL = "read", gL = "afterRead", _L = "beforeMain", yL = "main", bL = "afterMain", wL = "beforeWrite", EL = "write", OL = "afterWrite", DL = [mL, vL, gL, _L, yL, bL, wL, EL, OL];
function la(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function ir(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function ii(e) {
  var t = ir(e).Element;
  return e instanceof t || e instanceof Element;
}
function Er(e) {
  var t = ir(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function np(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = ir(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function xL(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, s = t.attributes[n] || {}, i = t.elements[n];
    !Er(i) || !la(i) || (Object.assign(i.style, r), Object.keys(s).forEach(function(l) {
      var u = s[l];
      u === !1 ? i.removeAttribute(l) : i.setAttribute(l, u === !0 ? "" : u);
    }));
  });
}
function SL(e) {
  var t = e.state, n = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var s = t.elements[r], i = t.attributes[r] || {}, l = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), u = l.reduce(function(f, h) {
        return f[h] = "", f;
      }, {});
      !Er(s) || !la(s) || (Object.assign(s.style, u), Object.keys(i).forEach(function(f) {
        s.removeAttribute(f);
      }));
    });
  };
}
const kL = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: xL,
  effect: SL,
  requires: ["computeStyles"]
};
function sa(e) {
  return e.split("-")[0];
}
var Qs = Math.max, Qu = Math.min, eo = Math.round;
function sh() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function $1() {
  return !/^((?!chrome|android).)*safari/i.test(sh());
}
function to(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), s = 1, i = 1;
  t && Er(e) && (s = e.offsetWidth > 0 && eo(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && eo(r.height) / e.offsetHeight || 1);
  var l = ii(e) ? ir(e) : window, u = l.visualViewport, f = !$1() && n, h = (r.left + (f && u ? u.offsetLeft : 0)) / s, d = (r.top + (f && u ? u.offsetTop : 0)) / i, m = r.width / s, v = r.height / i;
  return {
    width: m,
    height: v,
    top: d,
    right: h + m,
    bottom: d + v,
    left: h,
    x: h,
    y: d
  };
}
function rp(e) {
  var t = to(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function I1(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && np(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Ha(e) {
  return ir(e).getComputedStyle(e);
}
function TL(e) {
  return ["table", "td", "th"].indexOf(la(e)) >= 0;
}
function Ns(e) {
  return ((ii(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Nc(e) {
  return la(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (np(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Ns(e)
  );
}
function S_(e) {
  return !Er(e) || // https://github.com/popperjs/popper-core/issues/837
  Ha(e).position === "fixed" ? null : e.offsetParent;
}
function AL(e) {
  var t = /firefox/i.test(sh()), n = /Trident/i.test(sh());
  if (n && Er(e)) {
    var r = Ha(e);
    if (r.position === "fixed")
      return null;
  }
  var s = Nc(e);
  for (np(s) && (s = s.host); Er(s) && ["html", "body"].indexOf(la(s)) < 0; ) {
    var i = Ha(s);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function Tl(e) {
  for (var t = ir(e), n = S_(e); n && TL(n) && Ha(n).position === "static"; )
    n = S_(n);
  return n && (la(n) === "html" || la(n) === "body" && Ha(n).position === "static") ? t : n || AL(e) || t;
}
function ap(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function rl(e, t, n) {
  return Qs(e, Qu(t, n));
}
function ML(e, t, n) {
  var r = rl(e, t, n);
  return r > n ? n : r;
}
function L1() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function R1(e) {
  return Object.assign({}, L1(), e);
}
function F1(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var CL = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, R1(typeof t != "number" ? t : F1(t, kl));
};
function PL(e) {
  var t, n = e.state, r = e.name, s = e.options, i = n.elements.arrow, l = n.modifiersData.popperOffsets, u = sa(n.placement), f = ap(u), h = [jn, Tr].indexOf(u) >= 0, d = h ? "height" : "width";
  if (!(!i || !l)) {
    var m = CL(s.padding, n), v = rp(i), g = f === "y" ? Vn : jn, w = f === "y" ? kr : Tr, E = n.rects.reference[d] + n.rects.reference[f] - l[f] - n.rects.popper[d], k = l[f] - n.rects.reference[f], b = Tl(i), D = b ? f === "y" ? b.clientHeight || 0 : b.clientWidth || 0 : 0, T = E / 2 - k / 2, x = m[g], C = D - v[d] - m[w], M = D / 2 - v[d] / 2 + T, I = rl(x, M, C), R = f;
    n.modifiersData[r] = (t = {}, t[R] = I, t.centerOffset = I - M, t);
  }
}
function NL(e) {
  var t = e.state, n = e.options, r = n.element, s = r === void 0 ? "[data-popper-arrow]" : r;
  s != null && (typeof s == "string" && (s = t.elements.popper.querySelector(s), !s) || I1(t.elements.popper, s) && (t.elements.arrow = s));
}
const $L = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: PL,
  effect: NL,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function no(e) {
  return e.split("-")[1];
}
var IL = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function LL(e, t) {
  var n = e.x, r = e.y, s = t.devicePixelRatio || 1;
  return {
    x: eo(n * s) / s || 0,
    y: eo(r * s) / s || 0
  };
}
function k_(e) {
  var t, n = e.popper, r = e.popperRect, s = e.placement, i = e.variation, l = e.offsets, u = e.position, f = e.gpuAcceleration, h = e.adaptive, d = e.roundOffsets, m = e.isFixed, v = l.x, g = v === void 0 ? 0 : v, w = l.y, E = w === void 0 ? 0 : w, k = typeof d == "function" ? d({
    x: g,
    y: E
  }) : {
    x: g,
    y: E
  };
  g = k.x, E = k.y;
  var b = l.hasOwnProperty("x"), D = l.hasOwnProperty("y"), T = jn, x = Vn, C = window;
  if (h) {
    var M = Tl(n), I = "clientHeight", R = "clientWidth";
    if (M === ir(n) && (M = Ns(n), Ha(M).position !== "static" && u === "absolute" && (I = "scrollHeight", R = "scrollWidth")), M = M, s === Vn || (s === jn || s === Tr) && i === pl) {
      x = kr;
      var V = m && M === C && C.visualViewport ? C.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        M[I]
      );
      E -= V - r.height, E *= f ? 1 : -1;
    }
    if (s === jn || (s === Vn || s === kr) && i === pl) {
      T = Tr;
      var $ = m && M === C && C.visualViewport ? C.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        M[R]
      );
      g -= $ - r.width, g *= f ? 1 : -1;
    }
  }
  var q = Object.assign({
    position: u
  }, h && IL), W = d === !0 ? LL({
    x: g,
    y: E
  }, ir(n)) : {
    x: g,
    y: E
  };
  if (g = W.x, E = W.y, f) {
    var se;
    return Object.assign({}, q, (se = {}, se[x] = D ? "0" : "", se[T] = b ? "0" : "", se.transform = (C.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + E + "px)" : "translate3d(" + g + "px, " + E + "px, 0)", se));
  }
  return Object.assign({}, q, (t = {}, t[x] = D ? E + "px" : "", t[T] = b ? g + "px" : "", t.transform = "", t));
}
function RL(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, s = r === void 0 ? !0 : r, i = n.adaptive, l = i === void 0 ? !0 : i, u = n.roundOffsets, f = u === void 0 ? !0 : u, h = {
    placement: sa(t.placement),
    variation: no(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: s,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, k_(Object.assign({}, h, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: l,
    roundOffsets: f
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, k_(Object.assign({}, h, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: f
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const FL = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: RL,
  data: {}
};
var Cu = {
  passive: !0
};
function YL(e) {
  var t = e.state, n = e.instance, r = e.options, s = r.scroll, i = s === void 0 ? !0 : s, l = r.resize, u = l === void 0 ? !0 : l, f = ir(t.elements.popper), h = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && h.forEach(function(d) {
    d.addEventListener("scroll", n.update, Cu);
  }), u && f.addEventListener("resize", n.update, Cu), function() {
    i && h.forEach(function(d) {
      d.removeEventListener("scroll", n.update, Cu);
    }), u && f.removeEventListener("resize", n.update, Cu);
  };
}
const WL = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: YL,
  data: {}
};
var UL = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ru(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return UL[t];
  });
}
var BL = {
  start: "end",
  end: "start"
};
function T_(e) {
  return e.replace(/start|end/g, function(t) {
    return BL[t];
  });
}
function sp(e) {
  var t = ir(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function ip(e) {
  return to(Ns(e)).left + sp(e).scrollLeft;
}
function HL(e, t) {
  var n = ir(e), r = Ns(e), s = n.visualViewport, i = r.clientWidth, l = r.clientHeight, u = 0, f = 0;
  if (s) {
    i = s.width, l = s.height;
    var h = $1();
    (h || !h && t === "fixed") && (u = s.offsetLeft, f = s.offsetTop);
  }
  return {
    width: i,
    height: l,
    x: u + ip(e),
    y: f
  };
}
function VL(e) {
  var t, n = Ns(e), r = sp(e), s = (t = e.ownerDocument) == null ? void 0 : t.body, i = Qs(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), l = Qs(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), u = -r.scrollLeft + ip(e), f = -r.scrollTop;
  return Ha(s || n).direction === "rtl" && (u += Qs(n.clientWidth, s ? s.clientWidth : 0) - i), {
    width: i,
    height: l,
    x: u,
    y: f
  };
}
function op(e) {
  var t = Ha(e), n = t.overflow, r = t.overflowX, s = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + s + r);
}
function Y1(e) {
  return ["html", "body", "#document"].indexOf(la(e)) >= 0 ? e.ownerDocument.body : Er(e) && op(e) ? e : Y1(Nc(e));
}
function al(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Y1(e), s = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = ir(r), l = s ? [i].concat(i.visualViewport || [], op(r) ? r : []) : r, u = t.concat(l);
  return s ? u : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    u.concat(al(Nc(l)))
  );
}
function ih(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function jL(e, t) {
  var n = to(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function A_(e, t, n) {
  return t === P1 ? ih(HL(e, n)) : ii(t) ? jL(t, n) : ih(VL(Ns(e)));
}
function GL(e) {
  var t = al(Nc(e)), n = ["absolute", "fixed"].indexOf(Ha(e).position) >= 0, r = n && Er(e) ? Tl(e) : e;
  return ii(r) ? t.filter(function(s) {
    return ii(s) && I1(s, r) && la(s) !== "body";
  }) : [];
}
function zL(e, t, n, r) {
  var s = t === "clippingParents" ? GL(e) : [].concat(t), i = [].concat(s, [n]), l = i[0], u = i.reduce(function(f, h) {
    var d = A_(e, h, r);
    return f.top = Qs(d.top, f.top), f.right = Qu(d.right, f.right), f.bottom = Qu(d.bottom, f.bottom), f.left = Qs(d.left, f.left), f;
  }, A_(e, l, r));
  return u.width = u.right - u.left, u.height = u.bottom - u.top, u.x = u.left, u.y = u.top, u;
}
function W1(e) {
  var t = e.reference, n = e.element, r = e.placement, s = r ? sa(r) : null, i = r ? no(r) : null, l = t.x + t.width / 2 - n.width / 2, u = t.y + t.height / 2 - n.height / 2, f;
  switch (s) {
    case Vn:
      f = {
        x: l,
        y: t.y - n.height
      };
      break;
    case kr:
      f = {
        x: l,
        y: t.y + t.height
      };
      break;
    case Tr:
      f = {
        x: t.x + t.width,
        y: u
      };
      break;
    case jn:
      f = {
        x: t.x - n.width,
        y: u
      };
      break;
    default:
      f = {
        x: t.x,
        y: t.y
      };
  }
  var h = s ? ap(s) : null;
  if (h != null) {
    var d = h === "y" ? "height" : "width";
    switch (i) {
      case Qi:
        f[h] = f[h] - (t[d] / 2 - n[d] / 2);
        break;
      case pl:
        f[h] = f[h] + (t[d] / 2 - n[d] / 2);
        break;
    }
  }
  return f;
}
function ml(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = r === void 0 ? e.placement : r, i = n.strategy, l = i === void 0 ? e.strategy : i, u = n.boundary, f = u === void 0 ? hL : u, h = n.rootBoundary, d = h === void 0 ? P1 : h, m = n.elementContext, v = m === void 0 ? jo : m, g = n.altBoundary, w = g === void 0 ? !1 : g, E = n.padding, k = E === void 0 ? 0 : E, b = R1(typeof k != "number" ? k : F1(k, kl)), D = v === jo ? pL : jo, T = e.rects.popper, x = e.elements[w ? D : v], C = zL(ii(x) ? x : x.contextElement || Ns(e.elements.popper), f, d, l), M = to(e.elements.reference), I = W1({
    reference: M,
    element: T,
    strategy: "absolute",
    placement: s
  }), R = ih(Object.assign({}, T, I)), V = v === jo ? R : M, $ = {
    top: C.top - V.top + b.top,
    bottom: V.bottom - C.bottom + b.bottom,
    left: C.left - V.left + b.left,
    right: V.right - C.right + b.right
  }, q = e.modifiersData.offset;
  if (v === jo && q) {
    var W = q[s];
    Object.keys($).forEach(function(se) {
      var me = [Tr, kr].indexOf(se) >= 0 ? 1 : -1, ce = [Vn, kr].indexOf(se) >= 0 ? "y" : "x";
      $[se] += W[ce] * me;
    });
  }
  return $;
}
function qL(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = n.boundary, i = n.rootBoundary, l = n.padding, u = n.flipVariations, f = n.allowedAutoPlacements, h = f === void 0 ? N1 : f, d = no(r), m = d ? u ? x_ : x_.filter(function(w) {
    return no(w) === d;
  }) : kl, v = m.filter(function(w) {
    return h.indexOf(w) >= 0;
  });
  v.length === 0 && (v = m);
  var g = v.reduce(function(w, E) {
    return w[E] = ml(e, {
      placement: E,
      boundary: s,
      rootBoundary: i,
      padding: l
    })[sa(E)], w;
  }, {});
  return Object.keys(g).sort(function(w, E) {
    return g[w] - g[E];
  });
}
function KL(e) {
  if (sa(e) === tp)
    return [];
  var t = Ru(e);
  return [T_(e), t, T_(t)];
}
function ZL(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var s = n.mainAxis, i = s === void 0 ? !0 : s, l = n.altAxis, u = l === void 0 ? !0 : l, f = n.fallbackPlacements, h = n.padding, d = n.boundary, m = n.rootBoundary, v = n.altBoundary, g = n.flipVariations, w = g === void 0 ? !0 : g, E = n.allowedAutoPlacements, k = t.options.placement, b = sa(k), D = b === k, T = f || (D || !w ? [Ru(k)] : KL(k)), x = [k].concat(T).reduce(function(Se, nt) {
      return Se.concat(sa(nt) === tp ? qL(t, {
        placement: nt,
        boundary: d,
        rootBoundary: m,
        padding: h,
        flipVariations: w,
        allowedAutoPlacements: E
      }) : nt);
    }, []), C = t.rects.reference, M = t.rects.popper, I = /* @__PURE__ */ new Map(), R = !0, V = x[0], $ = 0; $ < x.length; $++) {
      var q = x[$], W = sa(q), se = no(q) === Qi, me = [Vn, kr].indexOf(W) >= 0, ce = me ? "width" : "height", ye = ml(t, {
        placement: q,
        boundary: d,
        rootBoundary: m,
        altBoundary: v,
        padding: h
      }), Ae = me ? se ? Tr : jn : se ? kr : Vn;
      C[ce] > M[ce] && (Ae = Ru(Ae));
      var Ue = Ru(Ae), Re = [];
      if (i && Re.push(ye[W] <= 0), u && Re.push(ye[Ae] <= 0, ye[Ue] <= 0), Re.every(function(Se) {
        return Se;
      })) {
        V = q, R = !1;
        break;
      }
      I.set(q, Re);
    }
    if (R)
      for (var re = w ? 3 : 1, Me = function(nt) {
        var le = x.find(function(pe) {
          var Oe = I.get(pe);
          if (Oe)
            return Oe.slice(0, nt).every(function(ge) {
              return ge;
            });
        });
        if (le)
          return V = le, "break";
      }, mt = re; mt > 0; mt--) {
        var At = Me(mt);
        if (At === "break")
          break;
      }
    t.placement !== V && (t.modifiersData[r]._skip = !0, t.placement = V, t.reset = !0);
  }
}
const XL = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: ZL,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function M_(e, t, n) {
  return n === void 0 && (n = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - n.y,
    right: e.right - t.width + n.x,
    bottom: e.bottom - t.height + n.y,
    left: e.left - t.width - n.x
  };
}
function C_(e) {
  return [Vn, Tr, kr, jn].some(function(t) {
    return e[t] >= 0;
  });
}
function JL(e) {
  var t = e.state, n = e.name, r = t.rects.reference, s = t.rects.popper, i = t.modifiersData.preventOverflow, l = ml(t, {
    elementContext: "reference"
  }), u = ml(t, {
    altBoundary: !0
  }), f = M_(l, r), h = M_(u, s, i), d = C_(f), m = C_(h);
  t.modifiersData[n] = {
    referenceClippingOffsets: f,
    popperEscapeOffsets: h,
    isReferenceHidden: d,
    hasPopperEscaped: m
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": d,
    "data-popper-escaped": m
  });
}
const QL = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: JL
};
function eR(e, t, n) {
  var r = sa(e), s = [jn, Vn].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, l = i[0], u = i[1];
  return l = l || 0, u = (u || 0) * s, [jn, Tr].indexOf(r) >= 0 ? {
    x: u,
    y: l
  } : {
    x: l,
    y: u
  };
}
function tR(e) {
  var t = e.state, n = e.options, r = e.name, s = n.offset, i = s === void 0 ? [0, 0] : s, l = N1.reduce(function(d, m) {
    return d[m] = eR(m, t.rects, i), d;
  }, {}), u = l[t.placement], f = u.x, h = u.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += f, t.modifiersData.popperOffsets.y += h), t.modifiersData[r] = l;
}
const nR = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: tR
};
function rR(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = W1({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const aR = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: rR,
  data: {}
};
function sR(e) {
  return e === "x" ? "y" : "x";
}
function iR(e) {
  var t = e.state, n = e.options, r = e.name, s = n.mainAxis, i = s === void 0 ? !0 : s, l = n.altAxis, u = l === void 0 ? !1 : l, f = n.boundary, h = n.rootBoundary, d = n.altBoundary, m = n.padding, v = n.tether, g = v === void 0 ? !0 : v, w = n.tetherOffset, E = w === void 0 ? 0 : w, k = ml(t, {
    boundary: f,
    rootBoundary: h,
    padding: m,
    altBoundary: d
  }), b = sa(t.placement), D = no(t.placement), T = !D, x = ap(b), C = sR(x), M = t.modifiersData.popperOffsets, I = t.rects.reference, R = t.rects.popper, V = typeof E == "function" ? E(Object.assign({}, t.rects, {
    placement: t.placement
  })) : E, $ = typeof V == "number" ? {
    mainAxis: V,
    altAxis: V
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, V), q = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, W = {
    x: 0,
    y: 0
  };
  if (M) {
    if (i) {
      var se, me = x === "y" ? Vn : jn, ce = x === "y" ? kr : Tr, ye = x === "y" ? "height" : "width", Ae = M[x], Ue = Ae + k[me], Re = Ae - k[ce], re = g ? -R[ye] / 2 : 0, Me = D === Qi ? I[ye] : R[ye], mt = D === Qi ? -R[ye] : -I[ye], At = t.elements.arrow, Se = g && At ? rp(At) : {
        width: 0,
        height: 0
      }, nt = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : L1(), le = nt[me], pe = nt[ce], Oe = rl(0, I[ye], Se[ye]), ge = T ? I[ye] / 2 - re - Oe - le - $.mainAxis : Me - Oe - le - $.mainAxis, ne = T ? -I[ye] / 2 + re + Oe + pe + $.mainAxis : mt + Oe + pe + $.mainAxis, be = t.elements.arrow && Tl(t.elements.arrow), Be = be ? x === "y" ? be.clientTop || 0 : be.clientLeft || 0 : 0, N = (se = q == null ? void 0 : q[x]) != null ? se : 0, A = Ae + ge - N - Be, G = Ae + ne - N, he = rl(g ? Qu(Ue, A) : Ue, Ae, g ? Qs(Re, G) : Re);
      M[x] = he, W[x] = he - Ae;
    }
    if (u) {
      var Ee, qe = x === "x" ? Vn : jn, Ht = x === "x" ? kr : Tr, Ot = M[C], Vt = C === "y" ? "height" : "width", _n = Ot + k[qe], _t = Ot - k[Ht], Z = [Vn, jn].indexOf(b) !== -1, oe = (Ee = q == null ? void 0 : q[C]) != null ? Ee : 0, jt = Z ? _n : Ot - I[Vt] - R[Vt] - oe + $.altAxis, Mt = Z ? Ot + I[Vt] + R[Vt] - oe - $.altAxis : _t, pn = g && Z ? ML(jt, Ot, Mt) : rl(g ? jt : _n, Ot, g ? Mt : _t);
      M[C] = pn, W[C] = pn - Ot;
    }
    t.modifiersData[r] = W;
  }
}
const oR = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: iR,
  requiresIfExists: ["offset"]
};
function lR(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function uR(e) {
  return e === ir(e) || !Er(e) ? sp(e) : lR(e);
}
function cR(e) {
  var t = e.getBoundingClientRect(), n = eo(t.width) / e.offsetWidth || 1, r = eo(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function fR(e, t, n) {
  n === void 0 && (n = !1);
  var r = Er(t), s = Er(t) && cR(t), i = Ns(t), l = to(e, s, n), u = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((la(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  op(i)) && (u = uR(t)), Er(t) ? (f = to(t, !0), f.x += t.clientLeft, f.y += t.clientTop) : i && (f.x = ip(i))), {
    x: l.left + u.scrollLeft - f.x,
    y: l.top + u.scrollTop - f.y,
    width: l.width,
    height: l.height
  };
}
function dR(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(i) {
    t.set(i.name, i);
  });
  function s(i) {
    n.add(i.name);
    var l = [].concat(i.requires || [], i.requiresIfExists || []);
    l.forEach(function(u) {
      if (!n.has(u)) {
        var f = t.get(u);
        f && s(f);
      }
    }), r.push(i);
  }
  return e.forEach(function(i) {
    n.has(i.name) || s(i);
  }), r;
}
function hR(e) {
  var t = dR(e);
  return DL.reduce(function(n, r) {
    return n.concat(t.filter(function(s) {
      return s.phase === r;
    }));
  }, []);
}
function pR(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function mR(e) {
  var t = e.reduce(function(n, r) {
    var s = n[r.name];
    return n[r.name] = s ? Object.assign({}, s, r, {
      options: Object.assign({}, s.options, r.options),
      data: Object.assign({}, s.data, r.data)
    }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var P_ = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function N_() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function vR(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, s = t.defaultOptions, i = s === void 0 ? P_ : s;
  return function(u, f, h) {
    h === void 0 && (h = i);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, P_, i),
      modifiersData: {},
      elements: {
        reference: u,
        popper: f
      },
      attributes: {},
      styles: {}
    }, m = [], v = !1, g = {
      state: d,
      setOptions: function(b) {
        var D = typeof b == "function" ? b(d.options) : b;
        E(), d.options = Object.assign({}, i, d.options, D), d.scrollParents = {
          reference: ii(u) ? al(u) : u.contextElement ? al(u.contextElement) : [],
          popper: al(f)
        };
        var T = hR(mR([].concat(r, d.options.modifiers)));
        return d.orderedModifiers = T.filter(function(x) {
          return x.enabled;
        }), w(), g.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!v) {
          var b = d.elements, D = b.reference, T = b.popper;
          if (N_(D, T)) {
            d.rects = {
              reference: fR(D, Tl(T), d.options.strategy === "fixed"),
              popper: rp(T)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function($) {
              return d.modifiersData[$.name] = Object.assign({}, $.data);
            });
            for (var x = 0; x < d.orderedModifiers.length; x++) {
              if (d.reset === !0) {
                d.reset = !1, x = -1;
                continue;
              }
              var C = d.orderedModifiers[x], M = C.fn, I = C.options, R = I === void 0 ? {} : I, V = C.name;
              typeof M == "function" && (d = M({
                state: d,
                options: R,
                name: V,
                instance: g
              }) || d);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: pR(function() {
        return new Promise(function(k) {
          g.forceUpdate(), k(d);
        });
      }),
      destroy: function() {
        E(), v = !0;
      }
    };
    if (!N_(u, f))
      return g;
    g.setOptions(h).then(function(k) {
      !v && h.onFirstUpdate && h.onFirstUpdate(k);
    });
    function w() {
      d.orderedModifiers.forEach(function(k) {
        var b = k.name, D = k.options, T = D === void 0 ? {} : D, x = k.effect;
        if (typeof x == "function") {
          var C = x({
            state: d,
            name: b,
            instance: g,
            options: T
          }), M = function() {
          };
          m.push(C || M);
        }
      });
    }
    function E() {
      m.forEach(function(k) {
        return k();
      }), m = [];
    }
    return g;
  };
}
var gR = [WL, aR, FL, kL, nR, XL, oR, $L, QL], _R = /* @__PURE__ */ vR({
  defaultModifiers: gR
}), yR = Object.defineProperty, bR = (e, t, n) => t in e ? yR(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, $e = (e, t, n) => (bR(e, typeof t != "symbol" ? t + "" : t, n), n);
const qa = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
  return n;
}, wR = {}, ER = {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  viewBox: "0 0 24 24"
}, OR = /* @__PURE__ */ j("polyline", { points: "9 18 15 12 9 6" }, null, -1), DR = [
  OR
];
function xR(e, t) {
  return F(), z("svg", ER, DR);
}
const SR = /* @__PURE__ */ qa(wR, [["render", xR]]), kR = {}, TR = {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  viewBox: "0 0 24 24"
}, AR = /* @__PURE__ */ j("polyline", { points: "15 18 9 12 15 6" }, null, -1), MR = [
  AR
];
function CR(e, t) {
  return F(), z("svg", TR, MR);
}
const PR = /* @__PURE__ */ qa(kR, [["render", CR]]), NR = {}, $R = {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  viewBox: "0 0 24 24"
}, IR = /* @__PURE__ */ j("polyline", { points: "6 9 12 15 18 9" }, null, -1), LR = [
  IR
];
function RR(e, t) {
  return F(), z("svg", $R, LR);
}
const FR = /* @__PURE__ */ qa(NR, [["render", RR]]), YR = {}, WR = {
  fill: "none",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  viewBox: "0 0 24 24"
}, UR = /* @__PURE__ */ j("path", { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" }, null, -1), BR = [
  UR
];
function HR(e, t) {
  return F(), z("svg", WR, BR);
}
const VR = /* @__PURE__ */ qa(YR, [["render", HR]]), jR = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IconChevronDown: FR,
  IconChevronLeft: PR,
  IconChevronRight: SR,
  IconClock: VR
}, Symbol.toStringTag, { value: "Module" })), ro = /* @__PURE__ */ Le({
  __name: "BaseIcon",
  props: {
    name: { type: String, required: !0 },
    width: { type: String },
    height: { type: String },
    size: { type: String, default: "26" },
    viewBox: { type: String }
  },
  setup(e) {
    const t = e, n = Y(() => t.width || t.size), r = Y(() => t.height || t.size), s = Y(() => jR[`Icon${t.name}`]);
    return (i, l) => (F(), tt(xc(y(s)), {
      width: y(n),
      height: y(r),
      class: "vc-base-icon"
    }, null, 8, ["width", "height"]));
  }
});
function U1() {
  return typeof window < "u";
}
function GR(e) {
  return U1() && e in window;
}
function zR(e) {
  const t = J(!1), n = Y(() => t.value ? "dark" : "light");
  let r, s;
  function i(g) {
    t.value = g.matches;
  }
  function l() {
    GR("matchMedia") && (r = window.matchMedia("(prefers-color-scheme: dark)"), r.addEventListener("change", i), t.value = r.matches);
  }
  function u() {
    const { selector: g = ":root", darkClass: w = "dark" } = e.value, E = document.querySelector(g);
    t.value = E.classList.contains(w);
  }
  function f(g) {
    const { selector: w = ":root", darkClass: E = "dark" } = g;
    if (U1() && w && E) {
      const k = document.querySelector(w);
      k && (s = new MutationObserver(u), s.observe(k, {
        attributes: !0,
        attributeFilter: ["class"]
      }), t.value = k.classList.contains(E));
    }
  }
  function h() {
    m();
    const g = typeof e.value;
    g === "string" && e.value.toLowerCase() === "system" ? l() : g === "object" ? f(e.value) : t.value = !!e.value;
  }
  const d = ze(() => e.value, () => h(), {
    immediate: !0
  });
  function m() {
    r && (r.removeEventListener("change", i), r = void 0), s && (s.disconnect(), s = void 0);
  }
  function v() {
    m(), d();
  }
  return Cs(() => v()), {
    isDark: t,
    displayMode: n,
    cleanup: v
  };
}
var Pu = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function qR(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var KR = typeof Pu == "object" && Pu && Pu.Object === Object && Pu, B1 = KR, ZR = B1, XR = typeof self == "object" && self && self.Object === Object && self, JR = ZR || XR || Function("return this")(), ha = JR, QR = ha, eF = QR.Symbol, $c = eF, $_ = $c, H1 = Object.prototype, tF = H1.hasOwnProperty, nF = H1.toString, Go = $_ ? $_.toStringTag : void 0;
function rF(e) {
  var t = tF.call(e, Go), n = e[Go];
  try {
    e[Go] = void 0;
    var r = !0;
  } catch {
  }
  var s = nF.call(e);
  return r && (t ? e[Go] = n : delete e[Go]), s;
}
var aF = rF, sF = Object.prototype, iF = sF.toString;
function oF(e) {
  return iF.call(e);
}
var lF = oF, I_ = $c, uF = aF, cF = lF, fF = "[object Null]", dF = "[object Undefined]", L_ = I_ ? I_.toStringTag : void 0;
function hF(e) {
  return e == null ? e === void 0 ? dF : fF : L_ && L_ in Object(e) ? uF(e) : cF(e);
}
var pa = hF;
function pF(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Ka = pF, mF = pa, vF = Ka, gF = "[object AsyncFunction]", _F = "[object Function]", yF = "[object GeneratorFunction]", bF = "[object Proxy]";
function wF(e) {
  if (!vF(e))
    return !1;
  var t = mF(e);
  return t == _F || t == yF || t == gF || t == bF;
}
var ci = wF, EF = Array.isArray, Gr = EF;
function OF(e) {
  return e != null && typeof e == "object";
}
var zr = OF, DF = pa, xF = Gr, SF = zr, kF = "[object String]";
function TF(e) {
  return typeof e == "string" || !xF(e) && SF(e) && DF(e) == kF;
}
var ta = TF, AF = pa, MF = zr, CF = "[object Boolean]";
function PF(e) {
  return e === !0 || e === !1 || MF(e) && AF(e) == CF;
}
var NF = PF, $F = pa, IF = zr, LF = "[object Number]";
function RF(e) {
  return typeof e == "number" || IF(e) && $F(e) == LF;
}
var Ur = RF, FF = pa, YF = zr, WF = "[object Date]";
function UF(e) {
  return YF(e) && FF(e) == WF;
}
var BF = UF;
function HF(e) {
  return function(t) {
    return e(t);
  };
}
var V1 = HF, vl = {}, VF = {
  get exports() {
    return vl;
  },
  set exports(e) {
    vl = e;
  }
};
(function(e, t) {
  var n = B1, r = t && !t.nodeType && t, s = r && !0 && e && !e.nodeType && e, i = s && s.exports === r, l = i && n.process, u = function() {
    try {
      var f = s && s.require && s.require("util").types;
      return f || l && l.binding && l.binding("util");
    } catch {
    }
  }();
  e.exports = u;
})(VF, vl);
var jF = BF, GF = V1, R_ = vl, F_ = R_ && R_.isDate, zF = F_ ? GF(F_) : jF, qF = zF, KF = pa, ZF = zr, XF = "[object Symbol]";
function JF(e) {
  return typeof e == "symbol" || ZF(e) && KF(e) == XF;
}
var lp = JF, QF = Gr, e4 = lp, t4 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, n4 = /^\w*$/;
function r4(e, t) {
  if (QF(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || e4(e) ? !0 : n4.test(e) || !t4.test(e) || t != null && e in Object(t);
}
var up = r4, a4 = ha, s4 = a4["__core-js_shared__"], i4 = s4, xd = i4, Y_ = function() {
  var e = /[^.]+$/.exec(xd && xd.keys && xd.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function o4(e) {
  return !!Y_ && Y_ in e;
}
var l4 = o4, u4 = Function.prototype, c4 = u4.toString;
function f4(e) {
  if (e != null) {
    try {
      return c4.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var j1 = f4, d4 = ci, h4 = l4, p4 = Ka, m4 = j1, v4 = /[\\^$.*+?()[\]{}|]/g, g4 = /^\[object .+?Constructor\]$/, _4 = Function.prototype, y4 = Object.prototype, b4 = _4.toString, w4 = y4.hasOwnProperty, E4 = RegExp(
  "^" + b4.call(w4).replace(v4, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function O4(e) {
  if (!p4(e) || h4(e))
    return !1;
  var t = d4(e) ? E4 : g4;
  return t.test(m4(e));
}
var D4 = O4;
function x4(e, t) {
  return e == null ? void 0 : e[t];
}
var S4 = x4, k4 = D4, T4 = S4;
function A4(e, t) {
  var n = T4(e, t);
  return k4(n) ? n : void 0;
}
var fi = A4, M4 = fi, C4 = M4(Object, "create"), Ic = C4, W_ = Ic;
function P4() {
  this.__data__ = W_ ? W_(null) : {}, this.size = 0;
}
var N4 = P4;
function $4(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var I4 = $4, L4 = Ic, R4 = "__lodash_hash_undefined__", F4 = Object.prototype, Y4 = F4.hasOwnProperty;
function W4(e) {
  var t = this.__data__;
  if (L4) {
    var n = t[e];
    return n === R4 ? void 0 : n;
  }
  return Y4.call(t, e) ? t[e] : void 0;
}
var U4 = W4, B4 = Ic, H4 = Object.prototype, V4 = H4.hasOwnProperty;
function j4(e) {
  var t = this.__data__;
  return B4 ? t[e] !== void 0 : V4.call(t, e);
}
var G4 = j4, z4 = Ic, q4 = "__lodash_hash_undefined__";
function K4(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = z4 && t === void 0 ? q4 : t, this;
}
var Z4 = K4, X4 = N4, J4 = I4, Q4 = U4, e8 = G4, t8 = Z4;
function po(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
po.prototype.clear = X4;
po.prototype.delete = J4;
po.prototype.get = Q4;
po.prototype.has = e8;
po.prototype.set = t8;
var n8 = po;
function r8() {
  this.__data__ = [], this.size = 0;
}
var a8 = r8;
function s8(e, t) {
  return e === t || e !== e && t !== t;
}
var mo = s8, i8 = mo;
function o8(e, t) {
  for (var n = e.length; n--; )
    if (i8(e[n][0], t))
      return n;
  return -1;
}
var Lc = o8, l8 = Lc, u8 = Array.prototype, c8 = u8.splice;
function f8(e) {
  var t = this.__data__, n = l8(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : c8.call(t, n, 1), --this.size, !0;
}
var d8 = f8, h8 = Lc;
function p8(e) {
  var t = this.__data__, n = h8(t, e);
  return n < 0 ? void 0 : t[n][1];
}
var m8 = p8, v8 = Lc;
function g8(e) {
  return v8(this.__data__, e) > -1;
}
var _8 = g8, y8 = Lc;
function b8(e, t) {
  var n = this.__data__, r = y8(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
var w8 = b8, E8 = a8, O8 = d8, D8 = m8, x8 = _8, S8 = w8;
function vo(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
vo.prototype.clear = E8;
vo.prototype.delete = O8;
vo.prototype.get = D8;
vo.prototype.has = x8;
vo.prototype.set = S8;
var Rc = vo, k8 = fi, T8 = ha, A8 = k8(T8, "Map"), cp = A8, U_ = n8, M8 = Rc, C8 = cp;
function P8() {
  this.size = 0, this.__data__ = {
    hash: new U_(),
    map: new (C8 || M8)(),
    string: new U_()
  };
}
var N8 = P8;
function $8(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var I8 = $8, L8 = I8;
function R8(e, t) {
  var n = e.__data__;
  return L8(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
var Fc = R8, F8 = Fc;
function Y8(e) {
  var t = F8(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var W8 = Y8, U8 = Fc;
function B8(e) {
  return U8(this, e).get(e);
}
var H8 = B8, V8 = Fc;
function j8(e) {
  return V8(this, e).has(e);
}
var G8 = j8, z8 = Fc;
function q8(e, t) {
  var n = z8(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
var K8 = q8, Z8 = N8, X8 = W8, J8 = H8, Q8 = G8, eY = K8;
function go(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
go.prototype.clear = Z8;
go.prototype.delete = X8;
go.prototype.get = J8;
go.prototype.has = Q8;
go.prototype.set = eY;
var fp = go, G1 = fp, tY = "Expected a function";
function dp(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(tY);
  var n = function() {
    var r = arguments, s = t ? t.apply(this, r) : r[0], i = n.cache;
    if (i.has(s))
      return i.get(s);
    var l = e.apply(this, r);
    return n.cache = i.set(s, l) || i, l;
  };
  return n.cache = new (dp.Cache || G1)(), n;
}
dp.Cache = G1;
var nY = dp, rY = nY, aY = 500;
function sY(e) {
  var t = rY(e, function(r) {
    return n.size === aY && n.clear(), r;
  }), n = t.cache;
  return t;
}
var iY = sY, oY = iY, lY = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, uY = /\\(\\)?/g, cY = oY(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(lY, function(n, r, s, i) {
    t.push(s ? i.replace(uY, "$1") : r || n);
  }), t;
}), fY = cY;
function dY(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, s = Array(r); ++n < r; )
    s[n] = t(e[n], n, e);
  return s;
}
var hY = dY, B_ = $c, pY = hY, mY = Gr, vY = lp, gY = 1 / 0, H_ = B_ ? B_.prototype : void 0, V_ = H_ ? H_.toString : void 0;
function z1(e) {
  if (typeof e == "string")
    return e;
  if (mY(e))
    return pY(e, z1) + "";
  if (vY(e))
    return V_ ? V_.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -gY ? "-0" : t;
}
var _Y = z1, yY = _Y;
function bY(e) {
  return e == null ? "" : yY(e);
}
var wY = bY, EY = Gr, OY = up, DY = fY, xY = wY;
function SY(e, t) {
  return EY(e) ? e : OY(e, t) ? [e] : DY(xY(e));
}
var q1 = SY, kY = lp, TY = 1 / 0;
function AY(e) {
  if (typeof e == "string" || kY(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -TY ? "-0" : t;
}
var Yc = AY, MY = q1, CY = Yc;
function PY(e, t) {
  t = MY(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[CY(t[n++])];
  return n && n == r ? e : void 0;
}
var K1 = PY, NY = K1;
function $Y(e, t, n) {
  var r = e == null ? void 0 : NY(e, t);
  return r === void 0 ? n : r;
}
var Zs = $Y, IY = fi, LY = function() {
  try {
    var e = IY(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Z1 = LY, j_ = Z1;
function RY(e, t, n) {
  t == "__proto__" && j_ ? j_(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
var Wc = RY, FY = Wc, YY = mo, WY = Object.prototype, UY = WY.hasOwnProperty;
function BY(e, t, n) {
  var r = e[t];
  (!(UY.call(e, t) && YY(r, n)) || n === void 0 && !(t in e)) && FY(e, t, n);
}
var HY = BY, VY = 9007199254740991, jY = /^(?:0|[1-9]\d*)$/;
function GY(e, t) {
  var n = typeof e;
  return t = t ?? VY, !!t && (n == "number" || n != "symbol" && jY.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var hp = GY;
function zY(e) {
  return function(t, n, r) {
    for (var s = -1, i = Object(t), l = r(t), u = l.length; u--; ) {
      var f = l[e ? u : ++s];
      if (n(i[f], f, i) === !1)
        break;
    }
    return t;
  };
}
var qY = zY, KY = qY, ZY = KY(), X1 = ZY;
function XY(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var JY = XY, QY = pa, e6 = zr, t6 = "[object Arguments]";
function n6(e) {
  return e6(e) && QY(e) == t6;
}
var r6 = n6, G_ = r6, a6 = zr, J1 = Object.prototype, s6 = J1.hasOwnProperty, i6 = J1.propertyIsEnumerable, o6 = G_(function() {
  return arguments;
}()) ? G_ : function(e) {
  return a6(e) && s6.call(e, "callee") && !i6.call(e, "callee");
}, pp = o6, ao = {}, l6 = {
  get exports() {
    return ao;
  },
  set exports(e) {
    ao = e;
  }
};
function u6() {
  return !1;
}
var c6 = u6;
(function(e, t) {
  var n = ha, r = c6, s = t && !t.nodeType && t, i = s && !0 && e && !e.nodeType && e, l = i && i.exports === s, u = l ? n.Buffer : void 0, f = u ? u.isBuffer : void 0, h = f || r;
  e.exports = h;
})(l6, ao);
var f6 = 9007199254740991;
function d6(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= f6;
}
var mp = d6, h6 = pa, p6 = mp, m6 = zr, v6 = "[object Arguments]", g6 = "[object Array]", _6 = "[object Boolean]", y6 = "[object Date]", b6 = "[object Error]", w6 = "[object Function]", E6 = "[object Map]", O6 = "[object Number]", D6 = "[object Object]", x6 = "[object RegExp]", S6 = "[object Set]", k6 = "[object String]", T6 = "[object WeakMap]", A6 = "[object ArrayBuffer]", M6 = "[object DataView]", C6 = "[object Float32Array]", P6 = "[object Float64Array]", N6 = "[object Int8Array]", $6 = "[object Int16Array]", I6 = "[object Int32Array]", L6 = "[object Uint8Array]", R6 = "[object Uint8ClampedArray]", F6 = "[object Uint16Array]", Y6 = "[object Uint32Array]", Wt = {};
Wt[C6] = Wt[P6] = Wt[N6] = Wt[$6] = Wt[I6] = Wt[L6] = Wt[R6] = Wt[F6] = Wt[Y6] = !0;
Wt[v6] = Wt[g6] = Wt[A6] = Wt[_6] = Wt[M6] = Wt[y6] = Wt[b6] = Wt[w6] = Wt[E6] = Wt[O6] = Wt[D6] = Wt[x6] = Wt[S6] = Wt[k6] = Wt[T6] = !1;
function W6(e) {
  return m6(e) && p6(e.length) && !!Wt[h6(e)];
}
var U6 = W6, B6 = U6, H6 = V1, z_ = vl, q_ = z_ && z_.isTypedArray, V6 = q_ ? H6(q_) : B6, vp = V6, j6 = JY, G6 = pp, z6 = Gr, q6 = ao, K6 = hp, Z6 = vp, X6 = Object.prototype, J6 = X6.hasOwnProperty;
function Q6(e, t) {
  var n = z6(e), r = !n && G6(e), s = !n && !r && q6(e), i = !n && !r && !s && Z6(e), l = n || r || s || i, u = l ? j6(e.length, String) : [], f = u.length;
  for (var h in e)
    (t || J6.call(e, h)) && !(l && // Safari 9 has enumerable `arguments.length` in strict mode.
    (h == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    s && (h == "offset" || h == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (h == "buffer" || h == "byteLength" || h == "byteOffset") || // Skip index properties.
    K6(h, f))) && u.push(h);
  return u;
}
var Q1 = Q6, e3 = Object.prototype;
function t3(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || e3;
  return e === n;
}
var gp = t3;
function n3(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var eb = n3, r3 = eb, a3 = r3(Object.keys, Object), s3 = a3, i3 = gp, o3 = s3, l3 = Object.prototype, u3 = l3.hasOwnProperty;
function c3(e) {
  if (!i3(e))
    return o3(e);
  var t = [];
  for (var n in Object(e))
    u3.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
var f3 = c3, d3 = ci, h3 = mp;
function p3(e) {
  return e != null && h3(e.length) && !d3(e);
}
var Al = p3, m3 = Q1, v3 = f3, g3 = Al;
function _3(e) {
  return g3(e) ? m3(e) : v3(e);
}
var _p = _3, y3 = X1, b3 = _p;
function w3(e, t) {
  return e && y3(e, t, b3);
}
var tb = w3, E3 = Rc;
function O3() {
  this.__data__ = new E3(), this.size = 0;
}
var D3 = O3;
function x3(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
var S3 = x3;
function k3(e) {
  return this.__data__.get(e);
}
var T3 = k3;
function A3(e) {
  return this.__data__.has(e);
}
var M3 = A3, C3 = Rc, P3 = cp, N3 = fp, $3 = 200;
function I3(e, t) {
  var n = this.__data__;
  if (n instanceof C3) {
    var r = n.__data__;
    if (!P3 || r.length < $3 - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new N3(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
var L3 = I3, R3 = Rc, F3 = D3, Y3 = S3, W3 = T3, U3 = M3, B3 = L3;
function _o(e) {
  var t = this.__data__ = new R3(e);
  this.size = t.size;
}
_o.prototype.clear = F3;
_o.prototype.delete = Y3;
_o.prototype.get = W3;
_o.prototype.has = U3;
_o.prototype.set = B3;
var yp = _o, H3 = "__lodash_hash_undefined__";
function V3(e) {
  return this.__data__.set(e, H3), this;
}
var j3 = V3;
function G3(e) {
  return this.__data__.has(e);
}
var z3 = G3, q3 = fp, K3 = j3, Z3 = z3;
function ec(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new q3(); ++t < n; )
    this.add(e[t]);
}
ec.prototype.add = ec.prototype.push = K3;
ec.prototype.has = Z3;
var X3 = ec;
function J3(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
var nb = J3;
function Q3(e, t) {
  return e.has(t);
}
var eW = Q3, tW = X3, nW = nb, rW = eW, aW = 1, sW = 2;
function iW(e, t, n, r, s, i) {
  var l = n & aW, u = e.length, f = t.length;
  if (u != f && !(l && f > u))
    return !1;
  var h = i.get(e), d = i.get(t);
  if (h && d)
    return h == t && d == e;
  var m = -1, v = !0, g = n & sW ? new tW() : void 0;
  for (i.set(e, t), i.set(t, e); ++m < u; ) {
    var w = e[m], E = t[m];
    if (r)
      var k = l ? r(E, w, m, t, e, i) : r(w, E, m, e, t, i);
    if (k !== void 0) {
      if (k)
        continue;
      v = !1;
      break;
    }
    if (g) {
      if (!nW(t, function(b, D) {
        if (!rW(g, D) && (w === b || s(w, b, n, r, i)))
          return g.push(D);
      })) {
        v = !1;
        break;
      }
    } else if (!(w === E || s(w, E, n, r, i))) {
      v = !1;
      break;
    }
  }
  return i.delete(e), i.delete(t), v;
}
var rb = iW, oW = ha, lW = oW.Uint8Array, ab = lW;
function uW(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, s) {
    n[++t] = [s, r];
  }), n;
}
var cW = uW;
function fW(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var dW = fW, K_ = $c, Z_ = ab, hW = mo, pW = rb, mW = cW, vW = dW, gW = 1, _W = 2, yW = "[object Boolean]", bW = "[object Date]", wW = "[object Error]", EW = "[object Map]", OW = "[object Number]", DW = "[object RegExp]", xW = "[object Set]", SW = "[object String]", kW = "[object Symbol]", TW = "[object ArrayBuffer]", AW = "[object DataView]", X_ = K_ ? K_.prototype : void 0, Sd = X_ ? X_.valueOf : void 0;
function MW(e, t, n, r, s, i, l) {
  switch (n) {
    case AW:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case TW:
      return !(e.byteLength != t.byteLength || !i(new Z_(e), new Z_(t)));
    case yW:
    case bW:
    case OW:
      return hW(+e, +t);
    case wW:
      return e.name == t.name && e.message == t.message;
    case DW:
    case SW:
      return e == t + "";
    case EW:
      var u = mW;
    case xW:
      var f = r & gW;
      if (u || (u = vW), e.size != t.size && !f)
        return !1;
      var h = l.get(e);
      if (h)
        return h == t;
      r |= _W, l.set(e, t);
      var d = pW(u(e), u(t), r, s, i, l);
      return l.delete(e), d;
    case kW:
      if (Sd)
        return Sd.call(e) == Sd.call(t);
  }
  return !1;
}
var CW = MW;
function PW(e, t) {
  for (var n = -1, r = t.length, s = e.length; ++n < r; )
    e[s + n] = t[n];
  return e;
}
var NW = PW, $W = NW, IW = Gr;
function LW(e, t, n) {
  var r = t(e);
  return IW(e) ? r : $W(r, n(e));
}
var RW = LW;
function FW(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, s = 0, i = []; ++n < r; ) {
    var l = e[n];
    t(l, n, e) && (i[s++] = l);
  }
  return i;
}
var YW = FW;
function WW() {
  return [];
}
var UW = WW, BW = YW, HW = UW, VW = Object.prototype, jW = VW.propertyIsEnumerable, J_ = Object.getOwnPropertySymbols, GW = J_ ? function(e) {
  return e == null ? [] : (e = Object(e), BW(J_(e), function(t) {
    return jW.call(e, t);
  }));
} : HW, zW = GW, qW = RW, KW = zW, ZW = _p;
function XW(e) {
  return qW(e, ZW, KW);
}
var JW = XW, Q_ = JW, QW = 1, eU = Object.prototype, tU = eU.hasOwnProperty;
function nU(e, t, n, r, s, i) {
  var l = n & QW, u = Q_(e), f = u.length, h = Q_(t), d = h.length;
  if (f != d && !l)
    return !1;
  for (var m = f; m--; ) {
    var v = u[m];
    if (!(l ? v in t : tU.call(t, v)))
      return !1;
  }
  var g = i.get(e), w = i.get(t);
  if (g && w)
    return g == t && w == e;
  var E = !0;
  i.set(e, t), i.set(t, e);
  for (var k = l; ++m < f; ) {
    v = u[m];
    var b = e[v], D = t[v];
    if (r)
      var T = l ? r(D, b, v, t, e, i) : r(b, D, v, e, t, i);
    if (!(T === void 0 ? b === D || s(b, D, n, r, i) : T)) {
      E = !1;
      break;
    }
    k || (k = v == "constructor");
  }
  if (E && !k) {
    var x = e.constructor, C = t.constructor;
    x != C && "constructor" in e && "constructor" in t && !(typeof x == "function" && x instanceof x && typeof C == "function" && C instanceof C) && (E = !1);
  }
  return i.delete(e), i.delete(t), E;
}
var rU = nU, aU = fi, sU = ha, iU = aU(sU, "DataView"), oU = iU, lU = fi, uU = ha, cU = lU(uU, "Promise"), fU = cU, dU = fi, hU = ha, pU = dU(hU, "Set"), mU = pU, vU = fi, gU = ha, _U = vU(gU, "WeakMap"), yU = _U, oh = oU, lh = cp, uh = fU, ch = mU, fh = yU, sb = pa, yo = j1, e0 = "[object Map]", bU = "[object Object]", t0 = "[object Promise]", n0 = "[object Set]", r0 = "[object WeakMap]", a0 = "[object DataView]", wU = yo(oh), EU = yo(lh), OU = yo(uh), DU = yo(ch), xU = yo(fh), js = sb;
(oh && js(new oh(new ArrayBuffer(1))) != a0 || lh && js(new lh()) != e0 || uh && js(uh.resolve()) != t0 || ch && js(new ch()) != n0 || fh && js(new fh()) != r0) && (js = function(e) {
  var t = sb(e), n = t == bU ? e.constructor : void 0, r = n ? yo(n) : "";
  if (r)
    switch (r) {
      case wU:
        return a0;
      case EU:
        return e0;
      case OU:
        return t0;
      case DU:
        return n0;
      case xU:
        return r0;
    }
  return t;
});
var SU = js, kd = yp, kU = rb, TU = CW, AU = rU, s0 = SU, i0 = Gr, o0 = ao, MU = vp, CU = 1, l0 = "[object Arguments]", u0 = "[object Array]", Nu = "[object Object]", PU = Object.prototype, c0 = PU.hasOwnProperty;
function NU(e, t, n, r, s, i) {
  var l = i0(e), u = i0(t), f = l ? u0 : s0(e), h = u ? u0 : s0(t);
  f = f == l0 ? Nu : f, h = h == l0 ? Nu : h;
  var d = f == Nu, m = h == Nu, v = f == h;
  if (v && o0(e)) {
    if (!o0(t))
      return !1;
    l = !0, d = !1;
  }
  if (v && !d)
    return i || (i = new kd()), l || MU(e) ? kU(e, t, n, r, s, i) : TU(e, t, f, n, r, s, i);
  if (!(n & CU)) {
    var g = d && c0.call(e, "__wrapped__"), w = m && c0.call(t, "__wrapped__");
    if (g || w) {
      var E = g ? e.value() : e, k = w ? t.value() : t;
      return i || (i = new kd()), s(E, k, n, r, i);
    }
  }
  return v ? (i || (i = new kd()), AU(e, t, n, r, s, i)) : !1;
}
var $U = NU, IU = $U, f0 = zr;
function ib(e, t, n, r, s) {
  return e === t ? !0 : e == null || t == null || !f0(e) && !f0(t) ? e !== e && t !== t : IU(e, t, n, r, ib, s);
}
var ob = ib, LU = yp, RU = ob, FU = 1, YU = 2;
function WU(e, t, n, r) {
  var s = n.length, i = s, l = !r;
  if (e == null)
    return !i;
  for (e = Object(e); s--; ) {
    var u = n[s];
    if (l && u[2] ? u[1] !== e[u[0]] : !(u[0] in e))
      return !1;
  }
  for (; ++s < i; ) {
    u = n[s];
    var f = u[0], h = e[f], d = u[1];
    if (l && u[2]) {
      if (h === void 0 && !(f in e))
        return !1;
    } else {
      var m = new LU();
      if (r)
        var v = r(h, d, f, e, t, m);
      if (!(v === void 0 ? RU(d, h, FU | YU, r, m) : v))
        return !1;
    }
  }
  return !0;
}
var UU = WU, BU = Ka;
function HU(e) {
  return e === e && !BU(e);
}
var lb = HU, VU = lb, jU = _p;
function GU(e) {
  for (var t = jU(e), n = t.length; n--; ) {
    var r = t[n], s = e[r];
    t[n] = [r, s, VU(s)];
  }
  return t;
}
var zU = GU;
function qU(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
var ub = qU, KU = UU, ZU = zU, XU = ub;
function JU(e) {
  var t = ZU(e);
  return t.length == 1 && t[0][2] ? XU(t[0][0], t[0][1]) : function(n) {
    return n === e || KU(n, e, t);
  };
}
var QU = JU;
function eB(e, t) {
  return e != null && t in Object(e);
}
var tB = eB, nB = q1, rB = pp, aB = Gr, sB = hp, iB = mp, oB = Yc;
function lB(e, t, n) {
  t = nB(t, e);
  for (var r = -1, s = t.length, i = !1; ++r < s; ) {
    var l = oB(t[r]);
    if (!(i = e != null && n(e, l)))
      break;
    e = e[l];
  }
  return i || ++r != s ? i : (s = e == null ? 0 : e.length, !!s && iB(s) && sB(l, s) && (aB(e) || rB(e)));
}
var cb = lB, uB = tB, cB = cb;
function fB(e, t) {
  return e != null && cB(e, t, uB);
}
var dB = fB, hB = ob, pB = Zs, mB = dB, vB = up, gB = lb, _B = ub, yB = Yc, bB = 1, wB = 2;
function EB(e, t) {
  return vB(e) && gB(t) ? _B(yB(e), t) : function(n) {
    var r = pB(n, e);
    return r === void 0 && r === t ? mB(n, e) : hB(t, r, bB | wB);
  };
}
var OB = EB;
function DB(e) {
  return e;
}
var bp = DB;
function xB(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var SB = xB, kB = K1;
function TB(e) {
  return function(t) {
    return kB(t, e);
  };
}
var AB = TB, MB = SB, CB = AB, PB = up, NB = Yc;
function $B(e) {
  return PB(e) ? MB(NB(e)) : CB(e);
}
var IB = $B, LB = QU, RB = OB, FB = bp, YB = Gr, WB = IB;
function UB(e) {
  return typeof e == "function" ? e : e == null ? FB : typeof e == "object" ? YB(e) ? RB(e[0], e[1]) : LB(e) : WB(e);
}
var fb = UB, BB = Wc, HB = tb, VB = fb;
function jB(e, t) {
  var n = {};
  return t = VB(t), HB(e, function(r, s, i) {
    BB(n, s, t(r, s, i));
  }), n;
}
var GB = jB;
function zB(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
var db = zB, qB = db, d0 = Math.max;
function KB(e, t, n) {
  return t = d0(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, s = -1, i = d0(r.length - t, 0), l = Array(i); ++s < i; )
      l[s] = r[t + s];
    s = -1;
    for (var u = Array(t + 1); ++s < t; )
      u[s] = r[s];
    return u[t] = n(l), qB(e, this, u);
  };
}
var ZB = KB;
function XB(e) {
  return function() {
    return e;
  };
}
var JB = XB, QB = JB, h0 = Z1, eH = bp, tH = h0 ? function(e, t) {
  return h0(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: QB(t),
    writable: !0
  });
} : eH, nH = tH, rH = 800, aH = 16, sH = Date.now;
function iH(e) {
  var t = 0, n = 0;
  return function() {
    var r = sH(), s = aH - (r - n);
    if (n = r, s > 0) {
      if (++t >= rH)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var oH = iH, lH = nH, uH = oH, cH = uH(lH), fH = cH, dH = bp, hH = ZB, pH = fH;
function mH(e, t) {
  return pH(hH(e, t, dH), e + "");
}
var wp = mH, vH = mo, gH = Al, _H = hp, yH = Ka;
function bH(e, t, n) {
  if (!yH(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? gH(n) && _H(t, n.length) : r == "string" && t in n) ? vH(n[t], e) : !1;
}
var Ep = bH;
function wH(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var EH = wH, OH = Ka, DH = gp, xH = EH, SH = Object.prototype, kH = SH.hasOwnProperty;
function TH(e) {
  if (!OH(e))
    return xH(e);
  var t = DH(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !kH.call(e, r)) || n.push(r);
  return n;
}
var AH = TH, MH = Q1, CH = AH, PH = Al;
function NH(e) {
  return PH(e) ? MH(e, !0) : CH(e);
}
var Op = NH, $H = wp, IH = mo, LH = Ep, RH = Op, hb = Object.prototype, FH = hb.hasOwnProperty, YH = $H(function(e, t) {
  e = Object(e);
  var n = -1, r = t.length, s = r > 2 ? t[2] : void 0;
  for (s && LH(t[0], t[1], s) && (r = 1); ++n < r; )
    for (var i = t[n], l = RH(i), u = -1, f = l.length; ++u < f; ) {
      var h = l[u], d = e[h];
      (d === void 0 || IH(d, hb[h]) && !FH.call(e, h)) && (e[h] = i[h]);
    }
  return e;
}), p0 = YH, WH = Wc, UH = mo;
function BH(e, t, n) {
  (n !== void 0 && !UH(e[t], n) || n === void 0 && !(t in e)) && WH(e, t, n);
}
var pb = BH, tc = {}, HH = {
  get exports() {
    return tc;
  },
  set exports(e) {
    tc = e;
  }
};
(function(e, t) {
  var n = ha, r = t && !t.nodeType && t, s = r && !0 && e && !e.nodeType && e, i = s && s.exports === r, l = i ? n.Buffer : void 0, u = l ? l.allocUnsafe : void 0;
  function f(h, d) {
    if (d)
      return h.slice();
    var m = h.length, v = u ? u(m) : new h.constructor(m);
    return h.copy(v), v;
  }
  e.exports = f;
})(HH, tc);
var m0 = ab;
function VH(e) {
  var t = new e.constructor(e.byteLength);
  return new m0(t).set(new m0(e)), t;
}
var jH = VH, GH = jH;
function zH(e, t) {
  var n = t ? GH(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var qH = zH;
function KH(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
var ZH = KH, XH = Ka, v0 = Object.create, JH = function() {
  function e() {
  }
  return function(t) {
    if (!XH(t))
      return {};
    if (v0)
      return v0(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}(), QH = JH, eV = eb, tV = eV(Object.getPrototypeOf, Object), mb = tV, nV = QH, rV = mb, aV = gp;
function sV(e) {
  return typeof e.constructor == "function" && !aV(e) ? nV(rV(e)) : {};
}
var iV = sV, oV = Al, lV = zr;
function uV(e) {
  return lV(e) && oV(e);
}
var cV = uV, fV = pa, dV = mb, hV = zr, pV = "[object Object]", mV = Function.prototype, vV = Object.prototype, vb = mV.toString, gV = vV.hasOwnProperty, _V = vb.call(Object);
function yV(e) {
  if (!hV(e) || fV(e) != pV)
    return !1;
  var t = dV(e);
  if (t === null)
    return !0;
  var n = gV.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && vb.call(n) == _V;
}
var bV = yV;
function wV(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
var gb = wV, EV = HY, OV = Wc;
function DV(e, t, n, r) {
  var s = !n;
  n || (n = {});
  for (var i = -1, l = t.length; ++i < l; ) {
    var u = t[i], f = r ? r(n[u], e[u], u, n, e) : void 0;
    f === void 0 && (f = e[u]), s ? OV(n, u, f) : EV(n, u, f);
  }
  return n;
}
var xV = DV, SV = xV, kV = Op;
function TV(e) {
  return SV(e, kV(e));
}
var AV = TV, g0 = pb, MV = tc, CV = qH, PV = ZH, NV = iV, _0 = pp, y0 = Gr, $V = cV, IV = ao, LV = ci, RV = Ka, FV = bV, YV = vp, b0 = gb, WV = AV;
function UV(e, t, n, r, s, i, l) {
  var u = b0(e, n), f = b0(t, n), h = l.get(f);
  if (h) {
    g0(e, n, h);
    return;
  }
  var d = i ? i(u, f, n + "", e, t, l) : void 0, m = d === void 0;
  if (m) {
    var v = y0(f), g = !v && IV(f), w = !v && !g && YV(f);
    d = f, v || g || w ? y0(u) ? d = u : $V(u) ? d = PV(u) : g ? (m = !1, d = MV(f, !0)) : w ? (m = !1, d = CV(f, !0)) : d = [] : FV(f) || _0(f) ? (d = u, _0(u) ? d = WV(u) : (!RV(u) || LV(u)) && (d = NV(f))) : m = !1;
  }
  m && (l.set(f, d), s(d, f, r, i, l), l.delete(f)), g0(e, n, d);
}
var BV = UV, HV = yp, VV = pb, jV = X1, GV = BV, zV = Ka, qV = Op, KV = gb;
function _b(e, t, n, r, s) {
  e !== t && jV(t, function(i, l) {
    if (s || (s = new HV()), zV(i))
      GV(e, t, l, n, _b, r, s);
    else {
      var u = r ? r(KV(e, l), i, l + "", e, t, s) : void 0;
      u === void 0 && (u = i), VV(e, l, u);
    }
  }, qV);
}
var yb = _b, ZV = yb, w0 = Ka;
function bb(e, t, n, r, s, i) {
  return w0(e) && w0(t) && (i.set(t, e), ZV(e, t, void 0, bb, i), i.delete(t)), e;
}
var XV = bb, JV = wp, QV = Ep;
function e5(e) {
  return JV(function(t, n) {
    var r = -1, s = n.length, i = s > 1 ? n[s - 1] : void 0, l = s > 2 ? n[2] : void 0;
    for (i = e.length > 3 && typeof i == "function" ? (s--, i) : void 0, l && QV(n[0], n[1], l) && (i = s < 3 ? void 0 : i, s = 1), t = Object(t); ++r < s; ) {
      var u = n[r];
      u && e(t, u, r, i);
    }
    return t;
  });
}
var t5 = e5, n5 = yb, r5 = t5, a5 = r5(function(e, t, n, r) {
  n5(e, t, n, r);
}), s5 = a5, i5 = db, o5 = wp, l5 = XV, u5 = s5, c5 = o5(function(e) {
  return e.push(void 0, l5), i5(u5, void 0, e);
}), gl = c5, f5 = Object.prototype, d5 = f5.hasOwnProperty;
function h5(e, t) {
  return e != null && d5.call(e, t);
}
var p5 = h5, m5 = p5, v5 = cb;
function g5(e, t) {
  return e != null && v5(e, t, m5);
}
var wb = g5, _5 = Al;
function y5(e, t) {
  return function(n, r) {
    if (n == null)
      return n;
    if (!_5(n))
      return e(n, r);
    for (var s = n.length, i = t ? s : -1, l = Object(n); (t ? i-- : ++i < s) && r(l[i], i, l) !== !1; )
      ;
    return n;
  };
}
var b5 = y5, w5 = tb, E5 = b5, O5 = E5(w5), D5 = O5;
function x5(e) {
  return e && e.length ? e[0] : void 0;
}
var Eb = x5;
function S5(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
var Yi = S5, k5 = D5;
function T5(e, t) {
  var n;
  return k5(e, function(r, s, i) {
    return n = t(r, s, i), !n;
  }), !!n;
}
var A5 = T5, M5 = nb, C5 = fb, P5 = A5, N5 = Gr, $5 = Ep;
function I5(e, t, n) {
  var r = N5(e) ? M5 : P5;
  return n && $5(e, t, n) && (t = void 0), r(e, C5(t));
}
var L5 = I5;
const R5 = (e) => Object.prototype.toString.call(e).slice(8, -1), Hi = (e) => qF(e) && !isNaN(e.getTime()), Va = (e) => R5(e) === "Object", Dp = wb, E0 = (e, t) => L5(t, (n) => wb(e, n)), Ct = (e, t, n = "0") => {
  for (e = e != null ? String(e) : "", t = t || 2; e.length < t; )
    e = `${n}${e}`;
  return e;
}, Or = (e) => Array.isArray(e), $a = (e) => Or(e) && e.length > 0, nc = (e) => e == null ? e ?? null : document && ta(e) ? document.querySelector(e) : e.$el ?? e, _s = (e, t, n, r = void 0) => {
  e.removeEventListener(t, n, r);
}, ys = (e, t, n, r = void 0) => (e.addEventListener(t, n, r), () => _s(e, t, n, r)), Fu = (e, t) => !!e && !!t && (e === t || e.contains(t)), $u = (e, t) => {
  (e.key === " " || e.key === "Enter") && (t(e), e.preventDefault());
}, Ob = (e, ...t) => {
  const n = {};
  let r;
  for (r in e)
    t.includes(r) || (n[r] = e[r]);
  return n;
}, Db = (e, t) => {
  const n = {};
  return t.forEach((r) => {
    r in e && (n[r] = e[r]);
  }), n;
};
function F5(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
const rc = () => {
  function e() {
    return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
  }
  return `${e() + e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`;
}, Y5 = ["base", "start", "end", "startEnd"], W5 = [
  "class",
  "wrapperClass",
  "contentClass",
  "style",
  "contentStyle",
  "color",
  "fillMode"
], U5 = { base: {}, start: {}, end: {} };
function xp(e, t, n = U5) {
  let r = e, s = {};
  t === !0 || ta(t) ? (r = ta(t) ? t : r, s = { ...n }) : Va(t) && (E0(t, Y5) ? s = { ...t } : s = {
    base: { ...t },
    start: { ...t },
    end: { ...t }
  });
  const i = gl(
    s,
    { start: s.startEnd, end: s.startEnd },
    n
  );
  return Object.entries(i).forEach(([l, u]) => {
    let f = r;
    u === !0 || ta(u) ? (f = ta(u) ? u : f, i[l] = { color: f }) : Va(u) && (E0(u, W5) ? i[l] = { ...u } : i[l] = {}), gl(i[l], { color: f });
  }), i;
}
class B5 {
  constructor() {
    $e(this, "type", "highlight");
  }
  normalizeConfig(t, n) {
    return xp(t, n, {
      base: { fillMode: "light" },
      start: { fillMode: "solid" },
      end: { fillMode: "solid" }
    });
  }
  prepareRender(t) {
    t.highlights = [], t.content || (t.content = []);
  }
  render({ data: t, onStart: n, onEnd: r }, s) {
    const { key: i, highlight: l } = t;
    if (!l)
      return;
    const { highlights: u } = s, { base: f, start: h, end: d } = l;
    n && r ? u.push({
      ...h,
      key: i,
      wrapperClass: `vc-day-layer vc-day-box-center-center vc-attr vc-${h.color}`,
      class: [`vc-highlight vc-highlight-bg-${h.fillMode}`, h.class],
      contentClass: [
        `vc-attr vc-highlight-content-${h.fillMode} vc-${h.color}`,
        h.contentClass
      ]
    }) : n ? (u.push({
      ...f,
      key: `${i}-base`,
      wrapperClass: `vc-day-layer vc-day-box-right-center vc-attr vc-${f.color}`,
      class: [
        `vc-highlight vc-highlight-base-start vc-highlight-bg-${f.fillMode}`,
        f.class
      ]
    }), u.push({
      ...h,
      key: i,
      wrapperClass: `vc-day-layer vc-day-box-center-center vc-attr vc-${h.color}`,
      class: [`vc-highlight vc-highlight-bg-${h.fillMode}`, h.class],
      contentClass: [
        `vc-attr vc-highlight-content-${h.fillMode} vc-${h.color}`,
        h.contentClass
      ]
    })) : r ? (u.push({
      ...f,
      key: `${i}-base`,
      wrapperClass: `vc-day-layer vc-day-box-left-center vc-attr vc-${f.color}`,
      class: [
        `vc-highlight vc-highlight-base-end vc-highlight-bg-${f.fillMode}`,
        f.class
      ]
    }), u.push({
      ...d,
      key: i,
      wrapperClass: `vc-day-layer vc-day-box-center-center vc-attr vc-${d.color}`,
      class: [`vc-highlight vc-highlight-bg-${d.fillMode}`, d.class],
      contentClass: [
        `vc-attr vc-highlight-content-${d.fillMode} vc-${d.color}`,
        d.contentClass
      ]
    })) : u.push({
      ...f,
      key: `${i}-middle`,
      wrapperClass: `vc-day-layer vc-day-box-center-center vc-attr vc-${f.color}`,
      class: [
        `vc-highlight vc-highlight-base-middle vc-highlight-bg-${f.fillMode}`,
        f.class
      ],
      contentClass: [
        `vc-attr vc-highlight-content-${f.fillMode} vc-${f.color}`,
        f.contentClass
      ]
    });
  }
}
class Sp {
  constructor(t, n) {
    $e(this, "type", ""), $e(this, "collectionType", ""), this.type = t, this.collectionType = n;
  }
  normalizeConfig(t, n) {
    return xp(t, n);
  }
  prepareRender(t) {
    t[this.collectionType] = [];
  }
  render({ data: t, onStart: n, onEnd: r }, s) {
    const { key: i } = t, l = t[this.type];
    if (!i || !l)
      return;
    const u = s[this.collectionType], { base: f, start: h, end: d } = l;
    n ? u.push({
      ...h,
      key: i,
      class: [
        `vc-${this.type} vc-${this.type}-start vc-${h.color} vc-attr`,
        h.class
      ]
    }) : r ? u.push({
      ...d,
      key: i,
      class: [
        `vc-${this.type} vc-${this.type}-end vc-${d.color} vc-attr`,
        d.class
      ]
    }) : u.push({
      ...f,
      key: i,
      class: [
        `vc-${this.type} vc-${this.type}-base vc-${f.color} vc-attr`,
        f.class
      ]
    });
  }
}
class H5 extends Sp {
  constructor() {
    super("content", "content");
  }
  normalizeConfig(t, n) {
    return xp("base", n);
  }
}
class V5 extends Sp {
  constructor() {
    super("dot", "dots");
  }
}
class j5 extends Sp {
  constructor() {
    super("bar", "bars");
  }
}
class G5 {
  constructor(t) {
    $e(this, "color"), $e(this, "renderers", [
      new H5(),
      new B5(),
      new V5(),
      new j5()
    ]), this.color = t;
  }
  normalizeGlyphs(t) {
    this.renderers.forEach((n) => {
      const r = n.type;
      t[r] != null && (t[r] = n.normalizeConfig(this.color, t[r]));
    });
  }
  prepareRender(t = {}) {
    return this.renderers.forEach((n) => {
      n.prepareRender(t);
    }), t;
  }
  render(t, n) {
    this.renderers.forEach((r) => {
      r.render(t, n);
    });
  }
}
const z5 = 300, q5 = 60, K5 = 80, Z5 = {
  maxSwipeTime: z5,
  minHorizontalSwipeDistance: q5,
  maxVerticalSwipeDistance: K5
}, X5 = "MMMM YYYY", J5 = "W", Q5 = "MMM", e9 = "h A", t9 = [
  "L",
  "YYYY-MM-DD",
  "YYYY/MM/DD"
], n9 = [
  "L h:mm A",
  "YYYY-MM-DD h:mm A",
  "YYYY/MM/DD h:mm A"
], r9 = [
  "L HH:mm",
  "YYYY-MM-DD HH:mm",
  "YYYY/MM/DD HH:mm"
], a9 = [
  "h:mm A"
], s9 = [
  "HH:mm"
], i9 = "WWW, MMM D, YYYY", o9 = [
  "L",
  "YYYY-MM-DD",
  "YYYY/MM/DD"
], l9 = "iso", u9 = "YYYY-MM-DDTHH:mm:ss.SSSZ", c9 = {
  title: X5,
  weekdays: J5,
  navMonths: Q5,
  hours: e9,
  input: t9,
  inputDateTime: n9,
  inputDateTime24hr: r9,
  inputTime: a9,
  inputTime24hr: s9,
  dayPopover: i9,
  data: o9,
  model: l9,
  iso: u9
}, ja = {
  // Arabic
  ar: { dow: 7, L: "D/‏M/‏YYYY" },
  // Bulgarian
  bg: { dow: 2, L: "D.MM.YYYY" },
  // Catalan
  ca: { dow: 2, L: "DD/MM/YYYY" },
  // Chinese (China)
  "zh-CN": { dow: 2, L: "YYYY/MM/DD" },
  // Chinese (Taiwan)
  "zh-TW": { dow: 1, L: "YYYY/MM/DD" },
  // Croatian
  hr: { dow: 2, L: "DD.MM.YYYY" },
  // Czech
  cs: { dow: 2, L: "DD.MM.YYYY" },
  // Danish
  da: { dow: 2, L: "DD.MM.YYYY" },
  // Dutch
  nl: { dow: 2, L: "DD-MM-YYYY" },
  // English (US)
  "en-US": { dow: 1, L: "MM/DD/YYYY" },
  // English (Australia)
  "en-AU": { dow: 2, L: "DD/MM/YYYY" },
  // English (Canada)
  "en-CA": { dow: 1, L: "YYYY-MM-DD" },
  // English (Great Britain)
  "en-GB": { dow: 2, L: "DD/MM/YYYY" },
  // English (Ireland)
  "en-IE": { dow: 2, L: "DD-MM-YYYY" },
  // English (New Zealand)
  "en-NZ": { dow: 2, L: "DD/MM/YYYY" },
  // English (South Africa)
  "en-ZA": { dow: 1, L: "YYYY/MM/DD" },
  // Esperanto
  eo: { dow: 2, L: "YYYY-MM-DD" },
  // Estonian
  et: { dow: 2, L: "DD.MM.YYYY" },
  // Finnish
  fi: { dow: 2, L: "DD.MM.YYYY" },
  // French
  fr: { dow: 2, L: "DD/MM/YYYY" },
  // French (Canada)
  "fr-CA": { dow: 1, L: "YYYY-MM-DD" },
  // French (Switzerland)
  "fr-CH": { dow: 2, L: "DD.MM.YYYY" },
  // German
  de: { dow: 2, L: "DD.MM.YYYY" },
  // Hebrew
  he: { dow: 1, L: "DD.MM.YYYY" },
  // Indonesian
  id: { dow: 2, L: "DD/MM/YYYY" },
  // Italian
  it: { dow: 2, L: "DD/MM/YYYY" },
  // Japanese
  ja: { dow: 1, L: "YYYY年M月D日" },
  // Korean
  ko: { dow: 1, L: "YYYY.MM.DD" },
  // Latvian
  lv: { dow: 2, L: "DD.MM.YYYY" },
  // Lithuanian
  lt: { dow: 2, L: "DD.MM.YYYY" },
  // Macedonian
  mk: { dow: 2, L: "D.MM.YYYY" },
  // Norwegian
  nb: { dow: 2, L: "D. MMMM YYYY" },
  nn: { dow: 2, L: "D. MMMM YYYY" },
  // Polish
  pl: { dow: 2, L: "DD.MM.YYYY" },
  // Portuguese
  pt: { dow: 2, L: "DD/MM/YYYY" },
  // Romanian
  ro: { dow: 2, L: "DD.MM.YYYY" },
  // Russian
  ru: { dow: 2, L: "DD.MM.YYYY" },
  // Slovak
  sk: { dow: 2, L: "DD.MM.YYYY" },
  // Spanish (Spain)
  "es-ES": { dow: 2, L: "DD/MM/YYYY" },
  // Spanish (Mexico)
  "es-MX": { dow: 2, L: "DD/MM/YYYY" },
  // Swedish
  sv: { dow: 2, L: "YYYY-MM-DD" },
  // Thai
  th: { dow: 1, L: "DD/MM/YYYY" },
  // Turkish
  tr: { dow: 2, L: "DD.MM.YYYY" },
  // Ukrainian
  uk: { dow: 2, L: "DD.MM.YYYY" },
  // Vietnam
  vi: { dow: 2, L: "DD/MM/YYYY" }
};
ja.en = ja["en-US"];
ja.es = ja["es-ES"];
ja.no = ja.nb;
ja.zh = ja["zh-CN"];
const f9 = Object.entries(ja).reduce(
  (e, [t, { dow: n, L: r }]) => (e[t] = {
    id: t,
    firstDayOfWeek: n,
    masks: { L: r }
  }, e),
  {}
), d9 = {
  componentPrefix: "V",
  color: "blue",
  isDark: !1,
  navVisibility: "click",
  titlePosition: "center",
  transition: "slide-h",
  touch: Z5,
  masks: c9,
  locales: f9,
  datePicker: {
    updateOnInput: !0,
    inputDebounce: 1e3,
    popover: {
      visibility: "hover-focus",
      placement: "bottom-start",
      isInteractive: !0
    }
  }
}, dh = El(d9), h9 = Y(() => GB(dh.locales, (e) => (e.masks = gl(e.masks, dh.masks), e))), Ms = (e) => typeof window < "u" && Dp(window.__vcalendar__, e) ? Zs(window.__vcalendar__, e) : Zs(dh, e);
var ac = {}, p9 = {
  get exports() {
    return ac;
  },
  set exports(e) {
    ac = e;
  }
}, sc = {}, m9 = {
  get exports() {
    return sc;
  },
  set exports(e) {
    sc = e;
  }
};
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  function n(r) {
    if (r === null || r === !0 || r === !1)
      return NaN;
    var s = Number(r);
    return isNaN(s) ? s : s < 0 ? Math.ceil(s) : Math.floor(s);
  }
  e.exports = t.default;
})(m9, sc);
var ic = {}, v9 = {
  get exports() {
    return ic;
  },
  set exports(e) {
    ic = e;
  }
};
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  function n(r) {
    var s = new Date(Date.UTC(r.getFullYear(), r.getMonth(), r.getDate(), r.getHours(), r.getMinutes(), r.getSeconds(), r.getMilliseconds()));
    return s.setUTCFullYear(r.getFullYear()), r.getTime() - s.getTime();
  }
  e.exports = t.default;
})(v9, ic);
var oc = {}, g9 = {
  get exports() {
    return oc;
  },
  set exports(e) {
    oc = e;
  }
}, lc = {}, _9 = {
  get exports() {
    return lc;
  },
  set exports(e) {
    lc = e;
  }
};
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  function n(f, h) {
    var d = u(h);
    return d.formatToParts ? s(d, f) : i(d, f);
  }
  var r = {
    year: 0,
    month: 1,
    day: 2,
    hour: 3,
    minute: 4,
    second: 5
  };
  function s(f, h) {
    try {
      for (var d = f.formatToParts(h), m = [], v = 0; v < d.length; v++) {
        var g = r[d[v].type];
        g >= 0 && (m[g] = parseInt(d[v].value, 10));
      }
      return m;
    } catch (w) {
      if (w instanceof RangeError)
        return [NaN];
      throw w;
    }
  }
  function i(f, h) {
    var d = f.format(h).replace(/\u200E/g, ""), m = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(d);
    return [m[3], m[1], m[2], m[4], m[5], m[6]];
  }
  var l = {};
  function u(f) {
    if (!l[f]) {
      var h = new Intl.DateTimeFormat("en-US", {
        hour12: !1,
        timeZone: "America/New_York",
        year: "numeric",
        month: "numeric",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      }).format(/* @__PURE__ */ new Date("2014-06-25T04:00:00.123Z")), d = h === "06/25/2014, 00:00:00" || h === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
      l[f] = d ? new Intl.DateTimeFormat("en-US", {
        hour12: !1,
        timeZone: f,
        year: "numeric",
        month: "numeric",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      }) : new Intl.DateTimeFormat("en-US", {
        hourCycle: "h23",
        timeZone: f,
        year: "numeric",
        month: "numeric",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      });
    }
    return l[f];
  }
  e.exports = t.default;
})(_9, lc);
var uc = {}, y9 = {
  get exports() {
    return uc;
  },
  set exports(e) {
    uc = e;
  }
};
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  function n(r, s, i, l, u, f, h) {
    var d = /* @__PURE__ */ new Date(0);
    return d.setUTCFullYear(r, s, i), d.setUTCHours(l, u, f, h), d;
  }
  e.exports = t.default;
})(y9, uc);
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = f;
  var n = s(lc), r = s(uc);
  function s(E) {
    return E && E.__esModule ? E : { default: E };
  }
  var i = 36e5, l = 6e4, u = {
    timezone: /([Z+-].*)$/,
    timezoneZ: /^(Z)$/,
    timezoneHH: /^([+-]\d{2})$/,
    timezoneHHMM: /^([+-]\d{2}):?(\d{2})$/
  };
  function f(E, k, b) {
    var D, T;
    if (!E || (D = u.timezoneZ.exec(E), D))
      return 0;
    var x;
    if (D = u.timezoneHH.exec(E), D)
      return x = parseInt(D[1], 10), v(x) ? -(x * i) : NaN;
    if (D = u.timezoneHHMM.exec(E), D) {
      x = parseInt(D[1], 10);
      var C = parseInt(D[2], 10);
      return v(x, C) ? (T = Math.abs(x) * i + C * l, x > 0 ? -T : T) : NaN;
    }
    if (w(E)) {
      k = new Date(k || Date.now());
      var M = b ? k : h(k), I = d(M, E), R = b ? I : m(k, I, E);
      return -R;
    }
    return NaN;
  }
  function h(E) {
    return (0, r.default)(E.getFullYear(), E.getMonth(), E.getDate(), E.getHours(), E.getMinutes(), E.getSeconds(), E.getMilliseconds());
  }
  function d(E, k) {
    var b = (0, n.default)(E, k), D = (0, r.default)(b[0], b[1] - 1, b[2], b[3] % 24, b[4], b[5], 0).getTime(), T = E.getTime(), x = T % 1e3;
    return T -= x >= 0 ? x : 1e3 + x, D - T;
  }
  function m(E, k, b) {
    var D = E.getTime(), T = D - k, x = d(new Date(T), b);
    if (k === x)
      return k;
    T -= x - k;
    var C = d(new Date(T), b);
    return x === C ? x : Math.max(x, C);
  }
  function v(E, k) {
    return -23 <= E && E <= 23 && (k == null || 0 <= k && k <= 59);
  }
  var g = {};
  function w(E) {
    if (g[E])
      return !0;
    try {
      return new Intl.DateTimeFormat(void 0, {
        timeZone: E
      }), g[E] = !0, !0;
    } catch {
      return !1;
    }
  }
  e.exports = t.default;
})(g9, oc);
var cc = {}, b9 = {
  get exports() {
    return cc;
  },
  set exports(e) {
    cc = e;
  }
};
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = void 0;
  var n = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/, r = n;
  t.default = r, e.exports = t.default;
})(b9, cc);
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = m;
  var n = l(sc), r = l(ic), s = l(oc), i = l(cc);
  function l(R) {
    return R && R.__esModule ? R : { default: R };
  }
  var u = 36e5, f = 6e4, h = 2, d = {
    dateTimePattern: /^([0-9W+-]+)(T| )(.*)/,
    datePattern: /^([0-9W+-]+)(.*)/,
    plainTime: /:/,
    // year tokens
    YY: /^(\d{2})$/,
    YYY: [
      /^([+-]\d{2})$/,
      // 0 additional digits
      /^([+-]\d{3})$/,
      // 1 additional digit
      /^([+-]\d{4})$/
      // 2 additional digits
    ],
    YYYY: /^(\d{4})/,
    YYYYY: [
      /^([+-]\d{4})/,
      // 0 additional digits
      /^([+-]\d{5})/,
      // 1 additional digit
      /^([+-]\d{6})/
      // 2 additional digits
    ],
    // date tokens
    MM: /^-(\d{2})$/,
    DDD: /^-?(\d{3})$/,
    MMDD: /^-?(\d{2})-?(\d{2})$/,
    Www: /^-?W(\d{2})$/,
    WwwD: /^-?W(\d{2})-?(\d{1})$/,
    HH: /^(\d{2}([.,]\d*)?)$/,
    HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
    HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
    // time zone tokens (to identify the presence of a tz)
    timeZone: i.default
  };
  function m(R, V) {
    if (arguments.length < 1)
      throw new TypeError("1 argument required, but only " + arguments.length + " present");
    if (R === null)
      return /* @__PURE__ */ new Date(NaN);
    var $ = V || {}, q = $.additionalDigits == null ? h : (0, n.default)($.additionalDigits);
    if (q !== 2 && q !== 1 && q !== 0)
      throw new RangeError("additionalDigits must be 0, 1 or 2");
    if (R instanceof Date || typeof R == "object" && Object.prototype.toString.call(R) === "[object Date]")
      return new Date(R.getTime());
    if (typeof R == "number" || Object.prototype.toString.call(R) === "[object Number]")
      return new Date(R);
    if (!(typeof R == "string" || Object.prototype.toString.call(R) === "[object String]"))
      return /* @__PURE__ */ new Date(NaN);
    var W = v(R), se = g(W.date, q), me = se.year, ce = se.restDateString, ye = w(ce, me);
    if (isNaN(ye))
      return /* @__PURE__ */ new Date(NaN);
    if (ye) {
      var Ae = ye.getTime(), Ue = 0, Re;
      if (W.time && (Ue = E(W.time), isNaN(Ue)))
        return /* @__PURE__ */ new Date(NaN);
      if (W.timeZone || $.timeZone) {
        if (Re = (0, s.default)(W.timeZone || $.timeZone, new Date(Ae + Ue)), isNaN(Re))
          return /* @__PURE__ */ new Date(NaN);
      } else
        Re = (0, r.default)(new Date(Ae + Ue)), Re = (0, r.default)(new Date(Ae + Ue + Re));
      return new Date(Ae + Ue + Re);
    } else
      return /* @__PURE__ */ new Date(NaN);
  }
  function v(R) {
    var V = {}, $ = d.dateTimePattern.exec(R), q;
    if ($ ? (V.date = $[1], q = $[3]) : ($ = d.datePattern.exec(R), $ ? (V.date = $[1], q = $[2]) : (V.date = null, q = R)), q) {
      var W = d.timeZone.exec(q);
      W ? (V.time = q.replace(W[1], ""), V.timeZone = W[1].trim()) : V.time = q;
    }
    return V;
  }
  function g(R, V) {
    var $ = d.YYY[V], q = d.YYYYY[V], W;
    if (W = d.YYYY.exec(R) || q.exec(R), W) {
      var se = W[1];
      return {
        year: parseInt(se, 10),
        restDateString: R.slice(se.length)
      };
    }
    if (W = d.YY.exec(R) || $.exec(R), W) {
      var me = W[1];
      return {
        year: parseInt(me, 10) * 100,
        restDateString: R.slice(me.length)
      };
    }
    return {
      year: null
    };
  }
  function w(R, V) {
    if (V === null)
      return null;
    var $, q, W, se;
    if (R.length === 0)
      return q = /* @__PURE__ */ new Date(0), q.setUTCFullYear(V), q;
    if ($ = d.MM.exec(R), $)
      return q = /* @__PURE__ */ new Date(0), W = parseInt($[1], 10) - 1, x(V, W) ? (q.setUTCFullYear(V, W), q) : /* @__PURE__ */ new Date(NaN);
    if ($ = d.DDD.exec(R), $) {
      q = /* @__PURE__ */ new Date(0);
      var me = parseInt($[1], 10);
      return C(V, me) ? (q.setUTCFullYear(V, 0, me), q) : /* @__PURE__ */ new Date(NaN);
    }
    if ($ = d.MMDD.exec(R), $) {
      q = /* @__PURE__ */ new Date(0), W = parseInt($[1], 10) - 1;
      var ce = parseInt($[2], 10);
      return x(V, W, ce) ? (q.setUTCFullYear(V, W, ce), q) : /* @__PURE__ */ new Date(NaN);
    }
    if ($ = d.Www.exec(R), $)
      return se = parseInt($[1], 10) - 1, M(V, se) ? k(V, se) : /* @__PURE__ */ new Date(NaN);
    if ($ = d.WwwD.exec(R), $) {
      se = parseInt($[1], 10) - 1;
      var ye = parseInt($[2], 10) - 1;
      return M(V, se, ye) ? k(V, se, ye) : /* @__PURE__ */ new Date(NaN);
    }
    return null;
  }
  function E(R) {
    var V, $, q;
    if (V = d.HH.exec(R), V)
      return $ = parseFloat(V[1].replace(",", ".")), I($) ? $ % 24 * u : NaN;
    if (V = d.HHMM.exec(R), V)
      return $ = parseInt(V[1], 10), q = parseFloat(V[2].replace(",", ".")), I($, q) ? $ % 24 * u + q * f : NaN;
    if (V = d.HHMMSS.exec(R), V) {
      $ = parseInt(V[1], 10), q = parseInt(V[2], 10);
      var W = parseFloat(V[3].replace(",", "."));
      return I($, q, W) ? $ % 24 * u + q * f + W * 1e3 : NaN;
    }
    return null;
  }
  function k(R, V, $) {
    V = V || 0, $ = $ || 0;
    var q = /* @__PURE__ */ new Date(0);
    q.setUTCFullYear(R, 0, 4);
    var W = q.getUTCDay() || 7, se = V * 7 + $ + 1 - W;
    return q.setUTCDate(q.getUTCDate() + se), q;
  }
  var b = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], D = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function T(R) {
    return R % 400 === 0 || R % 4 === 0 && R % 100 !== 0;
  }
  function x(R, V, $) {
    if (V < 0 || V > 11)
      return !1;
    if ($ != null) {
      if ($ < 1)
        return !1;
      var q = T(R);
      if (q && $ > D[V] || !q && $ > b[V])
        return !1;
    }
    return !0;
  }
  function C(R, V) {
    if (V < 1)
      return !1;
    var $ = T(R);
    return !($ && V > 366 || !$ && V > 365);
  }
  function M(R, V, $) {
    return !(V < 0 || V > 52 || $ != null && ($ < 0 || $ > 6));
  }
  function I(R, V, $) {
    return !(R != null && (R < 0 || R >= 25) || V != null && (V < 0 || V >= 60) || $ != null && ($ < 0 || $ >= 60));
  }
  e.exports = t.default;
})(p9, ac);
const w9 = /* @__PURE__ */ qR(ac);
function Dn(e, t) {
  if (t.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present");
}
function Yu(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Yu = function(n) {
    return typeof n;
  } : Yu = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Yu(e);
}
function Za(e) {
  Dn(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || Yu(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), /* @__PURE__ */ new Date(NaN));
}
function bo(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
var E9 = {};
function kp() {
  return E9;
}
function oi(e, t) {
  var n, r, s, i, l, u, f, h;
  Dn(1, arguments);
  var d = kp(), m = bo((n = (r = (s = (i = t == null ? void 0 : t.weekStartsOn) !== null && i !== void 0 ? i : t == null || (l = t.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && s !== void 0 ? s : d.weekStartsOn) !== null && r !== void 0 ? r : (f = d.locale) === null || f === void 0 || (h = f.options) === null || h === void 0 ? void 0 : h.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(m >= 0 && m <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var v = Za(e), g = v.getDay(), w = (g < m ? 7 : 0) + g - m;
  return v.setDate(v.getDate() - w), v.setHours(0, 0, 0, 0), v;
}
function O0(e) {
  var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
var O9 = 6048e5;
function D9(e, t, n) {
  Dn(2, arguments);
  var r = oi(e, n), s = oi(t, n), i = r.getTime() - O0(r), l = s.getTime() - O0(s);
  return Math.round((i - l) / O9);
}
function x9(e) {
  Dn(1, arguments);
  var t = Za(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function S9(e) {
  Dn(1, arguments);
  var t = Za(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function k9(e, t) {
  return Dn(1, arguments), D9(x9(e), S9(e), t) + 1;
}
function T9(e, t) {
  var n, r, s, i, l, u, f, h;
  Dn(1, arguments);
  var d = Za(e), m = d.getFullYear(), v = kp(), g = bo((n = (r = (s = (i = t == null ? void 0 : t.firstWeekContainsDate) !== null && i !== void 0 ? i : t == null || (l = t.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && s !== void 0 ? s : v.firstWeekContainsDate) !== null && r !== void 0 ? r : (f = v.locale) === null || f === void 0 || (h = f.options) === null || h === void 0 ? void 0 : h.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(g >= 1 && g <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var w = /* @__PURE__ */ new Date(0);
  w.setFullYear(m + 1, 0, g), w.setHours(0, 0, 0, 0);
  var E = oi(w, t), k = /* @__PURE__ */ new Date(0);
  k.setFullYear(m, 0, g), k.setHours(0, 0, 0, 0);
  var b = oi(k, t);
  return d.getTime() >= E.getTime() ? m + 1 : d.getTime() >= b.getTime() ? m : m - 1;
}
function A9(e, t) {
  var n, r, s, i, l, u, f, h;
  Dn(1, arguments);
  var d = kp(), m = bo((n = (r = (s = (i = t == null ? void 0 : t.firstWeekContainsDate) !== null && i !== void 0 ? i : t == null || (l = t.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && s !== void 0 ? s : d.firstWeekContainsDate) !== null && r !== void 0 ? r : (f = d.locale) === null || f === void 0 || (h = f.options) === null || h === void 0 ? void 0 : h.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), v = T9(e, t), g = /* @__PURE__ */ new Date(0);
  g.setFullYear(v, 0, m), g.setHours(0, 0, 0, 0);
  var w = oi(g, t);
  return w;
}
var M9 = 6048e5;
function C9(e, t) {
  Dn(1, arguments);
  var n = Za(e), r = oi(n, t).getTime() - A9(n, t).getTime();
  return Math.round(r / M9) + 1;
}
function fc(e) {
  return Dn(1, arguments), oi(e, {
    weekStartsOn: 1
  });
}
function P9(e) {
  Dn(1, arguments);
  var t = Za(e), n = t.getFullYear(), r = /* @__PURE__ */ new Date(0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  var s = fc(r), i = /* @__PURE__ */ new Date(0);
  i.setFullYear(n, 0, 4), i.setHours(0, 0, 0, 0);
  var l = fc(i);
  return t.getTime() >= s.getTime() ? n + 1 : t.getTime() >= l.getTime() ? n : n - 1;
}
function N9(e) {
  Dn(1, arguments);
  var t = P9(e), n = /* @__PURE__ */ new Date(0);
  n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0);
  var r = fc(n);
  return r;
}
var $9 = 6048e5;
function I9(e) {
  Dn(1, arguments);
  var t = Za(e), n = fc(t).getTime() - N9(t).getTime();
  return Math.round(n / $9) + 1;
}
function $n(e, t) {
  Dn(2, arguments);
  var n = Za(e), r = bo(t);
  return isNaN(r) ? /* @__PURE__ */ new Date(NaN) : (r && n.setDate(n.getDate() + r), n);
}
function dc(e, t) {
  Dn(2, arguments);
  var n = Za(e), r = bo(t);
  if (isNaN(r))
    return /* @__PURE__ */ new Date(NaN);
  if (!r)
    return n;
  var s = n.getDate(), i = new Date(n.getTime());
  i.setMonth(n.getMonth() + r + 1, 0);
  var l = i.getDate();
  return s >= l ? i : (n.setFullYear(i.getFullYear(), i.getMonth(), s), n);
}
function D0(e, t) {
  Dn(2, arguments);
  var n = bo(t);
  return dc(e, n * 12);
}
var Li = /* @__PURE__ */ ((e) => (e.Any = "any", e.All = "all", e))(Li || {}), xb = /* @__PURE__ */ ((e) => (e.Days = "days", e.Weeks = "weeks", e.Months = "months", e.Years = "years", e))(xb || {}), Sb = /* @__PURE__ */ ((e) => (e.Days = "days", e.Weekdays = "weekdays", e.Weeks = "weeks", e.Months = "months", e.Years = "years", e))(Sb || {}), kb = /* @__PURE__ */ ((e) => (e.OrdinalWeekdays = "ordinalWeekdays", e))(kb || {});
class L9 {
  constructor(t, n, r) {
    $e(this, "validated", !0), this.type = t, this.interval = n, this.from = r, this.from || (console.error(
      'A valid "from" date is required for date interval rule. This rule will be skipped.'
    ), this.validated = !1);
  }
  passes(t) {
    if (!this.validated)
      return !0;
    const { date: n } = t;
    switch (this.type) {
      case "days":
        return Tp(this.from.date, n) % this.interval === 0;
      case "weeks":
        return ej(this.from.date, n) % this.interval === 0;
      case "months":
        return tj(this.from.date, n) % this.interval === 0;
      case "years":
        return Ib(this.from.date, n) % this.interval === 0;
      default:
        return !1;
    }
  }
}
class wo {
  constructor(t, n, r, s) {
    $e(this, "components", []), this.type = t, this.validator = r, this.getter = s, this.components = this.normalizeComponents(n);
  }
  static create(t, n) {
    switch (t) {
      case "days":
        return new R9(n);
      case "weekdays":
        return new F9(n);
      case "weeks":
        return new Y9(n);
      case "months":
        return new W9(n);
      case "years":
        return new U9(n);
    }
  }
  normalizeComponents(t) {
    if (this.validator(t))
      return [t];
    if (!Or(t))
      return [];
    const n = [];
    return t.forEach((r) => {
      if (!this.validator(r)) {
        console.error(
          `Component value ${r} in invalid for "${this.type}" rule. This rule will be skipped.`
        );
        return;
      }
      n.push(r);
    }), n;
  }
  passes(t) {
    return this.getter(t).some((s) => this.components.includes(s));
  }
}
class R9 extends wo {
  constructor(t) {
    super(
      "days",
      t,
      V9,
      ({ day: n, dayFromEnd: r }) => [n, -r]
    );
  }
}
class F9 extends wo {
  constructor(t) {
    super(
      "weekdays",
      t,
      hh,
      ({ weekday: n }) => [n]
    );
  }
}
class Y9 extends wo {
  constructor(t) {
    super(
      "weeks",
      t,
      j9,
      ({ week: n, weekFromEnd: r }) => [n, -r]
    );
  }
}
class W9 extends wo {
  constructor(t) {
    super("months", t, G9, ({ month: n }) => [
      n
    ]);
  }
}
class U9 extends wo {
  constructor(t) {
    super("years", t, Ur, ({ year: n }) => [n]);
  }
}
class B9 {
  constructor(t, n) {
    $e(this, "components"), this.type = t, this.components = this.normalizeComponents(n);
  }
  normalizeArrayConfig(t) {
    const n = [];
    return t.forEach((r, s) => {
      if (Ur(r)) {
        if (s === 0)
          return;
        if (!x0(t[0])) {
          console.error(
            `Ordinal range for "${this.type}" rule is from -5 to -1 or 1 to 5. This rule will be skipped.`
          );
          return;
        }
        if (!hh(r)) {
          console.error(
            `Acceptable range for "${this.type}" rule is from 1 to 5. This rule will be skipped`
          );
          return;
        }
        n.push([t[0], r]);
      } else
        Or(r) && n.push(...this.normalizeArrayConfig(r));
    }), n;
  }
  normalizeComponents(t) {
    const n = [];
    return t.forEach((r, s) => {
      if (Ur(r)) {
        if (s === 0)
          return;
        if (!x0(t[0])) {
          console.error(
            `Ordinal range for "${this.type}" rule is from -5 to -1 or 1 to 5. This rule will be skipped.`
          );
          return;
        }
        if (!hh(r)) {
          console.error(
            `Acceptable range for "${this.type}" rule is from 1 to 5. This rule will be skipped`
          );
          return;
        }
        n.push([t[0], r]);
      } else
        Or(r) && n.push(...this.normalizeArrayConfig(r));
    }), n;
  }
  passes(t) {
    const { weekday: n, weekdayOrdinal: r, weekdayOrdinalFromEnd: s } = t;
    return this.components.some(
      ([i, l]) => (i === r || i === -s) && n === l
    );
  }
}
class H9 {
  constructor(t) {
    $e(this, "type", "function"), $e(this, "validated", !0), this.fn = t, ci(t) || (console.error(
      "The function rule requires a valid function. This rule will be skipped."
    ), this.validated = !1);
  }
  passes(t) {
    return this.validated ? this.fn(t) : !0;
  }
}
class hc {
  constructor(t, n = {}, r) {
    $e(this, "validated", !0), $e(this, "config"), $e(this, "type", Li.Any), $e(this, "from"), $e(this, "until"), $e(this, "rules", []), $e(this, "locale", new mc()), this.parent = r, n.locale && (this.locale = n.locale), this.config = t, ci(t) ? (this.type = Li.All, this.rules = [new H9(t)]) : Or(t) ? (this.type = Li.Any, this.rules = t.map((s) => new hc(s, n, this))) : Va(t) ? (this.type = Li.All, this.from = t.from ? this.locale.getDateParts(t.from) : r == null ? void 0 : r.from, this.until = t.until ? this.locale.getDateParts(t.until) : r == null ? void 0 : r.until, this.rules = this.getObjectRules(t)) : (console.error("Rule group configuration must be an object or an array."), this.validated = !1);
  }
  getObjectRules(t) {
    const n = [];
    if (t.every && (ta(t.every) && (t.every = [1, `${t.every}s`]), Or(t.every))) {
      const [r = 1, s = xb.Days] = t.every;
      n.push(new L9(s, r, this.from));
    }
    return Object.values(Sb).forEach((r) => {
      r in t && n.push(wo.create(r, t[r]));
    }), Object.values(kb).forEach((r) => {
      r in t && n.push(new B9(r, t[r]));
    }), t.on != null && (Or(t.on) || (t.on = [t.on]), n.push(
      new hc(t.on, { locale: this.locale }, this.parent)
    )), n;
  }
  passes(t) {
    return this.validated ? this.from && t.dayIndex <= this.from.dayIndex || this.until && t.dayIndex >= this.until.dayIndex ? !1 : this.type === Li.Any ? this.rules.some((n) => n.passes(t)) : this.rules.every((n) => n.passes(t)) : !0;
  }
}
function V9(e) {
  return Ur(e) ? e >= 1 && e <= 31 : !1;
}
function hh(e) {
  return Ur(e) ? e >= 1 && e <= 7 : !1;
}
function j9(e) {
  return Ur(e) ? e >= -6 && e <= -1 || e >= 1 && e <= 6 : !1;
}
function G9(e) {
  return Ur(e) ? e >= 1 && e <= 12 : !1;
}
function x0(e) {
  return !(!Ur(e) || e < -5 || e > 5 || e === 0);
}
const z9 = {
  dateTime: [
    "year",
    "month",
    "day",
    "hours",
    "minutes",
    "seconds",
    "milliseconds"
  ],
  date: ["year", "month", "day"],
  time: ["hours", "minutes", "seconds", "milliseconds"]
}, En = 7, q9 = 6, Tb = 1e3, Ab = Tb * 60, Mb = Ab * 60, Wu = Mb * 24, K9 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Z9 = ["L", "iso"], Qo = {
  milliseconds: [0, 999, 3],
  seconds: [0, 59, 2],
  minutes: [0, 59, 2],
  hours: [0, 23, 2]
}, Cb = /d{1,2}|W{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|Z{1,4}|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g, X9 = /\[([^]*?)\]/gm, S0 = {
  D(e) {
    return e.day;
  },
  DD(e) {
    return Ct(e.day, 2);
  },
  // Do(d: DateParts, l: Locale) {
  //   return l.DoFn(d.day);
  // },
  d(e) {
    return e.weekday - 1;
  },
  dd(e) {
    return Ct(e.weekday - 1, 2);
  },
  W(e, t) {
    return t.dayNamesNarrow[e.weekday - 1];
  },
  WW(e, t) {
    return t.dayNamesShorter[e.weekday - 1];
  },
  WWW(e, t) {
    return t.dayNamesShort[e.weekday - 1];
  },
  WWWW(e, t) {
    return t.dayNames[e.weekday - 1];
  },
  M(e) {
    return e.month;
  },
  MM(e) {
    return Ct(e.month, 2);
  },
  MMM(e, t) {
    return t.monthNamesShort[e.month - 1];
  },
  MMMM(e, t) {
    return t.monthNames[e.month - 1];
  },
  YY(e) {
    return String(e.year).substr(2);
  },
  YYYY(e) {
    return Ct(e.year, 4);
  },
  h(e) {
    return e.hours % 12 || 12;
  },
  hh(e) {
    return Ct(e.hours % 12 || 12, 2);
  },
  H(e) {
    return e.hours;
  },
  HH(e) {
    return Ct(e.hours, 2);
  },
  m(e) {
    return e.minutes;
  },
  mm(e) {
    return Ct(e.minutes, 2);
  },
  s(e) {
    return e.seconds;
  },
  ss(e) {
    return Ct(e.seconds, 2);
  },
  S(e) {
    return Math.round(e.milliseconds / 100);
  },
  SS(e) {
    return Ct(Math.round(e.milliseconds / 10), 2);
  },
  SSS(e) {
    return Ct(e.milliseconds, 3);
  },
  a(e, t) {
    return e.hours < 12 ? t.amPm[0] : t.amPm[1];
  },
  A(e, t) {
    return e.hours < 12 ? t.amPm[0].toUpperCase() : t.amPm[1].toUpperCase();
  },
  Z() {
    return "Z";
  },
  ZZ(e) {
    const t = e.timezoneOffset;
    return `${t > 0 ? "-" : "+"}${Ct(Math.floor(Math.abs(t) / 60), 2)}`;
  },
  ZZZ(e) {
    const t = e.timezoneOffset;
    return `${t > 0 ? "-" : "+"}${Ct(
      Math.floor(Math.abs(t) / 60) * 100 + Math.abs(t) % 60,
      4
    )}`;
  },
  ZZZZ(e) {
    const t = e.timezoneOffset;
    return `${t > 0 ? "-" : "+"}${Ct(Math.floor(Math.abs(t) / 60), 2)}:${Ct(
      Math.abs(t) % 60,
      2
    )}`;
  }
}, ms = /\d\d?/, J9 = /\d{3}/, Q9 = /\d{4}/, zo = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF/]+(\s*?[\u0600-\u06FF]+){1,2}/i, k0 = () => {
}, T0 = (e) => (t, n, r) => {
  const s = r[e].indexOf(
    n.charAt(0).toUpperCase() + n.substr(1).toLowerCase()
  );
  ~s && (t.month = s);
}, $t = {
  D: [
    ms,
    (e, t) => {
      e.day = t;
    }
  ],
  Do: [
    new RegExp(ms.source + zo.source),
    (e, t) => {
      e.day = parseInt(t, 10);
    }
  ],
  d: [ms, k0],
  W: [zo, k0],
  M: [
    ms,
    (e, t) => {
      e.month = t - 1;
    }
  ],
  MMM: [zo, T0("monthNamesShort")],
  MMMM: [zo, T0("monthNames")],
  YY: [
    ms,
    (e, t) => {
      const r = +(/* @__PURE__ */ new Date()).getFullYear().toString().substr(0, 2);
      e.year = +`${t > 68 ? r - 1 : r}${t}`;
    }
  ],
  YYYY: [
    Q9,
    (e, t) => {
      e.year = t;
    }
  ],
  S: [
    /\d/,
    (e, t) => {
      e.milliseconds = t * 100;
    }
  ],
  SS: [
    /\d{2}/,
    (e, t) => {
      e.milliseconds = t * 10;
    }
  ],
  SSS: [
    J9,
    (e, t) => {
      e.milliseconds = t;
    }
  ],
  h: [
    ms,
    (e, t) => {
      e.hours = t;
    }
  ],
  m: [
    ms,
    (e, t) => {
      e.minutes = t;
    }
  ],
  s: [
    ms,
    (e, t) => {
      e.seconds = t;
    }
  ],
  a: [
    zo,
    (e, t, n) => {
      const r = t.toLowerCase();
      r === n.amPm[0] ? e.isPm = !1 : r === n.amPm[1] && (e.isPm = !0);
    }
  ],
  Z: [
    /[^\s]*?[+-]\d\d:?\d\d|[^\s]*?Z?/,
    (e, t) => {
      t === "Z" && (t = "+00:00");
      const n = `${t}`.match(/([+-]|\d\d)/gi);
      if (n) {
        const r = +n[1] * 60 + parseInt(n[2], 10);
        e.timezoneOffset = n[0] === "+" ? r : -r;
      }
    }
  ]
};
$t.DD = $t.D;
$t.dd = $t.d;
$t.WWWW = $t.WWW = $t.WW = $t.W;
$t.MM = $t.M;
$t.mm = $t.m;
$t.hh = $t.H = $t.HH = $t.h;
$t.ss = $t.s;
$t.A = $t.a;
$t.ZZZZ = $t.ZZZ = $t.ZZ = $t.Z;
function Pb(e, t) {
  return ($a(e) && e || [
    ta(e) && e || "YYYY-MM-DD"
  ]).map(
    (n) => Z9.reduce(
      (r, s) => r.replace(s, t.masks[s] || ""),
      n
    )
  );
}
function Nb(e) {
  return Va(e) && "year" in e && "month" in e && "day" in e;
}
function A0(e, t = 1) {
  const n = e.getDay() + 1, r = n >= t ? t - n : -(7 - (t - n));
  return $n(e, r);
}
function $b(e, t, n) {
  const r = Date.UTC(e, t - 1, n);
  return Tp(/* @__PURE__ */ new Date(0), new Date(r));
}
function Tp(e, t) {
  return Math.round((t.getTime() - e.getTime()) / Wu);
}
function ej(e, t) {
  return Math.ceil(Tp(A0(e), A0(t)) / 7);
}
function Ib(e, t) {
  return t.getUTCFullYear() - e.getUTCFullYear();
}
function tj(e, t) {
  return Ib(e, t) * 12 + (t.getMonth() - e.getMonth());
}
function Lb(e, t = "") {
  const n = /* @__PURE__ */ new Date(), {
    year: r = n.getFullYear(),
    month: s = n.getMonth() + 1,
    day: i = n.getDate(),
    hours: l = 0,
    minutes: u = 0,
    seconds: f = 0,
    milliseconds: h = 0
  } = e;
  if (t) {
    const d = `${Ct(r, 4)}-${Ct(s, 2)}-${Ct(i, 2)}T${Ct(
      l,
      2
    )}:${Ct(u, 2)}:${Ct(f, 2)}.${Ct(h, 3)}`;
    return w9(d, { timeZone: t });
  }
  return new Date(r, s - 1, i, l, u, f, h);
}
function nj(e, t) {
  let n = new Date(e.getTime());
  t.timezone && (n = new Date(
    e.toLocaleString("en-US", { timeZone: t.timezone })
  ), n.setMilliseconds(e.getMilliseconds()));
  const r = n.getMilliseconds(), s = n.getSeconds(), i = n.getMinutes(), l = n.getHours(), u = r + s * Tb + i * Ab + l * Mb, f = n.getMonth() + 1, h = n.getFullYear(), d = t.getMonthParts(f, h), m = n.getDate(), v = d.numDays - m + 1, g = n.getDay() + 1, w = Math.floor((m - 1) / 7 + 1), E = Math.floor((d.numDays - m) / 7 + 1), k = Math.ceil(
    (m + Math.abs(d.firstWeekday - d.firstDayOfWeek)) / 7
  ), b = d.numWeeks - k + 1, D = d.weeknumbers[k], T = $b(h, f, m);
  return {
    milliseconds: r,
    seconds: s,
    minutes: i,
    hours: l,
    time: u,
    day: m,
    dayFromEnd: v,
    weekday: g,
    weekdayOrdinal: w,
    weekdayOrdinalFromEnd: E,
    week: k,
    weekFromEnd: b,
    weeknumber: D,
    month: f,
    year: h,
    date: n,
    dateTime: n.getTime(),
    dayIndex: T,
    timezoneOffset: 0,
    isValid: !0
  };
}
function rj(e, t, n) {
  return `${t}-${e}-${n}`;
}
function aj(e, t, n) {
  const r = t % 4 === 0 && t % 100 !== 0 || t % 400 === 0, s = new Date(t, e - 1, 1), i = s.getDay() + 1, l = e === 2 && r ? 29 : K9[e - 1], u = n - 1, f = k9(s, {
    weekStartsOn: u
  }), h = [], d = [];
  for (let m = 0; m < f; m++) {
    const v = $n(s, m * 7);
    h.push(C9(v, { weekStartsOn: u })), d.push(I9(v));
  }
  return {
    firstDayOfWeek: n,
    firstDayOfMonth: s,
    inLeapYear: r,
    firstWeekday: i,
    numDays: l,
    numWeeks: f,
    month: e,
    year: t,
    weeknumbers: h,
    isoWeeknumbers: d
  };
}
function sj() {
  const e = [];
  for (let s = 0; s < En; s++)
    e.push(
      Lb({
        year: 2020,
        month: 1,
        day: 5 + s,
        hours: 12
      })
    );
  return e;
}
function Td(e, t = void 0) {
  const n = new Intl.DateTimeFormat(t, {
    weekday: e
  });
  return sj().map((r) => n.format(r));
}
function ij() {
  const e = [];
  for (let t = 0; t <= 24; t++)
    e.push(new Date(2e3, 0, 1, t));
  return e;
}
function oj(e = void 0) {
  const t = [
    "second",
    "minute",
    "hour",
    "day",
    "week",
    "month",
    "quarter",
    "year"
  ], n = new Intl.RelativeTimeFormat(e);
  return t.reduce((r, s) => {
    const i = n.formatToParts(100, s);
    return r[s] = i[1].unit, r;
  }, {});
}
function Rb() {
  const e = [];
  for (let t = 0; t < 12; t++)
    e.push(new Date(2e3, t, 15));
  return e;
}
function M0(e, t = void 0) {
  const n = new Intl.DateTimeFormat(t, {
    month: e,
    timeZone: "UTC"
  });
  return Rb().map((r) => n.format(r));
}
function lj(e, t, n) {
  return Ur(t) ? t === e : Or(t) ? t.includes(e) : ci(t) ? t(e, n) : !(t.min != null && t.min > e || t.max != null && t.max < e || t.interval != null && e % t.interval !== 0);
}
function el(e, t, n) {
  const r = [], [s, i, l] = t;
  for (let u = s; u <= i; u++)
    (n == null || lj(u, n, e)) && r.push({
      value: u,
      label: Ct(u, l)
    });
  return r;
}
function uj(e, t) {
  return {
    milliseconds: el(
      e,
      Qo.milliseconds,
      t.milliseconds
    ),
    seconds: el(e, Qo.seconds, t.seconds),
    minutes: el(e, Qo.minutes, t.minutes),
    hours: el(e, Qo.hours, t.hours)
  };
}
function cj(e, t, n, r) {
  const i = el(e, t, r).reduce((l, u) => {
    if (u.disabled)
      return l;
    if (isNaN(l))
      return u.value;
    const f = Math.abs(l - n);
    return Math.abs(u.value - n) < f ? u.value : l;
  }, NaN);
  return isNaN(i) ? n : i;
}
function fj(e, t) {
  const n = { ...e };
  return Object.entries(t).forEach(([r, s]) => {
    const i = Qo[r], l = e[r];
    n[r] = cj(
      e,
      i,
      l,
      s
    );
  }), n;
}
function C0(e, t, n) {
  return Pb(t, n).map((s) => {
    if (typeof s != "string")
      throw new Error("Invalid mask");
    let i = e;
    if (i.length > 1e3)
      return !1;
    let l = !0;
    const u = {};
    if (s.replace(Cb, (d) => {
      if ($t[d]) {
        const m = $t[d], v = i.search(m[0]);
        ~v ? i.replace(m[0], (g) => (m[1](u, g, n), i = i.substr(v + g.length), g)) : l = !1;
      }
      return $t[d] ? "" : d.slice(1, d.length - 1);
    }), !l)
      return !1;
    const f = /* @__PURE__ */ new Date();
    u.hours != null && (u.isPm === !0 && +u.hours != 12 ? u.hours = +u.hours + 12 : u.isPm === !1 && +u.hours == 12 && (u.hours = 0));
    let h;
    return u.timezoneOffset != null ? (u.minutes = +(u.minutes || 0) - +u.timezoneOffset, h = new Date(
      Date.UTC(
        u.year || f.getFullYear(),
        u.month || 0,
        u.day || 1,
        u.hours || 0,
        u.minutes || 0,
        u.seconds || 0,
        u.milliseconds || 0
      )
    )) : h = n.getDateFromParts({
      year: u.year || f.getFullYear(),
      month: (u.month || 0) + 1,
      day: u.day || 1,
      hours: u.hours || 0,
      minutes: u.minutes || 0,
      seconds: u.seconds || 0,
      milliseconds: u.milliseconds || 0
    }), h;
  }).find((s) => s) || new Date(e);
}
function dj(e, t, n) {
  if (e == null)
    return "";
  let r = Pb(t, n)[0];
  /Z$/.test(r) && (n.timezone = "utc");
  const s = [];
  r = r.replace(X9, (l, u) => (s.push(u), "??"));
  const i = n.getDateParts(e);
  return r = r.replace(
    Cb,
    (l) => l in S0 ? S0[l](i, n) : l.slice(1, l.length - 1)
  ), r.replace(/\?\?/g, () => s.shift());
}
const hj = {
  daily: ["year", "month", "day"],
  weekly: ["year", "month", "week"],
  monthly: ["year", "month"]
};
function pj({
  monthComps: e,
  prevMonthComps: t,
  nextMonthComps: n
}, r) {
  const s = [], {
    firstDayOfWeek: i,
    firstWeekday: l,
    isoWeeknumbers: u,
    weeknumbers: f,
    numDays: h,
    numWeeks: d
  } = e, m = l + (l < i ? En : 0) - i;
  let v = !0, g = !1, w = !1, E = 0;
  const k = new Intl.DateTimeFormat(r.id, {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric"
  });
  let b = t.numDays - m + 1, D = t.numDays - b + 1, T = Math.floor((b - 1) / En + 1), x = 1, C = t.numWeeks, M = 1, I = t.month, R = t.year;
  const V = /* @__PURE__ */ new Date(), $ = V.getDate(), q = V.getMonth() + 1, W = V.getFullYear();
  for (let se = 1; se <= q9; se++) {
    for (let me = 1, ce = i; me <= En; me++, ce += ce === En ? 1 - En : 1) {
      v && ce === l && (b = 1, D = e.numDays, T = Math.floor((b - 1) / En + 1), x = Math.floor((h - b) / En + 1), C = 1, M = d, I = e.month, R = e.year, v = !1, g = !0);
      const ye = r.getDateFromParams(R, I, b, 0, 0, 0, 0), Ae = r.getDateFromParams(R, I, b, 12, 0, 0, 0), Ue = r.getDateFromParams(
        R,
        I,
        b,
        23,
        59,
        59,
        999
      ), Re = ye, re = `${Ct(R, 4)}-${Ct(I, 2)}-${Ct(b, 2)}`, Me = me, mt = En - me, At = f[se - 1], Se = u[se - 1], nt = b === $ && I === q && R === W, le = g && b === 1, pe = g && b === h, Oe = se === 1, ge = se === d, ne = me === 1, be = me === En, Be = $b(R, I, b);
      s.push({
        locale: r,
        id: re,
        position: ++E,
        label: b.toString(),
        ariaLabel: k.format(new Date(R, I - 1, b)),
        day: b,
        dayFromEnd: D,
        weekday: ce,
        weekdayPosition: Me,
        weekdayPositionFromEnd: mt,
        weekdayOrdinal: T,
        weekdayOrdinalFromEnd: x,
        week: C,
        weekFromEnd: M,
        weekPosition: se,
        weeknumber: At,
        isoWeeknumber: Se,
        month: I,
        year: R,
        date: Re,
        startDate: ye,
        endDate: Ue,
        noonDate: Ae,
        dayIndex: Be,
        isToday: nt,
        isFirstDay: le,
        isLastDay: pe,
        isDisabled: !g,
        isFocusable: !g,
        isFocused: !1,
        inMonth: g,
        inPrevMonth: v,
        inNextMonth: w,
        onTop: Oe,
        onBottom: ge,
        onLeft: ne,
        onRight: be,
        classes: [
          `id-${re}`,
          `day-${b}`,
          `day-from-end-${D}`,
          `weekday-${ce}`,
          `weekday-position-${Me}`,
          `weekday-ordinal-${T}`,
          `weekday-ordinal-from-end-${x}`,
          `week-${C}`,
          `week-from-end-${M}`,
          {
            "is-today": nt,
            "is-first-day": le,
            "is-last-day": pe,
            "in-month": g,
            "in-prev-month": v,
            "in-next-month": w,
            "on-top": Oe,
            "on-bottom": ge,
            "on-left": ne,
            "on-right": be
          }
        ]
      }), g && pe ? (g = !1, w = !0, b = 1, D = h, T = 1, x = Math.floor((h - b) / En + 1), C = 1, M = n.numWeeks, I = n.month, R = n.year) : (b++, D--, T = Math.floor((b - 1) / En + 1), x = Math.floor((h - b) / En + 1));
    }
    C++, M--;
  }
  return s;
}
function mj(e, t, n, r) {
  const s = e.reduce((i, l, u) => {
    const f = Math.floor(u / 7);
    let h = i[f];
    return h || (h = {
      id: `week-${f + 1}`,
      title: "",
      week: l.week,
      weekPosition: l.weekPosition,
      weeknumber: l.weeknumber,
      isoWeeknumber: l.isoWeeknumber,
      weeknumberDisplay: t ? l.weeknumber : n ? l.isoWeeknumber : void 0,
      days: []
    }, i[f] = h), h.days.push(l), i;
  }, Array(e.length / En));
  return s.forEach((i) => {
    const l = i.days[0], u = i.days[i.days.length - 1];
    l.month === u.month ? i.title = `${r.formatDate(l.date, "MMMM YYYY")}` : l.year === u.year ? i.title = `${r.formatDate(
      l.date,
      "MMM"
    )} - ${r.formatDate(u.date, "MMM YYYY")}` : i.title = `${r.formatDate(
      l.date,
      "MMM YYYY"
    )} - ${r.formatDate(u.date, "MMM YYYY")}`;
  }), s;
}
function vj(e, t) {
  return e.days.map((n) => ({
    label: t.formatDate(n.date, t.masks.weekdays),
    weekday: n.weekday
  }));
}
function Fb(e, t, n) {
  return Db(
    n.getDateParts(n.toDate(e)),
    hj[t]
  );
}
function Yb({ day: e, week: t, month: n, year: r }, s, i, l) {
  if (i === "daily" && e) {
    const u = new Date(r, n - 1, e), f = $n(u, s);
    return {
      day: f.getDate(),
      month: f.getMonth() + 1,
      year: f.getFullYear()
    };
  } else if (i === "weekly" && t) {
    const f = l.getMonthParts(n, r).firstDayOfMonth, h = $n(f, (t - 1 + s) * 7), d = l.getDateParts(h);
    return {
      week: d.week,
      month: d.month,
      year: d.year
    };
  } else {
    const u = new Date(r, n - 1, 1), f = dc(u, s);
    return {
      month: f.getMonth() + 1,
      year: f.getFullYear()
    };
  }
}
function na(e) {
  return e != null && e.month != null && e.year != null;
}
function ph(e, t) {
  return !na(e) || !na(t) ? !1 : (e = e, t = t, e.year !== t.year ? e.year < t.year : e.month && t.month && e.month !== t.month ? e.month < t.month : e.week && t.week && e.week !== t.week ? e.week < t.week : e.day && t.day && e.day !== t.day ? e.day < t.day : !1);
}
function pc(e, t) {
  return !na(e) || !na(t) ? !1 : (e = e, t = t, e.year !== t.year ? e.year > t.year : e.month && t.month && e.month !== t.month ? e.month > t.month : e.week && t.week && e.week !== t.week ? e.week > t.week : e.day && t.day && e.day !== t.day ? e.day > t.day : !1);
}
function Wb(e, t, n) {
  return (e || !1) && !ph(e, t) && !pc(e, n);
}
function gj(e, t) {
  return !e && t || e && !t ? !1 : !e && !t ? !0 : (e = e, t = t, e.year === t.year && e.month === t.month && e.week === t.week && e.day === t.day);
}
function _j(e, t, n, r) {
  if (!na(e) || !na(t))
    return [];
  const s = [];
  for (; !pc(e, t); )
    s.push(e), e = Yb(e, 1, n, r);
  return s;
}
function Ub(e) {
  const { day: t, week: n, month: r, year: s } = e;
  let i = `${s}-${Ct(r, 2)}`;
  return n && (i = `${i}-w${n}`), t && (i = `${i}-${Ct(t, 2)}`), i;
}
function yj(e, t) {
  const { month: n, year: r, showWeeknumbers: s, showIsoWeeknumbers: i } = e, l = new Date(r, n - 1, 15), u = t.getMonthParts(n, r), f = t.getPrevMonthParts(n, r), h = t.getNextMonthParts(n, r), d = pj({ monthComps: u, prevMonthComps: f, nextMonthComps: h }, t), m = mj(d, s, i, t), v = vj(m[0], t);
  return {
    id: Ub(e),
    month: n,
    year: r,
    monthTitle: t.formatDate(l, t.masks.title),
    shortMonthLabel: t.formatDate(l, "MMM"),
    monthLabel: t.formatDate(l, "MMMM"),
    shortYearLabel: r.toString().substring(2),
    yearLabel: r.toString(),
    monthComps: u,
    prevMonthComps: f,
    nextMonthComps: h,
    days: d,
    weeks: m,
    weekdays: v
  };
}
function bj(e, t) {
  const { day: n, week: r, view: s, trimWeeks: i } = e, l = {
    ...t,
    ...e,
    title: "",
    viewDays: [],
    viewWeeks: []
  };
  switch (s) {
    case "daily": {
      let u = l.days.find((h) => h.inMonth);
      n ? u = l.days.find((h) => h.day === n && h.inMonth) || u : r && (u = l.days.find((h) => h.week === r && h.inMonth));
      const f = l.weeks[u.week - 1];
      l.viewWeeks = [f], l.viewDays = [u], l.week = u.week, l.weekTitle = f.title, l.day = u.day, l.dayTitle = u.ariaLabel, l.title = l.dayTitle;
      break;
    }
    case "weekly": {
      l.week = r || 1;
      const u = l.weeks[l.week - 1];
      l.viewWeeks = [u], l.viewDays = u.days, l.weekTitle = u.title, l.title = l.weekTitle;
      break;
    }
    default: {
      l.title = l.monthTitle, l.viewWeeks = l.weeks.slice(
        0,
        i ? l.monthComps.numWeeks : void 0
      ), l.viewDays = l.days;
      break;
    }
  }
  return l;
}
class P0 {
  constructor(t, n, r) {
    $e(this, "keys", []), $e(this, "store", {}), this.size = t, this.createKey = n, this.createItem = r;
  }
  get(...t) {
    const n = this.createKey(...t);
    return this.store[n];
  }
  getOrSet(...t) {
    const n = this.createKey(...t);
    if (this.store[n])
      return this.store[n];
    const r = this.createItem(...t);
    if (this.keys.length >= this.size) {
      const s = this.keys.shift();
      s != null && delete this.store[s];
    }
    return this.keys.push(n), this.store[n] = r, r;
  }
}
class Vi {
  constructor(t, n = new mc()) {
    $e(this, "order"), $e(this, "locale"), $e(this, "start", null), $e(this, "end", null), $e(this, "repeat", null);
    var r;
    this.locale = n;
    const { start: s, end: i, span: l, order: u, repeat: f } = t;
    Hi(s) && (this.start = n.getDateParts(s)), Hi(i) ? this.end = n.getDateParts(i) : this.start != null && l && (this.end = n.getDateParts($n(this.start.date, l - 1))), this.order = u ?? 0, f && (this.repeat = new hc(
      {
        from: (r = this.start) == null ? void 0 : r.date,
        ...f
      },
      {
        locale: this.locale
      }
    ));
  }
  static fromMany(t, n) {
    return (Or(t) ? t : [t]).filter((r) => r).map((r) => Vi.from(r, n));
  }
  static from(t, n) {
    if (t instanceof Vi)
      return t;
    const r = {
      start: null,
      end: null
    };
    return t != null && (Or(t) ? (r.start = t[0] ?? null, r.end = t[1] ?? null) : Va(t) ? Object.assign(r, t) : (r.start = t, r.end = t)), r.start != null && (r.start = new Date(r.start)), r.end != null && (r.end = new Date(r.end)), new Vi(r, n);
  }
  get opts() {
    const { order: t, locale: n } = this;
    return { order: t, locale: n };
  }
  get hasRepeat() {
    return !!this.repeat;
  }
  get isSingleDay() {
    const { start: t, end: n } = this;
    return t && n && t.year === n.year && t.month === n.month && t.day === n.day;
  }
  get isMultiDay() {
    return !this.isSingleDay;
  }
  get daySpan() {
    return this.start == null || this.end == null ? this.hasRepeat ? 1 : 1 / 0 : this.end.dayIndex - this.start.dayIndex;
  }
  startsOnDay(t) {
    var n, r;
    return ((n = this.start) == null ? void 0 : n.dayIndex) === t.dayIndex || !!((r = this.repeat) != null && r.passes(t));
  }
  intersectsDay(t) {
    return this.intersectsDayRange(t, t);
  }
  intersectsRange(t) {
    var n, r;
    return this.intersectsDayRange(
      ((n = t.start) == null ? void 0 : n.dayIndex) ?? -1 / 0,
      ((r = t.end) == null ? void 0 : r.dayIndex) ?? 1 / 0
    );
  }
  intersectsDayRange(t, n) {
    return !(this.start && this.start.dayIndex > n || this.end && this.end.dayIndex < t);
  }
}
class wj {
  constructor() {
    $e(this, "records", {});
  }
  render(t, n, r) {
    var s, i, l, u;
    let f = null;
    const h = r[0].dayIndex, d = r[r.length - 1].dayIndex;
    return n.hasRepeat ? r.forEach((m) => {
      var v, g;
      if (n.startsOnDay(m)) {
        const w = n.daySpan < 1 / 0 ? n.daySpan : 1;
        f = {
          startDay: m.dayIndex,
          startTime: ((v = n.start) == null ? void 0 : v.time) ?? 0,
          endDay: m.dayIndex + w - 1,
          endTime: ((g = n.end) == null ? void 0 : g.time) ?? Wu
        }, this.getRangeRecords(t).push(f);
      }
    }) : n.intersectsDayRange(h, d) && (f = {
      startDay: ((s = n.start) == null ? void 0 : s.dayIndex) ?? -1 / 0,
      startTime: ((i = n.start) == null ? void 0 : i.time) ?? -1 / 0,
      endDay: ((l = n.end) == null ? void 0 : l.dayIndex) ?? 1 / 0,
      endTime: ((u = n.end) == null ? void 0 : u.time) ?? 1 / 0
    }, this.getRangeRecords(t).push(f)), f;
  }
  getRangeRecords(t) {
    let n = this.records[t.key];
    return n || (n = {
      ranges: [],
      data: t
    }, this.records[t.key] = n), n.ranges;
  }
  getCell(t, n) {
    return this.getCells(n).find((i) => i.data.key === t);
  }
  cellExists(t, n) {
    const r = this.records[t];
    return r == null ? !1 : r.ranges.some(
      (s) => s.startDay <= n && s.endDay >= n
    );
  }
  getCells(t) {
    const n = Object.values(this.records), r = [], { dayIndex: s } = t;
    return n.forEach(({ data: i, ranges: l }) => {
      l.filter((u) => u.startDay <= s && u.endDay >= s).forEach((u) => {
        const f = s === u.startDay, h = s === u.endDay, d = f ? u.startTime : 0, m = new Date(t.startDate.getTime() + d), v = h ? u.endTime : Wu, g = new Date(t.endDate.getTime() + v), w = d === 0 && v === Wu, E = i.order || 0;
        r.push({
          ...u,
          data: i,
          onStart: f,
          onEnd: h,
          startTime: d,
          startDate: m,
          endTime: v,
          endDate: g,
          allDay: w,
          order: E
        });
      });
    }), r.sort((i, l) => i.order - l.order), r;
  }
}
const Ej = 12, Oj = 5;
function Dj(e, t) {
  const n = new Intl.DateTimeFormat().resolvedOptions().locale;
  let r;
  ta(e) ? r = e : Dp(e, "id") && (r = e.id), r = (r || n).toLowerCase();
  const s = Object.keys(t), i = (f) => s.find((h) => h.toLowerCase() === f);
  r = i(r) || i(r.substring(0, 2)) || n;
  const l = {
    ...t["en-IE"],
    ...t[r],
    id: r,
    monthCacheSize: Ej,
    pageCacheSize: Oj
  };
  return Va(e) ? gl(e, l) : l;
}
let mc = class {
  constructor(t = void 0, n) {
    $e(this, "id"), $e(this, "daysInWeek"), $e(this, "firstDayOfWeek"), $e(this, "masks"), $e(this, "timezone"), $e(this, "hourLabels"), $e(this, "dayNames"), $e(this, "dayNamesShort"), $e(this, "dayNamesShorter"), $e(this, "dayNamesNarrow"), $e(this, "monthNames"), $e(this, "monthNamesShort"), $e(this, "relativeTimeNames"), $e(this, "amPm", ["am", "pm"]), $e(this, "monthCache"), $e(this, "pageCache");
    const { id: r, firstDayOfWeek: s, masks: i, monthCacheSize: l, pageCacheSize: u } = Dj(t, h9.value);
    this.monthCache = new P0(
      l,
      rj,
      aj
    ), this.pageCache = new P0(u, Ub, yj), this.id = r, this.daysInWeek = En, this.firstDayOfWeek = F5(s, 1, En), this.masks = i, this.timezone = n || void 0, this.hourLabels = this.getHourLabels(), this.dayNames = Td("long", this.id), this.dayNamesShort = Td("short", this.id), this.dayNamesShorter = this.dayNamesShort.map((f) => f.substring(0, 2)), this.dayNamesNarrow = Td("narrow", this.id), this.monthNames = M0("long", this.id), this.monthNamesShort = M0("short", this.id), this.relativeTimeNames = oj(this.id);
  }
  formatDate(t, n) {
    return dj(t, n, this);
  }
  parseDate(t, n) {
    return C0(t, n, this);
  }
  toDate(t, n = {}) {
    const r = /* @__PURE__ */ new Date(NaN);
    let s = r;
    const { fillDate: i, mask: l, patch: u, rules: f } = n;
    if (Ur(t) ? (n.type = "number", s = /* @__PURE__ */ new Date(+t)) : ta(t) ? (n.type = "string", s = t ? C0(t, l || "iso", this) : r) : Hi(t) ? (n.type = "date", s = new Date(t.getTime())) : Nb(t) && (n.type = "object", s = this.getDateFromParts(t)), s && (u || f)) {
      let h = this.getDateParts(s);
      if (u && i != null) {
        const d = this.getDateParts(this.toDate(i));
        h = this.getDateParts(
          this.toDate({ ...d, ...Db(h, z9[u]) })
        );
      }
      f && (h = fj(h, f)), s = this.getDateFromParts(h);
    }
    return s || r;
  }
  toDateOrNull(t, n = {}) {
    const r = this.toDate(t, n);
    return isNaN(r.getTime()) ? null : r;
  }
  fromDate(t, { type: n, mask: r } = {}) {
    switch (n) {
      case "number":
        return t ? t.getTime() : NaN;
      case "string":
        return t ? this.formatDate(t, r || "iso") : "";
      case "object":
        return t ? this.getDateParts(t) : null;
      default:
        return t ? new Date(t) : null;
    }
  }
  range(t) {
    return Vi.from(t, this);
  }
  ranges(t) {
    return Vi.fromMany(t, this);
  }
  getDateParts(t) {
    return nj(t, this);
  }
  getDateFromParts(t) {
    return Lb(t, this.timezone);
  }
  getDateFromParams(t, n, r, s, i, l, u) {
    return this.getDateFromParts({
      year: t,
      month: n,
      day: r,
      hours: s,
      minutes: i,
      seconds: l,
      milliseconds: u
    });
  }
  getPage(t) {
    const n = this.pageCache.getOrSet(t, this);
    return bj(t, n);
  }
  getMonthParts(t, n) {
    const { firstDayOfWeek: r } = this;
    return this.monthCache.getOrSet(t, n, r);
  }
  getThisMonthParts() {
    const t = /* @__PURE__ */ new Date();
    return this.getMonthParts(
      t.getMonth() + 1,
      t.getFullYear()
    );
  }
  getPrevMonthParts(t, n) {
    return t === 1 ? this.getMonthParts(12, n - 1) : this.getMonthParts(t - 1, n);
  }
  getNextMonthParts(t, n) {
    return t === 12 ? this.getMonthParts(1, n + 1) : this.getMonthParts(t + 1, n);
  }
  getHourLabels() {
    return ij().map((t) => this.formatDate(t, this.masks.hours));
  }
  getDayId(t) {
    return this.formatDate(t, "YYYY-MM-DD");
  }
};
class Bb {
  constructor(t, n, r) {
    $e(this, "key", ""), $e(this, "hashcode", ""), $e(this, "highlight", null), $e(this, "content", null), $e(this, "dot", null), $e(this, "bar", null), $e(this, "event", null), $e(this, "popover", null), $e(this, "customData", null), $e(this, "ranges"), $e(this, "hasRanges", !1), $e(this, "order", 0), $e(this, "pinPage", !1), $e(this, "maxRepeatSpan", 0), $e(this, "locale");
    const { dates: s } = Object.assign(
      this,
      { hashcode: "", order: 0, pinPage: !1 },
      t
    );
    this.key || (this.key = rc()), this.locale = r, n.normalizeGlyphs(this), this.ranges = r.ranges(s ?? []), this.hasRanges = !!$a(this.ranges), this.maxRepeatSpan = this.ranges.filter((i) => i.hasRepeat).map((i) => i.daySpan).reduce((i, l) => Math.max(i, l), 0);
  }
  intersectsRange({ start: t, end: n }) {
    if (t == null || n == null)
      return !1;
    const r = this.ranges.filter((l) => !l.hasRepeat);
    for (const l of r)
      if (l.intersectsDayRange(t.dayIndex, n.dayIndex))
        return !0;
    const s = this.ranges.filter((l) => l.hasRepeat);
    if (!s.length)
      return !1;
    let i = t;
    for (this.maxRepeatSpan > 1 && (i = this.locale.getDateParts($n(i.date, -this.maxRepeatSpan))); i.dayIndex <= n.dayIndex; ) {
      for (const l of s)
        if (l.startsOnDay(i))
          return !0;
      i = this.locale.getDateParts($n(i.date, 1));
    }
    return !1;
  }
}
const Hb = "__vc_base_context__", Vb = {
  color: {
    type: String,
    default: () => Ms("color")
  },
  isDark: {
    type: [Boolean, String, Object],
    default: () => Ms("isDark")
  },
  firstDayOfWeek: Number,
  masks: Object,
  locale: [String, Object],
  timezone: String,
  minDate: null,
  maxDate: null,
  disabledDates: null
};
function jb(e) {
  const t = Y(() => e.color ?? ""), n = Y(() => e.isDark ?? !1), { displayMode: r } = zR(n), s = Y(() => new G5(t.value)), i = Y(() => {
    if (e.locale instanceof mc)
      return e.locale;
    const d = Va(e.locale) ? e.locale : {
      id: e.locale,
      firstDayOfWeek: e.firstDayOfWeek,
      masks: e.masks
    };
    return new mc(d, e.timezone);
  }), l = Y(() => i.value.masks), u = Y(() => {
    const d = e.disabledDates ?? [];
    return e.minDate != null && d.push({
      start: null,
      end: $n(i.value.toDate(e.minDate), -1)
    }), e.maxDate != null && d.push({
      start: $n(i.value.toDate(e.maxDate), 1),
      end: null
    }), i.value.ranges(d);
  }), f = Y(() => new Bb(
    {
      key: "disabled",
      dates: u.value,
      order: 100
    },
    s.value,
    i.value
  )), h = {
    color: t,
    isDark: n,
    displayMode: r,
    theme: s,
    locale: i,
    masks: l,
    disabledDates: u,
    disabledAttribute: f
  };
  return aa(Hb, h), h;
}
function xj(e) {
  return Tt(Hb, jb(e));
}
const Sj = (e, t, {
  maxSwipeTime: n,
  minHorizontalSwipeDistance: r,
  maxVerticalSwipeDistance: s
}) => {
  if (!e || !e.addEventListener || !ci(t))
    return null;
  let i = 0, l = 0, u = null, f = !1;
  function h(m) {
    const v = m.changedTouches[0];
    i = v.screenX, l = v.screenY, u = (/* @__PURE__ */ new Date()).getTime(), f = !0;
  }
  function d(m) {
    if (!f || !u)
      return;
    f = !1;
    const v = m.changedTouches[0], g = v.screenX - i, w = v.screenY - l;
    if ((/* @__PURE__ */ new Date()).getTime() - u < n && Math.abs(g) >= r && Math.abs(w) <= s) {
      const k = { toLeft: !1, toRight: !1 };
      g < 0 ? k.toLeft = !0 : k.toRight = !0, t(k);
    }
  }
  return ys(e, "touchstart", h, { passive: !0 }), ys(e, "touchend", d, { passive: !0 }), () => {
    _s(e, "touchstart", h), _s(e, "touchend", d);
  };
}, Uu = {}, kj = (e, t = 10) => {
  Uu[e] = Date.now() + t;
}, Tj = (e, t) => {
  if (e in Uu) {
    const n = Uu[e];
    if (Date.now() < n)
      return;
    delete Uu[e];
  }
  t();
}, Aj = {
  ...Vb,
  view: {
    type: String,
    default: "monthly",
    validator(e) {
      return ["daily", "weekly", "monthly"].includes(e);
    }
  },
  rows: {
    type: Number,
    default: 1
  },
  columns: {
    type: Number,
    default: 1
  },
  step: Number,
  titlePosition: {
    type: String,
    default: () => Ms("titlePosition")
  },
  navVisibility: {
    type: String,
    default: () => Ms("navVisibility")
  },
  showWeeknumbers: [Boolean, String],
  showIsoWeeknumbers: [Boolean, String],
  expanded: Boolean,
  borderless: Boolean,
  transparent: Boolean,
  initialPage: Object,
  initialPagePosition: { type: Number, default: 1 },
  minPage: Object,
  maxPage: Object,
  transition: String,
  attributes: Array,
  trimWeeks: Boolean,
  disablePageSwipe: Boolean
}, Mj = [
  "dayclick",
  "daymouseenter",
  "daymouseleave",
  "dayfocusin",
  "dayfocusout",
  "daykeydown",
  "weeknumberclick",
  "transition-start",
  "transition-end",
  "did-move",
  "update:view",
  "update:pages"
], Gb = "__vc_calendar_context__";
function Cj(e, { emit: t, slots: n }) {
  const r = J(null), s = J(null), i = J(null), l = J((/* @__PURE__ */ new Date()).getDate()), u = J(!1), f = J(rc()), h = J(rc()), d = J(e.view), m = J([]), v = J("");
  let g = null, w = null;
  const {
    theme: E,
    color: k,
    displayMode: b,
    locale: D,
    masks: T,
    disabledAttribute: x,
    disabledDates: C
  } = xj(e), M = Y(() => e.rows * e.columns), I = Y(() => e.step || M.value), R = Y(() => Eb(m.value) ?? null), V = Y(() => Yi(m.value) ?? null), $ = Y(
    () => e.minPage || (e.minDate ? Me(e.minDate) : null)
  ), q = Y(
    () => e.maxPage || (e.maxDate ? Me(e.maxDate) : null)
  ), W = Y(() => e.navVisibility), se = Y(() => !!e.showWeeknumbers), me = Y(() => !!e.showIsoWeeknumbers), ce = Y(() => d.value === "monthly"), ye = Y(() => d.value === "weekly"), Ae = Y(() => d.value === "daily"), Ue = () => {
    u.value = !0, t("transition-start");
  }, Re = () => {
    u.value = !1, t("transition-end"), g && (g.resolve(!0), g = null);
  }, re = (ie, de, je = d.value) => Yb(ie, de, je, D.value), Me = (ie) => Fb(ie, d.value, D.value), mt = (ie) => {
    !x.value || !Oe.value || (ie.isDisabled = Oe.value.cellExists(
      x.value.key,
      ie.dayIndex
    ));
  }, At = (ie) => {
    ie.isFocusable = ie.inMonth && ie.day === l.value;
  }, Se = (ie, de) => {
    for (const je of ie)
      for (const B of je.days)
        if (de(B) === !1)
          return;
  }, nt = Y(
    () => m.value.reduce((ie, de) => (ie.push(...de.viewDays), ie), [])
  ), le = Y(() => {
    const ie = [];
    return (e.attributes || []).forEach((de, je) => {
      if (!de || !de.dates)
        return;
      const B = Dp(de, "key") ? de.key : je, fe = de.order || 0;
      ie.push(
        new Bb(
          {
            ...de,
            key: B,
            order: fe
          },
          E.value,
          D.value
        )
      );
    }), x.value && ie.push(x.value), ie;
  }), pe = Y(() => $a(le.value)), Oe = Y(() => {
    const ie = new wj();
    return le.value.forEach((de) => {
      de.ranges.forEach((je) => {
        ie.render(de, je, nt.value);
      });
    }), ie;
  }), ge = Y(() => nt.value.reduce((ie, de) => (ie[de.dayIndex] = { day: de, cells: [] }, ie[de.dayIndex].cells.push(...Oe.value.getCells(de)), ie), {})), ne = (ie, de) => {
    const je = e.showWeeknumbers || e.showIsoWeeknumbers;
    return je == null ? "" : NF(je) ? je ? "left" : "" : je.startsWith("right") ? de > 1 ? "right" : je : ie > 1 ? "left" : je;
  }, be = () => {
    var ie, de;
    if (!pe.value)
      return null;
    const je = le.value.find((Ne) => Ne.pinPage) || le.value[0];
    if (!je || !je.hasRanges)
      return null;
    const [B] = je.ranges, fe = ((ie = B.start) == null ? void 0 : ie.date) || ((de = B.end) == null ? void 0 : de.date);
    return fe ? Me(fe) : null;
  }, Be = () => {
    if (na(R.value))
      return R.value;
    const ie = be();
    return na(ie) ? ie : Me(/* @__PURE__ */ new Date());
  }, N = (ie, de = {}) => {
    const { view: je = d.value, position: B = 1, force: fe } = de, Ne = B > 0 ? 1 - B : -(M.value + B);
    let lt = re(ie, Ne, je), Zt = re(lt, M.value - 1, je);
    return fe || (ph(lt, $.value) ? lt = $.value : pc(Zt, q.value) && (lt = re(q.value, 1 - M.value)), Zt = re(lt, M.value - 1)), { fromPage: lt, toPage: Zt };
  }, A = (ie, de, je = "") => {
    if (je === "none" || je === "fade")
      return je;
    if ((ie == null ? void 0 : ie.view) !== (de == null ? void 0 : de.view))
      return "fade";
    const B = pc(de, ie), fe = ph(de, ie);
    return !B && !fe ? "fade" : je === "slide-v" ? fe ? "slide-down" : "slide-up" : fe ? "slide-right" : "slide-left";
  }, G = (ie = {}) => new Promise((de, je) => {
    const { position: B = 1, force: fe = !1, transition: Ne } = ie, lt = na(ie.page) ? ie.page : Be(), { fromPage: Zt } = N(lt, {
      position: B,
      force: fe
    }), zn = [];
    for (let yn = 0; yn < M.value; yn++) {
      const es = re(Zt, yn), ts = yn + 1, pi = Math.ceil(ts / e.columns), In = e.rows - pi + 1, mi = ts % e.columns || e.columns, _a = e.columns - mi + 1, xo = ne(mi, _a);
      zn.push(
        D.value.getPage({
          ...es,
          view: d.value,
          titlePosition: e.titlePosition,
          trimWeeks: e.trimWeeks,
          position: ts,
          row: pi,
          rowFromEnd: In,
          column: mi,
          columnFromEnd: _a,
          showWeeknumbers: se.value,
          showIsoWeeknumbers: me.value,
          weeknumberPosition: xo
        })
      );
    }
    v.value = A(
      m.value[0],
      zn[0],
      Ne
    ), m.value = zn, v.value && v.value !== "none" ? g = {
      resolve: de,
      reject: je
    } : de(!0);
  }), he = (ie) => {
    const de = R.value ?? Me(/* @__PURE__ */ new Date());
    return re(de, ie);
  }, Ee = (ie, de = {}) => {
    const je = na(ie) ? ie : Me(ie);
    return Object.assign(
      de,
      N(je, {
        ...de,
        force: !0
      })
    ), _j(
      de.fromPage,
      de.toPage,
      d.value,
      D.value
    ).map((fe) => Wb(fe, $.value, q.value)).every((fe) => fe);
  }, qe = (ie, de = {}) => Ee(he(ie), de), Ht = Y(() => qe(-I.value)), Ot = Y(() => qe(I.value)), Vt = async (ie, de = {}) => !de.force && !Ee(ie, de) ? !1 : (de.fromPage && !gj(de.fromPage, R.value) && (s.value && s.value.hide({ hideDelay: 0 }), de.view && (kj("view", 10), d.value = de.view), await G({
    ...de,
    page: de.fromPage,
    position: 1,
    force: !0
  }), t("did-move", m.value)), !0), _n = (ie, de = {}) => Vt(he(ie), de), _t = () => _n(-I.value), Z = () => _n(I.value), oe = (ie) => {
    const de = ce.value ? ".in-month" : "", je = `.id-${D.value.getDayId(ie)}${de}`, B = `${je}.vc-focusable, ${je} .vc-focusable`, fe = r.value;
    if (fe) {
      const Ne = fe.querySelector(B);
      if (Ne)
        return Ne.focus(), !0;
    }
    return !1;
  }, jt = async (ie, de = {}) => oe(ie) ? !0 : (await Vt(ie, de), oe(ie)), Mt = (ie, de) => {
    l.value = ie.day, t("dayclick", ie, de);
  }, pn = (ie, de) => {
    t("daymouseenter", ie, de);
  }, lr = (ie, de) => {
    t("daymouseleave", ie, de);
  }, kn = (ie, de) => {
    l.value = ie.day, i.value = ie, ie.isFocused = !0, t("dayfocusin", ie, de);
  }, Tn = (ie, de) => {
    i.value = null, ie.isFocused = !1, t("dayfocusout", ie, de);
  }, Cr = (ie, de) => {
    t("daykeydown", ie, de);
    const je = ie.noonDate;
    let B = null;
    switch (de.key) {
      case "ArrowLeft": {
        B = $n(je, -1);
        break;
      }
      case "ArrowRight": {
        B = $n(je, 1);
        break;
      }
      case "ArrowUp": {
        B = $n(je, -7);
        break;
      }
      case "ArrowDown": {
        B = $n(je, 7);
        break;
      }
      case "Home": {
        B = $n(je, -ie.weekdayPosition + 1);
        break;
      }
      case "End": {
        B = $n(je, ie.weekdayPositionFromEnd);
        break;
      }
      case "PageUp": {
        de.altKey ? B = D0(je, -1) : B = dc(je, -1);
        break;
      }
      case "PageDown": {
        de.altKey ? B = D0(je, 1) : B = dc(je, 1);
        break;
      }
    }
    B && (de.preventDefault(), jt(B).catch());
  }, Kr = (ie) => {
    const de = i.value;
    de != null && Cr(de, ie);
  }, $s = (ie, de) => {
    t("weeknumberclick", ie, de);
  };
  G({
    page: e.initialPage,
    position: e.initialPagePosition
  }), Vr(() => {
    !e.disablePageSwipe && r.value && (w = Sj(
      r.value,
      ({ toLeft: ie = !1, toRight: de = !1 }) => {
        ie ? Z() : de && _t();
      },
      Ms("touch")
    ));
  }), Cs(() => {
    m.value = [], w && w();
  }), ze(
    () => D.value,
    () => {
      G();
    }
  ), ze(
    () => M.value,
    () => G()
  ), ze(
    () => e.view,
    () => d.value = e.view
  ), ze(
    () => d.value,
    () => {
      Tj("view", () => {
        G();
      }), t("update:view", d.value);
    }
  ), ze(
    () => l.value,
    () => {
      Se(m.value, (ie) => At(ie));
    }
  ), Gn(() => {
    t("update:pages", m.value), Se(m.value, (ie) => {
      mt(ie), At(ie);
    });
  });
  const Qa = {
    emit: t,
    slots: n,
    containerRef: r,
    navPopoverRef: s,
    focusedDay: i,
    inTransition: u,
    navPopoverId: f,
    dayPopoverId: h,
    view: d,
    pages: m,
    transitionName: v,
    theme: E,
    color: k,
    displayMode: b,
    locale: D,
    masks: T,
    attributes: le,
    disabledAttribute: x,
    disabledDates: C,
    attributeContext: Oe,
    days: nt,
    dayCells: ge,
    count: M,
    step: I,
    firstPage: R,
    lastPage: V,
    canMovePrev: Ht,
    canMoveNext: Ot,
    minPage: $,
    maxPage: q,
    isMonthly: ce,
    isWeekly: ye,
    isDaily: Ae,
    navVisibility: W,
    showWeeknumbers: se,
    showIsoWeeknumbers: me,
    getDateAddress: Me,
    canMove: Ee,
    canMoveBy: qe,
    move: Vt,
    moveBy: _n,
    movePrev: _t,
    moveNext: Z,
    onTransitionBeforeEnter: Ue,
    onTransitionAfterEnter: Re,
    tryFocusDate: oe,
    focusDate: jt,
    onKeydown: Kr,
    onDayKeydown: Cr,
    onDayClick: Mt,
    onDayMouseenter: pn,
    onDayMouseleave: lr,
    onDayFocusin: kn,
    onDayFocusout: Tn,
    onWeeknumberClick: $s
  };
  return aa(Gb, Qa), Qa;
}
function di() {
  const e = Tt(Gb);
  if (e)
    return e;
  throw new Error(
    "Calendar context missing. Please verify this component is nested within a valid context provider."
  );
}
const Pj = {
  inheritAttrs: !1
}, ji = /* @__PURE__ */ Le({
  ...Pj,
  __name: "CalendarSlot",
  props: {
    name: null
  },
  setup(e) {
    const { slots: t } = di();
    return (n, r) => y(t)[e.name] ? (F(), tt(xc(y(t)[e.name]), Ki(nn({ key: 0 }, n.$attrs)), null, 16)) : yt(n.$slots, "default", { key: 1 });
  }
});
function mh(e) {
  document && document.dispatchEvent(
    new CustomEvent("show-popover", {
      detail: e
    })
  );
}
function vc(e) {
  document && document.dispatchEvent(
    new CustomEvent("hide-popover", {
      detail: e
    })
  );
}
function zb(e) {
  document && document.dispatchEvent(
    new CustomEvent("toggle-popover", {
      detail: e
    })
  );
}
function qb(e) {
  const { visibility: t } = e, n = t === "click", r = t === "hover", s = t === "hover-focus", i = t === "focus";
  e.autoHide = !n;
  let l = !1, u = !1;
  const f = (w) => {
    n && (zb({
      ...e,
      target: e.target || w.currentTarget
    }), w.stopPropagation());
  }, h = (w) => {
    l || (l = !0, (r || s) && mh({
      ...e,
      target: e.target || w.currentTarget
    }));
  }, d = () => {
    l && (l = !1, (r || s && !u) && vc(e));
  }, m = (w) => {
    u || (u = !0, (i || s) && mh({
      ...e,
      target: e.target || w.currentTarget
    }));
  }, v = (w) => {
    u && !Fu(w.currentTarget, w.relatedTarget) && (u = !1, (i || s && !l) && vc(e));
  }, g = {};
  switch (e.visibility) {
    case "click":
      g.click = f;
      break;
    case "hover":
      g.mousemove = h, g.mouseleave = d;
      break;
    case "focus":
      g.focusin = m, g.focusout = v;
      break;
    case "hover-focus":
      g.mousemove = h, g.mouseleave = d, g.focusin = m, g.focusout = v;
      break;
  }
  return g;
}
const N0 = (e) => {
  const t = nc(e);
  if (t == null)
    return;
  const n = t.popoverHandlers;
  !n || !n.length || (n.forEach((r) => r()), delete t.popoverHandlers);
}, $0 = (e, t) => {
  const n = nc(e);
  if (n == null)
    return;
  const r = [], s = qb(t);
  Object.entries(s).forEach(([i, l]) => {
    r.push(ys(n, i, l));
  }), n.popoverHandlers = r;
}, Kb = {
  mounted(e, t) {
    const { value: n } = t;
    n && $0(e, n);
  },
  updated(e, t) {
    const { oldValue: n, value: r } = t, s = n == null ? void 0 : n.visibility, i = r == null ? void 0 : r.visibility;
    s !== i && (s && (N0(e), i || vc(n)), i && $0(e, r));
  },
  unmounted(e) {
    N0(e);
  }
}, Nj = ["disabled"], $j = {
  key: 1,
  type: "button",
  class: "vc-title"
}, Ij = ["disabled"], Zb = /* @__PURE__ */ Le({
  __name: "CalendarHeader",
  props: {
    page: { type: Object, required: !0 },
    layout: String,
    isLg: Boolean,
    isXl: Boolean,
    is2xl: Boolean,
    hideTitle: Boolean,
    hideArrows: Boolean
  },
  setup(e) {
    const t = e, {
      navPopoverId: n,
      navVisibility: r,
      canMovePrev: s,
      movePrev: i,
      canMoveNext: l,
      moveNext: u
    } = di(), f = Y(() => {
      switch (t.page.titlePosition) {
        case "left":
          return "bottom-start";
        case "right":
          return "bottom-end";
        default:
          return "bottom";
      }
    }), h = Y(() => {
      const { page: E } = t;
      return {
        id: n.value,
        visibility: r.value,
        placement: f.value,
        modifiers: [{ name: "flip", options: { fallbackPlacements: ["bottom"] } }],
        data: { page: E },
        isInteractive: !0
      };
    }), d = Y(() => t.page.titlePosition.includes("left")), m = Y(() => t.page.titlePosition.includes("right")), v = Y(() => t.layout ? t.layout : d.value ? "tu-pn" : m.value ? "pn-tu" : "p-tu-n;"), g = Y(() => ({
      prev: v.value.includes("p") && !t.hideArrows,
      title: v.value.includes("t") && !t.hideTitle,
      next: v.value.includes("n") && !t.hideArrows
    })), w = Y(() => ({ gridTemplateColumns: v.value.split("").map((k) => {
      switch (k) {
        case "p":
          return "[prev] auto";
        case "n":
          return "[next] auto";
        case "t":
          return "[title] auto";
        case "-":
          return "1fr";
        default:
          return "";
      }
    }).join(" ") }));
    return (E, k) => (F(), z("div", {
      class: it(["vc-header", { "is-lg": e.isLg, "is-xl": e.isXl, "is-2xl": e.is2xl }]),
      style: Es(y(w))
    }, [
      y(g).prev ? (F(), z("button", {
        key: 0,
        type: "button",
        class: "vc-arrow vc-prev vc-focus",
        disabled: !y(s),
        onClick: k[0] || (k[0] = //@ts-ignore
        (...b) => y(i) && y(i)(...b)),
        onKeydown: k[1] || (k[1] = Fd(
          //@ts-ignore
          (...b) => y(i) && y(i)(...b),
          ["space", "enter"]
        ))
      }, [
        Pe(ji, {
          name: "header-prev-button",
          disabled: !y(s)
        }, {
          default: We(() => [
            Pe(ro, {
              name: "ChevronLeft",
              size: "24"
            })
          ]),
          _: 1
        }, 8, ["disabled"])
      ], 40, Nj)) : Te("", !0),
      y(g).title ? br((F(), z("button", $j, [
        Pe(ji, {
          name: "header-title",
          title: e.page.title
        }, {
          default: We(() => [
            j("span", null, ke(e.page.title), 1)
          ]),
          _: 1
        }, 8, ["title"])
      ])), [
        [y(Kb), y(h)]
      ]) : Te("", !0),
      y(g).next ? (F(), z("button", {
        key: 2,
        type: "button",
        class: "vc-arrow vc-next vc-focus",
        disabled: !y(l),
        onClick: k[2] || (k[2] = //@ts-ignore
        (...b) => y(u) && y(u)(...b)),
        onKeydown: k[3] || (k[3] = Fd(
          //@ts-ignore
          (...b) => y(u) && y(u)(...b),
          ["space", "enter"]
        ))
      }, [
        Pe(ji, {
          name: "header-next-button",
          disabled: !y(l)
        }, {
          default: We(() => [
            Pe(ro, {
              name: "ChevronRight",
              size: "24"
            })
          ]),
          _: 1
        }, 8, ["disabled"])
      ], 40, Ij)) : Te("", !0)
    ], 6));
  }
}), Lj = Le({
  directives: { popover: Kb },
  components: { CalendarSlot: ji },
  props: {
    day: { type: Object, required: !0 }
  },
  setup(e) {
    const {
      locale: t,
      theme: n,
      attributeContext: r,
      dayPopoverId: s,
      slots: i,
      onDayClick: l,
      onDayMouseenter: u,
      onDayMouseleave: f,
      onDayFocusin: h,
      onDayFocusout: d,
      onDayKeydown: m
    } = di(), v = Y(() => e.day), g = Y(() => r.value.getCells(v.value)), w = Y(
      () => g.value.map((ce) => ce.data)
    ), E = Y(() => ({
      ...v.value,
      attributes: w.value,
      attributeCells: g.value
    }));
    function k({ data: ce }, { popovers: ye }) {
      const { key: Ae, customData: Ue, popover: Re } = ce;
      if (!Re)
        return;
      const re = p0(
        {
          key: Ae,
          customData: Ue,
          attribute: ce
        },
        { ...Re },
        {
          visibility: Re.label ? "hover" : "click",
          placement: "bottom",
          isInteractive: !Re.label
        }
      );
      ye.splice(0, 0, re);
    }
    const b = Y(() => {
      const ce = {
        ...n.value.prepareRender({}),
        popovers: []
      };
      return g.value.forEach((ye) => {
        n.value.render(ye, ce), k(ye, ce);
      }), ce;
    }), D = Y(() => b.value.highlights), T = Y(() => !!$a(D.value)), x = Y(() => b.value.content), C = Y(() => b.value.dots), M = Y(() => !!$a(C.value)), I = Y(() => b.value.bars), R = Y(() => !!$a(I.value)), V = Y(() => b.value.popovers), $ = Y(
      () => V.value.map((ce) => ce.attribute)
    ), q = Y(() => [
      "vc-day",
      ...v.value.classes,
      { "vc-day-box-center-center": !i["day-content"] },
      { "is-not-in-month": !e.day.inMonth }
    ]), W = Y(() => {
      let ce;
      v.value.isFocusable ? ce = "0" : ce = "-1";
      const ye = [
        "vc-day-content vc-focusable vc-focus vc-attr",
        { "vc-disabled": v.value.isDisabled },
        Zs(Yi(D.value), "contentClass"),
        Zs(Yi(x.value), "class") || ""
      ], Ae = {
        ...Zs(Yi(D.value), "contentStyle"),
        ...Zs(Yi(x.value), "style")
      };
      return {
        class: ye,
        style: Ae,
        tabindex: ce,
        "aria-label": v.value.ariaLabel,
        "aria-disabled": !!v.value.isDisabled,
        role: "button"
      };
    }), se = Y(() => ({
      click(ce) {
        l(E.value, ce);
      },
      mouseenter(ce) {
        u(E.value, ce);
      },
      mouseleave(ce) {
        f(E.value, ce);
      },
      focusin(ce) {
        h(E.value, ce);
      },
      focusout(ce) {
        d(E.value, ce);
      },
      keydown(ce) {
        m(E.value, ce);
      }
    })), me = Y(() => $a(V.value) ? p0(
      {
        id: s.value,
        data: { day: v, attributes: $.value }
      },
      ...V.value
    ) : null);
    return {
      attributes: w,
      attributeCells: g,
      bars: I,
      dayClasses: q,
      dayContentProps: W,
      dayContentEvents: se,
      dayPopover: me,
      glyphs: b,
      dots: C,
      hasDots: M,
      hasBars: R,
      highlights: D,
      hasHighlights: T,
      locale: t,
      popovers: V
    };
  }
}), Rj = {
  key: 0,
  class: "vc-highlights vc-day-layer"
}, Fj = {
  key: 1,
  class: "vc-day-layer vc-day-box-center-bottom"
}, Yj = { class: "vc-dots" }, Wj = {
  key: 2,
  class: "vc-day-layer vc-day-box-center-bottom"
}, Uj = { class: "vc-bars" };
function Bj(e, t, n, r, s, i) {
  const l = zs("CalendarSlot"), u = zA("popover");
  return F(), z("div", {
    class: it(e.dayClasses)
  }, [
    e.hasHighlights ? (F(), z("div", Rj, [
      (F(!0), z(Xe, null, Lt(e.highlights, ({ key: f, wrapperClass: h, class: d, style: m }) => (F(), z("div", {
        key: f,
        class: it(h)
      }, [
        j("div", {
          class: it(d),
          style: Es(m)
        }, null, 6)
      ], 2))), 128))
    ])) : Te("", !0),
    Pe(l, {
      name: "day-content",
      day: e.day,
      attributes: e.attributes,
      "attribute-cells": e.attributeCells,
      dayProps: e.dayContentProps,
      dayEvents: e.dayContentEvents,
      locale: e.locale
    }, {
      default: We(() => [
        br((F(), z("div", nn(e.dayContentProps, qA(e.dayContentEvents, !0)), [
          li(ke(e.day.label), 1)
        ], 16)), [
          [u, e.dayPopover]
        ])
      ]),
      _: 1
    }, 8, ["day", "attributes", "attribute-cells", "dayProps", "dayEvents", "locale"]),
    e.hasDots ? (F(), z("div", Fj, [
      j("div", Yj, [
        (F(!0), z(Xe, null, Lt(e.dots, ({ key: f, class: h, style: d }) => (F(), z("span", {
          key: f,
          class: it(h),
          style: Es(d)
        }, null, 6))), 128))
      ])
    ])) : Te("", !0),
    e.hasBars ? (F(), z("div", Wj, [
      j("div", Uj, [
        (F(!0), z(Xe, null, Lt(e.bars, ({ key: f, class: h, style: d }) => (F(), z("span", {
          key: f,
          class: it(h),
          style: Es(d)
        }, null, 6))), 128))
      ])
    ])) : Te("", !0)
  ], 2);
}
const Hj = /* @__PURE__ */ qa(Lj, [["render", Bj]]), Vj = {
  name: "CalendarPane",
  inheritAttrs: !1,
  components: { CalendarHeader: Zb, CalendarDay: Hj },
  props: {
    page: { type: Object, required: !0 }
  },
  setup() {
    const { onWeeknumberClick: e } = di();
    return {
      onWeeknumberClick: e
    };
  }
}, jj = { class: "vc-weekdays" }, Gj = ["onClick"];
function zj(e, t, n, r, s, i) {
  const l = zs("CalendarHeader"), u = zs("CalendarDay");
  return F(), z("div", {
    class: it([
      "vc-pane",
      `row-${n.page.row}`,
      `row-from-end-${n.page.rowFromEnd}`,
      `column-${n.page.column}`,
      `column-from-end-${n.page.columnFromEnd}`
    ]),
    ref: "pane"
  }, [
    Pe(l, {
      page: n.page,
      "is-lg": "",
      "hide-arrows": ""
    }, null, 8, ["page"]),
    j("div", {
      class: it(["vc-weeks", {
        [`vc-show-weeknumbers-${n.page.weeknumberPosition}`]: n.page.weeknumberPosition
      }])
    }, [
      j("div", jj, [
        (F(!0), z(Xe, null, Lt(n.page.weekdays, ({ weekday: f, label: h }, d) => (F(), z("div", {
          key: d,
          class: it(`vc-weekday vc-weekday-${f}`)
        }, ke(h), 3))), 128))
      ]),
      (F(!0), z(Xe, null, Lt(n.page.viewWeeks, (f) => (F(), z("div", {
        key: `weeknumber-${f.weeknumber}`,
        class: "vc-week"
      }, [
        n.page.weeknumberPosition ? (F(), z("div", {
          key: 0,
          class: it(["vc-weeknumber", `is-${n.page.weeknumberPosition}`])
        }, [
          j("span", {
            class: it(["vc-weeknumber-content"]),
            onClick: (h) => r.onWeeknumberClick(f, h)
          }, ke(f.weeknumberDisplay), 9, Gj)
        ], 2)) : Te("", !0),
        (F(!0), z(Xe, null, Lt(f.days, (h) => (F(), tt(u, {
          key: h.id,
          day: h
        }, null, 8, ["day"]))), 128))
      ]))), 128))
    ], 2)
  ], 2);
}
const qj = /* @__PURE__ */ qa(Vj, [["render", zj]]), Kj = Le({
  name: "Popover",
  inheritAttrs: !1,
  emits: ["before-show", "after-show", "before-hide", "after-hide"],
  props: {
    id: { type: String, required: !0 },
    showDelay: { type: Number, default: 0 },
    hideDelay: { type: Number, default: 110 },
    boundarySelector: { type: String }
  },
  setup(e, { emit: t }) {
    let n;
    const r = J();
    let s = null, i = null;
    const l = El({
      isVisible: !1,
      target: null,
      data: null,
      transition: "slide-fade",
      placement: "bottom",
      direction: "",
      positionFixed: !1,
      modifiers: [],
      isInteractive: !0,
      visibility: "click",
      isHovered: !1,
      isFocused: !1,
      autoHide: !1,
      force: !1
    });
    function u(re) {
      re && (l.direction = re.split("-")[0]);
    }
    function f({ placement: re, options: Me }) {
      u(re || (Me == null ? void 0 : Me.placement));
    }
    const h = Y(() => ({
      placement: l.placement,
      strategy: l.positionFixed ? "fixed" : "absolute",
      boundary: "",
      modifiers: [
        {
          name: "onUpdate",
          enabled: !0,
          phase: "afterWrite",
          fn: f
        },
        ...l.modifiers || []
      ],
      onFirstUpdate: f
    })), d = Y(() => {
      const re = l.direction === "left" || l.direction === "right";
      let Me = "";
      if (l.placement) {
        const mt = l.placement.split("-");
        mt.length > 1 && (Me = mt[1]);
      }
      return ["start", "top", "left"].includes(Me) ? re ? "top" : "left" : ["end", "bottom", "right"].includes(Me) ? re ? "bottom" : "right" : re ? "middle" : "center";
    });
    function m() {
      i && (i.destroy(), i = null);
    }
    function v() {
      rr(() => {
        const re = nc(l.target);
        !re || !r.value || (i && i.state.elements.reference !== re && m(), i ? i.update() : i = _R(
          re,
          r.value,
          h.value
        ));
      });
    }
    function g(re) {
      Object.assign(l, Ob(re, "force"));
    }
    function w(re, Me) {
      clearTimeout(n), re > 0 ? n = setTimeout(Me, re) : Me();
    }
    function E(re) {
      return !re || !i ? !1 : nc(re) === i.state.elements.reference;
    }
    async function k(re = {}) {
      l.force || (re.force && (l.force = !0), w(re.showDelay ?? e.showDelay, () => {
        l.isVisible && (l.force = !1, t("after-show")), g({
          ...re,
          isVisible: !0
        }), v();
      }));
    }
    function b(re = {}) {
      i && (re.target && !E(re.target) || l.force || (re.force && (l.force = !0), w(re.hideDelay ?? e.hideDelay, () => {
        l.isVisible || (l.force = !1), l.isVisible = !1;
      })));
    }
    function D(re = {}) {
      re.target != null && (l.isVisible && E(re.target) ? b(re) : k(re));
    }
    function T(re) {
      if (!i)
        return;
      const Me = i.state.elements.reference;
      if (!r.value || !Me)
        return;
      const mt = re.target;
      Fu(r.value, mt) || Fu(Me, mt) || b({ force: !0 });
    }
    function x(re) {
      (re.key === "Esc" || re.key === "Escape") && b();
    }
    function C({ detail: re }) {
      !re.id || re.id !== e.id || k(re);
    }
    function M({ detail: re }) {
      !re.id || re.id !== e.id || b(re);
    }
    function I({ detail: re }) {
      !re.id || re.id !== e.id || D(re);
    }
    function R() {
      ys(document, "keydown", x), ys(document, "click", T), ys(document, "show-popover", C), ys(document, "hide-popover", M), ys(document, "toggle-popover", I);
    }
    function V() {
      _s(document, "keydown", x), _s(document, "click", T), _s(document, "show-popover", C), _s(document, "hide-popover", M), _s(document, "toggle-popover", I);
    }
    function $(re) {
      t("before-show", re);
    }
    function q(re) {
      l.force = !1, t("after-show", re);
    }
    function W(re) {
      t("before-hide", re);
    }
    function se(re) {
      l.force = !1, m(), t("after-hide", re);
    }
    function me(re) {
      re.stopPropagation();
    }
    function ce() {
      l.isHovered = !0, l.isInteractive && ["hover", "hover-focus"].includes(l.visibility) && k();
    }
    function ye() {
      if (l.isHovered = !1, !i)
        return;
      const re = i.state.elements.reference;
      l.autoHide && !l.isFocused && (!re || re !== document.activeElement) && ["hover", "hover-focus"].includes(l.visibility) && b();
    }
    function Ae() {
      l.isFocused = !0, l.isInteractive && ["focus", "hover-focus"].includes(l.visibility) && k();
    }
    function Ue(re) {
      ["focus", "hover-focus"].includes(l.visibility) && (!re.relatedTarget || !Fu(r.value, re.relatedTarget)) && (l.isFocused = !1, !l.isHovered && l.autoHide && b());
    }
    function Re() {
      s != null && (s.disconnect(), s = null);
    }
    return ze(
      () => r.value,
      (re) => {
        Re(), re && (s = new ResizeObserver(() => {
          i && i.update();
        }), s.observe(re));
      }
    ), ze(() => l.placement, u, {
      immediate: !0
    }), Vr(() => {
      R();
    }), Cs(() => {
      m(), Re(), V();
    }), {
      ...io(l),
      popoverRef: r,
      alignment: d,
      hide: b,
      setupPopper: v,
      beforeEnter: $,
      afterEnter: q,
      beforeLeave: W,
      afterLeave: se,
      onClick: me,
      onMouseOver: ce,
      onMouseLeave: ye,
      onFocusIn: Ae,
      onFocusOut: Ue
    };
  }
});
function Zj(e, t, n, r, s, i) {
  return F(), z("div", {
    class: it(["vc-popover-content-wrapper", { "is-interactive": e.isInteractive }]),
    ref: "popoverRef",
    onClick: t[0] || (t[0] = (...l) => e.onClick && e.onClick(...l)),
    onMouseover: t[1] || (t[1] = (...l) => e.onMouseOver && e.onMouseOver(...l)),
    onMouseleave: t[2] || (t[2] = (...l) => e.onMouseLeave && e.onMouseLeave(...l)),
    onFocusin: t[3] || (t[3] = (...l) => e.onFocusIn && e.onFocusIn(...l)),
    onFocusout: t[4] || (t[4] = (...l) => e.onFocusOut && e.onFocusOut(...l))
  }, [
    Pe(Ol, {
      name: `vc-${e.transition}`,
      appear: "",
      onBeforeEnter: e.beforeEnter,
      onAfterEnter: e.afterEnter,
      onBeforeLeave: e.beforeLeave,
      onAfterLeave: e.afterLeave
    }, {
      default: We(() => [
        e.isVisible ? (F(), z("div", nn({
          key: 0,
          tabindex: "-1",
          class: `vc-popover-content direction-${e.direction}`
        }, e.$attrs), [
          yt(e.$slots, "default", {
            direction: e.direction,
            alignment: e.alignment,
            data: e.data,
            hide: e.hide
          }, () => [
            li(ke(e.data), 1)
          ]),
          j("span", {
            class: it([
              "vc-popover-caret",
              `direction-${e.direction}`,
              `align-${e.alignment}`
            ])
          }, null, 2)
        ], 16)) : Te("", !0)
      ]),
      _: 3
    }, 8, ["name", "onBeforeEnter", "onAfterEnter", "onBeforeLeave", "onAfterLeave"])
  ], 34);
}
const Ap = /* @__PURE__ */ qa(Kj, [["render", Zj]]), Xj = {
  value: { type: Object, required: !0 }
}, Jj = ["input"], Qj = "__vc_calendar_nav_context__";
function eG(e, { emit: t }) {
  const n = J(!0), r = J(0), s = J(0), i = 12, l = J(null), { locale: u, masks: f, canMove: h, getDateAddress: d } = di();
  function m() {
    setTimeout(() => {
      if (l.value == null)
        return;
      const Se = l.value.querySelector(
        ".vc-nav-item:not(:disabled)"
      );
      Se && Se.focus();
    }, 10);
  }
  function v(Se, nt) {
    t("input", { month: Se, year: nt }, { position: $.value });
  }
  function g(Se) {
    r.value = Se, n.value = !0, m();
  }
  function w(Se) {
    const { year: nt } = d(/* @__PURE__ */ new Date()), le = Se * i, pe = le + i, Oe = [];
    for (let ge = le; ge < pe; ge += 1) {
      let ne = !1;
      for (let be = 1; be < 12 && (ne = h({ month: be, year: ge }, { position: $.value }), !ne); be++)
        ;
      Oe.push({
        year: ge,
        id: ge.toString(),
        label: ge.toString(),
        ariaLabel: ge.toString(),
        isActive: ge === V.value,
        isCurrent: ge === nt,
        isDisabled: !ne,
        click: () => g(ge)
      });
    }
    return Oe;
  }
  function E(Se) {
    const { month: nt, year: le } = d(/* @__PURE__ */ new Date());
    return Rb().map((pe, Oe) => {
      const ge = Oe + 1;
      return {
        month: ge,
        year: Se,
        id: `${Se}.${Ct(ge, 2)}`,
        label: u.value.formatDate(pe, f.value.navMonths),
        ariaLabel: u.value.formatDate(pe, "MMMM YYYY"),
        isActive: ge === R.value && Se === V.value,
        isCurrent: ge === nt && Se === le,
        isDisabled: !h(
          { month: ge, year: Se },
          { position: $.value }
        ),
        click: () => v(ge, Se)
      };
    });
  }
  function k(Se) {
    return Math.floor(Se / i);
  }
  function b() {
    n.value = !n.value;
  }
  function D() {
    Ue.value && (n.value && x(), M());
  }
  function T() {
    Me.value && (n.value && C(), I());
  }
  function x() {
    r.value--;
  }
  function C() {
    r.value++;
  }
  function M() {
    s.value--;
  }
  function I() {
    s.value++;
  }
  const R = Y(() => {
    var Se;
    return ((Se = e.value) == null ? void 0 : Se.month) || 0;
  }), V = Y(() => {
    var Se;
    return ((Se = e.value) == null ? void 0 : Se.year) || 0;
  }), $ = Y(() => {
    var Se;
    return ((Se = e.value) == null ? void 0 : Se.position) || 1;
  }), q = Y(() => E(r.value)), W = Y(() => w(s.value)), se = Y(() => Eb(W.value.map((Se) => Se.year))), me = Y(() => Yi(W.value.map((Se) => Se.year))), ce = Y(() => n.value ? r.value : `${se.value} - ${me.value}`), ye = Y(
    () => E(r.value - 1).some((Se) => !Se.isDisabled)
  ), Ae = Y(
    () => w(s.value - 1).some((Se) => !Se.isDisabled)
  ), Ue = Y(
    () => n.value ? ye.value : Ae.value
  ), Re = Y(
    () => E(r.value + 1).some((Se) => !Se.isDisabled)
  ), re = Y(
    () => w(s.value + 1).some((Se) => !Se.isDisabled)
  ), Me = Y(
    () => n.value ? Re.value : re.value
  ), mt = Y(
    () => n.value ? q.value : W.value
  );
  ze(
    () => V.value,
    () => {
      r.value = V.value;
    }
  ), ze(
    () => r.value,
    (Se) => {
      s.value = k(Se);
    }
  ), r.value = V.value, Vr(() => m());
  const At = {
    navContainer: l,
    title: ce,
    monthMode: n,
    currentMonth: R,
    currentYear: V,
    activeItems: mt,
    prevItemsEnabled: Ue,
    nextItemsEnabled: Me,
    toggleMode: b,
    movePrev: D,
    moveNext: T,
    movePrevYear: x,
    moveNextYear: C,
    movePrevYearGroup: M,
    moveNextYearGroup: I
  };
  return aa(Qj, At), At;
}
const tG = { class: "vc-nav-header" }, nG = ["disabled"], rG = ["disabled"], aG = { class: "vc-nav-items" }, sG = ["data-id", "aria-label", "disabled", "onClick", "onKeydown"], iG = /* @__PURE__ */ Le({
  __name: "CalendarNav",
  props: Xj,
  emits: Jj,
  setup(e, { emit: t }) {
    const n = e, {
      navContainer: r,
      title: s,
      prevItemsEnabled: i,
      nextItemsEnabled: l,
      activeItems: u,
      toggleMode: f,
      movePrev: h,
      moveNext: d
    } = eG(n, { emit: t });
    return (m, v) => (F(), z("div", {
      class: "vc-nav-container",
      ref_key: "navContainer",
      ref: r
    }, [
      j("div", tG, [
        j("button", {
          type: "button",
          class: "vc-nav-arrow is-left vc-focus",
          disabled: !y(i),
          onClick: v[0] || (v[0] = //@ts-ignore
          (...g) => y(h) && y(h)(...g)),
          onKeydown: v[1] || (v[1] = (g) => y($u)(g, y(h)))
        }, [
          Pe(ji, {
            name: "nav-prev-button",
            move: y(h),
            disabled: !y(i)
          }, {
            default: We(() => [
              Pe(ro, {
                name: "ChevronLeft",
                width: "22px",
                height: "24px"
              })
            ]),
            _: 1
          }, 8, ["move", "disabled"])
        ], 40, nG),
        j("button", {
          type: "button",
          class: "vc-nav-title vc-focus",
          onClick: v[2] || (v[2] = //@ts-ignore
          (...g) => y(f) && y(f)(...g)),
          onKeydown: v[3] || (v[3] = (g) => y($u)(g, y(f)))
        }, ke(y(s)), 33),
        j("button", {
          type: "button",
          class: "vc-nav-arrow is-right vc-focus",
          disabled: !y(l),
          onClick: v[4] || (v[4] = //@ts-ignore
          (...g) => y(d) && y(d)(...g)),
          onKeydown: v[5] || (v[5] = (g) => y($u)(g, y(d)))
        }, [
          Pe(ji, {
            name: "nav-next-button",
            move: y(d),
            disabled: !y(l)
          }, {
            default: We(() => [
              Pe(ro, {
                name: "ChevronRight",
                width: "22px",
                height: "24px"
              })
            ]),
            _: 1
          }, 8, ["move", "disabled"])
        ], 40, rG)
      ]),
      j("div", aG, [
        (F(!0), z(Xe, null, Lt(y(u), (g) => (F(), z("button", {
          key: g.label,
          type: "button",
          "data-id": g.id,
          "aria-label": g.ariaLabel,
          class: it(["vc-nav-item vc-focus", [
            g.isActive ? "is-active" : g.isCurrent ? "is-current" : ""
          ]]),
          disabled: g.isDisabled,
          onClick: g.click,
          onKeydown: (w) => y($u)(w, g.click)
        }, ke(g.label), 43, sG))), 128))
      ])
    ], 512));
  }
}), oG = {
  __name: "CalendarNavPopover",
  setup(e) {
    const { navPopoverId: t, color: n, displayMode: r, navPopoverRef: s, move: i } = di();
    return (l, u) => (F(), tt(Ap, {
      id: y(t),
      class: it(["vc-nav-popover-container", `vc-${y(n)}`, `vc-${y(r)}`]),
      ref_key: "navPopoverRef",
      ref: s
    }, {
      default: We(({ data: f }) => [
        Pe(iG, {
          value: f.page,
          onInput: y(i)
        }, null, 8, ["value", "onInput"])
      ]),
      _: 1
    }, 8, ["id", "class"]));
  }
}, lG = Le({
  name: "PopoverRow",
  props: {
    attribute: { type: Object, required: !0 }
  },
  setup(e) {
    return {
      indicator: Y(() => {
        const { content: n, highlight: r, dot: s, bar: i, popover: l } = e.attribute;
        return l && l.hideIndicator ? null : n ? {
          class: `vc-bar vc-day-popover-row-bar vc-attr vc-${n.base.color}`
        } : r ? {
          class: `vc-highlight-bg-solid vc-day-popover-row-highlight vc-attr vc-${r.base.color}`
        } : s ? {
          class: `vc-dot vc-attr vc-${s.base.color}`
        } : i ? {
          class: `vc-bar vc-day-popover-row-bar vc-attr vc-${i.base.color}`
        } : null;
      })
    };
  }
}), uG = { class: "vc-day-popover-row" }, cG = {
  key: 0,
  class: "vc-day-popover-row-indicator"
}, fG = { class: "vc-day-popover-row-label" };
function dG(e, t, n, r, s, i) {
  return F(), z("div", uG, [
    e.indicator ? (F(), z("div", cG, [
      j("span", {
        class: it(e.indicator.class)
      }, null, 2)
    ])) : Te("", !0),
    j("div", fG, [
      yt(e.$slots, "default", {}, () => [
        li(ke(e.attribute.popover ? e.attribute.popover.label : "No content provided"), 1)
      ])
    ])
  ]);
}
const hG = /* @__PURE__ */ qa(lG, [["render", dG]]), pG = { class: "vc-day-popover-container" }, mG = {
  key: 0,
  class: "vc-day-popover-header"
}, vG = /* @__PURE__ */ Le({
  __name: "CalendarDayPopover",
  setup(e) {
    const { dayPopoverId: t, displayMode: n, color: r, masks: s, locale: i } = di();
    function l(f, h) {
      return i.value.formatDate(f, h);
    }
    function u(f) {
      return i.value.formatDate(f.date, s.value.dayPopover);
    }
    return (f, h) => (F(), tt(Ap, {
      id: y(t),
      class: it([`vc-${y(r)}`, `vc-${y(n)}`])
    }, {
      default: We(({ data: { day: d, attributes: m }, hide: v }) => [
        yt(f.$slots, "default", {
          day: d,
          dayTitle: u(d),
          attributes: m,
          format: l,
          masks: y(s),
          hide: v
        }, () => [
          j("div", pG, [
            y(s).dayPopover ? (F(), z("div", mG, ke(u(d)), 1)) : Te("", !0),
            (F(!0), z(Xe, null, Lt(m, (g) => (F(), tt(hG, {
              key: g.key,
              attribute: g
            }, null, 8, ["attribute"]))), 128))
          ])
        ])
      ]),
      _: 3
    }, 8, ["id", "class"]));
  }
}), gG = Le({
  name: "Calendar",
  components: {
    CalendarHeader: Zb,
    CalendarPane: qj,
    CalendarNavPopover: oG,
    CalendarDayPopover: vG
  },
  emits: Mj,
  props: Aj,
  setup(e, { emit: t, slots: n }) {
    return Cj(e, { emit: t, slots: n });
  }
}), _G = { class: "vc-pane-header-wrapper" };
function yG(e, t, n, r, s, i) {
  const l = zs("CalendarHeader"), u = zs("CalendarPane"), f = zs("CalendarDayPopover"), h = zs("CalendarNavPopover");
  return F(), z(Xe, null, [
    j("div", nn({ "data-helptext": "Press the arrow keys to navigate by day, Home and End to navigate to week ends, PageUp and PageDown to navigate by month, Alt+PageUp and Alt+PageDown to navigate by year" }, e.$attrs, {
      class: [
        "vc-container",
        `vc-${e.view}`,
        `vc-${e.color}`,
        `vc-${e.displayMode}`,
        {
          "vc-expanded": e.expanded,
          "vc-bordered": !e.borderless,
          "vc-transparent": e.transparent
        }
      ],
      onMouseup: t[0] || (t[0] = xs(() => {
      }, ["prevent"])),
      ref: "containerRef"
    }), [
      j("div", {
        class: it(["vc-pane-container", { "in-transition": e.inTransition }])
      }, [
        j("div", _G, [
          e.firstPage ? (F(), tt(l, {
            key: 0,
            page: e.firstPage,
            "is-lg": "",
            "hide-title": ""
          }, null, 8, ["page"])) : Te("", !0)
        ]),
        Pe(Ol, {
          name: `vc-${e.transitionName}`,
          onBeforeEnter: e.onTransitionBeforeEnter,
          onAfterEnter: e.onTransitionAfterEnter
        }, {
          default: We(() => [
            (F(), z("div", {
              key: e.pages[0].id,
              class: "vc-pane-layout",
              style: Es({
                gridTemplateColumns: `repeat(${e.columns}, 1fr)`
              })
            }, [
              (F(!0), z(Xe, null, Lt(e.pages, (d) => (F(), tt(u, {
                key: d.id,
                page: d
              }, null, 8, ["page"]))), 128))
            ], 4))
          ]),
          _: 1
        }, 8, ["name", "onBeforeEnter", "onAfterEnter"]),
        yt(e.$slots, "footer")
      ], 2)
    ], 16),
    Pe(f, null, {
      default: We((d) => [
        yt(e.$slots, "day-popover", Ki(Ph(d)))
      ]),
      _: 3
    }),
    Pe(h)
  ], 64);
}
const bG = /* @__PURE__ */ qa(gG, [["render", yG]]), wG = { class: "vc-base-select" }, EG = ["value"], OG = ["value", "disabled"], DG = {
  inheritAttrs: !1
}, qo = /* @__PURE__ */ Object.assign(DG, {
  __name: "BaseSelect",
  props: {
    options: Array,
    modelValue: null,
    alignRight: Boolean,
    alignLeft: Boolean,
    showIcon: Boolean,
    small: Boolean
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, n) => (F(), z("div", wG, [
      e.showIcon ? (F(), tt(ro, {
        key: 0,
        name: "ChevronDown",
        size: e.small ? "16" : "18"
      }, null, 8, ["size"])) : Te("", !0),
      j("select", nn(t.$attrs, {
        value: e.modelValue,
        class: ["vc-focus", {
          "vc-has-icon": e.showIcon,
          "vc-align-right": e.alignRight,
          "vc-align-left": e.alignLeft,
          "vc-small": e.small
        }],
        onChange: n[0] || (n[0] = (r) => t.$emit("update:modelValue", r.target.value))
      }), [
        (F(!0), z(Xe, null, Lt(e.options, (r) => (F(), z("option", {
          key: r.value,
          value: r.value,
          disabled: r.disabled
        }, ke(r.label), 9, OG))), 128))
      ], 16, EG)
    ]));
  }
}), Xb = "__vc_date_picker_context__", xG = {
  ...Vb,
  mode: { type: String, default: "date" },
  modelValue: {
    type: [Number, String, Date, Object]
  },
  modelModifiers: {
    type: Object,
    default: () => ({})
  },
  rules: [String, Object],
  is24hr: Boolean,
  hideTimeHeader: Boolean,
  timeAccuracy: { type: Number, default: 2 },
  isRequired: Boolean,
  isRange: Boolean,
  updateOnInput: {
    type: Boolean,
    default: () => Ms("datePicker.updateOnInput")
  },
  inputDebounce: {
    type: Number,
    default: () => Ms("datePicker.inputDebounce")
  },
  popover: {
    type: [Boolean, Object],
    default: !0
  },
  dragAttribute: Object,
  selectAttribute: Object,
  attributes: [Object, Array]
}, SG = [
  "update:modelValue",
  "drag",
  "dayclick",
  "daykeydown",
  "popover-will-show",
  "popover-did-show",
  "popover-will-hide",
  "popover-did-hide"
];
function kG(e, t) {
  const n = jb(e), { locale: r, masks: s, disabledAttribute: i } = n, { emit: l } = t, u = J(!1), f = J(rc()), h = J(null), d = J(null), m = J(["", ""]), v = J(null), g = J(null);
  let w, E, k = !0;
  const b = Y(() => e.isRange || e.modelModifiers.range === !0), D = Y(
    () => b.value && h.value != null ? h.value.start : null
  ), T = Y(
    () => b.value && h.value != null ? h.value.end : null
  ), x = Y(() => e.mode.toLowerCase() === "date"), C = Y(
    () => e.mode.toLowerCase() === "datetime"
  ), M = Y(() => e.mode.toLowerCase() === "time"), I = Y(() => !!d.value), R = Y(() => {
    let B = "date";
    e.modelModifiers.number && (B = "number"), e.modelModifiers.string && (B = "string");
    const fe = s.value.modelValue || "iso";
    return At({ type: B, mask: fe });
  }), V = Y(
    () => Ht(d.value ?? h.value)
  ), $ = Y(() => M.value ? e.is24hr ? s.value.inputTime24hr : s.value.inputTime : C.value ? e.is24hr ? s.value.inputDateTime24hr : s.value.inputDateTime : s.value.input), q = Y(() => /[Hh]/g.test($.value)), W = Y(
    () => /[dD]{1,2}|Do|W{1,4}|M{1,4}|YY(?:YY)?/g.test($.value)
  ), se = Y(() => {
    if (q.value && W.value)
      return "dateTime";
    if (W.value)
      return "date";
    if (q.value)
      return "time";
  }), me = Y(() => {
    var B;
    const fe = ((B = v.value) == null ? void 0 : B.$el.previousElementSibling) ?? void 0;
    return gl({}, e.popover, Ms("datePicker.popover"), {
      target: fe
    });
  }), ce = Y(
    () => qb({
      ...me.value,
      id: f.value
    })
  ), ye = Y(() => b.value ? {
    start: m.value[0],
    end: m.value[1]
  } : m.value[0]), Ae = Y(() => {
    const B = ["start", "end"].map((fe) => ({
      input: he(fe),
      change: Ee(fe),
      keyup: qe,
      ...e.popover && ce.value
    }));
    return b.value ? {
      start: B[0],
      end: B[1]
    } : B[0];
  }), Ue = Y(() => {
    if (!le(h.value))
      return null;
    const B = {
      key: "select-drag",
      ...e.selectAttribute,
      dates: h.value,
      pinPage: !0
    }, { dot: fe, bar: Ne, highlight: lt, content: Zt } = B;
    return !fe && !Ne && !lt && !Zt && (B.highlight = !0), B;
  }), Re = Y(() => {
    if (!b.value || !le(d.value))
      return null;
    const B = {
      key: "select-drag",
      ...e.dragAttribute,
      dates: d.value
    }, { dot: fe, bar: Ne, highlight: lt, content: Zt } = B;
    return !fe && !Ne && !lt && !Zt && (B.highlight = {
      startEnd: {
        fillMode: "outline"
      }
    }), B;
  }), re = Y(() => {
    const B = Or(e.attributes) ? [...e.attributes] : [];
    return Re.value ? B.unshift(Re.value) : Ue.value && B.unshift(Ue.value), B;
  }), Me = Y(() => At(
    e.rules === "auto" ? mt() : e.rules ?? {}
  ));
  function mt() {
    const B = {
      ms: [0, 999],
      sec: [0, 59],
      min: [0, 59],
      hr: [0, 23]
    }, fe = x.value ? 0 : e.timeAccuracy;
    return [0, 1].map((Ne) => {
      switch (fe) {
        case 0:
          return {
            hours: B.hr[Ne],
            minutes: B.min[Ne],
            seconds: B.sec[Ne],
            milliseconds: B.ms[Ne]
          };
        case 1:
          return {
            minutes: B.min[Ne],
            seconds: B.sec[Ne],
            milliseconds: B.ms[Ne]
          };
        case 3:
          return { milliseconds: B.ms[Ne] };
        case 4:
          return {};
        default:
          return { seconds: B.sec[Ne], milliseconds: B.ms[Ne] };
      }
    });
  }
  function At(B) {
    return Or(B) ? B.length === 1 ? [B[0], B[0]] : B : [B, B];
  }
  function Se(B) {
    return At(B).map(
      (fe, Ne) => ({
        ...fe,
        rules: Me.value[Ne]
      })
    );
  }
  function nt(B) {
    return Ur(B) ? !isNaN(B) : Hi(B) ? !isNaN(B.getTime()) : ta(B) ? B !== "" : B != null;
  }
  function le(B) {
    return b.value ? Va(B) && nt(B.start) && nt(B.end) : nt(B);
  }
  function pe(B, fe) {
    const Ne = Hi(B), lt = Hi(fe);
    return !Ne && !lt ? !0 : Ne !== lt ? !1 : B.getTime() === fe.getTime();
  }
  function Oe(B, fe) {
    if (b.value) {
      const Ne = le(B), lt = le(fe);
      return !Ne && !lt ? !0 : Ne !== lt ? !1 : pe(B.start, fe.start) && pe(B.end, fe.end);
    }
    return pe(B, fe);
  }
  function ge(B) {
    return !le(B) || !i.value ? !1 : i.value.intersectsRange(r.value.range(B));
  }
  function ne(B, fe, Ne, lt) {
    if (!le(B))
      return null;
    if (b.value) {
      const Zt = r.value.toDate(B.start, {
        ...fe[0],
        fillDate: D.value ?? void 0,
        patch: Ne
      }), zn = r.value.toDate(B.end, {
        ...fe[1],
        fillDate: T.value ?? void 0,
        patch: Ne
      });
      return Cr({ start: Zt, end: zn }, lt);
    }
    return r.value.toDateOrNull(B, {
      ...fe[0],
      fillDate: h.value,
      patch: Ne
    });
  }
  function be(B, fe) {
    return b.value ? le(B) ? {
      start: r.value.fromDate(B.start, fe[0]),
      end: r.value.fromDate(B.end, fe[1])
    } : null : r.value.fromDate(B, fe[0]);
  }
  function Be(B, fe = {}) {
    return clearTimeout(w), new Promise((Ne) => {
      const { debounce: lt = 0, ...Zt } = fe;
      lt > 0 ? w = window.setTimeout(() => {
        Ne(N(B, Zt));
      }, lt) : Ne(N(B, Zt));
    });
  }
  function N(B, {
    config: fe = R.value,
    patch: Ne = "dateTime",
    clearIfEqual: lt = !1,
    formatInput: Zt = !0,
    hidePopover: zn = !1,
    dragging: yn = I.value,
    targetPriority: es,
    moveToValue: ts = !1
  } = {}) {
    const pi = Se(fe);
    let In = ne(
      B,
      pi,
      Ne,
      es
    );
    if (ge(In)) {
      if (yn)
        return null;
      In = h.value, zn = !1;
    } else
      In == null && e.isRequired ? In = h.value : (
        // Clear value if same value was passed
        In != null && Oe(h.value, In) && lt && (In = null)
      );
    const _a = yn ? d : h, xo = !Oe(_a.value, In);
    _a.value = In, yn || (d.value = null);
    const vi = be(
      In,
      R.value
    );
    return xo && (k = !1, l(yn ? "drag" : "update:modelValue", vi), rr(() => k = !0)), zn && !yn && kn(), Zt && A(), ts && rr(() => ie(es ?? "start")), vi;
  }
  function A() {
    rr(() => {
      const B = Se({
        type: "string",
        mask: $.value
      }), fe = be(
        d.value || h.value,
        B
      );
      b.value ? m.value = [fe && fe.start, fe && fe.end] : m.value = [fe, ""];
    });
  }
  function G(B, fe, Ne) {
    m.value.splice(fe === "start" ? 0 : 1, 1, B);
    const lt = b.value ? {
      start: m.value[0],
      end: m.value[1] || m.value[0]
    } : B, Zt = {
      type: "string",
      mask: $.value
    };
    Be(lt, {
      ...Ne,
      config: Zt,
      patch: se.value,
      targetPriority: fe,
      moveToValue: !0
    });
  }
  function he(B) {
    return (fe) => {
      e.updateOnInput && G(fe.currentTarget.value, B, {
        formatInput: !1,
        hidePopover: !1,
        debounce: e.inputDebounce
      });
    };
  }
  function Ee(B) {
    return (fe) => {
      G(fe.currentTarget.value, B, {
        formatInput: !0,
        hidePopover: !1
      });
    };
  }
  function qe(B) {
    B.key === "Escape" && Be(h.value, {
      formatInput: !0,
      hidePopover: !0
    });
  }
  function Ht(B) {
    return b.value ? [
      B && B.start ? r.value.getDateParts(B.start) : null,
      B && B.end ? r.value.getDateParts(B.end) : null
    ] : [B ? r.value.getDateParts(B) : null];
  }
  function Ot() {
    d.value = null, A();
  }
  function Vt(B) {
    l("popover-will-show", B);
  }
  function _n(B) {
    l("popover-did-show", B);
  }
  function _t(B) {
    Ot(), l("popover-will-hide", B);
  }
  function Z(B) {
    l("popover-did-hide", B);
  }
  function oe(B) {
    const fe = {
      patch: "date",
      formatInput: !0,
      hidePopover: !0
    };
    if (b.value) {
      const Ne = !I.value;
      Ne ? E = { start: B.startDate, end: B.endDate } : E != null && (E.end = B.date), Be(E, {
        ...fe,
        dragging: Ne
      });
    } else
      Be(B.date, {
        ...fe,
        clearIfEqual: !e.isRequired
      });
  }
  function jt(B, fe) {
    oe(B), l("dayclick", B, fe);
  }
  function Mt(B, fe) {
    switch (fe.key) {
      case " ":
      case "Enter": {
        oe(B), fe.preventDefault();
        break;
      }
      case "Escape":
        kn();
    }
    l("daykeydown", B, fe);
  }
  function pn(B, fe) {
    !I.value || E == null || (E.end = B.date, Be(Cr(E), {
      patch: "date",
      formatInput: !0
    }));
  }
  function lr(B = {}) {
    mh({
      ...me.value,
      ...B,
      isInteractive: !0,
      id: f.value
    });
  }
  function kn(B = {}) {
    vc({
      hideDelay: 10,
      force: !0,
      ...me.value,
      ...B,
      id: f.value
    });
  }
  function Tn(B) {
    zb({
      ...me.value,
      ...B,
      isInteractive: !0,
      id: f.value
    });
  }
  function Cr(B, fe) {
    const { start: Ne, end: lt } = B;
    if (Ne > lt)
      switch (fe) {
        case "start":
          return { start: Ne, end: Ne };
        case "end":
          return { start: lt, end: lt };
        default:
          return { start: lt, end: Ne };
      }
    return { start: Ne, end: lt };
  }
  function Kr(B) {
    if (le(h.value)) {
      const fe = b.value ? B ? D.value : T.value : h.value;
      return Fb(fe, "monthly", r.value);
    }
    return null;
  }
  async function $s(B, fe = {}) {
    return g.value == null ? !1 : g.value.move(B, fe);
  }
  async function Qa(B, fe = {}) {
    return g.value == null ? !1 : g.value.moveBy(B, fe);
  }
  async function ie(B, fe = {}) {
    if (g.value == null)
      return !1;
    const { firstPage: Ne, lastPage: lt, move: Zt } = g.value, zn = B !== "end", yn = Kr(zn), es = zn ? 1 : -1;
    return !yn || Wb(yn, Ne, lt) ? !1 : Zt(yn, {
      position: es,
      ...fe
    });
  }
  ze(
    () => e.isRange,
    (B) => {
      B && console.warn(
        "The `is-range` prop will be deprecated in future releases. Please use the `range` modifier."
      );
    },
    { immediate: !0 }
  ), ze(
    () => $.value,
    () => A()
  ), ze(
    () => e.modelValue,
    (B) => {
      k && N(B, {
        formatInput: !0,
        hidePopover: !1
      });
    }
  ), ze(
    () => Me.value,
    () => {
      Va(e.rules) && N(e.modelValue, {
        formatInput: !0,
        hidePopover: !1
      });
    }
  ), ze(
    () => e.timezone,
    () => {
      N(h.value, { formatInput: !0 });
    }
  );
  const de = At(R.value);
  h.value = ne(e.modelValue, de, "dateTime"), Vr(() => {
    N(e.modelValue, {
      formatInput: !0,
      hidePopover: !1
    });
  }), rr(() => u.value = !0);
  const je = {
    ...n,
    showCalendar: u,
    datePickerPopoverId: f,
    popoverRef: v,
    popoverEvents: ce,
    calendarRef: g,
    isRange: b,
    isTimeMode: M,
    isDateTimeMode: C,
    is24hr: md(e, "is24hr"),
    hideTimeHeader: md(e, "hideTimeHeader"),
    timeAccuracy: md(e, "timeAccuracy"),
    isDragging: I,
    inputValue: ye,
    inputEvents: Ae,
    dateParts: V,
    attributes: re,
    rules: Me,
    move: $s,
    moveBy: Qa,
    moveToValue: ie,
    updateValue: Be,
    showPopover: lr,
    hidePopover: kn,
    togglePopover: Tn,
    onDayClick: jt,
    onDayKeydown: Mt,
    onDayMouseEnter: pn,
    onPopoverBeforeShow: Vt,
    onPopoverAfterShow: _n,
    onPopoverBeforeHide: _t,
    onPopoverAfterHide: Z
  };
  return aa(Xb, je), je;
}
function TG() {
  const e = Tt(Xb);
  if (e)
    return e;
  throw new Error(
    "DatePicker context missing. Please verify this component is nested within a valid context provider."
  );
}
const AG = [
  { value: 0, label: "12" },
  { value: 1, label: "1" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4" },
  { value: 5, label: "5" },
  { value: 6, label: "6" },
  { value: 7, label: "7" },
  { value: 8, label: "8" },
  { value: 9, label: "9" },
  { value: 10, label: "10" },
  { value: 11, label: "11" }
], MG = [
  { value: 12, label: "12" },
  { value: 13, label: "1" },
  { value: 14, label: "2" },
  { value: 15, label: "3" },
  { value: 16, label: "4" },
  { value: 17, label: "5" },
  { value: 18, label: "6" },
  { value: 19, label: "7" },
  { value: 20, label: "8" },
  { value: 21, label: "9" },
  { value: 22, label: "10" },
  { value: 23, label: "11" }
];
function CG(e) {
  const t = TG(), {
    locale: n,
    isRange: r,
    isTimeMode: s,
    dateParts: i,
    rules: l,
    is24hr: u,
    hideTimeHeader: f,
    timeAccuracy: h,
    updateValue: d
  } = t;
  function m(W) {
    W = Object.assign(g.value, W);
    let se = null;
    if (r.value) {
      const me = v.value ? W : i.value[0], ce = v.value ? i.value[1] : W;
      se = { start: me, end: ce };
    } else
      se = W;
    d(se, {
      patch: "time",
      targetPriority: v.value ? "start" : "end",
      moveToValue: !0
    });
  }
  const v = Y(() => e.position === 0), g = Y(
    () => i.value[e.position] || { isValid: !1 }
  ), w = Y(() => Nb(g.value)), E = Y(() => !!g.value.isValid), k = Y(() => !f.value && E.value), b = Y(() => {
    if (!w.value)
      return null;
    let W = n.value.toDate(g.value);
    return g.value.hours === 24 && (W = new Date(W.getTime() - 1)), W;
  }), D = Y({
    get() {
      return g.value.hours;
    },
    set(W) {
      m({ hours: W });
    }
  }), T = Y({
    get() {
      return g.value.minutes;
    },
    set(W) {
      m({ minutes: W });
    }
  }), x = Y({
    get() {
      return g.value.seconds;
    },
    set(W) {
      m({ seconds: W });
    }
  }), C = Y({
    get() {
      return g.value.milliseconds;
    },
    set(W) {
      m({ milliseconds: W });
    }
  }), M = Y({
    get() {
      return g.value.hours < 12;
    },
    set(W) {
      W = String(W).toLowerCase() == "true";
      let se = D.value;
      W && se >= 12 ? se -= 12 : !W && se < 12 && (se += 12), m({ hours: se });
    }
  }), I = Y(
    () => uj(g.value, l.value[e.position])
  ), R = Y(() => AG.filter(
    (W) => I.value.hours.some((se) => se.value === W.value)
  )), V = Y(() => MG.filter(
    (W) => I.value.hours.some((se) => se.value === W.value)
  )), $ = Y(() => u.value ? I.value.hours : M.value ? R.value : V.value), q = Y(() => {
    const W = [];
    return $a(R.value) && W.push({ value: !0, label: "AM" }), $a(V.value) && W.push({ value: !1, label: "PM" }), W;
  });
  return {
    ...t,
    showHeader: k,
    timeAccuracy: h,
    parts: g,
    isValid: E,
    date: b,
    hours: D,
    minutes: T,
    seconds: x,
    milliseconds: C,
    options: I,
    hourOptions: $,
    isAM: M,
    isAMOptions: q,
    is24hr: u
  };
}
const PG = {
  key: 0,
  class: "vc-time-header"
}, NG = { class: "vc-time-weekday" }, $G = { class: "vc-time-month" }, IG = { class: "vc-time-day" }, LG = { class: "vc-time-year" }, RG = { class: "vc-time-select-group" }, FG = /* @__PURE__ */ j("span", { class: "vc-time-colon" }, ":", -1), YG = /* @__PURE__ */ j("span", { class: "vc-time-colon" }, ":", -1), WG = /* @__PURE__ */ j("span", { class: "vc-time-decimal" }, ".", -1), UG = /* @__PURE__ */ Le({
  __name: "TimePicker",
  props: {
    position: null
  },
  setup(e, { expose: t }) {
    const r = CG(e);
    t(r);
    const {
      locale: s,
      isValid: i,
      date: l,
      hours: u,
      minutes: f,
      seconds: h,
      milliseconds: d,
      options: m,
      hourOptions: v,
      isTimeMode: g,
      isAM: w,
      isAMOptions: E,
      is24hr: k,
      showHeader: b,
      timeAccuracy: D
    } = r;
    return (T, x) => (F(), z("div", {
      class: it(["vc-time-picker", [{ "vc-invalid": !y(i), "vc-attached": !y(g) }]])
    }, [
      yt(T.$slots, "time-header", {}, () => [
        y(b) && y(l) ? (F(), z("div", PG, [
          j("span", NG, ke(y(s).formatDate(y(l), "WWW")), 1),
          j("span", $G, ke(y(s).formatDate(y(l), "MMM")), 1),
          j("span", IG, ke(y(s).formatDate(y(l), "D")), 1),
          j("span", LG, ke(y(s).formatDate(y(l), "YYYY")), 1)
        ])) : Te("", !0)
      ]),
      j("div", RG, [
        Pe(ro, {
          name: "Clock",
          size: "17"
        }),
        Pe(qo, {
          modelValue: y(u),
          "onUpdate:modelValue": x[0] || (x[0] = (C) => un(u) ? u.value = C : null),
          modelModifiers: { number: !0 },
          options: y(v),
          "align-right": ""
        }, null, 8, ["modelValue", "options"]),
        y(D) > 1 ? (F(), z(Xe, { key: 0 }, [
          FG,
          Pe(qo, {
            modelValue: y(f),
            "onUpdate:modelValue": x[1] || (x[1] = (C) => un(f) ? f.value = C : null),
            modelModifiers: { number: !0 },
            options: y(m).minutes,
            "align-left": y(D) === 2
          }, null, 8, ["modelValue", "options", "align-left"])
        ], 64)) : Te("", !0),
        y(D) > 2 ? (F(), z(Xe, { key: 1 }, [
          YG,
          Pe(qo, {
            modelValue: y(h),
            "onUpdate:modelValue": x[2] || (x[2] = (C) => un(h) ? h.value = C : null),
            modelModifiers: { number: !0 },
            options: y(m).seconds,
            "align-left": y(D) === 3
          }, null, 8, ["modelValue", "options", "align-left"])
        ], 64)) : Te("", !0),
        y(D) > 3 ? (F(), z(Xe, { key: 2 }, [
          WG,
          Pe(qo, {
            modelValue: y(d),
            "onUpdate:modelValue": x[3] || (x[3] = (C) => un(d) ? d.value = C : null),
            modelModifiers: { number: !0 },
            options: y(m).milliseconds,
            "align-left": ""
          }, null, 8, ["modelValue", "options"])
        ], 64)) : Te("", !0),
        y(k) ? Te("", !0) : (F(), tt(qo, {
          key: 3,
          modelValue: y(w),
          "onUpdate:modelValue": x[4] || (x[4] = (C) => un(w) ? w.value = C : null),
          options: y(E)
        }, null, 8, ["modelValue", "options"]))
      ])
    ], 2));
  }
}), Jb = Le({
  name: "DatePicker",
  inheritAttrs: !1,
  emits: SG,
  props: xG,
  setup(e, t) {
    const n = kG(e, t), { slots: r, attrs: s } = t, {
      isTimeMode: i,
      isRange: l,
      isDateTimeMode: u,
      color: f,
      displayMode: h,
      dateParts: d,
      datePickerPopoverId: m,
      attributes: v,
      calendarRef: g,
      popoverRef: w,
      showCalendar: E,
      onDayClick: k,
      onDayMouseEnter: b,
      onDayKeydown: D,
      onPopoverBeforeShow: T,
      onPopoverAfterShow: x,
      onPopoverBeforeHide: C,
      onPopoverAfterHide: M
    } = n;
    t.expose(n);
    const I = El(Ob(n, "calendarRef", "popoverRef")), R = () => (l.value ? [0, 1] : [0]).map((W) => Yr(UG, { position: W })), V = () => {
      if (!d.value)
        return null;
      const q = u.value ? { ...r, footer: R } : r;
      return Yr(
        bG,
        {
          ...s,
          attributes: v.value,
          ref: g,
          onDayclick: k,
          onDaymouseenter: b,
          onDaykeydown: D
        },
        q
      );
    }, $ = () => {
      if (i.value)
        return Yr(
          "div",
          {
            class: `vc-container vc-bordered vc-${f.value} vc-${h.value}`
          },
          [R()]
        );
      if (E.value)
        return V();
    };
    return r.default ? () => [
      // Popover trigger
      r.default(I),
      // Popover content
      Yr(
        Ap,
        {
          id: m.value,
          placement: "bottom-start",
          class: `vc-date-picker-content vc-${f.value} vc-${h.value}`,
          ref: w,
          "onBefore-show": T,
          "onAfter-show": x,
          "onBefore-hide": C,
          "onAfter-hide": M
        },
        {
          default: $
        }
      )
    ] : $;
  }
});
let Qb = "";
function BG(e) {
  Qb = e;
}
function ew() {
  return Qb;
}
function HG(e) {
  return Mh() ? (Ch(e), !0) : !1;
}
function tw(e) {
  return typeof e == "function" ? e() : y(e);
}
const nw = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const VG = Object.prototype.toString, jG = (e) => VG.call(e) === "[object Object]", vh = () => {
}, GG = /* @__PURE__ */ zG();
function zG() {
  var e, t;
  return nw && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function tl(e) {
  var t;
  const n = tw(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const rw = nw ? window : void 0;
function Ad(...e) {
  let t, n, r, s;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, r, s] = e, t = rw) : [t, n, r, s] = e, !t)
    return vh;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const i = [], l = () => {
    i.forEach((d) => d()), i.length = 0;
  }, u = (d, m, v, g) => (d.addEventListener(m, v, g), () => d.removeEventListener(m, v, g)), f = ze(
    () => [tl(t), tw(s)],
    ([d, m]) => {
      if (l(), !d)
        return;
      const v = jG(m) ? { ...m } : m;
      i.push(
        ...n.flatMap((g) => r.map((w) => u(d, g, w, v)))
      );
    },
    { immediate: !0, flush: "post" }
  ), h = () => {
    f(), l();
  };
  return HG(h), h;
}
let I0 = !1;
function aw(e, t, n = {}) {
  const { window: r = rw, ignore: s = [], capture: i = !0, detectIframe: l = !1 } = n;
  if (!r)
    return;
  GG && !I0 && (I0 = !0, Array.from(r.document.body.children).forEach((v) => v.addEventListener("click", vh)), r.document.documentElement.addEventListener("click", vh));
  let u = !0;
  const f = (v) => s.some((g) => {
    if (typeof g == "string")
      return Array.from(r.document.querySelectorAll(g)).some((w) => w === v.target || v.composedPath().includes(w));
    {
      const w = tl(g);
      return w && (v.target === w || v.composedPath().includes(w));
    }
  }), d = [
    Ad(r, "click", (v) => {
      const g = tl(e);
      if (!(!g || g === v.target || v.composedPath().includes(g))) {
        if (v.detail === 0 && (u = !f(v)), !u) {
          u = !0;
          return;
        }
        t(v);
      }
    }, { passive: !0, capture: i }),
    Ad(r, "pointerdown", (v) => {
      const g = tl(e);
      u = !f(v) && !!(g && !v.composedPath().includes(g));
    }, { passive: !0 }),
    l && Ad(r, "blur", (v) => {
      setTimeout(() => {
        var g;
        const w = tl(e);
        ((g = r.document.activeElement) == null ? void 0 : g.tagName) === "IFRAME" && !(w != null && w.contains(r.document.activeElement)) && t(v);
      }, 0);
    })
  ].filter(Boolean);
  return () => d.forEach((v) => v());
}
var Ko = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, gc = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
gc.exports;
(function(e, t) {
  (function() {
    var n, r = "4.17.21", s = 200, i = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", l = "Expected a function", u = "Invalid `variable` option passed into `_.template`", f = "__lodash_hash_undefined__", h = 500, d = "__lodash_placeholder__", m = 1, v = 2, g = 4, w = 1, E = 2, k = 1, b = 2, D = 4, T = 8, x = 16, C = 32, M = 64, I = 128, R = 256, V = 512, $ = 30, q = "...", W = 800, se = 16, me = 1, ce = 2, ye = 3, Ae = 1 / 0, Ue = 9007199254740991, Re = 17976931348623157e292, re = 0 / 0, Me = 4294967295, mt = Me - 1, At = Me >>> 1, Se = [
      ["ary", I],
      ["bind", k],
      ["bindKey", b],
      ["curry", T],
      ["curryRight", x],
      ["flip", V],
      ["partial", C],
      ["partialRight", M],
      ["rearg", R]
    ], nt = "[object Arguments]", le = "[object Array]", pe = "[object AsyncFunction]", Oe = "[object Boolean]", ge = "[object Date]", ne = "[object DOMException]", be = "[object Error]", Be = "[object Function]", N = "[object GeneratorFunction]", A = "[object Map]", G = "[object Number]", he = "[object Null]", Ee = "[object Object]", qe = "[object Promise]", Ht = "[object Proxy]", Ot = "[object RegExp]", Vt = "[object Set]", _n = "[object String]", _t = "[object Symbol]", Z = "[object Undefined]", oe = "[object WeakMap]", jt = "[object WeakSet]", Mt = "[object ArrayBuffer]", pn = "[object DataView]", lr = "[object Float32Array]", kn = "[object Float64Array]", Tn = "[object Int8Array]", Cr = "[object Int16Array]", Kr = "[object Int32Array]", $s = "[object Uint8Array]", Qa = "[object Uint8ClampedArray]", ie = "[object Uint16Array]", de = "[object Uint32Array]", je = /\b__p \+= '';/g, B = /\b(__p \+=) '' \+/g, fe = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Ne = /&(?:amp|lt|gt|quot|#39);/g, lt = /[&<>"']/g, Zt = RegExp(Ne.source), zn = RegExp(lt.source), yn = /<%-([\s\S]+?)%>/g, es = /<%([\s\S]+?)%>/g, ts = /<%=([\s\S]+?)%>/g, pi = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, In = /^\w*$/, mi = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, _a = /[\\^$.*+?()[\]{}|]/g, xo = RegExp(_a.source), vi = /^\s+/, _E = /\s/, yE = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, bE = /\{\n\/\* \[wrapped with (.+)\] \*/, wE = /,? & /, EE = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, OE = /[()=,{}\[\]\/\s]/, DE = /\\(\\)?/g, xE = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, nm = /\w*$/, SE = /^[-+]0x[0-9a-f]+$/i, kE = /^0b[01]+$/i, TE = /^\[object .+?Constructor\]$/, AE = /^0o[0-7]+$/i, ME = /^(?:0|[1-9]\d*)$/, CE = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Ll = /($^)/, PE = /['\n\r\u2028\u2029\\]/g, Rl = "\\ud800-\\udfff", NE = "\\u0300-\\u036f", $E = "\\ufe20-\\ufe2f", IE = "\\u20d0-\\u20ff", rm = NE + $E + IE, am = "\\u2700-\\u27bf", sm = "a-z\\xdf-\\xf6\\xf8-\\xff", LE = "\\xac\\xb1\\xd7\\xf7", RE = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", FE = "\\u2000-\\u206f", YE = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", im = "A-Z\\xc0-\\xd6\\xd8-\\xde", om = "\\ufe0e\\ufe0f", lm = LE + RE + FE + YE, af = "['’]", WE = "[" + Rl + "]", um = "[" + lm + "]", Fl = "[" + rm + "]", cm = "\\d+", UE = "[" + am + "]", fm = "[" + sm + "]", dm = "[^" + Rl + lm + cm + am + sm + im + "]", sf = "\\ud83c[\\udffb-\\udfff]", BE = "(?:" + Fl + "|" + sf + ")", hm = "[^" + Rl + "]", of = "(?:\\ud83c[\\udde6-\\uddff]){2}", lf = "[\\ud800-\\udbff][\\udc00-\\udfff]", gi = "[" + im + "]", pm = "\\u200d", mm = "(?:" + fm + "|" + dm + ")", HE = "(?:" + gi + "|" + dm + ")", vm = "(?:" + af + "(?:d|ll|m|re|s|t|ve))?", gm = "(?:" + af + "(?:D|LL|M|RE|S|T|VE))?", _m = BE + "?", ym = "[" + om + "]?", VE = "(?:" + pm + "(?:" + [hm, of, lf].join("|") + ")" + ym + _m + ")*", jE = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", GE = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", bm = ym + _m + VE, zE = "(?:" + [UE, of, lf].join("|") + ")" + bm, qE = "(?:" + [hm + Fl + "?", Fl, of, lf, WE].join("|") + ")", KE = RegExp(af, "g"), ZE = RegExp(Fl, "g"), uf = RegExp(sf + "(?=" + sf + ")|" + qE + bm, "g"), XE = RegExp([
      gi + "?" + fm + "+" + vm + "(?=" + [um, gi, "$"].join("|") + ")",
      HE + "+" + gm + "(?=" + [um, gi + mm, "$"].join("|") + ")",
      gi + "?" + mm + "+" + vm,
      gi + "+" + gm,
      GE,
      jE,
      cm,
      zE
    ].join("|"), "g"), JE = RegExp("[" + pm + Rl + rm + om + "]"), QE = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, eO = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], tO = -1, Ft = {};
    Ft[lr] = Ft[kn] = Ft[Tn] = Ft[Cr] = Ft[Kr] = Ft[$s] = Ft[Qa] = Ft[ie] = Ft[de] = !0, Ft[nt] = Ft[le] = Ft[Mt] = Ft[Oe] = Ft[pn] = Ft[ge] = Ft[be] = Ft[Be] = Ft[A] = Ft[G] = Ft[Ee] = Ft[Ot] = Ft[Vt] = Ft[_n] = Ft[oe] = !1;
    var It = {};
    It[nt] = It[le] = It[Mt] = It[pn] = It[Oe] = It[ge] = It[lr] = It[kn] = It[Tn] = It[Cr] = It[Kr] = It[A] = It[G] = It[Ee] = It[Ot] = It[Vt] = It[_n] = It[_t] = It[$s] = It[Qa] = It[ie] = It[de] = !0, It[be] = It[Be] = It[oe] = !1;
    var nO = {
      // Latin-1 Supplement block.
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "A",
      Å: "A",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      å: "a",
      Ç: "C",
      ç: "c",
      Ð: "D",
      ð: "d",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      Ñ: "N",
      ñ: "n",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "O",
      Ø: "O",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ø: "o",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "U",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "u",
      Ý: "Y",
      ý: "y",
      ÿ: "y",
      Æ: "Ae",
      æ: "ae",
      Þ: "Th",
      þ: "th",
      ß: "ss",
      // Latin Extended-A block.
      Ā: "A",
      Ă: "A",
      Ą: "A",
      ā: "a",
      ă: "a",
      ą: "a",
      Ć: "C",
      Ĉ: "C",
      Ċ: "C",
      Č: "C",
      ć: "c",
      ĉ: "c",
      ċ: "c",
      č: "c",
      Ď: "D",
      Đ: "D",
      ď: "d",
      đ: "d",
      Ē: "E",
      Ĕ: "E",
      Ė: "E",
      Ę: "E",
      Ě: "E",
      ē: "e",
      ĕ: "e",
      ė: "e",
      ę: "e",
      ě: "e",
      Ĝ: "G",
      Ğ: "G",
      Ġ: "G",
      Ģ: "G",
      ĝ: "g",
      ğ: "g",
      ġ: "g",
      ģ: "g",
      Ĥ: "H",
      Ħ: "H",
      ĥ: "h",
      ħ: "h",
      Ĩ: "I",
      Ī: "I",
      Ĭ: "I",
      Į: "I",
      İ: "I",
      ĩ: "i",
      ī: "i",
      ĭ: "i",
      į: "i",
      ı: "i",
      Ĵ: "J",
      ĵ: "j",
      Ķ: "K",
      ķ: "k",
      ĸ: "k",
      Ĺ: "L",
      Ļ: "L",
      Ľ: "L",
      Ŀ: "L",
      Ł: "L",
      ĺ: "l",
      ļ: "l",
      ľ: "l",
      ŀ: "l",
      ł: "l",
      Ń: "N",
      Ņ: "N",
      Ň: "N",
      Ŋ: "N",
      ń: "n",
      ņ: "n",
      ň: "n",
      ŋ: "n",
      Ō: "O",
      Ŏ: "O",
      Ő: "O",
      ō: "o",
      ŏ: "o",
      ő: "o",
      Ŕ: "R",
      Ŗ: "R",
      Ř: "R",
      ŕ: "r",
      ŗ: "r",
      ř: "r",
      Ś: "S",
      Ŝ: "S",
      Ş: "S",
      Š: "S",
      ś: "s",
      ŝ: "s",
      ş: "s",
      š: "s",
      Ţ: "T",
      Ť: "T",
      Ŧ: "T",
      ţ: "t",
      ť: "t",
      ŧ: "t",
      Ũ: "U",
      Ū: "U",
      Ŭ: "U",
      Ů: "U",
      Ű: "U",
      Ų: "U",
      ũ: "u",
      ū: "u",
      ŭ: "u",
      ů: "u",
      ű: "u",
      ų: "u",
      Ŵ: "W",
      ŵ: "w",
      Ŷ: "Y",
      ŷ: "y",
      Ÿ: "Y",
      Ź: "Z",
      Ż: "Z",
      Ž: "Z",
      ź: "z",
      ż: "z",
      ž: "z",
      Ĳ: "IJ",
      ĳ: "ij",
      Œ: "Oe",
      œ: "oe",
      ŉ: "'n",
      ſ: "s"
    }, rO = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, aO = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, sO = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, iO = parseFloat, oO = parseInt, wm = typeof Ko == "object" && Ko && Ko.Object === Object && Ko, lO = typeof self == "object" && self && self.Object === Object && self, mn = wm || lO || Function("return this")(), cf = t && !t.nodeType && t, Is = cf && !0 && e && !e.nodeType && e, Em = Is && Is.exports === cf, ff = Em && wm.process, ur = function() {
      try {
        var U = Is && Is.require && Is.require("util").types;
        return U || ff && ff.binding && ff.binding("util");
      } catch {
      }
    }(), Om = ur && ur.isArrayBuffer, Dm = ur && ur.isDate, xm = ur && ur.isMap, Sm = ur && ur.isRegExp, km = ur && ur.isSet, Tm = ur && ur.isTypedArray;
    function qn(U, X, K) {
      switch (K.length) {
        case 0:
          return U.call(X);
        case 1:
          return U.call(X, K[0]);
        case 2:
          return U.call(X, K[0], K[1]);
        case 3:
          return U.call(X, K[0], K[1], K[2]);
      }
      return U.apply(X, K);
    }
    function uO(U, X, K, De) {
      for (var Ze = -1, Dt = U == null ? 0 : U.length; ++Ze < Dt; ) {
        var sn = U[Ze];
        X(De, sn, K(sn), U);
      }
      return De;
    }
    function cr(U, X) {
      for (var K = -1, De = U == null ? 0 : U.length; ++K < De && X(U[K], K, U) !== !1; )
        ;
      return U;
    }
    function cO(U, X) {
      for (var K = U == null ? 0 : U.length; K-- && X(U[K], K, U) !== !1; )
        ;
      return U;
    }
    function Am(U, X) {
      for (var K = -1, De = U == null ? 0 : U.length; ++K < De; )
        if (!X(U[K], K, U))
          return !1;
      return !0;
    }
    function ns(U, X) {
      for (var K = -1, De = U == null ? 0 : U.length, Ze = 0, Dt = []; ++K < De; ) {
        var sn = U[K];
        X(sn, K, U) && (Dt[Ze++] = sn);
      }
      return Dt;
    }
    function Yl(U, X) {
      var K = U == null ? 0 : U.length;
      return !!K && _i(U, X, 0) > -1;
    }
    function df(U, X, K) {
      for (var De = -1, Ze = U == null ? 0 : U.length; ++De < Ze; )
        if (K(X, U[De]))
          return !0;
      return !1;
    }
    function Gt(U, X) {
      for (var K = -1, De = U == null ? 0 : U.length, Ze = Array(De); ++K < De; )
        Ze[K] = X(U[K], K, U);
      return Ze;
    }
    function rs(U, X) {
      for (var K = -1, De = X.length, Ze = U.length; ++K < De; )
        U[Ze + K] = X[K];
      return U;
    }
    function hf(U, X, K, De) {
      var Ze = -1, Dt = U == null ? 0 : U.length;
      for (De && Dt && (K = U[++Ze]); ++Ze < Dt; )
        K = X(K, U[Ze], Ze, U);
      return K;
    }
    function fO(U, X, K, De) {
      var Ze = U == null ? 0 : U.length;
      for (De && Ze && (K = U[--Ze]); Ze--; )
        K = X(K, U[Ze], Ze, U);
      return K;
    }
    function pf(U, X) {
      for (var K = -1, De = U == null ? 0 : U.length; ++K < De; )
        if (X(U[K], K, U))
          return !0;
      return !1;
    }
    var dO = mf("length");
    function hO(U) {
      return U.split("");
    }
    function pO(U) {
      return U.match(EE) || [];
    }
    function Mm(U, X, K) {
      var De;
      return K(U, function(Ze, Dt, sn) {
        if (X(Ze, Dt, sn))
          return De = Dt, !1;
      }), De;
    }
    function Wl(U, X, K, De) {
      for (var Ze = U.length, Dt = K + (De ? 1 : -1); De ? Dt-- : ++Dt < Ze; )
        if (X(U[Dt], Dt, U))
          return Dt;
      return -1;
    }
    function _i(U, X, K) {
      return X === X ? SO(U, X, K) : Wl(U, Cm, K);
    }
    function mO(U, X, K, De) {
      for (var Ze = K - 1, Dt = U.length; ++Ze < Dt; )
        if (De(U[Ze], X))
          return Ze;
      return -1;
    }
    function Cm(U) {
      return U !== U;
    }
    function Pm(U, X) {
      var K = U == null ? 0 : U.length;
      return K ? gf(U, X) / K : re;
    }
    function mf(U) {
      return function(X) {
        return X == null ? n : X[U];
      };
    }
    function vf(U) {
      return function(X) {
        return U == null ? n : U[X];
      };
    }
    function Nm(U, X, K, De, Ze) {
      return Ze(U, function(Dt, sn, Nt) {
        K = De ? (De = !1, Dt) : X(K, Dt, sn, Nt);
      }), K;
    }
    function vO(U, X) {
      var K = U.length;
      for (U.sort(X); K--; )
        U[K] = U[K].value;
      return U;
    }
    function gf(U, X) {
      for (var K, De = -1, Ze = U.length; ++De < Ze; ) {
        var Dt = X(U[De]);
        Dt !== n && (K = K === n ? Dt : K + Dt);
      }
      return K;
    }
    function _f(U, X) {
      for (var K = -1, De = Array(U); ++K < U; )
        De[K] = X(K);
      return De;
    }
    function gO(U, X) {
      return Gt(X, function(K) {
        return [K, U[K]];
      });
    }
    function $m(U) {
      return U && U.slice(0, Fm(U) + 1).replace(vi, "");
    }
    function Kn(U) {
      return function(X) {
        return U(X);
      };
    }
    function yf(U, X) {
      return Gt(X, function(K) {
        return U[K];
      });
    }
    function So(U, X) {
      return U.has(X);
    }
    function Im(U, X) {
      for (var K = -1, De = U.length; ++K < De && _i(X, U[K], 0) > -1; )
        ;
      return K;
    }
    function Lm(U, X) {
      for (var K = U.length; K-- && _i(X, U[K], 0) > -1; )
        ;
      return K;
    }
    function _O(U, X) {
      for (var K = U.length, De = 0; K--; )
        U[K] === X && ++De;
      return De;
    }
    var yO = vf(nO), bO = vf(rO);
    function wO(U) {
      return "\\" + sO[U];
    }
    function EO(U, X) {
      return U == null ? n : U[X];
    }
    function yi(U) {
      return JE.test(U);
    }
    function OO(U) {
      return QE.test(U);
    }
    function DO(U) {
      for (var X, K = []; !(X = U.next()).done; )
        K.push(X.value);
      return K;
    }
    function bf(U) {
      var X = -1, K = Array(U.size);
      return U.forEach(function(De, Ze) {
        K[++X] = [Ze, De];
      }), K;
    }
    function Rm(U, X) {
      return function(K) {
        return U(X(K));
      };
    }
    function as(U, X) {
      for (var K = -1, De = U.length, Ze = 0, Dt = []; ++K < De; ) {
        var sn = U[K];
        (sn === X || sn === d) && (U[K] = d, Dt[Ze++] = K);
      }
      return Dt;
    }
    function Ul(U) {
      var X = -1, K = Array(U.size);
      return U.forEach(function(De) {
        K[++X] = De;
      }), K;
    }
    function xO(U) {
      var X = -1, K = Array(U.size);
      return U.forEach(function(De) {
        K[++X] = [De, De];
      }), K;
    }
    function SO(U, X, K) {
      for (var De = K - 1, Ze = U.length; ++De < Ze; )
        if (U[De] === X)
          return De;
      return -1;
    }
    function kO(U, X, K) {
      for (var De = K + 1; De--; )
        if (U[De] === X)
          return De;
      return De;
    }
    function bi(U) {
      return yi(U) ? AO(U) : dO(U);
    }
    function Pr(U) {
      return yi(U) ? MO(U) : hO(U);
    }
    function Fm(U) {
      for (var X = U.length; X-- && _E.test(U.charAt(X)); )
        ;
      return X;
    }
    var TO = vf(aO);
    function AO(U) {
      for (var X = uf.lastIndex = 0; uf.test(U); )
        ++X;
      return X;
    }
    function MO(U) {
      return U.match(uf) || [];
    }
    function CO(U) {
      return U.match(XE) || [];
    }
    var PO = function U(X) {
      X = X == null ? mn : wi.defaults(mn.Object(), X, wi.pick(mn, eO));
      var K = X.Array, De = X.Date, Ze = X.Error, Dt = X.Function, sn = X.Math, Nt = X.Object, wf = X.RegExp, NO = X.String, fr = X.TypeError, Bl = K.prototype, $O = Dt.prototype, Ei = Nt.prototype, Hl = X["__core-js_shared__"], Vl = $O.toString, kt = Ei.hasOwnProperty, IO = 0, Ym = function() {
        var a = /[^.]+$/.exec(Hl && Hl.keys && Hl.keys.IE_PROTO || "");
        return a ? "Symbol(src)_1." + a : "";
      }(), jl = Ei.toString, LO = Vl.call(Nt), RO = mn._, FO = wf(
        "^" + Vl.call(kt).replace(_a, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Gl = Em ? X.Buffer : n, ss = X.Symbol, zl = X.Uint8Array, Wm = Gl ? Gl.allocUnsafe : n, ql = Rm(Nt.getPrototypeOf, Nt), Um = Nt.create, Bm = Ei.propertyIsEnumerable, Kl = Bl.splice, Hm = ss ? ss.isConcatSpreadable : n, ko = ss ? ss.iterator : n, Ls = ss ? ss.toStringTag : n, Zl = function() {
        try {
          var a = Us(Nt, "defineProperty");
          return a({}, "", {}), a;
        } catch {
        }
      }(), YO = X.clearTimeout !== mn.clearTimeout && X.clearTimeout, WO = De && De.now !== mn.Date.now && De.now, UO = X.setTimeout !== mn.setTimeout && X.setTimeout, Xl = sn.ceil, Jl = sn.floor, Ef = Nt.getOwnPropertySymbols, BO = Gl ? Gl.isBuffer : n, Vm = X.isFinite, HO = Bl.join, VO = Rm(Nt.keys, Nt), on = sn.max, bn = sn.min, jO = De.now, GO = X.parseInt, jm = sn.random, zO = Bl.reverse, Of = Us(X, "DataView"), To = Us(X, "Map"), Df = Us(X, "Promise"), Oi = Us(X, "Set"), Ao = Us(X, "WeakMap"), Mo = Us(Nt, "create"), Ql = Ao && new Ao(), Di = {}, qO = Bs(Of), KO = Bs(To), ZO = Bs(Df), XO = Bs(Oi), JO = Bs(Ao), eu = ss ? ss.prototype : n, Co = eu ? eu.valueOf : n, Gm = eu ? eu.toString : n;
      function O(a) {
        if (Xt(a) && !Je(a) && !(a instanceof dt)) {
          if (a instanceof dr)
            return a;
          if (kt.call(a, "__wrapped__"))
            return zv(a);
        }
        return new dr(a);
      }
      var xi = function() {
        function a() {
        }
        return function(o) {
          if (!Kt(o))
            return {};
          if (Um)
            return Um(o);
          a.prototype = o;
          var c = new a();
          return a.prototype = n, c;
        };
      }();
      function tu() {
      }
      function dr(a, o) {
        this.__wrapped__ = a, this.__actions__ = [], this.__chain__ = !!o, this.__index__ = 0, this.__values__ = n;
      }
      O.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: yn,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: es,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: ts,
        /**
         * Used to reference the data object in the template text.
         *
         * @memberOf _.templateSettings
         * @type {string}
         */
        variable: "",
        /**
         * Used to import variables into the compiled template.
         *
         * @memberOf _.templateSettings
         * @type {Object}
         */
        imports: {
          /**
           * A reference to the `lodash` function.
           *
           * @memberOf _.templateSettings.imports
           * @type {Function}
           */
          _: O
        }
      }, O.prototype = tu.prototype, O.prototype.constructor = O, dr.prototype = xi(tu.prototype), dr.prototype.constructor = dr;
      function dt(a) {
        this.__wrapped__ = a, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Me, this.__views__ = [];
      }
      function QO() {
        var a = new dt(this.__wrapped__);
        return a.__actions__ = Ln(this.__actions__), a.__dir__ = this.__dir__, a.__filtered__ = this.__filtered__, a.__iteratees__ = Ln(this.__iteratees__), a.__takeCount__ = this.__takeCount__, a.__views__ = Ln(this.__views__), a;
      }
      function eD() {
        if (this.__filtered__) {
          var a = new dt(this);
          a.__dir__ = -1, a.__filtered__ = !0;
        } else
          a = this.clone(), a.__dir__ *= -1;
        return a;
      }
      function tD() {
        var a = this.__wrapped__.value(), o = this.__dir__, c = Je(a), p = o < 0, _ = c ? a.length : 0, S = hx(0, _, this.__views__), P = S.start, L = S.end, H = L - P, Q = p ? L : P - 1, ee = this.__iteratees__, ae = ee.length, _e = 0, Ce = bn(H, this.__takeCount__);
        if (!c || !p && _ == H && Ce == H)
          return vv(a, this.__actions__);
        var He = [];
        e:
          for (; H-- && _e < Ce; ) {
            Q += o;
            for (var rt = -1, Ve = a[Q]; ++rt < ae; ) {
              var ft = ee[rt], ht = ft.iteratee, Jn = ft.type, Cn = ht(Ve);
              if (Jn == ce)
                Ve = Cn;
              else if (!Cn) {
                if (Jn == me)
                  continue e;
                break e;
              }
            }
            He[_e++] = Ve;
          }
        return He;
      }
      dt.prototype = xi(tu.prototype), dt.prototype.constructor = dt;
      function Rs(a) {
        var o = -1, c = a == null ? 0 : a.length;
        for (this.clear(); ++o < c; ) {
          var p = a[o];
          this.set(p[0], p[1]);
        }
      }
      function nD() {
        this.__data__ = Mo ? Mo(null) : {}, this.size = 0;
      }
      function rD(a) {
        var o = this.has(a) && delete this.__data__[a];
        return this.size -= o ? 1 : 0, o;
      }
      function aD(a) {
        var o = this.__data__;
        if (Mo) {
          var c = o[a];
          return c === f ? n : c;
        }
        return kt.call(o, a) ? o[a] : n;
      }
      function sD(a) {
        var o = this.__data__;
        return Mo ? o[a] !== n : kt.call(o, a);
      }
      function iD(a, o) {
        var c = this.__data__;
        return this.size += this.has(a) ? 0 : 1, c[a] = Mo && o === n ? f : o, this;
      }
      Rs.prototype.clear = nD, Rs.prototype.delete = rD, Rs.prototype.get = aD, Rs.prototype.has = sD, Rs.prototype.set = iD;
      function ya(a) {
        var o = -1, c = a == null ? 0 : a.length;
        for (this.clear(); ++o < c; ) {
          var p = a[o];
          this.set(p[0], p[1]);
        }
      }
      function oD() {
        this.__data__ = [], this.size = 0;
      }
      function lD(a) {
        var o = this.__data__, c = nu(o, a);
        if (c < 0)
          return !1;
        var p = o.length - 1;
        return c == p ? o.pop() : Kl.call(o, c, 1), --this.size, !0;
      }
      function uD(a) {
        var o = this.__data__, c = nu(o, a);
        return c < 0 ? n : o[c][1];
      }
      function cD(a) {
        return nu(this.__data__, a) > -1;
      }
      function fD(a, o) {
        var c = this.__data__, p = nu(c, a);
        return p < 0 ? (++this.size, c.push([a, o])) : c[p][1] = o, this;
      }
      ya.prototype.clear = oD, ya.prototype.delete = lD, ya.prototype.get = uD, ya.prototype.has = cD, ya.prototype.set = fD;
      function ba(a) {
        var o = -1, c = a == null ? 0 : a.length;
        for (this.clear(); ++o < c; ) {
          var p = a[o];
          this.set(p[0], p[1]);
        }
      }
      function dD() {
        this.size = 0, this.__data__ = {
          hash: new Rs(),
          map: new (To || ya)(),
          string: new Rs()
        };
      }
      function hD(a) {
        var o = pu(this, a).delete(a);
        return this.size -= o ? 1 : 0, o;
      }
      function pD(a) {
        return pu(this, a).get(a);
      }
      function mD(a) {
        return pu(this, a).has(a);
      }
      function vD(a, o) {
        var c = pu(this, a), p = c.size;
        return c.set(a, o), this.size += c.size == p ? 0 : 1, this;
      }
      ba.prototype.clear = dD, ba.prototype.delete = hD, ba.prototype.get = pD, ba.prototype.has = mD, ba.prototype.set = vD;
      function Fs(a) {
        var o = -1, c = a == null ? 0 : a.length;
        for (this.__data__ = new ba(); ++o < c; )
          this.add(a[o]);
      }
      function gD(a) {
        return this.__data__.set(a, f), this;
      }
      function _D(a) {
        return this.__data__.has(a);
      }
      Fs.prototype.add = Fs.prototype.push = gD, Fs.prototype.has = _D;
      function Nr(a) {
        var o = this.__data__ = new ya(a);
        this.size = o.size;
      }
      function yD() {
        this.__data__ = new ya(), this.size = 0;
      }
      function bD(a) {
        var o = this.__data__, c = o.delete(a);
        return this.size = o.size, c;
      }
      function wD(a) {
        return this.__data__.get(a);
      }
      function ED(a) {
        return this.__data__.has(a);
      }
      function OD(a, o) {
        var c = this.__data__;
        if (c instanceof ya) {
          var p = c.__data__;
          if (!To || p.length < s - 1)
            return p.push([a, o]), this.size = ++c.size, this;
          c = this.__data__ = new ba(p);
        }
        return c.set(a, o), this.size = c.size, this;
      }
      Nr.prototype.clear = yD, Nr.prototype.delete = bD, Nr.prototype.get = wD, Nr.prototype.has = ED, Nr.prototype.set = OD;
      function zm(a, o) {
        var c = Je(a), p = !c && Hs(a), _ = !c && !p && cs(a), S = !c && !p && !_ && Ai(a), P = c || p || _ || S, L = P ? _f(a.length, NO) : [], H = L.length;
        for (var Q in a)
          (o || kt.call(a, Q)) && !(P && // Safari 9 has enumerable `arguments.length` in strict mode.
          (Q == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          _ && (Q == "offset" || Q == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          S && (Q == "buffer" || Q == "byteLength" || Q == "byteOffset") || // Skip index properties.
          Da(Q, H))) && L.push(Q);
        return L;
      }
      function qm(a) {
        var o = a.length;
        return o ? a[If(0, o - 1)] : n;
      }
      function DD(a, o) {
        return mu(Ln(a), Ys(o, 0, a.length));
      }
      function xD(a) {
        return mu(Ln(a));
      }
      function xf(a, o, c) {
        (c !== n && !$r(a[o], c) || c === n && !(o in a)) && wa(a, o, c);
      }
      function Po(a, o, c) {
        var p = a[o];
        (!(kt.call(a, o) && $r(p, c)) || c === n && !(o in a)) && wa(a, o, c);
      }
      function nu(a, o) {
        for (var c = a.length; c--; )
          if ($r(a[c][0], o))
            return c;
        return -1;
      }
      function SD(a, o, c, p) {
        return is(a, function(_, S, P) {
          o(p, _, c(_), P);
        }), p;
      }
      function Km(a, o) {
        return a && Xr(o, dn(o), a);
      }
      function kD(a, o) {
        return a && Xr(o, Fn(o), a);
      }
      function wa(a, o, c) {
        o == "__proto__" && Zl ? Zl(a, o, {
          configurable: !0,
          enumerable: !0,
          value: c,
          writable: !0
        }) : a[o] = c;
      }
      function Sf(a, o) {
        for (var c = -1, p = o.length, _ = K(p), S = a == null; ++c < p; )
          _[c] = S ? n : id(a, o[c]);
        return _;
      }
      function Ys(a, o, c) {
        return a === a && (c !== n && (a = a <= c ? a : c), o !== n && (a = a >= o ? a : o)), a;
      }
      function hr(a, o, c, p, _, S) {
        var P, L = o & m, H = o & v, Q = o & g;
        if (c && (P = _ ? c(a, p, _, S) : c(a)), P !== n)
          return P;
        if (!Kt(a))
          return a;
        var ee = Je(a);
        if (ee) {
          if (P = mx(a), !L)
            return Ln(a, P);
        } else {
          var ae = wn(a), _e = ae == Be || ae == N;
          if (cs(a))
            return yv(a, L);
          if (ae == Ee || ae == nt || _e && !_) {
            if (P = H || _e ? {} : Fv(a), !L)
              return H ? ax(a, kD(P, a)) : rx(a, Km(P, a));
          } else {
            if (!It[ae])
              return _ ? a : {};
            P = vx(a, ae, L);
          }
        }
        S || (S = new Nr());
        var Ce = S.get(a);
        if (Ce)
          return Ce;
        S.set(a, P), hg(a) ? a.forEach(function(Ve) {
          P.add(hr(Ve, o, c, Ve, a, S));
        }) : fg(a) && a.forEach(function(Ve, ft) {
          P.set(ft, hr(Ve, o, c, ft, a, S));
        });
        var He = Q ? H ? Gf : jf : H ? Fn : dn, rt = ee ? n : He(a);
        return cr(rt || a, function(Ve, ft) {
          rt && (ft = Ve, Ve = a[ft]), Po(P, ft, hr(Ve, o, c, ft, a, S));
        }), P;
      }
      function TD(a) {
        var o = dn(a);
        return function(c) {
          return Zm(c, a, o);
        };
      }
      function Zm(a, o, c) {
        var p = c.length;
        if (a == null)
          return !p;
        for (a = Nt(a); p--; ) {
          var _ = c[p], S = o[_], P = a[_];
          if (P === n && !(_ in a) || !S(P))
            return !1;
        }
        return !0;
      }
      function Xm(a, o, c) {
        if (typeof a != "function")
          throw new fr(l);
        return Yo(function() {
          a.apply(n, c);
        }, o);
      }
      function No(a, o, c, p) {
        var _ = -1, S = Yl, P = !0, L = a.length, H = [], Q = o.length;
        if (!L)
          return H;
        c && (o = Gt(o, Kn(c))), p ? (S = df, P = !1) : o.length >= s && (S = So, P = !1, o = new Fs(o));
        e:
          for (; ++_ < L; ) {
            var ee = a[_], ae = c == null ? ee : c(ee);
            if (ee = p || ee !== 0 ? ee : 0, P && ae === ae) {
              for (var _e = Q; _e--; )
                if (o[_e] === ae)
                  continue e;
              H.push(ee);
            } else
              S(o, ae, p) || H.push(ee);
          }
        return H;
      }
      var is = Dv(Zr), Jm = Dv(Tf, !0);
      function AD(a, o) {
        var c = !0;
        return is(a, function(p, _, S) {
          return c = !!o(p, _, S), c;
        }), c;
      }
      function ru(a, o, c) {
        for (var p = -1, _ = a.length; ++p < _; ) {
          var S = a[p], P = o(S);
          if (P != null && (L === n ? P === P && !Xn(P) : c(P, L)))
            var L = P, H = S;
        }
        return H;
      }
      function MD(a, o, c, p) {
        var _ = a.length;
        for (c = Qe(c), c < 0 && (c = -c > _ ? 0 : _ + c), p = p === n || p > _ ? _ : Qe(p), p < 0 && (p += _), p = c > p ? 0 : mg(p); c < p; )
          a[c++] = o;
        return a;
      }
      function Qm(a, o) {
        var c = [];
        return is(a, function(p, _, S) {
          o(p, _, S) && c.push(p);
        }), c;
      }
      function vn(a, o, c, p, _) {
        var S = -1, P = a.length;
        for (c || (c = _x), _ || (_ = []); ++S < P; ) {
          var L = a[S];
          o > 0 && c(L) ? o > 1 ? vn(L, o - 1, c, p, _) : rs(_, L) : p || (_[_.length] = L);
        }
        return _;
      }
      var kf = xv(), ev = xv(!0);
      function Zr(a, o) {
        return a && kf(a, o, dn);
      }
      function Tf(a, o) {
        return a && ev(a, o, dn);
      }
      function au(a, o) {
        return ns(o, function(c) {
          return xa(a[c]);
        });
      }
      function Ws(a, o) {
        o = ls(o, a);
        for (var c = 0, p = o.length; a != null && c < p; )
          a = a[Jr(o[c++])];
        return c && c == p ? a : n;
      }
      function tv(a, o, c) {
        var p = o(a);
        return Je(a) ? p : rs(p, c(a));
      }
      function An(a) {
        return a == null ? a === n ? Z : he : Ls && Ls in Nt(a) ? dx(a) : xx(a);
      }
      function Af(a, o) {
        return a > o;
      }
      function CD(a, o) {
        return a != null && kt.call(a, o);
      }
      function PD(a, o) {
        return a != null && o in Nt(a);
      }
      function ND(a, o, c) {
        return a >= bn(o, c) && a < on(o, c);
      }
      function Mf(a, o, c) {
        for (var p = c ? df : Yl, _ = a[0].length, S = a.length, P = S, L = K(S), H = 1 / 0, Q = []; P--; ) {
          var ee = a[P];
          P && o && (ee = Gt(ee, Kn(o))), H = bn(ee.length, H), L[P] = !c && (o || _ >= 120 && ee.length >= 120) ? new Fs(P && ee) : n;
        }
        ee = a[0];
        var ae = -1, _e = L[0];
        e:
          for (; ++ae < _ && Q.length < H; ) {
            var Ce = ee[ae], He = o ? o(Ce) : Ce;
            if (Ce = c || Ce !== 0 ? Ce : 0, !(_e ? So(_e, He) : p(Q, He, c))) {
              for (P = S; --P; ) {
                var rt = L[P];
                if (!(rt ? So(rt, He) : p(a[P], He, c)))
                  continue e;
              }
              _e && _e.push(He), Q.push(Ce);
            }
          }
        return Q;
      }
      function $D(a, o, c, p) {
        return Zr(a, function(_, S, P) {
          o(p, c(_), S, P);
        }), p;
      }
      function $o(a, o, c) {
        o = ls(o, a), a = Bv(a, o);
        var p = a == null ? a : a[Jr(mr(o))];
        return p == null ? n : qn(p, a, c);
      }
      function nv(a) {
        return Xt(a) && An(a) == nt;
      }
      function ID(a) {
        return Xt(a) && An(a) == Mt;
      }
      function LD(a) {
        return Xt(a) && An(a) == ge;
      }
      function Io(a, o, c, p, _) {
        return a === o ? !0 : a == null || o == null || !Xt(a) && !Xt(o) ? a !== a && o !== o : RD(a, o, c, p, Io, _);
      }
      function RD(a, o, c, p, _, S) {
        var P = Je(a), L = Je(o), H = P ? le : wn(a), Q = L ? le : wn(o);
        H = H == nt ? Ee : H, Q = Q == nt ? Ee : Q;
        var ee = H == Ee, ae = Q == Ee, _e = H == Q;
        if (_e && cs(a)) {
          if (!cs(o))
            return !1;
          P = !0, ee = !1;
        }
        if (_e && !ee)
          return S || (S = new Nr()), P || Ai(a) ? Iv(a, o, c, p, _, S) : cx(a, o, H, c, p, _, S);
        if (!(c & w)) {
          var Ce = ee && kt.call(a, "__wrapped__"), He = ae && kt.call(o, "__wrapped__");
          if (Ce || He) {
            var rt = Ce ? a.value() : a, Ve = He ? o.value() : o;
            return S || (S = new Nr()), _(rt, Ve, c, p, S);
          }
        }
        return _e ? (S || (S = new Nr()), fx(a, o, c, p, _, S)) : !1;
      }
      function FD(a) {
        return Xt(a) && wn(a) == A;
      }
      function Cf(a, o, c, p) {
        var _ = c.length, S = _, P = !p;
        if (a == null)
          return !S;
        for (a = Nt(a); _--; ) {
          var L = c[_];
          if (P && L[2] ? L[1] !== a[L[0]] : !(L[0] in a))
            return !1;
        }
        for (; ++_ < S; ) {
          L = c[_];
          var H = L[0], Q = a[H], ee = L[1];
          if (P && L[2]) {
            if (Q === n && !(H in a))
              return !1;
          } else {
            var ae = new Nr();
            if (p)
              var _e = p(Q, ee, H, a, o, ae);
            if (!(_e === n ? Io(ee, Q, w | E, p, ae) : _e))
              return !1;
          }
        }
        return !0;
      }
      function rv(a) {
        if (!Kt(a) || bx(a))
          return !1;
        var o = xa(a) ? FO : TE;
        return o.test(Bs(a));
      }
      function YD(a) {
        return Xt(a) && An(a) == Ot;
      }
      function WD(a) {
        return Xt(a) && wn(a) == Vt;
      }
      function UD(a) {
        return Xt(a) && wu(a.length) && !!Ft[An(a)];
      }
      function av(a) {
        return typeof a == "function" ? a : a == null ? Yn : typeof a == "object" ? Je(a) ? ov(a[0], a[1]) : iv(a) : Sg(a);
      }
      function Pf(a) {
        if (!Fo(a))
          return VO(a);
        var o = [];
        for (var c in Nt(a))
          kt.call(a, c) && c != "constructor" && o.push(c);
        return o;
      }
      function BD(a) {
        if (!Kt(a))
          return Dx(a);
        var o = Fo(a), c = [];
        for (var p in a)
          p == "constructor" && (o || !kt.call(a, p)) || c.push(p);
        return c;
      }
      function Nf(a, o) {
        return a < o;
      }
      function sv(a, o) {
        var c = -1, p = Rn(a) ? K(a.length) : [];
        return is(a, function(_, S, P) {
          p[++c] = o(_, S, P);
        }), p;
      }
      function iv(a) {
        var o = qf(a);
        return o.length == 1 && o[0][2] ? Wv(o[0][0], o[0][1]) : function(c) {
          return c === a || Cf(c, a, o);
        };
      }
      function ov(a, o) {
        return Zf(a) && Yv(o) ? Wv(Jr(a), o) : function(c) {
          var p = id(c, a);
          return p === n && p === o ? od(c, a) : Io(o, p, w | E);
        };
      }
      function su(a, o, c, p, _) {
        a !== o && kf(o, function(S, P) {
          if (_ || (_ = new Nr()), Kt(S))
            HD(a, o, P, c, su, p, _);
          else {
            var L = p ? p(Jf(a, P), S, P + "", a, o, _) : n;
            L === n && (L = S), xf(a, P, L);
          }
        }, Fn);
      }
      function HD(a, o, c, p, _, S, P) {
        var L = Jf(a, c), H = Jf(o, c), Q = P.get(H);
        if (Q) {
          xf(a, c, Q);
          return;
        }
        var ee = S ? S(L, H, c + "", a, o, P) : n, ae = ee === n;
        if (ae) {
          var _e = Je(H), Ce = !_e && cs(H), He = !_e && !Ce && Ai(H);
          ee = H, _e || Ce || He ? Je(L) ? ee = L : Qt(L) ? ee = Ln(L) : Ce ? (ae = !1, ee = yv(H, !0)) : He ? (ae = !1, ee = bv(H, !0)) : ee = [] : Wo(H) || Hs(H) ? (ee = L, Hs(L) ? ee = vg(L) : (!Kt(L) || xa(L)) && (ee = Fv(H))) : ae = !1;
        }
        ae && (P.set(H, ee), _(ee, H, p, S, P), P.delete(H)), xf(a, c, ee);
      }
      function lv(a, o) {
        var c = a.length;
        if (c)
          return o += o < 0 ? c : 0, Da(o, c) ? a[o] : n;
      }
      function uv(a, o, c) {
        o.length ? o = Gt(o, function(S) {
          return Je(S) ? function(P) {
            return Ws(P, S.length === 1 ? S[0] : S);
          } : S;
        }) : o = [Yn];
        var p = -1;
        o = Gt(o, Kn(Ye()));
        var _ = sv(a, function(S, P, L) {
          var H = Gt(o, function(Q) {
            return Q(S);
          });
          return { criteria: H, index: ++p, value: S };
        });
        return vO(_, function(S, P) {
          return nx(S, P, c);
        });
      }
      function VD(a, o) {
        return cv(a, o, function(c, p) {
          return od(a, p);
        });
      }
      function cv(a, o, c) {
        for (var p = -1, _ = o.length, S = {}; ++p < _; ) {
          var P = o[p], L = Ws(a, P);
          c(L, P) && Lo(S, ls(P, a), L);
        }
        return S;
      }
      function jD(a) {
        return function(o) {
          return Ws(o, a);
        };
      }
      function $f(a, o, c, p) {
        var _ = p ? mO : _i, S = -1, P = o.length, L = a;
        for (a === o && (o = Ln(o)), c && (L = Gt(a, Kn(c))); ++S < P; )
          for (var H = 0, Q = o[S], ee = c ? c(Q) : Q; (H = _(L, ee, H, p)) > -1; )
            L !== a && Kl.call(L, H, 1), Kl.call(a, H, 1);
        return a;
      }
      function fv(a, o) {
        for (var c = a ? o.length : 0, p = c - 1; c--; ) {
          var _ = o[c];
          if (c == p || _ !== S) {
            var S = _;
            Da(_) ? Kl.call(a, _, 1) : Ff(a, _);
          }
        }
        return a;
      }
      function If(a, o) {
        return a + Jl(jm() * (o - a + 1));
      }
      function GD(a, o, c, p) {
        for (var _ = -1, S = on(Xl((o - a) / (c || 1)), 0), P = K(S); S--; )
          P[p ? S : ++_] = a, a += c;
        return P;
      }
      function Lf(a, o) {
        var c = "";
        if (!a || o < 1 || o > Ue)
          return c;
        do
          o % 2 && (c += a), o = Jl(o / 2), o && (a += a);
        while (o);
        return c;
      }
      function ot(a, o) {
        return Qf(Uv(a, o, Yn), a + "");
      }
      function zD(a) {
        return qm(Mi(a));
      }
      function qD(a, o) {
        var c = Mi(a);
        return mu(c, Ys(o, 0, c.length));
      }
      function Lo(a, o, c, p) {
        if (!Kt(a))
          return a;
        o = ls(o, a);
        for (var _ = -1, S = o.length, P = S - 1, L = a; L != null && ++_ < S; ) {
          var H = Jr(o[_]), Q = c;
          if (H === "__proto__" || H === "constructor" || H === "prototype")
            return a;
          if (_ != P) {
            var ee = L[H];
            Q = p ? p(ee, H, L) : n, Q === n && (Q = Kt(ee) ? ee : Da(o[_ + 1]) ? [] : {});
          }
          Po(L, H, Q), L = L[H];
        }
        return a;
      }
      var dv = Ql ? function(a, o) {
        return Ql.set(a, o), a;
      } : Yn, KD = Zl ? function(a, o) {
        return Zl(a, "toString", {
          configurable: !0,
          enumerable: !1,
          value: ud(o),
          writable: !0
        });
      } : Yn;
      function ZD(a) {
        return mu(Mi(a));
      }
      function pr(a, o, c) {
        var p = -1, _ = a.length;
        o < 0 && (o = -o > _ ? 0 : _ + o), c = c > _ ? _ : c, c < 0 && (c += _), _ = o > c ? 0 : c - o >>> 0, o >>>= 0;
        for (var S = K(_); ++p < _; )
          S[p] = a[p + o];
        return S;
      }
      function XD(a, o) {
        var c;
        return is(a, function(p, _, S) {
          return c = o(p, _, S), !c;
        }), !!c;
      }
      function iu(a, o, c) {
        var p = 0, _ = a == null ? p : a.length;
        if (typeof o == "number" && o === o && _ <= At) {
          for (; p < _; ) {
            var S = p + _ >>> 1, P = a[S];
            P !== null && !Xn(P) && (c ? P <= o : P < o) ? p = S + 1 : _ = S;
          }
          return _;
        }
        return Rf(a, o, Yn, c);
      }
      function Rf(a, o, c, p) {
        var _ = 0, S = a == null ? 0 : a.length;
        if (S === 0)
          return 0;
        o = c(o);
        for (var P = o !== o, L = o === null, H = Xn(o), Q = o === n; _ < S; ) {
          var ee = Jl((_ + S) / 2), ae = c(a[ee]), _e = ae !== n, Ce = ae === null, He = ae === ae, rt = Xn(ae);
          if (P)
            var Ve = p || He;
          else
            Q ? Ve = He && (p || _e) : L ? Ve = He && _e && (p || !Ce) : H ? Ve = He && _e && !Ce && (p || !rt) : Ce || rt ? Ve = !1 : Ve = p ? ae <= o : ae < o;
          Ve ? _ = ee + 1 : S = ee;
        }
        return bn(S, mt);
      }
      function hv(a, o) {
        for (var c = -1, p = a.length, _ = 0, S = []; ++c < p; ) {
          var P = a[c], L = o ? o(P) : P;
          if (!c || !$r(L, H)) {
            var H = L;
            S[_++] = P === 0 ? 0 : P;
          }
        }
        return S;
      }
      function pv(a) {
        return typeof a == "number" ? a : Xn(a) ? re : +a;
      }
      function Zn(a) {
        if (typeof a == "string")
          return a;
        if (Je(a))
          return Gt(a, Zn) + "";
        if (Xn(a))
          return Gm ? Gm.call(a) : "";
        var o = a + "";
        return o == "0" && 1 / a == -Ae ? "-0" : o;
      }
      function os(a, o, c) {
        var p = -1, _ = Yl, S = a.length, P = !0, L = [], H = L;
        if (c)
          P = !1, _ = df;
        else if (S >= s) {
          var Q = o ? null : lx(a);
          if (Q)
            return Ul(Q);
          P = !1, _ = So, H = new Fs();
        } else
          H = o ? [] : L;
        e:
          for (; ++p < S; ) {
            var ee = a[p], ae = o ? o(ee) : ee;
            if (ee = c || ee !== 0 ? ee : 0, P && ae === ae) {
              for (var _e = H.length; _e--; )
                if (H[_e] === ae)
                  continue e;
              o && H.push(ae), L.push(ee);
            } else
              _(H, ae, c) || (H !== L && H.push(ae), L.push(ee));
          }
        return L;
      }
      function Ff(a, o) {
        return o = ls(o, a), a = Bv(a, o), a == null || delete a[Jr(mr(o))];
      }
      function mv(a, o, c, p) {
        return Lo(a, o, c(Ws(a, o)), p);
      }
      function ou(a, o, c, p) {
        for (var _ = a.length, S = p ? _ : -1; (p ? S-- : ++S < _) && o(a[S], S, a); )
          ;
        return c ? pr(a, p ? 0 : S, p ? S + 1 : _) : pr(a, p ? S + 1 : 0, p ? _ : S);
      }
      function vv(a, o) {
        var c = a;
        return c instanceof dt && (c = c.value()), hf(o, function(p, _) {
          return _.func.apply(_.thisArg, rs([p], _.args));
        }, c);
      }
      function Yf(a, o, c) {
        var p = a.length;
        if (p < 2)
          return p ? os(a[0]) : [];
        for (var _ = -1, S = K(p); ++_ < p; )
          for (var P = a[_], L = -1; ++L < p; )
            L != _ && (S[_] = No(S[_] || P, a[L], o, c));
        return os(vn(S, 1), o, c);
      }
      function gv(a, o, c) {
        for (var p = -1, _ = a.length, S = o.length, P = {}; ++p < _; ) {
          var L = p < S ? o[p] : n;
          c(P, a[p], L);
        }
        return P;
      }
      function Wf(a) {
        return Qt(a) ? a : [];
      }
      function Uf(a) {
        return typeof a == "function" ? a : Yn;
      }
      function ls(a, o) {
        return Je(a) ? a : Zf(a, o) ? [a] : Gv(St(a));
      }
      var JD = ot;
      function us(a, o, c) {
        var p = a.length;
        return c = c === n ? p : c, !o && c >= p ? a : pr(a, o, c);
      }
      var _v = YO || function(a) {
        return mn.clearTimeout(a);
      };
      function yv(a, o) {
        if (o)
          return a.slice();
        var c = a.length, p = Wm ? Wm(c) : new a.constructor(c);
        return a.copy(p), p;
      }
      function Bf(a) {
        var o = new a.constructor(a.byteLength);
        return new zl(o).set(new zl(a)), o;
      }
      function QD(a, o) {
        var c = o ? Bf(a.buffer) : a.buffer;
        return new a.constructor(c, a.byteOffset, a.byteLength);
      }
      function ex(a) {
        var o = new a.constructor(a.source, nm.exec(a));
        return o.lastIndex = a.lastIndex, o;
      }
      function tx(a) {
        return Co ? Nt(Co.call(a)) : {};
      }
      function bv(a, o) {
        var c = o ? Bf(a.buffer) : a.buffer;
        return new a.constructor(c, a.byteOffset, a.length);
      }
      function wv(a, o) {
        if (a !== o) {
          var c = a !== n, p = a === null, _ = a === a, S = Xn(a), P = o !== n, L = o === null, H = o === o, Q = Xn(o);
          if (!L && !Q && !S && a > o || S && P && H && !L && !Q || p && P && H || !c && H || !_)
            return 1;
          if (!p && !S && !Q && a < o || Q && c && _ && !p && !S || L && c && _ || !P && _ || !H)
            return -1;
        }
        return 0;
      }
      function nx(a, o, c) {
        for (var p = -1, _ = a.criteria, S = o.criteria, P = _.length, L = c.length; ++p < P; ) {
          var H = wv(_[p], S[p]);
          if (H) {
            if (p >= L)
              return H;
            var Q = c[p];
            return H * (Q == "desc" ? -1 : 1);
          }
        }
        return a.index - o.index;
      }
      function Ev(a, o, c, p) {
        for (var _ = -1, S = a.length, P = c.length, L = -1, H = o.length, Q = on(S - P, 0), ee = K(H + Q), ae = !p; ++L < H; )
          ee[L] = o[L];
        for (; ++_ < P; )
          (ae || _ < S) && (ee[c[_]] = a[_]);
        for (; Q--; )
          ee[L++] = a[_++];
        return ee;
      }
      function Ov(a, o, c, p) {
        for (var _ = -1, S = a.length, P = -1, L = c.length, H = -1, Q = o.length, ee = on(S - L, 0), ae = K(ee + Q), _e = !p; ++_ < ee; )
          ae[_] = a[_];
        for (var Ce = _; ++H < Q; )
          ae[Ce + H] = o[H];
        for (; ++P < L; )
          (_e || _ < S) && (ae[Ce + c[P]] = a[_++]);
        return ae;
      }
      function Ln(a, o) {
        var c = -1, p = a.length;
        for (o || (o = K(p)); ++c < p; )
          o[c] = a[c];
        return o;
      }
      function Xr(a, o, c, p) {
        var _ = !c;
        c || (c = {});
        for (var S = -1, P = o.length; ++S < P; ) {
          var L = o[S], H = p ? p(c[L], a[L], L, c, a) : n;
          H === n && (H = a[L]), _ ? wa(c, L, H) : Po(c, L, H);
        }
        return c;
      }
      function rx(a, o) {
        return Xr(a, Kf(a), o);
      }
      function ax(a, o) {
        return Xr(a, Lv(a), o);
      }
      function lu(a, o) {
        return function(c, p) {
          var _ = Je(c) ? uO : SD, S = o ? o() : {};
          return _(c, a, Ye(p, 2), S);
        };
      }
      function Si(a) {
        return ot(function(o, c) {
          var p = -1, _ = c.length, S = _ > 1 ? c[_ - 1] : n, P = _ > 2 ? c[2] : n;
          for (S = a.length > 3 && typeof S == "function" ? (_--, S) : n, P && Mn(c[0], c[1], P) && (S = _ < 3 ? n : S, _ = 1), o = Nt(o); ++p < _; ) {
            var L = c[p];
            L && a(o, L, p, S);
          }
          return o;
        });
      }
      function Dv(a, o) {
        return function(c, p) {
          if (c == null)
            return c;
          if (!Rn(c))
            return a(c, p);
          for (var _ = c.length, S = o ? _ : -1, P = Nt(c); (o ? S-- : ++S < _) && p(P[S], S, P) !== !1; )
            ;
          return c;
        };
      }
      function xv(a) {
        return function(o, c, p) {
          for (var _ = -1, S = Nt(o), P = p(o), L = P.length; L--; ) {
            var H = P[a ? L : ++_];
            if (c(S[H], H, S) === !1)
              break;
          }
          return o;
        };
      }
      function sx(a, o, c) {
        var p = o & k, _ = Ro(a);
        function S() {
          var P = this && this !== mn && this instanceof S ? _ : a;
          return P.apply(p ? c : this, arguments);
        }
        return S;
      }
      function Sv(a) {
        return function(o) {
          o = St(o);
          var c = yi(o) ? Pr(o) : n, p = c ? c[0] : o.charAt(0), _ = c ? us(c, 1).join("") : o.slice(1);
          return p[a]() + _;
        };
      }
      function ki(a) {
        return function(o) {
          return hf(Dg(Og(o).replace(KE, "")), a, "");
        };
      }
      function Ro(a) {
        return function() {
          var o = arguments;
          switch (o.length) {
            case 0:
              return new a();
            case 1:
              return new a(o[0]);
            case 2:
              return new a(o[0], o[1]);
            case 3:
              return new a(o[0], o[1], o[2]);
            case 4:
              return new a(o[0], o[1], o[2], o[3]);
            case 5:
              return new a(o[0], o[1], o[2], o[3], o[4]);
            case 6:
              return new a(o[0], o[1], o[2], o[3], o[4], o[5]);
            case 7:
              return new a(o[0], o[1], o[2], o[3], o[4], o[5], o[6]);
          }
          var c = xi(a.prototype), p = a.apply(c, o);
          return Kt(p) ? p : c;
        };
      }
      function ix(a, o, c) {
        var p = Ro(a);
        function _() {
          for (var S = arguments.length, P = K(S), L = S, H = Ti(_); L--; )
            P[L] = arguments[L];
          var Q = S < 3 && P[0] !== H && P[S - 1] !== H ? [] : as(P, H);
          if (S -= Q.length, S < c)
            return Cv(
              a,
              o,
              uu,
              _.placeholder,
              n,
              P,
              Q,
              n,
              n,
              c - S
            );
          var ee = this && this !== mn && this instanceof _ ? p : a;
          return qn(ee, this, P);
        }
        return _;
      }
      function kv(a) {
        return function(o, c, p) {
          var _ = Nt(o);
          if (!Rn(o)) {
            var S = Ye(c, 3);
            o = dn(o), c = function(L) {
              return S(_[L], L, _);
            };
          }
          var P = a(o, c, p);
          return P > -1 ? _[S ? o[P] : P] : n;
        };
      }
      function Tv(a) {
        return Oa(function(o) {
          var c = o.length, p = c, _ = dr.prototype.thru;
          for (a && o.reverse(); p--; ) {
            var S = o[p];
            if (typeof S != "function")
              throw new fr(l);
            if (_ && !P && hu(S) == "wrapper")
              var P = new dr([], !0);
          }
          for (p = P ? p : c; ++p < c; ) {
            S = o[p];
            var L = hu(S), H = L == "wrapper" ? zf(S) : n;
            H && Xf(H[0]) && H[1] == (I | T | C | R) && !H[4].length && H[9] == 1 ? P = P[hu(H[0])].apply(P, H[3]) : P = S.length == 1 && Xf(S) ? P[L]() : P.thru(S);
          }
          return function() {
            var Q = arguments, ee = Q[0];
            if (P && Q.length == 1 && Je(ee))
              return P.plant(ee).value();
            for (var ae = 0, _e = c ? o[ae].apply(this, Q) : ee; ++ae < c; )
              _e = o[ae].call(this, _e);
            return _e;
          };
        });
      }
      function uu(a, o, c, p, _, S, P, L, H, Q) {
        var ee = o & I, ae = o & k, _e = o & b, Ce = o & (T | x), He = o & V, rt = _e ? n : Ro(a);
        function Ve() {
          for (var ft = arguments.length, ht = K(ft), Jn = ft; Jn--; )
            ht[Jn] = arguments[Jn];
          if (Ce)
            var Cn = Ti(Ve), Qn = _O(ht, Cn);
          if (p && (ht = Ev(ht, p, _, Ce)), S && (ht = Ov(ht, S, P, Ce)), ft -= Qn, Ce && ft < Q) {
            var en = as(ht, Cn);
            return Cv(
              a,
              o,
              uu,
              Ve.placeholder,
              c,
              ht,
              en,
              L,
              H,
              Q - ft
            );
          }
          var Ir = ae ? c : this, ka = _e ? Ir[a] : a;
          return ft = ht.length, L ? ht = Sx(ht, L) : He && ft > 1 && ht.reverse(), ee && H < ft && (ht.length = H), this && this !== mn && this instanceof Ve && (ka = rt || Ro(ka)), ka.apply(Ir, ht);
        }
        return Ve;
      }
      function Av(a, o) {
        return function(c, p) {
          return $D(c, a, o(p), {});
        };
      }
      function cu(a, o) {
        return function(c, p) {
          var _;
          if (c === n && p === n)
            return o;
          if (c !== n && (_ = c), p !== n) {
            if (_ === n)
              return p;
            typeof c == "string" || typeof p == "string" ? (c = Zn(c), p = Zn(p)) : (c = pv(c), p = pv(p)), _ = a(c, p);
          }
          return _;
        };
      }
      function Hf(a) {
        return Oa(function(o) {
          return o = Gt(o, Kn(Ye())), ot(function(c) {
            var p = this;
            return a(o, function(_) {
              return qn(_, p, c);
            });
          });
        });
      }
      function fu(a, o) {
        o = o === n ? " " : Zn(o);
        var c = o.length;
        if (c < 2)
          return c ? Lf(o, a) : o;
        var p = Lf(o, Xl(a / bi(o)));
        return yi(o) ? us(Pr(p), 0, a).join("") : p.slice(0, a);
      }
      function ox(a, o, c, p) {
        var _ = o & k, S = Ro(a);
        function P() {
          for (var L = -1, H = arguments.length, Q = -1, ee = p.length, ae = K(ee + H), _e = this && this !== mn && this instanceof P ? S : a; ++Q < ee; )
            ae[Q] = p[Q];
          for (; H--; )
            ae[Q++] = arguments[++L];
          return qn(_e, _ ? c : this, ae);
        }
        return P;
      }
      function Mv(a) {
        return function(o, c, p) {
          return p && typeof p != "number" && Mn(o, c, p) && (c = p = n), o = Sa(o), c === n ? (c = o, o = 0) : c = Sa(c), p = p === n ? o < c ? 1 : -1 : Sa(p), GD(o, c, p, a);
        };
      }
      function du(a) {
        return function(o, c) {
          return typeof o == "string" && typeof c == "string" || (o = vr(o), c = vr(c)), a(o, c);
        };
      }
      function Cv(a, o, c, p, _, S, P, L, H, Q) {
        var ee = o & T, ae = ee ? P : n, _e = ee ? n : P, Ce = ee ? S : n, He = ee ? n : S;
        o |= ee ? C : M, o &= ~(ee ? M : C), o & D || (o &= ~(k | b));
        var rt = [
          a,
          o,
          _,
          Ce,
          ae,
          He,
          _e,
          L,
          H,
          Q
        ], Ve = c.apply(n, rt);
        return Xf(a) && Hv(Ve, rt), Ve.placeholder = p, Vv(Ve, a, o);
      }
      function Vf(a) {
        var o = sn[a];
        return function(c, p) {
          if (c = vr(c), p = p == null ? 0 : bn(Qe(p), 292), p && Vm(c)) {
            var _ = (St(c) + "e").split("e"), S = o(_[0] + "e" + (+_[1] + p));
            return _ = (St(S) + "e").split("e"), +(_[0] + "e" + (+_[1] - p));
          }
          return o(c);
        };
      }
      var lx = Oi && 1 / Ul(new Oi([, -0]))[1] == Ae ? function(a) {
        return new Oi(a);
      } : dd;
      function Pv(a) {
        return function(o) {
          var c = wn(o);
          return c == A ? bf(o) : c == Vt ? xO(o) : gO(o, a(o));
        };
      }
      function Ea(a, o, c, p, _, S, P, L) {
        var H = o & b;
        if (!H && typeof a != "function")
          throw new fr(l);
        var Q = p ? p.length : 0;
        if (Q || (o &= ~(C | M), p = _ = n), P = P === n ? P : on(Qe(P), 0), L = L === n ? L : Qe(L), Q -= _ ? _.length : 0, o & M) {
          var ee = p, ae = _;
          p = _ = n;
        }
        var _e = H ? n : zf(a), Ce = [
          a,
          o,
          c,
          p,
          _,
          ee,
          ae,
          S,
          P,
          L
        ];
        if (_e && Ox(Ce, _e), a = Ce[0], o = Ce[1], c = Ce[2], p = Ce[3], _ = Ce[4], L = Ce[9] = Ce[9] === n ? H ? 0 : a.length : on(Ce[9] - Q, 0), !L && o & (T | x) && (o &= ~(T | x)), !o || o == k)
          var He = sx(a, o, c);
        else
          o == T || o == x ? He = ix(a, o, L) : (o == C || o == (k | C)) && !_.length ? He = ox(a, o, c, p) : He = uu.apply(n, Ce);
        var rt = _e ? dv : Hv;
        return Vv(rt(He, Ce), a, o);
      }
      function Nv(a, o, c, p) {
        return a === n || $r(a, Ei[c]) && !kt.call(p, c) ? o : a;
      }
      function $v(a, o, c, p, _, S) {
        return Kt(a) && Kt(o) && (S.set(o, a), su(a, o, n, $v, S), S.delete(o)), a;
      }
      function ux(a) {
        return Wo(a) ? n : a;
      }
      function Iv(a, o, c, p, _, S) {
        var P = c & w, L = a.length, H = o.length;
        if (L != H && !(P && H > L))
          return !1;
        var Q = S.get(a), ee = S.get(o);
        if (Q && ee)
          return Q == o && ee == a;
        var ae = -1, _e = !0, Ce = c & E ? new Fs() : n;
        for (S.set(a, o), S.set(o, a); ++ae < L; ) {
          var He = a[ae], rt = o[ae];
          if (p)
            var Ve = P ? p(rt, He, ae, o, a, S) : p(He, rt, ae, a, o, S);
          if (Ve !== n) {
            if (Ve)
              continue;
            _e = !1;
            break;
          }
          if (Ce) {
            if (!pf(o, function(ft, ht) {
              if (!So(Ce, ht) && (He === ft || _(He, ft, c, p, S)))
                return Ce.push(ht);
            })) {
              _e = !1;
              break;
            }
          } else if (!(He === rt || _(He, rt, c, p, S))) {
            _e = !1;
            break;
          }
        }
        return S.delete(a), S.delete(o), _e;
      }
      function cx(a, o, c, p, _, S, P) {
        switch (c) {
          case pn:
            if (a.byteLength != o.byteLength || a.byteOffset != o.byteOffset)
              return !1;
            a = a.buffer, o = o.buffer;
          case Mt:
            return !(a.byteLength != o.byteLength || !S(new zl(a), new zl(o)));
          case Oe:
          case ge:
          case G:
            return $r(+a, +o);
          case be:
            return a.name == o.name && a.message == o.message;
          case Ot:
          case _n:
            return a == o + "";
          case A:
            var L = bf;
          case Vt:
            var H = p & w;
            if (L || (L = Ul), a.size != o.size && !H)
              return !1;
            var Q = P.get(a);
            if (Q)
              return Q == o;
            p |= E, P.set(a, o);
            var ee = Iv(L(a), L(o), p, _, S, P);
            return P.delete(a), ee;
          case _t:
            if (Co)
              return Co.call(a) == Co.call(o);
        }
        return !1;
      }
      function fx(a, o, c, p, _, S) {
        var P = c & w, L = jf(a), H = L.length, Q = jf(o), ee = Q.length;
        if (H != ee && !P)
          return !1;
        for (var ae = H; ae--; ) {
          var _e = L[ae];
          if (!(P ? _e in o : kt.call(o, _e)))
            return !1;
        }
        var Ce = S.get(a), He = S.get(o);
        if (Ce && He)
          return Ce == o && He == a;
        var rt = !0;
        S.set(a, o), S.set(o, a);
        for (var Ve = P; ++ae < H; ) {
          _e = L[ae];
          var ft = a[_e], ht = o[_e];
          if (p)
            var Jn = P ? p(ht, ft, _e, o, a, S) : p(ft, ht, _e, a, o, S);
          if (!(Jn === n ? ft === ht || _(ft, ht, c, p, S) : Jn)) {
            rt = !1;
            break;
          }
          Ve || (Ve = _e == "constructor");
        }
        if (rt && !Ve) {
          var Cn = a.constructor, Qn = o.constructor;
          Cn != Qn && "constructor" in a && "constructor" in o && !(typeof Cn == "function" && Cn instanceof Cn && typeof Qn == "function" && Qn instanceof Qn) && (rt = !1);
        }
        return S.delete(a), S.delete(o), rt;
      }
      function Oa(a) {
        return Qf(Uv(a, n, Zv), a + "");
      }
      function jf(a) {
        return tv(a, dn, Kf);
      }
      function Gf(a) {
        return tv(a, Fn, Lv);
      }
      var zf = Ql ? function(a) {
        return Ql.get(a);
      } : dd;
      function hu(a) {
        for (var o = a.name + "", c = Di[o], p = kt.call(Di, o) ? c.length : 0; p--; ) {
          var _ = c[p], S = _.func;
          if (S == null || S == a)
            return _.name;
        }
        return o;
      }
      function Ti(a) {
        var o = kt.call(O, "placeholder") ? O : a;
        return o.placeholder;
      }
      function Ye() {
        var a = O.iteratee || cd;
        return a = a === cd ? av : a, arguments.length ? a(arguments[0], arguments[1]) : a;
      }
      function pu(a, o) {
        var c = a.__data__;
        return yx(o) ? c[typeof o == "string" ? "string" : "hash"] : c.map;
      }
      function qf(a) {
        for (var o = dn(a), c = o.length; c--; ) {
          var p = o[c], _ = a[p];
          o[c] = [p, _, Yv(_)];
        }
        return o;
      }
      function Us(a, o) {
        var c = EO(a, o);
        return rv(c) ? c : n;
      }
      function dx(a) {
        var o = kt.call(a, Ls), c = a[Ls];
        try {
          a[Ls] = n;
          var p = !0;
        } catch {
        }
        var _ = jl.call(a);
        return p && (o ? a[Ls] = c : delete a[Ls]), _;
      }
      var Kf = Ef ? function(a) {
        return a == null ? [] : (a = Nt(a), ns(Ef(a), function(o) {
          return Bm.call(a, o);
        }));
      } : hd, Lv = Ef ? function(a) {
        for (var o = []; a; )
          rs(o, Kf(a)), a = ql(a);
        return o;
      } : hd, wn = An;
      (Of && wn(new Of(new ArrayBuffer(1))) != pn || To && wn(new To()) != A || Df && wn(Df.resolve()) != qe || Oi && wn(new Oi()) != Vt || Ao && wn(new Ao()) != oe) && (wn = function(a) {
        var o = An(a), c = o == Ee ? a.constructor : n, p = c ? Bs(c) : "";
        if (p)
          switch (p) {
            case qO:
              return pn;
            case KO:
              return A;
            case ZO:
              return qe;
            case XO:
              return Vt;
            case JO:
              return oe;
          }
        return o;
      });
      function hx(a, o, c) {
        for (var p = -1, _ = c.length; ++p < _; ) {
          var S = c[p], P = S.size;
          switch (S.type) {
            case "drop":
              a += P;
              break;
            case "dropRight":
              o -= P;
              break;
            case "take":
              o = bn(o, a + P);
              break;
            case "takeRight":
              a = on(a, o - P);
              break;
          }
        }
        return { start: a, end: o };
      }
      function px(a) {
        var o = a.match(bE);
        return o ? o[1].split(wE) : [];
      }
      function Rv(a, o, c) {
        o = ls(o, a);
        for (var p = -1, _ = o.length, S = !1; ++p < _; ) {
          var P = Jr(o[p]);
          if (!(S = a != null && c(a, P)))
            break;
          a = a[P];
        }
        return S || ++p != _ ? S : (_ = a == null ? 0 : a.length, !!_ && wu(_) && Da(P, _) && (Je(a) || Hs(a)));
      }
      function mx(a) {
        var o = a.length, c = new a.constructor(o);
        return o && typeof a[0] == "string" && kt.call(a, "index") && (c.index = a.index, c.input = a.input), c;
      }
      function Fv(a) {
        return typeof a.constructor == "function" && !Fo(a) ? xi(ql(a)) : {};
      }
      function vx(a, o, c) {
        var p = a.constructor;
        switch (o) {
          case Mt:
            return Bf(a);
          case Oe:
          case ge:
            return new p(+a);
          case pn:
            return QD(a, c);
          case lr:
          case kn:
          case Tn:
          case Cr:
          case Kr:
          case $s:
          case Qa:
          case ie:
          case de:
            return bv(a, c);
          case A:
            return new p();
          case G:
          case _n:
            return new p(a);
          case Ot:
            return ex(a);
          case Vt:
            return new p();
          case _t:
            return tx(a);
        }
      }
      function gx(a, o) {
        var c = o.length;
        if (!c)
          return a;
        var p = c - 1;
        return o[p] = (c > 1 ? "& " : "") + o[p], o = o.join(c > 2 ? ", " : " "), a.replace(yE, `{
/* [wrapped with ` + o + `] */
`);
      }
      function _x(a) {
        return Je(a) || Hs(a) || !!(Hm && a && a[Hm]);
      }
      function Da(a, o) {
        var c = typeof a;
        return o = o ?? Ue, !!o && (c == "number" || c != "symbol" && ME.test(a)) && a > -1 && a % 1 == 0 && a < o;
      }
      function Mn(a, o, c) {
        if (!Kt(c))
          return !1;
        var p = typeof o;
        return (p == "number" ? Rn(c) && Da(o, c.length) : p == "string" && o in c) ? $r(c[o], a) : !1;
      }
      function Zf(a, o) {
        if (Je(a))
          return !1;
        var c = typeof a;
        return c == "number" || c == "symbol" || c == "boolean" || a == null || Xn(a) ? !0 : In.test(a) || !pi.test(a) || o != null && a in Nt(o);
      }
      function yx(a) {
        var o = typeof a;
        return o == "string" || o == "number" || o == "symbol" || o == "boolean" ? a !== "__proto__" : a === null;
      }
      function Xf(a) {
        var o = hu(a), c = O[o];
        if (typeof c != "function" || !(o in dt.prototype))
          return !1;
        if (a === c)
          return !0;
        var p = zf(c);
        return !!p && a === p[0];
      }
      function bx(a) {
        return !!Ym && Ym in a;
      }
      var wx = Hl ? xa : pd;
      function Fo(a) {
        var o = a && a.constructor, c = typeof o == "function" && o.prototype || Ei;
        return a === c;
      }
      function Yv(a) {
        return a === a && !Kt(a);
      }
      function Wv(a, o) {
        return function(c) {
          return c == null ? !1 : c[a] === o && (o !== n || a in Nt(c));
        };
      }
      function Ex(a) {
        var o = yu(a, function(p) {
          return c.size === h && c.clear(), p;
        }), c = o.cache;
        return o;
      }
      function Ox(a, o) {
        var c = a[1], p = o[1], _ = c | p, S = _ < (k | b | I), P = p == I && c == T || p == I && c == R && a[7].length <= o[8] || p == (I | R) && o[7].length <= o[8] && c == T;
        if (!(S || P))
          return a;
        p & k && (a[2] = o[2], _ |= c & k ? 0 : D);
        var L = o[3];
        if (L) {
          var H = a[3];
          a[3] = H ? Ev(H, L, o[4]) : L, a[4] = H ? as(a[3], d) : o[4];
        }
        return L = o[5], L && (H = a[5], a[5] = H ? Ov(H, L, o[6]) : L, a[6] = H ? as(a[5], d) : o[6]), L = o[7], L && (a[7] = L), p & I && (a[8] = a[8] == null ? o[8] : bn(a[8], o[8])), a[9] == null && (a[9] = o[9]), a[0] = o[0], a[1] = _, a;
      }
      function Dx(a) {
        var o = [];
        if (a != null)
          for (var c in Nt(a))
            o.push(c);
        return o;
      }
      function xx(a) {
        return jl.call(a);
      }
      function Uv(a, o, c) {
        return o = on(o === n ? a.length - 1 : o, 0), function() {
          for (var p = arguments, _ = -1, S = on(p.length - o, 0), P = K(S); ++_ < S; )
            P[_] = p[o + _];
          _ = -1;
          for (var L = K(o + 1); ++_ < o; )
            L[_] = p[_];
          return L[o] = c(P), qn(a, this, L);
        };
      }
      function Bv(a, o) {
        return o.length < 2 ? a : Ws(a, pr(o, 0, -1));
      }
      function Sx(a, o) {
        for (var c = a.length, p = bn(o.length, c), _ = Ln(a); p--; ) {
          var S = o[p];
          a[p] = Da(S, c) ? _[S] : n;
        }
        return a;
      }
      function Jf(a, o) {
        if (!(o === "constructor" && typeof a[o] == "function") && o != "__proto__")
          return a[o];
      }
      var Hv = jv(dv), Yo = UO || function(a, o) {
        return mn.setTimeout(a, o);
      }, Qf = jv(KD);
      function Vv(a, o, c) {
        var p = o + "";
        return Qf(a, gx(p, kx(px(p), c)));
      }
      function jv(a) {
        var o = 0, c = 0;
        return function() {
          var p = jO(), _ = se - (p - c);
          if (c = p, _ > 0) {
            if (++o >= W)
              return arguments[0];
          } else
            o = 0;
          return a.apply(n, arguments);
        };
      }
      function mu(a, o) {
        var c = -1, p = a.length, _ = p - 1;
        for (o = o === n ? p : o; ++c < o; ) {
          var S = If(c, _), P = a[S];
          a[S] = a[c], a[c] = P;
        }
        return a.length = o, a;
      }
      var Gv = Ex(function(a) {
        var o = [];
        return a.charCodeAt(0) === 46 && o.push(""), a.replace(mi, function(c, p, _, S) {
          o.push(_ ? S.replace(DE, "$1") : p || c);
        }), o;
      });
      function Jr(a) {
        if (typeof a == "string" || Xn(a))
          return a;
        var o = a + "";
        return o == "0" && 1 / a == -Ae ? "-0" : o;
      }
      function Bs(a) {
        if (a != null) {
          try {
            return Vl.call(a);
          } catch {
          }
          try {
            return a + "";
          } catch {
          }
        }
        return "";
      }
      function kx(a, o) {
        return cr(Se, function(c) {
          var p = "_." + c[0];
          o & c[1] && !Yl(a, p) && a.push(p);
        }), a.sort();
      }
      function zv(a) {
        if (a instanceof dt)
          return a.clone();
        var o = new dr(a.__wrapped__, a.__chain__);
        return o.__actions__ = Ln(a.__actions__), o.__index__ = a.__index__, o.__values__ = a.__values__, o;
      }
      function Tx(a, o, c) {
        (c ? Mn(a, o, c) : o === n) ? o = 1 : o = on(Qe(o), 0);
        var p = a == null ? 0 : a.length;
        if (!p || o < 1)
          return [];
        for (var _ = 0, S = 0, P = K(Xl(p / o)); _ < p; )
          P[S++] = pr(a, _, _ += o);
        return P;
      }
      function Ax(a) {
        for (var o = -1, c = a == null ? 0 : a.length, p = 0, _ = []; ++o < c; ) {
          var S = a[o];
          S && (_[p++] = S);
        }
        return _;
      }
      function Mx() {
        var a = arguments.length;
        if (!a)
          return [];
        for (var o = K(a - 1), c = arguments[0], p = a; p--; )
          o[p - 1] = arguments[p];
        return rs(Je(c) ? Ln(c) : [c], vn(o, 1));
      }
      var Cx = ot(function(a, o) {
        return Qt(a) ? No(a, vn(o, 1, Qt, !0)) : [];
      }), Px = ot(function(a, o) {
        var c = mr(o);
        return Qt(c) && (c = n), Qt(a) ? No(a, vn(o, 1, Qt, !0), Ye(c, 2)) : [];
      }), Nx = ot(function(a, o) {
        var c = mr(o);
        return Qt(c) && (c = n), Qt(a) ? No(a, vn(o, 1, Qt, !0), n, c) : [];
      });
      function $x(a, o, c) {
        var p = a == null ? 0 : a.length;
        return p ? (o = c || o === n ? 1 : Qe(o), pr(a, o < 0 ? 0 : o, p)) : [];
      }
      function Ix(a, o, c) {
        var p = a == null ? 0 : a.length;
        return p ? (o = c || o === n ? 1 : Qe(o), o = p - o, pr(a, 0, o < 0 ? 0 : o)) : [];
      }
      function Lx(a, o) {
        return a && a.length ? ou(a, Ye(o, 3), !0, !0) : [];
      }
      function Rx(a, o) {
        return a && a.length ? ou(a, Ye(o, 3), !0) : [];
      }
      function Fx(a, o, c, p) {
        var _ = a == null ? 0 : a.length;
        return _ ? (c && typeof c != "number" && Mn(a, o, c) && (c = 0, p = _), MD(a, o, c, p)) : [];
      }
      function qv(a, o, c) {
        var p = a == null ? 0 : a.length;
        if (!p)
          return -1;
        var _ = c == null ? 0 : Qe(c);
        return _ < 0 && (_ = on(p + _, 0)), Wl(a, Ye(o, 3), _);
      }
      function Kv(a, o, c) {
        var p = a == null ? 0 : a.length;
        if (!p)
          return -1;
        var _ = p - 1;
        return c !== n && (_ = Qe(c), _ = c < 0 ? on(p + _, 0) : bn(_, p - 1)), Wl(a, Ye(o, 3), _, !0);
      }
      function Zv(a) {
        var o = a == null ? 0 : a.length;
        return o ? vn(a, 1) : [];
      }
      function Yx(a) {
        var o = a == null ? 0 : a.length;
        return o ? vn(a, Ae) : [];
      }
      function Wx(a, o) {
        var c = a == null ? 0 : a.length;
        return c ? (o = o === n ? 1 : Qe(o), vn(a, o)) : [];
      }
      function Ux(a) {
        for (var o = -1, c = a == null ? 0 : a.length, p = {}; ++o < c; ) {
          var _ = a[o];
          p[_[0]] = _[1];
        }
        return p;
      }
      function Xv(a) {
        return a && a.length ? a[0] : n;
      }
      function Bx(a, o, c) {
        var p = a == null ? 0 : a.length;
        if (!p)
          return -1;
        var _ = c == null ? 0 : Qe(c);
        return _ < 0 && (_ = on(p + _, 0)), _i(a, o, _);
      }
      function Hx(a) {
        var o = a == null ? 0 : a.length;
        return o ? pr(a, 0, -1) : [];
      }
      var Vx = ot(function(a) {
        var o = Gt(a, Wf);
        return o.length && o[0] === a[0] ? Mf(o) : [];
      }), jx = ot(function(a) {
        var o = mr(a), c = Gt(a, Wf);
        return o === mr(c) ? o = n : c.pop(), c.length && c[0] === a[0] ? Mf(c, Ye(o, 2)) : [];
      }), Gx = ot(function(a) {
        var o = mr(a), c = Gt(a, Wf);
        return o = typeof o == "function" ? o : n, o && c.pop(), c.length && c[0] === a[0] ? Mf(c, n, o) : [];
      });
      function zx(a, o) {
        return a == null ? "" : HO.call(a, o);
      }
      function mr(a) {
        var o = a == null ? 0 : a.length;
        return o ? a[o - 1] : n;
      }
      function qx(a, o, c) {
        var p = a == null ? 0 : a.length;
        if (!p)
          return -1;
        var _ = p;
        return c !== n && (_ = Qe(c), _ = _ < 0 ? on(p + _, 0) : bn(_, p - 1)), o === o ? kO(a, o, _) : Wl(a, Cm, _, !0);
      }
      function Kx(a, o) {
        return a && a.length ? lv(a, Qe(o)) : n;
      }
      var Zx = ot(Jv);
      function Jv(a, o) {
        return a && a.length && o && o.length ? $f(a, o) : a;
      }
      function Xx(a, o, c) {
        return a && a.length && o && o.length ? $f(a, o, Ye(c, 2)) : a;
      }
      function Jx(a, o, c) {
        return a && a.length && o && o.length ? $f(a, o, n, c) : a;
      }
      var Qx = Oa(function(a, o) {
        var c = a == null ? 0 : a.length, p = Sf(a, o);
        return fv(a, Gt(o, function(_) {
          return Da(_, c) ? +_ : _;
        }).sort(wv)), p;
      });
      function eS(a, o) {
        var c = [];
        if (!(a && a.length))
          return c;
        var p = -1, _ = [], S = a.length;
        for (o = Ye(o, 3); ++p < S; ) {
          var P = a[p];
          o(P, p, a) && (c.push(P), _.push(p));
        }
        return fv(a, _), c;
      }
      function ed(a) {
        return a == null ? a : zO.call(a);
      }
      function tS(a, o, c) {
        var p = a == null ? 0 : a.length;
        return p ? (c && typeof c != "number" && Mn(a, o, c) ? (o = 0, c = p) : (o = o == null ? 0 : Qe(o), c = c === n ? p : Qe(c)), pr(a, o, c)) : [];
      }
      function nS(a, o) {
        return iu(a, o);
      }
      function rS(a, o, c) {
        return Rf(a, o, Ye(c, 2));
      }
      function aS(a, o) {
        var c = a == null ? 0 : a.length;
        if (c) {
          var p = iu(a, o);
          if (p < c && $r(a[p], o))
            return p;
        }
        return -1;
      }
      function sS(a, o) {
        return iu(a, o, !0);
      }
      function iS(a, o, c) {
        return Rf(a, o, Ye(c, 2), !0);
      }
      function oS(a, o) {
        var c = a == null ? 0 : a.length;
        if (c) {
          var p = iu(a, o, !0) - 1;
          if ($r(a[p], o))
            return p;
        }
        return -1;
      }
      function lS(a) {
        return a && a.length ? hv(a) : [];
      }
      function uS(a, o) {
        return a && a.length ? hv(a, Ye(o, 2)) : [];
      }
      function cS(a) {
        var o = a == null ? 0 : a.length;
        return o ? pr(a, 1, o) : [];
      }
      function fS(a, o, c) {
        return a && a.length ? (o = c || o === n ? 1 : Qe(o), pr(a, 0, o < 0 ? 0 : o)) : [];
      }
      function dS(a, o, c) {
        var p = a == null ? 0 : a.length;
        return p ? (o = c || o === n ? 1 : Qe(o), o = p - o, pr(a, o < 0 ? 0 : o, p)) : [];
      }
      function hS(a, o) {
        return a && a.length ? ou(a, Ye(o, 3), !1, !0) : [];
      }
      function pS(a, o) {
        return a && a.length ? ou(a, Ye(o, 3)) : [];
      }
      var mS = ot(function(a) {
        return os(vn(a, 1, Qt, !0));
      }), vS = ot(function(a) {
        var o = mr(a);
        return Qt(o) && (o = n), os(vn(a, 1, Qt, !0), Ye(o, 2));
      }), gS = ot(function(a) {
        var o = mr(a);
        return o = typeof o == "function" ? o : n, os(vn(a, 1, Qt, !0), n, o);
      });
      function _S(a) {
        return a && a.length ? os(a) : [];
      }
      function yS(a, o) {
        return a && a.length ? os(a, Ye(o, 2)) : [];
      }
      function bS(a, o) {
        return o = typeof o == "function" ? o : n, a && a.length ? os(a, n, o) : [];
      }
      function td(a) {
        if (!(a && a.length))
          return [];
        var o = 0;
        return a = ns(a, function(c) {
          if (Qt(c))
            return o = on(c.length, o), !0;
        }), _f(o, function(c) {
          return Gt(a, mf(c));
        });
      }
      function Qv(a, o) {
        if (!(a && a.length))
          return [];
        var c = td(a);
        return o == null ? c : Gt(c, function(p) {
          return qn(o, n, p);
        });
      }
      var wS = ot(function(a, o) {
        return Qt(a) ? No(a, o) : [];
      }), ES = ot(function(a) {
        return Yf(ns(a, Qt));
      }), OS = ot(function(a) {
        var o = mr(a);
        return Qt(o) && (o = n), Yf(ns(a, Qt), Ye(o, 2));
      }), DS = ot(function(a) {
        var o = mr(a);
        return o = typeof o == "function" ? o : n, Yf(ns(a, Qt), n, o);
      }), xS = ot(td);
      function SS(a, o) {
        return gv(a || [], o || [], Po);
      }
      function kS(a, o) {
        return gv(a || [], o || [], Lo);
      }
      var TS = ot(function(a) {
        var o = a.length, c = o > 1 ? a[o - 1] : n;
        return c = typeof c == "function" ? (a.pop(), c) : n, Qv(a, c);
      });
      function eg(a) {
        var o = O(a);
        return o.__chain__ = !0, o;
      }
      function AS(a, o) {
        return o(a), a;
      }
      function vu(a, o) {
        return o(a);
      }
      var MS = Oa(function(a) {
        var o = a.length, c = o ? a[0] : 0, p = this.__wrapped__, _ = function(S) {
          return Sf(S, a);
        };
        return o > 1 || this.__actions__.length || !(p instanceof dt) || !Da(c) ? this.thru(_) : (p = p.slice(c, +c + (o ? 1 : 0)), p.__actions__.push({
          func: vu,
          args: [_],
          thisArg: n
        }), new dr(p, this.__chain__).thru(function(S) {
          return o && !S.length && S.push(n), S;
        }));
      });
      function CS() {
        return eg(this);
      }
      function PS() {
        return new dr(this.value(), this.__chain__);
      }
      function NS() {
        this.__values__ === n && (this.__values__ = pg(this.value()));
        var a = this.__index__ >= this.__values__.length, o = a ? n : this.__values__[this.__index__++];
        return { done: a, value: o };
      }
      function $S() {
        return this;
      }
      function IS(a) {
        for (var o, c = this; c instanceof tu; ) {
          var p = zv(c);
          p.__index__ = 0, p.__values__ = n, o ? _.__wrapped__ = p : o = p;
          var _ = p;
          c = c.__wrapped__;
        }
        return _.__wrapped__ = a, o;
      }
      function LS() {
        var a = this.__wrapped__;
        if (a instanceof dt) {
          var o = a;
          return this.__actions__.length && (o = new dt(this)), o = o.reverse(), o.__actions__.push({
            func: vu,
            args: [ed],
            thisArg: n
          }), new dr(o, this.__chain__);
        }
        return this.thru(ed);
      }
      function RS() {
        return vv(this.__wrapped__, this.__actions__);
      }
      var FS = lu(function(a, o, c) {
        kt.call(a, c) ? ++a[c] : wa(a, c, 1);
      });
      function YS(a, o, c) {
        var p = Je(a) ? Am : AD;
        return c && Mn(a, o, c) && (o = n), p(a, Ye(o, 3));
      }
      function WS(a, o) {
        var c = Je(a) ? ns : Qm;
        return c(a, Ye(o, 3));
      }
      var US = kv(qv), BS = kv(Kv);
      function HS(a, o) {
        return vn(gu(a, o), 1);
      }
      function VS(a, o) {
        return vn(gu(a, o), Ae);
      }
      function jS(a, o, c) {
        return c = c === n ? 1 : Qe(c), vn(gu(a, o), c);
      }
      function tg(a, o) {
        var c = Je(a) ? cr : is;
        return c(a, Ye(o, 3));
      }
      function ng(a, o) {
        var c = Je(a) ? cO : Jm;
        return c(a, Ye(o, 3));
      }
      var GS = lu(function(a, o, c) {
        kt.call(a, c) ? a[c].push(o) : wa(a, c, [o]);
      });
      function zS(a, o, c, p) {
        a = Rn(a) ? a : Mi(a), c = c && !p ? Qe(c) : 0;
        var _ = a.length;
        return c < 0 && (c = on(_ + c, 0)), Eu(a) ? c <= _ && a.indexOf(o, c) > -1 : !!_ && _i(a, o, c) > -1;
      }
      var qS = ot(function(a, o, c) {
        var p = -1, _ = typeof o == "function", S = Rn(a) ? K(a.length) : [];
        return is(a, function(P) {
          S[++p] = _ ? qn(o, P, c) : $o(P, o, c);
        }), S;
      }), KS = lu(function(a, o, c) {
        wa(a, c, o);
      });
      function gu(a, o) {
        var c = Je(a) ? Gt : sv;
        return c(a, Ye(o, 3));
      }
      function ZS(a, o, c, p) {
        return a == null ? [] : (Je(o) || (o = o == null ? [] : [o]), c = p ? n : c, Je(c) || (c = c == null ? [] : [c]), uv(a, o, c));
      }
      var XS = lu(function(a, o, c) {
        a[c ? 0 : 1].push(o);
      }, function() {
        return [[], []];
      });
      function JS(a, o, c) {
        var p = Je(a) ? hf : Nm, _ = arguments.length < 3;
        return p(a, Ye(o, 4), c, _, is);
      }
      function QS(a, o, c) {
        var p = Je(a) ? fO : Nm, _ = arguments.length < 3;
        return p(a, Ye(o, 4), c, _, Jm);
      }
      function ek(a, o) {
        var c = Je(a) ? ns : Qm;
        return c(a, bu(Ye(o, 3)));
      }
      function tk(a) {
        var o = Je(a) ? qm : zD;
        return o(a);
      }
      function nk(a, o, c) {
        (c ? Mn(a, o, c) : o === n) ? o = 1 : o = Qe(o);
        var p = Je(a) ? DD : qD;
        return p(a, o);
      }
      function rk(a) {
        var o = Je(a) ? xD : ZD;
        return o(a);
      }
      function ak(a) {
        if (a == null)
          return 0;
        if (Rn(a))
          return Eu(a) ? bi(a) : a.length;
        var o = wn(a);
        return o == A || o == Vt ? a.size : Pf(a).length;
      }
      function sk(a, o, c) {
        var p = Je(a) ? pf : XD;
        return c && Mn(a, o, c) && (o = n), p(a, Ye(o, 3));
      }
      var ik = ot(function(a, o) {
        if (a == null)
          return [];
        var c = o.length;
        return c > 1 && Mn(a, o[0], o[1]) ? o = [] : c > 2 && Mn(o[0], o[1], o[2]) && (o = [o[0]]), uv(a, vn(o, 1), []);
      }), _u = WO || function() {
        return mn.Date.now();
      };
      function ok(a, o) {
        if (typeof o != "function")
          throw new fr(l);
        return a = Qe(a), function() {
          if (--a < 1)
            return o.apply(this, arguments);
        };
      }
      function rg(a, o, c) {
        return o = c ? n : o, o = a && o == null ? a.length : o, Ea(a, I, n, n, n, n, o);
      }
      function ag(a, o) {
        var c;
        if (typeof o != "function")
          throw new fr(l);
        return a = Qe(a), function() {
          return --a > 0 && (c = o.apply(this, arguments)), a <= 1 && (o = n), c;
        };
      }
      var nd = ot(function(a, o, c) {
        var p = k;
        if (c.length) {
          var _ = as(c, Ti(nd));
          p |= C;
        }
        return Ea(a, p, o, c, _);
      }), sg = ot(function(a, o, c) {
        var p = k | b;
        if (c.length) {
          var _ = as(c, Ti(sg));
          p |= C;
        }
        return Ea(o, p, a, c, _);
      });
      function ig(a, o, c) {
        o = c ? n : o;
        var p = Ea(a, T, n, n, n, n, n, o);
        return p.placeholder = ig.placeholder, p;
      }
      function og(a, o, c) {
        o = c ? n : o;
        var p = Ea(a, x, n, n, n, n, n, o);
        return p.placeholder = og.placeholder, p;
      }
      function lg(a, o, c) {
        var p, _, S, P, L, H, Q = 0, ee = !1, ae = !1, _e = !0;
        if (typeof a != "function")
          throw new fr(l);
        o = vr(o) || 0, Kt(c) && (ee = !!c.leading, ae = "maxWait" in c, S = ae ? on(vr(c.maxWait) || 0, o) : S, _e = "trailing" in c ? !!c.trailing : _e);
        function Ce(en) {
          var Ir = p, ka = _;
          return p = _ = n, Q = en, P = a.apply(ka, Ir), P;
        }
        function He(en) {
          return Q = en, L = Yo(ft, o), ee ? Ce(en) : P;
        }
        function rt(en) {
          var Ir = en - H, ka = en - Q, kg = o - Ir;
          return ae ? bn(kg, S - ka) : kg;
        }
        function Ve(en) {
          var Ir = en - H, ka = en - Q;
          return H === n || Ir >= o || Ir < 0 || ae && ka >= S;
        }
        function ft() {
          var en = _u();
          if (Ve(en))
            return ht(en);
          L = Yo(ft, rt(en));
        }
        function ht(en) {
          return L = n, _e && p ? Ce(en) : (p = _ = n, P);
        }
        function Jn() {
          L !== n && _v(L), Q = 0, p = H = _ = L = n;
        }
        function Cn() {
          return L === n ? P : ht(_u());
        }
        function Qn() {
          var en = _u(), Ir = Ve(en);
          if (p = arguments, _ = this, H = en, Ir) {
            if (L === n)
              return He(H);
            if (ae)
              return _v(L), L = Yo(ft, o), Ce(H);
          }
          return L === n && (L = Yo(ft, o)), P;
        }
        return Qn.cancel = Jn, Qn.flush = Cn, Qn;
      }
      var lk = ot(function(a, o) {
        return Xm(a, 1, o);
      }), uk = ot(function(a, o, c) {
        return Xm(a, vr(o) || 0, c);
      });
      function ck(a) {
        return Ea(a, V);
      }
      function yu(a, o) {
        if (typeof a != "function" || o != null && typeof o != "function")
          throw new fr(l);
        var c = function() {
          var p = arguments, _ = o ? o.apply(this, p) : p[0], S = c.cache;
          if (S.has(_))
            return S.get(_);
          var P = a.apply(this, p);
          return c.cache = S.set(_, P) || S, P;
        };
        return c.cache = new (yu.Cache || ba)(), c;
      }
      yu.Cache = ba;
      function bu(a) {
        if (typeof a != "function")
          throw new fr(l);
        return function() {
          var o = arguments;
          switch (o.length) {
            case 0:
              return !a.call(this);
            case 1:
              return !a.call(this, o[0]);
            case 2:
              return !a.call(this, o[0], o[1]);
            case 3:
              return !a.call(this, o[0], o[1], o[2]);
          }
          return !a.apply(this, o);
        };
      }
      function fk(a) {
        return ag(2, a);
      }
      var dk = JD(function(a, o) {
        o = o.length == 1 && Je(o[0]) ? Gt(o[0], Kn(Ye())) : Gt(vn(o, 1), Kn(Ye()));
        var c = o.length;
        return ot(function(p) {
          for (var _ = -1, S = bn(p.length, c); ++_ < S; )
            p[_] = o[_].call(this, p[_]);
          return qn(a, this, p);
        });
      }), rd = ot(function(a, o) {
        var c = as(o, Ti(rd));
        return Ea(a, C, n, o, c);
      }), ug = ot(function(a, o) {
        var c = as(o, Ti(ug));
        return Ea(a, M, n, o, c);
      }), hk = Oa(function(a, o) {
        return Ea(a, R, n, n, n, o);
      });
      function pk(a, o) {
        if (typeof a != "function")
          throw new fr(l);
        return o = o === n ? o : Qe(o), ot(a, o);
      }
      function mk(a, o) {
        if (typeof a != "function")
          throw new fr(l);
        return o = o == null ? 0 : on(Qe(o), 0), ot(function(c) {
          var p = c[o], _ = us(c, 0, o);
          return p && rs(_, p), qn(a, this, _);
        });
      }
      function vk(a, o, c) {
        var p = !0, _ = !0;
        if (typeof a != "function")
          throw new fr(l);
        return Kt(c) && (p = "leading" in c ? !!c.leading : p, _ = "trailing" in c ? !!c.trailing : _), lg(a, o, {
          leading: p,
          maxWait: o,
          trailing: _
        });
      }
      function gk(a) {
        return rg(a, 1);
      }
      function _k(a, o) {
        return rd(Uf(o), a);
      }
      function yk() {
        if (!arguments.length)
          return [];
        var a = arguments[0];
        return Je(a) ? a : [a];
      }
      function bk(a) {
        return hr(a, g);
      }
      function wk(a, o) {
        return o = typeof o == "function" ? o : n, hr(a, g, o);
      }
      function Ek(a) {
        return hr(a, m | g);
      }
      function Ok(a, o) {
        return o = typeof o == "function" ? o : n, hr(a, m | g, o);
      }
      function Dk(a, o) {
        return o == null || Zm(a, o, dn(o));
      }
      function $r(a, o) {
        return a === o || a !== a && o !== o;
      }
      var xk = du(Af), Sk = du(function(a, o) {
        return a >= o;
      }), Hs = nv(function() {
        return arguments;
      }()) ? nv : function(a) {
        return Xt(a) && kt.call(a, "callee") && !Bm.call(a, "callee");
      }, Je = K.isArray, kk = Om ? Kn(Om) : ID;
      function Rn(a) {
        return a != null && wu(a.length) && !xa(a);
      }
      function Qt(a) {
        return Xt(a) && Rn(a);
      }
      function Tk(a) {
        return a === !0 || a === !1 || Xt(a) && An(a) == Oe;
      }
      var cs = BO || pd, Ak = Dm ? Kn(Dm) : LD;
      function Mk(a) {
        return Xt(a) && a.nodeType === 1 && !Wo(a);
      }
      function Ck(a) {
        if (a == null)
          return !0;
        if (Rn(a) && (Je(a) || typeof a == "string" || typeof a.splice == "function" || cs(a) || Ai(a) || Hs(a)))
          return !a.length;
        var o = wn(a);
        if (o == A || o == Vt)
          return !a.size;
        if (Fo(a))
          return !Pf(a).length;
        for (var c in a)
          if (kt.call(a, c))
            return !1;
        return !0;
      }
      function Pk(a, o) {
        return Io(a, o);
      }
      function Nk(a, o, c) {
        c = typeof c == "function" ? c : n;
        var p = c ? c(a, o) : n;
        return p === n ? Io(a, o, n, c) : !!p;
      }
      function ad(a) {
        if (!Xt(a))
          return !1;
        var o = An(a);
        return o == be || o == ne || typeof a.message == "string" && typeof a.name == "string" && !Wo(a);
      }
      function $k(a) {
        return typeof a == "number" && Vm(a);
      }
      function xa(a) {
        if (!Kt(a))
          return !1;
        var o = An(a);
        return o == Be || o == N || o == pe || o == Ht;
      }
      function cg(a) {
        return typeof a == "number" && a == Qe(a);
      }
      function wu(a) {
        return typeof a == "number" && a > -1 && a % 1 == 0 && a <= Ue;
      }
      function Kt(a) {
        var o = typeof a;
        return a != null && (o == "object" || o == "function");
      }
      function Xt(a) {
        return a != null && typeof a == "object";
      }
      var fg = xm ? Kn(xm) : FD;
      function Ik(a, o) {
        return a === o || Cf(a, o, qf(o));
      }
      function Lk(a, o, c) {
        return c = typeof c == "function" ? c : n, Cf(a, o, qf(o), c);
      }
      function Rk(a) {
        return dg(a) && a != +a;
      }
      function Fk(a) {
        if (wx(a))
          throw new Ze(i);
        return rv(a);
      }
      function Yk(a) {
        return a === null;
      }
      function Wk(a) {
        return a == null;
      }
      function dg(a) {
        return typeof a == "number" || Xt(a) && An(a) == G;
      }
      function Wo(a) {
        if (!Xt(a) || An(a) != Ee)
          return !1;
        var o = ql(a);
        if (o === null)
          return !0;
        var c = kt.call(o, "constructor") && o.constructor;
        return typeof c == "function" && c instanceof c && Vl.call(c) == LO;
      }
      var sd = Sm ? Kn(Sm) : YD;
      function Uk(a) {
        return cg(a) && a >= -Ue && a <= Ue;
      }
      var hg = km ? Kn(km) : WD;
      function Eu(a) {
        return typeof a == "string" || !Je(a) && Xt(a) && An(a) == _n;
      }
      function Xn(a) {
        return typeof a == "symbol" || Xt(a) && An(a) == _t;
      }
      var Ai = Tm ? Kn(Tm) : UD;
      function Bk(a) {
        return a === n;
      }
      function Hk(a) {
        return Xt(a) && wn(a) == oe;
      }
      function Vk(a) {
        return Xt(a) && An(a) == jt;
      }
      var jk = du(Nf), Gk = du(function(a, o) {
        return a <= o;
      });
      function pg(a) {
        if (!a)
          return [];
        if (Rn(a))
          return Eu(a) ? Pr(a) : Ln(a);
        if (ko && a[ko])
          return DO(a[ko]());
        var o = wn(a), c = o == A ? bf : o == Vt ? Ul : Mi;
        return c(a);
      }
      function Sa(a) {
        if (!a)
          return a === 0 ? a : 0;
        if (a = vr(a), a === Ae || a === -Ae) {
          var o = a < 0 ? -1 : 1;
          return o * Re;
        }
        return a === a ? a : 0;
      }
      function Qe(a) {
        var o = Sa(a), c = o % 1;
        return o === o ? c ? o - c : o : 0;
      }
      function mg(a) {
        return a ? Ys(Qe(a), 0, Me) : 0;
      }
      function vr(a) {
        if (typeof a == "number")
          return a;
        if (Xn(a))
          return re;
        if (Kt(a)) {
          var o = typeof a.valueOf == "function" ? a.valueOf() : a;
          a = Kt(o) ? o + "" : o;
        }
        if (typeof a != "string")
          return a === 0 ? a : +a;
        a = $m(a);
        var c = kE.test(a);
        return c || AE.test(a) ? oO(a.slice(2), c ? 2 : 8) : SE.test(a) ? re : +a;
      }
      function vg(a) {
        return Xr(a, Fn(a));
      }
      function zk(a) {
        return a ? Ys(Qe(a), -Ue, Ue) : a === 0 ? a : 0;
      }
      function St(a) {
        return a == null ? "" : Zn(a);
      }
      var qk = Si(function(a, o) {
        if (Fo(o) || Rn(o)) {
          Xr(o, dn(o), a);
          return;
        }
        for (var c in o)
          kt.call(o, c) && Po(a, c, o[c]);
      }), gg = Si(function(a, o) {
        Xr(o, Fn(o), a);
      }), Ou = Si(function(a, o, c, p) {
        Xr(o, Fn(o), a, p);
      }), Kk = Si(function(a, o, c, p) {
        Xr(o, dn(o), a, p);
      }), Zk = Oa(Sf);
      function Xk(a, o) {
        var c = xi(a);
        return o == null ? c : Km(c, o);
      }
      var Jk = ot(function(a, o) {
        a = Nt(a);
        var c = -1, p = o.length, _ = p > 2 ? o[2] : n;
        for (_ && Mn(o[0], o[1], _) && (p = 1); ++c < p; )
          for (var S = o[c], P = Fn(S), L = -1, H = P.length; ++L < H; ) {
            var Q = P[L], ee = a[Q];
            (ee === n || $r(ee, Ei[Q]) && !kt.call(a, Q)) && (a[Q] = S[Q]);
          }
        return a;
      }), Qk = ot(function(a) {
        return a.push(n, $v), qn(_g, n, a);
      });
      function eT(a, o) {
        return Mm(a, Ye(o, 3), Zr);
      }
      function tT(a, o) {
        return Mm(a, Ye(o, 3), Tf);
      }
      function nT(a, o) {
        return a == null ? a : kf(a, Ye(o, 3), Fn);
      }
      function rT(a, o) {
        return a == null ? a : ev(a, Ye(o, 3), Fn);
      }
      function aT(a, o) {
        return a && Zr(a, Ye(o, 3));
      }
      function sT(a, o) {
        return a && Tf(a, Ye(o, 3));
      }
      function iT(a) {
        return a == null ? [] : au(a, dn(a));
      }
      function oT(a) {
        return a == null ? [] : au(a, Fn(a));
      }
      function id(a, o, c) {
        var p = a == null ? n : Ws(a, o);
        return p === n ? c : p;
      }
      function lT(a, o) {
        return a != null && Rv(a, o, CD);
      }
      function od(a, o) {
        return a != null && Rv(a, o, PD);
      }
      var uT = Av(function(a, o, c) {
        o != null && typeof o.toString != "function" && (o = jl.call(o)), a[o] = c;
      }, ud(Yn)), cT = Av(function(a, o, c) {
        o != null && typeof o.toString != "function" && (o = jl.call(o)), kt.call(a, o) ? a[o].push(c) : a[o] = [c];
      }, Ye), fT = ot($o);
      function dn(a) {
        return Rn(a) ? zm(a) : Pf(a);
      }
      function Fn(a) {
        return Rn(a) ? zm(a, !0) : BD(a);
      }
      function dT(a, o) {
        var c = {};
        return o = Ye(o, 3), Zr(a, function(p, _, S) {
          wa(c, o(p, _, S), p);
        }), c;
      }
      function hT(a, o) {
        var c = {};
        return o = Ye(o, 3), Zr(a, function(p, _, S) {
          wa(c, _, o(p, _, S));
        }), c;
      }
      var pT = Si(function(a, o, c) {
        su(a, o, c);
      }), _g = Si(function(a, o, c, p) {
        su(a, o, c, p);
      }), mT = Oa(function(a, o) {
        var c = {};
        if (a == null)
          return c;
        var p = !1;
        o = Gt(o, function(S) {
          return S = ls(S, a), p || (p = S.length > 1), S;
        }), Xr(a, Gf(a), c), p && (c = hr(c, m | v | g, ux));
        for (var _ = o.length; _--; )
          Ff(c, o[_]);
        return c;
      });
      function vT(a, o) {
        return yg(a, bu(Ye(o)));
      }
      var gT = Oa(function(a, o) {
        return a == null ? {} : VD(a, o);
      });
      function yg(a, o) {
        if (a == null)
          return {};
        var c = Gt(Gf(a), function(p) {
          return [p];
        });
        return o = Ye(o), cv(a, c, function(p, _) {
          return o(p, _[0]);
        });
      }
      function _T(a, o, c) {
        o = ls(o, a);
        var p = -1, _ = o.length;
        for (_ || (_ = 1, a = n); ++p < _; ) {
          var S = a == null ? n : a[Jr(o[p])];
          S === n && (p = _, S = c), a = xa(S) ? S.call(a) : S;
        }
        return a;
      }
      function yT(a, o, c) {
        return a == null ? a : Lo(a, o, c);
      }
      function bT(a, o, c, p) {
        return p = typeof p == "function" ? p : n, a == null ? a : Lo(a, o, c, p);
      }
      var bg = Pv(dn), wg = Pv(Fn);
      function wT(a, o, c) {
        var p = Je(a), _ = p || cs(a) || Ai(a);
        if (o = Ye(o, 4), c == null) {
          var S = a && a.constructor;
          _ ? c = p ? new S() : [] : Kt(a) ? c = xa(S) ? xi(ql(a)) : {} : c = {};
        }
        return (_ ? cr : Zr)(a, function(P, L, H) {
          return o(c, P, L, H);
        }), c;
      }
      function ET(a, o) {
        return a == null ? !0 : Ff(a, o);
      }
      function OT(a, o, c) {
        return a == null ? a : mv(a, o, Uf(c));
      }
      function DT(a, o, c, p) {
        return p = typeof p == "function" ? p : n, a == null ? a : mv(a, o, Uf(c), p);
      }
      function Mi(a) {
        return a == null ? [] : yf(a, dn(a));
      }
      function xT(a) {
        return a == null ? [] : yf(a, Fn(a));
      }
      function ST(a, o, c) {
        return c === n && (c = o, o = n), c !== n && (c = vr(c), c = c === c ? c : 0), o !== n && (o = vr(o), o = o === o ? o : 0), Ys(vr(a), o, c);
      }
      function kT(a, o, c) {
        return o = Sa(o), c === n ? (c = o, o = 0) : c = Sa(c), a = vr(a), ND(a, o, c);
      }
      function TT(a, o, c) {
        if (c && typeof c != "boolean" && Mn(a, o, c) && (o = c = n), c === n && (typeof o == "boolean" ? (c = o, o = n) : typeof a == "boolean" && (c = a, a = n)), a === n && o === n ? (a = 0, o = 1) : (a = Sa(a), o === n ? (o = a, a = 0) : o = Sa(o)), a > o) {
          var p = a;
          a = o, o = p;
        }
        if (c || a % 1 || o % 1) {
          var _ = jm();
          return bn(a + _ * (o - a + iO("1e-" + ((_ + "").length - 1))), o);
        }
        return If(a, o);
      }
      var AT = ki(function(a, o, c) {
        return o = o.toLowerCase(), a + (c ? Eg(o) : o);
      });
      function Eg(a) {
        return ld(St(a).toLowerCase());
      }
      function Og(a) {
        return a = St(a), a && a.replace(CE, yO).replace(ZE, "");
      }
      function MT(a, o, c) {
        a = St(a), o = Zn(o);
        var p = a.length;
        c = c === n ? p : Ys(Qe(c), 0, p);
        var _ = c;
        return c -= o.length, c >= 0 && a.slice(c, _) == o;
      }
      function CT(a) {
        return a = St(a), a && zn.test(a) ? a.replace(lt, bO) : a;
      }
      function PT(a) {
        return a = St(a), a && xo.test(a) ? a.replace(_a, "\\$&") : a;
      }
      var NT = ki(function(a, o, c) {
        return a + (c ? "-" : "") + o.toLowerCase();
      }), $T = ki(function(a, o, c) {
        return a + (c ? " " : "") + o.toLowerCase();
      }), IT = Sv("toLowerCase");
      function LT(a, o, c) {
        a = St(a), o = Qe(o);
        var p = o ? bi(a) : 0;
        if (!o || p >= o)
          return a;
        var _ = (o - p) / 2;
        return fu(Jl(_), c) + a + fu(Xl(_), c);
      }
      function RT(a, o, c) {
        a = St(a), o = Qe(o);
        var p = o ? bi(a) : 0;
        return o && p < o ? a + fu(o - p, c) : a;
      }
      function FT(a, o, c) {
        a = St(a), o = Qe(o);
        var p = o ? bi(a) : 0;
        return o && p < o ? fu(o - p, c) + a : a;
      }
      function YT(a, o, c) {
        return c || o == null ? o = 0 : o && (o = +o), GO(St(a).replace(vi, ""), o || 0);
      }
      function WT(a, o, c) {
        return (c ? Mn(a, o, c) : o === n) ? o = 1 : o = Qe(o), Lf(St(a), o);
      }
      function UT() {
        var a = arguments, o = St(a[0]);
        return a.length < 3 ? o : o.replace(a[1], a[2]);
      }
      var BT = ki(function(a, o, c) {
        return a + (c ? "_" : "") + o.toLowerCase();
      });
      function HT(a, o, c) {
        return c && typeof c != "number" && Mn(a, o, c) && (o = c = n), c = c === n ? Me : c >>> 0, c ? (a = St(a), a && (typeof o == "string" || o != null && !sd(o)) && (o = Zn(o), !o && yi(a)) ? us(Pr(a), 0, c) : a.split(o, c)) : [];
      }
      var VT = ki(function(a, o, c) {
        return a + (c ? " " : "") + ld(o);
      });
      function jT(a, o, c) {
        return a = St(a), c = c == null ? 0 : Ys(Qe(c), 0, a.length), o = Zn(o), a.slice(c, c + o.length) == o;
      }
      function GT(a, o, c) {
        var p = O.templateSettings;
        c && Mn(a, o, c) && (o = n), a = St(a), o = Ou({}, o, p, Nv);
        var _ = Ou({}, o.imports, p.imports, Nv), S = dn(_), P = yf(_, S), L, H, Q = 0, ee = o.interpolate || Ll, ae = "__p += '", _e = wf(
          (o.escape || Ll).source + "|" + ee.source + "|" + (ee === ts ? xE : Ll).source + "|" + (o.evaluate || Ll).source + "|$",
          "g"
        ), Ce = "//# sourceURL=" + (kt.call(o, "sourceURL") ? (o.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++tO + "]") + `
`;
        a.replace(_e, function(Ve, ft, ht, Jn, Cn, Qn) {
          return ht || (ht = Jn), ae += a.slice(Q, Qn).replace(PE, wO), ft && (L = !0, ae += `' +
__e(` + ft + `) +
'`), Cn && (H = !0, ae += `';
` + Cn + `;
__p += '`), ht && (ae += `' +
((__t = (` + ht + `)) == null ? '' : __t) +
'`), Q = Qn + Ve.length, Ve;
        }), ae += `';
`;
        var He = kt.call(o, "variable") && o.variable;
        if (!He)
          ae = `with (obj) {
` + ae + `
}
`;
        else if (OE.test(He))
          throw new Ze(u);
        ae = (H ? ae.replace(je, "") : ae).replace(B, "$1").replace(fe, "$1;"), ae = "function(" + (He || "obj") + `) {
` + (He ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (L ? ", __e = _.escape" : "") + (H ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + ae + `return __p
}`;
        var rt = xg(function() {
          return Dt(S, Ce + "return " + ae).apply(n, P);
        });
        if (rt.source = ae, ad(rt))
          throw rt;
        return rt;
      }
      function zT(a) {
        return St(a).toLowerCase();
      }
      function qT(a) {
        return St(a).toUpperCase();
      }
      function KT(a, o, c) {
        if (a = St(a), a && (c || o === n))
          return $m(a);
        if (!a || !(o = Zn(o)))
          return a;
        var p = Pr(a), _ = Pr(o), S = Im(p, _), P = Lm(p, _) + 1;
        return us(p, S, P).join("");
      }
      function ZT(a, o, c) {
        if (a = St(a), a && (c || o === n))
          return a.slice(0, Fm(a) + 1);
        if (!a || !(o = Zn(o)))
          return a;
        var p = Pr(a), _ = Lm(p, Pr(o)) + 1;
        return us(p, 0, _).join("");
      }
      function XT(a, o, c) {
        if (a = St(a), a && (c || o === n))
          return a.replace(vi, "");
        if (!a || !(o = Zn(o)))
          return a;
        var p = Pr(a), _ = Im(p, Pr(o));
        return us(p, _).join("");
      }
      function JT(a, o) {
        var c = $, p = q;
        if (Kt(o)) {
          var _ = "separator" in o ? o.separator : _;
          c = "length" in o ? Qe(o.length) : c, p = "omission" in o ? Zn(o.omission) : p;
        }
        a = St(a);
        var S = a.length;
        if (yi(a)) {
          var P = Pr(a);
          S = P.length;
        }
        if (c >= S)
          return a;
        var L = c - bi(p);
        if (L < 1)
          return p;
        var H = P ? us(P, 0, L).join("") : a.slice(0, L);
        if (_ === n)
          return H + p;
        if (P && (L += H.length - L), sd(_)) {
          if (a.slice(L).search(_)) {
            var Q, ee = H;
            for (_.global || (_ = wf(_.source, St(nm.exec(_)) + "g")), _.lastIndex = 0; Q = _.exec(ee); )
              var ae = Q.index;
            H = H.slice(0, ae === n ? L : ae);
          }
        } else if (a.indexOf(Zn(_), L) != L) {
          var _e = H.lastIndexOf(_);
          _e > -1 && (H = H.slice(0, _e));
        }
        return H + p;
      }
      function QT(a) {
        return a = St(a), a && Zt.test(a) ? a.replace(Ne, TO) : a;
      }
      var eA = ki(function(a, o, c) {
        return a + (c ? " " : "") + o.toUpperCase();
      }), ld = Sv("toUpperCase");
      function Dg(a, o, c) {
        return a = St(a), o = c ? n : o, o === n ? OO(a) ? CO(a) : pO(a) : a.match(o) || [];
      }
      var xg = ot(function(a, o) {
        try {
          return qn(a, n, o);
        } catch (c) {
          return ad(c) ? c : new Ze(c);
        }
      }), tA = Oa(function(a, o) {
        return cr(o, function(c) {
          c = Jr(c), wa(a, c, nd(a[c], a));
        }), a;
      });
      function nA(a) {
        var o = a == null ? 0 : a.length, c = Ye();
        return a = o ? Gt(a, function(p) {
          if (typeof p[1] != "function")
            throw new fr(l);
          return [c(p[0]), p[1]];
        }) : [], ot(function(p) {
          for (var _ = -1; ++_ < o; ) {
            var S = a[_];
            if (qn(S[0], this, p))
              return qn(S[1], this, p);
          }
        });
      }
      function rA(a) {
        return TD(hr(a, m));
      }
      function ud(a) {
        return function() {
          return a;
        };
      }
      function aA(a, o) {
        return a == null || a !== a ? o : a;
      }
      var sA = Tv(), iA = Tv(!0);
      function Yn(a) {
        return a;
      }
      function cd(a) {
        return av(typeof a == "function" ? a : hr(a, m));
      }
      function oA(a) {
        return iv(hr(a, m));
      }
      function lA(a, o) {
        return ov(a, hr(o, m));
      }
      var uA = ot(function(a, o) {
        return function(c) {
          return $o(c, a, o);
        };
      }), cA = ot(function(a, o) {
        return function(c) {
          return $o(a, c, o);
        };
      });
      function fd(a, o, c) {
        var p = dn(o), _ = au(o, p);
        c == null && !(Kt(o) && (_.length || !p.length)) && (c = o, o = a, a = this, _ = au(o, dn(o)));
        var S = !(Kt(c) && "chain" in c) || !!c.chain, P = xa(a);
        return cr(_, function(L) {
          var H = o[L];
          a[L] = H, P && (a.prototype[L] = function() {
            var Q = this.__chain__;
            if (S || Q) {
              var ee = a(this.__wrapped__), ae = ee.__actions__ = Ln(this.__actions__);
              return ae.push({ func: H, args: arguments, thisArg: a }), ee.__chain__ = Q, ee;
            }
            return H.apply(a, rs([this.value()], arguments));
          });
        }), a;
      }
      function fA() {
        return mn._ === this && (mn._ = RO), this;
      }
      function dd() {
      }
      function dA(a) {
        return a = Qe(a), ot(function(o) {
          return lv(o, a);
        });
      }
      var hA = Hf(Gt), pA = Hf(Am), mA = Hf(pf);
      function Sg(a) {
        return Zf(a) ? mf(Jr(a)) : jD(a);
      }
      function vA(a) {
        return function(o) {
          return a == null ? n : Ws(a, o);
        };
      }
      var gA = Mv(), _A = Mv(!0);
      function hd() {
        return [];
      }
      function pd() {
        return !1;
      }
      function yA() {
        return {};
      }
      function bA() {
        return "";
      }
      function wA() {
        return !0;
      }
      function EA(a, o) {
        if (a = Qe(a), a < 1 || a > Ue)
          return [];
        var c = Me, p = bn(a, Me);
        o = Ye(o), a -= Me;
        for (var _ = _f(p, o); ++c < a; )
          o(c);
        return _;
      }
      function OA(a) {
        return Je(a) ? Gt(a, Jr) : Xn(a) ? [a] : Ln(Gv(St(a)));
      }
      function DA(a) {
        var o = ++IO;
        return St(a) + o;
      }
      var xA = cu(function(a, o) {
        return a + o;
      }, 0), SA = Vf("ceil"), kA = cu(function(a, o) {
        return a / o;
      }, 1), TA = Vf("floor");
      function AA(a) {
        return a && a.length ? ru(a, Yn, Af) : n;
      }
      function MA(a, o) {
        return a && a.length ? ru(a, Ye(o, 2), Af) : n;
      }
      function CA(a) {
        return Pm(a, Yn);
      }
      function PA(a, o) {
        return Pm(a, Ye(o, 2));
      }
      function NA(a) {
        return a && a.length ? ru(a, Yn, Nf) : n;
      }
      function $A(a, o) {
        return a && a.length ? ru(a, Ye(o, 2), Nf) : n;
      }
      var IA = cu(function(a, o) {
        return a * o;
      }, 1), LA = Vf("round"), RA = cu(function(a, o) {
        return a - o;
      }, 0);
      function FA(a) {
        return a && a.length ? gf(a, Yn) : 0;
      }
      function YA(a, o) {
        return a && a.length ? gf(a, Ye(o, 2)) : 0;
      }
      return O.after = ok, O.ary = rg, O.assign = qk, O.assignIn = gg, O.assignInWith = Ou, O.assignWith = Kk, O.at = Zk, O.before = ag, O.bind = nd, O.bindAll = tA, O.bindKey = sg, O.castArray = yk, O.chain = eg, O.chunk = Tx, O.compact = Ax, O.concat = Mx, O.cond = nA, O.conforms = rA, O.constant = ud, O.countBy = FS, O.create = Xk, O.curry = ig, O.curryRight = og, O.debounce = lg, O.defaults = Jk, O.defaultsDeep = Qk, O.defer = lk, O.delay = uk, O.difference = Cx, O.differenceBy = Px, O.differenceWith = Nx, O.drop = $x, O.dropRight = Ix, O.dropRightWhile = Lx, O.dropWhile = Rx, O.fill = Fx, O.filter = WS, O.flatMap = HS, O.flatMapDeep = VS, O.flatMapDepth = jS, O.flatten = Zv, O.flattenDeep = Yx, O.flattenDepth = Wx, O.flip = ck, O.flow = sA, O.flowRight = iA, O.fromPairs = Ux, O.functions = iT, O.functionsIn = oT, O.groupBy = GS, O.initial = Hx, O.intersection = Vx, O.intersectionBy = jx, O.intersectionWith = Gx, O.invert = uT, O.invertBy = cT, O.invokeMap = qS, O.iteratee = cd, O.keyBy = KS, O.keys = dn, O.keysIn = Fn, O.map = gu, O.mapKeys = dT, O.mapValues = hT, O.matches = oA, O.matchesProperty = lA, O.memoize = yu, O.merge = pT, O.mergeWith = _g, O.method = uA, O.methodOf = cA, O.mixin = fd, O.negate = bu, O.nthArg = dA, O.omit = mT, O.omitBy = vT, O.once = fk, O.orderBy = ZS, O.over = hA, O.overArgs = dk, O.overEvery = pA, O.overSome = mA, O.partial = rd, O.partialRight = ug, O.partition = XS, O.pick = gT, O.pickBy = yg, O.property = Sg, O.propertyOf = vA, O.pull = Zx, O.pullAll = Jv, O.pullAllBy = Xx, O.pullAllWith = Jx, O.pullAt = Qx, O.range = gA, O.rangeRight = _A, O.rearg = hk, O.reject = ek, O.remove = eS, O.rest = pk, O.reverse = ed, O.sampleSize = nk, O.set = yT, O.setWith = bT, O.shuffle = rk, O.slice = tS, O.sortBy = ik, O.sortedUniq = lS, O.sortedUniqBy = uS, O.split = HT, O.spread = mk, O.tail = cS, O.take = fS, O.takeRight = dS, O.takeRightWhile = hS, O.takeWhile = pS, O.tap = AS, O.throttle = vk, O.thru = vu, O.toArray = pg, O.toPairs = bg, O.toPairsIn = wg, O.toPath = OA, O.toPlainObject = vg, O.transform = wT, O.unary = gk, O.union = mS, O.unionBy = vS, O.unionWith = gS, O.uniq = _S, O.uniqBy = yS, O.uniqWith = bS, O.unset = ET, O.unzip = td, O.unzipWith = Qv, O.update = OT, O.updateWith = DT, O.values = Mi, O.valuesIn = xT, O.without = wS, O.words = Dg, O.wrap = _k, O.xor = ES, O.xorBy = OS, O.xorWith = DS, O.zip = xS, O.zipObject = SS, O.zipObjectDeep = kS, O.zipWith = TS, O.entries = bg, O.entriesIn = wg, O.extend = gg, O.extendWith = Ou, fd(O, O), O.add = xA, O.attempt = xg, O.camelCase = AT, O.capitalize = Eg, O.ceil = SA, O.clamp = ST, O.clone = bk, O.cloneDeep = Ek, O.cloneDeepWith = Ok, O.cloneWith = wk, O.conformsTo = Dk, O.deburr = Og, O.defaultTo = aA, O.divide = kA, O.endsWith = MT, O.eq = $r, O.escape = CT, O.escapeRegExp = PT, O.every = YS, O.find = US, O.findIndex = qv, O.findKey = eT, O.findLast = BS, O.findLastIndex = Kv, O.findLastKey = tT, O.floor = TA, O.forEach = tg, O.forEachRight = ng, O.forIn = nT, O.forInRight = rT, O.forOwn = aT, O.forOwnRight = sT, O.get = id, O.gt = xk, O.gte = Sk, O.has = lT, O.hasIn = od, O.head = Xv, O.identity = Yn, O.includes = zS, O.indexOf = Bx, O.inRange = kT, O.invoke = fT, O.isArguments = Hs, O.isArray = Je, O.isArrayBuffer = kk, O.isArrayLike = Rn, O.isArrayLikeObject = Qt, O.isBoolean = Tk, O.isBuffer = cs, O.isDate = Ak, O.isElement = Mk, O.isEmpty = Ck, O.isEqual = Pk, O.isEqualWith = Nk, O.isError = ad, O.isFinite = $k, O.isFunction = xa, O.isInteger = cg, O.isLength = wu, O.isMap = fg, O.isMatch = Ik, O.isMatchWith = Lk, O.isNaN = Rk, O.isNative = Fk, O.isNil = Wk, O.isNull = Yk, O.isNumber = dg, O.isObject = Kt, O.isObjectLike = Xt, O.isPlainObject = Wo, O.isRegExp = sd, O.isSafeInteger = Uk, O.isSet = hg, O.isString = Eu, O.isSymbol = Xn, O.isTypedArray = Ai, O.isUndefined = Bk, O.isWeakMap = Hk, O.isWeakSet = Vk, O.join = zx, O.kebabCase = NT, O.last = mr, O.lastIndexOf = qx, O.lowerCase = $T, O.lowerFirst = IT, O.lt = jk, O.lte = Gk, O.max = AA, O.maxBy = MA, O.mean = CA, O.meanBy = PA, O.min = NA, O.minBy = $A, O.stubArray = hd, O.stubFalse = pd, O.stubObject = yA, O.stubString = bA, O.stubTrue = wA, O.multiply = IA, O.nth = Kx, O.noConflict = fA, O.noop = dd, O.now = _u, O.pad = LT, O.padEnd = RT, O.padStart = FT, O.parseInt = YT, O.random = TT, O.reduce = JS, O.reduceRight = QS, O.repeat = WT, O.replace = UT, O.result = _T, O.round = LA, O.runInContext = U, O.sample = tk, O.size = ak, O.snakeCase = BT, O.some = sk, O.sortedIndex = nS, O.sortedIndexBy = rS, O.sortedIndexOf = aS, O.sortedLastIndex = sS, O.sortedLastIndexBy = iS, O.sortedLastIndexOf = oS, O.startCase = VT, O.startsWith = jT, O.subtract = RA, O.sum = FA, O.sumBy = YA, O.template = GT, O.times = EA, O.toFinite = Sa, O.toInteger = Qe, O.toLength = mg, O.toLower = zT, O.toNumber = vr, O.toSafeInteger = zk, O.toString = St, O.toUpper = qT, O.trim = KT, O.trimEnd = ZT, O.trimStart = XT, O.truncate = JT, O.unescape = QT, O.uniqueId = DA, O.upperCase = eA, O.upperFirst = ld, O.each = tg, O.eachRight = ng, O.first = Xv, fd(O, function() {
        var a = {};
        return Zr(O, function(o, c) {
          kt.call(O.prototype, c) || (a[c] = o);
        }), a;
      }(), { chain: !1 }), O.VERSION = r, cr(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(a) {
        O[a].placeholder = O;
      }), cr(["drop", "take"], function(a, o) {
        dt.prototype[a] = function(c) {
          c = c === n ? 1 : on(Qe(c), 0);
          var p = this.__filtered__ && !o ? new dt(this) : this.clone();
          return p.__filtered__ ? p.__takeCount__ = bn(c, p.__takeCount__) : p.__views__.push({
            size: bn(c, Me),
            type: a + (p.__dir__ < 0 ? "Right" : "")
          }), p;
        }, dt.prototype[a + "Right"] = function(c) {
          return this.reverse()[a](c).reverse();
        };
      }), cr(["filter", "map", "takeWhile"], function(a, o) {
        var c = o + 1, p = c == me || c == ye;
        dt.prototype[a] = function(_) {
          var S = this.clone();
          return S.__iteratees__.push({
            iteratee: Ye(_, 3),
            type: c
          }), S.__filtered__ = S.__filtered__ || p, S;
        };
      }), cr(["head", "last"], function(a, o) {
        var c = "take" + (o ? "Right" : "");
        dt.prototype[a] = function() {
          return this[c](1).value()[0];
        };
      }), cr(["initial", "tail"], function(a, o) {
        var c = "drop" + (o ? "" : "Right");
        dt.prototype[a] = function() {
          return this.__filtered__ ? new dt(this) : this[c](1);
        };
      }), dt.prototype.compact = function() {
        return this.filter(Yn);
      }, dt.prototype.find = function(a) {
        return this.filter(a).head();
      }, dt.prototype.findLast = function(a) {
        return this.reverse().find(a);
      }, dt.prototype.invokeMap = ot(function(a, o) {
        return typeof a == "function" ? new dt(this) : this.map(function(c) {
          return $o(c, a, o);
        });
      }), dt.prototype.reject = function(a) {
        return this.filter(bu(Ye(a)));
      }, dt.prototype.slice = function(a, o) {
        a = Qe(a);
        var c = this;
        return c.__filtered__ && (a > 0 || o < 0) ? new dt(c) : (a < 0 ? c = c.takeRight(-a) : a && (c = c.drop(a)), o !== n && (o = Qe(o), c = o < 0 ? c.dropRight(-o) : c.take(o - a)), c);
      }, dt.prototype.takeRightWhile = function(a) {
        return this.reverse().takeWhile(a).reverse();
      }, dt.prototype.toArray = function() {
        return this.take(Me);
      }, Zr(dt.prototype, function(a, o) {
        var c = /^(?:filter|find|map|reject)|While$/.test(o), p = /^(?:head|last)$/.test(o), _ = O[p ? "take" + (o == "last" ? "Right" : "") : o], S = p || /^find/.test(o);
        _ && (O.prototype[o] = function() {
          var P = this.__wrapped__, L = p ? [1] : arguments, H = P instanceof dt, Q = L[0], ee = H || Je(P), ae = function(ft) {
            var ht = _.apply(O, rs([ft], L));
            return p && _e ? ht[0] : ht;
          };
          ee && c && typeof Q == "function" && Q.length != 1 && (H = ee = !1);
          var _e = this.__chain__, Ce = !!this.__actions__.length, He = S && !_e, rt = H && !Ce;
          if (!S && ee) {
            P = rt ? P : new dt(this);
            var Ve = a.apply(P, L);
            return Ve.__actions__.push({ func: vu, args: [ae], thisArg: n }), new dr(Ve, _e);
          }
          return He && rt ? a.apply(this, L) : (Ve = this.thru(ae), He ? p ? Ve.value()[0] : Ve.value() : Ve);
        });
      }), cr(["pop", "push", "shift", "sort", "splice", "unshift"], function(a) {
        var o = Bl[a], c = /^(?:push|sort|unshift)$/.test(a) ? "tap" : "thru", p = /^(?:pop|shift)$/.test(a);
        O.prototype[a] = function() {
          var _ = arguments;
          if (p && !this.__chain__) {
            var S = this.value();
            return o.apply(Je(S) ? S : [], _);
          }
          return this[c](function(P) {
            return o.apply(Je(P) ? P : [], _);
          });
        };
      }), Zr(dt.prototype, function(a, o) {
        var c = O[o];
        if (c) {
          var p = c.name + "";
          kt.call(Di, p) || (Di[p] = []), Di[p].push({ name: o, func: c });
        }
      }), Di[uu(n, b).name] = [{
        name: "wrapper",
        func: n
      }], dt.prototype.clone = QO, dt.prototype.reverse = eD, dt.prototype.value = tD, O.prototype.at = MS, O.prototype.chain = CS, O.prototype.commit = PS, O.prototype.next = NS, O.prototype.plant = IS, O.prototype.reverse = LS, O.prototype.toJSON = O.prototype.valueOf = O.prototype.value = RS, O.prototype.first = O.prototype.head, ko && (O.prototype[ko] = $S), O;
    }, wi = PO();
    Is ? ((Is.exports = wi)._ = wi, cf._ = wi) : mn._ = wi;
  }).call(Ko);
})(gc, gc.exports);
var sw = gc.exports;
//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var iw;
function we() {
  return iw.apply(null, arguments);
}
function qG(e) {
  iw = e;
}
function Br(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function ei(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function wt(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function Mp(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (wt(e, t))
      return !1;
  return !0;
}
function Hn(e) {
  return e === void 0;
}
function Ga(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function Ml(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function ow(e, t) {
  var n = [], r, s = e.length;
  for (r = 0; r < s; ++r)
    n.push(t(e[r], r));
  return n;
}
function bs(e, t) {
  for (var n in t)
    wt(t, n) && (e[n] = t[n]);
  return wt(t, "toString") && (e.toString = t.toString), wt(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function ma(e, t, n, r) {
  return Cw(e, t, n, r, !0).utc();
}
function KG() {
  return {
    empty: !1,
    unusedTokens: [],
    unusedInput: [],
    overflow: -2,
    charsLeftOver: 0,
    nullInput: !1,
    invalidEra: null,
    invalidMonth: null,
    invalidFormat: !1,
    userInvalidated: !1,
    iso: !1,
    parsedDateParts: [],
    era: null,
    meridiem: null,
    rfc2822: !1,
    weekdayMismatch: !1
  };
}
function et(e) {
  return e._pf == null && (e._pf = KG()), e._pf;
}
var gh;
Array.prototype.some ? gh = Array.prototype.some : gh = function(e) {
  var t = Object(this), n = t.length >>> 0, r;
  for (r = 0; r < n; r++)
    if (r in t && e.call(this, t[r], r, t))
      return !0;
  return !1;
};
function Cp(e) {
  if (e._isValid == null) {
    var t = et(e), n = gh.call(t.parsedDateParts, function(s) {
      return s != null;
    }), r = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
    if (e._strict && (r = r && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0), Object.isFrozen == null || !Object.isFrozen(e))
      e._isValid = r;
    else
      return r;
  }
  return e._isValid;
}
function Uc(e) {
  var t = ma(NaN);
  return e != null ? bs(et(t), e) : et(t).userInvalidated = !0, t;
}
var L0 = we.momentProperties = [], Md = !1;
function Pp(e, t) {
  var n, r, s, i = L0.length;
  if (Hn(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), Hn(t._i) || (e._i = t._i), Hn(t._f) || (e._f = t._f), Hn(t._l) || (e._l = t._l), Hn(t._strict) || (e._strict = t._strict), Hn(t._tzm) || (e._tzm = t._tzm), Hn(t._isUTC) || (e._isUTC = t._isUTC), Hn(t._offset) || (e._offset = t._offset), Hn(t._pf) || (e._pf = et(t)), Hn(t._locale) || (e._locale = t._locale), i > 0)
    for (n = 0; n < i; n++)
      r = L0[n], s = t[r], Hn(s) || (e[r] = s);
  return e;
}
function Cl(e) {
  Pp(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), Md === !1 && (Md = !0, we.updateOffset(this), Md = !1);
}
function Hr(e) {
  return e instanceof Cl || e != null && e._isAMomentObject != null;
}
function lw(e) {
  we.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function Ar(e, t) {
  var n = !0;
  return bs(function() {
    if (we.deprecationHandler != null && we.deprecationHandler(null, e), n) {
      var r = [], s, i, l, u = arguments.length;
      for (i = 0; i < u; i++) {
        if (s = "", typeof arguments[i] == "object") {
          s += `
[` + i + "] ";
          for (l in arguments[0])
            wt(arguments[0], l) && (s += l + ": " + arguments[0][l] + ", ");
          s = s.slice(0, -2);
        } else
          s = arguments[i];
        r.push(s);
      }
      lw(
        e + `
Arguments: ` + Array.prototype.slice.call(r).join("") + `
` + new Error().stack
      ), n = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var R0 = {};
function uw(e, t) {
  we.deprecationHandler != null && we.deprecationHandler(e, t), R0[e] || (lw(t), R0[e] = !0);
}
we.suppressDeprecationWarnings = !1;
we.deprecationHandler = null;
function va(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function ZG(e) {
  var t, n;
  for (n in e)
    wt(e, n) && (t = e[n], va(t) ? this[n] = t : this["_" + n] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function _h(e, t) {
  var n = bs({}, e), r;
  for (r in t)
    wt(t, r) && (ei(e[r]) && ei(t[r]) ? (n[r] = {}, bs(n[r], e[r]), bs(n[r], t[r])) : t[r] != null ? n[r] = t[r] : delete n[r]);
  for (r in e)
    wt(e, r) && !wt(t, r) && ei(e[r]) && (n[r] = bs({}, n[r]));
  return n;
}
function Np(e) {
  e != null && this.set(e);
}
var yh;
Object.keys ? yh = Object.keys : yh = function(e) {
  var t, n = [];
  for (t in e)
    wt(e, t) && n.push(t);
  return n;
};
var XG = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function JG(e, t, n) {
  var r = this._calendar[e] || this._calendar.sameElse;
  return va(r) ? r.call(t, n) : r;
}
function ua(e, t, n) {
  var r = "" + Math.abs(e), s = t - r.length, i = e >= 0;
  return (i ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, s)).toString().substr(1) + r;
}
var $p = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Iu = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Cd = {}, Gi = {};
function Ie(e, t, n, r) {
  var s = r;
  typeof r == "string" && (s = function() {
    return this[r]();
  }), e && (Gi[e] = s), t && (Gi[t[0]] = function() {
    return ua(s.apply(this, arguments), t[1], t[2]);
  }), n && (Gi[n] = function() {
    return this.localeData().ordinal(
      s.apply(this, arguments),
      e
    );
  });
}
function QG(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function ez(e) {
  var t = e.match($p), n, r;
  for (n = 0, r = t.length; n < r; n++)
    Gi[t[n]] ? t[n] = Gi[t[n]] : t[n] = QG(t[n]);
  return function(s) {
    var i = "", l;
    for (l = 0; l < r; l++)
      i += va(t[l]) ? t[l].call(s, e) : t[l];
    return i;
  };
}
function Bu(e, t) {
  return e.isValid() ? (t = cw(t, e.localeData()), Cd[t] = Cd[t] || ez(t), Cd[t](e)) : e.localeData().invalidDate();
}
function cw(e, t) {
  var n = 5;
  function r(s) {
    return t.longDateFormat(s) || s;
  }
  for (Iu.lastIndex = 0; n >= 0 && Iu.test(e); )
    e = e.replace(
      Iu,
      r
    ), Iu.lastIndex = 0, n -= 1;
  return e;
}
var tz = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function nz(e) {
  var t = this._longDateFormat[e], n = this._longDateFormat[e.toUpperCase()];
  return t || !n ? t : (this._longDateFormat[e] = n.match($p).map(function(r) {
    return r === "MMMM" || r === "MM" || r === "DD" || r === "dddd" ? r.slice(1) : r;
  }).join(""), this._longDateFormat[e]);
}
var rz = "Invalid date";
function az() {
  return this._invalidDate;
}
var sz = "%d", iz = /\d{1,2}/;
function oz(e) {
  return this._ordinal.replace("%d", e);
}
var lz = {
  future: "in %s",
  past: "%s ago",
  s: "a few seconds",
  ss: "%d seconds",
  m: "a minute",
  mm: "%d minutes",
  h: "an hour",
  hh: "%d hours",
  d: "a day",
  dd: "%d days",
  w: "a week",
  ww: "%d weeks",
  M: "a month",
  MM: "%d months",
  y: "a year",
  yy: "%d years"
};
function uz(e, t, n, r) {
  var s = this._relativeTime[n];
  return va(s) ? s(e, t, n, r) : s.replace(/%d/i, e);
}
function cz(e, t) {
  var n = this._relativeTime[e > 0 ? "future" : "past"];
  return va(n) ? n(t) : n.replace(/%s/i, t);
}
var sl = {};
function xn(e, t) {
  var n = e.toLowerCase();
  sl[n] = sl[n + "s"] = sl[t] = e;
}
function Mr(e) {
  return typeof e == "string" ? sl[e] || sl[e.toLowerCase()] : void 0;
}
function Ip(e) {
  var t = {}, n, r;
  for (r in e)
    wt(e, r) && (n = Mr(r), n && (t[n] = e[r]));
  return t;
}
var fw = {};
function Sn(e, t) {
  fw[e] = t;
}
function fz(e) {
  var t = [], n;
  for (n in e)
    wt(e, n) && t.push({ unit: n, priority: fw[n] });
  return t.sort(function(r, s) {
    return r.priority - s.priority;
  }), t;
}
function Bc(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
function yr(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function ct(e) {
  var t = +e, n = 0;
  return t !== 0 && isFinite(t) && (n = yr(t)), n;
}
function Eo(e, t) {
  return function(n) {
    return n != null ? (dw(this, e, n), we.updateOffset(this, t), this) : _c(this, e);
  };
}
function _c(e, t) {
  return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
}
function dw(e, t, n) {
  e.isValid() && !isNaN(n) && (t === "FullYear" && Bc(e.year()) && e.month() === 1 && e.date() === 29 ? (n = ct(n), e._d["set" + (e._isUTC ? "UTC" : "") + t](
    n,
    e.month(),
    qc(n, e.month())
  )) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n));
}
function dz(e) {
  return e = Mr(e), va(this[e]) ? this[e]() : this;
}
function hz(e, t) {
  if (typeof e == "object") {
    e = Ip(e);
    var n = fz(e), r, s = n.length;
    for (r = 0; r < s; r++)
      this[n[r].unit](e[n[r].unit]);
  } else if (e = Mr(e), va(this[e]))
    return this[e](t);
  return this;
}
var hw = /\d/, or = /\d\d/, pw = /\d{3}/, Lp = /\d{4}/, Hc = /[+-]?\d{6}/, Bt = /\d\d?/, mw = /\d\d\d\d?/, vw = /\d\d\d\d\d\d?/, Vc = /\d{1,3}/, Rp = /\d{1,4}/, jc = /[+-]?\d{1,6}/, Oo = /\d+/, Gc = /[+-]?\d+/, pz = /Z|[+-]\d\d:?\d\d/gi, zc = /Z|[+-]\d\d(?::?\d\d)?/gi, mz = /[+-]?\d+(\.\d{1,3})?/, Pl = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, yc;
yc = {};
function xe(e, t, n) {
  yc[e] = va(t) ? t : function(r, s) {
    return r && n ? n : t;
  };
}
function vz(e, t) {
  return wt(yc, e) ? yc[e](t._strict, t._locale) : new RegExp(gz(e));
}
function gz(e) {
  return tr(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, n, r, s, i) {
        return n || r || s || i;
      }
    )
  );
}
function tr(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
var bh = {};
function Pt(e, t) {
  var n, r = t, s;
  for (typeof e == "string" && (e = [e]), Ga(t) && (r = function(i, l) {
    l[t] = ct(i);
  }), s = e.length, n = 0; n < s; n++)
    bh[e[n]] = r;
}
function Nl(e, t) {
  Pt(e, function(n, r, s, i) {
    s._w = s._w || {}, t(n, s._w, s, i);
  });
}
function _z(e, t, n) {
  t != null && wt(bh, e) && bh[e](t, n._a, n, e);
}
var On = 0, Ia = 1, ea = 2, fn = 3, Wr = 4, La = 5, Xs = 6, yz = 7, bz = 8;
function wz(e, t) {
  return (e % t + t) % t;
}
var tn;
Array.prototype.indexOf ? tn = Array.prototype.indexOf : tn = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function qc(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var n = wz(t, 12);
  return e += (t - n) / 12, n === 1 ? Bc(e) ? 29 : 28 : 31 - n % 7 % 2;
}
Ie("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
Ie("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
Ie("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
xn("month", "M");
Sn("month", 8);
xe("M", Bt);
xe("MM", Bt, or);
xe("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
xe("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
Pt(["M", "MM"], function(e, t) {
  t[Ia] = ct(e) - 1;
});
Pt(["MMM", "MMMM"], function(e, t, n, r) {
  var s = n._locale.monthsParse(e, r, n._strict);
  s != null ? t[Ia] = s : et(n).invalidMonth = e;
});
var Ez = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), gw = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), _w = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, Oz = Pl, Dz = Pl;
function xz(e, t) {
  return e ? Br(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || _w).test(t) ? "format" : "standalone"][e.month()] : Br(this._months) ? this._months : this._months.standalone;
}
function Sz(e, t) {
  return e ? Br(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[_w.test(t) ? "format" : "standalone"][e.month()] : Br(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function kz(e, t, n) {
  var r, s, i, l = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r)
      i = ma([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(
        i,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[r] = this.months(i, "").toLocaleLowerCase();
  return n ? t === "MMM" ? (s = tn.call(this._shortMonthsParse, l), s !== -1 ? s : null) : (s = tn.call(this._longMonthsParse, l), s !== -1 ? s : null) : t === "MMM" ? (s = tn.call(this._shortMonthsParse, l), s !== -1 ? s : (s = tn.call(this._longMonthsParse, l), s !== -1 ? s : null)) : (s = tn.call(this._longMonthsParse, l), s !== -1 ? s : (s = tn.call(this._shortMonthsParse, l), s !== -1 ? s : null));
}
function Tz(e, t, n) {
  var r, s, i;
  if (this._monthsParseExact)
    return kz.call(this, e, t, n);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++) {
    if (s = ma([2e3, r]), n && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp(
      "^" + this.months(s, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[r] = new RegExp(
      "^" + this.monthsShort(s, "").replace(".", "") + "$",
      "i"
    )), !n && !this._monthsParse[r] && (i = "^" + this.months(s, "") + "|^" + this.monthsShort(s, ""), this._monthsParse[r] = new RegExp(i.replace(".", ""), "i")), n && t === "MMMM" && this._longMonthsParse[r].test(e))
      return r;
    if (n && t === "MMM" && this._shortMonthsParse[r].test(e))
      return r;
    if (!n && this._monthsParse[r].test(e))
      return r;
  }
}
function yw(e, t) {
  var n;
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = ct(t);
    else if (t = e.localeData().monthsParse(t), !Ga(t))
      return e;
  }
  return n = Math.min(e.date(), qc(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e;
}
function bw(e) {
  return e != null ? (yw(this, e), we.updateOffset(this, !0), this) : _c(this, "Month");
}
function Az() {
  return qc(this.year(), this.month());
}
function Mz(e) {
  return this._monthsParseExact ? (wt(this, "_monthsRegex") || ww.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (wt(this, "_monthsShortRegex") || (this._monthsShortRegex = Oz), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function Cz(e) {
  return this._monthsParseExact ? (wt(this, "_monthsRegex") || ww.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (wt(this, "_monthsRegex") || (this._monthsRegex = Dz), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function ww() {
  function e(l, u) {
    return u.length - l.length;
  }
  var t = [], n = [], r = [], s, i;
  for (s = 0; s < 12; s++)
    i = ma([2e3, s]), t.push(this.monthsShort(i, "")), n.push(this.months(i, "")), r.push(this.months(i, "")), r.push(this.monthsShort(i, ""));
  for (t.sort(e), n.sort(e), r.sort(e), s = 0; s < 12; s++)
    t[s] = tr(t[s]), n[s] = tr(n[s]);
  for (s = 0; s < 24; s++)
    r[s] = tr(r[s]);
  this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
Ie("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? ua(e, 4) : "+" + e;
});
Ie(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
Ie(0, ["YYYY", 4], 0, "year");
Ie(0, ["YYYYY", 5], 0, "year");
Ie(0, ["YYYYYY", 6, !0], 0, "year");
xn("year", "y");
Sn("year", 1);
xe("Y", Gc);
xe("YY", Bt, or);
xe("YYYY", Rp, Lp);
xe("YYYYY", jc, Hc);
xe("YYYYYY", jc, Hc);
Pt(["YYYYY", "YYYYYY"], On);
Pt("YYYY", function(e, t) {
  t[On] = e.length === 2 ? we.parseTwoDigitYear(e) : ct(e);
});
Pt("YY", function(e, t) {
  t[On] = we.parseTwoDigitYear(e);
});
Pt("Y", function(e, t) {
  t[On] = parseInt(e, 10);
});
function il(e) {
  return Bc(e) ? 366 : 365;
}
we.parseTwoDigitYear = function(e) {
  return ct(e) + (ct(e) > 68 ? 1900 : 2e3);
};
var Ew = Eo("FullYear", !0);
function Pz() {
  return Bc(this.year());
}
function Nz(e, t, n, r, s, i, l) {
  var u;
  return e < 100 && e >= 0 ? (u = new Date(e + 400, t, n, r, s, i, l), isFinite(u.getFullYear()) && u.setFullYear(e)) : u = new Date(e, t, n, r, s, i, l), u;
}
function _l(e) {
  var t, n;
  return e < 100 && e >= 0 ? (n = Array.prototype.slice.call(arguments), n[0] = e + 400, t = new Date(Date.UTC.apply(null, n)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function bc(e, t, n) {
  var r = 7 + t - n, s = (7 + _l(e, 0, r).getUTCDay() - t) % 7;
  return -s + r - 1;
}
function Ow(e, t, n, r, s) {
  var i = (7 + n - r) % 7, l = bc(e, r, s), u = 1 + 7 * (t - 1) + i + l, f, h;
  return u <= 0 ? (f = e - 1, h = il(f) + u) : u > il(e) ? (f = e + 1, h = u - il(e)) : (f = e, h = u), {
    year: f,
    dayOfYear: h
  };
}
function yl(e, t, n) {
  var r = bc(e.year(), t, n), s = Math.floor((e.dayOfYear() - r - 1) / 7) + 1, i, l;
  return s < 1 ? (l = e.year() - 1, i = s + Ra(l, t, n)) : s > Ra(e.year(), t, n) ? (i = s - Ra(e.year(), t, n), l = e.year() + 1) : (l = e.year(), i = s), {
    week: i,
    year: l
  };
}
function Ra(e, t, n) {
  var r = bc(e, t, n), s = bc(e + 1, t, n);
  return (il(e) - r + s) / 7;
}
Ie("w", ["ww", 2], "wo", "week");
Ie("W", ["WW", 2], "Wo", "isoWeek");
xn("week", "w");
xn("isoWeek", "W");
Sn("week", 5);
Sn("isoWeek", 5);
xe("w", Bt);
xe("ww", Bt, or);
xe("W", Bt);
xe("WW", Bt, or);
Nl(
  ["w", "ww", "W", "WW"],
  function(e, t, n, r) {
    t[r.substr(0, 1)] = ct(e);
  }
);
function $z(e) {
  return yl(e, this._week.dow, this._week.doy).week;
}
var Iz = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function Lz() {
  return this._week.dow;
}
function Rz() {
  return this._week.doy;
}
function Fz(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function Yz(e) {
  var t = yl(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
Ie("d", 0, "do", "day");
Ie("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
Ie("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
Ie("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
Ie("e", 0, 0, "weekday");
Ie("E", 0, 0, "isoWeekday");
xn("day", "d");
xn("weekday", "e");
xn("isoWeekday", "E");
Sn("day", 11);
Sn("weekday", 11);
Sn("isoWeekday", 11);
xe("d", Bt);
xe("e", Bt);
xe("E", Bt);
xe("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
xe("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
xe("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
Nl(["dd", "ddd", "dddd"], function(e, t, n, r) {
  var s = n._locale.weekdaysParse(e, r, n._strict);
  s != null ? t.d = s : et(n).invalidWeekday = e;
});
Nl(["d", "e", "E"], function(e, t, n, r) {
  t[r] = ct(e);
});
function Wz(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function Uz(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function Fp(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var Bz = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), Dw = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Hz = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), Vz = Pl, jz = Pl, Gz = Pl;
function zz(e, t) {
  var n = Br(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? Fp(n, this._week.dow) : e ? n[e.day()] : n;
}
function qz(e) {
  return e === !0 ? Fp(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function Kz(e) {
  return e === !0 ? Fp(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function Zz(e, t, n) {
  var r, s, i, l = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0; r < 7; ++r)
      i = ma([2e3, 1]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(
        i,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[r] = this.weekdaysShort(
        i,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(i, "").toLocaleLowerCase();
  return n ? t === "dddd" ? (s = tn.call(this._weekdaysParse, l), s !== -1 ? s : null) : t === "ddd" ? (s = tn.call(this._shortWeekdaysParse, l), s !== -1 ? s : null) : (s = tn.call(this._minWeekdaysParse, l), s !== -1 ? s : null) : t === "dddd" ? (s = tn.call(this._weekdaysParse, l), s !== -1 || (s = tn.call(this._shortWeekdaysParse, l), s !== -1) ? s : (s = tn.call(this._minWeekdaysParse, l), s !== -1 ? s : null)) : t === "ddd" ? (s = tn.call(this._shortWeekdaysParse, l), s !== -1 || (s = tn.call(this._weekdaysParse, l), s !== -1) ? s : (s = tn.call(this._minWeekdaysParse, l), s !== -1 ? s : null)) : (s = tn.call(this._minWeekdaysParse, l), s !== -1 || (s = tn.call(this._weekdaysParse, l), s !== -1) ? s : (s = tn.call(this._shortWeekdaysParse, l), s !== -1 ? s : null));
}
function Xz(e, t, n) {
  var r, s, i;
  if (this._weekdaysParseExact)
    return Zz.call(this, e, t, n);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) {
    if (s = ma([2e3, 1]).day(r), n && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp(
      "^" + this.weekdays(s, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[r] = new RegExp(
      "^" + this.weekdaysShort(s, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[r] = new RegExp(
      "^" + this.weekdaysMin(s, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[r] || (i = "^" + this.weekdays(s, "") + "|^" + this.weekdaysShort(s, "") + "|^" + this.weekdaysMin(s, ""), this._weekdaysParse[r] = new RegExp(i.replace(".", ""), "i")), n && t === "dddd" && this._fullWeekdaysParse[r].test(e))
      return r;
    if (n && t === "ddd" && this._shortWeekdaysParse[r].test(e))
      return r;
    if (n && t === "dd" && this._minWeekdaysParse[r].test(e))
      return r;
    if (!n && this._weekdaysParse[r].test(e))
      return r;
  }
}
function Jz(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
  return e != null ? (e = Wz(e, this.localeData()), this.add(e - t, "d")) : t;
}
function Qz(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function e7(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = Uz(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function t7(e) {
  return this._weekdaysParseExact ? (wt(this, "_weekdaysRegex") || Yp.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (wt(this, "_weekdaysRegex") || (this._weekdaysRegex = Vz), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function n7(e) {
  return this._weekdaysParseExact ? (wt(this, "_weekdaysRegex") || Yp.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (wt(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = jz), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function r7(e) {
  return this._weekdaysParseExact ? (wt(this, "_weekdaysRegex") || Yp.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (wt(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Gz), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function Yp() {
  function e(d, m) {
    return m.length - d.length;
  }
  var t = [], n = [], r = [], s = [], i, l, u, f, h;
  for (i = 0; i < 7; i++)
    l = ma([2e3, 1]).day(i), u = tr(this.weekdaysMin(l, "")), f = tr(this.weekdaysShort(l, "")), h = tr(this.weekdays(l, "")), t.push(u), n.push(f), r.push(h), s.push(u), s.push(f), s.push(h);
  t.sort(e), n.sort(e), r.sort(e), s.sort(e), this._weekdaysRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  ), this._weekdaysShortStrictRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  ), this._weekdaysMinStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function Wp() {
  return this.hours() % 12 || 12;
}
function a7() {
  return this.hours() || 24;
}
Ie("H", ["HH", 2], 0, "hour");
Ie("h", ["hh", 2], 0, Wp);
Ie("k", ["kk", 2], 0, a7);
Ie("hmm", 0, 0, function() {
  return "" + Wp.apply(this) + ua(this.minutes(), 2);
});
Ie("hmmss", 0, 0, function() {
  return "" + Wp.apply(this) + ua(this.minutes(), 2) + ua(this.seconds(), 2);
});
Ie("Hmm", 0, 0, function() {
  return "" + this.hours() + ua(this.minutes(), 2);
});
Ie("Hmmss", 0, 0, function() {
  return "" + this.hours() + ua(this.minutes(), 2) + ua(this.seconds(), 2);
});
function xw(e, t) {
  Ie(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
xw("a", !0);
xw("A", !1);
xn("hour", "h");
Sn("hour", 13);
function Sw(e, t) {
  return t._meridiemParse;
}
xe("a", Sw);
xe("A", Sw);
xe("H", Bt);
xe("h", Bt);
xe("k", Bt);
xe("HH", Bt, or);
xe("hh", Bt, or);
xe("kk", Bt, or);
xe("hmm", mw);
xe("hmmss", vw);
xe("Hmm", mw);
xe("Hmmss", vw);
Pt(["H", "HH"], fn);
Pt(["k", "kk"], function(e, t, n) {
  var r = ct(e);
  t[fn] = r === 24 ? 0 : r;
});
Pt(["a", "A"], function(e, t, n) {
  n._isPm = n._locale.isPM(e), n._meridiem = e;
});
Pt(["h", "hh"], function(e, t, n) {
  t[fn] = ct(e), et(n).bigHour = !0;
});
Pt("hmm", function(e, t, n) {
  var r = e.length - 2;
  t[fn] = ct(e.substr(0, r)), t[Wr] = ct(e.substr(r)), et(n).bigHour = !0;
});
Pt("hmmss", function(e, t, n) {
  var r = e.length - 4, s = e.length - 2;
  t[fn] = ct(e.substr(0, r)), t[Wr] = ct(e.substr(r, 2)), t[La] = ct(e.substr(s)), et(n).bigHour = !0;
});
Pt("Hmm", function(e, t, n) {
  var r = e.length - 2;
  t[fn] = ct(e.substr(0, r)), t[Wr] = ct(e.substr(r));
});
Pt("Hmmss", function(e, t, n) {
  var r = e.length - 4, s = e.length - 2;
  t[fn] = ct(e.substr(0, r)), t[Wr] = ct(e.substr(r, 2)), t[La] = ct(e.substr(s));
});
function s7(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var i7 = /[ap]\.?m?\.?/i, o7 = Eo("Hours", !0);
function l7(e, t, n) {
  return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM";
}
var kw = {
  calendar: XG,
  longDateFormat: tz,
  invalidDate: rz,
  ordinal: sz,
  dayOfMonthOrdinalParse: iz,
  relativeTime: lz,
  months: Ez,
  monthsShort: gw,
  week: Iz,
  weekdays: Bz,
  weekdaysMin: Hz,
  weekdaysShort: Dw,
  meridiemParse: i7
}, zt = {}, Zo = {}, bl;
function u7(e, t) {
  var n, r = Math.min(e.length, t.length);
  for (n = 0; n < r; n += 1)
    if (e[n] !== t[n])
      return n;
  return r;
}
function F0(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function c7(e) {
  for (var t = 0, n, r, s, i; t < e.length; ) {
    for (i = F0(e[t]).split("-"), n = i.length, r = F0(e[t + 1]), r = r ? r.split("-") : null; n > 0; ) {
      if (s = Kc(i.slice(0, n).join("-")), s)
        return s;
      if (r && r.length >= n && u7(i, r) >= n - 1)
        break;
      n--;
    }
    t++;
  }
  return bl;
}
function f7(e) {
  return e.match("^[^/\\\\]*$") != null;
}
function Kc(e) {
  var t = null, n;
  if (zt[e] === void 0 && typeof module < "u" && module && module.exports && f7(e))
    try {
      t = bl._abbr, n = require, n("./locale/" + e), Ds(t);
    } catch {
      zt[e] = null;
    }
  return zt[e];
}
function Ds(e, t) {
  var n;
  return e && (Hn(t) ? n = Xa(e) : n = Up(e, t), n ? bl = n : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), bl._abbr;
}
function Up(e, t) {
  if (t !== null) {
    var n, r = kw;
    if (t.abbr = e, zt[e] != null)
      uw(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), r = zt[e]._config;
    else if (t.parentLocale != null)
      if (zt[t.parentLocale] != null)
        r = zt[t.parentLocale]._config;
      else if (n = Kc(t.parentLocale), n != null)
        r = n._config;
      else
        return Zo[t.parentLocale] || (Zo[t.parentLocale] = []), Zo[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return zt[e] = new Np(_h(r, t)), Zo[e] && Zo[e].forEach(function(s) {
      Up(s.name, s.config);
    }), Ds(e), zt[e];
  } else
    return delete zt[e], null;
}
function d7(e, t) {
  if (t != null) {
    var n, r, s = kw;
    zt[e] != null && zt[e].parentLocale != null ? zt[e].set(_h(zt[e]._config, t)) : (r = Kc(e), r != null && (s = r._config), t = _h(s, t), r == null && (t.abbr = e), n = new Np(t), n.parentLocale = zt[e], zt[e] = n), Ds(e);
  } else
    zt[e] != null && (zt[e].parentLocale != null ? (zt[e] = zt[e].parentLocale, e === Ds() && Ds(e)) : zt[e] != null && delete zt[e]);
  return zt[e];
}
function Xa(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return bl;
  if (!Br(e)) {
    if (t = Kc(e), t)
      return t;
    e = [e];
  }
  return c7(e);
}
function h7() {
  return yh(zt);
}
function Bp(e) {
  var t, n = e._a;
  return n && et(e).overflow === -2 && (t = n[Ia] < 0 || n[Ia] > 11 ? Ia : n[ea] < 1 || n[ea] > qc(n[On], n[Ia]) ? ea : n[fn] < 0 || n[fn] > 24 || n[fn] === 24 && (n[Wr] !== 0 || n[La] !== 0 || n[Xs] !== 0) ? fn : n[Wr] < 0 || n[Wr] > 59 ? Wr : n[La] < 0 || n[La] > 59 ? La : n[Xs] < 0 || n[Xs] > 999 ? Xs : -1, et(e)._overflowDayOfYear && (t < On || t > ea) && (t = ea), et(e)._overflowWeeks && t === -1 && (t = yz), et(e)._overflowWeekday && t === -1 && (t = bz), et(e).overflow = t), e;
}
var p7 = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, m7 = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, v7 = /Z|[+-]\d\d(?::?\d\d)?/, Lu = [
  ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
  ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
  ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
  ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
  ["YYYY-DDD", /\d{4}-\d{3}/],
  ["YYYY-MM", /\d{4}-\d\d/, !1],
  ["YYYYYYMMDD", /[+-]\d{10}/],
  ["YYYYMMDD", /\d{8}/],
  ["GGGG[W]WWE", /\d{4}W\d{3}/],
  ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
  ["YYYYDDD", /\d{7}/],
  ["YYYYMM", /\d{6}/, !1],
  ["YYYY", /\d{4}/, !1]
], Pd = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], g7 = /^\/?Date\((-?\d+)/i, _7 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, y7 = {
  UT: 0,
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function Tw(e) {
  var t, n, r = e._i, s = p7.exec(r) || m7.exec(r), i, l, u, f, h = Lu.length, d = Pd.length;
  if (s) {
    for (et(e).iso = !0, t = 0, n = h; t < n; t++)
      if (Lu[t][1].exec(s[1])) {
        l = Lu[t][0], i = Lu[t][2] !== !1;
        break;
      }
    if (l == null) {
      e._isValid = !1;
      return;
    }
    if (s[3]) {
      for (t = 0, n = d; t < n; t++)
        if (Pd[t][1].exec(s[3])) {
          u = (s[2] || " ") + Pd[t][0];
          break;
        }
      if (u == null) {
        e._isValid = !1;
        return;
      }
    }
    if (!i && u != null) {
      e._isValid = !1;
      return;
    }
    if (s[4])
      if (v7.exec(s[4]))
        f = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = l + (u || "") + (f || ""), Vp(e);
  } else
    e._isValid = !1;
}
function b7(e, t, n, r, s, i) {
  var l = [
    w7(e),
    gw.indexOf(t),
    parseInt(n, 10),
    parseInt(r, 10),
    parseInt(s, 10)
  ];
  return i && l.push(parseInt(i, 10)), l;
}
function w7(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function E7(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function O7(e, t, n) {
  if (e) {
    var r = Dw.indexOf(e), s = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (r !== s)
      return et(n).weekdayMismatch = !0, n._isValid = !1, !1;
  }
  return !0;
}
function D7(e, t, n) {
  if (e)
    return y7[e];
  if (t)
    return 0;
  var r = parseInt(n, 10), s = r % 100, i = (r - s) / 100;
  return i * 60 + s;
}
function Aw(e) {
  var t = _7.exec(E7(e._i)), n;
  if (t) {
    if (n = b7(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !O7(t[1], n, e))
      return;
    e._a = n, e._tzm = D7(t[8], t[9], t[10]), e._d = _l.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), et(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function x7(e) {
  var t = g7.exec(e._i);
  if (t !== null) {
    e._d = /* @__PURE__ */ new Date(+t[1]);
    return;
  }
  if (Tw(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (Aw(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : we.createFromInputFallback(e);
}
we.createFromInputFallback = Ar(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function Ri(e, t, n) {
  return e ?? t ?? n;
}
function S7(e) {
  var t = new Date(we.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function Hp(e) {
  var t, n, r = [], s, i, l;
  if (!e._d) {
    for (s = S7(e), e._w && e._a[ea] == null && e._a[Ia] == null && k7(e), e._dayOfYear != null && (l = Ri(e._a[On], s[On]), (e._dayOfYear > il(l) || e._dayOfYear === 0) && (et(e)._overflowDayOfYear = !0), n = _l(l, 0, e._dayOfYear), e._a[Ia] = n.getUTCMonth(), e._a[ea] = n.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = r[t] = s[t];
    for (; t < 7; t++)
      e._a[t] = r[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[fn] === 24 && e._a[Wr] === 0 && e._a[La] === 0 && e._a[Xs] === 0 && (e._nextDay = !0, e._a[fn] = 0), e._d = (e._useUTC ? _l : Nz).apply(
      null,
      r
    ), i = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[fn] = 24), e._w && typeof e._w.d < "u" && e._w.d !== i && (et(e).weekdayMismatch = !0);
  }
}
function k7(e) {
  var t, n, r, s, i, l, u, f, h;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (i = 1, l = 4, n = Ri(
    t.GG,
    e._a[On],
    yl(Ut(), 1, 4).year
  ), r = Ri(t.W, 1), s = Ri(t.E, 1), (s < 1 || s > 7) && (f = !0)) : (i = e._locale._week.dow, l = e._locale._week.doy, h = yl(Ut(), i, l), n = Ri(t.gg, e._a[On], h.year), r = Ri(t.w, h.week), t.d != null ? (s = t.d, (s < 0 || s > 6) && (f = !0)) : t.e != null ? (s = t.e + i, (t.e < 0 || t.e > 6) && (f = !0)) : s = i), r < 1 || r > Ra(n, i, l) ? et(e)._overflowWeeks = !0 : f != null ? et(e)._overflowWeekday = !0 : (u = Ow(n, r, s, i, l), e._a[On] = u.year, e._dayOfYear = u.dayOfYear);
}
we.ISO_8601 = function() {
};
we.RFC_2822 = function() {
};
function Vp(e) {
  if (e._f === we.ISO_8601) {
    Tw(e);
    return;
  }
  if (e._f === we.RFC_2822) {
    Aw(e);
    return;
  }
  e._a = [], et(e).empty = !0;
  var t = "" + e._i, n, r, s, i, l, u = t.length, f = 0, h, d;
  for (s = cw(e._f, e._locale).match($p) || [], d = s.length, n = 0; n < d; n++)
    i = s[n], r = (t.match(vz(i, e)) || [])[0], r && (l = t.substr(0, t.indexOf(r)), l.length > 0 && et(e).unusedInput.push(l), t = t.slice(
      t.indexOf(r) + r.length
    ), f += r.length), Gi[i] ? (r ? et(e).empty = !1 : et(e).unusedTokens.push(i), _z(i, r, e)) : e._strict && !r && et(e).unusedTokens.push(i);
  et(e).charsLeftOver = u - f, t.length > 0 && et(e).unusedInput.push(t), e._a[fn] <= 12 && et(e).bigHour === !0 && e._a[fn] > 0 && (et(e).bigHour = void 0), et(e).parsedDateParts = e._a.slice(0), et(e).meridiem = e._meridiem, e._a[fn] = T7(
    e._locale,
    e._a[fn],
    e._meridiem
  ), h = et(e).era, h !== null && (e._a[On] = e._locale.erasConvertYear(h, e._a[On])), Hp(e), Bp(e);
}
function T7(e, t, n) {
  var r;
  return n == null ? t : e.meridiemHour != null ? e.meridiemHour(t, n) : (e.isPM != null && (r = e.isPM(n), r && t < 12 && (t += 12), !r && t === 12 && (t = 0)), t);
}
function A7(e) {
  var t, n, r, s, i, l, u = !1, f = e._f.length;
  if (f === 0) {
    et(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (s = 0; s < f; s++)
    i = 0, l = !1, t = Pp({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[s], Vp(t), Cp(t) && (l = !0), i += et(t).charsLeftOver, i += et(t).unusedTokens.length * 10, et(t).score = i, u ? i < r && (r = i, n = t) : (r == null || i < r || l) && (r = i, n = t, l && (u = !0));
  bs(e, n || t);
}
function M7(e) {
  if (!e._d) {
    var t = Ip(e._i), n = t.day === void 0 ? t.date : t.day;
    e._a = ow(
      [t.year, t.month, n, t.hour, t.minute, t.second, t.millisecond],
      function(r) {
        return r && parseInt(r, 10);
      }
    ), Hp(e);
  }
}
function C7(e) {
  var t = new Cl(Bp(Mw(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function Mw(e) {
  var t = e._i, n = e._f;
  return e._locale = e._locale || Xa(e._l), t === null || n === void 0 && t === "" ? Uc({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), Hr(t) ? new Cl(Bp(t)) : (Ml(t) ? e._d = t : Br(n) ? A7(e) : n ? Vp(e) : P7(e), Cp(e) || (e._d = null), e));
}
function P7(e) {
  var t = e._i;
  Hn(t) ? e._d = new Date(we.now()) : Ml(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? x7(e) : Br(t) ? (e._a = ow(t.slice(0), function(n) {
    return parseInt(n, 10);
  }), Hp(e)) : ei(t) ? M7(e) : Ga(t) ? e._d = new Date(t) : we.createFromInputFallback(e);
}
function Cw(e, t, n, r, s) {
  var i = {};
  return (t === !0 || t === !1) && (r = t, t = void 0), (n === !0 || n === !1) && (r = n, n = void 0), (ei(e) && Mp(e) || Br(e) && e.length === 0) && (e = void 0), i._isAMomentObject = !0, i._useUTC = i._isUTC = s, i._l = n, i._i = e, i._f = t, i._strict = r, C7(i);
}
function Ut(e, t, n, r) {
  return Cw(e, t, n, r, !1);
}
var N7 = Ar(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = Ut.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : Uc();
  }
), $7 = Ar(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = Ut.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : Uc();
  }
);
function Pw(e, t) {
  var n, r;
  if (t.length === 1 && Br(t[0]) && (t = t[0]), !t.length)
    return Ut();
  for (n = t[0], r = 1; r < t.length; ++r)
    (!t[r].isValid() || t[r][e](n)) && (n = t[r]);
  return n;
}
function I7() {
  var e = [].slice.call(arguments, 0);
  return Pw("isBefore", e);
}
function L7() {
  var e = [].slice.call(arguments, 0);
  return Pw("isAfter", e);
}
var R7 = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, Xo = [
  "year",
  "quarter",
  "month",
  "week",
  "day",
  "hour",
  "minute",
  "second",
  "millisecond"
];
function F7(e) {
  var t, n = !1, r, s = Xo.length;
  for (t in e)
    if (wt(e, t) && !(tn.call(Xo, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (r = 0; r < s; ++r)
    if (e[Xo[r]]) {
      if (n)
        return !1;
      parseFloat(e[Xo[r]]) !== ct(e[Xo[r]]) && (n = !0);
    }
  return !0;
}
function Y7() {
  return this._isValid;
}
function W7() {
  return qr(NaN);
}
function Zc(e) {
  var t = Ip(e), n = t.year || 0, r = t.quarter || 0, s = t.month || 0, i = t.week || t.isoWeek || 0, l = t.day || 0, u = t.hour || 0, f = t.minute || 0, h = t.second || 0, d = t.millisecond || 0;
  this._isValid = F7(t), this._milliseconds = +d + h * 1e3 + // 1000
  f * 6e4 + // 1000 * 60
  u * 1e3 * 60 * 60, this._days = +l + i * 7, this._months = +s + r * 3 + n * 12, this._data = {}, this._locale = Xa(), this._bubble();
}
function Hu(e) {
  return e instanceof Zc;
}
function wh(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function U7(e, t, n) {
  var r = Math.min(e.length, t.length), s = Math.abs(e.length - t.length), i = 0, l;
  for (l = 0; l < r; l++)
    (n && e[l] !== t[l] || !n && ct(e[l]) !== ct(t[l])) && i++;
  return i + s;
}
function Nw(e, t) {
  Ie(e, 0, 0, function() {
    var n = this.utcOffset(), r = "+";
    return n < 0 && (n = -n, r = "-"), r + ua(~~(n / 60), 2) + t + ua(~~n % 60, 2);
  });
}
Nw("Z", ":");
Nw("ZZ", "");
xe("Z", zc);
xe("ZZ", zc);
Pt(["Z", "ZZ"], function(e, t, n) {
  n._useUTC = !0, n._tzm = jp(zc, e);
});
var B7 = /([\+\-]|\d\d)/gi;
function jp(e, t) {
  var n = (t || "").match(e), r, s, i;
  return n === null ? null : (r = n[n.length - 1] || [], s = (r + "").match(B7) || ["-", 0, 0], i = +(s[1] * 60) + ct(s[2]), i === 0 ? 0 : s[0] === "+" ? i : -i);
}
function Gp(e, t) {
  var n, r;
  return t._isUTC ? (n = t.clone(), r = (Hr(e) || Ml(e) ? e.valueOf() : Ut(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + r), we.updateOffset(n, !1), n) : Ut(e).local();
}
function Eh(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
we.updateOffset = function() {
};
function H7(e, t, n) {
  var r = this._offset || 0, s;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = jp(zc, e), e === null)
        return this;
    } else
      Math.abs(e) < 16 && !n && (e = e * 60);
    return !this._isUTC && t && (s = Eh(this)), this._offset = e, this._isUTC = !0, s != null && this.add(s, "m"), r !== e && (!t || this._changeInProgress ? Lw(
      this,
      qr(e - r, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, we.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? r : Eh(this);
}
function V7(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function j7(e) {
  return this.utcOffset(0, e);
}
function G7(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Eh(this), "m")), this;
}
function z7() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = jp(pz, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function q7(e) {
  return this.isValid() ? (e = e ? Ut(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function K7() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function Z7() {
  if (!Hn(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return Pp(e, this), e = Mw(e), e._a ? (t = e._isUTC ? ma(e._a) : Ut(e._a), this._isDSTShifted = this.isValid() && U7(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function X7() {
  return this.isValid() ? !this._isUTC : !1;
}
function J7() {
  return this.isValid() ? this._isUTC : !1;
}
function $w() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var Q7 = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, eq = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function qr(e, t) {
  var n = e, r = null, s, i, l;
  return Hu(e) ? n = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : Ga(e) || !isNaN(+e) ? (n = {}, t ? n[t] = +e : n.milliseconds = +e) : (r = Q7.exec(e)) ? (s = r[1] === "-" ? -1 : 1, n = {
    y: 0,
    d: ct(r[ea]) * s,
    h: ct(r[fn]) * s,
    m: ct(r[Wr]) * s,
    s: ct(r[La]) * s,
    ms: ct(wh(r[Xs] * 1e3)) * s
    // the millisecond decimal point is included in the match
  }) : (r = eq.exec(e)) ? (s = r[1] === "-" ? -1 : 1, n = {
    y: Vs(r[2], s),
    M: Vs(r[3], s),
    w: Vs(r[4], s),
    d: Vs(r[5], s),
    h: Vs(r[6], s),
    m: Vs(r[7], s),
    s: Vs(r[8], s)
  }) : n == null ? n = {} : typeof n == "object" && ("from" in n || "to" in n) && (l = tq(
    Ut(n.from),
    Ut(n.to)
  ), n = {}, n.ms = l.milliseconds, n.M = l.months), i = new Zc(n), Hu(e) && wt(e, "_locale") && (i._locale = e._locale), Hu(e) && wt(e, "_isValid") && (i._isValid = e._isValid), i;
}
qr.fn = Zc.prototype;
qr.invalid = W7;
function Vs(e, t) {
  var n = e && parseFloat(e.replace(",", "."));
  return (isNaN(n) ? 0 : n) * t;
}
function Y0(e, t) {
  var n = {};
  return n.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n;
}
function tq(e, t) {
  var n;
  return e.isValid() && t.isValid() ? (t = Gp(t, e), e.isBefore(t) ? n = Y0(e, t) : (n = Y0(t, e), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : { milliseconds: 0, months: 0 };
}
function Iw(e, t) {
  return function(n, r) {
    var s, i;
    return r !== null && !isNaN(+r) && (uw(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), i = n, n = r, r = i), s = qr(n, r), Lw(this, s, e), this;
  };
}
function Lw(e, t, n, r) {
  var s = t._milliseconds, i = wh(t._days), l = wh(t._months);
  e.isValid() && (r = r ?? !0, l && yw(e, _c(e, "Month") + l * n), i && dw(e, "Date", _c(e, "Date") + i * n), s && e._d.setTime(e._d.valueOf() + s * n), r && we.updateOffset(e, i || l));
}
var nq = Iw(1, "add"), rq = Iw(-1, "subtract");
function Rw(e) {
  return typeof e == "string" || e instanceof String;
}
function aq(e) {
  return Hr(e) || Ml(e) || Rw(e) || Ga(e) || iq(e) || sq(e) || e === null || e === void 0;
}
function sq(e) {
  var t = ei(e) && !Mp(e), n = !1, r = [
    "years",
    "year",
    "y",
    "months",
    "month",
    "M",
    "days",
    "day",
    "d",
    "dates",
    "date",
    "D",
    "hours",
    "hour",
    "h",
    "minutes",
    "minute",
    "m",
    "seconds",
    "second",
    "s",
    "milliseconds",
    "millisecond",
    "ms"
  ], s, i, l = r.length;
  for (s = 0; s < l; s += 1)
    i = r[s], n = n || wt(e, i);
  return t && n;
}
function iq(e) {
  var t = Br(e), n = !1;
  return t && (n = e.filter(function(r) {
    return !Ga(r) && Rw(e);
  }).length === 0), t && n;
}
function oq(e) {
  var t = ei(e) && !Mp(e), n = !1, r = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], s, i;
  for (s = 0; s < r.length; s += 1)
    i = r[s], n = n || wt(e, i);
  return t && n;
}
function lq(e, t) {
  var n = e.diff(t, "days", !0);
  return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse";
}
function uq(e, t) {
  arguments.length === 1 && (arguments[0] ? aq(arguments[0]) ? (e = arguments[0], t = void 0) : oq(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var n = e || Ut(), r = Gp(n, this).startOf("day"), s = we.calendarFormat(this, r) || "sameElse", i = t && (va(t[s]) ? t[s].call(this, n) : t[s]);
  return this.format(
    i || this.localeData().calendar(s, this, Ut(n))
  );
}
function cq() {
  return new Cl(this);
}
function fq(e, t) {
  var n = Hr(e) ? e : Ut(e);
  return this.isValid() && n.isValid() ? (t = Mr(t) || "millisecond", t === "millisecond" ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function dq(e, t) {
  var n = Hr(e) ? e : Ut(e);
  return this.isValid() && n.isValid() ? (t = Mr(t) || "millisecond", t === "millisecond" ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf()) : !1;
}
function hq(e, t, n, r) {
  var s = Hr(e) ? e : Ut(e), i = Hr(t) ? t : Ut(t);
  return this.isValid() && s.isValid() && i.isValid() ? (r = r || "()", (r[0] === "(" ? this.isAfter(s, n) : !this.isBefore(s, n)) && (r[1] === ")" ? this.isBefore(i, n) : !this.isAfter(i, n))) : !1;
}
function pq(e, t) {
  var n = Hr(e) ? e : Ut(e), r;
  return this.isValid() && n.isValid() ? (t = Mr(t) || "millisecond", t === "millisecond" ? this.valueOf() === n.valueOf() : (r = n.valueOf(), this.clone().startOf(t).valueOf() <= r && r <= this.clone().endOf(t).valueOf())) : !1;
}
function mq(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function vq(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function gq(e, t, n) {
  var r, s, i;
  if (!this.isValid())
    return NaN;
  if (r = Gp(e, this), !r.isValid())
    return NaN;
  switch (s = (r.utcOffset() - this.utcOffset()) * 6e4, t = Mr(t), t) {
    case "year":
      i = Vu(this, r) / 12;
      break;
    case "month":
      i = Vu(this, r);
      break;
    case "quarter":
      i = Vu(this, r) / 3;
      break;
    case "second":
      i = (this - r) / 1e3;
      break;
    case "minute":
      i = (this - r) / 6e4;
      break;
    case "hour":
      i = (this - r) / 36e5;
      break;
    case "day":
      i = (this - r - s) / 864e5;
      break;
    case "week":
      i = (this - r - s) / 6048e5;
      break;
    default:
      i = this - r;
  }
  return n ? i : yr(i);
}
function Vu(e, t) {
  if (e.date() < t.date())
    return -Vu(t, e);
  var n = (t.year() - e.year()) * 12 + (t.month() - e.month()), r = e.clone().add(n, "months"), s, i;
  return t - r < 0 ? (s = e.clone().add(n - 1, "months"), i = (t - r) / (r - s)) : (s = e.clone().add(n + 1, "months"), i = (t - r) / (s - r)), -(n + i) || 0;
}
we.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
we.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function _q() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function yq(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, n = t ? this.clone().utc() : this;
  return n.year() < 0 || n.year() > 9999 ? Bu(
    n,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : va(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", Bu(n, "Z")) : Bu(
    n,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function bq() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", n, r, s, i;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), n = "[" + e + '("]', r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", s = "-MM-DD[T]HH:mm:ss.SSS", i = t + '[")]', this.format(n + r + s + i);
}
function wq(e) {
  e || (e = this.isUtc() ? we.defaultFormatUtc : we.defaultFormat);
  var t = Bu(this, e);
  return this.localeData().postformat(t);
}
function Eq(e, t) {
  return this.isValid() && (Hr(e) && e.isValid() || Ut(e).isValid()) ? qr({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function Oq(e) {
  return this.from(Ut(), e);
}
function Dq(e, t) {
  return this.isValid() && (Hr(e) && e.isValid() || Ut(e).isValid()) ? qr({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function xq(e) {
  return this.to(Ut(), e);
}
function Fw(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = Xa(e), t != null && (this._locale = t), this);
}
var Yw = Ar(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function Ww() {
  return this._locale;
}
var wc = 1e3, zi = 60 * wc, Ec = 60 * zi, Uw = (365 * 400 + 97) * 24 * Ec;
function qi(e, t) {
  return (e % t + t) % t;
}
function Bw(e, t, n) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, n) - Uw : new Date(e, t, n).valueOf();
}
function Hw(e, t, n) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, n) - Uw : Date.UTC(e, t, n);
}
function Sq(e) {
  var t, n;
  if (e = Mr(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (n = this._isUTC ? Hw : Bw, e) {
    case "year":
      t = n(this.year(), 0, 1);
      break;
    case "quarter":
      t = n(
        this.year(),
        this.month() - this.month() % 3,
        1
      );
      break;
    case "month":
      t = n(this.year(), this.month(), 1);
      break;
    case "week":
      t = n(
        this.year(),
        this.month(),
        this.date() - this.weekday()
      );
      break;
    case "isoWeek":
      t = n(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1)
      );
      break;
    case "day":
    case "date":
      t = n(this.year(), this.month(), this.date());
      break;
    case "hour":
      t = this._d.valueOf(), t -= qi(
        t + (this._isUTC ? 0 : this.utcOffset() * zi),
        Ec
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= qi(t, zi);
      break;
    case "second":
      t = this._d.valueOf(), t -= qi(t, wc);
      break;
  }
  return this._d.setTime(t), we.updateOffset(this, !0), this;
}
function kq(e) {
  var t, n;
  if (e = Mr(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (n = this._isUTC ? Hw : Bw, e) {
    case "year":
      t = n(this.year() + 1, 0, 1) - 1;
      break;
    case "quarter":
      t = n(
        this.year(),
        this.month() - this.month() % 3 + 3,
        1
      ) - 1;
      break;
    case "month":
      t = n(this.year(), this.month() + 1, 1) - 1;
      break;
    case "week":
      t = n(
        this.year(),
        this.month(),
        this.date() - this.weekday() + 7
      ) - 1;
      break;
    case "isoWeek":
      t = n(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1) + 7
      ) - 1;
      break;
    case "day":
    case "date":
      t = n(this.year(), this.month(), this.date() + 1) - 1;
      break;
    case "hour":
      t = this._d.valueOf(), t += Ec - qi(
        t + (this._isUTC ? 0 : this.utcOffset() * zi),
        Ec
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += zi - qi(t, zi) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += wc - qi(t, wc) - 1;
      break;
  }
  return this._d.setTime(t), we.updateOffset(this, !0), this;
}
function Tq() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function Aq() {
  return Math.floor(this.valueOf() / 1e3);
}
function Mq() {
  return new Date(this.valueOf());
}
function Cq() {
  var e = this;
  return [
    e.year(),
    e.month(),
    e.date(),
    e.hour(),
    e.minute(),
    e.second(),
    e.millisecond()
  ];
}
function Pq() {
  var e = this;
  return {
    years: e.year(),
    months: e.month(),
    date: e.date(),
    hours: e.hours(),
    minutes: e.minutes(),
    seconds: e.seconds(),
    milliseconds: e.milliseconds()
  };
}
function Nq() {
  return this.isValid() ? this.toISOString() : null;
}
function $q() {
  return Cp(this);
}
function Iq() {
  return bs({}, et(this));
}
function Lq() {
  return et(this).overflow;
}
function Rq() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
Ie("N", 0, 0, "eraAbbr");
Ie("NN", 0, 0, "eraAbbr");
Ie("NNN", 0, 0, "eraAbbr");
Ie("NNNN", 0, 0, "eraName");
Ie("NNNNN", 0, 0, "eraNarrow");
Ie("y", ["y", 1], "yo", "eraYear");
Ie("y", ["yy", 2], 0, "eraYear");
Ie("y", ["yyy", 3], 0, "eraYear");
Ie("y", ["yyyy", 4], 0, "eraYear");
xe("N", zp);
xe("NN", zp);
xe("NNN", zp);
xe("NNNN", qq);
xe("NNNNN", Kq);
Pt(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, n, r) {
    var s = n._locale.erasParse(e, r, n._strict);
    s ? et(n).era = s : et(n).invalidEra = e;
  }
);
xe("y", Oo);
xe("yy", Oo);
xe("yyy", Oo);
xe("yyyy", Oo);
xe("yo", Zq);
Pt(["y", "yy", "yyy", "yyyy"], On);
Pt(["yo"], function(e, t, n, r) {
  var s;
  n._locale._eraYearOrdinalRegex && (s = e.match(n._locale._eraYearOrdinalRegex)), n._locale.eraYearOrdinalParse ? t[On] = n._locale.eraYearOrdinalParse(e, s) : t[On] = parseInt(e, 10);
});
function Fq(e, t) {
  var n, r, s, i = this._eras || Xa("en")._eras;
  for (n = 0, r = i.length; n < r; ++n) {
    switch (typeof i[n].since) {
      case "string":
        s = we(i[n].since).startOf("day"), i[n].since = s.valueOf();
        break;
    }
    switch (typeof i[n].until) {
      case "undefined":
        i[n].until = 1 / 0;
        break;
      case "string":
        s = we(i[n].until).startOf("day").valueOf(), i[n].until = s.valueOf();
        break;
    }
  }
  return i;
}
function Yq(e, t, n) {
  var r, s, i = this.eras(), l, u, f;
  for (e = e.toUpperCase(), r = 0, s = i.length; r < s; ++r)
    if (l = i[r].name.toUpperCase(), u = i[r].abbr.toUpperCase(), f = i[r].narrow.toUpperCase(), n)
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (u === e)
            return i[r];
          break;
        case "NNNN":
          if (l === e)
            return i[r];
          break;
        case "NNNNN":
          if (f === e)
            return i[r];
          break;
      }
    else if ([l, u, f].indexOf(e) >= 0)
      return i[r];
}
function Wq(e, t) {
  var n = e.since <= e.until ? 1 : -1;
  return t === void 0 ? we(e.since).year() : we(e.since).year() + (t - e.offset) * n;
}
function Uq() {
  var e, t, n, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
      return r[e].name;
  return "";
}
function Bq() {
  var e, t, n, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
      return r[e].narrow;
  return "";
}
function Hq() {
  var e, t, n, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
      return r[e].abbr;
  return "";
}
function Vq() {
  var e, t, n, r, s = this.localeData().eras();
  for (e = 0, t = s.length; e < t; ++e)
    if (n = s[e].since <= s[e].until ? 1 : -1, r = this.clone().startOf("day").valueOf(), s[e].since <= r && r <= s[e].until || s[e].until <= r && r <= s[e].since)
      return (this.year() - we(s[e].since).year()) * n + s[e].offset;
  return this.year();
}
function jq(e) {
  return wt(this, "_erasNameRegex") || qp.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function Gq(e) {
  return wt(this, "_erasAbbrRegex") || qp.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function zq(e) {
  return wt(this, "_erasNarrowRegex") || qp.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function zp(e, t) {
  return t.erasAbbrRegex(e);
}
function qq(e, t) {
  return t.erasNameRegex(e);
}
function Kq(e, t) {
  return t.erasNarrowRegex(e);
}
function Zq(e, t) {
  return t._eraYearOrdinalRegex || Oo;
}
function qp() {
  var e = [], t = [], n = [], r = [], s, i, l = this.eras();
  for (s = 0, i = l.length; s < i; ++s)
    t.push(tr(l[s].name)), e.push(tr(l[s].abbr)), n.push(tr(l[s].narrow)), r.push(tr(l[s].name)), r.push(tr(l[s].abbr)), r.push(tr(l[s].narrow));
  this._erasRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  );
}
Ie(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
Ie(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function Xc(e, t) {
  Ie(0, [e, e.length], 0, t);
}
Xc("gggg", "weekYear");
Xc("ggggg", "weekYear");
Xc("GGGG", "isoWeekYear");
Xc("GGGGG", "isoWeekYear");
xn("weekYear", "gg");
xn("isoWeekYear", "GG");
Sn("weekYear", 1);
Sn("isoWeekYear", 1);
xe("G", Gc);
xe("g", Gc);
xe("GG", Bt, or);
xe("gg", Bt, or);
xe("GGGG", Rp, Lp);
xe("gggg", Rp, Lp);
xe("GGGGG", jc, Hc);
xe("ggggg", jc, Hc);
Nl(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, n, r) {
    t[r.substr(0, 2)] = ct(e);
  }
);
Nl(["gg", "GG"], function(e, t, n, r) {
  t[r] = we.parseTwoDigitYear(e);
});
function Xq(e) {
  return Vw.call(
    this,
    e,
    this.week(),
    this.weekday(),
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function Jq(e) {
  return Vw.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function Qq() {
  return Ra(this.year(), 1, 4);
}
function eK() {
  return Ra(this.isoWeekYear(), 1, 4);
}
function tK() {
  var e = this.localeData()._week;
  return Ra(this.year(), e.dow, e.doy);
}
function nK() {
  var e = this.localeData()._week;
  return Ra(this.weekYear(), e.dow, e.doy);
}
function Vw(e, t, n, r, s) {
  var i;
  return e == null ? yl(this, r, s).year : (i = Ra(e, r, s), t > i && (t = i), rK.call(this, e, t, n, r, s));
}
function rK(e, t, n, r, s) {
  var i = Ow(e, t, n, r, s), l = _l(i.year, 0, i.dayOfYear);
  return this.year(l.getUTCFullYear()), this.month(l.getUTCMonth()), this.date(l.getUTCDate()), this;
}
Ie("Q", 0, "Qo", "quarter");
xn("quarter", "Q");
Sn("quarter", 7);
xe("Q", hw);
Pt("Q", function(e, t) {
  t[Ia] = (ct(e) - 1) * 3;
});
function aK(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
Ie("D", ["DD", 2], "Do", "date");
xn("date", "D");
Sn("date", 9);
xe("D", Bt);
xe("DD", Bt, or);
xe("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
Pt(["D", "DD"], ea);
Pt("Do", function(e, t) {
  t[ea] = ct(e.match(Bt)[0]);
});
var jw = Eo("Date", !0);
Ie("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
xn("dayOfYear", "DDD");
Sn("dayOfYear", 4);
xe("DDD", Vc);
xe("DDDD", pw);
Pt(["DDD", "DDDD"], function(e, t, n) {
  n._dayOfYear = ct(e);
});
function sK(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
Ie("m", ["mm", 2], 0, "minute");
xn("minute", "m");
Sn("minute", 14);
xe("m", Bt);
xe("mm", Bt, or);
Pt(["m", "mm"], Wr);
var iK = Eo("Minutes", !1);
Ie("s", ["ss", 2], 0, "second");
xn("second", "s");
Sn("second", 15);
xe("s", Bt);
xe("ss", Bt, or);
Pt(["s", "ss"], La);
var oK = Eo("Seconds", !1);
Ie("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
Ie(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
Ie(0, ["SSS", 3], 0, "millisecond");
Ie(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
Ie(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
Ie(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
Ie(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
Ie(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
Ie(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
xn("millisecond", "ms");
Sn("millisecond", 16);
xe("S", Vc, hw);
xe("SS", Vc, or);
xe("SSS", Vc, pw);
var ws, Gw;
for (ws = "SSSS"; ws.length <= 9; ws += "S")
  xe(ws, Oo);
function lK(e, t) {
  t[Xs] = ct(("0." + e) * 1e3);
}
for (ws = "S"; ws.length <= 9; ws += "S")
  Pt(ws, lK);
Gw = Eo("Milliseconds", !1);
Ie("z", 0, 0, "zoneAbbr");
Ie("zz", 0, 0, "zoneName");
function uK() {
  return this._isUTC ? "UTC" : "";
}
function cK() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var ue = Cl.prototype;
ue.add = nq;
ue.calendar = uq;
ue.clone = cq;
ue.diff = gq;
ue.endOf = kq;
ue.format = wq;
ue.from = Eq;
ue.fromNow = Oq;
ue.to = Dq;
ue.toNow = xq;
ue.get = dz;
ue.invalidAt = Lq;
ue.isAfter = fq;
ue.isBefore = dq;
ue.isBetween = hq;
ue.isSame = pq;
ue.isSameOrAfter = mq;
ue.isSameOrBefore = vq;
ue.isValid = $q;
ue.lang = Yw;
ue.locale = Fw;
ue.localeData = Ww;
ue.max = $7;
ue.min = N7;
ue.parsingFlags = Iq;
ue.set = hz;
ue.startOf = Sq;
ue.subtract = rq;
ue.toArray = Cq;
ue.toObject = Pq;
ue.toDate = Mq;
ue.toISOString = yq;
ue.inspect = bq;
typeof Symbol < "u" && Symbol.for != null && (ue[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
ue.toJSON = Nq;
ue.toString = _q;
ue.unix = Aq;
ue.valueOf = Tq;
ue.creationData = Rq;
ue.eraName = Uq;
ue.eraNarrow = Bq;
ue.eraAbbr = Hq;
ue.eraYear = Vq;
ue.year = Ew;
ue.isLeapYear = Pz;
ue.weekYear = Xq;
ue.isoWeekYear = Jq;
ue.quarter = ue.quarters = aK;
ue.month = bw;
ue.daysInMonth = Az;
ue.week = ue.weeks = Fz;
ue.isoWeek = ue.isoWeeks = Yz;
ue.weeksInYear = tK;
ue.weeksInWeekYear = nK;
ue.isoWeeksInYear = Qq;
ue.isoWeeksInISOWeekYear = eK;
ue.date = jw;
ue.day = ue.days = Jz;
ue.weekday = Qz;
ue.isoWeekday = e7;
ue.dayOfYear = sK;
ue.hour = ue.hours = o7;
ue.minute = ue.minutes = iK;
ue.second = ue.seconds = oK;
ue.millisecond = ue.milliseconds = Gw;
ue.utcOffset = H7;
ue.utc = j7;
ue.local = G7;
ue.parseZone = z7;
ue.hasAlignedHourOffset = q7;
ue.isDST = K7;
ue.isLocal = X7;
ue.isUtcOffset = J7;
ue.isUtc = $w;
ue.isUTC = $w;
ue.zoneAbbr = uK;
ue.zoneName = cK;
ue.dates = Ar(
  "dates accessor is deprecated. Use date instead.",
  jw
);
ue.months = Ar(
  "months accessor is deprecated. Use month instead",
  bw
);
ue.years = Ar(
  "years accessor is deprecated. Use year instead",
  Ew
);
ue.zone = Ar(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  V7
);
ue.isDSTShifted = Ar(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  Z7
);
function fK(e) {
  return Ut(e * 1e3);
}
function dK() {
  return Ut.apply(null, arguments).parseZone();
}
function zw(e) {
  return e;
}
var Et = Np.prototype;
Et.calendar = JG;
Et.longDateFormat = nz;
Et.invalidDate = az;
Et.ordinal = oz;
Et.preparse = zw;
Et.postformat = zw;
Et.relativeTime = uz;
Et.pastFuture = cz;
Et.set = ZG;
Et.eras = Fq;
Et.erasParse = Yq;
Et.erasConvertYear = Wq;
Et.erasAbbrRegex = Gq;
Et.erasNameRegex = jq;
Et.erasNarrowRegex = zq;
Et.months = xz;
Et.monthsShort = Sz;
Et.monthsParse = Tz;
Et.monthsRegex = Cz;
Et.monthsShortRegex = Mz;
Et.week = $z;
Et.firstDayOfYear = Rz;
Et.firstDayOfWeek = Lz;
Et.weekdays = zz;
Et.weekdaysMin = Kz;
Et.weekdaysShort = qz;
Et.weekdaysParse = Xz;
Et.weekdaysRegex = t7;
Et.weekdaysShortRegex = n7;
Et.weekdaysMinRegex = r7;
Et.isPM = s7;
Et.meridiem = l7;
function Oc(e, t, n, r) {
  var s = Xa(), i = ma().set(r, t);
  return s[n](i, e);
}
function qw(e, t, n) {
  if (Ga(e) && (t = e, e = void 0), e = e || "", t != null)
    return Oc(e, t, n, "month");
  var r, s = [];
  for (r = 0; r < 12; r++)
    s[r] = Oc(e, r, n, "month");
  return s;
}
function Kp(e, t, n, r) {
  typeof e == "boolean" ? (Ga(t) && (n = t, t = void 0), t = t || "") : (t = e, n = t, e = !1, Ga(t) && (n = t, t = void 0), t = t || "");
  var s = Xa(), i = e ? s._week.dow : 0, l, u = [];
  if (n != null)
    return Oc(t, (n + i) % 7, r, "day");
  for (l = 0; l < 7; l++)
    u[l] = Oc(t, (l + i) % 7, r, "day");
  return u;
}
function hK(e, t) {
  return qw(e, t, "months");
}
function pK(e, t) {
  return qw(e, t, "monthsShort");
}
function mK(e, t, n) {
  return Kp(e, t, n, "weekdays");
}
function vK(e, t, n) {
  return Kp(e, t, n, "weekdaysShort");
}
function gK(e, t, n) {
  return Kp(e, t, n, "weekdaysMin");
}
Ds("en", {
  eras: [
    {
      since: "0001-01-01",
      until: 1 / 0,
      offset: 1,
      name: "Anno Domini",
      narrow: "AD",
      abbr: "AD"
    },
    {
      since: "0000-12-31",
      until: -1 / 0,
      offset: 1,
      name: "Before Christ",
      narrow: "BC",
      abbr: "BC"
    }
  ],
  dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
  ordinal: function(e) {
    var t = e % 10, n = ct(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
    return e + n;
  }
});
we.lang = Ar(
  "moment.lang is deprecated. Use moment.locale instead.",
  Ds
);
we.langData = Ar(
  "moment.langData is deprecated. Use moment.localeData instead.",
  Xa
);
var Ma = Math.abs;
function _K() {
  var e = this._data;
  return this._milliseconds = Ma(this._milliseconds), this._days = Ma(this._days), this._months = Ma(this._months), e.milliseconds = Ma(e.milliseconds), e.seconds = Ma(e.seconds), e.minutes = Ma(e.minutes), e.hours = Ma(e.hours), e.months = Ma(e.months), e.years = Ma(e.years), this;
}
function Kw(e, t, n, r) {
  var s = qr(t, n);
  return e._milliseconds += r * s._milliseconds, e._days += r * s._days, e._months += r * s._months, e._bubble();
}
function yK(e, t) {
  return Kw(this, e, t, 1);
}
function bK(e, t) {
  return Kw(this, e, t, -1);
}
function W0(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function wK() {
  var e = this._milliseconds, t = this._days, n = this._months, r = this._data, s, i, l, u, f;
  return e >= 0 && t >= 0 && n >= 0 || e <= 0 && t <= 0 && n <= 0 || (e += W0(Oh(n) + t) * 864e5, t = 0, n = 0), r.milliseconds = e % 1e3, s = yr(e / 1e3), r.seconds = s % 60, i = yr(s / 60), r.minutes = i % 60, l = yr(i / 60), r.hours = l % 24, t += yr(l / 24), f = yr(Zw(t)), n += f, t -= W0(Oh(f)), u = yr(n / 12), n %= 12, r.days = t, r.months = n, r.years = u, this;
}
function Zw(e) {
  return e * 4800 / 146097;
}
function Oh(e) {
  return e * 146097 / 4800;
}
function EK(e) {
  if (!this.isValid())
    return NaN;
  var t, n, r = this._milliseconds;
  if (e = Mr(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + r / 864e5, n = this._months + Zw(t), e) {
      case "month":
        return n;
      case "quarter":
        return n / 3;
      case "year":
        return n / 12;
    }
  else
    switch (t = this._days + Math.round(Oh(this._months)), e) {
      case "week":
        return t / 7 + r / 6048e5;
      case "day":
        return t + r / 864e5;
      case "hour":
        return t * 24 + r / 36e5;
      case "minute":
        return t * 1440 + r / 6e4;
      case "second":
        return t * 86400 + r / 1e3;
      case "millisecond":
        return Math.floor(t * 864e5) + r;
      default:
        throw new Error("Unknown unit " + e);
    }
}
function OK() {
  return this.isValid() ? this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + ct(this._months / 12) * 31536e6 : NaN;
}
function Ja(e) {
  return function() {
    return this.as(e);
  };
}
var DK = Ja("ms"), xK = Ja("s"), SK = Ja("m"), kK = Ja("h"), TK = Ja("d"), AK = Ja("w"), MK = Ja("M"), CK = Ja("Q"), PK = Ja("y");
function NK() {
  return qr(this);
}
function $K(e) {
  return e = Mr(e), this.isValid() ? this[e + "s"]() : NaN;
}
function hi(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var IK = hi("milliseconds"), LK = hi("seconds"), RK = hi("minutes"), FK = hi("hours"), YK = hi("days"), WK = hi("months"), UK = hi("years");
function BK() {
  return yr(this.days() / 7);
}
var Ca = Math.round, Wi = {
  ss: 44,
  // a few seconds to seconds
  s: 45,
  // seconds to minute
  m: 45,
  // minutes to hour
  h: 22,
  // hours to day
  d: 26,
  // days to month/week
  w: null,
  // weeks to month
  M: 11
  // months to year
};
function HK(e, t, n, r, s) {
  return s.relativeTime(t || 1, !!n, e, r);
}
function VK(e, t, n, r) {
  var s = qr(e).abs(), i = Ca(s.as("s")), l = Ca(s.as("m")), u = Ca(s.as("h")), f = Ca(s.as("d")), h = Ca(s.as("M")), d = Ca(s.as("w")), m = Ca(s.as("y")), v = i <= n.ss && ["s", i] || i < n.s && ["ss", i] || l <= 1 && ["m"] || l < n.m && ["mm", l] || u <= 1 && ["h"] || u < n.h && ["hh", u] || f <= 1 && ["d"] || f < n.d && ["dd", f];
  return n.w != null && (v = v || d <= 1 && ["w"] || d < n.w && ["ww", d]), v = v || h <= 1 && ["M"] || h < n.M && ["MM", h] || m <= 1 && ["y"] || ["yy", m], v[2] = t, v[3] = +e > 0, v[4] = r, HK.apply(null, v);
}
function jK(e) {
  return e === void 0 ? Ca : typeof e == "function" ? (Ca = e, !0) : !1;
}
function GK(e, t) {
  return Wi[e] === void 0 ? !1 : t === void 0 ? Wi[e] : (Wi[e] = t, e === "s" && (Wi.ss = t - 1), !0);
}
function zK(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var n = !1, r = Wi, s, i;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (n = e), typeof t == "object" && (r = Object.assign({}, Wi, t), t.s != null && t.ss == null && (r.ss = t.s - 1)), s = this.localeData(), i = VK(this, !n, r, s), n && (i = s.pastFuture(+this, i)), s.postformat(i);
}
var Nd = Math.abs;
function $i(e) {
  return (e > 0) - (e < 0) || +e;
}
function Jc() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = Nd(this._milliseconds) / 1e3, t = Nd(this._days), n = Nd(this._months), r, s, i, l, u = this.asSeconds(), f, h, d, m;
  return u ? (r = yr(e / 60), s = yr(r / 60), e %= 60, r %= 60, i = yr(n / 12), n %= 12, l = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", f = u < 0 ? "-" : "", h = $i(this._months) !== $i(u) ? "-" : "", d = $i(this._days) !== $i(u) ? "-" : "", m = $i(this._milliseconds) !== $i(u) ? "-" : "", f + "P" + (i ? h + i + "Y" : "") + (n ? h + n + "M" : "") + (t ? d + t + "D" : "") + (s || r || e ? "T" : "") + (s ? m + s + "H" : "") + (r ? m + r + "M" : "") + (e ? m + l + "S" : "")) : "P0D";
}
var gt = Zc.prototype;
gt.isValid = Y7;
gt.abs = _K;
gt.add = yK;
gt.subtract = bK;
gt.as = EK;
gt.asMilliseconds = DK;
gt.asSeconds = xK;
gt.asMinutes = SK;
gt.asHours = kK;
gt.asDays = TK;
gt.asWeeks = AK;
gt.asMonths = MK;
gt.asQuarters = CK;
gt.asYears = PK;
gt.valueOf = OK;
gt._bubble = wK;
gt.clone = NK;
gt.get = $K;
gt.milliseconds = IK;
gt.seconds = LK;
gt.minutes = RK;
gt.hours = FK;
gt.days = YK;
gt.weeks = BK;
gt.months = WK;
gt.years = UK;
gt.humanize = zK;
gt.toISOString = Jc;
gt.toString = Jc;
gt.toJSON = Jc;
gt.locale = Fw;
gt.localeData = Ww;
gt.toIsoString = Ar(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  Jc
);
gt.lang = Yw;
Ie("X", 0, 0, "unix");
Ie("x", 0, 0, "valueOf");
xe("x", Gc);
xe("X", mz);
Pt("X", function(e, t, n) {
  n._d = new Date(parseFloat(e) * 1e3);
});
Pt("x", function(e, t, n) {
  n._d = new Date(ct(e));
});
//! moment.js
we.version = "2.29.4";
qG(Ut);
we.fn = ue;
we.min = I7;
we.max = L7;
we.now = R7;
we.utc = ma;
we.unix = fK;
we.months = hK;
we.isDate = Ml;
we.locale = Ds;
we.invalid = Uc;
we.duration = qr;
we.isMoment = Hr;
we.weekdays = mK;
we.parseZone = dK;
we.localeData = Xa;
we.isDuration = Hu;
we.monthsShort = pK;
we.weekdaysMin = gK;
we.defineLocale = Up;
we.updateLocale = d7;
we.locales = h7;
we.weekdaysShort = vK;
we.normalizeUnits = Mr;
we.relativeTimeRounding = jK;
we.relativeTimeThreshold = GK;
we.calendarFormat = lq;
we.prototype = ue;
we.HTML5_FMT = {
  DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
  // <input type="datetime-local" />
  DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
  // <input type="datetime-local" step="1" />
  DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
  // <input type="datetime-local" step="0.001" />
  DATE: "YYYY-MM-DD",
  // <input type="date" />
  TIME: "HH:mm",
  // <input type="time" />
  TIME_SECONDS: "HH:mm:ss",
  // <input type="time" step="1" />
  TIME_MS: "HH:mm:ss.SSS",
  // <input type="time" step="0.001" />
  WEEK: "GGGG-[W]WW",
  // <input type="week" />
  MONTH: "YYYY-MM"
  // <input type="month" />
};
const qK = { class: "flex flex-col gap-2" }, KK = { class: "flex items-center gap-1" }, ZK = {
  key: 0,
  for: "due",
  class: "p3-b text-true-blue-3 w-fit flex cursor-pointer items-center justify-center gap-2 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
}, XK = ["value"], JK = {
  key: 0,
  class: "absolute top-[calc(100%+.75rem)] left-0 z-10"
}, QK = /* @__PURE__ */ Le({
  __name: "DuePicker",
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, { t: r } = fa.global, s = Tt("eventData"), i = J(!1), l = J(
      n.modelValue ? new Date(n.modelValue).toISOString() : ""
    ), u = (m) => {
      l.value = m.toISOString();
    }, f = J(!1);
    ze(f, (m) => {
      m || t("update:modelValue", sw.cloneDeep(l.value));
    });
    const h = J(null);
    aw(h, () => f.value = !1);
    function d(m) {
      let [v, g] = m.split(" "), w = g.split(":")[0];
      w = w.padStart(2, "0");
      let E = `${v} ${w}:00`, k = `${w}:59`;
      return `${E}-${k}`;
    }
    return ze(
      () => n.modelValue,
      (m) => {
        m && (i.value = !0);
      },
      { immediate: !0 }
    ), ze(i, (m) => {
      m ? rr(() => {
        f.value = !0;
      }) : t("update:modelValue", null);
    }), Cs(() => {
      t("update:modelValue", null);
    }), (m, v) => (F(), z("div", qK, [
      j("div", KK, [
        br(j("input", {
          type: "checkbox",
          "onUpdate:modelValue": v[0] || (v[0] = (g) => un(i) ? i.value = g : null),
          id: "due",
          class: "hidden"
        }, null, 512), [
          [sy, y(i)]
        ]),
        y(i) ? (F(), z("div", {
          key: 1,
          class: "relative",
          ref_key: "target",
          ref: h
        }, [
          j("div", {
            class: it(["p3-b text-true-blue-3 relative flex cursor-pointer items-center justify-start gap-4 rounded shadow-01 bg-light-5 py-1 px-2 transition-all hover:bg-light-3 hover:bg-opacity-50", { " !text-dark-5 !p3-r": !y(l) }]),
            onClick: v[1] || (v[1] = xs((g) => f.value = !y(f), ["stop"]))
          }, [
            j("input", {
              value: y(l),
              required: "",
              class: "opacity-0 absolute w-[1px] bottom-0 left-1/2 h-[1px] pointer-events-none"
            }, null, 8, XK),
            li(" " + ke(y(l) ? d(y(we)(y(l)).format("YYYY-MM-DD HH:mm")) : y(r)("未設定")), 1)
          ], 2),
          Pe(Ol, {
            name: "fade",
            mode: "out-in"
          }, {
            default: We(() => [
              y(f) ? (F(), z("div", JK, [
                Pe(y(Jb), {
                  modelValue: y(l),
                  "onUpdate:modelValue": [
                    v[2] || (v[2] = (g) => un(l) ? l.value = g : null),
                    u
                  ],
                  mode: "dateTime",
                  "min-Date": y(s).start ? new Date(y(s).start) : /* @__PURE__ */ new Date(),
                  is24hr: "",
                  "hide-time-header": "",
                  "time-accuracy": 2,
                  timezone: y(ew)()
                }, null, 8, ["modelValue", "min-Date", "timezone"])
              ])) : Te("", !0)
            ]),
            _: 1
          })
        ], 512)) : (F(), z("label", ZK, ke(y(r)("持續執行")), 1)),
        y(i) ? (F(), tt(y(ah), {
          key: 2,
          onClick: v[3] || (v[3] = (g) => i.value = !1),
          weight: "bold",
          class: "text-dark-4 hover:text-dark-3 p3-b cursor-pointer"
        })) : Te("", !0)
      ])
    ]));
  }
}), eZ = { class: "flex w-auto items-center justify-center gap-2 rounded shadow-01 bg-light-5 py-1 px-2 hover:bg-light-3 hover:bg-opacity-50 input-outer" }, tZ = ["value", "type", "placeholder", "maxLength", "required"], nZ = /* @__PURE__ */ Le({
  __name: "TextInput",
  props: {
    placeholder: {},
    modelValue: {},
    type: { default: "string" },
    maxLength: {},
    required: { type: Boolean },
    inputClass: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e;
    function r(s) {
      n.type === "number" && !s.target.value && (s.target.value = 0), t(
        "update:modelValue",
        n.type == "number" ? Number(s.target.value) : s.target.value
      );
    }
    return (s, i) => (F(), z("div", eZ, [
      j("input", {
        value: s.modelValue,
        onInput: r,
        type: s.type,
        min: "0",
        class: it([s.inputClass, "p3-b w-full border-none outline-none shadow-none placeholder:text-dark-5 text-dark-3"]),
        placeholder: s.placeholder,
        maxLength: s.maxLength,
        required: s.required
      }, null, 42, tZ)
    ]));
  }
});
const ol = /* @__PURE__ */ Dl(nZ, [["__scopeId", "data-v-d975114e"]]), rZ = { class: "flex flex-col gap-6" }, aZ = { class: "flex gap-6" }, sZ = { class: "flex items-center justify-start gap-4" }, iZ = { class: "p3-r text-dark-4" }, oZ = { class: "flex gap-6" }, lZ = { class: "flex items-center gap-4" }, uZ = ["value"], cZ = { value: 0 }, fZ = { class: "flex flex-col gap-4" }, dZ = { class: "flex items-center justify-start gap-4" }, hZ = { class: "p3-r text-dark-4" }, pZ = { class: "hidden" }, mZ = ["value"], vZ = {
  key: 0,
  class: "absolute top-[calc(100%+.75rem)] left-0 z-10"
}, gZ = { class: "flex items-center empty:hidden" }, _Z = {
  key: 0,
  class: "flex items-center justify-start gap-4"
}, yZ = { class: "p3-r text-dark-4" }, bZ = {
  key: 0,
  class: "flex justify-center flex-col gap-6"
}, wZ = { class: "flex gap-4 items-center" }, EZ = { class: "p3-r text-dark-4" }, OZ = {
  value: "-1",
  disabled: ""
}, DZ = ["value"], xZ = {
  key: 0,
  class: "p3-b text-dark-3"
}, U0 = 1, SZ = /* @__PURE__ */ Le({
  __name: "RepeatFrequency",
  props: {
    frequency: {},
    interval: {}
  },
  emits: ["update:frequency", "update:interval"],
  setup(e, { emit: t }) {
    const n = e, { t: r } = fa.global, s = Tt("eventData"), i = J(!0);
    ze(s, () => {
      i.value = !0;
    });
    const l = J(n.interval ?? U0);
    ze(l, (T) => {
      T || (T = U0), t("update:interval", T);
    });
    const u = J(n.frequency);
    ze(u, (T) => {
      t("update:frequency", T);
    }), Y({
      get: () => s.value.start ? new Date(s.value.start).toISOString() : "",
      set: (T) => {
        s.value.start = T;
      }
    });
    const f = Y({
      get: () => s.value.weekdays ?? [],
      set: (T) => {
        s.value.weekdays = T;
      }
    }), h = Y({
      get: () => s.value.weekOrdinal ?? [],
      set: (T) => {
        s.value.weekOrdinal = T;
      }
    }), d = Y({
      get: () => s.value.monthDate ?? [],
      set: (T) => {
        s.value.monthDate = T;
      }
    }), m = Y({
      get: () => s.value.yearMonths ?? [],
      set: (T) => {
        s.value.yearMonths = T;
      }
    }), v = Y(() => {
      if (g.value == xt.Never)
        return r("只執行一次");
      if (g.value == xt.Hour)
        return r("每小時執行一次");
      if (g.value == xt.Day)
        return r("每日執行一次");
      if (g.value == xt.Week)
        return r("每週執行一次");
      if (g.value == xt.Month)
        return r("每月執行一次");
      if (g.value == xt.Annual)
        return r("每年執行一次");
      const T = {
        1: r("小時"),
        2: r("日"),
        3: r("週"),
        4: r("月"),
        5: r("年")
      }, x = {
        1: "",
        2: "",
        3: "",
        4: "",
        5: ""
      };
      return g.value == 0 ? `${r("每")}${l.value ?? ""}${T[u.value] ?? ""}${x[u.value] ?? ""}${r("執行一次")}` : "";
    }), g = J(
      n.interval == null ? -1 : n.interval !== 1 ? 0 : n.frequency
    );
    function w(T) {
      let [x, C] = T.split(" "), M = C.split(":")[0];
      M = M.padStart(2, "0");
      let I = `${x} ${M}:00`, R = `${M}:59`;
      return `${I}-${R}`;
    }
    ze(
      g,
      (T) => {
        xt[T] && (t("update:frequency", T), t("update:interval", 1), u.value = g.value, s.value.weekdays = null, s.value.weekOrdinal = null, s.value.monthDate = null, s.value.yearMonths = null), s.value.customInterval = T === 0;
      },
      { immediate: !0 }
    );
    const E = J(
      s.value.start ? new Date(s.value.start).toISOString() : ""
    ), k = (T) => {
      E.value = T.toISOString();
    }, b = J(!1);
    ze(b, (T) => {
      T || (s.value.start = sw.cloneDeep(E.value));
    });
    const D = J(null);
    return aw(D, () => b.value = !1), (T, x) => (F(), z("div", rZ, [
      j("div", aZ, [
        j("label", sZ, [
          j("span", iZ, ke(y(r)("執行頻率")), 1),
          j("div", oZ, [
            j("div", lZ, [
              br(j("select", {
                class: "p3-b text-true-blue-3 flex cursor-pointer items-center justify-center gap-4 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": x[0] || (x[0] = (C) => un(g) ? g.value = C : null)
              }, [
                (F(!0), z(Xe, null, Lt(y(xt), (C, M) => (F(), z(Xe, { key: M }, [
                  Number.isInteger(C) ? (F(), z("option", {
                    key: 0,
                    value: C
                  }, ke(y(r)(M)), 9, uZ)) : Te("", !0)
                ], 64))), 128)),
                j("option", cZ, ke(y(r)("自訂")), 1)
              ], 512), [
                [Ui, y(g)]
              ])
            ])
          ])
        ]),
        j("div", fZ, [
          j("div", dZ, [
            j("span", hZ, ke(y(r)("開始")), 1),
            j("div", {
              class: "relative",
              ref_key: "target",
              ref: D
            }, [
              j("div", {
                class: it(["p3-b text-true-blue-3 relative flex cursor-pointer items-center justify-start gap-4 rounded shadow-01 bg-light-5 py-1 px-2 transition-all hover:bg-light-3 hover:bg-opacity-50", { " !text-dark-5 !p3-r": !y(s).start }]),
                onClick: x[1] || (x[1] = xs((C) => b.value = !y(b), ["stop"]))
              }, [
                j("p", pZ, ke(y(E)), 1),
                j("input", {
                  value: y(s).start,
                  required: "",
                  class: "opacity-0 absolute w-[1px] bottom-0 left-1/2 h-[1px] pointer-events-none"
                }, null, 8, mZ),
                li(" " + ke(y(s).start ? w(
                  y(we)(y(s).start).format("YYYY-MM-DD HH:mm")
                ) : y(r)("未設定")), 1)
              ], 2),
              Pe(Ol, {
                name: "fade",
                mode: "out-in"
              }, {
                default: We(() => [
                  y(b) ? (F(), z("div", vZ, [
                    Pe(y(Jb), {
                      modelValue: y(s).start,
                      "onUpdate:modelValue": [
                        x[2] || (x[2] = (C) => y(s).start = C),
                        k
                      ],
                      mode: "dateTime",
                      "min-Date": /* @__PURE__ */ new Date(),
                      is24hr: "",
                      "hide-time-header": "",
                      "time-accuracy": 2,
                      timezone: y(ew)()
                    }, null, 8, ["modelValue", "min-Date", "timezone"])
                  ])) : Te("", !0)
                ]),
                _: 1
              })
            ], 512)
          ])
        ]),
        j("div", gZ, [
          y(u) !== -1 ? (F(), z("div", _Z, [
            j("span", yZ, ke(y(r)("結束")), 1),
            Pe(QK, {
              modelValue: y(s).due,
              "onUpdate:modelValue": x[3] || (x[3] = (C) => y(s).due = C)
            }, null, 8, ["modelValue"])
          ])) : Te("", !0)
        ])
      ]),
      y(xt)[y(g)] == null ? (F(), z("div", bZ, [
        j("div", wZ, [
          j("span", EZ, ke(y(r)("每")), 1),
          Pe(ol, {
            class: "!w-10 text-center text-dark-3",
            inputClass: "text-true-blue-3",
            modelValue: y(l),
            "onUpdate:modelValue": x[4] || (x[4] = (C) => un(l) ? l.value = C : null),
            type: "number"
          }, null, 8, ["modelValue"]),
          br(j("select", {
            class: "p3-b text-true-blue-3 w-14 flex cursor-pointer items-center justify-center gap-4 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
            "onUpdate:modelValue": x[5] || (x[5] = (C) => un(u) ? u.value = C : null)
          }, [
            j("option", OZ, ke(y(r)("未設定")), 1),
            (F(!0), z(Xe, null, Lt(y(xt), (C, M) => (F(), z(Xe, { key: M }, [
              C != y(xt).Never && Number.isInteger(C) ? (F(), z("option", {
                key: 0,
                value: C
              }, ke(y(r)(`repeat${M}`)), 9, DZ)) : Te("", !0)
            ], 64))), 128))
          ], 512), [
            [Ui, y(u)]
          ]),
          y(u) == y(xt).Hour || y(u) == y(xt).Day ? (F(), z("span", xZ, ke(y(v)), 1)) : Te("", !0),
          y(xt)[y(g)] == null ? (F(), tt($$, {
            key: 1,
            class: "ml-4",
            type: y(u),
            weekdays: y(f),
            "onUpdate:weekdays": x[6] || (x[6] = (C) => un(f) ? f.value = C : null),
            weekOrdinal: y(h),
            "onUpdate:weekOrdinal": x[7] || (x[7] = (C) => un(h) ? h.value = C : null),
            monthDate: y(d),
            "onUpdate:monthDate": x[8] || (x[8] = (C) => un(d) ? d.value = C : null),
            yearMonths: y(m),
            "onUpdate:yearMonths": x[9] || (x[9] = (C) => un(m) ? m.value = C : null)
          }, null, 8, ["type", "weekdays", "weekOrdinal", "monthDate", "yearMonths"])) : Te("", !0)
        ])
      ])) : Te("", !0)
    ]));
  }
}), kZ = ["id"], TZ = { class: "p2-b text-dark-2 bg-light-5 flex gap-1 items-center" }, AZ = /* @__PURE__ */ Le({
  __name: "OuterBlock",
  props: {
    id: {},
    title: {},
    icon: {}
  },
  setup(e) {
    const t = e, n = KA(
      () => import("./index-6c6ee582.js").then((u) => u[t.icon])
    ), r = J(!1);
    Vr(() => {
      r.value = !0;
    });
    function s(u) {
      const f = getComputedStyle(u).width;
      u.style.width = f, u.style.position = "absolute", u.style.visibility = "hidden", u.style.height = "auto";
      const h = getComputedStyle(u).height;
      u.style.width = null, u.style.position = null, u.style.visibility = null, u.style.height = 0, getComputedStyle(u).height, requestAnimationFrame(() => {
        u.style.height = h, u.style.paddingTop = "24px";
      });
    }
    function i(u) {
      u.style.height = "auto";
    }
    function l(u) {
      const f = getComputedStyle(u).height;
      u.style.height = f, getComputedStyle(u).height, requestAnimationFrame(() => {
        u.style.height = 0, u.style.paddingTop = "0";
      });
    }
    return (u, f) => (F(), z("div", {
      class: "relative border rounded-xs border-light-1 py-4 px-3 shadow-01 flex flex-col w-full",
      id: u.id
    }, [
      j("div", {
        class: it(["flex items-center justify-between bg-light-5 z-[2]", { " cursor-pointer": !y(r) }]),
        onClick: f[1] || (f[1] = (h) => y(r) ? null : r.value = !0)
      }, [
        j("div", TZ, [
          (F(), tt(xc(y(n)), { weight: "bold" })),
          li(" " + ke(u.title), 1)
        ]),
        Pe(y(C1), {
          weight: "bold",
          class: it(["transition-all hover:drop-shadow-md cursor-pointer hover:text-dark-3", { "-rotate-90": !y(r) }]),
          onClick: f[0] || (f[0] = xs((h) => r.value = !y(r), ["stop"]))
        }, null, 8, ["class"])
      ], 2),
      Pe(Ol, {
        name: "expand",
        onEnter: s,
        onAfterEnter: i,
        onLeave: l
      }, {
        default: We(() => [
          y(r) ? yt(u.$slots, "default", { key: 0 }, void 0, !0) : Te("", !0)
        ]),
        _: 3
      })
    ], 8, kZ));
  }
});
const ju = /* @__PURE__ */ Dl(AZ, [["__scopeId", "data-v-d587d549"]]);
function Xw(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: MZ } = Object.prototype, { getPrototypeOf: Zp } = Object, Qc = ((e) => (t) => {
  const n = MZ.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), ga = (e) => (e = e.toLowerCase(), (t) => Qc(t) === e), ef = (e) => (t) => typeof t === e, { isArray: Do } = Array, wl = ef("undefined");
function CZ(e) {
  return e !== null && !wl(e) && e.constructor !== null && !wl(e.constructor) && Dr(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Jw = ga("ArrayBuffer");
function PZ(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Jw(e.buffer), t;
}
const NZ = ef("string"), Dr = ef("function"), Qw = ef("number"), tf = (e) => e !== null && typeof e == "object", $Z = (e) => e === !0 || e === !1, Gu = (e) => {
  if (Qc(e) !== "object")
    return !1;
  const t = Zp(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, IZ = ga("Date"), LZ = ga("File"), RZ = ga("Blob"), FZ = ga("FileList"), YZ = (e) => tf(e) && Dr(e.pipe), WZ = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Dr(e.append) && ((t = Qc(e)) === "formdata" || // detect form-data instance
  t === "object" && Dr(e.toString) && e.toString() === "[object FormData]"));
}, UZ = ga("URLSearchParams"), BZ = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function $l(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), Do(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e), l = i.length;
    let u;
    for (r = 0; r < l; r++)
      u = i[r], t.call(null, e[u], u, e);
  }
}
function eE(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const tE = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), nE = (e) => !wl(e) && e !== tE;
function Dh() {
  const { caseless: e } = nE(this) && this || {}, t = {}, n = (r, s) => {
    const i = e && eE(t, s) || s;
    Gu(t[i]) && Gu(r) ? t[i] = Dh(t[i], r) : Gu(r) ? t[i] = Dh({}, r) : Do(r) ? t[i] = r.slice() : t[i] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && $l(arguments[r], n);
  return t;
}
const HZ = (e, t, n, { allOwnKeys: r } = {}) => ($l(t, (s, i) => {
  n && Dr(s) ? e[i] = Xw(s, n) : e[i] = s;
}, { allOwnKeys: r }), e), VZ = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), jZ = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, GZ = (e, t, n, r) => {
  let s, i, l;
  const u = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (s = Object.getOwnPropertyNames(e), i = s.length; i-- > 0; )
      l = s[i], (!r || r(l, e, t)) && !u[l] && (t[l] = e[l], u[l] = !0);
    e = n !== !1 && Zp(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, zZ = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, qZ = (e) => {
  if (!e)
    return null;
  if (Do(e))
    return e;
  let t = e.length;
  if (!Qw(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, KZ = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Zp(Uint8Array)), ZZ = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const i = s.value;
    t.call(e, i[0], i[1]);
  }
}, XZ = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, JZ = ga("HTMLFormElement"), QZ = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), B0 = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), eX = ga("RegExp"), rE = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  $l(n, (s, i) => {
    let l;
    (l = t(s, i, e)) !== !1 && (r[i] = l || s);
  }), Object.defineProperties(e, r);
}, tX = (e) => {
  rE(e, (t, n) => {
    if (Dr(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (Dr(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, nX = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((i) => {
      n[i] = !0;
    });
  };
  return Do(e) ? r(e) : r(String(e).split(t)), n;
}, rX = () => {
}, aX = (e, t) => (e = +e, Number.isFinite(e) ? e : t), $d = "abcdefghijklmnopqrstuvwxyz", H0 = "0123456789", aE = {
  DIGIT: H0,
  ALPHA: $d,
  ALPHA_DIGIT: $d + $d.toUpperCase() + H0
}, sX = (e = 16, t = aE.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function iX(e) {
  return !!(e && Dr(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const oX = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (tf(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[s] = r;
        const i = Do(r) ? [] : {};
        return $l(r, (l, u) => {
          const f = n(l, s + 1);
          !wl(f) && (i[u] = f);
        }), t[s] = void 0, i;
      }
    }
    return r;
  };
  return n(e, 0);
}, lX = ga("AsyncFunction"), uX = (e) => e && (tf(e) || Dr(e)) && Dr(e.then) && Dr(e.catch), te = {
  isArray: Do,
  isArrayBuffer: Jw,
  isBuffer: CZ,
  isFormData: WZ,
  isArrayBufferView: PZ,
  isString: NZ,
  isNumber: Qw,
  isBoolean: $Z,
  isObject: tf,
  isPlainObject: Gu,
  isUndefined: wl,
  isDate: IZ,
  isFile: LZ,
  isBlob: RZ,
  isRegExp: eX,
  isFunction: Dr,
  isStream: YZ,
  isURLSearchParams: UZ,
  isTypedArray: KZ,
  isFileList: FZ,
  forEach: $l,
  merge: Dh,
  extend: HZ,
  trim: BZ,
  stripBOM: VZ,
  inherits: jZ,
  toFlatObject: GZ,
  kindOf: Qc,
  kindOfTest: ga,
  endsWith: zZ,
  toArray: qZ,
  forEachEntry: ZZ,
  matchAll: XZ,
  isHTMLForm: JZ,
  hasOwnProperty: B0,
  hasOwnProp: B0,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: rE,
  freezeMethods: tX,
  toObjectSet: nX,
  toCamelCase: QZ,
  noop: rX,
  toFiniteNumber: aX,
  findKey: eE,
  global: tE,
  isContextDefined: nE,
  ALPHABET: aE,
  generateString: sX,
  isSpecCompliantForm: iX,
  toJSONObject: oX,
  isAsyncFn: lX,
  isThenable: uX
};
function vt(e, t, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s);
}
te.inherits(vt, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: te.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const sE = vt.prototype, iE = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  iE[e] = { value: e };
});
Object.defineProperties(vt, iE);
Object.defineProperty(sE, "isAxiosError", { value: !0 });
vt.from = (e, t, n, r, s, i) => {
  const l = Object.create(sE);
  return te.toFlatObject(e, l, function(f) {
    return f !== Error.prototype;
  }, (u) => u !== "isAxiosError"), vt.call(l, e.message, t, n, r, s), l.cause = e, l.name = e.name, i && Object.assign(l, i), l;
};
const cX = null;
function xh(e) {
  return te.isPlainObject(e) || te.isArray(e);
}
function oE(e) {
  return te.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function V0(e, t, n) {
  return e ? e.concat(t).map(function(s, i) {
    return s = oE(s), !n && i ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function fX(e) {
  return te.isArray(e) && !e.some(xh);
}
const dX = te.toFlatObject(te, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function nf(e, t, n) {
  if (!te.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = te.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(E, k) {
    return !te.isUndefined(k[E]);
  });
  const r = n.metaTokens, s = n.visitor || d, i = n.dots, l = n.indexes, f = (n.Blob || typeof Blob < "u" && Blob) && te.isSpecCompliantForm(t);
  if (!te.isFunction(s))
    throw new TypeError("visitor must be a function");
  function h(w) {
    if (w === null)
      return "";
    if (te.isDate(w))
      return w.toISOString();
    if (!f && te.isBlob(w))
      throw new vt("Blob is not supported. Use a Buffer instead.");
    return te.isArrayBuffer(w) || te.isTypedArray(w) ? f && typeof Blob == "function" ? new Blob([w]) : Buffer.from(w) : w;
  }
  function d(w, E, k) {
    let b = w;
    if (w && !k && typeof w == "object") {
      if (te.endsWith(E, "{}"))
        E = r ? E : E.slice(0, -2), w = JSON.stringify(w);
      else if (te.isArray(w) && fX(w) || (te.isFileList(w) || te.endsWith(E, "[]")) && (b = te.toArray(w)))
        return E = oE(E), b.forEach(function(T, x) {
          !(te.isUndefined(T) || T === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            l === !0 ? V0([E], x, i) : l === null ? E : E + "[]",
            h(T)
          );
        }), !1;
    }
    return xh(w) ? !0 : (t.append(V0(k, E, i), h(w)), !1);
  }
  const m = [], v = Object.assign(dX, {
    defaultVisitor: d,
    convertValue: h,
    isVisitable: xh
  });
  function g(w, E) {
    if (!te.isUndefined(w)) {
      if (m.indexOf(w) !== -1)
        throw Error("Circular reference detected in " + E.join("."));
      m.push(w), te.forEach(w, function(b, D) {
        (!(te.isUndefined(b) || b === null) && s.call(
          t,
          b,
          te.isString(D) ? D.trim() : D,
          E,
          v
        )) === !0 && g(b, E ? E.concat(D) : [D]);
      }), m.pop();
    }
  }
  if (!te.isObject(e))
    throw new TypeError("data must be an object");
  return g(e), t;
}
function j0(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function Xp(e, t) {
  this._pairs = [], e && nf(e, this, t);
}
const lE = Xp.prototype;
lE.append = function(t, n) {
  this._pairs.push([t, n]);
};
lE.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, j0);
  } : j0;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function hX(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function uE(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || hX, s = n && n.serialize;
  let i;
  if (s ? i = s(t, n) : i = te.isURLSearchParams(t) ? t.toString() : new Xp(t, n).toString(r), i) {
    const l = e.indexOf("#");
    l !== -1 && (e = e.slice(0, l)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class pX {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    te.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const G0 = pX, cE = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, mX = typeof URLSearchParams < "u" ? URLSearchParams : Xp, vX = typeof FormData < "u" ? FormData : null, gX = typeof Blob < "u" ? Blob : null, _X = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), yX = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), ra = {
  isBrowser: !0,
  classes: {
    URLSearchParams: mX,
    FormData: vX,
    Blob: gX
  },
  isStandardBrowserEnv: _X,
  isStandardBrowserWebWorkerEnv: yX,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function bX(e, t) {
  return nf(e, new ra.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, s, i) {
      return ra.isNode && te.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function wX(e) {
  return te.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function EX(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let i;
  for (r = 0; r < s; r++)
    i = n[r], t[i] = e[i];
  return t;
}
function fE(e) {
  function t(n, r, s, i) {
    let l = n[i++];
    const u = Number.isFinite(+l), f = i >= n.length;
    return l = !l && te.isArray(s) ? s.length : l, f ? (te.hasOwnProp(s, l) ? s[l] = [s[l], r] : s[l] = r, !u) : ((!s[l] || !te.isObject(s[l])) && (s[l] = []), t(n, r, s[l], i) && te.isArray(s[l]) && (s[l] = EX(s[l])), !u);
  }
  if (te.isFormData(e) && te.isFunction(e.entries)) {
    const n = {};
    return te.forEachEntry(e, (r, s) => {
      t(wX(r), s, n, 0);
    }), n;
  }
  return null;
}
function OX(e, t, n) {
  if (te.isString(e))
    try {
      return (t || JSON.parse)(e), te.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const Jp = {
  transitional: cE,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, i = te.isObject(t);
    if (i && te.isHTMLForm(t) && (t = new FormData(t)), te.isFormData(t))
      return s && s ? JSON.stringify(fE(t)) : t;
    if (te.isArrayBuffer(t) || te.isBuffer(t) || te.isStream(t) || te.isFile(t) || te.isBlob(t))
      return t;
    if (te.isArrayBufferView(t))
      return t.buffer;
    if (te.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let u;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return bX(t, this.formSerializer).toString();
      if ((u = te.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return nf(
          u ? { "files[]": t } : t,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return i || s ? (n.setContentType("application/json", !1), OX(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || Jp.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (t && te.isString(t) && (r && !this.responseType || s)) {
      const l = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (u) {
        if (l)
          throw u.name === "SyntaxError" ? vt.from(u, vt.ERR_BAD_RESPONSE, this, null, this.response) : u;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: ra.classes.FormData,
    Blob: ra.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
te.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Jp.headers[e] = {};
});
const Qp = Jp, DX = te.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), xX = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(l) {
    s = l.indexOf(":"), n = l.substring(0, s).trim().toLowerCase(), r = l.substring(s + 1).trim(), !(!n || t[n] && DX[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, z0 = Symbol("internals");
function Jo(e) {
  return e && String(e).trim().toLowerCase();
}
function zu(e) {
  return e === !1 || e == null ? e : te.isArray(e) ? e.map(zu) : String(e);
}
function SX(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const kX = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Id(e, t, n, r, s) {
  if (te.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!te.isString(t)) {
    if (te.isString(r))
      return t.indexOf(r) !== -1;
    if (te.isRegExp(r))
      return r.test(t);
  }
}
function TX(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function AX(e, t) {
  const n = te.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(s, i, l) {
        return this[r].call(this, t, s, i, l);
      },
      configurable: !0
    });
  });
}
class rf {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function i(u, f, h) {
      const d = Jo(f);
      if (!d)
        throw new Error("header name must be a non-empty string");
      const m = te.findKey(s, d);
      (!m || s[m] === void 0 || h === !0 || h === void 0 && s[m] !== !1) && (s[m || f] = zu(u));
    }
    const l = (u, f) => te.forEach(u, (h, d) => i(h, d, f));
    return te.isPlainObject(t) || t instanceof this.constructor ? l(t, n) : te.isString(t) && (t = t.trim()) && !kX(t) ? l(xX(t), n) : t != null && i(n, t, r), this;
  }
  get(t, n) {
    if (t = Jo(t), t) {
      const r = te.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return SX(s);
        if (te.isFunction(n))
          return n.call(this, s, r);
        if (te.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Jo(t), t) {
      const r = te.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Id(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function i(l) {
      if (l = Jo(l), l) {
        const u = te.findKey(r, l);
        u && (!n || Id(r, r[u], u, n)) && (delete r[u], s = !0);
      }
    }
    return te.isArray(t) ? t.forEach(i) : i(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || Id(this, this[i], i, t, !0)) && (delete this[i], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return te.forEach(this, (s, i) => {
      const l = te.findKey(r, i);
      if (l) {
        n[l] = zu(s), delete n[i];
        return;
      }
      const u = t ? TX(i) : String(i).trim();
      u !== i && delete n[i], n[u] = zu(s), r[u] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return te.forEach(this, (r, s) => {
      r != null && r !== !1 && (n[s] = t && te.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[z0] = this[z0] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function i(l) {
      const u = Jo(l);
      r[u] || (AX(s, l), r[u] = !0);
    }
    return te.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
rf.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
te.reduceDescriptors(rf.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
te.freezeMethods(rf);
const Fa = rf;
function Ld(e, t) {
  const n = this || Qp, r = t || n, s = Fa.from(r.headers);
  let i = r.data;
  return te.forEach(e, function(u) {
    i = u.call(n, i, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), i;
}
function dE(e) {
  return !!(e && e.__CANCEL__);
}
function Il(e, t, n) {
  vt.call(this, e ?? "canceled", vt.ERR_CANCELED, t, n), this.name = "CanceledError";
}
te.inherits(Il, vt, {
  __CANCEL__: !0
});
function MX(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new vt(
    "Request failed with status code " + n.status,
    [vt.ERR_BAD_REQUEST, vt.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const CX = ra.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(n, r, s, i, l, u) {
        const f = [];
        f.push(n + "=" + encodeURIComponent(r)), te.isNumber(s) && f.push("expires=" + new Date(s).toGMTString()), te.isString(i) && f.push("path=" + i), te.isString(l) && f.push("domain=" + l), u === !0 && f.push("secure"), document.cookie = f.join("; ");
      },
      read: function(n) {
        const r = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
        return r ? decodeURIComponent(r[3]) : null;
      },
      remove: function(n) {
        this.write(n, "", Date.now() - 864e5);
      }
    };
  }()
) : (
  // Non standard browser env (web workers, react-native) lack needed support.
  function() {
    return {
      write: function() {
      },
      read: function() {
        return null;
      },
      remove: function() {
      }
    };
  }()
);
function PX(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function NX(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function hE(e, t) {
  return e && !PX(t) ? NX(e, t) : t;
}
const $X = ra.isStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
    let r;
    function s(i) {
      let l = i;
      return t && (n.setAttribute("href", l), l = n.href), n.setAttribute("href", l), {
        href: n.href,
        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
        host: n.host,
        search: n.search ? n.search.replace(/^\?/, "") : "",
        hash: n.hash ? n.hash.replace(/^#/, "") : "",
        hostname: n.hostname,
        port: n.port,
        pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
      };
    }
    return r = s(window.location.href), function(l) {
      const u = te.isString(l) ? s(l) : l;
      return u.protocol === r.protocol && u.host === r.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  function() {
    return function() {
      return !0;
    };
  }()
);
function IX(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function LX(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, i = 0, l;
  return t = t !== void 0 ? t : 1e3, function(f) {
    const h = Date.now(), d = r[i];
    l || (l = h), n[s] = f, r[s] = h;
    let m = i, v = 0;
    for (; m !== s; )
      v += n[m++], m = m % e;
    if (s = (s + 1) % e, s === i && (i = (i + 1) % e), h - l < t)
      return;
    const g = d && h - d;
    return g ? Math.round(v * 1e3 / g) : void 0;
  };
}
function q0(e, t) {
  let n = 0;
  const r = LX(50, 250);
  return (s) => {
    const i = s.loaded, l = s.lengthComputable ? s.total : void 0, u = i - n, f = r(u), h = i <= l;
    n = i;
    const d = {
      loaded: i,
      total: l,
      progress: l ? i / l : void 0,
      bytes: u,
      rate: f || void 0,
      estimated: f && l && h ? (l - i) / f : void 0,
      event: s
    };
    d[t ? "download" : "upload"] = !0, e(d);
  };
}
const RX = typeof XMLHttpRequest < "u", FX = RX && function(e) {
  return new Promise(function(n, r) {
    let s = e.data;
    const i = Fa.from(e.headers).normalize(), l = e.responseType;
    let u;
    function f() {
      e.cancelToken && e.cancelToken.unsubscribe(u), e.signal && e.signal.removeEventListener("abort", u);
    }
    let h;
    te.isFormData(s) && (ra.isStandardBrowserEnv || ra.isStandardBrowserWebWorkerEnv ? i.setContentType(!1) : i.getContentType(/^\s*multipart\/form-data/) ? te.isString(h = i.getContentType()) && i.setContentType(h.replace(/^\s*(multipart\/form-data);+/, "$1")) : i.setContentType("multipart/form-data"));
    let d = new XMLHttpRequest();
    if (e.auth) {
      const w = e.auth.username || "", E = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      i.set("Authorization", "Basic " + btoa(w + ":" + E));
    }
    const m = hE(e.baseURL, e.url);
    d.open(e.method.toUpperCase(), uE(m, e.params, e.paramsSerializer), !0), d.timeout = e.timeout;
    function v() {
      if (!d)
        return;
      const w = Fa.from(
        "getAllResponseHeaders" in d && d.getAllResponseHeaders()
      ), k = {
        data: !l || l === "text" || l === "json" ? d.responseText : d.response,
        status: d.status,
        statusText: d.statusText,
        headers: w,
        config: e,
        request: d
      };
      MX(function(D) {
        n(D), f();
      }, function(D) {
        r(D), f();
      }, k), d = null;
    }
    if ("onloadend" in d ? d.onloadend = v : d.onreadystatechange = function() {
      !d || d.readyState !== 4 || d.status === 0 && !(d.responseURL && d.responseURL.indexOf("file:") === 0) || setTimeout(v);
    }, d.onabort = function() {
      d && (r(new vt("Request aborted", vt.ECONNABORTED, e, d)), d = null);
    }, d.onerror = function() {
      r(new vt("Network Error", vt.ERR_NETWORK, e, d)), d = null;
    }, d.ontimeout = function() {
      let E = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const k = e.transitional || cE;
      e.timeoutErrorMessage && (E = e.timeoutErrorMessage), r(new vt(
        E,
        k.clarifyTimeoutError ? vt.ETIMEDOUT : vt.ECONNABORTED,
        e,
        d
      )), d = null;
    }, ra.isStandardBrowserEnv) {
      const w = (e.withCredentials || $X(m)) && e.xsrfCookieName && CX.read(e.xsrfCookieName);
      w && i.set(e.xsrfHeaderName, w);
    }
    s === void 0 && i.setContentType(null), "setRequestHeader" in d && te.forEach(i.toJSON(), function(E, k) {
      d.setRequestHeader(k, E);
    }), te.isUndefined(e.withCredentials) || (d.withCredentials = !!e.withCredentials), l && l !== "json" && (d.responseType = e.responseType), typeof e.onDownloadProgress == "function" && d.addEventListener("progress", q0(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && d.upload && d.upload.addEventListener("progress", q0(e.onUploadProgress)), (e.cancelToken || e.signal) && (u = (w) => {
      d && (r(!w || w.type ? new Il(null, e, d) : w), d.abort(), d = null);
    }, e.cancelToken && e.cancelToken.subscribe(u), e.signal && (e.signal.aborted ? u() : e.signal.addEventListener("abort", u)));
    const g = IX(m);
    if (g && ra.protocols.indexOf(g) === -1) {
      r(new vt("Unsupported protocol " + g + ":", vt.ERR_BAD_REQUEST, e));
      return;
    }
    d.send(s || null);
  });
}, Sh = {
  http: cX,
  xhr: FX
};
te.forEach(Sh, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const K0 = (e) => `- ${e}`, YX = (e) => te.isFunction(e) || e === null || e === !1, pE = {
  getAdapter: (e) => {
    e = te.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const s = {};
    for (let i = 0; i < t; i++) {
      n = e[i];
      let l;
      if (r = n, !YX(n) && (r = Sh[(l = String(n)).toLowerCase()], r === void 0))
        throw new vt(`Unknown adapter '${l}'`);
      if (r)
        break;
      s[l || "#" + i] = r;
    }
    if (!r) {
      const i = Object.entries(s).map(
        ([u, f]) => `adapter ${u} ` + (f === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let l = t ? i.length > 1 ? `since :
` + i.map(K0).join(`
`) : " " + K0(i[0]) : "as no adapter specified";
      throw new vt(
        "There is no suitable adapter to dispatch the request " + l,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: Sh
};
function Rd(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Il(null, e);
}
function Z0(e) {
  return Rd(e), e.headers = Fa.from(e.headers), e.data = Ld.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), pE.getAdapter(e.adapter || Qp.adapter)(e).then(function(r) {
    return Rd(e), r.data = Ld.call(
      e,
      e.transformResponse,
      r
    ), r.headers = Fa.from(r.headers), r;
  }, function(r) {
    return dE(r) || (Rd(e), r && r.response && (r.response.data = Ld.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = Fa.from(r.response.headers))), Promise.reject(r);
  });
}
const X0 = (e) => e instanceof Fa ? e.toJSON() : e;
function so(e, t) {
  t = t || {};
  const n = {};
  function r(h, d, m) {
    return te.isPlainObject(h) && te.isPlainObject(d) ? te.merge.call({ caseless: m }, h, d) : te.isPlainObject(d) ? te.merge({}, d) : te.isArray(d) ? d.slice() : d;
  }
  function s(h, d, m) {
    if (te.isUndefined(d)) {
      if (!te.isUndefined(h))
        return r(void 0, h, m);
    } else
      return r(h, d, m);
  }
  function i(h, d) {
    if (!te.isUndefined(d))
      return r(void 0, d);
  }
  function l(h, d) {
    if (te.isUndefined(d)) {
      if (!te.isUndefined(h))
        return r(void 0, h);
    } else
      return r(void 0, d);
  }
  function u(h, d, m) {
    if (m in t)
      return r(h, d);
    if (m in e)
      return r(void 0, h);
  }
  const f = {
    url: i,
    method: i,
    data: i,
    baseURL: l,
    transformRequest: l,
    transformResponse: l,
    paramsSerializer: l,
    timeout: l,
    timeoutMessage: l,
    withCredentials: l,
    adapter: l,
    responseType: l,
    xsrfCookieName: l,
    xsrfHeaderName: l,
    onUploadProgress: l,
    onDownloadProgress: l,
    decompress: l,
    maxContentLength: l,
    maxBodyLength: l,
    beforeRedirect: l,
    transport: l,
    httpAgent: l,
    httpsAgent: l,
    cancelToken: l,
    socketPath: l,
    responseEncoding: l,
    validateStatus: u,
    headers: (h, d) => s(X0(h), X0(d), !0)
  };
  return te.forEach(Object.keys(Object.assign({}, e, t)), function(d) {
    const m = f[d] || s, v = m(e[d], t[d], d);
    te.isUndefined(v) && m !== u || (n[d] = v);
  }), n;
}
const mE = "1.5.1", em = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  em[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const J0 = {};
em.transitional = function(t, n, r) {
  function s(i, l) {
    return "[Axios v" + mE + "] Transitional option '" + i + "'" + l + (r ? ". " + r : "");
  }
  return (i, l, u) => {
    if (t === !1)
      throw new vt(
        s(l, " has been removed" + (n ? " in " + n : "")),
        vt.ERR_DEPRECATED
      );
    return n && !J0[l] && (J0[l] = !0, console.warn(
      s(
        l,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(i, l, u) : !0;
  };
};
function WX(e, t, n) {
  if (typeof e != "object")
    throw new vt("options must be an object", vt.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const i = r[s], l = t[i];
    if (l) {
      const u = e[i], f = u === void 0 || l(u, i, e);
      if (f !== !0)
        throw new vt("option " + i + " must be " + f, vt.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new vt("Unknown option " + i, vt.ERR_BAD_OPTION);
  }
}
const kh = {
  assertOptions: WX,
  validators: em
}, vs = kh.validators;
class Dc {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new G0(),
      response: new G0()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = so(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: i } = n;
    r !== void 0 && kh.assertOptions(r, {
      silentJSONParsing: vs.transitional(vs.boolean),
      forcedJSONParsing: vs.transitional(vs.boolean),
      clarifyTimeoutError: vs.transitional(vs.boolean)
    }, !1), s != null && (te.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : kh.assertOptions(s, {
      encode: vs.function,
      serialize: vs.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let l = i && te.merge(
      i.common,
      i[n.method]
    );
    i && te.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (w) => {
        delete i[w];
      }
    ), n.headers = Fa.concat(l, i);
    const u = [];
    let f = !0;
    this.interceptors.request.forEach(function(E) {
      typeof E.runWhen == "function" && E.runWhen(n) === !1 || (f = f && E.synchronous, u.unshift(E.fulfilled, E.rejected));
    });
    const h = [];
    this.interceptors.response.forEach(function(E) {
      h.push(E.fulfilled, E.rejected);
    });
    let d, m = 0, v;
    if (!f) {
      const w = [Z0.bind(this), void 0];
      for (w.unshift.apply(w, u), w.push.apply(w, h), v = w.length, d = Promise.resolve(n); m < v; )
        d = d.then(w[m++], w[m++]);
      return d;
    }
    v = u.length;
    let g = n;
    for (m = 0; m < v; ) {
      const w = u[m++], E = u[m++];
      try {
        g = w(g);
      } catch (k) {
        E.call(this, k);
        break;
      }
    }
    try {
      d = Z0.call(this, g);
    } catch (w) {
      return Promise.reject(w);
    }
    for (m = 0, v = h.length; m < v; )
      d = d.then(h[m++], h[m++]);
    return d;
  }
  getUri(t) {
    t = so(this.defaults, t);
    const n = hE(t.baseURL, t.url);
    return uE(n, t.params, t.paramsSerializer);
  }
}
te.forEach(["delete", "get", "head", "options"], function(t) {
  Dc.prototype[t] = function(n, r) {
    return this.request(so(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
te.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(i, l, u) {
      return this.request(so(u || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: l
      }));
    };
  }
  Dc.prototype[t] = n(), Dc.prototype[t + "Form"] = n(!0);
});
const qu = Dc;
class tm {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(i) {
      n = i;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners)
        return;
      let i = r._listeners.length;
      for (; i-- > 0; )
        r._listeners[i](s);
      r._listeners = null;
    }), this.promise.then = (s) => {
      let i;
      const l = new Promise((u) => {
        r.subscribe(u), i = u;
      }).then(s);
      return l.cancel = function() {
        r.unsubscribe(i);
      }, l;
    }, t(function(i, l, u) {
      r.reason || (r.reason = new Il(i, l, u), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new tm(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
}
const UX = tm;
function BX(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function HX(e) {
  return te.isObject(e) && e.isAxiosError === !0;
}
const Th = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(Th).forEach(([e, t]) => {
  Th[t] = e;
});
const VX = Th;
function vE(e) {
  const t = new qu(e), n = Xw(qu.prototype.request, t);
  return te.extend(n, qu.prototype, t, { allOwnKeys: !0 }), te.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return vE(so(e, s));
  }, n;
}
const an = vE(Qp);
an.Axios = qu;
an.CanceledError = Il;
an.CancelToken = UX;
an.isCancel = dE;
an.VERSION = mE;
an.toFormData = nf;
an.AxiosError = vt;
an.Cancel = an.CanceledError;
an.all = function(t) {
  return Promise.all(t);
};
an.spread = BX;
an.isAxiosError = HX;
an.mergeConfig = so;
an.AxiosHeaders = Fa;
an.formToJSON = (e) => fE(te.isHTMLForm(e) ? new FormData(e) : e);
an.getAdapter = pE.getAdapter;
an.HttpStatusCode = VX;
an.default = an;
const jX = an;
function GX(e, t) {
  return F(), z("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    j("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",
      fill: "currentColor"
    })
  ]);
}
const zX = /* @__PURE__ */ Le({
  __name: "Checkbox",
  props: {
    defaultChecked: { type: Boolean },
    checked: { type: [Boolean, String] },
    disabled: { type: Boolean },
    required: { type: Boolean },
    name: {},
    value: {},
    id: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:checked"],
  setup(e, { emit: t }) {
    const r = fo(e, t);
    return (s, i) => (F(), tt(y(gN), nn(y(r), {
      class: y(M1)(
        "peer h-4 w-4 shrink-0 rounded-sm border border-slate-200 border-slate-900 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-slate-900 data-[state=checked]:text-slate-50 dark:border-slate-800 dark:border-slate-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 dark:data-[state=checked]:bg-slate-50 dark:data-[state=checked]:text-slate-900",
        s.$attrs.class ?? ""
      )
    }), {
      default: We(() => [
        Pe(y(_N), { class: "flex h-full w-full items-center justify-center text-current" }, {
          default: We(() => [
            Pe(y(GX), { class: "h-4 w-4" })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), qX = { class: "flex items-center flex-col justify-center py-2" }, KX = { class: "flex justify-start gap-2 w-full items-center z-[2]" }, ZX = {
  key: 0,
  class: "flex-shrink-0 cursor-pointer pl-4"
}, XX = {
  key: 1,
  class: "w-6"
}, JX = ["for"], QX = {
  key: 0,
  class: "flex flex-col pl-6 w-full pt-2"
}, eJ = /* @__PURE__ */ Le({
  __name: "EventActionTargetItem",
  props: {
    target: {},
    targets: {}
  },
  setup(e) {
    const t = Tt("addTarget"), n = J(!0);
    return (r, s) => {
      var i, l, u, f;
      return F(), z("div", qX, [
        j("div", {
          class: "item flex-1 flex gap-2 w-full items-center relative pr-4",
          onClick: s[1] || (s[1] = (h) => {
            var d;
            return (d = r.target) != null && d.children ? n.value = !y(n) : null;
          })
        }, [
          j("div", KX, [
            (i = r.target) != null && i.children ? (F(), z("div", ZX, [
              Pe(y(C1), {
                class: it(["text-dark-3 transition-all", { " -rotate-90": !y(n) }]),
                size: 16
              }, null, 8, ["class"])
            ])) : (F(), z("div", XX)),
            j("label", {
              for: `target-${r.target.id}`,
              class: it(["flex-1 cursor-pointer flex items-center gap-2", [((l = r.target) != null && l.children, "p3-r")]])
            }, [
              br(j("div", {
                class: it(["w-2 h-2 rounded-full flex-shrink-0", [r.target.enabled ? "bg-success-green-4" : "bg-red-4"]])
              }, null, 2), [
                [iy, r.target.hasOwnProperty("enabled")]
              ]),
              j("span", null, ke(r.target.name), 1)
            ], 10, JX)
          ]),
          (u = r.target) != null && u.children ? Te("", !0) : (F(), tt(y(zX), {
            key: 0,
            class: "rounded data-[state=checked]:bg-true-blue-3 border-true-blue-4 z-[2]",
            id: `target-${r.target.id}`,
            checked: r.targets.some((h) => h === r.target.id),
            "onUpdate:checked": s[0] || (s[0] = (h) => y(t)(r.target))
          }, null, 8, ["id", "checked"]))
        ]),
        (f = r.target) != null && f.children && y(n) ? (F(), z("div", QX, [
          (F(!0), z(Xe, null, Lt(r.target.children, (h) => (F(), tt(gE, {
            target: h,
            targets: r.targets
          }, null, 8, ["target", "targets"]))), 256))
        ])) : Te("", !0)
      ]);
    };
  }
});
const gE = /* @__PURE__ */ Dl(eJ, [["__scopeId", "data-v-9fc2c4e1"]]), tJ = { class: "flex flex-col gap-6" }, nJ = { class: "flex flex-col gap-6 pt-2" }, rJ = { class: "flex justify-start items-center gap-4" }, aJ = { class: "relative w-fit" }, sJ = { class: "p3-r text-dark-4" }, iJ = ["value"], oJ = { class: "shadow-01 flex items-center py-1 px-2 rounded p3-r text-dark-3" }, lJ = ["onClick"], uJ = {
  key: 0,
  class: "text-dark-5 mx-1"
}, cJ = { class: "flex gap-6" }, fJ = { class: "p3-r text-dark-4" }, dJ = {
  value: "",
  disabled: ""
}, hJ = ["value"], pJ = { class: "flex gap-4" }, mJ = { class: "p3-r text-dark-4" }, vJ = {
  value: "",
  disabled: ""
}, gJ = ["value"], _J = {
  key: 0,
  class: "flex relative"
}, yJ = ["value"], bJ = {
  key: 0,
  class: "sticky top-0 left-0 pt-4 right-0 items-start bottom-0 w-full h-full flex justify-center bg-dark-3 bg-opacity-50 z-[2]"
}, wJ = { class: "sticky flex flex-col max-h-[95%] bg-light-5 rounded-xs shadow-01 w-4/5 py-4 px-10 h-fit top-[3%]" }, EJ = { class: "flex justify-between" }, OJ = { class: "p2-b flex justify-center mb-3 text-dark-2 mr-auto" }, DJ = {
  key: 0,
  class: "flex gap-4 w-full empty:hidden mb-2 items-center"
}, xJ = { class: "p3-r text-dark-4" }, SJ = ["for"], kJ = ["onUpdate:modelValue", "id"], TJ = { class: "w-2 h-2 rounded-full bg-success-green-4" }, AJ = {
  key: 1,
  class: "flex justify-end gap-4 items-center"
}, MJ = { class: "flex w-fit items-center gap-1 justify-end p3-r text-true-blue-3 mr-4 hover:text-true-blue-2" }, CJ = {
  key: 2,
  class: "h-4 w-4 mt-4 mx-auto animate-spin rounded-full border-2 border-solid border-blue-400 border-t-transparent"
}, PJ = {
  key: 3,
  class: "flex flex-col gap-4 flex-1 overflow-y-auto scroll-shadow"
}, NJ = {
  key: 0,
  class: "flex flex-col items-center justify-center gap-4 mt-4"
}, $J = { class: "p2-b text-dark-3" }, IJ = {
  key: 4,
  class: "mx-auto flex w-fit items-center gap-4 mt-8"
}, LJ = { class: "flex flex-col gap-6" }, RJ = { class: "p3-r text-dark-4" }, FJ = {
  value: "",
  disabled: ""
}, YJ = ["value"], WJ = { class: "flex justify-start gap-4 items-center" }, UJ = { class: "p3-r text-dark-4" }, BJ = { class: "shadow-01 flex items-center py-1 px-2 rounded p3-r text-dark-3" }, HJ = ["onClick"], VJ = {
  key: 0,
  class: "text-dark-5 mx-1"
}, jJ = {
  key: 0,
  class: "p3-r text-dark-4"
}, GJ = { class: "flex gap-4 w-full" }, zJ = { class: "flex justify-start items-center gap-4" }, qJ = { class: "p3-r text-dark-4 flex-shrink-0" }, KJ = { class: "flex gap-10 w-full" }, ZJ = { class: "flex gap-4 flex-1" }, XJ = { class: "shadow-01 flex items-center py-1 px-2 rounded p3-r text-dark-3" }, JJ = ["onClick"], QJ = {
  key: 0,
  class: "text-dark-5 mx-1"
}, eQ = {
  key: 0,
  class: "flex items-center gap-1 w-24"
}, tQ = { class: "p3-r text-dark-4" }, nQ = {
  key: 0,
  class: "flex justify-center gap-1 flex-col"
}, rQ = { class: "flex gap-4 items-center" }, aQ = { class: "p3-r text-dark-4" }, sQ = { class: "flex items-center gap-1" }, iQ = {
  key: 1,
  class: "flex gap-4 items-center w-28"
}, gr = "", oQ = /* @__PURE__ */ Le({
  __name: "EventAction",
  setup(e) {
    const { t } = fa.global, n = Tt("eventData"), r = J(n.value.action ?? {}), s = J(!!Object.keys(r.value).length), i = J(!1);
    ze(i, (le) => {
      var pe, Oe, ge, ne, be;
      (pe = r.value.params) != null && pe.limit || (ge = (Oe = r.value) == null ? void 0 : Oe.params) == null || delete ge.limit, le || (be = (ne = r.value) == null ? void 0 : ne.params) == null || delete be.limit;
    }), Gn(() => {
      var le, pe, Oe, ge, ne;
      ((le = r.value) == null ? void 0 : le.action) == Fe.SetNewBudget || ((pe = r.value) == null ? void 0 : pe.action) == Fe.IncreaseBudget || ((Oe = r.value) == null ? void 0 : Oe.action) == Fe.LowerBudget || delete r.value.params, i.value = !isNaN((ne = (ge = r.value) == null ? void 0 : ge.params) == null ? void 0 : ne.limit);
    }), ze(
      r,
      (le) => {
        n.value.action = le;
      },
      { deep: !0 }
    );
    const l = Y(() => v.value == ln.Google ? Rr : Bn), u = {
      [ln.Google]: {
        [Rr.Campaign]: {
          SetNewBudget: Fe.SetNewBudget,
          IncreaseBudget: Fe.IncreaseBudget,
          LowerBudget: Fe.LowerBudget,
          OpenProject: Fe.OpenProject,
          SuspendProject: Fe.SuspendProject
        },
        [Rr.AdGroup]: {
          OpenProject: Fe.OpenProject,
          SuspendProject: Fe.SuspendProject
        },
        [Rr.AdTag]: {
          OpenProject: Fe.OpenProject,
          SuspendProject: Fe.SuspendProject
        }
        // [AdLevelTypeGoogle.Ad]: {
        //   OpenProject: ActionType.OpenProject,
        //   SuspendProject: ActionType.SuspendProject,
        // },
      },
      [ln.Facebook]: {
        [Bn.Campaign]: {
          SetNewBudget: Fe.SetNewBudget,
          IncreaseBudget: Fe.IncreaseBudget,
          LowerBudget: Fe.LowerBudget,
          OpenProject: Fe.OpenProject,
          SuspendProject: Fe.SuspendProject
        },
        [Bn.AdGroup]: {
          SetNewBudget: Fe.SetNewBudget,
          IncreaseBudget: Fe.IncreaseBudget,
          LowerBudget: Fe.LowerBudget,
          OpenProject: Fe.OpenProject,
          SuspendProject: Fe.SuspendProject
        },
        [Bn.AdTag]: {
          OpenProject: Fe.OpenProject,
          SuspendProject: Fe.SuspendProject
        },
        [Bn.Ad]: {
          OpenProject: Fe.OpenProject,
          SuspendProject: Fe.SuspendProject
        }
      }
    }, f = Y(() => {
      var Oe, ge;
      const le = (Oe = r.value) == null ? void 0 : Oe.client, pe = (ge = r.value) == null ? void 0 : ge.adLevel;
      if (le && pe) {
        const ne = u[le];
        if (ne) {
          const be = ne[pe];
          if (be)
            return be;
        }
      }
      return {};
    }), h = {
      [ln.Google]: {
        [Rr.Campaign]: {
          [Fe.SetNewBudget]: [st.Value],
          [Fe.IncreaseBudget]: [st.Percentage, st.Value],
          [Fe.LowerBudget]: [st.Percentage, st.Value],
          [Fe.OpenProject]: [st.Percentage, st.Value],
          [Fe.SuspendProject]: [st.Percentage, st.Value]
        },
        [Rr.AdGroup]: {
          [Fe.SuspendProject]: [st.Percentage, st.Value]
        },
        [Rr.AdTag]: {
          [Fe.SuspendProject]: [st.Percentage, st.Value]
        }
        // [AdLevelTypeGoogle.Ad]: {
        //   [ActionType.SuspendProject]: [ValueType.Percentage, ValueType.Value],
        // },
      },
      [ln.Facebook]: {
        [Bn.Campaign]: {
          [Fe.SetNewBudget]: [st.Value],
          [Fe.IncreaseBudget]: [st.Percentage, st.Value],
          [Fe.LowerBudget]: [st.Percentage, st.Value],
          [Fe.OpenProject]: [st.Percentage, st.Value],
          [Fe.SuspendProject]: [st.Percentage, st.Value]
        },
        [Bn.AdGroup]: {
          [Fe.SetNewBudget]: [st.Value],
          [Fe.IncreaseBudget]: [st.Percentage, st.Value],
          [Fe.LowerBudget]: [st.Percentage, st.Value],
          [Fe.OpenProject]: [st.Percentage, st.Value],
          [Fe.SuspendProject]: [st.Percentage, st.Value]
        },
        [Bn.AdTag]: {
          [Fe.SuspendProject]: [st.Percentage, st.Value]
        },
        [Bn.Ad]: {
          [Fe.SuspendProject]: [st.Percentage, st.Value]
        }
      }
    }, d = Y(() => {
      var ge, ne, be;
      const le = (ge = r.value) == null ? void 0 : ge.client, pe = (ne = r.value) == null ? void 0 : ne.adLevel, Oe = (be = r.value) == null ? void 0 : be.action;
      if (le && pe && Oe) {
        const Be = h[le];
        if (Be) {
          const N = Be[pe];
          if (N) {
            const A = N[Oe];
            if (A)
              return A;
          }
        }
      }
      return [st.Percentage, st.Value];
    }), m = {
      target: {
        value: ""
      }
    }, v = Y(() => r.value.client ? `${r.value.client}` : ""), g = (le) => {
      r.value.client = Number(le), delete r.value.target, E(m);
    }, w = Y(() => r.value.adLevel ? r.value.adLevel : ""), E = (le) => {
      r.value.adLevel = Number(le.target.value), delete r.value.action, delete r.value.target, b(m);
    }, k = Y(() => r.value.targetType ? r.value.targetType : ""), b = (le) => {
      r.value.targetType = Number(le.target.value);
    }, D = Y(() => r.value.action ? r.value.action : ""), T = (le) => {
      r.value.action = Number(le.target.value);
    }, x = Y(() => {
      var le;
      return (le = r.value) != null && le.params || (r.value.params = {}), r.value.params.budgetType ? r.value.params.budgetType : "";
    }), C = (le) => r.value.params.budgetType = le, M = Y(() => {
      var le;
      return (le = r.value) != null && le.params || (r.value.params = {}), r.value.params.valueType ? r.value.params.valueType : "";
    }), I = (le) => {
      r.value.params.valueType = le;
    }, R = J(!1);
    aa("addTarget", (le) => {
      var Oe;
      (Oe = r.value) != null && Oe.target || (r.value.target = []);
      const pe = r.value.target.findIndex(
        (ge) => ge === le.id
      );
      pe === -1 ? r.value.target.push(le.id) : r.value.target.splice(pe, 1);
    });
    const $ = J(), q = async () => {
      const le = await jX({
        method: "get",
        url: `${XA()}/heybear/api/automation/platform-target?client=${v.value}&adLevel=${w.value}`,
        withCredentials: !0,
        headers: {
          Authorization: JA()
        }
      });
      $.value = le.data.data, Me.value = mt($.value);
    }, W = J(!1), se = Y(() => {
      const le = Ae.value.trim().toLowerCase(), pe = (ne) => {
        let be = [];
        for (const Be of ne) {
          let N = !1;
          if (Me.value.forEach((A) => {
            A.label == Be.type && A.status == Be.enabled && !Be.enabled && (N = !0);
          }), !N && ((!Be.children || Be.children.length === 0) && be.push(Be), Be.children && Be.children.length > 0)) {
            const A = pe(Be.children);
            A.length > 0 && be.push({
              id: Be.id,
              name: Be.name,
              children: A,
              enabled: Be.enabled
            });
          }
        }
        return be;
      }, Oe = [];
      for (const ne of $.value)
        if (ne.children) {
          const be = pe(ne.children);
          be.length > 0 && Oe.push({
            id: ne.id,
            name: ne.name,
            type: ne.type,
            children: be
          });
        } else
          Oe.push({
            id: ne.id,
            name: ne.name,
            type: ne.type
          });
      function ge(ne, be) {
        Ue.value = 0;
        function Be(G) {
          !G.children || G.children.length === 0 ? Ue.value++ : G.children.forEach((he) => Be(he));
        }
        function N(G, he) {
          const Ee = { ...G }, qe = Ee.children;
          if (Ee.name.toLowerCase().includes(he)) {
            const Ht = (qe || []).filter(
              (Ot) => Ot.name.toLowerCase().includes(he)
            );
            return Ht.length > 0 && (Ee.children = Ht), Ee;
          } else if (qe) {
            const Ht = qe.map((Ot) => N(Ot, he)).filter(Boolean);
            if (Ht.length > 0)
              return Ee.children = Ht, Ee;
          }
          return null;
        }
        const A = ne.map((G) => N(G, be)).filter(Boolean);
        return A.forEach((G) => Be(G)), A;
      }
      return ge(Oe, le);
    }), me = () => {
      r.value.target = [];
    }, ce = async () => {
      R.value = !0, W.value = !0, await q(), W.value = !1;
    }, ye = Tt("lockScroll");
    ze(R, (le) => {
      ye.value = le, le || (Ae.value = "");
    });
    const Ae = J(""), Ue = J(), Re = Y(() => {
      var le;
      return (le = r.value) != null && le.target || (r.value.target = []), r.value.target.length > 0 && r.value.target.length == Ue.value;
    }), re = () => {
      var Oe;
      const le = se.value, pe = (ge) => {
        for (const ne of ge)
          ne.children && ne.children.length > 0 ? pe(ne.children) : r.value.target.push(ne.id);
      };
      (Oe = r.value) != null && Oe.target || (r.value.target = []), r.value.target.length ? r.value.target = [] : (r.value.target = [], pe(le));
    }, Me = J([]);
    function mt(le) {
      const pe = [];
      function Oe(ge, ne) {
        if (ge.type !== 1 && ge.type !== 5 && (pe[ne - 1] || (pe[ne - 1] = {
          label: ge.type,
          status: !1
        }), pe[ne - 1].status = !0), ge.children && ge.children.length > 0)
          for (const be of ge.children)
            Oe(be, ne + 1);
      }
      return le.forEach((ge) => {
        Oe(ge, 1);
      }), pe.filter((ge) => ge !== void 0);
    }
    const At = J(!1), Se = () => {
      s.value = !1, r.value = {}, rr(() => {
        delete n.value.action;
      });
    }, nt = Y(() => {
      const le = v.value, pe = r.value.adLevel, Oe = x.value;
      if (Oe === "")
        return { show: !1 };
      const ge = le === ln.Google && pe === Rr.Campaign, ne = le === ln.Facebook && pe === Bn.Campaign, be = le === ln.Facebook && pe === Bn.AdGroup, Be = ge || ne || be, N = Oe === Gs.DailyBudget ? t("日預算") : t("總預算"), A = `${ln[le]}${l.value[pe]}`, G = Be ? `${t("若{clientAndAdLevel}設定為{paramsBudgetTypeValue}，則不會變更", {
        clientAndAdLevel: A,
        paramsBudgetTypeValue: Oe !== gr ? N : ""
      })}` : "";
      return { show: Be, msg: G };
    });
    return Vr(() => {
      At.value = !0;
    }), (le, pe) => y(s) ? (F(), tt(ju, {
      key: 1,
      title: y(t)("動作"),
      icon: "PhNavigationArrow",
      id: "action"
    }, {
      default: We(() => {
        var Oe, ge;
        return [
          j("div", tJ, [
            j("div", nJ, [
              j("div", {
                class: "cursor-pointer text-dark-4 absolute bottom-4 right-3 hover:text-dark-3 transition-all p3-r",
                onClick: Se
              }, [
                Pe(y(jI), {
                  size: "18",
                  weight: "bold"
                })
              ]),
              j("label", rJ, [
                j("div", aJ, [
                  j("span", sJ, ke(y(t)("平台")), 1),
                  j("input", {
                    type: "text",
                    class: "opacity-0 absolute left-0 top-0 pointer-events-none",
                    required: "",
                    value: y(v)
                  }, null, 8, iJ)
                ]),
                j("div", oJ, [
                  (F(!0), z(Xe, null, Lt(y(ln), (ne, be, Be) => (F(), z("div", {
                    class: "flex",
                    key: be
                  }, [
                    Number.isInteger(ne) ? Te("", !0) : (F(), z(Xe, { key: 0 }, [
                      j("span", {
                        class: it(["cursor-pointer hover:drop-shadow-md", [
                          { "!text-dark-5 p3-r": y(v) == gr },
                          y(v) === be ? "text-true-blue-3 drop-shadow-sm p3-b" : "text-dark-5 "
                        ]]),
                        onClick: (N) => g(be)
                      }, ke(ne), 11, lJ),
                      Be < Object.keys(y(ln)).filter((N) => isNaN(Number(N))).length - 1 ? (F(), z("div", uJ, " | ")) : Te("", !0)
                    ], 64))
                  ]))), 128))
                ])
              ]),
              j("div", cJ, [
                j("label", {
                  class: it(["flex justify-start items-center gap-4", { "pointer-events-none": y(v) == gr }])
                }, [
                  j("span", fJ, ke(y(t)("層級")), 1),
                  br(j("select", {
                    class: it(["p3-b text-true-blue-3 min-w-[5rem] w-20 flex cursor-pointer items-center justify-center gap-4 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50", [y(w) != gr ? "!w-fit" : "!text-dark-5 !p3-r"]]),
                    "onUpdate:modelValue": pe[1] || (pe[1] = (ne) => un(w) ? w.value = ne : null),
                    onChange: E,
                    required: ""
                  }, [
                    j("option", dJ, ke(y(t)("請選擇")), 1),
                    (F(!0), z(Xe, null, Lt(y(l), (ne, be) => (F(), z(Xe, { key: be }, [
                      !Number.isInteger(ne) && y(v) != gr ? (F(), z("option", {
                        key: 0,
                        value: be
                      }, ke(y(t)(`${y(ln)[y(v)]}${ne}`)), 9, hJ)) : Te("", !0)
                    ], 64))), 128))
                  ], 34), [
                    [Ui, y(w)]
                  ])
                ], 2),
                j("div", pJ, [
                  j("label", {
                    class: it(["flex justify-start items-center gap-4", { "pointer-events-none": y(w) == gr }])
                  }, [
                    j("span", mJ, ke(y(t)("項目")), 1),
                    br(j("select", {
                      class: it(["p3-b text-true-blue-3 min-w-[5rem] w-20 flex cursor-pointer items-center justify-center gap-4 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50", [
                        y(k) != gr ? "!w-fit" : "!text-dark-5 !p3-r"
                      ]]),
                      "onUpdate:modelValue": pe[2] || (pe[2] = (ne) => un(k) ? k.value = ne : null),
                      onChange: b,
                      required: ""
                    }, [
                      j("option", vJ, ke(y(t)("請選擇")), 1),
                      (F(!0), z(Xe, null, Lt(y(Os), (ne, be) => (F(), z(Xe, { key: be }, [
                        Number.isInteger(ne) ? Te("", !0) : (F(), z("option", {
                          key: 0,
                          value: be
                        }, ke(y(t)(ne)), 9, gJ))
                      ], 64))), 128))
                    ], 34), [
                      [Ui, y(k)]
                    ])
                  ], 2),
                  y(k) === y(Os).ForID ? (F(), z("div", _J, [
                    y(k) === y(Os).ForID ? (F(), z("span", {
                      key: 0,
                      class: it(["p3-b w-fit flex cursor-pointer items-center justify-center z-[2]", [
                        y(r).target && y(r).target.length ? " text-true-blue-3" : "text-red-2 hover:text-red-1"
                      ]]),
                      onClick: ce
                    }, ke(y(r).target && y(r).target.length ? `${y(t)("已選{count}個項目", {
                      count: y(r).target.length
                    })}` : y(t)("未選擇")), 3)) : Te("", !0),
                    j("input", {
                      type: "text",
                      class: "opacity-0 absolute left-0 top-0",
                      required: "",
                      value: (Oe = y(r)) != null && Oe.target && (ge = y(r)) != null && ge.target.length ? "123" : ""
                    }, null, 8, yJ)
                  ])) : Te("", !0)
                ])
              ])
            ]),
            y(At) ? (F(), tt(ay, {
              key: 0,
              to: "#editor-container-outer"
            }, [
              y(R) ? (F(), z("div", bJ, [
                j("div", wJ, [
                  j("div", EJ, [
                    j("span", OJ, ke(y(t)("請選擇目標")), 1),
                    Pe(y(ah), {
                      class: "text-dark-3 cursor-pointer hover:text-dark-2 absolute top-4 right-4",
                      weight: "bold",
                      onClick: pe[3] || (pe[3] = (ne) => R.value = !1)
                    })
                  ]),
                  Pe(ol, {
                    modelValue: y(Ae),
                    "onUpdate:modelValue": pe[4] || (pe[4] = (ne) => un(Ae) ? Ae.value = ne : null),
                    placeholder: y(t)("搜尋"),
                    class: "w-full mr-auto mb-4"
                  }, null, 8, ["modelValue", "placeholder"]),
                  !y(W) && y(Me).length ? (F(), z("div", DJ, [
                    j("span", xJ, ke(y(t)("篩選")), 1),
                    (F(!0), z(Xe, null, Lt(y(Me), (ne) => (F(), z("label", {
                      class: "p3-r flex cursor-pointer items-center gap-1 rounded-md bg-light-3 px-2 py-0.5 text-dark-4 hover:shadow-01",
                      key: ne.label,
                      for: ne.label
                    }, [
                      br(j("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": (be) => ne.status = be,
                        id: ne.label,
                        class: "hidden",
                        onChange: me
                      }, null, 40, kJ), [
                        [sy, ne.status]
                      ]),
                      br(j("div", TJ, null, 512), [
                        [iy, !ne.status]
                      ]),
                      li(" " + ke(y(t)(
                        `${y(ln)[y(v)]}${ne.status ? "On" : "Off"}${ne.label}`
                      )), 1)
                    ], 8, SJ))), 128))
                  ])) : Te("", !0),
                  y(W) ? Te("", !0) : (F(), z("div", AJ, [
                    j("div", MJ, [
                      j("label", {
                        class: "cursor-pointer",
                        onClick: re
                      }, ke(y(Re) ? y(t)("取消全選") : y(t)("全選")), 1)
                    ])
                  ])),
                  y(W) ? (F(), z("div", CJ)) : (F(), z("div", PJ, [
                    y(se).length ? (F(!0), z(Xe, { key: 1 }, Lt(y(se), (ne) => {
                      var be;
                      return F(), tt(gE, {
                        key: ne.id,
                        target: ne,
                        targets: ((be = y(r)) == null ? void 0 : be.target) ?? []
                      }, null, 8, ["target", "targets"]);
                    }), 128)) : (F(), z("div", NJ, [
                      Pe(y(OI), {
                        size: 48,
                        class: "text-dark-4"
                      }),
                      j("p", $J, ke(y(t)("No Data")), 1)
                    ]))
                  ])),
                  y(W) ? Te("", !0) : (F(), z("div", IJ, [
                    j("div", {
                      class: "p3-r flex cursor-pointer items-center gap-1 rounded bg-true-blue-2 border border-transparent px-4 py-1.5 text-light-5 hover:bg-true-blue-3 transition-all",
                      onClick: pe[5] || (pe[5] = (ne) => R.value = !1)
                    }, ke(y(t)("確定")), 1)
                  ]))
                ])
              ])) : Te("", !0)
            ])) : Te("", !0),
            j("div", LJ, [
              j("label", {
                class: it(["flex justify-start items-center gap-4", { "pointer-events-none": y(k) == gr }])
              }, [
                j("span", RJ, ke(y(t)("執行")), 1),
                br(j("select", {
                  class: it(["p3-b text-true-blue-3 min-w-[5rem] w-20 flex cursor-pointer items-center justify-center gap-4 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50", [
                    y(D) != gr ? "!w-fit" : "!text-dark-5 !p3-r"
                  ]]),
                  "onUpdate:modelValue": pe[6] || (pe[6] = (ne) => un(D) ? D.value = ne : null),
                  onChange: T,
                  required: ""
                }, [
                  j("option", FJ, ke(y(t)("請選擇")), 1),
                  (F(!0), z(Xe, null, Lt(y(f), (ne, be) => (F(), z("option", {
                    key: be,
                    value: ne
                  }, ke(y(t)(be)), 9, YJ))), 128))
                ], 34), [
                  [Ui, y(D)]
                ])
              ], 2),
              y(r).action == y(Fe).SetNewBudget || y(r).action == y(Fe).IncreaseBudget || y(r).action == y(Fe).LowerBudget ? (F(), z(Xe, { key: 0 }, [
                j("label", WJ, [
                  j("span", UJ, ke(y(t)("類型")), 1),
                  j("div", BJ, [
                    (F(!0), z(Xe, null, Lt(y(Gs), (ne, be, Be) => (F(), z("div", {
                      class: "flex",
                      key: be
                    }, [
                      Number.isInteger(ne) ? Te("", !0) : (F(), z(Xe, { key: 0 }, [
                        j("span", {
                          class: it(["cursor-pointer hover:drop-shadow-md", [
                            { "!text-dark-5 p3-r": y(x) == gr },
                            y(x) == y(Gs)[be] ? "text-true-blue-3 drop-shadow-sm p3-b" : "text-dark-5 "
                          ]]),
                          onClick: (N) => C(y(Gs)[be])
                        }, ke(y(t)(ne)), 11, HJ),
                        Be < Object.keys(y(Gs)).filter(
                          (N) => isNaN(Number(N))
                        ).length - 1 ? (F(), z("div", VJ, " | ")) : Te("", !0)
                      ], 64))
                    ]))), 128))
                  ]),
                  y(nt).show ? (F(), z("span", jJ, ke(y(nt).msg), 1)) : Te("", !0)
                ]),
                j("div", GJ, [
                  j("div", zJ, [
                    j("span", qJ, ke(y(t)("調整")), 1),
                    j("div", KJ, [
                      j("div", ZJ, [
                        j("div", XJ, [
                          (F(!0), z(Xe, null, Lt(y(d), (ne, be) => (F(), z("div", {
                            class: "flex",
                            key: ne
                          }, [
                            Number.isInteger(ne) ? Te("", !0) : (F(), z(Xe, { key: 0 }, [
                              j("span", {
                                class: it(["cursor-pointer hover:drop-shadow-md", [
                                  {
                                    "!text-dark-5 p3-r": y(M) == gr
                                  },
                                  y(M) == ne ? "text-true-blue-3 drop-shadow-sm p3-b" : "text-dark-5 "
                                ]]),
                                onClick: (Be) => I(ne)
                              }, ke(y(t)(`action${ne}`)), 11, JJ),
                              be < y(d).length - 1 ? (F(), z("div", QJ, " | ")) : Te("", !0)
                            ], 64))
                          ]))), 128))
                        ]),
                        y(M) != gr ? (F(), z("label", eQ, [
                          Pe(ol, {
                            modelValue: y(r).params.value,
                            "onUpdate:modelValue": pe[7] || (pe[7] = (ne) => y(r).params.value = ne),
                            inputClass: "text-true-blue-3",
                            type: "number",
                            required: !0
                          }, null, 8, ["modelValue"]),
                          j("span", tQ, ke(y(r).params.valueType === y(st).Percentage ? "%" : y(t)("元")), 1)
                        ])) : Te("", !0)
                      ])
                    ])
                  ]),
                  y(r).action == y(Fe).IncreaseBudget || y(r).action == y(Fe).LowerBudget ? (F(), z("div", nQ, [
                    j("div", rQ, [
                      j("span", aQ, ke(y(r).action == y(Fe).IncreaseBudget ? y(t)("預算上限") : y(t)("預算下限")), 1),
                      j("div", sQ, [
                        y(i) ? Te("", !0) : (F(), z("div", {
                          key: 0,
                          class: it(["p3-b text-true-blue-3 w-fit flex cursor-pointer items-center justify-center gap-4 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50", { "!text-dark-5 !p3-r": !y(i) }]),
                          onClick: pe[8] || (pe[8] = (ne) => i.value = !0)
                        }, ke(y(t)("無")), 3)),
                        y(i) ? (F(), z("div", iQ, [
                          Pe(ol, {
                            modelValue: y(r).params.limit,
                            "onUpdate:modelValue": pe[9] || (pe[9] = (ne) => y(r).params.limit = ne),
                            inputClass: "text-true-blue-3",
                            type: "number",
                            required: !0
                          }, null, 8, ["modelValue"])
                        ])) : Te("", !0),
                        y(i) ? (F(), tt(y(ah), {
                          key: 2,
                          onClick: pe[10] || (pe[10] = (ne) => i.value = !1),
                          weight: "bold",
                          class: "text-dark-4 hover:text-dark-3 p3-b cursor-pointer"
                        })) : Te("", !0)
                      ])
                    ])
                  ])) : Te("", !0)
                ])
              ], 64)) : Te("", !0)
            ])
          ])
        ];
      }),
      _: 1
    }, 8, ["title"])) : (F(), z("div", {
      key: 0,
      class: "p3-b cursor-pointer rounded shadow-01 hover:shadow-02 transition-all bg-light-5 py-1 px-2 text-dark-4 flex items-center justify-center",
      onClick: pe[0] || (pe[0] = (Oe) => s.value = !0)
    }, " + " + ke(y(t)("加入動作")), 1));
  }
}), lQ = { class: "flex flex-1 items-center justify-start gap-4" }, uQ = { class: "p3-r text-dark-4" }, cQ = {
  value: "",
  disabled: ""
}, fQ = ["value"], dQ = /* @__PURE__ */ Le({
  __name: "Notification",
  setup(e) {
    const { t } = fa.global, n = Tt("eventData"), r = J(
      n.value.notify ?? {
        email: ll.All
      }
    );
    return ze(
      r,
      (s) => {
        n.value.notify = s;
      },
      { deep: !0, immediate: !0 }
    ), (s, i) => (F(), z("div", null, [
      j("label", lQ, [
        j("span", uQ, ke(y(t)("以電子郵件寄出結果")), 1),
        br(j("select", {
          class: "p3-b text-true-blue-3 flex cursor-pointer items-center justify-center gap-4 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
          "onUpdate:modelValue": i[0] || (i[0] = (l) => y(r).email = l)
        }, [
          j("option", cQ, ke(y(t)("請選擇")), 1),
          (F(!0), z(Xe, null, Lt(y(ll), (l, u) => (F(), z(Xe, { key: u }, [
            Number.isInteger(l) ? Te("", !0) : (F(), z("option", {
              key: 0,
              value: Number(u)
            }, ke(y(t)(`mail${l}`)), 9, fQ))
          ], 64))), 128))
        ], 512), [
          [Ui, y(r).email]
        ])
      ])
    ]));
  }
});
function hQ(e) {
  fa.global.locale.value = e;
}
const pQ = ["onSubmit"], mQ = { class: "space-y-1" }, vQ = {
  key: 0,
  class: "text-red-1"
}, gQ = 100, _Q = /* @__PURE__ */ Le({
  __name: "TCEventEditorApp",
  props: {
    data: {}
  },
  emits: ["update:data"],
  setup(e, { expose: t, emit: n }) {
    const r = e, { t: s } = fa.global, i = Y(() => JSON.parse(r.data || "{}")), l = (k) => {
      const b = Object.fromEntries(
        Object.entries(k).filter(([D, T]) => T !== null)
      );
      return JSON.stringify(b, null, 4);
    }, u = J([]), f = (k) => {
      k.preventDefault(), n("update:data", l(i.value));
    }, h = () => {
      var b;
      const k = document.getElementById("editor-container");
      if (k) {
        for (const D of k.querySelectorAll("[required]"))
          if (D.getAttribute("required") !== null && !D.reportValidity())
            throw new Error("未填寫完畢");
        (b = d.value) == null || b.click();
      }
    };
    aa("eventData", i), aa("checkDataValid", u);
    const d = J(), m = J(!1);
    aa("lockScroll", m);
    const v = async () => "Bearer 7|IMZYBXtkk2b4DXnscSaexanLbcBbjvd7dP5Djj6Q", g = async () => "zh_TW", w = async () => "Asia/Taipei";
    return (async () => {
      const k = await v();
      ZA(k);
      const b = await g();
      hQ(b);
      const D = await w();
      BG(D);
    })(), t({
      saveData: h
    }), (k, b) => r.data ? (F(), z("div", {
      key: 0,
      class: it([y(m) ? "overflow-y-hidden" : "overflow-y-auto "]),
      id: "editor-container-outer"
    }, [
      j("form", {
        class: "flex flex-col gap-5 relative p-5 h-fit text-dark-1 min-h-full w-full",
        id: "editor-container",
        onSubmit: xs(f, ["prevent"])
      }, [
        Pe(ju, {
          title: y(s)("規則名稱"),
          icon: "PhNotepad",
          id: "name"
        }, {
          default: We(() => [
            j("div", mQ, [
              Pe(ol, {
                modelValue: y(i).title,
                "onUpdate:modelValue": b[0] || (b[0] = (D) => y(i).title = D),
                inputClass: "text-true-blue-3",
                maxLength: gQ,
                placeholder: y(s)("ex: 廣告開啟規則"),
                required: !0
              }, null, 8, ["modelValue", "placeholder"])
            ])
          ]),
          _: 1
        }, 8, ["title"]),
        Pe(ju, {
          title: y(s)("執行時間"),
          icon: "PhCalendarCheck",
          id: "time"
        }, {
          default: We(() => [
            Pe(SZ, {
              frequency: y(i).frequency,
              "onUpdate:frequency": b[1] || (b[1] = (D) => y(i).frequency = D),
              interval: y(i).interval,
              "onUpdate:interval": b[2] || (b[2] = (D) => y(i).interval = D)
            }, null, 8, ["frequency", "interval"])
          ]),
          _: 1
        }, 8, ["title"]),
        Pe(ju, {
          title: y(s)("通知"),
          icon: "PhBellRinging",
          id: "notification"
        }, {
          default: We(() => [
            Pe(dQ)
          ]),
          _: 1
        }, 8, ["title"]),
        Pe(oQ),
        y(u).length ? (F(), z("span", vQ, ke(y(s)("資料未填寫完整")), 1)) : Te("", !0),
        j("button", {
          ref_key: "submitBtn",
          ref: d,
          class: "p-2 px-3 rounded bg-slate-100 hover:bg-sky-500 hover:text-white hidden"
        }, ke(y(s)("保存")), 513)
      ], 40, pQ)
    ], 2)) : Te("", !0);
  }
});
const yQ = /* @__PURE__ */ Dl(_Q, [["__scopeId", "data-v-4f6db946"]]);
function PQ(e) {
  if (!e)
    return "";
  const { t } = fa.global;
  let n, r;
  return e.client === ln.Google ? r = Rr : r = Bn, e.targetType === Os.ForAll && (n = t("所有的") + t(`${ln[e.client]}${r[e.adLevel]}`)), e.targetType === Os.ForActive && (n = t("已開啟的") + t(`${ln[e.client]}${r[e.adLevel]}`)), e.targetType === Os.ForID && (n = `${e.target.length}${t("個")}` + t(`${ln[e.client]}${r[e.adLevel]}`)), n;
}
function NQ(e) {
  const { t } = fa.global;
  return e != null && e.email ? t(`mail${ll[e.email]}`) : "";
}
const bQ = (e) => {
  e.component("TCEventEditorApp", yQ);
}, $Q = {
  install: bQ
};
export {
  ah as F,
  C1 as G,
  yQ as T,
  OI as a,
  jI as b,
  ZA as c,
  PQ as d,
  OQ as e,
  NQ as f,
  A2 as g,
  hQ as h,
  $Q as i,
  EQ as s
};
