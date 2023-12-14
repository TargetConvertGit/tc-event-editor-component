import { defineComponent as Re, openBlock as R, createElementBlock as G, createElementVNode as q, toDisplayString as Se, h as wr, getCurrentInstance as xr, effectScope as h0, inject as yt, onMounted as zr, onUnmounted as Pa, shallowRef as Wh, ref as Q, computed as W, onBeforeMount as iM, watch as Ue, Fragment as qe, isRef as an, createVNode as Te, Text as aM, unref as y, getCurrentScope as Uh, onScopeDispose as Vh, shallowReadonly as Ps, mergeProps as Zt, cloneVNode as sM, toRefs as oo, reactive as xl, mergeDefaults as p0, watchEffect as Gn, normalizeStyle as Fi, withCtx as $e, renderSlot as nt, markRaw as zd, createBlock as Ke, readonly as oM, nextTick as En, onBeforeUnmount as m0, withKeys as jd, withModifiers as xa, createCommentVNode as we, resolveDynamicComponent as Zs, normalizeProps as ts, guardReactiveProps as Mc, provide as Wr, customRef as v0, onBeforeUpdate as lM, onUpdated as uM, toHandlerKey as cM, camelize as g0, Teleport as _0, renderList as Rt, normalizeClass as Qe, withDirectives as rr, toRef as wd, resolveComponent as Ii, Transition as lo, createTextVNode as us, resolveDirective as y0, toHandlers as b0, vModelCheckbox as w0, vModelSelect as Vs, defineAsyncComponent as fM, vShow as O0, pushScopeId as dM, popScopeId as hM, withScopeId as pM, shallowReactive as mM } from "vue";
function hee(e) {
}
class vM {
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
var fl = /* @__PURE__ */ ((e) => (e[e.None = -1] = "None", e[e.All = 3] = "All", e[e.Error = 4] = "Error", e))(fl || {}), E0 = /* @__PURE__ */ ((e) => (e[e.Off = 0] = "Off", e[e.On = 1] = "On", e))(E0 || {}), cn = /* @__PURE__ */ ((e) => (e[e.Google = 1] = "Google", e[e.Facebook = 2] = "Facebook", e))(cn || {}), Fr = /* @__PURE__ */ ((e) => (e[e.Campaign = 2] = "Campaign", e[e.AdGroup = 3] = "AdGroup", e[e.AdTag = 5] = "AdTag", e))(Fr || {}), Bn = /* @__PURE__ */ ((e) => (e[e.Campaign = 2] = "Campaign", e[e.AdGroup = 3] = "AdGroup", e[e.Ad = 4] = "Ad", e[e.AdTag = 5] = "AdTag", e))(Bn || {}), Da = /* @__PURE__ */ ((e) => (e[e.ForAll = 1] = "ForAll", e[e.ForID = 2] = "ForID", e[e.ForActive = 3] = "ForActive", e))(Da || {}), D0 = /* @__PURE__ */ ((e) => (e[e.Account = 1] = "Account", e[e.Campaign = 2] = "Campaign", e[e.AdGroup = 3] = "AdGroup", e))(D0 || {}), S0 = /* @__PURE__ */ ((e) => (e[e.Account = 1] = "Account", e[e.Campaign = 2] = "Campaign", e[e.AdGroup = 3] = "AdGroup", e))(S0 || {}), St = /* @__PURE__ */ ((e) => (e[e.Never = -1] = "Never", e[e.Hour = 1] = "Hour", e[e.Day = 2] = "Day", e))(St || {}), yr = /* @__PURE__ */ ((e) => (e[e.Sunday = 0] = "Sunday", e[e.Monday = 1] = "Monday", e[e.Tuesday = 2] = "Tuesday", e[e.Wednesday = 3] = "Wednesday", e[e.Thursday = 4] = "Thursday", e[e.Friday = 5] = "Friday", e[e.Saturday = 6] = "Saturday", e[e.Weekday = -1] = "Weekday", e[e.Weekend = -2] = "Weekend", e))(yr || {}), Pi = /* @__PURE__ */ ((e) => (e[e.First = 1] = "First", e[e.Second = 2] = "Second", e[e.Third = 3] = "Third", e[e.Fourth = 4] = "Fourth", e[e.Fifth = 5] = "Fifth", e[e.Last = -1] = "Last", e))(Pi || {}), Vn = /* @__PURE__ */ ((e) => (e[e.January = 1] = "January", e[e.February = 2] = "February", e[e.March = 3] = "March", e[e.April = 4] = "April", e[e.May = 5] = "May", e[e.June = 6] = "June", e[e.July = 7] = "July", e[e.August = 8] = "August", e[e.September = 9] = "September", e[e.October = 10] = "October", e[e.November = 11] = "November", e[e.December = 12] = "December", e))(Vn || {}), Ye = /* @__PURE__ */ ((e) => (e[e.SetNewBudget = 1] = "SetNewBudget", e[e.IncreaseBudget = 2] = "IncreaseBudget", e[e.LowerBudget = 3] = "LowerBudget", e[e.OpenProject = 4] = "OpenProject", e[e.SuspendProject = 5] = "SuspendProject", e[e.None = -1] = "None", e))(Ye || {}), Ga = /* @__PURE__ */ ((e) => (e.DailyBudget = "dailyBudget", e.TotalBudget = "totalBudget", e))(Ga || {}), at = /* @__PURE__ */ ((e) => (e.Value = "value", e.Percentage = "percentage", e))(at || {}), x0 = /* @__PURE__ */ ((e) => (e.BudgetRemaining = "accountBudget", e.BudgetCap = "budgetCap", e.Clicks = "clicks", e.Impressions = "impressions", e.Cpc = "cpc", e.Spend = "cost", e.Conversions = "conversions", e.ConversionSpend = "conversionsValue", e.ReturnOnADSpending = "roas", e))(x0 || {}), T0 = /* @__PURE__ */ ((e) => (e[e.Today = 1] = "Today", e[e.Yesterday = 2] = "Yesterday", e[e.Last3Days = 3] = "Last3Days", e[e.Last7Days = 4] = "Last7Days", e[e.ThisMonth = 5] = "ThisMonth", e[e.SpecifiedTime = -1] = "SpecifiedTime", e))(T0 || {}), k0 = /* @__PURE__ */ ((e) => (e.MoreThan = ">", e.GreaterOrEqualTo = ">=", e.Equal = "==", e.LessThan = "<", e.LessThanOrEqualTo = "<=", e))(k0 || {});
const pee = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ActionType: Ye,
  AdLevelTypeFacebook: Bn,
  AdLevelTypeGoogle: Fr,
  BudgetType: Ga,
  ClientType: cn,
  ConditionAdLevelTypeFacebook: S0,
  ConditionAdLevelTypeGoogle: D0,
  ConditionType: x0,
  DateRangeType: T0,
  EmailNotify: fl,
  EventActionTargetType: Da,
  EventHelper: vM,
  FrequencyType: St,
  MonthType: Vn,
  OperationType: k0,
  ToggleNotify: E0,
  ValueType: at,
  WeekOrdinalWordsType: Pi,
  WeekdaysType: yr
}, Symbol.toStringTag, { value: "Module" })), gM = { class: "flex" }, _M = ["checked", "id"], yM = ["for"], bM = /* @__PURE__ */ Re({
  __name: "CheckBox",
  props: {
    label: {},
    checked: { type: Boolean },
    fieldId: {}
  },
  emits: ["update:checked"],
  setup(e, { emit: t }) {
    return (n, r) => (R(), G("div", gM, [
      q("input", {
        onInput: r[0] || (r[0] = (a) => n.$emit("update:checked", a.target.checked)),
        type: "checkbox",
        checked: n.checked,
        id: n.fieldId,
        class: "hidden"
      }, null, 40, _M),
      q("label", {
        for: n.fieldId,
        class: "p3-b text-dark-3 cursor-pointer rounded hover:bg-light-4 shadow-01 px-1 py-0.5 flex justify-center items-center min-w-[1.75rem] min-h-[1.75rem]"
      }, Se(n.label), 9, yM)
    ]));
  }
});
const uo = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, a] of t)
    n[r] = a;
  return n;
}, Wg = /* @__PURE__ */ uo(bM, [["__scopeId", "data-v-4f6ab498"]]);
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
const wM = /\{([0-9a-zA-Z]+)\}/g;
function Bh(e, ...t) {
  return t.length === 1 && bt(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(wM, (n, r) => t.hasOwnProperty(r) ? t[r] : "");
}
const fi = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), OM = (e, t, n) => EM({ l: e, k: t, s: n }), EM = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), fn = (e) => typeof e == "number" && isFinite(e), DM = (e) => M0(e) === "[object Date]", Ta = (e) => M0(e) === "[object RegExp]", $c = (e) => Ge(e) && Object.keys(e).length === 0, _n = Object.assign;
let Ug;
const Ci = () => Ug || (Ug = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Vg(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const SM = Object.prototype.hasOwnProperty;
function Hh(e, t) {
  return SM.call(e, t);
}
const Ft = Array.isArray, qt = (e) => typeof e == "function", _e = (e) => typeof e == "string", ct = (e) => typeof e == "boolean", bt = (e) => e !== null && typeof e == "object", A0 = Object.prototype.toString, M0 = (e) => A0.call(e), Ge = (e) => {
  if (!bt(e))
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t.constructor === Object;
}, xM = (e) => e == null ? "" : Ft(e) || Ge(e) && e.toString === A0 ? JSON.stringify(e, null, 2) : String(e);
function TM(e, t = "") {
  return e.reduce((n, r, a) => a === 0 ? n + r : n + t + r, "");
}
const Bg = 2;
function kM(e, t = 0, n = e.length) {
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
function pn(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const Hg = {};
function AM(e) {
  Hg[e] || (Hg[e] = !0, pn(e));
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
function MM(e, t, n) {
  return { line: e, column: t, offset: n };
}
function Gd(e, t, n) {
  const r = { start: e, end: t };
  return n != null && (r.source = n), r;
}
const $M = /\{([0-9a-zA-Z]+)\}/g;
function PM(e, ...t) {
  return t.length === 1 && CM(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace($M, (n, r) => t.hasOwnProperty(r) ? t[r] : "");
}
const $0 = Object.assign, zg = (e) => typeof e == "string", CM = (e) => e !== null && typeof e == "object";
function P0(e, t = "") {
  return e.reduce((n, r, a) => a === 0 ? n + r : n + t + r, "");
}
const ze = {
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
}, IM = {
  // tokenizer error messages
  [ze.EXPECTED_TOKEN]: "Expected token: '{0}'",
  [ze.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
  [ze.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
  [ze.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
  [ze.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
  [ze.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
  [ze.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
  [ze.EMPTY_PLACEHOLDER]: "Empty placeholder",
  [ze.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
  [ze.INVALID_LINKED_FORMAT]: "Invalid linked format",
  // parser error messages
  [ze.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
  [ze.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
  [ze.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
  [ze.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
  // generator error messages
  [ze.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
  // minimizer error messages
  [ze.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
};
function co(e, t, n = {}) {
  const { domain: r, messages: a, args: s } = n, l = PM((a || IM)[e] || "", ...s || []), u = new SyntaxError(String(l));
  return u.code = e, t && (u.location = t), u.domain = r, u;
}
function NM(e) {
  throw e;
}
const LM = /<\/?[\w\s="/.':;#-\/]+>/, RM = (e) => LM.test(e), ki = " ", FM = "\r", Cn = `
`, YM = String.fromCharCode(8232), WM = String.fromCharCode(8233);
function UM(e) {
  const t = e;
  let n = 0, r = 1, a = 1, s = 0;
  const l = (N) => t[N] === FM && t[N + 1] === Cn, u = (N) => t[N] === Cn, f = (N) => t[N] === WM, h = (N) => t[N] === YM, d = (N) => l(N) || u(N) || f(N) || h(N), m = () => n, v = () => r, g = () => a, b = () => s, O = (N) => l(N) || f(N) || h(N) ? Cn : t[N], S = () => O(n), w = () => O(n + s);
  function x() {
    return s = 0, d(n) && (r++, a = 0), l(n) && n++, n++, a++, t[n];
  }
  function A() {
    return l(n + s) && s++, s++, t[n + s];
  }
  function E() {
    n = 0, r = 1, a = 1, s = 0;
  }
  function C(N = 0) {
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
    peekOffset: b,
    charAt: O,
    currentChar: S,
    currentPeek: w,
    next: x,
    peek: A,
    reset: E,
    resetPeek: C,
    skipToPeek: M
  };
}
const ha = void 0, VM = ".", jg = "'", BM = "tokenizer";
function HM(e, t = {}) {
  const n = t.location !== !1, r = UM(e), a = () => r.index(), s = () => MM(r.line(), r.column(), r.index()), l = s(), u = a(), f = {
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
  function m($, k, z, ...fe) {
    const ge = h();
    if (k.column += z, k.offset += z, d) {
      const je = n ? Gd(ge.startLoc, k) : null, Yt = co($, je, {
        domain: BM,
        args: fe
      });
      d(Yt);
    }
  }
  function v($, k, z) {
    $.endLoc = s(), $.currentType = k;
    const fe = { type: k };
    return n && (fe.loc = Gd($.startLoc, $.endLoc)), z != null && (fe.value = z), fe;
  }
  const g = ($) => v(
    $,
    14
    /* TokenTypes.EOF */
  );
  function b($, k) {
    return $.currentChar() === k ? ($.next(), k) : (m(ze.EXPECTED_TOKEN, s(), 0, k), "");
  }
  function O($) {
    let k = "";
    for (; $.currentPeek() === ki || $.currentPeek() === Cn; )
      k += $.currentPeek(), $.peek();
    return k;
  }
  function S($) {
    const k = O($);
    return $.skipToPeek(), k;
  }
  function w($) {
    if ($ === ha)
      return !1;
    const k = $.charCodeAt(0);
    return k >= 97 && k <= 122 || // a-z
    k >= 65 && k <= 90 || // A-Z
    k === 95;
  }
  function x($) {
    if ($ === ha)
      return !1;
    const k = $.charCodeAt(0);
    return k >= 48 && k <= 57;
  }
  function A($, k) {
    const { currentType: z } = k;
    if (z !== 2)
      return !1;
    O($);
    const fe = w($.currentPeek());
    return $.resetPeek(), fe;
  }
  function E($, k) {
    const { currentType: z } = k;
    if (z !== 2)
      return !1;
    O($);
    const fe = $.currentPeek() === "-" ? $.peek() : $.currentPeek(), ge = x(fe);
    return $.resetPeek(), ge;
  }
  function C($, k) {
    const { currentType: z } = k;
    if (z !== 2)
      return !1;
    O($);
    const fe = $.currentPeek() === jg;
    return $.resetPeek(), fe;
  }
  function M($, k) {
    const { currentType: z } = k;
    if (z !== 8)
      return !1;
    O($);
    const fe = $.currentPeek() === ".";
    return $.resetPeek(), fe;
  }
  function N($, k) {
    const { currentType: z } = k;
    if (z !== 9)
      return !1;
    O($);
    const fe = w($.currentPeek());
    return $.resetPeek(), fe;
  }
  function F($, k) {
    const { currentType: z } = k;
    if (!(z === 8 || z === 12))
      return !1;
    O($);
    const fe = $.currentPeek() === ":";
    return $.resetPeek(), fe;
  }
  function H($, k) {
    const { currentType: z } = k;
    if (z !== 10)
      return !1;
    const fe = () => {
      const je = $.currentPeek();
      return je === "{" ? w($.peek()) : je === "@" || je === "%" || je === "|" || je === ":" || je === "." || je === ki || !je ? !1 : je === Cn ? ($.peek(), fe()) : w(je);
    }, ge = fe();
    return $.resetPeek(), ge;
  }
  function P($) {
    O($);
    const k = $.currentPeek() === "|";
    return $.resetPeek(), k;
  }
  function j($) {
    const k = O($), z = $.currentPeek() === "%" && $.peek() === "{";
    return $.resetPeek(), {
      isModulo: z,
      hasSpace: k.length > 0
    };
  }
  function Y($, k = !0) {
    const z = (ge = !1, je = "", Yt = !1) => {
      const Et = $.currentPeek();
      return Et === "{" ? je === "%" ? !1 : ge : Et === "@" || !Et ? je === "%" ? !0 : ge : Et === "%" ? ($.peek(), z(ge, "%", !0)) : Et === "|" ? je === "%" || Yt ? !0 : !(je === ki || je === Cn) : Et === ki ? ($.peek(), z(!0, ki, Yt)) : Et === Cn ? ($.peek(), z(!0, Cn, Yt)) : !0;
    }, fe = z();
    return k && $.resetPeek(), fe;
  }
  function J($, k) {
    const z = $.currentChar();
    return z === ha ? ha : k(z) ? ($.next(), z) : null;
  }
  function he($) {
    return J($, (z) => {
      const fe = z.charCodeAt(0);
      return fe >= 97 && fe <= 122 || // a-z
      fe >= 65 && fe <= 90 || // A-Z
      fe >= 48 && fe <= 57 || // 0-9
      fe === 95 || // _
      fe === 36;
    });
  }
  function ue($) {
    return J($, (z) => {
      const fe = z.charCodeAt(0);
      return fe >= 48 && fe <= 57;
    });
  }
  function ve($) {
    return J($, (z) => {
      const fe = z.charCodeAt(0);
      return fe >= 48 && fe <= 57 || // 0-9
      fe >= 65 && fe <= 70 || // A-F
      fe >= 97 && fe <= 102;
    });
  }
  function xe($) {
    let k = "", z = "";
    for (; k = ue($); )
      z += k;
    return z;
  }
  function Fe($) {
    S($);
    const k = $.currentChar();
    return k !== "%" && m(ze.EXPECTED_TOKEN, s(), 0, k), $.next(), "%";
  }
  function Ne($) {
    let k = "";
    for (; ; ) {
      const z = $.currentChar();
      if (z === "{" || z === "}" || z === "@" || z === "|" || !z)
        break;
      if (z === "%")
        if (Y($))
          k += z, $.next();
        else
          break;
      else if (z === ki || z === Cn)
        if (Y($))
          k += z, $.next();
        else {
          if (P($))
            break;
          k += z, $.next();
        }
      else
        k += z, $.next();
    }
    return k;
  }
  function ie($) {
    S($);
    let k = "", z = "";
    for (; k = he($); )
      z += k;
    return $.currentChar() === ha && m(ze.UNTERMINATED_CLOSING_BRACE, s(), 0), z;
  }
  function Ae($) {
    S($);
    let k = "";
    return $.currentChar() === "-" ? ($.next(), k += `-${xe($)}`) : k += xe($), $.currentChar() === ha && m(ze.UNTERMINATED_CLOSING_BRACE, s(), 0), k;
  }
  function lt($) {
    S($), b($, "'");
    let k = "", z = "";
    const fe = (je) => je !== jg && je !== Cn;
    for (; k = J($, fe); )
      k === "\\" ? z += Ct($) : z += k;
    const ge = $.currentChar();
    return ge === Cn || ge === ha ? (m(ze.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, s(), 0), ge === Cn && ($.next(), b($, "'")), z) : (b($, "'"), z);
  }
  function Ct($) {
    const k = $.currentChar();
    switch (k) {
      case "\\":
      case "'":
        return $.next(), `\\${k}`;
      case "u":
        return Oe($, k, 4);
      case "U":
        return Oe($, k, 6);
      default:
        return m(ze.UNKNOWN_ESCAPE_SEQUENCE, s(), 0, k), "";
    }
  }
  function Oe($, k, z) {
    b($, k);
    let fe = "";
    for (let ge = 0; ge < z; ge++) {
      const je = ve($);
      if (!je) {
        m(ze.INVALID_UNICODE_ESCAPE_SEQUENCE, s(), 0, `\\${k}${fe}${$.currentChar()}`);
        break;
      }
      fe += je;
    }
    return `\\${k}${fe}`;
  }
  function st($) {
    S($);
    let k = "", z = "";
    const fe = (ge) => ge !== "{" && ge !== "}" && ge !== ki && ge !== Cn;
    for (; k = J($, fe); )
      z += k;
    return z;
  }
  function Je($) {
    let k = "", z = "";
    for (; k = he($); )
      z += k;
    return z;
  }
  function xt($) {
    const k = (z = !1, fe) => {
      const ge = $.currentChar();
      return ge === "{" || ge === "%" || ge === "@" || ge === "|" || ge === "(" || ge === ")" || !ge || ge === ki ? fe : ge === Cn || ge === VM ? (fe += ge, $.next(), k(z, fe)) : (fe += ge, $.next(), k(!0, fe));
    };
    return k(!1, "");
  }
  function ce($) {
    S($);
    const k = b(
      $,
      "|"
      /* TokenChars.Pipe */
    );
    return S($), k;
  }
  function le($, k) {
    let z = null;
    switch ($.currentChar()) {
      case "{":
        return k.braceNest >= 1 && m(ze.NOT_ALLOW_NEST_PLACEHOLDER, s(), 0), $.next(), z = v(
          k,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), S($), k.braceNest++, z;
      case "}":
        return k.braceNest > 0 && k.currentType === 2 && m(ze.EMPTY_PLACEHOLDER, s(), 0), $.next(), z = v(
          k,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), k.braceNest--, k.braceNest > 0 && S($), k.inLinked && k.braceNest === 0 && (k.inLinked = !1), z;
      case "@":
        return k.braceNest > 0 && m(ze.UNTERMINATED_CLOSING_BRACE, s(), 0), z = Pe($, k) || g(k), k.braceNest = 0, z;
      default:
        let ge = !0, je = !0, Yt = !0;
        if (P($))
          return k.braceNest > 0 && m(ze.UNTERMINATED_CLOSING_BRACE, s(), 0), z = v(k, 1, ce($)), k.braceNest = 0, k.inLinked = !1, z;
        if (k.braceNest > 0 && (k.currentType === 5 || k.currentType === 6 || k.currentType === 7))
          return m(ze.UNTERMINATED_CLOSING_BRACE, s(), 0), k.braceNest = 0, ke($, k);
        if (ge = A($, k))
          return z = v(k, 5, ie($)), S($), z;
        if (je = E($, k))
          return z = v(k, 6, Ae($)), S($), z;
        if (Yt = C($, k))
          return z = v(k, 7, lt($)), S($), z;
        if (!ge && !je && !Yt)
          return z = v(k, 13, st($)), m(ze.INVALID_TOKEN_IN_PLACEHOLDER, s(), 0, z.value), S($), z;
        break;
    }
    return z;
  }
  function Pe($, k) {
    const { currentType: z } = k;
    let fe = null;
    const ge = $.currentChar();
    switch ((z === 8 || z === 9 || z === 12 || z === 10) && (ge === Cn || ge === ki) && m(ze.INVALID_LINKED_FORMAT, s(), 0), ge) {
      case "@":
        return $.next(), fe = v(
          k,
          8,
          "@"
          /* TokenChars.LinkedAlias */
        ), k.inLinked = !0, fe;
      case ".":
        return S($), $.next(), v(
          k,
          9,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return S($), $.next(), v(
          k,
          10,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return P($) ? (fe = v(k, 1, ce($)), k.braceNest = 0, k.inLinked = !1, fe) : M($, k) || F($, k) ? (S($), Pe($, k)) : N($, k) ? (S($), v(k, 12, Je($))) : H($, k) ? (S($), ge === "{" ? le($, k) || fe : v(k, 11, xt($))) : (z === 8 && m(ze.INVALID_LINKED_FORMAT, s(), 0), k.braceNest = 0, k.inLinked = !1, ke($, k));
    }
  }
  function ke($, k) {
    let z = {
      type: 14
      /* TokenTypes.EOF */
    };
    if (k.braceNest > 0)
      return le($, k) || g(k);
    if (k.inLinked)
      return Pe($, k) || g(k);
    switch ($.currentChar()) {
      case "{":
        return le($, k) || g(k);
      case "}":
        return m(ze.UNBALANCED_CLOSING_BRACE, s(), 0), $.next(), v(
          k,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return Pe($, k) || g(k);
      default:
        if (P($))
          return z = v(k, 1, ce($)), k.braceNest = 0, k.inLinked = !1, z;
        const { isModulo: ge, hasSpace: je } = j($);
        if (ge)
          return je ? v(k, 0, Ne($)) : v(k, 4, Fe($));
        if (Y($))
          return v(k, 0, Ne($));
        break;
    }
    return z;
  }
  function re() {
    const { currentType: $, offset: k, startLoc: z, endLoc: fe } = f;
    return f.lastType = $, f.lastOffset = k, f.lastStartLoc = z, f.lastEndLoc = fe, f.offset = a(), f.startLoc = s(), r.currentChar() === ha ? v(
      f,
      14
      /* TokenTypes.EOF */
    ) : ke(r, f);
  }
  return {
    nextToken: re,
    currentOffset: a,
    currentPosition: s,
    context: h
  };
}
const zM = "parser", jM = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function GM(e, t, n) {
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
function qM(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function r(w, x, A, E, ...C) {
    const M = w.currentPosition();
    if (M.offset += E, M.column += E, n) {
      const N = t ? Gd(A, M) : null, F = co(x, N, {
        domain: zM,
        args: C
      });
      n(F);
    }
  }
  function a(w, x, A) {
    const E = { type: w };
    return t && (E.start = x, E.end = x, E.loc = { start: A, end: A }), E;
  }
  function s(w, x, A, E) {
    E && (w.type = E), t && (w.end = x, w.loc && (w.loc.end = A));
  }
  function l(w, x) {
    const A = w.context(), E = a(3, A.offset, A.startLoc);
    return E.value = x, s(E, w.currentOffset(), w.currentPosition()), E;
  }
  function u(w, x) {
    const A = w.context(), { lastOffset: E, lastStartLoc: C } = A, M = a(5, E, C);
    return M.index = parseInt(x, 10), w.nextToken(), s(M, w.currentOffset(), w.currentPosition()), M;
  }
  function f(w, x) {
    const A = w.context(), { lastOffset: E, lastStartLoc: C } = A, M = a(4, E, C);
    return M.key = x, w.nextToken(), s(M, w.currentOffset(), w.currentPosition()), M;
  }
  function h(w, x) {
    const A = w.context(), { lastOffset: E, lastStartLoc: C } = A, M = a(9, E, C);
    return M.value = x.replace(jM, GM), w.nextToken(), s(M, w.currentOffset(), w.currentPosition()), M;
  }
  function d(w) {
    const x = w.nextToken(), A = w.context(), { lastOffset: E, lastStartLoc: C } = A, M = a(8, E, C);
    return x.type !== 12 ? (r(w, ze.UNEXPECTED_EMPTY_LINKED_MODIFIER, A.lastStartLoc, 0), M.value = "", s(M, E, C), {
      nextConsumeToken: x,
      node: M
    }) : (x.value == null && r(w, ze.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, ei(x)), M.value = x.value || "", s(M, w.currentOffset(), w.currentPosition()), {
      node: M
    });
  }
  function m(w, x) {
    const A = w.context(), E = a(7, A.offset, A.startLoc);
    return E.value = x, s(E, w.currentOffset(), w.currentPosition()), E;
  }
  function v(w) {
    const x = w.context(), A = a(6, x.offset, x.startLoc);
    let E = w.nextToken();
    if (E.type === 9) {
      const C = d(w);
      A.modifier = C.node, E = C.nextConsumeToken || w.nextToken();
    }
    switch (E.type !== 10 && r(w, ze.UNEXPECTED_LEXICAL_ANALYSIS, x.lastStartLoc, 0, ei(E)), E = w.nextToken(), E.type === 2 && (E = w.nextToken()), E.type) {
      case 11:
        E.value == null && r(w, ze.UNEXPECTED_LEXICAL_ANALYSIS, x.lastStartLoc, 0, ei(E)), A.key = m(w, E.value || "");
        break;
      case 5:
        E.value == null && r(w, ze.UNEXPECTED_LEXICAL_ANALYSIS, x.lastStartLoc, 0, ei(E)), A.key = f(w, E.value || "");
        break;
      case 6:
        E.value == null && r(w, ze.UNEXPECTED_LEXICAL_ANALYSIS, x.lastStartLoc, 0, ei(E)), A.key = u(w, E.value || "");
        break;
      case 7:
        E.value == null && r(w, ze.UNEXPECTED_LEXICAL_ANALYSIS, x.lastStartLoc, 0, ei(E)), A.key = h(w, E.value || "");
        break;
      default:
        r(w, ze.UNEXPECTED_EMPTY_LINKED_KEY, x.lastStartLoc, 0);
        const C = w.context(), M = a(7, C.offset, C.startLoc);
        return M.value = "", s(M, C.offset, C.startLoc), A.key = M, s(A, C.offset, C.startLoc), {
          nextConsumeToken: E,
          node: A
        };
    }
    return s(A, w.currentOffset(), w.currentPosition()), {
      node: A
    };
  }
  function g(w) {
    const x = w.context(), A = x.currentType === 1 ? w.currentOffset() : x.offset, E = x.currentType === 1 ? x.endLoc : x.startLoc, C = a(2, A, E);
    C.items = [];
    let M = null;
    do {
      const H = M || w.nextToken();
      switch (M = null, H.type) {
        case 0:
          H.value == null && r(w, ze.UNEXPECTED_LEXICAL_ANALYSIS, x.lastStartLoc, 0, ei(H)), C.items.push(l(w, H.value || ""));
          break;
        case 6:
          H.value == null && r(w, ze.UNEXPECTED_LEXICAL_ANALYSIS, x.lastStartLoc, 0, ei(H)), C.items.push(u(w, H.value || ""));
          break;
        case 5:
          H.value == null && r(w, ze.UNEXPECTED_LEXICAL_ANALYSIS, x.lastStartLoc, 0, ei(H)), C.items.push(f(w, H.value || ""));
          break;
        case 7:
          H.value == null && r(w, ze.UNEXPECTED_LEXICAL_ANALYSIS, x.lastStartLoc, 0, ei(H)), C.items.push(h(w, H.value || ""));
          break;
        case 8:
          const P = v(w);
          C.items.push(P.node), M = P.nextConsumeToken || null;
          break;
      }
    } while (x.currentType !== 14 && x.currentType !== 1);
    const N = x.currentType === 1 ? x.lastOffset : w.currentOffset(), F = x.currentType === 1 ? x.lastEndLoc : w.currentPosition();
    return s(C, N, F), C;
  }
  function b(w, x, A, E) {
    const C = w.context();
    let M = E.items.length === 0;
    const N = a(1, x, A);
    N.cases = [], N.cases.push(E);
    do {
      const F = g(w);
      M || (M = F.items.length === 0), N.cases.push(F);
    } while (C.currentType !== 14);
    return M && r(w, ze.MUST_HAVE_MESSAGES_IN_PLURAL, A, 0), s(N, w.currentOffset(), w.currentPosition()), N;
  }
  function O(w) {
    const x = w.context(), { offset: A, startLoc: E } = x, C = g(w);
    return x.currentType === 14 ? C : b(w, A, E, C);
  }
  function S(w) {
    const x = HM(w, $0({}, e)), A = x.context(), E = a(0, A.offset, A.startLoc);
    return t && E.loc && (E.loc.source = w), E.body = O(x), e.onCacheKey && (E.cacheKey = e.onCacheKey(w)), A.currentType !== 14 && r(x, ze.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, w[A.offset] || ""), s(E, x.currentOffset(), x.currentPosition()), E;
  }
  return { parse: S };
}
function ei(e) {
  if (e.type === 14)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function KM(e, t = {}) {
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
function ZM(e, t = {}) {
  const n = KM(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && Gh(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function XM(e) {
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
      e.static = P0(t);
      for (let n = 0; n < e.items.length; n++) {
        const r = e.items[n];
        (r.type === 3 || r.type === 9) && delete r.value;
      }
    }
  }
}
const JM = "minifier";
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
      throw co(ze.UNHANDLED_MINIFIER_NODE_TYPE, null, {
        domain: JM,
        args: [e.type]
      });
  }
  delete e.type;
}
const QM = "parser";
function e$(e, t) {
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
  function h(S, w) {
    u.code += S;
  }
  function d(S, w = !0) {
    const x = w ? a : "";
    h(s ? x + "  ".repeat(S) : x);
  }
  function m(S = !0) {
    const w = ++u.indentLevel;
    S && d(w);
  }
  function v(S = !0) {
    const w = --u.indentLevel;
    S && d(w);
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
    helper: (S) => `_${S}`,
    needIndent: () => u.needIndent
  };
}
function t$(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), Xs(e, t.key), t.modifier ? (e.push(", "), Xs(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function n$(e, t) {
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
function r$(e, t) {
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
function i$(e, t) {
  t.body ? Xs(e, t.body) : e.push("null");
}
function Xs(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      i$(e, t);
      break;
    case 1:
      r$(e, t);
      break;
    case 2:
      n$(e, t);
      break;
    case 6:
      t$(e, t);
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
      throw co(ze.UNHANDLED_CODEGEN_NODE_TYPE, null, {
        domain: QM,
        args: [t.type]
      });
  }
}
const a$ = (e, t = {}) => {
  const n = zg(t.mode) ? t.mode : "normal", r = zg(t.filename) ? t.filename : "message.intl", a = !!t.sourceMap, s = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, l = t.needIndent ? t.needIndent : n !== "arrow", u = e.helpers || [], f = e$(e, {
    mode: n,
    filename: r,
    sourceMap: a,
    breakLineCode: s,
    needIndent: l
  });
  f.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), f.indent(l), u.length > 0 && (f.push(`const { ${P0(u.map((m) => `${m}: _${m}`), ", ")} } = ctx`), f.newline()), f.push("return "), Xs(f, e), f.deindent(l), f.push("}"), delete e.helpers;
  const { code: h, map: d } = f.context();
  return {
    ast: e,
    code: h,
    map: d ? d.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function s$(e, t = {}) {
  const n = $0({}, t), r = !!n.jit, a = !!n.minify, s = n.optimize == null ? !0 : n.optimize, u = qM(n).parse(e);
  return r ? (s && XM(u), a && Ls(u), { ast: u, code: "" }) : (ZM(u, n), a$(u, n));
}
/*!
  * core-base v9.5.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */
function o$() {
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
const l$ = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function u$(e) {
  return l$.test(e);
}
function c$(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function f$(e) {
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
function d$(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : u$(t) ? c$(t) : "*" + t;
}
function h$(e) {
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
      if (a = 0, l === void 0 || (l = d$(l), l === !1))
        return !1;
      v[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function g() {
    const b = e[n + 1];
    if (r === 5 && b === "'" || r === 6 && b === '"')
      return n++, u = "\\" + b, v[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; r !== null; )
    if (n++, s = e[n], !(s === "\\" && g())) {
      if (f = f$(s), m = Ca[r], h = m[f] || m.l || 8, h === 8 || (r = h[0], h[1] !== void 0 && (d = v[h[1]], d && (u = s, d() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const Kg = /* @__PURE__ */ new Map();
function p$(e, t) {
  return bt(e) ? e[t] : null;
}
function m$(e, t) {
  if (!bt(e))
    return null;
  let n = Kg.get(t);
  if (n || (n = h$(t), n && Kg.set(t, n)), !n)
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
const v$ = (e) => e, g$ = (e) => "", _$ = "text", y$ = (e) => e.length === 0 ? "" : TM(e), b$ = xM;
function Zg(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function w$(e) {
  const t = fn(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (fn(e.named.count) || fn(e.named.n)) ? fn(e.named.count) ? e.named.count : fn(e.named.n) ? e.named.n : t : t;
}
function O$(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function E$(e = {}) {
  const t = e.locale, n = w$(e), r = bt(e.pluralRules) && _e(t) && qt(e.pluralRules[t]) ? e.pluralRules[t] : Zg, a = bt(e.pluralRules) && _e(t) && qt(e.pluralRules[t]) ? Zg : void 0, s = (w) => w[r(n, w.length, a)], l = e.list || [], u = (w) => l[w], f = e.named || {};
  fn(e.pluralIndex) && O$(n, f);
  const h = (w) => f[w];
  function d(w) {
    const x = qt(e.messages) ? e.messages(w) : bt(e.messages) ? e.messages[w] : !1;
    return x || (e.parent ? e.parent.message(w) : g$);
  }
  const m = (w) => e.modifiers ? e.modifiers[w] : v$, v = Ge(e.processor) && qt(e.processor.normalize) ? e.processor.normalize : y$, g = Ge(e.processor) && qt(e.processor.interpolate) ? e.processor.interpolate : b$, b = Ge(e.processor) && _e(e.processor.type) ? e.processor.type : _$, S = {
    list: u,
    named: h,
    plural: s,
    linked: (w, ...x) => {
      const [A, E] = x;
      let C = "text", M = "";
      x.length === 1 ? bt(A) ? (M = A.modifier || M, C = A.type || C) : _e(A) && (M = A || M) : x.length === 2 && (_e(A) && (M = A || M), _e(E) && (C = E || C));
      const N = d(w)(S), F = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        C === "vnode" && Ft(N) && M ? N[0] : N
      );
      return M ? m(M)(F, C) : F;
    },
    message: d,
    type: b,
    interpolate: g,
    normalize: v,
    values: _n({}, l, f)
  };
  return S;
}
let dl = null;
function D$(e) {
  dl = e;
}
function S$(e, t, n) {
  dl && dl.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: n
  });
}
const x$ = /* @__PURE__ */ T$(
  "function:translate"
  /* IntlifyDevToolsHooks.FunctionTranslate */
);
function T$(e) {
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
}, k$ = {
  [In.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
  [In.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
  [In.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
  [In.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
  [In.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
  [In.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale.",
  [In.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: "This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future."
};
function rs(e, ...t) {
  return Bh(k$[e], ...t);
}
function qh(e, t) {
  return t.locale != null ? Xg(t.locale) : Xg(e.locale);
}
let Od;
function Xg(e) {
  return _e(e) ? e : Od != null && e.resolvedOnce ? Od : Od = e();
}
function A$(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...Ft(t) ? t : bt(t) ? Object.keys(t) : _e(t) ? [t] : [n]
  ])];
}
function C0(e, t, n) {
  const r = _e(n) ? n : Js, a = e;
  a.__localeChainCache || (a.__localeChainCache = /* @__PURE__ */ new Map());
  let s = a.__localeChainCache.get(r);
  if (!s) {
    s = [];
    let l = [n];
    for (; Ft(l); )
      l = Jg(s, l, t);
    const u = Ft(t) || !Ge(t) ? t : t.default ? t.default : null;
    l = _e(u) ? [u] : u, Ft(l) && Jg(s, l, !1), a.__localeChainCache.set(r, s);
  }
  return s;
}
function Jg(e, t, n) {
  let r = !0;
  for (let a = 0; a < t.length && ct(r); a++) {
    const s = t[a];
    _e(s) && (r = M$(e, t[a], n));
  }
  return r;
}
function M$(e, t, n) {
  let r;
  const a = t.split("-");
  do {
    const s = a.join("-");
    r = $$(e, s, n), a.splice(-1, 1);
  } while (a.length && r === !0);
  return r;
}
function $$(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== "!";
    const a = t.replace(/!/g, "");
    e.push(a), (Ft(n) || Ge(n)) && n[a] && (r = n[a]);
  }
  return r;
}
const P$ = "9.5.0", Pc = -1, Js = "en-US", Qu = "", Qg = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function C$() {
  return {
    upper: (e, t) => t === "text" && _e(e) ? e.toUpperCase() : t === "vnode" && bt(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && _e(e) ? e.toLowerCase() : t === "vnode" && bt(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && _e(e) ? Qg(e) : t === "vnode" && bt(e) && "__v_isVNode" in e ? Qg(e.children) : e
  };
}
let I0;
function e_(e) {
  I0 = e;
}
let N0;
function I$(e) {
  N0 = e;
}
let L0;
function N$(e) {
  L0 = e;
}
let R0 = null;
const t_ = (e) => {
  R0 = e;
}, L$ = () => R0;
let F0 = null;
const n_ = (e) => {
  F0 = e;
}, R$ = () => F0;
let r_ = 0;
function F$(e = {}) {
  const t = qt(e.onWarn) ? e.onWarn : pn, n = _e(e.version) ? e.version : P$, r = _e(e.locale) || qt(e.locale) ? e.locale : Js, a = qt(r) ? Js : r, s = Ft(e.fallbackLocale) || Ge(e.fallbackLocale) || _e(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : a, l = Ge(e.messages) ? e.messages : { [a]: {} }, u = Ge(e.datetimeFormats) ? e.datetimeFormats : { [a]: {} }, f = Ge(e.numberFormats) ? e.numberFormats : { [a]: {} }, h = _n({}, e.modifiers || {}, C$()), d = e.pluralRules || {}, m = qt(e.missing) ? e.missing : null, v = ct(e.missingWarn) || Ta(e.missingWarn) ? e.missingWarn : !0, g = ct(e.fallbackWarn) || Ta(e.fallbackWarn) ? e.fallbackWarn : !0, b = !!e.fallbackFormat, O = !!e.unresolving, S = qt(e.postTranslation) ? e.postTranslation : null, w = Ge(e.processor) ? e.processor : null, x = ct(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, A = !!e.escapeParameter, E = qt(e.messageCompiler) ? e.messageCompiler : I0;
  process.env.NODE_ENV !== "production" && qt(e.messageCompiler) && AM(rs(In.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
  const C = qt(e.messageResolver) ? e.messageResolver : N0 || p$, M = qt(e.localeFallbacker) ? e.localeFallbacker : L0 || A$, N = bt(e.fallbackContext) ? e.fallbackContext : void 0, F = e, H = bt(F.__datetimeFormatters) ? F.__datetimeFormatters : /* @__PURE__ */ new Map(), P = bt(F.__numberFormatters) ? F.__numberFormatters : /* @__PURE__ */ new Map(), j = bt(F.__meta) ? F.__meta : {};
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
    fallbackFormat: b,
    unresolving: O,
    postTranslation: S,
    processor: w,
    warnHtmlMessage: x,
    escapeParameter: A,
    messageCompiler: E,
    messageResolver: C,
    localeFallbacker: M,
    fallbackContext: N,
    onWarn: t,
    __meta: j
  };
  return Y.datetimeFormats = u, Y.numberFormats = f, Y.__datetimeFormatters = H, Y.__numberFormatters = P, process.env.NODE_ENV !== "production" && (Y.__v_emitter = F.__v_emitter != null ? F.__v_emitter : void 0), (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && S$(Y, n, j), Y;
}
function Cc(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function Y0(e, t) {
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
    return _e(u) ? u : t;
  } else
    return process.env.NODE_ENV !== "production" && Y0(r, t) && l(rs(In.NOT_FOUND_KEY, { key: t, locale: n })), t;
}
function Ho(e, t, n) {
  const r = e;
  r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function Ed(e) {
  return (n) => Y$(n, e);
}
function Y$(e, t) {
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
const W0 = ze.__EXTEND_POINT__, xu = zh(W0), Or = {
  INVALID_ARGUMENT: W0,
  INVALID_DATE_ARGUMENT: xu(),
  INVALID_ISO_DATE_ARGUMENT: xu(),
  NOT_SUPPORT_NON_STRING_MESSAGE: xu(),
  __EXTEND_POINT__: xu()
  // 22
};
function qa(e) {
  return co(e, null, process.env.NODE_ENV !== "production" ? { messages: W$ } : void 0);
}
const W$ = {
  [Or.INVALID_ARGUMENT]: "Invalid arguments",
  [Or.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [Or.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
  [Or.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message"
}, U$ = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function U0(e, t) {
  t && RM(e) && pn(Bh(U$, { source: e }));
}
const V0 = (e) => e;
let Ys = /* @__PURE__ */ Object.create(null);
const is = (e) => bt(e) && (e.t === 0 || e.type === 0) && ("b" in e || "body" in e);
function B0(e, t = {}) {
  let n = !1;
  const r = t.onError || NM;
  return t.onError = (a) => {
    n = !0, r(a);
  }, { ...s$(e, t), detectError: n };
}
const V$ = (e, t) => {
  if (!_e(e))
    throw qa(Or.NOT_SUPPORT_NON_STRING_MESSAGE);
  {
    const n = ct(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && U0(e, n);
    const a = (t.onCacheKey || V0)(e), s = Ys[a];
    if (s)
      return s;
    const { code: l, detectError: u } = B0(e, t), f = new Function(`return ${l}`)();
    return u ? f : Ys[a] = f;
  }
};
function B$(e, t) {
  if (__INTLIFY_JIT_COMPILATION__ && !__INTLIFY_DROP_MESSAGE_COMPILER__ && _e(e)) {
    const n = ct(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && U0(e, n);
    const a = (t.onCacheKey || V0)(e), s = Ys[a];
    if (s)
      return s;
    const { ast: l, detectError: u } = B0(e, {
      ...t,
      location: process.env.NODE_ENV !== "production",
      jit: !0
    }), f = Ed(l);
    return u ? f : Ys[a] = f;
  } else {
    if (process.env.NODE_ENV !== "production" && !is(e))
      return pn(`the message that is resolve with key '${t.key}' is not supported for jit compilation`), () => e;
    const n = e.cacheKey;
    if (n) {
      const r = Ys[n];
      return r || (Ys[n] = Ed(e));
    } else
      return Ed(e);
  }
}
const a_ = () => "", Yr = (e) => qt(e);
function s_(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: a, messageCompiler: s, fallbackLocale: l, messages: u } = e, [f, h] = Kd(...t), d = ct(h.missingWarn) ? h.missingWarn : e.missingWarn, m = ct(h.fallbackWarn) ? h.fallbackWarn : e.fallbackWarn, v = ct(h.escapeParameter) ? h.escapeParameter : e.escapeParameter, g = !!h.resolvedMessage, b = _e(h.default) || ct(h.default) ? ct(h.default) ? s ? f : () => f : h.default : n ? s ? f : () => f : "", O = n || b !== "", S = qh(e, h);
  v && H$(h);
  let [w, x, A] = g ? [
    f,
    S,
    u[S] || {}
  ] : H0(e, f, S, l, m, d), E = w, C = f;
  if (!g && !(_e(E) || is(E) || Yr(E)) && O && (E = b, C = E), !g && (!(_e(E) || is(E) || Yr(E)) || !_e(x)))
    return a ? Pc : f;
  if (process.env.NODE_ENV !== "production" && _e(E) && e.messageCompiler == null)
    return pn(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${f}'.`), f;
  let M = !1;
  const N = () => {
    M = !0;
  }, F = Yr(E) ? E : z0(e, f, x, E, C, N);
  if (M)
    return E;
  const H = q$(e, x, A, h), P = E$(H), j = z$(e, F, P), Y = r ? r(j, f) : j;
  if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    const J = {
      timestamp: Date.now(),
      key: _e(f) ? f : Yr(E) ? E.key : "",
      locale: x || (Yr(E) ? E.locale : ""),
      format: _e(E) ? E : Yr(E) ? E.source : "",
      message: Y
    };
    J.meta = _n({}, e.__meta, L$() || {}), x$(J);
  }
  return Y;
}
function H$(e) {
  Ft(e.list) ? e.list = e.list.map((t) => _e(t) ? Vg(t) : t) : bt(e.named) && Object.keys(e.named).forEach((t) => {
    _e(e.named[t]) && (e.named[t] = Vg(e.named[t]));
  });
}
function H0(e, t, n, r, a, s) {
  const { messages: l, onWarn: u, messageResolver: f, localeFallbacker: h } = e, d = h(e, r, n);
  let m = {}, v, g = null, b = n, O = null;
  const S = "translate";
  for (let w = 0; w < d.length; w++) {
    if (v = O = d[w], process.env.NODE_ENV !== "production" && n !== v && Cc(a, t) && u(rs(In.FALLBACK_TO_TRANSLATE, {
      key: t,
      target: v
    })), process.env.NODE_ENV !== "production" && n !== v) {
      const M = e.__v_emitter;
      M && M.emit("fallback", {
        type: S,
        key: t,
        from: b,
        to: O,
        groupId: `${S}:${t}`
      });
    }
    m = l[v] || {};
    let x = null, A, E;
    if (process.env.NODE_ENV !== "production" && si && (x = window.performance.now(), A = "intlify-message-resolve-start", E = "intlify-message-resolve-end", ar && ar(A)), (g = f(m, t)) === null && (g = m[t]), process.env.NODE_ENV !== "production" && si) {
      const M = window.performance.now(), N = e.__v_emitter;
      N && x && g && N.emit("message-resolve", {
        type: "message-resolve",
        key: t,
        message: g,
        time: M - x,
        groupId: `${S}:${t}`
      }), A && E && ar && ns && (ar(E), ns("intlify message resolve", A, E));
    }
    if (_e(g) || is(g) || Yr(g))
      break;
    const C = Kh(
      e,
      // eslint-disable-line @typescript-eslint/no-explicit-any
      t,
      v,
      s,
      S
    );
    C !== t && (g = C), b = O;
  }
  return [g, v, m];
}
function z0(e, t, n, r, a, s) {
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
  const m = l(r, j$(e, n, a, r, u, s));
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
function z$(e, t, n) {
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
  if (!_e(t) && !fn(t) && !Yr(t) && !is(t))
    throw qa(Or.INVALID_ARGUMENT);
  const s = fn(t) ? String(t) : (Yr(t), t);
  return fn(n) ? a.plural = n : _e(n) ? a.default = n : Ge(n) && !$c(n) ? a.named = n : Ft(n) && (a.list = n), fn(r) ? a.plural = r : _e(r) ? a.default = r : Ge(r) && _n(a, r), [s, a];
}
function j$(e, t, n, r, a, s) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: a,
    onError: (l) => {
      if (s && s(l), process.env.NODE_ENV !== "production") {
        const u = G$(r), f = `Message compilation error: ${l.message}`, h = l.location && u && kM(u, l.location.start.offset, l.location.end.offset), d = e.__v_emitter;
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
    onCacheKey: (l) => OM(t, n, l)
  };
}
function G$(e) {
  var t;
  if (!_e(e)) {
    if ((t = e.loc) != null && t.source)
      return e.loc.source;
  }
}
function q$(e, t, n, r) {
  const { modifiers: a, pluralRules: s, messageResolver: l, fallbackLocale: u, fallbackWarn: f, missingWarn: h, fallbackContext: d } = e, v = {
    locale: t,
    modifiers: a,
    pluralRules: s,
    messages: (g) => {
      let b = l(n, g);
      if (b == null && d) {
        const [, , O] = H0(d, g, t, u, f, h);
        b = l(O, g);
      }
      if (_e(b) || is(b)) {
        let O = !1;
        const w = z0(e, g, t, b, g, () => {
          O = !0;
        });
        return O ? a_ : w;
      } else
        return Yr(b) ? b : a_;
    }
  };
  return e.processor && (v.processor = e.processor), r.list && (v.list = r.list), r.named && (v.named = r.named), fn(r.plural) && (v.pluralIndex = r.plural), v;
}
const o_ = typeof Intl < "u", j0 = {
  dateTimeFormat: o_ && typeof Intl.DateTimeFormat < "u",
  numberFormat: o_ && typeof Intl.NumberFormat < "u"
};
function l_(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: a, onWarn: s, localeFallbacker: l } = e, { __datetimeFormatters: u } = e;
  if (process.env.NODE_ENV !== "production" && !j0.dateTimeFormat)
    return s(rs(In.CANNOT_FORMAT_DATE)), Qu;
  const [f, h, d, m] = Zd(...t), v = ct(d.missingWarn) ? d.missingWarn : e.missingWarn, g = ct(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn, b = !!d.part, O = qh(e, d), S = l(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    a,
    O
  );
  if (!_e(f) || f === "")
    return new Intl.DateTimeFormat(O, m).format(h);
  let w = {}, x, A = null, E = O, C = null;
  const M = "datetime format";
  for (let H = 0; H < S.length; H++) {
    if (x = C = S[H], process.env.NODE_ENV !== "production" && O !== x && Cc(g, f) && s(rs(In.FALLBACK_TO_DATE_FORMAT, {
      key: f,
      target: x
    })), process.env.NODE_ENV !== "production" && O !== x) {
      const P = e.__v_emitter;
      P && P.emit("fallback", {
        type: M,
        key: f,
        from: E,
        to: C,
        groupId: `${M}:${f}`
      });
    }
    if (w = n[x] || {}, A = w[f], Ge(A))
      break;
    Kh(e, f, x, v, M), E = C;
  }
  if (!Ge(A) || !_e(x))
    return r ? Pc : f;
  let N = `${x}__${f}`;
  $c(m) || (N = `${N}__${JSON.stringify(m)}`);
  let F = u.get(N);
  return F || (F = new Intl.DateTimeFormat(x, _n({}, A, m)), u.set(N, F)), b ? F.formatToParts(h) : F.format(h);
}
const G0 = [
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
  if (_e(t)) {
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
  } else if (DM(t)) {
    if (isNaN(t.getTime()))
      throw qa(Or.INVALID_DATE_ARGUMENT);
    u = t;
  } else if (fn(t))
    u = t;
  else
    throw qa(Or.INVALID_ARGUMENT);
  return _e(n) ? s.key = n : Ge(n) && Object.keys(n).forEach((f) => {
    G0.includes(f) ? l[f] = n[f] : s[f] = n[f];
  }), _e(r) ? s.locale = r : Ge(r) && (l = r), Ge(a) && (l = a), [s.key || "", u, s, l];
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
  if (process.env.NODE_ENV !== "production" && !j0.numberFormat)
    return s(rs(In.CANNOT_FORMAT_NUMBER)), Qu;
  const [f, h, d, m] = Xd(...t), v = ct(d.missingWarn) ? d.missingWarn : e.missingWarn, g = ct(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn, b = !!d.part, O = qh(e, d), S = l(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    a,
    O
  );
  if (!_e(f) || f === "")
    return new Intl.NumberFormat(O, m).format(h);
  let w = {}, x, A = null, E = O, C = null;
  const M = "number format";
  for (let H = 0; H < S.length; H++) {
    if (x = C = S[H], process.env.NODE_ENV !== "production" && O !== x && Cc(g, f) && s(rs(In.FALLBACK_TO_NUMBER_FORMAT, {
      key: f,
      target: x
    })), process.env.NODE_ENV !== "production" && O !== x) {
      const P = e.__v_emitter;
      P && P.emit("fallback", {
        type: M,
        key: f,
        from: E,
        to: C,
        groupId: `${M}:${f}`
      });
    }
    if (w = n[x] || {}, A = w[f], Ge(A))
      break;
    Kh(e, f, x, v, M), E = C;
  }
  if (!Ge(A) || !_e(x))
    return r ? Pc : f;
  let N = `${x}__${f}`;
  $c(m) || (N = `${N}__${JSON.stringify(m)}`);
  let F = u.get(N);
  return F || (F = new Intl.NumberFormat(x, _n({}, A, m)), u.set(N, F)), b ? F.formatToParts(h) : F.format(h);
}
const q0 = [
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
  if (!fn(t))
    throw qa(Or.INVALID_ARGUMENT);
  const u = t;
  return _e(n) ? s.key = n : Ge(n) && Object.keys(n).forEach((f) => {
    q0.includes(f) ? l[f] = n[f] : s[f] = n[f];
  }), _e(r) ? s.locale = r : Ge(r) && (l = r), Ge(a) && (l = a), [s.key || "", u, s, l];
}
function f_(e, t, n) {
  const r = e;
  for (const a in n) {
    const s = `${t}__${a}`;
    r.__numberFormatters.has(s) && r.__numberFormatters.delete(s);
  }
}
o$();
function K$() {
  return K0().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function K0() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const Z$ = typeof Proxy == "function", X$ = "devtools-plugin:setup", J$ = "plugin:settings:set";
let Cs, Jd;
function Q$() {
  var e;
  return Cs !== void 0 || (typeof window < "u" && window.performance ? (Cs = !0, Jd = window.performance) : typeof global < "u" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (Cs = !0, Jd = global.perf_hooks.performance) : Cs = !1), Cs;
}
function eP() {
  return Q$() ? Jd.now() : Date.now();
}
class tP {
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
        return eP();
      }
    }, n && n.on(J$, (l, u) => {
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
function nP(e, t) {
  const n = e, r = K0(), a = K$(), s = Z$ && n.enableEarlyProxy;
  if (a && (r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !s))
    a.emit(X$, e, t);
  else {
    const l = s ? new tP(n, a) : null;
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
const rP = "9.5.0";
function iP() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (Ci().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (Ci().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (Ci().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Ci().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Ci().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const Z0 = In.__EXTEND_POINT__, pa = zh(Z0), Qt = {
  FALLBACK_TO_ROOT: Z0,
  NOT_SUPPORTED_PRESERVE: pa(),
  NOT_SUPPORTED_FORMATTER: pa(),
  NOT_SUPPORTED_PRESERVE_DIRECTIVE: pa(),
  NOT_SUPPORTED_GET_CHOICE_INDEX: pa(),
  COMPONENT_NAME_LEGACY_COMPATIBLE: pa(),
  NOT_FOUND_PARENT_SCOPE: pa(),
  IGNORE_OBJ_FLATTEN: pa(),
  NOTICE_DROP_ALLOW_COMPOSITION: pa()
  // 17
}, aP = {
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
  return Bh(aP[e], ...t);
}
const X0 = Or.__EXTEND_POINT__, Un = zh(X0), mt = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: X0,
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
function sn(e, ...t) {
  return co(e, null, process.env.NODE_ENV !== "production" ? { messages: sP, args: t } : void 0);
}
const sP = {
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
}, Qd = /* @__PURE__ */ fi("__translateVNode"), eh = /* @__PURE__ */ fi("__datetimeParts"), th = /* @__PURE__ */ fi("__numberParts"), as = /* @__PURE__ */ fi("__enableEmitter"), hl = /* @__PURE__ */ fi("__disableEmitter"), J0 = fi("__setPluralRules"), Q0 = /* @__PURE__ */ fi("__injectWithOption"), nh = /* @__PURE__ */ fi("__dispose");
function rh(e) {
  if (!bt(e))
    return e;
  for (const t in e)
    if (Hh(e, t))
      if (!t.includes("."))
        bt(e[t]) && rh(e[t]);
      else {
        const n = t.split("."), r = n.length - 1;
        let a = e, s = !1;
        for (let l = 0; l < r; l++) {
          if (n[l] in a || (a[n[l]] = {}), !bt(a[n[l]])) {
            process.env.NODE_ENV !== "production" && pn(ir(Qt.IGNORE_OBJ_FLATTEN, {
              key: n[l]
            })), s = !0;
            break;
          }
          a = a[n[l]];
        }
        s || (a[n[r]] = e[t], delete e[t]), bt(a[n[r]]) && rh(a[n[r]]);
      }
  return e;
}
function Ic(e, t) {
  const { messages: n, __i18n: r, messageResolver: a, flatJson: s } = t, l = Ge(n) ? n : Ft(r) ? {} : { [e]: {} };
  if (Ft(r) && r.forEach((u) => {
    if ("locale" in u && "resource" in u) {
      const { locale: f, resource: h } = u;
      f ? (l[f] = l[f] || {}, al(h, l[f])) : al(h, l);
    } else
      _e(u) && al(JSON.parse(u), l);
  }), a == null && s)
    for (const u in l)
      Hh(l, u) && rh(l[u]);
  return l;
}
const Tu = (e) => !bt(e) || Ft(e);
function al(e, t) {
  if (Tu(e) || Tu(t))
    throw sn(mt.INVALID_VALUE);
  for (const n in e)
    Hh(e, n) && (Tu(e[n]) || Tu(t[n]) ? t[n] = e[n] : al(e[n], t[n]));
}
function e1(e) {
  return e.type;
}
function t1(e, t, n) {
  let r = bt(t.messages) ? t.messages : {};
  "__i18nGlobal" in n && (r = Ic(e.locale.value, {
    messages: r,
    __i18n: n.__i18nGlobal
  }));
  const a = Object.keys(r);
  a.length && a.forEach((s) => {
    e.mergeLocaleMessage(s, r[s]);
  });
  {
    if (bt(t.datetimeFormats)) {
      const s = Object.keys(t.datetimeFormats);
      s.length && s.forEach((l) => {
        e.mergeDateTimeFormat(l, t.datetimeFormats[l]);
      });
    }
    if (bt(t.numberFormats)) {
      const s = Object.keys(t.numberFormats);
      s.length && s.forEach((l) => {
        e.mergeNumberFormat(l, t.numberFormats[l]);
      });
    }
  }
}
function d_(e) {
  return Te(aM, null, e, 0);
}
const h_ = "__INTLIFY_META__";
let p_ = 0;
function m_(e) {
  return (t, n, r, a) => e(n, r, xr() || void 0, a);
}
const oP = () => {
  const e = xr();
  let t = null;
  return e && (t = e1(e)[h_]) ? { [h_]: t } : null;
};
function Zh(e = {}, t) {
  const { __root: n, __injectWithOption: r } = e, a = n === void 0;
  let s = ct(e.inheritLocale) ? e.inheritLocale : !0;
  const l = Q(
    // prettier-ignore
    n && s ? n.locale.value : _e(e.locale) ? e.locale : Js
  ), u = Q(
    // prettier-ignore
    n && s ? n.fallbackLocale.value : _e(e.fallbackLocale) || Ft(e.fallbackLocale) || Ge(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : l.value
  ), f = Q(Ic(l.value, e)), h = Q(Ge(e.datetimeFormats) ? e.datetimeFormats : { [l.value]: {} }), d = Q(Ge(e.numberFormats) ? e.numberFormats : { [l.value]: {} });
  let m = n ? n.missingWarn : ct(e.missingWarn) || Ta(e.missingWarn) ? e.missingWarn : !0, v = n ? n.fallbackWarn : ct(e.fallbackWarn) || Ta(e.fallbackWarn) ? e.fallbackWarn : !0, g = n ? n.fallbackRoot : ct(e.fallbackRoot) ? e.fallbackRoot : !0, b = !!e.fallbackFormat, O = qt(e.missing) ? e.missing : null, S = qt(e.missing) ? m_(e.missing) : null, w = qt(e.postTranslation) ? e.postTranslation : null, x = n ? n.warnHtmlMessage : ct(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, A = !!e.escapeParameter;
  const E = n ? n.modifiers : Ge(e.modifiers) ? e.modifiers : {};
  let C = e.pluralRules || n && n.pluralRules, M;
  M = (() => {
    a && n_(null);
    const Z = {
      version: rP,
      locale: l.value,
      fallbackLocale: u.value,
      messages: f.value,
      modifiers: E,
      pluralRules: C,
      missing: S === null ? void 0 : S,
      missingWarn: m,
      fallbackWarn: v,
      fallbackFormat: b,
      unresolving: !0,
      postTranslation: w === null ? void 0 : w,
      warnHtmlMessage: x,
      escapeParameter: A,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    Z.datetimeFormats = h.value, Z.numberFormats = d.value, Z.__datetimeFormatters = Ge(M) ? M.__datetimeFormatters : void 0, Z.__numberFormatters = Ge(M) ? M.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (Z.__v_emitter = Ge(M) ? M.__v_emitter : void 0);
    const oe = F$(Z);
    return a && n_(oe), oe;
  })(), Ho(M, l.value, u.value);
  function F() {
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
  }), P = W({
    get: () => u.value,
    set: (Z) => {
      u.value = Z, M.fallbackLocale = u.value, Ho(M, l.value, Z);
    }
  }), j = W(() => f.value), Y = /* @__PURE__ */ W(() => h.value), J = /* @__PURE__ */ W(() => d.value);
  function he() {
    return qt(w) ? w : null;
  }
  function ue(Z) {
    w = Z, M.postTranslation = Z;
  }
  function ve() {
    return O;
  }
  function xe(Z) {
    Z !== null && (S = m_(Z)), O = Z, M.missing = S;
  }
  function Fe(Z, oe) {
    return Z !== "translate" || !oe.resolvedMessage;
  }
  const Ne = (Z, oe, zt, Mt, mn, ur) => {
    F();
    let kn;
    try {
      (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && t_(oP()), a || (M.fallbackContext = n ? R$() : void 0), kn = Z(M);
    } finally {
      (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && t_(null), a || (M.fallbackContext = void 0);
    }
    if (fn(kn) && kn === Pc) {
      const [An, Pr] = oe();
      if (process.env.NODE_ENV !== "production" && n && _e(An) && Fe(zt, Pr) && (g && (Cc(v, An) || Y0(m, An)) && pn(ir(Qt.FALLBACK_TO_ROOT, {
        key: An,
        type: zt
      })), process.env.NODE_ENV !== "production")) {
        const { __v_emitter: Zr } = M;
        Zr && g && Zr.emit("fallback", {
          type: zt,
          key: An,
          to: "global",
          groupId: `${zt}:${An}`
        });
      }
      return n && g ? Mt(n) : mn(An);
    } else {
      if (ur(kn))
        return kn;
      throw sn(mt.UNEXPECTED_RETURN_TYPE);
    }
  };
  function ie(...Z) {
    return Ne((oe) => Reflect.apply(s_, null, [oe, ...Z]), () => Kd(...Z), "translate", (oe) => Reflect.apply(oe.t, oe, [...Z]), (oe) => oe, (oe) => _e(oe));
  }
  function Ae(...Z) {
    const [oe, zt, Mt] = Z;
    if (Mt && !bt(Mt))
      throw sn(mt.INVALID_ARGUMENT);
    return ie(oe, zt, _n({ resolvedMessage: !0 }, Mt || {}));
  }
  function lt(...Z) {
    return Ne((oe) => Reflect.apply(l_, null, [oe, ...Z]), () => Zd(...Z), "datetime format", (oe) => Reflect.apply(oe.d, oe, [...Z]), () => Qu, (oe) => _e(oe));
  }
  function Ct(...Z) {
    return Ne((oe) => Reflect.apply(c_, null, [oe, ...Z]), () => Xd(...Z), "number format", (oe) => Reflect.apply(oe.n, oe, [...Z]), () => Qu, (oe) => _e(oe));
  }
  function Oe(Z) {
    return Z.map((oe) => _e(oe) || fn(oe) || ct(oe) ? d_(String(oe)) : oe);
  }
  const Je = {
    normalize: Oe,
    interpolate: (Z) => Z,
    type: "vnode"
  };
  function xt(...Z) {
    return Ne(
      (oe) => {
        let zt;
        const Mt = oe;
        try {
          Mt.processor = Je, zt = Reflect.apply(s_, null, [Mt, ...Z]);
        } finally {
          Mt.processor = null;
        }
        return zt;
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
    return Ne(
      (oe) => Reflect.apply(c_, null, [oe, ...Z]),
      () => Xd(...Z),
      "number format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (oe) => oe[th](...Z),
      () => [],
      (oe) => _e(oe) || Ft(oe)
    );
  }
  function le(...Z) {
    return Ne(
      (oe) => Reflect.apply(l_, null, [oe, ...Z]),
      () => Zd(...Z),
      "datetime format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (oe) => oe[eh](...Z),
      () => [],
      (oe) => _e(oe) || Ft(oe)
    );
  }
  function Pe(Z) {
    C = Z, M.pluralRules = C;
  }
  function ke(Z, oe) {
    if (!Z)
      return !1;
    const zt = _e(oe) ? oe : l.value, Mt = k(zt);
    return M.messageResolver(Mt, Z) !== null;
  }
  function re(Z) {
    let oe = null;
    const zt = C0(M, u.value, l.value);
    for (let Mt = 0; Mt < zt.length; Mt++) {
      const mn = f.value[zt[Mt]] || {}, ur = M.messageResolver(mn, Z);
      if (ur != null) {
        oe = ur;
        break;
      }
    }
    return oe;
  }
  function $(Z) {
    const oe = re(Z);
    return oe ?? (n ? n.tm(Z) || {} : {});
  }
  function k(Z) {
    return f.value[Z] || {};
  }
  function z(Z, oe) {
    f.value[Z] = oe, M.messages = f.value;
  }
  function fe(Z, oe) {
    f.value[Z] = f.value[Z] || {}, al(oe, f.value[Z]), M.messages = f.value;
  }
  function ge(Z) {
    return h.value[Z] || {};
  }
  function je(Z, oe) {
    h.value[Z] = oe, M.datetimeFormats = h.value, u_(M, Z, oe);
  }
  function Yt(Z, oe) {
    h.value[Z] = _n(h.value[Z] || {}, oe), M.datetimeFormats = h.value, u_(M, Z, oe);
  }
  function Et(Z) {
    return d.value[Z] || {};
  }
  function Tt(Z, oe) {
    d.value[Z] = oe, M.numberFormats = d.value, f_(M, Z, oe);
  }
  function rn(Z, oe) {
    d.value[Z] = _n(d.value[Z] || {}, oe), M.numberFormats = d.value, f_(M, Z, oe);
  }
  p_++, n && si && (Ue(n.locale, (Z) => {
    s && (l.value = Z, M.locale = Z, Ho(M, l.value, u.value));
  }), Ue(n.fallbackLocale, (Z) => {
    s && (u.value = Z, M.fallbackLocale = Z, Ho(M, l.value, u.value));
  }));
  const _t = {
    id: p_,
    locale: H,
    fallbackLocale: P,
    get inheritLocale() {
      return s;
    },
    set inheritLocale(Z) {
      s = Z, Z && n && (l.value = n.locale.value, u.value = n.fallbackLocale.value, Ho(M, l.value, u.value));
    },
    get availableLocales() {
      return Object.keys(f.value).sort();
    },
    messages: j,
    get modifiers() {
      return E;
    },
    get pluralRules() {
      return C || {};
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
      return b;
    },
    set fallbackFormat(Z) {
      b = Z, M.fallbackFormat = b;
    },
    get warnHtmlMessage() {
      return x;
    },
    set warnHtmlMessage(Z) {
      x = Z, M.warnHtmlMessage = Z;
    },
    get escapeParameter() {
      return A;
    },
    set escapeParameter(Z) {
      A = Z, M.escapeParameter = Z;
    },
    t: ie,
    getLocaleMessage: k,
    setLocaleMessage: z,
    mergeLocaleMessage: fe,
    getPostTranslationHandler: he,
    setPostTranslationHandler: ue,
    getMissingHandler: ve,
    setMissingHandler: xe,
    [J0]: Pe
  };
  return _t.datetimeFormats = Y, _t.numberFormats = J, _t.rt = Ae, _t.te = ke, _t.tm = $, _t.d = lt, _t.n = Ct, _t.getDateTimeFormat = ge, _t.setDateTimeFormat = je, _t.mergeDateTimeFormat = Yt, _t.getNumberFormat = Et, _t.setNumberFormat = Tt, _t.mergeNumberFormat = rn, _t[Q0] = r, _t[Qd] = xt, _t[eh] = le, _t[th] = ce, process.env.NODE_ENV !== "production" && (_t[as] = (Z) => {
    M.__v_emitter = Z;
  }, _t[hl] = () => {
    M.__v_emitter = void 0;
  }), _t;
}
function lP(e) {
  const t = _e(e.locale) ? e.locale : Js, n = _e(e.fallbackLocale) || Ft(e.fallbackLocale) || Ge(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t, r = qt(e.missing) ? e.missing : void 0, a = ct(e.silentTranslationWarn) || Ta(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0, s = ct(e.silentFallbackWarn) || Ta(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0, l = ct(e.fallbackRoot) ? e.fallbackRoot : !0, u = !!e.formatFallbackMessages, f = Ge(e.modifiers) ? e.modifiers : {}, h = e.pluralizationRules, d = qt(e.postTranslation) ? e.postTranslation : void 0, m = _e(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0, v = !!e.escapeParameterHtml, g = ct(e.sync) ? e.sync : !0;
  process.env.NODE_ENV !== "production" && e.formatter && pn(ir(Qt.NOT_SUPPORTED_FORMATTER)), process.env.NODE_ENV !== "production" && e.preserveDirectiveContent && pn(ir(Qt.NOT_SUPPORTED_PRESERVE_DIRECTIVE));
  let b = e.messages;
  if (Ge(e.sharedMessages)) {
    const C = e.sharedMessages;
    b = Object.keys(C).reduce((N, F) => {
      const H = N[F] || (N[F] = {});
      return _n(H, C[F]), N;
    }, b || {});
  }
  const { __i18n: O, __root: S, __injectWithOption: w } = e, x = e.datetimeFormats, A = e.numberFormats, E = e.flatJson;
  return {
    locale: t,
    fallbackLocale: n,
    messages: b,
    flatJson: E,
    datetimeFormats: x,
    numberFormats: A,
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
    __root: S,
    __injectWithOption: w
  };
}
function ih(e = {}, t) {
  {
    const n = Zh(lP(e)), { __extender: r } = e, a = {
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
        return process.env.NODE_ENV !== "production" && pn(ir(Qt.NOT_SUPPORTED_FORMATTER)), {
          interpolate() {
            return [];
          }
        };
      },
      set formatter(s) {
        process.env.NODE_ENV !== "production" && pn(ir(Qt.NOT_SUPPORTED_FORMATTER));
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
        return process.env.NODE_ENV !== "production" && pn(ir(Qt.NOT_SUPPORTED_PRESERVE_DIRECTIVE)), !0;
      },
      set preserveDirectiveContent(s) {
        process.env.NODE_ENV !== "production" && pn(ir(Qt.NOT_SUPPORTED_PRESERVE_DIRECTIVE));
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
        if (!_e(l))
          throw sn(mt.INVALID_ARGUMENT);
        const v = l;
        return _e(u) ? h.locale = u : Ft(u) ? d = u : Ge(u) && (m = u), Ft(f) ? d = f : Ge(f) && (m = f), Reflect.apply(n.t, n, [
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
        if (!_e(l))
          throw sn(mt.INVALID_ARGUMENT);
        const v = l;
        return _e(u) ? h.locale = u : fn(u) ? h.plural = u : Ft(u) ? d = u : Ge(u) && (m = u), _e(f) ? h.locale = f : Ft(f) ? d = f : Ge(f) && (m = f), Reflect.apply(n.t, n, [
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
        return process.env.NODE_ENV !== "production" && pn(ir(Qt.NOT_SUPPORTED_GET_CHOICE_INDEX)), -1;
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
function uP({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, a) => [
    ...r,
    // prettier-ignore
    ...a.type === qe ? a.children : [a]
  ], []) : t.reduce((n, r) => {
    const a = e[r];
    return a && (n[r] = a()), n;
  }, {});
}
function n1(e) {
  return qe;
}
const cP = /* @__PURE__ */ Re({
  /* eslint-disable */
  name: "i18n-t",
  props: _n({
    keypath: {
      type: String,
      required: !0
    },
    plural: {
      type: [Number, String],
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      validator: (e) => fn(e) || !isNaN(e)
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
      e.locale && (l.locale = e.locale), e.plural !== void 0 && (l.plural = _e(e.plural) ? +e.plural : e.plural);
      const u = uP(t, s), f = a[Qd](e.keypath, u, l), h = _n({}, r), d = _e(e.tag) || bt(e.tag) ? e.tag : n1();
      return wr(d, h, f);
    };
  }
}), Dd = cP;
function fP(e) {
  return Ft(e) && !_e(e[0]);
}
function r1(e, t, n, r) {
  const { slots: a, attrs: s } = t;
  return () => {
    const l = { part: !0 };
    let u = {};
    e.locale && (l.locale = e.locale), _e(e.format) ? l.key = e.format : bt(e.format) && (_e(e.format.key) && (l.key = e.format.key), u = Object.keys(e.format).reduce((v, g) => n.includes(g) ? _n({}, v, { [g]: e.format[g] }) : v, {}));
    const f = r(e.value, l, u);
    let h = [l.key];
    Ft(f) ? h = f.map((v, g) => {
      const b = a[v.type], O = b ? b({ [v.type]: v.value, index: g, parts: f }) : [v.value];
      return fP(O) && (O[0].key = `${v.type}-${g}`), O;
    }) : _e(f) && (h = [f]);
    const d = _n({}, s), m = _e(e.tag) || bt(e.tag) ? e.tag : n1();
    return wr(m, d, h);
  };
}
const dP = /* @__PURE__ */ Re({
  /* eslint-disable */
  name: "i18n-n",
  props: _n({
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
    return r1(e, t, q0, (...r) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[th](...r)
    ));
  }
}), v_ = dP, hP = /* @__PURE__ */ Re({
  /* eslint-disable */
  name: "i18n-d",
  props: _n({
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
    return r1(e, t, G0, (...r) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[eh](...r)
    ));
  }
}), g_ = hP;
function pP(e, t) {
  const n = e;
  if (e.mode === "composition")
    return n.__getInstance(t) || e.global;
  {
    const r = n.__getInstance(t);
    return r != null ? r.__composer : e.global.__composer;
  }
}
function mP(e) {
  const t = (l) => {
    const { instance: u, modifiers: f, value: h } = l;
    if (!u || !u.$)
      throw sn(mt.UNEXPECTED_ERROR);
    const d = pP(e, u.$);
    process.env.NODE_ENV !== "production" && f.preserve && pn(ir(Qt.NOT_SUPPORTED_PRESERVE));
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
  if (_e(e))
    return { path: e };
  if (Ge(e)) {
    if (!("path" in e))
      throw sn(mt.REQUIRED_VALUE, "path");
    return e;
  } else
    throw sn(mt.INVALID_VALUE);
}
function y_(e) {
  const { path: t, locale: n, args: r, choice: a, plural: s } = e, l = {}, u = r || {};
  return _e(n) && (l.locale = n), fn(a) && (l.plural = a), fn(s) && (l.plural = s), [t, u, l];
}
function vP(e, t, ...n) {
  const r = Ge(n[0]) ? n[0] : {}, a = !!r.useI18nComponentName, s = ct(r.globalInstall) ? r.globalInstall : !0;
  process.env.NODE_ENV !== "production" && s && a && pn(ir(Qt.COMPONENT_NAME_LEGACY_COMPATIBLE, {
    name: Dd.name
  })), s && ([a ? "i18n" : Dd.name, "I18nT"].forEach((l) => e.component(l, Dd)), [v_.name, "I18nN"].forEach((l) => e.component(l, v_)), [g_.name, "I18nD"].forEach((l) => e.component(l, g_))), e.directive("t", mP(t));
}
const Sd = {
  "vue-devtools-plugin-vue-i18n": "Vue I18n devtools",
  "vue-i18n-resource-inspector": "I18n Resources",
  "vue-i18n-timeline": "Vue I18n"
}, gP = {
  "vue-i18n-resource-inspector": "Search for scopes ..."
}, _P = {
  "vue-i18n-timeline": 16764185
}, i1 = "vue-i18n: composer properties";
let ah;
async function yP(e, t) {
  return new Promise((n, r) => {
    try {
      nP({
        id: "vue-devtools-plugin-vue-i18n",
        label: Sd[
          "vue-devtools-plugin-vue-i18n"
          /* VueDevToolsIDs.PLUGIN */
        ],
        packageName: "vue-i18n",
        homepage: "https://vue-i18n.intlify.dev",
        logo: "https://vue-i18n.intlify.dev/vue-i18n-devtools-logo.png",
        componentStateTypes: [i1],
        app: e
        // eslint-disable-line @typescript-eslint/no-explicit-any
      }, (a) => {
        ah = a, a.on.visitComponentTree(({ componentInstance: l, treeNode: u }) => {
          bP(l, u, t);
        }), a.on.inspectComponent(({ componentInstance: l, instanceData: u }) => {
          l.vnode.el && l.vnode.el.__VUE_I18N__ && u && (t.mode === "legacy" ? l.vnode.el.__VUE_I18N__ !== t.global.__composer && b_(u, l.vnode.el.__VUE_I18N__) : b_(u, l.vnode.el.__VUE_I18N__));
        }), a.addInspector({
          id: "vue-i18n-resource-inspector",
          label: Sd[
            "vue-i18n-resource-inspector"
            /* VueDevToolsIDs.CUSTOM_INSPECTOR */
          ],
          icon: "language",
          treeFilterPlaceholder: gP[
            "vue-i18n-resource-inspector"
            /* VueDevToolsIDs.CUSTOM_INSPECTOR */
          ]
        }), a.on.getInspectorTree((l) => {
          l.app === e && l.inspectorId === "vue-i18n-resource-inspector" && SP(l, t);
        });
        const s = /* @__PURE__ */ new Map();
        a.on.getInspectorState(async (l) => {
          if (l.app === e && l.inspectorId === "vue-i18n-resource-inspector")
            if (a.unhighlightElement(), TP(l, t), l.nodeId === "global") {
              if (!s.has(l.app)) {
                const [u] = await a.getComponentInstances(l.app);
                s.set(l.app, u);
              }
              a.highlightElement(s.get(l.app));
            } else {
              const u = xP(l.nodeId, t);
              u && a.highlightElement(u);
            }
        }), a.on.editInspectorState((l) => {
          l.app === e && l.inspectorId === "vue-i18n-resource-inspector" && AP(l, t);
        }), a.addTimelineLayer({
          id: "vue-i18n-timeline",
          label: Sd[
            "vue-i18n-timeline"
            /* VueDevToolsIDs.TIMELINE */
          ],
          color: _P[
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
function a1(e) {
  return e.type.name || e.type.displayName || e.type.__file || "Anonymous";
}
function bP(e, t, n) {
  const r = n.mode === "composition" ? n.global : n.global.__composer;
  if (e && e.vnode.el && e.vnode.el.__VUE_I18N__ && e.vnode.el.__VUE_I18N__ !== r) {
    const a = {
      label: `i18n (${a1(e)} Scope)`,
      textColor: 0,
      backgroundColor: 16764185
    };
    t.tags.push(a);
  }
}
function b_(e, t) {
  const n = i1;
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
    qt(r) && "source" in r ? t[n] = DP(r) : is(r) && r.loc && r.loc.source ? t[n] = r.loc.source : bt(r) ? t[n] = Jh(r) : t[n] = r;
  }), t;
}
const wP = {
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "&": "&amp;"
};
function OP(e) {
  return e.replace(/[<>"&]/g, EP);
}
function EP(e) {
  return wP[e] || e;
}
function DP(e) {
  return {
    _custom: {
      type: "function",
      display: `<span>ƒ</span> ${e.source ? `("${OP(e.source)}")` : "(?)"}`
    }
  };
}
function SP(e, t) {
  e.rootNodes.push({
    id: "global",
    label: "Global Scope"
  });
  const n = t.mode === "composition" ? t.global : t.global.__composer;
  for (const [r, a] of t.__instances) {
    const s = t.mode === "composition" ? a : a.__composer;
    n !== s && e.rootNodes.push({
      id: s.id.toString(),
      label: `${a1(r)} Scope`
    });
  }
}
function xP(e, t) {
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
function s1(e, t) {
  if (e === "global")
    return t.mode === "composition" ? t.global : t.global.__composer;
  {
    const n = Array.from(t.__instances.values()).find((r) => r.id.toString() === e);
    return n ? t.mode === "composition" ? n : n.__composer : null;
  }
}
function TP(e, t) {
  const n = s1(e.nodeId, t);
  return n && (e.state = kP(n)), null;
}
function kP(e) {
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
function AP(e, t) {
  const n = s1(e.nodeId, t);
  if (n) {
    const [r] = e.path;
    r === "locale" && _e(e.state.value) ? n.locale.value = e.state.value : r === "fallbackLocale" && (_e(e.state.value) || Ft(e.state.value) || bt(e.state.value)) ? n.fallbackLocale.value = e.state.value : r === "inheritLocale" && ct(e.state.value) && (n.inheritLocale = e.state.value);
  }
}
function MP(e, t, n) {
  return {
    beforeCreate() {
      const r = xr();
      if (!r)
        throw sn(mt.UNEXPECTED_ERROR);
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
      a.__i18nGlobal && t1(t, a, a), this.$t = (...s) => this.$i18n.t(...s), this.$rt = (...s) => this.$i18n.rt(...s), this.$tc = (...s) => this.$i18n.tc(...s), this.$te = (s, l) => this.$i18n.te(s, l), this.$d = (...s) => this.$i18n.d(...s), this.$n = (...s) => this.$i18n.n(...s), this.$tm = (s) => this.$i18n.tm(s), n.__setInstance(r, this.$i18n);
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
        throw sn(mt.UNEXPECTED_ERROR);
      const a = this.$i18n;
      process.env.NODE_ENV !== "production" && this.$el && this.$el.__VUE_I18N__ && (this.__v_emitter && (this.__v_emitter.off("*", pl), delete this.__v_emitter), this.$i18n && (a.__disableEmitter && a.__disableEmitter(), delete this.$el.__VUE_I18N__)), delete this.$t, delete this.$rt, delete this.$tc, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, a.__disposer && (a.__disposer(), delete a.__disposer, delete a.__extender), n.__deleteInstance(r), delete this.$i18n;
    }
  };
}
function w_(e, t) {
  e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[J0](t.pluralizationRules || e.pluralizationRules);
  const n = Ic(e.locale, {
    messages: t.messages,
    __i18n: t.__i18n
  });
  return Object.keys(n).forEach((r) => e.mergeLocaleMessage(r, n[r])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach((r) => e.mergeDateTimeFormat(r, t.datetimeFormats[r])), t.numberFormats && Object.keys(t.numberFormats).forEach((r) => e.mergeNumberFormat(r, t.numberFormats[r])), e;
}
const $P = /* @__PURE__ */ fi("global-vue-i18n");
function PP(e = {}, t) {
  const n = __VUE_I18N_LEGACY_API__ && ct(e.legacy) ? e.legacy : __VUE_I18N_LEGACY_API__, r = ct(e.globalInjection) ? e.globalInjection : !0, a = __VUE_I18N_LEGACY_API__ && n ? !!e.allowComposition : !0, s = /* @__PURE__ */ new Map(), [l, u] = CP(e, n), f = /* @__PURE__ */ fi(process.env.NODE_ENV !== "production" ? "vue-i18n" : "");
  process.env.NODE_ENV !== "production" && n && a && pn(ir(Qt.NOTICE_DROP_ALLOW_COMPOSITION));
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
      async install(g, ...b) {
        if (process.env.NODE_ENV !== "production" && (g.__VUE_I18N__ = v), g.__VUE_I18N_SYMBOL__ = f, g.provide(g.__VUE_I18N_SYMBOL__, v), Ge(b[0])) {
          const w = b[0];
          v.__composerExtend = w.__composerExtend, v.__vueI18nExtend = w.__vueI18nExtend;
        }
        let O = null;
        !n && r && (O = VP(g, v.global)), __VUE_I18N_FULL_INSTALL__ && vP(g, v, ...b), __VUE_I18N_LEGACY_API__ && n && g.mixin(MP(u, u.__composer, v));
        const S = g.unmount;
        if (g.unmount = () => {
          O && O(), v.dispose(), S();
        }, process.env.NODE_ENV !== "production") {
          if (!await yP(g, v))
            throw sn(mt.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN);
          const x = jh();
          if (n) {
            const A = u;
            A.__enableEmitter && A.__enableEmitter(x);
          } else {
            const A = u;
            A[as] && A[as](x);
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
    throw sn(mt.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw sn(mt.NOT_INSTALLED);
  const n = IP(t), r = LP(n), a = e1(t), s = NP(e, a);
  if (__VUE_I18N_LEGACY_API__ && n.mode === "legacy" && !e.__useComponent) {
    if (!n.allowComposition)
      throw sn(mt.NOT_AVAILABLE_IN_LEGACY_MODE);
    return WP(t, s, r, e);
  }
  if (s === "global")
    return t1(r, e, a), r;
  if (s === "parent") {
    let f = RP(n, t, e.__useComponent);
    return f == null && (process.env.NODE_ENV !== "production" && pn(ir(Qt.NOT_FOUND_PARENT_SCOPE)), f = r), f;
  }
  const l = n;
  let u = l.__getInstance(t);
  if (u == null) {
    const f = _n({}, e);
    "__i18n" in a && (f.__i18n = a.__i18n), r && (f.__root = r), u = Zh(f), l.__composerExtend && (u[nh] = l.__composerExtend(u)), YP(l, t, u), l.__setInstance(t, u);
  }
  return u;
}
function CP(e, t, n) {
  const r = h0();
  {
    const a = __VUE_I18N_LEGACY_API__ && t ? r.run(() => ih(e)) : r.run(() => Zh(e));
    if (a == null)
      throw sn(mt.UNEXPECTED_ERROR);
    return [r, a];
  }
}
function IP(e) {
  {
    const t = yt(e.isCE ? $P : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t)
      throw sn(e.isCE ? mt.NOT_INSTALLED_WITH_PROVIDE : mt.UNEXPECTED_ERROR);
    return t;
  }
}
function NP(e, t) {
  return $c(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function LP(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function RP(e, t, n = !1) {
  let r = null;
  const a = t.root;
  let s = FP(t, n);
  for (; s != null; ) {
    const l = e;
    if (e.mode === "composition")
      r = l.__getInstance(s);
    else if (__VUE_I18N_LEGACY_API__) {
      const u = l.__getInstance(s);
      u != null && (r = u.__composer, n && r && !r[Q0] && (r = null));
    }
    if (r != null || a === s)
      break;
    s = s.parent;
  }
  return r;
}
function FP(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function YP(e, t, n) {
  let r = null;
  zr(() => {
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
function WP(e, t, n, r = {}) {
  const a = t === "local", s = Wh(null);
  if (a && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n))
    throw sn(mt.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
  const l = ct(r.inheritLocale) ? r.inheritLocale : !_e(r.locale), u = Q(
    // prettier-ignore
    !a || l ? n.locale.value : _e(r.locale) ? r.locale : Js
  ), f = Q(
    // prettier-ignore
    !a || l ? n.fallbackLocale.value : _e(r.fallbackLocale) || Ft(r.fallbackLocale) || Ge(r.fallbackLocale) || r.fallbackLocale === !1 ? r.fallbackLocale : u.value
  ), h = Q(Ic(u.value, r)), d = Q(Ge(r.datetimeFormats) ? r.datetimeFormats : { [u.value]: {} }), m = Q(Ge(r.numberFormats) ? r.numberFormats : { [u.value]: {} }), v = a ? n.missingWarn : ct(r.missingWarn) || Ta(r.missingWarn) ? r.missingWarn : !0, g = a ? n.fallbackWarn : ct(r.fallbackWarn) || Ta(r.fallbackWarn) ? r.fallbackWarn : !0, b = a ? n.fallbackRoot : ct(r.fallbackRoot) ? r.fallbackRoot : !0, O = !!r.fallbackFormat, S = qt(r.missing) ? r.missing : null, w = qt(r.postTranslation) ? r.postTranslation : null, x = a ? n.warnHtmlMessage : ct(r.warnHtmlMessage) ? r.warnHtmlMessage : !0, A = !!r.escapeParameter, E = a ? n.modifiers : Ge(r.modifiers) ? r.modifiers : {}, C = r.pluralRules || a && n.pluralRules;
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
    set: (k) => {
      s.value && (s.value.locale.value = k), u.value = k;
    }
  }), F = W({
    get: () => s.value ? s.value.fallbackLocale.value : f.value,
    set: (k) => {
      s.value && (s.value.fallbackLocale.value = k), f.value = k;
    }
  }), H = W(() => s.value ? s.value.messages.value : h.value), P = W(() => d.value), j = W(() => m.value);
  function Y() {
    return s.value ? s.value.getPostTranslationHandler() : w;
  }
  function J(k) {
    s.value && s.value.setPostTranslationHandler(k);
  }
  function he() {
    return s.value ? s.value.getMissingHandler() : S;
  }
  function ue(k) {
    s.value && s.value.setMissingHandler(k);
  }
  function ve(k) {
    return M(), k();
  }
  function xe(...k) {
    return s.value ? ve(() => Reflect.apply(s.value.t, null, [...k])) : ve(() => "");
  }
  function Fe(...k) {
    return s.value ? Reflect.apply(s.value.rt, null, [...k]) : "";
  }
  function Ne(...k) {
    return s.value ? ve(() => Reflect.apply(s.value.d, null, [...k])) : ve(() => "");
  }
  function ie(...k) {
    return s.value ? ve(() => Reflect.apply(s.value.n, null, [...k])) : ve(() => "");
  }
  function Ae(k) {
    return s.value ? s.value.tm(k) : {};
  }
  function lt(k, z) {
    return s.value ? s.value.te(k, z) : !1;
  }
  function Ct(k) {
    return s.value ? s.value.getLocaleMessage(k) : {};
  }
  function Oe(k, z) {
    s.value && (s.value.setLocaleMessage(k, z), h.value[k] = z);
  }
  function st(k, z) {
    s.value && s.value.mergeLocaleMessage(k, z);
  }
  function Je(k) {
    return s.value ? s.value.getDateTimeFormat(k) : {};
  }
  function xt(k, z) {
    s.value && (s.value.setDateTimeFormat(k, z), d.value[k] = z);
  }
  function ce(k, z) {
    s.value && s.value.mergeDateTimeFormat(k, z);
  }
  function le(k) {
    return s.value ? s.value.getNumberFormat(k) : {};
  }
  function Pe(k, z) {
    s.value && (s.value.setNumberFormat(k, z), m.value[k] = z);
  }
  function ke(k, z) {
    s.value && s.value.mergeNumberFormat(k, z);
  }
  const re = {
    get id() {
      return s.value ? s.value.id : -1;
    },
    locale: N,
    fallbackLocale: F,
    messages: H,
    datetimeFormats: P,
    numberFormats: j,
    get inheritLocale() {
      return s.value ? s.value.inheritLocale : l;
    },
    set inheritLocale(k) {
      s.value && (s.value.inheritLocale = k);
    },
    get availableLocales() {
      return s.value ? s.value.availableLocales : Object.keys(h.value);
    },
    get modifiers() {
      return s.value ? s.value.modifiers : E;
    },
    get pluralRules() {
      return s.value ? s.value.pluralRules : C;
    },
    get isGlobal() {
      return s.value ? s.value.isGlobal : !1;
    },
    get missingWarn() {
      return s.value ? s.value.missingWarn : v;
    },
    set missingWarn(k) {
      s.value && (s.value.missingWarn = k);
    },
    get fallbackWarn() {
      return s.value ? s.value.fallbackWarn : g;
    },
    set fallbackWarn(k) {
      s.value && (s.value.missingWarn = k);
    },
    get fallbackRoot() {
      return s.value ? s.value.fallbackRoot : b;
    },
    set fallbackRoot(k) {
      s.value && (s.value.fallbackRoot = k);
    },
    get fallbackFormat() {
      return s.value ? s.value.fallbackFormat : O;
    },
    set fallbackFormat(k) {
      s.value && (s.value.fallbackFormat = k);
    },
    get warnHtmlMessage() {
      return s.value ? s.value.warnHtmlMessage : x;
    },
    set warnHtmlMessage(k) {
      s.value && (s.value.warnHtmlMessage = k);
    },
    get escapeParameter() {
      return s.value ? s.value.escapeParameter : A;
    },
    set escapeParameter(k) {
      s.value && (s.value.escapeParameter = k);
    },
    t: xe,
    getPostTranslationHandler: Y,
    setPostTranslationHandler: J,
    getMissingHandler: he,
    setMissingHandler: ue,
    rt: Fe,
    d: Ne,
    n: ie,
    tm: Ae,
    te: lt,
    getLocaleMessage: Ct,
    setLocaleMessage: Oe,
    mergeLocaleMessage: st,
    getDateTimeFormat: Je,
    setDateTimeFormat: xt,
    mergeDateTimeFormat: ce,
    getNumberFormat: le,
    setNumberFormat: Pe,
    mergeNumberFormat: ke
  };
  function $(k) {
    k.locale.value = u.value, k.fallbackLocale.value = f.value, Object.keys(h.value).forEach((z) => {
      k.mergeLocaleMessage(z, h.value[z]);
    }), Object.keys(d.value).forEach((z) => {
      k.mergeDateTimeFormat(z, d.value[z]);
    }), Object.keys(m.value).forEach((z) => {
      k.mergeNumberFormat(z, m.value[z]);
    }), k.escapeParameter = A, k.fallbackFormat = O, k.fallbackRoot = b, k.fallbackWarn = g, k.missingWarn = v, k.warnHtmlMessage = x;
  }
  return iM(() => {
    if (e.proxy == null || e.proxy.$i18n == null)
      throw sn(mt.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
    const k = s.value = e.proxy.$i18n.__composer;
    t === "global" ? (u.value = k.locale.value, f.value = k.fallbackLocale.value, h.value = k.messages.value, d.value = k.datetimeFormats.value, m.value = k.numberFormats.value) : a && $(k);
  }), re;
}
const UP = [
  "locale",
  "fallbackLocale",
  "availableLocales"
], O_ = ["t", "rt", "d", "n", "tm", "te"];
function VP(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  return UP.forEach((a) => {
    const s = Object.getOwnPropertyDescriptor(t, a);
    if (!s)
      throw sn(mt.UNEXPECTED_ERROR);
    const l = an(s.value) ? {
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
      throw sn(mt.UNEXPECTED_ERROR);
    Object.defineProperty(e.config.globalProperties, `$${a}`, s);
  }), () => {
    delete e.config.globalProperties.$i18n, O_.forEach((a) => {
      delete e.config.globalProperties[`$${a}`];
    });
  };
}
iP();
__INTLIFY_JIT_COMPILATION__ ? e_(B$) : e_(V$);
I$(m$);
N$(C0);
if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const e = Ci();
  e.__INTLIFY__ = !0, D$(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
const BP = {
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
}, HP = {
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
}, zP = {
  zh_TW: BP,
  en_US: HP
}, oi = PP({
  locale: "zh_TW",
  legacy: !1,
  globalInjection: !0,
  messages: zP
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
function jP(e, t = !1) {
  const { t: n } = oi.global, r = new Date(e.start).toLocaleString("zh-TW", {
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
const GP = ["top", "right", "bottom", "left"], ka = Math.min, tr = Math.max, ec = Math.round, ku = Math.floor, Aa = (e) => ({
  x: e,
  y: e
}), qP = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, KP = {
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
function ZP(e, t, n) {
  n === void 0 && (n = !1);
  const r = fo(e), a = np(e), s = tp(a);
  let l = a === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (l = tc(l)), [l, tc(l)];
}
function XP(e) {
  const t = tc(e);
  return [oh(e), t, oh(t)];
}
function oh(e) {
  return e.replace(/start|end/g, (t) => KP[t]);
}
function JP(e, t, n) {
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
function QP(e, t, n, r) {
  const a = fo(e);
  let s = JP(Vi(e), n === "start", r);
  return a && (s = s.map((l) => l + "-" + a), t && (s = s.concat(s.map(oh)))), s;
}
function tc(e) {
  return e.replace(/left|right|bottom|top/g, (t) => qP[t]);
}
function eC(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function o1(e) {
  return typeof e != "number" ? eC(e) : {
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
const tC = async (e, t, n) => {
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
  } = E_(h, r, f), v = r, g = {}, b = 0;
  for (let O = 0; O < u.length; O++) {
    const {
      name: S,
      fn: w
    } = u[O], {
      x,
      y: A,
      data: E,
      reset: C
    } = await w({
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
    if (d = x ?? d, m = A ?? m, g = {
      ...g,
      [S]: {
        ...g[S],
        ...E
      }
    }, C && b <= 50) {
      b++, typeof C == "object" && (C.placement && (v = C.placement), C.rects && (h = C.rects === !0 ? await l.getElementRects({
        reference: e,
        floating: t,
        strategy: a
      }) : C.rects), {
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
  } = Ui(t, e), b = o1(g), S = u[v ? m === "floating" ? "reference" : "floating" : m], w = nc(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(S))) == null || n ? S : S.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(u.floating)),
    boundary: h,
    rootBoundary: d,
    strategy: f
  })), x = m === "floating" ? {
    ...l.floating,
    x: r,
    y: a
  } : l.reference, A = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u.floating)), E = await (s.isElement == null ? void 0 : s.isElement(A)) ? await (s.getScale == null ? void 0 : s.getScale(A)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = nc(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: x,
    offsetParent: A,
    strategy: f
  }) : x);
  return {
    top: (w.top - C.top + b.top) / E.y,
    bottom: (C.bottom - w.bottom + b.bottom) / E.y,
    left: (w.left - C.left + b.left) / E.x,
    right: (C.right - w.right + b.right) / E.x
  };
}
const nC = (e) => ({
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
    const m = o1(d), v = {
      x: n,
      y: r
    }, g = np(a), b = tp(g), O = await l.getDimensions(h), S = g === "y", w = S ? "top" : "left", x = S ? "bottom" : "right", A = S ? "clientHeight" : "clientWidth", E = s.reference[b] + s.reference[g] - v[g] - s.floating[b], C = v[g] - s.reference[g], M = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(h));
    let N = M ? M[A] : 0;
    (!N || !await (l.isElement == null ? void 0 : l.isElement(M))) && (N = u.floating[A] || s.floating[b]);
    const F = E / 2 - C / 2, H = N / 2 - O[b] / 2 - 1, P = ka(m[w], H), j = ka(m[x], H), Y = P, J = N - O[b] - j, he = N / 2 - O[b] / 2 + F, ue = sh(Y, he, J), ve = !f.arrow && fo(a) != null && he != ue && s.reference[b] / 2 - (he < Y ? P : j) - O[b] / 2 < 0, xe = ve ? he < Y ? he - Y : he - J : 0;
    return {
      [g]: v[g] + xe,
      data: {
        [g]: ue,
        centerOffset: he - ue - xe,
        ...ve && {
          alignmentOffset: xe
        }
      },
      reset: ve
    };
  }
}), rC = function(e) {
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
        fallbackAxisSideDirection: b = "none",
        flipAlignment: O = !0,
        ...S
      } = Ui(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const w = Vi(a), x = Vi(u) === u, A = await (f.isRTL == null ? void 0 : f.isRTL(h.floating)), E = v || (x || !O ? [tc(u)] : XP(u));
      !v && b !== "none" && E.push(...QP(u, O, b, A));
      const C = [u, ...E], M = await ml(t, S), N = [];
      let F = ((r = s.flip) == null ? void 0 : r.overflows) || [];
      if (d && N.push(M[w]), m) {
        const Y = ZP(a, l, A);
        N.push(M[Y[0]], M[Y[1]]);
      }
      if (F = [...F, {
        placement: a,
        overflows: N
      }], !N.every((Y) => Y <= 0)) {
        var H, P;
        const Y = (((H = s.flip) == null ? void 0 : H.index) || 0) + 1, J = C[Y];
        if (J)
          return {
            data: {
              index: Y,
              overflows: F
            },
            reset: {
              placement: J
            }
          };
        let he = (P = F.filter((ue) => ue.overflows[0] <= 0).sort((ue, ve) => ue.overflows[1] - ve.overflows[1])[0]) == null ? void 0 : P.placement;
        if (!he)
          switch (g) {
            case "bestFit": {
              var j;
              const ue = (j = F.map((ve) => [ve.placement, ve.overflows.filter((xe) => xe > 0).reduce((xe, Fe) => xe + Fe, 0)]).sort((ve, xe) => ve[1] - xe[1])[0]) == null ? void 0 : j[0];
              ue && (he = ue);
              break;
            }
            case "initialPlacement":
              he = u;
              break;
          }
        if (a !== he)
          return {
            reset: {
              placement: he
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
  return GP.some((t) => e[t] >= 0);
}
const iC = function(e) {
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
async function aC(e, t) {
  const {
    placement: n,
    platform: r,
    elements: a
  } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(a.floating)), l = Vi(n), u = fo(n), f = ho(n) === "y", h = ["left", "top"].includes(l) ? -1 : 1, d = s && f ? -1 : 1, m = Ui(t, e);
  let {
    mainAxis: v,
    crossAxis: g,
    alignmentAxis: b
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
  return u && typeof b == "number" && (g = u === "end" ? b * -1 : b), f ? {
    x: g * d,
    y: v * h
  } : {
    x: v * h,
    y: g * d
  };
}
const sC = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r
      } = t, a = await aC(t, e);
      return {
        x: n + a.x,
        y: r + a.y,
        data: a
      };
    }
  };
}, oC = function(e) {
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
          fn: (S) => {
            let {
              x: w,
              y: x
            } = S;
            return {
              x: w,
              y: x
            };
          }
        },
        ...f
      } = Ui(e, t), h = {
        x: n,
        y: r
      }, d = await ml(t, f), m = ho(Vi(a)), v = ep(m);
      let g = h[v], b = h[m];
      if (s) {
        const S = v === "y" ? "top" : "left", w = v === "y" ? "bottom" : "right", x = g + d[S], A = g - d[w];
        g = sh(x, g, A);
      }
      if (l) {
        const S = m === "y" ? "top" : "left", w = m === "y" ? "bottom" : "right", x = b + d[S], A = b - d[w];
        b = sh(x, b, A);
      }
      const O = u.fn({
        ...t,
        [v]: g,
        [m]: b
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
}, lC = function(e) {
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
      let g = d[v], b = d[m];
      const O = Ui(u, t), S = typeof O == "number" ? {
        mainAxis: O,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...O
      };
      if (f) {
        const A = v === "y" ? "height" : "width", E = s.reference[v] - s.floating[A] + S.mainAxis, C = s.reference[v] + s.reference[A] - S.mainAxis;
        g < E ? g = E : g > C && (g = C);
      }
      if (h) {
        var w, x;
        const A = v === "y" ? "width" : "height", E = ["top", "left"].includes(Vi(a)), C = s.reference[m] - s.floating[A] + (E && ((w = l.offset) == null ? void 0 : w[m]) || 0) + (E ? 0 : S.crossAxis), M = s.reference[m] + s.reference[A] + (E ? 0 : ((x = l.offset) == null ? void 0 : x[m]) || 0) - (E ? S.crossAxis : 0);
        b < C ? b = C : b > M && (b = M);
      }
      return {
        [v]: g,
        [m]: b
      };
    }
  };
}, uC = function(e) {
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
      let b, O;
      h === "top" || h === "bottom" ? (b = h, O = d === (await (a.isRTL == null ? void 0 : a.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (O = h, b = d === "end" ? "top" : "bottom");
      const S = g - f[b], w = v - f[O], x = !t.middlewareData.shift;
      let A = S, E = w;
      if (m) {
        const M = v - f.left - f.right;
        E = d || x ? ka(w, M) : M;
      } else {
        const M = g - f.top - f.bottom;
        A = d || x ? ka(S, M) : M;
      }
      if (x && !d) {
        const M = tr(f.left, 0), N = tr(f.right, 0), F = tr(f.top, 0), H = tr(f.bottom, 0);
        m ? E = v - 2 * (M !== 0 || N !== 0 ? M + N : tr(f.left, f.right)) : A = g - 2 * (F !== 0 || H !== 0 ? F + H : tr(f.top, f.bottom));
      }
      await l({
        ...t,
        availableWidth: E,
        availableHeight: A
      });
      const C = await a.getDimensions(s.floating);
      return v !== C.width || g !== C.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Ma(e) {
  return l1(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function sr(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ki(e) {
  var t;
  return (t = (l1(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function l1(e) {
  return e instanceof Node || e instanceof sr(e).Node;
}
function Bi(e) {
  return e instanceof Element || e instanceof sr(e).Element;
}
function li(e) {
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
function cC(e) {
  return ["table", "td", "th"].includes(Ma(e));
}
function rp(e) {
  const t = ip(), n = Tr(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function fC(e) {
  let t = Qs(e);
  for (; li(t) && !Nc(t); ) {
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
function u1(e) {
  const t = Qs(e);
  return Nc(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : li(t) && Tl(t) ? t : u1(t);
}
function vl(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const a = u1(e), s = a === ((r = e.ownerDocument) == null ? void 0 : r.body), l = sr(a);
  return s ? t.concat(l, l.visualViewport || [], Tl(a) ? a : [], l.frameElement && n ? vl(l.frameElement) : []) : t.concat(a, vl(a, [], n));
}
function c1(e) {
  const t = Tr(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const a = li(e), s = a ? e.offsetWidth : n, l = a ? e.offsetHeight : r, u = ec(n) !== s || ec(r) !== l;
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
  if (!li(t))
    return Aa(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: a,
    $: s
  } = c1(t);
  let l = (s ? ec(n.width) : n.width) / r, u = (s ? ec(n.height) : n.height) / a;
  return (!l || !Number.isFinite(l)) && (l = 1), (!u || !Number.isFinite(u)) && (u = 1), {
    x: l,
    y: u
  };
}
const dC = /* @__PURE__ */ Aa(0);
function f1(e) {
  const t = sr(e);
  return !ip() || !t.visualViewport ? dC : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function hC(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== sr(e) ? !1 : t;
}
function ss(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const a = e.getBoundingClientRect(), s = ap(e);
  let l = Aa(1);
  t && (r ? Bi(r) && (l = Bs(r)) : l = Bs(e));
  const u = hC(s, n, r) ? f1(s) : Aa(0);
  let f = (a.left + u.x) / l.x, h = (a.top + u.y) / l.y, d = a.width / l.x, m = a.height / l.y;
  if (s) {
    const v = sr(s), g = r && Bi(r) ? sr(r) : r;
    let b = v.frameElement;
    for (; b && r && g !== v; ) {
      const O = Bs(b), S = b.getBoundingClientRect(), w = Tr(b), x = S.left + (b.clientLeft + parseFloat(w.paddingLeft)) * O.x, A = S.top + (b.clientTop + parseFloat(w.paddingTop)) * O.y;
      f *= O.x, h *= O.y, d *= O.x, m *= O.y, f += x, h += A, b = sr(b).frameElement;
    }
  }
  return nc({
    width: d,
    height: m,
    x: f,
    y: h
  });
}
function pC(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: r
  } = e;
  const a = li(n), s = Ki(n);
  if (n === s)
    return t;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = Aa(1);
  const f = Aa(0);
  if ((a || !a && r !== "fixed") && ((Ma(n) !== "body" || Tl(s)) && (l = Lc(n)), li(n))) {
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
function mC(e) {
  return Array.from(e.getClientRects());
}
function d1(e) {
  return ss(Ki(e)).left + Lc(e).scrollLeft;
}
function vC(e) {
  const t = Ki(e), n = Lc(e), r = e.ownerDocument.body, a = tr(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), s = tr(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let l = -n.scrollLeft + d1(e);
  const u = -n.scrollTop;
  return Tr(r).direction === "rtl" && (l += tr(t.clientWidth, r.clientWidth) - a), {
    width: a,
    height: s,
    x: l,
    y: u
  };
}
function gC(e, t) {
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
function _C(e, t) {
  const n = ss(e, !0, t === "fixed"), r = n.top + e.clientTop, a = n.left + e.clientLeft, s = li(e) ? Bs(e) : Aa(1), l = e.clientWidth * s.x, u = e.clientHeight * s.y, f = a * s.x, h = r * s.y;
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
    r = gC(e, n);
  else if (t === "document")
    r = vC(Ki(e));
  else if (Bi(t))
    r = _C(t, n);
  else {
    const a = f1(e);
    r = {
      ...t,
      x: t.x - a.x,
      y: t.y - a.y
    };
  }
  return nc(r);
}
function h1(e, t) {
  const n = Qs(e);
  return n === t || !Bi(n) || Nc(n) ? !1 : Tr(n).position === "fixed" || h1(n, t);
}
function yC(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = vl(e, [], !1).filter((u) => Bi(u) && Ma(u) !== "body"), a = null;
  const s = Tr(e).position === "fixed";
  let l = s ? Qs(e) : e;
  for (; Bi(l) && !Nc(l); ) {
    const u = Tr(l), f = rp(l);
    !f && u.position === "fixed" && (a = null), (s ? !f && !a : !f && u.position === "static" && !!a && ["absolute", "fixed"].includes(a.position) || Tl(l) && !f && h1(e, l)) ? r = r.filter((d) => d !== l) : a = u, l = Qs(l);
  }
  return t.set(e, r), r;
}
function bC(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: a
  } = e;
  const l = [...n === "clippingAncestors" ? yC(t, this._c) : [].concat(n), r], u = l[0], f = l.reduce((h, d) => {
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
function wC(e) {
  return c1(e);
}
function OC(e, t, n) {
  const r = li(t), a = Ki(t), s = n === "fixed", l = ss(e, !0, s, t);
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
      a && (f.x = d1(a));
  return {
    x: l.left + u.scrollLeft - f.x,
    y: l.top + u.scrollTop - f.y,
    width: l.width,
    height: l.height
  };
}
function k_(e, t) {
  return !li(e) || Tr(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function p1(e, t) {
  const n = sr(e);
  if (!li(e))
    return n;
  let r = k_(e, t);
  for (; r && cC(r) && Tr(r).position === "static"; )
    r = k_(r, t);
  return r && (Ma(r) === "html" || Ma(r) === "body" && Tr(r).position === "static" && !rp(r)) ? n : r || fC(e) || n;
}
const EC = async function(e) {
  let {
    reference: t,
    floating: n,
    strategy: r
  } = e;
  const a = this.getOffsetParent || p1, s = this.getDimensions;
  return {
    reference: OC(t, await a(n), r),
    floating: {
      x: 0,
      y: 0,
      ...await s(n)
    }
  };
};
function DC(e) {
  return Tr(e).direction === "rtl";
}
const SC = {
  convertOffsetParentRelativeRectToViewportRelativeRect: pC,
  getDocumentElement: Ki,
  getClippingRect: bC,
  getOffsetParent: p1,
  getElementRects: EC,
  getClientRects: mC,
  getDimensions: wC,
  getScale: Bs,
  isElement: Bi,
  isRTL: DC
};
function xC(e, t) {
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
    const g = ku(d), b = ku(a.clientWidth - (h + m)), O = ku(a.clientHeight - (d + v)), S = ku(h), x = {
      rootMargin: -g + "px " + -b + "px " + -O + "px " + -S + "px",
      threshold: tr(0, ka(1, f)) || 1
    };
    let A = !0;
    function E(C) {
      const M = C[0].intersectionRatio;
      if (M !== f) {
        if (!A)
          return l();
        M ? l(!1, M) : r = setTimeout(() => {
          l(!1, 1e-7);
        }, 100);
      }
      A = !1;
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
function TC(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: a = !0,
    ancestorResize: s = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: u = typeof IntersectionObserver == "function",
    animationFrame: f = !1
  } = r, h = ap(e), d = a || s ? [...h ? vl(h) : [], ...vl(t)] : [];
  d.forEach((w) => {
    a && w.addEventListener("scroll", n, {
      passive: !0
    }), s && w.addEventListener("resize", n);
  });
  const m = h && u ? xC(h, n) : null;
  let v = -1, g = null;
  l && (g = new ResizeObserver((w) => {
    let [x] = w;
    x && x.target === h && g && (g.unobserve(t), cancelAnimationFrame(v), v = requestAnimationFrame(() => {
      g && g.observe(t);
    })), n();
  }), h && !f && g.observe(h), g.observe(t));
  let b, O = f ? ss(e) : null;
  f && S();
  function S() {
    const w = ss(e);
    O && (w.x !== O.x || w.y !== O.y || w.width !== O.width || w.height !== O.height) && n(), O = w, b = requestAnimationFrame(S);
  }
  return n(), () => {
    d.forEach((w) => {
      a && w.removeEventListener("scroll", n), s && w.removeEventListener("resize", n);
    }), m && m(), g && g.disconnect(), g = null, f && cancelAnimationFrame(b);
  };
}
const kC = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), a = {
    platform: SC,
    ...n
  }, s = {
    ...a.platform,
    _c: r
  };
  return tC(e, t, {
    ...a,
    platform: s
  });
};
function lh(e) {
  var t;
  return (t = e == null ? void 0 : e.$el) != null ? t : e;
}
function AC(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const n = lh(y(e.element));
      return n == null ? {} : nC({
        element: n,
        padding: e.padding
      }).fn(t);
    }
  };
}
function m1(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function A_(e, t) {
  const n = m1(e);
  return Math.round(t * n) / n;
}
function MC(e, t, n) {
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
  }), h = W(() => lh(e.value)), d = W(() => lh(t.value)), m = Q(0), v = Q(0), g = Q(u.value), b = Q(l.value), O = Wh({}), S = Q(!1), w = W(() => {
    const N = {
      position: g.value,
      left: "0",
      top: "0"
    };
    if (!d.value)
      return N;
    const F = A_(d.value, m.value), H = A_(d.value, v.value);
    return f.value ? {
      ...N,
      transform: "translate(" + F + "px, " + H + "px)",
      ...m1(d.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: g.value,
      left: F + "px",
      top: H + "px"
    };
  });
  let x;
  function A() {
    h.value == null || d.value == null || kC(h.value, d.value, {
      middleware: s.value,
      placement: l.value,
      strategy: u.value
    }).then((N) => {
      m.value = N.x, v.value = N.y, g.value = N.strategy, b.value = N.placement, O.value = N.middlewareData, S.value = !0;
    });
  }
  function E() {
    typeof x == "function" && (x(), x = void 0);
  }
  function C() {
    if (E(), r === void 0) {
      A();
      return;
    }
    if (h.value != null && d.value != null) {
      x = r(h.value, d.value, A);
      return;
    }
  }
  function M() {
    a.value || (S.value = !1);
  }
  return Ue([s, l, u], A, {
    flush: "sync"
  }), Ue([h, d], C, {
    flush: "sync"
  }), Ue(a, M, {
    flush: "sync"
  }), Uh() && Vh(E), {
    x: Ps(m),
    y: Ps(v),
    strategy: Ps(g),
    placement: Ps(b),
    middlewareData: Ps(O),
    isPositioned: Ps(S),
    floatingStyles: w,
    update: A
  };
}
function di(e, t) {
  const n = typeof e == "string" && !t ? `${e}Context` : t, r = Symbol(n);
  return [(a) => {
    const s = yt(r, a);
    if (s || s === null)
      return s;
    throw new Error(
      `Injection \`${r.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (a) => (Wr(r, a), a)];
}
function v1(e, t, n) {
  const r = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && r.addEventListener(e, t, { once: !0 }), r.dispatchEvent(a);
}
function $C(e, t) {
  var n;
  const r = Wh();
  return Gn(() => {
    r.value = e();
  }, {
    ...t,
    flush: (n = t == null ? void 0 : t.flush) != null ? n : "sync"
  }), oM(r);
}
function PC(e, t) {
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
function g1(e) {
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
const po = typeof window < "u" && typeof document < "u", CC = (e) => typeof e < "u", IC = Object.prototype.toString, NC = (e) => IC.call(e) === "[object Object]", LC = () => {
};
function RC(e, t = 1e4) {
  return v0((n, r) => {
    let a = Ja(e), s;
    const l = () => setTimeout(() => {
      a = Ja(e), r();
    }, Ja(t));
    return g1(() => {
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
const _1 = po ? window : void 0;
function FC(...e) {
  let t, n, r, a;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, r, a] = e, t = _1) : [t, n, r, a] = e, !t)
    return LC;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const s = [], l = () => {
    s.forEach((d) => d()), s.length = 0;
  }, u = (d, m, v, g) => (d.addEventListener(m, v, g), () => d.removeEventListener(m, v, g)), f = Ue(
    () => [cs(t), Ja(a)],
    ([d, m]) => {
      if (l(), !d)
        return;
      const v = NC(m) ? { ...m } : m;
      s.push(
        ...n.flatMap((g) => r.map((b) => u(d, g, b, v)))
      );
    },
    { immediate: !0, flush: "post" }
  ), h = () => {
    f(), l();
  };
  return g1(h), h;
}
function YC(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function WC(...e) {
  let t, n, r = {};
  e.length === 3 ? (t = e[0], n = e[1], r = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], r = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: a = _1,
    eventName: s = "keydown",
    passive: l = !1,
    dedupe: u = !1
  } = r, f = YC(t);
  return FC(a, s, (h) => {
    h.repeat && Ja(u) || f(h) && n(h);
  }, l);
}
function UC() {
  const e = Q(!1);
  return xr() && zr(() => {
    e.value = !0;
  }), e;
}
function VC(e) {
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
  } = r, g = xr(), b = n || (g == null ? void 0 : g.emit) || ((a = g == null ? void 0 : g.$emit) == null ? void 0 : a.bind(g)) || ((l = (s = g == null ? void 0 : g.proxy) == null ? void 0 : s.$emit) == null ? void 0 : l.bind(g == null ? void 0 : g.proxy));
  let O = h;
  t || (t = "modelValue"), O = O || `update:${t.toString()}`;
  const S = (A) => u ? typeof u == "function" ? u(A) : VC(A) : A, w = () => CC(e[t]) ? S(e[t]) : m, x = (A) => {
    v ? v(A) && b(O, A) : b(O, A);
  };
  if (f) {
    const A = w(), E = Q(A);
    let C = !1;
    return Ue(
      () => e[t],
      (M) => {
        C || (C = !0, E.value = S(M), En(() => C = !1));
      }
    ), Ue(
      E,
      (M) => {
        !C && (M !== e[t] || d) && x(M);
      },
      { deep: d }
    ), E;
  } else
    return W({
      get() {
        return w();
      },
      set(A) {
        x(A);
      }
    });
}
function op(e) {
  return e ? e.flatMap((t) => t.type === qe ? op(t.children) : [t]) : [];
}
function BC(e, t, n, r = {}) {
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
  } = r, [m, v, g, b, O, S] = [
    e.key === "ArrowRight",
    e.key === "ArrowLeft",
    e.key === "ArrowUp",
    e.key === "ArrowDown",
    e.key === "Home",
    e.key === "End"
  ], w = g || b, x = m || v;
  if (!O && !S && (!w && !x || a === "vertical" && x || a === "horizontal" && w))
    return null;
  const A = n ? Array.from(n.querySelectorAll(`[${s}]`)) : l;
  if (!A.length)
    return null;
  h && e.preventDefault();
  let E = null;
  return x || w ? E = y1(A, t, {
    goForward: w ? b : f === "ltr" ? m : v,
    loop: u
  }) : O ? E = A.at(0) || null : S && (E = A.at(-1) || null), d && (E == null || E.focus()), E;
}
function y1(e, t, { goForward: n, loop: r }, a = e.length) {
  if (--a === 0)
    return null;
  const s = e.indexOf(t), l = n ? s + 1 : s - 1;
  if (!r && (l < 0 || l >= e.length))
    return null;
  const u = (l + e.length) % e.length, f = e[u];
  return f ? f.hasAttribute("disabled") && f.getAttribute("disabled") !== "false" ? y1(
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
function HC(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((n, r) => uh(n, r, "", e), {})
  );
}
const zC = HC(), [b1, mee] = di("ConfigProvider"), jC = Rc(() => Q()), GC = Rc(() => Q(0));
function w1(e) {
  const t = b1({
    scrollBody: Q(!0)
  }), n = GC(), r = jC(), a = Q(e), s = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = r.value ?? "", r.value = void 0;
  };
  return e && n.value++, Ue(a, (l) => {
    var u;
    if (po && l) {
      r.value === void 0 && (r.value = document.body.style.overflow);
      const f = window.innerWidth - document.documentElement.clientWidth, h = { padding: f, margin: 0 }, d = (u = t.scrollBody) != null && u.value ? typeof t.scrollBody.value == "object" ? zC({
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
const qC = "data-radix-vue-collection-item";
function O1(e, t = qC) {
  const n = e ?? Symbol();
  return { createCollection: (r) => {
    const a = Q([]);
    function s() {
      const l = cs(r);
      return l ? a.value = Array.from(
        l.querySelectorAll(`[${t}]:not([data-disabled=true])`)
      ) : a.value = [];
    }
    return lM(() => {
      a.value = [];
    }), zr(s), uM(s), Ue(() => r == null ? void 0 : r.value, s, { immediate: !0 }), Wr(n, a), a;
  }, injectCollection: () => yt(n, Q([])) };
}
function KC(e) {
  const t = b1({
    dir: Q("ltr")
  });
  return W(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.dir) == null ? void 0 : n.value) || "ltr";
  });
}
function ZC(e) {
  const t = xr(), n = t == null ? void 0 : t.type.emits, r = {};
  return n != null && n.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), n == null || n.forEach((a) => {
    r[cM(g0(a))] = (...s) => e(a, ...s);
  }), r;
}
let Td = 0;
function E1() {
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
function XC(e) {
  return W(() => {
    var t;
    return Ja(e) ? !!((t = cs(e)) != null && t.closest("form")) : !0;
  });
}
function D1(e) {
  const t = xr(), n = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((r, a) => {
    const s = (t == null ? void 0 : t.type.props[a]).default;
    return s !== void 0 && (r[a] = s), r;
  }, {});
  return PC(() => ({ ...e }), () => {
    const r = {}, a = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(a).forEach((s) => {
      r[g0(s)] = a[s];
    }), Object.keys({ ...n, ...r }).reduce((s, l) => (e[l] !== void 0 && (s[l] = e[l]), s), {});
  });
}
function mo(e, t) {
  const n = D1(e), r = t ? ZC(t) : {};
  return W(() => ({
    ...n.value,
    ...r
  }));
}
function JC() {
  const e = xr();
  function t(n) {
    typeof n == "object" && (e.exposed = n, e.exposeProxy = n);
  }
  return t;
}
var QC = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Is = /* @__PURE__ */ new WeakMap(), Au = /* @__PURE__ */ new WeakMap(), Mu = {}, kd = 0, S1 = function(e) {
  return e && (e.host || S1(e.parentNode));
}, e2 = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = S1(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, t2 = function(e, t, n, r) {
  var a = e2(t, Array.isArray(e) ? e : [e]);
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
        var g = v.getAttribute(r), b = g !== null && g !== "false", O = (Is.get(v) || 0) + 1, S = (s.get(v) || 0) + 1;
        Is.set(v, O), s.set(v, S), l.push(v), O === 1 && b && Au.set(v, !0), S === 1 && v.setAttribute(n, "true"), b || v.setAttribute(r, "true");
      }
    });
  };
  return d(t), u.clear(), kd++, function() {
    l.forEach(function(m) {
      var v = Is.get(m) - 1, g = s.get(m) - 1;
      Is.set(m, v), s.set(m, g), v || (Au.has(m) || m.removeAttribute(r), Au.delete(m)), g || m.removeAttribute(n);
    }), kd--, kd || (Is = /* @__PURE__ */ new WeakMap(), Is = /* @__PURE__ */ new WeakMap(), Au = /* @__PURE__ */ new WeakMap(), Mu = {});
  };
}, n2 = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), a = t || QC(e);
  return a ? (r.push.apply(r, Array.from(a.querySelectorAll("[aria-live]"))), t2(r, a, n, "aria-hidden")) : function() {
    return null;
  };
};
function r2(e) {
  let t;
  Ue(() => cs(e), (n) => {
    n ? t = n2(n) : t && t();
  }), Pa(() => {
    t && t();
  });
}
const i2 = Rc(() => ({ count: Q(0) }));
function a2(e) {
  const { count: t } = i2();
  return e || t.value++, e || `radix-${t.value}`;
}
function s2(e) {
  const t = Q(), n = W(() => {
    var a;
    return ((a = t.value) == null ? void 0 : a.width) ?? 0;
  }), r = W(() => {
    var a;
    return ((a = t.value) == null ? void 0 : a.height) ?? 0;
  });
  return zr(() => {
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
function o2(e, t) {
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
function l2(e) {
  const t = RC("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (n) => {
      var r, a;
      t.value = t.value + n;
      const s = e.value, l = document.activeElement, u = ((a = (r = s.find((m) => m === l)) == null ? void 0 : r.textContent) == null ? void 0 : a.trim()) ?? "", f = s.map((m) => {
        var v;
        return ((v = m.textContent) == null ? void 0 : v.trim()) ?? "";
      }), h = c2(f, t.value, u), d = s.find(
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
function u2(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function c2(e, t, n) {
  const r = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = u2(e, Math.max(a, 0));
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
        const f = Zt(t, l.props ?? {});
        t.class && (a = l.props) != null && a.class && delete l.props.class;
        const h = sM(l, f);
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
function jr() {
  const e = Q(), t = W(() => {
    var n, r;
    return ["#text", "#comment"].includes((n = e.value) == null ? void 0 : n.$el.nodeName) ? (r = e.value) == null ? void 0 : r.$el.nextElementSibling : cs(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
function f2(e, t) {
  const n = Q({}), r = Q("none"), a = e.value ? "mounted" : "unmounted", { state: s, dispatch: l } = o2(a, {
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
      const b = v !== m;
      if (await En(), b) {
        const O = r.value, S = $u(t.value);
        m ? l("MOUNT") : S === "none" || ((g = n.value) == null ? void 0 : g.display) === "none" ? l("UNMOUNT") : l(v && O !== S ? "ANIMATION_OUT" : "UNMOUNT");
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
const x1 = Re({
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
    const { present: a, forceMount: s } = oo(e), l = Q(), { isPresent: u } = f2(a, l);
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
}), d2 = /* @__PURE__ */ Re({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = UC();
    return (n, r) => y(t) || n.forceMount ? (R(), Ke(_0, {
      key: 0,
      to: n.to,
      disabled: n.disabled
    }, [
      nt(n.$slots, "default")
    ], 8, ["to", "disabled"])) : we("", !0);
  }
}), h2 = "dismissableLayer.pointerDownOutside", p2 = "dismissableLayer.focusOutside";
function T1(e, t) {
  const n = t.closest(
    "[data-dismissable-layer]"
  ), r = e.querySelector(
    "[data-dismissable-layer]"
  ), a = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(n && r === n || a.indexOf(r) < a.indexOf(n));
}
function m2(e, t) {
  var n;
  const r = ((n = t == null ? void 0 : t.value) == null ? void 0 : n.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), a = Q(!1), s = Q(() => {
  });
  return Gn((l) => {
    if (!po)
      return;
    const u = async (h) => {
      if (t != null && t.value) {
        if (T1(t.value, h.target)) {
          a.value = !1;
          return;
        }
        if (h.target && !a.value) {
          let d = function() {
            v1(
              h2,
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
function v2(e, t) {
  var n;
  const r = ((n = t == null ? void 0 : t.value) == null ? void 0 : n.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), a = Q(!1);
  return Gn((s) => {
    if (!po)
      return;
    const l = async (u) => {
      t != null && t.value && (await En(), !T1(t.value, u.target) && u.target && !a.value && v1(
        p2,
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
}), k1 = /* @__PURE__ */ Re({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, r = t, { primitiveElement: a, currentElement: s } = jr(), l = W(
      () => {
        var b;
        return ((b = s.value) == null ? void 0 : b.ownerDocument) ?? globalThis.document;
      }
    ), u = W(() => Ai.layersRoot), f = W(() => s.value ? Array.from(u.value).indexOf(s.value) : -1), h = W(() => Ai.layersWithOutsidePointerEventsDisabled.size > 0), d = W(() => {
      const b = Array.from(u.value), [O] = [...Ai.layersWithOutsidePointerEventsDisabled].slice(-1), S = b.indexOf(O);
      return f.value >= S;
    }), m = m2(async (b) => {
      const O = [...Ai.branches].some(
        (S) => S.contains(b.target)
      );
      !d.value || O || (r("pointerDownOutside", b), r("interactOutside", b), await En(), b.defaultPrevented || r("dismiss"));
    }, s), v = v2((b) => {
      [...Ai.branches].some(
        (O) => O.contains(b.target)
      ) || (r("focusOutside", b), r("interactOutside", b), b.defaultPrevented || r("dismiss"));
    }, s);
    WC("Escape", (b) => {
      f.value === u.value.size - 1 && (r("escapeKeyDown", b), b.defaultPrevented || r("dismiss"));
    });
    let g;
    return Gn((b) => {
      s.value && (n.disableOutsidePointerEvents && (Ai.layersWithOutsidePointerEventsDisabled.size === 0 && (g = l.value.body.style.pointerEvents, l.value.body.style.pointerEvents = "none"), Ai.layersWithOutsidePointerEventsDisabled.add(s.value)), u.value.add(s.value), b(() => {
        n.disableOutsidePointerEvents && Ai.layersWithOutsidePointerEventsDisabled.size === 1 && (l.value.body.style.pointerEvents = g);
      }));
    }), Gn((b) => {
      b(() => {
        s.value && (u.value.delete(s.value), Ai.layersWithOutsidePointerEventsDisabled.delete(s.value));
      });
    }), (b, O) => (R(), Ke(y(Hi), {
      ref_key: "primitiveElement",
      ref: a,
      "as-child": b.asChild,
      as: b.as,
      "data-dismissable-layer": "",
      style: Fi({
        pointerEvents: h.value ? d.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: y(v).onFocusCapture,
      onBlurCapture: y(v).onBlurCapture,
      onPointerdownCapture: y(m).onPointerDownCapture
    }, {
      default: $e(() => [
        nt(b.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
}), Ad = "focusScope.autoFocusOnMount", Md = "focusScope.autoFocusOnUnmount", $_ = { bubbles: !1, cancelable: !0 };
function g2(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (ya(r, { select: t }), document.activeElement !== n)
      return !0;
}
function _2(e) {
  const t = A1(e), n = P_(t, e), r = P_(t.reverse(), e);
  return [n, r];
}
function A1(e) {
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
    if (!y2(n, { upTo: t }))
      return n;
}
function y2(e, { upTo: t }) {
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
function b2(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function ya(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && b2(e) && t && e.select();
  }
}
const w2 = Rc(() => Q([]));
function O2() {
  const e = w2();
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
function E2(e) {
  return e.filter((t) => t.tagName !== "A");
}
const M1 = /* @__PURE__ */ Re({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, r = t, { primitiveElement: a, currentElement: s } = jr(), l = Q(null), u = O2(), f = xl({
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
      function v(S) {
        if (f.paused || !m)
          return;
        const w = S.target;
        m.contains(w) ? l.value = w : ya(l.value, { select: !0 });
      }
      function g(S) {
        if (f.paused || !m)
          return;
        const w = S.relatedTarget;
        w !== null && (m.contains(w) || ya(l.value, { select: !0 }));
      }
      function b(S) {
        m.contains(l.value) || ya(m);
      }
      document.addEventListener("focusin", v), document.addEventListener("focusout", g);
      const O = new MutationObserver(b);
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
          (b) => r("mountAutoFocus", b)
        ), m.dispatchEvent(g), g.defaultPrevented || (g2(E2(A1(m)), {
          select: !0
        }), document.activeElement === v && ya(m));
      }
      d(() => {
        m.removeEventListener(
          Ad,
          (O) => r("mountAutoFocus", O)
        );
        const g = new CustomEvent(Md, $_), b = (O) => {
          r("unmountAutoFocus", O);
        };
        m.addEventListener(Md, b), m.dispatchEvent(g), setTimeout(() => {
          g.defaultPrevented || ya(v ?? document.body, { select: !0 }), m.removeEventListener(Md, b), u.remove(f);
        }, 0);
      });
    });
    function h(d) {
      if (!n.loop && !n.trapped || f.paused)
        return;
      const m = d.key === "Tab" && !d.altKey && !d.ctrlKey && !d.metaKey, v = document.activeElement;
      if (m && v) {
        const g = d.currentTarget, [b, O] = _2(g);
        b && O ? !d.shiftKey && v === O ? (d.preventDefault(), n.loop && ya(b, { select: !0 })) : d.shiftKey && v === b && (d.preventDefault(), n.loop && ya(O, { select: !0 })) : v === g && d.preventDefault();
      }
    }
    return (d, m) => (R(), Ke(y(Hi), {
      ref_key: "primitiveElement",
      ref: a,
      tabindex: "-1",
      "as-child": n.asChild,
      as: n.as,
      onKeydown: h
    }, {
      default: $e(() => [
        nt(d.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), D2 = ["ArrowDown", "PageUp", "Home"], $1 = ["ArrowUp", "PageDown", "End"], S2 = [...D2, ...$1];
function x2(e) {
  return e ? "open" : "closed";
}
function T2(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function k2(e, t) {
  const { x: n, y: r } = e;
  let a = !1;
  for (let s = 0, l = t.length - 1; s < t.length; l = s++) {
    const u = t[s].x, f = t[s].y, h = t[l].x, d = t[l].y;
    f > r != d > r && n < (h - u) * (r - f) / (d - f) + u && (a = !a);
  }
  return a;
}
function A2(e, t) {
  if (!t)
    return !1;
  const n = { x: e.clientX, y: e.clientY };
  return k2(n, t);
}
function M2(e) {
  return e.pointerType === "mouse";
}
function up(e) {
  return e === "indeterminate";
}
function P1(e) {
  return up(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const $2 = ["value", "checked", "name", "disabled", "required"], [P2, C2] = di("CheckboxRoot"), I2 = /* @__PURE__ */ Re({
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
    }), { primitiveElement: l, currentElement: u } = jr(), f = XC(u), h = W(() => {
      var d;
      return n.id && u.value ? (d = document.querySelector(`[for="${n.id}"]`)) == null ? void 0 : d.innerText : void 0;
    });
    return C2({
      disabled: a,
      state: s
    }), (d, m) => (R(), G(qe, null, [
      Te(y(Hi), Zt(d.$attrs, {
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
        "data-state": y(P1)(y(s)),
        "data-disabled": y(a) ? "" : void 0,
        disabled: y(a),
        onKeydown: jd(xa(() => {
        }, ["prevent"]), ["enter"]),
        onClick: m[0] || (m[0] = (v) => s.value = !y(s))
      }), {
        default: $e(() => [
          nt(d.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "as-child", "as", "type", "aria-checked", "aria-label", "data-state", "data-disabled", "disabled", "onKeydown"]),
      y(f) ? (R(), G("input", {
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
      }, null, 12, $2)) : we("", !0)
    ], 64));
  }
}), N2 = /* @__PURE__ */ Re({
  __name: "CheckboxIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = P2();
    return (n, r) => (R(), Ke(y(x1), {
      present: n.forceMount || y(up)(y(t).state.value) || y(t).state.value === !0
    }, {
      default: $e(() => [
        Te(y(Hi), Zt({
          "data-state": y(P1)(y(t).state.value),
          "data-disabled": y(t).disabled.value ? "" : void 0,
          style: { pointerEvents: "none" },
          "as-child": n.asChild,
          as: n.as
        }, n.$attrs), {
          default: $e(() => [
            nt(n.$slots, "default")
          ]),
          _: 3
        }, 16, ["data-state", "data-disabled", "as-child", "as"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), [C1, L2] = di("PopperRoot"), R2 = /* @__PURE__ */ Re({
  __name: "PopperRoot",
  setup(e) {
    const t = Q();
    return L2({
      anchor: t,
      onAnchorChange: (n) => t.value = n
    }), (n, r) => nt(n.$slots, "default");
  }
}), F2 = /* @__PURE__ */ Re({
  __name: "PopperAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { primitiveElement: n, currentElement: r } = jr(), a = C1();
    return Ue(r, () => {
      a.onAnchorChange(t.element ?? r.value);
    }), (s, l) => (R(), Ke(y(Hi), {
      ref_key: "primitiveElement",
      ref: n,
      as: s.as,
      "as-child": s.asChild
    }, {
      default: $e(() => [
        nt(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function Y2(e) {
  return e !== null;
}
function W2(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var n, r, a;
      const { placement: s, rects: l, middlewareData: u } = t, f = ((n = u.arrow) == null ? void 0 : n.centerOffset) !== 0, h = f ? 0 : e.arrowWidth, d = f ? 0 : e.arrowHeight, [m, v] = ch(s), g = { start: "0%", center: "50%", end: "100%" }[v], b = (((r = u.arrow) == null ? void 0 : r.x) ?? 0) + h / 2, O = (((a = u.arrow) == null ? void 0 : a.y) ?? 0) + d / 2;
      let S = "", w = "";
      return m === "bottom" ? (S = f ? g : `${b}px`, w = `${-d}px`) : m === "top" ? (S = f ? g : `${b}px`, w = `${l.floating.height + d}px`) : m === "right" ? (S = `${-d}px`, w = f ? g : `${O}px`) : m === "left" && (S = `${l.floating.width + d}px`, w = f ? g : `${O}px`), { data: { x: S, y: w } };
    }
  };
}
function ch(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
const I1 = {
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
}, [vee, U2] = di("PopperContent"), N1 = /* @__PURE__ */ Re({
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
    ...I1
  }),
  setup(e, { expose: t }) {
    const n = e, r = C1(), a = JC(), { primitiveElement: s, currentElement: l } = jr(), u = Q(), f = Q(), { width: h, height: d } = s2(f), m = W(
      () => n.side + (n.align !== "center" ? `-${n.align}` : "")
    ), v = W(() => typeof n.collisionPadding == "number" ? n.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...n.collisionPadding }), g = W(() => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]), b = W(() => ({
      padding: v.value,
      boundary: g.value.filter(Y2),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: g.value.length > 0
    })), O = $C(() => [
      sC({
        mainAxis: n.sideOffset + d.value,
        alignmentAxis: n.alignOffset
      }),
      n.avoidCollisions && oC({
        mainAxis: !0,
        crossAxis: !!n.prioritizePosition,
        limiter: n.sticky === "partial" ? lC() : void 0,
        ...b.value
      }),
      !n.prioritizePosition && n.avoidCollisions && rC({
        ...b.value
      }),
      uC({
        ...b.value,
        apply: ({ elements: P, rects: j, availableWidth: Y, availableHeight: J }) => {
          const { width: he, height: ue } = j.reference, ve = P.floating.style;
          Object.assign(P.floating.style, {
            maxWidth: `${Y}px`,
            maxHeight: `${J}px`
          }), ve.setProperty(
            "--radix-popper-available-width",
            `${Y}px`
          ), ve.setProperty(
            "--radix-popper-available-height",
            `${J}px`
          ), ve.setProperty(
            "--radix-popper-anchor-width",
            `${he}px`
          ), ve.setProperty(
            "--radix-popper-anchor-height",
            `${ue}px`
          );
        }
      }),
      f.value && AC({ element: f.value, padding: n.arrowPadding }),
      W2({
        arrowWidth: h.value,
        arrowHeight: d.value
      }),
      n.hideWhenDetached && iC({ strategy: "referenceHidden", ...b.value })
    ]), { floatingStyles: S, placement: w, isPositioned: x, middlewareData: A } = MC(
      r.anchor,
      u,
      {
        strategy: "fixed",
        placement: m,
        whileElementsMounted: (...P) => TC(...P, {
          animationFrame: n.updatePositionStrategy === "always"
        }),
        middleware: O
      }
    ), E = W(
      () => ch(w.value)[0]
    ), C = W(
      () => ch(w.value)[1]
    );
    Gn(() => {
      var P;
      x.value && ((P = n.onPlaced) == null || P.call(n));
    });
    const M = W(
      () => {
        var P;
        return ((P = A.value.arrow) == null ? void 0 : P.centerOffset) !== 0;
      }
    ), N = Q("");
    Gn(() => {
      l.value && (N.value = window.getComputedStyle(l.value).zIndex);
    });
    const F = W(() => {
      var P;
      return ((P = A.value.arrow) == null ? void 0 : P.x) ?? 0;
    }), H = W(() => {
      var P;
      return ((P = A.value.arrow) == null ? void 0 : P.y) ?? 0;
    });
    return U2({
      placedSide: E,
      onArrowChange: (P) => f.value = P,
      arrowX: F,
      arrowY: H,
      shouldHideArrow: M
    }), t({
      $el: l
    }), (P, j) => {
      var Y, J, he;
      return R(), G("div", {
        ref_key: "floatingRef",
        ref: u,
        "data-radix-popper-content-wrapper": "",
        style: Fi({
          ...y(S),
          transform: y(x) ? y(S).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: N.value,
          "--radix-popper-transform-origin": [
            (Y = y(A).transformOrigin) == null ? void 0 : Y.x,
            (J = y(A).transformOrigin) == null ? void 0 : J.y
          ].join(" ")
        })
      }, [
        Te(y(Hi), Zt({
          ref: (ue) => {
            y(a)(ue), s.value = ue;
          }
        }, P.$attrs, {
          "as-child": n.asChild,
          as: P.as,
          "data-side": E.value,
          "data-align": C.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: y(x) ? void 0 : "none",
            // hide the content if using the hide middleware and should be hidden
            opacity: (he = y(A).hide) != null && he.referenceHidden ? 0 : void 0
          }
        }), {
          default: $e(() => [
            nt(P.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
}), [L1, gee] = di("CollectionProvider");
Re({
  name: "CollectionSlot",
  setup(e, { slots: t }) {
    const n = L1(), { primitiveElement: r, currentElement: a } = jr();
    return Ue(a, () => {
      n.collectionRef.value = a.value;
    }), () => wr(lp, { ref: r }, t);
  }
});
Re({
  name: "CollectionItem",
  setup(e, { slots: t, attrs: n }) {
    const r = L1(), { primitiveElement: a, currentElement: s } = jr(), l = xr();
    return Gn((u) => {
      var f;
      if (s.value) {
        const h = zd(s.value);
        r.itemMap.value.set(h, { ref: s.value, ...zd(((f = l == null ? void 0 : l.parent) == null ? void 0 : f.props) ?? {}) }), u(() => r.itemMap.value.delete(h));
      }
    }), () => wr(lp, { ...n, [r.attrName]: "", ref: a }, t);
  }
});
const [V2, _ee] = di(["MenuRoot", "MenuSub"], "MenuContext"), [B2, yee] = di("MenuRoot"), H2 = "rovingFocusGroup.onEntryFocus", z2 = { bubbles: !1, cancelable: !0 };
function j2(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
const [bee, G2] = di("RovingFocusGroup"), q2 = /* @__PURE__ */ Re({
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
    const n = e, r = t, { loop: a, orientation: s, dir: l } = oo(n), u = KC(l), f = sp(n, "currentTabStopId", r, {
      defaultValue: n.defaultCurrentTabStopId,
      passive: n.currentTabStopId === void 0
    }), h = Q(!1), d = Q(!1), m = Q(0), { primitiveElement: v, currentElement: g } = jr(), { createCollection: b } = O1("rovingFocus"), O = b(g);
    function S(w) {
      const x = !d.value;
      if (w.currentTarget && w.target === w.currentTarget && x && !h.value) {
        const A = new CustomEvent(H2, z2);
        if (w.currentTarget.dispatchEvent(A), r("entryFocus", A), !A.defaultPrevented) {
          const E = O.value, C = E.find((F) => F.getAttribute("data-active") === "true"), M = E.find(
            (F) => F.id === f.value
          ), N = [C, M, ...E].filter(
            Boolean
          );
          j2(N);
        }
      }
      d.value = !1;
    }
    return G2({
      loop: a,
      dir: u,
      orientation: s,
      currentTabStopId: f,
      onItemFocus: (w) => {
        f.value = w;
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
    }), (w, x) => (R(), Ke(y(Hi), {
      ref_key: "primitiveElement",
      ref: v,
      tabindex: h.value || m.value === 0 ? -1 : 0,
      "data-orientation": y(s),
      as: w.as,
      "as-child": w.asChild,
      dir: y(u),
      style: { outline: "none" },
      onMousedown: x[0] || (x[0] = (A) => d.value = !0),
      onFocus: S,
      onBlur: x[1] || (x[1] = (A) => h.value = !1)
    }, {
      default: $e(() => [
        nt(w.$slots, "default")
      ]),
      _: 3
    }, 8, ["tabindex", "data-orientation", "as", "as-child", "dir"]));
  }
}), [wee, K2] = di("MenuContent");
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
  ...I1
});
const [kl, Z2] = di("PopoverRoot"), X2 = /* @__PURE__ */ Re({
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
    return Z2({
      contentId: a2(),
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
    }), (f, h) => (R(), Ke(y(R2), null, {
      default: $e(() => [
        nt(f.$slots, "default")
      ]),
      _: 3
    }));
  }
}), J2 = /* @__PURE__ */ Re({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e, { expose: t }) {
    const n = e, r = kl(), { primitiveElement: a, currentElement: s } = jr();
    return zr(() => {
      r.triggerElement.value = s.value;
    }), t({ $el: s }), (l, u) => (R(), Ke(Zs(y(r).hasCustomAnchor.value ? y(Hi) : y(F2)), { "as-child": "" }, {
      default: $e(() => [
        Te(y(Hi), {
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
          default: $e(() => [
            nt(l.$slots, "default")
          ]),
          _: 3
        }, 8, ["type", "aria-expanded", "aria-controls", "data-state", "as", "as-child", "onClick"])
      ]),
      _: 3
    }));
  }
}), Q2 = /* @__PURE__ */ Re({
  __name: "PopoverPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, r) => (R(), Ke(y(d2), ts(Mc(t)), {
      default: $e(() => [
        nt(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), R1 = /* @__PURE__ */ Re({
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
    const n = e, r = t, a = D1(n), s = kl();
    return E1(), (l, u) => (R(), Ke(y(M1), {
      "as-child": "",
      loop: "",
      trapped: l.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (f) => r("openAutoFocus", f)),
      onUnmountAutoFocus: u[6] || (u[6] = (f) => r("closeAutoFocus", f))
    }, {
      default: $e(() => [
        Te(y(k1), {
          "as-child": "",
          "disable-outside-pointer-events": l.disableOutsidePointerEvents,
          onPointerDownOutside: u[0] || (u[0] = (f) => r("pointerDownOutside", f)),
          onInteractOutside: u[1] || (u[1] = (f) => r("interactOutside", f)),
          onEscapeKeyDown: u[2] || (u[2] = (f) => r("escapeKeyDown", f)),
          onFocusOutside: u[3] || (u[3] = (f) => r("focusOutside", f)),
          onDismiss: u[4] || (u[4] = (f) => y(s).onOpenChange(!1))
        }, {
          default: $e(() => [
            Te(y(N1), Zt(y(a), {
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
              default: $e(() => [
                nt(l.$slots, "default")
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
}), eI = /* @__PURE__ */ Re({
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
    w1(!0);
    const l = mo(n, r), { primitiveElement: u, currentElement: f } = jr();
    return r2(f), (h, d) => (R(), Ke(R1, Zt({
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
        const v = m.detail.originalEvent, g = v.button === 0 && v.ctrlKey === !0, b = v.button === 2 || g;
        s.value = b;
      }),
      onFocusOutside: d[2] || (d[2] = xa(() => {
      }, ["prevent"]))
    }), {
      default: $e(() => [
        nt(h.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), tI = /* @__PURE__ */ Re({
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
    return (f, h) => (R(), Ke(R1, Zt(y(u), {
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
      default: $e(() => [
        nt(f.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), nI = /* @__PURE__ */ Re({
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
    return (l, u) => (R(), Ke(y(x1), {
      present: l.forceMount || y(a).open.value
    }, {
      default: $e(() => [
        y(a).modal.value ? (R(), Ke(eI, ts(Zt({ key: 0 }, y(s))), {
          default: $e(() => [
            nt(l.$slots, "default")
          ]),
          _: 3
        }, 16)) : (R(), Ke(tI, ts(Zt({ key: 1 }, y(s))), {
          default: $e(() => [
            nt(l.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), rI = /* @__PURE__ */ Re({
  __name: "Popover",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const r = mo(e, t);
    return (a, s) => (R(), Ke(y(X2), ts(Mc(y(r))), {
      default: $e(() => [
        nt(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), iI = /* @__PURE__ */ Re({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, r) => (R(), Ke(y(J2), Zt(t, { class: "" }), {
      default: $e(() => [
        nt(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function F1(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = F1(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function aI() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = F1(e)) && (r && (r += " "), r += t);
  return r;
}
const cp = "-";
function sI(e) {
  const t = lI(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  function a(l) {
    const u = l.split(cp);
    return u[0] === "" && u.length !== 1 && u.shift(), Y1(u, t) || oI(l);
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
function Y1(e, t) {
  var l;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), a = r ? Y1(e.slice(1), r) : void 0;
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
function oI(e) {
  if (I_.test(e)) {
    const t = I_.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function lI(e) {
  const {
    theme: t,
    prefix: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return cI(Object.entries(e.classGroups), n).forEach(([s, l]) => {
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
      if (uI(a)) {
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
function uI(e) {
  return e.isThemeGetter;
}
function cI(e, t) {
  return t ? e.map(([n, r]) => {
    const a = r.map((s) => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([l, u]) => [t + l, u])) : s);
    return [n, a];
  }) : e;
}
function fI(e) {
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
const W1 = "!";
function dI(e) {
  const t = e.separator, n = t.length === 1, r = t[0], a = t.length;
  return function(l) {
    const u = [];
    let f = 0, h = 0, d;
    for (let O = 0; O < l.length; O++) {
      let S = l[O];
      if (f === 0) {
        if (S === r && (n || l.slice(O, O + a) === t)) {
          u.push(l.slice(h, O)), h = O + a;
          continue;
        }
        if (S === "/") {
          d = O;
          continue;
        }
      }
      S === "[" ? f++ : S === "]" && f--;
    }
    const m = u.length === 0 ? l : l.substring(h), v = m.startsWith(W1), g = v ? m.substring(1) : m, b = d && d > h ? d - h : void 0;
    return {
      modifiers: u,
      hasImportantModifier: v,
      baseClassName: g,
      maybePostfixModifierPosition: b
    };
  };
}
function hI(e) {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}
function pI(e) {
  return {
    cache: fI(e.cacheSize),
    splitModifiers: dI(e),
    ...sI(e)
  };
}
const mI = /\s+/;
function vI(e, t) {
  const {
    splitModifiers: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: a
  } = t, s = /* @__PURE__ */ new Set();
  return e.trim().split(mI).map((l) => {
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
    const g = hI(u).join(":");
    return {
      isTailwindClass: !0,
      modifierId: f ? g + W1 : g,
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
function gI() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = U1(t)) && (r && (r += " "), r += n);
  return r;
}
function U1(e) {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = U1(e[r])) && (n && (n += " "), n += t);
  return n;
}
function _I(e, ...t) {
  let n, r, a, s = l;
  function l(f) {
    const h = t.reduce((d, m) => m(d), e());
    return n = pI(h), r = n.cache.get, a = n.cache.set, s = u, u(f);
  }
  function u(f) {
    const h = r(f);
    if (h)
      return h;
    const d = vI(f, n);
    return a(f, d), d;
  }
  return function() {
    return s(gI.apply(null, arguments));
  };
}
function Ut(e) {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}
const V1 = /^\[(?:([a-z-]+):)?(.+)\]$/i, yI = /^\d+\/\d+$/, bI = /* @__PURE__ */ new Set(["px", "full", "screen"]), wI = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, OI = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, EI = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, DI = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function Rr(e) {
  return Ka(e) || bI.has(e) || yI.test(e);
}
function ma(e) {
  return vo(e, "length", PI);
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
function SI(e) {
  return e.endsWith("%") && Ka(e.slice(0, -1));
}
function it(e) {
  return V1.test(e);
}
function va(e) {
  return wI.test(e);
}
const xI = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function TI(e) {
  return vo(e, xI, B1);
}
function kI(e) {
  return vo(e, "position", B1);
}
const AI = /* @__PURE__ */ new Set(["image", "url"]);
function MI(e) {
  return vo(e, AI, II);
}
function $I(e) {
  return vo(e, "", CI);
}
function Go() {
  return !0;
}
function vo(e, t, n) {
  const r = V1.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}
function PI(e) {
  return OI.test(e);
}
function B1() {
  return !1;
}
function CI(e) {
  return EI.test(e);
}
function II(e) {
  return DI.test(e);
}
function NI() {
  const e = Ut("colors"), t = Ut("spacing"), n = Ut("blur"), r = Ut("brightness"), a = Ut("borderColor"), s = Ut("borderRadius"), l = Ut("borderSpacing"), u = Ut("borderWidth"), f = Ut("contrast"), h = Ut("grayscale"), d = Ut("hueRotate"), m = Ut("invert"), v = Ut("gap"), g = Ut("gradientColorStops"), b = Ut("gradientColorStopPositions"), O = Ut("inset"), S = Ut("margin"), w = Ut("opacity"), x = Ut("padding"), A = Ut("saturate"), E = Ut("scale"), C = Ut("sepia"), M = Ut("skew"), N = Ut("space"), F = Ut("translate"), H = () => ["auto", "contain", "none"], P = () => ["auto", "hidden", "clip", "visible", "scroll"], j = () => ["auto", it, t], Y = () => [it, t], J = () => ["", Rr, ma], he = () => ["auto", Ka, it], ue = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], ve = () => ["solid", "dashed", "dotted", "double", "none"], xe = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"], Fe = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], Ne = () => ["", "0", it], ie = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], Ae = () => [Ka, Pu], lt = () => [Ka, it];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Go],
      spacing: [Rr, ma],
      blur: ["none", "", va, it],
      brightness: Ae(),
      borderColor: [e],
      borderRadius: ["none", "", "full", va, it],
      borderSpacing: Y(),
      borderWidth: J(),
      contrast: Ae(),
      grayscale: Ne(),
      hueRotate: lt(),
      invert: Ne(),
      gap: Y(),
      gradientColorStops: [e],
      gradientColorStopPositions: [SI, ma],
      inset: j(),
      margin: j(),
      opacity: Ae(),
      padding: Y(),
      saturate: Ae(),
      scale: Ae(),
      sepia: Ne(),
      skew: lt(),
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
        aspect: ["auto", "square", "video", it]
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
        object: [...ue(), it]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: P()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": P()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": P()
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
        z: ["auto", jo, it]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: j()
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
        flex: ["1", "auto", "initial", "none", it]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: Ne()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: Ne()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", jo, it]
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
          span: ["full", jo, it]
        }, it]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": he()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": he()
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
          span: [jo, it]
        }, it]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": he()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": he()
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
        "auto-cols": ["auto", "min", "max", "fr", it]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", it]
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
        justify: ["normal", ...Fe()]
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
        content: ["normal", ...Fe(), "baseline"]
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
        "place-content": [...Fe(), "baseline"]
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
        m: [S]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [S]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [S]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [S]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [S]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [S]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [S]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [S]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [S]
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
        w: ["auto", "min", "max", "fit", it, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", it, Rr]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [va]
        }, va, it]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [it, t, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", Rr, it]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [it, t, "min", "max", "fit"]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", it]
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
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Rr, it]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", it]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", it]
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
        "placeholder-opacity": [w]
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
        "text-opacity": [w]
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
        decoration: [...ve(), "wavy"]
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
        "underline-offset": ["auto", Rr, it]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", it]
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
        content: ["none", it]
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
        "bg-opacity": [w]
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
        bg: [...ue(), kI]
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
        bg: ["auto", "cover", "contain", TI]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, MI]
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
        from: [b]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [b]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [b]
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
        "border-opacity": [w]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...ve(), "hidden"]
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
        "divide-opacity": [w]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: ve()
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
        outline: ["", ...ve()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Rr, it]
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
        "ring-opacity": [w]
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
        shadow: ["", "inner", "none", va, $I]
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
        opacity: [w]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": xe()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": xe()
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
        "drop-shadow": ["", "none", va, it]
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
        saturate: [A]
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
        "backdrop-opacity": [w]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [A]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", it]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: lt()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", it]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: lt()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", it]
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
        rotate: [jo, it]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [F]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [F]
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
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", it]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", it]
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
        "will-change": ["auto", "scroll", "contents", "transform", it]
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
const LI = /* @__PURE__ */ _I(NI);
function H1(...e) {
  return LI(aI(e));
}
const RI = /* @__PURE__ */ Re({
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
    return (a, s) => (R(), Ke(y(Q2), null, {
      default: $e(() => [
        Te(y(nI), Zt({ ...y(r), ...a.$attrs }, {
          class: y(H1)(
            "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            n.class
          )
        }), {
          default: $e(() => [
            nt(a.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), FI = {
  key: 0,
  class: "flex items-center gap-2 relative"
}, YI = { class: "p3-r text-dark-4" }, WI = { class: "flex gap-6" }, UI = { class: "p3-b text-true-blue-3 flex cursor-pointer items-center justify-center gap-2 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50" }, VI = /* @__PURE__ */ q("template", null, null, -1), BI = { class: "shadow-01 bg-light-5 z-[2] p-2 rounded flex flex-col gap-2" }, HI = { class: "p3-b text-true-blue-3 w-fit flex cursor-pointer items-center justify-center gap-2 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50" }, zI = {
  key: 0,
  class: "border-t p-2"
}, jI = { class: "flex gap-1.5 flex-wrap" }, GI = {
  key: 1,
  class: "shadow-01 flex w-fit items-center py-1 px-2 rounded p3-r text-dark-3"
}, qI = ["onClick"], KI = {
  key: 0,
  class: "text-dark-5 mx-1"
}, ZI = {
  key: 2,
  class: "flex gap-4 flex-wrap p-2 border-t"
}, XI = /* @__PURE__ */ Re({
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
    const n = e, { t: r } = oi.global, a = Q(n.monthDate), s = Q(n.weekOrdinal), l = Q(n.weekdays), u = Q(n.yearMonths), f = (E, C, M = !1) => {
      if (M) {
        C.findIndex((N) => N === E) === -1 ? C.push(E) : C.splice(C.indexOf(E), 1), C.sort((N, F) => N - F);
        return;
      }
      C.value.findIndex((N) => N === E) === -1 ? C.value.push(E) : C.value.splice(C.value.indexOf(E), 1), C.value.sort((N, F) => N - F);
    }, h = Q(""), d = yt("eventData");
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
      ), h.value = jP(d.value, !0);
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
    ]), b = Q([
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
    }), S = W(() => n.type === St.Month || n.type === St.Annual ? !0 : (a.value = [], s.value = [], l.value = [], u.value = [], !1)), w = Q([
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
    ]), x = Q(w.value[0]);
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
        (E === St.Month || E === St.Annual) && (E != St.Annual && (u.value = []), g.value && g.value.length > 0 ? x.value = w.value[1] : x.value = w.value[0]);
      },
      { immediate: !0 }
    ), m0(() => {
      a.value = [], s.value = [], l.value = [], u.value = [];
    });
    const A = W(() => {
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
    return (E, C) => E.type === y(St).Annual || y(O) ? (R(), G("div", FI, [
      q("span", YI, Se(y(r)("指定時段")), 1),
      Te(y(rI), null, {
        default: $e(() => [
          Te(y(iI), null, {
            default: $e(() => [
              q("div", WI, [
                q("span", UI, Se(y(A) ? y(h) : y(r)("未設定")), 1),
                VI
              ])
            ]),
            _: 1
          }),
          Te(y(RI), {
            class: "shadow-none border-none p-0 w-96",
            align: "start",
            side: "bottom"
          }, {
            default: $e(() => [
              q("div", BI, [
                q("div", HI, Se(y(r)("月份")), 1),
                E.type === y(St).Annual ? (R(), G("div", zI, [
                  q("div", jI, [
                    (R(!0), G(qe, null, Rt(y(b), (M) => {
                      var N;
                      return R(), Ke(Wg, {
                        key: M.id,
                        checked: (N = y(u)) == null ? void 0 : N.includes(M.id),
                        "onUpdate:checked": (F) => f(M.id, y(u), !0),
                        fieldId: M.name,
                        label: M.name
                      }, null, 8, ["checked", "onUpdate:checked", "fieldId", "label"]);
                    }), 128))
                  ])
                ])) : we("", !0),
                y(S) ? (R(), G("div", GI, [
                  (R(!0), G(qe, null, Rt(y(w), (M, N) => (R(), G("div", {
                    class: "flex items-center",
                    key: M
                  }, [
                    Number.isInteger(M) ? we("", !0) : (R(), G(qe, { key: 0 }, [
                      q("span", {
                        class: Qe(["cursor-pointer hover:drop-shadow-md", [
                          y(x).id == M.id ? "text-true-blue-3 drop-shadow-sm p3-b" : "p3-r"
                        ]]),
                        onClick: (F) => x.value = M
                      }, Se(M.name), 11, qI),
                      N < Object.keys(y(x)).filter(
                        (F) => isNaN(Number(F))
                      ).length - 1 ? (R(), G("div", KI, " | ")) : we("", !0)
                    ], 64))
                  ]))), 128))
                ])) : we("", !0),
                y(O) ? (R(), G("div", ZI, [
                  (R(!0), G(qe, null, Rt(y(O), (M) => (R(), G("div", {
                    class: "flex gap-1 flex-wrap",
                    key: M
                  }, [
                    (R(!0), G(qe, null, Rt(M.options, (N) => {
                      var F;
                      return R(), Ke(Wg, {
                        key: N.id,
                        checked: (F = M.key.value) == null ? void 0 : F.includes(N.id),
                        "onUpdate:checked": (H) => f(N.id, M.key),
                        fieldId: N.name,
                        label: N.name
                      }, null, 8, ["checked", "onUpdate:checked", "fieldId", "label"]);
                    }), 128))
                  ]))), 128))
                ])) : we("", !0)
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ])) : we("", !0);
  }
}), JI = ["width", "height", "fill", "transform"], QI = { key: 0 }, eN = /* @__PURE__ */ q("path", { d: "M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z" }, null, -1), tN = [
  eN
], nN = { key: 1 }, rN = /* @__PURE__ */ q("path", {
  d: "M208,96l-80,80L48,96Z",
  opacity: "0.2"
}, null, -1), iN = /* @__PURE__ */ q("path", { d: "M215.39,92.94A8,8,0,0,0,208,88H48a8,8,0,0,0-5.66,13.66l80,80a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,215.39,92.94ZM128,164.69,67.31,104H188.69Z" }, null, -1), aN = [
  rN,
  iN
], sN = { key: 2 }, oN = /* @__PURE__ */ q("path", { d: "M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z" }, null, -1), lN = [
  oN
], uN = { key: 3 }, cN = /* @__PURE__ */ q("path", { d: "M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z" }, null, -1), fN = [
  cN
], dN = { key: 4 }, hN = /* @__PURE__ */ q("path", { d: "M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" }, null, -1), pN = [
  hN
], mN = { key: 5 }, vN = /* @__PURE__ */ q("path", { d: "M210.83,98.83l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,170.34l77.17-77.17a4,4,0,1,1,5.66,5.66Z" }, null, -1), gN = [
  vN
], _N = {
  name: "PhCaretDown"
}, z1 = /* @__PURE__ */ Re({
  ..._N,
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
    const t = e, n = yt("weight", "regular"), r = yt("size", "1em"), a = yt("color", "currentColor"), s = yt("mirrored", !1), l = W(() => t.weight ?? n), u = W(() => t.size ?? r), f = W(() => t.color ?? a), h = W(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : s ? "scale(-1, 1)" : void 0);
    return (d, m) => (R(), G("svg", Zt({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: u.value,
      height: u.value,
      fill: f.value,
      transform: h.value
    }, d.$attrs), [
      nt(d.$slots, "default"),
      l.value === "bold" ? (R(), G("g", QI, tN)) : l.value === "duotone" ? (R(), G("g", nN, aN)) : l.value === "fill" ? (R(), G("g", sN, lN)) : l.value === "light" ? (R(), G("g", uN, fN)) : l.value === "regular" ? (R(), G("g", dN, pN)) : l.value === "thin" ? (R(), G("g", mN, gN)) : we("", !0)
    ], 16, JI));
  }
}), yN = ["width", "height", "fill", "transform"], bN = { key: 0 }, wN = /* @__PURE__ */ q("path", { d: "M84,108A12,12,0,0,1,96,96h64a12,12,0,0,1,0,24H96A12,12,0,0,1,84,108Zm32,28H96a12,12,0,0,0,0,24h20a12,12,0,0,0,0-24ZM228,48V156.69a19.86,19.86,0,0,1-5.86,14.14l-51.31,51.31A19.86,19.86,0,0,1,156.69,228H48a20,20,0,0,1-20-20V48A20,20,0,0,1,48,28H208A20,20,0,0,1,228,48ZM52,204h92V156a12,12,0,0,1,12-12h48V52H52Zm139-36H168v23Z" }, null, -1), ON = [
  wN
], EN = { key: 1 }, DN = /* @__PURE__ */ q("path", {
  d: "M216,160l-56,56V160Z",
  opacity: "0.2"
}, null, -1), SN = /* @__PURE__ */ q("path", { d: "M88,96a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H96A8,8,0,0,1,88,96Zm8,40h64a8,8,0,0,0,0-16H96a8,8,0,0,0,0,16Zm32,16H96a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16ZM224,48V156.69A15.86,15.86,0,0,1,219.31,168L168,219.31A15.86,15.86,0,0,1,156.69,224H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM48,208H152V160a8,8,0,0,1,8-8h48V48H48Zm120-40v28.7L196.69,168Z" }, null, -1), xN = [
  DN,
  SN
], TN = { key: 2 }, kN = /* @__PURE__ */ q("path", { d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H156.69A15.92,15.92,0,0,0,168,219.31L219.31,168A15.92,15.92,0,0,0,224,156.69V48A16,16,0,0,0,208,32ZM96,88h64a8,8,0,0,1,0,16H96a8,8,0,0,1,0-16Zm32,80H96a8,8,0,0,1,0-16h32a8,8,0,0,1,0,16ZM96,136a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm64,68.69V160h44.7Z" }, null, -1), AN = [
  kN
], MN = { key: 3 }, $N = /* @__PURE__ */ q("path", { d: "M90,96a6,6,0,0,1,6-6h64a6,6,0,0,1,0,12H96A6,6,0,0,1,90,96Zm6,38h64a6,6,0,0,0,0-12H96a6,6,0,0,0,0,12Zm32,20H96a6,6,0,0,0,0,12h32a6,6,0,0,0,0-12ZM222,48V156.69a13.94,13.94,0,0,1-4.1,9.9L166.59,217.9a13.94,13.94,0,0,1-9.9,4.1H48a14,14,0,0,1-14-14V48A14,14,0,0,1,48,34H208A14,14,0,0,1,222,48ZM48,210H154V160a6,6,0,0,1,6-6h50V48a2,2,0,0,0-2-2H48a2,2,0,0,0-2,2V208A2,2,0,0,0,48,210Zm153.52-44H166v35.52Z" }, null, -1), PN = [
  $N
], CN = { key: 4 }, IN = /* @__PURE__ */ q("path", { d: "M88,96a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H96A8,8,0,0,1,88,96Zm8,40h64a8,8,0,0,0,0-16H96a8,8,0,0,0,0,16Zm32,16H96a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16ZM224,48V156.69A15.86,15.86,0,0,1,219.31,168L168,219.31A15.86,15.86,0,0,1,156.69,224H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM48,208H152V160a8,8,0,0,1,8-8h48V48H48Zm120-40v28.7L196.69,168Z" }, null, -1), NN = [
  IN
], LN = { key: 5 }, RN = /* @__PURE__ */ q("path", { d: "M92,96a4,4,0,0,1,4-4h64a4,4,0,0,1,0,8H96A4,4,0,0,1,92,96Zm4,36h64a4,4,0,0,0,0-8H96a4,4,0,0,0,0,8Zm32,24H96a4,4,0,0,0,0,8h32a4,4,0,0,0,0-8ZM220,48V156.69a11.9,11.9,0,0,1-3.52,8.48l-51.31,51.32a11.93,11.93,0,0,1-8.48,3.51H48a12,12,0,0,1-12-12V48A12,12,0,0,1,48,36H208A12,12,0,0,1,220,48ZM48,212H156V160a4,4,0,0,1,4-4h52V48a4,4,0,0,0-4-4H48a4,4,0,0,0-4,4V208A4,4,0,0,0,48,212Zm158.35-48H164v42.35Z" }, null, -1), FN = [
  RN
], YN = {
  name: "PhNote"
}, WN = /* @__PURE__ */ Re({
  ...YN,
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
    const t = e, n = yt("weight", "regular"), r = yt("size", "1em"), a = yt("color", "currentColor"), s = yt("mirrored", !1), l = W(() => t.weight ?? n), u = W(() => t.size ?? r), f = W(() => t.color ?? a), h = W(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : s ? "scale(-1, 1)" : void 0);
    return (d, m) => (R(), G("svg", Zt({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: u.value,
      height: u.value,
      fill: f.value,
      transform: h.value
    }, d.$attrs), [
      nt(d.$slots, "default"),
      l.value === "bold" ? (R(), G("g", bN, ON)) : l.value === "duotone" ? (R(), G("g", EN, xN)) : l.value === "fill" ? (R(), G("g", TN, AN)) : l.value === "light" ? (R(), G("g", MN, PN)) : l.value === "regular" ? (R(), G("g", CN, NN)) : l.value === "thin" ? (R(), G("g", LN, FN)) : we("", !0)
    ], 16, yN));
  }
}), UN = ["width", "height", "fill", "transform"], VN = { key: 0 }, BN = /* @__PURE__ */ q("path", { d: "M216,48H180V36A28,28,0,0,0,152,8H104A28,28,0,0,0,76,36V48H40a12,12,0,0,0,0,24h4V208a20,20,0,0,0,20,20H192a20,20,0,0,0,20-20V72h4a12,12,0,0,0,0-24ZM100,36a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4V48H100Zm88,168H68V72H188ZM116,104v64a12,12,0,0,1-24,0V104a12,12,0,0,1,24,0Zm48,0v64a12,12,0,0,1-24,0V104a12,12,0,0,1,24,0Z" }, null, -1), HN = [
  BN
], zN = { key: 1 }, jN = /* @__PURE__ */ q("path", {
  d: "M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56Z",
  opacity: "0.2"
}, null, -1), GN = /* @__PURE__ */ q("path", { d: "M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z" }, null, -1), qN = [
  jN,
  GN
], KN = { key: 2 }, ZN = /* @__PURE__ */ q("path", { d: "M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM112,168a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm0-120H96V40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Z" }, null, -1), XN = [
  ZN
], JN = { key: 3 }, QN = /* @__PURE__ */ q("path", { d: "M216,50H174V40a22,22,0,0,0-22-22H104A22,22,0,0,0,82,40V50H40a6,6,0,0,0,0,12H50V208a14,14,0,0,0,14,14H192a14,14,0,0,0,14-14V62h10a6,6,0,0,0,0-12ZM94,40a10,10,0,0,1,10-10h48a10,10,0,0,1,10,10V50H94ZM194,208a2,2,0,0,1-2,2H64a2,2,0,0,1-2-2V62H194ZM110,104v64a6,6,0,0,1-12,0V104a6,6,0,0,1,12,0Zm48,0v64a6,6,0,0,1-12,0V104a6,6,0,0,1,12,0Z" }, null, -1), eL = [
  QN
], tL = { key: 4 }, nL = /* @__PURE__ */ q("path", { d: "M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z" }, null, -1), rL = [
  nL
], iL = { key: 5 }, aL = /* @__PURE__ */ q("path", { d: "M216,52H172V40a20,20,0,0,0-20-20H104A20,20,0,0,0,84,40V52H40a4,4,0,0,0,0,8H52V208a12,12,0,0,0,12,12H192a12,12,0,0,0,12-12V60h12a4,4,0,0,0,0-8ZM92,40a12,12,0,0,1,12-12h48a12,12,0,0,1,12,12V52H92ZM196,208a4,4,0,0,1-4,4H64a4,4,0,0,1-4-4V60H196ZM108,104v64a4,4,0,0,1-8,0V104a4,4,0,0,1,8,0Zm48,0v64a4,4,0,0,1-8,0V104a4,4,0,0,1,8,0Z" }, null, -1), sL = [
  aL
], oL = {
  name: "PhTrash"
}, lL = /* @__PURE__ */ Re({
  ...oL,
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
    const t = e, n = yt("weight", "regular"), r = yt("size", "1em"), a = yt("color", "currentColor"), s = yt("mirrored", !1), l = W(() => t.weight ?? n), u = W(() => t.size ?? r), f = W(() => t.color ?? a), h = W(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : s ? "scale(-1, 1)" : void 0);
    return (d, m) => (R(), G("svg", Zt({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: u.value,
      height: u.value,
      fill: f.value,
      transform: h.value
    }, d.$attrs), [
      nt(d.$slots, "default"),
      l.value === "bold" ? (R(), G("g", VN, HN)) : l.value === "duotone" ? (R(), G("g", zN, qN)) : l.value === "fill" ? (R(), G("g", KN, XN)) : l.value === "light" ? (R(), G("g", JN, eL)) : l.value === "regular" ? (R(), G("g", tL, rL)) : l.value === "thin" ? (R(), G("g", iL, sL)) : we("", !0)
    ], 16, UN));
  }
}), uL = ["width", "height", "fill", "transform"], cL = { key: 0 }, fL = /* @__PURE__ */ q("path", { d: "M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z" }, null, -1), dL = [
  fL
], hL = { key: 1 }, pL = /* @__PURE__ */ q("path", {
  d: "M216,48V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z",
  opacity: "0.2"
}, null, -1), mL = /* @__PURE__ */ q("path", { d: "M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" }, null, -1), vL = [
  pL,
  mL
], gL = { key: 2 }, _L = /* @__PURE__ */ q("path", { d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM181.66,170.34a8,8,0,0,1-11.32,11.32L128,139.31,85.66,181.66a8,8,0,0,1-11.32-11.32L116.69,128,74.34,85.66A8,8,0,0,1,85.66,74.34L128,116.69l42.34-42.35a8,8,0,0,1,11.32,11.32L139.31,128Z" }, null, -1), yL = [
  _L
], bL = { key: 3 }, wL = /* @__PURE__ */ q("path", { d: "M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z" }, null, -1), OL = [
  wL
], EL = { key: 4 }, DL = /* @__PURE__ */ q("path", { d: "M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" }, null, -1), SL = [
  DL
], xL = { key: 5 }, TL = /* @__PURE__ */ q("path", { d: "M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z" }, null, -1), kL = [
  TL
], AL = {
  name: "PhX"
}, dh = /* @__PURE__ */ Re({
  ...AL,
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
    const t = e, n = yt("weight", "regular"), r = yt("size", "1em"), a = yt("color", "currentColor"), s = yt("mirrored", !1), l = W(() => t.weight ?? n), u = W(() => t.size ?? r), f = W(() => t.color ?? a), h = W(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : s ? "scale(-1, 1)" : void 0);
    return (d, m) => (R(), G("svg", Zt({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: u.value,
      height: u.value,
      fill: f.value,
      transform: h.value
    }, d.$attrs), [
      nt(d.$slots, "default"),
      l.value === "bold" ? (R(), G("g", cL, dL)) : l.value === "duotone" ? (R(), G("g", hL, vL)) : l.value === "fill" ? (R(), G("g", gL, yL)) : l.value === "light" ? (R(), G("g", bL, OL)) : l.value === "regular" ? (R(), G("g", EL, SL)) : l.value === "thin" ? (R(), G("g", xL, kL)) : we("", !0)
    ], 16, uL));
  }
});
var zn = "top", kr = "bottom", Ar = "right", jn = "left", fp = "auto", Al = [zn, kr, Ar, jn], eo = "start", gl = "end", ML = "clippingParents", j1 = "viewport", qo = "popper", $L = "reference", L_ = /* @__PURE__ */ Al.reduce(function(e, t) {
  return e.concat([t + "-" + eo, t + "-" + gl]);
}, []), G1 = /* @__PURE__ */ [].concat(Al, [fp]).reduce(function(e, t) {
  return e.concat([t, t + "-" + eo, t + "-" + gl]);
}, []), PL = "beforeRead", CL = "read", IL = "afterRead", NL = "beforeMain", LL = "main", RL = "afterMain", FL = "beforeWrite", YL = "write", WL = "afterWrite", UL = [PL, CL, IL, NL, LL, RL, FL, YL, WL];
function ui(e) {
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
function VL(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, a = t.attributes[n] || {}, s = t.elements[n];
    !Er(s) || !ui(s) || (Object.assign(s.style, r), Object.keys(a).forEach(function(l) {
      var u = a[l];
      u === !1 ? s.removeAttribute(l) : s.setAttribute(l, u === !0 ? "" : u);
    }));
  });
}
function BL(e) {
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
      !Er(a) || !ui(a) || (Object.assign(a.style, u), Object.keys(s).forEach(function(f) {
        a.removeAttribute(f);
      }));
    });
  };
}
const HL = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: VL,
  effect: BL,
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
function q1() {
  return !/^((?!chrome|android).)*safari/i.test(hh());
}
function no(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), a = 1, s = 1;
  t && Er(e) && (a = e.offsetWidth > 0 && to(r.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && to(r.height) / e.offsetHeight || 1);
  var l = os(e) ? or(e) : window, u = l.visualViewport, f = !q1() && n, h = (r.left + (f && u ? u.offsetLeft : 0)) / a, d = (r.top + (f && u ? u.offsetTop : 0)) / s, m = r.width / a, v = r.height / s;
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
function K1(e, t) {
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
function zL(e) {
  return ["table", "td", "th"].indexOf(ui(e)) >= 0;
}
function Ia(e) {
  return ((os(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Fc(e) {
  return ui(e) === "html" ? e : (
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
function jL(e) {
  var t = /firefox/i.test(hh()), n = /Trident/i.test(hh());
  if (n && Er(e)) {
    var r = zi(e);
    if (r.position === "fixed")
      return null;
  }
  var a = Fc(e);
  for (dp(a) && (a = a.host); Er(a) && ["html", "body"].indexOf(ui(a)) < 0; ) {
    var s = zi(a);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none")
      return a;
    a = a.parentNode;
  }
  return null;
}
function Ml(e) {
  for (var t = or(e), n = R_(e); n && zL(n) && zi(n).position === "static"; )
    n = R_(n);
  return n && (ui(n) === "html" || ui(n) === "body" && zi(n).position === "static") ? t : n || jL(e) || t;
}
function pp(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function sl(e, t, n) {
  return Qa(e, rc(t, n));
}
function GL(e, t, n) {
  var r = sl(e, t, n);
  return r > n ? n : r;
}
function Z1() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function X1(e) {
  return Object.assign({}, Z1(), e);
}
function J1(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var qL = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, X1(typeof t != "number" ? t : J1(t, Al));
};
function KL(e) {
  var t, n = e.state, r = e.name, a = e.options, s = n.elements.arrow, l = n.modifiersData.popperOffsets, u = ai(n.placement), f = pp(u), h = [jn, Ar].indexOf(u) >= 0, d = h ? "height" : "width";
  if (!(!s || !l)) {
    var m = qL(a.padding, n), v = hp(s), g = f === "y" ? zn : jn, b = f === "y" ? kr : Ar, O = n.rects.reference[d] + n.rects.reference[f] - l[f] - n.rects.popper[d], S = l[f] - n.rects.reference[f], w = Ml(s), x = w ? f === "y" ? w.clientHeight || 0 : w.clientWidth || 0 : 0, A = O / 2 - S / 2, E = m[g], C = x - v[d] - m[b], M = x / 2 - v[d] / 2 + A, N = sl(E, M, C), F = f;
    n.modifiersData[r] = (t = {}, t[F] = N, t.centerOffset = N - M, t);
  }
}
function ZL(e) {
  var t = e.state, n = e.options, r = n.element, a = r === void 0 ? "[data-popper-arrow]" : r;
  a != null && (typeof a == "string" && (a = t.elements.popper.querySelector(a), !a) || K1(t.elements.popper, a) && (t.elements.arrow = a));
}
const XL = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: KL,
  effect: ZL,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function ro(e) {
  return e.split("-")[1];
}
var JL = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function QL(e, t) {
  var n = e.x, r = e.y, a = t.devicePixelRatio || 1;
  return {
    x: to(n * a) / a || 0,
    y: to(r * a) / a || 0
  };
}
function F_(e) {
  var t, n = e.popper, r = e.popperRect, a = e.placement, s = e.variation, l = e.offsets, u = e.position, f = e.gpuAcceleration, h = e.adaptive, d = e.roundOffsets, m = e.isFixed, v = l.x, g = v === void 0 ? 0 : v, b = l.y, O = b === void 0 ? 0 : b, S = typeof d == "function" ? d({
    x: g,
    y: O
  }) : {
    x: g,
    y: O
  };
  g = S.x, O = S.y;
  var w = l.hasOwnProperty("x"), x = l.hasOwnProperty("y"), A = jn, E = zn, C = window;
  if (h) {
    var M = Ml(n), N = "clientHeight", F = "clientWidth";
    if (M === or(n) && (M = Ia(n), zi(M).position !== "static" && u === "absolute" && (N = "scrollHeight", F = "scrollWidth")), M = M, a === zn || (a === jn || a === Ar) && s === gl) {
      E = kr;
      var H = m && M === C && C.visualViewport ? C.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        M[N]
      );
      O -= H - r.height, O *= f ? 1 : -1;
    }
    if (a === jn || (a === zn || a === kr) && s === gl) {
      A = Ar;
      var P = m && M === C && C.visualViewport ? C.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        M[F]
      );
      g -= P - r.width, g *= f ? 1 : -1;
    }
  }
  var j = Object.assign({
    position: u
  }, h && JL), Y = d === !0 ? QL({
    x: g,
    y: O
  }, or(n)) : {
    x: g,
    y: O
  };
  if (g = Y.x, O = Y.y, f) {
    var J;
    return Object.assign({}, j, (J = {}, J[E] = x ? "0" : "", J[A] = w ? "0" : "", J.transform = (C.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + O + "px)" : "translate3d(" + g + "px, " + O + "px, 0)", J));
  }
  return Object.assign({}, j, (t = {}, t[E] = x ? O + "px" : "", t[A] = w ? g + "px" : "", t.transform = "", t));
}
function eR(e) {
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
const tR = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: eR,
  data: {}
};
var Cu = {
  passive: !0
};
function nR(e) {
  var t = e.state, n = e.instance, r = e.options, a = r.scroll, s = a === void 0 ? !0 : a, l = r.resize, u = l === void 0 ? !0 : l, f = or(t.elements.popper), h = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && h.forEach(function(d) {
    d.addEventListener("scroll", n.update, Cu);
  }), u && f.addEventListener("resize", n.update, Cu), function() {
    s && h.forEach(function(d) {
      d.removeEventListener("scroll", n.update, Cu);
    }), u && f.removeEventListener("resize", n.update, Cu);
  };
}
const rR = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: nR,
  data: {}
};
var iR = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Yu(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return iR[t];
  });
}
var aR = {
  start: "end",
  end: "start"
};
function Y_(e) {
  return e.replace(/start|end/g, function(t) {
    return aR[t];
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
function sR(e, t) {
  var n = or(e), r = Ia(e), a = n.visualViewport, s = r.clientWidth, l = r.clientHeight, u = 0, f = 0;
  if (a) {
    s = a.width, l = a.height;
    var h = q1();
    (h || !h && t === "fixed") && (u = a.offsetLeft, f = a.offsetTop);
  }
  return {
    width: s,
    height: l,
    x: u + vp(e),
    y: f
  };
}
function oR(e) {
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
function Q1(e) {
  return ["html", "body", "#document"].indexOf(ui(e)) >= 0 ? e.ownerDocument.body : Er(e) && gp(e) ? e : Q1(Fc(e));
}
function ol(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Q1(e), a = r === ((n = e.ownerDocument) == null ? void 0 : n.body), s = or(r), l = a ? [s].concat(s.visualViewport || [], gp(r) ? r : []) : r, u = t.concat(l);
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
function lR(e, t) {
  var n = no(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function W_(e, t, n) {
  return t === j1 ? ph(sR(e, n)) : os(t) ? lR(t, n) : ph(oR(Ia(e)));
}
function uR(e) {
  var t = ol(Fc(e)), n = ["absolute", "fixed"].indexOf(zi(e).position) >= 0, r = n && Er(e) ? Ml(e) : e;
  return os(r) ? t.filter(function(a) {
    return os(a) && K1(a, r) && ui(a) !== "body";
  }) : [];
}
function cR(e, t, n, r) {
  var a = t === "clippingParents" ? uR(e) : [].concat(t), s = [].concat(a, [n]), l = s[0], u = s.reduce(function(f, h) {
    var d = W_(e, h, r);
    return f.top = Qa(d.top, f.top), f.right = rc(d.right, f.right), f.bottom = rc(d.bottom, f.bottom), f.left = Qa(d.left, f.left), f;
  }, W_(e, l, r));
  return u.width = u.right - u.left, u.height = u.bottom - u.top, u.x = u.left, u.y = u.top, u;
}
function eb(e) {
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
  var n = t, r = n.placement, a = r === void 0 ? e.placement : r, s = n.strategy, l = s === void 0 ? e.strategy : s, u = n.boundary, f = u === void 0 ? ML : u, h = n.rootBoundary, d = h === void 0 ? j1 : h, m = n.elementContext, v = m === void 0 ? qo : m, g = n.altBoundary, b = g === void 0 ? !1 : g, O = n.padding, S = O === void 0 ? 0 : O, w = X1(typeof S != "number" ? S : J1(S, Al)), x = v === qo ? $L : qo, A = e.rects.popper, E = e.elements[b ? x : v], C = cR(os(E) ? E : E.contextElement || Ia(e.elements.popper), f, d, l), M = no(e.elements.reference), N = eb({
    reference: M,
    element: A,
    strategy: "absolute",
    placement: a
  }), F = ph(Object.assign({}, A, N)), H = v === qo ? F : M, P = {
    top: C.top - H.top + w.top,
    bottom: H.bottom - C.bottom + w.bottom,
    left: C.left - H.left + w.left,
    right: H.right - C.right + w.right
  }, j = e.modifiersData.offset;
  if (v === qo && j) {
    var Y = j[a];
    Object.keys(P).forEach(function(J) {
      var he = [Ar, kr].indexOf(J) >= 0 ? 1 : -1, ue = [zn, kr].indexOf(J) >= 0 ? "y" : "x";
      P[J] += Y[ue] * he;
    });
  }
  return P;
}
function fR(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, a = n.boundary, s = n.rootBoundary, l = n.padding, u = n.flipVariations, f = n.allowedAutoPlacements, h = f === void 0 ? G1 : f, d = ro(r), m = d ? u ? L_ : L_.filter(function(b) {
    return ro(b) === d;
  }) : Al, v = m.filter(function(b) {
    return h.indexOf(b) >= 0;
  });
  v.length === 0 && (v = m);
  var g = v.reduce(function(b, O) {
    return b[O] = _l(e, {
      placement: O,
      boundary: a,
      rootBoundary: s,
      padding: l
    })[ai(O)], b;
  }, {});
  return Object.keys(g).sort(function(b, O) {
    return g[b] - g[O];
  });
}
function dR(e) {
  if (ai(e) === fp)
    return [];
  var t = Yu(e);
  return [Y_(e), t, Y_(t)];
}
function hR(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var a = n.mainAxis, s = a === void 0 ? !0 : a, l = n.altAxis, u = l === void 0 ? !0 : l, f = n.fallbackPlacements, h = n.padding, d = n.boundary, m = n.rootBoundary, v = n.altBoundary, g = n.flipVariations, b = g === void 0 ? !0 : g, O = n.allowedAutoPlacements, S = t.options.placement, w = ai(S), x = w === S, A = f || (x || !b ? [Yu(S)] : dR(S)), E = [S].concat(A).reduce(function(Oe, st) {
      return Oe.concat(ai(st) === fp ? fR(t, {
        placement: st,
        boundary: d,
        rootBoundary: m,
        padding: h,
        flipVariations: b,
        allowedAutoPlacements: O
      }) : st);
    }, []), C = t.rects.reference, M = t.rects.popper, N = /* @__PURE__ */ new Map(), F = !0, H = E[0], P = 0; P < E.length; P++) {
      var j = E[P], Y = ai(j), J = ro(j) === eo, he = [zn, kr].indexOf(Y) >= 0, ue = he ? "width" : "height", ve = _l(t, {
        placement: j,
        boundary: d,
        rootBoundary: m,
        altBoundary: v,
        padding: h
      }), xe = he ? J ? Ar : jn : J ? kr : zn;
      C[ue] > M[ue] && (xe = Yu(xe));
      var Fe = Yu(xe), Ne = [];
      if (s && Ne.push(ve[Y] <= 0), u && Ne.push(ve[xe] <= 0, ve[Fe] <= 0), Ne.every(function(Oe) {
        return Oe;
      })) {
        H = j, F = !1;
        break;
      }
      N.set(j, Ne);
    }
    if (F)
      for (var ie = b ? 3 : 1, Ae = function(st) {
        var Je = E.find(function(xt) {
          var ce = N.get(xt);
          if (ce)
            return ce.slice(0, st).every(function(le) {
              return le;
            });
        });
        if (Je)
          return H = Je, "break";
      }, lt = ie; lt > 0; lt--) {
        var Ct = Ae(lt);
        if (Ct === "break")
          break;
      }
    t.placement !== H && (t.modifiersData[r]._skip = !0, t.placement = H, t.reset = !0);
  }
}
const pR = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: hR,
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
function mR(e) {
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
const vR = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: mR
};
function gR(e, t, n) {
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
function _R(e) {
  var t = e.state, n = e.options, r = e.name, a = n.offset, s = a === void 0 ? [0, 0] : a, l = G1.reduce(function(d, m) {
    return d[m] = gR(m, t.rects, s), d;
  }, {}), u = l[t.placement], f = u.x, h = u.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += f, t.modifiersData.popperOffsets.y += h), t.modifiersData[r] = l;
}
const yR = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: _R
};
function bR(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = eb({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const wR = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: bR,
  data: {}
};
function OR(e) {
  return e === "x" ? "y" : "x";
}
function ER(e) {
  var t = e.state, n = e.options, r = e.name, a = n.mainAxis, s = a === void 0 ? !0 : a, l = n.altAxis, u = l === void 0 ? !1 : l, f = n.boundary, h = n.rootBoundary, d = n.altBoundary, m = n.padding, v = n.tether, g = v === void 0 ? !0 : v, b = n.tetherOffset, O = b === void 0 ? 0 : b, S = _l(t, {
    boundary: f,
    rootBoundary: h,
    padding: m,
    altBoundary: d
  }), w = ai(t.placement), x = ro(t.placement), A = !x, E = pp(w), C = OR(E), M = t.modifiersData.popperOffsets, N = t.rects.reference, F = t.rects.popper, H = typeof O == "function" ? O(Object.assign({}, t.rects, {
    placement: t.placement
  })) : O, P = typeof H == "number" ? {
    mainAxis: H,
    altAxis: H
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, H), j = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, Y = {
    x: 0,
    y: 0
  };
  if (M) {
    if (s) {
      var J, he = E === "y" ? zn : jn, ue = E === "y" ? kr : Ar, ve = E === "y" ? "height" : "width", xe = M[E], Fe = xe + S[he], Ne = xe - S[ue], ie = g ? -F[ve] / 2 : 0, Ae = x === eo ? N[ve] : F[ve], lt = x === eo ? -F[ve] : -N[ve], Ct = t.elements.arrow, Oe = g && Ct ? hp(Ct) : {
        width: 0,
        height: 0
      }, st = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Z1(), Je = st[he], xt = st[ue], ce = sl(0, N[ve], Oe[ve]), le = A ? N[ve] / 2 - ie - ce - Je - P.mainAxis : Ae - ce - Je - P.mainAxis, Pe = A ? -N[ve] / 2 + ie + ce + xt + P.mainAxis : lt + ce + xt + P.mainAxis, ke = t.elements.arrow && Ml(t.elements.arrow), re = ke ? E === "y" ? ke.clientTop || 0 : ke.clientLeft || 0 : 0, $ = (J = j == null ? void 0 : j[E]) != null ? J : 0, k = xe + le - $ - re, z = xe + Pe - $, fe = sl(g ? rc(Fe, k) : Fe, xe, g ? Qa(Ne, z) : Ne);
      M[E] = fe, Y[E] = fe - xe;
    }
    if (u) {
      var ge, je = E === "x" ? zn : jn, Yt = E === "x" ? kr : Ar, Et = M[C], Tt = C === "y" ? "height" : "width", rn = Et + S[je], _t = Et - S[Yt], Z = [zn, jn].indexOf(w) !== -1, oe = (ge = j == null ? void 0 : j[C]) != null ? ge : 0, zt = Z ? rn : Et - N[Tt] - F[Tt] - oe + P.altAxis, Mt = Z ? Et + N[Tt] + F[Tt] - oe - P.altAxis : _t, mn = g && Z ? GL(zt, Et, Mt) : sl(g ? zt : rn, Et, g ? Mt : _t);
      M[C] = mn, Y[C] = mn - Et;
    }
    t.modifiersData[r] = Y;
  }
}
const DR = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: ER,
  requiresIfExists: ["offset"]
};
function SR(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function xR(e) {
  return e === or(e) || !Er(e) ? mp(e) : SR(e);
}
function TR(e) {
  var t = e.getBoundingClientRect(), n = to(t.width) / e.offsetWidth || 1, r = to(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function kR(e, t, n) {
  n === void 0 && (n = !1);
  var r = Er(t), a = Er(t) && TR(t), s = Ia(t), l = no(e, a, n), u = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((ui(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  gp(s)) && (u = xR(t)), Er(t) ? (f = no(t, !0), f.x += t.clientLeft, f.y += t.clientTop) : s && (f.x = vp(s))), {
    x: l.left + u.scrollLeft - f.x,
    y: l.top + u.scrollTop - f.y,
    width: l.width,
    height: l.height
  };
}
function AR(e) {
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
function MR(e) {
  var t = AR(e);
  return UL.reduce(function(n, r) {
    return n.concat(t.filter(function(a) {
      return a.phase === r;
    }));
  }, []);
}
function $R(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function PR(e) {
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
function CR(e) {
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
      setOptions: function(w) {
        var x = typeof w == "function" ? w(d.options) : w;
        O(), d.options = Object.assign({}, s, d.options, x), d.scrollParents = {
          reference: os(u) ? ol(u) : u.contextElement ? ol(u.contextElement) : [],
          popper: ol(f)
        };
        var A = MR(PR([].concat(r, d.options.modifiers)));
        return d.orderedModifiers = A.filter(function(E) {
          return E.enabled;
        }), b(), g.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!v) {
          var w = d.elements, x = w.reference, A = w.popper;
          if (H_(x, A)) {
            d.rects = {
              reference: kR(x, Ml(A), d.options.strategy === "fixed"),
              popper: hp(A)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(P) {
              return d.modifiersData[P.name] = Object.assign({}, P.data);
            });
            for (var E = 0; E < d.orderedModifiers.length; E++) {
              if (d.reset === !0) {
                d.reset = !1, E = -1;
                continue;
              }
              var C = d.orderedModifiers[E], M = C.fn, N = C.options, F = N === void 0 ? {} : N, H = C.name;
              typeof M == "function" && (d = M({
                state: d,
                options: F,
                name: H,
                instance: g
              }) || d);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: $R(function() {
        return new Promise(function(S) {
          g.forceUpdate(), S(d);
        });
      }),
      destroy: function() {
        O(), v = !0;
      }
    };
    if (!H_(u, f))
      return g;
    g.setOptions(h).then(function(S) {
      !v && h.onFirstUpdate && h.onFirstUpdate(S);
    });
    function b() {
      d.orderedModifiers.forEach(function(S) {
        var w = S.name, x = S.options, A = x === void 0 ? {} : x, E = S.effect;
        if (typeof E == "function") {
          var C = E({
            state: d,
            name: w,
            instance: g,
            options: A
          }), M = function() {
          };
          m.push(C || M);
        }
      });
    }
    function O() {
      m.forEach(function(S) {
        return S();
      }), m = [];
    }
    return g;
  };
}
var IR = [rR, wR, tR, HL, yR, pR, DR, XL, vR], NR = /* @__PURE__ */ CR({
  defaultModifiers: IR
}), LR = Object.defineProperty, RR = (e, t, n) => t in e ? LR(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Ie = (e, t, n) => (RR(e, typeof t != "symbol" ? t + "" : t, n), n);
const Zi = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, a] of t)
    n[r] = a;
  return n;
}, FR = {}, YR = {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  viewBox: "0 0 24 24"
}, WR = /* @__PURE__ */ q("polyline", { points: "9 18 15 12 9 6" }, null, -1), UR = [
  WR
];
function VR(e, t) {
  return R(), G("svg", YR, UR);
}
const BR = /* @__PURE__ */ Zi(FR, [["render", VR]]), HR = {}, zR = {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  viewBox: "0 0 24 24"
}, jR = /* @__PURE__ */ q("polyline", { points: "15 18 9 12 15 6" }, null, -1), GR = [
  jR
];
function qR(e, t) {
  return R(), G("svg", zR, GR);
}
const KR = /* @__PURE__ */ Zi(HR, [["render", qR]]), ZR = {}, XR = {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  viewBox: "0 0 24 24"
}, JR = /* @__PURE__ */ q("polyline", { points: "6 9 12 15 18 9" }, null, -1), QR = [
  JR
];
function eF(e, t) {
  return R(), G("svg", XR, QR);
}
const tF = /* @__PURE__ */ Zi(ZR, [["render", eF]]), nF = {}, rF = {
  fill: "none",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  viewBox: "0 0 24 24"
}, iF = /* @__PURE__ */ q("path", { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" }, null, -1), aF = [
  iF
];
function sF(e, t) {
  return R(), G("svg", rF, aF);
}
const oF = /* @__PURE__ */ Zi(nF, [["render", sF]]), lF = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IconChevronDown: tF,
  IconChevronLeft: KR,
  IconChevronRight: BR,
  IconClock: oF
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
    const t = e, n = W(() => t.width || t.size), r = W(() => t.height || t.size), a = W(() => lF[`Icon${t.name}`]);
    return (s, l) => (R(), Ke(Zs(y(a)), {
      width: y(n),
      height: y(r),
      class: "vc-base-icon"
    }, null, 8, ["width", "height"]));
  }
});
function tb() {
  return typeof window < "u";
}
function uF(e) {
  return tb() && e in window;
}
function cF(e) {
  const t = Q(!1), n = W(() => t.value ? "dark" : "light");
  let r, a;
  function s(g) {
    t.value = g.matches;
  }
  function l() {
    uF("matchMedia") && (r = window.matchMedia("(prefers-color-scheme: dark)"), r.addEventListener("change", s), t.value = r.matches);
  }
  function u() {
    const { selector: g = ":root", darkClass: b = "dark" } = e.value, O = document.querySelector(g);
    t.value = O.classList.contains(b);
  }
  function f(g) {
    const { selector: b = ":root", darkClass: O = "dark" } = g;
    if (tb() && b && O) {
      const S = document.querySelector(b);
      S && (a = new MutationObserver(u), a.observe(S, {
        attributes: !0,
        attributeFilter: ["class"]
      }), t.value = S.classList.contains(O));
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
function fF(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var dF = typeof Iu == "object" && Iu && Iu.Object === Object && Iu, nb = dF, hF = nb, pF = typeof self == "object" && self && self.Object === Object && self, mF = hF || pF || Function("return this")(), hi = mF, vF = hi, gF = vF.Symbol, Yc = gF, z_ = Yc, rb = Object.prototype, _F = rb.hasOwnProperty, yF = rb.toString, Ko = z_ ? z_.toStringTag : void 0;
function bF(e) {
  var t = _F.call(e, Ko), n = e[Ko];
  try {
    e[Ko] = void 0;
    var r = !0;
  } catch {
  }
  var a = yF.call(e);
  return r && (t ? e[Ko] = n : delete e[Ko]), a;
}
var wF = bF, OF = Object.prototype, EF = OF.toString;
function DF(e) {
  return EF.call(e);
}
var SF = DF, j_ = Yc, xF = wF, TF = SF, kF = "[object Null]", AF = "[object Undefined]", G_ = j_ ? j_.toStringTag : void 0;
function MF(e) {
  return e == null ? e === void 0 ? AF : kF : G_ && G_ in Object(e) ? xF(e) : TF(e);
}
var pi = MF;
function $F(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Xi = $F, PF = pi, CF = Xi, IF = "[object AsyncFunction]", NF = "[object Function]", LF = "[object GeneratorFunction]", RF = "[object Proxy]";
function FF(e) {
  if (!CF(e))
    return !1;
  var t = PF(e);
  return t == NF || t == LF || t == IF || t == RF;
}
var fs = FF, YF = Array.isArray, Gr = YF;
function WF(e) {
  return e != null && typeof e == "object";
}
var qr = WF, UF = pi, VF = Gr, BF = qr, HF = "[object String]";
function zF(e) {
  return typeof e == "string" || !VF(e) && BF(e) && UF(e) == HF;
}
var ni = zF, jF = pi, GF = qr, qF = "[object Boolean]";
function KF(e) {
  return e === !0 || e === !1 || GF(e) && jF(e) == qF;
}
var ZF = KF, XF = pi, JF = qr, QF = "[object Number]";
function e8(e) {
  return typeof e == "number" || JF(e) && XF(e) == QF;
}
var Vr = e8, t8 = pi, n8 = qr, r8 = "[object Date]";
function i8(e) {
  return n8(e) && t8(e) == r8;
}
var a8 = i8;
function s8(e) {
  return function(t) {
    return e(t);
  };
}
var ib = s8, yl = {}, o8 = {
  get exports() {
    return yl;
  },
  set exports(e) {
    yl = e;
  }
};
(function(e, t) {
  var n = nb, r = t && !t.nodeType && t, a = r && !0 && e && !e.nodeType && e, s = a && a.exports === r, l = s && n.process, u = function() {
    try {
      var f = a && a.require && a.require("util").types;
      return f || l && l.binding && l.binding("util");
    } catch {
    }
  }();
  e.exports = u;
})(o8, yl);
var l8 = a8, u8 = ib, q_ = yl, K_ = q_ && q_.isDate, c8 = K_ ? u8(K_) : l8, f8 = c8, d8 = pi, h8 = qr, p8 = "[object Symbol]";
function m8(e) {
  return typeof e == "symbol" || h8(e) && d8(e) == p8;
}
var _p = m8, v8 = Gr, g8 = _p, _8 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, y8 = /^\w*$/;
function b8(e, t) {
  if (v8(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || g8(e) ? !0 : y8.test(e) || !_8.test(e) || t != null && e in Object(t);
}
var yp = b8, w8 = hi, O8 = w8["__core-js_shared__"], E8 = O8, $d = E8, Z_ = function() {
  var e = /[^.]+$/.exec($d && $d.keys && $d.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function D8(e) {
  return !!Z_ && Z_ in e;
}
var S8 = D8, x8 = Function.prototype, T8 = x8.toString;
function k8(e) {
  if (e != null) {
    try {
      return T8.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var ab = k8, A8 = fs, M8 = S8, $8 = Xi, P8 = ab, C8 = /[\\^$.*+?()[\]{}|]/g, I8 = /^\[object .+?Constructor\]$/, N8 = Function.prototype, L8 = Object.prototype, R8 = N8.toString, F8 = L8.hasOwnProperty, Y8 = RegExp(
  "^" + R8.call(F8).replace(C8, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function W8(e) {
  if (!$8(e) || M8(e))
    return !1;
  var t = A8(e) ? Y8 : I8;
  return t.test(P8(e));
}
var U8 = W8;
function V8(e, t) {
  return e == null ? void 0 : e[t];
}
var B8 = V8, H8 = U8, z8 = B8;
function j8(e, t) {
  var n = z8(e, t);
  return H8(n) ? n : void 0;
}
var ds = j8, G8 = ds, q8 = G8(Object, "create"), Wc = q8, X_ = Wc;
function K8() {
  this.__data__ = X_ ? X_(null) : {}, this.size = 0;
}
var Z8 = K8;
function X8(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var J8 = X8, Q8 = Wc, e4 = "__lodash_hash_undefined__", t4 = Object.prototype, n4 = t4.hasOwnProperty;
function r4(e) {
  var t = this.__data__;
  if (Q8) {
    var n = t[e];
    return n === e4 ? void 0 : n;
  }
  return n4.call(t, e) ? t[e] : void 0;
}
var i4 = r4, a4 = Wc, s4 = Object.prototype, o4 = s4.hasOwnProperty;
function l4(e) {
  var t = this.__data__;
  return a4 ? t[e] !== void 0 : o4.call(t, e);
}
var u4 = l4, c4 = Wc, f4 = "__lodash_hash_undefined__";
function d4(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = c4 && t === void 0 ? f4 : t, this;
}
var h4 = d4, p4 = Z8, m4 = J8, v4 = i4, g4 = u4, _4 = h4;
function go(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
go.prototype.clear = p4;
go.prototype.delete = m4;
go.prototype.get = v4;
go.prototype.has = g4;
go.prototype.set = _4;
var y4 = go;
function b4() {
  this.__data__ = [], this.size = 0;
}
var w4 = b4;
function O4(e, t) {
  return e === t || e !== e && t !== t;
}
var _o = O4, E4 = _o;
function D4(e, t) {
  for (var n = e.length; n--; )
    if (E4(e[n][0], t))
      return n;
  return -1;
}
var Uc = D4, S4 = Uc, x4 = Array.prototype, T4 = x4.splice;
function k4(e) {
  var t = this.__data__, n = S4(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : T4.call(t, n, 1), --this.size, !0;
}
var A4 = k4, M4 = Uc;
function $4(e) {
  var t = this.__data__, n = M4(t, e);
  return n < 0 ? void 0 : t[n][1];
}
var P4 = $4, C4 = Uc;
function I4(e) {
  return C4(this.__data__, e) > -1;
}
var N4 = I4, L4 = Uc;
function R4(e, t) {
  var n = this.__data__, r = L4(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
var F4 = R4, Y4 = w4, W4 = A4, U4 = P4, V4 = N4, B4 = F4;
function yo(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
yo.prototype.clear = Y4;
yo.prototype.delete = W4;
yo.prototype.get = U4;
yo.prototype.has = V4;
yo.prototype.set = B4;
var Vc = yo, H4 = ds, z4 = hi, j4 = H4(z4, "Map"), bp = j4, J_ = y4, G4 = Vc, q4 = bp;
function K4() {
  this.size = 0, this.__data__ = {
    hash: new J_(),
    map: new (q4 || G4)(),
    string: new J_()
  };
}
var Z4 = K4;
function X4(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var J4 = X4, Q4 = J4;
function eY(e, t) {
  var n = e.__data__;
  return Q4(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
var Bc = eY, tY = Bc;
function nY(e) {
  var t = tY(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var rY = nY, iY = Bc;
function aY(e) {
  return iY(this, e).get(e);
}
var sY = aY, oY = Bc;
function lY(e) {
  return oY(this, e).has(e);
}
var uY = lY, cY = Bc;
function fY(e, t) {
  var n = cY(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
var dY = fY, hY = Z4, pY = rY, mY = sY, vY = uY, gY = dY;
function bo(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
bo.prototype.clear = hY;
bo.prototype.delete = pY;
bo.prototype.get = mY;
bo.prototype.has = vY;
bo.prototype.set = gY;
var wp = bo, sb = wp, _Y = "Expected a function";
function Op(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(_Y);
  var n = function() {
    var r = arguments, a = t ? t.apply(this, r) : r[0], s = n.cache;
    if (s.has(a))
      return s.get(a);
    var l = e.apply(this, r);
    return n.cache = s.set(a, l) || s, l;
  };
  return n.cache = new (Op.Cache || sb)(), n;
}
Op.Cache = sb;
var yY = Op, bY = yY, wY = 500;
function OY(e) {
  var t = bY(e, function(r) {
    return n.size === wY && n.clear(), r;
  }), n = t.cache;
  return t;
}
var EY = OY, DY = EY, SY = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, xY = /\\(\\)?/g, TY = DY(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(SY, function(n, r, a, s) {
    t.push(a ? s.replace(xY, "$1") : r || n);
  }), t;
}), kY = TY;
function AY(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, a = Array(r); ++n < r; )
    a[n] = t(e[n], n, e);
  return a;
}
var MY = AY, Q_ = Yc, $Y = MY, PY = Gr, CY = _p, IY = 1 / 0, ey = Q_ ? Q_.prototype : void 0, ty = ey ? ey.toString : void 0;
function ob(e) {
  if (typeof e == "string")
    return e;
  if (PY(e))
    return $Y(e, ob) + "";
  if (CY(e))
    return ty ? ty.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -IY ? "-0" : t;
}
var NY = ob, LY = NY;
function RY(e) {
  return e == null ? "" : LY(e);
}
var FY = RY, YY = Gr, WY = yp, UY = kY, VY = FY;
function BY(e, t) {
  return YY(e) ? e : WY(e, t) ? [e] : UY(VY(e));
}
var lb = BY, HY = _p, zY = 1 / 0;
function jY(e) {
  if (typeof e == "string" || HY(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -zY ? "-0" : t;
}
var Hc = jY, GY = lb, qY = Hc;
function KY(e, t) {
  t = GY(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[qY(t[n++])];
  return n && n == r ? e : void 0;
}
var ub = KY, ZY = ub;
function XY(e, t, n) {
  var r = e == null ? void 0 : ZY(e, t);
  return r === void 0 ? n : r;
}
var Za = XY, JY = ds, QY = function() {
  try {
    var e = JY(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), cb = QY, ny = cb;
function e3(e, t, n) {
  t == "__proto__" && ny ? ny(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
var zc = e3, t3 = zc, n3 = _o, r3 = Object.prototype, i3 = r3.hasOwnProperty;
function a3(e, t, n) {
  var r = e[t];
  (!(i3.call(e, t) && n3(r, n)) || n === void 0 && !(t in e)) && t3(e, t, n);
}
var s3 = a3, o3 = 9007199254740991, l3 = /^(?:0|[1-9]\d*)$/;
function u3(e, t) {
  var n = typeof e;
  return t = t ?? o3, !!t && (n == "number" || n != "symbol" && l3.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Ep = u3;
function c3(e) {
  return function(t, n, r) {
    for (var a = -1, s = Object(t), l = r(t), u = l.length; u--; ) {
      var f = l[e ? u : ++a];
      if (n(s[f], f, s) === !1)
        break;
    }
    return t;
  };
}
var f3 = c3, d3 = f3, h3 = d3(), fb = h3;
function p3(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var m3 = p3, v3 = pi, g3 = qr, _3 = "[object Arguments]";
function y3(e) {
  return g3(e) && v3(e) == _3;
}
var b3 = y3, ry = b3, w3 = qr, db = Object.prototype, O3 = db.hasOwnProperty, E3 = db.propertyIsEnumerable, D3 = ry(function() {
  return arguments;
}()) ? ry : function(e) {
  return w3(e) && O3.call(e, "callee") && !E3.call(e, "callee");
}, Dp = D3, ao = {}, S3 = {
  get exports() {
    return ao;
  },
  set exports(e) {
    ao = e;
  }
};
function x3() {
  return !1;
}
var T3 = x3;
(function(e, t) {
  var n = hi, r = T3, a = t && !t.nodeType && t, s = a && !0 && e && !e.nodeType && e, l = s && s.exports === a, u = l ? n.Buffer : void 0, f = u ? u.isBuffer : void 0, h = f || r;
  e.exports = h;
})(S3, ao);
var k3 = 9007199254740991;
function A3(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= k3;
}
var Sp = A3, M3 = pi, $3 = Sp, P3 = qr, C3 = "[object Arguments]", I3 = "[object Array]", N3 = "[object Boolean]", L3 = "[object Date]", R3 = "[object Error]", F3 = "[object Function]", Y3 = "[object Map]", W3 = "[object Number]", U3 = "[object Object]", V3 = "[object RegExp]", B3 = "[object Set]", H3 = "[object String]", z3 = "[object WeakMap]", j3 = "[object ArrayBuffer]", G3 = "[object DataView]", q3 = "[object Float32Array]", K3 = "[object Float64Array]", Z3 = "[object Int8Array]", X3 = "[object Int16Array]", J3 = "[object Int32Array]", Q3 = "[object Uint8Array]", e6 = "[object Uint8ClampedArray]", t6 = "[object Uint16Array]", n6 = "[object Uint32Array]", Vt = {};
Vt[q3] = Vt[K3] = Vt[Z3] = Vt[X3] = Vt[J3] = Vt[Q3] = Vt[e6] = Vt[t6] = Vt[n6] = !0;
Vt[C3] = Vt[I3] = Vt[j3] = Vt[N3] = Vt[G3] = Vt[L3] = Vt[R3] = Vt[F3] = Vt[Y3] = Vt[W3] = Vt[U3] = Vt[V3] = Vt[B3] = Vt[H3] = Vt[z3] = !1;
function r6(e) {
  return P3(e) && $3(e.length) && !!Vt[M3(e)];
}
var i6 = r6, a6 = i6, s6 = ib, iy = yl, ay = iy && iy.isTypedArray, o6 = ay ? s6(ay) : a6, xp = o6, l6 = m3, u6 = Dp, c6 = Gr, f6 = ao, d6 = Ep, h6 = xp, p6 = Object.prototype, m6 = p6.hasOwnProperty;
function v6(e, t) {
  var n = c6(e), r = !n && u6(e), a = !n && !r && f6(e), s = !n && !r && !a && h6(e), l = n || r || a || s, u = l ? l6(e.length, String) : [], f = u.length;
  for (var h in e)
    (t || m6.call(e, h)) && !(l && // Safari 9 has enumerable `arguments.length` in strict mode.
    (h == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (h == "offset" || h == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (h == "buffer" || h == "byteLength" || h == "byteOffset") || // Skip index properties.
    d6(h, f))) && u.push(h);
  return u;
}
var hb = v6, g6 = Object.prototype;
function _6(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || g6;
  return e === n;
}
var Tp = _6;
function y6(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var pb = y6, b6 = pb, w6 = b6(Object.keys, Object), O6 = w6, E6 = Tp, D6 = O6, S6 = Object.prototype, x6 = S6.hasOwnProperty;
function T6(e) {
  if (!E6(e))
    return D6(e);
  var t = [];
  for (var n in Object(e))
    x6.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
var k6 = T6, A6 = fs, M6 = Sp;
function $6(e) {
  return e != null && M6(e.length) && !A6(e);
}
var $l = $6, P6 = hb, C6 = k6, I6 = $l;
function N6(e) {
  return I6(e) ? P6(e) : C6(e);
}
var kp = N6, L6 = fb, R6 = kp;
function F6(e, t) {
  return e && L6(e, t, R6);
}
var mb = F6, Y6 = Vc;
function W6() {
  this.__data__ = new Y6(), this.size = 0;
}
var U6 = W6;
function V6(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
var B6 = V6;
function H6(e) {
  return this.__data__.get(e);
}
var z6 = H6;
function j6(e) {
  return this.__data__.has(e);
}
var G6 = j6, q6 = Vc, K6 = bp, Z6 = wp, X6 = 200;
function J6(e, t) {
  var n = this.__data__;
  if (n instanceof q6) {
    var r = n.__data__;
    if (!K6 || r.length < X6 - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new Z6(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
var Q6 = J6, eW = Vc, tW = U6, nW = B6, rW = z6, iW = G6, aW = Q6;
function wo(e) {
  var t = this.__data__ = new eW(e);
  this.size = t.size;
}
wo.prototype.clear = tW;
wo.prototype.delete = nW;
wo.prototype.get = rW;
wo.prototype.has = iW;
wo.prototype.set = aW;
var Ap = wo, sW = "__lodash_hash_undefined__";
function oW(e) {
  return this.__data__.set(e, sW), this;
}
var lW = oW;
function uW(e) {
  return this.__data__.has(e);
}
var cW = uW, fW = wp, dW = lW, hW = cW;
function ic(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new fW(); ++t < n; )
    this.add(e[t]);
}
ic.prototype.add = ic.prototype.push = dW;
ic.prototype.has = hW;
var pW = ic;
function mW(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
var vb = mW;
function vW(e, t) {
  return e.has(t);
}
var gW = vW, _W = pW, yW = vb, bW = gW, wW = 1, OW = 2;
function EW(e, t, n, r, a, s) {
  var l = n & wW, u = e.length, f = t.length;
  if (u != f && !(l && f > u))
    return !1;
  var h = s.get(e), d = s.get(t);
  if (h && d)
    return h == t && d == e;
  var m = -1, v = !0, g = n & OW ? new _W() : void 0;
  for (s.set(e, t), s.set(t, e); ++m < u; ) {
    var b = e[m], O = t[m];
    if (r)
      var S = l ? r(O, b, m, t, e, s) : r(b, O, m, e, t, s);
    if (S !== void 0) {
      if (S)
        continue;
      v = !1;
      break;
    }
    if (g) {
      if (!yW(t, function(w, x) {
        if (!bW(g, x) && (b === w || a(b, w, n, r, s)))
          return g.push(x);
      })) {
        v = !1;
        break;
      }
    } else if (!(b === O || a(b, O, n, r, s))) {
      v = !1;
      break;
    }
  }
  return s.delete(e), s.delete(t), v;
}
var gb = EW, DW = hi, SW = DW.Uint8Array, _b = SW;
function xW(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, a) {
    n[++t] = [a, r];
  }), n;
}
var TW = xW;
function kW(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var AW = kW, sy = Yc, oy = _b, MW = _o, $W = gb, PW = TW, CW = AW, IW = 1, NW = 2, LW = "[object Boolean]", RW = "[object Date]", FW = "[object Error]", YW = "[object Map]", WW = "[object Number]", UW = "[object RegExp]", VW = "[object Set]", BW = "[object String]", HW = "[object Symbol]", zW = "[object ArrayBuffer]", jW = "[object DataView]", ly = sy ? sy.prototype : void 0, Pd = ly ? ly.valueOf : void 0;
function GW(e, t, n, r, a, s, l) {
  switch (n) {
    case jW:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case zW:
      return !(e.byteLength != t.byteLength || !s(new oy(e), new oy(t)));
    case LW:
    case RW:
    case WW:
      return MW(+e, +t);
    case FW:
      return e.name == t.name && e.message == t.message;
    case UW:
    case BW:
      return e == t + "";
    case YW:
      var u = PW;
    case VW:
      var f = r & IW;
      if (u || (u = CW), e.size != t.size && !f)
        return !1;
      var h = l.get(e);
      if (h)
        return h == t;
      r |= NW, l.set(e, t);
      var d = $W(u(e), u(t), r, a, s, l);
      return l.delete(e), d;
    case HW:
      if (Pd)
        return Pd.call(e) == Pd.call(t);
  }
  return !1;
}
var qW = GW;
function KW(e, t) {
  for (var n = -1, r = t.length, a = e.length; ++n < r; )
    e[a + n] = t[n];
  return e;
}
var ZW = KW, XW = ZW, JW = Gr;
function QW(e, t, n) {
  var r = t(e);
  return JW(e) ? r : XW(r, n(e));
}
var eU = QW;
function tU(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, a = 0, s = []; ++n < r; ) {
    var l = e[n];
    t(l, n, e) && (s[a++] = l);
  }
  return s;
}
var nU = tU;
function rU() {
  return [];
}
var iU = rU, aU = nU, sU = iU, oU = Object.prototype, lU = oU.propertyIsEnumerable, uy = Object.getOwnPropertySymbols, uU = uy ? function(e) {
  return e == null ? [] : (e = Object(e), aU(uy(e), function(t) {
    return lU.call(e, t);
  }));
} : sU, cU = uU, fU = eU, dU = cU, hU = kp;
function pU(e) {
  return fU(e, hU, dU);
}
var mU = pU, cy = mU, vU = 1, gU = Object.prototype, _U = gU.hasOwnProperty;
function yU(e, t, n, r, a, s) {
  var l = n & vU, u = cy(e), f = u.length, h = cy(t), d = h.length;
  if (f != d && !l)
    return !1;
  for (var m = f; m--; ) {
    var v = u[m];
    if (!(l ? v in t : _U.call(t, v)))
      return !1;
  }
  var g = s.get(e), b = s.get(t);
  if (g && b)
    return g == t && b == e;
  var O = !0;
  s.set(e, t), s.set(t, e);
  for (var S = l; ++m < f; ) {
    v = u[m];
    var w = e[v], x = t[v];
    if (r)
      var A = l ? r(x, w, v, t, e, s) : r(w, x, v, e, t, s);
    if (!(A === void 0 ? w === x || a(w, x, n, r, s) : A)) {
      O = !1;
      break;
    }
    S || (S = v == "constructor");
  }
  if (O && !S) {
    var E = e.constructor, C = t.constructor;
    E != C && "constructor" in e && "constructor" in t && !(typeof E == "function" && E instanceof E && typeof C == "function" && C instanceof C) && (O = !1);
  }
  return s.delete(e), s.delete(t), O;
}
var bU = yU, wU = ds, OU = hi, EU = wU(OU, "DataView"), DU = EU, SU = ds, xU = hi, TU = SU(xU, "Promise"), kU = TU, AU = ds, MU = hi, $U = AU(MU, "Set"), PU = $U, CU = ds, IU = hi, NU = CU(IU, "WeakMap"), LU = NU, mh = DU, vh = bp, gh = kU, _h = PU, yh = LU, yb = pi, Oo = ab, fy = "[object Map]", RU = "[object Object]", dy = "[object Promise]", hy = "[object Set]", py = "[object WeakMap]", my = "[object DataView]", FU = Oo(mh), YU = Oo(vh), WU = Oo(gh), UU = Oo(_h), VU = Oo(yh), ja = yb;
(mh && ja(new mh(new ArrayBuffer(1))) != my || vh && ja(new vh()) != fy || gh && ja(gh.resolve()) != dy || _h && ja(new _h()) != hy || yh && ja(new yh()) != py) && (ja = function(e) {
  var t = yb(e), n = t == RU ? e.constructor : void 0, r = n ? Oo(n) : "";
  if (r)
    switch (r) {
      case FU:
        return my;
      case YU:
        return fy;
      case WU:
        return dy;
      case UU:
        return hy;
      case VU:
        return py;
    }
  return t;
});
var BU = ja, Cd = Ap, HU = gb, zU = qW, jU = bU, vy = BU, gy = Gr, _y = ao, GU = xp, qU = 1, yy = "[object Arguments]", by = "[object Array]", Nu = "[object Object]", KU = Object.prototype, wy = KU.hasOwnProperty;
function ZU(e, t, n, r, a, s) {
  var l = gy(e), u = gy(t), f = l ? by : vy(e), h = u ? by : vy(t);
  f = f == yy ? Nu : f, h = h == yy ? Nu : h;
  var d = f == Nu, m = h == Nu, v = f == h;
  if (v && _y(e)) {
    if (!_y(t))
      return !1;
    l = !0, d = !1;
  }
  if (v && !d)
    return s || (s = new Cd()), l || GU(e) ? HU(e, t, n, r, a, s) : zU(e, t, f, n, r, a, s);
  if (!(n & qU)) {
    var g = d && wy.call(e, "__wrapped__"), b = m && wy.call(t, "__wrapped__");
    if (g || b) {
      var O = g ? e.value() : e, S = b ? t.value() : t;
      return s || (s = new Cd()), a(O, S, n, r, s);
    }
  }
  return v ? (s || (s = new Cd()), jU(e, t, n, r, a, s)) : !1;
}
var XU = ZU, JU = XU, Oy = qr;
function bb(e, t, n, r, a) {
  return e === t ? !0 : e == null || t == null || !Oy(e) && !Oy(t) ? e !== e && t !== t : JU(e, t, n, r, bb, a);
}
var wb = bb, QU = Ap, eV = wb, tV = 1, nV = 2;
function rV(e, t, n, r) {
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
      var m = new QU();
      if (r)
        var v = r(h, d, f, e, t, m);
      if (!(v === void 0 ? eV(d, h, tV | nV, r, m) : v))
        return !1;
    }
  }
  return !0;
}
var iV = rV, aV = Xi;
function sV(e) {
  return e === e && !aV(e);
}
var Ob = sV, oV = Ob, lV = kp;
function uV(e) {
  for (var t = lV(e), n = t.length; n--; ) {
    var r = t[n], a = e[r];
    t[n] = [r, a, oV(a)];
  }
  return t;
}
var cV = uV;
function fV(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
var Eb = fV, dV = iV, hV = cV, pV = Eb;
function mV(e) {
  var t = hV(e);
  return t.length == 1 && t[0][2] ? pV(t[0][0], t[0][1]) : function(n) {
    return n === e || dV(n, e, t);
  };
}
var vV = mV;
function gV(e, t) {
  return e != null && t in Object(e);
}
var _V = gV, yV = lb, bV = Dp, wV = Gr, OV = Ep, EV = Sp, DV = Hc;
function SV(e, t, n) {
  t = yV(t, e);
  for (var r = -1, a = t.length, s = !1; ++r < a; ) {
    var l = DV(t[r]);
    if (!(s = e != null && n(e, l)))
      break;
    e = e[l];
  }
  return s || ++r != a ? s : (a = e == null ? 0 : e.length, !!a && EV(a) && OV(l, a) && (wV(e) || bV(e)));
}
var Db = SV, xV = _V, TV = Db;
function kV(e, t) {
  return e != null && TV(e, t, xV);
}
var AV = kV, MV = wb, $V = Za, PV = AV, CV = yp, IV = Ob, NV = Eb, LV = Hc, RV = 1, FV = 2;
function YV(e, t) {
  return CV(e) && IV(t) ? NV(LV(e), t) : function(n) {
    var r = $V(n, e);
    return r === void 0 && r === t ? PV(n, e) : MV(t, r, RV | FV);
  };
}
var WV = YV;
function UV(e) {
  return e;
}
var Mp = UV;
function VV(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var BV = VV, HV = ub;
function zV(e) {
  return function(t) {
    return HV(t, e);
  };
}
var jV = zV, GV = BV, qV = jV, KV = yp, ZV = Hc;
function XV(e) {
  return KV(e) ? GV(ZV(e)) : qV(e);
}
var JV = XV, QV = vV, eB = WV, tB = Mp, nB = Gr, rB = JV;
function iB(e) {
  return typeof e == "function" ? e : e == null ? tB : typeof e == "object" ? nB(e) ? eB(e[0], e[1]) : QV(e) : rB(e);
}
var Sb = iB, aB = zc, sB = mb, oB = Sb;
function lB(e, t) {
  var n = {};
  return t = oB(t), sB(e, function(r, a, s) {
    aB(n, a, t(r, a, s));
  }), n;
}
var uB = lB;
function cB(e, t, n) {
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
var xb = cB, fB = xb, Ey = Math.max;
function dB(e, t, n) {
  return t = Ey(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, a = -1, s = Ey(r.length - t, 0), l = Array(s); ++a < s; )
      l[a] = r[t + a];
    a = -1;
    for (var u = Array(t + 1); ++a < t; )
      u[a] = r[a];
    return u[t] = n(l), fB(e, this, u);
  };
}
var hB = dB;
function pB(e) {
  return function() {
    return e;
  };
}
var mB = pB, vB = mB, Dy = cb, gB = Mp, _B = Dy ? function(e, t) {
  return Dy(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: vB(t),
    writable: !0
  });
} : gB, yB = _B, bB = 800, wB = 16, OB = Date.now;
function EB(e) {
  var t = 0, n = 0;
  return function() {
    var r = OB(), a = wB - (r - n);
    if (n = r, a > 0) {
      if (++t >= bB)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var DB = EB, SB = yB, xB = DB, TB = xB(SB), kB = TB, AB = Mp, MB = hB, $B = kB;
function PB(e, t) {
  return $B(MB(e, t, AB), e + "");
}
var $p = PB, CB = _o, IB = $l, NB = Ep, LB = Xi;
function RB(e, t, n) {
  if (!LB(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? IB(n) && NB(t, n.length) : r == "string" && t in n) ? CB(n[t], e) : !1;
}
var Pp = RB;
function FB(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var YB = FB, WB = Xi, UB = Tp, VB = YB, BB = Object.prototype, HB = BB.hasOwnProperty;
function zB(e) {
  if (!WB(e))
    return VB(e);
  var t = UB(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !HB.call(e, r)) || n.push(r);
  return n;
}
var jB = zB, GB = hb, qB = jB, KB = $l;
function ZB(e) {
  return KB(e) ? GB(e, !0) : qB(e);
}
var Cp = ZB, XB = $p, JB = _o, QB = Pp, eH = Cp, Tb = Object.prototype, tH = Tb.hasOwnProperty, nH = XB(function(e, t) {
  e = Object(e);
  var n = -1, r = t.length, a = r > 2 ? t[2] : void 0;
  for (a && QB(t[0], t[1], a) && (r = 1); ++n < r; )
    for (var s = t[n], l = eH(s), u = -1, f = l.length; ++u < f; ) {
      var h = l[u], d = e[h];
      (d === void 0 || JB(d, Tb[h]) && !tH.call(e, h)) && (e[h] = s[h]);
    }
  return e;
}), Sy = nH, rH = zc, iH = _o;
function aH(e, t, n) {
  (n !== void 0 && !iH(e[t], n) || n === void 0 && !(t in e)) && rH(e, t, n);
}
var kb = aH, ac = {}, sH = {
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
})(sH, ac);
var xy = _b;
function oH(e) {
  var t = new e.constructor(e.byteLength);
  return new xy(t).set(new xy(e)), t;
}
var lH = oH, uH = lH;
function cH(e, t) {
  var n = t ? uH(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var fH = cH;
function dH(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
var hH = dH, pH = Xi, Ty = Object.create, mH = function() {
  function e() {
  }
  return function(t) {
    if (!pH(t))
      return {};
    if (Ty)
      return Ty(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}(), vH = mH, gH = pb, _H = gH(Object.getPrototypeOf, Object), Ab = _H, yH = vH, bH = Ab, wH = Tp;
function OH(e) {
  return typeof e.constructor == "function" && !wH(e) ? yH(bH(e)) : {};
}
var EH = OH, DH = $l, SH = qr;
function xH(e) {
  return SH(e) && DH(e);
}
var TH = xH, kH = pi, AH = Ab, MH = qr, $H = "[object Object]", PH = Function.prototype, CH = Object.prototype, Mb = PH.toString, IH = CH.hasOwnProperty, NH = Mb.call(Object);
function LH(e) {
  if (!MH(e) || kH(e) != $H)
    return !1;
  var t = AH(e);
  if (t === null)
    return !0;
  var n = IH.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && Mb.call(n) == NH;
}
var RH = LH;
function FH(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
var $b = FH, YH = s3, WH = zc;
function UH(e, t, n, r) {
  var a = !n;
  n || (n = {});
  for (var s = -1, l = t.length; ++s < l; ) {
    var u = t[s], f = r ? r(n[u], e[u], u, n, e) : void 0;
    f === void 0 && (f = e[u]), a ? WH(n, u, f) : YH(n, u, f);
  }
  return n;
}
var VH = UH, BH = VH, HH = Cp;
function zH(e) {
  return BH(e, HH(e));
}
var jH = zH, ky = kb, GH = ac, qH = fH, KH = hH, ZH = EH, Ay = Dp, My = Gr, XH = TH, JH = ao, QH = fs, e5 = Xi, t5 = RH, n5 = xp, $y = $b, r5 = jH;
function i5(e, t, n, r, a, s, l) {
  var u = $y(e, n), f = $y(t, n), h = l.get(f);
  if (h) {
    ky(e, n, h);
    return;
  }
  var d = s ? s(u, f, n + "", e, t, l) : void 0, m = d === void 0;
  if (m) {
    var v = My(f), g = !v && JH(f), b = !v && !g && n5(f);
    d = f, v || g || b ? My(u) ? d = u : XH(u) ? d = KH(u) : g ? (m = !1, d = GH(f, !0)) : b ? (m = !1, d = qH(f, !0)) : d = [] : t5(f) || Ay(f) ? (d = u, Ay(u) ? d = r5(u) : (!e5(u) || QH(u)) && (d = ZH(f))) : m = !1;
  }
  m && (l.set(f, d), a(d, f, r, s, l), l.delete(f)), ky(e, n, d);
}
var a5 = i5, s5 = Ap, o5 = kb, l5 = fb, u5 = a5, c5 = Xi, f5 = Cp, d5 = $b;
function Pb(e, t, n, r, a) {
  e !== t && l5(t, function(s, l) {
    if (a || (a = new s5()), c5(s))
      u5(e, t, l, n, Pb, r, a);
    else {
      var u = r ? r(d5(e, l), s, l + "", e, t, a) : void 0;
      u === void 0 && (u = s), o5(e, l, u);
    }
  }, f5);
}
var Cb = Pb, h5 = Cb, Py = Xi;
function Ib(e, t, n, r, a, s) {
  return Py(e) && Py(t) && (s.set(t, e), h5(e, t, void 0, Ib, s), s.delete(t)), e;
}
var p5 = Ib, m5 = $p, v5 = Pp;
function g5(e) {
  return m5(function(t, n) {
    var r = -1, a = n.length, s = a > 1 ? n[a - 1] : void 0, l = a > 2 ? n[2] : void 0;
    for (s = e.length > 3 && typeof s == "function" ? (a--, s) : void 0, l && v5(n[0], n[1], l) && (s = a < 3 ? void 0 : s, a = 1), t = Object(t); ++r < a; ) {
      var u = n[r];
      u && e(t, u, r, s);
    }
    return t;
  });
}
var _5 = g5, y5 = Cb, b5 = _5, w5 = b5(function(e, t, n, r) {
  y5(e, t, n, r);
}), O5 = w5, E5 = xb, D5 = $p, S5 = p5, x5 = O5, T5 = D5(function(e) {
  return e.push(void 0, S5), E5(x5, void 0, e);
}), bl = T5, k5 = Object.prototype, A5 = k5.hasOwnProperty;
function M5(e, t) {
  return e != null && A5.call(e, t);
}
var $5 = M5, P5 = $5, C5 = Db;
function I5(e, t) {
  return e != null && C5(e, t, P5);
}
var Nb = I5, N5 = $l;
function L5(e, t) {
  return function(n, r) {
    if (n == null)
      return n;
    if (!N5(n))
      return e(n, r);
    for (var a = n.length, s = t ? a : -1, l = Object(n); (t ? s-- : ++s < a) && r(l[s], s, l) !== !1; )
      ;
    return n;
  };
}
var R5 = L5, F5 = mb, Y5 = R5, W5 = Y5(F5), U5 = W5;
function V5(e) {
  return e && e.length ? e[0] : void 0;
}
var Lb = V5;
function B5(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
var Ws = B5, H5 = U5;
function z5(e, t) {
  var n;
  return H5(e, function(r, a, s) {
    return n = t(r, a, s), !n;
  }), !!n;
}
var j5 = z5, G5 = vb, q5 = Sb, K5 = j5, Z5 = Gr, X5 = Pp;
function J5(e, t, n) {
  var r = Z5(e) ? G5 : K5;
  return n && X5(e, t, n) && (t = void 0), r(e, q5(t));
}
var Q5 = J5;
const ez = (e) => Object.prototype.toString.call(e).slice(8, -1), Hs = (e) => f8(e) && !isNaN(e.getTime()), ji = (e) => ez(e) === "Object", Ip = Nb, Cy = (e, t) => Q5(t, (n) => Nb(e, n)), $t = (e, t, n = "0") => {
  for (e = e != null ? String(e) : "", t = t || 2; e.length < t; )
    e = `${n}${e}`;
  return e;
}, Dr = (e) => Array.isArray(e), Ni = (e) => Dr(e) && e.length > 0, sc = (e) => e == null ? e ?? null : document && ni(e) ? document.querySelector(e) : e.$el ?? e, ba = (e, t, n, r = void 0) => {
  e.removeEventListener(t, n, r);
}, wa = (e, t, n, r = void 0) => (e.addEventListener(t, n, r), () => ba(e, t, n, r)), Wu = (e, t) => !!e && !!t && (e === t || e.contains(t)), Lu = (e, t) => {
  (e.key === " " || e.key === "Enter") && (t(e), e.preventDefault());
}, Rb = (e, ...t) => {
  const n = {};
  let r;
  for (r in e)
    t.includes(r) || (n[r] = e[r]);
  return n;
}, Fb = (e, t) => {
  const n = {};
  return t.forEach((r) => {
    r in e && (n[r] = e[r]);
  }), n;
};
function tz(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
const oc = () => {
  function e() {
    return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
  }
  return `${e() + e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`;
}, nz = ["base", "start", "end", "startEnd"], rz = [
  "class",
  "wrapperClass",
  "contentClass",
  "style",
  "contentStyle",
  "color",
  "fillMode"
], iz = { base: {}, start: {}, end: {} };
function Np(e, t, n = iz) {
  let r = e, a = {};
  t === !0 || ni(t) ? (r = ni(t) ? t : r, a = { ...n }) : ji(t) && (Cy(t, nz) ? a = { ...t } : a = {
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
    u === !0 || ni(u) ? (f = ni(u) ? u : f, s[l] = { color: f }) : ji(u) && (Cy(u, rz) ? s[l] = { ...u } : s[l] = {}), bl(s[l], { color: f });
  }), s;
}
class az {
  constructor() {
    Ie(this, "type", "highlight");
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
    Ie(this, "type", ""), Ie(this, "collectionType", ""), this.type = t, this.collectionType = n;
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
class sz extends Lp {
  constructor() {
    super("content", "content");
  }
  normalizeConfig(t, n) {
    return Np("base", n);
  }
}
class oz extends Lp {
  constructor() {
    super("dot", "dots");
  }
}
class lz extends Lp {
  constructor() {
    super("bar", "bars");
  }
}
class uz {
  constructor(t) {
    Ie(this, "color"), Ie(this, "renderers", [
      new sz(),
      new az(),
      new oz(),
      new lz()
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
const cz = 300, fz = 60, dz = 80, hz = {
  maxSwipeTime: cz,
  minHorizontalSwipeDistance: fz,
  maxVerticalSwipeDistance: dz
}, pz = "MMMM YYYY", mz = "W", vz = "MMM", gz = "h A", _z = [
  "L",
  "YYYY-MM-DD",
  "YYYY/MM/DD"
], yz = [
  "L h:mm A",
  "YYYY-MM-DD h:mm A",
  "YYYY/MM/DD h:mm A"
], bz = [
  "L HH:mm",
  "YYYY-MM-DD HH:mm",
  "YYYY/MM/DD HH:mm"
], wz = [
  "h:mm A"
], Oz = [
  "HH:mm"
], Ez = "WWW, MMM D, YYYY", Dz = [
  "L",
  "YYYY-MM-DD",
  "YYYY/MM/DD"
], Sz = "iso", xz = "YYYY-MM-DDTHH:mm:ss.SSSZ", Tz = {
  title: pz,
  weekdays: mz,
  navMonths: vz,
  hours: gz,
  input: _z,
  inputDateTime: yz,
  inputDateTime24hr: bz,
  inputTime: wz,
  inputTime24hr: Oz,
  dayPopover: Ez,
  data: Dz,
  model: Sz,
  iso: xz
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
const kz = Object.entries(Gi).reduce(
  (e, [t, { dow: n, L: r }]) => (e[t] = {
    id: t,
    firstDayOfWeek: n,
    masks: { L: r }
  }, e),
  {}
), Az = {
  componentPrefix: "V",
  color: "blue",
  isDark: !1,
  navVisibility: "click",
  titlePosition: "center",
  transition: "slide-h",
  touch: hz,
  masks: Tz,
  locales: kz,
  datePicker: {
    updateOnInput: !0,
    inputDebounce: 1e3,
    popover: {
      visibility: "hover-focus",
      placement: "bottom-start",
      isInteractive: !0
    }
  }
}, bh = xl(Az), Mz = W(() => uB(bh.locales, (e) => (e.masks = bl(e.masks, bh.masks), e))), $a = (e) => typeof window < "u" && Ip(window.__vcalendar__, e) ? Za(window.__vcalendar__, e) : Za(bh, e);
var lc = {}, $z = {
  get exports() {
    return lc;
  },
  set exports(e) {
    lc = e;
  }
}, uc = {}, Pz = {
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
})(Pz, uc);
var cc = {}, Cz = {
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
})(Cz, cc);
var fc = {}, Iz = {
  get exports() {
    return fc;
  },
  set exports(e) {
    fc = e;
  }
}, dc = {}, Nz = {
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
    } catch (b) {
      if (b instanceof RangeError)
        return [NaN];
      throw b;
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
})(Nz, dc);
var hc = {}, Lz = {
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
})(Lz, hc);
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
  function f(O, S, w) {
    var x, A;
    if (!O || (x = u.timezoneZ.exec(O), x))
      return 0;
    var E;
    if (x = u.timezoneHH.exec(O), x)
      return E = parseInt(x[1], 10), v(E) ? -(E * s) : NaN;
    if (x = u.timezoneHHMM.exec(O), x) {
      E = parseInt(x[1], 10);
      var C = parseInt(x[2], 10);
      return v(E, C) ? (A = Math.abs(E) * s + C * l, E > 0 ? -A : A) : NaN;
    }
    if (b(O)) {
      S = new Date(S || Date.now());
      var M = w ? S : h(S), N = d(M, O), F = w ? N : m(S, N, O);
      return -F;
    }
    return NaN;
  }
  function h(O) {
    return (0, r.default)(O.getFullYear(), O.getMonth(), O.getDate(), O.getHours(), O.getMinutes(), O.getSeconds(), O.getMilliseconds());
  }
  function d(O, S) {
    var w = (0, n.default)(O, S), x = (0, r.default)(w[0], w[1] - 1, w[2], w[3] % 24, w[4], w[5], 0).getTime(), A = O.getTime(), E = A % 1e3;
    return A -= E >= 0 ? E : 1e3 + E, x - A;
  }
  function m(O, S, w) {
    var x = O.getTime(), A = x - S, E = d(new Date(A), w);
    if (S === E)
      return S;
    A -= E - S;
    var C = d(new Date(A), w);
    return E === C ? E : Math.max(E, C);
  }
  function v(O, S) {
    return -23 <= O && O <= 23 && (S == null || 0 <= S && S <= 59);
  }
  var g = {};
  function b(O) {
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
})(Iz, fc);
var pc = {}, Rz = {
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
})(Rz, pc);
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = m;
  var n = l(uc), r = l(cc), a = l(fc), s = l(pc);
  function l(F) {
    return F && F.__esModule ? F : { default: F };
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
  function m(F, H) {
    if (arguments.length < 1)
      throw new TypeError("1 argument required, but only " + arguments.length + " present");
    if (F === null)
      return /* @__PURE__ */ new Date(NaN);
    var P = H || {}, j = P.additionalDigits == null ? h : (0, n.default)(P.additionalDigits);
    if (j !== 2 && j !== 1 && j !== 0)
      throw new RangeError("additionalDigits must be 0, 1 or 2");
    if (F instanceof Date || typeof F == "object" && Object.prototype.toString.call(F) === "[object Date]")
      return new Date(F.getTime());
    if (typeof F == "number" || Object.prototype.toString.call(F) === "[object Number]")
      return new Date(F);
    if (!(typeof F == "string" || Object.prototype.toString.call(F) === "[object String]"))
      return /* @__PURE__ */ new Date(NaN);
    var Y = v(F), J = g(Y.date, j), he = J.year, ue = J.restDateString, ve = b(ue, he);
    if (isNaN(ve))
      return /* @__PURE__ */ new Date(NaN);
    if (ve) {
      var xe = ve.getTime(), Fe = 0, Ne;
      if (Y.time && (Fe = O(Y.time), isNaN(Fe)))
        return /* @__PURE__ */ new Date(NaN);
      if (Y.timeZone || P.timeZone) {
        if (Ne = (0, a.default)(Y.timeZone || P.timeZone, new Date(xe + Fe)), isNaN(Ne))
          return /* @__PURE__ */ new Date(NaN);
      } else
        Ne = (0, r.default)(new Date(xe + Fe)), Ne = (0, r.default)(new Date(xe + Fe + Ne));
      return new Date(xe + Fe + Ne);
    } else
      return /* @__PURE__ */ new Date(NaN);
  }
  function v(F) {
    var H = {}, P = d.dateTimePattern.exec(F), j;
    if (P ? (H.date = P[1], j = P[3]) : (P = d.datePattern.exec(F), P ? (H.date = P[1], j = P[2]) : (H.date = null, j = F)), j) {
      var Y = d.timeZone.exec(j);
      Y ? (H.time = j.replace(Y[1], ""), H.timeZone = Y[1].trim()) : H.time = j;
    }
    return H;
  }
  function g(F, H) {
    var P = d.YYY[H], j = d.YYYYY[H], Y;
    if (Y = d.YYYY.exec(F) || j.exec(F), Y) {
      var J = Y[1];
      return {
        year: parseInt(J, 10),
        restDateString: F.slice(J.length)
      };
    }
    if (Y = d.YY.exec(F) || P.exec(F), Y) {
      var he = Y[1];
      return {
        year: parseInt(he, 10) * 100,
        restDateString: F.slice(he.length)
      };
    }
    return {
      year: null
    };
  }
  function b(F, H) {
    if (H === null)
      return null;
    var P, j, Y, J;
    if (F.length === 0)
      return j = /* @__PURE__ */ new Date(0), j.setUTCFullYear(H), j;
    if (P = d.MM.exec(F), P)
      return j = /* @__PURE__ */ new Date(0), Y = parseInt(P[1], 10) - 1, E(H, Y) ? (j.setUTCFullYear(H, Y), j) : /* @__PURE__ */ new Date(NaN);
    if (P = d.DDD.exec(F), P) {
      j = /* @__PURE__ */ new Date(0);
      var he = parseInt(P[1], 10);
      return C(H, he) ? (j.setUTCFullYear(H, 0, he), j) : /* @__PURE__ */ new Date(NaN);
    }
    if (P = d.MMDD.exec(F), P) {
      j = /* @__PURE__ */ new Date(0), Y = parseInt(P[1], 10) - 1;
      var ue = parseInt(P[2], 10);
      return E(H, Y, ue) ? (j.setUTCFullYear(H, Y, ue), j) : /* @__PURE__ */ new Date(NaN);
    }
    if (P = d.Www.exec(F), P)
      return J = parseInt(P[1], 10) - 1, M(H, J) ? S(H, J) : /* @__PURE__ */ new Date(NaN);
    if (P = d.WwwD.exec(F), P) {
      J = parseInt(P[1], 10) - 1;
      var ve = parseInt(P[2], 10) - 1;
      return M(H, J, ve) ? S(H, J, ve) : /* @__PURE__ */ new Date(NaN);
    }
    return null;
  }
  function O(F) {
    var H, P, j;
    if (H = d.HH.exec(F), H)
      return P = parseFloat(H[1].replace(",", ".")), N(P) ? P % 24 * u : NaN;
    if (H = d.HHMM.exec(F), H)
      return P = parseInt(H[1], 10), j = parseFloat(H[2].replace(",", ".")), N(P, j) ? P % 24 * u + j * f : NaN;
    if (H = d.HHMMSS.exec(F), H) {
      P = parseInt(H[1], 10), j = parseInt(H[2], 10);
      var Y = parseFloat(H[3].replace(",", "."));
      return N(P, j, Y) ? P % 24 * u + j * f + Y * 1e3 : NaN;
    }
    return null;
  }
  function S(F, H, P) {
    H = H || 0, P = P || 0;
    var j = /* @__PURE__ */ new Date(0);
    j.setUTCFullYear(F, 0, 4);
    var Y = j.getUTCDay() || 7, J = H * 7 + P + 1 - Y;
    return j.setUTCDate(j.getUTCDate() + J), j;
  }
  var w = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], x = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function A(F) {
    return F % 400 === 0 || F % 4 === 0 && F % 100 !== 0;
  }
  function E(F, H, P) {
    if (H < 0 || H > 11)
      return !1;
    if (P != null) {
      if (P < 1)
        return !1;
      var j = A(F);
      if (j && P > x[H] || !j && P > w[H])
        return !1;
    }
    return !0;
  }
  function C(F, H) {
    if (H < 1)
      return !1;
    var P = A(F);
    return !(P && H > 366 || !P && H > 365);
  }
  function M(F, H, P) {
    return !(H < 0 || H > 52 || P != null && (P < 0 || P > 6));
  }
  function N(F, H, P) {
    return !(F != null && (F < 0 || F >= 25) || H != null && (H < 0 || H >= 60) || P != null && (P < 0 || P >= 60));
  }
  e.exports = t.default;
})($z, lc);
const Fz = /* @__PURE__ */ fF(lc);
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
var Yz = {};
function Rp() {
  return Yz;
}
function ls(e, t) {
  var n, r, a, s, l, u, f, h;
  Sn(1, arguments);
  var d = Rp(), m = Eo((n = (r = (a = (s = t == null ? void 0 : t.weekStartsOn) !== null && s !== void 0 ? s : t == null || (l = t.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && a !== void 0 ? a : d.weekStartsOn) !== null && r !== void 0 ? r : (f = d.locale) === null || f === void 0 || (h = f.options) === null || h === void 0 ? void 0 : h.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(m >= 0 && m <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var v = Ji(e), g = v.getDay(), b = (g < m ? 7 : 0) + g - m;
  return v.setDate(v.getDate() - b), v.setHours(0, 0, 0, 0), v;
}
function Iy(e) {
  var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
var Wz = 6048e5;
function Uz(e, t, n) {
  Sn(2, arguments);
  var r = ls(e, n), a = ls(t, n), s = r.getTime() - Iy(r), l = a.getTime() - Iy(a);
  return Math.round((s - l) / Wz);
}
function Vz(e) {
  Sn(1, arguments);
  var t = Ji(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function Bz(e) {
  Sn(1, arguments);
  var t = Ji(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function Hz(e, t) {
  return Sn(1, arguments), Uz(Vz(e), Bz(e), t) + 1;
}
function zz(e, t) {
  var n, r, a, s, l, u, f, h;
  Sn(1, arguments);
  var d = Ji(e), m = d.getFullYear(), v = Rp(), g = Eo((n = (r = (a = (s = t == null ? void 0 : t.firstWeekContainsDate) !== null && s !== void 0 ? s : t == null || (l = t.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && a !== void 0 ? a : v.firstWeekContainsDate) !== null && r !== void 0 ? r : (f = v.locale) === null || f === void 0 || (h = f.options) === null || h === void 0 ? void 0 : h.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(g >= 1 && g <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var b = /* @__PURE__ */ new Date(0);
  b.setFullYear(m + 1, 0, g), b.setHours(0, 0, 0, 0);
  var O = ls(b, t), S = /* @__PURE__ */ new Date(0);
  S.setFullYear(m, 0, g), S.setHours(0, 0, 0, 0);
  var w = ls(S, t);
  return d.getTime() >= O.getTime() ? m + 1 : d.getTime() >= w.getTime() ? m : m - 1;
}
function jz(e, t) {
  var n, r, a, s, l, u, f, h;
  Sn(1, arguments);
  var d = Rp(), m = Eo((n = (r = (a = (s = t == null ? void 0 : t.firstWeekContainsDate) !== null && s !== void 0 ? s : t == null || (l = t.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && a !== void 0 ? a : d.firstWeekContainsDate) !== null && r !== void 0 ? r : (f = d.locale) === null || f === void 0 || (h = f.options) === null || h === void 0 ? void 0 : h.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), v = zz(e, t), g = /* @__PURE__ */ new Date(0);
  g.setFullYear(v, 0, m), g.setHours(0, 0, 0, 0);
  var b = ls(g, t);
  return b;
}
var Gz = 6048e5;
function qz(e, t) {
  Sn(1, arguments);
  var n = Ji(e), r = ls(n, t).getTime() - jz(n, t).getTime();
  return Math.round(r / Gz) + 1;
}
function mc(e) {
  return Sn(1, arguments), ls(e, {
    weekStartsOn: 1
  });
}
function Kz(e) {
  Sn(1, arguments);
  var t = Ji(e), n = t.getFullYear(), r = /* @__PURE__ */ new Date(0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  var a = mc(r), s = /* @__PURE__ */ new Date(0);
  s.setFullYear(n, 0, 4), s.setHours(0, 0, 0, 0);
  var l = mc(s);
  return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= l.getTime() ? n : n - 1;
}
function Zz(e) {
  Sn(1, arguments);
  var t = Kz(e), n = /* @__PURE__ */ new Date(0);
  n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0);
  var r = mc(n);
  return r;
}
var Xz = 6048e5;
function Jz(e) {
  Sn(1, arguments);
  var t = Ji(e), n = mc(t).getTime() - Zz(t).getTime();
  return Math.round(n / Xz) + 1;
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
var Rs = /* @__PURE__ */ ((e) => (e.Any = "any", e.All = "all", e))(Rs || {}), Yb = /* @__PURE__ */ ((e) => (e.Days = "days", e.Weeks = "weeks", e.Months = "months", e.Years = "years", e))(Yb || {}), Wb = /* @__PURE__ */ ((e) => (e.Days = "days", e.Weekdays = "weekdays", e.Weeks = "weeks", e.Months = "months", e.Years = "years", e))(Wb || {}), Ub = /* @__PURE__ */ ((e) => (e.OrdinalWeekdays = "ordinalWeekdays", e))(Ub || {});
class Qz {
  constructor(t, n, r) {
    Ie(this, "validated", !0), this.type = t, this.interval = n, this.from = r, this.from || (console.error(
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
        return g9(this.from.date, n) % this.interval === 0;
      case "months":
        return _9(this.from.date, n) % this.interval === 0;
      case "years":
        return Kb(this.from.date, n) % this.interval === 0;
      default:
        return !1;
    }
  }
}
class Do {
  constructor(t, n, r, a) {
    Ie(this, "components", []), this.type = t, this.validator = r, this.getter = a, this.components = this.normalizeComponents(n);
  }
  static create(t, n) {
    switch (t) {
      case "days":
        return new e9(n);
      case "weekdays":
        return new t9(n);
      case "weeks":
        return new n9(n);
      case "months":
        return new r9(n);
      case "years":
        return new i9(n);
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
class e9 extends Do {
  constructor(t) {
    super(
      "days",
      t,
      o9,
      ({ day: n, dayFromEnd: r }) => [n, -r]
    );
  }
}
class t9 extends Do {
  constructor(t) {
    super(
      "weekdays",
      t,
      wh,
      ({ weekday: n }) => [n]
    );
  }
}
class n9 extends Do {
  constructor(t) {
    super(
      "weeks",
      t,
      l9,
      ({ week: n, weekFromEnd: r }) => [n, -r]
    );
  }
}
class r9 extends Do {
  constructor(t) {
    super("months", t, u9, ({ month: n }) => [
      n
    ]);
  }
}
class i9 extends Do {
  constructor(t) {
    super("years", t, Vr, ({ year: n }) => [n]);
  }
}
class a9 {
  constructor(t, n) {
    Ie(this, "components"), this.type = t, this.components = this.normalizeComponents(n);
  }
  normalizeArrayConfig(t) {
    const n = [];
    return t.forEach((r, a) => {
      if (Vr(r)) {
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
      if (Vr(r)) {
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
class s9 {
  constructor(t) {
    Ie(this, "type", "function"), Ie(this, "validated", !0), this.fn = t, fs(t) || (console.error(
      "The function rule requires a valid function. This rule will be skipped."
    ), this.validated = !1);
  }
  passes(t) {
    return this.validated ? this.fn(t) : !0;
  }
}
class gc {
  constructor(t, n = {}, r) {
    Ie(this, "validated", !0), Ie(this, "config"), Ie(this, "type", Rs.Any), Ie(this, "from"), Ie(this, "until"), Ie(this, "rules", []), Ie(this, "locale", new yc()), this.parent = r, n.locale && (this.locale = n.locale), this.config = t, fs(t) ? (this.type = Rs.All, this.rules = [new s9(t)]) : Dr(t) ? (this.type = Rs.Any, this.rules = t.map((a) => new gc(a, n, this))) : ji(t) ? (this.type = Rs.All, this.from = t.from ? this.locale.getDateParts(t.from) : r == null ? void 0 : r.from, this.until = t.until ? this.locale.getDateParts(t.until) : r == null ? void 0 : r.until, this.rules = this.getObjectRules(t)) : (console.error("Rule group configuration must be an object or an array."), this.validated = !1);
  }
  getObjectRules(t) {
    const n = [];
    if (t.every && (ni(t.every) && (t.every = [1, `${t.every}s`]), Dr(t.every))) {
      const [r = 1, a = Yb.Days] = t.every;
      n.push(new Qz(a, r, this.from));
    }
    return Object.values(Wb).forEach((r) => {
      r in t && n.push(Do.create(r, t[r]));
    }), Object.values(Ub).forEach((r) => {
      r in t && n.push(new a9(r, t[r]));
    }), t.on != null && (Dr(t.on) || (t.on = [t.on]), n.push(
      new gc(t.on, { locale: this.locale }, this.parent)
    )), n;
  }
  passes(t) {
    return this.validated ? this.from && t.dayIndex <= this.from.dayIndex || this.until && t.dayIndex >= this.until.dayIndex ? !1 : this.type === Rs.Any ? this.rules.some((n) => n.passes(t)) : this.rules.every((n) => n.passes(t)) : !0;
  }
}
function o9(e) {
  return Vr(e) ? e >= 1 && e <= 31 : !1;
}
function wh(e) {
  return Vr(e) ? e >= 1 && e <= 7 : !1;
}
function l9(e) {
  return Vr(e) ? e >= -6 && e <= -1 || e >= 1 && e <= 6 : !1;
}
function u9(e) {
  return Vr(e) ? e >= 1 && e <= 12 : !1;
}
function Ly(e) {
  return !(!Vr(e) || e < -5 || e > 5 || e === 0);
}
const c9 = {
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
}, On = 7, f9 = 6, Vb = 1e3, Bb = Vb * 60, Hb = Bb * 60, Vu = Hb * 24, d9 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], h9 = ["L", "iso"], nl = {
  milliseconds: [0, 999, 3],
  seconds: [0, 59, 2],
  minutes: [0, 59, 2],
  hours: [0, 23, 2]
}, zb = /d{1,2}|W{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|Z{1,4}|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g, p9 = /\[([^]*?)\]/gm, Ry = {
  D(e) {
    return e.day;
  },
  DD(e) {
    return $t(e.day, 2);
  },
  // Do(d: DateParts, l: Locale) {
  //   return l.DoFn(d.day);
  // },
  d(e) {
    return e.weekday - 1;
  },
  dd(e) {
    return $t(e.weekday - 1, 2);
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
    return $t(e.month, 2);
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
    return $t(e.year, 4);
  },
  h(e) {
    return e.hours % 12 || 12;
  },
  hh(e) {
    return $t(e.hours % 12 || 12, 2);
  },
  H(e) {
    return e.hours;
  },
  HH(e) {
    return $t(e.hours, 2);
  },
  m(e) {
    return e.minutes;
  },
  mm(e) {
    return $t(e.minutes, 2);
  },
  s(e) {
    return e.seconds;
  },
  ss(e) {
    return $t(e.seconds, 2);
  },
  S(e) {
    return Math.round(e.milliseconds / 100);
  },
  SS(e) {
    return $t(Math.round(e.milliseconds / 10), 2);
  },
  SSS(e) {
    return $t(e.milliseconds, 3);
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
    return `${t > 0 ? "-" : "+"}${$t(Math.floor(Math.abs(t) / 60), 2)}`;
  },
  ZZZ(e) {
    const t = e.timezoneOffset;
    return `${t > 0 ? "-" : "+"}${$t(
      Math.floor(Math.abs(t) / 60) * 100 + Math.abs(t) % 60,
      4
    )}`;
  },
  ZZZZ(e) {
    const t = e.timezoneOffset;
    return `${t > 0 ? "-" : "+"}${$t(Math.floor(Math.abs(t) / 60), 2)}:${$t(
      Math.abs(t) % 60,
      2
    )}`;
  }
}, ga = /\d\d?/, m9 = /\d{3}/, v9 = /\d{4}/, Zo = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF/]+(\s*?[\u0600-\u06FF]+){1,2}/i, Fy = () => {
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
    v9,
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
    m9,
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
function jb(e, t) {
  return (Ni(e) && e || [
    ni(e) && e || "YYYY-MM-DD"
  ]).map(
    (n) => h9.reduce(
      (r, a) => r.replace(a, t.masks[a] || ""),
      n
    )
  );
}
function Gb(e) {
  return ji(e) && "year" in e && "month" in e && "day" in e;
}
function Wy(e, t = 1) {
  const n = e.getDay() + 1, r = n >= t ? t - n : -(7 - (t - n));
  return Nn(e, r);
}
function qb(e, t, n) {
  const r = Date.UTC(e, t - 1, n);
  return Fp(/* @__PURE__ */ new Date(0), new Date(r));
}
function Fp(e, t) {
  return Math.round((t.getTime() - e.getTime()) / Vu);
}
function g9(e, t) {
  return Math.ceil(Fp(Wy(e), Wy(t)) / 7);
}
function Kb(e, t) {
  return t.getUTCFullYear() - e.getUTCFullYear();
}
function _9(e, t) {
  return Kb(e, t) * 12 + (t.getMonth() - e.getMonth());
}
function Zb(e, t = "") {
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
    const d = `${$t(r, 4)}-${$t(a, 2)}-${$t(s, 2)}T${$t(
      l,
      2
    )}:${$t(u, 2)}:${$t(f, 2)}.${$t(h, 3)}`;
    return Fz(d, { timeZone: t });
  }
  return new Date(r, a - 1, s, l, u, f, h);
}
function y9(e, t) {
  let n = new Date(e.getTime());
  t.timezone && (n = new Date(
    e.toLocaleString("en-US", { timeZone: t.timezone })
  ), n.setMilliseconds(e.getMilliseconds()));
  const r = n.getMilliseconds(), a = n.getSeconds(), s = n.getMinutes(), l = n.getHours(), u = r + a * Vb + s * Bb + l * Hb, f = n.getMonth() + 1, h = n.getFullYear(), d = t.getMonthParts(f, h), m = n.getDate(), v = d.numDays - m + 1, g = n.getDay() + 1, b = Math.floor((m - 1) / 7 + 1), O = Math.floor((d.numDays - m) / 7 + 1), S = Math.ceil(
    (m + Math.abs(d.firstWeekday - d.firstDayOfWeek)) / 7
  ), w = d.numWeeks - S + 1, x = d.weeknumbers[S], A = qb(h, f, m);
  return {
    milliseconds: r,
    seconds: a,
    minutes: s,
    hours: l,
    time: u,
    day: m,
    dayFromEnd: v,
    weekday: g,
    weekdayOrdinal: b,
    weekdayOrdinalFromEnd: O,
    week: S,
    weekFromEnd: w,
    weeknumber: x,
    month: f,
    year: h,
    date: n,
    dateTime: n.getTime(),
    dayIndex: A,
    timezoneOffset: 0,
    isValid: !0
  };
}
function b9(e, t, n) {
  return `${t}-${e}-${n}`;
}
function w9(e, t, n) {
  const r = t % 4 === 0 && t % 100 !== 0 || t % 400 === 0, a = new Date(t, e - 1, 1), s = a.getDay() + 1, l = e === 2 && r ? 29 : d9[e - 1], u = n - 1, f = Hz(a, {
    weekStartsOn: u
  }), h = [], d = [];
  for (let m = 0; m < f; m++) {
    const v = Nn(a, m * 7);
    h.push(qz(v, { weekStartsOn: u })), d.push(Jz(v));
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
function O9() {
  const e = [];
  for (let a = 0; a < On; a++)
    e.push(
      Zb({
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
  return O9().map((r) => n.format(r));
}
function E9() {
  const e = [];
  for (let t = 0; t <= 24; t++)
    e.push(new Date(2e3, 0, 1, t));
  return e;
}
function D9(e = void 0) {
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
function Xb() {
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
  return Xb().map((r) => n.format(r));
}
function S9(e, t, n) {
  return Vr(t) ? t === e : Dr(t) ? t.includes(e) : fs(t) ? t(e, n) : !(t.min != null && t.min > e || t.max != null && t.max < e || t.interval != null && e % t.interval !== 0);
}
function rl(e, t, n) {
  const r = [], [a, s, l] = t;
  for (let u = a; u <= s; u++)
    (n == null || S9(u, n, e)) && r.push({
      value: u,
      label: $t(u, l)
    });
  return r;
}
function x9(e, t) {
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
function T9(e, t, n, r) {
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
function k9(e, t) {
  const n = { ...e };
  return Object.entries(t).forEach(([r, a]) => {
    const s = nl[r], l = e[r];
    n[r] = T9(
      e,
      s,
      l,
      a
    );
  }), n;
}
function Vy(e, t, n) {
  return jb(t, n).map((a) => {
    if (typeof a != "string")
      throw new Error("Invalid mask");
    let s = e;
    if (s.length > 1e3)
      return !1;
    let l = !0;
    const u = {};
    if (a.replace(zb, (d) => {
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
function A9(e, t, n) {
  if (e == null)
    return "";
  let r = jb(t, n)[0];
  /Z$/.test(r) && (n.timezone = "utc");
  const a = [];
  r = r.replace(p9, (l, u) => (a.push(u), "??"));
  const s = n.getDateParts(e);
  return r = r.replace(
    zb,
    (l) => l in Ry ? Ry[l](s, n) : l.slice(1, l.length - 1)
  ), r.replace(/\?\?/g, () => a.shift());
}
const M9 = {
  daily: ["year", "month", "day"],
  weekly: ["year", "month", "week"],
  monthly: ["year", "month"]
};
function $9({
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
  let v = !0, g = !1, b = !1, O = 0;
  const S = new Intl.DateTimeFormat(r.id, {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric"
  });
  let w = t.numDays - m + 1, x = t.numDays - w + 1, A = Math.floor((w - 1) / On + 1), E = 1, C = t.numWeeks, M = 1, N = t.month, F = t.year;
  const H = /* @__PURE__ */ new Date(), P = H.getDate(), j = H.getMonth() + 1, Y = H.getFullYear();
  for (let J = 1; J <= f9; J++) {
    for (let he = 1, ue = s; he <= On; he++, ue += ue === On ? 1 - On : 1) {
      v && ue === l && (w = 1, x = e.numDays, A = Math.floor((w - 1) / On + 1), E = Math.floor((h - w) / On + 1), C = 1, M = d, N = e.month, F = e.year, v = !1, g = !0);
      const ve = r.getDateFromParams(F, N, w, 0, 0, 0, 0), xe = r.getDateFromParams(F, N, w, 12, 0, 0, 0), Fe = r.getDateFromParams(
        F,
        N,
        w,
        23,
        59,
        59,
        999
      ), Ne = ve, ie = `${$t(F, 4)}-${$t(N, 2)}-${$t(w, 2)}`, Ae = he, lt = On - he, Ct = f[J - 1], Oe = u[J - 1], st = w === P && N === j && F === Y, Je = g && w === 1, xt = g && w === h, ce = J === 1, le = J === d, Pe = he === 1, ke = he === On, re = qb(F, N, w);
      a.push({
        locale: r,
        id: ie,
        position: ++O,
        label: w.toString(),
        ariaLabel: S.format(new Date(F, N - 1, w)),
        day: w,
        dayFromEnd: x,
        weekday: ue,
        weekdayPosition: Ae,
        weekdayPositionFromEnd: lt,
        weekdayOrdinal: A,
        weekdayOrdinalFromEnd: E,
        week: C,
        weekFromEnd: M,
        weekPosition: J,
        weeknumber: Ct,
        isoWeeknumber: Oe,
        month: N,
        year: F,
        date: Ne,
        startDate: ve,
        endDate: Fe,
        noonDate: xe,
        dayIndex: re,
        isToday: st,
        isFirstDay: Je,
        isLastDay: xt,
        isDisabled: !g,
        isFocusable: !g,
        isFocused: !1,
        inMonth: g,
        inPrevMonth: v,
        inNextMonth: b,
        onTop: ce,
        onBottom: le,
        onLeft: Pe,
        onRight: ke,
        classes: [
          `id-${ie}`,
          `day-${w}`,
          `day-from-end-${x}`,
          `weekday-${ue}`,
          `weekday-position-${Ae}`,
          `weekday-ordinal-${A}`,
          `weekday-ordinal-from-end-${E}`,
          `week-${C}`,
          `week-from-end-${M}`,
          {
            "is-today": st,
            "is-first-day": Je,
            "is-last-day": xt,
            "in-month": g,
            "in-prev-month": v,
            "in-next-month": b,
            "on-top": ce,
            "on-bottom": le,
            "on-left": Pe,
            "on-right": ke
          }
        ]
      }), g && xt ? (g = !1, b = !0, w = 1, x = h, A = 1, E = Math.floor((h - w) / On + 1), C = 1, M = n.numWeeks, N = n.month, F = n.year) : (w++, x--, A = Math.floor((w - 1) / On + 1), E = Math.floor((h - w) / On + 1));
    }
    C++, M--;
  }
  return a;
}
function P9(e, t, n, r) {
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
function C9(e, t) {
  return e.days.map((n) => ({
    label: t.formatDate(n.date, t.masks.weekdays),
    weekday: n.weekday
  }));
}
function Jb(e, t, n) {
  return Fb(
    n.getDateParts(n.toDate(e)),
    M9[t]
  );
}
function Qb({ day: e, week: t, month: n, year: r }, a, s, l) {
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
function ri(e) {
  return e != null && e.month != null && e.year != null;
}
function Oh(e, t) {
  return !ri(e) || !ri(t) ? !1 : (e = e, t = t, e.year !== t.year ? e.year < t.year : e.month && t.month && e.month !== t.month ? e.month < t.month : e.week && t.week && e.week !== t.week ? e.week < t.week : e.day && t.day && e.day !== t.day ? e.day < t.day : !1);
}
function _c(e, t) {
  return !ri(e) || !ri(t) ? !1 : (e = e, t = t, e.year !== t.year ? e.year > t.year : e.month && t.month && e.month !== t.month ? e.month > t.month : e.week && t.week && e.week !== t.week ? e.week > t.week : e.day && t.day && e.day !== t.day ? e.day > t.day : !1);
}
function ew(e, t, n) {
  return (e || !1) && !Oh(e, t) && !_c(e, n);
}
function I9(e, t) {
  return !e && t || e && !t ? !1 : !e && !t ? !0 : (e = e, t = t, e.year === t.year && e.month === t.month && e.week === t.week && e.day === t.day);
}
function N9(e, t, n, r) {
  if (!ri(e) || !ri(t))
    return [];
  const a = [];
  for (; !_c(e, t); )
    a.push(e), e = Qb(e, 1, n, r);
  return a;
}
function tw(e) {
  const { day: t, week: n, month: r, year: a } = e;
  let s = `${a}-${$t(r, 2)}`;
  return n && (s = `${s}-w${n}`), t && (s = `${s}-${$t(t, 2)}`), s;
}
function L9(e, t) {
  const { month: n, year: r, showWeeknumbers: a, showIsoWeeknumbers: s } = e, l = new Date(r, n - 1, 15), u = t.getMonthParts(n, r), f = t.getPrevMonthParts(n, r), h = t.getNextMonthParts(n, r), d = $9({ monthComps: u, prevMonthComps: f, nextMonthComps: h }, t), m = P9(d, a, s, t), v = C9(m[0], t);
  return {
    id: tw(e),
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
function R9(e, t) {
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
    Ie(this, "keys", []), Ie(this, "store", {}), this.size = t, this.createKey = n, this.createItem = r;
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
    Ie(this, "order"), Ie(this, "locale"), Ie(this, "start", null), Ie(this, "end", null), Ie(this, "repeat", null);
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
class F9 {
  constructor() {
    Ie(this, "records", {});
  }
  render(t, n, r) {
    var a, s, l, u;
    let f = null;
    const h = r[0].dayIndex, d = r[r.length - 1].dayIndex;
    return n.hasRepeat ? r.forEach((m) => {
      var v, g;
      if (n.startsOnDay(m)) {
        const b = n.daySpan < 1 / 0 ? n.daySpan : 1;
        f = {
          startDay: m.dayIndex,
          startTime: ((v = n.start) == null ? void 0 : v.time) ?? 0,
          endDay: m.dayIndex + b - 1,
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
        const f = a === u.startDay, h = a === u.endDay, d = f ? u.startTime : 0, m = new Date(t.startDate.getTime() + d), v = h ? u.endTime : Vu, g = new Date(t.endDate.getTime() + v), b = d === 0 && v === Vu, O = s.order || 0;
        r.push({
          ...u,
          data: s,
          onStart: f,
          onEnd: h,
          startTime: d,
          startDate: m,
          endTime: v,
          endDate: g,
          allDay: b,
          order: O
        });
      });
    }), r.sort((s, l) => s.order - l.order), r;
  }
}
const Y9 = 12, W9 = 5;
function U9(e, t) {
  const n = new Intl.DateTimeFormat().resolvedOptions().locale;
  let r;
  ni(e) ? r = e : Ip(e, "id") && (r = e.id), r = (r || n).toLowerCase();
  const a = Object.keys(t), s = (f) => a.find((h) => h.toLowerCase() === f);
  r = s(r) || s(r.substring(0, 2)) || n;
  const l = {
    ...t["en-IE"],
    ...t[r],
    id: r,
    monthCacheSize: Y9,
    pageCacheSize: W9
  };
  return ji(e) ? bl(e, l) : l;
}
let yc = class {
  constructor(t = void 0, n) {
    Ie(this, "id"), Ie(this, "daysInWeek"), Ie(this, "firstDayOfWeek"), Ie(this, "masks"), Ie(this, "timezone"), Ie(this, "hourLabels"), Ie(this, "dayNames"), Ie(this, "dayNamesShort"), Ie(this, "dayNamesShorter"), Ie(this, "dayNamesNarrow"), Ie(this, "monthNames"), Ie(this, "monthNamesShort"), Ie(this, "relativeTimeNames"), Ie(this, "amPm", ["am", "pm"]), Ie(this, "monthCache"), Ie(this, "pageCache");
    const { id: r, firstDayOfWeek: a, masks: s, monthCacheSize: l, pageCacheSize: u } = U9(t, Mz.value);
    this.monthCache = new By(
      l,
      b9,
      w9
    ), this.pageCache = new By(u, tw, L9), this.id = r, this.daysInWeek = On, this.firstDayOfWeek = tz(a, 1, On), this.masks = s, this.timezone = n || void 0, this.hourLabels = this.getHourLabels(), this.dayNames = Id("long", this.id), this.dayNamesShort = Id("short", this.id), this.dayNamesShorter = this.dayNamesShort.map((f) => f.substring(0, 2)), this.dayNamesNarrow = Id("narrow", this.id), this.monthNames = Uy("long", this.id), this.monthNamesShort = Uy("short", this.id), this.relativeTimeNames = D9(this.id);
  }
  formatDate(t, n) {
    return A9(t, n, this);
  }
  parseDate(t, n) {
    return Vy(t, n, this);
  }
  toDate(t, n = {}) {
    const r = /* @__PURE__ */ new Date(NaN);
    let a = r;
    const { fillDate: s, mask: l, patch: u, rules: f } = n;
    if (Vr(t) ? (n.type = "number", a = /* @__PURE__ */ new Date(+t)) : ni(t) ? (n.type = "string", a = t ? Vy(t, l || "iso", this) : r) : Hs(t) ? (n.type = "date", a = new Date(t.getTime())) : Gb(t) && (n.type = "object", a = this.getDateFromParts(t)), a && (u || f)) {
      let h = this.getDateParts(a);
      if (u && s != null) {
        const d = this.getDateParts(this.toDate(s));
        h = this.getDateParts(
          this.toDate({ ...d, ...Fb(h, c9[u]) })
        );
      }
      f && (h = k9(h, f)), a = this.getDateFromParts(h);
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
    return y9(t, this);
  }
  getDateFromParts(t) {
    return Zb(t, this.timezone);
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
    return R9(t, n);
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
    return E9().map((t) => this.formatDate(t, this.masks.hours));
  }
  getDayId(t) {
    return this.formatDate(t, "YYYY-MM-DD");
  }
};
class nw {
  constructor(t, n, r) {
    Ie(this, "key", ""), Ie(this, "hashcode", ""), Ie(this, "highlight", null), Ie(this, "content", null), Ie(this, "dot", null), Ie(this, "bar", null), Ie(this, "event", null), Ie(this, "popover", null), Ie(this, "customData", null), Ie(this, "ranges"), Ie(this, "hasRanges", !1), Ie(this, "order", 0), Ie(this, "pinPage", !1), Ie(this, "maxRepeatSpan", 0), Ie(this, "locale");
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
const rw = "__vc_base_context__", iw = {
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
function aw(e) {
  const t = W(() => e.color ?? ""), n = W(() => e.isDark ?? !1), { displayMode: r } = cF(n), a = W(() => new uz(t.value)), s = W(() => {
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
  }), f = W(() => new nw(
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
  return Wr(rw, h), h;
}
function V9(e) {
  return yt(rw, aw(e));
}
const B9 = (e, t, {
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
    const v = m.changedTouches[0], g = v.screenX - s, b = v.screenY - l;
    if ((/* @__PURE__ */ new Date()).getTime() - u < n && Math.abs(g) >= r && Math.abs(b) <= a) {
      const S = { toLeft: !1, toRight: !1 };
      g < 0 ? S.toLeft = !0 : S.toRight = !0, t(S);
    }
  }
  return wa(e, "touchstart", h, { passive: !0 }), wa(e, "touchend", d, { passive: !0 }), () => {
    ba(e, "touchstart", h), ba(e, "touchend", d);
  };
}, Bu = {}, H9 = (e, t = 10) => {
  Bu[e] = Date.now() + t;
}, z9 = (e, t) => {
  if (e in Bu) {
    const n = Bu[e];
    if (Date.now() < n)
      return;
    delete Bu[e];
  }
  t();
}, j9 = {
  ...iw,
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
}, G9 = [
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
], sw = "__vc_calendar_context__";
function q9(e, { emit: t, slots: n }) {
  const r = Q(null), a = Q(null), s = Q(null), l = Q((/* @__PURE__ */ new Date()).getDate()), u = Q(!1), f = Q(oc()), h = Q(oc()), d = Q(e.view), m = Q([]), v = Q("");
  let g = null, b = null;
  const {
    theme: O,
    color: S,
    displayMode: w,
    locale: x,
    masks: A,
    disabledAttribute: E,
    disabledDates: C
  } = V9(e), M = W(() => e.rows * e.columns), N = W(() => e.step || M.value), F = W(() => Lb(m.value) ?? null), H = W(() => Ws(m.value) ?? null), P = W(
    () => e.minPage || (e.minDate ? Ae(e.minDate) : null)
  ), j = W(
    () => e.maxPage || (e.maxDate ? Ae(e.maxDate) : null)
  ), Y = W(() => e.navVisibility), J = W(() => !!e.showWeeknumbers), he = W(() => !!e.showIsoWeeknumbers), ue = W(() => d.value === "monthly"), ve = W(() => d.value === "weekly"), xe = W(() => d.value === "daily"), Fe = () => {
    u.value = !0, t("transition-start");
  }, Ne = () => {
    u.value = !1, t("transition-end"), g && (g.resolve(!0), g = null);
  }, ie = (se, me, He = d.value) => Qb(se, me, He, x.value), Ae = (se) => Jb(se, d.value, x.value), lt = (se) => {
    !E.value || !ce.value || (se.isDisabled = ce.value.cellExists(
      E.value.key,
      se.dayIndex
    ));
  }, Ct = (se) => {
    se.isFocusable = se.inMonth && se.day === l.value;
  }, Oe = (se, me) => {
    for (const He of se)
      for (const V of He.days)
        if (me(V) === !1)
          return;
  }, st = W(
    () => m.value.reduce((se, me) => (se.push(...me.viewDays), se), [])
  ), Je = W(() => {
    const se = [];
    return (e.attributes || []).forEach((me, He) => {
      if (!me || !me.dates)
        return;
      const V = Ip(me, "key") ? me.key : He, pe = me.order || 0;
      se.push(
        new nw(
          {
            ...me,
            key: V,
            order: pe
          },
          O.value,
          x.value
        )
      );
    }), E.value && se.push(E.value), se;
  }), xt = W(() => Ni(Je.value)), ce = W(() => {
    const se = new F9();
    return Je.value.forEach((me) => {
      me.ranges.forEach((He) => {
        se.render(me, He, st.value);
      });
    }), se;
  }), le = W(() => st.value.reduce((se, me) => (se[me.dayIndex] = { day: me, cells: [] }, se[me.dayIndex].cells.push(...ce.value.getCells(me)), se), {})), Pe = (se, me) => {
    const He = e.showWeeknumbers || e.showIsoWeeknumbers;
    return He == null ? "" : ZF(He) ? He ? "left" : "" : He.startsWith("right") ? me > 1 ? "right" : He : se > 1 ? "left" : He;
  }, ke = () => {
    var se, me;
    if (!xt.value)
      return null;
    const He = Je.value.find((Ce) => Ce.pinPage) || Je.value[0];
    if (!He || !He.hasRanges)
      return null;
    const [V] = He.ranges, pe = ((se = V.start) == null ? void 0 : se.date) || ((me = V.end) == null ? void 0 : me.date);
    return pe ? Ae(pe) : null;
  }, re = () => {
    if (ri(F.value))
      return F.value;
    const se = ke();
    return ri(se) ? se : Ae(/* @__PURE__ */ new Date());
  }, $ = (se, me = {}) => {
    const { view: He = d.value, position: V = 1, force: pe } = me, Ce = V > 0 ? 1 - V : -(M.value + V);
    let ut = ie(se, Ce, He), Xt = ie(ut, M.value - 1, He);
    return pe || (Oh(ut, P.value) ? ut = P.value : _c(Xt, j.value) && (ut = ie(j.value, 1 - M.value)), Xt = ie(ut, M.value - 1)), { fromPage: ut, toPage: Xt };
  }, k = (se, me, He = "") => {
    if (He === "none" || He === "fade")
      return He;
    if ((se == null ? void 0 : se.view) !== (me == null ? void 0 : me.view))
      return "fade";
    const V = _c(me, se), pe = Oh(me, se);
    return !V && !pe ? "fade" : He === "slide-v" ? pe ? "slide-down" : "slide-up" : pe ? "slide-right" : "slide-left";
  }, z = (se = {}) => new Promise((me, He) => {
    const { position: V = 1, force: pe = !1, transition: Ce } = se, ut = ri(se.page) ? se.page : re(), { fromPage: Xt } = $(ut, {
      position: V,
      force: pe
    }), qn = [];
    for (let yn = 0; yn < M.value; yn++) {
      const na = ie(Xt, yn), ra = yn + 1, ms = Math.ceil(ra / e.columns), Ln = e.rows - ms + 1, vs = ra % e.columns || e.columns, _i = e.columns - vs + 1, ko = Pe(vs, _i);
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
          showIsoWeeknumbers: he.value,
          weeknumberPosition: ko
        })
      );
    }
    v.value = k(
      m.value[0],
      qn[0],
      Ce
    ), m.value = qn, v.value && v.value !== "none" ? g = {
      resolve: me,
      reject: He
    } : me(!0);
  }), fe = (se) => {
    const me = F.value ?? Ae(/* @__PURE__ */ new Date());
    return ie(me, se);
  }, ge = (se, me = {}) => {
    const He = ri(se) ? se : Ae(se);
    return Object.assign(
      me,
      $(He, {
        ...me,
        force: !0
      })
    ), N9(
      me.fromPage,
      me.toPage,
      d.value,
      x.value
    ).map((pe) => ew(pe, P.value, j.value)).every((pe) => pe);
  }, je = (se, me = {}) => ge(fe(se), me), Yt = W(() => je(-N.value)), Et = W(() => je(N.value)), Tt = async (se, me = {}) => !me.force && !ge(se, me) ? !1 : (me.fromPage && !I9(me.fromPage, F.value) && (a.value && a.value.hide({ hideDelay: 0 }), me.view && (H9("view", 10), d.value = me.view), await z({
    ...me,
    page: me.fromPage,
    position: 1,
    force: !0
  }), t("did-move", m.value)), !0), rn = (se, me = {}) => Tt(fe(se), me), _t = () => rn(-N.value), Z = () => rn(N.value), oe = (se) => {
    const me = ue.value ? ".in-month" : "", He = `.id-${x.value.getDayId(se)}${me}`, V = `${He}.vc-focusable, ${He} .vc-focusable`, pe = r.value;
    if (pe) {
      const Ce = pe.querySelector(V);
      if (Ce)
        return Ce.focus(), !0;
    }
    return !1;
  }, zt = async (se, me = {}) => oe(se) ? !0 : (await Tt(se, me), oe(se)), Mt = (se, me) => {
    l.value = se.day, t("dayclick", se, me);
  }, mn = (se, me) => {
    t("daymouseenter", se, me);
  }, ur = (se, me) => {
    t("daymouseleave", se, me);
  }, kn = (se, me) => {
    l.value = se.day, s.value = se, se.isFocused = !0, t("dayfocusin", se, me);
  }, An = (se, me) => {
    s.value = null, se.isFocused = !1, t("dayfocusout", se, me);
  }, Pr = (se, me) => {
    t("daykeydown", se, me);
    const He = se.noonDate;
    let V = null;
    switch (me.key) {
      case "ArrowLeft": {
        V = Nn(He, -1);
        break;
      }
      case "ArrowRight": {
        V = Nn(He, 1);
        break;
      }
      case "ArrowUp": {
        V = Nn(He, -7);
        break;
      }
      case "ArrowDown": {
        V = Nn(He, 7);
        break;
      }
      case "Home": {
        V = Nn(He, -se.weekdayPosition + 1);
        break;
      }
      case "End": {
        V = Nn(He, se.weekdayPositionFromEnd);
        break;
      }
      case "PageUp": {
        me.altKey ? V = Ny(He, -1) : V = vc(He, -1);
        break;
      }
      case "PageDown": {
        me.altKey ? V = Ny(He, 1) : V = vc(He, 1);
        break;
      }
    }
    V && (me.preventDefault(), zt(V).catch());
  }, Zr = (se) => {
    const me = s.value;
    me != null && Pr(me, se);
  }, Na = (se, me) => {
    t("weeknumberclick", se, me);
  };
  z({
    page: e.initialPage,
    position: e.initialPagePosition
  }), zr(() => {
    !e.disablePageSwipe && r.value && (b = B9(
      r.value,
      ({ toLeft: se = !1, toRight: me = !1 }) => {
        se ? Z() : me && _t();
      },
      $a("touch")
    ));
  }), Pa(() => {
    m.value = [], b && b();
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
      z9("view", () => {
        z();
      }), t("update:view", d.value);
    }
  ), Ue(
    () => l.value,
    () => {
      Oe(m.value, (se) => Ct(se));
    }
  ), Gn(() => {
    t("update:pages", m.value), Oe(m.value, (se) => {
      lt(se), Ct(se);
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
    color: S,
    displayMode: w,
    locale: x,
    masks: A,
    attributes: Je,
    disabledAttribute: E,
    disabledDates: C,
    attributeContext: ce,
    days: st,
    dayCells: le,
    count: M,
    step: N,
    firstPage: F,
    lastPage: H,
    canMovePrev: Yt,
    canMoveNext: Et,
    minPage: P,
    maxPage: j,
    isMonthly: ue,
    isWeekly: ve,
    isDaily: xe,
    navVisibility: Y,
    showWeeknumbers: J,
    showIsoWeeknumbers: he,
    getDateAddress: Ae,
    canMove: ge,
    canMoveBy: je,
    move: Tt,
    moveBy: rn,
    movePrev: _t,
    moveNext: Z,
    onTransitionBeforeEnter: Fe,
    onTransitionAfterEnter: Ne,
    tryFocusDate: oe,
    focusDate: zt,
    onKeydown: Zr,
    onDayKeydown: Pr,
    onDayClick: Mt,
    onDayMouseenter: mn,
    onDayMouseleave: ur,
    onDayFocusin: kn,
    onDayFocusout: An,
    onWeeknumberClick: Na
  };
  return Wr(sw, ta), ta;
}
function hs() {
  const e = yt(sw);
  if (e)
    return e;
  throw new Error(
    "Calendar context missing. Please verify this component is nested within a valid context provider."
  );
}
const K9 = {
  inheritAttrs: !1
}, js = /* @__PURE__ */ Re({
  ...K9,
  __name: "CalendarSlot",
  props: {
    name: null
  },
  setup(e) {
    const { slots: t } = hs();
    return (n, r) => y(t)[e.name] ? (R(), Ke(Zs(y(t)[e.name]), ts(Zt({ key: 0 }, n.$attrs)), null, 16)) : nt(n.$slots, "default", { key: 1 });
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
function ow(e) {
  document && document.dispatchEvent(
    new CustomEvent("toggle-popover", {
      detail: e
    })
  );
}
function lw(e) {
  const { visibility: t } = e, n = t === "click", r = t === "hover", a = t === "hover-focus", s = t === "focus";
  e.autoHide = !n;
  let l = !1, u = !1;
  const f = (b) => {
    n && (ow({
      ...e,
      target: e.target || b.currentTarget
    }), b.stopPropagation());
  }, h = (b) => {
    l || (l = !0, (r || a) && Eh({
      ...e,
      target: e.target || b.currentTarget
    }));
  }, d = () => {
    l && (l = !1, (r || a && !u) && bc(e));
  }, m = (b) => {
    u || (u = !0, (s || a) && Eh({
      ...e,
      target: e.target || b.currentTarget
    }));
  }, v = (b) => {
    u && !Wu(b.currentTarget, b.relatedTarget) && (u = !1, (s || a && !l) && bc(e));
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
  const r = [], a = lw(t);
  Object.entries(a).forEach(([s, l]) => {
    r.push(wa(n, s, l));
  }), n.popoverHandlers = r;
}, uw = {
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
}, Z9 = ["disabled"], X9 = {
  key: 1,
  type: "button",
  class: "vc-title"
}, J9 = ["disabled"], cw = /* @__PURE__ */ Re({
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
    })), b = W(() => ({ gridTemplateColumns: v.value.split("").map((S) => {
      switch (S) {
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
    return (O, S) => (R(), G("div", {
      class: Qe(["vc-header", { "is-lg": e.isLg, "is-xl": e.isXl, "is-2xl": e.is2xl }]),
      style: Fi(y(b))
    }, [
      y(g).prev ? (R(), G("button", {
        key: 0,
        type: "button",
        class: "vc-arrow vc-prev vc-focus",
        disabled: !y(a),
        onClick: S[0] || (S[0] = //@ts-ignore
        (...w) => y(s) && y(s)(...w)),
        onKeydown: S[1] || (S[1] = jd(
          //@ts-ignore
          (...w) => y(s) && y(s)(...w),
          ["space", "enter"]
        ))
      }, [
        Te(js, {
          name: "header-prev-button",
          disabled: !y(a)
        }, {
          default: $e(() => [
            Te(io, {
              name: "ChevronLeft",
              size: "24"
            })
          ]),
          _: 1
        }, 8, ["disabled"])
      ], 40, Z9)) : we("", !0),
      y(g).title ? rr((R(), G("button", X9, [
        Te(js, {
          name: "header-title",
          title: e.page.title
        }, {
          default: $e(() => [
            q("span", null, Se(e.page.title), 1)
          ]),
          _: 1
        }, 8, ["title"])
      ])), [
        [y(uw), y(h)]
      ]) : we("", !0),
      y(g).next ? (R(), G("button", {
        key: 2,
        type: "button",
        class: "vc-arrow vc-next vc-focus",
        disabled: !y(l),
        onClick: S[2] || (S[2] = //@ts-ignore
        (...w) => y(u) && y(u)(...w)),
        onKeydown: S[3] || (S[3] = jd(
          //@ts-ignore
          (...w) => y(u) && y(u)(...w),
          ["space", "enter"]
        ))
      }, [
        Te(js, {
          name: "header-next-button",
          disabled: !y(l)
        }, {
          default: $e(() => [
            Te(io, {
              name: "ChevronRight",
              size: "24"
            })
          ]),
          _: 1
        }, 8, ["disabled"])
      ], 40, J9)) : we("", !0)
    ], 6));
  }
}), Q9 = Re({
  directives: { popover: uw },
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
    } = hs(), v = W(() => e.day), g = W(() => r.value.getCells(v.value)), b = W(
      () => g.value.map((ue) => ue.data)
    ), O = W(() => ({
      ...v.value,
      attributes: b.value,
      attributeCells: g.value
    }));
    function S({ data: ue }, { popovers: ve }) {
      const { key: xe, customData: Fe, popover: Ne } = ue;
      if (!Ne)
        return;
      const ie = Sy(
        {
          key: xe,
          customData: Fe,
          attribute: ue
        },
        { ...Ne },
        {
          visibility: Ne.label ? "hover" : "click",
          placement: "bottom",
          isInteractive: !Ne.label
        }
      );
      ve.splice(0, 0, ie);
    }
    const w = W(() => {
      const ue = {
        ...n.value.prepareRender({}),
        popovers: []
      };
      return g.value.forEach((ve) => {
        n.value.render(ve, ue), S(ve, ue);
      }), ue;
    }), x = W(() => w.value.highlights), A = W(() => !!Ni(x.value)), E = W(() => w.value.content), C = W(() => w.value.dots), M = W(() => !!Ni(C.value)), N = W(() => w.value.bars), F = W(() => !!Ni(N.value)), H = W(() => w.value.popovers), P = W(
      () => H.value.map((ue) => ue.attribute)
    ), j = W(() => [
      "vc-day",
      ...v.value.classes,
      { "vc-day-box-center-center": !s["day-content"] },
      { "is-not-in-month": !e.day.inMonth }
    ]), Y = W(() => {
      let ue;
      v.value.isFocusable ? ue = "0" : ue = "-1";
      const ve = [
        "vc-day-content vc-focusable vc-focus vc-attr",
        { "vc-disabled": v.value.isDisabled },
        Za(Ws(x.value), "contentClass"),
        Za(Ws(E.value), "class") || ""
      ], xe = {
        ...Za(Ws(x.value), "contentStyle"),
        ...Za(Ws(E.value), "style")
      };
      return {
        class: ve,
        style: xe,
        tabindex: ue,
        "aria-label": v.value.ariaLabel,
        "aria-disabled": !!v.value.isDisabled,
        role: "button"
      };
    }), J = W(() => ({
      click(ue) {
        l(O.value, ue);
      },
      mouseenter(ue) {
        u(O.value, ue);
      },
      mouseleave(ue) {
        f(O.value, ue);
      },
      focusin(ue) {
        h(O.value, ue);
      },
      focusout(ue) {
        d(O.value, ue);
      },
      keydown(ue) {
        m(O.value, ue);
      }
    })), he = W(() => Ni(H.value) ? Sy(
      {
        id: a.value,
        data: { day: v, attributes: P.value }
      },
      ...H.value
    ) : null);
    return {
      attributes: b,
      attributeCells: g,
      bars: N,
      dayClasses: j,
      dayContentProps: Y,
      dayContentEvents: J,
      dayPopover: he,
      glyphs: w,
      dots: C,
      hasDots: M,
      hasBars: F,
      highlights: x,
      hasHighlights: A,
      locale: t,
      popovers: H
    };
  }
}), ej = {
  key: 0,
  class: "vc-highlights vc-day-layer"
}, tj = {
  key: 1,
  class: "vc-day-layer vc-day-box-center-bottom"
}, nj = { class: "vc-dots" }, rj = {
  key: 2,
  class: "vc-day-layer vc-day-box-center-bottom"
}, ij = { class: "vc-bars" };
function aj(e, t, n, r, a, s) {
  const l = Ii("CalendarSlot"), u = y0("popover");
  return R(), G("div", {
    class: Qe(e.dayClasses)
  }, [
    e.hasHighlights ? (R(), G("div", ej, [
      (R(!0), G(qe, null, Rt(e.highlights, ({ key: f, wrapperClass: h, class: d, style: m }) => (R(), G("div", {
        key: f,
        class: Qe(h)
      }, [
        q("div", {
          class: Qe(d),
          style: Fi(m)
        }, null, 6)
      ], 2))), 128))
    ])) : we("", !0),
    Te(l, {
      name: "day-content",
      day: e.day,
      attributes: e.attributes,
      "attribute-cells": e.attributeCells,
      dayProps: e.dayContentProps,
      dayEvents: e.dayContentEvents,
      locale: e.locale
    }, {
      default: $e(() => [
        rr((R(), G("div", Zt(e.dayContentProps, b0(e.dayContentEvents, !0)), [
          us(Se(e.day.label), 1)
        ], 16)), [
          [u, e.dayPopover]
        ])
      ]),
      _: 1
    }, 8, ["day", "attributes", "attribute-cells", "dayProps", "dayEvents", "locale"]),
    e.hasDots ? (R(), G("div", tj, [
      q("div", nj, [
        (R(!0), G(qe, null, Rt(e.dots, ({ key: f, class: h, style: d }) => (R(), G("span", {
          key: f,
          class: Qe(h),
          style: Fi(d)
        }, null, 6))), 128))
      ])
    ])) : we("", !0),
    e.hasBars ? (R(), G("div", rj, [
      q("div", ij, [
        (R(!0), G(qe, null, Rt(e.bars, ({ key: f, class: h, style: d }) => (R(), G("span", {
          key: f,
          class: Qe(h),
          style: Fi(d)
        }, null, 6))), 128))
      ])
    ])) : we("", !0)
  ], 2);
}
const sj = /* @__PURE__ */ Zi(Q9, [["render", aj]]), oj = {
  name: "CalendarPane",
  inheritAttrs: !1,
  components: { CalendarHeader: cw, CalendarDay: sj },
  props: {
    page: { type: Object, required: !0 }
  },
  setup() {
    const { onWeeknumberClick: e } = hs();
    return {
      onWeeknumberClick: e
    };
  }
}, lj = { class: "vc-weekdays" }, uj = ["onClick"];
function cj(e, t, n, r, a, s) {
  const l = Ii("CalendarHeader"), u = Ii("CalendarDay");
  return R(), G("div", {
    class: Qe([
      "vc-pane",
      `row-${n.page.row}`,
      `row-from-end-${n.page.rowFromEnd}`,
      `column-${n.page.column}`,
      `column-from-end-${n.page.columnFromEnd}`
    ]),
    ref: "pane"
  }, [
    Te(l, {
      page: n.page,
      "is-lg": "",
      "hide-arrows": ""
    }, null, 8, ["page"]),
    q("div", {
      class: Qe(["vc-weeks", {
        [`vc-show-weeknumbers-${n.page.weeknumberPosition}`]: n.page.weeknumberPosition
      }])
    }, [
      q("div", lj, [
        (R(!0), G(qe, null, Rt(n.page.weekdays, ({ weekday: f, label: h }, d) => (R(), G("div", {
          key: d,
          class: Qe(`vc-weekday vc-weekday-${f}`)
        }, Se(h), 3))), 128))
      ]),
      (R(!0), G(qe, null, Rt(n.page.viewWeeks, (f) => (R(), G("div", {
        key: `weeknumber-${f.weeknumber}`,
        class: "vc-week"
      }, [
        n.page.weeknumberPosition ? (R(), G("div", {
          key: 0,
          class: Qe(["vc-weeknumber", `is-${n.page.weeknumberPosition}`])
        }, [
          q("span", {
            class: Qe(["vc-weeknumber-content"]),
            onClick: (h) => r.onWeeknumberClick(f, h)
          }, Se(f.weeknumberDisplay), 9, uj)
        ], 2)) : we("", !0),
        (R(!0), G(qe, null, Rt(f.days, (h) => (R(), Ke(u, {
          key: h.id,
          day: h
        }, null, 8, ["day"]))), 128))
      ]))), 128))
    ], 2)
  ], 2);
}
const fj = /* @__PURE__ */ Zi(oj, [["render", cj]]), dj = Re({
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
        const lt = l.placement.split("-");
        lt.length > 1 && (Ae = lt[1]);
      }
      return ["start", "top", "left"].includes(Ae) ? ie ? "top" : "left" : ["end", "bottom", "right"].includes(Ae) ? ie ? "bottom" : "right" : ie ? "middle" : "center";
    });
    function m() {
      s && (s.destroy(), s = null);
    }
    function v() {
      En(() => {
        const ie = sc(l.target);
        !ie || !r.value || (s && s.state.elements.reference !== ie && m(), s ? s.update() : s = NR(
          ie,
          r.value,
          h.value
        ));
      });
    }
    function g(ie) {
      Object.assign(l, Rb(ie, "force"));
    }
    function b(ie, Ae) {
      clearTimeout(n), ie > 0 ? n = setTimeout(Ae, ie) : Ae();
    }
    function O(ie) {
      return !ie || !s ? !1 : sc(ie) === s.state.elements.reference;
    }
    async function S(ie = {}) {
      l.force || (ie.force && (l.force = !0), b(ie.showDelay ?? e.showDelay, () => {
        l.isVisible && (l.force = !1, t("after-show")), g({
          ...ie,
          isVisible: !0
        }), v();
      }));
    }
    function w(ie = {}) {
      s && (ie.target && !O(ie.target) || l.force || (ie.force && (l.force = !0), b(ie.hideDelay ?? e.hideDelay, () => {
        l.isVisible || (l.force = !1), l.isVisible = !1;
      })));
    }
    function x(ie = {}) {
      ie.target != null && (l.isVisible && O(ie.target) ? w(ie) : S(ie));
    }
    function A(ie) {
      if (!s)
        return;
      const Ae = s.state.elements.reference;
      if (!r.value || !Ae)
        return;
      const lt = ie.target;
      Wu(r.value, lt) || Wu(Ae, lt) || w({ force: !0 });
    }
    function E(ie) {
      (ie.key === "Esc" || ie.key === "Escape") && w();
    }
    function C({ detail: ie }) {
      !ie.id || ie.id !== e.id || S(ie);
    }
    function M({ detail: ie }) {
      !ie.id || ie.id !== e.id || w(ie);
    }
    function N({ detail: ie }) {
      !ie.id || ie.id !== e.id || x(ie);
    }
    function F() {
      wa(document, "keydown", E), wa(document, "click", A), wa(document, "show-popover", C), wa(document, "hide-popover", M), wa(document, "toggle-popover", N);
    }
    function H() {
      ba(document, "keydown", E), ba(document, "click", A), ba(document, "show-popover", C), ba(document, "hide-popover", M), ba(document, "toggle-popover", N);
    }
    function P(ie) {
      t("before-show", ie);
    }
    function j(ie) {
      l.force = !1, t("after-show", ie);
    }
    function Y(ie) {
      t("before-hide", ie);
    }
    function J(ie) {
      l.force = !1, m(), t("after-hide", ie);
    }
    function he(ie) {
      ie.stopPropagation();
    }
    function ue() {
      l.isHovered = !0, l.isInteractive && ["hover", "hover-focus"].includes(l.visibility) && S();
    }
    function ve() {
      if (l.isHovered = !1, !s)
        return;
      const ie = s.state.elements.reference;
      l.autoHide && !l.isFocused && (!ie || ie !== document.activeElement) && ["hover", "hover-focus"].includes(l.visibility) && w();
    }
    function xe() {
      l.isFocused = !0, l.isInteractive && ["focus", "hover-focus"].includes(l.visibility) && S();
    }
    function Fe(ie) {
      ["focus", "hover-focus"].includes(l.visibility) && (!ie.relatedTarget || !Wu(r.value, ie.relatedTarget)) && (l.isFocused = !1, !l.isHovered && l.autoHide && w());
    }
    function Ne() {
      a != null && (a.disconnect(), a = null);
    }
    return Ue(
      () => r.value,
      (ie) => {
        Ne(), ie && (a = new ResizeObserver(() => {
          s && s.update();
        }), a.observe(ie));
      }
    ), Ue(() => l.placement, u, {
      immediate: !0
    }), zr(() => {
      F();
    }), Pa(() => {
      m(), Ne(), H();
    }), {
      ...oo(l),
      popoverRef: r,
      alignment: d,
      hide: w,
      setupPopper: v,
      beforeEnter: P,
      afterEnter: j,
      beforeLeave: Y,
      afterLeave: J,
      onClick: he,
      onMouseOver: ue,
      onMouseLeave: ve,
      onFocusIn: xe,
      onFocusOut: Fe
    };
  }
});
function hj(e, t, n, r, a, s) {
  return R(), G("div", {
    class: Qe(["vc-popover-content-wrapper", { "is-interactive": e.isInteractive }]),
    ref: "popoverRef",
    onClick: t[0] || (t[0] = (...l) => e.onClick && e.onClick(...l)),
    onMouseover: t[1] || (t[1] = (...l) => e.onMouseOver && e.onMouseOver(...l)),
    onMouseleave: t[2] || (t[2] = (...l) => e.onMouseLeave && e.onMouseLeave(...l)),
    onFocusin: t[3] || (t[3] = (...l) => e.onFocusIn && e.onFocusIn(...l)),
    onFocusout: t[4] || (t[4] = (...l) => e.onFocusOut && e.onFocusOut(...l))
  }, [
    Te(lo, {
      name: `vc-${e.transition}`,
      appear: "",
      onBeforeEnter: e.beforeEnter,
      onAfterEnter: e.afterEnter,
      onBeforeLeave: e.beforeLeave,
      onAfterLeave: e.afterLeave
    }, {
      default: $e(() => [
        e.isVisible ? (R(), G("div", Zt({
          key: 0,
          tabindex: "-1",
          class: `vc-popover-content direction-${e.direction}`
        }, e.$attrs), [
          nt(e.$slots, "default", {
            direction: e.direction,
            alignment: e.alignment,
            data: e.data,
            hide: e.hide
          }, () => [
            us(Se(e.data), 1)
          ]),
          q("span", {
            class: Qe([
              "vc-popover-caret",
              `direction-${e.direction}`,
              `align-${e.alignment}`
            ])
          }, null, 2)
        ], 16)) : we("", !0)
      ]),
      _: 3
    }, 8, ["name", "onBeforeEnter", "onAfterEnter", "onBeforeLeave", "onAfterLeave"])
  ], 34);
}
const Yp = /* @__PURE__ */ Zi(dj, [["render", hj]]), pj = {
  value: { type: Object, required: !0 }
}, mj = ["input"], vj = "__vc_calendar_nav_context__";
function gj(e, { emit: t }) {
  const n = Q(!0), r = Q(0), a = Q(0), s = 12, l = Q(null), { locale: u, masks: f, canMove: h, getDateAddress: d } = hs();
  function m() {
    setTimeout(() => {
      if (l.value == null)
        return;
      const Oe = l.value.querySelector(
        ".vc-nav-item:not(:disabled)"
      );
      Oe && Oe.focus();
    }, 10);
  }
  function v(Oe, st) {
    t("input", { month: Oe, year: st }, { position: P.value });
  }
  function g(Oe) {
    r.value = Oe, n.value = !0, m();
  }
  function b(Oe) {
    const { year: st } = d(/* @__PURE__ */ new Date()), Je = Oe * s, xt = Je + s, ce = [];
    for (let le = Je; le < xt; le += 1) {
      let Pe = !1;
      for (let ke = 1; ke < 12 && (Pe = h({ month: ke, year: le }, { position: P.value }), !Pe); ke++)
        ;
      ce.push({
        year: le,
        id: le.toString(),
        label: le.toString(),
        ariaLabel: le.toString(),
        isActive: le === H.value,
        isCurrent: le === st,
        isDisabled: !Pe,
        click: () => g(le)
      });
    }
    return ce;
  }
  function O(Oe) {
    const { month: st, year: Je } = d(/* @__PURE__ */ new Date());
    return Xb().map((xt, ce) => {
      const le = ce + 1;
      return {
        month: le,
        year: Oe,
        id: `${Oe}.${$t(le, 2)}`,
        label: u.value.formatDate(xt, f.value.navMonths),
        ariaLabel: u.value.formatDate(xt, "MMMM YYYY"),
        isActive: le === F.value && Oe === H.value,
        isCurrent: le === st && Oe === Je,
        isDisabled: !h(
          { month: le, year: Oe },
          { position: P.value }
        ),
        click: () => v(le, Oe)
      };
    });
  }
  function S(Oe) {
    return Math.floor(Oe / s);
  }
  function w() {
    n.value = !n.value;
  }
  function x() {
    Fe.value && (n.value && E(), M());
  }
  function A() {
    Ae.value && (n.value && C(), N());
  }
  function E() {
    r.value--;
  }
  function C() {
    r.value++;
  }
  function M() {
    a.value--;
  }
  function N() {
    a.value++;
  }
  const F = W(() => {
    var Oe;
    return ((Oe = e.value) == null ? void 0 : Oe.month) || 0;
  }), H = W(() => {
    var Oe;
    return ((Oe = e.value) == null ? void 0 : Oe.year) || 0;
  }), P = W(() => {
    var Oe;
    return ((Oe = e.value) == null ? void 0 : Oe.position) || 1;
  }), j = W(() => O(r.value)), Y = W(() => b(a.value)), J = W(() => Lb(Y.value.map((Oe) => Oe.year))), he = W(() => Ws(Y.value.map((Oe) => Oe.year))), ue = W(() => n.value ? r.value : `${J.value} - ${he.value}`), ve = W(
    () => O(r.value - 1).some((Oe) => !Oe.isDisabled)
  ), xe = W(
    () => b(a.value - 1).some((Oe) => !Oe.isDisabled)
  ), Fe = W(
    () => n.value ? ve.value : xe.value
  ), Ne = W(
    () => O(r.value + 1).some((Oe) => !Oe.isDisabled)
  ), ie = W(
    () => b(a.value + 1).some((Oe) => !Oe.isDisabled)
  ), Ae = W(
    () => n.value ? Ne.value : ie.value
  ), lt = W(
    () => n.value ? j.value : Y.value
  );
  Ue(
    () => H.value,
    () => {
      r.value = H.value;
    }
  ), Ue(
    () => r.value,
    (Oe) => {
      a.value = S(Oe);
    }
  ), r.value = H.value, zr(() => m());
  const Ct = {
    navContainer: l,
    title: ue,
    monthMode: n,
    currentMonth: F,
    currentYear: H,
    activeItems: lt,
    prevItemsEnabled: Fe,
    nextItemsEnabled: Ae,
    toggleMode: w,
    movePrev: x,
    moveNext: A,
    movePrevYear: E,
    moveNextYear: C,
    movePrevYearGroup: M,
    moveNextYearGroup: N
  };
  return Wr(vj, Ct), Ct;
}
const _j = { class: "vc-nav-header" }, yj = ["disabled"], bj = ["disabled"], wj = { class: "vc-nav-items" }, Oj = ["data-id", "aria-label", "disabled", "onClick", "onKeydown"], Ej = /* @__PURE__ */ Re({
  __name: "CalendarNav",
  props: pj,
  emits: mj,
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
    } = gj(n, { emit: t });
    return (m, v) => (R(), G("div", {
      class: "vc-nav-container",
      ref_key: "navContainer",
      ref: r
    }, [
      q("div", _j, [
        q("button", {
          type: "button",
          class: "vc-nav-arrow is-left vc-focus",
          disabled: !y(s),
          onClick: v[0] || (v[0] = //@ts-ignore
          (...g) => y(h) && y(h)(...g)),
          onKeydown: v[1] || (v[1] = (g) => y(Lu)(g, y(h)))
        }, [
          Te(js, {
            name: "nav-prev-button",
            move: y(h),
            disabled: !y(s)
          }, {
            default: $e(() => [
              Te(io, {
                name: "ChevronLeft",
                width: "22px",
                height: "24px"
              })
            ]),
            _: 1
          }, 8, ["move", "disabled"])
        ], 40, yj),
        q("button", {
          type: "button",
          class: "vc-nav-title vc-focus",
          onClick: v[2] || (v[2] = //@ts-ignore
          (...g) => y(f) && y(f)(...g)),
          onKeydown: v[3] || (v[3] = (g) => y(Lu)(g, y(f)))
        }, Se(y(a)), 33),
        q("button", {
          type: "button",
          class: "vc-nav-arrow is-right vc-focus",
          disabled: !y(l),
          onClick: v[4] || (v[4] = //@ts-ignore
          (...g) => y(d) && y(d)(...g)),
          onKeydown: v[5] || (v[5] = (g) => y(Lu)(g, y(d)))
        }, [
          Te(js, {
            name: "nav-next-button",
            move: y(d),
            disabled: !y(l)
          }, {
            default: $e(() => [
              Te(io, {
                name: "ChevronRight",
                width: "22px",
                height: "24px"
              })
            ]),
            _: 1
          }, 8, ["move", "disabled"])
        ], 40, bj)
      ]),
      q("div", wj, [
        (R(!0), G(qe, null, Rt(y(u), (g) => (R(), G("button", {
          key: g.label,
          type: "button",
          "data-id": g.id,
          "aria-label": g.ariaLabel,
          class: Qe(["vc-nav-item vc-focus", [
            g.isActive ? "is-active" : g.isCurrent ? "is-current" : ""
          ]]),
          disabled: g.isDisabled,
          onClick: g.click,
          onKeydown: (b) => y(Lu)(b, g.click)
        }, Se(g.label), 43, Oj))), 128))
      ])
    ], 512));
  }
}), Dj = {
  __name: "CalendarNavPopover",
  setup(e) {
    const { navPopoverId: t, color: n, displayMode: r, navPopoverRef: a, move: s } = hs();
    return (l, u) => (R(), Ke(Yp, {
      id: y(t),
      class: Qe(["vc-nav-popover-container", `vc-${y(n)}`, `vc-${y(r)}`]),
      ref_key: "navPopoverRef",
      ref: a
    }, {
      default: $e(({ data: f }) => [
        Te(Ej, {
          value: f.page,
          onInput: y(s)
        }, null, 8, ["value", "onInput"])
      ]),
      _: 1
    }, 8, ["id", "class"]));
  }
}, Sj = Re({
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
}), xj = { class: "vc-day-popover-row" }, Tj = {
  key: 0,
  class: "vc-day-popover-row-indicator"
}, kj = { class: "vc-day-popover-row-label" };
function Aj(e, t, n, r, a, s) {
  return R(), G("div", xj, [
    e.indicator ? (R(), G("div", Tj, [
      q("span", {
        class: Qe(e.indicator.class)
      }, null, 2)
    ])) : we("", !0),
    q("div", kj, [
      nt(e.$slots, "default", {}, () => [
        us(Se(e.attribute.popover ? e.attribute.popover.label : "No content provided"), 1)
      ])
    ])
  ]);
}
const Mj = /* @__PURE__ */ Zi(Sj, [["render", Aj]]), $j = { class: "vc-day-popover-container" }, Pj = {
  key: 0,
  class: "vc-day-popover-header"
}, Cj = /* @__PURE__ */ Re({
  __name: "CalendarDayPopover",
  setup(e) {
    const { dayPopoverId: t, displayMode: n, color: r, masks: a, locale: s } = hs();
    function l(f, h) {
      return s.value.formatDate(f, h);
    }
    function u(f) {
      return s.value.formatDate(f.date, a.value.dayPopover);
    }
    return (f, h) => (R(), Ke(Yp, {
      id: y(t),
      class: Qe([`vc-${y(r)}`, `vc-${y(n)}`])
    }, {
      default: $e(({ data: { day: d, attributes: m }, hide: v }) => [
        nt(f.$slots, "default", {
          day: d,
          dayTitle: u(d),
          attributes: m,
          format: l,
          masks: y(a),
          hide: v
        }, () => [
          q("div", $j, [
            y(a).dayPopover ? (R(), G("div", Pj, Se(u(d)), 1)) : we("", !0),
            (R(!0), G(qe, null, Rt(m, (g) => (R(), Ke(Mj, {
              key: g.key,
              attribute: g
            }, null, 8, ["attribute"]))), 128))
          ])
        ])
      ]),
      _: 3
    }, 8, ["id", "class"]));
  }
}), Ij = Re({
  name: "Calendar",
  components: {
    CalendarHeader: cw,
    CalendarPane: fj,
    CalendarNavPopover: Dj,
    CalendarDayPopover: Cj
  },
  emits: G9,
  props: j9,
  setup(e, { emit: t, slots: n }) {
    return q9(e, { emit: t, slots: n });
  }
}), Nj = { class: "vc-pane-header-wrapper" };
function Lj(e, t, n, r, a, s) {
  const l = Ii("CalendarHeader"), u = Ii("CalendarPane"), f = Ii("CalendarDayPopover"), h = Ii("CalendarNavPopover");
  return R(), G(qe, null, [
    q("div", Zt({ "data-helptext": "Press the arrow keys to navigate by day, Home and End to navigate to week ends, PageUp and PageDown to navigate by month, Alt+PageUp and Alt+PageDown to navigate by year" }, e.$attrs, {
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
      q("div", {
        class: Qe(["vc-pane-container", { "in-transition": e.inTransition }])
      }, [
        q("div", Nj, [
          e.firstPage ? (R(), Ke(l, {
            key: 0,
            page: e.firstPage,
            "is-lg": "",
            "hide-title": ""
          }, null, 8, ["page"])) : we("", !0)
        ]),
        Te(lo, {
          name: `vc-${e.transitionName}`,
          onBeforeEnter: e.onTransitionBeforeEnter,
          onAfterEnter: e.onTransitionAfterEnter
        }, {
          default: $e(() => [
            (R(), G("div", {
              key: e.pages[0].id,
              class: "vc-pane-layout",
              style: Fi({
                gridTemplateColumns: `repeat(${e.columns}, 1fr)`
              })
            }, [
              (R(!0), G(qe, null, Rt(e.pages, (d) => (R(), Ke(u, {
                key: d.id,
                page: d
              }, null, 8, ["page"]))), 128))
            ], 4))
          ]),
          _: 1
        }, 8, ["name", "onBeforeEnter", "onAfterEnter"]),
        nt(e.$slots, "footer")
      ], 2)
    ], 16),
    Te(f, null, {
      default: $e((d) => [
        nt(e.$slots, "day-popover", ts(Mc(d)))
      ]),
      _: 3
    }),
    Te(h)
  ], 64);
}
const Rj = /* @__PURE__ */ Zi(Ij, [["render", Lj]]), Fj = { class: "vc-base-select" }, Yj = ["value"], Wj = ["value", "disabled"], Uj = {
  inheritAttrs: !1
}, Xo = /* @__PURE__ */ Object.assign(Uj, {
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
    return (t, n) => (R(), G("div", Fj, [
      e.showIcon ? (R(), Ke(io, {
        key: 0,
        name: "ChevronDown",
        size: e.small ? "16" : "18"
      }, null, 8, ["size"])) : we("", !0),
      q("select", Zt(t.$attrs, {
        value: e.modelValue,
        class: ["vc-focus", {
          "vc-has-icon": e.showIcon,
          "vc-align-right": e.alignRight,
          "vc-align-left": e.alignLeft,
          "vc-small": e.small
        }],
        onChange: n[0] || (n[0] = (r) => t.$emit("update:modelValue", r.target.value))
      }), [
        (R(!0), G(qe, null, Rt(e.options, (r) => (R(), G("option", {
          key: r.value,
          value: r.value,
          disabled: r.disabled
        }, Se(r.label), 9, Wj))), 128))
      ], 16, Yj)
    ]));
  }
}), fw = "__vc_date_picker_context__", Vj = {
  ...iw,
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
}, Bj = [
  "update:modelValue",
  "drag",
  "dayclick",
  "daykeydown",
  "popover-will-show",
  "popover-did-show",
  "popover-will-hide",
  "popover-did-hide"
];
function Hj(e, t) {
  const n = aw(e), { locale: r, masks: a, disabledAttribute: s } = n, { emit: l } = t, u = Q(!1), f = Q(oc()), h = Q(null), d = Q(null), m = Q(["", ""]), v = Q(null), g = Q(null);
  let b, O, S = !0;
  const w = W(() => e.isRange || e.modelModifiers.range === !0), x = W(
    () => w.value && h.value != null ? h.value.start : null
  ), A = W(
    () => w.value && h.value != null ? h.value.end : null
  ), E = W(() => e.mode.toLowerCase() === "date"), C = W(
    () => e.mode.toLowerCase() === "datetime"
  ), M = W(() => e.mode.toLowerCase() === "time"), N = W(() => !!d.value), F = W(() => {
    let V = "date";
    e.modelModifiers.number && (V = "number"), e.modelModifiers.string && (V = "string");
    const pe = a.value.modelValue || "iso";
    return Ct({ type: V, mask: pe });
  }), H = W(
    () => Yt(d.value ?? h.value)
  ), P = W(() => M.value ? e.is24hr ? a.value.inputTime24hr : a.value.inputTime : C.value ? e.is24hr ? a.value.inputDateTime24hr : a.value.inputDateTime : a.value.input), j = W(() => /[Hh]/g.test(P.value)), Y = W(
    () => /[dD]{1,2}|Do|W{1,4}|M{1,4}|YY(?:YY)?/g.test(P.value)
  ), J = W(() => {
    if (j.value && Y.value)
      return "dateTime";
    if (Y.value)
      return "date";
    if (j.value)
      return "time";
  }), he = W(() => {
    var V;
    const pe = ((V = v.value) == null ? void 0 : V.$el.previousElementSibling) ?? void 0;
    return bl({}, e.popover, $a("datePicker.popover"), {
      target: pe
    });
  }), ue = W(
    () => lw({
      ...he.value,
      id: f.value
    })
  ), ve = W(() => w.value ? {
    start: m.value[0],
    end: m.value[1]
  } : m.value[0]), xe = W(() => {
    const V = ["start", "end"].map((pe) => ({
      input: fe(pe),
      change: ge(pe),
      keyup: je,
      ...e.popover && ue.value
    }));
    return w.value ? {
      start: V[0],
      end: V[1]
    } : V[0];
  }), Fe = W(() => {
    if (!Je(h.value))
      return null;
    const V = {
      key: "select-drag",
      ...e.selectAttribute,
      dates: h.value,
      pinPage: !0
    }, { dot: pe, bar: Ce, highlight: ut, content: Xt } = V;
    return !pe && !Ce && !ut && !Xt && (V.highlight = !0), V;
  }), Ne = W(() => {
    if (!w.value || !Je(d.value))
      return null;
    const V = {
      key: "select-drag",
      ...e.dragAttribute,
      dates: d.value
    }, { dot: pe, bar: Ce, highlight: ut, content: Xt } = V;
    return !pe && !Ce && !ut && !Xt && (V.highlight = {
      startEnd: {
        fillMode: "outline"
      }
    }), V;
  }), ie = W(() => {
    const V = Dr(e.attributes) ? [...e.attributes] : [];
    return Ne.value ? V.unshift(Ne.value) : Fe.value && V.unshift(Fe.value), V;
  }), Ae = W(() => Ct(
    e.rules === "auto" ? lt() : e.rules ?? {}
  ));
  function lt() {
    const V = {
      ms: [0, 999],
      sec: [0, 59],
      min: [0, 59],
      hr: [0, 23]
    }, pe = E.value ? 0 : e.timeAccuracy;
    return [0, 1].map((Ce) => {
      switch (pe) {
        case 0:
          return {
            hours: V.hr[Ce],
            minutes: V.min[Ce],
            seconds: V.sec[Ce],
            milliseconds: V.ms[Ce]
          };
        case 1:
          return {
            minutes: V.min[Ce],
            seconds: V.sec[Ce],
            milliseconds: V.ms[Ce]
          };
        case 3:
          return { milliseconds: V.ms[Ce] };
        case 4:
          return {};
        default:
          return { seconds: V.sec[Ce], milliseconds: V.ms[Ce] };
      }
    });
  }
  function Ct(V) {
    return Dr(V) ? V.length === 1 ? [V[0], V[0]] : V : [V, V];
  }
  function Oe(V) {
    return Ct(V).map(
      (pe, Ce) => ({
        ...pe,
        rules: Ae.value[Ce]
      })
    );
  }
  function st(V) {
    return Vr(V) ? !isNaN(V) : Hs(V) ? !isNaN(V.getTime()) : ni(V) ? V !== "" : V != null;
  }
  function Je(V) {
    return w.value ? ji(V) && st(V.start) && st(V.end) : st(V);
  }
  function xt(V, pe) {
    const Ce = Hs(V), ut = Hs(pe);
    return !Ce && !ut ? !0 : Ce !== ut ? !1 : V.getTime() === pe.getTime();
  }
  function ce(V, pe) {
    if (w.value) {
      const Ce = Je(V), ut = Je(pe);
      return !Ce && !ut ? !0 : Ce !== ut ? !1 : xt(V.start, pe.start) && xt(V.end, pe.end);
    }
    return xt(V, pe);
  }
  function le(V) {
    return !Je(V) || !s.value ? !1 : s.value.intersectsRange(r.value.range(V));
  }
  function Pe(V, pe, Ce, ut) {
    if (!Je(V))
      return null;
    if (w.value) {
      const Xt = r.value.toDate(V.start, {
        ...pe[0],
        fillDate: x.value ?? void 0,
        patch: Ce
      }), qn = r.value.toDate(V.end, {
        ...pe[1],
        fillDate: A.value ?? void 0,
        patch: Ce
      });
      return Pr({ start: Xt, end: qn }, ut);
    }
    return r.value.toDateOrNull(V, {
      ...pe[0],
      fillDate: h.value,
      patch: Ce
    });
  }
  function ke(V, pe) {
    return w.value ? Je(V) ? {
      start: r.value.fromDate(V.start, pe[0]),
      end: r.value.fromDate(V.end, pe[1])
    } : null : r.value.fromDate(V, pe[0]);
  }
  function re(V, pe = {}) {
    return clearTimeout(b), new Promise((Ce) => {
      const { debounce: ut = 0, ...Xt } = pe;
      ut > 0 ? b = window.setTimeout(() => {
        Ce($(V, Xt));
      }, ut) : Ce($(V, Xt));
    });
  }
  function $(V, {
    config: pe = F.value,
    patch: Ce = "dateTime",
    clearIfEqual: ut = !1,
    formatInput: Xt = !0,
    hidePopover: qn = !1,
    dragging: yn = N.value,
    targetPriority: na,
    moveToValue: ra = !1
  } = {}) {
    const ms = Oe(pe);
    let Ln = Pe(
      V,
      ms,
      Ce,
      na
    );
    if (le(Ln)) {
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
    const gs = ke(
      Ln,
      F.value
    );
    return ko && (S = !1, l(yn ? "drag" : "update:modelValue", gs), En(() => S = !0)), qn && !yn && kn(), Xt && k(), ra && En(() => se(na ?? "start")), gs;
  }
  function k() {
    En(() => {
      const V = Oe({
        type: "string",
        mask: P.value
      }), pe = ke(
        d.value || h.value,
        V
      );
      w.value ? m.value = [pe && pe.start, pe && pe.end] : m.value = [pe, ""];
    });
  }
  function z(V, pe, Ce) {
    m.value.splice(pe === "start" ? 0 : 1, 1, V);
    const ut = w.value ? {
      start: m.value[0],
      end: m.value[1] || m.value[0]
    } : V, Xt = {
      type: "string",
      mask: P.value
    };
    re(ut, {
      ...Ce,
      config: Xt,
      patch: J.value,
      targetPriority: pe,
      moveToValue: !0
    });
  }
  function fe(V) {
    return (pe) => {
      e.updateOnInput && z(pe.currentTarget.value, V, {
        formatInput: !1,
        hidePopover: !1,
        debounce: e.inputDebounce
      });
    };
  }
  function ge(V) {
    return (pe) => {
      z(pe.currentTarget.value, V, {
        formatInput: !0,
        hidePopover: !1
      });
    };
  }
  function je(V) {
    V.key === "Escape" && re(h.value, {
      formatInput: !0,
      hidePopover: !0
    });
  }
  function Yt(V) {
    return w.value ? [
      V && V.start ? r.value.getDateParts(V.start) : null,
      V && V.end ? r.value.getDateParts(V.end) : null
    ] : [V ? r.value.getDateParts(V) : null];
  }
  function Et() {
    d.value = null, k();
  }
  function Tt(V) {
    l("popover-will-show", V);
  }
  function rn(V) {
    l("popover-did-show", V);
  }
  function _t(V) {
    Et(), l("popover-will-hide", V);
  }
  function Z(V) {
    l("popover-did-hide", V);
  }
  function oe(V) {
    const pe = {
      patch: "date",
      formatInput: !0,
      hidePopover: !0
    };
    if (w.value) {
      const Ce = !N.value;
      Ce ? O = { start: V.startDate, end: V.endDate } : O != null && (O.end = V.date), re(O, {
        ...pe,
        dragging: Ce
      });
    } else
      re(V.date, {
        ...pe,
        clearIfEqual: !e.isRequired
      });
  }
  function zt(V, pe) {
    oe(V), l("dayclick", V, pe);
  }
  function Mt(V, pe) {
    switch (pe.key) {
      case " ":
      case "Enter": {
        oe(V), pe.preventDefault();
        break;
      }
      case "Escape":
        kn();
    }
    l("daykeydown", V, pe);
  }
  function mn(V, pe) {
    !N.value || O == null || (O.end = V.date, re(Pr(O), {
      patch: "date",
      formatInput: !0
    }));
  }
  function ur(V = {}) {
    Eh({
      ...he.value,
      ...V,
      isInteractive: !0,
      id: f.value
    });
  }
  function kn(V = {}) {
    bc({
      hideDelay: 10,
      force: !0,
      ...he.value,
      ...V,
      id: f.value
    });
  }
  function An(V) {
    ow({
      ...he.value,
      ...V,
      isInteractive: !0,
      id: f.value
    });
  }
  function Pr(V, pe) {
    const { start: Ce, end: ut } = V;
    if (Ce > ut)
      switch (pe) {
        case "start":
          return { start: Ce, end: Ce };
        case "end":
          return { start: ut, end: ut };
        default:
          return { start: ut, end: Ce };
      }
    return { start: Ce, end: ut };
  }
  function Zr(V) {
    if (Je(h.value)) {
      const pe = w.value ? V ? x.value : A.value : h.value;
      return Jb(pe, "monthly", r.value);
    }
    return null;
  }
  async function Na(V, pe = {}) {
    return g.value == null ? !1 : g.value.move(V, pe);
  }
  async function ta(V, pe = {}) {
    return g.value == null ? !1 : g.value.moveBy(V, pe);
  }
  async function se(V, pe = {}) {
    if (g.value == null)
      return !1;
    const { firstPage: Ce, lastPage: ut, move: Xt } = g.value, qn = V !== "end", yn = Zr(qn), na = qn ? 1 : -1;
    return !yn || ew(yn, Ce, ut) ? !1 : Xt(yn, {
      position: na,
      ...pe
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
    () => P.value,
    () => k()
  ), Ue(
    () => e.modelValue,
    (V) => {
      S && $(V, {
        formatInput: !0,
        hidePopover: !1
      });
    }
  ), Ue(
    () => Ae.value,
    () => {
      ji(e.rules) && $(e.modelValue, {
        formatInput: !0,
        hidePopover: !1
      });
    }
  ), Ue(
    () => e.timezone,
    () => {
      $(h.value, { formatInput: !0 });
    }
  );
  const me = Ct(F.value);
  h.value = Pe(e.modelValue, me, "dateTime"), zr(() => {
    $(e.modelValue, {
      formatInput: !0,
      hidePopover: !1
    });
  }), En(() => u.value = !0);
  const He = {
    ...n,
    showCalendar: u,
    datePickerPopoverId: f,
    popoverRef: v,
    popoverEvents: ue,
    calendarRef: g,
    isRange: w,
    isTimeMode: M,
    isDateTimeMode: C,
    is24hr: wd(e, "is24hr"),
    hideTimeHeader: wd(e, "hideTimeHeader"),
    timeAccuracy: wd(e, "timeAccuracy"),
    isDragging: N,
    inputValue: ve,
    inputEvents: xe,
    dateParts: H,
    attributes: ie,
    rules: Ae,
    move: Na,
    moveBy: ta,
    moveToValue: se,
    updateValue: re,
    showPopover: ur,
    hidePopover: kn,
    togglePopover: An,
    onDayClick: zt,
    onDayKeydown: Mt,
    onDayMouseEnter: mn,
    onPopoverBeforeShow: Tt,
    onPopoverAfterShow: rn,
    onPopoverBeforeHide: _t,
    onPopoverAfterHide: Z
  };
  return Wr(fw, He), He;
}
function zj() {
  const e = yt(fw);
  if (e)
    return e;
  throw new Error(
    "DatePicker context missing. Please verify this component is nested within a valid context provider."
  );
}
const jj = [
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
], Gj = [
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
function qj(e) {
  const t = zj(), {
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
      const he = v.value ? Y : s.value[0], ue = v.value ? s.value[1] : Y;
      J = { start: he, end: ue };
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
  ), b = W(() => Gb(g.value)), O = W(() => !!g.value.isValid), S = W(() => !f.value && O.value), w = W(() => {
    if (!b.value)
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
  }), A = W({
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
  }), C = W({
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
    () => x9(g.value, l.value[e.position])
  ), F = W(() => jj.filter(
    (Y) => N.value.hours.some((J) => J.value === Y.value)
  )), H = W(() => Gj.filter(
    (Y) => N.value.hours.some((J) => J.value === Y.value)
  )), P = W(() => u.value ? N.value.hours : M.value ? F.value : H.value), j = W(() => {
    const Y = [];
    return Ni(F.value) && Y.push({ value: !0, label: "AM" }), Ni(H.value) && Y.push({ value: !1, label: "PM" }), Y;
  });
  return {
    ...t,
    showHeader: S,
    timeAccuracy: h,
    parts: g,
    isValid: O,
    date: w,
    hours: x,
    minutes: A,
    seconds: E,
    milliseconds: C,
    options: N,
    hourOptions: P,
    isAM: M,
    isAMOptions: j,
    is24hr: u
  };
}
const Kj = {
  key: 0,
  class: "vc-time-header"
}, Zj = { class: "vc-time-weekday" }, Xj = { class: "vc-time-month" }, Jj = { class: "vc-time-day" }, Qj = { class: "vc-time-year" }, eG = { class: "vc-time-select-group" }, tG = /* @__PURE__ */ q("span", { class: "vc-time-colon" }, ":", -1), nG = /* @__PURE__ */ q("span", { class: "vc-time-colon" }, ":", -1), rG = /* @__PURE__ */ q("span", { class: "vc-time-decimal" }, ".", -1), iG = /* @__PURE__ */ Re({
  __name: "TimePicker",
  props: {
    position: null
  },
  setup(e, { expose: t }) {
    const r = qj(e);
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
      isAM: b,
      isAMOptions: O,
      is24hr: S,
      showHeader: w,
      timeAccuracy: x
    } = r;
    return (A, E) => (R(), G("div", {
      class: Qe(["vc-time-picker", [{ "vc-invalid": !y(s), "vc-attached": !y(g) }]])
    }, [
      nt(A.$slots, "time-header", {}, () => [
        y(w) && y(l) ? (R(), G("div", Kj, [
          q("span", Zj, Se(y(a).formatDate(y(l), "WWW")), 1),
          q("span", Xj, Se(y(a).formatDate(y(l), "MMM")), 1),
          q("span", Jj, Se(y(a).formatDate(y(l), "D")), 1),
          q("span", Qj, Se(y(a).formatDate(y(l), "YYYY")), 1)
        ])) : we("", !0)
      ]),
      q("div", eG, [
        Te(io, {
          name: "Clock",
          size: "17"
        }),
        Te(Xo, {
          modelValue: y(u),
          "onUpdate:modelValue": E[0] || (E[0] = (C) => an(u) ? u.value = C : null),
          modelModifiers: { number: !0 },
          options: y(v),
          "align-right": ""
        }, null, 8, ["modelValue", "options"]),
        y(x) > 1 ? (R(), G(qe, { key: 0 }, [
          tG,
          Te(Xo, {
            modelValue: y(f),
            "onUpdate:modelValue": E[1] || (E[1] = (C) => an(f) ? f.value = C : null),
            modelModifiers: { number: !0 },
            options: y(m).minutes,
            "align-left": y(x) === 2
          }, null, 8, ["modelValue", "options", "align-left"])
        ], 64)) : we("", !0),
        y(x) > 2 ? (R(), G(qe, { key: 1 }, [
          nG,
          Te(Xo, {
            modelValue: y(h),
            "onUpdate:modelValue": E[2] || (E[2] = (C) => an(h) ? h.value = C : null),
            modelModifiers: { number: !0 },
            options: y(m).seconds,
            "align-left": y(x) === 3
          }, null, 8, ["modelValue", "options", "align-left"])
        ], 64)) : we("", !0),
        y(x) > 3 ? (R(), G(qe, { key: 2 }, [
          rG,
          Te(Xo, {
            modelValue: y(d),
            "onUpdate:modelValue": E[3] || (E[3] = (C) => an(d) ? d.value = C : null),
            modelModifiers: { number: !0 },
            options: y(m).milliseconds,
            "align-left": ""
          }, null, 8, ["modelValue", "options"])
        ], 64)) : we("", !0),
        y(S) ? we("", !0) : (R(), Ke(Xo, {
          key: 3,
          modelValue: y(b),
          "onUpdate:modelValue": E[4] || (E[4] = (C) => an(b) ? b.value = C : null),
          options: y(O)
        }, null, 8, ["modelValue", "options"]))
      ])
    ], 2));
  }
}), dw = Re({
  name: "DatePicker",
  inheritAttrs: !1,
  emits: Bj,
  props: Vj,
  setup(e, t) {
    const n = Hj(e, t), { slots: r, attrs: a } = t, {
      isTimeMode: s,
      isRange: l,
      isDateTimeMode: u,
      color: f,
      displayMode: h,
      dateParts: d,
      datePickerPopoverId: m,
      attributes: v,
      calendarRef: g,
      popoverRef: b,
      showCalendar: O,
      onDayClick: S,
      onDayMouseEnter: w,
      onDayKeydown: x,
      onPopoverBeforeShow: A,
      onPopoverAfterShow: E,
      onPopoverBeforeHide: C,
      onPopoverAfterHide: M
    } = n;
    t.expose(n);
    const N = xl(Rb(n, "calendarRef", "popoverRef")), F = () => (l.value ? [0, 1] : [0]).map((Y) => wr(iG, { position: Y })), H = () => {
      if (!d.value)
        return null;
      const j = u.value ? { ...r, footer: F } : r;
      return wr(
        Rj,
        {
          ...a,
          attributes: v.value,
          ref: g,
          onDayclick: S,
          onDaymouseenter: w,
          onDaykeydown: x
        },
        j
      );
    }, P = () => {
      if (s.value)
        return wr(
          "div",
          {
            class: `vc-container vc-bordered vc-${f.value} vc-${h.value}`
          },
          [F()]
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
          ref: b,
          "onBefore-show": A,
          "onAfter-show": E,
          "onBefore-hide": C,
          "onAfter-hide": M
        },
        {
          default: P
        }
      )
    ] : P;
  }
});
function aG(e) {
  return Uh() ? (Vh(e), !0) : !1;
}
function wc(e) {
  return typeof e == "function" ? e() : y(e);
}
const hw = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const sG = Object.prototype.toString, oG = (e) => sG.call(e) === "[object Object]", wl = () => {
}, lG = /* @__PURE__ */ uG();
function uG() {
  var e, t;
  return hw && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function cG(e, t) {
  function n(...r) {
    return new Promise((a, s) => {
      Promise.resolve(e(() => t.apply(this, r), { fn: t, thisArg: this, args: r })).then(a).catch(s);
    });
  }
  return n;
}
const fG = (e) => e();
function dG(e, t = {}) {
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
function hG(e, t, n = {}) {
  const {
    eventFilter: r = fG,
    ...a
  } = n;
  return Ue(
    e,
    cG(
      r,
      t
    ),
    a
  );
}
function pG(e, t, n = {}) {
  const {
    debounce: r = 0,
    maxWait: a = void 0,
    ...s
  } = n;
  return hG(
    e,
    t,
    {
      ...s,
      eventFilter: dG(r, { maxWait: a })
    }
  );
}
function il(e) {
  var t;
  const n = wc(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const pw = hw ? window : void 0;
function Nd(...e) {
  let t, n, r, a;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, r, a] = e, t = pw) : [t, n, r, a] = e, !t)
    return wl;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const s = [], l = () => {
    s.forEach((d) => d()), s.length = 0;
  }, u = (d, m, v, g) => (d.addEventListener(m, v, g), () => d.removeEventListener(m, v, g)), f = Ue(
    () => [il(t), wc(a)],
    ([d, m]) => {
      if (l(), !d)
        return;
      const v = oG(m) ? { ...m } : m;
      s.push(
        ...n.flatMap((g) => r.map((b) => u(d, g, b, v)))
      );
    },
    { immediate: !0, flush: "post" }
  ), h = () => {
    f(), l();
  };
  return aG(h), h;
}
let jy = !1;
function mw(e, t, n = {}) {
  const { window: r = pw, ignore: a = [], capture: s = !0, detectIframe: l = !1 } = n;
  if (!r)
    return;
  lG && !jy && (jy = !0, Array.from(r.document.body.children).forEach((v) => v.addEventListener("click", wl)), r.document.documentElement.addEventListener("click", wl));
  let u = !0;
  const f = (v) => a.some((g) => {
    if (typeof g == "string")
      return Array.from(r.document.querySelectorAll(g)).some((b) => b === v.target || v.composedPath().includes(b));
    {
      const b = il(g);
      return b && (v.target === b || v.composedPath().includes(b));
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
        const b = il(e);
        ((g = r.document.activeElement) == null ? void 0 : g.tagName) === "IFRAME" && !(b != null && b.contains(r.document.activeElement)) && t(v);
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
    var n, r = "4.17.21", a = 200, s = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", l = "Expected a function", u = "Invalid `variable` option passed into `_.template`", f = "__lodash_hash_undefined__", h = 500, d = "__lodash_placeholder__", m = 1, v = 2, g = 4, b = 1, O = 2, S = 1, w = 2, x = 4, A = 8, E = 16, C = 32, M = 64, N = 128, F = 256, H = 512, P = 30, j = "...", Y = 800, J = 16, he = 1, ue = 2, ve = 3, xe = 1 / 0, Fe = 9007199254740991, Ne = 17976931348623157e292, ie = 0 / 0, Ae = 4294967295, lt = Ae - 1, Ct = Ae >>> 1, Oe = [
      ["ary", N],
      ["bind", S],
      ["bindKey", w],
      ["curry", A],
      ["curryRight", E],
      ["flip", H],
      ["partial", C],
      ["partialRight", M],
      ["rearg", F]
    ], st = "[object Arguments]", Je = "[object Array]", xt = "[object AsyncFunction]", ce = "[object Boolean]", le = "[object Date]", Pe = "[object DOMException]", ke = "[object Error]", re = "[object Function]", $ = "[object GeneratorFunction]", k = "[object Map]", z = "[object Number]", fe = "[object Null]", ge = "[object Object]", je = "[object Promise]", Yt = "[object Proxy]", Et = "[object RegExp]", Tt = "[object Set]", rn = "[object String]", _t = "[object Symbol]", Z = "[object Undefined]", oe = "[object WeakMap]", zt = "[object WeakSet]", Mt = "[object ArrayBuffer]", mn = "[object DataView]", ur = "[object Float32Array]", kn = "[object Float64Array]", An = "[object Int8Array]", Pr = "[object Int16Array]", Zr = "[object Int32Array]", Na = "[object Uint8Array]", ta = "[object Uint8ClampedArray]", se = "[object Uint16Array]", me = "[object Uint32Array]", He = /\b__p \+= '';/g, V = /\b(__p \+=) '' \+/g, pe = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Ce = /&(?:amp|lt|gt|quot|#39);/g, ut = /[&<>"']/g, Xt = RegExp(Ce.source), qn = RegExp(ut.source), yn = /<%-([\s\S]+?)%>/g, na = /<%([\s\S]+?)%>/g, ra = /<%=([\s\S]+?)%>/g, ms = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ln = /^\w*$/, vs = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, _i = /[\\^$.*+?()[\]{}|]/g, ko = RegExp(_i.source), gs = /^\s+/, LO = /\s/, RO = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, FO = /\{\n\/\* \[wrapped with (.+)\] \*/, YO = /,? & /, WO = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, UO = /[()=,{}\[\]\/\s]/, VO = /\\(\\)?/g, BO = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, pm = /\w*$/, HO = /^[-+]0x[0-9a-f]+$/i, zO = /^0b[01]+$/i, jO = /^\[object .+?Constructor\]$/, GO = /^0o[0-7]+$/i, qO = /^(?:0|[1-9]\d*)$/, KO = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Fl = /($^)/, ZO = /['\n\r\u2028\u2029\\]/g, Yl = "\\ud800-\\udfff", XO = "\\u0300-\\u036f", JO = "\\ufe20-\\ufe2f", QO = "\\u20d0-\\u20ff", mm = XO + JO + QO, vm = "\\u2700-\\u27bf", gm = "a-z\\xdf-\\xf6\\xf8-\\xff", eE = "\\xac\\xb1\\xd7\\xf7", tE = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", nE = "\\u2000-\\u206f", rE = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", _m = "A-Z\\xc0-\\xd6\\xd8-\\xde", ym = "\\ufe0e\\ufe0f", bm = eE + tE + nE + rE, ff = "['’]", iE = "[" + Yl + "]", wm = "[" + bm + "]", Wl = "[" + mm + "]", Om = "\\d+", aE = "[" + vm + "]", Em = "[" + gm + "]", Dm = "[^" + Yl + bm + Om + vm + gm + _m + "]", df = "\\ud83c[\\udffb-\\udfff]", sE = "(?:" + Wl + "|" + df + ")", Sm = "[^" + Yl + "]", hf = "(?:\\ud83c[\\udde6-\\uddff]){2}", pf = "[\\ud800-\\udbff][\\udc00-\\udfff]", _s = "[" + _m + "]", xm = "\\u200d", Tm = "(?:" + Em + "|" + Dm + ")", oE = "(?:" + _s + "|" + Dm + ")", km = "(?:" + ff + "(?:d|ll|m|re|s|t|ve))?", Am = "(?:" + ff + "(?:D|LL|M|RE|S|T|VE))?", Mm = sE + "?", $m = "[" + ym + "]?", lE = "(?:" + xm + "(?:" + [Sm, hf, pf].join("|") + ")" + $m + Mm + ")*", uE = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", cE = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Pm = $m + Mm + lE, fE = "(?:" + [aE, hf, pf].join("|") + ")" + Pm, dE = "(?:" + [Sm + Wl + "?", Wl, hf, pf, iE].join("|") + ")", hE = RegExp(ff, "g"), pE = RegExp(Wl, "g"), mf = RegExp(df + "(?=" + df + ")|" + dE + Pm, "g"), mE = RegExp([
      _s + "?" + Em + "+" + km + "(?=" + [wm, _s, "$"].join("|") + ")",
      oE + "+" + Am + "(?=" + [wm, _s + Tm, "$"].join("|") + ")",
      _s + "?" + Tm + "+" + km,
      _s + "+" + Am,
      cE,
      uE,
      Om,
      fE
    ].join("|"), "g"), vE = RegExp("[" + xm + Yl + mm + ym + "]"), gE = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, _E = [
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
    ], yE = -1, Wt = {};
    Wt[ur] = Wt[kn] = Wt[An] = Wt[Pr] = Wt[Zr] = Wt[Na] = Wt[ta] = Wt[se] = Wt[me] = !0, Wt[st] = Wt[Je] = Wt[Mt] = Wt[ce] = Wt[mn] = Wt[le] = Wt[ke] = Wt[re] = Wt[k] = Wt[z] = Wt[ge] = Wt[Et] = Wt[Tt] = Wt[rn] = Wt[oe] = !1;
    var Lt = {};
    Lt[st] = Lt[Je] = Lt[Mt] = Lt[mn] = Lt[ce] = Lt[le] = Lt[ur] = Lt[kn] = Lt[An] = Lt[Pr] = Lt[Zr] = Lt[k] = Lt[z] = Lt[ge] = Lt[Et] = Lt[Tt] = Lt[rn] = Lt[_t] = Lt[Na] = Lt[ta] = Lt[se] = Lt[me] = !0, Lt[ke] = Lt[re] = Lt[oe] = !1;
    var bE = {
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
    }, wE = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, OE = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, EE = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, DE = parseFloat, SE = parseInt, Cm = typeof Jo == "object" && Jo && Jo.Object === Object && Jo, xE = typeof self == "object" && self && self.Object === Object && self, vn = Cm || xE || Function("return this")(), vf = t && !t.nodeType && t, La = vf && !0 && e && !e.nodeType && e, Im = La && La.exports === vf, gf = Im && Cm.process, cr = function() {
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
    function TE(U, X, K, Ee) {
      for (var Ze = -1, Dt = U == null ? 0 : U.length; ++Ze < Dt; ) {
        var ln = U[Ze];
        X(Ee, ln, K(ln), U);
      }
      return Ee;
    }
    function fr(U, X) {
      for (var K = -1, Ee = U == null ? 0 : U.length; ++K < Ee && X(U[K], K, U) !== !1; )
        ;
      return U;
    }
    function kE(U, X) {
      for (var K = U == null ? 0 : U.length; K-- && X(U[K], K, U) !== !1; )
        ;
      return U;
    }
    function Um(U, X) {
      for (var K = -1, Ee = U == null ? 0 : U.length; ++K < Ee; )
        if (!X(U[K], K, U))
          return !1;
      return !0;
    }
    function ia(U, X) {
      for (var K = -1, Ee = U == null ? 0 : U.length, Ze = 0, Dt = []; ++K < Ee; ) {
        var ln = U[K];
        X(ln, K, U) && (Dt[Ze++] = ln);
      }
      return Dt;
    }
    function Ul(U, X) {
      var K = U == null ? 0 : U.length;
      return !!K && ys(U, X, 0) > -1;
    }
    function _f(U, X, K) {
      for (var Ee = -1, Ze = U == null ? 0 : U.length; ++Ee < Ze; )
        if (K(X, U[Ee]))
          return !0;
      return !1;
    }
    function jt(U, X) {
      for (var K = -1, Ee = U == null ? 0 : U.length, Ze = Array(Ee); ++K < Ee; )
        Ze[K] = X(U[K], K, U);
      return Ze;
    }
    function aa(U, X) {
      for (var K = -1, Ee = X.length, Ze = U.length; ++K < Ee; )
        U[Ze + K] = X[K];
      return U;
    }
    function yf(U, X, K, Ee) {
      var Ze = -1, Dt = U == null ? 0 : U.length;
      for (Ee && Dt && (K = U[++Ze]); ++Ze < Dt; )
        K = X(K, U[Ze], Ze, U);
      return K;
    }
    function AE(U, X, K, Ee) {
      var Ze = U == null ? 0 : U.length;
      for (Ee && Ze && (K = U[--Ze]); Ze--; )
        K = X(K, U[Ze], Ze, U);
      return K;
    }
    function bf(U, X) {
      for (var K = -1, Ee = U == null ? 0 : U.length; ++K < Ee; )
        if (X(U[K], K, U))
          return !0;
      return !1;
    }
    var ME = wf("length");
    function $E(U) {
      return U.split("");
    }
    function PE(U) {
      return U.match(WO) || [];
    }
    function Vm(U, X, K) {
      var Ee;
      return K(U, function(Ze, Dt, ln) {
        if (X(Ze, Dt, ln))
          return Ee = Dt, !1;
      }), Ee;
    }
    function Vl(U, X, K, Ee) {
      for (var Ze = U.length, Dt = K + (Ee ? 1 : -1); Ee ? Dt-- : ++Dt < Ze; )
        if (X(U[Dt], Dt, U))
          return Dt;
      return -1;
    }
    function ys(U, X, K) {
      return X === X ? HE(U, X, K) : Vl(U, Bm, K);
    }
    function CE(U, X, K, Ee) {
      for (var Ze = K - 1, Dt = U.length; ++Ze < Dt; )
        if (Ee(U[Ze], X))
          return Ze;
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
    function zm(U, X, K, Ee, Ze) {
      return Ze(U, function(Dt, ln, It) {
        K = Ee ? (Ee = !1, Dt) : X(K, Dt, ln, It);
      }), K;
    }
    function IE(U, X) {
      var K = U.length;
      for (U.sort(X); K--; )
        U[K] = U[K].value;
      return U;
    }
    function Ef(U, X) {
      for (var K, Ee = -1, Ze = U.length; ++Ee < Ze; ) {
        var Dt = X(U[Ee]);
        Dt !== n && (K = K === n ? Dt : K + Dt);
      }
      return K;
    }
    function Df(U, X) {
      for (var K = -1, Ee = Array(U); ++K < U; )
        Ee[K] = X(K);
      return Ee;
    }
    function NE(U, X) {
      return jt(X, function(K) {
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
      return jt(X, function(K) {
        return U[K];
      });
    }
    function Ao(U, X) {
      return U.has(X);
    }
    function Gm(U, X) {
      for (var K = -1, Ee = U.length; ++K < Ee && ys(X, U[K], 0) > -1; )
        ;
      return K;
    }
    function qm(U, X) {
      for (var K = U.length; K-- && ys(X, U[K], 0) > -1; )
        ;
      return K;
    }
    function LE(U, X) {
      for (var K = U.length, Ee = 0; K--; )
        U[K] === X && ++Ee;
      return Ee;
    }
    var RE = Of(bE), FE = Of(wE);
    function YE(U) {
      return "\\" + EE[U];
    }
    function WE(U, X) {
      return U == null ? n : U[X];
    }
    function bs(U) {
      return vE.test(U);
    }
    function UE(U) {
      return gE.test(U);
    }
    function VE(U) {
      for (var X, K = []; !(X = U.next()).done; )
        K.push(X.value);
      return K;
    }
    function xf(U) {
      var X = -1, K = Array(U.size);
      return U.forEach(function(Ee, Ze) {
        K[++X] = [Ze, Ee];
      }), K;
    }
    function Km(U, X) {
      return function(K) {
        return U(X(K));
      };
    }
    function sa(U, X) {
      for (var K = -1, Ee = U.length, Ze = 0, Dt = []; ++K < Ee; ) {
        var ln = U[K];
        (ln === X || ln === d) && (U[K] = d, Dt[Ze++] = K);
      }
      return Dt;
    }
    function Bl(U) {
      var X = -1, K = Array(U.size);
      return U.forEach(function(Ee) {
        K[++X] = Ee;
      }), K;
    }
    function BE(U) {
      var X = -1, K = Array(U.size);
      return U.forEach(function(Ee) {
        K[++X] = [Ee, Ee];
      }), K;
    }
    function HE(U, X, K) {
      for (var Ee = K - 1, Ze = U.length; ++Ee < Ze; )
        if (U[Ee] === X)
          return Ee;
      return -1;
    }
    function zE(U, X, K) {
      for (var Ee = K + 1; Ee--; )
        if (U[Ee] === X)
          return Ee;
      return Ee;
    }
    function ws(U) {
      return bs(U) ? GE(U) : ME(U);
    }
    function Cr(U) {
      return bs(U) ? qE(U) : $E(U);
    }
    function Zm(U) {
      for (var X = U.length; X-- && LO.test(U.charAt(X)); )
        ;
      return X;
    }
    var jE = Of(OE);
    function GE(U) {
      for (var X = mf.lastIndex = 0; mf.test(U); )
        ++X;
      return X;
    }
    function qE(U) {
      return U.match(mf) || [];
    }
    function KE(U) {
      return U.match(mE) || [];
    }
    var ZE = function U(X) {
      X = X == null ? vn : Os.defaults(vn.Object(), X, Os.pick(vn, _E));
      var K = X.Array, Ee = X.Date, Ze = X.Error, Dt = X.Function, ln = X.Math, It = X.Object, Tf = X.RegExp, XE = X.String, dr = X.TypeError, Hl = K.prototype, JE = Dt.prototype, Es = It.prototype, zl = X["__core-js_shared__"], jl = JE.toString, At = Es.hasOwnProperty, QE = 0, Xm = function() {
        var i = /[^.]+$/.exec(zl && zl.keys && zl.keys.IE_PROTO || "");
        return i ? "Symbol(src)_1." + i : "";
      }(), Gl = Es.toString, eD = jl.call(It), tD = vn._, nD = Tf(
        "^" + jl.call(At).replace(_i, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), ql = Im ? X.Buffer : n, oa = X.Symbol, Kl = X.Uint8Array, Jm = ql ? ql.allocUnsafe : n, Zl = Km(It.getPrototypeOf, It), Qm = It.create, ev = Es.propertyIsEnumerable, Xl = Hl.splice, tv = oa ? oa.isConcatSpreadable : n, Mo = oa ? oa.iterator : n, Ra = oa ? oa.toStringTag : n, Jl = function() {
        try {
          var i = Va(It, "defineProperty");
          return i({}, "", {}), i;
        } catch {
        }
      }(), rD = X.clearTimeout !== vn.clearTimeout && X.clearTimeout, iD = Ee && Ee.now !== vn.Date.now && Ee.now, aD = X.setTimeout !== vn.setTimeout && X.setTimeout, Ql = ln.ceil, eu = ln.floor, kf = It.getOwnPropertySymbols, sD = ql ? ql.isBuffer : n, nv = X.isFinite, oD = Hl.join, lD = Km(It.keys, It), un = ln.max, bn = ln.min, uD = Ee.now, cD = X.parseInt, rv = ln.random, fD = Hl.reverse, Af = Va(X, "DataView"), $o = Va(X, "Map"), Mf = Va(X, "Promise"), Ds = Va(X, "Set"), Po = Va(X, "WeakMap"), Co = Va(It, "create"), tu = Po && new Po(), Ss = {}, dD = Ba(Af), hD = Ba($o), pD = Ba(Mf), mD = Ba(Ds), vD = Ba(Po), nu = oa ? oa.prototype : n, Io = nu ? nu.valueOf : n, iv = nu ? nu.toString : n;
      function D(i) {
        if (Jt(i) && !Xe(i) && !(i instanceof ht)) {
          if (i instanceof hr)
            return i;
          if (At.call(i, "__wrapped__"))
            return ag(i);
        }
        return new hr(i);
      }
      var xs = function() {
        function i() {
        }
        return function(o) {
          if (!Kt(o))
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
      D.templateSettings = {
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
          _: D
        }
      }, D.prototype = ru.prototype, D.prototype.constructor = D, hr.prototype = xs(ru.prototype), hr.prototype.constructor = hr;
      function ht(i) {
        this.__wrapped__ = i, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Ae, this.__views__ = [];
      }
      function gD() {
        var i = new ht(this.__wrapped__);
        return i.__actions__ = Rn(this.__actions__), i.__dir__ = this.__dir__, i.__filtered__ = this.__filtered__, i.__iteratees__ = Rn(this.__iteratees__), i.__takeCount__ = this.__takeCount__, i.__views__ = Rn(this.__views__), i;
      }
      function _D() {
        if (this.__filtered__) {
          var i = new ht(this);
          i.__dir__ = -1, i.__filtered__ = !0;
        } else
          i = this.clone(), i.__dir__ *= -1;
        return i;
      }
      function yD() {
        var i = this.__wrapped__.value(), o = this.__dir__, c = Xe(i), p = o < 0, _ = c ? i.length : 0, T = $S(0, _, this.__views__), I = T.start, L = T.end, B = L - I, ee = p ? L : I - 1, te = this.__iteratees__, ae = te.length, ye = 0, Me = bn(B, this.__takeCount__);
        if (!c || !p && _ == B && Me == B)
          return kv(i, this.__actions__);
        var Ve = [];
        e:
          for (; B-- && ye < Me; ) {
            ee += o;
            for (var rt = -1, Be = i[ee]; ++rt < ae; ) {
              var dt = te[rt], pt = dt.iteratee, Qn = dt.type, Pn = pt(Be);
              if (Qn == ue)
                Be = Pn;
              else if (!Pn) {
                if (Qn == he)
                  continue e;
                break e;
              }
            }
            Ve[ye++] = Be;
          }
        return Ve;
      }
      ht.prototype = xs(ru.prototype), ht.prototype.constructor = ht;
      function Fa(i) {
        var o = -1, c = i == null ? 0 : i.length;
        for (this.clear(); ++o < c; ) {
          var p = i[o];
          this.set(p[0], p[1]);
        }
      }
      function bD() {
        this.__data__ = Co ? Co(null) : {}, this.size = 0;
      }
      function wD(i) {
        var o = this.has(i) && delete this.__data__[i];
        return this.size -= o ? 1 : 0, o;
      }
      function OD(i) {
        var o = this.__data__;
        if (Co) {
          var c = o[i];
          return c === f ? n : c;
        }
        return At.call(o, i) ? o[i] : n;
      }
      function ED(i) {
        var o = this.__data__;
        return Co ? o[i] !== n : At.call(o, i);
      }
      function DD(i, o) {
        var c = this.__data__;
        return this.size += this.has(i) ? 0 : 1, c[i] = Co && o === n ? f : o, this;
      }
      Fa.prototype.clear = bD, Fa.prototype.delete = wD, Fa.prototype.get = OD, Fa.prototype.has = ED, Fa.prototype.set = DD;
      function yi(i) {
        var o = -1, c = i == null ? 0 : i.length;
        for (this.clear(); ++o < c; ) {
          var p = i[o];
          this.set(p[0], p[1]);
        }
      }
      function SD() {
        this.__data__ = [], this.size = 0;
      }
      function xD(i) {
        var o = this.__data__, c = iu(o, i);
        if (c < 0)
          return !1;
        var p = o.length - 1;
        return c == p ? o.pop() : Xl.call(o, c, 1), --this.size, !0;
      }
      function TD(i) {
        var o = this.__data__, c = iu(o, i);
        return c < 0 ? n : o[c][1];
      }
      function kD(i) {
        return iu(this.__data__, i) > -1;
      }
      function AD(i, o) {
        var c = this.__data__, p = iu(c, i);
        return p < 0 ? (++this.size, c.push([i, o])) : c[p][1] = o, this;
      }
      yi.prototype.clear = SD, yi.prototype.delete = xD, yi.prototype.get = TD, yi.prototype.has = kD, yi.prototype.set = AD;
      function bi(i) {
        var o = -1, c = i == null ? 0 : i.length;
        for (this.clear(); ++o < c; ) {
          var p = i[o];
          this.set(p[0], p[1]);
        }
      }
      function MD() {
        this.size = 0, this.__data__ = {
          hash: new Fa(),
          map: new ($o || yi)(),
          string: new Fa()
        };
      }
      function $D(i) {
        var o = vu(this, i).delete(i);
        return this.size -= o ? 1 : 0, o;
      }
      function PD(i) {
        return vu(this, i).get(i);
      }
      function CD(i) {
        return vu(this, i).has(i);
      }
      function ID(i, o) {
        var c = vu(this, i), p = c.size;
        return c.set(i, o), this.size += c.size == p ? 0 : 1, this;
      }
      bi.prototype.clear = MD, bi.prototype.delete = $D, bi.prototype.get = PD, bi.prototype.has = CD, bi.prototype.set = ID;
      function Ya(i) {
        var o = -1, c = i == null ? 0 : i.length;
        for (this.__data__ = new bi(); ++o < c; )
          this.add(i[o]);
      }
      function ND(i) {
        return this.__data__.set(i, f), this;
      }
      function LD(i) {
        return this.__data__.has(i);
      }
      Ya.prototype.add = Ya.prototype.push = ND, Ya.prototype.has = LD;
      function Ir(i) {
        var o = this.__data__ = new yi(i);
        this.size = o.size;
      }
      function RD() {
        this.__data__ = new yi(), this.size = 0;
      }
      function FD(i) {
        var o = this.__data__, c = o.delete(i);
        return this.size = o.size, c;
      }
      function YD(i) {
        return this.__data__.get(i);
      }
      function WD(i) {
        return this.__data__.has(i);
      }
      function UD(i, o) {
        var c = this.__data__;
        if (c instanceof yi) {
          var p = c.__data__;
          if (!$o || p.length < a - 1)
            return p.push([i, o]), this.size = ++c.size, this;
          c = this.__data__ = new bi(p);
        }
        return c.set(i, o), this.size = c.size, this;
      }
      Ir.prototype.clear = RD, Ir.prototype.delete = FD, Ir.prototype.get = YD, Ir.prototype.has = WD, Ir.prototype.set = UD;
      function av(i, o) {
        var c = Xe(i), p = !c && Ha(i), _ = !c && !p && da(i), T = !c && !p && !_ && Ms(i), I = c || p || _ || T, L = I ? Df(i.length, XE) : [], B = L.length;
        for (var ee in i)
          (o || At.call(i, ee)) && !(I && // Safari 9 has enumerable `arguments.length` in strict mode.
          (ee == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          _ && (ee == "offset" || ee == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          T && (ee == "buffer" || ee == "byteLength" || ee == "byteOffset") || // Skip index properties.
          Di(ee, B))) && L.push(ee);
        return L;
      }
      function sv(i) {
        var o = i.length;
        return o ? i[Uf(0, o - 1)] : n;
      }
      function VD(i, o) {
        return gu(Rn(i), Wa(o, 0, i.length));
      }
      function BD(i) {
        return gu(Rn(i));
      }
      function $f(i, o, c) {
        (c !== n && !Nr(i[o], c) || c === n && !(o in i)) && wi(i, o, c);
      }
      function No(i, o, c) {
        var p = i[o];
        (!(At.call(i, o) && Nr(p, c)) || c === n && !(o in i)) && wi(i, o, c);
      }
      function iu(i, o) {
        for (var c = i.length; c--; )
          if (Nr(i[c][0], o))
            return c;
        return -1;
      }
      function HD(i, o, c, p) {
        return la(i, function(_, T, I) {
          o(p, _, c(_), I);
        }), p;
      }
      function ov(i, o) {
        return i && Jr(o, hn(o), i);
      }
      function zD(i, o) {
        return i && Jr(o, Yn(o), i);
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
        var I, L = o & m, B = o & v, ee = o & g;
        if (c && (I = _ ? c(i, p, _, T) : c(i)), I !== n)
          return I;
        if (!Kt(i))
          return i;
        var te = Xe(i);
        if (te) {
          if (I = CS(i), !L)
            return Rn(i, I);
        } else {
          var ae = wn(i), ye = ae == re || ae == $;
          if (da(i))
            return $v(i, L);
          if (ae == ge || ae == st || ye && !_) {
            if (I = B || ye ? {} : Zv(i), !L)
              return B ? OS(i, zD(I, i)) : wS(i, ov(I, i));
          } else {
            if (!Lt[ae])
              return _ ? i : {};
            I = IS(i, ae, L);
          }
        }
        T || (T = new Ir());
        var Me = T.get(i);
        if (Me)
          return Me;
        T.set(i, I), Sg(i) ? i.forEach(function(Be) {
          I.add(pr(Be, o, c, Be, i, T));
        }) : Eg(i) && i.forEach(function(Be, dt) {
          I.set(dt, pr(Be, o, c, dt, i, T));
        });
        var Ve = ee ? B ? Jf : Xf : B ? Yn : hn, rt = te ? n : Ve(i);
        return fr(rt || i, function(Be, dt) {
          rt && (dt = Be, Be = i[dt]), No(I, dt, pr(Be, o, c, dt, i, T));
        }), I;
      }
      function jD(i) {
        var o = hn(i);
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
        var _ = -1, T = Ul, I = !0, L = i.length, B = [], ee = o.length;
        if (!L)
          return B;
        c && (o = jt(o, Zn(c))), p ? (T = _f, I = !1) : o.length >= a && (T = Ao, I = !1, o = new Ya(o));
        e:
          for (; ++_ < L; ) {
            var te = i[_], ae = c == null ? te : c(te);
            if (te = p || te !== 0 ? te : 0, I && ae === ae) {
              for (var ye = ee; ye--; )
                if (o[ye] === ae)
                  continue e;
              B.push(te);
            } else
              T(o, ae, p) || B.push(te);
          }
        return B;
      }
      var la = Lv(Xr), cv = Lv(If, !0);
      function GD(i, o) {
        var c = !0;
        return la(i, function(p, _, T) {
          return c = !!o(p, _, T), c;
        }), c;
      }
      function au(i, o, c) {
        for (var p = -1, _ = i.length; ++p < _; ) {
          var T = i[p], I = o(T);
          if (I != null && (L === n ? I === I && !Jn(I) : c(I, L)))
            var L = I, B = T;
        }
        return B;
      }
      function qD(i, o, c, p) {
        var _ = i.length;
        for (c = et(c), c < 0 && (c = -c > _ ? 0 : _ + c), p = p === n || p > _ ? _ : et(p), p < 0 && (p += _), p = c > p ? 0 : Tg(p); c < p; )
          i[c++] = o;
        return i;
      }
      function fv(i, o) {
        var c = [];
        return la(i, function(p, _, T) {
          o(p, _, T) && c.push(p);
        }), c;
      }
      function gn(i, o, c, p, _) {
        var T = -1, I = i.length;
        for (c || (c = LS), _ || (_ = []); ++T < I; ) {
          var L = i[T];
          o > 0 && c(L) ? o > 1 ? gn(L, o - 1, c, p, _) : aa(_, L) : p || (_[_.length] = L);
        }
        return _;
      }
      var Cf = Rv(), dv = Rv(!0);
      function Xr(i, o) {
        return i && Cf(i, o, hn);
      }
      function If(i, o) {
        return i && dv(i, o, hn);
      }
      function su(i, o) {
        return ia(o, function(c) {
          return Si(i[c]);
        });
      }
      function Ua(i, o) {
        o = ca(o, i);
        for (var c = 0, p = o.length; i != null && c < p; )
          i = i[Qr(o[c++])];
        return c && c == p ? i : n;
      }
      function hv(i, o, c) {
        var p = o(i);
        return Xe(i) ? p : aa(p, c(i));
      }
      function Mn(i) {
        return i == null ? i === n ? Z : fe : Ra && Ra in It(i) ? MS(i) : BS(i);
      }
      function Nf(i, o) {
        return i > o;
      }
      function KD(i, o) {
        return i != null && At.call(i, o);
      }
      function ZD(i, o) {
        return i != null && o in It(i);
      }
      function XD(i, o, c) {
        return i >= bn(o, c) && i < un(o, c);
      }
      function Lf(i, o, c) {
        for (var p = c ? _f : Ul, _ = i[0].length, T = i.length, I = T, L = K(T), B = 1 / 0, ee = []; I--; ) {
          var te = i[I];
          I && o && (te = jt(te, Zn(o))), B = bn(te.length, B), L[I] = !c && (o || _ >= 120 && te.length >= 120) ? new Ya(I && te) : n;
        }
        te = i[0];
        var ae = -1, ye = L[0];
        e:
          for (; ++ae < _ && ee.length < B; ) {
            var Me = te[ae], Ve = o ? o(Me) : Me;
            if (Me = c || Me !== 0 ? Me : 0, !(ye ? Ao(ye, Ve) : p(ee, Ve, c))) {
              for (I = T; --I; ) {
                var rt = L[I];
                if (!(rt ? Ao(rt, Ve) : p(i[I], Ve, c)))
                  continue e;
              }
              ye && ye.push(Ve), ee.push(Me);
            }
          }
        return ee;
      }
      function JD(i, o, c, p) {
        return Xr(i, function(_, T, I) {
          o(p, c(_), T, I);
        }), p;
      }
      function Ro(i, o, c) {
        o = ca(o, i), i = eg(i, o);
        var p = i == null ? i : i[Qr(vr(o))];
        return p == null ? n : Kn(p, i, c);
      }
      function pv(i) {
        return Jt(i) && Mn(i) == st;
      }
      function QD(i) {
        return Jt(i) && Mn(i) == Mt;
      }
      function eS(i) {
        return Jt(i) && Mn(i) == le;
      }
      function Fo(i, o, c, p, _) {
        return i === o ? !0 : i == null || o == null || !Jt(i) && !Jt(o) ? i !== i && o !== o : tS(i, o, c, p, Fo, _);
      }
      function tS(i, o, c, p, _, T) {
        var I = Xe(i), L = Xe(o), B = I ? Je : wn(i), ee = L ? Je : wn(o);
        B = B == st ? ge : B, ee = ee == st ? ge : ee;
        var te = B == ge, ae = ee == ge, ye = B == ee;
        if (ye && da(i)) {
          if (!da(o))
            return !1;
          I = !0, te = !1;
        }
        if (ye && !te)
          return T || (T = new Ir()), I || Ms(i) ? Gv(i, o, c, p, _, T) : kS(i, o, B, c, p, _, T);
        if (!(c & b)) {
          var Me = te && At.call(i, "__wrapped__"), Ve = ae && At.call(o, "__wrapped__");
          if (Me || Ve) {
            var rt = Me ? i.value() : i, Be = Ve ? o.value() : o;
            return T || (T = new Ir()), _(rt, Be, c, p, T);
          }
        }
        return ye ? (T || (T = new Ir()), AS(i, o, c, p, _, T)) : !1;
      }
      function nS(i) {
        return Jt(i) && wn(i) == k;
      }
      function Rf(i, o, c, p) {
        var _ = c.length, T = _, I = !p;
        if (i == null)
          return !T;
        for (i = It(i); _--; ) {
          var L = c[_];
          if (I && L[2] ? L[1] !== i[L[0]] : !(L[0] in i))
            return !1;
        }
        for (; ++_ < T; ) {
          L = c[_];
          var B = L[0], ee = i[B], te = L[1];
          if (I && L[2]) {
            if (ee === n && !(B in i))
              return !1;
          } else {
            var ae = new Ir();
            if (p)
              var ye = p(ee, te, B, i, o, ae);
            if (!(ye === n ? Fo(te, ee, b | O, p, ae) : ye))
              return !1;
          }
        }
        return !0;
      }
      function mv(i) {
        if (!Kt(i) || FS(i))
          return !1;
        var o = Si(i) ? nD : jO;
        return o.test(Ba(i));
      }
      function rS(i) {
        return Jt(i) && Mn(i) == Et;
      }
      function iS(i) {
        return Jt(i) && wn(i) == Tt;
      }
      function aS(i) {
        return Jt(i) && Eu(i.length) && !!Wt[Mn(i)];
      }
      function vv(i) {
        return typeof i == "function" ? i : i == null ? Wn : typeof i == "object" ? Xe(i) ? yv(i[0], i[1]) : _v(i) : Fg(i);
      }
      function Ff(i) {
        if (!Uo(i))
          return lD(i);
        var o = [];
        for (var c in It(i))
          At.call(i, c) && c != "constructor" && o.push(c);
        return o;
      }
      function sS(i) {
        if (!Kt(i))
          return VS(i);
        var o = Uo(i), c = [];
        for (var p in i)
          p == "constructor" && (o || !At.call(i, p)) || c.push(p);
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
        return nd(i) && Xv(o) ? Jv(Qr(i), o) : function(c) {
          var p = dd(c, i);
          return p === n && p === o ? hd(c, i) : Fo(o, p, b | O);
        };
      }
      function ou(i, o, c, p, _) {
        i !== o && Cf(o, function(T, I) {
          if (_ || (_ = new Ir()), Kt(T))
            oS(i, o, I, c, ou, p, _);
          else {
            var L = p ? p(id(i, I), T, I + "", i, o, _) : n;
            L === n && (L = T), $f(i, I, L);
          }
        }, Yn);
      }
      function oS(i, o, c, p, _, T, I) {
        var L = id(i, c), B = id(o, c), ee = I.get(B);
        if (ee) {
          $f(i, c, ee);
          return;
        }
        var te = T ? T(L, B, c + "", i, o, I) : n, ae = te === n;
        if (ae) {
          var ye = Xe(B), Me = !ye && da(B), Ve = !ye && !Me && Ms(B);
          te = B, ye || Me || Ve ? Xe(L) ? te = L : en(L) ? te = Rn(L) : Me ? (ae = !1, te = $v(B, !0)) : Ve ? (ae = !1, te = Pv(B, !0)) : te = [] : Bo(B) || Ha(B) ? (te = L, Ha(L) ? te = kg(L) : (!Kt(L) || Si(L)) && (te = Zv(B))) : ae = !1;
        }
        ae && (I.set(B, te), _(te, B, p, T, I), I.delete(B)), $f(i, c, te);
      }
      function bv(i, o) {
        var c = i.length;
        if (c)
          return o += o < 0 ? c : 0, Di(o, c) ? i[o] : n;
      }
      function wv(i, o, c) {
        o.length ? o = jt(o, function(T) {
          return Xe(T) ? function(I) {
            return Ua(I, T.length === 1 ? T[0] : T);
          } : T;
        }) : o = [Wn];
        var p = -1;
        o = jt(o, Zn(We()));
        var _ = gv(i, function(T, I, L) {
          var B = jt(o, function(ee) {
            return ee(T);
          });
          return { criteria: B, index: ++p, value: T };
        });
        return IE(_, function(T, I) {
          return bS(T, I, c);
        });
      }
      function lS(i, o) {
        return Ov(i, o, function(c, p) {
          return hd(i, p);
        });
      }
      function Ov(i, o, c) {
        for (var p = -1, _ = o.length, T = {}; ++p < _; ) {
          var I = o[p], L = Ua(i, I);
          c(L, I) && Yo(T, ca(I, i), L);
        }
        return T;
      }
      function uS(i) {
        return function(o) {
          return Ua(o, i);
        };
      }
      function Wf(i, o, c, p) {
        var _ = p ? CE : ys, T = -1, I = o.length, L = i;
        for (i === o && (o = Rn(o)), c && (L = jt(i, Zn(c))); ++T < I; )
          for (var B = 0, ee = o[T], te = c ? c(ee) : ee; (B = _(L, te, B, p)) > -1; )
            L !== i && Xl.call(L, B, 1), Xl.call(i, B, 1);
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
      function cS(i, o, c, p) {
        for (var _ = -1, T = un(Ql((o - i) / (c || 1)), 0), I = K(T); T--; )
          I[p ? T : ++_] = i, i += c;
        return I;
      }
      function Vf(i, o) {
        var c = "";
        if (!i || o < 1 || o > Fe)
          return c;
        do
          o % 2 && (c += i), o = eu(o / 2), o && (i += i);
        while (o);
        return c;
      }
      function ot(i, o) {
        return ad(Qv(i, o, Wn), i + "");
      }
      function fS(i) {
        return sv($s(i));
      }
      function dS(i, o) {
        var c = $s(i);
        return gu(c, Wa(o, 0, c.length));
      }
      function Yo(i, o, c, p) {
        if (!Kt(i))
          return i;
        o = ca(o, i);
        for (var _ = -1, T = o.length, I = T - 1, L = i; L != null && ++_ < T; ) {
          var B = Qr(o[_]), ee = c;
          if (B === "__proto__" || B === "constructor" || B === "prototype")
            return i;
          if (_ != I) {
            var te = L[B];
            ee = p ? p(te, B, L) : n, ee === n && (ee = Kt(te) ? te : Di(o[_ + 1]) ? [] : {});
          }
          No(L, B, ee), L = L[B];
        }
        return i;
      }
      var Dv = tu ? function(i, o) {
        return tu.set(i, o), i;
      } : Wn, hS = Jl ? function(i, o) {
        return Jl(i, "toString", {
          configurable: !0,
          enumerable: !1,
          value: md(o),
          writable: !0
        });
      } : Wn;
      function pS(i) {
        return gu($s(i));
      }
      function mr(i, o, c) {
        var p = -1, _ = i.length;
        o < 0 && (o = -o > _ ? 0 : _ + o), c = c > _ ? _ : c, c < 0 && (c += _), _ = o > c ? 0 : c - o >>> 0, o >>>= 0;
        for (var T = K(_); ++p < _; )
          T[p] = i[p + o];
        return T;
      }
      function mS(i, o) {
        var c;
        return la(i, function(p, _, T) {
          return c = o(p, _, T), !c;
        }), !!c;
      }
      function lu(i, o, c) {
        var p = 0, _ = i == null ? p : i.length;
        if (typeof o == "number" && o === o && _ <= Ct) {
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
        for (var I = o !== o, L = o === null, B = Jn(o), ee = o === n; _ < T; ) {
          var te = eu((_ + T) / 2), ae = c(i[te]), ye = ae !== n, Me = ae === null, Ve = ae === ae, rt = Jn(ae);
          if (I)
            var Be = p || Ve;
          else
            ee ? Be = Ve && (p || ye) : L ? Be = Ve && ye && (p || !Me) : B ? Be = Ve && ye && !Me && (p || !rt) : Me || rt ? Be = !1 : Be = p ? ae <= o : ae < o;
          Be ? _ = te + 1 : T = te;
        }
        return bn(T, lt);
      }
      function Sv(i, o) {
        for (var c = -1, p = i.length, _ = 0, T = []; ++c < p; ) {
          var I = i[c], L = o ? o(I) : I;
          if (!c || !Nr(L, B)) {
            var B = L;
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
        if (Xe(i))
          return jt(i, Xn) + "";
        if (Jn(i))
          return iv ? iv.call(i) : "";
        var o = i + "";
        return o == "0" && 1 / i == -xe ? "-0" : o;
      }
      function ua(i, o, c) {
        var p = -1, _ = Ul, T = i.length, I = !0, L = [], B = L;
        if (c)
          I = !1, _ = _f;
        else if (T >= a) {
          var ee = o ? null : xS(i);
          if (ee)
            return Bl(ee);
          I = !1, _ = Ao, B = new Ya();
        } else
          B = o ? [] : L;
        e:
          for (; ++p < T; ) {
            var te = i[p], ae = o ? o(te) : te;
            if (te = c || te !== 0 ? te : 0, I && ae === ae) {
              for (var ye = B.length; ye--; )
                if (B[ye] === ae)
                  continue e;
              o && B.push(ae), L.push(te);
            } else
              _(B, ae, c) || (B !== L && B.push(ae), L.push(te));
          }
        return L;
      }
      function Hf(i, o) {
        return o = ca(o, i), i = eg(i, o), i == null || delete i[Qr(vr(o))];
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
          for (var I = i[_], L = -1; ++L < p; )
            L != _ && (T[_] = Lo(T[_] || I, i[L], o, c));
        return ua(gn(T, 1), o, c);
      }
      function Av(i, o, c) {
        for (var p = -1, _ = i.length, T = o.length, I = {}; ++p < _; ) {
          var L = p < T ? o[p] : n;
          c(I, i[p], L);
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
        return Xe(i) ? i : nd(i, o) ? [i] : ig(kt(i));
      }
      var vS = ot;
      function fa(i, o, c) {
        var p = i.length;
        return c = c === n ? p : c, !o && c >= p ? i : mr(i, o, c);
      }
      var Mv = rD || function(i) {
        return vn.clearTimeout(i);
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
      function gS(i, o) {
        var c = o ? qf(i.buffer) : i.buffer;
        return new i.constructor(c, i.byteOffset, i.byteLength);
      }
      function _S(i) {
        var o = new i.constructor(i.source, pm.exec(i));
        return o.lastIndex = i.lastIndex, o;
      }
      function yS(i) {
        return Io ? It(Io.call(i)) : {};
      }
      function Pv(i, o) {
        var c = o ? qf(i.buffer) : i.buffer;
        return new i.constructor(c, i.byteOffset, i.length);
      }
      function Cv(i, o) {
        if (i !== o) {
          var c = i !== n, p = i === null, _ = i === i, T = Jn(i), I = o !== n, L = o === null, B = o === o, ee = Jn(o);
          if (!L && !ee && !T && i > o || T && I && B && !L && !ee || p && I && B || !c && B || !_)
            return 1;
          if (!p && !T && !ee && i < o || ee && c && _ && !p && !T || L && c && _ || !I && _ || !B)
            return -1;
        }
        return 0;
      }
      function bS(i, o, c) {
        for (var p = -1, _ = i.criteria, T = o.criteria, I = _.length, L = c.length; ++p < I; ) {
          var B = Cv(_[p], T[p]);
          if (B) {
            if (p >= L)
              return B;
            var ee = c[p];
            return B * (ee == "desc" ? -1 : 1);
          }
        }
        return i.index - o.index;
      }
      function Iv(i, o, c, p) {
        for (var _ = -1, T = i.length, I = c.length, L = -1, B = o.length, ee = un(T - I, 0), te = K(B + ee), ae = !p; ++L < B; )
          te[L] = o[L];
        for (; ++_ < I; )
          (ae || _ < T) && (te[c[_]] = i[_]);
        for (; ee--; )
          te[L++] = i[_++];
        return te;
      }
      function Nv(i, o, c, p) {
        for (var _ = -1, T = i.length, I = -1, L = c.length, B = -1, ee = o.length, te = un(T - L, 0), ae = K(te + ee), ye = !p; ++_ < te; )
          ae[_] = i[_];
        for (var Me = _; ++B < ee; )
          ae[Me + B] = o[B];
        for (; ++I < L; )
          (ye || _ < T) && (ae[Me + c[I]] = i[_++]);
        return ae;
      }
      function Rn(i, o) {
        var c = -1, p = i.length;
        for (o || (o = K(p)); ++c < p; )
          o[c] = i[c];
        return o;
      }
      function Jr(i, o, c, p) {
        var _ = !c;
        c || (c = {});
        for (var T = -1, I = o.length; ++T < I; ) {
          var L = o[T], B = p ? p(c[L], i[L], L, c, i) : n;
          B === n && (B = i[L]), _ ? wi(c, L, B) : No(c, L, B);
        }
        return c;
      }
      function wS(i, o) {
        return Jr(i, td(i), o);
      }
      function OS(i, o) {
        return Jr(i, qv(i), o);
      }
      function cu(i, o) {
        return function(c, p) {
          var _ = Xe(c) ? TE : HD, T = o ? o() : {};
          return _(c, i, We(p, 2), T);
        };
      }
      function Ts(i) {
        return ot(function(o, c) {
          var p = -1, _ = c.length, T = _ > 1 ? c[_ - 1] : n, I = _ > 2 ? c[2] : n;
          for (T = i.length > 3 && typeof T == "function" ? (_--, T) : n, I && $n(c[0], c[1], I) && (T = _ < 3 ? n : T, _ = 1), o = It(o); ++p < _; ) {
            var L = c[p];
            L && i(o, L, p, T);
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
          for (var _ = -1, T = It(o), I = p(o), L = I.length; L--; ) {
            var B = I[i ? L : ++_];
            if (c(T[B], B, T) === !1)
              break;
          }
          return o;
        };
      }
      function ES(i, o, c) {
        var p = o & S, _ = Wo(i);
        function T() {
          var I = this && this !== vn && this instanceof T ? _ : i;
          return I.apply(p ? c : this, arguments);
        }
        return T;
      }
      function Fv(i) {
        return function(o) {
          o = kt(o);
          var c = bs(o) ? Cr(o) : n, p = c ? c[0] : o.charAt(0), _ = c ? fa(c, 1).join("") : o.slice(1);
          return p[i]() + _;
        };
      }
      function ks(i) {
        return function(o) {
          return yf(Lg(Ng(o).replace(hE, "")), i, "");
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
          return Kt(p) ? p : c;
        };
      }
      function DS(i, o, c) {
        var p = Wo(i);
        function _() {
          for (var T = arguments.length, I = K(T), L = T, B = As(_); L--; )
            I[L] = arguments[L];
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
          var te = this && this !== vn && this instanceof _ ? p : i;
          return Kn(te, this, I);
        }
        return _;
      }
      function Yv(i) {
        return function(o, c, p) {
          var _ = It(o);
          if (!Fn(o)) {
            var T = We(c, 3);
            o = hn(o), c = function(L) {
              return T(_[L], L, _);
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
            var L = mu(T), B = L == "wrapper" ? Qf(T) : n;
            B && rd(B[0]) && B[1] == (N | A | C | F) && !B[4].length && B[9] == 1 ? I = I[mu(B[0])].apply(I, B[3]) : I = T.length == 1 && rd(T) ? I[L]() : I.thru(T);
          }
          return function() {
            var ee = arguments, te = ee[0];
            if (I && ee.length == 1 && Xe(te))
              return I.plant(te).value();
            for (var ae = 0, ye = c ? o[ae].apply(this, ee) : te; ++ae < c; )
              ye = o[ae].call(this, ye);
            return ye;
          };
        });
      }
      function fu(i, o, c, p, _, T, I, L, B, ee) {
        var te = o & N, ae = o & S, ye = o & w, Me = o & (A | E), Ve = o & H, rt = ye ? n : Wo(i);
        function Be() {
          for (var dt = arguments.length, pt = K(dt), Qn = dt; Qn--; )
            pt[Qn] = arguments[Qn];
          if (Me)
            var Pn = As(Be), er = LE(pt, Pn);
          if (p && (pt = Iv(pt, p, _, Me)), T && (pt = Nv(pt, T, I, Me)), dt -= er, Me && dt < ee) {
            var tn = sa(pt, Pn);
            return Bv(
              i,
              o,
              fu,
              Be.placeholder,
              c,
              pt,
              tn,
              L,
              B,
              ee - dt
            );
          }
          var Lr = ae ? c : this, Ti = ye ? Lr[i] : i;
          return dt = pt.length, L ? pt = HS(pt, L) : Ve && dt > 1 && pt.reverse(), te && B < dt && (pt.length = B), this && this !== vn && this instanceof Be && (Ti = rt || Wo(Ti)), Ti.apply(Lr, pt);
        }
        return Be;
      }
      function Uv(i, o) {
        return function(c, p) {
          return JD(c, i, o(p), {});
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
          return o = jt(o, Zn(We())), ot(function(c) {
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
      function SS(i, o, c, p) {
        var _ = o & S, T = Wo(i);
        function I() {
          for (var L = -1, B = arguments.length, ee = -1, te = p.length, ae = K(te + B), ye = this && this !== vn && this instanceof I ? T : i; ++ee < te; )
            ae[ee] = p[ee];
          for (; B--; )
            ae[ee++] = arguments[++L];
          return Kn(ye, _ ? c : this, ae);
        }
        return I;
      }
      function Vv(i) {
        return function(o, c, p) {
          return p && typeof p != "number" && $n(o, c, p) && (c = p = n), o = xi(o), c === n ? (c = o, o = 0) : c = xi(c), p = p === n ? o < c ? 1 : -1 : xi(p), cS(o, c, p, i);
        };
      }
      function pu(i) {
        return function(o, c) {
          return typeof o == "string" && typeof c == "string" || (o = gr(o), c = gr(c)), i(o, c);
        };
      }
      function Bv(i, o, c, p, _, T, I, L, B, ee) {
        var te = o & A, ae = te ? I : n, ye = te ? n : I, Me = te ? T : n, Ve = te ? n : T;
        o |= te ? C : M, o &= ~(te ? M : C), o & x || (o &= ~(S | w));
        var rt = [
          i,
          o,
          _,
          Me,
          ae,
          Ve,
          ye,
          L,
          B,
          ee
        ], Be = c.apply(n, rt);
        return rd(i) && tg(Be, rt), Be.placeholder = p, ng(Be, i, o);
      }
      function Zf(i) {
        var o = ln[i];
        return function(c, p) {
          if (c = gr(c), p = p == null ? 0 : bn(et(p), 292), p && nv(c)) {
            var _ = (kt(c) + "e").split("e"), T = o(_[0] + "e" + (+_[1] + p));
            return _ = (kt(T) + "e").split("e"), +(_[0] + "e" + (+_[1] - p));
          }
          return o(c);
        };
      }
      var xS = Ds && 1 / Bl(new Ds([, -0]))[1] == xe ? function(i) {
        return new Ds(i);
      } : _d;
      function Hv(i) {
        return function(o) {
          var c = wn(o);
          return c == k ? xf(o) : c == Tt ? BE(o) : NE(o, i(o));
        };
      }
      function Oi(i, o, c, p, _, T, I, L) {
        var B = o & w;
        if (!B && typeof i != "function")
          throw new dr(l);
        var ee = p ? p.length : 0;
        if (ee || (o &= ~(C | M), p = _ = n), I = I === n ? I : un(et(I), 0), L = L === n ? L : et(L), ee -= _ ? _.length : 0, o & M) {
          var te = p, ae = _;
          p = _ = n;
        }
        var ye = B ? n : Qf(i), Me = [
          i,
          o,
          c,
          p,
          _,
          te,
          ae,
          T,
          I,
          L
        ];
        if (ye && US(Me, ye), i = Me[0], o = Me[1], c = Me[2], p = Me[3], _ = Me[4], L = Me[9] = Me[9] === n ? B ? 0 : i.length : un(Me[9] - ee, 0), !L && o & (A | E) && (o &= ~(A | E)), !o || o == S)
          var Ve = ES(i, o, c);
        else
          o == A || o == E ? Ve = DS(i, o, L) : (o == C || o == (S | C)) && !_.length ? Ve = SS(i, o, c, p) : Ve = fu.apply(n, Me);
        var rt = ye ? Dv : tg;
        return ng(rt(Ve, Me), i, o);
      }
      function zv(i, o, c, p) {
        return i === n || Nr(i, Es[c]) && !At.call(p, c) ? o : i;
      }
      function jv(i, o, c, p, _, T) {
        return Kt(i) && Kt(o) && (T.set(o, i), ou(i, o, n, jv, T), T.delete(o)), i;
      }
      function TS(i) {
        return Bo(i) ? n : i;
      }
      function Gv(i, o, c, p, _, T) {
        var I = c & b, L = i.length, B = o.length;
        if (L != B && !(I && B > L))
          return !1;
        var ee = T.get(i), te = T.get(o);
        if (ee && te)
          return ee == o && te == i;
        var ae = -1, ye = !0, Me = c & O ? new Ya() : n;
        for (T.set(i, o), T.set(o, i); ++ae < L; ) {
          var Ve = i[ae], rt = o[ae];
          if (p)
            var Be = I ? p(rt, Ve, ae, o, i, T) : p(Ve, rt, ae, i, o, T);
          if (Be !== n) {
            if (Be)
              continue;
            ye = !1;
            break;
          }
          if (Me) {
            if (!bf(o, function(dt, pt) {
              if (!Ao(Me, pt) && (Ve === dt || _(Ve, dt, c, p, T)))
                return Me.push(pt);
            })) {
              ye = !1;
              break;
            }
          } else if (!(Ve === rt || _(Ve, rt, c, p, T))) {
            ye = !1;
            break;
          }
        }
        return T.delete(i), T.delete(o), ye;
      }
      function kS(i, o, c, p, _, T, I) {
        switch (c) {
          case mn:
            if (i.byteLength != o.byteLength || i.byteOffset != o.byteOffset)
              return !1;
            i = i.buffer, o = o.buffer;
          case Mt:
            return !(i.byteLength != o.byteLength || !T(new Kl(i), new Kl(o)));
          case ce:
          case le:
          case z:
            return Nr(+i, +o);
          case ke:
            return i.name == o.name && i.message == o.message;
          case Et:
          case rn:
            return i == o + "";
          case k:
            var L = xf;
          case Tt:
            var B = p & b;
            if (L || (L = Bl), i.size != o.size && !B)
              return !1;
            var ee = I.get(i);
            if (ee)
              return ee == o;
            p |= O, I.set(i, o);
            var te = Gv(L(i), L(o), p, _, T, I);
            return I.delete(i), te;
          case _t:
            if (Io)
              return Io.call(i) == Io.call(o);
        }
        return !1;
      }
      function AS(i, o, c, p, _, T) {
        var I = c & b, L = Xf(i), B = L.length, ee = Xf(o), te = ee.length;
        if (B != te && !I)
          return !1;
        for (var ae = B; ae--; ) {
          var ye = L[ae];
          if (!(I ? ye in o : At.call(o, ye)))
            return !1;
        }
        var Me = T.get(i), Ve = T.get(o);
        if (Me && Ve)
          return Me == o && Ve == i;
        var rt = !0;
        T.set(i, o), T.set(o, i);
        for (var Be = I; ++ae < B; ) {
          ye = L[ae];
          var dt = i[ye], pt = o[ye];
          if (p)
            var Qn = I ? p(pt, dt, ye, o, i, T) : p(dt, pt, ye, i, o, T);
          if (!(Qn === n ? dt === pt || _(dt, pt, c, p, T) : Qn)) {
            rt = !1;
            break;
          }
          Be || (Be = ye == "constructor");
        }
        if (rt && !Be) {
          var Pn = i.constructor, er = o.constructor;
          Pn != er && "constructor" in i && "constructor" in o && !(typeof Pn == "function" && Pn instanceof Pn && typeof er == "function" && er instanceof er) && (rt = !1);
        }
        return T.delete(i), T.delete(o), rt;
      }
      function Ei(i) {
        return ad(Qv(i, n, lg), i + "");
      }
      function Xf(i) {
        return hv(i, hn, td);
      }
      function Jf(i) {
        return hv(i, Yn, qv);
      }
      var Qf = tu ? function(i) {
        return tu.get(i);
      } : _d;
      function mu(i) {
        for (var o = i.name + "", c = Ss[o], p = At.call(Ss, o) ? c.length : 0; p--; ) {
          var _ = c[p], T = _.func;
          if (T == null || T == i)
            return _.name;
        }
        return o;
      }
      function As(i) {
        var o = At.call(D, "placeholder") ? D : i;
        return o.placeholder;
      }
      function We() {
        var i = D.iteratee || vd;
        return i = i === vd ? vv : i, arguments.length ? i(arguments[0], arguments[1]) : i;
      }
      function vu(i, o) {
        var c = i.__data__;
        return RS(o) ? c[typeof o == "string" ? "string" : "hash"] : c.map;
      }
      function ed(i) {
        for (var o = hn(i), c = o.length; c--; ) {
          var p = o[c], _ = i[p];
          o[c] = [p, _, Xv(_)];
        }
        return o;
      }
      function Va(i, o) {
        var c = WE(i, o);
        return mv(c) ? c : n;
      }
      function MS(i) {
        var o = At.call(i, Ra), c = i[Ra];
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
      (Af && wn(new Af(new ArrayBuffer(1))) != mn || $o && wn(new $o()) != k || Mf && wn(Mf.resolve()) != je || Ds && wn(new Ds()) != Tt || Po && wn(new Po()) != oe) && (wn = function(i) {
        var o = Mn(i), c = o == ge ? i.constructor : n, p = c ? Ba(c) : "";
        if (p)
          switch (p) {
            case dD:
              return mn;
            case hD:
              return k;
            case pD:
              return je;
            case mD:
              return Tt;
            case vD:
              return oe;
          }
        return o;
      });
      function $S(i, o, c) {
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
              i = un(i, o - I);
              break;
          }
        }
        return { start: i, end: o };
      }
      function PS(i) {
        var o = i.match(FO);
        return o ? o[1].split(YO) : [];
      }
      function Kv(i, o, c) {
        o = ca(o, i);
        for (var p = -1, _ = o.length, T = !1; ++p < _; ) {
          var I = Qr(o[p]);
          if (!(T = i != null && c(i, I)))
            break;
          i = i[I];
        }
        return T || ++p != _ ? T : (_ = i == null ? 0 : i.length, !!_ && Eu(_) && Di(I, _) && (Xe(i) || Ha(i)));
      }
      function CS(i) {
        var o = i.length, c = new i.constructor(o);
        return o && typeof i[0] == "string" && At.call(i, "index") && (c.index = i.index, c.input = i.input), c;
      }
      function Zv(i) {
        return typeof i.constructor == "function" && !Uo(i) ? xs(Zl(i)) : {};
      }
      function IS(i, o, c) {
        var p = i.constructor;
        switch (o) {
          case Mt:
            return qf(i);
          case ce:
          case le:
            return new p(+i);
          case mn:
            return gS(i, c);
          case ur:
          case kn:
          case An:
          case Pr:
          case Zr:
          case Na:
          case ta:
          case se:
          case me:
            return Pv(i, c);
          case k:
            return new p();
          case z:
          case rn:
            return new p(i);
          case Et:
            return _S(i);
          case Tt:
            return new p();
          case _t:
            return yS(i);
        }
      }
      function NS(i, o) {
        var c = o.length;
        if (!c)
          return i;
        var p = c - 1;
        return o[p] = (c > 1 ? "& " : "") + o[p], o = o.join(c > 2 ? ", " : " "), i.replace(RO, `{
/* [wrapped with ` + o + `] */
`);
      }
      function LS(i) {
        return Xe(i) || Ha(i) || !!(tv && i && i[tv]);
      }
      function Di(i, o) {
        var c = typeof i;
        return o = o ?? Fe, !!o && (c == "number" || c != "symbol" && qO.test(i)) && i > -1 && i % 1 == 0 && i < o;
      }
      function $n(i, o, c) {
        if (!Kt(c))
          return !1;
        var p = typeof o;
        return (p == "number" ? Fn(c) && Di(o, c.length) : p == "string" && o in c) ? Nr(c[o], i) : !1;
      }
      function nd(i, o) {
        if (Xe(i))
          return !1;
        var c = typeof i;
        return c == "number" || c == "symbol" || c == "boolean" || i == null || Jn(i) ? !0 : Ln.test(i) || !ms.test(i) || o != null && i in It(o);
      }
      function RS(i) {
        var o = typeof i;
        return o == "string" || o == "number" || o == "symbol" || o == "boolean" ? i !== "__proto__" : i === null;
      }
      function rd(i) {
        var o = mu(i), c = D[o];
        if (typeof c != "function" || !(o in ht.prototype))
          return !1;
        if (i === c)
          return !0;
        var p = Qf(c);
        return !!p && i === p[0];
      }
      function FS(i) {
        return !!Xm && Xm in i;
      }
      var YS = zl ? Si : bd;
      function Uo(i) {
        var o = i && i.constructor, c = typeof o == "function" && o.prototype || Es;
        return i === c;
      }
      function Xv(i) {
        return i === i && !Kt(i);
      }
      function Jv(i, o) {
        return function(c) {
          return c == null ? !1 : c[i] === o && (o !== n || i in It(c));
        };
      }
      function WS(i) {
        var o = wu(i, function(p) {
          return c.size === h && c.clear(), p;
        }), c = o.cache;
        return o;
      }
      function US(i, o) {
        var c = i[1], p = o[1], _ = c | p, T = _ < (S | w | N), I = p == N && c == A || p == N && c == F && i[7].length <= o[8] || p == (N | F) && o[7].length <= o[8] && c == A;
        if (!(T || I))
          return i;
        p & S && (i[2] = o[2], _ |= c & S ? 0 : x);
        var L = o[3];
        if (L) {
          var B = i[3];
          i[3] = B ? Iv(B, L, o[4]) : L, i[4] = B ? sa(i[3], d) : o[4];
        }
        return L = o[5], L && (B = i[5], i[5] = B ? Nv(B, L, o[6]) : L, i[6] = B ? sa(i[5], d) : o[6]), L = o[7], L && (i[7] = L), p & N && (i[8] = i[8] == null ? o[8] : bn(i[8], o[8])), i[9] == null && (i[9] = o[9]), i[0] = o[0], i[1] = _, i;
      }
      function VS(i) {
        var o = [];
        if (i != null)
          for (var c in It(i))
            o.push(c);
        return o;
      }
      function BS(i) {
        return Gl.call(i);
      }
      function Qv(i, o, c) {
        return o = un(o === n ? i.length - 1 : o, 0), function() {
          for (var p = arguments, _ = -1, T = un(p.length - o, 0), I = K(T); ++_ < T; )
            I[_] = p[o + _];
          _ = -1;
          for (var L = K(o + 1); ++_ < o; )
            L[_] = p[_];
          return L[o] = c(I), Kn(i, this, L);
        };
      }
      function eg(i, o) {
        return o.length < 2 ? i : Ua(i, mr(o, 0, -1));
      }
      function HS(i, o) {
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
      var tg = rg(Dv), Vo = aD || function(i, o) {
        return vn.setTimeout(i, o);
      }, ad = rg(hS);
      function ng(i, o, c) {
        var p = o + "";
        return ad(i, NS(p, zS(PS(p), c)));
      }
      function rg(i) {
        var o = 0, c = 0;
        return function() {
          var p = uD(), _ = J - (p - c);
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
      var ig = WS(function(i) {
        var o = [];
        return i.charCodeAt(0) === 46 && o.push(""), i.replace(vs, function(c, p, _, T) {
          o.push(_ ? T.replace(VO, "$1") : p || c);
        }), o;
      });
      function Qr(i) {
        if (typeof i == "string" || Jn(i))
          return i;
        var o = i + "";
        return o == "0" && 1 / i == -xe ? "-0" : o;
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
      function zS(i, o) {
        return fr(Oe, function(c) {
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
      function jS(i, o, c) {
        (c ? $n(i, o, c) : o === n) ? o = 1 : o = un(et(o), 0);
        var p = i == null ? 0 : i.length;
        if (!p || o < 1)
          return [];
        for (var _ = 0, T = 0, I = K(Ql(p / o)); _ < p; )
          I[T++] = mr(i, _, _ += o);
        return I;
      }
      function GS(i) {
        for (var o = -1, c = i == null ? 0 : i.length, p = 0, _ = []; ++o < c; ) {
          var T = i[o];
          T && (_[p++] = T);
        }
        return _;
      }
      function qS() {
        var i = arguments.length;
        if (!i)
          return [];
        for (var o = K(i - 1), c = arguments[0], p = i; p--; )
          o[p - 1] = arguments[p];
        return aa(Xe(c) ? Rn(c) : [c], gn(o, 1));
      }
      var KS = ot(function(i, o) {
        return en(i) ? Lo(i, gn(o, 1, en, !0)) : [];
      }), ZS = ot(function(i, o) {
        var c = vr(o);
        return en(c) && (c = n), en(i) ? Lo(i, gn(o, 1, en, !0), We(c, 2)) : [];
      }), XS = ot(function(i, o) {
        var c = vr(o);
        return en(c) && (c = n), en(i) ? Lo(i, gn(o, 1, en, !0), n, c) : [];
      });
      function JS(i, o, c) {
        var p = i == null ? 0 : i.length;
        return p ? (o = c || o === n ? 1 : et(o), mr(i, o < 0 ? 0 : o, p)) : [];
      }
      function QS(i, o, c) {
        var p = i == null ? 0 : i.length;
        return p ? (o = c || o === n ? 1 : et(o), o = p - o, mr(i, 0, o < 0 ? 0 : o)) : [];
      }
      function ex(i, o) {
        return i && i.length ? uu(i, We(o, 3), !0, !0) : [];
      }
      function tx(i, o) {
        return i && i.length ? uu(i, We(o, 3), !0) : [];
      }
      function nx(i, o, c, p) {
        var _ = i == null ? 0 : i.length;
        return _ ? (c && typeof c != "number" && $n(i, o, c) && (c = 0, p = _), qD(i, o, c, p)) : [];
      }
      function sg(i, o, c) {
        var p = i == null ? 0 : i.length;
        if (!p)
          return -1;
        var _ = c == null ? 0 : et(c);
        return _ < 0 && (_ = un(p + _, 0)), Vl(i, We(o, 3), _);
      }
      function og(i, o, c) {
        var p = i == null ? 0 : i.length;
        if (!p)
          return -1;
        var _ = p - 1;
        return c !== n && (_ = et(c), _ = c < 0 ? un(p + _, 0) : bn(_, p - 1)), Vl(i, We(o, 3), _, !0);
      }
      function lg(i) {
        var o = i == null ? 0 : i.length;
        return o ? gn(i, 1) : [];
      }
      function rx(i) {
        var o = i == null ? 0 : i.length;
        return o ? gn(i, xe) : [];
      }
      function ix(i, o) {
        var c = i == null ? 0 : i.length;
        return c ? (o = o === n ? 1 : et(o), gn(i, o)) : [];
      }
      function ax(i) {
        for (var o = -1, c = i == null ? 0 : i.length, p = {}; ++o < c; ) {
          var _ = i[o];
          p[_[0]] = _[1];
        }
        return p;
      }
      function ug(i) {
        return i && i.length ? i[0] : n;
      }
      function sx(i, o, c) {
        var p = i == null ? 0 : i.length;
        if (!p)
          return -1;
        var _ = c == null ? 0 : et(c);
        return _ < 0 && (_ = un(p + _, 0)), ys(i, o, _);
      }
      function ox(i) {
        var o = i == null ? 0 : i.length;
        return o ? mr(i, 0, -1) : [];
      }
      var lx = ot(function(i) {
        var o = jt(i, jf);
        return o.length && o[0] === i[0] ? Lf(o) : [];
      }), ux = ot(function(i) {
        var o = vr(i), c = jt(i, jf);
        return o === vr(c) ? o = n : c.pop(), c.length && c[0] === i[0] ? Lf(c, We(o, 2)) : [];
      }), cx = ot(function(i) {
        var o = vr(i), c = jt(i, jf);
        return o = typeof o == "function" ? o : n, o && c.pop(), c.length && c[0] === i[0] ? Lf(c, n, o) : [];
      });
      function fx(i, o) {
        return i == null ? "" : oD.call(i, o);
      }
      function vr(i) {
        var o = i == null ? 0 : i.length;
        return o ? i[o - 1] : n;
      }
      function dx(i, o, c) {
        var p = i == null ? 0 : i.length;
        if (!p)
          return -1;
        var _ = p;
        return c !== n && (_ = et(c), _ = _ < 0 ? un(p + _, 0) : bn(_, p - 1)), o === o ? zE(i, o, _) : Vl(i, Bm, _, !0);
      }
      function hx(i, o) {
        return i && i.length ? bv(i, et(o)) : n;
      }
      var px = ot(cg);
      function cg(i, o) {
        return i && i.length && o && o.length ? Wf(i, o) : i;
      }
      function mx(i, o, c) {
        return i && i.length && o && o.length ? Wf(i, o, We(c, 2)) : i;
      }
      function vx(i, o, c) {
        return i && i.length && o && o.length ? Wf(i, o, n, c) : i;
      }
      var gx = Ei(function(i, o) {
        var c = i == null ? 0 : i.length, p = Pf(i, o);
        return Ev(i, jt(o, function(_) {
          return Di(_, c) ? +_ : _;
        }).sort(Cv)), p;
      });
      function _x(i, o) {
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
        return i == null ? i : fD.call(i);
      }
      function yx(i, o, c) {
        var p = i == null ? 0 : i.length;
        return p ? (c && typeof c != "number" && $n(i, o, c) ? (o = 0, c = p) : (o = o == null ? 0 : et(o), c = c === n ? p : et(c)), mr(i, o, c)) : [];
      }
      function bx(i, o) {
        return lu(i, o);
      }
      function wx(i, o, c) {
        return Bf(i, o, We(c, 2));
      }
      function Ox(i, o) {
        var c = i == null ? 0 : i.length;
        if (c) {
          var p = lu(i, o);
          if (p < c && Nr(i[p], o))
            return p;
        }
        return -1;
      }
      function Ex(i, o) {
        return lu(i, o, !0);
      }
      function Dx(i, o, c) {
        return Bf(i, o, We(c, 2), !0);
      }
      function Sx(i, o) {
        var c = i == null ? 0 : i.length;
        if (c) {
          var p = lu(i, o, !0) - 1;
          if (Nr(i[p], o))
            return p;
        }
        return -1;
      }
      function xx(i) {
        return i && i.length ? Sv(i) : [];
      }
      function Tx(i, o) {
        return i && i.length ? Sv(i, We(o, 2)) : [];
      }
      function kx(i) {
        var o = i == null ? 0 : i.length;
        return o ? mr(i, 1, o) : [];
      }
      function Ax(i, o, c) {
        return i && i.length ? (o = c || o === n ? 1 : et(o), mr(i, 0, o < 0 ? 0 : o)) : [];
      }
      function Mx(i, o, c) {
        var p = i == null ? 0 : i.length;
        return p ? (o = c || o === n ? 1 : et(o), o = p - o, mr(i, o < 0 ? 0 : o, p)) : [];
      }
      function $x(i, o) {
        return i && i.length ? uu(i, We(o, 3), !1, !0) : [];
      }
      function Px(i, o) {
        return i && i.length ? uu(i, We(o, 3)) : [];
      }
      var Cx = ot(function(i) {
        return ua(gn(i, 1, en, !0));
      }), Ix = ot(function(i) {
        var o = vr(i);
        return en(o) && (o = n), ua(gn(i, 1, en, !0), We(o, 2));
      }), Nx = ot(function(i) {
        var o = vr(i);
        return o = typeof o == "function" ? o : n, ua(gn(i, 1, en, !0), n, o);
      });
      function Lx(i) {
        return i && i.length ? ua(i) : [];
      }
      function Rx(i, o) {
        return i && i.length ? ua(i, We(o, 2)) : [];
      }
      function Fx(i, o) {
        return o = typeof o == "function" ? o : n, i && i.length ? ua(i, n, o) : [];
      }
      function od(i) {
        if (!(i && i.length))
          return [];
        var o = 0;
        return i = ia(i, function(c) {
          if (en(c))
            return o = un(c.length, o), !0;
        }), Df(o, function(c) {
          return jt(i, wf(c));
        });
      }
      function fg(i, o) {
        if (!(i && i.length))
          return [];
        var c = od(i);
        return o == null ? c : jt(c, function(p) {
          return Kn(o, n, p);
        });
      }
      var Yx = ot(function(i, o) {
        return en(i) ? Lo(i, o) : [];
      }), Wx = ot(function(i) {
        return zf(ia(i, en));
      }), Ux = ot(function(i) {
        var o = vr(i);
        return en(o) && (o = n), zf(ia(i, en), We(o, 2));
      }), Vx = ot(function(i) {
        var o = vr(i);
        return o = typeof o == "function" ? o : n, zf(ia(i, en), n, o);
      }), Bx = ot(od);
      function Hx(i, o) {
        return Av(i || [], o || [], No);
      }
      function zx(i, o) {
        return Av(i || [], o || [], Yo);
      }
      var jx = ot(function(i) {
        var o = i.length, c = o > 1 ? i[o - 1] : n;
        return c = typeof c == "function" ? (i.pop(), c) : n, fg(i, c);
      });
      function dg(i) {
        var o = D(i);
        return o.__chain__ = !0, o;
      }
      function Gx(i, o) {
        return o(i), i;
      }
      function _u(i, o) {
        return o(i);
      }
      var qx = Ei(function(i) {
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
      function Kx() {
        return dg(this);
      }
      function Zx() {
        return new hr(this.value(), this.__chain__);
      }
      function Xx() {
        this.__values__ === n && (this.__values__ = xg(this.value()));
        var i = this.__index__ >= this.__values__.length, o = i ? n : this.__values__[this.__index__++];
        return { done: i, value: o };
      }
      function Jx() {
        return this;
      }
      function Qx(i) {
        for (var o, c = this; c instanceof ru; ) {
          var p = ag(c);
          p.__index__ = 0, p.__values__ = n, o ? _.__wrapped__ = p : o = p;
          var _ = p;
          c = c.__wrapped__;
        }
        return _.__wrapped__ = i, o;
      }
      function eT() {
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
      function tT() {
        return kv(this.__wrapped__, this.__actions__);
      }
      var nT = cu(function(i, o, c) {
        At.call(i, c) ? ++i[c] : wi(i, c, 1);
      });
      function rT(i, o, c) {
        var p = Xe(i) ? Um : GD;
        return c && $n(i, o, c) && (o = n), p(i, We(o, 3));
      }
      function iT(i, o) {
        var c = Xe(i) ? ia : fv;
        return c(i, We(o, 3));
      }
      var aT = Yv(sg), sT = Yv(og);
      function oT(i, o) {
        return gn(yu(i, o), 1);
      }
      function lT(i, o) {
        return gn(yu(i, o), xe);
      }
      function uT(i, o, c) {
        return c = c === n ? 1 : et(c), gn(yu(i, o), c);
      }
      function hg(i, o) {
        var c = Xe(i) ? fr : la;
        return c(i, We(o, 3));
      }
      function pg(i, o) {
        var c = Xe(i) ? kE : cv;
        return c(i, We(o, 3));
      }
      var cT = cu(function(i, o, c) {
        At.call(i, c) ? i[c].push(o) : wi(i, c, [o]);
      });
      function fT(i, o, c, p) {
        i = Fn(i) ? i : $s(i), c = c && !p ? et(c) : 0;
        var _ = i.length;
        return c < 0 && (c = un(_ + c, 0)), Du(i) ? c <= _ && i.indexOf(o, c) > -1 : !!_ && ys(i, o, c) > -1;
      }
      var dT = ot(function(i, o, c) {
        var p = -1, _ = typeof o == "function", T = Fn(i) ? K(i.length) : [];
        return la(i, function(I) {
          T[++p] = _ ? Kn(o, I, c) : Ro(I, o, c);
        }), T;
      }), hT = cu(function(i, o, c) {
        wi(i, c, o);
      });
      function yu(i, o) {
        var c = Xe(i) ? jt : gv;
        return c(i, We(o, 3));
      }
      function pT(i, o, c, p) {
        return i == null ? [] : (Xe(o) || (o = o == null ? [] : [o]), c = p ? n : c, Xe(c) || (c = c == null ? [] : [c]), wv(i, o, c));
      }
      var mT = cu(function(i, o, c) {
        i[c ? 0 : 1].push(o);
      }, function() {
        return [[], []];
      });
      function vT(i, o, c) {
        var p = Xe(i) ? yf : zm, _ = arguments.length < 3;
        return p(i, We(o, 4), c, _, la);
      }
      function gT(i, o, c) {
        var p = Xe(i) ? AE : zm, _ = arguments.length < 3;
        return p(i, We(o, 4), c, _, cv);
      }
      function _T(i, o) {
        var c = Xe(i) ? ia : fv;
        return c(i, Ou(We(o, 3)));
      }
      function yT(i) {
        var o = Xe(i) ? sv : fS;
        return o(i);
      }
      function bT(i, o, c) {
        (c ? $n(i, o, c) : o === n) ? o = 1 : o = et(o);
        var p = Xe(i) ? VD : dS;
        return p(i, o);
      }
      function wT(i) {
        var o = Xe(i) ? BD : pS;
        return o(i);
      }
      function OT(i) {
        if (i == null)
          return 0;
        if (Fn(i))
          return Du(i) ? ws(i) : i.length;
        var o = wn(i);
        return o == k || o == Tt ? i.size : Ff(i).length;
      }
      function ET(i, o, c) {
        var p = Xe(i) ? bf : mS;
        return c && $n(i, o, c) && (o = n), p(i, We(o, 3));
      }
      var DT = ot(function(i, o) {
        if (i == null)
          return [];
        var c = o.length;
        return c > 1 && $n(i, o[0], o[1]) ? o = [] : c > 2 && $n(o[0], o[1], o[2]) && (o = [o[0]]), wv(i, gn(o, 1), []);
      }), bu = iD || function() {
        return vn.Date.now();
      };
      function ST(i, o) {
        if (typeof o != "function")
          throw new dr(l);
        return i = et(i), function() {
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
        return i = et(i), function() {
          return --i > 0 && (c = o.apply(this, arguments)), i <= 1 && (o = n), c;
        };
      }
      var ld = ot(function(i, o, c) {
        var p = S;
        if (c.length) {
          var _ = sa(c, As(ld));
          p |= C;
        }
        return Oi(i, p, o, c, _);
      }), gg = ot(function(i, o, c) {
        var p = S | w;
        if (c.length) {
          var _ = sa(c, As(gg));
          p |= C;
        }
        return Oi(o, p, i, c, _);
      });
      function _g(i, o, c) {
        o = c ? n : o;
        var p = Oi(i, A, n, n, n, n, n, o);
        return p.placeholder = _g.placeholder, p;
      }
      function yg(i, o, c) {
        o = c ? n : o;
        var p = Oi(i, E, n, n, n, n, n, o);
        return p.placeholder = yg.placeholder, p;
      }
      function bg(i, o, c) {
        var p, _, T, I, L, B, ee = 0, te = !1, ae = !1, ye = !0;
        if (typeof i != "function")
          throw new dr(l);
        o = gr(o) || 0, Kt(c) && (te = !!c.leading, ae = "maxWait" in c, T = ae ? un(gr(c.maxWait) || 0, o) : T, ye = "trailing" in c ? !!c.trailing : ye);
        function Me(tn) {
          var Lr = p, Ti = _;
          return p = _ = n, ee = tn, I = i.apply(Ti, Lr), I;
        }
        function Ve(tn) {
          return ee = tn, L = Vo(dt, o), te ? Me(tn) : I;
        }
        function rt(tn) {
          var Lr = tn - B, Ti = tn - ee, Yg = o - Lr;
          return ae ? bn(Yg, T - Ti) : Yg;
        }
        function Be(tn) {
          var Lr = tn - B, Ti = tn - ee;
          return B === n || Lr >= o || Lr < 0 || ae && Ti >= T;
        }
        function dt() {
          var tn = bu();
          if (Be(tn))
            return pt(tn);
          L = Vo(dt, rt(tn));
        }
        function pt(tn) {
          return L = n, ye && p ? Me(tn) : (p = _ = n, I);
        }
        function Qn() {
          L !== n && Mv(L), ee = 0, p = B = _ = L = n;
        }
        function Pn() {
          return L === n ? I : pt(bu());
        }
        function er() {
          var tn = bu(), Lr = Be(tn);
          if (p = arguments, _ = this, B = tn, Lr) {
            if (L === n)
              return Ve(B);
            if (ae)
              return Mv(L), L = Vo(dt, o), Me(B);
          }
          return L === n && (L = Vo(dt, o)), I;
        }
        return er.cancel = Qn, er.flush = Pn, er;
      }
      var xT = ot(function(i, o) {
        return uv(i, 1, o);
      }), TT = ot(function(i, o, c) {
        return uv(i, gr(o) || 0, c);
      });
      function kT(i) {
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
      function AT(i) {
        return vg(2, i);
      }
      var MT = vS(function(i, o) {
        o = o.length == 1 && Xe(o[0]) ? jt(o[0], Zn(We())) : jt(gn(o, 1), Zn(We()));
        var c = o.length;
        return ot(function(p) {
          for (var _ = -1, T = bn(p.length, c); ++_ < T; )
            p[_] = o[_].call(this, p[_]);
          return Kn(i, this, p);
        });
      }), ud = ot(function(i, o) {
        var c = sa(o, As(ud));
        return Oi(i, C, n, o, c);
      }), wg = ot(function(i, o) {
        var c = sa(o, As(wg));
        return Oi(i, M, n, o, c);
      }), $T = Ei(function(i, o) {
        return Oi(i, F, n, n, n, o);
      });
      function PT(i, o) {
        if (typeof i != "function")
          throw new dr(l);
        return o = o === n ? o : et(o), ot(i, o);
      }
      function CT(i, o) {
        if (typeof i != "function")
          throw new dr(l);
        return o = o == null ? 0 : un(et(o), 0), ot(function(c) {
          var p = c[o], _ = fa(c, 0, o);
          return p && aa(_, p), Kn(i, this, _);
        });
      }
      function IT(i, o, c) {
        var p = !0, _ = !0;
        if (typeof i != "function")
          throw new dr(l);
        return Kt(c) && (p = "leading" in c ? !!c.leading : p, _ = "trailing" in c ? !!c.trailing : _), bg(i, o, {
          leading: p,
          maxWait: o,
          trailing: _
        });
      }
      function NT(i) {
        return mg(i, 1);
      }
      function LT(i, o) {
        return ud(Gf(o), i);
      }
      function RT() {
        if (!arguments.length)
          return [];
        var i = arguments[0];
        return Xe(i) ? i : [i];
      }
      function FT(i) {
        return pr(i, g);
      }
      function YT(i, o) {
        return o = typeof o == "function" ? o : n, pr(i, g, o);
      }
      function WT(i) {
        return pr(i, m | g);
      }
      function UT(i, o) {
        return o = typeof o == "function" ? o : n, pr(i, m | g, o);
      }
      function VT(i, o) {
        return o == null || lv(i, o, hn(o));
      }
      function Nr(i, o) {
        return i === o || i !== i && o !== o;
      }
      var BT = pu(Nf), HT = pu(function(i, o) {
        return i >= o;
      }), Ha = pv(function() {
        return arguments;
      }()) ? pv : function(i) {
        return Jt(i) && At.call(i, "callee") && !ev.call(i, "callee");
      }, Xe = K.isArray, zT = Nm ? Zn(Nm) : QD;
      function Fn(i) {
        return i != null && Eu(i.length) && !Si(i);
      }
      function en(i) {
        return Jt(i) && Fn(i);
      }
      function jT(i) {
        return i === !0 || i === !1 || Jt(i) && Mn(i) == ce;
      }
      var da = sD || bd, GT = Lm ? Zn(Lm) : eS;
      function qT(i) {
        return Jt(i) && i.nodeType === 1 && !Bo(i);
      }
      function KT(i) {
        if (i == null)
          return !0;
        if (Fn(i) && (Xe(i) || typeof i == "string" || typeof i.splice == "function" || da(i) || Ms(i) || Ha(i)))
          return !i.length;
        var o = wn(i);
        if (o == k || o == Tt)
          return !i.size;
        if (Uo(i))
          return !Ff(i).length;
        for (var c in i)
          if (At.call(i, c))
            return !1;
        return !0;
      }
      function ZT(i, o) {
        return Fo(i, o);
      }
      function XT(i, o, c) {
        c = typeof c == "function" ? c : n;
        var p = c ? c(i, o) : n;
        return p === n ? Fo(i, o, n, c) : !!p;
      }
      function cd(i) {
        if (!Jt(i))
          return !1;
        var o = Mn(i);
        return o == ke || o == Pe || typeof i.message == "string" && typeof i.name == "string" && !Bo(i);
      }
      function JT(i) {
        return typeof i == "number" && nv(i);
      }
      function Si(i) {
        if (!Kt(i))
          return !1;
        var o = Mn(i);
        return o == re || o == $ || o == xt || o == Yt;
      }
      function Og(i) {
        return typeof i == "number" && i == et(i);
      }
      function Eu(i) {
        return typeof i == "number" && i > -1 && i % 1 == 0 && i <= Fe;
      }
      function Kt(i) {
        var o = typeof i;
        return i != null && (o == "object" || o == "function");
      }
      function Jt(i) {
        return i != null && typeof i == "object";
      }
      var Eg = Rm ? Zn(Rm) : nS;
      function QT(i, o) {
        return i === o || Rf(i, o, ed(o));
      }
      function ek(i, o, c) {
        return c = typeof c == "function" ? c : n, Rf(i, o, ed(o), c);
      }
      function tk(i) {
        return Dg(i) && i != +i;
      }
      function nk(i) {
        if (YS(i))
          throw new Ze(s);
        return mv(i);
      }
      function rk(i) {
        return i === null;
      }
      function ik(i) {
        return i == null;
      }
      function Dg(i) {
        return typeof i == "number" || Jt(i) && Mn(i) == z;
      }
      function Bo(i) {
        if (!Jt(i) || Mn(i) != ge)
          return !1;
        var o = Zl(i);
        if (o === null)
          return !0;
        var c = At.call(o, "constructor") && o.constructor;
        return typeof c == "function" && c instanceof c && jl.call(c) == eD;
      }
      var fd = Fm ? Zn(Fm) : rS;
      function ak(i) {
        return Og(i) && i >= -Fe && i <= Fe;
      }
      var Sg = Ym ? Zn(Ym) : iS;
      function Du(i) {
        return typeof i == "string" || !Xe(i) && Jt(i) && Mn(i) == rn;
      }
      function Jn(i) {
        return typeof i == "symbol" || Jt(i) && Mn(i) == _t;
      }
      var Ms = Wm ? Zn(Wm) : aS;
      function sk(i) {
        return i === n;
      }
      function ok(i) {
        return Jt(i) && wn(i) == oe;
      }
      function lk(i) {
        return Jt(i) && Mn(i) == zt;
      }
      var uk = pu(Yf), ck = pu(function(i, o) {
        return i <= o;
      });
      function xg(i) {
        if (!i)
          return [];
        if (Fn(i))
          return Du(i) ? Cr(i) : Rn(i);
        if (Mo && i[Mo])
          return VE(i[Mo]());
        var o = wn(i), c = o == k ? xf : o == Tt ? Bl : $s;
        return c(i);
      }
      function xi(i) {
        if (!i)
          return i === 0 ? i : 0;
        if (i = gr(i), i === xe || i === -xe) {
          var o = i < 0 ? -1 : 1;
          return o * Ne;
        }
        return i === i ? i : 0;
      }
      function et(i) {
        var o = xi(i), c = o % 1;
        return o === o ? c ? o - c : o : 0;
      }
      function Tg(i) {
        return i ? Wa(et(i), 0, Ae) : 0;
      }
      function gr(i) {
        if (typeof i == "number")
          return i;
        if (Jn(i))
          return ie;
        if (Kt(i)) {
          var o = typeof i.valueOf == "function" ? i.valueOf() : i;
          i = Kt(o) ? o + "" : o;
        }
        if (typeof i != "string")
          return i === 0 ? i : +i;
        i = jm(i);
        var c = zO.test(i);
        return c || GO.test(i) ? SE(i.slice(2), c ? 2 : 8) : HO.test(i) ? ie : +i;
      }
      function kg(i) {
        return Jr(i, Yn(i));
      }
      function fk(i) {
        return i ? Wa(et(i), -Fe, Fe) : i === 0 ? i : 0;
      }
      function kt(i) {
        return i == null ? "" : Xn(i);
      }
      var dk = Ts(function(i, o) {
        if (Uo(o) || Fn(o)) {
          Jr(o, hn(o), i);
          return;
        }
        for (var c in o)
          At.call(o, c) && No(i, c, o[c]);
      }), Ag = Ts(function(i, o) {
        Jr(o, Yn(o), i);
      }), Su = Ts(function(i, o, c, p) {
        Jr(o, Yn(o), i, p);
      }), hk = Ts(function(i, o, c, p) {
        Jr(o, hn(o), i, p);
      }), pk = Ei(Pf);
      function mk(i, o) {
        var c = xs(i);
        return o == null ? c : ov(c, o);
      }
      var vk = ot(function(i, o) {
        i = It(i);
        var c = -1, p = o.length, _ = p > 2 ? o[2] : n;
        for (_ && $n(o[0], o[1], _) && (p = 1); ++c < p; )
          for (var T = o[c], I = Yn(T), L = -1, B = I.length; ++L < B; ) {
            var ee = I[L], te = i[ee];
            (te === n || Nr(te, Es[ee]) && !At.call(i, ee)) && (i[ee] = T[ee]);
          }
        return i;
      }), gk = ot(function(i) {
        return i.push(n, jv), Kn(Mg, n, i);
      });
      function _k(i, o) {
        return Vm(i, We(o, 3), Xr);
      }
      function yk(i, o) {
        return Vm(i, We(o, 3), If);
      }
      function bk(i, o) {
        return i == null ? i : Cf(i, We(o, 3), Yn);
      }
      function wk(i, o) {
        return i == null ? i : dv(i, We(o, 3), Yn);
      }
      function Ok(i, o) {
        return i && Xr(i, We(o, 3));
      }
      function Ek(i, o) {
        return i && If(i, We(o, 3));
      }
      function Dk(i) {
        return i == null ? [] : su(i, hn(i));
      }
      function Sk(i) {
        return i == null ? [] : su(i, Yn(i));
      }
      function dd(i, o, c) {
        var p = i == null ? n : Ua(i, o);
        return p === n ? c : p;
      }
      function xk(i, o) {
        return i != null && Kv(i, o, KD);
      }
      function hd(i, o) {
        return i != null && Kv(i, o, ZD);
      }
      var Tk = Uv(function(i, o, c) {
        o != null && typeof o.toString != "function" && (o = Gl.call(o)), i[o] = c;
      }, md(Wn)), kk = Uv(function(i, o, c) {
        o != null && typeof o.toString != "function" && (o = Gl.call(o)), At.call(i, o) ? i[o].push(c) : i[o] = [c];
      }, We), Ak = ot(Ro);
      function hn(i) {
        return Fn(i) ? av(i) : Ff(i);
      }
      function Yn(i) {
        return Fn(i) ? av(i, !0) : sS(i);
      }
      function Mk(i, o) {
        var c = {};
        return o = We(o, 3), Xr(i, function(p, _, T) {
          wi(c, o(p, _, T), p);
        }), c;
      }
      function $k(i, o) {
        var c = {};
        return o = We(o, 3), Xr(i, function(p, _, T) {
          wi(c, _, o(p, _, T));
        }), c;
      }
      var Pk = Ts(function(i, o, c) {
        ou(i, o, c);
      }), Mg = Ts(function(i, o, c, p) {
        ou(i, o, c, p);
      }), Ck = Ei(function(i, o) {
        var c = {};
        if (i == null)
          return c;
        var p = !1;
        o = jt(o, function(T) {
          return T = ca(T, i), p || (p = T.length > 1), T;
        }), Jr(i, Jf(i), c), p && (c = pr(c, m | v | g, TS));
        for (var _ = o.length; _--; )
          Hf(c, o[_]);
        return c;
      });
      function Ik(i, o) {
        return $g(i, Ou(We(o)));
      }
      var Nk = Ei(function(i, o) {
        return i == null ? {} : lS(i, o);
      });
      function $g(i, o) {
        if (i == null)
          return {};
        var c = jt(Jf(i), function(p) {
          return [p];
        });
        return o = We(o), Ov(i, c, function(p, _) {
          return o(p, _[0]);
        });
      }
      function Lk(i, o, c) {
        o = ca(o, i);
        var p = -1, _ = o.length;
        for (_ || (_ = 1, i = n); ++p < _; ) {
          var T = i == null ? n : i[Qr(o[p])];
          T === n && (p = _, T = c), i = Si(T) ? T.call(i) : T;
        }
        return i;
      }
      function Rk(i, o, c) {
        return i == null ? i : Yo(i, o, c);
      }
      function Fk(i, o, c, p) {
        return p = typeof p == "function" ? p : n, i == null ? i : Yo(i, o, c, p);
      }
      var Pg = Hv(hn), Cg = Hv(Yn);
      function Yk(i, o, c) {
        var p = Xe(i), _ = p || da(i) || Ms(i);
        if (o = We(o, 4), c == null) {
          var T = i && i.constructor;
          _ ? c = p ? new T() : [] : Kt(i) ? c = Si(T) ? xs(Zl(i)) : {} : c = {};
        }
        return (_ ? fr : Xr)(i, function(I, L, B) {
          return o(c, I, L, B);
        }), c;
      }
      function Wk(i, o) {
        return i == null ? !0 : Hf(i, o);
      }
      function Uk(i, o, c) {
        return i == null ? i : Tv(i, o, Gf(c));
      }
      function Vk(i, o, c, p) {
        return p = typeof p == "function" ? p : n, i == null ? i : Tv(i, o, Gf(c), p);
      }
      function $s(i) {
        return i == null ? [] : Sf(i, hn(i));
      }
      function Bk(i) {
        return i == null ? [] : Sf(i, Yn(i));
      }
      function Hk(i, o, c) {
        return c === n && (c = o, o = n), c !== n && (c = gr(c), c = c === c ? c : 0), o !== n && (o = gr(o), o = o === o ? o : 0), Wa(gr(i), o, c);
      }
      function zk(i, o, c) {
        return o = xi(o), c === n ? (c = o, o = 0) : c = xi(c), i = gr(i), XD(i, o, c);
      }
      function jk(i, o, c) {
        if (c && typeof c != "boolean" && $n(i, o, c) && (o = c = n), c === n && (typeof o == "boolean" ? (c = o, o = n) : typeof i == "boolean" && (c = i, i = n)), i === n && o === n ? (i = 0, o = 1) : (i = xi(i), o === n ? (o = i, i = 0) : o = xi(o)), i > o) {
          var p = i;
          i = o, o = p;
        }
        if (c || i % 1 || o % 1) {
          var _ = rv();
          return bn(i + _ * (o - i + DE("1e-" + ((_ + "").length - 1))), o);
        }
        return Uf(i, o);
      }
      var Gk = ks(function(i, o, c) {
        return o = o.toLowerCase(), i + (c ? Ig(o) : o);
      });
      function Ig(i) {
        return pd(kt(i).toLowerCase());
      }
      function Ng(i) {
        return i = kt(i), i && i.replace(KO, RE).replace(pE, "");
      }
      function qk(i, o, c) {
        i = kt(i), o = Xn(o);
        var p = i.length;
        c = c === n ? p : Wa(et(c), 0, p);
        var _ = c;
        return c -= o.length, c >= 0 && i.slice(c, _) == o;
      }
      function Kk(i) {
        return i = kt(i), i && qn.test(i) ? i.replace(ut, FE) : i;
      }
      function Zk(i) {
        return i = kt(i), i && ko.test(i) ? i.replace(_i, "\\$&") : i;
      }
      var Xk = ks(function(i, o, c) {
        return i + (c ? "-" : "") + o.toLowerCase();
      }), Jk = ks(function(i, o, c) {
        return i + (c ? " " : "") + o.toLowerCase();
      }), Qk = Fv("toLowerCase");
      function eA(i, o, c) {
        i = kt(i), o = et(o);
        var p = o ? ws(i) : 0;
        if (!o || p >= o)
          return i;
        var _ = (o - p) / 2;
        return hu(eu(_), c) + i + hu(Ql(_), c);
      }
      function tA(i, o, c) {
        i = kt(i), o = et(o);
        var p = o ? ws(i) : 0;
        return o && p < o ? i + hu(o - p, c) : i;
      }
      function nA(i, o, c) {
        i = kt(i), o = et(o);
        var p = o ? ws(i) : 0;
        return o && p < o ? hu(o - p, c) + i : i;
      }
      function rA(i, o, c) {
        return c || o == null ? o = 0 : o && (o = +o), cD(kt(i).replace(gs, ""), o || 0);
      }
      function iA(i, o, c) {
        return (c ? $n(i, o, c) : o === n) ? o = 1 : o = et(o), Vf(kt(i), o);
      }
      function aA() {
        var i = arguments, o = kt(i[0]);
        return i.length < 3 ? o : o.replace(i[1], i[2]);
      }
      var sA = ks(function(i, o, c) {
        return i + (c ? "_" : "") + o.toLowerCase();
      });
      function oA(i, o, c) {
        return c && typeof c != "number" && $n(i, o, c) && (o = c = n), c = c === n ? Ae : c >>> 0, c ? (i = kt(i), i && (typeof o == "string" || o != null && !fd(o)) && (o = Xn(o), !o && bs(i)) ? fa(Cr(i), 0, c) : i.split(o, c)) : [];
      }
      var lA = ks(function(i, o, c) {
        return i + (c ? " " : "") + pd(o);
      });
      function uA(i, o, c) {
        return i = kt(i), c = c == null ? 0 : Wa(et(c), 0, i.length), o = Xn(o), i.slice(c, c + o.length) == o;
      }
      function cA(i, o, c) {
        var p = D.templateSettings;
        c && $n(i, o, c) && (o = n), i = kt(i), o = Su({}, o, p, zv);
        var _ = Su({}, o.imports, p.imports, zv), T = hn(_), I = Sf(_, T), L, B, ee = 0, te = o.interpolate || Fl, ae = "__p += '", ye = Tf(
          (o.escape || Fl).source + "|" + te.source + "|" + (te === ra ? BO : Fl).source + "|" + (o.evaluate || Fl).source + "|$",
          "g"
        ), Me = "//# sourceURL=" + (At.call(o, "sourceURL") ? (o.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++yE + "]") + `
`;
        i.replace(ye, function(Be, dt, pt, Qn, Pn, er) {
          return pt || (pt = Qn), ae += i.slice(ee, er).replace(ZO, YE), dt && (L = !0, ae += `' +
__e(` + dt + `) +
'`), Pn && (B = !0, ae += `';
` + Pn + `;
__p += '`), pt && (ae += `' +
((__t = (` + pt + `)) == null ? '' : __t) +
'`), ee = er + Be.length, Be;
        }), ae += `';
`;
        var Ve = At.call(o, "variable") && o.variable;
        if (!Ve)
          ae = `with (obj) {
` + ae + `
}
`;
        else if (UO.test(Ve))
          throw new Ze(u);
        ae = (B ? ae.replace(He, "") : ae).replace(V, "$1").replace(pe, "$1;"), ae = "function(" + (Ve || "obj") + `) {
` + (Ve ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (L ? ", __e = _.escape" : "") + (B ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + ae + `return __p
}`;
        var rt = Rg(function() {
          return Dt(T, Me + "return " + ae).apply(n, I);
        });
        if (rt.source = ae, cd(rt))
          throw rt;
        return rt;
      }
      function fA(i) {
        return kt(i).toLowerCase();
      }
      function dA(i) {
        return kt(i).toUpperCase();
      }
      function hA(i, o, c) {
        if (i = kt(i), i && (c || o === n))
          return jm(i);
        if (!i || !(o = Xn(o)))
          return i;
        var p = Cr(i), _ = Cr(o), T = Gm(p, _), I = qm(p, _) + 1;
        return fa(p, T, I).join("");
      }
      function pA(i, o, c) {
        if (i = kt(i), i && (c || o === n))
          return i.slice(0, Zm(i) + 1);
        if (!i || !(o = Xn(o)))
          return i;
        var p = Cr(i), _ = qm(p, Cr(o)) + 1;
        return fa(p, 0, _).join("");
      }
      function mA(i, o, c) {
        if (i = kt(i), i && (c || o === n))
          return i.replace(gs, "");
        if (!i || !(o = Xn(o)))
          return i;
        var p = Cr(i), _ = Gm(p, Cr(o));
        return fa(p, _).join("");
      }
      function vA(i, o) {
        var c = P, p = j;
        if (Kt(o)) {
          var _ = "separator" in o ? o.separator : _;
          c = "length" in o ? et(o.length) : c, p = "omission" in o ? Xn(o.omission) : p;
        }
        i = kt(i);
        var T = i.length;
        if (bs(i)) {
          var I = Cr(i);
          T = I.length;
        }
        if (c >= T)
          return i;
        var L = c - ws(p);
        if (L < 1)
          return p;
        var B = I ? fa(I, 0, L).join("") : i.slice(0, L);
        if (_ === n)
          return B + p;
        if (I && (L += B.length - L), fd(_)) {
          if (i.slice(L).search(_)) {
            var ee, te = B;
            for (_.global || (_ = Tf(_.source, kt(pm.exec(_)) + "g")), _.lastIndex = 0; ee = _.exec(te); )
              var ae = ee.index;
            B = B.slice(0, ae === n ? L : ae);
          }
        } else if (i.indexOf(Xn(_), L) != L) {
          var ye = B.lastIndexOf(_);
          ye > -1 && (B = B.slice(0, ye));
        }
        return B + p;
      }
      function gA(i) {
        return i = kt(i), i && Xt.test(i) ? i.replace(Ce, jE) : i;
      }
      var _A = ks(function(i, o, c) {
        return i + (c ? " " : "") + o.toUpperCase();
      }), pd = Fv("toUpperCase");
      function Lg(i, o, c) {
        return i = kt(i), o = c ? n : o, o === n ? UE(i) ? KE(i) : PE(i) : i.match(o) || [];
      }
      var Rg = ot(function(i, o) {
        try {
          return Kn(i, n, o);
        } catch (c) {
          return cd(c) ? c : new Ze(c);
        }
      }), yA = Ei(function(i, o) {
        return fr(o, function(c) {
          c = Qr(c), wi(i, c, ld(i[c], i));
        }), i;
      });
      function bA(i) {
        var o = i == null ? 0 : i.length, c = We();
        return i = o ? jt(i, function(p) {
          if (typeof p[1] != "function")
            throw new dr(l);
          return [c(p[0]), p[1]];
        }) : [], ot(function(p) {
          for (var _ = -1; ++_ < o; ) {
            var T = i[_];
            if (Kn(T[0], this, p))
              return Kn(T[1], this, p);
          }
        });
      }
      function wA(i) {
        return jD(pr(i, m));
      }
      function md(i) {
        return function() {
          return i;
        };
      }
      function OA(i, o) {
        return i == null || i !== i ? o : i;
      }
      var EA = Wv(), DA = Wv(!0);
      function Wn(i) {
        return i;
      }
      function vd(i) {
        return vv(typeof i == "function" ? i : pr(i, m));
      }
      function SA(i) {
        return _v(pr(i, m));
      }
      function xA(i, o) {
        return yv(i, pr(o, m));
      }
      var TA = ot(function(i, o) {
        return function(c) {
          return Ro(c, i, o);
        };
      }), kA = ot(function(i, o) {
        return function(c) {
          return Ro(i, c, o);
        };
      });
      function gd(i, o, c) {
        var p = hn(o), _ = su(o, p);
        c == null && !(Kt(o) && (_.length || !p.length)) && (c = o, o = i, i = this, _ = su(o, hn(o)));
        var T = !(Kt(c) && "chain" in c) || !!c.chain, I = Si(i);
        return fr(_, function(L) {
          var B = o[L];
          i[L] = B, I && (i.prototype[L] = function() {
            var ee = this.__chain__;
            if (T || ee) {
              var te = i(this.__wrapped__), ae = te.__actions__ = Rn(this.__actions__);
              return ae.push({ func: B, args: arguments, thisArg: i }), te.__chain__ = ee, te;
            }
            return B.apply(i, aa([this.value()], arguments));
          });
        }), i;
      }
      function AA() {
        return vn._ === this && (vn._ = tD), this;
      }
      function _d() {
      }
      function MA(i) {
        return i = et(i), ot(function(o) {
          return bv(o, i);
        });
      }
      var $A = Kf(jt), PA = Kf(Um), CA = Kf(bf);
      function Fg(i) {
        return nd(i) ? wf(Qr(i)) : uS(i);
      }
      function IA(i) {
        return function(o) {
          return i == null ? n : Ua(i, o);
        };
      }
      var NA = Vv(), LA = Vv(!0);
      function yd() {
        return [];
      }
      function bd() {
        return !1;
      }
      function RA() {
        return {};
      }
      function FA() {
        return "";
      }
      function YA() {
        return !0;
      }
      function WA(i, o) {
        if (i = et(i), i < 1 || i > Fe)
          return [];
        var c = Ae, p = bn(i, Ae);
        o = We(o), i -= Ae;
        for (var _ = Df(p, o); ++c < i; )
          o(c);
        return _;
      }
      function UA(i) {
        return Xe(i) ? jt(i, Qr) : Jn(i) ? [i] : Rn(ig(kt(i)));
      }
      function VA(i) {
        var o = ++QE;
        return kt(i) + o;
      }
      var BA = du(function(i, o) {
        return i + o;
      }, 0), HA = Zf("ceil"), zA = du(function(i, o) {
        return i / o;
      }, 1), jA = Zf("floor");
      function GA(i) {
        return i && i.length ? au(i, Wn, Nf) : n;
      }
      function qA(i, o) {
        return i && i.length ? au(i, We(o, 2), Nf) : n;
      }
      function KA(i) {
        return Hm(i, Wn);
      }
      function ZA(i, o) {
        return Hm(i, We(o, 2));
      }
      function XA(i) {
        return i && i.length ? au(i, Wn, Yf) : n;
      }
      function JA(i, o) {
        return i && i.length ? au(i, We(o, 2), Yf) : n;
      }
      var QA = du(function(i, o) {
        return i * o;
      }, 1), eM = Zf("round"), tM = du(function(i, o) {
        return i - o;
      }, 0);
      function nM(i) {
        return i && i.length ? Ef(i, Wn) : 0;
      }
      function rM(i, o) {
        return i && i.length ? Ef(i, We(o, 2)) : 0;
      }
      return D.after = ST, D.ary = mg, D.assign = dk, D.assignIn = Ag, D.assignInWith = Su, D.assignWith = hk, D.at = pk, D.before = vg, D.bind = ld, D.bindAll = yA, D.bindKey = gg, D.castArray = RT, D.chain = dg, D.chunk = jS, D.compact = GS, D.concat = qS, D.cond = bA, D.conforms = wA, D.constant = md, D.countBy = nT, D.create = mk, D.curry = _g, D.curryRight = yg, D.debounce = bg, D.defaults = vk, D.defaultsDeep = gk, D.defer = xT, D.delay = TT, D.difference = KS, D.differenceBy = ZS, D.differenceWith = XS, D.drop = JS, D.dropRight = QS, D.dropRightWhile = ex, D.dropWhile = tx, D.fill = nx, D.filter = iT, D.flatMap = oT, D.flatMapDeep = lT, D.flatMapDepth = uT, D.flatten = lg, D.flattenDeep = rx, D.flattenDepth = ix, D.flip = kT, D.flow = EA, D.flowRight = DA, D.fromPairs = ax, D.functions = Dk, D.functionsIn = Sk, D.groupBy = cT, D.initial = ox, D.intersection = lx, D.intersectionBy = ux, D.intersectionWith = cx, D.invert = Tk, D.invertBy = kk, D.invokeMap = dT, D.iteratee = vd, D.keyBy = hT, D.keys = hn, D.keysIn = Yn, D.map = yu, D.mapKeys = Mk, D.mapValues = $k, D.matches = SA, D.matchesProperty = xA, D.memoize = wu, D.merge = Pk, D.mergeWith = Mg, D.method = TA, D.methodOf = kA, D.mixin = gd, D.negate = Ou, D.nthArg = MA, D.omit = Ck, D.omitBy = Ik, D.once = AT, D.orderBy = pT, D.over = $A, D.overArgs = MT, D.overEvery = PA, D.overSome = CA, D.partial = ud, D.partialRight = wg, D.partition = mT, D.pick = Nk, D.pickBy = $g, D.property = Fg, D.propertyOf = IA, D.pull = px, D.pullAll = cg, D.pullAllBy = mx, D.pullAllWith = vx, D.pullAt = gx, D.range = NA, D.rangeRight = LA, D.rearg = $T, D.reject = _T, D.remove = _x, D.rest = PT, D.reverse = sd, D.sampleSize = bT, D.set = Rk, D.setWith = Fk, D.shuffle = wT, D.slice = yx, D.sortBy = DT, D.sortedUniq = xx, D.sortedUniqBy = Tx, D.split = oA, D.spread = CT, D.tail = kx, D.take = Ax, D.takeRight = Mx, D.takeRightWhile = $x, D.takeWhile = Px, D.tap = Gx, D.throttle = IT, D.thru = _u, D.toArray = xg, D.toPairs = Pg, D.toPairsIn = Cg, D.toPath = UA, D.toPlainObject = kg, D.transform = Yk, D.unary = NT, D.union = Cx, D.unionBy = Ix, D.unionWith = Nx, D.uniq = Lx, D.uniqBy = Rx, D.uniqWith = Fx, D.unset = Wk, D.unzip = od, D.unzipWith = fg, D.update = Uk, D.updateWith = Vk, D.values = $s, D.valuesIn = Bk, D.without = Yx, D.words = Lg, D.wrap = LT, D.xor = Wx, D.xorBy = Ux, D.xorWith = Vx, D.zip = Bx, D.zipObject = Hx, D.zipObjectDeep = zx, D.zipWith = jx, D.entries = Pg, D.entriesIn = Cg, D.extend = Ag, D.extendWith = Su, gd(D, D), D.add = BA, D.attempt = Rg, D.camelCase = Gk, D.capitalize = Ig, D.ceil = HA, D.clamp = Hk, D.clone = FT, D.cloneDeep = WT, D.cloneDeepWith = UT, D.cloneWith = YT, D.conformsTo = VT, D.deburr = Ng, D.defaultTo = OA, D.divide = zA, D.endsWith = qk, D.eq = Nr, D.escape = Kk, D.escapeRegExp = Zk, D.every = rT, D.find = aT, D.findIndex = sg, D.findKey = _k, D.findLast = sT, D.findLastIndex = og, D.findLastKey = yk, D.floor = jA, D.forEach = hg, D.forEachRight = pg, D.forIn = bk, D.forInRight = wk, D.forOwn = Ok, D.forOwnRight = Ek, D.get = dd, D.gt = BT, D.gte = HT, D.has = xk, D.hasIn = hd, D.head = ug, D.identity = Wn, D.includes = fT, D.indexOf = sx, D.inRange = zk, D.invoke = Ak, D.isArguments = Ha, D.isArray = Xe, D.isArrayBuffer = zT, D.isArrayLike = Fn, D.isArrayLikeObject = en, D.isBoolean = jT, D.isBuffer = da, D.isDate = GT, D.isElement = qT, D.isEmpty = KT, D.isEqual = ZT, D.isEqualWith = XT, D.isError = cd, D.isFinite = JT, D.isFunction = Si, D.isInteger = Og, D.isLength = Eu, D.isMap = Eg, D.isMatch = QT, D.isMatchWith = ek, D.isNaN = tk, D.isNative = nk, D.isNil = ik, D.isNull = rk, D.isNumber = Dg, D.isObject = Kt, D.isObjectLike = Jt, D.isPlainObject = Bo, D.isRegExp = fd, D.isSafeInteger = ak, D.isSet = Sg, D.isString = Du, D.isSymbol = Jn, D.isTypedArray = Ms, D.isUndefined = sk, D.isWeakMap = ok, D.isWeakSet = lk, D.join = fx, D.kebabCase = Xk, D.last = vr, D.lastIndexOf = dx, D.lowerCase = Jk, D.lowerFirst = Qk, D.lt = uk, D.lte = ck, D.max = GA, D.maxBy = qA, D.mean = KA, D.meanBy = ZA, D.min = XA, D.minBy = JA, D.stubArray = yd, D.stubFalse = bd, D.stubObject = RA, D.stubString = FA, D.stubTrue = YA, D.multiply = QA, D.nth = hx, D.noConflict = AA, D.noop = _d, D.now = bu, D.pad = eA, D.padEnd = tA, D.padStart = nA, D.parseInt = rA, D.random = jk, D.reduce = vT, D.reduceRight = gT, D.repeat = iA, D.replace = aA, D.result = Lk, D.round = eM, D.runInContext = U, D.sample = yT, D.size = OT, D.snakeCase = sA, D.some = ET, D.sortedIndex = bx, D.sortedIndexBy = wx, D.sortedIndexOf = Ox, D.sortedLastIndex = Ex, D.sortedLastIndexBy = Dx, D.sortedLastIndexOf = Sx, D.startCase = lA, D.startsWith = uA, D.subtract = tM, D.sum = nM, D.sumBy = rM, D.template = cA, D.times = WA, D.toFinite = xi, D.toInteger = et, D.toLength = Tg, D.toLower = fA, D.toNumber = gr, D.toSafeInteger = fk, D.toString = kt, D.toUpper = dA, D.trim = hA, D.trimEnd = pA, D.trimStart = mA, D.truncate = vA, D.unescape = gA, D.uniqueId = VA, D.upperCase = _A, D.upperFirst = pd, D.each = hg, D.eachRight = pg, D.first = ug, gd(D, function() {
        var i = {};
        return Xr(D, function(o, c) {
          At.call(D.prototype, c) || (i[c] = o);
        }), i;
      }(), { chain: !1 }), D.VERSION = r, fr(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(i) {
        D[i].placeholder = D;
      }), fr(["drop", "take"], function(i, o) {
        ht.prototype[i] = function(c) {
          c = c === n ? 1 : un(et(c), 0);
          var p = this.__filtered__ && !o ? new ht(this) : this.clone();
          return p.__filtered__ ? p.__takeCount__ = bn(c, p.__takeCount__) : p.__views__.push({
            size: bn(c, Ae),
            type: i + (p.__dir__ < 0 ? "Right" : "")
          }), p;
        }, ht.prototype[i + "Right"] = function(c) {
          return this.reverse()[i](c).reverse();
        };
      }), fr(["filter", "map", "takeWhile"], function(i, o) {
        var c = o + 1, p = c == he || c == ve;
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
      }, ht.prototype.invokeMap = ot(function(i, o) {
        return typeof i == "function" ? new ht(this) : this.map(function(c) {
          return Ro(c, i, o);
        });
      }), ht.prototype.reject = function(i) {
        return this.filter(Ou(We(i)));
      }, ht.prototype.slice = function(i, o) {
        i = et(i);
        var c = this;
        return c.__filtered__ && (i > 0 || o < 0) ? new ht(c) : (i < 0 ? c = c.takeRight(-i) : i && (c = c.drop(i)), o !== n && (o = et(o), c = o < 0 ? c.dropRight(-o) : c.take(o - i)), c);
      }, ht.prototype.takeRightWhile = function(i) {
        return this.reverse().takeWhile(i).reverse();
      }, ht.prototype.toArray = function() {
        return this.take(Ae);
      }, Xr(ht.prototype, function(i, o) {
        var c = /^(?:filter|find|map|reject)|While$/.test(o), p = /^(?:head|last)$/.test(o), _ = D[p ? "take" + (o == "last" ? "Right" : "") : o], T = p || /^find/.test(o);
        _ && (D.prototype[o] = function() {
          var I = this.__wrapped__, L = p ? [1] : arguments, B = I instanceof ht, ee = L[0], te = B || Xe(I), ae = function(dt) {
            var pt = _.apply(D, aa([dt], L));
            return p && ye ? pt[0] : pt;
          };
          te && c && typeof ee == "function" && ee.length != 1 && (B = te = !1);
          var ye = this.__chain__, Me = !!this.__actions__.length, Ve = T && !ye, rt = B && !Me;
          if (!T && te) {
            I = rt ? I : new ht(this);
            var Be = i.apply(I, L);
            return Be.__actions__.push({ func: _u, args: [ae], thisArg: n }), new hr(Be, ye);
          }
          return Ve && rt ? i.apply(this, L) : (Be = this.thru(ae), Ve ? p ? Be.value()[0] : Be.value() : Be);
        });
      }), fr(["pop", "push", "shift", "sort", "splice", "unshift"], function(i) {
        var o = Hl[i], c = /^(?:push|sort|unshift)$/.test(i) ? "tap" : "thru", p = /^(?:pop|shift)$/.test(i);
        D.prototype[i] = function() {
          var _ = arguments;
          if (p && !this.__chain__) {
            var T = this.value();
            return o.apply(Xe(T) ? T : [], _);
          }
          return this[c](function(I) {
            return o.apply(Xe(I) ? I : [], _);
          });
        };
      }), Xr(ht.prototype, function(i, o) {
        var c = D[o];
        if (c) {
          var p = c.name + "";
          At.call(Ss, p) || (Ss[p] = []), Ss[p].push({ name: o, func: c });
        }
      }), Ss[fu(n, w).name] = [{
        name: "wrapper",
        func: n
      }], ht.prototype.clone = gD, ht.prototype.reverse = _D, ht.prototype.value = yD, D.prototype.at = qx, D.prototype.chain = Kx, D.prototype.commit = Zx, D.prototype.next = Xx, D.prototype.plant = Qx, D.prototype.reverse = eT, D.prototype.toJSON = D.prototype.valueOf = D.prototype.value = tT, D.prototype.first = D.prototype.head, Mo && (D.prototype[Mo] = Jx), D;
    }, Os = ZE();
    La ? ((La.exports = Os)._ = Os, vf._ = Os) : vn._ = Os;
  }).call(Jo);
})(Oc, Oc.exports);
var vw = Oc.exports;
//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var gw;
function be() {
  return gw.apply(null, arguments);
}
function mG(e) {
  gw = e;
}
function Br(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function es(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function wt(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function Wp(e) {
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
function qi(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function Pl(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function _w(e, t) {
  var n = [], r, a = e.length;
  for (r = 0; r < a; ++r)
    n.push(t(e[r], r));
  return n;
}
function Oa(e, t) {
  for (var n in t)
    wt(t, n) && (e[n] = t[n]);
  return wt(t, "toString") && (e.toString = t.toString), wt(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function mi(e, t, n, r) {
  return Vw(e, t, n, r, !0).utc();
}
function vG() {
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
function tt(e) {
  return e._pf == null && (e._pf = vG()), e._pf;
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
    var t = tt(e), n = Dh.call(t.parsedDateParts, function(a) {
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
  return e != null ? Oa(tt(t), e) : tt(t).userInvalidated = !0, t;
}
var Gy = be.momentProperties = [], Ld = !1;
function Vp(e, t) {
  var n, r, a, s = Gy.length;
  if (Hn(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), Hn(t._i) || (e._i = t._i), Hn(t._f) || (e._f = t._f), Hn(t._l) || (e._l = t._l), Hn(t._strict) || (e._strict = t._strict), Hn(t._tzm) || (e._tzm = t._tzm), Hn(t._isUTC) || (e._isUTC = t._isUTC), Hn(t._offset) || (e._offset = t._offset), Hn(t._pf) || (e._pf = tt(t)), Hn(t._locale) || (e._locale = t._locale), s > 0)
    for (n = 0; n < s; n++)
      r = Gy[n], a = t[r], Hn(a) || (e[r] = a);
  return e;
}
function Cl(e) {
  Vp(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), Ld === !1 && (Ld = !0, be.updateOffset(this), Ld = !1);
}
function Hr(e) {
  return e instanceof Cl || e != null && e._isAMomentObject != null;
}
function yw(e) {
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
            wt(arguments[0], l) && (a += l + ": " + arguments[0][l] + ", ");
          a = a.slice(0, -2);
        } else
          a = arguments[s];
        r.push(a);
      }
      yw(
        e + `
Arguments: ` + Array.prototype.slice.call(r).join("") + `
` + new Error().stack
      ), n = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var qy = {};
function bw(e, t) {
  be.deprecationHandler != null && be.deprecationHandler(e, t), qy[e] || (yw(t), qy[e] = !0);
}
be.suppressDeprecationWarnings = !1;
be.deprecationHandler = null;
function vi(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function gG(e) {
  var t, n;
  for (n in e)
    wt(e, n) && (t = e[n], vi(t) ? this[n] = t : this["_" + n] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function Sh(e, t) {
  var n = Oa({}, e), r;
  for (r in t)
    wt(t, r) && (es(e[r]) && es(t[r]) ? (n[r] = {}, Oa(n[r], e[r]), Oa(n[r], t[r])) : t[r] != null ? n[r] = t[r] : delete n[r]);
  for (r in e)
    wt(e, r) && !wt(t, r) && es(e[r]) && (n[r] = Oa({}, n[r]));
  return n;
}
function Bp(e) {
  e != null && this.set(e);
}
var xh;
Object.keys ? xh = Object.keys : xh = function(e) {
  var t, n = [];
  for (t in e)
    wt(e, t) && n.push(t);
  return n;
};
var _G = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function yG(e, t, n) {
  var r = this._calendar[e] || this._calendar.sameElse;
  return vi(r) ? r.call(t, n) : r;
}
function ci(e, t, n) {
  var r = "" + Math.abs(e), a = t - r.length, s = e >= 0;
  return (s ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, a)).toString().substr(1) + r;
}
var Hp = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Ru = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Rd = {}, Gs = {};
function Le(e, t, n, r) {
  var a = r;
  typeof r == "string" && (a = function() {
    return this[r]();
  }), e && (Gs[e] = a), t && (Gs[t[0]] = function() {
    return ci(a.apply(this, arguments), t[1], t[2]);
  }), n && (Gs[n] = function() {
    return this.localeData().ordinal(
      a.apply(this, arguments),
      e
    );
  });
}
function bG(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function wG(e) {
  var t = e.match(Hp), n, r;
  for (n = 0, r = t.length; n < r; n++)
    Gs[t[n]] ? t[n] = Gs[t[n]] : t[n] = bG(t[n]);
  return function(a) {
    var s = "", l;
    for (l = 0; l < r; l++)
      s += vi(t[l]) ? t[l].call(a, e) : t[l];
    return s;
  };
}
function Hu(e, t) {
  return e.isValid() ? (t = ww(t, e.localeData()), Rd[t] = Rd[t] || wG(t), Rd[t](e)) : e.localeData().invalidDate();
}
function ww(e, t) {
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
var OG = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function EG(e) {
  var t = this._longDateFormat[e], n = this._longDateFormat[e.toUpperCase()];
  return t || !n ? t : (this._longDateFormat[e] = n.match(Hp).map(function(r) {
    return r === "MMMM" || r === "MM" || r === "DD" || r === "dddd" ? r.slice(1) : r;
  }).join(""), this._longDateFormat[e]);
}
var DG = "Invalid date";
function SG() {
  return this._invalidDate;
}
var xG = "%d", TG = /\d{1,2}/;
function kG(e) {
  return this._ordinal.replace("%d", e);
}
var AG = {
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
function MG(e, t, n, r) {
  var a = this._relativeTime[n];
  return vi(a) ? a(e, t, n, r) : a.replace(/%d/i, e);
}
function $G(e, t) {
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
    wt(e, r) && (n = $r(r), n && (t[n] = e[r]));
  return t;
}
var Ow = {};
function Tn(e, t) {
  Ow[e] = t;
}
function PG(e) {
  var t = [], n;
  for (n in e)
    wt(e, n) && t.push({ unit: n, priority: Ow[n] });
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
    return n != null ? (Ew(this, e, n), be.updateOffset(this, t), this) : Ec(this, e);
  };
}
function Ec(e, t) {
  return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
}
function Ew(e, t, n) {
  e.isValid() && !isNaN(n) && (t === "FullYear" && Gc(e.year()) && e.month() === 1 && e.date() === 29 ? (n = ft(n), e._d["set" + (e._isUTC ? "UTC" : "") + t](
    n,
    e.month(),
    Qc(n, e.month())
  )) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n));
}
function CG(e) {
  return e = $r(e), vi(this[e]) ? this[e]() : this;
}
function IG(e, t) {
  if (typeof e == "object") {
    e = zp(e);
    var n = PG(e), r, a = n.length;
    for (r = 0; r < a; r++)
      this[n[r].unit](e[n[r].unit]);
  } else if (e = $r(e), vi(this[e]))
    return this[e](t);
  return this;
}
var Dw = /\d/, lr = /\d\d/, Sw = /\d{3}/, jp = /\d{4}/, qc = /[+-]?\d{6}/, Ht = /\d\d?/, xw = /\d\d\d\d?/, Tw = /\d\d\d\d\d\d?/, Kc = /\d{1,3}/, Gp = /\d{1,4}/, Zc = /[+-]?\d{1,6}/, xo = /\d+/, Xc = /[+-]?\d+/, NG = /Z|[+-]\d\d:?\d\d/gi, Jc = /Z|[+-]\d\d(?::?\d\d)?/gi, LG = /[+-]?\d+(\.\d{1,3})?/, Il = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, Dc;
Dc = {};
function De(e, t, n) {
  Dc[e] = vi(t) ? t : function(r, a) {
    return r && n ? n : t;
  };
}
function RG(e, t) {
  return wt(Dc, e) ? Dc[e](t._strict, t._locale) : new RegExp(FG(e));
}
function FG(e) {
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
function Pt(e, t) {
  var n, r = t, a;
  for (typeof e == "string" && (e = [e]), qi(t) && (r = function(s, l) {
    l[t] = ft(s);
  }), a = e.length, n = 0; n < a; n++)
    Th[e[n]] = r;
}
function Nl(e, t) {
  Pt(e, function(n, r, a, s) {
    a._w = a._w || {}, t(n, a._w, a, s);
  });
}
function YG(e, t, n) {
  t != null && wt(Th, e) && Th[e](t, n._a, n, e);
}
var Dn = 0, Li = 1, ti = 2, dn = 3, Ur = 4, Ri = 5, Xa = 6, WG = 7, UG = 8;
function VG(e, t) {
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
  var n = VG(t, 12);
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
De("M", Ht);
De("MM", Ht, lr);
De("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
De("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
Pt(["M", "MM"], function(e, t) {
  t[Li] = ft(e) - 1;
});
Pt(["MMM", "MMMM"], function(e, t, n, r) {
  var a = n._locale.monthsParse(e, r, n._strict);
  a != null ? t[Li] = a : tt(n).invalidMonth = e;
});
var BG = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), kw = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), Aw = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, HG = Il, zG = Il;
function jG(e, t) {
  return e ? Br(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Aw).test(t) ? "format" : "standalone"][e.month()] : Br(this._months) ? this._months : this._months.standalone;
}
function GG(e, t) {
  return e ? Br(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Aw.test(t) ? "format" : "standalone"][e.month()] : Br(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function qG(e, t, n) {
  var r, a, s, l = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r)
      s = mi([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(
        s,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[r] = this.months(s, "").toLocaleLowerCase();
  return n ? t === "MMM" ? (a = nn.call(this._shortMonthsParse, l), a !== -1 ? a : null) : (a = nn.call(this._longMonthsParse, l), a !== -1 ? a : null) : t === "MMM" ? (a = nn.call(this._shortMonthsParse, l), a !== -1 ? a : (a = nn.call(this._longMonthsParse, l), a !== -1 ? a : null)) : (a = nn.call(this._longMonthsParse, l), a !== -1 ? a : (a = nn.call(this._shortMonthsParse, l), a !== -1 ? a : null));
}
function KG(e, t, n) {
  var r, a, s;
  if (this._monthsParseExact)
    return qG.call(this, e, t, n);
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
function Mw(e, t) {
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
function $w(e) {
  return e != null ? (Mw(this, e), be.updateOffset(this, !0), this) : Ec(this, "Month");
}
function ZG() {
  return Qc(this.year(), this.month());
}
function XG(e) {
  return this._monthsParseExact ? (wt(this, "_monthsRegex") || Pw.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (wt(this, "_monthsShortRegex") || (this._monthsShortRegex = HG), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function JG(e) {
  return this._monthsParseExact ? (wt(this, "_monthsRegex") || Pw.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (wt(this, "_monthsRegex") || (this._monthsRegex = zG), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function Pw() {
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
  return e <= 9999 ? ci(e, 4) : "+" + e;
});
Le(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
Le(0, ["YYYY", 4], 0, "year");
Le(0, ["YYYYY", 5], 0, "year");
Le(0, ["YYYYYY", 6, !0], 0, "year");
xn("year", "y");
Tn("year", 1);
De("Y", Xc);
De("YY", Ht, lr);
De("YYYY", Gp, jp);
De("YYYYY", Zc, qc);
De("YYYYYY", Zc, qc);
Pt(["YYYYY", "YYYYYY"], Dn);
Pt("YYYY", function(e, t) {
  t[Dn] = e.length === 2 ? be.parseTwoDigitYear(e) : ft(e);
});
Pt("YY", function(e, t) {
  t[Dn] = be.parseTwoDigitYear(e);
});
Pt("Y", function(e, t) {
  t[Dn] = parseInt(e, 10);
});
function ul(e) {
  return Gc(e) ? 366 : 365;
}
be.parseTwoDigitYear = function(e) {
  return ft(e) + (ft(e) > 68 ? 1900 : 2e3);
};
var Cw = So("FullYear", !0);
function QG() {
  return Gc(this.year());
}
function e7(e, t, n, r, a, s, l) {
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
function Iw(e, t, n, r, a) {
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
De("w", Ht);
De("ww", Ht, lr);
De("W", Ht);
De("WW", Ht, lr);
Nl(
  ["w", "ww", "W", "WW"],
  function(e, t, n, r) {
    t[r.substr(0, 1)] = ft(e);
  }
);
function t7(e) {
  return El(e, this._week.dow, this._week.doy).week;
}
var n7 = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function r7() {
  return this._week.dow;
}
function i7() {
  return this._week.doy;
}
function a7(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function s7(e) {
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
De("d", Ht);
De("e", Ht);
De("E", Ht);
De("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
De("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
De("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
Nl(["dd", "ddd", "dddd"], function(e, t, n, r) {
  var a = n._locale.weekdaysParse(e, r, n._strict);
  a != null ? t.d = a : tt(n).invalidWeekday = e;
});
Nl(["d", "e", "E"], function(e, t, n, r) {
  t[r] = ft(e);
});
function o7(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function l7(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function qp(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var u7 = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), Nw = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), c7 = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), f7 = Il, d7 = Il, h7 = Il;
function p7(e, t) {
  var n = Br(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? qp(n, this._week.dow) : e ? n[e.day()] : n;
}
function m7(e) {
  return e === !0 ? qp(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function v7(e) {
  return e === !0 ? qp(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function g7(e, t, n) {
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
function _7(e, t, n) {
  var r, a, s;
  if (this._weekdaysParseExact)
    return g7.call(this, e, t, n);
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
function y7(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
  return e != null ? (e = o7(e, this.localeData()), this.add(e - t, "d")) : t;
}
function b7(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function w7(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = l7(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function O7(e) {
  return this._weekdaysParseExact ? (wt(this, "_weekdaysRegex") || Kp.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (wt(this, "_weekdaysRegex") || (this._weekdaysRegex = f7), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function E7(e) {
  return this._weekdaysParseExact ? (wt(this, "_weekdaysRegex") || Kp.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (wt(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = d7), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function D7(e) {
  return this._weekdaysParseExact ? (wt(this, "_weekdaysRegex") || Kp.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (wt(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = h7), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
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
function S7() {
  return this.hours() || 24;
}
Le("H", ["HH", 2], 0, "hour");
Le("h", ["hh", 2], 0, Zp);
Le("k", ["kk", 2], 0, S7);
Le("hmm", 0, 0, function() {
  return "" + Zp.apply(this) + ci(this.minutes(), 2);
});
Le("hmmss", 0, 0, function() {
  return "" + Zp.apply(this) + ci(this.minutes(), 2) + ci(this.seconds(), 2);
});
Le("Hmm", 0, 0, function() {
  return "" + this.hours() + ci(this.minutes(), 2);
});
Le("Hmmss", 0, 0, function() {
  return "" + this.hours() + ci(this.minutes(), 2) + ci(this.seconds(), 2);
});
function Lw(e, t) {
  Le(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
Lw("a", !0);
Lw("A", !1);
xn("hour", "h");
Tn("hour", 13);
function Rw(e, t) {
  return t._meridiemParse;
}
De("a", Rw);
De("A", Rw);
De("H", Ht);
De("h", Ht);
De("k", Ht);
De("HH", Ht, lr);
De("hh", Ht, lr);
De("kk", Ht, lr);
De("hmm", xw);
De("hmmss", Tw);
De("Hmm", xw);
De("Hmmss", Tw);
Pt(["H", "HH"], dn);
Pt(["k", "kk"], function(e, t, n) {
  var r = ft(e);
  t[dn] = r === 24 ? 0 : r;
});
Pt(["a", "A"], function(e, t, n) {
  n._isPm = n._locale.isPM(e), n._meridiem = e;
});
Pt(["h", "hh"], function(e, t, n) {
  t[dn] = ft(e), tt(n).bigHour = !0;
});
Pt("hmm", function(e, t, n) {
  var r = e.length - 2;
  t[dn] = ft(e.substr(0, r)), t[Ur] = ft(e.substr(r)), tt(n).bigHour = !0;
});
Pt("hmmss", function(e, t, n) {
  var r = e.length - 4, a = e.length - 2;
  t[dn] = ft(e.substr(0, r)), t[Ur] = ft(e.substr(r, 2)), t[Ri] = ft(e.substr(a)), tt(n).bigHour = !0;
});
Pt("Hmm", function(e, t, n) {
  var r = e.length - 2;
  t[dn] = ft(e.substr(0, r)), t[Ur] = ft(e.substr(r));
});
Pt("Hmmss", function(e, t, n) {
  var r = e.length - 4, a = e.length - 2;
  t[dn] = ft(e.substr(0, r)), t[Ur] = ft(e.substr(r, 2)), t[Ri] = ft(e.substr(a));
});
function x7(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var T7 = /[ap]\.?m?\.?/i, k7 = So("Hours", !0);
function A7(e, t, n) {
  return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM";
}
var Fw = {
  calendar: _G,
  longDateFormat: OG,
  invalidDate: DG,
  ordinal: xG,
  dayOfMonthOrdinalParse: TG,
  relativeTime: AG,
  months: BG,
  monthsShort: kw,
  week: n7,
  weekdays: u7,
  weekdaysMin: c7,
  weekdaysShort: Nw,
  meridiemParse: T7
}, Gt = {}, Qo = {}, Dl;
function M7(e, t) {
  var n, r = Math.min(e.length, t.length);
  for (n = 0; n < r; n += 1)
    if (e[n] !== t[n])
      return n;
  return r;
}
function Ky(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function $7(e) {
  for (var t = 0, n, r, a, s; t < e.length; ) {
    for (s = Ky(e[t]).split("-"), n = s.length, r = Ky(e[t + 1]), r = r ? r.split("-") : null; n > 0; ) {
      if (a = ef(s.slice(0, n).join("-")), a)
        return a;
      if (r && r.length >= n && M7(s, r) >= n - 1)
        break;
      n--;
    }
    t++;
  }
  return Dl;
}
function P7(e) {
  return e.match("^[^/\\\\]*$") != null;
}
function ef(e) {
  var t = null, n;
  if (Gt[e] === void 0 && typeof module < "u" && module && module.exports && P7(e))
    try {
      t = Dl._abbr, n = require, n("./locale/" + e), Sa(t);
    } catch {
      Gt[e] = null;
    }
  return Gt[e];
}
function Sa(e, t) {
  var n;
  return e && (Hn(t) ? n = Qi(e) : n = Xp(e, t), n ? Dl = n : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), Dl._abbr;
}
function Xp(e, t) {
  if (t !== null) {
    var n, r = Fw;
    if (t.abbr = e, Gt[e] != null)
      bw(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), r = Gt[e]._config;
    else if (t.parentLocale != null)
      if (Gt[t.parentLocale] != null)
        r = Gt[t.parentLocale]._config;
      else if (n = ef(t.parentLocale), n != null)
        r = n._config;
      else
        return Qo[t.parentLocale] || (Qo[t.parentLocale] = []), Qo[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return Gt[e] = new Bp(Sh(r, t)), Qo[e] && Qo[e].forEach(function(a) {
      Xp(a.name, a.config);
    }), Sa(e), Gt[e];
  } else
    return delete Gt[e], null;
}
function C7(e, t) {
  if (t != null) {
    var n, r, a = Fw;
    Gt[e] != null && Gt[e].parentLocale != null ? Gt[e].set(Sh(Gt[e]._config, t)) : (r = ef(e), r != null && (a = r._config), t = Sh(a, t), r == null && (t.abbr = e), n = new Bp(t), n.parentLocale = Gt[e], Gt[e] = n), Sa(e);
  } else
    Gt[e] != null && (Gt[e].parentLocale != null ? (Gt[e] = Gt[e].parentLocale, e === Sa() && Sa(e)) : Gt[e] != null && delete Gt[e]);
  return Gt[e];
}
function Qi(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return Dl;
  if (!Br(e)) {
    if (t = ef(e), t)
      return t;
    e = [e];
  }
  return $7(e);
}
function I7() {
  return xh(Gt);
}
function Jp(e) {
  var t, n = e._a;
  return n && tt(e).overflow === -2 && (t = n[Li] < 0 || n[Li] > 11 ? Li : n[ti] < 1 || n[ti] > Qc(n[Dn], n[Li]) ? ti : n[dn] < 0 || n[dn] > 24 || n[dn] === 24 && (n[Ur] !== 0 || n[Ri] !== 0 || n[Xa] !== 0) ? dn : n[Ur] < 0 || n[Ur] > 59 ? Ur : n[Ri] < 0 || n[Ri] > 59 ? Ri : n[Xa] < 0 || n[Xa] > 999 ? Xa : -1, tt(e)._overflowDayOfYear && (t < Dn || t > ti) && (t = ti), tt(e)._overflowWeeks && t === -1 && (t = WG), tt(e)._overflowWeekday && t === -1 && (t = UG), tt(e).overflow = t), e;
}
var N7 = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, L7 = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, R7 = /Z|[+-]\d\d(?::?\d\d)?/, Fu = [
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
], F7 = /^\/?Date\((-?\d+)/i, Y7 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, W7 = {
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
function Yw(e) {
  var t, n, r = e._i, a = N7.exec(r) || L7.exec(r), s, l, u, f, h = Fu.length, d = Fd.length;
  if (a) {
    for (tt(e).iso = !0, t = 0, n = h; t < n; t++)
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
      if (R7.exec(a[4]))
        f = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = l + (u || "") + (f || ""), em(e);
  } else
    e._isValid = !1;
}
function U7(e, t, n, r, a, s) {
  var l = [
    V7(e),
    kw.indexOf(t),
    parseInt(n, 10),
    parseInt(r, 10),
    parseInt(a, 10)
  ];
  return s && l.push(parseInt(s, 10)), l;
}
function V7(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function B7(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function H7(e, t, n) {
  if (e) {
    var r = Nw.indexOf(e), a = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (r !== a)
      return tt(n).weekdayMismatch = !0, n._isValid = !1, !1;
  }
  return !0;
}
function z7(e, t, n) {
  if (e)
    return W7[e];
  if (t)
    return 0;
  var r = parseInt(n, 10), a = r % 100, s = (r - a) / 100;
  return s * 60 + a;
}
function Ww(e) {
  var t = Y7.exec(B7(e._i)), n;
  if (t) {
    if (n = U7(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !H7(t[1], n, e))
      return;
    e._a = n, e._tzm = z7(t[8], t[9], t[10]), e._d = Ol.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), tt(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function j7(e) {
  var t = F7.exec(e._i);
  if (t !== null) {
    e._d = /* @__PURE__ */ new Date(+t[1]);
    return;
  }
  if (Yw(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (Ww(e), e._isValid === !1)
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
function G7(e) {
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
    for (a = G7(e), e._w && e._a[ti] == null && e._a[Li] == null && q7(e), e._dayOfYear != null && (l = Fs(e._a[Dn], a[Dn]), (e._dayOfYear > ul(l) || e._dayOfYear === 0) && (tt(e)._overflowDayOfYear = !0), n = Ol(l, 0, e._dayOfYear), e._a[Li] = n.getUTCMonth(), e._a[ti] = n.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = r[t] = a[t];
    for (; t < 7; t++)
      e._a[t] = r[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[dn] === 24 && e._a[Ur] === 0 && e._a[Ri] === 0 && e._a[Xa] === 0 && (e._nextDay = !0, e._a[dn] = 0), e._d = (e._useUTC ? Ol : e7).apply(
      null,
      r
    ), s = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[dn] = 24), e._w && typeof e._w.d < "u" && e._w.d !== s && (tt(e).weekdayMismatch = !0);
  }
}
function q7(e) {
  var t, n, r, a, s, l, u, f, h;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (s = 1, l = 4, n = Fs(
    t.GG,
    e._a[Dn],
    El(Bt(), 1, 4).year
  ), r = Fs(t.W, 1), a = Fs(t.E, 1), (a < 1 || a > 7) && (f = !0)) : (s = e._locale._week.dow, l = e._locale._week.doy, h = El(Bt(), s, l), n = Fs(t.gg, e._a[Dn], h.year), r = Fs(t.w, h.week), t.d != null ? (a = t.d, (a < 0 || a > 6) && (f = !0)) : t.e != null ? (a = t.e + s, (t.e < 0 || t.e > 6) && (f = !0)) : a = s), r < 1 || r > Yi(n, s, l) ? tt(e)._overflowWeeks = !0 : f != null ? tt(e)._overflowWeekday = !0 : (u = Iw(n, r, a, s, l), e._a[Dn] = u.year, e._dayOfYear = u.dayOfYear);
}
be.ISO_8601 = function() {
};
be.RFC_2822 = function() {
};
function em(e) {
  if (e._f === be.ISO_8601) {
    Yw(e);
    return;
  }
  if (e._f === be.RFC_2822) {
    Ww(e);
    return;
  }
  e._a = [], tt(e).empty = !0;
  var t = "" + e._i, n, r, a, s, l, u = t.length, f = 0, h, d;
  for (a = ww(e._f, e._locale).match(Hp) || [], d = a.length, n = 0; n < d; n++)
    s = a[n], r = (t.match(RG(s, e)) || [])[0], r && (l = t.substr(0, t.indexOf(r)), l.length > 0 && tt(e).unusedInput.push(l), t = t.slice(
      t.indexOf(r) + r.length
    ), f += r.length), Gs[s] ? (r ? tt(e).empty = !1 : tt(e).unusedTokens.push(s), YG(s, r, e)) : e._strict && !r && tt(e).unusedTokens.push(s);
  tt(e).charsLeftOver = u - f, t.length > 0 && tt(e).unusedInput.push(t), e._a[dn] <= 12 && tt(e).bigHour === !0 && e._a[dn] > 0 && (tt(e).bigHour = void 0), tt(e).parsedDateParts = e._a.slice(0), tt(e).meridiem = e._meridiem, e._a[dn] = K7(
    e._locale,
    e._a[dn],
    e._meridiem
  ), h = tt(e).era, h !== null && (e._a[Dn] = e._locale.erasConvertYear(h, e._a[Dn])), Qp(e), Jp(e);
}
function K7(e, t, n) {
  var r;
  return n == null ? t : e.meridiemHour != null ? e.meridiemHour(t, n) : (e.isPM != null && (r = e.isPM(n), r && t < 12 && (t += 12), !r && t === 12 && (t = 0)), t);
}
function Z7(e) {
  var t, n, r, a, s, l, u = !1, f = e._f.length;
  if (f === 0) {
    tt(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (a = 0; a < f; a++)
    s = 0, l = !1, t = Vp({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[a], em(t), Up(t) && (l = !0), s += tt(t).charsLeftOver, s += tt(t).unusedTokens.length * 10, tt(t).score = s, u ? s < r && (r = s, n = t) : (r == null || s < r || l) && (r = s, n = t, l && (u = !0));
  Oa(e, n || t);
}
function X7(e) {
  if (!e._d) {
    var t = zp(e._i), n = t.day === void 0 ? t.date : t.day;
    e._a = _w(
      [t.year, t.month, n, t.hour, t.minute, t.second, t.millisecond],
      function(r) {
        return r && parseInt(r, 10);
      }
    ), Qp(e);
  }
}
function J7(e) {
  var t = new Cl(Jp(Uw(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function Uw(e) {
  var t = e._i, n = e._f;
  return e._locale = e._locale || Qi(e._l), t === null || n === void 0 && t === "" ? jc({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), Hr(t) ? new Cl(Jp(t)) : (Pl(t) ? e._d = t : Br(n) ? Z7(e) : n ? em(e) : Q7(e), Up(e) || (e._d = null), e));
}
function Q7(e) {
  var t = e._i;
  Hn(t) ? e._d = new Date(be.now()) : Pl(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? j7(e) : Br(t) ? (e._a = _w(t.slice(0), function(n) {
    return parseInt(n, 10);
  }), Qp(e)) : es(t) ? X7(e) : qi(t) ? e._d = new Date(t) : be.createFromInputFallback(e);
}
function Vw(e, t, n, r, a) {
  var s = {};
  return (t === !0 || t === !1) && (r = t, t = void 0), (n === !0 || n === !1) && (r = n, n = void 0), (es(e) && Wp(e) || Br(e) && e.length === 0) && (e = void 0), s._isAMomentObject = !0, s._useUTC = s._isUTC = a, s._l = n, s._i = e, s._f = t, s._strict = r, J7(s);
}
function Bt(e, t, n, r) {
  return Vw(e, t, n, r, !1);
}
var eq = Mr(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = Bt.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : jc();
  }
), tq = Mr(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = Bt.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : jc();
  }
);
function Bw(e, t) {
  var n, r;
  if (t.length === 1 && Br(t[0]) && (t = t[0]), !t.length)
    return Bt();
  for (n = t[0], r = 1; r < t.length; ++r)
    (!t[r].isValid() || t[r][e](n)) && (n = t[r]);
  return n;
}
function nq() {
  var e = [].slice.call(arguments, 0);
  return Bw("isBefore", e);
}
function rq() {
  var e = [].slice.call(arguments, 0);
  return Bw("isAfter", e);
}
var iq = function() {
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
function aq(e) {
  var t, n = !1, r, a = el.length;
  for (t in e)
    if (wt(e, t) && !(nn.call(el, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (r = 0; r < a; ++r)
    if (e[el[r]]) {
      if (n)
        return !1;
      parseFloat(e[el[r]]) !== ft(e[el[r]]) && (n = !0);
    }
  return !0;
}
function sq() {
  return this._isValid;
}
function oq() {
  return Kr(NaN);
}
function tf(e) {
  var t = zp(e), n = t.year || 0, r = t.quarter || 0, a = t.month || 0, s = t.week || t.isoWeek || 0, l = t.day || 0, u = t.hour || 0, f = t.minute || 0, h = t.second || 0, d = t.millisecond || 0;
  this._isValid = aq(t), this._milliseconds = +d + h * 1e3 + // 1000
  f * 6e4 + // 1000 * 60
  u * 1e3 * 60 * 60, this._days = +l + s * 7, this._months = +a + r * 3 + n * 12, this._data = {}, this._locale = Qi(), this._bubble();
}
function zu(e) {
  return e instanceof tf;
}
function kh(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function lq(e, t, n) {
  var r = Math.min(e.length, t.length), a = Math.abs(e.length - t.length), s = 0, l;
  for (l = 0; l < r; l++)
    (n && e[l] !== t[l] || !n && ft(e[l]) !== ft(t[l])) && s++;
  return s + a;
}
function Hw(e, t) {
  Le(e, 0, 0, function() {
    var n = this.utcOffset(), r = "+";
    return n < 0 && (n = -n, r = "-"), r + ci(~~(n / 60), 2) + t + ci(~~n % 60, 2);
  });
}
Hw("Z", ":");
Hw("ZZ", "");
De("Z", Jc);
De("ZZ", Jc);
Pt(["Z", "ZZ"], function(e, t, n) {
  n._useUTC = !0, n._tzm = tm(Jc, e);
});
var uq = /([\+\-]|\d\d)/gi;
function tm(e, t) {
  var n = (t || "").match(e), r, a, s;
  return n === null ? null : (r = n[n.length - 1] || [], a = (r + "").match(uq) || ["-", 0, 0], s = +(a[1] * 60) + ft(a[2]), s === 0 ? 0 : a[0] === "+" ? s : -s);
}
function nm(e, t) {
  var n, r;
  return t._isUTC ? (n = t.clone(), r = (Hr(e) || Pl(e) ? e.valueOf() : Bt(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + r), be.updateOffset(n, !1), n) : Bt(e).local();
}
function Ah(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
be.updateOffset = function() {
};
function cq(e, t, n) {
  var r = this._offset || 0, a;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = tm(Jc, e), e === null)
        return this;
    } else
      Math.abs(e) < 16 && !n && (e = e * 60);
    return !this._isUTC && t && (a = Ah(this)), this._offset = e, this._isUTC = !0, a != null && this.add(a, "m"), r !== e && (!t || this._changeInProgress ? Gw(
      this,
      Kr(e - r, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, be.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? r : Ah(this);
}
function fq(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function dq(e) {
  return this.utcOffset(0, e);
}
function hq(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Ah(this), "m")), this;
}
function pq() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = tm(NG, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function mq(e) {
  return this.isValid() ? (e = e ? Bt(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function vq() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function gq() {
  if (!Hn(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return Vp(e, this), e = Uw(e), e._a ? (t = e._isUTC ? mi(e._a) : Bt(e._a), this._isDSTShifted = this.isValid() && lq(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function _q() {
  return this.isValid() ? !this._isUTC : !1;
}
function yq() {
  return this.isValid() ? this._isUTC : !1;
}
function zw() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var bq = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, wq = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function Kr(e, t) {
  var n = e, r = null, a, s, l;
  return zu(e) ? n = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : qi(e) || !isNaN(+e) ? (n = {}, t ? n[t] = +e : n.milliseconds = +e) : (r = bq.exec(e)) ? (a = r[1] === "-" ? -1 : 1, n = {
    y: 0,
    d: ft(r[ti]) * a,
    h: ft(r[dn]) * a,
    m: ft(r[Ur]) * a,
    s: ft(r[Ri]) * a,
    ms: ft(kh(r[Xa] * 1e3)) * a
    // the millisecond decimal point is included in the match
  }) : (r = wq.exec(e)) ? (a = r[1] === "-" ? -1 : 1, n = {
    y: za(r[2], a),
    M: za(r[3], a),
    w: za(r[4], a),
    d: za(r[5], a),
    h: za(r[6], a),
    m: za(r[7], a),
    s: za(r[8], a)
  }) : n == null ? n = {} : typeof n == "object" && ("from" in n || "to" in n) && (l = Oq(
    Bt(n.from),
    Bt(n.to)
  ), n = {}, n.ms = l.milliseconds, n.M = l.months), s = new tf(n), zu(e) && wt(e, "_locale") && (s._locale = e._locale), zu(e) && wt(e, "_isValid") && (s._isValid = e._isValid), s;
}
Kr.fn = tf.prototype;
Kr.invalid = oq;
function za(e, t) {
  var n = e && parseFloat(e.replace(",", "."));
  return (isNaN(n) ? 0 : n) * t;
}
function Zy(e, t) {
  var n = {};
  return n.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n;
}
function Oq(e, t) {
  var n;
  return e.isValid() && t.isValid() ? (t = nm(t, e), e.isBefore(t) ? n = Zy(e, t) : (n = Zy(t, e), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : { milliseconds: 0, months: 0 };
}
function jw(e, t) {
  return function(n, r) {
    var a, s;
    return r !== null && !isNaN(+r) && (bw(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), s = n, n = r, r = s), a = Kr(n, r), Gw(this, a, e), this;
  };
}
function Gw(e, t, n, r) {
  var a = t._milliseconds, s = kh(t._days), l = kh(t._months);
  e.isValid() && (r = r ?? !0, l && Mw(e, Ec(e, "Month") + l * n), s && Ew(e, "Date", Ec(e, "Date") + s * n), a && e._d.setTime(e._d.valueOf() + a * n), r && be.updateOffset(e, s || l));
}
var Eq = jw(1, "add"), Dq = jw(-1, "subtract");
function qw(e) {
  return typeof e == "string" || e instanceof String;
}
function Sq(e) {
  return Hr(e) || Pl(e) || qw(e) || qi(e) || Tq(e) || xq(e) || e === null || e === void 0;
}
function xq(e) {
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
    s = r[a], n = n || wt(e, s);
  return t && n;
}
function Tq(e) {
  var t = Br(e), n = !1;
  return t && (n = e.filter(function(r) {
    return !qi(r) && qw(e);
  }).length === 0), t && n;
}
function kq(e) {
  var t = es(e) && !Wp(e), n = !1, r = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], a, s;
  for (a = 0; a < r.length; a += 1)
    s = r[a], n = n || wt(e, s);
  return t && n;
}
function Aq(e, t) {
  var n = e.diff(t, "days", !0);
  return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse";
}
function Mq(e, t) {
  arguments.length === 1 && (arguments[0] ? Sq(arguments[0]) ? (e = arguments[0], t = void 0) : kq(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var n = e || Bt(), r = nm(n, this).startOf("day"), a = be.calendarFormat(this, r) || "sameElse", s = t && (vi(t[a]) ? t[a].call(this, n) : t[a]);
  return this.format(
    s || this.localeData().calendar(a, this, Bt(n))
  );
}
function $q() {
  return new Cl(this);
}
function Pq(e, t) {
  var n = Hr(e) ? e : Bt(e);
  return this.isValid() && n.isValid() ? (t = $r(t) || "millisecond", t === "millisecond" ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function Cq(e, t) {
  var n = Hr(e) ? e : Bt(e);
  return this.isValid() && n.isValid() ? (t = $r(t) || "millisecond", t === "millisecond" ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf()) : !1;
}
function Iq(e, t, n, r) {
  var a = Hr(e) ? e : Bt(e), s = Hr(t) ? t : Bt(t);
  return this.isValid() && a.isValid() && s.isValid() ? (r = r || "()", (r[0] === "(" ? this.isAfter(a, n) : !this.isBefore(a, n)) && (r[1] === ")" ? this.isBefore(s, n) : !this.isAfter(s, n))) : !1;
}
function Nq(e, t) {
  var n = Hr(e) ? e : Bt(e), r;
  return this.isValid() && n.isValid() ? (t = $r(t) || "millisecond", t === "millisecond" ? this.valueOf() === n.valueOf() : (r = n.valueOf(), this.clone().startOf(t).valueOf() <= r && r <= this.clone().endOf(t).valueOf())) : !1;
}
function Lq(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function Rq(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function Fq(e, t, n) {
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
function Yq() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function Wq(e) {
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
function Uq() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", n, r, a, s;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), n = "[" + e + '("]', r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", a = "-MM-DD[T]HH:mm:ss.SSS", s = t + '[")]', this.format(n + r + a + s);
}
function Vq(e) {
  e || (e = this.isUtc() ? be.defaultFormatUtc : be.defaultFormat);
  var t = Hu(this, e);
  return this.localeData().postformat(t);
}
function Bq(e, t) {
  return this.isValid() && (Hr(e) && e.isValid() || Bt(e).isValid()) ? Kr({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function Hq(e) {
  return this.from(Bt(), e);
}
function zq(e, t) {
  return this.isValid() && (Hr(e) && e.isValid() || Bt(e).isValid()) ? Kr({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function jq(e) {
  return this.to(Bt(), e);
}
function Kw(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = Qi(e), t != null && (this._locale = t), this);
}
var Zw = Mr(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function Xw() {
  return this._locale;
}
var xc = 1e3, qs = 60 * xc, Tc = 60 * qs, Jw = (365 * 400 + 97) * 24 * Tc;
function Ks(e, t) {
  return (e % t + t) % t;
}
function Qw(e, t, n) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, n) - Jw : new Date(e, t, n).valueOf();
}
function eO(e, t, n) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, n) - Jw : Date.UTC(e, t, n);
}
function Gq(e) {
  var t, n;
  if (e = $r(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (n = this._isUTC ? eO : Qw, e) {
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
function qq(e) {
  var t, n;
  if (e = $r(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (n = this._isUTC ? eO : Qw, e) {
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
function Kq() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function Zq() {
  return Math.floor(this.valueOf() / 1e3);
}
function Xq() {
  return new Date(this.valueOf());
}
function Jq() {
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
function Qq() {
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
function eK() {
  return this.isValid() ? this.toISOString() : null;
}
function tK() {
  return Up(this);
}
function nK() {
  return Oa({}, tt(this));
}
function rK() {
  return tt(this).overflow;
}
function iK() {
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
De("N", rm);
De("NN", rm);
De("NNN", rm);
De("NNNN", mK);
De("NNNNN", vK);
Pt(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, n, r) {
    var a = n._locale.erasParse(e, r, n._strict);
    a ? tt(n).era = a : tt(n).invalidEra = e;
  }
);
De("y", xo);
De("yy", xo);
De("yyy", xo);
De("yyyy", xo);
De("yo", gK);
Pt(["y", "yy", "yyy", "yyyy"], Dn);
Pt(["yo"], function(e, t, n, r) {
  var a;
  n._locale._eraYearOrdinalRegex && (a = e.match(n._locale._eraYearOrdinalRegex)), n._locale.eraYearOrdinalParse ? t[Dn] = n._locale.eraYearOrdinalParse(e, a) : t[Dn] = parseInt(e, 10);
});
function aK(e, t) {
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
function sK(e, t, n) {
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
function oK(e, t) {
  var n = e.since <= e.until ? 1 : -1;
  return t === void 0 ? be(e.since).year() : be(e.since).year() + (t - e.offset) * n;
}
function lK() {
  var e, t, n, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
      return r[e].name;
  return "";
}
function uK() {
  var e, t, n, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
      return r[e].narrow;
  return "";
}
function cK() {
  var e, t, n, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
      return r[e].abbr;
  return "";
}
function fK() {
  var e, t, n, r, a = this.localeData().eras();
  for (e = 0, t = a.length; e < t; ++e)
    if (n = a[e].since <= a[e].until ? 1 : -1, r = this.clone().startOf("day").valueOf(), a[e].since <= r && r <= a[e].until || a[e].until <= r && r <= a[e].since)
      return (this.year() - be(a[e].since).year()) * n + a[e].offset;
  return this.year();
}
function dK(e) {
  return wt(this, "_erasNameRegex") || im.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function hK(e) {
  return wt(this, "_erasAbbrRegex") || im.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function pK(e) {
  return wt(this, "_erasNarrowRegex") || im.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function rm(e, t) {
  return t.erasAbbrRegex(e);
}
function mK(e, t) {
  return t.erasNameRegex(e);
}
function vK(e, t) {
  return t.erasNarrowRegex(e);
}
function gK(e, t) {
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
De("G", Xc);
De("g", Xc);
De("GG", Ht, lr);
De("gg", Ht, lr);
De("GGGG", Gp, jp);
De("gggg", Gp, jp);
De("GGGGG", Zc, qc);
De("ggggg", Zc, qc);
Nl(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, n, r) {
    t[r.substr(0, 2)] = ft(e);
  }
);
Nl(["gg", "GG"], function(e, t, n, r) {
  t[r] = be.parseTwoDigitYear(e);
});
function _K(e) {
  return tO.call(
    this,
    e,
    this.week(),
    this.weekday(),
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function yK(e) {
  return tO.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function bK() {
  return Yi(this.year(), 1, 4);
}
function wK() {
  return Yi(this.isoWeekYear(), 1, 4);
}
function OK() {
  var e = this.localeData()._week;
  return Yi(this.year(), e.dow, e.doy);
}
function EK() {
  var e = this.localeData()._week;
  return Yi(this.weekYear(), e.dow, e.doy);
}
function tO(e, t, n, r, a) {
  var s;
  return e == null ? El(this, r, a).year : (s = Yi(e, r, a), t > s && (t = s), DK.call(this, e, t, n, r, a));
}
function DK(e, t, n, r, a) {
  var s = Iw(e, t, n, r, a), l = Ol(s.year, 0, s.dayOfYear);
  return this.year(l.getUTCFullYear()), this.month(l.getUTCMonth()), this.date(l.getUTCDate()), this;
}
Le("Q", 0, "Qo", "quarter");
xn("quarter", "Q");
Tn("quarter", 7);
De("Q", Dw);
Pt("Q", function(e, t) {
  t[Li] = (ft(e) - 1) * 3;
});
function SK(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
Le("D", ["DD", 2], "Do", "date");
xn("date", "D");
Tn("date", 9);
De("D", Ht);
De("DD", Ht, lr);
De("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
Pt(["D", "DD"], ti);
Pt("Do", function(e, t) {
  t[ti] = ft(e.match(Ht)[0]);
});
var nO = So("Date", !0);
Le("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
xn("dayOfYear", "DDD");
Tn("dayOfYear", 4);
De("DDD", Kc);
De("DDDD", Sw);
Pt(["DDD", "DDDD"], function(e, t, n) {
  n._dayOfYear = ft(e);
});
function xK(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
Le("m", ["mm", 2], 0, "minute");
xn("minute", "m");
Tn("minute", 14);
De("m", Ht);
De("mm", Ht, lr);
Pt(["m", "mm"], Ur);
var TK = So("Minutes", !1);
Le("s", ["ss", 2], 0, "second");
xn("second", "s");
Tn("second", 15);
De("s", Ht);
De("ss", Ht, lr);
Pt(["s", "ss"], Ri);
var kK = So("Seconds", !1);
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
De("S", Kc, Dw);
De("SS", Kc, lr);
De("SSS", Kc, Sw);
var Ea, rO;
for (Ea = "SSSS"; Ea.length <= 9; Ea += "S")
  De(Ea, xo);
function AK(e, t) {
  t[Xa] = ft(("0." + e) * 1e3);
}
for (Ea = "S"; Ea.length <= 9; Ea += "S")
  Pt(Ea, AK);
rO = So("Milliseconds", !1);
Le("z", 0, 0, "zoneAbbr");
Le("zz", 0, 0, "zoneName");
function MK() {
  return this._isUTC ? "UTC" : "";
}
function $K() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var de = Cl.prototype;
de.add = Eq;
de.calendar = Mq;
de.clone = $q;
de.diff = Fq;
de.endOf = qq;
de.format = Vq;
de.from = Bq;
de.fromNow = Hq;
de.to = zq;
de.toNow = jq;
de.get = CG;
de.invalidAt = rK;
de.isAfter = Pq;
de.isBefore = Cq;
de.isBetween = Iq;
de.isSame = Nq;
de.isSameOrAfter = Lq;
de.isSameOrBefore = Rq;
de.isValid = tK;
de.lang = Zw;
de.locale = Kw;
de.localeData = Xw;
de.max = tq;
de.min = eq;
de.parsingFlags = nK;
de.set = IG;
de.startOf = Gq;
de.subtract = Dq;
de.toArray = Jq;
de.toObject = Qq;
de.toDate = Xq;
de.toISOString = Wq;
de.inspect = Uq;
typeof Symbol < "u" && Symbol.for != null && (de[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
de.toJSON = eK;
de.toString = Yq;
de.unix = Zq;
de.valueOf = Kq;
de.creationData = iK;
de.eraName = lK;
de.eraNarrow = uK;
de.eraAbbr = cK;
de.eraYear = fK;
de.year = Cw;
de.isLeapYear = QG;
de.weekYear = _K;
de.isoWeekYear = yK;
de.quarter = de.quarters = SK;
de.month = $w;
de.daysInMonth = ZG;
de.week = de.weeks = a7;
de.isoWeek = de.isoWeeks = s7;
de.weeksInYear = OK;
de.weeksInWeekYear = EK;
de.isoWeeksInYear = bK;
de.isoWeeksInISOWeekYear = wK;
de.date = nO;
de.day = de.days = y7;
de.weekday = b7;
de.isoWeekday = w7;
de.dayOfYear = xK;
de.hour = de.hours = k7;
de.minute = de.minutes = TK;
de.second = de.seconds = kK;
de.millisecond = de.milliseconds = rO;
de.utcOffset = cq;
de.utc = dq;
de.local = hq;
de.parseZone = pq;
de.hasAlignedHourOffset = mq;
de.isDST = vq;
de.isLocal = _q;
de.isUtcOffset = yq;
de.isUtc = zw;
de.isUTC = zw;
de.zoneAbbr = MK;
de.zoneName = $K;
de.dates = Mr(
  "dates accessor is deprecated. Use date instead.",
  nO
);
de.months = Mr(
  "months accessor is deprecated. Use month instead",
  $w
);
de.years = Mr(
  "years accessor is deprecated. Use year instead",
  Cw
);
de.zone = Mr(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  fq
);
de.isDSTShifted = Mr(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  gq
);
function PK(e) {
  return Bt(e * 1e3);
}
function CK() {
  return Bt.apply(null, arguments).parseZone();
}
function iO(e) {
  return e;
}
var Ot = Bp.prototype;
Ot.calendar = yG;
Ot.longDateFormat = EG;
Ot.invalidDate = SG;
Ot.ordinal = kG;
Ot.preparse = iO;
Ot.postformat = iO;
Ot.relativeTime = MG;
Ot.pastFuture = $G;
Ot.set = gG;
Ot.eras = aK;
Ot.erasParse = sK;
Ot.erasConvertYear = oK;
Ot.erasAbbrRegex = hK;
Ot.erasNameRegex = dK;
Ot.erasNarrowRegex = pK;
Ot.months = jG;
Ot.monthsShort = GG;
Ot.monthsParse = KG;
Ot.monthsRegex = JG;
Ot.monthsShortRegex = XG;
Ot.week = t7;
Ot.firstDayOfYear = i7;
Ot.firstDayOfWeek = r7;
Ot.weekdays = p7;
Ot.weekdaysMin = v7;
Ot.weekdaysShort = m7;
Ot.weekdaysParse = _7;
Ot.weekdaysRegex = O7;
Ot.weekdaysShortRegex = E7;
Ot.weekdaysMinRegex = D7;
Ot.isPM = x7;
Ot.meridiem = A7;
function kc(e, t, n, r) {
  var a = Qi(), s = mi().set(r, t);
  return a[n](s, e);
}
function aO(e, t, n) {
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
function IK(e, t) {
  return aO(e, t, "months");
}
function NK(e, t) {
  return aO(e, t, "monthsShort");
}
function LK(e, t, n) {
  return am(e, t, n, "weekdays");
}
function RK(e, t, n) {
  return am(e, t, n, "weekdaysShort");
}
function FK(e, t, n) {
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
function YK() {
  var e = this._data;
  return this._milliseconds = Mi(this._milliseconds), this._days = Mi(this._days), this._months = Mi(this._months), e.milliseconds = Mi(e.milliseconds), e.seconds = Mi(e.seconds), e.minutes = Mi(e.minutes), e.hours = Mi(e.hours), e.months = Mi(e.months), e.years = Mi(e.years), this;
}
function sO(e, t, n, r) {
  var a = Kr(t, n);
  return e._milliseconds += r * a._milliseconds, e._days += r * a._days, e._months += r * a._months, e._bubble();
}
function WK(e, t) {
  return sO(this, e, t, 1);
}
function UK(e, t) {
  return sO(this, e, t, -1);
}
function Xy(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function VK() {
  var e = this._milliseconds, t = this._days, n = this._months, r = this._data, a, s, l, u, f;
  return e >= 0 && t >= 0 && n >= 0 || e <= 0 && t <= 0 && n <= 0 || (e += Xy(Mh(n) + t) * 864e5, t = 0, n = 0), r.milliseconds = e % 1e3, a = br(e / 1e3), r.seconds = a % 60, s = br(a / 60), r.minutes = s % 60, l = br(s / 60), r.hours = l % 24, t += br(l / 24), f = br(oO(t)), n += f, t -= Xy(Mh(f)), u = br(n / 12), n %= 12, r.days = t, r.months = n, r.years = u, this;
}
function oO(e) {
  return e * 4800 / 146097;
}
function Mh(e) {
  return e * 146097 / 4800;
}
function BK(e) {
  if (!this.isValid())
    return NaN;
  var t, n, r = this._milliseconds;
  if (e = $r(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + r / 864e5, n = this._months + oO(t), e) {
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
function HK() {
  return this.isValid() ? this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + ft(this._months / 12) * 31536e6 : NaN;
}
function ea(e) {
  return function() {
    return this.as(e);
  };
}
var zK = ea("ms"), jK = ea("s"), GK = ea("m"), qK = ea("h"), KK = ea("d"), ZK = ea("w"), XK = ea("M"), JK = ea("Q"), QK = ea("y");
function eZ() {
  return Kr(this);
}
function tZ(e) {
  return e = $r(e), this.isValid() ? this[e + "s"]() : NaN;
}
function ps(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var nZ = ps("milliseconds"), rZ = ps("seconds"), iZ = ps("minutes"), aZ = ps("hours"), sZ = ps("days"), oZ = ps("months"), lZ = ps("years");
function uZ() {
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
function cZ(e, t, n, r, a) {
  return a.relativeTime(t || 1, !!n, e, r);
}
function fZ(e, t, n, r) {
  var a = Kr(e).abs(), s = $i(a.as("s")), l = $i(a.as("m")), u = $i(a.as("h")), f = $i(a.as("d")), h = $i(a.as("M")), d = $i(a.as("w")), m = $i(a.as("y")), v = s <= n.ss && ["s", s] || s < n.s && ["ss", s] || l <= 1 && ["m"] || l < n.m && ["mm", l] || u <= 1 && ["h"] || u < n.h && ["hh", u] || f <= 1 && ["d"] || f < n.d && ["dd", f];
  return n.w != null && (v = v || d <= 1 && ["w"] || d < n.w && ["ww", d]), v = v || h <= 1 && ["M"] || h < n.M && ["MM", h] || m <= 1 && ["y"] || ["yy", m], v[2] = t, v[3] = +e > 0, v[4] = r, cZ.apply(null, v);
}
function dZ(e) {
  return e === void 0 ? $i : typeof e == "function" ? ($i = e, !0) : !1;
}
function hZ(e, t) {
  return Us[e] === void 0 ? !1 : t === void 0 ? Us[e] : (Us[e] = t, e === "s" && (Us.ss = t - 1), !0);
}
function pZ(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var n = !1, r = Us, a, s;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (n = e), typeof t == "object" && (r = Object.assign({}, Us, t), t.s != null && t.ss == null && (r.ss = t.s - 1)), a = this.localeData(), s = fZ(this, !n, r, a), n && (s = a.pastFuture(+this, s)), a.postformat(s);
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
var gt = tf.prototype;
gt.isValid = sq;
gt.abs = YK;
gt.add = WK;
gt.subtract = UK;
gt.as = BK;
gt.asMilliseconds = zK;
gt.asSeconds = jK;
gt.asMinutes = GK;
gt.asHours = qK;
gt.asDays = KK;
gt.asWeeks = ZK;
gt.asMonths = XK;
gt.asQuarters = JK;
gt.asYears = QK;
gt.valueOf = HK;
gt._bubble = VK;
gt.clone = eZ;
gt.get = tZ;
gt.milliseconds = nZ;
gt.seconds = rZ;
gt.minutes = iZ;
gt.hours = aZ;
gt.days = sZ;
gt.weeks = uZ;
gt.months = oZ;
gt.years = lZ;
gt.humanize = pZ;
gt.toISOString = rf;
gt.toString = rf;
gt.toJSON = rf;
gt.locale = Kw;
gt.localeData = Xw;
gt.toIsoString = Mr(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  rf
);
gt.lang = Zw;
Le("X", 0, 0, "unix");
Le("x", 0, 0, "valueOf");
De("x", Xc);
De("X", LG);
Pt("X", function(e, t, n) {
  n._d = new Date(parseFloat(e) * 1e3);
});
Pt("x", function(e, t, n) {
  n._d = new Date(ft(e));
});
//! moment.js
be.version = "2.29.4";
mG(Bt);
be.fn = de;
be.min = nq;
be.max = rq;
be.now = iq;
be.utc = mi;
be.unix = PK;
be.months = IK;
be.isDate = Pl;
be.locale = Sa;
be.invalid = jc;
be.duration = Kr;
be.isMoment = Hr;
be.weekdays = LK;
be.parseZone = CK;
be.localeData = Qi;
be.isDuration = zu;
be.monthsShort = NK;
be.weekdaysMin = FK;
be.defineLocale = Xp;
be.updateLocale = C7;
be.locales = I7;
be.weekdaysShort = RK;
be.normalizeUnits = $r;
be.relativeTimeRounding = dZ;
be.relativeTimeThreshold = hZ;
be.calendarFormat = Aq;
be.prototype = de;
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
const mZ = { class: "flex flex-col gap-2" }, vZ = { class: "flex items-center gap-1" }, gZ = {
  key: 0,
  for: "due",
  class: "p3-b text-true-blue-3 w-fit flex cursor-pointer items-center justify-center gap-2 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50"
}, _Z = ["value"], yZ = /* @__PURE__ */ Re({
  __name: "DuePicker",
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, { t: r } = oi.global, a = yt("eventData"), s = yt("initialData"), l = Q(!1), u = Q(
      n.modelValue ? new Date(n.modelValue).toISOString() : ""
    ), f = (b) => {
      u.value = b.toISOString();
    }, h = Q(!1);
    Ue(h, (b) => {
      b || t("update:modelValue", vw.cloneDeep(u.value));
    });
    const d = Q(null);
    mw(d, () => h.value = !1);
    function m(b) {
      let [O, S] = b.split(" "), w = S.split(":")[0];
      w = w.padStart(2, "0");
      let x = `${O} ${w}:00`, A = `${w}:59`;
      return `${x}-${A}`;
    }
    const v = Q(), g = () => {
      En(() => {
        if (!v.value)
          return;
        v.value.getBoundingClientRect().right >= window.innerWidth ? v.value.classList.add("list-left") : v.value.classList.add("list-right");
      });
    };
    return Ue(
      () => n.modelValue,
      (b) => {
        b && (l.value = !0);
      },
      { immediate: !0 }
    ), Ue(l, (b) => {
      b ? En(() => {
        h.value = !0, g();
      }) : t("update:modelValue", null);
    }), Pa(() => {
      t("update:modelValue", null);
    }), (b, O) => (R(), G("div", mZ, [
      q("div", vZ, [
        rr(q("input", {
          type: "checkbox",
          "onUpdate:modelValue": O[0] || (O[0] = (S) => an(l) ? l.value = S : null),
          id: "due",
          class: "hidden"
        }, null, 512), [
          [w0, y(l)]
        ]),
        y(l) ? (R(), G("div", {
          key: 1,
          class: "relative",
          ref_key: "target",
          ref: d
        }, [
          q("div", {
            class: Qe(["p3-b text-true-blue-3 relative flex cursor-pointer items-center justify-start gap-4 rounded shadow-01 bg-light-5 py-1 px-2 transition-all hover:bg-light-3 hover:bg-opacity-50", { " !text-dark-5 !p3-r": !y(u) }]),
            onClick: O[1] || (O[1] = xa((S) => h.value = !y(h), ["stop"]))
          }, [
            q("input", {
              value: y(u),
              required: "",
              class: "opacity-0 absolute w-[1px] bottom-0 left-1/2 h-[1px] pointer-events-none"
            }, null, 8, _Z),
            us(" " + Se(y(u) ? m(y(be)(y(u)).format("YYYY-MM-DD HH:mm")) : y(r)("未設定")), 1)
          ], 2),
          Te(lo, {
            name: "fade",
            mode: "out-in"
          }, {
            default: $e(() => [
              y(h) ? (R(), G("div", {
                key: 0,
                class: "absolute top-[calc(100%+.75rem)] z-10",
                ref_key: "listBlock",
                ref: v
              }, [
                Te(y(dw), {
                  modelValue: y(u),
                  "onUpdate:modelValue": [
                    O[2] || (O[2] = (S) => an(u) ? u.value = S : null),
                    f
                  ],
                  mode: "dateTime",
                  "min-Date": y(a).start ? new Date(y(a).start) : /* @__PURE__ */ new Date(),
                  is24hr: "",
                  "hide-time-header": "",
                  "time-accuracy": 2,
                  timezone: y(s).timezone
                }, null, 8, ["modelValue", "min-Date", "timezone"])
              ], 512)) : we("", !0)
            ]),
            _: 1
          })
        ], 512)) : (R(), G("label", gZ, Se(y(r)("持續執行")), 1)),
        y(l) ? (R(), Ke(y(dh), {
          key: 2,
          onClick: O[3] || (O[3] = (S) => l.value = !1),
          weight: "bold",
          class: "text-dark-4 hover:text-dark-3 p3-b cursor-pointer"
        })) : we("", !0)
      ])
    ]));
  }
});
const bZ = /* @__PURE__ */ uo(yZ, [["__scopeId", "data-v-3537e06f"]]), wZ = { class: "flex w-auto items-center justify-center gap-2 rounded shadow-01 bg-light-5 py-1 px-2 hover:bg-light-3 hover:bg-opacity-50 input-outer" }, OZ = ["value", "type", "placeholder", "maxLength", "required"], EZ = /* @__PURE__ */ Re({
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
    return (a, s) => (R(), G("div", wZ, [
      q("input", {
        value: a.modelValue,
        onInput: r,
        type: a.type,
        min: "0",
        class: Qe([a.inputClass, "p3-b w-full border-none outline-none shadow-none placeholder:text-dark-5 text-dark-3"]),
        placeholder: a.placeholder,
        maxLength: a.maxLength,
        required: a.required
      }, null, 42, OZ)
    ]));
  }
});
const cl = /* @__PURE__ */ uo(EZ, [["__scopeId", "data-v-d975114e"]]), DZ = { class: "flex flex-col gap-6" }, SZ = { class: "flex gap-6 flex-wrap items-center" }, xZ = { class: "flex items-center justify-start gap-4" }, TZ = { class: "p3-r text-dark-4" }, kZ = { class: "flex gap-6" }, AZ = { class: "flex items-center gap-4" }, MZ = ["value"], $Z = { value: 0 }, PZ = { class: "flex flex-col gap-4" }, CZ = { class: "flex items-center justify-start gap-4" }, IZ = { class: "p3-r text-dark-4" }, NZ = ["value"], LZ = {
  key: 0,
  class: "absolute top-[calc(100%+.75rem)] left-0 z-10"
}, RZ = { class: "flex items-center empty:hidden" }, FZ = {
  key: 0,
  class: "flex items-center justify-start gap-4"
}, YZ = { class: "p3-r text-dark-4" }, WZ = {
  key: 0,
  class: "flex justify-center flex-col gap-6"
}, UZ = { class: "flex gap-4 items-center" }, VZ = { class: "p3-r text-dark-4" }, BZ = {
  value: "-1",
  disabled: ""
}, HZ = ["value"], zZ = {
  key: 0,
  class: "p3-b text-dark-3"
}, Jy = 1, jZ = /* @__PURE__ */ Re({
  __name: "RepeatFrequency",
  props: {
    frequency: {},
    interval: {}
  },
  emits: ["update:frequency", "update:interval"],
  setup(e, { emit: t }) {
    const n = e, { t: r } = oi.global, a = yt("initialData"), s = yt("eventData"), l = Q(n.interval ?? Jy);
    Ue(l, (A) => {
      A || (A = Jy), t("update:interval", A);
    });
    const u = Q(n.frequency);
    Ue(u, (A) => {
      t("update:frequency", A);
    });
    const f = W({
      get: () => s.value.weekdays ?? [],
      set: (A) => {
        s.value.weekdays = A;
      }
    }), h = W({
      get: () => s.value.weekOrdinal ?? [],
      set: (A) => {
        s.value.weekOrdinal = A;
      }
    }), d = W({
      get: () => s.value.monthDate ?? [],
      set: (A) => {
        s.value.monthDate = A;
      }
    }), m = W({
      get: () => s.value.yearMonths ?? [],
      set: (A) => {
        s.value.yearMonths = A;
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
      const A = {
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
      return g.value == 0 ? `${r("每")}${l.value ?? ""}${A[u.value] ?? ""}${E[u.value] ?? ""}${r("執行一次")}` : "";
    }), g = Q(
      n.interval == null ? -1 : n.interval !== 1 ? 0 : n.frequency
    );
    function b(A) {
      let [E, C] = A.split(" "), M = C.split(":")[0];
      M = M.padStart(2, "0");
      let N = `${E} ${M}:00`, F = `${M}:59`;
      return `${N}-${F}`;
    }
    Ue(
      g,
      (A) => {
        St[A] && (t("update:frequency", A), t("update:interval", 1), u.value = g.value, s.value.weekdays = null, s.value.weekOrdinal = null, s.value.monthDate = null, s.value.yearMonths = null), s.value.customInterval = A === 0;
      },
      { immediate: !0 }
    );
    const O = Q(
      s.value.start ? new Date(s.value.start).toISOString() : ""
    ), S = (A) => {
      O.value = A.toISOString();
    }, w = Q(!1);
    Ue(w, (A) => {
      A || (s.value.start = vw.cloneDeep(O.value));
    });
    const x = Q(null);
    return mw(x, () => w.value = !1), (A, E) => (R(), G("div", DZ, [
      q("div", SZ, [
        q("label", xZ, [
          q("span", TZ, Se(y(r)("執行頻率")), 1),
          q("div", kZ, [
            q("div", AZ, [
              rr(q("select", {
                class: "p3-b text-true-blue-3 flex cursor-pointer items-center justify-center gap-4 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": E[0] || (E[0] = (C) => an(g) ? g.value = C : null)
              }, [
                (R(!0), G(qe, null, Rt(y(St), (C, M) => (R(), G(qe, { key: M }, [
                  Number.isInteger(C) ? (R(), G("option", {
                    key: 0,
                    value: C
                  }, Se(y(r)(M)), 9, MZ)) : we("", !0)
                ], 64))), 128)),
                q("option", $Z, Se(y(r)("自訂")), 1)
              ], 512), [
                [Vs, y(g)]
              ])
            ])
          ])
        ]),
        q("div", PZ, [
          q("div", CZ, [
            q("span", IZ, Se(y(r)("開始")), 1),
            q("div", {
              class: "relative",
              ref_key: "target",
              ref: x
            }, [
              q("div", {
                class: Qe(["p3-b text-true-blue-3 relative flex cursor-pointer items-center justify-start gap-4 rounded shadow-01 bg-light-5 py-1 px-2 transition-all hover:bg-light-3 hover:bg-opacity-50", { " !text-dark-5 !p3-r": !y(O) }]),
                onClick: E[1] || (E[1] = xa((C) => w.value = !y(w), ["stop"]))
              }, [
                q("input", {
                  value: y(O),
                  required: "",
                  class: "opacity-0 absolute w-[1px] bottom-0 left-1/2 h-[1px] pointer-events-none"
                }, null, 8, NZ),
                us(" " + Se(y(O) ? b(
                  y(be)(y(O)).format("YYYY-MM-DD HH:mm")
                ) : y(r)("未設定")), 1)
              ], 2),
              Te(lo, {
                name: "fade",
                mode: "out-in"
              }, {
                default: $e(() => [
                  y(w) ? (R(), G("div", LZ, [
                    Te(y(dw), {
                      modelValue: y(O),
                      "onUpdate:modelValue": [
                        E[2] || (E[2] = (C) => an(O) ? O.value = C : null),
                        S
                      ],
                      mode: "dateTime",
                      "min-Date": /* @__PURE__ */ new Date(),
                      is24hr: "",
                      "hide-time-header": "",
                      "time-accuracy": 2,
                      timezone: y(a).timezone
                    }, null, 8, ["modelValue", "min-Date", "timezone"])
                  ])) : we("", !0)
                ]),
                _: 1
              })
            ], 512)
          ])
        ]),
        q("div", RZ, [
          y(u) !== -1 ? (R(), G("div", FZ, [
            q("span", YZ, Se(y(r)("結束")), 1),
            Te(bZ, {
              modelValue: y(s).due,
              "onUpdate:modelValue": E[3] || (E[3] = (C) => y(s).due = C)
            }, null, 8, ["modelValue"])
          ])) : we("", !0)
        ])
      ]),
      y(St)[y(g)] == null ? (R(), G("div", WZ, [
        q("div", UZ, [
          q("span", VZ, Se(y(r)("每")), 1),
          Te(cl, {
            class: "!w-10 text-center text-dark-3",
            inputClass: "text-true-blue-3",
            modelValue: y(l),
            "onUpdate:modelValue": E[4] || (E[4] = (C) => an(l) ? l.value = C : null),
            type: "number"
          }, null, 8, ["modelValue"]),
          rr(q("select", {
            class: "p3-b text-true-blue-3 w-14 flex cursor-pointer items-center justify-center gap-4 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
            "onUpdate:modelValue": E[5] || (E[5] = (C) => an(u) ? u.value = C : null)
          }, [
            q("option", BZ, Se(y(r)("未設定")), 1),
            (R(!0), G(qe, null, Rt(y(St), (C, M) => (R(), G(qe, { key: M }, [
              C != y(St).Never && Number.isInteger(C) ? (R(), G("option", {
                key: 0,
                value: C
              }, Se(y(r)(`repeat${M}`)), 9, HZ)) : we("", !0)
            ], 64))), 128))
          ], 512), [
            [Vs, y(u)]
          ]),
          y(u) == y(St).Hour || y(u) == y(St).Day ? (R(), G("span", zZ, Se(y(v)), 1)) : we("", !0),
          y(St)[y(g)] == null ? (R(), Ke(XI, {
            key: 1,
            class: "ml-4",
            type: y(u),
            weekdays: y(f),
            "onUpdate:weekdays": E[6] || (E[6] = (C) => an(f) ? f.value = C : null),
            weekOrdinal: y(h),
            "onUpdate:weekOrdinal": E[7] || (E[7] = (C) => an(h) ? h.value = C : null),
            monthDate: y(d),
            "onUpdate:monthDate": E[8] || (E[8] = (C) => an(d) ? d.value = C : null),
            yearMonths: y(m),
            "onUpdate:yearMonths": E[9] || (E[9] = (C) => an(m) ? m.value = C : null)
          }, null, 8, ["type", "weekdays", "weekOrdinal", "monthDate", "yearMonths"])) : we("", !0)
        ])
      ])) : we("", !0)
    ]));
  }
}), GZ = ["id"], qZ = { class: "p2-b text-dark-2 bg-light-5 flex gap-1 items-center" }, KZ = /* @__PURE__ */ Re({
  __name: "OuterBlock",
  props: {
    id: {},
    title: {},
    icon: {}
  },
  setup(e) {
    const t = e, n = fM(
      () => import("./index-7d1fc437.js").then((u) => u[t.icon])
    ), r = Q(!1);
    zr(() => {
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
    return (u, f) => (R(), G("div", {
      class: "relative border rounded-xs border-light-1 py-4 px-3 shadow-01 flex flex-col w-full",
      id: u.id
    }, [
      q("div", {
        class: Qe(["flex items-center justify-between bg-light-5 z-[2]", { " cursor-pointer": !y(r) }]),
        onClick: f[1] || (f[1] = (h) => y(r) ? null : r.value = !0)
      }, [
        q("div", qZ, [
          (R(), Ke(Zs(y(n)), { weight: "bold" })),
          us(" " + Se(u.title), 1)
        ]),
        Te(y(z1), {
          weight: "bold",
          class: Qe(["transition-all hover:drop-shadow-md cursor-pointer hover:text-dark-3", { "-rotate-90": !y(r) }]),
          onClick: f[0] || (f[0] = xa((h) => r.value = !y(r), ["stop"]))
        }, null, 8, ["class"])
      ], 2),
      Te(lo, {
        name: "expand",
        onEnter: a,
        onAfterEnter: s,
        onLeave: l
      }, {
        default: $e(() => [
          y(r) ? nt(u.$slots, "default", { key: 0 }, void 0, !0) : we("", !0)
        ]),
        _: 3
      })
    ], 8, GZ));
  }
});
const Gu = /* @__PURE__ */ uo(KZ, [["__scopeId", "data-v-12030083"]]);
function lO(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: ZZ } = Object.prototype, { getPrototypeOf: sm } = Object, af = ((e) => (t) => {
  const n = ZZ.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), gi = (e) => (e = e.toLowerCase(), (t) => af(t) === e), sf = (e) => (t) => typeof t === e, { isArray: To } = Array, Sl = sf("undefined");
function XZ(e) {
  return e !== null && !Sl(e) && e.constructor !== null && !Sl(e.constructor) && Sr(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const uO = gi("ArrayBuffer");
function JZ(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && uO(e.buffer), t;
}
const QZ = sf("string"), Sr = sf("function"), cO = sf("number"), of = (e) => e !== null && typeof e == "object", eX = (e) => e === !0 || e === !1, qu = (e) => {
  if (af(e) !== "object")
    return !1;
  const t = sm(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, tX = gi("Date"), nX = gi("File"), rX = gi("Blob"), iX = gi("FileList"), aX = (e) => of(e) && Sr(e.pipe), sX = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Sr(e.append) && ((t = af(e)) === "formdata" || // detect form-data instance
  t === "object" && Sr(e.toString) && e.toString() === "[object FormData]"));
}, oX = gi("URLSearchParams"), lX = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
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
function fO(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, a;
  for (; r-- > 0; )
    if (a = n[r], t === a.toLowerCase())
      return a;
  return null;
}
const dO = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), hO = (e) => !Sl(e) && e !== dO;
function $h() {
  const { caseless: e } = hO(this) && this || {}, t = {}, n = (r, a) => {
    const s = e && fO(t, a) || a;
    qu(t[s]) && qu(r) ? t[s] = $h(t[s], r) : qu(r) ? t[s] = $h({}, r) : To(r) ? t[s] = r.slice() : t[s] = r;
  };
  for (let r = 0, a = arguments.length; r < a; r++)
    arguments[r] && Ll(arguments[r], n);
  return t;
}
const uX = (e, t, n, { allOwnKeys: r } = {}) => (Ll(t, (a, s) => {
  n && Sr(a) ? e[s] = lO(a, n) : e[s] = a;
}, { allOwnKeys: r }), e), cX = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), fX = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, dX = (e, t, n, r) => {
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
}, hX = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, pX = (e) => {
  if (!e)
    return null;
  if (To(e))
    return e;
  let t = e.length;
  if (!cO(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, mX = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && sm(Uint8Array)), vX = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let a;
  for (; (a = r.next()) && !a.done; ) {
    const s = a.value;
    t.call(e, s[0], s[1]);
  }
}, gX = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, _X = gi("HTMLFormElement"), yX = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, a) {
    return r.toUpperCase() + a;
  }
), Qy = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), bX = gi("RegExp"), pO = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  Ll(n, (a, s) => {
    let l;
    (l = t(a, s, e)) !== !1 && (r[s] = l || a);
  }), Object.defineProperties(e, r);
}, wX = (e) => {
  pO(e, (t, n) => {
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
}, OX = (e, t) => {
  const n = {}, r = (a) => {
    a.forEach((s) => {
      n[s] = !0;
    });
  };
  return To(e) ? r(e) : r(String(e).split(t)), n;
}, EX = () => {
}, DX = (e, t) => (e = +e, Number.isFinite(e) ? e : t), Wd = "abcdefghijklmnopqrstuvwxyz", e0 = "0123456789", mO = {
  DIGIT: e0,
  ALPHA: Wd,
  ALPHA_DIGIT: Wd + Wd.toUpperCase() + e0
}, SX = (e = 16, t = mO.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function xX(e) {
  return !!(e && Sr(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const TX = (e) => {
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
}, kX = gi("AsyncFunction"), AX = (e) => e && (of(e) || Sr(e)) && Sr(e.then) && Sr(e.catch), ne = {
  isArray: To,
  isArrayBuffer: uO,
  isBuffer: XZ,
  isFormData: sX,
  isArrayBufferView: JZ,
  isString: QZ,
  isNumber: cO,
  isBoolean: eX,
  isObject: of,
  isPlainObject: qu,
  isUndefined: Sl,
  isDate: tX,
  isFile: nX,
  isBlob: rX,
  isRegExp: bX,
  isFunction: Sr,
  isStream: aX,
  isURLSearchParams: oX,
  isTypedArray: mX,
  isFileList: iX,
  forEach: Ll,
  merge: $h,
  extend: uX,
  trim: lX,
  stripBOM: cX,
  inherits: fX,
  toFlatObject: dX,
  kindOf: af,
  kindOfTest: gi,
  endsWith: hX,
  toArray: pX,
  forEachEntry: vX,
  matchAll: gX,
  isHTMLForm: _X,
  hasOwnProperty: Qy,
  hasOwnProp: Qy,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: pO,
  freezeMethods: wX,
  toObjectSet: OX,
  toCamelCase: yX,
  noop: EX,
  toFiniteNumber: DX,
  findKey: fO,
  global: dO,
  isContextDefined: hO,
  ALPHABET: mO,
  generateString: SX,
  isSpecCompliantForm: xX,
  toJSONObject: TX,
  isAsyncFn: kX,
  isThenable: AX
};
function vt(e, t, n, r, a) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), a && (this.response = a);
}
ne.inherits(vt, Error, {
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
      config: ne.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const vO = vt.prototype, gO = {};
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
  gO[e] = { value: e };
});
Object.defineProperties(vt, gO);
Object.defineProperty(vO, "isAxiosError", { value: !0 });
vt.from = (e, t, n, r, a, s) => {
  const l = Object.create(vO);
  return ne.toFlatObject(e, l, function(f) {
    return f !== Error.prototype;
  }, (u) => u !== "isAxiosError"), vt.call(l, e.message, t, n, r, a), l.cause = e, l.name = e.name, s && Object.assign(l, s), l;
};
const MX = null;
function Ph(e) {
  return ne.isPlainObject(e) || ne.isArray(e);
}
function _O(e) {
  return ne.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function t0(e, t, n) {
  return e ? e.concat(t).map(function(a, s) {
    return a = _O(a), !n && s ? "[" + a + "]" : a;
  }).join(n ? "." : "") : t;
}
function $X(e) {
  return ne.isArray(e) && !e.some(Ph);
}
const PX = ne.toFlatObject(ne, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function lf(e, t, n) {
  if (!ne.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = ne.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(O, S) {
    return !ne.isUndefined(S[O]);
  });
  const r = n.metaTokens, a = n.visitor || d, s = n.dots, l = n.indexes, f = (n.Blob || typeof Blob < "u" && Blob) && ne.isSpecCompliantForm(t);
  if (!ne.isFunction(a))
    throw new TypeError("visitor must be a function");
  function h(b) {
    if (b === null)
      return "";
    if (ne.isDate(b))
      return b.toISOString();
    if (!f && ne.isBlob(b))
      throw new vt("Blob is not supported. Use a Buffer instead.");
    return ne.isArrayBuffer(b) || ne.isTypedArray(b) ? f && typeof Blob == "function" ? new Blob([b]) : Buffer.from(b) : b;
  }
  function d(b, O, S) {
    let w = b;
    if (b && !S && typeof b == "object") {
      if (ne.endsWith(O, "{}"))
        O = r ? O : O.slice(0, -2), b = JSON.stringify(b);
      else if (ne.isArray(b) && $X(b) || (ne.isFileList(b) || ne.endsWith(O, "[]")) && (w = ne.toArray(b)))
        return O = _O(O), w.forEach(function(A, E) {
          !(ne.isUndefined(A) || A === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            l === !0 ? t0([O], E, s) : l === null ? O : O + "[]",
            h(A)
          );
        }), !1;
    }
    return Ph(b) ? !0 : (t.append(t0(S, O, s), h(b)), !1);
  }
  const m = [], v = Object.assign(PX, {
    defaultVisitor: d,
    convertValue: h,
    isVisitable: Ph
  });
  function g(b, O) {
    if (!ne.isUndefined(b)) {
      if (m.indexOf(b) !== -1)
        throw Error("Circular reference detected in " + O.join("."));
      m.push(b), ne.forEach(b, function(w, x) {
        (!(ne.isUndefined(w) || w === null) && a.call(
          t,
          w,
          ne.isString(x) ? x.trim() : x,
          O,
          v
        )) === !0 && g(w, O ? O.concat(x) : [x]);
      }), m.pop();
    }
  }
  if (!ne.isObject(e))
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
const yO = om.prototype;
yO.append = function(t, n) {
  this._pairs.push([t, n]);
};
yO.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, n0);
  } : n0;
  return this._pairs.map(function(a) {
    return n(a[0]) + "=" + n(a[1]);
  }, "").join("&");
};
function CX(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function bO(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || CX, a = n && n.serialize;
  let s;
  if (a ? s = a(t, n) : s = ne.isURLSearchParams(t) ? t.toString() : new om(t, n).toString(r), s) {
    const l = e.indexOf("#");
    l !== -1 && (e = e.slice(0, l)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
class IX {
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
    ne.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const r0 = IX, wO = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, NX = typeof URLSearchParams < "u" ? URLSearchParams : om, LX = typeof FormData < "u" ? FormData : null, RX = typeof Blob < "u" ? Blob : null, FX = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), YX = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), ii = {
  isBrowser: !0,
  classes: {
    URLSearchParams: NX,
    FormData: LX,
    Blob: RX
  },
  isStandardBrowserEnv: FX,
  isStandardBrowserWebWorkerEnv: YX,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function WX(e, t) {
  return lf(e, new ii.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, a, s) {
      return ii.isNode && ne.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function UX(e) {
  return ne.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function VX(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const a = n.length;
  let s;
  for (r = 0; r < a; r++)
    s = n[r], t[s] = e[s];
  return t;
}
function OO(e) {
  function t(n, r, a, s) {
    let l = n[s++];
    const u = Number.isFinite(+l), f = s >= n.length;
    return l = !l && ne.isArray(a) ? a.length : l, f ? (ne.hasOwnProp(a, l) ? a[l] = [a[l], r] : a[l] = r, !u) : ((!a[l] || !ne.isObject(a[l])) && (a[l] = []), t(n, r, a[l], s) && ne.isArray(a[l]) && (a[l] = VX(a[l])), !u);
  }
  if (ne.isFormData(e) && ne.isFunction(e.entries)) {
    const n = {};
    return ne.forEachEntry(e, (r, a) => {
      t(UX(r), a, n, 0);
    }), n;
  }
  return null;
}
function BX(e, t, n) {
  if (ne.isString(e))
    try {
      return (t || JSON.parse)(e), ne.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const lm = {
  transitional: wO,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", a = r.indexOf("application/json") > -1, s = ne.isObject(t);
    if (s && ne.isHTMLForm(t) && (t = new FormData(t)), ne.isFormData(t))
      return a && a ? JSON.stringify(OO(t)) : t;
    if (ne.isArrayBuffer(t) || ne.isBuffer(t) || ne.isStream(t) || ne.isFile(t) || ne.isBlob(t))
      return t;
    if (ne.isArrayBufferView(t))
      return t.buffer;
    if (ne.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let u;
    if (s) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return WX(t, this.formSerializer).toString();
      if ((u = ne.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return lf(
          u ? { "files[]": t } : t,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return s || a ? (n.setContentType("application/json", !1), BX(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || lm.transitional, r = n && n.forcedJSONParsing, a = this.responseType === "json";
    if (t && ne.isString(t) && (r && !this.responseType || a)) {
      const l = !(n && n.silentJSONParsing) && a;
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
    FormData: ii.classes.FormData,
    Blob: ii.classes.Blob
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
ne.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  lm.headers[e] = {};
});
const um = lm, HX = ne.toObjectSet([
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
]), zX = (e) => {
  const t = {};
  let n, r, a;
  return e && e.split(`
`).forEach(function(l) {
    a = l.indexOf(":"), n = l.substring(0, a).trim().toLowerCase(), r = l.substring(a + 1).trim(), !(!n || t[n] && HX[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, i0 = Symbol("internals");
function tl(e) {
  return e && String(e).trim().toLowerCase();
}
function Ku(e) {
  return e === !1 || e == null ? e : ne.isArray(e) ? e.map(Ku) : String(e);
}
function jX(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const GX = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ud(e, t, n, r, a) {
  if (ne.isFunction(r))
    return r.call(this, t, n);
  if (a && (t = n), !!ne.isString(t)) {
    if (ne.isString(r))
      return t.indexOf(r) !== -1;
    if (ne.isRegExp(r))
      return r.test(t);
  }
}
function qX(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function KX(e, t) {
  const n = ne.toCamelCase(" " + t);
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
      const m = ne.findKey(a, d);
      (!m || a[m] === void 0 || h === !0 || h === void 0 && a[m] !== !1) && (a[m || f] = Ku(u));
    }
    const l = (u, f) => ne.forEach(u, (h, d) => s(h, d, f));
    return ne.isPlainObject(t) || t instanceof this.constructor ? l(t, n) : ne.isString(t) && (t = t.trim()) && !GX(t) ? l(zX(t), n) : t != null && s(n, t, r), this;
  }
  get(t, n) {
    if (t = tl(t), t) {
      const r = ne.findKey(this, t);
      if (r) {
        const a = this[r];
        if (!n)
          return a;
        if (n === !0)
          return jX(a);
        if (ne.isFunction(n))
          return n.call(this, a, r);
        if (ne.isRegExp(n))
          return n.exec(a);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = tl(t), t) {
      const r = ne.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Ud(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let a = !1;
    function s(l) {
      if (l = tl(l), l) {
        const u = ne.findKey(r, l);
        u && (!n || Ud(r, r[u], u, n)) && (delete r[u], a = !0);
      }
    }
    return ne.isArray(t) ? t.forEach(s) : s(t), a;
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
    return ne.forEach(this, (a, s) => {
      const l = ne.findKey(r, s);
      if (l) {
        n[l] = Ku(a), delete n[s];
        return;
      }
      const u = t ? qX(s) : String(s).trim();
      u !== s && delete n[s], n[u] = Ku(a), r[u] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return ne.forEach(this, (r, a) => {
      r != null && r !== !1 && (n[a] = t && ne.isArray(r) ? r.join(", ") : r);
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
      r[u] || (KX(a, l), r[u] = !0);
    }
    return ne.isArray(t) ? t.forEach(s) : s(t), this;
  }
}
uf.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
ne.reduceDescriptors(uf.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
ne.freezeMethods(uf);
const Wi = uf;
function Vd(e, t) {
  const n = this || um, r = t || n, a = Wi.from(r.headers);
  let s = r.data;
  return ne.forEach(e, function(u) {
    s = u.call(n, s, a.normalize(), t ? t.status : void 0);
  }), a.normalize(), s;
}
function EO(e) {
  return !!(e && e.__CANCEL__);
}
function Rl(e, t, n) {
  vt.call(this, e ?? "canceled", vt.ERR_CANCELED, t, n), this.name = "CanceledError";
}
ne.inherits(Rl, vt, {
  __CANCEL__: !0
});
function ZX(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new vt(
    "Request failed with status code " + n.status,
    [vt.ERR_BAD_REQUEST, vt.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const XX = ii.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(n, r, a, s, l, u) {
        const f = [];
        f.push(n + "=" + encodeURIComponent(r)), ne.isNumber(a) && f.push("expires=" + new Date(a).toGMTString()), ne.isString(s) && f.push("path=" + s), ne.isString(l) && f.push("domain=" + l), u === !0 && f.push("secure"), document.cookie = f.join("; ");
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
function JX(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function QX(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function DO(e, t) {
  return e && !JX(t) ? QX(e, t) : t;
}
const eJ = ii.isStandardBrowserEnv ? (
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
      const u = ne.isString(l) ? a(l) : l;
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
function tJ(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function nJ(e, t) {
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
  const r = nJ(50, 250);
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
const rJ = typeof XMLHttpRequest < "u", iJ = rJ && function(e) {
  return new Promise(function(n, r) {
    let a = e.data;
    const s = Wi.from(e.headers).normalize(), l = e.responseType;
    let u;
    function f() {
      e.cancelToken && e.cancelToken.unsubscribe(u), e.signal && e.signal.removeEventListener("abort", u);
    }
    let h;
    ne.isFormData(a) && (ii.isStandardBrowserEnv || ii.isStandardBrowserWebWorkerEnv ? s.setContentType(!1) : s.getContentType(/^\s*multipart\/form-data/) ? ne.isString(h = s.getContentType()) && s.setContentType(h.replace(/^\s*(multipart\/form-data);+/, "$1")) : s.setContentType("multipart/form-data"));
    let d = new XMLHttpRequest();
    if (e.auth) {
      const b = e.auth.username || "", O = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      s.set("Authorization", "Basic " + btoa(b + ":" + O));
    }
    const m = DO(e.baseURL, e.url);
    d.open(e.method.toUpperCase(), bO(m, e.params, e.paramsSerializer), !0), d.timeout = e.timeout;
    function v() {
      if (!d)
        return;
      const b = Wi.from(
        "getAllResponseHeaders" in d && d.getAllResponseHeaders()
      ), S = {
        data: !l || l === "text" || l === "json" ? d.responseText : d.response,
        status: d.status,
        statusText: d.statusText,
        headers: b,
        config: e,
        request: d
      };
      ZX(function(x) {
        n(x), f();
      }, function(x) {
        r(x), f();
      }, S), d = null;
    }
    if ("onloadend" in d ? d.onloadend = v : d.onreadystatechange = function() {
      !d || d.readyState !== 4 || d.status === 0 && !(d.responseURL && d.responseURL.indexOf("file:") === 0) || setTimeout(v);
    }, d.onabort = function() {
      d && (r(new vt("Request aborted", vt.ECONNABORTED, e, d)), d = null);
    }, d.onerror = function() {
      r(new vt("Network Error", vt.ERR_NETWORK, e, d)), d = null;
    }, d.ontimeout = function() {
      let O = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const S = e.transitional || wO;
      e.timeoutErrorMessage && (O = e.timeoutErrorMessage), r(new vt(
        O,
        S.clarifyTimeoutError ? vt.ETIMEDOUT : vt.ECONNABORTED,
        e,
        d
      )), d = null;
    }, ii.isStandardBrowserEnv) {
      const b = (e.withCredentials || eJ(m)) && e.xsrfCookieName && XX.read(e.xsrfCookieName);
      b && s.set(e.xsrfHeaderName, b);
    }
    a === void 0 && s.setContentType(null), "setRequestHeader" in d && ne.forEach(s.toJSON(), function(O, S) {
      d.setRequestHeader(S, O);
    }), ne.isUndefined(e.withCredentials) || (d.withCredentials = !!e.withCredentials), l && l !== "json" && (d.responseType = e.responseType), typeof e.onDownloadProgress == "function" && d.addEventListener("progress", a0(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && d.upload && d.upload.addEventListener("progress", a0(e.onUploadProgress)), (e.cancelToken || e.signal) && (u = (b) => {
      d && (r(!b || b.type ? new Rl(null, e, d) : b), d.abort(), d = null);
    }, e.cancelToken && e.cancelToken.subscribe(u), e.signal && (e.signal.aborted ? u() : e.signal.addEventListener("abort", u)));
    const g = tJ(m);
    if (g && ii.protocols.indexOf(g) === -1) {
      r(new vt("Unsupported protocol " + g + ":", vt.ERR_BAD_REQUEST, e));
      return;
    }
    d.send(a || null);
  });
}, Ch = {
  http: MX,
  xhr: iJ
};
ne.forEach(Ch, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const s0 = (e) => `- ${e}`, aJ = (e) => ne.isFunction(e) || e === null || e === !1, SO = {
  getAdapter: (e) => {
    e = ne.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const a = {};
    for (let s = 0; s < t; s++) {
      n = e[s];
      let l;
      if (r = n, !aJ(n) && (r = Ch[(l = String(n)).toLowerCase()], r === void 0))
        throw new vt(`Unknown adapter '${l}'`);
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
      throw new vt(
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
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), SO.getAdapter(e.adapter || um.adapter)(e).then(function(r) {
    return Bd(e), r.data = Vd.call(
      e,
      e.transformResponse,
      r
    ), r.headers = Wi.from(r.headers), r;
  }, function(r) {
    return EO(r) || (Bd(e), r && r.response && (r.response.data = Vd.call(
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
    return ne.isPlainObject(h) && ne.isPlainObject(d) ? ne.merge.call({ caseless: m }, h, d) : ne.isPlainObject(d) ? ne.merge({}, d) : ne.isArray(d) ? d.slice() : d;
  }
  function a(h, d, m) {
    if (ne.isUndefined(d)) {
      if (!ne.isUndefined(h))
        return r(void 0, h, m);
    } else
      return r(h, d, m);
  }
  function s(h, d) {
    if (!ne.isUndefined(d))
      return r(void 0, d);
  }
  function l(h, d) {
    if (ne.isUndefined(d)) {
      if (!ne.isUndefined(h))
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
  return ne.forEach(Object.keys(Object.assign({}, e, t)), function(d) {
    const m = f[d] || a, v = m(e[d], t[d], d);
    ne.isUndefined(v) && m !== u || (n[d] = v);
  }), n;
}
const xO = "1.5.1", cm = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  cm[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const u0 = {};
cm.transitional = function(t, n, r) {
  function a(s, l) {
    return "[Axios v" + xO + "] Transitional option '" + s + "'" + l + (r ? ". " + r : "");
  }
  return (s, l, u) => {
    if (t === !1)
      throw new vt(
        a(l, " has been removed" + (n ? " in " + n : "")),
        vt.ERR_DEPRECATED
      );
    return n && !u0[l] && (u0[l] = !0, console.warn(
      a(
        l,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(s, l, u) : !0;
  };
};
function sJ(e, t, n) {
  if (typeof e != "object")
    throw new vt("options must be an object", vt.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let a = r.length;
  for (; a-- > 0; ) {
    const s = r[a], l = t[s];
    if (l) {
      const u = e[s], f = u === void 0 || l(u, s, e);
      if (f !== !0)
        throw new vt("option " + s + " must be " + f, vt.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new vt("Unknown option " + s, vt.ERR_BAD_OPTION);
  }
}
const Ih = {
  assertOptions: sJ,
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
    }, !1), a != null && (ne.isFunction(a) ? n.paramsSerializer = {
      serialize: a
    } : Ih.assertOptions(a, {
      encode: _a.function,
      serialize: _a.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let l = s && ne.merge(
      s.common,
      s[n.method]
    );
    s && ne.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (b) => {
        delete s[b];
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
      const b = [o0.bind(this), void 0];
      for (b.unshift.apply(b, u), b.push.apply(b, h), v = b.length, d = Promise.resolve(n); m < v; )
        d = d.then(b[m++], b[m++]);
      return d;
    }
    v = u.length;
    let g = n;
    for (m = 0; m < v; ) {
      const b = u[m++], O = u[m++];
      try {
        g = b(g);
      } catch (S) {
        O.call(this, S);
        break;
      }
    }
    try {
      d = o0.call(this, g);
    } catch (b) {
      return Promise.reject(b);
    }
    for (m = 0, v = h.length; m < v; )
      d = d.then(h[m++], h[m++]);
    return d;
  }
  getUri(t) {
    t = so(this.defaults, t);
    const n = DO(t.baseURL, t.url);
    return bO(n, t.params, t.paramsSerializer);
  }
}
ne.forEach(["delete", "get", "head", "options"], function(t) {
  Ac.prototype[t] = function(n, r) {
    return this.request(so(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
ne.forEach(["post", "put", "patch"], function(t) {
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
const oJ = fm;
function lJ(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function uJ(e) {
  return ne.isObject(e) && e.isAxiosError === !0;
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
const cJ = Nh;
function TO(e) {
  const t = new Zu(e), n = lO(Zu.prototype.request, t);
  return ne.extend(n, Zu.prototype, t, { allOwnKeys: !0 }), ne.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(a) {
    return TO(so(e, a));
  }, n;
}
const on = TO(um);
on.Axios = Zu;
on.CanceledError = Rl;
on.CancelToken = oJ;
on.isCancel = EO;
on.VERSION = xO;
on.toFormData = lf;
on.AxiosError = vt;
on.Cancel = on.CanceledError;
on.all = function(t) {
  return Promise.all(t);
};
on.spread = lJ;
on.isAxiosError = uJ;
on.mergeConfig = so;
on.AxiosHeaders = Wi;
on.formToJSON = (e) => OO(ne.isHTMLForm(e) ? new FormData(e) : e);
on.getAdapter = SO.getAdapter;
on.HttpStatusCode = cJ;
on.default = on;
const fJ = on;
function dJ(e, t) {
  return R(), G("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    q("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",
      fill: "currentColor"
    })
  ]);
}
const hJ = /* @__PURE__ */ Re({
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
    return (a, s) => (R(), Ke(y(I2), Zt(y(r), {
      class: y(H1)(
        "peer h-4 w-4 shrink-0 rounded-sm border border-slate-200 border-slate-900 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-slate-900 data-[state=checked]:text-slate-50 dark:border-slate-800 dark:border-slate-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 dark:data-[state=checked]:bg-slate-50 dark:data-[state=checked]:text-slate-900",
        a.$attrs.class ?? ""
      )
    }), {
      default: $e(() => [
        Te(y(N2), { class: "flex h-full w-full items-center justify-center text-current" }, {
          default: $e(() => [
            Te(y(dJ), { class: "h-4 w-4" })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), pJ = { class: "flex items-center flex-col justify-center py-2" }, mJ = { class: "flex justify-start gap-2 w-full items-center z-[2]" }, vJ = {
  key: 0,
  class: "flex-shrink-0 cursor-pointer pl-4"
}, gJ = {
  key: 1,
  class: "w-6"
}, _J = ["for"], yJ = {
  key: 0,
  class: "flex flex-col pl-6 w-full pt-2"
}, bJ = /* @__PURE__ */ Re({
  __name: "EventActionTargetItem",
  props: {
    target: {},
    targets: {}
  },
  setup(e) {
    const t = yt("addTarget"), n = Q(!0);
    return (r, a) => {
      var s, l, u;
      return R(), G("div", pJ, [
        q("div", {
          class: "item flex-1 flex gap-2 w-full items-center relative pr-4",
          onClick: a[1] || (a[1] = (f) => {
            var h;
            return (h = r.target) != null && h.children ? n.value = !y(n) : null;
          })
        }, [
          q("div", mJ, [
            (s = r.target) != null && s.children ? (R(), G("div", vJ, [
              Te(y(z1), {
                class: Qe(["text-dark-3 transition-all", { " -rotate-90": !y(n) }]),
                size: 16
              }, null, 8, ["class"])
            ])) : (R(), G("div", gJ)),
            q("label", {
              for: `target-${r.target.id}`,
              class: Qe(["flex-1 cursor-pointer flex items-center gap-2", [((l = r.target) != null && l.children, "p3-r")]])
            }, [
              rr(q("div", {
                class: Qe(["w-2 h-2 rounded-full flex-shrink-0", [r.target.enabled ? "bg-success-green-4" : "bg-red-4"]])
              }, null, 2), [
                [O0, r.target.hasOwnProperty("enabled")]
              ]),
              q("span", null, Se(r.target.name), 1)
            ], 10, _J)
          ]),
          (u = r.target) != null && u.children ? we("", !0) : (R(), Ke(y(hJ), {
            key: 0,
            class: "rounded data-[state=checked]:bg-true-blue-3 border-true-blue-4 z-[2]",
            id: `target-${r.target.id}`,
            checked: r.targets.some((f) => f === r.target.id),
            "onUpdate:checked": a[0] || (a[0] = (f) => y(t)(r.target))
          }, null, 8, ["id", "checked"]))
        ]),
        Te(lo, {
          name: "fade",
          mode: "out-in"
        }, {
          default: $e(() => {
            var f;
            return [
              (f = r.target) != null && f.children && y(n) ? (R(), G("div", yJ, [
                (R(!0), G(qe, null, Rt(r.target.children, (h) => (R(), Ke(kO, {
                  target: h,
                  targets: r.targets
                }, null, 8, ["target", "targets"]))), 256))
              ])) : we("", !0)
            ];
          }),
          _: 1
        })
      ]);
    };
  }
});
const kO = /* @__PURE__ */ uo(bJ, [["__scopeId", "data-v-f70931b2"]]);
function wJ() {
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
  Lh.init || (Lh.init = !0, Xu = wJ() !== -1);
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
const OJ = /* @__PURE__ */ pM("data-v-b329ee4c");
dM("data-v-b329ee4c");
const EJ = {
  class: "resize-observer",
  tabindex: "-1"
};
hM();
const DJ = /* @__PURE__ */ OJ((e, t, n, r, a, s) => (R(), Ke("div", EJ)));
cf.render = DJ;
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
function SJ(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function c0(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function xJ(e, t, n) {
  return t && c0(e.prototype, t), n && c0(e, n), e;
}
function f0(e) {
  return TJ(e) || kJ(e) || AJ(e) || MJ();
}
function TJ(e) {
  if (Array.isArray(e))
    return Rh(e);
}
function kJ(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e))
    return Array.from(e);
}
function AJ(e, t) {
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
function MJ() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $J(e) {
  var t;
  return typeof e == "function" ? t = {
    callback: e
  } : t = e, t;
}
function PJ(e, t) {
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
function AO(e, t) {
  if (e === t)
    return !0;
  if (Ju(e) === "object") {
    for (var n in e)
      if (!AO(e[n], t[n]))
        return !1;
    return !0;
  }
  return !1;
}
var CJ = /* @__PURE__ */ function() {
  function e(t, n, r) {
    SJ(this, e), this.el = t, this.observer = null, this.frozen = !1, this.createObserver(n, r);
  }
  return xJ(e, [{
    key: "createObserver",
    value: function(n, r) {
      var a = this;
      if (this.observer && this.destroyObserver(), !this.frozen) {
        if (this.options = $J(n), this.callback = function(u, f) {
          a.options.callback(u, f), u && a.options.once && (a.frozen = !0, a.destroyObserver());
        }, this.callback && this.options.throttle) {
          var s = this.options.throttleOptions || {}, l = s.leading;
          this.callback = PJ(this.callback, this.options.throttle, {
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
function MO(e, t, n) {
  var r = t.value;
  if (r)
    if (typeof IntersectionObserver > "u")
      console.warn("[vue-observe-visibility] IntersectionObserver API is not available in your browser. Please install this polyfill: https://github.com/w3c/IntersectionObserver/tree/master/polyfill");
    else {
      var a = new CJ(e, r, n);
      e._vue_visibilityState = a;
    }
}
function IJ(e, t, n) {
  var r = t.value, a = t.oldValue;
  if (!AO(r, a)) {
    var s = e._vue_visibilityState;
    if (!r) {
      $O(e);
      return;
    }
    s ? s.createObserver(r, n) : MO(e, {
      value: r
    }, n);
  }
}
function $O(e) {
  var t = e._vue_visibilityState;
  t && (t.destroyObserver(), delete e._vue_visibilityState);
}
var NJ = {
  beforeMount: MO,
  updated: IJ,
  unmounted: $O
};
function LJ(e) {
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
var RJ = {
  itemsLimit: 1e3
}, FJ = /(auto|scroll)/;
function PO(e, t) {
  return e.parentNode === null ? t : PO(e.parentNode, t.concat([e]));
}
var Hd = function(t, n) {
  return getComputedStyle(t, null).getPropertyValue(n);
}, YJ = function(t) {
  return Hd(t, "overflow") + Hd(t, "overflow-y") + Hd(t, "overflow-x");
}, WJ = function(t) {
  return FJ.test(YJ(t));
};
function d0(e) {
  if (e instanceof HTMLElement || e instanceof SVGElement) {
    for (var t = PO(e.parentNode, []), n = 0; n < t.length; n += 1)
      if (WJ(t[n]))
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
var CO = {
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
function IO() {
  return this.items.length && Fh(this.items[0]) !== "object";
}
var Yh = !1;
if (typeof window < "u") {
  Yh = !1;
  try {
    var UJ = Object.defineProperty({}, "passive", {
      get: function() {
        Yh = !0;
      }
    });
    window.addEventListener("test", null, UJ);
  } catch {
  }
}
let VJ = 0;
var dm = {
  name: "RecycleScroller",
  components: {
    ResizeObserver: cf
  },
  directives: {
    ObserveVisibility: NJ
  },
  props: {
    ...CO,
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
    simpleArray: IO,
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
        id: VJ++,
        index: t,
        used: !0,
        key: r,
        type: a
      }), l = mM({
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
      const n = this.itemSize, r = this.gridItems || 1, a = this.itemSecondarySize || n, s = this.$_computedMinItemSize, l = this.typeField, u = this.simpleArray ? null : this.keyField, f = this.items, h = f.length, d = this.sizes, m = this.$_views, v = this.$_unusedViews, g = this.pool, b = this.itemIndexByKey;
      let O, S, w, x, A;
      if (!h)
        O = S = x = A = w = 0;
      else if (this.$_prerender)
        O = x = 0, S = A = Math.min(this.prerender, f.length), w = null;
      else {
        const P = this.getScroll();
        if (t) {
          let J = P.start - this.$_lastUpdateScrollPosition;
          if (J < 0 && (J = -J), n === null && J < s || J < n)
            return {
              continuous: !0
            };
        }
        this.$_lastUpdateScrollPosition = P.start;
        const j = this.buffer;
        P.start -= j, P.end += j;
        let Y = 0;
        if (this.$refs.before && (Y = this.$refs.before.scrollHeight, P.start -= Y), this.$refs.after) {
          const J = this.$refs.after.scrollHeight;
          P.end += J;
        }
        if (n === null) {
          let J, he = 0, ue = h - 1, ve = ~~(h / 2), xe;
          do
            xe = ve, J = d[ve].accumulator, J < P.start ? he = ve : ve < h - 1 && d[ve + 1].accumulator > P.start && (ue = ve), ve = ~~((he + ue) / 2);
          while (ve !== xe);
          for (ve < 0 && (ve = 0), O = ve, w = d[h - 1].accumulator, S = ve; S < h && d[S].accumulator < P.end; S++)
            ;
          for (S === -1 ? S = f.length - 1 : (S++, S > h && (S = h)), x = O; x < h && Y + d[x].accumulator < P.start; x++)
            ;
          for (A = x; A < h && Y + d[A].accumulator < P.end; A++)
            ;
        } else {
          O = ~~(P.start / n * r);
          const J = O % r;
          O -= J, S = Math.ceil(P.end / n * r), x = Math.max(0, Math.floor((P.start - Y) / n * r)), A = Math.floor((P.end - Y) / n * r), O < 0 && (O = 0), S > h && (S = h), x < 0 && (x = 0), A > h && (A = h), w = Math.ceil(h / r) * n;
        }
      }
      S - O > RJ.itemsLimit && this.itemsLimitError(), this.totalSize = w;
      let E;
      const C = O <= this.$_endIndex && S >= this.$_startIndex;
      if (C)
        for (let P = 0, j = g.length; P < j; P++)
          E = g[P], E.nr.used && (e && (E.nr.index = b[E.item[u]]), (E.nr.index == null || E.nr.index < O || E.nr.index >= S) && this.unuseView(E));
      const M = C ? null : /* @__PURE__ */ new Map();
      let N, F, H;
      for (let P = O; P < S; P++) {
        N = f[P];
        const j = u ? N[u] : N;
        if (j == null)
          throw new Error(`Key is ${j} on item (keyField is '${u}')`);
        if (E = m.get(j), !n && !d[P].size) {
          E && this.unuseView(E);
          continue;
        }
        F = N[l];
        let Y = v.get(F), J = !1;
        if (!E)
          C ? Y && Y.length ? E = Y.pop() : E = this.addView(g, P, N, j, F) : (H = M.get(F) || 0, (!Y || H >= Y.length) && (E = this.addView(g, P, N, j, F), this.unuseView(E, !0), Y = v.get(F)), E = Y[H], M.set(F, H + 1)), m.delete(E.nr.key), E.nr.used = !0, E.nr.index = P, E.nr.key = j, E.nr.type = F, m.set(j, E), J = !0;
        else if (!E.nr.used && (E.nr.used = !0, J = !0, Y)) {
          const he = Y.indexOf(E);
          he !== -1 && Y.splice(he, 1);
        }
        E.item = N, J && (P === f.length - 1 && this.$emit("scroll-end"), P === 0 && this.$emit("scroll-start")), n === null ? (E.position = d[P - 1].accumulator, E.offset = 0) : (E.position = Math.floor(P / r) * n, E.offset = P % r * a);
      }
      return this.$_startIndex = O, this.$_endIndex = S, this.emitUpdate && this.$emit("update", O, S, x, A), clearTimeout(this.$_sortTimer), this.$_sortTimer = setTimeout(this.sortViews, this.updateInterval + 300), {
        continuous: C
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
const BJ = {
  key: 0,
  ref: "before",
  class: "vue-recycle-scroller__slot"
}, HJ = {
  key: 1,
  ref: "after",
  class: "vue-recycle-scroller__slot"
};
function zJ(e, t, n, r, a, s) {
  const l = Ii("ResizeObserver"), u = y0("observe-visibility");
  return rr((R(), G(
    "div",
    {
      class: Qe(["vue-recycle-scroller", {
        ready: a.ready,
        "page-mode": n.pageMode,
        [`direction-${e.direction}`]: !0
      }]),
      onScrollPassive: t[0] || (t[0] = (...f) => s.handleScroll && s.handleScroll(...f))
    },
    [
      e.$slots.before ? (R(), G(
        "div",
        BJ,
        [
          nt(e.$slots, "before")
        ],
        512
        /* NEED_PATCH */
      )) : we("v-if", !0),
      (R(), Ke(Zs(n.listTag), {
        ref: "wrapper",
        style: Fi({ [e.direction === "vertical" ? "minHeight" : "minWidth"]: a.totalSize + "px" }),
        class: Qe(["vue-recycle-scroller__item-wrapper", n.listClass])
      }, {
        default: $e(() => [
          (R(!0), G(
            qe,
            null,
            Rt(a.pool, (f) => (R(), Ke(Zs(n.itemTag), Zt({
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
              default: $e(() => [
                nt(e.$slots, "default", {
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
          nt(e.$slots, "empty")
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["style", "class"])),
      e.$slots.after ? (R(), G(
        "div",
        HJ,
        [
          nt(e.$slots, "after")
        ],
        512
        /* NEED_PATCH */
      )) : we("v-if", !0),
      Te(l, { onNotify: s.handleResize }, null, 8, ["onNotify"])
    ],
    34
    /* CLASS, HYDRATE_EVENTS */
  )), [
    [u, s.handleVisibilityChange]
  ]);
}
dm.render = zJ;
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
    ...CO,
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
    simpleArray: IO,
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
    this.$_updates = [], this.$_undefinedSizes = 0, this.$_undefinedMap = {}, this.$_events = LJ();
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
function jJ(e, t, n, r, a, s) {
  const l = Ii("RecycleScroller");
  return R(), Ke(l, Zt({
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
    default: $e(({ item: u, index: f, active: h }) => [
      nt(e.$slots, "default", ts(Mc({
        item: u.item,
        index: f,
        active: h,
        itemWithSize: u
      })))
    ]),
    before: $e(() => [
      nt(e.$slots, "before")
    ]),
    after: $e(() => [
      nt(e.$slots, "after")
    ]),
    empty: $e(() => [
      nt(e.$slots, "empty")
    ]),
    _: 3
    /* FORWARDED */
  }, 16, ["items", "min-item-size", "direction", "list-tag", "item-tag", "onResize", "onVisible"]);
}
hm.render = jJ;
hm.__file = "src/components/DynamicScroller.vue";
var NO = {
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
NO.__file = "src/components/DynamicScrollerItem.vue";
const GJ = { class: "flex flex-col gap-6" }, qJ = { class: "flex flex-col gap-6 pt-2" }, KJ = { class: "flex justify-start items-center gap-4" }, ZJ = { class: "relative w-fit" }, XJ = { class: "p3-r text-dark-4" }, JJ = ["value"], QJ = { class: "shadow-01 flex items-center py-1 px-2 rounded p3-r text-dark-3" }, eQ = ["onClick"], tQ = {
  key: 0,
  class: "text-dark-5 mx-1"
}, nQ = { class: "flex gap-6" }, rQ = { class: "p3-r text-dark-4" }, iQ = {
  value: "",
  disabled: ""
}, aQ = ["value"], sQ = { class: "flex gap-4" }, oQ = { class: "p3-r text-dark-4" }, lQ = {
  value: "",
  disabled: ""
}, uQ = ["value"], cQ = {
  key: 0,
  class: "flex relative"
}, fQ = ["value"], dQ = {
  key: 0,
  class: "sticky top-0 left-0 pt-4 right-0 items-start bottom-0 w-full h-full flex justify-center bg-dark-3 bg-opacity-50 z-[2]"
}, hQ = { class: "sticky flex flex-col max-h-[95%] bg-light-5 rounded-xs shadow-01 w-4/5 py-4 px-10 h-fit top-[3%]" }, pQ = { class: "flex justify-between" }, mQ = { class: "p2-b flex justify-center mb-3 text-dark-2 mr-auto" }, vQ = {
  key: 0,
  class: "flex gap-4 w-full empty:hidden mb-2 items-center"
}, gQ = { class: "p3-r text-dark-4" }, _Q = ["for"], yQ = ["onUpdate:modelValue", "id"], bQ = { class: "w-2 h-2 rounded-full bg-success-green-4" }, wQ = {
  key: 1,
  class: "flex justify-end gap-4 items-center"
}, OQ = { class: "flex w-fit items-center gap-1 justify-end p3-r text-true-blue-3 mr-4 hover:text-true-blue-2" }, EQ = {
  key: 2,
  class: "h-4 w-4 mt-4 mx-auto animate-spin rounded-full border-2 border-solid border-blue-400 border-t-transparent"
}, DQ = {
  key: 0,
  class: "flex flex-col gap-4 flex-1 overflow-y-auto"
}, SQ = { class: "flex flex-col items-center justify-center gap-4 mt-4" }, xQ = { class: "p2-b text-dark-3" }, TQ = {
  key: 4,
  class: "mx-auto flex w-fit items-center gap-4 mt-8"
}, kQ = { class: "flex flex-col gap-6" }, AQ = { class: "p3-r text-dark-4" }, MQ = {
  value: "",
  disabled: ""
}, $Q = ["value"], PQ = { class: "flex justify-start gap-4 items-center" }, CQ = { class: "p3-r text-dark-4" }, IQ = { class: "shadow-01 flex items-center py-1 px-2 rounded p3-r text-dark-3" }, NQ = ["onClick"], LQ = {
  key: 0,
  class: "text-dark-5 mx-1"
}, RQ = {
  key: 0,
  class: "p3-r text-dark-4"
}, FQ = { class: "flex gap-4 w-full" }, YQ = { class: "flex justify-start items-center gap-4" }, WQ = { class: "p3-r text-dark-4 flex-shrink-0" }, UQ = { class: "flex gap-10 w-full" }, VQ = { class: "flex gap-4 flex-1" }, BQ = { class: "shadow-01 flex items-center py-1 px-2 rounded p3-r text-dark-3" }, HQ = ["onClick"], zQ = {
  key: 0,
  class: "text-dark-5 mx-1"
}, jQ = {
  key: 0,
  class: "flex items-center gap-1 w-24"
}, GQ = { class: "p3-r text-dark-4" }, qQ = {
  key: 0,
  class: "flex justify-center gap-1 flex-col"
}, KQ = { class: "flex gap-4 items-center" }, ZQ = { class: "p3-r text-dark-4" }, XQ = { class: "flex items-center gap-1" }, JQ = {
  key: 1,
  class: "flex gap-4 items-center w-28"
}, _r = "", QQ = /* @__PURE__ */ Re({
  __name: "EventAction",
  setup(e) {
    const { t } = oi.global, n = yt("eventData"), r = yt("initialData"), a = Q(n.value.action ?? {}), s = Q(!!Object.keys(a.value).length), l = Q(!1);
    Ue(l, (ce) => {
      var le, Pe, ke, re, $;
      (le = a.value.params) != null && le.limit || (ke = (Pe = a.value) == null ? void 0 : Pe.params) == null || delete ke.limit, ce || ($ = (re = a.value) == null ? void 0 : re.params) == null || delete $.limit;
    }), Gn(() => {
      var ce, le, Pe, ke, re;
      ((ce = a.value) == null ? void 0 : ce.action) == Ye.SetNewBudget || ((le = a.value) == null ? void 0 : le.action) == Ye.IncreaseBudget || ((Pe = a.value) == null ? void 0 : Pe.action) == Ye.LowerBudget || delete a.value.params, l.value = !isNaN((re = (ke = a.value) == null ? void 0 : ke.params) == null ? void 0 : re.limit);
    }), Ue(
      a,
      (ce) => {
        n.value.action = ce;
      },
      { deep: !0 }
    );
    const u = W(() => g.value == cn.Google ? Fr : Bn), f = {
      [cn.Google]: {
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
      [cn.Facebook]: {
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
    }, h = W(() => {
      var Pe, ke;
      const ce = (Pe = a.value) == null ? void 0 : Pe.client, le = (ke = a.value) == null ? void 0 : ke.adLevel;
      if (ce && le) {
        const re = f[ce];
        if (re) {
          const $ = re[le];
          if ($)
            return $;
        }
      }
      return {};
    }), d = {
      [cn.Google]: {
        [Fr.Campaign]: {
          [Ye.SetNewBudget]: [at.Value],
          [Ye.IncreaseBudget]: [at.Percentage, at.Value],
          [Ye.LowerBudget]: [at.Percentage, at.Value],
          [Ye.OpenProject]: [at.Percentage, at.Value],
          [Ye.SuspendProject]: [at.Percentage, at.Value]
        },
        [Fr.AdGroup]: {
          [Ye.SuspendProject]: [at.Percentage, at.Value]
        },
        [Fr.AdTag]: {
          [Ye.SuspendProject]: [at.Percentage, at.Value]
        }
        // [AdLevelTypeGoogle.Ad]: {
        //   [ActionType.SuspendProject]: [ValueType.Percentage, ValueType.Value],
        // },
      },
      [cn.Facebook]: {
        [Bn.Campaign]: {
          [Ye.SetNewBudget]: [at.Value],
          [Ye.IncreaseBudget]: [at.Percentage, at.Value],
          [Ye.LowerBudget]: [at.Percentage, at.Value],
          [Ye.OpenProject]: [at.Percentage, at.Value],
          [Ye.SuspendProject]: [at.Percentage, at.Value]
        },
        [Bn.AdGroup]: {
          [Ye.SetNewBudget]: [at.Value],
          [Ye.IncreaseBudget]: [at.Percentage, at.Value],
          [Ye.LowerBudget]: [at.Percentage, at.Value],
          [Ye.OpenProject]: [at.Percentage, at.Value],
          [Ye.SuspendProject]: [at.Percentage, at.Value]
        },
        [Bn.AdTag]: {
          [Ye.SuspendProject]: [at.Percentage, at.Value]
        },
        [Bn.Ad]: {
          [Ye.SuspendProject]: [at.Percentage, at.Value]
        }
      }
    }, m = W(() => {
      var ke, re, $;
      const ce = (ke = a.value) == null ? void 0 : ke.client, le = (re = a.value) == null ? void 0 : re.adLevel, Pe = ($ = a.value) == null ? void 0 : $.action;
      if (ce && le && Pe) {
        const k = d[ce];
        if (k) {
          const z = k[le];
          if (z) {
            const fe = z[Pe];
            if (fe)
              return fe;
          }
        }
      }
      return [at.Percentage, at.Value];
    }), v = {
      target: {
        value: ""
      }
    }, g = W(() => a.value.client ? `${a.value.client}` : ""), b = (ce) => {
      a.value.client = Number(ce), delete a.value.target, S(v);
    }, O = W(() => a.value.adLevel ? a.value.adLevel : ""), S = (ce) => {
      a.value.adLevel = Number(ce.target.value), delete a.value.action, delete a.value.target, x(v);
    }, w = W(() => a.value.targetType ? a.value.targetType : ""), x = (ce) => {
      a.value.targetType = Number(ce.target.value);
    }, A = W(() => a.value.action ? a.value.action : ""), E = (ce) => {
      a.value.action = Number(ce.target.value);
    }, C = W(() => {
      var ce;
      return (ce = a.value) != null && ce.params || (a.value.params = {}), a.value.params.budgetType ? a.value.params.budgetType : "";
    }), M = (ce) => a.value.params.budgetType = ce, N = W(() => {
      var ce;
      return (ce = a.value) != null && ce.params || (a.value.params = {}), a.value.params.valueType ? a.value.params.valueType : "";
    }), F = (ce) => {
      a.value.params.valueType = ce;
    }, H = Q(!1);
    Wr("addTarget", (ce) => {
      var Pe;
      (Pe = a.value) != null && Pe.target || (a.value.target = []);
      const le = a.value.target.findIndex(
        (ke) => ke === ce.id
      );
      le === -1 ? a.value.target.push(ce.id) : a.value.target.splice(le, 1);
    });
    const j = Q(), Y = async () => {
      const ce = await fJ({
        method: "get",
        url: `${r.apiUrl}/heybear/api/automation/platform-target?client=${g.value}&adLevel=${O.value}`,
        withCredentials: !0,
        headers: {
          Authorization: r.token
        }
      });
      j.value = ce.data.data, lt.value = Ct(j.value);
    }, J = Q(!1), he = Q([]), ue = () => {
      a.value.target = [];
    }, ve = async () => {
      H.value = !0, J.value = !0, await Y(), J.value = !1;
    }, xe = yt("lockScroll");
    Ue(H, (ce) => {
      xe.value = ce, ce || (Fe.value = "");
    });
    const Fe = Q(""), Ne = Q(), ie = W(() => {
      var ce;
      return (ce = a.value) != null && ce.target || (a.value.target = []), a.value.target.length > 0 && a.value.target.length == Ne.value;
    }), Ae = () => {
      var Pe;
      const ce = he.value, le = (ke) => {
        for (const re of ke)
          re.children && re.children.length > 0 ? le(re.children) : a.value.target.push(re.id);
      };
      (Pe = a.value) != null && Pe.target || (a.value.target = []), a.value.target.length ? a.value.target = [] : (a.value.target = [], le(ce));
    }, lt = Q([]);
    function Ct(ce) {
      const le = [];
      function Pe(ke, re) {
        if (ke.type !== 1 && ke.type !== 5 && (le[re - 1] || (le[re - 1] = {
          label: ke.type,
          status: !1
        }), le[re - 1].status = !0), ke.children && ke.children.length > 0)
          for (const $ of ke.children)
            Pe($, re + 1);
      }
      return ce.forEach((ke) => {
        Pe(ke, 1);
      }), le.filter((ke) => ke !== void 0);
    }
    const Oe = Q(!1), st = () => {
      s.value = !1, a.value = {}, En(() => {
        delete n.value.action;
      });
    }, Je = W(() => {
      const ce = g.value, le = a.value.adLevel, Pe = C.value;
      if (Pe === "")
        return { show: !1 };
      const ke = ce === cn.Google && le === Fr.Campaign, re = ce === cn.Facebook && le === Bn.Campaign, $ = ce === cn.Facebook && le === Bn.AdGroup, k = ke || re || $, z = Pe === Ga.DailyBudget ? t("日預算") : t("總預算"), fe = `${cn[ce]}${u.value[le]}`, ge = k ? `${t("若{clientAndAdLevel}設定為{paramsBudgetTypeValue}，則不會變更", {
        clientAndAdLevel: fe,
        paramsBudgetTypeValue: Pe !== _r ? z : ""
      })}` : "";
      return { show: k, msg: ge };
    });
    zr(() => {
      Oe.value = !0;
    });
    const xt = () => {
      const ce = Fe.value.trim().toLowerCase();
      function le(re) {
        let $ = [];
        for (const k of re) {
          let z = !1;
          if (lt.value.forEach((fe) => {
            fe.label == k.type && fe.status == k.enabled && !k.enabled && (z = !0);
          }), !z && ((!k.children || k.children.length === 0) && $.push(k), k.children && k.children.length > 0)) {
            const fe = le(k.children);
            fe.length > 0 && $.push({
              id: k.id,
              name: k.name,
              children: fe,
              enabled: k.enabled
            });
          }
        }
        return $;
      }
      const Pe = [];
      for (const re of j.value)
        if (re.children) {
          const $ = le(re.children);
          $.length > 0 && Pe.push({
            id: re.id,
            name: re.name,
            type: re.type,
            children: $
          });
        } else
          Pe.push({
            id: re.id,
            name: re.name,
            type: re.type
          });
      function ke(re, $) {
        Ne.value = 0;
        function k(ge) {
          !ge.children || ge.children.length === 0 ? Ne.value++ : ge.children.forEach((je) => k(je));
        }
        function z(ge, je) {
          const Yt = { ...ge }, Et = Yt.children;
          if (Yt.name.toLowerCase().includes(je)) {
            const Tt = (Et || []).filter(
              (rn) => rn.name.toLowerCase().includes(je)
            );
            return Tt.length > 0 && (Yt.children = Tt), Yt;
          } else if (Et) {
            const Tt = Et.map((rn) => z(rn, je)).filter(Boolean);
            if (Tt.length > 0)
              return Yt.children = Tt, Yt;
          }
          return null;
        }
        const fe = re.map((ge) => z(ge, $)).filter(Boolean);
        return fe.forEach((ge) => k(ge)), fe;
      }
      he.value = ce ? ke(Pe, ce) : Pe;
    };
    return pG(
      () => Fe,
      () => {
        xt();
      },
      { deep: !0, debounce: 500 }
    ), Ue(
      () => [lt, j],
      () => {
        xt();
      },
      { deep: !0 }
    ), (ce, le) => y(s) ? (R(), Ke(Gu, {
      key: 1,
      title: y(t)("動作"),
      icon: "PhNavigationArrow",
      id: "action"
    }, {
      default: $e(() => {
        var Pe, ke;
        return [
          q("div", GJ, [
            q("div", qJ, [
              q("div", {
                class: "cursor-pointer text-dark-4 absolute bottom-4 right-3 hover:text-dark-3 transition-all p3-r",
                onClick: st
              }, [
                Te(y(lL), {
                  size: "18",
                  weight: "bold"
                })
              ]),
              q("label", KJ, [
                q("div", ZJ, [
                  q("span", XJ, Se(y(t)("平台")), 1),
                  q("input", {
                    type: "text",
                    class: "opacity-0 absolute left-0 top-0 pointer-events-none",
                    required: "",
                    value: y(g)
                  }, null, 8, JJ)
                ]),
                q("div", QJ, [
                  (R(!0), G(qe, null, Rt(y(cn), (re, $, k) => (R(), G("div", {
                    class: "flex",
                    key: $
                  }, [
                    Number.isInteger(re) ? we("", !0) : (R(), G(qe, { key: 0 }, [
                      q("span", {
                        class: Qe(["cursor-pointer hover:drop-shadow-md", [
                          { "!text-dark-5 p3-r": y(g) == _r },
                          y(g) === $ ? "text-true-blue-3 drop-shadow-sm p3-b" : "text-dark-5 "
                        ]]),
                        onClick: (z) => b($)
                      }, Se(re), 11, eQ),
                      k < Object.keys(y(cn)).filter((z) => isNaN(Number(z))).length - 1 ? (R(), G("div", tQ, " | ")) : we("", !0)
                    ], 64))
                  ]))), 128))
                ])
              ]),
              q("div", nQ, [
                q("label", {
                  class: Qe(["flex justify-start items-center gap-4", { "pointer-events-none": y(g) == _r }])
                }, [
                  q("span", rQ, Se(y(t)("層級")), 1),
                  rr(q("select", {
                    class: Qe(["p3-b text-true-blue-3 min-w-[5rem] w-20 flex cursor-pointer items-center justify-center gap-4 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50", [y(O) != _r ? "!w-fit" : "!text-dark-5 !p3-r"]]),
                    "onUpdate:modelValue": le[1] || (le[1] = (re) => an(O) ? O.value = re : null),
                    onChange: S,
                    required: ""
                  }, [
                    q("option", iQ, Se(y(t)("請選擇")), 1),
                    (R(!0), G(qe, null, Rt(y(u), (re, $) => (R(), G(qe, { key: $ }, [
                      !Number.isInteger(re) && y(g) != _r ? (R(), G("option", {
                        key: 0,
                        value: $
                      }, Se(y(t)(`${y(cn)[y(g)]}${re}`)), 9, aQ)) : we("", !0)
                    ], 64))), 128))
                  ], 34), [
                    [Vs, y(O)]
                  ])
                ], 2),
                q("div", sQ, [
                  q("label", {
                    class: Qe(["flex justify-start items-center gap-4", { "pointer-events-none": y(O) == _r }])
                  }, [
                    q("span", oQ, Se(y(t)("項目")), 1),
                    rr(q("select", {
                      class: Qe(["p3-b text-true-blue-3 min-w-[5rem] w-20 flex cursor-pointer items-center justify-center gap-4 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50", [
                        y(w) != _r ? "!w-fit" : "!text-dark-5 !p3-r"
                      ]]),
                      "onUpdate:modelValue": le[2] || (le[2] = (re) => an(w) ? w.value = re : null),
                      onChange: x,
                      required: ""
                    }, [
                      q("option", lQ, Se(y(t)("請選擇")), 1),
                      (R(!0), G(qe, null, Rt(y(Da), (re, $) => (R(), G(qe, { key: $ }, [
                        Number.isInteger(re) ? we("", !0) : (R(), G("option", {
                          key: 0,
                          value: $
                        }, Se(y(t)(re)), 9, uQ))
                      ], 64))), 128))
                    ], 34), [
                      [Vs, y(w)]
                    ])
                  ], 2),
                  y(w) === y(Da).ForID ? (R(), G("div", cQ, [
                    y(w) === y(Da).ForID ? (R(), G("span", {
                      key: 0,
                      class: Qe(["p3-b w-fit flex cursor-pointer items-center justify-center z-[2]", [
                        y(a).target && y(a).target.length ? " text-true-blue-3" : "text-red-2 hover:text-red-1"
                      ]]),
                      onClick: ve
                    }, Se(y(a).target && y(a).target.length ? `${y(t)("已選{count}個項目", {
                      count: y(a).target.length
                    })}` : y(t)("未選擇")), 3)) : we("", !0),
                    q("input", {
                      type: "text",
                      class: "opacity-0 absolute left-0 top-0",
                      required: "",
                      value: (Pe = y(a)) != null && Pe.target && (ke = y(a)) != null && ke.target.length ? "123" : ""
                    }, null, 8, fQ)
                  ])) : we("", !0)
                ])
              ])
            ]),
            y(Oe) ? (R(), Ke(_0, {
              key: 0,
              to: "#editor-container-outer"
            }, [
              y(H) ? (R(), G("div", dQ, [
                q("div", hQ, [
                  q("div", pQ, [
                    q("span", mQ, Se(y(t)("請選擇目標")), 1),
                    Te(y(dh), {
                      class: "text-dark-3 cursor-pointer hover:text-dark-2 absolute top-4 right-4",
                      weight: "bold",
                      onClick: le[3] || (le[3] = (re) => H.value = !1)
                    })
                  ]),
                  Te(cl, {
                    modelValue: y(Fe),
                    "onUpdate:modelValue": le[4] || (le[4] = (re) => an(Fe) ? Fe.value = re : null),
                    placeholder: y(t)("搜尋"),
                    class: "w-full mr-auto mb-4"
                  }, null, 8, ["modelValue", "placeholder"]),
                  !y(J) && y(lt).length ? (R(), G("div", vQ, [
                    q("span", gQ, Se(y(t)("篩選")), 1),
                    (R(!0), G(qe, null, Rt(y(lt), (re) => (R(), G("label", {
                      class: "p3-r flex cursor-pointer items-center gap-1 rounded-md bg-light-3 px-2 py-0.5 text-dark-4 hover:shadow-01",
                      key: re.label,
                      for: re.label
                    }, [
                      rr(q("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": ($) => re.status = $,
                        id: re.label,
                        class: "hidden",
                        onChange: ue
                      }, null, 40, yQ), [
                        [w0, re.status]
                      ]),
                      rr(q("div", bQ, null, 512), [
                        [O0, !re.status]
                      ]),
                      us(" " + Se(y(t)(
                        `${y(cn)[y(g)]}${re.status ? "On" : "Off"}${re.label}`
                      )), 1)
                    ], 8, _Q))), 128))
                  ])) : we("", !0),
                  y(J) ? we("", !0) : (R(), G("div", wQ, [
                    q("div", OQ, [
                      q("label", {
                        class: "cursor-pointer",
                        onClick: Ae
                      }, Se(y(ie) ? y(t)("取消全選") : y(t)("全選")), 1)
                    ])
                  ])),
                  y(J) ? (R(), G("div", EQ)) : (R(), G(qe, { key: 3 }, [
                    y(he).length ? (R(), Ke(y(hm), {
                      key: 1,
                      ref: "scroller",
                      items: y(he),
                      "min-item-size": 28,
                      class: "scroller"
                    }, {
                      default: $e(({ item: re, index: $, active: k }) => [
                        Te(y(NO), {
                          item: re,
                          active: k,
                          "size-dependencies": [re.children],
                          "data-index": $,
                          "data-active": k
                        }, {
                          default: $e(() => {
                            var z;
                            return [
                              Te(kO, {
                                target: re,
                                targets: ((z = y(a)) == null ? void 0 : z.target) ?? []
                              }, null, 8, ["target", "targets"])
                            ];
                          }),
                          _: 2
                        }, 1032, ["item", "active", "size-dependencies", "data-index", "data-active"])
                      ]),
                      _: 1
                    }, 8, ["items"])) : (R(), G("div", DQ, [
                      q("div", SQ, [
                        Te(y(WN), {
                          size: 48,
                          class: "text-dark-4"
                        }),
                        q("p", xQ, Se(y(t)("No Data")), 1)
                      ])
                    ]))
                  ], 64)),
                  y(J) ? we("", !0) : (R(), G("div", TQ, [
                    q("div", {
                      class: "p3-r flex cursor-pointer items-center gap-1 rounded bg-true-blue-2 border border-transparent px-4 py-1.5 text-light-5 hover:bg-true-blue-3 transition-all",
                      onClick: le[5] || (le[5] = (re) => H.value = !1)
                    }, Se(y(t)("確定")), 1)
                  ]))
                ])
              ])) : we("", !0)
            ])) : we("", !0),
            q("div", kQ, [
              q("label", {
                class: Qe(["flex justify-start items-center gap-4", { "pointer-events-none": y(w) == _r }])
              }, [
                q("span", AQ, Se(y(t)("執行")), 1),
                rr(q("select", {
                  class: Qe(["p3-b text-true-blue-3 min-w-[5rem] w-20 flex cursor-pointer items-center justify-center gap-4 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50", [
                    y(A) != _r ? "!w-fit" : "!text-dark-5 !p3-r"
                  ]]),
                  "onUpdate:modelValue": le[6] || (le[6] = (re) => an(A) ? A.value = re : null),
                  onChange: E,
                  required: ""
                }, [
                  q("option", MQ, Se(y(t)("請選擇")), 1),
                  (R(!0), G(qe, null, Rt(y(h), (re, $) => (R(), G("option", {
                    key: $,
                    value: re
                  }, Se(y(t)($)), 9, $Q))), 128))
                ], 34), [
                  [Vs, y(A)]
                ])
              ], 2),
              y(a).action == y(Ye).SetNewBudget || y(a).action == y(Ye).IncreaseBudget || y(a).action == y(Ye).LowerBudget ? (R(), G(qe, { key: 0 }, [
                q("label", PQ, [
                  q("span", CQ, Se(y(t)("類型")), 1),
                  q("div", IQ, [
                    (R(!0), G(qe, null, Rt(y(Ga), (re, $, k) => (R(), G("div", {
                      class: "flex",
                      key: $
                    }, [
                      Number.isInteger(re) ? we("", !0) : (R(), G(qe, { key: 0 }, [
                        q("span", {
                          class: Qe(["cursor-pointer hover:drop-shadow-md", [
                            { "!text-dark-5 p3-r": y(C) == _r },
                            y(C) == y(Ga)[$] ? "text-true-blue-3 drop-shadow-sm p3-b" : "text-dark-5 "
                          ]]),
                          onClick: (z) => M(y(Ga)[$])
                        }, Se(y(t)(re)), 11, NQ),
                        k < Object.keys(y(Ga)).filter(
                          (z) => isNaN(Number(z))
                        ).length - 1 ? (R(), G("div", LQ, " | ")) : we("", !0)
                      ], 64))
                    ]))), 128))
                  ]),
                  y(Je).show ? (R(), G("span", RQ, Se(y(Je).msg), 1)) : we("", !0)
                ]),
                q("div", FQ, [
                  q("div", YQ, [
                    q("span", WQ, Se(y(t)("調整")), 1),
                    q("div", UQ, [
                      q("div", VQ, [
                        q("div", BQ, [
                          (R(!0), G(qe, null, Rt(y(m), (re, $) => (R(), G("div", {
                            class: "flex",
                            key: re
                          }, [
                            Number.isInteger(re) ? we("", !0) : (R(), G(qe, { key: 0 }, [
                              q("span", {
                                class: Qe(["cursor-pointer hover:drop-shadow-md", [
                                  {
                                    "!text-dark-5 p3-r": y(N) == _r
                                  },
                                  y(N) == re ? "text-true-blue-3 drop-shadow-sm p3-b" : "text-dark-5 "
                                ]]),
                                onClick: (k) => F(re)
                              }, Se(y(t)(`action${re}`)), 11, HQ),
                              $ < y(m).length - 1 ? (R(), G("div", zQ, " | ")) : we("", !0)
                            ], 64))
                          ]))), 128))
                        ]),
                        y(N) != _r ? (R(), G("label", jQ, [
                          Te(cl, {
                            modelValue: y(a).params.value,
                            "onUpdate:modelValue": le[7] || (le[7] = (re) => y(a).params.value = re),
                            inputClass: "text-true-blue-3",
                            type: "number",
                            required: !0
                          }, null, 8, ["modelValue"]),
                          q("span", GQ, Se(y(a).params.valueType === y(at).Percentage ? "%" : y(t)("元")), 1)
                        ])) : we("", !0)
                      ])
                    ])
                  ]),
                  y(a).action == y(Ye).IncreaseBudget || y(a).action == y(Ye).LowerBudget ? (R(), G("div", qQ, [
                    q("div", KQ, [
                      q("span", ZQ, Se(y(a).action == y(Ye).IncreaseBudget ? y(t)("預算上限") : y(t)("預算下限")), 1),
                      q("div", XQ, [
                        y(l) ? we("", !0) : (R(), G("div", {
                          key: 0,
                          class: Qe(["p3-b text-true-blue-3 w-fit flex cursor-pointer items-center justify-center gap-4 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50", { "!text-dark-5 !p3-r": !y(l) }]),
                          onClick: le[8] || (le[8] = (re) => l.value = !0)
                        }, Se(y(t)("無")), 3)),
                        y(l) ? (R(), G("div", JQ, [
                          Te(cl, {
                            modelValue: y(a).params.limit,
                            "onUpdate:modelValue": le[9] || (le[9] = (re) => y(a).params.limit = re),
                            inputClass: "text-true-blue-3",
                            type: "number",
                            required: !0
                          }, null, 8, ["modelValue"])
                        ])) : we("", !0),
                        y(l) ? (R(), Ke(y(dh), {
                          key: 2,
                          onClick: le[10] || (le[10] = (re) => l.value = !1),
                          weight: "bold",
                          class: "text-dark-4 hover:text-dark-3 p3-b cursor-pointer"
                        })) : we("", !0)
                      ])
                    ])
                  ])) : we("", !0)
                ])
              ], 64)) : we("", !0)
            ])
          ])
        ];
      }),
      _: 1
    }, 8, ["title"])) : (R(), G("div", {
      key: 0,
      class: "p3-b cursor-pointer rounded shadow-01 hover:shadow-02 transition-all bg-light-5 py-1 px-2 text-dark-4 flex items-center justify-center",
      onClick: le[0] || (le[0] = (Pe) => s.value = !0)
    }, " + " + Se(y(t)("加入動作")), 1));
  }
}), eee = { class: "flex flex-1 items-center justify-start gap-4" }, tee = { class: "p3-r text-dark-4" }, nee = {
  value: "",
  disabled: ""
}, ree = ["value"], iee = /* @__PURE__ */ Re({
  __name: "Notification",
  setup(e) {
    const { t } = oi.global, n = yt("eventData"), r = Q(
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
    ), (a, s) => (R(), G("div", null, [
      q("label", eee, [
        q("span", tee, Se(y(t)("以電子郵件寄出結果")), 1),
        rr(q("select", {
          class: "p3-b text-true-blue-3 flex cursor-pointer items-center justify-center gap-4 rounded shadow-01 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
          "onUpdate:modelValue": s[0] || (s[0] = (l) => y(r).email = l)
        }, [
          q("option", nee, Se(y(t)("請選擇")), 1),
          (R(!0), G(qe, null, Rt(y(fl), (l, u) => (R(), G(qe, { key: u }, [
            Number.isInteger(l) ? we("", !0) : (R(), G("option", {
              key: 0,
              value: Number(u)
            }, Se(y(t)(`mail${l}`)), 9, ree))
          ], 64))), 128))
        ], 512), [
          [Vs, y(r).email]
        ])
      ])
    ]));
  }
}), aee = ["onSubmit"], see = { class: "space-y-1" }, oee = {
  key: 0,
  class: "text-red-1"
}, lee = 100, uee = /* @__PURE__ */ Re({
  __name: "TCEventEditorApp",
  props: {
    initial: {},
    data: {}
  },
  emits: ["update:data"],
  setup(e, { expose: t, emit: n }) {
    const r = e, { t: a } = oi.global;
    Wr("initialData", r.initial), Ue(
      r.initial,
      (g) => {
        oi.global.locale.value = g.locale;
      },
      { deep: !0, immediate: !0 }
    );
    const s = W(() => JSON.parse(r.data || "{}")), l = (g) => {
      const b = Object.fromEntries(
        Object.entries(g).filter(([O, S]) => S !== null)
      );
      return JSON.stringify(b, null, 4);
    }, u = Q([]), f = (g) => {
      g.preventDefault(), n("update:data", l(s.value));
    }, h = () => {
      var b;
      const g = document.getElementById("editor-container");
      if (g) {
        for (const O of g.querySelectorAll("[required]"))
          if (O.getAttribute("required") !== null && !O.reportValidity())
            throw new Error("未填寫完畢");
        (b = d.value) == null || b.click();
      }
    };
    Wr("eventData", s), Wr("checkDataValid", u);
    const d = Q(), m = Q(!1);
    return Wr("lockScroll", m), (async () => {
    })(), t({
      saveData: h
    }), (g, b) => r.data ? (R(), G("div", {
      key: 0,
      class: Qe([y(m) ? "overflow-y-hidden" : "overflow-y-auto "]),
      id: "editor-container-outer"
    }, [
      q("form", {
        class: "flex flex-col gap-5 relative p-5 h-fit text-dark-1 min-h-full w-full",
        id: "editor-container",
        onSubmit: xa(f, ["prevent"])
      }, [
        Te(Gu, {
          title: y(a)("規則名稱"),
          icon: "PhNotepad",
          id: "name"
        }, {
          default: $e(() => [
            q("div", see, [
              Te(cl, {
                modelValue: y(s).title,
                "onUpdate:modelValue": b[0] || (b[0] = (O) => y(s).title = O),
                inputClass: "text-true-blue-3",
                maxLength: lee,
                placeholder: y(a)("ex: 廣告開啟規則"),
                required: !0
              }, null, 8, ["modelValue", "placeholder"])
            ])
          ]),
          _: 1
        }, 8, ["title"]),
        Te(Gu, {
          title: y(a)("執行時間"),
          icon: "PhCalendarCheck",
          id: "time"
        }, {
          default: $e(() => [
            Te(jZ, {
              frequency: y(s).frequency,
              "onUpdate:frequency": b[1] || (b[1] = (O) => y(s).frequency = O),
              interval: y(s).interval,
              "onUpdate:interval": b[2] || (b[2] = (O) => y(s).interval = O)
            }, null, 8, ["frequency", "interval"])
          ]),
          _: 1
        }, 8, ["title"]),
        Te(Gu, {
          title: y(a)("通知"),
          icon: "PhBellRinging",
          id: "notification"
        }, {
          default: $e(() => [
            Te(iee)
          ]),
          _: 1
        }, 8, ["title"]),
        Te(QQ),
        y(u).length ? (R(), G("span", oee, Se(y(a)("資料未填寫完整")), 1)) : we("", !0),
        q("button", {
          ref_key: "submitBtn",
          ref: d,
          class: "p-2 px-3 rounded bg-slate-100 hover:bg-sky-500 hover:text-white hidden"
        }, Se(y(a)("保存")), 513)
      ], 40, aee)
    ], 2)) : we("", !0);
  }
});
const cee = /* @__PURE__ */ uo(uee, [["__scopeId", "data-v-31c2877e"]]);
function Eee(e) {
  if (!e)
    return "";
  const { t } = oi.global;
  let n, r;
  return e.client === cn.Google ? r = Fr : r = Bn, e.targetType === Da.ForAll && (n = t("所有的") + t(`${cn[e.client]}${r[e.adLevel]}`)), e.targetType === Da.ForActive && (n = t("已開啟的") + t(`${cn[e.client]}${r[e.adLevel]}`)), e.targetType === Da.ForID && (n = `${e.target.length}${t("個")}` + t(`${cn[e.client]}${r[e.adLevel]}`)), n;
}
function Dee(e) {
  const { t } = oi.global;
  return e != null && e.email ? t(`mail${fl[e.email]}`) : "";
}
const fee = (e) => {
  e.component("TCEventEditorApp", cee);
}, See = {
  install: fee
};
export {
  dh as F,
  z1 as G,
  cee as T,
  WN as a,
  lL as b,
  Eee as c,
  Dee as d,
  pee as e,
  jP as g,
  See as i,
  hee as s
};
