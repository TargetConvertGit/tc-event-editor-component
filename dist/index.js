import { defineComponent as Se, openBlock as D, createElementBlock as k, createElementVNode as O, toDisplayString as pe, ref as ne, watchEffect as Xs, computed as A, watch as Ce, onBeforeUnmount as Sd, Fragment as re, unref as g, renderList as Te, createBlock as Ue, createCommentVNode as X, withDirectives as Ke, isRef as Ie, vModelSelect as at, reactive as Js, onMounted as Vn, onUnmounted as Kr, toRefs as Pd, h as qn, provide as En, inject as Ye, resolveDynamicComponent as su, normalizeProps as ou, mergeProps as un, renderSlot as At, normalizeClass as Xe, normalizeStyle as Lr, withKeys as Qo, createVNode as _e, withCtx as tt, nextTick as Zn, toRef as us, resolveComponent as An, Transition as iu, createTextVNode as qr, withModifiers as lu, guardReactiveProps as Ld, resolveDirective as Md, toHandlers as xd, vModelCheckbox as Qs, getCurrentInstance as Yr, effectScope as Rd, shallowRef as Fd, onBeforeMount as Yd, Text as Vd, Teleport as uu, pushScopeId as Ud, popScopeId as jd } from "vue";
let cu = "", du = "";
function nL(e) {
  cu = e;
}
function rL(e) {
  du = e;
}
function ya() {
  return cu;
}
function ba() {
  return du;
}
class Bd {
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
var eo = /* @__PURE__ */ ((e) => (e[e.None = -1] = "None", e[e.All = 1] = "All", e[e.Error = 2] = "Error", e))(eo || {}), fu = /* @__PURE__ */ ((e) => (e[e.Off = 0] = "Off", e[e.On = 1] = "On", e))(fu || {}), Ge = /* @__PURE__ */ ((e) => (e[e.Google = 1] = "Google", e[e.Facebook = 2] = "Facebook", e))(Ge || {}), _t = /* @__PURE__ */ ((e) => (e[e.Campaign = 2] = "Campaign", e[e.AdGroup = 3] = "AdGroup", e[e.Ad = 4] = "Ad", e[e.AdTag = 5] = "AdTag", e))(_t || {}), mt = /* @__PURE__ */ ((e) => (e[e.Campaign = 2] = "Campaign", e[e.AdGroup = 3] = "AdGroup", e[e.Ad = 4] = "Ad", e[e.AdTag = 5] = "AdTag", e))(mt || {}), $t = /* @__PURE__ */ ((e) => (e[e.ForAll = 1] = "ForAll", e[e.ForID = 2] = "ForID", e[e.ForActive = 3] = "ForActive", e))($t || {}), Xn = /* @__PURE__ */ ((e) => (e[e.Account = 1] = "Account", e[e.Campaign = 2] = "Campaign", e[e.AdGroup = 3] = "AdGroup", e))(Xn || {}), Jn = /* @__PURE__ */ ((e) => (e[e.Account = 1] = "Account", e[e.Campaign = 2] = "Campaign", e[e.AdGroup = 3] = "AdGroup", e))(Jn || {}), xe = /* @__PURE__ */ ((e) => (e[e.Never = -1] = "Never", e[e.Hour = 1] = "Hour", e[e.Day = 2] = "Day", e[e.Week = 3] = "Week", e[e.Month = 4] = "Month", e[e.Annual = 5] = "Annual", e))(xe || {}), Ot = /* @__PURE__ */ ((e) => (e[e.Sunday = 0] = "Sunday", e[e.Monday = 1] = "Monday", e[e.Tuesday = 2] = "Tuesday", e[e.Wednesday = 3] = "Wednesday", e[e.Thursday = 4] = "Thursday", e[e.Friday = 5] = "Friday", e[e.Saturday = 6] = "Saturday", e[e.Weekday = -1] = "Weekday", e[e.Weekend = -2] = "Weekend", e))(Ot || {}), tn = /* @__PURE__ */ ((e) => (e[e.First = 1] = "First", e[e.Second = 2] = "Second", e[e.Third = 3] = "Third", e[e.Fourth = 4] = "Fourth", e[e.Fifth = 5] = "Fifth", e[e.Last = -1] = "Last", e))(tn || {}), pt = /* @__PURE__ */ ((e) => (e[e.January = 1] = "January", e[e.February = 2] = "February", e[e.March = 3] = "March", e[e.April = 4] = "April", e[e.May = 5] = "May", e[e.June = 6] = "June", e[e.July = 7] = "July", e[e.August = 8] = "August", e[e.September = 9] = "September", e[e.October = 10] = "October", e[e.November = 11] = "November", e[e.December = 12] = "December", e))(pt || {}), ie = /* @__PURE__ */ ((e) => (e[e.SetNewBudget = 1] = "SetNewBudget", e[e.IncreaseBudget = 2] = "IncreaseBudget", e[e.LowerBudget = 3] = "LowerBudget", e[e.OpenProject = 4] = "OpenProject", e[e.SuspendProject = 5] = "SuspendProject", e[e.None = -1] = "None", e))(ie || {}), wa = /* @__PURE__ */ ((e) => (e.DailyBudget = "dailyBudget", e.TotalBudget = "totalBudget", e))(wa || {}), he = /* @__PURE__ */ ((e) => (e.Value = "value", e.Percentage = "percentage", e))(he || {}), ve = /* @__PURE__ */ ((e) => (e.BudgetRemaining = "accountBudget", e.BudgetCap = "budgetCap", e.Clicks = "clicks", e.Impressions = "impressions", e.Cpc = "cpc", e.Spend = "cost", e.Conversions = "conversions", e.ConversionSpend = "conversionsValue", e.ReturnOnADSpending = "roas", e))(ve || {}), Bt = /* @__PURE__ */ ((e) => (e[e.Today = 1] = "Today", e[e.Yesterday = 2] = "Yesterday", e[e.Last3Days = 3] = "Last3Days", e[e.Last7Days = 4] = "Last7Days", e[e.ThisMonth = 5] = "ThisMonth", e[e.SpecifiedTime = -1] = "SpecifiedTime", e))(Bt || {}), to = /* @__PURE__ */ ((e) => (e.MoreThan = ">", e.GreaterOrEqualTo = ">=", e.Equal = "==", e.LessThan = "<", e.LessThanOrEqualTo = "<=", e))(to || {}), Ba = /* @__PURE__ */ ((e) => (e[e.AbnormalityOrError = 1] = "AbnormalityOrError", e[e.Error = 2] = "Error", e[e.None = -1] = "None", e))(Ba || {});
const aL = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ActionType: ie,
  AdLevelTypeFacebook: mt,
  AdLevelTypeGoogle: _t,
  BudgetType: wa,
  ClientType: Ge,
  ConditionAdLevelTypeFacebook: Jn,
  ConditionAdLevelTypeGoogle: Xn,
  ConditionType: ve,
  DateRangeType: Bt,
  EmailNotify: eo,
  EventActionTargetType: $t,
  EventHelper: Bd,
  FrequencyType: xe,
  MonthType: pt,
  OperationType: to,
  ToggleNotify: fu,
  ValueType: he,
  WeekOrdinalWordsType: tn,
  WeekdaysType: Ot,
  emailType: Ba
}, Symbol.toStringTag, { value: "Module" })), Hd = { class: "flex" }, Wd = ["checked", "id"], Gd = ["for"], zd = /* @__PURE__ */ Se({
  __name: "CheckBox",
  props: {
    label: {},
    checked: { type: Boolean },
    fieldId: {}
  },
  emits: ["update:checked"],
  setup(e, { emit: t }) {
    return (n, r) => (D(), k("div", Hd, [
      O("input", {
        onInput: r[0] || (r[0] = (a) => n.$emit("update:checked", a.target.checked)),
        type: "checkbox",
        checked: n.checked,
        id: n.fieldId,
        class: "hidden"
      }, null, 40, Wd),
      O("label", {
        for: n.fieldId,
        class: "p3-r cursor-pointer rounded border hover:bg-light-4 border-dark-5 px-1 py-0.5 flex justify-center items-center text-dark-2 min-w-[1.75rem] min-h-[1.75rem]"
      }, pe(n.label), 9, Gd)
    ]));
  }
});
const no = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, a] of t)
    n[r] = a;
  return n;
}, ei = /* @__PURE__ */ no(zd, [["__scopeId", "data-v-8bd665ed"]]), Kd = {
  key: 0,
  class: "flex gap-1.5 flex-wrap"
}, qd = {
  key: 1,
  class: "flex gap-2 items-center"
}, Zd = /* @__PURE__ */ O("span", { class: "p3-r" }, "指定", -1), Xd = ["value"], Jd = { class: "flex gap-4 flex-wrap" }, Qd = /* @__PURE__ */ Se({
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
    const n = e, r = ne(n.monthDate), a = ne(n.weekOrdinal), s = ne(n.weekdays), o = ne(n.yearMonths), i = (y, f, b = !1) => {
      if (b) {
        f.findIndex((T) => T === y) === -1 ? f.push(y) : f.splice(f.indexOf(y), 1), f.sort((T, w) => T - w);
        return;
      }
      f.value.findIndex((T) => T === y) === -1 ? f.value.push(y) : f.value.splice(f.value.indexOf(y), 1), f.value.sort((T, w) => T - w);
    };
    Xs(() => {
      t(
        "update:monthDate",
        r.value.length ? r.value : null
      ), t(
        "update:weekOrdinal",
        a.value.length ? a.value : null
      ), t(
        "update:weekdays",
        s.value.length ? s.value : null
      ), t(
        "update:yearMonths",
        o.value.length ? o.value : null
      );
    });
    const l = ne([
      { name: "星期日", id: Ot.Sunday },
      { name: "星期一", id: Ot.Monday },
      { name: "星期二", id: Ot.Tuesday },
      { name: "星期三", id: Ot.Wednesday },
      { name: "星期四", id: Ot.Thursday },
      { name: "星期五", id: Ot.Friday },
      { name: "星期六", id: Ot.Saturday },
      { name: "平日", id: Ot.Weekday },
      { name: "週末", id: Ot.Weekend }
    ]), c = ne([
      { name: "第一週", id: tn.First },
      { name: "第二週", id: tn.Second },
      { name: "第三週", id: tn.Third },
      { name: "第四週", id: tn.Fourth },
      { name: "第五週", id: tn.Fifth },
      { name: "最後一週", id: tn.Last }
    ]), u = ne([
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
      { name: "最後一天", id: -1 }
    ]), d = ne([
      {
        name: "一月",
        id: pt.January
      },
      {
        name: "二月",
        id: pt.February
      },
      {
        name: "三月",
        id: pt.March
      },
      {
        name: "四月",
        id: pt.April
      },
      {
        name: "五月",
        id: pt.May
      },
      {
        name: "六月",
        id: pt.June
      },
      {
        name: "七月",
        id: pt.July
      },
      {
        name: "八月",
        id: pt.August
      },
      {
        name: "九月",
        id: pt.September
      },
      {
        name: "十月",
        id: pt.October
      },
      {
        name: "十一月",
        id: pt.November
      },
      {
        name: "十二月",
        id: pt.December
      }
    ]), v = A(() => {
      if (n.type === xe.Week)
        return [
          {
            key: s,
            label: "weekdaysOrigin",
            options: l.value
          }
        ];
      if (n.type === xe.Month) {
        if (m.value.id === 0)
          return [
            {
              key: a,
              label: "weekOrdinalOrigin",
              options: c.value
            },
            {
              key: s,
              label: "weekdaysOrigin",
              options: l.value
            }
          ];
        if (m.value.id === 1)
          return [
            {
              key: r,
              label: "monthDateOrigin",
              options: u.value
            }
          ];
      }
      if (n.type === xe.Annual) {
        if (m.value.id === 0)
          return [
            {
              key: a,
              label: "weekOrdinalOrigin",
              options: c.value
            },
            {
              key: s,
              label: "weekdaysOrigin",
              options: l.value
            }
          ];
        if (m.value.id === 1)
          return [
            {
              key: r,
              label: "monthDateOrigin",
              options: u.value
            }
          ];
      }
    }), p = A(() => n.type === xe.Month || n.type === xe.Annual ? !0 : (r.value = [], a.value = [], s.value = [], o.value = [], !1)), h = ne([
      {
        name: "星期",
        id: 0
        /* Week */
      },
      {
        name: "日期",
        id: 1
        /* Date */
      }
    ]), m = ne(h.value[0]);
    return Ce(m, (y) => {
      if (y.id === 0) {
        r.value = [];
        return;
      }
      if (y.id === 1) {
        a.value = [], s.value = [];
        return;
      }
    }), Ce(
      () => n.type,
      (y) => {
        (y === xe.Month || y === xe.Annual) && (y != xe.Annual && (o.value = []), u.value && u.value.length > 0 ? m.value = h.value[1] : m.value = h.value[0]);
      },
      { immediate: !0 }
    ), Sd(() => {
      r.value = [], a.value = [], s.value = [], o.value = [];
    }), (y, f) => (D(), k(re, null, [
      y.type === g(xe).Annual ? (D(), k("div", Kd, [
        (D(!0), k(re, null, Te(g(d), (b) => {
          var T;
          return D(), Ue(ei, {
            key: b.id,
            checked: (T = g(o)) == null ? void 0 : T.includes(b.id),
            "onUpdate:checked": (w) => i(b.id, g(o), !0),
            fieldId: b.name,
            label: b.name
          }, null, 8, ["checked", "onUpdate:checked", "fieldId", "label"]);
        }), 128))
      ])) : X("", !0),
      g(p) ? (D(), k("div", qd, [
        Zd,
        Ke(O("select", {
          class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
          "onUpdate:modelValue": f[0] || (f[0] = (b) => Ie(m) ? m.value = b : null)
        }, [
          (D(!0), k(re, null, Te(g(h), (b, T) => (D(), k("option", {
            key: T,
            value: b
          }, pe(b.name), 9, Xd))), 128))
        ], 512), [
          [at, g(m)]
        ])
      ])) : X("", !0),
      O("div", Jd, [
        (D(!0), k(re, null, Te(g(v), (b) => (D(), k("div", {
          class: "flex gap-1 flex-wrap",
          key: b
        }, [
          (D(!0), k(re, null, Te(b.options, (T) => {
            var w;
            return D(), Ue(ei, {
              key: T.id,
              checked: (w = b.key.value) == null ? void 0 : w.includes(T.id),
              "onUpdate:checked": (P) => i(T.id, b.key),
              fieldId: T.name,
              label: T.name
            }, null, 8, ["checked", "onUpdate:checked", "fieldId", "label"]);
          }), 128))
        ]))), 128))
      ])
    ], 64));
  }
});
var ht = "top", Ct = "bottom", St = "right", gt = "left", ro = "auto", Zr = [ht, Ct, St, gt], ar = "start", Vr = "end", ef = "clippingParents", vu = "viewport", Tr = "popper", tf = "reference", ti = /* @__PURE__ */ Zr.reduce(function(e, t) {
  return e.concat([t + "-" + ar, t + "-" + Vr]);
}, []), pu = /* @__PURE__ */ [].concat(Zr, [ro]).reduce(function(e, t) {
  return e.concat([t, t + "-" + ar, t + "-" + Vr]);
}, []), nf = "beforeRead", rf = "read", af = "afterRead", sf = "beforeMain", of = "main", lf = "afterMain", uf = "beforeWrite", cf = "write", df = "afterWrite", ff = [nf, rf, af, sf, of, lf, uf, cf, df];
function Kt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function wt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Ln(e) {
  var t = wt(e).Element;
  return e instanceof t || e instanceof Element;
}
function kt(e) {
  var t = wt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function ao(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = wt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function vf(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, a = t.attributes[n] || {}, s = t.elements[n];
    !kt(s) || !Kt(s) || (Object.assign(s.style, r), Object.keys(a).forEach(function(o) {
      var i = a[o];
      i === !1 ? s.removeAttribute(o) : s.setAttribute(o, i === !0 ? "" : i);
    }));
  });
}
function pf(e) {
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
      var a = t.elements[r], s = t.attributes[r] || {}, o = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), i = o.reduce(function(l, c) {
        return l[c] = "", l;
      }, {});
      !kt(a) || !Kt(a) || (Object.assign(a.style, i), Object.keys(s).forEach(function(l) {
        a.removeAttribute(l);
      }));
    });
  };
}
const mf = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: vf,
  effect: pf,
  requires: ["computeStyles"]
};
function zt(e) {
  return e.split("-")[0];
}
var Pn = Math.max, Ea = Math.min, sr = Math.round;
function Es() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function mu() {
  return !/^((?!chrome|android).)*safari/i.test(Es());
}
function or(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), a = 1, s = 1;
  t && kt(e) && (a = e.offsetWidth > 0 && sr(r.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && sr(r.height) / e.offsetHeight || 1);
  var o = Ln(e) ? wt(e) : window, i = o.visualViewport, l = !mu() && n, c = (r.left + (l && i ? i.offsetLeft : 0)) / a, u = (r.top + (l && i ? i.offsetTop : 0)) / s, d = r.width / a, v = r.height / s;
  return {
    width: d,
    height: v,
    top: u,
    right: c + d,
    bottom: u + v,
    left: c,
    x: c,
    y: u
  };
}
function so(e) {
  var t = or(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function hu(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && ao(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function sn(e) {
  return wt(e).getComputedStyle(e);
}
function hf(e) {
  return ["table", "td", "th"].indexOf(Kt(e)) >= 0;
}
function $n(e) {
  return ((Ln(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Ha(e) {
  return Kt(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (ao(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    $n(e)
  );
}
function ni(e) {
  return !kt(e) || // https://github.com/popperjs/popper-core/issues/837
  sn(e).position === "fixed" ? null : e.offsetParent;
}
function gf(e) {
  var t = /firefox/i.test(Es()), n = /Trident/i.test(Es());
  if (n && kt(e)) {
    var r = sn(e);
    if (r.position === "fixed")
      return null;
  }
  var a = Ha(e);
  for (ao(a) && (a = a.host); kt(a) && ["html", "body"].indexOf(Kt(a)) < 0; ) {
    var s = sn(a);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none")
      return a;
    a = a.parentNode;
  }
  return null;
}
function Xr(e) {
  for (var t = wt(e), n = ni(e); n && hf(n) && sn(n).position === "static"; )
    n = ni(n);
  return n && (Kt(n) === "html" || Kt(n) === "body" && sn(n).position === "static") ? t : n || gf(e) || t;
}
function oo(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Mr(e, t, n) {
  return Pn(e, Ea(t, n));
}
function _f(e, t, n) {
  var r = Mr(e, t, n);
  return r > n ? n : r;
}
function gu() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function _u(e) {
  return Object.assign({}, gu(), e);
}
function yu(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var yf = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, _u(typeof t != "number" ? t : yu(t, Zr));
};
function bf(e) {
  var t, n = e.state, r = e.name, a = e.options, s = n.elements.arrow, o = n.modifiersData.popperOffsets, i = zt(n.placement), l = oo(i), c = [gt, St].indexOf(i) >= 0, u = c ? "height" : "width";
  if (!(!s || !o)) {
    var d = yf(a.padding, n), v = so(s), p = l === "y" ? ht : gt, h = l === "y" ? Ct : St, m = n.rects.reference[u] + n.rects.reference[l] - o[l] - n.rects.popper[u], y = o[l] - n.rects.reference[l], f = Xr(s), b = f ? l === "y" ? f.clientHeight || 0 : f.clientWidth || 0 : 0, T = m / 2 - y / 2, w = d[p], P = b - v[u] - d[h], N = b / 2 - v[u] / 2 + T, x = Mr(w, N, P), S = l;
    n.modifiersData[r] = (t = {}, t[S] = x, t.centerOffset = x - N, t);
  }
}
function wf(e) {
  var t = e.state, n = e.options, r = n.element, a = r === void 0 ? "[data-popper-arrow]" : r;
  a != null && (typeof a == "string" && (a = t.elements.popper.querySelector(a), !a) || hu(t.elements.popper, a) && (t.elements.arrow = a));
}
const Ef = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: bf,
  effect: wf,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function ir(e) {
  return e.split("-")[1];
}
var Df = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Of(e, t) {
  var n = e.x, r = e.y, a = t.devicePixelRatio || 1;
  return {
    x: sr(n * a) / a || 0,
    y: sr(r * a) / a || 0
  };
}
function ri(e) {
  var t, n = e.popper, r = e.popperRect, a = e.placement, s = e.variation, o = e.offsets, i = e.position, l = e.gpuAcceleration, c = e.adaptive, u = e.roundOffsets, d = e.isFixed, v = o.x, p = v === void 0 ? 0 : v, h = o.y, m = h === void 0 ? 0 : h, y = typeof u == "function" ? u({
    x: p,
    y: m
  }) : {
    x: p,
    y: m
  };
  p = y.x, m = y.y;
  var f = o.hasOwnProperty("x"), b = o.hasOwnProperty("y"), T = gt, w = ht, P = window;
  if (c) {
    var N = Xr(n), x = "clientHeight", S = "clientWidth";
    if (N === wt(n) && (N = $n(n), sn(N).position !== "static" && i === "absolute" && (x = "scrollHeight", S = "scrollWidth")), N = N, a === ht || (a === gt || a === St) && s === Vr) {
      w = Ct;
      var L = d && N === P && P.visualViewport ? P.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        N[x]
      );
      m -= L - r.height, m *= l ? 1 : -1;
    }
    if (a === gt || (a === ht || a === Ct) && s === Vr) {
      T = St;
      var R = d && N === P && P.visualViewport ? P.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        N[S]
      );
      p -= R - r.width, p *= l ? 1 : -1;
    }
  }
  var B = Object.assign({
    position: i
  }, c && Df), Y = u === !0 ? Of({
    x: p,
    y: m
  }, wt(n)) : {
    x: p,
    y: m
  };
  if (p = Y.x, m = Y.y, l) {
    var q;
    return Object.assign({}, B, (q = {}, q[w] = b ? "0" : "", q[T] = f ? "0" : "", q.transform = (P.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + m + "px)" : "translate3d(" + p + "px, " + m + "px, 0)", q));
  }
  return Object.assign({}, B, (t = {}, t[w] = b ? m + "px" : "", t[T] = f ? p + "px" : "", t.transform = "", t));
}
function $f(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, a = r === void 0 ? !0 : r, s = n.adaptive, o = s === void 0 ? !0 : s, i = n.roundOffsets, l = i === void 0 ? !0 : i, c = {
    placement: zt(t.placement),
    variation: ir(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: a,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, ri(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: o,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, ri(Object.assign({}, c, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Tf = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: $f,
  data: {}
};
var aa = {
  passive: !0
};
function kf(e) {
  var t = e.state, n = e.instance, r = e.options, a = r.scroll, s = a === void 0 ? !0 : a, o = r.resize, i = o === void 0 ? !0 : o, l = wt(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && c.forEach(function(u) {
    u.addEventListener("scroll", n.update, aa);
  }), i && l.addEventListener("resize", n.update, aa), function() {
    s && c.forEach(function(u) {
      u.removeEventListener("scroll", n.update, aa);
    }), i && l.removeEventListener("resize", n.update, aa);
  };
}
const Nf = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: kf,
  data: {}
};
var If = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function da(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return If[t];
  });
}
var Af = {
  start: "end",
  end: "start"
};
function ai(e) {
  return e.replace(/start|end/g, function(t) {
    return Af[t];
  });
}
function io(e) {
  var t = wt(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function lo(e) {
  return or($n(e)).left + io(e).scrollLeft;
}
function Cf(e, t) {
  var n = wt(e), r = $n(e), a = n.visualViewport, s = r.clientWidth, o = r.clientHeight, i = 0, l = 0;
  if (a) {
    s = a.width, o = a.height;
    var c = mu();
    (c || !c && t === "fixed") && (i = a.offsetLeft, l = a.offsetTop);
  }
  return {
    width: s,
    height: o,
    x: i + lo(e),
    y: l
  };
}
function Sf(e) {
  var t, n = $n(e), r = io(e), a = (t = e.ownerDocument) == null ? void 0 : t.body, s = Pn(n.scrollWidth, n.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), o = Pn(n.scrollHeight, n.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), i = -r.scrollLeft + lo(e), l = -r.scrollTop;
  return sn(a || n).direction === "rtl" && (i += Pn(n.clientWidth, a ? a.clientWidth : 0) - s), {
    width: s,
    height: o,
    x: i,
    y: l
  };
}
function uo(e) {
  var t = sn(e), n = t.overflow, r = t.overflowX, a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + a + r);
}
function bu(e) {
  return ["html", "body", "#document"].indexOf(Kt(e)) >= 0 ? e.ownerDocument.body : kt(e) && uo(e) ? e : bu(Ha(e));
}
function xr(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = bu(e), a = r === ((n = e.ownerDocument) == null ? void 0 : n.body), s = wt(r), o = a ? [s].concat(s.visualViewport || [], uo(r) ? r : []) : r, i = t.concat(o);
  return a ? i : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    i.concat(xr(Ha(o)))
  );
}
function Ds(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Pf(e, t) {
  var n = or(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function si(e, t, n) {
  return t === vu ? Ds(Cf(e, n)) : Ln(t) ? Pf(t, n) : Ds(Sf($n(e)));
}
function Lf(e) {
  var t = xr(Ha(e)), n = ["absolute", "fixed"].indexOf(sn(e).position) >= 0, r = n && kt(e) ? Xr(e) : e;
  return Ln(r) ? t.filter(function(a) {
    return Ln(a) && hu(a, r) && Kt(a) !== "body";
  }) : [];
}
function Mf(e, t, n, r) {
  var a = t === "clippingParents" ? Lf(e) : [].concat(t), s = [].concat(a, [n]), o = s[0], i = s.reduce(function(l, c) {
    var u = si(e, c, r);
    return l.top = Pn(u.top, l.top), l.right = Ea(u.right, l.right), l.bottom = Ea(u.bottom, l.bottom), l.left = Pn(u.left, l.left), l;
  }, si(e, o, r));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function wu(e) {
  var t = e.reference, n = e.element, r = e.placement, a = r ? zt(r) : null, s = r ? ir(r) : null, o = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2, l;
  switch (a) {
    case ht:
      l = {
        x: o,
        y: t.y - n.height
      };
      break;
    case Ct:
      l = {
        x: o,
        y: t.y + t.height
      };
      break;
    case St:
      l = {
        x: t.x + t.width,
        y: i
      };
      break;
    case gt:
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
  var c = a ? oo(a) : null;
  if (c != null) {
    var u = c === "y" ? "height" : "width";
    switch (s) {
      case ar:
        l[c] = l[c] - (t[u] / 2 - n[u] / 2);
        break;
      case Vr:
        l[c] = l[c] + (t[u] / 2 - n[u] / 2);
        break;
    }
  }
  return l;
}
function Ur(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, a = r === void 0 ? e.placement : r, s = n.strategy, o = s === void 0 ? e.strategy : s, i = n.boundary, l = i === void 0 ? ef : i, c = n.rootBoundary, u = c === void 0 ? vu : c, d = n.elementContext, v = d === void 0 ? Tr : d, p = n.altBoundary, h = p === void 0 ? !1 : p, m = n.padding, y = m === void 0 ? 0 : m, f = _u(typeof y != "number" ? y : yu(y, Zr)), b = v === Tr ? tf : Tr, T = e.rects.popper, w = e.elements[h ? b : v], P = Mf(Ln(w) ? w : w.contextElement || $n(e.elements.popper), l, u, o), N = or(e.elements.reference), x = wu({
    reference: N,
    element: T,
    strategy: "absolute",
    placement: a
  }), S = Ds(Object.assign({}, T, x)), L = v === Tr ? S : N, R = {
    top: P.top - L.top + f.top,
    bottom: L.bottom - P.bottom + f.bottom,
    left: P.left - L.left + f.left,
    right: L.right - P.right + f.right
  }, B = e.modifiersData.offset;
  if (v === Tr && B) {
    var Y = B[a];
    Object.keys(R).forEach(function(q) {
      var ce = [St, Ct].indexOf(q) >= 0 ? 1 : -1, ee = [ht, Ct].indexOf(q) >= 0 ? "y" : "x";
      R[q] += Y[ee] * ce;
    });
  }
  return R;
}
function xf(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, a = n.boundary, s = n.rootBoundary, o = n.padding, i = n.flipVariations, l = n.allowedAutoPlacements, c = l === void 0 ? pu : l, u = ir(r), d = u ? i ? ti : ti.filter(function(h) {
    return ir(h) === u;
  }) : Zr, v = d.filter(function(h) {
    return c.indexOf(h) >= 0;
  });
  v.length === 0 && (v = d);
  var p = v.reduce(function(h, m) {
    return h[m] = Ur(e, {
      placement: m,
      boundary: a,
      rootBoundary: s,
      padding: o
    })[zt(m)], h;
  }, {});
  return Object.keys(p).sort(function(h, m) {
    return p[h] - p[m];
  });
}
function Rf(e) {
  if (zt(e) === ro)
    return [];
  var t = da(e);
  return [ai(e), t, ai(t)];
}
function Ff(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var a = n.mainAxis, s = a === void 0 ? !0 : a, o = n.altAxis, i = o === void 0 ? !0 : o, l = n.fallbackPlacements, c = n.padding, u = n.boundary, d = n.rootBoundary, v = n.altBoundary, p = n.flipVariations, h = p === void 0 ? !0 : p, m = n.allowedAutoPlacements, y = t.options.placement, f = zt(y), b = f === y, T = l || (b || !h ? [da(y)] : Rf(y)), w = [y].concat(T).reduce(function(C, Z) {
      return C.concat(zt(Z) === ro ? xf(t, {
        placement: Z,
        boundary: u,
        rootBoundary: d,
        padding: c,
        flipVariations: h,
        allowedAutoPlacements: m
      }) : Z);
    }, []), P = t.rects.reference, N = t.rects.popper, x = /* @__PURE__ */ new Map(), S = !0, L = w[0], R = 0; R < w.length; R++) {
      var B = w[R], Y = zt(B), q = ir(B) === ar, ce = [ht, Ct].indexOf(Y) >= 0, ee = ce ? "width" : "height", le = Ur(t, {
        placement: B,
        boundary: u,
        rootBoundary: d,
        altBoundary: v,
        padding: c
      }), ge = ce ? q ? St : gt : q ? Ct : ht;
      P[ee] > N[ee] && (ge = da(ge));
      var Ee = da(ge), z = [];
      if (s && z.push(le[Y] <= 0), i && z.push(le[ge] <= 0, le[Ee] <= 0), z.every(function(C) {
        return C;
      })) {
        L = B, S = !1;
        break;
      }
      x.set(B, z);
    }
    if (S)
      for (var $ = h ? 3 : 1, j = function(Z) {
        var se = w.find(function(ke) {
          var De = x.get(ke);
          if (De)
            return De.slice(0, Z).every(function(be) {
              return be;
            });
        });
        if (se)
          return L = se, "break";
      }, te = $; te > 0; te--) {
        var U = j(te);
        if (U === "break")
          break;
      }
    t.placement !== L && (t.modifiersData[r]._skip = !0, t.placement = L, t.reset = !0);
  }
}
const Yf = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Ff,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function oi(e, t, n) {
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
function ii(e) {
  return [ht, St, Ct, gt].some(function(t) {
    return e[t] >= 0;
  });
}
function Vf(e) {
  var t = e.state, n = e.name, r = t.rects.reference, a = t.rects.popper, s = t.modifiersData.preventOverflow, o = Ur(t, {
    elementContext: "reference"
  }), i = Ur(t, {
    altBoundary: !0
  }), l = oi(o, r), c = oi(i, a, s), u = ii(l), d = ii(c);
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
const Uf = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Vf
};
function jf(e, t, n) {
  var r = zt(e), a = [gt, ht].indexOf(r) >= 0 ? -1 : 1, s = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, o = s[0], i = s[1];
  return o = o || 0, i = (i || 0) * a, [gt, St].indexOf(r) >= 0 ? {
    x: i,
    y: o
  } : {
    x: o,
    y: i
  };
}
function Bf(e) {
  var t = e.state, n = e.options, r = e.name, a = n.offset, s = a === void 0 ? [0, 0] : a, o = pu.reduce(function(u, d) {
    return u[d] = jf(d, t.rects, s), u;
  }, {}), i = o[t.placement], l = i.x, c = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += c), t.modifiersData[r] = o;
}
const Hf = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Bf
};
function Wf(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = wu({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Gf = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Wf,
  data: {}
};
function zf(e) {
  return e === "x" ? "y" : "x";
}
function Kf(e) {
  var t = e.state, n = e.options, r = e.name, a = n.mainAxis, s = a === void 0 ? !0 : a, o = n.altAxis, i = o === void 0 ? !1 : o, l = n.boundary, c = n.rootBoundary, u = n.altBoundary, d = n.padding, v = n.tether, p = v === void 0 ? !0 : v, h = n.tetherOffset, m = h === void 0 ? 0 : h, y = Ur(t, {
    boundary: l,
    rootBoundary: c,
    padding: d,
    altBoundary: u
  }), f = zt(t.placement), b = ir(t.placement), T = !b, w = oo(f), P = zf(w), N = t.modifiersData.popperOffsets, x = t.rects.reference, S = t.rects.popper, L = typeof m == "function" ? m(Object.assign({}, t.rects, {
    placement: t.placement
  })) : m, R = typeof L == "number" ? {
    mainAxis: L,
    altAxis: L
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, L), B = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, Y = {
    x: 0,
    y: 0
  };
  if (N) {
    if (s) {
      var q, ce = w === "y" ? ht : gt, ee = w === "y" ? Ct : St, le = w === "y" ? "height" : "width", ge = N[w], Ee = ge + y[ce], z = ge - y[ee], $ = p ? -S[le] / 2 : 0, j = b === ar ? x[le] : S[le], te = b === ar ? -S[le] : -x[le], U = t.elements.arrow, C = p && U ? so(U) : {
        width: 0,
        height: 0
      }, Z = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : gu(), se = Z[ce], ke = Z[ee], De = Mr(0, x[le], C[le]), be = T ? x[le] / 2 - $ - De - se - R.mainAxis : j - De - se - R.mainAxis, Be = T ? -x[le] / 2 + $ + De + ke + R.mainAxis : te + De + ke + R.mainAxis, je = t.elements.arrow && Xr(t.elements.arrow), nt = je ? w === "y" ? je.clientTop || 0 : je.clientLeft || 0 : 0, E = (q = B == null ? void 0 : B[w]) != null ? q : 0, _ = ge + be - E - nt, M = ge + Be - E, Q = Mr(p ? Ea(Ee, _) : Ee, ge, p ? Pn(z, M) : z);
      N[w] = Q, Y[w] = Q - ge;
    }
    if (i) {
      var oe, ye = w === "x" ? ht : gt, ot = w === "x" ? Ct : St, qe = N[P], Et = P === "y" ? "height" : "width", Vt = qe + y[ye], Pe = qe - y[ot], F = [ht, gt].indexOf(f) !== -1, W = (oe = B == null ? void 0 : B[P]) != null ? oe : 0, He = F ? Vt : qe - x[Et] - S[Et] - W + R.altAxis, We = F ? qe + x[Et] + S[Et] - W - R.altAxis : Pe, Ut = p && F ? _f(He, qe, We) : Mr(p ? He : Vt, qe, p ? We : Pe);
      N[P] = Ut, Y[P] = Ut - qe;
    }
    t.modifiersData[r] = Y;
  }
}
const qf = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Kf,
  requiresIfExists: ["offset"]
};
function Zf(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Xf(e) {
  return e === wt(e) || !kt(e) ? io(e) : Zf(e);
}
function Jf(e) {
  var t = e.getBoundingClientRect(), n = sr(t.width) / e.offsetWidth || 1, r = sr(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Qf(e, t, n) {
  n === void 0 && (n = !1);
  var r = kt(t), a = kt(t) && Jf(t), s = $n(t), o = or(e, a, n), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((Kt(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  uo(s)) && (i = Xf(t)), kt(t) ? (l = or(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : s && (l.x = lo(s))), {
    x: o.left + i.scrollLeft - l.x,
    y: o.top + i.scrollTop - l.y,
    width: o.width,
    height: o.height
  };
}
function ev(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(s) {
    t.set(s.name, s);
  });
  function a(s) {
    n.add(s.name);
    var o = [].concat(s.requires || [], s.requiresIfExists || []);
    o.forEach(function(i) {
      if (!n.has(i)) {
        var l = t.get(i);
        l && a(l);
      }
    }), r.push(s);
  }
  return e.forEach(function(s) {
    n.has(s.name) || a(s);
  }), r;
}
function tv(e) {
  var t = ev(e);
  return ff.reduce(function(n, r) {
    return n.concat(t.filter(function(a) {
      return a.phase === r;
    }));
  }, []);
}
function nv(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function rv(e) {
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
var li = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function ui() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function av(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, a = t.defaultOptions, s = a === void 0 ? li : a;
  return function(i, l, c) {
    c === void 0 && (c = s);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, li, s),
      modifiersData: {},
      elements: {
        reference: i,
        popper: l
      },
      attributes: {},
      styles: {}
    }, d = [], v = !1, p = {
      state: u,
      setOptions: function(f) {
        var b = typeof f == "function" ? f(u.options) : f;
        m(), u.options = Object.assign({}, s, u.options, b), u.scrollParents = {
          reference: Ln(i) ? xr(i) : i.contextElement ? xr(i.contextElement) : [],
          popper: xr(l)
        };
        var T = tv(rv([].concat(r, u.options.modifiers)));
        return u.orderedModifiers = T.filter(function(w) {
          return w.enabled;
        }), h(), p.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!v) {
          var f = u.elements, b = f.reference, T = f.popper;
          if (ui(b, T)) {
            u.rects = {
              reference: Qf(b, Xr(T), u.options.strategy === "fixed"),
              popper: so(T)
            }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(R) {
              return u.modifiersData[R.name] = Object.assign({}, R.data);
            });
            for (var w = 0; w < u.orderedModifiers.length; w++) {
              if (u.reset === !0) {
                u.reset = !1, w = -1;
                continue;
              }
              var P = u.orderedModifiers[w], N = P.fn, x = P.options, S = x === void 0 ? {} : x, L = P.name;
              typeof N == "function" && (u = N({
                state: u,
                options: S,
                name: L,
                instance: p
              }) || u);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: nv(function() {
        return new Promise(function(y) {
          p.forceUpdate(), y(u);
        });
      }),
      destroy: function() {
        m(), v = !0;
      }
    };
    if (!ui(i, l))
      return p;
    p.setOptions(c).then(function(y) {
      !v && c.onFirstUpdate && c.onFirstUpdate(y);
    });
    function h() {
      u.orderedModifiers.forEach(function(y) {
        var f = y.name, b = y.options, T = b === void 0 ? {} : b, w = y.effect;
        if (typeof w == "function") {
          var P = w({
            state: u,
            name: f,
            instance: p,
            options: T
          }), N = function() {
          };
          d.push(P || N);
        }
      });
    }
    function m() {
      d.forEach(function(y) {
        return y();
      }), d = [];
    }
    return p;
  };
}
var sv = [Nf, Gf, Tf, mf, Hf, Yf, qf, Ef, Uf], ov = /* @__PURE__ */ av({
  defaultModifiers: sv
}), iv = Object.defineProperty, lv = (e, t, n) => t in e ? iv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ae = (e, t, n) => (lv(e, typeof t != "symbol" ? t + "" : t, n), n);
const cn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, a] of t)
    n[r] = a;
  return n;
}, uv = {}, cv = {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  viewBox: "0 0 24 24"
}, dv = /* @__PURE__ */ O("polyline", { points: "9 18 15 12 9 6" }, null, -1), fv = [
  dv
];
function vv(e, t) {
  return D(), k("svg", cv, fv);
}
const pv = /* @__PURE__ */ cn(uv, [["render", vv]]), mv = {}, hv = {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  viewBox: "0 0 24 24"
}, gv = /* @__PURE__ */ O("polyline", { points: "15 18 9 12 15 6" }, null, -1), _v = [
  gv
];
function yv(e, t) {
  return D(), k("svg", hv, _v);
}
const bv = /* @__PURE__ */ cn(mv, [["render", yv]]), wv = {}, Ev = {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  viewBox: "0 0 24 24"
}, Dv = /* @__PURE__ */ O("polyline", { points: "6 9 12 15 18 9" }, null, -1), Ov = [
  Dv
];
function $v(e, t) {
  return D(), k("svg", Ev, Ov);
}
const Tv = /* @__PURE__ */ cn(wv, [["render", $v]]), kv = {}, Nv = {
  fill: "none",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  viewBox: "0 0 24 24"
}, Iv = /* @__PURE__ */ O("path", { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" }, null, -1), Av = [
  Iv
];
function Cv(e, t) {
  return D(), k("svg", Nv, Av);
}
const Sv = /* @__PURE__ */ cn(kv, [["render", Cv]]), Pv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IconChevronDown: Tv,
  IconChevronLeft: bv,
  IconChevronRight: pv,
  IconClock: Sv
}, Symbol.toStringTag, { value: "Module" })), lr = /* @__PURE__ */ Se({
  __name: "BaseIcon",
  props: {
    name: { type: String, required: !0 },
    width: { type: String },
    height: { type: String },
    size: { type: String, default: "26" },
    viewBox: { type: String }
  },
  setup(e) {
    const t = e, n = A(() => t.width || t.size), r = A(() => t.height || t.size), a = A(() => Pv[`Icon${t.name}`]);
    return (s, o) => (D(), Ue(su(g(a)), {
      width: g(n),
      height: g(r),
      class: "vc-base-icon"
    }, null, 8, ["width", "height"]));
  }
});
function Eu() {
  return typeof window < "u";
}
function Lv(e) {
  return Eu() && e in window;
}
function Mv(e) {
  const t = ne(!1), n = A(() => t.value ? "dark" : "light");
  let r, a;
  function s(p) {
    t.value = p.matches;
  }
  function o() {
    Lv("matchMedia") && (r = window.matchMedia("(prefers-color-scheme: dark)"), r.addEventListener("change", s), t.value = r.matches);
  }
  function i() {
    const { selector: p = ":root", darkClass: h = "dark" } = e.value, m = document.querySelector(p);
    t.value = m.classList.contains(h);
  }
  function l(p) {
    const { selector: h = ":root", darkClass: m = "dark" } = p;
    if (Eu() && h && m) {
      const y = document.querySelector(h);
      y && (a = new MutationObserver(i), a.observe(y, {
        attributes: !0,
        attributeFilter: ["class"]
      }), t.value = y.classList.contains(m));
    }
  }
  function c() {
    d();
    const p = typeof e.value;
    p === "string" && e.value.toLowerCase() === "system" ? o() : p === "object" ? l(e.value) : t.value = !!e.value;
  }
  const u = Ce(() => e.value, () => c(), {
    immediate: !0
  });
  function d() {
    r && (r.removeEventListener("change", s), r = void 0), a && (a.disconnect(), a = void 0);
  }
  function v() {
    d(), u();
  }
  return Kr(() => v()), {
    isDark: t,
    displayMode: n,
    cleanup: v
  };
}
var sa = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function xv(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Rv = typeof sa == "object" && sa && sa.Object === Object && sa, Du = Rv, Fv = Du, Yv = typeof self == "object" && self && self.Object === Object && self, Vv = Fv || Yv || Function("return this")(), Zt = Vv, Uv = Zt, jv = Uv.Symbol, Wa = jv, ci = Wa, Ou = Object.prototype, Bv = Ou.hasOwnProperty, Hv = Ou.toString, kr = ci ? ci.toStringTag : void 0;
function Wv(e) {
  var t = Bv.call(e, kr), n = e[kr];
  try {
    e[kr] = void 0;
    var r = !0;
  } catch {
  }
  var a = Hv.call(e);
  return r && (t ? e[kr] = n : delete e[kr]), a;
}
var Gv = Wv, zv = Object.prototype, Kv = zv.toString;
function qv(e) {
  return Kv.call(e);
}
var Zv = qv, di = Wa, Xv = Gv, Jv = Zv, Qv = "[object Null]", ep = "[object Undefined]", fi = di ? di.toStringTag : void 0;
function tp(e) {
  return e == null ? e === void 0 ? ep : Qv : fi && fi in Object(e) ? Xv(e) : Jv(e);
}
var Xt = tp;
function np(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var dn = np, rp = Xt, ap = dn, sp = "[object AsyncFunction]", op = "[object Function]", ip = "[object GeneratorFunction]", lp = "[object Proxy]";
function up(e) {
  if (!ap(e))
    return !1;
  var t = rp(e);
  return t == op || t == ip || t == sp || t == lp;
}
var Un = up, cp = Array.isArray, Ft = cp;
function dp(e) {
  return e != null && typeof e == "object";
}
var Yt = dp, fp = Xt, vp = Ft, pp = Yt, mp = "[object String]";
function hp(e) {
  return typeof e == "string" || !vp(e) && pp(e) && fp(e) == mp;
}
var Ht = hp, gp = Xt, _p = Yt, yp = "[object Boolean]";
function bp(e) {
  return e === !0 || e === !1 || _p(e) && gp(e) == yp;
}
var wp = bp, Ep = Xt, Dp = Yt, Op = "[object Number]";
function $p(e) {
  return typeof e == "number" || Dp(e) && Ep(e) == Op;
}
var Rt = $p, Tp = Xt, kp = Yt, Np = "[object Date]";
function Ip(e) {
  return kp(e) && Tp(e) == Np;
}
var Ap = Ip;
function Cp(e) {
  return function(t) {
    return e(t);
  };
}
var $u = Cp, jr = {}, Sp = {
  get exports() {
    return jr;
  },
  set exports(e) {
    jr = e;
  }
};
(function(e, t) {
  var n = Du, r = t && !t.nodeType && t, a = r && !0 && e && !e.nodeType && e, s = a && a.exports === r, o = s && n.process, i = function() {
    try {
      var l = a && a.require && a.require("util").types;
      return l || o && o.binding && o.binding("util");
    } catch {
    }
  }();
  e.exports = i;
})(Sp, jr);
var Pp = Ap, Lp = $u, vi = jr, pi = vi && vi.isDate, Mp = pi ? Lp(pi) : Pp, xp = Mp, Rp = Xt, Fp = Yt, Yp = "[object Symbol]";
function Vp(e) {
  return typeof e == "symbol" || Fp(e) && Rp(e) == Yp;
}
var co = Vp, Up = Ft, jp = co, Bp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Hp = /^\w*$/;
function Wp(e, t) {
  if (Up(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || jp(e) ? !0 : Hp.test(e) || !Bp.test(e) || t != null && e in Object(t);
}
var fo = Wp, Gp = Zt, zp = Gp["__core-js_shared__"], Kp = zp, cs = Kp, mi = function() {
  var e = /[^.]+$/.exec(cs && cs.keys && cs.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function qp(e) {
  return !!mi && mi in e;
}
var Zp = qp, Xp = Function.prototype, Jp = Xp.toString;
function Qp(e) {
  if (e != null) {
    try {
      return Jp.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Tu = Qp, em = Un, tm = Zp, nm = dn, rm = Tu, am = /[\\^$.*+?()[\]{}|]/g, sm = /^\[object .+?Constructor\]$/, om = Function.prototype, im = Object.prototype, lm = om.toString, um = im.hasOwnProperty, cm = RegExp(
  "^" + lm.call(um).replace(am, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function dm(e) {
  if (!nm(e) || tm(e))
    return !1;
  var t = em(e) ? cm : sm;
  return t.test(rm(e));
}
var fm = dm;
function vm(e, t) {
  return e == null ? void 0 : e[t];
}
var pm = vm, mm = fm, hm = pm;
function gm(e, t) {
  var n = hm(e, t);
  return mm(n) ? n : void 0;
}
var jn = gm, _m = jn, ym = _m(Object, "create"), Ga = ym, hi = Ga;
function bm() {
  this.__data__ = hi ? hi(null) : {}, this.size = 0;
}
var wm = bm;
function Em(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Dm = Em, Om = Ga, $m = "__lodash_hash_undefined__", Tm = Object.prototype, km = Tm.hasOwnProperty;
function Nm(e) {
  var t = this.__data__;
  if (Om) {
    var n = t[e];
    return n === $m ? void 0 : n;
  }
  return km.call(t, e) ? t[e] : void 0;
}
var Im = Nm, Am = Ga, Cm = Object.prototype, Sm = Cm.hasOwnProperty;
function Pm(e) {
  var t = this.__data__;
  return Am ? t[e] !== void 0 : Sm.call(t, e);
}
var Lm = Pm, Mm = Ga, xm = "__lodash_hash_undefined__";
function Rm(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Mm && t === void 0 ? xm : t, this;
}
var Fm = Rm, Ym = wm, Vm = Dm, Um = Im, jm = Lm, Bm = Fm;
function vr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
vr.prototype.clear = Ym;
vr.prototype.delete = Vm;
vr.prototype.get = Um;
vr.prototype.has = jm;
vr.prototype.set = Bm;
var Hm = vr;
function Wm() {
  this.__data__ = [], this.size = 0;
}
var Gm = Wm;
function zm(e, t) {
  return e === t || e !== e && t !== t;
}
var pr = zm, Km = pr;
function qm(e, t) {
  for (var n = e.length; n--; )
    if (Km(e[n][0], t))
      return n;
  return -1;
}
var za = qm, Zm = za, Xm = Array.prototype, Jm = Xm.splice;
function Qm(e) {
  var t = this.__data__, n = Zm(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : Jm.call(t, n, 1), --this.size, !0;
}
var eh = Qm, th = za;
function nh(e) {
  var t = this.__data__, n = th(t, e);
  return n < 0 ? void 0 : t[n][1];
}
var rh = nh, ah = za;
function sh(e) {
  return ah(this.__data__, e) > -1;
}
var oh = sh, ih = za;
function lh(e, t) {
  var n = this.__data__, r = ih(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
var uh = lh, ch = Gm, dh = eh, fh = rh, vh = oh, ph = uh;
function mr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
mr.prototype.clear = ch;
mr.prototype.delete = dh;
mr.prototype.get = fh;
mr.prototype.has = vh;
mr.prototype.set = ph;
var Ka = mr, mh = jn, hh = Zt, gh = mh(hh, "Map"), vo = gh, gi = Hm, _h = Ka, yh = vo;
function bh() {
  this.size = 0, this.__data__ = {
    hash: new gi(),
    map: new (yh || _h)(),
    string: new gi()
  };
}
var wh = bh;
function Eh(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var Dh = Eh, Oh = Dh;
function $h(e, t) {
  var n = e.__data__;
  return Oh(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
var qa = $h, Th = qa;
function kh(e) {
  var t = Th(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var Nh = kh, Ih = qa;
function Ah(e) {
  return Ih(this, e).get(e);
}
var Ch = Ah, Sh = qa;
function Ph(e) {
  return Sh(this, e).has(e);
}
var Lh = Ph, Mh = qa;
function xh(e, t) {
  var n = Mh(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
var Rh = xh, Fh = wh, Yh = Nh, Vh = Ch, Uh = Lh, jh = Rh;
function hr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
hr.prototype.clear = Fh;
hr.prototype.delete = Yh;
hr.prototype.get = Vh;
hr.prototype.has = Uh;
hr.prototype.set = jh;
var po = hr, ku = po, Bh = "Expected a function";
function mo(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Bh);
  var n = function() {
    var r = arguments, a = t ? t.apply(this, r) : r[0], s = n.cache;
    if (s.has(a))
      return s.get(a);
    var o = e.apply(this, r);
    return n.cache = s.set(a, o) || s, o;
  };
  return n.cache = new (mo.Cache || ku)(), n;
}
mo.Cache = ku;
var Hh = mo, Wh = Hh, Gh = 500;
function zh(e) {
  var t = Wh(e, function(r) {
    return n.size === Gh && n.clear(), r;
  }), n = t.cache;
  return t;
}
var Kh = zh, qh = Kh, Zh = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Xh = /\\(\\)?/g, Jh = qh(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Zh, function(n, r, a, s) {
    t.push(a ? s.replace(Xh, "$1") : r || n);
  }), t;
}), Qh = Jh;
function eg(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, a = Array(r); ++n < r; )
    a[n] = t(e[n], n, e);
  return a;
}
var tg = eg, _i = Wa, ng = tg, rg = Ft, ag = co, sg = 1 / 0, yi = _i ? _i.prototype : void 0, bi = yi ? yi.toString : void 0;
function Nu(e) {
  if (typeof e == "string")
    return e;
  if (rg(e))
    return ng(e, Nu) + "";
  if (ag(e))
    return bi ? bi.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -sg ? "-0" : t;
}
var og = Nu, ig = og;
function lg(e) {
  return e == null ? "" : ig(e);
}
var ug = lg, cg = Ft, dg = fo, fg = Qh, vg = ug;
function pg(e, t) {
  return cg(e) ? e : dg(e, t) ? [e] : fg(vg(e));
}
var Iu = pg, mg = co, hg = 1 / 0;
function gg(e) {
  if (typeof e == "string" || mg(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -hg ? "-0" : t;
}
var Za = gg, _g = Iu, yg = Za;
function bg(e, t) {
  t = _g(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[yg(t[n++])];
  return n && n == r ? e : void 0;
}
var Au = bg, wg = Au;
function Eg(e, t, n) {
  var r = e == null ? void 0 : wg(e, t);
  return r === void 0 ? n : r;
}
var Cn = Eg, Dg = jn, Og = function() {
  try {
    var e = Dg(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Cu = Og, wi = Cu;
function $g(e, t, n) {
  t == "__proto__" && wi ? wi(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
var Xa = $g, Tg = Xa, kg = pr, Ng = Object.prototype, Ig = Ng.hasOwnProperty;
function Ag(e, t, n) {
  var r = e[t];
  (!(Ig.call(e, t) && kg(r, n)) || n === void 0 && !(t in e)) && Tg(e, t, n);
}
var Cg = Ag, Sg = 9007199254740991, Pg = /^(?:0|[1-9]\d*)$/;
function Lg(e, t) {
  var n = typeof e;
  return t = t ?? Sg, !!t && (n == "number" || n != "symbol" && Pg.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var ho = Lg;
function Mg(e) {
  return function(t, n, r) {
    for (var a = -1, s = Object(t), o = r(t), i = o.length; i--; ) {
      var l = o[e ? i : ++a];
      if (n(s[l], l, s) === !1)
        break;
    }
    return t;
  };
}
var xg = Mg, Rg = xg, Fg = Rg(), Su = Fg;
function Yg(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var Vg = Yg, Ug = Xt, jg = Yt, Bg = "[object Arguments]";
function Hg(e) {
  return jg(e) && Ug(e) == Bg;
}
var Wg = Hg, Ei = Wg, Gg = Yt, Pu = Object.prototype, zg = Pu.hasOwnProperty, Kg = Pu.propertyIsEnumerable, qg = Ei(function() {
  return arguments;
}()) ? Ei : function(e) {
  return Gg(e) && zg.call(e, "callee") && !Kg.call(e, "callee");
}, go = qg, ur = {}, Zg = {
  get exports() {
    return ur;
  },
  set exports(e) {
    ur = e;
  }
};
function Xg() {
  return !1;
}
var Jg = Xg;
(function(e, t) {
  var n = Zt, r = Jg, a = t && !t.nodeType && t, s = a && !0 && e && !e.nodeType && e, o = s && s.exports === a, i = o ? n.Buffer : void 0, l = i ? i.isBuffer : void 0, c = l || r;
  e.exports = c;
})(Zg, ur);
var Qg = 9007199254740991;
function e1(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Qg;
}
var _o = e1, t1 = Xt, n1 = _o, r1 = Yt, a1 = "[object Arguments]", s1 = "[object Array]", o1 = "[object Boolean]", i1 = "[object Date]", l1 = "[object Error]", u1 = "[object Function]", c1 = "[object Map]", d1 = "[object Number]", f1 = "[object Object]", v1 = "[object RegExp]", p1 = "[object Set]", m1 = "[object String]", h1 = "[object WeakMap]", g1 = "[object ArrayBuffer]", _1 = "[object DataView]", y1 = "[object Float32Array]", b1 = "[object Float64Array]", w1 = "[object Int8Array]", E1 = "[object Int16Array]", D1 = "[object Int32Array]", O1 = "[object Uint8Array]", $1 = "[object Uint8ClampedArray]", T1 = "[object Uint16Array]", k1 = "[object Uint32Array]", Fe = {};
Fe[y1] = Fe[b1] = Fe[w1] = Fe[E1] = Fe[D1] = Fe[O1] = Fe[$1] = Fe[T1] = Fe[k1] = !0;
Fe[a1] = Fe[s1] = Fe[g1] = Fe[o1] = Fe[_1] = Fe[i1] = Fe[l1] = Fe[u1] = Fe[c1] = Fe[d1] = Fe[f1] = Fe[v1] = Fe[p1] = Fe[m1] = Fe[h1] = !1;
function N1(e) {
  return r1(e) && n1(e.length) && !!Fe[t1(e)];
}
var I1 = N1, A1 = I1, C1 = $u, Di = jr, Oi = Di && Di.isTypedArray, S1 = Oi ? C1(Oi) : A1, yo = S1, P1 = Vg, L1 = go, M1 = Ft, x1 = ur, R1 = ho, F1 = yo, Y1 = Object.prototype, V1 = Y1.hasOwnProperty;
function U1(e, t) {
  var n = M1(e), r = !n && L1(e), a = !n && !r && x1(e), s = !n && !r && !a && F1(e), o = n || r || a || s, i = o ? P1(e.length, String) : [], l = i.length;
  for (var c in e)
    (t || V1.call(e, c)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    R1(c, l))) && i.push(c);
  return i;
}
var Lu = U1, j1 = Object.prototype;
function B1(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || j1;
  return e === n;
}
var bo = B1;
function H1(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var Mu = H1, W1 = Mu, G1 = W1(Object.keys, Object), z1 = G1, K1 = bo, q1 = z1, Z1 = Object.prototype, X1 = Z1.hasOwnProperty;
function J1(e) {
  if (!K1(e))
    return q1(e);
  var t = [];
  for (var n in Object(e))
    X1.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
var Q1 = J1, e_ = Un, t_ = _o;
function n_(e) {
  return e != null && t_(e.length) && !e_(e);
}
var Jr = n_, r_ = Lu, a_ = Q1, s_ = Jr;
function o_(e) {
  return s_(e) ? r_(e) : a_(e);
}
var wo = o_, i_ = Su, l_ = wo;
function u_(e, t) {
  return e && i_(e, t, l_);
}
var xu = u_, c_ = Ka;
function d_() {
  this.__data__ = new c_(), this.size = 0;
}
var f_ = d_;
function v_(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
var p_ = v_;
function m_(e) {
  return this.__data__.get(e);
}
var h_ = m_;
function g_(e) {
  return this.__data__.has(e);
}
var __ = g_, y_ = Ka, b_ = vo, w_ = po, E_ = 200;
function D_(e, t) {
  var n = this.__data__;
  if (n instanceof y_) {
    var r = n.__data__;
    if (!b_ || r.length < E_ - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new w_(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
var O_ = D_, $_ = Ka, T_ = f_, k_ = p_, N_ = h_, I_ = __, A_ = O_;
function gr(e) {
  var t = this.__data__ = new $_(e);
  this.size = t.size;
}
gr.prototype.clear = T_;
gr.prototype.delete = k_;
gr.prototype.get = N_;
gr.prototype.has = I_;
gr.prototype.set = A_;
var Eo = gr, C_ = "__lodash_hash_undefined__";
function S_(e) {
  return this.__data__.set(e, C_), this;
}
var P_ = S_;
function L_(e) {
  return this.__data__.has(e);
}
var M_ = L_, x_ = po, R_ = P_, F_ = M_;
function Da(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new x_(); ++t < n; )
    this.add(e[t]);
}
Da.prototype.add = Da.prototype.push = R_;
Da.prototype.has = F_;
var Y_ = Da;
function V_(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
var Ru = V_;
function U_(e, t) {
  return e.has(t);
}
var j_ = U_, B_ = Y_, H_ = Ru, W_ = j_, G_ = 1, z_ = 2;
function K_(e, t, n, r, a, s) {
  var o = n & G_, i = e.length, l = t.length;
  if (i != l && !(o && l > i))
    return !1;
  var c = s.get(e), u = s.get(t);
  if (c && u)
    return c == t && u == e;
  var d = -1, v = !0, p = n & z_ ? new B_() : void 0;
  for (s.set(e, t), s.set(t, e); ++d < i; ) {
    var h = e[d], m = t[d];
    if (r)
      var y = o ? r(m, h, d, t, e, s) : r(h, m, d, e, t, s);
    if (y !== void 0) {
      if (y)
        continue;
      v = !1;
      break;
    }
    if (p) {
      if (!H_(t, function(f, b) {
        if (!W_(p, b) && (h === f || a(h, f, n, r, s)))
          return p.push(b);
      })) {
        v = !1;
        break;
      }
    } else if (!(h === m || a(h, m, n, r, s))) {
      v = !1;
      break;
    }
  }
  return s.delete(e), s.delete(t), v;
}
var Fu = K_, q_ = Zt, Z_ = q_.Uint8Array, Yu = Z_;
function X_(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, a) {
    n[++t] = [a, r];
  }), n;
}
var J_ = X_;
function Q_(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var ey = Q_, $i = Wa, Ti = Yu, ty = pr, ny = Fu, ry = J_, ay = ey, sy = 1, oy = 2, iy = "[object Boolean]", ly = "[object Date]", uy = "[object Error]", cy = "[object Map]", dy = "[object Number]", fy = "[object RegExp]", vy = "[object Set]", py = "[object String]", my = "[object Symbol]", hy = "[object ArrayBuffer]", gy = "[object DataView]", ki = $i ? $i.prototype : void 0, ds = ki ? ki.valueOf : void 0;
function _y(e, t, n, r, a, s, o) {
  switch (n) {
    case gy:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case hy:
      return !(e.byteLength != t.byteLength || !s(new Ti(e), new Ti(t)));
    case iy:
    case ly:
    case dy:
      return ty(+e, +t);
    case uy:
      return e.name == t.name && e.message == t.message;
    case fy:
    case py:
      return e == t + "";
    case cy:
      var i = ry;
    case vy:
      var l = r & sy;
      if (i || (i = ay), e.size != t.size && !l)
        return !1;
      var c = o.get(e);
      if (c)
        return c == t;
      r |= oy, o.set(e, t);
      var u = ny(i(e), i(t), r, a, s, o);
      return o.delete(e), u;
    case my:
      if (ds)
        return ds.call(e) == ds.call(t);
  }
  return !1;
}
var yy = _y;
function by(e, t) {
  for (var n = -1, r = t.length, a = e.length; ++n < r; )
    e[a + n] = t[n];
  return e;
}
var wy = by, Ey = wy, Dy = Ft;
function Oy(e, t, n) {
  var r = t(e);
  return Dy(e) ? r : Ey(r, n(e));
}
var $y = Oy;
function Ty(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, a = 0, s = []; ++n < r; ) {
    var o = e[n];
    t(o, n, e) && (s[a++] = o);
  }
  return s;
}
var ky = Ty;
function Ny() {
  return [];
}
var Iy = Ny, Ay = ky, Cy = Iy, Sy = Object.prototype, Py = Sy.propertyIsEnumerable, Ni = Object.getOwnPropertySymbols, Ly = Ni ? function(e) {
  return e == null ? [] : (e = Object(e), Ay(Ni(e), function(t) {
    return Py.call(e, t);
  }));
} : Cy, My = Ly, xy = $y, Ry = My, Fy = wo;
function Yy(e) {
  return xy(e, Fy, Ry);
}
var Vy = Yy, Ii = Vy, Uy = 1, jy = Object.prototype, By = jy.hasOwnProperty;
function Hy(e, t, n, r, a, s) {
  var o = n & Uy, i = Ii(e), l = i.length, c = Ii(t), u = c.length;
  if (l != u && !o)
    return !1;
  for (var d = l; d--; ) {
    var v = i[d];
    if (!(o ? v in t : By.call(t, v)))
      return !1;
  }
  var p = s.get(e), h = s.get(t);
  if (p && h)
    return p == t && h == e;
  var m = !0;
  s.set(e, t), s.set(t, e);
  for (var y = o; ++d < l; ) {
    v = i[d];
    var f = e[v], b = t[v];
    if (r)
      var T = o ? r(b, f, v, t, e, s) : r(f, b, v, e, t, s);
    if (!(T === void 0 ? f === b || a(f, b, n, r, s) : T)) {
      m = !1;
      break;
    }
    y || (y = v == "constructor");
  }
  if (m && !y) {
    var w = e.constructor, P = t.constructor;
    w != P && "constructor" in e && "constructor" in t && !(typeof w == "function" && w instanceof w && typeof P == "function" && P instanceof P) && (m = !1);
  }
  return s.delete(e), s.delete(t), m;
}
var Wy = Hy, Gy = jn, zy = Zt, Ky = Gy(zy, "DataView"), qy = Ky, Zy = jn, Xy = Zt, Jy = Zy(Xy, "Promise"), Qy = Jy, eb = jn, tb = Zt, nb = eb(tb, "Set"), rb = nb, ab = jn, sb = Zt, ob = ab(sb, "WeakMap"), ib = ob, Os = qy, $s = vo, Ts = Qy, ks = rb, Ns = ib, Vu = Xt, _r = Tu, Ai = "[object Map]", lb = "[object Object]", Ci = "[object Promise]", Si = "[object Set]", Pi = "[object WeakMap]", Li = "[object DataView]", ub = _r(Os), cb = _r($s), db = _r(Ts), fb = _r(ks), vb = _r(Ns), In = Vu;
(Os && In(new Os(new ArrayBuffer(1))) != Li || $s && In(new $s()) != Ai || Ts && In(Ts.resolve()) != Ci || ks && In(new ks()) != Si || Ns && In(new Ns()) != Pi) && (In = function(e) {
  var t = Vu(e), n = t == lb ? e.constructor : void 0, r = n ? _r(n) : "";
  if (r)
    switch (r) {
      case ub:
        return Li;
      case cb:
        return Ai;
      case db:
        return Ci;
      case fb:
        return Si;
      case vb:
        return Pi;
    }
  return t;
});
var pb = In, fs = Eo, mb = Fu, hb = yy, gb = Wy, Mi = pb, xi = Ft, Ri = ur, _b = yo, yb = 1, Fi = "[object Arguments]", Yi = "[object Array]", oa = "[object Object]", bb = Object.prototype, Vi = bb.hasOwnProperty;
function wb(e, t, n, r, a, s) {
  var o = xi(e), i = xi(t), l = o ? Yi : Mi(e), c = i ? Yi : Mi(t);
  l = l == Fi ? oa : l, c = c == Fi ? oa : c;
  var u = l == oa, d = c == oa, v = l == c;
  if (v && Ri(e)) {
    if (!Ri(t))
      return !1;
    o = !0, u = !1;
  }
  if (v && !u)
    return s || (s = new fs()), o || _b(e) ? mb(e, t, n, r, a, s) : hb(e, t, l, n, r, a, s);
  if (!(n & yb)) {
    var p = u && Vi.call(e, "__wrapped__"), h = d && Vi.call(t, "__wrapped__");
    if (p || h) {
      var m = p ? e.value() : e, y = h ? t.value() : t;
      return s || (s = new fs()), a(m, y, n, r, s);
    }
  }
  return v ? (s || (s = new fs()), gb(e, t, n, r, a, s)) : !1;
}
var Eb = wb, Db = Eb, Ui = Yt;
function Uu(e, t, n, r, a) {
  return e === t ? !0 : e == null || t == null || !Ui(e) && !Ui(t) ? e !== e && t !== t : Db(e, t, n, r, Uu, a);
}
var ju = Uu, Ob = Eo, $b = ju, Tb = 1, kb = 2;
function Nb(e, t, n, r) {
  var a = n.length, s = a, o = !r;
  if (e == null)
    return !s;
  for (e = Object(e); a--; ) {
    var i = n[a];
    if (o && i[2] ? i[1] !== e[i[0]] : !(i[0] in e))
      return !1;
  }
  for (; ++a < s; ) {
    i = n[a];
    var l = i[0], c = e[l], u = i[1];
    if (o && i[2]) {
      if (c === void 0 && !(l in e))
        return !1;
    } else {
      var d = new Ob();
      if (r)
        var v = r(c, u, l, e, t, d);
      if (!(v === void 0 ? $b(u, c, Tb | kb, r, d) : v))
        return !1;
    }
  }
  return !0;
}
var Ib = Nb, Ab = dn;
function Cb(e) {
  return e === e && !Ab(e);
}
var Bu = Cb, Sb = Bu, Pb = wo;
function Lb(e) {
  for (var t = Pb(e), n = t.length; n--; ) {
    var r = t[n], a = e[r];
    t[n] = [r, a, Sb(a)];
  }
  return t;
}
var Mb = Lb;
function xb(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
var Hu = xb, Rb = Ib, Fb = Mb, Yb = Hu;
function Vb(e) {
  var t = Fb(e);
  return t.length == 1 && t[0][2] ? Yb(t[0][0], t[0][1]) : function(n) {
    return n === e || Rb(n, e, t);
  };
}
var Ub = Vb;
function jb(e, t) {
  return e != null && t in Object(e);
}
var Bb = jb, Hb = Iu, Wb = go, Gb = Ft, zb = ho, Kb = _o, qb = Za;
function Zb(e, t, n) {
  t = Hb(t, e);
  for (var r = -1, a = t.length, s = !1; ++r < a; ) {
    var o = qb(t[r]);
    if (!(s = e != null && n(e, o)))
      break;
    e = e[o];
  }
  return s || ++r != a ? s : (a = e == null ? 0 : e.length, !!a && Kb(a) && zb(o, a) && (Gb(e) || Wb(e)));
}
var Wu = Zb, Xb = Bb, Jb = Wu;
function Qb(e, t) {
  return e != null && Jb(e, t, Xb);
}
var e0 = Qb, t0 = ju, n0 = Cn, r0 = e0, a0 = fo, s0 = Bu, o0 = Hu, i0 = Za, l0 = 1, u0 = 2;
function c0(e, t) {
  return a0(e) && s0(t) ? o0(i0(e), t) : function(n) {
    var r = n0(n, e);
    return r === void 0 && r === t ? r0(n, e) : t0(t, r, l0 | u0);
  };
}
var d0 = c0;
function f0(e) {
  return e;
}
var Do = f0;
function v0(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var p0 = v0, m0 = Au;
function h0(e) {
  return function(t) {
    return m0(t, e);
  };
}
var g0 = h0, _0 = p0, y0 = g0, b0 = fo, w0 = Za;
function E0(e) {
  return b0(e) ? _0(w0(e)) : y0(e);
}
var D0 = E0, O0 = Ub, $0 = d0, T0 = Do, k0 = Ft, N0 = D0;
function I0(e) {
  return typeof e == "function" ? e : e == null ? T0 : typeof e == "object" ? k0(e) ? $0(e[0], e[1]) : O0(e) : N0(e);
}
var Gu = I0, A0 = Xa, C0 = xu, S0 = Gu;
function P0(e, t) {
  var n = {};
  return t = S0(t), C0(e, function(r, a, s) {
    A0(n, a, t(r, a, s));
  }), n;
}
var L0 = P0;
function M0(e, t, n) {
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
var zu = M0, x0 = zu, ji = Math.max;
function R0(e, t, n) {
  return t = ji(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, a = -1, s = ji(r.length - t, 0), o = Array(s); ++a < s; )
      o[a] = r[t + a];
    a = -1;
    for (var i = Array(t + 1); ++a < t; )
      i[a] = r[a];
    return i[t] = n(o), x0(e, this, i);
  };
}
var F0 = R0;
function Y0(e) {
  return function() {
    return e;
  };
}
var V0 = Y0, U0 = V0, Bi = Cu, j0 = Do, B0 = Bi ? function(e, t) {
  return Bi(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: U0(t),
    writable: !0
  });
} : j0, H0 = B0, W0 = 800, G0 = 16, z0 = Date.now;
function K0(e) {
  var t = 0, n = 0;
  return function() {
    var r = z0(), a = G0 - (r - n);
    if (n = r, a > 0) {
      if (++t >= W0)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var q0 = K0, Z0 = H0, X0 = q0, J0 = X0(Z0), Q0 = J0, ew = Do, tw = F0, nw = Q0;
function rw(e, t) {
  return nw(tw(e, t, ew), e + "");
}
var Oo = rw, aw = pr, sw = Jr, ow = ho, iw = dn;
function lw(e, t, n) {
  if (!iw(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? sw(n) && ow(t, n.length) : r == "string" && t in n) ? aw(n[t], e) : !1;
}
var $o = lw;
function uw(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var cw = uw, dw = dn, fw = bo, vw = cw, pw = Object.prototype, mw = pw.hasOwnProperty;
function hw(e) {
  if (!dw(e))
    return vw(e);
  var t = fw(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !mw.call(e, r)) || n.push(r);
  return n;
}
var gw = hw, _w = Lu, yw = gw, bw = Jr;
function ww(e) {
  return bw(e) ? _w(e, !0) : yw(e);
}
var To = ww, Ew = Oo, Dw = pr, Ow = $o, $w = To, Ku = Object.prototype, Tw = Ku.hasOwnProperty, kw = Ew(function(e, t) {
  e = Object(e);
  var n = -1, r = t.length, a = r > 2 ? t[2] : void 0;
  for (a && Ow(t[0], t[1], a) && (r = 1); ++n < r; )
    for (var s = t[n], o = $w(s), i = -1, l = o.length; ++i < l; ) {
      var c = o[i], u = e[c];
      (u === void 0 || Dw(u, Ku[c]) && !Tw.call(e, c)) && (e[c] = s[c]);
    }
  return e;
}), Hi = kw, Nw = Xa, Iw = pr;
function Aw(e, t, n) {
  (n !== void 0 && !Iw(e[t], n) || n === void 0 && !(t in e)) && Nw(e, t, n);
}
var qu = Aw, Oa = {}, Cw = {
  get exports() {
    return Oa;
  },
  set exports(e) {
    Oa = e;
  }
};
(function(e, t) {
  var n = Zt, r = t && !t.nodeType && t, a = r && !0 && e && !e.nodeType && e, s = a && a.exports === r, o = s ? n.Buffer : void 0, i = o ? o.allocUnsafe : void 0;
  function l(c, u) {
    if (u)
      return c.slice();
    var d = c.length, v = i ? i(d) : new c.constructor(d);
    return c.copy(v), v;
  }
  e.exports = l;
})(Cw, Oa);
var Wi = Yu;
function Sw(e) {
  var t = new e.constructor(e.byteLength);
  return new Wi(t).set(new Wi(e)), t;
}
var Pw = Sw, Lw = Pw;
function Mw(e, t) {
  var n = t ? Lw(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var xw = Mw;
function Rw(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
var Fw = Rw, Yw = dn, Gi = Object.create, Vw = function() {
  function e() {
  }
  return function(t) {
    if (!Yw(t))
      return {};
    if (Gi)
      return Gi(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}(), Uw = Vw, jw = Mu, Bw = jw(Object.getPrototypeOf, Object), Zu = Bw, Hw = Uw, Ww = Zu, Gw = bo;
function zw(e) {
  return typeof e.constructor == "function" && !Gw(e) ? Hw(Ww(e)) : {};
}
var Kw = zw, qw = Jr, Zw = Yt;
function Xw(e) {
  return Zw(e) && qw(e);
}
var Jw = Xw, Qw = Xt, eE = Zu, tE = Yt, nE = "[object Object]", rE = Function.prototype, aE = Object.prototype, Xu = rE.toString, sE = aE.hasOwnProperty, oE = Xu.call(Object);
function iE(e) {
  if (!tE(e) || Qw(e) != nE)
    return !1;
  var t = eE(e);
  if (t === null)
    return !0;
  var n = sE.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && Xu.call(n) == oE;
}
var lE = iE;
function uE(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
var Ju = uE, cE = Cg, dE = Xa;
function fE(e, t, n, r) {
  var a = !n;
  n || (n = {});
  for (var s = -1, o = t.length; ++s < o; ) {
    var i = t[s], l = r ? r(n[i], e[i], i, n, e) : void 0;
    l === void 0 && (l = e[i]), a ? dE(n, i, l) : cE(n, i, l);
  }
  return n;
}
var vE = fE, pE = vE, mE = To;
function hE(e) {
  return pE(e, mE(e));
}
var gE = hE, zi = qu, _E = Oa, yE = xw, bE = Fw, wE = Kw, Ki = go, qi = Ft, EE = Jw, DE = ur, OE = Un, $E = dn, TE = lE, kE = yo, Zi = Ju, NE = gE;
function IE(e, t, n, r, a, s, o) {
  var i = Zi(e, n), l = Zi(t, n), c = o.get(l);
  if (c) {
    zi(e, n, c);
    return;
  }
  var u = s ? s(i, l, n + "", e, t, o) : void 0, d = u === void 0;
  if (d) {
    var v = qi(l), p = !v && DE(l), h = !v && !p && kE(l);
    u = l, v || p || h ? qi(i) ? u = i : EE(i) ? u = bE(i) : p ? (d = !1, u = _E(l, !0)) : h ? (d = !1, u = yE(l, !0)) : u = [] : TE(l) || Ki(l) ? (u = i, Ki(i) ? u = NE(i) : (!$E(i) || OE(i)) && (u = wE(l))) : d = !1;
  }
  d && (o.set(l, u), a(u, l, r, s, o), o.delete(l)), zi(e, n, u);
}
var AE = IE, CE = Eo, SE = qu, PE = Su, LE = AE, ME = dn, xE = To, RE = Ju;
function Qu(e, t, n, r, a) {
  e !== t && PE(t, function(s, o) {
    if (a || (a = new CE()), ME(s))
      LE(e, t, o, n, Qu, r, a);
    else {
      var i = r ? r(RE(e, o), s, o + "", e, t, a) : void 0;
      i === void 0 && (i = s), SE(e, o, i);
    }
  }, xE);
}
var ec = Qu, FE = ec, Xi = dn;
function tc(e, t, n, r, a, s) {
  return Xi(e) && Xi(t) && (s.set(t, e), FE(e, t, void 0, tc, s), s.delete(t)), e;
}
var YE = tc, VE = Oo, UE = $o;
function jE(e) {
  return VE(function(t, n) {
    var r = -1, a = n.length, s = a > 1 ? n[a - 1] : void 0, o = a > 2 ? n[2] : void 0;
    for (s = e.length > 3 && typeof s == "function" ? (a--, s) : void 0, o && UE(n[0], n[1], o) && (s = a < 3 ? void 0 : s, a = 1), t = Object(t); ++r < a; ) {
      var i = n[r];
      i && e(t, i, r, s);
    }
    return t;
  });
}
var BE = jE, HE = ec, WE = BE, GE = WE(function(e, t, n, r) {
  HE(e, t, n, r);
}), zE = GE, KE = zu, qE = Oo, ZE = YE, XE = zE, JE = qE(function(e) {
  return e.push(void 0, ZE), KE(XE, void 0, e);
}), Br = JE, QE = Object.prototype, eD = QE.hasOwnProperty;
function tD(e, t) {
  return e != null && eD.call(e, t);
}
var nD = tD, rD = nD, aD = Wu;
function sD(e, t) {
  return e != null && aD(e, t, rD);
}
var nc = sD, oD = Jr;
function iD(e, t) {
  return function(n, r) {
    if (n == null)
      return n;
    if (!oD(n))
      return e(n, r);
    for (var a = n.length, s = t ? a : -1, o = Object(n); (t ? s-- : ++s < a) && r(o[s], s, o) !== !1; )
      ;
    return n;
  };
}
var lD = iD, uD = xu, cD = lD, dD = cD(uD), fD = dD;
function vD(e) {
  return e && e.length ? e[0] : void 0;
}
var rc = vD;
function pD(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
var Qn = pD, mD = fD;
function hD(e, t) {
  var n;
  return mD(e, function(r, a, s) {
    return n = t(r, a, s), !n;
  }), !!n;
}
var gD = hD, _D = Ru, yD = Gu, bD = gD, wD = Ft, ED = $o;
function DD(e, t, n) {
  var r = wD(e) ? _D : bD;
  return n && ED(e, t, n) && (t = void 0), r(e, yD(t));
}
var OD = DD;
const $D = (e) => Object.prototype.toString.call(e).slice(8, -1), tr = (e) => xp(e) && !isNaN(e.getTime()), on = (e) => $D(e) === "Object", ko = nc, Ji = (e, t) => OD(t, (n) => nc(e, n)), Le = (e, t, n = "0") => {
  for (e = e != null ? String(e) : "", t = t || 2; e.length < t; )
    e = `${n}${e}`;
  return e;
}, Nt = (e) => Array.isArray(e), rn = (e) => Nt(e) && e.length > 0, $a = (e) => e == null ? e ?? null : document && Ht(e) ? document.querySelector(e) : e.$el ?? e, yn = (e, t, n, r = void 0) => {
  e.removeEventListener(t, n, r);
}, bn = (e, t, n, r = void 0) => (e.addEventListener(t, n, r), () => yn(e, t, n, r)), fa = (e, t) => !!e && !!t && (e === t || e.contains(t)), ia = (e, t) => {
  (e.key === " " || e.key === "Enter") && (t(e), e.preventDefault());
}, ac = (e, ...t) => {
  const n = {};
  let r;
  for (r in e)
    t.includes(r) || (n[r] = e[r]);
  return n;
}, sc = (e, t) => {
  const n = {};
  return t.forEach((r) => {
    r in e && (n[r] = e[r]);
  }), n;
};
function TD(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
const Ta = () => {
  function e() {
    return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
  }
  return `${e() + e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`;
}, kD = ["base", "start", "end", "startEnd"], ND = [
  "class",
  "wrapperClass",
  "contentClass",
  "style",
  "contentStyle",
  "color",
  "fillMode"
], ID = { base: {}, start: {}, end: {} };
function No(e, t, n = ID) {
  let r = e, a = {};
  t === !0 || Ht(t) ? (r = Ht(t) ? t : r, a = { ...n }) : on(t) && (Ji(t, kD) ? a = { ...t } : a = {
    base: { ...t },
    start: { ...t },
    end: { ...t }
  });
  const s = Br(
    a,
    { start: a.startEnd, end: a.startEnd },
    n
  );
  return Object.entries(s).forEach(([o, i]) => {
    let l = r;
    i === !0 || Ht(i) ? (l = Ht(i) ? i : l, s[o] = { color: l }) : on(i) && (Ji(i, ND) ? s[o] = { ...i } : s[o] = {}), Br(s[o], { color: l });
  }), s;
}
class AD {
  constructor() {
    ae(this, "type", "highlight");
  }
  normalizeConfig(t, n) {
    return No(t, n, {
      base: { fillMode: "light" },
      start: { fillMode: "solid" },
      end: { fillMode: "solid" }
    });
  }
  prepareRender(t) {
    t.highlights = [], t.content || (t.content = []);
  }
  render({ data: t, onStart: n, onEnd: r }, a) {
    const { key: s, highlight: o } = t;
    if (!o)
      return;
    const { highlights: i } = a, { base: l, start: c, end: u } = o;
    n && r ? i.push({
      ...c,
      key: s,
      wrapperClass: `vc-day-layer vc-day-box-center-center vc-attr vc-${c.color}`,
      class: [`vc-highlight vc-highlight-bg-${c.fillMode}`, c.class],
      contentClass: [
        `vc-attr vc-highlight-content-${c.fillMode} vc-${c.color}`,
        c.contentClass
      ]
    }) : n ? (i.push({
      ...l,
      key: `${s}-base`,
      wrapperClass: `vc-day-layer vc-day-box-right-center vc-attr vc-${l.color}`,
      class: [
        `vc-highlight vc-highlight-base-start vc-highlight-bg-${l.fillMode}`,
        l.class
      ]
    }), i.push({
      ...c,
      key: s,
      wrapperClass: `vc-day-layer vc-day-box-center-center vc-attr vc-${c.color}`,
      class: [`vc-highlight vc-highlight-bg-${c.fillMode}`, c.class],
      contentClass: [
        `vc-attr vc-highlight-content-${c.fillMode} vc-${c.color}`,
        c.contentClass
      ]
    })) : r ? (i.push({
      ...l,
      key: `${s}-base`,
      wrapperClass: `vc-day-layer vc-day-box-left-center vc-attr vc-${l.color}`,
      class: [
        `vc-highlight vc-highlight-base-end vc-highlight-bg-${l.fillMode}`,
        l.class
      ]
    }), i.push({
      ...u,
      key: s,
      wrapperClass: `vc-day-layer vc-day-box-center-center vc-attr vc-${u.color}`,
      class: [`vc-highlight vc-highlight-bg-${u.fillMode}`, u.class],
      contentClass: [
        `vc-attr vc-highlight-content-${u.fillMode} vc-${u.color}`,
        u.contentClass
      ]
    })) : i.push({
      ...l,
      key: `${s}-middle`,
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
class Io {
  constructor(t, n) {
    ae(this, "type", ""), ae(this, "collectionType", ""), this.type = t, this.collectionType = n;
  }
  normalizeConfig(t, n) {
    return No(t, n);
  }
  prepareRender(t) {
    t[this.collectionType] = [];
  }
  render({ data: t, onStart: n, onEnd: r }, a) {
    const { key: s } = t, o = t[this.type];
    if (!s || !o)
      return;
    const i = a[this.collectionType], { base: l, start: c, end: u } = o;
    n ? i.push({
      ...c,
      key: s,
      class: [
        `vc-${this.type} vc-${this.type}-start vc-${c.color} vc-attr`,
        c.class
      ]
    }) : r ? i.push({
      ...u,
      key: s,
      class: [
        `vc-${this.type} vc-${this.type}-end vc-${u.color} vc-attr`,
        u.class
      ]
    }) : i.push({
      ...l,
      key: s,
      class: [
        `vc-${this.type} vc-${this.type}-base vc-${l.color} vc-attr`,
        l.class
      ]
    });
  }
}
class CD extends Io {
  constructor() {
    super("content", "content");
  }
  normalizeConfig(t, n) {
    return No("base", n);
  }
}
class SD extends Io {
  constructor() {
    super("dot", "dots");
  }
}
class PD extends Io {
  constructor() {
    super("bar", "bars");
  }
}
class LD {
  constructor(t) {
    ae(this, "color"), ae(this, "renderers", [
      new CD(),
      new AD(),
      new SD(),
      new PD()
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
const MD = 300, xD = 60, RD = 80, FD = {
  maxSwipeTime: MD,
  minHorizontalSwipeDistance: xD,
  maxVerticalSwipeDistance: RD
}, YD = "MMMM YYYY", VD = "W", UD = "MMM", jD = "h A", BD = [
  "L",
  "YYYY-MM-DD",
  "YYYY/MM/DD"
], HD = [
  "L h:mm A",
  "YYYY-MM-DD h:mm A",
  "YYYY/MM/DD h:mm A"
], WD = [
  "L HH:mm",
  "YYYY-MM-DD HH:mm",
  "YYYY/MM/DD HH:mm"
], GD = [
  "h:mm A"
], zD = [
  "HH:mm"
], KD = "WWW, MMM D, YYYY", qD = [
  "L",
  "YYYY-MM-DD",
  "YYYY/MM/DD"
], ZD = "iso", XD = "YYYY-MM-DDTHH:mm:ss.SSSZ", JD = {
  title: YD,
  weekdays: VD,
  navMonths: UD,
  hours: jD,
  input: BD,
  inputDateTime: HD,
  inputDateTime24hr: WD,
  inputTime: GD,
  inputTime24hr: zD,
  dayPopover: KD,
  data: qD,
  model: ZD,
  iso: XD
}, ln = {
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
ln.en = ln["en-US"];
ln.es = ln["es-ES"];
ln.no = ln.nb;
ln.zh = ln["zh-CN"];
const QD = Object.entries(ln).reduce(
  (e, [t, { dow: n, L: r }]) => (e[t] = {
    id: t,
    firstDayOfWeek: n,
    masks: { L: r }
  }, e),
  {}
), eO = {
  componentPrefix: "V",
  color: "blue",
  isDark: !1,
  navVisibility: "click",
  titlePosition: "center",
  transition: "slide-h",
  touch: FD,
  masks: JD,
  locales: QD,
  datePicker: {
    updateOnInput: !0,
    inputDebounce: 1e3,
    popover: {
      visibility: "hover-focus",
      placement: "bottom-start",
      isInteractive: !0
    }
  }
}, Is = Js(eO), tO = A(() => L0(Is.locales, (e) => (e.masks = Br(e.masks, Is.masks), e))), Dn = (e) => typeof window < "u" && ko(window.__vcalendar__, e) ? Cn(window.__vcalendar__, e) : Cn(Is, e);
var ka = {}, nO = {
  get exports() {
    return ka;
  },
  set exports(e) {
    ka = e;
  }
}, Na = {}, rO = {
  get exports() {
    return Na;
  },
  set exports(e) {
    Na = e;
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
})(rO, Na);
var Ia = {}, aO = {
  get exports() {
    return Ia;
  },
  set exports(e) {
    Ia = e;
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
})(aO, Ia);
var Aa = {}, sO = {
  get exports() {
    return Aa;
  },
  set exports(e) {
    Aa = e;
  }
}, Ca = {}, oO = {
  get exports() {
    return Ca;
  },
  set exports(e) {
    Ca = e;
  }
};
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  function n(l, c) {
    var u = i(c);
    return u.formatToParts ? a(u, l) : s(u, l);
  }
  var r = {
    year: 0,
    month: 1,
    day: 2,
    hour: 3,
    minute: 4,
    second: 5
  };
  function a(l, c) {
    try {
      for (var u = l.formatToParts(c), d = [], v = 0; v < u.length; v++) {
        var p = r[u[v].type];
        p >= 0 && (d[p] = parseInt(u[v].value, 10));
      }
      return d;
    } catch (h) {
      if (h instanceof RangeError)
        return [NaN];
      throw h;
    }
  }
  function s(l, c) {
    var u = l.format(c).replace(/\u200E/g, ""), d = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(u);
    return [d[3], d[1], d[2], d[4], d[5], d[6]];
  }
  var o = {};
  function i(l) {
    if (!o[l]) {
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
      o[l] = u ? new Intl.DateTimeFormat("en-US", {
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
    return o[l];
  }
  e.exports = t.default;
})(oO, Ca);
var Sa = {}, iO = {
  get exports() {
    return Sa;
  },
  set exports(e) {
    Sa = e;
  }
};
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  function n(r, a, s, o, i, l, c) {
    var u = /* @__PURE__ */ new Date(0);
    return u.setUTCFullYear(r, a, s), u.setUTCHours(o, i, l, c), u;
  }
  e.exports = t.default;
})(iO, Sa);
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = l;
  var n = a(Ca), r = a(Sa);
  function a(m) {
    return m && m.__esModule ? m : { default: m };
  }
  var s = 36e5, o = 6e4, i = {
    timezone: /([Z+-].*)$/,
    timezoneZ: /^(Z)$/,
    timezoneHH: /^([+-]\d{2})$/,
    timezoneHHMM: /^([+-]\d{2}):?(\d{2})$/
  };
  function l(m, y, f) {
    var b, T;
    if (!m || (b = i.timezoneZ.exec(m), b))
      return 0;
    var w;
    if (b = i.timezoneHH.exec(m), b)
      return w = parseInt(b[1], 10), v(w) ? -(w * s) : NaN;
    if (b = i.timezoneHHMM.exec(m), b) {
      w = parseInt(b[1], 10);
      var P = parseInt(b[2], 10);
      return v(w, P) ? (T = Math.abs(w) * s + P * o, w > 0 ? -T : T) : NaN;
    }
    if (h(m)) {
      y = new Date(y || Date.now());
      var N = f ? y : c(y), x = u(N, m), S = f ? x : d(y, x, m);
      return -S;
    }
    return NaN;
  }
  function c(m) {
    return (0, r.default)(m.getFullYear(), m.getMonth(), m.getDate(), m.getHours(), m.getMinutes(), m.getSeconds(), m.getMilliseconds());
  }
  function u(m, y) {
    var f = (0, n.default)(m, y), b = (0, r.default)(f[0], f[1] - 1, f[2], f[3] % 24, f[4], f[5], 0).getTime(), T = m.getTime(), w = T % 1e3;
    return T -= w >= 0 ? w : 1e3 + w, b - T;
  }
  function d(m, y, f) {
    var b = m.getTime(), T = b - y, w = u(new Date(T), f);
    if (y === w)
      return y;
    T -= w - y;
    var P = u(new Date(T), f);
    return w === P ? w : Math.max(w, P);
  }
  function v(m, y) {
    return -23 <= m && m <= 23 && (y == null || 0 <= y && y <= 59);
  }
  var p = {};
  function h(m) {
    if (p[m])
      return !0;
    try {
      return new Intl.DateTimeFormat(void 0, {
        timeZone: m
      }), p[m] = !0, !0;
    } catch {
      return !1;
    }
  }
  e.exports = t.default;
})(sO, Aa);
var Pa = {}, lO = {
  get exports() {
    return Pa;
  },
  set exports(e) {
    Pa = e;
  }
};
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = void 0;
  var n = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/, r = n;
  t.default = r, e.exports = t.default;
})(lO, Pa);
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = d;
  var n = o(Na), r = o(Ia), a = o(Aa), s = o(Pa);
  function o(S) {
    return S && S.__esModule ? S : { default: S };
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
    timeZone: s.default
  };
  function d(S, L) {
    if (arguments.length < 1)
      throw new TypeError("1 argument required, but only " + arguments.length + " present");
    if (S === null)
      return /* @__PURE__ */ new Date(NaN);
    var R = L || {}, B = R.additionalDigits == null ? c : (0, n.default)(R.additionalDigits);
    if (B !== 2 && B !== 1 && B !== 0)
      throw new RangeError("additionalDigits must be 0, 1 or 2");
    if (S instanceof Date || typeof S == "object" && Object.prototype.toString.call(S) === "[object Date]")
      return new Date(S.getTime());
    if (typeof S == "number" || Object.prototype.toString.call(S) === "[object Number]")
      return new Date(S);
    if (!(typeof S == "string" || Object.prototype.toString.call(S) === "[object String]"))
      return /* @__PURE__ */ new Date(NaN);
    var Y = v(S), q = p(Y.date, B), ce = q.year, ee = q.restDateString, le = h(ee, ce);
    if (isNaN(le))
      return /* @__PURE__ */ new Date(NaN);
    if (le) {
      var ge = le.getTime(), Ee = 0, z;
      if (Y.time && (Ee = m(Y.time), isNaN(Ee)))
        return /* @__PURE__ */ new Date(NaN);
      if (Y.timeZone || R.timeZone) {
        if (z = (0, a.default)(Y.timeZone || R.timeZone, new Date(ge + Ee)), isNaN(z))
          return /* @__PURE__ */ new Date(NaN);
      } else
        z = (0, r.default)(new Date(ge + Ee)), z = (0, r.default)(new Date(ge + Ee + z));
      return new Date(ge + Ee + z);
    } else
      return /* @__PURE__ */ new Date(NaN);
  }
  function v(S) {
    var L = {}, R = u.dateTimePattern.exec(S), B;
    if (R ? (L.date = R[1], B = R[3]) : (R = u.datePattern.exec(S), R ? (L.date = R[1], B = R[2]) : (L.date = null, B = S)), B) {
      var Y = u.timeZone.exec(B);
      Y ? (L.time = B.replace(Y[1], ""), L.timeZone = Y[1].trim()) : L.time = B;
    }
    return L;
  }
  function p(S, L) {
    var R = u.YYY[L], B = u.YYYYY[L], Y;
    if (Y = u.YYYY.exec(S) || B.exec(S), Y) {
      var q = Y[1];
      return {
        year: parseInt(q, 10),
        restDateString: S.slice(q.length)
      };
    }
    if (Y = u.YY.exec(S) || R.exec(S), Y) {
      var ce = Y[1];
      return {
        year: parseInt(ce, 10) * 100,
        restDateString: S.slice(ce.length)
      };
    }
    return {
      year: null
    };
  }
  function h(S, L) {
    if (L === null)
      return null;
    var R, B, Y, q;
    if (S.length === 0)
      return B = /* @__PURE__ */ new Date(0), B.setUTCFullYear(L), B;
    if (R = u.MM.exec(S), R)
      return B = /* @__PURE__ */ new Date(0), Y = parseInt(R[1], 10) - 1, w(L, Y) ? (B.setUTCFullYear(L, Y), B) : /* @__PURE__ */ new Date(NaN);
    if (R = u.DDD.exec(S), R) {
      B = /* @__PURE__ */ new Date(0);
      var ce = parseInt(R[1], 10);
      return P(L, ce) ? (B.setUTCFullYear(L, 0, ce), B) : /* @__PURE__ */ new Date(NaN);
    }
    if (R = u.MMDD.exec(S), R) {
      B = /* @__PURE__ */ new Date(0), Y = parseInt(R[1], 10) - 1;
      var ee = parseInt(R[2], 10);
      return w(L, Y, ee) ? (B.setUTCFullYear(L, Y, ee), B) : /* @__PURE__ */ new Date(NaN);
    }
    if (R = u.Www.exec(S), R)
      return q = parseInt(R[1], 10) - 1, N(L, q) ? y(L, q) : /* @__PURE__ */ new Date(NaN);
    if (R = u.WwwD.exec(S), R) {
      q = parseInt(R[1], 10) - 1;
      var le = parseInt(R[2], 10) - 1;
      return N(L, q, le) ? y(L, q, le) : /* @__PURE__ */ new Date(NaN);
    }
    return null;
  }
  function m(S) {
    var L, R, B;
    if (L = u.HH.exec(S), L)
      return R = parseFloat(L[1].replace(",", ".")), x(R) ? R % 24 * i : NaN;
    if (L = u.HHMM.exec(S), L)
      return R = parseInt(L[1], 10), B = parseFloat(L[2].replace(",", ".")), x(R, B) ? R % 24 * i + B * l : NaN;
    if (L = u.HHMMSS.exec(S), L) {
      R = parseInt(L[1], 10), B = parseInt(L[2], 10);
      var Y = parseFloat(L[3].replace(",", "."));
      return x(R, B, Y) ? R % 24 * i + B * l + Y * 1e3 : NaN;
    }
    return null;
  }
  function y(S, L, R) {
    L = L || 0, R = R || 0;
    var B = /* @__PURE__ */ new Date(0);
    B.setUTCFullYear(S, 0, 4);
    var Y = B.getUTCDay() || 7, q = L * 7 + R + 1 - Y;
    return B.setUTCDate(B.getUTCDate() + q), B;
  }
  var f = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], b = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function T(S) {
    return S % 400 === 0 || S % 4 === 0 && S % 100 !== 0;
  }
  function w(S, L, R) {
    if (L < 0 || L > 11)
      return !1;
    if (R != null) {
      if (R < 1)
        return !1;
      var B = T(S);
      if (B && R > b[L] || !B && R > f[L])
        return !1;
    }
    return !0;
  }
  function P(S, L) {
    if (L < 1)
      return !1;
    var R = T(S);
    return !(R && L > 366 || !R && L > 365);
  }
  function N(S, L, R) {
    return !(L < 0 || L > 52 || R != null && (R < 0 || R > 6));
  }
  function x(S, L, R) {
    return !(S != null && (S < 0 || S >= 25) || L != null && (L < 0 || L >= 60) || R != null && (R < 0 || R >= 60));
  }
  e.exports = t.default;
})(nO, ka);
const uO = /* @__PURE__ */ xv(ka);
function lt(e, t) {
  if (t.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present");
}
function va(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? va = function(n) {
    return typeof n;
  } : va = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, va(e);
}
function fn(e) {
  lt(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || va(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), /* @__PURE__ */ new Date(NaN));
}
function yr(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
var cO = {};
function Ao() {
  return cO;
}
function Mn(e, t) {
  var n, r, a, s, o, i, l, c;
  lt(1, arguments);
  var u = Ao(), d = yr((n = (r = (a = (s = t == null ? void 0 : t.weekStartsOn) !== null && s !== void 0 ? s : t == null || (o = t.locale) === null || o === void 0 || (i = o.options) === null || i === void 0 ? void 0 : i.weekStartsOn) !== null && a !== void 0 ? a : u.weekStartsOn) !== null && r !== void 0 ? r : (l = u.locale) === null || l === void 0 || (c = l.options) === null || c === void 0 ? void 0 : c.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var v = fn(e), p = v.getDay(), h = (p < d ? 7 : 0) + p - d;
  return v.setDate(v.getDate() - h), v.setHours(0, 0, 0, 0), v;
}
function Qi(e) {
  var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
var dO = 6048e5;
function fO(e, t, n) {
  lt(2, arguments);
  var r = Mn(e, n), a = Mn(t, n), s = r.getTime() - Qi(r), o = a.getTime() - Qi(a);
  return Math.round((s - o) / dO);
}
function vO(e) {
  lt(1, arguments);
  var t = fn(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function pO(e) {
  lt(1, arguments);
  var t = fn(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function mO(e, t) {
  return lt(1, arguments), fO(vO(e), pO(e), t) + 1;
}
function hO(e, t) {
  var n, r, a, s, o, i, l, c;
  lt(1, arguments);
  var u = fn(e), d = u.getFullYear(), v = Ao(), p = yr((n = (r = (a = (s = t == null ? void 0 : t.firstWeekContainsDate) !== null && s !== void 0 ? s : t == null || (o = t.locale) === null || o === void 0 || (i = o.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && a !== void 0 ? a : v.firstWeekContainsDate) !== null && r !== void 0 ? r : (l = v.locale) === null || l === void 0 || (c = l.options) === null || c === void 0 ? void 0 : c.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(p >= 1 && p <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var h = /* @__PURE__ */ new Date(0);
  h.setFullYear(d + 1, 0, p), h.setHours(0, 0, 0, 0);
  var m = Mn(h, t), y = /* @__PURE__ */ new Date(0);
  y.setFullYear(d, 0, p), y.setHours(0, 0, 0, 0);
  var f = Mn(y, t);
  return u.getTime() >= m.getTime() ? d + 1 : u.getTime() >= f.getTime() ? d : d - 1;
}
function gO(e, t) {
  var n, r, a, s, o, i, l, c;
  lt(1, arguments);
  var u = Ao(), d = yr((n = (r = (a = (s = t == null ? void 0 : t.firstWeekContainsDate) !== null && s !== void 0 ? s : t == null || (o = t.locale) === null || o === void 0 || (i = o.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && a !== void 0 ? a : u.firstWeekContainsDate) !== null && r !== void 0 ? r : (l = u.locale) === null || l === void 0 || (c = l.options) === null || c === void 0 ? void 0 : c.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), v = hO(e, t), p = /* @__PURE__ */ new Date(0);
  p.setFullYear(v, 0, d), p.setHours(0, 0, 0, 0);
  var h = Mn(p, t);
  return h;
}
var _O = 6048e5;
function yO(e, t) {
  lt(1, arguments);
  var n = fn(e), r = Mn(n, t).getTime() - gO(n, t).getTime();
  return Math.round(r / _O) + 1;
}
function La(e) {
  return lt(1, arguments), Mn(e, {
    weekStartsOn: 1
  });
}
function bO(e) {
  lt(1, arguments);
  var t = fn(e), n = t.getFullYear(), r = /* @__PURE__ */ new Date(0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  var a = La(r), s = /* @__PURE__ */ new Date(0);
  s.setFullYear(n, 0, 4), s.setHours(0, 0, 0, 0);
  var o = La(s);
  return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= o.getTime() ? n : n - 1;
}
function wO(e) {
  lt(1, arguments);
  var t = bO(e), n = /* @__PURE__ */ new Date(0);
  n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0);
  var r = La(n);
  return r;
}
var EO = 6048e5;
function DO(e) {
  lt(1, arguments);
  var t = fn(e), n = La(t).getTime() - wO(t).getTime();
  return Math.round(n / EO) + 1;
}
function dt(e, t) {
  lt(2, arguments);
  var n = fn(e), r = yr(t);
  return isNaN(r) ? /* @__PURE__ */ new Date(NaN) : (r && n.setDate(n.getDate() + r), n);
}
function Ma(e, t) {
  lt(2, arguments);
  var n = fn(e), r = yr(t);
  if (isNaN(r))
    return /* @__PURE__ */ new Date(NaN);
  if (!r)
    return n;
  var a = n.getDate(), s = new Date(n.getTime());
  s.setMonth(n.getMonth() + r + 1, 0);
  var o = s.getDate();
  return a >= o ? s : (n.setFullYear(s.getFullYear(), s.getMonth(), a), n);
}
function el(e, t) {
  lt(2, arguments);
  var n = yr(t);
  return Ma(e, n * 12);
}
var zn = /* @__PURE__ */ ((e) => (e.Any = "any", e.All = "all", e))(zn || {}), oc = /* @__PURE__ */ ((e) => (e.Days = "days", e.Weeks = "weeks", e.Months = "months", e.Years = "years", e))(oc || {}), ic = /* @__PURE__ */ ((e) => (e.Days = "days", e.Weekdays = "weekdays", e.Weeks = "weeks", e.Months = "months", e.Years = "years", e))(ic || {}), lc = /* @__PURE__ */ ((e) => (e.OrdinalWeekdays = "ordinalWeekdays", e))(lc || {});
class OO {
  constructor(t, n, r) {
    ae(this, "validated", !0), this.type = t, this.interval = n, this.from = r, this.from || (console.error(
      'A valid "from" date is required for date interval rule. This rule will be skipped.'
    ), this.validated = !1);
  }
  passes(t) {
    if (!this.validated)
      return !0;
    const { date: n } = t;
    switch (this.type) {
      case "days":
        return Co(this.from.date, n) % this.interval === 0;
      case "weeks":
        return jO(this.from.date, n) % this.interval === 0;
      case "months":
        return BO(this.from.date, n) % this.interval === 0;
      case "years":
        return hc(this.from.date, n) % this.interval === 0;
      default:
        return !1;
    }
  }
}
class br {
  constructor(t, n, r, a) {
    ae(this, "components", []), this.type = t, this.validator = r, this.getter = a, this.components = this.normalizeComponents(n);
  }
  static create(t, n) {
    switch (t) {
      case "days":
        return new $O(n);
      case "weekdays":
        return new TO(n);
      case "weeks":
        return new kO(n);
      case "months":
        return new NO(n);
      case "years":
        return new IO(n);
    }
  }
  normalizeComponents(t) {
    if (this.validator(t))
      return [t];
    if (!Nt(t))
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
class $O extends br {
  constructor(t) {
    super(
      "days",
      t,
      SO,
      ({ day: n, dayFromEnd: r }) => [n, -r]
    );
  }
}
class TO extends br {
  constructor(t) {
    super(
      "weekdays",
      t,
      As,
      ({ weekday: n }) => [n]
    );
  }
}
class kO extends br {
  constructor(t) {
    super(
      "weeks",
      t,
      PO,
      ({ week: n, weekFromEnd: r }) => [n, -r]
    );
  }
}
class NO extends br {
  constructor(t) {
    super("months", t, LO, ({ month: n }) => [
      n
    ]);
  }
}
class IO extends br {
  constructor(t) {
    super("years", t, Rt, ({ year: n }) => [n]);
  }
}
class AO {
  constructor(t, n) {
    ae(this, "components"), this.type = t, this.components = this.normalizeComponents(n);
  }
  normalizeArrayConfig(t) {
    const n = [];
    return t.forEach((r, a) => {
      if (Rt(r)) {
        if (a === 0)
          return;
        if (!tl(t[0])) {
          console.error(
            `Ordinal range for "${this.type}" rule is from -5 to -1 or 1 to 5. This rule will be skipped.`
          );
          return;
        }
        if (!As(r)) {
          console.error(
            `Acceptable range for "${this.type}" rule is from 1 to 5. This rule will be skipped`
          );
          return;
        }
        n.push([t[0], r]);
      } else
        Nt(r) && n.push(...this.normalizeArrayConfig(r));
    }), n;
  }
  normalizeComponents(t) {
    const n = [];
    return t.forEach((r, a) => {
      if (Rt(r)) {
        if (a === 0)
          return;
        if (!tl(t[0])) {
          console.error(
            `Ordinal range for "${this.type}" rule is from -5 to -1 or 1 to 5. This rule will be skipped.`
          );
          return;
        }
        if (!As(r)) {
          console.error(
            `Acceptable range for "${this.type}" rule is from 1 to 5. This rule will be skipped`
          );
          return;
        }
        n.push([t[0], r]);
      } else
        Nt(r) && n.push(...this.normalizeArrayConfig(r));
    }), n;
  }
  passes(t) {
    const { weekday: n, weekdayOrdinal: r, weekdayOrdinalFromEnd: a } = t;
    return this.components.some(
      ([s, o]) => (s === r || s === -a) && n === o
    );
  }
}
class CO {
  constructor(t) {
    ae(this, "type", "function"), ae(this, "validated", !0), this.fn = t, Un(t) || (console.error(
      "The function rule requires a valid function. This rule will be skipped."
    ), this.validated = !1);
  }
  passes(t) {
    return this.validated ? this.fn(t) : !0;
  }
}
class xa {
  constructor(t, n = {}, r) {
    ae(this, "validated", !0), ae(this, "config"), ae(this, "type", zn.Any), ae(this, "from"), ae(this, "until"), ae(this, "rules", []), ae(this, "locale", new Fa()), this.parent = r, n.locale && (this.locale = n.locale), this.config = t, Un(t) ? (this.type = zn.All, this.rules = [new CO(t)]) : Nt(t) ? (this.type = zn.Any, this.rules = t.map((a) => new xa(a, n, this))) : on(t) ? (this.type = zn.All, this.from = t.from ? this.locale.getDateParts(t.from) : r == null ? void 0 : r.from, this.until = t.until ? this.locale.getDateParts(t.until) : r == null ? void 0 : r.until, this.rules = this.getObjectRules(t)) : (console.error("Rule group configuration must be an object or an array."), this.validated = !1);
  }
  getObjectRules(t) {
    const n = [];
    if (t.every && (Ht(t.every) && (t.every = [1, `${t.every}s`]), Nt(t.every))) {
      const [r = 1, a = oc.Days] = t.every;
      n.push(new OO(a, r, this.from));
    }
    return Object.values(ic).forEach((r) => {
      r in t && n.push(br.create(r, t[r]));
    }), Object.values(lc).forEach((r) => {
      r in t && n.push(new AO(r, t[r]));
    }), t.on != null && (Nt(t.on) || (t.on = [t.on]), n.push(
      new xa(t.on, { locale: this.locale }, this.parent)
    )), n;
  }
  passes(t) {
    return this.validated ? this.from && t.dayIndex <= this.from.dayIndex || this.until && t.dayIndex >= this.until.dayIndex ? !1 : this.type === zn.Any ? this.rules.some((n) => n.passes(t)) : this.rules.every((n) => n.passes(t)) : !0;
  }
}
function SO(e) {
  return Rt(e) ? e >= 1 && e <= 31 : !1;
}
function As(e) {
  return Rt(e) ? e >= 1 && e <= 7 : !1;
}
function PO(e) {
  return Rt(e) ? e >= -6 && e <= -1 || e >= 1 && e <= 6 : !1;
}
function LO(e) {
  return Rt(e) ? e >= 1 && e <= 12 : !1;
}
function tl(e) {
  return !(!Rt(e) || e < -5 || e > 5 || e === 0);
}
const MO = {
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
}, it = 7, xO = 6, uc = 1e3, cc = uc * 60, dc = cc * 60, pa = dc * 24, RO = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], FO = ["L", "iso"], Sr = {
  milliseconds: [0, 999, 3],
  seconds: [0, 59, 2],
  minutes: [0, 59, 2],
  hours: [0, 23, 2]
}, fc = /d{1,2}|W{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|Z{1,4}|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g, YO = /\[([^]*?)\]/gm, nl = {
  D(e) {
    return e.day;
  },
  DD(e) {
    return Le(e.day, 2);
  },
  // Do(d: DateParts, l: Locale) {
  //   return l.DoFn(d.day);
  // },
  d(e) {
    return e.weekday - 1;
  },
  dd(e) {
    return Le(e.weekday - 1, 2);
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
    return Le(e.month, 2);
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
    return Le(e.year, 4);
  },
  h(e) {
    return e.hours % 12 || 12;
  },
  hh(e) {
    return Le(e.hours % 12 || 12, 2);
  },
  H(e) {
    return e.hours;
  },
  HH(e) {
    return Le(e.hours, 2);
  },
  m(e) {
    return e.minutes;
  },
  mm(e) {
    return Le(e.minutes, 2);
  },
  s(e) {
    return e.seconds;
  },
  ss(e) {
    return Le(e.seconds, 2);
  },
  S(e) {
    return Math.round(e.milliseconds / 100);
  },
  SS(e) {
    return Le(Math.round(e.milliseconds / 10), 2);
  },
  SSS(e) {
    return Le(e.milliseconds, 3);
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
    return `${t > 0 ? "-" : "+"}${Le(Math.floor(Math.abs(t) / 60), 2)}`;
  },
  ZZZ(e) {
    const t = e.timezoneOffset;
    return `${t > 0 ? "-" : "+"}${Le(
      Math.floor(Math.abs(t) / 60) * 100 + Math.abs(t) % 60,
      4
    )}`;
  },
  ZZZZ(e) {
    const t = e.timezoneOffset;
    return `${t > 0 ? "-" : "+"}${Le(Math.floor(Math.abs(t) / 60), 2)}:${Le(
      Math.abs(t) % 60,
      2
    )}`;
  }
}, pn = /\d\d?/, VO = /\d{3}/, UO = /\d{4}/, Nr = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF/]+(\s*?[\u0600-\u06FF]+){1,2}/i, rl = () => {
}, al = (e) => (t, n, r) => {
  const a = r[e].indexOf(
    n.charAt(0).toUpperCase() + n.substr(1).toLowerCase()
  );
  ~a && (t.month = a);
}, Me = {
  D: [
    pn,
    (e, t) => {
      e.day = t;
    }
  ],
  Do: [
    new RegExp(pn.source + Nr.source),
    (e, t) => {
      e.day = parseInt(t, 10);
    }
  ],
  d: [pn, rl],
  W: [Nr, rl],
  M: [
    pn,
    (e, t) => {
      e.month = t - 1;
    }
  ],
  MMM: [Nr, al("monthNamesShort")],
  MMMM: [Nr, al("monthNames")],
  YY: [
    pn,
    (e, t) => {
      const r = +(/* @__PURE__ */ new Date()).getFullYear().toString().substr(0, 2);
      e.year = +`${t > 68 ? r - 1 : r}${t}`;
    }
  ],
  YYYY: [
    UO,
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
    VO,
    (e, t) => {
      e.milliseconds = t;
    }
  ],
  h: [
    pn,
    (e, t) => {
      e.hours = t;
    }
  ],
  m: [
    pn,
    (e, t) => {
      e.minutes = t;
    }
  ],
  s: [
    pn,
    (e, t) => {
      e.seconds = t;
    }
  ],
  a: [
    Nr,
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
Me.DD = Me.D;
Me.dd = Me.d;
Me.WWWW = Me.WWW = Me.WW = Me.W;
Me.MM = Me.M;
Me.mm = Me.m;
Me.hh = Me.H = Me.HH = Me.h;
Me.ss = Me.s;
Me.A = Me.a;
Me.ZZZZ = Me.ZZZ = Me.ZZ = Me.Z;
function vc(e, t) {
  return (rn(e) && e || [
    Ht(e) && e || "YYYY-MM-DD"
  ]).map(
    (n) => FO.reduce(
      (r, a) => r.replace(a, t.masks[a] || ""),
      n
    )
  );
}
function pc(e) {
  return on(e) && "year" in e && "month" in e && "day" in e;
}
function sl(e, t = 1) {
  const n = e.getDay() + 1, r = n >= t ? t - n : -(7 - (t - n));
  return dt(e, r);
}
function mc(e, t, n) {
  const r = Date.UTC(e, t - 1, n);
  return Co(/* @__PURE__ */ new Date(0), new Date(r));
}
function Co(e, t) {
  return Math.round((t.getTime() - e.getTime()) / pa);
}
function jO(e, t) {
  return Math.ceil(Co(sl(e), sl(t)) / 7);
}
function hc(e, t) {
  return t.getUTCFullYear() - e.getUTCFullYear();
}
function BO(e, t) {
  return hc(e, t) * 12 + (t.getMonth() - e.getMonth());
}
function gc(e, t = "") {
  const n = /* @__PURE__ */ new Date(), {
    year: r = n.getFullYear(),
    month: a = n.getMonth() + 1,
    day: s = n.getDate(),
    hours: o = 0,
    minutes: i = 0,
    seconds: l = 0,
    milliseconds: c = 0
  } = e;
  if (t) {
    const u = `${Le(r, 4)}-${Le(a, 2)}-${Le(s, 2)}T${Le(
      o,
      2
    )}:${Le(i, 2)}:${Le(l, 2)}.${Le(c, 3)}`;
    return uO(u, { timeZone: t });
  }
  return new Date(r, a - 1, s, o, i, l, c);
}
function HO(e, t) {
  let n = new Date(e.getTime());
  t.timezone && (n = new Date(
    e.toLocaleString("en-US", { timeZone: t.timezone })
  ), n.setMilliseconds(e.getMilliseconds()));
  const r = n.getMilliseconds(), a = n.getSeconds(), s = n.getMinutes(), o = n.getHours(), i = r + a * uc + s * cc + o * dc, l = n.getMonth() + 1, c = n.getFullYear(), u = t.getMonthParts(l, c), d = n.getDate(), v = u.numDays - d + 1, p = n.getDay() + 1, h = Math.floor((d - 1) / 7 + 1), m = Math.floor((u.numDays - d) / 7 + 1), y = Math.ceil(
    (d + Math.abs(u.firstWeekday - u.firstDayOfWeek)) / 7
  ), f = u.numWeeks - y + 1, b = u.weeknumbers[y], T = mc(c, l, d);
  return {
    milliseconds: r,
    seconds: a,
    minutes: s,
    hours: o,
    time: i,
    day: d,
    dayFromEnd: v,
    weekday: p,
    weekdayOrdinal: h,
    weekdayOrdinalFromEnd: m,
    week: y,
    weekFromEnd: f,
    weeknumber: b,
    month: l,
    year: c,
    date: n,
    dateTime: n.getTime(),
    dayIndex: T,
    timezoneOffset: 0,
    isValid: !0
  };
}
function WO(e, t, n) {
  return `${t}-${e}-${n}`;
}
function GO(e, t, n) {
  const r = t % 4 === 0 && t % 100 !== 0 || t % 400 === 0, a = new Date(t, e - 1, 1), s = a.getDay() + 1, o = e === 2 && r ? 29 : RO[e - 1], i = n - 1, l = mO(a, {
    weekStartsOn: i
  }), c = [], u = [];
  for (let d = 0; d < l; d++) {
    const v = dt(a, d * 7);
    c.push(yO(v, { weekStartsOn: i })), u.push(DO(v));
  }
  return {
    firstDayOfWeek: n,
    firstDayOfMonth: a,
    inLeapYear: r,
    firstWeekday: s,
    numDays: o,
    numWeeks: l,
    month: e,
    year: t,
    weeknumbers: c,
    isoWeeknumbers: u
  };
}
function zO() {
  const e = [];
  for (let a = 0; a < it; a++)
    e.push(
      gc({
        year: 2020,
        month: 1,
        day: 5 + a,
        hours: 12
      })
    );
  return e;
}
function vs(e, t = void 0) {
  const n = new Intl.DateTimeFormat(t, {
    weekday: e
  });
  return zO().map((r) => n.format(r));
}
function KO() {
  const e = [];
  for (let t = 0; t <= 24; t++)
    e.push(new Date(2e3, 0, 1, t));
  return e;
}
function qO(e = void 0) {
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
function _c() {
  const e = [];
  for (let t = 0; t < 12; t++)
    e.push(new Date(2e3, t, 15));
  return e;
}
function ol(e, t = void 0) {
  const n = new Intl.DateTimeFormat(t, {
    month: e,
    timeZone: "UTC"
  });
  return _c().map((r) => n.format(r));
}
function ZO(e, t, n) {
  return Rt(t) ? t === e : Nt(t) ? t.includes(e) : Un(t) ? t(e, n) : !(t.min != null && t.min > e || t.max != null && t.max < e || t.interval != null && e % t.interval !== 0);
}
function Pr(e, t, n) {
  const r = [], [a, s, o] = t;
  for (let i = a; i <= s; i++)
    (n == null || ZO(i, n, e)) && r.push({
      value: i,
      label: Le(i, o)
    });
  return r;
}
function XO(e, t) {
  return {
    milliseconds: Pr(
      e,
      Sr.milliseconds,
      t.milliseconds
    ),
    seconds: Pr(e, Sr.seconds, t.seconds),
    minutes: Pr(e, Sr.minutes, t.minutes),
    hours: Pr(e, Sr.hours, t.hours)
  };
}
function JO(e, t, n, r) {
  const s = Pr(e, t, r).reduce((o, i) => {
    if (i.disabled)
      return o;
    if (isNaN(o))
      return i.value;
    const l = Math.abs(o - n);
    return Math.abs(i.value - n) < l ? i.value : o;
  }, NaN);
  return isNaN(s) ? n : s;
}
function QO(e, t) {
  const n = { ...e };
  return Object.entries(t).forEach(([r, a]) => {
    const s = Sr[r], o = e[r];
    n[r] = JO(
      e,
      s,
      o,
      a
    );
  }), n;
}
function il(e, t, n) {
  return vc(t, n).map((a) => {
    if (typeof a != "string")
      throw new Error("Invalid mask");
    let s = e;
    if (s.length > 1e3)
      return !1;
    let o = !0;
    const i = {};
    if (a.replace(fc, (u) => {
      if (Me[u]) {
        const d = Me[u], v = s.search(d[0]);
        ~v ? s.replace(d[0], (p) => (d[1](i, p, n), s = s.substr(v + p.length), p)) : o = !1;
      }
      return Me[u] ? "" : u.slice(1, u.length - 1);
    }), !o)
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
  }).find((a) => a) || new Date(e);
}
function e$(e, t, n) {
  if (e == null)
    return "";
  let r = vc(t, n)[0];
  /Z$/.test(r) && (n.timezone = "utc");
  const a = [];
  r = r.replace(YO, (o, i) => (a.push(i), "??"));
  const s = n.getDateParts(e);
  return r = r.replace(
    fc,
    (o) => o in nl ? nl[o](s, n) : o.slice(1, o.length - 1)
  ), r.replace(/\?\?/g, () => a.shift());
}
const t$ = {
  daily: ["year", "month", "day"],
  weekly: ["year", "month", "week"],
  monthly: ["year", "month"]
};
function n$({
  monthComps: e,
  prevMonthComps: t,
  nextMonthComps: n
}, r) {
  const a = [], {
    firstDayOfWeek: s,
    firstWeekday: o,
    isoWeeknumbers: i,
    weeknumbers: l,
    numDays: c,
    numWeeks: u
  } = e, d = o + (o < s ? it : 0) - s;
  let v = !0, p = !1, h = !1, m = 0;
  const y = new Intl.DateTimeFormat(r.id, {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric"
  });
  let f = t.numDays - d + 1, b = t.numDays - f + 1, T = Math.floor((f - 1) / it + 1), w = 1, P = t.numWeeks, N = 1, x = t.month, S = t.year;
  const L = /* @__PURE__ */ new Date(), R = L.getDate(), B = L.getMonth() + 1, Y = L.getFullYear();
  for (let q = 1; q <= xO; q++) {
    for (let ce = 1, ee = s; ce <= it; ce++, ee += ee === it ? 1 - it : 1) {
      v && ee === o && (f = 1, b = e.numDays, T = Math.floor((f - 1) / it + 1), w = Math.floor((c - f) / it + 1), P = 1, N = u, x = e.month, S = e.year, v = !1, p = !0);
      const le = r.getDateFromParams(S, x, f, 0, 0, 0, 0), ge = r.getDateFromParams(S, x, f, 12, 0, 0, 0), Ee = r.getDateFromParams(
        S,
        x,
        f,
        23,
        59,
        59,
        999
      ), z = le, $ = `${Le(S, 4)}-${Le(x, 2)}-${Le(f, 2)}`, j = ce, te = it - ce, U = l[q - 1], C = i[q - 1], Z = f === R && x === B && S === Y, se = p && f === 1, ke = p && f === c, De = q === 1, be = q === u, Be = ce === 1, je = ce === it, nt = mc(S, x, f);
      a.push({
        locale: r,
        id: $,
        position: ++m,
        label: f.toString(),
        ariaLabel: y.format(new Date(S, x - 1, f)),
        day: f,
        dayFromEnd: b,
        weekday: ee,
        weekdayPosition: j,
        weekdayPositionFromEnd: te,
        weekdayOrdinal: T,
        weekdayOrdinalFromEnd: w,
        week: P,
        weekFromEnd: N,
        weekPosition: q,
        weeknumber: U,
        isoWeeknumber: C,
        month: x,
        year: S,
        date: z,
        startDate: le,
        endDate: Ee,
        noonDate: ge,
        dayIndex: nt,
        isToday: Z,
        isFirstDay: se,
        isLastDay: ke,
        isDisabled: !p,
        isFocusable: !p,
        isFocused: !1,
        inMonth: p,
        inPrevMonth: v,
        inNextMonth: h,
        onTop: De,
        onBottom: be,
        onLeft: Be,
        onRight: je,
        classes: [
          `id-${$}`,
          `day-${f}`,
          `day-from-end-${b}`,
          `weekday-${ee}`,
          `weekday-position-${j}`,
          `weekday-ordinal-${T}`,
          `weekday-ordinal-from-end-${w}`,
          `week-${P}`,
          `week-from-end-${N}`,
          {
            "is-today": Z,
            "is-first-day": se,
            "is-last-day": ke,
            "in-month": p,
            "in-prev-month": v,
            "in-next-month": h,
            "on-top": De,
            "on-bottom": be,
            "on-left": Be,
            "on-right": je
          }
        ]
      }), p && ke ? (p = !1, h = !0, f = 1, b = c, T = 1, w = Math.floor((c - f) / it + 1), P = 1, N = n.numWeeks, x = n.month, S = n.year) : (f++, b--, T = Math.floor((f - 1) / it + 1), w = Math.floor((c - f) / it + 1));
    }
    P++, N--;
  }
  return a;
}
function r$(e, t, n, r) {
  const a = e.reduce((s, o, i) => {
    const l = Math.floor(i / 7);
    let c = s[l];
    return c || (c = {
      id: `week-${l + 1}`,
      title: "",
      week: o.week,
      weekPosition: o.weekPosition,
      weeknumber: o.weeknumber,
      isoWeeknumber: o.isoWeeknumber,
      weeknumberDisplay: t ? o.weeknumber : n ? o.isoWeeknumber : void 0,
      days: []
    }, s[l] = c), c.days.push(o), s;
  }, Array(e.length / it));
  return a.forEach((s) => {
    const o = s.days[0], i = s.days[s.days.length - 1];
    o.month === i.month ? s.title = `${r.formatDate(o.date, "MMMM YYYY")}` : o.year === i.year ? s.title = `${r.formatDate(
      o.date,
      "MMM"
    )} - ${r.formatDate(i.date, "MMM YYYY")}` : s.title = `${r.formatDate(
      o.date,
      "MMM YYYY"
    )} - ${r.formatDate(i.date, "MMM YYYY")}`;
  }), a;
}
function a$(e, t) {
  return e.days.map((n) => ({
    label: t.formatDate(n.date, t.masks.weekdays),
    weekday: n.weekday
  }));
}
function yc(e, t, n) {
  return sc(
    n.getDateParts(n.toDate(e)),
    t$[t]
  );
}
function bc({ day: e, week: t, month: n, year: r }, a, s, o) {
  if (s === "daily" && e) {
    const i = new Date(r, n - 1, e), l = dt(i, a);
    return {
      day: l.getDate(),
      month: l.getMonth() + 1,
      year: l.getFullYear()
    };
  } else if (s === "weekly" && t) {
    const l = o.getMonthParts(n, r).firstDayOfMonth, c = dt(l, (t - 1 + a) * 7), u = o.getDateParts(c);
    return {
      week: u.week,
      month: u.month,
      year: u.year
    };
  } else {
    const i = new Date(r, n - 1, 1), l = Ma(i, a);
    return {
      month: l.getMonth() + 1,
      year: l.getFullYear()
    };
  }
}
function Wt(e) {
  return e != null && e.month != null && e.year != null;
}
function Cs(e, t) {
  return !Wt(e) || !Wt(t) ? !1 : (e = e, t = t, e.year !== t.year ? e.year < t.year : e.month && t.month && e.month !== t.month ? e.month < t.month : e.week && t.week && e.week !== t.week ? e.week < t.week : e.day && t.day && e.day !== t.day ? e.day < t.day : !1);
}
function Ra(e, t) {
  return !Wt(e) || !Wt(t) ? !1 : (e = e, t = t, e.year !== t.year ? e.year > t.year : e.month && t.month && e.month !== t.month ? e.month > t.month : e.week && t.week && e.week !== t.week ? e.week > t.week : e.day && t.day && e.day !== t.day ? e.day > t.day : !1);
}
function wc(e, t, n) {
  return (e || !1) && !Cs(e, t) && !Ra(e, n);
}
function s$(e, t) {
  return !e && t || e && !t ? !1 : !e && !t ? !0 : (e = e, t = t, e.year === t.year && e.month === t.month && e.week === t.week && e.day === t.day);
}
function o$(e, t, n, r) {
  if (!Wt(e) || !Wt(t))
    return [];
  const a = [];
  for (; !Ra(e, t); )
    a.push(e), e = bc(e, 1, n, r);
  return a;
}
function Ec(e) {
  const { day: t, week: n, month: r, year: a } = e;
  let s = `${a}-${Le(r, 2)}`;
  return n && (s = `${s}-w${n}`), t && (s = `${s}-${Le(t, 2)}`), s;
}
function i$(e, t) {
  const { month: n, year: r, showWeeknumbers: a, showIsoWeeknumbers: s } = e, o = new Date(r, n - 1, 15), i = t.getMonthParts(n, r), l = t.getPrevMonthParts(n, r), c = t.getNextMonthParts(n, r), u = n$({ monthComps: i, prevMonthComps: l, nextMonthComps: c }, t), d = r$(u, a, s, t), v = a$(d[0], t);
  return {
    id: Ec(e),
    month: n,
    year: r,
    monthTitle: t.formatDate(o, t.masks.title),
    shortMonthLabel: t.formatDate(o, "MMM"),
    monthLabel: t.formatDate(o, "MMMM"),
    shortYearLabel: r.toString().substring(2),
    yearLabel: r.toString(),
    monthComps: i,
    prevMonthComps: l,
    nextMonthComps: c,
    days: u,
    weeks: d,
    weekdays: v
  };
}
function l$(e, t) {
  const { day: n, week: r, view: a, trimWeeks: s } = e, o = {
    ...t,
    ...e,
    title: "",
    viewDays: [],
    viewWeeks: []
  };
  switch (a) {
    case "daily": {
      let i = o.days.find((c) => c.inMonth);
      n ? i = o.days.find((c) => c.day === n && c.inMonth) || i : r && (i = o.days.find((c) => c.week === r && c.inMonth));
      const l = o.weeks[i.week - 1];
      o.viewWeeks = [l], o.viewDays = [i], o.week = i.week, o.weekTitle = l.title, o.day = i.day, o.dayTitle = i.ariaLabel, o.title = o.dayTitle;
      break;
    }
    case "weekly": {
      o.week = r || 1;
      const i = o.weeks[o.week - 1];
      o.viewWeeks = [i], o.viewDays = i.days, o.weekTitle = i.title, o.title = o.weekTitle;
      break;
    }
    default: {
      o.title = o.monthTitle, o.viewWeeks = o.weeks.slice(
        0,
        s ? o.monthComps.numWeeks : void 0
      ), o.viewDays = o.days;
      break;
    }
  }
  return o;
}
class ll {
  constructor(t, n, r) {
    ae(this, "keys", []), ae(this, "store", {}), this.size = t, this.createKey = n, this.createItem = r;
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
class nr {
  constructor(t, n = new Fa()) {
    ae(this, "order"), ae(this, "locale"), ae(this, "start", null), ae(this, "end", null), ae(this, "repeat", null);
    var r;
    this.locale = n;
    const { start: a, end: s, span: o, order: i, repeat: l } = t;
    tr(a) && (this.start = n.getDateParts(a)), tr(s) ? this.end = n.getDateParts(s) : this.start != null && o && (this.end = n.getDateParts(dt(this.start.date, o - 1))), this.order = i ?? 0, l && (this.repeat = new xa(
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
    return (Nt(t) ? t : [t]).filter((r) => r).map((r) => nr.from(r, n));
  }
  static from(t, n) {
    if (t instanceof nr)
      return t;
    const r = {
      start: null,
      end: null
    };
    return t != null && (Nt(t) ? (r.start = t[0] ?? null, r.end = t[1] ?? null) : on(t) ? Object.assign(r, t) : (r.start = t, r.end = t)), r.start != null && (r.start = new Date(r.start)), r.end != null && (r.end = new Date(r.end)), new nr(r, n);
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
class u$ {
  constructor() {
    ae(this, "records", {});
  }
  render(t, n, r) {
    var a, s, o, i;
    let l = null;
    const c = r[0].dayIndex, u = r[r.length - 1].dayIndex;
    return n.hasRepeat ? r.forEach((d) => {
      var v, p;
      if (n.startsOnDay(d)) {
        const h = n.daySpan < 1 / 0 ? n.daySpan : 1;
        l = {
          startDay: d.dayIndex,
          startTime: ((v = n.start) == null ? void 0 : v.time) ?? 0,
          endDay: d.dayIndex + h - 1,
          endTime: ((p = n.end) == null ? void 0 : p.time) ?? pa
        }, this.getRangeRecords(t).push(l);
      }
    }) : n.intersectsDayRange(c, u) && (l = {
      startDay: ((a = n.start) == null ? void 0 : a.dayIndex) ?? -1 / 0,
      startTime: ((s = n.start) == null ? void 0 : s.time) ?? -1 / 0,
      endDay: ((o = n.end) == null ? void 0 : o.dayIndex) ?? 1 / 0,
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
    return n.forEach(({ data: s, ranges: o }) => {
      o.filter((i) => i.startDay <= a && i.endDay >= a).forEach((i) => {
        const l = a === i.startDay, c = a === i.endDay, u = l ? i.startTime : 0, d = new Date(t.startDate.getTime() + u), v = c ? i.endTime : pa, p = new Date(t.endDate.getTime() + v), h = u === 0 && v === pa, m = s.order || 0;
        r.push({
          ...i,
          data: s,
          onStart: l,
          onEnd: c,
          startTime: u,
          startDate: d,
          endTime: v,
          endDate: p,
          allDay: h,
          order: m
        });
      });
    }), r.sort((s, o) => s.order - o.order), r;
  }
}
const c$ = 12, d$ = 5;
function f$(e, t) {
  const n = new Intl.DateTimeFormat().resolvedOptions().locale;
  let r;
  Ht(e) ? r = e : ko(e, "id") && (r = e.id), r = (r || n).toLowerCase();
  const a = Object.keys(t), s = (l) => a.find((c) => c.toLowerCase() === l);
  r = s(r) || s(r.substring(0, 2)) || n;
  const o = {
    ...t["en-IE"],
    ...t[r],
    id: r,
    monthCacheSize: c$,
    pageCacheSize: d$
  };
  return on(e) ? Br(e, o) : o;
}
class Fa {
  constructor(t = void 0, n) {
    ae(this, "id"), ae(this, "daysInWeek"), ae(this, "firstDayOfWeek"), ae(this, "masks"), ae(this, "timezone"), ae(this, "hourLabels"), ae(this, "dayNames"), ae(this, "dayNamesShort"), ae(this, "dayNamesShorter"), ae(this, "dayNamesNarrow"), ae(this, "monthNames"), ae(this, "monthNamesShort"), ae(this, "relativeTimeNames"), ae(this, "amPm", ["am", "pm"]), ae(this, "monthCache"), ae(this, "pageCache");
    const { id: r, firstDayOfWeek: a, masks: s, monthCacheSize: o, pageCacheSize: i } = f$(t, tO.value);
    this.monthCache = new ll(
      o,
      WO,
      GO
    ), this.pageCache = new ll(i, Ec, i$), this.id = r, this.daysInWeek = it, this.firstDayOfWeek = TD(a, 1, it), this.masks = s, this.timezone = n || void 0, this.hourLabels = this.getHourLabels(), this.dayNames = vs("long", this.id), this.dayNamesShort = vs("short", this.id), this.dayNamesShorter = this.dayNamesShort.map((l) => l.substring(0, 2)), this.dayNamesNarrow = vs("narrow", this.id), this.monthNames = ol("long", this.id), this.monthNamesShort = ol("short", this.id), this.relativeTimeNames = qO(this.id);
  }
  formatDate(t, n) {
    return e$(t, n, this);
  }
  parseDate(t, n) {
    return il(t, n, this);
  }
  toDate(t, n = {}) {
    const r = /* @__PURE__ */ new Date(NaN);
    let a = r;
    const { fillDate: s, mask: o, patch: i, rules: l } = n;
    if (Rt(t) ? (n.type = "number", a = /* @__PURE__ */ new Date(+t)) : Ht(t) ? (n.type = "string", a = t ? il(t, o || "iso", this) : r) : tr(t) ? (n.type = "date", a = new Date(t.getTime())) : pc(t) && (n.type = "object", a = this.getDateFromParts(t)), a && (i || l)) {
      let c = this.getDateParts(a);
      if (i && s != null) {
        const u = this.getDateParts(this.toDate(s));
        c = this.getDateParts(
          this.toDate({ ...u, ...sc(c, MO[i]) })
        );
      }
      l && (c = QO(c, l)), a = this.getDateFromParts(c);
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
    return nr.from(t, this);
  }
  ranges(t) {
    return nr.fromMany(t, this);
  }
  getDateParts(t) {
    return HO(t, this);
  }
  getDateFromParts(t) {
    return gc(t, this.timezone);
  }
  getDateFromParams(t, n, r, a, s, o, i) {
    return this.getDateFromParts({
      year: t,
      month: n,
      day: r,
      hours: a,
      minutes: s,
      seconds: o,
      milliseconds: i
    });
  }
  getPage(t) {
    const n = this.pageCache.getOrSet(t, this);
    return l$(t, n);
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
    return KO().map((t) => this.formatDate(t, this.masks.hours));
  }
  getDayId(t) {
    return this.formatDate(t, "YYYY-MM-DD");
  }
}
class Dc {
  constructor(t, n, r) {
    ae(this, "key", ""), ae(this, "hashcode", ""), ae(this, "highlight", null), ae(this, "content", null), ae(this, "dot", null), ae(this, "bar", null), ae(this, "event", null), ae(this, "popover", null), ae(this, "customData", null), ae(this, "ranges"), ae(this, "hasRanges", !1), ae(this, "order", 0), ae(this, "pinPage", !1), ae(this, "maxRepeatSpan", 0), ae(this, "locale");
    const { dates: a } = Object.assign(
      this,
      { hashcode: "", order: 0, pinPage: !1 },
      t
    );
    this.key || (this.key = Ta()), this.locale = r, n.normalizeGlyphs(this), this.ranges = r.ranges(a ?? []), this.hasRanges = !!rn(this.ranges), this.maxRepeatSpan = this.ranges.filter((s) => s.hasRepeat).map((s) => s.daySpan).reduce((s, o) => Math.max(s, o), 0);
  }
  intersectsRange({ start: t, end: n }) {
    if (t == null || n == null)
      return !1;
    const r = this.ranges.filter((o) => !o.hasRepeat);
    for (const o of r)
      if (o.intersectsDayRange(t.dayIndex, n.dayIndex))
        return !0;
    const a = this.ranges.filter((o) => o.hasRepeat);
    if (!a.length)
      return !1;
    let s = t;
    for (this.maxRepeatSpan > 1 && (s = this.locale.getDateParts(dt(s.date, -this.maxRepeatSpan))); s.dayIndex <= n.dayIndex; ) {
      for (const o of a)
        if (o.startsOnDay(s))
          return !0;
      s = this.locale.getDateParts(dt(s.date, 1));
    }
    return !1;
  }
}
const Oc = "__vc_base_context__", $c = {
  color: {
    type: String,
    default: () => Dn("color")
  },
  isDark: {
    type: [Boolean, String, Object],
    default: () => Dn("isDark")
  },
  firstDayOfWeek: Number,
  masks: Object,
  locale: [String, Object],
  timezone: String,
  minDate: null,
  maxDate: null,
  disabledDates: null
};
function Tc(e) {
  const t = A(() => e.color ?? ""), n = A(() => e.isDark ?? !1), { displayMode: r } = Mv(n), a = A(() => new LD(t.value)), s = A(() => {
    if (e.locale instanceof Fa)
      return e.locale;
    const u = on(e.locale) ? e.locale : {
      id: e.locale,
      firstDayOfWeek: e.firstDayOfWeek,
      masks: e.masks
    };
    return new Fa(u, e.timezone);
  }), o = A(() => s.value.masks), i = A(() => {
    const u = e.disabledDates ?? [];
    return e.minDate != null && u.push({
      start: null,
      end: dt(s.value.toDate(e.minDate), -1)
    }), e.maxDate != null && u.push({
      start: dt(s.value.toDate(e.maxDate), 1),
      end: null
    }), s.value.ranges(u);
  }), l = A(() => new Dc(
    {
      key: "disabled",
      dates: i.value,
      order: 100
    },
    a.value,
    s.value
  )), c = {
    color: t,
    isDark: n,
    displayMode: r,
    theme: a,
    locale: s,
    masks: o,
    disabledDates: i,
    disabledAttribute: l
  };
  return En(Oc, c), c;
}
function v$(e) {
  return Ye(Oc, Tc(e));
}
const p$ = (e, t, {
  maxSwipeTime: n,
  minHorizontalSwipeDistance: r,
  maxVerticalSwipeDistance: a
}) => {
  if (!e || !e.addEventListener || !Un(t))
    return null;
  let s = 0, o = 0, i = null, l = !1;
  function c(d) {
    const v = d.changedTouches[0];
    s = v.screenX, o = v.screenY, i = (/* @__PURE__ */ new Date()).getTime(), l = !0;
  }
  function u(d) {
    if (!l || !i)
      return;
    l = !1;
    const v = d.changedTouches[0], p = v.screenX - s, h = v.screenY - o;
    if ((/* @__PURE__ */ new Date()).getTime() - i < n && Math.abs(p) >= r && Math.abs(h) <= a) {
      const y = { toLeft: !1, toRight: !1 };
      p < 0 ? y.toLeft = !0 : y.toRight = !0, t(y);
    }
  }
  return bn(e, "touchstart", c, { passive: !0 }), bn(e, "touchend", u, { passive: !0 }), () => {
    yn(e, "touchstart", c), yn(e, "touchend", u);
  };
}, ma = {}, m$ = (e, t = 10) => {
  ma[e] = Date.now() + t;
}, h$ = (e, t) => {
  if (e in ma) {
    const n = ma[e];
    if (Date.now() < n)
      return;
    delete ma[e];
  }
  t();
}, g$ = {
  ...$c,
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
    default: () => Dn("titlePosition")
  },
  navVisibility: {
    type: String,
    default: () => Dn("navVisibility")
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
}, _$ = [
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
], kc = "__vc_calendar_context__";
function y$(e, { emit: t, slots: n }) {
  const r = ne(null), a = ne(null), s = ne(null), o = ne((/* @__PURE__ */ new Date()).getDate()), i = ne(!1), l = ne(Ta()), c = ne(Ta()), u = ne(e.view), d = ne([]), v = ne("");
  let p = null, h = null;
  const {
    theme: m,
    color: y,
    displayMode: f,
    locale: b,
    masks: T,
    disabledAttribute: w,
    disabledDates: P
  } = v$(e), N = A(() => e.rows * e.columns), x = A(() => e.step || N.value), S = A(() => rc(d.value) ?? null), L = A(() => Qn(d.value) ?? null), R = A(
    () => e.minPage || (e.minDate ? j(e.minDate) : null)
  ), B = A(
    () => e.maxPage || (e.maxDate ? j(e.maxDate) : null)
  ), Y = A(() => e.navVisibility), q = A(() => !!e.showWeeknumbers), ce = A(() => !!e.showIsoWeeknumbers), ee = A(() => u.value === "monthly"), le = A(() => u.value === "weekly"), ge = A(() => u.value === "daily"), Ee = () => {
    i.value = !0, t("transition-start");
  }, z = () => {
    i.value = !1, t("transition-end"), p && (p.resolve(!0), p = null);
  }, $ = (H, K, fe = u.value) => bc(H, K, fe, b.value), j = (H) => yc(H, u.value, b.value), te = (H) => {
    !w.value || !De.value || (H.isDisabled = De.value.cellExists(
      w.value.key,
      H.dayIndex
    ));
  }, U = (H) => {
    H.isFocusable = H.inMonth && H.day === o.value;
  }, C = (H, K) => {
    for (const fe of H)
      for (const I of fe.days)
        if (K(I) === !1)
          return;
  }, Z = A(
    () => d.value.reduce((H, K) => (H.push(...K.viewDays), H), [])
  ), se = A(() => {
    const H = [];
    return (e.attributes || []).forEach((K, fe) => {
      if (!K || !K.dates)
        return;
      const I = ko(K, "key") ? K.key : fe, G = K.order || 0;
      H.push(
        new Dc(
          {
            ...K,
            key: I,
            order: G
          },
          m.value,
          b.value
        )
      );
    }), w.value && H.push(w.value), H;
  }), ke = A(() => rn(se.value)), De = A(() => {
    const H = new u$();
    return se.value.forEach((K) => {
      K.ranges.forEach((fe) => {
        H.render(K, fe, Z.value);
      });
    }), H;
  }), be = A(() => Z.value.reduce((H, K) => (H[K.dayIndex] = { day: K, cells: [] }, H[K.dayIndex].cells.push(...De.value.getCells(K)), H), {})), Be = (H, K) => {
    const fe = e.showWeeknumbers || e.showIsoWeeknumbers;
    return fe == null ? "" : wp(fe) ? fe ? "left" : "" : fe.startsWith("right") ? K > 1 ? "right" : fe : H > 1 ? "left" : fe;
  }, je = () => {
    var H, K;
    if (!ke.value)
      return null;
    const fe = se.value.find((ue) => ue.pinPage) || se.value[0];
    if (!fe || !fe.hasRanges)
      return null;
    const [I] = fe.ranges, G = ((H = I.start) == null ? void 0 : H.date) || ((K = I.end) == null ? void 0 : K.date);
    return G ? j(G) : null;
  }, nt = () => {
    if (Wt(S.value))
      return S.value;
    const H = je();
    return Wt(H) ? H : j(/* @__PURE__ */ new Date());
  }, E = (H, K = {}) => {
    const { view: fe = u.value, position: I = 1, force: G } = K, ue = I > 0 ? 1 - I : -(N.value + I);
    let Oe = $(H, ue, fe), Ze = $(Oe, N.value - 1, fe);
    return G || (Cs(Oe, R.value) ? Oe = R.value : Ra(Ze, B.value) && (Oe = $(B.value, 1 - N.value)), Ze = $(Oe, N.value - 1)), { fromPage: Oe, toPage: Ze };
  }, _ = (H, K, fe = "") => {
    if (fe === "none" || fe === "fade")
      return fe;
    if ((H == null ? void 0 : H.view) !== (K == null ? void 0 : K.view))
      return "fade";
    const I = Ra(K, H), G = Cs(K, H);
    return !I && !G ? "fade" : fe === "slide-v" ? G ? "slide-down" : "slide-up" : G ? "slide-right" : "slide-left";
  }, M = (H = {}) => new Promise((K, fe) => {
    const { position: I = 1, force: G = !1, transition: ue } = H, Oe = Wt(H.page) ? H.page : nt(), { fromPage: Ze } = E(Oe, {
      position: I,
      force: G
    }), Mt = [];
    for (let ft = 0; ft < N.value; ft++) {
      const Wn = $(Ze, ft), Or = ft + 1, na = Math.ceil(Or / e.columns), Dt = e.rows - na + 1, ra = Or % e.columns || e.columns, $r = e.columns - ra + 1, ls = Be(ra, $r);
      Mt.push(
        b.value.getPage({
          ...Wn,
          view: u.value,
          titlePosition: e.titlePosition,
          trimWeeks: e.trimWeeks,
          position: Or,
          row: na,
          rowFromEnd: Dt,
          column: ra,
          columnFromEnd: $r,
          showWeeknumbers: q.value,
          showIsoWeeknumbers: ce.value,
          weeknumberPosition: ls
        })
      );
    }
    v.value = _(
      d.value[0],
      Mt[0],
      ue
    ), d.value = Mt, v.value && v.value !== "none" ? p = {
      resolve: K,
      reject: fe
    } : K(!0);
  }), Q = (H) => {
    const K = S.value ?? j(/* @__PURE__ */ new Date());
    return $(K, H);
  }, oe = (H, K = {}) => {
    const fe = Wt(H) ? H : j(H);
    return Object.assign(
      K,
      E(fe, {
        ...K,
        force: !0
      })
    ), o$(
      K.fromPage,
      K.toPage,
      u.value,
      b.value
    ).map((G) => wc(G, R.value, B.value)).every((G) => G);
  }, ye = (H, K = {}) => oe(Q(H), K), ot = A(() => ye(-x.value)), qe = A(() => ye(x.value)), Et = async (H, K = {}) => !K.force && !oe(H, K) ? !1 : (K.fromPage && !s$(K.fromPage, S.value) && (a.value && a.value.hide({ hideDelay: 0 }), K.view && (m$("view", 10), u.value = K.view), await M({
    ...K,
    page: K.fromPage,
    position: 1,
    force: !0
  }), t("did-move", d.value)), !0), Vt = (H, K = {}) => Et(Q(H), K), Pe = () => Vt(-x.value), F = () => Vt(x.value), W = (H) => {
    const K = ee.value ? ".in-month" : "", fe = `.id-${b.value.getDayId(H)}${K}`, I = `${fe}.vc-focusable, ${fe} .vc-focusable`, G = r.value;
    if (G) {
      const ue = G.querySelector(I);
      if (ue)
        return ue.focus(), !0;
    }
    return !1;
  }, He = async (H, K = {}) => W(H) ? !0 : (await Et(H, K), W(H)), We = (H, K) => {
    o.value = H.day, t("dayclick", H, K);
  }, Ut = (H, K) => {
    t("daymouseenter", H, K);
  }, vn = (H, K) => {
    t("daymouseleave", H, K);
  }, Pt = (H, K) => {
    o.value = H.day, s.value = H, H.isFocused = !0, t("dayfocusin", H, K);
  }, Lt = (H, K) => {
    s.value = null, H.isFocused = !1, t("dayfocusout", H, K);
  }, kn = (H, K) => {
    t("daykeydown", H, K);
    const fe = H.noonDate;
    let I = null;
    switch (K.key) {
      case "ArrowLeft": {
        I = dt(fe, -1);
        break;
      }
      case "ArrowRight": {
        I = dt(fe, 1);
        break;
      }
      case "ArrowUp": {
        I = dt(fe, -7);
        break;
      }
      case "ArrowDown": {
        I = dt(fe, 7);
        break;
      }
      case "Home": {
        I = dt(fe, -H.weekdayPosition + 1);
        break;
      }
      case "End": {
        I = dt(fe, H.weekdayPositionFromEnd);
        break;
      }
      case "PageUp": {
        K.altKey ? I = el(fe, -1) : I = Ma(fe, -1);
        break;
      }
      case "PageDown": {
        K.altKey ? I = el(fe, 1) : I = Ma(fe, 1);
        break;
      }
    }
    I && (K.preventDefault(), He(I).catch());
  }, Hn = (H) => {
    const K = s.value;
    K != null && kn(K, H);
  }, is = (H, K) => {
    t("weeknumberclick", H, K);
  };
  M({
    page: e.initialPage,
    position: e.initialPagePosition
  }), Vn(() => {
    !e.disablePageSwipe && r.value && (h = p$(
      r.value,
      ({ toLeft: H = !1, toRight: K = !1 }) => {
        H ? F() : K && Pe();
      },
      Dn("touch")
    ));
  }), Kr(() => {
    d.value = [], h && h();
  }), Ce(
    () => b.value,
    () => {
      M();
    }
  ), Ce(
    () => N.value,
    () => M()
  ), Ce(
    () => e.view,
    () => u.value = e.view
  ), Ce(
    () => u.value,
    () => {
      h$("view", () => {
        M();
      }), t("update:view", u.value);
    }
  ), Ce(
    () => o.value,
    () => {
      C(d.value, (H) => U(H));
    }
  ), Xs(() => {
    t("update:pages", d.value), C(d.value, (H) => {
      te(H), U(H);
    });
  });
  const ta = {
    emit: t,
    slots: n,
    containerRef: r,
    navPopoverRef: a,
    focusedDay: s,
    inTransition: i,
    navPopoverId: l,
    dayPopoverId: c,
    view: u,
    pages: d,
    transitionName: v,
    theme: m,
    color: y,
    displayMode: f,
    locale: b,
    masks: T,
    attributes: se,
    disabledAttribute: w,
    disabledDates: P,
    attributeContext: De,
    days: Z,
    dayCells: be,
    count: N,
    step: x,
    firstPage: S,
    lastPage: L,
    canMovePrev: ot,
    canMoveNext: qe,
    minPage: R,
    maxPage: B,
    isMonthly: ee,
    isWeekly: le,
    isDaily: ge,
    navVisibility: Y,
    showWeeknumbers: q,
    showIsoWeeknumbers: ce,
    getDateAddress: j,
    canMove: oe,
    canMoveBy: ye,
    move: Et,
    moveBy: Vt,
    movePrev: Pe,
    moveNext: F,
    onTransitionBeforeEnter: Ee,
    onTransitionAfterEnter: z,
    tryFocusDate: W,
    focusDate: He,
    onKeydown: Hn,
    onDayKeydown: kn,
    onDayClick: We,
    onDayMouseenter: Ut,
    onDayMouseleave: vn,
    onDayFocusin: Pt,
    onDayFocusout: Lt,
    onWeeknumberClick: is
  };
  return En(kc, ta), ta;
}
function Bn() {
  const e = Ye(kc);
  if (e)
    return e;
  throw new Error(
    "Calendar context missing. Please verify this component is nested within a valid context provider."
  );
}
const b$ = {
  inheritAttrs: !1
}, rr = /* @__PURE__ */ Se({
  ...b$,
  __name: "CalendarSlot",
  props: {
    name: null
  },
  setup(e) {
    const { slots: t } = Bn();
    return (n, r) => g(t)[e.name] ? (D(), Ue(su(g(t)[e.name]), ou(un({ key: 0 }, n.$attrs)), null, 16)) : At(n.$slots, "default", { key: 1 });
  }
});
function Ss(e) {
  document && document.dispatchEvent(
    new CustomEvent("show-popover", {
      detail: e
    })
  );
}
function Ya(e) {
  document && document.dispatchEvent(
    new CustomEvent("hide-popover", {
      detail: e
    })
  );
}
function Nc(e) {
  document && document.dispatchEvent(
    new CustomEvent("toggle-popover", {
      detail: e
    })
  );
}
function Ic(e) {
  const { visibility: t } = e, n = t === "click", r = t === "hover", a = t === "hover-focus", s = t === "focus";
  e.autoHide = !n;
  let o = !1, i = !1;
  const l = (h) => {
    n && (Nc({
      ...e,
      target: e.target || h.currentTarget
    }), h.stopPropagation());
  }, c = (h) => {
    o || (o = !0, (r || a) && Ss({
      ...e,
      target: e.target || h.currentTarget
    }));
  }, u = () => {
    o && (o = !1, (r || a && !i) && Ya(e));
  }, d = (h) => {
    i || (i = !0, (s || a) && Ss({
      ...e,
      target: e.target || h.currentTarget
    }));
  }, v = (h) => {
    i && !fa(h.currentTarget, h.relatedTarget) && (i = !1, (s || a && !o) && Ya(e));
  }, p = {};
  switch (e.visibility) {
    case "click":
      p.click = l;
      break;
    case "hover":
      p.mousemove = c, p.mouseleave = u;
      break;
    case "focus":
      p.focusin = d, p.focusout = v;
      break;
    case "hover-focus":
      p.mousemove = c, p.mouseleave = u, p.focusin = d, p.focusout = v;
      break;
  }
  return p;
}
const ul = (e) => {
  const t = $a(e);
  if (t == null)
    return;
  const n = t.popoverHandlers;
  !n || !n.length || (n.forEach((r) => r()), delete t.popoverHandlers);
}, cl = (e, t) => {
  const n = $a(e);
  if (n == null)
    return;
  const r = [], a = Ic(t);
  Object.entries(a).forEach(([s, o]) => {
    r.push(bn(n, s, o));
  }), n.popoverHandlers = r;
}, Ac = {
  mounted(e, t) {
    const { value: n } = t;
    n && cl(e, n);
  },
  updated(e, t) {
    const { oldValue: n, value: r } = t, a = n == null ? void 0 : n.visibility, s = r == null ? void 0 : r.visibility;
    a !== s && (a && (ul(e), s || Ya(n)), s && cl(e, r));
  },
  unmounted(e) {
    ul(e);
  }
}, w$ = ["disabled"], E$ = {
  key: 1,
  type: "button",
  class: "vc-title"
}, D$ = ["disabled"], Cc = /* @__PURE__ */ Se({
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
      canMoveNext: o,
      moveNext: i
    } = Bn(), l = A(() => {
      switch (t.page.titlePosition) {
        case "left":
          return "bottom-start";
        case "right":
          return "bottom-end";
        default:
          return "bottom";
      }
    }), c = A(() => {
      const { page: m } = t;
      return {
        id: n.value,
        visibility: r.value,
        placement: l.value,
        modifiers: [{ name: "flip", options: { fallbackPlacements: ["bottom"] } }],
        data: { page: m },
        isInteractive: !0
      };
    }), u = A(() => t.page.titlePosition.includes("left")), d = A(() => t.page.titlePosition.includes("right")), v = A(() => t.layout ? t.layout : u.value ? "tu-pn" : d.value ? "pn-tu" : "p-tu-n;"), p = A(() => ({
      prev: v.value.includes("p") && !t.hideArrows,
      title: v.value.includes("t") && !t.hideTitle,
      next: v.value.includes("n") && !t.hideArrows
    })), h = A(() => ({ gridTemplateColumns: v.value.split("").map((y) => {
      switch (y) {
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
    return (m, y) => (D(), k("div", {
      class: Xe(["vc-header", { "is-lg": e.isLg, "is-xl": e.isXl, "is-2xl": e.is2xl }]),
      style: Lr(g(h))
    }, [
      g(p).prev ? (D(), k("button", {
        key: 0,
        type: "button",
        class: "vc-arrow vc-prev vc-focus",
        disabled: !g(a),
        onClick: y[0] || (y[0] = //@ts-ignore
        (...f) => g(s) && g(s)(...f)),
        onKeydown: y[1] || (y[1] = Qo(
          //@ts-ignore
          (...f) => g(s) && g(s)(...f),
          ["space", "enter"]
        ))
      }, [
        _e(rr, {
          name: "header-prev-button",
          disabled: !g(a)
        }, {
          default: tt(() => [
            _e(lr, {
              name: "ChevronLeft",
              size: "24"
            })
          ]),
          _: 1
        }, 8, ["disabled"])
      ], 40, w$)) : X("", !0),
      g(p).title ? Ke((D(), k("button", E$, [
        _e(rr, {
          name: "header-title",
          title: e.page.title
        }, {
          default: tt(() => [
            O("span", null, pe(e.page.title), 1)
          ]),
          _: 1
        }, 8, ["title"])
      ])), [
        [g(Ac), g(c)]
      ]) : X("", !0),
      g(p).next ? (D(), k("button", {
        key: 2,
        type: "button",
        class: "vc-arrow vc-next vc-focus",
        disabled: !g(o),
        onClick: y[2] || (y[2] = //@ts-ignore
        (...f) => g(i) && g(i)(...f)),
        onKeydown: y[3] || (y[3] = Qo(
          //@ts-ignore
          (...f) => g(i) && g(i)(...f),
          ["space", "enter"]
        ))
      }, [
        _e(rr, {
          name: "header-next-button",
          disabled: !g(o)
        }, {
          default: tt(() => [
            _e(lr, {
              name: "ChevronRight",
              size: "24"
            })
          ]),
          _: 1
        }, 8, ["disabled"])
      ], 40, D$)) : X("", !0)
    ], 6));
  }
}), O$ = Se({
  directives: { popover: Ac },
  components: { CalendarSlot: rr },
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
      onDayClick: o,
      onDayMouseenter: i,
      onDayMouseleave: l,
      onDayFocusin: c,
      onDayFocusout: u,
      onDayKeydown: d
    } = Bn(), v = A(() => e.day), p = A(() => r.value.getCells(v.value)), h = A(
      () => p.value.map((ee) => ee.data)
    ), m = A(() => ({
      ...v.value,
      attributes: h.value,
      attributeCells: p.value
    }));
    function y({ data: ee }, { popovers: le }) {
      const { key: ge, customData: Ee, popover: z } = ee;
      if (!z)
        return;
      const $ = Hi(
        {
          key: ge,
          customData: Ee,
          attribute: ee
        },
        { ...z },
        {
          visibility: z.label ? "hover" : "click",
          placement: "bottom",
          isInteractive: !z.label
        }
      );
      le.splice(0, 0, $);
    }
    const f = A(() => {
      const ee = {
        ...n.value.prepareRender({}),
        popovers: []
      };
      return p.value.forEach((le) => {
        n.value.render(le, ee), y(le, ee);
      }), ee;
    }), b = A(() => f.value.highlights), T = A(() => !!rn(b.value)), w = A(() => f.value.content), P = A(() => f.value.dots), N = A(() => !!rn(P.value)), x = A(() => f.value.bars), S = A(() => !!rn(x.value)), L = A(() => f.value.popovers), R = A(
      () => L.value.map((ee) => ee.attribute)
    ), B = A(() => [
      "vc-day",
      ...v.value.classes,
      { "vc-day-box-center-center": !s["day-content"] },
      { "is-not-in-month": !e.day.inMonth }
    ]), Y = A(() => {
      let ee;
      v.value.isFocusable ? ee = "0" : ee = "-1";
      const le = [
        "vc-day-content vc-focusable vc-focus vc-attr",
        { "vc-disabled": v.value.isDisabled },
        Cn(Qn(b.value), "contentClass"),
        Cn(Qn(w.value), "class") || ""
      ], ge = {
        ...Cn(Qn(b.value), "contentStyle"),
        ...Cn(Qn(w.value), "style")
      };
      return {
        class: le,
        style: ge,
        tabindex: ee,
        "aria-label": v.value.ariaLabel,
        "aria-disabled": !!v.value.isDisabled,
        role: "button"
      };
    }), q = A(() => ({
      click(ee) {
        o(m.value, ee);
      },
      mouseenter(ee) {
        i(m.value, ee);
      },
      mouseleave(ee) {
        l(m.value, ee);
      },
      focusin(ee) {
        c(m.value, ee);
      },
      focusout(ee) {
        u(m.value, ee);
      },
      keydown(ee) {
        d(m.value, ee);
      }
    })), ce = A(() => rn(L.value) ? Hi(
      {
        id: a.value,
        data: { day: v, attributes: R.value }
      },
      ...L.value
    ) : null);
    return {
      attributes: h,
      attributeCells: p,
      bars: x,
      dayClasses: B,
      dayContentProps: Y,
      dayContentEvents: q,
      dayPopover: ce,
      glyphs: f,
      dots: P,
      hasDots: N,
      hasBars: S,
      highlights: b,
      hasHighlights: T,
      locale: t,
      popovers: L
    };
  }
}), $$ = {
  key: 0,
  class: "vc-highlights vc-day-layer"
}, T$ = {
  key: 1,
  class: "vc-day-layer vc-day-box-center-bottom"
}, k$ = { class: "vc-dots" }, N$ = {
  key: 2,
  class: "vc-day-layer vc-day-box-center-bottom"
}, I$ = { class: "vc-bars" };
function A$(e, t, n, r, a, s) {
  const o = An("CalendarSlot"), i = Md("popover");
  return D(), k("div", {
    class: Xe(e.dayClasses)
  }, [
    e.hasHighlights ? (D(), k("div", $$, [
      (D(!0), k(re, null, Te(e.highlights, ({ key: l, wrapperClass: c, class: u, style: d }) => (D(), k("div", {
        key: l,
        class: Xe(c)
      }, [
        O("div", {
          class: Xe(u),
          style: Lr(d)
        }, null, 6)
      ], 2))), 128))
    ])) : X("", !0),
    _e(o, {
      name: "day-content",
      day: e.day,
      attributes: e.attributes,
      "attribute-cells": e.attributeCells,
      dayProps: e.dayContentProps,
      dayEvents: e.dayContentEvents,
      locale: e.locale
    }, {
      default: tt(() => [
        Ke((D(), k("div", un(e.dayContentProps, xd(e.dayContentEvents, !0)), [
          qr(pe(e.day.label), 1)
        ], 16)), [
          [i, e.dayPopover]
        ])
      ]),
      _: 1
    }, 8, ["day", "attributes", "attribute-cells", "dayProps", "dayEvents", "locale"]),
    e.hasDots ? (D(), k("div", T$, [
      O("div", k$, [
        (D(!0), k(re, null, Te(e.dots, ({ key: l, class: c, style: u }) => (D(), k("span", {
          key: l,
          class: Xe(c),
          style: Lr(u)
        }, null, 6))), 128))
      ])
    ])) : X("", !0),
    e.hasBars ? (D(), k("div", N$, [
      O("div", I$, [
        (D(!0), k(re, null, Te(e.bars, ({ key: l, class: c, style: u }) => (D(), k("span", {
          key: l,
          class: Xe(c),
          style: Lr(u)
        }, null, 6))), 128))
      ])
    ])) : X("", !0)
  ], 2);
}
const C$ = /* @__PURE__ */ cn(O$, [["render", A$]]), S$ = {
  name: "CalendarPane",
  inheritAttrs: !1,
  components: { CalendarHeader: Cc, CalendarDay: C$ },
  props: {
    page: { type: Object, required: !0 }
  },
  setup() {
    const { onWeeknumberClick: e } = Bn();
    return {
      onWeeknumberClick: e
    };
  }
}, P$ = { class: "vc-weekdays" }, L$ = ["onClick"];
function M$(e, t, n, r, a, s) {
  const o = An("CalendarHeader"), i = An("CalendarDay");
  return D(), k("div", {
    class: Xe([
      "vc-pane",
      `row-${n.page.row}`,
      `row-from-end-${n.page.rowFromEnd}`,
      `column-${n.page.column}`,
      `column-from-end-${n.page.columnFromEnd}`
    ]),
    ref: "pane"
  }, [
    _e(o, {
      page: n.page,
      "is-lg": "",
      "hide-arrows": ""
    }, null, 8, ["page"]),
    O("div", {
      class: Xe(["vc-weeks", {
        [`vc-show-weeknumbers-${n.page.weeknumberPosition}`]: n.page.weeknumberPosition
      }])
    }, [
      O("div", P$, [
        (D(!0), k(re, null, Te(n.page.weekdays, ({ weekday: l, label: c }, u) => (D(), k("div", {
          key: u,
          class: Xe(`vc-weekday vc-weekday-${l}`)
        }, pe(c), 3))), 128))
      ]),
      (D(!0), k(re, null, Te(n.page.viewWeeks, (l) => (D(), k("div", {
        key: `weeknumber-${l.weeknumber}`,
        class: "vc-week"
      }, [
        n.page.weeknumberPosition ? (D(), k("div", {
          key: 0,
          class: Xe(["vc-weeknumber", `is-${n.page.weeknumberPosition}`])
        }, [
          O("span", {
            class: Xe(["vc-weeknumber-content"]),
            onClick: (c) => r.onWeeknumberClick(l, c)
          }, pe(l.weeknumberDisplay), 9, L$)
        ], 2)) : X("", !0),
        (D(!0), k(re, null, Te(l.days, (c) => (D(), Ue(i, {
          key: c.id,
          day: c
        }, null, 8, ["day"]))), 128))
      ]))), 128))
    ], 2)
  ], 2);
}
const x$ = /* @__PURE__ */ cn(S$, [["render", M$]]), R$ = Se({
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
    const r = ne();
    let a = null, s = null;
    const o = Js({
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
    function i($) {
      $ && (o.direction = $.split("-")[0]);
    }
    function l({ placement: $, options: j }) {
      i($ || (j == null ? void 0 : j.placement));
    }
    const c = A(() => ({
      placement: o.placement,
      strategy: o.positionFixed ? "fixed" : "absolute",
      boundary: "",
      modifiers: [
        {
          name: "onUpdate",
          enabled: !0,
          phase: "afterWrite",
          fn: l
        },
        ...o.modifiers || []
      ],
      onFirstUpdate: l
    })), u = A(() => {
      const $ = o.direction === "left" || o.direction === "right";
      let j = "";
      if (o.placement) {
        const te = o.placement.split("-");
        te.length > 1 && (j = te[1]);
      }
      return ["start", "top", "left"].includes(j) ? $ ? "top" : "left" : ["end", "bottom", "right"].includes(j) ? $ ? "bottom" : "right" : $ ? "middle" : "center";
    });
    function d() {
      s && (s.destroy(), s = null);
    }
    function v() {
      Zn(() => {
        const $ = $a(o.target);
        !$ || !r.value || (s && s.state.elements.reference !== $ && d(), s ? s.update() : s = ov(
          $,
          r.value,
          c.value
        ));
      });
    }
    function p($) {
      Object.assign(o, ac($, "force"));
    }
    function h($, j) {
      clearTimeout(n), $ > 0 ? n = setTimeout(j, $) : j();
    }
    function m($) {
      return !$ || !s ? !1 : $a($) === s.state.elements.reference;
    }
    async function y($ = {}) {
      o.force || ($.force && (o.force = !0), h($.showDelay ?? e.showDelay, () => {
        o.isVisible && (o.force = !1, t("after-show")), p({
          ...$,
          isVisible: !0
        }), v();
      }));
    }
    function f($ = {}) {
      s && ($.target && !m($.target) || o.force || ($.force && (o.force = !0), h($.hideDelay ?? e.hideDelay, () => {
        o.isVisible || (o.force = !1), o.isVisible = !1;
      })));
    }
    function b($ = {}) {
      $.target != null && (o.isVisible && m($.target) ? f($) : y($));
    }
    function T($) {
      if (!s)
        return;
      const j = s.state.elements.reference;
      if (!r.value || !j)
        return;
      const te = $.target;
      fa(r.value, te) || fa(j, te) || f({ force: !0 });
    }
    function w($) {
      ($.key === "Esc" || $.key === "Escape") && f();
    }
    function P({ detail: $ }) {
      !$.id || $.id !== e.id || y($);
    }
    function N({ detail: $ }) {
      !$.id || $.id !== e.id || f($);
    }
    function x({ detail: $ }) {
      !$.id || $.id !== e.id || b($);
    }
    function S() {
      bn(document, "keydown", w), bn(document, "click", T), bn(document, "show-popover", P), bn(document, "hide-popover", N), bn(document, "toggle-popover", x);
    }
    function L() {
      yn(document, "keydown", w), yn(document, "click", T), yn(document, "show-popover", P), yn(document, "hide-popover", N), yn(document, "toggle-popover", x);
    }
    function R($) {
      t("before-show", $);
    }
    function B($) {
      o.force = !1, t("after-show", $);
    }
    function Y($) {
      t("before-hide", $);
    }
    function q($) {
      o.force = !1, d(), t("after-hide", $);
    }
    function ce($) {
      $.stopPropagation();
    }
    function ee() {
      o.isHovered = !0, o.isInteractive && ["hover", "hover-focus"].includes(o.visibility) && y();
    }
    function le() {
      if (o.isHovered = !1, !s)
        return;
      const $ = s.state.elements.reference;
      o.autoHide && !o.isFocused && (!$ || $ !== document.activeElement) && ["hover", "hover-focus"].includes(o.visibility) && f();
    }
    function ge() {
      o.isFocused = !0, o.isInteractive && ["focus", "hover-focus"].includes(o.visibility) && y();
    }
    function Ee($) {
      ["focus", "hover-focus"].includes(o.visibility) && (!$.relatedTarget || !fa(r.value, $.relatedTarget)) && (o.isFocused = !1, !o.isHovered && o.autoHide && f());
    }
    function z() {
      a != null && (a.disconnect(), a = null);
    }
    return Ce(
      () => r.value,
      ($) => {
        z(), $ && (a = new ResizeObserver(() => {
          s && s.update();
        }), a.observe($));
      }
    ), Ce(() => o.placement, i, {
      immediate: !0
    }), Vn(() => {
      S();
    }), Kr(() => {
      d(), z(), L();
    }), {
      ...Pd(o),
      popoverRef: r,
      alignment: u,
      hide: f,
      setupPopper: v,
      beforeEnter: R,
      afterEnter: B,
      beforeLeave: Y,
      afterLeave: q,
      onClick: ce,
      onMouseOver: ee,
      onMouseLeave: le,
      onFocusIn: ge,
      onFocusOut: Ee
    };
  }
});
function F$(e, t, n, r, a, s) {
  return D(), k("div", {
    class: Xe(["vc-popover-content-wrapper", { "is-interactive": e.isInteractive }]),
    ref: "popoverRef",
    onClick: t[0] || (t[0] = (...o) => e.onClick && e.onClick(...o)),
    onMouseover: t[1] || (t[1] = (...o) => e.onMouseOver && e.onMouseOver(...o)),
    onMouseleave: t[2] || (t[2] = (...o) => e.onMouseLeave && e.onMouseLeave(...o)),
    onFocusin: t[3] || (t[3] = (...o) => e.onFocusIn && e.onFocusIn(...o)),
    onFocusout: t[4] || (t[4] = (...o) => e.onFocusOut && e.onFocusOut(...o))
  }, [
    _e(iu, {
      name: `vc-${e.transition}`,
      appear: "",
      onBeforeEnter: e.beforeEnter,
      onAfterEnter: e.afterEnter,
      onBeforeLeave: e.beforeLeave,
      onAfterLeave: e.afterLeave
    }, {
      default: tt(() => [
        e.isVisible ? (D(), k("div", un({
          key: 0,
          tabindex: "-1",
          class: `vc-popover-content direction-${e.direction}`
        }, e.$attrs), [
          At(e.$slots, "default", {
            direction: e.direction,
            alignment: e.alignment,
            data: e.data,
            hide: e.hide
          }, () => [
            qr(pe(e.data), 1)
          ]),
          O("span", {
            class: Xe([
              "vc-popover-caret",
              `direction-${e.direction}`,
              `align-${e.alignment}`
            ])
          }, null, 2)
        ], 16)) : X("", !0)
      ]),
      _: 3
    }, 8, ["name", "onBeforeEnter", "onAfterEnter", "onBeforeLeave", "onAfterLeave"])
  ], 34);
}
const So = /* @__PURE__ */ cn(R$, [["render", F$]]), Y$ = {
  value: { type: Object, required: !0 }
}, V$ = ["input"], U$ = "__vc_calendar_nav_context__";
function j$(e, { emit: t }) {
  const n = ne(!0), r = ne(0), a = ne(0), s = 12, o = ne(null), { locale: i, masks: l, canMove: c, getDateAddress: u } = Bn();
  function d() {
    setTimeout(() => {
      if (o.value == null)
        return;
      const C = o.value.querySelector(
        ".vc-nav-item:not(:disabled)"
      );
      C && C.focus();
    }, 10);
  }
  function v(C, Z) {
    t("input", { month: C, year: Z }, { position: R.value });
  }
  function p(C) {
    r.value = C, n.value = !0, d();
  }
  function h(C) {
    const { year: Z } = u(/* @__PURE__ */ new Date()), se = C * s, ke = se + s, De = [];
    for (let be = se; be < ke; be += 1) {
      let Be = !1;
      for (let je = 1; je < 12 && (Be = c({ month: je, year: be }, { position: R.value }), !Be); je++)
        ;
      De.push({
        year: be,
        id: be.toString(),
        label: be.toString(),
        ariaLabel: be.toString(),
        isActive: be === L.value,
        isCurrent: be === Z,
        isDisabled: !Be,
        click: () => p(be)
      });
    }
    return De;
  }
  function m(C) {
    const { month: Z, year: se } = u(/* @__PURE__ */ new Date());
    return _c().map((ke, De) => {
      const be = De + 1;
      return {
        month: be,
        year: C,
        id: `${C}.${Le(be, 2)}`,
        label: i.value.formatDate(ke, l.value.navMonths),
        ariaLabel: i.value.formatDate(ke, "MMMM YYYY"),
        isActive: be === S.value && C === L.value,
        isCurrent: be === Z && C === se,
        isDisabled: !c(
          { month: be, year: C },
          { position: R.value }
        ),
        click: () => v(be, C)
      };
    });
  }
  function y(C) {
    return Math.floor(C / s);
  }
  function f() {
    n.value = !n.value;
  }
  function b() {
    Ee.value && (n.value && w(), N());
  }
  function T() {
    j.value && (n.value && P(), x());
  }
  function w() {
    r.value--;
  }
  function P() {
    r.value++;
  }
  function N() {
    a.value--;
  }
  function x() {
    a.value++;
  }
  const S = A(() => {
    var C;
    return ((C = e.value) == null ? void 0 : C.month) || 0;
  }), L = A(() => {
    var C;
    return ((C = e.value) == null ? void 0 : C.year) || 0;
  }), R = A(() => {
    var C;
    return ((C = e.value) == null ? void 0 : C.position) || 1;
  }), B = A(() => m(r.value)), Y = A(() => h(a.value)), q = A(() => rc(Y.value.map((C) => C.year))), ce = A(() => Qn(Y.value.map((C) => C.year))), ee = A(() => n.value ? r.value : `${q.value} - ${ce.value}`), le = A(
    () => m(r.value - 1).some((C) => !C.isDisabled)
  ), ge = A(
    () => h(a.value - 1).some((C) => !C.isDisabled)
  ), Ee = A(
    () => n.value ? le.value : ge.value
  ), z = A(
    () => m(r.value + 1).some((C) => !C.isDisabled)
  ), $ = A(
    () => h(a.value + 1).some((C) => !C.isDisabled)
  ), j = A(
    () => n.value ? z.value : $.value
  ), te = A(
    () => n.value ? B.value : Y.value
  );
  Ce(
    () => L.value,
    () => {
      r.value = L.value;
    }
  ), Ce(
    () => r.value,
    (C) => {
      a.value = y(C);
    }
  ), r.value = L.value, Vn(() => d());
  const U = {
    navContainer: o,
    title: ee,
    monthMode: n,
    currentMonth: S,
    currentYear: L,
    activeItems: te,
    prevItemsEnabled: Ee,
    nextItemsEnabled: j,
    toggleMode: f,
    movePrev: b,
    moveNext: T,
    movePrevYear: w,
    moveNextYear: P,
    movePrevYearGroup: N,
    moveNextYearGroup: x
  };
  return En(U$, U), U;
}
const B$ = { class: "vc-nav-header" }, H$ = ["disabled"], W$ = ["disabled"], G$ = { class: "vc-nav-items" }, z$ = ["data-id", "aria-label", "disabled", "onClick", "onKeydown"], K$ = /* @__PURE__ */ Se({
  __name: "CalendarNav",
  props: Y$,
  emits: V$,
  setup(e, { emit: t }) {
    const n = e, {
      navContainer: r,
      title: a,
      prevItemsEnabled: s,
      nextItemsEnabled: o,
      activeItems: i,
      toggleMode: l,
      movePrev: c,
      moveNext: u
    } = j$(n, { emit: t });
    return (d, v) => (D(), k("div", {
      class: "vc-nav-container",
      ref_key: "navContainer",
      ref: r
    }, [
      O("div", B$, [
        O("button", {
          type: "button",
          class: "vc-nav-arrow is-left vc-focus",
          disabled: !g(s),
          onClick: v[0] || (v[0] = //@ts-ignore
          (...p) => g(c) && g(c)(...p)),
          onKeydown: v[1] || (v[1] = (p) => g(ia)(p, g(c)))
        }, [
          _e(rr, {
            name: "nav-prev-button",
            move: g(c),
            disabled: !g(s)
          }, {
            default: tt(() => [
              _e(lr, {
                name: "ChevronLeft",
                width: "22px",
                height: "24px"
              })
            ]),
            _: 1
          }, 8, ["move", "disabled"])
        ], 40, H$),
        O("button", {
          type: "button",
          class: "vc-nav-title vc-focus",
          onClick: v[2] || (v[2] = //@ts-ignore
          (...p) => g(l) && g(l)(...p)),
          onKeydown: v[3] || (v[3] = (p) => g(ia)(p, g(l)))
        }, pe(g(a)), 33),
        O("button", {
          type: "button",
          class: "vc-nav-arrow is-right vc-focus",
          disabled: !g(o),
          onClick: v[4] || (v[4] = //@ts-ignore
          (...p) => g(u) && g(u)(...p)),
          onKeydown: v[5] || (v[5] = (p) => g(ia)(p, g(u)))
        }, [
          _e(rr, {
            name: "nav-next-button",
            move: g(u),
            disabled: !g(o)
          }, {
            default: tt(() => [
              _e(lr, {
                name: "ChevronRight",
                width: "22px",
                height: "24px"
              })
            ]),
            _: 1
          }, 8, ["move", "disabled"])
        ], 40, W$)
      ]),
      O("div", G$, [
        (D(!0), k(re, null, Te(g(i), (p) => (D(), k("button", {
          key: p.label,
          type: "button",
          "data-id": p.id,
          "aria-label": p.ariaLabel,
          class: Xe(["vc-nav-item vc-focus", [
            p.isActive ? "is-active" : p.isCurrent ? "is-current" : ""
          ]]),
          disabled: p.isDisabled,
          onClick: p.click,
          onKeydown: (h) => g(ia)(h, p.click)
        }, pe(p.label), 43, z$))), 128))
      ])
    ], 512));
  }
}), q$ = {
  __name: "CalendarNavPopover",
  setup(e) {
    const { navPopoverId: t, color: n, displayMode: r, navPopoverRef: a, move: s } = Bn();
    return (o, i) => (D(), Ue(So, {
      id: g(t),
      class: Xe(["vc-nav-popover-container", `vc-${g(n)}`, `vc-${g(r)}`]),
      ref_key: "navPopoverRef",
      ref: a
    }, {
      default: tt(({ data: l }) => [
        _e(K$, {
          value: l.page,
          onInput: g(s)
        }, null, 8, ["value", "onInput"])
      ]),
      _: 1
    }, 8, ["id", "class"]));
  }
}, Z$ = Se({
  name: "PopoverRow",
  props: {
    attribute: { type: Object, required: !0 }
  },
  setup(e) {
    return {
      indicator: A(() => {
        const { content: n, highlight: r, dot: a, bar: s, popover: o } = e.attribute;
        return o && o.hideIndicator ? null : n ? {
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
}), X$ = { class: "vc-day-popover-row" }, J$ = {
  key: 0,
  class: "vc-day-popover-row-indicator"
}, Q$ = { class: "vc-day-popover-row-label" };
function eT(e, t, n, r, a, s) {
  return D(), k("div", X$, [
    e.indicator ? (D(), k("div", J$, [
      O("span", {
        class: Xe(e.indicator.class)
      }, null, 2)
    ])) : X("", !0),
    O("div", Q$, [
      At(e.$slots, "default", {}, () => [
        qr(pe(e.attribute.popover ? e.attribute.popover.label : "No content provided"), 1)
      ])
    ])
  ]);
}
const tT = /* @__PURE__ */ cn(Z$, [["render", eT]]), nT = { class: "vc-day-popover-container" }, rT = {
  key: 0,
  class: "vc-day-popover-header"
}, aT = /* @__PURE__ */ Se({
  __name: "CalendarDayPopover",
  setup(e) {
    const { dayPopoverId: t, displayMode: n, color: r, masks: a, locale: s } = Bn();
    function o(l, c) {
      return s.value.formatDate(l, c);
    }
    function i(l) {
      return s.value.formatDate(l.date, a.value.dayPopover);
    }
    return (l, c) => (D(), Ue(So, {
      id: g(t),
      class: Xe([`vc-${g(r)}`, `vc-${g(n)}`])
    }, {
      default: tt(({ data: { day: u, attributes: d }, hide: v }) => [
        At(l.$slots, "default", {
          day: u,
          dayTitle: i(u),
          attributes: d,
          format: o,
          masks: g(a),
          hide: v
        }, () => [
          O("div", nT, [
            g(a).dayPopover ? (D(), k("div", rT, pe(i(u)), 1)) : X("", !0),
            (D(!0), k(re, null, Te(d, (p) => (D(), Ue(tT, {
              key: p.key,
              attribute: p
            }, null, 8, ["attribute"]))), 128))
          ])
        ])
      ]),
      _: 3
    }, 8, ["id", "class"]));
  }
}), sT = Se({
  name: "Calendar",
  components: {
    CalendarHeader: Cc,
    CalendarPane: x$,
    CalendarNavPopover: q$,
    CalendarDayPopover: aT
  },
  emits: _$,
  props: g$,
  setup(e, { emit: t, slots: n }) {
    return y$(e, { emit: t, slots: n });
  }
}), oT = { class: "vc-pane-header-wrapper" };
function iT(e, t, n, r, a, s) {
  const o = An("CalendarHeader"), i = An("CalendarPane"), l = An("CalendarDayPopover"), c = An("CalendarNavPopover");
  return D(), k(re, null, [
    O("div", un({ "data-helptext": "Press the arrow keys to navigate by day, Home and End to navigate to week ends, PageUp and PageDown to navigate by month, Alt+PageUp and Alt+PageDown to navigate by year" }, e.$attrs, {
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
      onMouseup: t[0] || (t[0] = lu(() => {
      }, ["prevent"])),
      ref: "containerRef"
    }), [
      O("div", {
        class: Xe(["vc-pane-container", { "in-transition": e.inTransition }])
      }, [
        O("div", oT, [
          e.firstPage ? (D(), Ue(o, {
            key: 0,
            page: e.firstPage,
            "is-lg": "",
            "hide-title": ""
          }, null, 8, ["page"])) : X("", !0)
        ]),
        _e(iu, {
          name: `vc-${e.transitionName}`,
          onBeforeEnter: e.onTransitionBeforeEnter,
          onAfterEnter: e.onTransitionAfterEnter
        }, {
          default: tt(() => [
            (D(), k("div", {
              key: e.pages[0].id,
              class: "vc-pane-layout",
              style: Lr({
                gridTemplateColumns: `repeat(${e.columns}, 1fr)`
              })
            }, [
              (D(!0), k(re, null, Te(e.pages, (u) => (D(), Ue(i, {
                key: u.id,
                page: u
              }, null, 8, ["page"]))), 128))
            ], 4))
          ]),
          _: 1
        }, 8, ["name", "onBeforeEnter", "onAfterEnter"]),
        At(e.$slots, "footer")
      ], 2)
    ], 16),
    _e(l, null, {
      default: tt((u) => [
        At(e.$slots, "day-popover", ou(Ld(u)))
      ]),
      _: 3
    }),
    _e(c)
  ], 64);
}
const lT = /* @__PURE__ */ cn(sT, [["render", iT]]), uT = { class: "vc-base-select" }, cT = ["value"], dT = ["value", "disabled"], fT = {
  inheritAttrs: !1
}, Ir = /* @__PURE__ */ Object.assign(fT, {
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
    return (t, n) => (D(), k("div", uT, [
      e.showIcon ? (D(), Ue(lr, {
        key: 0,
        name: "ChevronDown",
        size: e.small ? "16" : "18"
      }, null, 8, ["size"])) : X("", !0),
      O("select", un(t.$attrs, {
        value: e.modelValue,
        class: ["vc-focus", {
          "vc-has-icon": e.showIcon,
          "vc-align-right": e.alignRight,
          "vc-align-left": e.alignLeft,
          "vc-small": e.small
        }],
        onChange: n[0] || (n[0] = (r) => t.$emit("update:modelValue", r.target.value))
      }), [
        (D(!0), k(re, null, Te(e.options, (r) => (D(), k("option", {
          key: r.value,
          value: r.value,
          disabled: r.disabled
        }, pe(r.label), 9, dT))), 128))
      ], 16, cT)
    ]));
  }
}), Sc = "__vc_date_picker_context__", vT = {
  ...$c,
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
    default: () => Dn("datePicker.updateOnInput")
  },
  inputDebounce: {
    type: Number,
    default: () => Dn("datePicker.inputDebounce")
  },
  popover: {
    type: [Boolean, Object],
    default: !0
  },
  dragAttribute: Object,
  selectAttribute: Object,
  attributes: [Object, Array]
}, pT = [
  "update:modelValue",
  "drag",
  "dayclick",
  "daykeydown",
  "popover-will-show",
  "popover-did-show",
  "popover-will-hide",
  "popover-did-hide"
];
function mT(e, t) {
  const n = Tc(e), { locale: r, masks: a, disabledAttribute: s } = n, { emit: o } = t, i = ne(!1), l = ne(Ta()), c = ne(null), u = ne(null), d = ne(["", ""]), v = ne(null), p = ne(null);
  let h, m, y = !0;
  const f = A(() => e.isRange || e.modelModifiers.range === !0), b = A(
    () => f.value && c.value != null ? c.value.start : null
  ), T = A(
    () => f.value && c.value != null ? c.value.end : null
  ), w = A(() => e.mode.toLowerCase() === "date"), P = A(
    () => e.mode.toLowerCase() === "datetime"
  ), N = A(() => e.mode.toLowerCase() === "time"), x = A(() => !!u.value), S = A(() => {
    let I = "date";
    e.modelModifiers.number && (I = "number"), e.modelModifiers.string && (I = "string");
    const G = a.value.modelValue || "iso";
    return U({ type: I, mask: G });
  }), L = A(
    () => ot(u.value ?? c.value)
  ), R = A(() => N.value ? e.is24hr ? a.value.inputTime24hr : a.value.inputTime : P.value ? e.is24hr ? a.value.inputDateTime24hr : a.value.inputDateTime : a.value.input), B = A(() => /[Hh]/g.test(R.value)), Y = A(
    () => /[dD]{1,2}|Do|W{1,4}|M{1,4}|YY(?:YY)?/g.test(R.value)
  ), q = A(() => {
    if (B.value && Y.value)
      return "dateTime";
    if (Y.value)
      return "date";
    if (B.value)
      return "time";
  }), ce = A(() => {
    var I;
    const G = ((I = v.value) == null ? void 0 : I.$el.previousElementSibling) ?? void 0;
    return Br({}, e.popover, Dn("datePicker.popover"), {
      target: G
    });
  }), ee = A(
    () => Ic({
      ...ce.value,
      id: l.value
    })
  ), le = A(() => f.value ? {
    start: d.value[0],
    end: d.value[1]
  } : d.value[0]), ge = A(() => {
    const I = ["start", "end"].map((G) => ({
      input: Q(G),
      change: oe(G),
      keyup: ye,
      ...e.popover && ee.value
    }));
    return f.value ? {
      start: I[0],
      end: I[1]
    } : I[0];
  }), Ee = A(() => {
    if (!se(c.value))
      return null;
    const I = {
      key: "select-drag",
      ...e.selectAttribute,
      dates: c.value,
      pinPage: !0
    }, { dot: G, bar: ue, highlight: Oe, content: Ze } = I;
    return !G && !ue && !Oe && !Ze && (I.highlight = !0), I;
  }), z = A(() => {
    if (!f.value || !se(u.value))
      return null;
    const I = {
      key: "select-drag",
      ...e.dragAttribute,
      dates: u.value
    }, { dot: G, bar: ue, highlight: Oe, content: Ze } = I;
    return !G && !ue && !Oe && !Ze && (I.highlight = {
      startEnd: {
        fillMode: "outline"
      }
    }), I;
  }), $ = A(() => {
    const I = Nt(e.attributes) ? [...e.attributes] : [];
    return z.value ? I.unshift(z.value) : Ee.value && I.unshift(Ee.value), I;
  }), j = A(() => U(
    e.rules === "auto" ? te() : e.rules ?? {}
  ));
  function te() {
    const I = {
      ms: [0, 999],
      sec: [0, 59],
      min: [0, 59],
      hr: [0, 23]
    }, G = w.value ? 0 : e.timeAccuracy;
    return [0, 1].map((ue) => {
      switch (G) {
        case 0:
          return {
            hours: I.hr[ue],
            minutes: I.min[ue],
            seconds: I.sec[ue],
            milliseconds: I.ms[ue]
          };
        case 1:
          return {
            minutes: I.min[ue],
            seconds: I.sec[ue],
            milliseconds: I.ms[ue]
          };
        case 3:
          return { milliseconds: I.ms[ue] };
        case 4:
          return {};
        default:
          return { seconds: I.sec[ue], milliseconds: I.ms[ue] };
      }
    });
  }
  function U(I) {
    return Nt(I) ? I.length === 1 ? [I[0], I[0]] : I : [I, I];
  }
  function C(I) {
    return U(I).map(
      (G, ue) => ({
        ...G,
        rules: j.value[ue]
      })
    );
  }
  function Z(I) {
    return Rt(I) ? !isNaN(I) : tr(I) ? !isNaN(I.getTime()) : Ht(I) ? I !== "" : I != null;
  }
  function se(I) {
    return f.value ? on(I) && Z(I.start) && Z(I.end) : Z(I);
  }
  function ke(I, G) {
    const ue = tr(I), Oe = tr(G);
    return !ue && !Oe ? !0 : ue !== Oe ? !1 : I.getTime() === G.getTime();
  }
  function De(I, G) {
    if (f.value) {
      const ue = se(I), Oe = se(G);
      return !ue && !Oe ? !0 : ue !== Oe ? !1 : ke(I.start, G.start) && ke(I.end, G.end);
    }
    return ke(I, G);
  }
  function be(I) {
    return !se(I) || !s.value ? !1 : s.value.intersectsRange(r.value.range(I));
  }
  function Be(I, G, ue, Oe) {
    if (!se(I))
      return null;
    if (f.value) {
      const Ze = r.value.toDate(I.start, {
        ...G[0],
        fillDate: b.value ?? void 0,
        patch: ue
      }), Mt = r.value.toDate(I.end, {
        ...G[1],
        fillDate: T.value ?? void 0,
        patch: ue
      });
      return kn({ start: Ze, end: Mt }, Oe);
    }
    return r.value.toDateOrNull(I, {
      ...G[0],
      fillDate: c.value,
      patch: ue
    });
  }
  function je(I, G) {
    return f.value ? se(I) ? {
      start: r.value.fromDate(I.start, G[0]),
      end: r.value.fromDate(I.end, G[1])
    } : null : r.value.fromDate(I, G[0]);
  }
  function nt(I, G = {}) {
    return clearTimeout(h), new Promise((ue) => {
      const { debounce: Oe = 0, ...Ze } = G;
      Oe > 0 ? h = window.setTimeout(() => {
        ue(E(I, Ze));
      }, Oe) : ue(E(I, Ze));
    });
  }
  function E(I, {
    config: G = S.value,
    patch: ue = "dateTime",
    clearIfEqual: Oe = !1,
    formatInput: Ze = !0,
    hidePopover: Mt = !1,
    dragging: ft = x.value,
    targetPriority: Wn,
    moveToValue: Or = !1
  } = {}) {
    const na = C(G);
    let Dt = Be(
      I,
      na,
      ue,
      Wn
    );
    if (be(Dt)) {
      if (ft)
        return null;
      Dt = c.value, Mt = !1;
    } else
      Dt == null && e.isRequired ? Dt = c.value : (
        // Clear value if same value was passed
        Dt != null && De(c.value, Dt) && Oe && (Dt = null)
      );
    const $r = ft ? u : c, ls = !De($r.value, Dt);
    $r.value = Dt, ft || (u.value = null);
    const Jo = je(
      Dt,
      S.value
    );
    return ls && (y = !1, o(ft ? "drag" : "update:modelValue", Jo), Zn(() => y = !0)), Mt && !ft && Pt(), Ze && _(), Or && Zn(() => H(Wn ?? "start")), Jo;
  }
  function _() {
    Zn(() => {
      const I = C({
        type: "string",
        mask: R.value
      }), G = je(
        u.value || c.value,
        I
      );
      f.value ? d.value = [G && G.start, G && G.end] : d.value = [G, ""];
    });
  }
  function M(I, G, ue) {
    d.value.splice(G === "start" ? 0 : 1, 1, I);
    const Oe = f.value ? {
      start: d.value[0],
      end: d.value[1] || d.value[0]
    } : I, Ze = {
      type: "string",
      mask: R.value
    };
    nt(Oe, {
      ...ue,
      config: Ze,
      patch: q.value,
      targetPriority: G,
      moveToValue: !0
    });
  }
  function Q(I) {
    return (G) => {
      e.updateOnInput && M(G.currentTarget.value, I, {
        formatInput: !1,
        hidePopover: !1,
        debounce: e.inputDebounce
      });
    };
  }
  function oe(I) {
    return (G) => {
      M(G.currentTarget.value, I, {
        formatInput: !0,
        hidePopover: !1
      });
    };
  }
  function ye(I) {
    I.key === "Escape" && nt(c.value, {
      formatInput: !0,
      hidePopover: !0
    });
  }
  function ot(I) {
    return f.value ? [
      I && I.start ? r.value.getDateParts(I.start) : null,
      I && I.end ? r.value.getDateParts(I.end) : null
    ] : [I ? r.value.getDateParts(I) : null];
  }
  function qe() {
    u.value = null, _();
  }
  function Et(I) {
    o("popover-will-show", I);
  }
  function Vt(I) {
    o("popover-did-show", I);
  }
  function Pe(I) {
    qe(), o("popover-will-hide", I);
  }
  function F(I) {
    o("popover-did-hide", I);
  }
  function W(I) {
    const G = {
      patch: "date",
      formatInput: !0,
      hidePopover: !0
    };
    if (f.value) {
      const ue = !x.value;
      ue ? m = { start: I.startDate, end: I.endDate } : m != null && (m.end = I.date), nt(m, {
        ...G,
        dragging: ue
      });
    } else
      nt(I.date, {
        ...G,
        clearIfEqual: !e.isRequired
      });
  }
  function He(I, G) {
    W(I), o("dayclick", I, G);
  }
  function We(I, G) {
    switch (G.key) {
      case " ":
      case "Enter": {
        W(I), G.preventDefault();
        break;
      }
      case "Escape":
        Pt();
    }
    o("daykeydown", I, G);
  }
  function Ut(I, G) {
    !x.value || m == null || (m.end = I.date, nt(kn(m), {
      patch: "date",
      formatInput: !0
    }));
  }
  function vn(I = {}) {
    Ss({
      ...ce.value,
      ...I,
      isInteractive: !0,
      id: l.value
    });
  }
  function Pt(I = {}) {
    Ya({
      hideDelay: 10,
      force: !0,
      ...ce.value,
      ...I,
      id: l.value
    });
  }
  function Lt(I) {
    Nc({
      ...ce.value,
      ...I,
      isInteractive: !0,
      id: l.value
    });
  }
  function kn(I, G) {
    const { start: ue, end: Oe } = I;
    if (ue > Oe)
      switch (G) {
        case "start":
          return { start: ue, end: ue };
        case "end":
          return { start: Oe, end: Oe };
        default:
          return { start: Oe, end: ue };
      }
    return { start: ue, end: Oe };
  }
  function Hn(I) {
    if (se(c.value)) {
      const G = f.value ? I ? b.value : T.value : c.value;
      return yc(G, "monthly", r.value);
    }
    return null;
  }
  async function is(I, G = {}) {
    return p.value == null ? !1 : p.value.move(I, G);
  }
  async function ta(I, G = {}) {
    return p.value == null ? !1 : p.value.moveBy(I, G);
  }
  async function H(I, G = {}) {
    if (p.value == null)
      return !1;
    const { firstPage: ue, lastPage: Oe, move: Ze } = p.value, Mt = I !== "end", ft = Hn(Mt), Wn = Mt ? 1 : -1;
    return !ft || wc(ft, ue, Oe) ? !1 : Ze(ft, {
      position: Wn,
      ...G
    });
  }
  Ce(
    () => e.isRange,
    (I) => {
      I && console.warn(
        "The `is-range` prop will be deprecated in future releases. Please use the `range` modifier."
      );
    },
    { immediate: !0 }
  ), Ce(
    () => R.value,
    () => _()
  ), Ce(
    () => e.modelValue,
    (I) => {
      y && E(I, {
        formatInput: !0,
        hidePopover: !1
      });
    }
  ), Ce(
    () => j.value,
    () => {
      on(e.rules) && E(e.modelValue, {
        formatInput: !0,
        hidePopover: !1
      });
    }
  ), Ce(
    () => e.timezone,
    () => {
      E(c.value, { formatInput: !0 });
    }
  );
  const K = U(S.value);
  c.value = Be(e.modelValue, K, "dateTime"), Vn(() => {
    E(e.modelValue, {
      formatInput: !0,
      hidePopover: !1
    });
  }), Zn(() => i.value = !0);
  const fe = {
    ...n,
    showCalendar: i,
    datePickerPopoverId: l,
    popoverRef: v,
    popoverEvents: ee,
    calendarRef: p,
    isRange: f,
    isTimeMode: N,
    isDateTimeMode: P,
    is24hr: us(e, "is24hr"),
    hideTimeHeader: us(e, "hideTimeHeader"),
    timeAccuracy: us(e, "timeAccuracy"),
    isDragging: x,
    inputValue: le,
    inputEvents: ge,
    dateParts: L,
    attributes: $,
    rules: j,
    move: is,
    moveBy: ta,
    moveToValue: H,
    updateValue: nt,
    showPopover: vn,
    hidePopover: Pt,
    togglePopover: Lt,
    onDayClick: He,
    onDayKeydown: We,
    onDayMouseEnter: Ut,
    onPopoverBeforeShow: Et,
    onPopoverAfterShow: Vt,
    onPopoverBeforeHide: Pe,
    onPopoverAfterHide: F
  };
  return En(Sc, fe), fe;
}
function hT() {
  const e = Ye(Sc);
  if (e)
    return e;
  throw new Error(
    "DatePicker context missing. Please verify this component is nested within a valid context provider."
  );
}
const gT = [
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
], _T = [
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
function yT(e) {
  const t = hT(), {
    locale: n,
    isRange: r,
    isTimeMode: a,
    dateParts: s,
    rules: o,
    is24hr: i,
    hideTimeHeader: l,
    timeAccuracy: c,
    updateValue: u
  } = t;
  function d(Y) {
    Y = Object.assign(p.value, Y);
    let q = null;
    if (r.value) {
      const ce = v.value ? Y : s.value[0], ee = v.value ? s.value[1] : Y;
      q = { start: ce, end: ee };
    } else
      q = Y;
    u(q, {
      patch: "time",
      targetPriority: v.value ? "start" : "end",
      moveToValue: !0
    });
  }
  const v = A(() => e.position === 0), p = A(
    () => s.value[e.position] || { isValid: !1 }
  ), h = A(() => pc(p.value)), m = A(() => !!p.value.isValid), y = A(() => !l.value && m.value), f = A(() => {
    if (!h.value)
      return null;
    let Y = n.value.toDate(p.value);
    return p.value.hours === 24 && (Y = new Date(Y.getTime() - 1)), Y;
  }), b = A({
    get() {
      return p.value.hours;
    },
    set(Y) {
      d({ hours: Y });
    }
  }), T = A({
    get() {
      return p.value.minutes;
    },
    set(Y) {
      d({ minutes: Y });
    }
  }), w = A({
    get() {
      return p.value.seconds;
    },
    set(Y) {
      d({ seconds: Y });
    }
  }), P = A({
    get() {
      return p.value.milliseconds;
    },
    set(Y) {
      d({ milliseconds: Y });
    }
  }), N = A({
    get() {
      return p.value.hours < 12;
    },
    set(Y) {
      Y = String(Y).toLowerCase() == "true";
      let q = b.value;
      Y && q >= 12 ? q -= 12 : !Y && q < 12 && (q += 12), d({ hours: q });
    }
  }), x = A(
    () => XO(p.value, o.value[e.position])
  ), S = A(() => gT.filter(
    (Y) => x.value.hours.some((q) => q.value === Y.value)
  )), L = A(() => _T.filter(
    (Y) => x.value.hours.some((q) => q.value === Y.value)
  )), R = A(() => i.value ? x.value.hours : N.value ? S.value : L.value), B = A(() => {
    const Y = [];
    return rn(S.value) && Y.push({ value: !0, label: "AM" }), rn(L.value) && Y.push({ value: !1, label: "PM" }), Y;
  });
  return {
    ...t,
    showHeader: y,
    timeAccuracy: c,
    parts: p,
    isValid: m,
    date: f,
    hours: b,
    minutes: T,
    seconds: w,
    milliseconds: P,
    options: x,
    hourOptions: R,
    isAM: N,
    isAMOptions: B,
    is24hr: i
  };
}
const bT = {
  key: 0,
  class: "vc-time-header"
}, wT = { class: "vc-time-weekday" }, ET = { class: "vc-time-month" }, DT = { class: "vc-time-day" }, OT = { class: "vc-time-year" }, $T = { class: "vc-time-select-group" }, TT = /* @__PURE__ */ O("span", { class: "vc-time-colon" }, ":", -1), kT = /* @__PURE__ */ O("span", { class: "vc-time-colon" }, ":", -1), NT = /* @__PURE__ */ O("span", { class: "vc-time-decimal" }, ".", -1), IT = /* @__PURE__ */ Se({
  __name: "TimePicker",
  props: {
    position: null
  },
  setup(e, { expose: t }) {
    const r = yT(e);
    t(r);
    const {
      locale: a,
      isValid: s,
      date: o,
      hours: i,
      minutes: l,
      seconds: c,
      milliseconds: u,
      options: d,
      hourOptions: v,
      isTimeMode: p,
      isAM: h,
      isAMOptions: m,
      is24hr: y,
      showHeader: f,
      timeAccuracy: b
    } = r;
    return (T, w) => (D(), k("div", {
      class: Xe(["vc-time-picker", [{ "vc-invalid": !g(s), "vc-attached": !g(p) }]])
    }, [
      At(T.$slots, "time-header", {}, () => [
        g(f) && g(o) ? (D(), k("div", bT, [
          O("span", wT, pe(g(a).formatDate(g(o), "WWW")), 1),
          O("span", ET, pe(g(a).formatDate(g(o), "MMM")), 1),
          O("span", DT, pe(g(a).formatDate(g(o), "D")), 1),
          O("span", OT, pe(g(a).formatDate(g(o), "YYYY")), 1)
        ])) : X("", !0)
      ]),
      O("div", $T, [
        _e(lr, {
          name: "Clock",
          size: "17"
        }),
        _e(Ir, {
          modelValue: g(i),
          "onUpdate:modelValue": w[0] || (w[0] = (P) => Ie(i) ? i.value = P : null),
          modelModifiers: { number: !0 },
          options: g(v),
          "align-right": ""
        }, null, 8, ["modelValue", "options"]),
        g(b) > 1 ? (D(), k(re, { key: 0 }, [
          TT,
          _e(Ir, {
            modelValue: g(l),
            "onUpdate:modelValue": w[1] || (w[1] = (P) => Ie(l) ? l.value = P : null),
            modelModifiers: { number: !0 },
            options: g(d).minutes,
            "align-left": g(b) === 2
          }, null, 8, ["modelValue", "options", "align-left"])
        ], 64)) : X("", !0),
        g(b) > 2 ? (D(), k(re, { key: 1 }, [
          kT,
          _e(Ir, {
            modelValue: g(c),
            "onUpdate:modelValue": w[2] || (w[2] = (P) => Ie(c) ? c.value = P : null),
            modelModifiers: { number: !0 },
            options: g(d).seconds,
            "align-left": g(b) === 3
          }, null, 8, ["modelValue", "options", "align-left"])
        ], 64)) : X("", !0),
        g(b) > 3 ? (D(), k(re, { key: 2 }, [
          NT,
          _e(Ir, {
            modelValue: g(u),
            "onUpdate:modelValue": w[3] || (w[3] = (P) => Ie(u) ? u.value = P : null),
            modelModifiers: { number: !0 },
            options: g(d).milliseconds,
            "align-left": ""
          }, null, 8, ["modelValue", "options"])
        ], 64)) : X("", !0),
        g(y) ? X("", !0) : (D(), Ue(Ir, {
          key: 3,
          modelValue: g(h),
          "onUpdate:modelValue": w[4] || (w[4] = (P) => Ie(h) ? h.value = P : null),
          options: g(m)
        }, null, 8, ["modelValue", "options"]))
      ])
    ], 2));
  }
}), Po = Se({
  name: "DatePicker",
  inheritAttrs: !1,
  emits: pT,
  props: vT,
  setup(e, t) {
    const n = mT(e, t), { slots: r, attrs: a } = t, {
      isTimeMode: s,
      isRange: o,
      isDateTimeMode: i,
      color: l,
      displayMode: c,
      dateParts: u,
      datePickerPopoverId: d,
      attributes: v,
      calendarRef: p,
      popoverRef: h,
      showCalendar: m,
      onDayClick: y,
      onDayMouseEnter: f,
      onDayKeydown: b,
      onPopoverBeforeShow: T,
      onPopoverAfterShow: w,
      onPopoverBeforeHide: P,
      onPopoverAfterHide: N
    } = n;
    t.expose(n);
    const x = Js(ac(n, "calendarRef", "popoverRef")), S = () => (o.value ? [0, 1] : [0]).map((Y) => qn(IT, { position: Y })), L = () => {
      if (!u.value)
        return null;
      const B = i.value ? { ...r, footer: S } : r;
      return qn(
        lT,
        {
          ...a,
          attributes: v.value,
          ref: p,
          onDayclick: y,
          onDaymouseenter: f,
          onDaykeydown: b
        },
        B
      );
    }, R = () => {
      if (s.value)
        return qn(
          "div",
          {
            class: `vc-container vc-bordered vc-${l.value} vc-${c.value}`
          },
          [S()]
        );
      if (m.value)
        return L();
    };
    return r.default ? () => [
      // Popover trigger
      r.default(x),
      // Popover content
      qn(
        So,
        {
          id: d.value,
          placement: "bottom-start",
          class: `vc-date-picker-content vc-${l.value} vc-${c.value}`,
          ref: h,
          "onBefore-show": T,
          "onAfter-show": w,
          "onBefore-hide": P,
          "onAfter-hide": N
        },
        {
          default: R
        }
      )
    ] : R;
  }
});
const AT = { class: "flex flex-col gap-2" }, CT = { class: "flex items-center gap-2" }, ST = /* @__PURE__ */ O("label", {
  for: "due",
  class: "p3-b"
}, "結束於指定日期", -1), PT = ["onClick"], LT = /* @__PURE__ */ Se({
  __name: "DuePicker",
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, r = A({
      get: () => n.modelValue,
      set: (s) => t("update:modelValue", s)
    }), a = ne(!1);
    return Ce(
      () => n.modelValue,
      (s) => {
        s && (a.value = !0);
      },
      { immediate: !0 }
    ), Ce(a, (s) => {
      s || t("update:modelValue", null);
    }), Kr(() => {
      t("update:modelValue", null);
    }), (s, o) => (D(), k("div", AT, [
      O("div", CT, [
        Ke(O("input", {
          type: "checkbox",
          "onUpdate:modelValue": o[0] || (o[0] = (i) => Ie(a) ? a.value = i : null),
          id: "due"
        }, null, 512), [
          [Qs, g(a)]
        ]),
        ST,
        g(a) ? (D(), Ue(g(Po), {
          key: 0,
          modelValue: g(r),
          "onUpdate:modelValue": o[1] || (o[1] = (i) => Ie(r) ? r.value = i : null),
          mode: "dateTime",
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          "min-Date": /* @__PURE__ */ new Date(),
          is24hr: ""
        }, {
          default: tt(({ togglePopover: i, inputValue: l }) => [
            O("div", {
              class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 transition-all hover:bg-light-3 hover:bg-opacity-50",
              onClick: i
            }, pe(l || "請選定結束日期"), 9, PT)
          ]),
          _: 1
        }, 8, ["modelValue", "timezone", "min-Date"])) : X("", !0)
      ])
    ]));
  }
}), MT = { class: "flex w-auto items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-1.5" }, xT = ["value", "type", "placeholder", "maxLength", "required"], RT = /* @__PURE__ */ Se({
  __name: "TextInput",
  props: {
    placeholder: {},
    modelValue: {},
    type: { default: "string" },
    maxLength: {},
    required: { type: Boolean }
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
    return (a, s) => (D(), k("div", MT, [
      O("input", {
        value: a.modelValue,
        onInput: r,
        type: a.type,
        class: "p3-b w-full border-none outline-none shadow-none placeholder:text-dark-5",
        placeholder: a.placeholder,
        maxLength: a.maxLength,
        required: a.required
      }, null, 40, xT)
    ]));
  }
});
const wn = /* @__PURE__ */ no(RT, [["__scopeId", "data-v-661b5eb1"]]);
/*!
  * shared v9.5.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */
const qt = typeof window < "u";
let bt, xn;
if (process.env.NODE_ENV !== "production") {
  const e = qt && window.performance;
  e && e.mark && e.measure && e.clearMarks && // @ts-ignore browser compat
  e.clearMeasures && (bt = (t) => {
    e.mark(t);
  }, xn = (t, n, r) => {
    e.measure(t, n, r), e.clearMarks(n), e.clearMarks(r);
  });
}
const FT = /\{([0-9a-zA-Z]+)\}/g;
function Lo(e, ...t) {
  return t.length === 1 && Ae(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(FT, (n, r) => t.hasOwnProperty(r) ? t[r] : "");
}
const Jt = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), YT = (e, t, n) => VT({ l: e, k: t, s: n }), VT = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), et = (e) => typeof e == "number" && isFinite(e), UT = (e) => Lc(e) === "[object Date]", On = (e) => Lc(e) === "[object RegExp]", Ja = (e) => me(e) && Object.keys(e).length === 0, st = Object.assign;
let dl;
const nn = () => dl || (dl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function fl(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const jT = Object.prototype.hasOwnProperty;
function Mo(e, t) {
  return jT.call(e, t);
}
const Re = Array.isArray, Ve = (e) => typeof e == "function", J = (e) => typeof e == "string", we = (e) => typeof e == "boolean", Ae = (e) => e !== null && typeof e == "object", Pc = Object.prototype.toString, Lc = (e) => Pc.call(e), me = (e) => {
  if (!Ae(e))
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t.constructor === Object;
}, BT = (e) => e == null ? "" : Re(e) || me(e) && e.toString === Pc ? JSON.stringify(e, null, 2) : String(e);
function HT(e, t = "") {
  return e.reduce((n, r, a) => a === 0 ? n + r : n + t + r, "");
}
const vl = 2;
function WT(e, t = 0, n = e.length) {
  const r = e.split(/\r?\n/);
  let a = 0;
  const s = [];
  for (let o = 0; o < r.length; o++)
    if (a += r[o].length + 1, a >= t) {
      for (let i = o - vl; i <= o + vl || n > a; i++) {
        if (i < 0 || i >= r.length)
          continue;
        const l = i + 1;
        s.push(`${l}${" ".repeat(3 - String(l).length)}|  ${r[i]}`);
        const c = r[i].length;
        if (i === o) {
          const u = t - (a - c) + 1, d = Math.max(1, n > a ? c - u : n - t);
          s.push("   |  " + " ".repeat(u) + "^".repeat(d));
        } else if (i > o) {
          if (n > a) {
            const u = Math.max(Math.min(n - a, c), 1);
            s.push("   |  " + "^".repeat(u));
          }
          a += c + 1;
        }
      }
      break;
    }
  return s.join(`
`);
}
function xo(e) {
  let t = e;
  return () => ++t;
}
function rt(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const pl = {};
function GT(e) {
  pl[e] || (pl[e] = !0, rt(e));
}
function Ro() {
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
function zT(e, t, n) {
  return { line: e, column: t, offset: n };
}
function Ps(e, t, n) {
  const r = { start: e, end: t };
  return n != null && (r.source = n), r;
}
const KT = /\{([0-9a-zA-Z]+)\}/g;
function qT(e, ...t) {
  return t.length === 1 && ZT(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(KT, (n, r) => t.hasOwnProperty(r) ? t[r] : "");
}
const Mc = Object.assign, ml = (e) => typeof e == "string", ZT = (e) => e !== null && typeof e == "object";
function xc(e, t = "") {
  return e.reduce((n, r, a) => a === 0 ? n + r : n + t + r, "");
}
const de = {
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
}, XT = {
  // tokenizer error messages
  [de.EXPECTED_TOKEN]: "Expected token: '{0}'",
  [de.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
  [de.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
  [de.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
  [de.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
  [de.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
  [de.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
  [de.EMPTY_PLACEHOLDER]: "Empty placeholder",
  [de.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
  [de.INVALID_LINKED_FORMAT]: "Invalid linked format",
  // parser error messages
  [de.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
  [de.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
  [de.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
  [de.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
  // generator error messages
  [de.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
  // minimizer error messages
  [de.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
};
function wr(e, t, n = {}) {
  const { domain: r, messages: a, args: s } = n, o = qT((a || XT)[e] || "", ...s || []), i = new SyntaxError(String(o));
  return i.code = e, t && (i.location = t), i.domain = r, i;
}
function JT(e) {
  throw e;
}
const QT = /<\/?[\w\s="/.':;#-\/]+>/, e2 = (e) => QT.test(e), en = " ", t2 = "\r", ut = `
`, n2 = String.fromCharCode(8232), r2 = String.fromCharCode(8233);
function a2(e) {
  const t = e;
  let n = 0, r = 1, a = 1, s = 0;
  const o = (x) => t[x] === t2 && t[x + 1] === ut, i = (x) => t[x] === ut, l = (x) => t[x] === r2, c = (x) => t[x] === n2, u = (x) => o(x) || i(x) || l(x) || c(x), d = () => n, v = () => r, p = () => a, h = () => s, m = (x) => o(x) || l(x) || c(x) ? ut : t[x], y = () => m(n), f = () => m(n + s);
  function b() {
    return s = 0, u(n) && (r++, a = 0), o(n) && n++, n++, a++, t[n];
  }
  function T() {
    return o(n + s) && s++, s++, t[n + s];
  }
  function w() {
    n = 0, r = 1, a = 1, s = 0;
  }
  function P(x = 0) {
    s = x;
  }
  function N() {
    const x = n + s;
    for (; x !== n; )
      b();
    s = 0;
  }
  return {
    index: d,
    line: v,
    column: p,
    peekOffset: h,
    charAt: m,
    currentChar: y,
    currentPeek: f,
    next: b,
    peek: T,
    reset: w,
    resetPeek: P,
    skipToPeek: N
  };
}
const mn = void 0, s2 = ".", hl = "'", o2 = "tokenizer";
function i2(e, t = {}) {
  const n = t.location !== !1, r = a2(e), a = () => r.index(), s = () => zT(r.line(), r.column(), r.index()), o = s(), i = a(), l = {
    currentType: 14,
    offset: i,
    startLoc: o,
    endLoc: o,
    lastType: 14,
    lastOffset: i,
    lastStartLoc: o,
    lastEndLoc: o,
    braceNest: 0,
    inLinked: !1,
    text: ""
  }, c = () => l, { onError: u } = t;
  function d(E, _, M, ...Q) {
    const oe = c();
    if (_.column += M, _.offset += M, u) {
      const ye = n ? Ps(oe.startLoc, _) : null, ot = wr(E, ye, {
        domain: o2,
        args: Q
      });
      u(ot);
    }
  }
  function v(E, _, M) {
    E.endLoc = s(), E.currentType = _;
    const Q = { type: _ };
    return n && (Q.loc = Ps(E.startLoc, E.endLoc)), M != null && (Q.value = M), Q;
  }
  const p = (E) => v(
    E,
    14
    /* TokenTypes.EOF */
  );
  function h(E, _) {
    return E.currentChar() === _ ? (E.next(), _) : (d(de.EXPECTED_TOKEN, s(), 0, _), "");
  }
  function m(E) {
    let _ = "";
    for (; E.currentPeek() === en || E.currentPeek() === ut; )
      _ += E.currentPeek(), E.peek();
    return _;
  }
  function y(E) {
    const _ = m(E);
    return E.skipToPeek(), _;
  }
  function f(E) {
    if (E === mn)
      return !1;
    const _ = E.charCodeAt(0);
    return _ >= 97 && _ <= 122 || // a-z
    _ >= 65 && _ <= 90 || // A-Z
    _ === 95;
  }
  function b(E) {
    if (E === mn)
      return !1;
    const _ = E.charCodeAt(0);
    return _ >= 48 && _ <= 57;
  }
  function T(E, _) {
    const { currentType: M } = _;
    if (M !== 2)
      return !1;
    m(E);
    const Q = f(E.currentPeek());
    return E.resetPeek(), Q;
  }
  function w(E, _) {
    const { currentType: M } = _;
    if (M !== 2)
      return !1;
    m(E);
    const Q = E.currentPeek() === "-" ? E.peek() : E.currentPeek(), oe = b(Q);
    return E.resetPeek(), oe;
  }
  function P(E, _) {
    const { currentType: M } = _;
    if (M !== 2)
      return !1;
    m(E);
    const Q = E.currentPeek() === hl;
    return E.resetPeek(), Q;
  }
  function N(E, _) {
    const { currentType: M } = _;
    if (M !== 8)
      return !1;
    m(E);
    const Q = E.currentPeek() === ".";
    return E.resetPeek(), Q;
  }
  function x(E, _) {
    const { currentType: M } = _;
    if (M !== 9)
      return !1;
    m(E);
    const Q = f(E.currentPeek());
    return E.resetPeek(), Q;
  }
  function S(E, _) {
    const { currentType: M } = _;
    if (!(M === 8 || M === 12))
      return !1;
    m(E);
    const Q = E.currentPeek() === ":";
    return E.resetPeek(), Q;
  }
  function L(E, _) {
    const { currentType: M } = _;
    if (M !== 10)
      return !1;
    const Q = () => {
      const ye = E.currentPeek();
      return ye === "{" ? f(E.peek()) : ye === "@" || ye === "%" || ye === "|" || ye === ":" || ye === "." || ye === en || !ye ? !1 : ye === ut ? (E.peek(), Q()) : f(ye);
    }, oe = Q();
    return E.resetPeek(), oe;
  }
  function R(E) {
    m(E);
    const _ = E.currentPeek() === "|";
    return E.resetPeek(), _;
  }
  function B(E) {
    const _ = m(E), M = E.currentPeek() === "%" && E.peek() === "{";
    return E.resetPeek(), {
      isModulo: M,
      hasSpace: _.length > 0
    };
  }
  function Y(E, _ = !0) {
    const M = (oe = !1, ye = "", ot = !1) => {
      const qe = E.currentPeek();
      return qe === "{" ? ye === "%" ? !1 : oe : qe === "@" || !qe ? ye === "%" ? !0 : oe : qe === "%" ? (E.peek(), M(oe, "%", !0)) : qe === "|" ? ye === "%" || ot ? !0 : !(ye === en || ye === ut) : qe === en ? (E.peek(), M(!0, en, ot)) : qe === ut ? (E.peek(), M(!0, ut, ot)) : !0;
    }, Q = M();
    return _ && E.resetPeek(), Q;
  }
  function q(E, _) {
    const M = E.currentChar();
    return M === mn ? mn : _(M) ? (E.next(), M) : null;
  }
  function ce(E) {
    return q(E, (M) => {
      const Q = M.charCodeAt(0);
      return Q >= 97 && Q <= 122 || // a-z
      Q >= 65 && Q <= 90 || // A-Z
      Q >= 48 && Q <= 57 || // 0-9
      Q === 95 || // _
      Q === 36;
    });
  }
  function ee(E) {
    return q(E, (M) => {
      const Q = M.charCodeAt(0);
      return Q >= 48 && Q <= 57;
    });
  }
  function le(E) {
    return q(E, (M) => {
      const Q = M.charCodeAt(0);
      return Q >= 48 && Q <= 57 || // 0-9
      Q >= 65 && Q <= 70 || // A-F
      Q >= 97 && Q <= 102;
    });
  }
  function ge(E) {
    let _ = "", M = "";
    for (; _ = ee(E); )
      M += _;
    return M;
  }
  function Ee(E) {
    y(E);
    const _ = E.currentChar();
    return _ !== "%" && d(de.EXPECTED_TOKEN, s(), 0, _), E.next(), "%";
  }
  function z(E) {
    let _ = "";
    for (; ; ) {
      const M = E.currentChar();
      if (M === "{" || M === "}" || M === "@" || M === "|" || !M)
        break;
      if (M === "%")
        if (Y(E))
          _ += M, E.next();
        else
          break;
      else if (M === en || M === ut)
        if (Y(E))
          _ += M, E.next();
        else {
          if (R(E))
            break;
          _ += M, E.next();
        }
      else
        _ += M, E.next();
    }
    return _;
  }
  function $(E) {
    y(E);
    let _ = "", M = "";
    for (; _ = ce(E); )
      M += _;
    return E.currentChar() === mn && d(de.UNTERMINATED_CLOSING_BRACE, s(), 0), M;
  }
  function j(E) {
    y(E);
    let _ = "";
    return E.currentChar() === "-" ? (E.next(), _ += `-${ge(E)}`) : _ += ge(E), E.currentChar() === mn && d(de.UNTERMINATED_CLOSING_BRACE, s(), 0), _;
  }
  function te(E) {
    y(E), h(E, "'");
    let _ = "", M = "";
    const Q = (ye) => ye !== hl && ye !== ut;
    for (; _ = q(E, Q); )
      _ === "\\" ? M += U(E) : M += _;
    const oe = E.currentChar();
    return oe === ut || oe === mn ? (d(de.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, s(), 0), oe === ut && (E.next(), h(E, "'")), M) : (h(E, "'"), M);
  }
  function U(E) {
    const _ = E.currentChar();
    switch (_) {
      case "\\":
      case "'":
        return E.next(), `\\${_}`;
      case "u":
        return C(E, _, 4);
      case "U":
        return C(E, _, 6);
      default:
        return d(de.UNKNOWN_ESCAPE_SEQUENCE, s(), 0, _), "";
    }
  }
  function C(E, _, M) {
    h(E, _);
    let Q = "";
    for (let oe = 0; oe < M; oe++) {
      const ye = le(E);
      if (!ye) {
        d(de.INVALID_UNICODE_ESCAPE_SEQUENCE, s(), 0, `\\${_}${Q}${E.currentChar()}`);
        break;
      }
      Q += ye;
    }
    return `\\${_}${Q}`;
  }
  function Z(E) {
    y(E);
    let _ = "", M = "";
    const Q = (oe) => oe !== "{" && oe !== "}" && oe !== en && oe !== ut;
    for (; _ = q(E, Q); )
      M += _;
    return M;
  }
  function se(E) {
    let _ = "", M = "";
    for (; _ = ce(E); )
      M += _;
    return M;
  }
  function ke(E) {
    const _ = (M = !1, Q) => {
      const oe = E.currentChar();
      return oe === "{" || oe === "%" || oe === "@" || oe === "|" || oe === "(" || oe === ")" || !oe || oe === en ? Q : oe === ut || oe === s2 ? (Q += oe, E.next(), _(M, Q)) : (Q += oe, E.next(), _(!0, Q));
    };
    return _(!1, "");
  }
  function De(E) {
    y(E);
    const _ = h(
      E,
      "|"
      /* TokenChars.Pipe */
    );
    return y(E), _;
  }
  function be(E, _) {
    let M = null;
    switch (E.currentChar()) {
      case "{":
        return _.braceNest >= 1 && d(de.NOT_ALLOW_NEST_PLACEHOLDER, s(), 0), E.next(), M = v(
          _,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), y(E), _.braceNest++, M;
      case "}":
        return _.braceNest > 0 && _.currentType === 2 && d(de.EMPTY_PLACEHOLDER, s(), 0), E.next(), M = v(
          _,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), _.braceNest--, _.braceNest > 0 && y(E), _.inLinked && _.braceNest === 0 && (_.inLinked = !1), M;
      case "@":
        return _.braceNest > 0 && d(de.UNTERMINATED_CLOSING_BRACE, s(), 0), M = Be(E, _) || p(_), _.braceNest = 0, M;
      default:
        let oe = !0, ye = !0, ot = !0;
        if (R(E))
          return _.braceNest > 0 && d(de.UNTERMINATED_CLOSING_BRACE, s(), 0), M = v(_, 1, De(E)), _.braceNest = 0, _.inLinked = !1, M;
        if (_.braceNest > 0 && (_.currentType === 5 || _.currentType === 6 || _.currentType === 7))
          return d(de.UNTERMINATED_CLOSING_BRACE, s(), 0), _.braceNest = 0, je(E, _);
        if (oe = T(E, _))
          return M = v(_, 5, $(E)), y(E), M;
        if (ye = w(E, _))
          return M = v(_, 6, j(E)), y(E), M;
        if (ot = P(E, _))
          return M = v(_, 7, te(E)), y(E), M;
        if (!oe && !ye && !ot)
          return M = v(_, 13, Z(E)), d(de.INVALID_TOKEN_IN_PLACEHOLDER, s(), 0, M.value), y(E), M;
        break;
    }
    return M;
  }
  function Be(E, _) {
    const { currentType: M } = _;
    let Q = null;
    const oe = E.currentChar();
    switch ((M === 8 || M === 9 || M === 12 || M === 10) && (oe === ut || oe === en) && d(de.INVALID_LINKED_FORMAT, s(), 0), oe) {
      case "@":
        return E.next(), Q = v(
          _,
          8,
          "@"
          /* TokenChars.LinkedAlias */
        ), _.inLinked = !0, Q;
      case ".":
        return y(E), E.next(), v(
          _,
          9,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return y(E), E.next(), v(
          _,
          10,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return R(E) ? (Q = v(_, 1, De(E)), _.braceNest = 0, _.inLinked = !1, Q) : N(E, _) || S(E, _) ? (y(E), Be(E, _)) : x(E, _) ? (y(E), v(_, 12, se(E))) : L(E, _) ? (y(E), oe === "{" ? be(E, _) || Q : v(_, 11, ke(E))) : (M === 8 && d(de.INVALID_LINKED_FORMAT, s(), 0), _.braceNest = 0, _.inLinked = !1, je(E, _));
    }
  }
  function je(E, _) {
    let M = {
      type: 14
      /* TokenTypes.EOF */
    };
    if (_.braceNest > 0)
      return be(E, _) || p(_);
    if (_.inLinked)
      return Be(E, _) || p(_);
    switch (E.currentChar()) {
      case "{":
        return be(E, _) || p(_);
      case "}":
        return d(de.UNBALANCED_CLOSING_BRACE, s(), 0), E.next(), v(
          _,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return Be(E, _) || p(_);
      default:
        if (R(E))
          return M = v(_, 1, De(E)), _.braceNest = 0, _.inLinked = !1, M;
        const { isModulo: oe, hasSpace: ye } = B(E);
        if (oe)
          return ye ? v(_, 0, z(E)) : v(_, 4, Ee(E));
        if (Y(E))
          return v(_, 0, z(E));
        break;
    }
    return M;
  }
  function nt() {
    const { currentType: E, offset: _, startLoc: M, endLoc: Q } = l;
    return l.lastType = E, l.lastOffset = _, l.lastStartLoc = M, l.lastEndLoc = Q, l.offset = a(), l.startLoc = s(), r.currentChar() === mn ? v(
      l,
      14
      /* TokenTypes.EOF */
    ) : je(r, l);
  }
  return {
    nextToken: nt,
    currentOffset: a,
    currentPosition: s,
    context: c
  };
}
const l2 = "parser", u2 = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function c2(e, t, n) {
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
function d2(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function r(f, b, T, w, ...P) {
    const N = f.currentPosition();
    if (N.offset += w, N.column += w, n) {
      const x = t ? Ps(T, N) : null, S = wr(b, x, {
        domain: l2,
        args: P
      });
      n(S);
    }
  }
  function a(f, b, T) {
    const w = { type: f };
    return t && (w.start = b, w.end = b, w.loc = { start: T, end: T }), w;
  }
  function s(f, b, T, w) {
    w && (f.type = w), t && (f.end = b, f.loc && (f.loc.end = T));
  }
  function o(f, b) {
    const T = f.context(), w = a(3, T.offset, T.startLoc);
    return w.value = b, s(w, f.currentOffset(), f.currentPosition()), w;
  }
  function i(f, b) {
    const T = f.context(), { lastOffset: w, lastStartLoc: P } = T, N = a(5, w, P);
    return N.index = parseInt(b, 10), f.nextToken(), s(N, f.currentOffset(), f.currentPosition()), N;
  }
  function l(f, b) {
    const T = f.context(), { lastOffset: w, lastStartLoc: P } = T, N = a(4, w, P);
    return N.key = b, f.nextToken(), s(N, f.currentOffset(), f.currentPosition()), N;
  }
  function c(f, b) {
    const T = f.context(), { lastOffset: w, lastStartLoc: P } = T, N = a(9, w, P);
    return N.value = b.replace(u2, c2), f.nextToken(), s(N, f.currentOffset(), f.currentPosition()), N;
  }
  function u(f) {
    const b = f.nextToken(), T = f.context(), { lastOffset: w, lastStartLoc: P } = T, N = a(8, w, P);
    return b.type !== 12 ? (r(f, de.UNEXPECTED_EMPTY_LINKED_MODIFIER, T.lastStartLoc, 0), N.value = "", s(N, w, P), {
      nextConsumeToken: b,
      node: N
    }) : (b.value == null && r(f, de.UNEXPECTED_LEXICAL_ANALYSIS, T.lastStartLoc, 0, jt(b)), N.value = b.value || "", s(N, f.currentOffset(), f.currentPosition()), {
      node: N
    });
  }
  function d(f, b) {
    const T = f.context(), w = a(7, T.offset, T.startLoc);
    return w.value = b, s(w, f.currentOffset(), f.currentPosition()), w;
  }
  function v(f) {
    const b = f.context(), T = a(6, b.offset, b.startLoc);
    let w = f.nextToken();
    if (w.type === 9) {
      const P = u(f);
      T.modifier = P.node, w = P.nextConsumeToken || f.nextToken();
    }
    switch (w.type !== 10 && r(f, de.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, jt(w)), w = f.nextToken(), w.type === 2 && (w = f.nextToken()), w.type) {
      case 11:
        w.value == null && r(f, de.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, jt(w)), T.key = d(f, w.value || "");
        break;
      case 5:
        w.value == null && r(f, de.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, jt(w)), T.key = l(f, w.value || "");
        break;
      case 6:
        w.value == null && r(f, de.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, jt(w)), T.key = i(f, w.value || "");
        break;
      case 7:
        w.value == null && r(f, de.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, jt(w)), T.key = c(f, w.value || "");
        break;
      default:
        r(f, de.UNEXPECTED_EMPTY_LINKED_KEY, b.lastStartLoc, 0);
        const P = f.context(), N = a(7, P.offset, P.startLoc);
        return N.value = "", s(N, P.offset, P.startLoc), T.key = N, s(T, P.offset, P.startLoc), {
          nextConsumeToken: w,
          node: T
        };
    }
    return s(T, f.currentOffset(), f.currentPosition()), {
      node: T
    };
  }
  function p(f) {
    const b = f.context(), T = b.currentType === 1 ? f.currentOffset() : b.offset, w = b.currentType === 1 ? b.endLoc : b.startLoc, P = a(2, T, w);
    P.items = [];
    let N = null;
    do {
      const L = N || f.nextToken();
      switch (N = null, L.type) {
        case 0:
          L.value == null && r(f, de.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, jt(L)), P.items.push(o(f, L.value || ""));
          break;
        case 6:
          L.value == null && r(f, de.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, jt(L)), P.items.push(i(f, L.value || ""));
          break;
        case 5:
          L.value == null && r(f, de.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, jt(L)), P.items.push(l(f, L.value || ""));
          break;
        case 7:
          L.value == null && r(f, de.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, jt(L)), P.items.push(c(f, L.value || ""));
          break;
        case 8:
          const R = v(f);
          P.items.push(R.node), N = R.nextConsumeToken || null;
          break;
      }
    } while (b.currentType !== 14 && b.currentType !== 1);
    const x = b.currentType === 1 ? b.lastOffset : f.currentOffset(), S = b.currentType === 1 ? b.lastEndLoc : f.currentPosition();
    return s(P, x, S), P;
  }
  function h(f, b, T, w) {
    const P = f.context();
    let N = w.items.length === 0;
    const x = a(1, b, T);
    x.cases = [], x.cases.push(w);
    do {
      const S = p(f);
      N || (N = S.items.length === 0), x.cases.push(S);
    } while (P.currentType !== 14);
    return N && r(f, de.MUST_HAVE_MESSAGES_IN_PLURAL, T, 0), s(x, f.currentOffset(), f.currentPosition()), x;
  }
  function m(f) {
    const b = f.context(), { offset: T, startLoc: w } = b, P = p(f);
    return b.currentType === 14 ? P : h(f, T, w, P);
  }
  function y(f) {
    const b = i2(f, Mc({}, e)), T = b.context(), w = a(0, T.offset, T.startLoc);
    return t && w.loc && (w.loc.source = f), w.body = m(b), e.onCacheKey && (w.cacheKey = e.onCacheKey(f)), T.currentType !== 14 && r(b, de.UNEXPECTED_LEXICAL_ANALYSIS, T.lastStartLoc, 0, f[T.offset] || ""), s(w, b.currentOffset(), b.currentPosition()), w;
  }
  return { parse: y };
}
function jt(e) {
  if (e.type === 14)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function f2(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (s) => (n.helpers.add(s), s) };
}
function gl(e, t) {
  for (let n = 0; n < e.length; n++)
    Fo(e[n], t);
}
function Fo(e, t) {
  switch (e.type) {
    case 1:
      gl(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      gl(e.items, t);
      break;
    case 6:
      Fo(e.key, t), t.helper(
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
function v2(e, t = {}) {
  const n = f2(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && Fo(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function p2(e) {
  const t = e.body;
  return t.type === 2 ? _l(t) : t.cases.forEach((n) => _l(n)), e;
}
function _l(e) {
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
      e.static = xc(t);
      for (let n = 0; n < e.items.length; n++) {
        const r = e.items[n];
        (r.type === 3 || r.type === 9) && delete r.value;
      }
    }
  }
}
const m2 = "minifier";
function Kn(e) {
  switch (e.t = e.type, e.type) {
    case 0:
      const t = e;
      Kn(t.body), t.b = t.body, delete t.body;
      break;
    case 1:
      const n = e, r = n.cases;
      for (let u = 0; u < r.length; u++)
        Kn(r[u]);
      n.c = r, delete n.cases;
      break;
    case 2:
      const a = e, s = a.items;
      for (let u = 0; u < s.length; u++)
        Kn(s[u]);
      a.i = s, delete a.items, a.static && (a.s = a.static, delete a.static);
      break;
    case 3:
    case 9:
    case 8:
    case 7:
      const o = e;
      o.value && (o.v = o.value, delete o.value);
      break;
    case 6:
      const i = e;
      Kn(i.key), i.k = i.key, delete i.key, i.modifier && (Kn(i.modifier), i.m = i.modifier, delete i.modifier);
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
      throw wr(de.UNHANDLED_MINIFIER_NODE_TYPE, null, {
        domain: m2,
        args: [e.type]
      });
  }
  delete e.type;
}
const h2 = "parser";
function g2(e, t) {
  const { sourceMap: n, filename: r, breakLineCode: a, needIndent: s } = t, o = t.location !== !1, i = {
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
  o && e.loc && (i.source = e.loc.source);
  const l = () => i;
  function c(y, f) {
    i.code += y;
  }
  function u(y, f = !0) {
    const b = f ? a : "";
    c(s ? b + "  ".repeat(y) : b);
  }
  function d(y = !0) {
    const f = ++i.indentLevel;
    y && u(f);
  }
  function v(y = !0) {
    const f = --i.indentLevel;
    y && u(f);
  }
  function p() {
    u(i.indentLevel);
  }
  return {
    context: l,
    push: c,
    indent: d,
    deindent: v,
    newline: p,
    helper: (y) => `_${y}`,
    needIndent: () => i.needIndent
  };
}
function _2(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), cr(e, t.key), t.modifier ? (e.push(", "), cr(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function y2(e, t) {
  const { helper: n, needIndent: r } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(r());
  const a = t.items.length;
  for (let s = 0; s < a && (cr(e, t.items[s]), s !== a - 1); s++)
    e.push(", ");
  e.deindent(r()), e.push("])");
}
function b2(e, t) {
  const { helper: n, needIndent: r } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(r());
    const a = t.cases.length;
    for (let s = 0; s < a && (cr(e, t.cases[s]), s !== a - 1); s++)
      e.push(", ");
    e.deindent(r()), e.push("])");
  }
}
function w2(e, t) {
  t.body ? cr(e, t.body) : e.push("null");
}
function cr(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      w2(e, t);
      break;
    case 1:
      b2(e, t);
      break;
    case 2:
      y2(e, t);
      break;
    case 6:
      _2(e, t);
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
      throw wr(de.UNHANDLED_CODEGEN_NODE_TYPE, null, {
        domain: h2,
        args: [t.type]
      });
  }
}
const E2 = (e, t = {}) => {
  const n = ml(t.mode) ? t.mode : "normal", r = ml(t.filename) ? t.filename : "message.intl", a = !!t.sourceMap, s = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, o = t.needIndent ? t.needIndent : n !== "arrow", i = e.helpers || [], l = g2(e, {
    mode: n,
    filename: r,
    sourceMap: a,
    breakLineCode: s,
    needIndent: o
  });
  l.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), l.indent(o), i.length > 0 && (l.push(`const { ${xc(i.map((d) => `${d}: _${d}`), ", ")} } = ctx`), l.newline()), l.push("return "), cr(l, e), l.deindent(o), l.push("}"), delete e.helpers;
  const { code: c, map: u } = l.context();
  return {
    ast: e,
    code: c,
    map: u ? u.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function D2(e, t = {}) {
  const n = Mc({}, t), r = !!n.jit, a = !!n.minify, s = n.optimize == null ? !0 : n.optimize, i = d2(n).parse(e);
  return r ? (s && p2(i), a && Kn(i), { ast: i, code: "" }) : (v2(i, n), E2(i, n));
}
/*!
  * core-base v9.5.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */
function O2() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (nn().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (nn().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (nn().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const Tn = [];
Tn[
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
Tn[
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
Tn[
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
Tn[
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
Tn[
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
Tn[
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
Tn[
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
const $2 = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function T2(e) {
  return $2.test(e);
}
function k2(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function N2(e) {
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
function I2(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : T2(t) ? k2(t) : "*" + t;
}
function A2(e) {
  const t = [];
  let n = -1, r = 0, a = 0, s, o, i, l, c, u, d;
  const v = [];
  v[
    0
    /* Actions.APPEND */
  ] = () => {
    o === void 0 ? o = i : o += i;
  }, v[
    1
    /* Actions.PUSH */
  ] = () => {
    o !== void 0 && (t.push(o), o = void 0);
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
      if (a = 0, o === void 0 || (o = I2(o), o === !1))
        return !1;
      v[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function p() {
    const h = e[n + 1];
    if (r === 5 && h === "'" || r === 6 && h === '"')
      return n++, i = "\\" + h, v[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; r !== null; )
    if (n++, s = e[n], !(s === "\\" && p())) {
      if (l = N2(s), d = Tn[r], c = d[l] || d.l || 8, c === 8 || (r = c[0], c[1] !== void 0 && (u = v[c[1]], u && (i = s, u() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const yl = /* @__PURE__ */ new Map();
function C2(e, t) {
  return Ae(e) ? e[t] : null;
}
function S2(e, t) {
  if (!Ae(e))
    return null;
  let n = yl.get(t);
  if (n || (n = A2(t), n && yl.set(t, n)), !n)
    return null;
  const r = n.length;
  let a = e, s = 0;
  for (; s < r; ) {
    const o = a[n[s]];
    if (o === void 0)
      return null;
    a = o, s++;
  }
  return a;
}
const P2 = (e) => e, L2 = (e) => "", M2 = "text", x2 = (e) => e.length === 0 ? "" : HT(e), R2 = BT;
function bl(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function F2(e) {
  const t = et(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (et(e.named.count) || et(e.named.n)) ? et(e.named.count) ? e.named.count : et(e.named.n) ? e.named.n : t : t;
}
function Y2(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function V2(e = {}) {
  const t = e.locale, n = F2(e), r = Ae(e.pluralRules) && J(t) && Ve(e.pluralRules[t]) ? e.pluralRules[t] : bl, a = Ae(e.pluralRules) && J(t) && Ve(e.pluralRules[t]) ? bl : void 0, s = (f) => f[r(n, f.length, a)], o = e.list || [], i = (f) => o[f], l = e.named || {};
  et(e.pluralIndex) && Y2(n, l);
  const c = (f) => l[f];
  function u(f) {
    const b = Ve(e.messages) ? e.messages(f) : Ae(e.messages) ? e.messages[f] : !1;
    return b || (e.parent ? e.parent.message(f) : L2);
  }
  const d = (f) => e.modifiers ? e.modifiers[f] : P2, v = me(e.processor) && Ve(e.processor.normalize) ? e.processor.normalize : x2, p = me(e.processor) && Ve(e.processor.interpolate) ? e.processor.interpolate : R2, h = me(e.processor) && J(e.processor.type) ? e.processor.type : M2, y = {
    list: i,
    named: c,
    plural: s,
    linked: (f, ...b) => {
      const [T, w] = b;
      let P = "text", N = "";
      b.length === 1 ? Ae(T) ? (N = T.modifier || N, P = T.type || P) : J(T) && (N = T || N) : b.length === 2 && (J(T) && (N = T || N), J(w) && (P = w || P));
      const x = u(f)(y), S = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        P === "vnode" && Re(x) && N ? x[0] : x
      );
      return N ? d(N)(S, P) : S;
    },
    message: u,
    type: h,
    interpolate: p,
    normalize: v,
    values: st({}, o, l)
  };
  return y;
}
let Hr = null;
function U2(e) {
  Hr = e;
}
function j2(e, t, n) {
  Hr && Hr.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: n
  });
}
const B2 = /* @__PURE__ */ H2(
  "function:translate"
  /* IntlifyDevToolsHooks.FunctionTranslate */
);
function H2(e) {
  return (t) => Hr && Hr.emit(e, t);
}
const ct = {
  NOT_FOUND_KEY: 1,
  FALLBACK_TO_TRANSLATE: 2,
  CANNOT_FORMAT_NUMBER: 3,
  FALLBACK_TO_NUMBER_FORMAT: 4,
  CANNOT_FORMAT_DATE: 5,
  FALLBACK_TO_DATE_FORMAT: 6,
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: 7,
  __EXTEND_POINT__: 8
}, W2 = {
  [ct.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
  [ct.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
  [ct.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
  [ct.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
  [ct.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
  [ct.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale.",
  [ct.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: "This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future."
};
function Rn(e, ...t) {
  return Lo(W2[e], ...t);
}
function Yo(e, t) {
  return t.locale != null ? wl(t.locale) : wl(e.locale);
}
let ps;
function wl(e) {
  return J(e) ? e : ps != null && e.resolvedOnce ? ps : ps = e();
}
function G2(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...Re(t) ? t : Ae(t) ? Object.keys(t) : J(t) ? [t] : [n]
  ])];
}
function Rc(e, t, n) {
  const r = J(n) ? n : dr, a = e;
  a.__localeChainCache || (a.__localeChainCache = /* @__PURE__ */ new Map());
  let s = a.__localeChainCache.get(r);
  if (!s) {
    s = [];
    let o = [n];
    for (; Re(o); )
      o = El(s, o, t);
    const i = Re(t) || !me(t) ? t : t.default ? t.default : null;
    o = J(i) ? [i] : i, Re(o) && El(s, o, !1), a.__localeChainCache.set(r, s);
  }
  return s;
}
function El(e, t, n) {
  let r = !0;
  for (let a = 0; a < t.length && we(r); a++) {
    const s = t[a];
    J(s) && (r = z2(e, t[a], n));
  }
  return r;
}
function z2(e, t, n) {
  let r;
  const a = t.split("-");
  do {
    const s = a.join("-");
    r = K2(e, s, n), a.splice(-1, 1);
  } while (a.length && r === !0);
  return r;
}
function K2(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== "!";
    const a = t.replace(/!/g, "");
    e.push(a), (Re(n) || me(n)) && n[a] && (r = n[a]);
  }
  return r;
}
const q2 = "9.5.0", Qa = -1, dr = "en-US", Va = "", Dl = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Z2() {
  return {
    upper: (e, t) => t === "text" && J(e) ? e.toUpperCase() : t === "vnode" && Ae(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && J(e) ? e.toLowerCase() : t === "vnode" && Ae(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && J(e) ? Dl(e) : t === "vnode" && Ae(e) && "__v_isVNode" in e ? Dl(e.children) : e
  };
}
let Fc;
function Ol(e) {
  Fc = e;
}
let Yc;
function X2(e) {
  Yc = e;
}
let Vc;
function J2(e) {
  Vc = e;
}
let Uc = null;
const $l = (e) => {
  Uc = e;
}, Q2 = () => Uc;
let jc = null;
const Tl = (e) => {
  jc = e;
}, ek = () => jc;
let kl = 0;
function tk(e = {}) {
  const t = Ve(e.onWarn) ? e.onWarn : rt, n = J(e.version) ? e.version : q2, r = J(e.locale) || Ve(e.locale) ? e.locale : dr, a = Ve(r) ? dr : r, s = Re(e.fallbackLocale) || me(e.fallbackLocale) || J(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : a, o = me(e.messages) ? e.messages : { [a]: {} }, i = me(e.datetimeFormats) ? e.datetimeFormats : { [a]: {} }, l = me(e.numberFormats) ? e.numberFormats : { [a]: {} }, c = st({}, e.modifiers || {}, Z2()), u = e.pluralRules || {}, d = Ve(e.missing) ? e.missing : null, v = we(e.missingWarn) || On(e.missingWarn) ? e.missingWarn : !0, p = we(e.fallbackWarn) || On(e.fallbackWarn) ? e.fallbackWarn : !0, h = !!e.fallbackFormat, m = !!e.unresolving, y = Ve(e.postTranslation) ? e.postTranslation : null, f = me(e.processor) ? e.processor : null, b = we(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, T = !!e.escapeParameter, w = Ve(e.messageCompiler) ? e.messageCompiler : Fc;
  process.env.NODE_ENV !== "production" && Ve(e.messageCompiler) && GT(Rn(ct.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
  const P = Ve(e.messageResolver) ? e.messageResolver : Yc || C2, N = Ve(e.localeFallbacker) ? e.localeFallbacker : Vc || G2, x = Ae(e.fallbackContext) ? e.fallbackContext : void 0, S = e, L = Ae(S.__datetimeFormatters) ? S.__datetimeFormatters : /* @__PURE__ */ new Map(), R = Ae(S.__numberFormatters) ? S.__numberFormatters : /* @__PURE__ */ new Map(), B = Ae(S.__meta) ? S.__meta : {};
  kl++;
  const Y = {
    version: n,
    cid: kl,
    locale: r,
    fallbackLocale: s,
    messages: o,
    modifiers: c,
    pluralRules: u,
    missing: d,
    missingWarn: v,
    fallbackWarn: p,
    fallbackFormat: h,
    unresolving: m,
    postTranslation: y,
    processor: f,
    warnHtmlMessage: b,
    escapeParameter: T,
    messageCompiler: w,
    messageResolver: P,
    localeFallbacker: N,
    fallbackContext: x,
    onWarn: t,
    __meta: B
  };
  return Y.datetimeFormats = i, Y.numberFormats = l, Y.__datetimeFormatters = L, Y.__numberFormatters = R, process.env.NODE_ENV !== "production" && (Y.__v_emitter = S.__v_emitter != null ? S.__v_emitter : void 0), (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && j2(Y, n, B), Y;
}
function es(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function Bc(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function Vo(e, t, n, r, a) {
  const { missing: s, onWarn: o } = e;
  if (process.env.NODE_ENV !== "production") {
    const i = e.__v_emitter;
    i && i.emit("missing", {
      locale: n,
      key: t,
      type: a,
      groupId: `${a}:${t}`
    });
  }
  if (s !== null) {
    const i = s(e, n, t, a);
    return J(i) ? i : t;
  } else
    return process.env.NODE_ENV !== "production" && Bc(r, t) && o(Rn(ct.NOT_FOUND_KEY, { key: t, locale: n })), t;
}
function Ar(e, t, n) {
  const r = e;
  r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function ms(e) {
  return (n) => nk(n, e);
}
function nk(e, t) {
  const n = t.b || t.body;
  if ((n.t || n.type) === 1) {
    const r = n, a = r.c || r.cases;
    return e.plural(a.reduce((s, o) => [
      ...s,
      Nl(e, o)
    ], []));
  } else
    return Nl(e, n);
}
function Nl(e, t) {
  const n = t.s || t.static;
  if (n)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const r = (t.i || t.items).reduce((a, s) => [...a, Ls(e, s)], []);
    return e.normalize(r);
  }
}
function Ls(e, t) {
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
      const o = t;
      return e.interpolate(e.list(o.i != null ? o.i : o.index));
    case 6:
      const i = t, l = i.m || i.modifier;
      return e.linked(Ls(e, i.k || i.key), l ? Ls(e, l) : void 0, e.type);
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
const Hc = de.__EXTEND_POINT__, la = xo(Hc), Tt = {
  INVALID_ARGUMENT: Hc,
  INVALID_DATE_ARGUMENT: la(),
  INVALID_ISO_DATE_ARGUMENT: la(),
  NOT_SUPPORT_NON_STRING_MESSAGE: la(),
  __EXTEND_POINT__: la()
  // 22
};
function Sn(e) {
  return wr(e, null, process.env.NODE_ENV !== "production" ? { messages: rk } : void 0);
}
const rk = {
  [Tt.INVALID_ARGUMENT]: "Invalid arguments",
  [Tt.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [Tt.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
  [Tt.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message"
}, ak = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function Wc(e, t) {
  t && e2(e) && rt(Lo(ak, { source: e }));
}
const Gc = (e) => e;
let er = /* @__PURE__ */ Object.create(null);
const Fn = (e) => Ae(e) && (e.t === 0 || e.type === 0) && ("b" in e || "body" in e);
function zc(e, t = {}) {
  let n = !1;
  const r = t.onError || JT;
  return t.onError = (a) => {
    n = !0, r(a);
  }, { ...D2(e, t), detectError: n };
}
const sk = (e, t) => {
  if (!J(e))
    throw Sn(Tt.NOT_SUPPORT_NON_STRING_MESSAGE);
  {
    const n = we(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && Wc(e, n);
    const a = (t.onCacheKey || Gc)(e), s = er[a];
    if (s)
      return s;
    const { code: o, detectError: i } = zc(e, t), l = new Function(`return ${o}`)();
    return i ? l : er[a] = l;
  }
};
function ok(e, t) {
  if (__INTLIFY_JIT_COMPILATION__ && !__INTLIFY_DROP_MESSAGE_COMPILER__ && J(e)) {
    const n = we(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && Wc(e, n);
    const a = (t.onCacheKey || Gc)(e), s = er[a];
    if (s)
      return s;
    const { ast: o, detectError: i } = zc(e, {
      ...t,
      location: process.env.NODE_ENV !== "production",
      jit: !0
    }), l = ms(o);
    return i ? l : er[a] = l;
  } else {
    if (process.env.NODE_ENV !== "production" && !Fn(e))
      return rt(`the message that is resolve with key '${t.key}' is not supported for jit compilation`), () => e;
    const n = e.cacheKey;
    if (n) {
      const r = er[n];
      return r || (er[n] = ms(e));
    } else
      return ms(e);
  }
}
const Il = () => "", xt = (e) => Ve(e);
function Al(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: a, messageCompiler: s, fallbackLocale: o, messages: i } = e, [l, c] = Ms(...t), u = we(c.missingWarn) ? c.missingWarn : e.missingWarn, d = we(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn, v = we(c.escapeParameter) ? c.escapeParameter : e.escapeParameter, p = !!c.resolvedMessage, h = J(c.default) || we(c.default) ? we(c.default) ? s ? l : () => l : c.default : n ? s ? l : () => l : "", m = n || h !== "", y = Yo(e, c);
  v && ik(c);
  let [f, b, T] = p ? [
    l,
    y,
    i[y] || {}
  ] : Kc(e, l, y, o, d, u), w = f, P = l;
  if (!p && !(J(w) || Fn(w) || xt(w)) && m && (w = h, P = w), !p && (!(J(w) || Fn(w) || xt(w)) || !J(b)))
    return a ? Qa : l;
  if (process.env.NODE_ENV !== "production" && J(w) && e.messageCompiler == null)
    return rt(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${l}'.`), l;
  let N = !1;
  const x = () => {
    N = !0;
  }, S = xt(w) ? w : qc(e, l, b, w, P, x);
  if (N)
    return w;
  const L = dk(e, b, T, c), R = V2(L), B = lk(e, S, R), Y = r ? r(B, l) : B;
  if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    const q = {
      timestamp: Date.now(),
      key: J(l) ? l : xt(w) ? w.key : "",
      locale: b || (xt(w) ? w.locale : ""),
      format: J(w) ? w : xt(w) ? w.source : "",
      message: Y
    };
    q.meta = st({}, e.__meta, Q2() || {}), B2(q);
  }
  return Y;
}
function ik(e) {
  Re(e.list) ? e.list = e.list.map((t) => J(t) ? fl(t) : t) : Ae(e.named) && Object.keys(e.named).forEach((t) => {
    J(e.named[t]) && (e.named[t] = fl(e.named[t]));
  });
}
function Kc(e, t, n, r, a, s) {
  const { messages: o, onWarn: i, messageResolver: l, localeFallbacker: c } = e, u = c(e, r, n);
  let d = {}, v, p = null, h = n, m = null;
  const y = "translate";
  for (let f = 0; f < u.length; f++) {
    if (v = m = u[f], process.env.NODE_ENV !== "production" && n !== v && es(a, t) && i(Rn(ct.FALLBACK_TO_TRANSLATE, {
      key: t,
      target: v
    })), process.env.NODE_ENV !== "production" && n !== v) {
      const N = e.__v_emitter;
      N && N.emit("fallback", {
        type: y,
        key: t,
        from: h,
        to: m,
        groupId: `${y}:${t}`
      });
    }
    d = o[v] || {};
    let b = null, T, w;
    if (process.env.NODE_ENV !== "production" && qt && (b = window.performance.now(), T = "intlify-message-resolve-start", w = "intlify-message-resolve-end", bt && bt(T)), (p = l(d, t)) === null && (p = d[t]), process.env.NODE_ENV !== "production" && qt) {
      const N = window.performance.now(), x = e.__v_emitter;
      x && b && p && x.emit("message-resolve", {
        type: "message-resolve",
        key: t,
        message: p,
        time: N - b,
        groupId: `${y}:${t}`
      }), T && w && bt && xn && (bt(w), xn("intlify message resolve", T, w));
    }
    if (J(p) || Fn(p) || xt(p))
      break;
    const P = Vo(
      e,
      // eslint-disable-line @typescript-eslint/no-explicit-any
      t,
      v,
      s,
      y
    );
    P !== t && (p = P), h = m;
  }
  return [p, v, d];
}
function qc(e, t, n, r, a, s) {
  const { messageCompiler: o, warnHtmlMessage: i } = e;
  if (xt(r)) {
    const v = r;
    return v.locale = v.locale || n, v.key = v.key || t, v;
  }
  if (o == null) {
    const v = () => r;
    return v.locale = n, v.key = t, v;
  }
  let l = null, c, u;
  process.env.NODE_ENV !== "production" && qt && (l = window.performance.now(), c = "intlify-message-compilation-start", u = "intlify-message-compilation-end", bt && bt(c));
  const d = o(r, uk(e, n, a, r, i, s));
  if (process.env.NODE_ENV !== "production" && qt) {
    const v = window.performance.now(), p = e.__v_emitter;
    p && l && p.emit("message-compilation", {
      type: "message-compilation",
      message: r,
      time: v - l,
      groupId: `translate:${t}`
    }), c && u && bt && xn && (bt(u), xn("intlify message compilation", c, u));
  }
  return d.locale = n, d.key = t, d.source = r, d;
}
function lk(e, t, n) {
  let r = null, a, s;
  process.env.NODE_ENV !== "production" && qt && (r = window.performance.now(), a = "intlify-message-evaluation-start", s = "intlify-message-evaluation-end", bt && bt(a));
  const o = t(n);
  if (process.env.NODE_ENV !== "production" && qt) {
    const i = window.performance.now(), l = e.__v_emitter;
    l && r && l.emit("message-evaluation", {
      type: "message-evaluation",
      value: o,
      time: i - r,
      groupId: `translate:${t.key}`
    }), a && s && bt && xn && (bt(s), xn("intlify message evaluation", a, s));
  }
  return o;
}
function Ms(...e) {
  const [t, n, r] = e, a = {};
  if (!J(t) && !et(t) && !xt(t) && !Fn(t))
    throw Sn(Tt.INVALID_ARGUMENT);
  const s = et(t) ? String(t) : (xt(t), t);
  return et(n) ? a.plural = n : J(n) ? a.default = n : me(n) && !Ja(n) ? a.named = n : Re(n) && (a.list = n), et(r) ? a.plural = r : J(r) ? a.default = r : me(r) && st(a, r), [s, a];
}
function uk(e, t, n, r, a, s) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: a,
    onError: (o) => {
      if (s && s(o), process.env.NODE_ENV !== "production") {
        const i = ck(r), l = `Message compilation error: ${o.message}`, c = o.location && i && WT(i, o.location.start.offset, o.location.end.offset), u = e.__v_emitter;
        u && i && u.emit("compile-error", {
          message: i,
          error: o.message,
          start: o.location && o.location.start.offset,
          end: o.location && o.location.end.offset,
          groupId: `translate:${n}`
        }), console.error(c ? `${l}
${c}` : l);
      } else
        throw o;
    },
    onCacheKey: (o) => YT(t, n, o)
  };
}
function ck(e) {
  var t;
  if (!J(e)) {
    if ((t = e.loc) != null && t.source)
      return e.loc.source;
  }
}
function dk(e, t, n, r) {
  const { modifiers: a, pluralRules: s, messageResolver: o, fallbackLocale: i, fallbackWarn: l, missingWarn: c, fallbackContext: u } = e, v = {
    locale: t,
    modifiers: a,
    pluralRules: s,
    messages: (p) => {
      let h = o(n, p);
      if (h == null && u) {
        const [, , m] = Kc(u, p, t, i, l, c);
        h = o(m, p);
      }
      if (J(h) || Fn(h)) {
        let m = !1;
        const f = qc(e, p, t, h, p, () => {
          m = !0;
        });
        return m ? Il : f;
      } else
        return xt(h) ? h : Il;
    }
  };
  return e.processor && (v.processor = e.processor), r.list && (v.list = r.list), r.named && (v.named = r.named), et(r.plural) && (v.pluralIndex = r.plural), v;
}
const Cl = typeof Intl < "u", Zc = {
  dateTimeFormat: Cl && typeof Intl.DateTimeFormat < "u",
  numberFormat: Cl && typeof Intl.NumberFormat < "u"
};
function Sl(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: a, onWarn: s, localeFallbacker: o } = e, { __datetimeFormatters: i } = e;
  if (process.env.NODE_ENV !== "production" && !Zc.dateTimeFormat)
    return s(Rn(ct.CANNOT_FORMAT_DATE)), Va;
  const [l, c, u, d] = xs(...t), v = we(u.missingWarn) ? u.missingWarn : e.missingWarn, p = we(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, h = !!u.part, m = Yo(e, u), y = o(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    a,
    m
  );
  if (!J(l) || l === "")
    return new Intl.DateTimeFormat(m, d).format(c);
  let f = {}, b, T = null, w = m, P = null;
  const N = "datetime format";
  for (let L = 0; L < y.length; L++) {
    if (b = P = y[L], process.env.NODE_ENV !== "production" && m !== b && es(p, l) && s(Rn(ct.FALLBACK_TO_DATE_FORMAT, {
      key: l,
      target: b
    })), process.env.NODE_ENV !== "production" && m !== b) {
      const R = e.__v_emitter;
      R && R.emit("fallback", {
        type: N,
        key: l,
        from: w,
        to: P,
        groupId: `${N}:${l}`
      });
    }
    if (f = n[b] || {}, T = f[l], me(T))
      break;
    Vo(e, l, b, v, N), w = P;
  }
  if (!me(T) || !J(b))
    return r ? Qa : l;
  let x = `${b}__${l}`;
  Ja(d) || (x = `${x}__${JSON.stringify(d)}`);
  let S = i.get(x);
  return S || (S = new Intl.DateTimeFormat(b, st({}, T, d)), i.set(x, S)), h ? S.formatToParts(c) : S.format(c);
}
const Xc = [
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
function xs(...e) {
  const [t, n, r, a] = e, s = {};
  let o = {}, i;
  if (J(t)) {
    const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l)
      throw Sn(Tt.INVALID_ISO_DATE_ARGUMENT);
    const c = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
    i = new Date(c);
    try {
      i.toISOString();
    } catch {
      throw Sn(Tt.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (UT(t)) {
    if (isNaN(t.getTime()))
      throw Sn(Tt.INVALID_DATE_ARGUMENT);
    i = t;
  } else if (et(t))
    i = t;
  else
    throw Sn(Tt.INVALID_ARGUMENT);
  return J(n) ? s.key = n : me(n) && Object.keys(n).forEach((l) => {
    Xc.includes(l) ? o[l] = n[l] : s[l] = n[l];
  }), J(r) ? s.locale = r : me(r) && (o = r), me(a) && (o = a), [s.key || "", i, s, o];
}
function Pl(e, t, n) {
  const r = e;
  for (const a in n) {
    const s = `${t}__${a}`;
    r.__datetimeFormatters.has(s) && r.__datetimeFormatters.delete(s);
  }
}
function Ll(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: a, onWarn: s, localeFallbacker: o } = e, { __numberFormatters: i } = e;
  if (process.env.NODE_ENV !== "production" && !Zc.numberFormat)
    return s(Rn(ct.CANNOT_FORMAT_NUMBER)), Va;
  const [l, c, u, d] = Rs(...t), v = we(u.missingWarn) ? u.missingWarn : e.missingWarn, p = we(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, h = !!u.part, m = Yo(e, u), y = o(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    a,
    m
  );
  if (!J(l) || l === "")
    return new Intl.NumberFormat(m, d).format(c);
  let f = {}, b, T = null, w = m, P = null;
  const N = "number format";
  for (let L = 0; L < y.length; L++) {
    if (b = P = y[L], process.env.NODE_ENV !== "production" && m !== b && es(p, l) && s(Rn(ct.FALLBACK_TO_NUMBER_FORMAT, {
      key: l,
      target: b
    })), process.env.NODE_ENV !== "production" && m !== b) {
      const R = e.__v_emitter;
      R && R.emit("fallback", {
        type: N,
        key: l,
        from: w,
        to: P,
        groupId: `${N}:${l}`
      });
    }
    if (f = n[b] || {}, T = f[l], me(T))
      break;
    Vo(e, l, b, v, N), w = P;
  }
  if (!me(T) || !J(b))
    return r ? Qa : l;
  let x = `${b}__${l}`;
  Ja(d) || (x = `${x}__${JSON.stringify(d)}`);
  let S = i.get(x);
  return S || (S = new Intl.NumberFormat(b, st({}, T, d)), i.set(x, S)), h ? S.formatToParts(c) : S.format(c);
}
const Jc = [
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
function Rs(...e) {
  const [t, n, r, a] = e, s = {};
  let o = {};
  if (!et(t))
    throw Sn(Tt.INVALID_ARGUMENT);
  const i = t;
  return J(n) ? s.key = n : me(n) && Object.keys(n).forEach((l) => {
    Jc.includes(l) ? o[l] = n[l] : s[l] = n[l];
  }), J(r) ? s.locale = r : me(r) && (o = r), me(a) && (o = a), [s.key || "", i, s, o];
}
function Ml(e, t, n) {
  const r = e;
  for (const a in n) {
    const s = `${t}__${a}`;
    r.__numberFormatters.has(s) && r.__numberFormatters.delete(s);
  }
}
O2();
function fk() {
  return Qc().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function Qc() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const vk = typeof Proxy == "function", pk = "devtools-plugin:setup", mk = "plugin:settings:set";
let Gn, Fs;
function hk() {
  var e;
  return Gn !== void 0 || (typeof window < "u" && window.performance ? (Gn = !0, Fs = window.performance) : typeof global < "u" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (Gn = !0, Fs = global.perf_hooks.performance) : Gn = !1), Gn;
}
function gk() {
  return hk() ? Fs.now() : Date.now();
}
class _k {
  constructor(t, n) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n;
    const r = {};
    if (t.settings)
      for (const o in t.settings) {
        const i = t.settings[o];
        r[o] = i.defaultValue;
      }
    const a = `__vue-devtools-plugin-settings__${t.id}`;
    let s = Object.assign({}, r);
    try {
      const o = localStorage.getItem(a), i = JSON.parse(o);
      Object.assign(s, i);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return s;
      },
      setSettings(o) {
        try {
          localStorage.setItem(a, JSON.stringify(o));
        } catch {
        }
        s = o;
      },
      now() {
        return gk();
      }
    }, n && n.on(mk, (o, i) => {
      o === this.plugin.id && this.fallbacks.setSettings(i);
    }), this.proxiedOn = new Proxy({}, {
      get: (o, i) => this.target ? this.target.on[i] : (...l) => {
        this.onQueue.push({
          method: i,
          args: l
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (o, i) => this.target ? this.target[i] : i === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(i) ? (...l) => (this.targetQueue.push({
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
function yk(e, t) {
  const n = e, r = Qc(), a = fk(), s = vk && n.enableEarlyProxy;
  if (a && (r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !s))
    a.emit(pk, e, t);
  else {
    const o = s ? new _k(n, a) : null;
    (r.__VUE_DEVTOOLS_PLUGINS__ = r.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: o
    }), o && t(o.proxiedTarget);
  }
}
/*!
  * vue-i18n v9.5.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */
const bk = "9.5.0";
function wk() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (nn().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (nn().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (nn().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (nn().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (nn().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const ed = ct.__EXTEND_POINT__, hn = xo(ed), ze = {
  FALLBACK_TO_ROOT: ed,
  NOT_SUPPORTED_PRESERVE: hn(),
  NOT_SUPPORTED_FORMATTER: hn(),
  NOT_SUPPORTED_PRESERVE_DIRECTIVE: hn(),
  NOT_SUPPORTED_GET_CHOICE_INDEX: hn(),
  COMPONENT_NAME_LEGACY_COMPATIBLE: hn(),
  NOT_FOUND_PARENT_SCOPE: hn(),
  IGNORE_OBJ_FLATTEN: hn(),
  NOTICE_DROP_ALLOW_COMPOSITION: hn()
  // 17
}, Ek = {
  [ze.FALLBACK_TO_ROOT]: "Fall back to {type} '{key}' with root locale.",
  [ze.NOT_SUPPORTED_PRESERVE]: "Not supported 'preserve'.",
  [ze.NOT_SUPPORTED_FORMATTER]: "Not supported 'formatter'.",
  [ze.NOT_SUPPORTED_PRESERVE_DIRECTIVE]: "Not supported 'preserveDirectiveContent'.",
  [ze.NOT_SUPPORTED_GET_CHOICE_INDEX]: "Not supported 'getChoiceIndex'.",
  [ze.COMPONENT_NAME_LEGACY_COMPATIBLE]: "Component name legacy compatible: '{name}' -> 'i18n'",
  [ze.NOT_FOUND_PARENT_SCOPE]: "Not found parent scope. use the global scope.",
  [ze.IGNORE_OBJ_FLATTEN]: "Ignore object flatten: '{key}' key has an string value",
  [ze.NOTICE_DROP_ALLOW_COMPOSITION]: "'allowComposition' option will be dropped in the next major version. For more information, please see 👉 https://tinyurl.com/2p97mcze"
};
function yt(e, ...t) {
  return Lo(Ek[e], ...t);
}
const td = Tt.__EXTEND_POINT__, vt = xo(td), $e = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: td,
  // legacy module errors
  INVALID_ARGUMENT: vt(),
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: vt(),
  NOT_INSTALLED: vt(),
  NOT_AVAILABLE_IN_LEGACY_MODE: vt(),
  // directive module errors
  REQUIRED_VALUE: vt(),
  INVALID_VALUE: vt(),
  // vue-devtools errors
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: vt(),
  NOT_INSTALLED_WITH_PROVIDE: vt(),
  // unexpected error
  UNEXPECTED_ERROR: vt(),
  // not compatible legacy vue-i18n constructor
  NOT_COMPATIBLE_LEGACY_VUE_I18N: vt(),
  // bridge support vue 2.x only
  BRIDGE_SUPPORT_VUE_2_ONLY: vt(),
  // need to define `i18n` option in `allowComposition: true` and `useScope: 'local' at `useI18n``
  MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: vt(),
  // Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: vt(),
  // for enhancement
  __EXTEND_POINT__: vt()
  // 37
};
function Je(e, ...t) {
  return wr(e, null, process.env.NODE_ENV !== "production" ? { messages: Dk, args: t } : void 0);
}
const Dk = {
  [$e.UNEXPECTED_RETURN_TYPE]: "Unexpected return type in composer",
  [$e.INVALID_ARGUMENT]: "Invalid argument",
  [$e.MUST_BE_CALL_SETUP_TOP]: "Must be called at the top of a `setup` function",
  [$e.NOT_INSTALLED]: "Need to install with `app.use` function",
  [$e.UNEXPECTED_ERROR]: "Unexpected error",
  [$e.NOT_AVAILABLE_IN_LEGACY_MODE]: "Not available in legacy mode",
  [$e.REQUIRED_VALUE]: "Required in value: {0}",
  [$e.INVALID_VALUE]: "Invalid value",
  [$e.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: "Cannot setup vue-devtools plugin",
  [$e.NOT_INSTALLED_WITH_PROVIDE]: "Need to install with `provide` function",
  [$e.NOT_COMPATIBLE_LEGACY_VUE_I18N]: "Not compatible legacy VueI18n.",
  [$e.BRIDGE_SUPPORT_VUE_2_ONLY]: "vue-i18n-bridge support Vue 2.x only",
  [$e.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION]: "Must define ‘i18n’ option or custom block in Composition API with using local scope in Legacy API mode",
  [$e.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]: "Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"
}, Ys = /* @__PURE__ */ Jt("__translateVNode"), Vs = /* @__PURE__ */ Jt("__datetimeParts"), Us = /* @__PURE__ */ Jt("__numberParts"), Yn = /* @__PURE__ */ Jt("__enableEmitter"), Wr = /* @__PURE__ */ Jt("__disableEmitter"), nd = Jt("__setPluralRules"), rd = /* @__PURE__ */ Jt("__injectWithOption"), js = /* @__PURE__ */ Jt("__dispose");
function Bs(e) {
  if (!Ae(e))
    return e;
  for (const t in e)
    if (Mo(e, t))
      if (!t.includes("."))
        Ae(e[t]) && Bs(e[t]);
      else {
        const n = t.split("."), r = n.length - 1;
        let a = e, s = !1;
        for (let o = 0; o < r; o++) {
          if (n[o] in a || (a[n[o]] = {}), !Ae(a[n[o]])) {
            process.env.NODE_ENV !== "production" && rt(yt(ze.IGNORE_OBJ_FLATTEN, {
              key: n[o]
            })), s = !0;
            break;
          }
          a = a[n[o]];
        }
        s || (a[n[r]] = e[t], delete e[t]), Ae(a[n[r]]) && Bs(a[n[r]]);
      }
  return e;
}
function ts(e, t) {
  const { messages: n, __i18n: r, messageResolver: a, flatJson: s } = t, o = me(n) ? n : Re(r) ? {} : { [e]: {} };
  if (Re(r) && r.forEach((i) => {
    if ("locale" in i && "resource" in i) {
      const { locale: l, resource: c } = i;
      l ? (o[l] = o[l] || {}, Rr(c, o[l])) : Rr(c, o);
    } else
      J(i) && Rr(JSON.parse(i), o);
  }), a == null && s)
    for (const i in o)
      Mo(o, i) && Bs(o[i]);
  return o;
}
const ua = (e) => !Ae(e) || Re(e);
function Rr(e, t) {
  if (ua(e) || ua(t))
    throw Je($e.INVALID_VALUE);
  for (const n in e)
    Mo(e, n) && (ua(e[n]) || ua(t[n]) ? t[n] = e[n] : Rr(e[n], t[n]));
}
function ad(e) {
  return e.type;
}
function sd(e, t, n) {
  let r = Ae(t.messages) ? t.messages : {};
  "__i18nGlobal" in n && (r = ts(e.locale.value, {
    messages: r,
    __i18n: n.__i18nGlobal
  }));
  const a = Object.keys(r);
  a.length && a.forEach((s) => {
    e.mergeLocaleMessage(s, r[s]);
  });
  {
    if (Ae(t.datetimeFormats)) {
      const s = Object.keys(t.datetimeFormats);
      s.length && s.forEach((o) => {
        e.mergeDateTimeFormat(o, t.datetimeFormats[o]);
      });
    }
    if (Ae(t.numberFormats)) {
      const s = Object.keys(t.numberFormats);
      s.length && s.forEach((o) => {
        e.mergeNumberFormat(o, t.numberFormats[o]);
      });
    }
  }
}
function xl(e) {
  return _e(Vd, null, e, 0);
}
const Rl = "__INTLIFY_META__";
let Fl = 0;
function Yl(e) {
  return (t, n, r, a) => e(n, r, Yr() || void 0, a);
}
const Ok = () => {
  const e = Yr();
  let t = null;
  return e && (t = ad(e)[Rl]) ? { [Rl]: t } : null;
};
function Uo(e = {}, t) {
  const { __root: n, __injectWithOption: r } = e, a = n === void 0;
  let s = we(e.inheritLocale) ? e.inheritLocale : !0;
  const o = ne(
    // prettier-ignore
    n && s ? n.locale.value : J(e.locale) ? e.locale : dr
  ), i = ne(
    // prettier-ignore
    n && s ? n.fallbackLocale.value : J(e.fallbackLocale) || Re(e.fallbackLocale) || me(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o.value
  ), l = ne(ts(o.value, e)), c = ne(me(e.datetimeFormats) ? e.datetimeFormats : { [o.value]: {} }), u = ne(me(e.numberFormats) ? e.numberFormats : { [o.value]: {} });
  let d = n ? n.missingWarn : we(e.missingWarn) || On(e.missingWarn) ? e.missingWarn : !0, v = n ? n.fallbackWarn : we(e.fallbackWarn) || On(e.fallbackWarn) ? e.fallbackWarn : !0, p = n ? n.fallbackRoot : we(e.fallbackRoot) ? e.fallbackRoot : !0, h = !!e.fallbackFormat, m = Ve(e.missing) ? e.missing : null, y = Ve(e.missing) ? Yl(e.missing) : null, f = Ve(e.postTranslation) ? e.postTranslation : null, b = n ? n.warnHtmlMessage : we(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, T = !!e.escapeParameter;
  const w = n ? n.modifiers : me(e.modifiers) ? e.modifiers : {};
  let P = e.pluralRules || n && n.pluralRules, N;
  N = (() => {
    a && Tl(null);
    const F = {
      version: bk,
      locale: o.value,
      fallbackLocale: i.value,
      messages: l.value,
      modifiers: w,
      pluralRules: P,
      missing: y === null ? void 0 : y,
      missingWarn: d,
      fallbackWarn: v,
      fallbackFormat: h,
      unresolving: !0,
      postTranslation: f === null ? void 0 : f,
      warnHtmlMessage: b,
      escapeParameter: T,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    F.datetimeFormats = c.value, F.numberFormats = u.value, F.__datetimeFormatters = me(N) ? N.__datetimeFormatters : void 0, F.__numberFormatters = me(N) ? N.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (F.__v_emitter = me(N) ? N.__v_emitter : void 0);
    const W = tk(F);
    return a && Tl(W), W;
  })(), Ar(N, o.value, i.value);
  function S() {
    return [
      o.value,
      i.value,
      l.value,
      c.value,
      u.value
    ];
  }
  const L = A({
    get: () => o.value,
    set: (F) => {
      o.value = F, N.locale = o.value;
    }
  }), R = A({
    get: () => i.value,
    set: (F) => {
      i.value = F, N.fallbackLocale = i.value, Ar(N, o.value, F);
    }
  }), B = A(() => l.value), Y = /* @__PURE__ */ A(() => c.value), q = /* @__PURE__ */ A(() => u.value);
  function ce() {
    return Ve(f) ? f : null;
  }
  function ee(F) {
    f = F, N.postTranslation = F;
  }
  function le() {
    return m;
  }
  function ge(F) {
    F !== null && (y = Yl(F)), m = F, N.missing = y;
  }
  function Ee(F, W) {
    return F !== "translate" || !W.resolvedMessage;
  }
  const z = (F, W, He, We, Ut, vn) => {
    S();
    let Pt;
    try {
      (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && $l(Ok()), a || (N.fallbackContext = n ? ek() : void 0), Pt = F(N);
    } finally {
      (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && $l(null), a || (N.fallbackContext = void 0);
    }
    if (et(Pt) && Pt === Qa) {
      const [Lt, kn] = W();
      if (process.env.NODE_ENV !== "production" && n && J(Lt) && Ee(He, kn) && (p && (es(v, Lt) || Bc(d, Lt)) && rt(yt(ze.FALLBACK_TO_ROOT, {
        key: Lt,
        type: He
      })), process.env.NODE_ENV !== "production")) {
        const { __v_emitter: Hn } = N;
        Hn && p && Hn.emit("fallback", {
          type: He,
          key: Lt,
          to: "global",
          groupId: `${He}:${Lt}`
        });
      }
      return n && p ? We(n) : Ut(Lt);
    } else {
      if (vn(Pt))
        return Pt;
      throw Je($e.UNEXPECTED_RETURN_TYPE);
    }
  };
  function $(...F) {
    return z((W) => Reflect.apply(Al, null, [W, ...F]), () => Ms(...F), "translate", (W) => Reflect.apply(W.t, W, [...F]), (W) => W, (W) => J(W));
  }
  function j(...F) {
    const [W, He, We] = F;
    if (We && !Ae(We))
      throw Je($e.INVALID_ARGUMENT);
    return $(W, He, st({ resolvedMessage: !0 }, We || {}));
  }
  function te(...F) {
    return z((W) => Reflect.apply(Sl, null, [W, ...F]), () => xs(...F), "datetime format", (W) => Reflect.apply(W.d, W, [...F]), () => Va, (W) => J(W));
  }
  function U(...F) {
    return z((W) => Reflect.apply(Ll, null, [W, ...F]), () => Rs(...F), "number format", (W) => Reflect.apply(W.n, W, [...F]), () => Va, (W) => J(W));
  }
  function C(F) {
    return F.map((W) => J(W) || et(W) || we(W) ? xl(String(W)) : W);
  }
  const se = {
    normalize: C,
    interpolate: (F) => F,
    type: "vnode"
  };
  function ke(...F) {
    return z(
      (W) => {
        let He;
        const We = W;
        try {
          We.processor = se, He = Reflect.apply(Al, null, [We, ...F]);
        } finally {
          We.processor = null;
        }
        return He;
      },
      () => Ms(...F),
      "translate",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (W) => W[Ys](...F),
      (W) => [xl(W)],
      (W) => Re(W)
    );
  }
  function De(...F) {
    return z(
      (W) => Reflect.apply(Ll, null, [W, ...F]),
      () => Rs(...F),
      "number format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (W) => W[Us](...F),
      () => [],
      (W) => J(W) || Re(W)
    );
  }
  function be(...F) {
    return z(
      (W) => Reflect.apply(Sl, null, [W, ...F]),
      () => xs(...F),
      "datetime format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (W) => W[Vs](...F),
      () => [],
      (W) => J(W) || Re(W)
    );
  }
  function Be(F) {
    P = F, N.pluralRules = P;
  }
  function je(F, W) {
    if (!F)
      return !1;
    const He = J(W) ? W : o.value, We = _(He);
    return N.messageResolver(We, F) !== null;
  }
  function nt(F) {
    let W = null;
    const He = Rc(N, i.value, o.value);
    for (let We = 0; We < He.length; We++) {
      const Ut = l.value[He[We]] || {}, vn = N.messageResolver(Ut, F);
      if (vn != null) {
        W = vn;
        break;
      }
    }
    return W;
  }
  function E(F) {
    const W = nt(F);
    return W ?? (n ? n.tm(F) || {} : {});
  }
  function _(F) {
    return l.value[F] || {};
  }
  function M(F, W) {
    l.value[F] = W, N.messages = l.value;
  }
  function Q(F, W) {
    l.value[F] = l.value[F] || {}, Rr(W, l.value[F]), N.messages = l.value;
  }
  function oe(F) {
    return c.value[F] || {};
  }
  function ye(F, W) {
    c.value[F] = W, N.datetimeFormats = c.value, Pl(N, F, W);
  }
  function ot(F, W) {
    c.value[F] = st(c.value[F] || {}, W), N.datetimeFormats = c.value, Pl(N, F, W);
  }
  function qe(F) {
    return u.value[F] || {};
  }
  function Et(F, W) {
    u.value[F] = W, N.numberFormats = u.value, Ml(N, F, W);
  }
  function Vt(F, W) {
    u.value[F] = st(u.value[F] || {}, W), N.numberFormats = u.value, Ml(N, F, W);
  }
  Fl++, n && qt && (Ce(n.locale, (F) => {
    s && (o.value = F, N.locale = F, Ar(N, o.value, i.value));
  }), Ce(n.fallbackLocale, (F) => {
    s && (i.value = F, N.fallbackLocale = F, Ar(N, o.value, i.value));
  }));
  const Pe = {
    id: Fl,
    locale: L,
    fallbackLocale: R,
    get inheritLocale() {
      return s;
    },
    set inheritLocale(F) {
      s = F, F && n && (o.value = n.locale.value, i.value = n.fallbackLocale.value, Ar(N, o.value, i.value));
    },
    get availableLocales() {
      return Object.keys(l.value).sort();
    },
    messages: B,
    get modifiers() {
      return w;
    },
    get pluralRules() {
      return P || {};
    },
    get isGlobal() {
      return a;
    },
    get missingWarn() {
      return d;
    },
    set missingWarn(F) {
      d = F, N.missingWarn = d;
    },
    get fallbackWarn() {
      return v;
    },
    set fallbackWarn(F) {
      v = F, N.fallbackWarn = v;
    },
    get fallbackRoot() {
      return p;
    },
    set fallbackRoot(F) {
      p = F;
    },
    get fallbackFormat() {
      return h;
    },
    set fallbackFormat(F) {
      h = F, N.fallbackFormat = h;
    },
    get warnHtmlMessage() {
      return b;
    },
    set warnHtmlMessage(F) {
      b = F, N.warnHtmlMessage = F;
    },
    get escapeParameter() {
      return T;
    },
    set escapeParameter(F) {
      T = F, N.escapeParameter = F;
    },
    t: $,
    getLocaleMessage: _,
    setLocaleMessage: M,
    mergeLocaleMessage: Q,
    getPostTranslationHandler: ce,
    setPostTranslationHandler: ee,
    getMissingHandler: le,
    setMissingHandler: ge,
    [nd]: Be
  };
  return Pe.datetimeFormats = Y, Pe.numberFormats = q, Pe.rt = j, Pe.te = je, Pe.tm = E, Pe.d = te, Pe.n = U, Pe.getDateTimeFormat = oe, Pe.setDateTimeFormat = ye, Pe.mergeDateTimeFormat = ot, Pe.getNumberFormat = qe, Pe.setNumberFormat = Et, Pe.mergeNumberFormat = Vt, Pe[rd] = r, Pe[Ys] = ke, Pe[Vs] = be, Pe[Us] = De, process.env.NODE_ENV !== "production" && (Pe[Yn] = (F) => {
    N.__v_emitter = F;
  }, Pe[Wr] = () => {
    N.__v_emitter = void 0;
  }), Pe;
}
function $k(e) {
  const t = J(e.locale) ? e.locale : dr, n = J(e.fallbackLocale) || Re(e.fallbackLocale) || me(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t, r = Ve(e.missing) ? e.missing : void 0, a = we(e.silentTranslationWarn) || On(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0, s = we(e.silentFallbackWarn) || On(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0, o = we(e.fallbackRoot) ? e.fallbackRoot : !0, i = !!e.formatFallbackMessages, l = me(e.modifiers) ? e.modifiers : {}, c = e.pluralizationRules, u = Ve(e.postTranslation) ? e.postTranslation : void 0, d = J(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0, v = !!e.escapeParameterHtml, p = we(e.sync) ? e.sync : !0;
  process.env.NODE_ENV !== "production" && e.formatter && rt(yt(ze.NOT_SUPPORTED_FORMATTER)), process.env.NODE_ENV !== "production" && e.preserveDirectiveContent && rt(yt(ze.NOT_SUPPORTED_PRESERVE_DIRECTIVE));
  let h = e.messages;
  if (me(e.sharedMessages)) {
    const P = e.sharedMessages;
    h = Object.keys(P).reduce((x, S) => {
      const L = x[S] || (x[S] = {});
      return st(L, P[S]), x;
    }, h || {});
  }
  const { __i18n: m, __root: y, __injectWithOption: f } = e, b = e.datetimeFormats, T = e.numberFormats, w = e.flatJson;
  return {
    locale: t,
    fallbackLocale: n,
    messages: h,
    flatJson: w,
    datetimeFormats: b,
    numberFormats: T,
    missing: r,
    missingWarn: a,
    fallbackWarn: s,
    fallbackRoot: o,
    fallbackFormat: i,
    modifiers: l,
    pluralRules: c,
    postTranslation: u,
    warnHtmlMessage: d,
    escapeParameter: v,
    messageResolver: e.messageResolver,
    inheritLocale: p,
    __i18n: m,
    __root: y,
    __injectWithOption: f
  };
}
function Hs(e = {}, t) {
  {
    const n = Uo($k(e)), { __extender: r } = e, a = {
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
        return process.env.NODE_ENV !== "production" && rt(yt(ze.NOT_SUPPORTED_FORMATTER)), {
          interpolate() {
            return [];
          }
        };
      },
      set formatter(s) {
        process.env.NODE_ENV !== "production" && rt(yt(ze.NOT_SUPPORTED_FORMATTER));
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
        return we(n.missingWarn) ? !n.missingWarn : n.missingWarn;
      },
      set silentTranslationWarn(s) {
        n.missingWarn = we(s) ? !s : s;
      },
      // silentFallbackWarn
      get silentFallbackWarn() {
        return we(n.fallbackWarn) ? !n.fallbackWarn : n.fallbackWarn;
      },
      set silentFallbackWarn(s) {
        n.fallbackWarn = we(s) ? !s : s;
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
        return process.env.NODE_ENV !== "production" && rt(yt(ze.NOT_SUPPORTED_PRESERVE_DIRECTIVE)), !0;
      },
      set preserveDirectiveContent(s) {
        process.env.NODE_ENV !== "production" && rt(yt(ze.NOT_SUPPORTED_PRESERVE_DIRECTIVE));
      },
      // pluralizationRules
      get pluralizationRules() {
        return n.pluralRules || {};
      },
      // for internal
      __composer: n,
      // t
      t(...s) {
        const [o, i, l] = s, c = {};
        let u = null, d = null;
        if (!J(o))
          throw Je($e.INVALID_ARGUMENT);
        const v = o;
        return J(i) ? c.locale = i : Re(i) ? u = i : me(i) && (d = i), Re(l) ? u = l : me(l) && (d = l), Reflect.apply(n.t, n, [
          v,
          u || d || {},
          c
        ]);
      },
      rt(...s) {
        return Reflect.apply(n.rt, n, [...s]);
      },
      // tc
      tc(...s) {
        const [o, i, l] = s, c = { plural: 1 };
        let u = null, d = null;
        if (!J(o))
          throw Je($e.INVALID_ARGUMENT);
        const v = o;
        return J(i) ? c.locale = i : et(i) ? c.plural = i : Re(i) ? u = i : me(i) && (d = i), J(l) ? c.locale = l : Re(l) ? u = l : me(l) && (d = l), Reflect.apply(n.t, n, [
          v,
          u || d || {},
          c
        ]);
      },
      // te
      te(s, o) {
        return n.te(s, o);
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
      setLocaleMessage(s, o) {
        n.setLocaleMessage(s, o);
      },
      // mergeLocaleMessage
      mergeLocaleMessage(s, o) {
        n.mergeLocaleMessage(s, o);
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
      setDateTimeFormat(s, o) {
        n.setDateTimeFormat(s, o);
      },
      // mergeDateTimeFormat
      mergeDateTimeFormat(s, o) {
        n.mergeDateTimeFormat(s, o);
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
      setNumberFormat(s, o) {
        n.setNumberFormat(s, o);
      },
      // mergeNumberFormat
      mergeNumberFormat(s, o) {
        n.mergeNumberFormat(s, o);
      },
      // getChoiceIndex
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      getChoiceIndex(s, o) {
        return process.env.NODE_ENV !== "production" && rt(yt(ze.NOT_SUPPORTED_GET_CHOICE_INDEX)), -1;
      }
    };
    return a.__extender = r, process.env.NODE_ENV !== "production" && (a.__enableEmitter = (s) => {
      const o = n;
      o[Yn] && o[Yn](s);
    }, a.__disableEmitter = () => {
      const s = n;
      s[Wr] && s[Wr]();
    }), a;
  }
}
const jo = {
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
function Tk({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, a) => [
    ...r,
    // prettier-ignore
    ...a.type === re ? a.children : [a]
  ], []) : t.reduce((n, r) => {
    const a = e[r];
    return a && (n[r] = a()), n;
  }, {});
}
function od(e) {
  return re;
}
const kk = /* @__PURE__ */ Se({
  /* eslint-disable */
  name: "i18n-t",
  props: st({
    keypath: {
      type: String,
      required: !0
    },
    plural: {
      type: [Number, String],
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      validator: (e) => et(e) || !isNaN(e)
    }
  }, jo),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const { slots: n, attrs: r } = t, a = e.i18n || Ho({
      useScope: e.scope,
      __useComponent: !0
    });
    return () => {
      const s = Object.keys(n).filter((d) => d !== "_"), o = {};
      e.locale && (o.locale = e.locale), e.plural !== void 0 && (o.plural = J(e.plural) ? +e.plural : e.plural);
      const i = Tk(t, s), l = a[Ys](e.keypath, i, o), c = st({}, r), u = J(e.tag) || Ae(e.tag) ? e.tag : od();
      return qn(u, c, l);
    };
  }
}), hs = kk;
function Nk(e) {
  return Re(e) && !J(e[0]);
}
function id(e, t, n, r) {
  const { slots: a, attrs: s } = t;
  return () => {
    const o = { part: !0 };
    let i = {};
    e.locale && (o.locale = e.locale), J(e.format) ? o.key = e.format : Ae(e.format) && (J(e.format.key) && (o.key = e.format.key), i = Object.keys(e.format).reduce((v, p) => n.includes(p) ? st({}, v, { [p]: e.format[p] }) : v, {}));
    const l = r(e.value, o, i);
    let c = [o.key];
    Re(l) ? c = l.map((v, p) => {
      const h = a[v.type], m = h ? h({ [v.type]: v.value, index: p, parts: l }) : [v.value];
      return Nk(m) && (m[0].key = `${v.type}-${p}`), m;
    }) : J(l) && (c = [l]);
    const u = st({}, s), d = J(e.tag) || Ae(e.tag) ? e.tag : od();
    return qn(d, u, c);
  };
}
const Ik = /* @__PURE__ */ Se({
  /* eslint-disable */
  name: "i18n-n",
  props: st({
    value: {
      type: Number,
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, jo),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const n = e.i18n || Ho({
      useScope: "parent",
      __useComponent: !0
    });
    return id(e, t, Jc, (...r) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[Us](...r)
    ));
  }
}), Vl = Ik, Ak = /* @__PURE__ */ Se({
  /* eslint-disable */
  name: "i18n-d",
  props: st({
    value: {
      type: [Number, Date],
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, jo),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const n = e.i18n || Ho({
      useScope: "parent",
      __useComponent: !0
    });
    return id(e, t, Xc, (...r) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[Vs](...r)
    ));
  }
}), Ul = Ak;
function Ck(e, t) {
  const n = e;
  if (e.mode === "composition")
    return n.__getInstance(t) || e.global;
  {
    const r = n.__getInstance(t);
    return r != null ? r.__composer : e.global.__composer;
  }
}
function Sk(e) {
  const t = (o) => {
    const { instance: i, modifiers: l, value: c } = o;
    if (!i || !i.$)
      throw Je($e.UNEXPECTED_ERROR);
    const u = Ck(e, i.$);
    process.env.NODE_ENV !== "production" && l.preserve && rt(yt(ze.NOT_SUPPORTED_PRESERVE));
    const d = jl(c);
    return [
      Reflect.apply(u.t, u, [...Bl(d)]),
      u
    ];
  };
  return {
    created: (o, i) => {
      const [l, c] = t(i);
      qt && e.global === c && (o.__i18nWatcher = Ce(c.locale, () => {
        i.instance && i.instance.$forceUpdate();
      })), o.__composer = c, o.textContent = l;
    },
    unmounted: (o) => {
      qt && o.__i18nWatcher && (o.__i18nWatcher(), o.__i18nWatcher = void 0, delete o.__i18nWatcher), o.__composer && (o.__composer = void 0, delete o.__composer);
    },
    beforeUpdate: (o, { value: i }) => {
      if (o.__composer) {
        const l = o.__composer, c = jl(i);
        o.textContent = Reflect.apply(l.t, l, [
          ...Bl(c)
        ]);
      }
    },
    getSSRProps: (o) => {
      const [i] = t(o);
      return { textContent: i };
    }
  };
}
function jl(e) {
  if (J(e))
    return { path: e };
  if (me(e)) {
    if (!("path" in e))
      throw Je($e.REQUIRED_VALUE, "path");
    return e;
  } else
    throw Je($e.INVALID_VALUE);
}
function Bl(e) {
  const { path: t, locale: n, args: r, choice: a, plural: s } = e, o = {}, i = r || {};
  return J(n) && (o.locale = n), et(a) && (o.plural = a), et(s) && (o.plural = s), [t, i, o];
}
function Pk(e, t, ...n) {
  const r = me(n[0]) ? n[0] : {}, a = !!r.useI18nComponentName, s = we(r.globalInstall) ? r.globalInstall : !0;
  process.env.NODE_ENV !== "production" && s && a && rt(yt(ze.COMPONENT_NAME_LEGACY_COMPATIBLE, {
    name: hs.name
  })), s && ([a ? "i18n" : hs.name, "I18nT"].forEach((o) => e.component(o, hs)), [Vl.name, "I18nN"].forEach((o) => e.component(o, Vl)), [Ul.name, "I18nD"].forEach((o) => e.component(o, Ul))), e.directive("t", Sk(t));
}
const gs = {
  "vue-devtools-plugin-vue-i18n": "Vue I18n devtools",
  "vue-i18n-resource-inspector": "I18n Resources",
  "vue-i18n-timeline": "Vue I18n"
}, Lk = {
  "vue-i18n-resource-inspector": "Search for scopes ..."
}, Mk = {
  "vue-i18n-timeline": 16764185
}, ld = "vue-i18n: composer properties";
let Ws;
async function xk(e, t) {
  return new Promise((n, r) => {
    try {
      yk({
        id: "vue-devtools-plugin-vue-i18n",
        label: gs[
          "vue-devtools-plugin-vue-i18n"
          /* VueDevToolsIDs.PLUGIN */
        ],
        packageName: "vue-i18n",
        homepage: "https://vue-i18n.intlify.dev",
        logo: "https://vue-i18n.intlify.dev/vue-i18n-devtools-logo.png",
        componentStateTypes: [ld],
        app: e
        // eslint-disable-line @typescript-eslint/no-explicit-any
      }, (a) => {
        Ws = a, a.on.visitComponentTree(({ componentInstance: o, treeNode: i }) => {
          Rk(o, i, t);
        }), a.on.inspectComponent(({ componentInstance: o, instanceData: i }) => {
          o.vnode.el && o.vnode.el.__VUE_I18N__ && i && (t.mode === "legacy" ? o.vnode.el.__VUE_I18N__ !== t.global.__composer && Hl(i, o.vnode.el.__VUE_I18N__) : Hl(i, o.vnode.el.__VUE_I18N__));
        }), a.addInspector({
          id: "vue-i18n-resource-inspector",
          label: gs[
            "vue-i18n-resource-inspector"
            /* VueDevToolsIDs.CUSTOM_INSPECTOR */
          ],
          icon: "language",
          treeFilterPlaceholder: Lk[
            "vue-i18n-resource-inspector"
            /* VueDevToolsIDs.CUSTOM_INSPECTOR */
          ]
        }), a.on.getInspectorTree((o) => {
          o.app === e && o.inspectorId === "vue-i18n-resource-inspector" && jk(o, t);
        });
        const s = /* @__PURE__ */ new Map();
        a.on.getInspectorState(async (o) => {
          if (o.app === e && o.inspectorId === "vue-i18n-resource-inspector")
            if (a.unhighlightElement(), Hk(o, t), o.nodeId === "global") {
              if (!s.has(o.app)) {
                const [i] = await a.getComponentInstances(o.app);
                s.set(o.app, i);
              }
              a.highlightElement(s.get(o.app));
            } else {
              const i = Bk(o.nodeId, t);
              i && a.highlightElement(i);
            }
        }), a.on.editInspectorState((o) => {
          o.app === e && o.inspectorId === "vue-i18n-resource-inspector" && Gk(o, t);
        }), a.addTimelineLayer({
          id: "vue-i18n-timeline",
          label: gs[
            "vue-i18n-timeline"
            /* VueDevToolsIDs.TIMELINE */
          ],
          color: Mk[
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
function ud(e) {
  return e.type.name || e.type.displayName || e.type.__file || "Anonymous";
}
function Rk(e, t, n) {
  const r = n.mode === "composition" ? n.global : n.global.__composer;
  if (e && e.vnode.el && e.vnode.el.__VUE_I18N__ && e.vnode.el.__VUE_I18N__ !== r) {
    const a = {
      label: `i18n (${ud(e)} Scope)`,
      textColor: 0,
      backgroundColor: 16764185
    };
    t.tags.push(a);
  }
}
function Hl(e, t) {
  const n = ld;
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
    value: Bo(t.messages.value)
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
function Bo(e) {
  const t = {};
  return Object.keys(e).forEach((n) => {
    const r = e[n];
    Ve(r) && "source" in r ? t[n] = Uk(r) : Fn(r) && r.loc && r.loc.source ? t[n] = r.loc.source : Ae(r) ? t[n] = Bo(r) : t[n] = r;
  }), t;
}
const Fk = {
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "&": "&amp;"
};
function Yk(e) {
  return e.replace(/[<>"&]/g, Vk);
}
function Vk(e) {
  return Fk[e] || e;
}
function Uk(e) {
  return {
    _custom: {
      type: "function",
      display: `<span>ƒ</span> ${e.source ? `("${Yk(e.source)}")` : "(?)"}`
    }
  };
}
function jk(e, t) {
  e.rootNodes.push({
    id: "global",
    label: "Global Scope"
  });
  const n = t.mode === "composition" ? t.global : t.global.__composer;
  for (const [r, a] of t.__instances) {
    const s = t.mode === "composition" ? a : a.__composer;
    n !== s && e.rootNodes.push({
      id: s.id.toString(),
      label: `${ud(r)} Scope`
    });
  }
}
function Bk(e, t) {
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
function cd(e, t) {
  if (e === "global")
    return t.mode === "composition" ? t.global : t.global.__composer;
  {
    const n = Array.from(t.__instances.values()).find((r) => r.id.toString() === e);
    return n ? t.mode === "composition" ? n : n.__composer : null;
  }
}
function Hk(e, t) {
  const n = cd(e.nodeId, t);
  return n && (e.state = Wk(n)), null;
}
function Wk(e) {
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
      value: Bo(e.messages.value)
    }
  ];
  t[a] = s;
  {
    const o = "Datetime formats info", i = [
      {
        type: o,
        key: "datetimeFormats",
        editable: !1,
        value: e.datetimeFormats.value
      }
    ];
    t[o] = i;
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
function Gr(e, t) {
  if (Ws) {
    let n;
    t && "groupId" in t && (n = t.groupId, delete t.groupId), Ws.addTimelineEvent({
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
function Gk(e, t) {
  const n = cd(e.nodeId, t);
  if (n) {
    const [r] = e.path;
    r === "locale" && J(e.state.value) ? n.locale.value = e.state.value : r === "fallbackLocale" && (J(e.state.value) || Re(e.state.value) || Ae(e.state.value)) ? n.fallbackLocale.value = e.state.value : r === "inheritLocale" && we(e.state.value) && (n.inheritLocale = e.state.value);
  }
}
function zk(e, t, n) {
  return {
    beforeCreate() {
      const r = Yr();
      if (!r)
        throw Je($e.UNEXPECTED_ERROR);
      const a = this.$options;
      if (a.i18n) {
        const s = a.i18n;
        if (a.__i18n && (s.__i18n = a.__i18n), s.__root = t, this === this.$root)
          this.$i18n = Wl(e, s);
        else {
          s.__injectWithOption = !0, s.__extender = n.__vueI18nExtend, this.$i18n = Hs(s);
          const o = this.$i18n;
          o.__extender && (o.__disposer = o.__extender(this.$i18n));
        }
      } else if (a.__i18n)
        if (this === this.$root)
          this.$i18n = Wl(e, a);
        else {
          this.$i18n = Hs({
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
      a.__i18nGlobal && sd(t, a, a), this.$t = (...s) => this.$i18n.t(...s), this.$rt = (...s) => this.$i18n.rt(...s), this.$tc = (...s) => this.$i18n.tc(...s), this.$te = (s, o) => this.$i18n.te(s, o), this.$d = (...s) => this.$i18n.d(...s), this.$n = (...s) => this.$i18n.n(...s), this.$tm = (s) => this.$i18n.tm(s), n.__setInstance(r, this.$i18n);
    },
    mounted() {
      if (process.env.NODE_ENV !== "production" && this.$el && this.$i18n) {
        const r = this.$i18n;
        this.$el.__VUE_I18N__ = r.__composer;
        const a = this.__v_emitter = Ro();
        r.__enableEmitter && r.__enableEmitter(a), a.on("*", Gr);
      }
    },
    unmounted() {
      const r = Yr();
      if (!r)
        throw Je($e.UNEXPECTED_ERROR);
      const a = this.$i18n;
      process.env.NODE_ENV !== "production" && this.$el && this.$el.__VUE_I18N__ && (this.__v_emitter && (this.__v_emitter.off("*", Gr), delete this.__v_emitter), this.$i18n && (a.__disableEmitter && a.__disableEmitter(), delete this.$el.__VUE_I18N__)), delete this.$t, delete this.$rt, delete this.$tc, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, a.__disposer && (a.__disposer(), delete a.__disposer, delete a.__extender), n.__deleteInstance(r), delete this.$i18n;
    }
  };
}
function Wl(e, t) {
  e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[nd](t.pluralizationRules || e.pluralizationRules);
  const n = ts(e.locale, {
    messages: t.messages,
    __i18n: t.__i18n
  });
  return Object.keys(n).forEach((r) => e.mergeLocaleMessage(r, n[r])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach((r) => e.mergeDateTimeFormat(r, t.datetimeFormats[r])), t.numberFormats && Object.keys(t.numberFormats).forEach((r) => e.mergeNumberFormat(r, t.numberFormats[r])), e;
}
const Kk = /* @__PURE__ */ Jt("global-vue-i18n");
function qk(e = {}, t) {
  const n = __VUE_I18N_LEGACY_API__ && we(e.legacy) ? e.legacy : __VUE_I18N_LEGACY_API__, r = we(e.globalInjection) ? e.globalInjection : !0, a = __VUE_I18N_LEGACY_API__ && n ? !!e.allowComposition : !0, s = /* @__PURE__ */ new Map(), [o, i] = Zk(e, n), l = /* @__PURE__ */ Jt(process.env.NODE_ENV !== "production" ? "vue-i18n" : "");
  process.env.NODE_ENV !== "production" && n && a && rt(yt(ze.NOTICE_DROP_ALLOW_COMPOSITION));
  function c(v) {
    return s.get(v) || null;
  }
  function u(v, p) {
    s.set(v, p);
  }
  function d(v) {
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
      async install(p, ...h) {
        if (process.env.NODE_ENV !== "production" && (p.__VUE_I18N__ = v), p.__VUE_I18N_SYMBOL__ = l, p.provide(p.__VUE_I18N_SYMBOL__, v), me(h[0])) {
          const f = h[0];
          v.__composerExtend = f.__composerExtend, v.__vueI18nExtend = f.__vueI18nExtend;
        }
        let m = null;
        !n && r && (m = sN(p, v.global)), __VUE_I18N_FULL_INSTALL__ && Pk(p, v, ...h), __VUE_I18N_LEGACY_API__ && n && p.mixin(zk(i, i.__composer, v));
        const y = p.unmount;
        if (p.unmount = () => {
          m && m(), v.dispose(), y();
        }, process.env.NODE_ENV !== "production") {
          if (!await xk(p, v))
            throw Je($e.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN);
          const b = Ro();
          if (n) {
            const T = i;
            T.__enableEmitter && T.__enableEmitter(b);
          } else {
            const T = i;
            T[Yn] && T[Yn](b);
          }
          b.on("*", Gr);
        }
      },
      // global accessor
      get global() {
        return i;
      },
      dispose() {
        o.stop();
      },
      // @internal
      __instances: s,
      // @internal
      __getInstance: c,
      // @internal
      __setInstance: u,
      // @internal
      __deleteInstance: d
    };
    return v;
  }
}
function Ho(e = {}) {
  const t = Yr();
  if (t == null)
    throw Je($e.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw Je($e.NOT_INSTALLED);
  const n = Xk(t), r = Qk(n), a = ad(t), s = Jk(e, a);
  if (__VUE_I18N_LEGACY_API__ && n.mode === "legacy" && !e.__useComponent) {
    if (!n.allowComposition)
      throw Je($e.NOT_AVAILABLE_IN_LEGACY_MODE);
    return rN(t, s, r, e);
  }
  if (s === "global")
    return sd(r, e, a), r;
  if (s === "parent") {
    let l = eN(n, t, e.__useComponent);
    return l == null && (process.env.NODE_ENV !== "production" && rt(yt(ze.NOT_FOUND_PARENT_SCOPE)), l = r), l;
  }
  const o = n;
  let i = o.__getInstance(t);
  if (i == null) {
    const l = st({}, e);
    "__i18n" in a && (l.__i18n = a.__i18n), r && (l.__root = r), i = Uo(l), o.__composerExtend && (i[js] = o.__composerExtend(i)), nN(o, t, i), o.__setInstance(t, i);
  }
  return i;
}
function Zk(e, t, n) {
  const r = Rd();
  {
    const a = __VUE_I18N_LEGACY_API__ && t ? r.run(() => Hs(e)) : r.run(() => Uo(e));
    if (a == null)
      throw Je($e.UNEXPECTED_ERROR);
    return [r, a];
  }
}
function Xk(e) {
  {
    const t = Ye(e.isCE ? Kk : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t)
      throw Je(e.isCE ? $e.NOT_INSTALLED_WITH_PROVIDE : $e.UNEXPECTED_ERROR);
    return t;
  }
}
function Jk(e, t) {
  return Ja(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function Qk(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function eN(e, t, n = !1) {
  let r = null;
  const a = t.root;
  let s = tN(t, n);
  for (; s != null; ) {
    const o = e;
    if (e.mode === "composition")
      r = o.__getInstance(s);
    else if (__VUE_I18N_LEGACY_API__) {
      const i = o.__getInstance(s);
      i != null && (r = i.__composer, n && r && !r[rd] && (r = null));
    }
    if (r != null || a === s)
      break;
    s = s.parent;
  }
  return r;
}
function tN(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function nN(e, t, n) {
  let r = null;
  Vn(() => {
    if (process.env.NODE_ENV !== "production" && t.vnode.el) {
      t.vnode.el.__VUE_I18N__ = n, r = Ro();
      const a = n;
      a[Yn] && a[Yn](r), r.on("*", Gr);
    }
  }, t), Kr(() => {
    const a = n;
    process.env.NODE_ENV !== "production" && t.vnode.el && t.vnode.el.__VUE_I18N__ && (r && r.off("*", Gr), a[Wr] && a[Wr](), delete t.vnode.el.__VUE_I18N__), e.__deleteInstance(t);
    const s = a[js];
    s && (s(), delete a[js]);
  }, t);
}
function rN(e, t, n, r = {}) {
  const a = t === "local", s = Fd(null);
  if (a && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n))
    throw Je($e.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
  const o = we(r.inheritLocale) ? r.inheritLocale : !J(r.locale), i = ne(
    // prettier-ignore
    !a || o ? n.locale.value : J(r.locale) ? r.locale : dr
  ), l = ne(
    // prettier-ignore
    !a || o ? n.fallbackLocale.value : J(r.fallbackLocale) || Re(r.fallbackLocale) || me(r.fallbackLocale) || r.fallbackLocale === !1 ? r.fallbackLocale : i.value
  ), c = ne(ts(i.value, r)), u = ne(me(r.datetimeFormats) ? r.datetimeFormats : { [i.value]: {} }), d = ne(me(r.numberFormats) ? r.numberFormats : { [i.value]: {} }), v = a ? n.missingWarn : we(r.missingWarn) || On(r.missingWarn) ? r.missingWarn : !0, p = a ? n.fallbackWarn : we(r.fallbackWarn) || On(r.fallbackWarn) ? r.fallbackWarn : !0, h = a ? n.fallbackRoot : we(r.fallbackRoot) ? r.fallbackRoot : !0, m = !!r.fallbackFormat, y = Ve(r.missing) ? r.missing : null, f = Ve(r.postTranslation) ? r.postTranslation : null, b = a ? n.warnHtmlMessage : we(r.warnHtmlMessage) ? r.warnHtmlMessage : !0, T = !!r.escapeParameter, w = a ? n.modifiers : me(r.modifiers) ? r.modifiers : {}, P = r.pluralRules || a && n.pluralRules;
  function N() {
    return [
      i.value,
      l.value,
      c.value,
      u.value,
      d.value
    ];
  }
  const x = A({
    get: () => s.value ? s.value.locale.value : i.value,
    set: (_) => {
      s.value && (s.value.locale.value = _), i.value = _;
    }
  }), S = A({
    get: () => s.value ? s.value.fallbackLocale.value : l.value,
    set: (_) => {
      s.value && (s.value.fallbackLocale.value = _), l.value = _;
    }
  }), L = A(() => s.value ? s.value.messages.value : c.value), R = A(() => u.value), B = A(() => d.value);
  function Y() {
    return s.value ? s.value.getPostTranslationHandler() : f;
  }
  function q(_) {
    s.value && s.value.setPostTranslationHandler(_);
  }
  function ce() {
    return s.value ? s.value.getMissingHandler() : y;
  }
  function ee(_) {
    s.value && s.value.setMissingHandler(_);
  }
  function le(_) {
    return N(), _();
  }
  function ge(..._) {
    return s.value ? le(() => Reflect.apply(s.value.t, null, [..._])) : le(() => "");
  }
  function Ee(..._) {
    return s.value ? Reflect.apply(s.value.rt, null, [..._]) : "";
  }
  function z(..._) {
    return s.value ? le(() => Reflect.apply(s.value.d, null, [..._])) : le(() => "");
  }
  function $(..._) {
    return s.value ? le(() => Reflect.apply(s.value.n, null, [..._])) : le(() => "");
  }
  function j(_) {
    return s.value ? s.value.tm(_) : {};
  }
  function te(_, M) {
    return s.value ? s.value.te(_, M) : !1;
  }
  function U(_) {
    return s.value ? s.value.getLocaleMessage(_) : {};
  }
  function C(_, M) {
    s.value && (s.value.setLocaleMessage(_, M), c.value[_] = M);
  }
  function Z(_, M) {
    s.value && s.value.mergeLocaleMessage(_, M);
  }
  function se(_) {
    return s.value ? s.value.getDateTimeFormat(_) : {};
  }
  function ke(_, M) {
    s.value && (s.value.setDateTimeFormat(_, M), u.value[_] = M);
  }
  function De(_, M) {
    s.value && s.value.mergeDateTimeFormat(_, M);
  }
  function be(_) {
    return s.value ? s.value.getNumberFormat(_) : {};
  }
  function Be(_, M) {
    s.value && (s.value.setNumberFormat(_, M), d.value[_] = M);
  }
  function je(_, M) {
    s.value && s.value.mergeNumberFormat(_, M);
  }
  const nt = {
    get id() {
      return s.value ? s.value.id : -1;
    },
    locale: x,
    fallbackLocale: S,
    messages: L,
    datetimeFormats: R,
    numberFormats: B,
    get inheritLocale() {
      return s.value ? s.value.inheritLocale : o;
    },
    set inheritLocale(_) {
      s.value && (s.value.inheritLocale = _);
    },
    get availableLocales() {
      return s.value ? s.value.availableLocales : Object.keys(c.value);
    },
    get modifiers() {
      return s.value ? s.value.modifiers : w;
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
    set missingWarn(_) {
      s.value && (s.value.missingWarn = _);
    },
    get fallbackWarn() {
      return s.value ? s.value.fallbackWarn : p;
    },
    set fallbackWarn(_) {
      s.value && (s.value.missingWarn = _);
    },
    get fallbackRoot() {
      return s.value ? s.value.fallbackRoot : h;
    },
    set fallbackRoot(_) {
      s.value && (s.value.fallbackRoot = _);
    },
    get fallbackFormat() {
      return s.value ? s.value.fallbackFormat : m;
    },
    set fallbackFormat(_) {
      s.value && (s.value.fallbackFormat = _);
    },
    get warnHtmlMessage() {
      return s.value ? s.value.warnHtmlMessage : b;
    },
    set warnHtmlMessage(_) {
      s.value && (s.value.warnHtmlMessage = _);
    },
    get escapeParameter() {
      return s.value ? s.value.escapeParameter : T;
    },
    set escapeParameter(_) {
      s.value && (s.value.escapeParameter = _);
    },
    t: ge,
    getPostTranslationHandler: Y,
    setPostTranslationHandler: q,
    getMissingHandler: ce,
    setMissingHandler: ee,
    rt: Ee,
    d: z,
    n: $,
    tm: j,
    te,
    getLocaleMessage: U,
    setLocaleMessage: C,
    mergeLocaleMessage: Z,
    getDateTimeFormat: se,
    setDateTimeFormat: ke,
    mergeDateTimeFormat: De,
    getNumberFormat: be,
    setNumberFormat: Be,
    mergeNumberFormat: je
  };
  function E(_) {
    _.locale.value = i.value, _.fallbackLocale.value = l.value, Object.keys(c.value).forEach((M) => {
      _.mergeLocaleMessage(M, c.value[M]);
    }), Object.keys(u.value).forEach((M) => {
      _.mergeDateTimeFormat(M, u.value[M]);
    }), Object.keys(d.value).forEach((M) => {
      _.mergeNumberFormat(M, d.value[M]);
    }), _.escapeParameter = T, _.fallbackFormat = m, _.fallbackRoot = h, _.fallbackWarn = p, _.missingWarn = v, _.warnHtmlMessage = b;
  }
  return Yd(() => {
    if (e.proxy == null || e.proxy.$i18n == null)
      throw Je($e.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
    const _ = s.value = e.proxy.$i18n.__composer;
    t === "global" ? (i.value = _.locale.value, l.value = _.fallbackLocale.value, c.value = _.messages.value, u.value = _.datetimeFormats.value, d.value = _.numberFormats.value) : a && E(_);
  }), nt;
}
const aN = [
  "locale",
  "fallbackLocale",
  "availableLocales"
], Gl = ["t", "rt", "d", "n", "tm", "te"];
function sN(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  return aN.forEach((a) => {
    const s = Object.getOwnPropertyDescriptor(t, a);
    if (!s)
      throw Je($e.UNEXPECTED_ERROR);
    const o = Ie(s.value) ? {
      get() {
        return s.value.value;
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      set(i) {
        s.value.value = i;
      }
    } : {
      get() {
        return s.get && s.get();
      }
    };
    Object.defineProperty(n, a, o);
  }), e.config.globalProperties.$i18n = n, Gl.forEach((a) => {
    const s = Object.getOwnPropertyDescriptor(t, a);
    if (!s || !s.value)
      throw Je($e.UNEXPECTED_ERROR);
    Object.defineProperty(e.config.globalProperties, `$${a}`, s);
  }), () => {
    delete e.config.globalProperties.$i18n, Gl.forEach((a) => {
      delete e.config.globalProperties[`$${a}`];
    });
  };
}
wk();
__INTLIFY_JIT_COMPILATION__ ? Ol(ok) : Ol(sk);
X2(S2);
J2(Rc);
if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const e = nn();
  e.__INTLIFY__ = !0, U2(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
const oN = {
  Never: "永不",
  Hour: "每時",
  Day: "每日",
  Week: "每週",
  Month: "每月",
  Annual: "每年",
  sHour: "小時",
  sDay: "日",
  sWeek: "週",
  sMonth: "月",
  sAnnual: "年",
  mailAbnormalityOrError: "僅執行動作或錯誤時",
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
  FacebookAccount: "帳戶"
}, iN = {
  zh_TW: oN
}, Er = qk({
  locale: "zh_TW",
  legacy: !1,
  globalInjection: !0,
  messages: iN
}), lN = { class: "flex flex-col gap-3" }, uN = /* @__PURE__ */ O("div", { class: "flex items-center justify-center gap-3 my-2" }, [
  /* @__PURE__ */ O("p", { class: "p4-b" }, "日期時間"),
  /* @__PURE__ */ O("div", { class: "h-[1px] flex-1 bg-light-3" })
], -1), cN = { class: "flex flex-col gap-2" }, dN = { class: "flex gap-2 items-center" }, fN = /* @__PURE__ */ O("span", { class: "p4-b" }, "開始", -1), vN = ["onClick"], pN = ["value"], mN = /* @__PURE__ */ O("div", { class: "flex items-center justify-center gap-3 w-full my-2" }, [
  /* @__PURE__ */ O("p", { class: "p4-b" }, "重複頻率"),
  /* @__PURE__ */ O("div", { class: "h-[1px] flex-1 bg-light-3" })
], -1), hN = { class: "flex space-x-2 items-center" }, gN = { class: "flex items-center gap-2" }, _N = /* @__PURE__ */ O("span", { class: "p4-b" }, "重複", -1), yN = ["value"], bN = /* @__PURE__ */ O("option", { value: 0 }, "自訂", -1), wN = { class: "p4-b" }, EN = {
  key: 0,
  class: "flex items-center gap-2"
}, DN = { class: "flex items-center gap-2" }, ON = /* @__PURE__ */ O("span", { class: "p4-b" }, "頻率", -1), $N = /* @__PURE__ */ O("option", {
  value: "-1",
  disabled: ""
}, "請選擇", -1), TN = ["value"], kN = {
  key: 0,
  class: "flex items-center gap-2"
}, NN = /* @__PURE__ */ O("span", { class: "p4-b" }, "每", -1), IN = { class: "p4-b" }, zl = 1, AN = /* @__PURE__ */ Se({
  __name: "RepeatFrequency",
  props: {
    frequency: {},
    interval: {}
  },
  emits: ["update:frequency", "update:interval"],
  setup(e, { emit: t }) {
    const n = e, { t: r } = Er.global, a = Ye("eventData"), s = ne(!0);
    Ce(a, () => {
      s.value = !0;
    });
    const o = ne(n.interval ?? zl);
    Ce(o, (h) => {
      h || (h = zl), t("update:interval", h);
    });
    const i = ne(n.frequency);
    Ce(i, (h) => {
      t("update:frequency", h);
    });
    const l = A({
      get: () => a.value.weekdays ?? [],
      set: (h) => {
        a.value.weekdays = h;
      }
    }), c = A({
      get: () => a.value.weekOrdinal ?? [],
      set: (h) => {
        a.value.weekOrdinal = h;
      }
    }), u = A({
      get: () => a.value.monthDate ?? [],
      set: (h) => {
        a.value.monthDate = h;
      }
    }), d = A({
      get: () => a.value.yearMonths ?? [],
      set: (h) => {
        a.value.yearMonths = h;
      }
    }), v = A(() => {
      if (p.value == xe.Never)
        return "只執行一次";
      if (p.value == xe.Hour)
        return "每小時執行一次";
      if (p.value == xe.Day)
        return "每日執行一次";
      if (p.value == xe.Week)
        return "每週執行一次";
      if (p.value == xe.Month)
        return "每月執行一次";
      if (p.value == xe.Annual)
        return "每年執行一次";
      const h = {
        1: "小時",
        2: "日",
        3: "週",
        4: "月",
        5: "年"
      };
      return p.value == 0 ? `每${o.value ?? ""}${h[i.value] ?? ""}執行一次` : "";
    }), p = ne(-1);
    return n.interval == 1 && (p.value = n.frequency), Ce(
      p,
      (h) => {
        xe[h] && (t("update:frequency", h), t("update:interval", 1), i.value = p.value, a.value.weekdays = null, a.value.weekOrdinal = null, a.value.monthDate = null, a.value.yearMonths = null), a.value.customInterval = h === 0;
      },
      { immediate: !0 }
    ), (h, m) => (D(), k("div", lN, [
      uN,
      O("div", cN, [
        O("div", dN, [
          fN,
          _e(g(Po), {
            modelValue: g(a).start,
            "onUpdate:modelValue": m[0] || (m[0] = (y) => g(a).start = y),
            mode: "dateTime",
            "min-Date": /* @__PURE__ */ new Date(),
            is24hr: "",
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
          }, {
            default: tt(({ togglePopover: y, inputValue: f }) => [
              O("div", {
                class: "p3-b flex w-fit cursor-pointer relative items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 transition-all hover:bg-light-3 hover:bg-opacity-50",
                onClick: y
              }, [
                O("input", {
                  value: f,
                  required: "",
                  class: "opacity-0 absolute w-full h-full pointer-events-none"
                }, null, 8, pN),
                qr(" " + pe(f || "請選定執行日期"), 1)
              ], 8, vN)
            ]),
            _: 1
          }, 8, ["modelValue", "min-Date", "timezone"])
        ])
      ]),
      mN,
      O("div", hN, [
        O("label", gN, [
          _N,
          Ke(O("select", {
            class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
            "onUpdate:modelValue": m[1] || (m[1] = (y) => Ie(p) ? p.value = y : null)
          }, [
            (D(!0), k(re, null, Te(g(xe), (y, f) => (D(), k(re, { key: f }, [
              Number.isInteger(y) ? (D(), k("option", {
                key: 0,
                value: y
              }, pe(g(r)(f)), 9, yN)) : X("", !0)
            ], 64))), 128)),
            bN
          ], 512), [
            [at, g(p)]
          ])
        ]),
        O("span", wN, pe(g(v)), 1)
      ]),
      g(xe)[g(p)] == null ? (D(), k("div", EN, [
        O("label", DN, [
          ON,
          Ke(O("select", {
            class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
            "onUpdate:modelValue": m[2] || (m[2] = (y) => Ie(i) ? i.value = y : null)
          }, [
            $N,
            (D(!0), k(re, null, Te(g(xe), (y, f) => (D(), k(re, { key: f }, [
              y != g(xe).Never && Number.isInteger(y) ? (D(), k("option", {
                key: 0,
                value: y
              }, pe(g(r)(f)), 9, TN)) : X("", !0)
            ], 64))), 128))
          ], 512), [
            [at, g(i)]
          ])
        ]),
        g(i) != -1 ? (D(), k("label", kN, [
          NN,
          _e(wn, {
            class: "!w-10 text-center",
            modelValue: g(o),
            "onUpdate:modelValue": m[3] || (m[3] = (y) => Ie(o) ? o.value = y : null),
            type: "number"
          }, null, 8, ["modelValue"]),
          O("span", IN, pe(g(r)(`s${g(xe)[g(i)]}`)), 1)
        ])) : X("", !0)
      ])) : X("", !0),
      g(xe)[g(p)] == null ? (D(), Ue(Qd, {
        key: 1,
        type: g(i),
        weekdays: g(l),
        "onUpdate:weekdays": m[4] || (m[4] = (y) => Ie(l) ? l.value = y : null),
        weekOrdinal: g(c),
        "onUpdate:weekOrdinal": m[5] || (m[5] = (y) => Ie(c) ? c.value = y : null),
        monthDate: g(u),
        "onUpdate:monthDate": m[6] || (m[6] = (y) => Ie(u) ? u.value = y : null),
        yearMonths: g(d),
        "onUpdate:yearMonths": m[7] || (m[7] = (y) => Ie(d) ? d.value = y : null)
      }, null, 8, ["type", "weekdays", "weekOrdinal", "monthDate", "yearMonths"])) : X("", !0),
      g(i) !== -1 ? (D(), Ue(LT, {
        key: 2,
        modelValue: g(a).due,
        "onUpdate:modelValue": m[8] || (m[8] = (y) => g(a).due = y)
      }, null, 8, ["modelValue"])) : X("", !0)
    ]));
  }
}), CN = { class: "relative border rounded border-light-3 py-4 px-3" }, SN = { class: "p3-b absolute left-2 -top-3 text-dark-3 bg-light-5" }, Fr = /* @__PURE__ */ Se({
  __name: "OuterBlock",
  props: {
    title: {}
  },
  setup(e) {
    return (t, n) => (D(), k("div", CN, [
      O("div", SN, pe(t.title), 1),
      At(t.$slots, "default")
    ]));
  }
});
function dd(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: PN } = Object.prototype, { getPrototypeOf: Wo } = Object, ns = ((e) => (t) => {
  const n = PN.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Qt = (e) => (e = e.toLowerCase(), (t) => ns(t) === e), rs = (e) => (t) => typeof t === e, { isArray: Dr } = Array, zr = rs("undefined");
function LN(e) {
  return e !== null && !zr(e) && e.constructor !== null && !zr(e.constructor) && It(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const fd = Qt("ArrayBuffer");
function MN(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && fd(e.buffer), t;
}
const xN = rs("string"), It = rs("function"), vd = rs("number"), as = (e) => e !== null && typeof e == "object", RN = (e) => e === !0 || e === !1, ha = (e) => {
  if (ns(e) !== "object")
    return !1;
  const t = Wo(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, FN = Qt("Date"), YN = Qt("File"), VN = Qt("Blob"), UN = Qt("FileList"), jN = (e) => as(e) && It(e.pipe), BN = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || It(e.append) && ((t = ns(e)) === "formdata" || // detect form-data instance
  t === "object" && It(e.toString) && e.toString() === "[object FormData]"));
}, HN = Qt("URLSearchParams"), WN = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Qr(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, a;
  if (typeof e != "object" && (e = [e]), Dr(e))
    for (r = 0, a = e.length; r < a; r++)
      t.call(null, e[r], r, e);
  else {
    const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e), o = s.length;
    let i;
    for (r = 0; r < o; r++)
      i = s[r], t.call(null, e[i], i, e);
  }
}
function pd(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, a;
  for (; r-- > 0; )
    if (a = n[r], t === a.toLowerCase())
      return a;
  return null;
}
const md = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), hd = (e) => !zr(e) && e !== md;
function Gs() {
  const { caseless: e } = hd(this) && this || {}, t = {}, n = (r, a) => {
    const s = e && pd(t, a) || a;
    ha(t[s]) && ha(r) ? t[s] = Gs(t[s], r) : ha(r) ? t[s] = Gs({}, r) : Dr(r) ? t[s] = r.slice() : t[s] = r;
  };
  for (let r = 0, a = arguments.length; r < a; r++)
    arguments[r] && Qr(arguments[r], n);
  return t;
}
const GN = (e, t, n, { allOwnKeys: r } = {}) => (Qr(t, (a, s) => {
  n && It(a) ? e[s] = dd(a, n) : e[s] = a;
}, { allOwnKeys: r }), e), zN = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), KN = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, qN = (e, t, n, r) => {
  let a, s, o;
  const i = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (a = Object.getOwnPropertyNames(e), s = a.length; s-- > 0; )
      o = a[s], (!r || r(o, e, t)) && !i[o] && (t[o] = e[o], i[o] = !0);
    e = n !== !1 && Wo(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, ZN = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, XN = (e) => {
  if (!e)
    return null;
  if (Dr(e))
    return e;
  let t = e.length;
  if (!vd(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, JN = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Wo(Uint8Array)), QN = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let a;
  for (; (a = r.next()) && !a.done; ) {
    const s = a.value;
    t.call(e, s[0], s[1]);
  }
}, eI = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, tI = Qt("HTMLFormElement"), nI = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, a) {
    return r.toUpperCase() + a;
  }
), Kl = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), rI = Qt("RegExp"), gd = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  Qr(n, (a, s) => {
    let o;
    (o = t(a, s, e)) !== !1 && (r[s] = o || a);
  }), Object.defineProperties(e, r);
}, aI = (e) => {
  gd(e, (t, n) => {
    if (It(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (It(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, sI = (e, t) => {
  const n = {}, r = (a) => {
    a.forEach((s) => {
      n[s] = !0;
    });
  };
  return Dr(e) ? r(e) : r(String(e).split(t)), n;
}, oI = () => {
}, iI = (e, t) => (e = +e, Number.isFinite(e) ? e : t), _s = "abcdefghijklmnopqrstuvwxyz", ql = "0123456789", _d = {
  DIGIT: ql,
  ALPHA: _s,
  ALPHA_DIGIT: _s + _s.toUpperCase() + ql
}, lI = (e = 16, t = _d.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function uI(e) {
  return !!(e && It(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const cI = (e) => {
  const t = new Array(10), n = (r, a) => {
    if (as(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[a] = r;
        const s = Dr(r) ? [] : {};
        return Qr(r, (o, i) => {
          const l = n(o, a + 1);
          !zr(l) && (s[i] = l);
        }), t[a] = void 0, s;
      }
    }
    return r;
  };
  return n(e, 0);
}, dI = Qt("AsyncFunction"), fI = (e) => e && (as(e) || It(e)) && It(e.then) && It(e.catch), V = {
  isArray: Dr,
  isArrayBuffer: fd,
  isBuffer: LN,
  isFormData: BN,
  isArrayBufferView: MN,
  isString: xN,
  isNumber: vd,
  isBoolean: RN,
  isObject: as,
  isPlainObject: ha,
  isUndefined: zr,
  isDate: FN,
  isFile: YN,
  isBlob: VN,
  isRegExp: rI,
  isFunction: It,
  isStream: jN,
  isURLSearchParams: HN,
  isTypedArray: JN,
  isFileList: UN,
  forEach: Qr,
  merge: Gs,
  extend: GN,
  trim: WN,
  stripBOM: zN,
  inherits: KN,
  toFlatObject: qN,
  kindOf: ns,
  kindOfTest: Qt,
  endsWith: ZN,
  toArray: XN,
  forEachEntry: QN,
  matchAll: eI,
  isHTMLForm: tI,
  hasOwnProperty: Kl,
  hasOwnProp: Kl,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: gd,
  freezeMethods: aI,
  toObjectSet: sI,
  toCamelCase: nI,
  noop: oI,
  toFiniteNumber: iI,
  findKey: pd,
  global: md,
  isContextDefined: hd,
  ALPHABET: _d,
  generateString: lI,
  isSpecCompliantForm: uI,
  toJSONObject: cI,
  isAsyncFn: dI,
  isThenable: fI
};
function Ne(e, t, n, r, a) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), a && (this.response = a);
}
V.inherits(Ne, Error, {
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
const yd = Ne.prototype, bd = {};
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
  bd[e] = { value: e };
});
Object.defineProperties(Ne, bd);
Object.defineProperty(yd, "isAxiosError", { value: !0 });
Ne.from = (e, t, n, r, a, s) => {
  const o = Object.create(yd);
  return V.toFlatObject(e, o, function(l) {
    return l !== Error.prototype;
  }, (i) => i !== "isAxiosError"), Ne.call(o, e.message, t, n, r, a), o.cause = e, o.name = e.name, s && Object.assign(o, s), o;
};
const vI = null;
function zs(e) {
  return V.isPlainObject(e) || V.isArray(e);
}
function wd(e) {
  return V.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Zl(e, t, n) {
  return e ? e.concat(t).map(function(a, s) {
    return a = wd(a), !n && s ? "[" + a + "]" : a;
  }).join(n ? "." : "") : t;
}
function pI(e) {
  return V.isArray(e) && !e.some(zs);
}
const mI = V.toFlatObject(V, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function ss(e, t, n) {
  if (!V.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = V.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(m, y) {
    return !V.isUndefined(y[m]);
  });
  const r = n.metaTokens, a = n.visitor || u, s = n.dots, o = n.indexes, l = (n.Blob || typeof Blob < "u" && Blob) && V.isSpecCompliantForm(t);
  if (!V.isFunction(a))
    throw new TypeError("visitor must be a function");
  function c(h) {
    if (h === null)
      return "";
    if (V.isDate(h))
      return h.toISOString();
    if (!l && V.isBlob(h))
      throw new Ne("Blob is not supported. Use a Buffer instead.");
    return V.isArrayBuffer(h) || V.isTypedArray(h) ? l && typeof Blob == "function" ? new Blob([h]) : Buffer.from(h) : h;
  }
  function u(h, m, y) {
    let f = h;
    if (h && !y && typeof h == "object") {
      if (V.endsWith(m, "{}"))
        m = r ? m : m.slice(0, -2), h = JSON.stringify(h);
      else if (V.isArray(h) && pI(h) || (V.isFileList(h) || V.endsWith(m, "[]")) && (f = V.toArray(h)))
        return m = wd(m), f.forEach(function(T, w) {
          !(V.isUndefined(T) || T === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? Zl([m], w, s) : o === null ? m : m + "[]",
            c(T)
          );
        }), !1;
    }
    return zs(h) ? !0 : (t.append(Zl(y, m, s), c(h)), !1);
  }
  const d = [], v = Object.assign(mI, {
    defaultVisitor: u,
    convertValue: c,
    isVisitable: zs
  });
  function p(h, m) {
    if (!V.isUndefined(h)) {
      if (d.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      d.push(h), V.forEach(h, function(f, b) {
        (!(V.isUndefined(f) || f === null) && a.call(
          t,
          f,
          V.isString(b) ? b.trim() : b,
          m,
          v
        )) === !0 && p(f, m ? m.concat(b) : [b]);
      }), d.pop();
    }
  }
  if (!V.isObject(e))
    throw new TypeError("data must be an object");
  return p(e), t;
}
function Xl(e) {
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
function Go(e, t) {
  this._pairs = [], e && ss(e, this, t);
}
const Ed = Go.prototype;
Ed.append = function(t, n) {
  this._pairs.push([t, n]);
};
Ed.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Xl);
  } : Xl;
  return this._pairs.map(function(a) {
    return n(a[0]) + "=" + n(a[1]);
  }, "").join("&");
};
function hI(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Dd(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || hI, a = n && n.serialize;
  let s;
  if (a ? s = a(t, n) : s = V.isURLSearchParams(t) ? t.toString() : new Go(t, n).toString(r), s) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
class gI {
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
const Jl = gI, Od = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, _I = typeof URLSearchParams < "u" ? URLSearchParams : Go, yI = typeof FormData < "u" ? FormData : null, bI = typeof Blob < "u" ? Blob : null, wI = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), EI = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), Gt = {
  isBrowser: !0,
  classes: {
    URLSearchParams: _I,
    FormData: yI,
    Blob: bI
  },
  isStandardBrowserEnv: wI,
  isStandardBrowserWebWorkerEnv: EI,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function DI(e, t) {
  return ss(e, new Gt.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, a, s) {
      return Gt.isNode && V.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function OI(e) {
  return V.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function $I(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const a = n.length;
  let s;
  for (r = 0; r < a; r++)
    s = n[r], t[s] = e[s];
  return t;
}
function $d(e) {
  function t(n, r, a, s) {
    let o = n[s++];
    const i = Number.isFinite(+o), l = s >= n.length;
    return o = !o && V.isArray(a) ? a.length : o, l ? (V.hasOwnProp(a, o) ? a[o] = [a[o], r] : a[o] = r, !i) : ((!a[o] || !V.isObject(a[o])) && (a[o] = []), t(n, r, a[o], s) && V.isArray(a[o]) && (a[o] = $I(a[o])), !i);
  }
  if (V.isFormData(e) && V.isFunction(e.entries)) {
    const n = {};
    return V.forEachEntry(e, (r, a) => {
      t(OI(r), a, n, 0);
    }), n;
  }
  return null;
}
function TI(e, t, n) {
  if (V.isString(e))
    try {
      return (t || JSON.parse)(e), V.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const zo = {
  transitional: Od,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", a = r.indexOf("application/json") > -1, s = V.isObject(t);
    if (s && V.isHTMLForm(t) && (t = new FormData(t)), V.isFormData(t))
      return a && a ? JSON.stringify($d(t)) : t;
    if (V.isArrayBuffer(t) || V.isBuffer(t) || V.isStream(t) || V.isFile(t) || V.isBlob(t))
      return t;
    if (V.isArrayBufferView(t))
      return t.buffer;
    if (V.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let i;
    if (s) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return DI(t, this.formSerializer).toString();
      if ((i = V.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return ss(
          i ? { "files[]": t } : t,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return s || a ? (n.setContentType("application/json", !1), TI(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || zo.transitional, r = n && n.forcedJSONParsing, a = this.responseType === "json";
    if (t && V.isString(t) && (r && !this.responseType || a)) {
      const o = !(n && n.silentJSONParsing) && a;
      try {
        return JSON.parse(t);
      } catch (i) {
        if (o)
          throw i.name === "SyntaxError" ? Ne.from(i, Ne.ERR_BAD_RESPONSE, this, null, this.response) : i;
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
    FormData: Gt.classes.FormData,
    Blob: Gt.classes.Blob
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
  zo.headers[e] = {};
});
const Ko = zo, kI = V.toObjectSet([
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
]), NI = (e) => {
  const t = {};
  let n, r, a;
  return e && e.split(`
`).forEach(function(o) {
    a = o.indexOf(":"), n = o.substring(0, a).trim().toLowerCase(), r = o.substring(a + 1).trim(), !(!n || t[n] && kI[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Ql = Symbol("internals");
function Cr(e) {
  return e && String(e).trim().toLowerCase();
}
function ga(e) {
  return e === !1 || e == null ? e : V.isArray(e) ? e.map(ga) : String(e);
}
function II(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const AI = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ys(e, t, n, r, a) {
  if (V.isFunction(r))
    return r.call(this, t, n);
  if (a && (t = n), !!V.isString(t)) {
    if (V.isString(r))
      return t.indexOf(r) !== -1;
    if (V.isRegExp(r))
      return r.test(t);
  }
}
function CI(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function SI(e, t) {
  const n = V.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(a, s, o) {
        return this[r].call(this, t, a, s, o);
      },
      configurable: !0
    });
  });
}
class os {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const a = this;
    function s(i, l, c) {
      const u = Cr(l);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const d = V.findKey(a, u);
      (!d || a[d] === void 0 || c === !0 || c === void 0 && a[d] !== !1) && (a[d || l] = ga(i));
    }
    const o = (i, l) => V.forEach(i, (c, u) => s(c, u, l));
    return V.isPlainObject(t) || t instanceof this.constructor ? o(t, n) : V.isString(t) && (t = t.trim()) && !AI(t) ? o(NI(t), n) : t != null && s(n, t, r), this;
  }
  get(t, n) {
    if (t = Cr(t), t) {
      const r = V.findKey(this, t);
      if (r) {
        const a = this[r];
        if (!n)
          return a;
        if (n === !0)
          return II(a);
        if (V.isFunction(n))
          return n.call(this, a, r);
        if (V.isRegExp(n))
          return n.exec(a);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Cr(t), t) {
      const r = V.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || ys(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let a = !1;
    function s(o) {
      if (o = Cr(o), o) {
        const i = V.findKey(r, o);
        i && (!n || ys(r, r[i], i, n)) && (delete r[i], a = !0);
      }
    }
    return V.isArray(t) ? t.forEach(s) : s(t), a;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, a = !1;
    for (; r--; ) {
      const s = n[r];
      (!t || ys(this, this[s], s, t, !0)) && (delete this[s], a = !0);
    }
    return a;
  }
  normalize(t) {
    const n = this, r = {};
    return V.forEach(this, (a, s) => {
      const o = V.findKey(r, s);
      if (o) {
        n[o] = ga(a), delete n[s];
        return;
      }
      const i = t ? CI(s) : String(s).trim();
      i !== s && delete n[s], n[i] = ga(a), r[i] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return V.forEach(this, (r, a) => {
      r != null && r !== !1 && (n[a] = t && V.isArray(r) ? r.join(", ") : r);
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
    const r = (this[Ql] = this[Ql] = {
      accessors: {}
    }).accessors, a = this.prototype;
    function s(o) {
      const i = Cr(o);
      r[i] || (SI(a, o), r[i] = !0);
    }
    return V.isArray(t) ? t.forEach(s) : s(t), this;
  }
}
os.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
V.reduceDescriptors(os.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
V.freezeMethods(os);
const an = os;
function bs(e, t) {
  const n = this || Ko, r = t || n, a = an.from(r.headers);
  let s = r.data;
  return V.forEach(e, function(i) {
    s = i.call(n, s, a.normalize(), t ? t.status : void 0);
  }), a.normalize(), s;
}
function Td(e) {
  return !!(e && e.__CANCEL__);
}
function ea(e, t, n) {
  Ne.call(this, e ?? "canceled", Ne.ERR_CANCELED, t, n), this.name = "CanceledError";
}
V.inherits(ea, Ne, {
  __CANCEL__: !0
});
function PI(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new Ne(
    "Request failed with status code " + n.status,
    [Ne.ERR_BAD_REQUEST, Ne.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const LI = Gt.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(n, r, a, s, o, i) {
        const l = [];
        l.push(n + "=" + encodeURIComponent(r)), V.isNumber(a) && l.push("expires=" + new Date(a).toGMTString()), V.isString(s) && l.push("path=" + s), V.isString(o) && l.push("domain=" + o), i === !0 && l.push("secure"), document.cookie = l.join("; ");
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
function MI(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function xI(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function kd(e, t) {
  return e && !MI(t) ? xI(e, t) : t;
}
const RI = Gt.isStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
    let r;
    function a(s) {
      let o = s;
      return t && (n.setAttribute("href", o), o = n.href), n.setAttribute("href", o), {
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
    return r = a(window.location.href), function(o) {
      const i = V.isString(o) ? a(o) : o;
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
function FI(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function YI(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let a = 0, s = 0, o;
  return t = t !== void 0 ? t : 1e3, function(l) {
    const c = Date.now(), u = r[s];
    o || (o = c), n[a] = l, r[a] = c;
    let d = s, v = 0;
    for (; d !== a; )
      v += n[d++], d = d % e;
    if (a = (a + 1) % e, a === s && (s = (s + 1) % e), c - o < t)
      return;
    const p = u && c - u;
    return p ? Math.round(v * 1e3 / p) : void 0;
  };
}
function eu(e, t) {
  let n = 0;
  const r = YI(50, 250);
  return (a) => {
    const s = a.loaded, o = a.lengthComputable ? a.total : void 0, i = s - n, l = r(i), c = s <= o;
    n = s;
    const u = {
      loaded: s,
      total: o,
      progress: o ? s / o : void 0,
      bytes: i,
      rate: l || void 0,
      estimated: l && o && c ? (o - s) / l : void 0,
      event: a
    };
    u[t ? "download" : "upload"] = !0, e(u);
  };
}
const VI = typeof XMLHttpRequest < "u", UI = VI && function(e) {
  return new Promise(function(n, r) {
    let a = e.data;
    const s = an.from(e.headers).normalize(), o = e.responseType;
    let i;
    function l() {
      e.cancelToken && e.cancelToken.unsubscribe(i), e.signal && e.signal.removeEventListener("abort", i);
    }
    let c;
    V.isFormData(a) && (Gt.isStandardBrowserEnv || Gt.isStandardBrowserWebWorkerEnv ? s.setContentType(!1) : s.getContentType(/^\s*multipart\/form-data/) ? V.isString(c = s.getContentType()) && s.setContentType(c.replace(/^\s*(multipart\/form-data);+/, "$1")) : s.setContentType("multipart/form-data"));
    let u = new XMLHttpRequest();
    if (e.auth) {
      const h = e.auth.username || "", m = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      s.set("Authorization", "Basic " + btoa(h + ":" + m));
    }
    const d = kd(e.baseURL, e.url);
    u.open(e.method.toUpperCase(), Dd(d, e.params, e.paramsSerializer), !0), u.timeout = e.timeout;
    function v() {
      if (!u)
        return;
      const h = an.from(
        "getAllResponseHeaders" in u && u.getAllResponseHeaders()
      ), y = {
        data: !o || o === "text" || o === "json" ? u.responseText : u.response,
        status: u.status,
        statusText: u.statusText,
        headers: h,
        config: e,
        request: u
      };
      PI(function(b) {
        n(b), l();
      }, function(b) {
        r(b), l();
      }, y), u = null;
    }
    if ("onloadend" in u ? u.onloadend = v : u.onreadystatechange = function() {
      !u || u.readyState !== 4 || u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0) || setTimeout(v);
    }, u.onabort = function() {
      u && (r(new Ne("Request aborted", Ne.ECONNABORTED, e, u)), u = null);
    }, u.onerror = function() {
      r(new Ne("Network Error", Ne.ERR_NETWORK, e, u)), u = null;
    }, u.ontimeout = function() {
      let m = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const y = e.transitional || Od;
      e.timeoutErrorMessage && (m = e.timeoutErrorMessage), r(new Ne(
        m,
        y.clarifyTimeoutError ? Ne.ETIMEDOUT : Ne.ECONNABORTED,
        e,
        u
      )), u = null;
    }, Gt.isStandardBrowserEnv) {
      const h = (e.withCredentials || RI(d)) && e.xsrfCookieName && LI.read(e.xsrfCookieName);
      h && s.set(e.xsrfHeaderName, h);
    }
    a === void 0 && s.setContentType(null), "setRequestHeader" in u && V.forEach(s.toJSON(), function(m, y) {
      u.setRequestHeader(y, m);
    }), V.isUndefined(e.withCredentials) || (u.withCredentials = !!e.withCredentials), o && o !== "json" && (u.responseType = e.responseType), typeof e.onDownloadProgress == "function" && u.addEventListener("progress", eu(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", eu(e.onUploadProgress)), (e.cancelToken || e.signal) && (i = (h) => {
      u && (r(!h || h.type ? new ea(null, e, u) : h), u.abort(), u = null);
    }, e.cancelToken && e.cancelToken.subscribe(i), e.signal && (e.signal.aborted ? i() : e.signal.addEventListener("abort", i)));
    const p = FI(d);
    if (p && Gt.protocols.indexOf(p) === -1) {
      r(new Ne("Unsupported protocol " + p + ":", Ne.ERR_BAD_REQUEST, e));
      return;
    }
    u.send(a || null);
  });
}, Ks = {
  http: vI,
  xhr: UI
};
V.forEach(Ks, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const tu = (e) => `- ${e}`, jI = (e) => V.isFunction(e) || e === null || e === !1, Nd = {
  getAdapter: (e) => {
    e = V.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const a = {};
    for (let s = 0; s < t; s++) {
      n = e[s];
      let o;
      if (r = n, !jI(n) && (r = Ks[(o = String(n)).toLowerCase()], r === void 0))
        throw new Ne(`Unknown adapter '${o}'`);
      if (r)
        break;
      a[o || "#" + s] = r;
    }
    if (!r) {
      const s = Object.entries(a).map(
        ([i, l]) => `adapter ${i} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let o = t ? s.length > 1 ? `since :
` + s.map(tu).join(`
`) : " " + tu(s[0]) : "as no adapter specified";
      throw new Ne(
        "There is no suitable adapter to dispatch the request " + o,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: Ks
};
function ws(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new ea(null, e);
}
function nu(e) {
  return ws(e), e.headers = an.from(e.headers), e.data = bs.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Nd.getAdapter(e.adapter || Ko.adapter)(e).then(function(r) {
    return ws(e), r.data = bs.call(
      e,
      e.transformResponse,
      r
    ), r.headers = an.from(r.headers), r;
  }, function(r) {
    return Td(r) || (ws(e), r && r.response && (r.response.data = bs.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = an.from(r.response.headers))), Promise.reject(r);
  });
}
const ru = (e) => e instanceof an ? e.toJSON() : e;
function fr(e, t) {
  t = t || {};
  const n = {};
  function r(c, u, d) {
    return V.isPlainObject(c) && V.isPlainObject(u) ? V.merge.call({ caseless: d }, c, u) : V.isPlainObject(u) ? V.merge({}, u) : V.isArray(u) ? u.slice() : u;
  }
  function a(c, u, d) {
    if (V.isUndefined(u)) {
      if (!V.isUndefined(c))
        return r(void 0, c, d);
    } else
      return r(c, u, d);
  }
  function s(c, u) {
    if (!V.isUndefined(u))
      return r(void 0, u);
  }
  function o(c, u) {
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
    url: s,
    method: s,
    data: s,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: i,
    headers: (c, u) => a(ru(c), ru(u), !0)
  };
  return V.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const d = l[u] || a, v = d(e[u], t[u], u);
    V.isUndefined(v) && d !== i || (n[u] = v);
  }), n;
}
const Id = "1.5.1", qo = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  qo[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const au = {};
qo.transitional = function(t, n, r) {
  function a(s, o) {
    return "[Axios v" + Id + "] Transitional option '" + s + "'" + o + (r ? ". " + r : "");
  }
  return (s, o, i) => {
    if (t === !1)
      throw new Ne(
        a(o, " has been removed" + (n ? " in " + n : "")),
        Ne.ERR_DEPRECATED
      );
    return n && !au[o] && (au[o] = !0, console.warn(
      a(
        o,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(s, o, i) : !0;
  };
};
function BI(e, t, n) {
  if (typeof e != "object")
    throw new Ne("options must be an object", Ne.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let a = r.length;
  for (; a-- > 0; ) {
    const s = r[a], o = t[s];
    if (o) {
      const i = e[s], l = i === void 0 || o(i, s, e);
      if (l !== !0)
        throw new Ne("option " + s + " must be " + l, Ne.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new Ne("Unknown option " + s, Ne.ERR_BAD_OPTION);
  }
}
const qs = {
  assertOptions: BI,
  validators: qo
}, gn = qs.validators;
class Ua {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Jl(),
      response: new Jl()
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = fr(this.defaults, n);
    const { transitional: r, paramsSerializer: a, headers: s } = n;
    r !== void 0 && qs.assertOptions(r, {
      silentJSONParsing: gn.transitional(gn.boolean),
      forcedJSONParsing: gn.transitional(gn.boolean),
      clarifyTimeoutError: gn.transitional(gn.boolean)
    }, !1), a != null && (V.isFunction(a) ? n.paramsSerializer = {
      serialize: a
    } : qs.assertOptions(a, {
      encode: gn.function,
      serialize: gn.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let o = s && V.merge(
      s.common,
      s[n.method]
    );
    s && V.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (h) => {
        delete s[h];
      }
    ), n.headers = an.concat(o, s);
    const i = [];
    let l = !0;
    this.interceptors.request.forEach(function(m) {
      typeof m.runWhen == "function" && m.runWhen(n) === !1 || (l = l && m.synchronous, i.unshift(m.fulfilled, m.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(m) {
      c.push(m.fulfilled, m.rejected);
    });
    let u, d = 0, v;
    if (!l) {
      const h = [nu.bind(this), void 0];
      for (h.unshift.apply(h, i), h.push.apply(h, c), v = h.length, u = Promise.resolve(n); d < v; )
        u = u.then(h[d++], h[d++]);
      return u;
    }
    v = i.length;
    let p = n;
    for (d = 0; d < v; ) {
      const h = i[d++], m = i[d++];
      try {
        p = h(p);
      } catch (y) {
        m.call(this, y);
        break;
      }
    }
    try {
      u = nu.call(this, p);
    } catch (h) {
      return Promise.reject(h);
    }
    for (d = 0, v = c.length; d < v; )
      u = u.then(c[d++], c[d++]);
    return u;
  }
  getUri(t) {
    t = fr(this.defaults, t);
    const n = kd(t.baseURL, t.url);
    return Dd(n, t.params, t.paramsSerializer);
  }
}
V.forEach(["delete", "get", "head", "options"], function(t) {
  Ua.prototype[t] = function(n, r) {
    return this.request(fr(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
V.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(s, o, i) {
      return this.request(fr(i || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: o
      }));
    };
  }
  Ua.prototype[t] = n(), Ua.prototype[t + "Form"] = n(!0);
});
const _a = Ua;
class Zo {
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
      const o = new Promise((i) => {
        r.subscribe(i), s = i;
      }).then(a);
      return o.cancel = function() {
        r.unsubscribe(s);
      }, o;
    }, t(function(s, o, i) {
      r.reason || (r.reason = new ea(s, o, i), n(r.reason));
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
      token: new Zo(function(a) {
        t = a;
      }),
      cancel: t
    };
  }
}
const HI = Zo;
function WI(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function GI(e) {
  return V.isObject(e) && e.isAxiosError === !0;
}
const Zs = {
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
Object.entries(Zs).forEach(([e, t]) => {
  Zs[t] = e;
});
const zI = Zs;
function Ad(e) {
  const t = new _a(e), n = dd(_a.prototype.request, t);
  return V.extend(n, _a.prototype, t, { allOwnKeys: !0 }), V.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(a) {
    return Ad(fr(e, a));
  }, n;
}
const Qe = Ad(Ko);
Qe.Axios = _a;
Qe.CanceledError = ea;
Qe.CancelToken = HI;
Qe.isCancel = Td;
Qe.VERSION = Id;
Qe.toFormData = ss;
Qe.AxiosError = Ne;
Qe.Cancel = Qe.CanceledError;
Qe.all = function(t) {
  return Promise.all(t);
};
Qe.spread = WI;
Qe.isAxiosError = GI;
Qe.mergeConfig = fr;
Qe.AxiosHeaders = an;
Qe.formToJSON = (e) => $d(V.isHTMLForm(e) ? new FormData(e) : e);
Qe.getAdapter = Nd.getAdapter;
Qe.HttpStatusCode = zI;
Qe.default = Qe;
const ja = Qe, KI = ["width", "height", "fill", "transform"], qI = { key: 0 }, ZI = /* @__PURE__ */ O("path", { d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm48.49-108.49a12,12,0,0,1,0,17l-40,40a12,12,0,0,1-17,0l-40-40a12,12,0,0,1,17-17L128,135l31.51-31.52A12,12,0,0,1,176.49,103.51Z" }, null, -1), XI = [
  ZI
], JI = { key: 1 }, QI = /* @__PURE__ */ O("path", {
  d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
  opacity: "0.2"
}, null, -1), eA = /* @__PURE__ */ O("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-109.66a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L128,140.69l34.34-34.35A8,8,0,0,1,173.66,106.34Z" }, null, -1), tA = [
  QI,
  eA
], nA = { key: 2 }, rA = /* @__PURE__ */ O("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,93.66-40,40a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L128,140.69l34.34-34.35a8,8,0,0,1,11.32,11.32Z" }, null, -1), aA = [
  rA
], sA = { key: 3 }, oA = /* @__PURE__ */ O("path", { d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm44.24-110.24a6,6,0,0,1,0,8.48l-40,40a6,6,0,0,1-8.48,0l-40-40a6,6,0,0,1,8.48-8.48L128,143.51l35.76-35.75A6,6,0,0,1,172.24,107.76Z" }, null, -1), iA = [
  oA
], lA = { key: 4 }, uA = /* @__PURE__ */ O("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-109.66a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L128,140.69l34.34-34.35A8,8,0,0,1,173.66,106.34Z" }, null, -1), cA = [
  uA
], dA = { key: 5 }, fA = /* @__PURE__ */ O("path", { d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm42.83-110.83a4,4,0,0,1,0,5.66l-40,40a4,4,0,0,1-5.66,0l-40-40a4,4,0,0,1,5.66-5.66L128,146.34l37.17-37.17A4,4,0,0,1,170.83,109.17Z" }, null, -1), vA = [
  fA
], pA = {
  name: "PhCaretCircleDown"
}, mA = /* @__PURE__ */ Se({
  ...pA,
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
    const t = e, n = Ye("weight", "regular"), r = Ye("size", "1em"), a = Ye("color", "currentColor"), s = Ye("mirrored", !1), o = A(() => t.weight ?? n), i = A(() => t.size ?? r), l = A(() => t.color ?? a), c = A(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : s ? "scale(-1, 1)" : void 0);
    return (u, d) => (D(), k("svg", un({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: i.value,
      height: i.value,
      fill: l.value,
      transform: c.value
    }, u.$attrs), [
      At(u.$slots, "default"),
      o.value === "bold" ? (D(), k("g", qI, XI)) : o.value === "duotone" ? (D(), k("g", JI, tA)) : o.value === "fill" ? (D(), k("g", nA, aA)) : o.value === "light" ? (D(), k("g", sA, iA)) : o.value === "regular" ? (D(), k("g", lA, cA)) : o.value === "thin" ? (D(), k("g", dA, vA)) : X("", !0)
    ], 16, KI));
  }
}), hA = ["width", "height", "fill", "transform"], gA = { key: 0 }, _A = /* @__PURE__ */ O("path", { d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm32.49-92.49a12,12,0,0,1,0,17l-40,40a12,12,0,0,1-17-17L135,128,103.51,96.49a12,12,0,0,1,17-17Z" }, null, -1), yA = [
  _A
], bA = { key: 1 }, wA = /* @__PURE__ */ O("path", {
  d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
  opacity: "0.2"
}, null, -1), EA = /* @__PURE__ */ O("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm29.66-93.66a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32-11.32L140.69,128,106.34,93.66a8,8,0,0,1,11.32-11.32Z" }, null, -1), DA = [
  wA,
  EA
], OA = { key: 2 }, $A = /* @__PURE__ */ O("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm29.66,109.66-40,40a8,8,0,0,1-11.32-11.32L140.69,128,106.34,93.66a8,8,0,0,1,11.32-11.32l40,40A8,8,0,0,1,157.66,133.66Z" }, null, -1), TA = [
  $A
], kA = { key: 3 }, NA = /* @__PURE__ */ O("path", { d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm28.24-94.24a6,6,0,0,1,0,8.48l-40,40a6,6,0,0,1-8.48-8.48L143.51,128,107.76,92.24a6,6,0,0,1,8.48-8.48Z" }, null, -1), IA = [
  NA
], AA = { key: 4 }, CA = /* @__PURE__ */ O("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm29.66-93.66a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32-11.32L140.69,128,106.34,93.66a8,8,0,0,1,11.32-11.32Z" }, null, -1), SA = [
  CA
], PA = { key: 5 }, LA = /* @__PURE__ */ O("path", { d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm26.83-94.83a4,4,0,0,1,0,5.66l-40,40a4,4,0,0,1-5.66-5.66L146.34,128,109.17,90.83a4,4,0,0,1,5.66-5.66Z" }, null, -1), MA = [
  LA
], xA = {
  name: "PhCaretCircleRight"
}, RA = /* @__PURE__ */ Se({
  ...xA,
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
    const t = e, n = Ye("weight", "regular"), r = Ye("size", "1em"), a = Ye("color", "currentColor"), s = Ye("mirrored", !1), o = A(() => t.weight ?? n), i = A(() => t.size ?? r), l = A(() => t.color ?? a), c = A(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : s ? "scale(-1, 1)" : void 0);
    return (u, d) => (D(), k("svg", un({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: i.value,
      height: i.value,
      fill: l.value,
      transform: c.value
    }, u.$attrs), [
      At(u.$slots, "default"),
      o.value === "bold" ? (D(), k("g", gA, yA)) : o.value === "duotone" ? (D(), k("g", bA, DA)) : o.value === "fill" ? (D(), k("g", OA, TA)) : o.value === "light" ? (D(), k("g", kA, IA)) : o.value === "regular" ? (D(), k("g", AA, SA)) : o.value === "thin" ? (D(), k("g", PA, MA)) : X("", !0)
    ], 16, hA));
  }
}), FA = ["width", "height", "fill", "transform"], YA = { key: 0 }, VA = /* @__PURE__ */ O("path", { d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm48.49-76.49a12,12,0,0,1-17,17L128,121,96.49,152.49a12,12,0,0,1-17-17l40-40a12,12,0,0,1,17,0Z" }, null, -1), UA = [
  VA
], jA = { key: 1 }, BA = /* @__PURE__ */ O("path", {
  d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
  opacity: "0.2"
}, null, -1), HA = /* @__PURE__ */ O("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-77.66a8,8,0,0,1-11.32,11.32L128,115.31,93.66,149.66a8,8,0,0,1-11.32-11.32l40-40a8,8,0,0,1,11.32,0Z" }, null, -1), WA = [
  BA,
  HA
], GA = { key: 2 }, zA = /* @__PURE__ */ O("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,125.66a8,8,0,0,1-11.32,0L128,115.31,93.66,149.66a8,8,0,0,1-11.32-11.32l40-40a8,8,0,0,1,11.32,0l40,40A8,8,0,0,1,173.66,149.66Z" }, null, -1), KA = [
  zA
], qA = { key: 3 }, ZA = /* @__PURE__ */ O("path", { d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm44.24-78.24a6,6,0,1,1-8.48,8.48L128,112.49,92.24,148.24a6,6,0,0,1-8.48-8.48l40-40a6,6,0,0,1,8.48,0Z" }, null, -1), XA = [
  ZA
], JA = { key: 4 }, QA = /* @__PURE__ */ O("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-77.66a8,8,0,0,1-11.32,11.32L128,115.31,93.66,149.66a8,8,0,0,1-11.32-11.32l40-40a8,8,0,0,1,11.32,0Z" }, null, -1), eC = [
  QA
], tC = { key: 5 }, nC = /* @__PURE__ */ O("path", { d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm42.83-78.83a4,4,0,0,1-5.66,5.66L128,109.66,90.83,146.83a4,4,0,0,1-5.66-5.66l40-40a4,4,0,0,1,5.66,0Z" }, null, -1), rC = [
  nC
], aC = {
  name: "PhCaretCircleUp"
}, sC = /* @__PURE__ */ Se({
  ...aC,
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
    const t = e, n = Ye("weight", "regular"), r = Ye("size", "1em"), a = Ye("color", "currentColor"), s = Ye("mirrored", !1), o = A(() => t.weight ?? n), i = A(() => t.size ?? r), l = A(() => t.color ?? a), c = A(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : s ? "scale(-1, 1)" : void 0);
    return (u, d) => (D(), k("svg", un({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: i.value,
      height: i.value,
      fill: l.value,
      transform: c.value
    }, u.$attrs), [
      At(u.$slots, "default"),
      o.value === "bold" ? (D(), k("g", YA, UA)) : o.value === "duotone" ? (D(), k("g", jA, WA)) : o.value === "fill" ? (D(), k("g", GA, KA)) : o.value === "light" ? (D(), k("g", qA, XA)) : o.value === "regular" ? (D(), k("g", JA, eC)) : o.value === "thin" ? (D(), k("g", tC, rC)) : X("", !0)
    ], 16, FA));
  }
}), oC = ["width", "height", "fill", "transform"], iC = { key: 0 }, lC = /* @__PURE__ */ O("path", { d: "M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" }, null, -1), uC = [
  lC
], cC = { key: 1 }, dC = /* @__PURE__ */ O("path", {
  d: "M232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Z",
  opacity: "0.2"
}, null, -1), fC = /* @__PURE__ */ O("path", { d: "M205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z" }, null, -1), vC = [
  dC,
  fC
], pC = { key: 2 }, mC = /* @__PURE__ */ O("path", { d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z" }, null, -1), hC = [
  mC
], gC = { key: 3 }, _C = /* @__PURE__ */ O("path", { d: "M228.24,76.24l-128,128a6,6,0,0,1-8.48,0l-56-56a6,6,0,0,1,8.48-8.48L96,191.51,219.76,67.76a6,6,0,0,1,8.48,8.48Z" }, null, -1), yC = [
  _C
], bC = { key: 4 }, wC = /* @__PURE__ */ O("path", { d: "M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" }, null, -1), EC = [
  wC
], DC = { key: 5 }, OC = /* @__PURE__ */ O("path", { d: "M226.83,74.83l-128,128a4,4,0,0,1-5.66,0l-56-56a4,4,0,0,1,5.66-5.66L96,194.34,221.17,69.17a4,4,0,1,1,5.66,5.66Z" }, null, -1), $C = [
  OC
], TC = {
  name: "PhCheck"
}, kC = /* @__PURE__ */ Se({
  ...TC,
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
    const t = e, n = Ye("weight", "regular"), r = Ye("size", "1em"), a = Ye("color", "currentColor"), s = Ye("mirrored", !1), o = A(() => t.weight ?? n), i = A(() => t.size ?? r), l = A(() => t.color ?? a), c = A(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : s ? "scale(-1, 1)" : void 0);
    return (u, d) => (D(), k("svg", un({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: i.value,
      height: i.value,
      fill: l.value,
      transform: c.value
    }, u.$attrs), [
      At(u.$slots, "default"),
      o.value === "bold" ? (D(), k("g", iC, uC)) : o.value === "duotone" ? (D(), k("g", cC, vC)) : o.value === "fill" ? (D(), k("g", pC, hC)) : o.value === "light" ? (D(), k("g", gC, yC)) : o.value === "regular" ? (D(), k("g", bC, EC)) : o.value === "thin" ? (D(), k("g", DC, $C)) : X("", !0)
    ], 16, oC));
  }
}), NC = { class: "py-1 flex gap-1 items-center flex-col justify-center" }, IC = { class: "border-b border-light-3 flex-1 flex gap-2 pb-2 w-full" }, AC = { class: "flex justify-between w-full items-center" }, CC = { class: "p4-r flex-1" }, SC = {
  key: 0,
  class: "flex flex-col gap-2 pl-4 w-full"
}, Xo = /* @__PURE__ */ Se({
  __name: "EventActionTargetItem",
  props: {
    target: {},
    targets: {}
  },
  setup(e) {
    const t = Ye("addTarget"), n = ne(!0);
    return (r, a) => {
      var s, o, i;
      return D(), k("div", NC, [
        O("div", IC, [
          (s = r.target) != null && s.children ? X("", !0) : (D(), k("div", {
            key: 0,
            class: "rounded p-0.5 border border-dark-3",
            onClick: a[0] || (a[0] = (l) => g(t)(r.target))
          }, [
            _e(g(kC), {
              size: "12",
              weight: "bold",
              class: Xe(["opacity-0 text-dark-2", {
                " opacity-100": r.targets.find((l) => l === r.target.id)
              }])
            }, null, 8, ["class"])
          ])),
          O("div", AC, [
            O("span", CC, pe(r.target.name), 1),
            (o = r.target) != null && o.children ? (D(), k("div", {
              key: 0,
              onClick: a[1] || (a[1] = (l) => n.value = !g(n)),
              class: "flex-shrink-0 cursor-pointer"
            }, [
              g(n) ? (D(), Ue(g(mA), {
                key: 0,
                size: 14
              })) : (D(), Ue(g(sC), {
                key: 1,
                size: 14
              }))
            ])) : X("", !0)
          ])
        ]),
        (i = r.target) != null && i.children && g(n) ? (D(), k("div", SC, [
          (D(!0), k(re, null, Te(r.target.children, (l) => (D(), Ue(Xo, {
            target: l,
            targets: r.targets
          }, null, 8, ["target", "targets"]))), 256))
        ])) : X("", !0)
      ]);
    };
  }
}), PC = { class: "flex flex-col gap-2" }, LC = { class: "flex items-center gap-2 relative pt-2" }, MC = { class: "flex items-center gap-2" }, xC = /* @__PURE__ */ O("span", { class: "p4-b" }, "平台", -1), RC = /* @__PURE__ */ O("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), FC = ["value"], YC = {
  key: 0,
  class: "flex items-center gap-2"
}, VC = /* @__PURE__ */ O("span", { class: "p4-b" }, "層級", -1), UC = /* @__PURE__ */ O("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), jC = ["value"], BC = {
  key: 1,
  class: "flex items-center gap-2"
}, HC = /* @__PURE__ */ O("span", { class: "p4-b" }, "目標", -1), WC = /* @__PURE__ */ O("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), GC = ["value"], zC = {
  key: 0,
  class: "flex flex-col my-2"
}, KC = { class: "flex items-center gap-2 relative" }, qC = /* @__PURE__ */ O("span", { class: "p4-b" }, "指定目標", -1), ZC = ["value"], XC = { key: 0 }, JC = { class: "p4-r text-true-blue-3 px-0.5" }, QC = {
  key: 0,
  class: "absolute top-0 left-0 pt-4 right-0 bottom-0 w-full h-full flex justify-center bg-dark-3 bg-opacity-50 z-[2]"
}, eS = { class: "sticky flex flex-col max-h-[80%] bg-light-5 rounded-xs shadow-01 w-4/5 p-4 h-fit top-4" }, tS = /* @__PURE__ */ O("span", { class: "p1-b flex justify-center mb-1" }, "請選擇目標", -1), nS = { key: 0 }, rS = {
  key: 1,
  class: "flex flex-col gap-2 mt-2 flex-1 overflow-y-auto"
}, aS = { class: "flex gap-3 items-center justify-center mt-4" }, sS = {
  key: 2,
  class: "flex flex-col gap-2"
}, oS = { class: "flex items-center gap-2" }, iS = /* @__PURE__ */ O("span", { class: "p4-b" }, "執行", -1), lS = /* @__PURE__ */ O("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), uS = ["value"], cS = {
  key: 0,
  class: "flex gap-2 flex-wrap"
}, dS = { class: "flex items-center gap-2" }, fS = /* @__PURE__ */ O("span", { class: "p4-b" }, "類型", -1), vS = /* @__PURE__ */ O("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), pS = ["value"], mS = {
  key: 0,
  class: "p4-r"
}, hS = {
  key: 0,
  class: "flex items-center gap-2"
}, gS = /* @__PURE__ */ O("span", { class: "p4-b" }, "調整", -1), _S = /* @__PURE__ */ O("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), yS = ["value"], bS = {
  key: 1,
  class: "flex items-center gap-2"
}, wS = { class: "p4-b" }, ES = {
  key: 0,
  class: "flex items-center gap-2 w-full"
}, DS = { class: "flex flex-col gap-2" }, OS = { class: "flex items-center gap-2" }, $S = /* @__PURE__ */ O("label", { for: "maxBudget" }, "設定預算上限", -1), TS = {
  key: 0,
  class: "flex gap-2 items-center"
}, kS = /* @__PURE__ */ O("span", null, "元", -1), Nn = "", NS = /* @__PURE__ */ Se({
  __name: "EventAction",
  setup(e) {
    const { t } = Er.global, n = Ye("eventData"), r = ne(n.value.action ?? {}), a = ne(!!Object.keys(r.value).length), s = ne(!1);
    Ce(s, ($) => {
      var j, te, U, C, Z;
      (j = r.value.params) != null && j.limit || (U = (te = r.value) == null ? void 0 : te.params) == null || delete U.limit, $ || (Z = (C = r.value) == null ? void 0 : C.params) == null || delete Z.limit;
    }), Xs(() => {
      var $, j, te, U, C;
      (($ = r.value) == null ? void 0 : $.action) == ie.SetNewBudget || ((j = r.value) == null ? void 0 : j.action) == ie.IncreaseBudget || ((te = r.value) == null ? void 0 : te.action) == ie.LowerBudget || delete r.value.params, s.value = !!((C = (U = r.value) == null ? void 0 : U.params) != null && C.limit);
    }), Ce(
      r,
      ($) => {
        n.value.action = $;
      },
      { deep: !0 }
    );
    const o = A(() => {
      var $;
      return (($ = n.value.action) == null ? void 0 : $.client) == Ge.Google ? _t : mt;
    }), i = {
      [Ge.Google]: {
        [_t.Campaign]: {
          SetNewBudget: ie.SetNewBudget,
          IncreaseBudget: ie.IncreaseBudget,
          LowerBudget: ie.LowerBudget,
          OpenProject: ie.OpenProject,
          SuspendProject: ie.SuspendProject
        },
        [_t.AdGroup]: {
          OpenProject: ie.OpenProject,
          SuspendProject: ie.SuspendProject
        },
        [_t.AdTag]: {
          OpenProject: ie.OpenProject,
          SuspendProject: ie.SuspendProject
        },
        [_t.Ad]: {
          OpenProject: ie.OpenProject,
          SuspendProject: ie.SuspendProject
        }
      },
      [Ge.Facebook]: {
        [mt.Campaign]: {
          SetNewBudget: ie.SetNewBudget,
          IncreaseBudget: ie.IncreaseBudget,
          LowerBudget: ie.LowerBudget,
          OpenProject: ie.OpenProject,
          SuspendProject: ie.SuspendProject
        },
        [mt.AdGroup]: {
          SetNewBudget: ie.SetNewBudget,
          IncreaseBudget: ie.IncreaseBudget,
          LowerBudget: ie.LowerBudget,
          OpenProject: ie.OpenProject,
          SuspendProject: ie.SuspendProject
        },
        [mt.AdTag]: {
          OpenProject: ie.OpenProject,
          SuspendProject: ie.SuspendProject
        },
        [mt.Ad]: {
          OpenProject: ie.OpenProject,
          SuspendProject: ie.SuspendProject
        }
      }
    }, l = A(() => {
      var te, U;
      const $ = (te = r.value) == null ? void 0 : te.client, j = (U = r.value) == null ? void 0 : U.adLevel;
      if ($ && j) {
        const C = i[$];
        if (C) {
          const Z = C[j];
          if (Z)
            return Z;
        }
      }
      return {};
    }), c = {
      [Ge.Google]: {
        [_t.Campaign]: {
          [ie.SetNewBudget]: [he.Value],
          [ie.IncreaseBudget]: [he.Percentage, he.Value],
          [ie.LowerBudget]: [he.Percentage, he.Value],
          [ie.OpenProject]: [he.Percentage, he.Value],
          [ie.SuspendProject]: [he.Percentage, he.Value]
        },
        [_t.AdGroup]: {
          [ie.SuspendProject]: [he.Percentage, he.Value]
        },
        [_t.AdTag]: {
          [ie.SuspendProject]: [he.Percentage, he.Value]
        },
        [_t.Ad]: {
          [ie.SuspendProject]: [he.Percentage, he.Value]
        }
      },
      [Ge.Facebook]: {
        [mt.Campaign]: {
          [ie.SetNewBudget]: [he.Value],
          [ie.IncreaseBudget]: [he.Percentage, he.Value],
          [ie.LowerBudget]: [he.Percentage, he.Value],
          [ie.OpenProject]: [he.Percentage, he.Value],
          [ie.SuspendProject]: [he.Percentage, he.Value]
        },
        [mt.AdGroup]: {
          [ie.SetNewBudget]: [he.Value],
          [ie.IncreaseBudget]: [he.Percentage, he.Value],
          [ie.LowerBudget]: [he.Percentage, he.Value],
          [ie.OpenProject]: [he.Percentage, he.Value],
          [ie.SuspendProject]: [he.Percentage, he.Value]
        },
        [mt.AdTag]: {
          [ie.SuspendProject]: [he.Percentage, he.Value]
        },
        [mt.Ad]: {
          [ie.SuspendProject]: [he.Percentage, he.Value]
        }
      }
    }, u = A(() => {
      var U, C, Z;
      const $ = (U = r.value) == null ? void 0 : U.client, j = (C = r.value) == null ? void 0 : C.adLevel, te = (Z = r.value) == null ? void 0 : Z.action;
      if ($ && j && te) {
        const se = c[$];
        if (se) {
          const ke = se[j];
          if (ke) {
            const De = ke[te];
            if (De)
              return De;
          }
        }
      }
      return [he.Percentage, he.Value];
    }), d = {
      target: {
        value: ""
      }
    }, v = A(() => r.value.client ? r.value.client : ""), p = ($) => {
      r.value.client = Number($.target.value), delete r.value.target, m(d);
    }, h = A(() => r.value.adLevel ? r.value.adLevel : ""), m = ($) => {
      r.value.adLevel = Number($.target.value), delete r.value.action, delete r.value.target, f(d);
    }, y = A(() => r.value.targetType ? r.value.targetType : ""), f = ($) => {
      r.value.targetType = Number($.target.value);
    }, b = A(() => r.value.action ? r.value.action : ""), T = ($) => {
      r.value.action = Number($.target.value);
    }, w = A(() => {
      var $;
      return ($ = r.value) != null && $.params || (r.value.params = {}), r.value.params.budgetType ? r.value.params.budgetType : "";
    }), P = ($) => r.value.params.budgetType = $.target.value, N = A(() => {
      var $;
      return ($ = r.value) != null && $.params || (r.value.params = {}), r.value.params.valueType ? r.value.params.valueType : "";
    }), x = ($) => r.value.params.valueType = $.target.value, S = ne(!1);
    En("addTarget", ($) => {
      var te;
      (te = r.value) != null && te.target || (r.value.target = []);
      const j = r.value.target.findIndex(
        (U) => U === $.id
      );
      j === -1 ? r.value.target.push($.id) : r.value.target.splice(j, 1);
    });
    const R = ne(), B = async () => {
      const $ = await ja({
        method: "get",
        url: `${ya()}/heybear/api/automation/platform-target?client=${v.value}&adLevel=${h.value}`,
        withCredentials: !0,
        headers: {
          Authorization: ba()
        }
      });
      R.value = $.data.data;
    }, Y = ne(!1), q = A(() => {
      const $ = ee.value.trim().toLowerCase(), j = (C) => C.name.toLowerCase().includes($), te = (C) => {
        let Z = [];
        for (const se of C)
          if (j(se) && (!se.children || se.children.length === 0) && Z.push(se), se.children && se.children.length > 0) {
            const ke = te(se.children);
            ke.length > 0 && Z.push({
              id: se.id,
              name: se.name,
              children: ke
            });
          }
        return Z;
      }, U = [];
      for (const C of R.value)
        if (C.children) {
          const Z = te(C.children);
          Z.length > 0 && U.push({
            id: C.id,
            name: C.name,
            children: Z
          });
        } else
          U.push({
            id: C.id,
            name: C.name
          });
      return U;
    }), ce = async () => {
      S.value = !0, Y.value = !0, await B(), Y.value = !1;
    };
    Ce(S, ($) => {
      $ || (ee.value = "");
    });
    const ee = ne(""), le = () => {
      const $ = q.value, j = (te) => {
        for (const U of te)
          U.children && U.children.length > 0 ? j(U.children) : r.value.target.push(U.id);
      };
      r.value.target.length ? r.value.target = [] : (r.value.target = [], j($));
    }, ge = ne(!1);
    Vn(() => {
      ge.value = !0;
    });
    const Ee = () => {
      a.value = !1, r.value = {}, Zn(() => {
        delete n.value.action;
      });
    }, z = A(() => {
      const $ = v.value, j = r.value.adLevel, te = w.value;
      if (te === "")
        return { show: !1 };
      const U = $ === Ge.Google && j === _t.Campaign, C = $ === Ge.Facebook && j === mt.Campaign, Z = $ === Ge.Facebook && j === mt.AdGroup, se = U || C || Z, ke = te === wa.DailyBudget ? "日預算" : "總預算", De = `${Ge[$]}${o.value[j]}`, be = se ? `若${t(De)}設定為${te !== Nn ? ke : ""}，則不會變更` : "";
      return { show: se, msg: be };
    });
    return ($, j) => g(a) ? (D(), Ue(Fr, {
      key: 1,
      title: "動作"
    }, {
      default: tt(() => {
        var te, U;
        return [
          O("div", PC, [
            O("div", LC, [
              O("div", {
                class: "cursor-pointer text-dark-4 absolute -top-2.5 -right-1.5 p4-b",
                onClick: Ee
              }, " 刪除 "),
              O("label", MC, [
                xC,
                Ke(O("select", {
                  class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                  "onUpdate:modelValue": j[1] || (j[1] = (C) => Ie(v) ? v.value = C : null),
                  onChange: p,
                  required: ""
                }, [
                  RC,
                  (D(!0), k(re, null, Te(g(Ge), (C, Z) => (D(), k(re, { key: Z }, [
                    Number.isInteger(C) ? X("", !0) : (D(), k("option", {
                      key: 0,
                      value: Z
                    }, pe(C), 9, FC))
                  ], 64))), 128))
                ], 544), [
                  [at, g(v)]
                ])
              ]),
              g(v) != Nn ? (D(), k("label", YC, [
                VC,
                Ke(O("select", {
                  class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                  "onUpdate:modelValue": j[2] || (j[2] = (C) => Ie(h) ? h.value = C : null),
                  onChange: m,
                  required: ""
                }, [
                  UC,
                  (D(!0), k(re, null, Te(g(o), (C, Z) => (D(), k(re, { key: Z }, [
                    Number.isInteger(C) ? X("", !0) : (D(), k("option", {
                      key: 0,
                      value: Z
                    }, pe(g(t)(`${g(Ge)[g(v)]}${C}`)), 9, jC))
                  ], 64))), 128))
                ], 544), [
                  [at, g(h)]
                ])
              ])) : X("", !0),
              g(h) != Nn ? (D(), k("label", BC, [
                HC,
                Ke(O("select", {
                  class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                  "onUpdate:modelValue": j[3] || (j[3] = (C) => Ie(y) ? y.value = C : null),
                  onChange: f,
                  required: ""
                }, [
                  WC,
                  (D(!0), k(re, null, Te(g($t), (C, Z) => (D(), k(re, { key: Z }, [
                    Number.isInteger(C) ? X("", !0) : (D(), k("option", {
                      key: 0,
                      value: Z
                    }, pe(g(t)(C)), 9, GC))
                  ], 64))), 128))
                ], 544), [
                  [at, g(y)]
                ])
              ])) : X("", !0)
            ]),
            g(y) === g($t).ForID ? (D(), k("div", zC, [
              O("label", KC, [
                qC,
                O("div", {
                  class: "p4-r px-1.5 py-0.5 text-true-blue-2 rounded bg-true-blue-5 flex w-fit cursor-pointer hover:bg-true-blue-4 z-[2]",
                  onClick: ce
                }, " 編輯 "),
                O("input", {
                  type: "text",
                  class: "opacity-0 absolute left-0 top-0",
                  required: "",
                  value: (te = g(r)) != null && te.target && (U = g(r)) != null && U.target.length ? "123" : ""
                }, null, 8, ZC)
              ]),
              g(y) === g($t).ForID ? (D(), k("div", XC, [
                O("span", JC, pe(g(r).target && g(r).target.length ? `已選${g(r).target.length}個目標` : "尚未選擇目標"), 1)
              ])) : X("", !0)
            ])) : X("", !0),
            g(ge) ? (D(), Ue(uu, {
              key: 1,
              to: "#editor-container"
            }, [
              g(S) ? (D(), k("div", QC, [
                O("div", eS, [
                  tS,
                  _e(wn, {
                    modelValue: g(ee),
                    "onUpdate:modelValue": j[4] || (j[4] = (C) => Ie(ee) ? ee.value = C : null)
                  }, null, 8, ["modelValue"]),
                  O("div", {
                    class: "mt-2 flex w-fit ml-auto justify-end p4-b text-true-blue-3 cursor-pointer",
                    onClick: le
                  }, " 全選 "),
                  g(Y) ? (D(), k("div", nS, "loading...")) : (D(), k("div", rS, [
                    (D(!0), k(re, null, Te(g(q), (C) => {
                      var Z;
                      return D(), Ue(Xo, {
                        key: C.id,
                        target: C,
                        targets: ((Z = g(r)) == null ? void 0 : Z.target) ?? []
                      }, null, 8, ["target", "targets"]);
                    }), 128))
                  ])),
                  O("div", aS, [
                    O("div", {
                      class: "p3-b flex cursor-pointer items-center gap-1 rounded bg-true-blue-2 px-1.5 py-0.5 text-light-5 hover:bg-true-blue-1",
                      onClick: j[5] || (j[5] = (C) => S.value = !1)
                    }, " 確定 ")
                  ])
                ])
              ])) : X("", !0)
            ])) : X("", !0),
            g(y) !== Nn ? (D(), k("div", sS, [
              O("label", oS, [
                iS,
                Ke(O("select", {
                  class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                  "onUpdate:modelValue": j[6] || (j[6] = (C) => Ie(b) ? b.value = C : null),
                  onChange: T,
                  required: ""
                }, [
                  lS,
                  (D(!0), k(re, null, Te(g(l), (C, Z) => (D(), k("option", {
                    key: Z,
                    value: C
                  }, pe(g(t)(Z)), 9, uS))), 128))
                ], 544), [
                  [at, g(b)]
                ])
              ]),
              g(h) != Nn ? (D(), k("div", cS, [
                g(r).action == g(ie).SetNewBudget || g(r).action == g(ie).IncreaseBudget || g(r).action == g(ie).LowerBudget ? (D(), k(re, { key: 0 }, [
                  O("label", dS, [
                    fS,
                    Ke(O("select", {
                      class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                      "onUpdate:modelValue": j[7] || (j[7] = (C) => Ie(w) ? w.value = C : null),
                      onChange: P,
                      required: ""
                    }, [
                      vS,
                      (D(!0), k(re, null, Te(g(wa), (C, Z) => (D(), k(re, { key: Z }, [
                        Number.isInteger(C) ? X("", !0) : (D(), k("option", {
                          key: 0,
                          value: C
                        }, pe(g(t)(C)), 9, pS))
                      ], 64))), 128))
                    ], 544), [
                      [at, g(w)]
                    ]),
                    g(z).show ? (D(), k("span", mS, pe(g(z).msg), 1)) : X("", !0)
                  ]),
                  g(w) != Nn ? (D(), k("label", hS, [
                    gS,
                    Ke(O("select", {
                      class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                      "onUpdate:modelValue": j[8] || (j[8] = (C) => Ie(N) ? N.value = C : null),
                      onChange: x,
                      required: ""
                    }, [
                      _S,
                      (D(!0), k(re, null, Te(g(u), (C, Z) => (D(), k("option", {
                        key: Z,
                        value: C
                      }, pe(g(t)(`action${C}`)), 9, yS))), 128))
                    ], 544), [
                      [at, g(N)]
                    ])
                  ])) : X("", !0),
                  g(N) != Nn ? (D(), k("label", bS, [
                    _e(wn, {
                      modelValue: g(r).params.value,
                      "onUpdate:modelValue": j[9] || (j[9] = (C) => g(r).params.value = C),
                      type: "number",
                      required: !0
                    }, null, 8, ["modelValue"]),
                    O("span", wS, pe(g(r).params.valueType === g(he).Percentage ? "%" : "元"), 1)
                  ])) : X("", !0),
                  g(r).action == g(ie).IncreaseBudget || g(r).action == g(ie).LowerBudget ? (D(), k(re, { key: 2 }, [
                    g(r).params.valueType === g(he).Percentage ? (D(), k("label", ES, [
                      O("div", DS, [
                        O("div", OS, [
                          Ke(O("input", {
                            type: "checkbox",
                            "onUpdate:modelValue": j[10] || (j[10] = (C) => Ie(s) ? s.value = C : null),
                            id: "maxBudget"
                          }, null, 512), [
                            [Qs, g(s)]
                          ]),
                          $S,
                          g(s) ? (D(), k("div", TS, [
                            _e(wn, {
                              modelValue: g(r).params.limit,
                              "onUpdate:modelValue": j[11] || (j[11] = (C) => g(r).params.limit = C),
                              type: "number",
                              required: !0
                            }, null, 8, ["modelValue"]),
                            kS
                          ])) : X("", !0)
                        ])
                      ])
                    ])) : X("", !0)
                  ], 64)) : X("", !0)
                ], 64)) : X("", !0)
              ])) : X("", !0)
            ])) : X("", !0)
          ])
        ];
      }),
      _: 1
    })) : (D(), k("div", {
      key: 0,
      class: "p3-b text-true-blue-3 flex ml-auto w-fit cursor-pointer hover:text-true-blue-2",
      onClick: j[0] || (j[0] = (te) => a.value = !0)
    }, " + 加入動作 "));
  }
}), IS = { class: "flex flex-col gap-2 relative pt-2" }, AS = { class: "flex items-center gap-2" }, CS = { class: "flex items-center gap-2" }, SS = /* @__PURE__ */ O("span", { class: "p4-b" }, "平台", -1), PS = /* @__PURE__ */ O("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), LS = ["value"], MS = {
  key: 0,
  class: "flex items-center gap-2"
}, xS = /* @__PURE__ */ O("span", { class: "p4-b" }, "層級", -1), RS = /* @__PURE__ */ O("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), FS = ["value"], YS = {
  key: 1,
  class: "flex items-center gap-2"
}, VS = /* @__PURE__ */ O("span", { class: "p4-b" }, "目標", -1), US = /* @__PURE__ */ O("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), jS = ["value"], BS = {
  key: 0,
  class: "flex flex-col my-2"
}, HS = { class: "flex items-center gap-2 relative" }, WS = /* @__PURE__ */ O("span", { class: "p4-b" }, "指定目標", -1), GS = ["value"], zS = { key: 0 }, KS = { class: "p4-r text-true-blue-3 px-0.5" }, qS = {
  key: 0,
  class: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex justify-center bg-dark-3 bg-opacity-50 z-[2]"
}, ZS = { class: "relative bg-light-5 rounded-xs shadow-01 w-4/5 p-4 h-fit top-4 max-h-[90%] flex flex-col" }, XS = /* @__PURE__ */ O("span", { class: "p1-b flex justify-center mb-1" }, "請選擇目標", -1), JS = { key: 0 }, QS = { class: "flex flex-col gap-2 mt-2 flex-1 overflow-y-auto" }, eP = { class: "flex gap-3 items-center justify-center mt-4" }, tP = {
  key: 2,
  class: "flex items-center gap-1"
}, nP = /* @__PURE__ */ O("span", { class: "p3-b" }, "條件", -1), rP = /* @__PURE__ */ O("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), aP = ["value"], sP = {
  key: 3,
  class: "flex gap-2 flex-wrap"
}, oP = { class: "flex gap-2" }, iP = { class: "flex items-center gap-1" }, lP = /* @__PURE__ */ O("span", { class: "p3-b" }, "運算", -1), uP = /* @__PURE__ */ O("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), cP = ["value"], dP = {
  key: 0,
  class: "p4-b flex items-center justify-center"
}, fP = { key: 1 }, vP = ["onClick"], pP = ["value"], mP = {
  key: 0,
  class: "flex items-center gap-1"
}, hP = /* @__PURE__ */ O("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), gP = ["value"], _P = {
  key: 1,
  class: "flex items-center gap-1"
}, yP = /* @__PURE__ */ O("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), bP = ["value"], wP = {
  key: 2,
  class: "flex gap-1 items-center"
}, EP = { class: "p4-b" }, DP = {
  key: 4,
  class: "flex items-center gap-2"
}, OP = /* @__PURE__ */ O("label", { for: "comparison" }, "加入比較區間", -1), _n = "", $P = /* @__PURE__ */ Se({
  __name: "ConditionItem",
  props: {
    modelValue: {},
    index: {}
  },
  emits: ["update:modelValue", "removeItem"],
  setup(e, { emit: t }) {
    const n = e, { t: r } = Er.global, a = A(() => n.modelValue ?? {}), s = A(() => {
      var z;
      return ((z = a.value) == null ? void 0 : z.client) == Ge.Google ? Xn : Jn;
    }), o = {
      target: {
        value: ""
      }
    }, i = A(() => a.value.client ? a.value.client : ""), l = (z) => {
      a.value.client = Number(z.target.value), delete a.value.target, u(o);
    }, c = A(() => a.value.adLevel ? a.value.adLevel : ""), u = (z) => {
      a.value.adLevel = Number(z.target.value), p.value != _n && t("update:modelValue", {
        client: i.value,
        adLevel: c.value
      }), delete a.value.action, delete a.value.target, v(o);
    }, d = A(() => a.value.targetType ? a.value.targetType : ""), v = (z) => {
      a.value.targetType = Number(z.target.value), delete a.value.action, delete a.value.target, a.value.targetType === $t.ForID && (a.value.target = []);
    }, p = A(() => a.value.conditionType ? a.value.conditionType : ""), h = (z) => a.value.conditionType = z.target.value, m = A(() => a.value.dateRangeType ? a.value.dateRangeType : ""), y = (z) => {
      a.value.dateRangeType = Number(z.target.value), Number(z.target.value) !== Bt.SpecifiedTime && delete a.value.dateRange;
    }, f = A(() => a.value.operation ? a.value.operation : ""), b = (z) => a.value.operation = z.target.value, T = A(() => a.value.valueType ? a.value.valueType : ""), w = (z) => a.value.valueType = z.target.value, P = {
      [Ge.Google]: {
        [Xn.Campaign]: {
          Clicks: ve.Clicks,
          Impressions: ve.Impressions,
          Cpc: ve.Cpc,
          Spend: ve.Spend,
          Conversions: ve.Conversions,
          ConversionSpend: ve.ConversionSpend,
          ReturnOnADSpending: ve.ReturnOnADSpending
        },
        [Xn.AdGroup]: {
          Clicks: ve.Clicks,
          Impressions: ve.Impressions,
          Cpc: ve.Cpc,
          Spend: ve.Spend,
          Conversions: ve.Conversions,
          ConversionSpend: ve.ConversionSpend,
          ReturnOnADSpending: ve.ReturnOnADSpending
        },
        [Xn.Account]: {
          BudgetRemaining: ve.BudgetRemaining,
          Clicks: ve.Clicks,
          Impressions: ve.Impressions,
          Cpc: ve.Cpc,
          Spend: ve.Spend,
          Conversions: ve.Conversions,
          ConversionSpend: ve.ConversionSpend,
          ReturnOnADSpending: ve.ReturnOnADSpending
        }
      },
      [Ge.Facebook]: {
        [Jn.Campaign]: {
          Clicks: ve.Clicks,
          BudgetCap: ve.BudgetCap,
          Impressions: ve.Impressions,
          Cpc: ve.Cpc,
          Spend: ve.Spend,
          Conversions: ve.Conversions,
          ConversionSpend: ve.ConversionSpend,
          ReturnOnADSpending: ve.ReturnOnADSpending
        },
        [Jn.AdGroup]: {
          Clicks: ve.Clicks,
          Impressions: ve.Impressions,
          Cpc: ve.Cpc,
          Spend: ve.Spend,
          Conversions: ve.Conversions,
          ConversionSpend: ve.ConversionSpend,
          ReturnOnADSpending: ve.ReturnOnADSpending
        },
        [Jn.Account]: {
          BudgetRemaining: ve.BudgetRemaining,
          Clicks: ve.Clicks,
          Impressions: ve.Impressions,
          Cpc: ve.Cpc,
          Spend: ve.Spend,
          Conversions: ve.Conversions,
          ConversionSpend: ve.ConversionSpend,
          ReturnOnADSpending: ve.ReturnOnADSpending
        }
      }
    }, N = A(() => {
      if (i.value && c.value) {
        const z = P[i.value];
        if (z) {
          const $ = z[c.value];
          if ($)
            return $;
        }
      }
      return {};
    }), x = ne(!1);
    En("addTarget", (z) => {
      var j;
      (j = a.value) != null && j.target || (a.value.target = []);
      const $ = a.value.target.findIndex(
        (te) => te.id === z.id
      );
      $ === -1 ? a.value.target.push({
        id: z.id,
        name: z.name
      }) : a.value.target.splice($, 1);
    });
    const L = ne(), R = async () => {
      const z = await ja({
        method: "get",
        url: `${ya()}/heybear/api/automation/platform-target?client=${i.value}&adLevel=${c.value}`,
        withCredentials: !0,
        headers: {
          Authorization: ba()
        }
      });
      L.value = z.data.data;
    }, B = A(() => {
      const z = ee.value.trim().toLowerCase(), $ = (U) => U.name.toLowerCase().includes(z), j = (U) => {
        let C = [];
        for (const Z of U)
          if ($(Z) && (!Z.children || Z.children.length === 0) && C.push(Z), Z.children && Z.children.length > 0) {
            const se = j(Z.children);
            se.length > 0 && C.push({
              id: Z.id,
              name: Z.name,
              children: se
            });
          }
        return C;
      }, te = [];
      for (const U of L.value)
        if (U.children) {
          const C = j(U.children);
          C.length > 0 && te.push({
            id: U.id,
            name: U.name,
            children: C
          });
        } else
          te.push({
            id: U.id,
            name: U.name
          });
      return te;
    }), Y = ne(!1), q = () => {
      const z = B.value, $ = (j) => {
        for (const te of j)
          te.children && te.children.length > 0 ? $(te.children) : a.value.target.push(te);
      };
      a.value.target.length ? a.value.target = [] : (a.value.target = [], $(z));
    }, ce = async () => {
      x.value = !0, Y.value = !0, await R(), Y.value = !1;
    }, ee = ne(""), le = ne(!1);
    Vn(() => {
      le.value = !0;
    });
    function ge(z) {
      const $ = new Date(z.start), j = new Date(z.end), te = new Date($ - 1), U = new Date(te - (j - $)), C = { year: "numeric", month: "2-digit", day: "2-digit" }, Z = U.toLocaleDateString(
        "zh-TW",
        C
      ), se = te.toLocaleDateString(
        "zh-TW",
        C
      );
      return `${Z}-${se}`;
    }
    const Ee = A(() => n.modelValue.comparison ? m.value === -1 ? a.value.dateRange ? `與${ge(a.value.dateRange)}相比` : "" : {
      [Bt.Today]: "與作天相比",
      [Bt.Yesterday]: "與前一天相比",
      [Bt.Last3Days]: "與前3天相比",
      [Bt.Last7Days]: "與前7天相比",
      [Bt.ThisMonth]: "與上個月相比"
    }[m.value] : "");
    return (z, $) => (D(), Ue(Fr, {
      title: "條件" + (z.index + 1)
    }, {
      default: tt(() => {
        var j, te;
        return [
          O("div", IS, [
            O("div", {
              class: "cursor-pointer text-dark-4 absolute -top-2.5 -right-1.5 p4-b",
              onClick: $[0] || ($[0] = (U) => t("removeItem"))
            }, " 刪除 "),
            O("div", AS, [
              O("label", CS, [
                SS,
                Ke(O("select", {
                  class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                  "onUpdate:modelValue": $[1] || ($[1] = (U) => Ie(i) ? i.value = U : null),
                  onChange: l,
                  required: ""
                }, [
                  PS,
                  (D(!0), k(re, null, Te(g(Ge), (U, C) => (D(), k(re, { key: C }, [
                    Number.isInteger(U) ? X("", !0) : (D(), k("option", {
                      key: 0,
                      value: C
                    }, pe(U), 9, LS))
                  ], 64))), 128))
                ], 544), [
                  [at, g(i)]
                ])
              ]),
              g(i) != _n ? (D(), k("label", MS, [
                xS,
                Ke(O("select", {
                  class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                  "onUpdate:modelValue": $[2] || ($[2] = (U) => Ie(c) ? c.value = U : null),
                  onChange: u,
                  required: ""
                }, [
                  RS,
                  (D(!0), k(re, null, Te(g(s), (U, C) => (D(), k(re, { key: C }, [
                    Number.isInteger(U) ? X("", !0) : (D(), k("option", {
                      key: 0,
                      value: C
                    }, pe(g(r)(`${g(Ge)[g(i)]}${U}`)), 9, FS))
                  ], 64))), 128))
                ], 544), [
                  [at, g(c)]
                ])
              ])) : X("", !0),
              g(c) != _n ? (D(), k("label", YS, [
                VS,
                Ke(O("select", {
                  class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                  "onUpdate:modelValue": $[3] || ($[3] = (U) => Ie(d) ? d.value = U : null),
                  onChange: v,
                  required: ""
                }, [
                  US,
                  (D(!0), k(re, null, Te(g($t), (U, C) => (D(), k(re, { key: C }, [
                    Number.isInteger(U) ? X("", !0) : (D(), k("option", {
                      key: 0,
                      value: C
                    }, pe(g(r)(U)), 9, jS))
                  ], 64))), 128))
                ], 544), [
                  [at, g(d)]
                ])
              ])) : X("", !0)
            ]),
            g(d) === g($t).ForID ? (D(), k("div", BS, [
              O("label", HS, [
                WS,
                O("div", {
                  class: "p4-r px-1.5 z-[2] py-0.5 text-true-blue-2 rounded bg-true-blue-5 flex w-fit cursor-pointer hover:bg-true-blue-4",
                  onClick: ce
                }, " 編輯 "),
                O("input", {
                  type: "text",
                  class: "opacity-0 absolute left-0 top-0",
                  required: "",
                  value: (j = g(a)) != null && j.target && (te = g(a)) != null && te.target.length ? "123" : ""
                }, null, 8, GS)
              ]),
              g(d) === g($t).ForID ? (D(), k("div", zS, [
                O("span", KS, pe(g(a).target && g(a).target.length ? `已選${g(a).target.length}個目標` : "尚未選擇目標"), 1)
              ])) : X("", !0)
            ])) : X("", !0),
            g(le) ? (D(), Ue(uu, {
              key: 1,
              to: "#editor-container"
            }, [
              g(x) ? (D(), k("div", qS, [
                O("div", ZS, [
                  XS,
                  _e(wn, {
                    modelValue: g(ee),
                    "onUpdate:modelValue": $[4] || ($[4] = (U) => Ie(ee) ? ee.value = U : null)
                  }, null, 8, ["modelValue"]),
                  O("div", {
                    class: "mt-2 flex w-fit ml-auto justify-end p4-b text-true-blue-3 cursor-pointer",
                    onClick: q
                  }, " 全選 "),
                  g(Y) ? (D(), k("div", JS, "loading...")) : (D(), k(re, { key: 1 }, [
                    O("div", QS, [
                      (D(!0), k(re, null, Te(g(B), (U) => {
                        var C;
                        return D(), Ue(Xo, {
                          key: U.id,
                          target: U,
                          targets: (C = g(a)) == null ? void 0 : C.target
                        }, null, 8, ["target", "targets"]);
                      }), 128))
                    ]),
                    O("div", eP, [
                      O("div", {
                        class: "p3-b flex cursor-pointer items-center gap-1 rounded bg-true-blue-2 px-1.5 py-0.5 text-light-5 hover:bg-true-blue-1",
                        onClick: $[5] || ($[5] = (U) => x.value = !1)
                      }, " 確定 ")
                    ])
                  ], 64))
                ])
              ])) : X("", !0)
            ])) : X("", !0),
            g(d) != _n ? (D(), k("label", tP, [
              nP,
              Ke(O("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": $[6] || ($[6] = (U) => Ie(p) ? p.value = U : null),
                onChange: h,
                required: ""
              }, [
                rP,
                (D(!0), k(re, null, Te(g(N), (U, C) => (D(), k("option", {
                  key: C,
                  value: U
                }, pe(g(r)(C)), 9, aP))), 128))
              ], 544), [
                [at, g(p)]
              ])
            ])) : X("", !0),
            g(p) != _n ? (D(), k("div", sP, [
              O("div", oP, [
                O("label", iP, [
                  lP,
                  Ke(O("select", {
                    class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                    "onUpdate:modelValue": $[7] || ($[7] = (U) => Ie(m) ? m.value = U : null),
                    onChange: y,
                    required: ""
                  }, [
                    uP,
                    (D(!0), k(re, null, Te(g(Bt), (U, C) => (D(), k(re, { key: C }, [
                      Number.isInteger(U) ? X("", !0) : (D(), k("option", {
                        key: 0,
                        value: C
                      }, pe(g(r)(U)), 9, cP))
                    ], 64))), 128))
                  ], 544), [
                    [at, g(m)]
                  ])
                ]),
                z.modelValue.comparison && g(Ee) !== "" ? (D(), k("div", dP, pe(g(Ee)), 1)) : X("", !0),
                g(m) == g(Bt).SpecifiedTime ? (D(), k("div", fP, [
                  _e(g(Po), {
                    modelValue: g(a).dateRange,
                    "onUpdate:modelValue": $[8] || ($[8] = (U) => g(a).dateRange = U),
                    modelModifiers: { range: !0 },
                    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
                  }, {
                    default: tt(({ togglePopover: U, inputValue: C }) => [
                      O("div", {
                        class: "p3-b flex relative cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 transition-all hover:bg-light-3 hover:bg-opacity-50",
                        onClick: U
                      }, [
                        O("input", {
                          value: C.end,
                          required: "",
                          class: "opacity-0 absolute w-full h-full pointer-events-none"
                        }, null, 8, pP),
                        qr(" " + pe(C.start && C.end ? `${C.start}-${C.end}` : "請選定區間"), 1)
                      ], 8, vP)
                    ]),
                    _: 1
                  }, 8, ["modelValue", "timezone"])
                ])) : X("", !0)
              ]),
              g(m) != "" ? (D(), k("label", mP, [
                Ke(O("select", {
                  class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                  "onUpdate:modelValue": $[9] || ($[9] = (U) => Ie(f) ? f.value = U : null),
                  onChange: b,
                  required: ""
                }, [
                  hP,
                  (D(!0), k(re, null, Te(g(to), (U, C) => (D(), k(re, { key: C }, [
                    Number.isInteger(U) ? X("", !0) : (D(), k("option", {
                      key: 0,
                      value: U
                    }, pe(g(r)(C)), 9, gP))
                  ], 64))), 128))
                ], 544), [
                  [at, g(f)]
                ])
              ])) : X("", !0),
              g(f) != _n ? (D(), k("label", _P, [
                Ke(O("select", {
                  class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                  "onUpdate:modelValue": $[10] || ($[10] = (U) => Ie(T) ? T.value = U : null),
                  onChange: w,
                  required: ""
                }, [
                  yP,
                  (D(!0), k(re, null, Te(g(he), (U, C) => (D(), k(re, { key: C }, [
                    Number.isInteger(U) ? X("", !0) : (D(), k("option", {
                      key: 0,
                      value: U
                    }, pe(g(r)(`condition${C}`)), 9, bP))
                  ], 64))), 128))
                ], 544), [
                  [at, g(T)]
                ])
              ])) : X("", !0),
              g(T) != _n ? (D(), k("div", wP, [
                _e(wn, {
                  modelValue: g(a).value,
                  "onUpdate:modelValue": $[11] || ($[11] = (U) => g(a).value = U),
                  type: "number",
                  required: !0
                }, null, 8, ["modelValue"]),
                O("span", EP, pe(g(a).valueType === g(he).Percentage ? "%" : "元"), 1)
              ])) : X("", !0)
            ])) : X("", !0),
            g(m) != _n ? (D(), k("div", DP, [
              Ke(O("input", {
                type: "checkbox",
                "onUpdate:modelValue": $[12] || ($[12] = (U) => z.modelValue.comparison = U),
                id: "comparison"
              }, null, 512), [
                [Qs, z.modelValue.comparison]
              ]),
              OP
            ])) : X("", !0)
          ])
        ];
      }),
      _: 1
    }, 8, ["title"]));
  }
}), TP = {
  key: 0,
  class: "flex items-center justify-center gap-3"
}, kP = /* @__PURE__ */ O("div", { class: "h-[1px] flex-1 bg-light-3" }, null, -1), NP = /* @__PURE__ */ O("p", { class: "p4-b to-dark-4" }, "且", -1), IP = /* @__PURE__ */ O("div", { class: "h-[1px] flex-1 bg-light-3" }, null, -1), AP = [
  kP,
  NP,
  IP
], CP = {
  key: 0,
  class: "absolute top-0 left-0 pt-4 right-0 bottom-0 w-full h-full flex justify-center bg-dark-3 bg-opacity-50 z-[2]"
}, SP = { class: "sticky flex flex-col max-h-[80%] bg-light-5 rounded-xs shadow-01 w-4/5 p-4 h-fit top-4" }, PP = /* @__PURE__ */ O("span", { class: "p1-b flex justify-center mb-1" }, "請選擇條件", -1), LP = { key: 0 }, MP = {
  key: 1,
  class: "flex flex-col gap-2 mt-2 overflow-y-auto flex-1"
}, xP = ["onClick"], RP = { class: "flex flex-col flex-1" }, FP = { class: "p3-b" }, YP = { class: "p4-r text-dark-4" }, VP = { class: "flex gap-3 items-center justify-center mt-4" }, UP = /* @__PURE__ */ Se({
  __name: "Condition",
  setup(e) {
    const t = ne(!1), n = Ye("eventData"), r = ne(n.value.conditions ?? []);
    Ce(
      r,
      (h) => {
        n.value.conditions = h;
      },
      { deep: !0 }
    );
    const a = () => {
      r.value.push({}), t.value = !1;
    }, s = async (h) => {
      const m = await ja({
        method: "get",
        url: `${ya()}/heybear/api/automation/ad-events/template/${h}`,
        withCredentials: !0,
        headers: {
          Authorization: ba()
        }
      });
      r.value.push(m.data.data), t.value = !1;
    }, o = (h) => {
      r.value.splice(h, 1);
    }, i = ne(""), l = ne([]), c = A(() => "title"), u = async () => {
      const h = await ja({
        method: "get",
        url: `${ya()}/heybear/api/automation/template`,
        params: { type: 2 },
        withCredentials: !0,
        headers: {
          Authorization: ba()
        }
      });
      l.value = h.data.data;
    }, d = A(() => {
      const h = i.value.toLowerCase();
      return l.value.filter(
        (m) => m[c.value].toLowerCase().includes(h)
      );
    }), v = ne(!1), p = async () => {
      t.value = !0, v.value = !0, await u(), v.value = !1;
    };
    return (h, m) => (D(), k(re, null, [
      (D(!0), k(re, null, Te(g(r), (y, f) => (D(), k(re, { key: f }, [
        _e($P, {
          index: f,
          modelValue: g(r)[f],
          "onUpdate:modelValue": (b) => g(r)[f] = b,
          onRemoveItem: (b) => o(f)
        }, null, 8, ["index", "modelValue", "onUpdate:modelValue", "onRemoveItem"]),
        f + 1 !== g(r).length ? (D(), k("div", TP, AP)) : X("", !0)
      ], 64))), 128)),
      O("div", {
        class: "p3-b text-true-blue-3 flex ml-auto w-fit cursor-pointer hover:text-true-blue-2",
        onClick: p
      }, " + 加入條件 "),
      g(t) ? (D(), k("div", CP, [
        O("div", SP, [
          PP,
          _e(wn, {
            placeholder: "輸入關鍵字搜尋 ex: 轉換數",
            modelValue: g(i),
            "onUpdate:modelValue": m[0] || (m[0] = (y) => Ie(i) ? i.value = y : null)
          }, null, 8, ["modelValue"]),
          h.getAccountLoading ? (D(), k("div", LP, "loading...")) : (D(), k("div", MP, [
            (D(!0), k(re, null, Te(g(d), (y) => (D(), k("div", {
              class: "border border-dark-5 rounded items-center py-1 px-3 flex gap-1 hover:bg-true-blue-5 cursor-pointer",
              key: y.id,
              onClick: (f) => s(y.id)
            }, [
              O("div", RP, [
                O("span", FP, pe(y.title), 1),
                O("span", YP, pe(y.description), 1)
              ]),
              _e(g(RA), {
                size: 18,
                class: "text-dark-3",
                weight: "bold"
              })
            ], 8, xP))), 128))
          ])),
          O("div", {
            class: "border ml-auto mt-2 border-true-blue-3 text-true-blue-3 rounded px-1 w-fit p3-r cursor-pointer hover:text-true-blue-2 hover:border-true-blue-2",
            onClick: a
          }, " 自訂 "),
          O("div", VP, [
            O("div", {
              class: "p3-b flex cursor-pointer items-center gap-1 rounded bg-true-blue-2 px-1.5 py-0.5 text-light-5 hover:bg-true-blue-1",
              onClick: m[1] || (m[1] = (y) => t.value = !1)
            }, " 確定 ")
          ])
        ])
      ])) : X("", !0)
    ], 64));
  }
}), jP = { class: "flex items-center gap-2" }, BP = /* @__PURE__ */ O("span", { class: "p4-b" }, "以電子郵件寄出結果", -1), HP = /* @__PURE__ */ O("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), WP = ["value"], GP = /* @__PURE__ */ Se({
  __name: "Notification",
  setup(e) {
    const { t } = Er.global, n = Ye("eventData"), r = ne(
      n.value.notify ?? {
        email: eo.All
      }
    );
    return Ce(
      r,
      (a) => {
        n.value.notify = a;
      },
      { deep: !0, immediate: !0 }
    ), (a, s) => (D(), k("div", null, [
      O("label", jP, [
        BP,
        Ke(O("select", {
          class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
          "onUpdate:modelValue": s[0] || (s[0] = (o) => g(r).email = o)
        }, [
          HP,
          (D(!0), k(re, null, Te(g(Ba), (o, i) => (D(), k(re, { key: i }, [
            Number.isInteger(o) ? X("", !0) : (D(), k("option", {
              key: 0,
              value: Number(i)
            }, pe(g(t)(`mail${o}`)), 9, WP))
          ], 64))), 128))
        ], 512), [
          [at, g(r).email]
        ])
      ])
    ]));
  }
}), Cd = (e) => (Ud("data-v-4c81d84b"), e = e(), jd(), e), zP = ["onSubmit"], KP = /* @__PURE__ */ Cd(() => /* @__PURE__ */ O("div", { class: "p1-b" }, "建立自動化規則", -1)), qP = /* @__PURE__ */ Cd(() => /* @__PURE__ */ O("span", { class: "p4-b" }, "規則名稱*", -1)), ZP = {
  key: 0,
  class: "text-red-1"
}, XP = 100, JP = /* @__PURE__ */ Se({
  __name: "TCEventEditorApp",
  props: {
    data: {}
  },
  emits: ["update:data"],
  setup(e, { expose: t, emit: n }) {
    const r = e, a = A(() => JSON.parse(r.data || "{}")), s = (u) => {
      const d = Object.fromEntries(
        Object.entries(u).filter(([v, p]) => p !== null)
      );
      return JSON.stringify(d, null, 4);
    }, o = ne([]), i = (u) => {
      u.preventDefault(), n("update:data", s(a.value));
    }, l = () => {
      var u;
      for (const d of document.getElementById("editor-container").querySelectorAll("[required]"))
        if (!d.reportValidity())
          throw new Error("未填寫完畢");
      (u = c.value) == null || u.click();
    };
    En("eventData", a), En("checkDataValid", o);
    const c = ne();
    return t({
      saveData: l
    }), (u, d) => r.data ? (D(), k("form", {
      key: 0,
      class: "flex flex-col gap-5 relative p-5 h-fit",
      id: "editor-container",
      onSubmit: lu(i, ["prevent"])
    }, [
      KP,
      _e(Fr, { title: "基本資料" }, {
        default: tt(() => [
          O("div", null, [
            qP,
            _e(wn, {
              modelValue: g(a).title,
              "onUpdate:modelValue": d[0] || (d[0] = (v) => g(a).title = v),
              maxLength: XP,
              required: !0
            }, null, 8, ["modelValue"])
          ])
        ]),
        _: 1
      }),
      _e(Fr, { title: "執行時間" }, {
        default: tt(() => [
          _e(AN, {
            frequency: g(a).frequency,
            "onUpdate:frequency": d[1] || (d[1] = (v) => g(a).frequency = v),
            interval: g(a).interval,
            "onUpdate:interval": d[2] || (d[2] = (v) => g(a).interval = v)
          }, null, 8, ["frequency", "interval"])
        ]),
        _: 1
      }),
      _e(Fr, { title: "通知" }, {
        default: tt(() => [
          _e(GP)
        ]),
        _: 1
      }),
      _e(NS),
      _e(UP),
      g(o).length ? (D(), k("span", ZP, "資料未填寫完整")) : X("", !0),
      O("button", {
        ref_key: "submitBtn",
        ref: c,
        class: "p-2 px-3 rounded bg-slate-100 hover:bg-sky-500 hover:text-white hidden"
      }, " 保存 ", 512)
    ], 40, zP)) : X("", !0);
  }
});
const QP = /* @__PURE__ */ no(JP, [["__scopeId", "data-v-4c81d84b"]]), ca = {
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
function sL(e) {
  const t = new Date(e.start).toLocaleString("zh-TW", {
    hour12: !1
  }), n = e.due ? new Date(e.due).toLocaleString("zh-TW", { hour12: !1 }) : null;
  if (e.frequency === xe.Never)
    return `於 ${t} 起`;
  const r = ca.frequency[xe[e.frequency]], a = e.weekdays ? e.weekdays.map((c) => ca.weekdays[Ot[c]]).join("、") : "", s = e.weekOrdinal ? e.weekOrdinal.map((c) => ca.weekOrdinal[tn[c]]).join("、") : "", o = e.monthDate ? `第${e.monthDate.join("、")}號`.replace("-1", "最後一天") : "", i = e.yearMonths ? `第${e.yearMonths.reverse().join("、")}個月` : "";
  let l = `於 ${t} 起，${ca.every}${e.interval}${r}`;
  if (s || a || o || i) {
    l += "的";
    const c = [];
    i && c.push(`${i}的`), o && c.push(o), s && c.push(`${s}的`), a && c.push(a), l += c.join("");
  }
  return n && (l += `，並於 ${n} 結束循環`), l;
}
function oL(e) {
  if (!e)
    return "";
  const { t } = Er.global;
  let n, r;
  return e.client === Ge.Google ? r = _t : r = mt, e.targetType === $t.ForAll && (n = "所有的" + t(`${Ge[e.client]}${r[e.adLevel]}`)), e.targetType === $t.ForActive && (n = "已開啟的" + t(`${Ge[e.client]}${r[e.adLevel]}`)), e.targetType === $t.ForID && (n = `${e.target.length}個` + t(`${Ge[e.client]}${r[e.adLevel]}`)), n;
}
function iL(e) {
  const { t } = Er.global;
  return e != null && e.email ? t(`mail${Ba[e.email]}`) : "";
}
const eL = (e) => {
  e.component("TCEventEditorApp", QP);
}, lL = {
  install: eL
};
export {
  QP as TCEventEditorApp,
  aL as TCEventItems,
  lL as default,
  oL as getActionDescription,
  sL as getDescription,
  iL as getNotifyDescription,
  nL as setApiUrlBase,
  rL as setToken
};
