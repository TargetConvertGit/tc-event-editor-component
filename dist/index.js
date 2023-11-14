import { defineComponent as Se, openBlock as D, createElementBlock as T, createElementVNode as $, toDisplayString as pe, ref as ne, watchEffect as Xs, computed as C, watch as Ae, onBeforeUnmount as Ld, Fragment as re, unref as h, renderList as ke, createBlock as Ue, createCommentVNode as X, withDirectives as Ke, isRef as Ie, vModelSelect as at, reactive as Js, onMounted as Vn, onUnmounted as Kr, toRefs as Pd, h as qn, provide as En, inject as Ye, resolveDynamicComponent as ou, normalizeProps as iu, mergeProps as un, renderSlot as Ct, normalizeClass as Ze, normalizeStyle as Pr, withKeys as ei, createVNode as ge, withCtx as tt, nextTick as Zn, toRef as us, resolveComponent as Cn, Transition as lu, createTextVNode as qr, withModifiers as uu, guardReactiveProps as Md, resolveDirective as xd, toHandlers as Rd, vModelCheckbox as Qs, getCurrentInstance as Yr, effectScope as Fd, shallowRef as Yd, onBeforeMount as Vd, Text as Ud, Teleport as cu, pushScopeId as jd, popScopeId as Bd } from "vue";
let du = "", fu = "";
function QL(e) {
  du = e;
}
function eP(e) {
  fu = e;
}
function ba() {
  return du;
}
function ya() {
  return fu;
}
class Hd {
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
var eo = /* @__PURE__ */ ((e) => (e[e.None = -1] = "None", e[e.All = 1] = "All", e[e.Error = 2] = "Error", e))(eo || {}), vu = /* @__PURE__ */ ((e) => (e[e.Off = 0] = "Off", e[e.On = 1] = "On", e))(vu || {}), Ge = /* @__PURE__ */ ((e) => (e[e.Google = 1] = "Google", e[e.Facebook = 2] = "Facebook", e))(Ge || {}), _t = /* @__PURE__ */ ((e) => (e[e.Campaign = 2] = "Campaign", e[e.AdGroup = 3] = "AdGroup", e[e.Ad = 4] = "Ad", e[e.AdTag = 5] = "AdTag", e))(_t || {}), mt = /* @__PURE__ */ ((e) => (e[e.Campaign = 2] = "Campaign", e[e.AdGroup = 3] = "AdGroup", e[e.Ad = 4] = "Ad", e[e.AdTag = 5] = "AdTag", e))(mt || {}), $t = /* @__PURE__ */ ((e) => (e[e.ForAll = 1] = "ForAll", e[e.ForID = 2] = "ForID", e[e.ForActive = 3] = "ForActive", e))($t || {}), Xn = /* @__PURE__ */ ((e) => (e[e.Account = 1] = "Account", e[e.Campaign = 2] = "Campaign", e[e.AdGroup = 3] = "AdGroup", e))(Xn || {}), Jn = /* @__PURE__ */ ((e) => (e[e.Account = 1] = "Account", e[e.Campaign = 2] = "Campaign", e[e.AdGroup = 3] = "AdGroup", e))(Jn || {}), xe = /* @__PURE__ */ ((e) => (e[e.Never = -1] = "Never", e[e.Hour = 1] = "Hour", e[e.Day = 2] = "Day", e[e.Week = 3] = "Week", e[e.Month = 4] = "Month", e[e.Annual = 5] = "Annual", e))(xe || {}), Ot = /* @__PURE__ */ ((e) => (e[e.Sunday = 0] = "Sunday", e[e.Monday = 1] = "Monday", e[e.Tuesday = 2] = "Tuesday", e[e.Wednesday = 3] = "Wednesday", e[e.Thursday = 4] = "Thursday", e[e.Friday = 5] = "Friday", e[e.Saturday = 6] = "Saturday", e[e.Weekday = -1] = "Weekday", e[e.Weekend = -2] = "Weekend", e))(Ot || {}), tn = /* @__PURE__ */ ((e) => (e[e.First = 1] = "First", e[e.Second = 2] = "Second", e[e.Third = 3] = "Third", e[e.Fourth = 4] = "Fourth", e[e.Fifth = 5] = "Fifth", e[e.Last = -1] = "Last", e))(tn || {}), pt = /* @__PURE__ */ ((e) => (e[e.January = 1] = "January", e[e.February = 2] = "February", e[e.March = 3] = "March", e[e.April = 4] = "April", e[e.May = 5] = "May", e[e.June = 6] = "June", e[e.July = 7] = "July", e[e.August = 8] = "August", e[e.September = 9] = "September", e[e.October = 10] = "October", e[e.November = 11] = "November", e[e.December = 12] = "December", e))(pt || {}), ie = /* @__PURE__ */ ((e) => (e[e.SetNewBudget = 1] = "SetNewBudget", e[e.IncreaseBudget = 2] = "IncreaseBudget", e[e.LowerBudget = 3] = "LowerBudget", e[e.OpenProject = 4] = "OpenProject", e[e.SuspendProject = 5] = "SuspendProject", e[e.None = -1] = "None", e))(ie || {}), wa = /* @__PURE__ */ ((e) => (e.DailyBudget = "dailyBudget", e.TotalBudget = "totalBudget", e))(wa || {}), he = /* @__PURE__ */ ((e) => (e.Value = "value", e.Percentage = "percentage", e))(he || {}), ve = /* @__PURE__ */ ((e) => (e.BudgetRemaining = "accountBudget", e.BudgetCap = "budgetCap", e.Clicks = "clicks", e.Impressions = "impressions", e.Cpc = "cpc", e.Spend = "cost", e.Conversions = "conversions", e.ConversionSpend = "conversionsValue", e.ReturnOnADSpending = "roas", e))(ve || {}), Bt = /* @__PURE__ */ ((e) => (e[e.Today = 1] = "Today", e[e.Yesterday = 2] = "Yesterday", e[e.Last3Days = 3] = "Last3Days", e[e.Last7Days = 4] = "Last7Days", e[e.ThisMonth = 5] = "ThisMonth", e[e.SpecifiedTime = -1] = "SpecifiedTime", e))(Bt || {}), to = /* @__PURE__ */ ((e) => (e.MoreThan = ">", e.GreaterOrEqualTo = ">=", e.Equal = "==", e.LessThan = "<", e.LessThanOrEqualTo = "<=", e))(to || {}), Ba = /* @__PURE__ */ ((e) => (e[e.AbnormalityOrError = 1] = "AbnormalityOrError", e[e.Error = 2] = "Error", e[e.None = -1] = "None", e))(Ba || {});
const tP = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
  EventHelper: Hd,
  FrequencyType: xe,
  MonthType: pt,
  OperationType: to,
  ToggleNotify: vu,
  ValueType: he,
  WeekOrdinalWordsType: tn,
  WeekdaysType: Ot,
  emailType: Ba
}, Symbol.toStringTag, { value: "Module" })), Wd = { class: "flex" }, Gd = ["checked", "id"], zd = ["for"], Kd = /* @__PURE__ */ Se({
  __name: "CheckBox",
  props: {
    label: {},
    checked: { type: Boolean },
    fieldId: {}
  },
  emits: ["update:checked"],
  setup(e, { emit: t }) {
    return (n, r) => (D(), T("div", Wd, [
      $("input", {
        onInput: r[0] || (r[0] = (a) => n.$emit("update:checked", a.target.checked)),
        type: "checkbox",
        checked: n.checked,
        id: n.fieldId,
        class: "hidden"
      }, null, 40, Gd),
      $("label", {
        for: n.fieldId,
        class: "p4-b text-dark-3 cursor-pointer rounded border hover:bg-light-4 border-dark-5 px-1 py-0.5 flex justify-center items-center text-dark-2 min-w-[1.75rem] min-h-[1.75rem]"
      }, pe(n.label), 9, zd)
    ]));
  }
});
const no = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, a] of t)
    n[r] = a;
  return n;
}, ti = /* @__PURE__ */ no(Kd, [["__scopeId", "data-v-80a7d175"]]), qd = {
  key: 0,
  class: "flex gap-1.5 flex-wrap"
}, Zd = {
  key: 1,
  class: "flex gap-2 items-center"
}, Xd = /* @__PURE__ */ $("span", { class: "p4-b" }, "指定", -1), Jd = ["value"], Qd = {
  key: 2,
  class: "flex gap-4 flex-wrap border-light-1 border rounded p-2"
}, ef = /* @__PURE__ */ Se({
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
    const n = e, r = ne(n.monthDate), a = ne(n.weekOrdinal), s = ne(n.weekdays), o = ne(n.yearMonths), i = (y, d, b = !1) => {
      if (b) {
        d.findIndex((k) => k === y) === -1 ? d.push(y) : d.splice(d.indexOf(y), 1), d.sort((k, w) => k - w);
        return;
      }
      d.value.findIndex((k) => k === y) === -1 ? d.value.push(y) : d.value.splice(d.value.indexOf(y), 1), d.value.sort((k, w) => k - w);
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
    ]), f = ne([
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
    ]), v = C(() => {
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
    }), p = C(() => n.type === xe.Month || n.type === xe.Annual ? !0 : (r.value = [], a.value = [], s.value = [], o.value = [], !1)), g = ne([
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
    ]), m = ne(g.value[0]);
    return Ae(m, (y) => {
      if (y.id === 0) {
        r.value = [];
        return;
      }
      if (y.id === 1) {
        a.value = [], s.value = [];
        return;
      }
    }), Ae(
      () => n.type,
      (y) => {
        (y === xe.Month || y === xe.Annual) && (y != xe.Annual && (o.value = []), u.value && u.value.length > 0 ? m.value = g.value[1] : m.value = g.value[0]);
      },
      { immediate: !0 }
    ), Ld(() => {
      r.value = [], a.value = [], s.value = [], o.value = [];
    }), (y, d) => (D(), T(re, null, [
      y.type === h(xe).Annual ? (D(), T("div", qd, [
        (D(!0), T(re, null, ke(h(f), (b) => {
          var k;
          return D(), Ue(ti, {
            key: b.id,
            checked: (k = h(o)) == null ? void 0 : k.includes(b.id),
            "onUpdate:checked": (w) => i(b.id, h(o), !0),
            fieldId: b.name,
            label: b.name
          }, null, 8, ["checked", "onUpdate:checked", "fieldId", "label"]);
        }), 128))
      ])) : X("", !0),
      h(p) ? (D(), T("div", Zd, [
        Xd,
        Ke($("select", {
          class: "p4-b text-dark-3 flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
          "onUpdate:modelValue": d[0] || (d[0] = (b) => Ie(m) ? m.value = b : null)
        }, [
          (D(!0), T(re, null, ke(h(g), (b, k) => (D(), T("option", {
            key: k,
            value: b
          }, pe(b.name), 9, Jd))), 128))
        ], 512), [
          [at, h(m)]
        ])
      ])) : X("", !0),
      h(v) ? (D(), T("div", Qd, [
        (D(!0), T(re, null, ke(h(v), (b) => (D(), T("div", {
          class: "flex gap-1 flex-wrap",
          key: b
        }, [
          (D(!0), T(re, null, ke(b.options, (k) => {
            var w;
            return D(), Ue(ti, {
              key: k.id,
              checked: (w = b.key.value) == null ? void 0 : w.includes(k.id),
              "onUpdate:checked": (L) => i(k.id, b.key),
              fieldId: k.name,
              label: k.name
            }, null, 8, ["checked", "onUpdate:checked", "fieldId", "label"]);
          }), 128))
        ]))), 128))
      ])) : X("", !0)
    ], 64));
  }
});
var ht = "top", At = "bottom", St = "right", gt = "left", ro = "auto", Zr = [ht, At, St, gt], ar = "start", Vr = "end", tf = "clippingParents", pu = "viewport", kr = "popper", nf = "reference", ni = /* @__PURE__ */ Zr.reduce(function(e, t) {
  return e.concat([t + "-" + ar, t + "-" + Vr]);
}, []), mu = /* @__PURE__ */ [].concat(Zr, [ro]).reduce(function(e, t) {
  return e.concat([t, t + "-" + ar, t + "-" + Vr]);
}, []), rf = "beforeRead", af = "read", sf = "afterRead", of = "beforeMain", lf = "main", uf = "afterMain", cf = "beforeWrite", df = "write", ff = "afterWrite", vf = [rf, af, sf, of, lf, uf, cf, df, ff];
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
function Pn(e) {
  var t = wt(e).Element;
  return e instanceof t || e instanceof Element;
}
function Tt(e) {
  var t = wt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function ao(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = wt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function pf(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, a = t.attributes[n] || {}, s = t.elements[n];
    !Tt(s) || !Kt(s) || (Object.assign(s.style, r), Object.keys(a).forEach(function(o) {
      var i = a[o];
      i === !1 ? s.removeAttribute(o) : s.setAttribute(o, i === !0 ? "" : i);
    }));
  });
}
function mf(e) {
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
      !Tt(a) || !Kt(a) || (Object.assign(a.style, i), Object.keys(s).forEach(function(l) {
        a.removeAttribute(l);
      }));
    });
  };
}
const hf = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: pf,
  effect: mf,
  requires: ["computeStyles"]
};
function zt(e) {
  return e.split("-")[0];
}
var Ln = Math.max, Ea = Math.min, sr = Math.round;
function Es() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function hu() {
  return !/^((?!chrome|android).)*safari/i.test(Es());
}
function or(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), a = 1, s = 1;
  t && Tt(e) && (a = e.offsetWidth > 0 && sr(r.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && sr(r.height) / e.offsetHeight || 1);
  var o = Pn(e) ? wt(e) : window, i = o.visualViewport, l = !hu() && n, c = (r.left + (l && i ? i.offsetLeft : 0)) / a, u = (r.top + (l && i ? i.offsetTop : 0)) / s, f = r.width / a, v = r.height / s;
  return {
    width: f,
    height: v,
    top: u,
    right: c + f,
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
function gu(e, t) {
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
function gf(e) {
  return ["table", "td", "th"].indexOf(Kt(e)) >= 0;
}
function $n(e) {
  return ((Pn(e) ? e.ownerDocument : (
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
function ri(e) {
  return !Tt(e) || // https://github.com/popperjs/popper-core/issues/837
  sn(e).position === "fixed" ? null : e.offsetParent;
}
function _f(e) {
  var t = /firefox/i.test(Es()), n = /Trident/i.test(Es());
  if (n && Tt(e)) {
    var r = sn(e);
    if (r.position === "fixed")
      return null;
  }
  var a = Ha(e);
  for (ao(a) && (a = a.host); Tt(a) && ["html", "body"].indexOf(Kt(a)) < 0; ) {
    var s = sn(a);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none")
      return a;
    a = a.parentNode;
  }
  return null;
}
function Xr(e) {
  for (var t = wt(e), n = ri(e); n && gf(n) && sn(n).position === "static"; )
    n = ri(n);
  return n && (Kt(n) === "html" || Kt(n) === "body" && sn(n).position === "static") ? t : n || _f(e) || t;
}
function oo(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Mr(e, t, n) {
  return Ln(e, Ea(t, n));
}
function bf(e, t, n) {
  var r = Mr(e, t, n);
  return r > n ? n : r;
}
function _u() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function bu(e) {
  return Object.assign({}, _u(), e);
}
function yu(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var yf = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, bu(typeof t != "number" ? t : yu(t, Zr));
};
function wf(e) {
  var t, n = e.state, r = e.name, a = e.options, s = n.elements.arrow, o = n.modifiersData.popperOffsets, i = zt(n.placement), l = oo(i), c = [gt, St].indexOf(i) >= 0, u = c ? "height" : "width";
  if (!(!s || !o)) {
    var f = yf(a.padding, n), v = so(s), p = l === "y" ? ht : gt, g = l === "y" ? At : St, m = n.rects.reference[u] + n.rects.reference[l] - o[l] - n.rects.popper[u], y = o[l] - n.rects.reference[l], d = Xr(s), b = d ? l === "y" ? d.clientHeight || 0 : d.clientWidth || 0 : 0, k = m / 2 - y / 2, w = f[p], L = b - v[u] - f[g], N = b / 2 - v[u] / 2 + k, x = Mr(w, N, L), S = l;
    n.modifiersData[r] = (t = {}, t[S] = x, t.centerOffset = x - N, t);
  }
}
function Ef(e) {
  var t = e.state, n = e.options, r = n.element, a = r === void 0 ? "[data-popper-arrow]" : r;
  a != null && (typeof a == "string" && (a = t.elements.popper.querySelector(a), !a) || gu(t.elements.popper, a) && (t.elements.arrow = a));
}
const Df = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: wf,
  effect: Ef,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function ir(e) {
  return e.split("-")[1];
}
var Of = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function $f(e, t) {
  var n = e.x, r = e.y, a = t.devicePixelRatio || 1;
  return {
    x: sr(n * a) / a || 0,
    y: sr(r * a) / a || 0
  };
}
function ai(e) {
  var t, n = e.popper, r = e.popperRect, a = e.placement, s = e.variation, o = e.offsets, i = e.position, l = e.gpuAcceleration, c = e.adaptive, u = e.roundOffsets, f = e.isFixed, v = o.x, p = v === void 0 ? 0 : v, g = o.y, m = g === void 0 ? 0 : g, y = typeof u == "function" ? u({
    x: p,
    y: m
  }) : {
    x: p,
    y: m
  };
  p = y.x, m = y.y;
  var d = o.hasOwnProperty("x"), b = o.hasOwnProperty("y"), k = gt, w = ht, L = window;
  if (c) {
    var N = Xr(n), x = "clientHeight", S = "clientWidth";
    if (N === wt(n) && (N = $n(n), sn(N).position !== "static" && i === "absolute" && (x = "scrollHeight", S = "scrollWidth")), N = N, a === ht || (a === gt || a === St) && s === Vr) {
      w = At;
      var P = f && N === L && L.visualViewport ? L.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        N[x]
      );
      m -= P - r.height, m *= l ? 1 : -1;
    }
    if (a === gt || (a === ht || a === At) && s === Vr) {
      k = St;
      var R = f && N === L && L.visualViewport ? L.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        N[S]
      );
      p -= R - r.width, p *= l ? 1 : -1;
    }
  }
  var B = Object.assign({
    position: i
  }, c && Of), Y = u === !0 ? $f({
    x: p,
    y: m
  }, wt(n)) : {
    x: p,
    y: m
  };
  if (p = Y.x, m = Y.y, l) {
    var q;
    return Object.assign({}, B, (q = {}, q[w] = b ? "0" : "", q[k] = d ? "0" : "", q.transform = (L.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + m + "px)" : "translate3d(" + p + "px, " + m + "px, 0)", q));
  }
  return Object.assign({}, B, (t = {}, t[w] = b ? m + "px" : "", t[k] = d ? p + "px" : "", t.transform = "", t));
}
function kf(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, a = r === void 0 ? !0 : r, s = n.adaptive, o = s === void 0 ? !0 : s, i = n.roundOffsets, l = i === void 0 ? !0 : i, c = {
    placement: zt(t.placement),
    variation: ir(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: a,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, ai(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: o,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, ai(Object.assign({}, c, {
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
  fn: kf,
  data: {}
};
var aa = {
  passive: !0
};
function Nf(e) {
  var t = e.state, n = e.instance, r = e.options, a = r.scroll, s = a === void 0 ? !0 : a, o = r.resize, i = o === void 0 ? !0 : o, l = wt(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && c.forEach(function(u) {
    u.addEventListener("scroll", n.update, aa);
  }), i && l.addEventListener("resize", n.update, aa), function() {
    s && c.forEach(function(u) {
      u.removeEventListener("scroll", n.update, aa);
    }), i && l.removeEventListener("resize", n.update, aa);
  };
}
const If = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Nf,
  data: {}
};
var Cf = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function da(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Cf[t];
  });
}
var Af = {
  start: "end",
  end: "start"
};
function si(e) {
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
function Sf(e, t) {
  var n = wt(e), r = $n(e), a = n.visualViewport, s = r.clientWidth, o = r.clientHeight, i = 0, l = 0;
  if (a) {
    s = a.width, o = a.height;
    var c = hu();
    (c || !c && t === "fixed") && (i = a.offsetLeft, l = a.offsetTop);
  }
  return {
    width: s,
    height: o,
    x: i + lo(e),
    y: l
  };
}
function Lf(e) {
  var t, n = $n(e), r = io(e), a = (t = e.ownerDocument) == null ? void 0 : t.body, s = Ln(n.scrollWidth, n.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), o = Ln(n.scrollHeight, n.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), i = -r.scrollLeft + lo(e), l = -r.scrollTop;
  return sn(a || n).direction === "rtl" && (i += Ln(n.clientWidth, a ? a.clientWidth : 0) - s), {
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
function wu(e) {
  return ["html", "body", "#document"].indexOf(Kt(e)) >= 0 ? e.ownerDocument.body : Tt(e) && uo(e) ? e : wu(Ha(e));
}
function xr(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = wu(e), a = r === ((n = e.ownerDocument) == null ? void 0 : n.body), s = wt(r), o = a ? [s].concat(s.visualViewport || [], uo(r) ? r : []) : r, i = t.concat(o);
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
function oi(e, t, n) {
  return t === pu ? Ds(Sf(e, n)) : Pn(t) ? Pf(t, n) : Ds(Lf($n(e)));
}
function Mf(e) {
  var t = xr(Ha(e)), n = ["absolute", "fixed"].indexOf(sn(e).position) >= 0, r = n && Tt(e) ? Xr(e) : e;
  return Pn(r) ? t.filter(function(a) {
    return Pn(a) && gu(a, r) && Kt(a) !== "body";
  }) : [];
}
function xf(e, t, n, r) {
  var a = t === "clippingParents" ? Mf(e) : [].concat(t), s = [].concat(a, [n]), o = s[0], i = s.reduce(function(l, c) {
    var u = oi(e, c, r);
    return l.top = Ln(u.top, l.top), l.right = Ea(u.right, l.right), l.bottom = Ea(u.bottom, l.bottom), l.left = Ln(u.left, l.left), l;
  }, oi(e, o, r));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function Eu(e) {
  var t = e.reference, n = e.element, r = e.placement, a = r ? zt(r) : null, s = r ? ir(r) : null, o = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2, l;
  switch (a) {
    case ht:
      l = {
        x: o,
        y: t.y - n.height
      };
      break;
    case At:
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
  var n = t, r = n.placement, a = r === void 0 ? e.placement : r, s = n.strategy, o = s === void 0 ? e.strategy : s, i = n.boundary, l = i === void 0 ? tf : i, c = n.rootBoundary, u = c === void 0 ? pu : c, f = n.elementContext, v = f === void 0 ? kr : f, p = n.altBoundary, g = p === void 0 ? !1 : p, m = n.padding, y = m === void 0 ? 0 : m, d = bu(typeof y != "number" ? y : yu(y, Zr)), b = v === kr ? nf : kr, k = e.rects.popper, w = e.elements[g ? b : v], L = xf(Pn(w) ? w : w.contextElement || $n(e.elements.popper), l, u, o), N = or(e.elements.reference), x = Eu({
    reference: N,
    element: k,
    strategy: "absolute",
    placement: a
  }), S = Ds(Object.assign({}, k, x)), P = v === kr ? S : N, R = {
    top: L.top - P.top + d.top,
    bottom: P.bottom - L.bottom + d.bottom,
    left: L.left - P.left + d.left,
    right: P.right - L.right + d.right
  }, B = e.modifiersData.offset;
  if (v === kr && B) {
    var Y = B[a];
    Object.keys(R).forEach(function(q) {
      var ce = [St, At].indexOf(q) >= 0 ? 1 : -1, ee = [ht, At].indexOf(q) >= 0 ? "y" : "x";
      R[q] += Y[ee] * ce;
    });
  }
  return R;
}
function Rf(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, a = n.boundary, s = n.rootBoundary, o = n.padding, i = n.flipVariations, l = n.allowedAutoPlacements, c = l === void 0 ? mu : l, u = ir(r), f = u ? i ? ni : ni.filter(function(g) {
    return ir(g) === u;
  }) : Zr, v = f.filter(function(g) {
    return c.indexOf(g) >= 0;
  });
  v.length === 0 && (v = f);
  var p = v.reduce(function(g, m) {
    return g[m] = Ur(e, {
      placement: m,
      boundary: a,
      rootBoundary: s,
      padding: o
    })[zt(m)], g;
  }, {});
  return Object.keys(p).sort(function(g, m) {
    return p[g] - p[m];
  });
}
function Ff(e) {
  if (zt(e) === ro)
    return [];
  var t = da(e);
  return [si(e), t, si(t)];
}
function Yf(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var a = n.mainAxis, s = a === void 0 ? !0 : a, o = n.altAxis, i = o === void 0 ? !0 : o, l = n.fallbackPlacements, c = n.padding, u = n.boundary, f = n.rootBoundary, v = n.altBoundary, p = n.flipVariations, g = p === void 0 ? !0 : p, m = n.allowedAutoPlacements, y = t.options.placement, d = zt(y), b = d === y, k = l || (b || !g ? [da(y)] : Ff(y)), w = [y].concat(k).reduce(function(A, Z) {
      return A.concat(zt(Z) === ro ? Rf(t, {
        placement: Z,
        boundary: u,
        rootBoundary: f,
        padding: c,
        flipVariations: g,
        allowedAutoPlacements: m
      }) : Z);
    }, []), L = t.rects.reference, N = t.rects.popper, x = /* @__PURE__ */ new Map(), S = !0, P = w[0], R = 0; R < w.length; R++) {
      var B = w[R], Y = zt(B), q = ir(B) === ar, ce = [ht, At].indexOf(Y) >= 0, ee = ce ? "width" : "height", le = Ur(t, {
        placement: B,
        boundary: u,
        rootBoundary: f,
        altBoundary: v,
        padding: c
      }), _e = ce ? q ? St : gt : q ? At : ht;
      L[ee] > N[ee] && (_e = da(_e));
      var Ee = da(_e), z = [];
      if (s && z.push(le[Y] <= 0), i && z.push(le[_e] <= 0, le[Ee] <= 0), z.every(function(A) {
        return A;
      })) {
        P = B, S = !1;
        break;
      }
      x.set(B, z);
    }
    if (S)
      for (var O = g ? 3 : 1, j = function(Z) {
        var se = w.find(function(Te) {
          var De = x.get(Te);
          if (De)
            return De.slice(0, Z).every(function(ye) {
              return ye;
            });
        });
        if (se)
          return P = se, "break";
      }, te = O; te > 0; te--) {
        var V = j(te);
        if (V === "break")
          break;
      }
    t.placement !== P && (t.modifiersData[r]._skip = !0, t.placement = P, t.reset = !0);
  }
}
const Vf = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Yf,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function ii(e, t, n) {
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
function li(e) {
  return [ht, St, At, gt].some(function(t) {
    return e[t] >= 0;
  });
}
function Uf(e) {
  var t = e.state, n = e.name, r = t.rects.reference, a = t.rects.popper, s = t.modifiersData.preventOverflow, o = Ur(t, {
    elementContext: "reference"
  }), i = Ur(t, {
    altBoundary: !0
  }), l = ii(o, r), c = ii(i, a, s), u = li(l), f = li(c);
  t.modifiersData[n] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: c,
    isReferenceHidden: u,
    hasPopperEscaped: f
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": u,
    "data-popper-escaped": f
  });
}
const jf = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Uf
};
function Bf(e, t, n) {
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
function Hf(e) {
  var t = e.state, n = e.options, r = e.name, a = n.offset, s = a === void 0 ? [0, 0] : a, o = mu.reduce(function(u, f) {
    return u[f] = Bf(f, t.rects, s), u;
  }, {}), i = o[t.placement], l = i.x, c = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += c), t.modifiersData[r] = o;
}
const Wf = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Hf
};
function Gf(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Eu({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const zf = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Gf,
  data: {}
};
function Kf(e) {
  return e === "x" ? "y" : "x";
}
function qf(e) {
  var t = e.state, n = e.options, r = e.name, a = n.mainAxis, s = a === void 0 ? !0 : a, o = n.altAxis, i = o === void 0 ? !1 : o, l = n.boundary, c = n.rootBoundary, u = n.altBoundary, f = n.padding, v = n.tether, p = v === void 0 ? !0 : v, g = n.tetherOffset, m = g === void 0 ? 0 : g, y = Ur(t, {
    boundary: l,
    rootBoundary: c,
    padding: f,
    altBoundary: u
  }), d = zt(t.placement), b = ir(t.placement), k = !b, w = oo(d), L = Kf(w), N = t.modifiersData.popperOffsets, x = t.rects.reference, S = t.rects.popper, P = typeof m == "function" ? m(Object.assign({}, t.rects, {
    placement: t.placement
  })) : m, R = typeof P == "number" ? {
    mainAxis: P,
    altAxis: P
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, P), B = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, Y = {
    x: 0,
    y: 0
  };
  if (N) {
    if (s) {
      var q, ce = w === "y" ? ht : gt, ee = w === "y" ? At : St, le = w === "y" ? "height" : "width", _e = N[w], Ee = _e + y[ce], z = _e - y[ee], O = p ? -S[le] / 2 : 0, j = b === ar ? x[le] : S[le], te = b === ar ? -S[le] : -x[le], V = t.elements.arrow, A = p && V ? so(V) : {
        width: 0,
        height: 0
      }, Z = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : _u(), se = Z[ce], Te = Z[ee], De = Mr(0, x[le], A[le]), ye = k ? x[le] / 2 - O - De - se - R.mainAxis : j - De - se - R.mainAxis, Be = k ? -x[le] / 2 + O + De + Te + R.mainAxis : te + De + Te + R.mainAxis, je = t.elements.arrow && Xr(t.elements.arrow), nt = je ? w === "y" ? je.clientTop || 0 : je.clientLeft || 0 : 0, E = (q = B == null ? void 0 : B[w]) != null ? q : 0, _ = _e + ye - E - nt, M = _e + Be - E, Q = Mr(p ? Ea(Ee, _) : Ee, _e, p ? Ln(z, M) : z);
      N[w] = Q, Y[w] = Q - _e;
    }
    if (i) {
      var oe, be = w === "x" ? ht : gt, ot = w === "x" ? At : St, qe = N[L], Et = L === "y" ? "height" : "width", Vt = qe + y[be], Le = qe - y[ot], F = [ht, gt].indexOf(d) !== -1, W = (oe = B == null ? void 0 : B[L]) != null ? oe : 0, He = F ? Vt : qe - x[Et] - S[Et] - W + R.altAxis, We = F ? qe + x[Et] + S[Et] - W - R.altAxis : Le, Ut = p && F ? bf(He, qe, We) : Mr(p ? He : Vt, qe, p ? We : Le);
      N[L] = Ut, Y[L] = Ut - qe;
    }
    t.modifiersData[r] = Y;
  }
}
const Zf = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: qf,
  requiresIfExists: ["offset"]
};
function Xf(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Jf(e) {
  return e === wt(e) || !Tt(e) ? io(e) : Xf(e);
}
function Qf(e) {
  var t = e.getBoundingClientRect(), n = sr(t.width) / e.offsetWidth || 1, r = sr(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function ev(e, t, n) {
  n === void 0 && (n = !1);
  var r = Tt(t), a = Tt(t) && Qf(t), s = $n(t), o = or(e, a, n), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((Kt(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  uo(s)) && (i = Jf(t)), Tt(t) ? (l = or(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : s && (l.x = lo(s))), {
    x: o.left + i.scrollLeft - l.x,
    y: o.top + i.scrollTop - l.y,
    width: o.width,
    height: o.height
  };
}
function tv(e) {
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
function nv(e) {
  var t = tv(e);
  return vf.reduce(function(n, r) {
    return n.concat(t.filter(function(a) {
      return a.phase === r;
    }));
  }, []);
}
function rv(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function av(e) {
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
var ui = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function ci() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function sv(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, a = t.defaultOptions, s = a === void 0 ? ui : a;
  return function(i, l, c) {
    c === void 0 && (c = s);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, ui, s),
      modifiersData: {},
      elements: {
        reference: i,
        popper: l
      },
      attributes: {},
      styles: {}
    }, f = [], v = !1, p = {
      state: u,
      setOptions: function(d) {
        var b = typeof d == "function" ? d(u.options) : d;
        m(), u.options = Object.assign({}, s, u.options, b), u.scrollParents = {
          reference: Pn(i) ? xr(i) : i.contextElement ? xr(i.contextElement) : [],
          popper: xr(l)
        };
        var k = nv(av([].concat(r, u.options.modifiers)));
        return u.orderedModifiers = k.filter(function(w) {
          return w.enabled;
        }), g(), p.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!v) {
          var d = u.elements, b = d.reference, k = d.popper;
          if (ci(b, k)) {
            u.rects = {
              reference: ev(b, Xr(k), u.options.strategy === "fixed"),
              popper: so(k)
            }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(R) {
              return u.modifiersData[R.name] = Object.assign({}, R.data);
            });
            for (var w = 0; w < u.orderedModifiers.length; w++) {
              if (u.reset === !0) {
                u.reset = !1, w = -1;
                continue;
              }
              var L = u.orderedModifiers[w], N = L.fn, x = L.options, S = x === void 0 ? {} : x, P = L.name;
              typeof N == "function" && (u = N({
                state: u,
                options: S,
                name: P,
                instance: p
              }) || u);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: rv(function() {
        return new Promise(function(y) {
          p.forceUpdate(), y(u);
        });
      }),
      destroy: function() {
        m(), v = !0;
      }
    };
    if (!ci(i, l))
      return p;
    p.setOptions(c).then(function(y) {
      !v && c.onFirstUpdate && c.onFirstUpdate(y);
    });
    function g() {
      u.orderedModifiers.forEach(function(y) {
        var d = y.name, b = y.options, k = b === void 0 ? {} : b, w = y.effect;
        if (typeof w == "function") {
          var L = w({
            state: u,
            name: d,
            instance: p,
            options: k
          }), N = function() {
          };
          f.push(L || N);
        }
      });
    }
    function m() {
      f.forEach(function(y) {
        return y();
      }), f = [];
    }
    return p;
  };
}
var ov = [If, zf, Tf, hf, Wf, Vf, Zf, Df, jf], iv = /* @__PURE__ */ sv({
  defaultModifiers: ov
}), lv = Object.defineProperty, uv = (e, t, n) => t in e ? lv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ae = (e, t, n) => (uv(e, typeof t != "symbol" ? t + "" : t, n), n);
const cn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, a] of t)
    n[r] = a;
  return n;
}, cv = {}, dv = {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  viewBox: "0 0 24 24"
}, fv = /* @__PURE__ */ $("polyline", { points: "9 18 15 12 9 6" }, null, -1), vv = [
  fv
];
function pv(e, t) {
  return D(), T("svg", dv, vv);
}
const mv = /* @__PURE__ */ cn(cv, [["render", pv]]), hv = {}, gv = {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  viewBox: "0 0 24 24"
}, _v = /* @__PURE__ */ $("polyline", { points: "15 18 9 12 15 6" }, null, -1), bv = [
  _v
];
function yv(e, t) {
  return D(), T("svg", gv, bv);
}
const wv = /* @__PURE__ */ cn(hv, [["render", yv]]), Ev = {}, Dv = {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  viewBox: "0 0 24 24"
}, Ov = /* @__PURE__ */ $("polyline", { points: "6 9 12 15 18 9" }, null, -1), $v = [
  Ov
];
function kv(e, t) {
  return D(), T("svg", Dv, $v);
}
const Tv = /* @__PURE__ */ cn(Ev, [["render", kv]]), Nv = {}, Iv = {
  fill: "none",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  viewBox: "0 0 24 24"
}, Cv = /* @__PURE__ */ $("path", { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" }, null, -1), Av = [
  Cv
];
function Sv(e, t) {
  return D(), T("svg", Iv, Av);
}
const Lv = /* @__PURE__ */ cn(Nv, [["render", Sv]]), Pv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IconChevronDown: Tv,
  IconChevronLeft: wv,
  IconChevronRight: mv,
  IconClock: Lv
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
    const t = e, n = C(() => t.width || t.size), r = C(() => t.height || t.size), a = C(() => Pv[`Icon${t.name}`]);
    return (s, o) => (D(), Ue(ou(h(a)), {
      width: h(n),
      height: h(r),
      class: "vc-base-icon"
    }, null, 8, ["width", "height"]));
  }
});
function Du() {
  return typeof window < "u";
}
function Mv(e) {
  return Du() && e in window;
}
function xv(e) {
  const t = ne(!1), n = C(() => t.value ? "dark" : "light");
  let r, a;
  function s(p) {
    t.value = p.matches;
  }
  function o() {
    Mv("matchMedia") && (r = window.matchMedia("(prefers-color-scheme: dark)"), r.addEventListener("change", s), t.value = r.matches);
  }
  function i() {
    const { selector: p = ":root", darkClass: g = "dark" } = e.value, m = document.querySelector(p);
    t.value = m.classList.contains(g);
  }
  function l(p) {
    const { selector: g = ":root", darkClass: m = "dark" } = p;
    if (Du() && g && m) {
      const y = document.querySelector(g);
      y && (a = new MutationObserver(i), a.observe(y, {
        attributes: !0,
        attributeFilter: ["class"]
      }), t.value = y.classList.contains(m));
    }
  }
  function c() {
    f();
    const p = typeof e.value;
    p === "string" && e.value.toLowerCase() === "system" ? o() : p === "object" ? l(e.value) : t.value = !!e.value;
  }
  const u = Ae(() => e.value, () => c(), {
    immediate: !0
  });
  function f() {
    r && (r.removeEventListener("change", s), r = void 0), a && (a.disconnect(), a = void 0);
  }
  function v() {
    f(), u();
  }
  return Kr(() => v()), {
    isDark: t,
    displayMode: n,
    cleanup: v
  };
}
var sa = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Rv(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Fv = typeof sa == "object" && sa && sa.Object === Object && sa, Ou = Fv, Yv = Ou, Vv = typeof self == "object" && self && self.Object === Object && self, Uv = Yv || Vv || Function("return this")(), Zt = Uv, jv = Zt, Bv = jv.Symbol, Wa = Bv, di = Wa, $u = Object.prototype, Hv = $u.hasOwnProperty, Wv = $u.toString, Tr = di ? di.toStringTag : void 0;
function Gv(e) {
  var t = Hv.call(e, Tr), n = e[Tr];
  try {
    e[Tr] = void 0;
    var r = !0;
  } catch {
  }
  var a = Wv.call(e);
  return r && (t ? e[Tr] = n : delete e[Tr]), a;
}
var zv = Gv, Kv = Object.prototype, qv = Kv.toString;
function Zv(e) {
  return qv.call(e);
}
var Xv = Zv, fi = Wa, Jv = zv, Qv = Xv, ep = "[object Null]", tp = "[object Undefined]", vi = fi ? fi.toStringTag : void 0;
function np(e) {
  return e == null ? e === void 0 ? tp : ep : vi && vi in Object(e) ? Jv(e) : Qv(e);
}
var Xt = np;
function rp(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var dn = rp, ap = Xt, sp = dn, op = "[object AsyncFunction]", ip = "[object Function]", lp = "[object GeneratorFunction]", up = "[object Proxy]";
function cp(e) {
  if (!sp(e))
    return !1;
  var t = ap(e);
  return t == ip || t == lp || t == op || t == up;
}
var Un = cp, dp = Array.isArray, Ft = dp;
function fp(e) {
  return e != null && typeof e == "object";
}
var Yt = fp, vp = Xt, pp = Ft, mp = Yt, hp = "[object String]";
function gp(e) {
  return typeof e == "string" || !pp(e) && mp(e) && vp(e) == hp;
}
var Ht = gp, _p = Xt, bp = Yt, yp = "[object Boolean]";
function wp(e) {
  return e === !0 || e === !1 || bp(e) && _p(e) == yp;
}
var Ep = wp, Dp = Xt, Op = Yt, $p = "[object Number]";
function kp(e) {
  return typeof e == "number" || Op(e) && Dp(e) == $p;
}
var Rt = kp, Tp = Xt, Np = Yt, Ip = "[object Date]";
function Cp(e) {
  return Np(e) && Tp(e) == Ip;
}
var Ap = Cp;
function Sp(e) {
  return function(t) {
    return e(t);
  };
}
var ku = Sp, jr = {}, Lp = {
  get exports() {
    return jr;
  },
  set exports(e) {
    jr = e;
  }
};
(function(e, t) {
  var n = Ou, r = t && !t.nodeType && t, a = r && !0 && e && !e.nodeType && e, s = a && a.exports === r, o = s && n.process, i = function() {
    try {
      var l = a && a.require && a.require("util").types;
      return l || o && o.binding && o.binding("util");
    } catch {
    }
  }();
  e.exports = i;
})(Lp, jr);
var Pp = Ap, Mp = ku, pi = jr, mi = pi && pi.isDate, xp = mi ? Mp(mi) : Pp, Rp = xp, Fp = Xt, Yp = Yt, Vp = "[object Symbol]";
function Up(e) {
  return typeof e == "symbol" || Yp(e) && Fp(e) == Vp;
}
var co = Up, jp = Ft, Bp = co, Hp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Wp = /^\w*$/;
function Gp(e, t) {
  if (jp(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Bp(e) ? !0 : Wp.test(e) || !Hp.test(e) || t != null && e in Object(t);
}
var fo = Gp, zp = Zt, Kp = zp["__core-js_shared__"], qp = Kp, cs = qp, hi = function() {
  var e = /[^.]+$/.exec(cs && cs.keys && cs.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Zp(e) {
  return !!hi && hi in e;
}
var Xp = Zp, Jp = Function.prototype, Qp = Jp.toString;
function em(e) {
  if (e != null) {
    try {
      return Qp.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Tu = em, tm = Un, nm = Xp, rm = dn, am = Tu, sm = /[\\^$.*+?()[\]{}|]/g, om = /^\[object .+?Constructor\]$/, im = Function.prototype, lm = Object.prototype, um = im.toString, cm = lm.hasOwnProperty, dm = RegExp(
  "^" + um.call(cm).replace(sm, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function fm(e) {
  if (!rm(e) || nm(e))
    return !1;
  var t = tm(e) ? dm : om;
  return t.test(am(e));
}
var vm = fm;
function pm(e, t) {
  return e == null ? void 0 : e[t];
}
var mm = pm, hm = vm, gm = mm;
function _m(e, t) {
  var n = gm(e, t);
  return hm(n) ? n : void 0;
}
var jn = _m, bm = jn, ym = bm(Object, "create"), Ga = ym, gi = Ga;
function wm() {
  this.__data__ = gi ? gi(null) : {}, this.size = 0;
}
var Em = wm;
function Dm(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Om = Dm, $m = Ga, km = "__lodash_hash_undefined__", Tm = Object.prototype, Nm = Tm.hasOwnProperty;
function Im(e) {
  var t = this.__data__;
  if ($m) {
    var n = t[e];
    return n === km ? void 0 : n;
  }
  return Nm.call(t, e) ? t[e] : void 0;
}
var Cm = Im, Am = Ga, Sm = Object.prototype, Lm = Sm.hasOwnProperty;
function Pm(e) {
  var t = this.__data__;
  return Am ? t[e] !== void 0 : Lm.call(t, e);
}
var Mm = Pm, xm = Ga, Rm = "__lodash_hash_undefined__";
function Fm(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = xm && t === void 0 ? Rm : t, this;
}
var Ym = Fm, Vm = Em, Um = Om, jm = Cm, Bm = Mm, Hm = Ym;
function vr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
vr.prototype.clear = Vm;
vr.prototype.delete = Um;
vr.prototype.get = jm;
vr.prototype.has = Bm;
vr.prototype.set = Hm;
var Wm = vr;
function Gm() {
  this.__data__ = [], this.size = 0;
}
var zm = Gm;
function Km(e, t) {
  return e === t || e !== e && t !== t;
}
var pr = Km, qm = pr;
function Zm(e, t) {
  for (var n = e.length; n--; )
    if (qm(e[n][0], t))
      return n;
  return -1;
}
var za = Zm, Xm = za, Jm = Array.prototype, Qm = Jm.splice;
function eh(e) {
  var t = this.__data__, n = Xm(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : Qm.call(t, n, 1), --this.size, !0;
}
var th = eh, nh = za;
function rh(e) {
  var t = this.__data__, n = nh(t, e);
  return n < 0 ? void 0 : t[n][1];
}
var ah = rh, sh = za;
function oh(e) {
  return sh(this.__data__, e) > -1;
}
var ih = oh, lh = za;
function uh(e, t) {
  var n = this.__data__, r = lh(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
var ch = uh, dh = zm, fh = th, vh = ah, ph = ih, mh = ch;
function mr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
mr.prototype.clear = dh;
mr.prototype.delete = fh;
mr.prototype.get = vh;
mr.prototype.has = ph;
mr.prototype.set = mh;
var Ka = mr, hh = jn, gh = Zt, _h = hh(gh, "Map"), vo = _h, _i = Wm, bh = Ka, yh = vo;
function wh() {
  this.size = 0, this.__data__ = {
    hash: new _i(),
    map: new (yh || bh)(),
    string: new _i()
  };
}
var Eh = wh;
function Dh(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var Oh = Dh, $h = Oh;
function kh(e, t) {
  var n = e.__data__;
  return $h(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
var qa = kh, Th = qa;
function Nh(e) {
  var t = Th(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var Ih = Nh, Ch = qa;
function Ah(e) {
  return Ch(this, e).get(e);
}
var Sh = Ah, Lh = qa;
function Ph(e) {
  return Lh(this, e).has(e);
}
var Mh = Ph, xh = qa;
function Rh(e, t) {
  var n = xh(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
var Fh = Rh, Yh = Eh, Vh = Ih, Uh = Sh, jh = Mh, Bh = Fh;
function hr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
hr.prototype.clear = Yh;
hr.prototype.delete = Vh;
hr.prototype.get = Uh;
hr.prototype.has = jh;
hr.prototype.set = Bh;
var po = hr, Nu = po, Hh = "Expected a function";
function mo(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Hh);
  var n = function() {
    var r = arguments, a = t ? t.apply(this, r) : r[0], s = n.cache;
    if (s.has(a))
      return s.get(a);
    var o = e.apply(this, r);
    return n.cache = s.set(a, o) || s, o;
  };
  return n.cache = new (mo.Cache || Nu)(), n;
}
mo.Cache = Nu;
var Wh = mo, Gh = Wh, zh = 500;
function Kh(e) {
  var t = Gh(e, function(r) {
    return n.size === zh && n.clear(), r;
  }), n = t.cache;
  return t;
}
var qh = Kh, Zh = qh, Xh = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Jh = /\\(\\)?/g, Qh = Zh(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Xh, function(n, r, a, s) {
    t.push(a ? s.replace(Jh, "$1") : r || n);
  }), t;
}), eg = Qh;
function tg(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, a = Array(r); ++n < r; )
    a[n] = t(e[n], n, e);
  return a;
}
var ng = tg, bi = Wa, rg = ng, ag = Ft, sg = co, og = 1 / 0, yi = bi ? bi.prototype : void 0, wi = yi ? yi.toString : void 0;
function Iu(e) {
  if (typeof e == "string")
    return e;
  if (ag(e))
    return rg(e, Iu) + "";
  if (sg(e))
    return wi ? wi.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -og ? "-0" : t;
}
var ig = Iu, lg = ig;
function ug(e) {
  return e == null ? "" : lg(e);
}
var cg = ug, dg = Ft, fg = fo, vg = eg, pg = cg;
function mg(e, t) {
  return dg(e) ? e : fg(e, t) ? [e] : vg(pg(e));
}
var Cu = mg, hg = co, gg = 1 / 0;
function _g(e) {
  if (typeof e == "string" || hg(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -gg ? "-0" : t;
}
var Za = _g, bg = Cu, yg = Za;
function wg(e, t) {
  t = bg(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[yg(t[n++])];
  return n && n == r ? e : void 0;
}
var Au = wg, Eg = Au;
function Dg(e, t, n) {
  var r = e == null ? void 0 : Eg(e, t);
  return r === void 0 ? n : r;
}
var An = Dg, Og = jn, $g = function() {
  try {
    var e = Og(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Su = $g, Ei = Su;
function kg(e, t, n) {
  t == "__proto__" && Ei ? Ei(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
var Xa = kg, Tg = Xa, Ng = pr, Ig = Object.prototype, Cg = Ig.hasOwnProperty;
function Ag(e, t, n) {
  var r = e[t];
  (!(Cg.call(e, t) && Ng(r, n)) || n === void 0 && !(t in e)) && Tg(e, t, n);
}
var Sg = Ag, Lg = 9007199254740991, Pg = /^(?:0|[1-9]\d*)$/;
function Mg(e, t) {
  var n = typeof e;
  return t = t ?? Lg, !!t && (n == "number" || n != "symbol" && Pg.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var ho = Mg;
function xg(e) {
  return function(t, n, r) {
    for (var a = -1, s = Object(t), o = r(t), i = o.length; i--; ) {
      var l = o[e ? i : ++a];
      if (n(s[l], l, s) === !1)
        break;
    }
    return t;
  };
}
var Rg = xg, Fg = Rg, Yg = Fg(), Lu = Yg;
function Vg(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var Ug = Vg, jg = Xt, Bg = Yt, Hg = "[object Arguments]";
function Wg(e) {
  return Bg(e) && jg(e) == Hg;
}
var Gg = Wg, Di = Gg, zg = Yt, Pu = Object.prototype, Kg = Pu.hasOwnProperty, qg = Pu.propertyIsEnumerable, Zg = Di(function() {
  return arguments;
}()) ? Di : function(e) {
  return zg(e) && Kg.call(e, "callee") && !qg.call(e, "callee");
}, go = Zg, ur = {}, Xg = {
  get exports() {
    return ur;
  },
  set exports(e) {
    ur = e;
  }
};
function Jg() {
  return !1;
}
var Qg = Jg;
(function(e, t) {
  var n = Zt, r = Qg, a = t && !t.nodeType && t, s = a && !0 && e && !e.nodeType && e, o = s && s.exports === a, i = o ? n.Buffer : void 0, l = i ? i.isBuffer : void 0, c = l || r;
  e.exports = c;
})(Xg, ur);
var e1 = 9007199254740991;
function t1(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= e1;
}
var _o = t1, n1 = Xt, r1 = _o, a1 = Yt, s1 = "[object Arguments]", o1 = "[object Array]", i1 = "[object Boolean]", l1 = "[object Date]", u1 = "[object Error]", c1 = "[object Function]", d1 = "[object Map]", f1 = "[object Number]", v1 = "[object Object]", p1 = "[object RegExp]", m1 = "[object Set]", h1 = "[object String]", g1 = "[object WeakMap]", _1 = "[object ArrayBuffer]", b1 = "[object DataView]", y1 = "[object Float32Array]", w1 = "[object Float64Array]", E1 = "[object Int8Array]", D1 = "[object Int16Array]", O1 = "[object Int32Array]", $1 = "[object Uint8Array]", k1 = "[object Uint8ClampedArray]", T1 = "[object Uint16Array]", N1 = "[object Uint32Array]", Fe = {};
Fe[y1] = Fe[w1] = Fe[E1] = Fe[D1] = Fe[O1] = Fe[$1] = Fe[k1] = Fe[T1] = Fe[N1] = !0;
Fe[s1] = Fe[o1] = Fe[_1] = Fe[i1] = Fe[b1] = Fe[l1] = Fe[u1] = Fe[c1] = Fe[d1] = Fe[f1] = Fe[v1] = Fe[p1] = Fe[m1] = Fe[h1] = Fe[g1] = !1;
function I1(e) {
  return a1(e) && r1(e.length) && !!Fe[n1(e)];
}
var C1 = I1, A1 = C1, S1 = ku, Oi = jr, $i = Oi && Oi.isTypedArray, L1 = $i ? S1($i) : A1, bo = L1, P1 = Ug, M1 = go, x1 = Ft, R1 = ur, F1 = ho, Y1 = bo, V1 = Object.prototype, U1 = V1.hasOwnProperty;
function j1(e, t) {
  var n = x1(e), r = !n && M1(e), a = !n && !r && R1(e), s = !n && !r && !a && Y1(e), o = n || r || a || s, i = o ? P1(e.length, String) : [], l = i.length;
  for (var c in e)
    (t || U1.call(e, c)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    F1(c, l))) && i.push(c);
  return i;
}
var Mu = j1, B1 = Object.prototype;
function H1(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || B1;
  return e === n;
}
var yo = H1;
function W1(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var xu = W1, G1 = xu, z1 = G1(Object.keys, Object), K1 = z1, q1 = yo, Z1 = K1, X1 = Object.prototype, J1 = X1.hasOwnProperty;
function Q1(e) {
  if (!q1(e))
    return Z1(e);
  var t = [];
  for (var n in Object(e))
    J1.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
var e_ = Q1, t_ = Un, n_ = _o;
function r_(e) {
  return e != null && n_(e.length) && !t_(e);
}
var Jr = r_, a_ = Mu, s_ = e_, o_ = Jr;
function i_(e) {
  return o_(e) ? a_(e) : s_(e);
}
var wo = i_, l_ = Lu, u_ = wo;
function c_(e, t) {
  return e && l_(e, t, u_);
}
var Ru = c_, d_ = Ka;
function f_() {
  this.__data__ = new d_(), this.size = 0;
}
var v_ = f_;
function p_(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
var m_ = p_;
function h_(e) {
  return this.__data__.get(e);
}
var g_ = h_;
function __(e) {
  return this.__data__.has(e);
}
var b_ = __, y_ = Ka, w_ = vo, E_ = po, D_ = 200;
function O_(e, t) {
  var n = this.__data__;
  if (n instanceof y_) {
    var r = n.__data__;
    if (!w_ || r.length < D_ - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new E_(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
var $_ = O_, k_ = Ka, T_ = v_, N_ = m_, I_ = g_, C_ = b_, A_ = $_;
function gr(e) {
  var t = this.__data__ = new k_(e);
  this.size = t.size;
}
gr.prototype.clear = T_;
gr.prototype.delete = N_;
gr.prototype.get = I_;
gr.prototype.has = C_;
gr.prototype.set = A_;
var Eo = gr, S_ = "__lodash_hash_undefined__";
function L_(e) {
  return this.__data__.set(e, S_), this;
}
var P_ = L_;
function M_(e) {
  return this.__data__.has(e);
}
var x_ = M_, R_ = po, F_ = P_, Y_ = x_;
function Da(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new R_(); ++t < n; )
    this.add(e[t]);
}
Da.prototype.add = Da.prototype.push = F_;
Da.prototype.has = Y_;
var V_ = Da;
function U_(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
var Fu = U_;
function j_(e, t) {
  return e.has(t);
}
var B_ = j_, H_ = V_, W_ = Fu, G_ = B_, z_ = 1, K_ = 2;
function q_(e, t, n, r, a, s) {
  var o = n & z_, i = e.length, l = t.length;
  if (i != l && !(o && l > i))
    return !1;
  var c = s.get(e), u = s.get(t);
  if (c && u)
    return c == t && u == e;
  var f = -1, v = !0, p = n & K_ ? new H_() : void 0;
  for (s.set(e, t), s.set(t, e); ++f < i; ) {
    var g = e[f], m = t[f];
    if (r)
      var y = o ? r(m, g, f, t, e, s) : r(g, m, f, e, t, s);
    if (y !== void 0) {
      if (y)
        continue;
      v = !1;
      break;
    }
    if (p) {
      if (!W_(t, function(d, b) {
        if (!G_(p, b) && (g === d || a(g, d, n, r, s)))
          return p.push(b);
      })) {
        v = !1;
        break;
      }
    } else if (!(g === m || a(g, m, n, r, s))) {
      v = !1;
      break;
    }
  }
  return s.delete(e), s.delete(t), v;
}
var Yu = q_, Z_ = Zt, X_ = Z_.Uint8Array, Vu = X_;
function J_(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, a) {
    n[++t] = [a, r];
  }), n;
}
var Q_ = J_;
function eb(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var tb = eb, ki = Wa, Ti = Vu, nb = pr, rb = Yu, ab = Q_, sb = tb, ob = 1, ib = 2, lb = "[object Boolean]", ub = "[object Date]", cb = "[object Error]", db = "[object Map]", fb = "[object Number]", vb = "[object RegExp]", pb = "[object Set]", mb = "[object String]", hb = "[object Symbol]", gb = "[object ArrayBuffer]", _b = "[object DataView]", Ni = ki ? ki.prototype : void 0, ds = Ni ? Ni.valueOf : void 0;
function bb(e, t, n, r, a, s, o) {
  switch (n) {
    case _b:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case gb:
      return !(e.byteLength != t.byteLength || !s(new Ti(e), new Ti(t)));
    case lb:
    case ub:
    case fb:
      return nb(+e, +t);
    case cb:
      return e.name == t.name && e.message == t.message;
    case vb:
    case mb:
      return e == t + "";
    case db:
      var i = ab;
    case pb:
      var l = r & ob;
      if (i || (i = sb), e.size != t.size && !l)
        return !1;
      var c = o.get(e);
      if (c)
        return c == t;
      r |= ib, o.set(e, t);
      var u = rb(i(e), i(t), r, a, s, o);
      return o.delete(e), u;
    case hb:
      if (ds)
        return ds.call(e) == ds.call(t);
  }
  return !1;
}
var yb = bb;
function wb(e, t) {
  for (var n = -1, r = t.length, a = e.length; ++n < r; )
    e[a + n] = t[n];
  return e;
}
var Eb = wb, Db = Eb, Ob = Ft;
function $b(e, t, n) {
  var r = t(e);
  return Ob(e) ? r : Db(r, n(e));
}
var kb = $b;
function Tb(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, a = 0, s = []; ++n < r; ) {
    var o = e[n];
    t(o, n, e) && (s[a++] = o);
  }
  return s;
}
var Nb = Tb;
function Ib() {
  return [];
}
var Cb = Ib, Ab = Nb, Sb = Cb, Lb = Object.prototype, Pb = Lb.propertyIsEnumerable, Ii = Object.getOwnPropertySymbols, Mb = Ii ? function(e) {
  return e == null ? [] : (e = Object(e), Ab(Ii(e), function(t) {
    return Pb.call(e, t);
  }));
} : Sb, xb = Mb, Rb = kb, Fb = xb, Yb = wo;
function Vb(e) {
  return Rb(e, Yb, Fb);
}
var Ub = Vb, Ci = Ub, jb = 1, Bb = Object.prototype, Hb = Bb.hasOwnProperty;
function Wb(e, t, n, r, a, s) {
  var o = n & jb, i = Ci(e), l = i.length, c = Ci(t), u = c.length;
  if (l != u && !o)
    return !1;
  for (var f = l; f--; ) {
    var v = i[f];
    if (!(o ? v in t : Hb.call(t, v)))
      return !1;
  }
  var p = s.get(e), g = s.get(t);
  if (p && g)
    return p == t && g == e;
  var m = !0;
  s.set(e, t), s.set(t, e);
  for (var y = o; ++f < l; ) {
    v = i[f];
    var d = e[v], b = t[v];
    if (r)
      var k = o ? r(b, d, v, t, e, s) : r(d, b, v, e, t, s);
    if (!(k === void 0 ? d === b || a(d, b, n, r, s) : k)) {
      m = !1;
      break;
    }
    y || (y = v == "constructor");
  }
  if (m && !y) {
    var w = e.constructor, L = t.constructor;
    w != L && "constructor" in e && "constructor" in t && !(typeof w == "function" && w instanceof w && typeof L == "function" && L instanceof L) && (m = !1);
  }
  return s.delete(e), s.delete(t), m;
}
var Gb = Wb, zb = jn, Kb = Zt, qb = zb(Kb, "DataView"), Zb = qb, Xb = jn, Jb = Zt, Qb = Xb(Jb, "Promise"), ey = Qb, ty = jn, ny = Zt, ry = ty(ny, "Set"), ay = ry, sy = jn, oy = Zt, iy = sy(oy, "WeakMap"), ly = iy, Os = Zb, $s = vo, ks = ey, Ts = ay, Ns = ly, Uu = Xt, _r = Tu, Ai = "[object Map]", uy = "[object Object]", Si = "[object Promise]", Li = "[object Set]", Pi = "[object WeakMap]", Mi = "[object DataView]", cy = _r(Os), dy = _r($s), fy = _r(ks), vy = _r(Ts), py = _r(Ns), In = Uu;
(Os && In(new Os(new ArrayBuffer(1))) != Mi || $s && In(new $s()) != Ai || ks && In(ks.resolve()) != Si || Ts && In(new Ts()) != Li || Ns && In(new Ns()) != Pi) && (In = function(e) {
  var t = Uu(e), n = t == uy ? e.constructor : void 0, r = n ? _r(n) : "";
  if (r)
    switch (r) {
      case cy:
        return Mi;
      case dy:
        return Ai;
      case fy:
        return Si;
      case vy:
        return Li;
      case py:
        return Pi;
    }
  return t;
});
var my = In, fs = Eo, hy = Yu, gy = yb, _y = Gb, xi = my, Ri = Ft, Fi = ur, by = bo, yy = 1, Yi = "[object Arguments]", Vi = "[object Array]", oa = "[object Object]", wy = Object.prototype, Ui = wy.hasOwnProperty;
function Ey(e, t, n, r, a, s) {
  var o = Ri(e), i = Ri(t), l = o ? Vi : xi(e), c = i ? Vi : xi(t);
  l = l == Yi ? oa : l, c = c == Yi ? oa : c;
  var u = l == oa, f = c == oa, v = l == c;
  if (v && Fi(e)) {
    if (!Fi(t))
      return !1;
    o = !0, u = !1;
  }
  if (v && !u)
    return s || (s = new fs()), o || by(e) ? hy(e, t, n, r, a, s) : gy(e, t, l, n, r, a, s);
  if (!(n & yy)) {
    var p = u && Ui.call(e, "__wrapped__"), g = f && Ui.call(t, "__wrapped__");
    if (p || g) {
      var m = p ? e.value() : e, y = g ? t.value() : t;
      return s || (s = new fs()), a(m, y, n, r, s);
    }
  }
  return v ? (s || (s = new fs()), _y(e, t, n, r, a, s)) : !1;
}
var Dy = Ey, Oy = Dy, ji = Yt;
function ju(e, t, n, r, a) {
  return e === t ? !0 : e == null || t == null || !ji(e) && !ji(t) ? e !== e && t !== t : Oy(e, t, n, r, ju, a);
}
var Bu = ju, $y = Eo, ky = Bu, Ty = 1, Ny = 2;
function Iy(e, t, n, r) {
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
      var f = new $y();
      if (r)
        var v = r(c, u, l, e, t, f);
      if (!(v === void 0 ? ky(u, c, Ty | Ny, r, f) : v))
        return !1;
    }
  }
  return !0;
}
var Cy = Iy, Ay = dn;
function Sy(e) {
  return e === e && !Ay(e);
}
var Hu = Sy, Ly = Hu, Py = wo;
function My(e) {
  for (var t = Py(e), n = t.length; n--; ) {
    var r = t[n], a = e[r];
    t[n] = [r, a, Ly(a)];
  }
  return t;
}
var xy = My;
function Ry(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
var Wu = Ry, Fy = Cy, Yy = xy, Vy = Wu;
function Uy(e) {
  var t = Yy(e);
  return t.length == 1 && t[0][2] ? Vy(t[0][0], t[0][1]) : function(n) {
    return n === e || Fy(n, e, t);
  };
}
var jy = Uy;
function By(e, t) {
  return e != null && t in Object(e);
}
var Hy = By, Wy = Cu, Gy = go, zy = Ft, Ky = ho, qy = _o, Zy = Za;
function Xy(e, t, n) {
  t = Wy(t, e);
  for (var r = -1, a = t.length, s = !1; ++r < a; ) {
    var o = Zy(t[r]);
    if (!(s = e != null && n(e, o)))
      break;
    e = e[o];
  }
  return s || ++r != a ? s : (a = e == null ? 0 : e.length, !!a && qy(a) && Ky(o, a) && (zy(e) || Gy(e)));
}
var Gu = Xy, Jy = Hy, Qy = Gu;
function e0(e, t) {
  return e != null && Qy(e, t, Jy);
}
var t0 = e0, n0 = Bu, r0 = An, a0 = t0, s0 = fo, o0 = Hu, i0 = Wu, l0 = Za, u0 = 1, c0 = 2;
function d0(e, t) {
  return s0(e) && o0(t) ? i0(l0(e), t) : function(n) {
    var r = r0(n, e);
    return r === void 0 && r === t ? a0(n, e) : n0(t, r, u0 | c0);
  };
}
var f0 = d0;
function v0(e) {
  return e;
}
var Do = v0;
function p0(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var m0 = p0, h0 = Au;
function g0(e) {
  return function(t) {
    return h0(t, e);
  };
}
var _0 = g0, b0 = m0, y0 = _0, w0 = fo, E0 = Za;
function D0(e) {
  return w0(e) ? b0(E0(e)) : y0(e);
}
var O0 = D0, $0 = jy, k0 = f0, T0 = Do, N0 = Ft, I0 = O0;
function C0(e) {
  return typeof e == "function" ? e : e == null ? T0 : typeof e == "object" ? N0(e) ? k0(e[0], e[1]) : $0(e) : I0(e);
}
var zu = C0, A0 = Xa, S0 = Ru, L0 = zu;
function P0(e, t) {
  var n = {};
  return t = L0(t), S0(e, function(r, a, s) {
    A0(n, a, t(r, a, s));
  }), n;
}
var M0 = P0;
function x0(e, t, n) {
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
var Ku = x0, R0 = Ku, Bi = Math.max;
function F0(e, t, n) {
  return t = Bi(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, a = -1, s = Bi(r.length - t, 0), o = Array(s); ++a < s; )
      o[a] = r[t + a];
    a = -1;
    for (var i = Array(t + 1); ++a < t; )
      i[a] = r[a];
    return i[t] = n(o), R0(e, this, i);
  };
}
var Y0 = F0;
function V0(e) {
  return function() {
    return e;
  };
}
var U0 = V0, j0 = U0, Hi = Su, B0 = Do, H0 = Hi ? function(e, t) {
  return Hi(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: j0(t),
    writable: !0
  });
} : B0, W0 = H0, G0 = 800, z0 = 16, K0 = Date.now;
function q0(e) {
  var t = 0, n = 0;
  return function() {
    var r = K0(), a = z0 - (r - n);
    if (n = r, a > 0) {
      if (++t >= G0)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var Z0 = q0, X0 = W0, J0 = Z0, Q0 = J0(X0), ew = Q0, tw = Do, nw = Y0, rw = ew;
function aw(e, t) {
  return rw(nw(e, t, tw), e + "");
}
var Oo = aw, sw = pr, ow = Jr, iw = ho, lw = dn;
function uw(e, t, n) {
  if (!lw(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? ow(n) && iw(t, n.length) : r == "string" && t in n) ? sw(n[t], e) : !1;
}
var $o = uw;
function cw(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var dw = cw, fw = dn, vw = yo, pw = dw, mw = Object.prototype, hw = mw.hasOwnProperty;
function gw(e) {
  if (!fw(e))
    return pw(e);
  var t = vw(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !hw.call(e, r)) || n.push(r);
  return n;
}
var _w = gw, bw = Mu, yw = _w, ww = Jr;
function Ew(e) {
  return ww(e) ? bw(e, !0) : yw(e);
}
var ko = Ew, Dw = Oo, Ow = pr, $w = $o, kw = ko, qu = Object.prototype, Tw = qu.hasOwnProperty, Nw = Dw(function(e, t) {
  e = Object(e);
  var n = -1, r = t.length, a = r > 2 ? t[2] : void 0;
  for (a && $w(t[0], t[1], a) && (r = 1); ++n < r; )
    for (var s = t[n], o = kw(s), i = -1, l = o.length; ++i < l; ) {
      var c = o[i], u = e[c];
      (u === void 0 || Ow(u, qu[c]) && !Tw.call(e, c)) && (e[c] = s[c]);
    }
  return e;
}), Wi = Nw, Iw = Xa, Cw = pr;
function Aw(e, t, n) {
  (n !== void 0 && !Cw(e[t], n) || n === void 0 && !(t in e)) && Iw(e, t, n);
}
var Zu = Aw, Oa = {}, Sw = {
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
    var f = c.length, v = i ? i(f) : new c.constructor(f);
    return c.copy(v), v;
  }
  e.exports = l;
})(Sw, Oa);
var Gi = Vu;
function Lw(e) {
  var t = new e.constructor(e.byteLength);
  return new Gi(t).set(new Gi(e)), t;
}
var Pw = Lw, Mw = Pw;
function xw(e, t) {
  var n = t ? Mw(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var Rw = xw;
function Fw(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
var Yw = Fw, Vw = dn, zi = Object.create, Uw = function() {
  function e() {
  }
  return function(t) {
    if (!Vw(t))
      return {};
    if (zi)
      return zi(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}(), jw = Uw, Bw = xu, Hw = Bw(Object.getPrototypeOf, Object), Xu = Hw, Ww = jw, Gw = Xu, zw = yo;
function Kw(e) {
  return typeof e.constructor == "function" && !zw(e) ? Ww(Gw(e)) : {};
}
var qw = Kw, Zw = Jr, Xw = Yt;
function Jw(e) {
  return Xw(e) && Zw(e);
}
var Qw = Jw, eE = Xt, tE = Xu, nE = Yt, rE = "[object Object]", aE = Function.prototype, sE = Object.prototype, Ju = aE.toString, oE = sE.hasOwnProperty, iE = Ju.call(Object);
function lE(e) {
  if (!nE(e) || eE(e) != rE)
    return !1;
  var t = tE(e);
  if (t === null)
    return !0;
  var n = oE.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && Ju.call(n) == iE;
}
var uE = lE;
function cE(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
var Qu = cE, dE = Sg, fE = Xa;
function vE(e, t, n, r) {
  var a = !n;
  n || (n = {});
  for (var s = -1, o = t.length; ++s < o; ) {
    var i = t[s], l = r ? r(n[i], e[i], i, n, e) : void 0;
    l === void 0 && (l = e[i]), a ? fE(n, i, l) : dE(n, i, l);
  }
  return n;
}
var pE = vE, mE = pE, hE = ko;
function gE(e) {
  return mE(e, hE(e));
}
var _E = gE, Ki = Zu, bE = Oa, yE = Rw, wE = Yw, EE = qw, qi = go, Zi = Ft, DE = Qw, OE = ur, $E = Un, kE = dn, TE = uE, NE = bo, Xi = Qu, IE = _E;
function CE(e, t, n, r, a, s, o) {
  var i = Xi(e, n), l = Xi(t, n), c = o.get(l);
  if (c) {
    Ki(e, n, c);
    return;
  }
  var u = s ? s(i, l, n + "", e, t, o) : void 0, f = u === void 0;
  if (f) {
    var v = Zi(l), p = !v && OE(l), g = !v && !p && NE(l);
    u = l, v || p || g ? Zi(i) ? u = i : DE(i) ? u = wE(i) : p ? (f = !1, u = bE(l, !0)) : g ? (f = !1, u = yE(l, !0)) : u = [] : TE(l) || qi(l) ? (u = i, qi(i) ? u = IE(i) : (!kE(i) || $E(i)) && (u = EE(l))) : f = !1;
  }
  f && (o.set(l, u), a(u, l, r, s, o), o.delete(l)), Ki(e, n, u);
}
var AE = CE, SE = Eo, LE = Zu, PE = Lu, ME = AE, xE = dn, RE = ko, FE = Qu;
function ec(e, t, n, r, a) {
  e !== t && PE(t, function(s, o) {
    if (a || (a = new SE()), xE(s))
      ME(e, t, o, n, ec, r, a);
    else {
      var i = r ? r(FE(e, o), s, o + "", e, t, a) : void 0;
      i === void 0 && (i = s), LE(e, o, i);
    }
  }, RE);
}
var tc = ec, YE = tc, Ji = dn;
function nc(e, t, n, r, a, s) {
  return Ji(e) && Ji(t) && (s.set(t, e), YE(e, t, void 0, nc, s), s.delete(t)), e;
}
var VE = nc, UE = Oo, jE = $o;
function BE(e) {
  return UE(function(t, n) {
    var r = -1, a = n.length, s = a > 1 ? n[a - 1] : void 0, o = a > 2 ? n[2] : void 0;
    for (s = e.length > 3 && typeof s == "function" ? (a--, s) : void 0, o && jE(n[0], n[1], o) && (s = a < 3 ? void 0 : s, a = 1), t = Object(t); ++r < a; ) {
      var i = n[r];
      i && e(t, i, r, s);
    }
    return t;
  });
}
var HE = BE, WE = tc, GE = HE, zE = GE(function(e, t, n, r) {
  WE(e, t, n, r);
}), KE = zE, qE = Ku, ZE = Oo, XE = VE, JE = KE, QE = ZE(function(e) {
  return e.push(void 0, XE), qE(JE, void 0, e);
}), Br = QE, eD = Object.prototype, tD = eD.hasOwnProperty;
function nD(e, t) {
  return e != null && tD.call(e, t);
}
var rD = nD, aD = rD, sD = Gu;
function oD(e, t) {
  return e != null && sD(e, t, aD);
}
var rc = oD, iD = Jr;
function lD(e, t) {
  return function(n, r) {
    if (n == null)
      return n;
    if (!iD(n))
      return e(n, r);
    for (var a = n.length, s = t ? a : -1, o = Object(n); (t ? s-- : ++s < a) && r(o[s], s, o) !== !1; )
      ;
    return n;
  };
}
var uD = lD, cD = Ru, dD = uD, fD = dD(cD), vD = fD;
function pD(e) {
  return e && e.length ? e[0] : void 0;
}
var ac = pD;
function mD(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
var Qn = mD, hD = vD;
function gD(e, t) {
  var n;
  return hD(e, function(r, a, s) {
    return n = t(r, a, s), !n;
  }), !!n;
}
var _D = gD, bD = Fu, yD = zu, wD = _D, ED = Ft, DD = $o;
function OD(e, t, n) {
  var r = ED(e) ? bD : wD;
  return n && DD(e, t, n) && (t = void 0), r(e, yD(t));
}
var $D = OD;
const kD = (e) => Object.prototype.toString.call(e).slice(8, -1), tr = (e) => Rp(e) && !isNaN(e.getTime()), on = (e) => kD(e) === "Object", To = rc, Qi = (e, t) => $D(t, (n) => rc(e, n)), Pe = (e, t, n = "0") => {
  for (e = e != null ? String(e) : "", t = t || 2; e.length < t; )
    e = `${n}${e}`;
  return e;
}, Nt = (e) => Array.isArray(e), rn = (e) => Nt(e) && e.length > 0, $a = (e) => e == null ? e ?? null : document && Ht(e) ? document.querySelector(e) : e.$el ?? e, bn = (e, t, n, r = void 0) => {
  e.removeEventListener(t, n, r);
}, yn = (e, t, n, r = void 0) => (e.addEventListener(t, n, r), () => bn(e, t, n, r)), fa = (e, t) => !!e && !!t && (e === t || e.contains(t)), ia = (e, t) => {
  (e.key === " " || e.key === "Enter") && (t(e), e.preventDefault());
}, sc = (e, ...t) => {
  const n = {};
  let r;
  for (r in e)
    t.includes(r) || (n[r] = e[r]);
  return n;
}, oc = (e, t) => {
  const n = {};
  return t.forEach((r) => {
    r in e && (n[r] = e[r]);
  }), n;
};
function TD(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
const ka = () => {
  function e() {
    return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
  }
  return `${e() + e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`;
}, ND = ["base", "start", "end", "startEnd"], ID = [
  "class",
  "wrapperClass",
  "contentClass",
  "style",
  "contentStyle",
  "color",
  "fillMode"
], CD = { base: {}, start: {}, end: {} };
function No(e, t, n = CD) {
  let r = e, a = {};
  t === !0 || Ht(t) ? (r = Ht(t) ? t : r, a = { ...n }) : on(t) && (Qi(t, ND) ? a = { ...t } : a = {
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
    i === !0 || Ht(i) ? (l = Ht(i) ? i : l, s[o] = { color: l }) : on(i) && (Qi(i, ID) ? s[o] = { ...i } : s[o] = {}), Br(s[o], { color: l });
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
class SD extends Io {
  constructor() {
    super("content", "content");
  }
  normalizeConfig(t, n) {
    return No("base", n);
  }
}
class LD extends Io {
  constructor() {
    super("dot", "dots");
  }
}
class PD extends Io {
  constructor() {
    super("bar", "bars");
  }
}
class MD {
  constructor(t) {
    ae(this, "color"), ae(this, "renderers", [
      new SD(),
      new AD(),
      new LD(),
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
const xD = 300, RD = 60, FD = 80, YD = {
  maxSwipeTime: xD,
  minHorizontalSwipeDistance: RD,
  maxVerticalSwipeDistance: FD
}, VD = "MMMM YYYY", UD = "W", jD = "MMM", BD = "h A", HD = [
  "L",
  "YYYY-MM-DD",
  "YYYY/MM/DD"
], WD = [
  "L h:mm A",
  "YYYY-MM-DD h:mm A",
  "YYYY/MM/DD h:mm A"
], GD = [
  "L HH:mm",
  "YYYY-MM-DD HH:mm",
  "YYYY/MM/DD HH:mm"
], zD = [
  "h:mm A"
], KD = [
  "HH:mm"
], qD = "WWW, MMM D, YYYY", ZD = [
  "L",
  "YYYY-MM-DD",
  "YYYY/MM/DD"
], XD = "iso", JD = "YYYY-MM-DDTHH:mm:ss.SSSZ", QD = {
  title: VD,
  weekdays: UD,
  navMonths: jD,
  hours: BD,
  input: HD,
  inputDateTime: WD,
  inputDateTime24hr: GD,
  inputTime: zD,
  inputTime24hr: KD,
  dayPopover: qD,
  data: ZD,
  model: XD,
  iso: JD
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
const eO = Object.entries(ln).reduce(
  (e, [t, { dow: n, L: r }]) => (e[t] = {
    id: t,
    firstDayOfWeek: n,
    masks: { L: r }
  }, e),
  {}
), tO = {
  componentPrefix: "V",
  color: "blue",
  isDark: !1,
  navVisibility: "click",
  titlePosition: "center",
  transition: "slide-h",
  touch: YD,
  masks: QD,
  locales: eO,
  datePicker: {
    updateOnInput: !0,
    inputDebounce: 1e3,
    popover: {
      visibility: "hover-focus",
      placement: "bottom-start",
      isInteractive: !0
    }
  }
}, Is = Js(tO), nO = C(() => M0(Is.locales, (e) => (e.masks = Br(e.masks, Is.masks), e))), Dn = (e) => typeof window < "u" && To(window.__vcalendar__, e) ? An(window.__vcalendar__, e) : An(Is, e);
var Ta = {}, rO = {
  get exports() {
    return Ta;
  },
  set exports(e) {
    Ta = e;
  }
}, Na = {}, aO = {
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
})(aO, Na);
var Ia = {}, sO = {
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
})(sO, Ia);
var Ca = {}, oO = {
  get exports() {
    return Ca;
  },
  set exports(e) {
    Ca = e;
  }
}, Aa = {}, iO = {
  get exports() {
    return Aa;
  },
  set exports(e) {
    Aa = e;
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
      for (var u = l.formatToParts(c), f = [], v = 0; v < u.length; v++) {
        var p = r[u[v].type];
        p >= 0 && (f[p] = parseInt(u[v].value, 10));
      }
      return f;
    } catch (g) {
      if (g instanceof RangeError)
        return [NaN];
      throw g;
    }
  }
  function s(l, c) {
    var u = l.format(c).replace(/\u200E/g, ""), f = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(u);
    return [f[3], f[1], f[2], f[4], f[5], f[6]];
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
})(iO, Aa);
var Sa = {}, lO = {
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
})(lO, Sa);
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = l;
  var n = a(Aa), r = a(Sa);
  function a(m) {
    return m && m.__esModule ? m : { default: m };
  }
  var s = 36e5, o = 6e4, i = {
    timezone: /([Z+-].*)$/,
    timezoneZ: /^(Z)$/,
    timezoneHH: /^([+-]\d{2})$/,
    timezoneHHMM: /^([+-]\d{2}):?(\d{2})$/
  };
  function l(m, y, d) {
    var b, k;
    if (!m || (b = i.timezoneZ.exec(m), b))
      return 0;
    var w;
    if (b = i.timezoneHH.exec(m), b)
      return w = parseInt(b[1], 10), v(w) ? -(w * s) : NaN;
    if (b = i.timezoneHHMM.exec(m), b) {
      w = parseInt(b[1], 10);
      var L = parseInt(b[2], 10);
      return v(w, L) ? (k = Math.abs(w) * s + L * o, w > 0 ? -k : k) : NaN;
    }
    if (g(m)) {
      y = new Date(y || Date.now());
      var N = d ? y : c(y), x = u(N, m), S = d ? x : f(y, x, m);
      return -S;
    }
    return NaN;
  }
  function c(m) {
    return (0, r.default)(m.getFullYear(), m.getMonth(), m.getDate(), m.getHours(), m.getMinutes(), m.getSeconds(), m.getMilliseconds());
  }
  function u(m, y) {
    var d = (0, n.default)(m, y), b = (0, r.default)(d[0], d[1] - 1, d[2], d[3] % 24, d[4], d[5], 0).getTime(), k = m.getTime(), w = k % 1e3;
    return k -= w >= 0 ? w : 1e3 + w, b - k;
  }
  function f(m, y, d) {
    var b = m.getTime(), k = b - y, w = u(new Date(k), d);
    if (y === w)
      return y;
    k -= w - y;
    var L = u(new Date(k), d);
    return w === L ? w : Math.max(w, L);
  }
  function v(m, y) {
    return -23 <= m && m <= 23 && (y == null || 0 <= y && y <= 59);
  }
  var p = {};
  function g(m) {
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
})(oO, Ca);
var La = {}, uO = {
  get exports() {
    return La;
  },
  set exports(e) {
    La = e;
  }
};
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = void 0;
  var n = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/, r = n;
  t.default = r, e.exports = t.default;
})(uO, La);
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = f;
  var n = o(Na), r = o(Ia), a = o(Ca), s = o(La);
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
  function f(S, P) {
    if (arguments.length < 1)
      throw new TypeError("1 argument required, but only " + arguments.length + " present");
    if (S === null)
      return /* @__PURE__ */ new Date(NaN);
    var R = P || {}, B = R.additionalDigits == null ? c : (0, n.default)(R.additionalDigits);
    if (B !== 2 && B !== 1 && B !== 0)
      throw new RangeError("additionalDigits must be 0, 1 or 2");
    if (S instanceof Date || typeof S == "object" && Object.prototype.toString.call(S) === "[object Date]")
      return new Date(S.getTime());
    if (typeof S == "number" || Object.prototype.toString.call(S) === "[object Number]")
      return new Date(S);
    if (!(typeof S == "string" || Object.prototype.toString.call(S) === "[object String]"))
      return /* @__PURE__ */ new Date(NaN);
    var Y = v(S), q = p(Y.date, B), ce = q.year, ee = q.restDateString, le = g(ee, ce);
    if (isNaN(le))
      return /* @__PURE__ */ new Date(NaN);
    if (le) {
      var _e = le.getTime(), Ee = 0, z;
      if (Y.time && (Ee = m(Y.time), isNaN(Ee)))
        return /* @__PURE__ */ new Date(NaN);
      if (Y.timeZone || R.timeZone) {
        if (z = (0, a.default)(Y.timeZone || R.timeZone, new Date(_e + Ee)), isNaN(z))
          return /* @__PURE__ */ new Date(NaN);
      } else
        z = (0, r.default)(new Date(_e + Ee)), z = (0, r.default)(new Date(_e + Ee + z));
      return new Date(_e + Ee + z);
    } else
      return /* @__PURE__ */ new Date(NaN);
  }
  function v(S) {
    var P = {}, R = u.dateTimePattern.exec(S), B;
    if (R ? (P.date = R[1], B = R[3]) : (R = u.datePattern.exec(S), R ? (P.date = R[1], B = R[2]) : (P.date = null, B = S)), B) {
      var Y = u.timeZone.exec(B);
      Y ? (P.time = B.replace(Y[1], ""), P.timeZone = Y[1].trim()) : P.time = B;
    }
    return P;
  }
  function p(S, P) {
    var R = u.YYY[P], B = u.YYYYY[P], Y;
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
  function g(S, P) {
    if (P === null)
      return null;
    var R, B, Y, q;
    if (S.length === 0)
      return B = /* @__PURE__ */ new Date(0), B.setUTCFullYear(P), B;
    if (R = u.MM.exec(S), R)
      return B = /* @__PURE__ */ new Date(0), Y = parseInt(R[1], 10) - 1, w(P, Y) ? (B.setUTCFullYear(P, Y), B) : /* @__PURE__ */ new Date(NaN);
    if (R = u.DDD.exec(S), R) {
      B = /* @__PURE__ */ new Date(0);
      var ce = parseInt(R[1], 10);
      return L(P, ce) ? (B.setUTCFullYear(P, 0, ce), B) : /* @__PURE__ */ new Date(NaN);
    }
    if (R = u.MMDD.exec(S), R) {
      B = /* @__PURE__ */ new Date(0), Y = parseInt(R[1], 10) - 1;
      var ee = parseInt(R[2], 10);
      return w(P, Y, ee) ? (B.setUTCFullYear(P, Y, ee), B) : /* @__PURE__ */ new Date(NaN);
    }
    if (R = u.Www.exec(S), R)
      return q = parseInt(R[1], 10) - 1, N(P, q) ? y(P, q) : /* @__PURE__ */ new Date(NaN);
    if (R = u.WwwD.exec(S), R) {
      q = parseInt(R[1], 10) - 1;
      var le = parseInt(R[2], 10) - 1;
      return N(P, q, le) ? y(P, q, le) : /* @__PURE__ */ new Date(NaN);
    }
    return null;
  }
  function m(S) {
    var P, R, B;
    if (P = u.HH.exec(S), P)
      return R = parseFloat(P[1].replace(",", ".")), x(R) ? R % 24 * i : NaN;
    if (P = u.HHMM.exec(S), P)
      return R = parseInt(P[1], 10), B = parseFloat(P[2].replace(",", ".")), x(R, B) ? R % 24 * i + B * l : NaN;
    if (P = u.HHMMSS.exec(S), P) {
      R = parseInt(P[1], 10), B = parseInt(P[2], 10);
      var Y = parseFloat(P[3].replace(",", "."));
      return x(R, B, Y) ? R % 24 * i + B * l + Y * 1e3 : NaN;
    }
    return null;
  }
  function y(S, P, R) {
    P = P || 0, R = R || 0;
    var B = /* @__PURE__ */ new Date(0);
    B.setUTCFullYear(S, 0, 4);
    var Y = B.getUTCDay() || 7, q = P * 7 + R + 1 - Y;
    return B.setUTCDate(B.getUTCDate() + q), B;
  }
  var d = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], b = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function k(S) {
    return S % 400 === 0 || S % 4 === 0 && S % 100 !== 0;
  }
  function w(S, P, R) {
    if (P < 0 || P > 11)
      return !1;
    if (R != null) {
      if (R < 1)
        return !1;
      var B = k(S);
      if (B && R > b[P] || !B && R > d[P])
        return !1;
    }
    return !0;
  }
  function L(S, P) {
    if (P < 1)
      return !1;
    var R = k(S);
    return !(R && P > 366 || !R && P > 365);
  }
  function N(S, P, R) {
    return !(P < 0 || P > 52 || R != null && (R < 0 || R > 6));
  }
  function x(S, P, R) {
    return !(S != null && (S < 0 || S >= 25) || P != null && (P < 0 || P >= 60) || R != null && (R < 0 || R >= 60));
  }
  e.exports = t.default;
})(rO, Ta);
const cO = /* @__PURE__ */ Rv(Ta);
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
function br(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
var dO = {};
function Co() {
  return dO;
}
function Mn(e, t) {
  var n, r, a, s, o, i, l, c;
  lt(1, arguments);
  var u = Co(), f = br((n = (r = (a = (s = t == null ? void 0 : t.weekStartsOn) !== null && s !== void 0 ? s : t == null || (o = t.locale) === null || o === void 0 || (i = o.options) === null || i === void 0 ? void 0 : i.weekStartsOn) !== null && a !== void 0 ? a : u.weekStartsOn) !== null && r !== void 0 ? r : (l = u.locale) === null || l === void 0 || (c = l.options) === null || c === void 0 ? void 0 : c.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(f >= 0 && f <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var v = fn(e), p = v.getDay(), g = (p < f ? 7 : 0) + p - f;
  return v.setDate(v.getDate() - g), v.setHours(0, 0, 0, 0), v;
}
function el(e) {
  var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
var fO = 6048e5;
function vO(e, t, n) {
  lt(2, arguments);
  var r = Mn(e, n), a = Mn(t, n), s = r.getTime() - el(r), o = a.getTime() - el(a);
  return Math.round((s - o) / fO);
}
function pO(e) {
  lt(1, arguments);
  var t = fn(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function mO(e) {
  lt(1, arguments);
  var t = fn(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function hO(e, t) {
  return lt(1, arguments), vO(pO(e), mO(e), t) + 1;
}
function gO(e, t) {
  var n, r, a, s, o, i, l, c;
  lt(1, arguments);
  var u = fn(e), f = u.getFullYear(), v = Co(), p = br((n = (r = (a = (s = t == null ? void 0 : t.firstWeekContainsDate) !== null && s !== void 0 ? s : t == null || (o = t.locale) === null || o === void 0 || (i = o.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && a !== void 0 ? a : v.firstWeekContainsDate) !== null && r !== void 0 ? r : (l = v.locale) === null || l === void 0 || (c = l.options) === null || c === void 0 ? void 0 : c.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(p >= 1 && p <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var g = /* @__PURE__ */ new Date(0);
  g.setFullYear(f + 1, 0, p), g.setHours(0, 0, 0, 0);
  var m = Mn(g, t), y = /* @__PURE__ */ new Date(0);
  y.setFullYear(f, 0, p), y.setHours(0, 0, 0, 0);
  var d = Mn(y, t);
  return u.getTime() >= m.getTime() ? f + 1 : u.getTime() >= d.getTime() ? f : f - 1;
}
function _O(e, t) {
  var n, r, a, s, o, i, l, c;
  lt(1, arguments);
  var u = Co(), f = br((n = (r = (a = (s = t == null ? void 0 : t.firstWeekContainsDate) !== null && s !== void 0 ? s : t == null || (o = t.locale) === null || o === void 0 || (i = o.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && a !== void 0 ? a : u.firstWeekContainsDate) !== null && r !== void 0 ? r : (l = u.locale) === null || l === void 0 || (c = l.options) === null || c === void 0 ? void 0 : c.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), v = gO(e, t), p = /* @__PURE__ */ new Date(0);
  p.setFullYear(v, 0, f), p.setHours(0, 0, 0, 0);
  var g = Mn(p, t);
  return g;
}
var bO = 6048e5;
function yO(e, t) {
  lt(1, arguments);
  var n = fn(e), r = Mn(n, t).getTime() - _O(n, t).getTime();
  return Math.round(r / bO) + 1;
}
function Pa(e) {
  return lt(1, arguments), Mn(e, {
    weekStartsOn: 1
  });
}
function wO(e) {
  lt(1, arguments);
  var t = fn(e), n = t.getFullYear(), r = /* @__PURE__ */ new Date(0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  var a = Pa(r), s = /* @__PURE__ */ new Date(0);
  s.setFullYear(n, 0, 4), s.setHours(0, 0, 0, 0);
  var o = Pa(s);
  return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= o.getTime() ? n : n - 1;
}
function EO(e) {
  lt(1, arguments);
  var t = wO(e), n = /* @__PURE__ */ new Date(0);
  n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0);
  var r = Pa(n);
  return r;
}
var DO = 6048e5;
function OO(e) {
  lt(1, arguments);
  var t = fn(e), n = Pa(t).getTime() - EO(t).getTime();
  return Math.round(n / DO) + 1;
}
function dt(e, t) {
  lt(2, arguments);
  var n = fn(e), r = br(t);
  return isNaN(r) ? /* @__PURE__ */ new Date(NaN) : (r && n.setDate(n.getDate() + r), n);
}
function Ma(e, t) {
  lt(2, arguments);
  var n = fn(e), r = br(t);
  if (isNaN(r))
    return /* @__PURE__ */ new Date(NaN);
  if (!r)
    return n;
  var a = n.getDate(), s = new Date(n.getTime());
  s.setMonth(n.getMonth() + r + 1, 0);
  var o = s.getDate();
  return a >= o ? s : (n.setFullYear(s.getFullYear(), s.getMonth(), a), n);
}
function tl(e, t) {
  lt(2, arguments);
  var n = br(t);
  return Ma(e, n * 12);
}
var zn = /* @__PURE__ */ ((e) => (e.Any = "any", e.All = "all", e))(zn || {}), ic = /* @__PURE__ */ ((e) => (e.Days = "days", e.Weeks = "weeks", e.Months = "months", e.Years = "years", e))(ic || {}), lc = /* @__PURE__ */ ((e) => (e.Days = "days", e.Weekdays = "weekdays", e.Weeks = "weeks", e.Months = "months", e.Years = "years", e))(lc || {}), uc = /* @__PURE__ */ ((e) => (e.OrdinalWeekdays = "ordinalWeekdays", e))(uc || {});
class $O {
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
        return Ao(this.from.date, n) % this.interval === 0;
      case "weeks":
        return BO(this.from.date, n) % this.interval === 0;
      case "months":
        return HO(this.from.date, n) % this.interval === 0;
      case "years":
        return gc(this.from.date, n) % this.interval === 0;
      default:
        return !1;
    }
  }
}
class yr {
  constructor(t, n, r, a) {
    ae(this, "components", []), this.type = t, this.validator = r, this.getter = a, this.components = this.normalizeComponents(n);
  }
  static create(t, n) {
    switch (t) {
      case "days":
        return new kO(n);
      case "weekdays":
        return new TO(n);
      case "weeks":
        return new NO(n);
      case "months":
        return new IO(n);
      case "years":
        return new CO(n);
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
class kO extends yr {
  constructor(t) {
    super(
      "days",
      t,
      LO,
      ({ day: n, dayFromEnd: r }) => [n, -r]
    );
  }
}
class TO extends yr {
  constructor(t) {
    super(
      "weekdays",
      t,
      Cs,
      ({ weekday: n }) => [n]
    );
  }
}
class NO extends yr {
  constructor(t) {
    super(
      "weeks",
      t,
      PO,
      ({ week: n, weekFromEnd: r }) => [n, -r]
    );
  }
}
class IO extends yr {
  constructor(t) {
    super("months", t, MO, ({ month: n }) => [
      n
    ]);
  }
}
class CO extends yr {
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
        if (!nl(t[0])) {
          console.error(
            `Ordinal range for "${this.type}" rule is from -5 to -1 or 1 to 5. This rule will be skipped.`
          );
          return;
        }
        if (!Cs(r)) {
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
        if (!nl(t[0])) {
          console.error(
            `Ordinal range for "${this.type}" rule is from -5 to -1 or 1 to 5. This rule will be skipped.`
          );
          return;
        }
        if (!Cs(r)) {
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
class SO {
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
    ae(this, "validated", !0), ae(this, "config"), ae(this, "type", zn.Any), ae(this, "from"), ae(this, "until"), ae(this, "rules", []), ae(this, "locale", new Fa()), this.parent = r, n.locale && (this.locale = n.locale), this.config = t, Un(t) ? (this.type = zn.All, this.rules = [new SO(t)]) : Nt(t) ? (this.type = zn.Any, this.rules = t.map((a) => new xa(a, n, this))) : on(t) ? (this.type = zn.All, this.from = t.from ? this.locale.getDateParts(t.from) : r == null ? void 0 : r.from, this.until = t.until ? this.locale.getDateParts(t.until) : r == null ? void 0 : r.until, this.rules = this.getObjectRules(t)) : (console.error("Rule group configuration must be an object or an array."), this.validated = !1);
  }
  getObjectRules(t) {
    const n = [];
    if (t.every && (Ht(t.every) && (t.every = [1, `${t.every}s`]), Nt(t.every))) {
      const [r = 1, a = ic.Days] = t.every;
      n.push(new $O(a, r, this.from));
    }
    return Object.values(lc).forEach((r) => {
      r in t && n.push(yr.create(r, t[r]));
    }), Object.values(uc).forEach((r) => {
      r in t && n.push(new AO(r, t[r]));
    }), t.on != null && (Nt(t.on) || (t.on = [t.on]), n.push(
      new xa(t.on, { locale: this.locale }, this.parent)
    )), n;
  }
  passes(t) {
    return this.validated ? this.from && t.dayIndex <= this.from.dayIndex || this.until && t.dayIndex >= this.until.dayIndex ? !1 : this.type === zn.Any ? this.rules.some((n) => n.passes(t)) : this.rules.every((n) => n.passes(t)) : !0;
  }
}
function LO(e) {
  return Rt(e) ? e >= 1 && e <= 31 : !1;
}
function Cs(e) {
  return Rt(e) ? e >= 1 && e <= 7 : !1;
}
function PO(e) {
  return Rt(e) ? e >= -6 && e <= -1 || e >= 1 && e <= 6 : !1;
}
function MO(e) {
  return Rt(e) ? e >= 1 && e <= 12 : !1;
}
function nl(e) {
  return !(!Rt(e) || e < -5 || e > 5 || e === 0);
}
const xO = {
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
}, it = 7, RO = 6, cc = 1e3, dc = cc * 60, fc = dc * 60, pa = fc * 24, FO = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], YO = ["L", "iso"], Sr = {
  milliseconds: [0, 999, 3],
  seconds: [0, 59, 2],
  minutes: [0, 59, 2],
  hours: [0, 23, 2]
}, vc = /d{1,2}|W{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|Z{1,4}|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g, VO = /\[([^]*?)\]/gm, rl = {
  D(e) {
    return e.day;
  },
  DD(e) {
    return Pe(e.day, 2);
  },
  // Do(d: DateParts, l: Locale) {
  //   return l.DoFn(d.day);
  // },
  d(e) {
    return e.weekday - 1;
  },
  dd(e) {
    return Pe(e.weekday - 1, 2);
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
    return Pe(e.month, 2);
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
    return Pe(e.year, 4);
  },
  h(e) {
    return e.hours % 12 || 12;
  },
  hh(e) {
    return Pe(e.hours % 12 || 12, 2);
  },
  H(e) {
    return e.hours;
  },
  HH(e) {
    return Pe(e.hours, 2);
  },
  m(e) {
    return e.minutes;
  },
  mm(e) {
    return Pe(e.minutes, 2);
  },
  s(e) {
    return e.seconds;
  },
  ss(e) {
    return Pe(e.seconds, 2);
  },
  S(e) {
    return Math.round(e.milliseconds / 100);
  },
  SS(e) {
    return Pe(Math.round(e.milliseconds / 10), 2);
  },
  SSS(e) {
    return Pe(e.milliseconds, 3);
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
    return `${t > 0 ? "-" : "+"}${Pe(Math.floor(Math.abs(t) / 60), 2)}`;
  },
  ZZZ(e) {
    const t = e.timezoneOffset;
    return `${t > 0 ? "-" : "+"}${Pe(
      Math.floor(Math.abs(t) / 60) * 100 + Math.abs(t) % 60,
      4
    )}`;
  },
  ZZZZ(e) {
    const t = e.timezoneOffset;
    return `${t > 0 ? "-" : "+"}${Pe(Math.floor(Math.abs(t) / 60), 2)}:${Pe(
      Math.abs(t) % 60,
      2
    )}`;
  }
}, pn = /\d\d?/, UO = /\d{3}/, jO = /\d{4}/, Nr = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF/]+(\s*?[\u0600-\u06FF]+){1,2}/i, al = () => {
}, sl = (e) => (t, n, r) => {
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
  d: [pn, al],
  W: [Nr, al],
  M: [
    pn,
    (e, t) => {
      e.month = t - 1;
    }
  ],
  MMM: [Nr, sl("monthNamesShort")],
  MMMM: [Nr, sl("monthNames")],
  YY: [
    pn,
    (e, t) => {
      const r = +(/* @__PURE__ */ new Date()).getFullYear().toString().substr(0, 2);
      e.year = +`${t > 68 ? r - 1 : r}${t}`;
    }
  ],
  YYYY: [
    jO,
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
    UO,
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
function pc(e, t) {
  return (rn(e) && e || [
    Ht(e) && e || "YYYY-MM-DD"
  ]).map(
    (n) => YO.reduce(
      (r, a) => r.replace(a, t.masks[a] || ""),
      n
    )
  );
}
function mc(e) {
  return on(e) && "year" in e && "month" in e && "day" in e;
}
function ol(e, t = 1) {
  const n = e.getDay() + 1, r = n >= t ? t - n : -(7 - (t - n));
  return dt(e, r);
}
function hc(e, t, n) {
  const r = Date.UTC(e, t - 1, n);
  return Ao(/* @__PURE__ */ new Date(0), new Date(r));
}
function Ao(e, t) {
  return Math.round((t.getTime() - e.getTime()) / pa);
}
function BO(e, t) {
  return Math.ceil(Ao(ol(e), ol(t)) / 7);
}
function gc(e, t) {
  return t.getUTCFullYear() - e.getUTCFullYear();
}
function HO(e, t) {
  return gc(e, t) * 12 + (t.getMonth() - e.getMonth());
}
function _c(e, t = "") {
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
    const u = `${Pe(r, 4)}-${Pe(a, 2)}-${Pe(s, 2)}T${Pe(
      o,
      2
    )}:${Pe(i, 2)}:${Pe(l, 2)}.${Pe(c, 3)}`;
    return cO(u, { timeZone: t });
  }
  return new Date(r, a - 1, s, o, i, l, c);
}
function WO(e, t) {
  let n = new Date(e.getTime());
  t.timezone && (n = new Date(
    e.toLocaleString("en-US", { timeZone: t.timezone })
  ), n.setMilliseconds(e.getMilliseconds()));
  const r = n.getMilliseconds(), a = n.getSeconds(), s = n.getMinutes(), o = n.getHours(), i = r + a * cc + s * dc + o * fc, l = n.getMonth() + 1, c = n.getFullYear(), u = t.getMonthParts(l, c), f = n.getDate(), v = u.numDays - f + 1, p = n.getDay() + 1, g = Math.floor((f - 1) / 7 + 1), m = Math.floor((u.numDays - f) / 7 + 1), y = Math.ceil(
    (f + Math.abs(u.firstWeekday - u.firstDayOfWeek)) / 7
  ), d = u.numWeeks - y + 1, b = u.weeknumbers[y], k = hc(c, l, f);
  return {
    milliseconds: r,
    seconds: a,
    minutes: s,
    hours: o,
    time: i,
    day: f,
    dayFromEnd: v,
    weekday: p,
    weekdayOrdinal: g,
    weekdayOrdinalFromEnd: m,
    week: y,
    weekFromEnd: d,
    weeknumber: b,
    month: l,
    year: c,
    date: n,
    dateTime: n.getTime(),
    dayIndex: k,
    timezoneOffset: 0,
    isValid: !0
  };
}
function GO(e, t, n) {
  return `${t}-${e}-${n}`;
}
function zO(e, t, n) {
  const r = t % 4 === 0 && t % 100 !== 0 || t % 400 === 0, a = new Date(t, e - 1, 1), s = a.getDay() + 1, o = e === 2 && r ? 29 : FO[e - 1], i = n - 1, l = hO(a, {
    weekStartsOn: i
  }), c = [], u = [];
  for (let f = 0; f < l; f++) {
    const v = dt(a, f * 7);
    c.push(yO(v, { weekStartsOn: i })), u.push(OO(v));
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
function KO() {
  const e = [];
  for (let a = 0; a < it; a++)
    e.push(
      _c({
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
  return KO().map((r) => n.format(r));
}
function qO() {
  const e = [];
  for (let t = 0; t <= 24; t++)
    e.push(new Date(2e3, 0, 1, t));
  return e;
}
function ZO(e = void 0) {
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
function bc() {
  const e = [];
  for (let t = 0; t < 12; t++)
    e.push(new Date(2e3, t, 15));
  return e;
}
function il(e, t = void 0) {
  const n = new Intl.DateTimeFormat(t, {
    month: e,
    timeZone: "UTC"
  });
  return bc().map((r) => n.format(r));
}
function XO(e, t, n) {
  return Rt(t) ? t === e : Nt(t) ? t.includes(e) : Un(t) ? t(e, n) : !(t.min != null && t.min > e || t.max != null && t.max < e || t.interval != null && e % t.interval !== 0);
}
function Lr(e, t, n) {
  const r = [], [a, s, o] = t;
  for (let i = a; i <= s; i++)
    (n == null || XO(i, n, e)) && r.push({
      value: i,
      label: Pe(i, o)
    });
  return r;
}
function JO(e, t) {
  return {
    milliseconds: Lr(
      e,
      Sr.milliseconds,
      t.milliseconds
    ),
    seconds: Lr(e, Sr.seconds, t.seconds),
    minutes: Lr(e, Sr.minutes, t.minutes),
    hours: Lr(e, Sr.hours, t.hours)
  };
}
function QO(e, t, n, r) {
  const s = Lr(e, t, r).reduce((o, i) => {
    if (i.disabled)
      return o;
    if (isNaN(o))
      return i.value;
    const l = Math.abs(o - n);
    return Math.abs(i.value - n) < l ? i.value : o;
  }, NaN);
  return isNaN(s) ? n : s;
}
function e$(e, t) {
  const n = { ...e };
  return Object.entries(t).forEach(([r, a]) => {
    const s = Sr[r], o = e[r];
    n[r] = QO(
      e,
      s,
      o,
      a
    );
  }), n;
}
function ll(e, t, n) {
  return pc(t, n).map((a) => {
    if (typeof a != "string")
      throw new Error("Invalid mask");
    let s = e;
    if (s.length > 1e3)
      return !1;
    let o = !0;
    const i = {};
    if (a.replace(vc, (u) => {
      if (Me[u]) {
        const f = Me[u], v = s.search(f[0]);
        ~v ? s.replace(f[0], (p) => (f[1](i, p, n), s = s.substr(v + p.length), p)) : o = !1;
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
function t$(e, t, n) {
  if (e == null)
    return "";
  let r = pc(t, n)[0];
  /Z$/.test(r) && (n.timezone = "utc");
  const a = [];
  r = r.replace(VO, (o, i) => (a.push(i), "??"));
  const s = n.getDateParts(e);
  return r = r.replace(
    vc,
    (o) => o in rl ? rl[o](s, n) : o.slice(1, o.length - 1)
  ), r.replace(/\?\?/g, () => a.shift());
}
const n$ = {
  daily: ["year", "month", "day"],
  weekly: ["year", "month", "week"],
  monthly: ["year", "month"]
};
function r$({
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
  } = e, f = o + (o < s ? it : 0) - s;
  let v = !0, p = !1, g = !1, m = 0;
  const y = new Intl.DateTimeFormat(r.id, {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric"
  });
  let d = t.numDays - f + 1, b = t.numDays - d + 1, k = Math.floor((d - 1) / it + 1), w = 1, L = t.numWeeks, N = 1, x = t.month, S = t.year;
  const P = /* @__PURE__ */ new Date(), R = P.getDate(), B = P.getMonth() + 1, Y = P.getFullYear();
  for (let q = 1; q <= RO; q++) {
    for (let ce = 1, ee = s; ce <= it; ce++, ee += ee === it ? 1 - it : 1) {
      v && ee === o && (d = 1, b = e.numDays, k = Math.floor((d - 1) / it + 1), w = Math.floor((c - d) / it + 1), L = 1, N = u, x = e.month, S = e.year, v = !1, p = !0);
      const le = r.getDateFromParams(S, x, d, 0, 0, 0, 0), _e = r.getDateFromParams(S, x, d, 12, 0, 0, 0), Ee = r.getDateFromParams(
        S,
        x,
        d,
        23,
        59,
        59,
        999
      ), z = le, O = `${Pe(S, 4)}-${Pe(x, 2)}-${Pe(d, 2)}`, j = ce, te = it - ce, V = l[q - 1], A = i[q - 1], Z = d === R && x === B && S === Y, se = p && d === 1, Te = p && d === c, De = q === 1, ye = q === u, Be = ce === 1, je = ce === it, nt = hc(S, x, d);
      a.push({
        locale: r,
        id: O,
        position: ++m,
        label: d.toString(),
        ariaLabel: y.format(new Date(S, x - 1, d)),
        day: d,
        dayFromEnd: b,
        weekday: ee,
        weekdayPosition: j,
        weekdayPositionFromEnd: te,
        weekdayOrdinal: k,
        weekdayOrdinalFromEnd: w,
        week: L,
        weekFromEnd: N,
        weekPosition: q,
        weeknumber: V,
        isoWeeknumber: A,
        month: x,
        year: S,
        date: z,
        startDate: le,
        endDate: Ee,
        noonDate: _e,
        dayIndex: nt,
        isToday: Z,
        isFirstDay: se,
        isLastDay: Te,
        isDisabled: !p,
        isFocusable: !p,
        isFocused: !1,
        inMonth: p,
        inPrevMonth: v,
        inNextMonth: g,
        onTop: De,
        onBottom: ye,
        onLeft: Be,
        onRight: je,
        classes: [
          `id-${O}`,
          `day-${d}`,
          `day-from-end-${b}`,
          `weekday-${ee}`,
          `weekday-position-${j}`,
          `weekday-ordinal-${k}`,
          `weekday-ordinal-from-end-${w}`,
          `week-${L}`,
          `week-from-end-${N}`,
          {
            "is-today": Z,
            "is-first-day": se,
            "is-last-day": Te,
            "in-month": p,
            "in-prev-month": v,
            "in-next-month": g,
            "on-top": De,
            "on-bottom": ye,
            "on-left": Be,
            "on-right": je
          }
        ]
      }), p && Te ? (p = !1, g = !0, d = 1, b = c, k = 1, w = Math.floor((c - d) / it + 1), L = 1, N = n.numWeeks, x = n.month, S = n.year) : (d++, b--, k = Math.floor((d - 1) / it + 1), w = Math.floor((c - d) / it + 1));
    }
    L++, N--;
  }
  return a;
}
function a$(e, t, n, r) {
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
function s$(e, t) {
  return e.days.map((n) => ({
    label: t.formatDate(n.date, t.masks.weekdays),
    weekday: n.weekday
  }));
}
function yc(e, t, n) {
  return oc(
    n.getDateParts(n.toDate(e)),
    n$[t]
  );
}
function wc({ day: e, week: t, month: n, year: r }, a, s, o) {
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
function As(e, t) {
  return !Wt(e) || !Wt(t) ? !1 : (e = e, t = t, e.year !== t.year ? e.year < t.year : e.month && t.month && e.month !== t.month ? e.month < t.month : e.week && t.week && e.week !== t.week ? e.week < t.week : e.day && t.day && e.day !== t.day ? e.day < t.day : !1);
}
function Ra(e, t) {
  return !Wt(e) || !Wt(t) ? !1 : (e = e, t = t, e.year !== t.year ? e.year > t.year : e.month && t.month && e.month !== t.month ? e.month > t.month : e.week && t.week && e.week !== t.week ? e.week > t.week : e.day && t.day && e.day !== t.day ? e.day > t.day : !1);
}
function Ec(e, t, n) {
  return (e || !1) && !As(e, t) && !Ra(e, n);
}
function o$(e, t) {
  return !e && t || e && !t ? !1 : !e && !t ? !0 : (e = e, t = t, e.year === t.year && e.month === t.month && e.week === t.week && e.day === t.day);
}
function i$(e, t, n, r) {
  if (!Wt(e) || !Wt(t))
    return [];
  const a = [];
  for (; !Ra(e, t); )
    a.push(e), e = wc(e, 1, n, r);
  return a;
}
function Dc(e) {
  const { day: t, week: n, month: r, year: a } = e;
  let s = `${a}-${Pe(r, 2)}`;
  return n && (s = `${s}-w${n}`), t && (s = `${s}-${Pe(t, 2)}`), s;
}
function l$(e, t) {
  const { month: n, year: r, showWeeknumbers: a, showIsoWeeknumbers: s } = e, o = new Date(r, n - 1, 15), i = t.getMonthParts(n, r), l = t.getPrevMonthParts(n, r), c = t.getNextMonthParts(n, r), u = r$({ monthComps: i, prevMonthComps: l, nextMonthComps: c }, t), f = a$(u, a, s, t), v = s$(f[0], t);
  return {
    id: Dc(e),
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
    weeks: f,
    weekdays: v
  };
}
function u$(e, t) {
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
class ul {
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
class c$ {
  constructor() {
    ae(this, "records", {});
  }
  render(t, n, r) {
    var a, s, o, i;
    let l = null;
    const c = r[0].dayIndex, u = r[r.length - 1].dayIndex;
    return n.hasRepeat ? r.forEach((f) => {
      var v, p;
      if (n.startsOnDay(f)) {
        const g = n.daySpan < 1 / 0 ? n.daySpan : 1;
        l = {
          startDay: f.dayIndex,
          startTime: ((v = n.start) == null ? void 0 : v.time) ?? 0,
          endDay: f.dayIndex + g - 1,
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
        const l = a === i.startDay, c = a === i.endDay, u = l ? i.startTime : 0, f = new Date(t.startDate.getTime() + u), v = c ? i.endTime : pa, p = new Date(t.endDate.getTime() + v), g = u === 0 && v === pa, m = s.order || 0;
        r.push({
          ...i,
          data: s,
          onStart: l,
          onEnd: c,
          startTime: u,
          startDate: f,
          endTime: v,
          endDate: p,
          allDay: g,
          order: m
        });
      });
    }), r.sort((s, o) => s.order - o.order), r;
  }
}
const d$ = 12, f$ = 5;
function v$(e, t) {
  const n = new Intl.DateTimeFormat().resolvedOptions().locale;
  let r;
  Ht(e) ? r = e : To(e, "id") && (r = e.id), r = (r || n).toLowerCase();
  const a = Object.keys(t), s = (l) => a.find((c) => c.toLowerCase() === l);
  r = s(r) || s(r.substring(0, 2)) || n;
  const o = {
    ...t["en-IE"],
    ...t[r],
    id: r,
    monthCacheSize: d$,
    pageCacheSize: f$
  };
  return on(e) ? Br(e, o) : o;
}
class Fa {
  constructor(t = void 0, n) {
    ae(this, "id"), ae(this, "daysInWeek"), ae(this, "firstDayOfWeek"), ae(this, "masks"), ae(this, "timezone"), ae(this, "hourLabels"), ae(this, "dayNames"), ae(this, "dayNamesShort"), ae(this, "dayNamesShorter"), ae(this, "dayNamesNarrow"), ae(this, "monthNames"), ae(this, "monthNamesShort"), ae(this, "relativeTimeNames"), ae(this, "amPm", ["am", "pm"]), ae(this, "monthCache"), ae(this, "pageCache");
    const { id: r, firstDayOfWeek: a, masks: s, monthCacheSize: o, pageCacheSize: i } = v$(t, nO.value);
    this.monthCache = new ul(
      o,
      GO,
      zO
    ), this.pageCache = new ul(i, Dc, l$), this.id = r, this.daysInWeek = it, this.firstDayOfWeek = TD(a, 1, it), this.masks = s, this.timezone = n || void 0, this.hourLabels = this.getHourLabels(), this.dayNames = vs("long", this.id), this.dayNamesShort = vs("short", this.id), this.dayNamesShorter = this.dayNamesShort.map((l) => l.substring(0, 2)), this.dayNamesNarrow = vs("narrow", this.id), this.monthNames = il("long", this.id), this.monthNamesShort = il("short", this.id), this.relativeTimeNames = ZO(this.id);
  }
  formatDate(t, n) {
    return t$(t, n, this);
  }
  parseDate(t, n) {
    return ll(t, n, this);
  }
  toDate(t, n = {}) {
    const r = /* @__PURE__ */ new Date(NaN);
    let a = r;
    const { fillDate: s, mask: o, patch: i, rules: l } = n;
    if (Rt(t) ? (n.type = "number", a = /* @__PURE__ */ new Date(+t)) : Ht(t) ? (n.type = "string", a = t ? ll(t, o || "iso", this) : r) : tr(t) ? (n.type = "date", a = new Date(t.getTime())) : mc(t) && (n.type = "object", a = this.getDateFromParts(t)), a && (i || l)) {
      let c = this.getDateParts(a);
      if (i && s != null) {
        const u = this.getDateParts(this.toDate(s));
        c = this.getDateParts(
          this.toDate({ ...u, ...oc(c, xO[i]) })
        );
      }
      l && (c = e$(c, l)), a = this.getDateFromParts(c);
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
    return WO(t, this);
  }
  getDateFromParts(t) {
    return _c(t, this.timezone);
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
    return u$(t, n);
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
    return qO().map((t) => this.formatDate(t, this.masks.hours));
  }
  getDayId(t) {
    return this.formatDate(t, "YYYY-MM-DD");
  }
}
class Oc {
  constructor(t, n, r) {
    ae(this, "key", ""), ae(this, "hashcode", ""), ae(this, "highlight", null), ae(this, "content", null), ae(this, "dot", null), ae(this, "bar", null), ae(this, "event", null), ae(this, "popover", null), ae(this, "customData", null), ae(this, "ranges"), ae(this, "hasRanges", !1), ae(this, "order", 0), ae(this, "pinPage", !1), ae(this, "maxRepeatSpan", 0), ae(this, "locale");
    const { dates: a } = Object.assign(
      this,
      { hashcode: "", order: 0, pinPage: !1 },
      t
    );
    this.key || (this.key = ka()), this.locale = r, n.normalizeGlyphs(this), this.ranges = r.ranges(a ?? []), this.hasRanges = !!rn(this.ranges), this.maxRepeatSpan = this.ranges.filter((s) => s.hasRepeat).map((s) => s.daySpan).reduce((s, o) => Math.max(s, o), 0);
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
const $c = "__vc_base_context__", kc = {
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
  const t = C(() => e.color ?? ""), n = C(() => e.isDark ?? !1), { displayMode: r } = xv(n), a = C(() => new MD(t.value)), s = C(() => {
    if (e.locale instanceof Fa)
      return e.locale;
    const u = on(e.locale) ? e.locale : {
      id: e.locale,
      firstDayOfWeek: e.firstDayOfWeek,
      masks: e.masks
    };
    return new Fa(u, e.timezone);
  }), o = C(() => s.value.masks), i = C(() => {
    const u = e.disabledDates ?? [];
    return e.minDate != null && u.push({
      start: null,
      end: dt(s.value.toDate(e.minDate), -1)
    }), e.maxDate != null && u.push({
      start: dt(s.value.toDate(e.maxDate), 1),
      end: null
    }), s.value.ranges(u);
  }), l = C(() => new Oc(
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
  return En($c, c), c;
}
function p$(e) {
  return Ye($c, Tc(e));
}
const m$ = (e, t, {
  maxSwipeTime: n,
  minHorizontalSwipeDistance: r,
  maxVerticalSwipeDistance: a
}) => {
  if (!e || !e.addEventListener || !Un(t))
    return null;
  let s = 0, o = 0, i = null, l = !1;
  function c(f) {
    const v = f.changedTouches[0];
    s = v.screenX, o = v.screenY, i = (/* @__PURE__ */ new Date()).getTime(), l = !0;
  }
  function u(f) {
    if (!l || !i)
      return;
    l = !1;
    const v = f.changedTouches[0], p = v.screenX - s, g = v.screenY - o;
    if ((/* @__PURE__ */ new Date()).getTime() - i < n && Math.abs(p) >= r && Math.abs(g) <= a) {
      const y = { toLeft: !1, toRight: !1 };
      p < 0 ? y.toLeft = !0 : y.toRight = !0, t(y);
    }
  }
  return yn(e, "touchstart", c, { passive: !0 }), yn(e, "touchend", u, { passive: !0 }), () => {
    bn(e, "touchstart", c), bn(e, "touchend", u);
  };
}, ma = {}, h$ = (e, t = 10) => {
  ma[e] = Date.now() + t;
}, g$ = (e, t) => {
  if (e in ma) {
    const n = ma[e];
    if (Date.now() < n)
      return;
    delete ma[e];
  }
  t();
}, _$ = {
  ...kc,
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
}, b$ = [
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
], Nc = "__vc_calendar_context__";
function y$(e, { emit: t, slots: n }) {
  const r = ne(null), a = ne(null), s = ne(null), o = ne((/* @__PURE__ */ new Date()).getDate()), i = ne(!1), l = ne(ka()), c = ne(ka()), u = ne(e.view), f = ne([]), v = ne("");
  let p = null, g = null;
  const {
    theme: m,
    color: y,
    displayMode: d,
    locale: b,
    masks: k,
    disabledAttribute: w,
    disabledDates: L
  } = p$(e), N = C(() => e.rows * e.columns), x = C(() => e.step || N.value), S = C(() => ac(f.value) ?? null), P = C(() => Qn(f.value) ?? null), R = C(
    () => e.minPage || (e.minDate ? j(e.minDate) : null)
  ), B = C(
    () => e.maxPage || (e.maxDate ? j(e.maxDate) : null)
  ), Y = C(() => e.navVisibility), q = C(() => !!e.showWeeknumbers), ce = C(() => !!e.showIsoWeeknumbers), ee = C(() => u.value === "monthly"), le = C(() => u.value === "weekly"), _e = C(() => u.value === "daily"), Ee = () => {
    i.value = !0, t("transition-start");
  }, z = () => {
    i.value = !1, t("transition-end"), p && (p.resolve(!0), p = null);
  }, O = (H, K, fe = u.value) => wc(H, K, fe, b.value), j = (H) => yc(H, u.value, b.value), te = (H) => {
    !w.value || !De.value || (H.isDisabled = De.value.cellExists(
      w.value.key,
      H.dayIndex
    ));
  }, V = (H) => {
    H.isFocusable = H.inMonth && H.day === o.value;
  }, A = (H, K) => {
    for (const fe of H)
      for (const I of fe.days)
        if (K(I) === !1)
          return;
  }, Z = C(
    () => f.value.reduce((H, K) => (H.push(...K.viewDays), H), [])
  ), se = C(() => {
    const H = [];
    return (e.attributes || []).forEach((K, fe) => {
      if (!K || !K.dates)
        return;
      const I = To(K, "key") ? K.key : fe, G = K.order || 0;
      H.push(
        new Oc(
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
  }), Te = C(() => rn(se.value)), De = C(() => {
    const H = new c$();
    return se.value.forEach((K) => {
      K.ranges.forEach((fe) => {
        H.render(K, fe, Z.value);
      });
    }), H;
  }), ye = C(() => Z.value.reduce((H, K) => (H[K.dayIndex] = { day: K, cells: [] }, H[K.dayIndex].cells.push(...De.value.getCells(K)), H), {})), Be = (H, K) => {
    const fe = e.showWeeknumbers || e.showIsoWeeknumbers;
    return fe == null ? "" : Ep(fe) ? fe ? "left" : "" : fe.startsWith("right") ? K > 1 ? "right" : fe : H > 1 ? "left" : fe;
  }, je = () => {
    var H, K;
    if (!Te.value)
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
    let Oe = O(H, ue, fe), Xe = O(Oe, N.value - 1, fe);
    return G || (As(Oe, R.value) ? Oe = R.value : Ra(Xe, B.value) && (Oe = O(B.value, 1 - N.value)), Xe = O(Oe, N.value - 1)), { fromPage: Oe, toPage: Xe };
  }, _ = (H, K, fe = "") => {
    if (fe === "none" || fe === "fade")
      return fe;
    if ((H == null ? void 0 : H.view) !== (K == null ? void 0 : K.view))
      return "fade";
    const I = Ra(K, H), G = As(K, H);
    return !I && !G ? "fade" : fe === "slide-v" ? G ? "slide-down" : "slide-up" : G ? "slide-right" : "slide-left";
  }, M = (H = {}) => new Promise((K, fe) => {
    const { position: I = 1, force: G = !1, transition: ue } = H, Oe = Wt(H.page) ? H.page : nt(), { fromPage: Xe } = E(Oe, {
      position: I,
      force: G
    }), Mt = [];
    for (let ft = 0; ft < N.value; ft++) {
      const Wn = O(Xe, ft), Or = ft + 1, na = Math.ceil(Or / e.columns), Dt = e.rows - na + 1, ra = Or % e.columns || e.columns, $r = e.columns - ra + 1, ls = Be(ra, $r);
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
      f.value[0],
      Mt[0],
      ue
    ), f.value = Mt, v.value && v.value !== "none" ? p = {
      resolve: K,
      reject: fe
    } : K(!0);
  }), Q = (H) => {
    const K = S.value ?? j(/* @__PURE__ */ new Date());
    return O(K, H);
  }, oe = (H, K = {}) => {
    const fe = Wt(H) ? H : j(H);
    return Object.assign(
      K,
      E(fe, {
        ...K,
        force: !0
      })
    ), i$(
      K.fromPage,
      K.toPage,
      u.value,
      b.value
    ).map((G) => Ec(G, R.value, B.value)).every((G) => G);
  }, be = (H, K = {}) => oe(Q(H), K), ot = C(() => be(-x.value)), qe = C(() => be(x.value)), Et = async (H, K = {}) => !K.force && !oe(H, K) ? !1 : (K.fromPage && !o$(K.fromPage, S.value) && (a.value && a.value.hide({ hideDelay: 0 }), K.view && (h$("view", 10), u.value = K.view), await M({
    ...K,
    page: K.fromPage,
    position: 1,
    force: !0
  }), t("did-move", f.value)), !0), Vt = (H, K = {}) => Et(Q(H), K), Le = () => Vt(-x.value), F = () => Vt(x.value), W = (H) => {
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
  }, Lt = (H, K) => {
    o.value = H.day, s.value = H, H.isFocused = !0, t("dayfocusin", H, K);
  }, Pt = (H, K) => {
    s.value = null, H.isFocused = !1, t("dayfocusout", H, K);
  }, Tn = (H, K) => {
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
        K.altKey ? I = tl(fe, -1) : I = Ma(fe, -1);
        break;
      }
      case "PageDown": {
        K.altKey ? I = tl(fe, 1) : I = Ma(fe, 1);
        break;
      }
    }
    I && (K.preventDefault(), He(I).catch());
  }, Hn = (H) => {
    const K = s.value;
    K != null && Tn(K, H);
  }, is = (H, K) => {
    t("weeknumberclick", H, K);
  };
  M({
    page: e.initialPage,
    position: e.initialPagePosition
  }), Vn(() => {
    !e.disablePageSwipe && r.value && (g = m$(
      r.value,
      ({ toLeft: H = !1, toRight: K = !1 }) => {
        H ? F() : K && Le();
      },
      Dn("touch")
    ));
  }), Kr(() => {
    f.value = [], g && g();
  }), Ae(
    () => b.value,
    () => {
      M();
    }
  ), Ae(
    () => N.value,
    () => M()
  ), Ae(
    () => e.view,
    () => u.value = e.view
  ), Ae(
    () => u.value,
    () => {
      g$("view", () => {
        M();
      }), t("update:view", u.value);
    }
  ), Ae(
    () => o.value,
    () => {
      A(f.value, (H) => V(H));
    }
  ), Xs(() => {
    t("update:pages", f.value), A(f.value, (H) => {
      te(H), V(H);
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
    pages: f,
    transitionName: v,
    theme: m,
    color: y,
    displayMode: d,
    locale: b,
    masks: k,
    attributes: se,
    disabledAttribute: w,
    disabledDates: L,
    attributeContext: De,
    days: Z,
    dayCells: ye,
    count: N,
    step: x,
    firstPage: S,
    lastPage: P,
    canMovePrev: ot,
    canMoveNext: qe,
    minPage: R,
    maxPage: B,
    isMonthly: ee,
    isWeekly: le,
    isDaily: _e,
    navVisibility: Y,
    showWeeknumbers: q,
    showIsoWeeknumbers: ce,
    getDateAddress: j,
    canMove: oe,
    canMoveBy: be,
    move: Et,
    moveBy: Vt,
    movePrev: Le,
    moveNext: F,
    onTransitionBeforeEnter: Ee,
    onTransitionAfterEnter: z,
    tryFocusDate: W,
    focusDate: He,
    onKeydown: Hn,
    onDayKeydown: Tn,
    onDayClick: We,
    onDayMouseenter: Ut,
    onDayMouseleave: vn,
    onDayFocusin: Lt,
    onDayFocusout: Pt,
    onWeeknumberClick: is
  };
  return En(Nc, ta), ta;
}
function Bn() {
  const e = Ye(Nc);
  if (e)
    return e;
  throw new Error(
    "Calendar context missing. Please verify this component is nested within a valid context provider."
  );
}
const w$ = {
  inheritAttrs: !1
}, rr = /* @__PURE__ */ Se({
  ...w$,
  __name: "CalendarSlot",
  props: {
    name: null
  },
  setup(e) {
    const { slots: t } = Bn();
    return (n, r) => h(t)[e.name] ? (D(), Ue(ou(h(t)[e.name]), iu(un({ key: 0 }, n.$attrs)), null, 16)) : Ct(n.$slots, "default", { key: 1 });
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
function Ic(e) {
  document && document.dispatchEvent(
    new CustomEvent("toggle-popover", {
      detail: e
    })
  );
}
function Cc(e) {
  const { visibility: t } = e, n = t === "click", r = t === "hover", a = t === "hover-focus", s = t === "focus";
  e.autoHide = !n;
  let o = !1, i = !1;
  const l = (g) => {
    n && (Ic({
      ...e,
      target: e.target || g.currentTarget
    }), g.stopPropagation());
  }, c = (g) => {
    o || (o = !0, (r || a) && Ss({
      ...e,
      target: e.target || g.currentTarget
    }));
  }, u = () => {
    o && (o = !1, (r || a && !i) && Ya(e));
  }, f = (g) => {
    i || (i = !0, (s || a) && Ss({
      ...e,
      target: e.target || g.currentTarget
    }));
  }, v = (g) => {
    i && !fa(g.currentTarget, g.relatedTarget) && (i = !1, (s || a && !o) && Ya(e));
  }, p = {};
  switch (e.visibility) {
    case "click":
      p.click = l;
      break;
    case "hover":
      p.mousemove = c, p.mouseleave = u;
      break;
    case "focus":
      p.focusin = f, p.focusout = v;
      break;
    case "hover-focus":
      p.mousemove = c, p.mouseleave = u, p.focusin = f, p.focusout = v;
      break;
  }
  return p;
}
const cl = (e) => {
  const t = $a(e);
  if (t == null)
    return;
  const n = t.popoverHandlers;
  !n || !n.length || (n.forEach((r) => r()), delete t.popoverHandlers);
}, dl = (e, t) => {
  const n = $a(e);
  if (n == null)
    return;
  const r = [], a = Cc(t);
  Object.entries(a).forEach(([s, o]) => {
    r.push(yn(n, s, o));
  }), n.popoverHandlers = r;
}, Ac = {
  mounted(e, t) {
    const { value: n } = t;
    n && dl(e, n);
  },
  updated(e, t) {
    const { oldValue: n, value: r } = t, a = n == null ? void 0 : n.visibility, s = r == null ? void 0 : r.visibility;
    a !== s && (a && (cl(e), s || Ya(n)), s && dl(e, r));
  },
  unmounted(e) {
    cl(e);
  }
}, E$ = ["disabled"], D$ = {
  key: 1,
  type: "button",
  class: "vc-title"
}, O$ = ["disabled"], Sc = /* @__PURE__ */ Se({
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
    } = Bn(), l = C(() => {
      switch (t.page.titlePosition) {
        case "left":
          return "bottom-start";
        case "right":
          return "bottom-end";
        default:
          return "bottom";
      }
    }), c = C(() => {
      const { page: m } = t;
      return {
        id: n.value,
        visibility: r.value,
        placement: l.value,
        modifiers: [{ name: "flip", options: { fallbackPlacements: ["bottom"] } }],
        data: { page: m },
        isInteractive: !0
      };
    }), u = C(() => t.page.titlePosition.includes("left")), f = C(() => t.page.titlePosition.includes("right")), v = C(() => t.layout ? t.layout : u.value ? "tu-pn" : f.value ? "pn-tu" : "p-tu-n;"), p = C(() => ({
      prev: v.value.includes("p") && !t.hideArrows,
      title: v.value.includes("t") && !t.hideTitle,
      next: v.value.includes("n") && !t.hideArrows
    })), g = C(() => ({ gridTemplateColumns: v.value.split("").map((y) => {
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
    return (m, y) => (D(), T("div", {
      class: Ze(["vc-header", { "is-lg": e.isLg, "is-xl": e.isXl, "is-2xl": e.is2xl }]),
      style: Pr(h(g))
    }, [
      h(p).prev ? (D(), T("button", {
        key: 0,
        type: "button",
        class: "vc-arrow vc-prev vc-focus",
        disabled: !h(a),
        onClick: y[0] || (y[0] = //@ts-ignore
        (...d) => h(s) && h(s)(...d)),
        onKeydown: y[1] || (y[1] = ei(
          //@ts-ignore
          (...d) => h(s) && h(s)(...d),
          ["space", "enter"]
        ))
      }, [
        ge(rr, {
          name: "header-prev-button",
          disabled: !h(a)
        }, {
          default: tt(() => [
            ge(lr, {
              name: "ChevronLeft",
              size: "24"
            })
          ]),
          _: 1
        }, 8, ["disabled"])
      ], 40, E$)) : X("", !0),
      h(p).title ? Ke((D(), T("button", D$, [
        ge(rr, {
          name: "header-title",
          title: e.page.title
        }, {
          default: tt(() => [
            $("span", null, pe(e.page.title), 1)
          ]),
          _: 1
        }, 8, ["title"])
      ])), [
        [h(Ac), h(c)]
      ]) : X("", !0),
      h(p).next ? (D(), T("button", {
        key: 2,
        type: "button",
        class: "vc-arrow vc-next vc-focus",
        disabled: !h(o),
        onClick: y[2] || (y[2] = //@ts-ignore
        (...d) => h(i) && h(i)(...d)),
        onKeydown: y[3] || (y[3] = ei(
          //@ts-ignore
          (...d) => h(i) && h(i)(...d),
          ["space", "enter"]
        ))
      }, [
        ge(rr, {
          name: "header-next-button",
          disabled: !h(o)
        }, {
          default: tt(() => [
            ge(lr, {
              name: "ChevronRight",
              size: "24"
            })
          ]),
          _: 1
        }, 8, ["disabled"])
      ], 40, O$)) : X("", !0)
    ], 6));
  }
}), $$ = Se({
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
      onDayKeydown: f
    } = Bn(), v = C(() => e.day), p = C(() => r.value.getCells(v.value)), g = C(
      () => p.value.map((ee) => ee.data)
    ), m = C(() => ({
      ...v.value,
      attributes: g.value,
      attributeCells: p.value
    }));
    function y({ data: ee }, { popovers: le }) {
      const { key: _e, customData: Ee, popover: z } = ee;
      if (!z)
        return;
      const O = Wi(
        {
          key: _e,
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
      le.splice(0, 0, O);
    }
    const d = C(() => {
      const ee = {
        ...n.value.prepareRender({}),
        popovers: []
      };
      return p.value.forEach((le) => {
        n.value.render(le, ee), y(le, ee);
      }), ee;
    }), b = C(() => d.value.highlights), k = C(() => !!rn(b.value)), w = C(() => d.value.content), L = C(() => d.value.dots), N = C(() => !!rn(L.value)), x = C(() => d.value.bars), S = C(() => !!rn(x.value)), P = C(() => d.value.popovers), R = C(
      () => P.value.map((ee) => ee.attribute)
    ), B = C(() => [
      "vc-day",
      ...v.value.classes,
      { "vc-day-box-center-center": !s["day-content"] },
      { "is-not-in-month": !e.day.inMonth }
    ]), Y = C(() => {
      let ee;
      v.value.isFocusable ? ee = "0" : ee = "-1";
      const le = [
        "vc-day-content vc-focusable vc-focus vc-attr",
        { "vc-disabled": v.value.isDisabled },
        An(Qn(b.value), "contentClass"),
        An(Qn(w.value), "class") || ""
      ], _e = {
        ...An(Qn(b.value), "contentStyle"),
        ...An(Qn(w.value), "style")
      };
      return {
        class: le,
        style: _e,
        tabindex: ee,
        "aria-label": v.value.ariaLabel,
        "aria-disabled": !!v.value.isDisabled,
        role: "button"
      };
    }), q = C(() => ({
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
        f(m.value, ee);
      }
    })), ce = C(() => rn(P.value) ? Wi(
      {
        id: a.value,
        data: { day: v, attributes: R.value }
      },
      ...P.value
    ) : null);
    return {
      attributes: g,
      attributeCells: p,
      bars: x,
      dayClasses: B,
      dayContentProps: Y,
      dayContentEvents: q,
      dayPopover: ce,
      glyphs: d,
      dots: L,
      hasDots: N,
      hasBars: S,
      highlights: b,
      hasHighlights: k,
      locale: t,
      popovers: P
    };
  }
}), k$ = {
  key: 0,
  class: "vc-highlights vc-day-layer"
}, T$ = {
  key: 1,
  class: "vc-day-layer vc-day-box-center-bottom"
}, N$ = { class: "vc-dots" }, I$ = {
  key: 2,
  class: "vc-day-layer vc-day-box-center-bottom"
}, C$ = { class: "vc-bars" };
function A$(e, t, n, r, a, s) {
  const o = Cn("CalendarSlot"), i = xd("popover");
  return D(), T("div", {
    class: Ze(e.dayClasses)
  }, [
    e.hasHighlights ? (D(), T("div", k$, [
      (D(!0), T(re, null, ke(e.highlights, ({ key: l, wrapperClass: c, class: u, style: f }) => (D(), T("div", {
        key: l,
        class: Ze(c)
      }, [
        $("div", {
          class: Ze(u),
          style: Pr(f)
        }, null, 6)
      ], 2))), 128))
    ])) : X("", !0),
    ge(o, {
      name: "day-content",
      day: e.day,
      attributes: e.attributes,
      "attribute-cells": e.attributeCells,
      dayProps: e.dayContentProps,
      dayEvents: e.dayContentEvents,
      locale: e.locale
    }, {
      default: tt(() => [
        Ke((D(), T("div", un(e.dayContentProps, Rd(e.dayContentEvents, !0)), [
          qr(pe(e.day.label), 1)
        ], 16)), [
          [i, e.dayPopover]
        ])
      ]),
      _: 1
    }, 8, ["day", "attributes", "attribute-cells", "dayProps", "dayEvents", "locale"]),
    e.hasDots ? (D(), T("div", T$, [
      $("div", N$, [
        (D(!0), T(re, null, ke(e.dots, ({ key: l, class: c, style: u }) => (D(), T("span", {
          key: l,
          class: Ze(c),
          style: Pr(u)
        }, null, 6))), 128))
      ])
    ])) : X("", !0),
    e.hasBars ? (D(), T("div", I$, [
      $("div", C$, [
        (D(!0), T(re, null, ke(e.bars, ({ key: l, class: c, style: u }) => (D(), T("span", {
          key: l,
          class: Ze(c),
          style: Pr(u)
        }, null, 6))), 128))
      ])
    ])) : X("", !0)
  ], 2);
}
const S$ = /* @__PURE__ */ cn($$, [["render", A$]]), L$ = {
  name: "CalendarPane",
  inheritAttrs: !1,
  components: { CalendarHeader: Sc, CalendarDay: S$ },
  props: {
    page: { type: Object, required: !0 }
  },
  setup() {
    const { onWeeknumberClick: e } = Bn();
    return {
      onWeeknumberClick: e
    };
  }
}, P$ = { class: "vc-weekdays" }, M$ = ["onClick"];
function x$(e, t, n, r, a, s) {
  const o = Cn("CalendarHeader"), i = Cn("CalendarDay");
  return D(), T("div", {
    class: Ze([
      "vc-pane",
      `row-${n.page.row}`,
      `row-from-end-${n.page.rowFromEnd}`,
      `column-${n.page.column}`,
      `column-from-end-${n.page.columnFromEnd}`
    ]),
    ref: "pane"
  }, [
    ge(o, {
      page: n.page,
      "is-lg": "",
      "hide-arrows": ""
    }, null, 8, ["page"]),
    $("div", {
      class: Ze(["vc-weeks", {
        [`vc-show-weeknumbers-${n.page.weeknumberPosition}`]: n.page.weeknumberPosition
      }])
    }, [
      $("div", P$, [
        (D(!0), T(re, null, ke(n.page.weekdays, ({ weekday: l, label: c }, u) => (D(), T("div", {
          key: u,
          class: Ze(`vc-weekday vc-weekday-${l}`)
        }, pe(c), 3))), 128))
      ]),
      (D(!0), T(re, null, ke(n.page.viewWeeks, (l) => (D(), T("div", {
        key: `weeknumber-${l.weeknumber}`,
        class: "vc-week"
      }, [
        n.page.weeknumberPosition ? (D(), T("div", {
          key: 0,
          class: Ze(["vc-weeknumber", `is-${n.page.weeknumberPosition}`])
        }, [
          $("span", {
            class: Ze(["vc-weeknumber-content"]),
            onClick: (c) => r.onWeeknumberClick(l, c)
          }, pe(l.weeknumberDisplay), 9, M$)
        ], 2)) : X("", !0),
        (D(!0), T(re, null, ke(l.days, (c) => (D(), Ue(i, {
          key: c.id,
          day: c
        }, null, 8, ["day"]))), 128))
      ]))), 128))
    ], 2)
  ], 2);
}
const R$ = /* @__PURE__ */ cn(L$, [["render", x$]]), F$ = Se({
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
    function i(O) {
      O && (o.direction = O.split("-")[0]);
    }
    function l({ placement: O, options: j }) {
      i(O || (j == null ? void 0 : j.placement));
    }
    const c = C(() => ({
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
    })), u = C(() => {
      const O = o.direction === "left" || o.direction === "right";
      let j = "";
      if (o.placement) {
        const te = o.placement.split("-");
        te.length > 1 && (j = te[1]);
      }
      return ["start", "top", "left"].includes(j) ? O ? "top" : "left" : ["end", "bottom", "right"].includes(j) ? O ? "bottom" : "right" : O ? "middle" : "center";
    });
    function f() {
      s && (s.destroy(), s = null);
    }
    function v() {
      Zn(() => {
        const O = $a(o.target);
        !O || !r.value || (s && s.state.elements.reference !== O && f(), s ? s.update() : s = iv(
          O,
          r.value,
          c.value
        ));
      });
    }
    function p(O) {
      Object.assign(o, sc(O, "force"));
    }
    function g(O, j) {
      clearTimeout(n), O > 0 ? n = setTimeout(j, O) : j();
    }
    function m(O) {
      return !O || !s ? !1 : $a(O) === s.state.elements.reference;
    }
    async function y(O = {}) {
      o.force || (O.force && (o.force = !0), g(O.showDelay ?? e.showDelay, () => {
        o.isVisible && (o.force = !1, t("after-show")), p({
          ...O,
          isVisible: !0
        }), v();
      }));
    }
    function d(O = {}) {
      s && (O.target && !m(O.target) || o.force || (O.force && (o.force = !0), g(O.hideDelay ?? e.hideDelay, () => {
        o.isVisible || (o.force = !1), o.isVisible = !1;
      })));
    }
    function b(O = {}) {
      O.target != null && (o.isVisible && m(O.target) ? d(O) : y(O));
    }
    function k(O) {
      if (!s)
        return;
      const j = s.state.elements.reference;
      if (!r.value || !j)
        return;
      const te = O.target;
      fa(r.value, te) || fa(j, te) || d({ force: !0 });
    }
    function w(O) {
      (O.key === "Esc" || O.key === "Escape") && d();
    }
    function L({ detail: O }) {
      !O.id || O.id !== e.id || y(O);
    }
    function N({ detail: O }) {
      !O.id || O.id !== e.id || d(O);
    }
    function x({ detail: O }) {
      !O.id || O.id !== e.id || b(O);
    }
    function S() {
      yn(document, "keydown", w), yn(document, "click", k), yn(document, "show-popover", L), yn(document, "hide-popover", N), yn(document, "toggle-popover", x);
    }
    function P() {
      bn(document, "keydown", w), bn(document, "click", k), bn(document, "show-popover", L), bn(document, "hide-popover", N), bn(document, "toggle-popover", x);
    }
    function R(O) {
      t("before-show", O);
    }
    function B(O) {
      o.force = !1, t("after-show", O);
    }
    function Y(O) {
      t("before-hide", O);
    }
    function q(O) {
      o.force = !1, f(), t("after-hide", O);
    }
    function ce(O) {
      O.stopPropagation();
    }
    function ee() {
      o.isHovered = !0, o.isInteractive && ["hover", "hover-focus"].includes(o.visibility) && y();
    }
    function le() {
      if (o.isHovered = !1, !s)
        return;
      const O = s.state.elements.reference;
      o.autoHide && !o.isFocused && (!O || O !== document.activeElement) && ["hover", "hover-focus"].includes(o.visibility) && d();
    }
    function _e() {
      o.isFocused = !0, o.isInteractive && ["focus", "hover-focus"].includes(o.visibility) && y();
    }
    function Ee(O) {
      ["focus", "hover-focus"].includes(o.visibility) && (!O.relatedTarget || !fa(r.value, O.relatedTarget)) && (o.isFocused = !1, !o.isHovered && o.autoHide && d());
    }
    function z() {
      a != null && (a.disconnect(), a = null);
    }
    return Ae(
      () => r.value,
      (O) => {
        z(), O && (a = new ResizeObserver(() => {
          s && s.update();
        }), a.observe(O));
      }
    ), Ae(() => o.placement, i, {
      immediate: !0
    }), Vn(() => {
      S();
    }), Kr(() => {
      f(), z(), P();
    }), {
      ...Pd(o),
      popoverRef: r,
      alignment: u,
      hide: d,
      setupPopper: v,
      beforeEnter: R,
      afterEnter: B,
      beforeLeave: Y,
      afterLeave: q,
      onClick: ce,
      onMouseOver: ee,
      onMouseLeave: le,
      onFocusIn: _e,
      onFocusOut: Ee
    };
  }
});
function Y$(e, t, n, r, a, s) {
  return D(), T("div", {
    class: Ze(["vc-popover-content-wrapper", { "is-interactive": e.isInteractive }]),
    ref: "popoverRef",
    onClick: t[0] || (t[0] = (...o) => e.onClick && e.onClick(...o)),
    onMouseover: t[1] || (t[1] = (...o) => e.onMouseOver && e.onMouseOver(...o)),
    onMouseleave: t[2] || (t[2] = (...o) => e.onMouseLeave && e.onMouseLeave(...o)),
    onFocusin: t[3] || (t[3] = (...o) => e.onFocusIn && e.onFocusIn(...o)),
    onFocusout: t[4] || (t[4] = (...o) => e.onFocusOut && e.onFocusOut(...o))
  }, [
    ge(lu, {
      name: `vc-${e.transition}`,
      appear: "",
      onBeforeEnter: e.beforeEnter,
      onAfterEnter: e.afterEnter,
      onBeforeLeave: e.beforeLeave,
      onAfterLeave: e.afterLeave
    }, {
      default: tt(() => [
        e.isVisible ? (D(), T("div", un({
          key: 0,
          tabindex: "-1",
          class: `vc-popover-content direction-${e.direction}`
        }, e.$attrs), [
          Ct(e.$slots, "default", {
            direction: e.direction,
            alignment: e.alignment,
            data: e.data,
            hide: e.hide
          }, () => [
            qr(pe(e.data), 1)
          ]),
          $("span", {
            class: Ze([
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
const So = /* @__PURE__ */ cn(F$, [["render", Y$]]), V$ = {
  value: { type: Object, required: !0 }
}, U$ = ["input"], j$ = "__vc_calendar_nav_context__";
function B$(e, { emit: t }) {
  const n = ne(!0), r = ne(0), a = ne(0), s = 12, o = ne(null), { locale: i, masks: l, canMove: c, getDateAddress: u } = Bn();
  function f() {
    setTimeout(() => {
      if (o.value == null)
        return;
      const A = o.value.querySelector(
        ".vc-nav-item:not(:disabled)"
      );
      A && A.focus();
    }, 10);
  }
  function v(A, Z) {
    t("input", { month: A, year: Z }, { position: R.value });
  }
  function p(A) {
    r.value = A, n.value = !0, f();
  }
  function g(A) {
    const { year: Z } = u(/* @__PURE__ */ new Date()), se = A * s, Te = se + s, De = [];
    for (let ye = se; ye < Te; ye += 1) {
      let Be = !1;
      for (let je = 1; je < 12 && (Be = c({ month: je, year: ye }, { position: R.value }), !Be); je++)
        ;
      De.push({
        year: ye,
        id: ye.toString(),
        label: ye.toString(),
        ariaLabel: ye.toString(),
        isActive: ye === P.value,
        isCurrent: ye === Z,
        isDisabled: !Be,
        click: () => p(ye)
      });
    }
    return De;
  }
  function m(A) {
    const { month: Z, year: se } = u(/* @__PURE__ */ new Date());
    return bc().map((Te, De) => {
      const ye = De + 1;
      return {
        month: ye,
        year: A,
        id: `${A}.${Pe(ye, 2)}`,
        label: i.value.formatDate(Te, l.value.navMonths),
        ariaLabel: i.value.formatDate(Te, "MMMM YYYY"),
        isActive: ye === S.value && A === P.value,
        isCurrent: ye === Z && A === se,
        isDisabled: !c(
          { month: ye, year: A },
          { position: R.value }
        ),
        click: () => v(ye, A)
      };
    });
  }
  function y(A) {
    return Math.floor(A / s);
  }
  function d() {
    n.value = !n.value;
  }
  function b() {
    Ee.value && (n.value && w(), N());
  }
  function k() {
    j.value && (n.value && L(), x());
  }
  function w() {
    r.value--;
  }
  function L() {
    r.value++;
  }
  function N() {
    a.value--;
  }
  function x() {
    a.value++;
  }
  const S = C(() => {
    var A;
    return ((A = e.value) == null ? void 0 : A.month) || 0;
  }), P = C(() => {
    var A;
    return ((A = e.value) == null ? void 0 : A.year) || 0;
  }), R = C(() => {
    var A;
    return ((A = e.value) == null ? void 0 : A.position) || 1;
  }), B = C(() => m(r.value)), Y = C(() => g(a.value)), q = C(() => ac(Y.value.map((A) => A.year))), ce = C(() => Qn(Y.value.map((A) => A.year))), ee = C(() => n.value ? r.value : `${q.value} - ${ce.value}`), le = C(
    () => m(r.value - 1).some((A) => !A.isDisabled)
  ), _e = C(
    () => g(a.value - 1).some((A) => !A.isDisabled)
  ), Ee = C(
    () => n.value ? le.value : _e.value
  ), z = C(
    () => m(r.value + 1).some((A) => !A.isDisabled)
  ), O = C(
    () => g(a.value + 1).some((A) => !A.isDisabled)
  ), j = C(
    () => n.value ? z.value : O.value
  ), te = C(
    () => n.value ? B.value : Y.value
  );
  Ae(
    () => P.value,
    () => {
      r.value = P.value;
    }
  ), Ae(
    () => r.value,
    (A) => {
      a.value = y(A);
    }
  ), r.value = P.value, Vn(() => f());
  const V = {
    navContainer: o,
    title: ee,
    monthMode: n,
    currentMonth: S,
    currentYear: P,
    activeItems: te,
    prevItemsEnabled: Ee,
    nextItemsEnabled: j,
    toggleMode: d,
    movePrev: b,
    moveNext: k,
    movePrevYear: w,
    moveNextYear: L,
    movePrevYearGroup: N,
    moveNextYearGroup: x
  };
  return En(j$, V), V;
}
const H$ = { class: "vc-nav-header" }, W$ = ["disabled"], G$ = ["disabled"], z$ = { class: "vc-nav-items" }, K$ = ["data-id", "aria-label", "disabled", "onClick", "onKeydown"], q$ = /* @__PURE__ */ Se({
  __name: "CalendarNav",
  props: V$,
  emits: U$,
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
    } = B$(n, { emit: t });
    return (f, v) => (D(), T("div", {
      class: "vc-nav-container",
      ref_key: "navContainer",
      ref: r
    }, [
      $("div", H$, [
        $("button", {
          type: "button",
          class: "vc-nav-arrow is-left vc-focus",
          disabled: !h(s),
          onClick: v[0] || (v[0] = //@ts-ignore
          (...p) => h(c) && h(c)(...p)),
          onKeydown: v[1] || (v[1] = (p) => h(ia)(p, h(c)))
        }, [
          ge(rr, {
            name: "nav-prev-button",
            move: h(c),
            disabled: !h(s)
          }, {
            default: tt(() => [
              ge(lr, {
                name: "ChevronLeft",
                width: "22px",
                height: "24px"
              })
            ]),
            _: 1
          }, 8, ["move", "disabled"])
        ], 40, W$),
        $("button", {
          type: "button",
          class: "vc-nav-title vc-focus",
          onClick: v[2] || (v[2] = //@ts-ignore
          (...p) => h(l) && h(l)(...p)),
          onKeydown: v[3] || (v[3] = (p) => h(ia)(p, h(l)))
        }, pe(h(a)), 33),
        $("button", {
          type: "button",
          class: "vc-nav-arrow is-right vc-focus",
          disabled: !h(o),
          onClick: v[4] || (v[4] = //@ts-ignore
          (...p) => h(u) && h(u)(...p)),
          onKeydown: v[5] || (v[5] = (p) => h(ia)(p, h(u)))
        }, [
          ge(rr, {
            name: "nav-next-button",
            move: h(u),
            disabled: !h(o)
          }, {
            default: tt(() => [
              ge(lr, {
                name: "ChevronRight",
                width: "22px",
                height: "24px"
              })
            ]),
            _: 1
          }, 8, ["move", "disabled"])
        ], 40, G$)
      ]),
      $("div", z$, [
        (D(!0), T(re, null, ke(h(i), (p) => (D(), T("button", {
          key: p.label,
          type: "button",
          "data-id": p.id,
          "aria-label": p.ariaLabel,
          class: Ze(["vc-nav-item vc-focus", [
            p.isActive ? "is-active" : p.isCurrent ? "is-current" : ""
          ]]),
          disabled: p.isDisabled,
          onClick: p.click,
          onKeydown: (g) => h(ia)(g, p.click)
        }, pe(p.label), 43, K$))), 128))
      ])
    ], 512));
  }
}), Z$ = {
  __name: "CalendarNavPopover",
  setup(e) {
    const { navPopoverId: t, color: n, displayMode: r, navPopoverRef: a, move: s } = Bn();
    return (o, i) => (D(), Ue(So, {
      id: h(t),
      class: Ze(["vc-nav-popover-container", `vc-${h(n)}`, `vc-${h(r)}`]),
      ref_key: "navPopoverRef",
      ref: a
    }, {
      default: tt(({ data: l }) => [
        ge(q$, {
          value: l.page,
          onInput: h(s)
        }, null, 8, ["value", "onInput"])
      ]),
      _: 1
    }, 8, ["id", "class"]));
  }
}, X$ = Se({
  name: "PopoverRow",
  props: {
    attribute: { type: Object, required: !0 }
  },
  setup(e) {
    return {
      indicator: C(() => {
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
}), J$ = { class: "vc-day-popover-row" }, Q$ = {
  key: 0,
  class: "vc-day-popover-row-indicator"
}, ek = { class: "vc-day-popover-row-label" };
function tk(e, t, n, r, a, s) {
  return D(), T("div", J$, [
    e.indicator ? (D(), T("div", Q$, [
      $("span", {
        class: Ze(e.indicator.class)
      }, null, 2)
    ])) : X("", !0),
    $("div", ek, [
      Ct(e.$slots, "default", {}, () => [
        qr(pe(e.attribute.popover ? e.attribute.popover.label : "No content provided"), 1)
      ])
    ])
  ]);
}
const nk = /* @__PURE__ */ cn(X$, [["render", tk]]), rk = { class: "vc-day-popover-container" }, ak = {
  key: 0,
  class: "vc-day-popover-header"
}, sk = /* @__PURE__ */ Se({
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
      id: h(t),
      class: Ze([`vc-${h(r)}`, `vc-${h(n)}`])
    }, {
      default: tt(({ data: { day: u, attributes: f }, hide: v }) => [
        Ct(l.$slots, "default", {
          day: u,
          dayTitle: i(u),
          attributes: f,
          format: o,
          masks: h(a),
          hide: v
        }, () => [
          $("div", rk, [
            h(a).dayPopover ? (D(), T("div", ak, pe(i(u)), 1)) : X("", !0),
            (D(!0), T(re, null, ke(f, (p) => (D(), Ue(nk, {
              key: p.key,
              attribute: p
            }, null, 8, ["attribute"]))), 128))
          ])
        ])
      ]),
      _: 3
    }, 8, ["id", "class"]));
  }
}), ok = Se({
  name: "Calendar",
  components: {
    CalendarHeader: Sc,
    CalendarPane: R$,
    CalendarNavPopover: Z$,
    CalendarDayPopover: sk
  },
  emits: b$,
  props: _$,
  setup(e, { emit: t, slots: n }) {
    return y$(e, { emit: t, slots: n });
  }
}), ik = { class: "vc-pane-header-wrapper" };
function lk(e, t, n, r, a, s) {
  const o = Cn("CalendarHeader"), i = Cn("CalendarPane"), l = Cn("CalendarDayPopover"), c = Cn("CalendarNavPopover");
  return D(), T(re, null, [
    $("div", un({ "data-helptext": "Press the arrow keys to navigate by day, Home and End to navigate to week ends, PageUp and PageDown to navigate by month, Alt+PageUp and Alt+PageDown to navigate by year" }, e.$attrs, {
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
      onMouseup: t[0] || (t[0] = uu(() => {
      }, ["prevent"])),
      ref: "containerRef"
    }), [
      $("div", {
        class: Ze(["vc-pane-container", { "in-transition": e.inTransition }])
      }, [
        $("div", ik, [
          e.firstPage ? (D(), Ue(o, {
            key: 0,
            page: e.firstPage,
            "is-lg": "",
            "hide-title": ""
          }, null, 8, ["page"])) : X("", !0)
        ]),
        ge(lu, {
          name: `vc-${e.transitionName}`,
          onBeforeEnter: e.onTransitionBeforeEnter,
          onAfterEnter: e.onTransitionAfterEnter
        }, {
          default: tt(() => [
            (D(), T("div", {
              key: e.pages[0].id,
              class: "vc-pane-layout",
              style: Pr({
                gridTemplateColumns: `repeat(${e.columns}, 1fr)`
              })
            }, [
              (D(!0), T(re, null, ke(e.pages, (u) => (D(), Ue(i, {
                key: u.id,
                page: u
              }, null, 8, ["page"]))), 128))
            ], 4))
          ]),
          _: 1
        }, 8, ["name", "onBeforeEnter", "onAfterEnter"]),
        Ct(e.$slots, "footer")
      ], 2)
    ], 16),
    ge(l, null, {
      default: tt((u) => [
        Ct(e.$slots, "day-popover", iu(Md(u)))
      ]),
      _: 3
    }),
    ge(c)
  ], 64);
}
const uk = /* @__PURE__ */ cn(ok, [["render", lk]]), ck = { class: "vc-base-select" }, dk = ["value"], fk = ["value", "disabled"], vk = {
  inheritAttrs: !1
}, Ir = /* @__PURE__ */ Object.assign(vk, {
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
    return (t, n) => (D(), T("div", ck, [
      e.showIcon ? (D(), Ue(lr, {
        key: 0,
        name: "ChevronDown",
        size: e.small ? "16" : "18"
      }, null, 8, ["size"])) : X("", !0),
      $("select", un(t.$attrs, {
        value: e.modelValue,
        class: ["vc-focus", {
          "vc-has-icon": e.showIcon,
          "vc-align-right": e.alignRight,
          "vc-align-left": e.alignLeft,
          "vc-small": e.small
        }],
        onChange: n[0] || (n[0] = (r) => t.$emit("update:modelValue", r.target.value))
      }), [
        (D(!0), T(re, null, ke(e.options, (r) => (D(), T("option", {
          key: r.value,
          value: r.value,
          disabled: r.disabled
        }, pe(r.label), 9, fk))), 128))
      ], 16, dk)
    ]));
  }
}), Lc = "__vc_date_picker_context__", pk = {
  ...kc,
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
}, mk = [
  "update:modelValue",
  "drag",
  "dayclick",
  "daykeydown",
  "popover-will-show",
  "popover-did-show",
  "popover-will-hide",
  "popover-did-hide"
];
function hk(e, t) {
  const n = Tc(e), { locale: r, masks: a, disabledAttribute: s } = n, { emit: o } = t, i = ne(!1), l = ne(ka()), c = ne(null), u = ne(null), f = ne(["", ""]), v = ne(null), p = ne(null);
  let g, m, y = !0;
  const d = C(() => e.isRange || e.modelModifiers.range === !0), b = C(
    () => d.value && c.value != null ? c.value.start : null
  ), k = C(
    () => d.value && c.value != null ? c.value.end : null
  ), w = C(() => e.mode.toLowerCase() === "date"), L = C(
    () => e.mode.toLowerCase() === "datetime"
  ), N = C(() => e.mode.toLowerCase() === "time"), x = C(() => !!u.value), S = C(() => {
    let I = "date";
    e.modelModifiers.number && (I = "number"), e.modelModifiers.string && (I = "string");
    const G = a.value.modelValue || "iso";
    return V({ type: I, mask: G });
  }), P = C(
    () => ot(u.value ?? c.value)
  ), R = C(() => N.value ? e.is24hr ? a.value.inputTime24hr : a.value.inputTime : L.value ? e.is24hr ? a.value.inputDateTime24hr : a.value.inputDateTime : a.value.input), B = C(() => /[Hh]/g.test(R.value)), Y = C(
    () => /[dD]{1,2}|Do|W{1,4}|M{1,4}|YY(?:YY)?/g.test(R.value)
  ), q = C(() => {
    if (B.value && Y.value)
      return "dateTime";
    if (Y.value)
      return "date";
    if (B.value)
      return "time";
  }), ce = C(() => {
    var I;
    const G = ((I = v.value) == null ? void 0 : I.$el.previousElementSibling) ?? void 0;
    return Br({}, e.popover, Dn("datePicker.popover"), {
      target: G
    });
  }), ee = C(
    () => Cc({
      ...ce.value,
      id: l.value
    })
  ), le = C(() => d.value ? {
    start: f.value[0],
    end: f.value[1]
  } : f.value[0]), _e = C(() => {
    const I = ["start", "end"].map((G) => ({
      input: Q(G),
      change: oe(G),
      keyup: be,
      ...e.popover && ee.value
    }));
    return d.value ? {
      start: I[0],
      end: I[1]
    } : I[0];
  }), Ee = C(() => {
    if (!se(c.value))
      return null;
    const I = {
      key: "select-drag",
      ...e.selectAttribute,
      dates: c.value,
      pinPage: !0
    }, { dot: G, bar: ue, highlight: Oe, content: Xe } = I;
    return !G && !ue && !Oe && !Xe && (I.highlight = !0), I;
  }), z = C(() => {
    if (!d.value || !se(u.value))
      return null;
    const I = {
      key: "select-drag",
      ...e.dragAttribute,
      dates: u.value
    }, { dot: G, bar: ue, highlight: Oe, content: Xe } = I;
    return !G && !ue && !Oe && !Xe && (I.highlight = {
      startEnd: {
        fillMode: "outline"
      }
    }), I;
  }), O = C(() => {
    const I = Nt(e.attributes) ? [...e.attributes] : [];
    return z.value ? I.unshift(z.value) : Ee.value && I.unshift(Ee.value), I;
  }), j = C(() => V(
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
  function V(I) {
    return Nt(I) ? I.length === 1 ? [I[0], I[0]] : I : [I, I];
  }
  function A(I) {
    return V(I).map(
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
    return d.value ? on(I) && Z(I.start) && Z(I.end) : Z(I);
  }
  function Te(I, G) {
    const ue = tr(I), Oe = tr(G);
    return !ue && !Oe ? !0 : ue !== Oe ? !1 : I.getTime() === G.getTime();
  }
  function De(I, G) {
    if (d.value) {
      const ue = se(I), Oe = se(G);
      return !ue && !Oe ? !0 : ue !== Oe ? !1 : Te(I.start, G.start) && Te(I.end, G.end);
    }
    return Te(I, G);
  }
  function ye(I) {
    return !se(I) || !s.value ? !1 : s.value.intersectsRange(r.value.range(I));
  }
  function Be(I, G, ue, Oe) {
    if (!se(I))
      return null;
    if (d.value) {
      const Xe = r.value.toDate(I.start, {
        ...G[0],
        fillDate: b.value ?? void 0,
        patch: ue
      }), Mt = r.value.toDate(I.end, {
        ...G[1],
        fillDate: k.value ?? void 0,
        patch: ue
      });
      return Tn({ start: Xe, end: Mt }, Oe);
    }
    return r.value.toDateOrNull(I, {
      ...G[0],
      fillDate: c.value,
      patch: ue
    });
  }
  function je(I, G) {
    return d.value ? se(I) ? {
      start: r.value.fromDate(I.start, G[0]),
      end: r.value.fromDate(I.end, G[1])
    } : null : r.value.fromDate(I, G[0]);
  }
  function nt(I, G = {}) {
    return clearTimeout(g), new Promise((ue) => {
      const { debounce: Oe = 0, ...Xe } = G;
      Oe > 0 ? g = window.setTimeout(() => {
        ue(E(I, Xe));
      }, Oe) : ue(E(I, Xe));
    });
  }
  function E(I, {
    config: G = S.value,
    patch: ue = "dateTime",
    clearIfEqual: Oe = !1,
    formatInput: Xe = !0,
    hidePopover: Mt = !1,
    dragging: ft = x.value,
    targetPriority: Wn,
    moveToValue: Or = !1
  } = {}) {
    const na = A(G);
    let Dt = Be(
      I,
      na,
      ue,
      Wn
    );
    if (ye(Dt)) {
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
    const Qo = je(
      Dt,
      S.value
    );
    return ls && (y = !1, o(ft ? "drag" : "update:modelValue", Qo), Zn(() => y = !0)), Mt && !ft && Lt(), Xe && _(), Or && Zn(() => H(Wn ?? "start")), Qo;
  }
  function _() {
    Zn(() => {
      const I = A({
        type: "string",
        mask: R.value
      }), G = je(
        u.value || c.value,
        I
      );
      d.value ? f.value = [G && G.start, G && G.end] : f.value = [G, ""];
    });
  }
  function M(I, G, ue) {
    f.value.splice(G === "start" ? 0 : 1, 1, I);
    const Oe = d.value ? {
      start: f.value[0],
      end: f.value[1] || f.value[0]
    } : I, Xe = {
      type: "string",
      mask: R.value
    };
    nt(Oe, {
      ...ue,
      config: Xe,
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
  function be(I) {
    I.key === "Escape" && nt(c.value, {
      formatInput: !0,
      hidePopover: !0
    });
  }
  function ot(I) {
    return d.value ? [
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
  function Le(I) {
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
    if (d.value) {
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
        Lt();
    }
    o("daykeydown", I, G);
  }
  function Ut(I, G) {
    !x.value || m == null || (m.end = I.date, nt(Tn(m), {
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
  function Lt(I = {}) {
    Ya({
      hideDelay: 10,
      force: !0,
      ...ce.value,
      ...I,
      id: l.value
    });
  }
  function Pt(I) {
    Ic({
      ...ce.value,
      ...I,
      isInteractive: !0,
      id: l.value
    });
  }
  function Tn(I, G) {
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
      const G = d.value ? I ? b.value : k.value : c.value;
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
    const { firstPage: ue, lastPage: Oe, move: Xe } = p.value, Mt = I !== "end", ft = Hn(Mt), Wn = Mt ? 1 : -1;
    return !ft || Ec(ft, ue, Oe) ? !1 : Xe(ft, {
      position: Wn,
      ...G
    });
  }
  Ae(
    () => e.isRange,
    (I) => {
      I && console.warn(
        "The `is-range` prop will be deprecated in future releases. Please use the `range` modifier."
      );
    },
    { immediate: !0 }
  ), Ae(
    () => R.value,
    () => _()
  ), Ae(
    () => e.modelValue,
    (I) => {
      y && E(I, {
        formatInput: !0,
        hidePopover: !1
      });
    }
  ), Ae(
    () => j.value,
    () => {
      on(e.rules) && E(e.modelValue, {
        formatInput: !0,
        hidePopover: !1
      });
    }
  ), Ae(
    () => e.timezone,
    () => {
      E(c.value, { formatInput: !0 });
    }
  );
  const K = V(S.value);
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
    isRange: d,
    isTimeMode: N,
    isDateTimeMode: L,
    is24hr: us(e, "is24hr"),
    hideTimeHeader: us(e, "hideTimeHeader"),
    timeAccuracy: us(e, "timeAccuracy"),
    isDragging: x,
    inputValue: le,
    inputEvents: _e,
    dateParts: P,
    attributes: O,
    rules: j,
    move: is,
    moveBy: ta,
    moveToValue: H,
    updateValue: nt,
    showPopover: vn,
    hidePopover: Lt,
    togglePopover: Pt,
    onDayClick: He,
    onDayKeydown: We,
    onDayMouseEnter: Ut,
    onPopoverBeforeShow: Et,
    onPopoverAfterShow: Vt,
    onPopoverBeforeHide: Le,
    onPopoverAfterHide: F
  };
  return En(Lc, fe), fe;
}
function gk() {
  const e = Ye(Lc);
  if (e)
    return e;
  throw new Error(
    "DatePicker context missing. Please verify this component is nested within a valid context provider."
  );
}
const _k = [
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
], bk = [
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
function yk(e) {
  const t = gk(), {
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
  function f(Y) {
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
  const v = C(() => e.position === 0), p = C(
    () => s.value[e.position] || { isValid: !1 }
  ), g = C(() => mc(p.value)), m = C(() => !!p.value.isValid), y = C(() => !l.value && m.value), d = C(() => {
    if (!g.value)
      return null;
    let Y = n.value.toDate(p.value);
    return p.value.hours === 24 && (Y = new Date(Y.getTime() - 1)), Y;
  }), b = C({
    get() {
      return p.value.hours;
    },
    set(Y) {
      f({ hours: Y });
    }
  }), k = C({
    get() {
      return p.value.minutes;
    },
    set(Y) {
      f({ minutes: Y });
    }
  }), w = C({
    get() {
      return p.value.seconds;
    },
    set(Y) {
      f({ seconds: Y });
    }
  }), L = C({
    get() {
      return p.value.milliseconds;
    },
    set(Y) {
      f({ milliseconds: Y });
    }
  }), N = C({
    get() {
      return p.value.hours < 12;
    },
    set(Y) {
      Y = String(Y).toLowerCase() == "true";
      let q = b.value;
      Y && q >= 12 ? q -= 12 : !Y && q < 12 && (q += 12), f({ hours: q });
    }
  }), x = C(
    () => JO(p.value, o.value[e.position])
  ), S = C(() => _k.filter(
    (Y) => x.value.hours.some((q) => q.value === Y.value)
  )), P = C(() => bk.filter(
    (Y) => x.value.hours.some((q) => q.value === Y.value)
  )), R = C(() => i.value ? x.value.hours : N.value ? S.value : P.value), B = C(() => {
    const Y = [];
    return rn(S.value) && Y.push({ value: !0, label: "AM" }), rn(P.value) && Y.push({ value: !1, label: "PM" }), Y;
  });
  return {
    ...t,
    showHeader: y,
    timeAccuracy: c,
    parts: p,
    isValid: m,
    date: d,
    hours: b,
    minutes: k,
    seconds: w,
    milliseconds: L,
    options: x,
    hourOptions: R,
    isAM: N,
    isAMOptions: B,
    is24hr: i
  };
}
const wk = {
  key: 0,
  class: "vc-time-header"
}, Ek = { class: "vc-time-weekday" }, Dk = { class: "vc-time-month" }, Ok = { class: "vc-time-day" }, $k = { class: "vc-time-year" }, kk = { class: "vc-time-select-group" }, Tk = /* @__PURE__ */ $("span", { class: "vc-time-colon" }, ":", -1), Nk = /* @__PURE__ */ $("span", { class: "vc-time-colon" }, ":", -1), Ik = /* @__PURE__ */ $("span", { class: "vc-time-decimal" }, ".", -1), Ck = /* @__PURE__ */ Se({
  __name: "TimePicker",
  props: {
    position: null
  },
  setup(e, { expose: t }) {
    const r = yk(e);
    t(r);
    const {
      locale: a,
      isValid: s,
      date: o,
      hours: i,
      minutes: l,
      seconds: c,
      milliseconds: u,
      options: f,
      hourOptions: v,
      isTimeMode: p,
      isAM: g,
      isAMOptions: m,
      is24hr: y,
      showHeader: d,
      timeAccuracy: b
    } = r;
    return (k, w) => (D(), T("div", {
      class: Ze(["vc-time-picker", [{ "vc-invalid": !h(s), "vc-attached": !h(p) }]])
    }, [
      Ct(k.$slots, "time-header", {}, () => [
        h(d) && h(o) ? (D(), T("div", wk, [
          $("span", Ek, pe(h(a).formatDate(h(o), "WWW")), 1),
          $("span", Dk, pe(h(a).formatDate(h(o), "MMM")), 1),
          $("span", Ok, pe(h(a).formatDate(h(o), "D")), 1),
          $("span", $k, pe(h(a).formatDate(h(o), "YYYY")), 1)
        ])) : X("", !0)
      ]),
      $("div", kk, [
        ge(lr, {
          name: "Clock",
          size: "17"
        }),
        ge(Ir, {
          modelValue: h(i),
          "onUpdate:modelValue": w[0] || (w[0] = (L) => Ie(i) ? i.value = L : null),
          modelModifiers: { number: !0 },
          options: h(v),
          "align-right": ""
        }, null, 8, ["modelValue", "options"]),
        h(b) > 1 ? (D(), T(re, { key: 0 }, [
          Tk,
          ge(Ir, {
            modelValue: h(l),
            "onUpdate:modelValue": w[1] || (w[1] = (L) => Ie(l) ? l.value = L : null),
            modelModifiers: { number: !0 },
            options: h(f).minutes,
            "align-left": h(b) === 2
          }, null, 8, ["modelValue", "options", "align-left"])
        ], 64)) : X("", !0),
        h(b) > 2 ? (D(), T(re, { key: 1 }, [
          Nk,
          ge(Ir, {
            modelValue: h(c),
            "onUpdate:modelValue": w[2] || (w[2] = (L) => Ie(c) ? c.value = L : null),
            modelModifiers: { number: !0 },
            options: h(f).seconds,
            "align-left": h(b) === 3
          }, null, 8, ["modelValue", "options", "align-left"])
        ], 64)) : X("", !0),
        h(b) > 3 ? (D(), T(re, { key: 2 }, [
          Ik,
          ge(Ir, {
            modelValue: h(u),
            "onUpdate:modelValue": w[3] || (w[3] = (L) => Ie(u) ? u.value = L : null),
            modelModifiers: { number: !0 },
            options: h(f).milliseconds,
            "align-left": ""
          }, null, 8, ["modelValue", "options"])
        ], 64)) : X("", !0),
        h(y) ? X("", !0) : (D(), Ue(Ir, {
          key: 3,
          modelValue: h(g),
          "onUpdate:modelValue": w[4] || (w[4] = (L) => Ie(g) ? g.value = L : null),
          options: h(m)
        }, null, 8, ["modelValue", "options"]))
      ])
    ], 2));
  }
}), Lo = Se({
  name: "DatePicker",
  inheritAttrs: !1,
  emits: mk,
  props: pk,
  setup(e, t) {
    const n = hk(e, t), { slots: r, attrs: a } = t, {
      isTimeMode: s,
      isRange: o,
      isDateTimeMode: i,
      color: l,
      displayMode: c,
      dateParts: u,
      datePickerPopoverId: f,
      attributes: v,
      calendarRef: p,
      popoverRef: g,
      showCalendar: m,
      onDayClick: y,
      onDayMouseEnter: d,
      onDayKeydown: b,
      onPopoverBeforeShow: k,
      onPopoverAfterShow: w,
      onPopoverBeforeHide: L,
      onPopoverAfterHide: N
    } = n;
    t.expose(n);
    const x = Js(sc(n, "calendarRef", "popoverRef")), S = () => (o.value ? [0, 1] : [0]).map((Y) => qn(Ck, { position: Y })), P = () => {
      if (!u.value)
        return null;
      const B = i.value ? { ...r, footer: S } : r;
      return qn(
        uk,
        {
          ...a,
          attributes: v.value,
          ref: p,
          onDayclick: y,
          onDaymouseenter: d,
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
        return P();
    };
    return r.default ? () => [
      // Popover trigger
      r.default(x),
      // Popover content
      qn(
        So,
        {
          id: f.value,
          placement: "bottom-start",
          class: `vc-date-picker-content vc-${l.value} vc-${c.value}`,
          ref: g,
          "onBefore-show": k,
          "onAfter-show": w,
          "onBefore-hide": L,
          "onAfter-hide": N
        },
        {
          default: R
        }
      )
    ] : R;
  }
});
const Ak = { class: "flex flex-col gap-2" }, Sk = { class: "flex items-center gap-1" }, Lk = /* @__PURE__ */ $("label", {
  for: "due",
  class: "p4-b text-dark-2"
}, "指定結束日期", -1), Pk = ["onClick"], Mk = /* @__PURE__ */ Se({
  __name: "DuePicker",
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, r = C({
      get: () => n.modelValue ? new Date(n.modelValue).toISOString() : "",
      set: (s) => t("update:modelValue", s)
    }), a = ne(!1);
    return Ae(
      () => n.modelValue,
      (s) => {
        s && (a.value = !0);
      },
      { immediate: !0 }
    ), Ae(a, (s) => {
      s || t("update:modelValue", null);
    }), Kr(() => {
      t("update:modelValue", null);
    }), (s, o) => (D(), T("div", Ak, [
      $("div", Sk, [
        Ke($("input", {
          type: "checkbox",
          "onUpdate:modelValue": o[0] || (o[0] = (i) => Ie(a) ? a.value = i : null),
          id: "due"
        }, null, 512), [
          [Qs, h(a)]
        ]),
        Lk,
        h(a) ? (D(), Ue(h(Lo), {
          key: 0,
          modelValue: h(r),
          "onUpdate:modelValue": o[1] || (o[1] = (i) => Ie(r) ? r.value = i : null),
          mode: "dateTime",
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          "min-Date": /* @__PURE__ */ new Date(),
          is24hr: ""
        }, {
          default: tt(({ togglePopover: i, inputValue: l }) => [
            $("div", {
              class: "p4-b text-dark-3 flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 transition-all hover:bg-light-3 hover:bg-opacity-50",
              onClick: i
            }, pe(l || "未設定"), 9, Pk)
          ]),
          _: 1
        }, 8, ["modelValue", "timezone", "min-Date"])) : X("", !0)
      ])
    ]));
  }
}), xk = { class: "flex w-auto items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-1.5" }, Rk = ["value", "type", "placeholder", "maxLength", "required"], Fk = /* @__PURE__ */ Se({
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
    return (a, s) => (D(), T("div", xk, [
      $("input", {
        value: a.modelValue,
        onInput: r,
        type: a.type,
        class: Ze([a.inputClass, "p3-r w-full border-none outline-none shadow-none placeholder:text-dark-5"]),
        placeholder: a.placeholder,
        maxLength: a.maxLength,
        required: a.required
      }, null, 42, Rk)
    ]));
  }
});
const wn = /* @__PURE__ */ no(Fk, [["__scopeId", "data-v-74afb112"]]);
/*!
  * shared v9.5.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */
const qt = typeof window < "u";
let yt, xn;
if (process.env.NODE_ENV !== "production") {
  const e = qt && window.performance;
  e && e.mark && e.measure && e.clearMarks && // @ts-ignore browser compat
  e.clearMeasures && (yt = (t) => {
    e.mark(t);
  }, xn = (t, n, r) => {
    e.measure(t, n, r), e.clearMarks(n), e.clearMarks(r);
  });
}
const Yk = /\{([0-9a-zA-Z]+)\}/g;
function Po(e, ...t) {
  return t.length === 1 && Ce(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(Yk, (n, r) => t.hasOwnProperty(r) ? t[r] : "");
}
const Jt = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), Vk = (e, t, n) => Uk({ l: e, k: t, s: n }), Uk = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), et = (e) => typeof e == "number" && isFinite(e), jk = (e) => Mc(e) === "[object Date]", On = (e) => Mc(e) === "[object RegExp]", Ja = (e) => me(e) && Object.keys(e).length === 0, st = Object.assign;
let fl;
const nn = () => fl || (fl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function vl(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const Bk = Object.prototype.hasOwnProperty;
function Mo(e, t) {
  return Bk.call(e, t);
}
const Re = Array.isArray, Ve = (e) => typeof e == "function", J = (e) => typeof e == "string", we = (e) => typeof e == "boolean", Ce = (e) => e !== null && typeof e == "object", Pc = Object.prototype.toString, Mc = (e) => Pc.call(e), me = (e) => {
  if (!Ce(e))
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t.constructor === Object;
}, Hk = (e) => e == null ? "" : Re(e) || me(e) && e.toString === Pc ? JSON.stringify(e, null, 2) : String(e);
function Wk(e, t = "") {
  return e.reduce((n, r, a) => a === 0 ? n + r : n + t + r, "");
}
const pl = 2;
function Gk(e, t = 0, n = e.length) {
  const r = e.split(/\r?\n/);
  let a = 0;
  const s = [];
  for (let o = 0; o < r.length; o++)
    if (a += r[o].length + 1, a >= t) {
      for (let i = o - pl; i <= o + pl || n > a; i++) {
        if (i < 0 || i >= r.length)
          continue;
        const l = i + 1;
        s.push(`${l}${" ".repeat(3 - String(l).length)}|  ${r[i]}`);
        const c = r[i].length;
        if (i === o) {
          const u = t - (a - c) + 1, f = Math.max(1, n > a ? c - u : n - t);
          s.push("   |  " + " ".repeat(u) + "^".repeat(f));
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
const ml = {};
function zk(e) {
  ml[e] || (ml[e] = !0, rt(e));
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
function Kk(e, t, n) {
  return { line: e, column: t, offset: n };
}
function Ls(e, t, n) {
  const r = { start: e, end: t };
  return n != null && (r.source = n), r;
}
const qk = /\{([0-9a-zA-Z]+)\}/g;
function Zk(e, ...t) {
  return t.length === 1 && Xk(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(qk, (n, r) => t.hasOwnProperty(r) ? t[r] : "");
}
const xc = Object.assign, hl = (e) => typeof e == "string", Xk = (e) => e !== null && typeof e == "object";
function Rc(e, t = "") {
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
}, Jk = {
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
  const { domain: r, messages: a, args: s } = n, o = Zk((a || Jk)[e] || "", ...s || []), i = new SyntaxError(String(o));
  return i.code = e, t && (i.location = t), i.domain = r, i;
}
function Qk(e) {
  throw e;
}
const eT = /<\/?[\w\s="/.':;#-\/]+>/, tT = (e) => eT.test(e), en = " ", nT = "\r", ut = `
`, rT = String.fromCharCode(8232), aT = String.fromCharCode(8233);
function sT(e) {
  const t = e;
  let n = 0, r = 1, a = 1, s = 0;
  const o = (x) => t[x] === nT && t[x + 1] === ut, i = (x) => t[x] === ut, l = (x) => t[x] === aT, c = (x) => t[x] === rT, u = (x) => o(x) || i(x) || l(x) || c(x), f = () => n, v = () => r, p = () => a, g = () => s, m = (x) => o(x) || l(x) || c(x) ? ut : t[x], y = () => m(n), d = () => m(n + s);
  function b() {
    return s = 0, u(n) && (r++, a = 0), o(n) && n++, n++, a++, t[n];
  }
  function k() {
    return o(n + s) && s++, s++, t[n + s];
  }
  function w() {
    n = 0, r = 1, a = 1, s = 0;
  }
  function L(x = 0) {
    s = x;
  }
  function N() {
    const x = n + s;
    for (; x !== n; )
      b();
    s = 0;
  }
  return {
    index: f,
    line: v,
    column: p,
    peekOffset: g,
    charAt: m,
    currentChar: y,
    currentPeek: d,
    next: b,
    peek: k,
    reset: w,
    resetPeek: L,
    skipToPeek: N
  };
}
const mn = void 0, oT = ".", gl = "'", iT = "tokenizer";
function lT(e, t = {}) {
  const n = t.location !== !1, r = sT(e), a = () => r.index(), s = () => Kk(r.line(), r.column(), r.index()), o = s(), i = a(), l = {
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
  function f(E, _, M, ...Q) {
    const oe = c();
    if (_.column += M, _.offset += M, u) {
      const be = n ? Ls(oe.startLoc, _) : null, ot = wr(E, be, {
        domain: iT,
        args: Q
      });
      u(ot);
    }
  }
  function v(E, _, M) {
    E.endLoc = s(), E.currentType = _;
    const Q = { type: _ };
    return n && (Q.loc = Ls(E.startLoc, E.endLoc)), M != null && (Q.value = M), Q;
  }
  const p = (E) => v(
    E,
    14
    /* TokenTypes.EOF */
  );
  function g(E, _) {
    return E.currentChar() === _ ? (E.next(), _) : (f(de.EXPECTED_TOKEN, s(), 0, _), "");
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
  function d(E) {
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
  function k(E, _) {
    const { currentType: M } = _;
    if (M !== 2)
      return !1;
    m(E);
    const Q = d(E.currentPeek());
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
  function L(E, _) {
    const { currentType: M } = _;
    if (M !== 2)
      return !1;
    m(E);
    const Q = E.currentPeek() === gl;
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
    const Q = d(E.currentPeek());
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
  function P(E, _) {
    const { currentType: M } = _;
    if (M !== 10)
      return !1;
    const Q = () => {
      const be = E.currentPeek();
      return be === "{" ? d(E.peek()) : be === "@" || be === "%" || be === "|" || be === ":" || be === "." || be === en || !be ? !1 : be === ut ? (E.peek(), Q()) : d(be);
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
    const M = (oe = !1, be = "", ot = !1) => {
      const qe = E.currentPeek();
      return qe === "{" ? be === "%" ? !1 : oe : qe === "@" || !qe ? be === "%" ? !0 : oe : qe === "%" ? (E.peek(), M(oe, "%", !0)) : qe === "|" ? be === "%" || ot ? !0 : !(be === en || be === ut) : qe === en ? (E.peek(), M(!0, en, ot)) : qe === ut ? (E.peek(), M(!0, ut, ot)) : !0;
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
  function _e(E) {
    let _ = "", M = "";
    for (; _ = ee(E); )
      M += _;
    return M;
  }
  function Ee(E) {
    y(E);
    const _ = E.currentChar();
    return _ !== "%" && f(de.EXPECTED_TOKEN, s(), 0, _), E.next(), "%";
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
  function O(E) {
    y(E);
    let _ = "", M = "";
    for (; _ = ce(E); )
      M += _;
    return E.currentChar() === mn && f(de.UNTERMINATED_CLOSING_BRACE, s(), 0), M;
  }
  function j(E) {
    y(E);
    let _ = "";
    return E.currentChar() === "-" ? (E.next(), _ += `-${_e(E)}`) : _ += _e(E), E.currentChar() === mn && f(de.UNTERMINATED_CLOSING_BRACE, s(), 0), _;
  }
  function te(E) {
    y(E), g(E, "'");
    let _ = "", M = "";
    const Q = (be) => be !== gl && be !== ut;
    for (; _ = q(E, Q); )
      _ === "\\" ? M += V(E) : M += _;
    const oe = E.currentChar();
    return oe === ut || oe === mn ? (f(de.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, s(), 0), oe === ut && (E.next(), g(E, "'")), M) : (g(E, "'"), M);
  }
  function V(E) {
    const _ = E.currentChar();
    switch (_) {
      case "\\":
      case "'":
        return E.next(), `\\${_}`;
      case "u":
        return A(E, _, 4);
      case "U":
        return A(E, _, 6);
      default:
        return f(de.UNKNOWN_ESCAPE_SEQUENCE, s(), 0, _), "";
    }
  }
  function A(E, _, M) {
    g(E, _);
    let Q = "";
    for (let oe = 0; oe < M; oe++) {
      const be = le(E);
      if (!be) {
        f(de.INVALID_UNICODE_ESCAPE_SEQUENCE, s(), 0, `\\${_}${Q}${E.currentChar()}`);
        break;
      }
      Q += be;
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
  function Te(E) {
    const _ = (M = !1, Q) => {
      const oe = E.currentChar();
      return oe === "{" || oe === "%" || oe === "@" || oe === "|" || oe === "(" || oe === ")" || !oe || oe === en ? Q : oe === ut || oe === oT ? (Q += oe, E.next(), _(M, Q)) : (Q += oe, E.next(), _(!0, Q));
    };
    return _(!1, "");
  }
  function De(E) {
    y(E);
    const _ = g(
      E,
      "|"
      /* TokenChars.Pipe */
    );
    return y(E), _;
  }
  function ye(E, _) {
    let M = null;
    switch (E.currentChar()) {
      case "{":
        return _.braceNest >= 1 && f(de.NOT_ALLOW_NEST_PLACEHOLDER, s(), 0), E.next(), M = v(
          _,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), y(E), _.braceNest++, M;
      case "}":
        return _.braceNest > 0 && _.currentType === 2 && f(de.EMPTY_PLACEHOLDER, s(), 0), E.next(), M = v(
          _,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), _.braceNest--, _.braceNest > 0 && y(E), _.inLinked && _.braceNest === 0 && (_.inLinked = !1), M;
      case "@":
        return _.braceNest > 0 && f(de.UNTERMINATED_CLOSING_BRACE, s(), 0), M = Be(E, _) || p(_), _.braceNest = 0, M;
      default:
        let oe = !0, be = !0, ot = !0;
        if (R(E))
          return _.braceNest > 0 && f(de.UNTERMINATED_CLOSING_BRACE, s(), 0), M = v(_, 1, De(E)), _.braceNest = 0, _.inLinked = !1, M;
        if (_.braceNest > 0 && (_.currentType === 5 || _.currentType === 6 || _.currentType === 7))
          return f(de.UNTERMINATED_CLOSING_BRACE, s(), 0), _.braceNest = 0, je(E, _);
        if (oe = k(E, _))
          return M = v(_, 5, O(E)), y(E), M;
        if (be = w(E, _))
          return M = v(_, 6, j(E)), y(E), M;
        if (ot = L(E, _))
          return M = v(_, 7, te(E)), y(E), M;
        if (!oe && !be && !ot)
          return M = v(_, 13, Z(E)), f(de.INVALID_TOKEN_IN_PLACEHOLDER, s(), 0, M.value), y(E), M;
        break;
    }
    return M;
  }
  function Be(E, _) {
    const { currentType: M } = _;
    let Q = null;
    const oe = E.currentChar();
    switch ((M === 8 || M === 9 || M === 12 || M === 10) && (oe === ut || oe === en) && f(de.INVALID_LINKED_FORMAT, s(), 0), oe) {
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
        return R(E) ? (Q = v(_, 1, De(E)), _.braceNest = 0, _.inLinked = !1, Q) : N(E, _) || S(E, _) ? (y(E), Be(E, _)) : x(E, _) ? (y(E), v(_, 12, se(E))) : P(E, _) ? (y(E), oe === "{" ? ye(E, _) || Q : v(_, 11, Te(E))) : (M === 8 && f(de.INVALID_LINKED_FORMAT, s(), 0), _.braceNest = 0, _.inLinked = !1, je(E, _));
    }
  }
  function je(E, _) {
    let M = {
      type: 14
      /* TokenTypes.EOF */
    };
    if (_.braceNest > 0)
      return ye(E, _) || p(_);
    if (_.inLinked)
      return Be(E, _) || p(_);
    switch (E.currentChar()) {
      case "{":
        return ye(E, _) || p(_);
      case "}":
        return f(de.UNBALANCED_CLOSING_BRACE, s(), 0), E.next(), v(
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
        const { isModulo: oe, hasSpace: be } = B(E);
        if (oe)
          return be ? v(_, 0, z(E)) : v(_, 4, Ee(E));
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
const uT = "parser", cT = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function dT(e, t, n) {
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
function fT(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function r(d, b, k, w, ...L) {
    const N = d.currentPosition();
    if (N.offset += w, N.column += w, n) {
      const x = t ? Ls(k, N) : null, S = wr(b, x, {
        domain: uT,
        args: L
      });
      n(S);
    }
  }
  function a(d, b, k) {
    const w = { type: d };
    return t && (w.start = b, w.end = b, w.loc = { start: k, end: k }), w;
  }
  function s(d, b, k, w) {
    w && (d.type = w), t && (d.end = b, d.loc && (d.loc.end = k));
  }
  function o(d, b) {
    const k = d.context(), w = a(3, k.offset, k.startLoc);
    return w.value = b, s(w, d.currentOffset(), d.currentPosition()), w;
  }
  function i(d, b) {
    const k = d.context(), { lastOffset: w, lastStartLoc: L } = k, N = a(5, w, L);
    return N.index = parseInt(b, 10), d.nextToken(), s(N, d.currentOffset(), d.currentPosition()), N;
  }
  function l(d, b) {
    const k = d.context(), { lastOffset: w, lastStartLoc: L } = k, N = a(4, w, L);
    return N.key = b, d.nextToken(), s(N, d.currentOffset(), d.currentPosition()), N;
  }
  function c(d, b) {
    const k = d.context(), { lastOffset: w, lastStartLoc: L } = k, N = a(9, w, L);
    return N.value = b.replace(cT, dT), d.nextToken(), s(N, d.currentOffset(), d.currentPosition()), N;
  }
  function u(d) {
    const b = d.nextToken(), k = d.context(), { lastOffset: w, lastStartLoc: L } = k, N = a(8, w, L);
    return b.type !== 12 ? (r(d, de.UNEXPECTED_EMPTY_LINKED_MODIFIER, k.lastStartLoc, 0), N.value = "", s(N, w, L), {
      nextConsumeToken: b,
      node: N
    }) : (b.value == null && r(d, de.UNEXPECTED_LEXICAL_ANALYSIS, k.lastStartLoc, 0, jt(b)), N.value = b.value || "", s(N, d.currentOffset(), d.currentPosition()), {
      node: N
    });
  }
  function f(d, b) {
    const k = d.context(), w = a(7, k.offset, k.startLoc);
    return w.value = b, s(w, d.currentOffset(), d.currentPosition()), w;
  }
  function v(d) {
    const b = d.context(), k = a(6, b.offset, b.startLoc);
    let w = d.nextToken();
    if (w.type === 9) {
      const L = u(d);
      k.modifier = L.node, w = L.nextConsumeToken || d.nextToken();
    }
    switch (w.type !== 10 && r(d, de.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, jt(w)), w = d.nextToken(), w.type === 2 && (w = d.nextToken()), w.type) {
      case 11:
        w.value == null && r(d, de.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, jt(w)), k.key = f(d, w.value || "");
        break;
      case 5:
        w.value == null && r(d, de.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, jt(w)), k.key = l(d, w.value || "");
        break;
      case 6:
        w.value == null && r(d, de.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, jt(w)), k.key = i(d, w.value || "");
        break;
      case 7:
        w.value == null && r(d, de.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, jt(w)), k.key = c(d, w.value || "");
        break;
      default:
        r(d, de.UNEXPECTED_EMPTY_LINKED_KEY, b.lastStartLoc, 0);
        const L = d.context(), N = a(7, L.offset, L.startLoc);
        return N.value = "", s(N, L.offset, L.startLoc), k.key = N, s(k, L.offset, L.startLoc), {
          nextConsumeToken: w,
          node: k
        };
    }
    return s(k, d.currentOffset(), d.currentPosition()), {
      node: k
    };
  }
  function p(d) {
    const b = d.context(), k = b.currentType === 1 ? d.currentOffset() : b.offset, w = b.currentType === 1 ? b.endLoc : b.startLoc, L = a(2, k, w);
    L.items = [];
    let N = null;
    do {
      const P = N || d.nextToken();
      switch (N = null, P.type) {
        case 0:
          P.value == null && r(d, de.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, jt(P)), L.items.push(o(d, P.value || ""));
          break;
        case 6:
          P.value == null && r(d, de.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, jt(P)), L.items.push(i(d, P.value || ""));
          break;
        case 5:
          P.value == null && r(d, de.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, jt(P)), L.items.push(l(d, P.value || ""));
          break;
        case 7:
          P.value == null && r(d, de.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, jt(P)), L.items.push(c(d, P.value || ""));
          break;
        case 8:
          const R = v(d);
          L.items.push(R.node), N = R.nextConsumeToken || null;
          break;
      }
    } while (b.currentType !== 14 && b.currentType !== 1);
    const x = b.currentType === 1 ? b.lastOffset : d.currentOffset(), S = b.currentType === 1 ? b.lastEndLoc : d.currentPosition();
    return s(L, x, S), L;
  }
  function g(d, b, k, w) {
    const L = d.context();
    let N = w.items.length === 0;
    const x = a(1, b, k);
    x.cases = [], x.cases.push(w);
    do {
      const S = p(d);
      N || (N = S.items.length === 0), x.cases.push(S);
    } while (L.currentType !== 14);
    return N && r(d, de.MUST_HAVE_MESSAGES_IN_PLURAL, k, 0), s(x, d.currentOffset(), d.currentPosition()), x;
  }
  function m(d) {
    const b = d.context(), { offset: k, startLoc: w } = b, L = p(d);
    return b.currentType === 14 ? L : g(d, k, w, L);
  }
  function y(d) {
    const b = lT(d, xc({}, e)), k = b.context(), w = a(0, k.offset, k.startLoc);
    return t && w.loc && (w.loc.source = d), w.body = m(b), e.onCacheKey && (w.cacheKey = e.onCacheKey(d)), k.currentType !== 14 && r(b, de.UNEXPECTED_LEXICAL_ANALYSIS, k.lastStartLoc, 0, d[k.offset] || ""), s(w, b.currentOffset(), b.currentPosition()), w;
  }
  return { parse: y };
}
function jt(e) {
  if (e.type === 14)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function vT(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (s) => (n.helpers.add(s), s) };
}
function _l(e, t) {
  for (let n = 0; n < e.length; n++)
    Fo(e[n], t);
}
function Fo(e, t) {
  switch (e.type) {
    case 1:
      _l(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      _l(e.items, t);
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
function pT(e, t = {}) {
  const n = vT(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && Fo(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function mT(e) {
  const t = e.body;
  return t.type === 2 ? bl(t) : t.cases.forEach((n) => bl(n)), e;
}
function bl(e) {
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
      e.static = Rc(t);
      for (let n = 0; n < e.items.length; n++) {
        const r = e.items[n];
        (r.type === 3 || r.type === 9) && delete r.value;
      }
    }
  }
}
const hT = "minifier";
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
        domain: hT,
        args: [e.type]
      });
  }
  delete e.type;
}
const gT = "parser";
function _T(e, t) {
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
  function c(y, d) {
    i.code += y;
  }
  function u(y, d = !0) {
    const b = d ? a : "";
    c(s ? b + "  ".repeat(y) : b);
  }
  function f(y = !0) {
    const d = ++i.indentLevel;
    y && u(d);
  }
  function v(y = !0) {
    const d = --i.indentLevel;
    y && u(d);
  }
  function p() {
    u(i.indentLevel);
  }
  return {
    context: l,
    push: c,
    indent: f,
    deindent: v,
    newline: p,
    helper: (y) => `_${y}`,
    needIndent: () => i.needIndent
  };
}
function bT(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), cr(e, t.key), t.modifier ? (e.push(", "), cr(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function yT(e, t) {
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
function wT(e, t) {
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
function ET(e, t) {
  t.body ? cr(e, t.body) : e.push("null");
}
function cr(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      ET(e, t);
      break;
    case 1:
      wT(e, t);
      break;
    case 2:
      yT(e, t);
      break;
    case 6:
      bT(e, t);
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
        domain: gT,
        args: [t.type]
      });
  }
}
const DT = (e, t = {}) => {
  const n = hl(t.mode) ? t.mode : "normal", r = hl(t.filename) ? t.filename : "message.intl", a = !!t.sourceMap, s = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, o = t.needIndent ? t.needIndent : n !== "arrow", i = e.helpers || [], l = _T(e, {
    mode: n,
    filename: r,
    sourceMap: a,
    breakLineCode: s,
    needIndent: o
  });
  l.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), l.indent(o), i.length > 0 && (l.push(`const { ${Rc(i.map((f) => `${f}: _${f}`), ", ")} } = ctx`), l.newline()), l.push("return "), cr(l, e), l.deindent(o), l.push("}"), delete e.helpers;
  const { code: c, map: u } = l.context();
  return {
    ast: e,
    code: c,
    map: u ? u.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function OT(e, t = {}) {
  const n = xc({}, t), r = !!n.jit, a = !!n.minify, s = n.optimize == null ? !0 : n.optimize, i = fT(n).parse(e);
  return r ? (s && mT(i), a && Kn(i), { ast: i, code: "" }) : (pT(i, n), DT(i, n));
}
/*!
  * core-base v9.5.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */
function $T() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (nn().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (nn().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (nn().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const kn = [];
kn[
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
kn[
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
kn[
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
kn[
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
kn[
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
kn[
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
kn[
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
const kT = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function TT(e) {
  return kT.test(e);
}
function NT(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function IT(e) {
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
function CT(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : TT(t) ? NT(t) : "*" + t;
}
function AT(e) {
  const t = [];
  let n = -1, r = 0, a = 0, s, o, i, l, c, u, f;
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
      if (a = 0, o === void 0 || (o = CT(o), o === !1))
        return !1;
      v[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function p() {
    const g = e[n + 1];
    if (r === 5 && g === "'" || r === 6 && g === '"')
      return n++, i = "\\" + g, v[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; r !== null; )
    if (n++, s = e[n], !(s === "\\" && p())) {
      if (l = IT(s), f = kn[r], c = f[l] || f.l || 8, c === 8 || (r = c[0], c[1] !== void 0 && (u = v[c[1]], u && (i = s, u() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const yl = /* @__PURE__ */ new Map();
function ST(e, t) {
  return Ce(e) ? e[t] : null;
}
function LT(e, t) {
  if (!Ce(e))
    return null;
  let n = yl.get(t);
  if (n || (n = AT(t), n && yl.set(t, n)), !n)
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
const PT = (e) => e, MT = (e) => "", xT = "text", RT = (e) => e.length === 0 ? "" : Wk(e), FT = Hk;
function wl(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function YT(e) {
  const t = et(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (et(e.named.count) || et(e.named.n)) ? et(e.named.count) ? e.named.count : et(e.named.n) ? e.named.n : t : t;
}
function VT(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function UT(e = {}) {
  const t = e.locale, n = YT(e), r = Ce(e.pluralRules) && J(t) && Ve(e.pluralRules[t]) ? e.pluralRules[t] : wl, a = Ce(e.pluralRules) && J(t) && Ve(e.pluralRules[t]) ? wl : void 0, s = (d) => d[r(n, d.length, a)], o = e.list || [], i = (d) => o[d], l = e.named || {};
  et(e.pluralIndex) && VT(n, l);
  const c = (d) => l[d];
  function u(d) {
    const b = Ve(e.messages) ? e.messages(d) : Ce(e.messages) ? e.messages[d] : !1;
    return b || (e.parent ? e.parent.message(d) : MT);
  }
  const f = (d) => e.modifiers ? e.modifiers[d] : PT, v = me(e.processor) && Ve(e.processor.normalize) ? e.processor.normalize : RT, p = me(e.processor) && Ve(e.processor.interpolate) ? e.processor.interpolate : FT, g = me(e.processor) && J(e.processor.type) ? e.processor.type : xT, y = {
    list: i,
    named: c,
    plural: s,
    linked: (d, ...b) => {
      const [k, w] = b;
      let L = "text", N = "";
      b.length === 1 ? Ce(k) ? (N = k.modifier || N, L = k.type || L) : J(k) && (N = k || N) : b.length === 2 && (J(k) && (N = k || N), J(w) && (L = w || L));
      const x = u(d)(y), S = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        L === "vnode" && Re(x) && N ? x[0] : x
      );
      return N ? f(N)(S, L) : S;
    },
    message: u,
    type: g,
    interpolate: p,
    normalize: v,
    values: st({}, o, l)
  };
  return y;
}
let Hr = null;
function jT(e) {
  Hr = e;
}
function BT(e, t, n) {
  Hr && Hr.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: n
  });
}
const HT = /* @__PURE__ */ WT(
  "function:translate"
  /* IntlifyDevToolsHooks.FunctionTranslate */
);
function WT(e) {
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
}, GT = {
  [ct.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
  [ct.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
  [ct.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
  [ct.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
  [ct.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
  [ct.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale.",
  [ct.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: "This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future."
};
function Rn(e, ...t) {
  return Po(GT[e], ...t);
}
function Yo(e, t) {
  return t.locale != null ? El(t.locale) : El(e.locale);
}
let ps;
function El(e) {
  return J(e) ? e : ps != null && e.resolvedOnce ? ps : ps = e();
}
function zT(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...Re(t) ? t : Ce(t) ? Object.keys(t) : J(t) ? [t] : [n]
  ])];
}
function Fc(e, t, n) {
  const r = J(n) ? n : dr, a = e;
  a.__localeChainCache || (a.__localeChainCache = /* @__PURE__ */ new Map());
  let s = a.__localeChainCache.get(r);
  if (!s) {
    s = [];
    let o = [n];
    for (; Re(o); )
      o = Dl(s, o, t);
    const i = Re(t) || !me(t) ? t : t.default ? t.default : null;
    o = J(i) ? [i] : i, Re(o) && Dl(s, o, !1), a.__localeChainCache.set(r, s);
  }
  return s;
}
function Dl(e, t, n) {
  let r = !0;
  for (let a = 0; a < t.length && we(r); a++) {
    const s = t[a];
    J(s) && (r = KT(e, t[a], n));
  }
  return r;
}
function KT(e, t, n) {
  let r;
  const a = t.split("-");
  do {
    const s = a.join("-");
    r = qT(e, s, n), a.splice(-1, 1);
  } while (a.length && r === !0);
  return r;
}
function qT(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== "!";
    const a = t.replace(/!/g, "");
    e.push(a), (Re(n) || me(n)) && n[a] && (r = n[a]);
  }
  return r;
}
const ZT = "9.5.0", Qa = -1, dr = "en-US", Va = "", Ol = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function XT() {
  return {
    upper: (e, t) => t === "text" && J(e) ? e.toUpperCase() : t === "vnode" && Ce(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && J(e) ? e.toLowerCase() : t === "vnode" && Ce(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && J(e) ? Ol(e) : t === "vnode" && Ce(e) && "__v_isVNode" in e ? Ol(e.children) : e
  };
}
let Yc;
function $l(e) {
  Yc = e;
}
let Vc;
function JT(e) {
  Vc = e;
}
let Uc;
function QT(e) {
  Uc = e;
}
let jc = null;
const kl = (e) => {
  jc = e;
}, e2 = () => jc;
let Bc = null;
const Tl = (e) => {
  Bc = e;
}, t2 = () => Bc;
let Nl = 0;
function n2(e = {}) {
  const t = Ve(e.onWarn) ? e.onWarn : rt, n = J(e.version) ? e.version : ZT, r = J(e.locale) || Ve(e.locale) ? e.locale : dr, a = Ve(r) ? dr : r, s = Re(e.fallbackLocale) || me(e.fallbackLocale) || J(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : a, o = me(e.messages) ? e.messages : { [a]: {} }, i = me(e.datetimeFormats) ? e.datetimeFormats : { [a]: {} }, l = me(e.numberFormats) ? e.numberFormats : { [a]: {} }, c = st({}, e.modifiers || {}, XT()), u = e.pluralRules || {}, f = Ve(e.missing) ? e.missing : null, v = we(e.missingWarn) || On(e.missingWarn) ? e.missingWarn : !0, p = we(e.fallbackWarn) || On(e.fallbackWarn) ? e.fallbackWarn : !0, g = !!e.fallbackFormat, m = !!e.unresolving, y = Ve(e.postTranslation) ? e.postTranslation : null, d = me(e.processor) ? e.processor : null, b = we(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, k = !!e.escapeParameter, w = Ve(e.messageCompiler) ? e.messageCompiler : Yc;
  process.env.NODE_ENV !== "production" && Ve(e.messageCompiler) && zk(Rn(ct.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
  const L = Ve(e.messageResolver) ? e.messageResolver : Vc || ST, N = Ve(e.localeFallbacker) ? e.localeFallbacker : Uc || zT, x = Ce(e.fallbackContext) ? e.fallbackContext : void 0, S = e, P = Ce(S.__datetimeFormatters) ? S.__datetimeFormatters : /* @__PURE__ */ new Map(), R = Ce(S.__numberFormatters) ? S.__numberFormatters : /* @__PURE__ */ new Map(), B = Ce(S.__meta) ? S.__meta : {};
  Nl++;
  const Y = {
    version: n,
    cid: Nl,
    locale: r,
    fallbackLocale: s,
    messages: o,
    modifiers: c,
    pluralRules: u,
    missing: f,
    missingWarn: v,
    fallbackWarn: p,
    fallbackFormat: g,
    unresolving: m,
    postTranslation: y,
    processor: d,
    warnHtmlMessage: b,
    escapeParameter: k,
    messageCompiler: w,
    messageResolver: L,
    localeFallbacker: N,
    fallbackContext: x,
    onWarn: t,
    __meta: B
  };
  return Y.datetimeFormats = i, Y.numberFormats = l, Y.__datetimeFormatters = P, Y.__numberFormatters = R, process.env.NODE_ENV !== "production" && (Y.__v_emitter = S.__v_emitter != null ? S.__v_emitter : void 0), (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && BT(Y, n, B), Y;
}
function es(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function Hc(e, t) {
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
    return process.env.NODE_ENV !== "production" && Hc(r, t) && o(Rn(ct.NOT_FOUND_KEY, { key: t, locale: n })), t;
}
function Cr(e, t, n) {
  const r = e;
  r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function ms(e) {
  return (n) => r2(n, e);
}
function r2(e, t) {
  const n = t.b || t.body;
  if ((n.t || n.type) === 1) {
    const r = n, a = r.c || r.cases;
    return e.plural(a.reduce((s, o) => [
      ...s,
      Il(e, o)
    ], []));
  } else
    return Il(e, n);
}
function Il(e, t) {
  const n = t.s || t.static;
  if (n)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const r = (t.i || t.items).reduce((a, s) => [...a, Ps(e, s)], []);
    return e.normalize(r);
  }
}
function Ps(e, t) {
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
      return e.linked(Ps(e, i.k || i.key), l ? Ps(e, l) : void 0, e.type);
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
const Wc = de.__EXTEND_POINT__, la = xo(Wc), kt = {
  INVALID_ARGUMENT: Wc,
  INVALID_DATE_ARGUMENT: la(),
  INVALID_ISO_DATE_ARGUMENT: la(),
  NOT_SUPPORT_NON_STRING_MESSAGE: la(),
  __EXTEND_POINT__: la()
  // 22
};
function Sn(e) {
  return wr(e, null, process.env.NODE_ENV !== "production" ? { messages: a2 } : void 0);
}
const a2 = {
  [kt.INVALID_ARGUMENT]: "Invalid arguments",
  [kt.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [kt.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
  [kt.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message"
}, s2 = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function Gc(e, t) {
  t && tT(e) && rt(Po(s2, { source: e }));
}
const zc = (e) => e;
let er = /* @__PURE__ */ Object.create(null);
const Fn = (e) => Ce(e) && (e.t === 0 || e.type === 0) && ("b" in e || "body" in e);
function Kc(e, t = {}) {
  let n = !1;
  const r = t.onError || Qk;
  return t.onError = (a) => {
    n = !0, r(a);
  }, { ...OT(e, t), detectError: n };
}
const o2 = (e, t) => {
  if (!J(e))
    throw Sn(kt.NOT_SUPPORT_NON_STRING_MESSAGE);
  {
    const n = we(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && Gc(e, n);
    const a = (t.onCacheKey || zc)(e), s = er[a];
    if (s)
      return s;
    const { code: o, detectError: i } = Kc(e, t), l = new Function(`return ${o}`)();
    return i ? l : er[a] = l;
  }
};
function i2(e, t) {
  if (__INTLIFY_JIT_COMPILATION__ && !__INTLIFY_DROP_MESSAGE_COMPILER__ && J(e)) {
    const n = we(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && Gc(e, n);
    const a = (t.onCacheKey || zc)(e), s = er[a];
    if (s)
      return s;
    const { ast: o, detectError: i } = Kc(e, {
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
const Cl = () => "", xt = (e) => Ve(e);
function Al(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: a, messageCompiler: s, fallbackLocale: o, messages: i } = e, [l, c] = Ms(...t), u = we(c.missingWarn) ? c.missingWarn : e.missingWarn, f = we(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn, v = we(c.escapeParameter) ? c.escapeParameter : e.escapeParameter, p = !!c.resolvedMessage, g = J(c.default) || we(c.default) ? we(c.default) ? s ? l : () => l : c.default : n ? s ? l : () => l : "", m = n || g !== "", y = Yo(e, c);
  v && l2(c);
  let [d, b, k] = p ? [
    l,
    y,
    i[y] || {}
  ] : qc(e, l, y, o, f, u), w = d, L = l;
  if (!p && !(J(w) || Fn(w) || xt(w)) && m && (w = g, L = w), !p && (!(J(w) || Fn(w) || xt(w)) || !J(b)))
    return a ? Qa : l;
  if (process.env.NODE_ENV !== "production" && J(w) && e.messageCompiler == null)
    return rt(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${l}'.`), l;
  let N = !1;
  const x = () => {
    N = !0;
  }, S = xt(w) ? w : Zc(e, l, b, w, L, x);
  if (N)
    return w;
  const P = f2(e, b, k, c), R = UT(P), B = u2(e, S, R), Y = r ? r(B, l) : B;
  if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    const q = {
      timestamp: Date.now(),
      key: J(l) ? l : xt(w) ? w.key : "",
      locale: b || (xt(w) ? w.locale : ""),
      format: J(w) ? w : xt(w) ? w.source : "",
      message: Y
    };
    q.meta = st({}, e.__meta, e2() || {}), HT(q);
  }
  return Y;
}
function l2(e) {
  Re(e.list) ? e.list = e.list.map((t) => J(t) ? vl(t) : t) : Ce(e.named) && Object.keys(e.named).forEach((t) => {
    J(e.named[t]) && (e.named[t] = vl(e.named[t]));
  });
}
function qc(e, t, n, r, a, s) {
  const { messages: o, onWarn: i, messageResolver: l, localeFallbacker: c } = e, u = c(e, r, n);
  let f = {}, v, p = null, g = n, m = null;
  const y = "translate";
  for (let d = 0; d < u.length; d++) {
    if (v = m = u[d], process.env.NODE_ENV !== "production" && n !== v && es(a, t) && i(Rn(ct.FALLBACK_TO_TRANSLATE, {
      key: t,
      target: v
    })), process.env.NODE_ENV !== "production" && n !== v) {
      const N = e.__v_emitter;
      N && N.emit("fallback", {
        type: y,
        key: t,
        from: g,
        to: m,
        groupId: `${y}:${t}`
      });
    }
    f = o[v] || {};
    let b = null, k, w;
    if (process.env.NODE_ENV !== "production" && qt && (b = window.performance.now(), k = "intlify-message-resolve-start", w = "intlify-message-resolve-end", yt && yt(k)), (p = l(f, t)) === null && (p = f[t]), process.env.NODE_ENV !== "production" && qt) {
      const N = window.performance.now(), x = e.__v_emitter;
      x && b && p && x.emit("message-resolve", {
        type: "message-resolve",
        key: t,
        message: p,
        time: N - b,
        groupId: `${y}:${t}`
      }), k && w && yt && xn && (yt(w), xn("intlify message resolve", k, w));
    }
    if (J(p) || Fn(p) || xt(p))
      break;
    const L = Vo(
      e,
      // eslint-disable-line @typescript-eslint/no-explicit-any
      t,
      v,
      s,
      y
    );
    L !== t && (p = L), g = m;
  }
  return [p, v, f];
}
function Zc(e, t, n, r, a, s) {
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
  process.env.NODE_ENV !== "production" && qt && (l = window.performance.now(), c = "intlify-message-compilation-start", u = "intlify-message-compilation-end", yt && yt(c));
  const f = o(r, c2(e, n, a, r, i, s));
  if (process.env.NODE_ENV !== "production" && qt) {
    const v = window.performance.now(), p = e.__v_emitter;
    p && l && p.emit("message-compilation", {
      type: "message-compilation",
      message: r,
      time: v - l,
      groupId: `translate:${t}`
    }), c && u && yt && xn && (yt(u), xn("intlify message compilation", c, u));
  }
  return f.locale = n, f.key = t, f.source = r, f;
}
function u2(e, t, n) {
  let r = null, a, s;
  process.env.NODE_ENV !== "production" && qt && (r = window.performance.now(), a = "intlify-message-evaluation-start", s = "intlify-message-evaluation-end", yt && yt(a));
  const o = t(n);
  if (process.env.NODE_ENV !== "production" && qt) {
    const i = window.performance.now(), l = e.__v_emitter;
    l && r && l.emit("message-evaluation", {
      type: "message-evaluation",
      value: o,
      time: i - r,
      groupId: `translate:${t.key}`
    }), a && s && yt && xn && (yt(s), xn("intlify message evaluation", a, s));
  }
  return o;
}
function Ms(...e) {
  const [t, n, r] = e, a = {};
  if (!J(t) && !et(t) && !xt(t) && !Fn(t))
    throw Sn(kt.INVALID_ARGUMENT);
  const s = et(t) ? String(t) : (xt(t), t);
  return et(n) ? a.plural = n : J(n) ? a.default = n : me(n) && !Ja(n) ? a.named = n : Re(n) && (a.list = n), et(r) ? a.plural = r : J(r) ? a.default = r : me(r) && st(a, r), [s, a];
}
function c2(e, t, n, r, a, s) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: a,
    onError: (o) => {
      if (s && s(o), process.env.NODE_ENV !== "production") {
        const i = d2(r), l = `Message compilation error: ${o.message}`, c = o.location && i && Gk(i, o.location.start.offset, o.location.end.offset), u = e.__v_emitter;
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
    onCacheKey: (o) => Vk(t, n, o)
  };
}
function d2(e) {
  var t;
  if (!J(e)) {
    if ((t = e.loc) != null && t.source)
      return e.loc.source;
  }
}
function f2(e, t, n, r) {
  const { modifiers: a, pluralRules: s, messageResolver: o, fallbackLocale: i, fallbackWarn: l, missingWarn: c, fallbackContext: u } = e, v = {
    locale: t,
    modifiers: a,
    pluralRules: s,
    messages: (p) => {
      let g = o(n, p);
      if (g == null && u) {
        const [, , m] = qc(u, p, t, i, l, c);
        g = o(m, p);
      }
      if (J(g) || Fn(g)) {
        let m = !1;
        const d = Zc(e, p, t, g, p, () => {
          m = !0;
        });
        return m ? Cl : d;
      } else
        return xt(g) ? g : Cl;
    }
  };
  return e.processor && (v.processor = e.processor), r.list && (v.list = r.list), r.named && (v.named = r.named), et(r.plural) && (v.pluralIndex = r.plural), v;
}
const Sl = typeof Intl < "u", Xc = {
  dateTimeFormat: Sl && typeof Intl.DateTimeFormat < "u",
  numberFormat: Sl && typeof Intl.NumberFormat < "u"
};
function Ll(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: a, onWarn: s, localeFallbacker: o } = e, { __datetimeFormatters: i } = e;
  if (process.env.NODE_ENV !== "production" && !Xc.dateTimeFormat)
    return s(Rn(ct.CANNOT_FORMAT_DATE)), Va;
  const [l, c, u, f] = xs(...t), v = we(u.missingWarn) ? u.missingWarn : e.missingWarn, p = we(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, g = !!u.part, m = Yo(e, u), y = o(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    a,
    m
  );
  if (!J(l) || l === "")
    return new Intl.DateTimeFormat(m, f).format(c);
  let d = {}, b, k = null, w = m, L = null;
  const N = "datetime format";
  for (let P = 0; P < y.length; P++) {
    if (b = L = y[P], process.env.NODE_ENV !== "production" && m !== b && es(p, l) && s(Rn(ct.FALLBACK_TO_DATE_FORMAT, {
      key: l,
      target: b
    })), process.env.NODE_ENV !== "production" && m !== b) {
      const R = e.__v_emitter;
      R && R.emit("fallback", {
        type: N,
        key: l,
        from: w,
        to: L,
        groupId: `${N}:${l}`
      });
    }
    if (d = n[b] || {}, k = d[l], me(k))
      break;
    Vo(e, l, b, v, N), w = L;
  }
  if (!me(k) || !J(b))
    return r ? Qa : l;
  let x = `${b}__${l}`;
  Ja(f) || (x = `${x}__${JSON.stringify(f)}`);
  let S = i.get(x);
  return S || (S = new Intl.DateTimeFormat(b, st({}, k, f)), i.set(x, S)), g ? S.formatToParts(c) : S.format(c);
}
const Jc = [
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
      throw Sn(kt.INVALID_ISO_DATE_ARGUMENT);
    const c = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
    i = new Date(c);
    try {
      i.toISOString();
    } catch {
      throw Sn(kt.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (jk(t)) {
    if (isNaN(t.getTime()))
      throw Sn(kt.INVALID_DATE_ARGUMENT);
    i = t;
  } else if (et(t))
    i = t;
  else
    throw Sn(kt.INVALID_ARGUMENT);
  return J(n) ? s.key = n : me(n) && Object.keys(n).forEach((l) => {
    Jc.includes(l) ? o[l] = n[l] : s[l] = n[l];
  }), J(r) ? s.locale = r : me(r) && (o = r), me(a) && (o = a), [s.key || "", i, s, o];
}
function Pl(e, t, n) {
  const r = e;
  for (const a in n) {
    const s = `${t}__${a}`;
    r.__datetimeFormatters.has(s) && r.__datetimeFormatters.delete(s);
  }
}
function Ml(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: a, onWarn: s, localeFallbacker: o } = e, { __numberFormatters: i } = e;
  if (process.env.NODE_ENV !== "production" && !Xc.numberFormat)
    return s(Rn(ct.CANNOT_FORMAT_NUMBER)), Va;
  const [l, c, u, f] = Rs(...t), v = we(u.missingWarn) ? u.missingWarn : e.missingWarn, p = we(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, g = !!u.part, m = Yo(e, u), y = o(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    a,
    m
  );
  if (!J(l) || l === "")
    return new Intl.NumberFormat(m, f).format(c);
  let d = {}, b, k = null, w = m, L = null;
  const N = "number format";
  for (let P = 0; P < y.length; P++) {
    if (b = L = y[P], process.env.NODE_ENV !== "production" && m !== b && es(p, l) && s(Rn(ct.FALLBACK_TO_NUMBER_FORMAT, {
      key: l,
      target: b
    })), process.env.NODE_ENV !== "production" && m !== b) {
      const R = e.__v_emitter;
      R && R.emit("fallback", {
        type: N,
        key: l,
        from: w,
        to: L,
        groupId: `${N}:${l}`
      });
    }
    if (d = n[b] || {}, k = d[l], me(k))
      break;
    Vo(e, l, b, v, N), w = L;
  }
  if (!me(k) || !J(b))
    return r ? Qa : l;
  let x = `${b}__${l}`;
  Ja(f) || (x = `${x}__${JSON.stringify(f)}`);
  let S = i.get(x);
  return S || (S = new Intl.NumberFormat(b, st({}, k, f)), i.set(x, S)), g ? S.formatToParts(c) : S.format(c);
}
const Qc = [
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
    throw Sn(kt.INVALID_ARGUMENT);
  const i = t;
  return J(n) ? s.key = n : me(n) && Object.keys(n).forEach((l) => {
    Qc.includes(l) ? o[l] = n[l] : s[l] = n[l];
  }), J(r) ? s.locale = r : me(r) && (o = r), me(a) && (o = a), [s.key || "", i, s, o];
}
function xl(e, t, n) {
  const r = e;
  for (const a in n) {
    const s = `${t}__${a}`;
    r.__numberFormatters.has(s) && r.__numberFormatters.delete(s);
  }
}
$T();
function v2() {
  return ed().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function ed() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const p2 = typeof Proxy == "function", m2 = "devtools-plugin:setup", h2 = "plugin:settings:set";
let Gn, Fs;
function g2() {
  var e;
  return Gn !== void 0 || (typeof window < "u" && window.performance ? (Gn = !0, Fs = window.performance) : typeof global < "u" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (Gn = !0, Fs = global.perf_hooks.performance) : Gn = !1), Gn;
}
function _2() {
  return g2() ? Fs.now() : Date.now();
}
class b2 {
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
        return _2();
      }
    }, n && n.on(h2, (o, i) => {
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
function y2(e, t) {
  const n = e, r = ed(), a = v2(), s = p2 && n.enableEarlyProxy;
  if (a && (r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !s))
    a.emit(m2, e, t);
  else {
    const o = s ? new b2(n, a) : null;
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
const w2 = "9.5.0";
function E2() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (nn().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (nn().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (nn().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (nn().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (nn().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const td = ct.__EXTEND_POINT__, hn = xo(td), ze = {
  FALLBACK_TO_ROOT: td,
  NOT_SUPPORTED_PRESERVE: hn(),
  NOT_SUPPORTED_FORMATTER: hn(),
  NOT_SUPPORTED_PRESERVE_DIRECTIVE: hn(),
  NOT_SUPPORTED_GET_CHOICE_INDEX: hn(),
  COMPONENT_NAME_LEGACY_COMPATIBLE: hn(),
  NOT_FOUND_PARENT_SCOPE: hn(),
  IGNORE_OBJ_FLATTEN: hn(),
  NOTICE_DROP_ALLOW_COMPOSITION: hn()
  // 17
}, D2 = {
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
function bt(e, ...t) {
  return Po(D2[e], ...t);
}
const nd = kt.__EXTEND_POINT__, vt = xo(nd), $e = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: nd,
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
  return wr(e, null, process.env.NODE_ENV !== "production" ? { messages: O2, args: t } : void 0);
}
const O2 = {
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
}, Ys = /* @__PURE__ */ Jt("__translateVNode"), Vs = /* @__PURE__ */ Jt("__datetimeParts"), Us = /* @__PURE__ */ Jt("__numberParts"), Yn = /* @__PURE__ */ Jt("__enableEmitter"), Wr = /* @__PURE__ */ Jt("__disableEmitter"), rd = Jt("__setPluralRules"), ad = /* @__PURE__ */ Jt("__injectWithOption"), js = /* @__PURE__ */ Jt("__dispose");
function Bs(e) {
  if (!Ce(e))
    return e;
  for (const t in e)
    if (Mo(e, t))
      if (!t.includes("."))
        Ce(e[t]) && Bs(e[t]);
      else {
        const n = t.split("."), r = n.length - 1;
        let a = e, s = !1;
        for (let o = 0; o < r; o++) {
          if (n[o] in a || (a[n[o]] = {}), !Ce(a[n[o]])) {
            process.env.NODE_ENV !== "production" && rt(bt(ze.IGNORE_OBJ_FLATTEN, {
              key: n[o]
            })), s = !0;
            break;
          }
          a = a[n[o]];
        }
        s || (a[n[r]] = e[t], delete e[t]), Ce(a[n[r]]) && Bs(a[n[r]]);
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
const ua = (e) => !Ce(e) || Re(e);
function Rr(e, t) {
  if (ua(e) || ua(t))
    throw Je($e.INVALID_VALUE);
  for (const n in e)
    Mo(e, n) && (ua(e[n]) || ua(t[n]) ? t[n] = e[n] : Rr(e[n], t[n]));
}
function sd(e) {
  return e.type;
}
function od(e, t, n) {
  let r = Ce(t.messages) ? t.messages : {};
  "__i18nGlobal" in n && (r = ts(e.locale.value, {
    messages: r,
    __i18n: n.__i18nGlobal
  }));
  const a = Object.keys(r);
  a.length && a.forEach((s) => {
    e.mergeLocaleMessage(s, r[s]);
  });
  {
    if (Ce(t.datetimeFormats)) {
      const s = Object.keys(t.datetimeFormats);
      s.length && s.forEach((o) => {
        e.mergeDateTimeFormat(o, t.datetimeFormats[o]);
      });
    }
    if (Ce(t.numberFormats)) {
      const s = Object.keys(t.numberFormats);
      s.length && s.forEach((o) => {
        e.mergeNumberFormat(o, t.numberFormats[o]);
      });
    }
  }
}
function Rl(e) {
  return ge(Ud, null, e, 0);
}
const Fl = "__INTLIFY_META__";
let Yl = 0;
function Vl(e) {
  return (t, n, r, a) => e(n, r, Yr() || void 0, a);
}
const $2 = () => {
  const e = Yr();
  let t = null;
  return e && (t = sd(e)[Fl]) ? { [Fl]: t } : null;
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
  let f = n ? n.missingWarn : we(e.missingWarn) || On(e.missingWarn) ? e.missingWarn : !0, v = n ? n.fallbackWarn : we(e.fallbackWarn) || On(e.fallbackWarn) ? e.fallbackWarn : !0, p = n ? n.fallbackRoot : we(e.fallbackRoot) ? e.fallbackRoot : !0, g = !!e.fallbackFormat, m = Ve(e.missing) ? e.missing : null, y = Ve(e.missing) ? Vl(e.missing) : null, d = Ve(e.postTranslation) ? e.postTranslation : null, b = n ? n.warnHtmlMessage : we(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, k = !!e.escapeParameter;
  const w = n ? n.modifiers : me(e.modifiers) ? e.modifiers : {};
  let L = e.pluralRules || n && n.pluralRules, N;
  N = (() => {
    a && Tl(null);
    const F = {
      version: w2,
      locale: o.value,
      fallbackLocale: i.value,
      messages: l.value,
      modifiers: w,
      pluralRules: L,
      missing: y === null ? void 0 : y,
      missingWarn: f,
      fallbackWarn: v,
      fallbackFormat: g,
      unresolving: !0,
      postTranslation: d === null ? void 0 : d,
      warnHtmlMessage: b,
      escapeParameter: k,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    F.datetimeFormats = c.value, F.numberFormats = u.value, F.__datetimeFormatters = me(N) ? N.__datetimeFormatters : void 0, F.__numberFormatters = me(N) ? N.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (F.__v_emitter = me(N) ? N.__v_emitter : void 0);
    const W = n2(F);
    return a && Tl(W), W;
  })(), Cr(N, o.value, i.value);
  function S() {
    return [
      o.value,
      i.value,
      l.value,
      c.value,
      u.value
    ];
  }
  const P = C({
    get: () => o.value,
    set: (F) => {
      o.value = F, N.locale = o.value;
    }
  }), R = C({
    get: () => i.value,
    set: (F) => {
      i.value = F, N.fallbackLocale = i.value, Cr(N, o.value, F);
    }
  }), B = C(() => l.value), Y = /* @__PURE__ */ C(() => c.value), q = /* @__PURE__ */ C(() => u.value);
  function ce() {
    return Ve(d) ? d : null;
  }
  function ee(F) {
    d = F, N.postTranslation = F;
  }
  function le() {
    return m;
  }
  function _e(F) {
    F !== null && (y = Vl(F)), m = F, N.missing = y;
  }
  function Ee(F, W) {
    return F !== "translate" || !W.resolvedMessage;
  }
  const z = (F, W, He, We, Ut, vn) => {
    S();
    let Lt;
    try {
      (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && kl($2()), a || (N.fallbackContext = n ? t2() : void 0), Lt = F(N);
    } finally {
      (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && kl(null), a || (N.fallbackContext = void 0);
    }
    if (et(Lt) && Lt === Qa) {
      const [Pt, Tn] = W();
      if (process.env.NODE_ENV !== "production" && n && J(Pt) && Ee(He, Tn) && (p && (es(v, Pt) || Hc(f, Pt)) && rt(bt(ze.FALLBACK_TO_ROOT, {
        key: Pt,
        type: He
      })), process.env.NODE_ENV !== "production")) {
        const { __v_emitter: Hn } = N;
        Hn && p && Hn.emit("fallback", {
          type: He,
          key: Pt,
          to: "global",
          groupId: `${He}:${Pt}`
        });
      }
      return n && p ? We(n) : Ut(Pt);
    } else {
      if (vn(Lt))
        return Lt;
      throw Je($e.UNEXPECTED_RETURN_TYPE);
    }
  };
  function O(...F) {
    return z((W) => Reflect.apply(Al, null, [W, ...F]), () => Ms(...F), "translate", (W) => Reflect.apply(W.t, W, [...F]), (W) => W, (W) => J(W));
  }
  function j(...F) {
    const [W, He, We] = F;
    if (We && !Ce(We))
      throw Je($e.INVALID_ARGUMENT);
    return O(W, He, st({ resolvedMessage: !0 }, We || {}));
  }
  function te(...F) {
    return z((W) => Reflect.apply(Ll, null, [W, ...F]), () => xs(...F), "datetime format", (W) => Reflect.apply(W.d, W, [...F]), () => Va, (W) => J(W));
  }
  function V(...F) {
    return z((W) => Reflect.apply(Ml, null, [W, ...F]), () => Rs(...F), "number format", (W) => Reflect.apply(W.n, W, [...F]), () => Va, (W) => J(W));
  }
  function A(F) {
    return F.map((W) => J(W) || et(W) || we(W) ? Rl(String(W)) : W);
  }
  const se = {
    normalize: A,
    interpolate: (F) => F,
    type: "vnode"
  };
  function Te(...F) {
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
      (W) => [Rl(W)],
      (W) => Re(W)
    );
  }
  function De(...F) {
    return z(
      (W) => Reflect.apply(Ml, null, [W, ...F]),
      () => Rs(...F),
      "number format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (W) => W[Us](...F),
      () => [],
      (W) => J(W) || Re(W)
    );
  }
  function ye(...F) {
    return z(
      (W) => Reflect.apply(Ll, null, [W, ...F]),
      () => xs(...F),
      "datetime format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (W) => W[Vs](...F),
      () => [],
      (W) => J(W) || Re(W)
    );
  }
  function Be(F) {
    L = F, N.pluralRules = L;
  }
  function je(F, W) {
    if (!F)
      return !1;
    const He = J(W) ? W : o.value, We = _(He);
    return N.messageResolver(We, F) !== null;
  }
  function nt(F) {
    let W = null;
    const He = Fc(N, i.value, o.value);
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
  function be(F, W) {
    c.value[F] = W, N.datetimeFormats = c.value, Pl(N, F, W);
  }
  function ot(F, W) {
    c.value[F] = st(c.value[F] || {}, W), N.datetimeFormats = c.value, Pl(N, F, W);
  }
  function qe(F) {
    return u.value[F] || {};
  }
  function Et(F, W) {
    u.value[F] = W, N.numberFormats = u.value, xl(N, F, W);
  }
  function Vt(F, W) {
    u.value[F] = st(u.value[F] || {}, W), N.numberFormats = u.value, xl(N, F, W);
  }
  Yl++, n && qt && (Ae(n.locale, (F) => {
    s && (o.value = F, N.locale = F, Cr(N, o.value, i.value));
  }), Ae(n.fallbackLocale, (F) => {
    s && (i.value = F, N.fallbackLocale = F, Cr(N, o.value, i.value));
  }));
  const Le = {
    id: Yl,
    locale: P,
    fallbackLocale: R,
    get inheritLocale() {
      return s;
    },
    set inheritLocale(F) {
      s = F, F && n && (o.value = n.locale.value, i.value = n.fallbackLocale.value, Cr(N, o.value, i.value));
    },
    get availableLocales() {
      return Object.keys(l.value).sort();
    },
    messages: B,
    get modifiers() {
      return w;
    },
    get pluralRules() {
      return L || {};
    },
    get isGlobal() {
      return a;
    },
    get missingWarn() {
      return f;
    },
    set missingWarn(F) {
      f = F, N.missingWarn = f;
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
      return g;
    },
    set fallbackFormat(F) {
      g = F, N.fallbackFormat = g;
    },
    get warnHtmlMessage() {
      return b;
    },
    set warnHtmlMessage(F) {
      b = F, N.warnHtmlMessage = F;
    },
    get escapeParameter() {
      return k;
    },
    set escapeParameter(F) {
      k = F, N.escapeParameter = F;
    },
    t: O,
    getLocaleMessage: _,
    setLocaleMessage: M,
    mergeLocaleMessage: Q,
    getPostTranslationHandler: ce,
    setPostTranslationHandler: ee,
    getMissingHandler: le,
    setMissingHandler: _e,
    [rd]: Be
  };
  return Le.datetimeFormats = Y, Le.numberFormats = q, Le.rt = j, Le.te = je, Le.tm = E, Le.d = te, Le.n = V, Le.getDateTimeFormat = oe, Le.setDateTimeFormat = be, Le.mergeDateTimeFormat = ot, Le.getNumberFormat = qe, Le.setNumberFormat = Et, Le.mergeNumberFormat = Vt, Le[ad] = r, Le[Ys] = Te, Le[Vs] = ye, Le[Us] = De, process.env.NODE_ENV !== "production" && (Le[Yn] = (F) => {
    N.__v_emitter = F;
  }, Le[Wr] = () => {
    N.__v_emitter = void 0;
  }), Le;
}
function k2(e) {
  const t = J(e.locale) ? e.locale : dr, n = J(e.fallbackLocale) || Re(e.fallbackLocale) || me(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t, r = Ve(e.missing) ? e.missing : void 0, a = we(e.silentTranslationWarn) || On(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0, s = we(e.silentFallbackWarn) || On(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0, o = we(e.fallbackRoot) ? e.fallbackRoot : !0, i = !!e.formatFallbackMessages, l = me(e.modifiers) ? e.modifiers : {}, c = e.pluralizationRules, u = Ve(e.postTranslation) ? e.postTranslation : void 0, f = J(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0, v = !!e.escapeParameterHtml, p = we(e.sync) ? e.sync : !0;
  process.env.NODE_ENV !== "production" && e.formatter && rt(bt(ze.NOT_SUPPORTED_FORMATTER)), process.env.NODE_ENV !== "production" && e.preserveDirectiveContent && rt(bt(ze.NOT_SUPPORTED_PRESERVE_DIRECTIVE));
  let g = e.messages;
  if (me(e.sharedMessages)) {
    const L = e.sharedMessages;
    g = Object.keys(L).reduce((x, S) => {
      const P = x[S] || (x[S] = {});
      return st(P, L[S]), x;
    }, g || {});
  }
  const { __i18n: m, __root: y, __injectWithOption: d } = e, b = e.datetimeFormats, k = e.numberFormats, w = e.flatJson;
  return {
    locale: t,
    fallbackLocale: n,
    messages: g,
    flatJson: w,
    datetimeFormats: b,
    numberFormats: k,
    missing: r,
    missingWarn: a,
    fallbackWarn: s,
    fallbackRoot: o,
    fallbackFormat: i,
    modifiers: l,
    pluralRules: c,
    postTranslation: u,
    warnHtmlMessage: f,
    escapeParameter: v,
    messageResolver: e.messageResolver,
    inheritLocale: p,
    __i18n: m,
    __root: y,
    __injectWithOption: d
  };
}
function Hs(e = {}, t) {
  {
    const n = Uo(k2(e)), { __extender: r } = e, a = {
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
        return process.env.NODE_ENV !== "production" && rt(bt(ze.NOT_SUPPORTED_FORMATTER)), {
          interpolate() {
            return [];
          }
        };
      },
      set formatter(s) {
        process.env.NODE_ENV !== "production" && rt(bt(ze.NOT_SUPPORTED_FORMATTER));
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
        return process.env.NODE_ENV !== "production" && rt(bt(ze.NOT_SUPPORTED_PRESERVE_DIRECTIVE)), !0;
      },
      set preserveDirectiveContent(s) {
        process.env.NODE_ENV !== "production" && rt(bt(ze.NOT_SUPPORTED_PRESERVE_DIRECTIVE));
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
        let u = null, f = null;
        if (!J(o))
          throw Je($e.INVALID_ARGUMENT);
        const v = o;
        return J(i) ? c.locale = i : Re(i) ? u = i : me(i) && (f = i), Re(l) ? u = l : me(l) && (f = l), Reflect.apply(n.t, n, [
          v,
          u || f || {},
          c
        ]);
      },
      rt(...s) {
        return Reflect.apply(n.rt, n, [...s]);
      },
      // tc
      tc(...s) {
        const [o, i, l] = s, c = { plural: 1 };
        let u = null, f = null;
        if (!J(o))
          throw Je($e.INVALID_ARGUMENT);
        const v = o;
        return J(i) ? c.locale = i : et(i) ? c.plural = i : Re(i) ? u = i : me(i) && (f = i), J(l) ? c.locale = l : Re(l) ? u = l : me(l) && (f = l), Reflect.apply(n.t, n, [
          v,
          u || f || {},
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
        return process.env.NODE_ENV !== "production" && rt(bt(ze.NOT_SUPPORTED_GET_CHOICE_INDEX)), -1;
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
function T2({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, a) => [
    ...r,
    // prettier-ignore
    ...a.type === re ? a.children : [a]
  ], []) : t.reduce((n, r) => {
    const a = e[r];
    return a && (n[r] = a()), n;
  }, {});
}
function id(e) {
  return re;
}
const N2 = /* @__PURE__ */ Se({
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
      const s = Object.keys(n).filter((f) => f !== "_"), o = {};
      e.locale && (o.locale = e.locale), e.plural !== void 0 && (o.plural = J(e.plural) ? +e.plural : e.plural);
      const i = T2(t, s), l = a[Ys](e.keypath, i, o), c = st({}, r), u = J(e.tag) || Ce(e.tag) ? e.tag : id();
      return qn(u, c, l);
    };
  }
}), hs = N2;
function I2(e) {
  return Re(e) && !J(e[0]);
}
function ld(e, t, n, r) {
  const { slots: a, attrs: s } = t;
  return () => {
    const o = { part: !0 };
    let i = {};
    e.locale && (o.locale = e.locale), J(e.format) ? o.key = e.format : Ce(e.format) && (J(e.format.key) && (o.key = e.format.key), i = Object.keys(e.format).reduce((v, p) => n.includes(p) ? st({}, v, { [p]: e.format[p] }) : v, {}));
    const l = r(e.value, o, i);
    let c = [o.key];
    Re(l) ? c = l.map((v, p) => {
      const g = a[v.type], m = g ? g({ [v.type]: v.value, index: p, parts: l }) : [v.value];
      return I2(m) && (m[0].key = `${v.type}-${p}`), m;
    }) : J(l) && (c = [l]);
    const u = st({}, s), f = J(e.tag) || Ce(e.tag) ? e.tag : id();
    return qn(f, u, c);
  };
}
const C2 = /* @__PURE__ */ Se({
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
    return ld(e, t, Qc, (...r) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[Us](...r)
    ));
  }
}), Ul = C2, A2 = /* @__PURE__ */ Se({
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
    return ld(e, t, Jc, (...r) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[Vs](...r)
    ));
  }
}), jl = A2;
function S2(e, t) {
  const n = e;
  if (e.mode === "composition")
    return n.__getInstance(t) || e.global;
  {
    const r = n.__getInstance(t);
    return r != null ? r.__composer : e.global.__composer;
  }
}
function L2(e) {
  const t = (o) => {
    const { instance: i, modifiers: l, value: c } = o;
    if (!i || !i.$)
      throw Je($e.UNEXPECTED_ERROR);
    const u = S2(e, i.$);
    process.env.NODE_ENV !== "production" && l.preserve && rt(bt(ze.NOT_SUPPORTED_PRESERVE));
    const f = Bl(c);
    return [
      Reflect.apply(u.t, u, [...Hl(f)]),
      u
    ];
  };
  return {
    created: (o, i) => {
      const [l, c] = t(i);
      qt && e.global === c && (o.__i18nWatcher = Ae(c.locale, () => {
        i.instance && i.instance.$forceUpdate();
      })), o.__composer = c, o.textContent = l;
    },
    unmounted: (o) => {
      qt && o.__i18nWatcher && (o.__i18nWatcher(), o.__i18nWatcher = void 0, delete o.__i18nWatcher), o.__composer && (o.__composer = void 0, delete o.__composer);
    },
    beforeUpdate: (o, { value: i }) => {
      if (o.__composer) {
        const l = o.__composer, c = Bl(i);
        o.textContent = Reflect.apply(l.t, l, [
          ...Hl(c)
        ]);
      }
    },
    getSSRProps: (o) => {
      const [i] = t(o);
      return { textContent: i };
    }
  };
}
function Bl(e) {
  if (J(e))
    return { path: e };
  if (me(e)) {
    if (!("path" in e))
      throw Je($e.REQUIRED_VALUE, "path");
    return e;
  } else
    throw Je($e.INVALID_VALUE);
}
function Hl(e) {
  const { path: t, locale: n, args: r, choice: a, plural: s } = e, o = {}, i = r || {};
  return J(n) && (o.locale = n), et(a) && (o.plural = a), et(s) && (o.plural = s), [t, i, o];
}
function P2(e, t, ...n) {
  const r = me(n[0]) ? n[0] : {}, a = !!r.useI18nComponentName, s = we(r.globalInstall) ? r.globalInstall : !0;
  process.env.NODE_ENV !== "production" && s && a && rt(bt(ze.COMPONENT_NAME_LEGACY_COMPATIBLE, {
    name: hs.name
  })), s && ([a ? "i18n" : hs.name, "I18nT"].forEach((o) => e.component(o, hs)), [Ul.name, "I18nN"].forEach((o) => e.component(o, Ul)), [jl.name, "I18nD"].forEach((o) => e.component(o, jl))), e.directive("t", L2(t));
}
const gs = {
  "vue-devtools-plugin-vue-i18n": "Vue I18n devtools",
  "vue-i18n-resource-inspector": "I18n Resources",
  "vue-i18n-timeline": "Vue I18n"
}, M2 = {
  "vue-i18n-resource-inspector": "Search for scopes ..."
}, x2 = {
  "vue-i18n-timeline": 16764185
}, ud = "vue-i18n: composer properties";
let Ws;
async function R2(e, t) {
  return new Promise((n, r) => {
    try {
      y2({
        id: "vue-devtools-plugin-vue-i18n",
        label: gs[
          "vue-devtools-plugin-vue-i18n"
          /* VueDevToolsIDs.PLUGIN */
        ],
        packageName: "vue-i18n",
        homepage: "https://vue-i18n.intlify.dev",
        logo: "https://vue-i18n.intlify.dev/vue-i18n-devtools-logo.png",
        componentStateTypes: [ud],
        app: e
        // eslint-disable-line @typescript-eslint/no-explicit-any
      }, (a) => {
        Ws = a, a.on.visitComponentTree(({ componentInstance: o, treeNode: i }) => {
          F2(o, i, t);
        }), a.on.inspectComponent(({ componentInstance: o, instanceData: i }) => {
          o.vnode.el && o.vnode.el.__VUE_I18N__ && i && (t.mode === "legacy" ? o.vnode.el.__VUE_I18N__ !== t.global.__composer && Wl(i, o.vnode.el.__VUE_I18N__) : Wl(i, o.vnode.el.__VUE_I18N__));
        }), a.addInspector({
          id: "vue-i18n-resource-inspector",
          label: gs[
            "vue-i18n-resource-inspector"
            /* VueDevToolsIDs.CUSTOM_INSPECTOR */
          ],
          icon: "language",
          treeFilterPlaceholder: M2[
            "vue-i18n-resource-inspector"
            /* VueDevToolsIDs.CUSTOM_INSPECTOR */
          ]
        }), a.on.getInspectorTree((o) => {
          o.app === e && o.inspectorId === "vue-i18n-resource-inspector" && B2(o, t);
        });
        const s = /* @__PURE__ */ new Map();
        a.on.getInspectorState(async (o) => {
          if (o.app === e && o.inspectorId === "vue-i18n-resource-inspector")
            if (a.unhighlightElement(), W2(o, t), o.nodeId === "global") {
              if (!s.has(o.app)) {
                const [i] = await a.getComponentInstances(o.app);
                s.set(o.app, i);
              }
              a.highlightElement(s.get(o.app));
            } else {
              const i = H2(o.nodeId, t);
              i && a.highlightElement(i);
            }
        }), a.on.editInspectorState((o) => {
          o.app === e && o.inspectorId === "vue-i18n-resource-inspector" && z2(o, t);
        }), a.addTimelineLayer({
          id: "vue-i18n-timeline",
          label: gs[
            "vue-i18n-timeline"
            /* VueDevToolsIDs.TIMELINE */
          ],
          color: x2[
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
function cd(e) {
  return e.type.name || e.type.displayName || e.type.__file || "Anonymous";
}
function F2(e, t, n) {
  const r = n.mode === "composition" ? n.global : n.global.__composer;
  if (e && e.vnode.el && e.vnode.el.__VUE_I18N__ && e.vnode.el.__VUE_I18N__ !== r) {
    const a = {
      label: `i18n (${cd(e)} Scope)`,
      textColor: 0,
      backgroundColor: 16764185
    };
    t.tags.push(a);
  }
}
function Wl(e, t) {
  const n = ud;
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
    Ve(r) && "source" in r ? t[n] = j2(r) : Fn(r) && r.loc && r.loc.source ? t[n] = r.loc.source : Ce(r) ? t[n] = Bo(r) : t[n] = r;
  }), t;
}
const Y2 = {
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "&": "&amp;"
};
function V2(e) {
  return e.replace(/[<>"&]/g, U2);
}
function U2(e) {
  return Y2[e] || e;
}
function j2(e) {
  return {
    _custom: {
      type: "function",
      display: `<span>ƒ</span> ${e.source ? `("${V2(e.source)}")` : "(?)"}`
    }
  };
}
function B2(e, t) {
  e.rootNodes.push({
    id: "global",
    label: "Global Scope"
  });
  const n = t.mode === "composition" ? t.global : t.global.__composer;
  for (const [r, a] of t.__instances) {
    const s = t.mode === "composition" ? a : a.__composer;
    n !== s && e.rootNodes.push({
      id: s.id.toString(),
      label: `${cd(r)} Scope`
    });
  }
}
function H2(e, t) {
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
function dd(e, t) {
  if (e === "global")
    return t.mode === "composition" ? t.global : t.global.__composer;
  {
    const n = Array.from(t.__instances.values()).find((r) => r.id.toString() === e);
    return n ? t.mode === "composition" ? n : n.__composer : null;
  }
}
function W2(e, t) {
  const n = dd(e.nodeId, t);
  return n && (e.state = G2(n)), null;
}
function G2(e) {
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
function z2(e, t) {
  const n = dd(e.nodeId, t);
  if (n) {
    const [r] = e.path;
    r === "locale" && J(e.state.value) ? n.locale.value = e.state.value : r === "fallbackLocale" && (J(e.state.value) || Re(e.state.value) || Ce(e.state.value)) ? n.fallbackLocale.value = e.state.value : r === "inheritLocale" && we(e.state.value) && (n.inheritLocale = e.state.value);
  }
}
function K2(e, t, n) {
  return {
    beforeCreate() {
      const r = Yr();
      if (!r)
        throw Je($e.UNEXPECTED_ERROR);
      const a = this.$options;
      if (a.i18n) {
        const s = a.i18n;
        if (a.__i18n && (s.__i18n = a.__i18n), s.__root = t, this === this.$root)
          this.$i18n = Gl(e, s);
        else {
          s.__injectWithOption = !0, s.__extender = n.__vueI18nExtend, this.$i18n = Hs(s);
          const o = this.$i18n;
          o.__extender && (o.__disposer = o.__extender(this.$i18n));
        }
      } else if (a.__i18n)
        if (this === this.$root)
          this.$i18n = Gl(e, a);
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
      a.__i18nGlobal && od(t, a, a), this.$t = (...s) => this.$i18n.t(...s), this.$rt = (...s) => this.$i18n.rt(...s), this.$tc = (...s) => this.$i18n.tc(...s), this.$te = (s, o) => this.$i18n.te(s, o), this.$d = (...s) => this.$i18n.d(...s), this.$n = (...s) => this.$i18n.n(...s), this.$tm = (s) => this.$i18n.tm(s), n.__setInstance(r, this.$i18n);
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
function Gl(e, t) {
  e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[rd](t.pluralizationRules || e.pluralizationRules);
  const n = ts(e.locale, {
    messages: t.messages,
    __i18n: t.__i18n
  });
  return Object.keys(n).forEach((r) => e.mergeLocaleMessage(r, n[r])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach((r) => e.mergeDateTimeFormat(r, t.datetimeFormats[r])), t.numberFormats && Object.keys(t.numberFormats).forEach((r) => e.mergeNumberFormat(r, t.numberFormats[r])), e;
}
const q2 = /* @__PURE__ */ Jt("global-vue-i18n");
function Z2(e = {}, t) {
  const n = __VUE_I18N_LEGACY_API__ && we(e.legacy) ? e.legacy : __VUE_I18N_LEGACY_API__, r = we(e.globalInjection) ? e.globalInjection : !0, a = __VUE_I18N_LEGACY_API__ && n ? !!e.allowComposition : !0, s = /* @__PURE__ */ new Map(), [o, i] = X2(e, n), l = /* @__PURE__ */ Jt(process.env.NODE_ENV !== "production" ? "vue-i18n" : "");
  process.env.NODE_ENV !== "production" && n && a && rt(bt(ze.NOTICE_DROP_ALLOW_COMPOSITION));
  function c(v) {
    return s.get(v) || null;
  }
  function u(v, p) {
    s.set(v, p);
  }
  function f(v) {
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
      async install(p, ...g) {
        if (process.env.NODE_ENV !== "production" && (p.__VUE_I18N__ = v), p.__VUE_I18N_SYMBOL__ = l, p.provide(p.__VUE_I18N_SYMBOL__, v), me(g[0])) {
          const d = g[0];
          v.__composerExtend = d.__composerExtend, v.__vueI18nExtend = d.__vueI18nExtend;
        }
        let m = null;
        !n && r && (m = oN(p, v.global)), __VUE_I18N_FULL_INSTALL__ && P2(p, v, ...g), __VUE_I18N_LEGACY_API__ && n && p.mixin(K2(i, i.__composer, v));
        const y = p.unmount;
        if (p.unmount = () => {
          m && m(), v.dispose(), y();
        }, process.env.NODE_ENV !== "production") {
          if (!await R2(p, v))
            throw Je($e.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN);
          const b = Ro();
          if (n) {
            const k = i;
            k.__enableEmitter && k.__enableEmitter(b);
          } else {
            const k = i;
            k[Yn] && k[Yn](b);
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
      __deleteInstance: f
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
  const n = J2(t), r = eN(n), a = sd(t), s = Q2(e, a);
  if (__VUE_I18N_LEGACY_API__ && n.mode === "legacy" && !e.__useComponent) {
    if (!n.allowComposition)
      throw Je($e.NOT_AVAILABLE_IN_LEGACY_MODE);
    return aN(t, s, r, e);
  }
  if (s === "global")
    return od(r, e, a), r;
  if (s === "parent") {
    let l = tN(n, t, e.__useComponent);
    return l == null && (process.env.NODE_ENV !== "production" && rt(bt(ze.NOT_FOUND_PARENT_SCOPE)), l = r), l;
  }
  const o = n;
  let i = o.__getInstance(t);
  if (i == null) {
    const l = st({}, e);
    "__i18n" in a && (l.__i18n = a.__i18n), r && (l.__root = r), i = Uo(l), o.__composerExtend && (i[js] = o.__composerExtend(i)), rN(o, t, i), o.__setInstance(t, i);
  }
  return i;
}
function X2(e, t, n) {
  const r = Fd();
  {
    const a = __VUE_I18N_LEGACY_API__ && t ? r.run(() => Hs(e)) : r.run(() => Uo(e));
    if (a == null)
      throw Je($e.UNEXPECTED_ERROR);
    return [r, a];
  }
}
function J2(e) {
  {
    const t = Ye(e.isCE ? q2 : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t)
      throw Je(e.isCE ? $e.NOT_INSTALLED_WITH_PROVIDE : $e.UNEXPECTED_ERROR);
    return t;
  }
}
function Q2(e, t) {
  return Ja(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function eN(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function tN(e, t, n = !1) {
  let r = null;
  const a = t.root;
  let s = nN(t, n);
  for (; s != null; ) {
    const o = e;
    if (e.mode === "composition")
      r = o.__getInstance(s);
    else if (__VUE_I18N_LEGACY_API__) {
      const i = o.__getInstance(s);
      i != null && (r = i.__composer, n && r && !r[ad] && (r = null));
    }
    if (r != null || a === s)
      break;
    s = s.parent;
  }
  return r;
}
function nN(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function rN(e, t, n) {
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
function aN(e, t, n, r = {}) {
  const a = t === "local", s = Yd(null);
  if (a && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n))
    throw Je($e.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
  const o = we(r.inheritLocale) ? r.inheritLocale : !J(r.locale), i = ne(
    // prettier-ignore
    !a || o ? n.locale.value : J(r.locale) ? r.locale : dr
  ), l = ne(
    // prettier-ignore
    !a || o ? n.fallbackLocale.value : J(r.fallbackLocale) || Re(r.fallbackLocale) || me(r.fallbackLocale) || r.fallbackLocale === !1 ? r.fallbackLocale : i.value
  ), c = ne(ts(i.value, r)), u = ne(me(r.datetimeFormats) ? r.datetimeFormats : { [i.value]: {} }), f = ne(me(r.numberFormats) ? r.numberFormats : { [i.value]: {} }), v = a ? n.missingWarn : we(r.missingWarn) || On(r.missingWarn) ? r.missingWarn : !0, p = a ? n.fallbackWarn : we(r.fallbackWarn) || On(r.fallbackWarn) ? r.fallbackWarn : !0, g = a ? n.fallbackRoot : we(r.fallbackRoot) ? r.fallbackRoot : !0, m = !!r.fallbackFormat, y = Ve(r.missing) ? r.missing : null, d = Ve(r.postTranslation) ? r.postTranslation : null, b = a ? n.warnHtmlMessage : we(r.warnHtmlMessage) ? r.warnHtmlMessage : !0, k = !!r.escapeParameter, w = a ? n.modifiers : me(r.modifiers) ? r.modifiers : {}, L = r.pluralRules || a && n.pluralRules;
  function N() {
    return [
      i.value,
      l.value,
      c.value,
      u.value,
      f.value
    ];
  }
  const x = C({
    get: () => s.value ? s.value.locale.value : i.value,
    set: (_) => {
      s.value && (s.value.locale.value = _), i.value = _;
    }
  }), S = C({
    get: () => s.value ? s.value.fallbackLocale.value : l.value,
    set: (_) => {
      s.value && (s.value.fallbackLocale.value = _), l.value = _;
    }
  }), P = C(() => s.value ? s.value.messages.value : c.value), R = C(() => u.value), B = C(() => f.value);
  function Y() {
    return s.value ? s.value.getPostTranslationHandler() : d;
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
  function _e(..._) {
    return s.value ? le(() => Reflect.apply(s.value.t, null, [..._])) : le(() => "");
  }
  function Ee(..._) {
    return s.value ? Reflect.apply(s.value.rt, null, [..._]) : "";
  }
  function z(..._) {
    return s.value ? le(() => Reflect.apply(s.value.d, null, [..._])) : le(() => "");
  }
  function O(..._) {
    return s.value ? le(() => Reflect.apply(s.value.n, null, [..._])) : le(() => "");
  }
  function j(_) {
    return s.value ? s.value.tm(_) : {};
  }
  function te(_, M) {
    return s.value ? s.value.te(_, M) : !1;
  }
  function V(_) {
    return s.value ? s.value.getLocaleMessage(_) : {};
  }
  function A(_, M) {
    s.value && (s.value.setLocaleMessage(_, M), c.value[_] = M);
  }
  function Z(_, M) {
    s.value && s.value.mergeLocaleMessage(_, M);
  }
  function se(_) {
    return s.value ? s.value.getDateTimeFormat(_) : {};
  }
  function Te(_, M) {
    s.value && (s.value.setDateTimeFormat(_, M), u.value[_] = M);
  }
  function De(_, M) {
    s.value && s.value.mergeDateTimeFormat(_, M);
  }
  function ye(_) {
    return s.value ? s.value.getNumberFormat(_) : {};
  }
  function Be(_, M) {
    s.value && (s.value.setNumberFormat(_, M), f.value[_] = M);
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
    messages: P,
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
      return s.value ? s.value.pluralRules : L;
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
      return s.value ? s.value.fallbackRoot : g;
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
      return s.value ? s.value.escapeParameter : k;
    },
    set escapeParameter(_) {
      s.value && (s.value.escapeParameter = _);
    },
    t: _e,
    getPostTranslationHandler: Y,
    setPostTranslationHandler: q,
    getMissingHandler: ce,
    setMissingHandler: ee,
    rt: Ee,
    d: z,
    n: O,
    tm: j,
    te,
    getLocaleMessage: V,
    setLocaleMessage: A,
    mergeLocaleMessage: Z,
    getDateTimeFormat: se,
    setDateTimeFormat: Te,
    mergeDateTimeFormat: De,
    getNumberFormat: ye,
    setNumberFormat: Be,
    mergeNumberFormat: je
  };
  function E(_) {
    _.locale.value = i.value, _.fallbackLocale.value = l.value, Object.keys(c.value).forEach((M) => {
      _.mergeLocaleMessage(M, c.value[M]);
    }), Object.keys(u.value).forEach((M) => {
      _.mergeDateTimeFormat(M, u.value[M]);
    }), Object.keys(f.value).forEach((M) => {
      _.mergeNumberFormat(M, f.value[M]);
    }), _.escapeParameter = k, _.fallbackFormat = m, _.fallbackRoot = g, _.fallbackWarn = p, _.missingWarn = v, _.warnHtmlMessage = b;
  }
  return Vd(() => {
    if (e.proxy == null || e.proxy.$i18n == null)
      throw Je($e.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
    const _ = s.value = e.proxy.$i18n.__composer;
    t === "global" ? (i.value = _.locale.value, l.value = _.fallbackLocale.value, c.value = _.messages.value, u.value = _.datetimeFormats.value, f.value = _.numberFormats.value) : a && E(_);
  }), nt;
}
const sN = [
  "locale",
  "fallbackLocale",
  "availableLocales"
], zl = ["t", "rt", "d", "n", "tm", "te"];
function oN(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  return sN.forEach((a) => {
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
  }), e.config.globalProperties.$i18n = n, zl.forEach((a) => {
    const s = Object.getOwnPropertyDescriptor(t, a);
    if (!s || !s.value)
      throw Je($e.UNEXPECTED_ERROR);
    Object.defineProperty(e.config.globalProperties, `$${a}`, s);
  }), () => {
    delete e.config.globalProperties.$i18n, zl.forEach((a) => {
      delete e.config.globalProperties[`$${a}`];
    });
  };
}
E2();
__INTLIFY_JIT_COMPILATION__ ? $l(i2) : $l(o2);
JT(LT);
QT(Fc);
if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const e = nn();
  e.__INTLIFY__ = !0, jT(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
const iN = {
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
}, lN = {
  zh_TW: iN
}, Er = Z2({
  locale: "zh_TW",
  legacy: !1,
  globalInjection: !0,
  messages: lN
}), uN = { class: "flex flex-col gap-3" }, cN = { class: "flex flex-col gap-2" }, dN = { class: "flex gap-2 items-center" }, fN = /* @__PURE__ */ $("span", { class: "p4-b" }, "開始於", -1), vN = ["onClick"], pN = ["value"], mN = /* @__PURE__ */ $("div", { class: "flex items-center justify-center gap-3 w-full my-2" }, [
  /* @__PURE__ */ $("p", { class: "p4-b text-dark-2" }, "執行頻率"),
  /* @__PURE__ */ $("div", { class: "h-[1px] flex-1 bg-light-3" })
], -1), hN = { class: "flex gap-2 items-center" }, gN = { class: "flex items-center gap-2" }, _N = /* @__PURE__ */ $("span", { class: "p4-b" }, "重複", -1), bN = ["value"], yN = /* @__PURE__ */ $("option", { value: 0 }, "自訂", -1), wN = { class: "p4-b" }, EN = {
  key: 0,
  class: "flex items-center gap-2"
}, DN = { class: "flex items-center gap-2" }, ON = /* @__PURE__ */ $("span", { class: "p4-b" }, "頻率", -1), $N = /* @__PURE__ */ $("option", {
  value: "-1",
  disabled: ""
}, "請選擇", -1), kN = ["value"], TN = {
  key: 0,
  class: "flex items-center gap-2"
}, NN = /* @__PURE__ */ $("span", { class: "p4-b" }, "每", -1), IN = { class: "p4-b" }, Kl = 1, CN = /* @__PURE__ */ Se({
  __name: "RepeatFrequency",
  props: {
    frequency: {},
    interval: {}
  },
  emits: ["update:frequency", "update:interval"],
  setup(e, { emit: t }) {
    const n = e, { t: r } = Er.global, a = Ye("eventData"), s = ne(!0);
    Ae(a, () => {
      s.value = !0;
    });
    const o = ne(n.interval ?? Kl);
    Ae(o, (m) => {
      m || (m = Kl), t("update:interval", m);
    });
    const i = ne(n.frequency);
    Ae(i, (m) => {
      t("update:frequency", m);
    });
    const l = C({
      get: () => a.value.start ? new Date(a.value.start).toISOString() : "",
      set: (m) => {
        a.value.start = m;
      }
    }), c = C({
      get: () => a.value.weekdays ?? [],
      set: (m) => {
        a.value.weekdays = m;
      }
    }), u = C({
      get: () => a.value.weekOrdinal ?? [],
      set: (m) => {
        a.value.weekOrdinal = m;
      }
    }), f = C({
      get: () => a.value.monthDate ?? [],
      set: (m) => {
        a.value.monthDate = m;
      }
    }), v = C({
      get: () => a.value.yearMonths ?? [],
      set: (m) => {
        a.value.yearMonths = m;
      }
    }), p = C(() => {
      if (g.value == xe.Never)
        return "只執行一次";
      if (g.value == xe.Hour)
        return "每小時執行一次";
      if (g.value == xe.Day)
        return "每日執行一次";
      if (g.value == xe.Week)
        return "每週執行一次";
      if (g.value == xe.Month)
        return "每月執行一次";
      if (g.value == xe.Annual)
        return "每年執行一次";
      const m = {
        1: "小時",
        2: "日",
        3: "週",
        4: "月",
        5: "年"
      };
      return g.value == 0 ? `每${o.value ?? ""}${m[i.value] ?? ""}執行一次` : "";
    }), g = ne(-1);
    return n.interval == 1 && (g.value = n.frequency), Ae(
      g,
      (m) => {
        xe[m] && (t("update:frequency", m), t("update:interval", 1), i.value = g.value, a.value.weekdays = null, a.value.weekOrdinal = null, a.value.monthDate = null, a.value.yearMonths = null), a.value.customInterval = m === 0;
      },
      { immediate: !0 }
    ), (m, y) => (D(), T("div", uN, [
      $("div", cN, [
        $("div", dN, [
          fN,
          ge(h(Lo), {
            modelValue: h(l),
            "onUpdate:modelValue": y[0] || (y[0] = (d) => Ie(l) ? l.value = d : null),
            mode: "dateTime",
            "min-Date": /* @__PURE__ */ new Date(),
            is24hr: "",
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
          }, {
            default: tt(({ togglePopover: d, inputValue: b }) => [
              $("div", {
                class: "p4-b text-dark-3 flex w-fit cursor-pointer relative items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 transition-all hover:bg-light-3 hover:bg-opacity-50",
                onClick: d
              }, [
                $("input", {
                  value: b,
                  required: "",
                  class: "opacity-0 absolute w-full h-full pointer-events-none"
                }, null, 8, pN),
                qr(" " + pe(b || "未設定"), 1)
              ], 8, vN)
            ]),
            _: 1
          }, 8, ["modelValue", "min-Date", "timezone"])
        ])
      ]),
      mN,
      $("div", hN, [
        $("label", gN, [
          _N,
          Ke($("select", {
            class: "p4-b text-dark-3 flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
            "onUpdate:modelValue": y[1] || (y[1] = (d) => Ie(g) ? g.value = d : null)
          }, [
            (D(!0), T(re, null, ke(h(xe), (d, b) => (D(), T(re, { key: b }, [
              Number.isInteger(d) ? (D(), T("option", {
                key: 0,
                value: d
              }, pe(h(r)(b)), 9, bN)) : X("", !0)
            ], 64))), 128)),
            yN
          ], 512), [
            [at, h(g)]
          ])
        ]),
        $("span", wN, pe(h(p)), 1)
      ]),
      h(xe)[h(g)] == null ? (D(), T("div", EN, [
        $("label", DN, [
          ON,
          Ke($("select", {
            class: "p4-b text-dark-3 flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
            "onUpdate:modelValue": y[2] || (y[2] = (d) => Ie(i) ? i.value = d : null)
          }, [
            $N,
            (D(!0), T(re, null, ke(h(xe), (d, b) => (D(), T(re, { key: b }, [
              d != h(xe).Never && Number.isInteger(d) ? (D(), T("option", {
                key: 0,
                value: d
              }, pe(h(r)(b)), 9, kN)) : X("", !0)
            ], 64))), 128))
          ], 512), [
            [at, h(i)]
          ])
        ]),
        h(i) != -1 ? (D(), T("label", TN, [
          NN,
          ge(wn, {
            class: "!w-10 text-center text-dark-3",
            inputClass: "p4-r",
            modelValue: h(o),
            "onUpdate:modelValue": y[3] || (y[3] = (d) => Ie(o) ? o.value = d : null),
            type: "number"
          }, null, 8, ["modelValue"]),
          $("span", IN, pe(h(r)(`s${h(xe)[h(i)]}`)), 1)
        ])) : X("", !0)
      ])) : X("", !0),
      h(xe)[h(g)] == null ? (D(), Ue(ef, {
        key: 1,
        type: h(i),
        weekdays: h(c),
        "onUpdate:weekdays": y[4] || (y[4] = (d) => Ie(c) ? c.value = d : null),
        weekOrdinal: h(u),
        "onUpdate:weekOrdinal": y[5] || (y[5] = (d) => Ie(u) ? u.value = d : null),
        monthDate: h(f),
        "onUpdate:monthDate": y[6] || (y[6] = (d) => Ie(f) ? f.value = d : null),
        yearMonths: h(v),
        "onUpdate:yearMonths": y[7] || (y[7] = (d) => Ie(v) ? v.value = d : null)
      }, null, 8, ["type", "weekdays", "weekOrdinal", "monthDate", "yearMonths"])) : X("", !0),
      h(i) !== -1 ? (D(), Ue(Mk, {
        key: 2,
        modelValue: h(a).due,
        "onUpdate:modelValue": y[8] || (y[8] = (d) => h(a).due = d)
      }, null, 8, ["modelValue"])) : X("", !0)
    ]));
  }
}), AN = { class: "relative border rounded border-light-3 py-4 px-3" }, SN = { class: "p3-b absolute left-2 -top-3 text-dark-2 bg-light-5" }, Fr = /* @__PURE__ */ Se({
  __name: "OuterBlock",
  props: {
    title: {}
  },
  setup(e) {
    return (t, n) => (D(), T("div", AN, [
      $("div", SN, pe(t.title), 1),
      Ct(t.$slots, "default")
    ]));
  }
});
function fd(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: LN } = Object.prototype, { getPrototypeOf: Wo } = Object, ns = ((e) => (t) => {
  const n = LN.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Qt = (e) => (e = e.toLowerCase(), (t) => ns(t) === e), rs = (e) => (t) => typeof t === e, { isArray: Dr } = Array, zr = rs("undefined");
function PN(e) {
  return e !== null && !zr(e) && e.constructor !== null && !zr(e.constructor) && It(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const vd = Qt("ArrayBuffer");
function MN(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && vd(e.buffer), t;
}
const xN = rs("string"), It = rs("function"), pd = rs("number"), as = (e) => e !== null && typeof e == "object", RN = (e) => e === !0 || e === !1, ha = (e) => {
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
function md(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, a;
  for (; r-- > 0; )
    if (a = n[r], t === a.toLowerCase())
      return a;
  return null;
}
const hd = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), gd = (e) => !zr(e) && e !== hd;
function Gs() {
  const { caseless: e } = gd(this) && this || {}, t = {}, n = (r, a) => {
    const s = e && md(t, a) || a;
    ha(t[s]) && ha(r) ? t[s] = Gs(t[s], r) : ha(r) ? t[s] = Gs({}, r) : Dr(r) ? t[s] = r.slice() : t[s] = r;
  };
  for (let r = 0, a = arguments.length; r < a; r++)
    arguments[r] && Qr(arguments[r], n);
  return t;
}
const GN = (e, t, n, { allOwnKeys: r } = {}) => (Qr(t, (a, s) => {
  n && It(a) ? e[s] = fd(a, n) : e[s] = a;
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
  if (!pd(t))
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
), ql = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), rI = Qt("RegExp"), _d = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  Qr(n, (a, s) => {
    let o;
    (o = t(a, s, e)) !== !1 && (r[s] = o || a);
  }), Object.defineProperties(e, r);
}, aI = (e) => {
  _d(e, (t, n) => {
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
}, iI = (e, t) => (e = +e, Number.isFinite(e) ? e : t), _s = "abcdefghijklmnopqrstuvwxyz", Zl = "0123456789", bd = {
  DIGIT: Zl,
  ALPHA: _s,
  ALPHA_DIGIT: _s + _s.toUpperCase() + Zl
}, lI = (e = 16, t = bd.ALPHA_DIGIT) => {
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
}, dI = Qt("AsyncFunction"), fI = (e) => e && (as(e) || It(e)) && It(e.then) && It(e.catch), U = {
  isArray: Dr,
  isArrayBuffer: vd,
  isBuffer: PN,
  isFormData: BN,
  isArrayBufferView: MN,
  isString: xN,
  isNumber: pd,
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
  hasOwnProperty: ql,
  hasOwnProp: ql,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: _d,
  freezeMethods: aI,
  toObjectSet: sI,
  toCamelCase: nI,
  noop: oI,
  toFiniteNumber: iI,
  findKey: md,
  global: hd,
  isContextDefined: gd,
  ALPHABET: bd,
  generateString: lI,
  isSpecCompliantForm: uI,
  toJSONObject: cI,
  isAsyncFn: dI,
  isThenable: fI
};
function Ne(e, t, n, r, a) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), a && (this.response = a);
}
U.inherits(Ne, Error, {
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
      config: U.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const yd = Ne.prototype, wd = {};
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
  wd[e] = { value: e };
});
Object.defineProperties(Ne, wd);
Object.defineProperty(yd, "isAxiosError", { value: !0 });
Ne.from = (e, t, n, r, a, s) => {
  const o = Object.create(yd);
  return U.toFlatObject(e, o, function(l) {
    return l !== Error.prototype;
  }, (i) => i !== "isAxiosError"), Ne.call(o, e.message, t, n, r, a), o.cause = e, o.name = e.name, s && Object.assign(o, s), o;
};
const vI = null;
function zs(e) {
  return U.isPlainObject(e) || U.isArray(e);
}
function Ed(e) {
  return U.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Xl(e, t, n) {
  return e ? e.concat(t).map(function(a, s) {
    return a = Ed(a), !n && s ? "[" + a + "]" : a;
  }).join(n ? "." : "") : t;
}
function pI(e) {
  return U.isArray(e) && !e.some(zs);
}
const mI = U.toFlatObject(U, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function ss(e, t, n) {
  if (!U.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = U.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(m, y) {
    return !U.isUndefined(y[m]);
  });
  const r = n.metaTokens, a = n.visitor || u, s = n.dots, o = n.indexes, l = (n.Blob || typeof Blob < "u" && Blob) && U.isSpecCompliantForm(t);
  if (!U.isFunction(a))
    throw new TypeError("visitor must be a function");
  function c(g) {
    if (g === null)
      return "";
    if (U.isDate(g))
      return g.toISOString();
    if (!l && U.isBlob(g))
      throw new Ne("Blob is not supported. Use a Buffer instead.");
    return U.isArrayBuffer(g) || U.isTypedArray(g) ? l && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g;
  }
  function u(g, m, y) {
    let d = g;
    if (g && !y && typeof g == "object") {
      if (U.endsWith(m, "{}"))
        m = r ? m : m.slice(0, -2), g = JSON.stringify(g);
      else if (U.isArray(g) && pI(g) || (U.isFileList(g) || U.endsWith(m, "[]")) && (d = U.toArray(g)))
        return m = Ed(m), d.forEach(function(k, w) {
          !(U.isUndefined(k) || k === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? Xl([m], w, s) : o === null ? m : m + "[]",
            c(k)
          );
        }), !1;
    }
    return zs(g) ? !0 : (t.append(Xl(y, m, s), c(g)), !1);
  }
  const f = [], v = Object.assign(mI, {
    defaultVisitor: u,
    convertValue: c,
    isVisitable: zs
  });
  function p(g, m) {
    if (!U.isUndefined(g)) {
      if (f.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      f.push(g), U.forEach(g, function(d, b) {
        (!(U.isUndefined(d) || d === null) && a.call(
          t,
          d,
          U.isString(b) ? b.trim() : b,
          m,
          v
        )) === !0 && p(d, m ? m.concat(b) : [b]);
      }), f.pop();
    }
  }
  if (!U.isObject(e))
    throw new TypeError("data must be an object");
  return p(e), t;
}
function Jl(e) {
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
const Dd = Go.prototype;
Dd.append = function(t, n) {
  this._pairs.push([t, n]);
};
Dd.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Jl);
  } : Jl;
  return this._pairs.map(function(a) {
    return n(a[0]) + "=" + n(a[1]);
  }, "").join("&");
};
function hI(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Od(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || hI, a = n && n.serialize;
  let s;
  if (a ? s = a(t, n) : s = U.isURLSearchParams(t) ? t.toString() : new Go(t, n).toString(r), s) {
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
    U.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const Ql = gI, $d = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, _I = typeof URLSearchParams < "u" ? URLSearchParams : Go, bI = typeof FormData < "u" ? FormData : null, yI = typeof Blob < "u" ? Blob : null, wI = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), EI = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), Gt = {
  isBrowser: !0,
  classes: {
    URLSearchParams: _I,
    FormData: bI,
    Blob: yI
  },
  isStandardBrowserEnv: wI,
  isStandardBrowserWebWorkerEnv: EI,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function DI(e, t) {
  return ss(e, new Gt.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, a, s) {
      return Gt.isNode && U.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function OI(e) {
  return U.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
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
function kd(e) {
  function t(n, r, a, s) {
    let o = n[s++];
    const i = Number.isFinite(+o), l = s >= n.length;
    return o = !o && U.isArray(a) ? a.length : o, l ? (U.hasOwnProp(a, o) ? a[o] = [a[o], r] : a[o] = r, !i) : ((!a[o] || !U.isObject(a[o])) && (a[o] = []), t(n, r, a[o], s) && U.isArray(a[o]) && (a[o] = $I(a[o])), !i);
  }
  if (U.isFormData(e) && U.isFunction(e.entries)) {
    const n = {};
    return U.forEachEntry(e, (r, a) => {
      t(OI(r), a, n, 0);
    }), n;
  }
  return null;
}
function kI(e, t, n) {
  if (U.isString(e))
    try {
      return (t || JSON.parse)(e), U.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const zo = {
  transitional: $d,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", a = r.indexOf("application/json") > -1, s = U.isObject(t);
    if (s && U.isHTMLForm(t) && (t = new FormData(t)), U.isFormData(t))
      return a && a ? JSON.stringify(kd(t)) : t;
    if (U.isArrayBuffer(t) || U.isBuffer(t) || U.isStream(t) || U.isFile(t) || U.isBlob(t))
      return t;
    if (U.isArrayBufferView(t))
      return t.buffer;
    if (U.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let i;
    if (s) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return DI(t, this.formSerializer).toString();
      if ((i = U.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return ss(
          i ? { "files[]": t } : t,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return s || a ? (n.setContentType("application/json", !1), kI(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || zo.transitional, r = n && n.forcedJSONParsing, a = this.responseType === "json";
    if (t && U.isString(t) && (r && !this.responseType || a)) {
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
U.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  zo.headers[e] = {};
});
const Ko = zo, TI = U.toObjectSet([
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
    a = o.indexOf(":"), n = o.substring(0, a).trim().toLowerCase(), r = o.substring(a + 1).trim(), !(!n || t[n] && TI[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, eu = Symbol("internals");
function Ar(e) {
  return e && String(e).trim().toLowerCase();
}
function ga(e) {
  return e === !1 || e == null ? e : U.isArray(e) ? e.map(ga) : String(e);
}
function II(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const CI = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function bs(e, t, n, r, a) {
  if (U.isFunction(r))
    return r.call(this, t, n);
  if (a && (t = n), !!U.isString(t)) {
    if (U.isString(r))
      return t.indexOf(r) !== -1;
    if (U.isRegExp(r))
      return r.test(t);
  }
}
function AI(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function SI(e, t) {
  const n = U.toCamelCase(" " + t);
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
      const u = Ar(l);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const f = U.findKey(a, u);
      (!f || a[f] === void 0 || c === !0 || c === void 0 && a[f] !== !1) && (a[f || l] = ga(i));
    }
    const o = (i, l) => U.forEach(i, (c, u) => s(c, u, l));
    return U.isPlainObject(t) || t instanceof this.constructor ? o(t, n) : U.isString(t) && (t = t.trim()) && !CI(t) ? o(NI(t), n) : t != null && s(n, t, r), this;
  }
  get(t, n) {
    if (t = Ar(t), t) {
      const r = U.findKey(this, t);
      if (r) {
        const a = this[r];
        if (!n)
          return a;
        if (n === !0)
          return II(a);
        if (U.isFunction(n))
          return n.call(this, a, r);
        if (U.isRegExp(n))
          return n.exec(a);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Ar(t), t) {
      const r = U.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || bs(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let a = !1;
    function s(o) {
      if (o = Ar(o), o) {
        const i = U.findKey(r, o);
        i && (!n || bs(r, r[i], i, n)) && (delete r[i], a = !0);
      }
    }
    return U.isArray(t) ? t.forEach(s) : s(t), a;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, a = !1;
    for (; r--; ) {
      const s = n[r];
      (!t || bs(this, this[s], s, t, !0)) && (delete this[s], a = !0);
    }
    return a;
  }
  normalize(t) {
    const n = this, r = {};
    return U.forEach(this, (a, s) => {
      const o = U.findKey(r, s);
      if (o) {
        n[o] = ga(a), delete n[s];
        return;
      }
      const i = t ? AI(s) : String(s).trim();
      i !== s && delete n[s], n[i] = ga(a), r[i] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return U.forEach(this, (r, a) => {
      r != null && r !== !1 && (n[a] = t && U.isArray(r) ? r.join(", ") : r);
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
    const r = (this[eu] = this[eu] = {
      accessors: {}
    }).accessors, a = this.prototype;
    function s(o) {
      const i = Ar(o);
      r[i] || (SI(a, o), r[i] = !0);
    }
    return U.isArray(t) ? t.forEach(s) : s(t), this;
  }
}
os.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
U.reduceDescriptors(os.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
U.freezeMethods(os);
const an = os;
function ys(e, t) {
  const n = this || Ko, r = t || n, a = an.from(r.headers);
  let s = r.data;
  return U.forEach(e, function(i) {
    s = i.call(n, s, a.normalize(), t ? t.status : void 0);
  }), a.normalize(), s;
}
function Td(e) {
  return !!(e && e.__CANCEL__);
}
function ea(e, t, n) {
  Ne.call(this, e ?? "canceled", Ne.ERR_CANCELED, t, n), this.name = "CanceledError";
}
U.inherits(ea, Ne, {
  __CANCEL__: !0
});
function LI(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new Ne(
    "Request failed with status code " + n.status,
    [Ne.ERR_BAD_REQUEST, Ne.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const PI = Gt.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(n, r, a, s, o, i) {
        const l = [];
        l.push(n + "=" + encodeURIComponent(r)), U.isNumber(a) && l.push("expires=" + new Date(a).toGMTString()), U.isString(s) && l.push("path=" + s), U.isString(o) && l.push("domain=" + o), i === !0 && l.push("secure"), document.cookie = l.join("; ");
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
function Nd(e, t) {
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
      const i = U.isString(o) ? a(o) : o;
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
    let f = s, v = 0;
    for (; f !== a; )
      v += n[f++], f = f % e;
    if (a = (a + 1) % e, a === s && (s = (s + 1) % e), c - o < t)
      return;
    const p = u && c - u;
    return p ? Math.round(v * 1e3 / p) : void 0;
  };
}
function tu(e, t) {
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
    U.isFormData(a) && (Gt.isStandardBrowserEnv || Gt.isStandardBrowserWebWorkerEnv ? s.setContentType(!1) : s.getContentType(/^\s*multipart\/form-data/) ? U.isString(c = s.getContentType()) && s.setContentType(c.replace(/^\s*(multipart\/form-data);+/, "$1")) : s.setContentType("multipart/form-data"));
    let u = new XMLHttpRequest();
    if (e.auth) {
      const g = e.auth.username || "", m = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      s.set("Authorization", "Basic " + btoa(g + ":" + m));
    }
    const f = Nd(e.baseURL, e.url);
    u.open(e.method.toUpperCase(), Od(f, e.params, e.paramsSerializer), !0), u.timeout = e.timeout;
    function v() {
      if (!u)
        return;
      const g = an.from(
        "getAllResponseHeaders" in u && u.getAllResponseHeaders()
      ), y = {
        data: !o || o === "text" || o === "json" ? u.responseText : u.response,
        status: u.status,
        statusText: u.statusText,
        headers: g,
        config: e,
        request: u
      };
      LI(function(b) {
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
      const y = e.transitional || $d;
      e.timeoutErrorMessage && (m = e.timeoutErrorMessage), r(new Ne(
        m,
        y.clarifyTimeoutError ? Ne.ETIMEDOUT : Ne.ECONNABORTED,
        e,
        u
      )), u = null;
    }, Gt.isStandardBrowserEnv) {
      const g = (e.withCredentials || RI(f)) && e.xsrfCookieName && PI.read(e.xsrfCookieName);
      g && s.set(e.xsrfHeaderName, g);
    }
    a === void 0 && s.setContentType(null), "setRequestHeader" in u && U.forEach(s.toJSON(), function(m, y) {
      u.setRequestHeader(y, m);
    }), U.isUndefined(e.withCredentials) || (u.withCredentials = !!e.withCredentials), o && o !== "json" && (u.responseType = e.responseType), typeof e.onDownloadProgress == "function" && u.addEventListener("progress", tu(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", tu(e.onUploadProgress)), (e.cancelToken || e.signal) && (i = (g) => {
      u && (r(!g || g.type ? new ea(null, e, u) : g), u.abort(), u = null);
    }, e.cancelToken && e.cancelToken.subscribe(i), e.signal && (e.signal.aborted ? i() : e.signal.addEventListener("abort", i)));
    const p = FI(f);
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
U.forEach(Ks, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const nu = (e) => `- ${e}`, jI = (e) => U.isFunction(e) || e === null || e === !1, Id = {
  getAdapter: (e) => {
    e = U.isArray(e) ? e : [e];
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
` + s.map(nu).join(`
`) : " " + nu(s[0]) : "as no adapter specified";
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
function ru(e) {
  return ws(e), e.headers = an.from(e.headers), e.data = ys.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Id.getAdapter(e.adapter || Ko.adapter)(e).then(function(r) {
    return ws(e), r.data = ys.call(
      e,
      e.transformResponse,
      r
    ), r.headers = an.from(r.headers), r;
  }, function(r) {
    return Td(r) || (ws(e), r && r.response && (r.response.data = ys.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = an.from(r.response.headers))), Promise.reject(r);
  });
}
const au = (e) => e instanceof an ? e.toJSON() : e;
function fr(e, t) {
  t = t || {};
  const n = {};
  function r(c, u, f) {
    return U.isPlainObject(c) && U.isPlainObject(u) ? U.merge.call({ caseless: f }, c, u) : U.isPlainObject(u) ? U.merge({}, u) : U.isArray(u) ? u.slice() : u;
  }
  function a(c, u, f) {
    if (U.isUndefined(u)) {
      if (!U.isUndefined(c))
        return r(void 0, c, f);
    } else
      return r(c, u, f);
  }
  function s(c, u) {
    if (!U.isUndefined(u))
      return r(void 0, u);
  }
  function o(c, u) {
    if (U.isUndefined(u)) {
      if (!U.isUndefined(c))
        return r(void 0, c);
    } else
      return r(void 0, u);
  }
  function i(c, u, f) {
    if (f in t)
      return r(c, u);
    if (f in e)
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
    headers: (c, u) => a(au(c), au(u), !0)
  };
  return U.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const f = l[u] || a, v = f(e[u], t[u], u);
    U.isUndefined(v) && f !== i || (n[u] = v);
  }), n;
}
const Cd = "1.5.1", qo = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  qo[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const su = {};
qo.transitional = function(t, n, r) {
  function a(s, o) {
    return "[Axios v" + Cd + "] Transitional option '" + s + "'" + o + (r ? ". " + r : "");
  }
  return (s, o, i) => {
    if (t === !1)
      throw new Ne(
        a(o, " has been removed" + (n ? " in " + n : "")),
        Ne.ERR_DEPRECATED
      );
    return n && !su[o] && (su[o] = !0, console.warn(
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
      request: new Ql(),
      response: new Ql()
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
    }, !1), a != null && (U.isFunction(a) ? n.paramsSerializer = {
      serialize: a
    } : qs.assertOptions(a, {
      encode: gn.function,
      serialize: gn.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let o = s && U.merge(
      s.common,
      s[n.method]
    );
    s && U.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (g) => {
        delete s[g];
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
    let u, f = 0, v;
    if (!l) {
      const g = [ru.bind(this), void 0];
      for (g.unshift.apply(g, i), g.push.apply(g, c), v = g.length, u = Promise.resolve(n); f < v; )
        u = u.then(g[f++], g[f++]);
      return u;
    }
    v = i.length;
    let p = n;
    for (f = 0; f < v; ) {
      const g = i[f++], m = i[f++];
      try {
        p = g(p);
      } catch (y) {
        m.call(this, y);
        break;
      }
    }
    try {
      u = ru.call(this, p);
    } catch (g) {
      return Promise.reject(g);
    }
    for (f = 0, v = c.length; f < v; )
      u = u.then(c[f++], c[f++]);
    return u;
  }
  getUri(t) {
    t = fr(this.defaults, t);
    const n = Nd(t.baseURL, t.url);
    return Od(n, t.params, t.paramsSerializer);
  }
}
U.forEach(["delete", "get", "head", "options"], function(t) {
  Ua.prototype[t] = function(n, r) {
    return this.request(fr(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
U.forEach(["post", "put", "patch"], function(t) {
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
  return U.isObject(e) && e.isAxiosError === !0;
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
  const t = new _a(e), n = fd(_a.prototype.request, t);
  return U.extend(n, _a.prototype, t, { allOwnKeys: !0 }), U.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(a) {
    return Ad(fr(e, a));
  }, n;
}
const Qe = Ad(Ko);
Qe.Axios = _a;
Qe.CanceledError = ea;
Qe.CancelToken = HI;
Qe.isCancel = Td;
Qe.VERSION = Cd;
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
Qe.formToJSON = (e) => kd(U.isHTMLForm(e) ? new FormData(e) : e);
Qe.getAdapter = Id.getAdapter;
Qe.HttpStatusCode = zI;
Qe.default = Qe;
const ja = Qe, KI = ["width", "height", "fill", "transform"], qI = { key: 0 }, ZI = /* @__PURE__ */ $("path", { d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm48.49-108.49a12,12,0,0,1,0,17l-40,40a12,12,0,0,1-17,0l-40-40a12,12,0,0,1,17-17L128,135l31.51-31.52A12,12,0,0,1,176.49,103.51Z" }, null, -1), XI = [
  ZI
], JI = { key: 1 }, QI = /* @__PURE__ */ $("path", {
  d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
  opacity: "0.2"
}, null, -1), eC = /* @__PURE__ */ $("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-109.66a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L128,140.69l34.34-34.35A8,8,0,0,1,173.66,106.34Z" }, null, -1), tC = [
  QI,
  eC
], nC = { key: 2 }, rC = /* @__PURE__ */ $("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,93.66-40,40a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L128,140.69l34.34-34.35a8,8,0,0,1,11.32,11.32Z" }, null, -1), aC = [
  rC
], sC = { key: 3 }, oC = /* @__PURE__ */ $("path", { d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm44.24-110.24a6,6,0,0,1,0,8.48l-40,40a6,6,0,0,1-8.48,0l-40-40a6,6,0,0,1,8.48-8.48L128,143.51l35.76-35.75A6,6,0,0,1,172.24,107.76Z" }, null, -1), iC = [
  oC
], lC = { key: 4 }, uC = /* @__PURE__ */ $("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-109.66a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L128,140.69l34.34-34.35A8,8,0,0,1,173.66,106.34Z" }, null, -1), cC = [
  uC
], dC = { key: 5 }, fC = /* @__PURE__ */ $("path", { d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm42.83-110.83a4,4,0,0,1,0,5.66l-40,40a4,4,0,0,1-5.66,0l-40-40a4,4,0,0,1,5.66-5.66L128,146.34l37.17-37.17A4,4,0,0,1,170.83,109.17Z" }, null, -1), vC = [
  fC
], pC = {
  name: "PhCaretCircleDown"
}, mC = /* @__PURE__ */ Se({
  ...pC,
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
    const t = e, n = Ye("weight", "regular"), r = Ye("size", "1em"), a = Ye("color", "currentColor"), s = Ye("mirrored", !1), o = C(() => t.weight ?? n), i = C(() => t.size ?? r), l = C(() => t.color ?? a), c = C(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : s ? "scale(-1, 1)" : void 0);
    return (u, f) => (D(), T("svg", un({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: i.value,
      height: i.value,
      fill: l.value,
      transform: c.value
    }, u.$attrs), [
      Ct(u.$slots, "default"),
      o.value === "bold" ? (D(), T("g", qI, XI)) : o.value === "duotone" ? (D(), T("g", JI, tC)) : o.value === "fill" ? (D(), T("g", nC, aC)) : o.value === "light" ? (D(), T("g", sC, iC)) : o.value === "regular" ? (D(), T("g", lC, cC)) : o.value === "thin" ? (D(), T("g", dC, vC)) : X("", !0)
    ], 16, KI));
  }
}), hC = ["width", "height", "fill", "transform"], gC = { key: 0 }, _C = /* @__PURE__ */ $("path", { d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm48.49-76.49a12,12,0,0,1-17,17L128,121,96.49,152.49a12,12,0,0,1-17-17l40-40a12,12,0,0,1,17,0Z" }, null, -1), bC = [
  _C
], yC = { key: 1 }, wC = /* @__PURE__ */ $("path", {
  d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
  opacity: "0.2"
}, null, -1), EC = /* @__PURE__ */ $("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-77.66a8,8,0,0,1-11.32,11.32L128,115.31,93.66,149.66a8,8,0,0,1-11.32-11.32l40-40a8,8,0,0,1,11.32,0Z" }, null, -1), DC = [
  wC,
  EC
], OC = { key: 2 }, $C = /* @__PURE__ */ $("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,125.66a8,8,0,0,1-11.32,0L128,115.31,93.66,149.66a8,8,0,0,1-11.32-11.32l40-40a8,8,0,0,1,11.32,0l40,40A8,8,0,0,1,173.66,149.66Z" }, null, -1), kC = [
  $C
], TC = { key: 3 }, NC = /* @__PURE__ */ $("path", { d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm44.24-78.24a6,6,0,1,1-8.48,8.48L128,112.49,92.24,148.24a6,6,0,0,1-8.48-8.48l40-40a6,6,0,0,1,8.48,0Z" }, null, -1), IC = [
  NC
], CC = { key: 4 }, AC = /* @__PURE__ */ $("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-77.66a8,8,0,0,1-11.32,11.32L128,115.31,93.66,149.66a8,8,0,0,1-11.32-11.32l40-40a8,8,0,0,1,11.32,0Z" }, null, -1), SC = [
  AC
], LC = { key: 5 }, PC = /* @__PURE__ */ $("path", { d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm42.83-78.83a4,4,0,0,1-5.66,5.66L128,109.66,90.83,146.83a4,4,0,0,1-5.66-5.66l40-40a4,4,0,0,1,5.66,0Z" }, null, -1), MC = [
  PC
], xC = {
  name: "PhCaretCircleUp"
}, RC = /* @__PURE__ */ Se({
  ...xC,
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
    const t = e, n = Ye("weight", "regular"), r = Ye("size", "1em"), a = Ye("color", "currentColor"), s = Ye("mirrored", !1), o = C(() => t.weight ?? n), i = C(() => t.size ?? r), l = C(() => t.color ?? a), c = C(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : s ? "scale(-1, 1)" : void 0);
    return (u, f) => (D(), T("svg", un({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: i.value,
      height: i.value,
      fill: l.value,
      transform: c.value
    }, u.$attrs), [
      Ct(u.$slots, "default"),
      o.value === "bold" ? (D(), T("g", gC, bC)) : o.value === "duotone" ? (D(), T("g", yC, DC)) : o.value === "fill" ? (D(), T("g", OC, kC)) : o.value === "light" ? (D(), T("g", TC, IC)) : o.value === "regular" ? (D(), T("g", CC, SC)) : o.value === "thin" ? (D(), T("g", LC, MC)) : X("", !0)
    ], 16, hC));
  }
}), FC = ["width", "height", "fill", "transform"], YC = { key: 0 }, VC = /* @__PURE__ */ $("path", { d: "M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" }, null, -1), UC = [
  VC
], jC = { key: 1 }, BC = /* @__PURE__ */ $("path", {
  d: "M232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Z",
  opacity: "0.2"
}, null, -1), HC = /* @__PURE__ */ $("path", { d: "M205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z" }, null, -1), WC = [
  BC,
  HC
], GC = { key: 2 }, zC = /* @__PURE__ */ $("path", { d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z" }, null, -1), KC = [
  zC
], qC = { key: 3 }, ZC = /* @__PURE__ */ $("path", { d: "M228.24,76.24l-128,128a6,6,0,0,1-8.48,0l-56-56a6,6,0,0,1,8.48-8.48L96,191.51,219.76,67.76a6,6,0,0,1,8.48,8.48Z" }, null, -1), XC = [
  ZC
], JC = { key: 4 }, QC = /* @__PURE__ */ $("path", { d: "M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" }, null, -1), eA = [
  QC
], tA = { key: 5 }, nA = /* @__PURE__ */ $("path", { d: "M226.83,74.83l-128,128a4,4,0,0,1-5.66,0l-56-56a4,4,0,0,1,5.66-5.66L96,194.34,221.17,69.17a4,4,0,1,1,5.66,5.66Z" }, null, -1), rA = [
  nA
], aA = {
  name: "PhCheck"
}, sA = /* @__PURE__ */ Se({
  ...aA,
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
    const t = e, n = Ye("weight", "regular"), r = Ye("size", "1em"), a = Ye("color", "currentColor"), s = Ye("mirrored", !1), o = C(() => t.weight ?? n), i = C(() => t.size ?? r), l = C(() => t.color ?? a), c = C(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : s ? "scale(-1, 1)" : void 0);
    return (u, f) => (D(), T("svg", un({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: i.value,
      height: i.value,
      fill: l.value,
      transform: c.value
    }, u.$attrs), [
      Ct(u.$slots, "default"),
      o.value === "bold" ? (D(), T("g", YC, UC)) : o.value === "duotone" ? (D(), T("g", jC, WC)) : o.value === "fill" ? (D(), T("g", GC, KC)) : o.value === "light" ? (D(), T("g", qC, XC)) : o.value === "regular" ? (D(), T("g", JC, eA)) : o.value === "thin" ? (D(), T("g", tA, rA)) : X("", !0)
    ], 16, FC));
  }
}), oA = ["width", "height", "fill", "transform"], iA = { key: 0 }, lA = /* @__PURE__ */ $("path", { d: "M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z" }, null, -1), uA = [
  lA
], cA = { key: 1 }, dA = /* @__PURE__ */ $("path", {
  d: "M216,48V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z",
  opacity: "0.2"
}, null, -1), fA = /* @__PURE__ */ $("path", { d: "M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" }, null, -1), vA = [
  dA,
  fA
], pA = { key: 2 }, mA = /* @__PURE__ */ $("path", { d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM181.66,170.34a8,8,0,0,1-11.32,11.32L128,139.31,85.66,181.66a8,8,0,0,1-11.32-11.32L116.69,128,74.34,85.66A8,8,0,0,1,85.66,74.34L128,116.69l42.34-42.35a8,8,0,0,1,11.32,11.32L139.31,128Z" }, null, -1), hA = [
  mA
], gA = { key: 3 }, _A = /* @__PURE__ */ $("path", { d: "M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z" }, null, -1), bA = [
  _A
], yA = { key: 4 }, wA = /* @__PURE__ */ $("path", { d: "M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" }, null, -1), EA = [
  wA
], DA = { key: 5 }, OA = /* @__PURE__ */ $("path", { d: "M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z" }, null, -1), $A = [
  OA
], kA = {
  name: "PhX"
}, Xo = /* @__PURE__ */ Se({
  ...kA,
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
    const t = e, n = Ye("weight", "regular"), r = Ye("size", "1em"), a = Ye("color", "currentColor"), s = Ye("mirrored", !1), o = C(() => t.weight ?? n), i = C(() => t.size ?? r), l = C(() => t.color ?? a), c = C(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : s ? "scale(-1, 1)" : void 0);
    return (u, f) => (D(), T("svg", un({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: i.value,
      height: i.value,
      fill: l.value,
      transform: c.value
    }, u.$attrs), [
      Ct(u.$slots, "default"),
      o.value === "bold" ? (D(), T("g", iA, uA)) : o.value === "duotone" ? (D(), T("g", cA, vA)) : o.value === "fill" ? (D(), T("g", pA, hA)) : o.value === "light" ? (D(), T("g", gA, bA)) : o.value === "regular" ? (D(), T("g", yA, EA)) : o.value === "thin" ? (D(), T("g", DA, $A)) : X("", !0)
    ], 16, oA));
  }
}), TA = { class: "py-1 flex gap-1 items-center flex-col justify-center" }, NA = { class: "border-b border-light-3 flex-1 flex gap-2 pb-2 w-full" }, IA = { class: "flex justify-between w-full items-center" }, CA = { class: "p4-r flex-1" }, AA = {
  key: 0,
  class: "flex flex-col gap-2 pl-4 w-full"
}, Jo = /* @__PURE__ */ Se({
  __name: "EventActionTargetItem",
  props: {
    target: {},
    targets: {}
  },
  setup(e) {
    const t = Ye("addTarget"), n = ne(!0);
    return (r, a) => {
      var s, o, i;
      return D(), T("div", TA, [
        $("div", NA, [
          (s = r.target) != null && s.children ? X("", !0) : (D(), T("div", {
            key: 0,
            class: "rounded p-0.5 border border-dark-2 cursor-pointer hover:border-dark-3",
            onClick: a[0] || (a[0] = (l) => h(t)(r.target))
          }, [
            ge(h(sA), {
              size: "12",
              weight: "bold",
              class: Ze(["opacity-0 text-dark-2", {
                " opacity-100": r.targets.find((l) => l === r.target.id)
              }])
            }, null, 8, ["class"])
          ])),
          $("div", IA, [
            $("span", CA, pe(r.target.name), 1),
            (o = r.target) != null && o.children ? (D(), T("div", {
              key: 0,
              onClick: a[1] || (a[1] = (l) => n.value = !h(n)),
              class: "flex-shrink-0 cursor-pointer"
            }, [
              h(n) ? (D(), Ue(h(mC), {
                key: 0,
                size: 14
              })) : (D(), Ue(h(RC), {
                key: 1,
                size: 14
              }))
            ])) : X("", !0)
          ])
        ]),
        (i = r.target) != null && i.children && h(n) ? (D(), T("div", AA, [
          (D(!0), T(re, null, ke(r.target.children, (l) => (D(), Ue(Jo, {
            target: l,
            targets: r.targets
          }, null, 8, ["target", "targets"]))), 256))
        ])) : X("", !0)
      ]);
    };
  }
}), SA = { class: "flex flex-col gap-2" }, LA = { class: "flex flex-wrap items-center gap-2 relative pt-2" }, PA = { class: "flex items-center gap-2" }, MA = /* @__PURE__ */ $("span", { class: "p4-b" }, "平台", -1), xA = /* @__PURE__ */ $("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), RA = ["value"], FA = {
  key: 0,
  class: "flex items-center gap-2"
}, YA = /* @__PURE__ */ $("span", { class: "p4-b" }, "層級", -1), VA = /* @__PURE__ */ $("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), UA = ["value"], jA = {
  key: 1,
  class: "flex items-center gap-2"
}, BA = /* @__PURE__ */ $("span", { class: "p4-b" }, "目標", -1), HA = /* @__PURE__ */ $("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), WA = ["value"], GA = {
  key: 0,
  class: "flex flex-col my-2"
}, zA = { class: "flex items-center gap-2 relative" }, KA = /* @__PURE__ */ $("span", { class: "p4-b" }, "指定目標", -1), qA = ["value"], ZA = { key: 0 }, XA = { class: "p4-r text-true-blue-3 px-0.5" }, JA = {
  key: 0,
  class: "absolute top-0 left-0 pt-4 right-0 bottom-0 w-full h-full flex justify-center bg-dark-3 bg-opacity-50 z-[2]"
}, QA = { class: "sticky flex flex-col max-h-[80%] bg-light-5 rounded-xs shadow-01 w-4/5 p-4 h-fit top-4" }, eS = /* @__PURE__ */ $("span", { class: "p2-b flex justify-center mb-3 text-dark-2" }, "請選擇目標", -1), tS = {
  key: 0,
  class: "h-4 w-4 mx-auto animate-spin rounded-full border-2 border-solid border-blue-400 border-t-transparent"
}, nS = { class: "flex flex-col gap-2 mt-4 flex-1 overflow-y-auto" }, rS = {
  key: 2,
  class: "flex flex-wrap gap-2"
}, aS = { class: "flex items-center gap-2" }, sS = /* @__PURE__ */ $("span", { class: "p4-b" }, "執行", -1), oS = /* @__PURE__ */ $("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), iS = ["value"], lS = {
  key: 0,
  class: "flex gap-2 flex-wrap"
}, uS = { class: "flex items-center gap-2" }, cS = /* @__PURE__ */ $("span", { class: "p4-b" }, "類型", -1), dS = /* @__PURE__ */ $("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), fS = ["value"], vS = {
  key: 0,
  class: "p4-b"
}, pS = {
  key: 0,
  class: "flex items-center gap-2"
}, mS = /* @__PURE__ */ $("span", { class: "p4-b" }, "調整", -1), hS = /* @__PURE__ */ $("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), gS = ["value"], _S = {
  key: 1,
  class: "flex items-center gap-2"
}, bS = { class: "p4-b to-dark-3" }, yS = {
  key: 0,
  class: "flex items-center gap-2 w-full"
}, wS = { class: "flex flex-col gap-2" }, ES = { class: "flex items-center gap-2" }, DS = /* @__PURE__ */ $("label", {
  class: "p4-b",
  for: "maxBudget"
}, "設定預算上限", -1), OS = {
  key: 0,
  class: "flex gap-2 items-center"
}, $S = /* @__PURE__ */ $("span", { class: "text-dark-3 p4-b" }, "元", -1), Nn = "", kS = /* @__PURE__ */ Se({
  __name: "EventAction",
  setup(e) {
    const { t } = Er.global, n = Ye("eventData"), r = ne(n.value.action ?? {}), a = ne(!!Object.keys(r.value).length), s = ne(!1);
    Ae(s, (O) => {
      var j, te, V, A, Z;
      (j = r.value.params) != null && j.limit || (V = (te = r.value) == null ? void 0 : te.params) == null || delete V.limit, O || (Z = (A = r.value) == null ? void 0 : A.params) == null || delete Z.limit;
    }), Xs(() => {
      var O, j, te, V, A;
      ((O = r.value) == null ? void 0 : O.action) == ie.SetNewBudget || ((j = r.value) == null ? void 0 : j.action) == ie.IncreaseBudget || ((te = r.value) == null ? void 0 : te.action) == ie.LowerBudget || delete r.value.params, s.value = !!((A = (V = r.value) == null ? void 0 : V.params) != null && A.limit);
    }), Ae(
      r,
      (O) => {
        n.value.action = O;
      },
      { deep: !0 }
    );
    const o = C(() => {
      var O;
      return ((O = n.value.action) == null ? void 0 : O.client) == Ge.Google ? _t : mt;
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
    }, l = C(() => {
      var te, V;
      const O = (te = r.value) == null ? void 0 : te.client, j = (V = r.value) == null ? void 0 : V.adLevel;
      if (O && j) {
        const A = i[O];
        if (A) {
          const Z = A[j];
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
    }, u = C(() => {
      var V, A, Z;
      const O = (V = r.value) == null ? void 0 : V.client, j = (A = r.value) == null ? void 0 : A.adLevel, te = (Z = r.value) == null ? void 0 : Z.action;
      if (O && j && te) {
        const se = c[O];
        if (se) {
          const Te = se[j];
          if (Te) {
            const De = Te[te];
            if (De)
              return De;
          }
        }
      }
      return [he.Percentage, he.Value];
    }), f = {
      target: {
        value: ""
      }
    }, v = C(() => r.value.client ? r.value.client : ""), p = (O) => {
      r.value.client = Number(O.target.value), delete r.value.target, m(f);
    }, g = C(() => r.value.adLevel ? r.value.adLevel : ""), m = (O) => {
      r.value.adLevel = Number(O.target.value), delete r.value.action, delete r.value.target, d(f);
    }, y = C(() => r.value.targetType ? r.value.targetType : ""), d = (O) => {
      r.value.targetType = Number(O.target.value);
    }, b = C(() => r.value.action ? r.value.action : ""), k = (O) => {
      r.value.action = Number(O.target.value);
    }, w = C(() => {
      var O;
      return (O = r.value) != null && O.params || (r.value.params = {}), r.value.params.budgetType ? r.value.params.budgetType : "";
    }), L = (O) => r.value.params.budgetType = O.target.value, N = C(() => {
      var O;
      return (O = r.value) != null && O.params || (r.value.params = {}), r.value.params.valueType ? r.value.params.valueType : "";
    }), x = (O) => r.value.params.valueType = O.target.value, S = ne(!1);
    En("addTarget", (O) => {
      var te;
      (te = r.value) != null && te.target || (r.value.target = []);
      const j = r.value.target.findIndex(
        (V) => V === O.id
      );
      j === -1 ? r.value.target.push(O.id) : r.value.target.splice(j, 1);
    });
    const R = ne(), B = async () => {
      const O = await ja({
        method: "get",
        url: `${ba()}/heybear/api/automation/platform-target?client=${v.value}&adLevel=${g.value}`,
        withCredentials: !0,
        headers: {
          Authorization: ya()
        }
      });
      R.value = O.data.data;
    }, Y = ne(!1), q = C(() => {
      const O = ee.value.trim().toLowerCase(), j = (A) => A.name.toLowerCase().includes(O), te = (A) => {
        let Z = [];
        for (const se of A)
          if (j(se) && (!se.children || se.children.length === 0) && Z.push(se), se.children && se.children.length > 0) {
            const Te = te(se.children);
            Te.length > 0 && Z.push({
              id: se.id,
              name: se.name,
              children: Te
            });
          }
        return Z;
      }, V = [];
      for (const A of R.value)
        if (A.children) {
          const Z = te(A.children);
          Z.length > 0 && V.push({
            id: A.id,
            name: A.name,
            children: Z
          });
        } else
          V.push({
            id: A.id,
            name: A.name
          });
      return V;
    }), ce = async () => {
      S.value = !0, Y.value = !0, await B(), Y.value = !1;
    };
    Ae(S, (O) => {
      O || (ee.value = "");
    });
    const ee = ne(""), le = () => {
      const O = q.value, j = (te) => {
        for (const V of te)
          V.children && V.children.length > 0 ? j(V.children) : r.value.target.push(V.id);
      };
      r.value.target.length ? r.value.target = [] : (r.value.target = [], j(O));
    }, _e = ne(!1);
    Vn(() => {
      _e.value = !0;
    });
    const Ee = () => {
      a.value = !1, r.value = {}, Zn(() => {
        delete n.value.action;
      });
    }, z = C(() => {
      const O = v.value, j = r.value.adLevel, te = w.value;
      if (te === "")
        return { show: !1 };
      const V = O === Ge.Google && j === _t.Campaign, A = O === Ge.Facebook && j === mt.Campaign, Z = O === Ge.Facebook && j === mt.AdGroup, se = V || A || Z, Te = te === wa.DailyBudget ? "日預算" : "總預算", De = `${Ge[O]}${o.value[j]}`, ye = se ? `若${t(De)}設定為${te !== Nn ? Te : ""}，則不會變更` : "";
      return { show: se, msg: ye };
    });
    return (O, j) => h(a) ? (D(), Ue(Fr, {
      key: 1,
      title: "動作"
    }, {
      default: tt(() => {
        var te, V;
        return [
          $("div", SA, [
            $("div", LA, [
              $("div", {
                class: "cursor-pointer text-dark-4 absolute -top-2.5 -right-1.5 p4-b",
                onClick: Ee
              }, " 刪除 "),
              $("label", PA, [
                MA,
                Ke($("select", {
                  class: "p4-b text-dark-3 flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                  "onUpdate:modelValue": j[1] || (j[1] = (A) => Ie(v) ? v.value = A : null),
                  onChange: p,
                  required: ""
                }, [
                  xA,
                  (D(!0), T(re, null, ke(h(Ge), (A, Z) => (D(), T(re, { key: Z }, [
                    Number.isInteger(A) ? X("", !0) : (D(), T("option", {
                      key: 0,
                      value: Z
                    }, pe(A), 9, RA))
                  ], 64))), 128))
                ], 544), [
                  [at, h(v)]
                ])
              ]),
              h(v) != Nn ? (D(), T("label", FA, [
                YA,
                Ke($("select", {
                  class: "p4-b text-dark-3 flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                  "onUpdate:modelValue": j[2] || (j[2] = (A) => Ie(g) ? g.value = A : null),
                  onChange: m,
                  required: ""
                }, [
                  VA,
                  (D(!0), T(re, null, ke(h(o), (A, Z) => (D(), T(re, { key: Z }, [
                    Number.isInteger(A) ? X("", !0) : (D(), T("option", {
                      key: 0,
                      value: Z
                    }, pe(h(t)(`${h(Ge)[h(v)]}${A}`)), 9, UA))
                  ], 64))), 128))
                ], 544), [
                  [at, h(g)]
                ])
              ])) : X("", !0),
              h(g) != Nn ? (D(), T("label", jA, [
                BA,
                Ke($("select", {
                  class: "p4-b text-dark-3 flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                  "onUpdate:modelValue": j[3] || (j[3] = (A) => Ie(y) ? y.value = A : null),
                  onChange: d,
                  required: ""
                }, [
                  HA,
                  (D(!0), T(re, null, ke(h($t), (A, Z) => (D(), T(re, { key: Z }, [
                    Number.isInteger(A) ? X("", !0) : (D(), T("option", {
                      key: 0,
                      value: Z
                    }, pe(h(t)(A)), 9, WA))
                  ], 64))), 128))
                ], 544), [
                  [at, h(y)]
                ])
              ])) : X("", !0)
            ]),
            h(y) === h($t).ForID ? (D(), T("div", GA, [
              $("label", zA, [
                KA,
                $("div", {
                  class: "p4-r px-1.5 py-0.5 text-true-blue-2 rounded bg-true-blue-5 flex w-fit cursor-pointer hover:bg-true-blue-4 z-[2]",
                  onClick: ce
                }, " 編輯 "),
                $("input", {
                  type: "text",
                  class: "opacity-0 absolute left-0 top-0",
                  required: "",
                  value: (te = h(r)) != null && te.target && (V = h(r)) != null && V.target.length ? "123" : ""
                }, null, 8, qA)
              ]),
              h(y) === h($t).ForID ? (D(), T("div", ZA, [
                $("span", XA, pe(h(r).target && h(r).target.length ? `已選${h(r).target.length}個目標` : "尚未選擇目標"), 1)
              ])) : X("", !0)
            ])) : X("", !0),
            h(_e) ? (D(), Ue(cu, {
              key: 1,
              to: "#editor-container"
            }, [
              h(S) ? (D(), T("div", JA, [
                $("div", QA, [
                  ge(h(Xo), {
                    class: "absolute top-1 right-1 cursor-pointer text-dark-2 hover:text-dark-1",
                    onClick: j[4] || (j[4] = (A) => S.value = !1),
                    size: "18",
                    weight: "bold"
                  }),
                  eS,
                  ge(wn, {
                    modelValue: h(ee),
                    "onUpdate:modelValue": j[5] || (j[5] = (A) => Ie(ee) ? ee.value = A : null),
                    placeholder: "搜尋"
                  }, null, 8, ["modelValue"]),
                  $("div", {
                    class: "mt-2 flex w-fit ml-auto justify-end p4-b text-true-blue-3 cursor-pointer",
                    onClick: le
                  }, " 全選 "),
                  h(Y) ? (D(), T("div", tS)) : (D(), T(re, { key: 1 }, [
                    $("div", nS, [
                      (D(!0), T(re, null, ke(h(q), (A) => {
                        var Z;
                        return D(), Ue(Jo, {
                          key: A.id,
                          target: A,
                          targets: ((Z = h(r)) == null ? void 0 : Z.target) ?? []
                        }, null, 8, ["target", "targets"]);
                      }), 128))
                    ]),
                    $("div", {
                      class: "p4-b flex cursor-pointer items-center mx-auto gap-1 rounded bg-true-blue-2 px-1.5 py-0.5 text-light-5 hover:bg-true-blue-1",
                      onClick: j[6] || (j[6] = (A) => S.value = !1)
                    }, " 確定 ")
                  ], 64))
                ])
              ])) : X("", !0)
            ])) : X("", !0),
            h(y) !== Nn ? (D(), T("div", rS, [
              $("label", aS, [
                sS,
                Ke($("select", {
                  class: "p4-b text-dark-3 flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                  "onUpdate:modelValue": j[7] || (j[7] = (A) => Ie(b) ? b.value = A : null),
                  onChange: k,
                  required: ""
                }, [
                  oS,
                  (D(!0), T(re, null, ke(h(l), (A, Z) => (D(), T("option", {
                    key: Z,
                    value: A
                  }, pe(h(t)(Z)), 9, iS))), 128))
                ], 544), [
                  [at, h(b)]
                ])
              ]),
              h(g) != Nn ? (D(), T("div", lS, [
                h(r).action == h(ie).SetNewBudget || h(r).action == h(ie).IncreaseBudget || h(r).action == h(ie).LowerBudget ? (D(), T(re, { key: 0 }, [
                  $("label", uS, [
                    cS,
                    Ke($("select", {
                      class: "p4-b text-dark-3 flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                      "onUpdate:modelValue": j[8] || (j[8] = (A) => Ie(w) ? w.value = A : null),
                      onChange: L,
                      required: ""
                    }, [
                      dS,
                      (D(!0), T(re, null, ke(h(wa), (A, Z) => (D(), T(re, { key: Z }, [
                        Number.isInteger(A) ? X("", !0) : (D(), T("option", {
                          key: 0,
                          value: A
                        }, pe(h(t)(A)), 9, fS))
                      ], 64))), 128))
                    ], 544), [
                      [at, h(w)]
                    ]),
                    h(z).show ? (D(), T("span", vS, pe(h(z).msg), 1)) : X("", !0)
                  ]),
                  h(w) != Nn ? (D(), T("label", pS, [
                    mS,
                    Ke($("select", {
                      class: "p4-b text-dark-3 flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                      "onUpdate:modelValue": j[9] || (j[9] = (A) => Ie(N) ? N.value = A : null),
                      onChange: x,
                      required: ""
                    }, [
                      hS,
                      (D(!0), T(re, null, ke(h(u), (A, Z) => (D(), T("option", {
                        key: Z,
                        value: A
                      }, pe(h(t)(`action${A}`)), 9, gS))), 128))
                    ], 544), [
                      [at, h(N)]
                    ])
                  ])) : X("", !0),
                  h(N) != Nn ? (D(), T("label", _S, [
                    ge(wn, {
                      inputClass: "p4-r",
                      modelValue: h(r).params.value,
                      "onUpdate:modelValue": j[10] || (j[10] = (A) => h(r).params.value = A),
                      type: "number",
                      required: !0
                    }, null, 8, ["modelValue"]),
                    $("span", bS, pe(h(r).params.valueType === h(he).Percentage ? "%" : "元"), 1)
                  ])) : X("", !0),
                  h(r).action == h(ie).IncreaseBudget || h(r).action == h(ie).LowerBudget ? (D(), T(re, { key: 2 }, [
                    h(r).params.valueType === h(he).Percentage ? (D(), T("label", yS, [
                      $("div", wS, [
                        $("div", ES, [
                          Ke($("input", {
                            type: "checkbox",
                            "onUpdate:modelValue": j[11] || (j[11] = (A) => Ie(s) ? s.value = A : null),
                            id: "maxBudget"
                          }, null, 512), [
                            [Qs, h(s)]
                          ]),
                          DS,
                          h(s) ? (D(), T("div", OS, [
                            ge(wn, {
                              inputClass: "p4-r",
                              modelValue: h(r).params.limit,
                              "onUpdate:modelValue": j[12] || (j[12] = (A) => h(r).params.limit = A),
                              type: "number",
                              required: !0
                            }, null, 8, ["modelValue"]),
                            $S
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
    })) : (D(), T("div", {
      key: 0,
      class: "p3-b text-true-blue-3 flex ml-auto w-fit cursor-pointer hover:text-true-blue-2",
      onClick: j[0] || (j[0] = (te) => a.value = !0)
    }, " + 加入動作 "));
  }
}), TS = { class: "flex flex-col gap-2 relative pt-2" }, NS = { class: "flex items-center gap-2 flex-wrap" }, IS = { class: "flex items-center gap-2" }, CS = /* @__PURE__ */ $("span", { class: "p4-b" }, "平台", -1), AS = /* @__PURE__ */ $("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), SS = ["value"], LS = {
  key: 0,
  class: "flex items-center gap-2"
}, PS = /* @__PURE__ */ $("span", { class: "p4-b" }, "層級", -1), MS = /* @__PURE__ */ $("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), xS = ["value"], RS = {
  key: 1,
  class: "flex items-center gap-2"
}, FS = /* @__PURE__ */ $("span", { class: "p4-b" }, "目標", -1), YS = /* @__PURE__ */ $("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), VS = ["value"], US = {
  key: 0,
  class: "flex flex-col my-2"
}, jS = { class: "flex items-center gap-2 relative" }, BS = /* @__PURE__ */ $("span", { class: "p4-b" }, "指定目標", -1), HS = ["value"], WS = { key: 0 }, GS = { class: "p4-r text-true-blue-3 px-0.5" }, zS = {
  key: 0,
  class: "absolute top-0 left-0 pt-4 right-0 bottom-0 w-full h-full flex justify-center bg-dark-3 bg-opacity-50 z-[2]"
}, KS = { class: "sticky flex flex-col max-h-[80%] bg-light-5 rounded-xs shadow-01 w-4/5 p-4 h-fit top-4" }, qS = /* @__PURE__ */ $("span", { class: "p2-b flex justify-center mb-3 text-dark-2" }, "請選擇目標", -1), ZS = {
  key: 0,
  class: "h-4 w-4 mx-auto animate-spin rounded-full border-2 border-solid border-blue-400 border-t-transparent"
}, XS = { class: "flex flex-col gap-2 mt-4 flex-1 overflow-y-auto" }, JS = {
  key: 2,
  class: "flex items-center gap-1"
}, QS = /* @__PURE__ */ $("span", { class: "p4-b" }, "條件", -1), eL = /* @__PURE__ */ $("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), tL = ["value"], nL = {
  key: 3,
  class: "flex gap-2 flex-wrap"
}, rL = { class: "flex gap-2 flex-wrap" }, aL = { class: "flex items-center gap-1" }, sL = /* @__PURE__ */ $("span", { class: "p4-b" }, "運算", -1), oL = /* @__PURE__ */ $("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), iL = ["value"], lL = { class: "flex gap-2" }, uL = { key: 0 }, cL = ["onClick"], dL = ["value"], fL = {
  key: 1,
  class: "p4-b text-dark-3 flex items-center justify-center"
}, vL = {
  key: 0,
  class: "flex items-center gap-1"
}, pL = /* @__PURE__ */ $("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), mL = ["value"], hL = {
  key: 1,
  class: "flex items-center gap-1"
}, gL = /* @__PURE__ */ $("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), _L = ["value"], bL = {
  key: 2,
  class: "flex gap-1 items-center"
}, yL = { class: "p4-b" }, wL = {
  key: 4,
  class: "flex items-center gap-2"
}, EL = /* @__PURE__ */ $("label", {
  class: "p4-b",
  for: "comparison"
}, "加入比較區間", -1), _n = "", DL = /* @__PURE__ */ Se({
  __name: "ConditionItem",
  props: {
    modelValue: {},
    index: {}
  },
  emits: ["update:modelValue", "removeItem"],
  setup(e, { emit: t }) {
    const n = e, { t: r } = Er.global, a = C(() => n.modelValue ?? {}), s = C(() => {
      var z;
      return ((z = a.value) == null ? void 0 : z.client) == Ge.Google ? Xn : Jn;
    }), o = {
      target: {
        value: ""
      }
    }, i = C(() => a.value.client ? a.value.client : ""), l = (z) => {
      a.value.client = Number(z.target.value), delete a.value.target, u(o);
    }, c = C(() => a.value.adLevel ? a.value.adLevel : ""), u = (z) => {
      a.value.adLevel = Number(z.target.value), p.value != _n && t("update:modelValue", {
        client: i.value,
        adLevel: c.value
      }), delete a.value.action, delete a.value.target, v(o);
    }, f = C(() => a.value.targetType ? a.value.targetType : ""), v = (z) => {
      a.value.targetType = Number(z.target.value), delete a.value.action, delete a.value.target, a.value.targetType === $t.ForID && (a.value.target = []);
    }, p = C(() => a.value.conditionType ? a.value.conditionType : ""), g = (z) => a.value.conditionType = z.target.value, m = C(() => a.value.dateRangeType ? a.value.dateRangeType : ""), y = (z) => {
      a.value.dateRangeType = Number(z.target.value), Number(z.target.value) !== Bt.SpecifiedTime && delete a.value.dateRange;
    }, d = C(() => a.value.operation ? a.value.operation : ""), b = (z) => a.value.operation = z.target.value, k = C(() => a.value.valueType ? a.value.valueType : ""), w = (z) => a.value.valueType = z.target.value, L = {
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
    }, N = C(() => {
      if (i.value && c.value) {
        const z = L[i.value];
        if (z) {
          const O = z[c.value];
          if (O)
            return O;
        }
      }
      return {};
    }), x = ne(!1);
    En("addTarget", (z) => {
      var j;
      console.log(z), (j = a.value) != null && j.target || (a.value.target = []);
      const O = a.value.target.findIndex(
        (te) => te === z.id
      );
      O === -1 ? a.value.target.push(z.id) : a.value.target.splice(O, 1);
    });
    const P = ne(), R = async () => {
      const z = await ja({
        method: "get",
        url: `${ba()}/heybear/api/automation/platform-target?client=${i.value}&adLevel=${c.value}`,
        withCredentials: !0,
        headers: {
          Authorization: ya()
        }
      });
      P.value = z.data.data;
    }, B = C(() => {
      const z = ee.value.trim().toLowerCase(), O = (V) => V.name.toLowerCase().includes(z), j = (V) => {
        let A = [];
        for (const Z of V)
          if (O(Z) && (!Z.children || Z.children.length === 0) && A.push(Z), Z.children && Z.children.length > 0) {
            const se = j(Z.children);
            se.length > 0 && A.push({
              id: Z.id,
              name: Z.name,
              children: se
            });
          }
        return A;
      }, te = [];
      for (const V of P.value)
        if (V.children) {
          const A = j(V.children);
          A.length > 0 && te.push({
            id: V.id,
            name: V.name,
            children: A
          });
        } else
          te.push({
            id: V.id,
            name: V.name
          });
      return te;
    }), Y = ne(!1), q = () => {
      const z = B.value, O = (j) => {
        for (const te of j)
          te.children && te.children.length > 0 ? O(te.children) : a.value.target.push(te.id);
      };
      a.value.target.length ? a.value.target = [] : (a.value.target = [], O(z));
    }, ce = async () => {
      x.value = !0, Y.value = !0, await R(), Y.value = !1;
    }, ee = ne(""), le = ne(!1);
    Vn(() => {
      le.value = !0;
    });
    function _e(z) {
      const O = new Date(z.start), j = new Date(z.end), te = new Date(O - 1), V = new Date(te - (j - O)), A = { year: "numeric", month: "2-digit", day: "2-digit" }, Z = V.toLocaleDateString(
        "zh-TW",
        A
      ), se = te.toLocaleDateString(
        "zh-TW",
        A
      );
      return `${Z}-${se}`;
    }
    const Ee = C(() => n.modelValue.comparison ? m.value === -1 ? a.value.dateRange ? `與${_e(a.value.dateRange)}相比` : "" : {
      [Bt.Today]: "與作天相比",
      [Bt.Yesterday]: "與前一天相比",
      [Bt.Last3Days]: "與前3天相比",
      [Bt.Last7Days]: "與前7天相比",
      [Bt.ThisMonth]: "與上個月相比"
    }[m.value] : "");
    return (z, O) => (D(), Ue(Fr, {
      title: "條件" + (z.index + 1)
    }, {
      default: tt(() => {
        var j, te;
        return [
          $("div", TS, [
            $("div", {
              class: "cursor-pointer text-dark-4 absolute -top-2.5 -right-1.5 p4-b",
              onClick: O[0] || (O[0] = (V) => t("removeItem"))
            }, " 刪除 "),
            $("div", NS, [
              $("label", IS, [
                CS,
                Ke($("select", {
                  class: "p4-b text-dark-3 flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                  "onUpdate:modelValue": O[1] || (O[1] = (V) => Ie(i) ? i.value = V : null),
                  onChange: l,
                  required: ""
                }, [
                  AS,
                  (D(!0), T(re, null, ke(h(Ge), (V, A) => (D(), T(re, { key: A }, [
                    Number.isInteger(V) ? X("", !0) : (D(), T("option", {
                      key: 0,
                      value: A
                    }, pe(V), 9, SS))
                  ], 64))), 128))
                ], 544), [
                  [at, h(i)]
                ])
              ]),
              h(i) != _n ? (D(), T("label", LS, [
                PS,
                Ke($("select", {
                  class: "p4-b text-dark-3 flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                  "onUpdate:modelValue": O[2] || (O[2] = (V) => Ie(c) ? c.value = V : null),
                  onChange: u,
                  required: ""
                }, [
                  MS,
                  (D(!0), T(re, null, ke(h(s), (V, A) => (D(), T(re, { key: A }, [
                    Number.isInteger(V) ? X("", !0) : (D(), T("option", {
                      key: 0,
                      value: A
                    }, pe(h(r)(`${h(Ge)[h(i)]}${V}`)), 9, xS))
                  ], 64))), 128))
                ], 544), [
                  [at, h(c)]
                ])
              ])) : X("", !0),
              h(c) != _n ? (D(), T("label", RS, [
                FS,
                Ke($("select", {
                  class: "p4-b text-dark-3 flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                  "onUpdate:modelValue": O[3] || (O[3] = (V) => Ie(f) ? f.value = V : null),
                  onChange: v,
                  required: ""
                }, [
                  YS,
                  (D(!0), T(re, null, ke(h($t), (V, A) => (D(), T(re, { key: A }, [
                    Number.isInteger(V) ? X("", !0) : (D(), T("option", {
                      key: 0,
                      value: A
                    }, pe(h(r)(V)), 9, VS))
                  ], 64))), 128))
                ], 544), [
                  [at, h(f)]
                ])
              ])) : X("", !0)
            ]),
            h(f) === h($t).ForID ? (D(), T("div", US, [
              $("label", jS, [
                BS,
                $("div", {
                  class: "p4-r px-1.5 z-[2] py-0.5 text-true-blue-2 rounded bg-true-blue-5 flex w-fit cursor-pointer hover:bg-true-blue-4",
                  onClick: ce
                }, " 編輯 "),
                $("input", {
                  type: "text",
                  class: "opacity-0 absolute left-0 top-0",
                  required: "",
                  value: (j = h(a)) != null && j.target && (te = h(a)) != null && te.target.length ? "123" : ""
                }, null, 8, HS)
              ]),
              h(f) === h($t).ForID ? (D(), T("div", WS, [
                $("span", GS, pe(h(a).target && h(a).target.length ? `已選${h(a).target.length}個目標` : "尚未選擇目標"), 1)
              ])) : X("", !0)
            ])) : X("", !0),
            h(le) ? (D(), Ue(cu, {
              key: 1,
              to: "#editor-container"
            }, [
              h(x) ? (D(), T("div", zS, [
                $("div", KS, [
                  ge(h(Xo), {
                    class: "absolute top-1 right-1 cursor-pointer text-dark-2 hover:text-dark-1",
                    onClick: O[4] || (O[4] = (V) => x.value = !1),
                    size: "18",
                    weight: "bold"
                  }),
                  qS,
                  ge(wn, {
                    placeholder: "搜尋",
                    modelValue: h(ee),
                    "onUpdate:modelValue": O[5] || (O[5] = (V) => Ie(ee) ? ee.value = V : null)
                  }, null, 8, ["modelValue"]),
                  $("div", {
                    class: "mt-2 flex w-fit ml-auto justify-end p4-b text-true-blue-3 cursor-pointer",
                    onClick: q
                  }, " 全選 "),
                  h(Y) ? (D(), T("div", ZS)) : (D(), T(re, { key: 1 }, [
                    $("div", XS, [
                      (D(!0), T(re, null, ke(h(B), (V) => {
                        var A;
                        return D(), Ue(Jo, {
                          key: V.id,
                          target: V,
                          targets: (A = h(a)) == null ? void 0 : A.target
                        }, null, 8, ["target", "targets"]);
                      }), 128))
                    ]),
                    $("div", {
                      class: "p4-b flex cursor-pointer items-center mx-auto gap-1 rounded bg-true-blue-2 px-1.5 py-0.5 text-light-5 hover:bg-true-blue-1",
                      onClick: O[6] || (O[6] = (V) => x.value = !1)
                    }, " 確定 ")
                  ], 64))
                ])
              ])) : X("", !0)
            ])) : X("", !0),
            h(f) != _n ? (D(), T("label", JS, [
              QS,
              Ke($("select", {
                class: "p4-b text-dark-3 flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": O[7] || (O[7] = (V) => Ie(p) ? p.value = V : null),
                onChange: g,
                required: ""
              }, [
                eL,
                (D(!0), T(re, null, ke(h(N), (V, A) => (D(), T("option", {
                  key: A,
                  value: V
                }, pe(h(r)(A)), 9, tL))), 128))
              ], 544), [
                [at, h(p)]
              ])
            ])) : X("", !0),
            h(p) != _n ? (D(), T("div", nL, [
              $("div", rL, [
                $("label", aL, [
                  sL,
                  Ke($("select", {
                    class: "p4-b text-dark-3 flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                    "onUpdate:modelValue": O[8] || (O[8] = (V) => Ie(m) ? m.value = V : null),
                    onChange: y,
                    required: ""
                  }, [
                    oL,
                    (D(!0), T(re, null, ke(h(Bt), (V, A) => (D(), T(re, { key: A }, [
                      Number.isInteger(V) ? X("", !0) : (D(), T("option", {
                        key: 0,
                        value: A
                      }, pe(h(r)(V)), 9, iL))
                    ], 64))), 128))
                  ], 544), [
                    [at, h(m)]
                  ])
                ]),
                $("div", lL, [
                  h(m) == h(Bt).SpecifiedTime ? (D(), T("div", uL, [
                    ge(h(Lo), {
                      modelValue: h(a).dateRange,
                      "onUpdate:modelValue": O[9] || (O[9] = (V) => h(a).dateRange = V),
                      modelModifiers: { range: !0 },
                      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
                    }, {
                      default: tt(({ togglePopover: V, inputValue: A }) => [
                        $("div", {
                          class: "p4-b text-dark-3 flex relative cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 transition-all hover:bg-light-3 hover:bg-opacity-50",
                          onClick: V
                        }, [
                          $("input", {
                            value: A.end,
                            required: "",
                            class: "opacity-0 absolute w-full h-full pointer-events-none"
                          }, null, 8, dL),
                          qr(" " + pe(A.start && A.end ? `${A.start}-${A.end}` : "請選定區間"), 1)
                        ], 8, cL)
                      ]),
                      _: 1
                    }, 8, ["modelValue", "timezone"])
                  ])) : X("", !0),
                  z.modelValue.comparison && h(Ee) !== "" ? (D(), T("div", fL, pe(h(Ee)), 1)) : X("", !0)
                ])
              ]),
              h(m) != "" ? (D(), T("label", vL, [
                Ke($("select", {
                  class: "p4-b text-dark-3 flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                  "onUpdate:modelValue": O[10] || (O[10] = (V) => Ie(d) ? d.value = V : null),
                  onChange: b,
                  required: ""
                }, [
                  pL,
                  (D(!0), T(re, null, ke(h(to), (V, A) => (D(), T(re, { key: A }, [
                    Number.isInteger(V) ? X("", !0) : (D(), T("option", {
                      key: 0,
                      value: V
                    }, pe(h(r)(A)), 9, mL))
                  ], 64))), 128))
                ], 544), [
                  [at, h(d)]
                ])
              ])) : X("", !0),
              h(d) != _n ? (D(), T("label", hL, [
                Ke($("select", {
                  class: "p4-b text-dark-3 flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                  "onUpdate:modelValue": O[11] || (O[11] = (V) => Ie(k) ? k.value = V : null),
                  onChange: w,
                  required: ""
                }, [
                  gL,
                  (D(!0), T(re, null, ke(h(he), (V, A) => (D(), T(re, { key: A }, [
                    Number.isInteger(V) ? X("", !0) : (D(), T("option", {
                      key: 0,
                      value: V
                    }, pe(h(r)(`condition${A}`)), 9, _L))
                  ], 64))), 128))
                ], 544), [
                  [at, h(k)]
                ])
              ])) : X("", !0),
              h(k) != _n ? (D(), T("div", bL, [
                ge(wn, {
                  modelValue: h(a).value,
                  "onUpdate:modelValue": O[12] || (O[12] = (V) => h(a).value = V),
                  inputClass: "p4-r",
                  type: "number",
                  required: !0
                }, null, 8, ["modelValue"]),
                $("span", yL, pe(h(a).valueType === h(he).Percentage ? "%" : "元"), 1)
              ])) : X("", !0)
            ])) : X("", !0),
            h(m) != _n ? (D(), T("div", wL, [
              Ke($("input", {
                type: "checkbox",
                "onUpdate:modelValue": O[13] || (O[13] = (V) => z.modelValue.comparison = V),
                id: "comparison"
              }, null, 512), [
                [Qs, z.modelValue.comparison]
              ]),
              EL
            ])) : X("", !0)
          ])
        ];
      }),
      _: 1
    }, 8, ["title"]));
  }
}), OL = {
  key: 0,
  class: "flex items-center justify-center gap-3"
}, $L = /* @__PURE__ */ $("div", { class: "h-[1px] flex-1 bg-light-3" }, null, -1), kL = /* @__PURE__ */ $("p", { class: "p4-b to-dark-4" }, "且", -1), TL = /* @__PURE__ */ $("div", { class: "h-[1px] flex-1 bg-light-3" }, null, -1), NL = [
  $L,
  kL,
  TL
], IL = {
  key: 0,
  class: "absolute top-0 left-0 pt-4 right-0 bottom-0 w-full h-full flex justify-center bg-dark-3 bg-opacity-50 z-[2]"
}, CL = { class: "sticky flex flex-col max-h-[90%] bg-light-5 rounded-xs shadow-01 w-4/5 p-4 h-fit top-4" }, AL = /* @__PURE__ */ $("span", { class: "p2-b flex justify-center mb-3 text-dark-2" }, "請選擇條件", -1), SL = {
  key: 0,
  class: "h-4 mt-4 w-4 mx-auto animate-spin rounded-full border-2 border-solid border-blue-400 border-t-transparent"
}, LL = {
  key: 1,
  class: "flex flex-col gap-2 mt-4 overflow-y-auto flex-1"
}, PL = ["onClick"], ML = { class: "flex flex-col flex-1 gap-1" }, xL = { class: "p4-b" }, RL = { class: "p4-r text-dark-4" }, FL = /* @__PURE__ */ Se({
  __name: "Condition",
  setup(e) {
    const t = ne(!1), n = Ye("eventData"), r = ne(n.value.conditions ?? []);
    Ae(
      r,
      (g) => {
        n.value.conditions = g;
      },
      { deep: !0 }
    );
    const a = () => {
      r.value.push({}), t.value = !1;
    }, s = async (g) => {
      const m = await ja({
        method: "get",
        url: `${ba()}/heybear/api/automation/ad-events/template/${g}`,
        withCredentials: !0,
        headers: {
          Authorization: ya()
        }
      });
      r.value.push(m.data.data), t.value = !1;
    }, o = (g) => {
      r.value.splice(g, 1);
    }, i = ne(""), l = ne([]), c = C(() => "title"), u = async () => {
      const g = await ja({
        method: "get",
        url: `${ba()}/heybear/api/automation/template`,
        params: { type: 2 },
        withCredentials: !0,
        headers: {
          Authorization: ya()
        }
      });
      l.value = g.data.data;
    }, f = C(() => {
      const g = i.value.toLowerCase();
      return l.value.filter(
        (m) => m[c.value].toLowerCase().includes(g)
      );
    }), v = ne(!1), p = async () => {
      t.value = !0, v.value = !0, await u(), v.value = !1;
    };
    return (g, m) => (D(), T(re, null, [
      (D(!0), T(re, null, ke(h(r), (y, d) => (D(), T(re, { key: d }, [
        ge(DL, {
          index: d,
          modelValue: h(r)[d],
          "onUpdate:modelValue": (b) => h(r)[d] = b,
          onRemoveItem: (b) => o(d)
        }, null, 8, ["index", "modelValue", "onUpdate:modelValue", "onRemoveItem"]),
        d + 1 !== h(r).length ? (D(), T("div", OL, NL)) : X("", !0)
      ], 64))), 128)),
      $("div", {
        class: "p3-b text-true-blue-3 flex ml-auto w-fit cursor-pointer hover:text-true-blue-2",
        onClick: p
      }, " + 加入條件 "),
      h(t) ? (D(), T("div", IL, [
        $("div", CL, [
          ge(h(Xo), {
            class: "absolute top-1 right-1 cursor-pointer text-dark-2 hover:text-dark-1",
            onClick: m[0] || (m[0] = (y) => t.value = !1),
            size: "18",
            weight: "bold"
          }),
          AL,
          ge(wn, {
            placeholder: "輸入關鍵字搜尋 ex: 轉換數",
            modelValue: h(i),
            "onUpdate:modelValue": m[1] || (m[1] = (y) => Ie(i) ? i.value = y : null)
          }, null, 8, ["modelValue"]),
          h(v) ? (D(), T("div", SL)) : (D(), T("div", LL, [
            (D(!0), T(re, null, ke(h(f), (y) => (D(), T("div", {
              class: "border border-light-1 rounded items-center py-1 px-3 flex gap-1 hover:bg-true-blue-5 cursor-pointer",
              key: y.id,
              onClick: (d) => s(y.id)
            }, [
              $("div", ML, [
                $("span", xL, pe(y.title), 1),
                $("span", RL, pe(y.description), 1)
              ])
            ], 8, PL))), 128))
          ])),
          $("div", {
            class: "border ml-auto mt-2 border-true-blue-3 text-true-blue-3 rounded px-1 w-fit p3-b cursor-pointer hover:text-true-blue-2 hover:border-true-blue-2",
            onClick: a
          }, " 自訂 ")
        ])
      ])) : X("", !0)
    ], 64));
  }
}), YL = { class: "flex items-center gap-2" }, VL = /* @__PURE__ */ $("span", { class: "p4-b" }, "以電子郵件寄出結果", -1), UL = /* @__PURE__ */ $("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), jL = ["value"], BL = /* @__PURE__ */ Se({
  __name: "Notification",
  setup(e) {
    const { t } = Er.global, n = Ye("eventData"), r = ne(
      n.value.notify ?? {
        email: eo.All
      }
    );
    return Ae(
      r,
      (a) => {
        n.value.notify = a;
      },
      { deep: !0, immediate: !0 }
    ), (a, s) => (D(), T("div", null, [
      $("label", YL, [
        VL,
        Ke($("select", {
          class: "p4-b text-dark-3 flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
          "onUpdate:modelValue": s[0] || (s[0] = (o) => h(r).email = o)
        }, [
          UL,
          (D(!0), T(re, null, ke(h(Ba), (o, i) => (D(), T(re, { key: i }, [
            Number.isInteger(o) ? X("", !0) : (D(), T("option", {
              key: 0,
              value: Number(i)
            }, pe(h(t)(`mail${o}`)), 9, jL))
          ], 64))), 128))
        ], 512), [
          [at, h(r).email]
        ])
      ])
    ]));
  }
}), Sd = (e) => (jd("data-v-9c407430"), e = e(), Bd(), e), HL = ["onSubmit"], WL = /* @__PURE__ */ Sd(() => /* @__PURE__ */ $("div", { class: "p1-b" }, "建立自動化規則", -1)), GL = /* @__PURE__ */ Sd(() => /* @__PURE__ */ $("span", { class: "p4-b text-dark-1" }, "規則名稱*", -1)), zL = {
  key: 0,
  class: "text-red-1"
}, KL = 100, qL = /* @__PURE__ */ Se({
  __name: "TCEventEditorApp",
  props: {
    data: {}
  },
  emits: ["update:data"],
  setup(e, { expose: t, emit: n }) {
    const r = e, a = C(() => JSON.parse(r.data || "{}")), s = (u) => {
      const f = Object.fromEntries(
        Object.entries(u).filter(([v, p]) => p !== null)
      );
      return JSON.stringify(f, null, 4);
    }, o = ne([]), i = (u) => {
      u.preventDefault(), n("update:data", s(a.value));
    }, l = () => {
      var u;
      for (const f of document.getElementById("editor-container").querySelectorAll("[required]"))
        if (!f.reportValidity())
          throw new Error("未填寫完畢");
      (u = c.value) == null || u.click();
    };
    En("eventData", a), En("checkDataValid", o);
    const c = ne();
    return t({
      saveData: l
    }), (u, f) => r.data ? (D(), T("form", {
      key: 0,
      class: "flex flex-col gap-5 relative p-5 h-fit text-dark-1",
      id: "editor-container",
      onSubmit: uu(i, ["prevent"])
    }, [
      WL,
      ge(Fr, { title: "基本資料" }, {
        default: tt(() => [
          $("div", null, [
            GL,
            ge(wn, {
              modelValue: h(a).title,
              "onUpdate:modelValue": f[0] || (f[0] = (v) => h(a).title = v),
              inputClass: "text-dark-3",
              maxLength: KL,
              required: !0
            }, null, 8, ["modelValue"])
          ])
        ]),
        _: 1
      }),
      ge(Fr, { title: "執行時間" }, {
        default: tt(() => [
          ge(CN, {
            frequency: h(a).frequency,
            "onUpdate:frequency": f[1] || (f[1] = (v) => h(a).frequency = v),
            interval: h(a).interval,
            "onUpdate:interval": f[2] || (f[2] = (v) => h(a).interval = v)
          }, null, 8, ["frequency", "interval"])
        ]),
        _: 1
      }),
      ge(Fr, { title: "通知" }, {
        default: tt(() => [
          ge(BL)
        ]),
        _: 1
      }),
      ge(kS),
      ge(FL),
      h(o).length ? (D(), T("span", zL, "資料未填寫完整")) : X("", !0),
      $("button", {
        ref_key: "submitBtn",
        ref: c,
        class: "p-2 px-3 rounded bg-slate-100 hover:bg-sky-500 hover:text-white hidden"
      }, " 保存 ", 512)
    ], 40, HL)) : X("", !0);
  }
});
const ZL = /* @__PURE__ */ no(qL, [["__scopeId", "data-v-9c407430"]]), ca = {
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
function nP(e) {
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
function rP(e) {
  if (!e)
    return "";
  const { t } = Er.global;
  let n, r;
  return e.client === Ge.Google ? r = _t : r = mt, e.targetType === $t.ForAll && (n = "所有的" + t(`${Ge[e.client]}${r[e.adLevel]}`)), e.targetType === $t.ForActive && (n = "已開啟的" + t(`${Ge[e.client]}${r[e.adLevel]}`)), e.targetType === $t.ForID && (n = `${e.target.length}個` + t(`${Ge[e.client]}${r[e.adLevel]}`)), n;
}
function aP(e) {
  const { t } = Er.global;
  return e != null && e.email ? t(`mail${Ba[e.email]}`) : "";
}
const XL = (e) => {
  e.component("TCEventEditorApp", ZL);
}, sP = {
  install: XL
};
export {
  ZL as TCEventEditorApp,
  tP as TCEventItems,
  sP as default,
  rP as getActionDescription,
  nP as getDescription,
  aP as getNotifyDescription,
  QL as setApiUrlBase,
  eP as setToken
};
