import { defineComponent as de, openBlock as T, createElementBlock as I, createElementVNode as M, toDisplayString as ae, h as jt, getCurrentInstance as Mt, effectScope as Sc, inject as Be, onMounted as Gt, onUnmounted as qn, shallowRef as ii, ref as B, computed as C, onBeforeMount as rm, watch as _e, Fragment as Ee, isRef as tt, createVNode as ce, Text as am, unref as h, getCurrentScope as Mc, onScopeDispose as Ic, shallowReadonly as _r, mergeProps as Qe, cloneVNode as om, toRefs as Ur, reactive as Ia, mergeDefaults as Lc, watchEffect as bt, normalizeStyle as Hn, withCtx as he, renderSlot as Me, markRaw as ml, createBlock as De, readonly as sm, nextTick as Et, onBeforeUnmount as Rc, withKeys as Ds, withModifiers as Oa, createCommentVNode as re, resolveDynamicComponent as Ro, normalizeProps as Pr, guardReactiveProps as li, provide as nn, customRef as Fc, onBeforeUpdate as im, onUpdated as lm, toHandlerKey as um, camelize as Vc, Teleport as Bc, renderList as Ue, normalizeClass as xe, withDirectives as xt, toRef as ss, resolveComponent as tr, Transition as ui, createTextVNode as jr, resolveDirective as cm, toHandlers as dm, vModelCheckbox as Yc, vModelSelect as Tr, defineAsyncComponent as fm, vShow as Hc } from "vue";
let Uc = "", jc = "";
function xR(e) {
  Uc = e;
}
function CR(e) {
  jc = e;
}
function pm() {
  return Uc;
}
function mm() {
  return jc;
}
class vm {
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
var Da = /* @__PURE__ */ ((e) => (e[e.None = -1] = "None", e[e.All = 3] = "All", e[e.Error = 4] = "Error", e))(Da || {}), Wc = /* @__PURE__ */ ((e) => (e[e.Off = 0] = "Off", e[e.On = 1] = "On", e))(Wc || {}), at = /* @__PURE__ */ ((e) => (e[e.Google = 1] = "Google", e[e.Facebook = 2] = "Facebook", e))(at || {}), Ht = /* @__PURE__ */ ((e) => (e[e.Campaign = 2] = "Campaign", e[e.AdGroup = 3] = "AdGroup", e[e.AdTag = 5] = "AdTag", e))(Ht || {}), ht = /* @__PURE__ */ ((e) => (e[e.Campaign = 2] = "Campaign", e[e.AdGroup = 3] = "AdGroup", e[e.Ad = 4] = "Ad", e[e.AdTag = 5] = "AdTag", e))(ht || {}), Un = /* @__PURE__ */ ((e) => (e[e.ForAll = 1] = "ForAll", e[e.ForID = 2] = "ForID", e[e.ForActive = 3] = "ForActive", e))(Un || {}), Gc = /* @__PURE__ */ ((e) => (e[e.Account = 1] = "Account", e[e.Campaign = 2] = "Campaign", e[e.AdGroup = 3] = "AdGroup", e))(Gc || {}), zc = /* @__PURE__ */ ((e) => (e[e.Account = 1] = "Account", e[e.Campaign = 2] = "Campaign", e[e.AdGroup = 3] = "AdGroup", e))(zc || {}), Re = /* @__PURE__ */ ((e) => (e[e.Never = -1] = "Never", e[e.Hour = 1] = "Hour", e[e.Day = 2] = "Day", e))(Re || {}), At = /* @__PURE__ */ ((e) => (e[e.Sunday = 0] = "Sunday", e[e.Monday = 1] = "Monday", e[e.Tuesday = 2] = "Tuesday", e[e.Wednesday = 3] = "Wednesday", e[e.Thursday = 4] = "Thursday", e[e.Friday = 5] = "Friday", e[e.Saturday = 6] = "Saturday", e[e.Weekday = -1] = "Weekday", e[e.Weekend = -2] = "Weekend", e))(At || {}), gn = /* @__PURE__ */ ((e) => (e[e.First = 1] = "First", e[e.Second = 2] = "Second", e[e.Third = 3] = "Third", e[e.Fourth = 4] = "Fourth", e[e.Fifth = 5] = "Fifth", e[e.Last = -1] = "Last", e))(gn || {}), vt = /* @__PURE__ */ ((e) => (e[e.January = 1] = "January", e[e.February = 2] = "February", e[e.March = 3] = "March", e[e.April = 4] = "April", e[e.May = 5] = "May", e[e.June = 6] = "June", e[e.July = 7] = "July", e[e.August = 8] = "August", e[e.September = 9] = "September", e[e.October = 10] = "October", e[e.November = 11] = "November", e[e.December = 12] = "December", e))(vt || {}), pe = /* @__PURE__ */ ((e) => (e[e.SetNewBudget = 1] = "SetNewBudget", e[e.IncreaseBudget = 2] = "IncreaseBudget", e[e.LowerBudget = 3] = "LowerBudget", e[e.OpenProject = 4] = "OpenProject", e[e.SuspendProject = 5] = "SuspendProject", e[e.None = -1] = "None", e))(pe || {}), er = /* @__PURE__ */ ((e) => (e.DailyBudget = "dailyBudget", e.TotalBudget = "totalBudget", e))(er || {}), Te = /* @__PURE__ */ ((e) => (e.Value = "value", e.Percentage = "percentage", e))(Te || {}), Kc = /* @__PURE__ */ ((e) => (e.BudgetRemaining = "accountBudget", e.BudgetCap = "budgetCap", e.Clicks = "clicks", e.Impressions = "impressions", e.Cpc = "cpc", e.Spend = "cost", e.Conversions = "conversions", e.ConversionSpend = "conversionsValue", e.ReturnOnADSpending = "roas", e))(Kc || {}), qc = /* @__PURE__ */ ((e) => (e[e.Today = 1] = "Today", e[e.Yesterday = 2] = "Yesterday", e[e.Last3Days = 3] = "Last3Days", e[e.Last7Days = 4] = "Last7Days", e[e.ThisMonth = 5] = "ThisMonth", e[e.SpecifiedTime = -1] = "SpecifiedTime", e))(qc || {}), Zc = /* @__PURE__ */ ((e) => (e.MoreThan = ">", e.GreaterOrEqualTo = ">=", e.Equal = "==", e.LessThan = "<", e.LessThanOrEqualTo = "<=", e))(Zc || {});
const NR = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ActionType: pe,
  AdLevelTypeFacebook: ht,
  AdLevelTypeGoogle: Ht,
  BudgetType: er,
  ClientType: at,
  ConditionAdLevelTypeFacebook: zc,
  ConditionAdLevelTypeGoogle: Gc,
  ConditionType: Kc,
  DateRangeType: qc,
  EmailNotify: Da,
  EventActionTargetType: Un,
  EventHelper: vm,
  FrequencyType: Re,
  MonthType: vt,
  OperationType: Zc,
  ToggleNotify: Wc,
  ValueType: Te,
  WeekOrdinalWordsType: gn,
  WeekdaysType: At
}, Symbol.toStringTag, { value: "Module" })), hm = { class: "flex" }, gm = ["checked", "id"], ym = ["for"], bm = /* @__PURE__ */ de({
  __name: "CheckBox",
  props: {
    label: {},
    checked: { type: Boolean },
    fieldId: {}
  },
  emits: ["update:checked"],
  setup(e, { emit: t }) {
    return (n, r) => (T(), I("div", hm, [
      M("input", {
        onInput: r[0] || (r[0] = (o) => n.$emit("update:checked", o.target.checked)),
        type: "checkbox",
        checked: n.checked,
        id: n.fieldId,
        class: "hidden"
      }, null, 40, gm),
      M("label", {
        for: n.fieldId,
        class: "p3-b text-dark-3 cursor-pointer rounded hover:bg-light-4 shadow-01 px-1 py-0.5 flex justify-center items-center min-w-[1.75rem] min-h-[1.75rem]"
      }, ae(n.label), 9, ym)
    ]));
  }
});
const La = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, vl = /* @__PURE__ */ La(bm, [["__scopeId", "data-v-4f6ab498"]]);
/*!
  * shared v9.5.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */
const an = typeof window < "u";
let Ot, ir;
if (process.env.NODE_ENV !== "production") {
  const e = an && window.performance;
  e && e.mark && e.measure && e.clearMarks && // @ts-ignore browser compat
  e.clearMeasures && (Ot = (t) => {
    e.mark(t);
  }, ir = (t, n, r) => {
    e.measure(t, n, r), e.clearMarks(n), e.clearMarks(r);
  });
}
const _m = /\{([0-9a-zA-Z]+)\}/g;
function ci(e, ...t) {
  return t.length === 1 && Le(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(_m, (n, r) => t.hasOwnProperty(r) ? t[r] : "");
}
const ln = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), wm = (e, t, n) => Em({ l: e, k: t, s: n }), Em = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), ot = (e) => typeof e == "number" && isFinite(e), Om = (e) => Jc(e) === "[object Date]", jn = (e) => Jc(e) === "[object RegExp]", Fo = (e) => be(e) && Object.keys(e).length === 0, it = Object.assign;
let hl;
const yn = () => hl || (hl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function gl(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const Dm = Object.prototype.hasOwnProperty;
function di(e, t) {
  return Dm.call(e, t);
}
const je = Array.isArray, Ke = (e) => typeof e == "function", Q = (e) => typeof e == "string", Ae = (e) => typeof e == "boolean", Le = (e) => e !== null && typeof e == "object", Xc = Object.prototype.toString, Jc = (e) => Xc.call(e), be = (e) => {
  if (!Le(e))
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t.constructor === Object;
}, km = (e) => e == null ? "" : je(e) || be(e) && e.toString === Xc ? JSON.stringify(e, null, 2) : String(e);
function $m(e, t = "") {
  return e.reduce((n, r, o) => o === 0 ? n + r : n + t + r, "");
}
const yl = 2;
function Tm(e, t = 0, n = e.length) {
  const r = e.split(/\r?\n/);
  let o = 0;
  const a = [];
  for (let s = 0; s < r.length; s++)
    if (o += r[s].length + 1, o >= t) {
      for (let i = s - yl; i <= s + yl || n > o; i++) {
        if (i < 0 || i >= r.length)
          continue;
        const l = i + 1;
        a.push(`${l}${" ".repeat(3 - String(l).length)}|  ${r[i]}`);
        const c = r[i].length;
        if (i === s) {
          const u = t - (o - c) + 1, d = Math.max(1, n > o ? c - u : n - t);
          a.push("   |  " + " ".repeat(u) + "^".repeat(d));
        } else if (i > s) {
          if (n > o) {
            const u = Math.max(Math.min(n - o, c), 1);
            a.push("   |  " + "^".repeat(u));
          }
          o += c + 1;
        }
      }
      break;
    }
  return a.join(`
`);
}
function fi(e) {
  let t = e;
  return () => ++t;
}
function st(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const bl = {};
function Am(e) {
  bl[e] || (bl[e] = !0, st(e));
}
function pi() {
  const e = /* @__PURE__ */ new Map();
  return {
    events: e,
    on(n, r) {
      const o = e.get(n);
      o && o.push(r) || e.set(n, [r]);
    },
    off(n, r) {
      const o = e.get(n);
      o && o.splice(o.indexOf(r) >>> 0, 1);
    },
    emit(n, r) {
      (e.get(n) || []).slice().map((o) => o(r)), (e.get("*") || []).slice().map((o) => o(n, r));
    }
  };
}
/*!
  * message-compiler v9.5.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */
function xm(e, t, n) {
  return { line: e, column: t, offset: n };
}
function ks(e, t, n) {
  const r = { start: e, end: t };
  return n != null && (r.source = n), r;
}
const Cm = /\{([0-9a-zA-Z]+)\}/g;
function Nm(e, ...t) {
  return t.length === 1 && Pm(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(Cm, (n, r) => t.hasOwnProperty(r) ? t[r] : "");
}
const Qc = Object.assign, _l = (e) => typeof e == "string", Pm = (e) => e !== null && typeof e == "object";
function ed(e, t = "") {
  return e.reduce((n, r, o) => o === 0 ? n + r : n + t + r, "");
}
const ge = {
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
}, Sm = {
  // tokenizer error messages
  [ge.EXPECTED_TOKEN]: "Expected token: '{0}'",
  [ge.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
  [ge.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
  [ge.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
  [ge.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
  [ge.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
  [ge.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
  [ge.EMPTY_PLACEHOLDER]: "Empty placeholder",
  [ge.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
  [ge.INVALID_LINKED_FORMAT]: "Invalid linked format",
  // parser error messages
  [ge.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
  [ge.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
  [ge.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
  [ge.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
  // generator error messages
  [ge.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
  // minimizer error messages
  [ge.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
};
function Wr(e, t, n = {}) {
  const { domain: r, messages: o, args: a } = n, s = Nm((o || Sm)[e] || "", ...a || []), i = new SyntaxError(String(s));
  return i.code = e, t && (i.location = t), i.domain = r, i;
}
function Mm(e) {
  throw e;
}
const Im = /<\/?[\w\s="/.':;#-\/]+>/, Lm = (e) => Im.test(e), mn = " ", Rm = "\r", ct = `
`, Fm = String.fromCharCode(8232), Vm = String.fromCharCode(8233);
function Bm(e) {
  const t = e;
  let n = 0, r = 1, o = 1, a = 0;
  const s = (A) => t[A] === Rm && t[A + 1] === ct, i = (A) => t[A] === ct, l = (A) => t[A] === Vm, c = (A) => t[A] === Fm, u = (A) => s(A) || i(A) || l(A) || c(A), d = () => n, f = () => r, p = () => o, v = () => a, g = (A) => s(A) || l(A) || c(A) ? ct : t[A], b = () => g(n), m = () => g(n + a);
  function y() {
    return a = 0, u(n) && (r++, o = 0), s(n) && n++, n++, o++, t[n];
  }
  function E() {
    return s(n + a) && a++, a++, t[n + a];
  }
  function _() {
    n = 0, r = 1, o = 1, a = 0;
  }
  function $(A = 0) {
    a = A;
  }
  function O() {
    const A = n + a;
    for (; A !== n; )
      y();
    a = 0;
  }
  return {
    index: d,
    line: f,
    column: p,
    peekOffset: v,
    charAt: g,
    currentChar: b,
    currentPeek: m,
    next: y,
    peek: E,
    reset: _,
    resetPeek: $,
    skipToPeek: O
  };
}
const Sn = void 0, Ym = ".", wl = "'", Hm = "tokenizer";
function Um(e, t = {}) {
  const n = t.location !== !1, r = Bm(e), o = () => r.index(), a = () => xm(r.line(), r.column(), r.index()), s = a(), i = o(), l = {
    currentType: 14,
    offset: i,
    startLoc: s,
    endLoc: s,
    lastType: 14,
    lastOffset: i,
    lastStartLoc: s,
    lastEndLoc: s,
    braceNest: 0,
    inLinked: !1,
    text: ""
  }, c = () => l, { onError: u } = t;
  function d(D, w, L, ...Z) {
    const ie = c();
    if (w.column += L, w.offset += L, u) {
      const Oe = n ? ks(ie.startLoc, w) : null, qe = Wr(D, Oe, {
        domain: Hm,
        args: Z
      });
      u(qe);
    }
  }
  function f(D, w, L) {
    D.endLoc = a(), D.currentType = w;
    const Z = { type: w };
    return n && (Z.loc = ks(D.startLoc, D.endLoc)), L != null && (Z.value = L), Z;
  }
  const p = (D) => f(
    D,
    14
    /* TokenTypes.EOF */
  );
  function v(D, w) {
    return D.currentChar() === w ? (D.next(), w) : (d(ge.EXPECTED_TOKEN, a(), 0, w), "");
  }
  function g(D) {
    let w = "";
    for (; D.currentPeek() === mn || D.currentPeek() === ct; )
      w += D.currentPeek(), D.peek();
    return w;
  }
  function b(D) {
    const w = g(D);
    return D.skipToPeek(), w;
  }
  function m(D) {
    if (D === Sn)
      return !1;
    const w = D.charCodeAt(0);
    return w >= 97 && w <= 122 || // a-z
    w >= 65 && w <= 90 || // A-Z
    w === 95;
  }
  function y(D) {
    if (D === Sn)
      return !1;
    const w = D.charCodeAt(0);
    return w >= 48 && w <= 57;
  }
  function E(D, w) {
    const { currentType: L } = w;
    if (L !== 2)
      return !1;
    g(D);
    const Z = m(D.currentPeek());
    return D.resetPeek(), Z;
  }
  function _(D, w) {
    const { currentType: L } = w;
    if (L !== 2)
      return !1;
    g(D);
    const Z = D.currentPeek() === "-" ? D.peek() : D.currentPeek(), ie = y(Z);
    return D.resetPeek(), ie;
  }
  function $(D, w) {
    const { currentType: L } = w;
    if (L !== 2)
      return !1;
    g(D);
    const Z = D.currentPeek() === wl;
    return D.resetPeek(), Z;
  }
  function O(D, w) {
    const { currentType: L } = w;
    if (L !== 8)
      return !1;
    g(D);
    const Z = D.currentPeek() === ".";
    return D.resetPeek(), Z;
  }
  function A(D, w) {
    const { currentType: L } = w;
    if (L !== 9)
      return !1;
    g(D);
    const Z = m(D.currentPeek());
    return D.resetPeek(), Z;
  }
  function x(D, w) {
    const { currentType: L } = w;
    if (!(L === 8 || L === 12))
      return !1;
    g(D);
    const Z = D.currentPeek() === ":";
    return D.resetPeek(), Z;
  }
  function S(D, w) {
    const { currentType: L } = w;
    if (L !== 10)
      return !1;
    const Z = () => {
      const Oe = D.currentPeek();
      return Oe === "{" ? m(D.peek()) : Oe === "@" || Oe === "%" || Oe === "|" || Oe === ":" || Oe === "." || Oe === mn || !Oe ? !1 : Oe === ct ? (D.peek(), Z()) : m(Oe);
    }, ie = Z();
    return D.resetPeek(), ie;
  }
  function k(D) {
    g(D);
    const w = D.currentPeek() === "|";
    return D.resetPeek(), w;
  }
  function R(D) {
    const w = g(D), L = D.currentPeek() === "%" && D.peek() === "{";
    return D.resetPeek(), {
      isModulo: L,
      hasSpace: w.length > 0
    };
  }
  function N(D, w = !0) {
    const L = (ie = !1, Oe = "", qe = !1) => {
      const We = D.currentPeek();
      return We === "{" ? Oe === "%" ? !1 : ie : We === "@" || !We ? Oe === "%" ? !0 : ie : We === "%" ? (D.peek(), L(ie, "%", !0)) : We === "|" ? Oe === "%" || qe ? !0 : !(Oe === mn || Oe === ct) : We === mn ? (D.peek(), L(!0, mn, qe)) : We === ct ? (D.peek(), L(!0, ct, qe)) : !0;
    }, Z = L();
    return w && D.resetPeek(), Z;
  }
  function U(D, w) {
    const L = D.currentChar();
    return L === Sn ? Sn : w(L) ? (D.next(), L) : null;
  }
  function J(D) {
    return U(D, (L) => {
      const Z = L.charCodeAt(0);
      return Z >= 97 && Z <= 122 || // a-z
      Z >= 65 && Z <= 90 || // A-Z
      Z >= 48 && Z <= 57 || // 0-9
      Z === 95 || // _
      Z === 36;
    });
  }
  function z(D) {
    return U(D, (L) => {
      const Z = L.charCodeAt(0);
      return Z >= 48 && Z <= 57;
    });
  }
  function ee(D) {
    return U(D, (L) => {
      const Z = L.charCodeAt(0);
      return Z >= 48 && Z <= 57 || // 0-9
      Z >= 65 && Z <= 70 || // A-F
      Z >= 97 && Z <= 102;
    });
  }
  function le(D) {
    let w = "", L = "";
    for (; w = z(D); )
      L += w;
    return L;
  }
  function ke(D) {
    b(D);
    const w = D.currentChar();
    return w !== "%" && d(ge.EXPECTED_TOKEN, a(), 0, w), D.next(), "%";
  }
  function ve(D) {
    let w = "";
    for (; ; ) {
      const L = D.currentChar();
      if (L === "{" || L === "}" || L === "@" || L === "|" || !L)
        break;
      if (L === "%")
        if (N(D))
          w += L, D.next();
        else
          break;
      else if (L === mn || L === ct)
        if (N(D))
          w += L, D.next();
        else {
          if (k(D))
            break;
          w += L, D.next();
        }
      else
        w += L, D.next();
    }
    return w;
  }
  function H(D) {
    b(D);
    let w = "", L = "";
    for (; w = J(D); )
      L += w;
    return D.currentChar() === Sn && d(ge.UNTERMINATED_CLOSING_BRACE, a(), 0), L;
  }
  function me(D) {
    b(D);
    let w = "";
    return D.currentChar() === "-" ? (D.next(), w += `-${le(D)}`) : w += le(D), D.currentChar() === Sn && d(ge.UNTERMINATED_CLOSING_BRACE, a(), 0), w;
  }
  function Ie(D) {
    b(D), v(D, "'");
    let w = "", L = "";
    const Z = (Oe) => Oe !== wl && Oe !== ct;
    for (; w = U(D, Z); )
      w === "\\" ? L += He(D) : L += w;
    const ie = D.currentChar();
    return ie === ct || ie === Sn ? (d(ge.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0), ie === ct && (D.next(), v(D, "'")), L) : (v(D, "'"), L);
  }
  function He(D) {
    const w = D.currentChar();
    switch (w) {
      case "\\":
      case "'":
        return D.next(), `\\${w}`;
      case "u":
        return oe(D, w, 4);
      case "U":
        return oe(D, w, 6);
      default:
        return d(ge.UNKNOWN_ESCAPE_SEQUENCE, a(), 0, w), "";
    }
  }
  function oe(D, w, L) {
    v(D, w);
    let Z = "";
    for (let ie = 0; ie < L; ie++) {
      const Oe = ee(D);
      if (!Oe) {
        d(ge.INVALID_UNICODE_ESCAPE_SEQUENCE, a(), 0, `\\${w}${Z}${D.currentChar()}`);
        break;
      }
      Z += Oe;
    }
    return `\\${w}${Z}`;
  }
  function Se(D) {
    b(D);
    let w = "", L = "";
    const Z = (ie) => ie !== "{" && ie !== "}" && ie !== mn && ie !== ct;
    for (; w = U(D, Z); )
      L += w;
    return L;
  }
  function G(D) {
    let w = "", L = "";
    for (; w = J(D); )
      L += w;
    return L;
  }
  function X(D) {
    const w = (L = !1, Z) => {
      const ie = D.currentChar();
      return ie === "{" || ie === "%" || ie === "@" || ie === "|" || ie === "(" || ie === ")" || !ie || ie === mn ? Z : ie === ct || ie === Ym ? (Z += ie, D.next(), w(L, Z)) : (Z += ie, D.next(), w(!0, Z));
    };
    return w(!1, "");
  }
  function se(D) {
    b(D);
    const w = v(
      D,
      "|"
      /* TokenChars.Pipe */
    );
    return b(D), w;
  }
  function te(D, w) {
    let L = null;
    switch (D.currentChar()) {
      case "{":
        return w.braceNest >= 1 && d(ge.NOT_ALLOW_NEST_PLACEHOLDER, a(), 0), D.next(), L = f(
          w,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), b(D), w.braceNest++, L;
      case "}":
        return w.braceNest > 0 && w.currentType === 2 && d(ge.EMPTY_PLACEHOLDER, a(), 0), D.next(), L = f(
          w,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), w.braceNest--, w.braceNest > 0 && b(D), w.inLinked && w.braceNest === 0 && (w.inLinked = !1), L;
      case "@":
        return w.braceNest > 0 && d(ge.UNTERMINATED_CLOSING_BRACE, a(), 0), L = Y(D, w) || p(w), w.braceNest = 0, L;
      default:
        let ie = !0, Oe = !0, qe = !0;
        if (k(D))
          return w.braceNest > 0 && d(ge.UNTERMINATED_CLOSING_BRACE, a(), 0), L = f(w, 1, se(D)), w.braceNest = 0, w.inLinked = !1, L;
        if (w.braceNest > 0 && (w.currentType === 5 || w.currentType === 6 || w.currentType === 7))
          return d(ge.UNTERMINATED_CLOSING_BRACE, a(), 0), w.braceNest = 0, ne(D, w);
        if (ie = E(D, w))
          return L = f(w, 5, H(D)), b(D), L;
        if (Oe = _(D, w))
          return L = f(w, 6, me(D)), b(D), L;
        if (qe = $(D, w))
          return L = f(w, 7, Ie(D)), b(D), L;
        if (!ie && !Oe && !qe)
          return L = f(w, 13, Se(D)), d(ge.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, L.value), b(D), L;
        break;
    }
    return L;
  }
  function Y(D, w) {
    const { currentType: L } = w;
    let Z = null;
    const ie = D.currentChar();
    switch ((L === 8 || L === 9 || L === 12 || L === 10) && (ie === ct || ie === mn) && d(ge.INVALID_LINKED_FORMAT, a(), 0), ie) {
      case "@":
        return D.next(), Z = f(
          w,
          8,
          "@"
          /* TokenChars.LinkedAlias */
        ), w.inLinked = !0, Z;
      case ".":
        return b(D), D.next(), f(
          w,
          9,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return b(D), D.next(), f(
          w,
          10,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return k(D) ? (Z = f(w, 1, se(D)), w.braceNest = 0, w.inLinked = !1, Z) : O(D, w) || x(D, w) ? (b(D), Y(D, w)) : A(D, w) ? (b(D), f(w, 12, G(D))) : S(D, w) ? (b(D), ie === "{" ? te(D, w) || Z : f(w, 11, X(D))) : (L === 8 && d(ge.INVALID_LINKED_FORMAT, a(), 0), w.braceNest = 0, w.inLinked = !1, ne(D, w));
    }
  }
  function ne(D, w) {
    let L = {
      type: 14
      /* TokenTypes.EOF */
    };
    if (w.braceNest > 0)
      return te(D, w) || p(w);
    if (w.inLinked)
      return Y(D, w) || p(w);
    switch (D.currentChar()) {
      case "{":
        return te(D, w) || p(w);
      case "}":
        return d(ge.UNBALANCED_CLOSING_BRACE, a(), 0), D.next(), f(
          w,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return Y(D, w) || p(w);
      default:
        if (k(D))
          return L = f(w, 1, se(D)), w.braceNest = 0, w.inLinked = !1, L;
        const { isModulo: ie, hasSpace: Oe } = R(D);
        if (ie)
          return Oe ? f(w, 0, ve(D)) : f(w, 4, ke(D));
        if (N(D))
          return f(w, 0, ve(D));
        break;
    }
    return L;
  }
  function we() {
    const { currentType: D, offset: w, startLoc: L, endLoc: Z } = l;
    return l.lastType = D, l.lastOffset = w, l.lastStartLoc = L, l.lastEndLoc = Z, l.offset = o(), l.startLoc = a(), r.currentChar() === Sn ? f(
      l,
      14
      /* TokenTypes.EOF */
    ) : ne(r, l);
  }
  return {
    nextToken: we,
    currentOffset: o,
    currentPosition: a,
    context: c
  };
}
const jm = "parser", Wm = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Gm(e, t, n) {
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
function zm(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function r(m, y, E, _, ...$) {
    const O = m.currentPosition();
    if (O.offset += _, O.column += _, n) {
      const A = t ? ks(E, O) : null, x = Wr(y, A, {
        domain: jm,
        args: $
      });
      n(x);
    }
  }
  function o(m, y, E) {
    const _ = { type: m };
    return t && (_.start = y, _.end = y, _.loc = { start: E, end: E }), _;
  }
  function a(m, y, E, _) {
    _ && (m.type = _), t && (m.end = y, m.loc && (m.loc.end = E));
  }
  function s(m, y) {
    const E = m.context(), _ = o(3, E.offset, E.startLoc);
    return _.value = y, a(_, m.currentOffset(), m.currentPosition()), _;
  }
  function i(m, y) {
    const E = m.context(), { lastOffset: _, lastStartLoc: $ } = E, O = o(5, _, $);
    return O.index = parseInt(y, 10), m.nextToken(), a(O, m.currentOffset(), m.currentPosition()), O;
  }
  function l(m, y) {
    const E = m.context(), { lastOffset: _, lastStartLoc: $ } = E, O = o(4, _, $);
    return O.key = y, m.nextToken(), a(O, m.currentOffset(), m.currentPosition()), O;
  }
  function c(m, y) {
    const E = m.context(), { lastOffset: _, lastStartLoc: $ } = E, O = o(9, _, $);
    return O.value = y.replace(Wm, Gm), m.nextToken(), a(O, m.currentOffset(), m.currentPosition()), O;
  }
  function u(m) {
    const y = m.nextToken(), E = m.context(), { lastOffset: _, lastStartLoc: $ } = E, O = o(8, _, $);
    return y.type !== 12 ? (r(m, ge.UNEXPECTED_EMPTY_LINKED_MODIFIER, E.lastStartLoc, 0), O.value = "", a(O, _, $), {
      nextConsumeToken: y,
      node: O
    }) : (y.value == null && r(m, ge.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Jt(y)), O.value = y.value || "", a(O, m.currentOffset(), m.currentPosition()), {
      node: O
    });
  }
  function d(m, y) {
    const E = m.context(), _ = o(7, E.offset, E.startLoc);
    return _.value = y, a(_, m.currentOffset(), m.currentPosition()), _;
  }
  function f(m) {
    const y = m.context(), E = o(6, y.offset, y.startLoc);
    let _ = m.nextToken();
    if (_.type === 9) {
      const $ = u(m);
      E.modifier = $.node, _ = $.nextConsumeToken || m.nextToken();
    }
    switch (_.type !== 10 && r(m, ge.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Jt(_)), _ = m.nextToken(), _.type === 2 && (_ = m.nextToken()), _.type) {
      case 11:
        _.value == null && r(m, ge.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Jt(_)), E.key = d(m, _.value || "");
        break;
      case 5:
        _.value == null && r(m, ge.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Jt(_)), E.key = l(m, _.value || "");
        break;
      case 6:
        _.value == null && r(m, ge.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Jt(_)), E.key = i(m, _.value || "");
        break;
      case 7:
        _.value == null && r(m, ge.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Jt(_)), E.key = c(m, _.value || "");
        break;
      default:
        r(m, ge.UNEXPECTED_EMPTY_LINKED_KEY, y.lastStartLoc, 0);
        const $ = m.context(), O = o(7, $.offset, $.startLoc);
        return O.value = "", a(O, $.offset, $.startLoc), E.key = O, a(E, $.offset, $.startLoc), {
          nextConsumeToken: _,
          node: E
        };
    }
    return a(E, m.currentOffset(), m.currentPosition()), {
      node: E
    };
  }
  function p(m) {
    const y = m.context(), E = y.currentType === 1 ? m.currentOffset() : y.offset, _ = y.currentType === 1 ? y.endLoc : y.startLoc, $ = o(2, E, _);
    $.items = [];
    let O = null;
    do {
      const S = O || m.nextToken();
      switch (O = null, S.type) {
        case 0:
          S.value == null && r(m, ge.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Jt(S)), $.items.push(s(m, S.value || ""));
          break;
        case 6:
          S.value == null && r(m, ge.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Jt(S)), $.items.push(i(m, S.value || ""));
          break;
        case 5:
          S.value == null && r(m, ge.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Jt(S)), $.items.push(l(m, S.value || ""));
          break;
        case 7:
          S.value == null && r(m, ge.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Jt(S)), $.items.push(c(m, S.value || ""));
          break;
        case 8:
          const k = f(m);
          $.items.push(k.node), O = k.nextConsumeToken || null;
          break;
      }
    } while (y.currentType !== 14 && y.currentType !== 1);
    const A = y.currentType === 1 ? y.lastOffset : m.currentOffset(), x = y.currentType === 1 ? y.lastEndLoc : m.currentPosition();
    return a($, A, x), $;
  }
  function v(m, y, E, _) {
    const $ = m.context();
    let O = _.items.length === 0;
    const A = o(1, y, E);
    A.cases = [], A.cases.push(_);
    do {
      const x = p(m);
      O || (O = x.items.length === 0), A.cases.push(x);
    } while ($.currentType !== 14);
    return O && r(m, ge.MUST_HAVE_MESSAGES_IN_PLURAL, E, 0), a(A, m.currentOffset(), m.currentPosition()), A;
  }
  function g(m) {
    const y = m.context(), { offset: E, startLoc: _ } = y, $ = p(m);
    return y.currentType === 14 ? $ : v(m, E, _, $);
  }
  function b(m) {
    const y = Um(m, Qc({}, e)), E = y.context(), _ = o(0, E.offset, E.startLoc);
    return t && _.loc && (_.loc.source = m), _.body = g(y), e.onCacheKey && (_.cacheKey = e.onCacheKey(m)), E.currentType !== 14 && r(y, ge.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, m[E.offset] || ""), a(_, y.currentOffset(), y.currentPosition()), _;
  }
  return { parse: b };
}
function Jt(e) {
  if (e.type === 14)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function Km(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (a) => (n.helpers.add(a), a) };
}
function El(e, t) {
  for (let n = 0; n < e.length; n++)
    mi(e[n], t);
}
function mi(e, t) {
  switch (e.type) {
    case 1:
      El(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      El(e.items, t);
      break;
    case 6:
      mi(e.key, t), t.helper(
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
function qm(e, t = {}) {
  const n = Km(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && mi(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function Zm(e) {
  const t = e.body;
  return t.type === 2 ? Ol(t) : t.cases.forEach((n) => Ol(n)), e;
}
function Ol(e) {
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
      e.static = ed(t);
      for (let n = 0; n < e.items.length; n++) {
        const r = e.items[n];
        (r.type === 3 || r.type === 9) && delete r.value;
      }
    }
  }
}
const Xm = "minifier";
function Or(e) {
  switch (e.t = e.type, e.type) {
    case 0:
      const t = e;
      Or(t.body), t.b = t.body, delete t.body;
      break;
    case 1:
      const n = e, r = n.cases;
      for (let u = 0; u < r.length; u++)
        Or(r[u]);
      n.c = r, delete n.cases;
      break;
    case 2:
      const o = e, a = o.items;
      for (let u = 0; u < a.length; u++)
        Or(a[u]);
      o.i = a, delete o.items, o.static && (o.s = o.static, delete o.static);
      break;
    case 3:
    case 9:
    case 8:
    case 7:
      const s = e;
      s.value && (s.v = s.value, delete s.value);
      break;
    case 6:
      const i = e;
      Or(i.key), i.k = i.key, delete i.key, i.modifier && (Or(i.modifier), i.m = i.modifier, delete i.modifier);
      break;
    case 5:
      const l = e;
      l.i = l.index, delete l.index;
      break;
    case 4:
      const c = e;
      c.k = c.key, delete c.key;
      break;
    default:
      throw Wr(ge.UNHANDLED_MINIFIER_NODE_TYPE, null, {
        domain: Xm,
        args: [e.type]
      });
  }
  delete e.type;
}
const Jm = "parser";
function Qm(e, t) {
  const { sourceMap: n, filename: r, breakLineCode: o, needIndent: a } = t, s = t.location !== !1, i = {
    filename: r,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode: o,
    needIndent: a,
    indentLevel: 0
  };
  s && e.loc && (i.source = e.loc.source);
  const l = () => i;
  function c(b, m) {
    i.code += b;
  }
  function u(b, m = !0) {
    const y = m ? o : "";
    c(a ? y + "  ".repeat(b) : y);
  }
  function d(b = !0) {
    const m = ++i.indentLevel;
    b && u(m);
  }
  function f(b = !0) {
    const m = --i.indentLevel;
    b && u(m);
  }
  function p() {
    u(i.indentLevel);
  }
  return {
    context: l,
    push: c,
    indent: d,
    deindent: f,
    newline: p,
    helper: (b) => `_${b}`,
    needIndent: () => i.needIndent
  };
}
function ev(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), Sr(e, t.key), t.modifier ? (e.push(", "), Sr(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function tv(e, t) {
  const { helper: n, needIndent: r } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(r());
  const o = t.items.length;
  for (let a = 0; a < o && (Sr(e, t.items[a]), a !== o - 1); a++)
    e.push(", ");
  e.deindent(r()), e.push("])");
}
function nv(e, t) {
  const { helper: n, needIndent: r } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(r());
    const o = t.cases.length;
    for (let a = 0; a < o && (Sr(e, t.cases[a]), a !== o - 1); a++)
      e.push(", ");
    e.deindent(r()), e.push("])");
  }
}
function rv(e, t) {
  t.body ? Sr(e, t.body) : e.push("null");
}
function Sr(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      rv(e, t);
      break;
    case 1:
      nv(e, t);
      break;
    case 2:
      tv(e, t);
      break;
    case 6:
      ev(e, t);
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
      throw Wr(ge.UNHANDLED_CODEGEN_NODE_TYPE, null, {
        domain: Jm,
        args: [t.type]
      });
  }
}
const av = (e, t = {}) => {
  const n = _l(t.mode) ? t.mode : "normal", r = _l(t.filename) ? t.filename : "message.intl", o = !!t.sourceMap, a = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, s = t.needIndent ? t.needIndent : n !== "arrow", i = e.helpers || [], l = Qm(e, {
    mode: n,
    filename: r,
    sourceMap: o,
    breakLineCode: a,
    needIndent: s
  });
  l.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), l.indent(s), i.length > 0 && (l.push(`const { ${ed(i.map((d) => `${d}: _${d}`), ", ")} } = ctx`), l.newline()), l.push("return "), Sr(l, e), l.deindent(s), l.push("}"), delete e.helpers;
  const { code: c, map: u } = l.context();
  return {
    ast: e,
    code: c,
    map: u ? u.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function ov(e, t = {}) {
  const n = Qc({}, t), r = !!n.jit, o = !!n.minify, a = n.optimize == null ? !0 : n.optimize, i = zm(n).parse(e);
  return r ? (a && Zm(i), o && Or(i), { ast: i, code: "" }) : (qm(i, n), av(i, n));
}
/*!
  * core-base v9.5.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */
function sv() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (yn().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (yn().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (yn().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const Zn = [];
Zn[
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
Zn[
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
Zn[
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
Zn[
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
Zn[
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
Zn[
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
Zn[
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
const iv = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function lv(e) {
  return iv.test(e);
}
function uv(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function cv(e) {
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
function dv(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : lv(t) ? uv(t) : "*" + t;
}
function fv(e) {
  const t = [];
  let n = -1, r = 0, o = 0, a, s, i, l, c, u, d;
  const f = [];
  f[
    0
    /* Actions.APPEND */
  ] = () => {
    s === void 0 ? s = i : s += i;
  }, f[
    1
    /* Actions.PUSH */
  ] = () => {
    s !== void 0 && (t.push(s), s = void 0);
  }, f[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    f[
      0
      /* Actions.APPEND */
    ](), o++;
  }, f[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (o > 0)
      o--, r = 4, f[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (o = 0, s === void 0 || (s = dv(s), s === !1))
        return !1;
      f[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function p() {
    const v = e[n + 1];
    if (r === 5 && v === "'" || r === 6 && v === '"')
      return n++, i = "\\" + v, f[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; r !== null; )
    if (n++, a = e[n], !(a === "\\" && p())) {
      if (l = cv(a), d = Zn[r], c = d[l] || d.l || 8, c === 8 || (r = c[0], c[1] !== void 0 && (u = f[c[1]], u && (i = a, u() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const Dl = /* @__PURE__ */ new Map();
function pv(e, t) {
  return Le(e) ? e[t] : null;
}
function mv(e, t) {
  if (!Le(e))
    return null;
  let n = Dl.get(t);
  if (n || (n = fv(t), n && Dl.set(t, n)), !n)
    return null;
  const r = n.length;
  let o = e, a = 0;
  for (; a < r; ) {
    const s = o[n[a]];
    if (s === void 0)
      return null;
    o = s, a++;
  }
  return o;
}
const vv = (e) => e, hv = (e) => "", gv = "text", yv = (e) => e.length === 0 ? "" : $m(e), bv = km;
function kl(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function _v(e) {
  const t = ot(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (ot(e.named.count) || ot(e.named.n)) ? ot(e.named.count) ? e.named.count : ot(e.named.n) ? e.named.n : t : t;
}
function wv(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function Ev(e = {}) {
  const t = e.locale, n = _v(e), r = Le(e.pluralRules) && Q(t) && Ke(e.pluralRules[t]) ? e.pluralRules[t] : kl, o = Le(e.pluralRules) && Q(t) && Ke(e.pluralRules[t]) ? kl : void 0, a = (m) => m[r(n, m.length, o)], s = e.list || [], i = (m) => s[m], l = e.named || {};
  ot(e.pluralIndex) && wv(n, l);
  const c = (m) => l[m];
  function u(m) {
    const y = Ke(e.messages) ? e.messages(m) : Le(e.messages) ? e.messages[m] : !1;
    return y || (e.parent ? e.parent.message(m) : hv);
  }
  const d = (m) => e.modifiers ? e.modifiers[m] : vv, f = be(e.processor) && Ke(e.processor.normalize) ? e.processor.normalize : yv, p = be(e.processor) && Ke(e.processor.interpolate) ? e.processor.interpolate : bv, v = be(e.processor) && Q(e.processor.type) ? e.processor.type : gv, b = {
    list: i,
    named: c,
    plural: a,
    linked: (m, ...y) => {
      const [E, _] = y;
      let $ = "text", O = "";
      y.length === 1 ? Le(E) ? (O = E.modifier || O, $ = E.type || $) : Q(E) && (O = E || O) : y.length === 2 && (Q(E) && (O = E || O), Q(_) && ($ = _ || $));
      const A = u(m)(b), x = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        $ === "vnode" && je(A) && O ? A[0] : A
      );
      return O ? d(O)(x, $) : x;
    },
    message: u,
    type: v,
    interpolate: p,
    normalize: f,
    values: it({}, s, l)
  };
  return b;
}
let ka = null;
function Ov(e) {
  ka = e;
}
function Dv(e, t, n) {
  ka && ka.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: n
  });
}
const kv = /* @__PURE__ */ $v(
  "function:translate"
  /* IntlifyDevToolsHooks.FunctionTranslate */
);
function $v(e) {
  return (t) => ka && ka.emit(e, t);
}
const dt = {
  NOT_FOUND_KEY: 1,
  FALLBACK_TO_TRANSLATE: 2,
  CANNOT_FORMAT_NUMBER: 3,
  FALLBACK_TO_NUMBER_FORMAT: 4,
  CANNOT_FORMAT_DATE: 5,
  FALLBACK_TO_DATE_FORMAT: 6,
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: 7,
  __EXTEND_POINT__: 8
}, Tv = {
  [dt.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
  [dt.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
  [dt.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
  [dt.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
  [dt.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
  [dt.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale.",
  [dt.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: "This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future."
};
function lr(e, ...t) {
  return ci(Tv[e], ...t);
}
function vi(e, t) {
  return t.locale != null ? $l(t.locale) : $l(e.locale);
}
let is;
function $l(e) {
  return Q(e) ? e : is != null && e.resolvedOnce ? is : is = e();
}
function Av(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...je(t) ? t : Le(t) ? Object.keys(t) : Q(t) ? [t] : [n]
  ])];
}
function td(e, t, n) {
  const r = Q(n) ? n : Mr, o = e;
  o.__localeChainCache || (o.__localeChainCache = /* @__PURE__ */ new Map());
  let a = o.__localeChainCache.get(r);
  if (!a) {
    a = [];
    let s = [n];
    for (; je(s); )
      s = Tl(a, s, t);
    const i = je(t) || !be(t) ? t : t.default ? t.default : null;
    s = Q(i) ? [i] : i, je(s) && Tl(a, s, !1), o.__localeChainCache.set(r, a);
  }
  return a;
}
function Tl(e, t, n) {
  let r = !0;
  for (let o = 0; o < t.length && Ae(r); o++) {
    const a = t[o];
    Q(a) && (r = xv(e, t[o], n));
  }
  return r;
}
function xv(e, t, n) {
  let r;
  const o = t.split("-");
  do {
    const a = o.join("-");
    r = Cv(e, a, n), o.splice(-1, 1);
  } while (o.length && r === !0);
  return r;
}
function Cv(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== "!";
    const o = t.replace(/!/g, "");
    e.push(o), (je(n) || be(n)) && n[o] && (r = n[o]);
  }
  return r;
}
const Nv = "9.5.0", Vo = -1, Mr = "en-US", mo = "", Al = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Pv() {
  return {
    upper: (e, t) => t === "text" && Q(e) ? e.toUpperCase() : t === "vnode" && Le(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && Q(e) ? e.toLowerCase() : t === "vnode" && Le(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && Q(e) ? Al(e) : t === "vnode" && Le(e) && "__v_isVNode" in e ? Al(e.children) : e
  };
}
let nd;
function xl(e) {
  nd = e;
}
let rd;
function Sv(e) {
  rd = e;
}
let ad;
function Mv(e) {
  ad = e;
}
let od = null;
const Cl = (e) => {
  od = e;
}, Iv = () => od;
let sd = null;
const Nl = (e) => {
  sd = e;
}, Lv = () => sd;
let Pl = 0;
function Rv(e = {}) {
  const t = Ke(e.onWarn) ? e.onWarn : st, n = Q(e.version) ? e.version : Nv, r = Q(e.locale) || Ke(e.locale) ? e.locale : Mr, o = Ke(r) ? Mr : r, a = je(e.fallbackLocale) || be(e.fallbackLocale) || Q(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o, s = be(e.messages) ? e.messages : { [o]: {} }, i = be(e.datetimeFormats) ? e.datetimeFormats : { [o]: {} }, l = be(e.numberFormats) ? e.numberFormats : { [o]: {} }, c = it({}, e.modifiers || {}, Pv()), u = e.pluralRules || {}, d = Ke(e.missing) ? e.missing : null, f = Ae(e.missingWarn) || jn(e.missingWarn) ? e.missingWarn : !0, p = Ae(e.fallbackWarn) || jn(e.fallbackWarn) ? e.fallbackWarn : !0, v = !!e.fallbackFormat, g = !!e.unresolving, b = Ke(e.postTranslation) ? e.postTranslation : null, m = be(e.processor) ? e.processor : null, y = Ae(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, E = !!e.escapeParameter, _ = Ke(e.messageCompiler) ? e.messageCompiler : nd;
  process.env.NODE_ENV !== "production" && Ke(e.messageCompiler) && Am(lr(dt.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
  const $ = Ke(e.messageResolver) ? e.messageResolver : rd || pv, O = Ke(e.localeFallbacker) ? e.localeFallbacker : ad || Av, A = Le(e.fallbackContext) ? e.fallbackContext : void 0, x = e, S = Le(x.__datetimeFormatters) ? x.__datetimeFormatters : /* @__PURE__ */ new Map(), k = Le(x.__numberFormatters) ? x.__numberFormatters : /* @__PURE__ */ new Map(), R = Le(x.__meta) ? x.__meta : {};
  Pl++;
  const N = {
    version: n,
    cid: Pl,
    locale: r,
    fallbackLocale: a,
    messages: s,
    modifiers: c,
    pluralRules: u,
    missing: d,
    missingWarn: f,
    fallbackWarn: p,
    fallbackFormat: v,
    unresolving: g,
    postTranslation: b,
    processor: m,
    warnHtmlMessage: y,
    escapeParameter: E,
    messageCompiler: _,
    messageResolver: $,
    localeFallbacker: O,
    fallbackContext: A,
    onWarn: t,
    __meta: R
  };
  return N.datetimeFormats = i, N.numberFormats = l, N.__datetimeFormatters = S, N.__numberFormatters = k, process.env.NODE_ENV !== "production" && (N.__v_emitter = x.__v_emitter != null ? x.__v_emitter : void 0), (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && Dv(N, n, R), N;
}
function Bo(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function id(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function hi(e, t, n, r, o) {
  const { missing: a, onWarn: s } = e;
  if (process.env.NODE_ENV !== "production") {
    const i = e.__v_emitter;
    i && i.emit("missing", {
      locale: n,
      key: t,
      type: o,
      groupId: `${o}:${t}`
    });
  }
  if (a !== null) {
    const i = a(e, n, t, o);
    return Q(i) ? i : t;
  } else
    return process.env.NODE_ENV !== "production" && id(r, t) && s(lr(dt.NOT_FOUND_KEY, { key: t, locale: n })), t;
}
function la(e, t, n) {
  const r = e;
  r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function ls(e) {
  return (n) => Fv(n, e);
}
function Fv(e, t) {
  const n = t.b || t.body;
  if ((n.t || n.type) === 1) {
    const r = n, o = r.c || r.cases;
    return e.plural(o.reduce((a, s) => [
      ...a,
      Sl(e, s)
    ], []));
  } else
    return Sl(e, n);
}
function Sl(e, t) {
  const n = t.s || t.static;
  if (n)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const r = (t.i || t.items).reduce((o, a) => [...o, $s(e, a)], []);
    return e.normalize(r);
  }
}
function $s(e, t) {
  const n = t.t || t.type;
  switch (n) {
    case 3:
      const r = t;
      return r.v || r.value;
    case 9:
      const o = t;
      return o.v || o.value;
    case 4:
      const a = t;
      return e.interpolate(e.named(a.k || a.key));
    case 5:
      const s = t;
      return e.interpolate(e.list(s.i != null ? s.i : s.index));
    case 6:
      const i = t, l = i.m || i.modifier;
      return e.linked($s(e, i.k || i.key), l ? $s(e, l) : void 0, e.type);
    case 7:
      const c = t;
      return c.v || c.value;
    case 8:
      const u = t;
      return u.v || u.value;
    default:
      throw new Error(`unhandled node type on format message part: ${n}`);
  }
}
const ld = ge.__EXTEND_POINT__, za = fi(ld), Ct = {
  INVALID_ARGUMENT: ld,
  INVALID_DATE_ARGUMENT: za(),
  INVALID_ISO_DATE_ARGUMENT: za(),
  NOT_SUPPORT_NON_STRING_MESSAGE: za(),
  __EXTEND_POINT__: za()
  // 22
};
function nr(e) {
  return Wr(e, null, process.env.NODE_ENV !== "production" ? { messages: Vv } : void 0);
}
const Vv = {
  [Ct.INVALID_ARGUMENT]: "Invalid arguments",
  [Ct.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [Ct.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
  [Ct.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message"
}, Bv = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function ud(e, t) {
  t && Lm(e) && st(ci(Bv, { source: e }));
}
const cd = (e) => e;
let kr = /* @__PURE__ */ Object.create(null);
const ur = (e) => Le(e) && (e.t === 0 || e.type === 0) && ("b" in e || "body" in e);
function dd(e, t = {}) {
  let n = !1;
  const r = t.onError || Mm;
  return t.onError = (o) => {
    n = !0, r(o);
  }, { ...ov(e, t), detectError: n };
}
const Yv = (e, t) => {
  if (!Q(e))
    throw nr(Ct.NOT_SUPPORT_NON_STRING_MESSAGE);
  {
    const n = Ae(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && ud(e, n);
    const o = (t.onCacheKey || cd)(e), a = kr[o];
    if (a)
      return a;
    const { code: s, detectError: i } = dd(e, t), l = new Function(`return ${s}`)();
    return i ? l : kr[o] = l;
  }
};
function Hv(e, t) {
  if (__INTLIFY_JIT_COMPILATION__ && !__INTLIFY_DROP_MESSAGE_COMPILER__ && Q(e)) {
    const n = Ae(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && ud(e, n);
    const o = (t.onCacheKey || cd)(e), a = kr[o];
    if (a)
      return a;
    const { ast: s, detectError: i } = dd(e, {
      ...t,
      location: process.env.NODE_ENV !== "production",
      jit: !0
    }), l = ls(s);
    return i ? l : kr[o] = l;
  } else {
    if (process.env.NODE_ENV !== "production" && !ur(e))
      return st(`the message that is resolve with key '${t.key}' is not supported for jit compilation`), () => e;
    const n = e.cacheKey;
    if (n) {
      const r = kr[n];
      return r || (kr[n] = ls(e));
    } else
      return ls(e);
  }
}
const Ml = () => "", Ut = (e) => Ke(e);
function Il(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: o, messageCompiler: a, fallbackLocale: s, messages: i } = e, [l, c] = Ts(...t), u = Ae(c.missingWarn) ? c.missingWarn : e.missingWarn, d = Ae(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn, f = Ae(c.escapeParameter) ? c.escapeParameter : e.escapeParameter, p = !!c.resolvedMessage, v = Q(c.default) || Ae(c.default) ? Ae(c.default) ? a ? l : () => l : c.default : n ? a ? l : () => l : "", g = n || v !== "", b = vi(e, c);
  f && Uv(c);
  let [m, y, E] = p ? [
    l,
    b,
    i[b] || {}
  ] : fd(e, l, b, s, d, u), _ = m, $ = l;
  if (!p && !(Q(_) || ur(_) || Ut(_)) && g && (_ = v, $ = _), !p && (!(Q(_) || ur(_) || Ut(_)) || !Q(y)))
    return o ? Vo : l;
  if (process.env.NODE_ENV !== "production" && Q(_) && e.messageCompiler == null)
    return st(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${l}'.`), l;
  let O = !1;
  const A = () => {
    O = !0;
  }, x = Ut(_) ? _ : pd(e, l, y, _, $, A);
  if (O)
    return _;
  const S = zv(e, y, E, c), k = Ev(S), R = jv(e, x, k), N = r ? r(R, l) : R;
  if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    const U = {
      timestamp: Date.now(),
      key: Q(l) ? l : Ut(_) ? _.key : "",
      locale: y || (Ut(_) ? _.locale : ""),
      format: Q(_) ? _ : Ut(_) ? _.source : "",
      message: N
    };
    U.meta = it({}, e.__meta, Iv() || {}), kv(U);
  }
  return N;
}
function Uv(e) {
  je(e.list) ? e.list = e.list.map((t) => Q(t) ? gl(t) : t) : Le(e.named) && Object.keys(e.named).forEach((t) => {
    Q(e.named[t]) && (e.named[t] = gl(e.named[t]));
  });
}
function fd(e, t, n, r, o, a) {
  const { messages: s, onWarn: i, messageResolver: l, localeFallbacker: c } = e, u = c(e, r, n);
  let d = {}, f, p = null, v = n, g = null;
  const b = "translate";
  for (let m = 0; m < u.length; m++) {
    if (f = g = u[m], process.env.NODE_ENV !== "production" && n !== f && Bo(o, t) && i(lr(dt.FALLBACK_TO_TRANSLATE, {
      key: t,
      target: f
    })), process.env.NODE_ENV !== "production" && n !== f) {
      const O = e.__v_emitter;
      O && O.emit("fallback", {
        type: b,
        key: t,
        from: v,
        to: g,
        groupId: `${b}:${t}`
      });
    }
    d = s[f] || {};
    let y = null, E, _;
    if (process.env.NODE_ENV !== "production" && an && (y = window.performance.now(), E = "intlify-message-resolve-start", _ = "intlify-message-resolve-end", Ot && Ot(E)), (p = l(d, t)) === null && (p = d[t]), process.env.NODE_ENV !== "production" && an) {
      const O = window.performance.now(), A = e.__v_emitter;
      A && y && p && A.emit("message-resolve", {
        type: "message-resolve",
        key: t,
        message: p,
        time: O - y,
        groupId: `${b}:${t}`
      }), E && _ && Ot && ir && (Ot(_), ir("intlify message resolve", E, _));
    }
    if (Q(p) || ur(p) || Ut(p))
      break;
    const $ = hi(
      e,
      // eslint-disable-line @typescript-eslint/no-explicit-any
      t,
      f,
      a,
      b
    );
    $ !== t && (p = $), v = g;
  }
  return [p, f, d];
}
function pd(e, t, n, r, o, a) {
  const { messageCompiler: s, warnHtmlMessage: i } = e;
  if (Ut(r)) {
    const f = r;
    return f.locale = f.locale || n, f.key = f.key || t, f;
  }
  if (s == null) {
    const f = () => r;
    return f.locale = n, f.key = t, f;
  }
  let l = null, c, u;
  process.env.NODE_ENV !== "production" && an && (l = window.performance.now(), c = "intlify-message-compilation-start", u = "intlify-message-compilation-end", Ot && Ot(c));
  const d = s(r, Wv(e, n, o, r, i, a));
  if (process.env.NODE_ENV !== "production" && an) {
    const f = window.performance.now(), p = e.__v_emitter;
    p && l && p.emit("message-compilation", {
      type: "message-compilation",
      message: r,
      time: f - l,
      groupId: `translate:${t}`
    }), c && u && Ot && ir && (Ot(u), ir("intlify message compilation", c, u));
  }
  return d.locale = n, d.key = t, d.source = r, d;
}
function jv(e, t, n) {
  let r = null, o, a;
  process.env.NODE_ENV !== "production" && an && (r = window.performance.now(), o = "intlify-message-evaluation-start", a = "intlify-message-evaluation-end", Ot && Ot(o));
  const s = t(n);
  if (process.env.NODE_ENV !== "production" && an) {
    const i = window.performance.now(), l = e.__v_emitter;
    l && r && l.emit("message-evaluation", {
      type: "message-evaluation",
      value: s,
      time: i - r,
      groupId: `translate:${t.key}`
    }), o && a && Ot && ir && (Ot(a), ir("intlify message evaluation", o, a));
  }
  return s;
}
function Ts(...e) {
  const [t, n, r] = e, o = {};
  if (!Q(t) && !ot(t) && !Ut(t) && !ur(t))
    throw nr(Ct.INVALID_ARGUMENT);
  const a = ot(t) ? String(t) : (Ut(t), t);
  return ot(n) ? o.plural = n : Q(n) ? o.default = n : be(n) && !Fo(n) ? o.named = n : je(n) && (o.list = n), ot(r) ? o.plural = r : Q(r) ? o.default = r : be(r) && it(o, r), [a, o];
}
function Wv(e, t, n, r, o, a) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: o,
    onError: (s) => {
      if (a && a(s), process.env.NODE_ENV !== "production") {
        const i = Gv(r), l = `Message compilation error: ${s.message}`, c = s.location && i && Tm(i, s.location.start.offset, s.location.end.offset), u = e.__v_emitter;
        u && i && u.emit("compile-error", {
          message: i,
          error: s.message,
          start: s.location && s.location.start.offset,
          end: s.location && s.location.end.offset,
          groupId: `translate:${n}`
        }), console.error(c ? `${l}
${c}` : l);
      } else
        throw s;
    },
    onCacheKey: (s) => wm(t, n, s)
  };
}
function Gv(e) {
  var t;
  if (!Q(e)) {
    if ((t = e.loc) != null && t.source)
      return e.loc.source;
  }
}
function zv(e, t, n, r) {
  const { modifiers: o, pluralRules: a, messageResolver: s, fallbackLocale: i, fallbackWarn: l, missingWarn: c, fallbackContext: u } = e, f = {
    locale: t,
    modifiers: o,
    pluralRules: a,
    messages: (p) => {
      let v = s(n, p);
      if (v == null && u) {
        const [, , g] = fd(u, p, t, i, l, c);
        v = s(g, p);
      }
      if (Q(v) || ur(v)) {
        let g = !1;
        const m = pd(e, p, t, v, p, () => {
          g = !0;
        });
        return g ? Ml : m;
      } else
        return Ut(v) ? v : Ml;
    }
  };
  return e.processor && (f.processor = e.processor), r.list && (f.list = r.list), r.named && (f.named = r.named), ot(r.plural) && (f.pluralIndex = r.plural), f;
}
const Ll = typeof Intl < "u", md = {
  dateTimeFormat: Ll && typeof Intl.DateTimeFormat < "u",
  numberFormat: Ll && typeof Intl.NumberFormat < "u"
};
function Rl(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: o, onWarn: a, localeFallbacker: s } = e, { __datetimeFormatters: i } = e;
  if (process.env.NODE_ENV !== "production" && !md.dateTimeFormat)
    return a(lr(dt.CANNOT_FORMAT_DATE)), mo;
  const [l, c, u, d] = As(...t), f = Ae(u.missingWarn) ? u.missingWarn : e.missingWarn, p = Ae(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, v = !!u.part, g = vi(e, u), b = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    g
  );
  if (!Q(l) || l === "")
    return new Intl.DateTimeFormat(g, d).format(c);
  let m = {}, y, E = null, _ = g, $ = null;
  const O = "datetime format";
  for (let S = 0; S < b.length; S++) {
    if (y = $ = b[S], process.env.NODE_ENV !== "production" && g !== y && Bo(p, l) && a(lr(dt.FALLBACK_TO_DATE_FORMAT, {
      key: l,
      target: y
    })), process.env.NODE_ENV !== "production" && g !== y) {
      const k = e.__v_emitter;
      k && k.emit("fallback", {
        type: O,
        key: l,
        from: _,
        to: $,
        groupId: `${O}:${l}`
      });
    }
    if (m = n[y] || {}, E = m[l], be(E))
      break;
    hi(e, l, y, f, O), _ = $;
  }
  if (!be(E) || !Q(y))
    return r ? Vo : l;
  let A = `${y}__${l}`;
  Fo(d) || (A = `${A}__${JSON.stringify(d)}`);
  let x = i.get(A);
  return x || (x = new Intl.DateTimeFormat(y, it({}, E, d)), i.set(A, x)), v ? x.formatToParts(c) : x.format(c);
}
const vd = [
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
function As(...e) {
  const [t, n, r, o] = e, a = {};
  let s = {}, i;
  if (Q(t)) {
    const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l)
      throw nr(Ct.INVALID_ISO_DATE_ARGUMENT);
    const c = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
    i = new Date(c);
    try {
      i.toISOString();
    } catch {
      throw nr(Ct.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (Om(t)) {
    if (isNaN(t.getTime()))
      throw nr(Ct.INVALID_DATE_ARGUMENT);
    i = t;
  } else if (ot(t))
    i = t;
  else
    throw nr(Ct.INVALID_ARGUMENT);
  return Q(n) ? a.key = n : be(n) && Object.keys(n).forEach((l) => {
    vd.includes(l) ? s[l] = n[l] : a[l] = n[l];
  }), Q(r) ? a.locale = r : be(r) && (s = r), be(o) && (s = o), [a.key || "", i, a, s];
}
function Fl(e, t, n) {
  const r = e;
  for (const o in n) {
    const a = `${t}__${o}`;
    r.__datetimeFormatters.has(a) && r.__datetimeFormatters.delete(a);
  }
}
function Vl(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: o, onWarn: a, localeFallbacker: s } = e, { __numberFormatters: i } = e;
  if (process.env.NODE_ENV !== "production" && !md.numberFormat)
    return a(lr(dt.CANNOT_FORMAT_NUMBER)), mo;
  const [l, c, u, d] = xs(...t), f = Ae(u.missingWarn) ? u.missingWarn : e.missingWarn, p = Ae(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, v = !!u.part, g = vi(e, u), b = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    g
  );
  if (!Q(l) || l === "")
    return new Intl.NumberFormat(g, d).format(c);
  let m = {}, y, E = null, _ = g, $ = null;
  const O = "number format";
  for (let S = 0; S < b.length; S++) {
    if (y = $ = b[S], process.env.NODE_ENV !== "production" && g !== y && Bo(p, l) && a(lr(dt.FALLBACK_TO_NUMBER_FORMAT, {
      key: l,
      target: y
    })), process.env.NODE_ENV !== "production" && g !== y) {
      const k = e.__v_emitter;
      k && k.emit("fallback", {
        type: O,
        key: l,
        from: _,
        to: $,
        groupId: `${O}:${l}`
      });
    }
    if (m = n[y] || {}, E = m[l], be(E))
      break;
    hi(e, l, y, f, O), _ = $;
  }
  if (!be(E) || !Q(y))
    return r ? Vo : l;
  let A = `${y}__${l}`;
  Fo(d) || (A = `${A}__${JSON.stringify(d)}`);
  let x = i.get(A);
  return x || (x = new Intl.NumberFormat(y, it({}, E, d)), i.set(A, x)), v ? x.formatToParts(c) : x.format(c);
}
const hd = [
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
function xs(...e) {
  const [t, n, r, o] = e, a = {};
  let s = {};
  if (!ot(t))
    throw nr(Ct.INVALID_ARGUMENT);
  const i = t;
  return Q(n) ? a.key = n : be(n) && Object.keys(n).forEach((l) => {
    hd.includes(l) ? s[l] = n[l] : a[l] = n[l];
  }), Q(r) ? a.locale = r : be(r) && (s = r), be(o) && (s = o), [a.key || "", i, a, s];
}
function Bl(e, t, n) {
  const r = e;
  for (const o in n) {
    const a = `${t}__${o}`;
    r.__numberFormatters.has(a) && r.__numberFormatters.delete(a);
  }
}
sv();
function Kv() {
  return gd().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function gd() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const qv = typeof Proxy == "function", Zv = "devtools-plugin:setup", Xv = "plugin:settings:set";
let wr, Cs;
function Jv() {
  var e;
  return wr !== void 0 || (typeof window < "u" && window.performance ? (wr = !0, Cs = window.performance) : typeof global < "u" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (wr = !0, Cs = global.perf_hooks.performance) : wr = !1), wr;
}
function Qv() {
  return Jv() ? Cs.now() : Date.now();
}
class eh {
  constructor(t, n) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n;
    const r = {};
    if (t.settings)
      for (const s in t.settings) {
        const i = t.settings[s];
        r[s] = i.defaultValue;
      }
    const o = `__vue-devtools-plugin-settings__${t.id}`;
    let a = Object.assign({}, r);
    try {
      const s = localStorage.getItem(o), i = JSON.parse(s);
      Object.assign(a, i);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return a;
      },
      setSettings(s) {
        try {
          localStorage.setItem(o, JSON.stringify(s));
        } catch {
        }
        a = s;
      },
      now() {
        return Qv();
      }
    }, n && n.on(Xv, (s, i) => {
      s === this.plugin.id && this.fallbacks.setSettings(i);
    }), this.proxiedOn = new Proxy({}, {
      get: (s, i) => this.target ? this.target.on[i] : (...l) => {
        this.onQueue.push({
          method: i,
          args: l
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (s, i) => this.target ? this.target[i] : i === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(i) ? (...l) => (this.targetQueue.push({
        method: i,
        args: l,
        resolve: () => {
        }
      }), this.fallbacks[i](...l)) : (...l) => new Promise((c) => {
        this.targetQueue.push({
          method: i,
          args: l,
          resolve: c
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
function th(e, t) {
  const n = e, r = gd(), o = Kv(), a = qv && n.enableEarlyProxy;
  if (o && (r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !a))
    o.emit(Zv, e, t);
  else {
    const s = a ? new eh(n, o) : null;
    (r.__VUE_DEVTOOLS_PLUGINS__ = r.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: s
    }), s && t(s.proxiedTarget);
  }
}
/*!
  * vue-i18n v9.5.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */
const nh = "9.5.0";
function rh() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (yn().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (yn().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (yn().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (yn().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (yn().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const yd = dt.__EXTEND_POINT__, Mn = fi(yd), Je = {
  FALLBACK_TO_ROOT: yd,
  NOT_SUPPORTED_PRESERVE: Mn(),
  NOT_SUPPORTED_FORMATTER: Mn(),
  NOT_SUPPORTED_PRESERVE_DIRECTIVE: Mn(),
  NOT_SUPPORTED_GET_CHOICE_INDEX: Mn(),
  COMPONENT_NAME_LEGACY_COMPATIBLE: Mn(),
  NOT_FOUND_PARENT_SCOPE: Mn(),
  IGNORE_OBJ_FLATTEN: Mn(),
  NOTICE_DROP_ALLOW_COMPOSITION: Mn()
  // 17
}, ah = {
  [Je.FALLBACK_TO_ROOT]: "Fall back to {type} '{key}' with root locale.",
  [Je.NOT_SUPPORTED_PRESERVE]: "Not supported 'preserve'.",
  [Je.NOT_SUPPORTED_FORMATTER]: "Not supported 'formatter'.",
  [Je.NOT_SUPPORTED_PRESERVE_DIRECTIVE]: "Not supported 'preserveDirectiveContent'.",
  [Je.NOT_SUPPORTED_GET_CHOICE_INDEX]: "Not supported 'getChoiceIndex'.",
  [Je.COMPONENT_NAME_LEGACY_COMPATIBLE]: "Component name legacy compatible: '{name}' -> 'i18n'",
  [Je.NOT_FOUND_PARENT_SCOPE]: "Not found parent scope. use the global scope.",
  [Je.IGNORE_OBJ_FLATTEN]: "Ignore object flatten: '{key}' key has an string value",
  [Je.NOTICE_DROP_ALLOW_COMPOSITION]: "'allowComposition' option will be dropped in the next major version. For more information, please see 👉 https://tinyurl.com/2p97mcze"
};
function wt(e, ...t) {
  return ci(ah[e], ...t);
}
const bd = Ct.__EXTEND_POINT__, mt = fi(bd), Ne = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: bd,
  // legacy module errors
  INVALID_ARGUMENT: mt(),
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: mt(),
  NOT_INSTALLED: mt(),
  NOT_AVAILABLE_IN_LEGACY_MODE: mt(),
  // directive module errors
  REQUIRED_VALUE: mt(),
  INVALID_VALUE: mt(),
  // vue-devtools errors
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: mt(),
  NOT_INSTALLED_WITH_PROVIDE: mt(),
  // unexpected error
  UNEXPECTED_ERROR: mt(),
  // not compatible legacy vue-i18n constructor
  NOT_COMPATIBLE_LEGACY_VUE_I18N: mt(),
  // bridge support vue 2.x only
  BRIDGE_SUPPORT_VUE_2_ONLY: mt(),
  // need to define `i18n` option in `allowComposition: true` and `useScope: 'local' at `useI18n``
  MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: mt(),
  // Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: mt(),
  // for enhancement
  __EXTEND_POINT__: mt()
  // 37
};
function nt(e, ...t) {
  return Wr(e, null, process.env.NODE_ENV !== "production" ? { messages: oh, args: t } : void 0);
}
const oh = {
  [Ne.UNEXPECTED_RETURN_TYPE]: "Unexpected return type in composer",
  [Ne.INVALID_ARGUMENT]: "Invalid argument",
  [Ne.MUST_BE_CALL_SETUP_TOP]: "Must be called at the top of a `setup` function",
  [Ne.NOT_INSTALLED]: "Need to install with `app.use` function",
  [Ne.UNEXPECTED_ERROR]: "Unexpected error",
  [Ne.NOT_AVAILABLE_IN_LEGACY_MODE]: "Not available in legacy mode",
  [Ne.REQUIRED_VALUE]: "Required in value: {0}",
  [Ne.INVALID_VALUE]: "Invalid value",
  [Ne.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: "Cannot setup vue-devtools plugin",
  [Ne.NOT_INSTALLED_WITH_PROVIDE]: "Need to install with `provide` function",
  [Ne.NOT_COMPATIBLE_LEGACY_VUE_I18N]: "Not compatible legacy VueI18n.",
  [Ne.BRIDGE_SUPPORT_VUE_2_ONLY]: "vue-i18n-bridge support Vue 2.x only",
  [Ne.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION]: "Must define ‘i18n’ option or custom block in Composition API with using local scope in Legacy API mode",
  [Ne.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]: "Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"
}, Ns = /* @__PURE__ */ ln("__translateVNode"), Ps = /* @__PURE__ */ ln("__datetimeParts"), Ss = /* @__PURE__ */ ln("__numberParts"), cr = /* @__PURE__ */ ln("__enableEmitter"), $a = /* @__PURE__ */ ln("__disableEmitter"), _d = ln("__setPluralRules"), wd = /* @__PURE__ */ ln("__injectWithOption"), Ms = /* @__PURE__ */ ln("__dispose");
function Is(e) {
  if (!Le(e))
    return e;
  for (const t in e)
    if (di(e, t))
      if (!t.includes("."))
        Le(e[t]) && Is(e[t]);
      else {
        const n = t.split("."), r = n.length - 1;
        let o = e, a = !1;
        for (let s = 0; s < r; s++) {
          if (n[s] in o || (o[n[s]] = {}), !Le(o[n[s]])) {
            process.env.NODE_ENV !== "production" && st(wt(Je.IGNORE_OBJ_FLATTEN, {
              key: n[s]
            })), a = !0;
            break;
          }
          o = o[n[s]];
        }
        a || (o[n[r]] = e[t], delete e[t]), Le(o[n[r]]) && Is(o[n[r]]);
      }
  return e;
}
function Yo(e, t) {
  const { messages: n, __i18n: r, messageResolver: o, flatJson: a } = t, s = be(n) ? n : je(r) ? {} : { [e]: {} };
  if (je(r) && r.forEach((i) => {
    if ("locale" in i && "resource" in i) {
      const { locale: l, resource: c } = i;
      l ? (s[l] = s[l] || {}, ba(c, s[l])) : ba(c, s);
    } else
      Q(i) && ba(JSON.parse(i), s);
  }), o == null && a)
    for (const i in s)
      di(s, i) && Is(s[i]);
  return s;
}
const Ka = (e) => !Le(e) || je(e);
function ba(e, t) {
  if (Ka(e) || Ka(t))
    throw nt(Ne.INVALID_VALUE);
  for (const n in e)
    di(e, n) && (Ka(e[n]) || Ka(t[n]) ? t[n] = e[n] : ba(e[n], t[n]));
}
function Ed(e) {
  return e.type;
}
function Od(e, t, n) {
  let r = Le(t.messages) ? t.messages : {};
  "__i18nGlobal" in n && (r = Yo(e.locale.value, {
    messages: r,
    __i18n: n.__i18nGlobal
  }));
  const o = Object.keys(r);
  o.length && o.forEach((a) => {
    e.mergeLocaleMessage(a, r[a]);
  });
  {
    if (Le(t.datetimeFormats)) {
      const a = Object.keys(t.datetimeFormats);
      a.length && a.forEach((s) => {
        e.mergeDateTimeFormat(s, t.datetimeFormats[s]);
      });
    }
    if (Le(t.numberFormats)) {
      const a = Object.keys(t.numberFormats);
      a.length && a.forEach((s) => {
        e.mergeNumberFormat(s, t.numberFormats[s]);
      });
    }
  }
}
function Yl(e) {
  return ce(am, null, e, 0);
}
const Hl = "__INTLIFY_META__";
let Ul = 0;
function jl(e) {
  return (t, n, r, o) => e(n, r, Mt() || void 0, o);
}
const sh = () => {
  const e = Mt();
  let t = null;
  return e && (t = Ed(e)[Hl]) ? { [Hl]: t } : null;
};
function gi(e = {}, t) {
  const { __root: n, __injectWithOption: r } = e, o = n === void 0;
  let a = Ae(e.inheritLocale) ? e.inheritLocale : !0;
  const s = B(
    // prettier-ignore
    n && a ? n.locale.value : Q(e.locale) ? e.locale : Mr
  ), i = B(
    // prettier-ignore
    n && a ? n.fallbackLocale.value : Q(e.fallbackLocale) || je(e.fallbackLocale) || be(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : s.value
  ), l = B(Yo(s.value, e)), c = B(be(e.datetimeFormats) ? e.datetimeFormats : { [s.value]: {} }), u = B(be(e.numberFormats) ? e.numberFormats : { [s.value]: {} });
  let d = n ? n.missingWarn : Ae(e.missingWarn) || jn(e.missingWarn) ? e.missingWarn : !0, f = n ? n.fallbackWarn : Ae(e.fallbackWarn) || jn(e.fallbackWarn) ? e.fallbackWarn : !0, p = n ? n.fallbackRoot : Ae(e.fallbackRoot) ? e.fallbackRoot : !0, v = !!e.fallbackFormat, g = Ke(e.missing) ? e.missing : null, b = Ke(e.missing) ? jl(e.missing) : null, m = Ke(e.postTranslation) ? e.postTranslation : null, y = n ? n.warnHtmlMessage : Ae(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, E = !!e.escapeParameter;
  const _ = n ? n.modifiers : be(e.modifiers) ? e.modifiers : {};
  let $ = e.pluralRules || n && n.pluralRules, O;
  O = (() => {
    o && Nl(null);
    const F = {
      version: nh,
      locale: s.value,
      fallbackLocale: i.value,
      messages: l.value,
      modifiers: _,
      pluralRules: $,
      missing: b === null ? void 0 : b,
      missingWarn: d,
      fallbackWarn: f,
      fallbackFormat: v,
      unresolving: !0,
      postTranslation: m === null ? void 0 : m,
      warnHtmlMessage: y,
      escapeParameter: E,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    F.datetimeFormats = c.value, F.numberFormats = u.value, F.__datetimeFormatters = be(O) ? O.__datetimeFormatters : void 0, F.__numberFormatters = be(O) ? O.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (F.__v_emitter = be(O) ? O.__v_emitter : void 0);
    const W = Rv(F);
    return o && Nl(W), W;
  })(), la(O, s.value, i.value);
  function x() {
    return [
      s.value,
      i.value,
      l.value,
      c.value,
      u.value
    ];
  }
  const S = C({
    get: () => s.value,
    set: (F) => {
      s.value = F, O.locale = s.value;
    }
  }), k = C({
    get: () => i.value,
    set: (F) => {
      i.value = F, O.fallbackLocale = i.value, la(O, s.value, F);
    }
  }), R = C(() => l.value), N = /* @__PURE__ */ C(() => c.value), U = /* @__PURE__ */ C(() => u.value);
  function J() {
    return Ke(m) ? m : null;
  }
  function z(F) {
    m = F, O.postTranslation = F;
  }
  function ee() {
    return g;
  }
  function le(F) {
    F !== null && (b = jl(F)), g = F, O.missing = b;
  }
  function ke(F, W) {
    return F !== "translate" || !W.resolvedMessage;
  }
  const ve = (F, W, Ze, Xe, Xt, Pn) => {
    x();
    let Ft;
    try {
      (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && Cl(sh()), o || (O.fallbackContext = n ? Lv() : void 0), Ft = F(O);
    } finally {
      (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && Cl(null), o || (O.fallbackContext = void 0);
    }
    if (ot(Ft) && Ft === Vo) {
      const [Vt, Jn] = W();
      if (process.env.NODE_ENV !== "production" && n && Q(Vt) && ke(Ze, Jn) && (p && (Bo(f, Vt) || id(d, Vt)) && st(wt(Je.FALLBACK_TO_ROOT, {
        key: Vt,
        type: Ze
      })), process.env.NODE_ENV !== "production")) {
        const { __v_emitter: yr } = O;
        yr && p && yr.emit("fallback", {
          type: Ze,
          key: Vt,
          to: "global",
          groupId: `${Ze}:${Vt}`
        });
      }
      return n && p ? Xe(n) : Xt(Vt);
    } else {
      if (Pn(Ft))
        return Ft;
      throw nt(Ne.UNEXPECTED_RETURN_TYPE);
    }
  };
  function H(...F) {
    return ve((W) => Reflect.apply(Il, null, [W, ...F]), () => Ts(...F), "translate", (W) => Reflect.apply(W.t, W, [...F]), (W) => W, (W) => Q(W));
  }
  function me(...F) {
    const [W, Ze, Xe] = F;
    if (Xe && !Le(Xe))
      throw nt(Ne.INVALID_ARGUMENT);
    return H(W, Ze, it({ resolvedMessage: !0 }, Xe || {}));
  }
  function Ie(...F) {
    return ve((W) => Reflect.apply(Rl, null, [W, ...F]), () => As(...F), "datetime format", (W) => Reflect.apply(W.d, W, [...F]), () => mo, (W) => Q(W));
  }
  function He(...F) {
    return ve((W) => Reflect.apply(Vl, null, [W, ...F]), () => xs(...F), "number format", (W) => Reflect.apply(W.n, W, [...F]), () => mo, (W) => Q(W));
  }
  function oe(F) {
    return F.map((W) => Q(W) || ot(W) || Ae(W) ? Yl(String(W)) : W);
  }
  const G = {
    normalize: oe,
    interpolate: (F) => F,
    type: "vnode"
  };
  function X(...F) {
    return ve(
      (W) => {
        let Ze;
        const Xe = W;
        try {
          Xe.processor = G, Ze = Reflect.apply(Il, null, [Xe, ...F]);
        } finally {
          Xe.processor = null;
        }
        return Ze;
      },
      () => Ts(...F),
      "translate",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (W) => W[Ns](...F),
      (W) => [Yl(W)],
      (W) => je(W)
    );
  }
  function se(...F) {
    return ve(
      (W) => Reflect.apply(Vl, null, [W, ...F]),
      () => xs(...F),
      "number format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (W) => W[Ss](...F),
      () => [],
      (W) => Q(W) || je(W)
    );
  }
  function te(...F) {
    return ve(
      (W) => Reflect.apply(Rl, null, [W, ...F]),
      () => As(...F),
      "datetime format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (W) => W[Ps](...F),
      () => [],
      (W) => Q(W) || je(W)
    );
  }
  function Y(F) {
    $ = F, O.pluralRules = $;
  }
  function ne(F, W) {
    if (!F)
      return !1;
    const Ze = Q(W) ? W : s.value, Xe = w(Ze);
    return O.messageResolver(Xe, F) !== null;
  }
  function we(F) {
    let W = null;
    const Ze = td(O, i.value, s.value);
    for (let Xe = 0; Xe < Ze.length; Xe++) {
      const Xt = l.value[Ze[Xe]] || {}, Pn = O.messageResolver(Xt, F);
      if (Pn != null) {
        W = Pn;
        break;
      }
    }
    return W;
  }
  function D(F) {
    const W = we(F);
    return W ?? (n ? n.tm(F) || {} : {});
  }
  function w(F) {
    return l.value[F] || {};
  }
  function L(F, W) {
    l.value[F] = W, O.messages = l.value;
  }
  function Z(F, W) {
    l.value[F] = l.value[F] || {}, ba(W, l.value[F]), O.messages = l.value;
  }
  function ie(F) {
    return c.value[F] || {};
  }
  function Oe(F, W) {
    c.value[F] = W, O.datetimeFormats = c.value, Fl(O, F, W);
  }
  function qe(F, W) {
    c.value[F] = it(c.value[F] || {}, W), O.datetimeFormats = c.value, Fl(O, F, W);
  }
  function We(F) {
    return u.value[F] || {};
  }
  function $t(F, W) {
    u.value[F] = W, O.numberFormats = u.value, Bl(O, F, W);
  }
  function Zt(F, W) {
    u.value[F] = it(u.value[F] || {}, W), O.numberFormats = u.value, Bl(O, F, W);
  }
  Ul++, n && an && (_e(n.locale, (F) => {
    a && (s.value = F, O.locale = F, la(O, s.value, i.value));
  }), _e(n.fallbackLocale, (F) => {
    a && (i.value = F, O.fallbackLocale = F, la(O, s.value, i.value));
  }));
  const Fe = {
    id: Ul,
    locale: S,
    fallbackLocale: k,
    get inheritLocale() {
      return a;
    },
    set inheritLocale(F) {
      a = F, F && n && (s.value = n.locale.value, i.value = n.fallbackLocale.value, la(O, s.value, i.value));
    },
    get availableLocales() {
      return Object.keys(l.value).sort();
    },
    messages: R,
    get modifiers() {
      return _;
    },
    get pluralRules() {
      return $ || {};
    },
    get isGlobal() {
      return o;
    },
    get missingWarn() {
      return d;
    },
    set missingWarn(F) {
      d = F, O.missingWarn = d;
    },
    get fallbackWarn() {
      return f;
    },
    set fallbackWarn(F) {
      f = F, O.fallbackWarn = f;
    },
    get fallbackRoot() {
      return p;
    },
    set fallbackRoot(F) {
      p = F;
    },
    get fallbackFormat() {
      return v;
    },
    set fallbackFormat(F) {
      v = F, O.fallbackFormat = v;
    },
    get warnHtmlMessage() {
      return y;
    },
    set warnHtmlMessage(F) {
      y = F, O.warnHtmlMessage = F;
    },
    get escapeParameter() {
      return E;
    },
    set escapeParameter(F) {
      E = F, O.escapeParameter = F;
    },
    t: H,
    getLocaleMessage: w,
    setLocaleMessage: L,
    mergeLocaleMessage: Z,
    getPostTranslationHandler: J,
    setPostTranslationHandler: z,
    getMissingHandler: ee,
    setMissingHandler: le,
    [_d]: Y
  };
  return Fe.datetimeFormats = N, Fe.numberFormats = U, Fe.rt = me, Fe.te = ne, Fe.tm = D, Fe.d = Ie, Fe.n = He, Fe.getDateTimeFormat = ie, Fe.setDateTimeFormat = Oe, Fe.mergeDateTimeFormat = qe, Fe.getNumberFormat = We, Fe.setNumberFormat = $t, Fe.mergeNumberFormat = Zt, Fe[wd] = r, Fe[Ns] = X, Fe[Ps] = te, Fe[Ss] = se, process.env.NODE_ENV !== "production" && (Fe[cr] = (F) => {
    O.__v_emitter = F;
  }, Fe[$a] = () => {
    O.__v_emitter = void 0;
  }), Fe;
}
function ih(e) {
  const t = Q(e.locale) ? e.locale : Mr, n = Q(e.fallbackLocale) || je(e.fallbackLocale) || be(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t, r = Ke(e.missing) ? e.missing : void 0, o = Ae(e.silentTranslationWarn) || jn(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0, a = Ae(e.silentFallbackWarn) || jn(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0, s = Ae(e.fallbackRoot) ? e.fallbackRoot : !0, i = !!e.formatFallbackMessages, l = be(e.modifiers) ? e.modifiers : {}, c = e.pluralizationRules, u = Ke(e.postTranslation) ? e.postTranslation : void 0, d = Q(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0, f = !!e.escapeParameterHtml, p = Ae(e.sync) ? e.sync : !0;
  process.env.NODE_ENV !== "production" && e.formatter && st(wt(Je.NOT_SUPPORTED_FORMATTER)), process.env.NODE_ENV !== "production" && e.preserveDirectiveContent && st(wt(Je.NOT_SUPPORTED_PRESERVE_DIRECTIVE));
  let v = e.messages;
  if (be(e.sharedMessages)) {
    const $ = e.sharedMessages;
    v = Object.keys($).reduce((A, x) => {
      const S = A[x] || (A[x] = {});
      return it(S, $[x]), A;
    }, v || {});
  }
  const { __i18n: g, __root: b, __injectWithOption: m } = e, y = e.datetimeFormats, E = e.numberFormats, _ = e.flatJson;
  return {
    locale: t,
    fallbackLocale: n,
    messages: v,
    flatJson: _,
    datetimeFormats: y,
    numberFormats: E,
    missing: r,
    missingWarn: o,
    fallbackWarn: a,
    fallbackRoot: s,
    fallbackFormat: i,
    modifiers: l,
    pluralRules: c,
    postTranslation: u,
    warnHtmlMessage: d,
    escapeParameter: f,
    messageResolver: e.messageResolver,
    inheritLocale: p,
    __i18n: g,
    __root: b,
    __injectWithOption: m
  };
}
function Ls(e = {}, t) {
  {
    const n = gi(ih(e)), { __extender: r } = e, o = {
      // id
      id: n.id,
      // locale
      get locale() {
        return n.locale.value;
      },
      set locale(a) {
        n.locale.value = a;
      },
      // fallbackLocale
      get fallbackLocale() {
        return n.fallbackLocale.value;
      },
      set fallbackLocale(a) {
        n.fallbackLocale.value = a;
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
        return process.env.NODE_ENV !== "production" && st(wt(Je.NOT_SUPPORTED_FORMATTER)), {
          interpolate() {
            return [];
          }
        };
      },
      set formatter(a) {
        process.env.NODE_ENV !== "production" && st(wt(Je.NOT_SUPPORTED_FORMATTER));
      },
      // missing
      get missing() {
        return n.getMissingHandler();
      },
      set missing(a) {
        n.setMissingHandler(a);
      },
      // silentTranslationWarn
      get silentTranslationWarn() {
        return Ae(n.missingWarn) ? !n.missingWarn : n.missingWarn;
      },
      set silentTranslationWarn(a) {
        n.missingWarn = Ae(a) ? !a : a;
      },
      // silentFallbackWarn
      get silentFallbackWarn() {
        return Ae(n.fallbackWarn) ? !n.fallbackWarn : n.fallbackWarn;
      },
      set silentFallbackWarn(a) {
        n.fallbackWarn = Ae(a) ? !a : a;
      },
      // modifiers
      get modifiers() {
        return n.modifiers;
      },
      // formatFallbackMessages
      get formatFallbackMessages() {
        return n.fallbackFormat;
      },
      set formatFallbackMessages(a) {
        n.fallbackFormat = a;
      },
      // postTranslation
      get postTranslation() {
        return n.getPostTranslationHandler();
      },
      set postTranslation(a) {
        n.setPostTranslationHandler(a);
      },
      // sync
      get sync() {
        return n.inheritLocale;
      },
      set sync(a) {
        n.inheritLocale = a;
      },
      // warnInHtmlMessage
      get warnHtmlInMessage() {
        return n.warnHtmlMessage ? "warn" : "off";
      },
      set warnHtmlInMessage(a) {
        n.warnHtmlMessage = a !== "off";
      },
      // escapeParameterHtml
      get escapeParameterHtml() {
        return n.escapeParameter;
      },
      set escapeParameterHtml(a) {
        n.escapeParameter = a;
      },
      // preserveDirectiveContent
      get preserveDirectiveContent() {
        return process.env.NODE_ENV !== "production" && st(wt(Je.NOT_SUPPORTED_PRESERVE_DIRECTIVE)), !0;
      },
      set preserveDirectiveContent(a) {
        process.env.NODE_ENV !== "production" && st(wt(Je.NOT_SUPPORTED_PRESERVE_DIRECTIVE));
      },
      // pluralizationRules
      get pluralizationRules() {
        return n.pluralRules || {};
      },
      // for internal
      __composer: n,
      // t
      t(...a) {
        const [s, i, l] = a, c = {};
        let u = null, d = null;
        if (!Q(s))
          throw nt(Ne.INVALID_ARGUMENT);
        const f = s;
        return Q(i) ? c.locale = i : je(i) ? u = i : be(i) && (d = i), je(l) ? u = l : be(l) && (d = l), Reflect.apply(n.t, n, [
          f,
          u || d || {},
          c
        ]);
      },
      rt(...a) {
        return Reflect.apply(n.rt, n, [...a]);
      },
      // tc
      tc(...a) {
        const [s, i, l] = a, c = { plural: 1 };
        let u = null, d = null;
        if (!Q(s))
          throw nt(Ne.INVALID_ARGUMENT);
        const f = s;
        return Q(i) ? c.locale = i : ot(i) ? c.plural = i : je(i) ? u = i : be(i) && (d = i), Q(l) ? c.locale = l : je(l) ? u = l : be(l) && (d = l), Reflect.apply(n.t, n, [
          f,
          u || d || {},
          c
        ]);
      },
      // te
      te(a, s) {
        return n.te(a, s);
      },
      // tm
      tm(a) {
        return n.tm(a);
      },
      // getLocaleMessage
      getLocaleMessage(a) {
        return n.getLocaleMessage(a);
      },
      // setLocaleMessage
      setLocaleMessage(a, s) {
        n.setLocaleMessage(a, s);
      },
      // mergeLocaleMessage
      mergeLocaleMessage(a, s) {
        n.mergeLocaleMessage(a, s);
      },
      // d
      d(...a) {
        return Reflect.apply(n.d, n, [...a]);
      },
      // getDateTimeFormat
      getDateTimeFormat(a) {
        return n.getDateTimeFormat(a);
      },
      // setDateTimeFormat
      setDateTimeFormat(a, s) {
        n.setDateTimeFormat(a, s);
      },
      // mergeDateTimeFormat
      mergeDateTimeFormat(a, s) {
        n.mergeDateTimeFormat(a, s);
      },
      // n
      n(...a) {
        return Reflect.apply(n.n, n, [...a]);
      },
      // getNumberFormat
      getNumberFormat(a) {
        return n.getNumberFormat(a);
      },
      // setNumberFormat
      setNumberFormat(a, s) {
        n.setNumberFormat(a, s);
      },
      // mergeNumberFormat
      mergeNumberFormat(a, s) {
        n.mergeNumberFormat(a, s);
      },
      // getChoiceIndex
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      getChoiceIndex(a, s) {
        return process.env.NODE_ENV !== "production" && st(wt(Je.NOT_SUPPORTED_GET_CHOICE_INDEX)), -1;
      }
    };
    return o.__extender = r, process.env.NODE_ENV !== "production" && (o.__enableEmitter = (a) => {
      const s = n;
      s[cr] && s[cr](a);
    }, o.__disableEmitter = () => {
      const a = n;
      a[$a] && a[$a]();
    }), o;
  }
}
const yi = {
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
function lh({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, o) => [
    ...r,
    // prettier-ignore
    ...o.type === Ee ? o.children : [o]
  ], []) : t.reduce((n, r) => {
    const o = e[r];
    return o && (n[r] = o()), n;
  }, {});
}
function Dd(e) {
  return Ee;
}
const uh = /* @__PURE__ */ de({
  /* eslint-disable */
  name: "i18n-t",
  props: it({
    keypath: {
      type: String,
      required: !0
    },
    plural: {
      type: [Number, String],
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      validator: (e) => ot(e) || !isNaN(e)
    }
  }, yi),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const { slots: n, attrs: r } = t, o = e.i18n || _i({
      useScope: e.scope,
      __useComponent: !0
    });
    return () => {
      const a = Object.keys(n).filter((d) => d !== "_"), s = {};
      e.locale && (s.locale = e.locale), e.plural !== void 0 && (s.plural = Q(e.plural) ? +e.plural : e.plural);
      const i = lh(t, a), l = o[Ns](e.keypath, i, s), c = it({}, r), u = Q(e.tag) || Le(e.tag) ? e.tag : Dd();
      return jt(u, c, l);
    };
  }
}), us = uh;
function ch(e) {
  return je(e) && !Q(e[0]);
}
function kd(e, t, n, r) {
  const { slots: o, attrs: a } = t;
  return () => {
    const s = { part: !0 };
    let i = {};
    e.locale && (s.locale = e.locale), Q(e.format) ? s.key = e.format : Le(e.format) && (Q(e.format.key) && (s.key = e.format.key), i = Object.keys(e.format).reduce((f, p) => n.includes(p) ? it({}, f, { [p]: e.format[p] }) : f, {}));
    const l = r(e.value, s, i);
    let c = [s.key];
    je(l) ? c = l.map((f, p) => {
      const v = o[f.type], g = v ? v({ [f.type]: f.value, index: p, parts: l }) : [f.value];
      return ch(g) && (g[0].key = `${f.type}-${p}`), g;
    }) : Q(l) && (c = [l]);
    const u = it({}, a), d = Q(e.tag) || Le(e.tag) ? e.tag : Dd();
    return jt(d, u, c);
  };
}
const dh = /* @__PURE__ */ de({
  /* eslint-disable */
  name: "i18n-n",
  props: it({
    value: {
      type: Number,
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, yi),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const n = e.i18n || _i({
      useScope: "parent",
      __useComponent: !0
    });
    return kd(e, t, hd, (...r) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[Ss](...r)
    ));
  }
}), Wl = dh, fh = /* @__PURE__ */ de({
  /* eslint-disable */
  name: "i18n-d",
  props: it({
    value: {
      type: [Number, Date],
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, yi),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const n = e.i18n || _i({
      useScope: "parent",
      __useComponent: !0
    });
    return kd(e, t, vd, (...r) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[Ps](...r)
    ));
  }
}), Gl = fh;
function ph(e, t) {
  const n = e;
  if (e.mode === "composition")
    return n.__getInstance(t) || e.global;
  {
    const r = n.__getInstance(t);
    return r != null ? r.__composer : e.global.__composer;
  }
}
function mh(e) {
  const t = (s) => {
    const { instance: i, modifiers: l, value: c } = s;
    if (!i || !i.$)
      throw nt(Ne.UNEXPECTED_ERROR);
    const u = ph(e, i.$);
    process.env.NODE_ENV !== "production" && l.preserve && st(wt(Je.NOT_SUPPORTED_PRESERVE));
    const d = zl(c);
    return [
      Reflect.apply(u.t, u, [...Kl(d)]),
      u
    ];
  };
  return {
    created: (s, i) => {
      const [l, c] = t(i);
      an && e.global === c && (s.__i18nWatcher = _e(c.locale, () => {
        i.instance && i.instance.$forceUpdate();
      })), s.__composer = c, s.textContent = l;
    },
    unmounted: (s) => {
      an && s.__i18nWatcher && (s.__i18nWatcher(), s.__i18nWatcher = void 0, delete s.__i18nWatcher), s.__composer && (s.__composer = void 0, delete s.__composer);
    },
    beforeUpdate: (s, { value: i }) => {
      if (s.__composer) {
        const l = s.__composer, c = zl(i);
        s.textContent = Reflect.apply(l.t, l, [
          ...Kl(c)
        ]);
      }
    },
    getSSRProps: (s) => {
      const [i] = t(s);
      return { textContent: i };
    }
  };
}
function zl(e) {
  if (Q(e))
    return { path: e };
  if (be(e)) {
    if (!("path" in e))
      throw nt(Ne.REQUIRED_VALUE, "path");
    return e;
  } else
    throw nt(Ne.INVALID_VALUE);
}
function Kl(e) {
  const { path: t, locale: n, args: r, choice: o, plural: a } = e, s = {}, i = r || {};
  return Q(n) && (s.locale = n), ot(o) && (s.plural = o), ot(a) && (s.plural = a), [t, i, s];
}
function vh(e, t, ...n) {
  const r = be(n[0]) ? n[0] : {}, o = !!r.useI18nComponentName, a = Ae(r.globalInstall) ? r.globalInstall : !0;
  process.env.NODE_ENV !== "production" && a && o && st(wt(Je.COMPONENT_NAME_LEGACY_COMPATIBLE, {
    name: us.name
  })), a && ([o ? "i18n" : us.name, "I18nT"].forEach((s) => e.component(s, us)), [Wl.name, "I18nN"].forEach((s) => e.component(s, Wl)), [Gl.name, "I18nD"].forEach((s) => e.component(s, Gl))), e.directive("t", mh(t));
}
const cs = {
  "vue-devtools-plugin-vue-i18n": "Vue I18n devtools",
  "vue-i18n-resource-inspector": "I18n Resources",
  "vue-i18n-timeline": "Vue I18n"
}, hh = {
  "vue-i18n-resource-inspector": "Search for scopes ..."
}, gh = {
  "vue-i18n-timeline": 16764185
}, $d = "vue-i18n: composer properties";
let Rs;
async function yh(e, t) {
  return new Promise((n, r) => {
    try {
      th({
        id: "vue-devtools-plugin-vue-i18n",
        label: cs[
          "vue-devtools-plugin-vue-i18n"
          /* VueDevToolsIDs.PLUGIN */
        ],
        packageName: "vue-i18n",
        homepage: "https://vue-i18n.intlify.dev",
        logo: "https://vue-i18n.intlify.dev/vue-i18n-devtools-logo.png",
        componentStateTypes: [$d],
        app: e
        // eslint-disable-line @typescript-eslint/no-explicit-any
      }, (o) => {
        Rs = o, o.on.visitComponentTree(({ componentInstance: s, treeNode: i }) => {
          bh(s, i, t);
        }), o.on.inspectComponent(({ componentInstance: s, instanceData: i }) => {
          s.vnode.el && s.vnode.el.__VUE_I18N__ && i && (t.mode === "legacy" ? s.vnode.el.__VUE_I18N__ !== t.global.__composer && ql(i, s.vnode.el.__VUE_I18N__) : ql(i, s.vnode.el.__VUE_I18N__));
        }), o.addInspector({
          id: "vue-i18n-resource-inspector",
          label: cs[
            "vue-i18n-resource-inspector"
            /* VueDevToolsIDs.CUSTOM_INSPECTOR */
          ],
          icon: "language",
          treeFilterPlaceholder: hh[
            "vue-i18n-resource-inspector"
            /* VueDevToolsIDs.CUSTOM_INSPECTOR */
          ]
        }), o.on.getInspectorTree((s) => {
          s.app === e && s.inspectorId === "vue-i18n-resource-inspector" && Dh(s, t);
        });
        const a = /* @__PURE__ */ new Map();
        o.on.getInspectorState(async (s) => {
          if (s.app === e && s.inspectorId === "vue-i18n-resource-inspector")
            if (o.unhighlightElement(), $h(s, t), s.nodeId === "global") {
              if (!a.has(s.app)) {
                const [i] = await o.getComponentInstances(s.app);
                a.set(s.app, i);
              }
              o.highlightElement(a.get(s.app));
            } else {
              const i = kh(s.nodeId, t);
              i && o.highlightElement(i);
            }
        }), o.on.editInspectorState((s) => {
          s.app === e && s.inspectorId === "vue-i18n-resource-inspector" && Ah(s, t);
        }), o.addTimelineLayer({
          id: "vue-i18n-timeline",
          label: cs[
            "vue-i18n-timeline"
            /* VueDevToolsIDs.TIMELINE */
          ],
          color: gh[
            "vue-i18n-timeline"
            /* VueDevToolsIDs.TIMELINE */
          ]
        }), n(!0);
      });
    } catch (o) {
      console.error(o), r(!1);
    }
  });
}
function Td(e) {
  return e.type.name || e.type.displayName || e.type.__file || "Anonymous";
}
function bh(e, t, n) {
  const r = n.mode === "composition" ? n.global : n.global.__composer;
  if (e && e.vnode.el && e.vnode.el.__VUE_I18N__ && e.vnode.el.__VUE_I18N__ !== r) {
    const o = {
      label: `i18n (${Td(e)} Scope)`,
      textColor: 0,
      backgroundColor: 16764185
    };
    t.tags.push(o);
  }
}
function ql(e, t) {
  const n = $d;
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
    value: bi(t.messages.value)
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
function bi(e) {
  const t = {};
  return Object.keys(e).forEach((n) => {
    const r = e[n];
    Ke(r) && "source" in r ? t[n] = Oh(r) : ur(r) && r.loc && r.loc.source ? t[n] = r.loc.source : Le(r) ? t[n] = bi(r) : t[n] = r;
  }), t;
}
const _h = {
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "&": "&amp;"
};
function wh(e) {
  return e.replace(/[<>"&]/g, Eh);
}
function Eh(e) {
  return _h[e] || e;
}
function Oh(e) {
  return {
    _custom: {
      type: "function",
      display: `<span>ƒ</span> ${e.source ? `("${wh(e.source)}")` : "(?)"}`
    }
  };
}
function Dh(e, t) {
  e.rootNodes.push({
    id: "global",
    label: "Global Scope"
  });
  const n = t.mode === "composition" ? t.global : t.global.__composer;
  for (const [r, o] of t.__instances) {
    const a = t.mode === "composition" ? o : o.__composer;
    n !== a && e.rootNodes.push({
      id: a.id.toString(),
      label: `${Td(r)} Scope`
    });
  }
}
function kh(e, t) {
  let n = null;
  if (e !== "global") {
    for (const [r, o] of t.__instances.entries())
      if (o.id.toString() === e) {
        n = r;
        break;
      }
  }
  return n;
}
function Ad(e, t) {
  if (e === "global")
    return t.mode === "composition" ? t.global : t.global.__composer;
  {
    const n = Array.from(t.__instances.values()).find((r) => r.id.toString() === e);
    return n ? t.mode === "composition" ? n : n.__composer : null;
  }
}
function $h(e, t) {
  const n = Ad(e.nodeId, t);
  return n && (e.state = Th(n)), null;
}
function Th(e) {
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
  const o = "Locale messages info", a = [
    {
      type: o,
      key: "messages",
      editable: !1,
      value: bi(e.messages.value)
    }
  ];
  t[o] = a;
  {
    const s = "Datetime formats info", i = [
      {
        type: s,
        key: "datetimeFormats",
        editable: !1,
        value: e.datetimeFormats.value
      }
    ];
    t[s] = i;
    const l = "Datetime formats info", c = [
      {
        type: l,
        key: "numberFormats",
        editable: !1,
        value: e.numberFormats.value
      }
    ];
    t[l] = c;
  }
  return t;
}
function Ta(e, t) {
  if (Rs) {
    let n;
    t && "groupId" in t && (n = t.groupId, delete t.groupId), Rs.addTimelineEvent({
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
function Ah(e, t) {
  const n = Ad(e.nodeId, t);
  if (n) {
    const [r] = e.path;
    r === "locale" && Q(e.state.value) ? n.locale.value = e.state.value : r === "fallbackLocale" && (Q(e.state.value) || je(e.state.value) || Le(e.state.value)) ? n.fallbackLocale.value = e.state.value : r === "inheritLocale" && Ae(e.state.value) && (n.inheritLocale = e.state.value);
  }
}
function xh(e, t, n) {
  return {
    beforeCreate() {
      const r = Mt();
      if (!r)
        throw nt(Ne.UNEXPECTED_ERROR);
      const o = this.$options;
      if (o.i18n) {
        const a = o.i18n;
        if (o.__i18n && (a.__i18n = o.__i18n), a.__root = t, this === this.$root)
          this.$i18n = Zl(e, a);
        else {
          a.__injectWithOption = !0, a.__extender = n.__vueI18nExtend, this.$i18n = Ls(a);
          const s = this.$i18n;
          s.__extender && (s.__disposer = s.__extender(this.$i18n));
        }
      } else if (o.__i18n)
        if (this === this.$root)
          this.$i18n = Zl(e, o);
        else {
          this.$i18n = Ls({
            __i18n: o.__i18n,
            __injectWithOption: !0,
            __extender: n.__vueI18nExtend,
            __root: t
          });
          const a = this.$i18n;
          a.__extender && (a.__disposer = a.__extender(this.$i18n));
        }
      else
        this.$i18n = e;
      o.__i18nGlobal && Od(t, o, o), this.$t = (...a) => this.$i18n.t(...a), this.$rt = (...a) => this.$i18n.rt(...a), this.$tc = (...a) => this.$i18n.tc(...a), this.$te = (a, s) => this.$i18n.te(a, s), this.$d = (...a) => this.$i18n.d(...a), this.$n = (...a) => this.$i18n.n(...a), this.$tm = (a) => this.$i18n.tm(a), n.__setInstance(r, this.$i18n);
    },
    mounted() {
      if (process.env.NODE_ENV !== "production" && this.$el && this.$i18n) {
        const r = this.$i18n;
        this.$el.__VUE_I18N__ = r.__composer;
        const o = this.__v_emitter = pi();
        r.__enableEmitter && r.__enableEmitter(o), o.on("*", Ta);
      }
    },
    unmounted() {
      const r = Mt();
      if (!r)
        throw nt(Ne.UNEXPECTED_ERROR);
      const o = this.$i18n;
      process.env.NODE_ENV !== "production" && this.$el && this.$el.__VUE_I18N__ && (this.__v_emitter && (this.__v_emitter.off("*", Ta), delete this.__v_emitter), this.$i18n && (o.__disableEmitter && o.__disableEmitter(), delete this.$el.__VUE_I18N__)), delete this.$t, delete this.$rt, delete this.$tc, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, o.__disposer && (o.__disposer(), delete o.__disposer, delete o.__extender), n.__deleteInstance(r), delete this.$i18n;
    }
  };
}
function Zl(e, t) {
  e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[_d](t.pluralizationRules || e.pluralizationRules);
  const n = Yo(e.locale, {
    messages: t.messages,
    __i18n: t.__i18n
  });
  return Object.keys(n).forEach((r) => e.mergeLocaleMessage(r, n[r])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach((r) => e.mergeDateTimeFormat(r, t.datetimeFormats[r])), t.numberFormats && Object.keys(t.numberFormats).forEach((r) => e.mergeNumberFormat(r, t.numberFormats[r])), e;
}
const Ch = /* @__PURE__ */ ln("global-vue-i18n");
function Nh(e = {}, t) {
  const n = __VUE_I18N_LEGACY_API__ && Ae(e.legacy) ? e.legacy : __VUE_I18N_LEGACY_API__, r = Ae(e.globalInjection) ? e.globalInjection : !0, o = __VUE_I18N_LEGACY_API__ && n ? !!e.allowComposition : !0, a = /* @__PURE__ */ new Map(), [s, i] = Ph(e, n), l = /* @__PURE__ */ ln(process.env.NODE_ENV !== "production" ? "vue-i18n" : "");
  process.env.NODE_ENV !== "production" && n && o && st(wt(Je.NOTICE_DROP_ALLOW_COMPOSITION));
  function c(f) {
    return a.get(f) || null;
  }
  function u(f, p) {
    a.set(f, p);
  }
  function d(f) {
    a.delete(f);
  }
  {
    const f = {
      // mode
      get mode() {
        return __VUE_I18N_LEGACY_API__ && n ? "legacy" : "composition";
      },
      // allowComposition
      get allowComposition() {
        return o;
      },
      // install plugin
      async install(p, ...v) {
        if (process.env.NODE_ENV !== "production" && (p.__VUE_I18N__ = f), p.__VUE_I18N_SYMBOL__ = l, p.provide(p.__VUE_I18N_SYMBOL__, f), be(v[0])) {
          const m = v[0];
          f.__composerExtend = m.__composerExtend, f.__vueI18nExtend = m.__vueI18nExtend;
        }
        let g = null;
        !n && r && (g = Yh(p, f.global)), __VUE_I18N_FULL_INSTALL__ && vh(p, f, ...v), __VUE_I18N_LEGACY_API__ && n && p.mixin(xh(i, i.__composer, f));
        const b = p.unmount;
        if (p.unmount = () => {
          g && g(), f.dispose(), b();
        }, process.env.NODE_ENV !== "production") {
          if (!await yh(p, f))
            throw nt(Ne.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN);
          const y = pi();
          if (n) {
            const E = i;
            E.__enableEmitter && E.__enableEmitter(y);
          } else {
            const E = i;
            E[cr] && E[cr](y);
          }
          y.on("*", Ta);
        }
      },
      // global accessor
      get global() {
        return i;
      },
      dispose() {
        s.stop();
      },
      // @internal
      __instances: a,
      // @internal
      __getInstance: c,
      // @internal
      __setInstance: u,
      // @internal
      __deleteInstance: d
    };
    return f;
  }
}
function _i(e = {}) {
  const t = Mt();
  if (t == null)
    throw nt(Ne.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw nt(Ne.NOT_INSTALLED);
  const n = Sh(t), r = Ih(n), o = Ed(t), a = Mh(e, o);
  if (__VUE_I18N_LEGACY_API__ && n.mode === "legacy" && !e.__useComponent) {
    if (!n.allowComposition)
      throw nt(Ne.NOT_AVAILABLE_IN_LEGACY_MODE);
    return Vh(t, a, r, e);
  }
  if (a === "global")
    return Od(r, e, o), r;
  if (a === "parent") {
    let l = Lh(n, t, e.__useComponent);
    return l == null && (process.env.NODE_ENV !== "production" && st(wt(Je.NOT_FOUND_PARENT_SCOPE)), l = r), l;
  }
  const s = n;
  let i = s.__getInstance(t);
  if (i == null) {
    const l = it({}, e);
    "__i18n" in o && (l.__i18n = o.__i18n), r && (l.__root = r), i = gi(l), s.__composerExtend && (i[Ms] = s.__composerExtend(i)), Fh(s, t, i), s.__setInstance(t, i);
  }
  return i;
}
function Ph(e, t, n) {
  const r = Sc();
  {
    const o = __VUE_I18N_LEGACY_API__ && t ? r.run(() => Ls(e)) : r.run(() => gi(e));
    if (o == null)
      throw nt(Ne.UNEXPECTED_ERROR);
    return [r, o];
  }
}
function Sh(e) {
  {
    const t = Be(e.isCE ? Ch : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t)
      throw nt(e.isCE ? Ne.NOT_INSTALLED_WITH_PROVIDE : Ne.UNEXPECTED_ERROR);
    return t;
  }
}
function Mh(e, t) {
  return Fo(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function Ih(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function Lh(e, t, n = !1) {
  let r = null;
  const o = t.root;
  let a = Rh(t, n);
  for (; a != null; ) {
    const s = e;
    if (e.mode === "composition")
      r = s.__getInstance(a);
    else if (__VUE_I18N_LEGACY_API__) {
      const i = s.__getInstance(a);
      i != null && (r = i.__composer, n && r && !r[wd] && (r = null));
    }
    if (r != null || o === a)
      break;
    a = a.parent;
  }
  return r;
}
function Rh(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function Fh(e, t, n) {
  let r = null;
  Gt(() => {
    if (process.env.NODE_ENV !== "production" && t.vnode.el) {
      t.vnode.el.__VUE_I18N__ = n, r = pi();
      const o = n;
      o[cr] && o[cr](r), r.on("*", Ta);
    }
  }, t), qn(() => {
    const o = n;
    process.env.NODE_ENV !== "production" && t.vnode.el && t.vnode.el.__VUE_I18N__ && (r && r.off("*", Ta), o[$a] && o[$a](), delete t.vnode.el.__VUE_I18N__), e.__deleteInstance(t);
    const a = o[Ms];
    a && (a(), delete o[Ms]);
  }, t);
}
function Vh(e, t, n, r = {}) {
  const o = t === "local", a = ii(null);
  if (o && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n))
    throw nt(Ne.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
  const s = Ae(r.inheritLocale) ? r.inheritLocale : !Q(r.locale), i = B(
    // prettier-ignore
    !o || s ? n.locale.value : Q(r.locale) ? r.locale : Mr
  ), l = B(
    // prettier-ignore
    !o || s ? n.fallbackLocale.value : Q(r.fallbackLocale) || je(r.fallbackLocale) || be(r.fallbackLocale) || r.fallbackLocale === !1 ? r.fallbackLocale : i.value
  ), c = B(Yo(i.value, r)), u = B(be(r.datetimeFormats) ? r.datetimeFormats : { [i.value]: {} }), d = B(be(r.numberFormats) ? r.numberFormats : { [i.value]: {} }), f = o ? n.missingWarn : Ae(r.missingWarn) || jn(r.missingWarn) ? r.missingWarn : !0, p = o ? n.fallbackWarn : Ae(r.fallbackWarn) || jn(r.fallbackWarn) ? r.fallbackWarn : !0, v = o ? n.fallbackRoot : Ae(r.fallbackRoot) ? r.fallbackRoot : !0, g = !!r.fallbackFormat, b = Ke(r.missing) ? r.missing : null, m = Ke(r.postTranslation) ? r.postTranslation : null, y = o ? n.warnHtmlMessage : Ae(r.warnHtmlMessage) ? r.warnHtmlMessage : !0, E = !!r.escapeParameter, _ = o ? n.modifiers : be(r.modifiers) ? r.modifiers : {}, $ = r.pluralRules || o && n.pluralRules;
  function O() {
    return [
      i.value,
      l.value,
      c.value,
      u.value,
      d.value
    ];
  }
  const A = C({
    get: () => a.value ? a.value.locale.value : i.value,
    set: (w) => {
      a.value && (a.value.locale.value = w), i.value = w;
    }
  }), x = C({
    get: () => a.value ? a.value.fallbackLocale.value : l.value,
    set: (w) => {
      a.value && (a.value.fallbackLocale.value = w), l.value = w;
    }
  }), S = C(() => a.value ? a.value.messages.value : c.value), k = C(() => u.value), R = C(() => d.value);
  function N() {
    return a.value ? a.value.getPostTranslationHandler() : m;
  }
  function U(w) {
    a.value && a.value.setPostTranslationHandler(w);
  }
  function J() {
    return a.value ? a.value.getMissingHandler() : b;
  }
  function z(w) {
    a.value && a.value.setMissingHandler(w);
  }
  function ee(w) {
    return O(), w();
  }
  function le(...w) {
    return a.value ? ee(() => Reflect.apply(a.value.t, null, [...w])) : ee(() => "");
  }
  function ke(...w) {
    return a.value ? Reflect.apply(a.value.rt, null, [...w]) : "";
  }
  function ve(...w) {
    return a.value ? ee(() => Reflect.apply(a.value.d, null, [...w])) : ee(() => "");
  }
  function H(...w) {
    return a.value ? ee(() => Reflect.apply(a.value.n, null, [...w])) : ee(() => "");
  }
  function me(w) {
    return a.value ? a.value.tm(w) : {};
  }
  function Ie(w, L) {
    return a.value ? a.value.te(w, L) : !1;
  }
  function He(w) {
    return a.value ? a.value.getLocaleMessage(w) : {};
  }
  function oe(w, L) {
    a.value && (a.value.setLocaleMessage(w, L), c.value[w] = L);
  }
  function Se(w, L) {
    a.value && a.value.mergeLocaleMessage(w, L);
  }
  function G(w) {
    return a.value ? a.value.getDateTimeFormat(w) : {};
  }
  function X(w, L) {
    a.value && (a.value.setDateTimeFormat(w, L), u.value[w] = L);
  }
  function se(w, L) {
    a.value && a.value.mergeDateTimeFormat(w, L);
  }
  function te(w) {
    return a.value ? a.value.getNumberFormat(w) : {};
  }
  function Y(w, L) {
    a.value && (a.value.setNumberFormat(w, L), d.value[w] = L);
  }
  function ne(w, L) {
    a.value && a.value.mergeNumberFormat(w, L);
  }
  const we = {
    get id() {
      return a.value ? a.value.id : -1;
    },
    locale: A,
    fallbackLocale: x,
    messages: S,
    datetimeFormats: k,
    numberFormats: R,
    get inheritLocale() {
      return a.value ? a.value.inheritLocale : s;
    },
    set inheritLocale(w) {
      a.value && (a.value.inheritLocale = w);
    },
    get availableLocales() {
      return a.value ? a.value.availableLocales : Object.keys(c.value);
    },
    get modifiers() {
      return a.value ? a.value.modifiers : _;
    },
    get pluralRules() {
      return a.value ? a.value.pluralRules : $;
    },
    get isGlobal() {
      return a.value ? a.value.isGlobal : !1;
    },
    get missingWarn() {
      return a.value ? a.value.missingWarn : f;
    },
    set missingWarn(w) {
      a.value && (a.value.missingWarn = w);
    },
    get fallbackWarn() {
      return a.value ? a.value.fallbackWarn : p;
    },
    set fallbackWarn(w) {
      a.value && (a.value.missingWarn = w);
    },
    get fallbackRoot() {
      return a.value ? a.value.fallbackRoot : v;
    },
    set fallbackRoot(w) {
      a.value && (a.value.fallbackRoot = w);
    },
    get fallbackFormat() {
      return a.value ? a.value.fallbackFormat : g;
    },
    set fallbackFormat(w) {
      a.value && (a.value.fallbackFormat = w);
    },
    get warnHtmlMessage() {
      return a.value ? a.value.warnHtmlMessage : y;
    },
    set warnHtmlMessage(w) {
      a.value && (a.value.warnHtmlMessage = w);
    },
    get escapeParameter() {
      return a.value ? a.value.escapeParameter : E;
    },
    set escapeParameter(w) {
      a.value && (a.value.escapeParameter = w);
    },
    t: le,
    getPostTranslationHandler: N,
    setPostTranslationHandler: U,
    getMissingHandler: J,
    setMissingHandler: z,
    rt: ke,
    d: ve,
    n: H,
    tm: me,
    te: Ie,
    getLocaleMessage: He,
    setLocaleMessage: oe,
    mergeLocaleMessage: Se,
    getDateTimeFormat: G,
    setDateTimeFormat: X,
    mergeDateTimeFormat: se,
    getNumberFormat: te,
    setNumberFormat: Y,
    mergeNumberFormat: ne
  };
  function D(w) {
    w.locale.value = i.value, w.fallbackLocale.value = l.value, Object.keys(c.value).forEach((L) => {
      w.mergeLocaleMessage(L, c.value[L]);
    }), Object.keys(u.value).forEach((L) => {
      w.mergeDateTimeFormat(L, u.value[L]);
    }), Object.keys(d.value).forEach((L) => {
      w.mergeNumberFormat(L, d.value[L]);
    }), w.escapeParameter = E, w.fallbackFormat = g, w.fallbackRoot = v, w.fallbackWarn = p, w.missingWarn = f, w.warnHtmlMessage = y;
  }
  return rm(() => {
    if (e.proxy == null || e.proxy.$i18n == null)
      throw nt(Ne.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
    const w = a.value = e.proxy.$i18n.__composer;
    t === "global" ? (i.value = w.locale.value, l.value = w.fallbackLocale.value, c.value = w.messages.value, u.value = w.datetimeFormats.value, d.value = w.numberFormats.value) : o && D(w);
  }), we;
}
const Bh = [
  "locale",
  "fallbackLocale",
  "availableLocales"
], Xl = ["t", "rt", "d", "n", "tm", "te"];
function Yh(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  return Bh.forEach((o) => {
    const a = Object.getOwnPropertyDescriptor(t, o);
    if (!a)
      throw nt(Ne.UNEXPECTED_ERROR);
    const s = tt(a.value) ? {
      get() {
        return a.value.value;
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      set(i) {
        a.value.value = i;
      }
    } : {
      get() {
        return a.get && a.get();
      }
    };
    Object.defineProperty(n, o, s);
  }), e.config.globalProperties.$i18n = n, Xl.forEach((o) => {
    const a = Object.getOwnPropertyDescriptor(t, o);
    if (!a || !a.value)
      throw nt(Ne.UNEXPECTED_ERROR);
    Object.defineProperty(e.config.globalProperties, `$${o}`, a);
  }), () => {
    delete e.config.globalProperties.$i18n, Xl.forEach((o) => {
      delete e.config.globalProperties[`$${o}`];
    });
  };
}
rh();
__INTLIFY_JIT_COMPILATION__ ? xl(Hv) : xl(Yv);
Sv(mv);
Mv(td);
if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const e = yn();
  e.__INTLIFY__ = !0, Ov(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
const Hh = {
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
  "No Data": "沒有資料"
}, Uh = {
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
  所有的: "",
  已開啟的: "",
  個: "",
  且: "",
  加入條件: "",
  請選擇條件: "",
  "輸入關鍵字搜尋 ex: 轉換數": "",
  自訂: "",
  取消: "",
  規則名稱: "ennnn",
  執行時間: "",
  通知: "",
  資料未填寫完整: "",
  保存: "",
  持續執行: "",
  未設定: "",
  以電子郵件寄出結果: "",
  請選擇: "",
  只執行一次: "",
  每小時執行一次: "",
  每日執行一次: "",
  每週執行一次: "",
  每月執行一次: "",
  每年執行一次: "",
  小時: "",
  日: "",
  週: "",
  月: "",
  年: "",
  每: "",
  執行一次: "",
  開始: "",
  執行頻率: "",
  自訂: "",
  結束: "",
  日預算: "",
  總預算: "",
  "若{clientAndAdLevel}設定為{paramsBudgetTypeValue}，則不會變更": "",
  加入動作: "",
  動作: "",
  平台: "",
  層級: "",
  項目: "",
  未選擇: "",
  "已選{count}個項目": "",
  請選擇目標: "",
  搜尋: "",
  篩選: "",
  啟用中: "",
  暫停中: "",
  全選: "",
  確定: "",
  執行: "",
  類型: "",
  調整: "",
  元: "",
  預算上限: "",
  預算下限: "",
  週日: "",
  週一: "",
  週二: "",
  週三: "",
  週四: "",
  週五: "",
  週六: "",
  平日: "",
  週末: "",
  第一週: "",
  第二週: "",
  第三週: "",
  第四週: "",
  第五週: "",
  最後一週: "",
  最後一天: "",
  一月: "",
  二月: "",
  三月: "",
  四月: "",
  五月: "",
  六月: "",
  七月: "",
  八月: "",
  九月: "",
  十月: "",
  十一月: "",
  十二月: "",
  星期: "",
  日期: "",
  指定時段: "",
  月份: "",
  與作天相比: "",
  與前一天相比: "",
  與前3天相比: "",
  與前7天相比: "",
  與上個月相比: "",
  "條件 {count}": "",
  條件: "",
  區間: "",
  請選定區間: "",
  加入比較區間: "",
  運算: "",
  永不: "",
  天: "",
  個月: "",
  "No Data": "No Data"
}, jh = {
  zh_TW: Hh,
  en_US: Uh
}, un = Nh({
  locale: "zh_TW",
  legacy: !1,
  globalInjection: !0,
  messages: jh
}), ua = {
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
function Wh(e, t = !1) {
  const { t: n } = un.global, r = new Date(e.start).toLocaleString("zh-TW", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    hour12: !1
  }), o = e.due ? new Date(e.due).toLocaleString("zh-TW", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    hour12: !1
  }) : null;
  if (e.frequency === Re.Never)
    return `於 ${r} 起`;
  const a = n(ua.frequency[Re[e.frequency]]), s = e.weekdays ? e.weekdays.map((f) => n(ua.weekdays[At[f]])).join("、") : "", i = e.weekOrdinal ? e.weekOrdinal.map((f) => n(ua.weekOrdinal[gn[f]])).join("、") : "", l = e.monthDate ? `${e.monthDate.join("、")}號`.replace("-1", n()) : "", c = e.yearMonths ? `${e.yearMonths.sort((f, p) => p - f).reverse().join("、")}月` : "";
  let u = `於 ${r} 起，${ua.every}${e.interval}${a}`, d = `${ua.every}${e.interval}${a}`;
  if (i || s || l || c) {
    u += "的", d += "的";
    const f = [];
    c && f.push(`${c}的`), l && f.push(l), i && f.push(`${i}的`), s && f.push(s), u += f.join(""), d += f.join("");
  }
  return o && (u += `，並於 ${o} 結束循環`), t ? d : u;
}
const Gh = ["top", "right", "bottom", "left"], Wn = Math.min, _t = Math.max, vo = Math.round, qa = Math.floor, Gn = (e) => ({
  x: e,
  y: e
}), zh = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Kh = {
  start: "end",
  end: "start"
};
function Fs(e, t, n) {
  return _t(e, Wn(t, n));
}
function wn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function En(e) {
  return e.split("-")[0];
}
function Gr(e) {
  return e.split("-")[1];
}
function wi(e) {
  return e === "x" ? "y" : "x";
}
function Ei(e) {
  return e === "y" ? "height" : "width";
}
function zr(e) {
  return ["top", "bottom"].includes(En(e)) ? "y" : "x";
}
function Oi(e) {
  return wi(zr(e));
}
function qh(e, t, n) {
  n === void 0 && (n = !1);
  const r = Gr(e), o = Oi(e), a = Ei(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (s = ho(s)), [s, ho(s)];
}
function Zh(e) {
  const t = ho(e);
  return [Vs(e), t, Vs(t)];
}
function Vs(e) {
  return e.replace(/start|end/g, (t) => Kh[t]);
}
function Xh(e, t, n) {
  const r = ["left", "right"], o = ["right", "left"], a = ["top", "bottom"], s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? a : s;
    default:
      return [];
  }
}
function Jh(e, t, n, r) {
  const o = Gr(e);
  let a = Xh(En(e), n === "start", r);
  return o && (a = a.map((s) => s + "-" + o), t && (a = a.concat(a.map(Vs)))), a;
}
function ho(e) {
  return e.replace(/left|right|bottom|top/g, (t) => zh[t]);
}
function Qh(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function xd(e) {
  return typeof e != "number" ? Qh(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function go(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function Jl(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = zr(t), s = Oi(t), i = Ei(s), l = En(t), c = a === "y", u = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, f = r[i] / 2 - o[i] / 2;
  let p;
  switch (l) {
    case "top":
      p = {
        x: u,
        y: r.y - o.height
      };
      break;
    case "bottom":
      p = {
        x: u,
        y: r.y + r.height
      };
      break;
    case "right":
      p = {
        x: r.x + r.width,
        y: d
      };
      break;
    case "left":
      p = {
        x: r.x - o.width,
        y: d
      };
      break;
    default:
      p = {
        x: r.x,
        y: r.y
      };
  }
  switch (Gr(t)) {
    case "start":
      p[s] -= f * (n && c ? -1 : 1);
      break;
    case "end":
      p[s] += f * (n && c ? -1 : 1);
      break;
  }
  return p;
}
const eg = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: a = [],
    platform: s
  } = n, i = a.filter(Boolean), l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let c = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: u,
    y: d
  } = Jl(c, r, l), f = r, p = {}, v = 0;
  for (let g = 0; g < i.length; g++) {
    const {
      name: b,
      fn: m
    } = i[g], {
      x: y,
      y: E,
      data: _,
      reset: $
    } = await m({
      x: u,
      y: d,
      initialPlacement: r,
      placement: f,
      strategy: o,
      middlewareData: p,
      rects: c,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    if (u = y ?? u, d = E ?? d, p = {
      ...p,
      [b]: {
        ...p[b],
        ..._
      }
    }, $ && v <= 50) {
      v++, typeof $ == "object" && ($.placement && (f = $.placement), $.rects && (c = $.rects === !0 ? await s.getElementRects({
        reference: e,
        floating: t,
        strategy: o
      }) : $.rects), {
        x: u,
        y: d
      } = Jl(c, f, l)), g = -1;
      continue;
    }
  }
  return {
    x: u,
    y: d,
    placement: f,
    strategy: o,
    middlewareData: p
  };
};
async function Aa(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: a,
    rects: s,
    elements: i,
    strategy: l
  } = e, {
    boundary: c = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: d = "floating",
    altBoundary: f = !1,
    padding: p = 0
  } = wn(t, e), v = xd(p), b = i[f ? d === "floating" ? "reference" : "floating" : d], m = go(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(b))) == null || n ? b : b.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(i.floating)),
    boundary: c,
    rootBoundary: u,
    strategy: l
  })), y = d === "floating" ? {
    ...s.floating,
    x: r,
    y: o
  } : s.reference, E = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(i.floating)), _ = await (a.isElement == null ? void 0 : a.isElement(E)) ? await (a.getScale == null ? void 0 : a.getScale(E)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, $ = go(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: y,
    offsetParent: E,
    strategy: l
  }) : y);
  return {
    top: (m.top - $.top + v.top) / _.y,
    bottom: ($.bottom - m.bottom + v.bottom) / _.y,
    left: (m.left - $.left + v.left) / _.x,
    right: ($.right - m.right + v.right) / _.x
  };
}
const tg = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: a,
      platform: s,
      elements: i,
      middlewareData: l
    } = t, {
      element: c,
      padding: u = 0
    } = wn(e, t) || {};
    if (c == null)
      return {};
    const d = xd(u), f = {
      x: n,
      y: r
    }, p = Oi(o), v = Ei(p), g = await s.getDimensions(c), b = p === "y", m = b ? "top" : "left", y = b ? "bottom" : "right", E = b ? "clientHeight" : "clientWidth", _ = a.reference[v] + a.reference[p] - f[p] - a.floating[v], $ = f[p] - a.reference[p], O = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
    let A = O ? O[E] : 0;
    (!A || !await (s.isElement == null ? void 0 : s.isElement(O))) && (A = i.floating[E] || a.floating[v]);
    const x = _ / 2 - $ / 2, S = A / 2 - g[v] / 2 - 1, k = Wn(d[m], S), R = Wn(d[y], S), N = k, U = A - g[v] - R, J = A / 2 - g[v] / 2 + x, z = Fs(N, J, U), ee = !l.arrow && Gr(o) != null && J != z && a.reference[v] / 2 - (J < N ? k : R) - g[v] / 2 < 0, le = ee ? J < N ? J - N : J - U : 0;
    return {
      [p]: f[p] + le,
      data: {
        [p]: z,
        centerOffset: J - z - le,
        ...ee && {
          alignmentOffset: le
        }
      },
      reset: ee
    };
  }
}), ng = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: a,
        rects: s,
        initialPlacement: i,
        platform: l,
        elements: c
      } = t, {
        mainAxis: u = !0,
        crossAxis: d = !0,
        fallbackPlacements: f,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: v = "none",
        flipAlignment: g = !0,
        ...b
      } = wn(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const m = En(o), y = En(i) === i, E = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), _ = f || (y || !g ? [ho(i)] : Zh(i));
      !f && v !== "none" && _.push(...Jh(i, g, v, E));
      const $ = [i, ..._], O = await Aa(t, b), A = [];
      let x = ((r = a.flip) == null ? void 0 : r.overflows) || [];
      if (u && A.push(O[m]), d) {
        const N = qh(o, s, E);
        A.push(O[N[0]], O[N[1]]);
      }
      if (x = [...x, {
        placement: o,
        overflows: A
      }], !A.every((N) => N <= 0)) {
        var S, k;
        const N = (((S = a.flip) == null ? void 0 : S.index) || 0) + 1, U = $[N];
        if (U)
          return {
            data: {
              index: N,
              overflows: x
            },
            reset: {
              placement: U
            }
          };
        let J = (k = x.filter((z) => z.overflows[0] <= 0).sort((z, ee) => z.overflows[1] - ee.overflows[1])[0]) == null ? void 0 : k.placement;
        if (!J)
          switch (p) {
            case "bestFit": {
              var R;
              const z = (R = x.map((ee) => [ee.placement, ee.overflows.filter((le) => le > 0).reduce((le, ke) => le + ke, 0)]).sort((ee, le) => ee[1] - le[1])[0]) == null ? void 0 : R[0];
              z && (J = z);
              break;
            }
            case "initialPlacement":
              J = i;
              break;
          }
        if (o !== J)
          return {
            reset: {
              placement: J
            }
          };
      }
      return {};
    }
  };
};
function Ql(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function eu(e) {
  return Gh.some((t) => e[t] >= 0);
}
const rg = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = wn(e, t);
      switch (r) {
        case "referenceHidden": {
          const a = await Aa(t, {
            ...o,
            elementContext: "reference"
          }), s = Ql(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: eu(s)
            }
          };
        }
        case "escaped": {
          const a = await Aa(t, {
            ...o,
            altBoundary: !0
          }), s = Ql(a, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: eu(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function ag(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = En(n), i = Gr(n), l = zr(n) === "y", c = ["left", "top"].includes(s) ? -1 : 1, u = a && l ? -1 : 1, d = wn(t, e);
  let {
    mainAxis: f,
    crossAxis: p,
    alignmentAxis: v
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...d
  };
  return i && typeof v == "number" && (p = i === "end" ? v * -1 : v), l ? {
    x: p * u,
    y: f * c
  } : {
    x: f * c,
    y: p * u
  };
}
const og = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r
      } = t, o = await ag(t, e);
      return {
        x: n + o.x,
        y: r + o.y,
        data: o
      };
    }
  };
}, sg = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: a = !0,
        crossAxis: s = !1,
        limiter: i = {
          fn: (b) => {
            let {
              x: m,
              y
            } = b;
            return {
              x: m,
              y
            };
          }
        },
        ...l
      } = wn(e, t), c = {
        x: n,
        y: r
      }, u = await Aa(t, l), d = zr(En(o)), f = wi(d);
      let p = c[f], v = c[d];
      if (a) {
        const b = f === "y" ? "top" : "left", m = f === "y" ? "bottom" : "right", y = p + u[b], E = p - u[m];
        p = Fs(y, p, E);
      }
      if (s) {
        const b = d === "y" ? "top" : "left", m = d === "y" ? "bottom" : "right", y = v + u[b], E = v - u[m];
        v = Fs(y, v, E);
      }
      const g = i.fn({
        ...t,
        [f]: p,
        [d]: v
      });
      return {
        ...g,
        data: {
          x: g.x - n,
          y: g.y - r
        }
      };
    }
  };
}, ig = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: a,
        middlewareData: s
      } = t, {
        offset: i = 0,
        mainAxis: l = !0,
        crossAxis: c = !0
      } = wn(e, t), u = {
        x: n,
        y: r
      }, d = zr(o), f = wi(d);
      let p = u[f], v = u[d];
      const g = wn(i, t), b = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (l) {
        const E = f === "y" ? "height" : "width", _ = a.reference[f] - a.floating[E] + b.mainAxis, $ = a.reference[f] + a.reference[E] - b.mainAxis;
        p < _ ? p = _ : p > $ && (p = $);
      }
      if (c) {
        var m, y;
        const E = f === "y" ? "width" : "height", _ = ["top", "left"].includes(En(o)), $ = a.reference[d] - a.floating[E] + (_ && ((m = s.offset) == null ? void 0 : m[d]) || 0) + (_ ? 0 : b.crossAxis), O = a.reference[d] + a.reference[E] + (_ ? 0 : ((y = s.offset) == null ? void 0 : y[d]) || 0) - (_ ? b.crossAxis : 0);
        v < $ ? v = $ : v > O && (v = O);
      }
      return {
        [f]: p,
        [d]: v
      };
    }
  };
}, lg = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      const {
        placement: n,
        rects: r,
        platform: o,
        elements: a
      } = t, {
        apply: s = () => {
        },
        ...i
      } = wn(e, t), l = await Aa(t, i), c = En(n), u = Gr(n), d = zr(n) === "y", {
        width: f,
        height: p
      } = r.floating;
      let v, g;
      c === "top" || c === "bottom" ? (v = c, g = u === (await (o.isRTL == null ? void 0 : o.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (g = c, v = u === "end" ? "top" : "bottom");
      const b = p - l[v], m = f - l[g], y = !t.middlewareData.shift;
      let E = b, _ = m;
      if (d) {
        const O = f - l.left - l.right;
        _ = u || y ? Wn(m, O) : O;
      } else {
        const O = p - l.top - l.bottom;
        E = u || y ? Wn(b, O) : O;
      }
      if (y && !u) {
        const O = _t(l.left, 0), A = _t(l.right, 0), x = _t(l.top, 0), S = _t(l.bottom, 0);
        d ? _ = f - 2 * (O !== 0 || A !== 0 ? O + A : _t(l.left, l.right)) : E = p - 2 * (x !== 0 || S !== 0 ? x + S : _t(l.top, l.bottom));
      }
      await s({
        ...t,
        availableWidth: _,
        availableHeight: E
      });
      const $ = await o.getDimensions(a.floating);
      return f !== $.width || p !== $.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function zn(e) {
  return Cd(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Dt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function An(e) {
  var t;
  return (t = (Cd(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Cd(e) {
  return e instanceof Node || e instanceof Dt(e).Node;
}
function On(e) {
  return e instanceof Element || e instanceof Dt(e).Element;
}
function on(e) {
  return e instanceof HTMLElement || e instanceof Dt(e).HTMLElement;
}
function tu(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Dt(e).ShadowRoot;
}
function Ra(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = It(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function ug(e) {
  return ["table", "td", "th"].includes(zn(e));
}
function Di(e) {
  const t = ki(), n = It(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function cg(e) {
  let t = Ir(e);
  for (; on(t) && !Ho(t); ) {
    if (Di(t))
      return t;
    t = Ir(t);
  }
  return null;
}
function ki() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Ho(e) {
  return ["html", "body", "#document"].includes(zn(e));
}
function It(e) {
  return Dt(e).getComputedStyle(e);
}
function Uo(e) {
  return On(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function Ir(e) {
  if (zn(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    tu(e) && e.host || // Fallback.
    An(e)
  );
  return tu(t) ? t.host : t;
}
function Nd(e) {
  const t = Ir(e);
  return Ho(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : on(t) && Ra(t) ? t : Nd(t);
}
function xa(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Nd(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Dt(o);
  return a ? t.concat(s, s.visualViewport || [], Ra(o) ? o : [], s.frameElement && n ? xa(s.frameElement) : []) : t.concat(o, xa(o, [], n));
}
function Pd(e) {
  const t = It(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = on(e), a = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, i = vo(n) !== a || vo(r) !== s;
  return i && (n = a, r = s), {
    width: n,
    height: r,
    $: i
  };
}
function $i(e) {
  return On(e) ? e : e.contextElement;
}
function Ar(e) {
  const t = $i(e);
  if (!on(t))
    return Gn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = Pd(t);
  let s = (a ? vo(n.width) : n.width) / r, i = (a ? vo(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: s,
    y: i
  };
}
const dg = /* @__PURE__ */ Gn(0);
function Sd(e) {
  const t = Dt(e);
  return !ki() || !t.visualViewport ? dg : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function fg(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Dt(e) ? !1 : t;
}
function dr(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = $i(e);
  let s = Gn(1);
  t && (r ? On(r) && (s = Ar(r)) : s = Ar(e));
  const i = fg(a, n, r) ? Sd(a) : Gn(0);
  let l = (o.left + i.x) / s.x, c = (o.top + i.y) / s.y, u = o.width / s.x, d = o.height / s.y;
  if (a) {
    const f = Dt(a), p = r && On(r) ? Dt(r) : r;
    let v = f.frameElement;
    for (; v && r && p !== f; ) {
      const g = Ar(v), b = v.getBoundingClientRect(), m = It(v), y = b.left + (v.clientLeft + parseFloat(m.paddingLeft)) * g.x, E = b.top + (v.clientTop + parseFloat(m.paddingTop)) * g.y;
      l *= g.x, c *= g.y, u *= g.x, d *= g.y, l += y, c += E, v = Dt(v).frameElement;
    }
  }
  return go({
    width: u,
    height: d,
    x: l,
    y: c
  });
}
function pg(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: r
  } = e;
  const o = on(n), a = An(n);
  if (n === a)
    return t;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  }, i = Gn(1);
  const l = Gn(0);
  if ((o || !o && r !== "fixed") && ((zn(n) !== "body" || Ra(a)) && (s = Uo(n)), on(n))) {
    const c = dr(n);
    i = Ar(n), l.x = c.x + n.clientLeft, l.y = c.y + n.clientTop;
  }
  return {
    width: t.width * i.x,
    height: t.height * i.y,
    x: t.x * i.x - s.scrollLeft * i.x + l.x,
    y: t.y * i.y - s.scrollTop * i.y + l.y
  };
}
function mg(e) {
  return Array.from(e.getClientRects());
}
function Md(e) {
  return dr(An(e)).left + Uo(e).scrollLeft;
}
function vg(e) {
  const t = An(e), n = Uo(e), r = e.ownerDocument.body, o = _t(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = _t(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Md(e);
  const i = -n.scrollTop;
  return It(r).direction === "rtl" && (s += _t(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: s,
    y: i
  };
}
function hg(e, t) {
  const n = Dt(e), r = An(e), o = n.visualViewport;
  let a = r.clientWidth, s = r.clientHeight, i = 0, l = 0;
  if (o) {
    a = o.width, s = o.height;
    const c = ki();
    (!c || c && t === "fixed") && (i = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: i,
    y: l
  };
}
function gg(e, t) {
  const n = dr(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = on(e) ? Ar(e) : Gn(1), s = e.clientWidth * a.x, i = e.clientHeight * a.y, l = o * a.x, c = r * a.y;
  return {
    width: s,
    height: i,
    x: l,
    y: c
  };
}
function nu(e, t, n) {
  let r;
  if (t === "viewport")
    r = hg(e, n);
  else if (t === "document")
    r = vg(An(e));
  else if (On(t))
    r = gg(t, n);
  else {
    const o = Sd(e);
    r = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return go(r);
}
function Id(e, t) {
  const n = Ir(e);
  return n === t || !On(n) || Ho(n) ? !1 : It(n).position === "fixed" || Id(n, t);
}
function yg(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = xa(e, [], !1).filter((i) => On(i) && zn(i) !== "body"), o = null;
  const a = It(e).position === "fixed";
  let s = a ? Ir(e) : e;
  for (; On(s) && !Ho(s); ) {
    const i = It(s), l = Di(s);
    !l && i.position === "fixed" && (o = null), (a ? !l && !o : !l && i.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Ra(s) && !l && Id(e, s)) ? r = r.filter((u) => u !== s) : o = i, s = Ir(s);
  }
  return t.set(e, r), r;
}
function bg(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? yg(t, this._c) : [].concat(n), r], i = s[0], l = s.reduce((c, u) => {
    const d = nu(t, u, o);
    return c.top = _t(d.top, c.top), c.right = Wn(d.right, c.right), c.bottom = Wn(d.bottom, c.bottom), c.left = _t(d.left, c.left), c;
  }, nu(t, i, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function _g(e) {
  return Pd(e);
}
function wg(e, t, n) {
  const r = on(t), o = An(t), a = n === "fixed", s = dr(e, !0, a, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Gn(0);
  if (r || !r && !a)
    if ((zn(t) !== "body" || Ra(o)) && (i = Uo(t)), r) {
      const c = dr(t, !0, a, t);
      l.x = c.x + t.clientLeft, l.y = c.y + t.clientTop;
    } else
      o && (l.x = Md(o));
  return {
    x: s.left + i.scrollLeft - l.x,
    y: s.top + i.scrollTop - l.y,
    width: s.width,
    height: s.height
  };
}
function ru(e, t) {
  return !on(e) || It(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function Ld(e, t) {
  const n = Dt(e);
  if (!on(e))
    return n;
  let r = ru(e, t);
  for (; r && ug(r) && It(r).position === "static"; )
    r = ru(r, t);
  return r && (zn(r) === "html" || zn(r) === "body" && It(r).position === "static" && !Di(r)) ? n : r || cg(e) || n;
}
const Eg = async function(e) {
  let {
    reference: t,
    floating: n,
    strategy: r
  } = e;
  const o = this.getOffsetParent || Ld, a = this.getDimensions;
  return {
    reference: wg(t, await o(n), r),
    floating: {
      x: 0,
      y: 0,
      ...await a(n)
    }
  };
};
function Og(e) {
  return It(e).direction === "rtl";
}
const Dg = {
  convertOffsetParentRelativeRectToViewportRelativeRect: pg,
  getDocumentElement: An,
  getClippingRect: bg,
  getOffsetParent: Ld,
  getElementRects: Eg,
  getClientRects: mg,
  getDimensions: _g,
  getScale: Ar,
  isElement: On,
  isRTL: Og
};
function kg(e, t) {
  let n = null, r;
  const o = An(e);
  function a() {
    clearTimeout(r), n && n.disconnect(), n = null;
  }
  function s(i, l) {
    i === void 0 && (i = !1), l === void 0 && (l = 1), a();
    const {
      left: c,
      top: u,
      width: d,
      height: f
    } = e.getBoundingClientRect();
    if (i || t(), !d || !f)
      return;
    const p = qa(u), v = qa(o.clientWidth - (c + d)), g = qa(o.clientHeight - (u + f)), b = qa(c), y = {
      rootMargin: -p + "px " + -v + "px " + -g + "px " + -b + "px",
      threshold: _t(0, Wn(1, l)) || 1
    };
    let E = !0;
    function _($) {
      const O = $[0].intersectionRatio;
      if (O !== l) {
        if (!E)
          return s();
        O ? s(!1, O) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 100);
      }
      E = !1;
    }
    try {
      n = new IntersectionObserver(_, {
        ...y,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(_, y);
    }
    n.observe(e);
  }
  return s(!0), a;
}
function $g(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, c = $i(e), u = o || a ? [...c ? xa(c) : [], ...xa(t)] : [];
  u.forEach((m) => {
    o && m.addEventListener("scroll", n, {
      passive: !0
    }), a && m.addEventListener("resize", n);
  });
  const d = c && i ? kg(c, n) : null;
  let f = -1, p = null;
  s && (p = new ResizeObserver((m) => {
    let [y] = m;
    y && y.target === c && p && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      p && p.observe(t);
    })), n();
  }), c && !l && p.observe(c), p.observe(t));
  let v, g = l ? dr(e) : null;
  l && b();
  function b() {
    const m = dr(e);
    g && (m.x !== g.x || m.y !== g.y || m.width !== g.width || m.height !== g.height) && n(), g = m, v = requestAnimationFrame(b);
  }
  return n(), () => {
    u.forEach((m) => {
      o && m.removeEventListener("scroll", n), a && m.removeEventListener("resize", n);
    }), d && d(), p && p.disconnect(), p = null, l && cancelAnimationFrame(v);
  };
}
const Tg = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Dg,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return eg(e, t, {
    ...o,
    platform: a
  });
};
function Bs(e) {
  var t;
  return (t = e == null ? void 0 : e.$el) != null ? t : e;
}
function Ag(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const n = Bs(h(e.element));
      return n == null ? {} : tg({
        element: n,
        padding: e.padding
      }).fn(t);
    }
  };
}
function Rd(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function au(e, t) {
  const n = Rd(e);
  return Math.round(t * n) / n;
}
function xg(e, t, n) {
  n === void 0 && (n = {});
  const r = n.whileElementsMounted, o = C(() => {
    var A;
    return (A = h(n.open)) != null ? A : !0;
  }), a = C(() => h(n.middleware)), s = C(() => {
    var A;
    return (A = h(n.placement)) != null ? A : "bottom";
  }), i = C(() => {
    var A;
    return (A = h(n.strategy)) != null ? A : "absolute";
  }), l = C(() => {
    var A;
    return (A = h(n.transform)) != null ? A : !0;
  }), c = C(() => Bs(e.value)), u = C(() => Bs(t.value)), d = B(0), f = B(0), p = B(i.value), v = B(s.value), g = ii({}), b = B(!1), m = C(() => {
    const A = {
      position: p.value,
      left: "0",
      top: "0"
    };
    if (!u.value)
      return A;
    const x = au(u.value, d.value), S = au(u.value, f.value);
    return l.value ? {
      ...A,
      transform: "translate(" + x + "px, " + S + "px)",
      ...Rd(u.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: p.value,
      left: x + "px",
      top: S + "px"
    };
  });
  let y;
  function E() {
    c.value == null || u.value == null || Tg(c.value, u.value, {
      middleware: a.value,
      placement: s.value,
      strategy: i.value
    }).then((A) => {
      d.value = A.x, f.value = A.y, p.value = A.strategy, v.value = A.placement, g.value = A.middlewareData, b.value = !0;
    });
  }
  function _() {
    typeof y == "function" && (y(), y = void 0);
  }
  function $() {
    if (_(), r === void 0) {
      E();
      return;
    }
    if (c.value != null && u.value != null) {
      y = r(c.value, u.value, E);
      return;
    }
  }
  function O() {
    o.value || (b.value = !1);
  }
  return _e([a, s, i], E, {
    flush: "sync"
  }), _e([c, u], $, {
    flush: "sync"
  }), _e(o, O, {
    flush: "sync"
  }), Mc() && Ic(_), {
    x: _r(d),
    y: _r(f),
    strategy: _r(p),
    placement: _r(v),
    middlewareData: _r(g),
    isPositioned: _r(b),
    floatingStyles: m,
    update: E
  };
}
function cn(e, t) {
  const n = typeof e == "string" && !t ? `${e}Context` : t, r = Symbol(n);
  return [(o) => {
    const a = Be(r, o);
    if (a || a === null)
      return a;
    throw new Error(
      `Injection \`${r.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (o) => (nn(r, o), o)];
}
function Fd(e, t, n) {
  const r = n.originalEvent.target, o = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && r.addEventListener(e, t, { once: !0 }), r.dispatchEvent(o);
}
function Cg(e, t) {
  var n;
  const r = ii();
  return bt(() => {
    r.value = e();
  }, {
    ...t,
    flush: (n = t == null ? void 0 : t.flush) != null ? n : "sync"
  }), sm(r);
}
function Ng(e, t) {
  let n, r, o;
  const a = B(!0), s = () => {
    a.value = !0, o();
  };
  _e(e, s, { flush: "sync" });
  const i = typeof t == "function" ? t : t.get, l = typeof t == "function" ? void 0 : t.set, c = Fc((u, d) => (r = u, o = d, {
    get() {
      return a.value && (n = i(), a.value = !1), r(), n;
    },
    set(f) {
      l == null || l(f);
    }
  }));
  return Object.isExtensible(c) && (c.trigger = s), c;
}
function Vd(e) {
  return Mc() ? (Ic(e), !0) : !1;
}
function jo(e) {
  let t = !1, n;
  const r = Sc(!0);
  return (...o) => (t || (n = r.run(() => e(...o)), t = !0), n);
}
function or(e) {
  return typeof e == "function" ? e() : h(e);
}
const Kr = typeof window < "u" && typeof document < "u", Pg = (e) => typeof e < "u", Sg = Object.prototype.toString, Mg = (e) => Sg.call(e) === "[object Object]", Ig = () => {
};
function Lg(e, t = 1e4) {
  return Fc((n, r) => {
    let o = or(e), a;
    const s = () => setTimeout(() => {
      o = or(e), r();
    }, or(t));
    return Vd(() => {
      clearTimeout(a);
    }), {
      get() {
        return n(), o;
      },
      set(i) {
        o = i, r(), clearTimeout(a), a = s();
      }
    };
  });
}
function mr(e) {
  var t;
  const n = or(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Bd = Kr ? window : void 0;
function Rg(...e) {
  let t, n, r, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, r, o] = e, t = Bd) : [t, n, r, o] = e, !t)
    return Ig;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const a = [], s = () => {
    a.forEach((u) => u()), a.length = 0;
  }, i = (u, d, f, p) => (u.addEventListener(d, f, p), () => u.removeEventListener(d, f, p)), l = _e(
    () => [mr(t), or(o)],
    ([u, d]) => {
      if (s(), !u)
        return;
      const f = Mg(d) ? { ...d } : d;
      a.push(
        ...n.flatMap((p) => r.map((v) => i(u, p, v, f)))
      );
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    l(), s();
  };
  return Vd(c), c;
}
function Fg(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function Vg(...e) {
  let t, n, r = {};
  e.length === 3 ? (t = e[0], n = e[1], r = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], r = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: o = Bd,
    eventName: a = "keydown",
    passive: s = !1,
    dedupe: i = !1
  } = r, l = Fg(t);
  return Rg(o, a, (c) => {
    c.repeat && or(i) || l(c) && n(c);
  }, s);
}
function Bg() {
  const e = B(!1);
  return Mt() && Gt(() => {
    e.value = !0;
  }), e;
}
function Yg(e) {
  return JSON.parse(JSON.stringify(e));
}
function Ti(e, t, n, r = {}) {
  var o, a, s;
  const {
    clone: i = !1,
    passive: l = !1,
    eventName: c,
    deep: u = !1,
    defaultValue: d,
    shouldEmit: f
  } = r, p = Mt(), v = n || (p == null ? void 0 : p.emit) || ((o = p == null ? void 0 : p.$emit) == null ? void 0 : o.bind(p)) || ((s = (a = p == null ? void 0 : p.proxy) == null ? void 0 : a.$emit) == null ? void 0 : s.bind(p == null ? void 0 : p.proxy));
  let g = c;
  t || (t = "modelValue"), g = g || `update:${t.toString()}`;
  const b = (E) => i ? typeof i == "function" ? i(E) : Yg(E) : E, m = () => Pg(e[t]) ? b(e[t]) : d, y = (E) => {
    f ? f(E) && v(g, E) : v(g, E);
  };
  if (l) {
    const E = m(), _ = B(E);
    let $ = !1;
    return _e(
      () => e[t],
      (O) => {
        $ || ($ = !0, _.value = b(O), Et(() => $ = !1));
      }
    ), _e(
      _,
      (O) => {
        !$ && (O !== e[t] || u) && y(O);
      },
      { deep: u }
    ), _;
  } else
    return C({
      get() {
        return m();
      },
      set(E) {
        y(E);
      }
    });
}
function Ai(e) {
  return e ? e.flatMap((t) => t.type === Ee ? Ai(t.children) : [t]) : [];
}
function Hg(e, t, n, r = {}) {
  if (!t)
    return null;
  const {
    arrowKeyOptions: o = "both",
    attributeName: a = "data-radix-vue-collection-item",
    itemsArray: s = [],
    loop: i = !0,
    dir: l = "ltr",
    preventScroll: c = !0,
    focus: u = !1
  } = r, [d, f, p, v, g, b] = [
    e.key === "ArrowRight",
    e.key === "ArrowLeft",
    e.key === "ArrowUp",
    e.key === "ArrowDown",
    e.key === "Home",
    e.key === "End"
  ], m = p || v, y = d || f;
  if (!g && !b && (!m && !y || o === "vertical" && y || o === "horizontal" && m))
    return null;
  const E = n ? Array.from(n.querySelectorAll(`[${a}]`)) : s;
  if (!E.length)
    return null;
  c && e.preventDefault();
  let _ = null;
  return y || m ? _ = Yd(E, t, {
    goForward: m ? v : l === "ltr" ? d : f,
    loop: i
  }) : g ? _ = E.at(0) || null : b && (_ = E.at(-1) || null), u && (_ == null || _.focus()), _;
}
function Yd(e, t, { goForward: n, loop: r }, o = e.length) {
  if (--o === 0)
    return null;
  const a = e.indexOf(t), s = n ? a + 1 : a - 1;
  if (!r && (s < 0 || s >= e.length))
    return null;
  const i = (s + e.length) % e.length, l = e[i];
  return l ? l.hasAttribute("disabled") && l.getAttribute("disabled") !== "false" ? Yd(
    e,
    l,
    { goForward: n, loop: r },
    o
  ) : l : null;
}
function ds(e) {
  return e !== null && typeof e == "object";
}
function Ys(e, t, n = ".", r) {
  if (!ds(t))
    return Ys(e, {}, n, r);
  const o = Object.assign({}, t);
  for (const a in e) {
    if (a === "__proto__" || a === "constructor")
      continue;
    const s = e[a];
    s != null && (r && r(o, a, s, n) || (Array.isArray(s) && Array.isArray(o[a]) ? o[a] = [...s, ...o[a]] : ds(s) && ds(o[a]) ? o[a] = Ys(
      s,
      o[a],
      (n ? `${n}.` : "") + a.toString(),
      r
    ) : o[a] = s));
  }
  return o;
}
function Ug(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((n, r) => Ys(n, r, "", e), {})
  );
}
const jg = Ug(), [Hd, PR] = cn("ConfigProvider"), Wg = jo(() => B()), Gg = jo(() => B(0));
function Ud(e) {
  const t = Hd({
    scrollBody: B(!0)
  }), n = Gg(), r = Wg(), o = B(e), a = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = r.value ?? "", r.value = void 0;
  };
  return e && n.value++, _e(o, (s) => {
    var i;
    if (Kr && s) {
      r.value === void 0 && (r.value = document.body.style.overflow);
      const l = window.innerWidth - document.documentElement.clientWidth, c = { padding: l, margin: 0 }, u = (i = t.scrollBody) != null && i.value ? typeof t.scrollBody.value == "object" ? jg({
        padding: t.scrollBody.value.padding === !0 ? l : t.scrollBody.value.padding,
        margin: t.scrollBody.value.margin === !0 ? l : t.scrollBody.value.margin
      }, c) : c : { padding: 0, margin: 0 };
      l > 0 && (document.body.style.paddingRight = `${u.padding}px`, document.body.style.marginRight = `${u.margin}px`, document.body.style.setProperty("--scrollbar-width", `${l}px`), document.body.style.overflow = "hidden"), Et(() => {
        document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
      });
    }
  }, { immediate: !0 }), Rc(() => {
    e && n.value--, n.value === 0 && a();
  }), o;
}
const zg = "data-radix-vue-collection-item";
function jd(e, t = zg) {
  const n = e ?? Symbol();
  return { createCollection: (r) => {
    const o = B([]);
    function a() {
      const s = mr(r);
      return s ? o.value = Array.from(
        s.querySelectorAll(`[${t}]:not([data-disabled=true])`)
      ) : o.value = [];
    }
    return im(() => {
      o.value = [];
    }), Gt(a), lm(a), _e(() => r == null ? void 0 : r.value, a, { immediate: !0 }), nn(n, o), o;
  }, injectCollection: () => Be(n, B([])) };
}
function Kg(e) {
  const t = Hd({
    dir: B("ltr")
  });
  return C(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.dir) == null ? void 0 : n.value) || "ltr";
  });
}
function qg(e) {
  const t = Mt(), n = t == null ? void 0 : t.type.emits, r = {};
  return n != null && n.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), n == null || n.forEach((o) => {
    r[um(Vc(o))] = (...a) => e(o, ...a);
  }), r;
}
let fs = 0;
function Wd() {
  bt((e) => {
    if (!Kr)
      return;
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? ou()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? ou()
    ), fs++, e(() => {
      fs === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((n) => n.remove()), fs--;
    });
  });
}
function ou() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
function Zg(e) {
  return C(() => {
    var t;
    return or(e) ? !!((t = mr(e)) != null && t.closest("form")) : !0;
  });
}
function Gd(e) {
  const t = Mt(), n = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((r, o) => {
    const a = (t == null ? void 0 : t.type.props[o]).default;
    return a !== void 0 && (r[o] = a), r;
  }, {});
  return Ng(() => ({ ...e }), () => {
    const r = {}, o = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(o).forEach((a) => {
      r[Vc(a)] = o[a];
    }), Object.keys({ ...n, ...r }).reduce((a, s) => (e[s] !== void 0 && (a[s] = e[s]), a), {});
  });
}
function qr(e, t) {
  const n = Gd(e), r = t ? qg(t) : {};
  return C(() => ({
    ...n.value,
    ...r
  }));
}
function Xg() {
  const e = Mt();
  function t(n) {
    typeof n == "object" && (e.exposed = n, e.exposeProxy = n);
  }
  return t;
}
var Jg = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Er = /* @__PURE__ */ new WeakMap(), Za = /* @__PURE__ */ new WeakMap(), Xa = {}, ps = 0, zd = function(e) {
  return e && (e.host || zd(e.parentNode));
}, Qg = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = zd(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, ey = function(e, t, n, r) {
  var o = Qg(t, Array.isArray(e) ? e : [e]);
  Xa[n] || (Xa[n] = /* @__PURE__ */ new WeakMap());
  var a = Xa[n], s = [], i = /* @__PURE__ */ new Set(), l = new Set(o), c = function(d) {
    !d || i.has(d) || (i.add(d), c(d.parentNode));
  };
  o.forEach(c);
  var u = function(d) {
    !d || l.has(d) || Array.prototype.forEach.call(d.children, function(f) {
      if (i.has(f))
        u(f);
      else {
        var p = f.getAttribute(r), v = p !== null && p !== "false", g = (Er.get(f) || 0) + 1, b = (a.get(f) || 0) + 1;
        Er.set(f, g), a.set(f, b), s.push(f), g === 1 && v && Za.set(f, !0), b === 1 && f.setAttribute(n, "true"), v || f.setAttribute(r, "true");
      }
    });
  };
  return u(t), i.clear(), ps++, function() {
    s.forEach(function(d) {
      var f = Er.get(d) - 1, p = a.get(d) - 1;
      Er.set(d, f), a.set(d, p), f || (Za.has(d) || d.removeAttribute(r), Za.delete(d)), p || d.removeAttribute(n);
    }), ps--, ps || (Er = /* @__PURE__ */ new WeakMap(), Er = /* @__PURE__ */ new WeakMap(), Za = /* @__PURE__ */ new WeakMap(), Xa = {});
  };
}, ty = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = t || Jg(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), ey(r, o, n, "aria-hidden")) : function() {
    return null;
  };
};
function ny(e) {
  let t;
  _e(() => mr(e), (n) => {
    n ? t = ty(n) : t && t();
  }), qn(() => {
    t && t();
  });
}
const ry = jo(() => ({ count: B(0) }));
function ay(e) {
  const { count: t } = ry();
  return e || t.value++, e || `radix-${t.value}`;
}
function oy(e) {
  const t = B(), n = C(() => {
    var o;
    return ((o = t.value) == null ? void 0 : o.width) ?? 0;
  }), r = C(() => {
    var o;
    return ((o = t.value) == null ? void 0 : o.height) ?? 0;
  });
  return Gt(() => {
    const o = mr(e);
    if (o) {
      t.value = { width: o.offsetWidth, height: o.offsetHeight };
      const a = new ResizeObserver((s) => {
        if (!Array.isArray(s) || !s.length)
          return;
        const i = s[0];
        let l, c;
        if ("borderBoxSize" in i) {
          const u = i.borderBoxSize, d = Array.isArray(u) ? u[0] : u;
          l = d.inlineSize, c = d.blockSize;
        } else
          l = o.offsetWidth, c = o.offsetHeight;
        t.value = { width: l, height: c };
      });
      return a.observe(o, { box: "border-box" }), () => a.unobserve(o);
    } else
      t.value = void 0;
  }), {
    width: n,
    height: r
  };
}
function sy(e, t) {
  const n = B(e);
  function r(o) {
    return t[n.value][o] ?? n.value;
  }
  return {
    state: n,
    dispatch: (o) => {
      n.value = r(o);
    }
  };
}
function iy(e) {
  const t = Lg("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (n) => {
      var r, o;
      t.value = t.value + n;
      const a = e.value, s = document.activeElement, i = ((o = (r = a.find((d) => d === s)) == null ? void 0 : r.textContent) == null ? void 0 : o.trim()) ?? "", l = a.map((d) => {
        var f;
        return ((f = d.textContent) == null ? void 0 : f.trim()) ?? "";
      }), c = uy(l, t.value, i), u = a.find(
        (d) => {
          var f;
          return ((f = d.textContent) == null ? void 0 : f.trim()) === c;
        }
      );
      u && u.focus();
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function ly(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function uy(e, t, n) {
  const r = t.length > 1 && Array.from(t).every((i) => i === t[0]) ? t[0] : t, o = n ? e.indexOf(n) : -1;
  let a = ly(e, Math.max(o, 0));
  r.length === 1 && (a = a.filter((i) => i !== n));
  const s = a.find(
    (i) => i.toLowerCase().startsWith(r.toLowerCase())
  );
  return s !== n ? s : void 0;
}
const xi = de({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n }) {
    return () => {
      var r, o;
      if (!n.default)
        return null;
      const a = Ai(n.default()), [s, ...i] = a;
      if (Object.keys(t).length > 0) {
        (r = s.props) == null || delete r.ref;
        const l = Qe(t, s.props ?? {});
        t.class && (o = s.props) != null && o.class && delete s.props.class;
        const c = om(s, l);
        for (const u in l)
          u.startsWith("on") && (c.props || (c.props = {}), c.props[u] = l[u]);
        return a.length === 1 ? c : [c, ...i];
      }
      return a;
    };
  }
}), Dn = de({
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
    return (e.asChild ? "template" : e.as) !== "template" ? () => jt(e.as, t, { default: n.default }) : () => jt(xi, t, { default: n.default });
  }
});
function zt() {
  const e = B(), t = C(() => {
    var n, r;
    return ["#text", "#comment"].includes((n = e.value) == null ? void 0 : n.$el.nodeName) ? (r = e.value) == null ? void 0 : r.$el.nextElementSibling : mr(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
function cy(e, t) {
  const n = B({}), r = B("none"), o = e.value ? "mounted" : "unmounted", { state: a, dispatch: s } = sy(o, {
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
  _e(
    e,
    async (d, f) => {
      var p;
      const v = f !== d;
      if (await Et(), v) {
        const g = r.value, b = Ja(t.value);
        d ? s("MOUNT") : b === "none" || ((p = n.value) == null ? void 0 : p.display) === "none" ? s("UNMOUNT") : s(f && g !== b ? "ANIMATION_OUT" : "UNMOUNT");
      }
    },
    { immediate: !0 }
  );
  const i = (d) => {
    const f = Ja(t.value), p = f.includes(
      d.animationName
    );
    d.target === t.value && p && s("ANIMATION_END"), d.target === t.value && f === "none" && s("ANIMATION_END");
  }, l = (d) => {
    d.target === t.value && (r.value = Ja(t.value));
  }, c = _e(
    t,
    (d, f) => {
      d ? (n.value = getComputedStyle(d), d.addEventListener("animationstart", l), d.addEventListener("animationcancel", i), d.addEventListener("animationend", i)) : (s("ANIMATION_END"), f == null || f.removeEventListener("animationstart", l), f == null || f.removeEventListener("animationcancel", i), f == null || f.removeEventListener("animationend", i));
    },
    { immediate: !0 }
  ), u = _e(a, () => {
    const d = Ja(t.value);
    r.value = a.value === "mounted" ? d : "none";
  });
  return qn(() => {
    c(), u();
  }), {
    isPresent: C(
      () => ["mounted", "unmountSuspended"].includes(a.value)
    )
  };
}
function Ja(e) {
  return e && getComputedStyle(e).animationName || "none";
}
const Kd = de({
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
    const { present: o, forceMount: a } = Ur(e), s = B(), { isPresent: i } = cy(o, s);
    n({ present: i });
    let l = t.default({ present: i });
    l = Ai(l || []);
    const c = Mt();
    if (l && (l == null ? void 0 : l.length) > 1) {
      const u = (r = c == null ? void 0 : c.parent) != null && r.type.name ? `<${c.parent.type.name} />` : "component";
      throw new Error(
        [
          `Detected an invalid children for \`${u}\` for  \`Presence\` component.`,
          "",
          "Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.",
          "You can apply a few solutions:",
          [
            "Provide a single child element so that `presence` directive attach correctly.rv",
            "Ensure the first child is an actual element instead of a raw text node or comment node."
          ].map((d) => `  - ${d}`).join(`
`)
        ].join(`
`)
      );
    }
    return () => a.value || o.value || i.value ? jt(t.default({ present: i })[0], {
      ref: (u) => {
        const d = mr(u);
        return typeof (d == null ? void 0 : d.hasAttribute) > "u" || (d != null && d.hasAttribute("data-radix-popper-content-wrapper") ? s.value = d.firstChild : s.value = d), d;
      }
    }) : null;
  }
}), dy = /* @__PURE__ */ de({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = Bg();
    return (n, r) => h(t) || n.forceMount ? (T(), De(Bc, {
      key: 0,
      to: n.to,
      disabled: n.disabled
    }, [
      Me(n.$slots, "default")
    ], 8, ["to", "disabled"])) : re("", !0);
  }
}), fy = "dismissableLayer.pointerDownOutside", py = "dismissableLayer.focusOutside";
function qd(e, t) {
  const n = t.closest(
    "[data-dismissable-layer]"
  ), r = e.querySelector(
    "[data-dismissable-layer]"
  ), o = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(n && r === n || o.indexOf(r) < o.indexOf(n));
}
function my(e, t) {
  var n;
  const r = ((n = t == null ? void 0 : t.value) == null ? void 0 : n.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = B(!1), a = B(() => {
  });
  return bt((s) => {
    if (!Kr)
      return;
    const i = async (c) => {
      if (t != null && t.value) {
        if (qd(t.value, c.target)) {
          o.value = !1;
          return;
        }
        if (c.target && !o.value) {
          let u = function() {
            Fd(
              fy,
              e,
              d
            );
          };
          const d = { originalEvent: c };
          c.pointerType === "touch" ? (r.removeEventListener("click", a.value), a.value = u, r.addEventListener("click", a.value, {
            once: !0
          })) : u();
        } else
          r.removeEventListener("click", a.value);
        o.value = !1;
      }
    }, l = window.setTimeout(() => {
      r.addEventListener("pointerdown", i);
    }, 0);
    s(() => {
      window.clearTimeout(l), r.removeEventListener("pointerdown", i), r.removeEventListener("click", a.value);
    });
  }), {
    onPointerDownCapture: () => o.value = !0
  };
}
function vy(e, t) {
  var n;
  const r = ((n = t == null ? void 0 : t.value) == null ? void 0 : n.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = B(!1);
  return bt((a) => {
    if (!Kr)
      return;
    const s = async (i) => {
      t != null && t.value && (await Et(), !qd(t.value, i.target) && i.target && !o.value && Fd(
        py,
        e,
        { originalEvent: i }
      ));
    };
    r.addEventListener("focusin", s), a(() => r.removeEventListener("focusin", s));
  }), {
    onFocusCapture: () => o.value = !0,
    onBlurCapture: () => o.value = !1
  };
}
const vn = Ia({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Zd = /* @__PURE__ */ de({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, r = t, { primitiveElement: o, currentElement: a } = zt(), s = C(
      () => {
        var v;
        return ((v = a.value) == null ? void 0 : v.ownerDocument) ?? globalThis.document;
      }
    ), i = C(() => vn.layersRoot), l = C(() => a.value ? Array.from(i.value).indexOf(a.value) : -1), c = C(() => vn.layersWithOutsidePointerEventsDisabled.size > 0), u = C(() => {
      const v = Array.from(i.value), [g] = [...vn.layersWithOutsidePointerEventsDisabled].slice(-1), b = v.indexOf(g);
      return l.value >= b;
    }), d = my(async (v) => {
      const g = [...vn.branches].some(
        (b) => b.contains(v.target)
      );
      !u.value || g || (r("pointerDownOutside", v), r("interactOutside", v), await Et(), v.defaultPrevented || r("dismiss"));
    }, a), f = vy((v) => {
      [...vn.branches].some(
        (g) => g.contains(v.target)
      ) || (r("focusOutside", v), r("interactOutside", v), v.defaultPrevented || r("dismiss"));
    }, a);
    Vg("Escape", (v) => {
      l.value === i.value.size - 1 && (r("escapeKeyDown", v), v.defaultPrevented || r("dismiss"));
    });
    let p;
    return bt((v) => {
      a.value && (n.disableOutsidePointerEvents && (vn.layersWithOutsidePointerEventsDisabled.size === 0 && (p = s.value.body.style.pointerEvents, s.value.body.style.pointerEvents = "none"), vn.layersWithOutsidePointerEventsDisabled.add(a.value)), i.value.add(a.value), v(() => {
        n.disableOutsidePointerEvents && vn.layersWithOutsidePointerEventsDisabled.size === 1 && (s.value.body.style.pointerEvents = p);
      }));
    }), bt((v) => {
      v(() => {
        a.value && (i.value.delete(a.value), vn.layersWithOutsidePointerEventsDisabled.delete(a.value));
      });
    }), (v, g) => (T(), De(h(Dn), {
      ref_key: "primitiveElement",
      ref: o,
      "as-child": v.asChild,
      as: v.as,
      "data-dismissable-layer": "",
      style: Hn({
        pointerEvents: c.value ? u.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: h(f).onFocusCapture,
      onBlurCapture: h(f).onBlurCapture,
      onPointerdownCapture: h(d).onPointerDownCapture
    }, {
      default: he(() => [
        Me(v.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
}), ms = "focusScope.autoFocusOnMount", vs = "focusScope.autoFocusOnUnmount", su = { bubbles: !1, cancelable: !0 };
function hy(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Vn(r, { select: t }), document.activeElement !== n)
      return !0;
}
function gy(e) {
  const t = Xd(e), n = iu(t, e), r = iu(t.reverse(), e);
  return [n, r];
}
function Xd(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}
function iu(e, t) {
  for (const n of e)
    if (!yy(n, { upTo: t }))
      return n;
}
function yy(e, { upTo: t }) {
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
function by(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Vn(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && by(e) && t && e.select();
  }
}
const _y = jo(() => B([]));
function wy() {
  const e = _y();
  return {
    add(t) {
      const n = e.value[0];
      t !== n && (n == null || n.pause()), e.value = lu(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var n;
      e.value = lu(e.value, t), (n = e.value[0]) == null || n.resume();
    }
  };
}
function lu(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Ey(e) {
  return e.filter((t) => t.tagName !== "A");
}
const Jd = /* @__PURE__ */ de({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, r = t, { primitiveElement: o, currentElement: a } = zt(), s = B(null), i = wy(), l = Ia({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    bt((u) => {
      if (!Kr)
        return;
      const d = a.value;
      if (!n.trapped)
        return;
      function f(b) {
        if (l.paused || !d)
          return;
        const m = b.target;
        d.contains(m) ? s.value = m : Vn(s.value, { select: !0 });
      }
      function p(b) {
        if (l.paused || !d)
          return;
        const m = b.relatedTarget;
        m !== null && (d.contains(m) || Vn(s.value, { select: !0 }));
      }
      function v(b) {
        d.contains(s.value) || Vn(d);
      }
      document.addEventListener("focusin", f), document.addEventListener("focusout", p);
      const g = new MutationObserver(v);
      d && g.observe(d, { childList: !0, subtree: !0 }), u(() => {
        document.removeEventListener("focusin", f), document.removeEventListener("focusout", p), g.disconnect();
      });
    }), bt(async (u) => {
      const d = a.value;
      if (await Et(), !d)
        return;
      i.add(l);
      const f = document.activeElement;
      if (!d.contains(f)) {
        const p = new CustomEvent(ms, su);
        d.addEventListener(
          ms,
          (v) => r("mountAutoFocus", v)
        ), d.dispatchEvent(p), p.defaultPrevented || (hy(Ey(Xd(d)), {
          select: !0
        }), document.activeElement === f && Vn(d));
      }
      u(() => {
        d.removeEventListener(
          ms,
          (g) => r("mountAutoFocus", g)
        );
        const p = new CustomEvent(vs, su), v = (g) => {
          r("unmountAutoFocus", g);
        };
        d.addEventListener(vs, v), d.dispatchEvent(p), setTimeout(() => {
          p.defaultPrevented || Vn(f ?? document.body, { select: !0 }), d.removeEventListener(vs, v), i.remove(l);
        }, 0);
      });
    });
    function c(u) {
      if (!n.loop && !n.trapped || l.paused)
        return;
      const d = u.key === "Tab" && !u.altKey && !u.ctrlKey && !u.metaKey, f = document.activeElement;
      if (d && f) {
        const p = u.currentTarget, [v, g] = gy(p);
        v && g ? !u.shiftKey && f === g ? (u.preventDefault(), n.loop && Vn(v, { select: !0 })) : u.shiftKey && f === v && (u.preventDefault(), n.loop && Vn(g, { select: !0 })) : f === p && u.preventDefault();
      }
    }
    return (u, d) => (T(), De(h(Dn), {
      ref_key: "primitiveElement",
      ref: o,
      tabindex: "-1",
      "as-child": n.asChild,
      as: n.as,
      onKeydown: c
    }, {
      default: he(() => [
        Me(u.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), Oy = ["ArrowDown", "PageUp", "Home"], Qd = ["ArrowUp", "PageDown", "End"], Dy = [...Oy, ...Qd];
function ky(e) {
  return e ? "open" : "closed";
}
function $y(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function Ty(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a].x, l = t[a].y, c = t[s].x, u = t[s].y;
    l > r != u > r && n < (c - i) * (r - l) / (u - l) + i && (o = !o);
  }
  return o;
}
function Ay(e, t) {
  if (!t)
    return !1;
  const n = { x: e.clientX, y: e.clientY };
  return Ty(n, t);
}
function xy(e) {
  return e.pointerType === "mouse";
}
function Ci(e) {
  return e === "indeterminate";
}
function ef(e) {
  return Ci(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const Cy = ["value", "checked", "name", "disabled", "required"], [Ny, Py] = cn("CheckboxRoot"), Sy = /* @__PURE__ */ de({
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
    const n = e, r = t, { disabled: o } = Ur(n), a = Ti(n, "checked", r, {
      defaultValue: n.defaultChecked,
      passive: n.checked === void 0
    }), { primitiveElement: s, currentElement: i } = zt(), l = Zg(i), c = C(() => {
      var u;
      return n.id && i.value ? (u = document.querySelector(`[for="${n.id}"]`)) == null ? void 0 : u.innerText : void 0;
    });
    return Py({
      disabled: o,
      state: a
    }), (u, d) => (T(), I(Ee, null, [
      ce(h(Dn), Qe(u.$attrs, {
        id: u.id,
        ref_key: "primitiveElement",
        ref: s,
        role: "checkbox",
        "as-child": n.asChild,
        as: u.as,
        type: u.as === "button" ? "button" : void 0,
        "aria-checked": h(Ci)(h(a)) ? "mixed" : h(a),
        "aria-required": !1,
        "aria-label": u.$attrs["aria-label"] || c.value,
        "data-state": h(ef)(h(a)),
        "data-disabled": h(o) ? "" : void 0,
        disabled: h(o),
        onKeydown: Ds(Oa(() => {
        }, ["prevent"]), ["enter"]),
        onClick: d[0] || (d[0] = (f) => a.value = !h(a))
      }), {
        default: he(() => [
          Me(u.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "as-child", "as", "type", "aria-checked", "aria-label", "data-state", "data-disabled", "disabled", "onKeydown"]),
      h(l) ? (T(), I("input", {
        key: 0,
        type: "checkbox",
        tabindex: "-1",
        "aria-hidden": "",
        value: u.value,
        checked: !!h(a),
        name: n.name,
        disabled: n.disabled,
        required: n.required,
        style: Hn({
          transform: "translateX(-100%)",
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        })
      }, null, 12, Cy)) : re("", !0)
    ], 64));
  }
}), My = /* @__PURE__ */ de({
  __name: "CheckboxIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = Ny();
    return (n, r) => (T(), De(h(Kd), {
      present: n.forceMount || h(Ci)(h(t).state.value) || h(t).state.value === !0
    }, {
      default: he(() => [
        ce(h(Dn), Qe({
          "data-state": h(ef)(h(t).state.value),
          "data-disabled": h(t).disabled.value ? "" : void 0,
          style: { pointerEvents: "none" },
          "as-child": n.asChild,
          as: n.as
        }, n.$attrs), {
          default: he(() => [
            Me(n.$slots, "default")
          ]),
          _: 3
        }, 16, ["data-state", "data-disabled", "as-child", "as"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), [tf, Iy] = cn("PopperRoot"), Ly = /* @__PURE__ */ de({
  __name: "PopperRoot",
  setup(e) {
    const t = B();
    return Iy({
      anchor: t,
      onAnchorChange: (n) => t.value = n
    }), (n, r) => Me(n.$slots, "default");
  }
}), Ry = /* @__PURE__ */ de({
  __name: "PopperAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { primitiveElement: n, currentElement: r } = zt(), o = tf();
    return _e(r, () => {
      o.onAnchorChange(t.element ?? r.value);
    }), (a, s) => (T(), De(h(Dn), {
      ref_key: "primitiveElement",
      ref: n,
      as: a.as,
      "as-child": a.asChild
    }, {
      default: he(() => [
        Me(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function Fy(e) {
  return e !== null;
}
function Vy(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var n, r, o;
      const { placement: a, rects: s, middlewareData: i } = t, l = ((n = i.arrow) == null ? void 0 : n.centerOffset) !== 0, c = l ? 0 : e.arrowWidth, u = l ? 0 : e.arrowHeight, [d, f] = Hs(a), p = { start: "0%", center: "50%", end: "100%" }[f], v = (((r = i.arrow) == null ? void 0 : r.x) ?? 0) + c / 2, g = (((o = i.arrow) == null ? void 0 : o.y) ?? 0) + u / 2;
      let b = "", m = "";
      return d === "bottom" ? (b = l ? p : `${v}px`, m = `${-u}px`) : d === "top" ? (b = l ? p : `${v}px`, m = `${s.floating.height + u}px`) : d === "right" ? (b = `${-u}px`, m = l ? p : `${g}px`) : d === "left" && (b = `${s.floating.width + u}px`, m = l ? p : `${g}px`), { data: { x: b, y: m } };
    }
  };
}
function Hs(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
const nf = {
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
}, [SR, By] = cn("PopperContent"), rf = /* @__PURE__ */ de({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: Lc({
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
    ...nf
  }),
  setup(e, { expose: t }) {
    const n = e, r = tf(), o = Xg(), { primitiveElement: a, currentElement: s } = zt(), i = B(), l = B(), { width: c, height: u } = oy(l), d = C(
      () => n.side + (n.align !== "center" ? `-${n.align}` : "")
    ), f = C(() => typeof n.collisionPadding == "number" ? n.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...n.collisionPadding }), p = C(() => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]), v = C(() => ({
      padding: f.value,
      boundary: p.value.filter(Fy),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: p.value.length > 0
    })), g = Cg(() => [
      og({
        mainAxis: n.sideOffset + u.value,
        alignmentAxis: n.alignOffset
      }),
      n.avoidCollisions && sg({
        mainAxis: !0,
        crossAxis: !!n.prioritizePosition,
        limiter: n.sticky === "partial" ? ig() : void 0,
        ...v.value
      }),
      !n.prioritizePosition && n.avoidCollisions && ng({
        ...v.value
      }),
      lg({
        ...v.value,
        apply: ({ elements: k, rects: R, availableWidth: N, availableHeight: U }) => {
          const { width: J, height: z } = R.reference, ee = k.floating.style;
          Object.assign(k.floating.style, {
            maxWidth: `${N}px`,
            maxHeight: `${U}px`
          }), ee.setProperty(
            "--radix-popper-available-width",
            `${N}px`
          ), ee.setProperty(
            "--radix-popper-available-height",
            `${U}px`
          ), ee.setProperty(
            "--radix-popper-anchor-width",
            `${J}px`
          ), ee.setProperty(
            "--radix-popper-anchor-height",
            `${z}px`
          );
        }
      }),
      l.value && Ag({ element: l.value, padding: n.arrowPadding }),
      Vy({
        arrowWidth: c.value,
        arrowHeight: u.value
      }),
      n.hideWhenDetached && rg({ strategy: "referenceHidden", ...v.value })
    ]), { floatingStyles: b, placement: m, isPositioned: y, middlewareData: E } = xg(
      r.anchor,
      i,
      {
        strategy: "fixed",
        placement: d,
        whileElementsMounted: (...k) => $g(...k, {
          animationFrame: n.updatePositionStrategy === "always"
        }),
        middleware: g
      }
    ), _ = C(
      () => Hs(m.value)[0]
    ), $ = C(
      () => Hs(m.value)[1]
    );
    bt(() => {
      var k;
      y.value && ((k = n.onPlaced) == null || k.call(n));
    });
    const O = C(
      () => {
        var k;
        return ((k = E.value.arrow) == null ? void 0 : k.centerOffset) !== 0;
      }
    ), A = B("");
    bt(() => {
      s.value && (A.value = window.getComputedStyle(s.value).zIndex);
    });
    const x = C(() => {
      var k;
      return ((k = E.value.arrow) == null ? void 0 : k.x) ?? 0;
    }), S = C(() => {
      var k;
      return ((k = E.value.arrow) == null ? void 0 : k.y) ?? 0;
    });
    return By({
      placedSide: _,
      onArrowChange: (k) => l.value = k,
      arrowX: x,
      arrowY: S,
      shouldHideArrow: O
    }), t({
      $el: s
    }), (k, R) => {
      var N, U, J;
      return T(), I("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-radix-popper-content-wrapper": "",
        style: Hn({
          ...h(b),
          transform: h(y) ? h(b).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: A.value,
          "--radix-popper-transform-origin": [
            (N = h(E).transformOrigin) == null ? void 0 : N.x,
            (U = h(E).transformOrigin) == null ? void 0 : U.y
          ].join(" ")
        })
      }, [
        ce(h(Dn), Qe({
          ref: (z) => {
            h(o)(z), a.value = z;
          }
        }, k.$attrs, {
          "as-child": n.asChild,
          as: k.as,
          "data-side": _.value,
          "data-align": $.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: h(y) ? void 0 : "none",
            // hide the content if using the hide middleware and should be hidden
            opacity: (J = h(E).hide) != null && J.referenceHidden ? 0 : void 0
          }
        }), {
          default: he(() => [
            Me(k.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
}), [af, MR] = cn("CollectionProvider");
de({
  name: "CollectionSlot",
  setup(e, { slots: t }) {
    const n = af(), { primitiveElement: r, currentElement: o } = zt();
    return _e(o, () => {
      n.collectionRef.value = o.value;
    }), () => jt(xi, { ref: r }, t);
  }
});
de({
  name: "CollectionItem",
  setup(e, { slots: t, attrs: n }) {
    const r = af(), { primitiveElement: o, currentElement: a } = zt(), s = Mt();
    return bt((i) => {
      var l;
      if (a.value) {
        const c = ml(a.value);
        r.itemMap.value.set(c, { ref: a.value, ...ml(((l = s == null ? void 0 : s.parent) == null ? void 0 : l.props) ?? {}) }), i(() => r.itemMap.value.delete(c));
      }
    }), () => jt(xi, { ...n, [r.attrName]: "", ref: o }, t);
  }
});
const [Yy, IR] = cn(["MenuRoot", "MenuSub"], "MenuContext"), [Hy, LR] = cn("MenuRoot"), Uy = "rovingFocusGroup.onEntryFocus", jy = { bubbles: !1, cancelable: !0 };
function Wy(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
const [RR, Gy] = cn("RovingFocusGroup"), zy = /* @__PURE__ */ de({
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
    const n = e, r = t, { loop: o, orientation: a, dir: s } = Ur(n), i = Kg(s), l = Ti(n, "currentTabStopId", r, {
      defaultValue: n.defaultCurrentTabStopId,
      passive: n.currentTabStopId === void 0
    }), c = B(!1), u = B(!1), d = B(0), { primitiveElement: f, currentElement: p } = zt(), { createCollection: v } = jd("rovingFocus"), g = v(p);
    function b(m) {
      const y = !u.value;
      if (m.currentTarget && m.target === m.currentTarget && y && !c.value) {
        const E = new CustomEvent(Uy, jy);
        if (m.currentTarget.dispatchEvent(E), r("entryFocus", E), !E.defaultPrevented) {
          const _ = g.value, $ = _.find((x) => x.getAttribute("data-active") === "true"), O = _.find(
            (x) => x.id === l.value
          ), A = [$, O, ..._].filter(
            Boolean
          );
          Wy(A);
        }
      }
      u.value = !1;
    }
    return Gy({
      loop: o,
      dir: i,
      orientation: a,
      currentTabStopId: l,
      onItemFocus: (m) => {
        l.value = m;
      },
      onItemShiftTab: () => {
        c.value = !0;
      },
      onFocusableItemAdd: () => {
        d.value++;
      },
      onFocusableItemRemove: () => {
        d.value--;
      }
    }), (m, y) => (T(), De(h(Dn), {
      ref_key: "primitiveElement",
      ref: f,
      tabindex: c.value || d.value === 0 ? -1 : 0,
      "data-orientation": h(a),
      as: m.as,
      "as-child": m.asChild,
      dir: h(i),
      style: { outline: "none" },
      onMousedown: y[0] || (y[0] = (E) => u.value = !0),
      onFocus: b,
      onBlur: y[1] || (y[1] = (E) => c.value = !1)
    }, {
      default: he(() => [
        Me(m.$slots, "default")
      ]),
      _: 3
    }, 8, ["tabindex", "data-orientation", "as", "as-child", "dir"]));
  }
}), [FR, Ky] = cn("MenuContent");
Lc({
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
  ...nf
});
const [Fa, qy] = cn("PopoverRoot"), Zy = /* @__PURE__ */ de({
  __name: "PopoverRoot",
  props: {
    defaultOpen: { type: Boolean, default: !1 },
    open: { type: Boolean, default: void 0 },
    modal: { type: Boolean, default: !1 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, r = t, { modal: o } = Ur(n), a = Ti(n, "open", r, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), s = B(), i = B(!1);
    return qy({
      contentId: ay(),
      modal: o,
      open: a,
      onOpenChange: (l) => {
        a.value = l;
      },
      onOpenToggle: () => {
        a.value = !a.value;
      },
      triggerElement: s,
      hasCustomAnchor: i
    }), (l, c) => (T(), De(h(Ly), null, {
      default: he(() => [
        Me(l.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Xy = /* @__PURE__ */ de({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e, { expose: t }) {
    const n = e, r = Fa(), { primitiveElement: o, currentElement: a } = zt();
    return Gt(() => {
      r.triggerElement.value = a.value;
    }), t({ $el: a }), (s, i) => (T(), De(Ro(h(r).hasCustomAnchor.value ? h(Dn) : h(Ry)), { "as-child": "" }, {
      default: he(() => [
        ce(h(Dn), {
          ref_key: "primitiveElement",
          ref: o,
          type: s.as === "button" ? "button" : void 0,
          "aria-haspopup": "dialog",
          "aria-expanded": h(r).open.value,
          "aria-controls": h(r).contentId,
          "data-state": h(r).open.value ? "open" : "closed",
          as: s.as,
          "as-child": n.asChild,
          onClick: h(r).onOpenToggle
        }, {
          default: he(() => [
            Me(s.$slots, "default")
          ]),
          _: 3
        }, 8, ["type", "aria-expanded", "aria-controls", "data-state", "as", "as-child", "onClick"])
      ]),
      _: 3
    }));
  }
}), Jy = /* @__PURE__ */ de({
  __name: "PopoverPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, r) => (T(), De(h(dy), Pr(li(t)), {
      default: he(() => [
        Me(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), of = /* @__PURE__ */ de({
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
    const n = e, r = t, o = Gd(n), a = Fa();
    return Wd(), (s, i) => (T(), De(h(Jd), {
      "as-child": "",
      loop: "",
      trapped: s.trapFocus,
      onMountAutoFocus: i[5] || (i[5] = (l) => r("openAutoFocus", l)),
      onUnmountAutoFocus: i[6] || (i[6] = (l) => r("closeAutoFocus", l))
    }, {
      default: he(() => [
        ce(h(Zd), {
          "as-child": "",
          "disable-outside-pointer-events": s.disableOutsidePointerEvents,
          onPointerDownOutside: i[0] || (i[0] = (l) => r("pointerDownOutside", l)),
          onInteractOutside: i[1] || (i[1] = (l) => r("interactOutside", l)),
          onEscapeKeyDown: i[2] || (i[2] = (l) => r("escapeKeyDown", l)),
          onFocusOutside: i[3] || (i[3] = (l) => r("focusOutside", l)),
          onDismiss: i[4] || (i[4] = (l) => h(a).onOpenChange(!1))
        }, {
          default: he(() => [
            ce(h(rf), Qe(h(o), {
              id: h(a).contentId,
              "data-state": h(a).open.value ? "open" : "closed",
              role: "dialog",
              style: {
                "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
              }
            }), {
              default: he(() => [
                Me(s.$slots, "default")
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
}), Qy = /* @__PURE__ */ de({
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
    const n = e, r = t, o = Fa(), a = B(!1);
    Ud(!0);
    const s = qr(n, r), { primitiveElement: i, currentElement: l } = zt();
    return ny(l), (c, u) => (T(), De(of, Qe({
      ref_key: "primitiveElement",
      ref: i
    }, h(s), {
      "trap-focus": h(o).open.value,
      "disable-outside-pointer-events": "",
      onCloseAutoFocus: u[0] || (u[0] = Oa(
        (d) => {
          var f;
          r("closeAutoFocus", d), a.value || (f = h(o).triggerElement.value) == null || f.focus();
        },
        ["prevent"]
      )),
      onPointerDownOutside: u[1] || (u[1] = (d) => {
        r("pointerDownOutside", d);
        const f = d.detail.originalEvent, p = f.button === 0 && f.ctrlKey === !0, v = f.button === 2 || p;
        a.value = v;
      }),
      onFocusOutside: u[2] || (u[2] = Oa(() => {
      }, ["prevent"]))
    }), {
      default: he(() => [
        Me(c.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), eb = /* @__PURE__ */ de({
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
    const n = e, r = t, o = Fa(), a = B(!1), s = B(!1), i = qr(n, r);
    return (l, c) => (T(), De(of, Qe(h(i), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: c[0] || (c[0] = (u) => {
        var d;
        r("closeAutoFocus", u), u.defaultPrevented || (a.value || (d = h(o).triggerElement.value) == null || d.focus(), u.preventDefault()), a.value = !1, s.value = !1;
      }),
      onInteractOutside: c[1] || (c[1] = async (u) => {
        var d;
        r("interactOutside", u), u.defaultPrevented || (a.value = !0, u.detail.originalEvent.type === "pointerdown" && (s.value = !0));
        const f = u.target;
        (d = h(o).triggerElement.value) != null && d.contains(f) && u.preventDefault(), u.detail.originalEvent.type === "focusin" && s.value && u.preventDefault();
      })
    }), {
      default: he(() => [
        Me(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), tb = /* @__PURE__ */ de({
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
    const n = e, r = t, o = Fa(), a = qr(n, r);
    return (s, i) => (T(), De(h(Kd), {
      present: s.forceMount || h(o).open.value
    }, {
      default: he(() => [
        h(o).modal.value ? (T(), De(Qy, Pr(Qe({ key: 0 }, h(a))), {
          default: he(() => [
            Me(s.$slots, "default")
          ]),
          _: 3
        }, 16)) : (T(), De(eb, Pr(Qe({ key: 1 }, h(a))), {
          default: he(() => [
            Me(s.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), nb = /* @__PURE__ */ de({
  __name: "Popover",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const r = qr(e, t);
    return (o, a) => (T(), De(h(Zy), Pr(li(h(r))), {
      default: he(() => [
        Me(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), rb = /* @__PURE__ */ de({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, r) => (T(), De(h(Xy), Qe(t, { class: "" }), {
      default: he(() => [
        Me(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function sf(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = sf(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function ab() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = sf(e)) && (r && (r += " "), r += t);
  return r;
}
const Ni = "-";
function ob(e) {
  const t = ib(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  function o(s) {
    const i = s.split(Ni);
    return i[0] === "" && i.length !== 1 && i.shift(), lf(i, t) || sb(s);
  }
  function a(s, i) {
    const l = n[s] || [];
    return i && r[s] ? [...l, ...r[s]] : l;
  }
  return {
    getClassGroupId: o,
    getConflictingClassGroupIds: a
  };
}
function lf(e, t) {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? lf(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const a = e.join(Ni);
  return (s = t.validators.find(({
    validator: i
  }) => i(a))) == null ? void 0 : s.classGroupId;
}
const uu = /^\[(.+)\]$/;
function sb(e) {
  if (uu.test(e)) {
    const t = uu.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function ib(e) {
  const {
    theme: t,
    prefix: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return ub(Object.entries(e.classGroups), n).forEach(([a, s]) => {
    Us(s, r, a, t);
  }), r;
}
function Us(e, t, n, r) {
  e.forEach((o) => {
    if (typeof o == "string") {
      const a = o === "" ? t : cu(t, o);
      a.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (lb(o)) {
        Us(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([a, s]) => {
      Us(s, cu(t, a), n, r);
    });
  });
}
function cu(e, t) {
  let n = e;
  return t.split(Ni).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}
function lb(e) {
  return e.isThemeGetter;
}
function ub(e, t) {
  return t ? e.map(([n, r]) => {
    const o = r.map((a) => typeof a == "string" ? t + a : typeof a == "object" ? Object.fromEntries(Object.entries(a).map(([s, i]) => [t + s, i])) : a);
    return [n, o];
  }) : e;
}
function cb(e) {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  function o(a, s) {
    n.set(a, s), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  }
  return {
    get(a) {
      let s = n.get(a);
      if (s !== void 0)
        return s;
      if ((s = r.get(a)) !== void 0)
        return o(a, s), s;
    },
    set(a, s) {
      n.has(a) ? n.set(a, s) : o(a, s);
    }
  };
}
const uf = "!";
function db(e) {
  const t = e.separator, n = t.length === 1, r = t[0], o = t.length;
  return function(s) {
    const i = [];
    let l = 0, c = 0, u;
    for (let g = 0; g < s.length; g++) {
      let b = s[g];
      if (l === 0) {
        if (b === r && (n || s.slice(g, g + o) === t)) {
          i.push(s.slice(c, g)), c = g + o;
          continue;
        }
        if (b === "/") {
          u = g;
          continue;
        }
      }
      b === "[" ? l++ : b === "]" && l--;
    }
    const d = i.length === 0 ? s : s.substring(c), f = d.startsWith(uf), p = f ? d.substring(1) : d, v = u && u > c ? u - c : void 0;
    return {
      modifiers: i,
      hasImportantModifier: f,
      baseClassName: p,
      maybePostfixModifierPosition: v
    };
  };
}
function fb(e) {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}
function pb(e) {
  return {
    cache: cb(e.cacheSize),
    splitModifiers: db(e),
    ...ob(e)
  };
}
const mb = /\s+/;
function vb(e, t) {
  const {
    splitModifiers: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o
  } = t, a = /* @__PURE__ */ new Set();
  return e.trim().split(mb).map((s) => {
    const {
      modifiers: i,
      hasImportantModifier: l,
      baseClassName: c,
      maybePostfixModifierPosition: u
    } = n(s);
    let d = r(u ? c.substring(0, u) : c), f = !!u;
    if (!d) {
      if (!u)
        return {
          isTailwindClass: !1,
          originalClassName: s
        };
      if (d = r(c), !d)
        return {
          isTailwindClass: !1,
          originalClassName: s
        };
      f = !1;
    }
    const p = fb(i).join(":");
    return {
      isTailwindClass: !0,
      modifierId: l ? p + uf : p,
      classGroupId: d,
      originalClassName: s,
      hasPostfixModifier: f
    };
  }).reverse().filter((s) => {
    if (!s.isTailwindClass)
      return !0;
    const {
      modifierId: i,
      classGroupId: l,
      hasPostfixModifier: c
    } = s, u = i + l;
    return a.has(u) ? !1 : (a.add(u), o(l, c).forEach((d) => a.add(i + d)), !0);
  }).reverse().map((s) => s.originalClassName).join(" ");
}
function hb() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = cf(t)) && (r && (r += " "), r += n);
  return r;
}
function cf(e) {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = cf(e[r])) && (n && (n += " "), n += t);
  return n;
}
function gb(e, ...t) {
  let n, r, o, a = s;
  function s(l) {
    const c = t.reduce((u, d) => d(u), e());
    return n = pb(c), r = n.cache.get, o = n.cache.set, a = i, i(l);
  }
  function i(l) {
    const c = r(l);
    if (c)
      return c;
    const u = vb(l, n);
    return o(l, u), u;
  }
  return function() {
    return a(hb.apply(null, arguments));
  };
}
function Ge(e) {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}
const df = /^\[(?:([a-z-]+):)?(.+)\]$/i, yb = /^\d+\/\d+$/, bb = /* @__PURE__ */ new Set(["px", "full", "screen"]), _b = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, wb = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Eb = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Ob = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function Yt(e) {
  return rr(e) || bb.has(e) || yb.test(e);
}
function In(e) {
  return Zr(e, "length", Nb);
}
function rr(e) {
  return !!e && !Number.isNaN(Number(e));
}
function Qa(e) {
  return Zr(e, "number", rr);
}
function ca(e) {
  return !!e && Number.isInteger(Number(e));
}
function Db(e) {
  return e.endsWith("%") && rr(e.slice(0, -1));
}
function $e(e) {
  return df.test(e);
}
function Ln(e) {
  return _b.test(e);
}
const kb = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function $b(e) {
  return Zr(e, kb, ff);
}
function Tb(e) {
  return Zr(e, "position", ff);
}
const Ab = /* @__PURE__ */ new Set(["image", "url"]);
function xb(e) {
  return Zr(e, Ab, Sb);
}
function Cb(e) {
  return Zr(e, "", Pb);
}
function da() {
  return !0;
}
function Zr(e, t, n) {
  const r = df.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}
function Nb(e) {
  return wb.test(e);
}
function ff() {
  return !1;
}
function Pb(e) {
  return Eb.test(e);
}
function Sb(e) {
  return Ob.test(e);
}
function Mb() {
  const e = Ge("colors"), t = Ge("spacing"), n = Ge("blur"), r = Ge("brightness"), o = Ge("borderColor"), a = Ge("borderRadius"), s = Ge("borderSpacing"), i = Ge("borderWidth"), l = Ge("contrast"), c = Ge("grayscale"), u = Ge("hueRotate"), d = Ge("invert"), f = Ge("gap"), p = Ge("gradientColorStops"), v = Ge("gradientColorStopPositions"), g = Ge("inset"), b = Ge("margin"), m = Ge("opacity"), y = Ge("padding"), E = Ge("saturate"), _ = Ge("scale"), $ = Ge("sepia"), O = Ge("skew"), A = Ge("space"), x = Ge("translate"), S = () => ["auto", "contain", "none"], k = () => ["auto", "hidden", "clip", "visible", "scroll"], R = () => ["auto", $e, t], N = () => [$e, t], U = () => ["", Yt, In], J = () => ["auto", rr, $e], z = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], ee = () => ["solid", "dashed", "dotted", "double", "none"], le = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"], ke = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], ve = () => ["", "0", $e], H = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], me = () => [rr, Qa], Ie = () => [rr, $e];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [da],
      spacing: [Yt, In],
      blur: ["none", "", Ln, $e],
      brightness: me(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Ln, $e],
      borderSpacing: N(),
      borderWidth: U(),
      contrast: me(),
      grayscale: ve(),
      hueRotate: Ie(),
      invert: ve(),
      gap: N(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Db, In],
      inset: R(),
      margin: R(),
      opacity: me(),
      padding: N(),
      saturate: me(),
      scale: me(),
      sepia: ve(),
      skew: Ie(),
      space: N(),
      translate: N()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", $e]
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
        columns: [Ln]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": H()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": H()
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
        object: [...z(), $e]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: k()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": k()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": k()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: S()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": S()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": S()
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
        inset: [g]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [g]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [g]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [g]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [g]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [g]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [g]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [g]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [g]
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
        z: ["auto", ca, $e]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: R()
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
        flex: ["1", "auto", "initial", "none", $e]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ve()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ve()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", ca, $e]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [da]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", ca, $e]
        }, $e]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": J()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": J()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [da]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [ca, $e]
        }, $e]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": J()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": J()
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
        "auto-cols": ["auto", "min", "max", "fr", $e]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", $e]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [f]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [f]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [f]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...ke()]
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
        content: ["normal", ...ke(), "baseline"]
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
        "place-content": [...ke(), "baseline"]
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
        p: [y]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [y]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [y]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [y]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [y]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [y]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [y]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [y]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [y]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [b]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [b]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [b]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [b]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [b]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [b]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [b]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [b]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [b]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [A]
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
        "space-y": [A]
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
        w: ["auto", "min", "max", "fit", $e, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", $e, Yt]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [Ln]
        }, Ln, $e]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [$e, t, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", Yt, $e]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [$e, t, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Ln, In]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Qa]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [da]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", $e]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", rr, Qa]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Yt, $e]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", $e]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", $e]
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
        "placeholder-opacity": [m]
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
        "text-opacity": [m]
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
        decoration: [...ee(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Yt, In]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Yt, $e]
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
        indent: N()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", $e]
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
        content: ["none", $e]
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
        "bg-opacity": [m]
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
        bg: [...z(), Tb]
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
        bg: ["auto", "cover", "contain", $b]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, xb]
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
        from: [v]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [v]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [v]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [p]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [p]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [p]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [a]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [a]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [a]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [a]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [a]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [a]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [a]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [a]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [a]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [a]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [a]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [a]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [a]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [a]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [a]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [i]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [i]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [i]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [i]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [i]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [i]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [i]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [i]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [i]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [m]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...ee(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [i]
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
        "divide-y": [i]
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
        "divide-opacity": [m]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: ee()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [o]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [o]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [o]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [o]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [o]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [o]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [o]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [o]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...ee()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Yt, $e]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Yt, In]
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
        ring: U()
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
        "ring-opacity": [m]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Yt, In]
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
        shadow: ["", "inner", "none", Ln, Cb]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [da]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [m]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": le()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": le()
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
        contrast: [l]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Ln, $e]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [c]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [u]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [d]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [E]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [$]
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
        "backdrop-contrast": [l]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [c]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [u]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [d]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [m]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [E]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [$]
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
        "border-spacing": [s]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [s]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [s]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", $e]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: Ie()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", $e]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: Ie()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", $e]
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
        scale: [_]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [_]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [_]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [ca, $e]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [x]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [x]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [O]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [O]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", $e]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", $e]
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
        "scroll-m": N()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": N()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": N()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": N()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": N()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": N()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": N()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": N()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": N()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": N()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": N()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": N()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": N()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": N()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": N()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": N()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": N()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": N()
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
        "will-change": ["auto", "scroll", "contents", "transform", $e]
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
        stroke: [Yt, In, Qa]
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
const Ib = /* @__PURE__ */ gb(Mb);
function pf(...e) {
  return Ib(ab(e));
}
const Lb = /* @__PURE__ */ de({
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
    const n = e, r = qr(n, t);
    return (o, a) => (T(), De(h(Jy), null, {
      default: he(() => [
        ce(h(tb), Qe({ ...h(r), ...o.$attrs }, {
          class: h(pf)(
            "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            n.class
          )
        }), {
          default: he(() => [
            Me(o.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Rb = {
  key: 0,
  class: "flex items-center gap-2 relative"
}, Fb = { class: "p3-r text-dark-4" }, Vb = { class: "flex gap-6" }, Bb = { class: "p3-b text-true-blue-3 flex cursor-pointer items-center justify-center gap-2 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50" }, Yb = /* @__PURE__ */ M("template", null, null, -1), Hb = { class: "shadow-01 bg-light-5 z-[2] p-2 rounded flex flex-col gap-2" }, Ub = { class: "p3-b text-true-blue-3 w-fit flex cursor-pointer items-center justify-center gap-2 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50" }, jb = {
  key: 0,
  class: "border-t p-2"
}, Wb = { class: "flex gap-1.5 flex-wrap" }, Gb = {
  key: 1,
  class: "shadow-01 flex w-fit items-center py-1 px-2 rounded p3-r text-dark-3"
}, zb = ["onClick"], Kb = {
  key: 0,
  class: "text-dark-5 mx-1"
}, qb = {
  key: 2,
  class: "flex gap-4 flex-wrap p-2 border-t"
}, Zb = /* @__PURE__ */ de({
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
    const n = e, { t: r } = un.global, o = B(n.monthDate), a = B(n.weekOrdinal), s = B(n.weekdays), i = B(n.yearMonths), l = (_, $, O = !1) => {
      if (O) {
        $.findIndex((A) => A === _) === -1 ? $.push(_) : $.splice($.indexOf(_), 1), $.sort((A, x) => A - x);
        return;
      }
      $.value.findIndex((A) => A === _) === -1 ? $.value.push(_) : $.value.splice($.value.indexOf(_), 1), $.value.sort((A, x) => A - x);
    }, c = B(""), u = Be("eventData");
    bt(() => {
      t(
        "update:monthDate",
        o.value.length ? o.value : null
      ), t(
        "update:weekOrdinal",
        a.value.length ? a.value : null
      ), t(
        "update:weekdays",
        s.value.length ? s.value : null
      ), t(
        "update:yearMonths",
        i.value.length ? i.value : null
      ), c.value = Wh(u.value, !0);
    });
    const d = B([
      { name: r("週日"), id: At.Sunday },
      { name: r("週一"), id: At.Monday },
      { name: r("週二"), id: At.Tuesday },
      { name: r("週三"), id: At.Wednesday },
      { name: r("週四"), id: At.Thursday },
      { name: r("週五"), id: At.Friday },
      { name: r("週六"), id: At.Saturday },
      { name: r("平日"), id: At.Weekday },
      { name: r("週末"), id: At.Weekend }
    ]), f = B([
      { name: r("第一週"), id: gn.First },
      { name: r("第二週"), id: gn.Second },
      { name: r("第三週"), id: gn.Third },
      { name: r("第四週"), id: gn.Fourth },
      { name: r("第五週"), id: gn.Fifth },
      { name: r("最後一週"), id: gn.Last }
    ]), p = B([
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
    ]), v = B([
      {
        name: r("一月"),
        id: vt.January
      },
      {
        name: r("二月"),
        id: vt.February
      },
      {
        name: r("三月"),
        id: vt.March
      },
      {
        name: r("四月"),
        id: vt.April
      },
      {
        name: r("五月"),
        id: vt.May
      },
      {
        name: r("六月"),
        id: vt.June
      },
      {
        name: r("七月"),
        id: vt.July
      },
      {
        name: r("八月"),
        id: vt.August
      },
      {
        name: r("九月"),
        id: vt.September
      },
      {
        name: r("十月"),
        id: vt.October
      },
      {
        name: r("十一月"),
        id: vt.November
      },
      {
        name: r("十二月"),
        id: vt.December
      }
    ]), g = C(() => {
      if (n.type === Re.Week)
        return [
          {
            key: s,
            label: "weekdaysOrigin",
            options: d.value
          }
        ];
      if (n.type === Re.Month) {
        if (y.value.id === 0)
          return [
            {
              key: a,
              label: "weekOrdinalOrigin",
              options: f.value
            },
            {
              key: s,
              label: "weekdaysOrigin",
              options: d.value
            }
          ];
        if (y.value.id === 1)
          return [
            {
              key: o,
              label: "monthDateOrigin",
              options: p.value
            }
          ];
      }
      if (n.type === Re.Annual) {
        if (y.value.id === 0)
          return [
            {
              key: a,
              label: "weekOrdinalOrigin",
              options: f.value
            },
            {
              key: s,
              label: "weekdaysOrigin",
              options: d.value
            }
          ];
        if (y.value.id === 1)
          return [
            {
              key: o,
              label: "monthDateOrigin",
              options: p.value
            }
          ];
      }
    }), b = C(() => n.type === Re.Month || n.type === Re.Annual ? !0 : (o.value = [], a.value = [], s.value = [], i.value = [], !1)), m = B([
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
    ]), y = B(m.value[0]);
    _e(y, (_) => {
      if (_.id === 0) {
        o.value = [];
        return;
      }
      if (_.id === 1) {
        a.value = [], s.value = [];
        return;
      }
    }), _e(
      () => n.type,
      (_) => {
        (_ === Re.Month || _ === Re.Annual) && (_ != Re.Annual && (i.value = []), p.value && p.value.length > 0 ? y.value = m.value[1] : y.value = m.value[0]);
      },
      { immediate: !0 }
    ), Rc(() => {
      o.value = [], a.value = [], s.value = [], i.value = [];
    });
    const E = C(() => {
      if (n.type === Re.Week)
        return !!s.value.length;
      if (n.type === Re.Month) {
        if (y.value.id == 0)
          return !!a.value.length || !!s.value.length;
        if (y.value.id == 1)
          return !!o.value.length;
      }
      if (n.type === Re.Annual) {
        if (y.value.id == 0)
          return !!i.value.length || !!a.value.length || !!s.value.length;
        if (y.value.id == 1)
          return !!i.value.length || !!o.value.length;
      }
    });
    return (_, $) => _.type === h(Re).Annual || h(g) ? (T(), I("div", Rb, [
      M("span", Fb, ae(h(r)("指定時段")), 1),
      ce(h(nb), null, {
        default: he(() => [
          ce(h(rb), null, {
            default: he(() => [
              M("div", Vb, [
                M("span", Bb, ae(h(E) ? h(c) : h(r)("未設定")), 1),
                Yb
              ])
            ]),
            _: 1
          }),
          ce(h(Lb), {
            class: "shadow-none border-none p-0 w-96",
            align: "start",
            side: "bottom"
          }, {
            default: he(() => [
              M("div", Hb, [
                M("div", Ub, ae(h(r)("月份")), 1),
                _.type === h(Re).Annual ? (T(), I("div", jb, [
                  M("div", Wb, [
                    (T(!0), I(Ee, null, Ue(h(v), (O) => {
                      var A;
                      return T(), De(vl, {
                        key: O.id,
                        checked: (A = h(i)) == null ? void 0 : A.includes(O.id),
                        "onUpdate:checked": (x) => l(O.id, h(i), !0),
                        fieldId: O.name,
                        label: O.name
                      }, null, 8, ["checked", "onUpdate:checked", "fieldId", "label"]);
                    }), 128))
                  ])
                ])) : re("", !0),
                h(b) ? (T(), I("div", Gb, [
                  (T(!0), I(Ee, null, Ue(h(m), (O, A) => (T(), I("div", {
                    class: "flex items-center",
                    key: O
                  }, [
                    Number.isInteger(O) ? re("", !0) : (T(), I(Ee, { key: 0 }, [
                      M("span", {
                        class: xe(["cursor-pointer hover:drop-shadow-md", [
                          h(y).id == O.id ? "text-true-blue-3 drop-shadow-sm p3-b" : "p3-r"
                        ]]),
                        onClick: (x) => y.value = O
                      }, ae(O.name), 11, zb),
                      A < Object.keys(h(y)).filter(
                        (x) => isNaN(Number(x))
                      ).length - 1 ? (T(), I("div", Kb, " | ")) : re("", !0)
                    ], 64))
                  ]))), 128))
                ])) : re("", !0),
                h(g) ? (T(), I("div", qb, [
                  (T(!0), I(Ee, null, Ue(h(g), (O) => (T(), I("div", {
                    class: "flex gap-1 flex-wrap",
                    key: O
                  }, [
                    (T(!0), I(Ee, null, Ue(O.options, (A) => {
                      var x;
                      return T(), De(vl, {
                        key: A.id,
                        checked: (x = O.key.value) == null ? void 0 : x.includes(A.id),
                        "onUpdate:checked": (S) => l(A.id, O.key),
                        fieldId: A.name,
                        label: A.name
                      }, null, 8, ["checked", "onUpdate:checked", "fieldId", "label"]);
                    }), 128))
                  ]))), 128))
                ])) : re("", !0)
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ])) : re("", !0);
  }
}), Xb = ["width", "height", "fill", "transform"], Jb = { key: 0 }, Qb = /* @__PURE__ */ M("path", { d: "M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z" }, null, -1), e1 = [
  Qb
], t1 = { key: 1 }, n1 = /* @__PURE__ */ M("path", {
  d: "M208,96l-80,80L48,96Z",
  opacity: "0.2"
}, null, -1), r1 = /* @__PURE__ */ M("path", { d: "M215.39,92.94A8,8,0,0,0,208,88H48a8,8,0,0,0-5.66,13.66l80,80a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,215.39,92.94ZM128,164.69,67.31,104H188.69Z" }, null, -1), a1 = [
  n1,
  r1
], o1 = { key: 2 }, s1 = /* @__PURE__ */ M("path", { d: "M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z" }, null, -1), i1 = [
  s1
], l1 = { key: 3 }, u1 = /* @__PURE__ */ M("path", { d: "M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z" }, null, -1), c1 = [
  u1
], d1 = { key: 4 }, f1 = /* @__PURE__ */ M("path", { d: "M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" }, null, -1), p1 = [
  f1
], m1 = { key: 5 }, v1 = /* @__PURE__ */ M("path", { d: "M210.83,98.83l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,170.34l77.17-77.17a4,4,0,1,1,5.66,5.66Z" }, null, -1), h1 = [
  v1
], g1 = {
  name: "PhCaretDown"
}, mf = /* @__PURE__ */ de({
  ...g1,
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
    const t = e, n = Be("weight", "regular"), r = Be("size", "1em"), o = Be("color", "currentColor"), a = Be("mirrored", !1), s = C(() => t.weight ?? n), i = C(() => t.size ?? r), l = C(() => t.color ?? o), c = C(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : a ? "scale(-1, 1)" : void 0);
    return (u, d) => (T(), I("svg", Qe({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: i.value,
      height: i.value,
      fill: l.value,
      transform: c.value
    }, u.$attrs), [
      Me(u.$slots, "default"),
      s.value === "bold" ? (T(), I("g", Jb, e1)) : s.value === "duotone" ? (T(), I("g", t1, a1)) : s.value === "fill" ? (T(), I("g", o1, i1)) : s.value === "light" ? (T(), I("g", l1, c1)) : s.value === "regular" ? (T(), I("g", d1, p1)) : s.value === "thin" ? (T(), I("g", m1, h1)) : re("", !0)
    ], 16, Xb));
  }
}), y1 = ["width", "height", "fill", "transform"], b1 = { key: 0 }, _1 = /* @__PURE__ */ M("path", { d: "M84,108A12,12,0,0,1,96,96h64a12,12,0,0,1,0,24H96A12,12,0,0,1,84,108Zm32,28H96a12,12,0,0,0,0,24h20a12,12,0,0,0,0-24ZM228,48V156.69a19.86,19.86,0,0,1-5.86,14.14l-51.31,51.31A19.86,19.86,0,0,1,156.69,228H48a20,20,0,0,1-20-20V48A20,20,0,0,1,48,28H208A20,20,0,0,1,228,48ZM52,204h92V156a12,12,0,0,1,12-12h48V52H52Zm139-36H168v23Z" }, null, -1), w1 = [
  _1
], E1 = { key: 1 }, O1 = /* @__PURE__ */ M("path", {
  d: "M216,160l-56,56V160Z",
  opacity: "0.2"
}, null, -1), D1 = /* @__PURE__ */ M("path", { d: "M88,96a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H96A8,8,0,0,1,88,96Zm8,40h64a8,8,0,0,0,0-16H96a8,8,0,0,0,0,16Zm32,16H96a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16ZM224,48V156.69A15.86,15.86,0,0,1,219.31,168L168,219.31A15.86,15.86,0,0,1,156.69,224H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM48,208H152V160a8,8,0,0,1,8-8h48V48H48Zm120-40v28.7L196.69,168Z" }, null, -1), k1 = [
  O1,
  D1
], $1 = { key: 2 }, T1 = /* @__PURE__ */ M("path", { d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H156.69A15.92,15.92,0,0,0,168,219.31L219.31,168A15.92,15.92,0,0,0,224,156.69V48A16,16,0,0,0,208,32ZM96,88h64a8,8,0,0,1,0,16H96a8,8,0,0,1,0-16Zm32,80H96a8,8,0,0,1,0-16h32a8,8,0,0,1,0,16ZM96,136a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm64,68.69V160h44.7Z" }, null, -1), A1 = [
  T1
], x1 = { key: 3 }, C1 = /* @__PURE__ */ M("path", { d: "M90,96a6,6,0,0,1,6-6h64a6,6,0,0,1,0,12H96A6,6,0,0,1,90,96Zm6,38h64a6,6,0,0,0,0-12H96a6,6,0,0,0,0,12Zm32,20H96a6,6,0,0,0,0,12h32a6,6,0,0,0,0-12ZM222,48V156.69a13.94,13.94,0,0,1-4.1,9.9L166.59,217.9a13.94,13.94,0,0,1-9.9,4.1H48a14,14,0,0,1-14-14V48A14,14,0,0,1,48,34H208A14,14,0,0,1,222,48ZM48,210H154V160a6,6,0,0,1,6-6h50V48a2,2,0,0,0-2-2H48a2,2,0,0,0-2,2V208A2,2,0,0,0,48,210Zm153.52-44H166v35.52Z" }, null, -1), N1 = [
  C1
], P1 = { key: 4 }, S1 = /* @__PURE__ */ M("path", { d: "M88,96a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H96A8,8,0,0,1,88,96Zm8,40h64a8,8,0,0,0,0-16H96a8,8,0,0,0,0,16Zm32,16H96a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16ZM224,48V156.69A15.86,15.86,0,0,1,219.31,168L168,219.31A15.86,15.86,0,0,1,156.69,224H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM48,208H152V160a8,8,0,0,1,8-8h48V48H48Zm120-40v28.7L196.69,168Z" }, null, -1), M1 = [
  S1
], I1 = { key: 5 }, L1 = /* @__PURE__ */ M("path", { d: "M92,96a4,4,0,0,1,4-4h64a4,4,0,0,1,0,8H96A4,4,0,0,1,92,96Zm4,36h64a4,4,0,0,0,0-8H96a4,4,0,0,0,0,8Zm32,24H96a4,4,0,0,0,0,8h32a4,4,0,0,0,0-8ZM220,48V156.69a11.9,11.9,0,0,1-3.52,8.48l-51.31,51.32a11.93,11.93,0,0,1-8.48,3.51H48a12,12,0,0,1-12-12V48A12,12,0,0,1,48,36H208A12,12,0,0,1,220,48ZM48,212H156V160a4,4,0,0,1,4-4h52V48a4,4,0,0,0-4-4H48a4,4,0,0,0-4,4V208A4,4,0,0,0,48,212Zm158.35-48H164v42.35Z" }, null, -1), R1 = [
  L1
], F1 = {
  name: "PhNote"
}, V1 = /* @__PURE__ */ de({
  ...F1,
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
    const t = e, n = Be("weight", "regular"), r = Be("size", "1em"), o = Be("color", "currentColor"), a = Be("mirrored", !1), s = C(() => t.weight ?? n), i = C(() => t.size ?? r), l = C(() => t.color ?? o), c = C(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : a ? "scale(-1, 1)" : void 0);
    return (u, d) => (T(), I("svg", Qe({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: i.value,
      height: i.value,
      fill: l.value,
      transform: c.value
    }, u.$attrs), [
      Me(u.$slots, "default"),
      s.value === "bold" ? (T(), I("g", b1, w1)) : s.value === "duotone" ? (T(), I("g", E1, k1)) : s.value === "fill" ? (T(), I("g", $1, A1)) : s.value === "light" ? (T(), I("g", x1, N1)) : s.value === "regular" ? (T(), I("g", P1, M1)) : s.value === "thin" ? (T(), I("g", I1, R1)) : re("", !0)
    ], 16, y1));
  }
}), B1 = ["width", "height", "fill", "transform"], Y1 = { key: 0 }, H1 = /* @__PURE__ */ M("path", { d: "M216,48H180V36A28,28,0,0,0,152,8H104A28,28,0,0,0,76,36V48H40a12,12,0,0,0,0,24h4V208a20,20,0,0,0,20,20H192a20,20,0,0,0,20-20V72h4a12,12,0,0,0,0-24ZM100,36a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4V48H100Zm88,168H68V72H188ZM116,104v64a12,12,0,0,1-24,0V104a12,12,0,0,1,24,0Zm48,0v64a12,12,0,0,1-24,0V104a12,12,0,0,1,24,0Z" }, null, -1), U1 = [
  H1
], j1 = { key: 1 }, W1 = /* @__PURE__ */ M("path", {
  d: "M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56Z",
  opacity: "0.2"
}, null, -1), G1 = /* @__PURE__ */ M("path", { d: "M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z" }, null, -1), z1 = [
  W1,
  G1
], K1 = { key: 2 }, q1 = /* @__PURE__ */ M("path", { d: "M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM112,168a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm0-120H96V40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Z" }, null, -1), Z1 = [
  q1
], X1 = { key: 3 }, J1 = /* @__PURE__ */ M("path", { d: "M216,50H174V40a22,22,0,0,0-22-22H104A22,22,0,0,0,82,40V50H40a6,6,0,0,0,0,12H50V208a14,14,0,0,0,14,14H192a14,14,0,0,0,14-14V62h10a6,6,0,0,0,0-12ZM94,40a10,10,0,0,1,10-10h48a10,10,0,0,1,10,10V50H94ZM194,208a2,2,0,0,1-2,2H64a2,2,0,0,1-2-2V62H194ZM110,104v64a6,6,0,0,1-12,0V104a6,6,0,0,1,12,0Zm48,0v64a6,6,0,0,1-12,0V104a6,6,0,0,1,12,0Z" }, null, -1), Q1 = [
  J1
], e0 = { key: 4 }, t0 = /* @__PURE__ */ M("path", { d: "M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z" }, null, -1), n0 = [
  t0
], r0 = { key: 5 }, a0 = /* @__PURE__ */ M("path", { d: "M216,52H172V40a20,20,0,0,0-20-20H104A20,20,0,0,0,84,40V52H40a4,4,0,0,0,0,8H52V208a12,12,0,0,0,12,12H192a12,12,0,0,0,12-12V60h12a4,4,0,0,0,0-8ZM92,40a12,12,0,0,1,12-12h48a12,12,0,0,1,12,12V52H92ZM196,208a4,4,0,0,1-4,4H64a4,4,0,0,1-4-4V60H196ZM108,104v64a4,4,0,0,1-8,0V104a4,4,0,0,1,8,0Zm48,0v64a4,4,0,0,1-8,0V104a4,4,0,0,1,8,0Z" }, null, -1), o0 = [
  a0
], s0 = {
  name: "PhTrash"
}, i0 = /* @__PURE__ */ de({
  ...s0,
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
    const t = e, n = Be("weight", "regular"), r = Be("size", "1em"), o = Be("color", "currentColor"), a = Be("mirrored", !1), s = C(() => t.weight ?? n), i = C(() => t.size ?? r), l = C(() => t.color ?? o), c = C(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : a ? "scale(-1, 1)" : void 0);
    return (u, d) => (T(), I("svg", Qe({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: i.value,
      height: i.value,
      fill: l.value,
      transform: c.value
    }, u.$attrs), [
      Me(u.$slots, "default"),
      s.value === "bold" ? (T(), I("g", Y1, U1)) : s.value === "duotone" ? (T(), I("g", j1, z1)) : s.value === "fill" ? (T(), I("g", K1, Z1)) : s.value === "light" ? (T(), I("g", X1, Q1)) : s.value === "regular" ? (T(), I("g", e0, n0)) : s.value === "thin" ? (T(), I("g", r0, o0)) : re("", !0)
    ], 16, B1));
  }
}), l0 = ["width", "height", "fill", "transform"], u0 = { key: 0 }, c0 = /* @__PURE__ */ M("path", { d: "M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z" }, null, -1), d0 = [
  c0
], f0 = { key: 1 }, p0 = /* @__PURE__ */ M("path", {
  d: "M216,48V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z",
  opacity: "0.2"
}, null, -1), m0 = /* @__PURE__ */ M("path", { d: "M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" }, null, -1), v0 = [
  p0,
  m0
], h0 = { key: 2 }, g0 = /* @__PURE__ */ M("path", { d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM181.66,170.34a8,8,0,0,1-11.32,11.32L128,139.31,85.66,181.66a8,8,0,0,1-11.32-11.32L116.69,128,74.34,85.66A8,8,0,0,1,85.66,74.34L128,116.69l42.34-42.35a8,8,0,0,1,11.32,11.32L139.31,128Z" }, null, -1), y0 = [
  g0
], b0 = { key: 3 }, _0 = /* @__PURE__ */ M("path", { d: "M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z" }, null, -1), w0 = [
  _0
], E0 = { key: 4 }, O0 = /* @__PURE__ */ M("path", { d: "M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" }, null, -1), D0 = [
  O0
], k0 = { key: 5 }, $0 = /* @__PURE__ */ M("path", { d: "M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z" }, null, -1), T0 = [
  $0
], A0 = {
  name: "PhX"
}, js = /* @__PURE__ */ de({
  ...A0,
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
    const t = e, n = Be("weight", "regular"), r = Be("size", "1em"), o = Be("color", "currentColor"), a = Be("mirrored", !1), s = C(() => t.weight ?? n), i = C(() => t.size ?? r), l = C(() => t.color ?? o), c = C(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : a ? "scale(-1, 1)" : void 0);
    return (u, d) => (T(), I("svg", Qe({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: i.value,
      height: i.value,
      fill: l.value,
      transform: c.value
    }, u.$attrs), [
      Me(u.$slots, "default"),
      s.value === "bold" ? (T(), I("g", u0, d0)) : s.value === "duotone" ? (T(), I("g", f0, v0)) : s.value === "fill" ? (T(), I("g", h0, y0)) : s.value === "light" ? (T(), I("g", b0, w0)) : s.value === "regular" ? (T(), I("g", E0, D0)) : s.value === "thin" ? (T(), I("g", k0, T0)) : re("", !0)
    ], 16, l0));
  }
});
var gt = "top", Lt = "bottom", Rt = "right", yt = "left", Pi = "auto", Va = [gt, Lt, Rt, yt], Lr = "start", Ca = "end", x0 = "clippingParents", vf = "viewport", fa = "popper", C0 = "reference", du = /* @__PURE__ */ Va.reduce(function(e, t) {
  return e.concat([t + "-" + Lr, t + "-" + Ca]);
}, []), hf = /* @__PURE__ */ [].concat(Va, [Pi]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Lr, t + "-" + Ca]);
}, []), N0 = "beforeRead", P0 = "read", S0 = "afterRead", M0 = "beforeMain", I0 = "main", L0 = "afterMain", R0 = "beforeWrite", F0 = "write", V0 = "afterWrite", B0 = [N0, P0, S0, M0, I0, L0, R0, F0, V0];
function sn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function kt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function fr(e) {
  var t = kt(e).Element;
  return e instanceof t || e instanceof Element;
}
function Nt(e) {
  var t = kt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Si(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = kt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Y0(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, a = t.elements[n];
    !Nt(a) || !sn(a) || (Object.assign(a.style, r), Object.keys(o).forEach(function(s) {
      var i = o[s];
      i === !1 ? a.removeAttribute(s) : a.setAttribute(s, i === !0 ? "" : i);
    }));
  });
}
function H0(e) {
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
      var o = t.elements[r], a = t.attributes[r] || {}, s = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), i = s.reduce(function(l, c) {
        return l[c] = "", l;
      }, {});
      !Nt(o) || !sn(o) || (Object.assign(o.style, i), Object.keys(a).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
const U0 = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Y0,
  effect: H0,
  requires: ["computeStyles"]
};
function rn(e) {
  return e.split("-")[0];
}
var sr = Math.max, yo = Math.min, Rr = Math.round;
function Ws() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function gf() {
  return !/^((?!chrome|android).)*safari/i.test(Ws());
}
function Fr(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, a = 1;
  t && Nt(e) && (o = e.offsetWidth > 0 && Rr(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Rr(r.height) / e.offsetHeight || 1);
  var s = fr(e) ? kt(e) : window, i = s.visualViewport, l = !gf() && n, c = (r.left + (l && i ? i.offsetLeft : 0)) / o, u = (r.top + (l && i ? i.offsetTop : 0)) / a, d = r.width / o, f = r.height / a;
  return {
    width: d,
    height: f,
    top: u,
    right: c + d,
    bottom: u + f,
    left: c,
    x: c,
    y: u
  };
}
function Mi(e) {
  var t = Fr(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function yf(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Si(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function kn(e) {
  return kt(e).getComputedStyle(e);
}
function j0(e) {
  return ["table", "td", "th"].indexOf(sn(e)) >= 0;
}
function Xn(e) {
  return ((fr(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Wo(e) {
  return sn(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Si(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Xn(e)
  );
}
function fu(e) {
  return !Nt(e) || // https://github.com/popperjs/popper-core/issues/837
  kn(e).position === "fixed" ? null : e.offsetParent;
}
function W0(e) {
  var t = /firefox/i.test(Ws()), n = /Trident/i.test(Ws());
  if (n && Nt(e)) {
    var r = kn(e);
    if (r.position === "fixed")
      return null;
  }
  var o = Wo(e);
  for (Si(o) && (o = o.host); Nt(o) && ["html", "body"].indexOf(sn(o)) < 0; ) {
    var a = kn(o);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function Ba(e) {
  for (var t = kt(e), n = fu(e); n && j0(n) && kn(n).position === "static"; )
    n = fu(n);
  return n && (sn(n) === "html" || sn(n) === "body" && kn(n).position === "static") ? t : n || W0(e) || t;
}
function Ii(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function _a(e, t, n) {
  return sr(e, yo(t, n));
}
function G0(e, t, n) {
  var r = _a(e, t, n);
  return r > n ? n : r;
}
function bf() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function _f(e) {
  return Object.assign({}, bf(), e);
}
function wf(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var z0 = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, _f(typeof t != "number" ? t : wf(t, Va));
};
function K0(e) {
  var t, n = e.state, r = e.name, o = e.options, a = n.elements.arrow, s = n.modifiersData.popperOffsets, i = rn(n.placement), l = Ii(i), c = [yt, Rt].indexOf(i) >= 0, u = c ? "height" : "width";
  if (!(!a || !s)) {
    var d = z0(o.padding, n), f = Mi(a), p = l === "y" ? gt : yt, v = l === "y" ? Lt : Rt, g = n.rects.reference[u] + n.rects.reference[l] - s[l] - n.rects.popper[u], b = s[l] - n.rects.reference[l], m = Ba(a), y = m ? l === "y" ? m.clientHeight || 0 : m.clientWidth || 0 : 0, E = g / 2 - b / 2, _ = d[p], $ = y - f[u] - d[v], O = y / 2 - f[u] / 2 + E, A = _a(_, O, $), x = l;
    n.modifiersData[r] = (t = {}, t[x] = A, t.centerOffset = A - O, t);
  }
}
function q0(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || yf(t.elements.popper, o) && (t.elements.arrow = o));
}
const Z0 = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: K0,
  effect: q0,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Vr(e) {
  return e.split("-")[1];
}
var X0 = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function J0(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return {
    x: Rr(n * o) / o || 0,
    y: Rr(r * o) / o || 0
  };
}
function pu(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, a = e.variation, s = e.offsets, i = e.position, l = e.gpuAcceleration, c = e.adaptive, u = e.roundOffsets, d = e.isFixed, f = s.x, p = f === void 0 ? 0 : f, v = s.y, g = v === void 0 ? 0 : v, b = typeof u == "function" ? u({
    x: p,
    y: g
  }) : {
    x: p,
    y: g
  };
  p = b.x, g = b.y;
  var m = s.hasOwnProperty("x"), y = s.hasOwnProperty("y"), E = yt, _ = gt, $ = window;
  if (c) {
    var O = Ba(n), A = "clientHeight", x = "clientWidth";
    if (O === kt(n) && (O = Xn(n), kn(O).position !== "static" && i === "absolute" && (A = "scrollHeight", x = "scrollWidth")), O = O, o === gt || (o === yt || o === Rt) && a === Ca) {
      _ = Lt;
      var S = d && O === $ && $.visualViewport ? $.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        O[A]
      );
      g -= S - r.height, g *= l ? 1 : -1;
    }
    if (o === yt || (o === gt || o === Lt) && a === Ca) {
      E = Rt;
      var k = d && O === $ && $.visualViewport ? $.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        O[x]
      );
      p -= k - r.width, p *= l ? 1 : -1;
    }
  }
  var R = Object.assign({
    position: i
  }, c && X0), N = u === !0 ? J0({
    x: p,
    y: g
  }, kt(n)) : {
    x: p,
    y: g
  };
  if (p = N.x, g = N.y, l) {
    var U;
    return Object.assign({}, R, (U = {}, U[_] = y ? "0" : "", U[E] = m ? "0" : "", U.transform = ($.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + g + "px)" : "translate3d(" + p + "px, " + g + "px, 0)", U));
  }
  return Object.assign({}, R, (t = {}, t[_] = y ? g + "px" : "", t[E] = m ? p + "px" : "", t.transform = "", t));
}
function Q0(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, a = n.adaptive, s = a === void 0 ? !0 : a, i = n.roundOffsets, l = i === void 0 ? !0 : i, c = {
    placement: rn(t.placement),
    variation: Vr(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, pu(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, pu(Object.assign({}, c, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const e_ = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Q0,
  data: {}
};
var eo = {
  passive: !0
};
function t_(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, a = o === void 0 ? !0 : o, s = r.resize, i = s === void 0 ? !0 : s, l = kt(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && c.forEach(function(u) {
    u.addEventListener("scroll", n.update, eo);
  }), i && l.addEventListener("resize", n.update, eo), function() {
    a && c.forEach(function(u) {
      u.removeEventListener("scroll", n.update, eo);
    }), i && l.removeEventListener("resize", n.update, eo);
  };
}
const n_ = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: t_,
  data: {}
};
var r_ = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ao(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return r_[t];
  });
}
var a_ = {
  start: "end",
  end: "start"
};
function mu(e) {
  return e.replace(/start|end/g, function(t) {
    return a_[t];
  });
}
function Li(e) {
  var t = kt(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Ri(e) {
  return Fr(Xn(e)).left + Li(e).scrollLeft;
}
function o_(e, t) {
  var n = kt(e), r = Xn(e), o = n.visualViewport, a = r.clientWidth, s = r.clientHeight, i = 0, l = 0;
  if (o) {
    a = o.width, s = o.height;
    var c = gf();
    (c || !c && t === "fixed") && (i = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: i + Ri(e),
    y: l
  };
}
function s_(e) {
  var t, n = Xn(e), r = Li(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, a = sr(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = sr(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), i = -r.scrollLeft + Ri(e), l = -r.scrollTop;
  return kn(o || n).direction === "rtl" && (i += sr(n.clientWidth, o ? o.clientWidth : 0) - a), {
    width: a,
    height: s,
    x: i,
    y: l
  };
}
function Fi(e) {
  var t = kn(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function Ef(e) {
  return ["html", "body", "#document"].indexOf(sn(e)) >= 0 ? e.ownerDocument.body : Nt(e) && Fi(e) ? e : Ef(Wo(e));
}
function wa(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Ef(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = kt(r), s = o ? [a].concat(a.visualViewport || [], Fi(r) ? r : []) : r, i = t.concat(s);
  return o ? i : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    i.concat(wa(Wo(s)))
  );
}
function Gs(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function i_(e, t) {
  var n = Fr(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function vu(e, t, n) {
  return t === vf ? Gs(o_(e, n)) : fr(t) ? i_(t, n) : Gs(s_(Xn(e)));
}
function l_(e) {
  var t = wa(Wo(e)), n = ["absolute", "fixed"].indexOf(kn(e).position) >= 0, r = n && Nt(e) ? Ba(e) : e;
  return fr(r) ? t.filter(function(o) {
    return fr(o) && yf(o, r) && sn(o) !== "body";
  }) : [];
}
function u_(e, t, n, r) {
  var o = t === "clippingParents" ? l_(e) : [].concat(t), a = [].concat(o, [n]), s = a[0], i = a.reduce(function(l, c) {
    var u = vu(e, c, r);
    return l.top = sr(u.top, l.top), l.right = yo(u.right, l.right), l.bottom = yo(u.bottom, l.bottom), l.left = sr(u.left, l.left), l;
  }, vu(e, s, r));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function Of(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? rn(r) : null, a = r ? Vr(r) : null, s = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2, l;
  switch (o) {
    case gt:
      l = {
        x: s,
        y: t.y - n.height
      };
      break;
    case Lt:
      l = {
        x: s,
        y: t.y + t.height
      };
      break;
    case Rt:
      l = {
        x: t.x + t.width,
        y: i
      };
      break;
    case yt:
      l = {
        x: t.x - n.width,
        y: i
      };
      break;
    default:
      l = {
        x: t.x,
        y: t.y
      };
  }
  var c = o ? Ii(o) : null;
  if (c != null) {
    var u = c === "y" ? "height" : "width";
    switch (a) {
      case Lr:
        l[c] = l[c] - (t[u] / 2 - n[u] / 2);
        break;
      case Ca:
        l[c] = l[c] + (t[u] / 2 - n[u] / 2);
        break;
    }
  }
  return l;
}
function Na(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, a = n.strategy, s = a === void 0 ? e.strategy : a, i = n.boundary, l = i === void 0 ? x0 : i, c = n.rootBoundary, u = c === void 0 ? vf : c, d = n.elementContext, f = d === void 0 ? fa : d, p = n.altBoundary, v = p === void 0 ? !1 : p, g = n.padding, b = g === void 0 ? 0 : g, m = _f(typeof b != "number" ? b : wf(b, Va)), y = f === fa ? C0 : fa, E = e.rects.popper, _ = e.elements[v ? y : f], $ = u_(fr(_) ? _ : _.contextElement || Xn(e.elements.popper), l, u, s), O = Fr(e.elements.reference), A = Of({
    reference: O,
    element: E,
    strategy: "absolute",
    placement: o
  }), x = Gs(Object.assign({}, E, A)), S = f === fa ? x : O, k = {
    top: $.top - S.top + m.top,
    bottom: S.bottom - $.bottom + m.bottom,
    left: $.left - S.left + m.left,
    right: S.right - $.right + m.right
  }, R = e.modifiersData.offset;
  if (f === fa && R) {
    var N = R[o];
    Object.keys(k).forEach(function(U) {
      var J = [Rt, Lt].indexOf(U) >= 0 ? 1 : -1, z = [gt, Lt].indexOf(U) >= 0 ? "y" : "x";
      k[U] += N[z] * J;
    });
  }
  return k;
}
function c_(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, a = n.rootBoundary, s = n.padding, i = n.flipVariations, l = n.allowedAutoPlacements, c = l === void 0 ? hf : l, u = Vr(r), d = u ? i ? du : du.filter(function(v) {
    return Vr(v) === u;
  }) : Va, f = d.filter(function(v) {
    return c.indexOf(v) >= 0;
  });
  f.length === 0 && (f = d);
  var p = f.reduce(function(v, g) {
    return v[g] = Na(e, {
      placement: g,
      boundary: o,
      rootBoundary: a,
      padding: s
    })[rn(g)], v;
  }, {});
  return Object.keys(p).sort(function(v, g) {
    return p[v] - p[g];
  });
}
function d_(e) {
  if (rn(e) === Pi)
    return [];
  var t = ao(e);
  return [mu(e), t, mu(t)];
}
function f_(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, i = s === void 0 ? !0 : s, l = n.fallbackPlacements, c = n.padding, u = n.boundary, d = n.rootBoundary, f = n.altBoundary, p = n.flipVariations, v = p === void 0 ? !0 : p, g = n.allowedAutoPlacements, b = t.options.placement, m = rn(b), y = m === b, E = l || (y || !v ? [ao(b)] : d_(b)), _ = [b].concat(E).reduce(function(oe, Se) {
      return oe.concat(rn(Se) === Pi ? c_(t, {
        placement: Se,
        boundary: u,
        rootBoundary: d,
        padding: c,
        flipVariations: v,
        allowedAutoPlacements: g
      }) : Se);
    }, []), $ = t.rects.reference, O = t.rects.popper, A = /* @__PURE__ */ new Map(), x = !0, S = _[0], k = 0; k < _.length; k++) {
      var R = _[k], N = rn(R), U = Vr(R) === Lr, J = [gt, Lt].indexOf(N) >= 0, z = J ? "width" : "height", ee = Na(t, {
        placement: R,
        boundary: u,
        rootBoundary: d,
        altBoundary: f,
        padding: c
      }), le = J ? U ? Rt : yt : U ? Lt : gt;
      $[z] > O[z] && (le = ao(le));
      var ke = ao(le), ve = [];
      if (a && ve.push(ee[N] <= 0), i && ve.push(ee[le] <= 0, ee[ke] <= 0), ve.every(function(oe) {
        return oe;
      })) {
        S = R, x = !1;
        break;
      }
      A.set(R, ve);
    }
    if (x)
      for (var H = v ? 3 : 1, me = function(Se) {
        var G = _.find(function(X) {
          var se = A.get(X);
          if (se)
            return se.slice(0, Se).every(function(te) {
              return te;
            });
        });
        if (G)
          return S = G, "break";
      }, Ie = H; Ie > 0; Ie--) {
        var He = me(Ie);
        if (He === "break")
          break;
      }
    t.placement !== S && (t.modifiersData[r]._skip = !0, t.placement = S, t.reset = !0);
  }
}
const p_ = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: f_,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function hu(e, t, n) {
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
function gu(e) {
  return [gt, Rt, Lt, yt].some(function(t) {
    return e[t] >= 0;
  });
}
function m_(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow, s = Na(t, {
    elementContext: "reference"
  }), i = Na(t, {
    altBoundary: !0
  }), l = hu(s, r), c = hu(i, o, a), u = gu(l), d = gu(c);
  t.modifiersData[n] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: c,
    isReferenceHidden: u,
    hasPopperEscaped: d
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": u,
    "data-popper-escaped": d
  });
}
const v_ = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: m_
};
function h_(e, t, n) {
  var r = rn(e), o = [yt, gt].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, s = a[0], i = a[1];
  return s = s || 0, i = (i || 0) * o, [yt, Rt].indexOf(r) >= 0 ? {
    x: i,
    y: s
  } : {
    x: s,
    y: i
  };
}
function g_(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, a = o === void 0 ? [0, 0] : o, s = hf.reduce(function(u, d) {
    return u[d] = h_(d, t.rects, a), u;
  }, {}), i = s[t.placement], l = i.x, c = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += c), t.modifiersData[r] = s;
}
const y_ = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: g_
};
function b_(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Of({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const __ = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: b_,
  data: {}
};
function w_(e) {
  return e === "x" ? "y" : "x";
}
function E_(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, i = s === void 0 ? !1 : s, l = n.boundary, c = n.rootBoundary, u = n.altBoundary, d = n.padding, f = n.tether, p = f === void 0 ? !0 : f, v = n.tetherOffset, g = v === void 0 ? 0 : v, b = Na(t, {
    boundary: l,
    rootBoundary: c,
    padding: d,
    altBoundary: u
  }), m = rn(t.placement), y = Vr(t.placement), E = !y, _ = Ii(m), $ = w_(_), O = t.modifiersData.popperOffsets, A = t.rects.reference, x = t.rects.popper, S = typeof g == "function" ? g(Object.assign({}, t.rects, {
    placement: t.placement
  })) : g, k = typeof S == "number" ? {
    mainAxis: S,
    altAxis: S
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, S), R = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, N = {
    x: 0,
    y: 0
  };
  if (O) {
    if (a) {
      var U, J = _ === "y" ? gt : yt, z = _ === "y" ? Lt : Rt, ee = _ === "y" ? "height" : "width", le = O[_], ke = le + b[J], ve = le - b[z], H = p ? -x[ee] / 2 : 0, me = y === Lr ? A[ee] : x[ee], Ie = y === Lr ? -x[ee] : -A[ee], He = t.elements.arrow, oe = p && He ? Mi(He) : {
        width: 0,
        height: 0
      }, Se = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : bf(), G = Se[J], X = Se[z], se = _a(0, A[ee], oe[ee]), te = E ? A[ee] / 2 - H - se - G - k.mainAxis : me - se - G - k.mainAxis, Y = E ? -A[ee] / 2 + H + se + X + k.mainAxis : Ie + se + X + k.mainAxis, ne = t.elements.arrow && Ba(t.elements.arrow), we = ne ? _ === "y" ? ne.clientTop || 0 : ne.clientLeft || 0 : 0, D = (U = R == null ? void 0 : R[_]) != null ? U : 0, w = le + te - D - we, L = le + Y - D, Z = _a(p ? yo(ke, w) : ke, le, p ? sr(ve, L) : ve);
      O[_] = Z, N[_] = Z - le;
    }
    if (i) {
      var ie, Oe = _ === "x" ? gt : yt, qe = _ === "x" ? Lt : Rt, We = O[$], $t = $ === "y" ? "height" : "width", Zt = We + b[Oe], Fe = We - b[qe], F = [gt, yt].indexOf(m) !== -1, W = (ie = R == null ? void 0 : R[$]) != null ? ie : 0, Ze = F ? Zt : We - A[$t] - x[$t] - W + k.altAxis, Xe = F ? We + A[$t] + x[$t] - W - k.altAxis : Fe, Xt = p && F ? G0(Ze, We, Xe) : _a(p ? Ze : Zt, We, p ? Xe : Fe);
      O[$] = Xt, N[$] = Xt - We;
    }
    t.modifiersData[r] = N;
  }
}
const O_ = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: E_,
  requiresIfExists: ["offset"]
};
function D_(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function k_(e) {
  return e === kt(e) || !Nt(e) ? Li(e) : D_(e);
}
function $_(e) {
  var t = e.getBoundingClientRect(), n = Rr(t.width) / e.offsetWidth || 1, r = Rr(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function T_(e, t, n) {
  n === void 0 && (n = !1);
  var r = Nt(t), o = Nt(t) && $_(t), a = Xn(t), s = Fr(e, o, n), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((sn(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Fi(a)) && (i = k_(t)), Nt(t) ? (l = Fr(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = Ri(a))), {
    x: s.left + i.scrollLeft - l.x,
    y: s.top + i.scrollTop - l.y,
    width: s.width,
    height: s.height
  };
}
function A_(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function o(a) {
    n.add(a.name);
    var s = [].concat(a.requires || [], a.requiresIfExists || []);
    s.forEach(function(i) {
      if (!n.has(i)) {
        var l = t.get(i);
        l && o(l);
      }
    }), r.push(a);
  }
  return e.forEach(function(a) {
    n.has(a.name) || o(a);
  }), r;
}
function x_(e) {
  var t = A_(e);
  return B0.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function C_(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function N_(e) {
  var t = e.reduce(function(n, r) {
    var o = n[r.name];
    return n[r.name] = o ? Object.assign({}, o, r, {
      options: Object.assign({}, o.options, r.options),
      data: Object.assign({}, o.data, r.data)
    }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var yu = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function bu() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function P_(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, a = o === void 0 ? yu : o;
  return function(i, l, c) {
    c === void 0 && (c = a);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, yu, a),
      modifiersData: {},
      elements: {
        reference: i,
        popper: l
      },
      attributes: {},
      styles: {}
    }, d = [], f = !1, p = {
      state: u,
      setOptions: function(m) {
        var y = typeof m == "function" ? m(u.options) : m;
        g(), u.options = Object.assign({}, a, u.options, y), u.scrollParents = {
          reference: fr(i) ? wa(i) : i.contextElement ? wa(i.contextElement) : [],
          popper: wa(l)
        };
        var E = x_(N_([].concat(r, u.options.modifiers)));
        return u.orderedModifiers = E.filter(function(_) {
          return _.enabled;
        }), v(), p.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var m = u.elements, y = m.reference, E = m.popper;
          if (bu(y, E)) {
            u.rects = {
              reference: T_(y, Ba(E), u.options.strategy === "fixed"),
              popper: Mi(E)
            }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(k) {
              return u.modifiersData[k.name] = Object.assign({}, k.data);
            });
            for (var _ = 0; _ < u.orderedModifiers.length; _++) {
              if (u.reset === !0) {
                u.reset = !1, _ = -1;
                continue;
              }
              var $ = u.orderedModifiers[_], O = $.fn, A = $.options, x = A === void 0 ? {} : A, S = $.name;
              typeof O == "function" && (u = O({
                state: u,
                options: x,
                name: S,
                instance: p
              }) || u);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: C_(function() {
        return new Promise(function(b) {
          p.forceUpdate(), b(u);
        });
      }),
      destroy: function() {
        g(), f = !0;
      }
    };
    if (!bu(i, l))
      return p;
    p.setOptions(c).then(function(b) {
      !f && c.onFirstUpdate && c.onFirstUpdate(b);
    });
    function v() {
      u.orderedModifiers.forEach(function(b) {
        var m = b.name, y = b.options, E = y === void 0 ? {} : y, _ = b.effect;
        if (typeof _ == "function") {
          var $ = _({
            state: u,
            name: m,
            instance: p,
            options: E
          }), O = function() {
          };
          d.push($ || O);
        }
      });
    }
    function g() {
      d.forEach(function(b) {
        return b();
      }), d = [];
    }
    return p;
  };
}
var S_ = [n_, __, e_, U0, y_, p_, O_, Z0, v_], M_ = /* @__PURE__ */ P_({
  defaultModifiers: S_
}), I_ = Object.defineProperty, L_ = (e, t, n) => t in e ? I_(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ue = (e, t, n) => (L_(e, typeof t != "symbol" ? t + "" : t, n), n);
const xn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, R_ = {}, F_ = {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  viewBox: "0 0 24 24"
}, V_ = /* @__PURE__ */ M("polyline", { points: "9 18 15 12 9 6" }, null, -1), B_ = [
  V_
];
function Y_(e, t) {
  return T(), I("svg", F_, B_);
}
const H_ = /* @__PURE__ */ xn(R_, [["render", Y_]]), U_ = {}, j_ = {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  viewBox: "0 0 24 24"
}, W_ = /* @__PURE__ */ M("polyline", { points: "15 18 9 12 15 6" }, null, -1), G_ = [
  W_
];
function z_(e, t) {
  return T(), I("svg", j_, G_);
}
const K_ = /* @__PURE__ */ xn(U_, [["render", z_]]), q_ = {}, Z_ = {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  viewBox: "0 0 24 24"
}, X_ = /* @__PURE__ */ M("polyline", { points: "6 9 12 15 18 9" }, null, -1), J_ = [
  X_
];
function Q_(e, t) {
  return T(), I("svg", Z_, J_);
}
const ew = /* @__PURE__ */ xn(q_, [["render", Q_]]), tw = {}, nw = {
  fill: "none",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  viewBox: "0 0 24 24"
}, rw = /* @__PURE__ */ M("path", { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" }, null, -1), aw = [
  rw
];
function ow(e, t) {
  return T(), I("svg", nw, aw);
}
const sw = /* @__PURE__ */ xn(tw, [["render", ow]]), iw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IconChevronDown: ew,
  IconChevronLeft: K_,
  IconChevronRight: H_,
  IconClock: sw
}, Symbol.toStringTag, { value: "Module" })), Br = /* @__PURE__ */ de({
  __name: "BaseIcon",
  props: {
    name: { type: String, required: !0 },
    width: { type: String },
    height: { type: String },
    size: { type: String, default: "26" },
    viewBox: { type: String }
  },
  setup(e) {
    const t = e, n = C(() => t.width || t.size), r = C(() => t.height || t.size), o = C(() => iw[`Icon${t.name}`]);
    return (a, s) => (T(), De(Ro(h(o)), {
      width: h(n),
      height: h(r),
      class: "vc-base-icon"
    }, null, 8, ["width", "height"]));
  }
});
function Df() {
  return typeof window < "u";
}
function lw(e) {
  return Df() && e in window;
}
function uw(e) {
  const t = B(!1), n = C(() => t.value ? "dark" : "light");
  let r, o;
  function a(p) {
    t.value = p.matches;
  }
  function s() {
    lw("matchMedia") && (r = window.matchMedia("(prefers-color-scheme: dark)"), r.addEventListener("change", a), t.value = r.matches);
  }
  function i() {
    const { selector: p = ":root", darkClass: v = "dark" } = e.value, g = document.querySelector(p);
    t.value = g.classList.contains(v);
  }
  function l(p) {
    const { selector: v = ":root", darkClass: g = "dark" } = p;
    if (Df() && v && g) {
      const b = document.querySelector(v);
      b && (o = new MutationObserver(i), o.observe(b, {
        attributes: !0,
        attributeFilter: ["class"]
      }), t.value = b.classList.contains(g));
    }
  }
  function c() {
    d();
    const p = typeof e.value;
    p === "string" && e.value.toLowerCase() === "system" ? s() : p === "object" ? l(e.value) : t.value = !!e.value;
  }
  const u = _e(() => e.value, () => c(), {
    immediate: !0
  });
  function d() {
    r && (r.removeEventListener("change", a), r = void 0), o && (o.disconnect(), o = void 0);
  }
  function f() {
    d(), u();
  }
  return qn(() => f()), {
    isDark: t,
    displayMode: n,
    cleanup: f
  };
}
var to = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function cw(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var dw = typeof to == "object" && to && to.Object === Object && to, kf = dw, fw = kf, pw = typeof self == "object" && self && self.Object === Object && self, mw = fw || pw || Function("return this")(), dn = mw, vw = dn, hw = vw.Symbol, Go = hw, _u = Go, $f = Object.prototype, gw = $f.hasOwnProperty, yw = $f.toString, pa = _u ? _u.toStringTag : void 0;
function bw(e) {
  var t = gw.call(e, pa), n = e[pa];
  try {
    e[pa] = void 0;
    var r = !0;
  } catch {
  }
  var o = yw.call(e);
  return r && (t ? e[pa] = n : delete e[pa]), o;
}
var _w = bw, ww = Object.prototype, Ew = ww.toString;
function Ow(e) {
  return Ew.call(e);
}
var Dw = Ow, wu = Go, kw = _w, $w = Dw, Tw = "[object Null]", Aw = "[object Undefined]", Eu = wu ? wu.toStringTag : void 0;
function xw(e) {
  return e == null ? e === void 0 ? Aw : Tw : Eu && Eu in Object(e) ? kw(e) : $w(e);
}
var fn = xw;
function Cw(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Cn = Cw, Nw = fn, Pw = Cn, Sw = "[object AsyncFunction]", Mw = "[object Function]", Iw = "[object GeneratorFunction]", Lw = "[object Proxy]";
function Rw(e) {
  if (!Pw(e))
    return !1;
  var t = Nw(e);
  return t == Mw || t == Iw || t == Sw || t == Lw;
}
var vr = Rw, Fw = Array.isArray, Kt = Fw;
function Vw(e) {
  return e != null && typeof e == "object";
}
var qt = Vw, Bw = fn, Yw = Kt, Hw = qt, Uw = "[object String]";
function jw(e) {
  return typeof e == "string" || !Yw(e) && Hw(e) && Bw(e) == Uw;
}
var Qt = jw, Ww = fn, Gw = qt, zw = "[object Boolean]";
function Kw(e) {
  return e === !0 || e === !1 || Gw(e) && Ww(e) == zw;
}
var qw = Kw, Zw = fn, Xw = qt, Jw = "[object Number]";
function Qw(e) {
  return typeof e == "number" || Xw(e) && Zw(e) == Jw;
}
var Wt = Qw, eE = fn, tE = qt, nE = "[object Date]";
function rE(e) {
  return tE(e) && eE(e) == nE;
}
var aE = rE;
function oE(e) {
  return function(t) {
    return e(t);
  };
}
var Tf = oE, Pa = {}, sE = {
  get exports() {
    return Pa;
  },
  set exports(e) {
    Pa = e;
  }
};
(function(e, t) {
  var n = kf, r = t && !t.nodeType && t, o = r && !0 && e && !e.nodeType && e, a = o && o.exports === r, s = a && n.process, i = function() {
    try {
      var l = o && o.require && o.require("util").types;
      return l || s && s.binding && s.binding("util");
    } catch {
    }
  }();
  e.exports = i;
})(sE, Pa);
var iE = aE, lE = Tf, Ou = Pa, Du = Ou && Ou.isDate, uE = Du ? lE(Du) : iE, cE = uE, dE = fn, fE = qt, pE = "[object Symbol]";
function mE(e) {
  return typeof e == "symbol" || fE(e) && dE(e) == pE;
}
var Vi = mE, vE = Kt, hE = Vi, gE = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, yE = /^\w*$/;
function bE(e, t) {
  if (vE(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || hE(e) ? !0 : yE.test(e) || !gE.test(e) || t != null && e in Object(t);
}
var Bi = bE, _E = dn, wE = _E["__core-js_shared__"], EE = wE, hs = EE, ku = function() {
  var e = /[^.]+$/.exec(hs && hs.keys && hs.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function OE(e) {
  return !!ku && ku in e;
}
var DE = OE, kE = Function.prototype, $E = kE.toString;
function TE(e) {
  if (e != null) {
    try {
      return $E.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Af = TE, AE = vr, xE = DE, CE = Cn, NE = Af, PE = /[\\^$.*+?()[\]{}|]/g, SE = /^\[object .+?Constructor\]$/, ME = Function.prototype, IE = Object.prototype, LE = ME.toString, RE = IE.hasOwnProperty, FE = RegExp(
  "^" + LE.call(RE).replace(PE, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function VE(e) {
  if (!CE(e) || xE(e))
    return !1;
  var t = AE(e) ? FE : SE;
  return t.test(NE(e));
}
var BE = VE;
function YE(e, t) {
  return e == null ? void 0 : e[t];
}
var HE = YE, UE = BE, jE = HE;
function WE(e, t) {
  var n = jE(e, t);
  return UE(n) ? n : void 0;
}
var hr = WE, GE = hr, zE = GE(Object, "create"), zo = zE, $u = zo;
function KE() {
  this.__data__ = $u ? $u(null) : {}, this.size = 0;
}
var qE = KE;
function ZE(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var XE = ZE, JE = zo, QE = "__lodash_hash_undefined__", eO = Object.prototype, tO = eO.hasOwnProperty;
function nO(e) {
  var t = this.__data__;
  if (JE) {
    var n = t[e];
    return n === QE ? void 0 : n;
  }
  return tO.call(t, e) ? t[e] : void 0;
}
var rO = nO, aO = zo, oO = Object.prototype, sO = oO.hasOwnProperty;
function iO(e) {
  var t = this.__data__;
  return aO ? t[e] !== void 0 : sO.call(t, e);
}
var lO = iO, uO = zo, cO = "__lodash_hash_undefined__";
function dO(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = uO && t === void 0 ? cO : t, this;
}
var fO = dO, pO = qE, mO = XE, vO = rO, hO = lO, gO = fO;
function Xr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Xr.prototype.clear = pO;
Xr.prototype.delete = mO;
Xr.prototype.get = vO;
Xr.prototype.has = hO;
Xr.prototype.set = gO;
var yO = Xr;
function bO() {
  this.__data__ = [], this.size = 0;
}
var _O = bO;
function wO(e, t) {
  return e === t || e !== e && t !== t;
}
var Jr = wO, EO = Jr;
function OO(e, t) {
  for (var n = e.length; n--; )
    if (EO(e[n][0], t))
      return n;
  return -1;
}
var Ko = OO, DO = Ko, kO = Array.prototype, $O = kO.splice;
function TO(e) {
  var t = this.__data__, n = DO(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : $O.call(t, n, 1), --this.size, !0;
}
var AO = TO, xO = Ko;
function CO(e) {
  var t = this.__data__, n = xO(t, e);
  return n < 0 ? void 0 : t[n][1];
}
var NO = CO, PO = Ko;
function SO(e) {
  return PO(this.__data__, e) > -1;
}
var MO = SO, IO = Ko;
function LO(e, t) {
  var n = this.__data__, r = IO(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
var RO = LO, FO = _O, VO = AO, BO = NO, YO = MO, HO = RO;
function Qr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Qr.prototype.clear = FO;
Qr.prototype.delete = VO;
Qr.prototype.get = BO;
Qr.prototype.has = YO;
Qr.prototype.set = HO;
var qo = Qr, UO = hr, jO = dn, WO = UO(jO, "Map"), Yi = WO, Tu = yO, GO = qo, zO = Yi;
function KO() {
  this.size = 0, this.__data__ = {
    hash: new Tu(),
    map: new (zO || GO)(),
    string: new Tu()
  };
}
var qO = KO;
function ZO(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var XO = ZO, JO = XO;
function QO(e, t) {
  var n = e.__data__;
  return JO(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
var Zo = QO, eD = Zo;
function tD(e) {
  var t = eD(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var nD = tD, rD = Zo;
function aD(e) {
  return rD(this, e).get(e);
}
var oD = aD, sD = Zo;
function iD(e) {
  return sD(this, e).has(e);
}
var lD = iD, uD = Zo;
function cD(e, t) {
  var n = uD(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
var dD = cD, fD = qO, pD = nD, mD = oD, vD = lD, hD = dD;
function ea(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ea.prototype.clear = fD;
ea.prototype.delete = pD;
ea.prototype.get = mD;
ea.prototype.has = vD;
ea.prototype.set = hD;
var Hi = ea, xf = Hi, gD = "Expected a function";
function Ui(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(gD);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], a = n.cache;
    if (a.has(o))
      return a.get(o);
    var s = e.apply(this, r);
    return n.cache = a.set(o, s) || a, s;
  };
  return n.cache = new (Ui.Cache || xf)(), n;
}
Ui.Cache = xf;
var yD = Ui, bD = yD, _D = 500;
function wD(e) {
  var t = bD(e, function(r) {
    return n.size === _D && n.clear(), r;
  }), n = t.cache;
  return t;
}
var ED = wD, OD = ED, DD = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, kD = /\\(\\)?/g, $D = OD(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(DD, function(n, r, o, a) {
    t.push(o ? a.replace(kD, "$1") : r || n);
  }), t;
}), TD = $D;
function AD(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var xD = AD, Au = Go, CD = xD, ND = Kt, PD = Vi, SD = 1 / 0, xu = Au ? Au.prototype : void 0, Cu = xu ? xu.toString : void 0;
function Cf(e) {
  if (typeof e == "string")
    return e;
  if (ND(e))
    return CD(e, Cf) + "";
  if (PD(e))
    return Cu ? Cu.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -SD ? "-0" : t;
}
var MD = Cf, ID = MD;
function LD(e) {
  return e == null ? "" : ID(e);
}
var RD = LD, FD = Kt, VD = Bi, BD = TD, YD = RD;
function HD(e, t) {
  return FD(e) ? e : VD(e, t) ? [e] : BD(YD(e));
}
var Nf = HD, UD = Vi, jD = 1 / 0;
function WD(e) {
  if (typeof e == "string" || UD(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -jD ? "-0" : t;
}
var Xo = WD, GD = Nf, zD = Xo;
function KD(e, t) {
  t = GD(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[zD(t[n++])];
  return n && n == r ? e : void 0;
}
var Pf = KD, qD = Pf;
function ZD(e, t, n) {
  var r = e == null ? void 0 : qD(e, t);
  return r === void 0 ? n : r;
}
var ar = ZD, XD = hr, JD = function() {
  try {
    var e = XD(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Sf = JD, Nu = Sf;
function QD(e, t, n) {
  t == "__proto__" && Nu ? Nu(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
var Jo = QD, ek = Jo, tk = Jr, nk = Object.prototype, rk = nk.hasOwnProperty;
function ak(e, t, n) {
  var r = e[t];
  (!(rk.call(e, t) && tk(r, n)) || n === void 0 && !(t in e)) && ek(e, t, n);
}
var ok = ak, sk = 9007199254740991, ik = /^(?:0|[1-9]\d*)$/;
function lk(e, t) {
  var n = typeof e;
  return t = t ?? sk, !!t && (n == "number" || n != "symbol" && ik.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var ji = lk;
function uk(e) {
  return function(t, n, r) {
    for (var o = -1, a = Object(t), s = r(t), i = s.length; i--; ) {
      var l = s[e ? i : ++o];
      if (n(a[l], l, a) === !1)
        break;
    }
    return t;
  };
}
var ck = uk, dk = ck, fk = dk(), Mf = fk;
function pk(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var mk = pk, vk = fn, hk = qt, gk = "[object Arguments]";
function yk(e) {
  return hk(e) && vk(e) == gk;
}
var bk = yk, Pu = bk, _k = qt, If = Object.prototype, wk = If.hasOwnProperty, Ek = If.propertyIsEnumerable, Ok = Pu(function() {
  return arguments;
}()) ? Pu : function(e) {
  return _k(e) && wk.call(e, "callee") && !Ek.call(e, "callee");
}, Wi = Ok, Yr = {}, Dk = {
  get exports() {
    return Yr;
  },
  set exports(e) {
    Yr = e;
  }
};
function kk() {
  return !1;
}
var $k = kk;
(function(e, t) {
  var n = dn, r = $k, o = t && !t.nodeType && t, a = o && !0 && e && !e.nodeType && e, s = a && a.exports === o, i = s ? n.Buffer : void 0, l = i ? i.isBuffer : void 0, c = l || r;
  e.exports = c;
})(Dk, Yr);
var Tk = 9007199254740991;
function Ak(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Tk;
}
var Gi = Ak, xk = fn, Ck = Gi, Nk = qt, Pk = "[object Arguments]", Sk = "[object Array]", Mk = "[object Boolean]", Ik = "[object Date]", Lk = "[object Error]", Rk = "[object Function]", Fk = "[object Map]", Vk = "[object Number]", Bk = "[object Object]", Yk = "[object RegExp]", Hk = "[object Set]", Uk = "[object String]", jk = "[object WeakMap]", Wk = "[object ArrayBuffer]", Gk = "[object DataView]", zk = "[object Float32Array]", Kk = "[object Float64Array]", qk = "[object Int8Array]", Zk = "[object Int16Array]", Xk = "[object Int32Array]", Jk = "[object Uint8Array]", Qk = "[object Uint8ClampedArray]", e$ = "[object Uint16Array]", t$ = "[object Uint32Array]", ze = {};
ze[zk] = ze[Kk] = ze[qk] = ze[Zk] = ze[Xk] = ze[Jk] = ze[Qk] = ze[e$] = ze[t$] = !0;
ze[Pk] = ze[Sk] = ze[Wk] = ze[Mk] = ze[Gk] = ze[Ik] = ze[Lk] = ze[Rk] = ze[Fk] = ze[Vk] = ze[Bk] = ze[Yk] = ze[Hk] = ze[Uk] = ze[jk] = !1;
function n$(e) {
  return Nk(e) && Ck(e.length) && !!ze[xk(e)];
}
var r$ = n$, a$ = r$, o$ = Tf, Su = Pa, Mu = Su && Su.isTypedArray, s$ = Mu ? o$(Mu) : a$, zi = s$, i$ = mk, l$ = Wi, u$ = Kt, c$ = Yr, d$ = ji, f$ = zi, p$ = Object.prototype, m$ = p$.hasOwnProperty;
function v$(e, t) {
  var n = u$(e), r = !n && l$(e), o = !n && !r && c$(e), a = !n && !r && !o && f$(e), s = n || r || o || a, i = s ? i$(e.length, String) : [], l = i.length;
  for (var c in e)
    (t || m$.call(e, c)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    d$(c, l))) && i.push(c);
  return i;
}
var Lf = v$, h$ = Object.prototype;
function g$(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || h$;
  return e === n;
}
var Ki = g$;
function y$(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var Rf = y$, b$ = Rf, _$ = b$(Object.keys, Object), w$ = _$, E$ = Ki, O$ = w$, D$ = Object.prototype, k$ = D$.hasOwnProperty;
function $$(e) {
  if (!E$(e))
    return O$(e);
  var t = [];
  for (var n in Object(e))
    k$.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
var T$ = $$, A$ = vr, x$ = Gi;
function C$(e) {
  return e != null && x$(e.length) && !A$(e);
}
var Ya = C$, N$ = Lf, P$ = T$, S$ = Ya;
function M$(e) {
  return S$(e) ? N$(e) : P$(e);
}
var qi = M$, I$ = Mf, L$ = qi;
function R$(e, t) {
  return e && I$(e, t, L$);
}
var Ff = R$, F$ = qo;
function V$() {
  this.__data__ = new F$(), this.size = 0;
}
var B$ = V$;
function Y$(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
var H$ = Y$;
function U$(e) {
  return this.__data__.get(e);
}
var j$ = U$;
function W$(e) {
  return this.__data__.has(e);
}
var G$ = W$, z$ = qo, K$ = Yi, q$ = Hi, Z$ = 200;
function X$(e, t) {
  var n = this.__data__;
  if (n instanceof z$) {
    var r = n.__data__;
    if (!K$ || r.length < Z$ - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new q$(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
var J$ = X$, Q$ = qo, eT = B$, tT = H$, nT = j$, rT = G$, aT = J$;
function ta(e) {
  var t = this.__data__ = new Q$(e);
  this.size = t.size;
}
ta.prototype.clear = eT;
ta.prototype.delete = tT;
ta.prototype.get = nT;
ta.prototype.has = rT;
ta.prototype.set = aT;
var Zi = ta, oT = "__lodash_hash_undefined__";
function sT(e) {
  return this.__data__.set(e, oT), this;
}
var iT = sT;
function lT(e) {
  return this.__data__.has(e);
}
var uT = lT, cT = Hi, dT = iT, fT = uT;
function bo(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new cT(); ++t < n; )
    this.add(e[t]);
}
bo.prototype.add = bo.prototype.push = dT;
bo.prototype.has = fT;
var pT = bo;
function mT(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
var Vf = mT;
function vT(e, t) {
  return e.has(t);
}
var hT = vT, gT = pT, yT = Vf, bT = hT, _T = 1, wT = 2;
function ET(e, t, n, r, o, a) {
  var s = n & _T, i = e.length, l = t.length;
  if (i != l && !(s && l > i))
    return !1;
  var c = a.get(e), u = a.get(t);
  if (c && u)
    return c == t && u == e;
  var d = -1, f = !0, p = n & wT ? new gT() : void 0;
  for (a.set(e, t), a.set(t, e); ++d < i; ) {
    var v = e[d], g = t[d];
    if (r)
      var b = s ? r(g, v, d, t, e, a) : r(v, g, d, e, t, a);
    if (b !== void 0) {
      if (b)
        continue;
      f = !1;
      break;
    }
    if (p) {
      if (!yT(t, function(m, y) {
        if (!bT(p, y) && (v === m || o(v, m, n, r, a)))
          return p.push(y);
      })) {
        f = !1;
        break;
      }
    } else if (!(v === g || o(v, g, n, r, a))) {
      f = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), f;
}
var Bf = ET, OT = dn, DT = OT.Uint8Array, Yf = DT;
function kT(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, o) {
    n[++t] = [o, r];
  }), n;
}
var $T = kT;
function TT(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var AT = TT, Iu = Go, Lu = Yf, xT = Jr, CT = Bf, NT = $T, PT = AT, ST = 1, MT = 2, IT = "[object Boolean]", LT = "[object Date]", RT = "[object Error]", FT = "[object Map]", VT = "[object Number]", BT = "[object RegExp]", YT = "[object Set]", HT = "[object String]", UT = "[object Symbol]", jT = "[object ArrayBuffer]", WT = "[object DataView]", Ru = Iu ? Iu.prototype : void 0, gs = Ru ? Ru.valueOf : void 0;
function GT(e, t, n, r, o, a, s) {
  switch (n) {
    case WT:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case jT:
      return !(e.byteLength != t.byteLength || !a(new Lu(e), new Lu(t)));
    case IT:
    case LT:
    case VT:
      return xT(+e, +t);
    case RT:
      return e.name == t.name && e.message == t.message;
    case BT:
    case HT:
      return e == t + "";
    case FT:
      var i = NT;
    case YT:
      var l = r & ST;
      if (i || (i = PT), e.size != t.size && !l)
        return !1;
      var c = s.get(e);
      if (c)
        return c == t;
      r |= MT, s.set(e, t);
      var u = CT(i(e), i(t), r, o, a, s);
      return s.delete(e), u;
    case UT:
      if (gs)
        return gs.call(e) == gs.call(t);
  }
  return !1;
}
var zT = GT;
function KT(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var qT = KT, ZT = qT, XT = Kt;
function JT(e, t, n) {
  var r = t(e);
  return XT(e) ? r : ZT(r, n(e));
}
var QT = JT;
function eA(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, a = []; ++n < r; ) {
    var s = e[n];
    t(s, n, e) && (a[o++] = s);
  }
  return a;
}
var tA = eA;
function nA() {
  return [];
}
var rA = nA, aA = tA, oA = rA, sA = Object.prototype, iA = sA.propertyIsEnumerable, Fu = Object.getOwnPropertySymbols, lA = Fu ? function(e) {
  return e == null ? [] : (e = Object(e), aA(Fu(e), function(t) {
    return iA.call(e, t);
  }));
} : oA, uA = lA, cA = QT, dA = uA, fA = qi;
function pA(e) {
  return cA(e, fA, dA);
}
var mA = pA, Vu = mA, vA = 1, hA = Object.prototype, gA = hA.hasOwnProperty;
function yA(e, t, n, r, o, a) {
  var s = n & vA, i = Vu(e), l = i.length, c = Vu(t), u = c.length;
  if (l != u && !s)
    return !1;
  for (var d = l; d--; ) {
    var f = i[d];
    if (!(s ? f in t : gA.call(t, f)))
      return !1;
  }
  var p = a.get(e), v = a.get(t);
  if (p && v)
    return p == t && v == e;
  var g = !0;
  a.set(e, t), a.set(t, e);
  for (var b = s; ++d < l; ) {
    f = i[d];
    var m = e[f], y = t[f];
    if (r)
      var E = s ? r(y, m, f, t, e, a) : r(m, y, f, e, t, a);
    if (!(E === void 0 ? m === y || o(m, y, n, r, a) : E)) {
      g = !1;
      break;
    }
    b || (b = f == "constructor");
  }
  if (g && !b) {
    var _ = e.constructor, $ = t.constructor;
    _ != $ && "constructor" in e && "constructor" in t && !(typeof _ == "function" && _ instanceof _ && typeof $ == "function" && $ instanceof $) && (g = !1);
  }
  return a.delete(e), a.delete(t), g;
}
var bA = yA, _A = hr, wA = dn, EA = _A(wA, "DataView"), OA = EA, DA = hr, kA = dn, $A = DA(kA, "Promise"), TA = $A, AA = hr, xA = dn, CA = AA(xA, "Set"), NA = CA, PA = hr, SA = dn, MA = PA(SA, "WeakMap"), IA = MA, zs = OA, Ks = Yi, qs = TA, Zs = NA, Xs = IA, Hf = fn, na = Af, Bu = "[object Map]", LA = "[object Object]", Yu = "[object Promise]", Hu = "[object Set]", Uu = "[object WeakMap]", ju = "[object DataView]", RA = na(zs), FA = na(Ks), VA = na(qs), BA = na(Zs), YA = na(Xs), Qn = Hf;
(zs && Qn(new zs(new ArrayBuffer(1))) != ju || Ks && Qn(new Ks()) != Bu || qs && Qn(qs.resolve()) != Yu || Zs && Qn(new Zs()) != Hu || Xs && Qn(new Xs()) != Uu) && (Qn = function(e) {
  var t = Hf(e), n = t == LA ? e.constructor : void 0, r = n ? na(n) : "";
  if (r)
    switch (r) {
      case RA:
        return ju;
      case FA:
        return Bu;
      case VA:
        return Yu;
      case BA:
        return Hu;
      case YA:
        return Uu;
    }
  return t;
});
var HA = Qn, ys = Zi, UA = Bf, jA = zT, WA = bA, Wu = HA, Gu = Kt, zu = Yr, GA = zi, zA = 1, Ku = "[object Arguments]", qu = "[object Array]", no = "[object Object]", KA = Object.prototype, Zu = KA.hasOwnProperty;
function qA(e, t, n, r, o, a) {
  var s = Gu(e), i = Gu(t), l = s ? qu : Wu(e), c = i ? qu : Wu(t);
  l = l == Ku ? no : l, c = c == Ku ? no : c;
  var u = l == no, d = c == no, f = l == c;
  if (f && zu(e)) {
    if (!zu(t))
      return !1;
    s = !0, u = !1;
  }
  if (f && !u)
    return a || (a = new ys()), s || GA(e) ? UA(e, t, n, r, o, a) : jA(e, t, l, n, r, o, a);
  if (!(n & zA)) {
    var p = u && Zu.call(e, "__wrapped__"), v = d && Zu.call(t, "__wrapped__");
    if (p || v) {
      var g = p ? e.value() : e, b = v ? t.value() : t;
      return a || (a = new ys()), o(g, b, n, r, a);
    }
  }
  return f ? (a || (a = new ys()), WA(e, t, n, r, o, a)) : !1;
}
var ZA = qA, XA = ZA, Xu = qt;
function Uf(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !Xu(e) && !Xu(t) ? e !== e && t !== t : XA(e, t, n, r, Uf, o);
}
var jf = Uf, JA = Zi, QA = jf, ex = 1, tx = 2;
function nx(e, t, n, r) {
  var o = n.length, a = o, s = !r;
  if (e == null)
    return !a;
  for (e = Object(e); o--; ) {
    var i = n[o];
    if (s && i[2] ? i[1] !== e[i[0]] : !(i[0] in e))
      return !1;
  }
  for (; ++o < a; ) {
    i = n[o];
    var l = i[0], c = e[l], u = i[1];
    if (s && i[2]) {
      if (c === void 0 && !(l in e))
        return !1;
    } else {
      var d = new JA();
      if (r)
        var f = r(c, u, l, e, t, d);
      if (!(f === void 0 ? QA(u, c, ex | tx, r, d) : f))
        return !1;
    }
  }
  return !0;
}
var rx = nx, ax = Cn;
function ox(e) {
  return e === e && !ax(e);
}
var Wf = ox, sx = Wf, ix = qi;
function lx(e) {
  for (var t = ix(e), n = t.length; n--; ) {
    var r = t[n], o = e[r];
    t[n] = [r, o, sx(o)];
  }
  return t;
}
var ux = lx;
function cx(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
var Gf = cx, dx = rx, fx = ux, px = Gf;
function mx(e) {
  var t = fx(e);
  return t.length == 1 && t[0][2] ? px(t[0][0], t[0][1]) : function(n) {
    return n === e || dx(n, e, t);
  };
}
var vx = mx;
function hx(e, t) {
  return e != null && t in Object(e);
}
var gx = hx, yx = Nf, bx = Wi, _x = Kt, wx = ji, Ex = Gi, Ox = Xo;
function Dx(e, t, n) {
  t = yx(t, e);
  for (var r = -1, o = t.length, a = !1; ++r < o; ) {
    var s = Ox(t[r]);
    if (!(a = e != null && n(e, s)))
      break;
    e = e[s];
  }
  return a || ++r != o ? a : (o = e == null ? 0 : e.length, !!o && Ex(o) && wx(s, o) && (_x(e) || bx(e)));
}
var zf = Dx, kx = gx, $x = zf;
function Tx(e, t) {
  return e != null && $x(e, t, kx);
}
var Ax = Tx, xx = jf, Cx = ar, Nx = Ax, Px = Bi, Sx = Wf, Mx = Gf, Ix = Xo, Lx = 1, Rx = 2;
function Fx(e, t) {
  return Px(e) && Sx(t) ? Mx(Ix(e), t) : function(n) {
    var r = Cx(n, e);
    return r === void 0 && r === t ? Nx(n, e) : xx(t, r, Lx | Rx);
  };
}
var Vx = Fx;
function Bx(e) {
  return e;
}
var Xi = Bx;
function Yx(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var Hx = Yx, Ux = Pf;
function jx(e) {
  return function(t) {
    return Ux(t, e);
  };
}
var Wx = jx, Gx = Hx, zx = Wx, Kx = Bi, qx = Xo;
function Zx(e) {
  return Kx(e) ? Gx(qx(e)) : zx(e);
}
var Xx = Zx, Jx = vx, Qx = Vx, eC = Xi, tC = Kt, nC = Xx;
function rC(e) {
  return typeof e == "function" ? e : e == null ? eC : typeof e == "object" ? tC(e) ? Qx(e[0], e[1]) : Jx(e) : nC(e);
}
var Kf = rC, aC = Jo, oC = Ff, sC = Kf;
function iC(e, t) {
  var n = {};
  return t = sC(t), oC(e, function(r, o, a) {
    aC(n, o, t(r, o, a));
  }), n;
}
var lC = iC;
function uC(e, t, n) {
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
var qf = uC, cC = qf, Ju = Math.max;
function dC(e, t, n) {
  return t = Ju(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, a = Ju(r.length - t, 0), s = Array(a); ++o < a; )
      s[o] = r[t + o];
    o = -1;
    for (var i = Array(t + 1); ++o < t; )
      i[o] = r[o];
    return i[t] = n(s), cC(e, this, i);
  };
}
var fC = dC;
function pC(e) {
  return function() {
    return e;
  };
}
var mC = pC, vC = mC, Qu = Sf, hC = Xi, gC = Qu ? function(e, t) {
  return Qu(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: vC(t),
    writable: !0
  });
} : hC, yC = gC, bC = 800, _C = 16, wC = Date.now;
function EC(e) {
  var t = 0, n = 0;
  return function() {
    var r = wC(), o = _C - (r - n);
    if (n = r, o > 0) {
      if (++t >= bC)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var OC = EC, DC = yC, kC = OC, $C = kC(DC), TC = $C, AC = Xi, xC = fC, CC = TC;
function NC(e, t) {
  return CC(xC(e, t, AC), e + "");
}
var Ji = NC, PC = Jr, SC = Ya, MC = ji, IC = Cn;
function LC(e, t, n) {
  if (!IC(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? SC(n) && MC(t, n.length) : r == "string" && t in n) ? PC(n[t], e) : !1;
}
var Qi = LC;
function RC(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var FC = RC, VC = Cn, BC = Ki, YC = FC, HC = Object.prototype, UC = HC.hasOwnProperty;
function jC(e) {
  if (!VC(e))
    return YC(e);
  var t = BC(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !UC.call(e, r)) || n.push(r);
  return n;
}
var WC = jC, GC = Lf, zC = WC, KC = Ya;
function qC(e) {
  return KC(e) ? GC(e, !0) : zC(e);
}
var el = qC, ZC = Ji, XC = Jr, JC = Qi, QC = el, Zf = Object.prototype, eN = Zf.hasOwnProperty, tN = ZC(function(e, t) {
  e = Object(e);
  var n = -1, r = t.length, o = r > 2 ? t[2] : void 0;
  for (o && JC(t[0], t[1], o) && (r = 1); ++n < r; )
    for (var a = t[n], s = QC(a), i = -1, l = s.length; ++i < l; ) {
      var c = s[i], u = e[c];
      (u === void 0 || XC(u, Zf[c]) && !eN.call(e, c)) && (e[c] = a[c]);
    }
  return e;
}), ec = tN, nN = Jo, rN = Jr;
function aN(e, t, n) {
  (n !== void 0 && !rN(e[t], n) || n === void 0 && !(t in e)) && nN(e, t, n);
}
var Xf = aN, _o = {}, oN = {
  get exports() {
    return _o;
  },
  set exports(e) {
    _o = e;
  }
};
(function(e, t) {
  var n = dn, r = t && !t.nodeType && t, o = r && !0 && e && !e.nodeType && e, a = o && o.exports === r, s = a ? n.Buffer : void 0, i = s ? s.allocUnsafe : void 0;
  function l(c, u) {
    if (u)
      return c.slice();
    var d = c.length, f = i ? i(d) : new c.constructor(d);
    return c.copy(f), f;
  }
  e.exports = l;
})(oN, _o);
var tc = Yf;
function sN(e) {
  var t = new e.constructor(e.byteLength);
  return new tc(t).set(new tc(e)), t;
}
var iN = sN, lN = iN;
function uN(e, t) {
  var n = t ? lN(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var cN = uN;
function dN(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
var fN = dN, pN = Cn, nc = Object.create, mN = function() {
  function e() {
  }
  return function(t) {
    if (!pN(t))
      return {};
    if (nc)
      return nc(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}(), vN = mN, hN = Rf, gN = hN(Object.getPrototypeOf, Object), Jf = gN, yN = vN, bN = Jf, _N = Ki;
function wN(e) {
  return typeof e.constructor == "function" && !_N(e) ? yN(bN(e)) : {};
}
var EN = wN, ON = Ya, DN = qt;
function kN(e) {
  return DN(e) && ON(e);
}
var $N = kN, TN = fn, AN = Jf, xN = qt, CN = "[object Object]", NN = Function.prototype, PN = Object.prototype, Qf = NN.toString, SN = PN.hasOwnProperty, MN = Qf.call(Object);
function IN(e) {
  if (!xN(e) || TN(e) != CN)
    return !1;
  var t = AN(e);
  if (t === null)
    return !0;
  var n = SN.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && Qf.call(n) == MN;
}
var LN = IN;
function RN(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
var ep = RN, FN = ok, VN = Jo;
function BN(e, t, n, r) {
  var o = !n;
  n || (n = {});
  for (var a = -1, s = t.length; ++a < s; ) {
    var i = t[a], l = r ? r(n[i], e[i], i, n, e) : void 0;
    l === void 0 && (l = e[i]), o ? VN(n, i, l) : FN(n, i, l);
  }
  return n;
}
var YN = BN, HN = YN, UN = el;
function jN(e) {
  return HN(e, UN(e));
}
var WN = jN, rc = Xf, GN = _o, zN = cN, KN = fN, qN = EN, ac = Wi, oc = Kt, ZN = $N, XN = Yr, JN = vr, QN = Cn, eP = LN, tP = zi, sc = ep, nP = WN;
function rP(e, t, n, r, o, a, s) {
  var i = sc(e, n), l = sc(t, n), c = s.get(l);
  if (c) {
    rc(e, n, c);
    return;
  }
  var u = a ? a(i, l, n + "", e, t, s) : void 0, d = u === void 0;
  if (d) {
    var f = oc(l), p = !f && XN(l), v = !f && !p && tP(l);
    u = l, f || p || v ? oc(i) ? u = i : ZN(i) ? u = KN(i) : p ? (d = !1, u = GN(l, !0)) : v ? (d = !1, u = zN(l, !0)) : u = [] : eP(l) || ac(l) ? (u = i, ac(i) ? u = nP(i) : (!QN(i) || JN(i)) && (u = qN(l))) : d = !1;
  }
  d && (s.set(l, u), o(u, l, r, a, s), s.delete(l)), rc(e, n, u);
}
var aP = rP, oP = Zi, sP = Xf, iP = Mf, lP = aP, uP = Cn, cP = el, dP = ep;
function tp(e, t, n, r, o) {
  e !== t && iP(t, function(a, s) {
    if (o || (o = new oP()), uP(a))
      lP(e, t, s, n, tp, r, o);
    else {
      var i = r ? r(dP(e, s), a, s + "", e, t, o) : void 0;
      i === void 0 && (i = a), sP(e, s, i);
    }
  }, cP);
}
var np = tp, fP = np, ic = Cn;
function rp(e, t, n, r, o, a) {
  return ic(e) && ic(t) && (a.set(t, e), fP(e, t, void 0, rp, a), a.delete(t)), e;
}
var pP = rp, mP = Ji, vP = Qi;
function hP(e) {
  return mP(function(t, n) {
    var r = -1, o = n.length, a = o > 1 ? n[o - 1] : void 0, s = o > 2 ? n[2] : void 0;
    for (a = e.length > 3 && typeof a == "function" ? (o--, a) : void 0, s && vP(n[0], n[1], s) && (a = o < 3 ? void 0 : a, o = 1), t = Object(t); ++r < o; ) {
      var i = n[r];
      i && e(t, i, r, a);
    }
    return t;
  });
}
var gP = hP, yP = np, bP = gP, _P = bP(function(e, t, n, r) {
  yP(e, t, n, r);
}), wP = _P, EP = qf, OP = Ji, DP = pP, kP = wP, $P = OP(function(e) {
  return e.push(void 0, DP), EP(kP, void 0, e);
}), Sa = $P, TP = Object.prototype, AP = TP.hasOwnProperty;
function xP(e, t) {
  return e != null && AP.call(e, t);
}
var CP = xP, NP = CP, PP = zf;
function SP(e, t) {
  return e != null && PP(e, t, NP);
}
var ap = SP, MP = Ya;
function IP(e, t) {
  return function(n, r) {
    if (n == null)
      return n;
    if (!MP(n))
      return e(n, r);
    for (var o = n.length, a = t ? o : -1, s = Object(n); (t ? a-- : ++a < o) && r(s[a], a, s) !== !1; )
      ;
    return n;
  };
}
var LP = IP, RP = Ff, FP = LP, VP = FP(RP), BP = VP;
function YP(e) {
  return e && e.length ? e[0] : void 0;
}
var op = YP;
function HP(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
var $r = HP, UP = BP;
function jP(e, t) {
  var n;
  return UP(e, function(r, o, a) {
    return n = t(r, o, a), !n;
  }), !!n;
}
var WP = jP, GP = Vf, zP = Kf, KP = WP, qP = Kt, ZP = Qi;
function XP(e, t, n) {
  var r = qP(e) ? GP : KP;
  return n && ZP(e, t, n) && (t = void 0), r(e, zP(t));
}
var JP = XP;
const QP = (e) => Object.prototype.toString.call(e).slice(8, -1), xr = (e) => cE(e) && !isNaN(e.getTime()), $n = (e) => QP(e) === "Object", tl = ap, lc = (e, t) => JP(t, (n) => ap(e, n)), Ve = (e, t, n = "0") => {
  for (e = e != null ? String(e) : "", t = t || 2; e.length < t; )
    e = `${n}${e}`;
  return e;
}, Pt = (e) => Array.isArray(e), bn = (e) => Pt(e) && e.length > 0, wo = (e) => e == null ? e ?? null : document && Qt(e) ? document.querySelector(e) : e.$el ?? e, Bn = (e, t, n, r = void 0) => {
  e.removeEventListener(t, n, r);
}, Yn = (e, t, n, r = void 0) => (e.addEventListener(t, n, r), () => Bn(e, t, n, r)), oo = (e, t) => !!e && !!t && (e === t || e.contains(t)), ro = (e, t) => {
  (e.key === " " || e.key === "Enter") && (t(e), e.preventDefault());
}, sp = (e, ...t) => {
  const n = {};
  let r;
  for (r in e)
    t.includes(r) || (n[r] = e[r]);
  return n;
}, ip = (e, t) => {
  const n = {};
  return t.forEach((r) => {
    r in e && (n[r] = e[r]);
  }), n;
};
function e2(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
const Eo = () => {
  function e() {
    return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
  }
  return `${e() + e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`;
}, t2 = ["base", "start", "end", "startEnd"], n2 = [
  "class",
  "wrapperClass",
  "contentClass",
  "style",
  "contentStyle",
  "color",
  "fillMode"
], r2 = { base: {}, start: {}, end: {} };
function nl(e, t, n = r2) {
  let r = e, o = {};
  t === !0 || Qt(t) ? (r = Qt(t) ? t : r, o = { ...n }) : $n(t) && (lc(t, t2) ? o = { ...t } : o = {
    base: { ...t },
    start: { ...t },
    end: { ...t }
  });
  const a = Sa(
    o,
    { start: o.startEnd, end: o.startEnd },
    n
  );
  return Object.entries(a).forEach(([s, i]) => {
    let l = r;
    i === !0 || Qt(i) ? (l = Qt(i) ? i : l, a[s] = { color: l }) : $n(i) && (lc(i, n2) ? a[s] = { ...i } : a[s] = {}), Sa(a[s], { color: l });
  }), a;
}
class a2 {
  constructor() {
    ue(this, "type", "highlight");
  }
  normalizeConfig(t, n) {
    return nl(t, n, {
      base: { fillMode: "light" },
      start: { fillMode: "solid" },
      end: { fillMode: "solid" }
    });
  }
  prepareRender(t) {
    t.highlights = [], t.content || (t.content = []);
  }
  render({ data: t, onStart: n, onEnd: r }, o) {
    const { key: a, highlight: s } = t;
    if (!s)
      return;
    const { highlights: i } = o, { base: l, start: c, end: u } = s;
    n && r ? i.push({
      ...c,
      key: a,
      wrapperClass: `vc-day-layer vc-day-box-center-center vc-attr vc-${c.color}`,
      class: [`vc-highlight vc-highlight-bg-${c.fillMode}`, c.class],
      contentClass: [
        `vc-attr vc-highlight-content-${c.fillMode} vc-${c.color}`,
        c.contentClass
      ]
    }) : n ? (i.push({
      ...l,
      key: `${a}-base`,
      wrapperClass: `vc-day-layer vc-day-box-right-center vc-attr vc-${l.color}`,
      class: [
        `vc-highlight vc-highlight-base-start vc-highlight-bg-${l.fillMode}`,
        l.class
      ]
    }), i.push({
      ...c,
      key: a,
      wrapperClass: `vc-day-layer vc-day-box-center-center vc-attr vc-${c.color}`,
      class: [`vc-highlight vc-highlight-bg-${c.fillMode}`, c.class],
      contentClass: [
        `vc-attr vc-highlight-content-${c.fillMode} vc-${c.color}`,
        c.contentClass
      ]
    })) : r ? (i.push({
      ...l,
      key: `${a}-base`,
      wrapperClass: `vc-day-layer vc-day-box-left-center vc-attr vc-${l.color}`,
      class: [
        `vc-highlight vc-highlight-base-end vc-highlight-bg-${l.fillMode}`,
        l.class
      ]
    }), i.push({
      ...u,
      key: a,
      wrapperClass: `vc-day-layer vc-day-box-center-center vc-attr vc-${u.color}`,
      class: [`vc-highlight vc-highlight-bg-${u.fillMode}`, u.class],
      contentClass: [
        `vc-attr vc-highlight-content-${u.fillMode} vc-${u.color}`,
        u.contentClass
      ]
    })) : i.push({
      ...l,
      key: `${a}-middle`,
      wrapperClass: `vc-day-layer vc-day-box-center-center vc-attr vc-${l.color}`,
      class: [
        `vc-highlight vc-highlight-base-middle vc-highlight-bg-${l.fillMode}`,
        l.class
      ],
      contentClass: [
        `vc-attr vc-highlight-content-${l.fillMode} vc-${l.color}`,
        l.contentClass
      ]
    });
  }
}
class rl {
  constructor(t, n) {
    ue(this, "type", ""), ue(this, "collectionType", ""), this.type = t, this.collectionType = n;
  }
  normalizeConfig(t, n) {
    return nl(t, n);
  }
  prepareRender(t) {
    t[this.collectionType] = [];
  }
  render({ data: t, onStart: n, onEnd: r }, o) {
    const { key: a } = t, s = t[this.type];
    if (!a || !s)
      return;
    const i = o[this.collectionType], { base: l, start: c, end: u } = s;
    n ? i.push({
      ...c,
      key: a,
      class: [
        `vc-${this.type} vc-${this.type}-start vc-${c.color} vc-attr`,
        c.class
      ]
    }) : r ? i.push({
      ...u,
      key: a,
      class: [
        `vc-${this.type} vc-${this.type}-end vc-${u.color} vc-attr`,
        u.class
      ]
    }) : i.push({
      ...l,
      key: a,
      class: [
        `vc-${this.type} vc-${this.type}-base vc-${l.color} vc-attr`,
        l.class
      ]
    });
  }
}
class o2 extends rl {
  constructor() {
    super("content", "content");
  }
  normalizeConfig(t, n) {
    return nl("base", n);
  }
}
class s2 extends rl {
  constructor() {
    super("dot", "dots");
  }
}
class i2 extends rl {
  constructor() {
    super("bar", "bars");
  }
}
class l2 {
  constructor(t) {
    ue(this, "color"), ue(this, "renderers", [
      new o2(),
      new a2(),
      new s2(),
      new i2()
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
const u2 = 300, c2 = 60, d2 = 80, f2 = {
  maxSwipeTime: u2,
  minHorizontalSwipeDistance: c2,
  maxVerticalSwipeDistance: d2
}, p2 = "MMMM YYYY", m2 = "W", v2 = "MMM", h2 = "h A", g2 = [
  "L",
  "YYYY-MM-DD",
  "YYYY/MM/DD"
], y2 = [
  "L h:mm A",
  "YYYY-MM-DD h:mm A",
  "YYYY/MM/DD h:mm A"
], b2 = [
  "L HH:mm",
  "YYYY-MM-DD HH:mm",
  "YYYY/MM/DD HH:mm"
], _2 = [
  "h:mm A"
], w2 = [
  "HH:mm"
], E2 = "WWW, MMM D, YYYY", O2 = [
  "L",
  "YYYY-MM-DD",
  "YYYY/MM/DD"
], D2 = "iso", k2 = "YYYY-MM-DDTHH:mm:ss.SSSZ", $2 = {
  title: p2,
  weekdays: m2,
  navMonths: v2,
  hours: h2,
  input: g2,
  inputDateTime: y2,
  inputDateTime24hr: b2,
  inputTime: _2,
  inputTime24hr: w2,
  dayPopover: E2,
  data: O2,
  model: D2,
  iso: k2
}, Tn = {
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
Tn.en = Tn["en-US"];
Tn.es = Tn["es-ES"];
Tn.no = Tn.nb;
Tn.zh = Tn["zh-CN"];
const T2 = Object.entries(Tn).reduce(
  (e, [t, { dow: n, L: r }]) => (e[t] = {
    id: t,
    firstDayOfWeek: n,
    masks: { L: r }
  }, e),
  {}
), A2 = {
  componentPrefix: "V",
  color: "blue",
  isDark: !1,
  navVisibility: "click",
  titlePosition: "center",
  transition: "slide-h",
  touch: f2,
  masks: $2,
  locales: T2,
  datePicker: {
    updateOnInput: !0,
    inputDebounce: 1e3,
    popover: {
      visibility: "hover-focus",
      placement: "bottom-start",
      isInteractive: !0
    }
  }
}, Js = Ia(A2), x2 = C(() => lC(Js.locales, (e) => (e.masks = Sa(e.masks, Js.masks), e))), Kn = (e) => typeof window < "u" && tl(window.__vcalendar__, e) ? ar(window.__vcalendar__, e) : ar(Js, e);
var Oo = {}, C2 = {
  get exports() {
    return Oo;
  },
  set exports(e) {
    Oo = e;
  }
}, Do = {}, N2 = {
  get exports() {
    return Do;
  },
  set exports(e) {
    Do = e;
  }
};
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  function n(r) {
    if (r === null || r === !0 || r === !1)
      return NaN;
    var o = Number(r);
    return isNaN(o) ? o : o < 0 ? Math.ceil(o) : Math.floor(o);
  }
  e.exports = t.default;
})(N2, Do);
var ko = {}, P2 = {
  get exports() {
    return ko;
  },
  set exports(e) {
    ko = e;
  }
};
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  function n(r) {
    var o = new Date(Date.UTC(r.getFullYear(), r.getMonth(), r.getDate(), r.getHours(), r.getMinutes(), r.getSeconds(), r.getMilliseconds()));
    return o.setUTCFullYear(r.getFullYear()), r.getTime() - o.getTime();
  }
  e.exports = t.default;
})(P2, ko);
var $o = {}, S2 = {
  get exports() {
    return $o;
  },
  set exports(e) {
    $o = e;
  }
}, To = {}, M2 = {
  get exports() {
    return To;
  },
  set exports(e) {
    To = e;
  }
};
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  function n(l, c) {
    var u = i(c);
    return u.formatToParts ? o(u, l) : a(u, l);
  }
  var r = {
    year: 0,
    month: 1,
    day: 2,
    hour: 3,
    minute: 4,
    second: 5
  };
  function o(l, c) {
    try {
      for (var u = l.formatToParts(c), d = [], f = 0; f < u.length; f++) {
        var p = r[u[f].type];
        p >= 0 && (d[p] = parseInt(u[f].value, 10));
      }
      return d;
    } catch (v) {
      if (v instanceof RangeError)
        return [NaN];
      throw v;
    }
  }
  function a(l, c) {
    var u = l.format(c).replace(/\u200E/g, ""), d = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(u);
    return [d[3], d[1], d[2], d[4], d[5], d[6]];
  }
  var s = {};
  function i(l) {
    if (!s[l]) {
      var c = new Intl.DateTimeFormat("en-US", {
        hour12: !1,
        timeZone: "America/New_York",
        year: "numeric",
        month: "numeric",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      }).format(/* @__PURE__ */ new Date("2014-06-25T04:00:00.123Z")), u = c === "06/25/2014, 00:00:00" || c === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
      s[l] = u ? new Intl.DateTimeFormat("en-US", {
        hour12: !1,
        timeZone: l,
        year: "numeric",
        month: "numeric",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      }) : new Intl.DateTimeFormat("en-US", {
        hourCycle: "h23",
        timeZone: l,
        year: "numeric",
        month: "numeric",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      });
    }
    return s[l];
  }
  e.exports = t.default;
})(M2, To);
var Ao = {}, I2 = {
  get exports() {
    return Ao;
  },
  set exports(e) {
    Ao = e;
  }
};
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  function n(r, o, a, s, i, l, c) {
    var u = /* @__PURE__ */ new Date(0);
    return u.setUTCFullYear(r, o, a), u.setUTCHours(s, i, l, c), u;
  }
  e.exports = t.default;
})(I2, Ao);
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = l;
  var n = o(To), r = o(Ao);
  function o(g) {
    return g && g.__esModule ? g : { default: g };
  }
  var a = 36e5, s = 6e4, i = {
    timezone: /([Z+-].*)$/,
    timezoneZ: /^(Z)$/,
    timezoneHH: /^([+-]\d{2})$/,
    timezoneHHMM: /^([+-]\d{2}):?(\d{2})$/
  };
  function l(g, b, m) {
    var y, E;
    if (!g || (y = i.timezoneZ.exec(g), y))
      return 0;
    var _;
    if (y = i.timezoneHH.exec(g), y)
      return _ = parseInt(y[1], 10), f(_) ? -(_ * a) : NaN;
    if (y = i.timezoneHHMM.exec(g), y) {
      _ = parseInt(y[1], 10);
      var $ = parseInt(y[2], 10);
      return f(_, $) ? (E = Math.abs(_) * a + $ * s, _ > 0 ? -E : E) : NaN;
    }
    if (v(g)) {
      b = new Date(b || Date.now());
      var O = m ? b : c(b), A = u(O, g), x = m ? A : d(b, A, g);
      return -x;
    }
    return NaN;
  }
  function c(g) {
    return (0, r.default)(g.getFullYear(), g.getMonth(), g.getDate(), g.getHours(), g.getMinutes(), g.getSeconds(), g.getMilliseconds());
  }
  function u(g, b) {
    var m = (0, n.default)(g, b), y = (0, r.default)(m[0], m[1] - 1, m[2], m[3] % 24, m[4], m[5], 0).getTime(), E = g.getTime(), _ = E % 1e3;
    return E -= _ >= 0 ? _ : 1e3 + _, y - E;
  }
  function d(g, b, m) {
    var y = g.getTime(), E = y - b, _ = u(new Date(E), m);
    if (b === _)
      return b;
    E -= _ - b;
    var $ = u(new Date(E), m);
    return _ === $ ? _ : Math.max(_, $);
  }
  function f(g, b) {
    return -23 <= g && g <= 23 && (b == null || 0 <= b && b <= 59);
  }
  var p = {};
  function v(g) {
    if (p[g])
      return !0;
    try {
      return new Intl.DateTimeFormat(void 0, {
        timeZone: g
      }), p[g] = !0, !0;
    } catch {
      return !1;
    }
  }
  e.exports = t.default;
})(S2, $o);
var xo = {}, L2 = {
  get exports() {
    return xo;
  },
  set exports(e) {
    xo = e;
  }
};
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = void 0;
  var n = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/, r = n;
  t.default = r, e.exports = t.default;
})(L2, xo);
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = d;
  var n = s(Do), r = s(ko), o = s($o), a = s(xo);
  function s(x) {
    return x && x.__esModule ? x : { default: x };
  }
  var i = 36e5, l = 6e4, c = 2, u = {
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
    timeZone: a.default
  };
  function d(x, S) {
    if (arguments.length < 1)
      throw new TypeError("1 argument required, but only " + arguments.length + " present");
    if (x === null)
      return /* @__PURE__ */ new Date(NaN);
    var k = S || {}, R = k.additionalDigits == null ? c : (0, n.default)(k.additionalDigits);
    if (R !== 2 && R !== 1 && R !== 0)
      throw new RangeError("additionalDigits must be 0, 1 or 2");
    if (x instanceof Date || typeof x == "object" && Object.prototype.toString.call(x) === "[object Date]")
      return new Date(x.getTime());
    if (typeof x == "number" || Object.prototype.toString.call(x) === "[object Number]")
      return new Date(x);
    if (!(typeof x == "string" || Object.prototype.toString.call(x) === "[object String]"))
      return /* @__PURE__ */ new Date(NaN);
    var N = f(x), U = p(N.date, R), J = U.year, z = U.restDateString, ee = v(z, J);
    if (isNaN(ee))
      return /* @__PURE__ */ new Date(NaN);
    if (ee) {
      var le = ee.getTime(), ke = 0, ve;
      if (N.time && (ke = g(N.time), isNaN(ke)))
        return /* @__PURE__ */ new Date(NaN);
      if (N.timeZone || k.timeZone) {
        if (ve = (0, o.default)(N.timeZone || k.timeZone, new Date(le + ke)), isNaN(ve))
          return /* @__PURE__ */ new Date(NaN);
      } else
        ve = (0, r.default)(new Date(le + ke)), ve = (0, r.default)(new Date(le + ke + ve));
      return new Date(le + ke + ve);
    } else
      return /* @__PURE__ */ new Date(NaN);
  }
  function f(x) {
    var S = {}, k = u.dateTimePattern.exec(x), R;
    if (k ? (S.date = k[1], R = k[3]) : (k = u.datePattern.exec(x), k ? (S.date = k[1], R = k[2]) : (S.date = null, R = x)), R) {
      var N = u.timeZone.exec(R);
      N ? (S.time = R.replace(N[1], ""), S.timeZone = N[1].trim()) : S.time = R;
    }
    return S;
  }
  function p(x, S) {
    var k = u.YYY[S], R = u.YYYYY[S], N;
    if (N = u.YYYY.exec(x) || R.exec(x), N) {
      var U = N[1];
      return {
        year: parseInt(U, 10),
        restDateString: x.slice(U.length)
      };
    }
    if (N = u.YY.exec(x) || k.exec(x), N) {
      var J = N[1];
      return {
        year: parseInt(J, 10) * 100,
        restDateString: x.slice(J.length)
      };
    }
    return {
      year: null
    };
  }
  function v(x, S) {
    if (S === null)
      return null;
    var k, R, N, U;
    if (x.length === 0)
      return R = /* @__PURE__ */ new Date(0), R.setUTCFullYear(S), R;
    if (k = u.MM.exec(x), k)
      return R = /* @__PURE__ */ new Date(0), N = parseInt(k[1], 10) - 1, _(S, N) ? (R.setUTCFullYear(S, N), R) : /* @__PURE__ */ new Date(NaN);
    if (k = u.DDD.exec(x), k) {
      R = /* @__PURE__ */ new Date(0);
      var J = parseInt(k[1], 10);
      return $(S, J) ? (R.setUTCFullYear(S, 0, J), R) : /* @__PURE__ */ new Date(NaN);
    }
    if (k = u.MMDD.exec(x), k) {
      R = /* @__PURE__ */ new Date(0), N = parseInt(k[1], 10) - 1;
      var z = parseInt(k[2], 10);
      return _(S, N, z) ? (R.setUTCFullYear(S, N, z), R) : /* @__PURE__ */ new Date(NaN);
    }
    if (k = u.Www.exec(x), k)
      return U = parseInt(k[1], 10) - 1, O(S, U) ? b(S, U) : /* @__PURE__ */ new Date(NaN);
    if (k = u.WwwD.exec(x), k) {
      U = parseInt(k[1], 10) - 1;
      var ee = parseInt(k[2], 10) - 1;
      return O(S, U, ee) ? b(S, U, ee) : /* @__PURE__ */ new Date(NaN);
    }
    return null;
  }
  function g(x) {
    var S, k, R;
    if (S = u.HH.exec(x), S)
      return k = parseFloat(S[1].replace(",", ".")), A(k) ? k % 24 * i : NaN;
    if (S = u.HHMM.exec(x), S)
      return k = parseInt(S[1], 10), R = parseFloat(S[2].replace(",", ".")), A(k, R) ? k % 24 * i + R * l : NaN;
    if (S = u.HHMMSS.exec(x), S) {
      k = parseInt(S[1], 10), R = parseInt(S[2], 10);
      var N = parseFloat(S[3].replace(",", "."));
      return A(k, R, N) ? k % 24 * i + R * l + N * 1e3 : NaN;
    }
    return null;
  }
  function b(x, S, k) {
    S = S || 0, k = k || 0;
    var R = /* @__PURE__ */ new Date(0);
    R.setUTCFullYear(x, 0, 4);
    var N = R.getUTCDay() || 7, U = S * 7 + k + 1 - N;
    return R.setUTCDate(R.getUTCDate() + U), R;
  }
  var m = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], y = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function E(x) {
    return x % 400 === 0 || x % 4 === 0 && x % 100 !== 0;
  }
  function _(x, S, k) {
    if (S < 0 || S > 11)
      return !1;
    if (k != null) {
      if (k < 1)
        return !1;
      var R = E(x);
      if (R && k > y[S] || !R && k > m[S])
        return !1;
    }
    return !0;
  }
  function $(x, S) {
    if (S < 1)
      return !1;
    var k = E(x);
    return !(k && S > 366 || !k && S > 365);
  }
  function O(x, S, k) {
    return !(S < 0 || S > 52 || k != null && (k < 0 || k > 6));
  }
  function A(x, S, k) {
    return !(x != null && (x < 0 || x >= 25) || S != null && (S < 0 || S >= 60) || k != null && (k < 0 || k >= 60));
  }
  e.exports = t.default;
})(C2, Oo);
const R2 = /* @__PURE__ */ cw(Oo);
function ut(e, t) {
  if (t.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present");
}
function so(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? so = function(n) {
    return typeof n;
  } : so = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, so(e);
}
function Nn(e) {
  ut(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || so(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), /* @__PURE__ */ new Date(NaN));
}
function ra(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
var F2 = {};
function al() {
  return F2;
}
function pr(e, t) {
  var n, r, o, a, s, i, l, c;
  ut(1, arguments);
  var u = al(), d = ra((n = (r = (o = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.weekStartsOn) !== null && o !== void 0 ? o : u.weekStartsOn) !== null && r !== void 0 ? r : (l = u.locale) === null || l === void 0 || (c = l.options) === null || c === void 0 ? void 0 : c.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var f = Nn(e), p = f.getDay(), v = (p < d ? 7 : 0) + p - d;
  return f.setDate(f.getDate() - v), f.setHours(0, 0, 0, 0), f;
}
function uc(e) {
  var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
var V2 = 6048e5;
function B2(e, t, n) {
  ut(2, arguments);
  var r = pr(e, n), o = pr(t, n), a = r.getTime() - uc(r), s = o.getTime() - uc(o);
  return Math.round((a - s) / V2);
}
function Y2(e) {
  ut(1, arguments);
  var t = Nn(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function H2(e) {
  ut(1, arguments);
  var t = Nn(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function U2(e, t) {
  return ut(1, arguments), B2(Y2(e), H2(e), t) + 1;
}
function j2(e, t) {
  var n, r, o, a, s, i, l, c;
  ut(1, arguments);
  var u = Nn(e), d = u.getFullYear(), f = al(), p = ra((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && o !== void 0 ? o : f.firstWeekContainsDate) !== null && r !== void 0 ? r : (l = f.locale) === null || l === void 0 || (c = l.options) === null || c === void 0 ? void 0 : c.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(p >= 1 && p <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var v = /* @__PURE__ */ new Date(0);
  v.setFullYear(d + 1, 0, p), v.setHours(0, 0, 0, 0);
  var g = pr(v, t), b = /* @__PURE__ */ new Date(0);
  b.setFullYear(d, 0, p), b.setHours(0, 0, 0, 0);
  var m = pr(b, t);
  return u.getTime() >= g.getTime() ? d + 1 : u.getTime() >= m.getTime() ? d : d - 1;
}
function W2(e, t) {
  var n, r, o, a, s, i, l, c;
  ut(1, arguments);
  var u = al(), d = ra((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && o !== void 0 ? o : u.firstWeekContainsDate) !== null && r !== void 0 ? r : (l = u.locale) === null || l === void 0 || (c = l.options) === null || c === void 0 ? void 0 : c.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), f = j2(e, t), p = /* @__PURE__ */ new Date(0);
  p.setFullYear(f, 0, d), p.setHours(0, 0, 0, 0);
  var v = pr(p, t);
  return v;
}
var G2 = 6048e5;
function z2(e, t) {
  ut(1, arguments);
  var n = Nn(e), r = pr(n, t).getTime() - W2(n, t).getTime();
  return Math.round(r / G2) + 1;
}
function Co(e) {
  return ut(1, arguments), pr(e, {
    weekStartsOn: 1
  });
}
function K2(e) {
  ut(1, arguments);
  var t = Nn(e), n = t.getFullYear(), r = /* @__PURE__ */ new Date(0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  var o = Co(r), a = /* @__PURE__ */ new Date(0);
  a.setFullYear(n, 0, 4), a.setHours(0, 0, 0, 0);
  var s = Co(a);
  return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1;
}
function q2(e) {
  ut(1, arguments);
  var t = K2(e), n = /* @__PURE__ */ new Date(0);
  n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0);
  var r = Co(n);
  return r;
}
var Z2 = 6048e5;
function X2(e) {
  ut(1, arguments);
  var t = Nn(e), n = Co(t).getTime() - q2(t).getTime();
  return Math.round(n / Z2) + 1;
}
function ft(e, t) {
  ut(2, arguments);
  var n = Nn(e), r = ra(t);
  return isNaN(r) ? /* @__PURE__ */ new Date(NaN) : (r && n.setDate(n.getDate() + r), n);
}
function No(e, t) {
  ut(2, arguments);
  var n = Nn(e), r = ra(t);
  if (isNaN(r))
    return /* @__PURE__ */ new Date(NaN);
  if (!r)
    return n;
  var o = n.getDate(), a = new Date(n.getTime());
  a.setMonth(n.getMonth() + r + 1, 0);
  var s = a.getDate();
  return o >= s ? a : (n.setFullYear(a.getFullYear(), a.getMonth(), o), n);
}
function cc(e, t) {
  ut(2, arguments);
  var n = ra(t);
  return No(e, n * 12);
}
var Dr = /* @__PURE__ */ ((e) => (e.Any = "any", e.All = "all", e))(Dr || {}), lp = /* @__PURE__ */ ((e) => (e.Days = "days", e.Weeks = "weeks", e.Months = "months", e.Years = "years", e))(lp || {}), up = /* @__PURE__ */ ((e) => (e.Days = "days", e.Weekdays = "weekdays", e.Weeks = "weeks", e.Months = "months", e.Years = "years", e))(up || {}), cp = /* @__PURE__ */ ((e) => (e.OrdinalWeekdays = "ordinalWeekdays", e))(cp || {});
class J2 {
  constructor(t, n, r) {
    ue(this, "validated", !0), this.type = t, this.interval = n, this.from = r, this.from || (console.error(
      'A valid "from" date is required for date interval rule. This rule will be skipped.'
    ), this.validated = !1);
  }
  passes(t) {
    if (!this.validated)
      return !0;
    const { date: n } = t;
    switch (this.type) {
      case "days":
        return ol(this.from.date, n) % this.interval === 0;
      case "weeks":
        return hS(this.from.date, n) % this.interval === 0;
      case "months":
        return gS(this.from.date, n) % this.interval === 0;
      case "years":
        return yp(this.from.date, n) % this.interval === 0;
      default:
        return !1;
    }
  }
}
class aa {
  constructor(t, n, r, o) {
    ue(this, "components", []), this.type = t, this.validator = r, this.getter = o, this.components = this.normalizeComponents(n);
  }
  static create(t, n) {
    switch (t) {
      case "days":
        return new Q2(n);
      case "weekdays":
        return new eS(n);
      case "weeks":
        return new tS(n);
      case "months":
        return new nS(n);
      case "years":
        return new rS(n);
    }
  }
  normalizeComponents(t) {
    if (this.validator(t))
      return [t];
    if (!Pt(t))
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
    return this.getter(t).some((o) => this.components.includes(o));
  }
}
class Q2 extends aa {
  constructor(t) {
    super(
      "days",
      t,
      sS,
      ({ day: n, dayFromEnd: r }) => [n, -r]
    );
  }
}
class eS extends aa {
  constructor(t) {
    super(
      "weekdays",
      t,
      Qs,
      ({ weekday: n }) => [n]
    );
  }
}
class tS extends aa {
  constructor(t) {
    super(
      "weeks",
      t,
      iS,
      ({ week: n, weekFromEnd: r }) => [n, -r]
    );
  }
}
class nS extends aa {
  constructor(t) {
    super("months", t, lS, ({ month: n }) => [
      n
    ]);
  }
}
class rS extends aa {
  constructor(t) {
    super("years", t, Wt, ({ year: n }) => [n]);
  }
}
class aS {
  constructor(t, n) {
    ue(this, "components"), this.type = t, this.components = this.normalizeComponents(n);
  }
  normalizeArrayConfig(t) {
    const n = [];
    return t.forEach((r, o) => {
      if (Wt(r)) {
        if (o === 0)
          return;
        if (!dc(t[0])) {
          console.error(
            `Ordinal range for "${this.type}" rule is from -5 to -1 or 1 to 5. This rule will be skipped.`
          );
          return;
        }
        if (!Qs(r)) {
          console.error(
            `Acceptable range for "${this.type}" rule is from 1 to 5. This rule will be skipped`
          );
          return;
        }
        n.push([t[0], r]);
      } else
        Pt(r) && n.push(...this.normalizeArrayConfig(r));
    }), n;
  }
  normalizeComponents(t) {
    const n = [];
    return t.forEach((r, o) => {
      if (Wt(r)) {
        if (o === 0)
          return;
        if (!dc(t[0])) {
          console.error(
            `Ordinal range for "${this.type}" rule is from -5 to -1 or 1 to 5. This rule will be skipped.`
          );
          return;
        }
        if (!Qs(r)) {
          console.error(
            `Acceptable range for "${this.type}" rule is from 1 to 5. This rule will be skipped`
          );
          return;
        }
        n.push([t[0], r]);
      } else
        Pt(r) && n.push(...this.normalizeArrayConfig(r));
    }), n;
  }
  passes(t) {
    const { weekday: n, weekdayOrdinal: r, weekdayOrdinalFromEnd: o } = t;
    return this.components.some(
      ([a, s]) => (a === r || a === -o) && n === s
    );
  }
}
class oS {
  constructor(t) {
    ue(this, "type", "function"), ue(this, "validated", !0), this.fn = t, vr(t) || (console.error(
      "The function rule requires a valid function. This rule will be skipped."
    ), this.validated = !1);
  }
  passes(t) {
    return this.validated ? this.fn(t) : !0;
  }
}
class Po {
  constructor(t, n = {}, r) {
    ue(this, "validated", !0), ue(this, "config"), ue(this, "type", Dr.Any), ue(this, "from"), ue(this, "until"), ue(this, "rules", []), ue(this, "locale", new Mo()), this.parent = r, n.locale && (this.locale = n.locale), this.config = t, vr(t) ? (this.type = Dr.All, this.rules = [new oS(t)]) : Pt(t) ? (this.type = Dr.Any, this.rules = t.map((o) => new Po(o, n, this))) : $n(t) ? (this.type = Dr.All, this.from = t.from ? this.locale.getDateParts(t.from) : r == null ? void 0 : r.from, this.until = t.until ? this.locale.getDateParts(t.until) : r == null ? void 0 : r.until, this.rules = this.getObjectRules(t)) : (console.error("Rule group configuration must be an object or an array."), this.validated = !1);
  }
  getObjectRules(t) {
    const n = [];
    if (t.every && (Qt(t.every) && (t.every = [1, `${t.every}s`]), Pt(t.every))) {
      const [r = 1, o = lp.Days] = t.every;
      n.push(new J2(o, r, this.from));
    }
    return Object.values(up).forEach((r) => {
      r in t && n.push(aa.create(r, t[r]));
    }), Object.values(cp).forEach((r) => {
      r in t && n.push(new aS(r, t[r]));
    }), t.on != null && (Pt(t.on) || (t.on = [t.on]), n.push(
      new Po(t.on, { locale: this.locale }, this.parent)
    )), n;
  }
  passes(t) {
    return this.validated ? this.from && t.dayIndex <= this.from.dayIndex || this.until && t.dayIndex >= this.until.dayIndex ? !1 : this.type === Dr.Any ? this.rules.some((n) => n.passes(t)) : this.rules.every((n) => n.passes(t)) : !0;
  }
}
function sS(e) {
  return Wt(e) ? e >= 1 && e <= 31 : !1;
}
function Qs(e) {
  return Wt(e) ? e >= 1 && e <= 7 : !1;
}
function iS(e) {
  return Wt(e) ? e >= -6 && e <= -1 || e >= 1 && e <= 6 : !1;
}
function lS(e) {
  return Wt(e) ? e >= 1 && e <= 12 : !1;
}
function dc(e) {
  return !(!Wt(e) || e < -5 || e > 5 || e === 0);
}
const uS = {
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
}, lt = 7, cS = 6, dp = 1e3, fp = dp * 60, pp = fp * 60, io = pp * 24, dS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], fS = ["L", "iso"], ga = {
  milliseconds: [0, 999, 3],
  seconds: [0, 59, 2],
  minutes: [0, 59, 2],
  hours: [0, 23, 2]
}, mp = /d{1,2}|W{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|Z{1,4}|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g, pS = /\[([^]*?)\]/gm, fc = {
  D(e) {
    return e.day;
  },
  DD(e) {
    return Ve(e.day, 2);
  },
  // Do(d: DateParts, l: Locale) {
  //   return l.DoFn(d.day);
  // },
  d(e) {
    return e.weekday - 1;
  },
  dd(e) {
    return Ve(e.weekday - 1, 2);
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
    return Ve(e.month, 2);
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
    return Ve(e.year, 4);
  },
  h(e) {
    return e.hours % 12 || 12;
  },
  hh(e) {
    return Ve(e.hours % 12 || 12, 2);
  },
  H(e) {
    return e.hours;
  },
  HH(e) {
    return Ve(e.hours, 2);
  },
  m(e) {
    return e.minutes;
  },
  mm(e) {
    return Ve(e.minutes, 2);
  },
  s(e) {
    return e.seconds;
  },
  ss(e) {
    return Ve(e.seconds, 2);
  },
  S(e) {
    return Math.round(e.milliseconds / 100);
  },
  SS(e) {
    return Ve(Math.round(e.milliseconds / 10), 2);
  },
  SSS(e) {
    return Ve(e.milliseconds, 3);
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
    return `${t > 0 ? "-" : "+"}${Ve(Math.floor(Math.abs(t) / 60), 2)}`;
  },
  ZZZ(e) {
    const t = e.timezoneOffset;
    return `${t > 0 ? "-" : "+"}${Ve(
      Math.floor(Math.abs(t) / 60) * 100 + Math.abs(t) % 60,
      4
    )}`;
  },
  ZZZZ(e) {
    const t = e.timezoneOffset;
    return `${t > 0 ? "-" : "+"}${Ve(Math.floor(Math.abs(t) / 60), 2)}:${Ve(
      Math.abs(t) % 60,
      2
    )}`;
  }
}, Rn = /\d\d?/, mS = /\d{3}/, vS = /\d{4}/, ma = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF/]+(\s*?[\u0600-\u06FF]+){1,2}/i, pc = () => {
}, mc = (e) => (t, n, r) => {
  const o = r[e].indexOf(
    n.charAt(0).toUpperCase() + n.substr(1).toLowerCase()
  );
  ~o && (t.month = o);
}, Ye = {
  D: [
    Rn,
    (e, t) => {
      e.day = t;
    }
  ],
  Do: [
    new RegExp(Rn.source + ma.source),
    (e, t) => {
      e.day = parseInt(t, 10);
    }
  ],
  d: [Rn, pc],
  W: [ma, pc],
  M: [
    Rn,
    (e, t) => {
      e.month = t - 1;
    }
  ],
  MMM: [ma, mc("monthNamesShort")],
  MMMM: [ma, mc("monthNames")],
  YY: [
    Rn,
    (e, t) => {
      const r = +(/* @__PURE__ */ new Date()).getFullYear().toString().substr(0, 2);
      e.year = +`${t > 68 ? r - 1 : r}${t}`;
    }
  ],
  YYYY: [
    vS,
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
    mS,
    (e, t) => {
      e.milliseconds = t;
    }
  ],
  h: [
    Rn,
    (e, t) => {
      e.hours = t;
    }
  ],
  m: [
    Rn,
    (e, t) => {
      e.minutes = t;
    }
  ],
  s: [
    Rn,
    (e, t) => {
      e.seconds = t;
    }
  ],
  a: [
    ma,
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
Ye.DD = Ye.D;
Ye.dd = Ye.d;
Ye.WWWW = Ye.WWW = Ye.WW = Ye.W;
Ye.MM = Ye.M;
Ye.mm = Ye.m;
Ye.hh = Ye.H = Ye.HH = Ye.h;
Ye.ss = Ye.s;
Ye.A = Ye.a;
Ye.ZZZZ = Ye.ZZZ = Ye.ZZ = Ye.Z;
function vp(e, t) {
  return (bn(e) && e || [
    Qt(e) && e || "YYYY-MM-DD"
  ]).map(
    (n) => fS.reduce(
      (r, o) => r.replace(o, t.masks[o] || ""),
      n
    )
  );
}
function hp(e) {
  return $n(e) && "year" in e && "month" in e && "day" in e;
}
function vc(e, t = 1) {
  const n = e.getDay() + 1, r = n >= t ? t - n : -(7 - (t - n));
  return ft(e, r);
}
function gp(e, t, n) {
  const r = Date.UTC(e, t - 1, n);
  return ol(/* @__PURE__ */ new Date(0), new Date(r));
}
function ol(e, t) {
  return Math.round((t.getTime() - e.getTime()) / io);
}
function hS(e, t) {
  return Math.ceil(ol(vc(e), vc(t)) / 7);
}
function yp(e, t) {
  return t.getUTCFullYear() - e.getUTCFullYear();
}
function gS(e, t) {
  return yp(e, t) * 12 + (t.getMonth() - e.getMonth());
}
function bp(e, t = "") {
  const n = /* @__PURE__ */ new Date(), {
    year: r = n.getFullYear(),
    month: o = n.getMonth() + 1,
    day: a = n.getDate(),
    hours: s = 0,
    minutes: i = 0,
    seconds: l = 0,
    milliseconds: c = 0
  } = e;
  if (t) {
    const u = `${Ve(r, 4)}-${Ve(o, 2)}-${Ve(a, 2)}T${Ve(
      s,
      2
    )}:${Ve(i, 2)}:${Ve(l, 2)}.${Ve(c, 3)}`;
    return R2(u, { timeZone: t });
  }
  return new Date(r, o - 1, a, s, i, l, c);
}
function yS(e, t) {
  let n = new Date(e.getTime());
  t.timezone && (n = new Date(
    e.toLocaleString("en-US", { timeZone: t.timezone })
  ), n.setMilliseconds(e.getMilliseconds()));
  const r = n.getMilliseconds(), o = n.getSeconds(), a = n.getMinutes(), s = n.getHours(), i = r + o * dp + a * fp + s * pp, l = n.getMonth() + 1, c = n.getFullYear(), u = t.getMonthParts(l, c), d = n.getDate(), f = u.numDays - d + 1, p = n.getDay() + 1, v = Math.floor((d - 1) / 7 + 1), g = Math.floor((u.numDays - d) / 7 + 1), b = Math.ceil(
    (d + Math.abs(u.firstWeekday - u.firstDayOfWeek)) / 7
  ), m = u.numWeeks - b + 1, y = u.weeknumbers[b], E = gp(c, l, d);
  return {
    milliseconds: r,
    seconds: o,
    minutes: a,
    hours: s,
    time: i,
    day: d,
    dayFromEnd: f,
    weekday: p,
    weekdayOrdinal: v,
    weekdayOrdinalFromEnd: g,
    week: b,
    weekFromEnd: m,
    weeknumber: y,
    month: l,
    year: c,
    date: n,
    dateTime: n.getTime(),
    dayIndex: E,
    timezoneOffset: 0,
    isValid: !0
  };
}
function bS(e, t, n) {
  return `${t}-${e}-${n}`;
}
function _S(e, t, n) {
  const r = t % 4 === 0 && t % 100 !== 0 || t % 400 === 0, o = new Date(t, e - 1, 1), a = o.getDay() + 1, s = e === 2 && r ? 29 : dS[e - 1], i = n - 1, l = U2(o, {
    weekStartsOn: i
  }), c = [], u = [];
  for (let d = 0; d < l; d++) {
    const f = ft(o, d * 7);
    c.push(z2(f, { weekStartsOn: i })), u.push(X2(f));
  }
  return {
    firstDayOfWeek: n,
    firstDayOfMonth: o,
    inLeapYear: r,
    firstWeekday: a,
    numDays: s,
    numWeeks: l,
    month: e,
    year: t,
    weeknumbers: c,
    isoWeeknumbers: u
  };
}
function wS() {
  const e = [];
  for (let o = 0; o < lt; o++)
    e.push(
      bp({
        year: 2020,
        month: 1,
        day: 5 + o,
        hours: 12
      })
    );
  return e;
}
function bs(e, t = void 0) {
  const n = new Intl.DateTimeFormat(t, {
    weekday: e
  });
  return wS().map((r) => n.format(r));
}
function ES() {
  const e = [];
  for (let t = 0; t <= 24; t++)
    e.push(new Date(2e3, 0, 1, t));
  return e;
}
function OS(e = void 0) {
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
  return t.reduce((r, o) => {
    const a = n.formatToParts(100, o);
    return r[o] = a[1].unit, r;
  }, {});
}
function _p() {
  const e = [];
  for (let t = 0; t < 12; t++)
    e.push(new Date(2e3, t, 15));
  return e;
}
function hc(e, t = void 0) {
  const n = new Intl.DateTimeFormat(t, {
    month: e,
    timeZone: "UTC"
  });
  return _p().map((r) => n.format(r));
}
function DS(e, t, n) {
  return Wt(t) ? t === e : Pt(t) ? t.includes(e) : vr(t) ? t(e, n) : !(t.min != null && t.min > e || t.max != null && t.max < e || t.interval != null && e % t.interval !== 0);
}
function ya(e, t, n) {
  const r = [], [o, a, s] = t;
  for (let i = o; i <= a; i++)
    (n == null || DS(i, n, e)) && r.push({
      value: i,
      label: Ve(i, s)
    });
  return r;
}
function kS(e, t) {
  return {
    milliseconds: ya(
      e,
      ga.milliseconds,
      t.milliseconds
    ),
    seconds: ya(e, ga.seconds, t.seconds),
    minutes: ya(e, ga.minutes, t.minutes),
    hours: ya(e, ga.hours, t.hours)
  };
}
function $S(e, t, n, r) {
  const a = ya(e, t, r).reduce((s, i) => {
    if (i.disabled)
      return s;
    if (isNaN(s))
      return i.value;
    const l = Math.abs(s - n);
    return Math.abs(i.value - n) < l ? i.value : s;
  }, NaN);
  return isNaN(a) ? n : a;
}
function TS(e, t) {
  const n = { ...e };
  return Object.entries(t).forEach(([r, o]) => {
    const a = ga[r], s = e[r];
    n[r] = $S(
      e,
      a,
      s,
      o
    );
  }), n;
}
function gc(e, t, n) {
  return vp(t, n).map((o) => {
    if (typeof o != "string")
      throw new Error("Invalid mask");
    let a = e;
    if (a.length > 1e3)
      return !1;
    let s = !0;
    const i = {};
    if (o.replace(mp, (u) => {
      if (Ye[u]) {
        const d = Ye[u], f = a.search(d[0]);
        ~f ? a.replace(d[0], (p) => (d[1](i, p, n), a = a.substr(f + p.length), p)) : s = !1;
      }
      return Ye[u] ? "" : u.slice(1, u.length - 1);
    }), !s)
      return !1;
    const l = /* @__PURE__ */ new Date();
    i.hours != null && (i.isPm === !0 && +i.hours != 12 ? i.hours = +i.hours + 12 : i.isPm === !1 && +i.hours == 12 && (i.hours = 0));
    let c;
    return i.timezoneOffset != null ? (i.minutes = +(i.minutes || 0) - +i.timezoneOffset, c = new Date(
      Date.UTC(
        i.year || l.getFullYear(),
        i.month || 0,
        i.day || 1,
        i.hours || 0,
        i.minutes || 0,
        i.seconds || 0,
        i.milliseconds || 0
      )
    )) : c = n.getDateFromParts({
      year: i.year || l.getFullYear(),
      month: (i.month || 0) + 1,
      day: i.day || 1,
      hours: i.hours || 0,
      minutes: i.minutes || 0,
      seconds: i.seconds || 0,
      milliseconds: i.milliseconds || 0
    }), c;
  }).find((o) => o) || new Date(e);
}
function AS(e, t, n) {
  if (e == null)
    return "";
  let r = vp(t, n)[0];
  /Z$/.test(r) && (n.timezone = "utc");
  const o = [];
  r = r.replace(pS, (s, i) => (o.push(i), "??"));
  const a = n.getDateParts(e);
  return r = r.replace(
    mp,
    (s) => s in fc ? fc[s](a, n) : s.slice(1, s.length - 1)
  ), r.replace(/\?\?/g, () => o.shift());
}
const xS = {
  daily: ["year", "month", "day"],
  weekly: ["year", "month", "week"],
  monthly: ["year", "month"]
};
function CS({
  monthComps: e,
  prevMonthComps: t,
  nextMonthComps: n
}, r) {
  const o = [], {
    firstDayOfWeek: a,
    firstWeekday: s,
    isoWeeknumbers: i,
    weeknumbers: l,
    numDays: c,
    numWeeks: u
  } = e, d = s + (s < a ? lt : 0) - a;
  let f = !0, p = !1, v = !1, g = 0;
  const b = new Intl.DateTimeFormat(r.id, {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric"
  });
  let m = t.numDays - d + 1, y = t.numDays - m + 1, E = Math.floor((m - 1) / lt + 1), _ = 1, $ = t.numWeeks, O = 1, A = t.month, x = t.year;
  const S = /* @__PURE__ */ new Date(), k = S.getDate(), R = S.getMonth() + 1, N = S.getFullYear();
  for (let U = 1; U <= cS; U++) {
    for (let J = 1, z = a; J <= lt; J++, z += z === lt ? 1 - lt : 1) {
      f && z === s && (m = 1, y = e.numDays, E = Math.floor((m - 1) / lt + 1), _ = Math.floor((c - m) / lt + 1), $ = 1, O = u, A = e.month, x = e.year, f = !1, p = !0);
      const ee = r.getDateFromParams(x, A, m, 0, 0, 0, 0), le = r.getDateFromParams(x, A, m, 12, 0, 0, 0), ke = r.getDateFromParams(
        x,
        A,
        m,
        23,
        59,
        59,
        999
      ), ve = ee, H = `${Ve(x, 4)}-${Ve(A, 2)}-${Ve(m, 2)}`, me = J, Ie = lt - J, He = l[U - 1], oe = i[U - 1], Se = m === k && A === R && x === N, G = p && m === 1, X = p && m === c, se = U === 1, te = U === u, Y = J === 1, ne = J === lt, we = gp(x, A, m);
      o.push({
        locale: r,
        id: H,
        position: ++g,
        label: m.toString(),
        ariaLabel: b.format(new Date(x, A - 1, m)),
        day: m,
        dayFromEnd: y,
        weekday: z,
        weekdayPosition: me,
        weekdayPositionFromEnd: Ie,
        weekdayOrdinal: E,
        weekdayOrdinalFromEnd: _,
        week: $,
        weekFromEnd: O,
        weekPosition: U,
        weeknumber: He,
        isoWeeknumber: oe,
        month: A,
        year: x,
        date: ve,
        startDate: ee,
        endDate: ke,
        noonDate: le,
        dayIndex: we,
        isToday: Se,
        isFirstDay: G,
        isLastDay: X,
        isDisabled: !p,
        isFocusable: !p,
        isFocused: !1,
        inMonth: p,
        inPrevMonth: f,
        inNextMonth: v,
        onTop: se,
        onBottom: te,
        onLeft: Y,
        onRight: ne,
        classes: [
          `id-${H}`,
          `day-${m}`,
          `day-from-end-${y}`,
          `weekday-${z}`,
          `weekday-position-${me}`,
          `weekday-ordinal-${E}`,
          `weekday-ordinal-from-end-${_}`,
          `week-${$}`,
          `week-from-end-${O}`,
          {
            "is-today": Se,
            "is-first-day": G,
            "is-last-day": X,
            "in-month": p,
            "in-prev-month": f,
            "in-next-month": v,
            "on-top": se,
            "on-bottom": te,
            "on-left": Y,
            "on-right": ne
          }
        ]
      }), p && X ? (p = !1, v = !0, m = 1, y = c, E = 1, _ = Math.floor((c - m) / lt + 1), $ = 1, O = n.numWeeks, A = n.month, x = n.year) : (m++, y--, E = Math.floor((m - 1) / lt + 1), _ = Math.floor((c - m) / lt + 1));
    }
    $++, O--;
  }
  return o;
}
function NS(e, t, n, r) {
  const o = e.reduce((a, s, i) => {
    const l = Math.floor(i / 7);
    let c = a[l];
    return c || (c = {
      id: `week-${l + 1}`,
      title: "",
      week: s.week,
      weekPosition: s.weekPosition,
      weeknumber: s.weeknumber,
      isoWeeknumber: s.isoWeeknumber,
      weeknumberDisplay: t ? s.weeknumber : n ? s.isoWeeknumber : void 0,
      days: []
    }, a[l] = c), c.days.push(s), a;
  }, Array(e.length / lt));
  return o.forEach((a) => {
    const s = a.days[0], i = a.days[a.days.length - 1];
    s.month === i.month ? a.title = `${r.formatDate(s.date, "MMMM YYYY")}` : s.year === i.year ? a.title = `${r.formatDate(
      s.date,
      "MMM"
    )} - ${r.formatDate(i.date, "MMM YYYY")}` : a.title = `${r.formatDate(
      s.date,
      "MMM YYYY"
    )} - ${r.formatDate(i.date, "MMM YYYY")}`;
  }), o;
}
function PS(e, t) {
  return e.days.map((n) => ({
    label: t.formatDate(n.date, t.masks.weekdays),
    weekday: n.weekday
  }));
}
function wp(e, t, n) {
  return ip(
    n.getDateParts(n.toDate(e)),
    xS[t]
  );
}
function Ep({ day: e, week: t, month: n, year: r }, o, a, s) {
  if (a === "daily" && e) {
    const i = new Date(r, n - 1, e), l = ft(i, o);
    return {
      day: l.getDate(),
      month: l.getMonth() + 1,
      year: l.getFullYear()
    };
  } else if (a === "weekly" && t) {
    const l = s.getMonthParts(n, r).firstDayOfMonth, c = ft(l, (t - 1 + o) * 7), u = s.getDateParts(c);
    return {
      week: u.week,
      month: u.month,
      year: u.year
    };
  } else {
    const i = new Date(r, n - 1, 1), l = No(i, o);
    return {
      month: l.getMonth() + 1,
      year: l.getFullYear()
    };
  }
}
function en(e) {
  return e != null && e.month != null && e.year != null;
}
function ei(e, t) {
  return !en(e) || !en(t) ? !1 : (e = e, t = t, e.year !== t.year ? e.year < t.year : e.month && t.month && e.month !== t.month ? e.month < t.month : e.week && t.week && e.week !== t.week ? e.week < t.week : e.day && t.day && e.day !== t.day ? e.day < t.day : !1);
}
function So(e, t) {
  return !en(e) || !en(t) ? !1 : (e = e, t = t, e.year !== t.year ? e.year > t.year : e.month && t.month && e.month !== t.month ? e.month > t.month : e.week && t.week && e.week !== t.week ? e.week > t.week : e.day && t.day && e.day !== t.day ? e.day > t.day : !1);
}
function Op(e, t, n) {
  return (e || !1) && !ei(e, t) && !So(e, n);
}
function SS(e, t) {
  return !e && t || e && !t ? !1 : !e && !t ? !0 : (e = e, t = t, e.year === t.year && e.month === t.month && e.week === t.week && e.day === t.day);
}
function MS(e, t, n, r) {
  if (!en(e) || !en(t))
    return [];
  const o = [];
  for (; !So(e, t); )
    o.push(e), e = Ep(e, 1, n, r);
  return o;
}
function Dp(e) {
  const { day: t, week: n, month: r, year: o } = e;
  let a = `${o}-${Ve(r, 2)}`;
  return n && (a = `${a}-w${n}`), t && (a = `${a}-${Ve(t, 2)}`), a;
}
function IS(e, t) {
  const { month: n, year: r, showWeeknumbers: o, showIsoWeeknumbers: a } = e, s = new Date(r, n - 1, 15), i = t.getMonthParts(n, r), l = t.getPrevMonthParts(n, r), c = t.getNextMonthParts(n, r), u = CS({ monthComps: i, prevMonthComps: l, nextMonthComps: c }, t), d = NS(u, o, a, t), f = PS(d[0], t);
  return {
    id: Dp(e),
    month: n,
    year: r,
    monthTitle: t.formatDate(s, t.masks.title),
    shortMonthLabel: t.formatDate(s, "MMM"),
    monthLabel: t.formatDate(s, "MMMM"),
    shortYearLabel: r.toString().substring(2),
    yearLabel: r.toString(),
    monthComps: i,
    prevMonthComps: l,
    nextMonthComps: c,
    days: u,
    weeks: d,
    weekdays: f
  };
}
function LS(e, t) {
  const { day: n, week: r, view: o, trimWeeks: a } = e, s = {
    ...t,
    ...e,
    title: "",
    viewDays: [],
    viewWeeks: []
  };
  switch (o) {
    case "daily": {
      let i = s.days.find((c) => c.inMonth);
      n ? i = s.days.find((c) => c.day === n && c.inMonth) || i : r && (i = s.days.find((c) => c.week === r && c.inMonth));
      const l = s.weeks[i.week - 1];
      s.viewWeeks = [l], s.viewDays = [i], s.week = i.week, s.weekTitle = l.title, s.day = i.day, s.dayTitle = i.ariaLabel, s.title = s.dayTitle;
      break;
    }
    case "weekly": {
      s.week = r || 1;
      const i = s.weeks[s.week - 1];
      s.viewWeeks = [i], s.viewDays = i.days, s.weekTitle = i.title, s.title = s.weekTitle;
      break;
    }
    default: {
      s.title = s.monthTitle, s.viewWeeks = s.weeks.slice(
        0,
        a ? s.monthComps.numWeeks : void 0
      ), s.viewDays = s.days;
      break;
    }
  }
  return s;
}
class yc {
  constructor(t, n, r) {
    ue(this, "keys", []), ue(this, "store", {}), this.size = t, this.createKey = n, this.createItem = r;
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
      const o = this.keys.shift();
      o != null && delete this.store[o];
    }
    return this.keys.push(n), this.store[n] = r, r;
  }
}
class Cr {
  constructor(t, n = new Mo()) {
    ue(this, "order"), ue(this, "locale"), ue(this, "start", null), ue(this, "end", null), ue(this, "repeat", null);
    var r;
    this.locale = n;
    const { start: o, end: a, span: s, order: i, repeat: l } = t;
    xr(o) && (this.start = n.getDateParts(o)), xr(a) ? this.end = n.getDateParts(a) : this.start != null && s && (this.end = n.getDateParts(ft(this.start.date, s - 1))), this.order = i ?? 0, l && (this.repeat = new Po(
      {
        from: (r = this.start) == null ? void 0 : r.date,
        ...l
      },
      {
        locale: this.locale
      }
    ));
  }
  static fromMany(t, n) {
    return (Pt(t) ? t : [t]).filter((r) => r).map((r) => Cr.from(r, n));
  }
  static from(t, n) {
    if (t instanceof Cr)
      return t;
    const r = {
      start: null,
      end: null
    };
    return t != null && (Pt(t) ? (r.start = t[0] ?? null, r.end = t[1] ?? null) : $n(t) ? Object.assign(r, t) : (r.start = t, r.end = t)), r.start != null && (r.start = new Date(r.start)), r.end != null && (r.end = new Date(r.end)), new Cr(r, n);
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
class RS {
  constructor() {
    ue(this, "records", {});
  }
  render(t, n, r) {
    var o, a, s, i;
    let l = null;
    const c = r[0].dayIndex, u = r[r.length - 1].dayIndex;
    return n.hasRepeat ? r.forEach((d) => {
      var f, p;
      if (n.startsOnDay(d)) {
        const v = n.daySpan < 1 / 0 ? n.daySpan : 1;
        l = {
          startDay: d.dayIndex,
          startTime: ((f = n.start) == null ? void 0 : f.time) ?? 0,
          endDay: d.dayIndex + v - 1,
          endTime: ((p = n.end) == null ? void 0 : p.time) ?? io
        }, this.getRangeRecords(t).push(l);
      }
    }) : n.intersectsDayRange(c, u) && (l = {
      startDay: ((o = n.start) == null ? void 0 : o.dayIndex) ?? -1 / 0,
      startTime: ((a = n.start) == null ? void 0 : a.time) ?? -1 / 0,
      endDay: ((s = n.end) == null ? void 0 : s.dayIndex) ?? 1 / 0,
      endTime: ((i = n.end) == null ? void 0 : i.time) ?? 1 / 0
    }, this.getRangeRecords(t).push(l)), l;
  }
  getRangeRecords(t) {
    let n = this.records[t.key];
    return n || (n = {
      ranges: [],
      data: t
    }, this.records[t.key] = n), n.ranges;
  }
  getCell(t, n) {
    return this.getCells(n).find((a) => a.data.key === t);
  }
  cellExists(t, n) {
    const r = this.records[t];
    return r == null ? !1 : r.ranges.some(
      (o) => o.startDay <= n && o.endDay >= n
    );
  }
  getCells(t) {
    const n = Object.values(this.records), r = [], { dayIndex: o } = t;
    return n.forEach(({ data: a, ranges: s }) => {
      s.filter((i) => i.startDay <= o && i.endDay >= o).forEach((i) => {
        const l = o === i.startDay, c = o === i.endDay, u = l ? i.startTime : 0, d = new Date(t.startDate.getTime() + u), f = c ? i.endTime : io, p = new Date(t.endDate.getTime() + f), v = u === 0 && f === io, g = a.order || 0;
        r.push({
          ...i,
          data: a,
          onStart: l,
          onEnd: c,
          startTime: u,
          startDate: d,
          endTime: f,
          endDate: p,
          allDay: v,
          order: g
        });
      });
    }), r.sort((a, s) => a.order - s.order), r;
  }
}
const FS = 12, VS = 5;
function BS(e, t) {
  const n = new Intl.DateTimeFormat().resolvedOptions().locale;
  let r;
  Qt(e) ? r = e : tl(e, "id") && (r = e.id), r = (r || n).toLowerCase();
  const o = Object.keys(t), a = (l) => o.find((c) => c.toLowerCase() === l);
  r = a(r) || a(r.substring(0, 2)) || n;
  const s = {
    ...t["en-IE"],
    ...t[r],
    id: r,
    monthCacheSize: FS,
    pageCacheSize: VS
  };
  return $n(e) ? Sa(e, s) : s;
}
class Mo {
  constructor(t = void 0, n) {
    ue(this, "id"), ue(this, "daysInWeek"), ue(this, "firstDayOfWeek"), ue(this, "masks"), ue(this, "timezone"), ue(this, "hourLabels"), ue(this, "dayNames"), ue(this, "dayNamesShort"), ue(this, "dayNamesShorter"), ue(this, "dayNamesNarrow"), ue(this, "monthNames"), ue(this, "monthNamesShort"), ue(this, "relativeTimeNames"), ue(this, "amPm", ["am", "pm"]), ue(this, "monthCache"), ue(this, "pageCache");
    const { id: r, firstDayOfWeek: o, masks: a, monthCacheSize: s, pageCacheSize: i } = BS(t, x2.value);
    this.monthCache = new yc(
      s,
      bS,
      _S
    ), this.pageCache = new yc(i, Dp, IS), this.id = r, this.daysInWeek = lt, this.firstDayOfWeek = e2(o, 1, lt), this.masks = a, this.timezone = n || void 0, this.hourLabels = this.getHourLabels(), this.dayNames = bs("long", this.id), this.dayNamesShort = bs("short", this.id), this.dayNamesShorter = this.dayNamesShort.map((l) => l.substring(0, 2)), this.dayNamesNarrow = bs("narrow", this.id), this.monthNames = hc("long", this.id), this.monthNamesShort = hc("short", this.id), this.relativeTimeNames = OS(this.id);
  }
  formatDate(t, n) {
    return AS(t, n, this);
  }
  parseDate(t, n) {
    return gc(t, n, this);
  }
  toDate(t, n = {}) {
    const r = /* @__PURE__ */ new Date(NaN);
    let o = r;
    const { fillDate: a, mask: s, patch: i, rules: l } = n;
    if (Wt(t) ? (n.type = "number", o = /* @__PURE__ */ new Date(+t)) : Qt(t) ? (n.type = "string", o = t ? gc(t, s || "iso", this) : r) : xr(t) ? (n.type = "date", o = new Date(t.getTime())) : hp(t) && (n.type = "object", o = this.getDateFromParts(t)), o && (i || l)) {
      let c = this.getDateParts(o);
      if (i && a != null) {
        const u = this.getDateParts(this.toDate(a));
        c = this.getDateParts(
          this.toDate({ ...u, ...ip(c, uS[i]) })
        );
      }
      l && (c = TS(c, l)), o = this.getDateFromParts(c);
    }
    return o || r;
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
    return Cr.from(t, this);
  }
  ranges(t) {
    return Cr.fromMany(t, this);
  }
  getDateParts(t) {
    return yS(t, this);
  }
  getDateFromParts(t) {
    return bp(t, this.timezone);
  }
  getDateFromParams(t, n, r, o, a, s, i) {
    return this.getDateFromParts({
      year: t,
      month: n,
      day: r,
      hours: o,
      minutes: a,
      seconds: s,
      milliseconds: i
    });
  }
  getPage(t) {
    const n = this.pageCache.getOrSet(t, this);
    return LS(t, n);
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
    return ES().map((t) => this.formatDate(t, this.masks.hours));
  }
  getDayId(t) {
    return this.formatDate(t, "YYYY-MM-DD");
  }
}
class kp {
  constructor(t, n, r) {
    ue(this, "key", ""), ue(this, "hashcode", ""), ue(this, "highlight", null), ue(this, "content", null), ue(this, "dot", null), ue(this, "bar", null), ue(this, "event", null), ue(this, "popover", null), ue(this, "customData", null), ue(this, "ranges"), ue(this, "hasRanges", !1), ue(this, "order", 0), ue(this, "pinPage", !1), ue(this, "maxRepeatSpan", 0), ue(this, "locale");
    const { dates: o } = Object.assign(
      this,
      { hashcode: "", order: 0, pinPage: !1 },
      t
    );
    this.key || (this.key = Eo()), this.locale = r, n.normalizeGlyphs(this), this.ranges = r.ranges(o ?? []), this.hasRanges = !!bn(this.ranges), this.maxRepeatSpan = this.ranges.filter((a) => a.hasRepeat).map((a) => a.daySpan).reduce((a, s) => Math.max(a, s), 0);
  }
  intersectsRange({ start: t, end: n }) {
    if (t == null || n == null)
      return !1;
    const r = this.ranges.filter((s) => !s.hasRepeat);
    for (const s of r)
      if (s.intersectsDayRange(t.dayIndex, n.dayIndex))
        return !0;
    const o = this.ranges.filter((s) => s.hasRepeat);
    if (!o.length)
      return !1;
    let a = t;
    for (this.maxRepeatSpan > 1 && (a = this.locale.getDateParts(ft(a.date, -this.maxRepeatSpan))); a.dayIndex <= n.dayIndex; ) {
      for (const s of o)
        if (s.startsOnDay(a))
          return !0;
      a = this.locale.getDateParts(ft(a.date, 1));
    }
    return !1;
  }
}
const $p = "__vc_base_context__", Tp = {
  color: {
    type: String,
    default: () => Kn("color")
  },
  isDark: {
    type: [Boolean, String, Object],
    default: () => Kn("isDark")
  },
  firstDayOfWeek: Number,
  masks: Object,
  locale: [String, Object],
  timezone: String,
  minDate: null,
  maxDate: null,
  disabledDates: null
};
function Ap(e) {
  const t = C(() => e.color ?? ""), n = C(() => e.isDark ?? !1), { displayMode: r } = uw(n), o = C(() => new l2(t.value)), a = C(() => {
    if (e.locale instanceof Mo)
      return e.locale;
    const u = $n(e.locale) ? e.locale : {
      id: e.locale,
      firstDayOfWeek: e.firstDayOfWeek,
      masks: e.masks
    };
    return new Mo(u, e.timezone);
  }), s = C(() => a.value.masks), i = C(() => {
    const u = e.disabledDates ?? [];
    return e.minDate != null && u.push({
      start: null,
      end: ft(a.value.toDate(e.minDate), -1)
    }), e.maxDate != null && u.push({
      start: ft(a.value.toDate(e.maxDate), 1),
      end: null
    }), a.value.ranges(u);
  }), l = C(() => new kp(
    {
      key: "disabled",
      dates: i.value,
      order: 100
    },
    o.value,
    a.value
  )), c = {
    color: t,
    isDark: n,
    displayMode: r,
    theme: o,
    locale: a,
    masks: s,
    disabledDates: i,
    disabledAttribute: l
  };
  return nn($p, c), c;
}
function YS(e) {
  return Be($p, Ap(e));
}
const HS = (e, t, {
  maxSwipeTime: n,
  minHorizontalSwipeDistance: r,
  maxVerticalSwipeDistance: o
}) => {
  if (!e || !e.addEventListener || !vr(t))
    return null;
  let a = 0, s = 0, i = null, l = !1;
  function c(d) {
    const f = d.changedTouches[0];
    a = f.screenX, s = f.screenY, i = (/* @__PURE__ */ new Date()).getTime(), l = !0;
  }
  function u(d) {
    if (!l || !i)
      return;
    l = !1;
    const f = d.changedTouches[0], p = f.screenX - a, v = f.screenY - s;
    if ((/* @__PURE__ */ new Date()).getTime() - i < n && Math.abs(p) >= r && Math.abs(v) <= o) {
      const b = { toLeft: !1, toRight: !1 };
      p < 0 ? b.toLeft = !0 : b.toRight = !0, t(b);
    }
  }
  return Yn(e, "touchstart", c, { passive: !0 }), Yn(e, "touchend", u, { passive: !0 }), () => {
    Bn(e, "touchstart", c), Bn(e, "touchend", u);
  };
}, lo = {}, US = (e, t = 10) => {
  lo[e] = Date.now() + t;
}, jS = (e, t) => {
  if (e in lo) {
    const n = lo[e];
    if (Date.now() < n)
      return;
    delete lo[e];
  }
  t();
}, WS = {
  ...Tp,
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
    default: () => Kn("titlePosition")
  },
  navVisibility: {
    type: String,
    default: () => Kn("navVisibility")
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
}, GS = [
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
], xp = "__vc_calendar_context__";
function zS(e, { emit: t, slots: n }) {
  const r = B(null), o = B(null), a = B(null), s = B((/* @__PURE__ */ new Date()).getDate()), i = B(!1), l = B(Eo()), c = B(Eo()), u = B(e.view), d = B([]), f = B("");
  let p = null, v = null;
  const {
    theme: g,
    color: b,
    displayMode: m,
    locale: y,
    masks: E,
    disabledAttribute: _,
    disabledDates: $
  } = YS(e), O = C(() => e.rows * e.columns), A = C(() => e.step || O.value), x = C(() => op(d.value) ?? null), S = C(() => $r(d.value) ?? null), k = C(
    () => e.minPage || (e.minDate ? me(e.minDate) : null)
  ), R = C(
    () => e.maxPage || (e.maxDate ? me(e.maxDate) : null)
  ), N = C(() => e.navVisibility), U = C(() => !!e.showWeeknumbers), J = C(() => !!e.showIsoWeeknumbers), z = C(() => u.value === "monthly"), ee = C(() => u.value === "weekly"), le = C(() => u.value === "daily"), ke = () => {
    i.value = !0, t("transition-start");
  }, ve = () => {
    i.value = !1, t("transition-end"), p && (p.resolve(!0), p = null);
  }, H = (j, q, ye = u.value) => Ep(j, q, ye, y.value), me = (j) => wp(j, u.value, y.value), Ie = (j) => {
    !_.value || !se.value || (j.isDisabled = se.value.cellExists(
      _.value.key,
      j.dayIndex
    ));
  }, He = (j) => {
    j.isFocusable = j.inMonth && j.day === s.value;
  }, oe = (j, q) => {
    for (const ye of j)
      for (const P of ye.days)
        if (q(P) === !1)
          return;
  }, Se = C(
    () => d.value.reduce((j, q) => (j.push(...q.viewDays), j), [])
  ), G = C(() => {
    const j = [];
    return (e.attributes || []).forEach((q, ye) => {
      if (!q || !q.dates)
        return;
      const P = tl(q, "key") ? q.key : ye, K = q.order || 0;
      j.push(
        new kp(
          {
            ...q,
            key: P,
            order: K
          },
          g.value,
          y.value
        )
      );
    }), _.value && j.push(_.value), j;
  }), X = C(() => bn(G.value)), se = C(() => {
    const j = new RS();
    return G.value.forEach((q) => {
      q.ranges.forEach((ye) => {
        j.render(q, ye, Se.value);
      });
    }), j;
  }), te = C(() => Se.value.reduce((j, q) => (j[q.dayIndex] = { day: q, cells: [] }, j[q.dayIndex].cells.push(...se.value.getCells(q)), j), {})), Y = (j, q) => {
    const ye = e.showWeeknumbers || e.showIsoWeeknumbers;
    return ye == null ? "" : qw(ye) ? ye ? "left" : "" : ye.startsWith("right") ? q > 1 ? "right" : ye : j > 1 ? "left" : ye;
  }, ne = () => {
    var j, q;
    if (!X.value)
      return null;
    const ye = G.value.find((fe) => fe.pinPage) || G.value[0];
    if (!ye || !ye.hasRanges)
      return null;
    const [P] = ye.ranges, K = ((j = P.start) == null ? void 0 : j.date) || ((q = P.end) == null ? void 0 : q.date);
    return K ? me(K) : null;
  }, we = () => {
    if (en(x.value))
      return x.value;
    const j = ne();
    return en(j) ? j : me(/* @__PURE__ */ new Date());
  }, D = (j, q = {}) => {
    const { view: ye = u.value, position: P = 1, force: K } = q, fe = P > 0 ? 1 - P : -(O.value + P);
    let Ce = H(j, fe, ye), et = H(Ce, O.value - 1, ye);
    return K || (ei(Ce, k.value) ? Ce = k.value : So(et, R.value) && (Ce = H(R.value, 1 - O.value)), et = H(Ce, O.value - 1)), { fromPage: Ce, toPage: et };
  }, w = (j, q, ye = "") => {
    if (ye === "none" || ye === "fade")
      return ye;
    if ((j == null ? void 0 : j.view) !== (q == null ? void 0 : q.view))
      return "fade";
    const P = So(q, j), K = ei(q, j);
    return !P && !K ? "fade" : ye === "slide-v" ? K ? "slide-down" : "slide-up" : K ? "slide-right" : "slide-left";
  }, L = (j = {}) => new Promise((q, ye) => {
    const { position: P = 1, force: K = !1, transition: fe } = j, Ce = en(j.page) ? j.page : we(), { fromPage: et } = D(Ce, {
      position: P,
      force: K
    }), Bt = [];
    for (let pt = 0; pt < O.value; pt++) {
      const br = H(et, pt), sa = pt + 1, Wa = Math.ceil(sa / e.columns), Tt = e.rows - Wa + 1, Ga = sa % e.columns || e.columns, ia = e.columns - Ga + 1, os = Y(Ga, ia);
      Bt.push(
        y.value.getPage({
          ...br,
          view: u.value,
          titlePosition: e.titlePosition,
          trimWeeks: e.trimWeeks,
          position: sa,
          row: Wa,
          rowFromEnd: Tt,
          column: Ga,
          columnFromEnd: ia,
          showWeeknumbers: U.value,
          showIsoWeeknumbers: J.value,
          weeknumberPosition: os
        })
      );
    }
    f.value = w(
      d.value[0],
      Bt[0],
      fe
    ), d.value = Bt, f.value && f.value !== "none" ? p = {
      resolve: q,
      reject: ye
    } : q(!0);
  }), Z = (j) => {
    const q = x.value ?? me(/* @__PURE__ */ new Date());
    return H(q, j);
  }, ie = (j, q = {}) => {
    const ye = en(j) ? j : me(j);
    return Object.assign(
      q,
      D(ye, {
        ...q,
        force: !0
      })
    ), MS(
      q.fromPage,
      q.toPage,
      u.value,
      y.value
    ).map((K) => Op(K, k.value, R.value)).every((K) => K);
  }, Oe = (j, q = {}) => ie(Z(j), q), qe = C(() => Oe(-A.value)), We = C(() => Oe(A.value)), $t = async (j, q = {}) => !q.force && !ie(j, q) ? !1 : (q.fromPage && !SS(q.fromPage, x.value) && (o.value && o.value.hide({ hideDelay: 0 }), q.view && (US("view", 10), u.value = q.view), await L({
    ...q,
    page: q.fromPage,
    position: 1,
    force: !0
  }), t("did-move", d.value)), !0), Zt = (j, q = {}) => $t(Z(j), q), Fe = () => Zt(-A.value), F = () => Zt(A.value), W = (j) => {
    const q = z.value ? ".in-month" : "", ye = `.id-${y.value.getDayId(j)}${q}`, P = `${ye}.vc-focusable, ${ye} .vc-focusable`, K = r.value;
    if (K) {
      const fe = K.querySelector(P);
      if (fe)
        return fe.focus(), !0;
    }
    return !1;
  }, Ze = async (j, q = {}) => W(j) ? !0 : (await $t(j, q), W(j)), Xe = (j, q) => {
    s.value = j.day, t("dayclick", j, q);
  }, Xt = (j, q) => {
    t("daymouseenter", j, q);
  }, Pn = (j, q) => {
    t("daymouseleave", j, q);
  }, Ft = (j, q) => {
    s.value = j.day, a.value = j, j.isFocused = !0, t("dayfocusin", j, q);
  }, Vt = (j, q) => {
    a.value = null, j.isFocused = !1, t("dayfocusout", j, q);
  }, Jn = (j, q) => {
    t("daykeydown", j, q);
    const ye = j.noonDate;
    let P = null;
    switch (q.key) {
      case "ArrowLeft": {
        P = ft(ye, -1);
        break;
      }
      case "ArrowRight": {
        P = ft(ye, 1);
        break;
      }
      case "ArrowUp": {
        P = ft(ye, -7);
        break;
      }
      case "ArrowDown": {
        P = ft(ye, 7);
        break;
      }
      case "Home": {
        P = ft(ye, -j.weekdayPosition + 1);
        break;
      }
      case "End": {
        P = ft(ye, j.weekdayPositionFromEnd);
        break;
      }
      case "PageUp": {
        q.altKey ? P = cc(ye, -1) : P = No(ye, -1);
        break;
      }
      case "PageDown": {
        q.altKey ? P = cc(ye, 1) : P = No(ye, 1);
        break;
      }
    }
    P && (q.preventDefault(), Ze(P).catch());
  }, yr = (j) => {
    const q = a.value;
    q != null && Jn(q, j);
  }, as = (j, q) => {
    t("weeknumberclick", j, q);
  };
  L({
    page: e.initialPage,
    position: e.initialPagePosition
  }), Gt(() => {
    !e.disablePageSwipe && r.value && (v = HS(
      r.value,
      ({ toLeft: j = !1, toRight: q = !1 }) => {
        j ? F() : q && Fe();
      },
      Kn("touch")
    ));
  }), qn(() => {
    d.value = [], v && v();
  }), _e(
    () => y.value,
    () => {
      L();
    }
  ), _e(
    () => O.value,
    () => L()
  ), _e(
    () => e.view,
    () => u.value = e.view
  ), _e(
    () => u.value,
    () => {
      jS("view", () => {
        L();
      }), t("update:view", u.value);
    }
  ), _e(
    () => s.value,
    () => {
      oe(d.value, (j) => He(j));
    }
  ), bt(() => {
    t("update:pages", d.value), oe(d.value, (j) => {
      Ie(j), He(j);
    });
  });
  const ja = {
    emit: t,
    slots: n,
    containerRef: r,
    navPopoverRef: o,
    focusedDay: a,
    inTransition: i,
    navPopoverId: l,
    dayPopoverId: c,
    view: u,
    pages: d,
    transitionName: f,
    theme: g,
    color: b,
    displayMode: m,
    locale: y,
    masks: E,
    attributes: G,
    disabledAttribute: _,
    disabledDates: $,
    attributeContext: se,
    days: Se,
    dayCells: te,
    count: O,
    step: A,
    firstPage: x,
    lastPage: S,
    canMovePrev: qe,
    canMoveNext: We,
    minPage: k,
    maxPage: R,
    isMonthly: z,
    isWeekly: ee,
    isDaily: le,
    navVisibility: N,
    showWeeknumbers: U,
    showIsoWeeknumbers: J,
    getDateAddress: me,
    canMove: ie,
    canMoveBy: Oe,
    move: $t,
    moveBy: Zt,
    movePrev: Fe,
    moveNext: F,
    onTransitionBeforeEnter: ke,
    onTransitionAfterEnter: ve,
    tryFocusDate: W,
    focusDate: Ze,
    onKeydown: yr,
    onDayKeydown: Jn,
    onDayClick: Xe,
    onDayMouseenter: Xt,
    onDayMouseleave: Pn,
    onDayFocusin: Ft,
    onDayFocusout: Vt,
    onWeeknumberClick: as
  };
  return nn(xp, ja), ja;
}
function gr() {
  const e = Be(xp);
  if (e)
    return e;
  throw new Error(
    "Calendar context missing. Please verify this component is nested within a valid context provider."
  );
}
const KS = {
  inheritAttrs: !1
}, Nr = /* @__PURE__ */ de({
  ...KS,
  __name: "CalendarSlot",
  props: {
    name: null
  },
  setup(e) {
    const { slots: t } = gr();
    return (n, r) => h(t)[e.name] ? (T(), De(Ro(h(t)[e.name]), Pr(Qe({ key: 0 }, n.$attrs)), null, 16)) : Me(n.$slots, "default", { key: 1 });
  }
});
function ti(e) {
  document && document.dispatchEvent(
    new CustomEvent("show-popover", {
      detail: e
    })
  );
}
function Io(e) {
  document && document.dispatchEvent(
    new CustomEvent("hide-popover", {
      detail: e
    })
  );
}
function Cp(e) {
  document && document.dispatchEvent(
    new CustomEvent("toggle-popover", {
      detail: e
    })
  );
}
function Np(e) {
  const { visibility: t } = e, n = t === "click", r = t === "hover", o = t === "hover-focus", a = t === "focus";
  e.autoHide = !n;
  let s = !1, i = !1;
  const l = (v) => {
    n && (Cp({
      ...e,
      target: e.target || v.currentTarget
    }), v.stopPropagation());
  }, c = (v) => {
    s || (s = !0, (r || o) && ti({
      ...e,
      target: e.target || v.currentTarget
    }));
  }, u = () => {
    s && (s = !1, (r || o && !i) && Io(e));
  }, d = (v) => {
    i || (i = !0, (a || o) && ti({
      ...e,
      target: e.target || v.currentTarget
    }));
  }, f = (v) => {
    i && !oo(v.currentTarget, v.relatedTarget) && (i = !1, (a || o && !s) && Io(e));
  }, p = {};
  switch (e.visibility) {
    case "click":
      p.click = l;
      break;
    case "hover":
      p.mousemove = c, p.mouseleave = u;
      break;
    case "focus":
      p.focusin = d, p.focusout = f;
      break;
    case "hover-focus":
      p.mousemove = c, p.mouseleave = u, p.focusin = d, p.focusout = f;
      break;
  }
  return p;
}
const bc = (e) => {
  const t = wo(e);
  if (t == null)
    return;
  const n = t.popoverHandlers;
  !n || !n.length || (n.forEach((r) => r()), delete t.popoverHandlers);
}, _c = (e, t) => {
  const n = wo(e);
  if (n == null)
    return;
  const r = [], o = Np(t);
  Object.entries(o).forEach(([a, s]) => {
    r.push(Yn(n, a, s));
  }), n.popoverHandlers = r;
}, Pp = {
  mounted(e, t) {
    const { value: n } = t;
    n && _c(e, n);
  },
  updated(e, t) {
    const { oldValue: n, value: r } = t, o = n == null ? void 0 : n.visibility, a = r == null ? void 0 : r.visibility;
    o !== a && (o && (bc(e), a || Io(n)), a && _c(e, r));
  },
  unmounted(e) {
    bc(e);
  }
}, qS = ["disabled"], ZS = {
  key: 1,
  type: "button",
  class: "vc-title"
}, XS = ["disabled"], Sp = /* @__PURE__ */ de({
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
      canMovePrev: o,
      movePrev: a,
      canMoveNext: s,
      moveNext: i
    } = gr(), l = C(() => {
      switch (t.page.titlePosition) {
        case "left":
          return "bottom-start";
        case "right":
          return "bottom-end";
        default:
          return "bottom";
      }
    }), c = C(() => {
      const { page: g } = t;
      return {
        id: n.value,
        visibility: r.value,
        placement: l.value,
        modifiers: [{ name: "flip", options: { fallbackPlacements: ["bottom"] } }],
        data: { page: g },
        isInteractive: !0
      };
    }), u = C(() => t.page.titlePosition.includes("left")), d = C(() => t.page.titlePosition.includes("right")), f = C(() => t.layout ? t.layout : u.value ? "tu-pn" : d.value ? "pn-tu" : "p-tu-n;"), p = C(() => ({
      prev: f.value.includes("p") && !t.hideArrows,
      title: f.value.includes("t") && !t.hideTitle,
      next: f.value.includes("n") && !t.hideArrows
    })), v = C(() => ({ gridTemplateColumns: f.value.split("").map((b) => {
      switch (b) {
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
    return (g, b) => (T(), I("div", {
      class: xe(["vc-header", { "is-lg": e.isLg, "is-xl": e.isXl, "is-2xl": e.is2xl }]),
      style: Hn(h(v))
    }, [
      h(p).prev ? (T(), I("button", {
        key: 0,
        type: "button",
        class: "vc-arrow vc-prev vc-focus",
        disabled: !h(o),
        onClick: b[0] || (b[0] = //@ts-ignore
        (...m) => h(a) && h(a)(...m)),
        onKeydown: b[1] || (b[1] = Ds(
          //@ts-ignore
          (...m) => h(a) && h(a)(...m),
          ["space", "enter"]
        ))
      }, [
        ce(Nr, {
          name: "header-prev-button",
          disabled: !h(o)
        }, {
          default: he(() => [
            ce(Br, {
              name: "ChevronLeft",
              size: "24"
            })
          ]),
          _: 1
        }, 8, ["disabled"])
      ], 40, qS)) : re("", !0),
      h(p).title ? xt((T(), I("button", ZS, [
        ce(Nr, {
          name: "header-title",
          title: e.page.title
        }, {
          default: he(() => [
            M("span", null, ae(e.page.title), 1)
          ]),
          _: 1
        }, 8, ["title"])
      ])), [
        [h(Pp), h(c)]
      ]) : re("", !0),
      h(p).next ? (T(), I("button", {
        key: 2,
        type: "button",
        class: "vc-arrow vc-next vc-focus",
        disabled: !h(s),
        onClick: b[2] || (b[2] = //@ts-ignore
        (...m) => h(i) && h(i)(...m)),
        onKeydown: b[3] || (b[3] = Ds(
          //@ts-ignore
          (...m) => h(i) && h(i)(...m),
          ["space", "enter"]
        ))
      }, [
        ce(Nr, {
          name: "header-next-button",
          disabled: !h(s)
        }, {
          default: he(() => [
            ce(Br, {
              name: "ChevronRight",
              size: "24"
            })
          ]),
          _: 1
        }, 8, ["disabled"])
      ], 40, XS)) : re("", !0)
    ], 6));
  }
}), JS = de({
  directives: { popover: Pp },
  components: { CalendarSlot: Nr },
  props: {
    day: { type: Object, required: !0 }
  },
  setup(e) {
    const {
      locale: t,
      theme: n,
      attributeContext: r,
      dayPopoverId: o,
      slots: a,
      onDayClick: s,
      onDayMouseenter: i,
      onDayMouseleave: l,
      onDayFocusin: c,
      onDayFocusout: u,
      onDayKeydown: d
    } = gr(), f = C(() => e.day), p = C(() => r.value.getCells(f.value)), v = C(
      () => p.value.map((z) => z.data)
    ), g = C(() => ({
      ...f.value,
      attributes: v.value,
      attributeCells: p.value
    }));
    function b({ data: z }, { popovers: ee }) {
      const { key: le, customData: ke, popover: ve } = z;
      if (!ve)
        return;
      const H = ec(
        {
          key: le,
          customData: ke,
          attribute: z
        },
        { ...ve },
        {
          visibility: ve.label ? "hover" : "click",
          placement: "bottom",
          isInteractive: !ve.label
        }
      );
      ee.splice(0, 0, H);
    }
    const m = C(() => {
      const z = {
        ...n.value.prepareRender({}),
        popovers: []
      };
      return p.value.forEach((ee) => {
        n.value.render(ee, z), b(ee, z);
      }), z;
    }), y = C(() => m.value.highlights), E = C(() => !!bn(y.value)), _ = C(() => m.value.content), $ = C(() => m.value.dots), O = C(() => !!bn($.value)), A = C(() => m.value.bars), x = C(() => !!bn(A.value)), S = C(() => m.value.popovers), k = C(
      () => S.value.map((z) => z.attribute)
    ), R = C(() => [
      "vc-day",
      ...f.value.classes,
      { "vc-day-box-center-center": !a["day-content"] },
      { "is-not-in-month": !e.day.inMonth }
    ]), N = C(() => {
      let z;
      f.value.isFocusable ? z = "0" : z = "-1";
      const ee = [
        "vc-day-content vc-focusable vc-focus vc-attr",
        { "vc-disabled": f.value.isDisabled },
        ar($r(y.value), "contentClass"),
        ar($r(_.value), "class") || ""
      ], le = {
        ...ar($r(y.value), "contentStyle"),
        ...ar($r(_.value), "style")
      };
      return {
        class: ee,
        style: le,
        tabindex: z,
        "aria-label": f.value.ariaLabel,
        "aria-disabled": !!f.value.isDisabled,
        role: "button"
      };
    }), U = C(() => ({
      click(z) {
        s(g.value, z);
      },
      mouseenter(z) {
        i(g.value, z);
      },
      mouseleave(z) {
        l(g.value, z);
      },
      focusin(z) {
        c(g.value, z);
      },
      focusout(z) {
        u(g.value, z);
      },
      keydown(z) {
        d(g.value, z);
      }
    })), J = C(() => bn(S.value) ? ec(
      {
        id: o.value,
        data: { day: f, attributes: k.value }
      },
      ...S.value
    ) : null);
    return {
      attributes: v,
      attributeCells: p,
      bars: A,
      dayClasses: R,
      dayContentProps: N,
      dayContentEvents: U,
      dayPopover: J,
      glyphs: m,
      dots: $,
      hasDots: O,
      hasBars: x,
      highlights: y,
      hasHighlights: E,
      locale: t,
      popovers: S
    };
  }
}), QS = {
  key: 0,
  class: "vc-highlights vc-day-layer"
}, eM = {
  key: 1,
  class: "vc-day-layer vc-day-box-center-bottom"
}, tM = { class: "vc-dots" }, nM = {
  key: 2,
  class: "vc-day-layer vc-day-box-center-bottom"
}, rM = { class: "vc-bars" };
function aM(e, t, n, r, o, a) {
  const s = tr("CalendarSlot"), i = cm("popover");
  return T(), I("div", {
    class: xe(e.dayClasses)
  }, [
    e.hasHighlights ? (T(), I("div", QS, [
      (T(!0), I(Ee, null, Ue(e.highlights, ({ key: l, wrapperClass: c, class: u, style: d }) => (T(), I("div", {
        key: l,
        class: xe(c)
      }, [
        M("div", {
          class: xe(u),
          style: Hn(d)
        }, null, 6)
      ], 2))), 128))
    ])) : re("", !0),
    ce(s, {
      name: "day-content",
      day: e.day,
      attributes: e.attributes,
      "attribute-cells": e.attributeCells,
      dayProps: e.dayContentProps,
      dayEvents: e.dayContentEvents,
      locale: e.locale
    }, {
      default: he(() => [
        xt((T(), I("div", Qe(e.dayContentProps, dm(e.dayContentEvents, !0)), [
          jr(ae(e.day.label), 1)
        ], 16)), [
          [i, e.dayPopover]
        ])
      ]),
      _: 1
    }, 8, ["day", "attributes", "attribute-cells", "dayProps", "dayEvents", "locale"]),
    e.hasDots ? (T(), I("div", eM, [
      M("div", tM, [
        (T(!0), I(Ee, null, Ue(e.dots, ({ key: l, class: c, style: u }) => (T(), I("span", {
          key: l,
          class: xe(c),
          style: Hn(u)
        }, null, 6))), 128))
      ])
    ])) : re("", !0),
    e.hasBars ? (T(), I("div", nM, [
      M("div", rM, [
        (T(!0), I(Ee, null, Ue(e.bars, ({ key: l, class: c, style: u }) => (T(), I("span", {
          key: l,
          class: xe(c),
          style: Hn(u)
        }, null, 6))), 128))
      ])
    ])) : re("", !0)
  ], 2);
}
const oM = /* @__PURE__ */ xn(JS, [["render", aM]]), sM = {
  name: "CalendarPane",
  inheritAttrs: !1,
  components: { CalendarHeader: Sp, CalendarDay: oM },
  props: {
    page: { type: Object, required: !0 }
  },
  setup() {
    const { onWeeknumberClick: e } = gr();
    return {
      onWeeknumberClick: e
    };
  }
}, iM = { class: "vc-weekdays" }, lM = ["onClick"];
function uM(e, t, n, r, o, a) {
  const s = tr("CalendarHeader"), i = tr("CalendarDay");
  return T(), I("div", {
    class: xe([
      "vc-pane",
      `row-${n.page.row}`,
      `row-from-end-${n.page.rowFromEnd}`,
      `column-${n.page.column}`,
      `column-from-end-${n.page.columnFromEnd}`
    ]),
    ref: "pane"
  }, [
    ce(s, {
      page: n.page,
      "is-lg": "",
      "hide-arrows": ""
    }, null, 8, ["page"]),
    M("div", {
      class: xe(["vc-weeks", {
        [`vc-show-weeknumbers-${n.page.weeknumberPosition}`]: n.page.weeknumberPosition
      }])
    }, [
      M("div", iM, [
        (T(!0), I(Ee, null, Ue(n.page.weekdays, ({ weekday: l, label: c }, u) => (T(), I("div", {
          key: u,
          class: xe(`vc-weekday vc-weekday-${l}`)
        }, ae(c), 3))), 128))
      ]),
      (T(!0), I(Ee, null, Ue(n.page.viewWeeks, (l) => (T(), I("div", {
        key: `weeknumber-${l.weeknumber}`,
        class: "vc-week"
      }, [
        n.page.weeknumberPosition ? (T(), I("div", {
          key: 0,
          class: xe(["vc-weeknumber", `is-${n.page.weeknumberPosition}`])
        }, [
          M("span", {
            class: xe(["vc-weeknumber-content"]),
            onClick: (c) => r.onWeeknumberClick(l, c)
          }, ae(l.weeknumberDisplay), 9, lM)
        ], 2)) : re("", !0),
        (T(!0), I(Ee, null, Ue(l.days, (c) => (T(), De(i, {
          key: c.id,
          day: c
        }, null, 8, ["day"]))), 128))
      ]))), 128))
    ], 2)
  ], 2);
}
const cM = /* @__PURE__ */ xn(sM, [["render", uM]]), dM = de({
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
    const r = B();
    let o = null, a = null;
    const s = Ia({
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
    function i(H) {
      H && (s.direction = H.split("-")[0]);
    }
    function l({ placement: H, options: me }) {
      i(H || (me == null ? void 0 : me.placement));
    }
    const c = C(() => ({
      placement: s.placement,
      strategy: s.positionFixed ? "fixed" : "absolute",
      boundary: "",
      modifiers: [
        {
          name: "onUpdate",
          enabled: !0,
          phase: "afterWrite",
          fn: l
        },
        ...s.modifiers || []
      ],
      onFirstUpdate: l
    })), u = C(() => {
      const H = s.direction === "left" || s.direction === "right";
      let me = "";
      if (s.placement) {
        const Ie = s.placement.split("-");
        Ie.length > 1 && (me = Ie[1]);
      }
      return ["start", "top", "left"].includes(me) ? H ? "top" : "left" : ["end", "bottom", "right"].includes(me) ? H ? "bottom" : "right" : H ? "middle" : "center";
    });
    function d() {
      a && (a.destroy(), a = null);
    }
    function f() {
      Et(() => {
        const H = wo(s.target);
        !H || !r.value || (a && a.state.elements.reference !== H && d(), a ? a.update() : a = M_(
          H,
          r.value,
          c.value
        ));
      });
    }
    function p(H) {
      Object.assign(s, sp(H, "force"));
    }
    function v(H, me) {
      clearTimeout(n), H > 0 ? n = setTimeout(me, H) : me();
    }
    function g(H) {
      return !H || !a ? !1 : wo(H) === a.state.elements.reference;
    }
    async function b(H = {}) {
      s.force || (H.force && (s.force = !0), v(H.showDelay ?? e.showDelay, () => {
        s.isVisible && (s.force = !1, t("after-show")), p({
          ...H,
          isVisible: !0
        }), f();
      }));
    }
    function m(H = {}) {
      a && (H.target && !g(H.target) || s.force || (H.force && (s.force = !0), v(H.hideDelay ?? e.hideDelay, () => {
        s.isVisible || (s.force = !1), s.isVisible = !1;
      })));
    }
    function y(H = {}) {
      H.target != null && (s.isVisible && g(H.target) ? m(H) : b(H));
    }
    function E(H) {
      if (!a)
        return;
      const me = a.state.elements.reference;
      if (!r.value || !me)
        return;
      const Ie = H.target;
      oo(r.value, Ie) || oo(me, Ie) || m({ force: !0 });
    }
    function _(H) {
      (H.key === "Esc" || H.key === "Escape") && m();
    }
    function $({ detail: H }) {
      !H.id || H.id !== e.id || b(H);
    }
    function O({ detail: H }) {
      !H.id || H.id !== e.id || m(H);
    }
    function A({ detail: H }) {
      !H.id || H.id !== e.id || y(H);
    }
    function x() {
      Yn(document, "keydown", _), Yn(document, "click", E), Yn(document, "show-popover", $), Yn(document, "hide-popover", O), Yn(document, "toggle-popover", A);
    }
    function S() {
      Bn(document, "keydown", _), Bn(document, "click", E), Bn(document, "show-popover", $), Bn(document, "hide-popover", O), Bn(document, "toggle-popover", A);
    }
    function k(H) {
      t("before-show", H);
    }
    function R(H) {
      s.force = !1, t("after-show", H);
    }
    function N(H) {
      t("before-hide", H);
    }
    function U(H) {
      s.force = !1, d(), t("after-hide", H);
    }
    function J(H) {
      H.stopPropagation();
    }
    function z() {
      s.isHovered = !0, s.isInteractive && ["hover", "hover-focus"].includes(s.visibility) && b();
    }
    function ee() {
      if (s.isHovered = !1, !a)
        return;
      const H = a.state.elements.reference;
      s.autoHide && !s.isFocused && (!H || H !== document.activeElement) && ["hover", "hover-focus"].includes(s.visibility) && m();
    }
    function le() {
      s.isFocused = !0, s.isInteractive && ["focus", "hover-focus"].includes(s.visibility) && b();
    }
    function ke(H) {
      ["focus", "hover-focus"].includes(s.visibility) && (!H.relatedTarget || !oo(r.value, H.relatedTarget)) && (s.isFocused = !1, !s.isHovered && s.autoHide && m());
    }
    function ve() {
      o != null && (o.disconnect(), o = null);
    }
    return _e(
      () => r.value,
      (H) => {
        ve(), H && (o = new ResizeObserver(() => {
          a && a.update();
        }), o.observe(H));
      }
    ), _e(() => s.placement, i, {
      immediate: !0
    }), Gt(() => {
      x();
    }), qn(() => {
      d(), ve(), S();
    }), {
      ...Ur(s),
      popoverRef: r,
      alignment: u,
      hide: m,
      setupPopper: f,
      beforeEnter: k,
      afterEnter: R,
      beforeLeave: N,
      afterLeave: U,
      onClick: J,
      onMouseOver: z,
      onMouseLeave: ee,
      onFocusIn: le,
      onFocusOut: ke
    };
  }
});
function fM(e, t, n, r, o, a) {
  return T(), I("div", {
    class: xe(["vc-popover-content-wrapper", { "is-interactive": e.isInteractive }]),
    ref: "popoverRef",
    onClick: t[0] || (t[0] = (...s) => e.onClick && e.onClick(...s)),
    onMouseover: t[1] || (t[1] = (...s) => e.onMouseOver && e.onMouseOver(...s)),
    onMouseleave: t[2] || (t[2] = (...s) => e.onMouseLeave && e.onMouseLeave(...s)),
    onFocusin: t[3] || (t[3] = (...s) => e.onFocusIn && e.onFocusIn(...s)),
    onFocusout: t[4] || (t[4] = (...s) => e.onFocusOut && e.onFocusOut(...s))
  }, [
    ce(ui, {
      name: `vc-${e.transition}`,
      appear: "",
      onBeforeEnter: e.beforeEnter,
      onAfterEnter: e.afterEnter,
      onBeforeLeave: e.beforeLeave,
      onAfterLeave: e.afterLeave
    }, {
      default: he(() => [
        e.isVisible ? (T(), I("div", Qe({
          key: 0,
          tabindex: "-1",
          class: `vc-popover-content direction-${e.direction}`
        }, e.$attrs), [
          Me(e.$slots, "default", {
            direction: e.direction,
            alignment: e.alignment,
            data: e.data,
            hide: e.hide
          }, () => [
            jr(ae(e.data), 1)
          ]),
          M("span", {
            class: xe([
              "vc-popover-caret",
              `direction-${e.direction}`,
              `align-${e.alignment}`
            ])
          }, null, 2)
        ], 16)) : re("", !0)
      ]),
      _: 3
    }, 8, ["name", "onBeforeEnter", "onAfterEnter", "onBeforeLeave", "onAfterLeave"])
  ], 34);
}
const sl = /* @__PURE__ */ xn(dM, [["render", fM]]), pM = {
  value: { type: Object, required: !0 }
}, mM = ["input"], vM = "__vc_calendar_nav_context__";
function hM(e, { emit: t }) {
  const n = B(!0), r = B(0), o = B(0), a = 12, s = B(null), { locale: i, masks: l, canMove: c, getDateAddress: u } = gr();
  function d() {
    setTimeout(() => {
      if (s.value == null)
        return;
      const oe = s.value.querySelector(
        ".vc-nav-item:not(:disabled)"
      );
      oe && oe.focus();
    }, 10);
  }
  function f(oe, Se) {
    t("input", { month: oe, year: Se }, { position: k.value });
  }
  function p(oe) {
    r.value = oe, n.value = !0, d();
  }
  function v(oe) {
    const { year: Se } = u(/* @__PURE__ */ new Date()), G = oe * a, X = G + a, se = [];
    for (let te = G; te < X; te += 1) {
      let Y = !1;
      for (let ne = 1; ne < 12 && (Y = c({ month: ne, year: te }, { position: k.value }), !Y); ne++)
        ;
      se.push({
        year: te,
        id: te.toString(),
        label: te.toString(),
        ariaLabel: te.toString(),
        isActive: te === S.value,
        isCurrent: te === Se,
        isDisabled: !Y,
        click: () => p(te)
      });
    }
    return se;
  }
  function g(oe) {
    const { month: Se, year: G } = u(/* @__PURE__ */ new Date());
    return _p().map((X, se) => {
      const te = se + 1;
      return {
        month: te,
        year: oe,
        id: `${oe}.${Ve(te, 2)}`,
        label: i.value.formatDate(X, l.value.navMonths),
        ariaLabel: i.value.formatDate(X, "MMMM YYYY"),
        isActive: te === x.value && oe === S.value,
        isCurrent: te === Se && oe === G,
        isDisabled: !c(
          { month: te, year: oe },
          { position: k.value }
        ),
        click: () => f(te, oe)
      };
    });
  }
  function b(oe) {
    return Math.floor(oe / a);
  }
  function m() {
    n.value = !n.value;
  }
  function y() {
    ke.value && (n.value && _(), O());
  }
  function E() {
    me.value && (n.value && $(), A());
  }
  function _() {
    r.value--;
  }
  function $() {
    r.value++;
  }
  function O() {
    o.value--;
  }
  function A() {
    o.value++;
  }
  const x = C(() => {
    var oe;
    return ((oe = e.value) == null ? void 0 : oe.month) || 0;
  }), S = C(() => {
    var oe;
    return ((oe = e.value) == null ? void 0 : oe.year) || 0;
  }), k = C(() => {
    var oe;
    return ((oe = e.value) == null ? void 0 : oe.position) || 1;
  }), R = C(() => g(r.value)), N = C(() => v(o.value)), U = C(() => op(N.value.map((oe) => oe.year))), J = C(() => $r(N.value.map((oe) => oe.year))), z = C(() => n.value ? r.value : `${U.value} - ${J.value}`), ee = C(
    () => g(r.value - 1).some((oe) => !oe.isDisabled)
  ), le = C(
    () => v(o.value - 1).some((oe) => !oe.isDisabled)
  ), ke = C(
    () => n.value ? ee.value : le.value
  ), ve = C(
    () => g(r.value + 1).some((oe) => !oe.isDisabled)
  ), H = C(
    () => v(o.value + 1).some((oe) => !oe.isDisabled)
  ), me = C(
    () => n.value ? ve.value : H.value
  ), Ie = C(
    () => n.value ? R.value : N.value
  );
  _e(
    () => S.value,
    () => {
      r.value = S.value;
    }
  ), _e(
    () => r.value,
    (oe) => {
      o.value = b(oe);
    }
  ), r.value = S.value, Gt(() => d());
  const He = {
    navContainer: s,
    title: z,
    monthMode: n,
    currentMonth: x,
    currentYear: S,
    activeItems: Ie,
    prevItemsEnabled: ke,
    nextItemsEnabled: me,
    toggleMode: m,
    movePrev: y,
    moveNext: E,
    movePrevYear: _,
    moveNextYear: $,
    movePrevYearGroup: O,
    moveNextYearGroup: A
  };
  return nn(vM, He), He;
}
const gM = { class: "vc-nav-header" }, yM = ["disabled"], bM = ["disabled"], _M = { class: "vc-nav-items" }, wM = ["data-id", "aria-label", "disabled", "onClick", "onKeydown"], EM = /* @__PURE__ */ de({
  __name: "CalendarNav",
  props: pM,
  emits: mM,
  setup(e, { emit: t }) {
    const n = e, {
      navContainer: r,
      title: o,
      prevItemsEnabled: a,
      nextItemsEnabled: s,
      activeItems: i,
      toggleMode: l,
      movePrev: c,
      moveNext: u
    } = hM(n, { emit: t });
    return (d, f) => (T(), I("div", {
      class: "vc-nav-container",
      ref_key: "navContainer",
      ref: r
    }, [
      M("div", gM, [
        M("button", {
          type: "button",
          class: "vc-nav-arrow is-left vc-focus",
          disabled: !h(a),
          onClick: f[0] || (f[0] = //@ts-ignore
          (...p) => h(c) && h(c)(...p)),
          onKeydown: f[1] || (f[1] = (p) => h(ro)(p, h(c)))
        }, [
          ce(Nr, {
            name: "nav-prev-button",
            move: h(c),
            disabled: !h(a)
          }, {
            default: he(() => [
              ce(Br, {
                name: "ChevronLeft",
                width: "22px",
                height: "24px"
              })
            ]),
            _: 1
          }, 8, ["move", "disabled"])
        ], 40, yM),
        M("button", {
          type: "button",
          class: "vc-nav-title vc-focus",
          onClick: f[2] || (f[2] = //@ts-ignore
          (...p) => h(l) && h(l)(...p)),
          onKeydown: f[3] || (f[3] = (p) => h(ro)(p, h(l)))
        }, ae(h(o)), 33),
        M("button", {
          type: "button",
          class: "vc-nav-arrow is-right vc-focus",
          disabled: !h(s),
          onClick: f[4] || (f[4] = //@ts-ignore
          (...p) => h(u) && h(u)(...p)),
          onKeydown: f[5] || (f[5] = (p) => h(ro)(p, h(u)))
        }, [
          ce(Nr, {
            name: "nav-next-button",
            move: h(u),
            disabled: !h(s)
          }, {
            default: he(() => [
              ce(Br, {
                name: "ChevronRight",
                width: "22px",
                height: "24px"
              })
            ]),
            _: 1
          }, 8, ["move", "disabled"])
        ], 40, bM)
      ]),
      M("div", _M, [
        (T(!0), I(Ee, null, Ue(h(i), (p) => (T(), I("button", {
          key: p.label,
          type: "button",
          "data-id": p.id,
          "aria-label": p.ariaLabel,
          class: xe(["vc-nav-item vc-focus", [
            p.isActive ? "is-active" : p.isCurrent ? "is-current" : ""
          ]]),
          disabled: p.isDisabled,
          onClick: p.click,
          onKeydown: (v) => h(ro)(v, p.click)
        }, ae(p.label), 43, wM))), 128))
      ])
    ], 512));
  }
}), OM = {
  __name: "CalendarNavPopover",
  setup(e) {
    const { navPopoverId: t, color: n, displayMode: r, navPopoverRef: o, move: a } = gr();
    return (s, i) => (T(), De(sl, {
      id: h(t),
      class: xe(["vc-nav-popover-container", `vc-${h(n)}`, `vc-${h(r)}`]),
      ref_key: "navPopoverRef",
      ref: o
    }, {
      default: he(({ data: l }) => [
        ce(EM, {
          value: l.page,
          onInput: h(a)
        }, null, 8, ["value", "onInput"])
      ]),
      _: 1
    }, 8, ["id", "class"]));
  }
}, DM = de({
  name: "PopoverRow",
  props: {
    attribute: { type: Object, required: !0 }
  },
  setup(e) {
    return {
      indicator: C(() => {
        const { content: n, highlight: r, dot: o, bar: a, popover: s } = e.attribute;
        return s && s.hideIndicator ? null : n ? {
          class: `vc-bar vc-day-popover-row-bar vc-attr vc-${n.base.color}`
        } : r ? {
          class: `vc-highlight-bg-solid vc-day-popover-row-highlight vc-attr vc-${r.base.color}`
        } : o ? {
          class: `vc-dot vc-attr vc-${o.base.color}`
        } : a ? {
          class: `vc-bar vc-day-popover-row-bar vc-attr vc-${a.base.color}`
        } : null;
      })
    };
  }
}), kM = { class: "vc-day-popover-row" }, $M = {
  key: 0,
  class: "vc-day-popover-row-indicator"
}, TM = { class: "vc-day-popover-row-label" };
function AM(e, t, n, r, o, a) {
  return T(), I("div", kM, [
    e.indicator ? (T(), I("div", $M, [
      M("span", {
        class: xe(e.indicator.class)
      }, null, 2)
    ])) : re("", !0),
    M("div", TM, [
      Me(e.$slots, "default", {}, () => [
        jr(ae(e.attribute.popover ? e.attribute.popover.label : "No content provided"), 1)
      ])
    ])
  ]);
}
const xM = /* @__PURE__ */ xn(DM, [["render", AM]]), CM = { class: "vc-day-popover-container" }, NM = {
  key: 0,
  class: "vc-day-popover-header"
}, PM = /* @__PURE__ */ de({
  __name: "CalendarDayPopover",
  setup(e) {
    const { dayPopoverId: t, displayMode: n, color: r, masks: o, locale: a } = gr();
    function s(l, c) {
      return a.value.formatDate(l, c);
    }
    function i(l) {
      return a.value.formatDate(l.date, o.value.dayPopover);
    }
    return (l, c) => (T(), De(sl, {
      id: h(t),
      class: xe([`vc-${h(r)}`, `vc-${h(n)}`])
    }, {
      default: he(({ data: { day: u, attributes: d }, hide: f }) => [
        Me(l.$slots, "default", {
          day: u,
          dayTitle: i(u),
          attributes: d,
          format: s,
          masks: h(o),
          hide: f
        }, () => [
          M("div", CM, [
            h(o).dayPopover ? (T(), I("div", NM, ae(i(u)), 1)) : re("", !0),
            (T(!0), I(Ee, null, Ue(d, (p) => (T(), De(xM, {
              key: p.key,
              attribute: p
            }, null, 8, ["attribute"]))), 128))
          ])
        ])
      ]),
      _: 3
    }, 8, ["id", "class"]));
  }
}), SM = de({
  name: "Calendar",
  components: {
    CalendarHeader: Sp,
    CalendarPane: cM,
    CalendarNavPopover: OM,
    CalendarDayPopover: PM
  },
  emits: GS,
  props: WS,
  setup(e, { emit: t, slots: n }) {
    return zS(e, { emit: t, slots: n });
  }
}), MM = { class: "vc-pane-header-wrapper" };
function IM(e, t, n, r, o, a) {
  const s = tr("CalendarHeader"), i = tr("CalendarPane"), l = tr("CalendarDayPopover"), c = tr("CalendarNavPopover");
  return T(), I(Ee, null, [
    M("div", Qe({ "data-helptext": "Press the arrow keys to navigate by day, Home and End to navigate to week ends, PageUp and PageDown to navigate by month, Alt+PageUp and Alt+PageDown to navigate by year" }, e.$attrs, {
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
      onMouseup: t[0] || (t[0] = Oa(() => {
      }, ["prevent"])),
      ref: "containerRef"
    }), [
      M("div", {
        class: xe(["vc-pane-container", { "in-transition": e.inTransition }])
      }, [
        M("div", MM, [
          e.firstPage ? (T(), De(s, {
            key: 0,
            page: e.firstPage,
            "is-lg": "",
            "hide-title": ""
          }, null, 8, ["page"])) : re("", !0)
        ]),
        ce(ui, {
          name: `vc-${e.transitionName}`,
          onBeforeEnter: e.onTransitionBeforeEnter,
          onAfterEnter: e.onTransitionAfterEnter
        }, {
          default: he(() => [
            (T(), I("div", {
              key: e.pages[0].id,
              class: "vc-pane-layout",
              style: Hn({
                gridTemplateColumns: `repeat(${e.columns}, 1fr)`
              })
            }, [
              (T(!0), I(Ee, null, Ue(e.pages, (u) => (T(), De(i, {
                key: u.id,
                page: u
              }, null, 8, ["page"]))), 128))
            ], 4))
          ]),
          _: 1
        }, 8, ["name", "onBeforeEnter", "onAfterEnter"]),
        Me(e.$slots, "footer")
      ], 2)
    ], 16),
    ce(l, null, {
      default: he((u) => [
        Me(e.$slots, "day-popover", Pr(li(u)))
      ]),
      _: 3
    }),
    ce(c)
  ], 64);
}
const LM = /* @__PURE__ */ xn(SM, [["render", IM]]), RM = { class: "vc-base-select" }, FM = ["value"], VM = ["value", "disabled"], BM = {
  inheritAttrs: !1
}, va = /* @__PURE__ */ Object.assign(BM, {
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
    return (t, n) => (T(), I("div", RM, [
      e.showIcon ? (T(), De(Br, {
        key: 0,
        name: "ChevronDown",
        size: e.small ? "16" : "18"
      }, null, 8, ["size"])) : re("", !0),
      M("select", Qe(t.$attrs, {
        value: e.modelValue,
        class: ["vc-focus", {
          "vc-has-icon": e.showIcon,
          "vc-align-right": e.alignRight,
          "vc-align-left": e.alignLeft,
          "vc-small": e.small
        }],
        onChange: n[0] || (n[0] = (r) => t.$emit("update:modelValue", r.target.value))
      }), [
        (T(!0), I(Ee, null, Ue(e.options, (r) => (T(), I("option", {
          key: r.value,
          value: r.value,
          disabled: r.disabled
        }, ae(r.label), 9, VM))), 128))
      ], 16, FM)
    ]));
  }
}), Mp = "__vc_date_picker_context__", YM = {
  ...Tp,
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
    default: () => Kn("datePicker.updateOnInput")
  },
  inputDebounce: {
    type: Number,
    default: () => Kn("datePicker.inputDebounce")
  },
  popover: {
    type: [Boolean, Object],
    default: !0
  },
  dragAttribute: Object,
  selectAttribute: Object,
  attributes: [Object, Array]
}, HM = [
  "update:modelValue",
  "drag",
  "dayclick",
  "daykeydown",
  "popover-will-show",
  "popover-did-show",
  "popover-will-hide",
  "popover-did-hide"
];
function UM(e, t) {
  const n = Ap(e), { locale: r, masks: o, disabledAttribute: a } = n, { emit: s } = t, i = B(!1), l = B(Eo()), c = B(null), u = B(null), d = B(["", ""]), f = B(null), p = B(null);
  let v, g, b = !0;
  const m = C(() => e.isRange || e.modelModifiers.range === !0), y = C(
    () => m.value && c.value != null ? c.value.start : null
  ), E = C(
    () => m.value && c.value != null ? c.value.end : null
  ), _ = C(() => e.mode.toLowerCase() === "date"), $ = C(
    () => e.mode.toLowerCase() === "datetime"
  ), O = C(() => e.mode.toLowerCase() === "time"), A = C(() => !!u.value), x = C(() => {
    let P = "date";
    e.modelModifiers.number && (P = "number"), e.modelModifiers.string && (P = "string");
    const K = o.value.modelValue || "iso";
    return He({ type: P, mask: K });
  }), S = C(
    () => qe(u.value ?? c.value)
  ), k = C(() => O.value ? e.is24hr ? o.value.inputTime24hr : o.value.inputTime : $.value ? e.is24hr ? o.value.inputDateTime24hr : o.value.inputDateTime : o.value.input), R = C(() => /[Hh]/g.test(k.value)), N = C(
    () => /[dD]{1,2}|Do|W{1,4}|M{1,4}|YY(?:YY)?/g.test(k.value)
  ), U = C(() => {
    if (R.value && N.value)
      return "dateTime";
    if (N.value)
      return "date";
    if (R.value)
      return "time";
  }), J = C(() => {
    var P;
    const K = ((P = f.value) == null ? void 0 : P.$el.previousElementSibling) ?? void 0;
    return Sa({}, e.popover, Kn("datePicker.popover"), {
      target: K
    });
  }), z = C(
    () => Np({
      ...J.value,
      id: l.value
    })
  ), ee = C(() => m.value ? {
    start: d.value[0],
    end: d.value[1]
  } : d.value[0]), le = C(() => {
    const P = ["start", "end"].map((K) => ({
      input: Z(K),
      change: ie(K),
      keyup: Oe,
      ...e.popover && z.value
    }));
    return m.value ? {
      start: P[0],
      end: P[1]
    } : P[0];
  }), ke = C(() => {
    if (!G(c.value))
      return null;
    const P = {
      key: "select-drag",
      ...e.selectAttribute,
      dates: c.value,
      pinPage: !0
    }, { dot: K, bar: fe, highlight: Ce, content: et } = P;
    return !K && !fe && !Ce && !et && (P.highlight = !0), P;
  }), ve = C(() => {
    if (!m.value || !G(u.value))
      return null;
    const P = {
      key: "select-drag",
      ...e.dragAttribute,
      dates: u.value
    }, { dot: K, bar: fe, highlight: Ce, content: et } = P;
    return !K && !fe && !Ce && !et && (P.highlight = {
      startEnd: {
        fillMode: "outline"
      }
    }), P;
  }), H = C(() => {
    const P = Pt(e.attributes) ? [...e.attributes] : [];
    return ve.value ? P.unshift(ve.value) : ke.value && P.unshift(ke.value), P;
  }), me = C(() => He(
    e.rules === "auto" ? Ie() : e.rules ?? {}
  ));
  function Ie() {
    const P = {
      ms: [0, 999],
      sec: [0, 59],
      min: [0, 59],
      hr: [0, 23]
    }, K = _.value ? 0 : e.timeAccuracy;
    return [0, 1].map((fe) => {
      switch (K) {
        case 0:
          return {
            hours: P.hr[fe],
            minutes: P.min[fe],
            seconds: P.sec[fe],
            milliseconds: P.ms[fe]
          };
        case 1:
          return {
            minutes: P.min[fe],
            seconds: P.sec[fe],
            milliseconds: P.ms[fe]
          };
        case 3:
          return { milliseconds: P.ms[fe] };
        case 4:
          return {};
        default:
          return { seconds: P.sec[fe], milliseconds: P.ms[fe] };
      }
    });
  }
  function He(P) {
    return Pt(P) ? P.length === 1 ? [P[0], P[0]] : P : [P, P];
  }
  function oe(P) {
    return He(P).map(
      (K, fe) => ({
        ...K,
        rules: me.value[fe]
      })
    );
  }
  function Se(P) {
    return Wt(P) ? !isNaN(P) : xr(P) ? !isNaN(P.getTime()) : Qt(P) ? P !== "" : P != null;
  }
  function G(P) {
    return m.value ? $n(P) && Se(P.start) && Se(P.end) : Se(P);
  }
  function X(P, K) {
    const fe = xr(P), Ce = xr(K);
    return !fe && !Ce ? !0 : fe !== Ce ? !1 : P.getTime() === K.getTime();
  }
  function se(P, K) {
    if (m.value) {
      const fe = G(P), Ce = G(K);
      return !fe && !Ce ? !0 : fe !== Ce ? !1 : X(P.start, K.start) && X(P.end, K.end);
    }
    return X(P, K);
  }
  function te(P) {
    return !G(P) || !a.value ? !1 : a.value.intersectsRange(r.value.range(P));
  }
  function Y(P, K, fe, Ce) {
    if (!G(P))
      return null;
    if (m.value) {
      const et = r.value.toDate(P.start, {
        ...K[0],
        fillDate: y.value ?? void 0,
        patch: fe
      }), Bt = r.value.toDate(P.end, {
        ...K[1],
        fillDate: E.value ?? void 0,
        patch: fe
      });
      return Jn({ start: et, end: Bt }, Ce);
    }
    return r.value.toDateOrNull(P, {
      ...K[0],
      fillDate: c.value,
      patch: fe
    });
  }
  function ne(P, K) {
    return m.value ? G(P) ? {
      start: r.value.fromDate(P.start, K[0]),
      end: r.value.fromDate(P.end, K[1])
    } : null : r.value.fromDate(P, K[0]);
  }
  function we(P, K = {}) {
    return clearTimeout(v), new Promise((fe) => {
      const { debounce: Ce = 0, ...et } = K;
      Ce > 0 ? v = window.setTimeout(() => {
        fe(D(P, et));
      }, Ce) : fe(D(P, et));
    });
  }
  function D(P, {
    config: K = x.value,
    patch: fe = "dateTime",
    clearIfEqual: Ce = !1,
    formatInput: et = !0,
    hidePopover: Bt = !1,
    dragging: pt = A.value,
    targetPriority: br,
    moveToValue: sa = !1
  } = {}) {
    const Wa = oe(K);
    let Tt = Y(
      P,
      Wa,
      fe,
      br
    );
    if (te(Tt)) {
      if (pt)
        return null;
      Tt = c.value, Bt = !1;
    } else
      Tt == null && e.isRequired ? Tt = c.value : (
        // Clear value if same value was passed
        Tt != null && se(c.value, Tt) && Ce && (Tt = null)
      );
    const ia = pt ? u : c, os = !se(ia.value, Tt);
    ia.value = Tt, pt || (u.value = null);
    const pl = ne(
      Tt,
      x.value
    );
    return os && (b = !1, s(pt ? "drag" : "update:modelValue", pl), Et(() => b = !0)), Bt && !pt && Ft(), et && w(), sa && Et(() => j(br ?? "start")), pl;
  }
  function w() {
    Et(() => {
      const P = oe({
        type: "string",
        mask: k.value
      }), K = ne(
        u.value || c.value,
        P
      );
      m.value ? d.value = [K && K.start, K && K.end] : d.value = [K, ""];
    });
  }
  function L(P, K, fe) {
    d.value.splice(K === "start" ? 0 : 1, 1, P);
    const Ce = m.value ? {
      start: d.value[0],
      end: d.value[1] || d.value[0]
    } : P, et = {
      type: "string",
      mask: k.value
    };
    we(Ce, {
      ...fe,
      config: et,
      patch: U.value,
      targetPriority: K,
      moveToValue: !0
    });
  }
  function Z(P) {
    return (K) => {
      e.updateOnInput && L(K.currentTarget.value, P, {
        formatInput: !1,
        hidePopover: !1,
        debounce: e.inputDebounce
      });
    };
  }
  function ie(P) {
    return (K) => {
      L(K.currentTarget.value, P, {
        formatInput: !0,
        hidePopover: !1
      });
    };
  }
  function Oe(P) {
    P.key === "Escape" && we(c.value, {
      formatInput: !0,
      hidePopover: !0
    });
  }
  function qe(P) {
    return m.value ? [
      P && P.start ? r.value.getDateParts(P.start) : null,
      P && P.end ? r.value.getDateParts(P.end) : null
    ] : [P ? r.value.getDateParts(P) : null];
  }
  function We() {
    u.value = null, w();
  }
  function $t(P) {
    s("popover-will-show", P);
  }
  function Zt(P) {
    s("popover-did-show", P);
  }
  function Fe(P) {
    We(), s("popover-will-hide", P);
  }
  function F(P) {
    s("popover-did-hide", P);
  }
  function W(P) {
    const K = {
      patch: "date",
      formatInput: !0,
      hidePopover: !0
    };
    if (m.value) {
      const fe = !A.value;
      fe ? g = { start: P.startDate, end: P.endDate } : g != null && (g.end = P.date), we(g, {
        ...K,
        dragging: fe
      });
    } else
      we(P.date, {
        ...K,
        clearIfEqual: !e.isRequired
      });
  }
  function Ze(P, K) {
    W(P), s("dayclick", P, K);
  }
  function Xe(P, K) {
    switch (K.key) {
      case " ":
      case "Enter": {
        W(P), K.preventDefault();
        break;
      }
      case "Escape":
        Ft();
    }
    s("daykeydown", P, K);
  }
  function Xt(P, K) {
    !A.value || g == null || (g.end = P.date, we(Jn(g), {
      patch: "date",
      formatInput: !0
    }));
  }
  function Pn(P = {}) {
    ti({
      ...J.value,
      ...P,
      isInteractive: !0,
      id: l.value
    });
  }
  function Ft(P = {}) {
    Io({
      hideDelay: 10,
      force: !0,
      ...J.value,
      ...P,
      id: l.value
    });
  }
  function Vt(P) {
    Cp({
      ...J.value,
      ...P,
      isInteractive: !0,
      id: l.value
    });
  }
  function Jn(P, K) {
    const { start: fe, end: Ce } = P;
    if (fe > Ce)
      switch (K) {
        case "start":
          return { start: fe, end: fe };
        case "end":
          return { start: Ce, end: Ce };
        default:
          return { start: Ce, end: fe };
      }
    return { start: fe, end: Ce };
  }
  function yr(P) {
    if (G(c.value)) {
      const K = m.value ? P ? y.value : E.value : c.value;
      return wp(K, "monthly", r.value);
    }
    return null;
  }
  async function as(P, K = {}) {
    return p.value == null ? !1 : p.value.move(P, K);
  }
  async function ja(P, K = {}) {
    return p.value == null ? !1 : p.value.moveBy(P, K);
  }
  async function j(P, K = {}) {
    if (p.value == null)
      return !1;
    const { firstPage: fe, lastPage: Ce, move: et } = p.value, Bt = P !== "end", pt = yr(Bt), br = Bt ? 1 : -1;
    return !pt || Op(pt, fe, Ce) ? !1 : et(pt, {
      position: br,
      ...K
    });
  }
  _e(
    () => e.isRange,
    (P) => {
      P && console.warn(
        "The `is-range` prop will be deprecated in future releases. Please use the `range` modifier."
      );
    },
    { immediate: !0 }
  ), _e(
    () => k.value,
    () => w()
  ), _e(
    () => e.modelValue,
    (P) => {
      b && D(P, {
        formatInput: !0,
        hidePopover: !1
      });
    }
  ), _e(
    () => me.value,
    () => {
      $n(e.rules) && D(e.modelValue, {
        formatInput: !0,
        hidePopover: !1
      });
    }
  ), _e(
    () => e.timezone,
    () => {
      D(c.value, { formatInput: !0 });
    }
  );
  const q = He(x.value);
  c.value = Y(e.modelValue, q, "dateTime"), Gt(() => {
    D(e.modelValue, {
      formatInput: !0,
      hidePopover: !1
    });
  }), Et(() => i.value = !0);
  const ye = {
    ...n,
    showCalendar: i,
    datePickerPopoverId: l,
    popoverRef: f,
    popoverEvents: z,
    calendarRef: p,
    isRange: m,
    isTimeMode: O,
    isDateTimeMode: $,
    is24hr: ss(e, "is24hr"),
    hideTimeHeader: ss(e, "hideTimeHeader"),
    timeAccuracy: ss(e, "timeAccuracy"),
    isDragging: A,
    inputValue: ee,
    inputEvents: le,
    dateParts: S,
    attributes: H,
    rules: me,
    move: as,
    moveBy: ja,
    moveToValue: j,
    updateValue: we,
    showPopover: Pn,
    hidePopover: Ft,
    togglePopover: Vt,
    onDayClick: Ze,
    onDayKeydown: Xe,
    onDayMouseEnter: Xt,
    onPopoverBeforeShow: $t,
    onPopoverAfterShow: Zt,
    onPopoverBeforeHide: Fe,
    onPopoverAfterHide: F
  };
  return nn(Mp, ye), ye;
}
function jM() {
  const e = Be(Mp);
  if (e)
    return e;
  throw new Error(
    "DatePicker context missing. Please verify this component is nested within a valid context provider."
  );
}
const WM = [
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
], GM = [
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
function zM(e) {
  const t = jM(), {
    locale: n,
    isRange: r,
    isTimeMode: o,
    dateParts: a,
    rules: s,
    is24hr: i,
    hideTimeHeader: l,
    timeAccuracy: c,
    updateValue: u
  } = t;
  function d(N) {
    N = Object.assign(p.value, N);
    let U = null;
    if (r.value) {
      const J = f.value ? N : a.value[0], z = f.value ? a.value[1] : N;
      U = { start: J, end: z };
    } else
      U = N;
    u(U, {
      patch: "time",
      targetPriority: f.value ? "start" : "end",
      moveToValue: !0
    });
  }
  const f = C(() => e.position === 0), p = C(
    () => a.value[e.position] || { isValid: !1 }
  ), v = C(() => hp(p.value)), g = C(() => !!p.value.isValid), b = C(() => !l.value && g.value), m = C(() => {
    if (!v.value)
      return null;
    let N = n.value.toDate(p.value);
    return p.value.hours === 24 && (N = new Date(N.getTime() - 1)), N;
  }), y = C({
    get() {
      return p.value.hours;
    },
    set(N) {
      d({ hours: N });
    }
  }), E = C({
    get() {
      return p.value.minutes;
    },
    set(N) {
      d({ minutes: N });
    }
  }), _ = C({
    get() {
      return p.value.seconds;
    },
    set(N) {
      d({ seconds: N });
    }
  }), $ = C({
    get() {
      return p.value.milliseconds;
    },
    set(N) {
      d({ milliseconds: N });
    }
  }), O = C({
    get() {
      return p.value.hours < 12;
    },
    set(N) {
      N = String(N).toLowerCase() == "true";
      let U = y.value;
      N && U >= 12 ? U -= 12 : !N && U < 12 && (U += 12), d({ hours: U });
    }
  }), A = C(
    () => kS(p.value, s.value[e.position])
  ), x = C(() => WM.filter(
    (N) => A.value.hours.some((U) => U.value === N.value)
  )), S = C(() => GM.filter(
    (N) => A.value.hours.some((U) => U.value === N.value)
  )), k = C(() => i.value ? A.value.hours : O.value ? x.value : S.value), R = C(() => {
    const N = [];
    return bn(x.value) && N.push({ value: !0, label: "AM" }), bn(S.value) && N.push({ value: !1, label: "PM" }), N;
  });
  return {
    ...t,
    showHeader: b,
    timeAccuracy: c,
    parts: p,
    isValid: g,
    date: m,
    hours: y,
    minutes: E,
    seconds: _,
    milliseconds: $,
    options: A,
    hourOptions: k,
    isAM: O,
    isAMOptions: R,
    is24hr: i
  };
}
const KM = {
  key: 0,
  class: "vc-time-header"
}, qM = { class: "vc-time-weekday" }, ZM = { class: "vc-time-month" }, XM = { class: "vc-time-day" }, JM = { class: "vc-time-year" }, QM = { class: "vc-time-select-group" }, eI = /* @__PURE__ */ M("span", { class: "vc-time-colon" }, ":", -1), tI = /* @__PURE__ */ M("span", { class: "vc-time-colon" }, ":", -1), nI = /* @__PURE__ */ M("span", { class: "vc-time-decimal" }, ".", -1), rI = /* @__PURE__ */ de({
  __name: "TimePicker",
  props: {
    position: null
  },
  setup(e, { expose: t }) {
    const r = zM(e);
    t(r);
    const {
      locale: o,
      isValid: a,
      date: s,
      hours: i,
      minutes: l,
      seconds: c,
      milliseconds: u,
      options: d,
      hourOptions: f,
      isTimeMode: p,
      isAM: v,
      isAMOptions: g,
      is24hr: b,
      showHeader: m,
      timeAccuracy: y
    } = r;
    return (E, _) => (T(), I("div", {
      class: xe(["vc-time-picker", [{ "vc-invalid": !h(a), "vc-attached": !h(p) }]])
    }, [
      Me(E.$slots, "time-header", {}, () => [
        h(m) && h(s) ? (T(), I("div", KM, [
          M("span", qM, ae(h(o).formatDate(h(s), "WWW")), 1),
          M("span", ZM, ae(h(o).formatDate(h(s), "MMM")), 1),
          M("span", XM, ae(h(o).formatDate(h(s), "D")), 1),
          M("span", JM, ae(h(o).formatDate(h(s), "YYYY")), 1)
        ])) : re("", !0)
      ]),
      M("div", QM, [
        ce(Br, {
          name: "Clock",
          size: "17"
        }),
        ce(va, {
          modelValue: h(i),
          "onUpdate:modelValue": _[0] || (_[0] = ($) => tt(i) ? i.value = $ : null),
          modelModifiers: { number: !0 },
          options: h(f),
          "align-right": ""
        }, null, 8, ["modelValue", "options"]),
        h(y) > 1 ? (T(), I(Ee, { key: 0 }, [
          eI,
          ce(va, {
            modelValue: h(l),
            "onUpdate:modelValue": _[1] || (_[1] = ($) => tt(l) ? l.value = $ : null),
            modelModifiers: { number: !0 },
            options: h(d).minutes,
            "align-left": h(y) === 2
          }, null, 8, ["modelValue", "options", "align-left"])
        ], 64)) : re("", !0),
        h(y) > 2 ? (T(), I(Ee, { key: 1 }, [
          tI,
          ce(va, {
            modelValue: h(c),
            "onUpdate:modelValue": _[2] || (_[2] = ($) => tt(c) ? c.value = $ : null),
            modelModifiers: { number: !0 },
            options: h(d).seconds,
            "align-left": h(y) === 3
          }, null, 8, ["modelValue", "options", "align-left"])
        ], 64)) : re("", !0),
        h(y) > 3 ? (T(), I(Ee, { key: 2 }, [
          nI,
          ce(va, {
            modelValue: h(u),
            "onUpdate:modelValue": _[3] || (_[3] = ($) => tt(u) ? u.value = $ : null),
            modelModifiers: { number: !0 },
            options: h(d).milliseconds,
            "align-left": ""
          }, null, 8, ["modelValue", "options"])
        ], 64)) : re("", !0),
        h(b) ? re("", !0) : (T(), De(va, {
          key: 3,
          modelValue: h(v),
          "onUpdate:modelValue": _[4] || (_[4] = ($) => tt(v) ? v.value = $ : null),
          options: h(g)
        }, null, 8, ["modelValue", "options"]))
      ])
    ], 2));
  }
}), Ip = de({
  name: "DatePicker",
  inheritAttrs: !1,
  emits: HM,
  props: YM,
  setup(e, t) {
    const n = UM(e, t), { slots: r, attrs: o } = t, {
      isTimeMode: a,
      isRange: s,
      isDateTimeMode: i,
      color: l,
      displayMode: c,
      dateParts: u,
      datePickerPopoverId: d,
      attributes: f,
      calendarRef: p,
      popoverRef: v,
      showCalendar: g,
      onDayClick: b,
      onDayMouseEnter: m,
      onDayKeydown: y,
      onPopoverBeforeShow: E,
      onPopoverAfterShow: _,
      onPopoverBeforeHide: $,
      onPopoverAfterHide: O
    } = n;
    t.expose(n);
    const A = Ia(sp(n, "calendarRef", "popoverRef")), x = () => (s.value ? [0, 1] : [0]).map((N) => jt(rI, { position: N })), S = () => {
      if (!u.value)
        return null;
      const R = i.value ? { ...r, footer: x } : r;
      return jt(
        LM,
        {
          ...o,
          attributes: f.value,
          ref: p,
          onDayclick: b,
          onDaymouseenter: m,
          onDaykeydown: y
        },
        R
      );
    }, k = () => {
      if (a.value)
        return jt(
          "div",
          {
            class: `vc-container vc-bordered vc-${l.value} vc-${c.value}`
          },
          [x()]
        );
      if (g.value)
        return S();
    };
    return r.default ? () => [
      // Popover trigger
      r.default(A),
      // Popover content
      jt(
        sl,
        {
          id: d.value,
          placement: "bottom-start",
          class: `vc-date-picker-content vc-${l.value} vc-${c.value}`,
          ref: v,
          "onBefore-show": E,
          "onAfter-show": _,
          "onBefore-hide": $,
          "onAfter-hide": O
        },
        {
          default: k
        }
      )
    ] : k;
  }
});
const aI = { class: "flex flex-col gap-2" }, oI = { class: "flex items-center gap-1" }, sI = {
  key: 0,
  for: "due",
  class: "p3-b text-true-blue-3 w-fit flex cursor-pointer items-center justify-center gap-2 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
}, iI = ["onClick"], lI = /* @__PURE__ */ de({
  __name: "DuePicker",
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, { t: r } = un.global, o = C({
      get: () => n.modelValue ? new Date(n.modelValue).toISOString() : "",
      set: (i) => t("update:modelValue", i)
    }), a = B(!1);
    _e(
      () => n.modelValue,
      (i) => {
        i && (a.value = !0);
      },
      { immediate: !0 }
    );
    const s = B();
    return _e(a, (i) => {
      i ? Et(() => {
        s.value.click();
      }) : t("update:modelValue", null);
    }), qn(() => {
      t("update:modelValue", null);
    }), (i, l) => (T(), I("div", aI, [
      M("div", oI, [
        xt(M("input", {
          type: "checkbox",
          "onUpdate:modelValue": l[0] || (l[0] = (c) => tt(a) ? a.value = c : null),
          id: "due",
          class: "hidden"
        }, null, 512), [
          [Yc, h(a)]
        ]),
        h(a) ? re("", !0) : (T(), I("label", sI, ae(h(r)("持續執行")), 1)),
        h(a) ? (T(), De(h(Ip), {
          key: 1,
          modelValue: h(o),
          "onUpdate:modelValue": l[1] || (l[1] = (c) => tt(o) ? o.value = c : null),
          mode: "dateTime",
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          "min-Date": /* @__PURE__ */ new Date(),
          "time-accuracy": 2,
          is24hr: "",
          "hide-time-header": ""
        }, {
          default: he(({ togglePopover: c, inputValue: u }) => [
            M("div", {
              ref_key: "date",
              ref: s,
              class: "p3-b text-true-blue-3 flex cursor-pointer items-center justify-center gap-2 rounded shadow-01 bg-light-5 py-1 px-2 transition-all hover:bg-light-3 hover:bg-opacity-50",
              onClick: c
            }, ae(u || h(r)("未設定")), 9, iI)
          ]),
          _: 1
        }, 8, ["modelValue", "timezone", "min-Date"])) : re("", !0),
        h(a) ? (T(), De(h(js), {
          key: 2,
          onClick: l[2] || (l[2] = (c) => a.value = !1),
          weight: "bold",
          class: "text-dark-4 hover:text-dark-3 p3-b cursor-pointer"
        })) : re("", !0)
      ])
    ]));
  }
}), uI = { class: "flex w-auto items-center justify-center gap-2 rounded shadow-01 bg-light-5 py-1 px-2 hover:bg-light-3 hover:bg-opacity-50 input-outer" }, cI = ["value", "type", "placeholder", "maxLength", "required"], dI = /* @__PURE__ */ de({
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
    function r(o) {
      n.type === "number" && !o.target.value && (o.target.value = 0), t(
        "update:modelValue",
        n.type == "number" ? Number(o.target.value) : o.target.value
      );
    }
    return (o, a) => (T(), I("div", uI, [
      M("input", {
        value: o.modelValue,
        onInput: r,
        type: o.type,
        min: "0",
        class: xe([o.inputClass, "p3-b w-full border-none outline-none shadow-none placeholder:text-dark-5 text-dark-3"]),
        placeholder: o.placeholder,
        maxLength: o.maxLength,
        required: o.required
      }, null, 42, cI)
    ]));
  }
});
const Ea = /* @__PURE__ */ La(dI, [["__scopeId", "data-v-d975114e"]]), fI = { class: "flex flex-col gap-6" }, pI = { class: "flex gap-6" }, mI = { class: "flex items-center justify-start gap-4" }, vI = { class: "p3-r text-dark-4" }, hI = { class: "flex gap-6" }, gI = { class: "flex items-center gap-4" }, yI = ["value"], bI = { value: 0 }, _I = { class: "flex flex-col gap-4" }, wI = { class: "flex items-center justify-start gap-4" }, EI = { class: "p3-r text-dark-4" }, OI = ["onClick"], DI = ["value"], kI = { class: "flex items-center empty:hidden" }, $I = {
  key: 0,
  class: "flex items-center justify-start gap-4"
}, TI = { class: "p3-r text-dark-4" }, AI = {
  key: 0,
  class: "flex justify-center flex-col gap-6"
}, xI = { class: "flex gap-4 items-center" }, CI = { class: "p3-r text-dark-4" }, NI = {
  value: "-1",
  disabled: ""
}, PI = ["value"], SI = {
  key: 0,
  class: "p3-b text-dark-3"
}, wc = 1, MI = /* @__PURE__ */ de({
  __name: "RepeatFrequency",
  props: {
    frequency: {},
    interval: {}
  },
  emits: ["update:frequency", "update:interval"],
  setup(e, { emit: t }) {
    const n = e, { t: r } = un.global, o = Be("eventData"), a = B(!0);
    _e(o, () => {
      a.value = !0;
    });
    const s = B(n.interval ?? wc);
    _e(s, (g) => {
      g || (g = wc), t("update:interval", g);
    });
    const i = B(n.frequency);
    _e(i, (g) => {
      t("update:frequency", g);
    });
    const l = C({
      get: () => o.value.start ? new Date(o.value.start).toISOString() : "",
      set: (g) => {
        o.value.start = g;
      }
    }), c = C({
      get: () => o.value.weekdays ?? [],
      set: (g) => {
        o.value.weekdays = g;
      }
    }), u = C({
      get: () => o.value.weekOrdinal ?? [],
      set: (g) => {
        o.value.weekOrdinal = g;
      }
    }), d = C({
      get: () => o.value.monthDate ?? [],
      set: (g) => {
        o.value.monthDate = g;
      }
    }), f = C({
      get: () => o.value.yearMonths ?? [],
      set: (g) => {
        o.value.yearMonths = g;
      }
    }), p = C(() => {
      if (v.value == Re.Never)
        return r("只執行一次");
      if (v.value == Re.Hour)
        return r("每小時執行一次");
      if (v.value == Re.Day)
        return r("每日執行一次");
      if (v.value == Re.Week)
        return r("每週執行一次");
      if (v.value == Re.Month)
        return r("每月執行一次");
      if (v.value == Re.Annual)
        return r("每年執行一次");
      const g = {
        1: r("小時"),
        2: r("日"),
        3: r("週"),
        4: r("月"),
        5: r("年")
      }, b = {
        1: "",
        2: "",
        3: "",
        4: "",
        5: ""
      };
      return v.value == 0 ? `${r("每")}${s.value ?? ""}${g[i.value] ?? ""}${b[i.value] ?? ""}${r("執行一次")}` : "";
    }), v = B(
      n.interval == null ? -1 : n.interval !== 1 ? 0 : n.frequency
    );
    return _e(
      v,
      (g) => {
        Re[g] ? (t("update:frequency", g), t("update:interval", 1), i.value = v.value, o.value.weekdays = null, o.value.weekOrdinal = null, o.value.monthDate = null, o.value.yearMonths = null) : i.value = 1, o.value.customInterval = g === 0;
      },
      { immediate: !0 }
    ), (g, b) => (T(), I("div", fI, [
      M("div", pI, [
        M("label", mI, [
          M("span", vI, ae(h(r)("執行頻率")), 1),
          M("div", hI, [
            M("div", gI, [
              xt(M("select", {
                class: "p3-b text-true-blue-3 flex cursor-pointer items-center justify-center gap-4 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": b[0] || (b[0] = (m) => tt(v) ? v.value = m : null)
              }, [
                (T(!0), I(Ee, null, Ue(h(Re), (m, y) => (T(), I(Ee, { key: y }, [
                  Number.isInteger(m) ? (T(), I("option", {
                    key: 0,
                    value: m
                  }, ae(h(r)(y)), 9, yI)) : re("", !0)
                ], 64))), 128)),
                M("option", bI, ae(h(r)("自訂")), 1)
              ], 512), [
                [Tr, h(v)]
              ])
            ])
          ])
        ]),
        M("div", _I, [
          M("div", wI, [
            M("span", EI, ae(h(r)("開始")), 1),
            ce(h(Ip), {
              modelValue: h(l),
              "onUpdate:modelValue": b[1] || (b[1] = (m) => tt(l) ? l.value = m : null),
              mode: "dateTime",
              "min-Date": /* @__PURE__ */ new Date(),
              is24hr: "",
              "hide-time-header": "",
              "time-accuracy": 2,
              timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
              popover: !1
            }, {
              default: he(({ togglePopover: m, inputValue: y }) => [
                M("div", {
                  class: "p3-b text-true-blue-3 flex cursor-pointer relative items-center justify-start gap-4 rounded shadow-01 bg-light-5 py-1 px-2 transition-all hover:bg-light-3 hover:bg-opacity-50",
                  onClick: m
                }, [
                  M("input", {
                    value: y,
                    required: "",
                    class: "opacity-0 absolute w-full h-full pointer-events-none"
                  }, null, 8, DI),
                  jr(" " + ae(y || h(r)("未設定")), 1)
                ], 8, OI)
              ]),
              _: 1
            }, 8, ["modelValue", "min-Date", "timezone"])
          ])
        ]),
        M("div", kI, [
          h(i) !== -1 ? (T(), I("div", $I, [
            M("span", TI, ae(h(r)("結束")), 1),
            ce(lI, {
              modelValue: h(o).due,
              "onUpdate:modelValue": b[2] || (b[2] = (m) => h(o).due = m)
            }, null, 8, ["modelValue"])
          ])) : re("", !0)
        ])
      ]),
      h(Re)[h(v)] == null ? (T(), I("div", AI, [
        M("div", xI, [
          M("span", CI, ae(h(r)("每")), 1),
          ce(Ea, {
            class: "!w-10 text-center text-dark-3",
            inputClass: "text-true-blue-3",
            modelValue: h(s),
            "onUpdate:modelValue": b[3] || (b[3] = (m) => tt(s) ? s.value = m : null),
            type: "number"
          }, null, 8, ["modelValue"]),
          xt(M("select", {
            class: "p3-b text-true-blue-3 w-14 flex cursor-pointer items-center justify-center gap-4 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
            "onUpdate:modelValue": b[4] || (b[4] = (m) => tt(i) ? i.value = m : null)
          }, [
            M("option", NI, ae(h(r)("未設定")), 1),
            (T(!0), I(Ee, null, Ue(h(Re), (m, y) => (T(), I(Ee, { key: y }, [
              m != h(Re).Never && Number.isInteger(m) ? (T(), I("option", {
                key: 0,
                value: m
              }, ae(h(r)(`repeat${y}`)), 9, PI)) : re("", !0)
            ], 64))), 128))
          ], 512), [
            [Tr, h(i)]
          ]),
          h(i) == h(Re).Hour || h(i) == h(Re).Day ? (T(), I("span", SI, ae(h(p)), 1)) : re("", !0),
          h(Re)[h(v)] == null ? (T(), De(Zb, {
            key: 1,
            class: "ml-4",
            type: h(i),
            weekdays: h(c),
            "onUpdate:weekdays": b[5] || (b[5] = (m) => tt(c) ? c.value = m : null),
            weekOrdinal: h(u),
            "onUpdate:weekOrdinal": b[6] || (b[6] = (m) => tt(u) ? u.value = m : null),
            monthDate: h(d),
            "onUpdate:monthDate": b[7] || (b[7] = (m) => tt(d) ? d.value = m : null),
            yearMonths: h(f),
            "onUpdate:yearMonths": b[8] || (b[8] = (m) => tt(f) ? f.value = m : null)
          }, null, 8, ["type", "weekdays", "weekOrdinal", "monthDate", "yearMonths"])) : re("", !0)
        ])
      ])) : re("", !0)
    ]));
  }
}), II = ["id"], LI = { class: "p2-b text-dark-2 bg-light-5 flex gap-1 items-center" }, RI = /* @__PURE__ */ de({
  __name: "OuterBlock",
  props: {
    id: {},
    title: {},
    icon: {}
  },
  setup(e) {
    const t = e, n = fm(
      () => import("./index-eae7eec4.js").then((i) => i[t.icon])
    ), r = B(!1);
    Gt(() => {
      r.value = !0;
    });
    function o(i) {
      const l = getComputedStyle(i).width;
      i.style.width = l, i.style.position = "absolute", i.style.visibility = "hidden", i.style.height = "auto";
      const c = getComputedStyle(i).height;
      i.style.width = null, i.style.position = null, i.style.visibility = null, i.style.height = 0, getComputedStyle(i).height, requestAnimationFrame(() => {
        i.style.height = c, i.style.paddingTop = "24px";
      });
    }
    function a(i) {
      i.style.height = "auto";
    }
    function s(i) {
      const l = getComputedStyle(i).height;
      i.style.height = l, getComputedStyle(i).height, requestAnimationFrame(() => {
        i.style.height = 0, i.style.paddingTop = "0";
      });
    }
    return (i, l) => (T(), I("div", {
      class: "relative border rounded-xs border-light-1 py-4 px-3 shadow-01 flex flex-col w-full",
      id: i.id
    }, [
      M("div", {
        class: xe(["flex items-center justify-between bg-light-5 z-[2]", { " cursor-pointer": !h(r) }]),
        onClick: l[0] || (l[0] = (c) => r.value = !h(r))
      }, [
        M("div", LI, [
          (T(), De(Ro(h(n)), { weight: "bold" })),
          jr(" " + ae(i.title), 1)
        ]),
        ce(h(mf), {
          weight: "bold",
          class: xe(["transition-all hover:drop-shadow-md cursor-pointer hover:text-dark-3", { "-rotate-90": !h(r) }])
        }, null, 8, ["class"])
      ], 2),
      ce(ui, {
        name: "expand",
        onEnter: o,
        onAfterEnter: a,
        onLeave: s
      }, {
        default: he(() => [
          h(r) ? Me(i.$slots, "default", { key: 0 }, void 0, !0) : re("", !0)
        ]),
        _: 3
      })
    ], 8, II));
  }
});
const uo = /* @__PURE__ */ La(RI, [["__scopeId", "data-v-2167c944"]]);
function Lp(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: FI } = Object.prototype, { getPrototypeOf: il } = Object, Qo = ((e) => (t) => {
  const n = FI.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), pn = (e) => (e = e.toLowerCase(), (t) => Qo(t) === e), es = (e) => (t) => typeof t === e, { isArray: oa } = Array, Ma = es("undefined");
function VI(e) {
  return e !== null && !Ma(e) && e.constructor !== null && !Ma(e.constructor) && St(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Rp = pn("ArrayBuffer");
function BI(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Rp(e.buffer), t;
}
const YI = es("string"), St = es("function"), Fp = es("number"), ts = (e) => e !== null && typeof e == "object", HI = (e) => e === !0 || e === !1, co = (e) => {
  if (Qo(e) !== "object")
    return !1;
  const t = il(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, UI = pn("Date"), jI = pn("File"), WI = pn("Blob"), GI = pn("FileList"), zI = (e) => ts(e) && St(e.pipe), KI = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || St(e.append) && ((t = Qo(e)) === "formdata" || // detect form-data instance
  t === "object" && St(e.toString) && e.toString() === "[object FormData]"));
}, qI = pn("URLSearchParams"), ZI = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ha(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), oa(e))
    for (r = 0, o = e.length; r < o; r++)
      t.call(null, e[r], r, e);
  else {
    const a = n ? Object.getOwnPropertyNames(e) : Object.keys(e), s = a.length;
    let i;
    for (r = 0; r < s; r++)
      i = a[r], t.call(null, e[i], i, e);
  }
}
function Vp(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], t === o.toLowerCase())
      return o;
  return null;
}
const Bp = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Yp = (e) => !Ma(e) && e !== Bp;
function ni() {
  const { caseless: e } = Yp(this) && this || {}, t = {}, n = (r, o) => {
    const a = e && Vp(t, o) || o;
    co(t[a]) && co(r) ? t[a] = ni(t[a], r) : co(r) ? t[a] = ni({}, r) : oa(r) ? t[a] = r.slice() : t[a] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Ha(arguments[r], n);
  return t;
}
const XI = (e, t, n, { allOwnKeys: r } = {}) => (Ha(t, (o, a) => {
  n && St(o) ? e[a] = Lp(o, n) : e[a] = o;
}, { allOwnKeys: r }), e), JI = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), QI = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, eL = (e, t, n, r) => {
  let o, a, s;
  const i = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (o = Object.getOwnPropertyNames(e), a = o.length; a-- > 0; )
      s = o[a], (!r || r(s, e, t)) && !i[s] && (t[s] = e[s], i[s] = !0);
    e = n !== !1 && il(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, tL = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, nL = (e) => {
  if (!e)
    return null;
  if (oa(e))
    return e;
  let t = e.length;
  if (!Fp(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, rL = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && il(Uint8Array)), aL = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const a = o.value;
    t.call(e, a[0], a[1]);
  }
}, oL = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, sL = pn("HTMLFormElement"), iL = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, o) {
    return r.toUpperCase() + o;
  }
), Ec = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), lL = pn("RegExp"), Hp = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  Ha(n, (o, a) => {
    let s;
    (s = t(o, a, e)) !== !1 && (r[a] = s || o);
  }), Object.defineProperties(e, r);
}, uL = (e) => {
  Hp(e, (t, n) => {
    if (St(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (St(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, cL = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((a) => {
      n[a] = !0;
    });
  };
  return oa(e) ? r(e) : r(String(e).split(t)), n;
}, dL = () => {
}, fL = (e, t) => (e = +e, Number.isFinite(e) ? e : t), _s = "abcdefghijklmnopqrstuvwxyz", Oc = "0123456789", Up = {
  DIGIT: Oc,
  ALPHA: _s,
  ALPHA_DIGIT: _s + _s.toUpperCase() + Oc
}, pL = (e = 16, t = Up.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function mL(e) {
  return !!(e && St(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const vL = (e) => {
  const t = new Array(10), n = (r, o) => {
    if (ts(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[o] = r;
        const a = oa(r) ? [] : {};
        return Ha(r, (s, i) => {
          const l = n(s, o + 1);
          !Ma(l) && (a[i] = l);
        }), t[o] = void 0, a;
      }
    }
    return r;
  };
  return n(e, 0);
}, hL = pn("AsyncFunction"), gL = (e) => e && (ts(e) || St(e)) && St(e.then) && St(e.catch), V = {
  isArray: oa,
  isArrayBuffer: Rp,
  isBuffer: VI,
  isFormData: KI,
  isArrayBufferView: BI,
  isString: YI,
  isNumber: Fp,
  isBoolean: HI,
  isObject: ts,
  isPlainObject: co,
  isUndefined: Ma,
  isDate: UI,
  isFile: jI,
  isBlob: WI,
  isRegExp: lL,
  isFunction: St,
  isStream: zI,
  isURLSearchParams: qI,
  isTypedArray: rL,
  isFileList: GI,
  forEach: Ha,
  merge: ni,
  extend: XI,
  trim: ZI,
  stripBOM: JI,
  inherits: QI,
  toFlatObject: eL,
  kindOf: Qo,
  kindOfTest: pn,
  endsWith: tL,
  toArray: nL,
  forEachEntry: aL,
  matchAll: oL,
  isHTMLForm: sL,
  hasOwnProperty: Ec,
  hasOwnProp: Ec,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Hp,
  freezeMethods: uL,
  toObjectSet: cL,
  toCamelCase: iL,
  noop: dL,
  toFiniteNumber: fL,
  findKey: Vp,
  global: Bp,
  isContextDefined: Yp,
  ALPHABET: Up,
  generateString: pL,
  isSpecCompliantForm: mL,
  toJSONObject: vL,
  isAsyncFn: hL,
  isThenable: gL
};
function Pe(e, t, n, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), o && (this.response = o);
}
V.inherits(Pe, Error, {
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
      config: V.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const jp = Pe.prototype, Wp = {};
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
  Wp[e] = { value: e };
});
Object.defineProperties(Pe, Wp);
Object.defineProperty(jp, "isAxiosError", { value: !0 });
Pe.from = (e, t, n, r, o, a) => {
  const s = Object.create(jp);
  return V.toFlatObject(e, s, function(l) {
    return l !== Error.prototype;
  }, (i) => i !== "isAxiosError"), Pe.call(s, e.message, t, n, r, o), s.cause = e, s.name = e.name, a && Object.assign(s, a), s;
};
const yL = null;
function ri(e) {
  return V.isPlainObject(e) || V.isArray(e);
}
function Gp(e) {
  return V.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Dc(e, t, n) {
  return e ? e.concat(t).map(function(o, a) {
    return o = Gp(o), !n && a ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function bL(e) {
  return V.isArray(e) && !e.some(ri);
}
const _L = V.toFlatObject(V, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function ns(e, t, n) {
  if (!V.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = V.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(g, b) {
    return !V.isUndefined(b[g]);
  });
  const r = n.metaTokens, o = n.visitor || u, a = n.dots, s = n.indexes, l = (n.Blob || typeof Blob < "u" && Blob) && V.isSpecCompliantForm(t);
  if (!V.isFunction(o))
    throw new TypeError("visitor must be a function");
  function c(v) {
    if (v === null)
      return "";
    if (V.isDate(v))
      return v.toISOString();
    if (!l && V.isBlob(v))
      throw new Pe("Blob is not supported. Use a Buffer instead.");
    return V.isArrayBuffer(v) || V.isTypedArray(v) ? l && typeof Blob == "function" ? new Blob([v]) : Buffer.from(v) : v;
  }
  function u(v, g, b) {
    let m = v;
    if (v && !b && typeof v == "object") {
      if (V.endsWith(g, "{}"))
        g = r ? g : g.slice(0, -2), v = JSON.stringify(v);
      else if (V.isArray(v) && bL(v) || (V.isFileList(v) || V.endsWith(g, "[]")) && (m = V.toArray(v)))
        return g = Gp(g), m.forEach(function(E, _) {
          !(V.isUndefined(E) || E === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? Dc([g], _, a) : s === null ? g : g + "[]",
            c(E)
          );
        }), !1;
    }
    return ri(v) ? !0 : (t.append(Dc(b, g, a), c(v)), !1);
  }
  const d = [], f = Object.assign(_L, {
    defaultVisitor: u,
    convertValue: c,
    isVisitable: ri
  });
  function p(v, g) {
    if (!V.isUndefined(v)) {
      if (d.indexOf(v) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      d.push(v), V.forEach(v, function(m, y) {
        (!(V.isUndefined(m) || m === null) && o.call(
          t,
          m,
          V.isString(y) ? y.trim() : y,
          g,
          f
        )) === !0 && p(m, g ? g.concat(y) : [y]);
      }), d.pop();
    }
  }
  if (!V.isObject(e))
    throw new TypeError("data must be an object");
  return p(e), t;
}
function kc(e) {
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
function ll(e, t) {
  this._pairs = [], e && ns(e, this, t);
}
const zp = ll.prototype;
zp.append = function(t, n) {
  this._pairs.push([t, n]);
};
zp.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, kc);
  } : kc;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function wL(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Kp(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || wL, o = n && n.serialize;
  let a;
  if (o ? a = o(t, n) : a = V.isURLSearchParams(t) ? t.toString() : new ll(t, n).toString(r), a) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return e;
}
class EL {
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
    V.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const $c = EL, qp = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, OL = typeof URLSearchParams < "u" ? URLSearchParams : ll, DL = typeof FormData < "u" ? FormData : null, kL = typeof Blob < "u" ? Blob : null, $L = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), TL = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), tn = {
  isBrowser: !0,
  classes: {
    URLSearchParams: OL,
    FormData: DL,
    Blob: kL
  },
  isStandardBrowserEnv: $L,
  isStandardBrowserWebWorkerEnv: TL,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function AL(e, t) {
  return ns(e, new tn.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, o, a) {
      return tn.isNode && V.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function xL(e) {
  return V.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function CL(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const o = n.length;
  let a;
  for (r = 0; r < o; r++)
    a = n[r], t[a] = e[a];
  return t;
}
function Zp(e) {
  function t(n, r, o, a) {
    let s = n[a++];
    const i = Number.isFinite(+s), l = a >= n.length;
    return s = !s && V.isArray(o) ? o.length : s, l ? (V.hasOwnProp(o, s) ? o[s] = [o[s], r] : o[s] = r, !i) : ((!o[s] || !V.isObject(o[s])) && (o[s] = []), t(n, r, o[s], a) && V.isArray(o[s]) && (o[s] = CL(o[s])), !i);
  }
  if (V.isFormData(e) && V.isFunction(e.entries)) {
    const n = {};
    return V.forEachEntry(e, (r, o) => {
      t(xL(r), o, n, 0);
    }), n;
  }
  return null;
}
function NL(e, t, n) {
  if (V.isString(e))
    try {
      return (t || JSON.parse)(e), V.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const ul = {
  transitional: qp,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, a = V.isObject(t);
    if (a && V.isHTMLForm(t) && (t = new FormData(t)), V.isFormData(t))
      return o && o ? JSON.stringify(Zp(t)) : t;
    if (V.isArrayBuffer(t) || V.isBuffer(t) || V.isStream(t) || V.isFile(t) || V.isBlob(t))
      return t;
    if (V.isArrayBufferView(t))
      return t.buffer;
    if (V.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let i;
    if (a) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return AL(t, this.formSerializer).toString();
      if ((i = V.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return ns(
          i ? { "files[]": t } : t,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return a || o ? (n.setContentType("application/json", !1), NL(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || ul.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (t && V.isString(t) && (r && !this.responseType || o)) {
      const s = !(n && n.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (i) {
        if (s)
          throw i.name === "SyntaxError" ? Pe.from(i, Pe.ERR_BAD_RESPONSE, this, null, this.response) : i;
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
    FormData: tn.classes.FormData,
    Blob: tn.classes.Blob
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
V.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  ul.headers[e] = {};
});
const cl = ul, PL = V.toObjectSet([
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
]), SL = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(s) {
    o = s.indexOf(":"), n = s.substring(0, o).trim().toLowerCase(), r = s.substring(o + 1).trim(), !(!n || t[n] && PL[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Tc = Symbol("internals");
function ha(e) {
  return e && String(e).trim().toLowerCase();
}
function fo(e) {
  return e === !1 || e == null ? e : V.isArray(e) ? e.map(fo) : String(e);
}
function ML(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const IL = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ws(e, t, n, r, o) {
  if (V.isFunction(r))
    return r.call(this, t, n);
  if (o && (t = n), !!V.isString(t)) {
    if (V.isString(r))
      return t.indexOf(r) !== -1;
    if (V.isRegExp(r))
      return r.test(t);
  }
}
function LL(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function RL(e, t) {
  const n = V.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(o, a, s) {
        return this[r].call(this, t, o, a, s);
      },
      configurable: !0
    });
  });
}
class rs {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function a(i, l, c) {
      const u = ha(l);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const d = V.findKey(o, u);
      (!d || o[d] === void 0 || c === !0 || c === void 0 && o[d] !== !1) && (o[d || l] = fo(i));
    }
    const s = (i, l) => V.forEach(i, (c, u) => a(c, u, l));
    return V.isPlainObject(t) || t instanceof this.constructor ? s(t, n) : V.isString(t) && (t = t.trim()) && !IL(t) ? s(SL(t), n) : t != null && a(n, t, r), this;
  }
  get(t, n) {
    if (t = ha(t), t) {
      const r = V.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return ML(o);
        if (V.isFunction(n))
          return n.call(this, o, r);
        if (V.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = ha(t), t) {
      const r = V.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || ws(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function a(s) {
      if (s = ha(s), s) {
        const i = V.findKey(r, s);
        i && (!n || ws(r, r[i], i, n)) && (delete r[i], o = !0);
      }
    }
    return V.isArray(t) ? t.forEach(a) : a(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const a = n[r];
      (!t || ws(this, this[a], a, t, !0)) && (delete this[a], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, r = {};
    return V.forEach(this, (o, a) => {
      const s = V.findKey(r, a);
      if (s) {
        n[s] = fo(o), delete n[a];
        return;
      }
      const i = t ? LL(a) : String(a).trim();
      i !== a && delete n[a], n[i] = fo(o), r[i] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return V.forEach(this, (r, o) => {
      r != null && r !== !1 && (n[o] = t && V.isArray(r) ? r.join(", ") : r);
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
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[Tc] = this[Tc] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function a(s) {
      const i = ha(s);
      r[i] || (RL(o, s), r[i] = !0);
    }
    return V.isArray(t) ? t.forEach(a) : a(t), this;
  }
}
rs.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
V.reduceDescriptors(rs.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
V.freezeMethods(rs);
const _n = rs;
function Es(e, t) {
  const n = this || cl, r = t || n, o = _n.from(r.headers);
  let a = r.data;
  return V.forEach(e, function(i) {
    a = i.call(n, a, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), a;
}
function Xp(e) {
  return !!(e && e.__CANCEL__);
}
function Ua(e, t, n) {
  Pe.call(this, e ?? "canceled", Pe.ERR_CANCELED, t, n), this.name = "CanceledError";
}
V.inherits(Ua, Pe, {
  __CANCEL__: !0
});
function FL(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new Pe(
    "Request failed with status code " + n.status,
    [Pe.ERR_BAD_REQUEST, Pe.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const VL = tn.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(n, r, o, a, s, i) {
        const l = [];
        l.push(n + "=" + encodeURIComponent(r)), V.isNumber(o) && l.push("expires=" + new Date(o).toGMTString()), V.isString(a) && l.push("path=" + a), V.isString(s) && l.push("domain=" + s), i === !0 && l.push("secure"), document.cookie = l.join("; ");
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
function BL(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function YL(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Jp(e, t) {
  return e && !BL(t) ? YL(e, t) : t;
}
const HL = tn.isStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
    let r;
    function o(a) {
      let s = a;
      return t && (n.setAttribute("href", s), s = n.href), n.setAttribute("href", s), {
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
    return r = o(window.location.href), function(s) {
      const i = V.isString(s) ? o(s) : s;
      return i.protocol === r.protocol && i.host === r.host;
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
function UL(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function jL(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let o = 0, a = 0, s;
  return t = t !== void 0 ? t : 1e3, function(l) {
    const c = Date.now(), u = r[a];
    s || (s = c), n[o] = l, r[o] = c;
    let d = a, f = 0;
    for (; d !== o; )
      f += n[d++], d = d % e;
    if (o = (o + 1) % e, o === a && (a = (a + 1) % e), c - s < t)
      return;
    const p = u && c - u;
    return p ? Math.round(f * 1e3 / p) : void 0;
  };
}
function Ac(e, t) {
  let n = 0;
  const r = jL(50, 250);
  return (o) => {
    const a = o.loaded, s = o.lengthComputable ? o.total : void 0, i = a - n, l = r(i), c = a <= s;
    n = a;
    const u = {
      loaded: a,
      total: s,
      progress: s ? a / s : void 0,
      bytes: i,
      rate: l || void 0,
      estimated: l && s && c ? (s - a) / l : void 0,
      event: o
    };
    u[t ? "download" : "upload"] = !0, e(u);
  };
}
const WL = typeof XMLHttpRequest < "u", GL = WL && function(e) {
  return new Promise(function(n, r) {
    let o = e.data;
    const a = _n.from(e.headers).normalize(), s = e.responseType;
    let i;
    function l() {
      e.cancelToken && e.cancelToken.unsubscribe(i), e.signal && e.signal.removeEventListener("abort", i);
    }
    let c;
    V.isFormData(o) && (tn.isStandardBrowserEnv || tn.isStandardBrowserWebWorkerEnv ? a.setContentType(!1) : a.getContentType(/^\s*multipart\/form-data/) ? V.isString(c = a.getContentType()) && a.setContentType(c.replace(/^\s*(multipart\/form-data);+/, "$1")) : a.setContentType("multipart/form-data"));
    let u = new XMLHttpRequest();
    if (e.auth) {
      const v = e.auth.username || "", g = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      a.set("Authorization", "Basic " + btoa(v + ":" + g));
    }
    const d = Jp(e.baseURL, e.url);
    u.open(e.method.toUpperCase(), Kp(d, e.params, e.paramsSerializer), !0), u.timeout = e.timeout;
    function f() {
      if (!u)
        return;
      const v = _n.from(
        "getAllResponseHeaders" in u && u.getAllResponseHeaders()
      ), b = {
        data: !s || s === "text" || s === "json" ? u.responseText : u.response,
        status: u.status,
        statusText: u.statusText,
        headers: v,
        config: e,
        request: u
      };
      FL(function(y) {
        n(y), l();
      }, function(y) {
        r(y), l();
      }, b), u = null;
    }
    if ("onloadend" in u ? u.onloadend = f : u.onreadystatechange = function() {
      !u || u.readyState !== 4 || u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0) || setTimeout(f);
    }, u.onabort = function() {
      u && (r(new Pe("Request aborted", Pe.ECONNABORTED, e, u)), u = null);
    }, u.onerror = function() {
      r(new Pe("Network Error", Pe.ERR_NETWORK, e, u)), u = null;
    }, u.ontimeout = function() {
      let g = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const b = e.transitional || qp;
      e.timeoutErrorMessage && (g = e.timeoutErrorMessage), r(new Pe(
        g,
        b.clarifyTimeoutError ? Pe.ETIMEDOUT : Pe.ECONNABORTED,
        e,
        u
      )), u = null;
    }, tn.isStandardBrowserEnv) {
      const v = (e.withCredentials || HL(d)) && e.xsrfCookieName && VL.read(e.xsrfCookieName);
      v && a.set(e.xsrfHeaderName, v);
    }
    o === void 0 && a.setContentType(null), "setRequestHeader" in u && V.forEach(a.toJSON(), function(g, b) {
      u.setRequestHeader(b, g);
    }), V.isUndefined(e.withCredentials) || (u.withCredentials = !!e.withCredentials), s && s !== "json" && (u.responseType = e.responseType), typeof e.onDownloadProgress == "function" && u.addEventListener("progress", Ac(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", Ac(e.onUploadProgress)), (e.cancelToken || e.signal) && (i = (v) => {
      u && (r(!v || v.type ? new Ua(null, e, u) : v), u.abort(), u = null);
    }, e.cancelToken && e.cancelToken.subscribe(i), e.signal && (e.signal.aborted ? i() : e.signal.addEventListener("abort", i)));
    const p = UL(d);
    if (p && tn.protocols.indexOf(p) === -1) {
      r(new Pe("Unsupported protocol " + p + ":", Pe.ERR_BAD_REQUEST, e));
      return;
    }
    u.send(o || null);
  });
}, ai = {
  http: yL,
  xhr: GL
};
V.forEach(ai, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const xc = (e) => `- ${e}`, zL = (e) => V.isFunction(e) || e === null || e === !1, Qp = {
  getAdapter: (e) => {
    e = V.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const o = {};
    for (let a = 0; a < t; a++) {
      n = e[a];
      let s;
      if (r = n, !zL(n) && (r = ai[(s = String(n)).toLowerCase()], r === void 0))
        throw new Pe(`Unknown adapter '${s}'`);
      if (r)
        break;
      o[s || "#" + a] = r;
    }
    if (!r) {
      const a = Object.entries(o).map(
        ([i, l]) => `adapter ${i} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let s = t ? a.length > 1 ? `since :
` + a.map(xc).join(`
`) : " " + xc(a[0]) : "as no adapter specified";
      throw new Pe(
        "There is no suitable adapter to dispatch the request " + s,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: ai
};
function Os(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Ua(null, e);
}
function Cc(e) {
  return Os(e), e.headers = _n.from(e.headers), e.data = Es.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Qp.getAdapter(e.adapter || cl.adapter)(e).then(function(r) {
    return Os(e), r.data = Es.call(
      e,
      e.transformResponse,
      r
    ), r.headers = _n.from(r.headers), r;
  }, function(r) {
    return Xp(r) || (Os(e), r && r.response && (r.response.data = Es.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = _n.from(r.response.headers))), Promise.reject(r);
  });
}
const Nc = (e) => e instanceof _n ? e.toJSON() : e;
function Hr(e, t) {
  t = t || {};
  const n = {};
  function r(c, u, d) {
    return V.isPlainObject(c) && V.isPlainObject(u) ? V.merge.call({ caseless: d }, c, u) : V.isPlainObject(u) ? V.merge({}, u) : V.isArray(u) ? u.slice() : u;
  }
  function o(c, u, d) {
    if (V.isUndefined(u)) {
      if (!V.isUndefined(c))
        return r(void 0, c, d);
    } else
      return r(c, u, d);
  }
  function a(c, u) {
    if (!V.isUndefined(u))
      return r(void 0, u);
  }
  function s(c, u) {
    if (V.isUndefined(u)) {
      if (!V.isUndefined(c))
        return r(void 0, c);
    } else
      return r(void 0, u);
  }
  function i(c, u, d) {
    if (d in t)
      return r(c, u);
    if (d in e)
      return r(void 0, c);
  }
  const l = {
    url: a,
    method: a,
    data: a,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: i,
    headers: (c, u) => o(Nc(c), Nc(u), !0)
  };
  return V.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const d = l[u] || o, f = d(e[u], t[u], u);
    V.isUndefined(f) && d !== i || (n[u] = f);
  }), n;
}
const em = "1.5.1", dl = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  dl[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Pc = {};
dl.transitional = function(t, n, r) {
  function o(a, s) {
    return "[Axios v" + em + "] Transitional option '" + a + "'" + s + (r ? ". " + r : "");
  }
  return (a, s, i) => {
    if (t === !1)
      throw new Pe(
        o(s, " has been removed" + (n ? " in " + n : "")),
        Pe.ERR_DEPRECATED
      );
    return n && !Pc[s] && (Pc[s] = !0, console.warn(
      o(
        s,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(a, s, i) : !0;
  };
};
function KL(e, t, n) {
  if (typeof e != "object")
    throw new Pe("options must be an object", Pe.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const a = r[o], s = t[a];
    if (s) {
      const i = e[a], l = i === void 0 || s(i, a, e);
      if (l !== !0)
        throw new Pe("option " + a + " must be " + l, Pe.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new Pe("Unknown option " + a, Pe.ERR_BAD_OPTION);
  }
}
const oi = {
  assertOptions: KL,
  validators: dl
}, Fn = oi.validators;
class Lo {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new $c(),
      response: new $c()
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Hr(this.defaults, n);
    const { transitional: r, paramsSerializer: o, headers: a } = n;
    r !== void 0 && oi.assertOptions(r, {
      silentJSONParsing: Fn.transitional(Fn.boolean),
      forcedJSONParsing: Fn.transitional(Fn.boolean),
      clarifyTimeoutError: Fn.transitional(Fn.boolean)
    }, !1), o != null && (V.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : oi.assertOptions(o, {
      encode: Fn.function,
      serialize: Fn.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let s = a && V.merge(
      a.common,
      a[n.method]
    );
    a && V.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (v) => {
        delete a[v];
      }
    ), n.headers = _n.concat(s, a);
    const i = [];
    let l = !0;
    this.interceptors.request.forEach(function(g) {
      typeof g.runWhen == "function" && g.runWhen(n) === !1 || (l = l && g.synchronous, i.unshift(g.fulfilled, g.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(g) {
      c.push(g.fulfilled, g.rejected);
    });
    let u, d = 0, f;
    if (!l) {
      const v = [Cc.bind(this), void 0];
      for (v.unshift.apply(v, i), v.push.apply(v, c), f = v.length, u = Promise.resolve(n); d < f; )
        u = u.then(v[d++], v[d++]);
      return u;
    }
    f = i.length;
    let p = n;
    for (d = 0; d < f; ) {
      const v = i[d++], g = i[d++];
      try {
        p = v(p);
      } catch (b) {
        g.call(this, b);
        break;
      }
    }
    try {
      u = Cc.call(this, p);
    } catch (v) {
      return Promise.reject(v);
    }
    for (d = 0, f = c.length; d < f; )
      u = u.then(c[d++], c[d++]);
    return u;
  }
  getUri(t) {
    t = Hr(this.defaults, t);
    const n = Jp(t.baseURL, t.url);
    return Kp(n, t.params, t.paramsSerializer);
  }
}
V.forEach(["delete", "get", "head", "options"], function(t) {
  Lo.prototype[t] = function(n, r) {
    return this.request(Hr(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
V.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(a, s, i) {
      return this.request(Hr(i || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: s
      }));
    };
  }
  Lo.prototype[t] = n(), Lo.prototype[t + "Form"] = n(!0);
});
const po = Lo;
class fl {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(a) {
      n = a;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners)
        return;
      let a = r._listeners.length;
      for (; a-- > 0; )
        r._listeners[a](o);
      r._listeners = null;
    }), this.promise.then = (o) => {
      let a;
      const s = new Promise((i) => {
        r.subscribe(i), a = i;
      }).then(o);
      return s.cancel = function() {
        r.unsubscribe(a);
      }, s;
    }, t(function(a, s, i) {
      r.reason || (r.reason = new Ua(a, s, i), n(r.reason));
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
      token: new fl(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
}
const qL = fl;
function ZL(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function XL(e) {
  return V.isObject(e) && e.isAxiosError === !0;
}
const si = {
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
Object.entries(si).forEach(([e, t]) => {
  si[t] = e;
});
const JL = si;
function tm(e) {
  const t = new po(e), n = Lp(po.prototype.request, t);
  return V.extend(n, po.prototype, t, { allOwnKeys: !0 }), V.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return tm(Hr(e, o));
  }, n;
}
const rt = tm(cl);
rt.Axios = po;
rt.CanceledError = Ua;
rt.CancelToken = qL;
rt.isCancel = Xp;
rt.VERSION = em;
rt.toFormData = ns;
rt.AxiosError = Pe;
rt.Cancel = rt.CanceledError;
rt.all = function(t) {
  return Promise.all(t);
};
rt.spread = ZL;
rt.isAxiosError = XL;
rt.mergeConfig = Hr;
rt.AxiosHeaders = _n;
rt.formToJSON = (e) => Zp(V.isHTMLForm(e) ? new FormData(e) : e);
rt.getAdapter = Qp.getAdapter;
rt.HttpStatusCode = JL;
rt.default = rt;
const QL = rt;
function e8(e, t) {
  return T(), I("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    M("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",
      fill: "currentColor"
    })
  ]);
}
const t8 = /* @__PURE__ */ de({
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
    const r = qr(e, t);
    return (o, a) => (T(), De(h(Sy), Qe(h(r), {
      class: h(pf)(
        "peer h-4 w-4 shrink-0 rounded-sm border border-slate-200 border-slate-900 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-slate-900 data-[state=checked]:text-slate-50 dark:border-slate-800 dark:border-slate-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 dark:data-[state=checked]:bg-slate-50 dark:data-[state=checked]:text-slate-900",
        o.$attrs.class ?? ""
      )
    }), {
      default: he(() => [
        ce(h(My), { class: "flex h-full w-full items-center justify-center text-current" }, {
          default: he(() => [
            ce(h(e8), { class: "h-4 w-4" })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), n8 = { class: "flex items-center flex-col justify-center py-2" }, r8 = { class: "flex justify-start gap-2 w-full items-center z-[2]" }, a8 = {
  key: 0,
  class: "flex-shrink-0 cursor-pointer pl-4"
}, o8 = {
  key: 1,
  class: "w-6"
}, s8 = ["for"], i8 = {
  key: 0,
  class: "flex flex-col pl-6 w-full pt-2"
}, l8 = /* @__PURE__ */ de({
  __name: "EventActionTargetItem",
  props: {
    target: {},
    targets: {}
  },
  setup(e) {
    const t = Be("addTarget"), n = B(!0);
    return (r, o) => {
      var a, s, i, l;
      return T(), I("div", n8, [
        M("div", {
          class: "item flex-1 flex gap-2 w-full items-center relative pr-4",
          onClick: o[1] || (o[1] = (c) => {
            var u;
            return (u = r.target) != null && u.children ? n.value = !h(n) : null;
          })
        }, [
          M("div", r8, [
            (a = r.target) != null && a.children ? (T(), I("div", a8, [
              ce(h(mf), {
                class: xe(["text-dark-3 transition-all", { " -rotate-90": !h(n) }]),
                size: 16
              }, null, 8, ["class"])
            ])) : (T(), I("div", o8)),
            M("label", {
              for: `target-${r.target.id}`,
              class: xe(["flex-1 cursor-pointer flex items-center gap-2", [((s = r.target) != null && s.children, "p3-r")]])
            }, [
              xt(M("div", {
                class: xe(["w-2 h-2 rounded-full flex-shrink-0", [r.target.enabled ? "bg-success-green-4" : "bg-red-4"]])
              }, null, 2), [
                [Hc, r.target.hasOwnProperty("enabled")]
              ]),
              M("span", null, ae(r.target.name), 1)
            ], 10, s8)
          ]),
          (i = r.target) != null && i.children ? re("", !0) : (T(), De(h(t8), {
            key: 0,
            class: "rounded data-[state=checked]:bg-true-blue-3 border-true-blue-4 z-[2]",
            id: `target-${r.target.id}`,
            checked: r.targets.some((c) => c === r.target.id),
            "onUpdate:checked": o[0] || (o[0] = (c) => h(t)(r.target))
          }, null, 8, ["id", "checked"]))
        ]),
        (l = r.target) != null && l.children && h(n) ? (T(), I("div", i8, [
          (T(!0), I(Ee, null, Ue(r.target.children, (c) => (T(), De(nm, {
            target: c,
            targets: r.targets
          }, null, 8, ["target", "targets"]))), 256))
        ])) : re("", !0)
      ]);
    };
  }
});
const nm = /* @__PURE__ */ La(l8, [["__scopeId", "data-v-9fc2c4e1"]]), u8 = { class: "flex flex-col gap-6" }, c8 = { class: "flex flex-col gap-6 pt-2" }, d8 = { class: "flex justify-start items-center gap-4" }, f8 = { class: "relative w-fit" }, p8 = { class: "p3-r text-dark-4" }, m8 = ["value"], v8 = { class: "shadow-01 flex items-center py-1 px-2 rounded p3-r text-dark-3" }, h8 = ["onClick"], g8 = {
  key: 0,
  class: "text-dark-5 mx-1"
}, y8 = { class: "flex gap-6" }, b8 = { class: "p3-r text-dark-4" }, _8 = {
  value: "",
  disabled: ""
}, w8 = ["value"], E8 = { class: "flex gap-4" }, O8 = { class: "p3-r text-dark-4" }, D8 = {
  value: "",
  disabled: ""
}, k8 = ["value"], $8 = {
  key: 0,
  class: "flex relative"
}, T8 = ["value"], A8 = {
  key: 0,
  class: "sticky top-0 left-0 pt-4 right-0 items-start bottom-0 w-full h-full flex justify-center bg-dark-3 bg-opacity-50 z-[2]"
}, x8 = { class: "sticky flex flex-col max-h-[95%] bg-light-5 rounded-xs shadow-01 w-4/5 py-4 px-10 h-fit top-[3%]" }, C8 = { class: "flex justify-between" }, N8 = { class: "p2-b flex justify-center mb-3 text-dark-2 mr-auto" }, P8 = {
  key: 0,
  class: "flex gap-4 w-full empty:hidden mb-2 items-center"
}, S8 = { class: "p3-r text-dark-4" }, M8 = ["for"], I8 = ["onUpdate:modelValue", "id"], L8 = { class: "w-2 h-2 rounded-full bg-success-green-4" }, R8 = {
  key: 1,
  class: "flex justify-end gap-4 items-center"
}, F8 = { class: "flex w-fit items-center gap-1 justify-end p3-r text-true-blue-3 mr-2.5 hover:text-true-blue-2" }, V8 = {
  key: 2,
  class: "h-4 w-4 mt-4 mx-auto animate-spin rounded-full border-2 border-solid border-blue-400 border-t-transparent"
}, B8 = {
  key: 3,
  class: "flex flex-col gap-4 flex-1 overflow-y-auto"
}, Y8 = {
  key: 0,
  class: "flex flex-col items-center justify-center gap-4 mt-4"
}, H8 = { class: "p2-b text-dark-3" }, U8 = {
  key: 4,
  class: "mx-auto flex w-fit items-center gap-4 mt-8"
}, j8 = { class: "flex flex-col gap-6" }, W8 = { class: "p3-r text-dark-4" }, G8 = {
  value: "",
  disabled: ""
}, z8 = ["value"], K8 = { class: "flex justify-start gap-4 items-center" }, q8 = { class: "p3-r text-dark-4" }, Z8 = { class: "shadow-01 flex items-center py-1 px-2 rounded p3-r text-dark-3" }, X8 = ["onClick"], J8 = {
  key: 0,
  class: "text-dark-5 mx-1"
}, Q8 = {
  key: 0,
  class: "p3-r text-dark-4"
}, eR = { class: "flex gap-4 w-full" }, tR = { class: "flex justify-start items-center gap-4" }, nR = { class: "p3-r text-dark-4 flex-shrink-0" }, rR = { class: "flex gap-10 w-full" }, aR = { class: "flex gap-4 flex-1" }, oR = { class: "shadow-01 flex items-center py-1 px-2 rounded p3-r text-dark-3" }, sR = ["onClick"], iR = {
  key: 0,
  class: "text-dark-5 mx-1"
}, lR = {
  key: 0,
  class: "flex items-center gap-1 w-24"
}, uR = { class: "p3-r text-dark-4" }, cR = {
  key: 0,
  class: "flex justify-center gap-1 flex-col"
}, dR = { class: "flex gap-4 items-center" }, fR = { class: "p3-r text-dark-4" }, pR = { class: "flex items-center gap-1" }, mR = {
  key: 1,
  class: "flex gap-4 items-center w-28"
}, hn = "", vR = /* @__PURE__ */ de({
  __name: "EventAction",
  setup(e) {
    const { t } = un.global, n = Be("eventData"), r = B(n.value.action ?? {}), o = B(!!Object.keys(r.value).length), a = B(!1);
    _e(a, (G) => {
      var X, se, te, Y, ne;
      (X = r.value.params) != null && X.limit || (te = (se = r.value) == null ? void 0 : se.params) == null || delete te.limit, G || (ne = (Y = r.value) == null ? void 0 : Y.params) == null || delete ne.limit;
    }), bt(() => {
      var G, X, se, te, Y;
      ((G = r.value) == null ? void 0 : G.action) == pe.SetNewBudget || ((X = r.value) == null ? void 0 : X.action) == pe.IncreaseBudget || ((se = r.value) == null ? void 0 : se.action) == pe.LowerBudget || delete r.value.params, a.value = !isNaN((Y = (te = r.value) == null ? void 0 : te.params) == null ? void 0 : Y.limit);
    }), _e(
      r,
      (G) => {
        n.value.action = G;
      },
      { deep: !0 }
    );
    const s = C(() => f.value == at.Google ? Ht : ht), i = {
      [at.Google]: {
        [Ht.Campaign]: {
          SetNewBudget: pe.SetNewBudget,
          IncreaseBudget: pe.IncreaseBudget,
          LowerBudget: pe.LowerBudget,
          OpenProject: pe.OpenProject,
          SuspendProject: pe.SuspendProject
        },
        [Ht.AdGroup]: {
          OpenProject: pe.OpenProject,
          SuspendProject: pe.SuspendProject
        },
        [Ht.AdTag]: {
          OpenProject: pe.OpenProject,
          SuspendProject: pe.SuspendProject
        }
        // [AdLevelTypeGoogle.Ad]: {
        //   OpenProject: ActionType.OpenProject,
        //   SuspendProject: ActionType.SuspendProject,
        // },
      },
      [at.Facebook]: {
        [ht.Campaign]: {
          SetNewBudget: pe.SetNewBudget,
          IncreaseBudget: pe.IncreaseBudget,
          LowerBudget: pe.LowerBudget,
          OpenProject: pe.OpenProject,
          SuspendProject: pe.SuspendProject
        },
        [ht.AdGroup]: {
          SetNewBudget: pe.SetNewBudget,
          IncreaseBudget: pe.IncreaseBudget,
          LowerBudget: pe.LowerBudget,
          OpenProject: pe.OpenProject,
          SuspendProject: pe.SuspendProject
        },
        [ht.AdTag]: {
          OpenProject: pe.OpenProject,
          SuspendProject: pe.SuspendProject
        },
        [ht.Ad]: {
          OpenProject: pe.OpenProject,
          SuspendProject: pe.SuspendProject
        }
      }
    }, l = C(() => {
      var se, te;
      const G = (se = r.value) == null ? void 0 : se.client, X = (te = r.value) == null ? void 0 : te.adLevel;
      if (G && X) {
        const Y = i[G];
        if (Y) {
          const ne = Y[X];
          if (ne)
            return ne;
        }
      }
      return {};
    }), c = {
      [at.Google]: {
        [Ht.Campaign]: {
          [pe.SetNewBudget]: [Te.Value],
          [pe.IncreaseBudget]: [Te.Percentage, Te.Value],
          [pe.LowerBudget]: [Te.Percentage, Te.Value],
          [pe.OpenProject]: [Te.Percentage, Te.Value],
          [pe.SuspendProject]: [Te.Percentage, Te.Value]
        },
        [Ht.AdGroup]: {
          [pe.SuspendProject]: [Te.Percentage, Te.Value]
        },
        [Ht.AdTag]: {
          [pe.SuspendProject]: [Te.Percentage, Te.Value]
        }
        // [AdLevelTypeGoogle.Ad]: {
        //   [ActionType.SuspendProject]: [ValueType.Percentage, ValueType.Value],
        // },
      },
      [at.Facebook]: {
        [ht.Campaign]: {
          [pe.SetNewBudget]: [Te.Value],
          [pe.IncreaseBudget]: [Te.Percentage, Te.Value],
          [pe.LowerBudget]: [Te.Percentage, Te.Value],
          [pe.OpenProject]: [Te.Percentage, Te.Value],
          [pe.SuspendProject]: [Te.Percentage, Te.Value]
        },
        [ht.AdGroup]: {
          [pe.SetNewBudget]: [Te.Value],
          [pe.IncreaseBudget]: [Te.Percentage, Te.Value],
          [pe.LowerBudget]: [Te.Percentage, Te.Value],
          [pe.OpenProject]: [Te.Percentage, Te.Value],
          [pe.SuspendProject]: [Te.Percentage, Te.Value]
        },
        [ht.AdTag]: {
          [pe.SuspendProject]: [Te.Percentage, Te.Value]
        },
        [ht.Ad]: {
          [pe.SuspendProject]: [Te.Percentage, Te.Value]
        }
      }
    }, u = C(() => {
      var te, Y, ne;
      const G = (te = r.value) == null ? void 0 : te.client, X = (Y = r.value) == null ? void 0 : Y.adLevel, se = (ne = r.value) == null ? void 0 : ne.action;
      if (G && X && se) {
        const we = c[G];
        if (we) {
          const D = we[X];
          if (D) {
            const w = D[se];
            if (w)
              return w;
          }
        }
      }
      return [Te.Percentage, Te.Value];
    }), d = {
      target: {
        value: ""
      }
    }, f = C(() => r.value.client ? `${r.value.client}` : ""), p = (G) => {
      r.value.client = Number(G), delete r.value.target, g(d);
    }, v = C(() => r.value.adLevel ? r.value.adLevel : ""), g = (G) => {
      r.value.adLevel = Number(G.target.value), delete r.value.action, delete r.value.target, m(d);
    }, b = C(() => r.value.targetType ? r.value.targetType : ""), m = (G) => {
      r.value.targetType = Number(G.target.value);
    }, y = C(() => r.value.action ? r.value.action : ""), E = (G) => {
      r.value.action = Number(G.target.value);
    }, _ = C(() => {
      var G;
      return (G = r.value) != null && G.params || (r.value.params = {}), r.value.params.budgetType ? r.value.params.budgetType : "";
    }), $ = (G) => r.value.params.budgetType = G, O = C(() => {
      var G;
      return (G = r.value) != null && G.params || (r.value.params = {}), r.value.params.valueType ? r.value.params.valueType : "";
    }), A = (G) => {
      r.value.params.valueType = G;
    }, x = B(!1);
    nn("addTarget", (G) => {
      var se;
      (se = r.value) != null && se.target || (r.value.target = []);
      const X = r.value.target.findIndex(
        (te) => te === G.id
      );
      X === -1 ? r.value.target.push(G.id) : r.value.target.splice(X, 1);
    });
    const k = B(), R = async () => {
      const G = await QL({
        method: "get",
        url: `${pm()}/heybear/api/automation/platform-target?client=${f.value}&adLevel=${v.value}`,
        withCredentials: !0,
        headers: {
          Authorization: mm()
        }
      });
      k.value = G.data.data, me.value = Ie(k.value);
    }, N = B(!1), U = C(() => {
      const G = le.value.trim().toLowerCase(), X = (Y) => {
        let ne = [];
        for (const we of Y) {
          let D = !1;
          if (me.value.forEach((w) => {
            w.label == we.type && w.status == we.enabled && !we.enabled && (D = !0);
          }), !D && ((!we.children || we.children.length === 0) && ne.push(we), we.children && we.children.length > 0)) {
            const w = X(we.children);
            w.length > 0 && ne.push({
              id: we.id,
              name: we.name,
              children: w,
              enabled: we.enabled
            });
          }
        }
        return ne;
      }, se = [];
      for (const Y of k.value)
        if (Y.children) {
          const ne = X(Y.children);
          ne.length > 0 && se.push({
            id: Y.id,
            name: Y.name,
            type: Y.type,
            children: ne
          });
        } else
          se.push({
            id: Y.id,
            name: Y.name,
            type: Y.type
          });
      function te(Y, ne) {
        ke.value = 0;
        function we(L) {
          !L.children || L.children.length === 0 ? ke.value++ : L.children.forEach((Z) => we(Z));
        }
        function D(L, Z) {
          const ie = { ...L }, Oe = ie.children;
          if (ie.name.toLowerCase().includes(Z)) {
            const qe = (Oe || []).filter(
              (We) => We.name.toLowerCase().includes(Z)
            );
            return qe.length > 0 && (ie.children = qe), ie;
          } else if (Oe) {
            const qe = Oe.map((We) => D(We, Z)).filter(Boolean);
            if (qe.length > 0)
              return ie.children = qe, ie;
          }
          return null;
        }
        const w = Y.map((L) => D(L, ne)).filter(Boolean);
        return w.forEach((L) => we(L)), w;
      }
      return te(se, G);
    }), J = () => {
      r.value.target = [];
    }, z = async () => {
      x.value = !0, N.value = !0, await R(), N.value = !1;
    }, ee = Be("lockScroll");
    _e(x, (G) => {
      ee.value = G, G || (le.value = "");
    });
    const le = B(""), ke = B(), ve = C(() => {
      var G;
      return (G = r.value) != null && G.target || (r.value.target = []), r.value.target.length > 0 && r.value.target.length == ke.value;
    }), H = () => {
      var se;
      const G = U.value, X = (te) => {
        for (const Y of te)
          Y.children && Y.children.length > 0 ? X(Y.children) : r.value.target.push(Y.id);
      };
      (se = r.value) != null && se.target || (r.value.target = []), r.value.target.length ? r.value.target = [] : (r.value.target = [], X(G));
    }, me = B([]);
    function Ie(G) {
      const X = [];
      function se(te, Y) {
        if (te.type !== 1 && te.type !== 5 && (X[Y - 1] || (X[Y - 1] = {
          label: te.type,
          status: !1
        }), X[Y - 1].status = !0), te.children && te.children.length > 0)
          for (const ne of te.children)
            se(ne, Y + 1);
      }
      return G.forEach((te) => {
        se(te, 1);
      }), X.filter((te) => te !== void 0);
    }
    const He = B(!1), oe = () => {
      o.value = !1, r.value = {}, Et(() => {
        delete n.value.action;
      });
    }, Se = C(() => {
      const G = f.value, X = r.value.adLevel, se = _.value;
      if (se === "")
        return { show: !1 };
      const te = G === at.Google && X === Ht.Campaign, Y = G === at.Facebook && X === ht.Campaign, ne = G === at.Facebook && X === ht.AdGroup, we = te || Y || ne, D = se === er.DailyBudget ? t("日預算") : t("總預算"), w = `${at[G]}${s.value[X]}`, L = we ? `${t("若{clientAndAdLevel}設定為{paramsBudgetTypeValue}，則不會變更", {
        clientAndAdLevel: w,
        paramsBudgetTypeValue: se !== hn ? D : ""
      })}` : "";
      return { show: we, msg: L };
    });
    return Gt(() => {
      He.value = !0;
    }), (G, X) => h(o) ? (T(), De(uo, {
      key: 1,
      title: h(t)("動作"),
      icon: "PhNavigationArrow",
      id: "action"
    }, {
      default: he(() => {
        var se, te;
        return [
          M("div", u8, [
            M("div", c8, [
              M("div", {
                class: "cursor-pointer text-dark-4 absolute bottom-4 right-3 hover:text-dark-3 transition-all p3-r",
                onClick: oe
              }, [
                ce(h(i0), {
                  size: "18",
                  weight: "bold"
                })
              ]),
              M("label", d8, [
                M("div", f8, [
                  M("span", p8, ae(h(t)("平台")), 1),
                  M("input", {
                    type: "text",
                    class: "opacity-0 absolute left-0 top-0 pointer-events-none",
                    required: "",
                    value: h(f)
                  }, null, 8, m8)
                ]),
                M("div", v8, [
                  (T(!0), I(Ee, null, Ue(h(at), (Y, ne, we) => (T(), I("div", {
                    class: "flex",
                    key: ne
                  }, [
                    Number.isInteger(Y) ? re("", !0) : (T(), I(Ee, { key: 0 }, [
                      M("span", {
                        class: xe(["cursor-pointer hover:drop-shadow-md", {
                          "text-true-blue-3 drop-shadow-sm p3-b": h(f) == ne
                        }]),
                        onClick: (D) => p(ne)
                      }, ae(Y), 11, h8),
                      we < Object.keys(h(at)).filter((D) => isNaN(Number(D))).length - 1 ? (T(), I("div", g8, " | ")) : re("", !0)
                    ], 64))
                  ]))), 128))
                ])
              ]),
              M("div", y8, [
                M("label", {
                  class: xe(["flex justify-start items-center gap-4", { "pointer-events-none": h(f) == hn }])
                }, [
                  M("span", b8, ae(h(t)("層級")), 1),
                  xt(M("select", {
                    class: xe(["p3-b text-true-blue-3 min-w-[5rem] w-20 flex cursor-pointer items-center justify-center gap-4 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50", { "!w-fit": h(v) != hn }]),
                    "onUpdate:modelValue": X[1] || (X[1] = (Y) => tt(v) ? v.value = Y : null),
                    onChange: g,
                    required: ""
                  }, [
                    M("option", _8, ae(h(t)("請選擇")), 1),
                    (T(!0), I(Ee, null, Ue(h(s), (Y, ne) => (T(), I(Ee, { key: ne }, [
                      !Number.isInteger(Y) && h(f) != hn ? (T(), I("option", {
                        key: 0,
                        value: ne
                      }, ae(h(t)(`${h(at)[h(f)]}${Y}`)), 9, w8)) : re("", !0)
                    ], 64))), 128))
                  ], 34), [
                    [Tr, h(v)]
                  ])
                ], 2),
                M("div", E8, [
                  M("label", {
                    class: xe(["flex justify-start items-center gap-4", { "pointer-events-none": h(v) == hn }])
                  }, [
                    M("span", O8, ae(h(t)("項目")), 1),
                    xt(M("select", {
                      class: xe(["p3-b text-true-blue-3 min-w-[5rem] w-20 flex cursor-pointer items-center justify-center gap-4 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50", { "!w-fit": h(b) != hn }]),
                      "onUpdate:modelValue": X[2] || (X[2] = (Y) => tt(b) ? b.value = Y : null),
                      onChange: m,
                      required: ""
                    }, [
                      M("option", D8, ae(h(t)("請選擇")), 1),
                      (T(!0), I(Ee, null, Ue(h(Un), (Y, ne) => (T(), I(Ee, { key: ne }, [
                        Number.isInteger(Y) ? re("", !0) : (T(), I("option", {
                          key: 0,
                          value: ne
                        }, ae(h(t)(Y)), 9, k8))
                      ], 64))), 128))
                    ], 34), [
                      [Tr, h(b)]
                    ])
                  ], 2),
                  h(b) === h(Un).ForID ? (T(), I("div", $8, [
                    h(b) === h(Un).ForID ? (T(), I("span", {
                      key: 0,
                      class: xe(["p3-b w-fit flex cursor-pointer items-center justify-center z-[2]", [
                        h(r).target && h(r).target.length ? " text-true-blue-3" : "text-red-2 hover:text-red-1"
                      ]]),
                      onClick: z
                    }, ae(h(r).target && h(r).target.length ? `${h(t)("已選{count}個項目", {
                      count: h(r).target.length
                    })}` : h(t)("未選擇")), 3)) : re("", !0),
                    M("input", {
                      type: "text",
                      class: "opacity-0 absolute left-0 top-0",
                      required: "",
                      value: (se = h(r)) != null && se.target && (te = h(r)) != null && te.target.length ? "123" : ""
                    }, null, 8, T8)
                  ])) : re("", !0)
                ])
              ])
            ]),
            h(He) ? (T(), De(Bc, {
              key: 0,
              to: "#editor-container-outer"
            }, [
              h(x) ? (T(), I("div", A8, [
                M("div", x8, [
                  M("div", C8, [
                    M("span", N8, ae(h(t)("請選擇目標")), 1),
                    ce(h(js), {
                      class: "text-dark-3 cursor-pointer hover:text-dark-2 absolute top-4 right-4",
                      weight: "bold",
                      onClick: X[3] || (X[3] = (Y) => x.value = !1)
                    })
                  ]),
                  ce(Ea, {
                    modelValue: h(le),
                    "onUpdate:modelValue": X[4] || (X[4] = (Y) => tt(le) ? le.value = Y : null),
                    placeholder: h(t)("搜尋"),
                    class: "w-full mr-auto mb-4"
                  }, null, 8, ["modelValue", "placeholder"]),
                  !h(N) && h(me).length ? (T(), I("div", P8, [
                    M("span", S8, ae(h(t)("篩選")), 1),
                    (T(!0), I(Ee, null, Ue(h(me), (Y) => (T(), I("label", {
                      class: "p3-r flex cursor-pointer items-center gap-1 rounded-md bg-light-3 px-2 py-0.5 text-dark-4 hover:shadow-01",
                      key: Y.label,
                      for: Y.label
                    }, [
                      xt(M("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": (ne) => Y.status = ne,
                        id: Y.label,
                        class: "hidden",
                        onChange: J
                      }, null, 40, I8), [
                        [Yc, Y.status]
                      ]),
                      xt(M("div", L8, null, 512), [
                        [Hc, !Y.status]
                      ]),
                      jr(" " + ae(h(t)(
                        `${h(at)[h(f)]}${Y.status ? "On" : "Off"}${Y.label}`
                      )), 1)
                    ], 8, M8))), 128))
                  ])) : re("", !0),
                  h(N) ? re("", !0) : (T(), I("div", R8, [
                    M("div", F8, [
                      M("label", {
                        class: "cursor-pointer",
                        onClick: H
                      }, ae(h(ve) ? h(t)("取消全選") : h(t)("全選")), 1)
                    ])
                  ])),
                  h(N) ? (T(), I("div", V8)) : (T(), I("div", B8, [
                    h(U).length ? (T(!0), I(Ee, { key: 1 }, Ue(h(U), (Y) => {
                      var ne;
                      return T(), De(nm, {
                        key: Y.id,
                        target: Y,
                        targets: ((ne = h(r)) == null ? void 0 : ne.target) ?? []
                      }, null, 8, ["target", "targets"]);
                    }), 128)) : (T(), I("div", Y8, [
                      ce(h(V1), {
                        size: 48,
                        class: "text-dark-4"
                      }),
                      M("p", H8, ae(h(t)("No Data")), 1)
                    ]))
                  ])),
                  h(N) ? re("", !0) : (T(), I("div", U8, [
                    M("div", {
                      class: "p3-r flex cursor-pointer items-center gap-1 rounded bg-true-blue-2 border border-transparent px-4 py-1.5 text-light-5 hover:bg-true-blue-3 transition-all",
                      onClick: X[5] || (X[5] = (Y) => x.value = !1)
                    }, ae(h(t)("確定")), 1)
                  ]))
                ])
              ])) : re("", !0)
            ])) : re("", !0),
            M("div", j8, [
              M("label", {
                class: xe(["flex justify-start items-center gap-4", { "pointer-events-none": h(b) == hn }])
              }, [
                M("span", W8, ae(h(t)("執行")), 1),
                xt(M("select", {
                  class: xe(["p3-b text-true-blue-3 min-w-[5rem] w-20 flex cursor-pointer items-center justify-center gap-4 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50", { "!w-fit": h(y) != hn }]),
                  "onUpdate:modelValue": X[6] || (X[6] = (Y) => tt(y) ? y.value = Y : null),
                  onChange: E,
                  required: ""
                }, [
                  M("option", G8, ae(h(t)("請選擇")), 1),
                  (T(!0), I(Ee, null, Ue(h(l), (Y, ne) => (T(), I("option", {
                    key: ne,
                    value: Y
                  }, ae(h(t)(ne)), 9, z8))), 128))
                ], 34), [
                  [Tr, h(y)]
                ])
              ], 2),
              h(r).action == h(pe).SetNewBudget || h(r).action == h(pe).IncreaseBudget || h(r).action == h(pe).LowerBudget ? (T(), I(Ee, { key: 0 }, [
                M("label", K8, [
                  M("span", q8, ae(h(t)("類型")), 1),
                  M("div", Z8, [
                    (T(!0), I(Ee, null, Ue(h(er), (Y, ne, we) => (T(), I("div", {
                      class: "flex",
                      key: ne
                    }, [
                      Number.isInteger(Y) ? re("", !0) : (T(), I(Ee, { key: 0 }, [
                        M("span", {
                          class: xe(["cursor-pointer hover:drop-shadow-md", {
                            "text-true-blue-3 drop-shadow-sm p3-b": h(_) == h(er)[ne]
                          }]),
                          onClick: (D) => $(h(er)[ne])
                        }, ae(h(t)(Y)), 11, X8),
                        we < Object.keys(h(er)).filter(
                          (D) => isNaN(Number(D))
                        ).length - 1 ? (T(), I("div", J8, " | ")) : re("", !0)
                      ], 64))
                    ]))), 128))
                  ]),
                  h(Se).show ? (T(), I("span", Q8, ae(h(Se).msg), 1)) : re("", !0)
                ]),
                M("div", eR, [
                  M("div", tR, [
                    M("span", nR, ae(h(t)("調整")), 1),
                    M("div", rR, [
                      M("div", aR, [
                        M("div", oR, [
                          (T(!0), I(Ee, null, Ue(h(u), (Y, ne) => (T(), I("div", {
                            class: "flex",
                            key: Y
                          }, [
                            Number.isInteger(Y) ? re("", !0) : (T(), I(Ee, { key: 0 }, [
                              M("span", {
                                class: xe(["cursor-pointer hover:drop-shadow-md", {
                                  "text-true-blue-3 drop-shadow-sm p3-b": h(O) == Y
                                }]),
                                onClick: (we) => A(Y)
                              }, ae(h(t)(`action${Y}`)), 11, sR),
                              ne < h(u).length - 1 ? (T(), I("div", iR, " | ")) : re("", !0)
                            ], 64))
                          ]))), 128))
                        ]),
                        h(O) != hn ? (T(), I("label", lR, [
                          ce(Ea, {
                            modelValue: h(r).params.value,
                            "onUpdate:modelValue": X[7] || (X[7] = (Y) => h(r).params.value = Y),
                            inputClass: "text-true-blue-3",
                            type: "number",
                            required: !0
                          }, null, 8, ["modelValue"]),
                          M("span", uR, ae(h(r).params.valueType === h(Te).Percentage ? "%" : h(t)("元")), 1)
                        ])) : re("", !0)
                      ])
                    ])
                  ]),
                  h(r).action == h(pe).IncreaseBudget || h(r).action == h(pe).LowerBudget ? (T(), I("div", cR, [
                    M("div", dR, [
                      M("span", fR, ae(h(r).action == h(pe).IncreaseBudget ? h(t)("預算上限") : h(t)("預算下限")), 1),
                      M("div", pR, [
                        h(a) ? re("", !0) : (T(), I("div", {
                          key: 0,
                          class: "p3-b text-true-blue-3 w-fit flex cursor-pointer items-center justify-center gap-4 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                          onClick: X[8] || (X[8] = (Y) => a.value = !0)
                        }, ae(h(t)("未設定")), 1)),
                        h(a) ? (T(), I("div", mR, [
                          ce(Ea, {
                            modelValue: h(r).params.limit,
                            "onUpdate:modelValue": X[9] || (X[9] = (Y) => h(r).params.limit = Y),
                            inputClass: "text-true-blue-3",
                            type: "number",
                            required: !0
                          }, null, 8, ["modelValue"])
                        ])) : re("", !0),
                        h(a) ? (T(), De(h(js), {
                          key: 2,
                          onClick: X[10] || (X[10] = (Y) => a.value = !1),
                          weight: "bold",
                          class: "text-dark-4 hover:text-dark-3 p3-b cursor-pointer"
                        })) : re("", !0)
                      ])
                    ])
                  ])) : re("", !0)
                ])
              ], 64)) : re("", !0)
            ])
          ])
        ];
      }),
      _: 1
    }, 8, ["title"])) : (T(), I("div", {
      key: 0,
      class: "p3-b cursor-pointer rounded shadow-01 hover:shadow-02 transition-all bg-light-5 py-1 px-2 text-dark-4 flex items-center justify-center",
      onClick: X[0] || (X[0] = (se) => o.value = !0)
    }, " + " + ae(h(t)("加入動作")), 1));
  }
}), hR = { class: "flex flex-1 items-center justify-start gap-4" }, gR = { class: "p3-r text-dark-4" }, yR = {
  value: "",
  disabled: ""
}, bR = ["value"], _R = /* @__PURE__ */ de({
  __name: "Notification",
  setup(e) {
    const { t } = un.global, n = Be("eventData"), r = B(
      n.value.notify ?? {
        email: Da.All
      }
    );
    return _e(
      r,
      (o) => {
        n.value.notify = o;
      },
      { deep: !0, immediate: !0 }
    ), (o, a) => (T(), I("div", null, [
      M("label", hR, [
        M("span", gR, ae(h(t)("以電子郵件寄出結果")), 1),
        xt(M("select", {
          class: "p3-b text-true-blue-3 flex cursor-pointer items-center justify-center gap-4 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
          "onUpdate:modelValue": a[0] || (a[0] = (s) => h(r).email = s)
        }, [
          M("option", yR, ae(h(t)("請選擇")), 1),
          (T(!0), I(Ee, null, Ue(h(Da), (s, i) => (T(), I(Ee, { key: i }, [
            Number.isInteger(s) ? re("", !0) : (T(), I("option", {
              key: 0,
              value: Number(i)
            }, ae(h(t)(`mail${s}`)), 9, bR))
          ], 64))), 128))
        ], 512), [
          [Tr, h(r).email]
        ])
      ])
    ]));
  }
}), wR = ["onSubmit"], ER = { class: "space-y-1" }, OR = {
  key: 0,
  class: "text-red-1"
}, DR = 100, kR = /* @__PURE__ */ de({
  __name: "TCEventEditorApp",
  props: {
    data: {}
  },
  emits: ["update:data"],
  setup(e, { expose: t, emit: n }) {
    const r = e, { t: o } = un.global, a = C(() => JSON.parse(r.data || "{}")), s = (f) => {
      const p = Object.fromEntries(
        Object.entries(f).filter(([v, g]) => g !== null)
      );
      return JSON.stringify(p, null, 4);
    }, i = B([]), l = (f) => {
      f.preventDefault(), n("update:data", s(a.value));
    }, c = () => {
      var f;
      for (const p of document.getElementById("editor-container").querySelectorAll("[required]"))
        if (p.getAttribute("required") == null && !p.reportValidity())
          throw new Error("未填寫完畢");
      (f = u.value) == null || f.click();
    };
    nn("eventData", a), nn("checkDataValid", i);
    const u = B(), d = B(!1);
    return nn("lockScroll", d), t({
      saveData: c
    }), (f, p) => r.data ? (T(), I("div", {
      key: 0,
      class: xe([h(d) ? "overflow-y-hidden" : "overflow-y-auto"]),
      id: "editor-container-outer"
    }, [
      M("form", {
        class: "flex flex-col gap-5 relative p-5 h-fit text-dark-1 min-h-full w-full",
        id: "editor-container",
        onSubmit: Oa(l, ["prevent"])
      }, [
        ce(uo, {
          title: h(o)("規則名稱"),
          icon: "PhNotepad",
          id: "name"
        }, {
          default: he(() => [
            M("div", ER, [
              ce(Ea, {
                modelValue: h(a).title,
                "onUpdate:modelValue": p[0] || (p[0] = (v) => h(a).title = v),
                inputClass: "text-true-blue-3",
                maxLength: DR,
                required: !0
              }, null, 8, ["modelValue"])
            ])
          ]),
          _: 1
        }, 8, ["title"]),
        ce(uo, {
          title: h(o)("執行時間"),
          icon: "PhCalendarCheck",
          id: "time"
        }, {
          default: he(() => [
            ce(MI, {
              frequency: h(a).frequency,
              "onUpdate:frequency": p[1] || (p[1] = (v) => h(a).frequency = v),
              interval: h(a).interval,
              "onUpdate:interval": p[2] || (p[2] = (v) => h(a).interval = v)
            }, null, 8, ["frequency", "interval"])
          ]),
          _: 1
        }, 8, ["title"]),
        ce(uo, {
          title: h(o)("通知"),
          icon: "PhBellRinging",
          id: "notification"
        }, {
          default: he(() => [
            ce(_R)
          ]),
          _: 1
        }, 8, ["title"]),
        ce(vR),
        h(i).length ? (T(), I("span", OR, ae(h(o)("資料未填寫完整")), 1)) : re("", !0),
        M("button", {
          ref_key: "submitBtn",
          ref: u,
          class: "p-2 px-3 rounded bg-slate-100 hover:bg-sky-500 hover:text-white hidden"
        }, ae(h(o)("保存")), 513)
      ], 40, wR)
    ], 2)) : re("", !0);
  }
});
const $R = /* @__PURE__ */ La(kR, [["__scopeId", "data-v-d5b073a9"]]);
function VR(e) {
  if (!e)
    return "";
  const { t } = un.global;
  let n, r;
  return e.client === at.Google ? r = Ht : r = ht, e.targetType === Un.ForAll && (n = t("所有的") + t(`${at[e.client]}${r[e.adLevel]}`)), e.targetType === Un.ForActive && (n = t("已開啟的") + t(`${at[e.client]}${r[e.adLevel]}`)), e.targetType === Un.ForID && (n = `${e.target.length}${t("個")}` + t(`${at[e.client]}${r[e.adLevel]}`)), n;
}
function BR(e) {
  const { t } = un.global;
  return e != null && e.email ? t(`mail${Da[e.email]}`) : "";
}
function YR(e) {
  un.global.locale.value = e;
}
const TR = (e) => {
  e.component("TCEventEditorApp", $R);
}, HR = {
  install: TR
};
export {
  js as F,
  mf as G,
  $R as T,
  V1 as a,
  i0 as b,
  CR as c,
  VR as d,
  NR as e,
  BR as f,
  Wh as g,
  YR as h,
  HR as i,
  xR as s
};
