import { defineComponent as Re, openBlock as F, createElementBlock as G, createElementVNode as j, toDisplayString as ke, h as wr, getCurrentInstance as xr, effectScope as h0, inject as kt, onMounted as Hr, onUnmounted as Pa, shallowRef as Wh, ref as Q, computed as W, onBeforeMount as lM, watch as Ue, Fragment as Ke, isRef as un, createVNode as Me, Text as uM, unref as y, getCurrentScope as Uh, onScopeDispose as Vh, shallowReadonly as Ps, mergeProps as Kt, cloneVNode as cM, toRefs as oo, reactive as xl, mergeDefaults as p0, watchEffect as Gn, normalizeStyle as Fi, withCtx as Pe, renderSlot as rt, markRaw as zd, createBlock as Ze, readonly as fM, nextTick as En, onBeforeUnmount as m0, withKeys as jd, withModifiers as xa, createCommentVNode as De, resolveDynamicComponent as Zs, normalizeProps as ts, guardReactiveProps as Mc, provide as ii, customRef as v0, onBeforeUpdate as dM, onUpdated as hM, toHandlerKey as pM, camelize as g0, Teleport as _0, renderList as Rt, normalizeClass as et, withDirectives as rr, toRef as wd, resolveComponent as Ii, Transition as lo, createTextVNode as us, resolveDirective as y0, toHandlers as b0, vModelCheckbox as w0, vModelSelect as Vs, defineAsyncComponent as mM, vShow as O0, pushScopeId as vM, popScopeId as gM, withScopeId as _M, shallowReactive as yM } from "vue";
let E0 = "", D0 = "";
function Oee(e) {
  E0 = e;
}
function Eee(e) {
  D0 = e;
}
function bM() {
  return E0;
}
function wM() {
  return D0;
}
class OM {
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
var fl = /* @__PURE__ */ ((e) => (e[e.None = -1] = "None", e[e.All = 3] = "All", e[e.Error = 4] = "Error", e))(fl || {}), S0 = /* @__PURE__ */ ((e) => (e[e.Off = 0] = "Off", e[e.On = 1] = "On", e))(S0 || {}), ln = /* @__PURE__ */ ((e) => (e[e.Google = 1] = "Google", e[e.Facebook = 2] = "Facebook", e))(ln || {}), Fr = /* @__PURE__ */ ((e) => (e[e.Campaign = 2] = "Campaign", e[e.AdGroup = 3] = "AdGroup", e[e.AdTag = 5] = "AdTag", e))(Fr || {}), Bn = /* @__PURE__ */ ((e) => (e[e.Campaign = 2] = "Campaign", e[e.AdGroup = 3] = "AdGroup", e[e.Ad = 4] = "Ad", e[e.AdTag = 5] = "AdTag", e))(Bn || {}), Da = /* @__PURE__ */ ((e) => (e[e.ForAll = 1] = "ForAll", e[e.ForID = 2] = "ForID", e[e.ForActive = 3] = "ForActive", e))(Da || {}), x0 = /* @__PURE__ */ ((e) => (e[e.Account = 1] = "Account", e[e.Campaign = 2] = "Campaign", e[e.AdGroup = 3] = "AdGroup", e))(x0 || {}), T0 = /* @__PURE__ */ ((e) => (e[e.Account = 1] = "Account", e[e.Campaign = 2] = "Campaign", e[e.AdGroup = 3] = "AdGroup", e))(T0 || {}), St = /* @__PURE__ */ ((e) => (e[e.Never = -1] = "Never", e[e.Hour = 1] = "Hour", e[e.Day = 2] = "Day", e))(St || {}), yr = /* @__PURE__ */ ((e) => (e[e.Sunday = 0] = "Sunday", e[e.Monday = 1] = "Monday", e[e.Tuesday = 2] = "Tuesday", e[e.Wednesday = 3] = "Wednesday", e[e.Thursday = 4] = "Thursday", e[e.Friday = 5] = "Friday", e[e.Saturday = 6] = "Saturday", e[e.Weekday = -1] = "Weekday", e[e.Weekend = -2] = "Weekend", e))(yr || {}), Pi = /* @__PURE__ */ ((e) => (e[e.First = 1] = "First", e[e.Second = 2] = "Second", e[e.Third = 3] = "Third", e[e.Fourth = 4] = "Fourth", e[e.Fifth = 5] = "Fifth", e[e.Last = -1] = "Last", e))(Pi || {}), Vn = /* @__PURE__ */ ((e) => (e[e.January = 1] = "January", e[e.February = 2] = "February", e[e.March = 3] = "March", e[e.April = 4] = "April", e[e.May = 5] = "May", e[e.June = 6] = "June", e[e.July = 7] = "July", e[e.August = 8] = "August", e[e.September = 9] = "September", e[e.October = 10] = "October", e[e.November = 11] = "November", e[e.December = 12] = "December", e))(Vn || {}), Ye = /* @__PURE__ */ ((e) => (e[e.SetNewBudget = 1] = "SetNewBudget", e[e.IncreaseBudget = 2] = "IncreaseBudget", e[e.LowerBudget = 3] = "LowerBudget", e[e.OpenProject = 4] = "OpenProject", e[e.SuspendProject = 5] = "SuspendProject", e[e.None = -1] = "None", e))(Ye || {}), Ga = /* @__PURE__ */ ((e) => (e.DailyBudget = "dailyBudget", e.TotalBudget = "totalBudget", e))(Ga || {}), ot = /* @__PURE__ */ ((e) => (e.Value = "value", e.Percentage = "percentage", e))(ot || {}), k0 = /* @__PURE__ */ ((e) => (e.BudgetRemaining = "accountBudget", e.BudgetCap = "budgetCap", e.Clicks = "clicks", e.Impressions = "impressions", e.Cpc = "cpc", e.Spend = "cost", e.Conversions = "conversions", e.ConversionSpend = "conversionsValue", e.ReturnOnADSpending = "roas", e))(k0 || {}), A0 = /* @__PURE__ */ ((e) => (e[e.Today = 1] = "Today", e[e.Yesterday = 2] = "Yesterday", e[e.Last3Days = 3] = "Last3Days", e[e.Last7Days = 4] = "Last7Days", e[e.ThisMonth = 5] = "ThisMonth", e[e.SpecifiedTime = -1] = "SpecifiedTime", e))(A0 || {}), M0 = /* @__PURE__ */ ((e) => (e.MoreThan = ">", e.GreaterOrEqualTo = ">=", e.Equal = "==", e.LessThan = "<", e.LessThanOrEqualTo = "<=", e))(M0 || {});
const Dee = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ActionType: Ye,
  AdLevelTypeFacebook: Bn,
  AdLevelTypeGoogle: Fr,
  BudgetType: Ga,
  ClientType: ln,
  ConditionAdLevelTypeFacebook: T0,
  ConditionAdLevelTypeGoogle: x0,
  ConditionType: k0,
  DateRangeType: A0,
  EmailNotify: fl,
  EventActionTargetType: Da,
  EventHelper: OM,
  FrequencyType: St,
  MonthType: Vn,
  OperationType: M0,
  ToggleNotify: S0,
  ValueType: ot,
  WeekOrdinalWordsType: Pi,
  WeekdaysType: yr
}, Symbol.toStringTag, { value: "Module" })), EM = { class: "flex" }, DM = ["checked", "id"], SM = ["for"], xM = /* @__PURE__ */ Re({
  __name: "CheckBox",
  props: {
    label: {},
    checked: { type: Boolean },
    fieldId: {}
  },
  emits: ["update:checked"],
  setup(e, { emit: t }) {
    return (n, r) => (F(), G("div", EM, [
      j("input", {
        onInput: r[0] || (r[0] = (a) => n.$emit("update:checked", a.target.checked)),
        type: "checkbox",
        checked: n.checked,
        id: n.fieldId,
        class: "hidden"
      }, null, 40, DM),
      j("label", {
        for: n.fieldId,
        class: "p3-b text-dark-3 cursor-pointer rounded hover:bg-light-4 shadow-01 px-1 py-0.5 flex justify-center items-center min-w-[1.75rem] min-h-[1.75rem]"
      }, ke(n.label), 9, SM)
    ]));
  }
});
const uo = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, a] of t)
    n[r] = a;
  return n;
}, Wg = /* @__PURE__ */ uo(xM, [["__scopeId", "data-v-4f6ab498"]]);
/*!
  * shared v9.5.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */
const si = typeof window < "u";
let ar, ns;
if (process.env.NODE_ENV !== "production") {
  const e = si && window.performance;
  e && e.mark && e.measure && e.clearMarks && // @ts-ignore browser compat
  e.clearMeasures && (ar = (t) => {
    e.mark(t);
  }, ns = (t, n, r) => {
    e.measure(t, n, r), e.clearMarks(n), e.clearMarks(r);
  });
}
const TM = /\{([0-9a-zA-Z]+)\}/g;
function Bh(e, ...t) {
  return t.length === 1 && wt(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(TM, (n, r) => t.hasOwnProperty(r) ? t[r] : "");
}
const ci = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), kM = (e, t, n) => AM({ l: e, k: t, s: n }), AM = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), cn = (e) => typeof e == "number" && isFinite(e), MM = (e) => P0(e) === "[object Date]", Ta = (e) => P0(e) === "[object RegExp]", $c = (e) => qe(e) && Object.keys(e).length === 0, gn = Object.assign;
let Ug;
const Ci = () => Ug || (Ug = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Vg(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const $M = Object.prototype.hasOwnProperty;
function Hh(e, t) {
  return $M.call(e, t);
}
const Ft = Array.isArray, Gt = (e) => typeof e == "function", ge = (e) => typeof e == "string", ct = (e) => typeof e == "boolean", wt = (e) => e !== null && typeof e == "object", $0 = Object.prototype.toString, P0 = (e) => $0.call(e), qe = (e) => {
  if (!wt(e))
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t.constructor === Object;
}, PM = (e) => e == null ? "" : Ft(e) || qe(e) && e.toString === $0 ? JSON.stringify(e, null, 2) : String(e);
function CM(e, t = "") {
  return e.reduce((n, r, a) => a === 0 ? n + r : n + t + r, "");
}
const Bg = 2;
function IM(e, t = 0, n = e.length) {
  const r = e.split(/\r?\n/);
  let a = 0;
  const s = [];
  for (let l = 0; l < r.length; l++)
    if (a += r[l].length + 1, a >= t) {
      for (let u = l - Bg; u <= l + Bg || n > a; u++) {
        if (u < 0 || u >= r.length)
          continue;
        const f = u + 1;
        s.push(`${f}${" ".repeat(3 - String(f).length)}|  ${r[u]}`);
        const h = r[u].length;
        if (u === l) {
          const d = t - (a - h) + 1, m = Math.max(1, n > a ? h - d : n - t);
          s.push("   |  " + " ".repeat(d) + "^".repeat(m));
        } else if (u > l) {
          if (n > a) {
            const d = Math.max(Math.min(n - a, h), 1);
            s.push("   |  " + "^".repeat(d));
          }
          a += h + 1;
        }
      }
      break;
    }
  return s.join(`
`);
}
function zh(e) {
  let t = e;
  return () => ++t;
}
function hn(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const Hg = {};
function NM(e) {
  Hg[e] || (Hg[e] = !0, hn(e));
}
function jh() {
  const e = /* @__PURE__ */ new Map();
  return {
    events: e,
    on(n, r) {
      const a = e.get(n);
      a && a.push(r) || e.set(n, [r]);
    },
    off(n, r) {
      const a = e.get(n);
      a && a.splice(a.indexOf(r) >>> 0, 1);
    },
    emit(n, r) {
      (e.get(n) || []).slice().map((a) => a(r)), (e.get("*") || []).slice().map((a) => a(n, r));
    }
  };
}
/*!
  * message-compiler v9.5.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */
function LM(e, t, n) {
  return { line: e, column: t, offset: n };
}
function Gd(e, t, n) {
  const r = { start: e, end: t };
  return n != null && (r.source = n), r;
}
const RM = /\{([0-9a-zA-Z]+)\}/g;
function FM(e, ...t) {
  return t.length === 1 && YM(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(RM, (n, r) => t.hasOwnProperty(r) ? t[r] : "");
}
const C0 = Object.assign, zg = (e) => typeof e == "string", YM = (e) => e !== null && typeof e == "object";
function I0(e, t = "") {
  return e.reduce((n, r, a) => a === 0 ? n + r : n + t + r, "");
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
}, WM = {
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
function co(e, t, n = {}) {
  const { domain: r, messages: a, args: s } = n, l = FM((a || WM)[e] || "", ...s || []), u = new SyntaxError(String(l));
  return u.code = e, t && (u.location = t), u.domain = r, u;
}
function UM(e) {
  throw e;
}
const VM = /<\/?[\w\s="/.':;#-\/]+>/, BM = (e) => VM.test(e), ki = " ", HM = "\r", Cn = `
`, zM = String.fromCharCode(8232), jM = String.fromCharCode(8233);
function GM(e) {
  const t = e;
  let n = 0, r = 1, a = 1, s = 0;
  const l = (N) => t[N] === HM && t[N + 1] === Cn, u = (N) => t[N] === Cn, f = (N) => t[N] === jM, h = (N) => t[N] === zM, d = (N) => l(N) || u(N) || f(N) || h(N), m = () => n, v = () => r, g = () => a, w = () => s, O = (N) => l(N) || f(N) || h(N) ? Cn : t[N], D = () => O(n), b = () => O(n + s);
  function x() {
    return s = 0, d(n) && (r++, a = 0), l(n) && n++, n++, a++, t[n];
  }
  function k() {
    return l(n + s) && s++, s++, t[n + s];
  }
  function E() {
    n = 0, r = 1, a = 1, s = 0;
  }
  function P(N = 0) {
    s = N;
  }
  function M() {
    const N = n + s;
    for (; N !== n; )
      x();
    s = 0;
  }
  return {
    index: m,
    line: v,
    column: g,
    peekOffset: w,
    charAt: O,
    currentChar: D,
    currentPeek: b,
    next: x,
    peek: k,
    reset: E,
    resetPeek: P,
    skipToPeek: M
  };
}
const ha = void 0, qM = ".", jg = "'", KM = "tokenizer";
function ZM(e, t = {}) {
  const n = t.location !== !1, r = GM(e), a = () => r.index(), s = () => LM(r.line(), r.column(), r.index()), l = s(), u = a(), f = {
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
  function m(C, A, z, ...fe) {
    const we = h();
    if (A.column += z, A.offset += z, d) {
      const ze = n ? Gd(we.startLoc, A) : null, Zt = co(C, ze, {
        domain: KM,
        args: fe
      });
      d(Zt);
    }
  }
  function v(C, A, z) {
    C.endLoc = s(), C.currentType = A;
    const fe = { type: A };
    return n && (fe.loc = Gd(C.startLoc, C.endLoc)), z != null && (fe.value = z), fe;
  }
  const g = (C) => v(
    C,
    14
    /* TokenTypes.EOF */
  );
  function w(C, A) {
    return C.currentChar() === A ? (C.next(), A) : (m(Ge.EXPECTED_TOKEN, s(), 0, A), "");
  }
  function O(C) {
    let A = "";
    for (; C.currentPeek() === ki || C.currentPeek() === Cn; )
      A += C.currentPeek(), C.peek();
    return A;
  }
  function D(C) {
    const A = O(C);
    return C.skipToPeek(), A;
  }
  function b(C) {
    if (C === ha)
      return !1;
    const A = C.charCodeAt(0);
    return A >= 97 && A <= 122 || // a-z
    A >= 65 && A <= 90 || // A-Z
    A === 95;
  }
  function x(C) {
    if (C === ha)
      return !1;
    const A = C.charCodeAt(0);
    return A >= 48 && A <= 57;
  }
  function k(C, A) {
    const { currentType: z } = A;
    if (z !== 2)
      return !1;
    O(C);
    const fe = b(C.currentPeek());
    return C.resetPeek(), fe;
  }
  function E(C, A) {
    const { currentType: z } = A;
    if (z !== 2)
      return !1;
    O(C);
    const fe = C.currentPeek() === "-" ? C.peek() : C.currentPeek(), we = x(fe);
    return C.resetPeek(), we;
  }
  function P(C, A) {
    const { currentType: z } = A;
    if (z !== 2)
      return !1;
    O(C);
    const fe = C.currentPeek() === jg;
    return C.resetPeek(), fe;
  }
  function M(C, A) {
    const { currentType: z } = A;
    if (z !== 8)
      return !1;
    O(C);
    const fe = C.currentPeek() === ".";
    return C.resetPeek(), fe;
  }
  function N(C, A) {
    const { currentType: z } = A;
    if (z !== 9)
      return !1;
    O(C);
    const fe = b(C.currentPeek());
    return C.resetPeek(), fe;
  }
  function L(C, A) {
    const { currentType: z } = A;
    if (!(z === 8 || z === 12))
      return !1;
    O(C);
    const fe = C.currentPeek() === ":";
    return C.resetPeek(), fe;
  }
  function H(C, A) {
    const { currentType: z } = A;
    if (z !== 10)
      return !1;
    const fe = () => {
      const ze = C.currentPeek();
      return ze === "{" ? b(C.peek()) : ze === "@" || ze === "%" || ze === "|" || ze === ":" || ze === "." || ze === ki || !ze ? !1 : ze === Cn ? (C.peek(), fe()) : b(ze);
    }, we = fe();
    return C.resetPeek(), we;
  }
  function $(C) {
    O(C);
    const A = C.currentPeek() === "|";
    return C.resetPeek(), A;
  }
  function q(C) {
    const A = O(C), z = C.currentPeek() === "%" && C.peek() === "{";
    return C.resetPeek(), {
      isModulo: z,
      hasSpace: A.length > 0
    };
  }
  function Y(C, A = !0) {
    const z = (we = !1, ze = "", Zt = !1) => {
      const yt = C.currentPeek();
      return yt === "{" ? ze === "%" ? !1 : we : yt === "@" || !yt ? ze === "%" ? !0 : we : yt === "%" ? (C.peek(), z(we, "%", !0)) : yt === "|" ? ze === "%" || Zt ? !0 : !(ze === ki || ze === Cn) : yt === ki ? (C.peek(), z(!0, ki, Zt)) : yt === Cn ? (C.peek(), z(!0, Cn, Zt)) : !0;
    }, fe = z();
    return A && C.resetPeek(), fe;
  }
  function J(C, A) {
    const z = C.currentChar();
    return z === ha ? ha : A(z) ? (C.next(), z) : null;
  }
  function me(C) {
    return J(C, (z) => {
      const fe = z.charCodeAt(0);
      return fe >= 97 && fe <= 122 || // a-z
      fe >= 65 && fe <= 90 || // A-Z
      fe >= 48 && fe <= 57 || // 0-9
      fe === 95 || // _
      fe === 36;
    });
  }
  function le(C) {
    return J(C, (z) => {
      const fe = z.charCodeAt(0);
      return fe >= 48 && fe <= 57;
    });
  }
  function pe(C) {
    return J(C, (z) => {
      const fe = z.charCodeAt(0);
      return fe >= 48 && fe <= 57 || // 0-9
      fe >= 65 && fe <= 70 || // A-F
      fe >= 97 && fe <= 102;
    });
  }
  function Oe(C) {
    let A = "", z = "";
    for (; A = le(C); )
      z += A;
    return z;
  }
  function Ve(C) {
    D(C);
    const A = C.currentChar();
    return A !== "%" && m(Ge.EXPECTED_TOKEN, s(), 0, A), C.next(), "%";
  }
  function Fe(C) {
    let A = "";
    for (; ; ) {
      const z = C.currentChar();
      if (z === "{" || z === "}" || z === "@" || z === "|" || !z)
        break;
      if (z === "%")
        if (Y(C))
          A += z, C.next();
        else
          break;
      else if (z === ki || z === Cn)
        if (Y(C))
          A += z, C.next();
        else {
          if ($(C))
            break;
          A += z, C.next();
        }
      else
        A += z, C.next();
    }
    return A;
  }
  function ie(C) {
    D(C);
    let A = "", z = "";
    for (; A = me(C); )
      z += A;
    return C.currentChar() === ha && m(Ge.UNTERMINATED_CLOSING_BRACE, s(), 0), z;
  }
  function Ae(C) {
    D(C);
    let A = "";
    return C.currentChar() === "-" ? (C.next(), A += `-${Oe(C)}`) : A += Oe(C), C.currentChar() === ha && m(Ge.UNTERMINATED_CLOSING_BRACE, s(), 0), A;
  }
  function vt(C) {
    D(C), w(C, "'");
    let A = "", z = "";
    const fe = (ze) => ze !== jg && ze !== Cn;
    for (; A = J(C, fe); )
      A === "\\" ? z += At(C) : z += A;
    const we = C.currentChar();
    return we === Cn || we === ha ? (m(Ge.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, s(), 0), we === Cn && (C.next(), w(C, "'")), z) : (w(C, "'"), z);
  }
  function At(C) {
    const A = C.currentChar();
    switch (A) {
      case "\\":
      case "'":
        return C.next(), `\\${A}`;
      case "u":
        return Te(C, A, 4);
      case "U":
        return Te(C, A, 6);
      default:
        return m(Ge.UNKNOWN_ESCAPE_SEQUENCE, s(), 0, A), "";
    }
  }
  function Te(C, A, z) {
    w(C, A);
    let fe = "";
    for (let we = 0; we < z; we++) {
      const ze = pe(C);
      if (!ze) {
        m(Ge.INVALID_UNICODE_ESCAPE_SEQUENCE, s(), 0, `\\${A}${fe}${C.currentChar()}`);
        break;
      }
      fe += ze;
    }
    return `\\${A}${fe}`;
  }
  function it(C) {
    D(C);
    let A = "", z = "";
    const fe = (we) => we !== "{" && we !== "}" && we !== ki && we !== Cn;
    for (; A = J(C, fe); )
      z += A;
    return z;
  }
  function Qe(C) {
    let A = "", z = "";
    for (; A = me(C); )
      z += A;
    return z;
  }
  function ve(C) {
    const A = (z = !1, fe) => {
      const we = C.currentChar();
      return we === "{" || we === "%" || we === "@" || we === "|" || we === "(" || we === ")" || !we || we === ki ? fe : we === Cn || we === qM ? (fe += we, C.next(), A(z, fe)) : (fe += we, C.next(), A(!0, fe));
    };
    return A(!1, "");
  }
  function ce(C) {
    D(C);
    const A = w(
      C,
      "|"
      /* TokenChars.Pipe */
    );
    return D(C), A;
  }
  function _e(C, A) {
    let z = null;
    switch (C.currentChar()) {
      case "{":
        return A.braceNest >= 1 && m(Ge.NOT_ALLOW_NEST_PLACEHOLDER, s(), 0), C.next(), z = v(
          A,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), D(C), A.braceNest++, z;
      case "}":
        return A.braceNest > 0 && A.currentType === 2 && m(Ge.EMPTY_PLACEHOLDER, s(), 0), C.next(), z = v(
          A,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), A.braceNest--, A.braceNest > 0 && D(C), A.inLinked && A.braceNest === 0 && (A.inLinked = !1), z;
      case "@":
        return A.braceNest > 0 && m(Ge.UNTERMINATED_CLOSING_BRACE, s(), 0), z = Ce(C, A) || g(A), A.braceNest = 0, z;
      default:
        let we = !0, ze = !0, Zt = !0;
        if ($(C))
          return A.braceNest > 0 && m(Ge.UNTERMINATED_CLOSING_BRACE, s(), 0), z = v(A, 1, ce(C)), A.braceNest = 0, A.inLinked = !1, z;
        if (A.braceNest > 0 && (A.currentType === 5 || A.currentType === 6 || A.currentType === 7))
          return m(Ge.UNTERMINATED_CLOSING_BRACE, s(), 0), A.braceNest = 0, te(C, A);
        if (we = k(C, A))
          return z = v(A, 5, ie(C)), D(C), z;
        if (ze = E(C, A))
          return z = v(A, 6, Ae(C)), D(C), z;
        if (Zt = P(C, A))
          return z = v(A, 7, vt(C)), D(C), z;
        if (!we && !ze && !Zt)
          return z = v(A, 13, it(C)), m(Ge.INVALID_TOKEN_IN_PLACEHOLDER, s(), 0, z.value), D(C), z;
        break;
    }
    return z;
  }
  function Ce(C, A) {
    const { currentType: z } = A;
    let fe = null;
    const we = C.currentChar();
    switch ((z === 8 || z === 9 || z === 12 || z === 10) && (we === Cn || we === ki) && m(Ge.INVALID_LINKED_FORMAT, s(), 0), we) {
      case "@":
        return C.next(), fe = v(
          A,
          8,
          "@"
          /* TokenChars.LinkedAlias */
        ), A.inLinked = !0, fe;
      case ".":
        return D(C), C.next(), v(
          A,
          9,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return D(C), C.next(), v(
          A,
          10,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return $(C) ? (fe = v(A, 1, ce(C)), A.braceNest = 0, A.inLinked = !1, fe) : M(C, A) || L(C, A) ? (D(C), Ce(C, A)) : N(C, A) ? (D(C), v(A, 12, Qe(C))) : H(C, A) ? (D(C), we === "{" ? _e(C, A) || fe : v(A, 11, ve(C))) : (z === 8 && m(Ge.INVALID_LINKED_FORMAT, s(), 0), A.braceNest = 0, A.inLinked = !1, te(C, A));
    }
  }
  function te(C, A) {
    let z = {
      type: 14
      /* TokenTypes.EOF */
    };
    if (A.braceNest > 0)
      return _e(C, A) || g(A);
    if (A.inLinked)
      return Ce(C, A) || g(A);
    switch (C.currentChar()) {
      case "{":
        return _e(C, A) || g(A);
      case "}":
        return m(Ge.UNBALANCED_CLOSING_BRACE, s(), 0), C.next(), v(
          A,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return Ce(C, A) || g(A);
      default:
        if ($(C))
          return z = v(A, 1, ce(C)), A.braceNest = 0, A.inLinked = !1, z;
        const { isModulo: we, hasSpace: ze } = q(C);
        if (we)
          return ze ? v(A, 0, Fe(C)) : v(A, 4, Ve(C));
        if (Y(C))
          return v(A, 0, Fe(C));
        break;
    }
    return z;
  }
  function Ee() {
    const { currentType: C, offset: A, startLoc: z, endLoc: fe } = f;
    return f.lastType = C, f.lastOffset = A, f.lastStartLoc = z, f.lastEndLoc = fe, f.offset = a(), f.startLoc = s(), r.currentChar() === ha ? v(
      f,
      14
      /* TokenTypes.EOF */
    ) : te(r, f);
  }
  return {
    nextToken: Ee,
    currentOffset: a,
    currentPosition: s,
    context: h
  };
}
const XM = "parser", JM = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function QM(e, t, n) {
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
function e$(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function r(b, x, k, E, ...P) {
    const M = b.currentPosition();
    if (M.offset += E, M.column += E, n) {
      const N = t ? Gd(k, M) : null, L = co(x, N, {
        domain: XM,
        args: P
      });
      n(L);
    }
  }
  function a(b, x, k) {
    const E = { type: b };
    return t && (E.start = x, E.end = x, E.loc = { start: k, end: k }), E;
  }
  function s(b, x, k, E) {
    E && (b.type = E), t && (b.end = x, b.loc && (b.loc.end = k));
  }
  function l(b, x) {
    const k = b.context(), E = a(3, k.offset, k.startLoc);
    return E.value = x, s(E, b.currentOffset(), b.currentPosition()), E;
  }
  function u(b, x) {
    const k = b.context(), { lastOffset: E, lastStartLoc: P } = k, M = a(5, E, P);
    return M.index = parseInt(x, 10), b.nextToken(), s(M, b.currentOffset(), b.currentPosition()), M;
  }
  function f(b, x) {
    const k = b.context(), { lastOffset: E, lastStartLoc: P } = k, M = a(4, E, P);
    return M.key = x, b.nextToken(), s(M, b.currentOffset(), b.currentPosition()), M;
  }
  function h(b, x) {
    const k = b.context(), { lastOffset: E, lastStartLoc: P } = k, M = a(9, E, P);
    return M.value = x.replace(JM, QM), b.nextToken(), s(M, b.currentOffset(), b.currentPosition()), M;
  }
  function d(b) {
    const x = b.nextToken(), k = b.context(), { lastOffset: E, lastStartLoc: P } = k, M = a(8, E, P);
    return x.type !== 12 ? (r(b, Ge.UNEXPECTED_EMPTY_LINKED_MODIFIER, k.lastStartLoc, 0), M.value = "", s(M, E, P), {
      nextConsumeToken: x,
      node: M
    }) : (x.value == null && r(b, Ge.UNEXPECTED_LEXICAL_ANALYSIS, k.lastStartLoc, 0, Qr(x)), M.value = x.value || "", s(M, b.currentOffset(), b.currentPosition()), {
      node: M
    });
  }
  function m(b, x) {
    const k = b.context(), E = a(7, k.offset, k.startLoc);
    return E.value = x, s(E, b.currentOffset(), b.currentPosition()), E;
  }
  function v(b) {
    const x = b.context(), k = a(6, x.offset, x.startLoc);
    let E = b.nextToken();
    if (E.type === 9) {
      const P = d(b);
      k.modifier = P.node, E = P.nextConsumeToken || b.nextToken();
    }
    switch (E.type !== 10 && r(b, Ge.UNEXPECTED_LEXICAL_ANALYSIS, x.lastStartLoc, 0, Qr(E)), E = b.nextToken(), E.type === 2 && (E = b.nextToken()), E.type) {
      case 11:
        E.value == null && r(b, Ge.UNEXPECTED_LEXICAL_ANALYSIS, x.lastStartLoc, 0, Qr(E)), k.key = m(b, E.value || "");
        break;
      case 5:
        E.value == null && r(b, Ge.UNEXPECTED_LEXICAL_ANALYSIS, x.lastStartLoc, 0, Qr(E)), k.key = f(b, E.value || "");
        break;
      case 6:
        E.value == null && r(b, Ge.UNEXPECTED_LEXICAL_ANALYSIS, x.lastStartLoc, 0, Qr(E)), k.key = u(b, E.value || "");
        break;
      case 7:
        E.value == null && r(b, Ge.UNEXPECTED_LEXICAL_ANALYSIS, x.lastStartLoc, 0, Qr(E)), k.key = h(b, E.value || "");
        break;
      default:
        r(b, Ge.UNEXPECTED_EMPTY_LINKED_KEY, x.lastStartLoc, 0);
        const P = b.context(), M = a(7, P.offset, P.startLoc);
        return M.value = "", s(M, P.offset, P.startLoc), k.key = M, s(k, P.offset, P.startLoc), {
          nextConsumeToken: E,
          node: k
        };
    }
    return s(k, b.currentOffset(), b.currentPosition()), {
      node: k
    };
  }
  function g(b) {
    const x = b.context(), k = x.currentType === 1 ? b.currentOffset() : x.offset, E = x.currentType === 1 ? x.endLoc : x.startLoc, P = a(2, k, E);
    P.items = [];
    let M = null;
    do {
      const H = M || b.nextToken();
      switch (M = null, H.type) {
        case 0:
          H.value == null && r(b, Ge.UNEXPECTED_LEXICAL_ANALYSIS, x.lastStartLoc, 0, Qr(H)), P.items.push(l(b, H.value || ""));
          break;
        case 6:
          H.value == null && r(b, Ge.UNEXPECTED_LEXICAL_ANALYSIS, x.lastStartLoc, 0, Qr(H)), P.items.push(u(b, H.value || ""));
          break;
        case 5:
          H.value == null && r(b, Ge.UNEXPECTED_LEXICAL_ANALYSIS, x.lastStartLoc, 0, Qr(H)), P.items.push(f(b, H.value || ""));
          break;
        case 7:
          H.value == null && r(b, Ge.UNEXPECTED_LEXICAL_ANALYSIS, x.lastStartLoc, 0, Qr(H)), P.items.push(h(b, H.value || ""));
          break;
        case 8:
          const $ = v(b);
          P.items.push($.node), M = $.nextConsumeToken || null;
          break;
      }
    } while (x.currentType !== 14 && x.currentType !== 1);
    const N = x.currentType === 1 ? x.lastOffset : b.currentOffset(), L = x.currentType === 1 ? x.lastEndLoc : b.currentPosition();
    return s(P, N, L), P;
  }
  function w(b, x, k, E) {
    const P = b.context();
    let M = E.items.length === 0;
    const N = a(1, x, k);
    N.cases = [], N.cases.push(E);
    do {
      const L = g(b);
      M || (M = L.items.length === 0), N.cases.push(L);
    } while (P.currentType !== 14);
    return M && r(b, Ge.MUST_HAVE_MESSAGES_IN_PLURAL, k, 0), s(N, b.currentOffset(), b.currentPosition()), N;
  }
  function O(b) {
    const x = b.context(), { offset: k, startLoc: E } = x, P = g(b);
    return x.currentType === 14 ? P : w(b, k, E, P);
  }
  function D(b) {
    const x = ZM(b, C0({}, e)), k = x.context(), E = a(0, k.offset, k.startLoc);
    return t && E.loc && (E.loc.source = b), E.body = O(x), e.onCacheKey && (E.cacheKey = e.onCacheKey(b)), k.currentType !== 14 && r(x, Ge.UNEXPECTED_LEXICAL_ANALYSIS, k.lastStartLoc, 0, b[k.offset] || ""), s(E, x.currentOffset(), x.currentPosition()), E;
  }
  return { parse: D };
}
function Qr(e) {
  if (e.type === 14)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function t$(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (s) => (n.helpers.add(s), s) };
}
function Gg(e, t) {
  for (let n = 0; n < e.length; n++)
    Gh(e[n], t);
}
function Gh(e, t) {
  switch (e.type) {
    case 1:
      Gg(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      Gg(e.items, t);
      break;
    case 6:
      Gh(e.key, t), t.helper(
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
function n$(e, t = {}) {
  const n = t$(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && Gh(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function r$(e) {
  const t = e.body;
  return t.type === 2 ? qg(t) : t.cases.forEach((n) => qg(n)), e;
}
function qg(e) {
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
      e.static = I0(t);
      for (let n = 0; n < e.items.length; n++) {
        const r = e.items[n];
        (r.type === 3 || r.type === 9) && delete r.value;
      }
    }
  }
}
const i$ = "minifier";
function Ls(e) {
  switch (e.t = e.type, e.type) {
    case 0:
      const t = e;
      Ls(t.body), t.b = t.body, delete t.body;
      break;
    case 1:
      const n = e, r = n.cases;
      for (let d = 0; d < r.length; d++)
        Ls(r[d]);
      n.c = r, delete n.cases;
      break;
    case 2:
      const a = e, s = a.items;
      for (let d = 0; d < s.length; d++)
        Ls(s[d]);
      a.i = s, delete a.items, a.static && (a.s = a.static, delete a.static);
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
      Ls(u.key), u.k = u.key, delete u.key, u.modifier && (Ls(u.modifier), u.m = u.modifier, delete u.modifier);
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
      throw co(Ge.UNHANDLED_MINIFIER_NODE_TYPE, null, {
        domain: i$,
        args: [e.type]
      });
  }
  delete e.type;
}
const a$ = "parser";
function s$(e, t) {
  const { sourceMap: n, filename: r, breakLineCode: a, needIndent: s } = t, l = t.location !== !1, u = {
    filename: r,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode: a,
    needIndent: s,
    indentLevel: 0
  };
  l && e.loc && (u.source = e.loc.source);
  const f = () => u;
  function h(D, b) {
    u.code += D;
  }
  function d(D, b = !0) {
    const x = b ? a : "";
    h(s ? x + "  ".repeat(D) : x);
  }
  function m(D = !0) {
    const b = ++u.indentLevel;
    D && d(b);
  }
  function v(D = !0) {
    const b = --u.indentLevel;
    D && d(b);
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
    helper: (D) => `_${D}`,
    needIndent: () => u.needIndent
  };
}
function o$(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), Xs(e, t.key), t.modifier ? (e.push(", "), Xs(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function l$(e, t) {
  const { helper: n, needIndent: r } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(r());
  const a = t.items.length;
  for (let s = 0; s < a && (Xs(e, t.items[s]), s !== a - 1); s++)
    e.push(", ");
  e.deindent(r()), e.push("])");
}
function u$(e, t) {
  const { helper: n, needIndent: r } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(r());
    const a = t.cases.length;
    for (let s = 0; s < a && (Xs(e, t.cases[s]), s !== a - 1); s++)
      e.push(", ");
    e.deindent(r()), e.push("])");
  }
}
function c$(e, t) {
  t.body ? Xs(e, t.body) : e.push("null");
}
function Xs(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      c$(e, t);
      break;
    case 1:
      u$(e, t);
      break;
    case 2:
      l$(e, t);
      break;
    case 6:
      o$(e, t);
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
      throw co(Ge.UNHANDLED_CODEGEN_NODE_TYPE, null, {
        domain: a$,
        args: [t.type]
      });
  }
}
const f$ = (e, t = {}) => {
  const n = zg(t.mode) ? t.mode : "normal", r = zg(t.filename) ? t.filename : "message.intl", a = !!t.sourceMap, s = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, l = t.needIndent ? t.needIndent : n !== "arrow", u = e.helpers || [], f = s$(e, {
    mode: n,
    filename: r,
    sourceMap: a,
    breakLineCode: s,
    needIndent: l
  });
  f.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), f.indent(l), u.length > 0 && (f.push(`const { ${I0(u.map((m) => `${m}: _${m}`), ", ")} } = ctx`), f.newline()), f.push("return "), Xs(f, e), f.deindent(l), f.push("}"), delete e.helpers;
  const { code: h, map: d } = f.context();
  return {
    ast: e,
    code: h,
    map: d ? d.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function d$(e, t = {}) {
  const n = C0({}, t), r = !!n.jit, a = !!n.minify, s = n.optimize == null ? !0 : n.optimize, u = e$(n).parse(e);
  return r ? (s && r$(u), a && Ls(u), { ast: u, code: "" }) : (n$(u, n), f$(u, n));
}
/*!
  * core-base v9.5.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */
function h$() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Ci().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (Ci().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Ci().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const Ca = [];
Ca[
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
Ca[
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
Ca[
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
Ca[
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
Ca[
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
Ca[
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
Ca[
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
const p$ = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function m$(e) {
  return p$.test(e);
}
function v$(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function g$(e) {
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
function _$(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : m$(t) ? v$(t) : "*" + t;
}
function y$(e) {
  const t = [];
  let n = -1, r = 0, a = 0, s, l, u, f, h, d, m;
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
    ](), a++;
  }, v[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (a > 0)
      a--, r = 4, v[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (a = 0, l === void 0 || (l = _$(l), l === !1))
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
    if (n++, s = e[n], !(s === "\\" && g())) {
      if (f = g$(s), m = Ca[r], h = m[f] || m.l || 8, h === 8 || (r = h[0], h[1] !== void 0 && (d = v[h[1]], d && (u = s, d() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const Kg = /* @__PURE__ */ new Map();
function b$(e, t) {
  return wt(e) ? e[t] : null;
}
function w$(e, t) {
  if (!wt(e))
    return null;
  let n = Kg.get(t);
  if (n || (n = y$(t), n && Kg.set(t, n)), !n)
    return null;
  const r = n.length;
  let a = e, s = 0;
  for (; s < r; ) {
    const l = a[n[s]];
    if (l === void 0)
      return null;
    a = l, s++;
  }
  return a;
}
const O$ = (e) => e, E$ = (e) => "", D$ = "text", S$ = (e) => e.length === 0 ? "" : CM(e), x$ = PM;
function Zg(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function T$(e) {
  const t = cn(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (cn(e.named.count) || cn(e.named.n)) ? cn(e.named.count) ? e.named.count : cn(e.named.n) ? e.named.n : t : t;
}
function k$(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function A$(e = {}) {
  const t = e.locale, n = T$(e), r = wt(e.pluralRules) && ge(t) && Gt(e.pluralRules[t]) ? e.pluralRules[t] : Zg, a = wt(e.pluralRules) && ge(t) && Gt(e.pluralRules[t]) ? Zg : void 0, s = (b) => b[r(n, b.length, a)], l = e.list || [], u = (b) => l[b], f = e.named || {};
  cn(e.pluralIndex) && k$(n, f);
  const h = (b) => f[b];
  function d(b) {
    const x = Gt(e.messages) ? e.messages(b) : wt(e.messages) ? e.messages[b] : !1;
    return x || (e.parent ? e.parent.message(b) : E$);
  }
  const m = (b) => e.modifiers ? e.modifiers[b] : O$, v = qe(e.processor) && Gt(e.processor.normalize) ? e.processor.normalize : S$, g = qe(e.processor) && Gt(e.processor.interpolate) ? e.processor.interpolate : x$, w = qe(e.processor) && ge(e.processor.type) ? e.processor.type : D$, D = {
    list: u,
    named: h,
    plural: s,
    linked: (b, ...x) => {
      const [k, E] = x;
      let P = "text", M = "";
      x.length === 1 ? wt(k) ? (M = k.modifier || M, P = k.type || P) : ge(k) && (M = k || M) : x.length === 2 && (ge(k) && (M = k || M), ge(E) && (P = E || P));
      const N = d(b)(D), L = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        P === "vnode" && Ft(N) && M ? N[0] : N
      );
      return M ? m(M)(L, P) : L;
    },
    message: d,
    type: w,
    interpolate: g,
    normalize: v,
    values: gn({}, l, f)
  };
  return D;
}
let dl = null;
function M$(e) {
  dl = e;
}
function $$(e, t, n) {
  dl && dl.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: n
  });
}
const P$ = /* @__PURE__ */ C$(
  "function:translate"
  /* IntlifyDevToolsHooks.FunctionTranslate */
);
function C$(e) {
  return (t) => dl && dl.emit(e, t);
}
const In = {
  NOT_FOUND_KEY: 1,
  FALLBACK_TO_TRANSLATE: 2,
  CANNOT_FORMAT_NUMBER: 3,
  FALLBACK_TO_NUMBER_FORMAT: 4,
  CANNOT_FORMAT_DATE: 5,
  FALLBACK_TO_DATE_FORMAT: 6,
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: 7,
  __EXTEND_POINT__: 8
}, I$ = {
  [In.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
  [In.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
  [In.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
  [In.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
  [In.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
  [In.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale.",
  [In.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: "This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future."
};
function rs(e, ...t) {
  return Bh(I$[e], ...t);
}
function qh(e, t) {
  return t.locale != null ? Xg(t.locale) : Xg(e.locale);
}
let Od;
function Xg(e) {
  return ge(e) ? e : Od != null && e.resolvedOnce ? Od : Od = e();
}
function N$(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...Ft(t) ? t : wt(t) ? Object.keys(t) : ge(t) ? [t] : [n]
  ])];
}
function N0(e, t, n) {
  const r = ge(n) ? n : Js, a = e;
  a.__localeChainCache || (a.__localeChainCache = /* @__PURE__ */ new Map());
  let s = a.__localeChainCache.get(r);
  if (!s) {
    s = [];
    let l = [n];
    for (; Ft(l); )
      l = Jg(s, l, t);
    const u = Ft(t) || !qe(t) ? t : t.default ? t.default : null;
    l = ge(u) ? [u] : u, Ft(l) && Jg(s, l, !1), a.__localeChainCache.set(r, s);
  }
  return s;
}
function Jg(e, t, n) {
  let r = !0;
  for (let a = 0; a < t.length && ct(r); a++) {
    const s = t[a];
    ge(s) && (r = L$(e, t[a], n));
  }
  return r;
}
function L$(e, t, n) {
  let r;
  const a = t.split("-");
  do {
    const s = a.join("-");
    r = R$(e, s, n), a.splice(-1, 1);
  } while (a.length && r === !0);
  return r;
}
function R$(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== "!";
    const a = t.replace(/!/g, "");
    e.push(a), (Ft(n) || qe(n)) && n[a] && (r = n[a]);
  }
  return r;
}
const F$ = "9.5.0", Pc = -1, Js = "en-US", Qu = "", Qg = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Y$() {
  return {
    upper: (e, t) => t === "text" && ge(e) ? e.toUpperCase() : t === "vnode" && wt(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && ge(e) ? e.toLowerCase() : t === "vnode" && wt(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && ge(e) ? Qg(e) : t === "vnode" && wt(e) && "__v_isVNode" in e ? Qg(e.children) : e
  };
}
let L0;
function e_(e) {
  L0 = e;
}
let R0;
function W$(e) {
  R0 = e;
}
let F0;
function U$(e) {
  F0 = e;
}
let Y0 = null;
const t_ = (e) => {
  Y0 = e;
}, V$ = () => Y0;
let W0 = null;
const n_ = (e) => {
  W0 = e;
}, B$ = () => W0;
let r_ = 0;
function H$(e = {}) {
  const t = Gt(e.onWarn) ? e.onWarn : hn, n = ge(e.version) ? e.version : F$, r = ge(e.locale) || Gt(e.locale) ? e.locale : Js, a = Gt(r) ? Js : r, s = Ft(e.fallbackLocale) || qe(e.fallbackLocale) || ge(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : a, l = qe(e.messages) ? e.messages : { [a]: {} }, u = qe(e.datetimeFormats) ? e.datetimeFormats : { [a]: {} }, f = qe(e.numberFormats) ? e.numberFormats : { [a]: {} }, h = gn({}, e.modifiers || {}, Y$()), d = e.pluralRules || {}, m = Gt(e.missing) ? e.missing : null, v = ct(e.missingWarn) || Ta(e.missingWarn) ? e.missingWarn : !0, g = ct(e.fallbackWarn) || Ta(e.fallbackWarn) ? e.fallbackWarn : !0, w = !!e.fallbackFormat, O = !!e.unresolving, D = Gt(e.postTranslation) ? e.postTranslation : null, b = qe(e.processor) ? e.processor : null, x = ct(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, k = !!e.escapeParameter, E = Gt(e.messageCompiler) ? e.messageCompiler : L0;
  process.env.NODE_ENV !== "production" && Gt(e.messageCompiler) && NM(rs(In.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
  const P = Gt(e.messageResolver) ? e.messageResolver : R0 || b$, M = Gt(e.localeFallbacker) ? e.localeFallbacker : F0 || N$, N = wt(e.fallbackContext) ? e.fallbackContext : void 0, L = e, H = wt(L.__datetimeFormatters) ? L.__datetimeFormatters : /* @__PURE__ */ new Map(), $ = wt(L.__numberFormatters) ? L.__numberFormatters : /* @__PURE__ */ new Map(), q = wt(L.__meta) ? L.__meta : {};
  r_++;
  const Y = {
    version: n,
    cid: r_,
    locale: r,
    fallbackLocale: s,
    messages: l,
    modifiers: h,
    pluralRules: d,
    missing: m,
    missingWarn: v,
    fallbackWarn: g,
    fallbackFormat: w,
    unresolving: O,
    postTranslation: D,
    processor: b,
    warnHtmlMessage: x,
    escapeParameter: k,
    messageCompiler: E,
    messageResolver: P,
    localeFallbacker: M,
    fallbackContext: N,
    onWarn: t,
    __meta: q
  };
  return Y.datetimeFormats = u, Y.numberFormats = f, Y.__datetimeFormatters = H, Y.__numberFormatters = $, process.env.NODE_ENV !== "production" && (Y.__v_emitter = L.__v_emitter != null ? L.__v_emitter : void 0), (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && $$(Y, n, q), Y;
}
function Cc(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function U0(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function Kh(e, t, n, r, a) {
  const { missing: s, onWarn: l } = e;
  if (process.env.NODE_ENV !== "production") {
    const u = e.__v_emitter;
    u && u.emit("missing", {
      locale: n,
      key: t,
      type: a,
      groupId: `${a}:${t}`
    });
  }
  if (s !== null) {
    const u = s(e, n, t, a);
    return ge(u) ? u : t;
  } else
    return process.env.NODE_ENV !== "production" && U0(r, t) && l(rs(In.NOT_FOUND_KEY, { key: t, locale: n })), t;
}
function Ho(e, t, n) {
  const r = e;
  r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function Ed(e) {
  return (n) => z$(n, e);
}
function z$(e, t) {
  const n = t.b || t.body;
  if ((n.t || n.type) === 1) {
    const r = n, a = r.c || r.cases;
    return e.plural(a.reduce((s, l) => [
      ...s,
      i_(e, l)
    ], []));
  } else
    return i_(e, n);
}
function i_(e, t) {
  const n = t.s || t.static;
  if (n)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const r = (t.i || t.items).reduce((a, s) => [...a, qd(e, s)], []);
    return e.normalize(r);
  }
}
function qd(e, t) {
  const n = t.t || t.type;
  switch (n) {
    case 3:
      const r = t;
      return r.v || r.value;
    case 9:
      const a = t;
      return a.v || a.value;
    case 4:
      const s = t;
      return e.interpolate(e.named(s.k || s.key));
    case 5:
      const l = t;
      return e.interpolate(e.list(l.i != null ? l.i : l.index));
    case 6:
      const u = t, f = u.m || u.modifier;
      return e.linked(qd(e, u.k || u.key), f ? qd(e, f) : void 0, e.type);
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
const V0 = Ge.__EXTEND_POINT__, xu = zh(V0), Or = {
  INVALID_ARGUMENT: V0,
  INVALID_DATE_ARGUMENT: xu(),
  INVALID_ISO_DATE_ARGUMENT: xu(),
  NOT_SUPPORT_NON_STRING_MESSAGE: xu(),
  __EXTEND_POINT__: xu()
  // 22
};
function qa(e) {
  return co(e, null, process.env.NODE_ENV !== "production" ? { messages: j$ } : void 0);
}
const j$ = {
  [Or.INVALID_ARGUMENT]: "Invalid arguments",
  [Or.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [Or.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
  [Or.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message"
}, G$ = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function B0(e, t) {
  t && BM(e) && hn(Bh(G$, { source: e }));
}
const H0 = (e) => e;
let Ys = /* @__PURE__ */ Object.create(null);
const is = (e) => wt(e) && (e.t === 0 || e.type === 0) && ("b" in e || "body" in e);
function z0(e, t = {}) {
  let n = !1;
  const r = t.onError || UM;
  return t.onError = (a) => {
    n = !0, r(a);
  }, { ...d$(e, t), detectError: n };
}
const q$ = (e, t) => {
  if (!ge(e))
    throw qa(Or.NOT_SUPPORT_NON_STRING_MESSAGE);
  {
    const n = ct(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && B0(e, n);
    const a = (t.onCacheKey || H0)(e), s = Ys[a];
    if (s)
      return s;
    const { code: l, detectError: u } = z0(e, t), f = new Function(`return ${l}`)();
    return u ? f : Ys[a] = f;
  }
};
function K$(e, t) {
  if (__INTLIFY_JIT_COMPILATION__ && !__INTLIFY_DROP_MESSAGE_COMPILER__ && ge(e)) {
    const n = ct(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && B0(e, n);
    const a = (t.onCacheKey || H0)(e), s = Ys[a];
    if (s)
      return s;
    const { ast: l, detectError: u } = z0(e, {
      ...t,
      location: process.env.NODE_ENV !== "production",
      jit: !0
    }), f = Ed(l);
    return u ? f : Ys[a] = f;
  } else {
    if (process.env.NODE_ENV !== "production" && !is(e))
      return hn(`the message that is resolve with key '${t.key}' is not supported for jit compilation`), () => e;
    const n = e.cacheKey;
    if (n) {
      const r = Ys[n];
      return r || (Ys[n] = Ed(e));
    } else
      return Ed(e);
  }
}
const a_ = () => "", Yr = (e) => Gt(e);
function s_(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: a, messageCompiler: s, fallbackLocale: l, messages: u } = e, [f, h] = Kd(...t), d = ct(h.missingWarn) ? h.missingWarn : e.missingWarn, m = ct(h.fallbackWarn) ? h.fallbackWarn : e.fallbackWarn, v = ct(h.escapeParameter) ? h.escapeParameter : e.escapeParameter, g = !!h.resolvedMessage, w = ge(h.default) || ct(h.default) ? ct(h.default) ? s ? f : () => f : h.default : n ? s ? f : () => f : "", O = n || w !== "", D = qh(e, h);
  v && Z$(h);
  let [b, x, k] = g ? [
    f,
    D,
    u[D] || {}
  ] : j0(e, f, D, l, m, d), E = b, P = f;
  if (!g && !(ge(E) || is(E) || Yr(E)) && O && (E = w, P = E), !g && (!(ge(E) || is(E) || Yr(E)) || !ge(x)))
    return a ? Pc : f;
  if (process.env.NODE_ENV !== "production" && ge(E) && e.messageCompiler == null)
    return hn(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${f}'.`), f;
  let M = !1;
  const N = () => {
    M = !0;
  }, L = Yr(E) ? E : G0(e, f, x, E, P, N);
  if (M)
    return E;
  const H = eP(e, x, k, h), $ = A$(H), q = X$(e, L, $), Y = r ? r(q, f) : q;
  if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    const J = {
      timestamp: Date.now(),
      key: ge(f) ? f : Yr(E) ? E.key : "",
      locale: x || (Yr(E) ? E.locale : ""),
      format: ge(E) ? E : Yr(E) ? E.source : "",
      message: Y
    };
    J.meta = gn({}, e.__meta, V$() || {}), P$(J);
  }
  return Y;
}
function Z$(e) {
  Ft(e.list) ? e.list = e.list.map((t) => ge(t) ? Vg(t) : t) : wt(e.named) && Object.keys(e.named).forEach((t) => {
    ge(e.named[t]) && (e.named[t] = Vg(e.named[t]));
  });
}
function j0(e, t, n, r, a, s) {
  const { messages: l, onWarn: u, messageResolver: f, localeFallbacker: h } = e, d = h(e, r, n);
  let m = {}, v, g = null, w = n, O = null;
  const D = "translate";
  for (let b = 0; b < d.length; b++) {
    if (v = O = d[b], process.env.NODE_ENV !== "production" && n !== v && Cc(a, t) && u(rs(In.FALLBACK_TO_TRANSLATE, {
      key: t,
      target: v
    })), process.env.NODE_ENV !== "production" && n !== v) {
      const M = e.__v_emitter;
      M && M.emit("fallback", {
        type: D,
        key: t,
        from: w,
        to: O,
        groupId: `${D}:${t}`
      });
    }
    m = l[v] || {};
    let x = null, k, E;
    if (process.env.NODE_ENV !== "production" && si && (x = window.performance.now(), k = "intlify-message-resolve-start", E = "intlify-message-resolve-end", ar && ar(k)), (g = f(m, t)) === null && (g = m[t]), process.env.NODE_ENV !== "production" && si) {
      const M = window.performance.now(), N = e.__v_emitter;
      N && x && g && N.emit("message-resolve", {
        type: "message-resolve",
        key: t,
        message: g,
        time: M - x,
        groupId: `${D}:${t}`
      }), k && E && ar && ns && (ar(E), ns("intlify message resolve", k, E));
    }
    if (ge(g) || is(g) || Yr(g))
      break;
    const P = Kh(
      e,
      // eslint-disable-line @typescript-eslint/no-explicit-any
      t,
      v,
      s,
      D
    );
    P !== t && (g = P), w = O;
  }
  return [g, v, m];
}
function G0(e, t, n, r, a, s) {
  const { messageCompiler: l, warnHtmlMessage: u } = e;
  if (Yr(r)) {
    const v = r;
    return v.locale = v.locale || n, v.key = v.key || t, v;
  }
  if (l == null) {
    const v = () => r;
    return v.locale = n, v.key = t, v;
  }
  let f = null, h, d;
  process.env.NODE_ENV !== "production" && si && (f = window.performance.now(), h = "intlify-message-compilation-start", d = "intlify-message-compilation-end", ar && ar(h));
  const m = l(r, J$(e, n, a, r, u, s));
  if (process.env.NODE_ENV !== "production" && si) {
    const v = window.performance.now(), g = e.__v_emitter;
    g && f && g.emit("message-compilation", {
      type: "message-compilation",
      message: r,
      time: v - f,
      groupId: `translate:${t}`
    }), h && d && ar && ns && (ar(d), ns("intlify message compilation", h, d));
  }
  return m.locale = n, m.key = t, m.source = r, m;
}
function X$(e, t, n) {
  let r = null, a, s;
  process.env.NODE_ENV !== "production" && si && (r = window.performance.now(), a = "intlify-message-evaluation-start", s = "intlify-message-evaluation-end", ar && ar(a));
  const l = t(n);
  if (process.env.NODE_ENV !== "production" && si) {
    const u = window.performance.now(), f = e.__v_emitter;
    f && r && f.emit("message-evaluation", {
      type: "message-evaluation",
      value: l,
      time: u - r,
      groupId: `translate:${t.key}`
    }), a && s && ar && ns && (ar(s), ns("intlify message evaluation", a, s));
  }
  return l;
}
function Kd(...e) {
  const [t, n, r] = e, a = {};
  if (!ge(t) && !cn(t) && !Yr(t) && !is(t))
    throw qa(Or.INVALID_ARGUMENT);
  const s = cn(t) ? String(t) : (Yr(t), t);
  return cn(n) ? a.plural = n : ge(n) ? a.default = n : qe(n) && !$c(n) ? a.named = n : Ft(n) && (a.list = n), cn(r) ? a.plural = r : ge(r) ? a.default = r : qe(r) && gn(a, r), [s, a];
}
function J$(e, t, n, r, a, s) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: a,
    onError: (l) => {
      if (s && s(l), process.env.NODE_ENV !== "production") {
        const u = Q$(r), f = `Message compilation error: ${l.message}`, h = l.location && u && IM(u, l.location.start.offset, l.location.end.offset), d = e.__v_emitter;
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
    onCacheKey: (l) => kM(t, n, l)
  };
}
function Q$(e) {
  var t;
  if (!ge(e)) {
    if ((t = e.loc) != null && t.source)
      return e.loc.source;
  }
}
function eP(e, t, n, r) {
  const { modifiers: a, pluralRules: s, messageResolver: l, fallbackLocale: u, fallbackWarn: f, missingWarn: h, fallbackContext: d } = e, v = {
    locale: t,
    modifiers: a,
    pluralRules: s,
    messages: (g) => {
      let w = l(n, g);
      if (w == null && d) {
        const [, , O] = j0(d, g, t, u, f, h);
        w = l(O, g);
      }
      if (ge(w) || is(w)) {
        let O = !1;
        const b = G0(e, g, t, w, g, () => {
          O = !0;
        });
        return O ? a_ : b;
      } else
        return Yr(w) ? w : a_;
    }
  };
  return e.processor && (v.processor = e.processor), r.list && (v.list = r.list), r.named && (v.named = r.named), cn(r.plural) && (v.pluralIndex = r.plural), v;
}
const o_ = typeof Intl < "u", q0 = {
  dateTimeFormat: o_ && typeof Intl.DateTimeFormat < "u",
  numberFormat: o_ && typeof Intl.NumberFormat < "u"
};
function l_(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: a, onWarn: s, localeFallbacker: l } = e, { __datetimeFormatters: u } = e;
  if (process.env.NODE_ENV !== "production" && !q0.dateTimeFormat)
    return s(rs(In.CANNOT_FORMAT_DATE)), Qu;
  const [f, h, d, m] = Zd(...t), v = ct(d.missingWarn) ? d.missingWarn : e.missingWarn, g = ct(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn, w = !!d.part, O = qh(e, d), D = l(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    a,
    O
  );
  if (!ge(f) || f === "")
    return new Intl.DateTimeFormat(O, m).format(h);
  let b = {}, x, k = null, E = O, P = null;
  const M = "datetime format";
  for (let H = 0; H < D.length; H++) {
    if (x = P = D[H], process.env.NODE_ENV !== "production" && O !== x && Cc(g, f) && s(rs(In.FALLBACK_TO_DATE_FORMAT, {
      key: f,
      target: x
    })), process.env.NODE_ENV !== "production" && O !== x) {
      const $ = e.__v_emitter;
      $ && $.emit("fallback", {
        type: M,
        key: f,
        from: E,
        to: P,
        groupId: `${M}:${f}`
      });
    }
    if (b = n[x] || {}, k = b[f], qe(k))
      break;
    Kh(e, f, x, v, M), E = P;
  }
  if (!qe(k) || !ge(x))
    return r ? Pc : f;
  let N = `${x}__${f}`;
  $c(m) || (N = `${N}__${JSON.stringify(m)}`);
  let L = u.get(N);
  return L || (L = new Intl.DateTimeFormat(x, gn({}, k, m)), u.set(N, L)), w ? L.formatToParts(h) : L.format(h);
}
const K0 = [
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
function Zd(...e) {
  const [t, n, r, a] = e, s = {};
  let l = {}, u;
  if (ge(t)) {
    const f = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!f)
      throw qa(Or.INVALID_ISO_DATE_ARGUMENT);
    const h = f[3] ? f[3].trim().startsWith("T") ? `${f[1].trim()}${f[3].trim()}` : `${f[1].trim()}T${f[3].trim()}` : f[1].trim();
    u = new Date(h);
    try {
      u.toISOString();
    } catch {
      throw qa(Or.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (MM(t)) {
    if (isNaN(t.getTime()))
      throw qa(Or.INVALID_DATE_ARGUMENT);
    u = t;
  } else if (cn(t))
    u = t;
  else
    throw qa(Or.INVALID_ARGUMENT);
  return ge(n) ? s.key = n : qe(n) && Object.keys(n).forEach((f) => {
    K0.includes(f) ? l[f] = n[f] : s[f] = n[f];
  }), ge(r) ? s.locale = r : qe(r) && (l = r), qe(a) && (l = a), [s.key || "", u, s, l];
}
function u_(e, t, n) {
  const r = e;
  for (const a in n) {
    const s = `${t}__${a}`;
    r.__datetimeFormatters.has(s) && r.__datetimeFormatters.delete(s);
  }
}
function c_(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: a, onWarn: s, localeFallbacker: l } = e, { __numberFormatters: u } = e;
  if (process.env.NODE_ENV !== "production" && !q0.numberFormat)
    return s(rs(In.CANNOT_FORMAT_NUMBER)), Qu;
  const [f, h, d, m] = Xd(...t), v = ct(d.missingWarn) ? d.missingWarn : e.missingWarn, g = ct(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn, w = !!d.part, O = qh(e, d), D = l(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    a,
    O
  );
  if (!ge(f) || f === "")
    return new Intl.NumberFormat(O, m).format(h);
  let b = {}, x, k = null, E = O, P = null;
  const M = "number format";
  for (let H = 0; H < D.length; H++) {
    if (x = P = D[H], process.env.NODE_ENV !== "production" && O !== x && Cc(g, f) && s(rs(In.FALLBACK_TO_NUMBER_FORMAT, {
      key: f,
      target: x
    })), process.env.NODE_ENV !== "production" && O !== x) {
      const $ = e.__v_emitter;
      $ && $.emit("fallback", {
        type: M,
        key: f,
        from: E,
        to: P,
        groupId: `${M}:${f}`
      });
    }
    if (b = n[x] || {}, k = b[f], qe(k))
      break;
    Kh(e, f, x, v, M), E = P;
  }
  if (!qe(k) || !ge(x))
    return r ? Pc : f;
  let N = `${x}__${f}`;
  $c(m) || (N = `${N}__${JSON.stringify(m)}`);
  let L = u.get(N);
  return L || (L = new Intl.NumberFormat(x, gn({}, k, m)), u.set(N, L)), w ? L.formatToParts(h) : L.format(h);
}
const Z0 = [
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
function Xd(...e) {
  const [t, n, r, a] = e, s = {};
  let l = {};
  if (!cn(t))
    throw qa(Or.INVALID_ARGUMENT);
  const u = t;
  return ge(n) ? s.key = n : qe(n) && Object.keys(n).forEach((f) => {
    Z0.includes(f) ? l[f] = n[f] : s[f] = n[f];
  }), ge(r) ? s.locale = r : qe(r) && (l = r), qe(a) && (l = a), [s.key || "", u, s, l];
}
function f_(e, t, n) {
  const r = e;
  for (const a in n) {
    const s = `${t}__${a}`;
    r.__numberFormatters.has(s) && r.__numberFormatters.delete(s);
  }
}
h$();
function tP() {
  return X0().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function X0() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const nP = typeof Proxy == "function", rP = "devtools-plugin:setup", iP = "plugin:settings:set";
let Cs, Jd;
function aP() {
  var e;
  return Cs !== void 0 || (typeof window < "u" && window.performance ? (Cs = !0, Jd = window.performance) : typeof global < "u" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (Cs = !0, Jd = global.perf_hooks.performance) : Cs = !1), Cs;
}
function sP() {
  return aP() ? Jd.now() : Date.now();
}
class oP {
  constructor(t, n) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n;
    const r = {};
    if (t.settings)
      for (const l in t.settings) {
        const u = t.settings[l];
        r[l] = u.defaultValue;
      }
    const a = `__vue-devtools-plugin-settings__${t.id}`;
    let s = Object.assign({}, r);
    try {
      const l = localStorage.getItem(a), u = JSON.parse(l);
      Object.assign(s, u);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return s;
      },
      setSettings(l) {
        try {
          localStorage.setItem(a, JSON.stringify(l));
        } catch {
        }
        s = l;
      },
      now() {
        return sP();
      }
    }, n && n.on(iP, (l, u) => {
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
function lP(e, t) {
  const n = e, r = X0(), a = tP(), s = nP && n.enableEarlyProxy;
  if (a && (r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !s))
    a.emit(rP, e, t);
  else {
    const l = s ? new oP(n, a) : null;
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
const uP = "9.5.0";
function cP() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (Ci().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (Ci().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (Ci().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Ci().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Ci().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const J0 = In.__EXTEND_POINT__, pa = zh(J0), Qt = {
  FALLBACK_TO_ROOT: J0,
  NOT_SUPPORTED_PRESERVE: pa(),
  NOT_SUPPORTED_FORMATTER: pa(),
  NOT_SUPPORTED_PRESERVE_DIRECTIVE: pa(),
  NOT_SUPPORTED_GET_CHOICE_INDEX: pa(),
  COMPONENT_NAME_LEGACY_COMPATIBLE: pa(),
  NOT_FOUND_PARENT_SCOPE: pa(),
  IGNORE_OBJ_FLATTEN: pa(),
  NOTICE_DROP_ALLOW_COMPOSITION: pa()
  // 17
}, fP = {
  [Qt.FALLBACK_TO_ROOT]: "Fall back to {type} '{key}' with root locale.",
  [Qt.NOT_SUPPORTED_PRESERVE]: "Not supported 'preserve'.",
  [Qt.NOT_SUPPORTED_FORMATTER]: "Not supported 'formatter'.",
  [Qt.NOT_SUPPORTED_PRESERVE_DIRECTIVE]: "Not supported 'preserveDirectiveContent'.",
  [Qt.NOT_SUPPORTED_GET_CHOICE_INDEX]: "Not supported 'getChoiceIndex'.",
  [Qt.COMPONENT_NAME_LEGACY_COMPATIBLE]: "Component name legacy compatible: '{name}' -> 'i18n'",
  [Qt.NOT_FOUND_PARENT_SCOPE]: "Not found parent scope. use the global scope.",
  [Qt.IGNORE_OBJ_FLATTEN]: "Ignore object flatten: '{key}' key has an string value",
  [Qt.NOTICE_DROP_ALLOW_COMPOSITION]: "'allowComposition' option will be dropped in the next major version. For more information, please see 👉 https://tinyurl.com/2p97mcze"
};
function ir(e, ...t) {
  return Bh(fP[e], ...t);
}
const Q0 = Or.__EXTEND_POINT__, Un = zh(Q0), mt = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: Q0,
  // legacy module errors
  INVALID_ARGUMENT: Un(),
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: Un(),
  NOT_INSTALLED: Un(),
  NOT_AVAILABLE_IN_LEGACY_MODE: Un(),
  // directive module errors
  REQUIRED_VALUE: Un(),
  INVALID_VALUE: Un(),
  // vue-devtools errors
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: Un(),
  NOT_INSTALLED_WITH_PROVIDE: Un(),
  // unexpected error
  UNEXPECTED_ERROR: Un(),
  // not compatible legacy vue-i18n constructor
  NOT_COMPATIBLE_LEGACY_VUE_I18N: Un(),
  // bridge support vue 2.x only
  BRIDGE_SUPPORT_VUE_2_ONLY: Un(),
  // need to define `i18n` option in `allowComposition: true` and `useScope: 'local' at `useI18n``
  MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: Un(),
  // Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: Un(),
  // for enhancement
  __EXTEND_POINT__: Un()
  // 37
};
function rn(e, ...t) {
  return co(e, null, process.env.NODE_ENV !== "production" ? { messages: dP, args: t } : void 0);
}
const dP = {
  [mt.UNEXPECTED_RETURN_TYPE]: "Unexpected return type in composer",
  [mt.INVALID_ARGUMENT]: "Invalid argument",
  [mt.MUST_BE_CALL_SETUP_TOP]: "Must be called at the top of a `setup` function",
  [mt.NOT_INSTALLED]: "Need to install with `app.use` function",
  [mt.UNEXPECTED_ERROR]: "Unexpected error",
  [mt.NOT_AVAILABLE_IN_LEGACY_MODE]: "Not available in legacy mode",
  [mt.REQUIRED_VALUE]: "Required in value: {0}",
  [mt.INVALID_VALUE]: "Invalid value",
  [mt.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: "Cannot setup vue-devtools plugin",
  [mt.NOT_INSTALLED_WITH_PROVIDE]: "Need to install with `provide` function",
  [mt.NOT_COMPATIBLE_LEGACY_VUE_I18N]: "Not compatible legacy VueI18n.",
  [mt.BRIDGE_SUPPORT_VUE_2_ONLY]: "vue-i18n-bridge support Vue 2.x only",
  [mt.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION]: "Must define ‘i18n’ option or custom block in Composition API with using local scope in Legacy API mode",
  [mt.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]: "Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"
}, Qd = /* @__PURE__ */ ci("__translateVNode"), eh = /* @__PURE__ */ ci("__datetimeParts"), th = /* @__PURE__ */ ci("__numberParts"), as = /* @__PURE__ */ ci("__enableEmitter"), hl = /* @__PURE__ */ ci("__disableEmitter"), e1 = ci("__setPluralRules"), t1 = /* @__PURE__ */ ci("__injectWithOption"), nh = /* @__PURE__ */ ci("__dispose");
function rh(e) {
  if (!wt(e))
    return e;
  for (const t in e)
    if (Hh(e, t))
      if (!t.includes("."))
        wt(e[t]) && rh(e[t]);
      else {
        const n = t.split("."), r = n.length - 1;
        let a = e, s = !1;
        for (let l = 0; l < r; l++) {
          if (n[l] in a || (a[n[l]] = {}), !wt(a[n[l]])) {
            process.env.NODE_ENV !== "production" && hn(ir(Qt.IGNORE_OBJ_FLATTEN, {
              key: n[l]
            })), s = !0;
            break;
          }
          a = a[n[l]];
        }
        s || (a[n[r]] = e[t], delete e[t]), wt(a[n[r]]) && rh(a[n[r]]);
      }
  return e;
}
function Ic(e, t) {
  const { messages: n, __i18n: r, messageResolver: a, flatJson: s } = t, l = qe(n) ? n : Ft(r) ? {} : { [e]: {} };
  if (Ft(r) && r.forEach((u) => {
    if ("locale" in u && "resource" in u) {
      const { locale: f, resource: h } = u;
      f ? (l[f] = l[f] || {}, al(h, l[f])) : al(h, l);
    } else
      ge(u) && al(JSON.parse(u), l);
  }), a == null && s)
    for (const u in l)
      Hh(l, u) && rh(l[u]);
  return l;
}
const Tu = (e) => !wt(e) || Ft(e);
function al(e, t) {
  if (Tu(e) || Tu(t))
    throw rn(mt.INVALID_VALUE);
  for (const n in e)
    Hh(e, n) && (Tu(e[n]) || Tu(t[n]) ? t[n] = e[n] : al(e[n], t[n]));
}
function n1(e) {
  return e.type;
}
function r1(e, t, n) {
  let r = wt(t.messages) ? t.messages : {};
  "__i18nGlobal" in n && (r = Ic(e.locale.value, {
    messages: r,
    __i18n: n.__i18nGlobal
  }));
  const a = Object.keys(r);
  a.length && a.forEach((s) => {
    e.mergeLocaleMessage(s, r[s]);
  });
  {
    if (wt(t.datetimeFormats)) {
      const s = Object.keys(t.datetimeFormats);
      s.length && s.forEach((l) => {
        e.mergeDateTimeFormat(l, t.datetimeFormats[l]);
      });
    }
    if (wt(t.numberFormats)) {
      const s = Object.keys(t.numberFormats);
      s.length && s.forEach((l) => {
        e.mergeNumberFormat(l, t.numberFormats[l]);
      });
    }
  }
}
function d_(e) {
  return Me(uM, null, e, 0);
}
const h_ = "__INTLIFY_META__";
let p_ = 0;
function m_(e) {
  return (t, n, r, a) => e(n, r, xr() || void 0, a);
}
const hP = () => {
  const e = xr();
  let t = null;
  return e && (t = n1(e)[h_]) ? { [h_]: t } : null;
};
function Zh(e = {}, t) {
  const { __root: n, __injectWithOption: r } = e, a = n === void 0;
  let s = ct(e.inheritLocale) ? e.inheritLocale : !0;
  const l = Q(
    // prettier-ignore
    n && s ? n.locale.value : ge(e.locale) ? e.locale : Js
  ), u = Q(
    // prettier-ignore
    n && s ? n.fallbackLocale.value : ge(e.fallbackLocale) || Ft(e.fallbackLocale) || qe(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : l.value
  ), f = Q(Ic(l.value, e)), h = Q(qe(e.datetimeFormats) ? e.datetimeFormats : { [l.value]: {} }), d = Q(qe(e.numberFormats) ? e.numberFormats : { [l.value]: {} });
  let m = n ? n.missingWarn : ct(e.missingWarn) || Ta(e.missingWarn) ? e.missingWarn : !0, v = n ? n.fallbackWarn : ct(e.fallbackWarn) || Ta(e.fallbackWarn) ? e.fallbackWarn : !0, g = n ? n.fallbackRoot : ct(e.fallbackRoot) ? e.fallbackRoot : !0, w = !!e.fallbackFormat, O = Gt(e.missing) ? e.missing : null, D = Gt(e.missing) ? m_(e.missing) : null, b = Gt(e.postTranslation) ? e.postTranslation : null, x = n ? n.warnHtmlMessage : ct(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, k = !!e.escapeParameter;
  const E = n ? n.modifiers : qe(e.modifiers) ? e.modifiers : {};
  let P = e.pluralRules || n && n.pluralRules, M;
  M = (() => {
    a && n_(null);
    const Z = {
      version: uP,
      locale: l.value,
      fallbackLocale: u.value,
      messages: f.value,
      modifiers: E,
      pluralRules: P,
      missing: D === null ? void 0 : D,
      missingWarn: m,
      fallbackWarn: v,
      fallbackFormat: w,
      unresolving: !0,
      postTranslation: b === null ? void 0 : b,
      warnHtmlMessage: x,
      escapeParameter: k,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    Z.datetimeFormats = h.value, Z.numberFormats = d.value, Z.__datetimeFormatters = qe(M) ? M.__datetimeFormatters : void 0, Z.__numberFormatters = qe(M) ? M.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (Z.__v_emitter = qe(M) ? M.__v_emitter : void 0);
    const oe = H$(Z);
    return a && n_(oe), oe;
  })(), Ho(M, l.value, u.value);
  function L() {
    return [
      l.value,
      u.value,
      f.value,
      h.value,
      d.value
    ];
  }
  const H = W({
    get: () => l.value,
    set: (Z) => {
      l.value = Z, M.locale = l.value;
    }
  }), $ = W({
    get: () => u.value,
    set: (Z) => {
      u.value = Z, M.fallbackLocale = u.value, Ho(M, l.value, Z);
    }
  }), q = W(() => f.value), Y = /* @__PURE__ */ W(() => h.value), J = /* @__PURE__ */ W(() => d.value);
  function me() {
    return Gt(b) ? b : null;
  }
  function le(Z) {
    b = Z, M.postTranslation = Z;
  }
  function pe() {
    return O;
  }
  function Oe(Z) {
    Z !== null && (D = m_(Z)), O = Z, M.missing = D;
  }
  function Ve(Z, oe) {
    return Z !== "translate" || !oe.resolvedMessage;
  }
  const Fe = (Z, oe, Ht, $t, pn, ur) => {
    L();
    let kn;
    try {
      (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && t_(hP()), a || (M.fallbackContext = n ? B$() : void 0), kn = Z(M);
    } finally {
      (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && t_(null), a || (M.fallbackContext = void 0);
    }
    if (cn(kn) && kn === Pc) {
      const [An, Pr] = oe();
      if (process.env.NODE_ENV !== "production" && n && ge(An) && Ve(Ht, Pr) && (g && (Cc(v, An) || U0(m, An)) && hn(ir(Qt.FALLBACK_TO_ROOT, {
        key: An,
        type: Ht
      })), process.env.NODE_ENV !== "production")) {
        const { __v_emitter: Kr } = M;
        Kr && g && Kr.emit("fallback", {
          type: Ht,
          key: An,
          to: "global",
          groupId: `${Ht}:${An}`
        });
      }
      return n && g ? $t(n) : pn(An);
    } else {
      if (ur(kn))
        return kn;
      throw rn(mt.UNEXPECTED_RETURN_TYPE);
    }
  };
  function ie(...Z) {
    return Fe((oe) => Reflect.apply(s_, null, [oe, ...Z]), () => Kd(...Z), "translate", (oe) => Reflect.apply(oe.t, oe, [...Z]), (oe) => oe, (oe) => ge(oe));
  }
  function Ae(...Z) {
    const [oe, Ht, $t] = Z;
    if ($t && !wt($t))
      throw rn(mt.INVALID_ARGUMENT);
    return ie(oe, Ht, gn({ resolvedMessage: !0 }, $t || {}));
  }
  function vt(...Z) {
    return Fe((oe) => Reflect.apply(l_, null, [oe, ...Z]), () => Zd(...Z), "datetime format", (oe) => Reflect.apply(oe.d, oe, [...Z]), () => Qu, (oe) => ge(oe));
  }
  function At(...Z) {
    return Fe((oe) => Reflect.apply(c_, null, [oe, ...Z]), () => Xd(...Z), "number format", (oe) => Reflect.apply(oe.n, oe, [...Z]), () => Qu, (oe) => ge(oe));
  }
  function Te(Z) {
    return Z.map((oe) => ge(oe) || cn(oe) || ct(oe) ? d_(String(oe)) : oe);
  }
  const Qe = {
    normalize: Te,
    interpolate: (Z) => Z,
    type: "vnode"
  };
  function ve(...Z) {
    return Fe(
      (oe) => {
        let Ht;
        const $t = oe;
        try {
          $t.processor = Qe, Ht = Reflect.apply(s_, null, [$t, ...Z]);
        } finally {
          $t.processor = null;
        }
        return Ht;
      },
      () => Kd(...Z),
      "translate",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (oe) => oe[Qd](...Z),
      (oe) => [d_(oe)],
      (oe) => Ft(oe)
    );
  }
  function ce(...Z) {
    return Fe(
      (oe) => Reflect.apply(c_, null, [oe, ...Z]),
      () => Xd(...Z),
      "number format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (oe) => oe[th](...Z),
      () => [],
      (oe) => ge(oe) || Ft(oe)
    );
  }
  function _e(...Z) {
    return Fe(
      (oe) => Reflect.apply(l_, null, [oe, ...Z]),
      () => Zd(...Z),
      "datetime format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (oe) => oe[eh](...Z),
      () => [],
      (oe) => ge(oe) || Ft(oe)
    );
  }
  function Ce(Z) {
    P = Z, M.pluralRules = P;
  }
  function te(Z, oe) {
    if (!Z)
      return !1;
    const Ht = ge(oe) ? oe : l.value, $t = A(Ht);
    return M.messageResolver($t, Z) !== null;
  }
  function Ee(Z) {
    let oe = null;
    const Ht = N0(M, u.value, l.value);
    for (let $t = 0; $t < Ht.length; $t++) {
      const pn = f.value[Ht[$t]] || {}, ur = M.messageResolver(pn, Z);
      if (ur != null) {
        oe = ur;
        break;
      }
    }
    return oe;
  }
  function C(Z) {
    const oe = Ee(Z);
    return oe ?? (n ? n.tm(Z) || {} : {});
  }
  function A(Z) {
    return f.value[Z] || {};
  }
  function z(Z, oe) {
    f.value[Z] = oe, M.messages = f.value;
  }
  function fe(Z, oe) {
    f.value[Z] = f.value[Z] || {}, al(oe, f.value[Z]), M.messages = f.value;
  }
  function we(Z) {
    return h.value[Z] || {};
  }
  function ze(Z, oe) {
    h.value[Z] = oe, M.datetimeFormats = h.value, u_(M, Z, oe);
  }
  function Zt(Z, oe) {
    h.value[Z] = gn(h.value[Z] || {}, oe), M.datetimeFormats = h.value, u_(M, Z, oe);
  }
  function yt(Z) {
    return d.value[Z] || {};
  }
  function Mt(Z, oe) {
    d.value[Z] = oe, M.numberFormats = d.value, f_(M, Z, oe);
  }
  function _n(Z, oe) {
    d.value[Z] = gn(d.value[Z] || {}, oe), M.numberFormats = d.value, f_(M, Z, oe);
  }
  p_++, n && si && (Ue(n.locale, (Z) => {
    s && (l.value = Z, M.locale = Z, Ho(M, l.value, u.value));
  }), Ue(n.fallbackLocale, (Z) => {
    s && (u.value = Z, M.fallbackLocale = Z, Ho(M, l.value, u.value));
  }));
  const bt = {
    id: p_,
    locale: H,
    fallbackLocale: $,
    get inheritLocale() {
      return s;
    },
    set inheritLocale(Z) {
      s = Z, Z && n && (l.value = n.locale.value, u.value = n.fallbackLocale.value, Ho(M, l.value, u.value));
    },
    get availableLocales() {
      return Object.keys(f.value).sort();
    },
    messages: q,
    get modifiers() {
      return E;
    },
    get pluralRules() {
      return P || {};
    },
    get isGlobal() {
      return a;
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
      return x;
    },
    set warnHtmlMessage(Z) {
      x = Z, M.warnHtmlMessage = Z;
    },
    get escapeParameter() {
      return k;
    },
    set escapeParameter(Z) {
      k = Z, M.escapeParameter = Z;
    },
    t: ie,
    getLocaleMessage: A,
    setLocaleMessage: z,
    mergeLocaleMessage: fe,
    getPostTranslationHandler: me,
    setPostTranslationHandler: le,
    getMissingHandler: pe,
    setMissingHandler: Oe,
    [e1]: Ce
  };
  return bt.datetimeFormats = Y, bt.numberFormats = J, bt.rt = Ae, bt.te = te, bt.tm = C, bt.d = vt, bt.n = At, bt.getDateTimeFormat = we, bt.setDateTimeFormat = ze, bt.mergeDateTimeFormat = Zt, bt.getNumberFormat = yt, bt.setNumberFormat = Mt, bt.mergeNumberFormat = _n, bt[t1] = r, bt[Qd] = ve, bt[eh] = _e, bt[th] = ce, process.env.NODE_ENV !== "production" && (bt[as] = (Z) => {
    M.__v_emitter = Z;
  }, bt[hl] = () => {
    M.__v_emitter = void 0;
  }), bt;
}
function pP(e) {
  const t = ge(e.locale) ? e.locale : Js, n = ge(e.fallbackLocale) || Ft(e.fallbackLocale) || qe(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t, r = Gt(e.missing) ? e.missing : void 0, a = ct(e.silentTranslationWarn) || Ta(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0, s = ct(e.silentFallbackWarn) || Ta(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0, l = ct(e.fallbackRoot) ? e.fallbackRoot : !0, u = !!e.formatFallbackMessages, f = qe(e.modifiers) ? e.modifiers : {}, h = e.pluralizationRules, d = Gt(e.postTranslation) ? e.postTranslation : void 0, m = ge(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0, v = !!e.escapeParameterHtml, g = ct(e.sync) ? e.sync : !0;
  process.env.NODE_ENV !== "production" && e.formatter && hn(ir(Qt.NOT_SUPPORTED_FORMATTER)), process.env.NODE_ENV !== "production" && e.preserveDirectiveContent && hn(ir(Qt.NOT_SUPPORTED_PRESERVE_DIRECTIVE));
  let w = e.messages;
  if (qe(e.sharedMessages)) {
    const P = e.sharedMessages;
    w = Object.keys(P).reduce((N, L) => {
      const H = N[L] || (N[L] = {});
      return gn(H, P[L]), N;
    }, w || {});
  }
  const { __i18n: O, __root: D, __injectWithOption: b } = e, x = e.datetimeFormats, k = e.numberFormats, E = e.flatJson;
  return {
    locale: t,
    fallbackLocale: n,
    messages: w,
    flatJson: E,
    datetimeFormats: x,
    numberFormats: k,
    missing: r,
    missingWarn: a,
    fallbackWarn: s,
    fallbackRoot: l,
    fallbackFormat: u,
    modifiers: f,
    pluralRules: h,
    postTranslation: d,
    warnHtmlMessage: m,
    escapeParameter: v,
    messageResolver: e.messageResolver,
    inheritLocale: g,
    __i18n: O,
    __root: D,
    __injectWithOption: b
  };
}
function ih(e = {}, t) {
  {
    const n = Zh(pP(e)), { __extender: r } = e, a = {
      // id
      id: n.id,
      // locale
      get locale() {
        return n.locale.value;
      },
      set locale(s) {
        n.locale.value = s;
      },
      // fallbackLocale
      get fallbackLocale() {
        return n.fallbackLocale.value;
      },
      set fallbackLocale(s) {
        n.fallbackLocale.value = s;
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
        return process.env.NODE_ENV !== "production" && hn(ir(Qt.NOT_SUPPORTED_FORMATTER)), {
          interpolate() {
            return [];
          }
        };
      },
      set formatter(s) {
        process.env.NODE_ENV !== "production" && hn(ir(Qt.NOT_SUPPORTED_FORMATTER));
      },
      // missing
      get missing() {
        return n.getMissingHandler();
      },
      set missing(s) {
        n.setMissingHandler(s);
      },
      // silentTranslationWarn
      get silentTranslationWarn() {
        return ct(n.missingWarn) ? !n.missingWarn : n.missingWarn;
      },
      set silentTranslationWarn(s) {
        n.missingWarn = ct(s) ? !s : s;
      },
      // silentFallbackWarn
      get silentFallbackWarn() {
        return ct(n.fallbackWarn) ? !n.fallbackWarn : n.fallbackWarn;
      },
      set silentFallbackWarn(s) {
        n.fallbackWarn = ct(s) ? !s : s;
      },
      // modifiers
      get modifiers() {
        return n.modifiers;
      },
      // formatFallbackMessages
      get formatFallbackMessages() {
        return n.fallbackFormat;
      },
      set formatFallbackMessages(s) {
        n.fallbackFormat = s;
      },
      // postTranslation
      get postTranslation() {
        return n.getPostTranslationHandler();
      },
      set postTranslation(s) {
        n.setPostTranslationHandler(s);
      },
      // sync
      get sync() {
        return n.inheritLocale;
      },
      set sync(s) {
        n.inheritLocale = s;
      },
      // warnInHtmlMessage
      get warnHtmlInMessage() {
        return n.warnHtmlMessage ? "warn" : "off";
      },
      set warnHtmlInMessage(s) {
        n.warnHtmlMessage = s !== "off";
      },
      // escapeParameterHtml
      get escapeParameterHtml() {
        return n.escapeParameter;
      },
      set escapeParameterHtml(s) {
        n.escapeParameter = s;
      },
      // preserveDirectiveContent
      get preserveDirectiveContent() {
        return process.env.NODE_ENV !== "production" && hn(ir(Qt.NOT_SUPPORTED_PRESERVE_DIRECTIVE)), !0;
      },
      set preserveDirectiveContent(s) {
        process.env.NODE_ENV !== "production" && hn(ir(Qt.NOT_SUPPORTED_PRESERVE_DIRECTIVE));
      },
      // pluralizationRules
      get pluralizationRules() {
        return n.pluralRules || {};
      },
      // for internal
      __composer: n,
      // t
      t(...s) {
        const [l, u, f] = s, h = {};
        let d = null, m = null;
        if (!ge(l))
          throw rn(mt.INVALID_ARGUMENT);
        const v = l;
        return ge(u) ? h.locale = u : Ft(u) ? d = u : qe(u) && (m = u), Ft(f) ? d = f : qe(f) && (m = f), Reflect.apply(n.t, n, [
          v,
          d || m || {},
          h
        ]);
      },
      rt(...s) {
        return Reflect.apply(n.rt, n, [...s]);
      },
      // tc
      tc(...s) {
        const [l, u, f] = s, h = { plural: 1 };
        let d = null, m = null;
        if (!ge(l))
          throw rn(mt.INVALID_ARGUMENT);
        const v = l;
        return ge(u) ? h.locale = u : cn(u) ? h.plural = u : Ft(u) ? d = u : qe(u) && (m = u), ge(f) ? h.locale = f : Ft(f) ? d = f : qe(f) && (m = f), Reflect.apply(n.t, n, [
          v,
          d || m || {},
          h
        ]);
      },
      // te
      te(s, l) {
        return n.te(s, l);
      },
      // tm
      tm(s) {
        return n.tm(s);
      },
      // getLocaleMessage
      getLocaleMessage(s) {
        return n.getLocaleMessage(s);
      },
      // setLocaleMessage
      setLocaleMessage(s, l) {
        n.setLocaleMessage(s, l);
      },
      // mergeLocaleMessage
      mergeLocaleMessage(s, l) {
        n.mergeLocaleMessage(s, l);
      },
      // d
      d(...s) {
        return Reflect.apply(n.d, n, [...s]);
      },
      // getDateTimeFormat
      getDateTimeFormat(s) {
        return n.getDateTimeFormat(s);
      },
      // setDateTimeFormat
      setDateTimeFormat(s, l) {
        n.setDateTimeFormat(s, l);
      },
      // mergeDateTimeFormat
      mergeDateTimeFormat(s, l) {
        n.mergeDateTimeFormat(s, l);
      },
      // n
      n(...s) {
        return Reflect.apply(n.n, n, [...s]);
      },
      // getNumberFormat
      getNumberFormat(s) {
        return n.getNumberFormat(s);
      },
      // setNumberFormat
      setNumberFormat(s, l) {
        n.setNumberFormat(s, l);
      },
      // mergeNumberFormat
      mergeNumberFormat(s, l) {
        n.mergeNumberFormat(s, l);
      },
      // getChoiceIndex
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      getChoiceIndex(s, l) {
        return process.env.NODE_ENV !== "production" && hn(ir(Qt.NOT_SUPPORTED_GET_CHOICE_INDEX)), -1;
      }
    };
    return a.__extender = r, process.env.NODE_ENV !== "production" && (a.__enableEmitter = (s) => {
      const l = n;
      l[as] && l[as](s);
    }, a.__disableEmitter = () => {
      const s = n;
      s[hl] && s[hl]();
    }), a;
  }
}
const Xh = {
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
function mP({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, a) => [
    ...r,
    // prettier-ignore
    ...a.type === Ke ? a.children : [a]
  ], []) : t.reduce((n, r) => {
    const a = e[r];
    return a && (n[r] = a()), n;
  }, {});
}
function i1(e) {
  return Ke;
}
const vP = /* @__PURE__ */ Re({
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
  }, Xh),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const { slots: n, attrs: r } = t, a = e.i18n || Qh({
      useScope: e.scope,
      __useComponent: !0
    });
    return () => {
      const s = Object.keys(n).filter((m) => m !== "_"), l = {};
      e.locale && (l.locale = e.locale), e.plural !== void 0 && (l.plural = ge(e.plural) ? +e.plural : e.plural);
      const u = mP(t, s), f = a[Qd](e.keypath, u, l), h = gn({}, r), d = ge(e.tag) || wt(e.tag) ? e.tag : i1();
      return wr(d, h, f);
    };
  }
}), Dd = vP;
function gP(e) {
  return Ft(e) && !ge(e[0]);
}
function a1(e, t, n, r) {
  const { slots: a, attrs: s } = t;
  return () => {
    const l = { part: !0 };
    let u = {};
    e.locale && (l.locale = e.locale), ge(e.format) ? l.key = e.format : wt(e.format) && (ge(e.format.key) && (l.key = e.format.key), u = Object.keys(e.format).reduce((v, g) => n.includes(g) ? gn({}, v, { [g]: e.format[g] }) : v, {}));
    const f = r(e.value, l, u);
    let h = [l.key];
    Ft(f) ? h = f.map((v, g) => {
      const w = a[v.type], O = w ? w({ [v.type]: v.value, index: g, parts: f }) : [v.value];
      return gP(O) && (O[0].key = `${v.type}-${g}`), O;
    }) : ge(f) && (h = [f]);
    const d = gn({}, s), m = ge(e.tag) || wt(e.tag) ? e.tag : i1();
    return wr(m, d, h);
  };
}
const _P = /* @__PURE__ */ Re({
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
  }, Xh),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const n = e.i18n || Qh({
      useScope: "parent",
      __useComponent: !0
    });
    return a1(e, t, Z0, (...r) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[th](...r)
    ));
  }
}), v_ = _P, yP = /* @__PURE__ */ Re({
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
  }, Xh),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const n = e.i18n || Qh({
      useScope: "parent",
      __useComponent: !0
    });
    return a1(e, t, K0, (...r) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[eh](...r)
    ));
  }
}), g_ = yP;
function bP(e, t) {
  const n = e;
  if (e.mode === "composition")
    return n.__getInstance(t) || e.global;
  {
    const r = n.__getInstance(t);
    return r != null ? r.__composer : e.global.__composer;
  }
}
function wP(e) {
  const t = (l) => {
    const { instance: u, modifiers: f, value: h } = l;
    if (!u || !u.$)
      throw rn(mt.UNEXPECTED_ERROR);
    const d = bP(e, u.$);
    process.env.NODE_ENV !== "production" && f.preserve && hn(ir(Qt.NOT_SUPPORTED_PRESERVE));
    const m = __(h);
    return [
      Reflect.apply(d.t, d, [...y_(m)]),
      d
    ];
  };
  return {
    created: (l, u) => {
      const [f, h] = t(u);
      si && e.global === h && (l.__i18nWatcher = Ue(h.locale, () => {
        u.instance && u.instance.$forceUpdate();
      })), l.__composer = h, l.textContent = f;
    },
    unmounted: (l) => {
      si && l.__i18nWatcher && (l.__i18nWatcher(), l.__i18nWatcher = void 0, delete l.__i18nWatcher), l.__composer && (l.__composer = void 0, delete l.__composer);
    },
    beforeUpdate: (l, { value: u }) => {
      if (l.__composer) {
        const f = l.__composer, h = __(u);
        l.textContent = Reflect.apply(f.t, f, [
          ...y_(h)
        ]);
      }
    },
    getSSRProps: (l) => {
      const [u] = t(l);
      return { textContent: u };
    }
  };
}
function __(e) {
  if (ge(e))
    return { path: e };
  if (qe(e)) {
    if (!("path" in e))
      throw rn(mt.REQUIRED_VALUE, "path");
    return e;
  } else
    throw rn(mt.INVALID_VALUE);
}
function y_(e) {
  const { path: t, locale: n, args: r, choice: a, plural: s } = e, l = {}, u = r || {};
  return ge(n) && (l.locale = n), cn(a) && (l.plural = a), cn(s) && (l.plural = s), [t, u, l];
}
function OP(e, t, ...n) {
  const r = qe(n[0]) ? n[0] : {}, a = !!r.useI18nComponentName, s = ct(r.globalInstall) ? r.globalInstall : !0;
  process.env.NODE_ENV !== "production" && s && a && hn(ir(Qt.COMPONENT_NAME_LEGACY_COMPATIBLE, {
    name: Dd.name
  })), s && ([a ? "i18n" : Dd.name, "I18nT"].forEach((l) => e.component(l, Dd)), [v_.name, "I18nN"].forEach((l) => e.component(l, v_)), [g_.name, "I18nD"].forEach((l) => e.component(l, g_))), e.directive("t", wP(t));
}
const Sd = {
  "vue-devtools-plugin-vue-i18n": "Vue I18n devtools",
  "vue-i18n-resource-inspector": "I18n Resources",
  "vue-i18n-timeline": "Vue I18n"
}, EP = {
  "vue-i18n-resource-inspector": "Search for scopes ..."
}, DP = {
  "vue-i18n-timeline": 16764185
}, s1 = "vue-i18n: composer properties";
let ah;
async function SP(e, t) {
  return new Promise((n, r) => {
    try {
      lP({
        id: "vue-devtools-plugin-vue-i18n",
        label: Sd[
          "vue-devtools-plugin-vue-i18n"
          /* VueDevToolsIDs.PLUGIN */
        ],
        packageName: "vue-i18n",
        homepage: "https://vue-i18n.intlify.dev",
        logo: "https://vue-i18n.intlify.dev/vue-i18n-devtools-logo.png",
        componentStateTypes: [s1],
        app: e
        // eslint-disable-line @typescript-eslint/no-explicit-any
      }, (a) => {
        ah = a, a.on.visitComponentTree(({ componentInstance: l, treeNode: u }) => {
          xP(l, u, t);
        }), a.on.inspectComponent(({ componentInstance: l, instanceData: u }) => {
          l.vnode.el && l.vnode.el.__VUE_I18N__ && u && (t.mode === "legacy" ? l.vnode.el.__VUE_I18N__ !== t.global.__composer && b_(u, l.vnode.el.__VUE_I18N__) : b_(u, l.vnode.el.__VUE_I18N__));
        }), a.addInspector({
          id: "vue-i18n-resource-inspector",
          label: Sd[
            "vue-i18n-resource-inspector"
            /* VueDevToolsIDs.CUSTOM_INSPECTOR */
          ],
          icon: "language",
          treeFilterPlaceholder: EP[
            "vue-i18n-resource-inspector"
            /* VueDevToolsIDs.CUSTOM_INSPECTOR */
          ]
        }), a.on.getInspectorTree((l) => {
          l.app === e && l.inspectorId === "vue-i18n-resource-inspector" && $P(l, t);
        });
        const s = /* @__PURE__ */ new Map();
        a.on.getInspectorState(async (l) => {
          if (l.app === e && l.inspectorId === "vue-i18n-resource-inspector")
            if (a.unhighlightElement(), CP(l, t), l.nodeId === "global") {
              if (!s.has(l.app)) {
                const [u] = await a.getComponentInstances(l.app);
                s.set(l.app, u);
              }
              a.highlightElement(s.get(l.app));
            } else {
              const u = PP(l.nodeId, t);
              u && a.highlightElement(u);
            }
        }), a.on.editInspectorState((l) => {
          l.app === e && l.inspectorId === "vue-i18n-resource-inspector" && NP(l, t);
        }), a.addTimelineLayer({
          id: "vue-i18n-timeline",
          label: Sd[
            "vue-i18n-timeline"
            /* VueDevToolsIDs.TIMELINE */
          ],
          color: DP[
            "vue-i18n-timeline"
            /* VueDevToolsIDs.TIMELINE */
          ]
        }), n(!0);
      });
    } catch (a) {
      console.error(a), r(!1);
    }
  });
}
function o1(e) {
  return e.type.name || e.type.displayName || e.type.__file || "Anonymous";
}
function xP(e, t, n) {
  const r = n.mode === "composition" ? n.global : n.global.__composer;
  if (e && e.vnode.el && e.vnode.el.__VUE_I18N__ && e.vnode.el.__VUE_I18N__ !== r) {
    const a = {
      label: `i18n (${o1(e)} Scope)`,
      textColor: 0,
      backgroundColor: 16764185
    };
    t.tags.push(a);
  }
}
function b_(e, t) {
  const n = s1;
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
    value: Jh(t.messages.value)
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
function Jh(e) {
  const t = {};
  return Object.keys(e).forEach((n) => {
    const r = e[n];
    Gt(r) && "source" in r ? t[n] = MP(r) : is(r) && r.loc && r.loc.source ? t[n] = r.loc.source : wt(r) ? t[n] = Jh(r) : t[n] = r;
  }), t;
}
const TP = {
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "&": "&amp;"
};
function kP(e) {
  return e.replace(/[<>"&]/g, AP);
}
function AP(e) {
  return TP[e] || e;
}
function MP(e) {
  return {
    _custom: {
      type: "function",
      display: `<span>ƒ</span> ${e.source ? `("${kP(e.source)}")` : "(?)"}`
    }
  };
}
function $P(e, t) {
  e.rootNodes.push({
    id: "global",
    label: "Global Scope"
  });
  const n = t.mode === "composition" ? t.global : t.global.__composer;
  for (const [r, a] of t.__instances) {
    const s = t.mode === "composition" ? a : a.__composer;
    n !== s && e.rootNodes.push({
      id: s.id.toString(),
      label: `${o1(r)} Scope`
    });
  }
}
function PP(e, t) {
  let n = null;
  if (e !== "global") {
    for (const [r, a] of t.__instances.entries())
      if (a.id.toString() === e) {
        n = r;
        break;
      }
  }
  return n;
}
function l1(e, t) {
  if (e === "global")
    return t.mode === "composition" ? t.global : t.global.__composer;
  {
    const n = Array.from(t.__instances.values()).find((r) => r.id.toString() === e);
    return n ? t.mode === "composition" ? n : n.__composer : null;
  }
}
function CP(e, t) {
  const n = l1(e.nodeId, t);
  return n && (e.state = IP(n)), null;
}
function IP(e) {
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
  const a = "Locale messages info", s = [
    {
      type: a,
      key: "messages",
      editable: !1,
      value: Jh(e.messages.value)
    }
  ];
  t[a] = s;
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
function pl(e, t) {
  if (ah) {
    let n;
    t && "groupId" in t && (n = t.groupId, delete t.groupId), ah.addTimelineEvent({
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
function NP(e, t) {
  const n = l1(e.nodeId, t);
  if (n) {
    const [r] = e.path;
    r === "locale" && ge(e.state.value) ? n.locale.value = e.state.value : r === "fallbackLocale" && (ge(e.state.value) || Ft(e.state.value) || wt(e.state.value)) ? n.fallbackLocale.value = e.state.value : r === "inheritLocale" && ct(e.state.value) && (n.inheritLocale = e.state.value);
  }
}
function LP(e, t, n) {
  return {
    beforeCreate() {
      const r = xr();
      if (!r)
        throw rn(mt.UNEXPECTED_ERROR);
      const a = this.$options;
      if (a.i18n) {
        const s = a.i18n;
        if (a.__i18n && (s.__i18n = a.__i18n), s.__root = t, this === this.$root)
          this.$i18n = w_(e, s);
        else {
          s.__injectWithOption = !0, s.__extender = n.__vueI18nExtend, this.$i18n = ih(s);
          const l = this.$i18n;
          l.__extender && (l.__disposer = l.__extender(this.$i18n));
        }
      } else if (a.__i18n)
        if (this === this.$root)
          this.$i18n = w_(e, a);
        else {
          this.$i18n = ih({
            __i18n: a.__i18n,
            __injectWithOption: !0,
            __extender: n.__vueI18nExtend,
            __root: t
          });
          const s = this.$i18n;
          s.__extender && (s.__disposer = s.__extender(this.$i18n));
        }
      else
        this.$i18n = e;
      a.__i18nGlobal && r1(t, a, a), this.$t = (...s) => this.$i18n.t(...s), this.$rt = (...s) => this.$i18n.rt(...s), this.$tc = (...s) => this.$i18n.tc(...s), this.$te = (s, l) => this.$i18n.te(s, l), this.$d = (...s) => this.$i18n.d(...s), this.$n = (...s) => this.$i18n.n(...s), this.$tm = (s) => this.$i18n.tm(s), n.__setInstance(r, this.$i18n);
    },
    mounted() {
      if (process.env.NODE_ENV !== "production" && this.$el && this.$i18n) {
        const r = this.$i18n;
        this.$el.__VUE_I18N__ = r.__composer;
        const a = this.__v_emitter = jh();
        r.__enableEmitter && r.__enableEmitter(a), a.on("*", pl);
      }
    },
    unmounted() {
      const r = xr();
      if (!r)
        throw rn(mt.UNEXPECTED_ERROR);
      const a = this.$i18n;
      process.env.NODE_ENV !== "production" && this.$el && this.$el.__VUE_I18N__ && (this.__v_emitter && (this.__v_emitter.off("*", pl), delete this.__v_emitter), this.$i18n && (a.__disableEmitter && a.__disableEmitter(), delete this.$el.__VUE_I18N__)), delete this.$t, delete this.$rt, delete this.$tc, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, a.__disposer && (a.__disposer(), delete a.__disposer, delete a.__extender), n.__deleteInstance(r), delete this.$i18n;
    }
  };
}
function w_(e, t) {
  e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[e1](t.pluralizationRules || e.pluralizationRules);
  const n = Ic(e.locale, {
    messages: t.messages,
    __i18n: t.__i18n
  });
  return Object.keys(n).forEach((r) => e.mergeLocaleMessage(r, n[r])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach((r) => e.mergeDateTimeFormat(r, t.datetimeFormats[r])), t.numberFormats && Object.keys(t.numberFormats).forEach((r) => e.mergeNumberFormat(r, t.numberFormats[r])), e;
}
const RP = /* @__PURE__ */ ci("global-vue-i18n");
function FP(e = {}, t) {
  const n = __VUE_I18N_LEGACY_API__ && ct(e.legacy) ? e.legacy : __VUE_I18N_LEGACY_API__, r = ct(e.globalInjection) ? e.globalInjection : !0, a = __VUE_I18N_LEGACY_API__ && n ? !!e.allowComposition : !0, s = /* @__PURE__ */ new Map(), [l, u] = YP(e, n), f = /* @__PURE__ */ ci(process.env.NODE_ENV !== "production" ? "vue-i18n" : "");
  process.env.NODE_ENV !== "production" && n && a && hn(ir(Qt.NOTICE_DROP_ALLOW_COMPOSITION));
  function h(v) {
    return s.get(v) || null;
  }
  function d(v, g) {
    s.set(v, g);
  }
  function m(v) {
    s.delete(v);
  }
  {
    const v = {
      // mode
      get mode() {
        return __VUE_I18N_LEGACY_API__ && n ? "legacy" : "composition";
      },
      // allowComposition
      get allowComposition() {
        return a;
      },
      // install plugin
      async install(g, ...w) {
        if (process.env.NODE_ENV !== "production" && (g.__VUE_I18N__ = v), g.__VUE_I18N_SYMBOL__ = f, g.provide(g.__VUE_I18N_SYMBOL__, v), qe(w[0])) {
          const b = w[0];
          v.__composerExtend = b.__composerExtend, v.__vueI18nExtend = b.__vueI18nExtend;
        }
        let O = null;
        !n && r && (O = qP(g, v.global)), __VUE_I18N_FULL_INSTALL__ && OP(g, v, ...w), __VUE_I18N_LEGACY_API__ && n && g.mixin(LP(u, u.__composer, v));
        const D = g.unmount;
        if (g.unmount = () => {
          O && O(), v.dispose(), D();
        }, process.env.NODE_ENV !== "production") {
          if (!await SP(g, v))
            throw rn(mt.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN);
          const x = jh();
          if (n) {
            const k = u;
            k.__enableEmitter && k.__enableEmitter(x);
          } else {
            const k = u;
            k[as] && k[as](x);
          }
          x.on("*", pl);
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
      __instances: s,
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
function Qh(e = {}) {
  const t = xr();
  if (t == null)
    throw rn(mt.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw rn(mt.NOT_INSTALLED);
  const n = WP(t), r = VP(n), a = n1(t), s = UP(e, a);
  if (__VUE_I18N_LEGACY_API__ && n.mode === "legacy" && !e.__useComponent) {
    if (!n.allowComposition)
      throw rn(mt.NOT_AVAILABLE_IN_LEGACY_MODE);
    return jP(t, s, r, e);
  }
  if (s === "global")
    return r1(r, e, a), r;
  if (s === "parent") {
    let f = BP(n, t, e.__useComponent);
    return f == null && (process.env.NODE_ENV !== "production" && hn(ir(Qt.NOT_FOUND_PARENT_SCOPE)), f = r), f;
  }
  const l = n;
  let u = l.__getInstance(t);
  if (u == null) {
    const f = gn({}, e);
    "__i18n" in a && (f.__i18n = a.__i18n), r && (f.__root = r), u = Zh(f), l.__composerExtend && (u[nh] = l.__composerExtend(u)), zP(l, t, u), l.__setInstance(t, u);
  }
  return u;
}
function YP(e, t, n) {
  const r = h0();
  {
    const a = __VUE_I18N_LEGACY_API__ && t ? r.run(() => ih(e)) : r.run(() => Zh(e));
    if (a == null)
      throw rn(mt.UNEXPECTED_ERROR);
    return [r, a];
  }
}
function WP(e) {
  {
    const t = kt(e.isCE ? RP : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t)
      throw rn(e.isCE ? mt.NOT_INSTALLED_WITH_PROVIDE : mt.UNEXPECTED_ERROR);
    return t;
  }
}
function UP(e, t) {
  return $c(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function VP(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function BP(e, t, n = !1) {
  let r = null;
  const a = t.root;
  let s = HP(t, n);
  for (; s != null; ) {
    const l = e;
    if (e.mode === "composition")
      r = l.__getInstance(s);
    else if (__VUE_I18N_LEGACY_API__) {
      const u = l.__getInstance(s);
      u != null && (r = u.__composer, n && r && !r[t1] && (r = null));
    }
    if (r != null || a === s)
      break;
    s = s.parent;
  }
  return r;
}
function HP(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function zP(e, t, n) {
  let r = null;
  Hr(() => {
    if (process.env.NODE_ENV !== "production" && t.vnode.el) {
      t.vnode.el.__VUE_I18N__ = n, r = jh();
      const a = n;
      a[as] && a[as](r), r.on("*", pl);
    }
  }, t), Pa(() => {
    const a = n;
    process.env.NODE_ENV !== "production" && t.vnode.el && t.vnode.el.__VUE_I18N__ && (r && r.off("*", pl), a[hl] && a[hl](), delete t.vnode.el.__VUE_I18N__), e.__deleteInstance(t);
    const s = a[nh];
    s && (s(), delete a[nh]);
  }, t);
}
function jP(e, t, n, r = {}) {
  const a = t === "local", s = Wh(null);
  if (a && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n))
    throw rn(mt.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
  const l = ct(r.inheritLocale) ? r.inheritLocale : !ge(r.locale), u = Q(
    // prettier-ignore
    !a || l ? n.locale.value : ge(r.locale) ? r.locale : Js
  ), f = Q(
    // prettier-ignore
    !a || l ? n.fallbackLocale.value : ge(r.fallbackLocale) || Ft(r.fallbackLocale) || qe(r.fallbackLocale) || r.fallbackLocale === !1 ? r.fallbackLocale : u.value
  ), h = Q(Ic(u.value, r)), d = Q(qe(r.datetimeFormats) ? r.datetimeFormats : { [u.value]: {} }), m = Q(qe(r.numberFormats) ? r.numberFormats : { [u.value]: {} }), v = a ? n.missingWarn : ct(r.missingWarn) || Ta(r.missingWarn) ? r.missingWarn : !0, g = a ? n.fallbackWarn : ct(r.fallbackWarn) || Ta(r.fallbackWarn) ? r.fallbackWarn : !0, w = a ? n.fallbackRoot : ct(r.fallbackRoot) ? r.fallbackRoot : !0, O = !!r.fallbackFormat, D = Gt(r.missing) ? r.missing : null, b = Gt(r.postTranslation) ? r.postTranslation : null, x = a ? n.warnHtmlMessage : ct(r.warnHtmlMessage) ? r.warnHtmlMessage : !0, k = !!r.escapeParameter, E = a ? n.modifiers : qe(r.modifiers) ? r.modifiers : {}, P = r.pluralRules || a && n.pluralRules;
  function M() {
    return [
      u.value,
      f.value,
      h.value,
      d.value,
      m.value
    ];
  }
  const N = W({
    get: () => s.value ? s.value.locale.value : u.value,
    set: (A) => {
      s.value && (s.value.locale.value = A), u.value = A;
    }
  }), L = W({
    get: () => s.value ? s.value.fallbackLocale.value : f.value,
    set: (A) => {
      s.value && (s.value.fallbackLocale.value = A), f.value = A;
    }
  }), H = W(() => s.value ? s.value.messages.value : h.value), $ = W(() => d.value), q = W(() => m.value);
  function Y() {
    return s.value ? s.value.getPostTranslationHandler() : b;
  }
  function J(A) {
    s.value && s.value.setPostTranslationHandler(A);
  }
  function me() {
    return s.value ? s.value.getMissingHandler() : D;
  }
  function le(A) {
    s.value && s.value.setMissingHandler(A);
  }
  function pe(A) {
    return M(), A();
  }
  function Oe(...A) {
    return s.value ? pe(() => Reflect.apply(s.value.t, null, [...A])) : pe(() => "");
  }
  function Ve(...A) {
    return s.value ? Reflect.apply(s.value.rt, null, [...A]) : "";
  }
  function Fe(...A) {
    return s.value ? pe(() => Reflect.apply(s.value.d, null, [...A])) : pe(() => "");
  }
  function ie(...A) {
    return s.value ? pe(() => Reflect.apply(s.value.n, null, [...A])) : pe(() => "");
  }
  function Ae(A) {
    return s.value ? s.value.tm(A) : {};
  }
  function vt(A, z) {
    return s.value ? s.value.te(A, z) : !1;
  }
  function At(A) {
    return s.value ? s.value.getLocaleMessage(A) : {};
  }
  function Te(A, z) {
    s.value && (s.value.setLocaleMessage(A, z), h.value[A] = z);
  }
  function it(A, z) {
    s.value && s.value.mergeLocaleMessage(A, z);
  }
  function Qe(A) {
    return s.value ? s.value.getDateTimeFormat(A) : {};
  }
  function ve(A, z) {
    s.value && (s.value.setDateTimeFormat(A, z), d.value[A] = z);
  }
  function ce(A, z) {
    s.value && s.value.mergeDateTimeFormat(A, z);
  }
  function _e(A) {
    return s.value ? s.value.getNumberFormat(A) : {};
  }
  function Ce(A, z) {
    s.value && (s.value.setNumberFormat(A, z), m.value[A] = z);
  }
  function te(A, z) {
    s.value && s.value.mergeNumberFormat(A, z);
  }
  const Ee = {
    get id() {
      return s.value ? s.value.id : -1;
    },
    locale: N,
    fallbackLocale: L,
    messages: H,
    datetimeFormats: $,
    numberFormats: q,
    get inheritLocale() {
      return s.value ? s.value.inheritLocale : l;
    },
    set inheritLocale(A) {
      s.value && (s.value.inheritLocale = A);
    },
    get availableLocales() {
      return s.value ? s.value.availableLocales : Object.keys(h.value);
    },
    get modifiers() {
      return s.value ? s.value.modifiers : E;
    },
    get pluralRules() {
      return s.value ? s.value.pluralRules : P;
    },
    get isGlobal() {
      return s.value ? s.value.isGlobal : !1;
    },
    get missingWarn() {
      return s.value ? s.value.missingWarn : v;
    },
    set missingWarn(A) {
      s.value && (s.value.missingWarn = A);
    },
    get fallbackWarn() {
      return s.value ? s.value.fallbackWarn : g;
    },
    set fallbackWarn(A) {
      s.value && (s.value.missingWarn = A);
    },
    get fallbackRoot() {
      return s.value ? s.value.fallbackRoot : w;
    },
    set fallbackRoot(A) {
      s.value && (s.value.fallbackRoot = A);
    },
    get fallbackFormat() {
      return s.value ? s.value.fallbackFormat : O;
    },
    set fallbackFormat(A) {
      s.value && (s.value.fallbackFormat = A);
    },
    get warnHtmlMessage() {
      return s.value ? s.value.warnHtmlMessage : x;
    },
    set warnHtmlMessage(A) {
      s.value && (s.value.warnHtmlMessage = A);
    },
    get escapeParameter() {
      return s.value ? s.value.escapeParameter : k;
    },
    set escapeParameter(A) {
      s.value && (s.value.escapeParameter = A);
    },
    t: Oe,
    getPostTranslationHandler: Y,
    setPostTranslationHandler: J,
    getMissingHandler: me,
    setMissingHandler: le,
    rt: Ve,
    d: Fe,
    n: ie,
    tm: Ae,
    te: vt,
    getLocaleMessage: At,
    setLocaleMessage: Te,
    mergeLocaleMessage: it,
    getDateTimeFormat: Qe,
    setDateTimeFormat: ve,
    mergeDateTimeFormat: ce,
    getNumberFormat: _e,
    setNumberFormat: Ce,
    mergeNumberFormat: te
  };
  function C(A) {
    A.locale.value = u.value, A.fallbackLocale.value = f.value, Object.keys(h.value).forEach((z) => {
      A.mergeLocaleMessage(z, h.value[z]);
    }), Object.keys(d.value).forEach((z) => {
      A.mergeDateTimeFormat(z, d.value[z]);
    }), Object.keys(m.value).forEach((z) => {
      A.mergeNumberFormat(z, m.value[z]);
    }), A.escapeParameter = k, A.fallbackFormat = O, A.fallbackRoot = w, A.fallbackWarn = g, A.missingWarn = v, A.warnHtmlMessage = x;
  }
  return lM(() => {
    if (e.proxy == null || e.proxy.$i18n == null)
      throw rn(mt.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
    const A = s.value = e.proxy.$i18n.__composer;
    t === "global" ? (u.value = A.locale.value, f.value = A.fallbackLocale.value, h.value = A.messages.value, d.value = A.datetimeFormats.value, m.value = A.numberFormats.value) : a && C(A);
  }), Ee;
}
const GP = [
  "locale",
  "fallbackLocale",
  "availableLocales"
], O_ = ["t", "rt", "d", "n", "tm", "te"];
function qP(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  return GP.forEach((a) => {
    const s = Object.getOwnPropertyDescriptor(t, a);
    if (!s)
      throw rn(mt.UNEXPECTED_ERROR);
    const l = un(s.value) ? {
      get() {
        return s.value.value;
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      set(u) {
        s.value.value = u;
      }
    } : {
      get() {
        return s.get && s.get();
      }
    };
    Object.defineProperty(n, a, l);
  }), e.config.globalProperties.$i18n = n, O_.forEach((a) => {
    const s = Object.getOwnPropertyDescriptor(t, a);
    if (!s || !s.value)
      throw rn(mt.UNEXPECTED_ERROR);
    Object.defineProperty(e.config.globalProperties, `$${a}`, s);
  }), () => {
    delete e.config.globalProperties.$i18n, O_.forEach((a) => {
      delete e.config.globalProperties[`$${a}`];
    });
  };
}
cP();
__INTLIFY_JIT_COMPILATION__ ? e_(K$) : e_(q$);
W$(w$);
U$(N0);
if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const e = Ci();
  e.__INTLIFY__ = !0, M$(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
const KP = {
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
}, ZP = {
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
}, XP = {
  zh_TW: KP,
  en_US: ZP
}, fi = FP({
  locale: "zh_TW",
  legacy: !1,
  globalInjection: !0,
  messages: XP
}), zo = {
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
function JP(e, t = !1) {
  const { t: n } = fi.global, r = new Date(e.start).toLocaleString("zh-TW", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    hour12: !1
  }), a = e.due ? new Date(e.due).toLocaleString("zh-TW", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    hour12: !1
  }) : null;
  if (e.frequency === St.Never)
    return `於 ${r} 起`;
  const s = n(zo.frequency[St[e.frequency]]), l = e.weekdays ? e.weekdays.map((v) => n(zo.weekdays[yr[v]])).join("、") : "", u = e.weekOrdinal ? e.weekOrdinal.map((v) => n(zo.weekOrdinal[Pi[v]])).join("、") : "", f = e.monthDate ? `${e.monthDate.join("、")}號`.replace("-1", n()) : "", h = e.yearMonths ? `${e.yearMonths.sort((v, g) => g - v).reverse().join("、")}月` : "";
  let d = `於 ${r} 起，${zo.every}${e.interval}${s}`, m = `${zo.every}${e.interval}${s}`;
  if (u || l || f || h) {
    d += "的", m += "的";
    const v = [];
    h && v.push(`${h}的`), f && v.push(f), u && v.push(`${u}的`), l && v.push(l), d += v.join(""), m += v.join("");
  }
  return a && (d += `，並於 ${a} 結束循環`), t ? m : d;
}
const QP = ["top", "right", "bottom", "left"], ka = Math.min, tr = Math.max, ec = Math.round, ku = Math.floor, Aa = (e) => ({
  x: e,
  y: e
}), eC = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, tC = {
  start: "end",
  end: "start"
};
function sh(e, t, n) {
  return tr(e, ka(t, n));
}
function Ui(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Vi(e) {
  return e.split("-")[0];
}
function fo(e) {
  return e.split("-")[1];
}
function ep(e) {
  return e === "x" ? "y" : "x";
}
function tp(e) {
  return e === "y" ? "height" : "width";
}
function ho(e) {
  return ["top", "bottom"].includes(Vi(e)) ? "y" : "x";
}
function np(e) {
  return ep(ho(e));
}
function nC(e, t, n) {
  n === void 0 && (n = !1);
  const r = fo(e), a = np(e), s = tp(a);
  let l = a === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (l = tc(l)), [l, tc(l)];
}
function rC(e) {
  const t = tc(e);
  return [oh(e), t, oh(t)];
}
function oh(e) {
  return e.replace(/start|end/g, (t) => tC[t]);
}
function iC(e, t, n) {
  const r = ["left", "right"], a = ["right", "left"], s = ["top", "bottom"], l = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? a : r : t ? r : a;
    case "left":
    case "right":
      return t ? s : l;
    default:
      return [];
  }
}
function aC(e, t, n, r) {
  const a = fo(e);
  let s = iC(Vi(e), n === "start", r);
  return a && (s = s.map((l) => l + "-" + a), t && (s = s.concat(s.map(oh)))), s;
}
function tc(e) {
  return e.replace(/left|right|bottom|top/g, (t) => eC[t]);
}
function sC(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function u1(e) {
  return typeof e != "number" ? sC(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function nc(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function E_(e, t, n) {
  let {
    reference: r,
    floating: a
  } = e;
  const s = ho(t), l = np(t), u = tp(l), f = Vi(t), h = s === "y", d = r.x + r.width / 2 - a.width / 2, m = r.y + r.height / 2 - a.height / 2, v = r[u] / 2 - a[u] / 2;
  let g;
  switch (f) {
    case "top":
      g = {
        x: d,
        y: r.y - a.height
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
        x: r.x - a.width,
        y: m
      };
      break;
    default:
      g = {
        x: r.x,
        y: r.y
      };
  }
  switch (fo(t)) {
    case "start":
      g[l] -= v * (n && h ? -1 : 1);
      break;
    case "end":
      g[l] += v * (n && h ? -1 : 1);
      break;
  }
  return g;
}
const oC = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: a = "absolute",
    middleware: s = [],
    platform: l
  } = n, u = s.filter(Boolean), f = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let h = await l.getElementRects({
    reference: e,
    floating: t,
    strategy: a
  }), {
    x: d,
    y: m
  } = E_(h, r, f), v = r, g = {}, w = 0;
  for (let O = 0; O < u.length; O++) {
    const {
      name: D,
      fn: b
    } = u[O], {
      x,
      y: k,
      data: E,
      reset: P
    } = await b({
      x: d,
      y: m,
      initialPlacement: r,
      placement: v,
      strategy: a,
      middlewareData: g,
      rects: h,
      platform: l,
      elements: {
        reference: e,
        floating: t
      }
    });
    if (d = x ?? d, m = k ?? m, g = {
      ...g,
      [D]: {
        ...g[D],
        ...E
      }
    }, P && w <= 50) {
      w++, typeof P == "object" && (P.placement && (v = P.placement), P.rects && (h = P.rects === !0 ? await l.getElementRects({
        reference: e,
        floating: t,
        strategy: a
      }) : P.rects), {
        x: d,
        y: m
      } = E_(h, v, f)), O = -1;
      continue;
    }
  }
  return {
    x: d,
    y: m,
    placement: v,
    strategy: a,
    middlewareData: g
  };
};
async function ml(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: a,
    platform: s,
    rects: l,
    elements: u,
    strategy: f
  } = e, {
    boundary: h = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: m = "floating",
    altBoundary: v = !1,
    padding: g = 0
  } = Ui(t, e), w = u1(g), D = u[v ? m === "floating" ? "reference" : "floating" : m], b = nc(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(D))) == null || n ? D : D.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(u.floating)),
    boundary: h,
    rootBoundary: d,
    strategy: f
  })), x = m === "floating" ? {
    ...l.floating,
    x: r,
    y: a
  } : l.reference, k = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u.floating)), E = await (s.isElement == null ? void 0 : s.isElement(k)) ? await (s.getScale == null ? void 0 : s.getScale(k)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, P = nc(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: x,
    offsetParent: k,
    strategy: f
  }) : x);
  return {
    top: (b.top - P.top + w.top) / E.y,
    bottom: (P.bottom - b.bottom + w.bottom) / E.y,
    left: (b.left - P.left + w.left) / E.x,
    right: (P.right - b.right + w.right) / E.x
  };
}
const lC = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: a,
      rects: s,
      platform: l,
      elements: u,
      middlewareData: f
    } = t, {
      element: h,
      padding: d = 0
    } = Ui(e, t) || {};
    if (h == null)
      return {};
    const m = u1(d), v = {
      x: n,
      y: r
    }, g = np(a), w = tp(g), O = await l.getDimensions(h), D = g === "y", b = D ? "top" : "left", x = D ? "bottom" : "right", k = D ? "clientHeight" : "clientWidth", E = s.reference[w] + s.reference[g] - v[g] - s.floating[w], P = v[g] - s.reference[g], M = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(h));
    let N = M ? M[k] : 0;
    (!N || !await (l.isElement == null ? void 0 : l.isElement(M))) && (N = u.floating[k] || s.floating[w]);
    const L = E / 2 - P / 2, H = N / 2 - O[w] / 2 - 1, $ = ka(m[b], H), q = ka(m[x], H), Y = $, J = N - O[w] - q, me = N / 2 - O[w] / 2 + L, le = sh(Y, me, J), pe = !f.arrow && fo(a) != null && me != le && s.reference[w] / 2 - (me < Y ? $ : q) - O[w] / 2 < 0, Oe = pe ? me < Y ? me - Y : me - J : 0;
    return {
      [g]: v[g] + Oe,
      data: {
        [g]: le,
        centerOffset: me - le - Oe,
        ...pe && {
          alignmentOffset: Oe
        }
      },
      reset: pe
    };
  }
}), uC = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: a,
        middlewareData: s,
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
        flipAlignment: O = !0,
        ...D
      } = Ui(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const b = Vi(a), x = Vi(u) === u, k = await (f.isRTL == null ? void 0 : f.isRTL(h.floating)), E = v || (x || !O ? [tc(u)] : rC(u));
      !v && w !== "none" && E.push(...aC(u, O, w, k));
      const P = [u, ...E], M = await ml(t, D), N = [];
      let L = ((r = s.flip) == null ? void 0 : r.overflows) || [];
      if (d && N.push(M[b]), m) {
        const Y = nC(a, l, k);
        N.push(M[Y[0]], M[Y[1]]);
      }
      if (L = [...L, {
        placement: a,
        overflows: N
      }], !N.every((Y) => Y <= 0)) {
        var H, $;
        const Y = (((H = s.flip) == null ? void 0 : H.index) || 0) + 1, J = P[Y];
        if (J)
          return {
            data: {
              index: Y,
              overflows: L
            },
            reset: {
              placement: J
            }
          };
        let me = ($ = L.filter((le) => le.overflows[0] <= 0).sort((le, pe) => le.overflows[1] - pe.overflows[1])[0]) == null ? void 0 : $.placement;
        if (!me)
          switch (g) {
            case "bestFit": {
              var q;
              const le = (q = L.map((pe) => [pe.placement, pe.overflows.filter((Oe) => Oe > 0).reduce((Oe, Ve) => Oe + Ve, 0)]).sort((pe, Oe) => pe[1] - Oe[1])[0]) == null ? void 0 : q[0];
              le && (me = le);
              break;
            }
            case "initialPlacement":
              me = u;
              break;
          }
        if (a !== me)
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
function D_(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function S_(e) {
  return QP.some((t) => e[t] >= 0);
}
const cC = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...a
      } = Ui(e, t);
      switch (r) {
        case "referenceHidden": {
          const s = await ml(t, {
            ...a,
            elementContext: "reference"
          }), l = D_(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: S_(l)
            }
          };
        }
        case "escaped": {
          const s = await ml(t, {
            ...a,
            altBoundary: !0
          }), l = D_(s, n.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: S_(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function fC(e, t) {
  const {
    placement: n,
    platform: r,
    elements: a
  } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(a.floating)), l = Vi(n), u = fo(n), f = ho(n) === "y", h = ["left", "top"].includes(l) ? -1 : 1, d = s && f ? -1 : 1, m = Ui(t, e);
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
const dC = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r
      } = t, a = await fC(t, e);
      return {
        x: n + a.x,
        y: r + a.y,
        data: a
      };
    }
  };
}, hC = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: a
      } = t, {
        mainAxis: s = !0,
        crossAxis: l = !1,
        limiter: u = {
          fn: (D) => {
            let {
              x: b,
              y: x
            } = D;
            return {
              x: b,
              y: x
            };
          }
        },
        ...f
      } = Ui(e, t), h = {
        x: n,
        y: r
      }, d = await ml(t, f), m = ho(Vi(a)), v = ep(m);
      let g = h[v], w = h[m];
      if (s) {
        const D = v === "y" ? "top" : "left", b = v === "y" ? "bottom" : "right", x = g + d[D], k = g - d[b];
        g = sh(x, g, k);
      }
      if (l) {
        const D = m === "y" ? "top" : "left", b = m === "y" ? "bottom" : "right", x = w + d[D], k = w - d[b];
        w = sh(x, w, k);
      }
      const O = u.fn({
        ...t,
        [v]: g,
        [m]: w
      });
      return {
        ...O,
        data: {
          x: O.x - n,
          y: O.y - r
        }
      };
    }
  };
}, pC = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: a,
        rects: s,
        middlewareData: l
      } = t, {
        offset: u = 0,
        mainAxis: f = !0,
        crossAxis: h = !0
      } = Ui(e, t), d = {
        x: n,
        y: r
      }, m = ho(a), v = ep(m);
      let g = d[v], w = d[m];
      const O = Ui(u, t), D = typeof O == "number" ? {
        mainAxis: O,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...O
      };
      if (f) {
        const k = v === "y" ? "height" : "width", E = s.reference[v] - s.floating[k] + D.mainAxis, P = s.reference[v] + s.reference[k] - D.mainAxis;
        g < E ? g = E : g > P && (g = P);
      }
      if (h) {
        var b, x;
        const k = v === "y" ? "width" : "height", E = ["top", "left"].includes(Vi(a)), P = s.reference[m] - s.floating[k] + (E && ((b = l.offset) == null ? void 0 : b[m]) || 0) + (E ? 0 : D.crossAxis), M = s.reference[m] + s.reference[k] + (E ? 0 : ((x = l.offset) == null ? void 0 : x[m]) || 0) - (E ? D.crossAxis : 0);
        w < P ? w = P : w > M && (w = M);
      }
      return {
        [v]: g,
        [m]: w
      };
    }
  };
}, mC = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      const {
        placement: n,
        rects: r,
        platform: a,
        elements: s
      } = t, {
        apply: l = () => {
        },
        ...u
      } = Ui(e, t), f = await ml(t, u), h = Vi(n), d = fo(n), m = ho(n) === "y", {
        width: v,
        height: g
      } = r.floating;
      let w, O;
      h === "top" || h === "bottom" ? (w = h, O = d === (await (a.isRTL == null ? void 0 : a.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (O = h, w = d === "end" ? "top" : "bottom");
      const D = g - f[w], b = v - f[O], x = !t.middlewareData.shift;
      let k = D, E = b;
      if (m) {
        const M = v - f.left - f.right;
        E = d || x ? ka(b, M) : M;
      } else {
        const M = g - f.top - f.bottom;
        k = d || x ? ka(D, M) : M;
      }
      if (x && !d) {
        const M = tr(f.left, 0), N = tr(f.right, 0), L = tr(f.top, 0), H = tr(f.bottom, 0);
        m ? E = v - 2 * (M !== 0 || N !== 0 ? M + N : tr(f.left, f.right)) : k = g - 2 * (L !== 0 || H !== 0 ? L + H : tr(f.top, f.bottom));
      }
      await l({
        ...t,
        availableWidth: E,
        availableHeight: k
      });
      const P = await a.getDimensions(s.floating);
      return v !== P.width || g !== P.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Ma(e) {
  return c1(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function sr(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ki(e) {
  var t;
  return (t = (c1(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function c1(e) {
  return e instanceof Node || e instanceof sr(e).Node;
}
function Bi(e) {
  return e instanceof Element || e instanceof sr(e).Element;
}
function oi(e) {
  return e instanceof HTMLElement || e instanceof sr(e).HTMLElement;
}
function x_(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof sr(e).ShadowRoot;
}
function Tl(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: a
  } = Tr(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(a);
}
function vC(e) {
  return ["table", "td", "th"].includes(Ma(e));
}
function rp(e) {
  const t = ip(), n = Tr(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function gC(e) {
  let t = Qs(e);
  for (; oi(t) && !Nc(t); ) {
    if (rp(t))
      return t;
    t = Qs(t);
  }
  return null;
}
function ip() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Nc(e) {
  return ["html", "body", "#document"].includes(Ma(e));
}
function Tr(e) {
  return sr(e).getComputedStyle(e);
}
function Lc(e) {
  return Bi(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function Qs(e) {
  if (Ma(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    x_(e) && e.host || // Fallback.
    Ki(e)
  );
  return x_(t) ? t.host : t;
}
function f1(e) {
  const t = Qs(e);
  return Nc(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : oi(t) && Tl(t) ? t : f1(t);
}
function vl(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const a = f1(e), s = a === ((r = e.ownerDocument) == null ? void 0 : r.body), l = sr(a);
  return s ? t.concat(l, l.visualViewport || [], Tl(a) ? a : [], l.frameElement && n ? vl(l.frameElement) : []) : t.concat(a, vl(a, [], n));
}
function d1(e) {
  const t = Tr(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const a = oi(e), s = a ? e.offsetWidth : n, l = a ? e.offsetHeight : r, u = ec(n) !== s || ec(r) !== l;
  return u && (n = s, r = l), {
    width: n,
    height: r,
    $: u
  };
}
function ap(e) {
  return Bi(e) ? e : e.contextElement;
}
function Bs(e) {
  const t = ap(e);
  if (!oi(t))
    return Aa(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: a,
    $: s
  } = d1(t);
  let l = (s ? ec(n.width) : n.width) / r, u = (s ? ec(n.height) : n.height) / a;
  return (!l || !Number.isFinite(l)) && (l = 1), (!u || !Number.isFinite(u)) && (u = 1), {
    x: l,
    y: u
  };
}
const _C = /* @__PURE__ */ Aa(0);
function h1(e) {
  const t = sr(e);
  return !ip() || !t.visualViewport ? _C : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function yC(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== sr(e) ? !1 : t;
}
function ss(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const a = e.getBoundingClientRect(), s = ap(e);
  let l = Aa(1);
  t && (r ? Bi(r) && (l = Bs(r)) : l = Bs(e));
  const u = yC(s, n, r) ? h1(s) : Aa(0);
  let f = (a.left + u.x) / l.x, h = (a.top + u.y) / l.y, d = a.width / l.x, m = a.height / l.y;
  if (s) {
    const v = sr(s), g = r && Bi(r) ? sr(r) : r;
    let w = v.frameElement;
    for (; w && r && g !== v; ) {
      const O = Bs(w), D = w.getBoundingClientRect(), b = Tr(w), x = D.left + (w.clientLeft + parseFloat(b.paddingLeft)) * O.x, k = D.top + (w.clientTop + parseFloat(b.paddingTop)) * O.y;
      f *= O.x, h *= O.y, d *= O.x, m *= O.y, f += x, h += k, w = sr(w).frameElement;
    }
  }
  return nc({
    width: d,
    height: m,
    x: f,
    y: h
  });
}
function bC(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: r
  } = e;
  const a = oi(n), s = Ki(n);
  if (n === s)
    return t;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = Aa(1);
  const f = Aa(0);
  if ((a || !a && r !== "fixed") && ((Ma(n) !== "body" || Tl(s)) && (l = Lc(n)), oi(n))) {
    const h = ss(n);
    u = Bs(n), f.x = h.x + n.clientLeft, f.y = h.y + n.clientTop;
  }
  return {
    width: t.width * u.x,
    height: t.height * u.y,
    x: t.x * u.x - l.scrollLeft * u.x + f.x,
    y: t.y * u.y - l.scrollTop * u.y + f.y
  };
}
function wC(e) {
  return Array.from(e.getClientRects());
}
function p1(e) {
  return ss(Ki(e)).left + Lc(e).scrollLeft;
}
function OC(e) {
  const t = Ki(e), n = Lc(e), r = e.ownerDocument.body, a = tr(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), s = tr(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let l = -n.scrollLeft + p1(e);
  const u = -n.scrollTop;
  return Tr(r).direction === "rtl" && (l += tr(t.clientWidth, r.clientWidth) - a), {
    width: a,
    height: s,
    x: l,
    y: u
  };
}
function EC(e, t) {
  const n = sr(e), r = Ki(e), a = n.visualViewport;
  let s = r.clientWidth, l = r.clientHeight, u = 0, f = 0;
  if (a) {
    s = a.width, l = a.height;
    const h = ip();
    (!h || h && t === "fixed") && (u = a.offsetLeft, f = a.offsetTop);
  }
  return {
    width: s,
    height: l,
    x: u,
    y: f
  };
}
function DC(e, t) {
  const n = ss(e, !0, t === "fixed"), r = n.top + e.clientTop, a = n.left + e.clientLeft, s = oi(e) ? Bs(e) : Aa(1), l = e.clientWidth * s.x, u = e.clientHeight * s.y, f = a * s.x, h = r * s.y;
  return {
    width: l,
    height: u,
    x: f,
    y: h
  };
}
function T_(e, t, n) {
  let r;
  if (t === "viewport")
    r = EC(e, n);
  else if (t === "document")
    r = OC(Ki(e));
  else if (Bi(t))
    r = DC(t, n);
  else {
    const a = h1(e);
    r = {
      ...t,
      x: t.x - a.x,
      y: t.y - a.y
    };
  }
  return nc(r);
}
function m1(e, t) {
  const n = Qs(e);
  return n === t || !Bi(n) || Nc(n) ? !1 : Tr(n).position === "fixed" || m1(n, t);
}
function SC(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = vl(e, [], !1).filter((u) => Bi(u) && Ma(u) !== "body"), a = null;
  const s = Tr(e).position === "fixed";
  let l = s ? Qs(e) : e;
  for (; Bi(l) && !Nc(l); ) {
    const u = Tr(l), f = rp(l);
    !f && u.position === "fixed" && (a = null), (s ? !f && !a : !f && u.position === "static" && !!a && ["absolute", "fixed"].includes(a.position) || Tl(l) && !f && m1(e, l)) ? r = r.filter((d) => d !== l) : a = u, l = Qs(l);
  }
  return t.set(e, r), r;
}
function xC(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: a
  } = e;
  const l = [...n === "clippingAncestors" ? SC(t, this._c) : [].concat(n), r], u = l[0], f = l.reduce((h, d) => {
    const m = T_(t, d, a);
    return h.top = tr(m.top, h.top), h.right = ka(m.right, h.right), h.bottom = ka(m.bottom, h.bottom), h.left = tr(m.left, h.left), h;
  }, T_(t, u, a));
  return {
    width: f.right - f.left,
    height: f.bottom - f.top,
    x: f.left,
    y: f.top
  };
}
function TC(e) {
  return d1(e);
}
function kC(e, t, n) {
  const r = oi(t), a = Ki(t), s = n === "fixed", l = ss(e, !0, s, t);
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const f = Aa(0);
  if (r || !r && !s)
    if ((Ma(t) !== "body" || Tl(a)) && (u = Lc(t)), r) {
      const h = ss(t, !0, s, t);
      f.x = h.x + t.clientLeft, f.y = h.y + t.clientTop;
    } else
      a && (f.x = p1(a));
  return {
    x: l.left + u.scrollLeft - f.x,
    y: l.top + u.scrollTop - f.y,
    width: l.width,
    height: l.height
  };
}
function k_(e, t) {
  return !oi(e) || Tr(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function v1(e, t) {
  const n = sr(e);
  if (!oi(e))
    return n;
  let r = k_(e, t);
  for (; r && vC(r) && Tr(r).position === "static"; )
    r = k_(r, t);
  return r && (Ma(r) === "html" || Ma(r) === "body" && Tr(r).position === "static" && !rp(r)) ? n : r || gC(e) || n;
}
const AC = async function(e) {
  let {
    reference: t,
    floating: n,
    strategy: r
  } = e;
  const a = this.getOffsetParent || v1, s = this.getDimensions;
  return {
    reference: kC(t, await a(n), r),
    floating: {
      x: 0,
      y: 0,
      ...await s(n)
    }
  };
};
function MC(e) {
  return Tr(e).direction === "rtl";
}
const $C = {
  convertOffsetParentRelativeRectToViewportRelativeRect: bC,
  getDocumentElement: Ki,
  getClippingRect: xC,
  getOffsetParent: v1,
  getElementRects: AC,
  getClientRects: wC,
  getDimensions: TC,
  getScale: Bs,
  isElement: Bi,
  isRTL: MC
};
function PC(e, t) {
  let n = null, r;
  const a = Ki(e);
  function s() {
    clearTimeout(r), n && n.disconnect(), n = null;
  }
  function l(u, f) {
    u === void 0 && (u = !1), f === void 0 && (f = 1), s();
    const {
      left: h,
      top: d,
      width: m,
      height: v
    } = e.getBoundingClientRect();
    if (u || t(), !m || !v)
      return;
    const g = ku(d), w = ku(a.clientWidth - (h + m)), O = ku(a.clientHeight - (d + v)), D = ku(h), x = {
      rootMargin: -g + "px " + -w + "px " + -O + "px " + -D + "px",
      threshold: tr(0, ka(1, f)) || 1
    };
    let k = !0;
    function E(P) {
      const M = P[0].intersectionRatio;
      if (M !== f) {
        if (!k)
          return l();
        M ? l(!1, M) : r = setTimeout(() => {
          l(!1, 1e-7);
        }, 100);
      }
      k = !1;
    }
    try {
      n = new IntersectionObserver(E, {
        ...x,
        // Handle <iframe>s
        root: a.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(E, x);
    }
    n.observe(e);
  }
  return l(!0), s;
}
function CC(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: a = !0,
    ancestorResize: s = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: u = typeof IntersectionObserver == "function",
    animationFrame: f = !1
  } = r, h = ap(e), d = a || s ? [...h ? vl(h) : [], ...vl(t)] : [];
  d.forEach((b) => {
    a && b.addEventListener("scroll", n, {
      passive: !0
    }), s && b.addEventListener("resize", n);
  });
  const m = h && u ? PC(h, n) : null;
  let v = -1, g = null;
  l && (g = new ResizeObserver((b) => {
    let [x] = b;
    x && x.target === h && g && (g.unobserve(t), cancelAnimationFrame(v), v = requestAnimationFrame(() => {
      g && g.observe(t);
    })), n();
  }), h && !f && g.observe(h), g.observe(t));
  let w, O = f ? ss(e) : null;
  f && D();
  function D() {
    const b = ss(e);
    O && (b.x !== O.x || b.y !== O.y || b.width !== O.width || b.height !== O.height) && n(), O = b, w = requestAnimationFrame(D);
  }
  return n(), () => {
    d.forEach((b) => {
      a && b.removeEventListener("scroll", n), s && b.removeEventListener("resize", n);
    }), m && m(), g && g.disconnect(), g = null, f && cancelAnimationFrame(w);
  };
}
const IC = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), a = {
    platform: $C,
    ...n
  }, s = {
    ...a.platform,
    _c: r
  };
  return oC(e, t, {
    ...a,
    platform: s
  });
};
function lh(e) {
  var t;
  return (t = e == null ? void 0 : e.$el) != null ? t : e;
}
function NC(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const n = lh(y(e.element));
      return n == null ? {} : lC({
        element: n,
        padding: e.padding
      }).fn(t);
    }
  };
}
function g1(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function A_(e, t) {
  const n = g1(e);
  return Math.round(t * n) / n;
}
function LC(e, t, n) {
  n === void 0 && (n = {});
  const r = n.whileElementsMounted, a = W(() => {
    var N;
    return (N = y(n.open)) != null ? N : !0;
  }), s = W(() => y(n.middleware)), l = W(() => {
    var N;
    return (N = y(n.placement)) != null ? N : "bottom";
  }), u = W(() => {
    var N;
    return (N = y(n.strategy)) != null ? N : "absolute";
  }), f = W(() => {
    var N;
    return (N = y(n.transform)) != null ? N : !0;
  }), h = W(() => lh(e.value)), d = W(() => lh(t.value)), m = Q(0), v = Q(0), g = Q(u.value), w = Q(l.value), O = Wh({}), D = Q(!1), b = W(() => {
    const N = {
      position: g.value,
      left: "0",
      top: "0"
    };
    if (!d.value)
      return N;
    const L = A_(d.value, m.value), H = A_(d.value, v.value);
    return f.value ? {
      ...N,
      transform: "translate(" + L + "px, " + H + "px)",
      ...g1(d.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: g.value,
      left: L + "px",
      top: H + "px"
    };
  });
  let x;
  function k() {
    h.value == null || d.value == null || IC(h.value, d.value, {
      middleware: s.value,
      placement: l.value,
      strategy: u.value
    }).then((N) => {
      m.value = N.x, v.value = N.y, g.value = N.strategy, w.value = N.placement, O.value = N.middlewareData, D.value = !0;
    });
  }
  function E() {
    typeof x == "function" && (x(), x = void 0);
  }
  function P() {
    if (E(), r === void 0) {
      k();
      return;
    }
    if (h.value != null && d.value != null) {
      x = r(h.value, d.value, k);
      return;
    }
  }
  function M() {
    a.value || (D.value = !1);
  }
  return Ue([s, l, u], k, {
    flush: "sync"
  }), Ue([h, d], P, {
    flush: "sync"
  }), Ue(a, M, {
    flush: "sync"
  }), Uh() && Vh(E), {
    x: Ps(m),
    y: Ps(v),
    strategy: Ps(g),
    placement: Ps(w),
    middlewareData: Ps(O),
    isPositioned: Ps(D),
    floatingStyles: b,
    update: k
  };
}
function di(e, t) {
  const n = typeof e == "string" && !t ? `${e}Context` : t, r = Symbol(n);
  return [(a) => {
    const s = kt(r, a);
    if (s || s === null)
      return s;
    throw new Error(
      `Injection \`${r.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (a) => (ii(r, a), a)];
}
function _1(e, t, n) {
  const r = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && r.addEventListener(e, t, { once: !0 }), r.dispatchEvent(a);
}
function RC(e, t) {
  var n;
  const r = Wh();
  return Gn(() => {
    r.value = e();
  }, {
    ...t,
    flush: (n = t == null ? void 0 : t.flush) != null ? n : "sync"
  }), fM(r);
}
function FC(e, t) {
  let n, r, a;
  const s = Q(!0), l = () => {
    s.value = !0, a();
  };
  Ue(e, l, { flush: "sync" });
  const u = typeof t == "function" ? t : t.get, f = typeof t == "function" ? void 0 : t.set, h = v0((d, m) => (r = d, a = m, {
    get() {
      return s.value && (n = u(), s.value = !1), r(), n;
    },
    set(v) {
      f == null || f(v);
    }
  }));
  return Object.isExtensible(h) && (h.trigger = l), h;
}
function y1(e) {
  return Uh() ? (Vh(e), !0) : !1;
}
function Rc(e) {
  let t = !1, n;
  const r = h0(!0);
  return (...a) => (t || (n = r.run(() => e(...a)), t = !0), n);
}
function Ja(e) {
  return typeof e == "function" ? e() : y(e);
}
const po = typeof window < "u" && typeof document < "u", YC = (e) => typeof e < "u", WC = Object.prototype.toString, UC = (e) => WC.call(e) === "[object Object]", VC = () => {
};
function BC(e, t = 1e4) {
  return v0((n, r) => {
    let a = Ja(e), s;
    const l = () => setTimeout(() => {
      a = Ja(e), r();
    }, Ja(t));
    return y1(() => {
      clearTimeout(s);
    }), {
      get() {
        return n(), a;
      },
      set(u) {
        a = u, r(), clearTimeout(s), s = l();
      }
    };
  });
}
function cs(e) {
  var t;
  const n = Ja(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const b1 = po ? window : void 0;
function HC(...e) {
  let t, n, r, a;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, r, a] = e, t = b1) : [t, n, r, a] = e, !t)
    return VC;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const s = [], l = () => {
    s.forEach((d) => d()), s.length = 0;
  }, u = (d, m, v, g) => (d.addEventListener(m, v, g), () => d.removeEventListener(m, v, g)), f = Ue(
    () => [cs(t), Ja(a)],
    ([d, m]) => {
      if (l(), !d)
        return;
      const v = UC(m) ? { ...m } : m;
      s.push(
        ...n.flatMap((g) => r.map((w) => u(d, g, w, v)))
      );
    },
    { immediate: !0, flush: "post" }
  ), h = () => {
    f(), l();
  };
  return y1(h), h;
}
function zC(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function jC(...e) {
  let t, n, r = {};
  e.length === 3 ? (t = e[0], n = e[1], r = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], r = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: a = b1,
    eventName: s = "keydown",
    passive: l = !1,
    dedupe: u = !1
  } = r, f = zC(t);
  return HC(a, s, (h) => {
    h.repeat && Ja(u) || f(h) && n(h);
  }, l);
}
function GC() {
  const e = Q(!1);
  return xr() && Hr(() => {
    e.value = !0;
  }), e;
}
function qC(e) {
  return JSON.parse(JSON.stringify(e));
}
function sp(e, t, n, r = {}) {
  var a, s, l;
  const {
    clone: u = !1,
    passive: f = !1,
    eventName: h,
    deep: d = !1,
    defaultValue: m,
    shouldEmit: v
  } = r, g = xr(), w = n || (g == null ? void 0 : g.emit) || ((a = g == null ? void 0 : g.$emit) == null ? void 0 : a.bind(g)) || ((l = (s = g == null ? void 0 : g.proxy) == null ? void 0 : s.$emit) == null ? void 0 : l.bind(g == null ? void 0 : g.proxy));
  let O = h;
  t || (t = "modelValue"), O = O || `update:${t.toString()}`;
  const D = (k) => u ? typeof u == "function" ? u(k) : qC(k) : k, b = () => YC(e[t]) ? D(e[t]) : m, x = (k) => {
    v ? v(k) && w(O, k) : w(O, k);
  };
  if (f) {
    const k = b(), E = Q(k);
    let P = !1;
    return Ue(
      () => e[t],
      (M) => {
        P || (P = !0, E.value = D(M), En(() => P = !1));
      }
    ), Ue(
      E,
      (M) => {
        !P && (M !== e[t] || d) && x(M);
      },
      { deep: d }
    ), E;
  } else
    return W({
      get() {
        return b();
      },
      set(k) {
        x(k);
      }
    });
}
function op(e) {
  return e ? e.flatMap((t) => t.type === Ke ? op(t.children) : [t]) : [];
}
function KC(e, t, n, r = {}) {
  if (!t)
    return null;
  const {
    arrowKeyOptions: a = "both",
    attributeName: s = "data-radix-vue-collection-item",
    itemsArray: l = [],
    loop: u = !0,
    dir: f = "ltr",
    preventScroll: h = !0,
    focus: d = !1
  } = r, [m, v, g, w, O, D] = [
    e.key === "ArrowRight",
    e.key === "ArrowLeft",
    e.key === "ArrowUp",
    e.key === "ArrowDown",
    e.key === "Home",
    e.key === "End"
  ], b = g || w, x = m || v;
  if (!O && !D && (!b && !x || a === "vertical" && x || a === "horizontal" && b))
    return null;
  const k = n ? Array.from(n.querySelectorAll(`[${s}]`)) : l;
  if (!k.length)
    return null;
  h && e.preventDefault();
  let E = null;
  return x || b ? E = w1(k, t, {
    goForward: b ? w : f === "ltr" ? m : v,
    loop: u
  }) : O ? E = k.at(0) || null : D && (E = k.at(-1) || null), d && (E == null || E.focus()), E;
}
function w1(e, t, { goForward: n, loop: r }, a = e.length) {
  if (--a === 0)
    return null;
  const s = e.indexOf(t), l = n ? s + 1 : s - 1;
  if (!r && (l < 0 || l >= e.length))
    return null;
  const u = (l + e.length) % e.length, f = e[u];
  return f ? f.hasAttribute("disabled") && f.getAttribute("disabled") !== "false" ? w1(
    e,
    f,
    { goForward: n, loop: r },
    a
  ) : f : null;
}
function xd(e) {
  return e !== null && typeof e == "object";
}
function uh(e, t, n = ".", r) {
  if (!xd(t))
    return uh(e, {}, n, r);
  const a = Object.assign({}, t);
  for (const s in e) {
    if (s === "__proto__" || s === "constructor")
      continue;
    const l = e[s];
    l != null && (r && r(a, s, l, n) || (Array.isArray(l) && Array.isArray(a[s]) ? a[s] = [...l, ...a[s]] : xd(l) && xd(a[s]) ? a[s] = uh(
      l,
      a[s],
      (n ? `${n}.` : "") + s.toString(),
      r
    ) : a[s] = l));
  }
  return a;
}
function ZC(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((n, r) => uh(n, r, "", e), {})
  );
}
const XC = ZC(), [O1, See] = di("ConfigProvider"), JC = Rc(() => Q()), QC = Rc(() => Q(0));
function E1(e) {
  const t = O1({
    scrollBody: Q(!0)
  }), n = QC(), r = JC(), a = Q(e), s = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = r.value ?? "", r.value = void 0;
  };
  return e && n.value++, Ue(a, (l) => {
    var u;
    if (po && l) {
      r.value === void 0 && (r.value = document.body.style.overflow);
      const f = window.innerWidth - document.documentElement.clientWidth, h = { padding: f, margin: 0 }, d = (u = t.scrollBody) != null && u.value ? typeof t.scrollBody.value == "object" ? XC({
        padding: t.scrollBody.value.padding === !0 ? f : t.scrollBody.value.padding,
        margin: t.scrollBody.value.margin === !0 ? f : t.scrollBody.value.margin
      }, h) : h : { padding: 0, margin: 0 };
      f > 0 && (document.body.style.paddingRight = `${d.padding}px`, document.body.style.marginRight = `${d.margin}px`, document.body.style.setProperty("--scrollbar-width", `${f}px`), document.body.style.overflow = "hidden"), En(() => {
        document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
      });
    }
  }, { immediate: !0 }), m0(() => {
    e && n.value--, n.value === 0 && s();
  }), a;
}
const e2 = "data-radix-vue-collection-item";
function D1(e, t = e2) {
  const n = e ?? Symbol();
  return { createCollection: (r) => {
    const a = Q([]);
    function s() {
      const l = cs(r);
      return l ? a.value = Array.from(
        l.querySelectorAll(`[${t}]:not([data-disabled=true])`)
      ) : a.value = [];
    }
    return dM(() => {
      a.value = [];
    }), Hr(s), hM(s), Ue(() => r == null ? void 0 : r.value, s, { immediate: !0 }), ii(n, a), a;
  }, injectCollection: () => kt(n, Q([])) };
}
function t2(e) {
  const t = O1({
    dir: Q("ltr")
  });
  return W(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.dir) == null ? void 0 : n.value) || "ltr";
  });
}
function n2(e) {
  const t = xr(), n = t == null ? void 0 : t.type.emits, r = {};
  return n != null && n.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), n == null || n.forEach((a) => {
    r[pM(g0(a))] = (...s) => e(a, ...s);
  }), r;
}
let Td = 0;
function S1() {
  Gn((e) => {
    if (!po)
      return;
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? M_()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? M_()
    ), Td++, e(() => {
      Td === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((n) => n.remove()), Td--;
    });
  });
}
function M_() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
function r2(e) {
  return W(() => {
    var t;
    return Ja(e) ? !!((t = cs(e)) != null && t.closest("form")) : !0;
  });
}
function x1(e) {
  const t = xr(), n = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((r, a) => {
    const s = (t == null ? void 0 : t.type.props[a]).default;
    return s !== void 0 && (r[a] = s), r;
  }, {});
  return FC(() => ({ ...e }), () => {
    const r = {}, a = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(a).forEach((s) => {
      r[g0(s)] = a[s];
    }), Object.keys({ ...n, ...r }).reduce((s, l) => (e[l] !== void 0 && (s[l] = e[l]), s), {});
  });
}
function mo(e, t) {
  const n = x1(e), r = t ? n2(t) : {};
  return W(() => ({
    ...n.value,
    ...r
  }));
}
function i2() {
  const e = xr();
  function t(n) {
    typeof n == "object" && (e.exposed = n, e.exposeProxy = n);
  }
  return t;
}
var a2 = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Is = /* @__PURE__ */ new WeakMap(), Au = /* @__PURE__ */ new WeakMap(), Mu = {}, kd = 0, T1 = function(e) {
  return e && (e.host || T1(e.parentNode));
}, s2 = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = T1(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, o2 = function(e, t, n, r) {
  var a = s2(t, Array.isArray(e) ? e : [e]);
  Mu[n] || (Mu[n] = /* @__PURE__ */ new WeakMap());
  var s = Mu[n], l = [], u = /* @__PURE__ */ new Set(), f = new Set(a), h = function(m) {
    !m || u.has(m) || (u.add(m), h(m.parentNode));
  };
  a.forEach(h);
  var d = function(m) {
    !m || f.has(m) || Array.prototype.forEach.call(m.children, function(v) {
      if (u.has(v))
        d(v);
      else {
        var g = v.getAttribute(r), w = g !== null && g !== "false", O = (Is.get(v) || 0) + 1, D = (s.get(v) || 0) + 1;
        Is.set(v, O), s.set(v, D), l.push(v), O === 1 && w && Au.set(v, !0), D === 1 && v.setAttribute(n, "true"), w || v.setAttribute(r, "true");
      }
    });
  };
  return d(t), u.clear(), kd++, function() {
    l.forEach(function(m) {
      var v = Is.get(m) - 1, g = s.get(m) - 1;
      Is.set(m, v), s.set(m, g), v || (Au.has(m) || m.removeAttribute(r), Au.delete(m)), g || m.removeAttribute(n);
    }), kd--, kd || (Is = /* @__PURE__ */ new WeakMap(), Is = /* @__PURE__ */ new WeakMap(), Au = /* @__PURE__ */ new WeakMap(), Mu = {});
  };
}, l2 = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), a = t || a2(e);
  return a ? (r.push.apply(r, Array.from(a.querySelectorAll("[aria-live]"))), o2(r, a, n, "aria-hidden")) : function() {
    return null;
  };
};
function u2(e) {
  let t;
  Ue(() => cs(e), (n) => {
    n ? t = l2(n) : t && t();
  }), Pa(() => {
    t && t();
  });
}
const c2 = Rc(() => ({ count: Q(0) }));
function f2(e) {
  const { count: t } = c2();
  return e || t.value++, e || `radix-${t.value}`;
}
function d2(e) {
  const t = Q(), n = W(() => {
    var a;
    return ((a = t.value) == null ? void 0 : a.width) ?? 0;
  }), r = W(() => {
    var a;
    return ((a = t.value) == null ? void 0 : a.height) ?? 0;
  });
  return Hr(() => {
    const a = cs(e);
    if (a) {
      t.value = { width: a.offsetWidth, height: a.offsetHeight };
      const s = new ResizeObserver((l) => {
        if (!Array.isArray(l) || !l.length)
          return;
        const u = l[0];
        let f, h;
        if ("borderBoxSize" in u) {
          const d = u.borderBoxSize, m = Array.isArray(d) ? d[0] : d;
          f = m.inlineSize, h = m.blockSize;
        } else
          f = a.offsetWidth, h = a.offsetHeight;
        t.value = { width: f, height: h };
      });
      return s.observe(a, { box: "border-box" }), () => s.unobserve(a);
    } else
      t.value = void 0;
  }), {
    width: n,
    height: r
  };
}
function h2(e, t) {
  const n = Q(e);
  function r(a) {
    return t[n.value][a] ?? n.value;
  }
  return {
    state: n,
    dispatch: (a) => {
      n.value = r(a);
    }
  };
}
function p2(e) {
  const t = BC("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (n) => {
      var r, a;
      t.value = t.value + n;
      const s = e.value, l = document.activeElement, u = ((a = (r = s.find((m) => m === l)) == null ? void 0 : r.textContent) == null ? void 0 : a.trim()) ?? "", f = s.map((m) => {
        var v;
        return ((v = m.textContent) == null ? void 0 : v.trim()) ?? "";
      }), h = v2(f, t.value, u), d = s.find(
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
function m2(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function v2(e, t, n) {
  const r = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = m2(e, Math.max(a, 0));
  r.length === 1 && (s = s.filter((u) => u !== n));
  const l = s.find(
    (u) => u.toLowerCase().startsWith(r.toLowerCase())
  );
  return l !== n ? l : void 0;
}
const lp = Re({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n }) {
    return () => {
      var r, a;
      if (!n.default)
        return null;
      const s = op(n.default()), [l, ...u] = s;
      if (Object.keys(t).length > 0) {
        (r = l.props) == null || delete r.ref;
        const f = Kt(t, l.props ?? {});
        t.class && (a = l.props) != null && a.class && delete l.props.class;
        const h = cM(l, f);
        for (const d in f)
          d.startsWith("on") && (h.props || (h.props = {}), h.props[d] = f[d]);
        return s.length === 1 ? h : [h, ...u];
      }
      return s;
    };
  }
}), Hi = Re({
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
    return (e.asChild ? "template" : e.as) !== "template" ? () => wr(e.as, t, { default: n.default }) : () => wr(lp, t, { default: n.default });
  }
});
function zr() {
  const e = Q(), t = W(() => {
    var n, r;
    return ["#text", "#comment"].includes((n = e.value) == null ? void 0 : n.$el.nodeName) ? (r = e.value) == null ? void 0 : r.$el.nextElementSibling : cs(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
function g2(e, t) {
  const n = Q({}), r = Q("none"), a = e.value ? "mounted" : "unmounted", { state: s, dispatch: l } = h2(a, {
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
  Ue(
    e,
    async (m, v) => {
      var g;
      const w = v !== m;
      if (await En(), w) {
        const O = r.value, D = $u(t.value);
        m ? l("MOUNT") : D === "none" || ((g = n.value) == null ? void 0 : g.display) === "none" ? l("UNMOUNT") : l(v && O !== D ? "ANIMATION_OUT" : "UNMOUNT");
      }
    },
    { immediate: !0 }
  );
  const u = (m) => {
    const v = $u(t.value), g = v.includes(
      m.animationName
    );
    m.target === t.value && g && l("ANIMATION_END"), m.target === t.value && v === "none" && l("ANIMATION_END");
  }, f = (m) => {
    m.target === t.value && (r.value = $u(t.value));
  }, h = Ue(
    t,
    (m, v) => {
      m ? (n.value = getComputedStyle(m), m.addEventListener("animationstart", f), m.addEventListener("animationcancel", u), m.addEventListener("animationend", u)) : (l("ANIMATION_END"), v == null || v.removeEventListener("animationstart", f), v == null || v.removeEventListener("animationcancel", u), v == null || v.removeEventListener("animationend", u));
    },
    { immediate: !0 }
  ), d = Ue(s, () => {
    const m = $u(t.value);
    r.value = s.value === "mounted" ? m : "none";
  });
  return Pa(() => {
    h(), d();
  }), {
    isPresent: W(
      () => ["mounted", "unmountSuspended"].includes(s.value)
    )
  };
}
function $u(e) {
  return e && getComputedStyle(e).animationName || "none";
}
const k1 = Re({
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
    const { present: a, forceMount: s } = oo(e), l = Q(), { isPresent: u } = g2(a, l);
    n({ present: u });
    let f = t.default({ present: u });
    f = op(f || []);
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
    return () => s.value || a.value || u.value ? wr(t.default({ present: u })[0], {
      ref: (d) => {
        const m = cs(d);
        return typeof (m == null ? void 0 : m.hasAttribute) > "u" || (m != null && m.hasAttribute("data-radix-popper-content-wrapper") ? l.value = m.firstChild : l.value = m), m;
      }
    }) : null;
  }
}), _2 = /* @__PURE__ */ Re({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = GC();
    return (n, r) => y(t) || n.forceMount ? (F(), Ze(_0, {
      key: 0,
      to: n.to,
      disabled: n.disabled
    }, [
      rt(n.$slots, "default")
    ], 8, ["to", "disabled"])) : De("", !0);
  }
}), y2 = "dismissableLayer.pointerDownOutside", b2 = "dismissableLayer.focusOutside";
function A1(e, t) {
  const n = t.closest(
    "[data-dismissable-layer]"
  ), r = e.querySelector(
    "[data-dismissable-layer]"
  ), a = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(n && r === n || a.indexOf(r) < a.indexOf(n));
}
function w2(e, t) {
  var n;
  const r = ((n = t == null ? void 0 : t.value) == null ? void 0 : n.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), a = Q(!1), s = Q(() => {
  });
  return Gn((l) => {
    if (!po)
      return;
    const u = async (h) => {
      if (t != null && t.value) {
        if (A1(t.value, h.target)) {
          a.value = !1;
          return;
        }
        if (h.target && !a.value) {
          let d = function() {
            _1(
              y2,
              e,
              m
            );
          };
          const m = { originalEvent: h };
          h.pointerType === "touch" ? (r.removeEventListener("click", s.value), s.value = d, r.addEventListener("click", s.value, {
            once: !0
          })) : d();
        } else
          r.removeEventListener("click", s.value);
        a.value = !1;
      }
    }, f = window.setTimeout(() => {
      r.addEventListener("pointerdown", u);
    }, 0);
    l(() => {
      window.clearTimeout(f), r.removeEventListener("pointerdown", u), r.removeEventListener("click", s.value);
    });
  }), {
    onPointerDownCapture: () => a.value = !0
  };
}
function O2(e, t) {
  var n;
  const r = ((n = t == null ? void 0 : t.value) == null ? void 0 : n.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), a = Q(!1);
  return Gn((s) => {
    if (!po)
      return;
    const l = async (u) => {
      t != null && t.value && (await En(), !A1(t.value, u.target) && u.target && !a.value && _1(
        b2,
        e,
        { originalEvent: u }
      ));
    };
    r.addEventListener("focusin", l), s(() => r.removeEventListener("focusin", l));
  }), {
    onFocusCapture: () => a.value = !0,
    onBlurCapture: () => a.value = !1
  };
}
const Ai = xl({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), M1 = /* @__PURE__ */ Re({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, r = t, { primitiveElement: a, currentElement: s } = zr(), l = W(
      () => {
        var w;
        return ((w = s.value) == null ? void 0 : w.ownerDocument) ?? globalThis.document;
      }
    ), u = W(() => Ai.layersRoot), f = W(() => s.value ? Array.from(u.value).indexOf(s.value) : -1), h = W(() => Ai.layersWithOutsidePointerEventsDisabled.size > 0), d = W(() => {
      const w = Array.from(u.value), [O] = [...Ai.layersWithOutsidePointerEventsDisabled].slice(-1), D = w.indexOf(O);
      return f.value >= D;
    }), m = w2(async (w) => {
      const O = [...Ai.branches].some(
        (D) => D.contains(w.target)
      );
      !d.value || O || (r("pointerDownOutside", w), r("interactOutside", w), await En(), w.defaultPrevented || r("dismiss"));
    }, s), v = O2((w) => {
      [...Ai.branches].some(
        (O) => O.contains(w.target)
      ) || (r("focusOutside", w), r("interactOutside", w), w.defaultPrevented || r("dismiss"));
    }, s);
    jC("Escape", (w) => {
      f.value === u.value.size - 1 && (r("escapeKeyDown", w), w.defaultPrevented || r("dismiss"));
    });
    let g;
    return Gn((w) => {
      s.value && (n.disableOutsidePointerEvents && (Ai.layersWithOutsidePointerEventsDisabled.size === 0 && (g = l.value.body.style.pointerEvents, l.value.body.style.pointerEvents = "none"), Ai.layersWithOutsidePointerEventsDisabled.add(s.value)), u.value.add(s.value), w(() => {
        n.disableOutsidePointerEvents && Ai.layersWithOutsidePointerEventsDisabled.size === 1 && (l.value.body.style.pointerEvents = g);
      }));
    }), Gn((w) => {
      w(() => {
        s.value && (u.value.delete(s.value), Ai.layersWithOutsidePointerEventsDisabled.delete(s.value));
      });
    }), (w, O) => (F(), Ze(y(Hi), {
      ref_key: "primitiveElement",
      ref: a,
      "as-child": w.asChild,
      as: w.as,
      "data-dismissable-layer": "",
      style: Fi({
        pointerEvents: h.value ? d.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: y(v).onFocusCapture,
      onBlurCapture: y(v).onBlurCapture,
      onPointerdownCapture: y(m).onPointerDownCapture
    }, {
      default: Pe(() => [
        rt(w.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
}), Ad = "focusScope.autoFocusOnMount", Md = "focusScope.autoFocusOnUnmount", $_ = { bubbles: !1, cancelable: !0 };
function E2(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (ya(r, { select: t }), document.activeElement !== n)
      return !0;
}
function D2(e) {
  const t = $1(e), n = P_(t, e), r = P_(t.reverse(), e);
  return [n, r];
}
function $1(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const a = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || a ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}
function P_(e, t) {
  for (const n of e)
    if (!S2(n, { upTo: t }))
      return n;
}
function S2(e, { upTo: t }) {
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
function x2(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function ya(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && x2(e) && t && e.select();
  }
}
const T2 = Rc(() => Q([]));
function k2() {
  const e = T2();
  return {
    add(t) {
      const n = e.value[0];
      t !== n && (n == null || n.pause()), e.value = C_(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var n;
      e.value = C_(e.value, t), (n = e.value[0]) == null || n.resume();
    }
  };
}
function C_(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function A2(e) {
  return e.filter((t) => t.tagName !== "A");
}
const P1 = /* @__PURE__ */ Re({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, r = t, { primitiveElement: a, currentElement: s } = zr(), l = Q(null), u = k2(), f = xl({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    Gn((d) => {
      if (!po)
        return;
      const m = s.value;
      if (!n.trapped)
        return;
      function v(D) {
        if (f.paused || !m)
          return;
        const b = D.target;
        m.contains(b) ? l.value = b : ya(l.value, { select: !0 });
      }
      function g(D) {
        if (f.paused || !m)
          return;
        const b = D.relatedTarget;
        b !== null && (m.contains(b) || ya(l.value, { select: !0 }));
      }
      function w(D) {
        m.contains(l.value) || ya(m);
      }
      document.addEventListener("focusin", v), document.addEventListener("focusout", g);
      const O = new MutationObserver(w);
      m && O.observe(m, { childList: !0, subtree: !0 }), d(() => {
        document.removeEventListener("focusin", v), document.removeEventListener("focusout", g), O.disconnect();
      });
    }), Gn(async (d) => {
      const m = s.value;
      if (await En(), !m)
        return;
      u.add(f);
      const v = document.activeElement;
      if (!m.contains(v)) {
        const g = new CustomEvent(Ad, $_);
        m.addEventListener(
          Ad,
          (w) => r("mountAutoFocus", w)
        ), m.dispatchEvent(g), g.defaultPrevented || (E2(A2($1(m)), {
          select: !0
        }), document.activeElement === v && ya(m));
      }
      d(() => {
        m.removeEventListener(
          Ad,
          (O) => r("mountAutoFocus", O)
        );
        const g = new CustomEvent(Md, $_), w = (O) => {
          r("unmountAutoFocus", O);
        };
        m.addEventListener(Md, w), m.dispatchEvent(g), setTimeout(() => {
          g.defaultPrevented || ya(v ?? document.body, { select: !0 }), m.removeEventListener(Md, w), u.remove(f);
        }, 0);
      });
    });
    function h(d) {
      if (!n.loop && !n.trapped || f.paused)
        return;
      const m = d.key === "Tab" && !d.altKey && !d.ctrlKey && !d.metaKey, v = document.activeElement;
      if (m && v) {
        const g = d.currentTarget, [w, O] = D2(g);
        w && O ? !d.shiftKey && v === O ? (d.preventDefault(), n.loop && ya(w, { select: !0 })) : d.shiftKey && v === w && (d.preventDefault(), n.loop && ya(O, { select: !0 })) : v === g && d.preventDefault();
      }
    }
    return (d, m) => (F(), Ze(y(Hi), {
      ref_key: "primitiveElement",
      ref: a,
      tabindex: "-1",
      "as-child": n.asChild,
      as: n.as,
      onKeydown: h
    }, {
      default: Pe(() => [
        rt(d.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), M2 = ["ArrowDown", "PageUp", "Home"], C1 = ["ArrowUp", "PageDown", "End"], $2 = [...M2, ...C1];
function P2(e) {
  return e ? "open" : "closed";
}
function C2(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function I2(e, t) {
  const { x: n, y: r } = e;
  let a = !1;
  for (let s = 0, l = t.length - 1; s < t.length; l = s++) {
    const u = t[s].x, f = t[s].y, h = t[l].x, d = t[l].y;
    f > r != d > r && n < (h - u) * (r - f) / (d - f) + u && (a = !a);
  }
  return a;
}
function N2(e, t) {
  if (!t)
    return !1;
  const n = { x: e.clientX, y: e.clientY };
  return I2(n, t);
}
function L2(e) {
  return e.pointerType === "mouse";
}
function up(e) {
  return e === "indeterminate";
}
function I1(e) {
  return up(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const R2 = ["value", "checked", "name", "disabled", "required"], [F2, Y2] = di("CheckboxRoot"), W2 = /* @__PURE__ */ Re({
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
    const n = e, r = t, { disabled: a } = oo(n), s = sp(n, "checked", r, {
      defaultValue: n.defaultChecked,
      passive: n.checked === void 0
    }), { primitiveElement: l, currentElement: u } = zr(), f = r2(u), h = W(() => {
      var d;
      return n.id && u.value ? (d = document.querySelector(`[for="${n.id}"]`)) == null ? void 0 : d.innerText : void 0;
    });
    return Y2({
      disabled: a,
      state: s
    }), (d, m) => (F(), G(Ke, null, [
      Me(y(Hi), Kt(d.$attrs, {
        id: d.id,
        ref_key: "primitiveElement",
        ref: l,
        role: "checkbox",
        "as-child": n.asChild,
        as: d.as,
        type: d.as === "button" ? "button" : void 0,
        "aria-checked": y(up)(y(s)) ? "mixed" : y(s),
        "aria-required": !1,
        "aria-label": d.$attrs["aria-label"] || h.value,
        "data-state": y(I1)(y(s)),
        "data-disabled": y(a) ? "" : void 0,
        disabled: y(a),
        onKeydown: jd(xa(() => {
        }, ["prevent"]), ["enter"]),
        onClick: m[0] || (m[0] = (v) => s.value = !y(s))
      }), {
        default: Pe(() => [
          rt(d.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "as-child", "as", "type", "aria-checked", "aria-label", "data-state", "data-disabled", "disabled", "onKeydown"]),
      y(f) ? (F(), G("input", {
        key: 0,
        type: "checkbox",
        tabindex: "-1",
        "aria-hidden": "",
        value: d.value,
        checked: !!y(s),
        name: n.name,
        disabled: n.disabled,
        required: n.required,
        style: Fi({
          transform: "translateX(-100%)",
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        })
      }, null, 12, R2)) : De("", !0)
    ], 64));
  }
}), U2 = /* @__PURE__ */ Re({
  __name: "CheckboxIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = F2();
    return (n, r) => (F(), Ze(y(k1), {
      present: n.forceMount || y(up)(y(t).state.value) || y(t).state.value === !0
    }, {
      default: Pe(() => [
        Me(y(Hi), Kt({
          "data-state": y(I1)(y(t).state.value),
          "data-disabled": y(t).disabled.value ? "" : void 0,
          style: { pointerEvents: "none" },
          "as-child": n.asChild,
          as: n.as
        }, n.$attrs), {
          default: Pe(() => [
            rt(n.$slots, "default")
          ]),
          _: 3
        }, 16, ["data-state", "data-disabled", "as-child", "as"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), [N1, V2] = di("PopperRoot"), B2 = /* @__PURE__ */ Re({
  __name: "PopperRoot",
  setup(e) {
    const t = Q();
    return V2({
      anchor: t,
      onAnchorChange: (n) => t.value = n
    }), (n, r) => rt(n.$slots, "default");
  }
}), H2 = /* @__PURE__ */ Re({
  __name: "PopperAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { primitiveElement: n, currentElement: r } = zr(), a = N1();
    return Ue(r, () => {
      a.onAnchorChange(t.element ?? r.value);
    }), (s, l) => (F(), Ze(y(Hi), {
      ref_key: "primitiveElement",
      ref: n,
      as: s.as,
      "as-child": s.asChild
    }, {
      default: Pe(() => [
        rt(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function z2(e) {
  return e !== null;
}
function j2(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var n, r, a;
      const { placement: s, rects: l, middlewareData: u } = t, f = ((n = u.arrow) == null ? void 0 : n.centerOffset) !== 0, h = f ? 0 : e.arrowWidth, d = f ? 0 : e.arrowHeight, [m, v] = ch(s), g = { start: "0%", center: "50%", end: "100%" }[v], w = (((r = u.arrow) == null ? void 0 : r.x) ?? 0) + h / 2, O = (((a = u.arrow) == null ? void 0 : a.y) ?? 0) + d / 2;
      let D = "", b = "";
      return m === "bottom" ? (D = f ? g : `${w}px`, b = `${-d}px`) : m === "top" ? (D = f ? g : `${w}px`, b = `${l.floating.height + d}px`) : m === "right" ? (D = `${-d}px`, b = f ? g : `${O}px`) : m === "left" && (D = `${l.floating.width + d}px`, b = f ? g : `${O}px`), { data: { x: D, y: b } };
    }
  };
}
function ch(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
const L1 = {
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
}, [xee, G2] = di("PopperContent"), R1 = /* @__PURE__ */ Re({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: p0({
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
    ...L1
  }),
  setup(e, { expose: t }) {
    const n = e, r = N1(), a = i2(), { primitiveElement: s, currentElement: l } = zr(), u = Q(), f = Q(), { width: h, height: d } = d2(f), m = W(
      () => n.side + (n.align !== "center" ? `-${n.align}` : "")
    ), v = W(() => typeof n.collisionPadding == "number" ? n.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...n.collisionPadding }), g = W(() => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]), w = W(() => ({
      padding: v.value,
      boundary: g.value.filter(z2),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: g.value.length > 0
    })), O = RC(() => [
      dC({
        mainAxis: n.sideOffset + d.value,
        alignmentAxis: n.alignOffset
      }),
      n.avoidCollisions && hC({
        mainAxis: !0,
        crossAxis: !!n.prioritizePosition,
        limiter: n.sticky === "partial" ? pC() : void 0,
        ...w.value
      }),
      !n.prioritizePosition && n.avoidCollisions && uC({
        ...w.value
      }),
      mC({
        ...w.value,
        apply: ({ elements: $, rects: q, availableWidth: Y, availableHeight: J }) => {
          const { width: me, height: le } = q.reference, pe = $.floating.style;
          Object.assign($.floating.style, {
            maxWidth: `${Y}px`,
            maxHeight: `${J}px`
          }), pe.setProperty(
            "--radix-popper-available-width",
            `${Y}px`
          ), pe.setProperty(
            "--radix-popper-available-height",
            `${J}px`
          ), pe.setProperty(
            "--radix-popper-anchor-width",
            `${me}px`
          ), pe.setProperty(
            "--radix-popper-anchor-height",
            `${le}px`
          );
        }
      }),
      f.value && NC({ element: f.value, padding: n.arrowPadding }),
      j2({
        arrowWidth: h.value,
        arrowHeight: d.value
      }),
      n.hideWhenDetached && cC({ strategy: "referenceHidden", ...w.value })
    ]), { floatingStyles: D, placement: b, isPositioned: x, middlewareData: k } = LC(
      r.anchor,
      u,
      {
        strategy: "fixed",
        placement: m,
        whileElementsMounted: (...$) => CC(...$, {
          animationFrame: n.updatePositionStrategy === "always"
        }),
        middleware: O
      }
    ), E = W(
      () => ch(b.value)[0]
    ), P = W(
      () => ch(b.value)[1]
    );
    Gn(() => {
      var $;
      x.value && (($ = n.onPlaced) == null || $.call(n));
    });
    const M = W(
      () => {
        var $;
        return (($ = k.value.arrow) == null ? void 0 : $.centerOffset) !== 0;
      }
    ), N = Q("");
    Gn(() => {
      l.value && (N.value = window.getComputedStyle(l.value).zIndex);
    });
    const L = W(() => {
      var $;
      return (($ = k.value.arrow) == null ? void 0 : $.x) ?? 0;
    }), H = W(() => {
      var $;
      return (($ = k.value.arrow) == null ? void 0 : $.y) ?? 0;
    });
    return G2({
      placedSide: E,
      onArrowChange: ($) => f.value = $,
      arrowX: L,
      arrowY: H,
      shouldHideArrow: M
    }), t({
      $el: l
    }), ($, q) => {
      var Y, J, me;
      return F(), G("div", {
        ref_key: "floatingRef",
        ref: u,
        "data-radix-popper-content-wrapper": "",
        style: Fi({
          ...y(D),
          transform: y(x) ? y(D).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: N.value,
          "--radix-popper-transform-origin": [
            (Y = y(k).transformOrigin) == null ? void 0 : Y.x,
            (J = y(k).transformOrigin) == null ? void 0 : J.y
          ].join(" ")
        })
      }, [
        Me(y(Hi), Kt({
          ref: (le) => {
            y(a)(le), s.value = le;
          }
        }, $.$attrs, {
          "as-child": n.asChild,
          as: $.as,
          "data-side": E.value,
          "data-align": P.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: y(x) ? void 0 : "none",
            // hide the content if using the hide middleware and should be hidden
            opacity: (me = y(k).hide) != null && me.referenceHidden ? 0 : void 0
          }
        }), {
          default: Pe(() => [
            rt($.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
}), [F1, Tee] = di("CollectionProvider");
Re({
  name: "CollectionSlot",
  setup(e, { slots: t }) {
    const n = F1(), { primitiveElement: r, currentElement: a } = zr();
    return Ue(a, () => {
      n.collectionRef.value = a.value;
    }), () => wr(lp, { ref: r }, t);
  }
});
Re({
  name: "CollectionItem",
  setup(e, { slots: t, attrs: n }) {
    const r = F1(), { primitiveElement: a, currentElement: s } = zr(), l = xr();
    return Gn((u) => {
      var f;
      if (s.value) {
        const h = zd(s.value);
        r.itemMap.value.set(h, { ref: s.value, ...zd(((f = l == null ? void 0 : l.parent) == null ? void 0 : f.props) ?? {}) }), u(() => r.itemMap.value.delete(h));
      }
    }), () => wr(lp, { ...n, [r.attrName]: "", ref: a }, t);
  }
});
const [q2, kee] = di(["MenuRoot", "MenuSub"], "MenuContext"), [K2, Aee] = di("MenuRoot"), Z2 = "rovingFocusGroup.onEntryFocus", X2 = { bubbles: !1, cancelable: !0 };
function J2(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
const [Mee, Q2] = di("RovingFocusGroup"), eI = /* @__PURE__ */ Re({
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
    const n = e, r = t, { loop: a, orientation: s, dir: l } = oo(n), u = t2(l), f = sp(n, "currentTabStopId", r, {
      defaultValue: n.defaultCurrentTabStopId,
      passive: n.currentTabStopId === void 0
    }), h = Q(!1), d = Q(!1), m = Q(0), { primitiveElement: v, currentElement: g } = zr(), { createCollection: w } = D1("rovingFocus"), O = w(g);
    function D(b) {
      const x = !d.value;
      if (b.currentTarget && b.target === b.currentTarget && x && !h.value) {
        const k = new CustomEvent(Z2, X2);
        if (b.currentTarget.dispatchEvent(k), r("entryFocus", k), !k.defaultPrevented) {
          const E = O.value, P = E.find((L) => L.getAttribute("data-active") === "true"), M = E.find(
            (L) => L.id === f.value
          ), N = [P, M, ...E].filter(
            Boolean
          );
          J2(N);
        }
      }
      d.value = !1;
    }
    return Q2({
      loop: a,
      dir: u,
      orientation: s,
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
    }), (b, x) => (F(), Ze(y(Hi), {
      ref_key: "primitiveElement",
      ref: v,
      tabindex: h.value || m.value === 0 ? -1 : 0,
      "data-orientation": y(s),
      as: b.as,
      "as-child": b.asChild,
      dir: y(u),
      style: { outline: "none" },
      onMousedown: x[0] || (x[0] = (k) => d.value = !0),
      onFocus: D,
      onBlur: x[1] || (x[1] = (k) => h.value = !1)
    }, {
      default: Pe(() => [
        rt(b.$slots, "default")
      ]),
      _: 3
    }, 8, ["tabindex", "data-orientation", "as", "as-child", "dir"]));
  }
}), [$ee, tI] = di("MenuContent");
p0({
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
  ...L1
});
const [kl, nI] = di("PopoverRoot"), rI = /* @__PURE__ */ Re({
  __name: "PopoverRoot",
  props: {
    defaultOpen: { type: Boolean, default: !1 },
    open: { type: Boolean, default: void 0 },
    modal: { type: Boolean, default: !1 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, r = t, { modal: a } = oo(n), s = sp(n, "open", r, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), l = Q(), u = Q(!1);
    return nI({
      contentId: f2(),
      modal: a,
      open: s,
      onOpenChange: (f) => {
        s.value = f;
      },
      onOpenToggle: () => {
        s.value = !s.value;
      },
      triggerElement: l,
      hasCustomAnchor: u
    }), (f, h) => (F(), Ze(y(B2), null, {
      default: Pe(() => [
        rt(f.$slots, "default")
      ]),
      _: 3
    }));
  }
}), iI = /* @__PURE__ */ Re({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e, { expose: t }) {
    const n = e, r = kl(), { primitiveElement: a, currentElement: s } = zr();
    return Hr(() => {
      r.triggerElement.value = s.value;
    }), t({ $el: s }), (l, u) => (F(), Ze(Zs(y(r).hasCustomAnchor.value ? y(Hi) : y(H2)), { "as-child": "" }, {
      default: Pe(() => [
        Me(y(Hi), {
          ref_key: "primitiveElement",
          ref: a,
          type: l.as === "button" ? "button" : void 0,
          "aria-haspopup": "dialog",
          "aria-expanded": y(r).open.value,
          "aria-controls": y(r).contentId,
          "data-state": y(r).open.value ? "open" : "closed",
          as: l.as,
          "as-child": n.asChild,
          onClick: y(r).onOpenToggle
        }, {
          default: Pe(() => [
            rt(l.$slots, "default")
          ]),
          _: 3
        }, 8, ["type", "aria-expanded", "aria-controls", "data-state", "as", "as-child", "onClick"])
      ]),
      _: 3
    }));
  }
}), aI = /* @__PURE__ */ Re({
  __name: "PopoverPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, r) => (F(), Ze(y(_2), ts(Mc(t)), {
      default: Pe(() => [
        rt(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Y1 = /* @__PURE__ */ Re({
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
    const n = e, r = t, a = x1(n), s = kl();
    return S1(), (l, u) => (F(), Ze(y(P1), {
      "as-child": "",
      loop: "",
      trapped: l.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (f) => r("openAutoFocus", f)),
      onUnmountAutoFocus: u[6] || (u[6] = (f) => r("closeAutoFocus", f))
    }, {
      default: Pe(() => [
        Me(y(M1), {
          "as-child": "",
          "disable-outside-pointer-events": l.disableOutsidePointerEvents,
          onPointerDownOutside: u[0] || (u[0] = (f) => r("pointerDownOutside", f)),
          onInteractOutside: u[1] || (u[1] = (f) => r("interactOutside", f)),
          onEscapeKeyDown: u[2] || (u[2] = (f) => r("escapeKeyDown", f)),
          onFocusOutside: u[3] || (u[3] = (f) => r("focusOutside", f)),
          onDismiss: u[4] || (u[4] = (f) => y(s).onOpenChange(!1))
        }, {
          default: Pe(() => [
            Me(y(R1), Kt(y(a), {
              id: y(s).contentId,
              "data-state": y(s).open.value ? "open" : "closed",
              role: "dialog",
              style: {
                "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
              }
            }), {
              default: Pe(() => [
                rt(l.$slots, "default")
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
}), sI = /* @__PURE__ */ Re({
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
    const n = e, r = t, a = kl(), s = Q(!1);
    E1(!0);
    const l = mo(n, r), { primitiveElement: u, currentElement: f } = zr();
    return u2(f), (h, d) => (F(), Ze(Y1, Kt({
      ref_key: "primitiveElement",
      ref: u
    }, y(l), {
      "trap-focus": y(a).open.value,
      "disable-outside-pointer-events": "",
      onCloseAutoFocus: d[0] || (d[0] = xa(
        (m) => {
          var v;
          r("closeAutoFocus", m), s.value || (v = y(a).triggerElement.value) == null || v.focus();
        },
        ["prevent"]
      )),
      onPointerDownOutside: d[1] || (d[1] = (m) => {
        r("pointerDownOutside", m);
        const v = m.detail.originalEvent, g = v.button === 0 && v.ctrlKey === !0, w = v.button === 2 || g;
        s.value = w;
      }),
      onFocusOutside: d[2] || (d[2] = xa(() => {
      }, ["prevent"]))
    }), {
      default: Pe(() => [
        rt(h.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), oI = /* @__PURE__ */ Re({
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
    const n = e, r = t, a = kl(), s = Q(!1), l = Q(!1), u = mo(n, r);
    return (f, h) => (F(), Ze(Y1, Kt(y(u), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: h[0] || (h[0] = (d) => {
        var m;
        r("closeAutoFocus", d), d.defaultPrevented || (s.value || (m = y(a).triggerElement.value) == null || m.focus(), d.preventDefault()), s.value = !1, l.value = !1;
      }),
      onInteractOutside: h[1] || (h[1] = async (d) => {
        var m;
        r("interactOutside", d), d.defaultPrevented || (s.value = !0, d.detail.originalEvent.type === "pointerdown" && (l.value = !0));
        const v = d.target;
        (m = y(a).triggerElement.value) != null && m.contains(v) && d.preventDefault(), d.detail.originalEvent.type === "focusin" && l.value && d.preventDefault();
      })
    }), {
      default: Pe(() => [
        rt(f.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), lI = /* @__PURE__ */ Re({
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
    const n = e, r = t, a = kl(), s = mo(n, r);
    return (l, u) => (F(), Ze(y(k1), {
      present: l.forceMount || y(a).open.value
    }, {
      default: Pe(() => [
        y(a).modal.value ? (F(), Ze(sI, ts(Kt({ key: 0 }, y(s))), {
          default: Pe(() => [
            rt(l.$slots, "default")
          ]),
          _: 3
        }, 16)) : (F(), Ze(oI, ts(Kt({ key: 1 }, y(s))), {
          default: Pe(() => [
            rt(l.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), uI = /* @__PURE__ */ Re({
  __name: "Popover",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const r = mo(e, t);
    return (a, s) => (F(), Ze(y(rI), ts(Mc(y(r))), {
      default: Pe(() => [
        rt(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), cI = /* @__PURE__ */ Re({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, r) => (F(), Ze(y(iI), Kt(t, { class: "" }), {
      default: Pe(() => [
        rt(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function W1(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = W1(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function fI() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = W1(e)) && (r && (r += " "), r += t);
  return r;
}
const cp = "-";
function dI(e) {
  const t = pI(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  function a(l) {
    const u = l.split(cp);
    return u[0] === "" && u.length !== 1 && u.shift(), U1(u, t) || hI(l);
  }
  function s(l, u) {
    const f = n[l] || [];
    return u && r[l] ? [...f, ...r[l]] : f;
  }
  return {
    getClassGroupId: a,
    getConflictingClassGroupIds: s
  };
}
function U1(e, t) {
  var l;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), a = r ? U1(e.slice(1), r) : void 0;
  if (a)
    return a;
  if (t.validators.length === 0)
    return;
  const s = e.join(cp);
  return (l = t.validators.find(({
    validator: u
  }) => u(s))) == null ? void 0 : l.classGroupId;
}
const I_ = /^\[(.+)\]$/;
function hI(e) {
  if (I_.test(e)) {
    const t = I_.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function pI(e) {
  const {
    theme: t,
    prefix: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return vI(Object.entries(e.classGroups), n).forEach(([s, l]) => {
    fh(l, r, s, t);
  }), r;
}
function fh(e, t, n, r) {
  e.forEach((a) => {
    if (typeof a == "string") {
      const s = a === "" ? t : N_(t, a);
      s.classGroupId = n;
      return;
    }
    if (typeof a == "function") {
      if (mI(a)) {
        fh(a(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: a,
        classGroupId: n
      });
      return;
    }
    Object.entries(a).forEach(([s, l]) => {
      fh(l, N_(t, s), n, r);
    });
  });
}
function N_(e, t) {
  let n = e;
  return t.split(cp).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}
function mI(e) {
  return e.isThemeGetter;
}
function vI(e, t) {
  return t ? e.map(([n, r]) => {
    const a = r.map((s) => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([l, u]) => [t + l, u])) : s);
    return [n, a];
  }) : e;
}
function gI(e) {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  function a(s, l) {
    n.set(s, l), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  }
  return {
    get(s) {
      let l = n.get(s);
      if (l !== void 0)
        return l;
      if ((l = r.get(s)) !== void 0)
        return a(s, l), l;
    },
    set(s, l) {
      n.has(s) ? n.set(s, l) : a(s, l);
    }
  };
}
const V1 = "!";
function _I(e) {
  const t = e.separator, n = t.length === 1, r = t[0], a = t.length;
  return function(l) {
    const u = [];
    let f = 0, h = 0, d;
    for (let O = 0; O < l.length; O++) {
      let D = l[O];
      if (f === 0) {
        if (D === r && (n || l.slice(O, O + a) === t)) {
          u.push(l.slice(h, O)), h = O + a;
          continue;
        }
        if (D === "/") {
          d = O;
          continue;
        }
      }
      D === "[" ? f++ : D === "]" && f--;
    }
    const m = u.length === 0 ? l : l.substring(h), v = m.startsWith(V1), g = v ? m.substring(1) : m, w = d && d > h ? d - h : void 0;
    return {
      modifiers: u,
      hasImportantModifier: v,
      baseClassName: g,
      maybePostfixModifierPosition: w
    };
  };
}
function yI(e) {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}
function bI(e) {
  return {
    cache: gI(e.cacheSize),
    splitModifiers: _I(e),
    ...dI(e)
  };
}
const wI = /\s+/;
function OI(e, t) {
  const {
    splitModifiers: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: a
  } = t, s = /* @__PURE__ */ new Set();
  return e.trim().split(wI).map((l) => {
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
    const g = yI(u).join(":");
    return {
      isTailwindClass: !0,
      modifierId: f ? g + V1 : g,
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
    return s.has(d) ? !1 : (s.add(d), a(f, h).forEach((m) => s.add(u + m)), !0);
  }).reverse().map((l) => l.originalClassName).join(" ");
}
function EI() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = B1(t)) && (r && (r += " "), r += n);
  return r;
}
function B1(e) {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = B1(e[r])) && (n && (n += " "), n += t);
  return n;
}
function DI(e, ...t) {
  let n, r, a, s = l;
  function l(f) {
    const h = t.reduce((d, m) => m(d), e());
    return n = bI(h), r = n.cache.get, a = n.cache.set, s = u, u(f);
  }
  function u(f) {
    const h = r(f);
    if (h)
      return h;
    const d = OI(f, n);
    return a(f, d), d;
  }
  return function() {
    return s(EI.apply(null, arguments));
  };
}
function Wt(e) {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}
const H1 = /^\[(?:([a-z-]+):)?(.+)\]$/i, SI = /^\d+\/\d+$/, xI = /* @__PURE__ */ new Set(["px", "full", "screen"]), TI = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, kI = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, AI = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, MI = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function Rr(e) {
  return Ka(e) || xI.has(e) || SI.test(e);
}
function ma(e) {
  return vo(e, "length", FI);
}
function Ka(e) {
  return !!e && !Number.isNaN(Number(e));
}
function Pu(e) {
  return vo(e, "number", Ka);
}
function jo(e) {
  return !!e && Number.isInteger(Number(e));
}
function $I(e) {
  return e.endsWith("%") && Ka(e.slice(0, -1));
}
function st(e) {
  return H1.test(e);
}
function va(e) {
  return TI.test(e);
}
const PI = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function CI(e) {
  return vo(e, PI, z1);
}
function II(e) {
  return vo(e, "position", z1);
}
const NI = /* @__PURE__ */ new Set(["image", "url"]);
function LI(e) {
  return vo(e, NI, WI);
}
function RI(e) {
  return vo(e, "", YI);
}
function Go() {
  return !0;
}
function vo(e, t, n) {
  const r = H1.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}
function FI(e) {
  return kI.test(e);
}
function z1() {
  return !1;
}
function YI(e) {
  return AI.test(e);
}
function WI(e) {
  return MI.test(e);
}
function UI() {
  const e = Wt("colors"), t = Wt("spacing"), n = Wt("blur"), r = Wt("brightness"), a = Wt("borderColor"), s = Wt("borderRadius"), l = Wt("borderSpacing"), u = Wt("borderWidth"), f = Wt("contrast"), h = Wt("grayscale"), d = Wt("hueRotate"), m = Wt("invert"), v = Wt("gap"), g = Wt("gradientColorStops"), w = Wt("gradientColorStopPositions"), O = Wt("inset"), D = Wt("margin"), b = Wt("opacity"), x = Wt("padding"), k = Wt("saturate"), E = Wt("scale"), P = Wt("sepia"), M = Wt("skew"), N = Wt("space"), L = Wt("translate"), H = () => ["auto", "contain", "none"], $ = () => ["auto", "hidden", "clip", "visible", "scroll"], q = () => ["auto", st, t], Y = () => [st, t], J = () => ["", Rr, ma], me = () => ["auto", Ka, st], le = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], pe = () => ["solid", "dashed", "dotted", "double", "none"], Oe = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"], Ve = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], Fe = () => ["", "0", st], ie = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], Ae = () => [Ka, Pu], vt = () => [Ka, st];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Go],
      spacing: [Rr, ma],
      blur: ["none", "", va, st],
      brightness: Ae(),
      borderColor: [e],
      borderRadius: ["none", "", "full", va, st],
      borderSpacing: Y(),
      borderWidth: J(),
      contrast: Ae(),
      grayscale: Fe(),
      hueRotate: vt(),
      invert: Fe(),
      gap: Y(),
      gradientColorStops: [e],
      gradientColorStopPositions: [$I, ma],
      inset: q(),
      margin: q(),
      opacity: Ae(),
      padding: Y(),
      saturate: Ae(),
      scale: Ae(),
      sepia: Fe(),
      skew: vt(),
      space: Y(),
      translate: Y()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", st]
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
        columns: [va]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": ie()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": ie()
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
        object: [...le(), st]
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
        overscroll: H()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": H()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": H()
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
        inset: [O]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [O]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [O]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [O]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [O]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [O]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [O]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [O]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [O]
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
        z: ["auto", jo, st]
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
        flex: ["1", "auto", "initial", "none", st]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: Fe()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: Fe()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", jo, st]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Go]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", jo, st]
        }, st]
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
        "grid-rows": [Go]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [jo, st]
        }, st]
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
        "auto-cols": ["auto", "min", "max", "fr", st]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", st]
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
        justify: ["normal", ...Ve()]
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
        content: ["normal", ...Ve(), "baseline"]
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
        "place-content": [...Ve(), "baseline"]
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
        p: [x]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [x]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [x]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [x]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [x]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [x]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [x]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [x]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [x]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [D]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [D]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [D]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [D]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [D]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [D]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [D]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [D]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [D]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [N]
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
        "space-y": [N]
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
        w: ["auto", "min", "max", "fit", st, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", st, Rr]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [va]
        }, va, st]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [st, t, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", Rr, st]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [st, t, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", va, ma]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Pu]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Go]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", st]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Ka, Pu]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Rr, st]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", st]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", st]
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
        decoration: [...pe(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Rr, ma]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Rr, st]
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
        indent: Y()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", st]
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
        content: ["none", st]
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
        bg: [...le(), II]
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
        bg: ["auto", "cover", "contain", CI]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, LI]
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
        rounded: [s]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [s]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [s]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [s]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [s]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [s]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [s]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [s]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [s]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [s]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [s]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [s]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [s]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [s]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [s]
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
        border: [...pe(), "hidden"]
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
        divide: pe()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [a]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [a]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [a]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [a]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [a]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [a]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [a]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [a]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...pe()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Rr, st]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Rr, ma]
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
        ring: J()
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
        "ring-offset": [Rr, ma]
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
        shadow: ["", "inner", "none", va, RI]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Go]
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
        "mix-blend": Oe()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Oe()
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
        "drop-shadow": ["", "none", va, st]
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
        saturate: [k]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [P]
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
        "backdrop-saturate": [k]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [P]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", st]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: vt()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", st]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: vt()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", st]
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
        scale: [E]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [E]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [E]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [jo, st]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [L]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [L]
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
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", st]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", st]
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
        "scroll-m": Y()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": Y()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": Y()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": Y()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": Y()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": Y()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": Y()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": Y()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": Y()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": Y()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": Y()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": Y()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": Y()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": Y()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": Y()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": Y()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": Y()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": Y()
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
        "will-change": ["auto", "scroll", "contents", "transform", st]
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
        stroke: [Rr, ma, Pu]
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
const VI = /* @__PURE__ */ DI(UI);
function j1(...e) {
  return VI(fI(e));
}
const BI = /* @__PURE__ */ Re({
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
    const n = e, r = mo(n, t);
    return (a, s) => (F(), Ze(y(aI), null, {
      default: Pe(() => [
        Me(y(lI), Kt({ ...y(r), ...a.$attrs }, {
          class: y(j1)(
            "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            n.class
          )
        }), {
          default: Pe(() => [
            rt(a.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), HI = {
  key: 0,
  class: "flex items-center gap-2 relative"
}, zI = { class: "p3-r text-dark-4" }, jI = { class: "flex gap-6" }, GI = { class: "p3-b text-true-blue-3 flex cursor-pointer items-center justify-center gap-2 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50" }, qI = /* @__PURE__ */ j("template", null, null, -1), KI = { class: "shadow-01 bg-light-5 z-[2] p-2 rounded flex flex-col gap-2" }, ZI = { class: "p3-b text-true-blue-3 w-fit flex cursor-pointer items-center justify-center gap-2 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50" }, XI = {
  key: 0,
  class: "border-t p-2"
}, JI = { class: "flex gap-1.5 flex-wrap" }, QI = {
  key: 1,
  class: "shadow-01 flex w-fit items-center py-1 px-2 rounded p3-r text-dark-3"
}, eN = ["onClick"], tN = {
  key: 0,
  class: "text-dark-5 mx-1"
}, nN = {
  key: 2,
  class: "flex gap-4 flex-wrap p-2 border-t"
}, rN = /* @__PURE__ */ Re({
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
    const n = e, { t: r } = fi.global, a = Q(n.monthDate), s = Q(n.weekOrdinal), l = Q(n.weekdays), u = Q(n.yearMonths), f = (E, P, M = !1) => {
      if (M) {
        P.findIndex((N) => N === E) === -1 ? P.push(E) : P.splice(P.indexOf(E), 1), P.sort((N, L) => N - L);
        return;
      }
      P.value.findIndex((N) => N === E) === -1 ? P.value.push(E) : P.value.splice(P.value.indexOf(E), 1), P.value.sort((N, L) => N - L);
    }, h = Q(""), d = kt("eventData");
    Gn(() => {
      t(
        "update:monthDate",
        a.value.length ? a.value : null
      ), t(
        "update:weekOrdinal",
        s.value.length ? s.value : null
      ), t(
        "update:weekdays",
        l.value.length ? l.value : null
      ), t(
        "update:yearMonths",
        u.value.length ? u.value : null
      ), h.value = JP(d.value, !0);
    });
    const m = Q([
      { name: r("週日"), id: yr.Sunday },
      { name: r("週一"), id: yr.Monday },
      { name: r("週二"), id: yr.Tuesday },
      { name: r("週三"), id: yr.Wednesday },
      { name: r("週四"), id: yr.Thursday },
      { name: r("週五"), id: yr.Friday },
      { name: r("週六"), id: yr.Saturday },
      { name: r("平日"), id: yr.Weekday },
      { name: r("週末"), id: yr.Weekend }
    ]), v = Q([
      { name: r("第一週"), id: Pi.First },
      { name: r("第二週"), id: Pi.Second },
      { name: r("第三週"), id: Pi.Third },
      { name: r("第四週"), id: Pi.Fourth },
      { name: r("第五週"), id: Pi.Fifth },
      { name: r("最後一週"), id: Pi.Last }
    ]), g = Q([
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
    ]), w = Q([
      {
        name: r("一月"),
        id: Vn.January
      },
      {
        name: r("二月"),
        id: Vn.February
      },
      {
        name: r("三月"),
        id: Vn.March
      },
      {
        name: r("四月"),
        id: Vn.April
      },
      {
        name: r("五月"),
        id: Vn.May
      },
      {
        name: r("六月"),
        id: Vn.June
      },
      {
        name: r("七月"),
        id: Vn.July
      },
      {
        name: r("八月"),
        id: Vn.August
      },
      {
        name: r("九月"),
        id: Vn.September
      },
      {
        name: r("十月"),
        id: Vn.October
      },
      {
        name: r("十一月"),
        id: Vn.November
      },
      {
        name: r("十二月"),
        id: Vn.December
      }
    ]), O = W(() => {
      if (n.type === St.Week)
        return [
          {
            key: l,
            label: "weekdaysOrigin",
            options: m.value
          }
        ];
      if (n.type === St.Month) {
        if (x.value.id === 0)
          return [
            {
              key: s,
              label: "weekOrdinalOrigin",
              options: v.value
            },
            {
              key: l,
              label: "weekdaysOrigin",
              options: m.value
            }
          ];
        if (x.value.id === 1)
          return [
            {
              key: a,
              label: "monthDateOrigin",
              options: g.value
            }
          ];
      }
      if (n.type === St.Annual) {
        if (x.value.id === 0)
          return [
            {
              key: s,
              label: "weekOrdinalOrigin",
              options: v.value
            },
            {
              key: l,
              label: "weekdaysOrigin",
              options: m.value
            }
          ];
        if (x.value.id === 1)
          return [
            {
              key: a,
              label: "monthDateOrigin",
              options: g.value
            }
          ];
      }
    }), D = W(() => n.type === St.Month || n.type === St.Annual ? !0 : (a.value = [], s.value = [], l.value = [], u.value = [], !1)), b = Q([
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
    ]), x = Q(b.value[0]);
    Ue(x, (E) => {
      if (E.id === 0) {
        a.value = [];
        return;
      }
      if (E.id === 1) {
        s.value = [], l.value = [];
        return;
      }
    }), Ue(
      () => n.type,
      (E) => {
        (E === St.Month || E === St.Annual) && (E != St.Annual && (u.value = []), g.value && g.value.length > 0 ? x.value = b.value[1] : x.value = b.value[0]);
      },
      { immediate: !0 }
    ), m0(() => {
      a.value = [], s.value = [], l.value = [], u.value = [];
    });
    const k = W(() => {
      if (n.type === St.Week)
        return !!l.value.length;
      if (n.type === St.Month) {
        if (x.value.id == 0)
          return !!s.value.length || !!l.value.length;
        if (x.value.id == 1)
          return !!a.value.length;
      }
      if (n.type === St.Annual) {
        if (x.value.id == 0)
          return !!u.value.length || !!s.value.length || !!l.value.length;
        if (x.value.id == 1)
          return !!u.value.length || !!a.value.length;
      }
    });
    return (E, P) => E.type === y(St).Annual || y(O) ? (F(), G("div", HI, [
      j("span", zI, ke(y(r)("指定時段")), 1),
      Me(y(uI), null, {
        default: Pe(() => [
          Me(y(cI), null, {
            default: Pe(() => [
              j("div", jI, [
                j("span", GI, ke(y(k) ? y(h) : y(r)("未設定")), 1),
                qI
              ])
            ]),
            _: 1
          }),
          Me(y(BI), {
            class: "shadow-none border-none p-0 w-96",
            align: "start",
            side: "bottom"
          }, {
            default: Pe(() => [
              j("div", KI, [
                j("div", ZI, ke(y(r)("月份")), 1),
                E.type === y(St).Annual ? (F(), G("div", XI, [
                  j("div", JI, [
                    (F(!0), G(Ke, null, Rt(y(w), (M) => {
                      var N;
                      return F(), Ze(Wg, {
                        key: M.id,
                        checked: (N = y(u)) == null ? void 0 : N.includes(M.id),
                        "onUpdate:checked": (L) => f(M.id, y(u), !0),
                        fieldId: M.name,
                        label: M.name
                      }, null, 8, ["checked", "onUpdate:checked", "fieldId", "label"]);
                    }), 128))
                  ])
                ])) : De("", !0),
                y(D) ? (F(), G("div", QI, [
                  (F(!0), G(Ke, null, Rt(y(b), (M, N) => (F(), G("div", {
                    class: "flex items-center",
                    key: M
                  }, [
                    Number.isInteger(M) ? De("", !0) : (F(), G(Ke, { key: 0 }, [
                      j("span", {
                        class: et(["cursor-pointer hover:drop-shadow-md", [
                          y(x).id == M.id ? "text-true-blue-3 drop-shadow-sm p3-b" : "p3-r"
                        ]]),
                        onClick: (L) => x.value = M
                      }, ke(M.name), 11, eN),
                      N < Object.keys(y(x)).filter(
                        (L) => isNaN(Number(L))
                      ).length - 1 ? (F(), G("div", tN, " | ")) : De("", !0)
                    ], 64))
                  ]))), 128))
                ])) : De("", !0),
                y(O) ? (F(), G("div", nN, [
                  (F(!0), G(Ke, null, Rt(y(O), (M) => (F(), G("div", {
                    class: "flex gap-1 flex-wrap",
                    key: M
                  }, [
                    (F(!0), G(Ke, null, Rt(M.options, (N) => {
                      var L;
                      return F(), Ze(Wg, {
                        key: N.id,
                        checked: (L = M.key.value) == null ? void 0 : L.includes(N.id),
                        "onUpdate:checked": (H) => f(N.id, M.key),
                        fieldId: N.name,
                        label: N.name
                      }, null, 8, ["checked", "onUpdate:checked", "fieldId", "label"]);
                    }), 128))
                  ]))), 128))
                ])) : De("", !0)
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ])) : De("", !0);
  }
}), iN = ["width", "height", "fill", "transform"], aN = { key: 0 }, sN = /* @__PURE__ */ j("path", { d: "M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z" }, null, -1), oN = [
  sN
], lN = { key: 1 }, uN = /* @__PURE__ */ j("path", {
  d: "M208,96l-80,80L48,96Z",
  opacity: "0.2"
}, null, -1), cN = /* @__PURE__ */ j("path", { d: "M215.39,92.94A8,8,0,0,0,208,88H48a8,8,0,0,0-5.66,13.66l80,80a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,215.39,92.94ZM128,164.69,67.31,104H188.69Z" }, null, -1), fN = [
  uN,
  cN
], dN = { key: 2 }, hN = /* @__PURE__ */ j("path", { d: "M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z" }, null, -1), pN = [
  hN
], mN = { key: 3 }, vN = /* @__PURE__ */ j("path", { d: "M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z" }, null, -1), gN = [
  vN
], _N = { key: 4 }, yN = /* @__PURE__ */ j("path", { d: "M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" }, null, -1), bN = [
  yN
], wN = { key: 5 }, ON = /* @__PURE__ */ j("path", { d: "M210.83,98.83l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,170.34l77.17-77.17a4,4,0,1,1,5.66,5.66Z" }, null, -1), EN = [
  ON
], DN = {
  name: "PhCaretDown"
}, G1 = /* @__PURE__ */ Re({
  ...DN,
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
    const t = e, n = kt("weight", "regular"), r = kt("size", "1em"), a = kt("color", "currentColor"), s = kt("mirrored", !1), l = W(() => t.weight ?? n), u = W(() => t.size ?? r), f = W(() => t.color ?? a), h = W(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : s ? "scale(-1, 1)" : void 0);
    return (d, m) => (F(), G("svg", Kt({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: u.value,
      height: u.value,
      fill: f.value,
      transform: h.value
    }, d.$attrs), [
      rt(d.$slots, "default"),
      l.value === "bold" ? (F(), G("g", aN, oN)) : l.value === "duotone" ? (F(), G("g", lN, fN)) : l.value === "fill" ? (F(), G("g", dN, pN)) : l.value === "light" ? (F(), G("g", mN, gN)) : l.value === "regular" ? (F(), G("g", _N, bN)) : l.value === "thin" ? (F(), G("g", wN, EN)) : De("", !0)
    ], 16, iN));
  }
}), SN = ["width", "height", "fill", "transform"], xN = { key: 0 }, TN = /* @__PURE__ */ j("path", { d: "M84,108A12,12,0,0,1,96,96h64a12,12,0,0,1,0,24H96A12,12,0,0,1,84,108Zm32,28H96a12,12,0,0,0,0,24h20a12,12,0,0,0,0-24ZM228,48V156.69a19.86,19.86,0,0,1-5.86,14.14l-51.31,51.31A19.86,19.86,0,0,1,156.69,228H48a20,20,0,0,1-20-20V48A20,20,0,0,1,48,28H208A20,20,0,0,1,228,48ZM52,204h92V156a12,12,0,0,1,12-12h48V52H52Zm139-36H168v23Z" }, null, -1), kN = [
  TN
], AN = { key: 1 }, MN = /* @__PURE__ */ j("path", {
  d: "M216,160l-56,56V160Z",
  opacity: "0.2"
}, null, -1), $N = /* @__PURE__ */ j("path", { d: "M88,96a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H96A8,8,0,0,1,88,96Zm8,40h64a8,8,0,0,0,0-16H96a8,8,0,0,0,0,16Zm32,16H96a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16ZM224,48V156.69A15.86,15.86,0,0,1,219.31,168L168,219.31A15.86,15.86,0,0,1,156.69,224H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM48,208H152V160a8,8,0,0,1,8-8h48V48H48Zm120-40v28.7L196.69,168Z" }, null, -1), PN = [
  MN,
  $N
], CN = { key: 2 }, IN = /* @__PURE__ */ j("path", { d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H156.69A15.92,15.92,0,0,0,168,219.31L219.31,168A15.92,15.92,0,0,0,224,156.69V48A16,16,0,0,0,208,32ZM96,88h64a8,8,0,0,1,0,16H96a8,8,0,0,1,0-16Zm32,80H96a8,8,0,0,1,0-16h32a8,8,0,0,1,0,16ZM96,136a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm64,68.69V160h44.7Z" }, null, -1), NN = [
  IN
], LN = { key: 3 }, RN = /* @__PURE__ */ j("path", { d: "M90,96a6,6,0,0,1,6-6h64a6,6,0,0,1,0,12H96A6,6,0,0,1,90,96Zm6,38h64a6,6,0,0,0,0-12H96a6,6,0,0,0,0,12Zm32,20H96a6,6,0,0,0,0,12h32a6,6,0,0,0,0-12ZM222,48V156.69a13.94,13.94,0,0,1-4.1,9.9L166.59,217.9a13.94,13.94,0,0,1-9.9,4.1H48a14,14,0,0,1-14-14V48A14,14,0,0,1,48,34H208A14,14,0,0,1,222,48ZM48,210H154V160a6,6,0,0,1,6-6h50V48a2,2,0,0,0-2-2H48a2,2,0,0,0-2,2V208A2,2,0,0,0,48,210Zm153.52-44H166v35.52Z" }, null, -1), FN = [
  RN
], YN = { key: 4 }, WN = /* @__PURE__ */ j("path", { d: "M88,96a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H96A8,8,0,0,1,88,96Zm8,40h64a8,8,0,0,0,0-16H96a8,8,0,0,0,0,16Zm32,16H96a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16ZM224,48V156.69A15.86,15.86,0,0,1,219.31,168L168,219.31A15.86,15.86,0,0,1,156.69,224H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM48,208H152V160a8,8,0,0,1,8-8h48V48H48Zm120-40v28.7L196.69,168Z" }, null, -1), UN = [
  WN
], VN = { key: 5 }, BN = /* @__PURE__ */ j("path", { d: "M92,96a4,4,0,0,1,4-4h64a4,4,0,0,1,0,8H96A4,4,0,0,1,92,96Zm4,36h64a4,4,0,0,0,0-8H96a4,4,0,0,0,0,8Zm32,24H96a4,4,0,0,0,0,8h32a4,4,0,0,0,0-8ZM220,48V156.69a11.9,11.9,0,0,1-3.52,8.48l-51.31,51.32a11.93,11.93,0,0,1-8.48,3.51H48a12,12,0,0,1-12-12V48A12,12,0,0,1,48,36H208A12,12,0,0,1,220,48ZM48,212H156V160a4,4,0,0,1,4-4h52V48a4,4,0,0,0-4-4H48a4,4,0,0,0-4,4V208A4,4,0,0,0,48,212Zm158.35-48H164v42.35Z" }, null, -1), HN = [
  BN
], zN = {
  name: "PhNote"
}, jN = /* @__PURE__ */ Re({
  ...zN,
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
    const t = e, n = kt("weight", "regular"), r = kt("size", "1em"), a = kt("color", "currentColor"), s = kt("mirrored", !1), l = W(() => t.weight ?? n), u = W(() => t.size ?? r), f = W(() => t.color ?? a), h = W(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : s ? "scale(-1, 1)" : void 0);
    return (d, m) => (F(), G("svg", Kt({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: u.value,
      height: u.value,
      fill: f.value,
      transform: h.value
    }, d.$attrs), [
      rt(d.$slots, "default"),
      l.value === "bold" ? (F(), G("g", xN, kN)) : l.value === "duotone" ? (F(), G("g", AN, PN)) : l.value === "fill" ? (F(), G("g", CN, NN)) : l.value === "light" ? (F(), G("g", LN, FN)) : l.value === "regular" ? (F(), G("g", YN, UN)) : l.value === "thin" ? (F(), G("g", VN, HN)) : De("", !0)
    ], 16, SN));
  }
}), GN = ["width", "height", "fill", "transform"], qN = { key: 0 }, KN = /* @__PURE__ */ j("path", { d: "M216,48H180V36A28,28,0,0,0,152,8H104A28,28,0,0,0,76,36V48H40a12,12,0,0,0,0,24h4V208a20,20,0,0,0,20,20H192a20,20,0,0,0,20-20V72h4a12,12,0,0,0,0-24ZM100,36a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4V48H100Zm88,168H68V72H188ZM116,104v64a12,12,0,0,1-24,0V104a12,12,0,0,1,24,0Zm48,0v64a12,12,0,0,1-24,0V104a12,12,0,0,1,24,0Z" }, null, -1), ZN = [
  KN
], XN = { key: 1 }, JN = /* @__PURE__ */ j("path", {
  d: "M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56Z",
  opacity: "0.2"
}, null, -1), QN = /* @__PURE__ */ j("path", { d: "M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z" }, null, -1), eL = [
  JN,
  QN
], tL = { key: 2 }, nL = /* @__PURE__ */ j("path", { d: "M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM112,168a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm0-120H96V40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Z" }, null, -1), rL = [
  nL
], iL = { key: 3 }, aL = /* @__PURE__ */ j("path", { d: "M216,50H174V40a22,22,0,0,0-22-22H104A22,22,0,0,0,82,40V50H40a6,6,0,0,0,0,12H50V208a14,14,0,0,0,14,14H192a14,14,0,0,0,14-14V62h10a6,6,0,0,0,0-12ZM94,40a10,10,0,0,1,10-10h48a10,10,0,0,1,10,10V50H94ZM194,208a2,2,0,0,1-2,2H64a2,2,0,0,1-2-2V62H194ZM110,104v64a6,6,0,0,1-12,0V104a6,6,0,0,1,12,0Zm48,0v64a6,6,0,0,1-12,0V104a6,6,0,0,1,12,0Z" }, null, -1), sL = [
  aL
], oL = { key: 4 }, lL = /* @__PURE__ */ j("path", { d: "M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z" }, null, -1), uL = [
  lL
], cL = { key: 5 }, fL = /* @__PURE__ */ j("path", { d: "M216,52H172V40a20,20,0,0,0-20-20H104A20,20,0,0,0,84,40V52H40a4,4,0,0,0,0,8H52V208a12,12,0,0,0,12,12H192a12,12,0,0,0,12-12V60h12a4,4,0,0,0,0-8ZM92,40a12,12,0,0,1,12-12h48a12,12,0,0,1,12,12V52H92ZM196,208a4,4,0,0,1-4,4H64a4,4,0,0,1-4-4V60H196ZM108,104v64a4,4,0,0,1-8,0V104a4,4,0,0,1,8,0Zm48,0v64a4,4,0,0,1-8,0V104a4,4,0,0,1,8,0Z" }, null, -1), dL = [
  fL
], hL = {
  name: "PhTrash"
}, pL = /* @__PURE__ */ Re({
  ...hL,
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
    const t = e, n = kt("weight", "regular"), r = kt("size", "1em"), a = kt("color", "currentColor"), s = kt("mirrored", !1), l = W(() => t.weight ?? n), u = W(() => t.size ?? r), f = W(() => t.color ?? a), h = W(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : s ? "scale(-1, 1)" : void 0);
    return (d, m) => (F(), G("svg", Kt({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: u.value,
      height: u.value,
      fill: f.value,
      transform: h.value
    }, d.$attrs), [
      rt(d.$slots, "default"),
      l.value === "bold" ? (F(), G("g", qN, ZN)) : l.value === "duotone" ? (F(), G("g", XN, eL)) : l.value === "fill" ? (F(), G("g", tL, rL)) : l.value === "light" ? (F(), G("g", iL, sL)) : l.value === "regular" ? (F(), G("g", oL, uL)) : l.value === "thin" ? (F(), G("g", cL, dL)) : De("", !0)
    ], 16, GN));
  }
}), mL = ["width", "height", "fill", "transform"], vL = { key: 0 }, gL = /* @__PURE__ */ j("path", { d: "M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z" }, null, -1), _L = [
  gL
], yL = { key: 1 }, bL = /* @__PURE__ */ j("path", {
  d: "M216,48V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z",
  opacity: "0.2"
}, null, -1), wL = /* @__PURE__ */ j("path", { d: "M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" }, null, -1), OL = [
  bL,
  wL
], EL = { key: 2 }, DL = /* @__PURE__ */ j("path", { d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM181.66,170.34a8,8,0,0,1-11.32,11.32L128,139.31,85.66,181.66a8,8,0,0,1-11.32-11.32L116.69,128,74.34,85.66A8,8,0,0,1,85.66,74.34L128,116.69l42.34-42.35a8,8,0,0,1,11.32,11.32L139.31,128Z" }, null, -1), SL = [
  DL
], xL = { key: 3 }, TL = /* @__PURE__ */ j("path", { d: "M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z" }, null, -1), kL = [
  TL
], AL = { key: 4 }, ML = /* @__PURE__ */ j("path", { d: "M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" }, null, -1), $L = [
  ML
], PL = { key: 5 }, CL = /* @__PURE__ */ j("path", { d: "M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z" }, null, -1), IL = [
  CL
], NL = {
  name: "PhX"
}, dh = /* @__PURE__ */ Re({
  ...NL,
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
    const t = e, n = kt("weight", "regular"), r = kt("size", "1em"), a = kt("color", "currentColor"), s = kt("mirrored", !1), l = W(() => t.weight ?? n), u = W(() => t.size ?? r), f = W(() => t.color ?? a), h = W(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : s ? "scale(-1, 1)" : void 0);
    return (d, m) => (F(), G("svg", Kt({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: u.value,
      height: u.value,
      fill: f.value,
      transform: h.value
    }, d.$attrs), [
      rt(d.$slots, "default"),
      l.value === "bold" ? (F(), G("g", vL, _L)) : l.value === "duotone" ? (F(), G("g", yL, OL)) : l.value === "fill" ? (F(), G("g", EL, SL)) : l.value === "light" ? (F(), G("g", xL, kL)) : l.value === "regular" ? (F(), G("g", AL, $L)) : l.value === "thin" ? (F(), G("g", PL, IL)) : De("", !0)
    ], 16, mL));
  }
});
var zn = "top", kr = "bottom", Ar = "right", jn = "left", fp = "auto", Al = [zn, kr, Ar, jn], eo = "start", gl = "end", LL = "clippingParents", q1 = "viewport", qo = "popper", RL = "reference", L_ = /* @__PURE__ */ Al.reduce(function(e, t) {
  return e.concat([t + "-" + eo, t + "-" + gl]);
}, []), K1 = /* @__PURE__ */ [].concat(Al, [fp]).reduce(function(e, t) {
  return e.concat([t, t + "-" + eo, t + "-" + gl]);
}, []), FL = "beforeRead", YL = "read", WL = "afterRead", UL = "beforeMain", VL = "main", BL = "afterMain", HL = "beforeWrite", zL = "write", jL = "afterWrite", GL = [FL, YL, WL, UL, VL, BL, HL, zL, jL];
function li(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function or(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function os(e) {
  var t = or(e).Element;
  return e instanceof t || e instanceof Element;
}
function Er(e) {
  var t = or(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function dp(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = or(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function qL(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, a = t.attributes[n] || {}, s = t.elements[n];
    !Er(s) || !li(s) || (Object.assign(s.style, r), Object.keys(a).forEach(function(l) {
      var u = a[l];
      u === !1 ? s.removeAttribute(l) : s.setAttribute(l, u === !0 ? "" : u);
    }));
  });
}
function KL(e) {
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
      var a = t.elements[r], s = t.attributes[r] || {}, l = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), u = l.reduce(function(f, h) {
        return f[h] = "", f;
      }, {});
      !Er(a) || !li(a) || (Object.assign(a.style, u), Object.keys(s).forEach(function(f) {
        a.removeAttribute(f);
      }));
    });
  };
}
const ZL = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: qL,
  effect: KL,
  requires: ["computeStyles"]
};
function ai(e) {
  return e.split("-")[0];
}
var Qa = Math.max, rc = Math.min, to = Math.round;
function hh() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Z1() {
  return !/^((?!chrome|android).)*safari/i.test(hh());
}
function no(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), a = 1, s = 1;
  t && Er(e) && (a = e.offsetWidth > 0 && to(r.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && to(r.height) / e.offsetHeight || 1);
  var l = os(e) ? or(e) : window, u = l.visualViewport, f = !Z1() && n, h = (r.left + (f && u ? u.offsetLeft : 0)) / a, d = (r.top + (f && u ? u.offsetTop : 0)) / s, m = r.width / a, v = r.height / s;
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
function hp(e) {
  var t = no(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function X1(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && dp(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function zi(e) {
  return or(e).getComputedStyle(e);
}
function XL(e) {
  return ["table", "td", "th"].indexOf(li(e)) >= 0;
}
function Ia(e) {
  return ((os(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Fc(e) {
  return li(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (dp(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Ia(e)
  );
}
function R_(e) {
  return !Er(e) || // https://github.com/popperjs/popper-core/issues/837
  zi(e).position === "fixed" ? null : e.offsetParent;
}
function JL(e) {
  var t = /firefox/i.test(hh()), n = /Trident/i.test(hh());
  if (n && Er(e)) {
    var r = zi(e);
    if (r.position === "fixed")
      return null;
  }
  var a = Fc(e);
  for (dp(a) && (a = a.host); Er(a) && ["html", "body"].indexOf(li(a)) < 0; ) {
    var s = zi(a);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none")
      return a;
    a = a.parentNode;
  }
  return null;
}
function Ml(e) {
  for (var t = or(e), n = R_(e); n && XL(n) && zi(n).position === "static"; )
    n = R_(n);
  return n && (li(n) === "html" || li(n) === "body" && zi(n).position === "static") ? t : n || JL(e) || t;
}
function pp(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function sl(e, t, n) {
  return Qa(e, rc(t, n));
}
function QL(e, t, n) {
  var r = sl(e, t, n);
  return r > n ? n : r;
}
function J1() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Q1(e) {
  return Object.assign({}, J1(), e);
}
function eb(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var eR = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, Q1(typeof t != "number" ? t : eb(t, Al));
};
function tR(e) {
  var t, n = e.state, r = e.name, a = e.options, s = n.elements.arrow, l = n.modifiersData.popperOffsets, u = ai(n.placement), f = pp(u), h = [jn, Ar].indexOf(u) >= 0, d = h ? "height" : "width";
  if (!(!s || !l)) {
    var m = eR(a.padding, n), v = hp(s), g = f === "y" ? zn : jn, w = f === "y" ? kr : Ar, O = n.rects.reference[d] + n.rects.reference[f] - l[f] - n.rects.popper[d], D = l[f] - n.rects.reference[f], b = Ml(s), x = b ? f === "y" ? b.clientHeight || 0 : b.clientWidth || 0 : 0, k = O / 2 - D / 2, E = m[g], P = x - v[d] - m[w], M = x / 2 - v[d] / 2 + k, N = sl(E, M, P), L = f;
    n.modifiersData[r] = (t = {}, t[L] = N, t.centerOffset = N - M, t);
  }
}
function nR(e) {
  var t = e.state, n = e.options, r = n.element, a = r === void 0 ? "[data-popper-arrow]" : r;
  a != null && (typeof a == "string" && (a = t.elements.popper.querySelector(a), !a) || X1(t.elements.popper, a) && (t.elements.arrow = a));
}
const rR = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: tR,
  effect: nR,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function ro(e) {
  return e.split("-")[1];
}
var iR = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function aR(e, t) {
  var n = e.x, r = e.y, a = t.devicePixelRatio || 1;
  return {
    x: to(n * a) / a || 0,
    y: to(r * a) / a || 0
  };
}
function F_(e) {
  var t, n = e.popper, r = e.popperRect, a = e.placement, s = e.variation, l = e.offsets, u = e.position, f = e.gpuAcceleration, h = e.adaptive, d = e.roundOffsets, m = e.isFixed, v = l.x, g = v === void 0 ? 0 : v, w = l.y, O = w === void 0 ? 0 : w, D = typeof d == "function" ? d({
    x: g,
    y: O
  }) : {
    x: g,
    y: O
  };
  g = D.x, O = D.y;
  var b = l.hasOwnProperty("x"), x = l.hasOwnProperty("y"), k = jn, E = zn, P = window;
  if (h) {
    var M = Ml(n), N = "clientHeight", L = "clientWidth";
    if (M === or(n) && (M = Ia(n), zi(M).position !== "static" && u === "absolute" && (N = "scrollHeight", L = "scrollWidth")), M = M, a === zn || (a === jn || a === Ar) && s === gl) {
      E = kr;
      var H = m && M === P && P.visualViewport ? P.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        M[N]
      );
      O -= H - r.height, O *= f ? 1 : -1;
    }
    if (a === jn || (a === zn || a === kr) && s === gl) {
      k = Ar;
      var $ = m && M === P && P.visualViewport ? P.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        M[L]
      );
      g -= $ - r.width, g *= f ? 1 : -1;
    }
  }
  var q = Object.assign({
    position: u
  }, h && iR), Y = d === !0 ? aR({
    x: g,
    y: O
  }, or(n)) : {
    x: g,
    y: O
  };
  if (g = Y.x, O = Y.y, f) {
    var J;
    return Object.assign({}, q, (J = {}, J[E] = x ? "0" : "", J[k] = b ? "0" : "", J.transform = (P.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + O + "px)" : "translate3d(" + g + "px, " + O + "px, 0)", J));
  }
  return Object.assign({}, q, (t = {}, t[E] = x ? O + "px" : "", t[k] = b ? g + "px" : "", t.transform = "", t));
}
function sR(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, a = r === void 0 ? !0 : r, s = n.adaptive, l = s === void 0 ? !0 : s, u = n.roundOffsets, f = u === void 0 ? !0 : u, h = {
    placement: ai(t.placement),
    variation: ro(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: a,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, F_(Object.assign({}, h, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: l,
    roundOffsets: f
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, F_(Object.assign({}, h, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: f
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const oR = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: sR,
  data: {}
};
var Cu = {
  passive: !0
};
function lR(e) {
  var t = e.state, n = e.instance, r = e.options, a = r.scroll, s = a === void 0 ? !0 : a, l = r.resize, u = l === void 0 ? !0 : l, f = or(t.elements.popper), h = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && h.forEach(function(d) {
    d.addEventListener("scroll", n.update, Cu);
  }), u && f.addEventListener("resize", n.update, Cu), function() {
    s && h.forEach(function(d) {
      d.removeEventListener("scroll", n.update, Cu);
    }), u && f.removeEventListener("resize", n.update, Cu);
  };
}
const uR = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: lR,
  data: {}
};
var cR = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Yu(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return cR[t];
  });
}
var fR = {
  start: "end",
  end: "start"
};
function Y_(e) {
  return e.replace(/start|end/g, function(t) {
    return fR[t];
  });
}
function mp(e) {
  var t = or(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function vp(e) {
  return no(Ia(e)).left + mp(e).scrollLeft;
}
function dR(e, t) {
  var n = or(e), r = Ia(e), a = n.visualViewport, s = r.clientWidth, l = r.clientHeight, u = 0, f = 0;
  if (a) {
    s = a.width, l = a.height;
    var h = Z1();
    (h || !h && t === "fixed") && (u = a.offsetLeft, f = a.offsetTop);
  }
  return {
    width: s,
    height: l,
    x: u + vp(e),
    y: f
  };
}
function hR(e) {
  var t, n = Ia(e), r = mp(e), a = (t = e.ownerDocument) == null ? void 0 : t.body, s = Qa(n.scrollWidth, n.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), l = Qa(n.scrollHeight, n.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), u = -r.scrollLeft + vp(e), f = -r.scrollTop;
  return zi(a || n).direction === "rtl" && (u += Qa(n.clientWidth, a ? a.clientWidth : 0) - s), {
    width: s,
    height: l,
    x: u,
    y: f
  };
}
function gp(e) {
  var t = zi(e), n = t.overflow, r = t.overflowX, a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + a + r);
}
function tb(e) {
  return ["html", "body", "#document"].indexOf(li(e)) >= 0 ? e.ownerDocument.body : Er(e) && gp(e) ? e : tb(Fc(e));
}
function ol(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = tb(e), a = r === ((n = e.ownerDocument) == null ? void 0 : n.body), s = or(r), l = a ? [s].concat(s.visualViewport || [], gp(r) ? r : []) : r, u = t.concat(l);
  return a ? u : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    u.concat(ol(Fc(l)))
  );
}
function ph(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function pR(e, t) {
  var n = no(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function W_(e, t, n) {
  return t === q1 ? ph(dR(e, n)) : os(t) ? pR(t, n) : ph(hR(Ia(e)));
}
function mR(e) {
  var t = ol(Fc(e)), n = ["absolute", "fixed"].indexOf(zi(e).position) >= 0, r = n && Er(e) ? Ml(e) : e;
  return os(r) ? t.filter(function(a) {
    return os(a) && X1(a, r) && li(a) !== "body";
  }) : [];
}
function vR(e, t, n, r) {
  var a = t === "clippingParents" ? mR(e) : [].concat(t), s = [].concat(a, [n]), l = s[0], u = s.reduce(function(f, h) {
    var d = W_(e, h, r);
    return f.top = Qa(d.top, f.top), f.right = rc(d.right, f.right), f.bottom = rc(d.bottom, f.bottom), f.left = Qa(d.left, f.left), f;
  }, W_(e, l, r));
  return u.width = u.right - u.left, u.height = u.bottom - u.top, u.x = u.left, u.y = u.top, u;
}
function nb(e) {
  var t = e.reference, n = e.element, r = e.placement, a = r ? ai(r) : null, s = r ? ro(r) : null, l = t.x + t.width / 2 - n.width / 2, u = t.y + t.height / 2 - n.height / 2, f;
  switch (a) {
    case zn:
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
    case Ar:
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
  var h = a ? pp(a) : null;
  if (h != null) {
    var d = h === "y" ? "height" : "width";
    switch (s) {
      case eo:
        f[h] = f[h] - (t[d] / 2 - n[d] / 2);
        break;
      case gl:
        f[h] = f[h] + (t[d] / 2 - n[d] / 2);
        break;
    }
  }
  return f;
}
function _l(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, a = r === void 0 ? e.placement : r, s = n.strategy, l = s === void 0 ? e.strategy : s, u = n.boundary, f = u === void 0 ? LL : u, h = n.rootBoundary, d = h === void 0 ? q1 : h, m = n.elementContext, v = m === void 0 ? qo : m, g = n.altBoundary, w = g === void 0 ? !1 : g, O = n.padding, D = O === void 0 ? 0 : O, b = Q1(typeof D != "number" ? D : eb(D, Al)), x = v === qo ? RL : qo, k = e.rects.popper, E = e.elements[w ? x : v], P = vR(os(E) ? E : E.contextElement || Ia(e.elements.popper), f, d, l), M = no(e.elements.reference), N = nb({
    reference: M,
    element: k,
    strategy: "absolute",
    placement: a
  }), L = ph(Object.assign({}, k, N)), H = v === qo ? L : M, $ = {
    top: P.top - H.top + b.top,
    bottom: H.bottom - P.bottom + b.bottom,
    left: P.left - H.left + b.left,
    right: H.right - P.right + b.right
  }, q = e.modifiersData.offset;
  if (v === qo && q) {
    var Y = q[a];
    Object.keys($).forEach(function(J) {
      var me = [Ar, kr].indexOf(J) >= 0 ? 1 : -1, le = [zn, kr].indexOf(J) >= 0 ? "y" : "x";
      $[J] += Y[le] * me;
    });
  }
  return $;
}
function gR(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, a = n.boundary, s = n.rootBoundary, l = n.padding, u = n.flipVariations, f = n.allowedAutoPlacements, h = f === void 0 ? K1 : f, d = ro(r), m = d ? u ? L_ : L_.filter(function(w) {
    return ro(w) === d;
  }) : Al, v = m.filter(function(w) {
    return h.indexOf(w) >= 0;
  });
  v.length === 0 && (v = m);
  var g = v.reduce(function(w, O) {
    return w[O] = _l(e, {
      placement: O,
      boundary: a,
      rootBoundary: s,
      padding: l
    })[ai(O)], w;
  }, {});
  return Object.keys(g).sort(function(w, O) {
    return g[w] - g[O];
  });
}
function _R(e) {
  if (ai(e) === fp)
    return [];
  var t = Yu(e);
  return [Y_(e), t, Y_(t)];
}
function yR(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var a = n.mainAxis, s = a === void 0 ? !0 : a, l = n.altAxis, u = l === void 0 ? !0 : l, f = n.fallbackPlacements, h = n.padding, d = n.boundary, m = n.rootBoundary, v = n.altBoundary, g = n.flipVariations, w = g === void 0 ? !0 : g, O = n.allowedAutoPlacements, D = t.options.placement, b = ai(D), x = b === D, k = f || (x || !w ? [Yu(D)] : _R(D)), E = [D].concat(k).reduce(function(Te, it) {
      return Te.concat(ai(it) === fp ? gR(t, {
        placement: it,
        boundary: d,
        rootBoundary: m,
        padding: h,
        flipVariations: w,
        allowedAutoPlacements: O
      }) : it);
    }, []), P = t.rects.reference, M = t.rects.popper, N = /* @__PURE__ */ new Map(), L = !0, H = E[0], $ = 0; $ < E.length; $++) {
      var q = E[$], Y = ai(q), J = ro(q) === eo, me = [zn, kr].indexOf(Y) >= 0, le = me ? "width" : "height", pe = _l(t, {
        placement: q,
        boundary: d,
        rootBoundary: m,
        altBoundary: v,
        padding: h
      }), Oe = me ? J ? Ar : jn : J ? kr : zn;
      P[le] > M[le] && (Oe = Yu(Oe));
      var Ve = Yu(Oe), Fe = [];
      if (s && Fe.push(pe[Y] <= 0), u && Fe.push(pe[Oe] <= 0, pe[Ve] <= 0), Fe.every(function(Te) {
        return Te;
      })) {
        H = q, L = !1;
        break;
      }
      N.set(q, Fe);
    }
    if (L)
      for (var ie = w ? 3 : 1, Ae = function(it) {
        var Qe = E.find(function(ve) {
          var ce = N.get(ve);
          if (ce)
            return ce.slice(0, it).every(function(_e) {
              return _e;
            });
        });
        if (Qe)
          return H = Qe, "break";
      }, vt = ie; vt > 0; vt--) {
        var At = Ae(vt);
        if (At === "break")
          break;
      }
    t.placement !== H && (t.modifiersData[r]._skip = !0, t.placement = H, t.reset = !0);
  }
}
const bR = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: yR,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function U_(e, t, n) {
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
function V_(e) {
  return [zn, Ar, kr, jn].some(function(t) {
    return e[t] >= 0;
  });
}
function wR(e) {
  var t = e.state, n = e.name, r = t.rects.reference, a = t.rects.popper, s = t.modifiersData.preventOverflow, l = _l(t, {
    elementContext: "reference"
  }), u = _l(t, {
    altBoundary: !0
  }), f = U_(l, r), h = U_(u, a, s), d = V_(f), m = V_(h);
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
const OR = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: wR
};
function ER(e, t, n) {
  var r = ai(e), a = [jn, zn].indexOf(r) >= 0 ? -1 : 1, s = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, l = s[0], u = s[1];
  return l = l || 0, u = (u || 0) * a, [jn, Ar].indexOf(r) >= 0 ? {
    x: u,
    y: l
  } : {
    x: l,
    y: u
  };
}
function DR(e) {
  var t = e.state, n = e.options, r = e.name, a = n.offset, s = a === void 0 ? [0, 0] : a, l = K1.reduce(function(d, m) {
    return d[m] = ER(m, t.rects, s), d;
  }, {}), u = l[t.placement], f = u.x, h = u.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += f, t.modifiersData.popperOffsets.y += h), t.modifiersData[r] = l;
}
const SR = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: DR
};
function xR(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = nb({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const TR = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: xR,
  data: {}
};
function kR(e) {
  return e === "x" ? "y" : "x";
}
function AR(e) {
  var t = e.state, n = e.options, r = e.name, a = n.mainAxis, s = a === void 0 ? !0 : a, l = n.altAxis, u = l === void 0 ? !1 : l, f = n.boundary, h = n.rootBoundary, d = n.altBoundary, m = n.padding, v = n.tether, g = v === void 0 ? !0 : v, w = n.tetherOffset, O = w === void 0 ? 0 : w, D = _l(t, {
    boundary: f,
    rootBoundary: h,
    padding: m,
    altBoundary: d
  }), b = ai(t.placement), x = ro(t.placement), k = !x, E = pp(b), P = kR(E), M = t.modifiersData.popperOffsets, N = t.rects.reference, L = t.rects.popper, H = typeof O == "function" ? O(Object.assign({}, t.rects, {
    placement: t.placement
  })) : O, $ = typeof H == "number" ? {
    mainAxis: H,
    altAxis: H
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, H), q = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, Y = {
    x: 0,
    y: 0
  };
  if (M) {
    if (s) {
      var J, me = E === "y" ? zn : jn, le = E === "y" ? kr : Ar, pe = E === "y" ? "height" : "width", Oe = M[E], Ve = Oe + D[me], Fe = Oe - D[le], ie = g ? -L[pe] / 2 : 0, Ae = x === eo ? N[pe] : L[pe], vt = x === eo ? -L[pe] : -N[pe], At = t.elements.arrow, Te = g && At ? hp(At) : {
        width: 0,
        height: 0
      }, it = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : J1(), Qe = it[me], ve = it[le], ce = sl(0, N[pe], Te[pe]), _e = k ? N[pe] / 2 - ie - ce - Qe - $.mainAxis : Ae - ce - Qe - $.mainAxis, Ce = k ? -N[pe] / 2 + ie + ce + ve + $.mainAxis : vt + ce + ve + $.mainAxis, te = t.elements.arrow && Ml(t.elements.arrow), Ee = te ? E === "y" ? te.clientTop || 0 : te.clientLeft || 0 : 0, C = (J = q == null ? void 0 : q[E]) != null ? J : 0, A = Oe + _e - C - Ee, z = Oe + Ce - C, fe = sl(g ? rc(Ve, A) : Ve, Oe, g ? Qa(Fe, z) : Fe);
      M[E] = fe, Y[E] = fe - Oe;
    }
    if (u) {
      var we, ze = E === "x" ? zn : jn, Zt = E === "x" ? kr : Ar, yt = M[P], Mt = P === "y" ? "height" : "width", _n = yt + D[ze], bt = yt - D[Zt], Z = [zn, jn].indexOf(b) !== -1, oe = (we = q == null ? void 0 : q[P]) != null ? we : 0, Ht = Z ? _n : yt - N[Mt] - L[Mt] - oe + $.altAxis, $t = Z ? yt + N[Mt] + L[Mt] - oe - $.altAxis : bt, pn = g && Z ? QL(Ht, yt, $t) : sl(g ? Ht : _n, yt, g ? $t : bt);
      M[P] = pn, Y[P] = pn - yt;
    }
    t.modifiersData[r] = Y;
  }
}
const MR = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: AR,
  requiresIfExists: ["offset"]
};
function $R(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function PR(e) {
  return e === or(e) || !Er(e) ? mp(e) : $R(e);
}
function CR(e) {
  var t = e.getBoundingClientRect(), n = to(t.width) / e.offsetWidth || 1, r = to(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function IR(e, t, n) {
  n === void 0 && (n = !1);
  var r = Er(t), a = Er(t) && CR(t), s = Ia(t), l = no(e, a, n), u = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((li(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  gp(s)) && (u = PR(t)), Er(t) ? (f = no(t, !0), f.x += t.clientLeft, f.y += t.clientTop) : s && (f.x = vp(s))), {
    x: l.left + u.scrollLeft - f.x,
    y: l.top + u.scrollTop - f.y,
    width: l.width,
    height: l.height
  };
}
function NR(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(s) {
    t.set(s.name, s);
  });
  function a(s) {
    n.add(s.name);
    var l = [].concat(s.requires || [], s.requiresIfExists || []);
    l.forEach(function(u) {
      if (!n.has(u)) {
        var f = t.get(u);
        f && a(f);
      }
    }), r.push(s);
  }
  return e.forEach(function(s) {
    n.has(s.name) || a(s);
  }), r;
}
function LR(e) {
  var t = NR(e);
  return GL.reduce(function(n, r) {
    return n.concat(t.filter(function(a) {
      return a.phase === r;
    }));
  }, []);
}
function RR(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function FR(e) {
  var t = e.reduce(function(n, r) {
    var a = n[r.name];
    return n[r.name] = a ? Object.assign({}, a, r, {
      options: Object.assign({}, a.options, r.options),
      data: Object.assign({}, a.data, r.data)
    }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var B_ = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function H_() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function YR(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, a = t.defaultOptions, s = a === void 0 ? B_ : a;
  return function(u, f, h) {
    h === void 0 && (h = s);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, B_, s),
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
        var x = typeof b == "function" ? b(d.options) : b;
        O(), d.options = Object.assign({}, s, d.options, x), d.scrollParents = {
          reference: os(u) ? ol(u) : u.contextElement ? ol(u.contextElement) : [],
          popper: ol(f)
        };
        var k = LR(FR([].concat(r, d.options.modifiers)));
        return d.orderedModifiers = k.filter(function(E) {
          return E.enabled;
        }), w(), g.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!v) {
          var b = d.elements, x = b.reference, k = b.popper;
          if (H_(x, k)) {
            d.rects = {
              reference: IR(x, Ml(k), d.options.strategy === "fixed"),
              popper: hp(k)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function($) {
              return d.modifiersData[$.name] = Object.assign({}, $.data);
            });
            for (var E = 0; E < d.orderedModifiers.length; E++) {
              if (d.reset === !0) {
                d.reset = !1, E = -1;
                continue;
              }
              var P = d.orderedModifiers[E], M = P.fn, N = P.options, L = N === void 0 ? {} : N, H = P.name;
              typeof M == "function" && (d = M({
                state: d,
                options: L,
                name: H,
                instance: g
              }) || d);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: RR(function() {
        return new Promise(function(D) {
          g.forceUpdate(), D(d);
        });
      }),
      destroy: function() {
        O(), v = !0;
      }
    };
    if (!H_(u, f))
      return g;
    g.setOptions(h).then(function(D) {
      !v && h.onFirstUpdate && h.onFirstUpdate(D);
    });
    function w() {
      d.orderedModifiers.forEach(function(D) {
        var b = D.name, x = D.options, k = x === void 0 ? {} : x, E = D.effect;
        if (typeof E == "function") {
          var P = E({
            state: d,
            name: b,
            instance: g,
            options: k
          }), M = function() {
          };
          m.push(P || M);
        }
      });
    }
    function O() {
      m.forEach(function(D) {
        return D();
      }), m = [];
    }
    return g;
  };
}
var WR = [uR, TR, oR, ZL, SR, bR, MR, rR, OR], UR = /* @__PURE__ */ YR({
  defaultModifiers: WR
}), VR = Object.defineProperty, BR = (e, t, n) => t in e ? VR(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Ne = (e, t, n) => (BR(e, typeof t != "symbol" ? t + "" : t, n), n);
const Zi = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, a] of t)
    n[r] = a;
  return n;
}, HR = {}, zR = {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  viewBox: "0 0 24 24"
}, jR = /* @__PURE__ */ j("polyline", { points: "9 18 15 12 9 6" }, null, -1), GR = [
  jR
];
function qR(e, t) {
  return F(), G("svg", zR, GR);
}
const KR = /* @__PURE__ */ Zi(HR, [["render", qR]]), ZR = {}, XR = {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  viewBox: "0 0 24 24"
}, JR = /* @__PURE__ */ j("polyline", { points: "15 18 9 12 15 6" }, null, -1), QR = [
  JR
];
function eF(e, t) {
  return F(), G("svg", XR, QR);
}
const tF = /* @__PURE__ */ Zi(ZR, [["render", eF]]), nF = {}, rF = {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  viewBox: "0 0 24 24"
}, iF = /* @__PURE__ */ j("polyline", { points: "6 9 12 15 18 9" }, null, -1), aF = [
  iF
];
function sF(e, t) {
  return F(), G("svg", rF, aF);
}
const oF = /* @__PURE__ */ Zi(nF, [["render", sF]]), lF = {}, uF = {
  fill: "none",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  viewBox: "0 0 24 24"
}, cF = /* @__PURE__ */ j("path", { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" }, null, -1), fF = [
  cF
];
function dF(e, t) {
  return F(), G("svg", uF, fF);
}
const hF = /* @__PURE__ */ Zi(lF, [["render", dF]]), pF = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IconChevronDown: oF,
  IconChevronLeft: tF,
  IconChevronRight: KR,
  IconClock: hF
}, Symbol.toStringTag, { value: "Module" })), io = /* @__PURE__ */ Re({
  __name: "BaseIcon",
  props: {
    name: { type: String, required: !0 },
    width: { type: String },
    height: { type: String },
    size: { type: String, default: "26" },
    viewBox: { type: String }
  },
  setup(e) {
    const t = e, n = W(() => t.width || t.size), r = W(() => t.height || t.size), a = W(() => pF[`Icon${t.name}`]);
    return (s, l) => (F(), Ze(Zs(y(a)), {
      width: y(n),
      height: y(r),
      class: "vc-base-icon"
    }, null, 8, ["width", "height"]));
  }
});
function rb() {
  return typeof window < "u";
}
function mF(e) {
  return rb() && e in window;
}
function vF(e) {
  const t = Q(!1), n = W(() => t.value ? "dark" : "light");
  let r, a;
  function s(g) {
    t.value = g.matches;
  }
  function l() {
    mF("matchMedia") && (r = window.matchMedia("(prefers-color-scheme: dark)"), r.addEventListener("change", s), t.value = r.matches);
  }
  function u() {
    const { selector: g = ":root", darkClass: w = "dark" } = e.value, O = document.querySelector(g);
    t.value = O.classList.contains(w);
  }
  function f(g) {
    const { selector: w = ":root", darkClass: O = "dark" } = g;
    if (rb() && w && O) {
      const D = document.querySelector(w);
      D && (a = new MutationObserver(u), a.observe(D, {
        attributes: !0,
        attributeFilter: ["class"]
      }), t.value = D.classList.contains(O));
    }
  }
  function h() {
    m();
    const g = typeof e.value;
    g === "string" && e.value.toLowerCase() === "system" ? l() : g === "object" ? f(e.value) : t.value = !!e.value;
  }
  const d = Ue(() => e.value, () => h(), {
    immediate: !0
  });
  function m() {
    r && (r.removeEventListener("change", s), r = void 0), a && (a.disconnect(), a = void 0);
  }
  function v() {
    m(), d();
  }
  return Pa(() => v()), {
    isDark: t,
    displayMode: n,
    cleanup: v
  };
}
var Iu = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function gF(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var _F = typeof Iu == "object" && Iu && Iu.Object === Object && Iu, ib = _F, yF = ib, bF = typeof self == "object" && self && self.Object === Object && self, wF = yF || bF || Function("return this")(), hi = wF, OF = hi, EF = OF.Symbol, Yc = EF, z_ = Yc, ab = Object.prototype, DF = ab.hasOwnProperty, SF = ab.toString, Ko = z_ ? z_.toStringTag : void 0;
function xF(e) {
  var t = DF.call(e, Ko), n = e[Ko];
  try {
    e[Ko] = void 0;
    var r = !0;
  } catch {
  }
  var a = SF.call(e);
  return r && (t ? e[Ko] = n : delete e[Ko]), a;
}
var TF = xF, kF = Object.prototype, AF = kF.toString;
function MF(e) {
  return AF.call(e);
}
var $F = MF, j_ = Yc, PF = TF, CF = $F, IF = "[object Null]", NF = "[object Undefined]", G_ = j_ ? j_.toStringTag : void 0;
function LF(e) {
  return e == null ? e === void 0 ? NF : IF : G_ && G_ in Object(e) ? PF(e) : CF(e);
}
var pi = LF;
function RF(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Xi = RF, FF = pi, YF = Xi, WF = "[object AsyncFunction]", UF = "[object Function]", VF = "[object GeneratorFunction]", BF = "[object Proxy]";
function HF(e) {
  if (!YF(e))
    return !1;
  var t = FF(e);
  return t == UF || t == VF || t == WF || t == BF;
}
var fs = HF, zF = Array.isArray, jr = zF;
function jF(e) {
  return e != null && typeof e == "object";
}
var Gr = jF, GF = pi, qF = jr, KF = Gr, ZF = "[object String]";
function XF(e) {
  return typeof e == "string" || !qF(e) && KF(e) && GF(e) == ZF;
}
var ti = XF, JF = pi, QF = Gr, e8 = "[object Boolean]";
function t8(e) {
  return e === !0 || e === !1 || QF(e) && JF(e) == e8;
}
var n8 = t8, r8 = pi, i8 = Gr, a8 = "[object Number]";
function s8(e) {
  return typeof e == "number" || i8(e) && r8(e) == a8;
}
var Ur = s8, o8 = pi, l8 = Gr, u8 = "[object Date]";
function c8(e) {
  return l8(e) && o8(e) == u8;
}
var f8 = c8;
function d8(e) {
  return function(t) {
    return e(t);
  };
}
var sb = d8, yl = {}, h8 = {
  get exports() {
    return yl;
  },
  set exports(e) {
    yl = e;
  }
};
(function(e, t) {
  var n = ib, r = t && !t.nodeType && t, a = r && !0 && e && !e.nodeType && e, s = a && a.exports === r, l = s && n.process, u = function() {
    try {
      var f = a && a.require && a.require("util").types;
      return f || l && l.binding && l.binding("util");
    } catch {
    }
  }();
  e.exports = u;
})(h8, yl);
var p8 = f8, m8 = sb, q_ = yl, K_ = q_ && q_.isDate, v8 = K_ ? m8(K_) : p8, g8 = v8, _8 = pi, y8 = Gr, b8 = "[object Symbol]";
function w8(e) {
  return typeof e == "symbol" || y8(e) && _8(e) == b8;
}
var _p = w8, O8 = jr, E8 = _p, D8 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, S8 = /^\w*$/;
function x8(e, t) {
  if (O8(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || E8(e) ? !0 : S8.test(e) || !D8.test(e) || t != null && e in Object(t);
}
var yp = x8, T8 = hi, k8 = T8["__core-js_shared__"], A8 = k8, $d = A8, Z_ = function() {
  var e = /[^.]+$/.exec($d && $d.keys && $d.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function M8(e) {
  return !!Z_ && Z_ in e;
}
var $8 = M8, P8 = Function.prototype, C8 = P8.toString;
function I8(e) {
  if (e != null) {
    try {
      return C8.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var ob = I8, N8 = fs, L8 = $8, R8 = Xi, F8 = ob, Y8 = /[\\^$.*+?()[\]{}|]/g, W8 = /^\[object .+?Constructor\]$/, U8 = Function.prototype, V8 = Object.prototype, B8 = U8.toString, H8 = V8.hasOwnProperty, z8 = RegExp(
  "^" + B8.call(H8).replace(Y8, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function j8(e) {
  if (!R8(e) || L8(e))
    return !1;
  var t = N8(e) ? z8 : W8;
  return t.test(F8(e));
}
var G8 = j8;
function q8(e, t) {
  return e == null ? void 0 : e[t];
}
var K8 = q8, Z8 = G8, X8 = K8;
function J8(e, t) {
  var n = X8(e, t);
  return Z8(n) ? n : void 0;
}
var ds = J8, Q8 = ds, e4 = Q8(Object, "create"), Wc = e4, X_ = Wc;
function t4() {
  this.__data__ = X_ ? X_(null) : {}, this.size = 0;
}
var n4 = t4;
function r4(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var i4 = r4, a4 = Wc, s4 = "__lodash_hash_undefined__", o4 = Object.prototype, l4 = o4.hasOwnProperty;
function u4(e) {
  var t = this.__data__;
  if (a4) {
    var n = t[e];
    return n === s4 ? void 0 : n;
  }
  return l4.call(t, e) ? t[e] : void 0;
}
var c4 = u4, f4 = Wc, d4 = Object.prototype, h4 = d4.hasOwnProperty;
function p4(e) {
  var t = this.__data__;
  return f4 ? t[e] !== void 0 : h4.call(t, e);
}
var m4 = p4, v4 = Wc, g4 = "__lodash_hash_undefined__";
function _4(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = v4 && t === void 0 ? g4 : t, this;
}
var y4 = _4, b4 = n4, w4 = i4, O4 = c4, E4 = m4, D4 = y4;
function go(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
go.prototype.clear = b4;
go.prototype.delete = w4;
go.prototype.get = O4;
go.prototype.has = E4;
go.prototype.set = D4;
var S4 = go;
function x4() {
  this.__data__ = [], this.size = 0;
}
var T4 = x4;
function k4(e, t) {
  return e === t || e !== e && t !== t;
}
var _o = k4, A4 = _o;
function M4(e, t) {
  for (var n = e.length; n--; )
    if (A4(e[n][0], t))
      return n;
  return -1;
}
var Uc = M4, $4 = Uc, P4 = Array.prototype, C4 = P4.splice;
function I4(e) {
  var t = this.__data__, n = $4(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : C4.call(t, n, 1), --this.size, !0;
}
var N4 = I4, L4 = Uc;
function R4(e) {
  var t = this.__data__, n = L4(t, e);
  return n < 0 ? void 0 : t[n][1];
}
var F4 = R4, Y4 = Uc;
function W4(e) {
  return Y4(this.__data__, e) > -1;
}
var U4 = W4, V4 = Uc;
function B4(e, t) {
  var n = this.__data__, r = V4(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
var H4 = B4, z4 = T4, j4 = N4, G4 = F4, q4 = U4, K4 = H4;
function yo(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
yo.prototype.clear = z4;
yo.prototype.delete = j4;
yo.prototype.get = G4;
yo.prototype.has = q4;
yo.prototype.set = K4;
var Vc = yo, Z4 = ds, X4 = hi, J4 = Z4(X4, "Map"), bp = J4, J_ = S4, Q4 = Vc, eY = bp;
function tY() {
  this.size = 0, this.__data__ = {
    hash: new J_(),
    map: new (eY || Q4)(),
    string: new J_()
  };
}
var nY = tY;
function rY(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var iY = rY, aY = iY;
function sY(e, t) {
  var n = e.__data__;
  return aY(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
var Bc = sY, oY = Bc;
function lY(e) {
  var t = oY(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var uY = lY, cY = Bc;
function fY(e) {
  return cY(this, e).get(e);
}
var dY = fY, hY = Bc;
function pY(e) {
  return hY(this, e).has(e);
}
var mY = pY, vY = Bc;
function gY(e, t) {
  var n = vY(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
var _Y = gY, yY = nY, bY = uY, wY = dY, OY = mY, EY = _Y;
function bo(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
bo.prototype.clear = yY;
bo.prototype.delete = bY;
bo.prototype.get = wY;
bo.prototype.has = OY;
bo.prototype.set = EY;
var wp = bo, lb = wp, DY = "Expected a function";
function Op(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(DY);
  var n = function() {
    var r = arguments, a = t ? t.apply(this, r) : r[0], s = n.cache;
    if (s.has(a))
      return s.get(a);
    var l = e.apply(this, r);
    return n.cache = s.set(a, l) || s, l;
  };
  return n.cache = new (Op.Cache || lb)(), n;
}
Op.Cache = lb;
var SY = Op, xY = SY, TY = 500;
function kY(e) {
  var t = xY(e, function(r) {
    return n.size === TY && n.clear(), r;
  }), n = t.cache;
  return t;
}
var AY = kY, MY = AY, $Y = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, PY = /\\(\\)?/g, CY = MY(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace($Y, function(n, r, a, s) {
    t.push(a ? s.replace(PY, "$1") : r || n);
  }), t;
}), IY = CY;
function NY(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, a = Array(r); ++n < r; )
    a[n] = t(e[n], n, e);
  return a;
}
var LY = NY, Q_ = Yc, RY = LY, FY = jr, YY = _p, WY = 1 / 0, ey = Q_ ? Q_.prototype : void 0, ty = ey ? ey.toString : void 0;
function ub(e) {
  if (typeof e == "string")
    return e;
  if (FY(e))
    return RY(e, ub) + "";
  if (YY(e))
    return ty ? ty.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -WY ? "-0" : t;
}
var UY = ub, VY = UY;
function BY(e) {
  return e == null ? "" : VY(e);
}
var HY = BY, zY = jr, jY = yp, GY = IY, qY = HY;
function KY(e, t) {
  return zY(e) ? e : jY(e, t) ? [e] : GY(qY(e));
}
var cb = KY, ZY = _p, XY = 1 / 0;
function JY(e) {
  if (typeof e == "string" || ZY(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -XY ? "-0" : t;
}
var Hc = JY, QY = cb, e3 = Hc;
function t3(e, t) {
  t = QY(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[e3(t[n++])];
  return n && n == r ? e : void 0;
}
var fb = t3, n3 = fb;
function r3(e, t, n) {
  var r = e == null ? void 0 : n3(e, t);
  return r === void 0 ? n : r;
}
var Za = r3, i3 = ds, a3 = function() {
  try {
    var e = i3(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), db = a3, ny = db;
function s3(e, t, n) {
  t == "__proto__" && ny ? ny(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
var zc = s3, o3 = zc, l3 = _o, u3 = Object.prototype, c3 = u3.hasOwnProperty;
function f3(e, t, n) {
  var r = e[t];
  (!(c3.call(e, t) && l3(r, n)) || n === void 0 && !(t in e)) && o3(e, t, n);
}
var d3 = f3, h3 = 9007199254740991, p3 = /^(?:0|[1-9]\d*)$/;
function m3(e, t) {
  var n = typeof e;
  return t = t ?? h3, !!t && (n == "number" || n != "symbol" && p3.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Ep = m3;
function v3(e) {
  return function(t, n, r) {
    for (var a = -1, s = Object(t), l = r(t), u = l.length; u--; ) {
      var f = l[e ? u : ++a];
      if (n(s[f], f, s) === !1)
        break;
    }
    return t;
  };
}
var g3 = v3, _3 = g3, y3 = _3(), hb = y3;
function b3(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var w3 = b3, O3 = pi, E3 = Gr, D3 = "[object Arguments]";
function S3(e) {
  return E3(e) && O3(e) == D3;
}
var x3 = S3, ry = x3, T3 = Gr, pb = Object.prototype, k3 = pb.hasOwnProperty, A3 = pb.propertyIsEnumerable, M3 = ry(function() {
  return arguments;
}()) ? ry : function(e) {
  return T3(e) && k3.call(e, "callee") && !A3.call(e, "callee");
}, Dp = M3, ao = {}, $3 = {
  get exports() {
    return ao;
  },
  set exports(e) {
    ao = e;
  }
};
function P3() {
  return !1;
}
var C3 = P3;
(function(e, t) {
  var n = hi, r = C3, a = t && !t.nodeType && t, s = a && !0 && e && !e.nodeType && e, l = s && s.exports === a, u = l ? n.Buffer : void 0, f = u ? u.isBuffer : void 0, h = f || r;
  e.exports = h;
})($3, ao);
var I3 = 9007199254740991;
function N3(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= I3;
}
var Sp = N3, L3 = pi, R3 = Sp, F3 = Gr, Y3 = "[object Arguments]", W3 = "[object Array]", U3 = "[object Boolean]", V3 = "[object Date]", B3 = "[object Error]", H3 = "[object Function]", z3 = "[object Map]", j3 = "[object Number]", G3 = "[object Object]", q3 = "[object RegExp]", K3 = "[object Set]", Z3 = "[object String]", X3 = "[object WeakMap]", J3 = "[object ArrayBuffer]", Q3 = "[object DataView]", e6 = "[object Float32Array]", t6 = "[object Float64Array]", n6 = "[object Int8Array]", r6 = "[object Int16Array]", i6 = "[object Int32Array]", a6 = "[object Uint8Array]", s6 = "[object Uint8ClampedArray]", o6 = "[object Uint16Array]", l6 = "[object Uint32Array]", Ut = {};
Ut[e6] = Ut[t6] = Ut[n6] = Ut[r6] = Ut[i6] = Ut[a6] = Ut[s6] = Ut[o6] = Ut[l6] = !0;
Ut[Y3] = Ut[W3] = Ut[J3] = Ut[U3] = Ut[Q3] = Ut[V3] = Ut[B3] = Ut[H3] = Ut[z3] = Ut[j3] = Ut[G3] = Ut[q3] = Ut[K3] = Ut[Z3] = Ut[X3] = !1;
function u6(e) {
  return F3(e) && R3(e.length) && !!Ut[L3(e)];
}
var c6 = u6, f6 = c6, d6 = sb, iy = yl, ay = iy && iy.isTypedArray, h6 = ay ? d6(ay) : f6, xp = h6, p6 = w3, m6 = Dp, v6 = jr, g6 = ao, _6 = Ep, y6 = xp, b6 = Object.prototype, w6 = b6.hasOwnProperty;
function O6(e, t) {
  var n = v6(e), r = !n && m6(e), a = !n && !r && g6(e), s = !n && !r && !a && y6(e), l = n || r || a || s, u = l ? p6(e.length, String) : [], f = u.length;
  for (var h in e)
    (t || w6.call(e, h)) && !(l && // Safari 9 has enumerable `arguments.length` in strict mode.
    (h == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (h == "offset" || h == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (h == "buffer" || h == "byteLength" || h == "byteOffset") || // Skip index properties.
    _6(h, f))) && u.push(h);
  return u;
}
var mb = O6, E6 = Object.prototype;
function D6(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || E6;
  return e === n;
}
var Tp = D6;
function S6(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var vb = S6, x6 = vb, T6 = x6(Object.keys, Object), k6 = T6, A6 = Tp, M6 = k6, $6 = Object.prototype, P6 = $6.hasOwnProperty;
function C6(e) {
  if (!A6(e))
    return M6(e);
  var t = [];
  for (var n in Object(e))
    P6.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
var I6 = C6, N6 = fs, L6 = Sp;
function R6(e) {
  return e != null && L6(e.length) && !N6(e);
}
var $l = R6, F6 = mb, Y6 = I6, W6 = $l;
function U6(e) {
  return W6(e) ? F6(e) : Y6(e);
}
var kp = U6, V6 = hb, B6 = kp;
function H6(e, t) {
  return e && V6(e, t, B6);
}
var gb = H6, z6 = Vc;
function j6() {
  this.__data__ = new z6(), this.size = 0;
}
var G6 = j6;
function q6(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
var K6 = q6;
function Z6(e) {
  return this.__data__.get(e);
}
var X6 = Z6;
function J6(e) {
  return this.__data__.has(e);
}
var Q6 = J6, eW = Vc, tW = bp, nW = wp, rW = 200;
function iW(e, t) {
  var n = this.__data__;
  if (n instanceof eW) {
    var r = n.__data__;
    if (!tW || r.length < rW - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new nW(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
var aW = iW, sW = Vc, oW = G6, lW = K6, uW = X6, cW = Q6, fW = aW;
function wo(e) {
  var t = this.__data__ = new sW(e);
  this.size = t.size;
}
wo.prototype.clear = oW;
wo.prototype.delete = lW;
wo.prototype.get = uW;
wo.prototype.has = cW;
wo.prototype.set = fW;
var Ap = wo, dW = "__lodash_hash_undefined__";
function hW(e) {
  return this.__data__.set(e, dW), this;
}
var pW = hW;
function mW(e) {
  return this.__data__.has(e);
}
var vW = mW, gW = wp, _W = pW, yW = vW;
function ic(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new gW(); ++t < n; )
    this.add(e[t]);
}
ic.prototype.add = ic.prototype.push = _W;
ic.prototype.has = yW;
var bW = ic;
function wW(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
var _b = wW;
function OW(e, t) {
  return e.has(t);
}
var EW = OW, DW = bW, SW = _b, xW = EW, TW = 1, kW = 2;
function AW(e, t, n, r, a, s) {
  var l = n & TW, u = e.length, f = t.length;
  if (u != f && !(l && f > u))
    return !1;
  var h = s.get(e), d = s.get(t);
  if (h && d)
    return h == t && d == e;
  var m = -1, v = !0, g = n & kW ? new DW() : void 0;
  for (s.set(e, t), s.set(t, e); ++m < u; ) {
    var w = e[m], O = t[m];
    if (r)
      var D = l ? r(O, w, m, t, e, s) : r(w, O, m, e, t, s);
    if (D !== void 0) {
      if (D)
        continue;
      v = !1;
      break;
    }
    if (g) {
      if (!SW(t, function(b, x) {
        if (!xW(g, x) && (w === b || a(w, b, n, r, s)))
          return g.push(x);
      })) {
        v = !1;
        break;
      }
    } else if (!(w === O || a(w, O, n, r, s))) {
      v = !1;
      break;
    }
  }
  return s.delete(e), s.delete(t), v;
}
var yb = AW, MW = hi, $W = MW.Uint8Array, bb = $W;
function PW(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, a) {
    n[++t] = [a, r];
  }), n;
}
var CW = PW;
function IW(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var NW = IW, sy = Yc, oy = bb, LW = _o, RW = yb, FW = CW, YW = NW, WW = 1, UW = 2, VW = "[object Boolean]", BW = "[object Date]", HW = "[object Error]", zW = "[object Map]", jW = "[object Number]", GW = "[object RegExp]", qW = "[object Set]", KW = "[object String]", ZW = "[object Symbol]", XW = "[object ArrayBuffer]", JW = "[object DataView]", ly = sy ? sy.prototype : void 0, Pd = ly ? ly.valueOf : void 0;
function QW(e, t, n, r, a, s, l) {
  switch (n) {
    case JW:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case XW:
      return !(e.byteLength != t.byteLength || !s(new oy(e), new oy(t)));
    case VW:
    case BW:
    case jW:
      return LW(+e, +t);
    case HW:
      return e.name == t.name && e.message == t.message;
    case GW:
    case KW:
      return e == t + "";
    case zW:
      var u = FW;
    case qW:
      var f = r & WW;
      if (u || (u = YW), e.size != t.size && !f)
        return !1;
      var h = l.get(e);
      if (h)
        return h == t;
      r |= UW, l.set(e, t);
      var d = RW(u(e), u(t), r, a, s, l);
      return l.delete(e), d;
    case ZW:
      if (Pd)
        return Pd.call(e) == Pd.call(t);
  }
  return !1;
}
var eU = QW;
function tU(e, t) {
  for (var n = -1, r = t.length, a = e.length; ++n < r; )
    e[a + n] = t[n];
  return e;
}
var nU = tU, rU = nU, iU = jr;
function aU(e, t, n) {
  var r = t(e);
  return iU(e) ? r : rU(r, n(e));
}
var sU = aU;
function oU(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, a = 0, s = []; ++n < r; ) {
    var l = e[n];
    t(l, n, e) && (s[a++] = l);
  }
  return s;
}
var lU = oU;
function uU() {
  return [];
}
var cU = uU, fU = lU, dU = cU, hU = Object.prototype, pU = hU.propertyIsEnumerable, uy = Object.getOwnPropertySymbols, mU = uy ? function(e) {
  return e == null ? [] : (e = Object(e), fU(uy(e), function(t) {
    return pU.call(e, t);
  }));
} : dU, vU = mU, gU = sU, _U = vU, yU = kp;
function bU(e) {
  return gU(e, yU, _U);
}
var wU = bU, cy = wU, OU = 1, EU = Object.prototype, DU = EU.hasOwnProperty;
function SU(e, t, n, r, a, s) {
  var l = n & OU, u = cy(e), f = u.length, h = cy(t), d = h.length;
  if (f != d && !l)
    return !1;
  for (var m = f; m--; ) {
    var v = u[m];
    if (!(l ? v in t : DU.call(t, v)))
      return !1;
  }
  var g = s.get(e), w = s.get(t);
  if (g && w)
    return g == t && w == e;
  var O = !0;
  s.set(e, t), s.set(t, e);
  for (var D = l; ++m < f; ) {
    v = u[m];
    var b = e[v], x = t[v];
    if (r)
      var k = l ? r(x, b, v, t, e, s) : r(b, x, v, e, t, s);
    if (!(k === void 0 ? b === x || a(b, x, n, r, s) : k)) {
      O = !1;
      break;
    }
    D || (D = v == "constructor");
  }
  if (O && !D) {
    var E = e.constructor, P = t.constructor;
    E != P && "constructor" in e && "constructor" in t && !(typeof E == "function" && E instanceof E && typeof P == "function" && P instanceof P) && (O = !1);
  }
  return s.delete(e), s.delete(t), O;
}
var xU = SU, TU = ds, kU = hi, AU = TU(kU, "DataView"), MU = AU, $U = ds, PU = hi, CU = $U(PU, "Promise"), IU = CU, NU = ds, LU = hi, RU = NU(LU, "Set"), FU = RU, YU = ds, WU = hi, UU = YU(WU, "WeakMap"), VU = UU, mh = MU, vh = bp, gh = IU, _h = FU, yh = VU, wb = pi, Oo = ob, fy = "[object Map]", BU = "[object Object]", dy = "[object Promise]", hy = "[object Set]", py = "[object WeakMap]", my = "[object DataView]", HU = Oo(mh), zU = Oo(vh), jU = Oo(gh), GU = Oo(_h), qU = Oo(yh), ja = wb;
(mh && ja(new mh(new ArrayBuffer(1))) != my || vh && ja(new vh()) != fy || gh && ja(gh.resolve()) != dy || _h && ja(new _h()) != hy || yh && ja(new yh()) != py) && (ja = function(e) {
  var t = wb(e), n = t == BU ? e.constructor : void 0, r = n ? Oo(n) : "";
  if (r)
    switch (r) {
      case HU:
        return my;
      case zU:
        return fy;
      case jU:
        return dy;
      case GU:
        return hy;
      case qU:
        return py;
    }
  return t;
});
var KU = ja, Cd = Ap, ZU = yb, XU = eU, JU = xU, vy = KU, gy = jr, _y = ao, QU = xp, eV = 1, yy = "[object Arguments]", by = "[object Array]", Nu = "[object Object]", tV = Object.prototype, wy = tV.hasOwnProperty;
function nV(e, t, n, r, a, s) {
  var l = gy(e), u = gy(t), f = l ? by : vy(e), h = u ? by : vy(t);
  f = f == yy ? Nu : f, h = h == yy ? Nu : h;
  var d = f == Nu, m = h == Nu, v = f == h;
  if (v && _y(e)) {
    if (!_y(t))
      return !1;
    l = !0, d = !1;
  }
  if (v && !d)
    return s || (s = new Cd()), l || QU(e) ? ZU(e, t, n, r, a, s) : XU(e, t, f, n, r, a, s);
  if (!(n & eV)) {
    var g = d && wy.call(e, "__wrapped__"), w = m && wy.call(t, "__wrapped__");
    if (g || w) {
      var O = g ? e.value() : e, D = w ? t.value() : t;
      return s || (s = new Cd()), a(O, D, n, r, s);
    }
  }
  return v ? (s || (s = new Cd()), JU(e, t, n, r, a, s)) : !1;
}
var rV = nV, iV = rV, Oy = Gr;
function Ob(e, t, n, r, a) {
  return e === t ? !0 : e == null || t == null || !Oy(e) && !Oy(t) ? e !== e && t !== t : iV(e, t, n, r, Ob, a);
}
var Eb = Ob, aV = Ap, sV = Eb, oV = 1, lV = 2;
function uV(e, t, n, r) {
  var a = n.length, s = a, l = !r;
  if (e == null)
    return !s;
  for (e = Object(e); a--; ) {
    var u = n[a];
    if (l && u[2] ? u[1] !== e[u[0]] : !(u[0] in e))
      return !1;
  }
  for (; ++a < s; ) {
    u = n[a];
    var f = u[0], h = e[f], d = u[1];
    if (l && u[2]) {
      if (h === void 0 && !(f in e))
        return !1;
    } else {
      var m = new aV();
      if (r)
        var v = r(h, d, f, e, t, m);
      if (!(v === void 0 ? sV(d, h, oV | lV, r, m) : v))
        return !1;
    }
  }
  return !0;
}
var cV = uV, fV = Xi;
function dV(e) {
  return e === e && !fV(e);
}
var Db = dV, hV = Db, pV = kp;
function mV(e) {
  for (var t = pV(e), n = t.length; n--; ) {
    var r = t[n], a = e[r];
    t[n] = [r, a, hV(a)];
  }
  return t;
}
var vV = mV;
function gV(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
var Sb = gV, _V = cV, yV = vV, bV = Sb;
function wV(e) {
  var t = yV(e);
  return t.length == 1 && t[0][2] ? bV(t[0][0], t[0][1]) : function(n) {
    return n === e || _V(n, e, t);
  };
}
var OV = wV;
function EV(e, t) {
  return e != null && t in Object(e);
}
var DV = EV, SV = cb, xV = Dp, TV = jr, kV = Ep, AV = Sp, MV = Hc;
function $V(e, t, n) {
  t = SV(t, e);
  for (var r = -1, a = t.length, s = !1; ++r < a; ) {
    var l = MV(t[r]);
    if (!(s = e != null && n(e, l)))
      break;
    e = e[l];
  }
  return s || ++r != a ? s : (a = e == null ? 0 : e.length, !!a && AV(a) && kV(l, a) && (TV(e) || xV(e)));
}
var xb = $V, PV = DV, CV = xb;
function IV(e, t) {
  return e != null && CV(e, t, PV);
}
var NV = IV, LV = Eb, RV = Za, FV = NV, YV = yp, WV = Db, UV = Sb, VV = Hc, BV = 1, HV = 2;
function zV(e, t) {
  return YV(e) && WV(t) ? UV(VV(e), t) : function(n) {
    var r = RV(n, e);
    return r === void 0 && r === t ? FV(n, e) : LV(t, r, BV | HV);
  };
}
var jV = zV;
function GV(e) {
  return e;
}
var Mp = GV;
function qV(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var KV = qV, ZV = fb;
function XV(e) {
  return function(t) {
    return ZV(t, e);
  };
}
var JV = XV, QV = KV, eB = JV, tB = yp, nB = Hc;
function rB(e) {
  return tB(e) ? QV(nB(e)) : eB(e);
}
var iB = rB, aB = OV, sB = jV, oB = Mp, lB = jr, uB = iB;
function cB(e) {
  return typeof e == "function" ? e : e == null ? oB : typeof e == "object" ? lB(e) ? sB(e[0], e[1]) : aB(e) : uB(e);
}
var Tb = cB, fB = zc, dB = gb, hB = Tb;
function pB(e, t) {
  var n = {};
  return t = hB(t), dB(e, function(r, a, s) {
    fB(n, a, t(r, a, s));
  }), n;
}
var mB = pB;
function vB(e, t, n) {
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
var kb = vB, gB = kb, Ey = Math.max;
function _B(e, t, n) {
  return t = Ey(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, a = -1, s = Ey(r.length - t, 0), l = Array(s); ++a < s; )
      l[a] = r[t + a];
    a = -1;
    for (var u = Array(t + 1); ++a < t; )
      u[a] = r[a];
    return u[t] = n(l), gB(e, this, u);
  };
}
var yB = _B;
function bB(e) {
  return function() {
    return e;
  };
}
var wB = bB, OB = wB, Dy = db, EB = Mp, DB = Dy ? function(e, t) {
  return Dy(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: OB(t),
    writable: !0
  });
} : EB, SB = DB, xB = 800, TB = 16, kB = Date.now;
function AB(e) {
  var t = 0, n = 0;
  return function() {
    var r = kB(), a = TB - (r - n);
    if (n = r, a > 0) {
      if (++t >= xB)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var MB = AB, $B = SB, PB = MB, CB = PB($B), IB = CB, NB = Mp, LB = yB, RB = IB;
function FB(e, t) {
  return RB(LB(e, t, NB), e + "");
}
var $p = FB, YB = _o, WB = $l, UB = Ep, VB = Xi;
function BB(e, t, n) {
  if (!VB(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? WB(n) && UB(t, n.length) : r == "string" && t in n) ? YB(n[t], e) : !1;
}
var Pp = BB;
function HB(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var zB = HB, jB = Xi, GB = Tp, qB = zB, KB = Object.prototype, ZB = KB.hasOwnProperty;
function XB(e) {
  if (!jB(e))
    return qB(e);
  var t = GB(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !ZB.call(e, r)) || n.push(r);
  return n;
}
var JB = XB, QB = mb, eH = JB, tH = $l;
function nH(e) {
  return tH(e) ? QB(e, !0) : eH(e);
}
var Cp = nH, rH = $p, iH = _o, aH = Pp, sH = Cp, Ab = Object.prototype, oH = Ab.hasOwnProperty, lH = rH(function(e, t) {
  e = Object(e);
  var n = -1, r = t.length, a = r > 2 ? t[2] : void 0;
  for (a && aH(t[0], t[1], a) && (r = 1); ++n < r; )
    for (var s = t[n], l = sH(s), u = -1, f = l.length; ++u < f; ) {
      var h = l[u], d = e[h];
      (d === void 0 || iH(d, Ab[h]) && !oH.call(e, h)) && (e[h] = s[h]);
    }
  return e;
}), Sy = lH, uH = zc, cH = _o;
function fH(e, t, n) {
  (n !== void 0 && !cH(e[t], n) || n === void 0 && !(t in e)) && uH(e, t, n);
}
var Mb = fH, ac = {}, dH = {
  get exports() {
    return ac;
  },
  set exports(e) {
    ac = e;
  }
};
(function(e, t) {
  var n = hi, r = t && !t.nodeType && t, a = r && !0 && e && !e.nodeType && e, s = a && a.exports === r, l = s ? n.Buffer : void 0, u = l ? l.allocUnsafe : void 0;
  function f(h, d) {
    if (d)
      return h.slice();
    var m = h.length, v = u ? u(m) : new h.constructor(m);
    return h.copy(v), v;
  }
  e.exports = f;
})(dH, ac);
var xy = bb;
function hH(e) {
  var t = new e.constructor(e.byteLength);
  return new xy(t).set(new xy(e)), t;
}
var pH = hH, mH = pH;
function vH(e, t) {
  var n = t ? mH(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var gH = vH;
function _H(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
var yH = _H, bH = Xi, Ty = Object.create, wH = function() {
  function e() {
  }
  return function(t) {
    if (!bH(t))
      return {};
    if (Ty)
      return Ty(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}(), OH = wH, EH = vb, DH = EH(Object.getPrototypeOf, Object), $b = DH, SH = OH, xH = $b, TH = Tp;
function kH(e) {
  return typeof e.constructor == "function" && !TH(e) ? SH(xH(e)) : {};
}
var AH = kH, MH = $l, $H = Gr;
function PH(e) {
  return $H(e) && MH(e);
}
var CH = PH, IH = pi, NH = $b, LH = Gr, RH = "[object Object]", FH = Function.prototype, YH = Object.prototype, Pb = FH.toString, WH = YH.hasOwnProperty, UH = Pb.call(Object);
function VH(e) {
  if (!LH(e) || IH(e) != RH)
    return !1;
  var t = NH(e);
  if (t === null)
    return !0;
  var n = WH.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && Pb.call(n) == UH;
}
var BH = VH;
function HH(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
var Cb = HH, zH = d3, jH = zc;
function GH(e, t, n, r) {
  var a = !n;
  n || (n = {});
  for (var s = -1, l = t.length; ++s < l; ) {
    var u = t[s], f = r ? r(n[u], e[u], u, n, e) : void 0;
    f === void 0 && (f = e[u]), a ? jH(n, u, f) : zH(n, u, f);
  }
  return n;
}
var qH = GH, KH = qH, ZH = Cp;
function XH(e) {
  return KH(e, ZH(e));
}
var JH = XH, ky = Mb, QH = ac, e5 = gH, t5 = yH, n5 = AH, Ay = Dp, My = jr, r5 = CH, i5 = ao, a5 = fs, s5 = Xi, o5 = BH, l5 = xp, $y = Cb, u5 = JH;
function c5(e, t, n, r, a, s, l) {
  var u = $y(e, n), f = $y(t, n), h = l.get(f);
  if (h) {
    ky(e, n, h);
    return;
  }
  var d = s ? s(u, f, n + "", e, t, l) : void 0, m = d === void 0;
  if (m) {
    var v = My(f), g = !v && i5(f), w = !v && !g && l5(f);
    d = f, v || g || w ? My(u) ? d = u : r5(u) ? d = t5(u) : g ? (m = !1, d = QH(f, !0)) : w ? (m = !1, d = e5(f, !0)) : d = [] : o5(f) || Ay(f) ? (d = u, Ay(u) ? d = u5(u) : (!s5(u) || a5(u)) && (d = n5(f))) : m = !1;
  }
  m && (l.set(f, d), a(d, f, r, s, l), l.delete(f)), ky(e, n, d);
}
var f5 = c5, d5 = Ap, h5 = Mb, p5 = hb, m5 = f5, v5 = Xi, g5 = Cp, _5 = Cb;
function Ib(e, t, n, r, a) {
  e !== t && p5(t, function(s, l) {
    if (a || (a = new d5()), v5(s))
      m5(e, t, l, n, Ib, r, a);
    else {
      var u = r ? r(_5(e, l), s, l + "", e, t, a) : void 0;
      u === void 0 && (u = s), h5(e, l, u);
    }
  }, g5);
}
var Nb = Ib, y5 = Nb, Py = Xi;
function Lb(e, t, n, r, a, s) {
  return Py(e) && Py(t) && (s.set(t, e), y5(e, t, void 0, Lb, s), s.delete(t)), e;
}
var b5 = Lb, w5 = $p, O5 = Pp;
function E5(e) {
  return w5(function(t, n) {
    var r = -1, a = n.length, s = a > 1 ? n[a - 1] : void 0, l = a > 2 ? n[2] : void 0;
    for (s = e.length > 3 && typeof s == "function" ? (a--, s) : void 0, l && O5(n[0], n[1], l) && (s = a < 3 ? void 0 : s, a = 1), t = Object(t); ++r < a; ) {
      var u = n[r];
      u && e(t, u, r, s);
    }
    return t;
  });
}
var D5 = E5, S5 = Nb, x5 = D5, T5 = x5(function(e, t, n, r) {
  S5(e, t, n, r);
}), k5 = T5, A5 = kb, M5 = $p, $5 = b5, P5 = k5, C5 = M5(function(e) {
  return e.push(void 0, $5), A5(P5, void 0, e);
}), bl = C5, I5 = Object.prototype, N5 = I5.hasOwnProperty;
function L5(e, t) {
  return e != null && N5.call(e, t);
}
var R5 = L5, F5 = R5, Y5 = xb;
function W5(e, t) {
  return e != null && Y5(e, t, F5);
}
var Rb = W5, U5 = $l;
function V5(e, t) {
  return function(n, r) {
    if (n == null)
      return n;
    if (!U5(n))
      return e(n, r);
    for (var a = n.length, s = t ? a : -1, l = Object(n); (t ? s-- : ++s < a) && r(l[s], s, l) !== !1; )
      ;
    return n;
  };
}
var B5 = V5, H5 = gb, z5 = B5, j5 = z5(H5), G5 = j5;
function q5(e) {
  return e && e.length ? e[0] : void 0;
}
var Fb = q5;
function K5(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
var Ws = K5, Z5 = G5;
function X5(e, t) {
  var n;
  return Z5(e, function(r, a, s) {
    return n = t(r, a, s), !n;
  }), !!n;
}
var J5 = X5, Q5 = _b, ez = Tb, tz = J5, nz = jr, rz = Pp;
function iz(e, t, n) {
  var r = nz(e) ? Q5 : tz;
  return n && rz(e, t, n) && (t = void 0), r(e, ez(t));
}
var az = iz;
const sz = (e) => Object.prototype.toString.call(e).slice(8, -1), Hs = (e) => g8(e) && !isNaN(e.getTime()), ji = (e) => sz(e) === "Object", Ip = Rb, Cy = (e, t) => az(t, (n) => Rb(e, n)), Pt = (e, t, n = "0") => {
  for (e = e != null ? String(e) : "", t = t || 2; e.length < t; )
    e = `${n}${e}`;
  return e;
}, Dr = (e) => Array.isArray(e), Ni = (e) => Dr(e) && e.length > 0, sc = (e) => e == null ? e ?? null : document && ti(e) ? document.querySelector(e) : e.$el ?? e, ba = (e, t, n, r = void 0) => {
  e.removeEventListener(t, n, r);
}, wa = (e, t, n, r = void 0) => (e.addEventListener(t, n, r), () => ba(e, t, n, r)), Wu = (e, t) => !!e && !!t && (e === t || e.contains(t)), Lu = (e, t) => {
  (e.key === " " || e.key === "Enter") && (t(e), e.preventDefault());
}, Yb = (e, ...t) => {
  const n = {};
  let r;
  for (r in e)
    t.includes(r) || (n[r] = e[r]);
  return n;
}, Wb = (e, t) => {
  const n = {};
  return t.forEach((r) => {
    r in e && (n[r] = e[r]);
  }), n;
};
function oz(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
const oc = () => {
  function e() {
    return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
  }
  return `${e() + e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`;
}, lz = ["base", "start", "end", "startEnd"], uz = [
  "class",
  "wrapperClass",
  "contentClass",
  "style",
  "contentStyle",
  "color",
  "fillMode"
], cz = { base: {}, start: {}, end: {} };
function Np(e, t, n = cz) {
  let r = e, a = {};
  t === !0 || ti(t) ? (r = ti(t) ? t : r, a = { ...n }) : ji(t) && (Cy(t, lz) ? a = { ...t } : a = {
    base: { ...t },
    start: { ...t },
    end: { ...t }
  });
  const s = bl(
    a,
    { start: a.startEnd, end: a.startEnd },
    n
  );
  return Object.entries(s).forEach(([l, u]) => {
    let f = r;
    u === !0 || ti(u) ? (f = ti(u) ? u : f, s[l] = { color: f }) : ji(u) && (Cy(u, uz) ? s[l] = { ...u } : s[l] = {}), bl(s[l], { color: f });
  }), s;
}
class fz {
  constructor() {
    Ne(this, "type", "highlight");
  }
  normalizeConfig(t, n) {
    return Np(t, n, {
      base: { fillMode: "light" },
      start: { fillMode: "solid" },
      end: { fillMode: "solid" }
    });
  }
  prepareRender(t) {
    t.highlights = [], t.content || (t.content = []);
  }
  render({ data: t, onStart: n, onEnd: r }, a) {
    const { key: s, highlight: l } = t;
    if (!l)
      return;
    const { highlights: u } = a, { base: f, start: h, end: d } = l;
    n && r ? u.push({
      ...h,
      key: s,
      wrapperClass: `vc-day-layer vc-day-box-center-center vc-attr vc-${h.color}`,
      class: [`vc-highlight vc-highlight-bg-${h.fillMode}`, h.class],
      contentClass: [
        `vc-attr vc-highlight-content-${h.fillMode} vc-${h.color}`,
        h.contentClass
      ]
    }) : n ? (u.push({
      ...f,
      key: `${s}-base`,
      wrapperClass: `vc-day-layer vc-day-box-right-center vc-attr vc-${f.color}`,
      class: [
        `vc-highlight vc-highlight-base-start vc-highlight-bg-${f.fillMode}`,
        f.class
      ]
    }), u.push({
      ...h,
      key: s,
      wrapperClass: `vc-day-layer vc-day-box-center-center vc-attr vc-${h.color}`,
      class: [`vc-highlight vc-highlight-bg-${h.fillMode}`, h.class],
      contentClass: [
        `vc-attr vc-highlight-content-${h.fillMode} vc-${h.color}`,
        h.contentClass
      ]
    })) : r ? (u.push({
      ...f,
      key: `${s}-base`,
      wrapperClass: `vc-day-layer vc-day-box-left-center vc-attr vc-${f.color}`,
      class: [
        `vc-highlight vc-highlight-base-end vc-highlight-bg-${f.fillMode}`,
        f.class
      ]
    }), u.push({
      ...d,
      key: s,
      wrapperClass: `vc-day-layer vc-day-box-center-center vc-attr vc-${d.color}`,
      class: [`vc-highlight vc-highlight-bg-${d.fillMode}`, d.class],
      contentClass: [
        `vc-attr vc-highlight-content-${d.fillMode} vc-${d.color}`,
        d.contentClass
      ]
    })) : u.push({
      ...f,
      key: `${s}-middle`,
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
class Lp {
  constructor(t, n) {
    Ne(this, "type", ""), Ne(this, "collectionType", ""), this.type = t, this.collectionType = n;
  }
  normalizeConfig(t, n) {
    return Np(t, n);
  }
  prepareRender(t) {
    t[this.collectionType] = [];
  }
  render({ data: t, onStart: n, onEnd: r }, a) {
    const { key: s } = t, l = t[this.type];
    if (!s || !l)
      return;
    const u = a[this.collectionType], { base: f, start: h, end: d } = l;
    n ? u.push({
      ...h,
      key: s,
      class: [
        `vc-${this.type} vc-${this.type}-start vc-${h.color} vc-attr`,
        h.class
      ]
    }) : r ? u.push({
      ...d,
      key: s,
      class: [
        `vc-${this.type} vc-${this.type}-end vc-${d.color} vc-attr`,
        d.class
      ]
    }) : u.push({
      ...f,
      key: s,
      class: [
        `vc-${this.type} vc-${this.type}-base vc-${f.color} vc-attr`,
        f.class
      ]
    });
  }
}
class dz extends Lp {
  constructor() {
    super("content", "content");
  }
  normalizeConfig(t, n) {
    return Np("base", n);
  }
}
class hz extends Lp {
  constructor() {
    super("dot", "dots");
  }
}
class pz extends Lp {
  constructor() {
    super("bar", "bars");
  }
}
class mz {
  constructor(t) {
    Ne(this, "color"), Ne(this, "renderers", [
      new dz(),
      new fz(),
      new hz(),
      new pz()
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
const vz = 300, gz = 60, _z = 80, yz = {
  maxSwipeTime: vz,
  minHorizontalSwipeDistance: gz,
  maxVerticalSwipeDistance: _z
}, bz = "MMMM YYYY", wz = "W", Oz = "MMM", Ez = "h A", Dz = [
  "L",
  "YYYY-MM-DD",
  "YYYY/MM/DD"
], Sz = [
  "L h:mm A",
  "YYYY-MM-DD h:mm A",
  "YYYY/MM/DD h:mm A"
], xz = [
  "L HH:mm",
  "YYYY-MM-DD HH:mm",
  "YYYY/MM/DD HH:mm"
], Tz = [
  "h:mm A"
], kz = [
  "HH:mm"
], Az = "WWW, MMM D, YYYY", Mz = [
  "L",
  "YYYY-MM-DD",
  "YYYY/MM/DD"
], $z = "iso", Pz = "YYYY-MM-DDTHH:mm:ss.SSSZ", Cz = {
  title: bz,
  weekdays: wz,
  navMonths: Oz,
  hours: Ez,
  input: Dz,
  inputDateTime: Sz,
  inputDateTime24hr: xz,
  inputTime: Tz,
  inputTime24hr: kz,
  dayPopover: Az,
  data: Mz,
  model: $z,
  iso: Pz
}, Gi = {
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
Gi.en = Gi["en-US"];
Gi.es = Gi["es-ES"];
Gi.no = Gi.nb;
Gi.zh = Gi["zh-CN"];
const Iz = Object.entries(Gi).reduce(
  (e, [t, { dow: n, L: r }]) => (e[t] = {
    id: t,
    firstDayOfWeek: n,
    masks: { L: r }
  }, e),
  {}
), Nz = {
  componentPrefix: "V",
  color: "blue",
  isDark: !1,
  navVisibility: "click",
  titlePosition: "center",
  transition: "slide-h",
  touch: yz,
  masks: Cz,
  locales: Iz,
  datePicker: {
    updateOnInput: !0,
    inputDebounce: 1e3,
    popover: {
      visibility: "hover-focus",
      placement: "bottom-start",
      isInteractive: !0
    }
  }
}, bh = xl(Nz), Lz = W(() => mB(bh.locales, (e) => (e.masks = bl(e.masks, bh.masks), e))), $a = (e) => typeof window < "u" && Ip(window.__vcalendar__, e) ? Za(window.__vcalendar__, e) : Za(bh, e);
var lc = {}, Rz = {
  get exports() {
    return lc;
  },
  set exports(e) {
    lc = e;
  }
}, uc = {}, Fz = {
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
  function n(r) {
    if (r === null || r === !0 || r === !1)
      return NaN;
    var a = Number(r);
    return isNaN(a) ? a : a < 0 ? Math.ceil(a) : Math.floor(a);
  }
  e.exports = t.default;
})(Fz, uc);
var cc = {}, Yz = {
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
  }), t.default = n;
  function n(r) {
    var a = new Date(Date.UTC(r.getFullYear(), r.getMonth(), r.getDate(), r.getHours(), r.getMinutes(), r.getSeconds(), r.getMilliseconds()));
    return a.setUTCFullYear(r.getFullYear()), r.getTime() - a.getTime();
  }
  e.exports = t.default;
})(Yz, cc);
var fc = {}, Wz = {
  get exports() {
    return fc;
  },
  set exports(e) {
    fc = e;
  }
}, dc = {}, Uz = {
  get exports() {
    return dc;
  },
  set exports(e) {
    dc = e;
  }
};
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  function n(f, h) {
    var d = u(h);
    return d.formatToParts ? a(d, f) : s(d, f);
  }
  var r = {
    year: 0,
    month: 1,
    day: 2,
    hour: 3,
    minute: 4,
    second: 5
  };
  function a(f, h) {
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
  function s(f, h) {
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
})(Uz, dc);
var hc = {}, Vz = {
  get exports() {
    return hc;
  },
  set exports(e) {
    hc = e;
  }
};
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  function n(r, a, s, l, u, f, h) {
    var d = /* @__PURE__ */ new Date(0);
    return d.setUTCFullYear(r, a, s), d.setUTCHours(l, u, f, h), d;
  }
  e.exports = t.default;
})(Vz, hc);
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = f;
  var n = a(dc), r = a(hc);
  function a(O) {
    return O && O.__esModule ? O : { default: O };
  }
  var s = 36e5, l = 6e4, u = {
    timezone: /([Z+-].*)$/,
    timezoneZ: /^(Z)$/,
    timezoneHH: /^([+-]\d{2})$/,
    timezoneHHMM: /^([+-]\d{2}):?(\d{2})$/
  };
  function f(O, D, b) {
    var x, k;
    if (!O || (x = u.timezoneZ.exec(O), x))
      return 0;
    var E;
    if (x = u.timezoneHH.exec(O), x)
      return E = parseInt(x[1], 10), v(E) ? -(E * s) : NaN;
    if (x = u.timezoneHHMM.exec(O), x) {
      E = parseInt(x[1], 10);
      var P = parseInt(x[2], 10);
      return v(E, P) ? (k = Math.abs(E) * s + P * l, E > 0 ? -k : k) : NaN;
    }
    if (w(O)) {
      D = new Date(D || Date.now());
      var M = b ? D : h(D), N = d(M, O), L = b ? N : m(D, N, O);
      return -L;
    }
    return NaN;
  }
  function h(O) {
    return (0, r.default)(O.getFullYear(), O.getMonth(), O.getDate(), O.getHours(), O.getMinutes(), O.getSeconds(), O.getMilliseconds());
  }
  function d(O, D) {
    var b = (0, n.default)(O, D), x = (0, r.default)(b[0], b[1] - 1, b[2], b[3] % 24, b[4], b[5], 0).getTime(), k = O.getTime(), E = k % 1e3;
    return k -= E >= 0 ? E : 1e3 + E, x - k;
  }
  function m(O, D, b) {
    var x = O.getTime(), k = x - D, E = d(new Date(k), b);
    if (D === E)
      return D;
    k -= E - D;
    var P = d(new Date(k), b);
    return E === P ? E : Math.max(E, P);
  }
  function v(O, D) {
    return -23 <= O && O <= 23 && (D == null || 0 <= D && D <= 59);
  }
  var g = {};
  function w(O) {
    if (g[O])
      return !0;
    try {
      return new Intl.DateTimeFormat(void 0, {
        timeZone: O
      }), g[O] = !0, !0;
    } catch {
      return !1;
    }
  }
  e.exports = t.default;
})(Wz, fc);
var pc = {}, Bz = {
  get exports() {
    return pc;
  },
  set exports(e) {
    pc = e;
  }
};
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = void 0;
  var n = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/, r = n;
  t.default = r, e.exports = t.default;
})(Bz, pc);
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = m;
  var n = l(uc), r = l(cc), a = l(fc), s = l(pc);
  function l(L) {
    return L && L.__esModule ? L : { default: L };
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
    timeZone: s.default
  };
  function m(L, H) {
    if (arguments.length < 1)
      throw new TypeError("1 argument required, but only " + arguments.length + " present");
    if (L === null)
      return /* @__PURE__ */ new Date(NaN);
    var $ = H || {}, q = $.additionalDigits == null ? h : (0, n.default)($.additionalDigits);
    if (q !== 2 && q !== 1 && q !== 0)
      throw new RangeError("additionalDigits must be 0, 1 or 2");
    if (L instanceof Date || typeof L == "object" && Object.prototype.toString.call(L) === "[object Date]")
      return new Date(L.getTime());
    if (typeof L == "number" || Object.prototype.toString.call(L) === "[object Number]")
      return new Date(L);
    if (!(typeof L == "string" || Object.prototype.toString.call(L) === "[object String]"))
      return /* @__PURE__ */ new Date(NaN);
    var Y = v(L), J = g(Y.date, q), me = J.year, le = J.restDateString, pe = w(le, me);
    if (isNaN(pe))
      return /* @__PURE__ */ new Date(NaN);
    if (pe) {
      var Oe = pe.getTime(), Ve = 0, Fe;
      if (Y.time && (Ve = O(Y.time), isNaN(Ve)))
        return /* @__PURE__ */ new Date(NaN);
      if (Y.timeZone || $.timeZone) {
        if (Fe = (0, a.default)(Y.timeZone || $.timeZone, new Date(Oe + Ve)), isNaN(Fe))
          return /* @__PURE__ */ new Date(NaN);
      } else
        Fe = (0, r.default)(new Date(Oe + Ve)), Fe = (0, r.default)(new Date(Oe + Ve + Fe));
      return new Date(Oe + Ve + Fe);
    } else
      return /* @__PURE__ */ new Date(NaN);
  }
  function v(L) {
    var H = {}, $ = d.dateTimePattern.exec(L), q;
    if ($ ? (H.date = $[1], q = $[3]) : ($ = d.datePattern.exec(L), $ ? (H.date = $[1], q = $[2]) : (H.date = null, q = L)), q) {
      var Y = d.timeZone.exec(q);
      Y ? (H.time = q.replace(Y[1], ""), H.timeZone = Y[1].trim()) : H.time = q;
    }
    return H;
  }
  function g(L, H) {
    var $ = d.YYY[H], q = d.YYYYY[H], Y;
    if (Y = d.YYYY.exec(L) || q.exec(L), Y) {
      var J = Y[1];
      return {
        year: parseInt(J, 10),
        restDateString: L.slice(J.length)
      };
    }
    if (Y = d.YY.exec(L) || $.exec(L), Y) {
      var me = Y[1];
      return {
        year: parseInt(me, 10) * 100,
        restDateString: L.slice(me.length)
      };
    }
    return {
      year: null
    };
  }
  function w(L, H) {
    if (H === null)
      return null;
    var $, q, Y, J;
    if (L.length === 0)
      return q = /* @__PURE__ */ new Date(0), q.setUTCFullYear(H), q;
    if ($ = d.MM.exec(L), $)
      return q = /* @__PURE__ */ new Date(0), Y = parseInt($[1], 10) - 1, E(H, Y) ? (q.setUTCFullYear(H, Y), q) : /* @__PURE__ */ new Date(NaN);
    if ($ = d.DDD.exec(L), $) {
      q = /* @__PURE__ */ new Date(0);
      var me = parseInt($[1], 10);
      return P(H, me) ? (q.setUTCFullYear(H, 0, me), q) : /* @__PURE__ */ new Date(NaN);
    }
    if ($ = d.MMDD.exec(L), $) {
      q = /* @__PURE__ */ new Date(0), Y = parseInt($[1], 10) - 1;
      var le = parseInt($[2], 10);
      return E(H, Y, le) ? (q.setUTCFullYear(H, Y, le), q) : /* @__PURE__ */ new Date(NaN);
    }
    if ($ = d.Www.exec(L), $)
      return J = parseInt($[1], 10) - 1, M(H, J) ? D(H, J) : /* @__PURE__ */ new Date(NaN);
    if ($ = d.WwwD.exec(L), $) {
      J = parseInt($[1], 10) - 1;
      var pe = parseInt($[2], 10) - 1;
      return M(H, J, pe) ? D(H, J, pe) : /* @__PURE__ */ new Date(NaN);
    }
    return null;
  }
  function O(L) {
    var H, $, q;
    if (H = d.HH.exec(L), H)
      return $ = parseFloat(H[1].replace(",", ".")), N($) ? $ % 24 * u : NaN;
    if (H = d.HHMM.exec(L), H)
      return $ = parseInt(H[1], 10), q = parseFloat(H[2].replace(",", ".")), N($, q) ? $ % 24 * u + q * f : NaN;
    if (H = d.HHMMSS.exec(L), H) {
      $ = parseInt(H[1], 10), q = parseInt(H[2], 10);
      var Y = parseFloat(H[3].replace(",", "."));
      return N($, q, Y) ? $ % 24 * u + q * f + Y * 1e3 : NaN;
    }
    return null;
  }
  function D(L, H, $) {
    H = H || 0, $ = $ || 0;
    var q = /* @__PURE__ */ new Date(0);
    q.setUTCFullYear(L, 0, 4);
    var Y = q.getUTCDay() || 7, J = H * 7 + $ + 1 - Y;
    return q.setUTCDate(q.getUTCDate() + J), q;
  }
  var b = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], x = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function k(L) {
    return L % 400 === 0 || L % 4 === 0 && L % 100 !== 0;
  }
  function E(L, H, $) {
    if (H < 0 || H > 11)
      return !1;
    if ($ != null) {
      if ($ < 1)
        return !1;
      var q = k(L);
      if (q && $ > x[H] || !q && $ > b[H])
        return !1;
    }
    return !0;
  }
  function P(L, H) {
    if (H < 1)
      return !1;
    var $ = k(L);
    return !($ && H > 366 || !$ && H > 365);
  }
  function M(L, H, $) {
    return !(H < 0 || H > 52 || $ != null && ($ < 0 || $ > 6));
  }
  function N(L, H, $) {
    return !(L != null && (L < 0 || L >= 25) || H != null && (H < 0 || H >= 60) || $ != null && ($ < 0 || $ >= 60));
  }
  e.exports = t.default;
})(Rz, lc);
const Hz = /* @__PURE__ */ gF(lc);
function Sn(e, t) {
  if (t.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present");
}
function Uu(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Uu = function(n) {
    return typeof n;
  } : Uu = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Uu(e);
}
function Ji(e) {
  Sn(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || Uu(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), /* @__PURE__ */ new Date(NaN));
}
function Eo(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
var zz = {};
function Rp() {
  return zz;
}
function ls(e, t) {
  var n, r, a, s, l, u, f, h;
  Sn(1, arguments);
  var d = Rp(), m = Eo((n = (r = (a = (s = t == null ? void 0 : t.weekStartsOn) !== null && s !== void 0 ? s : t == null || (l = t.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && a !== void 0 ? a : d.weekStartsOn) !== null && r !== void 0 ? r : (f = d.locale) === null || f === void 0 || (h = f.options) === null || h === void 0 ? void 0 : h.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(m >= 0 && m <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var v = Ji(e), g = v.getDay(), w = (g < m ? 7 : 0) + g - m;
  return v.setDate(v.getDate() - w), v.setHours(0, 0, 0, 0), v;
}
function Iy(e) {
  var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
var jz = 6048e5;
function Gz(e, t, n) {
  Sn(2, arguments);
  var r = ls(e, n), a = ls(t, n), s = r.getTime() - Iy(r), l = a.getTime() - Iy(a);
  return Math.round((s - l) / jz);
}
function qz(e) {
  Sn(1, arguments);
  var t = Ji(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function Kz(e) {
  Sn(1, arguments);
  var t = Ji(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function Zz(e, t) {
  return Sn(1, arguments), Gz(qz(e), Kz(e), t) + 1;
}
function Xz(e, t) {
  var n, r, a, s, l, u, f, h;
  Sn(1, arguments);
  var d = Ji(e), m = d.getFullYear(), v = Rp(), g = Eo((n = (r = (a = (s = t == null ? void 0 : t.firstWeekContainsDate) !== null && s !== void 0 ? s : t == null || (l = t.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && a !== void 0 ? a : v.firstWeekContainsDate) !== null && r !== void 0 ? r : (f = v.locale) === null || f === void 0 || (h = f.options) === null || h === void 0 ? void 0 : h.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(g >= 1 && g <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var w = /* @__PURE__ */ new Date(0);
  w.setFullYear(m + 1, 0, g), w.setHours(0, 0, 0, 0);
  var O = ls(w, t), D = /* @__PURE__ */ new Date(0);
  D.setFullYear(m, 0, g), D.setHours(0, 0, 0, 0);
  var b = ls(D, t);
  return d.getTime() >= O.getTime() ? m + 1 : d.getTime() >= b.getTime() ? m : m - 1;
}
function Jz(e, t) {
  var n, r, a, s, l, u, f, h;
  Sn(1, arguments);
  var d = Rp(), m = Eo((n = (r = (a = (s = t == null ? void 0 : t.firstWeekContainsDate) !== null && s !== void 0 ? s : t == null || (l = t.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && a !== void 0 ? a : d.firstWeekContainsDate) !== null && r !== void 0 ? r : (f = d.locale) === null || f === void 0 || (h = f.options) === null || h === void 0 ? void 0 : h.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), v = Xz(e, t), g = /* @__PURE__ */ new Date(0);
  g.setFullYear(v, 0, m), g.setHours(0, 0, 0, 0);
  var w = ls(g, t);
  return w;
}
var Qz = 6048e5;
function e9(e, t) {
  Sn(1, arguments);
  var n = Ji(e), r = ls(n, t).getTime() - Jz(n, t).getTime();
  return Math.round(r / Qz) + 1;
}
function mc(e) {
  return Sn(1, arguments), ls(e, {
    weekStartsOn: 1
  });
}
function t9(e) {
  Sn(1, arguments);
  var t = Ji(e), n = t.getFullYear(), r = /* @__PURE__ */ new Date(0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  var a = mc(r), s = /* @__PURE__ */ new Date(0);
  s.setFullYear(n, 0, 4), s.setHours(0, 0, 0, 0);
  var l = mc(s);
  return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= l.getTime() ? n : n - 1;
}
function n9(e) {
  Sn(1, arguments);
  var t = t9(e), n = /* @__PURE__ */ new Date(0);
  n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0);
  var r = mc(n);
  return r;
}
var r9 = 6048e5;
function i9(e) {
  Sn(1, arguments);
  var t = Ji(e), n = mc(t).getTime() - n9(t).getTime();
  return Math.round(n / r9) + 1;
}
function Nn(e, t) {
  Sn(2, arguments);
  var n = Ji(e), r = Eo(t);
  return isNaN(r) ? /* @__PURE__ */ new Date(NaN) : (r && n.setDate(n.getDate() + r), n);
}
function vc(e, t) {
  Sn(2, arguments);
  var n = Ji(e), r = Eo(t);
  if (isNaN(r))
    return /* @__PURE__ */ new Date(NaN);
  if (!r)
    return n;
  var a = n.getDate(), s = new Date(n.getTime());
  s.setMonth(n.getMonth() + r + 1, 0);
  var l = s.getDate();
  return a >= l ? s : (n.setFullYear(s.getFullYear(), s.getMonth(), a), n);
}
function Ny(e, t) {
  Sn(2, arguments);
  var n = Eo(t);
  return vc(e, n * 12);
}
var Rs = /* @__PURE__ */ ((e) => (e.Any = "any", e.All = "all", e))(Rs || {}), Ub = /* @__PURE__ */ ((e) => (e.Days = "days", e.Weeks = "weeks", e.Months = "months", e.Years = "years", e))(Ub || {}), Vb = /* @__PURE__ */ ((e) => (e.Days = "days", e.Weekdays = "weekdays", e.Weeks = "weeks", e.Months = "months", e.Years = "years", e))(Vb || {}), Bb = /* @__PURE__ */ ((e) => (e.OrdinalWeekdays = "ordinalWeekdays", e))(Bb || {});
class a9 {
  constructor(t, n, r) {
    Ne(this, "validated", !0), this.type = t, this.interval = n, this.from = r, this.from || (console.error(
      'A valid "from" date is required for date interval rule. This rule will be skipped.'
    ), this.validated = !1);
  }
  passes(t) {
    if (!this.validated)
      return !0;
    const { date: n } = t;
    switch (this.type) {
      case "days":
        return Fp(this.from.date, n) % this.interval === 0;
      case "weeks":
        return E9(this.from.date, n) % this.interval === 0;
      case "months":
        return D9(this.from.date, n) % this.interval === 0;
      case "years":
        return Xb(this.from.date, n) % this.interval === 0;
      default:
        return !1;
    }
  }
}
class Do {
  constructor(t, n, r, a) {
    Ne(this, "components", []), this.type = t, this.validator = r, this.getter = a, this.components = this.normalizeComponents(n);
  }
  static create(t, n) {
    switch (t) {
      case "days":
        return new s9(n);
      case "weekdays":
        return new o9(n);
      case "weeks":
        return new l9(n);
      case "months":
        return new u9(n);
      case "years":
        return new c9(n);
    }
  }
  normalizeComponents(t) {
    if (this.validator(t))
      return [t];
    if (!Dr(t))
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
    return this.getter(t).some((a) => this.components.includes(a));
  }
}
class s9 extends Do {
  constructor(t) {
    super(
      "days",
      t,
      h9,
      ({ day: n, dayFromEnd: r }) => [n, -r]
    );
  }
}
class o9 extends Do {
  constructor(t) {
    super(
      "weekdays",
      t,
      wh,
      ({ weekday: n }) => [n]
    );
  }
}
class l9 extends Do {
  constructor(t) {
    super(
      "weeks",
      t,
      p9,
      ({ week: n, weekFromEnd: r }) => [n, -r]
    );
  }
}
class u9 extends Do {
  constructor(t) {
    super("months", t, m9, ({ month: n }) => [
      n
    ]);
  }
}
class c9 extends Do {
  constructor(t) {
    super("years", t, Ur, ({ year: n }) => [n]);
  }
}
class f9 {
  constructor(t, n) {
    Ne(this, "components"), this.type = t, this.components = this.normalizeComponents(n);
  }
  normalizeArrayConfig(t) {
    const n = [];
    return t.forEach((r, a) => {
      if (Ur(r)) {
        if (a === 0)
          return;
        if (!Ly(t[0])) {
          console.error(
            `Ordinal range for "${this.type}" rule is from -5 to -1 or 1 to 5. This rule will be skipped.`
          );
          return;
        }
        if (!wh(r)) {
          console.error(
            `Acceptable range for "${this.type}" rule is from 1 to 5. This rule will be skipped`
          );
          return;
        }
        n.push([t[0], r]);
      } else
        Dr(r) && n.push(...this.normalizeArrayConfig(r));
    }), n;
  }
  normalizeComponents(t) {
    const n = [];
    return t.forEach((r, a) => {
      if (Ur(r)) {
        if (a === 0)
          return;
        if (!Ly(t[0])) {
          console.error(
            `Ordinal range for "${this.type}" rule is from -5 to -1 or 1 to 5. This rule will be skipped.`
          );
          return;
        }
        if (!wh(r)) {
          console.error(
            `Acceptable range for "${this.type}" rule is from 1 to 5. This rule will be skipped`
          );
          return;
        }
        n.push([t[0], r]);
      } else
        Dr(r) && n.push(...this.normalizeArrayConfig(r));
    }), n;
  }
  passes(t) {
    const { weekday: n, weekdayOrdinal: r, weekdayOrdinalFromEnd: a } = t;
    return this.components.some(
      ([s, l]) => (s === r || s === -a) && n === l
    );
  }
}
class d9 {
  constructor(t) {
    Ne(this, "type", "function"), Ne(this, "validated", !0), this.fn = t, fs(t) || (console.error(
      "The function rule requires a valid function. This rule will be skipped."
    ), this.validated = !1);
  }
  passes(t) {
    return this.validated ? this.fn(t) : !0;
  }
}
class gc {
  constructor(t, n = {}, r) {
    Ne(this, "validated", !0), Ne(this, "config"), Ne(this, "type", Rs.Any), Ne(this, "from"), Ne(this, "until"), Ne(this, "rules", []), Ne(this, "locale", new yc()), this.parent = r, n.locale && (this.locale = n.locale), this.config = t, fs(t) ? (this.type = Rs.All, this.rules = [new d9(t)]) : Dr(t) ? (this.type = Rs.Any, this.rules = t.map((a) => new gc(a, n, this))) : ji(t) ? (this.type = Rs.All, this.from = t.from ? this.locale.getDateParts(t.from) : r == null ? void 0 : r.from, this.until = t.until ? this.locale.getDateParts(t.until) : r == null ? void 0 : r.until, this.rules = this.getObjectRules(t)) : (console.error("Rule group configuration must be an object or an array."), this.validated = !1);
  }
  getObjectRules(t) {
    const n = [];
    if (t.every && (ti(t.every) && (t.every = [1, `${t.every}s`]), Dr(t.every))) {
      const [r = 1, a = Ub.Days] = t.every;
      n.push(new a9(a, r, this.from));
    }
    return Object.values(Vb).forEach((r) => {
      r in t && n.push(Do.create(r, t[r]));
    }), Object.values(Bb).forEach((r) => {
      r in t && n.push(new f9(r, t[r]));
    }), t.on != null && (Dr(t.on) || (t.on = [t.on]), n.push(
      new gc(t.on, { locale: this.locale }, this.parent)
    )), n;
  }
  passes(t) {
    return this.validated ? this.from && t.dayIndex <= this.from.dayIndex || this.until && t.dayIndex >= this.until.dayIndex ? !1 : this.type === Rs.Any ? this.rules.some((n) => n.passes(t)) : this.rules.every((n) => n.passes(t)) : !0;
  }
}
function h9(e) {
  return Ur(e) ? e >= 1 && e <= 31 : !1;
}
function wh(e) {
  return Ur(e) ? e >= 1 && e <= 7 : !1;
}
function p9(e) {
  return Ur(e) ? e >= -6 && e <= -1 || e >= 1 && e <= 6 : !1;
}
function m9(e) {
  return Ur(e) ? e >= 1 && e <= 12 : !1;
}
function Ly(e) {
  return !(!Ur(e) || e < -5 || e > 5 || e === 0);
}
const v9 = {
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
}, On = 7, g9 = 6, Hb = 1e3, zb = Hb * 60, jb = zb * 60, Vu = jb * 24, _9 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], y9 = ["L", "iso"], nl = {
  milliseconds: [0, 999, 3],
  seconds: [0, 59, 2],
  minutes: [0, 59, 2],
  hours: [0, 23, 2]
}, Gb = /d{1,2}|W{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|Z{1,4}|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g, b9 = /\[([^]*?)\]/gm, Ry = {
  D(e) {
    return e.day;
  },
  DD(e) {
    return Pt(e.day, 2);
  },
  // Do(d: DateParts, l: Locale) {
  //   return l.DoFn(d.day);
  // },
  d(e) {
    return e.weekday - 1;
  },
  dd(e) {
    return Pt(e.weekday - 1, 2);
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
    return Pt(e.month, 2);
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
    return Pt(e.year, 4);
  },
  h(e) {
    return e.hours % 12 || 12;
  },
  hh(e) {
    return Pt(e.hours % 12 || 12, 2);
  },
  H(e) {
    return e.hours;
  },
  HH(e) {
    return Pt(e.hours, 2);
  },
  m(e) {
    return e.minutes;
  },
  mm(e) {
    return Pt(e.minutes, 2);
  },
  s(e) {
    return e.seconds;
  },
  ss(e) {
    return Pt(e.seconds, 2);
  },
  S(e) {
    return Math.round(e.milliseconds / 100);
  },
  SS(e) {
    return Pt(Math.round(e.milliseconds / 10), 2);
  },
  SSS(e) {
    return Pt(e.milliseconds, 3);
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
    return `${t > 0 ? "-" : "+"}${Pt(Math.floor(Math.abs(t) / 60), 2)}`;
  },
  ZZZ(e) {
    const t = e.timezoneOffset;
    return `${t > 0 ? "-" : "+"}${Pt(
      Math.floor(Math.abs(t) / 60) * 100 + Math.abs(t) % 60,
      4
    )}`;
  },
  ZZZZ(e) {
    const t = e.timezoneOffset;
    return `${t > 0 ? "-" : "+"}${Pt(Math.floor(Math.abs(t) / 60), 2)}:${Pt(
      Math.abs(t) % 60,
      2
    )}`;
  }
}, ga = /\d\d?/, w9 = /\d{3}/, O9 = /\d{4}/, Zo = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF/]+(\s*?[\u0600-\u06FF]+){1,2}/i, Fy = () => {
}, Yy = (e) => (t, n, r) => {
  const a = r[e].indexOf(
    n.charAt(0).toUpperCase() + n.substr(1).toLowerCase()
  );
  ~a && (t.month = a);
}, Nt = {
  D: [
    ga,
    (e, t) => {
      e.day = t;
    }
  ],
  Do: [
    new RegExp(ga.source + Zo.source),
    (e, t) => {
      e.day = parseInt(t, 10);
    }
  ],
  d: [ga, Fy],
  W: [Zo, Fy],
  M: [
    ga,
    (e, t) => {
      e.month = t - 1;
    }
  ],
  MMM: [Zo, Yy("monthNamesShort")],
  MMMM: [Zo, Yy("monthNames")],
  YY: [
    ga,
    (e, t) => {
      const r = +(/* @__PURE__ */ new Date()).getFullYear().toString().substr(0, 2);
      e.year = +`${t > 68 ? r - 1 : r}${t}`;
    }
  ],
  YYYY: [
    O9,
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
    w9,
    (e, t) => {
      e.milliseconds = t;
    }
  ],
  h: [
    ga,
    (e, t) => {
      e.hours = t;
    }
  ],
  m: [
    ga,
    (e, t) => {
      e.minutes = t;
    }
  ],
  s: [
    ga,
    (e, t) => {
      e.seconds = t;
    }
  ],
  a: [
    Zo,
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
Nt.DD = Nt.D;
Nt.dd = Nt.d;
Nt.WWWW = Nt.WWW = Nt.WW = Nt.W;
Nt.MM = Nt.M;
Nt.mm = Nt.m;
Nt.hh = Nt.H = Nt.HH = Nt.h;
Nt.ss = Nt.s;
Nt.A = Nt.a;
Nt.ZZZZ = Nt.ZZZ = Nt.ZZ = Nt.Z;
function qb(e, t) {
  return (Ni(e) && e || [
    ti(e) && e || "YYYY-MM-DD"
  ]).map(
    (n) => y9.reduce(
      (r, a) => r.replace(a, t.masks[a] || ""),
      n
    )
  );
}
function Kb(e) {
  return ji(e) && "year" in e && "month" in e && "day" in e;
}
function Wy(e, t = 1) {
  const n = e.getDay() + 1, r = n >= t ? t - n : -(7 - (t - n));
  return Nn(e, r);
}
function Zb(e, t, n) {
  const r = Date.UTC(e, t - 1, n);
  return Fp(/* @__PURE__ */ new Date(0), new Date(r));
}
function Fp(e, t) {
  return Math.round((t.getTime() - e.getTime()) / Vu);
}
function E9(e, t) {
  return Math.ceil(Fp(Wy(e), Wy(t)) / 7);
}
function Xb(e, t) {
  return t.getUTCFullYear() - e.getUTCFullYear();
}
function D9(e, t) {
  return Xb(e, t) * 12 + (t.getMonth() - e.getMonth());
}
function Jb(e, t = "") {
  const n = /* @__PURE__ */ new Date(), {
    year: r = n.getFullYear(),
    month: a = n.getMonth() + 1,
    day: s = n.getDate(),
    hours: l = 0,
    minutes: u = 0,
    seconds: f = 0,
    milliseconds: h = 0
  } = e;
  if (t) {
    const d = `${Pt(r, 4)}-${Pt(a, 2)}-${Pt(s, 2)}T${Pt(
      l,
      2
    )}:${Pt(u, 2)}:${Pt(f, 2)}.${Pt(h, 3)}`;
    return Hz(d, { timeZone: t });
  }
  return new Date(r, a - 1, s, l, u, f, h);
}
function S9(e, t) {
  let n = new Date(e.getTime());
  t.timezone && (n = new Date(
    e.toLocaleString("en-US", { timeZone: t.timezone })
  ), n.setMilliseconds(e.getMilliseconds()));
  const r = n.getMilliseconds(), a = n.getSeconds(), s = n.getMinutes(), l = n.getHours(), u = r + a * Hb + s * zb + l * jb, f = n.getMonth() + 1, h = n.getFullYear(), d = t.getMonthParts(f, h), m = n.getDate(), v = d.numDays - m + 1, g = n.getDay() + 1, w = Math.floor((m - 1) / 7 + 1), O = Math.floor((d.numDays - m) / 7 + 1), D = Math.ceil(
    (m + Math.abs(d.firstWeekday - d.firstDayOfWeek)) / 7
  ), b = d.numWeeks - D + 1, x = d.weeknumbers[D], k = Zb(h, f, m);
  return {
    milliseconds: r,
    seconds: a,
    minutes: s,
    hours: l,
    time: u,
    day: m,
    dayFromEnd: v,
    weekday: g,
    weekdayOrdinal: w,
    weekdayOrdinalFromEnd: O,
    week: D,
    weekFromEnd: b,
    weeknumber: x,
    month: f,
    year: h,
    date: n,
    dateTime: n.getTime(),
    dayIndex: k,
    timezoneOffset: 0,
    isValid: !0
  };
}
function x9(e, t, n) {
  return `${t}-${e}-${n}`;
}
function T9(e, t, n) {
  const r = t % 4 === 0 && t % 100 !== 0 || t % 400 === 0, a = new Date(t, e - 1, 1), s = a.getDay() + 1, l = e === 2 && r ? 29 : _9[e - 1], u = n - 1, f = Zz(a, {
    weekStartsOn: u
  }), h = [], d = [];
  for (let m = 0; m < f; m++) {
    const v = Nn(a, m * 7);
    h.push(e9(v, { weekStartsOn: u })), d.push(i9(v));
  }
  return {
    firstDayOfWeek: n,
    firstDayOfMonth: a,
    inLeapYear: r,
    firstWeekday: s,
    numDays: l,
    numWeeks: f,
    month: e,
    year: t,
    weeknumbers: h,
    isoWeeknumbers: d
  };
}
function k9() {
  const e = [];
  for (let a = 0; a < On; a++)
    e.push(
      Jb({
        year: 2020,
        month: 1,
        day: 5 + a,
        hours: 12
      })
    );
  return e;
}
function Id(e, t = void 0) {
  const n = new Intl.DateTimeFormat(t, {
    weekday: e
  });
  return k9().map((r) => n.format(r));
}
function A9() {
  const e = [];
  for (let t = 0; t <= 24; t++)
    e.push(new Date(2e3, 0, 1, t));
  return e;
}
function M9(e = void 0) {
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
  return t.reduce((r, a) => {
    const s = n.formatToParts(100, a);
    return r[a] = s[1].unit, r;
  }, {});
}
function Qb() {
  const e = [];
  for (let t = 0; t < 12; t++)
    e.push(new Date(2e3, t, 15));
  return e;
}
function Uy(e, t = void 0) {
  const n = new Intl.DateTimeFormat(t, {
    month: e,
    timeZone: "UTC"
  });
  return Qb().map((r) => n.format(r));
}
function $9(e, t, n) {
  return Ur(t) ? t === e : Dr(t) ? t.includes(e) : fs(t) ? t(e, n) : !(t.min != null && t.min > e || t.max != null && t.max < e || t.interval != null && e % t.interval !== 0);
}
function rl(e, t, n) {
  const r = [], [a, s, l] = t;
  for (let u = a; u <= s; u++)
    (n == null || $9(u, n, e)) && r.push({
      value: u,
      label: Pt(u, l)
    });
  return r;
}
function P9(e, t) {
  return {
    milliseconds: rl(
      e,
      nl.milliseconds,
      t.milliseconds
    ),
    seconds: rl(e, nl.seconds, t.seconds),
    minutes: rl(e, nl.minutes, t.minutes),
    hours: rl(e, nl.hours, t.hours)
  };
}
function C9(e, t, n, r) {
  const s = rl(e, t, r).reduce((l, u) => {
    if (u.disabled)
      return l;
    if (isNaN(l))
      return u.value;
    const f = Math.abs(l - n);
    return Math.abs(u.value - n) < f ? u.value : l;
  }, NaN);
  return isNaN(s) ? n : s;
}
function I9(e, t) {
  const n = { ...e };
  return Object.entries(t).forEach(([r, a]) => {
    const s = nl[r], l = e[r];
    n[r] = C9(
      e,
      s,
      l,
      a
    );
  }), n;
}
function Vy(e, t, n) {
  return qb(t, n).map((a) => {
    if (typeof a != "string")
      throw new Error("Invalid mask");
    let s = e;
    if (s.length > 1e3)
      return !1;
    let l = !0;
    const u = {};
    if (a.replace(Gb, (d) => {
      if (Nt[d]) {
        const m = Nt[d], v = s.search(m[0]);
        ~v ? s.replace(m[0], (g) => (m[1](u, g, n), s = s.substr(v + g.length), g)) : l = !1;
      }
      return Nt[d] ? "" : d.slice(1, d.length - 1);
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
  }).find((a) => a) || new Date(e);
}
function N9(e, t, n) {
  if (e == null)
    return "";
  let r = qb(t, n)[0];
  /Z$/.test(r) && (n.timezone = "utc");
  const a = [];
  r = r.replace(b9, (l, u) => (a.push(u), "??"));
  const s = n.getDateParts(e);
  return r = r.replace(
    Gb,
    (l) => l in Ry ? Ry[l](s, n) : l.slice(1, l.length - 1)
  ), r.replace(/\?\?/g, () => a.shift());
}
const L9 = {
  daily: ["year", "month", "day"],
  weekly: ["year", "month", "week"],
  monthly: ["year", "month"]
};
function R9({
  monthComps: e,
  prevMonthComps: t,
  nextMonthComps: n
}, r) {
  const a = [], {
    firstDayOfWeek: s,
    firstWeekday: l,
    isoWeeknumbers: u,
    weeknumbers: f,
    numDays: h,
    numWeeks: d
  } = e, m = l + (l < s ? On : 0) - s;
  let v = !0, g = !1, w = !1, O = 0;
  const D = new Intl.DateTimeFormat(r.id, {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric"
  });
  let b = t.numDays - m + 1, x = t.numDays - b + 1, k = Math.floor((b - 1) / On + 1), E = 1, P = t.numWeeks, M = 1, N = t.month, L = t.year;
  const H = /* @__PURE__ */ new Date(), $ = H.getDate(), q = H.getMonth() + 1, Y = H.getFullYear();
  for (let J = 1; J <= g9; J++) {
    for (let me = 1, le = s; me <= On; me++, le += le === On ? 1 - On : 1) {
      v && le === l && (b = 1, x = e.numDays, k = Math.floor((b - 1) / On + 1), E = Math.floor((h - b) / On + 1), P = 1, M = d, N = e.month, L = e.year, v = !1, g = !0);
      const pe = r.getDateFromParams(L, N, b, 0, 0, 0, 0), Oe = r.getDateFromParams(L, N, b, 12, 0, 0, 0), Ve = r.getDateFromParams(
        L,
        N,
        b,
        23,
        59,
        59,
        999
      ), Fe = pe, ie = `${Pt(L, 4)}-${Pt(N, 2)}-${Pt(b, 2)}`, Ae = me, vt = On - me, At = f[J - 1], Te = u[J - 1], it = b === $ && N === q && L === Y, Qe = g && b === 1, ve = g && b === h, ce = J === 1, _e = J === d, Ce = me === 1, te = me === On, Ee = Zb(L, N, b);
      a.push({
        locale: r,
        id: ie,
        position: ++O,
        label: b.toString(),
        ariaLabel: D.format(new Date(L, N - 1, b)),
        day: b,
        dayFromEnd: x,
        weekday: le,
        weekdayPosition: Ae,
        weekdayPositionFromEnd: vt,
        weekdayOrdinal: k,
        weekdayOrdinalFromEnd: E,
        week: P,
        weekFromEnd: M,
        weekPosition: J,
        weeknumber: At,
        isoWeeknumber: Te,
        month: N,
        year: L,
        date: Fe,
        startDate: pe,
        endDate: Ve,
        noonDate: Oe,
        dayIndex: Ee,
        isToday: it,
        isFirstDay: Qe,
        isLastDay: ve,
        isDisabled: !g,
        isFocusable: !g,
        isFocused: !1,
        inMonth: g,
        inPrevMonth: v,
        inNextMonth: w,
        onTop: ce,
        onBottom: _e,
        onLeft: Ce,
        onRight: te,
        classes: [
          `id-${ie}`,
          `day-${b}`,
          `day-from-end-${x}`,
          `weekday-${le}`,
          `weekday-position-${Ae}`,
          `weekday-ordinal-${k}`,
          `weekday-ordinal-from-end-${E}`,
          `week-${P}`,
          `week-from-end-${M}`,
          {
            "is-today": it,
            "is-first-day": Qe,
            "is-last-day": ve,
            "in-month": g,
            "in-prev-month": v,
            "in-next-month": w,
            "on-top": ce,
            "on-bottom": _e,
            "on-left": Ce,
            "on-right": te
          }
        ]
      }), g && ve ? (g = !1, w = !0, b = 1, x = h, k = 1, E = Math.floor((h - b) / On + 1), P = 1, M = n.numWeeks, N = n.month, L = n.year) : (b++, x--, k = Math.floor((b - 1) / On + 1), E = Math.floor((h - b) / On + 1));
    }
    P++, M--;
  }
  return a;
}
function F9(e, t, n, r) {
  const a = e.reduce((s, l, u) => {
    const f = Math.floor(u / 7);
    let h = s[f];
    return h || (h = {
      id: `week-${f + 1}`,
      title: "",
      week: l.week,
      weekPosition: l.weekPosition,
      weeknumber: l.weeknumber,
      isoWeeknumber: l.isoWeeknumber,
      weeknumberDisplay: t ? l.weeknumber : n ? l.isoWeeknumber : void 0,
      days: []
    }, s[f] = h), h.days.push(l), s;
  }, Array(e.length / On));
  return a.forEach((s) => {
    const l = s.days[0], u = s.days[s.days.length - 1];
    l.month === u.month ? s.title = `${r.formatDate(l.date, "MMMM YYYY")}` : l.year === u.year ? s.title = `${r.formatDate(
      l.date,
      "MMM"
    )} - ${r.formatDate(u.date, "MMM YYYY")}` : s.title = `${r.formatDate(
      l.date,
      "MMM YYYY"
    )} - ${r.formatDate(u.date, "MMM YYYY")}`;
  }), a;
}
function Y9(e, t) {
  return e.days.map((n) => ({
    label: t.formatDate(n.date, t.masks.weekdays),
    weekday: n.weekday
  }));
}
function ew(e, t, n) {
  return Wb(
    n.getDateParts(n.toDate(e)),
    L9[t]
  );
}
function tw({ day: e, week: t, month: n, year: r }, a, s, l) {
  if (s === "daily" && e) {
    const u = new Date(r, n - 1, e), f = Nn(u, a);
    return {
      day: f.getDate(),
      month: f.getMonth() + 1,
      year: f.getFullYear()
    };
  } else if (s === "weekly" && t) {
    const f = l.getMonthParts(n, r).firstDayOfMonth, h = Nn(f, (t - 1 + a) * 7), d = l.getDateParts(h);
    return {
      week: d.week,
      month: d.month,
      year: d.year
    };
  } else {
    const u = new Date(r, n - 1, 1), f = vc(u, a);
    return {
      month: f.getMonth() + 1,
      year: f.getFullYear()
    };
  }
}
function ni(e) {
  return e != null && e.month != null && e.year != null;
}
function Oh(e, t) {
  return !ni(e) || !ni(t) ? !1 : (e = e, t = t, e.year !== t.year ? e.year < t.year : e.month && t.month && e.month !== t.month ? e.month < t.month : e.week && t.week && e.week !== t.week ? e.week < t.week : e.day && t.day && e.day !== t.day ? e.day < t.day : !1);
}
function _c(e, t) {
  return !ni(e) || !ni(t) ? !1 : (e = e, t = t, e.year !== t.year ? e.year > t.year : e.month && t.month && e.month !== t.month ? e.month > t.month : e.week && t.week && e.week !== t.week ? e.week > t.week : e.day && t.day && e.day !== t.day ? e.day > t.day : !1);
}
function nw(e, t, n) {
  return (e || !1) && !Oh(e, t) && !_c(e, n);
}
function W9(e, t) {
  return !e && t || e && !t ? !1 : !e && !t ? !0 : (e = e, t = t, e.year === t.year && e.month === t.month && e.week === t.week && e.day === t.day);
}
function U9(e, t, n, r) {
  if (!ni(e) || !ni(t))
    return [];
  const a = [];
  for (; !_c(e, t); )
    a.push(e), e = tw(e, 1, n, r);
  return a;
}
function rw(e) {
  const { day: t, week: n, month: r, year: a } = e;
  let s = `${a}-${Pt(r, 2)}`;
  return n && (s = `${s}-w${n}`), t && (s = `${s}-${Pt(t, 2)}`), s;
}
function V9(e, t) {
  const { month: n, year: r, showWeeknumbers: a, showIsoWeeknumbers: s } = e, l = new Date(r, n - 1, 15), u = t.getMonthParts(n, r), f = t.getPrevMonthParts(n, r), h = t.getNextMonthParts(n, r), d = R9({ monthComps: u, prevMonthComps: f, nextMonthComps: h }, t), m = F9(d, a, s, t), v = Y9(m[0], t);
  return {
    id: rw(e),
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
function B9(e, t) {
  const { day: n, week: r, view: a, trimWeeks: s } = e, l = {
    ...t,
    ...e,
    title: "",
    viewDays: [],
    viewWeeks: []
  };
  switch (a) {
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
        s ? l.monthComps.numWeeks : void 0
      ), l.viewDays = l.days;
      break;
    }
  }
  return l;
}
class By {
  constructor(t, n, r) {
    Ne(this, "keys", []), Ne(this, "store", {}), this.size = t, this.createKey = n, this.createItem = r;
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
      const a = this.keys.shift();
      a != null && delete this.store[a];
    }
    return this.keys.push(n), this.store[n] = r, r;
  }
}
class zs {
  constructor(t, n = new yc()) {
    Ne(this, "order"), Ne(this, "locale"), Ne(this, "start", null), Ne(this, "end", null), Ne(this, "repeat", null);
    var r;
    this.locale = n;
    const { start: a, end: s, span: l, order: u, repeat: f } = t;
    Hs(a) && (this.start = n.getDateParts(a)), Hs(s) ? this.end = n.getDateParts(s) : this.start != null && l && (this.end = n.getDateParts(Nn(this.start.date, l - 1))), this.order = u ?? 0, f && (this.repeat = new gc(
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
    return (Dr(t) ? t : [t]).filter((r) => r).map((r) => zs.from(r, n));
  }
  static from(t, n) {
    if (t instanceof zs)
      return t;
    const r = {
      start: null,
      end: null
    };
    return t != null && (Dr(t) ? (r.start = t[0] ?? null, r.end = t[1] ?? null) : ji(t) ? Object.assign(r, t) : (r.start = t, r.end = t)), r.start != null && (r.start = new Date(r.start)), r.end != null && (r.end = new Date(r.end)), new zs(r, n);
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
class H9 {
  constructor() {
    Ne(this, "records", {});
  }
  render(t, n, r) {
    var a, s, l, u;
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
          endTime: ((g = n.end) == null ? void 0 : g.time) ?? Vu
        }, this.getRangeRecords(t).push(f);
      }
    }) : n.intersectsDayRange(h, d) && (f = {
      startDay: ((a = n.start) == null ? void 0 : a.dayIndex) ?? -1 / 0,
      startTime: ((s = n.start) == null ? void 0 : s.time) ?? -1 / 0,
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
    return this.getCells(n).find((s) => s.data.key === t);
  }
  cellExists(t, n) {
    const r = this.records[t];
    return r == null ? !1 : r.ranges.some(
      (a) => a.startDay <= n && a.endDay >= n
    );
  }
  getCells(t) {
    const n = Object.values(this.records), r = [], { dayIndex: a } = t;
    return n.forEach(({ data: s, ranges: l }) => {
      l.filter((u) => u.startDay <= a && u.endDay >= a).forEach((u) => {
        const f = a === u.startDay, h = a === u.endDay, d = f ? u.startTime : 0, m = new Date(t.startDate.getTime() + d), v = h ? u.endTime : Vu, g = new Date(t.endDate.getTime() + v), w = d === 0 && v === Vu, O = s.order || 0;
        r.push({
          ...u,
          data: s,
          onStart: f,
          onEnd: h,
          startTime: d,
          startDate: m,
          endTime: v,
          endDate: g,
          allDay: w,
          order: O
        });
      });
    }), r.sort((s, l) => s.order - l.order), r;
  }
}
const z9 = 12, j9 = 5;
function G9(e, t) {
  const n = new Intl.DateTimeFormat().resolvedOptions().locale;
  let r;
  ti(e) ? r = e : Ip(e, "id") && (r = e.id), r = (r || n).toLowerCase();
  const a = Object.keys(t), s = (f) => a.find((h) => h.toLowerCase() === f);
  r = s(r) || s(r.substring(0, 2)) || n;
  const l = {
    ...t["en-IE"],
    ...t[r],
    id: r,
    monthCacheSize: z9,
    pageCacheSize: j9
  };
  return ji(e) ? bl(e, l) : l;
}
let yc = class {
  constructor(t = void 0, n) {
    Ne(this, "id"), Ne(this, "daysInWeek"), Ne(this, "firstDayOfWeek"), Ne(this, "masks"), Ne(this, "timezone"), Ne(this, "hourLabels"), Ne(this, "dayNames"), Ne(this, "dayNamesShort"), Ne(this, "dayNamesShorter"), Ne(this, "dayNamesNarrow"), Ne(this, "monthNames"), Ne(this, "monthNamesShort"), Ne(this, "relativeTimeNames"), Ne(this, "amPm", ["am", "pm"]), Ne(this, "monthCache"), Ne(this, "pageCache");
    const { id: r, firstDayOfWeek: a, masks: s, monthCacheSize: l, pageCacheSize: u } = G9(t, Lz.value);
    this.monthCache = new By(
      l,
      x9,
      T9
    ), this.pageCache = new By(u, rw, V9), this.id = r, this.daysInWeek = On, this.firstDayOfWeek = oz(a, 1, On), this.masks = s, this.timezone = n || void 0, this.hourLabels = this.getHourLabels(), this.dayNames = Id("long", this.id), this.dayNamesShort = Id("short", this.id), this.dayNamesShorter = this.dayNamesShort.map((f) => f.substring(0, 2)), this.dayNamesNarrow = Id("narrow", this.id), this.monthNames = Uy("long", this.id), this.monthNamesShort = Uy("short", this.id), this.relativeTimeNames = M9(this.id);
  }
  formatDate(t, n) {
    return N9(t, n, this);
  }
  parseDate(t, n) {
    return Vy(t, n, this);
  }
  toDate(t, n = {}) {
    const r = /* @__PURE__ */ new Date(NaN);
    let a = r;
    const { fillDate: s, mask: l, patch: u, rules: f } = n;
    if (Ur(t) ? (n.type = "number", a = /* @__PURE__ */ new Date(+t)) : ti(t) ? (n.type = "string", a = t ? Vy(t, l || "iso", this) : r) : Hs(t) ? (n.type = "date", a = new Date(t.getTime())) : Kb(t) && (n.type = "object", a = this.getDateFromParts(t)), a && (u || f)) {
      let h = this.getDateParts(a);
      if (u && s != null) {
        const d = this.getDateParts(this.toDate(s));
        h = this.getDateParts(
          this.toDate({ ...d, ...Wb(h, v9[u]) })
        );
      }
      f && (h = I9(h, f)), a = this.getDateFromParts(h);
    }
    return a || r;
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
    return zs.from(t, this);
  }
  ranges(t) {
    return zs.fromMany(t, this);
  }
  getDateParts(t) {
    return S9(t, this);
  }
  getDateFromParts(t) {
    return Jb(t, this.timezone);
  }
  getDateFromParams(t, n, r, a, s, l, u) {
    return this.getDateFromParts({
      year: t,
      month: n,
      day: r,
      hours: a,
      minutes: s,
      seconds: l,
      milliseconds: u
    });
  }
  getPage(t) {
    const n = this.pageCache.getOrSet(t, this);
    return B9(t, n);
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
    return A9().map((t) => this.formatDate(t, this.masks.hours));
  }
  getDayId(t) {
    return this.formatDate(t, "YYYY-MM-DD");
  }
};
class iw {
  constructor(t, n, r) {
    Ne(this, "key", ""), Ne(this, "hashcode", ""), Ne(this, "highlight", null), Ne(this, "content", null), Ne(this, "dot", null), Ne(this, "bar", null), Ne(this, "event", null), Ne(this, "popover", null), Ne(this, "customData", null), Ne(this, "ranges"), Ne(this, "hasRanges", !1), Ne(this, "order", 0), Ne(this, "pinPage", !1), Ne(this, "maxRepeatSpan", 0), Ne(this, "locale");
    const { dates: a } = Object.assign(
      this,
      { hashcode: "", order: 0, pinPage: !1 },
      t
    );
    this.key || (this.key = oc()), this.locale = r, n.normalizeGlyphs(this), this.ranges = r.ranges(a ?? []), this.hasRanges = !!Ni(this.ranges), this.maxRepeatSpan = this.ranges.filter((s) => s.hasRepeat).map((s) => s.daySpan).reduce((s, l) => Math.max(s, l), 0);
  }
  intersectsRange({ start: t, end: n }) {
    if (t == null || n == null)
      return !1;
    const r = this.ranges.filter((l) => !l.hasRepeat);
    for (const l of r)
      if (l.intersectsDayRange(t.dayIndex, n.dayIndex))
        return !0;
    const a = this.ranges.filter((l) => l.hasRepeat);
    if (!a.length)
      return !1;
    let s = t;
    for (this.maxRepeatSpan > 1 && (s = this.locale.getDateParts(Nn(s.date, -this.maxRepeatSpan))); s.dayIndex <= n.dayIndex; ) {
      for (const l of a)
        if (l.startsOnDay(s))
          return !0;
      s = this.locale.getDateParts(Nn(s.date, 1));
    }
    return !1;
  }
}
const aw = "__vc_base_context__", sw = {
  color: {
    type: String,
    default: () => $a("color")
  },
  isDark: {
    type: [Boolean, String, Object],
    default: () => $a("isDark")
  },
  firstDayOfWeek: Number,
  masks: Object,
  locale: [String, Object],
  timezone: String,
  minDate: null,
  maxDate: null,
  disabledDates: null
};
function ow(e) {
  const t = W(() => e.color ?? ""), n = W(() => e.isDark ?? !1), { displayMode: r } = vF(n), a = W(() => new mz(t.value)), s = W(() => {
    if (e.locale instanceof yc)
      return e.locale;
    const d = ji(e.locale) ? e.locale : {
      id: e.locale,
      firstDayOfWeek: e.firstDayOfWeek,
      masks: e.masks
    };
    return new yc(d, e.timezone);
  }), l = W(() => s.value.masks), u = W(() => {
    const d = e.disabledDates ?? [];
    return e.minDate != null && d.push({
      start: null,
      end: Nn(s.value.toDate(e.minDate), -1)
    }), e.maxDate != null && d.push({
      start: Nn(s.value.toDate(e.maxDate), 1),
      end: null
    }), s.value.ranges(d);
  }), f = W(() => new iw(
    {
      key: "disabled",
      dates: u.value,
      order: 100
    },
    a.value,
    s.value
  )), h = {
    color: t,
    isDark: n,
    displayMode: r,
    theme: a,
    locale: s,
    masks: l,
    disabledDates: u,
    disabledAttribute: f
  };
  return ii(aw, h), h;
}
function q9(e) {
  return kt(aw, ow(e));
}
const K9 = (e, t, {
  maxSwipeTime: n,
  minHorizontalSwipeDistance: r,
  maxVerticalSwipeDistance: a
}) => {
  if (!e || !e.addEventListener || !fs(t))
    return null;
  let s = 0, l = 0, u = null, f = !1;
  function h(m) {
    const v = m.changedTouches[0];
    s = v.screenX, l = v.screenY, u = (/* @__PURE__ */ new Date()).getTime(), f = !0;
  }
  function d(m) {
    if (!f || !u)
      return;
    f = !1;
    const v = m.changedTouches[0], g = v.screenX - s, w = v.screenY - l;
    if ((/* @__PURE__ */ new Date()).getTime() - u < n && Math.abs(g) >= r && Math.abs(w) <= a) {
      const D = { toLeft: !1, toRight: !1 };
      g < 0 ? D.toLeft = !0 : D.toRight = !0, t(D);
    }
  }
  return wa(e, "touchstart", h, { passive: !0 }), wa(e, "touchend", d, { passive: !0 }), () => {
    ba(e, "touchstart", h), ba(e, "touchend", d);
  };
}, Bu = {}, Z9 = (e, t = 10) => {
  Bu[e] = Date.now() + t;
}, X9 = (e, t) => {
  if (e in Bu) {
    const n = Bu[e];
    if (Date.now() < n)
      return;
    delete Bu[e];
  }
  t();
}, J9 = {
  ...sw,
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
    default: () => $a("titlePosition")
  },
  navVisibility: {
    type: String,
    default: () => $a("navVisibility")
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
}, Q9 = [
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
], lw = "__vc_calendar_context__";
function ej(e, { emit: t, slots: n }) {
  const r = Q(null), a = Q(null), s = Q(null), l = Q((/* @__PURE__ */ new Date()).getDate()), u = Q(!1), f = Q(oc()), h = Q(oc()), d = Q(e.view), m = Q([]), v = Q("");
  let g = null, w = null;
  const {
    theme: O,
    color: D,
    displayMode: b,
    locale: x,
    masks: k,
    disabledAttribute: E,
    disabledDates: P
  } = q9(e), M = W(() => e.rows * e.columns), N = W(() => e.step || M.value), L = W(() => Fb(m.value) ?? null), H = W(() => Ws(m.value) ?? null), $ = W(
    () => e.minPage || (e.minDate ? Ae(e.minDate) : null)
  ), q = W(
    () => e.maxPage || (e.maxDate ? Ae(e.maxDate) : null)
  ), Y = W(() => e.navVisibility), J = W(() => !!e.showWeeknumbers), me = W(() => !!e.showIsoWeeknumbers), le = W(() => d.value === "monthly"), pe = W(() => d.value === "weekly"), Oe = W(() => d.value === "daily"), Ve = () => {
    u.value = !0, t("transition-start");
  }, Fe = () => {
    u.value = !1, t("transition-end"), g && (g.resolve(!0), g = null);
  }, ie = (se, he, je = d.value) => tw(se, he, je, x.value), Ae = (se) => ew(se, d.value, x.value), vt = (se) => {
    !E.value || !ce.value || (se.isDisabled = ce.value.cellExists(
      E.value.key,
      se.dayIndex
    ));
  }, At = (se) => {
    se.isFocusable = se.inMonth && se.day === l.value;
  }, Te = (se, he) => {
    for (const je of se)
      for (const V of je.days)
        if (he(V) === !1)
          return;
  }, it = W(
    () => m.value.reduce((se, he) => (se.push(...he.viewDays), se), [])
  ), Qe = W(() => {
    const se = [];
    return (e.attributes || []).forEach((he, je) => {
      if (!he || !he.dates)
        return;
      const V = Ip(he, "key") ? he.key : je, de = he.order || 0;
      se.push(
        new iw(
          {
            ...he,
            key: V,
            order: de
          },
          O.value,
          x.value
        )
      );
    }), E.value && se.push(E.value), se;
  }), ve = W(() => Ni(Qe.value)), ce = W(() => {
    const se = new H9();
    return Qe.value.forEach((he) => {
      he.ranges.forEach((je) => {
        se.render(he, je, it.value);
      });
    }), se;
  }), _e = W(() => it.value.reduce((se, he) => (se[he.dayIndex] = { day: he, cells: [] }, se[he.dayIndex].cells.push(...ce.value.getCells(he)), se), {})), Ce = (se, he) => {
    const je = e.showWeeknumbers || e.showIsoWeeknumbers;
    return je == null ? "" : n8(je) ? je ? "left" : "" : je.startsWith("right") ? he > 1 ? "right" : je : se > 1 ? "left" : je;
  }, te = () => {
    var se, he;
    if (!ve.value)
      return null;
    const je = Qe.value.find((Ie) => Ie.pinPage) || Qe.value[0];
    if (!je || !je.hasRanges)
      return null;
    const [V] = je.ranges, de = ((se = V.start) == null ? void 0 : se.date) || ((he = V.end) == null ? void 0 : he.date);
    return de ? Ae(de) : null;
  }, Ee = () => {
    if (ni(L.value))
      return L.value;
    const se = te();
    return ni(se) ? se : Ae(/* @__PURE__ */ new Date());
  }, C = (se, he = {}) => {
    const { view: je = d.value, position: V = 1, force: de } = he, Ie = V > 0 ? 1 - V : -(M.value + V);
    let ut = ie(se, Ie, je), Xt = ie(ut, M.value - 1, je);
    return de || (Oh(ut, $.value) ? ut = $.value : _c(Xt, q.value) && (ut = ie(q.value, 1 - M.value)), Xt = ie(ut, M.value - 1)), { fromPage: ut, toPage: Xt };
  }, A = (se, he, je = "") => {
    if (je === "none" || je === "fade")
      return je;
    if ((se == null ? void 0 : se.view) !== (he == null ? void 0 : he.view))
      return "fade";
    const V = _c(he, se), de = Oh(he, se);
    return !V && !de ? "fade" : je === "slide-v" ? de ? "slide-down" : "slide-up" : de ? "slide-right" : "slide-left";
  }, z = (se = {}) => new Promise((he, je) => {
    const { position: V = 1, force: de = !1, transition: Ie } = se, ut = ni(se.page) ? se.page : Ee(), { fromPage: Xt } = C(ut, {
      position: V,
      force: de
    }), qn = [];
    for (let yn = 0; yn < M.value; yn++) {
      const na = ie(Xt, yn), ra = yn + 1, ms = Math.ceil(ra / e.columns), Ln = e.rows - ms + 1, vs = ra % e.columns || e.columns, _i = e.columns - vs + 1, ko = Ce(vs, _i);
      qn.push(
        x.value.getPage({
          ...na,
          view: d.value,
          titlePosition: e.titlePosition,
          trimWeeks: e.trimWeeks,
          position: ra,
          row: ms,
          rowFromEnd: Ln,
          column: vs,
          columnFromEnd: _i,
          showWeeknumbers: J.value,
          showIsoWeeknumbers: me.value,
          weeknumberPosition: ko
        })
      );
    }
    v.value = A(
      m.value[0],
      qn[0],
      Ie
    ), m.value = qn, v.value && v.value !== "none" ? g = {
      resolve: he,
      reject: je
    } : he(!0);
  }), fe = (se) => {
    const he = L.value ?? Ae(/* @__PURE__ */ new Date());
    return ie(he, se);
  }, we = (se, he = {}) => {
    const je = ni(se) ? se : Ae(se);
    return Object.assign(
      he,
      C(je, {
        ...he,
        force: !0
      })
    ), U9(
      he.fromPage,
      he.toPage,
      d.value,
      x.value
    ).map((de) => nw(de, $.value, q.value)).every((de) => de);
  }, ze = (se, he = {}) => we(fe(se), he), Zt = W(() => ze(-N.value)), yt = W(() => ze(N.value)), Mt = async (se, he = {}) => !he.force && !we(se, he) ? !1 : (he.fromPage && !W9(he.fromPage, L.value) && (a.value && a.value.hide({ hideDelay: 0 }), he.view && (Z9("view", 10), d.value = he.view), await z({
    ...he,
    page: he.fromPage,
    position: 1,
    force: !0
  }), t("did-move", m.value)), !0), _n = (se, he = {}) => Mt(fe(se), he), bt = () => _n(-N.value), Z = () => _n(N.value), oe = (se) => {
    const he = le.value ? ".in-month" : "", je = `.id-${x.value.getDayId(se)}${he}`, V = `${je}.vc-focusable, ${je} .vc-focusable`, de = r.value;
    if (de) {
      const Ie = de.querySelector(V);
      if (Ie)
        return Ie.focus(), !0;
    }
    return !1;
  }, Ht = async (se, he = {}) => oe(se) ? !0 : (await Mt(se, he), oe(se)), $t = (se, he) => {
    l.value = se.day, t("dayclick", se, he);
  }, pn = (se, he) => {
    t("daymouseenter", se, he);
  }, ur = (se, he) => {
    t("daymouseleave", se, he);
  }, kn = (se, he) => {
    l.value = se.day, s.value = se, se.isFocused = !0, t("dayfocusin", se, he);
  }, An = (se, he) => {
    s.value = null, se.isFocused = !1, t("dayfocusout", se, he);
  }, Pr = (se, he) => {
    t("daykeydown", se, he);
    const je = se.noonDate;
    let V = null;
    switch (he.key) {
      case "ArrowLeft": {
        V = Nn(je, -1);
        break;
      }
      case "ArrowRight": {
        V = Nn(je, 1);
        break;
      }
      case "ArrowUp": {
        V = Nn(je, -7);
        break;
      }
      case "ArrowDown": {
        V = Nn(je, 7);
        break;
      }
      case "Home": {
        V = Nn(je, -se.weekdayPosition + 1);
        break;
      }
      case "End": {
        V = Nn(je, se.weekdayPositionFromEnd);
        break;
      }
      case "PageUp": {
        he.altKey ? V = Ny(je, -1) : V = vc(je, -1);
        break;
      }
      case "PageDown": {
        he.altKey ? V = Ny(je, 1) : V = vc(je, 1);
        break;
      }
    }
    V && (he.preventDefault(), Ht(V).catch());
  }, Kr = (se) => {
    const he = s.value;
    he != null && Pr(he, se);
  }, Na = (se, he) => {
    t("weeknumberclick", se, he);
  };
  z({
    page: e.initialPage,
    position: e.initialPagePosition
  }), Hr(() => {
    !e.disablePageSwipe && r.value && (w = K9(
      r.value,
      ({ toLeft: se = !1, toRight: he = !1 }) => {
        se ? Z() : he && bt();
      },
      $a("touch")
    ));
  }), Pa(() => {
    m.value = [], w && w();
  }), Ue(
    () => x.value,
    () => {
      z();
    }
  ), Ue(
    () => M.value,
    () => z()
  ), Ue(
    () => e.view,
    () => d.value = e.view
  ), Ue(
    () => d.value,
    () => {
      X9("view", () => {
        z();
      }), t("update:view", d.value);
    }
  ), Ue(
    () => l.value,
    () => {
      Te(m.value, (se) => At(se));
    }
  ), Gn(() => {
    t("update:pages", m.value), Te(m.value, (se) => {
      vt(se), At(se);
    });
  });
  const ta = {
    emit: t,
    slots: n,
    containerRef: r,
    navPopoverRef: a,
    focusedDay: s,
    inTransition: u,
    navPopoverId: f,
    dayPopoverId: h,
    view: d,
    pages: m,
    transitionName: v,
    theme: O,
    color: D,
    displayMode: b,
    locale: x,
    masks: k,
    attributes: Qe,
    disabledAttribute: E,
    disabledDates: P,
    attributeContext: ce,
    days: it,
    dayCells: _e,
    count: M,
    step: N,
    firstPage: L,
    lastPage: H,
    canMovePrev: Zt,
    canMoveNext: yt,
    minPage: $,
    maxPage: q,
    isMonthly: le,
    isWeekly: pe,
    isDaily: Oe,
    navVisibility: Y,
    showWeeknumbers: J,
    showIsoWeeknumbers: me,
    getDateAddress: Ae,
    canMove: we,
    canMoveBy: ze,
    move: Mt,
    moveBy: _n,
    movePrev: bt,
    moveNext: Z,
    onTransitionBeforeEnter: Ve,
    onTransitionAfterEnter: Fe,
    tryFocusDate: oe,
    focusDate: Ht,
    onKeydown: Kr,
    onDayKeydown: Pr,
    onDayClick: $t,
    onDayMouseenter: pn,
    onDayMouseleave: ur,
    onDayFocusin: kn,
    onDayFocusout: An,
    onWeeknumberClick: Na
  };
  return ii(lw, ta), ta;
}
function hs() {
  const e = kt(lw);
  if (e)
    return e;
  throw new Error(
    "Calendar context missing. Please verify this component is nested within a valid context provider."
  );
}
const tj = {
  inheritAttrs: !1
}, js = /* @__PURE__ */ Re({
  ...tj,
  __name: "CalendarSlot",
  props: {
    name: null
  },
  setup(e) {
    const { slots: t } = hs();
    return (n, r) => y(t)[e.name] ? (F(), Ze(Zs(y(t)[e.name]), ts(Kt({ key: 0 }, n.$attrs)), null, 16)) : rt(n.$slots, "default", { key: 1 });
  }
});
function Eh(e) {
  document && document.dispatchEvent(
    new CustomEvent("show-popover", {
      detail: e
    })
  );
}
function bc(e) {
  document && document.dispatchEvent(
    new CustomEvent("hide-popover", {
      detail: e
    })
  );
}
function uw(e) {
  document && document.dispatchEvent(
    new CustomEvent("toggle-popover", {
      detail: e
    })
  );
}
function cw(e) {
  const { visibility: t } = e, n = t === "click", r = t === "hover", a = t === "hover-focus", s = t === "focus";
  e.autoHide = !n;
  let l = !1, u = !1;
  const f = (w) => {
    n && (uw({
      ...e,
      target: e.target || w.currentTarget
    }), w.stopPropagation());
  }, h = (w) => {
    l || (l = !0, (r || a) && Eh({
      ...e,
      target: e.target || w.currentTarget
    }));
  }, d = () => {
    l && (l = !1, (r || a && !u) && bc(e));
  }, m = (w) => {
    u || (u = !0, (s || a) && Eh({
      ...e,
      target: e.target || w.currentTarget
    }));
  }, v = (w) => {
    u && !Wu(w.currentTarget, w.relatedTarget) && (u = !1, (s || a && !l) && bc(e));
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
const Hy = (e) => {
  const t = sc(e);
  if (t == null)
    return;
  const n = t.popoverHandlers;
  !n || !n.length || (n.forEach((r) => r()), delete t.popoverHandlers);
}, zy = (e, t) => {
  const n = sc(e);
  if (n == null)
    return;
  const r = [], a = cw(t);
  Object.entries(a).forEach(([s, l]) => {
    r.push(wa(n, s, l));
  }), n.popoverHandlers = r;
}, fw = {
  mounted(e, t) {
    const { value: n } = t;
    n && zy(e, n);
  },
  updated(e, t) {
    const { oldValue: n, value: r } = t, a = n == null ? void 0 : n.visibility, s = r == null ? void 0 : r.visibility;
    a !== s && (a && (Hy(e), s || bc(n)), s && zy(e, r));
  },
  unmounted(e) {
    Hy(e);
  }
}, nj = ["disabled"], rj = {
  key: 1,
  type: "button",
  class: "vc-title"
}, ij = ["disabled"], dw = /* @__PURE__ */ Re({
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
      canMovePrev: a,
      movePrev: s,
      canMoveNext: l,
      moveNext: u
    } = hs(), f = W(() => {
      switch (t.page.titlePosition) {
        case "left":
          return "bottom-start";
        case "right":
          return "bottom-end";
        default:
          return "bottom";
      }
    }), h = W(() => {
      const { page: O } = t;
      return {
        id: n.value,
        visibility: r.value,
        placement: f.value,
        modifiers: [{ name: "flip", options: { fallbackPlacements: ["bottom"] } }],
        data: { page: O },
        isInteractive: !0
      };
    }), d = W(() => t.page.titlePosition.includes("left")), m = W(() => t.page.titlePosition.includes("right")), v = W(() => t.layout ? t.layout : d.value ? "tu-pn" : m.value ? "pn-tu" : "p-tu-n;"), g = W(() => ({
      prev: v.value.includes("p") && !t.hideArrows,
      title: v.value.includes("t") && !t.hideTitle,
      next: v.value.includes("n") && !t.hideArrows
    })), w = W(() => ({ gridTemplateColumns: v.value.split("").map((D) => {
      switch (D) {
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
    return (O, D) => (F(), G("div", {
      class: et(["vc-header", { "is-lg": e.isLg, "is-xl": e.isXl, "is-2xl": e.is2xl }]),
      style: Fi(y(w))
    }, [
      y(g).prev ? (F(), G("button", {
        key: 0,
        type: "button",
        class: "vc-arrow vc-prev vc-focus",
        disabled: !y(a),
        onClick: D[0] || (D[0] = //@ts-ignore
        (...b) => y(s) && y(s)(...b)),
        onKeydown: D[1] || (D[1] = jd(
          //@ts-ignore
          (...b) => y(s) && y(s)(...b),
          ["space", "enter"]
        ))
      }, [
        Me(js, {
          name: "header-prev-button",
          disabled: !y(a)
        }, {
          default: Pe(() => [
            Me(io, {
              name: "ChevronLeft",
              size: "24"
            })
          ]),
          _: 1
        }, 8, ["disabled"])
      ], 40, nj)) : De("", !0),
      y(g).title ? rr((F(), G("button", rj, [
        Me(js, {
          name: "header-title",
          title: e.page.title
        }, {
          default: Pe(() => [
            j("span", null, ke(e.page.title), 1)
          ]),
          _: 1
        }, 8, ["title"])
      ])), [
        [y(fw), y(h)]
      ]) : De("", !0),
      y(g).next ? (F(), G("button", {
        key: 2,
        type: "button",
        class: "vc-arrow vc-next vc-focus",
        disabled: !y(l),
        onClick: D[2] || (D[2] = //@ts-ignore
        (...b) => y(u) && y(u)(...b)),
        onKeydown: D[3] || (D[3] = jd(
          //@ts-ignore
          (...b) => y(u) && y(u)(...b),
          ["space", "enter"]
        ))
      }, [
        Me(js, {
          name: "header-next-button",
          disabled: !y(l)
        }, {
          default: Pe(() => [
            Me(io, {
              name: "ChevronRight",
              size: "24"
            })
          ]),
          _: 1
        }, 8, ["disabled"])
      ], 40, ij)) : De("", !0)
    ], 6));
  }
}), aj = Re({
  directives: { popover: fw },
  components: { CalendarSlot: js },
  props: {
    day: { type: Object, required: !0 }
  },
  setup(e) {
    const {
      locale: t,
      theme: n,
      attributeContext: r,
      dayPopoverId: a,
      slots: s,
      onDayClick: l,
      onDayMouseenter: u,
      onDayMouseleave: f,
      onDayFocusin: h,
      onDayFocusout: d,
      onDayKeydown: m
    } = hs(), v = W(() => e.day), g = W(() => r.value.getCells(v.value)), w = W(
      () => g.value.map((le) => le.data)
    ), O = W(() => ({
      ...v.value,
      attributes: w.value,
      attributeCells: g.value
    }));
    function D({ data: le }, { popovers: pe }) {
      const { key: Oe, customData: Ve, popover: Fe } = le;
      if (!Fe)
        return;
      const ie = Sy(
        {
          key: Oe,
          customData: Ve,
          attribute: le
        },
        { ...Fe },
        {
          visibility: Fe.label ? "hover" : "click",
          placement: "bottom",
          isInteractive: !Fe.label
        }
      );
      pe.splice(0, 0, ie);
    }
    const b = W(() => {
      const le = {
        ...n.value.prepareRender({}),
        popovers: []
      };
      return g.value.forEach((pe) => {
        n.value.render(pe, le), D(pe, le);
      }), le;
    }), x = W(() => b.value.highlights), k = W(() => !!Ni(x.value)), E = W(() => b.value.content), P = W(() => b.value.dots), M = W(() => !!Ni(P.value)), N = W(() => b.value.bars), L = W(() => !!Ni(N.value)), H = W(() => b.value.popovers), $ = W(
      () => H.value.map((le) => le.attribute)
    ), q = W(() => [
      "vc-day",
      ...v.value.classes,
      { "vc-day-box-center-center": !s["day-content"] },
      { "is-not-in-month": !e.day.inMonth }
    ]), Y = W(() => {
      let le;
      v.value.isFocusable ? le = "0" : le = "-1";
      const pe = [
        "vc-day-content vc-focusable vc-focus vc-attr",
        { "vc-disabled": v.value.isDisabled },
        Za(Ws(x.value), "contentClass"),
        Za(Ws(E.value), "class") || ""
      ], Oe = {
        ...Za(Ws(x.value), "contentStyle"),
        ...Za(Ws(E.value), "style")
      };
      return {
        class: pe,
        style: Oe,
        tabindex: le,
        "aria-label": v.value.ariaLabel,
        "aria-disabled": !!v.value.isDisabled,
        role: "button"
      };
    }), J = W(() => ({
      click(le) {
        l(O.value, le);
      },
      mouseenter(le) {
        u(O.value, le);
      },
      mouseleave(le) {
        f(O.value, le);
      },
      focusin(le) {
        h(O.value, le);
      },
      focusout(le) {
        d(O.value, le);
      },
      keydown(le) {
        m(O.value, le);
      }
    })), me = W(() => Ni(H.value) ? Sy(
      {
        id: a.value,
        data: { day: v, attributes: $.value }
      },
      ...H.value
    ) : null);
    return {
      attributes: w,
      attributeCells: g,
      bars: N,
      dayClasses: q,
      dayContentProps: Y,
      dayContentEvents: J,
      dayPopover: me,
      glyphs: b,
      dots: P,
      hasDots: M,
      hasBars: L,
      highlights: x,
      hasHighlights: k,
      locale: t,
      popovers: H
    };
  }
}), sj = {
  key: 0,
  class: "vc-highlights vc-day-layer"
}, oj = {
  key: 1,
  class: "vc-day-layer vc-day-box-center-bottom"
}, lj = { class: "vc-dots" }, uj = {
  key: 2,
  class: "vc-day-layer vc-day-box-center-bottom"
}, cj = { class: "vc-bars" };
function fj(e, t, n, r, a, s) {
  const l = Ii("CalendarSlot"), u = y0("popover");
  return F(), G("div", {
    class: et(e.dayClasses)
  }, [
    e.hasHighlights ? (F(), G("div", sj, [
      (F(!0), G(Ke, null, Rt(e.highlights, ({ key: f, wrapperClass: h, class: d, style: m }) => (F(), G("div", {
        key: f,
        class: et(h)
      }, [
        j("div", {
          class: et(d),
          style: Fi(m)
        }, null, 6)
      ], 2))), 128))
    ])) : De("", !0),
    Me(l, {
      name: "day-content",
      day: e.day,
      attributes: e.attributes,
      "attribute-cells": e.attributeCells,
      dayProps: e.dayContentProps,
      dayEvents: e.dayContentEvents,
      locale: e.locale
    }, {
      default: Pe(() => [
        rr((F(), G("div", Kt(e.dayContentProps, b0(e.dayContentEvents, !0)), [
          us(ke(e.day.label), 1)
        ], 16)), [
          [u, e.dayPopover]
        ])
      ]),
      _: 1
    }, 8, ["day", "attributes", "attribute-cells", "dayProps", "dayEvents", "locale"]),
    e.hasDots ? (F(), G("div", oj, [
      j("div", lj, [
        (F(!0), G(Ke, null, Rt(e.dots, ({ key: f, class: h, style: d }) => (F(), G("span", {
          key: f,
          class: et(h),
          style: Fi(d)
        }, null, 6))), 128))
      ])
    ])) : De("", !0),
    e.hasBars ? (F(), G("div", uj, [
      j("div", cj, [
        (F(!0), G(Ke, null, Rt(e.bars, ({ key: f, class: h, style: d }) => (F(), G("span", {
          key: f,
          class: et(h),
          style: Fi(d)
        }, null, 6))), 128))
      ])
    ])) : De("", !0)
  ], 2);
}
const dj = /* @__PURE__ */ Zi(aj, [["render", fj]]), hj = {
  name: "CalendarPane",
  inheritAttrs: !1,
  components: { CalendarHeader: dw, CalendarDay: dj },
  props: {
    page: { type: Object, required: !0 }
  },
  setup() {
    const { onWeeknumberClick: e } = hs();
    return {
      onWeeknumberClick: e
    };
  }
}, pj = { class: "vc-weekdays" }, mj = ["onClick"];
function vj(e, t, n, r, a, s) {
  const l = Ii("CalendarHeader"), u = Ii("CalendarDay");
  return F(), G("div", {
    class: et([
      "vc-pane",
      `row-${n.page.row}`,
      `row-from-end-${n.page.rowFromEnd}`,
      `column-${n.page.column}`,
      `column-from-end-${n.page.columnFromEnd}`
    ]),
    ref: "pane"
  }, [
    Me(l, {
      page: n.page,
      "is-lg": "",
      "hide-arrows": ""
    }, null, 8, ["page"]),
    j("div", {
      class: et(["vc-weeks", {
        [`vc-show-weeknumbers-${n.page.weeknumberPosition}`]: n.page.weeknumberPosition
      }])
    }, [
      j("div", pj, [
        (F(!0), G(Ke, null, Rt(n.page.weekdays, ({ weekday: f, label: h }, d) => (F(), G("div", {
          key: d,
          class: et(`vc-weekday vc-weekday-${f}`)
        }, ke(h), 3))), 128))
      ]),
      (F(!0), G(Ke, null, Rt(n.page.viewWeeks, (f) => (F(), G("div", {
        key: `weeknumber-${f.weeknumber}`,
        class: "vc-week"
      }, [
        n.page.weeknumberPosition ? (F(), G("div", {
          key: 0,
          class: et(["vc-weeknumber", `is-${n.page.weeknumberPosition}`])
        }, [
          j("span", {
            class: et(["vc-weeknumber-content"]),
            onClick: (h) => r.onWeeknumberClick(f, h)
          }, ke(f.weeknumberDisplay), 9, mj)
        ], 2)) : De("", !0),
        (F(!0), G(Ke, null, Rt(f.days, (h) => (F(), Ze(u, {
          key: h.id,
          day: h
        }, null, 8, ["day"]))), 128))
      ]))), 128))
    ], 2)
  ], 2);
}
const gj = /* @__PURE__ */ Zi(hj, [["render", vj]]), _j = Re({
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
    const r = Q();
    let a = null, s = null;
    const l = xl({
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
    function u(ie) {
      ie && (l.direction = ie.split("-")[0]);
    }
    function f({ placement: ie, options: Ae }) {
      u(ie || (Ae == null ? void 0 : Ae.placement));
    }
    const h = W(() => ({
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
    })), d = W(() => {
      const ie = l.direction === "left" || l.direction === "right";
      let Ae = "";
      if (l.placement) {
        const vt = l.placement.split("-");
        vt.length > 1 && (Ae = vt[1]);
      }
      return ["start", "top", "left"].includes(Ae) ? ie ? "top" : "left" : ["end", "bottom", "right"].includes(Ae) ? ie ? "bottom" : "right" : ie ? "middle" : "center";
    });
    function m() {
      s && (s.destroy(), s = null);
    }
    function v() {
      En(() => {
        const ie = sc(l.target);
        !ie || !r.value || (s && s.state.elements.reference !== ie && m(), s ? s.update() : s = UR(
          ie,
          r.value,
          h.value
        ));
      });
    }
    function g(ie) {
      Object.assign(l, Yb(ie, "force"));
    }
    function w(ie, Ae) {
      clearTimeout(n), ie > 0 ? n = setTimeout(Ae, ie) : Ae();
    }
    function O(ie) {
      return !ie || !s ? !1 : sc(ie) === s.state.elements.reference;
    }
    async function D(ie = {}) {
      l.force || (ie.force && (l.force = !0), w(ie.showDelay ?? e.showDelay, () => {
        l.isVisible && (l.force = !1, t("after-show")), g({
          ...ie,
          isVisible: !0
        }), v();
      }));
    }
    function b(ie = {}) {
      s && (ie.target && !O(ie.target) || l.force || (ie.force && (l.force = !0), w(ie.hideDelay ?? e.hideDelay, () => {
        l.isVisible || (l.force = !1), l.isVisible = !1;
      })));
    }
    function x(ie = {}) {
      ie.target != null && (l.isVisible && O(ie.target) ? b(ie) : D(ie));
    }
    function k(ie) {
      if (!s)
        return;
      const Ae = s.state.elements.reference;
      if (!r.value || !Ae)
        return;
      const vt = ie.target;
      Wu(r.value, vt) || Wu(Ae, vt) || b({ force: !0 });
    }
    function E(ie) {
      (ie.key === "Esc" || ie.key === "Escape") && b();
    }
    function P({ detail: ie }) {
      !ie.id || ie.id !== e.id || D(ie);
    }
    function M({ detail: ie }) {
      !ie.id || ie.id !== e.id || b(ie);
    }
    function N({ detail: ie }) {
      !ie.id || ie.id !== e.id || x(ie);
    }
    function L() {
      wa(document, "keydown", E), wa(document, "click", k), wa(document, "show-popover", P), wa(document, "hide-popover", M), wa(document, "toggle-popover", N);
    }
    function H() {
      ba(document, "keydown", E), ba(document, "click", k), ba(document, "show-popover", P), ba(document, "hide-popover", M), ba(document, "toggle-popover", N);
    }
    function $(ie) {
      t("before-show", ie);
    }
    function q(ie) {
      l.force = !1, t("after-show", ie);
    }
    function Y(ie) {
      t("before-hide", ie);
    }
    function J(ie) {
      l.force = !1, m(), t("after-hide", ie);
    }
    function me(ie) {
      ie.stopPropagation();
    }
    function le() {
      l.isHovered = !0, l.isInteractive && ["hover", "hover-focus"].includes(l.visibility) && D();
    }
    function pe() {
      if (l.isHovered = !1, !s)
        return;
      const ie = s.state.elements.reference;
      l.autoHide && !l.isFocused && (!ie || ie !== document.activeElement) && ["hover", "hover-focus"].includes(l.visibility) && b();
    }
    function Oe() {
      l.isFocused = !0, l.isInteractive && ["focus", "hover-focus"].includes(l.visibility) && D();
    }
    function Ve(ie) {
      ["focus", "hover-focus"].includes(l.visibility) && (!ie.relatedTarget || !Wu(r.value, ie.relatedTarget)) && (l.isFocused = !1, !l.isHovered && l.autoHide && b());
    }
    function Fe() {
      a != null && (a.disconnect(), a = null);
    }
    return Ue(
      () => r.value,
      (ie) => {
        Fe(), ie && (a = new ResizeObserver(() => {
          s && s.update();
        }), a.observe(ie));
      }
    ), Ue(() => l.placement, u, {
      immediate: !0
    }), Hr(() => {
      L();
    }), Pa(() => {
      m(), Fe(), H();
    }), {
      ...oo(l),
      popoverRef: r,
      alignment: d,
      hide: b,
      setupPopper: v,
      beforeEnter: $,
      afterEnter: q,
      beforeLeave: Y,
      afterLeave: J,
      onClick: me,
      onMouseOver: le,
      onMouseLeave: pe,
      onFocusIn: Oe,
      onFocusOut: Ve
    };
  }
});
function yj(e, t, n, r, a, s) {
  return F(), G("div", {
    class: et(["vc-popover-content-wrapper", { "is-interactive": e.isInteractive }]),
    ref: "popoverRef",
    onClick: t[0] || (t[0] = (...l) => e.onClick && e.onClick(...l)),
    onMouseover: t[1] || (t[1] = (...l) => e.onMouseOver && e.onMouseOver(...l)),
    onMouseleave: t[2] || (t[2] = (...l) => e.onMouseLeave && e.onMouseLeave(...l)),
    onFocusin: t[3] || (t[3] = (...l) => e.onFocusIn && e.onFocusIn(...l)),
    onFocusout: t[4] || (t[4] = (...l) => e.onFocusOut && e.onFocusOut(...l))
  }, [
    Me(lo, {
      name: `vc-${e.transition}`,
      appear: "",
      onBeforeEnter: e.beforeEnter,
      onAfterEnter: e.afterEnter,
      onBeforeLeave: e.beforeLeave,
      onAfterLeave: e.afterLeave
    }, {
      default: Pe(() => [
        e.isVisible ? (F(), G("div", Kt({
          key: 0,
          tabindex: "-1",
          class: `vc-popover-content direction-${e.direction}`
        }, e.$attrs), [
          rt(e.$slots, "default", {
            direction: e.direction,
            alignment: e.alignment,
            data: e.data,
            hide: e.hide
          }, () => [
            us(ke(e.data), 1)
          ]),
          j("span", {
            class: et([
              "vc-popover-caret",
              `direction-${e.direction}`,
              `align-${e.alignment}`
            ])
          }, null, 2)
        ], 16)) : De("", !0)
      ]),
      _: 3
    }, 8, ["name", "onBeforeEnter", "onAfterEnter", "onBeforeLeave", "onAfterLeave"])
  ], 34);
}
const Yp = /* @__PURE__ */ Zi(_j, [["render", yj]]), bj = {
  value: { type: Object, required: !0 }
}, wj = ["input"], Oj = "__vc_calendar_nav_context__";
function Ej(e, { emit: t }) {
  const n = Q(!0), r = Q(0), a = Q(0), s = 12, l = Q(null), { locale: u, masks: f, canMove: h, getDateAddress: d } = hs();
  function m() {
    setTimeout(() => {
      if (l.value == null)
        return;
      const Te = l.value.querySelector(
        ".vc-nav-item:not(:disabled)"
      );
      Te && Te.focus();
    }, 10);
  }
  function v(Te, it) {
    t("input", { month: Te, year: it }, { position: $.value });
  }
  function g(Te) {
    r.value = Te, n.value = !0, m();
  }
  function w(Te) {
    const { year: it } = d(/* @__PURE__ */ new Date()), Qe = Te * s, ve = Qe + s, ce = [];
    for (let _e = Qe; _e < ve; _e += 1) {
      let Ce = !1;
      for (let te = 1; te < 12 && (Ce = h({ month: te, year: _e }, { position: $.value }), !Ce); te++)
        ;
      ce.push({
        year: _e,
        id: _e.toString(),
        label: _e.toString(),
        ariaLabel: _e.toString(),
        isActive: _e === H.value,
        isCurrent: _e === it,
        isDisabled: !Ce,
        click: () => g(_e)
      });
    }
    return ce;
  }
  function O(Te) {
    const { month: it, year: Qe } = d(/* @__PURE__ */ new Date());
    return Qb().map((ve, ce) => {
      const _e = ce + 1;
      return {
        month: _e,
        year: Te,
        id: `${Te}.${Pt(_e, 2)}`,
        label: u.value.formatDate(ve, f.value.navMonths),
        ariaLabel: u.value.formatDate(ve, "MMMM YYYY"),
        isActive: _e === L.value && Te === H.value,
        isCurrent: _e === it && Te === Qe,
        isDisabled: !h(
          { month: _e, year: Te },
          { position: $.value }
        ),
        click: () => v(_e, Te)
      };
    });
  }
  function D(Te) {
    return Math.floor(Te / s);
  }
  function b() {
    n.value = !n.value;
  }
  function x() {
    Ve.value && (n.value && E(), M());
  }
  function k() {
    Ae.value && (n.value && P(), N());
  }
  function E() {
    r.value--;
  }
  function P() {
    r.value++;
  }
  function M() {
    a.value--;
  }
  function N() {
    a.value++;
  }
  const L = W(() => {
    var Te;
    return ((Te = e.value) == null ? void 0 : Te.month) || 0;
  }), H = W(() => {
    var Te;
    return ((Te = e.value) == null ? void 0 : Te.year) || 0;
  }), $ = W(() => {
    var Te;
    return ((Te = e.value) == null ? void 0 : Te.position) || 1;
  }), q = W(() => O(r.value)), Y = W(() => w(a.value)), J = W(() => Fb(Y.value.map((Te) => Te.year))), me = W(() => Ws(Y.value.map((Te) => Te.year))), le = W(() => n.value ? r.value : `${J.value} - ${me.value}`), pe = W(
    () => O(r.value - 1).some((Te) => !Te.isDisabled)
  ), Oe = W(
    () => w(a.value - 1).some((Te) => !Te.isDisabled)
  ), Ve = W(
    () => n.value ? pe.value : Oe.value
  ), Fe = W(
    () => O(r.value + 1).some((Te) => !Te.isDisabled)
  ), ie = W(
    () => w(a.value + 1).some((Te) => !Te.isDisabled)
  ), Ae = W(
    () => n.value ? Fe.value : ie.value
  ), vt = W(
    () => n.value ? q.value : Y.value
  );
  Ue(
    () => H.value,
    () => {
      r.value = H.value;
    }
  ), Ue(
    () => r.value,
    (Te) => {
      a.value = D(Te);
    }
  ), r.value = H.value, Hr(() => m());
  const At = {
    navContainer: l,
    title: le,
    monthMode: n,
    currentMonth: L,
    currentYear: H,
    activeItems: vt,
    prevItemsEnabled: Ve,
    nextItemsEnabled: Ae,
    toggleMode: b,
    movePrev: x,
    moveNext: k,
    movePrevYear: E,
    moveNextYear: P,
    movePrevYearGroup: M,
    moveNextYearGroup: N
  };
  return ii(Oj, At), At;
}
const Dj = { class: "vc-nav-header" }, Sj = ["disabled"], xj = ["disabled"], Tj = { class: "vc-nav-items" }, kj = ["data-id", "aria-label", "disabled", "onClick", "onKeydown"], Aj = /* @__PURE__ */ Re({
  __name: "CalendarNav",
  props: bj,
  emits: wj,
  setup(e, { emit: t }) {
    const n = e, {
      navContainer: r,
      title: a,
      prevItemsEnabled: s,
      nextItemsEnabled: l,
      activeItems: u,
      toggleMode: f,
      movePrev: h,
      moveNext: d
    } = Ej(n, { emit: t });
    return (m, v) => (F(), G("div", {
      class: "vc-nav-container",
      ref_key: "navContainer",
      ref: r
    }, [
      j("div", Dj, [
        j("button", {
          type: "button",
          class: "vc-nav-arrow is-left vc-focus",
          disabled: !y(s),
          onClick: v[0] || (v[0] = //@ts-ignore
          (...g) => y(h) && y(h)(...g)),
          onKeydown: v[1] || (v[1] = (g) => y(Lu)(g, y(h)))
        }, [
          Me(js, {
            name: "nav-prev-button",
            move: y(h),
            disabled: !y(s)
          }, {
            default: Pe(() => [
              Me(io, {
                name: "ChevronLeft",
                width: "22px",
                height: "24px"
              })
            ]),
            _: 1
          }, 8, ["move", "disabled"])
        ], 40, Sj),
        j("button", {
          type: "button",
          class: "vc-nav-title vc-focus",
          onClick: v[2] || (v[2] = //@ts-ignore
          (...g) => y(f) && y(f)(...g)),
          onKeydown: v[3] || (v[3] = (g) => y(Lu)(g, y(f)))
        }, ke(y(a)), 33),
        j("button", {
          type: "button",
          class: "vc-nav-arrow is-right vc-focus",
          disabled: !y(l),
          onClick: v[4] || (v[4] = //@ts-ignore
          (...g) => y(d) && y(d)(...g)),
          onKeydown: v[5] || (v[5] = (g) => y(Lu)(g, y(d)))
        }, [
          Me(js, {
            name: "nav-next-button",
            move: y(d),
            disabled: !y(l)
          }, {
            default: Pe(() => [
              Me(io, {
                name: "ChevronRight",
                width: "22px",
                height: "24px"
              })
            ]),
            _: 1
          }, 8, ["move", "disabled"])
        ], 40, xj)
      ]),
      j("div", Tj, [
        (F(!0), G(Ke, null, Rt(y(u), (g) => (F(), G("button", {
          key: g.label,
          type: "button",
          "data-id": g.id,
          "aria-label": g.ariaLabel,
          class: et(["vc-nav-item vc-focus", [
            g.isActive ? "is-active" : g.isCurrent ? "is-current" : ""
          ]]),
          disabled: g.isDisabled,
          onClick: g.click,
          onKeydown: (w) => y(Lu)(w, g.click)
        }, ke(g.label), 43, kj))), 128))
      ])
    ], 512));
  }
}), Mj = {
  __name: "CalendarNavPopover",
  setup(e) {
    const { navPopoverId: t, color: n, displayMode: r, navPopoverRef: a, move: s } = hs();
    return (l, u) => (F(), Ze(Yp, {
      id: y(t),
      class: et(["vc-nav-popover-container", `vc-${y(n)}`, `vc-${y(r)}`]),
      ref_key: "navPopoverRef",
      ref: a
    }, {
      default: Pe(({ data: f }) => [
        Me(Aj, {
          value: f.page,
          onInput: y(s)
        }, null, 8, ["value", "onInput"])
      ]),
      _: 1
    }, 8, ["id", "class"]));
  }
}, $j = Re({
  name: "PopoverRow",
  props: {
    attribute: { type: Object, required: !0 }
  },
  setup(e) {
    return {
      indicator: W(() => {
        const { content: n, highlight: r, dot: a, bar: s, popover: l } = e.attribute;
        return l && l.hideIndicator ? null : n ? {
          class: `vc-bar vc-day-popover-row-bar vc-attr vc-${n.base.color}`
        } : r ? {
          class: `vc-highlight-bg-solid vc-day-popover-row-highlight vc-attr vc-${r.base.color}`
        } : a ? {
          class: `vc-dot vc-attr vc-${a.base.color}`
        } : s ? {
          class: `vc-bar vc-day-popover-row-bar vc-attr vc-${s.base.color}`
        } : null;
      })
    };
  }
}), Pj = { class: "vc-day-popover-row" }, Cj = {
  key: 0,
  class: "vc-day-popover-row-indicator"
}, Ij = { class: "vc-day-popover-row-label" };
function Nj(e, t, n, r, a, s) {
  return F(), G("div", Pj, [
    e.indicator ? (F(), G("div", Cj, [
      j("span", {
        class: et(e.indicator.class)
      }, null, 2)
    ])) : De("", !0),
    j("div", Ij, [
      rt(e.$slots, "default", {}, () => [
        us(ke(e.attribute.popover ? e.attribute.popover.label : "No content provided"), 1)
      ])
    ])
  ]);
}
const Lj = /* @__PURE__ */ Zi($j, [["render", Nj]]), Rj = { class: "vc-day-popover-container" }, Fj = {
  key: 0,
  class: "vc-day-popover-header"
}, Yj = /* @__PURE__ */ Re({
  __name: "CalendarDayPopover",
  setup(e) {
    const { dayPopoverId: t, displayMode: n, color: r, masks: a, locale: s } = hs();
    function l(f, h) {
      return s.value.formatDate(f, h);
    }
    function u(f) {
      return s.value.formatDate(f.date, a.value.dayPopover);
    }
    return (f, h) => (F(), Ze(Yp, {
      id: y(t),
      class: et([`vc-${y(r)}`, `vc-${y(n)}`])
    }, {
      default: Pe(({ data: { day: d, attributes: m }, hide: v }) => [
        rt(f.$slots, "default", {
          day: d,
          dayTitle: u(d),
          attributes: m,
          format: l,
          masks: y(a),
          hide: v
        }, () => [
          j("div", Rj, [
            y(a).dayPopover ? (F(), G("div", Fj, ke(u(d)), 1)) : De("", !0),
            (F(!0), G(Ke, null, Rt(m, (g) => (F(), Ze(Lj, {
              key: g.key,
              attribute: g
            }, null, 8, ["attribute"]))), 128))
          ])
        ])
      ]),
      _: 3
    }, 8, ["id", "class"]));
  }
}), Wj = Re({
  name: "Calendar",
  components: {
    CalendarHeader: dw,
    CalendarPane: gj,
    CalendarNavPopover: Mj,
    CalendarDayPopover: Yj
  },
  emits: Q9,
  props: J9,
  setup(e, { emit: t, slots: n }) {
    return ej(e, { emit: t, slots: n });
  }
}), Uj = { class: "vc-pane-header-wrapper" };
function Vj(e, t, n, r, a, s) {
  const l = Ii("CalendarHeader"), u = Ii("CalendarPane"), f = Ii("CalendarDayPopover"), h = Ii("CalendarNavPopover");
  return F(), G(Ke, null, [
    j("div", Kt({ "data-helptext": "Press the arrow keys to navigate by day, Home and End to navigate to week ends, PageUp and PageDown to navigate by month, Alt+PageUp and Alt+PageDown to navigate by year" }, e.$attrs, {
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
      onMouseup: t[0] || (t[0] = xa(() => {
      }, ["prevent"])),
      ref: "containerRef"
    }), [
      j("div", {
        class: et(["vc-pane-container", { "in-transition": e.inTransition }])
      }, [
        j("div", Uj, [
          e.firstPage ? (F(), Ze(l, {
            key: 0,
            page: e.firstPage,
            "is-lg": "",
            "hide-title": ""
          }, null, 8, ["page"])) : De("", !0)
        ]),
        Me(lo, {
          name: `vc-${e.transitionName}`,
          onBeforeEnter: e.onTransitionBeforeEnter,
          onAfterEnter: e.onTransitionAfterEnter
        }, {
          default: Pe(() => [
            (F(), G("div", {
              key: e.pages[0].id,
              class: "vc-pane-layout",
              style: Fi({
                gridTemplateColumns: `repeat(${e.columns}, 1fr)`
              })
            }, [
              (F(!0), G(Ke, null, Rt(e.pages, (d) => (F(), Ze(u, {
                key: d.id,
                page: d
              }, null, 8, ["page"]))), 128))
            ], 4))
          ]),
          _: 1
        }, 8, ["name", "onBeforeEnter", "onAfterEnter"]),
        rt(e.$slots, "footer")
      ], 2)
    ], 16),
    Me(f, null, {
      default: Pe((d) => [
        rt(e.$slots, "day-popover", ts(Mc(d)))
      ]),
      _: 3
    }),
    Me(h)
  ], 64);
}
const Bj = /* @__PURE__ */ Zi(Wj, [["render", Vj]]), Hj = { class: "vc-base-select" }, zj = ["value"], jj = ["value", "disabled"], Gj = {
  inheritAttrs: !1
}, Xo = /* @__PURE__ */ Object.assign(Gj, {
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
    return (t, n) => (F(), G("div", Hj, [
      e.showIcon ? (F(), Ze(io, {
        key: 0,
        name: "ChevronDown",
        size: e.small ? "16" : "18"
      }, null, 8, ["size"])) : De("", !0),
      j("select", Kt(t.$attrs, {
        value: e.modelValue,
        class: ["vc-focus", {
          "vc-has-icon": e.showIcon,
          "vc-align-right": e.alignRight,
          "vc-align-left": e.alignLeft,
          "vc-small": e.small
        }],
        onChange: n[0] || (n[0] = (r) => t.$emit("update:modelValue", r.target.value))
      }), [
        (F(!0), G(Ke, null, Rt(e.options, (r) => (F(), G("option", {
          key: r.value,
          value: r.value,
          disabled: r.disabled
        }, ke(r.label), 9, jj))), 128))
      ], 16, zj)
    ]));
  }
}), hw = "__vc_date_picker_context__", qj = {
  ...sw,
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
    default: () => $a("datePicker.updateOnInput")
  },
  inputDebounce: {
    type: Number,
    default: () => $a("datePicker.inputDebounce")
  },
  popover: {
    type: [Boolean, Object],
    default: !0
  },
  dragAttribute: Object,
  selectAttribute: Object,
  attributes: [Object, Array]
}, Kj = [
  "update:modelValue",
  "drag",
  "dayclick",
  "daykeydown",
  "popover-will-show",
  "popover-did-show",
  "popover-will-hide",
  "popover-did-hide"
];
function Zj(e, t) {
  const n = ow(e), { locale: r, masks: a, disabledAttribute: s } = n, { emit: l } = t, u = Q(!1), f = Q(oc()), h = Q(null), d = Q(null), m = Q(["", ""]), v = Q(null), g = Q(null);
  let w, O, D = !0;
  const b = W(() => e.isRange || e.modelModifiers.range === !0), x = W(
    () => b.value && h.value != null ? h.value.start : null
  ), k = W(
    () => b.value && h.value != null ? h.value.end : null
  ), E = W(() => e.mode.toLowerCase() === "date"), P = W(
    () => e.mode.toLowerCase() === "datetime"
  ), M = W(() => e.mode.toLowerCase() === "time"), N = W(() => !!d.value), L = W(() => {
    let V = "date";
    e.modelModifiers.number && (V = "number"), e.modelModifiers.string && (V = "string");
    const de = a.value.modelValue || "iso";
    return At({ type: V, mask: de });
  }), H = W(
    () => Zt(d.value ?? h.value)
  ), $ = W(() => M.value ? e.is24hr ? a.value.inputTime24hr : a.value.inputTime : P.value ? e.is24hr ? a.value.inputDateTime24hr : a.value.inputDateTime : a.value.input), q = W(() => /[Hh]/g.test($.value)), Y = W(
    () => /[dD]{1,2}|Do|W{1,4}|M{1,4}|YY(?:YY)?/g.test($.value)
  ), J = W(() => {
    if (q.value && Y.value)
      return "dateTime";
    if (Y.value)
      return "date";
    if (q.value)
      return "time";
  }), me = W(() => {
    var V;
    const de = ((V = v.value) == null ? void 0 : V.$el.previousElementSibling) ?? void 0;
    return bl({}, e.popover, $a("datePicker.popover"), {
      target: de
    });
  }), le = W(
    () => cw({
      ...me.value,
      id: f.value
    })
  ), pe = W(() => b.value ? {
    start: m.value[0],
    end: m.value[1]
  } : m.value[0]), Oe = W(() => {
    const V = ["start", "end"].map((de) => ({
      input: fe(de),
      change: we(de),
      keyup: ze,
      ...e.popover && le.value
    }));
    return b.value ? {
      start: V[0],
      end: V[1]
    } : V[0];
  }), Ve = W(() => {
    if (!Qe(h.value))
      return null;
    const V = {
      key: "select-drag",
      ...e.selectAttribute,
      dates: h.value,
      pinPage: !0
    }, { dot: de, bar: Ie, highlight: ut, content: Xt } = V;
    return !de && !Ie && !ut && !Xt && (V.highlight = !0), V;
  }), Fe = W(() => {
    if (!b.value || !Qe(d.value))
      return null;
    const V = {
      key: "select-drag",
      ...e.dragAttribute,
      dates: d.value
    }, { dot: de, bar: Ie, highlight: ut, content: Xt } = V;
    return !de && !Ie && !ut && !Xt && (V.highlight = {
      startEnd: {
        fillMode: "outline"
      }
    }), V;
  }), ie = W(() => {
    const V = Dr(e.attributes) ? [...e.attributes] : [];
    return Fe.value ? V.unshift(Fe.value) : Ve.value && V.unshift(Ve.value), V;
  }), Ae = W(() => At(
    e.rules === "auto" ? vt() : e.rules ?? {}
  ));
  function vt() {
    const V = {
      ms: [0, 999],
      sec: [0, 59],
      min: [0, 59],
      hr: [0, 23]
    }, de = E.value ? 0 : e.timeAccuracy;
    return [0, 1].map((Ie) => {
      switch (de) {
        case 0:
          return {
            hours: V.hr[Ie],
            minutes: V.min[Ie],
            seconds: V.sec[Ie],
            milliseconds: V.ms[Ie]
          };
        case 1:
          return {
            minutes: V.min[Ie],
            seconds: V.sec[Ie],
            milliseconds: V.ms[Ie]
          };
        case 3:
          return { milliseconds: V.ms[Ie] };
        case 4:
          return {};
        default:
          return { seconds: V.sec[Ie], milliseconds: V.ms[Ie] };
      }
    });
  }
  function At(V) {
    return Dr(V) ? V.length === 1 ? [V[0], V[0]] : V : [V, V];
  }
  function Te(V) {
    return At(V).map(
      (de, Ie) => ({
        ...de,
        rules: Ae.value[Ie]
      })
    );
  }
  function it(V) {
    return Ur(V) ? !isNaN(V) : Hs(V) ? !isNaN(V.getTime()) : ti(V) ? V !== "" : V != null;
  }
  function Qe(V) {
    return b.value ? ji(V) && it(V.start) && it(V.end) : it(V);
  }
  function ve(V, de) {
    const Ie = Hs(V), ut = Hs(de);
    return !Ie && !ut ? !0 : Ie !== ut ? !1 : V.getTime() === de.getTime();
  }
  function ce(V, de) {
    if (b.value) {
      const Ie = Qe(V), ut = Qe(de);
      return !Ie && !ut ? !0 : Ie !== ut ? !1 : ve(V.start, de.start) && ve(V.end, de.end);
    }
    return ve(V, de);
  }
  function _e(V) {
    return !Qe(V) || !s.value ? !1 : s.value.intersectsRange(r.value.range(V));
  }
  function Ce(V, de, Ie, ut) {
    if (!Qe(V))
      return null;
    if (b.value) {
      const Xt = r.value.toDate(V.start, {
        ...de[0],
        fillDate: x.value ?? void 0,
        patch: Ie
      }), qn = r.value.toDate(V.end, {
        ...de[1],
        fillDate: k.value ?? void 0,
        patch: Ie
      });
      return Pr({ start: Xt, end: qn }, ut);
    }
    return r.value.toDateOrNull(V, {
      ...de[0],
      fillDate: h.value,
      patch: Ie
    });
  }
  function te(V, de) {
    return b.value ? Qe(V) ? {
      start: r.value.fromDate(V.start, de[0]),
      end: r.value.fromDate(V.end, de[1])
    } : null : r.value.fromDate(V, de[0]);
  }
  function Ee(V, de = {}) {
    return clearTimeout(w), new Promise((Ie) => {
      const { debounce: ut = 0, ...Xt } = de;
      ut > 0 ? w = window.setTimeout(() => {
        Ie(C(V, Xt));
      }, ut) : Ie(C(V, Xt));
    });
  }
  function C(V, {
    config: de = L.value,
    patch: Ie = "dateTime",
    clearIfEqual: ut = !1,
    formatInput: Xt = !0,
    hidePopover: qn = !1,
    dragging: yn = N.value,
    targetPriority: na,
    moveToValue: ra = !1
  } = {}) {
    const ms = Te(de);
    let Ln = Ce(
      V,
      ms,
      Ie,
      na
    );
    if (_e(Ln)) {
      if (yn)
        return null;
      Ln = h.value, qn = !1;
    } else
      Ln == null && e.isRequired ? Ln = h.value : (
        // Clear value if same value was passed
        Ln != null && ce(h.value, Ln) && ut && (Ln = null)
      );
    const _i = yn ? d : h, ko = !ce(_i.value, Ln);
    _i.value = Ln, yn || (d.value = null);
    const gs = te(
      Ln,
      L.value
    );
    return ko && (D = !1, l(yn ? "drag" : "update:modelValue", gs), En(() => D = !0)), qn && !yn && kn(), Xt && A(), ra && En(() => se(na ?? "start")), gs;
  }
  function A() {
    En(() => {
      const V = Te({
        type: "string",
        mask: $.value
      }), de = te(
        d.value || h.value,
        V
      );
      b.value ? m.value = [de && de.start, de && de.end] : m.value = [de, ""];
    });
  }
  function z(V, de, Ie) {
    m.value.splice(de === "start" ? 0 : 1, 1, V);
    const ut = b.value ? {
      start: m.value[0],
      end: m.value[1] || m.value[0]
    } : V, Xt = {
      type: "string",
      mask: $.value
    };
    Ee(ut, {
      ...Ie,
      config: Xt,
      patch: J.value,
      targetPriority: de,
      moveToValue: !0
    });
  }
  function fe(V) {
    return (de) => {
      e.updateOnInput && z(de.currentTarget.value, V, {
        formatInput: !1,
        hidePopover: !1,
        debounce: e.inputDebounce
      });
    };
  }
  function we(V) {
    return (de) => {
      z(de.currentTarget.value, V, {
        formatInput: !0,
        hidePopover: !1
      });
    };
  }
  function ze(V) {
    V.key === "Escape" && Ee(h.value, {
      formatInput: !0,
      hidePopover: !0
    });
  }
  function Zt(V) {
    return b.value ? [
      V && V.start ? r.value.getDateParts(V.start) : null,
      V && V.end ? r.value.getDateParts(V.end) : null
    ] : [V ? r.value.getDateParts(V) : null];
  }
  function yt() {
    d.value = null, A();
  }
  function Mt(V) {
    l("popover-will-show", V);
  }
  function _n(V) {
    l("popover-did-show", V);
  }
  function bt(V) {
    yt(), l("popover-will-hide", V);
  }
  function Z(V) {
    l("popover-did-hide", V);
  }
  function oe(V) {
    const de = {
      patch: "date",
      formatInput: !0,
      hidePopover: !0
    };
    if (b.value) {
      const Ie = !N.value;
      Ie ? O = { start: V.startDate, end: V.endDate } : O != null && (O.end = V.date), Ee(O, {
        ...de,
        dragging: Ie
      });
    } else
      Ee(V.date, {
        ...de,
        clearIfEqual: !e.isRequired
      });
  }
  function Ht(V, de) {
    oe(V), l("dayclick", V, de);
  }
  function $t(V, de) {
    switch (de.key) {
      case " ":
      case "Enter": {
        oe(V), de.preventDefault();
        break;
      }
      case "Escape":
        kn();
    }
    l("daykeydown", V, de);
  }
  function pn(V, de) {
    !N.value || O == null || (O.end = V.date, Ee(Pr(O), {
      patch: "date",
      formatInput: !0
    }));
  }
  function ur(V = {}) {
    Eh({
      ...me.value,
      ...V,
      isInteractive: !0,
      id: f.value
    });
  }
  function kn(V = {}) {
    bc({
      hideDelay: 10,
      force: !0,
      ...me.value,
      ...V,
      id: f.value
    });
  }
  function An(V) {
    uw({
      ...me.value,
      ...V,
      isInteractive: !0,
      id: f.value
    });
  }
  function Pr(V, de) {
    const { start: Ie, end: ut } = V;
    if (Ie > ut)
      switch (de) {
        case "start":
          return { start: Ie, end: Ie };
        case "end":
          return { start: ut, end: ut };
        default:
          return { start: ut, end: Ie };
      }
    return { start: Ie, end: ut };
  }
  function Kr(V) {
    if (Qe(h.value)) {
      const de = b.value ? V ? x.value : k.value : h.value;
      return ew(de, "monthly", r.value);
    }
    return null;
  }
  async function Na(V, de = {}) {
    return g.value == null ? !1 : g.value.move(V, de);
  }
  async function ta(V, de = {}) {
    return g.value == null ? !1 : g.value.moveBy(V, de);
  }
  async function se(V, de = {}) {
    if (g.value == null)
      return !1;
    const { firstPage: Ie, lastPage: ut, move: Xt } = g.value, qn = V !== "end", yn = Kr(qn), na = qn ? 1 : -1;
    return !yn || nw(yn, Ie, ut) ? !1 : Xt(yn, {
      position: na,
      ...de
    });
  }
  Ue(
    () => e.isRange,
    (V) => {
      V && console.warn(
        "The `is-range` prop will be deprecated in future releases. Please use the `range` modifier."
      );
    },
    { immediate: !0 }
  ), Ue(
    () => $.value,
    () => A()
  ), Ue(
    () => e.modelValue,
    (V) => {
      D && C(V, {
        formatInput: !0,
        hidePopover: !1
      });
    }
  ), Ue(
    () => Ae.value,
    () => {
      ji(e.rules) && C(e.modelValue, {
        formatInput: !0,
        hidePopover: !1
      });
    }
  ), Ue(
    () => e.timezone,
    () => {
      C(h.value, { formatInput: !0 });
    }
  );
  const he = At(L.value);
  h.value = Ce(e.modelValue, he, "dateTime"), Hr(() => {
    C(e.modelValue, {
      formatInput: !0,
      hidePopover: !1
    });
  }), En(() => u.value = !0);
  const je = {
    ...n,
    showCalendar: u,
    datePickerPopoverId: f,
    popoverRef: v,
    popoverEvents: le,
    calendarRef: g,
    isRange: b,
    isTimeMode: M,
    isDateTimeMode: P,
    is24hr: wd(e, "is24hr"),
    hideTimeHeader: wd(e, "hideTimeHeader"),
    timeAccuracy: wd(e, "timeAccuracy"),
    isDragging: N,
    inputValue: pe,
    inputEvents: Oe,
    dateParts: H,
    attributes: ie,
    rules: Ae,
    move: Na,
    moveBy: ta,
    moveToValue: se,
    updateValue: Ee,
    showPopover: ur,
    hidePopover: kn,
    togglePopover: An,
    onDayClick: Ht,
    onDayKeydown: $t,
    onDayMouseEnter: pn,
    onPopoverBeforeShow: Mt,
    onPopoverAfterShow: _n,
    onPopoverBeforeHide: bt,
    onPopoverAfterHide: Z
  };
  return ii(hw, je), je;
}
function Xj() {
  const e = kt(hw);
  if (e)
    return e;
  throw new Error(
    "DatePicker context missing. Please verify this component is nested within a valid context provider."
  );
}
const Jj = [
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
], Qj = [
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
function eG(e) {
  const t = Xj(), {
    locale: n,
    isRange: r,
    isTimeMode: a,
    dateParts: s,
    rules: l,
    is24hr: u,
    hideTimeHeader: f,
    timeAccuracy: h,
    updateValue: d
  } = t;
  function m(Y) {
    Y = Object.assign(g.value, Y);
    let J = null;
    if (r.value) {
      const me = v.value ? Y : s.value[0], le = v.value ? s.value[1] : Y;
      J = { start: me, end: le };
    } else
      J = Y;
    d(J, {
      patch: "time",
      targetPriority: v.value ? "start" : "end",
      moveToValue: !0
    });
  }
  const v = W(() => e.position === 0), g = W(
    () => s.value[e.position] || { isValid: !1 }
  ), w = W(() => Kb(g.value)), O = W(() => !!g.value.isValid), D = W(() => !f.value && O.value), b = W(() => {
    if (!w.value)
      return null;
    let Y = n.value.toDate(g.value);
    return g.value.hours === 24 && (Y = new Date(Y.getTime() - 1)), Y;
  }), x = W({
    get() {
      return g.value.hours;
    },
    set(Y) {
      m({ hours: Y });
    }
  }), k = W({
    get() {
      return g.value.minutes;
    },
    set(Y) {
      m({ minutes: Y });
    }
  }), E = W({
    get() {
      return g.value.seconds;
    },
    set(Y) {
      m({ seconds: Y });
    }
  }), P = W({
    get() {
      return g.value.milliseconds;
    },
    set(Y) {
      m({ milliseconds: Y });
    }
  }), M = W({
    get() {
      return g.value.hours < 12;
    },
    set(Y) {
      Y = String(Y).toLowerCase() == "true";
      let J = x.value;
      Y && J >= 12 ? J -= 12 : !Y && J < 12 && (J += 12), m({ hours: J });
    }
  }), N = W(
    () => P9(g.value, l.value[e.position])
  ), L = W(() => Jj.filter(
    (Y) => N.value.hours.some((J) => J.value === Y.value)
  )), H = W(() => Qj.filter(
    (Y) => N.value.hours.some((J) => J.value === Y.value)
  )), $ = W(() => u.value ? N.value.hours : M.value ? L.value : H.value), q = W(() => {
    const Y = [];
    return Ni(L.value) && Y.push({ value: !0, label: "AM" }), Ni(H.value) && Y.push({ value: !1, label: "PM" }), Y;
  });
  return {
    ...t,
    showHeader: D,
    timeAccuracy: h,
    parts: g,
    isValid: O,
    date: b,
    hours: x,
    minutes: k,
    seconds: E,
    milliseconds: P,
    options: N,
    hourOptions: $,
    isAM: M,
    isAMOptions: q,
    is24hr: u
  };
}
const tG = {
  key: 0,
  class: "vc-time-header"
}, nG = { class: "vc-time-weekday" }, rG = { class: "vc-time-month" }, iG = { class: "vc-time-day" }, aG = { class: "vc-time-year" }, sG = { class: "vc-time-select-group" }, oG = /* @__PURE__ */ j("span", { class: "vc-time-colon" }, ":", -1), lG = /* @__PURE__ */ j("span", { class: "vc-time-colon" }, ":", -1), uG = /* @__PURE__ */ j("span", { class: "vc-time-decimal" }, ".", -1), cG = /* @__PURE__ */ Re({
  __name: "TimePicker",
  props: {
    position: null
  },
  setup(e, { expose: t }) {
    const r = eG(e);
    t(r);
    const {
      locale: a,
      isValid: s,
      date: l,
      hours: u,
      minutes: f,
      seconds: h,
      milliseconds: d,
      options: m,
      hourOptions: v,
      isTimeMode: g,
      isAM: w,
      isAMOptions: O,
      is24hr: D,
      showHeader: b,
      timeAccuracy: x
    } = r;
    return (k, E) => (F(), G("div", {
      class: et(["vc-time-picker", [{ "vc-invalid": !y(s), "vc-attached": !y(g) }]])
    }, [
      rt(k.$slots, "time-header", {}, () => [
        y(b) && y(l) ? (F(), G("div", tG, [
          j("span", nG, ke(y(a).formatDate(y(l), "WWW")), 1),
          j("span", rG, ke(y(a).formatDate(y(l), "MMM")), 1),
          j("span", iG, ke(y(a).formatDate(y(l), "D")), 1),
          j("span", aG, ke(y(a).formatDate(y(l), "YYYY")), 1)
        ])) : De("", !0)
      ]),
      j("div", sG, [
        Me(io, {
          name: "Clock",
          size: "17"
        }),
        Me(Xo, {
          modelValue: y(u),
          "onUpdate:modelValue": E[0] || (E[0] = (P) => un(u) ? u.value = P : null),
          modelModifiers: { number: !0 },
          options: y(v),
          "align-right": ""
        }, null, 8, ["modelValue", "options"]),
        y(x) > 1 ? (F(), G(Ke, { key: 0 }, [
          oG,
          Me(Xo, {
            modelValue: y(f),
            "onUpdate:modelValue": E[1] || (E[1] = (P) => un(f) ? f.value = P : null),
            modelModifiers: { number: !0 },
            options: y(m).minutes,
            "align-left": y(x) === 2
          }, null, 8, ["modelValue", "options", "align-left"])
        ], 64)) : De("", !0),
        y(x) > 2 ? (F(), G(Ke, { key: 1 }, [
          lG,
          Me(Xo, {
            modelValue: y(h),
            "onUpdate:modelValue": E[2] || (E[2] = (P) => un(h) ? h.value = P : null),
            modelModifiers: { number: !0 },
            options: y(m).seconds,
            "align-left": y(x) === 3
          }, null, 8, ["modelValue", "options", "align-left"])
        ], 64)) : De("", !0),
        y(x) > 3 ? (F(), G(Ke, { key: 2 }, [
          uG,
          Me(Xo, {
            modelValue: y(d),
            "onUpdate:modelValue": E[3] || (E[3] = (P) => un(d) ? d.value = P : null),
            modelModifiers: { number: !0 },
            options: y(m).milliseconds,
            "align-left": ""
          }, null, 8, ["modelValue", "options"])
        ], 64)) : De("", !0),
        y(D) ? De("", !0) : (F(), Ze(Xo, {
          key: 3,
          modelValue: y(w),
          "onUpdate:modelValue": E[4] || (E[4] = (P) => un(w) ? w.value = P : null),
          options: y(O)
        }, null, 8, ["modelValue", "options"]))
      ])
    ], 2));
  }
}), pw = Re({
  name: "DatePicker",
  inheritAttrs: !1,
  emits: Kj,
  props: qj,
  setup(e, t) {
    const n = Zj(e, t), { slots: r, attrs: a } = t, {
      isTimeMode: s,
      isRange: l,
      isDateTimeMode: u,
      color: f,
      displayMode: h,
      dateParts: d,
      datePickerPopoverId: m,
      attributes: v,
      calendarRef: g,
      popoverRef: w,
      showCalendar: O,
      onDayClick: D,
      onDayMouseEnter: b,
      onDayKeydown: x,
      onPopoverBeforeShow: k,
      onPopoverAfterShow: E,
      onPopoverBeforeHide: P,
      onPopoverAfterHide: M
    } = n;
    t.expose(n);
    const N = xl(Yb(n, "calendarRef", "popoverRef")), L = () => (l.value ? [0, 1] : [0]).map((Y) => wr(cG, { position: Y })), H = () => {
      if (!d.value)
        return null;
      const q = u.value ? { ...r, footer: L } : r;
      return wr(
        Bj,
        {
          ...a,
          attributes: v.value,
          ref: g,
          onDayclick: D,
          onDaymouseenter: b,
          onDaykeydown: x
        },
        q
      );
    }, $ = () => {
      if (s.value)
        return wr(
          "div",
          {
            class: `vc-container vc-bordered vc-${f.value} vc-${h.value}`
          },
          [L()]
        );
      if (O.value)
        return H();
    };
    return r.default ? () => [
      // Popover trigger
      r.default(N),
      // Popover content
      wr(
        Yp,
        {
          id: m.value,
          placement: "bottom-start",
          class: `vc-date-picker-content vc-${f.value} vc-${h.value}`,
          ref: w,
          "onBefore-show": k,
          "onAfter-show": E,
          "onBefore-hide": P,
          "onAfter-hide": M
        },
        {
          default: $
        }
      )
    ] : $;
  }
});
let mw = "";
function fG(e) {
  mw = e;
}
function vw() {
  return mw;
}
function dG(e) {
  return Uh() ? (Vh(e), !0) : !1;
}
function wc(e) {
  return typeof e == "function" ? e() : y(e);
}
const gw = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const hG = Object.prototype.toString, pG = (e) => hG.call(e) === "[object Object]", wl = () => {
}, mG = /* @__PURE__ */ vG();
function vG() {
  var e, t;
  return gw && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function gG(e, t) {
  function n(...r) {
    return new Promise((a, s) => {
      Promise.resolve(e(() => t.apply(this, r), { fn: t, thisArg: this, args: r })).then(a).catch(s);
    });
  }
  return n;
}
const _G = (e) => e();
function yG(e, t = {}) {
  let n, r, a = wl;
  const s = (u) => {
    clearTimeout(u), a(), a = wl;
  };
  return (u) => {
    const f = wc(e), h = wc(t.maxWait);
    return n && s(n), f <= 0 || h !== void 0 && h <= 0 ? (r && (s(r), r = null), Promise.resolve(u())) : new Promise((d, m) => {
      a = t.rejectOnCancel ? m : d, h && !r && (r = setTimeout(() => {
        n && s(n), r = null, d(u());
      }, h)), n = setTimeout(() => {
        r && s(r), r = null, d(u());
      }, f);
    });
  };
}
function bG(e, t, n = {}) {
  const {
    eventFilter: r = _G,
    ...a
  } = n;
  return Ue(
    e,
    gG(
      r,
      t
    ),
    a
  );
}
function wG(e, t, n = {}) {
  const {
    debounce: r = 0,
    maxWait: a = void 0,
    ...s
  } = n;
  return bG(
    e,
    t,
    {
      ...s,
      eventFilter: yG(r, { maxWait: a })
    }
  );
}
function il(e) {
  var t;
  const n = wc(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const _w = gw ? window : void 0;
function Nd(...e) {
  let t, n, r, a;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, r, a] = e, t = _w) : [t, n, r, a] = e, !t)
    return wl;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const s = [], l = () => {
    s.forEach((d) => d()), s.length = 0;
  }, u = (d, m, v, g) => (d.addEventListener(m, v, g), () => d.removeEventListener(m, v, g)), f = Ue(
    () => [il(t), wc(a)],
    ([d, m]) => {
      if (l(), !d)
        return;
      const v = pG(m) ? { ...m } : m;
      s.push(
        ...n.flatMap((g) => r.map((w) => u(d, g, w, v)))
      );
    },
    { immediate: !0, flush: "post" }
  ), h = () => {
    f(), l();
  };
  return dG(h), h;
}
let jy = !1;
function yw(e, t, n = {}) {
  const { window: r = _w, ignore: a = [], capture: s = !0, detectIframe: l = !1 } = n;
  if (!r)
    return;
  mG && !jy && (jy = !0, Array.from(r.document.body.children).forEach((v) => v.addEventListener("click", wl)), r.document.documentElement.addEventListener("click", wl));
  let u = !0;
  const f = (v) => a.some((g) => {
    if (typeof g == "string")
      return Array.from(r.document.querySelectorAll(g)).some((w) => w === v.target || v.composedPath().includes(w));
    {
      const w = il(g);
      return w && (v.target === w || v.composedPath().includes(w));
    }
  }), d = [
    Nd(r, "click", (v) => {
      const g = il(e);
      if (!(!g || g === v.target || v.composedPath().includes(g))) {
        if (v.detail === 0 && (u = !f(v)), !u) {
          u = !0;
          return;
        }
        t(v);
      }
    }, { passive: !0, capture: s }),
    Nd(r, "pointerdown", (v) => {
      const g = il(e);
      u = !f(v) && !!(g && !v.composedPath().includes(g));
    }, { passive: !0 }),
    l && Nd(r, "blur", (v) => {
      setTimeout(() => {
        var g;
        const w = il(e);
        ((g = r.document.activeElement) == null ? void 0 : g.tagName) === "IFRAME" && !(w != null && w.contains(r.document.activeElement)) && t(v);
      }, 0);
    })
  ].filter(Boolean);
  return () => d.forEach((v) => v());
}
var Jo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Oc = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
Oc.exports;
(function(e, t) {
  (function() {
    var n, r = "4.17.21", a = 200, s = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", l = "Expected a function", u = "Invalid `variable` option passed into `_.template`", f = "__lodash_hash_undefined__", h = 500, d = "__lodash_placeholder__", m = 1, v = 2, g = 4, w = 1, O = 2, D = 1, b = 2, x = 4, k = 8, E = 16, P = 32, M = 64, N = 128, L = 256, H = 512, $ = 30, q = "...", Y = 800, J = 16, me = 1, le = 2, pe = 3, Oe = 1 / 0, Ve = 9007199254740991, Fe = 17976931348623157e292, ie = 0 / 0, Ae = 4294967295, vt = Ae - 1, At = Ae >>> 1, Te = [
      ["ary", N],
      ["bind", D],
      ["bindKey", b],
      ["curry", k],
      ["curryRight", E],
      ["flip", H],
      ["partial", P],
      ["partialRight", M],
      ["rearg", L]
    ], it = "[object Arguments]", Qe = "[object Array]", ve = "[object AsyncFunction]", ce = "[object Boolean]", _e = "[object Date]", Ce = "[object DOMException]", te = "[object Error]", Ee = "[object Function]", C = "[object GeneratorFunction]", A = "[object Map]", z = "[object Number]", fe = "[object Null]", we = "[object Object]", ze = "[object Promise]", Zt = "[object Proxy]", yt = "[object RegExp]", Mt = "[object Set]", _n = "[object String]", bt = "[object Symbol]", Z = "[object Undefined]", oe = "[object WeakMap]", Ht = "[object WeakSet]", $t = "[object ArrayBuffer]", pn = "[object DataView]", ur = "[object Float32Array]", kn = "[object Float64Array]", An = "[object Int8Array]", Pr = "[object Int16Array]", Kr = "[object Int32Array]", Na = "[object Uint8Array]", ta = "[object Uint8ClampedArray]", se = "[object Uint16Array]", he = "[object Uint32Array]", je = /\b__p \+= '';/g, V = /\b(__p \+=) '' \+/g, de = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Ie = /&(?:amp|lt|gt|quot|#39);/g, ut = /[&<>"']/g, Xt = RegExp(Ie.source), qn = RegExp(ut.source), yn = /<%-([\s\S]+?)%>/g, na = /<%([\s\S]+?)%>/g, ra = /<%=([\s\S]+?)%>/g, ms = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ln = /^\w*$/, vs = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, _i = /[\\^$.*+?()[\]{}|]/g, ko = RegExp(_i.source), gs = /^\s+/, WO = /\s/, UO = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, VO = /\{\n\/\* \[wrapped with (.+)\] \*/, BO = /,? & /, HO = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, zO = /[()=,{}\[\]\/\s]/, jO = /\\(\\)?/g, GO = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, pm = /\w*$/, qO = /^[-+]0x[0-9a-f]+$/i, KO = /^0b[01]+$/i, ZO = /^\[object .+?Constructor\]$/, XO = /^0o[0-7]+$/i, JO = /^(?:0|[1-9]\d*)$/, QO = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Fl = /($^)/, eE = /['\n\r\u2028\u2029\\]/g, Yl = "\\ud800-\\udfff", tE = "\\u0300-\\u036f", nE = "\\ufe20-\\ufe2f", rE = "\\u20d0-\\u20ff", mm = tE + nE + rE, vm = "\\u2700-\\u27bf", gm = "a-z\\xdf-\\xf6\\xf8-\\xff", iE = "\\xac\\xb1\\xd7\\xf7", aE = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", sE = "\\u2000-\\u206f", oE = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", _m = "A-Z\\xc0-\\xd6\\xd8-\\xde", ym = "\\ufe0e\\ufe0f", bm = iE + aE + sE + oE, ff = "['’]", lE = "[" + Yl + "]", wm = "[" + bm + "]", Wl = "[" + mm + "]", Om = "\\d+", uE = "[" + vm + "]", Em = "[" + gm + "]", Dm = "[^" + Yl + bm + Om + vm + gm + _m + "]", df = "\\ud83c[\\udffb-\\udfff]", cE = "(?:" + Wl + "|" + df + ")", Sm = "[^" + Yl + "]", hf = "(?:\\ud83c[\\udde6-\\uddff]){2}", pf = "[\\ud800-\\udbff][\\udc00-\\udfff]", _s = "[" + _m + "]", xm = "\\u200d", Tm = "(?:" + Em + "|" + Dm + ")", fE = "(?:" + _s + "|" + Dm + ")", km = "(?:" + ff + "(?:d|ll|m|re|s|t|ve))?", Am = "(?:" + ff + "(?:D|LL|M|RE|S|T|VE))?", Mm = cE + "?", $m = "[" + ym + "]?", dE = "(?:" + xm + "(?:" + [Sm, hf, pf].join("|") + ")" + $m + Mm + ")*", hE = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", pE = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Pm = $m + Mm + dE, mE = "(?:" + [uE, hf, pf].join("|") + ")" + Pm, vE = "(?:" + [Sm + Wl + "?", Wl, hf, pf, lE].join("|") + ")", gE = RegExp(ff, "g"), _E = RegExp(Wl, "g"), mf = RegExp(df + "(?=" + df + ")|" + vE + Pm, "g"), yE = RegExp([
      _s + "?" + Em + "+" + km + "(?=" + [wm, _s, "$"].join("|") + ")",
      fE + "+" + Am + "(?=" + [wm, _s + Tm, "$"].join("|") + ")",
      _s + "?" + Tm + "+" + km,
      _s + "+" + Am,
      pE,
      hE,
      Om,
      mE
    ].join("|"), "g"), bE = RegExp("[" + xm + Yl + mm + ym + "]"), wE = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, OE = [
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
    ], EE = -1, Yt = {};
    Yt[ur] = Yt[kn] = Yt[An] = Yt[Pr] = Yt[Kr] = Yt[Na] = Yt[ta] = Yt[se] = Yt[he] = !0, Yt[it] = Yt[Qe] = Yt[$t] = Yt[ce] = Yt[pn] = Yt[_e] = Yt[te] = Yt[Ee] = Yt[A] = Yt[z] = Yt[we] = Yt[yt] = Yt[Mt] = Yt[_n] = Yt[oe] = !1;
    var Lt = {};
    Lt[it] = Lt[Qe] = Lt[$t] = Lt[pn] = Lt[ce] = Lt[_e] = Lt[ur] = Lt[kn] = Lt[An] = Lt[Pr] = Lt[Kr] = Lt[A] = Lt[z] = Lt[we] = Lt[yt] = Lt[Mt] = Lt[_n] = Lt[bt] = Lt[Na] = Lt[ta] = Lt[se] = Lt[he] = !0, Lt[te] = Lt[Ee] = Lt[oe] = !1;
    var DE = {
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
    }, SE = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, xE = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, TE = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, kE = parseFloat, AE = parseInt, Cm = typeof Jo == "object" && Jo && Jo.Object === Object && Jo, ME = typeof self == "object" && self && self.Object === Object && self, mn = Cm || ME || Function("return this")(), vf = t && !t.nodeType && t, La = vf && !0 && e && !e.nodeType && e, Im = La && La.exports === vf, gf = Im && Cm.process, cr = function() {
      try {
        var U = La && La.require && La.require("util").types;
        return U || gf && gf.binding && gf.binding("util");
      } catch {
      }
    }(), Nm = cr && cr.isArrayBuffer, Lm = cr && cr.isDate, Rm = cr && cr.isMap, Fm = cr && cr.isRegExp, Ym = cr && cr.isSet, Wm = cr && cr.isTypedArray;
    function Kn(U, X, K) {
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
    function $E(U, X, K, Se) {
      for (var Xe = -1, Dt = U == null ? 0 : U.length; ++Xe < Dt; ) {
        var sn = U[Xe];
        X(Se, sn, K(sn), U);
      }
      return Se;
    }
    function fr(U, X) {
      for (var K = -1, Se = U == null ? 0 : U.length; ++K < Se && X(U[K], K, U) !== !1; )
        ;
      return U;
    }
    function PE(U, X) {
      for (var K = U == null ? 0 : U.length; K-- && X(U[K], K, U) !== !1; )
        ;
      return U;
    }
    function Um(U, X) {
      for (var K = -1, Se = U == null ? 0 : U.length; ++K < Se; )
        if (!X(U[K], K, U))
          return !1;
      return !0;
    }
    function ia(U, X) {
      for (var K = -1, Se = U == null ? 0 : U.length, Xe = 0, Dt = []; ++K < Se; ) {
        var sn = U[K];
        X(sn, K, U) && (Dt[Xe++] = sn);
      }
      return Dt;
    }
    function Ul(U, X) {
      var K = U == null ? 0 : U.length;
      return !!K && ys(U, X, 0) > -1;
    }
    function _f(U, X, K) {
      for (var Se = -1, Xe = U == null ? 0 : U.length; ++Se < Xe; )
        if (K(X, U[Se]))
          return !0;
      return !1;
    }
    function zt(U, X) {
      for (var K = -1, Se = U == null ? 0 : U.length, Xe = Array(Se); ++K < Se; )
        Xe[K] = X(U[K], K, U);
      return Xe;
    }
    function aa(U, X) {
      for (var K = -1, Se = X.length, Xe = U.length; ++K < Se; )
        U[Xe + K] = X[K];
      return U;
    }
    function yf(U, X, K, Se) {
      var Xe = -1, Dt = U == null ? 0 : U.length;
      for (Se && Dt && (K = U[++Xe]); ++Xe < Dt; )
        K = X(K, U[Xe], Xe, U);
      return K;
    }
    function CE(U, X, K, Se) {
      var Xe = U == null ? 0 : U.length;
      for (Se && Xe && (K = U[--Xe]); Xe--; )
        K = X(K, U[Xe], Xe, U);
      return K;
    }
    function bf(U, X) {
      for (var K = -1, Se = U == null ? 0 : U.length; ++K < Se; )
        if (X(U[K], K, U))
          return !0;
      return !1;
    }
    var IE = wf("length");
    function NE(U) {
      return U.split("");
    }
    function LE(U) {
      return U.match(HO) || [];
    }
    function Vm(U, X, K) {
      var Se;
      return K(U, function(Xe, Dt, sn) {
        if (X(Xe, Dt, sn))
          return Se = Dt, !1;
      }), Se;
    }
    function Vl(U, X, K, Se) {
      for (var Xe = U.length, Dt = K + (Se ? 1 : -1); Se ? Dt-- : ++Dt < Xe; )
        if (X(U[Dt], Dt, U))
          return Dt;
      return -1;
    }
    function ys(U, X, K) {
      return X === X ? qE(U, X, K) : Vl(U, Bm, K);
    }
    function RE(U, X, K, Se) {
      for (var Xe = K - 1, Dt = U.length; ++Xe < Dt; )
        if (Se(U[Xe], X))
          return Xe;
      return -1;
    }
    function Bm(U) {
      return U !== U;
    }
    function Hm(U, X) {
      var K = U == null ? 0 : U.length;
      return K ? Ef(U, X) / K : ie;
    }
    function wf(U) {
      return function(X) {
        return X == null ? n : X[U];
      };
    }
    function Of(U) {
      return function(X) {
        return U == null ? n : U[X];
      };
    }
    function zm(U, X, K, Se, Xe) {
      return Xe(U, function(Dt, sn, It) {
        K = Se ? (Se = !1, Dt) : X(K, Dt, sn, It);
      }), K;
    }
    function FE(U, X) {
      var K = U.length;
      for (U.sort(X); K--; )
        U[K] = U[K].value;
      return U;
    }
    function Ef(U, X) {
      for (var K, Se = -1, Xe = U.length; ++Se < Xe; ) {
        var Dt = X(U[Se]);
        Dt !== n && (K = K === n ? Dt : K + Dt);
      }
      return K;
    }
    function Df(U, X) {
      for (var K = -1, Se = Array(U); ++K < U; )
        Se[K] = X(K);
      return Se;
    }
    function YE(U, X) {
      return zt(X, function(K) {
        return [K, U[K]];
      });
    }
    function jm(U) {
      return U && U.slice(0, Zm(U) + 1).replace(gs, "");
    }
    function Zn(U) {
      return function(X) {
        return U(X);
      };
    }
    function Sf(U, X) {
      return zt(X, function(K) {
        return U[K];
      });
    }
    function Ao(U, X) {
      return U.has(X);
    }
    function Gm(U, X) {
      for (var K = -1, Se = U.length; ++K < Se && ys(X, U[K], 0) > -1; )
        ;
      return K;
    }
    function qm(U, X) {
      for (var K = U.length; K-- && ys(X, U[K], 0) > -1; )
        ;
      return K;
    }
    function WE(U, X) {
      for (var K = U.length, Se = 0; K--; )
        U[K] === X && ++Se;
      return Se;
    }
    var UE = Of(DE), VE = Of(SE);
    function BE(U) {
      return "\\" + TE[U];
    }
    function HE(U, X) {
      return U == null ? n : U[X];
    }
    function bs(U) {
      return bE.test(U);
    }
    function zE(U) {
      return wE.test(U);
    }
    function jE(U) {
      for (var X, K = []; !(X = U.next()).done; )
        K.push(X.value);
      return K;
    }
    function xf(U) {
      var X = -1, K = Array(U.size);
      return U.forEach(function(Se, Xe) {
        K[++X] = [Xe, Se];
      }), K;
    }
    function Km(U, X) {
      return function(K) {
        return U(X(K));
      };
    }
    function sa(U, X) {
      for (var K = -1, Se = U.length, Xe = 0, Dt = []; ++K < Se; ) {
        var sn = U[K];
        (sn === X || sn === d) && (U[K] = d, Dt[Xe++] = K);
      }
      return Dt;
    }
    function Bl(U) {
      var X = -1, K = Array(U.size);
      return U.forEach(function(Se) {
        K[++X] = Se;
      }), K;
    }
    function GE(U) {
      var X = -1, K = Array(U.size);
      return U.forEach(function(Se) {
        K[++X] = [Se, Se];
      }), K;
    }
    function qE(U, X, K) {
      for (var Se = K - 1, Xe = U.length; ++Se < Xe; )
        if (U[Se] === X)
          return Se;
      return -1;
    }
    function KE(U, X, K) {
      for (var Se = K + 1; Se--; )
        if (U[Se] === X)
          return Se;
      return Se;
    }
    function ws(U) {
      return bs(U) ? XE(U) : IE(U);
    }
    function Cr(U) {
      return bs(U) ? JE(U) : NE(U);
    }
    function Zm(U) {
      for (var X = U.length; X-- && WO.test(U.charAt(X)); )
        ;
      return X;
    }
    var ZE = Of(xE);
    function XE(U) {
      for (var X = mf.lastIndex = 0; mf.test(U); )
        ++X;
      return X;
    }
    function JE(U) {
      return U.match(mf) || [];
    }
    function QE(U) {
      return U.match(yE) || [];
    }
    var eD = function U(X) {
      X = X == null ? mn : Os.defaults(mn.Object(), X, Os.pick(mn, OE));
      var K = X.Array, Se = X.Date, Xe = X.Error, Dt = X.Function, sn = X.Math, It = X.Object, Tf = X.RegExp, tD = X.String, dr = X.TypeError, Hl = K.prototype, nD = Dt.prototype, Es = It.prototype, zl = X["__core-js_shared__"], jl = nD.toString, Tt = Es.hasOwnProperty, rD = 0, Xm = function() {
        var i = /[^.]+$/.exec(zl && zl.keys && zl.keys.IE_PROTO || "");
        return i ? "Symbol(src)_1." + i : "";
      }(), Gl = Es.toString, iD = jl.call(It), aD = mn._, sD = Tf(
        "^" + jl.call(Tt).replace(_i, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), ql = Im ? X.Buffer : n, oa = X.Symbol, Kl = X.Uint8Array, Jm = ql ? ql.allocUnsafe : n, Zl = Km(It.getPrototypeOf, It), Qm = It.create, ev = Es.propertyIsEnumerable, Xl = Hl.splice, tv = oa ? oa.isConcatSpreadable : n, Mo = oa ? oa.iterator : n, Ra = oa ? oa.toStringTag : n, Jl = function() {
        try {
          var i = Va(It, "defineProperty");
          return i({}, "", {}), i;
        } catch {
        }
      }(), oD = X.clearTimeout !== mn.clearTimeout && X.clearTimeout, lD = Se && Se.now !== mn.Date.now && Se.now, uD = X.setTimeout !== mn.setTimeout && X.setTimeout, Ql = sn.ceil, eu = sn.floor, kf = It.getOwnPropertySymbols, cD = ql ? ql.isBuffer : n, nv = X.isFinite, fD = Hl.join, dD = Km(It.keys, It), on = sn.max, bn = sn.min, hD = Se.now, pD = X.parseInt, rv = sn.random, mD = Hl.reverse, Af = Va(X, "DataView"), $o = Va(X, "Map"), Mf = Va(X, "Promise"), Ds = Va(X, "Set"), Po = Va(X, "WeakMap"), Co = Va(It, "create"), tu = Po && new Po(), Ss = {}, vD = Ba(Af), gD = Ba($o), _D = Ba(Mf), yD = Ba(Ds), bD = Ba(Po), nu = oa ? oa.prototype : n, Io = nu ? nu.valueOf : n, iv = nu ? nu.toString : n;
      function S(i) {
        if (Jt(i) && !Je(i) && !(i instanceof ht)) {
          if (i instanceof hr)
            return i;
          if (Tt.call(i, "__wrapped__"))
            return ag(i);
        }
        return new hr(i);
      }
      var xs = function() {
        function i() {
        }
        return function(o) {
          if (!qt(o))
            return {};
          if (Qm)
            return Qm(o);
          i.prototype = o;
          var c = new i();
          return i.prototype = n, c;
        };
      }();
      function ru() {
      }
      function hr(i, o) {
        this.__wrapped__ = i, this.__actions__ = [], this.__chain__ = !!o, this.__index__ = 0, this.__values__ = n;
      }
      S.templateSettings = {
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
        evaluate: na,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: ra,
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
          _: S
        }
      }, S.prototype = ru.prototype, S.prototype.constructor = S, hr.prototype = xs(ru.prototype), hr.prototype.constructor = hr;
      function ht(i) {
        this.__wrapped__ = i, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Ae, this.__views__ = [];
      }
      function wD() {
        var i = new ht(this.__wrapped__);
        return i.__actions__ = Rn(this.__actions__), i.__dir__ = this.__dir__, i.__filtered__ = this.__filtered__, i.__iteratees__ = Rn(this.__iteratees__), i.__takeCount__ = this.__takeCount__, i.__views__ = Rn(this.__views__), i;
      }
      function OD() {
        if (this.__filtered__) {
          var i = new ht(this);
          i.__dir__ = -1, i.__filtered__ = !0;
        } else
          i = this.clone(), i.__dir__ *= -1;
        return i;
      }
      function ED() {
        var i = this.__wrapped__.value(), o = this.__dir__, c = Je(i), p = o < 0, _ = c ? i.length : 0, T = NS(0, _, this.__views__), I = T.start, R = T.end, B = R - I, ee = p ? R : I - 1, ne = this.__iteratees__, ae = ne.length, ye = 0, $e = bn(B, this.__takeCount__);
        if (!c || !p && _ == B && $e == B)
          return kv(i, this.__actions__);
        var Be = [];
        e:
          for (; B-- && ye < $e; ) {
            ee += o;
            for (var at = -1, He = i[ee]; ++at < ae; ) {
              var dt = ne[at], pt = dt.iteratee, Qn = dt.type, Pn = pt(He);
              if (Qn == le)
                He = Pn;
              else if (!Pn) {
                if (Qn == me)
                  continue e;
                break e;
              }
            }
            Be[ye++] = He;
          }
        return Be;
      }
      ht.prototype = xs(ru.prototype), ht.prototype.constructor = ht;
      function Fa(i) {
        var o = -1, c = i == null ? 0 : i.length;
        for (this.clear(); ++o < c; ) {
          var p = i[o];
          this.set(p[0], p[1]);
        }
      }
      function DD() {
        this.__data__ = Co ? Co(null) : {}, this.size = 0;
      }
      function SD(i) {
        var o = this.has(i) && delete this.__data__[i];
        return this.size -= o ? 1 : 0, o;
      }
      function xD(i) {
        var o = this.__data__;
        if (Co) {
          var c = o[i];
          return c === f ? n : c;
        }
        return Tt.call(o, i) ? o[i] : n;
      }
      function TD(i) {
        var o = this.__data__;
        return Co ? o[i] !== n : Tt.call(o, i);
      }
      function kD(i, o) {
        var c = this.__data__;
        return this.size += this.has(i) ? 0 : 1, c[i] = Co && o === n ? f : o, this;
      }
      Fa.prototype.clear = DD, Fa.prototype.delete = SD, Fa.prototype.get = xD, Fa.prototype.has = TD, Fa.prototype.set = kD;
      function yi(i) {
        var o = -1, c = i == null ? 0 : i.length;
        for (this.clear(); ++o < c; ) {
          var p = i[o];
          this.set(p[0], p[1]);
        }
      }
      function AD() {
        this.__data__ = [], this.size = 0;
      }
      function MD(i) {
        var o = this.__data__, c = iu(o, i);
        if (c < 0)
          return !1;
        var p = o.length - 1;
        return c == p ? o.pop() : Xl.call(o, c, 1), --this.size, !0;
      }
      function $D(i) {
        var o = this.__data__, c = iu(o, i);
        return c < 0 ? n : o[c][1];
      }
      function PD(i) {
        return iu(this.__data__, i) > -1;
      }
      function CD(i, o) {
        var c = this.__data__, p = iu(c, i);
        return p < 0 ? (++this.size, c.push([i, o])) : c[p][1] = o, this;
      }
      yi.prototype.clear = AD, yi.prototype.delete = MD, yi.prototype.get = $D, yi.prototype.has = PD, yi.prototype.set = CD;
      function bi(i) {
        var o = -1, c = i == null ? 0 : i.length;
        for (this.clear(); ++o < c; ) {
          var p = i[o];
          this.set(p[0], p[1]);
        }
      }
      function ID() {
        this.size = 0, this.__data__ = {
          hash: new Fa(),
          map: new ($o || yi)(),
          string: new Fa()
        };
      }
      function ND(i) {
        var o = vu(this, i).delete(i);
        return this.size -= o ? 1 : 0, o;
      }
      function LD(i) {
        return vu(this, i).get(i);
      }
      function RD(i) {
        return vu(this, i).has(i);
      }
      function FD(i, o) {
        var c = vu(this, i), p = c.size;
        return c.set(i, o), this.size += c.size == p ? 0 : 1, this;
      }
      bi.prototype.clear = ID, bi.prototype.delete = ND, bi.prototype.get = LD, bi.prototype.has = RD, bi.prototype.set = FD;
      function Ya(i) {
        var o = -1, c = i == null ? 0 : i.length;
        for (this.__data__ = new bi(); ++o < c; )
          this.add(i[o]);
      }
      function YD(i) {
        return this.__data__.set(i, f), this;
      }
      function WD(i) {
        return this.__data__.has(i);
      }
      Ya.prototype.add = Ya.prototype.push = YD, Ya.prototype.has = WD;
      function Ir(i) {
        var o = this.__data__ = new yi(i);
        this.size = o.size;
      }
      function UD() {
        this.__data__ = new yi(), this.size = 0;
      }
      function VD(i) {
        var o = this.__data__, c = o.delete(i);
        return this.size = o.size, c;
      }
      function BD(i) {
        return this.__data__.get(i);
      }
      function HD(i) {
        return this.__data__.has(i);
      }
      function zD(i, o) {
        var c = this.__data__;
        if (c instanceof yi) {
          var p = c.__data__;
          if (!$o || p.length < a - 1)
            return p.push([i, o]), this.size = ++c.size, this;
          c = this.__data__ = new bi(p);
        }
        return c.set(i, o), this.size = c.size, this;
      }
      Ir.prototype.clear = UD, Ir.prototype.delete = VD, Ir.prototype.get = BD, Ir.prototype.has = HD, Ir.prototype.set = zD;
      function av(i, o) {
        var c = Je(i), p = !c && Ha(i), _ = !c && !p && da(i), T = !c && !p && !_ && Ms(i), I = c || p || _ || T, R = I ? Df(i.length, tD) : [], B = R.length;
        for (var ee in i)
          (o || Tt.call(i, ee)) && !(I && // Safari 9 has enumerable `arguments.length` in strict mode.
          (ee == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          _ && (ee == "offset" || ee == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          T && (ee == "buffer" || ee == "byteLength" || ee == "byteOffset") || // Skip index properties.
          Di(ee, B))) && R.push(ee);
        return R;
      }
      function sv(i) {
        var o = i.length;
        return o ? i[Uf(0, o - 1)] : n;
      }
      function jD(i, o) {
        return gu(Rn(i), Wa(o, 0, i.length));
      }
      function GD(i) {
        return gu(Rn(i));
      }
      function $f(i, o, c) {
        (c !== n && !Nr(i[o], c) || c === n && !(o in i)) && wi(i, o, c);
      }
      function No(i, o, c) {
        var p = i[o];
        (!(Tt.call(i, o) && Nr(p, c)) || c === n && !(o in i)) && wi(i, o, c);
      }
      function iu(i, o) {
        for (var c = i.length; c--; )
          if (Nr(i[c][0], o))
            return c;
        return -1;
      }
      function qD(i, o, c, p) {
        return la(i, function(_, T, I) {
          o(p, _, c(_), I);
        }), p;
      }
      function ov(i, o) {
        return i && Xr(o, dn(o), i);
      }
      function KD(i, o) {
        return i && Xr(o, Yn(o), i);
      }
      function wi(i, o, c) {
        o == "__proto__" && Jl ? Jl(i, o, {
          configurable: !0,
          enumerable: !0,
          value: c,
          writable: !0
        }) : i[o] = c;
      }
      function Pf(i, o) {
        for (var c = -1, p = o.length, _ = K(p), T = i == null; ++c < p; )
          _[c] = T ? n : dd(i, o[c]);
        return _;
      }
      function Wa(i, o, c) {
        return i === i && (c !== n && (i = i <= c ? i : c), o !== n && (i = i >= o ? i : o)), i;
      }
      function pr(i, o, c, p, _, T) {
        var I, R = o & m, B = o & v, ee = o & g;
        if (c && (I = _ ? c(i, p, _, T) : c(i)), I !== n)
          return I;
        if (!qt(i))
          return i;
        var ne = Je(i);
        if (ne) {
          if (I = RS(i), !R)
            return Rn(i, I);
        } else {
          var ae = wn(i), ye = ae == Ee || ae == C;
          if (da(i))
            return $v(i, R);
          if (ae == we || ae == it || ye && !_) {
            if (I = B || ye ? {} : Zv(i), !R)
              return B ? xS(i, KD(I, i)) : SS(i, ov(I, i));
          } else {
            if (!Lt[ae])
              return _ ? i : {};
            I = FS(i, ae, R);
          }
        }
        T || (T = new Ir());
        var $e = T.get(i);
        if ($e)
          return $e;
        T.set(i, I), Sg(i) ? i.forEach(function(He) {
          I.add(pr(He, o, c, He, i, T));
        }) : Eg(i) && i.forEach(function(He, dt) {
          I.set(dt, pr(He, o, c, dt, i, T));
        });
        var Be = ee ? B ? Jf : Xf : B ? Yn : dn, at = ne ? n : Be(i);
        return fr(at || i, function(He, dt) {
          at && (dt = He, He = i[dt]), No(I, dt, pr(He, o, c, dt, i, T));
        }), I;
      }
      function ZD(i) {
        var o = dn(i);
        return function(c) {
          return lv(c, i, o);
        };
      }
      function lv(i, o, c) {
        var p = c.length;
        if (i == null)
          return !p;
        for (i = It(i); p--; ) {
          var _ = c[p], T = o[_], I = i[_];
          if (I === n && !(_ in i) || !T(I))
            return !1;
        }
        return !0;
      }
      function uv(i, o, c) {
        if (typeof i != "function")
          throw new dr(l);
        return Vo(function() {
          i.apply(n, c);
        }, o);
      }
      function Lo(i, o, c, p) {
        var _ = -1, T = Ul, I = !0, R = i.length, B = [], ee = o.length;
        if (!R)
          return B;
        c && (o = zt(o, Zn(c))), p ? (T = _f, I = !1) : o.length >= a && (T = Ao, I = !1, o = new Ya(o));
        e:
          for (; ++_ < R; ) {
            var ne = i[_], ae = c == null ? ne : c(ne);
            if (ne = p || ne !== 0 ? ne : 0, I && ae === ae) {
              for (var ye = ee; ye--; )
                if (o[ye] === ae)
                  continue e;
              B.push(ne);
            } else
              T(o, ae, p) || B.push(ne);
          }
        return B;
      }
      var la = Lv(Zr), cv = Lv(If, !0);
      function XD(i, o) {
        var c = !0;
        return la(i, function(p, _, T) {
          return c = !!o(p, _, T), c;
        }), c;
      }
      function au(i, o, c) {
        for (var p = -1, _ = i.length; ++p < _; ) {
          var T = i[p], I = o(T);
          if (I != null && (R === n ? I === I && !Jn(I) : c(I, R)))
            var R = I, B = T;
        }
        return B;
      }
      function JD(i, o, c, p) {
        var _ = i.length;
        for (c = tt(c), c < 0 && (c = -c > _ ? 0 : _ + c), p = p === n || p > _ ? _ : tt(p), p < 0 && (p += _), p = c > p ? 0 : Tg(p); c < p; )
          i[c++] = o;
        return i;
      }
      function fv(i, o) {
        var c = [];
        return la(i, function(p, _, T) {
          o(p, _, T) && c.push(p);
        }), c;
      }
      function vn(i, o, c, p, _) {
        var T = -1, I = i.length;
        for (c || (c = WS), _ || (_ = []); ++T < I; ) {
          var R = i[T];
          o > 0 && c(R) ? o > 1 ? vn(R, o - 1, c, p, _) : aa(_, R) : p || (_[_.length] = R);
        }
        return _;
      }
      var Cf = Rv(), dv = Rv(!0);
      function Zr(i, o) {
        return i && Cf(i, o, dn);
      }
      function If(i, o) {
        return i && dv(i, o, dn);
      }
      function su(i, o) {
        return ia(o, function(c) {
          return Si(i[c]);
        });
      }
      function Ua(i, o) {
        o = ca(o, i);
        for (var c = 0, p = o.length; i != null && c < p; )
          i = i[Jr(o[c++])];
        return c && c == p ? i : n;
      }
      function hv(i, o, c) {
        var p = o(i);
        return Je(i) ? p : aa(p, c(i));
      }
      function Mn(i) {
        return i == null ? i === n ? Z : fe : Ra && Ra in It(i) ? IS(i) : GS(i);
      }
      function Nf(i, o) {
        return i > o;
      }
      function QD(i, o) {
        return i != null && Tt.call(i, o);
      }
      function eS(i, o) {
        return i != null && o in It(i);
      }
      function tS(i, o, c) {
        return i >= bn(o, c) && i < on(o, c);
      }
      function Lf(i, o, c) {
        for (var p = c ? _f : Ul, _ = i[0].length, T = i.length, I = T, R = K(T), B = 1 / 0, ee = []; I--; ) {
          var ne = i[I];
          I && o && (ne = zt(ne, Zn(o))), B = bn(ne.length, B), R[I] = !c && (o || _ >= 120 && ne.length >= 120) ? new Ya(I && ne) : n;
        }
        ne = i[0];
        var ae = -1, ye = R[0];
        e:
          for (; ++ae < _ && ee.length < B; ) {
            var $e = ne[ae], Be = o ? o($e) : $e;
            if ($e = c || $e !== 0 ? $e : 0, !(ye ? Ao(ye, Be) : p(ee, Be, c))) {
              for (I = T; --I; ) {
                var at = R[I];
                if (!(at ? Ao(at, Be) : p(i[I], Be, c)))
                  continue e;
              }
              ye && ye.push(Be), ee.push($e);
            }
          }
        return ee;
      }
      function nS(i, o, c, p) {
        return Zr(i, function(_, T, I) {
          o(p, c(_), T, I);
        }), p;
      }
      function Ro(i, o, c) {
        o = ca(o, i), i = eg(i, o);
        var p = i == null ? i : i[Jr(vr(o))];
        return p == null ? n : Kn(p, i, c);
      }
      function pv(i) {
        return Jt(i) && Mn(i) == it;
      }
      function rS(i) {
        return Jt(i) && Mn(i) == $t;
      }
      function iS(i) {
        return Jt(i) && Mn(i) == _e;
      }
      function Fo(i, o, c, p, _) {
        return i === o ? !0 : i == null || o == null || !Jt(i) && !Jt(o) ? i !== i && o !== o : aS(i, o, c, p, Fo, _);
      }
      function aS(i, o, c, p, _, T) {
        var I = Je(i), R = Je(o), B = I ? Qe : wn(i), ee = R ? Qe : wn(o);
        B = B == it ? we : B, ee = ee == it ? we : ee;
        var ne = B == we, ae = ee == we, ye = B == ee;
        if (ye && da(i)) {
          if (!da(o))
            return !1;
          I = !0, ne = !1;
        }
        if (ye && !ne)
          return T || (T = new Ir()), I || Ms(i) ? Gv(i, o, c, p, _, T) : PS(i, o, B, c, p, _, T);
        if (!(c & w)) {
          var $e = ne && Tt.call(i, "__wrapped__"), Be = ae && Tt.call(o, "__wrapped__");
          if ($e || Be) {
            var at = $e ? i.value() : i, He = Be ? o.value() : o;
            return T || (T = new Ir()), _(at, He, c, p, T);
          }
        }
        return ye ? (T || (T = new Ir()), CS(i, o, c, p, _, T)) : !1;
      }
      function sS(i) {
        return Jt(i) && wn(i) == A;
      }
      function Rf(i, o, c, p) {
        var _ = c.length, T = _, I = !p;
        if (i == null)
          return !T;
        for (i = It(i); _--; ) {
          var R = c[_];
          if (I && R[2] ? R[1] !== i[R[0]] : !(R[0] in i))
            return !1;
        }
        for (; ++_ < T; ) {
          R = c[_];
          var B = R[0], ee = i[B], ne = R[1];
          if (I && R[2]) {
            if (ee === n && !(B in i))
              return !1;
          } else {
            var ae = new Ir();
            if (p)
              var ye = p(ee, ne, B, i, o, ae);
            if (!(ye === n ? Fo(ne, ee, w | O, p, ae) : ye))
              return !1;
          }
        }
        return !0;
      }
      function mv(i) {
        if (!qt(i) || VS(i))
          return !1;
        var o = Si(i) ? sD : ZO;
        return o.test(Ba(i));
      }
      function oS(i) {
        return Jt(i) && Mn(i) == yt;
      }
      function lS(i) {
        return Jt(i) && wn(i) == Mt;
      }
      function uS(i) {
        return Jt(i) && Eu(i.length) && !!Yt[Mn(i)];
      }
      function vv(i) {
        return typeof i == "function" ? i : i == null ? Wn : typeof i == "object" ? Je(i) ? yv(i[0], i[1]) : _v(i) : Fg(i);
      }
      function Ff(i) {
        if (!Uo(i))
          return dD(i);
        var o = [];
        for (var c in It(i))
          Tt.call(i, c) && c != "constructor" && o.push(c);
        return o;
      }
      function cS(i) {
        if (!qt(i))
          return jS(i);
        var o = Uo(i), c = [];
        for (var p in i)
          p == "constructor" && (o || !Tt.call(i, p)) || c.push(p);
        return c;
      }
      function Yf(i, o) {
        return i < o;
      }
      function gv(i, o) {
        var c = -1, p = Fn(i) ? K(i.length) : [];
        return la(i, function(_, T, I) {
          p[++c] = o(_, T, I);
        }), p;
      }
      function _v(i) {
        var o = ed(i);
        return o.length == 1 && o[0][2] ? Jv(o[0][0], o[0][1]) : function(c) {
          return c === i || Rf(c, i, o);
        };
      }
      function yv(i, o) {
        return nd(i) && Xv(o) ? Jv(Jr(i), o) : function(c) {
          var p = dd(c, i);
          return p === n && p === o ? hd(c, i) : Fo(o, p, w | O);
        };
      }
      function ou(i, o, c, p, _) {
        i !== o && Cf(o, function(T, I) {
          if (_ || (_ = new Ir()), qt(T))
            fS(i, o, I, c, ou, p, _);
          else {
            var R = p ? p(id(i, I), T, I + "", i, o, _) : n;
            R === n && (R = T), $f(i, I, R);
          }
        }, Yn);
      }
      function fS(i, o, c, p, _, T, I) {
        var R = id(i, c), B = id(o, c), ee = I.get(B);
        if (ee) {
          $f(i, c, ee);
          return;
        }
        var ne = T ? T(R, B, c + "", i, o, I) : n, ae = ne === n;
        if (ae) {
          var ye = Je(B), $e = !ye && da(B), Be = !ye && !$e && Ms(B);
          ne = B, ye || $e || Be ? Je(R) ? ne = R : en(R) ? ne = Rn(R) : $e ? (ae = !1, ne = $v(B, !0)) : Be ? (ae = !1, ne = Pv(B, !0)) : ne = [] : Bo(B) || Ha(B) ? (ne = R, Ha(R) ? ne = kg(R) : (!qt(R) || Si(R)) && (ne = Zv(B))) : ae = !1;
        }
        ae && (I.set(B, ne), _(ne, B, p, T, I), I.delete(B)), $f(i, c, ne);
      }
      function bv(i, o) {
        var c = i.length;
        if (c)
          return o += o < 0 ? c : 0, Di(o, c) ? i[o] : n;
      }
      function wv(i, o, c) {
        o.length ? o = zt(o, function(T) {
          return Je(T) ? function(I) {
            return Ua(I, T.length === 1 ? T[0] : T);
          } : T;
        }) : o = [Wn];
        var p = -1;
        o = zt(o, Zn(We()));
        var _ = gv(i, function(T, I, R) {
          var B = zt(o, function(ee) {
            return ee(T);
          });
          return { criteria: B, index: ++p, value: T };
        });
        return FE(_, function(T, I) {
          return DS(T, I, c);
        });
      }
      function dS(i, o) {
        return Ov(i, o, function(c, p) {
          return hd(i, p);
        });
      }
      function Ov(i, o, c) {
        for (var p = -1, _ = o.length, T = {}; ++p < _; ) {
          var I = o[p], R = Ua(i, I);
          c(R, I) && Yo(T, ca(I, i), R);
        }
        return T;
      }
      function hS(i) {
        return function(o) {
          return Ua(o, i);
        };
      }
      function Wf(i, o, c, p) {
        var _ = p ? RE : ys, T = -1, I = o.length, R = i;
        for (i === o && (o = Rn(o)), c && (R = zt(i, Zn(c))); ++T < I; )
          for (var B = 0, ee = o[T], ne = c ? c(ee) : ee; (B = _(R, ne, B, p)) > -1; )
            R !== i && Xl.call(R, B, 1), Xl.call(i, B, 1);
        return i;
      }
      function Ev(i, o) {
        for (var c = i ? o.length : 0, p = c - 1; c--; ) {
          var _ = o[c];
          if (c == p || _ !== T) {
            var T = _;
            Di(_) ? Xl.call(i, _, 1) : Hf(i, _);
          }
        }
        return i;
      }
      function Uf(i, o) {
        return i + eu(rv() * (o - i + 1));
      }
      function pS(i, o, c, p) {
        for (var _ = -1, T = on(Ql((o - i) / (c || 1)), 0), I = K(T); T--; )
          I[p ? T : ++_] = i, i += c;
        return I;
      }
      function Vf(i, o) {
        var c = "";
        if (!i || o < 1 || o > Ve)
          return c;
        do
          o % 2 && (c += i), o = eu(o / 2), o && (i += i);
        while (o);
        return c;
      }
      function lt(i, o) {
        return ad(Qv(i, o, Wn), i + "");
      }
      function mS(i) {
        return sv($s(i));
      }
      function vS(i, o) {
        var c = $s(i);
        return gu(c, Wa(o, 0, c.length));
      }
      function Yo(i, o, c, p) {
        if (!qt(i))
          return i;
        o = ca(o, i);
        for (var _ = -1, T = o.length, I = T - 1, R = i; R != null && ++_ < T; ) {
          var B = Jr(o[_]), ee = c;
          if (B === "__proto__" || B === "constructor" || B === "prototype")
            return i;
          if (_ != I) {
            var ne = R[B];
            ee = p ? p(ne, B, R) : n, ee === n && (ee = qt(ne) ? ne : Di(o[_ + 1]) ? [] : {});
          }
          No(R, B, ee), R = R[B];
        }
        return i;
      }
      var Dv = tu ? function(i, o) {
        return tu.set(i, o), i;
      } : Wn, gS = Jl ? function(i, o) {
        return Jl(i, "toString", {
          configurable: !0,
          enumerable: !1,
          value: md(o),
          writable: !0
        });
      } : Wn;
      function _S(i) {
        return gu($s(i));
      }
      function mr(i, o, c) {
        var p = -1, _ = i.length;
        o < 0 && (o = -o > _ ? 0 : _ + o), c = c > _ ? _ : c, c < 0 && (c += _), _ = o > c ? 0 : c - o >>> 0, o >>>= 0;
        for (var T = K(_); ++p < _; )
          T[p] = i[p + o];
        return T;
      }
      function yS(i, o) {
        var c;
        return la(i, function(p, _, T) {
          return c = o(p, _, T), !c;
        }), !!c;
      }
      function lu(i, o, c) {
        var p = 0, _ = i == null ? p : i.length;
        if (typeof o == "number" && o === o && _ <= At) {
          for (; p < _; ) {
            var T = p + _ >>> 1, I = i[T];
            I !== null && !Jn(I) && (c ? I <= o : I < o) ? p = T + 1 : _ = T;
          }
          return _;
        }
        return Bf(i, o, Wn, c);
      }
      function Bf(i, o, c, p) {
        var _ = 0, T = i == null ? 0 : i.length;
        if (T === 0)
          return 0;
        o = c(o);
        for (var I = o !== o, R = o === null, B = Jn(o), ee = o === n; _ < T; ) {
          var ne = eu((_ + T) / 2), ae = c(i[ne]), ye = ae !== n, $e = ae === null, Be = ae === ae, at = Jn(ae);
          if (I)
            var He = p || Be;
          else
            ee ? He = Be && (p || ye) : R ? He = Be && ye && (p || !$e) : B ? He = Be && ye && !$e && (p || !at) : $e || at ? He = !1 : He = p ? ae <= o : ae < o;
          He ? _ = ne + 1 : T = ne;
        }
        return bn(T, vt);
      }
      function Sv(i, o) {
        for (var c = -1, p = i.length, _ = 0, T = []; ++c < p; ) {
          var I = i[c], R = o ? o(I) : I;
          if (!c || !Nr(R, B)) {
            var B = R;
            T[_++] = I === 0 ? 0 : I;
          }
        }
        return T;
      }
      function xv(i) {
        return typeof i == "number" ? i : Jn(i) ? ie : +i;
      }
      function Xn(i) {
        if (typeof i == "string")
          return i;
        if (Je(i))
          return zt(i, Xn) + "";
        if (Jn(i))
          return iv ? iv.call(i) : "";
        var o = i + "";
        return o == "0" && 1 / i == -Oe ? "-0" : o;
      }
      function ua(i, o, c) {
        var p = -1, _ = Ul, T = i.length, I = !0, R = [], B = R;
        if (c)
          I = !1, _ = _f;
        else if (T >= a) {
          var ee = o ? null : MS(i);
          if (ee)
            return Bl(ee);
          I = !1, _ = Ao, B = new Ya();
        } else
          B = o ? [] : R;
        e:
          for (; ++p < T; ) {
            var ne = i[p], ae = o ? o(ne) : ne;
            if (ne = c || ne !== 0 ? ne : 0, I && ae === ae) {
              for (var ye = B.length; ye--; )
                if (B[ye] === ae)
                  continue e;
              o && B.push(ae), R.push(ne);
            } else
              _(B, ae, c) || (B !== R && B.push(ae), R.push(ne));
          }
        return R;
      }
      function Hf(i, o) {
        return o = ca(o, i), i = eg(i, o), i == null || delete i[Jr(vr(o))];
      }
      function Tv(i, o, c, p) {
        return Yo(i, o, c(Ua(i, o)), p);
      }
      function uu(i, o, c, p) {
        for (var _ = i.length, T = p ? _ : -1; (p ? T-- : ++T < _) && o(i[T], T, i); )
          ;
        return c ? mr(i, p ? 0 : T, p ? T + 1 : _) : mr(i, p ? T + 1 : 0, p ? _ : T);
      }
      function kv(i, o) {
        var c = i;
        return c instanceof ht && (c = c.value()), yf(o, function(p, _) {
          return _.func.apply(_.thisArg, aa([p], _.args));
        }, c);
      }
      function zf(i, o, c) {
        var p = i.length;
        if (p < 2)
          return p ? ua(i[0]) : [];
        for (var _ = -1, T = K(p); ++_ < p; )
          for (var I = i[_], R = -1; ++R < p; )
            R != _ && (T[_] = Lo(T[_] || I, i[R], o, c));
        return ua(vn(T, 1), o, c);
      }
      function Av(i, o, c) {
        for (var p = -1, _ = i.length, T = o.length, I = {}; ++p < _; ) {
          var R = p < T ? o[p] : n;
          c(I, i[p], R);
        }
        return I;
      }
      function jf(i) {
        return en(i) ? i : [];
      }
      function Gf(i) {
        return typeof i == "function" ? i : Wn;
      }
      function ca(i, o) {
        return Je(i) ? i : nd(i, o) ? [i] : ig(xt(i));
      }
      var bS = lt;
      function fa(i, o, c) {
        var p = i.length;
        return c = c === n ? p : c, !o && c >= p ? i : mr(i, o, c);
      }
      var Mv = oD || function(i) {
        return mn.clearTimeout(i);
      };
      function $v(i, o) {
        if (o)
          return i.slice();
        var c = i.length, p = Jm ? Jm(c) : new i.constructor(c);
        return i.copy(p), p;
      }
      function qf(i) {
        var o = new i.constructor(i.byteLength);
        return new Kl(o).set(new Kl(i)), o;
      }
      function wS(i, o) {
        var c = o ? qf(i.buffer) : i.buffer;
        return new i.constructor(c, i.byteOffset, i.byteLength);
      }
      function OS(i) {
        var o = new i.constructor(i.source, pm.exec(i));
        return o.lastIndex = i.lastIndex, o;
      }
      function ES(i) {
        return Io ? It(Io.call(i)) : {};
      }
      function Pv(i, o) {
        var c = o ? qf(i.buffer) : i.buffer;
        return new i.constructor(c, i.byteOffset, i.length);
      }
      function Cv(i, o) {
        if (i !== o) {
          var c = i !== n, p = i === null, _ = i === i, T = Jn(i), I = o !== n, R = o === null, B = o === o, ee = Jn(o);
          if (!R && !ee && !T && i > o || T && I && B && !R && !ee || p && I && B || !c && B || !_)
            return 1;
          if (!p && !T && !ee && i < o || ee && c && _ && !p && !T || R && c && _ || !I && _ || !B)
            return -1;
        }
        return 0;
      }
      function DS(i, o, c) {
        for (var p = -1, _ = i.criteria, T = o.criteria, I = _.length, R = c.length; ++p < I; ) {
          var B = Cv(_[p], T[p]);
          if (B) {
            if (p >= R)
              return B;
            var ee = c[p];
            return B * (ee == "desc" ? -1 : 1);
          }
        }
        return i.index - o.index;
      }
      function Iv(i, o, c, p) {
        for (var _ = -1, T = i.length, I = c.length, R = -1, B = o.length, ee = on(T - I, 0), ne = K(B + ee), ae = !p; ++R < B; )
          ne[R] = o[R];
        for (; ++_ < I; )
          (ae || _ < T) && (ne[c[_]] = i[_]);
        for (; ee--; )
          ne[R++] = i[_++];
        return ne;
      }
      function Nv(i, o, c, p) {
        for (var _ = -1, T = i.length, I = -1, R = c.length, B = -1, ee = o.length, ne = on(T - R, 0), ae = K(ne + ee), ye = !p; ++_ < ne; )
          ae[_] = i[_];
        for (var $e = _; ++B < ee; )
          ae[$e + B] = o[B];
        for (; ++I < R; )
          (ye || _ < T) && (ae[$e + c[I]] = i[_++]);
        return ae;
      }
      function Rn(i, o) {
        var c = -1, p = i.length;
        for (o || (o = K(p)); ++c < p; )
          o[c] = i[c];
        return o;
      }
      function Xr(i, o, c, p) {
        var _ = !c;
        c || (c = {});
        for (var T = -1, I = o.length; ++T < I; ) {
          var R = o[T], B = p ? p(c[R], i[R], R, c, i) : n;
          B === n && (B = i[R]), _ ? wi(c, R, B) : No(c, R, B);
        }
        return c;
      }
      function SS(i, o) {
        return Xr(i, td(i), o);
      }
      function xS(i, o) {
        return Xr(i, qv(i), o);
      }
      function cu(i, o) {
        return function(c, p) {
          var _ = Je(c) ? $E : qD, T = o ? o() : {};
          return _(c, i, We(p, 2), T);
        };
      }
      function Ts(i) {
        return lt(function(o, c) {
          var p = -1, _ = c.length, T = _ > 1 ? c[_ - 1] : n, I = _ > 2 ? c[2] : n;
          for (T = i.length > 3 && typeof T == "function" ? (_--, T) : n, I && $n(c[0], c[1], I) && (T = _ < 3 ? n : T, _ = 1), o = It(o); ++p < _; ) {
            var R = c[p];
            R && i(o, R, p, T);
          }
          return o;
        });
      }
      function Lv(i, o) {
        return function(c, p) {
          if (c == null)
            return c;
          if (!Fn(c))
            return i(c, p);
          for (var _ = c.length, T = o ? _ : -1, I = It(c); (o ? T-- : ++T < _) && p(I[T], T, I) !== !1; )
            ;
          return c;
        };
      }
      function Rv(i) {
        return function(o, c, p) {
          for (var _ = -1, T = It(o), I = p(o), R = I.length; R--; ) {
            var B = I[i ? R : ++_];
            if (c(T[B], B, T) === !1)
              break;
          }
          return o;
        };
      }
      function TS(i, o, c) {
        var p = o & D, _ = Wo(i);
        function T() {
          var I = this && this !== mn && this instanceof T ? _ : i;
          return I.apply(p ? c : this, arguments);
        }
        return T;
      }
      function Fv(i) {
        return function(o) {
          o = xt(o);
          var c = bs(o) ? Cr(o) : n, p = c ? c[0] : o.charAt(0), _ = c ? fa(c, 1).join("") : o.slice(1);
          return p[i]() + _;
        };
      }
      function ks(i) {
        return function(o) {
          return yf(Lg(Ng(o).replace(gE, "")), i, "");
        };
      }
      function Wo(i) {
        return function() {
          var o = arguments;
          switch (o.length) {
            case 0:
              return new i();
            case 1:
              return new i(o[0]);
            case 2:
              return new i(o[0], o[1]);
            case 3:
              return new i(o[0], o[1], o[2]);
            case 4:
              return new i(o[0], o[1], o[2], o[3]);
            case 5:
              return new i(o[0], o[1], o[2], o[3], o[4]);
            case 6:
              return new i(o[0], o[1], o[2], o[3], o[4], o[5]);
            case 7:
              return new i(o[0], o[1], o[2], o[3], o[4], o[5], o[6]);
          }
          var c = xs(i.prototype), p = i.apply(c, o);
          return qt(p) ? p : c;
        };
      }
      function kS(i, o, c) {
        var p = Wo(i);
        function _() {
          for (var T = arguments.length, I = K(T), R = T, B = As(_); R--; )
            I[R] = arguments[R];
          var ee = T < 3 && I[0] !== B && I[T - 1] !== B ? [] : sa(I, B);
          if (T -= ee.length, T < c)
            return Bv(
              i,
              o,
              fu,
              _.placeholder,
              n,
              I,
              ee,
              n,
              n,
              c - T
            );
          var ne = this && this !== mn && this instanceof _ ? p : i;
          return Kn(ne, this, I);
        }
        return _;
      }
      function Yv(i) {
        return function(o, c, p) {
          var _ = It(o);
          if (!Fn(o)) {
            var T = We(c, 3);
            o = dn(o), c = function(R) {
              return T(_[R], R, _);
            };
          }
          var I = i(o, c, p);
          return I > -1 ? _[T ? o[I] : I] : n;
        };
      }
      function Wv(i) {
        return Ei(function(o) {
          var c = o.length, p = c, _ = hr.prototype.thru;
          for (i && o.reverse(); p--; ) {
            var T = o[p];
            if (typeof T != "function")
              throw new dr(l);
            if (_ && !I && mu(T) == "wrapper")
              var I = new hr([], !0);
          }
          for (p = I ? p : c; ++p < c; ) {
            T = o[p];
            var R = mu(T), B = R == "wrapper" ? Qf(T) : n;
            B && rd(B[0]) && B[1] == (N | k | P | L) && !B[4].length && B[9] == 1 ? I = I[mu(B[0])].apply(I, B[3]) : I = T.length == 1 && rd(T) ? I[R]() : I.thru(T);
          }
          return function() {
            var ee = arguments, ne = ee[0];
            if (I && ee.length == 1 && Je(ne))
              return I.plant(ne).value();
            for (var ae = 0, ye = c ? o[ae].apply(this, ee) : ne; ++ae < c; )
              ye = o[ae].call(this, ye);
            return ye;
          };
        });
      }
      function fu(i, o, c, p, _, T, I, R, B, ee) {
        var ne = o & N, ae = o & D, ye = o & b, $e = o & (k | E), Be = o & H, at = ye ? n : Wo(i);
        function He() {
          for (var dt = arguments.length, pt = K(dt), Qn = dt; Qn--; )
            pt[Qn] = arguments[Qn];
          if ($e)
            var Pn = As(He), er = WE(pt, Pn);
          if (p && (pt = Iv(pt, p, _, $e)), T && (pt = Nv(pt, T, I, $e)), dt -= er, $e && dt < ee) {
            var tn = sa(pt, Pn);
            return Bv(
              i,
              o,
              fu,
              He.placeholder,
              c,
              pt,
              tn,
              R,
              B,
              ee - dt
            );
          }
          var Lr = ae ? c : this, Ti = ye ? Lr[i] : i;
          return dt = pt.length, R ? pt = qS(pt, R) : Be && dt > 1 && pt.reverse(), ne && B < dt && (pt.length = B), this && this !== mn && this instanceof He && (Ti = at || Wo(Ti)), Ti.apply(Lr, pt);
        }
        return He;
      }
      function Uv(i, o) {
        return function(c, p) {
          return nS(c, i, o(p), {});
        };
      }
      function du(i, o) {
        return function(c, p) {
          var _;
          if (c === n && p === n)
            return o;
          if (c !== n && (_ = c), p !== n) {
            if (_ === n)
              return p;
            typeof c == "string" || typeof p == "string" ? (c = Xn(c), p = Xn(p)) : (c = xv(c), p = xv(p)), _ = i(c, p);
          }
          return _;
        };
      }
      function Kf(i) {
        return Ei(function(o) {
          return o = zt(o, Zn(We())), lt(function(c) {
            var p = this;
            return i(o, function(_) {
              return Kn(_, p, c);
            });
          });
        });
      }
      function hu(i, o) {
        o = o === n ? " " : Xn(o);
        var c = o.length;
        if (c < 2)
          return c ? Vf(o, i) : o;
        var p = Vf(o, Ql(i / ws(o)));
        return bs(o) ? fa(Cr(p), 0, i).join("") : p.slice(0, i);
      }
      function AS(i, o, c, p) {
        var _ = o & D, T = Wo(i);
        function I() {
          for (var R = -1, B = arguments.length, ee = -1, ne = p.length, ae = K(ne + B), ye = this && this !== mn && this instanceof I ? T : i; ++ee < ne; )
            ae[ee] = p[ee];
          for (; B--; )
            ae[ee++] = arguments[++R];
          return Kn(ye, _ ? c : this, ae);
        }
        return I;
      }
      function Vv(i) {
        return function(o, c, p) {
          return p && typeof p != "number" && $n(o, c, p) && (c = p = n), o = xi(o), c === n ? (c = o, o = 0) : c = xi(c), p = p === n ? o < c ? 1 : -1 : xi(p), pS(o, c, p, i);
        };
      }
      function pu(i) {
        return function(o, c) {
          return typeof o == "string" && typeof c == "string" || (o = gr(o), c = gr(c)), i(o, c);
        };
      }
      function Bv(i, o, c, p, _, T, I, R, B, ee) {
        var ne = o & k, ae = ne ? I : n, ye = ne ? n : I, $e = ne ? T : n, Be = ne ? n : T;
        o |= ne ? P : M, o &= ~(ne ? M : P), o & x || (o &= ~(D | b));
        var at = [
          i,
          o,
          _,
          $e,
          ae,
          Be,
          ye,
          R,
          B,
          ee
        ], He = c.apply(n, at);
        return rd(i) && tg(He, at), He.placeholder = p, ng(He, i, o);
      }
      function Zf(i) {
        var o = sn[i];
        return function(c, p) {
          if (c = gr(c), p = p == null ? 0 : bn(tt(p), 292), p && nv(c)) {
            var _ = (xt(c) + "e").split("e"), T = o(_[0] + "e" + (+_[1] + p));
            return _ = (xt(T) + "e").split("e"), +(_[0] + "e" + (+_[1] - p));
          }
          return o(c);
        };
      }
      var MS = Ds && 1 / Bl(new Ds([, -0]))[1] == Oe ? function(i) {
        return new Ds(i);
      } : _d;
      function Hv(i) {
        return function(o) {
          var c = wn(o);
          return c == A ? xf(o) : c == Mt ? GE(o) : YE(o, i(o));
        };
      }
      function Oi(i, o, c, p, _, T, I, R) {
        var B = o & b;
        if (!B && typeof i != "function")
          throw new dr(l);
        var ee = p ? p.length : 0;
        if (ee || (o &= ~(P | M), p = _ = n), I = I === n ? I : on(tt(I), 0), R = R === n ? R : tt(R), ee -= _ ? _.length : 0, o & M) {
          var ne = p, ae = _;
          p = _ = n;
        }
        var ye = B ? n : Qf(i), $e = [
          i,
          o,
          c,
          p,
          _,
          ne,
          ae,
          T,
          I,
          R
        ];
        if (ye && zS($e, ye), i = $e[0], o = $e[1], c = $e[2], p = $e[3], _ = $e[4], R = $e[9] = $e[9] === n ? B ? 0 : i.length : on($e[9] - ee, 0), !R && o & (k | E) && (o &= ~(k | E)), !o || o == D)
          var Be = TS(i, o, c);
        else
          o == k || o == E ? Be = kS(i, o, R) : (o == P || o == (D | P)) && !_.length ? Be = AS(i, o, c, p) : Be = fu.apply(n, $e);
        var at = ye ? Dv : tg;
        return ng(at(Be, $e), i, o);
      }
      function zv(i, o, c, p) {
        return i === n || Nr(i, Es[c]) && !Tt.call(p, c) ? o : i;
      }
      function jv(i, o, c, p, _, T) {
        return qt(i) && qt(o) && (T.set(o, i), ou(i, o, n, jv, T), T.delete(o)), i;
      }
      function $S(i) {
        return Bo(i) ? n : i;
      }
      function Gv(i, o, c, p, _, T) {
        var I = c & w, R = i.length, B = o.length;
        if (R != B && !(I && B > R))
          return !1;
        var ee = T.get(i), ne = T.get(o);
        if (ee && ne)
          return ee == o && ne == i;
        var ae = -1, ye = !0, $e = c & O ? new Ya() : n;
        for (T.set(i, o), T.set(o, i); ++ae < R; ) {
          var Be = i[ae], at = o[ae];
          if (p)
            var He = I ? p(at, Be, ae, o, i, T) : p(Be, at, ae, i, o, T);
          if (He !== n) {
            if (He)
              continue;
            ye = !1;
            break;
          }
          if ($e) {
            if (!bf(o, function(dt, pt) {
              if (!Ao($e, pt) && (Be === dt || _(Be, dt, c, p, T)))
                return $e.push(pt);
            })) {
              ye = !1;
              break;
            }
          } else if (!(Be === at || _(Be, at, c, p, T))) {
            ye = !1;
            break;
          }
        }
        return T.delete(i), T.delete(o), ye;
      }
      function PS(i, o, c, p, _, T, I) {
        switch (c) {
          case pn:
            if (i.byteLength != o.byteLength || i.byteOffset != o.byteOffset)
              return !1;
            i = i.buffer, o = o.buffer;
          case $t:
            return !(i.byteLength != o.byteLength || !T(new Kl(i), new Kl(o)));
          case ce:
          case _e:
          case z:
            return Nr(+i, +o);
          case te:
            return i.name == o.name && i.message == o.message;
          case yt:
          case _n:
            return i == o + "";
          case A:
            var R = xf;
          case Mt:
            var B = p & w;
            if (R || (R = Bl), i.size != o.size && !B)
              return !1;
            var ee = I.get(i);
            if (ee)
              return ee == o;
            p |= O, I.set(i, o);
            var ne = Gv(R(i), R(o), p, _, T, I);
            return I.delete(i), ne;
          case bt:
            if (Io)
              return Io.call(i) == Io.call(o);
        }
        return !1;
      }
      function CS(i, o, c, p, _, T) {
        var I = c & w, R = Xf(i), B = R.length, ee = Xf(o), ne = ee.length;
        if (B != ne && !I)
          return !1;
        for (var ae = B; ae--; ) {
          var ye = R[ae];
          if (!(I ? ye in o : Tt.call(o, ye)))
            return !1;
        }
        var $e = T.get(i), Be = T.get(o);
        if ($e && Be)
          return $e == o && Be == i;
        var at = !0;
        T.set(i, o), T.set(o, i);
        for (var He = I; ++ae < B; ) {
          ye = R[ae];
          var dt = i[ye], pt = o[ye];
          if (p)
            var Qn = I ? p(pt, dt, ye, o, i, T) : p(dt, pt, ye, i, o, T);
          if (!(Qn === n ? dt === pt || _(dt, pt, c, p, T) : Qn)) {
            at = !1;
            break;
          }
          He || (He = ye == "constructor");
        }
        if (at && !He) {
          var Pn = i.constructor, er = o.constructor;
          Pn != er && "constructor" in i && "constructor" in o && !(typeof Pn == "function" && Pn instanceof Pn && typeof er == "function" && er instanceof er) && (at = !1);
        }
        return T.delete(i), T.delete(o), at;
      }
      function Ei(i) {
        return ad(Qv(i, n, lg), i + "");
      }
      function Xf(i) {
        return hv(i, dn, td);
      }
      function Jf(i) {
        return hv(i, Yn, qv);
      }
      var Qf = tu ? function(i) {
        return tu.get(i);
      } : _d;
      function mu(i) {
        for (var o = i.name + "", c = Ss[o], p = Tt.call(Ss, o) ? c.length : 0; p--; ) {
          var _ = c[p], T = _.func;
          if (T == null || T == i)
            return _.name;
        }
        return o;
      }
      function As(i) {
        var o = Tt.call(S, "placeholder") ? S : i;
        return o.placeholder;
      }
      function We() {
        var i = S.iteratee || vd;
        return i = i === vd ? vv : i, arguments.length ? i(arguments[0], arguments[1]) : i;
      }
      function vu(i, o) {
        var c = i.__data__;
        return US(o) ? c[typeof o == "string" ? "string" : "hash"] : c.map;
      }
      function ed(i) {
        for (var o = dn(i), c = o.length; c--; ) {
          var p = o[c], _ = i[p];
          o[c] = [p, _, Xv(_)];
        }
        return o;
      }
      function Va(i, o) {
        var c = HE(i, o);
        return mv(c) ? c : n;
      }
      function IS(i) {
        var o = Tt.call(i, Ra), c = i[Ra];
        try {
          i[Ra] = n;
          var p = !0;
        } catch {
        }
        var _ = Gl.call(i);
        return p && (o ? i[Ra] = c : delete i[Ra]), _;
      }
      var td = kf ? function(i) {
        return i == null ? [] : (i = It(i), ia(kf(i), function(o) {
          return ev.call(i, o);
        }));
      } : yd, qv = kf ? function(i) {
        for (var o = []; i; )
          aa(o, td(i)), i = Zl(i);
        return o;
      } : yd, wn = Mn;
      (Af && wn(new Af(new ArrayBuffer(1))) != pn || $o && wn(new $o()) != A || Mf && wn(Mf.resolve()) != ze || Ds && wn(new Ds()) != Mt || Po && wn(new Po()) != oe) && (wn = function(i) {
        var o = Mn(i), c = o == we ? i.constructor : n, p = c ? Ba(c) : "";
        if (p)
          switch (p) {
            case vD:
              return pn;
            case gD:
              return A;
            case _D:
              return ze;
            case yD:
              return Mt;
            case bD:
              return oe;
          }
        return o;
      });
      function NS(i, o, c) {
        for (var p = -1, _ = c.length; ++p < _; ) {
          var T = c[p], I = T.size;
          switch (T.type) {
            case "drop":
              i += I;
              break;
            case "dropRight":
              o -= I;
              break;
            case "take":
              o = bn(o, i + I);
              break;
            case "takeRight":
              i = on(i, o - I);
              break;
          }
        }
        return { start: i, end: o };
      }
      function LS(i) {
        var o = i.match(VO);
        return o ? o[1].split(BO) : [];
      }
      function Kv(i, o, c) {
        o = ca(o, i);
        for (var p = -1, _ = o.length, T = !1; ++p < _; ) {
          var I = Jr(o[p]);
          if (!(T = i != null && c(i, I)))
            break;
          i = i[I];
        }
        return T || ++p != _ ? T : (_ = i == null ? 0 : i.length, !!_ && Eu(_) && Di(I, _) && (Je(i) || Ha(i)));
      }
      function RS(i) {
        var o = i.length, c = new i.constructor(o);
        return o && typeof i[0] == "string" && Tt.call(i, "index") && (c.index = i.index, c.input = i.input), c;
      }
      function Zv(i) {
        return typeof i.constructor == "function" && !Uo(i) ? xs(Zl(i)) : {};
      }
      function FS(i, o, c) {
        var p = i.constructor;
        switch (o) {
          case $t:
            return qf(i);
          case ce:
          case _e:
            return new p(+i);
          case pn:
            return wS(i, c);
          case ur:
          case kn:
          case An:
          case Pr:
          case Kr:
          case Na:
          case ta:
          case se:
          case he:
            return Pv(i, c);
          case A:
            return new p();
          case z:
          case _n:
            return new p(i);
          case yt:
            return OS(i);
          case Mt:
            return new p();
          case bt:
            return ES(i);
        }
      }
      function YS(i, o) {
        var c = o.length;
        if (!c)
          return i;
        var p = c - 1;
        return o[p] = (c > 1 ? "& " : "") + o[p], o = o.join(c > 2 ? ", " : " "), i.replace(UO, `{
/* [wrapped with ` + o + `] */
`);
      }
      function WS(i) {
        return Je(i) || Ha(i) || !!(tv && i && i[tv]);
      }
      function Di(i, o) {
        var c = typeof i;
        return o = o ?? Ve, !!o && (c == "number" || c != "symbol" && JO.test(i)) && i > -1 && i % 1 == 0 && i < o;
      }
      function $n(i, o, c) {
        if (!qt(c))
          return !1;
        var p = typeof o;
        return (p == "number" ? Fn(c) && Di(o, c.length) : p == "string" && o in c) ? Nr(c[o], i) : !1;
      }
      function nd(i, o) {
        if (Je(i))
          return !1;
        var c = typeof i;
        return c == "number" || c == "symbol" || c == "boolean" || i == null || Jn(i) ? !0 : Ln.test(i) || !ms.test(i) || o != null && i in It(o);
      }
      function US(i) {
        var o = typeof i;
        return o == "string" || o == "number" || o == "symbol" || o == "boolean" ? i !== "__proto__" : i === null;
      }
      function rd(i) {
        var o = mu(i), c = S[o];
        if (typeof c != "function" || !(o in ht.prototype))
          return !1;
        if (i === c)
          return !0;
        var p = Qf(c);
        return !!p && i === p[0];
      }
      function VS(i) {
        return !!Xm && Xm in i;
      }
      var BS = zl ? Si : bd;
      function Uo(i) {
        var o = i && i.constructor, c = typeof o == "function" && o.prototype || Es;
        return i === c;
      }
      function Xv(i) {
        return i === i && !qt(i);
      }
      function Jv(i, o) {
        return function(c) {
          return c == null ? !1 : c[i] === o && (o !== n || i in It(c));
        };
      }
      function HS(i) {
        var o = wu(i, function(p) {
          return c.size === h && c.clear(), p;
        }), c = o.cache;
        return o;
      }
      function zS(i, o) {
        var c = i[1], p = o[1], _ = c | p, T = _ < (D | b | N), I = p == N && c == k || p == N && c == L && i[7].length <= o[8] || p == (N | L) && o[7].length <= o[8] && c == k;
        if (!(T || I))
          return i;
        p & D && (i[2] = o[2], _ |= c & D ? 0 : x);
        var R = o[3];
        if (R) {
          var B = i[3];
          i[3] = B ? Iv(B, R, o[4]) : R, i[4] = B ? sa(i[3], d) : o[4];
        }
        return R = o[5], R && (B = i[5], i[5] = B ? Nv(B, R, o[6]) : R, i[6] = B ? sa(i[5], d) : o[6]), R = o[7], R && (i[7] = R), p & N && (i[8] = i[8] == null ? o[8] : bn(i[8], o[8])), i[9] == null && (i[9] = o[9]), i[0] = o[0], i[1] = _, i;
      }
      function jS(i) {
        var o = [];
        if (i != null)
          for (var c in It(i))
            o.push(c);
        return o;
      }
      function GS(i) {
        return Gl.call(i);
      }
      function Qv(i, o, c) {
        return o = on(o === n ? i.length - 1 : o, 0), function() {
          for (var p = arguments, _ = -1, T = on(p.length - o, 0), I = K(T); ++_ < T; )
            I[_] = p[o + _];
          _ = -1;
          for (var R = K(o + 1); ++_ < o; )
            R[_] = p[_];
          return R[o] = c(I), Kn(i, this, R);
        };
      }
      function eg(i, o) {
        return o.length < 2 ? i : Ua(i, mr(o, 0, -1));
      }
      function qS(i, o) {
        for (var c = i.length, p = bn(o.length, c), _ = Rn(i); p--; ) {
          var T = o[p];
          i[p] = Di(T, c) ? _[T] : n;
        }
        return i;
      }
      function id(i, o) {
        if (!(o === "constructor" && typeof i[o] == "function") && o != "__proto__")
          return i[o];
      }
      var tg = rg(Dv), Vo = uD || function(i, o) {
        return mn.setTimeout(i, o);
      }, ad = rg(gS);
      function ng(i, o, c) {
        var p = o + "";
        return ad(i, YS(p, KS(LS(p), c)));
      }
      function rg(i) {
        var o = 0, c = 0;
        return function() {
          var p = hD(), _ = J - (p - c);
          if (c = p, _ > 0) {
            if (++o >= Y)
              return arguments[0];
          } else
            o = 0;
          return i.apply(n, arguments);
        };
      }
      function gu(i, o) {
        var c = -1, p = i.length, _ = p - 1;
        for (o = o === n ? p : o; ++c < o; ) {
          var T = Uf(c, _), I = i[T];
          i[T] = i[c], i[c] = I;
        }
        return i.length = o, i;
      }
      var ig = HS(function(i) {
        var o = [];
        return i.charCodeAt(0) === 46 && o.push(""), i.replace(vs, function(c, p, _, T) {
          o.push(_ ? T.replace(jO, "$1") : p || c);
        }), o;
      });
      function Jr(i) {
        if (typeof i == "string" || Jn(i))
          return i;
        var o = i + "";
        return o == "0" && 1 / i == -Oe ? "-0" : o;
      }
      function Ba(i) {
        if (i != null) {
          try {
            return jl.call(i);
          } catch {
          }
          try {
            return i + "";
          } catch {
          }
        }
        return "";
      }
      function KS(i, o) {
        return fr(Te, function(c) {
          var p = "_." + c[0];
          o & c[1] && !Ul(i, p) && i.push(p);
        }), i.sort();
      }
      function ag(i) {
        if (i instanceof ht)
          return i.clone();
        var o = new hr(i.__wrapped__, i.__chain__);
        return o.__actions__ = Rn(i.__actions__), o.__index__ = i.__index__, o.__values__ = i.__values__, o;
      }
      function ZS(i, o, c) {
        (c ? $n(i, o, c) : o === n) ? o = 1 : o = on(tt(o), 0);
        var p = i == null ? 0 : i.length;
        if (!p || o < 1)
          return [];
        for (var _ = 0, T = 0, I = K(Ql(p / o)); _ < p; )
          I[T++] = mr(i, _, _ += o);
        return I;
      }
      function XS(i) {
        for (var o = -1, c = i == null ? 0 : i.length, p = 0, _ = []; ++o < c; ) {
          var T = i[o];
          T && (_[p++] = T);
        }
        return _;
      }
      function JS() {
        var i = arguments.length;
        if (!i)
          return [];
        for (var o = K(i - 1), c = arguments[0], p = i; p--; )
          o[p - 1] = arguments[p];
        return aa(Je(c) ? Rn(c) : [c], vn(o, 1));
      }
      var QS = lt(function(i, o) {
        return en(i) ? Lo(i, vn(o, 1, en, !0)) : [];
      }), ex = lt(function(i, o) {
        var c = vr(o);
        return en(c) && (c = n), en(i) ? Lo(i, vn(o, 1, en, !0), We(c, 2)) : [];
      }), tx = lt(function(i, o) {
        var c = vr(o);
        return en(c) && (c = n), en(i) ? Lo(i, vn(o, 1, en, !0), n, c) : [];
      });
      function nx(i, o, c) {
        var p = i == null ? 0 : i.length;
        return p ? (o = c || o === n ? 1 : tt(o), mr(i, o < 0 ? 0 : o, p)) : [];
      }
      function rx(i, o, c) {
        var p = i == null ? 0 : i.length;
        return p ? (o = c || o === n ? 1 : tt(o), o = p - o, mr(i, 0, o < 0 ? 0 : o)) : [];
      }
      function ix(i, o) {
        return i && i.length ? uu(i, We(o, 3), !0, !0) : [];
      }
      function ax(i, o) {
        return i && i.length ? uu(i, We(o, 3), !0) : [];
      }
      function sx(i, o, c, p) {
        var _ = i == null ? 0 : i.length;
        return _ ? (c && typeof c != "number" && $n(i, o, c) && (c = 0, p = _), JD(i, o, c, p)) : [];
      }
      function sg(i, o, c) {
        var p = i == null ? 0 : i.length;
        if (!p)
          return -1;
        var _ = c == null ? 0 : tt(c);
        return _ < 0 && (_ = on(p + _, 0)), Vl(i, We(o, 3), _);
      }
      function og(i, o, c) {
        var p = i == null ? 0 : i.length;
        if (!p)
          return -1;
        var _ = p - 1;
        return c !== n && (_ = tt(c), _ = c < 0 ? on(p + _, 0) : bn(_, p - 1)), Vl(i, We(o, 3), _, !0);
      }
      function lg(i) {
        var o = i == null ? 0 : i.length;
        return o ? vn(i, 1) : [];
      }
      function ox(i) {
        var o = i == null ? 0 : i.length;
        return o ? vn(i, Oe) : [];
      }
      function lx(i, o) {
        var c = i == null ? 0 : i.length;
        return c ? (o = o === n ? 1 : tt(o), vn(i, o)) : [];
      }
      function ux(i) {
        for (var o = -1, c = i == null ? 0 : i.length, p = {}; ++o < c; ) {
          var _ = i[o];
          p[_[0]] = _[1];
        }
        return p;
      }
      function ug(i) {
        return i && i.length ? i[0] : n;
      }
      function cx(i, o, c) {
        var p = i == null ? 0 : i.length;
        if (!p)
          return -1;
        var _ = c == null ? 0 : tt(c);
        return _ < 0 && (_ = on(p + _, 0)), ys(i, o, _);
      }
      function fx(i) {
        var o = i == null ? 0 : i.length;
        return o ? mr(i, 0, -1) : [];
      }
      var dx = lt(function(i) {
        var o = zt(i, jf);
        return o.length && o[0] === i[0] ? Lf(o) : [];
      }), hx = lt(function(i) {
        var o = vr(i), c = zt(i, jf);
        return o === vr(c) ? o = n : c.pop(), c.length && c[0] === i[0] ? Lf(c, We(o, 2)) : [];
      }), px = lt(function(i) {
        var o = vr(i), c = zt(i, jf);
        return o = typeof o == "function" ? o : n, o && c.pop(), c.length && c[0] === i[0] ? Lf(c, n, o) : [];
      });
      function mx(i, o) {
        return i == null ? "" : fD.call(i, o);
      }
      function vr(i) {
        var o = i == null ? 0 : i.length;
        return o ? i[o - 1] : n;
      }
      function vx(i, o, c) {
        var p = i == null ? 0 : i.length;
        if (!p)
          return -1;
        var _ = p;
        return c !== n && (_ = tt(c), _ = _ < 0 ? on(p + _, 0) : bn(_, p - 1)), o === o ? KE(i, o, _) : Vl(i, Bm, _, !0);
      }
      function gx(i, o) {
        return i && i.length ? bv(i, tt(o)) : n;
      }
      var _x = lt(cg);
      function cg(i, o) {
        return i && i.length && o && o.length ? Wf(i, o) : i;
      }
      function yx(i, o, c) {
        return i && i.length && o && o.length ? Wf(i, o, We(c, 2)) : i;
      }
      function bx(i, o, c) {
        return i && i.length && o && o.length ? Wf(i, o, n, c) : i;
      }
      var wx = Ei(function(i, o) {
        var c = i == null ? 0 : i.length, p = Pf(i, o);
        return Ev(i, zt(o, function(_) {
          return Di(_, c) ? +_ : _;
        }).sort(Cv)), p;
      });
      function Ox(i, o) {
        var c = [];
        if (!(i && i.length))
          return c;
        var p = -1, _ = [], T = i.length;
        for (o = We(o, 3); ++p < T; ) {
          var I = i[p];
          o(I, p, i) && (c.push(I), _.push(p));
        }
        return Ev(i, _), c;
      }
      function sd(i) {
        return i == null ? i : mD.call(i);
      }
      function Ex(i, o, c) {
        var p = i == null ? 0 : i.length;
        return p ? (c && typeof c != "number" && $n(i, o, c) ? (o = 0, c = p) : (o = o == null ? 0 : tt(o), c = c === n ? p : tt(c)), mr(i, o, c)) : [];
      }
      function Dx(i, o) {
        return lu(i, o);
      }
      function Sx(i, o, c) {
        return Bf(i, o, We(c, 2));
      }
      function xx(i, o) {
        var c = i == null ? 0 : i.length;
        if (c) {
          var p = lu(i, o);
          if (p < c && Nr(i[p], o))
            return p;
        }
        return -1;
      }
      function Tx(i, o) {
        return lu(i, o, !0);
      }
      function kx(i, o, c) {
        return Bf(i, o, We(c, 2), !0);
      }
      function Ax(i, o) {
        var c = i == null ? 0 : i.length;
        if (c) {
          var p = lu(i, o, !0) - 1;
          if (Nr(i[p], o))
            return p;
        }
        return -1;
      }
      function Mx(i) {
        return i && i.length ? Sv(i) : [];
      }
      function $x(i, o) {
        return i && i.length ? Sv(i, We(o, 2)) : [];
      }
      function Px(i) {
        var o = i == null ? 0 : i.length;
        return o ? mr(i, 1, o) : [];
      }
      function Cx(i, o, c) {
        return i && i.length ? (o = c || o === n ? 1 : tt(o), mr(i, 0, o < 0 ? 0 : o)) : [];
      }
      function Ix(i, o, c) {
        var p = i == null ? 0 : i.length;
        return p ? (o = c || o === n ? 1 : tt(o), o = p - o, mr(i, o < 0 ? 0 : o, p)) : [];
      }
      function Nx(i, o) {
        return i && i.length ? uu(i, We(o, 3), !1, !0) : [];
      }
      function Lx(i, o) {
        return i && i.length ? uu(i, We(o, 3)) : [];
      }
      var Rx = lt(function(i) {
        return ua(vn(i, 1, en, !0));
      }), Fx = lt(function(i) {
        var o = vr(i);
        return en(o) && (o = n), ua(vn(i, 1, en, !0), We(o, 2));
      }), Yx = lt(function(i) {
        var o = vr(i);
        return o = typeof o == "function" ? o : n, ua(vn(i, 1, en, !0), n, o);
      });
      function Wx(i) {
        return i && i.length ? ua(i) : [];
      }
      function Ux(i, o) {
        return i && i.length ? ua(i, We(o, 2)) : [];
      }
      function Vx(i, o) {
        return o = typeof o == "function" ? o : n, i && i.length ? ua(i, n, o) : [];
      }
      function od(i) {
        if (!(i && i.length))
          return [];
        var o = 0;
        return i = ia(i, function(c) {
          if (en(c))
            return o = on(c.length, o), !0;
        }), Df(o, function(c) {
          return zt(i, wf(c));
        });
      }
      function fg(i, o) {
        if (!(i && i.length))
          return [];
        var c = od(i);
        return o == null ? c : zt(c, function(p) {
          return Kn(o, n, p);
        });
      }
      var Bx = lt(function(i, o) {
        return en(i) ? Lo(i, o) : [];
      }), Hx = lt(function(i) {
        return zf(ia(i, en));
      }), zx = lt(function(i) {
        var o = vr(i);
        return en(o) && (o = n), zf(ia(i, en), We(o, 2));
      }), jx = lt(function(i) {
        var o = vr(i);
        return o = typeof o == "function" ? o : n, zf(ia(i, en), n, o);
      }), Gx = lt(od);
      function qx(i, o) {
        return Av(i || [], o || [], No);
      }
      function Kx(i, o) {
        return Av(i || [], o || [], Yo);
      }
      var Zx = lt(function(i) {
        var o = i.length, c = o > 1 ? i[o - 1] : n;
        return c = typeof c == "function" ? (i.pop(), c) : n, fg(i, c);
      });
      function dg(i) {
        var o = S(i);
        return o.__chain__ = !0, o;
      }
      function Xx(i, o) {
        return o(i), i;
      }
      function _u(i, o) {
        return o(i);
      }
      var Jx = Ei(function(i) {
        var o = i.length, c = o ? i[0] : 0, p = this.__wrapped__, _ = function(T) {
          return Pf(T, i);
        };
        return o > 1 || this.__actions__.length || !(p instanceof ht) || !Di(c) ? this.thru(_) : (p = p.slice(c, +c + (o ? 1 : 0)), p.__actions__.push({
          func: _u,
          args: [_],
          thisArg: n
        }), new hr(p, this.__chain__).thru(function(T) {
          return o && !T.length && T.push(n), T;
        }));
      });
      function Qx() {
        return dg(this);
      }
      function eT() {
        return new hr(this.value(), this.__chain__);
      }
      function tT() {
        this.__values__ === n && (this.__values__ = xg(this.value()));
        var i = this.__index__ >= this.__values__.length, o = i ? n : this.__values__[this.__index__++];
        return { done: i, value: o };
      }
      function nT() {
        return this;
      }
      function rT(i) {
        for (var o, c = this; c instanceof ru; ) {
          var p = ag(c);
          p.__index__ = 0, p.__values__ = n, o ? _.__wrapped__ = p : o = p;
          var _ = p;
          c = c.__wrapped__;
        }
        return _.__wrapped__ = i, o;
      }
      function iT() {
        var i = this.__wrapped__;
        if (i instanceof ht) {
          var o = i;
          return this.__actions__.length && (o = new ht(this)), o = o.reverse(), o.__actions__.push({
            func: _u,
            args: [sd],
            thisArg: n
          }), new hr(o, this.__chain__);
        }
        return this.thru(sd);
      }
      function aT() {
        return kv(this.__wrapped__, this.__actions__);
      }
      var sT = cu(function(i, o, c) {
        Tt.call(i, c) ? ++i[c] : wi(i, c, 1);
      });
      function oT(i, o, c) {
        var p = Je(i) ? Um : XD;
        return c && $n(i, o, c) && (o = n), p(i, We(o, 3));
      }
      function lT(i, o) {
        var c = Je(i) ? ia : fv;
        return c(i, We(o, 3));
      }
      var uT = Yv(sg), cT = Yv(og);
      function fT(i, o) {
        return vn(yu(i, o), 1);
      }
      function dT(i, o) {
        return vn(yu(i, o), Oe);
      }
      function hT(i, o, c) {
        return c = c === n ? 1 : tt(c), vn(yu(i, o), c);
      }
      function hg(i, o) {
        var c = Je(i) ? fr : la;
        return c(i, We(o, 3));
      }
      function pg(i, o) {
        var c = Je(i) ? PE : cv;
        return c(i, We(o, 3));
      }
      var pT = cu(function(i, o, c) {
        Tt.call(i, c) ? i[c].push(o) : wi(i, c, [o]);
      });
      function mT(i, o, c, p) {
        i = Fn(i) ? i : $s(i), c = c && !p ? tt(c) : 0;
        var _ = i.length;
        return c < 0 && (c = on(_ + c, 0)), Du(i) ? c <= _ && i.indexOf(o, c) > -1 : !!_ && ys(i, o, c) > -1;
      }
      var vT = lt(function(i, o, c) {
        var p = -1, _ = typeof o == "function", T = Fn(i) ? K(i.length) : [];
        return la(i, function(I) {
          T[++p] = _ ? Kn(o, I, c) : Ro(I, o, c);
        }), T;
      }), gT = cu(function(i, o, c) {
        wi(i, c, o);
      });
      function yu(i, o) {
        var c = Je(i) ? zt : gv;
        return c(i, We(o, 3));
      }
      function _T(i, o, c, p) {
        return i == null ? [] : (Je(o) || (o = o == null ? [] : [o]), c = p ? n : c, Je(c) || (c = c == null ? [] : [c]), wv(i, o, c));
      }
      var yT = cu(function(i, o, c) {
        i[c ? 0 : 1].push(o);
      }, function() {
        return [[], []];
      });
      function bT(i, o, c) {
        var p = Je(i) ? yf : zm, _ = arguments.length < 3;
        return p(i, We(o, 4), c, _, la);
      }
      function wT(i, o, c) {
        var p = Je(i) ? CE : zm, _ = arguments.length < 3;
        return p(i, We(o, 4), c, _, cv);
      }
      function OT(i, o) {
        var c = Je(i) ? ia : fv;
        return c(i, Ou(We(o, 3)));
      }
      function ET(i) {
        var o = Je(i) ? sv : mS;
        return o(i);
      }
      function DT(i, o, c) {
        (c ? $n(i, o, c) : o === n) ? o = 1 : o = tt(o);
        var p = Je(i) ? jD : vS;
        return p(i, o);
      }
      function ST(i) {
        var o = Je(i) ? GD : _S;
        return o(i);
      }
      function xT(i) {
        if (i == null)
          return 0;
        if (Fn(i))
          return Du(i) ? ws(i) : i.length;
        var o = wn(i);
        return o == A || o == Mt ? i.size : Ff(i).length;
      }
      function TT(i, o, c) {
        var p = Je(i) ? bf : yS;
        return c && $n(i, o, c) && (o = n), p(i, We(o, 3));
      }
      var kT = lt(function(i, o) {
        if (i == null)
          return [];
        var c = o.length;
        return c > 1 && $n(i, o[0], o[1]) ? o = [] : c > 2 && $n(o[0], o[1], o[2]) && (o = [o[0]]), wv(i, vn(o, 1), []);
      }), bu = lD || function() {
        return mn.Date.now();
      };
      function AT(i, o) {
        if (typeof o != "function")
          throw new dr(l);
        return i = tt(i), function() {
          if (--i < 1)
            return o.apply(this, arguments);
        };
      }
      function mg(i, o, c) {
        return o = c ? n : o, o = i && o == null ? i.length : o, Oi(i, N, n, n, n, n, o);
      }
      function vg(i, o) {
        var c;
        if (typeof o != "function")
          throw new dr(l);
        return i = tt(i), function() {
          return --i > 0 && (c = o.apply(this, arguments)), i <= 1 && (o = n), c;
        };
      }
      var ld = lt(function(i, o, c) {
        var p = D;
        if (c.length) {
          var _ = sa(c, As(ld));
          p |= P;
        }
        return Oi(i, p, o, c, _);
      }), gg = lt(function(i, o, c) {
        var p = D | b;
        if (c.length) {
          var _ = sa(c, As(gg));
          p |= P;
        }
        return Oi(o, p, i, c, _);
      });
      function _g(i, o, c) {
        o = c ? n : o;
        var p = Oi(i, k, n, n, n, n, n, o);
        return p.placeholder = _g.placeholder, p;
      }
      function yg(i, o, c) {
        o = c ? n : o;
        var p = Oi(i, E, n, n, n, n, n, o);
        return p.placeholder = yg.placeholder, p;
      }
      function bg(i, o, c) {
        var p, _, T, I, R, B, ee = 0, ne = !1, ae = !1, ye = !0;
        if (typeof i != "function")
          throw new dr(l);
        o = gr(o) || 0, qt(c) && (ne = !!c.leading, ae = "maxWait" in c, T = ae ? on(gr(c.maxWait) || 0, o) : T, ye = "trailing" in c ? !!c.trailing : ye);
        function $e(tn) {
          var Lr = p, Ti = _;
          return p = _ = n, ee = tn, I = i.apply(Ti, Lr), I;
        }
        function Be(tn) {
          return ee = tn, R = Vo(dt, o), ne ? $e(tn) : I;
        }
        function at(tn) {
          var Lr = tn - B, Ti = tn - ee, Yg = o - Lr;
          return ae ? bn(Yg, T - Ti) : Yg;
        }
        function He(tn) {
          var Lr = tn - B, Ti = tn - ee;
          return B === n || Lr >= o || Lr < 0 || ae && Ti >= T;
        }
        function dt() {
          var tn = bu();
          if (He(tn))
            return pt(tn);
          R = Vo(dt, at(tn));
        }
        function pt(tn) {
          return R = n, ye && p ? $e(tn) : (p = _ = n, I);
        }
        function Qn() {
          R !== n && Mv(R), ee = 0, p = B = _ = R = n;
        }
        function Pn() {
          return R === n ? I : pt(bu());
        }
        function er() {
          var tn = bu(), Lr = He(tn);
          if (p = arguments, _ = this, B = tn, Lr) {
            if (R === n)
              return Be(B);
            if (ae)
              return Mv(R), R = Vo(dt, o), $e(B);
          }
          return R === n && (R = Vo(dt, o)), I;
        }
        return er.cancel = Qn, er.flush = Pn, er;
      }
      var MT = lt(function(i, o) {
        return uv(i, 1, o);
      }), $T = lt(function(i, o, c) {
        return uv(i, gr(o) || 0, c);
      });
      function PT(i) {
        return Oi(i, H);
      }
      function wu(i, o) {
        if (typeof i != "function" || o != null && typeof o != "function")
          throw new dr(l);
        var c = function() {
          var p = arguments, _ = o ? o.apply(this, p) : p[0], T = c.cache;
          if (T.has(_))
            return T.get(_);
          var I = i.apply(this, p);
          return c.cache = T.set(_, I) || T, I;
        };
        return c.cache = new (wu.Cache || bi)(), c;
      }
      wu.Cache = bi;
      function Ou(i) {
        if (typeof i != "function")
          throw new dr(l);
        return function() {
          var o = arguments;
          switch (o.length) {
            case 0:
              return !i.call(this);
            case 1:
              return !i.call(this, o[0]);
            case 2:
              return !i.call(this, o[0], o[1]);
            case 3:
              return !i.call(this, o[0], o[1], o[2]);
          }
          return !i.apply(this, o);
        };
      }
      function CT(i) {
        return vg(2, i);
      }
      var IT = bS(function(i, o) {
        o = o.length == 1 && Je(o[0]) ? zt(o[0], Zn(We())) : zt(vn(o, 1), Zn(We()));
        var c = o.length;
        return lt(function(p) {
          for (var _ = -1, T = bn(p.length, c); ++_ < T; )
            p[_] = o[_].call(this, p[_]);
          return Kn(i, this, p);
        });
      }), ud = lt(function(i, o) {
        var c = sa(o, As(ud));
        return Oi(i, P, n, o, c);
      }), wg = lt(function(i, o) {
        var c = sa(o, As(wg));
        return Oi(i, M, n, o, c);
      }), NT = Ei(function(i, o) {
        return Oi(i, L, n, n, n, o);
      });
      function LT(i, o) {
        if (typeof i != "function")
          throw new dr(l);
        return o = o === n ? o : tt(o), lt(i, o);
      }
      function RT(i, o) {
        if (typeof i != "function")
          throw new dr(l);
        return o = o == null ? 0 : on(tt(o), 0), lt(function(c) {
          var p = c[o], _ = fa(c, 0, o);
          return p && aa(_, p), Kn(i, this, _);
        });
      }
      function FT(i, o, c) {
        var p = !0, _ = !0;
        if (typeof i != "function")
          throw new dr(l);
        return qt(c) && (p = "leading" in c ? !!c.leading : p, _ = "trailing" in c ? !!c.trailing : _), bg(i, o, {
          leading: p,
          maxWait: o,
          trailing: _
        });
      }
      function YT(i) {
        return mg(i, 1);
      }
      function WT(i, o) {
        return ud(Gf(o), i);
      }
      function UT() {
        if (!arguments.length)
          return [];
        var i = arguments[0];
        return Je(i) ? i : [i];
      }
      function VT(i) {
        return pr(i, g);
      }
      function BT(i, o) {
        return o = typeof o == "function" ? o : n, pr(i, g, o);
      }
      function HT(i) {
        return pr(i, m | g);
      }
      function zT(i, o) {
        return o = typeof o == "function" ? o : n, pr(i, m | g, o);
      }
      function jT(i, o) {
        return o == null || lv(i, o, dn(o));
      }
      function Nr(i, o) {
        return i === o || i !== i && o !== o;
      }
      var GT = pu(Nf), qT = pu(function(i, o) {
        return i >= o;
      }), Ha = pv(function() {
        return arguments;
      }()) ? pv : function(i) {
        return Jt(i) && Tt.call(i, "callee") && !ev.call(i, "callee");
      }, Je = K.isArray, KT = Nm ? Zn(Nm) : rS;
      function Fn(i) {
        return i != null && Eu(i.length) && !Si(i);
      }
      function en(i) {
        return Jt(i) && Fn(i);
      }
      function ZT(i) {
        return i === !0 || i === !1 || Jt(i) && Mn(i) == ce;
      }
      var da = cD || bd, XT = Lm ? Zn(Lm) : iS;
      function JT(i) {
        return Jt(i) && i.nodeType === 1 && !Bo(i);
      }
      function QT(i) {
        if (i == null)
          return !0;
        if (Fn(i) && (Je(i) || typeof i == "string" || typeof i.splice == "function" || da(i) || Ms(i) || Ha(i)))
          return !i.length;
        var o = wn(i);
        if (o == A || o == Mt)
          return !i.size;
        if (Uo(i))
          return !Ff(i).length;
        for (var c in i)
          if (Tt.call(i, c))
            return !1;
        return !0;
      }
      function ek(i, o) {
        return Fo(i, o);
      }
      function tk(i, o, c) {
        c = typeof c == "function" ? c : n;
        var p = c ? c(i, o) : n;
        return p === n ? Fo(i, o, n, c) : !!p;
      }
      function cd(i) {
        if (!Jt(i))
          return !1;
        var o = Mn(i);
        return o == te || o == Ce || typeof i.message == "string" && typeof i.name == "string" && !Bo(i);
      }
      function nk(i) {
        return typeof i == "number" && nv(i);
      }
      function Si(i) {
        if (!qt(i))
          return !1;
        var o = Mn(i);
        return o == Ee || o == C || o == ve || o == Zt;
      }
      function Og(i) {
        return typeof i == "number" && i == tt(i);
      }
      function Eu(i) {
        return typeof i == "number" && i > -1 && i % 1 == 0 && i <= Ve;
      }
      function qt(i) {
        var o = typeof i;
        return i != null && (o == "object" || o == "function");
      }
      function Jt(i) {
        return i != null && typeof i == "object";
      }
      var Eg = Rm ? Zn(Rm) : sS;
      function rk(i, o) {
        return i === o || Rf(i, o, ed(o));
      }
      function ik(i, o, c) {
        return c = typeof c == "function" ? c : n, Rf(i, o, ed(o), c);
      }
      function ak(i) {
        return Dg(i) && i != +i;
      }
      function sk(i) {
        if (BS(i))
          throw new Xe(s);
        return mv(i);
      }
      function ok(i) {
        return i === null;
      }
      function lk(i) {
        return i == null;
      }
      function Dg(i) {
        return typeof i == "number" || Jt(i) && Mn(i) == z;
      }
      function Bo(i) {
        if (!Jt(i) || Mn(i) != we)
          return !1;
        var o = Zl(i);
        if (o === null)
          return !0;
        var c = Tt.call(o, "constructor") && o.constructor;
        return typeof c == "function" && c instanceof c && jl.call(c) == iD;
      }
      var fd = Fm ? Zn(Fm) : oS;
      function uk(i) {
        return Og(i) && i >= -Ve && i <= Ve;
      }
      var Sg = Ym ? Zn(Ym) : lS;
      function Du(i) {
        return typeof i == "string" || !Je(i) && Jt(i) && Mn(i) == _n;
      }
      function Jn(i) {
        return typeof i == "symbol" || Jt(i) && Mn(i) == bt;
      }
      var Ms = Wm ? Zn(Wm) : uS;
      function ck(i) {
        return i === n;
      }
      function fk(i) {
        return Jt(i) && wn(i) == oe;
      }
      function dk(i) {
        return Jt(i) && Mn(i) == Ht;
      }
      var hk = pu(Yf), pk = pu(function(i, o) {
        return i <= o;
      });
      function xg(i) {
        if (!i)
          return [];
        if (Fn(i))
          return Du(i) ? Cr(i) : Rn(i);
        if (Mo && i[Mo])
          return jE(i[Mo]());
        var o = wn(i), c = o == A ? xf : o == Mt ? Bl : $s;
        return c(i);
      }
      function xi(i) {
        if (!i)
          return i === 0 ? i : 0;
        if (i = gr(i), i === Oe || i === -Oe) {
          var o = i < 0 ? -1 : 1;
          return o * Fe;
        }
        return i === i ? i : 0;
      }
      function tt(i) {
        var o = xi(i), c = o % 1;
        return o === o ? c ? o - c : o : 0;
      }
      function Tg(i) {
        return i ? Wa(tt(i), 0, Ae) : 0;
      }
      function gr(i) {
        if (typeof i == "number")
          return i;
        if (Jn(i))
          return ie;
        if (qt(i)) {
          var o = typeof i.valueOf == "function" ? i.valueOf() : i;
          i = qt(o) ? o + "" : o;
        }
        if (typeof i != "string")
          return i === 0 ? i : +i;
        i = jm(i);
        var c = KO.test(i);
        return c || XO.test(i) ? AE(i.slice(2), c ? 2 : 8) : qO.test(i) ? ie : +i;
      }
      function kg(i) {
        return Xr(i, Yn(i));
      }
      function mk(i) {
        return i ? Wa(tt(i), -Ve, Ve) : i === 0 ? i : 0;
      }
      function xt(i) {
        return i == null ? "" : Xn(i);
      }
      var vk = Ts(function(i, o) {
        if (Uo(o) || Fn(o)) {
          Xr(o, dn(o), i);
          return;
        }
        for (var c in o)
          Tt.call(o, c) && No(i, c, o[c]);
      }), Ag = Ts(function(i, o) {
        Xr(o, Yn(o), i);
      }), Su = Ts(function(i, o, c, p) {
        Xr(o, Yn(o), i, p);
      }), gk = Ts(function(i, o, c, p) {
        Xr(o, dn(o), i, p);
      }), _k = Ei(Pf);
      function yk(i, o) {
        var c = xs(i);
        return o == null ? c : ov(c, o);
      }
      var bk = lt(function(i, o) {
        i = It(i);
        var c = -1, p = o.length, _ = p > 2 ? o[2] : n;
        for (_ && $n(o[0], o[1], _) && (p = 1); ++c < p; )
          for (var T = o[c], I = Yn(T), R = -1, B = I.length; ++R < B; ) {
            var ee = I[R], ne = i[ee];
            (ne === n || Nr(ne, Es[ee]) && !Tt.call(i, ee)) && (i[ee] = T[ee]);
          }
        return i;
      }), wk = lt(function(i) {
        return i.push(n, jv), Kn(Mg, n, i);
      });
      function Ok(i, o) {
        return Vm(i, We(o, 3), Zr);
      }
      function Ek(i, o) {
        return Vm(i, We(o, 3), If);
      }
      function Dk(i, o) {
        return i == null ? i : Cf(i, We(o, 3), Yn);
      }
      function Sk(i, o) {
        return i == null ? i : dv(i, We(o, 3), Yn);
      }
      function xk(i, o) {
        return i && Zr(i, We(o, 3));
      }
      function Tk(i, o) {
        return i && If(i, We(o, 3));
      }
      function kk(i) {
        return i == null ? [] : su(i, dn(i));
      }
      function Ak(i) {
        return i == null ? [] : su(i, Yn(i));
      }
      function dd(i, o, c) {
        var p = i == null ? n : Ua(i, o);
        return p === n ? c : p;
      }
      function Mk(i, o) {
        return i != null && Kv(i, o, QD);
      }
      function hd(i, o) {
        return i != null && Kv(i, o, eS);
      }
      var $k = Uv(function(i, o, c) {
        o != null && typeof o.toString != "function" && (o = Gl.call(o)), i[o] = c;
      }, md(Wn)), Pk = Uv(function(i, o, c) {
        o != null && typeof o.toString != "function" && (o = Gl.call(o)), Tt.call(i, o) ? i[o].push(c) : i[o] = [c];
      }, We), Ck = lt(Ro);
      function dn(i) {
        return Fn(i) ? av(i) : Ff(i);
      }
      function Yn(i) {
        return Fn(i) ? av(i, !0) : cS(i);
      }
      function Ik(i, o) {
        var c = {};
        return o = We(o, 3), Zr(i, function(p, _, T) {
          wi(c, o(p, _, T), p);
        }), c;
      }
      function Nk(i, o) {
        var c = {};
        return o = We(o, 3), Zr(i, function(p, _, T) {
          wi(c, _, o(p, _, T));
        }), c;
      }
      var Lk = Ts(function(i, o, c) {
        ou(i, o, c);
      }), Mg = Ts(function(i, o, c, p) {
        ou(i, o, c, p);
      }), Rk = Ei(function(i, o) {
        var c = {};
        if (i == null)
          return c;
        var p = !1;
        o = zt(o, function(T) {
          return T = ca(T, i), p || (p = T.length > 1), T;
        }), Xr(i, Jf(i), c), p && (c = pr(c, m | v | g, $S));
        for (var _ = o.length; _--; )
          Hf(c, o[_]);
        return c;
      });
      function Fk(i, o) {
        return $g(i, Ou(We(o)));
      }
      var Yk = Ei(function(i, o) {
        return i == null ? {} : dS(i, o);
      });
      function $g(i, o) {
        if (i == null)
          return {};
        var c = zt(Jf(i), function(p) {
          return [p];
        });
        return o = We(o), Ov(i, c, function(p, _) {
          return o(p, _[0]);
        });
      }
      function Wk(i, o, c) {
        o = ca(o, i);
        var p = -1, _ = o.length;
        for (_ || (_ = 1, i = n); ++p < _; ) {
          var T = i == null ? n : i[Jr(o[p])];
          T === n && (p = _, T = c), i = Si(T) ? T.call(i) : T;
        }
        return i;
      }
      function Uk(i, o, c) {
        return i == null ? i : Yo(i, o, c);
      }
      function Vk(i, o, c, p) {
        return p = typeof p == "function" ? p : n, i == null ? i : Yo(i, o, c, p);
      }
      var Pg = Hv(dn), Cg = Hv(Yn);
      function Bk(i, o, c) {
        var p = Je(i), _ = p || da(i) || Ms(i);
        if (o = We(o, 4), c == null) {
          var T = i && i.constructor;
          _ ? c = p ? new T() : [] : qt(i) ? c = Si(T) ? xs(Zl(i)) : {} : c = {};
        }
        return (_ ? fr : Zr)(i, function(I, R, B) {
          return o(c, I, R, B);
        }), c;
      }
      function Hk(i, o) {
        return i == null ? !0 : Hf(i, o);
      }
      function zk(i, o, c) {
        return i == null ? i : Tv(i, o, Gf(c));
      }
      function jk(i, o, c, p) {
        return p = typeof p == "function" ? p : n, i == null ? i : Tv(i, o, Gf(c), p);
      }
      function $s(i) {
        return i == null ? [] : Sf(i, dn(i));
      }
      function Gk(i) {
        return i == null ? [] : Sf(i, Yn(i));
      }
      function qk(i, o, c) {
        return c === n && (c = o, o = n), c !== n && (c = gr(c), c = c === c ? c : 0), o !== n && (o = gr(o), o = o === o ? o : 0), Wa(gr(i), o, c);
      }
      function Kk(i, o, c) {
        return o = xi(o), c === n ? (c = o, o = 0) : c = xi(c), i = gr(i), tS(i, o, c);
      }
      function Zk(i, o, c) {
        if (c && typeof c != "boolean" && $n(i, o, c) && (o = c = n), c === n && (typeof o == "boolean" ? (c = o, o = n) : typeof i == "boolean" && (c = i, i = n)), i === n && o === n ? (i = 0, o = 1) : (i = xi(i), o === n ? (o = i, i = 0) : o = xi(o)), i > o) {
          var p = i;
          i = o, o = p;
        }
        if (c || i % 1 || o % 1) {
          var _ = rv();
          return bn(i + _ * (o - i + kE("1e-" + ((_ + "").length - 1))), o);
        }
        return Uf(i, o);
      }
      var Xk = ks(function(i, o, c) {
        return o = o.toLowerCase(), i + (c ? Ig(o) : o);
      });
      function Ig(i) {
        return pd(xt(i).toLowerCase());
      }
      function Ng(i) {
        return i = xt(i), i && i.replace(QO, UE).replace(_E, "");
      }
      function Jk(i, o, c) {
        i = xt(i), o = Xn(o);
        var p = i.length;
        c = c === n ? p : Wa(tt(c), 0, p);
        var _ = c;
        return c -= o.length, c >= 0 && i.slice(c, _) == o;
      }
      function Qk(i) {
        return i = xt(i), i && qn.test(i) ? i.replace(ut, VE) : i;
      }
      function eA(i) {
        return i = xt(i), i && ko.test(i) ? i.replace(_i, "\\$&") : i;
      }
      var tA = ks(function(i, o, c) {
        return i + (c ? "-" : "") + o.toLowerCase();
      }), nA = ks(function(i, o, c) {
        return i + (c ? " " : "") + o.toLowerCase();
      }), rA = Fv("toLowerCase");
      function iA(i, o, c) {
        i = xt(i), o = tt(o);
        var p = o ? ws(i) : 0;
        if (!o || p >= o)
          return i;
        var _ = (o - p) / 2;
        return hu(eu(_), c) + i + hu(Ql(_), c);
      }
      function aA(i, o, c) {
        i = xt(i), o = tt(o);
        var p = o ? ws(i) : 0;
        return o && p < o ? i + hu(o - p, c) : i;
      }
      function sA(i, o, c) {
        i = xt(i), o = tt(o);
        var p = o ? ws(i) : 0;
        return o && p < o ? hu(o - p, c) + i : i;
      }
      function oA(i, o, c) {
        return c || o == null ? o = 0 : o && (o = +o), pD(xt(i).replace(gs, ""), o || 0);
      }
      function lA(i, o, c) {
        return (c ? $n(i, o, c) : o === n) ? o = 1 : o = tt(o), Vf(xt(i), o);
      }
      function uA() {
        var i = arguments, o = xt(i[0]);
        return i.length < 3 ? o : o.replace(i[1], i[2]);
      }
      var cA = ks(function(i, o, c) {
        return i + (c ? "_" : "") + o.toLowerCase();
      });
      function fA(i, o, c) {
        return c && typeof c != "number" && $n(i, o, c) && (o = c = n), c = c === n ? Ae : c >>> 0, c ? (i = xt(i), i && (typeof o == "string" || o != null && !fd(o)) && (o = Xn(o), !o && bs(i)) ? fa(Cr(i), 0, c) : i.split(o, c)) : [];
      }
      var dA = ks(function(i, o, c) {
        return i + (c ? " " : "") + pd(o);
      });
      function hA(i, o, c) {
        return i = xt(i), c = c == null ? 0 : Wa(tt(c), 0, i.length), o = Xn(o), i.slice(c, c + o.length) == o;
      }
      function pA(i, o, c) {
        var p = S.templateSettings;
        c && $n(i, o, c) && (o = n), i = xt(i), o = Su({}, o, p, zv);
        var _ = Su({}, o.imports, p.imports, zv), T = dn(_), I = Sf(_, T), R, B, ee = 0, ne = o.interpolate || Fl, ae = "__p += '", ye = Tf(
          (o.escape || Fl).source + "|" + ne.source + "|" + (ne === ra ? GO : Fl).source + "|" + (o.evaluate || Fl).source + "|$",
          "g"
        ), $e = "//# sourceURL=" + (Tt.call(o, "sourceURL") ? (o.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++EE + "]") + `
`;
        i.replace(ye, function(He, dt, pt, Qn, Pn, er) {
          return pt || (pt = Qn), ae += i.slice(ee, er).replace(eE, BE), dt && (R = !0, ae += `' +
__e(` + dt + `) +
'`), Pn && (B = !0, ae += `';
` + Pn + `;
__p += '`), pt && (ae += `' +
((__t = (` + pt + `)) == null ? '' : __t) +
'`), ee = er + He.length, He;
        }), ae += `';
`;
        var Be = Tt.call(o, "variable") && o.variable;
        if (!Be)
          ae = `with (obj) {
` + ae + `
}
`;
        else if (zO.test(Be))
          throw new Xe(u);
        ae = (B ? ae.replace(je, "") : ae).replace(V, "$1").replace(de, "$1;"), ae = "function(" + (Be || "obj") + `) {
` + (Be ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (R ? ", __e = _.escape" : "") + (B ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + ae + `return __p
}`;
        var at = Rg(function() {
          return Dt(T, $e + "return " + ae).apply(n, I);
        });
        if (at.source = ae, cd(at))
          throw at;
        return at;
      }
      function mA(i) {
        return xt(i).toLowerCase();
      }
      function vA(i) {
        return xt(i).toUpperCase();
      }
      function gA(i, o, c) {
        if (i = xt(i), i && (c || o === n))
          return jm(i);
        if (!i || !(o = Xn(o)))
          return i;
        var p = Cr(i), _ = Cr(o), T = Gm(p, _), I = qm(p, _) + 1;
        return fa(p, T, I).join("");
      }
      function _A(i, o, c) {
        if (i = xt(i), i && (c || o === n))
          return i.slice(0, Zm(i) + 1);
        if (!i || !(o = Xn(o)))
          return i;
        var p = Cr(i), _ = qm(p, Cr(o)) + 1;
        return fa(p, 0, _).join("");
      }
      function yA(i, o, c) {
        if (i = xt(i), i && (c || o === n))
          return i.replace(gs, "");
        if (!i || !(o = Xn(o)))
          return i;
        var p = Cr(i), _ = Gm(p, Cr(o));
        return fa(p, _).join("");
      }
      function bA(i, o) {
        var c = $, p = q;
        if (qt(o)) {
          var _ = "separator" in o ? o.separator : _;
          c = "length" in o ? tt(o.length) : c, p = "omission" in o ? Xn(o.omission) : p;
        }
        i = xt(i);
        var T = i.length;
        if (bs(i)) {
          var I = Cr(i);
          T = I.length;
        }
        if (c >= T)
          return i;
        var R = c - ws(p);
        if (R < 1)
          return p;
        var B = I ? fa(I, 0, R).join("") : i.slice(0, R);
        if (_ === n)
          return B + p;
        if (I && (R += B.length - R), fd(_)) {
          if (i.slice(R).search(_)) {
            var ee, ne = B;
            for (_.global || (_ = Tf(_.source, xt(pm.exec(_)) + "g")), _.lastIndex = 0; ee = _.exec(ne); )
              var ae = ee.index;
            B = B.slice(0, ae === n ? R : ae);
          }
        } else if (i.indexOf(Xn(_), R) != R) {
          var ye = B.lastIndexOf(_);
          ye > -1 && (B = B.slice(0, ye));
        }
        return B + p;
      }
      function wA(i) {
        return i = xt(i), i && Xt.test(i) ? i.replace(Ie, ZE) : i;
      }
      var OA = ks(function(i, o, c) {
        return i + (c ? " " : "") + o.toUpperCase();
      }), pd = Fv("toUpperCase");
      function Lg(i, o, c) {
        return i = xt(i), o = c ? n : o, o === n ? zE(i) ? QE(i) : LE(i) : i.match(o) || [];
      }
      var Rg = lt(function(i, o) {
        try {
          return Kn(i, n, o);
        } catch (c) {
          return cd(c) ? c : new Xe(c);
        }
      }), EA = Ei(function(i, o) {
        return fr(o, function(c) {
          c = Jr(c), wi(i, c, ld(i[c], i));
        }), i;
      });
      function DA(i) {
        var o = i == null ? 0 : i.length, c = We();
        return i = o ? zt(i, function(p) {
          if (typeof p[1] != "function")
            throw new dr(l);
          return [c(p[0]), p[1]];
        }) : [], lt(function(p) {
          for (var _ = -1; ++_ < o; ) {
            var T = i[_];
            if (Kn(T[0], this, p))
              return Kn(T[1], this, p);
          }
        });
      }
      function SA(i) {
        return ZD(pr(i, m));
      }
      function md(i) {
        return function() {
          return i;
        };
      }
      function xA(i, o) {
        return i == null || i !== i ? o : i;
      }
      var TA = Wv(), kA = Wv(!0);
      function Wn(i) {
        return i;
      }
      function vd(i) {
        return vv(typeof i == "function" ? i : pr(i, m));
      }
      function AA(i) {
        return _v(pr(i, m));
      }
      function MA(i, o) {
        return yv(i, pr(o, m));
      }
      var $A = lt(function(i, o) {
        return function(c) {
          return Ro(c, i, o);
        };
      }), PA = lt(function(i, o) {
        return function(c) {
          return Ro(i, c, o);
        };
      });
      function gd(i, o, c) {
        var p = dn(o), _ = su(o, p);
        c == null && !(qt(o) && (_.length || !p.length)) && (c = o, o = i, i = this, _ = su(o, dn(o)));
        var T = !(qt(c) && "chain" in c) || !!c.chain, I = Si(i);
        return fr(_, function(R) {
          var B = o[R];
          i[R] = B, I && (i.prototype[R] = function() {
            var ee = this.__chain__;
            if (T || ee) {
              var ne = i(this.__wrapped__), ae = ne.__actions__ = Rn(this.__actions__);
              return ae.push({ func: B, args: arguments, thisArg: i }), ne.__chain__ = ee, ne;
            }
            return B.apply(i, aa([this.value()], arguments));
          });
        }), i;
      }
      function CA() {
        return mn._ === this && (mn._ = aD), this;
      }
      function _d() {
      }
      function IA(i) {
        return i = tt(i), lt(function(o) {
          return bv(o, i);
        });
      }
      var NA = Kf(zt), LA = Kf(Um), RA = Kf(bf);
      function Fg(i) {
        return nd(i) ? wf(Jr(i)) : hS(i);
      }
      function FA(i) {
        return function(o) {
          return i == null ? n : Ua(i, o);
        };
      }
      var YA = Vv(), WA = Vv(!0);
      function yd() {
        return [];
      }
      function bd() {
        return !1;
      }
      function UA() {
        return {};
      }
      function VA() {
        return "";
      }
      function BA() {
        return !0;
      }
      function HA(i, o) {
        if (i = tt(i), i < 1 || i > Ve)
          return [];
        var c = Ae, p = bn(i, Ae);
        o = We(o), i -= Ae;
        for (var _ = Df(p, o); ++c < i; )
          o(c);
        return _;
      }
      function zA(i) {
        return Je(i) ? zt(i, Jr) : Jn(i) ? [i] : Rn(ig(xt(i)));
      }
      function jA(i) {
        var o = ++rD;
        return xt(i) + o;
      }
      var GA = du(function(i, o) {
        return i + o;
      }, 0), qA = Zf("ceil"), KA = du(function(i, o) {
        return i / o;
      }, 1), ZA = Zf("floor");
      function XA(i) {
        return i && i.length ? au(i, Wn, Nf) : n;
      }
      function JA(i, o) {
        return i && i.length ? au(i, We(o, 2), Nf) : n;
      }
      function QA(i) {
        return Hm(i, Wn);
      }
      function eM(i, o) {
        return Hm(i, We(o, 2));
      }
      function tM(i) {
        return i && i.length ? au(i, Wn, Yf) : n;
      }
      function nM(i, o) {
        return i && i.length ? au(i, We(o, 2), Yf) : n;
      }
      var rM = du(function(i, o) {
        return i * o;
      }, 1), iM = Zf("round"), aM = du(function(i, o) {
        return i - o;
      }, 0);
      function sM(i) {
        return i && i.length ? Ef(i, Wn) : 0;
      }
      function oM(i, o) {
        return i && i.length ? Ef(i, We(o, 2)) : 0;
      }
      return S.after = AT, S.ary = mg, S.assign = vk, S.assignIn = Ag, S.assignInWith = Su, S.assignWith = gk, S.at = _k, S.before = vg, S.bind = ld, S.bindAll = EA, S.bindKey = gg, S.castArray = UT, S.chain = dg, S.chunk = ZS, S.compact = XS, S.concat = JS, S.cond = DA, S.conforms = SA, S.constant = md, S.countBy = sT, S.create = yk, S.curry = _g, S.curryRight = yg, S.debounce = bg, S.defaults = bk, S.defaultsDeep = wk, S.defer = MT, S.delay = $T, S.difference = QS, S.differenceBy = ex, S.differenceWith = tx, S.drop = nx, S.dropRight = rx, S.dropRightWhile = ix, S.dropWhile = ax, S.fill = sx, S.filter = lT, S.flatMap = fT, S.flatMapDeep = dT, S.flatMapDepth = hT, S.flatten = lg, S.flattenDeep = ox, S.flattenDepth = lx, S.flip = PT, S.flow = TA, S.flowRight = kA, S.fromPairs = ux, S.functions = kk, S.functionsIn = Ak, S.groupBy = pT, S.initial = fx, S.intersection = dx, S.intersectionBy = hx, S.intersectionWith = px, S.invert = $k, S.invertBy = Pk, S.invokeMap = vT, S.iteratee = vd, S.keyBy = gT, S.keys = dn, S.keysIn = Yn, S.map = yu, S.mapKeys = Ik, S.mapValues = Nk, S.matches = AA, S.matchesProperty = MA, S.memoize = wu, S.merge = Lk, S.mergeWith = Mg, S.method = $A, S.methodOf = PA, S.mixin = gd, S.negate = Ou, S.nthArg = IA, S.omit = Rk, S.omitBy = Fk, S.once = CT, S.orderBy = _T, S.over = NA, S.overArgs = IT, S.overEvery = LA, S.overSome = RA, S.partial = ud, S.partialRight = wg, S.partition = yT, S.pick = Yk, S.pickBy = $g, S.property = Fg, S.propertyOf = FA, S.pull = _x, S.pullAll = cg, S.pullAllBy = yx, S.pullAllWith = bx, S.pullAt = wx, S.range = YA, S.rangeRight = WA, S.rearg = NT, S.reject = OT, S.remove = Ox, S.rest = LT, S.reverse = sd, S.sampleSize = DT, S.set = Uk, S.setWith = Vk, S.shuffle = ST, S.slice = Ex, S.sortBy = kT, S.sortedUniq = Mx, S.sortedUniqBy = $x, S.split = fA, S.spread = RT, S.tail = Px, S.take = Cx, S.takeRight = Ix, S.takeRightWhile = Nx, S.takeWhile = Lx, S.tap = Xx, S.throttle = FT, S.thru = _u, S.toArray = xg, S.toPairs = Pg, S.toPairsIn = Cg, S.toPath = zA, S.toPlainObject = kg, S.transform = Bk, S.unary = YT, S.union = Rx, S.unionBy = Fx, S.unionWith = Yx, S.uniq = Wx, S.uniqBy = Ux, S.uniqWith = Vx, S.unset = Hk, S.unzip = od, S.unzipWith = fg, S.update = zk, S.updateWith = jk, S.values = $s, S.valuesIn = Gk, S.without = Bx, S.words = Lg, S.wrap = WT, S.xor = Hx, S.xorBy = zx, S.xorWith = jx, S.zip = Gx, S.zipObject = qx, S.zipObjectDeep = Kx, S.zipWith = Zx, S.entries = Pg, S.entriesIn = Cg, S.extend = Ag, S.extendWith = Su, gd(S, S), S.add = GA, S.attempt = Rg, S.camelCase = Xk, S.capitalize = Ig, S.ceil = qA, S.clamp = qk, S.clone = VT, S.cloneDeep = HT, S.cloneDeepWith = zT, S.cloneWith = BT, S.conformsTo = jT, S.deburr = Ng, S.defaultTo = xA, S.divide = KA, S.endsWith = Jk, S.eq = Nr, S.escape = Qk, S.escapeRegExp = eA, S.every = oT, S.find = uT, S.findIndex = sg, S.findKey = Ok, S.findLast = cT, S.findLastIndex = og, S.findLastKey = Ek, S.floor = ZA, S.forEach = hg, S.forEachRight = pg, S.forIn = Dk, S.forInRight = Sk, S.forOwn = xk, S.forOwnRight = Tk, S.get = dd, S.gt = GT, S.gte = qT, S.has = Mk, S.hasIn = hd, S.head = ug, S.identity = Wn, S.includes = mT, S.indexOf = cx, S.inRange = Kk, S.invoke = Ck, S.isArguments = Ha, S.isArray = Je, S.isArrayBuffer = KT, S.isArrayLike = Fn, S.isArrayLikeObject = en, S.isBoolean = ZT, S.isBuffer = da, S.isDate = XT, S.isElement = JT, S.isEmpty = QT, S.isEqual = ek, S.isEqualWith = tk, S.isError = cd, S.isFinite = nk, S.isFunction = Si, S.isInteger = Og, S.isLength = Eu, S.isMap = Eg, S.isMatch = rk, S.isMatchWith = ik, S.isNaN = ak, S.isNative = sk, S.isNil = lk, S.isNull = ok, S.isNumber = Dg, S.isObject = qt, S.isObjectLike = Jt, S.isPlainObject = Bo, S.isRegExp = fd, S.isSafeInteger = uk, S.isSet = Sg, S.isString = Du, S.isSymbol = Jn, S.isTypedArray = Ms, S.isUndefined = ck, S.isWeakMap = fk, S.isWeakSet = dk, S.join = mx, S.kebabCase = tA, S.last = vr, S.lastIndexOf = vx, S.lowerCase = nA, S.lowerFirst = rA, S.lt = hk, S.lte = pk, S.max = XA, S.maxBy = JA, S.mean = QA, S.meanBy = eM, S.min = tM, S.minBy = nM, S.stubArray = yd, S.stubFalse = bd, S.stubObject = UA, S.stubString = VA, S.stubTrue = BA, S.multiply = rM, S.nth = gx, S.noConflict = CA, S.noop = _d, S.now = bu, S.pad = iA, S.padEnd = aA, S.padStart = sA, S.parseInt = oA, S.random = Zk, S.reduce = bT, S.reduceRight = wT, S.repeat = lA, S.replace = uA, S.result = Wk, S.round = iM, S.runInContext = U, S.sample = ET, S.size = xT, S.snakeCase = cA, S.some = TT, S.sortedIndex = Dx, S.sortedIndexBy = Sx, S.sortedIndexOf = xx, S.sortedLastIndex = Tx, S.sortedLastIndexBy = kx, S.sortedLastIndexOf = Ax, S.startCase = dA, S.startsWith = hA, S.subtract = aM, S.sum = sM, S.sumBy = oM, S.template = pA, S.times = HA, S.toFinite = xi, S.toInteger = tt, S.toLength = Tg, S.toLower = mA, S.toNumber = gr, S.toSafeInteger = mk, S.toString = xt, S.toUpper = vA, S.trim = gA, S.trimEnd = _A, S.trimStart = yA, S.truncate = bA, S.unescape = wA, S.uniqueId = jA, S.upperCase = OA, S.upperFirst = pd, S.each = hg, S.eachRight = pg, S.first = ug, gd(S, function() {
        var i = {};
        return Zr(S, function(o, c) {
          Tt.call(S.prototype, c) || (i[c] = o);
        }), i;
      }(), { chain: !1 }), S.VERSION = r, fr(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(i) {
        S[i].placeholder = S;
      }), fr(["drop", "take"], function(i, o) {
        ht.prototype[i] = function(c) {
          c = c === n ? 1 : on(tt(c), 0);
          var p = this.__filtered__ && !o ? new ht(this) : this.clone();
          return p.__filtered__ ? p.__takeCount__ = bn(c, p.__takeCount__) : p.__views__.push({
            size: bn(c, Ae),
            type: i + (p.__dir__ < 0 ? "Right" : "")
          }), p;
        }, ht.prototype[i + "Right"] = function(c) {
          return this.reverse()[i](c).reverse();
        };
      }), fr(["filter", "map", "takeWhile"], function(i, o) {
        var c = o + 1, p = c == me || c == pe;
        ht.prototype[i] = function(_) {
          var T = this.clone();
          return T.__iteratees__.push({
            iteratee: We(_, 3),
            type: c
          }), T.__filtered__ = T.__filtered__ || p, T;
        };
      }), fr(["head", "last"], function(i, o) {
        var c = "take" + (o ? "Right" : "");
        ht.prototype[i] = function() {
          return this[c](1).value()[0];
        };
      }), fr(["initial", "tail"], function(i, o) {
        var c = "drop" + (o ? "" : "Right");
        ht.prototype[i] = function() {
          return this.__filtered__ ? new ht(this) : this[c](1);
        };
      }), ht.prototype.compact = function() {
        return this.filter(Wn);
      }, ht.prototype.find = function(i) {
        return this.filter(i).head();
      }, ht.prototype.findLast = function(i) {
        return this.reverse().find(i);
      }, ht.prototype.invokeMap = lt(function(i, o) {
        return typeof i == "function" ? new ht(this) : this.map(function(c) {
          return Ro(c, i, o);
        });
      }), ht.prototype.reject = function(i) {
        return this.filter(Ou(We(i)));
      }, ht.prototype.slice = function(i, o) {
        i = tt(i);
        var c = this;
        return c.__filtered__ && (i > 0 || o < 0) ? new ht(c) : (i < 0 ? c = c.takeRight(-i) : i && (c = c.drop(i)), o !== n && (o = tt(o), c = o < 0 ? c.dropRight(-o) : c.take(o - i)), c);
      }, ht.prototype.takeRightWhile = function(i) {
        return this.reverse().takeWhile(i).reverse();
      }, ht.prototype.toArray = function() {
        return this.take(Ae);
      }, Zr(ht.prototype, function(i, o) {
        var c = /^(?:filter|find|map|reject)|While$/.test(o), p = /^(?:head|last)$/.test(o), _ = S[p ? "take" + (o == "last" ? "Right" : "") : o], T = p || /^find/.test(o);
        _ && (S.prototype[o] = function() {
          var I = this.__wrapped__, R = p ? [1] : arguments, B = I instanceof ht, ee = R[0], ne = B || Je(I), ae = function(dt) {
            var pt = _.apply(S, aa([dt], R));
            return p && ye ? pt[0] : pt;
          };
          ne && c && typeof ee == "function" && ee.length != 1 && (B = ne = !1);
          var ye = this.__chain__, $e = !!this.__actions__.length, Be = T && !ye, at = B && !$e;
          if (!T && ne) {
            I = at ? I : new ht(this);
            var He = i.apply(I, R);
            return He.__actions__.push({ func: _u, args: [ae], thisArg: n }), new hr(He, ye);
          }
          return Be && at ? i.apply(this, R) : (He = this.thru(ae), Be ? p ? He.value()[0] : He.value() : He);
        });
      }), fr(["pop", "push", "shift", "sort", "splice", "unshift"], function(i) {
        var o = Hl[i], c = /^(?:push|sort|unshift)$/.test(i) ? "tap" : "thru", p = /^(?:pop|shift)$/.test(i);
        S.prototype[i] = function() {
          var _ = arguments;
          if (p && !this.__chain__) {
            var T = this.value();
            return o.apply(Je(T) ? T : [], _);
          }
          return this[c](function(I) {
            return o.apply(Je(I) ? I : [], _);
          });
        };
      }), Zr(ht.prototype, function(i, o) {
        var c = S[o];
        if (c) {
          var p = c.name + "";
          Tt.call(Ss, p) || (Ss[p] = []), Ss[p].push({ name: o, func: c });
        }
      }), Ss[fu(n, b).name] = [{
        name: "wrapper",
        func: n
      }], ht.prototype.clone = wD, ht.prototype.reverse = OD, ht.prototype.value = ED, S.prototype.at = Jx, S.prototype.chain = Qx, S.prototype.commit = eT, S.prototype.next = tT, S.prototype.plant = rT, S.prototype.reverse = iT, S.prototype.toJSON = S.prototype.valueOf = S.prototype.value = aT, S.prototype.first = S.prototype.head, Mo && (S.prototype[Mo] = nT), S;
    }, Os = eD();
    La ? ((La.exports = Os)._ = Os, vf._ = Os) : mn._ = Os;
  }).call(Jo);
})(Oc, Oc.exports);
var bw = Oc.exports;
//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var ww;
function be() {
  return ww.apply(null, arguments);
}
function OG(e) {
  ww = e;
}
function Vr(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function es(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function Ot(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function Wp(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (Ot(e, t))
      return !1;
  return !0;
}
function Hn(e) {
  return e === void 0;
}
function qi(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function Pl(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function Ow(e, t) {
  var n = [], r, a = e.length;
  for (r = 0; r < a; ++r)
    n.push(t(e[r], r));
  return n;
}
function Oa(e, t) {
  for (var n in t)
    Ot(t, n) && (e[n] = t[n]);
  return Ot(t, "toString") && (e.toString = t.toString), Ot(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function mi(e, t, n, r) {
  return jw(e, t, n, r, !0).utc();
}
function EG() {
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
function nt(e) {
  return e._pf == null && (e._pf = EG()), e._pf;
}
var Dh;
Array.prototype.some ? Dh = Array.prototype.some : Dh = function(e) {
  var t = Object(this), n = t.length >>> 0, r;
  for (r = 0; r < n; r++)
    if (r in t && e.call(this, t[r], r, t))
      return !0;
  return !1;
};
function Up(e) {
  if (e._isValid == null) {
    var t = nt(e), n = Dh.call(t.parsedDateParts, function(a) {
      return a != null;
    }), r = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
    if (e._strict && (r = r && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0), Object.isFrozen == null || !Object.isFrozen(e))
      e._isValid = r;
    else
      return r;
  }
  return e._isValid;
}
function jc(e) {
  var t = mi(NaN);
  return e != null ? Oa(nt(t), e) : nt(t).userInvalidated = !0, t;
}
var Gy = be.momentProperties = [], Ld = !1;
function Vp(e, t) {
  var n, r, a, s = Gy.length;
  if (Hn(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), Hn(t._i) || (e._i = t._i), Hn(t._f) || (e._f = t._f), Hn(t._l) || (e._l = t._l), Hn(t._strict) || (e._strict = t._strict), Hn(t._tzm) || (e._tzm = t._tzm), Hn(t._isUTC) || (e._isUTC = t._isUTC), Hn(t._offset) || (e._offset = t._offset), Hn(t._pf) || (e._pf = nt(t)), Hn(t._locale) || (e._locale = t._locale), s > 0)
    for (n = 0; n < s; n++)
      r = Gy[n], a = t[r], Hn(a) || (e[r] = a);
  return e;
}
function Cl(e) {
  Vp(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), Ld === !1 && (Ld = !0, be.updateOffset(this), Ld = !1);
}
function Br(e) {
  return e instanceof Cl || e != null && e._isAMomentObject != null;
}
function Ew(e) {
  be.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function Mr(e, t) {
  var n = !0;
  return Oa(function() {
    if (be.deprecationHandler != null && be.deprecationHandler(null, e), n) {
      var r = [], a, s, l, u = arguments.length;
      for (s = 0; s < u; s++) {
        if (a = "", typeof arguments[s] == "object") {
          a += `
[` + s + "] ";
          for (l in arguments[0])
            Ot(arguments[0], l) && (a += l + ": " + arguments[0][l] + ", ");
          a = a.slice(0, -2);
        } else
          a = arguments[s];
        r.push(a);
      }
      Ew(
        e + `
Arguments: ` + Array.prototype.slice.call(r).join("") + `
` + new Error().stack
      ), n = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var qy = {};
function Dw(e, t) {
  be.deprecationHandler != null && be.deprecationHandler(e, t), qy[e] || (Ew(t), qy[e] = !0);
}
be.suppressDeprecationWarnings = !1;
be.deprecationHandler = null;
function vi(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function DG(e) {
  var t, n;
  for (n in e)
    Ot(e, n) && (t = e[n], vi(t) ? this[n] = t : this["_" + n] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function Sh(e, t) {
  var n = Oa({}, e), r;
  for (r in t)
    Ot(t, r) && (es(e[r]) && es(t[r]) ? (n[r] = {}, Oa(n[r], e[r]), Oa(n[r], t[r])) : t[r] != null ? n[r] = t[r] : delete n[r]);
  for (r in e)
    Ot(e, r) && !Ot(t, r) && es(e[r]) && (n[r] = Oa({}, n[r]));
  return n;
}
function Bp(e) {
  e != null && this.set(e);
}
var xh;
Object.keys ? xh = Object.keys : xh = function(e) {
  var t, n = [];
  for (t in e)
    Ot(e, t) && n.push(t);
  return n;
};
var SG = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function xG(e, t, n) {
  var r = this._calendar[e] || this._calendar.sameElse;
  return vi(r) ? r.call(t, n) : r;
}
function ui(e, t, n) {
  var r = "" + Math.abs(e), a = t - r.length, s = e >= 0;
  return (s ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, a)).toString().substr(1) + r;
}
var Hp = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Ru = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Rd = {}, Gs = {};
function Le(e, t, n, r) {
  var a = r;
  typeof r == "string" && (a = function() {
    return this[r]();
  }), e && (Gs[e] = a), t && (Gs[t[0]] = function() {
    return ui(a.apply(this, arguments), t[1], t[2]);
  }), n && (Gs[n] = function() {
    return this.localeData().ordinal(
      a.apply(this, arguments),
      e
    );
  });
}
function TG(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function kG(e) {
  var t = e.match(Hp), n, r;
  for (n = 0, r = t.length; n < r; n++)
    Gs[t[n]] ? t[n] = Gs[t[n]] : t[n] = TG(t[n]);
  return function(a) {
    var s = "", l;
    for (l = 0; l < r; l++)
      s += vi(t[l]) ? t[l].call(a, e) : t[l];
    return s;
  };
}
function Hu(e, t) {
  return e.isValid() ? (t = Sw(t, e.localeData()), Rd[t] = Rd[t] || kG(t), Rd[t](e)) : e.localeData().invalidDate();
}
function Sw(e, t) {
  var n = 5;
  function r(a) {
    return t.longDateFormat(a) || a;
  }
  for (Ru.lastIndex = 0; n >= 0 && Ru.test(e); )
    e = e.replace(
      Ru,
      r
    ), Ru.lastIndex = 0, n -= 1;
  return e;
}
var AG = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function MG(e) {
  var t = this._longDateFormat[e], n = this._longDateFormat[e.toUpperCase()];
  return t || !n ? t : (this._longDateFormat[e] = n.match(Hp).map(function(r) {
    return r === "MMMM" || r === "MM" || r === "DD" || r === "dddd" ? r.slice(1) : r;
  }).join(""), this._longDateFormat[e]);
}
var $G = "Invalid date";
function PG() {
  return this._invalidDate;
}
var CG = "%d", IG = /\d{1,2}/;
function NG(e) {
  return this._ordinal.replace("%d", e);
}
var LG = {
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
function RG(e, t, n, r) {
  var a = this._relativeTime[n];
  return vi(a) ? a(e, t, n, r) : a.replace(/%d/i, e);
}
function FG(e, t) {
  var n = this._relativeTime[e > 0 ? "future" : "past"];
  return vi(n) ? n(t) : n.replace(/%s/i, t);
}
var ll = {};
function xn(e, t) {
  var n = e.toLowerCase();
  ll[n] = ll[n + "s"] = ll[t] = e;
}
function $r(e) {
  return typeof e == "string" ? ll[e] || ll[e.toLowerCase()] : void 0;
}
function zp(e) {
  var t = {}, n, r;
  for (r in e)
    Ot(e, r) && (n = $r(r), n && (t[n] = e[r]));
  return t;
}
var xw = {};
function Tn(e, t) {
  xw[e] = t;
}
function YG(e) {
  var t = [], n;
  for (n in e)
    Ot(e, n) && t.push({ unit: n, priority: xw[n] });
  return t.sort(function(r, a) {
    return r.priority - a.priority;
  }), t;
}
function Gc(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
function br(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function ft(e) {
  var t = +e, n = 0;
  return t !== 0 && isFinite(t) && (n = br(t)), n;
}
function So(e, t) {
  return function(n) {
    return n != null ? (Tw(this, e, n), be.updateOffset(this, t), this) : Ec(this, e);
  };
}
function Ec(e, t) {
  return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
}
function Tw(e, t, n) {
  e.isValid() && !isNaN(n) && (t === "FullYear" && Gc(e.year()) && e.month() === 1 && e.date() === 29 ? (n = ft(n), e._d["set" + (e._isUTC ? "UTC" : "") + t](
    n,
    e.month(),
    Qc(n, e.month())
  )) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n));
}
function WG(e) {
  return e = $r(e), vi(this[e]) ? this[e]() : this;
}
function UG(e, t) {
  if (typeof e == "object") {
    e = zp(e);
    var n = YG(e), r, a = n.length;
    for (r = 0; r < a; r++)
      this[n[r].unit](e[n[r].unit]);
  } else if (e = $r(e), vi(this[e]))
    return this[e](t);
  return this;
}
var kw = /\d/, lr = /\d\d/, Aw = /\d{3}/, jp = /\d{4}/, qc = /[+-]?\d{6}/, Bt = /\d\d?/, Mw = /\d\d\d\d?/, $w = /\d\d\d\d\d\d?/, Kc = /\d{1,3}/, Gp = /\d{1,4}/, Zc = /[+-]?\d{1,6}/, xo = /\d+/, Xc = /[+-]?\d+/, VG = /Z|[+-]\d\d:?\d\d/gi, Jc = /Z|[+-]\d\d(?::?\d\d)?/gi, BG = /[+-]?\d+(\.\d{1,3})?/, Il = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, Dc;
Dc = {};
function xe(e, t, n) {
  Dc[e] = vi(t) ? t : function(r, a) {
    return r && n ? n : t;
  };
}
function HG(e, t) {
  return Ot(Dc, e) ? Dc[e](t._strict, t._locale) : new RegExp(zG(e));
}
function zG(e) {
  return nr(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, n, r, a, s) {
        return n || r || a || s;
      }
    )
  );
}
function nr(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
var Th = {};
function Ct(e, t) {
  var n, r = t, a;
  for (typeof e == "string" && (e = [e]), qi(t) && (r = function(s, l) {
    l[t] = ft(s);
  }), a = e.length, n = 0; n < a; n++)
    Th[e[n]] = r;
}
function Nl(e, t) {
  Ct(e, function(n, r, a, s) {
    a._w = a._w || {}, t(n, a._w, a, s);
  });
}
function jG(e, t, n) {
  t != null && Ot(Th, e) && Th[e](t, n._a, n, e);
}
var Dn = 0, Li = 1, ei = 2, fn = 3, Wr = 4, Ri = 5, Xa = 6, GG = 7, qG = 8;
function KG(e, t) {
  return (e % t + t) % t;
}
var nn;
Array.prototype.indexOf ? nn = Array.prototype.indexOf : nn = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function Qc(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var n = KG(t, 12);
  return e += (t - n) / 12, n === 1 ? Gc(e) ? 29 : 28 : 31 - n % 7 % 2;
}
Le("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
Le("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
Le("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
xn("month", "M");
Tn("month", 8);
xe("M", Bt);
xe("MM", Bt, lr);
xe("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
xe("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
Ct(["M", "MM"], function(e, t) {
  t[Li] = ft(e) - 1;
});
Ct(["MMM", "MMMM"], function(e, t, n, r) {
  var a = n._locale.monthsParse(e, r, n._strict);
  a != null ? t[Li] = a : nt(n).invalidMonth = e;
});
var ZG = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), Pw = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), Cw = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, XG = Il, JG = Il;
function QG(e, t) {
  return e ? Vr(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Cw).test(t) ? "format" : "standalone"][e.month()] : Vr(this._months) ? this._months : this._months.standalone;
}
function e7(e, t) {
  return e ? Vr(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Cw.test(t) ? "format" : "standalone"][e.month()] : Vr(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function t7(e, t, n) {
  var r, a, s, l = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r)
      s = mi([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(
        s,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[r] = this.months(s, "").toLocaleLowerCase();
  return n ? t === "MMM" ? (a = nn.call(this._shortMonthsParse, l), a !== -1 ? a : null) : (a = nn.call(this._longMonthsParse, l), a !== -1 ? a : null) : t === "MMM" ? (a = nn.call(this._shortMonthsParse, l), a !== -1 ? a : (a = nn.call(this._longMonthsParse, l), a !== -1 ? a : null)) : (a = nn.call(this._longMonthsParse, l), a !== -1 ? a : (a = nn.call(this._shortMonthsParse, l), a !== -1 ? a : null));
}
function n7(e, t, n) {
  var r, a, s;
  if (this._monthsParseExact)
    return t7.call(this, e, t, n);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++) {
    if (a = mi([2e3, r]), n && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp(
      "^" + this.months(a, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[r] = new RegExp(
      "^" + this.monthsShort(a, "").replace(".", "") + "$",
      "i"
    )), !n && !this._monthsParse[r] && (s = "^" + this.months(a, "") + "|^" + this.monthsShort(a, ""), this._monthsParse[r] = new RegExp(s.replace(".", ""), "i")), n && t === "MMMM" && this._longMonthsParse[r].test(e))
      return r;
    if (n && t === "MMM" && this._shortMonthsParse[r].test(e))
      return r;
    if (!n && this._monthsParse[r].test(e))
      return r;
  }
}
function Iw(e, t) {
  var n;
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = ft(t);
    else if (t = e.localeData().monthsParse(t), !qi(t))
      return e;
  }
  return n = Math.min(e.date(), Qc(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e;
}
function Nw(e) {
  return e != null ? (Iw(this, e), be.updateOffset(this, !0), this) : Ec(this, "Month");
}
function r7() {
  return Qc(this.year(), this.month());
}
function i7(e) {
  return this._monthsParseExact ? (Ot(this, "_monthsRegex") || Lw.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (Ot(this, "_monthsShortRegex") || (this._monthsShortRegex = XG), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function a7(e) {
  return this._monthsParseExact ? (Ot(this, "_monthsRegex") || Lw.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (Ot(this, "_monthsRegex") || (this._monthsRegex = JG), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function Lw() {
  function e(l, u) {
    return u.length - l.length;
  }
  var t = [], n = [], r = [], a, s;
  for (a = 0; a < 12; a++)
    s = mi([2e3, a]), t.push(this.monthsShort(s, "")), n.push(this.months(s, "")), r.push(this.months(s, "")), r.push(this.monthsShort(s, ""));
  for (t.sort(e), n.sort(e), r.sort(e), a = 0; a < 12; a++)
    t[a] = nr(t[a]), n[a] = nr(n[a]);
  for (a = 0; a < 24; a++)
    r[a] = nr(r[a]);
  this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
Le("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? ui(e, 4) : "+" + e;
});
Le(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
Le(0, ["YYYY", 4], 0, "year");
Le(0, ["YYYYY", 5], 0, "year");
Le(0, ["YYYYYY", 6, !0], 0, "year");
xn("year", "y");
Tn("year", 1);
xe("Y", Xc);
xe("YY", Bt, lr);
xe("YYYY", Gp, jp);
xe("YYYYY", Zc, qc);
xe("YYYYYY", Zc, qc);
Ct(["YYYYY", "YYYYYY"], Dn);
Ct("YYYY", function(e, t) {
  t[Dn] = e.length === 2 ? be.parseTwoDigitYear(e) : ft(e);
});
Ct("YY", function(e, t) {
  t[Dn] = be.parseTwoDigitYear(e);
});
Ct("Y", function(e, t) {
  t[Dn] = parseInt(e, 10);
});
function ul(e) {
  return Gc(e) ? 366 : 365;
}
be.parseTwoDigitYear = function(e) {
  return ft(e) + (ft(e) > 68 ? 1900 : 2e3);
};
var Rw = So("FullYear", !0);
function s7() {
  return Gc(this.year());
}
function o7(e, t, n, r, a, s, l) {
  var u;
  return e < 100 && e >= 0 ? (u = new Date(e + 400, t, n, r, a, s, l), isFinite(u.getFullYear()) && u.setFullYear(e)) : u = new Date(e, t, n, r, a, s, l), u;
}
function Ol(e) {
  var t, n;
  return e < 100 && e >= 0 ? (n = Array.prototype.slice.call(arguments), n[0] = e + 400, t = new Date(Date.UTC.apply(null, n)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function Sc(e, t, n) {
  var r = 7 + t - n, a = (7 + Ol(e, 0, r).getUTCDay() - t) % 7;
  return -a + r - 1;
}
function Fw(e, t, n, r, a) {
  var s = (7 + n - r) % 7, l = Sc(e, r, a), u = 1 + 7 * (t - 1) + s + l, f, h;
  return u <= 0 ? (f = e - 1, h = ul(f) + u) : u > ul(e) ? (f = e + 1, h = u - ul(e)) : (f = e, h = u), {
    year: f,
    dayOfYear: h
  };
}
function El(e, t, n) {
  var r = Sc(e.year(), t, n), a = Math.floor((e.dayOfYear() - r - 1) / 7) + 1, s, l;
  return a < 1 ? (l = e.year() - 1, s = a + Yi(l, t, n)) : a > Yi(e.year(), t, n) ? (s = a - Yi(e.year(), t, n), l = e.year() + 1) : (l = e.year(), s = a), {
    week: s,
    year: l
  };
}
function Yi(e, t, n) {
  var r = Sc(e, t, n), a = Sc(e + 1, t, n);
  return (ul(e) - r + a) / 7;
}
Le("w", ["ww", 2], "wo", "week");
Le("W", ["WW", 2], "Wo", "isoWeek");
xn("week", "w");
xn("isoWeek", "W");
Tn("week", 5);
Tn("isoWeek", 5);
xe("w", Bt);
xe("ww", Bt, lr);
xe("W", Bt);
xe("WW", Bt, lr);
Nl(
  ["w", "ww", "W", "WW"],
  function(e, t, n, r) {
    t[r.substr(0, 1)] = ft(e);
  }
);
function l7(e) {
  return El(e, this._week.dow, this._week.doy).week;
}
var u7 = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function c7() {
  return this._week.dow;
}
function f7() {
  return this._week.doy;
}
function d7(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function h7(e) {
  var t = El(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
Le("d", 0, "do", "day");
Le("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
Le("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
Le("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
Le("e", 0, 0, "weekday");
Le("E", 0, 0, "isoWeekday");
xn("day", "d");
xn("weekday", "e");
xn("isoWeekday", "E");
Tn("day", 11);
Tn("weekday", 11);
Tn("isoWeekday", 11);
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
  var a = n._locale.weekdaysParse(e, r, n._strict);
  a != null ? t.d = a : nt(n).invalidWeekday = e;
});
Nl(["d", "e", "E"], function(e, t, n, r) {
  t[r] = ft(e);
});
function p7(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function m7(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function qp(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var v7 = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), Yw = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), g7 = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), _7 = Il, y7 = Il, b7 = Il;
function w7(e, t) {
  var n = Vr(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? qp(n, this._week.dow) : e ? n[e.day()] : n;
}
function O7(e) {
  return e === !0 ? qp(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function E7(e) {
  return e === !0 ? qp(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function D7(e, t, n) {
  var r, a, s, l = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0; r < 7; ++r)
      s = mi([2e3, 1]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(
        s,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[r] = this.weekdaysShort(
        s,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(s, "").toLocaleLowerCase();
  return n ? t === "dddd" ? (a = nn.call(this._weekdaysParse, l), a !== -1 ? a : null) : t === "ddd" ? (a = nn.call(this._shortWeekdaysParse, l), a !== -1 ? a : null) : (a = nn.call(this._minWeekdaysParse, l), a !== -1 ? a : null) : t === "dddd" ? (a = nn.call(this._weekdaysParse, l), a !== -1 || (a = nn.call(this._shortWeekdaysParse, l), a !== -1) ? a : (a = nn.call(this._minWeekdaysParse, l), a !== -1 ? a : null)) : t === "ddd" ? (a = nn.call(this._shortWeekdaysParse, l), a !== -1 || (a = nn.call(this._weekdaysParse, l), a !== -1) ? a : (a = nn.call(this._minWeekdaysParse, l), a !== -1 ? a : null)) : (a = nn.call(this._minWeekdaysParse, l), a !== -1 || (a = nn.call(this._weekdaysParse, l), a !== -1) ? a : (a = nn.call(this._shortWeekdaysParse, l), a !== -1 ? a : null));
}
function S7(e, t, n) {
  var r, a, s;
  if (this._weekdaysParseExact)
    return D7.call(this, e, t, n);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) {
    if (a = mi([2e3, 1]).day(r), n && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp(
      "^" + this.weekdays(a, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[r] = new RegExp(
      "^" + this.weekdaysShort(a, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[r] = new RegExp(
      "^" + this.weekdaysMin(a, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[r] || (s = "^" + this.weekdays(a, "") + "|^" + this.weekdaysShort(a, "") + "|^" + this.weekdaysMin(a, ""), this._weekdaysParse[r] = new RegExp(s.replace(".", ""), "i")), n && t === "dddd" && this._fullWeekdaysParse[r].test(e))
      return r;
    if (n && t === "ddd" && this._shortWeekdaysParse[r].test(e))
      return r;
    if (n && t === "dd" && this._minWeekdaysParse[r].test(e))
      return r;
    if (!n && this._weekdaysParse[r].test(e))
      return r;
  }
}
function x7(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
  return e != null ? (e = p7(e, this.localeData()), this.add(e - t, "d")) : t;
}
function T7(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function k7(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = m7(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function A7(e) {
  return this._weekdaysParseExact ? (Ot(this, "_weekdaysRegex") || Kp.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (Ot(this, "_weekdaysRegex") || (this._weekdaysRegex = _7), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function M7(e) {
  return this._weekdaysParseExact ? (Ot(this, "_weekdaysRegex") || Kp.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (Ot(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = y7), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function $7(e) {
  return this._weekdaysParseExact ? (Ot(this, "_weekdaysRegex") || Kp.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (Ot(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = b7), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function Kp() {
  function e(d, m) {
    return m.length - d.length;
  }
  var t = [], n = [], r = [], a = [], s, l, u, f, h;
  for (s = 0; s < 7; s++)
    l = mi([2e3, 1]).day(s), u = nr(this.weekdaysMin(l, "")), f = nr(this.weekdaysShort(l, "")), h = nr(this.weekdays(l, "")), t.push(u), n.push(f), r.push(h), a.push(u), a.push(f), a.push(h);
  t.sort(e), n.sort(e), r.sort(e), a.sort(e), this._weekdaysRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
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
function Zp() {
  return this.hours() % 12 || 12;
}
function P7() {
  return this.hours() || 24;
}
Le("H", ["HH", 2], 0, "hour");
Le("h", ["hh", 2], 0, Zp);
Le("k", ["kk", 2], 0, P7);
Le("hmm", 0, 0, function() {
  return "" + Zp.apply(this) + ui(this.minutes(), 2);
});
Le("hmmss", 0, 0, function() {
  return "" + Zp.apply(this) + ui(this.minutes(), 2) + ui(this.seconds(), 2);
});
Le("Hmm", 0, 0, function() {
  return "" + this.hours() + ui(this.minutes(), 2);
});
Le("Hmmss", 0, 0, function() {
  return "" + this.hours() + ui(this.minutes(), 2) + ui(this.seconds(), 2);
});
function Ww(e, t) {
  Le(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
Ww("a", !0);
Ww("A", !1);
xn("hour", "h");
Tn("hour", 13);
function Uw(e, t) {
  return t._meridiemParse;
}
xe("a", Uw);
xe("A", Uw);
xe("H", Bt);
xe("h", Bt);
xe("k", Bt);
xe("HH", Bt, lr);
xe("hh", Bt, lr);
xe("kk", Bt, lr);
xe("hmm", Mw);
xe("hmmss", $w);
xe("Hmm", Mw);
xe("Hmmss", $w);
Ct(["H", "HH"], fn);
Ct(["k", "kk"], function(e, t, n) {
  var r = ft(e);
  t[fn] = r === 24 ? 0 : r;
});
Ct(["a", "A"], function(e, t, n) {
  n._isPm = n._locale.isPM(e), n._meridiem = e;
});
Ct(["h", "hh"], function(e, t, n) {
  t[fn] = ft(e), nt(n).bigHour = !0;
});
Ct("hmm", function(e, t, n) {
  var r = e.length - 2;
  t[fn] = ft(e.substr(0, r)), t[Wr] = ft(e.substr(r)), nt(n).bigHour = !0;
});
Ct("hmmss", function(e, t, n) {
  var r = e.length - 4, a = e.length - 2;
  t[fn] = ft(e.substr(0, r)), t[Wr] = ft(e.substr(r, 2)), t[Ri] = ft(e.substr(a)), nt(n).bigHour = !0;
});
Ct("Hmm", function(e, t, n) {
  var r = e.length - 2;
  t[fn] = ft(e.substr(0, r)), t[Wr] = ft(e.substr(r));
});
Ct("Hmmss", function(e, t, n) {
  var r = e.length - 4, a = e.length - 2;
  t[fn] = ft(e.substr(0, r)), t[Wr] = ft(e.substr(r, 2)), t[Ri] = ft(e.substr(a));
});
function C7(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var I7 = /[ap]\.?m?\.?/i, N7 = So("Hours", !0);
function L7(e, t, n) {
  return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM";
}
var Vw = {
  calendar: SG,
  longDateFormat: AG,
  invalidDate: $G,
  ordinal: CG,
  dayOfMonthOrdinalParse: IG,
  relativeTime: LG,
  months: ZG,
  monthsShort: Pw,
  week: u7,
  weekdays: v7,
  weekdaysMin: g7,
  weekdaysShort: Yw,
  meridiemParse: I7
}, jt = {}, Qo = {}, Dl;
function R7(e, t) {
  var n, r = Math.min(e.length, t.length);
  for (n = 0; n < r; n += 1)
    if (e[n] !== t[n])
      return n;
  return r;
}
function Ky(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function F7(e) {
  for (var t = 0, n, r, a, s; t < e.length; ) {
    for (s = Ky(e[t]).split("-"), n = s.length, r = Ky(e[t + 1]), r = r ? r.split("-") : null; n > 0; ) {
      if (a = ef(s.slice(0, n).join("-")), a)
        return a;
      if (r && r.length >= n && R7(s, r) >= n - 1)
        break;
      n--;
    }
    t++;
  }
  return Dl;
}
function Y7(e) {
  return e.match("^[^/\\\\]*$") != null;
}
function ef(e) {
  var t = null, n;
  if (jt[e] === void 0 && typeof module < "u" && module && module.exports && Y7(e))
    try {
      t = Dl._abbr, n = require, n("./locale/" + e), Sa(t);
    } catch {
      jt[e] = null;
    }
  return jt[e];
}
function Sa(e, t) {
  var n;
  return e && (Hn(t) ? n = Qi(e) : n = Xp(e, t), n ? Dl = n : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), Dl._abbr;
}
function Xp(e, t) {
  if (t !== null) {
    var n, r = Vw;
    if (t.abbr = e, jt[e] != null)
      Dw(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), r = jt[e]._config;
    else if (t.parentLocale != null)
      if (jt[t.parentLocale] != null)
        r = jt[t.parentLocale]._config;
      else if (n = ef(t.parentLocale), n != null)
        r = n._config;
      else
        return Qo[t.parentLocale] || (Qo[t.parentLocale] = []), Qo[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return jt[e] = new Bp(Sh(r, t)), Qo[e] && Qo[e].forEach(function(a) {
      Xp(a.name, a.config);
    }), Sa(e), jt[e];
  } else
    return delete jt[e], null;
}
function W7(e, t) {
  if (t != null) {
    var n, r, a = Vw;
    jt[e] != null && jt[e].parentLocale != null ? jt[e].set(Sh(jt[e]._config, t)) : (r = ef(e), r != null && (a = r._config), t = Sh(a, t), r == null && (t.abbr = e), n = new Bp(t), n.parentLocale = jt[e], jt[e] = n), Sa(e);
  } else
    jt[e] != null && (jt[e].parentLocale != null ? (jt[e] = jt[e].parentLocale, e === Sa() && Sa(e)) : jt[e] != null && delete jt[e]);
  return jt[e];
}
function Qi(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return Dl;
  if (!Vr(e)) {
    if (t = ef(e), t)
      return t;
    e = [e];
  }
  return F7(e);
}
function U7() {
  return xh(jt);
}
function Jp(e) {
  var t, n = e._a;
  return n && nt(e).overflow === -2 && (t = n[Li] < 0 || n[Li] > 11 ? Li : n[ei] < 1 || n[ei] > Qc(n[Dn], n[Li]) ? ei : n[fn] < 0 || n[fn] > 24 || n[fn] === 24 && (n[Wr] !== 0 || n[Ri] !== 0 || n[Xa] !== 0) ? fn : n[Wr] < 0 || n[Wr] > 59 ? Wr : n[Ri] < 0 || n[Ri] > 59 ? Ri : n[Xa] < 0 || n[Xa] > 999 ? Xa : -1, nt(e)._overflowDayOfYear && (t < Dn || t > ei) && (t = ei), nt(e)._overflowWeeks && t === -1 && (t = GG), nt(e)._overflowWeekday && t === -1 && (t = qG), nt(e).overflow = t), e;
}
var V7 = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, B7 = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, H7 = /Z|[+-]\d\d(?::?\d\d)?/, Fu = [
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
], Fd = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], z7 = /^\/?Date\((-?\d+)/i, j7 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, G7 = {
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
function Bw(e) {
  var t, n, r = e._i, a = V7.exec(r) || B7.exec(r), s, l, u, f, h = Fu.length, d = Fd.length;
  if (a) {
    for (nt(e).iso = !0, t = 0, n = h; t < n; t++)
      if (Fu[t][1].exec(a[1])) {
        l = Fu[t][0], s = Fu[t][2] !== !1;
        break;
      }
    if (l == null) {
      e._isValid = !1;
      return;
    }
    if (a[3]) {
      for (t = 0, n = d; t < n; t++)
        if (Fd[t][1].exec(a[3])) {
          u = (a[2] || " ") + Fd[t][0];
          break;
        }
      if (u == null) {
        e._isValid = !1;
        return;
      }
    }
    if (!s && u != null) {
      e._isValid = !1;
      return;
    }
    if (a[4])
      if (H7.exec(a[4]))
        f = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = l + (u || "") + (f || ""), em(e);
  } else
    e._isValid = !1;
}
function q7(e, t, n, r, a, s) {
  var l = [
    K7(e),
    Pw.indexOf(t),
    parseInt(n, 10),
    parseInt(r, 10),
    parseInt(a, 10)
  ];
  return s && l.push(parseInt(s, 10)), l;
}
function K7(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function Z7(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function X7(e, t, n) {
  if (e) {
    var r = Yw.indexOf(e), a = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (r !== a)
      return nt(n).weekdayMismatch = !0, n._isValid = !1, !1;
  }
  return !0;
}
function J7(e, t, n) {
  if (e)
    return G7[e];
  if (t)
    return 0;
  var r = parseInt(n, 10), a = r % 100, s = (r - a) / 100;
  return s * 60 + a;
}
function Hw(e) {
  var t = j7.exec(Z7(e._i)), n;
  if (t) {
    if (n = q7(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !X7(t[1], n, e))
      return;
    e._a = n, e._tzm = J7(t[8], t[9], t[10]), e._d = Ol.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), nt(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function Q7(e) {
  var t = z7.exec(e._i);
  if (t !== null) {
    e._d = /* @__PURE__ */ new Date(+t[1]);
    return;
  }
  if (Bw(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (Hw(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : be.createFromInputFallback(e);
}
be.createFromInputFallback = Mr(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function Fs(e, t, n) {
  return e ?? t ?? n;
}
function eq(e) {
  var t = new Date(be.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function Qp(e) {
  var t, n, r = [], a, s, l;
  if (!e._d) {
    for (a = eq(e), e._w && e._a[ei] == null && e._a[Li] == null && tq(e), e._dayOfYear != null && (l = Fs(e._a[Dn], a[Dn]), (e._dayOfYear > ul(l) || e._dayOfYear === 0) && (nt(e)._overflowDayOfYear = !0), n = Ol(l, 0, e._dayOfYear), e._a[Li] = n.getUTCMonth(), e._a[ei] = n.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = r[t] = a[t];
    for (; t < 7; t++)
      e._a[t] = r[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[fn] === 24 && e._a[Wr] === 0 && e._a[Ri] === 0 && e._a[Xa] === 0 && (e._nextDay = !0, e._a[fn] = 0), e._d = (e._useUTC ? Ol : o7).apply(
      null,
      r
    ), s = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[fn] = 24), e._w && typeof e._w.d < "u" && e._w.d !== s && (nt(e).weekdayMismatch = !0);
  }
}
function tq(e) {
  var t, n, r, a, s, l, u, f, h;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (s = 1, l = 4, n = Fs(
    t.GG,
    e._a[Dn],
    El(Vt(), 1, 4).year
  ), r = Fs(t.W, 1), a = Fs(t.E, 1), (a < 1 || a > 7) && (f = !0)) : (s = e._locale._week.dow, l = e._locale._week.doy, h = El(Vt(), s, l), n = Fs(t.gg, e._a[Dn], h.year), r = Fs(t.w, h.week), t.d != null ? (a = t.d, (a < 0 || a > 6) && (f = !0)) : t.e != null ? (a = t.e + s, (t.e < 0 || t.e > 6) && (f = !0)) : a = s), r < 1 || r > Yi(n, s, l) ? nt(e)._overflowWeeks = !0 : f != null ? nt(e)._overflowWeekday = !0 : (u = Fw(n, r, a, s, l), e._a[Dn] = u.year, e._dayOfYear = u.dayOfYear);
}
be.ISO_8601 = function() {
};
be.RFC_2822 = function() {
};
function em(e) {
  if (e._f === be.ISO_8601) {
    Bw(e);
    return;
  }
  if (e._f === be.RFC_2822) {
    Hw(e);
    return;
  }
  e._a = [], nt(e).empty = !0;
  var t = "" + e._i, n, r, a, s, l, u = t.length, f = 0, h, d;
  for (a = Sw(e._f, e._locale).match(Hp) || [], d = a.length, n = 0; n < d; n++)
    s = a[n], r = (t.match(HG(s, e)) || [])[0], r && (l = t.substr(0, t.indexOf(r)), l.length > 0 && nt(e).unusedInput.push(l), t = t.slice(
      t.indexOf(r) + r.length
    ), f += r.length), Gs[s] ? (r ? nt(e).empty = !1 : nt(e).unusedTokens.push(s), jG(s, r, e)) : e._strict && !r && nt(e).unusedTokens.push(s);
  nt(e).charsLeftOver = u - f, t.length > 0 && nt(e).unusedInput.push(t), e._a[fn] <= 12 && nt(e).bigHour === !0 && e._a[fn] > 0 && (nt(e).bigHour = void 0), nt(e).parsedDateParts = e._a.slice(0), nt(e).meridiem = e._meridiem, e._a[fn] = nq(
    e._locale,
    e._a[fn],
    e._meridiem
  ), h = nt(e).era, h !== null && (e._a[Dn] = e._locale.erasConvertYear(h, e._a[Dn])), Qp(e), Jp(e);
}
function nq(e, t, n) {
  var r;
  return n == null ? t : e.meridiemHour != null ? e.meridiemHour(t, n) : (e.isPM != null && (r = e.isPM(n), r && t < 12 && (t += 12), !r && t === 12 && (t = 0)), t);
}
function rq(e) {
  var t, n, r, a, s, l, u = !1, f = e._f.length;
  if (f === 0) {
    nt(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (a = 0; a < f; a++)
    s = 0, l = !1, t = Vp({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[a], em(t), Up(t) && (l = !0), s += nt(t).charsLeftOver, s += nt(t).unusedTokens.length * 10, nt(t).score = s, u ? s < r && (r = s, n = t) : (r == null || s < r || l) && (r = s, n = t, l && (u = !0));
  Oa(e, n || t);
}
function iq(e) {
  if (!e._d) {
    var t = zp(e._i), n = t.day === void 0 ? t.date : t.day;
    e._a = Ow(
      [t.year, t.month, n, t.hour, t.minute, t.second, t.millisecond],
      function(r) {
        return r && parseInt(r, 10);
      }
    ), Qp(e);
  }
}
function aq(e) {
  var t = new Cl(Jp(zw(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function zw(e) {
  var t = e._i, n = e._f;
  return e._locale = e._locale || Qi(e._l), t === null || n === void 0 && t === "" ? jc({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), Br(t) ? new Cl(Jp(t)) : (Pl(t) ? e._d = t : Vr(n) ? rq(e) : n ? em(e) : sq(e), Up(e) || (e._d = null), e));
}
function sq(e) {
  var t = e._i;
  Hn(t) ? e._d = new Date(be.now()) : Pl(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? Q7(e) : Vr(t) ? (e._a = Ow(t.slice(0), function(n) {
    return parseInt(n, 10);
  }), Qp(e)) : es(t) ? iq(e) : qi(t) ? e._d = new Date(t) : be.createFromInputFallback(e);
}
function jw(e, t, n, r, a) {
  var s = {};
  return (t === !0 || t === !1) && (r = t, t = void 0), (n === !0 || n === !1) && (r = n, n = void 0), (es(e) && Wp(e) || Vr(e) && e.length === 0) && (e = void 0), s._isAMomentObject = !0, s._useUTC = s._isUTC = a, s._l = n, s._i = e, s._f = t, s._strict = r, aq(s);
}
function Vt(e, t, n, r) {
  return jw(e, t, n, r, !1);
}
var oq = Mr(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = Vt.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : jc();
  }
), lq = Mr(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = Vt.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : jc();
  }
);
function Gw(e, t) {
  var n, r;
  if (t.length === 1 && Vr(t[0]) && (t = t[0]), !t.length)
    return Vt();
  for (n = t[0], r = 1; r < t.length; ++r)
    (!t[r].isValid() || t[r][e](n)) && (n = t[r]);
  return n;
}
function uq() {
  var e = [].slice.call(arguments, 0);
  return Gw("isBefore", e);
}
function cq() {
  var e = [].slice.call(arguments, 0);
  return Gw("isAfter", e);
}
var fq = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, el = [
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
function dq(e) {
  var t, n = !1, r, a = el.length;
  for (t in e)
    if (Ot(e, t) && !(nn.call(el, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (r = 0; r < a; ++r)
    if (e[el[r]]) {
      if (n)
        return !1;
      parseFloat(e[el[r]]) !== ft(e[el[r]]) && (n = !0);
    }
  return !0;
}
function hq() {
  return this._isValid;
}
function pq() {
  return qr(NaN);
}
function tf(e) {
  var t = zp(e), n = t.year || 0, r = t.quarter || 0, a = t.month || 0, s = t.week || t.isoWeek || 0, l = t.day || 0, u = t.hour || 0, f = t.minute || 0, h = t.second || 0, d = t.millisecond || 0;
  this._isValid = dq(t), this._milliseconds = +d + h * 1e3 + // 1000
  f * 6e4 + // 1000 * 60
  u * 1e3 * 60 * 60, this._days = +l + s * 7, this._months = +a + r * 3 + n * 12, this._data = {}, this._locale = Qi(), this._bubble();
}
function zu(e) {
  return e instanceof tf;
}
function kh(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function mq(e, t, n) {
  var r = Math.min(e.length, t.length), a = Math.abs(e.length - t.length), s = 0, l;
  for (l = 0; l < r; l++)
    (n && e[l] !== t[l] || !n && ft(e[l]) !== ft(t[l])) && s++;
  return s + a;
}
function qw(e, t) {
  Le(e, 0, 0, function() {
    var n = this.utcOffset(), r = "+";
    return n < 0 && (n = -n, r = "-"), r + ui(~~(n / 60), 2) + t + ui(~~n % 60, 2);
  });
}
qw("Z", ":");
qw("ZZ", "");
xe("Z", Jc);
xe("ZZ", Jc);
Ct(["Z", "ZZ"], function(e, t, n) {
  n._useUTC = !0, n._tzm = tm(Jc, e);
});
var vq = /([\+\-]|\d\d)/gi;
function tm(e, t) {
  var n = (t || "").match(e), r, a, s;
  return n === null ? null : (r = n[n.length - 1] || [], a = (r + "").match(vq) || ["-", 0, 0], s = +(a[1] * 60) + ft(a[2]), s === 0 ? 0 : a[0] === "+" ? s : -s);
}
function nm(e, t) {
  var n, r;
  return t._isUTC ? (n = t.clone(), r = (Br(e) || Pl(e) ? e.valueOf() : Vt(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + r), be.updateOffset(n, !1), n) : Vt(e).local();
}
function Ah(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
be.updateOffset = function() {
};
function gq(e, t, n) {
  var r = this._offset || 0, a;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = tm(Jc, e), e === null)
        return this;
    } else
      Math.abs(e) < 16 && !n && (e = e * 60);
    return !this._isUTC && t && (a = Ah(this)), this._offset = e, this._isUTC = !0, a != null && this.add(a, "m"), r !== e && (!t || this._changeInProgress ? Xw(
      this,
      qr(e - r, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, be.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? r : Ah(this);
}
function _q(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function yq(e) {
  return this.utcOffset(0, e);
}
function bq(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Ah(this), "m")), this;
}
function wq() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = tm(VG, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function Oq(e) {
  return this.isValid() ? (e = e ? Vt(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function Eq() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function Dq() {
  if (!Hn(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return Vp(e, this), e = zw(e), e._a ? (t = e._isUTC ? mi(e._a) : Vt(e._a), this._isDSTShifted = this.isValid() && mq(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function Sq() {
  return this.isValid() ? !this._isUTC : !1;
}
function xq() {
  return this.isValid() ? this._isUTC : !1;
}
function Kw() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var Tq = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, kq = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function qr(e, t) {
  var n = e, r = null, a, s, l;
  return zu(e) ? n = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : qi(e) || !isNaN(+e) ? (n = {}, t ? n[t] = +e : n.milliseconds = +e) : (r = Tq.exec(e)) ? (a = r[1] === "-" ? -1 : 1, n = {
    y: 0,
    d: ft(r[ei]) * a,
    h: ft(r[fn]) * a,
    m: ft(r[Wr]) * a,
    s: ft(r[Ri]) * a,
    ms: ft(kh(r[Xa] * 1e3)) * a
    // the millisecond decimal point is included in the match
  }) : (r = kq.exec(e)) ? (a = r[1] === "-" ? -1 : 1, n = {
    y: za(r[2], a),
    M: za(r[3], a),
    w: za(r[4], a),
    d: za(r[5], a),
    h: za(r[6], a),
    m: za(r[7], a),
    s: za(r[8], a)
  }) : n == null ? n = {} : typeof n == "object" && ("from" in n || "to" in n) && (l = Aq(
    Vt(n.from),
    Vt(n.to)
  ), n = {}, n.ms = l.milliseconds, n.M = l.months), s = new tf(n), zu(e) && Ot(e, "_locale") && (s._locale = e._locale), zu(e) && Ot(e, "_isValid") && (s._isValid = e._isValid), s;
}
qr.fn = tf.prototype;
qr.invalid = pq;
function za(e, t) {
  var n = e && parseFloat(e.replace(",", "."));
  return (isNaN(n) ? 0 : n) * t;
}
function Zy(e, t) {
  var n = {};
  return n.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n;
}
function Aq(e, t) {
  var n;
  return e.isValid() && t.isValid() ? (t = nm(t, e), e.isBefore(t) ? n = Zy(e, t) : (n = Zy(t, e), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : { milliseconds: 0, months: 0 };
}
function Zw(e, t) {
  return function(n, r) {
    var a, s;
    return r !== null && !isNaN(+r) && (Dw(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), s = n, n = r, r = s), a = qr(n, r), Xw(this, a, e), this;
  };
}
function Xw(e, t, n, r) {
  var a = t._milliseconds, s = kh(t._days), l = kh(t._months);
  e.isValid() && (r = r ?? !0, l && Iw(e, Ec(e, "Month") + l * n), s && Tw(e, "Date", Ec(e, "Date") + s * n), a && e._d.setTime(e._d.valueOf() + a * n), r && be.updateOffset(e, s || l));
}
var Mq = Zw(1, "add"), $q = Zw(-1, "subtract");
function Jw(e) {
  return typeof e == "string" || e instanceof String;
}
function Pq(e) {
  return Br(e) || Pl(e) || Jw(e) || qi(e) || Iq(e) || Cq(e) || e === null || e === void 0;
}
function Cq(e) {
  var t = es(e) && !Wp(e), n = !1, r = [
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
  ], a, s, l = r.length;
  for (a = 0; a < l; a += 1)
    s = r[a], n = n || Ot(e, s);
  return t && n;
}
function Iq(e) {
  var t = Vr(e), n = !1;
  return t && (n = e.filter(function(r) {
    return !qi(r) && Jw(e);
  }).length === 0), t && n;
}
function Nq(e) {
  var t = es(e) && !Wp(e), n = !1, r = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], a, s;
  for (a = 0; a < r.length; a += 1)
    s = r[a], n = n || Ot(e, s);
  return t && n;
}
function Lq(e, t) {
  var n = e.diff(t, "days", !0);
  return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse";
}
function Rq(e, t) {
  arguments.length === 1 && (arguments[0] ? Pq(arguments[0]) ? (e = arguments[0], t = void 0) : Nq(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var n = e || Vt(), r = nm(n, this).startOf("day"), a = be.calendarFormat(this, r) || "sameElse", s = t && (vi(t[a]) ? t[a].call(this, n) : t[a]);
  return this.format(
    s || this.localeData().calendar(a, this, Vt(n))
  );
}
function Fq() {
  return new Cl(this);
}
function Yq(e, t) {
  var n = Br(e) ? e : Vt(e);
  return this.isValid() && n.isValid() ? (t = $r(t) || "millisecond", t === "millisecond" ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function Wq(e, t) {
  var n = Br(e) ? e : Vt(e);
  return this.isValid() && n.isValid() ? (t = $r(t) || "millisecond", t === "millisecond" ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf()) : !1;
}
function Uq(e, t, n, r) {
  var a = Br(e) ? e : Vt(e), s = Br(t) ? t : Vt(t);
  return this.isValid() && a.isValid() && s.isValid() ? (r = r || "()", (r[0] === "(" ? this.isAfter(a, n) : !this.isBefore(a, n)) && (r[1] === ")" ? this.isBefore(s, n) : !this.isAfter(s, n))) : !1;
}
function Vq(e, t) {
  var n = Br(e) ? e : Vt(e), r;
  return this.isValid() && n.isValid() ? (t = $r(t) || "millisecond", t === "millisecond" ? this.valueOf() === n.valueOf() : (r = n.valueOf(), this.clone().startOf(t).valueOf() <= r && r <= this.clone().endOf(t).valueOf())) : !1;
}
function Bq(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function Hq(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function zq(e, t, n) {
  var r, a, s;
  if (!this.isValid())
    return NaN;
  if (r = nm(e, this), !r.isValid())
    return NaN;
  switch (a = (r.utcOffset() - this.utcOffset()) * 6e4, t = $r(t), t) {
    case "year":
      s = ju(this, r) / 12;
      break;
    case "month":
      s = ju(this, r);
      break;
    case "quarter":
      s = ju(this, r) / 3;
      break;
    case "second":
      s = (this - r) / 1e3;
      break;
    case "minute":
      s = (this - r) / 6e4;
      break;
    case "hour":
      s = (this - r) / 36e5;
      break;
    case "day":
      s = (this - r - a) / 864e5;
      break;
    case "week":
      s = (this - r - a) / 6048e5;
      break;
    default:
      s = this - r;
  }
  return n ? s : br(s);
}
function ju(e, t) {
  if (e.date() < t.date())
    return -ju(t, e);
  var n = (t.year() - e.year()) * 12 + (t.month() - e.month()), r = e.clone().add(n, "months"), a, s;
  return t - r < 0 ? (a = e.clone().add(n - 1, "months"), s = (t - r) / (r - a)) : (a = e.clone().add(n + 1, "months"), s = (t - r) / (a - r)), -(n + s) || 0;
}
be.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
be.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function jq() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function Gq(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, n = t ? this.clone().utc() : this;
  return n.year() < 0 || n.year() > 9999 ? Hu(
    n,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : vi(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", Hu(n, "Z")) : Hu(
    n,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function qq() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", n, r, a, s;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), n = "[" + e + '("]', r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", a = "-MM-DD[T]HH:mm:ss.SSS", s = t + '[")]', this.format(n + r + a + s);
}
function Kq(e) {
  e || (e = this.isUtc() ? be.defaultFormatUtc : be.defaultFormat);
  var t = Hu(this, e);
  return this.localeData().postformat(t);
}
function Zq(e, t) {
  return this.isValid() && (Br(e) && e.isValid() || Vt(e).isValid()) ? qr({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function Xq(e) {
  return this.from(Vt(), e);
}
function Jq(e, t) {
  return this.isValid() && (Br(e) && e.isValid() || Vt(e).isValid()) ? qr({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function Qq(e) {
  return this.to(Vt(), e);
}
function Qw(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = Qi(e), t != null && (this._locale = t), this);
}
var eO = Mr(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function tO() {
  return this._locale;
}
var xc = 1e3, qs = 60 * xc, Tc = 60 * qs, nO = (365 * 400 + 97) * 24 * Tc;
function Ks(e, t) {
  return (e % t + t) % t;
}
function rO(e, t, n) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, n) - nO : new Date(e, t, n).valueOf();
}
function iO(e, t, n) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, n) - nO : Date.UTC(e, t, n);
}
function eK(e) {
  var t, n;
  if (e = $r(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (n = this._isUTC ? iO : rO, e) {
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
      t = this._d.valueOf(), t -= Ks(
        t + (this._isUTC ? 0 : this.utcOffset() * qs),
        Tc
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= Ks(t, qs);
      break;
    case "second":
      t = this._d.valueOf(), t -= Ks(t, xc);
      break;
  }
  return this._d.setTime(t), be.updateOffset(this, !0), this;
}
function tK(e) {
  var t, n;
  if (e = $r(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (n = this._isUTC ? iO : rO, e) {
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
      t = this._d.valueOf(), t += Tc - Ks(
        t + (this._isUTC ? 0 : this.utcOffset() * qs),
        Tc
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += qs - Ks(t, qs) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += xc - Ks(t, xc) - 1;
      break;
  }
  return this._d.setTime(t), be.updateOffset(this, !0), this;
}
function nK() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function rK() {
  return Math.floor(this.valueOf() / 1e3);
}
function iK() {
  return new Date(this.valueOf());
}
function aK() {
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
function sK() {
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
function oK() {
  return this.isValid() ? this.toISOString() : null;
}
function lK() {
  return Up(this);
}
function uK() {
  return Oa({}, nt(this));
}
function cK() {
  return nt(this).overflow;
}
function fK() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
Le("N", 0, 0, "eraAbbr");
Le("NN", 0, 0, "eraAbbr");
Le("NNN", 0, 0, "eraAbbr");
Le("NNNN", 0, 0, "eraName");
Le("NNNNN", 0, 0, "eraNarrow");
Le("y", ["y", 1], "yo", "eraYear");
Le("y", ["yy", 2], 0, "eraYear");
Le("y", ["yyy", 3], 0, "eraYear");
Le("y", ["yyyy", 4], 0, "eraYear");
xe("N", rm);
xe("NN", rm);
xe("NNN", rm);
xe("NNNN", OK);
xe("NNNNN", EK);
Ct(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, n, r) {
    var a = n._locale.erasParse(e, r, n._strict);
    a ? nt(n).era = a : nt(n).invalidEra = e;
  }
);
xe("y", xo);
xe("yy", xo);
xe("yyy", xo);
xe("yyyy", xo);
xe("yo", DK);
Ct(["y", "yy", "yyy", "yyyy"], Dn);
Ct(["yo"], function(e, t, n, r) {
  var a;
  n._locale._eraYearOrdinalRegex && (a = e.match(n._locale._eraYearOrdinalRegex)), n._locale.eraYearOrdinalParse ? t[Dn] = n._locale.eraYearOrdinalParse(e, a) : t[Dn] = parseInt(e, 10);
});
function dK(e, t) {
  var n, r, a, s = this._eras || Qi("en")._eras;
  for (n = 0, r = s.length; n < r; ++n) {
    switch (typeof s[n].since) {
      case "string":
        a = be(s[n].since).startOf("day"), s[n].since = a.valueOf();
        break;
    }
    switch (typeof s[n].until) {
      case "undefined":
        s[n].until = 1 / 0;
        break;
      case "string":
        a = be(s[n].until).startOf("day").valueOf(), s[n].until = a.valueOf();
        break;
    }
  }
  return s;
}
function hK(e, t, n) {
  var r, a, s = this.eras(), l, u, f;
  for (e = e.toUpperCase(), r = 0, a = s.length; r < a; ++r)
    if (l = s[r].name.toUpperCase(), u = s[r].abbr.toUpperCase(), f = s[r].narrow.toUpperCase(), n)
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (u === e)
            return s[r];
          break;
        case "NNNN":
          if (l === e)
            return s[r];
          break;
        case "NNNNN":
          if (f === e)
            return s[r];
          break;
      }
    else if ([l, u, f].indexOf(e) >= 0)
      return s[r];
}
function pK(e, t) {
  var n = e.since <= e.until ? 1 : -1;
  return t === void 0 ? be(e.since).year() : be(e.since).year() + (t - e.offset) * n;
}
function mK() {
  var e, t, n, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
      return r[e].name;
  return "";
}
function vK() {
  var e, t, n, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
      return r[e].narrow;
  return "";
}
function gK() {
  var e, t, n, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
      return r[e].abbr;
  return "";
}
function _K() {
  var e, t, n, r, a = this.localeData().eras();
  for (e = 0, t = a.length; e < t; ++e)
    if (n = a[e].since <= a[e].until ? 1 : -1, r = this.clone().startOf("day").valueOf(), a[e].since <= r && r <= a[e].until || a[e].until <= r && r <= a[e].since)
      return (this.year() - be(a[e].since).year()) * n + a[e].offset;
  return this.year();
}
function yK(e) {
  return Ot(this, "_erasNameRegex") || im.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function bK(e) {
  return Ot(this, "_erasAbbrRegex") || im.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function wK(e) {
  return Ot(this, "_erasNarrowRegex") || im.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function rm(e, t) {
  return t.erasAbbrRegex(e);
}
function OK(e, t) {
  return t.erasNameRegex(e);
}
function EK(e, t) {
  return t.erasNarrowRegex(e);
}
function DK(e, t) {
  return t._eraYearOrdinalRegex || xo;
}
function im() {
  var e = [], t = [], n = [], r = [], a, s, l = this.eras();
  for (a = 0, s = l.length; a < s; ++a)
    t.push(nr(l[a].name)), e.push(nr(l[a].abbr)), n.push(nr(l[a].narrow)), r.push(nr(l[a].name)), r.push(nr(l[a].abbr)), r.push(nr(l[a].narrow));
  this._erasRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  );
}
Le(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
Le(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function nf(e, t) {
  Le(0, [e, e.length], 0, t);
}
nf("gggg", "weekYear");
nf("ggggg", "weekYear");
nf("GGGG", "isoWeekYear");
nf("GGGGG", "isoWeekYear");
xn("weekYear", "gg");
xn("isoWeekYear", "GG");
Tn("weekYear", 1);
Tn("isoWeekYear", 1);
xe("G", Xc);
xe("g", Xc);
xe("GG", Bt, lr);
xe("gg", Bt, lr);
xe("GGGG", Gp, jp);
xe("gggg", Gp, jp);
xe("GGGGG", Zc, qc);
xe("ggggg", Zc, qc);
Nl(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, n, r) {
    t[r.substr(0, 2)] = ft(e);
  }
);
Nl(["gg", "GG"], function(e, t, n, r) {
  t[r] = be.parseTwoDigitYear(e);
});
function SK(e) {
  return aO.call(
    this,
    e,
    this.week(),
    this.weekday(),
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function xK(e) {
  return aO.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function TK() {
  return Yi(this.year(), 1, 4);
}
function kK() {
  return Yi(this.isoWeekYear(), 1, 4);
}
function AK() {
  var e = this.localeData()._week;
  return Yi(this.year(), e.dow, e.doy);
}
function MK() {
  var e = this.localeData()._week;
  return Yi(this.weekYear(), e.dow, e.doy);
}
function aO(e, t, n, r, a) {
  var s;
  return e == null ? El(this, r, a).year : (s = Yi(e, r, a), t > s && (t = s), $K.call(this, e, t, n, r, a));
}
function $K(e, t, n, r, a) {
  var s = Fw(e, t, n, r, a), l = Ol(s.year, 0, s.dayOfYear);
  return this.year(l.getUTCFullYear()), this.month(l.getUTCMonth()), this.date(l.getUTCDate()), this;
}
Le("Q", 0, "Qo", "quarter");
xn("quarter", "Q");
Tn("quarter", 7);
xe("Q", kw);
Ct("Q", function(e, t) {
  t[Li] = (ft(e) - 1) * 3;
});
function PK(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
Le("D", ["DD", 2], "Do", "date");
xn("date", "D");
Tn("date", 9);
xe("D", Bt);
xe("DD", Bt, lr);
xe("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
Ct(["D", "DD"], ei);
Ct("Do", function(e, t) {
  t[ei] = ft(e.match(Bt)[0]);
});
var sO = So("Date", !0);
Le("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
xn("dayOfYear", "DDD");
Tn("dayOfYear", 4);
xe("DDD", Kc);
xe("DDDD", Aw);
Ct(["DDD", "DDDD"], function(e, t, n) {
  n._dayOfYear = ft(e);
});
function CK(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
Le("m", ["mm", 2], 0, "minute");
xn("minute", "m");
Tn("minute", 14);
xe("m", Bt);
xe("mm", Bt, lr);
Ct(["m", "mm"], Wr);
var IK = So("Minutes", !1);
Le("s", ["ss", 2], 0, "second");
xn("second", "s");
Tn("second", 15);
xe("s", Bt);
xe("ss", Bt, lr);
Ct(["s", "ss"], Ri);
var NK = So("Seconds", !1);
Le("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
Le(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
Le(0, ["SSS", 3], 0, "millisecond");
Le(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
Le(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
Le(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
Le(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
Le(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
Le(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
xn("millisecond", "ms");
Tn("millisecond", 16);
xe("S", Kc, kw);
xe("SS", Kc, lr);
xe("SSS", Kc, Aw);
var Ea, oO;
for (Ea = "SSSS"; Ea.length <= 9; Ea += "S")
  xe(Ea, xo);
function LK(e, t) {
  t[Xa] = ft(("0." + e) * 1e3);
}
for (Ea = "S"; Ea.length <= 9; Ea += "S")
  Ct(Ea, LK);
oO = So("Milliseconds", !1);
Le("z", 0, 0, "zoneAbbr");
Le("zz", 0, 0, "zoneName");
function RK() {
  return this._isUTC ? "UTC" : "";
}
function FK() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var ue = Cl.prototype;
ue.add = Mq;
ue.calendar = Rq;
ue.clone = Fq;
ue.diff = zq;
ue.endOf = tK;
ue.format = Kq;
ue.from = Zq;
ue.fromNow = Xq;
ue.to = Jq;
ue.toNow = Qq;
ue.get = WG;
ue.invalidAt = cK;
ue.isAfter = Yq;
ue.isBefore = Wq;
ue.isBetween = Uq;
ue.isSame = Vq;
ue.isSameOrAfter = Bq;
ue.isSameOrBefore = Hq;
ue.isValid = lK;
ue.lang = eO;
ue.locale = Qw;
ue.localeData = tO;
ue.max = lq;
ue.min = oq;
ue.parsingFlags = uK;
ue.set = UG;
ue.startOf = eK;
ue.subtract = $q;
ue.toArray = aK;
ue.toObject = sK;
ue.toDate = iK;
ue.toISOString = Gq;
ue.inspect = qq;
typeof Symbol < "u" && Symbol.for != null && (ue[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
ue.toJSON = oK;
ue.toString = jq;
ue.unix = rK;
ue.valueOf = nK;
ue.creationData = fK;
ue.eraName = mK;
ue.eraNarrow = vK;
ue.eraAbbr = gK;
ue.eraYear = _K;
ue.year = Rw;
ue.isLeapYear = s7;
ue.weekYear = SK;
ue.isoWeekYear = xK;
ue.quarter = ue.quarters = PK;
ue.month = Nw;
ue.daysInMonth = r7;
ue.week = ue.weeks = d7;
ue.isoWeek = ue.isoWeeks = h7;
ue.weeksInYear = AK;
ue.weeksInWeekYear = MK;
ue.isoWeeksInYear = TK;
ue.isoWeeksInISOWeekYear = kK;
ue.date = sO;
ue.day = ue.days = x7;
ue.weekday = T7;
ue.isoWeekday = k7;
ue.dayOfYear = CK;
ue.hour = ue.hours = N7;
ue.minute = ue.minutes = IK;
ue.second = ue.seconds = NK;
ue.millisecond = ue.milliseconds = oO;
ue.utcOffset = gq;
ue.utc = yq;
ue.local = bq;
ue.parseZone = wq;
ue.hasAlignedHourOffset = Oq;
ue.isDST = Eq;
ue.isLocal = Sq;
ue.isUtcOffset = xq;
ue.isUtc = Kw;
ue.isUTC = Kw;
ue.zoneAbbr = RK;
ue.zoneName = FK;
ue.dates = Mr(
  "dates accessor is deprecated. Use date instead.",
  sO
);
ue.months = Mr(
  "months accessor is deprecated. Use month instead",
  Nw
);
ue.years = Mr(
  "years accessor is deprecated. Use year instead",
  Rw
);
ue.zone = Mr(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  _q
);
ue.isDSTShifted = Mr(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  Dq
);
function YK(e) {
  return Vt(e * 1e3);
}
function WK() {
  return Vt.apply(null, arguments).parseZone();
}
function lO(e) {
  return e;
}
var Et = Bp.prototype;
Et.calendar = xG;
Et.longDateFormat = MG;
Et.invalidDate = PG;
Et.ordinal = NG;
Et.preparse = lO;
Et.postformat = lO;
Et.relativeTime = RG;
Et.pastFuture = FG;
Et.set = DG;
Et.eras = dK;
Et.erasParse = hK;
Et.erasConvertYear = pK;
Et.erasAbbrRegex = bK;
Et.erasNameRegex = yK;
Et.erasNarrowRegex = wK;
Et.months = QG;
Et.monthsShort = e7;
Et.monthsParse = n7;
Et.monthsRegex = a7;
Et.monthsShortRegex = i7;
Et.week = l7;
Et.firstDayOfYear = f7;
Et.firstDayOfWeek = c7;
Et.weekdays = w7;
Et.weekdaysMin = E7;
Et.weekdaysShort = O7;
Et.weekdaysParse = S7;
Et.weekdaysRegex = A7;
Et.weekdaysShortRegex = M7;
Et.weekdaysMinRegex = $7;
Et.isPM = C7;
Et.meridiem = L7;
function kc(e, t, n, r) {
  var a = Qi(), s = mi().set(r, t);
  return a[n](s, e);
}
function uO(e, t, n) {
  if (qi(e) && (t = e, e = void 0), e = e || "", t != null)
    return kc(e, t, n, "month");
  var r, a = [];
  for (r = 0; r < 12; r++)
    a[r] = kc(e, r, n, "month");
  return a;
}
function am(e, t, n, r) {
  typeof e == "boolean" ? (qi(t) && (n = t, t = void 0), t = t || "") : (t = e, n = t, e = !1, qi(t) && (n = t, t = void 0), t = t || "");
  var a = Qi(), s = e ? a._week.dow : 0, l, u = [];
  if (n != null)
    return kc(t, (n + s) % 7, r, "day");
  for (l = 0; l < 7; l++)
    u[l] = kc(t, (l + s) % 7, r, "day");
  return u;
}
function UK(e, t) {
  return uO(e, t, "months");
}
function VK(e, t) {
  return uO(e, t, "monthsShort");
}
function BK(e, t, n) {
  return am(e, t, n, "weekdays");
}
function HK(e, t, n) {
  return am(e, t, n, "weekdaysShort");
}
function zK(e, t, n) {
  return am(e, t, n, "weekdaysMin");
}
Sa("en", {
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
    var t = e % 10, n = ft(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
    return e + n;
  }
});
be.lang = Mr(
  "moment.lang is deprecated. Use moment.locale instead.",
  Sa
);
be.langData = Mr(
  "moment.langData is deprecated. Use moment.localeData instead.",
  Qi
);
var Mi = Math.abs;
function jK() {
  var e = this._data;
  return this._milliseconds = Mi(this._milliseconds), this._days = Mi(this._days), this._months = Mi(this._months), e.milliseconds = Mi(e.milliseconds), e.seconds = Mi(e.seconds), e.minutes = Mi(e.minutes), e.hours = Mi(e.hours), e.months = Mi(e.months), e.years = Mi(e.years), this;
}
function cO(e, t, n, r) {
  var a = qr(t, n);
  return e._milliseconds += r * a._milliseconds, e._days += r * a._days, e._months += r * a._months, e._bubble();
}
function GK(e, t) {
  return cO(this, e, t, 1);
}
function qK(e, t) {
  return cO(this, e, t, -1);
}
function Xy(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function KK() {
  var e = this._milliseconds, t = this._days, n = this._months, r = this._data, a, s, l, u, f;
  return e >= 0 && t >= 0 && n >= 0 || e <= 0 && t <= 0 && n <= 0 || (e += Xy(Mh(n) + t) * 864e5, t = 0, n = 0), r.milliseconds = e % 1e3, a = br(e / 1e3), r.seconds = a % 60, s = br(a / 60), r.minutes = s % 60, l = br(s / 60), r.hours = l % 24, t += br(l / 24), f = br(fO(t)), n += f, t -= Xy(Mh(f)), u = br(n / 12), n %= 12, r.days = t, r.months = n, r.years = u, this;
}
function fO(e) {
  return e * 4800 / 146097;
}
function Mh(e) {
  return e * 146097 / 4800;
}
function ZK(e) {
  if (!this.isValid())
    return NaN;
  var t, n, r = this._milliseconds;
  if (e = $r(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + r / 864e5, n = this._months + fO(t), e) {
      case "month":
        return n;
      case "quarter":
        return n / 3;
      case "year":
        return n / 12;
    }
  else
    switch (t = this._days + Math.round(Mh(this._months)), e) {
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
function XK() {
  return this.isValid() ? this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + ft(this._months / 12) * 31536e6 : NaN;
}
function ea(e) {
  return function() {
    return this.as(e);
  };
}
var JK = ea("ms"), QK = ea("s"), eZ = ea("m"), tZ = ea("h"), nZ = ea("d"), rZ = ea("w"), iZ = ea("M"), aZ = ea("Q"), sZ = ea("y");
function oZ() {
  return qr(this);
}
function lZ(e) {
  return e = $r(e), this.isValid() ? this[e + "s"]() : NaN;
}
function ps(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var uZ = ps("milliseconds"), cZ = ps("seconds"), fZ = ps("minutes"), dZ = ps("hours"), hZ = ps("days"), pZ = ps("months"), mZ = ps("years");
function vZ() {
  return br(this.days() / 7);
}
var $i = Math.round, Us = {
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
function gZ(e, t, n, r, a) {
  return a.relativeTime(t || 1, !!n, e, r);
}
function _Z(e, t, n, r) {
  var a = qr(e).abs(), s = $i(a.as("s")), l = $i(a.as("m")), u = $i(a.as("h")), f = $i(a.as("d")), h = $i(a.as("M")), d = $i(a.as("w")), m = $i(a.as("y")), v = s <= n.ss && ["s", s] || s < n.s && ["ss", s] || l <= 1 && ["m"] || l < n.m && ["mm", l] || u <= 1 && ["h"] || u < n.h && ["hh", u] || f <= 1 && ["d"] || f < n.d && ["dd", f];
  return n.w != null && (v = v || d <= 1 && ["w"] || d < n.w && ["ww", d]), v = v || h <= 1 && ["M"] || h < n.M && ["MM", h] || m <= 1 && ["y"] || ["yy", m], v[2] = t, v[3] = +e > 0, v[4] = r, gZ.apply(null, v);
}
function yZ(e) {
  return e === void 0 ? $i : typeof e == "function" ? ($i = e, !0) : !1;
}
function bZ(e, t) {
  return Us[e] === void 0 ? !1 : t === void 0 ? Us[e] : (Us[e] = t, e === "s" && (Us.ss = t - 1), !0);
}
function wZ(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var n = !1, r = Us, a, s;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (n = e), typeof t == "object" && (r = Object.assign({}, Us, t), t.s != null && t.ss == null && (r.ss = t.s - 1)), a = this.localeData(), s = _Z(this, !n, r, a), n && (s = a.pastFuture(+this, s)), a.postformat(s);
}
var Yd = Math.abs;
function Ns(e) {
  return (e > 0) - (e < 0) || +e;
}
function rf() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = Yd(this._milliseconds) / 1e3, t = Yd(this._days), n = Yd(this._months), r, a, s, l, u = this.asSeconds(), f, h, d, m;
  return u ? (r = br(e / 60), a = br(r / 60), e %= 60, r %= 60, s = br(n / 12), n %= 12, l = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", f = u < 0 ? "-" : "", h = Ns(this._months) !== Ns(u) ? "-" : "", d = Ns(this._days) !== Ns(u) ? "-" : "", m = Ns(this._milliseconds) !== Ns(u) ? "-" : "", f + "P" + (s ? h + s + "Y" : "") + (n ? h + n + "M" : "") + (t ? d + t + "D" : "") + (a || r || e ? "T" : "") + (a ? m + a + "H" : "") + (r ? m + r + "M" : "") + (e ? m + l + "S" : "")) : "P0D";
}
var _t = tf.prototype;
_t.isValid = hq;
_t.abs = jK;
_t.add = GK;
_t.subtract = qK;
_t.as = ZK;
_t.asMilliseconds = JK;
_t.asSeconds = QK;
_t.asMinutes = eZ;
_t.asHours = tZ;
_t.asDays = nZ;
_t.asWeeks = rZ;
_t.asMonths = iZ;
_t.asQuarters = aZ;
_t.asYears = sZ;
_t.valueOf = XK;
_t._bubble = KK;
_t.clone = oZ;
_t.get = lZ;
_t.milliseconds = uZ;
_t.seconds = cZ;
_t.minutes = fZ;
_t.hours = dZ;
_t.days = hZ;
_t.weeks = vZ;
_t.months = pZ;
_t.years = mZ;
_t.humanize = wZ;
_t.toISOString = rf;
_t.toString = rf;
_t.toJSON = rf;
_t.locale = Qw;
_t.localeData = tO;
_t.toIsoString = Mr(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  rf
);
_t.lang = eO;
Le("X", 0, 0, "unix");
Le("x", 0, 0, "valueOf");
xe("x", Xc);
xe("X", BG);
Ct("X", function(e, t, n) {
  n._d = new Date(parseFloat(e) * 1e3);
});
Ct("x", function(e, t, n) {
  n._d = new Date(ft(e));
});
//! moment.js
be.version = "2.29.4";
OG(Vt);
be.fn = ue;
be.min = uq;
be.max = cq;
be.now = fq;
be.utc = mi;
be.unix = YK;
be.months = UK;
be.isDate = Pl;
be.locale = Sa;
be.invalid = jc;
be.duration = qr;
be.isMoment = Br;
be.weekdays = BK;
be.parseZone = WK;
be.localeData = Qi;
be.isDuration = zu;
be.monthsShort = VK;
be.weekdaysMin = zK;
be.defineLocale = Xp;
be.updateLocale = W7;
be.locales = U7;
be.weekdaysShort = HK;
be.normalizeUnits = $r;
be.relativeTimeRounding = yZ;
be.relativeTimeThreshold = bZ;
be.calendarFormat = Lq;
be.prototype = ue;
be.HTML5_FMT = {
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
const OZ = { class: "flex flex-col gap-2" }, EZ = { class: "flex items-center gap-1" }, DZ = {
  key: 0,
  for: "due",
  class: "p3-b text-true-blue-3 w-fit flex cursor-pointer items-center justify-center gap-2 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
}, SZ = ["value"], xZ = /* @__PURE__ */ Re({
  __name: "DuePicker",
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, { t: r } = fi.global, a = kt("eventData"), s = Q(!1), l = Q(
      n.modelValue ? new Date(n.modelValue).toISOString() : ""
    ), u = (g) => {
      l.value = g.toISOString();
    }, f = Q(!1);
    Ue(f, (g) => {
      g || t("update:modelValue", bw.cloneDeep(l.value));
    });
    const h = Q(null);
    yw(h, () => f.value = !1);
    function d(g) {
      let [w, O] = g.split(" "), D = O.split(":")[0];
      D = D.padStart(2, "0");
      let b = `${w} ${D}:00`, x = `${D}:59`;
      return `${b}-${x}`;
    }
    const m = Q(), v = () => {
      En(() => {
        if (!m.value)
          return;
        m.value.getBoundingClientRect().right >= window.innerWidth ? m.value.classList.add("list-left") : m.value.classList.add("list-right");
      });
    };
    return Ue(
      () => n.modelValue,
      (g) => {
        g && (s.value = !0);
      },
      { immediate: !0 }
    ), Ue(s, (g) => {
      g ? En(() => {
        f.value = !0, v();
      }) : t("update:modelValue", null);
    }), Pa(() => {
      t("update:modelValue", null);
    }), (g, w) => (F(), G("div", OZ, [
      j("div", EZ, [
        rr(j("input", {
          type: "checkbox",
          "onUpdate:modelValue": w[0] || (w[0] = (O) => un(s) ? s.value = O : null),
          id: "due",
          class: "hidden"
        }, null, 512), [
          [w0, y(s)]
        ]),
        y(s) ? (F(), G("div", {
          key: 1,
          class: "relative",
          ref_key: "target",
          ref: h
        }, [
          j("div", {
            class: et(["p3-b text-true-blue-3 relative flex cursor-pointer items-center justify-start gap-4 rounded shadow-01 bg-light-5 py-1 px-2 transition-all hover:bg-light-3 hover:bg-opacity-50", { " !text-dark-5 !p3-r": !y(l) }]),
            onClick: w[1] || (w[1] = xa((O) => f.value = !y(f), ["stop"]))
          }, [
            j("input", {
              value: y(l),
              required: "",
              class: "opacity-0 absolute w-[1px] bottom-0 left-1/2 h-[1px] pointer-events-none"
            }, null, 8, SZ),
            us(" " + ke(y(l) ? d(y(be)(y(l)).format("YYYY-MM-DD HH:mm")) : y(r)("未設定")), 1)
          ], 2),
          Me(lo, {
            name: "fade",
            mode: "out-in"
          }, {
            default: Pe(() => [
              y(f) ? (F(), G("div", {
                key: 0,
                class: "absolute top-[calc(100%+.75rem)] z-10",
                ref_key: "listBlock",
                ref: m
              }, [
                Me(y(pw), {
                  modelValue: y(l),
                  "onUpdate:modelValue": [
                    w[2] || (w[2] = (O) => un(l) ? l.value = O : null),
                    u
                  ],
                  mode: "dateTime",
                  "min-Date": y(a).start ? new Date(y(a).start) : /* @__PURE__ */ new Date(),
                  is24hr: "",
                  "hide-time-header": "",
                  "time-accuracy": 2,
                  timezone: y(vw)()
                }, null, 8, ["modelValue", "min-Date", "timezone"])
              ], 512)) : De("", !0)
            ]),
            _: 1
          })
        ], 512)) : (F(), G("label", DZ, ke(y(r)("持續執行")), 1)),
        y(s) ? (F(), Ze(y(dh), {
          key: 2,
          onClick: w[3] || (w[3] = (O) => s.value = !1),
          weight: "bold",
          class: "text-dark-4 hover:text-dark-3 p3-b cursor-pointer"
        })) : De("", !0)
      ])
    ]));
  }
});
const TZ = /* @__PURE__ */ uo(xZ, [["__scopeId", "data-v-b8d27aed"]]), kZ = { class: "flex w-auto items-center justify-center gap-2 rounded shadow-01 bg-light-5 py-1 px-2 hover:bg-light-3 hover:bg-opacity-50 input-outer" }, AZ = ["value", "type", "placeholder", "maxLength", "required"], MZ = /* @__PURE__ */ Re({
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
    function r(a) {
      n.type === "number" && !a.target.value && (a.target.value = 0), t(
        "update:modelValue",
        n.type == "number" ? Number(a.target.value) : a.target.value
      );
    }
    return (a, s) => (F(), G("div", kZ, [
      j("input", {
        value: a.modelValue,
        onInput: r,
        type: a.type,
        min: "0",
        class: et([a.inputClass, "p3-b w-full border-none outline-none shadow-none placeholder:text-dark-5 text-dark-3"]),
        placeholder: a.placeholder,
        maxLength: a.maxLength,
        required: a.required
      }, null, 42, AZ)
    ]));
  }
});
const cl = /* @__PURE__ */ uo(MZ, [["__scopeId", "data-v-d975114e"]]), $Z = { class: "flex flex-col gap-6" }, PZ = { class: "flex gap-6 flex-wrap items-center" }, CZ = { class: "flex items-center justify-start gap-4" }, IZ = { class: "p3-r text-dark-4" }, NZ = { class: "flex gap-6" }, LZ = { class: "flex items-center gap-4" }, RZ = ["value"], FZ = { value: 0 }, YZ = { class: "flex flex-col gap-4" }, WZ = { class: "flex items-center justify-start gap-4" }, UZ = { class: "p3-r text-dark-4" }, VZ = { class: "hidden" }, BZ = ["value"], HZ = {
  key: 0,
  class: "absolute top-[calc(100%+.75rem)] left-0 z-10"
}, zZ = { class: "flex items-center empty:hidden" }, jZ = {
  key: 0,
  class: "flex items-center justify-start gap-4"
}, GZ = { class: "p3-r text-dark-4" }, qZ = {
  key: 0,
  class: "flex justify-center flex-col gap-6"
}, KZ = { class: "flex gap-4 items-center" }, ZZ = { class: "p3-r text-dark-4" }, XZ = {
  value: "-1",
  disabled: ""
}, JZ = ["value"], QZ = {
  key: 0,
  class: "p3-b text-dark-3"
}, Jy = 1, eX = /* @__PURE__ */ Re({
  __name: "RepeatFrequency",
  props: {
    frequency: {},
    interval: {}
  },
  emits: ["update:frequency", "update:interval"],
  setup(e, { emit: t }) {
    const n = e, { t: r } = fi.global, a = kt("eventData"), s = Q(!0);
    Ue(a, () => {
      s.value = !0;
    });
    const l = Q(n.interval ?? Jy);
    Ue(l, (k) => {
      k || (k = Jy), t("update:interval", k);
    });
    const u = Q(n.frequency);
    Ue(u, (k) => {
      t("update:frequency", k);
    }), W({
      get: () => a.value.start ? new Date(a.value.start).toISOString() : "",
      set: (k) => {
        a.value.start = k;
      }
    });
    const f = W({
      get: () => a.value.weekdays ?? [],
      set: (k) => {
        a.value.weekdays = k;
      }
    }), h = W({
      get: () => a.value.weekOrdinal ?? [],
      set: (k) => {
        a.value.weekOrdinal = k;
      }
    }), d = W({
      get: () => a.value.monthDate ?? [],
      set: (k) => {
        a.value.monthDate = k;
      }
    }), m = W({
      get: () => a.value.yearMonths ?? [],
      set: (k) => {
        a.value.yearMonths = k;
      }
    }), v = W(() => {
      if (g.value == St.Never)
        return r("只執行一次");
      if (g.value == St.Hour)
        return r("每小時執行一次");
      if (g.value == St.Day)
        return r("每日執行一次");
      if (g.value == St.Week)
        return r("每週執行一次");
      if (g.value == St.Month)
        return r("每月執行一次");
      if (g.value == St.Annual)
        return r("每年執行一次");
      const k = {
        1: r("小時"),
        2: r("日"),
        3: r("週"),
        4: r("月"),
        5: r("年")
      }, E = {
        1: "",
        2: "",
        3: "",
        4: "",
        5: ""
      };
      return g.value == 0 ? `${r("每")}${l.value ?? ""}${k[u.value] ?? ""}${E[u.value] ?? ""}${r("執行一次")}` : "";
    }), g = Q(
      n.interval == null ? -1 : n.interval !== 1 ? 0 : n.frequency
    );
    function w(k) {
      let [E, P] = k.split(" "), M = P.split(":")[0];
      M = M.padStart(2, "0");
      let N = `${E} ${M}:00`, L = `${M}:59`;
      return `${N}-${L}`;
    }
    Ue(
      g,
      (k) => {
        St[k] && (t("update:frequency", k), t("update:interval", 1), u.value = g.value, a.value.weekdays = null, a.value.weekOrdinal = null, a.value.monthDate = null, a.value.yearMonths = null), a.value.customInterval = k === 0;
      },
      { immediate: !0 }
    );
    const O = Q(
      a.value.start ? new Date(a.value.start).toISOString() : ""
    ), D = (k) => {
      O.value = k.toISOString();
    }, b = Q(!1);
    Ue(b, (k) => {
      k || (a.value.start = bw.cloneDeep(O.value));
    });
    const x = Q(null);
    return yw(x, () => b.value = !1), (k, E) => (F(), G("div", $Z, [
      j("div", PZ, [
        j("label", CZ, [
          j("span", IZ, ke(y(r)("執行頻率")), 1),
          j("div", NZ, [
            j("div", LZ, [
              rr(j("select", {
                class: "p3-b text-true-blue-3 flex cursor-pointer items-center justify-center gap-4 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": E[0] || (E[0] = (P) => un(g) ? g.value = P : null)
              }, [
                (F(!0), G(Ke, null, Rt(y(St), (P, M) => (F(), G(Ke, { key: M }, [
                  Number.isInteger(P) ? (F(), G("option", {
                    key: 0,
                    value: P
                  }, ke(y(r)(M)), 9, RZ)) : De("", !0)
                ], 64))), 128)),
                j("option", FZ, ke(y(r)("自訂")), 1)
              ], 512), [
                [Vs, y(g)]
              ])
            ])
          ])
        ]),
        j("div", YZ, [
          j("div", WZ, [
            j("span", UZ, ke(y(r)("開始")), 1),
            j("div", {
              class: "relative",
              ref_key: "target",
              ref: x
            }, [
              j("div", {
                class: et(["p3-b text-true-blue-3 relative flex cursor-pointer items-center justify-start gap-4 rounded shadow-01 bg-light-5 py-1 px-2 transition-all hover:bg-light-3 hover:bg-opacity-50", { " !text-dark-5 !p3-r": !y(a).start }]),
                onClick: E[1] || (E[1] = xa((P) => b.value = !y(b), ["stop"]))
              }, [
                j("p", VZ, ke(y(O)), 1),
                j("input", {
                  value: y(a).start,
                  required: "",
                  class: "opacity-0 absolute w-[1px] bottom-0 left-1/2 h-[1px] pointer-events-none"
                }, null, 8, BZ),
                us(" " + ke(y(a).start ? w(
                  y(be)(y(a).start).format("YYYY-MM-DD HH:mm")
                ) : y(r)("未設定")), 1)
              ], 2),
              Me(lo, {
                name: "fade",
                mode: "out-in"
              }, {
                default: Pe(() => [
                  y(b) ? (F(), G("div", HZ, [
                    Me(y(pw), {
                      modelValue: y(a).start,
                      "onUpdate:modelValue": [
                        E[2] || (E[2] = (P) => y(a).start = P),
                        D
                      ],
                      mode: "dateTime",
                      "min-Date": /* @__PURE__ */ new Date(),
                      is24hr: "",
                      "hide-time-header": "",
                      "time-accuracy": 2,
                      timezone: y(vw)()
                    }, null, 8, ["modelValue", "min-Date", "timezone"])
                  ])) : De("", !0)
                ]),
                _: 1
              })
            ], 512)
          ])
        ]),
        j("div", zZ, [
          y(u) !== -1 ? (F(), G("div", jZ, [
            j("span", GZ, ke(y(r)("結束")), 1),
            Me(TZ, {
              modelValue: y(a).due,
              "onUpdate:modelValue": E[3] || (E[3] = (P) => y(a).due = P)
            }, null, 8, ["modelValue"])
          ])) : De("", !0)
        ])
      ]),
      y(St)[y(g)] == null ? (F(), G("div", qZ, [
        j("div", KZ, [
          j("span", ZZ, ke(y(r)("每")), 1),
          Me(cl, {
            class: "!w-10 text-center text-dark-3",
            inputClass: "text-true-blue-3",
            modelValue: y(l),
            "onUpdate:modelValue": E[4] || (E[4] = (P) => un(l) ? l.value = P : null),
            type: "number"
          }, null, 8, ["modelValue"]),
          rr(j("select", {
            class: "p3-b text-true-blue-3 w-14 flex cursor-pointer items-center justify-center gap-4 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
            "onUpdate:modelValue": E[5] || (E[5] = (P) => un(u) ? u.value = P : null)
          }, [
            j("option", XZ, ke(y(r)("未設定")), 1),
            (F(!0), G(Ke, null, Rt(y(St), (P, M) => (F(), G(Ke, { key: M }, [
              P != y(St).Never && Number.isInteger(P) ? (F(), G("option", {
                key: 0,
                value: P
              }, ke(y(r)(`repeat${M}`)), 9, JZ)) : De("", !0)
            ], 64))), 128))
          ], 512), [
            [Vs, y(u)]
          ]),
          y(u) == y(St).Hour || y(u) == y(St).Day ? (F(), G("span", QZ, ke(y(v)), 1)) : De("", !0),
          y(St)[y(g)] == null ? (F(), Ze(rN, {
            key: 1,
            class: "ml-4",
            type: y(u),
            weekdays: y(f),
            "onUpdate:weekdays": E[6] || (E[6] = (P) => un(f) ? f.value = P : null),
            weekOrdinal: y(h),
            "onUpdate:weekOrdinal": E[7] || (E[7] = (P) => un(h) ? h.value = P : null),
            monthDate: y(d),
            "onUpdate:monthDate": E[8] || (E[8] = (P) => un(d) ? d.value = P : null),
            yearMonths: y(m),
            "onUpdate:yearMonths": E[9] || (E[9] = (P) => un(m) ? m.value = P : null)
          }, null, 8, ["type", "weekdays", "weekOrdinal", "monthDate", "yearMonths"])) : De("", !0)
        ])
      ])) : De("", !0)
    ]));
  }
}), tX = ["id"], nX = { class: "p2-b text-dark-2 bg-light-5 flex gap-1 items-center" }, rX = /* @__PURE__ */ Re({
  __name: "OuterBlock",
  props: {
    id: {},
    title: {},
    icon: {}
  },
  setup(e) {
    const t = e, n = mM(
      () => import("./index-987a17be.js").then((u) => u[t.icon])
    ), r = Q(!1);
    Hr(() => {
      r.value = !0;
    });
    function a(u) {
      const f = getComputedStyle(u).width;
      u.style.width = f, u.style.position = "absolute", u.style.visibility = "hidden", u.style.height = "auto";
      const h = getComputedStyle(u).height;
      u.style.width = null, u.style.position = null, u.style.visibility = null, u.style.height = 0, getComputedStyle(u).height, requestAnimationFrame(() => {
        u.style.height = h, u.style.paddingTop = "24px";
      });
    }
    function s(u) {
      u.style.height = "auto";
    }
    function l(u) {
      const f = getComputedStyle(u).height;
      u.style.height = f, getComputedStyle(u).height, requestAnimationFrame(() => {
        u.style.height = 0, u.style.paddingTop = "0";
      });
    }
    return (u, f) => (F(), G("div", {
      class: "relative border rounded-xs border-light-1 py-4 px-3 shadow-01 flex flex-col w-full",
      id: u.id
    }, [
      j("div", {
        class: et(["flex items-center justify-between bg-light-5 z-[2]", { " cursor-pointer": !y(r) }]),
        onClick: f[1] || (f[1] = (h) => y(r) ? null : r.value = !0)
      }, [
        j("div", nX, [
          (F(), Ze(Zs(y(n)), { weight: "bold" })),
          us(" " + ke(u.title), 1)
        ]),
        Me(y(G1), {
          weight: "bold",
          class: et(["transition-all hover:drop-shadow-md cursor-pointer hover:text-dark-3", { "-rotate-90": !y(r) }]),
          onClick: f[0] || (f[0] = xa((h) => r.value = !y(r), ["stop"]))
        }, null, 8, ["class"])
      ], 2),
      Me(lo, {
        name: "expand",
        onEnter: a,
        onAfterEnter: s,
        onLeave: l
      }, {
        default: Pe(() => [
          y(r) ? rt(u.$slots, "default", { key: 0 }, void 0, !0) : De("", !0)
        ]),
        _: 3
      })
    ], 8, tX));
  }
});
const Gu = /* @__PURE__ */ uo(rX, [["__scopeId", "data-v-12030083"]]);
function dO(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: iX } = Object.prototype, { getPrototypeOf: sm } = Object, af = ((e) => (t) => {
  const n = iX.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), gi = (e) => (e = e.toLowerCase(), (t) => af(t) === e), sf = (e) => (t) => typeof t === e, { isArray: To } = Array, Sl = sf("undefined");
function aX(e) {
  return e !== null && !Sl(e) && e.constructor !== null && !Sl(e.constructor) && Sr(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const hO = gi("ArrayBuffer");
function sX(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && hO(e.buffer), t;
}
const oX = sf("string"), Sr = sf("function"), pO = sf("number"), of = (e) => e !== null && typeof e == "object", lX = (e) => e === !0 || e === !1, qu = (e) => {
  if (af(e) !== "object")
    return !1;
  const t = sm(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, uX = gi("Date"), cX = gi("File"), fX = gi("Blob"), dX = gi("FileList"), hX = (e) => of(e) && Sr(e.pipe), pX = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Sr(e.append) && ((t = af(e)) === "formdata" || // detect form-data instance
  t === "object" && Sr(e.toString) && e.toString() === "[object FormData]"));
}, mX = gi("URLSearchParams"), vX = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ll(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, a;
  if (typeof e != "object" && (e = [e]), To(e))
    for (r = 0, a = e.length; r < a; r++)
      t.call(null, e[r], r, e);
  else {
    const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e), l = s.length;
    let u;
    for (r = 0; r < l; r++)
      u = s[r], t.call(null, e[u], u, e);
  }
}
function mO(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, a;
  for (; r-- > 0; )
    if (a = n[r], t === a.toLowerCase())
      return a;
  return null;
}
const vO = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), gO = (e) => !Sl(e) && e !== vO;
function $h() {
  const { caseless: e } = gO(this) && this || {}, t = {}, n = (r, a) => {
    const s = e && mO(t, a) || a;
    qu(t[s]) && qu(r) ? t[s] = $h(t[s], r) : qu(r) ? t[s] = $h({}, r) : To(r) ? t[s] = r.slice() : t[s] = r;
  };
  for (let r = 0, a = arguments.length; r < a; r++)
    arguments[r] && Ll(arguments[r], n);
  return t;
}
const gX = (e, t, n, { allOwnKeys: r } = {}) => (Ll(t, (a, s) => {
  n && Sr(a) ? e[s] = dO(a, n) : e[s] = a;
}, { allOwnKeys: r }), e), _X = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), yX = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, bX = (e, t, n, r) => {
  let a, s, l;
  const u = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (a = Object.getOwnPropertyNames(e), s = a.length; s-- > 0; )
      l = a[s], (!r || r(l, e, t)) && !u[l] && (t[l] = e[l], u[l] = !0);
    e = n !== !1 && sm(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, wX = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, OX = (e) => {
  if (!e)
    return null;
  if (To(e))
    return e;
  let t = e.length;
  if (!pO(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, EX = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && sm(Uint8Array)), DX = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let a;
  for (; (a = r.next()) && !a.done; ) {
    const s = a.value;
    t.call(e, s[0], s[1]);
  }
}, SX = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, xX = gi("HTMLFormElement"), TX = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, a) {
    return r.toUpperCase() + a;
  }
), Qy = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), kX = gi("RegExp"), _O = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  Ll(n, (a, s) => {
    let l;
    (l = t(a, s, e)) !== !1 && (r[s] = l || a);
  }), Object.defineProperties(e, r);
}, AX = (e) => {
  _O(e, (t, n) => {
    if (Sr(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (Sr(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, MX = (e, t) => {
  const n = {}, r = (a) => {
    a.forEach((s) => {
      n[s] = !0;
    });
  };
  return To(e) ? r(e) : r(String(e).split(t)), n;
}, $X = () => {
}, PX = (e, t) => (e = +e, Number.isFinite(e) ? e : t), Wd = "abcdefghijklmnopqrstuvwxyz", e0 = "0123456789", yO = {
  DIGIT: e0,
  ALPHA: Wd,
  ALPHA_DIGIT: Wd + Wd.toUpperCase() + e0
}, CX = (e = 16, t = yO.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function IX(e) {
  return !!(e && Sr(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const NX = (e) => {
  const t = new Array(10), n = (r, a) => {
    if (of(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[a] = r;
        const s = To(r) ? [] : {};
        return Ll(r, (l, u) => {
          const f = n(l, a + 1);
          !Sl(f) && (s[u] = f);
        }), t[a] = void 0, s;
      }
    }
    return r;
  };
  return n(e, 0);
}, LX = gi("AsyncFunction"), RX = (e) => e && (of(e) || Sr(e)) && Sr(e.then) && Sr(e.catch), re = {
  isArray: To,
  isArrayBuffer: hO,
  isBuffer: aX,
  isFormData: pX,
  isArrayBufferView: sX,
  isString: oX,
  isNumber: pO,
  isBoolean: lX,
  isObject: of,
  isPlainObject: qu,
  isUndefined: Sl,
  isDate: uX,
  isFile: cX,
  isBlob: fX,
  isRegExp: kX,
  isFunction: Sr,
  isStream: hX,
  isURLSearchParams: mX,
  isTypedArray: EX,
  isFileList: dX,
  forEach: Ll,
  merge: $h,
  extend: gX,
  trim: vX,
  stripBOM: _X,
  inherits: yX,
  toFlatObject: bX,
  kindOf: af,
  kindOfTest: gi,
  endsWith: wX,
  toArray: OX,
  forEachEntry: DX,
  matchAll: SX,
  isHTMLForm: xX,
  hasOwnProperty: Qy,
  hasOwnProp: Qy,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: _O,
  freezeMethods: AX,
  toObjectSet: MX,
  toCamelCase: TX,
  noop: $X,
  toFiniteNumber: PX,
  findKey: mO,
  global: vO,
  isContextDefined: gO,
  ALPHABET: yO,
  generateString: CX,
  isSpecCompliantForm: IX,
  toJSONObject: NX,
  isAsyncFn: LX,
  isThenable: RX
};
function gt(e, t, n, r, a) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), a && (this.response = a);
}
re.inherits(gt, Error, {
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
      config: re.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const bO = gt.prototype, wO = {};
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
  wO[e] = { value: e };
});
Object.defineProperties(gt, wO);
Object.defineProperty(bO, "isAxiosError", { value: !0 });
gt.from = (e, t, n, r, a, s) => {
  const l = Object.create(bO);
  return re.toFlatObject(e, l, function(f) {
    return f !== Error.prototype;
  }, (u) => u !== "isAxiosError"), gt.call(l, e.message, t, n, r, a), l.cause = e, l.name = e.name, s && Object.assign(l, s), l;
};
const FX = null;
function Ph(e) {
  return re.isPlainObject(e) || re.isArray(e);
}
function OO(e) {
  return re.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function t0(e, t, n) {
  return e ? e.concat(t).map(function(a, s) {
    return a = OO(a), !n && s ? "[" + a + "]" : a;
  }).join(n ? "." : "") : t;
}
function YX(e) {
  return re.isArray(e) && !e.some(Ph);
}
const WX = re.toFlatObject(re, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function lf(e, t, n) {
  if (!re.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = re.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(O, D) {
    return !re.isUndefined(D[O]);
  });
  const r = n.metaTokens, a = n.visitor || d, s = n.dots, l = n.indexes, f = (n.Blob || typeof Blob < "u" && Blob) && re.isSpecCompliantForm(t);
  if (!re.isFunction(a))
    throw new TypeError("visitor must be a function");
  function h(w) {
    if (w === null)
      return "";
    if (re.isDate(w))
      return w.toISOString();
    if (!f && re.isBlob(w))
      throw new gt("Blob is not supported. Use a Buffer instead.");
    return re.isArrayBuffer(w) || re.isTypedArray(w) ? f && typeof Blob == "function" ? new Blob([w]) : Buffer.from(w) : w;
  }
  function d(w, O, D) {
    let b = w;
    if (w && !D && typeof w == "object") {
      if (re.endsWith(O, "{}"))
        O = r ? O : O.slice(0, -2), w = JSON.stringify(w);
      else if (re.isArray(w) && YX(w) || (re.isFileList(w) || re.endsWith(O, "[]")) && (b = re.toArray(w)))
        return O = OO(O), b.forEach(function(k, E) {
          !(re.isUndefined(k) || k === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            l === !0 ? t0([O], E, s) : l === null ? O : O + "[]",
            h(k)
          );
        }), !1;
    }
    return Ph(w) ? !0 : (t.append(t0(D, O, s), h(w)), !1);
  }
  const m = [], v = Object.assign(WX, {
    defaultVisitor: d,
    convertValue: h,
    isVisitable: Ph
  });
  function g(w, O) {
    if (!re.isUndefined(w)) {
      if (m.indexOf(w) !== -1)
        throw Error("Circular reference detected in " + O.join("."));
      m.push(w), re.forEach(w, function(b, x) {
        (!(re.isUndefined(b) || b === null) && a.call(
          t,
          b,
          re.isString(x) ? x.trim() : x,
          O,
          v
        )) === !0 && g(b, O ? O.concat(x) : [x]);
      }), m.pop();
    }
  }
  if (!re.isObject(e))
    throw new TypeError("data must be an object");
  return g(e), t;
}
function n0(e) {
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
function om(e, t) {
  this._pairs = [], e && lf(e, this, t);
}
const EO = om.prototype;
EO.append = function(t, n) {
  this._pairs.push([t, n]);
};
EO.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, n0);
  } : n0;
  return this._pairs.map(function(a) {
    return n(a[0]) + "=" + n(a[1]);
  }, "").join("&");
};
function UX(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function DO(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || UX, a = n && n.serialize;
  let s;
  if (a ? s = a(t, n) : s = re.isURLSearchParams(t) ? t.toString() : new om(t, n).toString(r), s) {
    const l = e.indexOf("#");
    l !== -1 && (e = e.slice(0, l)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
class VX {
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
    re.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const r0 = VX, SO = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, BX = typeof URLSearchParams < "u" ? URLSearchParams : om, HX = typeof FormData < "u" ? FormData : null, zX = typeof Blob < "u" ? Blob : null, jX = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), GX = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), ri = {
  isBrowser: !0,
  classes: {
    URLSearchParams: BX,
    FormData: HX,
    Blob: zX
  },
  isStandardBrowserEnv: jX,
  isStandardBrowserWebWorkerEnv: GX,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function qX(e, t) {
  return lf(e, new ri.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, a, s) {
      return ri.isNode && re.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function KX(e) {
  return re.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function ZX(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const a = n.length;
  let s;
  for (r = 0; r < a; r++)
    s = n[r], t[s] = e[s];
  return t;
}
function xO(e) {
  function t(n, r, a, s) {
    let l = n[s++];
    const u = Number.isFinite(+l), f = s >= n.length;
    return l = !l && re.isArray(a) ? a.length : l, f ? (re.hasOwnProp(a, l) ? a[l] = [a[l], r] : a[l] = r, !u) : ((!a[l] || !re.isObject(a[l])) && (a[l] = []), t(n, r, a[l], s) && re.isArray(a[l]) && (a[l] = ZX(a[l])), !u);
  }
  if (re.isFormData(e) && re.isFunction(e.entries)) {
    const n = {};
    return re.forEachEntry(e, (r, a) => {
      t(KX(r), a, n, 0);
    }), n;
  }
  return null;
}
function XX(e, t, n) {
  if (re.isString(e))
    try {
      return (t || JSON.parse)(e), re.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const lm = {
  transitional: SO,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", a = r.indexOf("application/json") > -1, s = re.isObject(t);
    if (s && re.isHTMLForm(t) && (t = new FormData(t)), re.isFormData(t))
      return a && a ? JSON.stringify(xO(t)) : t;
    if (re.isArrayBuffer(t) || re.isBuffer(t) || re.isStream(t) || re.isFile(t) || re.isBlob(t))
      return t;
    if (re.isArrayBufferView(t))
      return t.buffer;
    if (re.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let u;
    if (s) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return qX(t, this.formSerializer).toString();
      if ((u = re.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return lf(
          u ? { "files[]": t } : t,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return s || a ? (n.setContentType("application/json", !1), XX(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || lm.transitional, r = n && n.forcedJSONParsing, a = this.responseType === "json";
    if (t && re.isString(t) && (r && !this.responseType || a)) {
      const l = !(n && n.silentJSONParsing) && a;
      try {
        return JSON.parse(t);
      } catch (u) {
        if (l)
          throw u.name === "SyntaxError" ? gt.from(u, gt.ERR_BAD_RESPONSE, this, null, this.response) : u;
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
    FormData: ri.classes.FormData,
    Blob: ri.classes.Blob
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
re.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  lm.headers[e] = {};
});
const um = lm, JX = re.toObjectSet([
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
]), QX = (e) => {
  const t = {};
  let n, r, a;
  return e && e.split(`
`).forEach(function(l) {
    a = l.indexOf(":"), n = l.substring(0, a).trim().toLowerCase(), r = l.substring(a + 1).trim(), !(!n || t[n] && JX[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, i0 = Symbol("internals");
function tl(e) {
  return e && String(e).trim().toLowerCase();
}
function Ku(e) {
  return e === !1 || e == null ? e : re.isArray(e) ? e.map(Ku) : String(e);
}
function eJ(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const tJ = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ud(e, t, n, r, a) {
  if (re.isFunction(r))
    return r.call(this, t, n);
  if (a && (t = n), !!re.isString(t)) {
    if (re.isString(r))
      return t.indexOf(r) !== -1;
    if (re.isRegExp(r))
      return r.test(t);
  }
}
function nJ(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function rJ(e, t) {
  const n = re.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(a, s, l) {
        return this[r].call(this, t, a, s, l);
      },
      configurable: !0
    });
  });
}
class uf {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const a = this;
    function s(u, f, h) {
      const d = tl(f);
      if (!d)
        throw new Error("header name must be a non-empty string");
      const m = re.findKey(a, d);
      (!m || a[m] === void 0 || h === !0 || h === void 0 && a[m] !== !1) && (a[m || f] = Ku(u));
    }
    const l = (u, f) => re.forEach(u, (h, d) => s(h, d, f));
    return re.isPlainObject(t) || t instanceof this.constructor ? l(t, n) : re.isString(t) && (t = t.trim()) && !tJ(t) ? l(QX(t), n) : t != null && s(n, t, r), this;
  }
  get(t, n) {
    if (t = tl(t), t) {
      const r = re.findKey(this, t);
      if (r) {
        const a = this[r];
        if (!n)
          return a;
        if (n === !0)
          return eJ(a);
        if (re.isFunction(n))
          return n.call(this, a, r);
        if (re.isRegExp(n))
          return n.exec(a);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = tl(t), t) {
      const r = re.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Ud(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let a = !1;
    function s(l) {
      if (l = tl(l), l) {
        const u = re.findKey(r, l);
        u && (!n || Ud(r, r[u], u, n)) && (delete r[u], a = !0);
      }
    }
    return re.isArray(t) ? t.forEach(s) : s(t), a;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, a = !1;
    for (; r--; ) {
      const s = n[r];
      (!t || Ud(this, this[s], s, t, !0)) && (delete this[s], a = !0);
    }
    return a;
  }
  normalize(t) {
    const n = this, r = {};
    return re.forEach(this, (a, s) => {
      const l = re.findKey(r, s);
      if (l) {
        n[l] = Ku(a), delete n[s];
        return;
      }
      const u = t ? nJ(s) : String(s).trim();
      u !== s && delete n[s], n[u] = Ku(a), r[u] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return re.forEach(this, (r, a) => {
      r != null && r !== !1 && (n[a] = t && re.isArray(r) ? r.join(", ") : r);
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
    return n.forEach((a) => r.set(a)), r;
  }
  static accessor(t) {
    const r = (this[i0] = this[i0] = {
      accessors: {}
    }).accessors, a = this.prototype;
    function s(l) {
      const u = tl(l);
      r[u] || (rJ(a, l), r[u] = !0);
    }
    return re.isArray(t) ? t.forEach(s) : s(t), this;
  }
}
uf.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
re.reduceDescriptors(uf.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
re.freezeMethods(uf);
const Wi = uf;
function Vd(e, t) {
  const n = this || um, r = t || n, a = Wi.from(r.headers);
  let s = r.data;
  return re.forEach(e, function(u) {
    s = u.call(n, s, a.normalize(), t ? t.status : void 0);
  }), a.normalize(), s;
}
function TO(e) {
  return !!(e && e.__CANCEL__);
}
function Rl(e, t, n) {
  gt.call(this, e ?? "canceled", gt.ERR_CANCELED, t, n), this.name = "CanceledError";
}
re.inherits(Rl, gt, {
  __CANCEL__: !0
});
function iJ(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new gt(
    "Request failed with status code " + n.status,
    [gt.ERR_BAD_REQUEST, gt.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const aJ = ri.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(n, r, a, s, l, u) {
        const f = [];
        f.push(n + "=" + encodeURIComponent(r)), re.isNumber(a) && f.push("expires=" + new Date(a).toGMTString()), re.isString(s) && f.push("path=" + s), re.isString(l) && f.push("domain=" + l), u === !0 && f.push("secure"), document.cookie = f.join("; ");
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
function sJ(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function oJ(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function kO(e, t) {
  return e && !sJ(t) ? oJ(e, t) : t;
}
const lJ = ri.isStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
    let r;
    function a(s) {
      let l = s;
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
    return r = a(window.location.href), function(l) {
      const u = re.isString(l) ? a(l) : l;
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
function uJ(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function cJ(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let a = 0, s = 0, l;
  return t = t !== void 0 ? t : 1e3, function(f) {
    const h = Date.now(), d = r[s];
    l || (l = h), n[a] = f, r[a] = h;
    let m = s, v = 0;
    for (; m !== a; )
      v += n[m++], m = m % e;
    if (a = (a + 1) % e, a === s && (s = (s + 1) % e), h - l < t)
      return;
    const g = d && h - d;
    return g ? Math.round(v * 1e3 / g) : void 0;
  };
}
function a0(e, t) {
  let n = 0;
  const r = cJ(50, 250);
  return (a) => {
    const s = a.loaded, l = a.lengthComputable ? a.total : void 0, u = s - n, f = r(u), h = s <= l;
    n = s;
    const d = {
      loaded: s,
      total: l,
      progress: l ? s / l : void 0,
      bytes: u,
      rate: f || void 0,
      estimated: f && l && h ? (l - s) / f : void 0,
      event: a
    };
    d[t ? "download" : "upload"] = !0, e(d);
  };
}
const fJ = typeof XMLHttpRequest < "u", dJ = fJ && function(e) {
  return new Promise(function(n, r) {
    let a = e.data;
    const s = Wi.from(e.headers).normalize(), l = e.responseType;
    let u;
    function f() {
      e.cancelToken && e.cancelToken.unsubscribe(u), e.signal && e.signal.removeEventListener("abort", u);
    }
    let h;
    re.isFormData(a) && (ri.isStandardBrowserEnv || ri.isStandardBrowserWebWorkerEnv ? s.setContentType(!1) : s.getContentType(/^\s*multipart\/form-data/) ? re.isString(h = s.getContentType()) && s.setContentType(h.replace(/^\s*(multipart\/form-data);+/, "$1")) : s.setContentType("multipart/form-data"));
    let d = new XMLHttpRequest();
    if (e.auth) {
      const w = e.auth.username || "", O = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      s.set("Authorization", "Basic " + btoa(w + ":" + O));
    }
    const m = kO(e.baseURL, e.url);
    d.open(e.method.toUpperCase(), DO(m, e.params, e.paramsSerializer), !0), d.timeout = e.timeout;
    function v() {
      if (!d)
        return;
      const w = Wi.from(
        "getAllResponseHeaders" in d && d.getAllResponseHeaders()
      ), D = {
        data: !l || l === "text" || l === "json" ? d.responseText : d.response,
        status: d.status,
        statusText: d.statusText,
        headers: w,
        config: e,
        request: d
      };
      iJ(function(x) {
        n(x), f();
      }, function(x) {
        r(x), f();
      }, D), d = null;
    }
    if ("onloadend" in d ? d.onloadend = v : d.onreadystatechange = function() {
      !d || d.readyState !== 4 || d.status === 0 && !(d.responseURL && d.responseURL.indexOf("file:") === 0) || setTimeout(v);
    }, d.onabort = function() {
      d && (r(new gt("Request aborted", gt.ECONNABORTED, e, d)), d = null);
    }, d.onerror = function() {
      r(new gt("Network Error", gt.ERR_NETWORK, e, d)), d = null;
    }, d.ontimeout = function() {
      let O = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const D = e.transitional || SO;
      e.timeoutErrorMessage && (O = e.timeoutErrorMessage), r(new gt(
        O,
        D.clarifyTimeoutError ? gt.ETIMEDOUT : gt.ECONNABORTED,
        e,
        d
      )), d = null;
    }, ri.isStandardBrowserEnv) {
      const w = (e.withCredentials || lJ(m)) && e.xsrfCookieName && aJ.read(e.xsrfCookieName);
      w && s.set(e.xsrfHeaderName, w);
    }
    a === void 0 && s.setContentType(null), "setRequestHeader" in d && re.forEach(s.toJSON(), function(O, D) {
      d.setRequestHeader(D, O);
    }), re.isUndefined(e.withCredentials) || (d.withCredentials = !!e.withCredentials), l && l !== "json" && (d.responseType = e.responseType), typeof e.onDownloadProgress == "function" && d.addEventListener("progress", a0(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && d.upload && d.upload.addEventListener("progress", a0(e.onUploadProgress)), (e.cancelToken || e.signal) && (u = (w) => {
      d && (r(!w || w.type ? new Rl(null, e, d) : w), d.abort(), d = null);
    }, e.cancelToken && e.cancelToken.subscribe(u), e.signal && (e.signal.aborted ? u() : e.signal.addEventListener("abort", u)));
    const g = uJ(m);
    if (g && ri.protocols.indexOf(g) === -1) {
      r(new gt("Unsupported protocol " + g + ":", gt.ERR_BAD_REQUEST, e));
      return;
    }
    d.send(a || null);
  });
}, Ch = {
  http: FX,
  xhr: dJ
};
re.forEach(Ch, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const s0 = (e) => `- ${e}`, hJ = (e) => re.isFunction(e) || e === null || e === !1, AO = {
  getAdapter: (e) => {
    e = re.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const a = {};
    for (let s = 0; s < t; s++) {
      n = e[s];
      let l;
      if (r = n, !hJ(n) && (r = Ch[(l = String(n)).toLowerCase()], r === void 0))
        throw new gt(`Unknown adapter '${l}'`);
      if (r)
        break;
      a[l || "#" + s] = r;
    }
    if (!r) {
      const s = Object.entries(a).map(
        ([u, f]) => `adapter ${u} ` + (f === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let l = t ? s.length > 1 ? `since :
` + s.map(s0).join(`
`) : " " + s0(s[0]) : "as no adapter specified";
      throw new gt(
        "There is no suitable adapter to dispatch the request " + l,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: Ch
};
function Bd(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Rl(null, e);
}
function o0(e) {
  return Bd(e), e.headers = Wi.from(e.headers), e.data = Vd.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), AO.getAdapter(e.adapter || um.adapter)(e).then(function(r) {
    return Bd(e), r.data = Vd.call(
      e,
      e.transformResponse,
      r
    ), r.headers = Wi.from(r.headers), r;
  }, function(r) {
    return TO(r) || (Bd(e), r && r.response && (r.response.data = Vd.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = Wi.from(r.response.headers))), Promise.reject(r);
  });
}
const l0 = (e) => e instanceof Wi ? e.toJSON() : e;
function so(e, t) {
  t = t || {};
  const n = {};
  function r(h, d, m) {
    return re.isPlainObject(h) && re.isPlainObject(d) ? re.merge.call({ caseless: m }, h, d) : re.isPlainObject(d) ? re.merge({}, d) : re.isArray(d) ? d.slice() : d;
  }
  function a(h, d, m) {
    if (re.isUndefined(d)) {
      if (!re.isUndefined(h))
        return r(void 0, h, m);
    } else
      return r(h, d, m);
  }
  function s(h, d) {
    if (!re.isUndefined(d))
      return r(void 0, d);
  }
  function l(h, d) {
    if (re.isUndefined(d)) {
      if (!re.isUndefined(h))
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
    url: s,
    method: s,
    data: s,
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
    headers: (h, d) => a(l0(h), l0(d), !0)
  };
  return re.forEach(Object.keys(Object.assign({}, e, t)), function(d) {
    const m = f[d] || a, v = m(e[d], t[d], d);
    re.isUndefined(v) && m !== u || (n[d] = v);
  }), n;
}
const MO = "1.5.1", cm = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  cm[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const u0 = {};
cm.transitional = function(t, n, r) {
  function a(s, l) {
    return "[Axios v" + MO + "] Transitional option '" + s + "'" + l + (r ? ". " + r : "");
  }
  return (s, l, u) => {
    if (t === !1)
      throw new gt(
        a(l, " has been removed" + (n ? " in " + n : "")),
        gt.ERR_DEPRECATED
      );
    return n && !u0[l] && (u0[l] = !0, console.warn(
      a(
        l,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(s, l, u) : !0;
  };
};
function pJ(e, t, n) {
  if (typeof e != "object")
    throw new gt("options must be an object", gt.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let a = r.length;
  for (; a-- > 0; ) {
    const s = r[a], l = t[s];
    if (l) {
      const u = e[s], f = u === void 0 || l(u, s, e);
      if (f !== !0)
        throw new gt("option " + s + " must be " + f, gt.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new gt("Unknown option " + s, gt.ERR_BAD_OPTION);
  }
}
const Ih = {
  assertOptions: pJ,
  validators: cm
}, _a = Ih.validators;
class Ac {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new r0(),
      response: new r0()
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
    const { transitional: r, paramsSerializer: a, headers: s } = n;
    r !== void 0 && Ih.assertOptions(r, {
      silentJSONParsing: _a.transitional(_a.boolean),
      forcedJSONParsing: _a.transitional(_a.boolean),
      clarifyTimeoutError: _a.transitional(_a.boolean)
    }, !1), a != null && (re.isFunction(a) ? n.paramsSerializer = {
      serialize: a
    } : Ih.assertOptions(a, {
      encode: _a.function,
      serialize: _a.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let l = s && re.merge(
      s.common,
      s[n.method]
    );
    s && re.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (w) => {
        delete s[w];
      }
    ), n.headers = Wi.concat(l, s);
    const u = [];
    let f = !0;
    this.interceptors.request.forEach(function(O) {
      typeof O.runWhen == "function" && O.runWhen(n) === !1 || (f = f && O.synchronous, u.unshift(O.fulfilled, O.rejected));
    });
    const h = [];
    this.interceptors.response.forEach(function(O) {
      h.push(O.fulfilled, O.rejected);
    });
    let d, m = 0, v;
    if (!f) {
      const w = [o0.bind(this), void 0];
      for (w.unshift.apply(w, u), w.push.apply(w, h), v = w.length, d = Promise.resolve(n); m < v; )
        d = d.then(w[m++], w[m++]);
      return d;
    }
    v = u.length;
    let g = n;
    for (m = 0; m < v; ) {
      const w = u[m++], O = u[m++];
      try {
        g = w(g);
      } catch (D) {
        O.call(this, D);
        break;
      }
    }
    try {
      d = o0.call(this, g);
    } catch (w) {
      return Promise.reject(w);
    }
    for (m = 0, v = h.length; m < v; )
      d = d.then(h[m++], h[m++]);
    return d;
  }
  getUri(t) {
    t = so(this.defaults, t);
    const n = kO(t.baseURL, t.url);
    return DO(n, t.params, t.paramsSerializer);
  }
}
re.forEach(["delete", "get", "head", "options"], function(t) {
  Ac.prototype[t] = function(n, r) {
    return this.request(so(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
re.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(s, l, u) {
      return this.request(so(u || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: l
      }));
    };
  }
  Ac.prototype[t] = n(), Ac.prototype[t + "Form"] = n(!0);
});
const Zu = Ac;
class fm {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(s) {
      n = s;
    });
    const r = this;
    this.promise.then((a) => {
      if (!r._listeners)
        return;
      let s = r._listeners.length;
      for (; s-- > 0; )
        r._listeners[s](a);
      r._listeners = null;
    }), this.promise.then = (a) => {
      let s;
      const l = new Promise((u) => {
        r.subscribe(u), s = u;
      }).then(a);
      return l.cancel = function() {
        r.unsubscribe(s);
      }, l;
    }, t(function(s, l, u) {
      r.reason || (r.reason = new Rl(s, l, u), n(r.reason));
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
      token: new fm(function(a) {
        t = a;
      }),
      cancel: t
    };
  }
}
const mJ = fm;
function vJ(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function gJ(e) {
  return re.isObject(e) && e.isAxiosError === !0;
}
const Nh = {
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
Object.entries(Nh).forEach(([e, t]) => {
  Nh[t] = e;
});
const _J = Nh;
function $O(e) {
  const t = new Zu(e), n = dO(Zu.prototype.request, t);
  return re.extend(n, Zu.prototype, t, { allOwnKeys: !0 }), re.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(a) {
    return $O(so(e, a));
  }, n;
}
const an = $O(um);
an.Axios = Zu;
an.CanceledError = Rl;
an.CancelToken = mJ;
an.isCancel = TO;
an.VERSION = MO;
an.toFormData = lf;
an.AxiosError = gt;
an.Cancel = an.CanceledError;
an.all = function(t) {
  return Promise.all(t);
};
an.spread = vJ;
an.isAxiosError = gJ;
an.mergeConfig = so;
an.AxiosHeaders = Wi;
an.formToJSON = (e) => xO(re.isHTMLForm(e) ? new FormData(e) : e);
an.getAdapter = AO.getAdapter;
an.HttpStatusCode = _J;
an.default = an;
const yJ = an;
function bJ(e, t) {
  return F(), G("svg", {
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
const wJ = /* @__PURE__ */ Re({
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
    const r = mo(e, t);
    return (a, s) => (F(), Ze(y(W2), Kt(y(r), {
      class: y(j1)(
        "peer h-4 w-4 shrink-0 rounded-sm border border-slate-200 border-slate-900 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-slate-900 data-[state=checked]:text-slate-50 dark:border-slate-800 dark:border-slate-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 dark:data-[state=checked]:bg-slate-50 dark:data-[state=checked]:text-slate-900",
        a.$attrs.class ?? ""
      )
    }), {
      default: Pe(() => [
        Me(y(U2), { class: "flex h-full w-full items-center justify-center text-current" }, {
          default: Pe(() => [
            Me(y(bJ), { class: "h-4 w-4" })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), OJ = { class: "flex items-center flex-col justify-center py-2" }, EJ = { class: "flex justify-start gap-2 w-full items-center z-[2]" }, DJ = {
  key: 0,
  class: "flex-shrink-0 cursor-pointer pl-4"
}, SJ = {
  key: 1,
  class: "w-6"
}, xJ = ["for"], TJ = {
  key: 0,
  class: "flex flex-col pl-6 w-full pt-2"
}, kJ = /* @__PURE__ */ Re({
  __name: "EventActionTargetItem",
  props: {
    target: {},
    targets: {}
  },
  setup(e) {
    const t = kt("addTarget"), n = Q(!0);
    return (r, a) => {
      var s, l, u;
      return F(), G("div", OJ, [
        j("div", {
          class: "item flex-1 flex gap-2 w-full items-center relative pr-4",
          onClick: a[1] || (a[1] = (f) => {
            var h;
            return (h = r.target) != null && h.children ? n.value = !y(n) : null;
          })
        }, [
          j("div", EJ, [
            (s = r.target) != null && s.children ? (F(), G("div", DJ, [
              Me(y(G1), {
                class: et(["text-dark-3 transition-all", { " -rotate-90": !y(n) }]),
                size: 16
              }, null, 8, ["class"])
            ])) : (F(), G("div", SJ)),
            j("label", {
              for: `target-${r.target.id}`,
              class: et(["flex-1 cursor-pointer flex items-center gap-2", [((l = r.target) != null && l.children, "p3-r")]])
            }, [
              rr(j("div", {
                class: et(["w-2 h-2 rounded-full flex-shrink-0", [r.target.enabled ? "bg-success-green-4" : "bg-red-4"]])
              }, null, 2), [
                [O0, r.target.hasOwnProperty("enabled")]
              ]),
              j("span", null, ke(r.target.name), 1)
            ], 10, xJ)
          ]),
          (u = r.target) != null && u.children ? De("", !0) : (F(), Ze(y(wJ), {
            key: 0,
            class: "rounded data-[state=checked]:bg-true-blue-3 border-true-blue-4 z-[2]",
            id: `target-${r.target.id}`,
            checked: r.targets.some((f) => f === r.target.id),
            "onUpdate:checked": a[0] || (a[0] = (f) => y(t)(r.target))
          }, null, 8, ["id", "checked"]))
        ]),
        Me(lo, {
          name: "fade",
          mode: "out-in"
        }, {
          default: Pe(() => {
            var f;
            return [
              (f = r.target) != null && f.children && y(n) ? (F(), G("div", TJ, [
                (F(!0), G(Ke, null, Rt(r.target.children, (h) => (F(), Ze(PO, {
                  target: h,
                  targets: r.targets
                }, null, 8, ["target", "targets"]))), 256))
              ])) : De("", !0)
            ];
          }),
          _: 1
        })
      ]);
    };
  }
});
const PO = /* @__PURE__ */ uo(kJ, [["__scopeId", "data-v-f70931b2"]]);
function AJ() {
  var e = window.navigator.userAgent, t = e.indexOf("MSIE ");
  if (t > 0)
    return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
  var n = e.indexOf("Trident/");
  if (n > 0) {
    var r = e.indexOf("rv:");
    return parseInt(e.substring(r + 3, e.indexOf(".", r)), 10);
  }
  var a = e.indexOf("Edge/");
  return a > 0 ? parseInt(e.substring(a + 5, e.indexOf(".", a)), 10) : -1;
}
let Xu;
function Lh() {
  Lh.init || (Lh.init = !0, Xu = AJ() !== -1);
}
var cf = {
  name: "ResizeObserver",
  props: {
    emitOnMount: {
      type: Boolean,
      default: !1
    },
    ignoreWidth: {
      type: Boolean,
      default: !1
    },
    ignoreHeight: {
      type: Boolean,
      default: !1
    }
  },
  emits: [
    "notify"
  ],
  mounted() {
    Lh(), En(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", Xu && this.$el.appendChild(e), e.data = "about:blank", Xu || this.$el.appendChild(e);
  },
  beforeUnmount() {
    this.removeResizeHandlers();
  },
  methods: {
    compareAndNotify() {
      (!this.ignoreWidth && this._w !== this.$el.offsetWidth || !this.ignoreHeight && this._h !== this.$el.offsetHeight) && (this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitSize());
    },
    emitSize() {
      this.$emit("notify", {
        width: this._w,
        height: this._h
      });
    },
    addResizeHandlers() {
      this._resizeObject.contentDocument.defaultView.addEventListener("resize", this.compareAndNotify), this.compareAndNotify();
    },
    removeResizeHandlers() {
      this._resizeObject && this._resizeObject.onload && (!Xu && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const MJ = /* @__PURE__ */ _M("data-v-b329ee4c");
vM("data-v-b329ee4c");
const $J = {
  class: "resize-observer",
  tabindex: "-1"
};
gM();
const PJ = /* @__PURE__ */ MJ((e, t, n, r, a, s) => (F(), Ze("div", $J)));
cf.render = PJ;
cf.__scopeId = "data-v-b329ee4c";
cf.__file = "src/components/ResizeObserver.vue";
function Ju(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ju = function(t) {
    return typeof t;
  } : Ju = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ju(e);
}
function CJ(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function c0(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function IJ(e, t, n) {
  return t && c0(e.prototype, t), n && c0(e, n), e;
}
function f0(e) {
  return NJ(e) || LJ(e) || RJ(e) || FJ();
}
function NJ(e) {
  if (Array.isArray(e))
    return Rh(e);
}
function LJ(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e))
    return Array.from(e);
}
function RJ(e, t) {
  if (e) {
    if (typeof e == "string")
      return Rh(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Rh(e, t);
  }
}
function Rh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function FJ() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function YJ(e) {
  var t;
  return typeof e == "function" ? t = {
    callback: e
  } : t = e, t;
}
function WJ(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r, a, s, l = function(f) {
    for (var h = arguments.length, d = new Array(h > 1 ? h - 1 : 0), m = 1; m < h; m++)
      d[m - 1] = arguments[m];
    if (s = d, !(r && f === a)) {
      var v = n.leading;
      typeof v == "function" && (v = v(f, a)), (!r || f !== a) && v && e.apply(void 0, [f].concat(f0(s))), a = f, clearTimeout(r), r = setTimeout(function() {
        e.apply(void 0, [f].concat(f0(s))), r = 0;
      }, t);
    }
  };
  return l._clear = function() {
    clearTimeout(r), r = null;
  }, l;
}
function CO(e, t) {
  if (e === t)
    return !0;
  if (Ju(e) === "object") {
    for (var n in e)
      if (!CO(e[n], t[n]))
        return !1;
    return !0;
  }
  return !1;
}
var UJ = /* @__PURE__ */ function() {
  function e(t, n, r) {
    CJ(this, e), this.el = t, this.observer = null, this.frozen = !1, this.createObserver(n, r);
  }
  return IJ(e, [{
    key: "createObserver",
    value: function(n, r) {
      var a = this;
      if (this.observer && this.destroyObserver(), !this.frozen) {
        if (this.options = YJ(n), this.callback = function(u, f) {
          a.options.callback(u, f), u && a.options.once && (a.frozen = !0, a.destroyObserver());
        }, this.callback && this.options.throttle) {
          var s = this.options.throttleOptions || {}, l = s.leading;
          this.callback = WJ(this.callback, this.options.throttle, {
            leading: function(f) {
              return l === "both" || l === "visible" && f || l === "hidden" && !f;
            }
          });
        }
        this.oldResult = void 0, this.observer = new IntersectionObserver(function(u) {
          var f = u[0];
          if (u.length > 1) {
            var h = u.find(function(m) {
              return m.isIntersecting;
            });
            h && (f = h);
          }
          if (a.callback) {
            var d = f.isIntersecting && f.intersectionRatio >= a.threshold;
            if (d === a.oldResult)
              return;
            a.oldResult = d, a.callback(d, f);
          }
        }, this.options.intersection), En(function() {
          a.observer && a.observer.observe(a.el);
        });
      }
    }
  }, {
    key: "destroyObserver",
    value: function() {
      this.observer && (this.observer.disconnect(), this.observer = null), this.callback && this.callback._clear && (this.callback._clear(), this.callback = null);
    }
  }, {
    key: "threshold",
    get: function() {
      return this.options.intersection && typeof this.options.intersection.threshold == "number" ? this.options.intersection.threshold : 0;
    }
  }]), e;
}();
function IO(e, t, n) {
  var r = t.value;
  if (r)
    if (typeof IntersectionObserver > "u")
      console.warn("[vue-observe-visibility] IntersectionObserver API is not available in your browser. Please install this polyfill: https://github.com/w3c/IntersectionObserver/tree/master/polyfill");
    else {
      var a = new UJ(e, r, n);
      e._vue_visibilityState = a;
    }
}
function VJ(e, t, n) {
  var r = t.value, a = t.oldValue;
  if (!CO(r, a)) {
    var s = e._vue_visibilityState;
    if (!r) {
      NO(e);
      return;
    }
    s ? s.createObserver(r, n) : IO(e, {
      value: r
    }, n);
  }
}
function NO(e) {
  var t = e._vue_visibilityState;
  t && (t.destroyObserver(), delete e._vue_visibilityState);
}
var BJ = {
  beforeMount: IO,
  updated: VJ,
  unmounted: NO
};
function HJ(e) {
  return { all: e = e || /* @__PURE__ */ new Map(), on: function(t, n) {
    var r = e.get(t);
    r && r.push(n) || e.set(t, [n]);
  }, off: function(t, n) {
    var r = e.get(t);
    r && r.splice(r.indexOf(n) >>> 0, 1);
  }, emit: function(t, n) {
    (e.get(t) || []).slice().map(function(r) {
      r(n);
    }), (e.get("*") || []).slice().map(function(r) {
      r(t, n);
    });
  } };
}
var zJ = {
  itemsLimit: 1e3
}, jJ = /(auto|scroll)/;
function LO(e, t) {
  return e.parentNode === null ? t : LO(e.parentNode, t.concat([e]));
}
var Hd = function(t, n) {
  return getComputedStyle(t, null).getPropertyValue(n);
}, GJ = function(t) {
  return Hd(t, "overflow") + Hd(t, "overflow-y") + Hd(t, "overflow-x");
}, qJ = function(t) {
  return jJ.test(GJ(t));
};
function d0(e) {
  if (e instanceof HTMLElement || e instanceof SVGElement) {
    for (var t = LO(e.parentNode, []), n = 0; n < t.length; n += 1)
      if (qJ(t[n]))
        return t[n];
    return document.scrollingElement || document.documentElement;
  }
}
function Fh(e) {
  "@babel/helpers - typeof";
  return Fh = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Fh(e);
}
var RO = {
  items: {
    type: Array,
    required: !0
  },
  keyField: {
    type: String,
    default: "id"
  },
  direction: {
    type: String,
    default: "vertical",
    validator: function(t) {
      return ["vertical", "horizontal"].includes(t);
    }
  },
  listTag: {
    type: String,
    default: "div"
  },
  itemTag: {
    type: String,
    default: "div"
  }
};
function FO() {
  return this.items.length && Fh(this.items[0]) !== "object";
}
var Yh = !1;
if (typeof window < "u") {
  Yh = !1;
  try {
    var KJ = Object.defineProperty({}, "passive", {
      get: function() {
        Yh = !0;
      }
    });
    window.addEventListener("test", null, KJ);
  } catch {
  }
}
let ZJ = 0;
var dm = {
  name: "RecycleScroller",
  components: {
    ResizeObserver: cf
  },
  directives: {
    ObserveVisibility: BJ
  },
  props: {
    ...RO,
    itemSize: {
      type: Number,
      default: null
    },
    gridItems: {
      type: Number,
      default: void 0
    },
    itemSecondarySize: {
      type: Number,
      default: void 0
    },
    minItemSize: {
      type: [Number, String],
      default: null
    },
    sizeField: {
      type: String,
      default: "size"
    },
    typeField: {
      type: String,
      default: "type"
    },
    buffer: {
      type: Number,
      default: 200
    },
    pageMode: {
      type: Boolean,
      default: !1
    },
    prerender: {
      type: Number,
      default: 0
    },
    emitUpdate: {
      type: Boolean,
      default: !1
    },
    updateInterval: {
      type: Number,
      default: 0
    },
    skipHover: {
      type: Boolean,
      default: !1
    },
    listTag: {
      type: String,
      default: "div"
    },
    itemTag: {
      type: String,
      default: "div"
    },
    listClass: {
      type: [String, Object, Array],
      default: ""
    },
    itemClass: {
      type: [String, Object, Array],
      default: ""
    }
  },
  emits: [
    "resize",
    "visible",
    "hidden",
    "update",
    "scroll-start",
    "scroll-end"
  ],
  data() {
    return {
      pool: [],
      totalSize: 0,
      ready: !1,
      hoverKey: null
    };
  },
  computed: {
    sizes() {
      if (this.itemSize === null) {
        const e = {
          "-1": { accumulator: 0 }
        }, t = this.items, n = this.sizeField, r = this.minItemSize;
        let a = 1e4, s = 0, l;
        for (let u = 0, f = t.length; u < f; u++)
          l = t[u][n] || r, l < a && (a = l), s += l, e[u] = { accumulator: s, size: l };
        return this.$_computedMinItemSize = a, e;
      }
      return [];
    },
    simpleArray: FO,
    itemIndexByKey() {
      const { keyField: e, items: t } = this, n = {};
      for (let r = 0, a = t.length; r < a; r++)
        n[t[r][e]] = r;
      return n;
    }
  },
  watch: {
    items() {
      this.updateVisibleItems(!0);
    },
    pageMode() {
      this.applyPageMode(), this.updateVisibleItems(!1);
    },
    sizes: {
      handler() {
        this.updateVisibleItems(!1);
      },
      deep: !0
    },
    gridItems() {
      this.updateVisibleItems(!0);
    },
    itemSecondarySize() {
      this.updateVisibleItems(!0);
    }
  },
  created() {
    this.$_startIndex = 0, this.$_endIndex = 0, this.$_views = /* @__PURE__ */ new Map(), this.$_unusedViews = /* @__PURE__ */ new Map(), this.$_scrollDirty = !1, this.$_lastUpdateScrollPosition = 0, this.prerender && (this.$_prerender = !0, this.updateVisibleItems(!1)), this.gridItems && !this.itemSize && console.error("[vue-recycle-scroller] You must provide an itemSize when using gridItems");
  },
  mounted() {
    this.applyPageMode(), this.$nextTick(() => {
      this.$_prerender = !1, this.updateVisibleItems(!0), this.ready = !0;
    });
  },
  activated() {
    const e = this.$_lastUpdateScrollPosition;
    typeof e == "number" && this.$nextTick(() => {
      this.scrollToPosition(e);
    });
  },
  beforeUnmount() {
    this.removeListeners();
  },
  methods: {
    addView(e, t, n, r, a) {
      const s = zd({
        id: ZJ++,
        index: t,
        used: !0,
        key: r,
        type: a
      }), l = yM({
        item: n,
        position: 0,
        nr: s
      });
      return e.push(l), l;
    },
    unuseView(e, t = !1) {
      const n = this.$_unusedViews, r = e.nr.type;
      let a = n.get(r);
      a || (a = [], n.set(r, a)), a.push(e), t || (e.nr.used = !1, e.position = -9999);
    },
    handleResize() {
      this.$emit("resize"), this.ready && this.updateVisibleItems(!1);
    },
    handleScroll(e) {
      if (!this.$_scrollDirty) {
        if (this.$_scrollDirty = !0, this.$_updateTimeout)
          return;
        const t = () => requestAnimationFrame(() => {
          this.$_scrollDirty = !1;
          const { continuous: n } = this.updateVisibleItems(!1, !0);
          n || (clearTimeout(this.$_refreshTimout), this.$_refreshTimout = setTimeout(this.handleScroll, this.updateInterval + 100));
        });
        t(), this.updateInterval && (this.$_updateTimeout = setTimeout(() => {
          this.$_updateTimeout = 0, this.$_scrollDirty && t();
        }, this.updateInterval));
      }
    },
    handleVisibilityChange(e, t) {
      this.ready && (e || t.boundingClientRect.width !== 0 || t.boundingClientRect.height !== 0 ? (this.$emit("visible"), requestAnimationFrame(() => {
        this.updateVisibleItems(!1);
      })) : this.$emit("hidden"));
    },
    updateVisibleItems(e, t = !1) {
      const n = this.itemSize, r = this.gridItems || 1, a = this.itemSecondarySize || n, s = this.$_computedMinItemSize, l = this.typeField, u = this.simpleArray ? null : this.keyField, f = this.items, h = f.length, d = this.sizes, m = this.$_views, v = this.$_unusedViews, g = this.pool, w = this.itemIndexByKey;
      let O, D, b, x, k;
      if (!h)
        O = D = x = k = b = 0;
      else if (this.$_prerender)
        O = x = 0, D = k = Math.min(this.prerender, f.length), b = null;
      else {
        const $ = this.getScroll();
        if (t) {
          let J = $.start - this.$_lastUpdateScrollPosition;
          if (J < 0 && (J = -J), n === null && J < s || J < n)
            return {
              continuous: !0
            };
        }
        this.$_lastUpdateScrollPosition = $.start;
        const q = this.buffer;
        $.start -= q, $.end += q;
        let Y = 0;
        if (this.$refs.before && (Y = this.$refs.before.scrollHeight, $.start -= Y), this.$refs.after) {
          const J = this.$refs.after.scrollHeight;
          $.end += J;
        }
        if (n === null) {
          let J, me = 0, le = h - 1, pe = ~~(h / 2), Oe;
          do
            Oe = pe, J = d[pe].accumulator, J < $.start ? me = pe : pe < h - 1 && d[pe + 1].accumulator > $.start && (le = pe), pe = ~~((me + le) / 2);
          while (pe !== Oe);
          for (pe < 0 && (pe = 0), O = pe, b = d[h - 1].accumulator, D = pe; D < h && d[D].accumulator < $.end; D++)
            ;
          for (D === -1 ? D = f.length - 1 : (D++, D > h && (D = h)), x = O; x < h && Y + d[x].accumulator < $.start; x++)
            ;
          for (k = x; k < h && Y + d[k].accumulator < $.end; k++)
            ;
        } else {
          O = ~~($.start / n * r);
          const J = O % r;
          O -= J, D = Math.ceil($.end / n * r), x = Math.max(0, Math.floor(($.start - Y) / n * r)), k = Math.floor(($.end - Y) / n * r), O < 0 && (O = 0), D > h && (D = h), x < 0 && (x = 0), k > h && (k = h), b = Math.ceil(h / r) * n;
        }
      }
      D - O > zJ.itemsLimit && this.itemsLimitError(), this.totalSize = b;
      let E;
      const P = O <= this.$_endIndex && D >= this.$_startIndex;
      if (P)
        for (let $ = 0, q = g.length; $ < q; $++)
          E = g[$], E.nr.used && (e && (E.nr.index = w[E.item[u]]), (E.nr.index == null || E.nr.index < O || E.nr.index >= D) && this.unuseView(E));
      const M = P ? null : /* @__PURE__ */ new Map();
      let N, L, H;
      for (let $ = O; $ < D; $++) {
        N = f[$];
        const q = u ? N[u] : N;
        if (q == null)
          throw new Error(`Key is ${q} on item (keyField is '${u}')`);
        if (E = m.get(q), !n && !d[$].size) {
          E && this.unuseView(E);
          continue;
        }
        L = N[l];
        let Y = v.get(L), J = !1;
        if (!E)
          P ? Y && Y.length ? E = Y.pop() : E = this.addView(g, $, N, q, L) : (H = M.get(L) || 0, (!Y || H >= Y.length) && (E = this.addView(g, $, N, q, L), this.unuseView(E, !0), Y = v.get(L)), E = Y[H], M.set(L, H + 1)), m.delete(E.nr.key), E.nr.used = !0, E.nr.index = $, E.nr.key = q, E.nr.type = L, m.set(q, E), J = !0;
        else if (!E.nr.used && (E.nr.used = !0, J = !0, Y)) {
          const me = Y.indexOf(E);
          me !== -1 && Y.splice(me, 1);
        }
        E.item = N, J && ($ === f.length - 1 && this.$emit("scroll-end"), $ === 0 && this.$emit("scroll-start")), n === null ? (E.position = d[$ - 1].accumulator, E.offset = 0) : (E.position = Math.floor($ / r) * n, E.offset = $ % r * a);
      }
      return this.$_startIndex = O, this.$_endIndex = D, this.emitUpdate && this.$emit("update", O, D, x, k), clearTimeout(this.$_sortTimer), this.$_sortTimer = setTimeout(this.sortViews, this.updateInterval + 300), {
        continuous: P
      };
    },
    getListenerTarget() {
      let e = d0(this.$el);
      return window.document && (e === window.document.documentElement || e === window.document.body) && (e = window), e;
    },
    getScroll() {
      const { $el: e, direction: t } = this, n = t === "vertical";
      let r;
      if (this.pageMode) {
        const a = e.getBoundingClientRect(), s = n ? a.height : a.width;
        let l = -(n ? a.top : a.left), u = n ? window.innerHeight : window.innerWidth;
        l < 0 && (u += l, l = 0), l + u > s && (u = s - l), r = {
          start: l,
          end: l + u
        };
      } else
        n ? r = {
          start: e.scrollTop,
          end: e.scrollTop + e.clientHeight
        } : r = {
          start: e.scrollLeft,
          end: e.scrollLeft + e.clientWidth
        };
      return r;
    },
    applyPageMode() {
      this.pageMode ? this.addListeners() : this.removeListeners();
    },
    addListeners() {
      this.listenerTarget = this.getListenerTarget(), this.listenerTarget.addEventListener("scroll", this.handleScroll, Yh ? {
        passive: !0
      } : !1), this.listenerTarget.addEventListener("resize", this.handleResize);
    },
    removeListeners() {
      this.listenerTarget && (this.listenerTarget.removeEventListener("scroll", this.handleScroll), this.listenerTarget.removeEventListener("resize", this.handleResize), this.listenerTarget = null);
    },
    scrollToItem(e) {
      let t;
      const n = this.gridItems || 1;
      this.itemSize === null ? t = e > 0 ? this.sizes[e - 1].accumulator : 0 : t = Math.floor(e / n) * this.itemSize, this.scrollToPosition(t);
    },
    scrollToPosition(e) {
      const t = this.direction === "vertical" ? { scroll: "scrollTop", start: "top" } : { scroll: "scrollLeft", start: "left" };
      let n, r, a;
      if (this.pageMode) {
        const s = d0(this.$el), l = s.tagName === "HTML" ? 0 : s[t.scroll], u = s.getBoundingClientRect(), h = this.$el.getBoundingClientRect()[t.start] - u[t.start];
        n = s, r = t.scroll, a = e + l + h;
      } else
        n = this.$el, r = t.scroll, a = e;
      n[r] = a;
    },
    itemsLimitError() {
      throw setTimeout(() => {
        console.log("It seems the scroller element isn't scrolling, so it tries to render all the items at once.", "Scroller:", this.$el), console.log("Make sure the scroller has a fixed height (or width) and 'overflow-y' (or 'overflow-x') set to 'auto' so it can scroll correctly and only render the items visible in the scroll viewport.");
      }), new Error("Rendered items limit reached");
    },
    sortViews() {
      this.pool.sort((e, t) => e.nr.index - t.nr.index);
    }
  }
};
const XJ = {
  key: 0,
  ref: "before",
  class: "vue-recycle-scroller__slot"
}, JJ = {
  key: 1,
  ref: "after",
  class: "vue-recycle-scroller__slot"
};
function QJ(e, t, n, r, a, s) {
  const l = Ii("ResizeObserver"), u = y0("observe-visibility");
  return rr((F(), G(
    "div",
    {
      class: et(["vue-recycle-scroller", {
        ready: a.ready,
        "page-mode": n.pageMode,
        [`direction-${e.direction}`]: !0
      }]),
      onScrollPassive: t[0] || (t[0] = (...f) => s.handleScroll && s.handleScroll(...f))
    },
    [
      e.$slots.before ? (F(), G(
        "div",
        XJ,
        [
          rt(e.$slots, "before")
        ],
        512
        /* NEED_PATCH */
      )) : De("v-if", !0),
      (F(), Ze(Zs(n.listTag), {
        ref: "wrapper",
        style: Fi({ [e.direction === "vertical" ? "minHeight" : "minWidth"]: a.totalSize + "px" }),
        class: et(["vue-recycle-scroller__item-wrapper", n.listClass])
      }, {
        default: Pe(() => [
          (F(!0), G(
            Ke,
            null,
            Rt(a.pool, (f) => (F(), Ze(Zs(n.itemTag), Kt({
              key: f.nr.id,
              style: a.ready ? {
                transform: `translate${e.direction === "vertical" ? "Y" : "X"}(${f.position}px) translate${e.direction === "vertical" ? "X" : "Y"}(${f.offset}px)`,
                width: n.gridItems ? `${e.direction === "vertical" && n.itemSecondarySize || n.itemSize}px` : void 0,
                height: n.gridItems ? `${e.direction === "horizontal" && n.itemSecondarySize || n.itemSize}px` : void 0
              } : null,
              class: ["vue-recycle-scroller__item-view", [
                n.itemClass,
                {
                  hover: !n.skipHover && a.hoverKey === f.nr.key
                }
              ]]
            }, b0(n.skipHover ? {} : {
              mouseenter: () => {
                a.hoverKey = f.nr.key;
              },
              mouseleave: () => {
                a.hoverKey = null;
              }
            })), {
              default: Pe(() => [
                rt(e.$slots, "default", {
                  item: f.item,
                  index: f.nr.index,
                  active: f.nr.used
                })
              ]),
              _: 2
              /* DYNAMIC */
            }, 1040, ["style", "class"]))),
            128
            /* KEYED_FRAGMENT */
          )),
          rt(e.$slots, "empty")
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["style", "class"])),
      e.$slots.after ? (F(), G(
        "div",
        JJ,
        [
          rt(e.$slots, "after")
        ],
        512
        /* NEED_PATCH */
      )) : De("v-if", !0),
      Me(l, { onNotify: s.handleResize }, null, 8, ["onNotify"])
    ],
    34
    /* CLASS, HYDRATE_EVENTS */
  )), [
    [u, s.handleVisibilityChange]
  ]);
}
dm.render = QJ;
dm.__file = "src/components/RecycleScroller.vue";
var hm = {
  name: "DynamicScroller",
  components: {
    RecycleScroller: dm
  },
  provide() {
    return typeof ResizeObserver < "u" && (this.$_resizeObserver = new ResizeObserver((e) => {
      requestAnimationFrame(() => {
        if (Array.isArray(e)) {
          for (const t of e)
            if (t.target && t.target.$_vs_onResize) {
              let n, r;
              if (t.borderBoxSize) {
                const a = t.borderBoxSize[0];
                n = a.inlineSize, r = a.blockSize;
              } else
                n = t.contentRect.width, r = t.contentRect.height;
              t.target.$_vs_onResize(t.target.$_vs_id, n, r);
            }
        }
      });
    })), {
      vscrollData: this.vscrollData,
      vscrollParent: this,
      vscrollResizeObserver: this.$_resizeObserver
    };
  },
  inheritAttrs: !1,
  props: {
    ...RO,
    minItemSize: {
      type: [Number, String],
      required: !0
    }
  },
  emits: [
    "resize",
    "visible"
  ],
  data() {
    return {
      vscrollData: {
        active: !0,
        sizes: {},
        keyField: this.keyField,
        simpleArray: !1
      }
    };
  },
  computed: {
    simpleArray: FO,
    itemsWithSize() {
      const e = [], { items: t, keyField: n, simpleArray: r } = this, a = this.vscrollData.sizes, s = t.length;
      for (let l = 0; l < s; l++) {
        const u = t[l], f = r ? l : u[n];
        let h = a[f];
        typeof h > "u" && !this.$_undefinedMap[f] && (h = 0), e.push({
          item: u,
          id: f,
          size: h
        });
      }
      return e;
    }
  },
  watch: {
    items() {
      this.forceUpdate();
    },
    simpleArray: {
      handler(e) {
        this.vscrollData.simpleArray = e;
      },
      immediate: !0
    },
    direction(e) {
      this.forceUpdate(!0);
    },
    itemsWithSize(e, t) {
      const n = this.$el.scrollTop;
      let r = 0, a = 0;
      const s = Math.min(e.length, t.length);
      for (let u = 0; u < s && !(r >= n); u++)
        r += t[u].size || this.minItemSize, a += e[u].size || this.minItemSize;
      const l = a - r;
      l !== 0 && (this.$el.scrollTop += l);
    }
  },
  beforeCreate() {
    this.$_updates = [], this.$_undefinedSizes = 0, this.$_undefinedMap = {}, this.$_events = HJ();
  },
  activated() {
    this.vscrollData.active = !0;
  },
  deactivated() {
    this.vscrollData.active = !1;
  },
  unmounted() {
    this.$_events.all.clear();
  },
  methods: {
    onScrollerResize() {
      this.$refs.scroller && this.forceUpdate(), this.$emit("resize");
    },
    onScrollerVisible() {
      this.$_events.emit("vscroll:update", { force: !1 }), this.$emit("visible");
    },
    forceUpdate(e = !1) {
      (e || this.simpleArray) && (this.vscrollData.sizes = {}), this.$_events.emit("vscroll:update", { force: !0 });
    },
    scrollToItem(e) {
      const t = this.$refs.scroller;
      t && t.scrollToItem(e);
    },
    getItemSize(e, t = void 0) {
      const n = this.simpleArray ? t ?? this.items.indexOf(e) : e[this.keyField];
      return this.vscrollData.sizes[n] || 0;
    },
    scrollToBottom() {
      if (this.$_scrollingToBottom)
        return;
      this.$_scrollingToBottom = !0;
      const e = this.$el;
      this.$nextTick(() => {
        e.scrollTop = e.scrollHeight + 5e3;
        const t = () => {
          e.scrollTop = e.scrollHeight + 5e3, requestAnimationFrame(() => {
            e.scrollTop = e.scrollHeight + 5e3, this.$_undefinedSizes === 0 ? this.$_scrollingToBottom = !1 : requestAnimationFrame(t);
          });
        };
        requestAnimationFrame(t);
      });
    }
  }
};
function eQ(e, t, n, r, a, s) {
  const l = Ii("RecycleScroller");
  return F(), Ze(l, Kt({
    ref: "scroller",
    items: s.itemsWithSize,
    "min-item-size": n.minItemSize,
    direction: e.direction,
    "key-field": "id",
    "list-tag": e.listTag,
    "item-tag": e.itemTag
  }, e.$attrs, {
    onResize: s.onScrollerResize,
    onVisible: s.onScrollerVisible
  }), {
    default: Pe(({ item: u, index: f, active: h }) => [
      rt(e.$slots, "default", ts(Mc({
        item: u.item,
        index: f,
        active: h,
        itemWithSize: u
      })))
    ]),
    before: Pe(() => [
      rt(e.$slots, "before")
    ]),
    after: Pe(() => [
      rt(e.$slots, "after")
    ]),
    empty: Pe(() => [
      rt(e.$slots, "empty")
    ]),
    _: 3
    /* FORWARDED */
  }, 16, ["items", "min-item-size", "direction", "list-tag", "item-tag", "onResize", "onVisible"]);
}
hm.render = eQ;
hm.__file = "src/components/DynamicScroller.vue";
var YO = {
  name: "DynamicScrollerItem",
  inject: [
    "vscrollData",
    "vscrollParent",
    "vscrollResizeObserver"
  ],
  props: {
    // eslint-disable-next-line vue/require-prop-types
    item: {
      required: !0
    },
    watchData: {
      type: Boolean,
      default: !1
    },
    /**
     * Indicates if the view is actively used to display an item.
     */
    active: {
      type: Boolean,
      required: !0
    },
    index: {
      type: Number,
      default: void 0
    },
    sizeDependencies: {
      type: [Array, Object],
      default: null
    },
    emitResize: {
      type: Boolean,
      default: !1
    },
    tag: {
      type: String,
      default: "div"
    }
  },
  emits: [
    "resize"
  ],
  computed: {
    id() {
      if (this.vscrollData.simpleArray)
        return this.index;
      if (this.vscrollData.keyField in this.item)
        return this.item[this.vscrollData.keyField];
      throw new Error(`keyField '${this.vscrollData.keyField}' not found in your item. You should set a valid keyField prop on your Scroller`);
    },
    size() {
      return this.vscrollData.sizes[this.id] || 0;
    },
    finalActive() {
      return this.active && this.vscrollData.active;
    }
  },
  watch: {
    watchData: "updateWatchData",
    id(e, t) {
      if (this.$el.$_vs_id = this.id, this.size || this.onDataUpdate(), this.$_sizeObserved) {
        const n = this.vscrollData.sizes[t], r = this.vscrollData.sizes[e];
        n != null && n !== r && this.applySize(n);
      }
    },
    finalActive(e) {
      this.size || (e ? this.vscrollParent.$_undefinedMap[this.id] || (this.vscrollParent.$_undefinedSizes++, this.vscrollParent.$_undefinedMap[this.id] = !0) : this.vscrollParent.$_undefinedMap[this.id] && (this.vscrollParent.$_undefinedSizes--, this.vscrollParent.$_undefinedMap[this.id] = !1)), this.vscrollResizeObserver ? e ? this.observeSize() : this.unobserveSize() : e && this.$_pendingVScrollUpdate === this.id && this.updateSize();
    }
  },
  created() {
    if (!this.$isServer && (this.$_forceNextVScrollUpdate = null, this.updateWatchData(), !this.vscrollResizeObserver)) {
      for (const e in this.sizeDependencies)
        this.$watch(() => this.sizeDependencies[e], this.onDataUpdate);
      this.vscrollParent.$_events.on("vscroll:update", this.onVscrollUpdate);
    }
  },
  mounted() {
    this.finalActive && (this.updateSize(), this.observeSize());
  },
  beforeUnmount() {
    this.vscrollParent.$_events.off("vscroll:update", this.onVscrollUpdate), this.unobserveSize();
  },
  methods: {
    updateSize() {
      this.finalActive ? this.$_pendingSizeUpdate !== this.id && (this.$_pendingSizeUpdate = this.id, this.$_forceNextVScrollUpdate = null, this.$_pendingVScrollUpdate = null, this.computeSize(this.id)) : this.$_forceNextVScrollUpdate = this.id;
    },
    updateWatchData() {
      this.watchData && !this.vscrollResizeObserver ? this.$_watchData = this.$watch("item", () => {
        this.onDataUpdate();
      }, {
        deep: !0
      }) : this.$_watchData && (this.$_watchData(), this.$_watchData = null);
    },
    onVscrollUpdate({ force: e }) {
      !this.finalActive && e && (this.$_pendingVScrollUpdate = this.id), (this.$_forceNextVScrollUpdate === this.id || e || !this.size) && this.updateSize();
    },
    onDataUpdate() {
      this.updateSize();
    },
    computeSize(e) {
      this.$nextTick(() => {
        if (this.id === e) {
          const t = this.$el.offsetWidth, n = this.$el.offsetHeight;
          this.applyWidthHeight(t, n);
        }
        this.$_pendingSizeUpdate = null;
      });
    },
    applyWidthHeight(e, t) {
      const n = ~~(this.vscrollParent.direction === "vertical" ? t : e);
      n && this.size !== n && this.applySize(n);
    },
    applySize(e) {
      this.vscrollParent.$_undefinedMap[this.id] && (this.vscrollParent.$_undefinedSizes--, this.vscrollParent.$_undefinedMap[this.id] = void 0), this.vscrollData.sizes[this.id] = e, this.emitResize && this.$emit("resize", this.id);
    },
    observeSize() {
      this.vscrollResizeObserver && (this.$_sizeObserved || (this.vscrollResizeObserver.observe(this.$el), this.$el.$_vs_id = this.id, this.$el.$_vs_onResize = this.onResize, this.$_sizeObserved = !0));
    },
    unobserveSize() {
      this.vscrollResizeObserver && this.$_sizeObserved && (this.vscrollResizeObserver.unobserve(this.$el), this.$el.$_vs_onResize = void 0, this.$_sizeObserved = !1);
    },
    onResize(e, t, n) {
      this.id === e && this.applyWidthHeight(t, n);
    }
  },
  render() {
    return wr(this.tag, this.$slots.default());
  }
};
YO.__file = "src/components/DynamicScrollerItem.vue";
const tQ = { class: "flex flex-col gap-6" }, nQ = { class: "flex flex-col gap-6 pt-2" }, rQ = { class: "flex justify-start items-center gap-4" }, iQ = { class: "relative w-fit" }, aQ = { class: "p3-r text-dark-4" }, sQ = ["value"], oQ = { class: "shadow-01 flex items-center py-1 px-2 rounded p3-r text-dark-3" }, lQ = ["onClick"], uQ = {
  key: 0,
  class: "text-dark-5 mx-1"
}, cQ = { class: "flex gap-6" }, fQ = { class: "p3-r text-dark-4" }, dQ = {
  value: "",
  disabled: ""
}, hQ = ["value"], pQ = { class: "flex gap-4" }, mQ = { class: "p3-r text-dark-4" }, vQ = {
  value: "",
  disabled: ""
}, gQ = ["value"], _Q = {
  key: 0,
  class: "flex relative"
}, yQ = ["value"], bQ = {
  key: 0,
  class: "sticky top-0 left-0 pt-4 right-0 items-start bottom-0 w-full h-full flex justify-center bg-dark-3 bg-opacity-50 z-[2]"
}, wQ = { class: "sticky flex flex-col max-h-[95%] bg-light-5 rounded-xs shadow-01 w-4/5 py-4 px-10 h-fit top-[3%]" }, OQ = { class: "flex justify-between" }, EQ = { class: "p2-b flex justify-center mb-3 text-dark-2 mr-auto" }, DQ = {
  key: 0,
  class: "flex gap-4 w-full empty:hidden mb-2 items-center"
}, SQ = { class: "p3-r text-dark-4" }, xQ = ["for"], TQ = ["onUpdate:modelValue", "id"], kQ = { class: "w-2 h-2 rounded-full bg-success-green-4" }, AQ = {
  key: 1,
  class: "flex justify-end gap-4 items-center"
}, MQ = { class: "flex w-fit items-center gap-1 justify-end p3-r text-true-blue-3 mr-4 hover:text-true-blue-2" }, $Q = {
  key: 2,
  class: "h-4 w-4 mt-4 mx-auto animate-spin rounded-full border-2 border-solid border-blue-400 border-t-transparent"
}, PQ = {
  key: 0,
  class: "flex flex-col gap-4 flex-1 overflow-y-auto"
}, CQ = { class: "flex flex-col items-center justify-center gap-4 mt-4" }, IQ = { class: "p2-b text-dark-3" }, NQ = {
  key: 4,
  class: "mx-auto flex w-fit items-center gap-4 mt-8"
}, LQ = { class: "flex flex-col gap-6" }, RQ = { class: "p3-r text-dark-4" }, FQ = {
  value: "",
  disabled: ""
}, YQ = ["value"], WQ = { class: "flex justify-start gap-4 items-center" }, UQ = { class: "p3-r text-dark-4" }, VQ = { class: "shadow-01 flex items-center py-1 px-2 rounded p3-r text-dark-3" }, BQ = ["onClick"], HQ = {
  key: 0,
  class: "text-dark-5 mx-1"
}, zQ = {
  key: 0,
  class: "p3-r text-dark-4"
}, jQ = { class: "flex gap-4 w-full" }, GQ = { class: "flex justify-start items-center gap-4" }, qQ = { class: "p3-r text-dark-4 flex-shrink-0" }, KQ = { class: "flex gap-10 w-full" }, ZQ = { class: "flex gap-4 flex-1" }, XQ = { class: "shadow-01 flex items-center py-1 px-2 rounded p3-r text-dark-3" }, JQ = ["onClick"], QQ = {
  key: 0,
  class: "text-dark-5 mx-1"
}, eee = {
  key: 0,
  class: "flex items-center gap-1 w-24"
}, tee = { class: "p3-r text-dark-4" }, nee = {
  key: 0,
  class: "flex justify-center gap-1 flex-col"
}, ree = { class: "flex gap-4 items-center" }, iee = { class: "p3-r text-dark-4" }, aee = { class: "flex items-center gap-1" }, see = {
  key: 1,
  class: "flex gap-4 items-center w-28"
}, _r = "", oee = /* @__PURE__ */ Re({
  __name: "EventAction",
  setup(e) {
    const { t } = fi.global, n = kt("eventData"), r = Q(n.value.action ?? {}), a = Q(!!Object.keys(r.value).length), s = Q(!1);
    Ue(s, (ve) => {
      var ce, _e, Ce, te, Ee;
      (ce = r.value.params) != null && ce.limit || (Ce = (_e = r.value) == null ? void 0 : _e.params) == null || delete Ce.limit, ve || (Ee = (te = r.value) == null ? void 0 : te.params) == null || delete Ee.limit;
    }), Gn(() => {
      var ve, ce, _e, Ce, te;
      ((ve = r.value) == null ? void 0 : ve.action) == Ye.SetNewBudget || ((ce = r.value) == null ? void 0 : ce.action) == Ye.IncreaseBudget || ((_e = r.value) == null ? void 0 : _e.action) == Ye.LowerBudget || delete r.value.params, s.value = !isNaN((te = (Ce = r.value) == null ? void 0 : Ce.params) == null ? void 0 : te.limit);
    }), Ue(
      r,
      (ve) => {
        n.value.action = ve;
      },
      { deep: !0 }
    );
    const l = W(() => v.value == ln.Google ? Fr : Bn), u = {
      [ln.Google]: {
        [Fr.Campaign]: {
          SetNewBudget: Ye.SetNewBudget,
          IncreaseBudget: Ye.IncreaseBudget,
          LowerBudget: Ye.LowerBudget,
          OpenProject: Ye.OpenProject,
          SuspendProject: Ye.SuspendProject
        },
        [Fr.AdGroup]: {
          OpenProject: Ye.OpenProject,
          SuspendProject: Ye.SuspendProject
        },
        [Fr.AdTag]: {
          OpenProject: Ye.OpenProject,
          SuspendProject: Ye.SuspendProject
        }
        // [AdLevelTypeGoogle.Ad]: {
        //   OpenProject: ActionType.OpenProject,
        //   SuspendProject: ActionType.SuspendProject,
        // },
      },
      [ln.Facebook]: {
        [Bn.Campaign]: {
          SetNewBudget: Ye.SetNewBudget,
          IncreaseBudget: Ye.IncreaseBudget,
          LowerBudget: Ye.LowerBudget,
          OpenProject: Ye.OpenProject,
          SuspendProject: Ye.SuspendProject
        },
        [Bn.AdGroup]: {
          SetNewBudget: Ye.SetNewBudget,
          IncreaseBudget: Ye.IncreaseBudget,
          LowerBudget: Ye.LowerBudget,
          OpenProject: Ye.OpenProject,
          SuspendProject: Ye.SuspendProject
        },
        [Bn.AdTag]: {
          OpenProject: Ye.OpenProject,
          SuspendProject: Ye.SuspendProject
        },
        [Bn.Ad]: {
          OpenProject: Ye.OpenProject,
          SuspendProject: Ye.SuspendProject
        }
      }
    }, f = W(() => {
      var _e, Ce;
      const ve = (_e = r.value) == null ? void 0 : _e.client, ce = (Ce = r.value) == null ? void 0 : Ce.adLevel;
      if (ve && ce) {
        const te = u[ve];
        if (te) {
          const Ee = te[ce];
          if (Ee)
            return Ee;
        }
      }
      return {};
    }), h = {
      [ln.Google]: {
        [Fr.Campaign]: {
          [Ye.SetNewBudget]: [ot.Value],
          [Ye.IncreaseBudget]: [ot.Percentage, ot.Value],
          [Ye.LowerBudget]: [ot.Percentage, ot.Value],
          [Ye.OpenProject]: [ot.Percentage, ot.Value],
          [Ye.SuspendProject]: [ot.Percentage, ot.Value]
        },
        [Fr.AdGroup]: {
          [Ye.SuspendProject]: [ot.Percentage, ot.Value]
        },
        [Fr.AdTag]: {
          [Ye.SuspendProject]: [ot.Percentage, ot.Value]
        }
        // [AdLevelTypeGoogle.Ad]: {
        //   [ActionType.SuspendProject]: [ValueType.Percentage, ValueType.Value],
        // },
      },
      [ln.Facebook]: {
        [Bn.Campaign]: {
          [Ye.SetNewBudget]: [ot.Value],
          [Ye.IncreaseBudget]: [ot.Percentage, ot.Value],
          [Ye.LowerBudget]: [ot.Percentage, ot.Value],
          [Ye.OpenProject]: [ot.Percentage, ot.Value],
          [Ye.SuspendProject]: [ot.Percentage, ot.Value]
        },
        [Bn.AdGroup]: {
          [Ye.SetNewBudget]: [ot.Value],
          [Ye.IncreaseBudget]: [ot.Percentage, ot.Value],
          [Ye.LowerBudget]: [ot.Percentage, ot.Value],
          [Ye.OpenProject]: [ot.Percentage, ot.Value],
          [Ye.SuspendProject]: [ot.Percentage, ot.Value]
        },
        [Bn.AdTag]: {
          [Ye.SuspendProject]: [ot.Percentage, ot.Value]
        },
        [Bn.Ad]: {
          [Ye.SuspendProject]: [ot.Percentage, ot.Value]
        }
      }
    }, d = W(() => {
      var Ce, te, Ee;
      const ve = (Ce = r.value) == null ? void 0 : Ce.client, ce = (te = r.value) == null ? void 0 : te.adLevel, _e = (Ee = r.value) == null ? void 0 : Ee.action;
      if (ve && ce && _e) {
        const C = h[ve];
        if (C) {
          const A = C[ce];
          if (A) {
            const z = A[_e];
            if (z)
              return z;
          }
        }
      }
      return [ot.Percentage, ot.Value];
    }), m = {
      target: {
        value: ""
      }
    }, v = W(() => r.value.client ? `${r.value.client}` : ""), g = (ve) => {
      r.value.client = Number(ve), delete r.value.target, O(m);
    }, w = W(() => r.value.adLevel ? r.value.adLevel : ""), O = (ve) => {
      r.value.adLevel = Number(ve.target.value), delete r.value.action, delete r.value.target, b(m);
    }, D = W(() => r.value.targetType ? r.value.targetType : ""), b = (ve) => {
      r.value.targetType = Number(ve.target.value);
    }, x = W(() => r.value.action ? r.value.action : ""), k = (ve) => {
      r.value.action = Number(ve.target.value);
    }, E = W(() => {
      var ve;
      return (ve = r.value) != null && ve.params || (r.value.params = {}), r.value.params.budgetType ? r.value.params.budgetType : "";
    }), P = (ve) => r.value.params.budgetType = ve, M = W(() => {
      var ve;
      return (ve = r.value) != null && ve.params || (r.value.params = {}), r.value.params.valueType ? r.value.params.valueType : "";
    }), N = (ve) => {
      r.value.params.valueType = ve;
    }, L = Q(!1);
    ii("addTarget", (ve) => {
      var _e;
      (_e = r.value) != null && _e.target || (r.value.target = []);
      const ce = r.value.target.findIndex(
        (Ce) => Ce === ve.id
      );
      ce === -1 ? r.value.target.push(ve.id) : r.value.target.splice(ce, 1);
    });
    const $ = Q(), q = async () => {
      const ve = await yJ({
        method: "get",
        url: `${bM()}/heybear/api/automation/platform-target?client=${v.value}&adLevel=${w.value}`,
        withCredentials: !0,
        headers: {
          Authorization: wM()
        }
      });
      $.value = ve.data.data, Ae.value = vt($.value);
    }, Y = Q(!1), J = Q([]), me = () => {
      r.value.target = [];
    }, le = async () => {
      L.value = !0, Y.value = !0, await q(), Y.value = !1;
    }, pe = kt("lockScroll");
    Ue(L, (ve) => {
      pe.value = ve, ve || (Oe.value = "");
    });
    const Oe = Q(""), Ve = Q(), Fe = W(() => {
      var ve;
      return (ve = r.value) != null && ve.target || (r.value.target = []), r.value.target.length > 0 && r.value.target.length == Ve.value;
    }), ie = () => {
      var _e;
      const ve = J.value, ce = (Ce) => {
        for (const te of Ce)
          te.children && te.children.length > 0 ? ce(te.children) : r.value.target.push(te.id);
      };
      (_e = r.value) != null && _e.target || (r.value.target = []), r.value.target.length ? r.value.target = [] : (r.value.target = [], ce(ve));
    }, Ae = Q([]);
    function vt(ve) {
      const ce = [];
      function _e(Ce, te) {
        if (Ce.type !== 1 && Ce.type !== 5 && (ce[te - 1] || (ce[te - 1] = {
          label: Ce.type,
          status: !1
        }), ce[te - 1].status = !0), Ce.children && Ce.children.length > 0)
          for (const Ee of Ce.children)
            _e(Ee, te + 1);
      }
      return ve.forEach((Ce) => {
        _e(Ce, 1);
      }), ce.filter((Ce) => Ce !== void 0);
    }
    const At = Q(!1), Te = () => {
      a.value = !1, r.value = {}, En(() => {
        delete n.value.action;
      });
    }, it = W(() => {
      const ve = v.value, ce = r.value.adLevel, _e = E.value;
      if (_e === "")
        return { show: !1 };
      const Ce = ve === ln.Google && ce === Fr.Campaign, te = ve === ln.Facebook && ce === Bn.Campaign, Ee = ve === ln.Facebook && ce === Bn.AdGroup, C = Ce || te || Ee, A = _e === Ga.DailyBudget ? t("日預算") : t("總預算"), z = `${ln[ve]}${l.value[ce]}`, fe = C ? `${t("若{clientAndAdLevel}設定為{paramsBudgetTypeValue}，則不會變更", {
        clientAndAdLevel: z,
        paramsBudgetTypeValue: _e !== _r ? A : ""
      })}` : "";
      return { show: C, msg: fe };
    });
    Hr(() => {
      At.value = !0;
    });
    const Qe = () => {
      const ve = Oe.value.trim().toLowerCase();
      function ce(te) {
        let Ee = [];
        for (const C of te) {
          let A = !1;
          if (Ae.value.forEach((z) => {
            z.label == C.type && z.status == C.enabled && !C.enabled && (A = !0);
          }), !A && ((!C.children || C.children.length === 0) && Ee.push(C), C.children && C.children.length > 0)) {
            const z = ce(C.children);
            z.length > 0 && Ee.push({
              id: C.id,
              name: C.name,
              children: z,
              enabled: C.enabled
            });
          }
        }
        return Ee;
      }
      const _e = [];
      for (const te of $.value)
        if (te.children) {
          const Ee = ce(te.children);
          Ee.length > 0 && _e.push({
            id: te.id,
            name: te.name,
            type: te.type,
            children: Ee
          });
        } else
          _e.push({
            id: te.id,
            name: te.name,
            type: te.type
          });
      function Ce(te, Ee) {
        Ve.value = 0;
        function C(fe) {
          !fe.children || fe.children.length === 0 ? Ve.value++ : fe.children.forEach((we) => C(we));
        }
        function A(fe, we) {
          const ze = { ...fe }, Zt = ze.children;
          if (ze.name.toLowerCase().includes(we)) {
            const yt = (Zt || []).filter(
              (Mt) => Mt.name.toLowerCase().includes(we)
            );
            return yt.length > 0 && (ze.children = yt), ze;
          } else if (Zt) {
            const yt = Zt.map((Mt) => A(Mt, we)).filter(Boolean);
            if (yt.length > 0)
              return ze.children = yt, ze;
          }
          return null;
        }
        const z = te.map((fe) => A(fe, Ee)).filter(Boolean);
        return z.forEach((fe) => C(fe)), z;
      }
      J.value = ve ? Ce(_e, ve) : _e;
    };
    return wG(
      () => Oe,
      () => {
        Qe();
      },
      { deep: !0, debounce: 500 }
    ), Ue(
      () => [Ae, $],
      () => {
        Qe();
      },
      { deep: !0 }
    ), (ve, ce) => y(a) ? (F(), Ze(Gu, {
      key: 1,
      title: y(t)("動作"),
      icon: "PhNavigationArrow",
      id: "action"
    }, {
      default: Pe(() => {
        var _e, Ce;
        return [
          j("div", tQ, [
            j("div", nQ, [
              j("div", {
                class: "cursor-pointer text-dark-4 absolute bottom-4 right-3 hover:text-dark-3 transition-all p3-r",
                onClick: Te
              }, [
                Me(y(pL), {
                  size: "18",
                  weight: "bold"
                })
              ]),
              j("label", rQ, [
                j("div", iQ, [
                  j("span", aQ, ke(y(t)("平台")), 1),
                  j("input", {
                    type: "text",
                    class: "opacity-0 absolute left-0 top-0 pointer-events-none",
                    required: "",
                    value: y(v)
                  }, null, 8, sQ)
                ]),
                j("div", oQ, [
                  (F(!0), G(Ke, null, Rt(y(ln), (te, Ee, C) => (F(), G("div", {
                    class: "flex",
                    key: Ee
                  }, [
                    Number.isInteger(te) ? De("", !0) : (F(), G(Ke, { key: 0 }, [
                      j("span", {
                        class: et(["cursor-pointer hover:drop-shadow-md", [
                          { "!text-dark-5 p3-r": y(v) == _r },
                          y(v) === Ee ? "text-true-blue-3 drop-shadow-sm p3-b" : "text-dark-5 "
                        ]]),
                        onClick: (A) => g(Ee)
                      }, ke(te), 11, lQ),
                      C < Object.keys(y(ln)).filter((A) => isNaN(Number(A))).length - 1 ? (F(), G("div", uQ, " | ")) : De("", !0)
                    ], 64))
                  ]))), 128))
                ])
              ]),
              j("div", cQ, [
                j("label", {
                  class: et(["flex justify-start items-center gap-4", { "pointer-events-none": y(v) == _r }])
                }, [
                  j("span", fQ, ke(y(t)("層級")), 1),
                  rr(j("select", {
                    class: et(["p3-b text-true-blue-3 min-w-[5rem] w-20 flex cursor-pointer items-center justify-center gap-4 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50", [y(w) != _r ? "!w-fit" : "!text-dark-5 !p3-r"]]),
                    "onUpdate:modelValue": ce[1] || (ce[1] = (te) => un(w) ? w.value = te : null),
                    onChange: O,
                    required: ""
                  }, [
                    j("option", dQ, ke(y(t)("請選擇")), 1),
                    (F(!0), G(Ke, null, Rt(y(l), (te, Ee) => (F(), G(Ke, { key: Ee }, [
                      !Number.isInteger(te) && y(v) != _r ? (F(), G("option", {
                        key: 0,
                        value: Ee
                      }, ke(y(t)(`${y(ln)[y(v)]}${te}`)), 9, hQ)) : De("", !0)
                    ], 64))), 128))
                  ], 34), [
                    [Vs, y(w)]
                  ])
                ], 2),
                j("div", pQ, [
                  j("label", {
                    class: et(["flex justify-start items-center gap-4", { "pointer-events-none": y(w) == _r }])
                  }, [
                    j("span", mQ, ke(y(t)("項目")), 1),
                    rr(j("select", {
                      class: et(["p3-b text-true-blue-3 min-w-[5rem] w-20 flex cursor-pointer items-center justify-center gap-4 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50", [
                        y(D) != _r ? "!w-fit" : "!text-dark-5 !p3-r"
                      ]]),
                      "onUpdate:modelValue": ce[2] || (ce[2] = (te) => un(D) ? D.value = te : null),
                      onChange: b,
                      required: ""
                    }, [
                      j("option", vQ, ke(y(t)("請選擇")), 1),
                      (F(!0), G(Ke, null, Rt(y(Da), (te, Ee) => (F(), G(Ke, { key: Ee }, [
                        Number.isInteger(te) ? De("", !0) : (F(), G("option", {
                          key: 0,
                          value: Ee
                        }, ke(y(t)(te)), 9, gQ))
                      ], 64))), 128))
                    ], 34), [
                      [Vs, y(D)]
                    ])
                  ], 2),
                  y(D) === y(Da).ForID ? (F(), G("div", _Q, [
                    y(D) === y(Da).ForID ? (F(), G("span", {
                      key: 0,
                      class: et(["p3-b w-fit flex cursor-pointer items-center justify-center z-[2]", [
                        y(r).target && y(r).target.length ? " text-true-blue-3" : "text-red-2 hover:text-red-1"
                      ]]),
                      onClick: le
                    }, ke(y(r).target && y(r).target.length ? `${y(t)("已選{count}個項目", {
                      count: y(r).target.length
                    })}` : y(t)("未選擇")), 3)) : De("", !0),
                    j("input", {
                      type: "text",
                      class: "opacity-0 absolute left-0 top-0",
                      required: "",
                      value: (_e = y(r)) != null && _e.target && (Ce = y(r)) != null && Ce.target.length ? "123" : ""
                    }, null, 8, yQ)
                  ])) : De("", !0)
                ])
              ])
            ]),
            y(At) ? (F(), Ze(_0, {
              key: 0,
              to: "#editor-container-outer"
            }, [
              y(L) ? (F(), G("div", bQ, [
                j("div", wQ, [
                  j("div", OQ, [
                    j("span", EQ, ke(y(t)("請選擇目標")), 1),
                    Me(y(dh), {
                      class: "text-dark-3 cursor-pointer hover:text-dark-2 absolute top-4 right-4",
                      weight: "bold",
                      onClick: ce[3] || (ce[3] = (te) => L.value = !1)
                    })
                  ]),
                  Me(cl, {
                    modelValue: y(Oe),
                    "onUpdate:modelValue": ce[4] || (ce[4] = (te) => un(Oe) ? Oe.value = te : null),
                    placeholder: y(t)("搜尋"),
                    class: "w-full mr-auto mb-4"
                  }, null, 8, ["modelValue", "placeholder"]),
                  !y(Y) && y(Ae).length ? (F(), G("div", DQ, [
                    j("span", SQ, ke(y(t)("篩選")), 1),
                    (F(!0), G(Ke, null, Rt(y(Ae), (te) => (F(), G("label", {
                      class: "p3-r flex cursor-pointer items-center gap-1 rounded-md bg-light-3 px-2 py-0.5 text-dark-4 hover:shadow-01",
                      key: te.label,
                      for: te.label
                    }, [
                      rr(j("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": (Ee) => te.status = Ee,
                        id: te.label,
                        class: "hidden",
                        onChange: me
                      }, null, 40, TQ), [
                        [w0, te.status]
                      ]),
                      rr(j("div", kQ, null, 512), [
                        [O0, !te.status]
                      ]),
                      us(" " + ke(y(t)(
                        `${y(ln)[y(v)]}${te.status ? "On" : "Off"}${te.label}`
                      )), 1)
                    ], 8, xQ))), 128))
                  ])) : De("", !0),
                  y(Y) ? De("", !0) : (F(), G("div", AQ, [
                    j("div", MQ, [
                      j("label", {
                        class: "cursor-pointer",
                        onClick: ie
                      }, ke(y(Fe) ? y(t)("取消全選") : y(t)("全選")), 1)
                    ])
                  ])),
                  y(Y) ? (F(), G("div", $Q)) : (F(), G(Ke, { key: 3 }, [
                    y(J).length ? (F(), Ze(y(hm), {
                      key: 1,
                      ref: "scroller",
                      items: y(J),
                      "min-item-size": 28,
                      class: "scroller"
                    }, {
                      default: Pe(({ item: te, index: Ee, active: C }) => [
                        Me(y(YO), {
                          item: te,
                          active: C,
                          "size-dependencies": [te.children],
                          "data-index": Ee,
                          "data-active": C
                        }, {
                          default: Pe(() => {
                            var A;
                            return [
                              Me(PO, {
                                target: te,
                                targets: ((A = y(r)) == null ? void 0 : A.target) ?? []
                              }, null, 8, ["target", "targets"])
                            ];
                          }),
                          _: 2
                        }, 1032, ["item", "active", "size-dependencies", "data-index", "data-active"])
                      ]),
                      _: 1
                    }, 8, ["items"])) : (F(), G("div", PQ, [
                      j("div", CQ, [
                        Me(y(jN), {
                          size: 48,
                          class: "text-dark-4"
                        }),
                        j("p", IQ, ke(y(t)("No Data")), 1)
                      ])
                    ]))
                  ], 64)),
                  y(Y) ? De("", !0) : (F(), G("div", NQ, [
                    j("div", {
                      class: "p3-r flex cursor-pointer items-center gap-1 rounded bg-true-blue-2 border border-transparent px-4 py-1.5 text-light-5 hover:bg-true-blue-3 transition-all",
                      onClick: ce[5] || (ce[5] = (te) => L.value = !1)
                    }, ke(y(t)("確定")), 1)
                  ]))
                ])
              ])) : De("", !0)
            ])) : De("", !0),
            j("div", LQ, [
              j("label", {
                class: et(["flex justify-start items-center gap-4", { "pointer-events-none": y(D) == _r }])
              }, [
                j("span", RQ, ke(y(t)("執行")), 1),
                rr(j("select", {
                  class: et(["p3-b text-true-blue-3 min-w-[5rem] w-20 flex cursor-pointer items-center justify-center gap-4 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50", [
                    y(x) != _r ? "!w-fit" : "!text-dark-5 !p3-r"
                  ]]),
                  "onUpdate:modelValue": ce[6] || (ce[6] = (te) => un(x) ? x.value = te : null),
                  onChange: k,
                  required: ""
                }, [
                  j("option", FQ, ke(y(t)("請選擇")), 1),
                  (F(!0), G(Ke, null, Rt(y(f), (te, Ee) => (F(), G("option", {
                    key: Ee,
                    value: te
                  }, ke(y(t)(Ee)), 9, YQ))), 128))
                ], 34), [
                  [Vs, y(x)]
                ])
              ], 2),
              y(r).action == y(Ye).SetNewBudget || y(r).action == y(Ye).IncreaseBudget || y(r).action == y(Ye).LowerBudget ? (F(), G(Ke, { key: 0 }, [
                j("label", WQ, [
                  j("span", UQ, ke(y(t)("類型")), 1),
                  j("div", VQ, [
                    (F(!0), G(Ke, null, Rt(y(Ga), (te, Ee, C) => (F(), G("div", {
                      class: "flex",
                      key: Ee
                    }, [
                      Number.isInteger(te) ? De("", !0) : (F(), G(Ke, { key: 0 }, [
                        j("span", {
                          class: et(["cursor-pointer hover:drop-shadow-md", [
                            { "!text-dark-5 p3-r": y(E) == _r },
                            y(E) == y(Ga)[Ee] ? "text-true-blue-3 drop-shadow-sm p3-b" : "text-dark-5 "
                          ]]),
                          onClick: (A) => P(y(Ga)[Ee])
                        }, ke(y(t)(te)), 11, BQ),
                        C < Object.keys(y(Ga)).filter(
                          (A) => isNaN(Number(A))
                        ).length - 1 ? (F(), G("div", HQ, " | ")) : De("", !0)
                      ], 64))
                    ]))), 128))
                  ]),
                  y(it).show ? (F(), G("span", zQ, ke(y(it).msg), 1)) : De("", !0)
                ]),
                j("div", jQ, [
                  j("div", GQ, [
                    j("span", qQ, ke(y(t)("調整")), 1),
                    j("div", KQ, [
                      j("div", ZQ, [
                        j("div", XQ, [
                          (F(!0), G(Ke, null, Rt(y(d), (te, Ee) => (F(), G("div", {
                            class: "flex",
                            key: te
                          }, [
                            Number.isInteger(te) ? De("", !0) : (F(), G(Ke, { key: 0 }, [
                              j("span", {
                                class: et(["cursor-pointer hover:drop-shadow-md", [
                                  {
                                    "!text-dark-5 p3-r": y(M) == _r
                                  },
                                  y(M) == te ? "text-true-blue-3 drop-shadow-sm p3-b" : "text-dark-5 "
                                ]]),
                                onClick: (C) => N(te)
                              }, ke(y(t)(`action${te}`)), 11, JQ),
                              Ee < y(d).length - 1 ? (F(), G("div", QQ, " | ")) : De("", !0)
                            ], 64))
                          ]))), 128))
                        ]),
                        y(M) != _r ? (F(), G("label", eee, [
                          Me(cl, {
                            modelValue: y(r).params.value,
                            "onUpdate:modelValue": ce[7] || (ce[7] = (te) => y(r).params.value = te),
                            inputClass: "text-true-blue-3",
                            type: "number",
                            required: !0
                          }, null, 8, ["modelValue"]),
                          j("span", tee, ke(y(r).params.valueType === y(ot).Percentage ? "%" : y(t)("元")), 1)
                        ])) : De("", !0)
                      ])
                    ])
                  ]),
                  y(r).action == y(Ye).IncreaseBudget || y(r).action == y(Ye).LowerBudget ? (F(), G("div", nee, [
                    j("div", ree, [
                      j("span", iee, ke(y(r).action == y(Ye).IncreaseBudget ? y(t)("預算上限") : y(t)("預算下限")), 1),
                      j("div", aee, [
                        y(s) ? De("", !0) : (F(), G("div", {
                          key: 0,
                          class: et(["p3-b text-true-blue-3 w-fit flex cursor-pointer items-center justify-center gap-4 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50", { "!text-dark-5 !p3-r": !y(s) }]),
                          onClick: ce[8] || (ce[8] = (te) => s.value = !0)
                        }, ke(y(t)("無")), 3)),
                        y(s) ? (F(), G("div", see, [
                          Me(cl, {
                            modelValue: y(r).params.limit,
                            "onUpdate:modelValue": ce[9] || (ce[9] = (te) => y(r).params.limit = te),
                            inputClass: "text-true-blue-3",
                            type: "number",
                            required: !0
                          }, null, 8, ["modelValue"])
                        ])) : De("", !0),
                        y(s) ? (F(), Ze(y(dh), {
                          key: 2,
                          onClick: ce[10] || (ce[10] = (te) => s.value = !1),
                          weight: "bold",
                          class: "text-dark-4 hover:text-dark-3 p3-b cursor-pointer"
                        })) : De("", !0)
                      ])
                    ])
                  ])) : De("", !0)
                ])
              ], 64)) : De("", !0)
            ])
          ])
        ];
      }),
      _: 1
    }, 8, ["title"])) : (F(), G("div", {
      key: 0,
      class: "p3-b cursor-pointer rounded shadow-01 hover:shadow-02 transition-all bg-light-5 py-1 px-2 text-dark-4 flex items-center justify-center",
      onClick: ce[0] || (ce[0] = (_e) => a.value = !0)
    }, " + " + ke(y(t)("加入動作")), 1));
  }
}), lee = { class: "flex flex-1 items-center justify-start gap-4" }, uee = { class: "p3-r text-dark-4" }, cee = {
  value: "",
  disabled: ""
}, fee = ["value"], dee = /* @__PURE__ */ Re({
  __name: "Notification",
  setup(e) {
    const { t } = fi.global, n = kt("eventData"), r = Q(
      n.value.notify ?? {
        email: fl.All
      }
    );
    return Ue(
      r,
      (a) => {
        n.value.notify = a;
      },
      { deep: !0, immediate: !0 }
    ), (a, s) => (F(), G("div", null, [
      j("label", lee, [
        j("span", uee, ke(y(t)("以電子郵件寄出結果")), 1),
        rr(j("select", {
          class: "p3-b text-true-blue-3 flex cursor-pointer items-center justify-center gap-4 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
          "onUpdate:modelValue": s[0] || (s[0] = (l) => y(r).email = l)
        }, [
          j("option", cee, ke(y(t)("請選擇")), 1),
          (F(!0), G(Ke, null, Rt(y(fl), (l, u) => (F(), G(Ke, { key: u }, [
            Number.isInteger(l) ? De("", !0) : (F(), G("option", {
              key: 0,
              value: Number(u)
            }, ke(y(t)(`mail${l}`)), 9, fee))
          ], 64))), 128))
        ], 512), [
          [Vs, y(r).email]
        ])
      ])
    ]));
  }
});
function hee(e) {
  fi.global.locale.value = e;
}
const pee = ["onSubmit"], mee = { class: "space-y-1" }, vee = {
  key: 0,
  class: "text-red-1"
}, gee = 100, _ee = /* @__PURE__ */ Re({
  __name: "TCEventEditorApp",
  props: {
    data: {}
  },
  emits: ["update:data"],
  setup(e, { expose: t, emit: n }) {
    const r = e, { t: a } = fi.global, s = W(() => JSON.parse(r.data || "{}")), l = (O) => {
      const D = Object.fromEntries(
        Object.entries(O).filter(([b, x]) => x !== null)
      );
      return JSON.stringify(D, null, 4);
    }, u = Q([]), f = (O) => {
      O.preventDefault(), n("update:data", l(s.value));
    }, h = () => {
      var D;
      const O = document.getElementById("editor-container");
      if (O) {
        for (const b of O.querySelectorAll("[required]"))
          if (b.getAttribute("required") !== null && !b.reportValidity())
            throw new Error("未填寫完畢");
        (D = d.value) == null || D.click();
      }
    };
    ii("eventData", s), ii("checkDataValid", u);
    const d = Q(), m = Q(!1);
    ii("lockScroll", m);
    const v = async () => "zh_TW", g = async () => "Asia/Taipei";
    return (async () => {
      const O = await v();
      hee(O);
      const D = await g();
      fG(D);
    })(), t({
      saveData: h
    }), (O, D) => r.data ? (F(), G("div", {
      key: 0,
      class: et([y(m) ? "overflow-y-hidden" : "overflow-y-auto "]),
      id: "editor-container-outer"
    }, [
      j("form", {
        class: "flex flex-col gap-5 relative p-5 h-fit text-dark-1 min-h-full w-full",
        id: "editor-container",
        onSubmit: xa(f, ["prevent"])
      }, [
        Me(Gu, {
          title: y(a)("規則名稱"),
          icon: "PhNotepad",
          id: "name"
        }, {
          default: Pe(() => [
            j("div", mee, [
              Me(cl, {
                modelValue: y(s).title,
                "onUpdate:modelValue": D[0] || (D[0] = (b) => y(s).title = b),
                inputClass: "text-true-blue-3",
                maxLength: gee,
                placeholder: y(a)("ex: 廣告開啟規則"),
                required: !0
              }, null, 8, ["modelValue", "placeholder"])
            ])
          ]),
          _: 1
        }, 8, ["title"]),
        Me(Gu, {
          title: y(a)("執行時間"),
          icon: "PhCalendarCheck",
          id: "time"
        }, {
          default: Pe(() => [
            Me(eX, {
              frequency: y(s).frequency,
              "onUpdate:frequency": D[1] || (D[1] = (b) => y(s).frequency = b),
              interval: y(s).interval,
              "onUpdate:interval": D[2] || (D[2] = (b) => y(s).interval = b)
            }, null, 8, ["frequency", "interval"])
          ]),
          _: 1
        }, 8, ["title"]),
        Me(Gu, {
          title: y(a)("通知"),
          icon: "PhBellRinging",
          id: "notification"
        }, {
          default: Pe(() => [
            Me(dee)
          ]),
          _: 1
        }, 8, ["title"]),
        Me(oee),
        y(u).length ? (F(), G("span", vee, ke(y(a)("資料未填寫完整")), 1)) : De("", !0),
        j("button", {
          ref_key: "submitBtn",
          ref: d,
          class: "p-2 px-3 rounded bg-slate-100 hover:bg-sky-500 hover:text-white hidden"
        }, ke(y(a)("保存")), 513)
      ], 40, pee)
    ], 2)) : De("", !0);
  }
});
const yee = /* @__PURE__ */ uo(_ee, [["__scopeId", "data-v-9005847f"]]);
function Cee(e) {
  if (!e)
    return "";
  const { t } = fi.global;
  let n, r;
  return e.client === ln.Google ? r = Fr : r = Bn, e.targetType === Da.ForAll && (n = t("所有的") + t(`${ln[e.client]}${r[e.adLevel]}`)), e.targetType === Da.ForActive && (n = t("已開啟的") + t(`${ln[e.client]}${r[e.adLevel]}`)), e.targetType === Da.ForID && (n = `${e.target.length}${t("個")}` + t(`${ln[e.client]}${r[e.adLevel]}`)), n;
}
function Iee(e) {
  const { t } = fi.global;
  return e != null && e.email ? t(`mail${fl[e.email]}`) : "";
}
const bee = (e) => {
  e.component("TCEventEditorApp", yee);
}, Nee = {
  install: bee
};
export {
  dh as F,
  G1 as G,
  yee as T,
  jN as a,
  pL as b,
  Eee as c,
  Cee as d,
  Dee as e,
  Iee as f,
  JP as g,
  hee as h,
  Nee as i,
  Oee as s
};
