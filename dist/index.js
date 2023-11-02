import { defineComponent as Se, openBlock as E, createElementBlock as T, createElementVNode as O, toDisplayString as fe, ref as te, watchEffect as Gs, computed as C, watch as Ce, onBeforeUnmount as Cd, Fragment as re, unref as g, renderList as Ee, createBlock as Ue, createCommentVNode as X, withDirectives as Ke, isRef as Ie, vModelSelect as at, reactive as Ks, onMounted as Vn, onUnmounted as Kr, toRefs as Sd, h as qn, provide as En, inject as Fe, resolveDynamicComponent as au, normalizeProps as su, mergeProps as ln, renderSlot as Nt, normalizeClass as Ze, normalizeStyle as Pr, withKeys as Jo, createVNode as _e, withCtx as et, nextTick as Zn, toRef as as, resolveComponent as An, Transition as ou, createTextVNode as zr, withModifiers as iu, guardReactiveProps as Pd, resolveDirective as Md, toHandlers as Ld, vModelCheckbox as zs, getCurrentInstance as Fr, effectScope as xd, shallowRef as Rd, onBeforeMount as Fd, Text as Yd, Teleport as lu, pushScopeId as Vd, popScopeId as Ud } from "vue";
let uu = "", cu = "";
function qP(e) {
  uu = e;
}
function ZP(e) {
  cu = e;
}
function qs() {
  return uu;
}
function Zs() {
  return cu;
}
class jd {
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
var Xs = /* @__PURE__ */ ((e) => (e[e.None = -1] = "None", e[e.All = 1] = "All", e[e.Error = 2] = "Error", e))(Xs || {}), du = /* @__PURE__ */ ((e) => (e[e.Off = 0] = "Off", e[e.On = 1] = "On", e))(du || {}), nt = /* @__PURE__ */ ((e) => (e[e.Google = 1] = "Google", e[e.Facebook = 2] = "Facebook", e))(nt || {}), Dt = /* @__PURE__ */ ((e) => (e[e.Campaign = 2] = "Campaign", e[e.AdGroup = 3] = "AdGroup", e[e.Ad = 4] = "Ad", e[e.AdTag = 5] = "AdTag", e))(Dt || {}), gt = /* @__PURE__ */ ((e) => (e[e.Campaign = 2] = "Campaign", e[e.AdGroup = 3] = "AdGroup", e[e.Ad = 4] = "Ad", e[e.AdTag = 5] = "AdTag", e))(gt || {}), tn = /* @__PURE__ */ ((e) => (e[e.ForAll = 1] = "ForAll", e[e.ForID = 2] = "ForID", e[e.ForActive = 3] = "ForActive", e))(tn || {}), Xn = /* @__PURE__ */ ((e) => (e[e.Account = 1] = "Account", e[e.Campaign = 2] = "Campaign", e[e.AdGroup = 3] = "AdGroup", e))(Xn || {}), Jn = /* @__PURE__ */ ((e) => (e[e.Account = 1] = "Account", e[e.Campaign = 2] = "Campaign", e[e.AdGroup = 3] = "AdGroup", e))(Jn || {}), Ye = /* @__PURE__ */ ((e) => (e[e.Never = -1] = "Never", e[e.Hour = 1] = "Hour", e[e.Day = 2] = "Day", e[e.Week = 3] = "Week", e[e.Month = 4] = "Month", e[e.Annual = 5] = "Annual", e))(Ye || {}), Mt = /* @__PURE__ */ ((e) => (e[e.Sunday = 0] = "Sunday", e[e.Monday = 1] = "Monday", e[e.Tuesday = 2] = "Tuesday", e[e.Wednesday = 3] = "Wednesday", e[e.Thursday = 4] = "Thursday", e[e.Friday = 5] = "Friday", e[e.Saturday = 6] = "Saturday", e[e.Weekday = -1] = "Weekday", e[e.Weekend = -2] = "Weekend", e))(Mt || {}), _n = /* @__PURE__ */ ((e) => (e[e.First = 1] = "First", e[e.Second = 2] = "Second", e[e.Third = 3] = "Third", e[e.Fourth = 4] = "Fourth", e[e.Fifth = 5] = "Fifth", e[e.Last = -1] = "Last", e))(_n || {}), pt = /* @__PURE__ */ ((e) => (e[e.January = 1] = "January", e[e.February = 2] = "February", e[e.March = 3] = "March", e[e.April = 4] = "April", e[e.May = 5] = "May", e[e.June = 6] = "June", e[e.July = 7] = "July", e[e.August = 8] = "August", e[e.September = 9] = "September", e[e.October = 10] = "October", e[e.November = 11] = "November", e[e.December = 12] = "December", e))(pt || {}), ie = /* @__PURE__ */ ((e) => (e[e.SetNewBudget = 1] = "SetNewBudget", e[e.IncreaseBudget = 2] = "IncreaseBudget", e[e.LowerBudget = 3] = "LowerBudget", e[e.OpenProject = 4] = "OpenProject", e[e.SuspendProject = 5] = "SuspendProject", e[e.None = -1] = "None", e))(ie || {}), ga = /* @__PURE__ */ ((e) => (e.DailyBudget = "dailyBudget", e.TotalBudget = "totalBudget", e))(ga || {}), he = /* @__PURE__ */ ((e) => (e.Value = "value", e.Percentage = "percentage", e))(he || {}), pe = /* @__PURE__ */ ((e) => (e.BudgetRemaining = "accountBudget", e.BudgetCap = "budgetCap", e.Clicks = "clicks", e.Impressions = "impressions", e.Cpc = "cpc", e.Spend = "cost", e.Conversions = "conversions", e.ConversionSpend = "conversionsValue", e.ReturnOnADSpending = "roas", e))(pe || {}), jt = /* @__PURE__ */ ((e) => (e[e.Today = 1] = "Today", e[e.Yesterday = 2] = "Yesterday", e[e.Last3Days = 3] = "Last3Days", e[e.Last7Days = 4] = "Last7Days", e[e.ThisMonth = 5] = "ThisMonth", e[e.SpecifiedTime = -1] = "SpecifiedTime", e))(jt || {}), Js = /* @__PURE__ */ ((e) => (e.MoreThan = ">", e.GreaterOrEqualTo = ">=", e.Equal = "==", e.LessThan = "<", e.LessThanOrEqualTo = "<=", e))(Js || {}), Qs = /* @__PURE__ */ ((e) => (e[e.AbnormalityOrError = 1] = "AbnormalityOrError", e[e.Error = 2] = "Error", e[e.None = -1] = "None", e))(Qs || {});
const XP = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ActionType: ie,
  AdLevelTypeFacebook: gt,
  AdLevelTypeGoogle: Dt,
  BudgetType: ga,
  ClientType: nt,
  ConditionAdLevelTypeFacebook: Jn,
  ConditionAdLevelTypeGoogle: Xn,
  ConditionType: pe,
  DateRangeType: jt,
  EmailNotify: Xs,
  EventActionTargetType: tn,
  EventHelper: jd,
  FrequencyType: Ye,
  MonthType: pt,
  OperationType: Js,
  ToggleNotify: du,
  ValueType: he,
  WeekOrdinalWordsType: _n,
  WeekdaysType: Mt,
  emailType: Qs
}, Symbol.toStringTag, { value: "Module" })), Bd = { class: "flex" }, Hd = ["checked", "id"], Wd = ["for"], Gd = /* @__PURE__ */ Se({
  __name: "CheckBox",
  props: {
    label: {},
    checked: { type: Boolean },
    fieldId: {}
  },
  emits: ["update:checked"],
  setup(e, { emit: t }) {
    return (n, r) => (E(), T("div", Bd, [
      O("input", {
        onInput: r[0] || (r[0] = (a) => n.$emit("update:checked", a.target.checked)),
        type: "checkbox",
        checked: n.checked,
        id: n.fieldId,
        class: "hidden"
      }, null, 40, Hd),
      O("label", {
        for: n.fieldId,
        class: "p3-r cursor-pointer rounded border hover:bg-light-4 border-dark-5 px-1 py-0.5 flex justify-center items-center text-dark-2 min-w-[1.75rem] min-h-[1.75rem]"
      }, fe(n.label), 9, Wd)
    ]));
  }
});
const eo = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, a] of t)
    n[r] = a;
  return n;
}, Qo = /* @__PURE__ */ eo(Gd, [["__scopeId", "data-v-8bd665ed"]]), Kd = {
  key: 0,
  class: "flex gap-1.5 flex-wrap"
}, zd = {
  key: 1,
  class: "flex gap-2 items-center"
}, qd = /* @__PURE__ */ O("span", { class: "p3-r" }, "指定", -1), Zd = ["value"], Xd = { class: "flex gap-4 flex-wrap" }, Jd = /* @__PURE__ */ Se({
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
    const n = e, r = te(n.monthDate), a = te(n.weekOrdinal), s = te(n.weekdays), o = te(n.yearMonths), i = (b, f, y = !1) => {
      if (y) {
        f.findIndex((k) => k === b) === -1 ? f.push(b) : f.splice(f.indexOf(b), 1), f.sort((k, w) => k - w);
        return;
      }
      f.value.findIndex((k) => k === b) === -1 ? f.value.push(b) : f.value.splice(f.value.indexOf(b), 1), f.value.sort((k, w) => k - w);
    };
    Gs(() => {
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
    const l = te([
      { name: "星期日", id: Mt.Sunday },
      { name: "星期一", id: Mt.Monday },
      { name: "星期二", id: Mt.Tuesday },
      { name: "星期三", id: Mt.Wednesday },
      { name: "星期四", id: Mt.Thursday },
      { name: "星期五", id: Mt.Friday },
      { name: "星期六", id: Mt.Saturday },
      { name: "平日", id: Mt.Weekday },
      { name: "週末", id: Mt.Weekend }
    ]), c = te([
      { name: "第一週", id: _n.First },
      { name: "第二週", id: _n.Second },
      { name: "第三週", id: _n.Third },
      { name: "第四週", id: _n.Fourth },
      { name: "第五週", id: _n.Fifth },
      { name: "最後一週", id: _n.Last }
    ]), u = te([
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
    ]), d = te([
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
      if (n.type === Ye.Week)
        return [
          {
            key: s,
            label: "weekdaysOrigin",
            options: l.value
          }
        ];
      if (n.type === Ye.Month) {
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
      if (n.type === Ye.Annual) {
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
    }), p = C(() => n.type === Ye.Month || n.type === Ye.Annual ? !0 : (r.value = [], a.value = [], s.value = [], o.value = [], !1)), h = te([
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
    ]), m = te(h.value[0]);
    return Ce(m, (b) => {
      if (b.id === 0) {
        r.value = [];
        return;
      }
      if (b.id === 1) {
        a.value = [], s.value = [];
        return;
      }
    }), Ce(
      () => n.type,
      (b) => {
        (b === Ye.Month || b === Ye.Annual) && (b != Ye.Annual && (o.value = []), u.value && u.value.length > 0 ? m.value = h.value[1] : m.value = h.value[0]);
      },
      { immediate: !0 }
    ), Cd(() => {
      r.value = [], a.value = [], s.value = [], o.value = [];
    }), (b, f) => (E(), T(re, null, [
      b.type === g(Ye).Annual ? (E(), T("div", Kd, [
        (E(!0), T(re, null, Ee(g(d), (y) => {
          var k;
          return E(), Ue(Qo, {
            key: y.id,
            checked: (k = g(o)) == null ? void 0 : k.includes(y.id),
            "onUpdate:checked": (w) => i(y.id, g(o), !0),
            fieldId: y.name,
            label: y.name
          }, null, 8, ["checked", "onUpdate:checked", "fieldId", "label"]);
        }), 128))
      ])) : X("", !0),
      g(p) ? (E(), T("div", zd, [
        qd,
        Ke(O("select", {
          class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
          "onUpdate:modelValue": f[0] || (f[0] = (y) => Ie(m) ? m.value = y : null)
        }, [
          (E(!0), T(re, null, Ee(g(h), (y, k) => (E(), T("option", {
            key: k,
            value: y
          }, fe(y.name), 9, Zd))), 128))
        ], 512), [
          [at, g(m)]
        ])
      ])) : X("", !0),
      O("div", Xd, [
        (E(!0), T(re, null, Ee(g(v), (y) => (E(), T("div", {
          class: "flex gap-1 flex-wrap",
          key: y
        }, [
          (E(!0), T(re, null, Ee(y.options, (k) => {
            var w;
            return E(), Ue(Qo, {
              key: k.id,
              checked: (w = y.key.value) == null ? void 0 : w.includes(k.id),
              "onUpdate:checked": (P) => i(k.id, y.key),
              fieldId: k.name,
              label: k.name
            }, null, 8, ["checked", "onUpdate:checked", "fieldId", "label"]);
          }), 128))
        ]))), 128))
      ])
    ], 64));
  }
});
var mt = "top", It = "bottom", At = "right", ht = "left", to = "auto", qr = [mt, It, At, ht], ar = "start", Yr = "end", Qd = "clippingParents", fu = "viewport", $r = "popper", ef = "reference", ei = /* @__PURE__ */ qr.reduce(function(e, t) {
  return e.concat([t + "-" + ar, t + "-" + Yr]);
}, []), vu = /* @__PURE__ */ [].concat(qr, [to]).reduce(function(e, t) {
  return e.concat([t, t + "-" + ar, t + "-" + Yr]);
}, []), tf = "beforeRead", nf = "read", rf = "afterRead", af = "beforeMain", sf = "main", of = "afterMain", lf = "beforeWrite", uf = "write", cf = "afterWrite", df = [tf, nf, rf, af, sf, of, lf, uf, cf];
function Kt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function yt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Mn(e) {
  var t = yt(e).Element;
  return e instanceof t || e instanceof Element;
}
function $t(e) {
  var t = yt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function no(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = yt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function ff(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, a = t.attributes[n] || {}, s = t.elements[n];
    !$t(s) || !Kt(s) || (Object.assign(s.style, r), Object.keys(a).forEach(function(o) {
      var i = a[o];
      i === !1 ? s.removeAttribute(o) : s.setAttribute(o, i === !0 ? "" : i);
    }));
  });
}
function vf(e) {
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
      !$t(a) || !Kt(a) || (Object.assign(a.style, i), Object.keys(s).forEach(function(l) {
        a.removeAttribute(l);
      }));
    });
  };
}
const pf = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: ff,
  effect: vf,
  requires: ["computeStyles"]
};
function Gt(e) {
  return e.split("-")[0];
}
var Pn = Math.max, _a = Math.min, sr = Math.round;
function gs() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function pu() {
  return !/^((?!chrome|android).)*safari/i.test(gs());
}
function or(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), a = 1, s = 1;
  t && $t(e) && (a = e.offsetWidth > 0 && sr(r.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && sr(r.height) / e.offsetHeight || 1);
  var o = Mn(e) ? yt(e) : window, i = o.visualViewport, l = !pu() && n, c = (r.left + (l && i ? i.offsetLeft : 0)) / a, u = (r.top + (l && i ? i.offsetTop : 0)) / s, d = r.width / a, v = r.height / s;
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
function ro(e) {
  var t = or(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function mu(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && no(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function an(e) {
  return yt(e).getComputedStyle(e);
}
function mf(e) {
  return ["table", "td", "th"].indexOf(Kt(e)) >= 0;
}
function $n(e) {
  return ((Mn(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Fa(e) {
  return Kt(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (no(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    $n(e)
  );
}
function ti(e) {
  return !$t(e) || // https://github.com/popperjs/popper-core/issues/837
  an(e).position === "fixed" ? null : e.offsetParent;
}
function hf(e) {
  var t = /firefox/i.test(gs()), n = /Trident/i.test(gs());
  if (n && $t(e)) {
    var r = an(e);
    if (r.position === "fixed")
      return null;
  }
  var a = Fa(e);
  for (no(a) && (a = a.host); $t(a) && ["html", "body"].indexOf(Kt(a)) < 0; ) {
    var s = an(a);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none")
      return a;
    a = a.parentNode;
  }
  return null;
}
function Zr(e) {
  for (var t = yt(e), n = ti(e); n && mf(n) && an(n).position === "static"; )
    n = ti(n);
  return n && (Kt(n) === "html" || Kt(n) === "body" && an(n).position === "static") ? t : n || hf(e) || t;
}
function ao(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Mr(e, t, n) {
  return Pn(e, _a(t, n));
}
function gf(e, t, n) {
  var r = Mr(e, t, n);
  return r > n ? n : r;
}
function hu() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function gu(e) {
  return Object.assign({}, hu(), e);
}
function _u(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var _f = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, gu(typeof t != "number" ? t : _u(t, qr));
};
function bf(e) {
  var t, n = e.state, r = e.name, a = e.options, s = n.elements.arrow, o = n.modifiersData.popperOffsets, i = Gt(n.placement), l = ao(i), c = [ht, At].indexOf(i) >= 0, u = c ? "height" : "width";
  if (!(!s || !o)) {
    var d = _f(a.padding, n), v = ro(s), p = l === "y" ? mt : ht, h = l === "y" ? It : At, m = n.rects.reference[u] + n.rects.reference[l] - o[l] - n.rects.popper[u], b = o[l] - n.rects.reference[l], f = Zr(s), y = f ? l === "y" ? f.clientHeight || 0 : f.clientWidth || 0 : 0, k = m / 2 - b / 2, w = d[p], P = y - v[u] - d[h], N = y / 2 - v[u] / 2 + k, x = Mr(w, N, P), S = l;
    n.modifiersData[r] = (t = {}, t[S] = x, t.centerOffset = x - N, t);
  }
}
function yf(e) {
  var t = e.state, n = e.options, r = n.element, a = r === void 0 ? "[data-popper-arrow]" : r;
  a != null && (typeof a == "string" && (a = t.elements.popper.querySelector(a), !a) || mu(t.elements.popper, a) && (t.elements.arrow = a));
}
const wf = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: bf,
  effect: yf,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function ir(e) {
  return e.split("-")[1];
}
var Ef = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Df(e, t) {
  var n = e.x, r = e.y, a = t.devicePixelRatio || 1;
  return {
    x: sr(n * a) / a || 0,
    y: sr(r * a) / a || 0
  };
}
function ni(e) {
  var t, n = e.popper, r = e.popperRect, a = e.placement, s = e.variation, o = e.offsets, i = e.position, l = e.gpuAcceleration, c = e.adaptive, u = e.roundOffsets, d = e.isFixed, v = o.x, p = v === void 0 ? 0 : v, h = o.y, m = h === void 0 ? 0 : h, b = typeof u == "function" ? u({
    x: p,
    y: m
  }) : {
    x: p,
    y: m
  };
  p = b.x, m = b.y;
  var f = o.hasOwnProperty("x"), y = o.hasOwnProperty("y"), k = ht, w = mt, P = window;
  if (c) {
    var N = Zr(n), x = "clientHeight", S = "clientWidth";
    if (N === yt(n) && (N = $n(n), an(N).position !== "static" && i === "absolute" && (x = "scrollHeight", S = "scrollWidth")), N = N, a === mt || (a === ht || a === At) && s === Yr) {
      w = It;
      var M = d && N === P && P.visualViewport ? P.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        N[x]
      );
      m -= M - r.height, m *= l ? 1 : -1;
    }
    if (a === ht || (a === mt || a === It) && s === Yr) {
      k = At;
      var R = d && N === P && P.visualViewport ? P.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        N[S]
      );
      p -= R - r.width, p *= l ? 1 : -1;
    }
  }
  var B = Object.assign({
    position: i
  }, c && Ef), V = u === !0 ? Df({
    x: p,
    y: m
  }, yt(n)) : {
    x: p,
    y: m
  };
  if (p = V.x, m = V.y, l) {
    var q;
    return Object.assign({}, B, (q = {}, q[w] = y ? "0" : "", q[k] = f ? "0" : "", q.transform = (P.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + m + "px)" : "translate3d(" + p + "px, " + m + "px, 0)", q));
  }
  return Object.assign({}, B, (t = {}, t[w] = y ? m + "px" : "", t[k] = f ? p + "px" : "", t.transform = "", t));
}
function Of(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, a = r === void 0 ? !0 : r, s = n.adaptive, o = s === void 0 ? !0 : s, i = n.roundOffsets, l = i === void 0 ? !0 : i, c = {
    placement: Gt(t.placement),
    variation: ir(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: a,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, ni(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: o,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, ni(Object.assign({}, c, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const $f = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Of,
  data: {}
};
var ra = {
  passive: !0
};
function Tf(e) {
  var t = e.state, n = e.instance, r = e.options, a = r.scroll, s = a === void 0 ? !0 : a, o = r.resize, i = o === void 0 ? !0 : o, l = yt(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && c.forEach(function(u) {
    u.addEventListener("scroll", n.update, ra);
  }), i && l.addEventListener("resize", n.update, ra), function() {
    s && c.forEach(function(u) {
      u.removeEventListener("scroll", n.update, ra);
    }), i && l.removeEventListener("resize", n.update, ra);
  };
}
const kf = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Tf,
  data: {}
};
var Nf = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ua(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Nf[t];
  });
}
var If = {
  start: "end",
  end: "start"
};
function ri(e) {
  return e.replace(/start|end/g, function(t) {
    return If[t];
  });
}
function so(e) {
  var t = yt(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function oo(e) {
  return or($n(e)).left + so(e).scrollLeft;
}
function Af(e, t) {
  var n = yt(e), r = $n(e), a = n.visualViewport, s = r.clientWidth, o = r.clientHeight, i = 0, l = 0;
  if (a) {
    s = a.width, o = a.height;
    var c = pu();
    (c || !c && t === "fixed") && (i = a.offsetLeft, l = a.offsetTop);
  }
  return {
    width: s,
    height: o,
    x: i + oo(e),
    y: l
  };
}
function Cf(e) {
  var t, n = $n(e), r = so(e), a = (t = e.ownerDocument) == null ? void 0 : t.body, s = Pn(n.scrollWidth, n.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), o = Pn(n.scrollHeight, n.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), i = -r.scrollLeft + oo(e), l = -r.scrollTop;
  return an(a || n).direction === "rtl" && (i += Pn(n.clientWidth, a ? a.clientWidth : 0) - s), {
    width: s,
    height: o,
    x: i,
    y: l
  };
}
function io(e) {
  var t = an(e), n = t.overflow, r = t.overflowX, a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + a + r);
}
function bu(e) {
  return ["html", "body", "#document"].indexOf(Kt(e)) >= 0 ? e.ownerDocument.body : $t(e) && io(e) ? e : bu(Fa(e));
}
function Lr(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = bu(e), a = r === ((n = e.ownerDocument) == null ? void 0 : n.body), s = yt(r), o = a ? [s].concat(s.visualViewport || [], io(r) ? r : []) : r, i = t.concat(o);
  return a ? i : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    i.concat(Lr(Fa(o)))
  );
}
function _s(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Sf(e, t) {
  var n = or(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function ai(e, t, n) {
  return t === fu ? _s(Af(e, n)) : Mn(t) ? Sf(t, n) : _s(Cf($n(e)));
}
function Pf(e) {
  var t = Lr(Fa(e)), n = ["absolute", "fixed"].indexOf(an(e).position) >= 0, r = n && $t(e) ? Zr(e) : e;
  return Mn(r) ? t.filter(function(a) {
    return Mn(a) && mu(a, r) && Kt(a) !== "body";
  }) : [];
}
function Mf(e, t, n, r) {
  var a = t === "clippingParents" ? Pf(e) : [].concat(t), s = [].concat(a, [n]), o = s[0], i = s.reduce(function(l, c) {
    var u = ai(e, c, r);
    return l.top = Pn(u.top, l.top), l.right = _a(u.right, l.right), l.bottom = _a(u.bottom, l.bottom), l.left = Pn(u.left, l.left), l;
  }, ai(e, o, r));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function yu(e) {
  var t = e.reference, n = e.element, r = e.placement, a = r ? Gt(r) : null, s = r ? ir(r) : null, o = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2, l;
  switch (a) {
    case mt:
      l = {
        x: o,
        y: t.y - n.height
      };
      break;
    case It:
      l = {
        x: o,
        y: t.y + t.height
      };
      break;
    case At:
      l = {
        x: t.x + t.width,
        y: i
      };
      break;
    case ht:
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
  var c = a ? ao(a) : null;
  if (c != null) {
    var u = c === "y" ? "height" : "width";
    switch (s) {
      case ar:
        l[c] = l[c] - (t[u] / 2 - n[u] / 2);
        break;
      case Yr:
        l[c] = l[c] + (t[u] / 2 - n[u] / 2);
        break;
    }
  }
  return l;
}
function Vr(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, a = r === void 0 ? e.placement : r, s = n.strategy, o = s === void 0 ? e.strategy : s, i = n.boundary, l = i === void 0 ? Qd : i, c = n.rootBoundary, u = c === void 0 ? fu : c, d = n.elementContext, v = d === void 0 ? $r : d, p = n.altBoundary, h = p === void 0 ? !1 : p, m = n.padding, b = m === void 0 ? 0 : m, f = gu(typeof b != "number" ? b : _u(b, qr)), y = v === $r ? ef : $r, k = e.rects.popper, w = e.elements[h ? y : v], P = Mf(Mn(w) ? w : w.contextElement || $n(e.elements.popper), l, u, o), N = or(e.elements.reference), x = yu({
    reference: N,
    element: k,
    strategy: "absolute",
    placement: a
  }), S = _s(Object.assign({}, k, x)), M = v === $r ? S : N, R = {
    top: P.top - M.top + f.top,
    bottom: M.bottom - P.bottom + f.bottom,
    left: P.left - M.left + f.left,
    right: M.right - P.right + f.right
  }, B = e.modifiersData.offset;
  if (v === $r && B) {
    var V = B[a];
    Object.keys(R).forEach(function(q) {
      var ce = [At, It].indexOf(q) >= 0 ? 1 : -1, ee = [mt, It].indexOf(q) >= 0 ? "y" : "x";
      R[q] += V[ee] * ce;
    });
  }
  return R;
}
function Lf(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, a = n.boundary, s = n.rootBoundary, o = n.padding, i = n.flipVariations, l = n.allowedAutoPlacements, c = l === void 0 ? vu : l, u = ir(r), d = u ? i ? ei : ei.filter(function(h) {
    return ir(h) === u;
  }) : qr, v = d.filter(function(h) {
    return c.indexOf(h) >= 0;
  });
  v.length === 0 && (v = d);
  var p = v.reduce(function(h, m) {
    return h[m] = Vr(e, {
      placement: m,
      boundary: a,
      rootBoundary: s,
      padding: o
    })[Gt(m)], h;
  }, {});
  return Object.keys(p).sort(function(h, m) {
    return p[h] - p[m];
  });
}
function xf(e) {
  if (Gt(e) === to)
    return [];
  var t = ua(e);
  return [ri(e), t, ri(t)];
}
function Rf(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var a = n.mainAxis, s = a === void 0 ? !0 : a, o = n.altAxis, i = o === void 0 ? !0 : o, l = n.fallbackPlacements, c = n.padding, u = n.boundary, d = n.rootBoundary, v = n.altBoundary, p = n.flipVariations, h = p === void 0 ? !0 : p, m = n.allowedAutoPlacements, b = t.options.placement, f = Gt(b), y = f === b, k = l || (y || !h ? [ua(b)] : xf(b)), w = [b].concat(k).reduce(function(I, Z) {
      return I.concat(Gt(Z) === to ? Lf(t, {
        placement: Z,
        boundary: u,
        rootBoundary: d,
        padding: c,
        flipVariations: h,
        allowedAutoPlacements: m
      }) : Z);
    }, []), P = t.rects.reference, N = t.rects.popper, x = /* @__PURE__ */ new Map(), S = !0, M = w[0], R = 0; R < w.length; R++) {
      var B = w[R], V = Gt(B), q = ir(B) === ar, ce = [mt, It].indexOf(V) >= 0, ee = ce ? "width" : "height", le = Vr(t, {
        placement: B,
        boundary: u,
        rootBoundary: d,
        altBoundary: v,
        padding: c
      }), ge = ce ? q ? At : ht : q ? It : mt;
      P[ee] > N[ee] && (ge = ua(ge));
      var De = ua(ge), G = [];
      if (s && G.push(le[V] <= 0), i && G.push(le[ge] <= 0, le[De] <= 0), G.every(function(I) {
        return I;
      })) {
        M = B, S = !1;
        break;
      }
      x.set(B, G);
    }
    if (S)
      for (var $ = h ? 3 : 1, j = function(Z) {
        var se = w.find(function(ke) {
          var Oe = x.get(ke);
          if (Oe)
            return Oe.slice(0, Z).every(function(ye) {
              return ye;
            });
        });
        if (se)
          return M = se, "break";
      }, ne = $; ne > 0; ne--) {
        var Y = j(ne);
        if (Y === "break")
          break;
      }
    t.placement !== M && (t.modifiersData[r]._skip = !0, t.placement = M, t.reset = !0);
  }
}
const Ff = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Rf,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function si(e, t, n) {
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
function oi(e) {
  return [mt, At, It, ht].some(function(t) {
    return e[t] >= 0;
  });
}
function Yf(e) {
  var t = e.state, n = e.name, r = t.rects.reference, a = t.rects.popper, s = t.modifiersData.preventOverflow, o = Vr(t, {
    elementContext: "reference"
  }), i = Vr(t, {
    altBoundary: !0
  }), l = si(o, r), c = si(i, a, s), u = oi(l), d = oi(c);
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
const Vf = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Yf
};
function Uf(e, t, n) {
  var r = Gt(e), a = [ht, mt].indexOf(r) >= 0 ? -1 : 1, s = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, o = s[0], i = s[1];
  return o = o || 0, i = (i || 0) * a, [ht, At].indexOf(r) >= 0 ? {
    x: i,
    y: o
  } : {
    x: o,
    y: i
  };
}
function jf(e) {
  var t = e.state, n = e.options, r = e.name, a = n.offset, s = a === void 0 ? [0, 0] : a, o = vu.reduce(function(u, d) {
    return u[d] = Uf(d, t.rects, s), u;
  }, {}), i = o[t.placement], l = i.x, c = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += c), t.modifiersData[r] = o;
}
const Bf = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: jf
};
function Hf(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = yu({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Wf = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Hf,
  data: {}
};
function Gf(e) {
  return e === "x" ? "y" : "x";
}
function Kf(e) {
  var t = e.state, n = e.options, r = e.name, a = n.mainAxis, s = a === void 0 ? !0 : a, o = n.altAxis, i = o === void 0 ? !1 : o, l = n.boundary, c = n.rootBoundary, u = n.altBoundary, d = n.padding, v = n.tether, p = v === void 0 ? !0 : v, h = n.tetherOffset, m = h === void 0 ? 0 : h, b = Vr(t, {
    boundary: l,
    rootBoundary: c,
    padding: d,
    altBoundary: u
  }), f = Gt(t.placement), y = ir(t.placement), k = !y, w = ao(f), P = Gf(w), N = t.modifiersData.popperOffsets, x = t.rects.reference, S = t.rects.popper, M = typeof m == "function" ? m(Object.assign({}, t.rects, {
    placement: t.placement
  })) : m, R = typeof M == "number" ? {
    mainAxis: M,
    altAxis: M
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, M), B = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, V = {
    x: 0,
    y: 0
  };
  if (N) {
    if (s) {
      var q, ce = w === "y" ? mt : ht, ee = w === "y" ? It : At, le = w === "y" ? "height" : "width", ge = N[w], De = ge + b[ce], G = ge - b[ee], $ = p ? -S[le] / 2 : 0, j = y === ar ? x[le] : S[le], ne = y === ar ? -S[le] : -x[le], Y = t.elements.arrow, I = p && Y ? ro(Y) : {
        width: 0,
        height: 0
      }, Z = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : hu(), se = Z[ce], ke = Z[ee], Oe = Mr(0, x[le], I[le]), ye = k ? x[le] / 2 - $ - Oe - se - R.mainAxis : j - Oe - se - R.mainAxis, Be = k ? -x[le] / 2 + $ + Oe + ke + R.mainAxis : ne + Oe + ke + R.mainAxis, je = t.elements.arrow && Zr(t.elements.arrow), tt = je ? w === "y" ? je.clientTop || 0 : je.clientLeft || 0 : 0, D = (q = B == null ? void 0 : B[w]) != null ? q : 0, _ = ge + ye - D - tt, L = ge + Be - D, Q = Mr(p ? _a(De, _) : De, ge, p ? Pn(G, L) : G);
      N[w] = Q, V[w] = Q - ge;
    }
    if (i) {
      var oe, be = w === "x" ? mt : ht, ot = w === "x" ? It : At, ze = N[P], wt = P === "y" ? "height" : "width", Yt = ze + b[be], Pe = ze - b[ot], F = [mt, ht].indexOf(f) !== -1, W = (oe = B == null ? void 0 : B[P]) != null ? oe : 0, He = F ? Yt : ze - x[wt] - S[wt] - W + R.altAxis, We = F ? ze + x[wt] + S[wt] - W - R.altAxis : Pe, Vt = p && F ? gf(He, ze, We) : Mr(p ? He : Yt, ze, p ? We : Pe);
      N[P] = Vt, V[P] = Vt - ze;
    }
    t.modifiersData[r] = V;
  }
}
const zf = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Kf,
  requiresIfExists: ["offset"]
};
function qf(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Zf(e) {
  return e === yt(e) || !$t(e) ? so(e) : qf(e);
}
function Xf(e) {
  var t = e.getBoundingClientRect(), n = sr(t.width) / e.offsetWidth || 1, r = sr(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Jf(e, t, n) {
  n === void 0 && (n = !1);
  var r = $t(t), a = $t(t) && Xf(t), s = $n(t), o = or(e, a, n), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((Kt(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  io(s)) && (i = Zf(t)), $t(t) ? (l = or(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : s && (l.x = oo(s))), {
    x: o.left + i.scrollLeft - l.x,
    y: o.top + i.scrollTop - l.y,
    width: o.width,
    height: o.height
  };
}
function Qf(e) {
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
function ev(e) {
  var t = Qf(e);
  return df.reduce(function(n, r) {
    return n.concat(t.filter(function(a) {
      return a.phase === r;
    }));
  }, []);
}
function tv(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function nv(e) {
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
var ii = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function li() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function rv(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, a = t.defaultOptions, s = a === void 0 ? ii : a;
  return function(i, l, c) {
    c === void 0 && (c = s);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, ii, s),
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
        var y = typeof f == "function" ? f(u.options) : f;
        m(), u.options = Object.assign({}, s, u.options, y), u.scrollParents = {
          reference: Mn(i) ? Lr(i) : i.contextElement ? Lr(i.contextElement) : [],
          popper: Lr(l)
        };
        var k = ev(nv([].concat(r, u.options.modifiers)));
        return u.orderedModifiers = k.filter(function(w) {
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
          var f = u.elements, y = f.reference, k = f.popper;
          if (li(y, k)) {
            u.rects = {
              reference: Jf(y, Zr(k), u.options.strategy === "fixed"),
              popper: ro(k)
            }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(R) {
              return u.modifiersData[R.name] = Object.assign({}, R.data);
            });
            for (var w = 0; w < u.orderedModifiers.length; w++) {
              if (u.reset === !0) {
                u.reset = !1, w = -1;
                continue;
              }
              var P = u.orderedModifiers[w], N = P.fn, x = P.options, S = x === void 0 ? {} : x, M = P.name;
              typeof N == "function" && (u = N({
                state: u,
                options: S,
                name: M,
                instance: p
              }) || u);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: tv(function() {
        return new Promise(function(b) {
          p.forceUpdate(), b(u);
        });
      }),
      destroy: function() {
        m(), v = !0;
      }
    };
    if (!li(i, l))
      return p;
    p.setOptions(c).then(function(b) {
      !v && c.onFirstUpdate && c.onFirstUpdate(b);
    });
    function h() {
      u.orderedModifiers.forEach(function(b) {
        var f = b.name, y = b.options, k = y === void 0 ? {} : y, w = b.effect;
        if (typeof w == "function") {
          var P = w({
            state: u,
            name: f,
            instance: p,
            options: k
          }), N = function() {
          };
          d.push(P || N);
        }
      });
    }
    function m() {
      d.forEach(function(b) {
        return b();
      }), d = [];
    }
    return p;
  };
}
var av = [kf, Wf, $f, pf, Bf, Ff, zf, wf, Vf], sv = /* @__PURE__ */ rv({
  defaultModifiers: av
}), ov = Object.defineProperty, iv = (e, t, n) => t in e ? ov(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ae = (e, t, n) => (iv(e, typeof t != "symbol" ? t + "" : t, n), n);
const un = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, a] of t)
    n[r] = a;
  return n;
}, lv = {}, uv = {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  viewBox: "0 0 24 24"
}, cv = /* @__PURE__ */ O("polyline", { points: "9 18 15 12 9 6" }, null, -1), dv = [
  cv
];
function fv(e, t) {
  return E(), T("svg", uv, dv);
}
const vv = /* @__PURE__ */ un(lv, [["render", fv]]), pv = {}, mv = {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  viewBox: "0 0 24 24"
}, hv = /* @__PURE__ */ O("polyline", { points: "15 18 9 12 15 6" }, null, -1), gv = [
  hv
];
function _v(e, t) {
  return E(), T("svg", mv, gv);
}
const bv = /* @__PURE__ */ un(pv, [["render", _v]]), yv = {}, wv = {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  viewBox: "0 0 24 24"
}, Ev = /* @__PURE__ */ O("polyline", { points: "6 9 12 15 18 9" }, null, -1), Dv = [
  Ev
];
function Ov(e, t) {
  return E(), T("svg", wv, Dv);
}
const $v = /* @__PURE__ */ un(yv, [["render", Ov]]), Tv = {}, kv = {
  fill: "none",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  viewBox: "0 0 24 24"
}, Nv = /* @__PURE__ */ O("path", { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" }, null, -1), Iv = [
  Nv
];
function Av(e, t) {
  return E(), T("svg", kv, Iv);
}
const Cv = /* @__PURE__ */ un(Tv, [["render", Av]]), Sv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IconChevronDown: $v,
  IconChevronLeft: bv,
  IconChevronRight: vv,
  IconClock: Cv
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
    const t = e, n = C(() => t.width || t.size), r = C(() => t.height || t.size), a = C(() => Sv[`Icon${t.name}`]);
    return (s, o) => (E(), Ue(au(g(a)), {
      width: g(n),
      height: g(r),
      class: "vc-base-icon"
    }, null, 8, ["width", "height"]));
  }
});
function wu() {
  return typeof window < "u";
}
function Pv(e) {
  return wu() && e in window;
}
function Mv(e) {
  const t = te(!1), n = C(() => t.value ? "dark" : "light");
  let r, a;
  function s(p) {
    t.value = p.matches;
  }
  function o() {
    Pv("matchMedia") && (r = window.matchMedia("(prefers-color-scheme: dark)"), r.addEventListener("change", s), t.value = r.matches);
  }
  function i() {
    const { selector: p = ":root", darkClass: h = "dark" } = e.value, m = document.querySelector(p);
    t.value = m.classList.contains(h);
  }
  function l(p) {
    const { selector: h = ":root", darkClass: m = "dark" } = p;
    if (wu() && h && m) {
      const b = document.querySelector(h);
      b && (a = new MutationObserver(i), a.observe(b, {
        attributes: !0,
        attributeFilter: ["class"]
      }), t.value = b.classList.contains(m));
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
var aa = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Lv(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var xv = typeof aa == "object" && aa && aa.Object === Object && aa, Eu = xv, Rv = Eu, Fv = typeof self == "object" && self && self.Object === Object && self, Yv = Rv || Fv || Function("return this")(), qt = Yv, Vv = qt, Uv = Vv.Symbol, Ya = Uv, ui = Ya, Du = Object.prototype, jv = Du.hasOwnProperty, Bv = Du.toString, Tr = ui ? ui.toStringTag : void 0;
function Hv(e) {
  var t = jv.call(e, Tr), n = e[Tr];
  try {
    e[Tr] = void 0;
    var r = !0;
  } catch {
  }
  var a = Bv.call(e);
  return r && (t ? e[Tr] = n : delete e[Tr]), a;
}
var Wv = Hv, Gv = Object.prototype, Kv = Gv.toString;
function zv(e) {
  return Kv.call(e);
}
var qv = zv, ci = Ya, Zv = Wv, Xv = qv, Jv = "[object Null]", Qv = "[object Undefined]", di = ci ? ci.toStringTag : void 0;
function ep(e) {
  return e == null ? e === void 0 ? Qv : Jv : di && di in Object(e) ? Zv(e) : Xv(e);
}
var Zt = ep;
function tp(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var cn = tp, np = Zt, rp = cn, ap = "[object AsyncFunction]", sp = "[object Function]", op = "[object GeneratorFunction]", ip = "[object Proxy]";
function lp(e) {
  if (!rp(e))
    return !1;
  var t = np(e);
  return t == sp || t == op || t == ap || t == ip;
}
var Un = lp, up = Array.isArray, Rt = up;
function cp(e) {
  return e != null && typeof e == "object";
}
var Ft = cp, dp = Zt, fp = Rt, vp = Ft, pp = "[object String]";
function mp(e) {
  return typeof e == "string" || !fp(e) && vp(e) && dp(e) == pp;
}
var Bt = mp, hp = Zt, gp = Ft, _p = "[object Boolean]";
function bp(e) {
  return e === !0 || e === !1 || gp(e) && hp(e) == _p;
}
var yp = bp, wp = Zt, Ep = Ft, Dp = "[object Number]";
function Op(e) {
  return typeof e == "number" || Ep(e) && wp(e) == Dp;
}
var xt = Op, $p = Zt, Tp = Ft, kp = "[object Date]";
function Np(e) {
  return Tp(e) && $p(e) == kp;
}
var Ip = Np;
function Ap(e) {
  return function(t) {
    return e(t);
  };
}
var Ou = Ap, Ur = {}, Cp = {
  get exports() {
    return Ur;
  },
  set exports(e) {
    Ur = e;
  }
};
(function(e, t) {
  var n = Eu, r = t && !t.nodeType && t, a = r && !0 && e && !e.nodeType && e, s = a && a.exports === r, o = s && n.process, i = function() {
    try {
      var l = a && a.require && a.require("util").types;
      return l || o && o.binding && o.binding("util");
    } catch {
    }
  }();
  e.exports = i;
})(Cp, Ur);
var Sp = Ip, Pp = Ou, fi = Ur, vi = fi && fi.isDate, Mp = vi ? Pp(vi) : Sp, Lp = Mp, xp = Zt, Rp = Ft, Fp = "[object Symbol]";
function Yp(e) {
  return typeof e == "symbol" || Rp(e) && xp(e) == Fp;
}
var lo = Yp, Vp = Rt, Up = lo, jp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Bp = /^\w*$/;
function Hp(e, t) {
  if (Vp(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Up(e) ? !0 : Bp.test(e) || !jp.test(e) || t != null && e in Object(t);
}
var uo = Hp, Wp = qt, Gp = Wp["__core-js_shared__"], Kp = Gp, ss = Kp, pi = function() {
  var e = /[^.]+$/.exec(ss && ss.keys && ss.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function zp(e) {
  return !!pi && pi in e;
}
var qp = zp, Zp = Function.prototype, Xp = Zp.toString;
function Jp(e) {
  if (e != null) {
    try {
      return Xp.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var $u = Jp, Qp = Un, em = qp, tm = cn, nm = $u, rm = /[\\^$.*+?()[\]{}|]/g, am = /^\[object .+?Constructor\]$/, sm = Function.prototype, om = Object.prototype, im = sm.toString, lm = om.hasOwnProperty, um = RegExp(
  "^" + im.call(lm).replace(rm, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function cm(e) {
  if (!tm(e) || em(e))
    return !1;
  var t = Qp(e) ? um : am;
  return t.test(nm(e));
}
var dm = cm;
function fm(e, t) {
  return e == null ? void 0 : e[t];
}
var vm = fm, pm = dm, mm = vm;
function hm(e, t) {
  var n = mm(e, t);
  return pm(n) ? n : void 0;
}
var jn = hm, gm = jn, _m = gm(Object, "create"), Va = _m, mi = Va;
function bm() {
  this.__data__ = mi ? mi(null) : {}, this.size = 0;
}
var ym = bm;
function wm(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Em = wm, Dm = Va, Om = "__lodash_hash_undefined__", $m = Object.prototype, Tm = $m.hasOwnProperty;
function km(e) {
  var t = this.__data__;
  if (Dm) {
    var n = t[e];
    return n === Om ? void 0 : n;
  }
  return Tm.call(t, e) ? t[e] : void 0;
}
var Nm = km, Im = Va, Am = Object.prototype, Cm = Am.hasOwnProperty;
function Sm(e) {
  var t = this.__data__;
  return Im ? t[e] !== void 0 : Cm.call(t, e);
}
var Pm = Sm, Mm = Va, Lm = "__lodash_hash_undefined__";
function xm(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Mm && t === void 0 ? Lm : t, this;
}
var Rm = xm, Fm = ym, Ym = Em, Vm = Nm, Um = Pm, jm = Rm;
function vr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
vr.prototype.clear = Fm;
vr.prototype.delete = Ym;
vr.prototype.get = Vm;
vr.prototype.has = Um;
vr.prototype.set = jm;
var Bm = vr;
function Hm() {
  this.__data__ = [], this.size = 0;
}
var Wm = Hm;
function Gm(e, t) {
  return e === t || e !== e && t !== t;
}
var pr = Gm, Km = pr;
function zm(e, t) {
  for (var n = e.length; n--; )
    if (Km(e[n][0], t))
      return n;
  return -1;
}
var Ua = zm, qm = Ua, Zm = Array.prototype, Xm = Zm.splice;
function Jm(e) {
  var t = this.__data__, n = qm(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : Xm.call(t, n, 1), --this.size, !0;
}
var Qm = Jm, eh = Ua;
function th(e) {
  var t = this.__data__, n = eh(t, e);
  return n < 0 ? void 0 : t[n][1];
}
var nh = th, rh = Ua;
function ah(e) {
  return rh(this.__data__, e) > -1;
}
var sh = ah, oh = Ua;
function ih(e, t) {
  var n = this.__data__, r = oh(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
var lh = ih, uh = Wm, ch = Qm, dh = nh, fh = sh, vh = lh;
function mr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
mr.prototype.clear = uh;
mr.prototype.delete = ch;
mr.prototype.get = dh;
mr.prototype.has = fh;
mr.prototype.set = vh;
var ja = mr, ph = jn, mh = qt, hh = ph(mh, "Map"), co = hh, hi = Bm, gh = ja, _h = co;
function bh() {
  this.size = 0, this.__data__ = {
    hash: new hi(),
    map: new (_h || gh)(),
    string: new hi()
  };
}
var yh = bh;
function wh(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var Eh = wh, Dh = Eh;
function Oh(e, t) {
  var n = e.__data__;
  return Dh(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
var Ba = Oh, $h = Ba;
function Th(e) {
  var t = $h(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var kh = Th, Nh = Ba;
function Ih(e) {
  return Nh(this, e).get(e);
}
var Ah = Ih, Ch = Ba;
function Sh(e) {
  return Ch(this, e).has(e);
}
var Ph = Sh, Mh = Ba;
function Lh(e, t) {
  var n = Mh(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
var xh = Lh, Rh = yh, Fh = kh, Yh = Ah, Vh = Ph, Uh = xh;
function hr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
hr.prototype.clear = Rh;
hr.prototype.delete = Fh;
hr.prototype.get = Yh;
hr.prototype.has = Vh;
hr.prototype.set = Uh;
var fo = hr, Tu = fo, jh = "Expected a function";
function vo(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(jh);
  var n = function() {
    var r = arguments, a = t ? t.apply(this, r) : r[0], s = n.cache;
    if (s.has(a))
      return s.get(a);
    var o = e.apply(this, r);
    return n.cache = s.set(a, o) || s, o;
  };
  return n.cache = new (vo.Cache || Tu)(), n;
}
vo.Cache = Tu;
var Bh = vo, Hh = Bh, Wh = 500;
function Gh(e) {
  var t = Hh(e, function(r) {
    return n.size === Wh && n.clear(), r;
  }), n = t.cache;
  return t;
}
var Kh = Gh, zh = Kh, qh = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Zh = /\\(\\)?/g, Xh = zh(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(qh, function(n, r, a, s) {
    t.push(a ? s.replace(Zh, "$1") : r || n);
  }), t;
}), Jh = Xh;
function Qh(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, a = Array(r); ++n < r; )
    a[n] = t(e[n], n, e);
  return a;
}
var eg = Qh, gi = Ya, tg = eg, ng = Rt, rg = lo, ag = 1 / 0, _i = gi ? gi.prototype : void 0, bi = _i ? _i.toString : void 0;
function ku(e) {
  if (typeof e == "string")
    return e;
  if (ng(e))
    return tg(e, ku) + "";
  if (rg(e))
    return bi ? bi.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -ag ? "-0" : t;
}
var sg = ku, og = sg;
function ig(e) {
  return e == null ? "" : og(e);
}
var lg = ig, ug = Rt, cg = uo, dg = Jh, fg = lg;
function vg(e, t) {
  return ug(e) ? e : cg(e, t) ? [e] : dg(fg(e));
}
var Nu = vg, pg = lo, mg = 1 / 0;
function hg(e) {
  if (typeof e == "string" || pg(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -mg ? "-0" : t;
}
var Ha = hg, gg = Nu, _g = Ha;
function bg(e, t) {
  t = gg(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[_g(t[n++])];
  return n && n == r ? e : void 0;
}
var Iu = bg, yg = Iu;
function wg(e, t, n) {
  var r = e == null ? void 0 : yg(e, t);
  return r === void 0 ? n : r;
}
var Cn = wg, Eg = jn, Dg = function() {
  try {
    var e = Eg(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Au = Dg, yi = Au;
function Og(e, t, n) {
  t == "__proto__" && yi ? yi(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
var Wa = Og, $g = Wa, Tg = pr, kg = Object.prototype, Ng = kg.hasOwnProperty;
function Ig(e, t, n) {
  var r = e[t];
  (!(Ng.call(e, t) && Tg(r, n)) || n === void 0 && !(t in e)) && $g(e, t, n);
}
var Ag = Ig, Cg = 9007199254740991, Sg = /^(?:0|[1-9]\d*)$/;
function Pg(e, t) {
  var n = typeof e;
  return t = t ?? Cg, !!t && (n == "number" || n != "symbol" && Sg.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var po = Pg;
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
var Lg = Mg, xg = Lg, Rg = xg(), Cu = Rg;
function Fg(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var Yg = Fg, Vg = Zt, Ug = Ft, jg = "[object Arguments]";
function Bg(e) {
  return Ug(e) && Vg(e) == jg;
}
var Hg = Bg, wi = Hg, Wg = Ft, Su = Object.prototype, Gg = Su.hasOwnProperty, Kg = Su.propertyIsEnumerable, zg = wi(function() {
  return arguments;
}()) ? wi : function(e) {
  return Wg(e) && Gg.call(e, "callee") && !Kg.call(e, "callee");
}, mo = zg, ur = {}, qg = {
  get exports() {
    return ur;
  },
  set exports(e) {
    ur = e;
  }
};
function Zg() {
  return !1;
}
var Xg = Zg;
(function(e, t) {
  var n = qt, r = Xg, a = t && !t.nodeType && t, s = a && !0 && e && !e.nodeType && e, o = s && s.exports === a, i = o ? n.Buffer : void 0, l = i ? i.isBuffer : void 0, c = l || r;
  e.exports = c;
})(qg, ur);
var Jg = 9007199254740991;
function Qg(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Jg;
}
var ho = Qg, e1 = Zt, t1 = ho, n1 = Ft, r1 = "[object Arguments]", a1 = "[object Array]", s1 = "[object Boolean]", o1 = "[object Date]", i1 = "[object Error]", l1 = "[object Function]", u1 = "[object Map]", c1 = "[object Number]", d1 = "[object Object]", f1 = "[object RegExp]", v1 = "[object Set]", p1 = "[object String]", m1 = "[object WeakMap]", h1 = "[object ArrayBuffer]", g1 = "[object DataView]", _1 = "[object Float32Array]", b1 = "[object Float64Array]", y1 = "[object Int8Array]", w1 = "[object Int16Array]", E1 = "[object Int32Array]", D1 = "[object Uint8Array]", O1 = "[object Uint8ClampedArray]", $1 = "[object Uint16Array]", T1 = "[object Uint32Array]", Re = {};
Re[_1] = Re[b1] = Re[y1] = Re[w1] = Re[E1] = Re[D1] = Re[O1] = Re[$1] = Re[T1] = !0;
Re[r1] = Re[a1] = Re[h1] = Re[s1] = Re[g1] = Re[o1] = Re[i1] = Re[l1] = Re[u1] = Re[c1] = Re[d1] = Re[f1] = Re[v1] = Re[p1] = Re[m1] = !1;
function k1(e) {
  return n1(e) && t1(e.length) && !!Re[e1(e)];
}
var N1 = k1, I1 = N1, A1 = Ou, Ei = Ur, Di = Ei && Ei.isTypedArray, C1 = Di ? A1(Di) : I1, go = C1, S1 = Yg, P1 = mo, M1 = Rt, L1 = ur, x1 = po, R1 = go, F1 = Object.prototype, Y1 = F1.hasOwnProperty;
function V1(e, t) {
  var n = M1(e), r = !n && P1(e), a = !n && !r && L1(e), s = !n && !r && !a && R1(e), o = n || r || a || s, i = o ? S1(e.length, String) : [], l = i.length;
  for (var c in e)
    (t || Y1.call(e, c)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    x1(c, l))) && i.push(c);
  return i;
}
var Pu = V1, U1 = Object.prototype;
function j1(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || U1;
  return e === n;
}
var _o = j1;
function B1(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var Mu = B1, H1 = Mu, W1 = H1(Object.keys, Object), G1 = W1, K1 = _o, z1 = G1, q1 = Object.prototype, Z1 = q1.hasOwnProperty;
function X1(e) {
  if (!K1(e))
    return z1(e);
  var t = [];
  for (var n in Object(e))
    Z1.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
var J1 = X1, Q1 = Un, e_ = ho;
function t_(e) {
  return e != null && e_(e.length) && !Q1(e);
}
var Xr = t_, n_ = Pu, r_ = J1, a_ = Xr;
function s_(e) {
  return a_(e) ? n_(e) : r_(e);
}
var bo = s_, o_ = Cu, i_ = bo;
function l_(e, t) {
  return e && o_(e, t, i_);
}
var Lu = l_, u_ = ja;
function c_() {
  this.__data__ = new u_(), this.size = 0;
}
var d_ = c_;
function f_(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
var v_ = f_;
function p_(e) {
  return this.__data__.get(e);
}
var m_ = p_;
function h_(e) {
  return this.__data__.has(e);
}
var g_ = h_, __ = ja, b_ = co, y_ = fo, w_ = 200;
function E_(e, t) {
  var n = this.__data__;
  if (n instanceof __) {
    var r = n.__data__;
    if (!b_ || r.length < w_ - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new y_(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
var D_ = E_, O_ = ja, $_ = d_, T_ = v_, k_ = m_, N_ = g_, I_ = D_;
function gr(e) {
  var t = this.__data__ = new O_(e);
  this.size = t.size;
}
gr.prototype.clear = $_;
gr.prototype.delete = T_;
gr.prototype.get = k_;
gr.prototype.has = N_;
gr.prototype.set = I_;
var yo = gr, A_ = "__lodash_hash_undefined__";
function C_(e) {
  return this.__data__.set(e, A_), this;
}
var S_ = C_;
function P_(e) {
  return this.__data__.has(e);
}
var M_ = P_, L_ = fo, x_ = S_, R_ = M_;
function ba(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new L_(); ++t < n; )
    this.add(e[t]);
}
ba.prototype.add = ba.prototype.push = x_;
ba.prototype.has = R_;
var F_ = ba;
function Y_(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
var xu = Y_;
function V_(e, t) {
  return e.has(t);
}
var U_ = V_, j_ = F_, B_ = xu, H_ = U_, W_ = 1, G_ = 2;
function K_(e, t, n, r, a, s) {
  var o = n & W_, i = e.length, l = t.length;
  if (i != l && !(o && l > i))
    return !1;
  var c = s.get(e), u = s.get(t);
  if (c && u)
    return c == t && u == e;
  var d = -1, v = !0, p = n & G_ ? new j_() : void 0;
  for (s.set(e, t), s.set(t, e); ++d < i; ) {
    var h = e[d], m = t[d];
    if (r)
      var b = o ? r(m, h, d, t, e, s) : r(h, m, d, e, t, s);
    if (b !== void 0) {
      if (b)
        continue;
      v = !1;
      break;
    }
    if (p) {
      if (!B_(t, function(f, y) {
        if (!H_(p, y) && (h === f || a(h, f, n, r, s)))
          return p.push(y);
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
var Ru = K_, z_ = qt, q_ = z_.Uint8Array, Fu = q_;
function Z_(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, a) {
    n[++t] = [a, r];
  }), n;
}
var X_ = Z_;
function J_(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var Q_ = J_, Oi = Ya, $i = Fu, eb = pr, tb = Ru, nb = X_, rb = Q_, ab = 1, sb = 2, ob = "[object Boolean]", ib = "[object Date]", lb = "[object Error]", ub = "[object Map]", cb = "[object Number]", db = "[object RegExp]", fb = "[object Set]", vb = "[object String]", pb = "[object Symbol]", mb = "[object ArrayBuffer]", hb = "[object DataView]", Ti = Oi ? Oi.prototype : void 0, os = Ti ? Ti.valueOf : void 0;
function gb(e, t, n, r, a, s, o) {
  switch (n) {
    case hb:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case mb:
      return !(e.byteLength != t.byteLength || !s(new $i(e), new $i(t)));
    case ob:
    case ib:
    case cb:
      return eb(+e, +t);
    case lb:
      return e.name == t.name && e.message == t.message;
    case db:
    case vb:
      return e == t + "";
    case ub:
      var i = nb;
    case fb:
      var l = r & ab;
      if (i || (i = rb), e.size != t.size && !l)
        return !1;
      var c = o.get(e);
      if (c)
        return c == t;
      r |= sb, o.set(e, t);
      var u = tb(i(e), i(t), r, a, s, o);
      return o.delete(e), u;
    case pb:
      if (os)
        return os.call(e) == os.call(t);
  }
  return !1;
}
var _b = gb;
function bb(e, t) {
  for (var n = -1, r = t.length, a = e.length; ++n < r; )
    e[a + n] = t[n];
  return e;
}
var yb = bb, wb = yb, Eb = Rt;
function Db(e, t, n) {
  var r = t(e);
  return Eb(e) ? r : wb(r, n(e));
}
var Ob = Db;
function $b(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, a = 0, s = []; ++n < r; ) {
    var o = e[n];
    t(o, n, e) && (s[a++] = o);
  }
  return s;
}
var Tb = $b;
function kb() {
  return [];
}
var Nb = kb, Ib = Tb, Ab = Nb, Cb = Object.prototype, Sb = Cb.propertyIsEnumerable, ki = Object.getOwnPropertySymbols, Pb = ki ? function(e) {
  return e == null ? [] : (e = Object(e), Ib(ki(e), function(t) {
    return Sb.call(e, t);
  }));
} : Ab, Mb = Pb, Lb = Ob, xb = Mb, Rb = bo;
function Fb(e) {
  return Lb(e, Rb, xb);
}
var Yb = Fb, Ni = Yb, Vb = 1, Ub = Object.prototype, jb = Ub.hasOwnProperty;
function Bb(e, t, n, r, a, s) {
  var o = n & Vb, i = Ni(e), l = i.length, c = Ni(t), u = c.length;
  if (l != u && !o)
    return !1;
  for (var d = l; d--; ) {
    var v = i[d];
    if (!(o ? v in t : jb.call(t, v)))
      return !1;
  }
  var p = s.get(e), h = s.get(t);
  if (p && h)
    return p == t && h == e;
  var m = !0;
  s.set(e, t), s.set(t, e);
  for (var b = o; ++d < l; ) {
    v = i[d];
    var f = e[v], y = t[v];
    if (r)
      var k = o ? r(y, f, v, t, e, s) : r(f, y, v, e, t, s);
    if (!(k === void 0 ? f === y || a(f, y, n, r, s) : k)) {
      m = !1;
      break;
    }
    b || (b = v == "constructor");
  }
  if (m && !b) {
    var w = e.constructor, P = t.constructor;
    w != P && "constructor" in e && "constructor" in t && !(typeof w == "function" && w instanceof w && typeof P == "function" && P instanceof P) && (m = !1);
  }
  return s.delete(e), s.delete(t), m;
}
var Hb = Bb, Wb = jn, Gb = qt, Kb = Wb(Gb, "DataView"), zb = Kb, qb = jn, Zb = qt, Xb = qb(Zb, "Promise"), Jb = Xb, Qb = jn, ey = qt, ty = Qb(ey, "Set"), ny = ty, ry = jn, ay = qt, sy = ry(ay, "WeakMap"), oy = sy, bs = zb, ys = co, ws = Jb, Es = ny, Ds = oy, Yu = Zt, _r = $u, Ii = "[object Map]", iy = "[object Object]", Ai = "[object Promise]", Ci = "[object Set]", Si = "[object WeakMap]", Pi = "[object DataView]", ly = _r(bs), uy = _r(ys), cy = _r(ws), dy = _r(Es), fy = _r(Ds), In = Yu;
(bs && In(new bs(new ArrayBuffer(1))) != Pi || ys && In(new ys()) != Ii || ws && In(ws.resolve()) != Ai || Es && In(new Es()) != Ci || Ds && In(new Ds()) != Si) && (In = function(e) {
  var t = Yu(e), n = t == iy ? e.constructor : void 0, r = n ? _r(n) : "";
  if (r)
    switch (r) {
      case ly:
        return Pi;
      case uy:
        return Ii;
      case cy:
        return Ai;
      case dy:
        return Ci;
      case fy:
        return Si;
    }
  return t;
});
var vy = In, is = yo, py = Ru, my = _b, hy = Hb, Mi = vy, Li = Rt, xi = ur, gy = go, _y = 1, Ri = "[object Arguments]", Fi = "[object Array]", sa = "[object Object]", by = Object.prototype, Yi = by.hasOwnProperty;
function yy(e, t, n, r, a, s) {
  var o = Li(e), i = Li(t), l = o ? Fi : Mi(e), c = i ? Fi : Mi(t);
  l = l == Ri ? sa : l, c = c == Ri ? sa : c;
  var u = l == sa, d = c == sa, v = l == c;
  if (v && xi(e)) {
    if (!xi(t))
      return !1;
    o = !0, u = !1;
  }
  if (v && !u)
    return s || (s = new is()), o || gy(e) ? py(e, t, n, r, a, s) : my(e, t, l, n, r, a, s);
  if (!(n & _y)) {
    var p = u && Yi.call(e, "__wrapped__"), h = d && Yi.call(t, "__wrapped__");
    if (p || h) {
      var m = p ? e.value() : e, b = h ? t.value() : t;
      return s || (s = new is()), a(m, b, n, r, s);
    }
  }
  return v ? (s || (s = new is()), hy(e, t, n, r, a, s)) : !1;
}
var wy = yy, Ey = wy, Vi = Ft;
function Vu(e, t, n, r, a) {
  return e === t ? !0 : e == null || t == null || !Vi(e) && !Vi(t) ? e !== e && t !== t : Ey(e, t, n, r, Vu, a);
}
var Uu = Vu, Dy = yo, Oy = Uu, $y = 1, Ty = 2;
function ky(e, t, n, r) {
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
      var d = new Dy();
      if (r)
        var v = r(c, u, l, e, t, d);
      if (!(v === void 0 ? Oy(u, c, $y | Ty, r, d) : v))
        return !1;
    }
  }
  return !0;
}
var Ny = ky, Iy = cn;
function Ay(e) {
  return e === e && !Iy(e);
}
var ju = Ay, Cy = ju, Sy = bo;
function Py(e) {
  for (var t = Sy(e), n = t.length; n--; ) {
    var r = t[n], a = e[r];
    t[n] = [r, a, Cy(a)];
  }
  return t;
}
var My = Py;
function Ly(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
var Bu = Ly, xy = Ny, Ry = My, Fy = Bu;
function Yy(e) {
  var t = Ry(e);
  return t.length == 1 && t[0][2] ? Fy(t[0][0], t[0][1]) : function(n) {
    return n === e || xy(n, e, t);
  };
}
var Vy = Yy;
function Uy(e, t) {
  return e != null && t in Object(e);
}
var jy = Uy, By = Nu, Hy = mo, Wy = Rt, Gy = po, Ky = ho, zy = Ha;
function qy(e, t, n) {
  t = By(t, e);
  for (var r = -1, a = t.length, s = !1; ++r < a; ) {
    var o = zy(t[r]);
    if (!(s = e != null && n(e, o)))
      break;
    e = e[o];
  }
  return s || ++r != a ? s : (a = e == null ? 0 : e.length, !!a && Ky(a) && Gy(o, a) && (Wy(e) || Hy(e)));
}
var Hu = qy, Zy = jy, Xy = Hu;
function Jy(e, t) {
  return e != null && Xy(e, t, Zy);
}
var Qy = Jy, e0 = Uu, t0 = Cn, n0 = Qy, r0 = uo, a0 = ju, s0 = Bu, o0 = Ha, i0 = 1, l0 = 2;
function u0(e, t) {
  return r0(e) && a0(t) ? s0(o0(e), t) : function(n) {
    var r = t0(n, e);
    return r === void 0 && r === t ? n0(n, e) : e0(t, r, i0 | l0);
  };
}
var c0 = u0;
function d0(e) {
  return e;
}
var wo = d0;
function f0(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var v0 = f0, p0 = Iu;
function m0(e) {
  return function(t) {
    return p0(t, e);
  };
}
var h0 = m0, g0 = v0, _0 = h0, b0 = uo, y0 = Ha;
function w0(e) {
  return b0(e) ? g0(y0(e)) : _0(e);
}
var E0 = w0, D0 = Vy, O0 = c0, $0 = wo, T0 = Rt, k0 = E0;
function N0(e) {
  return typeof e == "function" ? e : e == null ? $0 : typeof e == "object" ? T0(e) ? O0(e[0], e[1]) : D0(e) : k0(e);
}
var Wu = N0, I0 = Wa, A0 = Lu, C0 = Wu;
function S0(e, t) {
  var n = {};
  return t = C0(t), A0(e, function(r, a, s) {
    I0(n, a, t(r, a, s));
  }), n;
}
var P0 = S0;
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
var Gu = M0, L0 = Gu, Ui = Math.max;
function x0(e, t, n) {
  return t = Ui(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, a = -1, s = Ui(r.length - t, 0), o = Array(s); ++a < s; )
      o[a] = r[t + a];
    a = -1;
    for (var i = Array(t + 1); ++a < t; )
      i[a] = r[a];
    return i[t] = n(o), L0(e, this, i);
  };
}
var R0 = x0;
function F0(e) {
  return function() {
    return e;
  };
}
var Y0 = F0, V0 = Y0, ji = Au, U0 = wo, j0 = ji ? function(e, t) {
  return ji(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: V0(t),
    writable: !0
  });
} : U0, B0 = j0, H0 = 800, W0 = 16, G0 = Date.now;
function K0(e) {
  var t = 0, n = 0;
  return function() {
    var r = G0(), a = W0 - (r - n);
    if (n = r, a > 0) {
      if (++t >= H0)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var z0 = K0, q0 = B0, Z0 = z0, X0 = Z0(q0), J0 = X0, Q0 = wo, ew = R0, tw = J0;
function nw(e, t) {
  return tw(ew(e, t, Q0), e + "");
}
var Eo = nw, rw = pr, aw = Xr, sw = po, ow = cn;
function iw(e, t, n) {
  if (!ow(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? aw(n) && sw(t, n.length) : r == "string" && t in n) ? rw(n[t], e) : !1;
}
var Do = iw;
function lw(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var uw = lw, cw = cn, dw = _o, fw = uw, vw = Object.prototype, pw = vw.hasOwnProperty;
function mw(e) {
  if (!cw(e))
    return fw(e);
  var t = dw(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !pw.call(e, r)) || n.push(r);
  return n;
}
var hw = mw, gw = Pu, _w = hw, bw = Xr;
function yw(e) {
  return bw(e) ? gw(e, !0) : _w(e);
}
var Oo = yw, ww = Eo, Ew = pr, Dw = Do, Ow = Oo, Ku = Object.prototype, $w = Ku.hasOwnProperty, Tw = ww(function(e, t) {
  e = Object(e);
  var n = -1, r = t.length, a = r > 2 ? t[2] : void 0;
  for (a && Dw(t[0], t[1], a) && (r = 1); ++n < r; )
    for (var s = t[n], o = Ow(s), i = -1, l = o.length; ++i < l; ) {
      var c = o[i], u = e[c];
      (u === void 0 || Ew(u, Ku[c]) && !$w.call(e, c)) && (e[c] = s[c]);
    }
  return e;
}), Bi = Tw, kw = Wa, Nw = pr;
function Iw(e, t, n) {
  (n !== void 0 && !Nw(e[t], n) || n === void 0 && !(t in e)) && kw(e, t, n);
}
var zu = Iw, ya = {}, Aw = {
  get exports() {
    return ya;
  },
  set exports(e) {
    ya = e;
  }
};
(function(e, t) {
  var n = qt, r = t && !t.nodeType && t, a = r && !0 && e && !e.nodeType && e, s = a && a.exports === r, o = s ? n.Buffer : void 0, i = o ? o.allocUnsafe : void 0;
  function l(c, u) {
    if (u)
      return c.slice();
    var d = c.length, v = i ? i(d) : new c.constructor(d);
    return c.copy(v), v;
  }
  e.exports = l;
})(Aw, ya);
var Hi = Fu;
function Cw(e) {
  var t = new e.constructor(e.byteLength);
  return new Hi(t).set(new Hi(e)), t;
}
var Sw = Cw, Pw = Sw;
function Mw(e, t) {
  var n = t ? Pw(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var Lw = Mw;
function xw(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
var Rw = xw, Fw = cn, Wi = Object.create, Yw = function() {
  function e() {
  }
  return function(t) {
    if (!Fw(t))
      return {};
    if (Wi)
      return Wi(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}(), Vw = Yw, Uw = Mu, jw = Uw(Object.getPrototypeOf, Object), qu = jw, Bw = Vw, Hw = qu, Ww = _o;
function Gw(e) {
  return typeof e.constructor == "function" && !Ww(e) ? Bw(Hw(e)) : {};
}
var Kw = Gw, zw = Xr, qw = Ft;
function Zw(e) {
  return qw(e) && zw(e);
}
var Xw = Zw, Jw = Zt, Qw = qu, eE = Ft, tE = "[object Object]", nE = Function.prototype, rE = Object.prototype, Zu = nE.toString, aE = rE.hasOwnProperty, sE = Zu.call(Object);
function oE(e) {
  if (!eE(e) || Jw(e) != tE)
    return !1;
  var t = Qw(e);
  if (t === null)
    return !0;
  var n = aE.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && Zu.call(n) == sE;
}
var iE = oE;
function lE(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
var Xu = lE, uE = Ag, cE = Wa;
function dE(e, t, n, r) {
  var a = !n;
  n || (n = {});
  for (var s = -1, o = t.length; ++s < o; ) {
    var i = t[s], l = r ? r(n[i], e[i], i, n, e) : void 0;
    l === void 0 && (l = e[i]), a ? cE(n, i, l) : uE(n, i, l);
  }
  return n;
}
var fE = dE, vE = fE, pE = Oo;
function mE(e) {
  return vE(e, pE(e));
}
var hE = mE, Gi = zu, gE = ya, _E = Lw, bE = Rw, yE = Kw, Ki = mo, zi = Rt, wE = Xw, EE = ur, DE = Un, OE = cn, $E = iE, TE = go, qi = Xu, kE = hE;
function NE(e, t, n, r, a, s, o) {
  var i = qi(e, n), l = qi(t, n), c = o.get(l);
  if (c) {
    Gi(e, n, c);
    return;
  }
  var u = s ? s(i, l, n + "", e, t, o) : void 0, d = u === void 0;
  if (d) {
    var v = zi(l), p = !v && EE(l), h = !v && !p && TE(l);
    u = l, v || p || h ? zi(i) ? u = i : wE(i) ? u = bE(i) : p ? (d = !1, u = gE(l, !0)) : h ? (d = !1, u = _E(l, !0)) : u = [] : $E(l) || Ki(l) ? (u = i, Ki(i) ? u = kE(i) : (!OE(i) || DE(i)) && (u = yE(l))) : d = !1;
  }
  d && (o.set(l, u), a(u, l, r, s, o), o.delete(l)), Gi(e, n, u);
}
var IE = NE, AE = yo, CE = zu, SE = Cu, PE = IE, ME = cn, LE = Oo, xE = Xu;
function Ju(e, t, n, r, a) {
  e !== t && SE(t, function(s, o) {
    if (a || (a = new AE()), ME(s))
      PE(e, t, o, n, Ju, r, a);
    else {
      var i = r ? r(xE(e, o), s, o + "", e, t, a) : void 0;
      i === void 0 && (i = s), CE(e, o, i);
    }
  }, LE);
}
var Qu = Ju, RE = Qu, Zi = cn;
function ec(e, t, n, r, a, s) {
  return Zi(e) && Zi(t) && (s.set(t, e), RE(e, t, void 0, ec, s), s.delete(t)), e;
}
var FE = ec, YE = Eo, VE = Do;
function UE(e) {
  return YE(function(t, n) {
    var r = -1, a = n.length, s = a > 1 ? n[a - 1] : void 0, o = a > 2 ? n[2] : void 0;
    for (s = e.length > 3 && typeof s == "function" ? (a--, s) : void 0, o && VE(n[0], n[1], o) && (s = a < 3 ? void 0 : s, a = 1), t = Object(t); ++r < a; ) {
      var i = n[r];
      i && e(t, i, r, s);
    }
    return t;
  });
}
var jE = UE, BE = Qu, HE = jE, WE = HE(function(e, t, n, r) {
  BE(e, t, n, r);
}), GE = WE, KE = Gu, zE = Eo, qE = FE, ZE = GE, XE = zE(function(e) {
  return e.push(void 0, qE), KE(ZE, void 0, e);
}), jr = XE, JE = Object.prototype, QE = JE.hasOwnProperty;
function eD(e, t) {
  return e != null && QE.call(e, t);
}
var tD = eD, nD = tD, rD = Hu;
function aD(e, t) {
  return e != null && rD(e, t, nD);
}
var tc = aD, sD = Xr;
function oD(e, t) {
  return function(n, r) {
    if (n == null)
      return n;
    if (!sD(n))
      return e(n, r);
    for (var a = n.length, s = t ? a : -1, o = Object(n); (t ? s-- : ++s < a) && r(o[s], s, o) !== !1; )
      ;
    return n;
  };
}
var iD = oD, lD = Lu, uD = iD, cD = uD(lD), dD = cD;
function fD(e) {
  return e && e.length ? e[0] : void 0;
}
var nc = fD;
function vD(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
var Qn = vD, pD = dD;
function mD(e, t) {
  var n;
  return pD(e, function(r, a, s) {
    return n = t(r, a, s), !n;
  }), !!n;
}
var hD = mD, gD = xu, _D = Wu, bD = hD, yD = Rt, wD = Do;
function ED(e, t, n) {
  var r = yD(e) ? gD : bD;
  return n && wD(e, t, n) && (t = void 0), r(e, _D(t));
}
var DD = ED;
const OD = (e) => Object.prototype.toString.call(e).slice(8, -1), tr = (e) => Lp(e) && !isNaN(e.getTime()), sn = (e) => OD(e) === "Object", $o = tc, Xi = (e, t) => DD(t, (n) => tc(e, n)), Me = (e, t, n = "0") => {
  for (e = e != null ? String(e) : "", t = t || 2; e.length < t; )
    e = `${n}${e}`;
  return e;
}, Tt = (e) => Array.isArray(e), nn = (e) => Tt(e) && e.length > 0, wa = (e) => e == null ? e ?? null : document && Bt(e) ? document.querySelector(e) : e.$el ?? e, bn = (e, t, n, r = void 0) => {
  e.removeEventListener(t, n, r);
}, yn = (e, t, n, r = void 0) => (e.addEventListener(t, n, r), () => bn(e, t, n, r)), ca = (e, t) => !!e && !!t && (e === t || e.contains(t)), oa = (e, t) => {
  (e.key === " " || e.key === "Enter") && (t(e), e.preventDefault());
}, rc = (e, ...t) => {
  const n = {};
  let r;
  for (r in e)
    t.includes(r) || (n[r] = e[r]);
  return n;
}, ac = (e, t) => {
  const n = {};
  return t.forEach((r) => {
    r in e && (n[r] = e[r]);
  }), n;
};
function $D(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
const Ea = () => {
  function e() {
    return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
  }
  return `${e() + e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`;
}, TD = ["base", "start", "end", "startEnd"], kD = [
  "class",
  "wrapperClass",
  "contentClass",
  "style",
  "contentStyle",
  "color",
  "fillMode"
], ND = { base: {}, start: {}, end: {} };
function To(e, t, n = ND) {
  let r = e, a = {};
  t === !0 || Bt(t) ? (r = Bt(t) ? t : r, a = { ...n }) : sn(t) && (Xi(t, TD) ? a = { ...t } : a = {
    base: { ...t },
    start: { ...t },
    end: { ...t }
  });
  const s = jr(
    a,
    { start: a.startEnd, end: a.startEnd },
    n
  );
  return Object.entries(s).forEach(([o, i]) => {
    let l = r;
    i === !0 || Bt(i) ? (l = Bt(i) ? i : l, s[o] = { color: l }) : sn(i) && (Xi(i, kD) ? s[o] = { ...i } : s[o] = {}), jr(s[o], { color: l });
  }), s;
}
class ID {
  constructor() {
    ae(this, "type", "highlight");
  }
  normalizeConfig(t, n) {
    return To(t, n, {
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
class ko {
  constructor(t, n) {
    ae(this, "type", ""), ae(this, "collectionType", ""), this.type = t, this.collectionType = n;
  }
  normalizeConfig(t, n) {
    return To(t, n);
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
class AD extends ko {
  constructor() {
    super("content", "content");
  }
  normalizeConfig(t, n) {
    return To("base", n);
  }
}
class CD extends ko {
  constructor() {
    super("dot", "dots");
  }
}
class SD extends ko {
  constructor() {
    super("bar", "bars");
  }
}
class PD {
  constructor(t) {
    ae(this, "color"), ae(this, "renderers", [
      new AD(),
      new ID(),
      new CD(),
      new SD()
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
const MD = 300, LD = 60, xD = 80, RD = {
  maxSwipeTime: MD,
  minHorizontalSwipeDistance: LD,
  maxVerticalSwipeDistance: xD
}, FD = "MMMM YYYY", YD = "W", VD = "MMM", UD = "h A", jD = [
  "L",
  "YYYY-MM-DD",
  "YYYY/MM/DD"
], BD = [
  "L h:mm A",
  "YYYY-MM-DD h:mm A",
  "YYYY/MM/DD h:mm A"
], HD = [
  "L HH:mm",
  "YYYY-MM-DD HH:mm",
  "YYYY/MM/DD HH:mm"
], WD = [
  "h:mm A"
], GD = [
  "HH:mm"
], KD = "WWW, MMM D, YYYY", zD = [
  "L",
  "YYYY-MM-DD",
  "YYYY/MM/DD"
], qD = "iso", ZD = "YYYY-MM-DDTHH:mm:ss.SSSZ", XD = {
  title: FD,
  weekdays: YD,
  navMonths: VD,
  hours: UD,
  input: jD,
  inputDateTime: BD,
  inputDateTime24hr: HD,
  inputTime: WD,
  inputTime24hr: GD,
  dayPopover: KD,
  data: zD,
  model: qD,
  iso: ZD
}, on = {
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
on.en = on["en-US"];
on.es = on["es-ES"];
on.no = on.nb;
on.zh = on["zh-CN"];
const JD = Object.entries(on).reduce(
  (e, [t, { dow: n, L: r }]) => (e[t] = {
    id: t,
    firstDayOfWeek: n,
    masks: { L: r }
  }, e),
  {}
), QD = {
  componentPrefix: "V",
  color: "blue",
  isDark: !1,
  navVisibility: "click",
  titlePosition: "center",
  transition: "slide-h",
  touch: RD,
  masks: XD,
  locales: JD,
  datePicker: {
    updateOnInput: !0,
    inputDebounce: 1e3,
    popover: {
      visibility: "hover-focus",
      placement: "bottom-start",
      isInteractive: !0
    }
  }
}, Os = Ks(QD), eO = C(() => P0(Os.locales, (e) => (e.masks = jr(e.masks, Os.masks), e))), Dn = (e) => typeof window < "u" && $o(window.__vcalendar__, e) ? Cn(window.__vcalendar__, e) : Cn(Os, e);
var Da = {}, tO = {
  get exports() {
    return Da;
  },
  set exports(e) {
    Da = e;
  }
}, Oa = {}, nO = {
  get exports() {
    return Oa;
  },
  set exports(e) {
    Oa = e;
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
})(nO, Oa);
var $a = {}, rO = {
  get exports() {
    return $a;
  },
  set exports(e) {
    $a = e;
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
})(rO, $a);
var Ta = {}, aO = {
  get exports() {
    return Ta;
  },
  set exports(e) {
    Ta = e;
  }
}, ka = {}, sO = {
  get exports() {
    return ka;
  },
  set exports(e) {
    ka = e;
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
})(sO, ka);
var Na = {}, oO = {
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
  function n(r, a, s, o, i, l, c) {
    var u = /* @__PURE__ */ new Date(0);
    return u.setUTCFullYear(r, a, s), u.setUTCHours(o, i, l, c), u;
  }
  e.exports = t.default;
})(oO, Na);
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = l;
  var n = a(ka), r = a(Na);
  function a(m) {
    return m && m.__esModule ? m : { default: m };
  }
  var s = 36e5, o = 6e4, i = {
    timezone: /([Z+-].*)$/,
    timezoneZ: /^(Z)$/,
    timezoneHH: /^([+-]\d{2})$/,
    timezoneHHMM: /^([+-]\d{2}):?(\d{2})$/
  };
  function l(m, b, f) {
    var y, k;
    if (!m || (y = i.timezoneZ.exec(m), y))
      return 0;
    var w;
    if (y = i.timezoneHH.exec(m), y)
      return w = parseInt(y[1], 10), v(w) ? -(w * s) : NaN;
    if (y = i.timezoneHHMM.exec(m), y) {
      w = parseInt(y[1], 10);
      var P = parseInt(y[2], 10);
      return v(w, P) ? (k = Math.abs(w) * s + P * o, w > 0 ? -k : k) : NaN;
    }
    if (h(m)) {
      b = new Date(b || Date.now());
      var N = f ? b : c(b), x = u(N, m), S = f ? x : d(b, x, m);
      return -S;
    }
    return NaN;
  }
  function c(m) {
    return (0, r.default)(m.getFullYear(), m.getMonth(), m.getDate(), m.getHours(), m.getMinutes(), m.getSeconds(), m.getMilliseconds());
  }
  function u(m, b) {
    var f = (0, n.default)(m, b), y = (0, r.default)(f[0], f[1] - 1, f[2], f[3] % 24, f[4], f[5], 0).getTime(), k = m.getTime(), w = k % 1e3;
    return k -= w >= 0 ? w : 1e3 + w, y - k;
  }
  function d(m, b, f) {
    var y = m.getTime(), k = y - b, w = u(new Date(k), f);
    if (b === w)
      return b;
    k -= w - b;
    var P = u(new Date(k), f);
    return w === P ? w : Math.max(w, P);
  }
  function v(m, b) {
    return -23 <= m && m <= 23 && (b == null || 0 <= b && b <= 59);
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
})(aO, Ta);
var Ia = {}, iO = {
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
  }), t.default = void 0;
  var n = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/, r = n;
  t.default = r, e.exports = t.default;
})(iO, Ia);
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = d;
  var n = o(Oa), r = o($a), a = o(Ta), s = o(Ia);
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
  function d(S, M) {
    if (arguments.length < 1)
      throw new TypeError("1 argument required, but only " + arguments.length + " present");
    if (S === null)
      return /* @__PURE__ */ new Date(NaN);
    var R = M || {}, B = R.additionalDigits == null ? c : (0, n.default)(R.additionalDigits);
    if (B !== 2 && B !== 1 && B !== 0)
      throw new RangeError("additionalDigits must be 0, 1 or 2");
    if (S instanceof Date || typeof S == "object" && Object.prototype.toString.call(S) === "[object Date]")
      return new Date(S.getTime());
    if (typeof S == "number" || Object.prototype.toString.call(S) === "[object Number]")
      return new Date(S);
    if (!(typeof S == "string" || Object.prototype.toString.call(S) === "[object String]"))
      return /* @__PURE__ */ new Date(NaN);
    var V = v(S), q = p(V.date, B), ce = q.year, ee = q.restDateString, le = h(ee, ce);
    if (isNaN(le))
      return /* @__PURE__ */ new Date(NaN);
    if (le) {
      var ge = le.getTime(), De = 0, G;
      if (V.time && (De = m(V.time), isNaN(De)))
        return /* @__PURE__ */ new Date(NaN);
      if (V.timeZone || R.timeZone) {
        if (G = (0, a.default)(V.timeZone || R.timeZone, new Date(ge + De)), isNaN(G))
          return /* @__PURE__ */ new Date(NaN);
      } else
        G = (0, r.default)(new Date(ge + De)), G = (0, r.default)(new Date(ge + De + G));
      return new Date(ge + De + G);
    } else
      return /* @__PURE__ */ new Date(NaN);
  }
  function v(S) {
    var M = {}, R = u.dateTimePattern.exec(S), B;
    if (R ? (M.date = R[1], B = R[3]) : (R = u.datePattern.exec(S), R ? (M.date = R[1], B = R[2]) : (M.date = null, B = S)), B) {
      var V = u.timeZone.exec(B);
      V ? (M.time = B.replace(V[1], ""), M.timeZone = V[1].trim()) : M.time = B;
    }
    return M;
  }
  function p(S, M) {
    var R = u.YYY[M], B = u.YYYYY[M], V;
    if (V = u.YYYY.exec(S) || B.exec(S), V) {
      var q = V[1];
      return {
        year: parseInt(q, 10),
        restDateString: S.slice(q.length)
      };
    }
    if (V = u.YY.exec(S) || R.exec(S), V) {
      var ce = V[1];
      return {
        year: parseInt(ce, 10) * 100,
        restDateString: S.slice(ce.length)
      };
    }
    return {
      year: null
    };
  }
  function h(S, M) {
    if (M === null)
      return null;
    var R, B, V, q;
    if (S.length === 0)
      return B = /* @__PURE__ */ new Date(0), B.setUTCFullYear(M), B;
    if (R = u.MM.exec(S), R)
      return B = /* @__PURE__ */ new Date(0), V = parseInt(R[1], 10) - 1, w(M, V) ? (B.setUTCFullYear(M, V), B) : /* @__PURE__ */ new Date(NaN);
    if (R = u.DDD.exec(S), R) {
      B = /* @__PURE__ */ new Date(0);
      var ce = parseInt(R[1], 10);
      return P(M, ce) ? (B.setUTCFullYear(M, 0, ce), B) : /* @__PURE__ */ new Date(NaN);
    }
    if (R = u.MMDD.exec(S), R) {
      B = /* @__PURE__ */ new Date(0), V = parseInt(R[1], 10) - 1;
      var ee = parseInt(R[2], 10);
      return w(M, V, ee) ? (B.setUTCFullYear(M, V, ee), B) : /* @__PURE__ */ new Date(NaN);
    }
    if (R = u.Www.exec(S), R)
      return q = parseInt(R[1], 10) - 1, N(M, q) ? b(M, q) : /* @__PURE__ */ new Date(NaN);
    if (R = u.WwwD.exec(S), R) {
      q = parseInt(R[1], 10) - 1;
      var le = parseInt(R[2], 10) - 1;
      return N(M, q, le) ? b(M, q, le) : /* @__PURE__ */ new Date(NaN);
    }
    return null;
  }
  function m(S) {
    var M, R, B;
    if (M = u.HH.exec(S), M)
      return R = parseFloat(M[1].replace(",", ".")), x(R) ? R % 24 * i : NaN;
    if (M = u.HHMM.exec(S), M)
      return R = parseInt(M[1], 10), B = parseFloat(M[2].replace(",", ".")), x(R, B) ? R % 24 * i + B * l : NaN;
    if (M = u.HHMMSS.exec(S), M) {
      R = parseInt(M[1], 10), B = parseInt(M[2], 10);
      var V = parseFloat(M[3].replace(",", "."));
      return x(R, B, V) ? R % 24 * i + B * l + V * 1e3 : NaN;
    }
    return null;
  }
  function b(S, M, R) {
    M = M || 0, R = R || 0;
    var B = /* @__PURE__ */ new Date(0);
    B.setUTCFullYear(S, 0, 4);
    var V = B.getUTCDay() || 7, q = M * 7 + R + 1 - V;
    return B.setUTCDate(B.getUTCDate() + q), B;
  }
  var f = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], y = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function k(S) {
    return S % 400 === 0 || S % 4 === 0 && S % 100 !== 0;
  }
  function w(S, M, R) {
    if (M < 0 || M > 11)
      return !1;
    if (R != null) {
      if (R < 1)
        return !1;
      var B = k(S);
      if (B && R > y[M] || !B && R > f[M])
        return !1;
    }
    return !0;
  }
  function P(S, M) {
    if (M < 1)
      return !1;
    var R = k(S);
    return !(R && M > 366 || !R && M > 365);
  }
  function N(S, M, R) {
    return !(M < 0 || M > 52 || R != null && (R < 0 || R > 6));
  }
  function x(S, M, R) {
    return !(S != null && (S < 0 || S >= 25) || M != null && (M < 0 || M >= 60) || R != null && (R < 0 || R >= 60));
  }
  e.exports = t.default;
})(tO, Da);
const lO = /* @__PURE__ */ Lv(Da);
function lt(e, t) {
  if (t.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present");
}
function da(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? da = function(n) {
    return typeof n;
  } : da = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, da(e);
}
function dn(e) {
  lt(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || da(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), /* @__PURE__ */ new Date(NaN));
}
function br(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
var uO = {};
function No() {
  return uO;
}
function Ln(e, t) {
  var n, r, a, s, o, i, l, c;
  lt(1, arguments);
  var u = No(), d = br((n = (r = (a = (s = t == null ? void 0 : t.weekStartsOn) !== null && s !== void 0 ? s : t == null || (o = t.locale) === null || o === void 0 || (i = o.options) === null || i === void 0 ? void 0 : i.weekStartsOn) !== null && a !== void 0 ? a : u.weekStartsOn) !== null && r !== void 0 ? r : (l = u.locale) === null || l === void 0 || (c = l.options) === null || c === void 0 ? void 0 : c.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var v = dn(e), p = v.getDay(), h = (p < d ? 7 : 0) + p - d;
  return v.setDate(v.getDate() - h), v.setHours(0, 0, 0, 0), v;
}
function Ji(e) {
  var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
var cO = 6048e5;
function dO(e, t, n) {
  lt(2, arguments);
  var r = Ln(e, n), a = Ln(t, n), s = r.getTime() - Ji(r), o = a.getTime() - Ji(a);
  return Math.round((s - o) / cO);
}
function fO(e) {
  lt(1, arguments);
  var t = dn(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function vO(e) {
  lt(1, arguments);
  var t = dn(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function pO(e, t) {
  return lt(1, arguments), dO(fO(e), vO(e), t) + 1;
}
function mO(e, t) {
  var n, r, a, s, o, i, l, c;
  lt(1, arguments);
  var u = dn(e), d = u.getFullYear(), v = No(), p = br((n = (r = (a = (s = t == null ? void 0 : t.firstWeekContainsDate) !== null && s !== void 0 ? s : t == null || (o = t.locale) === null || o === void 0 || (i = o.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && a !== void 0 ? a : v.firstWeekContainsDate) !== null && r !== void 0 ? r : (l = v.locale) === null || l === void 0 || (c = l.options) === null || c === void 0 ? void 0 : c.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(p >= 1 && p <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var h = /* @__PURE__ */ new Date(0);
  h.setFullYear(d + 1, 0, p), h.setHours(0, 0, 0, 0);
  var m = Ln(h, t), b = /* @__PURE__ */ new Date(0);
  b.setFullYear(d, 0, p), b.setHours(0, 0, 0, 0);
  var f = Ln(b, t);
  return u.getTime() >= m.getTime() ? d + 1 : u.getTime() >= f.getTime() ? d : d - 1;
}
function hO(e, t) {
  var n, r, a, s, o, i, l, c;
  lt(1, arguments);
  var u = No(), d = br((n = (r = (a = (s = t == null ? void 0 : t.firstWeekContainsDate) !== null && s !== void 0 ? s : t == null || (o = t.locale) === null || o === void 0 || (i = o.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && a !== void 0 ? a : u.firstWeekContainsDate) !== null && r !== void 0 ? r : (l = u.locale) === null || l === void 0 || (c = l.options) === null || c === void 0 ? void 0 : c.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), v = mO(e, t), p = /* @__PURE__ */ new Date(0);
  p.setFullYear(v, 0, d), p.setHours(0, 0, 0, 0);
  var h = Ln(p, t);
  return h;
}
var gO = 6048e5;
function _O(e, t) {
  lt(1, arguments);
  var n = dn(e), r = Ln(n, t).getTime() - hO(n, t).getTime();
  return Math.round(r / gO) + 1;
}
function Aa(e) {
  return lt(1, arguments), Ln(e, {
    weekStartsOn: 1
  });
}
function bO(e) {
  lt(1, arguments);
  var t = dn(e), n = t.getFullYear(), r = /* @__PURE__ */ new Date(0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  var a = Aa(r), s = /* @__PURE__ */ new Date(0);
  s.setFullYear(n, 0, 4), s.setHours(0, 0, 0, 0);
  var o = Aa(s);
  return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= o.getTime() ? n : n - 1;
}
function yO(e) {
  lt(1, arguments);
  var t = bO(e), n = /* @__PURE__ */ new Date(0);
  n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0);
  var r = Aa(n);
  return r;
}
var wO = 6048e5;
function EO(e) {
  lt(1, arguments);
  var t = dn(e), n = Aa(t).getTime() - yO(t).getTime();
  return Math.round(n / wO) + 1;
}
function dt(e, t) {
  lt(2, arguments);
  var n = dn(e), r = br(t);
  return isNaN(r) ? /* @__PURE__ */ new Date(NaN) : (r && n.setDate(n.getDate() + r), n);
}
function Ca(e, t) {
  lt(2, arguments);
  var n = dn(e), r = br(t);
  if (isNaN(r))
    return /* @__PURE__ */ new Date(NaN);
  if (!r)
    return n;
  var a = n.getDate(), s = new Date(n.getTime());
  s.setMonth(n.getMonth() + r + 1, 0);
  var o = s.getDate();
  return a >= o ? s : (n.setFullYear(s.getFullYear(), s.getMonth(), a), n);
}
function Qi(e, t) {
  lt(2, arguments);
  var n = br(t);
  return Ca(e, n * 12);
}
var Kn = /* @__PURE__ */ ((e) => (e.Any = "any", e.All = "all", e))(Kn || {}), sc = /* @__PURE__ */ ((e) => (e.Days = "days", e.Weeks = "weeks", e.Months = "months", e.Years = "years", e))(sc || {}), oc = /* @__PURE__ */ ((e) => (e.Days = "days", e.Weekdays = "weekdays", e.Weeks = "weeks", e.Months = "months", e.Years = "years", e))(oc || {}), ic = /* @__PURE__ */ ((e) => (e.OrdinalWeekdays = "ordinalWeekdays", e))(ic || {});
class DO {
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
        return Io(this.from.date, n) % this.interval === 0;
      case "weeks":
        return UO(this.from.date, n) % this.interval === 0;
      case "months":
        return jO(this.from.date, n) % this.interval === 0;
      case "years":
        return mc(this.from.date, n) % this.interval === 0;
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
        return new OO(n);
      case "weekdays":
        return new $O(n);
      case "weeks":
        return new TO(n);
      case "months":
        return new kO(n);
      case "years":
        return new NO(n);
    }
  }
  normalizeComponents(t) {
    if (this.validator(t))
      return [t];
    if (!Tt(t))
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
class OO extends yr {
  constructor(t) {
    super(
      "days",
      t,
      CO,
      ({ day: n, dayFromEnd: r }) => [n, -r]
    );
  }
}
class $O extends yr {
  constructor(t) {
    super(
      "weekdays",
      t,
      $s,
      ({ weekday: n }) => [n]
    );
  }
}
class TO extends yr {
  constructor(t) {
    super(
      "weeks",
      t,
      SO,
      ({ week: n, weekFromEnd: r }) => [n, -r]
    );
  }
}
class kO extends yr {
  constructor(t) {
    super("months", t, PO, ({ month: n }) => [
      n
    ]);
  }
}
class NO extends yr {
  constructor(t) {
    super("years", t, xt, ({ year: n }) => [n]);
  }
}
class IO {
  constructor(t, n) {
    ae(this, "components"), this.type = t, this.components = this.normalizeComponents(n);
  }
  normalizeArrayConfig(t) {
    const n = [];
    return t.forEach((r, a) => {
      if (xt(r)) {
        if (a === 0)
          return;
        if (!el(t[0])) {
          console.error(
            `Ordinal range for "${this.type}" rule is from -5 to -1 or 1 to 5. This rule will be skipped.`
          );
          return;
        }
        if (!$s(r)) {
          console.error(
            `Acceptable range for "${this.type}" rule is from 1 to 5. This rule will be skipped`
          );
          return;
        }
        n.push([t[0], r]);
      } else
        Tt(r) && n.push(...this.normalizeArrayConfig(r));
    }), n;
  }
  normalizeComponents(t) {
    const n = [];
    return t.forEach((r, a) => {
      if (xt(r)) {
        if (a === 0)
          return;
        if (!el(t[0])) {
          console.error(
            `Ordinal range for "${this.type}" rule is from -5 to -1 or 1 to 5. This rule will be skipped.`
          );
          return;
        }
        if (!$s(r)) {
          console.error(
            `Acceptable range for "${this.type}" rule is from 1 to 5. This rule will be skipped`
          );
          return;
        }
        n.push([t[0], r]);
      } else
        Tt(r) && n.push(...this.normalizeArrayConfig(r));
    }), n;
  }
  passes(t) {
    const { weekday: n, weekdayOrdinal: r, weekdayOrdinalFromEnd: a } = t;
    return this.components.some(
      ([s, o]) => (s === r || s === -a) && n === o
    );
  }
}
class AO {
  constructor(t) {
    ae(this, "type", "function"), ae(this, "validated", !0), this.fn = t, Un(t) || (console.error(
      "The function rule requires a valid function. This rule will be skipped."
    ), this.validated = !1);
  }
  passes(t) {
    return this.validated ? this.fn(t) : !0;
  }
}
class Sa {
  constructor(t, n = {}, r) {
    ae(this, "validated", !0), ae(this, "config"), ae(this, "type", Kn.Any), ae(this, "from"), ae(this, "until"), ae(this, "rules", []), ae(this, "locale", new Ma()), this.parent = r, n.locale && (this.locale = n.locale), this.config = t, Un(t) ? (this.type = Kn.All, this.rules = [new AO(t)]) : Tt(t) ? (this.type = Kn.Any, this.rules = t.map((a) => new Sa(a, n, this))) : sn(t) ? (this.type = Kn.All, this.from = t.from ? this.locale.getDateParts(t.from) : r == null ? void 0 : r.from, this.until = t.until ? this.locale.getDateParts(t.until) : r == null ? void 0 : r.until, this.rules = this.getObjectRules(t)) : (console.error("Rule group configuration must be an object or an array."), this.validated = !1);
  }
  getObjectRules(t) {
    const n = [];
    if (t.every && (Bt(t.every) && (t.every = [1, `${t.every}s`]), Tt(t.every))) {
      const [r = 1, a = sc.Days] = t.every;
      n.push(new DO(a, r, this.from));
    }
    return Object.values(oc).forEach((r) => {
      r in t && n.push(yr.create(r, t[r]));
    }), Object.values(ic).forEach((r) => {
      r in t && n.push(new IO(r, t[r]));
    }), t.on != null && (Tt(t.on) || (t.on = [t.on]), n.push(
      new Sa(t.on, { locale: this.locale }, this.parent)
    )), n;
  }
  passes(t) {
    return this.validated ? this.from && t.dayIndex <= this.from.dayIndex || this.until && t.dayIndex >= this.until.dayIndex ? !1 : this.type === Kn.Any ? this.rules.some((n) => n.passes(t)) : this.rules.every((n) => n.passes(t)) : !0;
  }
}
function CO(e) {
  return xt(e) ? e >= 1 && e <= 31 : !1;
}
function $s(e) {
  return xt(e) ? e >= 1 && e <= 7 : !1;
}
function SO(e) {
  return xt(e) ? e >= -6 && e <= -1 || e >= 1 && e <= 6 : !1;
}
function PO(e) {
  return xt(e) ? e >= 1 && e <= 12 : !1;
}
function el(e) {
  return !(!xt(e) || e < -5 || e > 5 || e === 0);
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
}, it = 7, LO = 6, lc = 1e3, uc = lc * 60, cc = uc * 60, fa = cc * 24, xO = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], RO = ["L", "iso"], Cr = {
  milliseconds: [0, 999, 3],
  seconds: [0, 59, 2],
  minutes: [0, 59, 2],
  hours: [0, 23, 2]
}, dc = /d{1,2}|W{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|Z{1,4}|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g, FO = /\[([^]*?)\]/gm, tl = {
  D(e) {
    return e.day;
  },
  DD(e) {
    return Me(e.day, 2);
  },
  // Do(d: DateParts, l: Locale) {
  //   return l.DoFn(d.day);
  // },
  d(e) {
    return e.weekday - 1;
  },
  dd(e) {
    return Me(e.weekday - 1, 2);
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
    return Me(e.month, 2);
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
    return Me(e.year, 4);
  },
  h(e) {
    return e.hours % 12 || 12;
  },
  hh(e) {
    return Me(e.hours % 12 || 12, 2);
  },
  H(e) {
    return e.hours;
  },
  HH(e) {
    return Me(e.hours, 2);
  },
  m(e) {
    return e.minutes;
  },
  mm(e) {
    return Me(e.minutes, 2);
  },
  s(e) {
    return e.seconds;
  },
  ss(e) {
    return Me(e.seconds, 2);
  },
  S(e) {
    return Math.round(e.milliseconds / 100);
  },
  SS(e) {
    return Me(Math.round(e.milliseconds / 10), 2);
  },
  SSS(e) {
    return Me(e.milliseconds, 3);
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
    return `${t > 0 ? "-" : "+"}${Me(Math.floor(Math.abs(t) / 60), 2)}`;
  },
  ZZZ(e) {
    const t = e.timezoneOffset;
    return `${t > 0 ? "-" : "+"}${Me(
      Math.floor(Math.abs(t) / 60) * 100 + Math.abs(t) % 60,
      4
    )}`;
  },
  ZZZZ(e) {
    const t = e.timezoneOffset;
    return `${t > 0 ? "-" : "+"}${Me(Math.floor(Math.abs(t) / 60), 2)}:${Me(
      Math.abs(t) % 60,
      2
    )}`;
  }
}, vn = /\d\d?/, YO = /\d{3}/, VO = /\d{4}/, kr = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF/]+(\s*?[\u0600-\u06FF]+){1,2}/i, nl = () => {
}, rl = (e) => (t, n, r) => {
  const a = r[e].indexOf(
    n.charAt(0).toUpperCase() + n.substr(1).toLowerCase()
  );
  ~a && (t.month = a);
}, Le = {
  D: [
    vn,
    (e, t) => {
      e.day = t;
    }
  ],
  Do: [
    new RegExp(vn.source + kr.source),
    (e, t) => {
      e.day = parseInt(t, 10);
    }
  ],
  d: [vn, nl],
  W: [kr, nl],
  M: [
    vn,
    (e, t) => {
      e.month = t - 1;
    }
  ],
  MMM: [kr, rl("monthNamesShort")],
  MMMM: [kr, rl("monthNames")],
  YY: [
    vn,
    (e, t) => {
      const r = +(/* @__PURE__ */ new Date()).getFullYear().toString().substr(0, 2);
      e.year = +`${t > 68 ? r - 1 : r}${t}`;
    }
  ],
  YYYY: [
    VO,
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
    YO,
    (e, t) => {
      e.milliseconds = t;
    }
  ],
  h: [
    vn,
    (e, t) => {
      e.hours = t;
    }
  ],
  m: [
    vn,
    (e, t) => {
      e.minutes = t;
    }
  ],
  s: [
    vn,
    (e, t) => {
      e.seconds = t;
    }
  ],
  a: [
    kr,
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
Le.DD = Le.D;
Le.dd = Le.d;
Le.WWWW = Le.WWW = Le.WW = Le.W;
Le.MM = Le.M;
Le.mm = Le.m;
Le.hh = Le.H = Le.HH = Le.h;
Le.ss = Le.s;
Le.A = Le.a;
Le.ZZZZ = Le.ZZZ = Le.ZZ = Le.Z;
function fc(e, t) {
  return (nn(e) && e || [
    Bt(e) && e || "YYYY-MM-DD"
  ]).map(
    (n) => RO.reduce(
      (r, a) => r.replace(a, t.masks[a] || ""),
      n
    )
  );
}
function vc(e) {
  return sn(e) && "year" in e && "month" in e && "day" in e;
}
function al(e, t = 1) {
  const n = e.getDay() + 1, r = n >= t ? t - n : -(7 - (t - n));
  return dt(e, r);
}
function pc(e, t, n) {
  const r = Date.UTC(e, t - 1, n);
  return Io(/* @__PURE__ */ new Date(0), new Date(r));
}
function Io(e, t) {
  return Math.round((t.getTime() - e.getTime()) / fa);
}
function UO(e, t) {
  return Math.ceil(Io(al(e), al(t)) / 7);
}
function mc(e, t) {
  return t.getUTCFullYear() - e.getUTCFullYear();
}
function jO(e, t) {
  return mc(e, t) * 12 + (t.getMonth() - e.getMonth());
}
function hc(e, t = "") {
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
    const u = `${Me(r, 4)}-${Me(a, 2)}-${Me(s, 2)}T${Me(
      o,
      2
    )}:${Me(i, 2)}:${Me(l, 2)}.${Me(c, 3)}`;
    return lO(u, { timeZone: t });
  }
  return new Date(r, a - 1, s, o, i, l, c);
}
function BO(e, t) {
  let n = new Date(e.getTime());
  t.timezone && (n = new Date(
    e.toLocaleString("en-US", { timeZone: t.timezone })
  ), n.setMilliseconds(e.getMilliseconds()));
  const r = n.getMilliseconds(), a = n.getSeconds(), s = n.getMinutes(), o = n.getHours(), i = r + a * lc + s * uc + o * cc, l = n.getMonth() + 1, c = n.getFullYear(), u = t.getMonthParts(l, c), d = n.getDate(), v = u.numDays - d + 1, p = n.getDay() + 1, h = Math.floor((d - 1) / 7 + 1), m = Math.floor((u.numDays - d) / 7 + 1), b = Math.ceil(
    (d + Math.abs(u.firstWeekday - u.firstDayOfWeek)) / 7
  ), f = u.numWeeks - b + 1, y = u.weeknumbers[b], k = pc(c, l, d);
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
    week: b,
    weekFromEnd: f,
    weeknumber: y,
    month: l,
    year: c,
    date: n,
    dateTime: n.getTime(),
    dayIndex: k,
    timezoneOffset: 0,
    isValid: !0
  };
}
function HO(e, t, n) {
  return `${t}-${e}-${n}`;
}
function WO(e, t, n) {
  const r = t % 4 === 0 && t % 100 !== 0 || t % 400 === 0, a = new Date(t, e - 1, 1), s = a.getDay() + 1, o = e === 2 && r ? 29 : xO[e - 1], i = n - 1, l = pO(a, {
    weekStartsOn: i
  }), c = [], u = [];
  for (let d = 0; d < l; d++) {
    const v = dt(a, d * 7);
    c.push(_O(v, { weekStartsOn: i })), u.push(EO(v));
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
function GO() {
  const e = [];
  for (let a = 0; a < it; a++)
    e.push(
      hc({
        year: 2020,
        month: 1,
        day: 5 + a,
        hours: 12
      })
    );
  return e;
}
function ls(e, t = void 0) {
  const n = new Intl.DateTimeFormat(t, {
    weekday: e
  });
  return GO().map((r) => n.format(r));
}
function KO() {
  const e = [];
  for (let t = 0; t <= 24; t++)
    e.push(new Date(2e3, 0, 1, t));
  return e;
}
function zO(e = void 0) {
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
function gc() {
  const e = [];
  for (let t = 0; t < 12; t++)
    e.push(new Date(2e3, t, 15));
  return e;
}
function sl(e, t = void 0) {
  const n = new Intl.DateTimeFormat(t, {
    month: e,
    timeZone: "UTC"
  });
  return gc().map((r) => n.format(r));
}
function qO(e, t, n) {
  return xt(t) ? t === e : Tt(t) ? t.includes(e) : Un(t) ? t(e, n) : !(t.min != null && t.min > e || t.max != null && t.max < e || t.interval != null && e % t.interval !== 0);
}
function Sr(e, t, n) {
  const r = [], [a, s, o] = t;
  for (let i = a; i <= s; i++)
    (n == null || qO(i, n, e)) && r.push({
      value: i,
      label: Me(i, o)
    });
  return r;
}
function ZO(e, t) {
  return {
    milliseconds: Sr(
      e,
      Cr.milliseconds,
      t.milliseconds
    ),
    seconds: Sr(e, Cr.seconds, t.seconds),
    minutes: Sr(e, Cr.minutes, t.minutes),
    hours: Sr(e, Cr.hours, t.hours)
  };
}
function XO(e, t, n, r) {
  const s = Sr(e, t, r).reduce((o, i) => {
    if (i.disabled)
      return o;
    if (isNaN(o))
      return i.value;
    const l = Math.abs(o - n);
    return Math.abs(i.value - n) < l ? i.value : o;
  }, NaN);
  return isNaN(s) ? n : s;
}
function JO(e, t) {
  const n = { ...e };
  return Object.entries(t).forEach(([r, a]) => {
    const s = Cr[r], o = e[r];
    n[r] = XO(
      e,
      s,
      o,
      a
    );
  }), n;
}
function ol(e, t, n) {
  return fc(t, n).map((a) => {
    if (typeof a != "string")
      throw new Error("Invalid mask");
    let s = e;
    if (s.length > 1e3)
      return !1;
    let o = !0;
    const i = {};
    if (a.replace(dc, (u) => {
      if (Le[u]) {
        const d = Le[u], v = s.search(d[0]);
        ~v ? s.replace(d[0], (p) => (d[1](i, p, n), s = s.substr(v + p.length), p)) : o = !1;
      }
      return Le[u] ? "" : u.slice(1, u.length - 1);
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
function QO(e, t, n) {
  if (e == null)
    return "";
  let r = fc(t, n)[0];
  /Z$/.test(r) && (n.timezone = "utc");
  const a = [];
  r = r.replace(FO, (o, i) => (a.push(i), "??"));
  const s = n.getDateParts(e);
  return r = r.replace(
    dc,
    (o) => o in tl ? tl[o](s, n) : o.slice(1, o.length - 1)
  ), r.replace(/\?\?/g, () => a.shift());
}
const e$ = {
  daily: ["year", "month", "day"],
  weekly: ["year", "month", "week"],
  monthly: ["year", "month"]
};
function t$({
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
  const b = new Intl.DateTimeFormat(r.id, {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric"
  });
  let f = t.numDays - d + 1, y = t.numDays - f + 1, k = Math.floor((f - 1) / it + 1), w = 1, P = t.numWeeks, N = 1, x = t.month, S = t.year;
  const M = /* @__PURE__ */ new Date(), R = M.getDate(), B = M.getMonth() + 1, V = M.getFullYear();
  for (let q = 1; q <= LO; q++) {
    for (let ce = 1, ee = s; ce <= it; ce++, ee += ee === it ? 1 - it : 1) {
      v && ee === o && (f = 1, y = e.numDays, k = Math.floor((f - 1) / it + 1), w = Math.floor((c - f) / it + 1), P = 1, N = u, x = e.month, S = e.year, v = !1, p = !0);
      const le = r.getDateFromParams(S, x, f, 0, 0, 0, 0), ge = r.getDateFromParams(S, x, f, 12, 0, 0, 0), De = r.getDateFromParams(
        S,
        x,
        f,
        23,
        59,
        59,
        999
      ), G = le, $ = `${Me(S, 4)}-${Me(x, 2)}-${Me(f, 2)}`, j = ce, ne = it - ce, Y = l[q - 1], I = i[q - 1], Z = f === R && x === B && S === V, se = p && f === 1, ke = p && f === c, Oe = q === 1, ye = q === u, Be = ce === 1, je = ce === it, tt = pc(S, x, f);
      a.push({
        locale: r,
        id: $,
        position: ++m,
        label: f.toString(),
        ariaLabel: b.format(new Date(S, x - 1, f)),
        day: f,
        dayFromEnd: y,
        weekday: ee,
        weekdayPosition: j,
        weekdayPositionFromEnd: ne,
        weekdayOrdinal: k,
        weekdayOrdinalFromEnd: w,
        week: P,
        weekFromEnd: N,
        weekPosition: q,
        weeknumber: Y,
        isoWeeknumber: I,
        month: x,
        year: S,
        date: G,
        startDate: le,
        endDate: De,
        noonDate: ge,
        dayIndex: tt,
        isToday: Z,
        isFirstDay: se,
        isLastDay: ke,
        isDisabled: !p,
        isFocusable: !p,
        isFocused: !1,
        inMonth: p,
        inPrevMonth: v,
        inNextMonth: h,
        onTop: Oe,
        onBottom: ye,
        onLeft: Be,
        onRight: je,
        classes: [
          `id-${$}`,
          `day-${f}`,
          `day-from-end-${y}`,
          `weekday-${ee}`,
          `weekday-position-${j}`,
          `weekday-ordinal-${k}`,
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
            "on-top": Oe,
            "on-bottom": ye,
            "on-left": Be,
            "on-right": je
          }
        ]
      }), p && ke ? (p = !1, h = !0, f = 1, y = c, k = 1, w = Math.floor((c - f) / it + 1), P = 1, N = n.numWeeks, x = n.month, S = n.year) : (f++, y--, k = Math.floor((f - 1) / it + 1), w = Math.floor((c - f) / it + 1));
    }
    P++, N--;
  }
  return a;
}
function n$(e, t, n, r) {
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
function r$(e, t) {
  return e.days.map((n) => ({
    label: t.formatDate(n.date, t.masks.weekdays),
    weekday: n.weekday
  }));
}
function _c(e, t, n) {
  return ac(
    n.getDateParts(n.toDate(e)),
    e$[t]
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
    const i = new Date(r, n - 1, 1), l = Ca(i, a);
    return {
      month: l.getMonth() + 1,
      year: l.getFullYear()
    };
  }
}
function Ht(e) {
  return e != null && e.month != null && e.year != null;
}
function Ts(e, t) {
  return !Ht(e) || !Ht(t) ? !1 : (e = e, t = t, e.year !== t.year ? e.year < t.year : e.month && t.month && e.month !== t.month ? e.month < t.month : e.week && t.week && e.week !== t.week ? e.week < t.week : e.day && t.day && e.day !== t.day ? e.day < t.day : !1);
}
function Pa(e, t) {
  return !Ht(e) || !Ht(t) ? !1 : (e = e, t = t, e.year !== t.year ? e.year > t.year : e.month && t.month && e.month !== t.month ? e.month > t.month : e.week && t.week && e.week !== t.week ? e.week > t.week : e.day && t.day && e.day !== t.day ? e.day > t.day : !1);
}
function yc(e, t, n) {
  return (e || !1) && !Ts(e, t) && !Pa(e, n);
}
function a$(e, t) {
  return !e && t || e && !t ? !1 : !e && !t ? !0 : (e = e, t = t, e.year === t.year && e.month === t.month && e.week === t.week && e.day === t.day);
}
function s$(e, t, n, r) {
  if (!Ht(e) || !Ht(t))
    return [];
  const a = [];
  for (; !Pa(e, t); )
    a.push(e), e = bc(e, 1, n, r);
  return a;
}
function wc(e) {
  const { day: t, week: n, month: r, year: a } = e;
  let s = `${a}-${Me(r, 2)}`;
  return n && (s = `${s}-w${n}`), t && (s = `${s}-${Me(t, 2)}`), s;
}
function o$(e, t) {
  const { month: n, year: r, showWeeknumbers: a, showIsoWeeknumbers: s } = e, o = new Date(r, n - 1, 15), i = t.getMonthParts(n, r), l = t.getPrevMonthParts(n, r), c = t.getNextMonthParts(n, r), u = t$({ monthComps: i, prevMonthComps: l, nextMonthComps: c }, t), d = n$(u, a, s, t), v = r$(d[0], t);
  return {
    id: wc(e),
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
function i$(e, t) {
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
class il {
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
  constructor(t, n = new Ma()) {
    ae(this, "order"), ae(this, "locale"), ae(this, "start", null), ae(this, "end", null), ae(this, "repeat", null);
    var r;
    this.locale = n;
    const { start: a, end: s, span: o, order: i, repeat: l } = t;
    tr(a) && (this.start = n.getDateParts(a)), tr(s) ? this.end = n.getDateParts(s) : this.start != null && o && (this.end = n.getDateParts(dt(this.start.date, o - 1))), this.order = i ?? 0, l && (this.repeat = new Sa(
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
    return (Tt(t) ? t : [t]).filter((r) => r).map((r) => nr.from(r, n));
  }
  static from(t, n) {
    if (t instanceof nr)
      return t;
    const r = {
      start: null,
      end: null
    };
    return t != null && (Tt(t) ? (r.start = t[0] ?? null, r.end = t[1] ?? null) : sn(t) ? Object.assign(r, t) : (r.start = t, r.end = t)), r.start != null && (r.start = new Date(r.start)), r.end != null && (r.end = new Date(r.end)), new nr(r, n);
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
class l$ {
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
          endTime: ((p = n.end) == null ? void 0 : p.time) ?? fa
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
        const l = a === i.startDay, c = a === i.endDay, u = l ? i.startTime : 0, d = new Date(t.startDate.getTime() + u), v = c ? i.endTime : fa, p = new Date(t.endDate.getTime() + v), h = u === 0 && v === fa, m = s.order || 0;
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
const u$ = 12, c$ = 5;
function d$(e, t) {
  const n = new Intl.DateTimeFormat().resolvedOptions().locale;
  let r;
  Bt(e) ? r = e : $o(e, "id") && (r = e.id), r = (r || n).toLowerCase();
  const a = Object.keys(t), s = (l) => a.find((c) => c.toLowerCase() === l);
  r = s(r) || s(r.substring(0, 2)) || n;
  const o = {
    ...t["en-IE"],
    ...t[r],
    id: r,
    monthCacheSize: u$,
    pageCacheSize: c$
  };
  return sn(e) ? jr(e, o) : o;
}
class Ma {
  constructor(t = void 0, n) {
    ae(this, "id"), ae(this, "daysInWeek"), ae(this, "firstDayOfWeek"), ae(this, "masks"), ae(this, "timezone"), ae(this, "hourLabels"), ae(this, "dayNames"), ae(this, "dayNamesShort"), ae(this, "dayNamesShorter"), ae(this, "dayNamesNarrow"), ae(this, "monthNames"), ae(this, "monthNamesShort"), ae(this, "relativeTimeNames"), ae(this, "amPm", ["am", "pm"]), ae(this, "monthCache"), ae(this, "pageCache");
    const { id: r, firstDayOfWeek: a, masks: s, monthCacheSize: o, pageCacheSize: i } = d$(t, eO.value);
    this.monthCache = new il(
      o,
      HO,
      WO
    ), this.pageCache = new il(i, wc, o$), this.id = r, this.daysInWeek = it, this.firstDayOfWeek = $D(a, 1, it), this.masks = s, this.timezone = n || void 0, this.hourLabels = this.getHourLabels(), this.dayNames = ls("long", this.id), this.dayNamesShort = ls("short", this.id), this.dayNamesShorter = this.dayNamesShort.map((l) => l.substring(0, 2)), this.dayNamesNarrow = ls("narrow", this.id), this.monthNames = sl("long", this.id), this.monthNamesShort = sl("short", this.id), this.relativeTimeNames = zO(this.id);
  }
  formatDate(t, n) {
    return QO(t, n, this);
  }
  parseDate(t, n) {
    return ol(t, n, this);
  }
  toDate(t, n = {}) {
    const r = /* @__PURE__ */ new Date(NaN);
    let a = r;
    const { fillDate: s, mask: o, patch: i, rules: l } = n;
    if (xt(t) ? (n.type = "number", a = /* @__PURE__ */ new Date(+t)) : Bt(t) ? (n.type = "string", a = t ? ol(t, o || "iso", this) : r) : tr(t) ? (n.type = "date", a = new Date(t.getTime())) : vc(t) && (n.type = "object", a = this.getDateFromParts(t)), a && (i || l)) {
      let c = this.getDateParts(a);
      if (i && s != null) {
        const u = this.getDateParts(this.toDate(s));
        c = this.getDateParts(
          this.toDate({ ...u, ...ac(c, MO[i]) })
        );
      }
      l && (c = JO(c, l)), a = this.getDateFromParts(c);
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
    return BO(t, this);
  }
  getDateFromParts(t) {
    return hc(t, this.timezone);
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
    return i$(t, n);
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
class Ec {
  constructor(t, n, r) {
    ae(this, "key", ""), ae(this, "hashcode", ""), ae(this, "highlight", null), ae(this, "content", null), ae(this, "dot", null), ae(this, "bar", null), ae(this, "event", null), ae(this, "popover", null), ae(this, "customData", null), ae(this, "ranges"), ae(this, "hasRanges", !1), ae(this, "order", 0), ae(this, "pinPage", !1), ae(this, "maxRepeatSpan", 0), ae(this, "locale");
    const { dates: a } = Object.assign(
      this,
      { hashcode: "", order: 0, pinPage: !1 },
      t
    );
    this.key || (this.key = Ea()), this.locale = r, n.normalizeGlyphs(this), this.ranges = r.ranges(a ?? []), this.hasRanges = !!nn(this.ranges), this.maxRepeatSpan = this.ranges.filter((s) => s.hasRepeat).map((s) => s.daySpan).reduce((s, o) => Math.max(s, o), 0);
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
const Dc = "__vc_base_context__", Oc = {
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
function $c(e) {
  const t = C(() => e.color ?? ""), n = C(() => e.isDark ?? !1), { displayMode: r } = Mv(n), a = C(() => new PD(t.value)), s = C(() => {
    if (e.locale instanceof Ma)
      return e.locale;
    const u = sn(e.locale) ? e.locale : {
      id: e.locale,
      firstDayOfWeek: e.firstDayOfWeek,
      masks: e.masks
    };
    return new Ma(u, e.timezone);
  }), o = C(() => s.value.masks), i = C(() => {
    const u = e.disabledDates ?? [];
    return e.minDate != null && u.push({
      start: null,
      end: dt(s.value.toDate(e.minDate), -1)
    }), e.maxDate != null && u.push({
      start: dt(s.value.toDate(e.maxDate), 1),
      end: null
    }), s.value.ranges(u);
  }), l = C(() => new Ec(
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
  return En(Dc, c), c;
}
function f$(e) {
  return Fe(Dc, $c(e));
}
const v$ = (e, t, {
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
      const b = { toLeft: !1, toRight: !1 };
      p < 0 ? b.toLeft = !0 : b.toRight = !0, t(b);
    }
  }
  return yn(e, "touchstart", c, { passive: !0 }), yn(e, "touchend", u, { passive: !0 }), () => {
    bn(e, "touchstart", c), bn(e, "touchend", u);
  };
}, va = {}, p$ = (e, t = 10) => {
  va[e] = Date.now() + t;
}, m$ = (e, t) => {
  if (e in va) {
    const n = va[e];
    if (Date.now() < n)
      return;
    delete va[e];
  }
  t();
}, h$ = {
  ...Oc,
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
}, g$ = [
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
], Tc = "__vc_calendar_context__";
function _$(e, { emit: t, slots: n }) {
  const r = te(null), a = te(null), s = te(null), o = te((/* @__PURE__ */ new Date()).getDate()), i = te(!1), l = te(Ea()), c = te(Ea()), u = te(e.view), d = te([]), v = te("");
  let p = null, h = null;
  const {
    theme: m,
    color: b,
    displayMode: f,
    locale: y,
    masks: k,
    disabledAttribute: w,
    disabledDates: P
  } = f$(e), N = C(() => e.rows * e.columns), x = C(() => e.step || N.value), S = C(() => nc(d.value) ?? null), M = C(() => Qn(d.value) ?? null), R = C(
    () => e.minPage || (e.minDate ? j(e.minDate) : null)
  ), B = C(
    () => e.maxPage || (e.maxDate ? j(e.maxDate) : null)
  ), V = C(() => e.navVisibility), q = C(() => !!e.showWeeknumbers), ce = C(() => !!e.showIsoWeeknumbers), ee = C(() => u.value === "monthly"), le = C(() => u.value === "weekly"), ge = C(() => u.value === "daily"), De = () => {
    i.value = !0, t("transition-start");
  }, G = () => {
    i.value = !1, t("transition-end"), p && (p.resolve(!0), p = null);
  }, $ = (H, z, ve = u.value) => bc(H, z, ve, y.value), j = (H) => _c(H, u.value, y.value), ne = (H) => {
    !w.value || !Oe.value || (H.isDisabled = Oe.value.cellExists(
      w.value.key,
      H.dayIndex
    ));
  }, Y = (H) => {
    H.isFocusable = H.inMonth && H.day === o.value;
  }, I = (H, z) => {
    for (const ve of H)
      for (const A of ve.days)
        if (z(A) === !1)
          return;
  }, Z = C(
    () => d.value.reduce((H, z) => (H.push(...z.viewDays), H), [])
  ), se = C(() => {
    const H = [];
    return (e.attributes || []).forEach((z, ve) => {
      if (!z || !z.dates)
        return;
      const A = $o(z, "key") ? z.key : ve, K = z.order || 0;
      H.push(
        new Ec(
          {
            ...z,
            key: A,
            order: K
          },
          m.value,
          y.value
        )
      );
    }), w.value && H.push(w.value), H;
  }), ke = C(() => nn(se.value)), Oe = C(() => {
    const H = new l$();
    return se.value.forEach((z) => {
      z.ranges.forEach((ve) => {
        H.render(z, ve, Z.value);
      });
    }), H;
  }), ye = C(() => Z.value.reduce((H, z) => (H[z.dayIndex] = { day: z, cells: [] }, H[z.dayIndex].cells.push(...Oe.value.getCells(z)), H), {})), Be = (H, z) => {
    const ve = e.showWeeknumbers || e.showIsoWeeknumbers;
    return ve == null ? "" : yp(ve) ? ve ? "left" : "" : ve.startsWith("right") ? z > 1 ? "right" : ve : H > 1 ? "left" : ve;
  }, je = () => {
    var H, z;
    if (!ke.value)
      return null;
    const ve = se.value.find((ue) => ue.pinPage) || se.value[0];
    if (!ve || !ve.hasRanges)
      return null;
    const [A] = ve.ranges, K = ((H = A.start) == null ? void 0 : H.date) || ((z = A.end) == null ? void 0 : z.date);
    return K ? j(K) : null;
  }, tt = () => {
    if (Ht(S.value))
      return S.value;
    const H = je();
    return Ht(H) ? H : j(/* @__PURE__ */ new Date());
  }, D = (H, z = {}) => {
    const { view: ve = u.value, position: A = 1, force: K } = z, ue = A > 0 ? 1 - A : -(N.value + A);
    let $e = $(H, ue, ve), qe = $($e, N.value - 1, ve);
    return K || (Ts($e, R.value) ? $e = R.value : Pa(qe, B.value) && ($e = $(B.value, 1 - N.value)), qe = $($e, N.value - 1)), { fromPage: $e, toPage: qe };
  }, _ = (H, z, ve = "") => {
    if (ve === "none" || ve === "fade")
      return ve;
    if ((H == null ? void 0 : H.view) !== (z == null ? void 0 : z.view))
      return "fade";
    const A = Pa(z, H), K = Ts(z, H);
    return !A && !K ? "fade" : ve === "slide-v" ? K ? "slide-down" : "slide-up" : K ? "slide-right" : "slide-left";
  }, L = (H = {}) => new Promise((z, ve) => {
    const { position: A = 1, force: K = !1, transition: ue } = H, $e = Ht(H.page) ? H.page : tt(), { fromPage: qe } = D($e, {
      position: A,
      force: K
    }), Pt = [];
    for (let ft = 0; ft < N.value; ft++) {
      const Wn = $(qe, ft), Dr = ft + 1, ta = Math.ceil(Dr / e.columns), Et = e.rows - ta + 1, na = Dr % e.columns || e.columns, Or = e.columns - na + 1, rs = Be(na, Or);
      Pt.push(
        y.value.getPage({
          ...Wn,
          view: u.value,
          titlePosition: e.titlePosition,
          trimWeeks: e.trimWeeks,
          position: Dr,
          row: ta,
          rowFromEnd: Et,
          column: na,
          columnFromEnd: Or,
          showWeeknumbers: q.value,
          showIsoWeeknumbers: ce.value,
          weeknumberPosition: rs
        })
      );
    }
    v.value = _(
      d.value[0],
      Pt[0],
      ue
    ), d.value = Pt, v.value && v.value !== "none" ? p = {
      resolve: z,
      reject: ve
    } : z(!0);
  }), Q = (H) => {
    const z = S.value ?? j(/* @__PURE__ */ new Date());
    return $(z, H);
  }, oe = (H, z = {}) => {
    const ve = Ht(H) ? H : j(H);
    return Object.assign(
      z,
      D(ve, {
        ...z,
        force: !0
      })
    ), s$(
      z.fromPage,
      z.toPage,
      u.value,
      y.value
    ).map((K) => yc(K, R.value, B.value)).every((K) => K);
  }, be = (H, z = {}) => oe(Q(H), z), ot = C(() => be(-x.value)), ze = C(() => be(x.value)), wt = async (H, z = {}) => !z.force && !oe(H, z) ? !1 : (z.fromPage && !a$(z.fromPage, S.value) && (a.value && a.value.hide({ hideDelay: 0 }), z.view && (p$("view", 10), u.value = z.view), await L({
    ...z,
    page: z.fromPage,
    position: 1,
    force: !0
  }), t("did-move", d.value)), !0), Yt = (H, z = {}) => wt(Q(H), z), Pe = () => Yt(-x.value), F = () => Yt(x.value), W = (H) => {
    const z = ee.value ? ".in-month" : "", ve = `.id-${y.value.getDayId(H)}${z}`, A = `${ve}.vc-focusable, ${ve} .vc-focusable`, K = r.value;
    if (K) {
      const ue = K.querySelector(A);
      if (ue)
        return ue.focus(), !0;
    }
    return !1;
  }, He = async (H, z = {}) => W(H) ? !0 : (await wt(H, z), W(H)), We = (H, z) => {
    o.value = H.day, t("dayclick", H, z);
  }, Vt = (H, z) => {
    t("daymouseenter", H, z);
  }, fn = (H, z) => {
    t("daymouseleave", H, z);
  }, Ct = (H, z) => {
    o.value = H.day, s.value = H, H.isFocused = !0, t("dayfocusin", H, z);
  }, St = (H, z) => {
    s.value = null, H.isFocused = !1, t("dayfocusout", H, z);
  }, kn = (H, z) => {
    t("daykeydown", H, z);
    const ve = H.noonDate;
    let A = null;
    switch (z.key) {
      case "ArrowLeft": {
        A = dt(ve, -1);
        break;
      }
      case "ArrowRight": {
        A = dt(ve, 1);
        break;
      }
      case "ArrowUp": {
        A = dt(ve, -7);
        break;
      }
      case "ArrowDown": {
        A = dt(ve, 7);
        break;
      }
      case "Home": {
        A = dt(ve, -H.weekdayPosition + 1);
        break;
      }
      case "End": {
        A = dt(ve, H.weekdayPositionFromEnd);
        break;
      }
      case "PageUp": {
        z.altKey ? A = Qi(ve, -1) : A = Ca(ve, -1);
        break;
      }
      case "PageDown": {
        z.altKey ? A = Qi(ve, 1) : A = Ca(ve, 1);
        break;
      }
    }
    A && (z.preventDefault(), He(A).catch());
  }, Hn = (H) => {
    const z = s.value;
    z != null && kn(z, H);
  }, ns = (H, z) => {
    t("weeknumberclick", H, z);
  };
  L({
    page: e.initialPage,
    position: e.initialPagePosition
  }), Vn(() => {
    !e.disablePageSwipe && r.value && (h = v$(
      r.value,
      ({ toLeft: H = !1, toRight: z = !1 }) => {
        H ? F() : z && Pe();
      },
      Dn("touch")
    ));
  }), Kr(() => {
    d.value = [], h && h();
  }), Ce(
    () => y.value,
    () => {
      L();
    }
  ), Ce(
    () => N.value,
    () => L()
  ), Ce(
    () => e.view,
    () => u.value = e.view
  ), Ce(
    () => u.value,
    () => {
      m$("view", () => {
        L();
      }), t("update:view", u.value);
    }
  ), Ce(
    () => o.value,
    () => {
      I(d.value, (H) => Y(H));
    }
  ), Gs(() => {
    t("update:pages", d.value), I(d.value, (H) => {
      ne(H), Y(H);
    });
  });
  const ea = {
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
    color: b,
    displayMode: f,
    locale: y,
    masks: k,
    attributes: se,
    disabledAttribute: w,
    disabledDates: P,
    attributeContext: Oe,
    days: Z,
    dayCells: ye,
    count: N,
    step: x,
    firstPage: S,
    lastPage: M,
    canMovePrev: ot,
    canMoveNext: ze,
    minPage: R,
    maxPage: B,
    isMonthly: ee,
    isWeekly: le,
    isDaily: ge,
    navVisibility: V,
    showWeeknumbers: q,
    showIsoWeeknumbers: ce,
    getDateAddress: j,
    canMove: oe,
    canMoveBy: be,
    move: wt,
    moveBy: Yt,
    movePrev: Pe,
    moveNext: F,
    onTransitionBeforeEnter: De,
    onTransitionAfterEnter: G,
    tryFocusDate: W,
    focusDate: He,
    onKeydown: Hn,
    onDayKeydown: kn,
    onDayClick: We,
    onDayMouseenter: Vt,
    onDayMouseleave: fn,
    onDayFocusin: Ct,
    onDayFocusout: St,
    onWeeknumberClick: ns
  };
  return En(Tc, ea), ea;
}
function Bn() {
  const e = Fe(Tc);
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
    return (n, r) => g(t)[e.name] ? (E(), Ue(au(g(t)[e.name]), su(ln({ key: 0 }, n.$attrs)), null, 16)) : Nt(n.$slots, "default", { key: 1 });
  }
});
function ks(e) {
  document && document.dispatchEvent(
    new CustomEvent("show-popover", {
      detail: e
    })
  );
}
function La(e) {
  document && document.dispatchEvent(
    new CustomEvent("hide-popover", {
      detail: e
    })
  );
}
function kc(e) {
  document && document.dispatchEvent(
    new CustomEvent("toggle-popover", {
      detail: e
    })
  );
}
function Nc(e) {
  const { visibility: t } = e, n = t === "click", r = t === "hover", a = t === "hover-focus", s = t === "focus";
  e.autoHide = !n;
  let o = !1, i = !1;
  const l = (h) => {
    n && (kc({
      ...e,
      target: e.target || h.currentTarget
    }), h.stopPropagation());
  }, c = (h) => {
    o || (o = !0, (r || a) && ks({
      ...e,
      target: e.target || h.currentTarget
    }));
  }, u = () => {
    o && (o = !1, (r || a && !i) && La(e));
  }, d = (h) => {
    i || (i = !0, (s || a) && ks({
      ...e,
      target: e.target || h.currentTarget
    }));
  }, v = (h) => {
    i && !ca(h.currentTarget, h.relatedTarget) && (i = !1, (s || a && !o) && La(e));
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
const ll = (e) => {
  const t = wa(e);
  if (t == null)
    return;
  const n = t.popoverHandlers;
  !n || !n.length || (n.forEach((r) => r()), delete t.popoverHandlers);
}, ul = (e, t) => {
  const n = wa(e);
  if (n == null)
    return;
  const r = [], a = Nc(t);
  Object.entries(a).forEach(([s, o]) => {
    r.push(yn(n, s, o));
  }), n.popoverHandlers = r;
}, Ic = {
  mounted(e, t) {
    const { value: n } = t;
    n && ul(e, n);
  },
  updated(e, t) {
    const { oldValue: n, value: r } = t, a = n == null ? void 0 : n.visibility, s = r == null ? void 0 : r.visibility;
    a !== s && (a && (ll(e), s || La(n)), s && ul(e, r));
  },
  unmounted(e) {
    ll(e);
  }
}, y$ = ["disabled"], w$ = {
  key: 1,
  type: "button",
  class: "vc-title"
}, E$ = ["disabled"], Ac = /* @__PURE__ */ Se({
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
    }), u = C(() => t.page.titlePosition.includes("left")), d = C(() => t.page.titlePosition.includes("right")), v = C(() => t.layout ? t.layout : u.value ? "tu-pn" : d.value ? "pn-tu" : "p-tu-n;"), p = C(() => ({
      prev: v.value.includes("p") && !t.hideArrows,
      title: v.value.includes("t") && !t.hideTitle,
      next: v.value.includes("n") && !t.hideArrows
    })), h = C(() => ({ gridTemplateColumns: v.value.split("").map((b) => {
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
    return (m, b) => (E(), T("div", {
      class: Ze(["vc-header", { "is-lg": e.isLg, "is-xl": e.isXl, "is-2xl": e.is2xl }]),
      style: Pr(g(h))
    }, [
      g(p).prev ? (E(), T("button", {
        key: 0,
        type: "button",
        class: "vc-arrow vc-prev vc-focus",
        disabled: !g(a),
        onClick: b[0] || (b[0] = //@ts-ignore
        (...f) => g(s) && g(s)(...f)),
        onKeydown: b[1] || (b[1] = Jo(
          //@ts-ignore
          (...f) => g(s) && g(s)(...f),
          ["space", "enter"]
        ))
      }, [
        _e(rr, {
          name: "header-prev-button",
          disabled: !g(a)
        }, {
          default: et(() => [
            _e(lr, {
              name: "ChevronLeft",
              size: "24"
            })
          ]),
          _: 1
        }, 8, ["disabled"])
      ], 40, y$)) : X("", !0),
      g(p).title ? Ke((E(), T("button", w$, [
        _e(rr, {
          name: "header-title",
          title: e.page.title
        }, {
          default: et(() => [
            O("span", null, fe(e.page.title), 1)
          ]),
          _: 1
        }, 8, ["title"])
      ])), [
        [g(Ic), g(c)]
      ]) : X("", !0),
      g(p).next ? (E(), T("button", {
        key: 2,
        type: "button",
        class: "vc-arrow vc-next vc-focus",
        disabled: !g(o),
        onClick: b[2] || (b[2] = //@ts-ignore
        (...f) => g(i) && g(i)(...f)),
        onKeydown: b[3] || (b[3] = Jo(
          //@ts-ignore
          (...f) => g(i) && g(i)(...f),
          ["space", "enter"]
        ))
      }, [
        _e(rr, {
          name: "header-next-button",
          disabled: !g(o)
        }, {
          default: et(() => [
            _e(lr, {
              name: "ChevronRight",
              size: "24"
            })
          ]),
          _: 1
        }, 8, ["disabled"])
      ], 40, E$)) : X("", !0)
    ], 6));
  }
}), D$ = Se({
  directives: { popover: Ic },
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
    } = Bn(), v = C(() => e.day), p = C(() => r.value.getCells(v.value)), h = C(
      () => p.value.map((ee) => ee.data)
    ), m = C(() => ({
      ...v.value,
      attributes: h.value,
      attributeCells: p.value
    }));
    function b({ data: ee }, { popovers: le }) {
      const { key: ge, customData: De, popover: G } = ee;
      if (!G)
        return;
      const $ = Bi(
        {
          key: ge,
          customData: De,
          attribute: ee
        },
        { ...G },
        {
          visibility: G.label ? "hover" : "click",
          placement: "bottom",
          isInteractive: !G.label
        }
      );
      le.splice(0, 0, $);
    }
    const f = C(() => {
      const ee = {
        ...n.value.prepareRender({}),
        popovers: []
      };
      return p.value.forEach((le) => {
        n.value.render(le, ee), b(le, ee);
      }), ee;
    }), y = C(() => f.value.highlights), k = C(() => !!nn(y.value)), w = C(() => f.value.content), P = C(() => f.value.dots), N = C(() => !!nn(P.value)), x = C(() => f.value.bars), S = C(() => !!nn(x.value)), M = C(() => f.value.popovers), R = C(
      () => M.value.map((ee) => ee.attribute)
    ), B = C(() => [
      "vc-day",
      ...v.value.classes,
      { "vc-day-box-center-center": !s["day-content"] },
      { "is-not-in-month": !e.day.inMonth }
    ]), V = C(() => {
      let ee;
      v.value.isFocusable ? ee = "0" : ee = "-1";
      const le = [
        "vc-day-content vc-focusable vc-focus vc-attr",
        { "vc-disabled": v.value.isDisabled },
        Cn(Qn(y.value), "contentClass"),
        Cn(Qn(w.value), "class") || ""
      ], ge = {
        ...Cn(Qn(y.value), "contentStyle"),
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
        d(m.value, ee);
      }
    })), ce = C(() => nn(M.value) ? Bi(
      {
        id: a.value,
        data: { day: v, attributes: R.value }
      },
      ...M.value
    ) : null);
    return {
      attributes: h,
      attributeCells: p,
      bars: x,
      dayClasses: B,
      dayContentProps: V,
      dayContentEvents: q,
      dayPopover: ce,
      glyphs: f,
      dots: P,
      hasDots: N,
      hasBars: S,
      highlights: y,
      hasHighlights: k,
      locale: t,
      popovers: M
    };
  }
}), O$ = {
  key: 0,
  class: "vc-highlights vc-day-layer"
}, $$ = {
  key: 1,
  class: "vc-day-layer vc-day-box-center-bottom"
}, T$ = { class: "vc-dots" }, k$ = {
  key: 2,
  class: "vc-day-layer vc-day-box-center-bottom"
}, N$ = { class: "vc-bars" };
function I$(e, t, n, r, a, s) {
  const o = An("CalendarSlot"), i = Md("popover");
  return E(), T("div", {
    class: Ze(e.dayClasses)
  }, [
    e.hasHighlights ? (E(), T("div", O$, [
      (E(!0), T(re, null, Ee(e.highlights, ({ key: l, wrapperClass: c, class: u, style: d }) => (E(), T("div", {
        key: l,
        class: Ze(c)
      }, [
        O("div", {
          class: Ze(u),
          style: Pr(d)
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
      default: et(() => [
        Ke((E(), T("div", ln(e.dayContentProps, Ld(e.dayContentEvents, !0)), [
          zr(fe(e.day.label), 1)
        ], 16)), [
          [i, e.dayPopover]
        ])
      ]),
      _: 1
    }, 8, ["day", "attributes", "attribute-cells", "dayProps", "dayEvents", "locale"]),
    e.hasDots ? (E(), T("div", $$, [
      O("div", T$, [
        (E(!0), T(re, null, Ee(e.dots, ({ key: l, class: c, style: u }) => (E(), T("span", {
          key: l,
          class: Ze(c),
          style: Pr(u)
        }, null, 6))), 128))
      ])
    ])) : X("", !0),
    e.hasBars ? (E(), T("div", k$, [
      O("div", N$, [
        (E(!0), T(re, null, Ee(e.bars, ({ key: l, class: c, style: u }) => (E(), T("span", {
          key: l,
          class: Ze(c),
          style: Pr(u)
        }, null, 6))), 128))
      ])
    ])) : X("", !0)
  ], 2);
}
const A$ = /* @__PURE__ */ un(D$, [["render", I$]]), C$ = {
  name: "CalendarPane",
  inheritAttrs: !1,
  components: { CalendarHeader: Ac, CalendarDay: A$ },
  props: {
    page: { type: Object, required: !0 }
  },
  setup() {
    const { onWeeknumberClick: e } = Bn();
    return {
      onWeeknumberClick: e
    };
  }
}, S$ = { class: "vc-weekdays" }, P$ = ["onClick"];
function M$(e, t, n, r, a, s) {
  const o = An("CalendarHeader"), i = An("CalendarDay");
  return E(), T("div", {
    class: Ze([
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
      class: Ze(["vc-weeks", {
        [`vc-show-weeknumbers-${n.page.weeknumberPosition}`]: n.page.weeknumberPosition
      }])
    }, [
      O("div", S$, [
        (E(!0), T(re, null, Ee(n.page.weekdays, ({ weekday: l, label: c }, u) => (E(), T("div", {
          key: u,
          class: Ze(`vc-weekday vc-weekday-${l}`)
        }, fe(c), 3))), 128))
      ]),
      (E(!0), T(re, null, Ee(n.page.viewWeeks, (l) => (E(), T("div", {
        key: `weeknumber-${l.weeknumber}`,
        class: "vc-week"
      }, [
        n.page.weeknumberPosition ? (E(), T("div", {
          key: 0,
          class: Ze(["vc-weeknumber", `is-${n.page.weeknumberPosition}`])
        }, [
          O("span", {
            class: Ze(["vc-weeknumber-content"]),
            onClick: (c) => r.onWeeknumberClick(l, c)
          }, fe(l.weeknumberDisplay), 9, P$)
        ], 2)) : X("", !0),
        (E(!0), T(re, null, Ee(l.days, (c) => (E(), Ue(i, {
          key: c.id,
          day: c
        }, null, 8, ["day"]))), 128))
      ]))), 128))
    ], 2)
  ], 2);
}
const L$ = /* @__PURE__ */ un(C$, [["render", M$]]), x$ = Se({
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
    const r = te();
    let a = null, s = null;
    const o = Ks({
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
      const $ = o.direction === "left" || o.direction === "right";
      let j = "";
      if (o.placement) {
        const ne = o.placement.split("-");
        ne.length > 1 && (j = ne[1]);
      }
      return ["start", "top", "left"].includes(j) ? $ ? "top" : "left" : ["end", "bottom", "right"].includes(j) ? $ ? "bottom" : "right" : $ ? "middle" : "center";
    });
    function d() {
      s && (s.destroy(), s = null);
    }
    function v() {
      Zn(() => {
        const $ = wa(o.target);
        !$ || !r.value || (s && s.state.elements.reference !== $ && d(), s ? s.update() : s = sv(
          $,
          r.value,
          c.value
        ));
      });
    }
    function p($) {
      Object.assign(o, rc($, "force"));
    }
    function h($, j) {
      clearTimeout(n), $ > 0 ? n = setTimeout(j, $) : j();
    }
    function m($) {
      return !$ || !s ? !1 : wa($) === s.state.elements.reference;
    }
    async function b($ = {}) {
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
    function y($ = {}) {
      $.target != null && (o.isVisible && m($.target) ? f($) : b($));
    }
    function k($) {
      if (!s)
        return;
      const j = s.state.elements.reference;
      if (!r.value || !j)
        return;
      const ne = $.target;
      ca(r.value, ne) || ca(j, ne) || f({ force: !0 });
    }
    function w($) {
      ($.key === "Esc" || $.key === "Escape") && f();
    }
    function P({ detail: $ }) {
      !$.id || $.id !== e.id || b($);
    }
    function N({ detail: $ }) {
      !$.id || $.id !== e.id || f($);
    }
    function x({ detail: $ }) {
      !$.id || $.id !== e.id || y($);
    }
    function S() {
      yn(document, "keydown", w), yn(document, "click", k), yn(document, "show-popover", P), yn(document, "hide-popover", N), yn(document, "toggle-popover", x);
    }
    function M() {
      bn(document, "keydown", w), bn(document, "click", k), bn(document, "show-popover", P), bn(document, "hide-popover", N), bn(document, "toggle-popover", x);
    }
    function R($) {
      t("before-show", $);
    }
    function B($) {
      o.force = !1, t("after-show", $);
    }
    function V($) {
      t("before-hide", $);
    }
    function q($) {
      o.force = !1, d(), t("after-hide", $);
    }
    function ce($) {
      $.stopPropagation();
    }
    function ee() {
      o.isHovered = !0, o.isInteractive && ["hover", "hover-focus"].includes(o.visibility) && b();
    }
    function le() {
      if (o.isHovered = !1, !s)
        return;
      const $ = s.state.elements.reference;
      o.autoHide && !o.isFocused && (!$ || $ !== document.activeElement) && ["hover", "hover-focus"].includes(o.visibility) && f();
    }
    function ge() {
      o.isFocused = !0, o.isInteractive && ["focus", "hover-focus"].includes(o.visibility) && b();
    }
    function De($) {
      ["focus", "hover-focus"].includes(o.visibility) && (!$.relatedTarget || !ca(r.value, $.relatedTarget)) && (o.isFocused = !1, !o.isHovered && o.autoHide && f());
    }
    function G() {
      a != null && (a.disconnect(), a = null);
    }
    return Ce(
      () => r.value,
      ($) => {
        G(), $ && (a = new ResizeObserver(() => {
          s && s.update();
        }), a.observe($));
      }
    ), Ce(() => o.placement, i, {
      immediate: !0
    }), Vn(() => {
      S();
    }), Kr(() => {
      d(), G(), M();
    }), {
      ...Sd(o),
      popoverRef: r,
      alignment: u,
      hide: f,
      setupPopper: v,
      beforeEnter: R,
      afterEnter: B,
      beforeLeave: V,
      afterLeave: q,
      onClick: ce,
      onMouseOver: ee,
      onMouseLeave: le,
      onFocusIn: ge,
      onFocusOut: De
    };
  }
});
function R$(e, t, n, r, a, s) {
  return E(), T("div", {
    class: Ze(["vc-popover-content-wrapper", { "is-interactive": e.isInteractive }]),
    ref: "popoverRef",
    onClick: t[0] || (t[0] = (...o) => e.onClick && e.onClick(...o)),
    onMouseover: t[1] || (t[1] = (...o) => e.onMouseOver && e.onMouseOver(...o)),
    onMouseleave: t[2] || (t[2] = (...o) => e.onMouseLeave && e.onMouseLeave(...o)),
    onFocusin: t[3] || (t[3] = (...o) => e.onFocusIn && e.onFocusIn(...o)),
    onFocusout: t[4] || (t[4] = (...o) => e.onFocusOut && e.onFocusOut(...o))
  }, [
    _e(ou, {
      name: `vc-${e.transition}`,
      appear: "",
      onBeforeEnter: e.beforeEnter,
      onAfterEnter: e.afterEnter,
      onBeforeLeave: e.beforeLeave,
      onAfterLeave: e.afterLeave
    }, {
      default: et(() => [
        e.isVisible ? (E(), T("div", ln({
          key: 0,
          tabindex: "-1",
          class: `vc-popover-content direction-${e.direction}`
        }, e.$attrs), [
          Nt(e.$slots, "default", {
            direction: e.direction,
            alignment: e.alignment,
            data: e.data,
            hide: e.hide
          }, () => [
            zr(fe(e.data), 1)
          ]),
          O("span", {
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
const Ao = /* @__PURE__ */ un(x$, [["render", R$]]), F$ = {
  value: { type: Object, required: !0 }
}, Y$ = ["input"], V$ = "__vc_calendar_nav_context__";
function U$(e, { emit: t }) {
  const n = te(!0), r = te(0), a = te(0), s = 12, o = te(null), { locale: i, masks: l, canMove: c, getDateAddress: u } = Bn();
  function d() {
    setTimeout(() => {
      if (o.value == null)
        return;
      const I = o.value.querySelector(
        ".vc-nav-item:not(:disabled)"
      );
      I && I.focus();
    }, 10);
  }
  function v(I, Z) {
    t("input", { month: I, year: Z }, { position: R.value });
  }
  function p(I) {
    r.value = I, n.value = !0, d();
  }
  function h(I) {
    const { year: Z } = u(/* @__PURE__ */ new Date()), se = I * s, ke = se + s, Oe = [];
    for (let ye = se; ye < ke; ye += 1) {
      let Be = !1;
      for (let je = 1; je < 12 && (Be = c({ month: je, year: ye }, { position: R.value }), !Be); je++)
        ;
      Oe.push({
        year: ye,
        id: ye.toString(),
        label: ye.toString(),
        ariaLabel: ye.toString(),
        isActive: ye === M.value,
        isCurrent: ye === Z,
        isDisabled: !Be,
        click: () => p(ye)
      });
    }
    return Oe;
  }
  function m(I) {
    const { month: Z, year: se } = u(/* @__PURE__ */ new Date());
    return gc().map((ke, Oe) => {
      const ye = Oe + 1;
      return {
        month: ye,
        year: I,
        id: `${I}.${Me(ye, 2)}`,
        label: i.value.formatDate(ke, l.value.navMonths),
        ariaLabel: i.value.formatDate(ke, "MMMM YYYY"),
        isActive: ye === S.value && I === M.value,
        isCurrent: ye === Z && I === se,
        isDisabled: !c(
          { month: ye, year: I },
          { position: R.value }
        ),
        click: () => v(ye, I)
      };
    });
  }
  function b(I) {
    return Math.floor(I / s);
  }
  function f() {
    n.value = !n.value;
  }
  function y() {
    De.value && (n.value && w(), N());
  }
  function k() {
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
  const S = C(() => {
    var I;
    return ((I = e.value) == null ? void 0 : I.month) || 0;
  }), M = C(() => {
    var I;
    return ((I = e.value) == null ? void 0 : I.year) || 0;
  }), R = C(() => {
    var I;
    return ((I = e.value) == null ? void 0 : I.position) || 1;
  }), B = C(() => m(r.value)), V = C(() => h(a.value)), q = C(() => nc(V.value.map((I) => I.year))), ce = C(() => Qn(V.value.map((I) => I.year))), ee = C(() => n.value ? r.value : `${q.value} - ${ce.value}`), le = C(
    () => m(r.value - 1).some((I) => !I.isDisabled)
  ), ge = C(
    () => h(a.value - 1).some((I) => !I.isDisabled)
  ), De = C(
    () => n.value ? le.value : ge.value
  ), G = C(
    () => m(r.value + 1).some((I) => !I.isDisabled)
  ), $ = C(
    () => h(a.value + 1).some((I) => !I.isDisabled)
  ), j = C(
    () => n.value ? G.value : $.value
  ), ne = C(
    () => n.value ? B.value : V.value
  );
  Ce(
    () => M.value,
    () => {
      r.value = M.value;
    }
  ), Ce(
    () => r.value,
    (I) => {
      a.value = b(I);
    }
  ), r.value = M.value, Vn(() => d());
  const Y = {
    navContainer: o,
    title: ee,
    monthMode: n,
    currentMonth: S,
    currentYear: M,
    activeItems: ne,
    prevItemsEnabled: De,
    nextItemsEnabled: j,
    toggleMode: f,
    movePrev: y,
    moveNext: k,
    movePrevYear: w,
    moveNextYear: P,
    movePrevYearGroup: N,
    moveNextYearGroup: x
  };
  return En(V$, Y), Y;
}
const j$ = { class: "vc-nav-header" }, B$ = ["disabled"], H$ = ["disabled"], W$ = { class: "vc-nav-items" }, G$ = ["data-id", "aria-label", "disabled", "onClick", "onKeydown"], K$ = /* @__PURE__ */ Se({
  __name: "CalendarNav",
  props: F$,
  emits: Y$,
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
    } = U$(n, { emit: t });
    return (d, v) => (E(), T("div", {
      class: "vc-nav-container",
      ref_key: "navContainer",
      ref: r
    }, [
      O("div", j$, [
        O("button", {
          type: "button",
          class: "vc-nav-arrow is-left vc-focus",
          disabled: !g(s),
          onClick: v[0] || (v[0] = //@ts-ignore
          (...p) => g(c) && g(c)(...p)),
          onKeydown: v[1] || (v[1] = (p) => g(oa)(p, g(c)))
        }, [
          _e(rr, {
            name: "nav-prev-button",
            move: g(c),
            disabled: !g(s)
          }, {
            default: et(() => [
              _e(lr, {
                name: "ChevronLeft",
                width: "22px",
                height: "24px"
              })
            ]),
            _: 1
          }, 8, ["move", "disabled"])
        ], 40, B$),
        O("button", {
          type: "button",
          class: "vc-nav-title vc-focus",
          onClick: v[2] || (v[2] = //@ts-ignore
          (...p) => g(l) && g(l)(...p)),
          onKeydown: v[3] || (v[3] = (p) => g(oa)(p, g(l)))
        }, fe(g(a)), 33),
        O("button", {
          type: "button",
          class: "vc-nav-arrow is-right vc-focus",
          disabled: !g(o),
          onClick: v[4] || (v[4] = //@ts-ignore
          (...p) => g(u) && g(u)(...p)),
          onKeydown: v[5] || (v[5] = (p) => g(oa)(p, g(u)))
        }, [
          _e(rr, {
            name: "nav-next-button",
            move: g(u),
            disabled: !g(o)
          }, {
            default: et(() => [
              _e(lr, {
                name: "ChevronRight",
                width: "22px",
                height: "24px"
              })
            ]),
            _: 1
          }, 8, ["move", "disabled"])
        ], 40, H$)
      ]),
      O("div", W$, [
        (E(!0), T(re, null, Ee(g(i), (p) => (E(), T("button", {
          key: p.label,
          type: "button",
          "data-id": p.id,
          "aria-label": p.ariaLabel,
          class: Ze(["vc-nav-item vc-focus", [
            p.isActive ? "is-active" : p.isCurrent ? "is-current" : ""
          ]]),
          disabled: p.isDisabled,
          onClick: p.click,
          onKeydown: (h) => g(oa)(h, p.click)
        }, fe(p.label), 43, G$))), 128))
      ])
    ], 512));
  }
}), z$ = {
  __name: "CalendarNavPopover",
  setup(e) {
    const { navPopoverId: t, color: n, displayMode: r, navPopoverRef: a, move: s } = Bn();
    return (o, i) => (E(), Ue(Ao, {
      id: g(t),
      class: Ze(["vc-nav-popover-container", `vc-${g(n)}`, `vc-${g(r)}`]),
      ref_key: "navPopoverRef",
      ref: a
    }, {
      default: et(({ data: l }) => [
        _e(K$, {
          value: l.page,
          onInput: g(s)
        }, null, 8, ["value", "onInput"])
      ]),
      _: 1
    }, 8, ["id", "class"]));
  }
}, q$ = Se({
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
}), Z$ = { class: "vc-day-popover-row" }, X$ = {
  key: 0,
  class: "vc-day-popover-row-indicator"
}, J$ = { class: "vc-day-popover-row-label" };
function Q$(e, t, n, r, a, s) {
  return E(), T("div", Z$, [
    e.indicator ? (E(), T("div", X$, [
      O("span", {
        class: Ze(e.indicator.class)
      }, null, 2)
    ])) : X("", !0),
    O("div", J$, [
      Nt(e.$slots, "default", {}, () => [
        zr(fe(e.attribute.popover ? e.attribute.popover.label : "No content provided"), 1)
      ])
    ])
  ]);
}
const e2 = /* @__PURE__ */ un(q$, [["render", Q$]]), t2 = { class: "vc-day-popover-container" }, n2 = {
  key: 0,
  class: "vc-day-popover-header"
}, r2 = /* @__PURE__ */ Se({
  __name: "CalendarDayPopover",
  setup(e) {
    const { dayPopoverId: t, displayMode: n, color: r, masks: a, locale: s } = Bn();
    function o(l, c) {
      return s.value.formatDate(l, c);
    }
    function i(l) {
      return s.value.formatDate(l.date, a.value.dayPopover);
    }
    return (l, c) => (E(), Ue(Ao, {
      id: g(t),
      class: Ze([`vc-${g(r)}`, `vc-${g(n)}`])
    }, {
      default: et(({ data: { day: u, attributes: d }, hide: v }) => [
        Nt(l.$slots, "default", {
          day: u,
          dayTitle: i(u),
          attributes: d,
          format: o,
          masks: g(a),
          hide: v
        }, () => [
          O("div", t2, [
            g(a).dayPopover ? (E(), T("div", n2, fe(i(u)), 1)) : X("", !0),
            (E(!0), T(re, null, Ee(d, (p) => (E(), Ue(e2, {
              key: p.key,
              attribute: p
            }, null, 8, ["attribute"]))), 128))
          ])
        ])
      ]),
      _: 3
    }, 8, ["id", "class"]));
  }
}), a2 = Se({
  name: "Calendar",
  components: {
    CalendarHeader: Ac,
    CalendarPane: L$,
    CalendarNavPopover: z$,
    CalendarDayPopover: r2
  },
  emits: g$,
  props: h$,
  setup(e, { emit: t, slots: n }) {
    return _$(e, { emit: t, slots: n });
  }
}), s2 = { class: "vc-pane-header-wrapper" };
function o2(e, t, n, r, a, s) {
  const o = An("CalendarHeader"), i = An("CalendarPane"), l = An("CalendarDayPopover"), c = An("CalendarNavPopover");
  return E(), T(re, null, [
    O("div", ln({ "data-helptext": "Press the arrow keys to navigate by day, Home and End to navigate to week ends, PageUp and PageDown to navigate by month, Alt+PageUp and Alt+PageDown to navigate by year" }, e.$attrs, {
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
      onMouseup: t[0] || (t[0] = iu(() => {
      }, ["prevent"])),
      ref: "containerRef"
    }), [
      O("div", {
        class: Ze(["vc-pane-container", { "in-transition": e.inTransition }])
      }, [
        O("div", s2, [
          e.firstPage ? (E(), Ue(o, {
            key: 0,
            page: e.firstPage,
            "is-lg": "",
            "hide-title": ""
          }, null, 8, ["page"])) : X("", !0)
        ]),
        _e(ou, {
          name: `vc-${e.transitionName}`,
          onBeforeEnter: e.onTransitionBeforeEnter,
          onAfterEnter: e.onTransitionAfterEnter
        }, {
          default: et(() => [
            (E(), T("div", {
              key: e.pages[0].id,
              class: "vc-pane-layout",
              style: Pr({
                gridTemplateColumns: `repeat(${e.columns}, 1fr)`
              })
            }, [
              (E(!0), T(re, null, Ee(e.pages, (u) => (E(), Ue(i, {
                key: u.id,
                page: u
              }, null, 8, ["page"]))), 128))
            ], 4))
          ]),
          _: 1
        }, 8, ["name", "onBeforeEnter", "onAfterEnter"]),
        Nt(e.$slots, "footer")
      ], 2)
    ], 16),
    _e(l, null, {
      default: et((u) => [
        Nt(e.$slots, "day-popover", su(Pd(u)))
      ]),
      _: 3
    }),
    _e(c)
  ], 64);
}
const i2 = /* @__PURE__ */ un(a2, [["render", o2]]), l2 = { class: "vc-base-select" }, u2 = ["value"], c2 = ["value", "disabled"], d2 = {
  inheritAttrs: !1
}, Nr = /* @__PURE__ */ Object.assign(d2, {
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
    return (t, n) => (E(), T("div", l2, [
      e.showIcon ? (E(), Ue(lr, {
        key: 0,
        name: "ChevronDown",
        size: e.small ? "16" : "18"
      }, null, 8, ["size"])) : X("", !0),
      O("select", ln(t.$attrs, {
        value: e.modelValue,
        class: ["vc-focus", {
          "vc-has-icon": e.showIcon,
          "vc-align-right": e.alignRight,
          "vc-align-left": e.alignLeft,
          "vc-small": e.small
        }],
        onChange: n[0] || (n[0] = (r) => t.$emit("update:modelValue", r.target.value))
      }), [
        (E(!0), T(re, null, Ee(e.options, (r) => (E(), T("option", {
          key: r.value,
          value: r.value,
          disabled: r.disabled
        }, fe(r.label), 9, c2))), 128))
      ], 16, u2)
    ]));
  }
}), Cc = "__vc_date_picker_context__", f2 = {
  ...Oc,
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
}, v2 = [
  "update:modelValue",
  "drag",
  "dayclick",
  "daykeydown",
  "popover-will-show",
  "popover-did-show",
  "popover-will-hide",
  "popover-did-hide"
];
function p2(e, t) {
  const n = $c(e), { locale: r, masks: a, disabledAttribute: s } = n, { emit: o } = t, i = te(!1), l = te(Ea()), c = te(null), u = te(null), d = te(["", ""]), v = te(null), p = te(null);
  let h, m, b = !0;
  const f = C(() => e.isRange || e.modelModifiers.range === !0), y = C(
    () => f.value && c.value != null ? c.value.start : null
  ), k = C(
    () => f.value && c.value != null ? c.value.end : null
  ), w = C(() => e.mode.toLowerCase() === "date"), P = C(
    () => e.mode.toLowerCase() === "datetime"
  ), N = C(() => e.mode.toLowerCase() === "time"), x = C(() => !!u.value), S = C(() => {
    let A = "date";
    e.modelModifiers.number && (A = "number"), e.modelModifiers.string && (A = "string");
    const K = a.value.modelValue || "iso";
    return Y({ type: A, mask: K });
  }), M = C(
    () => ot(u.value ?? c.value)
  ), R = C(() => N.value ? e.is24hr ? a.value.inputTime24hr : a.value.inputTime : P.value ? e.is24hr ? a.value.inputDateTime24hr : a.value.inputDateTime : a.value.input), B = C(() => /[Hh]/g.test(R.value)), V = C(
    () => /[dD]{1,2}|Do|W{1,4}|M{1,4}|YY(?:YY)?/g.test(R.value)
  ), q = C(() => {
    if (B.value && V.value)
      return "dateTime";
    if (V.value)
      return "date";
    if (B.value)
      return "time";
  }), ce = C(() => {
    var A;
    const K = ((A = v.value) == null ? void 0 : A.$el.previousElementSibling) ?? void 0;
    return jr({}, e.popover, Dn("datePicker.popover"), {
      target: K
    });
  }), ee = C(
    () => Nc({
      ...ce.value,
      id: l.value
    })
  ), le = C(() => f.value ? {
    start: d.value[0],
    end: d.value[1]
  } : d.value[0]), ge = C(() => {
    const A = ["start", "end"].map((K) => ({
      input: Q(K),
      change: oe(K),
      keyup: be,
      ...e.popover && ee.value
    }));
    return f.value ? {
      start: A[0],
      end: A[1]
    } : A[0];
  }), De = C(() => {
    if (!se(c.value))
      return null;
    const A = {
      key: "select-drag",
      ...e.selectAttribute,
      dates: c.value,
      pinPage: !0
    }, { dot: K, bar: ue, highlight: $e, content: qe } = A;
    return !K && !ue && !$e && !qe && (A.highlight = !0), A;
  }), G = C(() => {
    if (!f.value || !se(u.value))
      return null;
    const A = {
      key: "select-drag",
      ...e.dragAttribute,
      dates: u.value
    }, { dot: K, bar: ue, highlight: $e, content: qe } = A;
    return !K && !ue && !$e && !qe && (A.highlight = {
      startEnd: {
        fillMode: "outline"
      }
    }), A;
  }), $ = C(() => {
    const A = Tt(e.attributes) ? [...e.attributes] : [];
    return G.value ? A.unshift(G.value) : De.value && A.unshift(De.value), A;
  }), j = C(() => Y(
    e.rules === "auto" ? ne() : e.rules ?? {}
  ));
  function ne() {
    const A = {
      ms: [0, 999],
      sec: [0, 59],
      min: [0, 59],
      hr: [0, 23]
    }, K = w.value ? 0 : e.timeAccuracy;
    return [0, 1].map((ue) => {
      switch (K) {
        case 0:
          return {
            hours: A.hr[ue],
            minutes: A.min[ue],
            seconds: A.sec[ue],
            milliseconds: A.ms[ue]
          };
        case 1:
          return {
            minutes: A.min[ue],
            seconds: A.sec[ue],
            milliseconds: A.ms[ue]
          };
        case 3:
          return { milliseconds: A.ms[ue] };
        case 4:
          return {};
        default:
          return { seconds: A.sec[ue], milliseconds: A.ms[ue] };
      }
    });
  }
  function Y(A) {
    return Tt(A) ? A.length === 1 ? [A[0], A[0]] : A : [A, A];
  }
  function I(A) {
    return Y(A).map(
      (K, ue) => ({
        ...K,
        rules: j.value[ue]
      })
    );
  }
  function Z(A) {
    return xt(A) ? !isNaN(A) : tr(A) ? !isNaN(A.getTime()) : Bt(A) ? A !== "" : A != null;
  }
  function se(A) {
    return f.value ? sn(A) && Z(A.start) && Z(A.end) : Z(A);
  }
  function ke(A, K) {
    const ue = tr(A), $e = tr(K);
    return !ue && !$e ? !0 : ue !== $e ? !1 : A.getTime() === K.getTime();
  }
  function Oe(A, K) {
    if (f.value) {
      const ue = se(A), $e = se(K);
      return !ue && !$e ? !0 : ue !== $e ? !1 : ke(A.start, K.start) && ke(A.end, K.end);
    }
    return ke(A, K);
  }
  function ye(A) {
    return !se(A) || !s.value ? !1 : s.value.intersectsRange(r.value.range(A));
  }
  function Be(A, K, ue, $e) {
    if (!se(A))
      return null;
    if (f.value) {
      const qe = r.value.toDate(A.start, {
        ...K[0],
        fillDate: y.value ?? void 0,
        patch: ue
      }), Pt = r.value.toDate(A.end, {
        ...K[1],
        fillDate: k.value ?? void 0,
        patch: ue
      });
      return kn({ start: qe, end: Pt }, $e);
    }
    return r.value.toDateOrNull(A, {
      ...K[0],
      fillDate: c.value,
      patch: ue
    });
  }
  function je(A, K) {
    return f.value ? se(A) ? {
      start: r.value.fromDate(A.start, K[0]),
      end: r.value.fromDate(A.end, K[1])
    } : null : r.value.fromDate(A, K[0]);
  }
  function tt(A, K = {}) {
    return clearTimeout(h), new Promise((ue) => {
      const { debounce: $e = 0, ...qe } = K;
      $e > 0 ? h = window.setTimeout(() => {
        ue(D(A, qe));
      }, $e) : ue(D(A, qe));
    });
  }
  function D(A, {
    config: K = S.value,
    patch: ue = "dateTime",
    clearIfEqual: $e = !1,
    formatInput: qe = !0,
    hidePopover: Pt = !1,
    dragging: ft = x.value,
    targetPriority: Wn,
    moveToValue: Dr = !1
  } = {}) {
    const ta = I(K);
    let Et = Be(
      A,
      ta,
      ue,
      Wn
    );
    if (ye(Et)) {
      if (ft)
        return null;
      Et = c.value, Pt = !1;
    } else
      Et == null && e.isRequired ? Et = c.value : (
        // Clear value if same value was passed
        Et != null && Oe(c.value, Et) && $e && (Et = null)
      );
    const Or = ft ? u : c, rs = !Oe(Or.value, Et);
    Or.value = Et, ft || (u.value = null);
    const Xo = je(
      Et,
      S.value
    );
    return rs && (b = !1, o(ft ? "drag" : "update:modelValue", Xo), Zn(() => b = !0)), Pt && !ft && Ct(), qe && _(), Dr && Zn(() => H(Wn ?? "start")), Xo;
  }
  function _() {
    Zn(() => {
      const A = I({
        type: "string",
        mask: R.value
      }), K = je(
        u.value || c.value,
        A
      );
      f.value ? d.value = [K && K.start, K && K.end] : d.value = [K, ""];
    });
  }
  function L(A, K, ue) {
    d.value.splice(K === "start" ? 0 : 1, 1, A);
    const $e = f.value ? {
      start: d.value[0],
      end: d.value[1] || d.value[0]
    } : A, qe = {
      type: "string",
      mask: R.value
    };
    tt($e, {
      ...ue,
      config: qe,
      patch: q.value,
      targetPriority: K,
      moveToValue: !0
    });
  }
  function Q(A) {
    return (K) => {
      e.updateOnInput && L(K.currentTarget.value, A, {
        formatInput: !1,
        hidePopover: !1,
        debounce: e.inputDebounce
      });
    };
  }
  function oe(A) {
    return (K) => {
      L(K.currentTarget.value, A, {
        formatInput: !0,
        hidePopover: !1
      });
    };
  }
  function be(A) {
    A.key === "Escape" && tt(c.value, {
      formatInput: !0,
      hidePopover: !0
    });
  }
  function ot(A) {
    return f.value ? [
      A && A.start ? r.value.getDateParts(A.start) : null,
      A && A.end ? r.value.getDateParts(A.end) : null
    ] : [A ? r.value.getDateParts(A) : null];
  }
  function ze() {
    u.value = null, _();
  }
  function wt(A) {
    o("popover-will-show", A);
  }
  function Yt(A) {
    o("popover-did-show", A);
  }
  function Pe(A) {
    ze(), o("popover-will-hide", A);
  }
  function F(A) {
    o("popover-did-hide", A);
  }
  function W(A) {
    const K = {
      patch: "date",
      formatInput: !0,
      hidePopover: !0
    };
    if (f.value) {
      const ue = !x.value;
      ue ? m = { start: A.startDate, end: A.endDate } : m != null && (m.end = A.date), tt(m, {
        ...K,
        dragging: ue
      });
    } else
      tt(A.date, {
        ...K,
        clearIfEqual: !e.isRequired
      });
  }
  function He(A, K) {
    W(A), o("dayclick", A, K);
  }
  function We(A, K) {
    switch (K.key) {
      case " ":
      case "Enter": {
        W(A), K.preventDefault();
        break;
      }
      case "Escape":
        Ct();
    }
    o("daykeydown", A, K);
  }
  function Vt(A, K) {
    !x.value || m == null || (m.end = A.date, tt(kn(m), {
      patch: "date",
      formatInput: !0
    }));
  }
  function fn(A = {}) {
    ks({
      ...ce.value,
      ...A,
      isInteractive: !0,
      id: l.value
    });
  }
  function Ct(A = {}) {
    La({
      hideDelay: 10,
      force: !0,
      ...ce.value,
      ...A,
      id: l.value
    });
  }
  function St(A) {
    kc({
      ...ce.value,
      ...A,
      isInteractive: !0,
      id: l.value
    });
  }
  function kn(A, K) {
    const { start: ue, end: $e } = A;
    if (ue > $e)
      switch (K) {
        case "start":
          return { start: ue, end: ue };
        case "end":
          return { start: $e, end: $e };
        default:
          return { start: $e, end: ue };
      }
    return { start: ue, end: $e };
  }
  function Hn(A) {
    if (se(c.value)) {
      const K = f.value ? A ? y.value : k.value : c.value;
      return _c(K, "monthly", r.value);
    }
    return null;
  }
  async function ns(A, K = {}) {
    return p.value == null ? !1 : p.value.move(A, K);
  }
  async function ea(A, K = {}) {
    return p.value == null ? !1 : p.value.moveBy(A, K);
  }
  async function H(A, K = {}) {
    if (p.value == null)
      return !1;
    const { firstPage: ue, lastPage: $e, move: qe } = p.value, Pt = A !== "end", ft = Hn(Pt), Wn = Pt ? 1 : -1;
    return !ft || yc(ft, ue, $e) ? !1 : qe(ft, {
      position: Wn,
      ...K
    });
  }
  Ce(
    () => e.isRange,
    (A) => {
      A && console.warn(
        "The `is-range` prop will be deprecated in future releases. Please use the `range` modifier."
      );
    },
    { immediate: !0 }
  ), Ce(
    () => R.value,
    () => _()
  ), Ce(
    () => e.modelValue,
    (A) => {
      b && D(A, {
        formatInput: !0,
        hidePopover: !1
      });
    }
  ), Ce(
    () => j.value,
    () => {
      sn(e.rules) && D(e.modelValue, {
        formatInput: !0,
        hidePopover: !1
      });
    }
  ), Ce(
    () => e.timezone,
    () => {
      D(c.value, { formatInput: !0 });
    }
  );
  const z = Y(S.value);
  c.value = Be(e.modelValue, z, "dateTime"), Vn(() => {
    D(e.modelValue, {
      formatInput: !0,
      hidePopover: !1
    });
  }), Zn(() => i.value = !0);
  const ve = {
    ...n,
    showCalendar: i,
    datePickerPopoverId: l,
    popoverRef: v,
    popoverEvents: ee,
    calendarRef: p,
    isRange: f,
    isTimeMode: N,
    isDateTimeMode: P,
    is24hr: as(e, "is24hr"),
    hideTimeHeader: as(e, "hideTimeHeader"),
    timeAccuracy: as(e, "timeAccuracy"),
    isDragging: x,
    inputValue: le,
    inputEvents: ge,
    dateParts: M,
    attributes: $,
    rules: j,
    move: ns,
    moveBy: ea,
    moveToValue: H,
    updateValue: tt,
    showPopover: fn,
    hidePopover: Ct,
    togglePopover: St,
    onDayClick: He,
    onDayKeydown: We,
    onDayMouseEnter: Vt,
    onPopoverBeforeShow: wt,
    onPopoverAfterShow: Yt,
    onPopoverBeforeHide: Pe,
    onPopoverAfterHide: F
  };
  return En(Cc, ve), ve;
}
function m2() {
  const e = Fe(Cc);
  if (e)
    return e;
  throw new Error(
    "DatePicker context missing. Please verify this component is nested within a valid context provider."
  );
}
const h2 = [
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
], g2 = [
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
function _2(e) {
  const t = m2(), {
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
  function d(V) {
    V = Object.assign(p.value, V);
    let q = null;
    if (r.value) {
      const ce = v.value ? V : s.value[0], ee = v.value ? s.value[1] : V;
      q = { start: ce, end: ee };
    } else
      q = V;
    u(q, {
      patch: "time",
      targetPriority: v.value ? "start" : "end",
      moveToValue: !0
    });
  }
  const v = C(() => e.position === 0), p = C(
    () => s.value[e.position] || { isValid: !1 }
  ), h = C(() => vc(p.value)), m = C(() => !!p.value.isValid), b = C(() => !l.value && m.value), f = C(() => {
    if (!h.value)
      return null;
    let V = n.value.toDate(p.value);
    return p.value.hours === 24 && (V = new Date(V.getTime() - 1)), V;
  }), y = C({
    get() {
      return p.value.hours;
    },
    set(V) {
      d({ hours: V });
    }
  }), k = C({
    get() {
      return p.value.minutes;
    },
    set(V) {
      d({ minutes: V });
    }
  }), w = C({
    get() {
      return p.value.seconds;
    },
    set(V) {
      d({ seconds: V });
    }
  }), P = C({
    get() {
      return p.value.milliseconds;
    },
    set(V) {
      d({ milliseconds: V });
    }
  }), N = C({
    get() {
      return p.value.hours < 12;
    },
    set(V) {
      V = String(V).toLowerCase() == "true";
      let q = y.value;
      V && q >= 12 ? q -= 12 : !V && q < 12 && (q += 12), d({ hours: q });
    }
  }), x = C(
    () => ZO(p.value, o.value[e.position])
  ), S = C(() => h2.filter(
    (V) => x.value.hours.some((q) => q.value === V.value)
  )), M = C(() => g2.filter(
    (V) => x.value.hours.some((q) => q.value === V.value)
  )), R = C(() => i.value ? x.value.hours : N.value ? S.value : M.value), B = C(() => {
    const V = [];
    return nn(S.value) && V.push({ value: !0, label: "AM" }), nn(M.value) && V.push({ value: !1, label: "PM" }), V;
  });
  return {
    ...t,
    showHeader: b,
    timeAccuracy: c,
    parts: p,
    isValid: m,
    date: f,
    hours: y,
    minutes: k,
    seconds: w,
    milliseconds: P,
    options: x,
    hourOptions: R,
    isAM: N,
    isAMOptions: B,
    is24hr: i
  };
}
const b2 = {
  key: 0,
  class: "vc-time-header"
}, y2 = { class: "vc-time-weekday" }, w2 = { class: "vc-time-month" }, E2 = { class: "vc-time-day" }, D2 = { class: "vc-time-year" }, O2 = { class: "vc-time-select-group" }, $2 = /* @__PURE__ */ O("span", { class: "vc-time-colon" }, ":", -1), T2 = /* @__PURE__ */ O("span", { class: "vc-time-colon" }, ":", -1), k2 = /* @__PURE__ */ O("span", { class: "vc-time-decimal" }, ".", -1), N2 = /* @__PURE__ */ Se({
  __name: "TimePicker",
  props: {
    position: null
  },
  setup(e, { expose: t }) {
    const r = _2(e);
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
      is24hr: b,
      showHeader: f,
      timeAccuracy: y
    } = r;
    return (k, w) => (E(), T("div", {
      class: Ze(["vc-time-picker", [{ "vc-invalid": !g(s), "vc-attached": !g(p) }]])
    }, [
      Nt(k.$slots, "time-header", {}, () => [
        g(f) && g(o) ? (E(), T("div", b2, [
          O("span", y2, fe(g(a).formatDate(g(o), "WWW")), 1),
          O("span", w2, fe(g(a).formatDate(g(o), "MMM")), 1),
          O("span", E2, fe(g(a).formatDate(g(o), "D")), 1),
          O("span", D2, fe(g(a).formatDate(g(o), "YYYY")), 1)
        ])) : X("", !0)
      ]),
      O("div", O2, [
        _e(lr, {
          name: "Clock",
          size: "17"
        }),
        _e(Nr, {
          modelValue: g(i),
          "onUpdate:modelValue": w[0] || (w[0] = (P) => Ie(i) ? i.value = P : null),
          modelModifiers: { number: !0 },
          options: g(v),
          "align-right": ""
        }, null, 8, ["modelValue", "options"]),
        g(y) > 1 ? (E(), T(re, { key: 0 }, [
          $2,
          _e(Nr, {
            modelValue: g(l),
            "onUpdate:modelValue": w[1] || (w[1] = (P) => Ie(l) ? l.value = P : null),
            modelModifiers: { number: !0 },
            options: g(d).minutes,
            "align-left": g(y) === 2
          }, null, 8, ["modelValue", "options", "align-left"])
        ], 64)) : X("", !0),
        g(y) > 2 ? (E(), T(re, { key: 1 }, [
          T2,
          _e(Nr, {
            modelValue: g(c),
            "onUpdate:modelValue": w[2] || (w[2] = (P) => Ie(c) ? c.value = P : null),
            modelModifiers: { number: !0 },
            options: g(d).seconds,
            "align-left": g(y) === 3
          }, null, 8, ["modelValue", "options", "align-left"])
        ], 64)) : X("", !0),
        g(y) > 3 ? (E(), T(re, { key: 2 }, [
          k2,
          _e(Nr, {
            modelValue: g(u),
            "onUpdate:modelValue": w[3] || (w[3] = (P) => Ie(u) ? u.value = P : null),
            modelModifiers: { number: !0 },
            options: g(d).milliseconds,
            "align-left": ""
          }, null, 8, ["modelValue", "options"])
        ], 64)) : X("", !0),
        g(b) ? X("", !0) : (E(), Ue(Nr, {
          key: 3,
          modelValue: g(h),
          "onUpdate:modelValue": w[4] || (w[4] = (P) => Ie(h) ? h.value = P : null),
          options: g(m)
        }, null, 8, ["modelValue", "options"]))
      ])
    ], 2));
  }
}), Co = Se({
  name: "DatePicker",
  inheritAttrs: !1,
  emits: v2,
  props: f2,
  setup(e, t) {
    const n = p2(e, t), { slots: r, attrs: a } = t, {
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
      onDayClick: b,
      onDayMouseEnter: f,
      onDayKeydown: y,
      onPopoverBeforeShow: k,
      onPopoverAfterShow: w,
      onPopoverBeforeHide: P,
      onPopoverAfterHide: N
    } = n;
    t.expose(n);
    const x = Ks(rc(n, "calendarRef", "popoverRef")), S = () => (o.value ? [0, 1] : [0]).map((V) => qn(N2, { position: V })), M = () => {
      if (!u.value)
        return null;
      const B = i.value ? { ...r, footer: S } : r;
      return qn(
        i2,
        {
          ...a,
          attributes: v.value,
          ref: p,
          onDayclick: b,
          onDaymouseenter: f,
          onDaykeydown: y
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
        return M();
    };
    return r.default ? () => [
      // Popover trigger
      r.default(x),
      // Popover content
      qn(
        Ao,
        {
          id: d.value,
          placement: "bottom-start",
          class: `vc-date-picker-content vc-${l.value} vc-${c.value}`,
          ref: h,
          "onBefore-show": k,
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
const I2 = { class: "flex flex-col gap-2" }, A2 = { class: "flex items-center gap-2" }, C2 = /* @__PURE__ */ O("label", {
  for: "due",
  class: "p3-b"
}, "結束於指定日期", -1), S2 = ["onClick"], P2 = /* @__PURE__ */ Se({
  __name: "DuePicker",
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, r = C({
      get: () => n.modelValue,
      set: (s) => t("update:modelValue", s)
    }), a = te(!1);
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
    }), (s, o) => (E(), T("div", I2, [
      O("div", A2, [
        Ke(O("input", {
          type: "checkbox",
          "onUpdate:modelValue": o[0] || (o[0] = (i) => Ie(a) ? a.value = i : null),
          id: "due"
        }, null, 512), [
          [zs, g(a)]
        ]),
        C2,
        g(a) ? (E(), Ue(g(Co), {
          key: 0,
          modelValue: g(r),
          "onUpdate:modelValue": o[1] || (o[1] = (i) => Ie(r) ? r.value = i : null),
          mode: "dateTime",
          timezone: "UTC",
          "min-Date": /* @__PURE__ */ new Date(),
          is24hr: ""
        }, {
          default: et(({ togglePopover: i, inputValue: l }) => [
            O("button", {
              class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 transition-all hover:bg-light-3 hover:bg-opacity-50",
              onClick: i
            }, fe(l || "請選定結束日期"), 9, S2)
          ]),
          _: 1
        }, 8, ["modelValue", "min-Date"])) : X("", !0)
      ])
    ]));
  }
}), M2 = { class: "flex w-auto items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-1.5" }, L2 = ["value", "type", "placeholder", "maxLength", "required"], x2 = /* @__PURE__ */ Se({
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
    return (a, s) => (E(), T("div", M2, [
      O("input", {
        value: a.modelValue,
        onInput: r,
        type: a.type,
        class: "p3-b w-full border-none outline-none shadow-none placeholder:text-dark-5",
        placeholder: a.placeholder,
        maxLength: a.maxLength,
        required: a.required
      }, null, 40, L2)
    ]));
  }
});
const wn = /* @__PURE__ */ eo(x2, [["__scopeId", "data-v-661b5eb1"]]);
/*!
  * shared v9.5.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */
const zt = typeof window < "u";
let bt, xn;
if (process.env.NODE_ENV !== "production") {
  const e = zt && window.performance;
  e && e.mark && e.measure && e.clearMarks && // @ts-ignore browser compat
  e.clearMeasures && (bt = (t) => {
    e.mark(t);
  }, xn = (t, n, r) => {
    e.measure(t, n, r), e.clearMarks(n), e.clearMarks(r);
  });
}
const R2 = /\{([0-9a-zA-Z]+)\}/g;
function So(e, ...t) {
  return t.length === 1 && Ae(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(R2, (n, r) => t.hasOwnProperty(r) ? t[r] : "");
}
const Xt = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), F2 = (e, t, n) => Y2({ l: e, k: t, s: n }), Y2 = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Qe = (e) => typeof e == "number" && isFinite(e), V2 = (e) => Pc(e) === "[object Date]", On = (e) => Pc(e) === "[object RegExp]", Ga = (e) => me(e) && Object.keys(e).length === 0, st = Object.assign;
let cl;
const en = () => cl || (cl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function dl(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const U2 = Object.prototype.hasOwnProperty;
function Po(e, t) {
  return U2.call(e, t);
}
const xe = Array.isArray, Ve = (e) => typeof e == "function", J = (e) => typeof e == "string", we = (e) => typeof e == "boolean", Ae = (e) => e !== null && typeof e == "object", Sc = Object.prototype.toString, Pc = (e) => Sc.call(e), me = (e) => {
  if (!Ae(e))
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t.constructor === Object;
}, j2 = (e) => e == null ? "" : xe(e) || me(e) && e.toString === Sc ? JSON.stringify(e, null, 2) : String(e);
function B2(e, t = "") {
  return e.reduce((n, r, a) => a === 0 ? n + r : n + t + r, "");
}
const fl = 2;
function H2(e, t = 0, n = e.length) {
  const r = e.split(/\r?\n/);
  let a = 0;
  const s = [];
  for (let o = 0; o < r.length; o++)
    if (a += r[o].length + 1, a >= t) {
      for (let i = o - fl; i <= o + fl || n > a; i++) {
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
function Mo(e) {
  let t = e;
  return () => ++t;
}
function rt(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const vl = {};
function W2(e) {
  vl[e] || (vl[e] = !0, rt(e));
}
function Lo() {
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
function G2(e, t, n) {
  return { line: e, column: t, offset: n };
}
function Ns(e, t, n) {
  const r = { start: e, end: t };
  return n != null && (r.source = n), r;
}
const K2 = /\{([0-9a-zA-Z]+)\}/g;
function z2(e, ...t) {
  return t.length === 1 && q2(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(K2, (n, r) => t.hasOwnProperty(r) ? t[r] : "");
}
const Mc = Object.assign, pl = (e) => typeof e == "string", q2 = (e) => e !== null && typeof e == "object";
function Lc(e, t = "") {
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
}, Z2 = {
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
  const { domain: r, messages: a, args: s } = n, o = z2((a || Z2)[e] || "", ...s || []), i = new SyntaxError(String(o));
  return i.code = e, t && (i.location = t), i.domain = r, i;
}
function X2(e) {
  throw e;
}
const J2 = /<\/?[\w\s="/.':;#-\/]+>/, Q2 = (e) => J2.test(e), Qt = " ", eT = "\r", ut = `
`, tT = String.fromCharCode(8232), nT = String.fromCharCode(8233);
function rT(e) {
  const t = e;
  let n = 0, r = 1, a = 1, s = 0;
  const o = (x) => t[x] === eT && t[x + 1] === ut, i = (x) => t[x] === ut, l = (x) => t[x] === nT, c = (x) => t[x] === tT, u = (x) => o(x) || i(x) || l(x) || c(x), d = () => n, v = () => r, p = () => a, h = () => s, m = (x) => o(x) || l(x) || c(x) ? ut : t[x], b = () => m(n), f = () => m(n + s);
  function y() {
    return s = 0, u(n) && (r++, a = 0), o(n) && n++, n++, a++, t[n];
  }
  function k() {
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
      y();
    s = 0;
  }
  return {
    index: d,
    line: v,
    column: p,
    peekOffset: h,
    charAt: m,
    currentChar: b,
    currentPeek: f,
    next: y,
    peek: k,
    reset: w,
    resetPeek: P,
    skipToPeek: N
  };
}
const pn = void 0, aT = ".", ml = "'", sT = "tokenizer";
function oT(e, t = {}) {
  const n = t.location !== !1, r = rT(e), a = () => r.index(), s = () => G2(r.line(), r.column(), r.index()), o = s(), i = a(), l = {
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
  function d(D, _, L, ...Q) {
    const oe = c();
    if (_.column += L, _.offset += L, u) {
      const be = n ? Ns(oe.startLoc, _) : null, ot = wr(D, be, {
        domain: sT,
        args: Q
      });
      u(ot);
    }
  }
  function v(D, _, L) {
    D.endLoc = s(), D.currentType = _;
    const Q = { type: _ };
    return n && (Q.loc = Ns(D.startLoc, D.endLoc)), L != null && (Q.value = L), Q;
  }
  const p = (D) => v(
    D,
    14
    /* TokenTypes.EOF */
  );
  function h(D, _) {
    return D.currentChar() === _ ? (D.next(), _) : (d(de.EXPECTED_TOKEN, s(), 0, _), "");
  }
  function m(D) {
    let _ = "";
    for (; D.currentPeek() === Qt || D.currentPeek() === ut; )
      _ += D.currentPeek(), D.peek();
    return _;
  }
  function b(D) {
    const _ = m(D);
    return D.skipToPeek(), _;
  }
  function f(D) {
    if (D === pn)
      return !1;
    const _ = D.charCodeAt(0);
    return _ >= 97 && _ <= 122 || // a-z
    _ >= 65 && _ <= 90 || // A-Z
    _ === 95;
  }
  function y(D) {
    if (D === pn)
      return !1;
    const _ = D.charCodeAt(0);
    return _ >= 48 && _ <= 57;
  }
  function k(D, _) {
    const { currentType: L } = _;
    if (L !== 2)
      return !1;
    m(D);
    const Q = f(D.currentPeek());
    return D.resetPeek(), Q;
  }
  function w(D, _) {
    const { currentType: L } = _;
    if (L !== 2)
      return !1;
    m(D);
    const Q = D.currentPeek() === "-" ? D.peek() : D.currentPeek(), oe = y(Q);
    return D.resetPeek(), oe;
  }
  function P(D, _) {
    const { currentType: L } = _;
    if (L !== 2)
      return !1;
    m(D);
    const Q = D.currentPeek() === ml;
    return D.resetPeek(), Q;
  }
  function N(D, _) {
    const { currentType: L } = _;
    if (L !== 8)
      return !1;
    m(D);
    const Q = D.currentPeek() === ".";
    return D.resetPeek(), Q;
  }
  function x(D, _) {
    const { currentType: L } = _;
    if (L !== 9)
      return !1;
    m(D);
    const Q = f(D.currentPeek());
    return D.resetPeek(), Q;
  }
  function S(D, _) {
    const { currentType: L } = _;
    if (!(L === 8 || L === 12))
      return !1;
    m(D);
    const Q = D.currentPeek() === ":";
    return D.resetPeek(), Q;
  }
  function M(D, _) {
    const { currentType: L } = _;
    if (L !== 10)
      return !1;
    const Q = () => {
      const be = D.currentPeek();
      return be === "{" ? f(D.peek()) : be === "@" || be === "%" || be === "|" || be === ":" || be === "." || be === Qt || !be ? !1 : be === ut ? (D.peek(), Q()) : f(be);
    }, oe = Q();
    return D.resetPeek(), oe;
  }
  function R(D) {
    m(D);
    const _ = D.currentPeek() === "|";
    return D.resetPeek(), _;
  }
  function B(D) {
    const _ = m(D), L = D.currentPeek() === "%" && D.peek() === "{";
    return D.resetPeek(), {
      isModulo: L,
      hasSpace: _.length > 0
    };
  }
  function V(D, _ = !0) {
    const L = (oe = !1, be = "", ot = !1) => {
      const ze = D.currentPeek();
      return ze === "{" ? be === "%" ? !1 : oe : ze === "@" || !ze ? be === "%" ? !0 : oe : ze === "%" ? (D.peek(), L(oe, "%", !0)) : ze === "|" ? be === "%" || ot ? !0 : !(be === Qt || be === ut) : ze === Qt ? (D.peek(), L(!0, Qt, ot)) : ze === ut ? (D.peek(), L(!0, ut, ot)) : !0;
    }, Q = L();
    return _ && D.resetPeek(), Q;
  }
  function q(D, _) {
    const L = D.currentChar();
    return L === pn ? pn : _(L) ? (D.next(), L) : null;
  }
  function ce(D) {
    return q(D, (L) => {
      const Q = L.charCodeAt(0);
      return Q >= 97 && Q <= 122 || // a-z
      Q >= 65 && Q <= 90 || // A-Z
      Q >= 48 && Q <= 57 || // 0-9
      Q === 95 || // _
      Q === 36;
    });
  }
  function ee(D) {
    return q(D, (L) => {
      const Q = L.charCodeAt(0);
      return Q >= 48 && Q <= 57;
    });
  }
  function le(D) {
    return q(D, (L) => {
      const Q = L.charCodeAt(0);
      return Q >= 48 && Q <= 57 || // 0-9
      Q >= 65 && Q <= 70 || // A-F
      Q >= 97 && Q <= 102;
    });
  }
  function ge(D) {
    let _ = "", L = "";
    for (; _ = ee(D); )
      L += _;
    return L;
  }
  function De(D) {
    b(D);
    const _ = D.currentChar();
    return _ !== "%" && d(de.EXPECTED_TOKEN, s(), 0, _), D.next(), "%";
  }
  function G(D) {
    let _ = "";
    for (; ; ) {
      const L = D.currentChar();
      if (L === "{" || L === "}" || L === "@" || L === "|" || !L)
        break;
      if (L === "%")
        if (V(D))
          _ += L, D.next();
        else
          break;
      else if (L === Qt || L === ut)
        if (V(D))
          _ += L, D.next();
        else {
          if (R(D))
            break;
          _ += L, D.next();
        }
      else
        _ += L, D.next();
    }
    return _;
  }
  function $(D) {
    b(D);
    let _ = "", L = "";
    for (; _ = ce(D); )
      L += _;
    return D.currentChar() === pn && d(de.UNTERMINATED_CLOSING_BRACE, s(), 0), L;
  }
  function j(D) {
    b(D);
    let _ = "";
    return D.currentChar() === "-" ? (D.next(), _ += `-${ge(D)}`) : _ += ge(D), D.currentChar() === pn && d(de.UNTERMINATED_CLOSING_BRACE, s(), 0), _;
  }
  function ne(D) {
    b(D), h(D, "'");
    let _ = "", L = "";
    const Q = (be) => be !== ml && be !== ut;
    for (; _ = q(D, Q); )
      _ === "\\" ? L += Y(D) : L += _;
    const oe = D.currentChar();
    return oe === ut || oe === pn ? (d(de.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, s(), 0), oe === ut && (D.next(), h(D, "'")), L) : (h(D, "'"), L);
  }
  function Y(D) {
    const _ = D.currentChar();
    switch (_) {
      case "\\":
      case "'":
        return D.next(), `\\${_}`;
      case "u":
        return I(D, _, 4);
      case "U":
        return I(D, _, 6);
      default:
        return d(de.UNKNOWN_ESCAPE_SEQUENCE, s(), 0, _), "";
    }
  }
  function I(D, _, L) {
    h(D, _);
    let Q = "";
    for (let oe = 0; oe < L; oe++) {
      const be = le(D);
      if (!be) {
        d(de.INVALID_UNICODE_ESCAPE_SEQUENCE, s(), 0, `\\${_}${Q}${D.currentChar()}`);
        break;
      }
      Q += be;
    }
    return `\\${_}${Q}`;
  }
  function Z(D) {
    b(D);
    let _ = "", L = "";
    const Q = (oe) => oe !== "{" && oe !== "}" && oe !== Qt && oe !== ut;
    for (; _ = q(D, Q); )
      L += _;
    return L;
  }
  function se(D) {
    let _ = "", L = "";
    for (; _ = ce(D); )
      L += _;
    return L;
  }
  function ke(D) {
    const _ = (L = !1, Q) => {
      const oe = D.currentChar();
      return oe === "{" || oe === "%" || oe === "@" || oe === "|" || oe === "(" || oe === ")" || !oe || oe === Qt ? Q : oe === ut || oe === aT ? (Q += oe, D.next(), _(L, Q)) : (Q += oe, D.next(), _(!0, Q));
    };
    return _(!1, "");
  }
  function Oe(D) {
    b(D);
    const _ = h(
      D,
      "|"
      /* TokenChars.Pipe */
    );
    return b(D), _;
  }
  function ye(D, _) {
    let L = null;
    switch (D.currentChar()) {
      case "{":
        return _.braceNest >= 1 && d(de.NOT_ALLOW_NEST_PLACEHOLDER, s(), 0), D.next(), L = v(
          _,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), b(D), _.braceNest++, L;
      case "}":
        return _.braceNest > 0 && _.currentType === 2 && d(de.EMPTY_PLACEHOLDER, s(), 0), D.next(), L = v(
          _,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), _.braceNest--, _.braceNest > 0 && b(D), _.inLinked && _.braceNest === 0 && (_.inLinked = !1), L;
      case "@":
        return _.braceNest > 0 && d(de.UNTERMINATED_CLOSING_BRACE, s(), 0), L = Be(D, _) || p(_), _.braceNest = 0, L;
      default:
        let oe = !0, be = !0, ot = !0;
        if (R(D))
          return _.braceNest > 0 && d(de.UNTERMINATED_CLOSING_BRACE, s(), 0), L = v(_, 1, Oe(D)), _.braceNest = 0, _.inLinked = !1, L;
        if (_.braceNest > 0 && (_.currentType === 5 || _.currentType === 6 || _.currentType === 7))
          return d(de.UNTERMINATED_CLOSING_BRACE, s(), 0), _.braceNest = 0, je(D, _);
        if (oe = k(D, _))
          return L = v(_, 5, $(D)), b(D), L;
        if (be = w(D, _))
          return L = v(_, 6, j(D)), b(D), L;
        if (ot = P(D, _))
          return L = v(_, 7, ne(D)), b(D), L;
        if (!oe && !be && !ot)
          return L = v(_, 13, Z(D)), d(de.INVALID_TOKEN_IN_PLACEHOLDER, s(), 0, L.value), b(D), L;
        break;
    }
    return L;
  }
  function Be(D, _) {
    const { currentType: L } = _;
    let Q = null;
    const oe = D.currentChar();
    switch ((L === 8 || L === 9 || L === 12 || L === 10) && (oe === ut || oe === Qt) && d(de.INVALID_LINKED_FORMAT, s(), 0), oe) {
      case "@":
        return D.next(), Q = v(
          _,
          8,
          "@"
          /* TokenChars.LinkedAlias */
        ), _.inLinked = !0, Q;
      case ".":
        return b(D), D.next(), v(
          _,
          9,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return b(D), D.next(), v(
          _,
          10,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return R(D) ? (Q = v(_, 1, Oe(D)), _.braceNest = 0, _.inLinked = !1, Q) : N(D, _) || S(D, _) ? (b(D), Be(D, _)) : x(D, _) ? (b(D), v(_, 12, se(D))) : M(D, _) ? (b(D), oe === "{" ? ye(D, _) || Q : v(_, 11, ke(D))) : (L === 8 && d(de.INVALID_LINKED_FORMAT, s(), 0), _.braceNest = 0, _.inLinked = !1, je(D, _));
    }
  }
  function je(D, _) {
    let L = {
      type: 14
      /* TokenTypes.EOF */
    };
    if (_.braceNest > 0)
      return ye(D, _) || p(_);
    if (_.inLinked)
      return Be(D, _) || p(_);
    switch (D.currentChar()) {
      case "{":
        return ye(D, _) || p(_);
      case "}":
        return d(de.UNBALANCED_CLOSING_BRACE, s(), 0), D.next(), v(
          _,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return Be(D, _) || p(_);
      default:
        if (R(D))
          return L = v(_, 1, Oe(D)), _.braceNest = 0, _.inLinked = !1, L;
        const { isModulo: oe, hasSpace: be } = B(D);
        if (oe)
          return be ? v(_, 0, G(D)) : v(_, 4, De(D));
        if (V(D))
          return v(_, 0, G(D));
        break;
    }
    return L;
  }
  function tt() {
    const { currentType: D, offset: _, startLoc: L, endLoc: Q } = l;
    return l.lastType = D, l.lastOffset = _, l.lastStartLoc = L, l.lastEndLoc = Q, l.offset = a(), l.startLoc = s(), r.currentChar() === pn ? v(
      l,
      14
      /* TokenTypes.EOF */
    ) : je(r, l);
  }
  return {
    nextToken: tt,
    currentOffset: a,
    currentPosition: s,
    context: c
  };
}
const iT = "parser", lT = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function uT(e, t, n) {
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
function cT(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function r(f, y, k, w, ...P) {
    const N = f.currentPosition();
    if (N.offset += w, N.column += w, n) {
      const x = t ? Ns(k, N) : null, S = wr(y, x, {
        domain: iT,
        args: P
      });
      n(S);
    }
  }
  function a(f, y, k) {
    const w = { type: f };
    return t && (w.start = y, w.end = y, w.loc = { start: k, end: k }), w;
  }
  function s(f, y, k, w) {
    w && (f.type = w), t && (f.end = y, f.loc && (f.loc.end = k));
  }
  function o(f, y) {
    const k = f.context(), w = a(3, k.offset, k.startLoc);
    return w.value = y, s(w, f.currentOffset(), f.currentPosition()), w;
  }
  function i(f, y) {
    const k = f.context(), { lastOffset: w, lastStartLoc: P } = k, N = a(5, w, P);
    return N.index = parseInt(y, 10), f.nextToken(), s(N, f.currentOffset(), f.currentPosition()), N;
  }
  function l(f, y) {
    const k = f.context(), { lastOffset: w, lastStartLoc: P } = k, N = a(4, w, P);
    return N.key = y, f.nextToken(), s(N, f.currentOffset(), f.currentPosition()), N;
  }
  function c(f, y) {
    const k = f.context(), { lastOffset: w, lastStartLoc: P } = k, N = a(9, w, P);
    return N.value = y.replace(lT, uT), f.nextToken(), s(N, f.currentOffset(), f.currentPosition()), N;
  }
  function u(f) {
    const y = f.nextToken(), k = f.context(), { lastOffset: w, lastStartLoc: P } = k, N = a(8, w, P);
    return y.type !== 12 ? (r(f, de.UNEXPECTED_EMPTY_LINKED_MODIFIER, k.lastStartLoc, 0), N.value = "", s(N, w, P), {
      nextConsumeToken: y,
      node: N
    }) : (y.value == null && r(f, de.UNEXPECTED_LEXICAL_ANALYSIS, k.lastStartLoc, 0, Ut(y)), N.value = y.value || "", s(N, f.currentOffset(), f.currentPosition()), {
      node: N
    });
  }
  function d(f, y) {
    const k = f.context(), w = a(7, k.offset, k.startLoc);
    return w.value = y, s(w, f.currentOffset(), f.currentPosition()), w;
  }
  function v(f) {
    const y = f.context(), k = a(6, y.offset, y.startLoc);
    let w = f.nextToken();
    if (w.type === 9) {
      const P = u(f);
      k.modifier = P.node, w = P.nextConsumeToken || f.nextToken();
    }
    switch (w.type !== 10 && r(f, de.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Ut(w)), w = f.nextToken(), w.type === 2 && (w = f.nextToken()), w.type) {
      case 11:
        w.value == null && r(f, de.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Ut(w)), k.key = d(f, w.value || "");
        break;
      case 5:
        w.value == null && r(f, de.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Ut(w)), k.key = l(f, w.value || "");
        break;
      case 6:
        w.value == null && r(f, de.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Ut(w)), k.key = i(f, w.value || "");
        break;
      case 7:
        w.value == null && r(f, de.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Ut(w)), k.key = c(f, w.value || "");
        break;
      default:
        r(f, de.UNEXPECTED_EMPTY_LINKED_KEY, y.lastStartLoc, 0);
        const P = f.context(), N = a(7, P.offset, P.startLoc);
        return N.value = "", s(N, P.offset, P.startLoc), k.key = N, s(k, P.offset, P.startLoc), {
          nextConsumeToken: w,
          node: k
        };
    }
    return s(k, f.currentOffset(), f.currentPosition()), {
      node: k
    };
  }
  function p(f) {
    const y = f.context(), k = y.currentType === 1 ? f.currentOffset() : y.offset, w = y.currentType === 1 ? y.endLoc : y.startLoc, P = a(2, k, w);
    P.items = [];
    let N = null;
    do {
      const M = N || f.nextToken();
      switch (N = null, M.type) {
        case 0:
          M.value == null && r(f, de.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Ut(M)), P.items.push(o(f, M.value || ""));
          break;
        case 6:
          M.value == null && r(f, de.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Ut(M)), P.items.push(i(f, M.value || ""));
          break;
        case 5:
          M.value == null && r(f, de.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Ut(M)), P.items.push(l(f, M.value || ""));
          break;
        case 7:
          M.value == null && r(f, de.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Ut(M)), P.items.push(c(f, M.value || ""));
          break;
        case 8:
          const R = v(f);
          P.items.push(R.node), N = R.nextConsumeToken || null;
          break;
      }
    } while (y.currentType !== 14 && y.currentType !== 1);
    const x = y.currentType === 1 ? y.lastOffset : f.currentOffset(), S = y.currentType === 1 ? y.lastEndLoc : f.currentPosition();
    return s(P, x, S), P;
  }
  function h(f, y, k, w) {
    const P = f.context();
    let N = w.items.length === 0;
    const x = a(1, y, k);
    x.cases = [], x.cases.push(w);
    do {
      const S = p(f);
      N || (N = S.items.length === 0), x.cases.push(S);
    } while (P.currentType !== 14);
    return N && r(f, de.MUST_HAVE_MESSAGES_IN_PLURAL, k, 0), s(x, f.currentOffset(), f.currentPosition()), x;
  }
  function m(f) {
    const y = f.context(), { offset: k, startLoc: w } = y, P = p(f);
    return y.currentType === 14 ? P : h(f, k, w, P);
  }
  function b(f) {
    const y = oT(f, Mc({}, e)), k = y.context(), w = a(0, k.offset, k.startLoc);
    return t && w.loc && (w.loc.source = f), w.body = m(y), e.onCacheKey && (w.cacheKey = e.onCacheKey(f)), k.currentType !== 14 && r(y, de.UNEXPECTED_LEXICAL_ANALYSIS, k.lastStartLoc, 0, f[k.offset] || ""), s(w, y.currentOffset(), y.currentPosition()), w;
  }
  return { parse: b };
}
function Ut(e) {
  if (e.type === 14)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function dT(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (s) => (n.helpers.add(s), s) };
}
function hl(e, t) {
  for (let n = 0; n < e.length; n++)
    xo(e[n], t);
}
function xo(e, t) {
  switch (e.type) {
    case 1:
      hl(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      hl(e.items, t);
      break;
    case 6:
      xo(e.key, t), t.helper(
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
function fT(e, t = {}) {
  const n = dT(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && xo(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function vT(e) {
  const t = e.body;
  return t.type === 2 ? gl(t) : t.cases.forEach((n) => gl(n)), e;
}
function gl(e) {
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
      e.static = Lc(t);
      for (let n = 0; n < e.items.length; n++) {
        const r = e.items[n];
        (r.type === 3 || r.type === 9) && delete r.value;
      }
    }
  }
}
const pT = "minifier";
function zn(e) {
  switch (e.t = e.type, e.type) {
    case 0:
      const t = e;
      zn(t.body), t.b = t.body, delete t.body;
      break;
    case 1:
      const n = e, r = n.cases;
      for (let u = 0; u < r.length; u++)
        zn(r[u]);
      n.c = r, delete n.cases;
      break;
    case 2:
      const a = e, s = a.items;
      for (let u = 0; u < s.length; u++)
        zn(s[u]);
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
      zn(i.key), i.k = i.key, delete i.key, i.modifier && (zn(i.modifier), i.m = i.modifier, delete i.modifier);
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
        domain: pT,
        args: [e.type]
      });
  }
  delete e.type;
}
const mT = "parser";
function hT(e, t) {
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
  function c(b, f) {
    i.code += b;
  }
  function u(b, f = !0) {
    const y = f ? a : "";
    c(s ? y + "  ".repeat(b) : y);
  }
  function d(b = !0) {
    const f = ++i.indentLevel;
    b && u(f);
  }
  function v(b = !0) {
    const f = --i.indentLevel;
    b && u(f);
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
    helper: (b) => `_${b}`,
    needIndent: () => i.needIndent
  };
}
function gT(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), cr(e, t.key), t.modifier ? (e.push(", "), cr(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function _T(e, t) {
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
function bT(e, t) {
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
function yT(e, t) {
  t.body ? cr(e, t.body) : e.push("null");
}
function cr(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      yT(e, t);
      break;
    case 1:
      bT(e, t);
      break;
    case 2:
      _T(e, t);
      break;
    case 6:
      gT(e, t);
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
        domain: mT,
        args: [t.type]
      });
  }
}
const wT = (e, t = {}) => {
  const n = pl(t.mode) ? t.mode : "normal", r = pl(t.filename) ? t.filename : "message.intl", a = !!t.sourceMap, s = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, o = t.needIndent ? t.needIndent : n !== "arrow", i = e.helpers || [], l = hT(e, {
    mode: n,
    filename: r,
    sourceMap: a,
    breakLineCode: s,
    needIndent: o
  });
  l.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), l.indent(o), i.length > 0 && (l.push(`const { ${Lc(i.map((d) => `${d}: _${d}`), ", ")} } = ctx`), l.newline()), l.push("return "), cr(l, e), l.deindent(o), l.push("}"), delete e.helpers;
  const { code: c, map: u } = l.context();
  return {
    ast: e,
    code: c,
    map: u ? u.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function ET(e, t = {}) {
  const n = Mc({}, t), r = !!n.jit, a = !!n.minify, s = n.optimize == null ? !0 : n.optimize, i = cT(n).parse(e);
  return r ? (s && vT(i), a && zn(i), { ast: i, code: "" }) : (fT(i, n), wT(i, n));
}
/*!
  * core-base v9.5.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */
function DT() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (en().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (en().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (en().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
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
const OT = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function $T(e) {
  return OT.test(e);
}
function TT(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function kT(e) {
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
function NT(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : $T(t) ? TT(t) : "*" + t;
}
function IT(e) {
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
      if (a = 0, o === void 0 || (o = NT(o), o === !1))
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
      if (l = kT(s), d = Tn[r], c = d[l] || d.l || 8, c === 8 || (r = c[0], c[1] !== void 0 && (u = v[c[1]], u && (i = s, u() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const _l = /* @__PURE__ */ new Map();
function AT(e, t) {
  return Ae(e) ? e[t] : null;
}
function CT(e, t) {
  if (!Ae(e))
    return null;
  let n = _l.get(t);
  if (n || (n = IT(t), n && _l.set(t, n)), !n)
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
const ST = (e) => e, PT = (e) => "", MT = "text", LT = (e) => e.length === 0 ? "" : B2(e), xT = j2;
function bl(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function RT(e) {
  const t = Qe(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Qe(e.named.count) || Qe(e.named.n)) ? Qe(e.named.count) ? e.named.count : Qe(e.named.n) ? e.named.n : t : t;
}
function FT(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function YT(e = {}) {
  const t = e.locale, n = RT(e), r = Ae(e.pluralRules) && J(t) && Ve(e.pluralRules[t]) ? e.pluralRules[t] : bl, a = Ae(e.pluralRules) && J(t) && Ve(e.pluralRules[t]) ? bl : void 0, s = (f) => f[r(n, f.length, a)], o = e.list || [], i = (f) => o[f], l = e.named || {};
  Qe(e.pluralIndex) && FT(n, l);
  const c = (f) => l[f];
  function u(f) {
    const y = Ve(e.messages) ? e.messages(f) : Ae(e.messages) ? e.messages[f] : !1;
    return y || (e.parent ? e.parent.message(f) : PT);
  }
  const d = (f) => e.modifiers ? e.modifiers[f] : ST, v = me(e.processor) && Ve(e.processor.normalize) ? e.processor.normalize : LT, p = me(e.processor) && Ve(e.processor.interpolate) ? e.processor.interpolate : xT, h = me(e.processor) && J(e.processor.type) ? e.processor.type : MT, b = {
    list: i,
    named: c,
    plural: s,
    linked: (f, ...y) => {
      const [k, w] = y;
      let P = "text", N = "";
      y.length === 1 ? Ae(k) ? (N = k.modifier || N, P = k.type || P) : J(k) && (N = k || N) : y.length === 2 && (J(k) && (N = k || N), J(w) && (P = w || P));
      const x = u(f)(b), S = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        P === "vnode" && xe(x) && N ? x[0] : x
      );
      return N ? d(N)(S, P) : S;
    },
    message: u,
    type: h,
    interpolate: p,
    normalize: v,
    values: st({}, o, l)
  };
  return b;
}
let Br = null;
function VT(e) {
  Br = e;
}
function UT(e, t, n) {
  Br && Br.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: n
  });
}
const jT = /* @__PURE__ */ BT(
  "function:translate"
  /* IntlifyDevToolsHooks.FunctionTranslate */
);
function BT(e) {
  return (t) => Br && Br.emit(e, t);
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
}, HT = {
  [ct.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
  [ct.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
  [ct.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
  [ct.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
  [ct.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
  [ct.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale.",
  [ct.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: "This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future."
};
function Rn(e, ...t) {
  return So(HT[e], ...t);
}
function Ro(e, t) {
  return t.locale != null ? yl(t.locale) : yl(e.locale);
}
let us;
function yl(e) {
  return J(e) ? e : us != null && e.resolvedOnce ? us : us = e();
}
function WT(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...xe(t) ? t : Ae(t) ? Object.keys(t) : J(t) ? [t] : [n]
  ])];
}
function xc(e, t, n) {
  const r = J(n) ? n : dr, a = e;
  a.__localeChainCache || (a.__localeChainCache = /* @__PURE__ */ new Map());
  let s = a.__localeChainCache.get(r);
  if (!s) {
    s = [];
    let o = [n];
    for (; xe(o); )
      o = wl(s, o, t);
    const i = xe(t) || !me(t) ? t : t.default ? t.default : null;
    o = J(i) ? [i] : i, xe(o) && wl(s, o, !1), a.__localeChainCache.set(r, s);
  }
  return s;
}
function wl(e, t, n) {
  let r = !0;
  for (let a = 0; a < t.length && we(r); a++) {
    const s = t[a];
    J(s) && (r = GT(e, t[a], n));
  }
  return r;
}
function GT(e, t, n) {
  let r;
  const a = t.split("-");
  do {
    const s = a.join("-");
    r = KT(e, s, n), a.splice(-1, 1);
  } while (a.length && r === !0);
  return r;
}
function KT(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== "!";
    const a = t.replace(/!/g, "");
    e.push(a), (xe(n) || me(n)) && n[a] && (r = n[a]);
  }
  return r;
}
const zT = "9.5.0", Ka = -1, dr = "en-US", xa = "", El = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function qT() {
  return {
    upper: (e, t) => t === "text" && J(e) ? e.toUpperCase() : t === "vnode" && Ae(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && J(e) ? e.toLowerCase() : t === "vnode" && Ae(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && J(e) ? El(e) : t === "vnode" && Ae(e) && "__v_isVNode" in e ? El(e.children) : e
  };
}
let Rc;
function Dl(e) {
  Rc = e;
}
let Fc;
function ZT(e) {
  Fc = e;
}
let Yc;
function XT(e) {
  Yc = e;
}
let Vc = null;
const Ol = (e) => {
  Vc = e;
}, JT = () => Vc;
let Uc = null;
const $l = (e) => {
  Uc = e;
}, QT = () => Uc;
let Tl = 0;
function ek(e = {}) {
  const t = Ve(e.onWarn) ? e.onWarn : rt, n = J(e.version) ? e.version : zT, r = J(e.locale) || Ve(e.locale) ? e.locale : dr, a = Ve(r) ? dr : r, s = xe(e.fallbackLocale) || me(e.fallbackLocale) || J(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : a, o = me(e.messages) ? e.messages : { [a]: {} }, i = me(e.datetimeFormats) ? e.datetimeFormats : { [a]: {} }, l = me(e.numberFormats) ? e.numberFormats : { [a]: {} }, c = st({}, e.modifiers || {}, qT()), u = e.pluralRules || {}, d = Ve(e.missing) ? e.missing : null, v = we(e.missingWarn) || On(e.missingWarn) ? e.missingWarn : !0, p = we(e.fallbackWarn) || On(e.fallbackWarn) ? e.fallbackWarn : !0, h = !!e.fallbackFormat, m = !!e.unresolving, b = Ve(e.postTranslation) ? e.postTranslation : null, f = me(e.processor) ? e.processor : null, y = we(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, k = !!e.escapeParameter, w = Ve(e.messageCompiler) ? e.messageCompiler : Rc;
  process.env.NODE_ENV !== "production" && Ve(e.messageCompiler) && W2(Rn(ct.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
  const P = Ve(e.messageResolver) ? e.messageResolver : Fc || AT, N = Ve(e.localeFallbacker) ? e.localeFallbacker : Yc || WT, x = Ae(e.fallbackContext) ? e.fallbackContext : void 0, S = e, M = Ae(S.__datetimeFormatters) ? S.__datetimeFormatters : /* @__PURE__ */ new Map(), R = Ae(S.__numberFormatters) ? S.__numberFormatters : /* @__PURE__ */ new Map(), B = Ae(S.__meta) ? S.__meta : {};
  Tl++;
  const V = {
    version: n,
    cid: Tl,
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
    postTranslation: b,
    processor: f,
    warnHtmlMessage: y,
    escapeParameter: k,
    messageCompiler: w,
    messageResolver: P,
    localeFallbacker: N,
    fallbackContext: x,
    onWarn: t,
    __meta: B
  };
  return V.datetimeFormats = i, V.numberFormats = l, V.__datetimeFormatters = M, V.__numberFormatters = R, process.env.NODE_ENV !== "production" && (V.__v_emitter = S.__v_emitter != null ? S.__v_emitter : void 0), (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && UT(V, n, B), V;
}
function za(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function jc(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function Fo(e, t, n, r, a) {
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
    return process.env.NODE_ENV !== "production" && jc(r, t) && o(Rn(ct.NOT_FOUND_KEY, { key: t, locale: n })), t;
}
function Ir(e, t, n) {
  const r = e;
  r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function cs(e) {
  return (n) => tk(n, e);
}
function tk(e, t) {
  const n = t.b || t.body;
  if ((n.t || n.type) === 1) {
    const r = n, a = r.c || r.cases;
    return e.plural(a.reduce((s, o) => [
      ...s,
      kl(e, o)
    ], []));
  } else
    return kl(e, n);
}
function kl(e, t) {
  const n = t.s || t.static;
  if (n)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const r = (t.i || t.items).reduce((a, s) => [...a, Is(e, s)], []);
    return e.normalize(r);
  }
}
function Is(e, t) {
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
      return e.linked(Is(e, i.k || i.key), l ? Is(e, l) : void 0, e.type);
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
const Bc = de.__EXTEND_POINT__, ia = Mo(Bc), Ot = {
  INVALID_ARGUMENT: Bc,
  INVALID_DATE_ARGUMENT: ia(),
  INVALID_ISO_DATE_ARGUMENT: ia(),
  NOT_SUPPORT_NON_STRING_MESSAGE: ia(),
  __EXTEND_POINT__: ia()
  // 22
};
function Sn(e) {
  return wr(e, null, process.env.NODE_ENV !== "production" ? { messages: nk } : void 0);
}
const nk = {
  [Ot.INVALID_ARGUMENT]: "Invalid arguments",
  [Ot.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [Ot.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
  [Ot.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message"
}, rk = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function Hc(e, t) {
  t && Q2(e) && rt(So(rk, { source: e }));
}
const Wc = (e) => e;
let er = /* @__PURE__ */ Object.create(null);
const Fn = (e) => Ae(e) && (e.t === 0 || e.type === 0) && ("b" in e || "body" in e);
function Gc(e, t = {}) {
  let n = !1;
  const r = t.onError || X2;
  return t.onError = (a) => {
    n = !0, r(a);
  }, { ...ET(e, t), detectError: n };
}
const ak = (e, t) => {
  if (!J(e))
    throw Sn(Ot.NOT_SUPPORT_NON_STRING_MESSAGE);
  {
    const n = we(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && Hc(e, n);
    const a = (t.onCacheKey || Wc)(e), s = er[a];
    if (s)
      return s;
    const { code: o, detectError: i } = Gc(e, t), l = new Function(`return ${o}`)();
    return i ? l : er[a] = l;
  }
};
function sk(e, t) {
  if (__INTLIFY_JIT_COMPILATION__ && !__INTLIFY_DROP_MESSAGE_COMPILER__ && J(e)) {
    const n = we(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && Hc(e, n);
    const a = (t.onCacheKey || Wc)(e), s = er[a];
    if (s)
      return s;
    const { ast: o, detectError: i } = Gc(e, {
      ...t,
      location: process.env.NODE_ENV !== "production",
      jit: !0
    }), l = cs(o);
    return i ? l : er[a] = l;
  } else {
    if (process.env.NODE_ENV !== "production" && !Fn(e))
      return rt(`the message that is resolve with key '${t.key}' is not supported for jit compilation`), () => e;
    const n = e.cacheKey;
    if (n) {
      const r = er[n];
      return r || (er[n] = cs(e));
    } else
      return cs(e);
  }
}
const Nl = () => "", Lt = (e) => Ve(e);
function Il(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: a, messageCompiler: s, fallbackLocale: o, messages: i } = e, [l, c] = As(...t), u = we(c.missingWarn) ? c.missingWarn : e.missingWarn, d = we(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn, v = we(c.escapeParameter) ? c.escapeParameter : e.escapeParameter, p = !!c.resolvedMessage, h = J(c.default) || we(c.default) ? we(c.default) ? s ? l : () => l : c.default : n ? s ? l : () => l : "", m = n || h !== "", b = Ro(e, c);
  v && ok(c);
  let [f, y, k] = p ? [
    l,
    b,
    i[b] || {}
  ] : Kc(e, l, b, o, d, u), w = f, P = l;
  if (!p && !(J(w) || Fn(w) || Lt(w)) && m && (w = h, P = w), !p && (!(J(w) || Fn(w) || Lt(w)) || !J(y)))
    return a ? Ka : l;
  if (process.env.NODE_ENV !== "production" && J(w) && e.messageCompiler == null)
    return rt(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${l}'.`), l;
  let N = !1;
  const x = () => {
    N = !0;
  }, S = Lt(w) ? w : zc(e, l, y, w, P, x);
  if (N)
    return w;
  const M = ck(e, y, k, c), R = YT(M), B = ik(e, S, R), V = r ? r(B, l) : B;
  if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    const q = {
      timestamp: Date.now(),
      key: J(l) ? l : Lt(w) ? w.key : "",
      locale: y || (Lt(w) ? w.locale : ""),
      format: J(w) ? w : Lt(w) ? w.source : "",
      message: V
    };
    q.meta = st({}, e.__meta, JT() || {}), jT(q);
  }
  return V;
}
function ok(e) {
  xe(e.list) ? e.list = e.list.map((t) => J(t) ? dl(t) : t) : Ae(e.named) && Object.keys(e.named).forEach((t) => {
    J(e.named[t]) && (e.named[t] = dl(e.named[t]));
  });
}
function Kc(e, t, n, r, a, s) {
  const { messages: o, onWarn: i, messageResolver: l, localeFallbacker: c } = e, u = c(e, r, n);
  let d = {}, v, p = null, h = n, m = null;
  const b = "translate";
  for (let f = 0; f < u.length; f++) {
    if (v = m = u[f], process.env.NODE_ENV !== "production" && n !== v && za(a, t) && i(Rn(ct.FALLBACK_TO_TRANSLATE, {
      key: t,
      target: v
    })), process.env.NODE_ENV !== "production" && n !== v) {
      const N = e.__v_emitter;
      N && N.emit("fallback", {
        type: b,
        key: t,
        from: h,
        to: m,
        groupId: `${b}:${t}`
      });
    }
    d = o[v] || {};
    let y = null, k, w;
    if (process.env.NODE_ENV !== "production" && zt && (y = window.performance.now(), k = "intlify-message-resolve-start", w = "intlify-message-resolve-end", bt && bt(k)), (p = l(d, t)) === null && (p = d[t]), process.env.NODE_ENV !== "production" && zt) {
      const N = window.performance.now(), x = e.__v_emitter;
      x && y && p && x.emit("message-resolve", {
        type: "message-resolve",
        key: t,
        message: p,
        time: N - y,
        groupId: `${b}:${t}`
      }), k && w && bt && xn && (bt(w), xn("intlify message resolve", k, w));
    }
    if (J(p) || Fn(p) || Lt(p))
      break;
    const P = Fo(
      e,
      // eslint-disable-line @typescript-eslint/no-explicit-any
      t,
      v,
      s,
      b
    );
    P !== t && (p = P), h = m;
  }
  return [p, v, d];
}
function zc(e, t, n, r, a, s) {
  const { messageCompiler: o, warnHtmlMessage: i } = e;
  if (Lt(r)) {
    const v = r;
    return v.locale = v.locale || n, v.key = v.key || t, v;
  }
  if (o == null) {
    const v = () => r;
    return v.locale = n, v.key = t, v;
  }
  let l = null, c, u;
  process.env.NODE_ENV !== "production" && zt && (l = window.performance.now(), c = "intlify-message-compilation-start", u = "intlify-message-compilation-end", bt && bt(c));
  const d = o(r, lk(e, n, a, r, i, s));
  if (process.env.NODE_ENV !== "production" && zt) {
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
function ik(e, t, n) {
  let r = null, a, s;
  process.env.NODE_ENV !== "production" && zt && (r = window.performance.now(), a = "intlify-message-evaluation-start", s = "intlify-message-evaluation-end", bt && bt(a));
  const o = t(n);
  if (process.env.NODE_ENV !== "production" && zt) {
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
function As(...e) {
  const [t, n, r] = e, a = {};
  if (!J(t) && !Qe(t) && !Lt(t) && !Fn(t))
    throw Sn(Ot.INVALID_ARGUMENT);
  const s = Qe(t) ? String(t) : (Lt(t), t);
  return Qe(n) ? a.plural = n : J(n) ? a.default = n : me(n) && !Ga(n) ? a.named = n : xe(n) && (a.list = n), Qe(r) ? a.plural = r : J(r) ? a.default = r : me(r) && st(a, r), [s, a];
}
function lk(e, t, n, r, a, s) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: a,
    onError: (o) => {
      if (s && s(o), process.env.NODE_ENV !== "production") {
        const i = uk(r), l = `Message compilation error: ${o.message}`, c = o.location && i && H2(i, o.location.start.offset, o.location.end.offset), u = e.__v_emitter;
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
    onCacheKey: (o) => F2(t, n, o)
  };
}
function uk(e) {
  var t;
  if (!J(e)) {
    if ((t = e.loc) != null && t.source)
      return e.loc.source;
  }
}
function ck(e, t, n, r) {
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
        const f = zc(e, p, t, h, p, () => {
          m = !0;
        });
        return m ? Nl : f;
      } else
        return Lt(h) ? h : Nl;
    }
  };
  return e.processor && (v.processor = e.processor), r.list && (v.list = r.list), r.named && (v.named = r.named), Qe(r.plural) && (v.pluralIndex = r.plural), v;
}
const Al = typeof Intl < "u", qc = {
  dateTimeFormat: Al && typeof Intl.DateTimeFormat < "u",
  numberFormat: Al && typeof Intl.NumberFormat < "u"
};
function Cl(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: a, onWarn: s, localeFallbacker: o } = e, { __datetimeFormatters: i } = e;
  if (process.env.NODE_ENV !== "production" && !qc.dateTimeFormat)
    return s(Rn(ct.CANNOT_FORMAT_DATE)), xa;
  const [l, c, u, d] = Cs(...t), v = we(u.missingWarn) ? u.missingWarn : e.missingWarn, p = we(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, h = !!u.part, m = Ro(e, u), b = o(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    a,
    m
  );
  if (!J(l) || l === "")
    return new Intl.DateTimeFormat(m, d).format(c);
  let f = {}, y, k = null, w = m, P = null;
  const N = "datetime format";
  for (let M = 0; M < b.length; M++) {
    if (y = P = b[M], process.env.NODE_ENV !== "production" && m !== y && za(p, l) && s(Rn(ct.FALLBACK_TO_DATE_FORMAT, {
      key: l,
      target: y
    })), process.env.NODE_ENV !== "production" && m !== y) {
      const R = e.__v_emitter;
      R && R.emit("fallback", {
        type: N,
        key: l,
        from: w,
        to: P,
        groupId: `${N}:${l}`
      });
    }
    if (f = n[y] || {}, k = f[l], me(k))
      break;
    Fo(e, l, y, v, N), w = P;
  }
  if (!me(k) || !J(y))
    return r ? Ka : l;
  let x = `${y}__${l}`;
  Ga(d) || (x = `${x}__${JSON.stringify(d)}`);
  let S = i.get(x);
  return S || (S = new Intl.DateTimeFormat(y, st({}, k, d)), i.set(x, S)), h ? S.formatToParts(c) : S.format(c);
}
const Zc = [
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
function Cs(...e) {
  const [t, n, r, a] = e, s = {};
  let o = {}, i;
  if (J(t)) {
    const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l)
      throw Sn(Ot.INVALID_ISO_DATE_ARGUMENT);
    const c = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
    i = new Date(c);
    try {
      i.toISOString();
    } catch {
      throw Sn(Ot.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (V2(t)) {
    if (isNaN(t.getTime()))
      throw Sn(Ot.INVALID_DATE_ARGUMENT);
    i = t;
  } else if (Qe(t))
    i = t;
  else
    throw Sn(Ot.INVALID_ARGUMENT);
  return J(n) ? s.key = n : me(n) && Object.keys(n).forEach((l) => {
    Zc.includes(l) ? o[l] = n[l] : s[l] = n[l];
  }), J(r) ? s.locale = r : me(r) && (o = r), me(a) && (o = a), [s.key || "", i, s, o];
}
function Sl(e, t, n) {
  const r = e;
  for (const a in n) {
    const s = `${t}__${a}`;
    r.__datetimeFormatters.has(s) && r.__datetimeFormatters.delete(s);
  }
}
function Pl(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: a, onWarn: s, localeFallbacker: o } = e, { __numberFormatters: i } = e;
  if (process.env.NODE_ENV !== "production" && !qc.numberFormat)
    return s(Rn(ct.CANNOT_FORMAT_NUMBER)), xa;
  const [l, c, u, d] = Ss(...t), v = we(u.missingWarn) ? u.missingWarn : e.missingWarn, p = we(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, h = !!u.part, m = Ro(e, u), b = o(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    a,
    m
  );
  if (!J(l) || l === "")
    return new Intl.NumberFormat(m, d).format(c);
  let f = {}, y, k = null, w = m, P = null;
  const N = "number format";
  for (let M = 0; M < b.length; M++) {
    if (y = P = b[M], process.env.NODE_ENV !== "production" && m !== y && za(p, l) && s(Rn(ct.FALLBACK_TO_NUMBER_FORMAT, {
      key: l,
      target: y
    })), process.env.NODE_ENV !== "production" && m !== y) {
      const R = e.__v_emitter;
      R && R.emit("fallback", {
        type: N,
        key: l,
        from: w,
        to: P,
        groupId: `${N}:${l}`
      });
    }
    if (f = n[y] || {}, k = f[l], me(k))
      break;
    Fo(e, l, y, v, N), w = P;
  }
  if (!me(k) || !J(y))
    return r ? Ka : l;
  let x = `${y}__${l}`;
  Ga(d) || (x = `${x}__${JSON.stringify(d)}`);
  let S = i.get(x);
  return S || (S = new Intl.NumberFormat(y, st({}, k, d)), i.set(x, S)), h ? S.formatToParts(c) : S.format(c);
}
const Xc = [
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
function Ss(...e) {
  const [t, n, r, a] = e, s = {};
  let o = {};
  if (!Qe(t))
    throw Sn(Ot.INVALID_ARGUMENT);
  const i = t;
  return J(n) ? s.key = n : me(n) && Object.keys(n).forEach((l) => {
    Xc.includes(l) ? o[l] = n[l] : s[l] = n[l];
  }), J(r) ? s.locale = r : me(r) && (o = r), me(a) && (o = a), [s.key || "", i, s, o];
}
function Ml(e, t, n) {
  const r = e;
  for (const a in n) {
    const s = `${t}__${a}`;
    r.__numberFormatters.has(s) && r.__numberFormatters.delete(s);
  }
}
DT();
function dk() {
  return Jc().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function Jc() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const fk = typeof Proxy == "function", vk = "devtools-plugin:setup", pk = "plugin:settings:set";
let Gn, Ps;
function mk() {
  var e;
  return Gn !== void 0 || (typeof window < "u" && window.performance ? (Gn = !0, Ps = window.performance) : typeof global < "u" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (Gn = !0, Ps = global.perf_hooks.performance) : Gn = !1), Gn;
}
function hk() {
  return mk() ? Ps.now() : Date.now();
}
class gk {
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
        return hk();
      }
    }, n && n.on(pk, (o, i) => {
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
function _k(e, t) {
  const n = e, r = Jc(), a = dk(), s = fk && n.enableEarlyProxy;
  if (a && (r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !s))
    a.emit(vk, e, t);
  else {
    const o = s ? new gk(n, a) : null;
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
function yk() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (en().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (en().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (en().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (en().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (en().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const Qc = ct.__EXTEND_POINT__, mn = Mo(Qc), Ge = {
  FALLBACK_TO_ROOT: Qc,
  NOT_SUPPORTED_PRESERVE: mn(),
  NOT_SUPPORTED_FORMATTER: mn(),
  NOT_SUPPORTED_PRESERVE_DIRECTIVE: mn(),
  NOT_SUPPORTED_GET_CHOICE_INDEX: mn(),
  COMPONENT_NAME_LEGACY_COMPATIBLE: mn(),
  NOT_FOUND_PARENT_SCOPE: mn(),
  IGNORE_OBJ_FLATTEN: mn(),
  NOTICE_DROP_ALLOW_COMPOSITION: mn()
  // 17
}, wk = {
  [Ge.FALLBACK_TO_ROOT]: "Fall back to {type} '{key}' with root locale.",
  [Ge.NOT_SUPPORTED_PRESERVE]: "Not supported 'preserve'.",
  [Ge.NOT_SUPPORTED_FORMATTER]: "Not supported 'formatter'.",
  [Ge.NOT_SUPPORTED_PRESERVE_DIRECTIVE]: "Not supported 'preserveDirectiveContent'.",
  [Ge.NOT_SUPPORTED_GET_CHOICE_INDEX]: "Not supported 'getChoiceIndex'.",
  [Ge.COMPONENT_NAME_LEGACY_COMPATIBLE]: "Component name legacy compatible: '{name}' -> 'i18n'",
  [Ge.NOT_FOUND_PARENT_SCOPE]: "Not found parent scope. use the global scope.",
  [Ge.IGNORE_OBJ_FLATTEN]: "Ignore object flatten: '{key}' key has an string value",
  [Ge.NOTICE_DROP_ALLOW_COMPOSITION]: "'allowComposition' option will be dropped in the next major version. For more information, please see 👉 https://tinyurl.com/2p97mcze"
};
function _t(e, ...t) {
  return So(wk[e], ...t);
}
const ed = Ot.__EXTEND_POINT__, vt = Mo(ed), Te = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: ed,
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
function Xe(e, ...t) {
  return wr(e, null, process.env.NODE_ENV !== "production" ? { messages: Ek, args: t } : void 0);
}
const Ek = {
  [Te.UNEXPECTED_RETURN_TYPE]: "Unexpected return type in composer",
  [Te.INVALID_ARGUMENT]: "Invalid argument",
  [Te.MUST_BE_CALL_SETUP_TOP]: "Must be called at the top of a `setup` function",
  [Te.NOT_INSTALLED]: "Need to install with `app.use` function",
  [Te.UNEXPECTED_ERROR]: "Unexpected error",
  [Te.NOT_AVAILABLE_IN_LEGACY_MODE]: "Not available in legacy mode",
  [Te.REQUIRED_VALUE]: "Required in value: {0}",
  [Te.INVALID_VALUE]: "Invalid value",
  [Te.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: "Cannot setup vue-devtools plugin",
  [Te.NOT_INSTALLED_WITH_PROVIDE]: "Need to install with `provide` function",
  [Te.NOT_COMPATIBLE_LEGACY_VUE_I18N]: "Not compatible legacy VueI18n.",
  [Te.BRIDGE_SUPPORT_VUE_2_ONLY]: "vue-i18n-bridge support Vue 2.x only",
  [Te.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION]: "Must define ‘i18n’ option or custom block in Composition API with using local scope in Legacy API mode",
  [Te.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]: "Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"
}, Ms = /* @__PURE__ */ Xt("__translateVNode"), Ls = /* @__PURE__ */ Xt("__datetimeParts"), xs = /* @__PURE__ */ Xt("__numberParts"), Yn = /* @__PURE__ */ Xt("__enableEmitter"), Hr = /* @__PURE__ */ Xt("__disableEmitter"), td = Xt("__setPluralRules"), nd = /* @__PURE__ */ Xt("__injectWithOption"), Rs = /* @__PURE__ */ Xt("__dispose");
function Fs(e) {
  if (!Ae(e))
    return e;
  for (const t in e)
    if (Po(e, t))
      if (!t.includes("."))
        Ae(e[t]) && Fs(e[t]);
      else {
        const n = t.split("."), r = n.length - 1;
        let a = e, s = !1;
        for (let o = 0; o < r; o++) {
          if (n[o] in a || (a[n[o]] = {}), !Ae(a[n[o]])) {
            process.env.NODE_ENV !== "production" && rt(_t(Ge.IGNORE_OBJ_FLATTEN, {
              key: n[o]
            })), s = !0;
            break;
          }
          a = a[n[o]];
        }
        s || (a[n[r]] = e[t], delete e[t]), Ae(a[n[r]]) && Fs(a[n[r]]);
      }
  return e;
}
function qa(e, t) {
  const { messages: n, __i18n: r, messageResolver: a, flatJson: s } = t, o = me(n) ? n : xe(r) ? {} : { [e]: {} };
  if (xe(r) && r.forEach((i) => {
    if ("locale" in i && "resource" in i) {
      const { locale: l, resource: c } = i;
      l ? (o[l] = o[l] || {}, xr(c, o[l])) : xr(c, o);
    } else
      J(i) && xr(JSON.parse(i), o);
  }), a == null && s)
    for (const i in o)
      Po(o, i) && Fs(o[i]);
  return o;
}
const la = (e) => !Ae(e) || xe(e);
function xr(e, t) {
  if (la(e) || la(t))
    throw Xe(Te.INVALID_VALUE);
  for (const n in e)
    Po(e, n) && (la(e[n]) || la(t[n]) ? t[n] = e[n] : xr(e[n], t[n]));
}
function rd(e) {
  return e.type;
}
function ad(e, t, n) {
  let r = Ae(t.messages) ? t.messages : {};
  "__i18nGlobal" in n && (r = qa(e.locale.value, {
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
function Ll(e) {
  return _e(Yd, null, e, 0);
}
const xl = "__INTLIFY_META__";
let Rl = 0;
function Fl(e) {
  return (t, n, r, a) => e(n, r, Fr() || void 0, a);
}
const Dk = () => {
  const e = Fr();
  let t = null;
  return e && (t = rd(e)[xl]) ? { [xl]: t } : null;
};
function Yo(e = {}, t) {
  const { __root: n, __injectWithOption: r } = e, a = n === void 0;
  let s = we(e.inheritLocale) ? e.inheritLocale : !0;
  const o = te(
    // prettier-ignore
    n && s ? n.locale.value : J(e.locale) ? e.locale : dr
  ), i = te(
    // prettier-ignore
    n && s ? n.fallbackLocale.value : J(e.fallbackLocale) || xe(e.fallbackLocale) || me(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o.value
  ), l = te(qa(o.value, e)), c = te(me(e.datetimeFormats) ? e.datetimeFormats : { [o.value]: {} }), u = te(me(e.numberFormats) ? e.numberFormats : { [o.value]: {} });
  let d = n ? n.missingWarn : we(e.missingWarn) || On(e.missingWarn) ? e.missingWarn : !0, v = n ? n.fallbackWarn : we(e.fallbackWarn) || On(e.fallbackWarn) ? e.fallbackWarn : !0, p = n ? n.fallbackRoot : we(e.fallbackRoot) ? e.fallbackRoot : !0, h = !!e.fallbackFormat, m = Ve(e.missing) ? e.missing : null, b = Ve(e.missing) ? Fl(e.missing) : null, f = Ve(e.postTranslation) ? e.postTranslation : null, y = n ? n.warnHtmlMessage : we(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, k = !!e.escapeParameter;
  const w = n ? n.modifiers : me(e.modifiers) ? e.modifiers : {};
  let P = e.pluralRules || n && n.pluralRules, N;
  N = (() => {
    a && $l(null);
    const F = {
      version: bk,
      locale: o.value,
      fallbackLocale: i.value,
      messages: l.value,
      modifiers: w,
      pluralRules: P,
      missing: b === null ? void 0 : b,
      missingWarn: d,
      fallbackWarn: v,
      fallbackFormat: h,
      unresolving: !0,
      postTranslation: f === null ? void 0 : f,
      warnHtmlMessage: y,
      escapeParameter: k,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    F.datetimeFormats = c.value, F.numberFormats = u.value, F.__datetimeFormatters = me(N) ? N.__datetimeFormatters : void 0, F.__numberFormatters = me(N) ? N.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (F.__v_emitter = me(N) ? N.__v_emitter : void 0);
    const W = ek(F);
    return a && $l(W), W;
  })(), Ir(N, o.value, i.value);
  function S() {
    return [
      o.value,
      i.value,
      l.value,
      c.value,
      u.value
    ];
  }
  const M = C({
    get: () => o.value,
    set: (F) => {
      o.value = F, N.locale = o.value;
    }
  }), R = C({
    get: () => i.value,
    set: (F) => {
      i.value = F, N.fallbackLocale = i.value, Ir(N, o.value, F);
    }
  }), B = C(() => l.value), V = /* @__PURE__ */ C(() => c.value), q = /* @__PURE__ */ C(() => u.value);
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
    F !== null && (b = Fl(F)), m = F, N.missing = b;
  }
  function De(F, W) {
    return F !== "translate" || !W.resolvedMessage;
  }
  const G = (F, W, He, We, Vt, fn) => {
    S();
    let Ct;
    try {
      (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && Ol(Dk()), a || (N.fallbackContext = n ? QT() : void 0), Ct = F(N);
    } finally {
      (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && Ol(null), a || (N.fallbackContext = void 0);
    }
    if (Qe(Ct) && Ct === Ka) {
      const [St, kn] = W();
      if (process.env.NODE_ENV !== "production" && n && J(St) && De(He, kn) && (p && (za(v, St) || jc(d, St)) && rt(_t(Ge.FALLBACK_TO_ROOT, {
        key: St,
        type: He
      })), process.env.NODE_ENV !== "production")) {
        const { __v_emitter: Hn } = N;
        Hn && p && Hn.emit("fallback", {
          type: He,
          key: St,
          to: "global",
          groupId: `${He}:${St}`
        });
      }
      return n && p ? We(n) : Vt(St);
    } else {
      if (fn(Ct))
        return Ct;
      throw Xe(Te.UNEXPECTED_RETURN_TYPE);
    }
  };
  function $(...F) {
    return G((W) => Reflect.apply(Il, null, [W, ...F]), () => As(...F), "translate", (W) => Reflect.apply(W.t, W, [...F]), (W) => W, (W) => J(W));
  }
  function j(...F) {
    const [W, He, We] = F;
    if (We && !Ae(We))
      throw Xe(Te.INVALID_ARGUMENT);
    return $(W, He, st({ resolvedMessage: !0 }, We || {}));
  }
  function ne(...F) {
    return G((W) => Reflect.apply(Cl, null, [W, ...F]), () => Cs(...F), "datetime format", (W) => Reflect.apply(W.d, W, [...F]), () => xa, (W) => J(W));
  }
  function Y(...F) {
    return G((W) => Reflect.apply(Pl, null, [W, ...F]), () => Ss(...F), "number format", (W) => Reflect.apply(W.n, W, [...F]), () => xa, (W) => J(W));
  }
  function I(F) {
    return F.map((W) => J(W) || Qe(W) || we(W) ? Ll(String(W)) : W);
  }
  const se = {
    normalize: I,
    interpolate: (F) => F,
    type: "vnode"
  };
  function ke(...F) {
    return G(
      (W) => {
        let He;
        const We = W;
        try {
          We.processor = se, He = Reflect.apply(Il, null, [We, ...F]);
        } finally {
          We.processor = null;
        }
        return He;
      },
      () => As(...F),
      "translate",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (W) => W[Ms](...F),
      (W) => [Ll(W)],
      (W) => xe(W)
    );
  }
  function Oe(...F) {
    return G(
      (W) => Reflect.apply(Pl, null, [W, ...F]),
      () => Ss(...F),
      "number format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (W) => W[xs](...F),
      () => [],
      (W) => J(W) || xe(W)
    );
  }
  function ye(...F) {
    return G(
      (W) => Reflect.apply(Cl, null, [W, ...F]),
      () => Cs(...F),
      "datetime format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (W) => W[Ls](...F),
      () => [],
      (W) => J(W) || xe(W)
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
  function tt(F) {
    let W = null;
    const He = xc(N, i.value, o.value);
    for (let We = 0; We < He.length; We++) {
      const Vt = l.value[He[We]] || {}, fn = N.messageResolver(Vt, F);
      if (fn != null) {
        W = fn;
        break;
      }
    }
    return W;
  }
  function D(F) {
    const W = tt(F);
    return W ?? (n ? n.tm(F) || {} : {});
  }
  function _(F) {
    return l.value[F] || {};
  }
  function L(F, W) {
    l.value[F] = W, N.messages = l.value;
  }
  function Q(F, W) {
    l.value[F] = l.value[F] || {}, xr(W, l.value[F]), N.messages = l.value;
  }
  function oe(F) {
    return c.value[F] || {};
  }
  function be(F, W) {
    c.value[F] = W, N.datetimeFormats = c.value, Sl(N, F, W);
  }
  function ot(F, W) {
    c.value[F] = st(c.value[F] || {}, W), N.datetimeFormats = c.value, Sl(N, F, W);
  }
  function ze(F) {
    return u.value[F] || {};
  }
  function wt(F, W) {
    u.value[F] = W, N.numberFormats = u.value, Ml(N, F, W);
  }
  function Yt(F, W) {
    u.value[F] = st(u.value[F] || {}, W), N.numberFormats = u.value, Ml(N, F, W);
  }
  Rl++, n && zt && (Ce(n.locale, (F) => {
    s && (o.value = F, N.locale = F, Ir(N, o.value, i.value));
  }), Ce(n.fallbackLocale, (F) => {
    s && (i.value = F, N.fallbackLocale = F, Ir(N, o.value, i.value));
  }));
  const Pe = {
    id: Rl,
    locale: M,
    fallbackLocale: R,
    get inheritLocale() {
      return s;
    },
    set inheritLocale(F) {
      s = F, F && n && (o.value = n.locale.value, i.value = n.fallbackLocale.value, Ir(N, o.value, i.value));
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
      return y;
    },
    set warnHtmlMessage(F) {
      y = F, N.warnHtmlMessage = F;
    },
    get escapeParameter() {
      return k;
    },
    set escapeParameter(F) {
      k = F, N.escapeParameter = F;
    },
    t: $,
    getLocaleMessage: _,
    setLocaleMessage: L,
    mergeLocaleMessage: Q,
    getPostTranslationHandler: ce,
    setPostTranslationHandler: ee,
    getMissingHandler: le,
    setMissingHandler: ge,
    [td]: Be
  };
  return Pe.datetimeFormats = V, Pe.numberFormats = q, Pe.rt = j, Pe.te = je, Pe.tm = D, Pe.d = ne, Pe.n = Y, Pe.getDateTimeFormat = oe, Pe.setDateTimeFormat = be, Pe.mergeDateTimeFormat = ot, Pe.getNumberFormat = ze, Pe.setNumberFormat = wt, Pe.mergeNumberFormat = Yt, Pe[nd] = r, Pe[Ms] = ke, Pe[Ls] = ye, Pe[xs] = Oe, process.env.NODE_ENV !== "production" && (Pe[Yn] = (F) => {
    N.__v_emitter = F;
  }, Pe[Hr] = () => {
    N.__v_emitter = void 0;
  }), Pe;
}
function Ok(e) {
  const t = J(e.locale) ? e.locale : dr, n = J(e.fallbackLocale) || xe(e.fallbackLocale) || me(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t, r = Ve(e.missing) ? e.missing : void 0, a = we(e.silentTranslationWarn) || On(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0, s = we(e.silentFallbackWarn) || On(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0, o = we(e.fallbackRoot) ? e.fallbackRoot : !0, i = !!e.formatFallbackMessages, l = me(e.modifiers) ? e.modifiers : {}, c = e.pluralizationRules, u = Ve(e.postTranslation) ? e.postTranslation : void 0, d = J(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0, v = !!e.escapeParameterHtml, p = we(e.sync) ? e.sync : !0;
  process.env.NODE_ENV !== "production" && e.formatter && rt(_t(Ge.NOT_SUPPORTED_FORMATTER)), process.env.NODE_ENV !== "production" && e.preserveDirectiveContent && rt(_t(Ge.NOT_SUPPORTED_PRESERVE_DIRECTIVE));
  let h = e.messages;
  if (me(e.sharedMessages)) {
    const P = e.sharedMessages;
    h = Object.keys(P).reduce((x, S) => {
      const M = x[S] || (x[S] = {});
      return st(M, P[S]), x;
    }, h || {});
  }
  const { __i18n: m, __root: b, __injectWithOption: f } = e, y = e.datetimeFormats, k = e.numberFormats, w = e.flatJson;
  return {
    locale: t,
    fallbackLocale: n,
    messages: h,
    flatJson: w,
    datetimeFormats: y,
    numberFormats: k,
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
    __root: b,
    __injectWithOption: f
  };
}
function Ys(e = {}, t) {
  {
    const n = Yo(Ok(e)), { __extender: r } = e, a = {
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
        return process.env.NODE_ENV !== "production" && rt(_t(Ge.NOT_SUPPORTED_FORMATTER)), {
          interpolate() {
            return [];
          }
        };
      },
      set formatter(s) {
        process.env.NODE_ENV !== "production" && rt(_t(Ge.NOT_SUPPORTED_FORMATTER));
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
        return process.env.NODE_ENV !== "production" && rt(_t(Ge.NOT_SUPPORTED_PRESERVE_DIRECTIVE)), !0;
      },
      set preserveDirectiveContent(s) {
        process.env.NODE_ENV !== "production" && rt(_t(Ge.NOT_SUPPORTED_PRESERVE_DIRECTIVE));
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
          throw Xe(Te.INVALID_ARGUMENT);
        const v = o;
        return J(i) ? c.locale = i : xe(i) ? u = i : me(i) && (d = i), xe(l) ? u = l : me(l) && (d = l), Reflect.apply(n.t, n, [
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
          throw Xe(Te.INVALID_ARGUMENT);
        const v = o;
        return J(i) ? c.locale = i : Qe(i) ? c.plural = i : xe(i) ? u = i : me(i) && (d = i), J(l) ? c.locale = l : xe(l) ? u = l : me(l) && (d = l), Reflect.apply(n.t, n, [
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
        return process.env.NODE_ENV !== "production" && rt(_t(Ge.NOT_SUPPORTED_GET_CHOICE_INDEX)), -1;
      }
    };
    return a.__extender = r, process.env.NODE_ENV !== "production" && (a.__enableEmitter = (s) => {
      const o = n;
      o[Yn] && o[Yn](s);
    }, a.__disableEmitter = () => {
      const s = n;
      s[Hr] && s[Hr]();
    }), a;
  }
}
const Vo = {
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
function $k({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, a) => [
    ...r,
    // prettier-ignore
    ...a.type === re ? a.children : [a]
  ], []) : t.reduce((n, r) => {
    const a = e[r];
    return a && (n[r] = a()), n;
  }, {});
}
function sd(e) {
  return re;
}
const Tk = /* @__PURE__ */ Se({
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
      validator: (e) => Qe(e) || !isNaN(e)
    }
  }, Vo),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const { slots: n, attrs: r } = t, a = e.i18n || jo({
      useScope: e.scope,
      __useComponent: !0
    });
    return () => {
      const s = Object.keys(n).filter((d) => d !== "_"), o = {};
      e.locale && (o.locale = e.locale), e.plural !== void 0 && (o.plural = J(e.plural) ? +e.plural : e.plural);
      const i = $k(t, s), l = a[Ms](e.keypath, i, o), c = st({}, r), u = J(e.tag) || Ae(e.tag) ? e.tag : sd();
      return qn(u, c, l);
    };
  }
}), ds = Tk;
function kk(e) {
  return xe(e) && !J(e[0]);
}
function od(e, t, n, r) {
  const { slots: a, attrs: s } = t;
  return () => {
    const o = { part: !0 };
    let i = {};
    e.locale && (o.locale = e.locale), J(e.format) ? o.key = e.format : Ae(e.format) && (J(e.format.key) && (o.key = e.format.key), i = Object.keys(e.format).reduce((v, p) => n.includes(p) ? st({}, v, { [p]: e.format[p] }) : v, {}));
    const l = r(e.value, o, i);
    let c = [o.key];
    xe(l) ? c = l.map((v, p) => {
      const h = a[v.type], m = h ? h({ [v.type]: v.value, index: p, parts: l }) : [v.value];
      return kk(m) && (m[0].key = `${v.type}-${p}`), m;
    }) : J(l) && (c = [l]);
    const u = st({}, s), d = J(e.tag) || Ae(e.tag) ? e.tag : sd();
    return qn(d, u, c);
  };
}
const Nk = /* @__PURE__ */ Se({
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
  }, Vo),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const n = e.i18n || jo({
      useScope: "parent",
      __useComponent: !0
    });
    return od(e, t, Xc, (...r) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[xs](...r)
    ));
  }
}), Yl = Nk, Ik = /* @__PURE__ */ Se({
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
  }, Vo),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const n = e.i18n || jo({
      useScope: "parent",
      __useComponent: !0
    });
    return od(e, t, Zc, (...r) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[Ls](...r)
    ));
  }
}), Vl = Ik;
function Ak(e, t) {
  const n = e;
  if (e.mode === "composition")
    return n.__getInstance(t) || e.global;
  {
    const r = n.__getInstance(t);
    return r != null ? r.__composer : e.global.__composer;
  }
}
function Ck(e) {
  const t = (o) => {
    const { instance: i, modifiers: l, value: c } = o;
    if (!i || !i.$)
      throw Xe(Te.UNEXPECTED_ERROR);
    const u = Ak(e, i.$);
    process.env.NODE_ENV !== "production" && l.preserve && rt(_t(Ge.NOT_SUPPORTED_PRESERVE));
    const d = Ul(c);
    return [
      Reflect.apply(u.t, u, [...jl(d)]),
      u
    ];
  };
  return {
    created: (o, i) => {
      const [l, c] = t(i);
      zt && e.global === c && (o.__i18nWatcher = Ce(c.locale, () => {
        i.instance && i.instance.$forceUpdate();
      })), o.__composer = c, o.textContent = l;
    },
    unmounted: (o) => {
      zt && o.__i18nWatcher && (o.__i18nWatcher(), o.__i18nWatcher = void 0, delete o.__i18nWatcher), o.__composer && (o.__composer = void 0, delete o.__composer);
    },
    beforeUpdate: (o, { value: i }) => {
      if (o.__composer) {
        const l = o.__composer, c = Ul(i);
        o.textContent = Reflect.apply(l.t, l, [
          ...jl(c)
        ]);
      }
    },
    getSSRProps: (o) => {
      const [i] = t(o);
      return { textContent: i };
    }
  };
}
function Ul(e) {
  if (J(e))
    return { path: e };
  if (me(e)) {
    if (!("path" in e))
      throw Xe(Te.REQUIRED_VALUE, "path");
    return e;
  } else
    throw Xe(Te.INVALID_VALUE);
}
function jl(e) {
  const { path: t, locale: n, args: r, choice: a, plural: s } = e, o = {}, i = r || {};
  return J(n) && (o.locale = n), Qe(a) && (o.plural = a), Qe(s) && (o.plural = s), [t, i, o];
}
function Sk(e, t, ...n) {
  const r = me(n[0]) ? n[0] : {}, a = !!r.useI18nComponentName, s = we(r.globalInstall) ? r.globalInstall : !0;
  process.env.NODE_ENV !== "production" && s && a && rt(_t(Ge.COMPONENT_NAME_LEGACY_COMPATIBLE, {
    name: ds.name
  })), s && ([a ? "i18n" : ds.name, "I18nT"].forEach((o) => e.component(o, ds)), [Yl.name, "I18nN"].forEach((o) => e.component(o, Yl)), [Vl.name, "I18nD"].forEach((o) => e.component(o, Vl))), e.directive("t", Ck(t));
}
const fs = {
  "vue-devtools-plugin-vue-i18n": "Vue I18n devtools",
  "vue-i18n-resource-inspector": "I18n Resources",
  "vue-i18n-timeline": "Vue I18n"
}, Pk = {
  "vue-i18n-resource-inspector": "Search for scopes ..."
}, Mk = {
  "vue-i18n-timeline": 16764185
}, id = "vue-i18n: composer properties";
let Vs;
async function Lk(e, t) {
  return new Promise((n, r) => {
    try {
      _k({
        id: "vue-devtools-plugin-vue-i18n",
        label: fs[
          "vue-devtools-plugin-vue-i18n"
          /* VueDevToolsIDs.PLUGIN */
        ],
        packageName: "vue-i18n",
        homepage: "https://vue-i18n.intlify.dev",
        logo: "https://vue-i18n.intlify.dev/vue-i18n-devtools-logo.png",
        componentStateTypes: [id],
        app: e
        // eslint-disable-line @typescript-eslint/no-explicit-any
      }, (a) => {
        Vs = a, a.on.visitComponentTree(({ componentInstance: o, treeNode: i }) => {
          xk(o, i, t);
        }), a.on.inspectComponent(({ componentInstance: o, instanceData: i }) => {
          o.vnode.el && o.vnode.el.__VUE_I18N__ && i && (t.mode === "legacy" ? o.vnode.el.__VUE_I18N__ !== t.global.__composer && Bl(i, o.vnode.el.__VUE_I18N__) : Bl(i, o.vnode.el.__VUE_I18N__));
        }), a.addInspector({
          id: "vue-i18n-resource-inspector",
          label: fs[
            "vue-i18n-resource-inspector"
            /* VueDevToolsIDs.CUSTOM_INSPECTOR */
          ],
          icon: "language",
          treeFilterPlaceholder: Pk[
            "vue-i18n-resource-inspector"
            /* VueDevToolsIDs.CUSTOM_INSPECTOR */
          ]
        }), a.on.getInspectorTree((o) => {
          o.app === e && o.inspectorId === "vue-i18n-resource-inspector" && Uk(o, t);
        });
        const s = /* @__PURE__ */ new Map();
        a.on.getInspectorState(async (o) => {
          if (o.app === e && o.inspectorId === "vue-i18n-resource-inspector")
            if (a.unhighlightElement(), Bk(o, t), o.nodeId === "global") {
              if (!s.has(o.app)) {
                const [i] = await a.getComponentInstances(o.app);
                s.set(o.app, i);
              }
              a.highlightElement(s.get(o.app));
            } else {
              const i = jk(o.nodeId, t);
              i && a.highlightElement(i);
            }
        }), a.on.editInspectorState((o) => {
          o.app === e && o.inspectorId === "vue-i18n-resource-inspector" && Wk(o, t);
        }), a.addTimelineLayer({
          id: "vue-i18n-timeline",
          label: fs[
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
function ld(e) {
  return e.type.name || e.type.displayName || e.type.__file || "Anonymous";
}
function xk(e, t, n) {
  const r = n.mode === "composition" ? n.global : n.global.__composer;
  if (e && e.vnode.el && e.vnode.el.__VUE_I18N__ && e.vnode.el.__VUE_I18N__ !== r) {
    const a = {
      label: `i18n (${ld(e)} Scope)`,
      textColor: 0,
      backgroundColor: 16764185
    };
    t.tags.push(a);
  }
}
function Bl(e, t) {
  const n = id;
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
    value: Uo(t.messages.value)
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
function Uo(e) {
  const t = {};
  return Object.keys(e).forEach((n) => {
    const r = e[n];
    Ve(r) && "source" in r ? t[n] = Vk(r) : Fn(r) && r.loc && r.loc.source ? t[n] = r.loc.source : Ae(r) ? t[n] = Uo(r) : t[n] = r;
  }), t;
}
const Rk = {
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "&": "&amp;"
};
function Fk(e) {
  return e.replace(/[<>"&]/g, Yk);
}
function Yk(e) {
  return Rk[e] || e;
}
function Vk(e) {
  return {
    _custom: {
      type: "function",
      display: `<span>ƒ</span> ${e.source ? `("${Fk(e.source)}")` : "(?)"}`
    }
  };
}
function Uk(e, t) {
  e.rootNodes.push({
    id: "global",
    label: "Global Scope"
  });
  const n = t.mode === "composition" ? t.global : t.global.__composer;
  for (const [r, a] of t.__instances) {
    const s = t.mode === "composition" ? a : a.__composer;
    n !== s && e.rootNodes.push({
      id: s.id.toString(),
      label: `${ld(r)} Scope`
    });
  }
}
function jk(e, t) {
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
function ud(e, t) {
  if (e === "global")
    return t.mode === "composition" ? t.global : t.global.__composer;
  {
    const n = Array.from(t.__instances.values()).find((r) => r.id.toString() === e);
    return n ? t.mode === "composition" ? n : n.__composer : null;
  }
}
function Bk(e, t) {
  const n = ud(e.nodeId, t);
  return n && (e.state = Hk(n)), null;
}
function Hk(e) {
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
      value: Uo(e.messages.value)
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
function Wr(e, t) {
  if (Vs) {
    let n;
    t && "groupId" in t && (n = t.groupId, delete t.groupId), Vs.addTimelineEvent({
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
function Wk(e, t) {
  const n = ud(e.nodeId, t);
  if (n) {
    const [r] = e.path;
    r === "locale" && J(e.state.value) ? n.locale.value = e.state.value : r === "fallbackLocale" && (J(e.state.value) || xe(e.state.value) || Ae(e.state.value)) ? n.fallbackLocale.value = e.state.value : r === "inheritLocale" && we(e.state.value) && (n.inheritLocale = e.state.value);
  }
}
function Gk(e, t, n) {
  return {
    beforeCreate() {
      const r = Fr();
      if (!r)
        throw Xe(Te.UNEXPECTED_ERROR);
      const a = this.$options;
      if (a.i18n) {
        const s = a.i18n;
        if (a.__i18n && (s.__i18n = a.__i18n), s.__root = t, this === this.$root)
          this.$i18n = Hl(e, s);
        else {
          s.__injectWithOption = !0, s.__extender = n.__vueI18nExtend, this.$i18n = Ys(s);
          const o = this.$i18n;
          o.__extender && (o.__disposer = o.__extender(this.$i18n));
        }
      } else if (a.__i18n)
        if (this === this.$root)
          this.$i18n = Hl(e, a);
        else {
          this.$i18n = Ys({
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
      a.__i18nGlobal && ad(t, a, a), this.$t = (...s) => this.$i18n.t(...s), this.$rt = (...s) => this.$i18n.rt(...s), this.$tc = (...s) => this.$i18n.tc(...s), this.$te = (s, o) => this.$i18n.te(s, o), this.$d = (...s) => this.$i18n.d(...s), this.$n = (...s) => this.$i18n.n(...s), this.$tm = (s) => this.$i18n.tm(s), n.__setInstance(r, this.$i18n);
    },
    mounted() {
      if (process.env.NODE_ENV !== "production" && this.$el && this.$i18n) {
        const r = this.$i18n;
        this.$el.__VUE_I18N__ = r.__composer;
        const a = this.__v_emitter = Lo();
        r.__enableEmitter && r.__enableEmitter(a), a.on("*", Wr);
      }
    },
    unmounted() {
      const r = Fr();
      if (!r)
        throw Xe(Te.UNEXPECTED_ERROR);
      const a = this.$i18n;
      process.env.NODE_ENV !== "production" && this.$el && this.$el.__VUE_I18N__ && (this.__v_emitter && (this.__v_emitter.off("*", Wr), delete this.__v_emitter), this.$i18n && (a.__disableEmitter && a.__disableEmitter(), delete this.$el.__VUE_I18N__)), delete this.$t, delete this.$rt, delete this.$tc, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, a.__disposer && (a.__disposer(), delete a.__disposer, delete a.__extender), n.__deleteInstance(r), delete this.$i18n;
    }
  };
}
function Hl(e, t) {
  e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[td](t.pluralizationRules || e.pluralizationRules);
  const n = qa(e.locale, {
    messages: t.messages,
    __i18n: t.__i18n
  });
  return Object.keys(n).forEach((r) => e.mergeLocaleMessage(r, n[r])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach((r) => e.mergeDateTimeFormat(r, t.datetimeFormats[r])), t.numberFormats && Object.keys(t.numberFormats).forEach((r) => e.mergeNumberFormat(r, t.numberFormats[r])), e;
}
const Kk = /* @__PURE__ */ Xt("global-vue-i18n");
function zk(e = {}, t) {
  const n = __VUE_I18N_LEGACY_API__ && we(e.legacy) ? e.legacy : __VUE_I18N_LEGACY_API__, r = we(e.globalInjection) ? e.globalInjection : !0, a = __VUE_I18N_LEGACY_API__ && n ? !!e.allowComposition : !0, s = /* @__PURE__ */ new Map(), [o, i] = qk(e, n), l = /* @__PURE__ */ Xt(process.env.NODE_ENV !== "production" ? "vue-i18n" : "");
  process.env.NODE_ENV !== "production" && n && a && rt(_t(Ge.NOTICE_DROP_ALLOW_COMPOSITION));
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
        !n && r && (m = aN(p, v.global)), __VUE_I18N_FULL_INSTALL__ && Sk(p, v, ...h), __VUE_I18N_LEGACY_API__ && n && p.mixin(Gk(i, i.__composer, v));
        const b = p.unmount;
        if (p.unmount = () => {
          m && m(), v.dispose(), b();
        }, process.env.NODE_ENV !== "production") {
          if (!await Lk(p, v))
            throw Xe(Te.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN);
          const y = Lo();
          if (n) {
            const k = i;
            k.__enableEmitter && k.__enableEmitter(y);
          } else {
            const k = i;
            k[Yn] && k[Yn](y);
          }
          y.on("*", Wr);
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
function jo(e = {}) {
  const t = Fr();
  if (t == null)
    throw Xe(Te.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw Xe(Te.NOT_INSTALLED);
  const n = Zk(t), r = Jk(n), a = rd(t), s = Xk(e, a);
  if (__VUE_I18N_LEGACY_API__ && n.mode === "legacy" && !e.__useComponent) {
    if (!n.allowComposition)
      throw Xe(Te.NOT_AVAILABLE_IN_LEGACY_MODE);
    return nN(t, s, r, e);
  }
  if (s === "global")
    return ad(r, e, a), r;
  if (s === "parent") {
    let l = Qk(n, t, e.__useComponent);
    return l == null && (process.env.NODE_ENV !== "production" && rt(_t(Ge.NOT_FOUND_PARENT_SCOPE)), l = r), l;
  }
  const o = n;
  let i = o.__getInstance(t);
  if (i == null) {
    const l = st({}, e);
    "__i18n" in a && (l.__i18n = a.__i18n), r && (l.__root = r), i = Yo(l), o.__composerExtend && (i[Rs] = o.__composerExtend(i)), tN(o, t, i), o.__setInstance(t, i);
  }
  return i;
}
function qk(e, t, n) {
  const r = xd();
  {
    const a = __VUE_I18N_LEGACY_API__ && t ? r.run(() => Ys(e)) : r.run(() => Yo(e));
    if (a == null)
      throw Xe(Te.UNEXPECTED_ERROR);
    return [r, a];
  }
}
function Zk(e) {
  {
    const t = Fe(e.isCE ? Kk : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t)
      throw Xe(e.isCE ? Te.NOT_INSTALLED_WITH_PROVIDE : Te.UNEXPECTED_ERROR);
    return t;
  }
}
function Xk(e, t) {
  return Ga(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function Jk(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function Qk(e, t, n = !1) {
  let r = null;
  const a = t.root;
  let s = eN(t, n);
  for (; s != null; ) {
    const o = e;
    if (e.mode === "composition")
      r = o.__getInstance(s);
    else if (__VUE_I18N_LEGACY_API__) {
      const i = o.__getInstance(s);
      i != null && (r = i.__composer, n && r && !r[nd] && (r = null));
    }
    if (r != null || a === s)
      break;
    s = s.parent;
  }
  return r;
}
function eN(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function tN(e, t, n) {
  let r = null;
  Vn(() => {
    if (process.env.NODE_ENV !== "production" && t.vnode.el) {
      t.vnode.el.__VUE_I18N__ = n, r = Lo();
      const a = n;
      a[Yn] && a[Yn](r), r.on("*", Wr);
    }
  }, t), Kr(() => {
    const a = n;
    process.env.NODE_ENV !== "production" && t.vnode.el && t.vnode.el.__VUE_I18N__ && (r && r.off("*", Wr), a[Hr] && a[Hr](), delete t.vnode.el.__VUE_I18N__), e.__deleteInstance(t);
    const s = a[Rs];
    s && (s(), delete a[Rs]);
  }, t);
}
function nN(e, t, n, r = {}) {
  const a = t === "local", s = Rd(null);
  if (a && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n))
    throw Xe(Te.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
  const o = we(r.inheritLocale) ? r.inheritLocale : !J(r.locale), i = te(
    // prettier-ignore
    !a || o ? n.locale.value : J(r.locale) ? r.locale : dr
  ), l = te(
    // prettier-ignore
    !a || o ? n.fallbackLocale.value : J(r.fallbackLocale) || xe(r.fallbackLocale) || me(r.fallbackLocale) || r.fallbackLocale === !1 ? r.fallbackLocale : i.value
  ), c = te(qa(i.value, r)), u = te(me(r.datetimeFormats) ? r.datetimeFormats : { [i.value]: {} }), d = te(me(r.numberFormats) ? r.numberFormats : { [i.value]: {} }), v = a ? n.missingWarn : we(r.missingWarn) || On(r.missingWarn) ? r.missingWarn : !0, p = a ? n.fallbackWarn : we(r.fallbackWarn) || On(r.fallbackWarn) ? r.fallbackWarn : !0, h = a ? n.fallbackRoot : we(r.fallbackRoot) ? r.fallbackRoot : !0, m = !!r.fallbackFormat, b = Ve(r.missing) ? r.missing : null, f = Ve(r.postTranslation) ? r.postTranslation : null, y = a ? n.warnHtmlMessage : we(r.warnHtmlMessage) ? r.warnHtmlMessage : !0, k = !!r.escapeParameter, w = a ? n.modifiers : me(r.modifiers) ? r.modifiers : {}, P = r.pluralRules || a && n.pluralRules;
  function N() {
    return [
      i.value,
      l.value,
      c.value,
      u.value,
      d.value
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
  }), M = C(() => s.value ? s.value.messages.value : c.value), R = C(() => u.value), B = C(() => d.value);
  function V() {
    return s.value ? s.value.getPostTranslationHandler() : f;
  }
  function q(_) {
    s.value && s.value.setPostTranslationHandler(_);
  }
  function ce() {
    return s.value ? s.value.getMissingHandler() : b;
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
  function De(..._) {
    return s.value ? Reflect.apply(s.value.rt, null, [..._]) : "";
  }
  function G(..._) {
    return s.value ? le(() => Reflect.apply(s.value.d, null, [..._])) : le(() => "");
  }
  function $(..._) {
    return s.value ? le(() => Reflect.apply(s.value.n, null, [..._])) : le(() => "");
  }
  function j(_) {
    return s.value ? s.value.tm(_) : {};
  }
  function ne(_, L) {
    return s.value ? s.value.te(_, L) : !1;
  }
  function Y(_) {
    return s.value ? s.value.getLocaleMessage(_) : {};
  }
  function I(_, L) {
    s.value && (s.value.setLocaleMessage(_, L), c.value[_] = L);
  }
  function Z(_, L) {
    s.value && s.value.mergeLocaleMessage(_, L);
  }
  function se(_) {
    return s.value ? s.value.getDateTimeFormat(_) : {};
  }
  function ke(_, L) {
    s.value && (s.value.setDateTimeFormat(_, L), u.value[_] = L);
  }
  function Oe(_, L) {
    s.value && s.value.mergeDateTimeFormat(_, L);
  }
  function ye(_) {
    return s.value ? s.value.getNumberFormat(_) : {};
  }
  function Be(_, L) {
    s.value && (s.value.setNumberFormat(_, L), d.value[_] = L);
  }
  function je(_, L) {
    s.value && s.value.mergeNumberFormat(_, L);
  }
  const tt = {
    get id() {
      return s.value ? s.value.id : -1;
    },
    locale: x,
    fallbackLocale: S,
    messages: M,
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
      return s.value ? s.value.warnHtmlMessage : y;
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
    t: ge,
    getPostTranslationHandler: V,
    setPostTranslationHandler: q,
    getMissingHandler: ce,
    setMissingHandler: ee,
    rt: De,
    d: G,
    n: $,
    tm: j,
    te: ne,
    getLocaleMessage: Y,
    setLocaleMessage: I,
    mergeLocaleMessage: Z,
    getDateTimeFormat: se,
    setDateTimeFormat: ke,
    mergeDateTimeFormat: Oe,
    getNumberFormat: ye,
    setNumberFormat: Be,
    mergeNumberFormat: je
  };
  function D(_) {
    _.locale.value = i.value, _.fallbackLocale.value = l.value, Object.keys(c.value).forEach((L) => {
      _.mergeLocaleMessage(L, c.value[L]);
    }), Object.keys(u.value).forEach((L) => {
      _.mergeDateTimeFormat(L, u.value[L]);
    }), Object.keys(d.value).forEach((L) => {
      _.mergeNumberFormat(L, d.value[L]);
    }), _.escapeParameter = k, _.fallbackFormat = m, _.fallbackRoot = h, _.fallbackWarn = p, _.missingWarn = v, _.warnHtmlMessage = y;
  }
  return Fd(() => {
    if (e.proxy == null || e.proxy.$i18n == null)
      throw Xe(Te.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
    const _ = s.value = e.proxy.$i18n.__composer;
    t === "global" ? (i.value = _.locale.value, l.value = _.fallbackLocale.value, c.value = _.messages.value, u.value = _.datetimeFormats.value, d.value = _.numberFormats.value) : a && D(_);
  }), tt;
}
const rN = [
  "locale",
  "fallbackLocale",
  "availableLocales"
], Wl = ["t", "rt", "d", "n", "tm", "te"];
function aN(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  return rN.forEach((a) => {
    const s = Object.getOwnPropertyDescriptor(t, a);
    if (!s)
      throw Xe(Te.UNEXPECTED_ERROR);
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
  }), e.config.globalProperties.$i18n = n, Wl.forEach((a) => {
    const s = Object.getOwnPropertyDescriptor(t, a);
    if (!s || !s.value)
      throw Xe(Te.UNEXPECTED_ERROR);
    Object.defineProperty(e.config.globalProperties, `$${a}`, s);
  }), () => {
    delete e.config.globalProperties.$i18n, Wl.forEach((a) => {
      delete e.config.globalProperties[`$${a}`];
    });
  };
}
yk();
__INTLIFY_JIT_COMPILATION__ ? Dl(sk) : Dl(ak);
ZT(CT);
XT(xc);
if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const e = en();
  e.__INTLIFY__ = !0, VT(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
const sN = {
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
}, oN = {
  zh_TW: sN
}, Za = zk({
  locale: "zh_TW",
  legacy: !1,
  globalInjection: !0,
  messages: oN
}), iN = { class: "flex flex-col gap-3" }, lN = /* @__PURE__ */ O("div", { class: "flex items-center justify-center gap-3 my-2" }, [
  /* @__PURE__ */ O("p", { class: "p4-b" }, "日期時間"),
  /* @__PURE__ */ O("div", { class: "h-[1px] flex-1 bg-light-3" })
], -1), uN = { class: "flex flex-col gap-2" }, cN = { class: "flex gap-2 items-center" }, dN = /* @__PURE__ */ O("span", { class: "p4-b" }, "開始", -1), fN = ["onClick"], vN = ["value"], pN = /* @__PURE__ */ O("div", { class: "flex items-center justify-center gap-3 w-full my-2" }, [
  /* @__PURE__ */ O("p", { class: "p4-b" }, "重複頻率"),
  /* @__PURE__ */ O("div", { class: "h-[1px] flex-1 bg-light-3" })
], -1), mN = { class: "flex space-x-2 items-center" }, hN = { class: "flex items-center gap-2" }, gN = /* @__PURE__ */ O("span", { class: "p4-b" }, "重複", -1), _N = ["value"], bN = /* @__PURE__ */ O("option", { value: 0 }, "自訂", -1), yN = { class: "p4-b" }, wN = {
  key: 0,
  class: "flex items-center gap-2"
}, EN = { class: "flex items-center gap-2" }, DN = /* @__PURE__ */ O("span", { class: "p4-b" }, "頻率", -1), ON = /* @__PURE__ */ O("option", {
  value: "-1",
  disabled: ""
}, "請選擇", -1), $N = ["value"], TN = {
  key: 0,
  class: "flex items-center gap-2"
}, kN = /* @__PURE__ */ O("span", { class: "p4-b" }, "每", -1), NN = { class: "p4-b" }, Gl = 1, IN = /* @__PURE__ */ Se({
  __name: "RepeatFrequency",
  props: {
    frequency: {},
    interval: {}
  },
  emits: ["update:frequency", "update:interval"],
  setup(e, { emit: t }) {
    const n = e, { t: r } = Za.global, a = Fe("eventData"), s = te(!0);
    Ce(a, () => {
      s.value = !0;
    });
    const o = te(n.interval ?? Gl);
    Ce(o, (h) => {
      h || (h = Gl), t("update:interval", h);
    });
    const i = te(n.frequency);
    Ce(i, (h) => {
      t("update:frequency", h);
    });
    const l = C({
      get: () => a.value.weekdays ?? [],
      set: (h) => {
        a.value.weekdays = h;
      }
    }), c = C({
      get: () => a.value.weekOrdinal ?? [],
      set: (h) => {
        a.value.weekOrdinal = h;
      }
    }), u = C({
      get: () => a.value.monthDate ?? [],
      set: (h) => {
        a.value.monthDate = h;
      }
    }), d = C({
      get: () => a.value.yearMonths ?? [],
      set: (h) => {
        a.value.yearMonths = h;
      }
    }), v = C(() => {
      if (p.value == Ye.Never)
        return "只執行一次";
      if (p.value == Ye.Hour)
        return "每小時執行一次";
      if (p.value == Ye.Day)
        return "每日執行一次";
      if (p.value == Ye.Week)
        return "每週執行一次";
      if (p.value == Ye.Month)
        return "每月執行一次";
      if (p.value == Ye.Annual)
        return "每年執行一次";
      const h = {
        1: "小時",
        2: "日",
        3: "週",
        4: "月",
        5: "年"
      };
      return p.value == 0 ? `每${o.value ?? ""}${h[i.value] ?? ""}執行一次` : "";
    }), p = te(-1);
    return n.interval == 1 && (p.value = n.frequency), Ce(
      p,
      (h) => {
        Ye[h] && (t("update:frequency", h), t("update:interval", 1), i.value = p.value, a.value.weekdays = null, a.value.weekOrdinal = null, a.value.monthDate = null, a.value.yearMonths = null), a.value.customInterval = h === 0;
      },
      { immediate: !0 }
    ), (h, m) => (E(), T("div", iN, [
      lN,
      O("div", uN, [
        O("div", cN, [
          dN,
          _e(g(Co), {
            modelValue: g(a).start,
            "onUpdate:modelValue": m[0] || (m[0] = (b) => g(a).start = b),
            mode: "dateTime",
            timezone: "UTC",
            "min-Date": /* @__PURE__ */ new Date(),
            "is-required": "",
            is24hr: ""
          }, {
            default: et(({ togglePopover: b, inputValue: f }) => [
              O("button", {
                class: "p3-b flex w-fit cursor-pointer relative items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 transition-all hover:bg-light-3 hover:bg-opacity-50",
                onClick: b
              }, [
                O("input", {
                  value: f,
                  required: "",
                  class: "opacity-0 absolute w-full h-full pointer-events-none"
                }, null, 8, vN),
                zr(" " + fe(f || "請選定執行日期"), 1)
              ], 8, fN)
            ]),
            _: 1
          }, 8, ["modelValue", "min-Date"])
        ])
      ]),
      pN,
      O("div", mN, [
        O("label", hN, [
          gN,
          Ke(O("select", {
            class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
            "onUpdate:modelValue": m[1] || (m[1] = (b) => Ie(p) ? p.value = b : null)
          }, [
            (E(!0), T(re, null, Ee(g(Ye), (b, f) => (E(), T(re, { key: f }, [
              Number.isInteger(b) ? (E(), T("option", {
                key: 0,
                value: b
              }, fe(g(r)(f)), 9, _N)) : X("", !0)
            ], 64))), 128)),
            bN
          ], 512), [
            [at, g(p)]
          ])
        ]),
        O("span", yN, fe(g(v)), 1)
      ]),
      g(Ye)[g(p)] == null ? (E(), T("div", wN, [
        O("label", EN, [
          DN,
          Ke(O("select", {
            class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
            "onUpdate:modelValue": m[2] || (m[2] = (b) => Ie(i) ? i.value = b : null)
          }, [
            ON,
            (E(!0), T(re, null, Ee(g(Ye), (b, f) => (E(), T(re, { key: f }, [
              b != g(Ye).Never && Number.isInteger(b) ? (E(), T("option", {
                key: 0,
                value: b
              }, fe(g(r)(f)), 9, $N)) : X("", !0)
            ], 64))), 128))
          ], 512), [
            [at, g(i)]
          ])
        ]),
        g(i) != -1 ? (E(), T("label", TN, [
          kN,
          _e(wn, {
            class: "!w-10 text-center",
            modelValue: g(o),
            "onUpdate:modelValue": m[3] || (m[3] = (b) => Ie(o) ? o.value = b : null),
            type: "number"
          }, null, 8, ["modelValue"]),
          O("span", NN, fe(g(r)(`s${g(Ye)[g(i)]}`)), 1)
        ])) : X("", !0)
      ])) : X("", !0),
      g(Ye)[g(p)] == null ? (E(), Ue(Jd, {
        key: 1,
        type: g(i),
        weekdays: g(l),
        "onUpdate:weekdays": m[4] || (m[4] = (b) => Ie(l) ? l.value = b : null),
        weekOrdinal: g(c),
        "onUpdate:weekOrdinal": m[5] || (m[5] = (b) => Ie(c) ? c.value = b : null),
        monthDate: g(u),
        "onUpdate:monthDate": m[6] || (m[6] = (b) => Ie(u) ? u.value = b : null),
        yearMonths: g(d),
        "onUpdate:yearMonths": m[7] || (m[7] = (b) => Ie(d) ? d.value = b : null)
      }, null, 8, ["type", "weekdays", "weekOrdinal", "monthDate", "yearMonths"])) : X("", !0),
      g(i) !== -1 ? (E(), Ue(P2, {
        key: 2,
        modelValue: g(a).due,
        "onUpdate:modelValue": m[8] || (m[8] = (b) => g(a).due = b)
      }, null, 8, ["modelValue"])) : X("", !0)
    ]));
  }
}), AN = { class: "relative border rounded border-light-3 py-4 px-3" }, CN = { class: "p3-b absolute left-2 -top-3 text-dark-3 bg-light-5" }, Rr = /* @__PURE__ */ Se({
  __name: "OuterBlock",
  props: {
    title: {}
  },
  setup(e) {
    return (t, n) => (E(), T("div", AN, [
      O("div", CN, fe(t.title), 1),
      Nt(t.$slots, "default")
    ]));
  }
});
function cd(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: SN } = Object.prototype, { getPrototypeOf: Bo } = Object, Xa = ((e) => (t) => {
  const n = SN.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Jt = (e) => (e = e.toLowerCase(), (t) => Xa(t) === e), Ja = (e) => (t) => typeof t === e, { isArray: Er } = Array, Gr = Ja("undefined");
function PN(e) {
  return e !== null && !Gr(e) && e.constructor !== null && !Gr(e.constructor) && kt(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const dd = Jt("ArrayBuffer");
function MN(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && dd(e.buffer), t;
}
const LN = Ja("string"), kt = Ja("function"), fd = Ja("number"), Qa = (e) => e !== null && typeof e == "object", xN = (e) => e === !0 || e === !1, pa = (e) => {
  if (Xa(e) !== "object")
    return !1;
  const t = Bo(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, RN = Jt("Date"), FN = Jt("File"), YN = Jt("Blob"), VN = Jt("FileList"), UN = (e) => Qa(e) && kt(e.pipe), jN = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || kt(e.append) && ((t = Xa(e)) === "formdata" || // detect form-data instance
  t === "object" && kt(e.toString) && e.toString() === "[object FormData]"));
}, BN = Jt("URLSearchParams"), HN = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Jr(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, a;
  if (typeof e != "object" && (e = [e]), Er(e))
    for (r = 0, a = e.length; r < a; r++)
      t.call(null, e[r], r, e);
  else {
    const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e), o = s.length;
    let i;
    for (r = 0; r < o; r++)
      i = s[r], t.call(null, e[i], i, e);
  }
}
function vd(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, a;
  for (; r-- > 0; )
    if (a = n[r], t === a.toLowerCase())
      return a;
  return null;
}
const pd = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), md = (e) => !Gr(e) && e !== pd;
function Us() {
  const { caseless: e } = md(this) && this || {}, t = {}, n = (r, a) => {
    const s = e && vd(t, a) || a;
    pa(t[s]) && pa(r) ? t[s] = Us(t[s], r) : pa(r) ? t[s] = Us({}, r) : Er(r) ? t[s] = r.slice() : t[s] = r;
  };
  for (let r = 0, a = arguments.length; r < a; r++)
    arguments[r] && Jr(arguments[r], n);
  return t;
}
const WN = (e, t, n, { allOwnKeys: r } = {}) => (Jr(t, (a, s) => {
  n && kt(a) ? e[s] = cd(a, n) : e[s] = a;
}, { allOwnKeys: r }), e), GN = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), KN = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, zN = (e, t, n, r) => {
  let a, s, o;
  const i = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (a = Object.getOwnPropertyNames(e), s = a.length; s-- > 0; )
      o = a[s], (!r || r(o, e, t)) && !i[o] && (t[o] = e[o], i[o] = !0);
    e = n !== !1 && Bo(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, qN = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, ZN = (e) => {
  if (!e)
    return null;
  if (Er(e))
    return e;
  let t = e.length;
  if (!fd(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, XN = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Bo(Uint8Array)), JN = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let a;
  for (; (a = r.next()) && !a.done; ) {
    const s = a.value;
    t.call(e, s[0], s[1]);
  }
}, QN = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, eI = Jt("HTMLFormElement"), tI = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, a) {
    return r.toUpperCase() + a;
  }
), Kl = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), nI = Jt("RegExp"), hd = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  Jr(n, (a, s) => {
    let o;
    (o = t(a, s, e)) !== !1 && (r[s] = o || a);
  }), Object.defineProperties(e, r);
}, rI = (e) => {
  hd(e, (t, n) => {
    if (kt(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (kt(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, aI = (e, t) => {
  const n = {}, r = (a) => {
    a.forEach((s) => {
      n[s] = !0;
    });
  };
  return Er(e) ? r(e) : r(String(e).split(t)), n;
}, sI = () => {
}, oI = (e, t) => (e = +e, Number.isFinite(e) ? e : t), vs = "abcdefghijklmnopqrstuvwxyz", zl = "0123456789", gd = {
  DIGIT: zl,
  ALPHA: vs,
  ALPHA_DIGIT: vs + vs.toUpperCase() + zl
}, iI = (e = 16, t = gd.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function lI(e) {
  return !!(e && kt(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const uI = (e) => {
  const t = new Array(10), n = (r, a) => {
    if (Qa(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[a] = r;
        const s = Er(r) ? [] : {};
        return Jr(r, (o, i) => {
          const l = n(o, a + 1);
          !Gr(l) && (s[i] = l);
        }), t[a] = void 0, s;
      }
    }
    return r;
  };
  return n(e, 0);
}, cI = Jt("AsyncFunction"), dI = (e) => e && (Qa(e) || kt(e)) && kt(e.then) && kt(e.catch), U = {
  isArray: Er,
  isArrayBuffer: dd,
  isBuffer: PN,
  isFormData: jN,
  isArrayBufferView: MN,
  isString: LN,
  isNumber: fd,
  isBoolean: xN,
  isObject: Qa,
  isPlainObject: pa,
  isUndefined: Gr,
  isDate: RN,
  isFile: FN,
  isBlob: YN,
  isRegExp: nI,
  isFunction: kt,
  isStream: UN,
  isURLSearchParams: BN,
  isTypedArray: XN,
  isFileList: VN,
  forEach: Jr,
  merge: Us,
  extend: WN,
  trim: HN,
  stripBOM: GN,
  inherits: KN,
  toFlatObject: zN,
  kindOf: Xa,
  kindOfTest: Jt,
  endsWith: qN,
  toArray: ZN,
  forEachEntry: JN,
  matchAll: QN,
  isHTMLForm: eI,
  hasOwnProperty: Kl,
  hasOwnProp: Kl,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: hd,
  freezeMethods: rI,
  toObjectSet: aI,
  toCamelCase: tI,
  noop: sI,
  toFiniteNumber: oI,
  findKey: vd,
  global: pd,
  isContextDefined: md,
  ALPHABET: gd,
  generateString: iI,
  isSpecCompliantForm: lI,
  toJSONObject: uI,
  isAsyncFn: cI,
  isThenable: dI
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
const _d = Ne.prototype, bd = {};
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
Object.defineProperty(_d, "isAxiosError", { value: !0 });
Ne.from = (e, t, n, r, a, s) => {
  const o = Object.create(_d);
  return U.toFlatObject(e, o, function(l) {
    return l !== Error.prototype;
  }, (i) => i !== "isAxiosError"), Ne.call(o, e.message, t, n, r, a), o.cause = e, o.name = e.name, s && Object.assign(o, s), o;
};
const fI = null;
function js(e) {
  return U.isPlainObject(e) || U.isArray(e);
}
function yd(e) {
  return U.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ql(e, t, n) {
  return e ? e.concat(t).map(function(a, s) {
    return a = yd(a), !n && s ? "[" + a + "]" : a;
  }).join(n ? "." : "") : t;
}
function vI(e) {
  return U.isArray(e) && !e.some(js);
}
const pI = U.toFlatObject(U, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function es(e, t, n) {
  if (!U.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = U.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(m, b) {
    return !U.isUndefined(b[m]);
  });
  const r = n.metaTokens, a = n.visitor || u, s = n.dots, o = n.indexes, l = (n.Blob || typeof Blob < "u" && Blob) && U.isSpecCompliantForm(t);
  if (!U.isFunction(a))
    throw new TypeError("visitor must be a function");
  function c(h) {
    if (h === null)
      return "";
    if (U.isDate(h))
      return h.toISOString();
    if (!l && U.isBlob(h))
      throw new Ne("Blob is not supported. Use a Buffer instead.");
    return U.isArrayBuffer(h) || U.isTypedArray(h) ? l && typeof Blob == "function" ? new Blob([h]) : Buffer.from(h) : h;
  }
  function u(h, m, b) {
    let f = h;
    if (h && !b && typeof h == "object") {
      if (U.endsWith(m, "{}"))
        m = r ? m : m.slice(0, -2), h = JSON.stringify(h);
      else if (U.isArray(h) && vI(h) || (U.isFileList(h) || U.endsWith(m, "[]")) && (f = U.toArray(h)))
        return m = yd(m), f.forEach(function(k, w) {
          !(U.isUndefined(k) || k === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? ql([m], w, s) : o === null ? m : m + "[]",
            c(k)
          );
        }), !1;
    }
    return js(h) ? !0 : (t.append(ql(b, m, s), c(h)), !1);
  }
  const d = [], v = Object.assign(pI, {
    defaultVisitor: u,
    convertValue: c,
    isVisitable: js
  });
  function p(h, m) {
    if (!U.isUndefined(h)) {
      if (d.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      d.push(h), U.forEach(h, function(f, y) {
        (!(U.isUndefined(f) || f === null) && a.call(
          t,
          f,
          U.isString(y) ? y.trim() : y,
          m,
          v
        )) === !0 && p(f, m ? m.concat(y) : [y]);
      }), d.pop();
    }
  }
  if (!U.isObject(e))
    throw new TypeError("data must be an object");
  return p(e), t;
}
function Zl(e) {
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
function Ho(e, t) {
  this._pairs = [], e && es(e, this, t);
}
const wd = Ho.prototype;
wd.append = function(t, n) {
  this._pairs.push([t, n]);
};
wd.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Zl);
  } : Zl;
  return this._pairs.map(function(a) {
    return n(a[0]) + "=" + n(a[1]);
  }, "").join("&");
};
function mI(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Ed(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || mI, a = n && n.serialize;
  let s;
  if (a ? s = a(t, n) : s = U.isURLSearchParams(t) ? t.toString() : new Ho(t, n).toString(r), s) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
class hI {
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
const Xl = hI, Dd = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, gI = typeof URLSearchParams < "u" ? URLSearchParams : Ho, _I = typeof FormData < "u" ? FormData : null, bI = typeof Blob < "u" ? Blob : null, yI = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), wI = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), Wt = {
  isBrowser: !0,
  classes: {
    URLSearchParams: gI,
    FormData: _I,
    Blob: bI
  },
  isStandardBrowserEnv: yI,
  isStandardBrowserWebWorkerEnv: wI,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function EI(e, t) {
  return es(e, new Wt.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, a, s) {
      return Wt.isNode && U.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function DI(e) {
  return U.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function OI(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const a = n.length;
  let s;
  for (r = 0; r < a; r++)
    s = n[r], t[s] = e[s];
  return t;
}
function Od(e) {
  function t(n, r, a, s) {
    let o = n[s++];
    const i = Number.isFinite(+o), l = s >= n.length;
    return o = !o && U.isArray(a) ? a.length : o, l ? (U.hasOwnProp(a, o) ? a[o] = [a[o], r] : a[o] = r, !i) : ((!a[o] || !U.isObject(a[o])) && (a[o] = []), t(n, r, a[o], s) && U.isArray(a[o]) && (a[o] = OI(a[o])), !i);
  }
  if (U.isFormData(e) && U.isFunction(e.entries)) {
    const n = {};
    return U.forEachEntry(e, (r, a) => {
      t(DI(r), a, n, 0);
    }), n;
  }
  return null;
}
function $I(e, t, n) {
  if (U.isString(e))
    try {
      return (t || JSON.parse)(e), U.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const Wo = {
  transitional: Dd,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", a = r.indexOf("application/json") > -1, s = U.isObject(t);
    if (s && U.isHTMLForm(t) && (t = new FormData(t)), U.isFormData(t))
      return a && a ? JSON.stringify(Od(t)) : t;
    if (U.isArrayBuffer(t) || U.isBuffer(t) || U.isStream(t) || U.isFile(t) || U.isBlob(t))
      return t;
    if (U.isArrayBufferView(t))
      return t.buffer;
    if (U.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let i;
    if (s) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return EI(t, this.formSerializer).toString();
      if ((i = U.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return es(
          i ? { "files[]": t } : t,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return s || a ? (n.setContentType("application/json", !1), $I(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || Wo.transitional, r = n && n.forcedJSONParsing, a = this.responseType === "json";
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
    FormData: Wt.classes.FormData,
    Blob: Wt.classes.Blob
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
  Wo.headers[e] = {};
});
const Go = Wo, TI = U.toObjectSet([
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
]), kI = (e) => {
  const t = {};
  let n, r, a;
  return e && e.split(`
`).forEach(function(o) {
    a = o.indexOf(":"), n = o.substring(0, a).trim().toLowerCase(), r = o.substring(a + 1).trim(), !(!n || t[n] && TI[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Jl = Symbol("internals");
function Ar(e) {
  return e && String(e).trim().toLowerCase();
}
function ma(e) {
  return e === !1 || e == null ? e : U.isArray(e) ? e.map(ma) : String(e);
}
function NI(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const II = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ps(e, t, n, r, a) {
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
function CI(e, t) {
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
class ts {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const a = this;
    function s(i, l, c) {
      const u = Ar(l);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const d = U.findKey(a, u);
      (!d || a[d] === void 0 || c === !0 || c === void 0 && a[d] !== !1) && (a[d || l] = ma(i));
    }
    const o = (i, l) => U.forEach(i, (c, u) => s(c, u, l));
    return U.isPlainObject(t) || t instanceof this.constructor ? o(t, n) : U.isString(t) && (t = t.trim()) && !II(t) ? o(kI(t), n) : t != null && s(n, t, r), this;
  }
  get(t, n) {
    if (t = Ar(t), t) {
      const r = U.findKey(this, t);
      if (r) {
        const a = this[r];
        if (!n)
          return a;
        if (n === !0)
          return NI(a);
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
      return !!(r && this[r] !== void 0 && (!n || ps(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let a = !1;
    function s(o) {
      if (o = Ar(o), o) {
        const i = U.findKey(r, o);
        i && (!n || ps(r, r[i], i, n)) && (delete r[i], a = !0);
      }
    }
    return U.isArray(t) ? t.forEach(s) : s(t), a;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, a = !1;
    for (; r--; ) {
      const s = n[r];
      (!t || ps(this, this[s], s, t, !0)) && (delete this[s], a = !0);
    }
    return a;
  }
  normalize(t) {
    const n = this, r = {};
    return U.forEach(this, (a, s) => {
      const o = U.findKey(r, s);
      if (o) {
        n[o] = ma(a), delete n[s];
        return;
      }
      const i = t ? AI(s) : String(s).trim();
      i !== s && delete n[s], n[i] = ma(a), r[i] = !0;
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
    const r = (this[Jl] = this[Jl] = {
      accessors: {}
    }).accessors, a = this.prototype;
    function s(o) {
      const i = Ar(o);
      r[i] || (CI(a, o), r[i] = !0);
    }
    return U.isArray(t) ? t.forEach(s) : s(t), this;
  }
}
ts.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
U.reduceDescriptors(ts.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
U.freezeMethods(ts);
const rn = ts;
function ms(e, t) {
  const n = this || Go, r = t || n, a = rn.from(r.headers);
  let s = r.data;
  return U.forEach(e, function(i) {
    s = i.call(n, s, a.normalize(), t ? t.status : void 0);
  }), a.normalize(), s;
}
function $d(e) {
  return !!(e && e.__CANCEL__);
}
function Qr(e, t, n) {
  Ne.call(this, e ?? "canceled", Ne.ERR_CANCELED, t, n), this.name = "CanceledError";
}
U.inherits(Qr, Ne, {
  __CANCEL__: !0
});
function SI(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new Ne(
    "Request failed with status code " + n.status,
    [Ne.ERR_BAD_REQUEST, Ne.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const PI = Wt.isStandardBrowserEnv ? (
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
function LI(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Td(e, t) {
  return e && !MI(t) ? LI(e, t) : t;
}
const xI = Wt.isStandardBrowserEnv ? (
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
function RI(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function FI(e, t) {
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
function Ql(e, t) {
  let n = 0;
  const r = FI(50, 250);
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
const YI = typeof XMLHttpRequest < "u", VI = YI && function(e) {
  return new Promise(function(n, r) {
    let a = e.data;
    const s = rn.from(e.headers).normalize(), o = e.responseType;
    let i;
    function l() {
      e.cancelToken && e.cancelToken.unsubscribe(i), e.signal && e.signal.removeEventListener("abort", i);
    }
    let c;
    U.isFormData(a) && (Wt.isStandardBrowserEnv || Wt.isStandardBrowserWebWorkerEnv ? s.setContentType(!1) : s.getContentType(/^\s*multipart\/form-data/) ? U.isString(c = s.getContentType()) && s.setContentType(c.replace(/^\s*(multipart\/form-data);+/, "$1")) : s.setContentType("multipart/form-data"));
    let u = new XMLHttpRequest();
    if (e.auth) {
      const h = e.auth.username || "", m = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      s.set("Authorization", "Basic " + btoa(h + ":" + m));
    }
    const d = Td(e.baseURL, e.url);
    u.open(e.method.toUpperCase(), Ed(d, e.params, e.paramsSerializer), !0), u.timeout = e.timeout;
    function v() {
      if (!u)
        return;
      const h = rn.from(
        "getAllResponseHeaders" in u && u.getAllResponseHeaders()
      ), b = {
        data: !o || o === "text" || o === "json" ? u.responseText : u.response,
        status: u.status,
        statusText: u.statusText,
        headers: h,
        config: e,
        request: u
      };
      SI(function(y) {
        n(y), l();
      }, function(y) {
        r(y), l();
      }, b), u = null;
    }
    if ("onloadend" in u ? u.onloadend = v : u.onreadystatechange = function() {
      !u || u.readyState !== 4 || u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0) || setTimeout(v);
    }, u.onabort = function() {
      u && (r(new Ne("Request aborted", Ne.ECONNABORTED, e, u)), u = null);
    }, u.onerror = function() {
      r(new Ne("Network Error", Ne.ERR_NETWORK, e, u)), u = null;
    }, u.ontimeout = function() {
      let m = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const b = e.transitional || Dd;
      e.timeoutErrorMessage && (m = e.timeoutErrorMessage), r(new Ne(
        m,
        b.clarifyTimeoutError ? Ne.ETIMEDOUT : Ne.ECONNABORTED,
        e,
        u
      )), u = null;
    }, Wt.isStandardBrowserEnv) {
      const h = (e.withCredentials || xI(d)) && e.xsrfCookieName && PI.read(e.xsrfCookieName);
      h && s.set(e.xsrfHeaderName, h);
    }
    a === void 0 && s.setContentType(null), "setRequestHeader" in u && U.forEach(s.toJSON(), function(m, b) {
      u.setRequestHeader(b, m);
    }), U.isUndefined(e.withCredentials) || (u.withCredentials = !!e.withCredentials), o && o !== "json" && (u.responseType = e.responseType), typeof e.onDownloadProgress == "function" && u.addEventListener("progress", Ql(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", Ql(e.onUploadProgress)), (e.cancelToken || e.signal) && (i = (h) => {
      u && (r(!h || h.type ? new Qr(null, e, u) : h), u.abort(), u = null);
    }, e.cancelToken && e.cancelToken.subscribe(i), e.signal && (e.signal.aborted ? i() : e.signal.addEventListener("abort", i)));
    const p = RI(d);
    if (p && Wt.protocols.indexOf(p) === -1) {
      r(new Ne("Unsupported protocol " + p + ":", Ne.ERR_BAD_REQUEST, e));
      return;
    }
    u.send(a || null);
  });
}, Bs = {
  http: fI,
  xhr: VI
};
U.forEach(Bs, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const eu = (e) => `- ${e}`, UI = (e) => U.isFunction(e) || e === null || e === !1, kd = {
  getAdapter: (e) => {
    e = U.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const a = {};
    for (let s = 0; s < t; s++) {
      n = e[s];
      let o;
      if (r = n, !UI(n) && (r = Bs[(o = String(n)).toLowerCase()], r === void 0))
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
` + s.map(eu).join(`
`) : " " + eu(s[0]) : "as no adapter specified";
      throw new Ne(
        "There is no suitable adapter to dispatch the request " + o,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: Bs
};
function hs(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Qr(null, e);
}
function tu(e) {
  return hs(e), e.headers = rn.from(e.headers), e.data = ms.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), kd.getAdapter(e.adapter || Go.adapter)(e).then(function(r) {
    return hs(e), r.data = ms.call(
      e,
      e.transformResponse,
      r
    ), r.headers = rn.from(r.headers), r;
  }, function(r) {
    return $d(r) || (hs(e), r && r.response && (r.response.data = ms.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = rn.from(r.response.headers))), Promise.reject(r);
  });
}
const nu = (e) => e instanceof rn ? e.toJSON() : e;
function fr(e, t) {
  t = t || {};
  const n = {};
  function r(c, u, d) {
    return U.isPlainObject(c) && U.isPlainObject(u) ? U.merge.call({ caseless: d }, c, u) : U.isPlainObject(u) ? U.merge({}, u) : U.isArray(u) ? u.slice() : u;
  }
  function a(c, u, d) {
    if (U.isUndefined(u)) {
      if (!U.isUndefined(c))
        return r(void 0, c, d);
    } else
      return r(c, u, d);
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
    headers: (c, u) => a(nu(c), nu(u), !0)
  };
  return U.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const d = l[u] || a, v = d(e[u], t[u], u);
    U.isUndefined(v) && d !== i || (n[u] = v);
  }), n;
}
const Nd = "1.5.1", Ko = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Ko[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const ru = {};
Ko.transitional = function(t, n, r) {
  function a(s, o) {
    return "[Axios v" + Nd + "] Transitional option '" + s + "'" + o + (r ? ". " + r : "");
  }
  return (s, o, i) => {
    if (t === !1)
      throw new Ne(
        a(o, " has been removed" + (n ? " in " + n : "")),
        Ne.ERR_DEPRECATED
      );
    return n && !ru[o] && (ru[o] = !0, console.warn(
      a(
        o,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(s, o, i) : !0;
  };
};
function jI(e, t, n) {
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
const Hs = {
  assertOptions: jI,
  validators: Ko
}, hn = Hs.validators;
class Ra {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Xl(),
      response: new Xl()
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
    r !== void 0 && Hs.assertOptions(r, {
      silentJSONParsing: hn.transitional(hn.boolean),
      forcedJSONParsing: hn.transitional(hn.boolean),
      clarifyTimeoutError: hn.transitional(hn.boolean)
    }, !1), a != null && (U.isFunction(a) ? n.paramsSerializer = {
      serialize: a
    } : Hs.assertOptions(a, {
      encode: hn.function,
      serialize: hn.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let o = s && U.merge(
      s.common,
      s[n.method]
    );
    s && U.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (h) => {
        delete s[h];
      }
    ), n.headers = rn.concat(o, s);
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
      const h = [tu.bind(this), void 0];
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
      } catch (b) {
        m.call(this, b);
        break;
      }
    }
    try {
      u = tu.call(this, p);
    } catch (h) {
      return Promise.reject(h);
    }
    for (d = 0, v = c.length; d < v; )
      u = u.then(c[d++], c[d++]);
    return u;
  }
  getUri(t) {
    t = fr(this.defaults, t);
    const n = Td(t.baseURL, t.url);
    return Ed(n, t.params, t.paramsSerializer);
  }
}
U.forEach(["delete", "get", "head", "options"], function(t) {
  Ra.prototype[t] = function(n, r) {
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
  Ra.prototype[t] = n(), Ra.prototype[t + "Form"] = n(!0);
});
const ha = Ra;
class zo {
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
      r.reason || (r.reason = new Qr(s, o, i), n(r.reason));
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
      token: new zo(function(a) {
        t = a;
      }),
      cancel: t
    };
  }
}
const BI = zo;
function HI(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function WI(e) {
  return U.isObject(e) && e.isAxiosError === !0;
}
const Ws = {
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
Object.entries(Ws).forEach(([e, t]) => {
  Ws[t] = e;
});
const GI = Ws;
function Id(e) {
  const t = new ha(e), n = cd(ha.prototype.request, t);
  return U.extend(n, ha.prototype, t, { allOwnKeys: !0 }), U.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(a) {
    return Id(fr(e, a));
  }, n;
}
const Je = Id(Go);
Je.Axios = ha;
Je.CanceledError = Qr;
Je.CancelToken = BI;
Je.isCancel = $d;
Je.VERSION = Nd;
Je.toFormData = es;
Je.AxiosError = Ne;
Je.Cancel = Je.CanceledError;
Je.all = function(t) {
  return Promise.all(t);
};
Je.spread = HI;
Je.isAxiosError = WI;
Je.mergeConfig = fr;
Je.AxiosHeaders = rn;
Je.formToJSON = (e) => Od(U.isHTMLForm(e) ? new FormData(e) : e);
Je.getAdapter = kd.getAdapter;
Je.HttpStatusCode = GI;
Je.default = Je;
const qo = Je, KI = ["width", "height", "fill", "transform"], zI = { key: 0 }, qI = /* @__PURE__ */ O("path", { d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm48.49-108.49a12,12,0,0,1,0,17l-40,40a12,12,0,0,1-17,0l-40-40a12,12,0,0,1,17-17L128,135l31.51-31.52A12,12,0,0,1,176.49,103.51Z" }, null, -1), ZI = [
  qI
], XI = { key: 1 }, JI = /* @__PURE__ */ O("path", {
  d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
  opacity: "0.2"
}, null, -1), QI = /* @__PURE__ */ O("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-109.66a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L128,140.69l34.34-34.35A8,8,0,0,1,173.66,106.34Z" }, null, -1), eA = [
  JI,
  QI
], tA = { key: 2 }, nA = /* @__PURE__ */ O("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,93.66-40,40a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L128,140.69l34.34-34.35a8,8,0,0,1,11.32,11.32Z" }, null, -1), rA = [
  nA
], aA = { key: 3 }, sA = /* @__PURE__ */ O("path", { d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm44.24-110.24a6,6,0,0,1,0,8.48l-40,40a6,6,0,0,1-8.48,0l-40-40a6,6,0,0,1,8.48-8.48L128,143.51l35.76-35.75A6,6,0,0,1,172.24,107.76Z" }, null, -1), oA = [
  sA
], iA = { key: 4 }, lA = /* @__PURE__ */ O("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-109.66a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L128,140.69l34.34-34.35A8,8,0,0,1,173.66,106.34Z" }, null, -1), uA = [
  lA
], cA = { key: 5 }, dA = /* @__PURE__ */ O("path", { d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm42.83-110.83a4,4,0,0,1,0,5.66l-40,40a4,4,0,0,1-5.66,0l-40-40a4,4,0,0,1,5.66-5.66L128,146.34l37.17-37.17A4,4,0,0,1,170.83,109.17Z" }, null, -1), fA = [
  dA
], vA = {
  name: "PhCaretCircleDown"
}, pA = /* @__PURE__ */ Se({
  ...vA,
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
    const t = e, n = Fe("weight", "regular"), r = Fe("size", "1em"), a = Fe("color", "currentColor"), s = Fe("mirrored", !1), o = C(() => t.weight ?? n), i = C(() => t.size ?? r), l = C(() => t.color ?? a), c = C(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : s ? "scale(-1, 1)" : void 0);
    return (u, d) => (E(), T("svg", ln({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: i.value,
      height: i.value,
      fill: l.value,
      transform: c.value
    }, u.$attrs), [
      Nt(u.$slots, "default"),
      o.value === "bold" ? (E(), T("g", zI, ZI)) : o.value === "duotone" ? (E(), T("g", XI, eA)) : o.value === "fill" ? (E(), T("g", tA, rA)) : o.value === "light" ? (E(), T("g", aA, oA)) : o.value === "regular" ? (E(), T("g", iA, uA)) : o.value === "thin" ? (E(), T("g", cA, fA)) : X("", !0)
    ], 16, KI));
  }
}), mA = ["width", "height", "fill", "transform"], hA = { key: 0 }, gA = /* @__PURE__ */ O("path", { d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm32.49-92.49a12,12,0,0,1,0,17l-40,40a12,12,0,0,1-17-17L135,128,103.51,96.49a12,12,0,0,1,17-17Z" }, null, -1), _A = [
  gA
], bA = { key: 1 }, yA = /* @__PURE__ */ O("path", {
  d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
  opacity: "0.2"
}, null, -1), wA = /* @__PURE__ */ O("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm29.66-93.66a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32-11.32L140.69,128,106.34,93.66a8,8,0,0,1,11.32-11.32Z" }, null, -1), EA = [
  yA,
  wA
], DA = { key: 2 }, OA = /* @__PURE__ */ O("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm29.66,109.66-40,40a8,8,0,0,1-11.32-11.32L140.69,128,106.34,93.66a8,8,0,0,1,11.32-11.32l40,40A8,8,0,0,1,157.66,133.66Z" }, null, -1), $A = [
  OA
], TA = { key: 3 }, kA = /* @__PURE__ */ O("path", { d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm28.24-94.24a6,6,0,0,1,0,8.48l-40,40a6,6,0,0,1-8.48-8.48L143.51,128,107.76,92.24a6,6,0,0,1,8.48-8.48Z" }, null, -1), NA = [
  kA
], IA = { key: 4 }, AA = /* @__PURE__ */ O("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm29.66-93.66a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32-11.32L140.69,128,106.34,93.66a8,8,0,0,1,11.32-11.32Z" }, null, -1), CA = [
  AA
], SA = { key: 5 }, PA = /* @__PURE__ */ O("path", { d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm26.83-94.83a4,4,0,0,1,0,5.66l-40,40a4,4,0,0,1-5.66-5.66L146.34,128,109.17,90.83a4,4,0,0,1,5.66-5.66Z" }, null, -1), MA = [
  PA
], LA = {
  name: "PhCaretCircleRight"
}, xA = /* @__PURE__ */ Se({
  ...LA,
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
    const t = e, n = Fe("weight", "regular"), r = Fe("size", "1em"), a = Fe("color", "currentColor"), s = Fe("mirrored", !1), o = C(() => t.weight ?? n), i = C(() => t.size ?? r), l = C(() => t.color ?? a), c = C(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : s ? "scale(-1, 1)" : void 0);
    return (u, d) => (E(), T("svg", ln({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: i.value,
      height: i.value,
      fill: l.value,
      transform: c.value
    }, u.$attrs), [
      Nt(u.$slots, "default"),
      o.value === "bold" ? (E(), T("g", hA, _A)) : o.value === "duotone" ? (E(), T("g", bA, EA)) : o.value === "fill" ? (E(), T("g", DA, $A)) : o.value === "light" ? (E(), T("g", TA, NA)) : o.value === "regular" ? (E(), T("g", IA, CA)) : o.value === "thin" ? (E(), T("g", SA, MA)) : X("", !0)
    ], 16, mA));
  }
}), RA = ["width", "height", "fill", "transform"], FA = { key: 0 }, YA = /* @__PURE__ */ O("path", { d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm48.49-76.49a12,12,0,0,1-17,17L128,121,96.49,152.49a12,12,0,0,1-17-17l40-40a12,12,0,0,1,17,0Z" }, null, -1), VA = [
  YA
], UA = { key: 1 }, jA = /* @__PURE__ */ O("path", {
  d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
  opacity: "0.2"
}, null, -1), BA = /* @__PURE__ */ O("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-77.66a8,8,0,0,1-11.32,11.32L128,115.31,93.66,149.66a8,8,0,0,1-11.32-11.32l40-40a8,8,0,0,1,11.32,0Z" }, null, -1), HA = [
  jA,
  BA
], WA = { key: 2 }, GA = /* @__PURE__ */ O("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,125.66a8,8,0,0,1-11.32,0L128,115.31,93.66,149.66a8,8,0,0,1-11.32-11.32l40-40a8,8,0,0,1,11.32,0l40,40A8,8,0,0,1,173.66,149.66Z" }, null, -1), KA = [
  GA
], zA = { key: 3 }, qA = /* @__PURE__ */ O("path", { d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm44.24-78.24a6,6,0,1,1-8.48,8.48L128,112.49,92.24,148.24a6,6,0,0,1-8.48-8.48l40-40a6,6,0,0,1,8.48,0Z" }, null, -1), ZA = [
  qA
], XA = { key: 4 }, JA = /* @__PURE__ */ O("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-77.66a8,8,0,0,1-11.32,11.32L128,115.31,93.66,149.66a8,8,0,0,1-11.32-11.32l40-40a8,8,0,0,1,11.32,0Z" }, null, -1), QA = [
  JA
], eC = { key: 5 }, tC = /* @__PURE__ */ O("path", { d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm42.83-78.83a4,4,0,0,1-5.66,5.66L128,109.66,90.83,146.83a4,4,0,0,1-5.66-5.66l40-40a4,4,0,0,1,5.66,0Z" }, null, -1), nC = [
  tC
], rC = {
  name: "PhCaretCircleUp"
}, aC = /* @__PURE__ */ Se({
  ...rC,
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
    const t = e, n = Fe("weight", "regular"), r = Fe("size", "1em"), a = Fe("color", "currentColor"), s = Fe("mirrored", !1), o = C(() => t.weight ?? n), i = C(() => t.size ?? r), l = C(() => t.color ?? a), c = C(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : s ? "scale(-1, 1)" : void 0);
    return (u, d) => (E(), T("svg", ln({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: i.value,
      height: i.value,
      fill: l.value,
      transform: c.value
    }, u.$attrs), [
      Nt(u.$slots, "default"),
      o.value === "bold" ? (E(), T("g", FA, VA)) : o.value === "duotone" ? (E(), T("g", UA, HA)) : o.value === "fill" ? (E(), T("g", WA, KA)) : o.value === "light" ? (E(), T("g", zA, ZA)) : o.value === "regular" ? (E(), T("g", XA, QA)) : o.value === "thin" ? (E(), T("g", eC, nC)) : X("", !0)
    ], 16, RA));
  }
}), sC = ["width", "height", "fill", "transform"], oC = { key: 0 }, iC = /* @__PURE__ */ O("path", { d: "M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" }, null, -1), lC = [
  iC
], uC = { key: 1 }, cC = /* @__PURE__ */ O("path", {
  d: "M232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Z",
  opacity: "0.2"
}, null, -1), dC = /* @__PURE__ */ O("path", { d: "M205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z" }, null, -1), fC = [
  cC,
  dC
], vC = { key: 2 }, pC = /* @__PURE__ */ O("path", { d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z" }, null, -1), mC = [
  pC
], hC = { key: 3 }, gC = /* @__PURE__ */ O("path", { d: "M228.24,76.24l-128,128a6,6,0,0,1-8.48,0l-56-56a6,6,0,0,1,8.48-8.48L96,191.51,219.76,67.76a6,6,0,0,1,8.48,8.48Z" }, null, -1), _C = [
  gC
], bC = { key: 4 }, yC = /* @__PURE__ */ O("path", { d: "M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" }, null, -1), wC = [
  yC
], EC = { key: 5 }, DC = /* @__PURE__ */ O("path", { d: "M226.83,74.83l-128,128a4,4,0,0,1-5.66,0l-56-56a4,4,0,0,1,5.66-5.66L96,194.34,221.17,69.17a4,4,0,1,1,5.66,5.66Z" }, null, -1), OC = [
  DC
], $C = {
  name: "PhCheck"
}, TC = /* @__PURE__ */ Se({
  ...$C,
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
    const t = e, n = Fe("weight", "regular"), r = Fe("size", "1em"), a = Fe("color", "currentColor"), s = Fe("mirrored", !1), o = C(() => t.weight ?? n), i = C(() => t.size ?? r), l = C(() => t.color ?? a), c = C(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : s ? "scale(-1, 1)" : void 0);
    return (u, d) => (E(), T("svg", ln({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: i.value,
      height: i.value,
      fill: l.value,
      transform: c.value
    }, u.$attrs), [
      Nt(u.$slots, "default"),
      o.value === "bold" ? (E(), T("g", oC, lC)) : o.value === "duotone" ? (E(), T("g", uC, fC)) : o.value === "fill" ? (E(), T("g", vC, mC)) : o.value === "light" ? (E(), T("g", hC, _C)) : o.value === "regular" ? (E(), T("g", bC, wC)) : o.value === "thin" ? (E(), T("g", EC, OC)) : X("", !0)
    ], 16, sC));
  }
}), kC = { class: "py-1 flex gap-1 items-center flex-col justify-center" }, NC = { class: "border-b border-light-3 flex-1 flex gap-2 pb-2 w-full" }, IC = { class: "flex justify-between w-full items-center" }, AC = { class: "p4-r flex-1" }, CC = {
  key: 0,
  class: "flex flex-col gap-2 pl-4 w-full"
}, Zo = /* @__PURE__ */ Se({
  __name: "EventActionTargetItem",
  props: {
    target: {},
    targets: {}
  },
  setup(e) {
    const t = Fe("addTarget"), n = te(!0);
    return (r, a) => {
      var s, o, i;
      return E(), T("div", kC, [
        O("div", NC, [
          (s = r.target) != null && s.children ? X("", !0) : (E(), T("div", {
            key: 0,
            class: "rounded p-0.5 border border-dark-3",
            onClick: a[0] || (a[0] = (l) => g(t)(r.target))
          }, [
            _e(g(TC), {
              size: "12",
              weight: "bold",
              class: Ze(["opacity-0 text-dark-2", {
                " opacity-100": r.targets.find((l) => l.id === r.target.id)
              }])
            }, null, 8, ["class"])
          ])),
          O("div", IC, [
            O("span", AC, fe(r.target.name), 1),
            (o = r.target) != null && o.children ? (E(), T("div", {
              key: 0,
              onClick: a[1] || (a[1] = (l) => n.value = !g(n)),
              class: "flex-shrink-0 cursor-pointer"
            }, [
              g(n) ? (E(), Ue(g(pA), {
                key: 0,
                size: 14
              })) : (E(), Ue(g(aC), {
                key: 1,
                size: 14
              }))
            ])) : X("", !0)
          ])
        ]),
        (i = r.target) != null && i.children && g(n) ? (E(), T("div", CC, [
          (E(!0), T(re, null, Ee(r.target.children, (l) => (E(), Ue(Zo, {
            target: l,
            targets: r.targets
          }, null, 8, ["target", "targets"]))), 256))
        ])) : X("", !0)
      ]);
    };
  }
}), SC = { class: "flex flex-col gap-2" }, PC = { class: "flex items-center gap-2 relative pt-2" }, MC = { class: "flex items-center gap-2" }, LC = /* @__PURE__ */ O("span", { class: "p4-b" }, "平台", -1), xC = /* @__PURE__ */ O("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), RC = ["value"], FC = {
  key: 0,
  class: "flex items-center gap-2"
}, YC = /* @__PURE__ */ O("span", { class: "p4-b" }, "層級", -1), VC = /* @__PURE__ */ O("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), UC = ["value"], jC = {
  key: 1,
  class: "flex items-center gap-2"
}, BC = /* @__PURE__ */ O("span", { class: "p4-b" }, "目標", -1), HC = /* @__PURE__ */ O("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), WC = ["value"], GC = {
  key: 0,
  class: "flex flex-col my-2"
}, KC = { class: "flex items-center gap-2 relative" }, zC = /* @__PURE__ */ O("span", { class: "p4-b" }, "指定目標", -1), qC = ["value"], ZC = { key: 0 }, XC = {
  key: 0,
  class: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex justify-center bg-dark-3 rounded bg-opacity-50 z-[2]"
}, JC = { class: "relative bg-light-5 rounded-xs shadow-01 w-4/5 p-4 h-fit top-4 max-h-[90%] flex flex-col" }, QC = /* @__PURE__ */ O("span", { class: "p1-b flex justify-center mb-1" }, "請選擇目標", -1), eS = { key: 0 }, tS = { class: "flex flex-col gap-2 mt-2 flex-1 overflow-y-auto" }, nS = { class: "flex gap-3 items-center justify-center mt-4" }, rS = {
  key: 2,
  class: "flex flex-col gap-2"
}, aS = { class: "flex items-center gap-2" }, sS = /* @__PURE__ */ O("span", { class: "p4-b" }, "執行", -1), oS = /* @__PURE__ */ O("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), iS = ["value"], lS = {
  key: 0,
  class: "flex gap-x-2 gap-y-3 flex-wrap"
}, uS = { class: "flex items-center gap-2" }, cS = /* @__PURE__ */ O("span", { class: "p4-b" }, "類型", -1), dS = /* @__PURE__ */ O("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), fS = ["value"], vS = {
  key: 0,
  class: "p4-r"
}, pS = {
  key: 0,
  class: "flex items-center gap-2"
}, mS = /* @__PURE__ */ O("span", { class: "p4-b" }, "調整", -1), hS = /* @__PURE__ */ O("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), gS = ["value"], _S = {
  key: 1,
  class: "flex items-center gap-2"
}, bS = {
  key: 0,
  class: "flex items-center gap-2 w-full"
}, yS = { class: "flex flex-col gap-2" }, wS = { class: "flex items-center gap-2" }, ES = /* @__PURE__ */ O("label", { for: "maxBudget" }, "設定預算上限", -1), DS = {
  key: 0,
  class: "flex gap-2 items-center"
}, OS = /* @__PURE__ */ O("span", null, "元", -1), Nn = "", $S = /* @__PURE__ */ Se({
  __name: "EventAction",
  setup(e) {
    const { t } = Za.global, n = Fe("eventData"), r = te(n.value.action ?? {}), a = te(!!Object.keys(r.value).length), s = te(!1);
    Ce(s, ($) => {
      var j, ne, Y, I, Z;
      (j = r.value.params) != null && j.limit || (Y = (ne = r.value) == null ? void 0 : ne.params) == null || delete Y.limit, $ || (Z = (I = r.value) == null ? void 0 : I.params) == null || delete Z.limit;
    }), Gs(() => {
      var $, j, ne, Y, I;
      (($ = r.value) == null ? void 0 : $.action) == ie.SetNewBudget || ((j = r.value) == null ? void 0 : j.action) == ie.IncreaseBudget || ((ne = r.value) == null ? void 0 : ne.action) == ie.LowerBudget || delete r.value.params, s.value = !!((I = (Y = r.value) == null ? void 0 : Y.params) != null && I.limit);
    }), Ce(
      r,
      ($) => {
        n.value.action = $;
      },
      { deep: !0 }
    );
    const o = C(() => {
      var $;
      return (($ = n.value.action) == null ? void 0 : $.client) == nt.Google ? Dt : gt;
    }), i = {
      [nt.Google]: {
        [Dt.Campaign]: {
          SetNewBudget: ie.SetNewBudget,
          IncreaseBudget: ie.IncreaseBudget,
          LowerBudget: ie.LowerBudget,
          OpenProject: ie.OpenProject,
          SuspendProject: ie.SuspendProject
        },
        [Dt.AdGroup]: {
          OpenProject: ie.OpenProject,
          SuspendProject: ie.SuspendProject
        },
        [Dt.AdTag]: {
          OpenProject: ie.OpenProject,
          SuspendProject: ie.SuspendProject
        },
        [Dt.Ad]: {
          OpenProject: ie.OpenProject,
          SuspendProject: ie.SuspendProject
        }
      },
      [nt.Facebook]: {
        [gt.Campaign]: {
          SetNewBudget: ie.SetNewBudget,
          IncreaseBudget: ie.IncreaseBudget,
          LowerBudget: ie.LowerBudget,
          OpenProject: ie.OpenProject,
          SuspendProject: ie.SuspendProject
        },
        [gt.AdGroup]: {
          SetNewBudget: ie.SetNewBudget,
          IncreaseBudget: ie.IncreaseBudget,
          LowerBudget: ie.LowerBudget,
          OpenProject: ie.OpenProject,
          SuspendProject: ie.SuspendProject
        },
        [gt.AdTag]: {
          OpenProject: ie.OpenProject,
          SuspendProject: ie.SuspendProject
        },
        [gt.Ad]: {
          OpenProject: ie.OpenProject,
          SuspendProject: ie.SuspendProject
        }
      }
    }, l = C(() => {
      var ne, Y;
      const $ = (ne = r.value) == null ? void 0 : ne.client, j = (Y = r.value) == null ? void 0 : Y.adLevel;
      if ($ && j) {
        const I = i[$];
        if (I) {
          const Z = I[j];
          if (Z)
            return Z;
        }
      }
      return {};
    }), c = {
      [nt.Google]: {
        [Dt.Campaign]: {
          [ie.SetNewBudget]: [he.Value],
          [ie.IncreaseBudget]: [he.Percentage, he.Value],
          [ie.LowerBudget]: [he.Percentage, he.Value],
          [ie.OpenProject]: [he.Percentage, he.Value],
          [ie.SuspendProject]: [he.Percentage, he.Value]
        },
        [Dt.AdGroup]: {
          [ie.SuspendProject]: [he.Percentage, he.Value]
        },
        [Dt.AdTag]: {
          [ie.SuspendProject]: [he.Percentage, he.Value]
        },
        [Dt.Ad]: {
          [ie.SuspendProject]: [he.Percentage, he.Value]
        }
      },
      [nt.Facebook]: {
        [gt.Campaign]: {
          [ie.SetNewBudget]: [he.Value],
          [ie.IncreaseBudget]: [he.Percentage, he.Value],
          [ie.LowerBudget]: [he.Percentage, he.Value],
          [ie.OpenProject]: [he.Percentage, he.Value],
          [ie.SuspendProject]: [he.Percentage, he.Value]
        },
        [gt.AdGroup]: {
          [ie.SetNewBudget]: [he.Value],
          [ie.IncreaseBudget]: [he.Percentage, he.Value],
          [ie.LowerBudget]: [he.Percentage, he.Value],
          [ie.OpenProject]: [he.Percentage, he.Value],
          [ie.SuspendProject]: [he.Percentage, he.Value]
        },
        [gt.AdTag]: {
          [ie.SuspendProject]: [he.Percentage, he.Value]
        },
        [gt.Ad]: {
          [ie.SuspendProject]: [he.Percentage, he.Value]
        }
      }
    }, u = C(() => {
      var Y, I, Z;
      const $ = (Y = r.value) == null ? void 0 : Y.client, j = (I = r.value) == null ? void 0 : I.adLevel, ne = (Z = r.value) == null ? void 0 : Z.action;
      if ($ && j && ne) {
        const se = c[$];
        if (se) {
          const ke = se[j];
          if (ke) {
            const Oe = ke[ne];
            if (Oe)
              return Oe;
          }
        }
      }
      return [he.Percentage, he.Value];
    }), d = {
      target: {
        value: ""
      }
    }, v = C(() => r.value.client ? r.value.client : ""), p = ($) => {
      r.value.client = Number($.target.value), delete r.value.target, m(d);
    }, h = C(() => r.value.adLevel ? r.value.adLevel : ""), m = ($) => {
      r.value.adLevel = Number($.target.value), delete r.value.action, delete r.value.target, f(d);
    }, b = C(() => r.value.targetType ? r.value.targetType : ""), f = ($) => {
      r.value.targetType = Number($.target.value);
    }, y = C(() => r.value.action ? r.value.action : ""), k = ($) => {
      r.value.action = Number($.target.value);
    }, w = C(() => {
      var $;
      return ($ = r.value) != null && $.params || (r.value.params = {}), r.value.params.budgetType ? r.value.params.budgetType : "";
    }), P = ($) => r.value.params.budgetType = $.target.value, N = C(() => {
      var $;
      return ($ = r.value) != null && $.params || (r.value.params = {}), r.value.params.valueType ? r.value.params.valueType : "";
    }), x = ($) => r.value.params.valueType = $.target.value, S = te(!1);
    En("addTarget", ($) => {
      var ne;
      console.log($), (ne = r.value) != null && ne.target || (r.value.target = []);
      const j = r.value.target.findIndex(
        (Y) => Y.id === $.id
      );
      j === -1 ? r.value.target.push({
        id: $.id,
        name: $.name
      }) : r.value.target.splice(j, 1);
    });
    const R = te(), B = async () => {
      const $ = await qo({
        method: "get",
        url: `${qs()}/heybear/api/automation/platform-target?client=${v.value}&adLevel=${h.value}`,
        withCredentials: !0,
        headers: {
          Authorization: Zs()
        }
      });
      for (const j of $.data.data)
        console.log(j);
      R.value = $.data.data;
    }, V = te(!1), q = C(() => {
      const $ = ee.value.trim().toLowerCase(), j = (I) => I.name.toLowerCase().includes($), ne = (I) => {
        let Z = [];
        for (const se of I)
          if (j(se) && (!se.children || se.children.length === 0) && Z.push(se), se.children && se.children.length > 0) {
            const ke = ne(se.children);
            ke.length > 0 && Z.push({
              id: se.id,
              name: se.name,
              children: ke
            });
          }
        return Z;
      }, Y = [];
      for (const I of R.value)
        if (I.children) {
          const Z = ne(I.children);
          Z.length > 0 && Y.push({
            id: I.id,
            name: I.name,
            children: Z
          });
        } else
          Y.push({
            id: I.id,
            name: I.name
          });
      return Y;
    }), ce = async () => {
      S.value = !0, V.value = !0, await B(), V.value = !1;
    };
    Ce(S, ($) => {
      $ || (ee.value = "");
    });
    const ee = te(""), le = () => {
      const $ = q.value, j = (ne) => {
        for (const Y of ne)
          Y.children && Y.children.length > 0 ? j(Y.children) : r.value.target.push(Y);
      };
      r.value.target.length ? r.value.target = [] : (r.value.target = [], j($));
    }, ge = te(!1);
    Vn(() => {
      ge.value = !0;
    });
    const De = () => {
      a.value = !1, r.value = {}, Zn(() => {
        delete n.value.action;
      });
    }, G = C(() => {
      const $ = v.value, j = r.value.adLevel, ne = w.value, Y = $ === nt.Google && j === Dt.Campaign, I = $ === nt.Facebook && j === gt.Campaign, Z = $ === nt.Facebook && j === gt.AdGroup, se = Y || I || Z, ke = ne === ga.DailyBudget ? "日預算" : "總預算", Oe = `${nt[$]}${o.value[j]}`, ye = se ? `若${t(Oe)}設定為${ne !== Nn ? ke : ""}，則不會變更` : "";
      return { show: se, msg: ye };
    });
    return ($, j) => g(a) ? (E(), Ue(Rr, {
      key: 1,
      title: "動作"
    }, {
      default: et(() => {
        var ne, Y;
        return [
          O("div", SC, [
            O("div", PC, [
              O("div", {
                class: "cursor-pointer text-dark-4 absolute -top-2.5 -right-1.5 p4-b",
                onClick: De
              }, " 刪除 "),
              O("label", MC, [
                LC,
                Ke(O("select", {
                  class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                  "onUpdate:modelValue": j[1] || (j[1] = (I) => Ie(v) ? v.value = I : null),
                  onChange: p,
                  required: ""
                }, [
                  xC,
                  (E(!0), T(re, null, Ee(g(nt), (I, Z) => (E(), T(re, { key: Z }, [
                    Number.isInteger(I) ? X("", !0) : (E(), T("option", {
                      key: 0,
                      value: Z
                    }, fe(I), 9, RC))
                  ], 64))), 128))
                ], 544), [
                  [at, g(v)]
                ])
              ]),
              g(v) != Nn ? (E(), T("label", FC, [
                YC,
                Ke(O("select", {
                  class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                  "onUpdate:modelValue": j[2] || (j[2] = (I) => Ie(h) ? h.value = I : null),
                  onChange: m,
                  required: ""
                }, [
                  VC,
                  (E(!0), T(re, null, Ee(g(o), (I, Z) => (E(), T(re, { key: Z }, [
                    Number.isInteger(I) ? X("", !0) : (E(), T("option", {
                      key: 0,
                      value: Z
                    }, fe(g(t)(`${g(nt)[g(v)]}${I}`)), 9, UC))
                  ], 64))), 128))
                ], 544), [
                  [at, g(h)]
                ])
              ])) : X("", !0),
              g(h) != Nn ? (E(), T("label", jC, [
                BC,
                Ke(O("select", {
                  class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                  "onUpdate:modelValue": j[3] || (j[3] = (I) => Ie(b) ? b.value = I : null),
                  onChange: f,
                  required: ""
                }, [
                  HC,
                  (E(!0), T(re, null, Ee(g(tn), (I, Z) => (E(), T(re, { key: Z }, [
                    Number.isInteger(I) ? X("", !0) : (E(), T("option", {
                      key: 0,
                      value: Z
                    }, fe(g(t)(I)), 9, WC))
                  ], 64))), 128))
                ], 544), [
                  [at, g(b)]
                ])
              ])) : X("", !0)
            ]),
            g(b) === g(tn).ForID ? (E(), T("div", GC, [
              O("label", KC, [
                zC,
                O("div", {
                  class: "p4-r px-1.5 py-0.5 text-true-blue-2 rounded bg-true-blue-5 flex w-fit cursor-pointer hover:bg-true-blue-4 z-[2]",
                  onClick: ce
                }, " 編輯 "),
                (ne = g(r)) != null && ne.target ? (E(), T("input", {
                  key: 0,
                  type: "text",
                  class: "opacity-0 absolute left-0 top-0",
                  required: "",
                  value: (Y = g(r)) != null && Y.target.length ? "123" : ""
                }, null, 8, qC)) : X("", !0)
              ]),
              g(b) === g(tn).ForID ? (E(), T("div", ZC, [
                (E(!0), T(re, null, Ee(g(r).target, (I, Z) => (E(), T("span", {
                  class: "p4-r text-true-blue-3 px-0.5",
                  key: I.id
                }, fe(I.name) + fe(Z !== g(r).target.length - 1 ? "," : ""), 1))), 128))
              ])) : X("", !0)
            ])) : X("", !0),
            g(ge) ? (E(), Ue(lu, {
              key: 1,
              to: "#editor-container"
            }, [
              g(S) ? (E(), T("div", XC, [
                O("div", JC, [
                  QC,
                  _e(wn, {
                    modelValue: g(ee),
                    "onUpdate:modelValue": j[4] || (j[4] = (I) => Ie(ee) ? ee.value = I : null)
                  }, null, 8, ["modelValue"]),
                  O("div", {
                    class: "mt-2 flex w-fit ml-auto justify-end p4-b text-true-blue-3 cursor-pointer",
                    onClick: le
                  }, " 全選 "),
                  g(V) ? (E(), T("div", eS, "loading...")) : (E(), T(re, { key: 1 }, [
                    O("div", tS, [
                      (E(!0), T(re, null, Ee(g(q), (I) => {
                        var Z;
                        return E(), Ue(Zo, {
                          key: I.id,
                          target: I,
                          targets: (Z = g(r)) == null ? void 0 : Z.target
                        }, null, 8, ["target", "targets"]);
                      }), 128))
                    ]),
                    O("div", nS, [
                      O("div", {
                        class: "p3-b flex cursor-pointer items-center gap-1 rounded bg-true-blue-2 px-1.5 py-0.5 text-light-5 hover:bg-true-blue-1",
                        onClick: j[5] || (j[5] = (I) => S.value = !1)
                      }, " 確定 ")
                    ])
                  ], 64))
                ])
              ])) : X("", !0)
            ])) : X("", !0),
            g(b) !== Nn ? (E(), T("div", rS, [
              O("label", aS, [
                sS,
                Ke(O("select", {
                  class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                  "onUpdate:modelValue": j[6] || (j[6] = (I) => Ie(y) ? y.value = I : null),
                  onChange: k,
                  required: ""
                }, [
                  oS,
                  (E(!0), T(re, null, Ee(g(l), (I, Z) => (E(), T("option", {
                    key: Z,
                    value: I
                  }, fe(g(t)(Z)), 9, iS))), 128))
                ], 544), [
                  [at, g(y)]
                ])
              ]),
              g(h) != Nn ? (E(), T("div", lS, [
                g(r).action == g(ie).SetNewBudget || g(r).action == g(ie).IncreaseBudget || g(r).action == g(ie).LowerBudget ? (E(), T(re, { key: 0 }, [
                  O("label", uS, [
                    cS,
                    Ke(O("select", {
                      class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                      "onUpdate:modelValue": j[7] || (j[7] = (I) => Ie(w) ? w.value = I : null),
                      onChange: P,
                      required: ""
                    }, [
                      dS,
                      (E(!0), T(re, null, Ee(g(ga), (I, Z) => (E(), T(re, { key: Z }, [
                        Number.isInteger(I) ? X("", !0) : (E(), T("option", {
                          key: 0,
                          value: I
                        }, fe(g(t)(I)), 9, fS))
                      ], 64))), 128))
                    ], 544), [
                      [at, g(w)]
                    ]),
                    g(G).show ? (E(), T("span", vS, fe(g(G).msg), 1)) : X("", !0)
                  ]),
                  g(w) != Nn ? (E(), T("label", pS, [
                    mS,
                    Ke(O("select", {
                      class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                      "onUpdate:modelValue": j[8] || (j[8] = (I) => Ie(N) ? N.value = I : null),
                      onChange: x,
                      required: ""
                    }, [
                      hS,
                      (E(!0), T(re, null, Ee(g(u), (I, Z) => (E(), T("option", {
                        key: Z,
                        value: I
                      }, fe(g(t)(`action${I}`)), 9, gS))), 128))
                    ], 544), [
                      [at, g(N)]
                    ])
                  ])) : X("", !0),
                  g(N) != Nn ? (E(), T("label", _S, [
                    _e(wn, {
                      modelValue: g(r).params.value,
                      "onUpdate:modelValue": j[9] || (j[9] = (I) => g(r).params.value = I),
                      type: "number",
                      required: !0
                    }, null, 8, ["modelValue"]),
                    O("span", null, fe(g(r).params.valueType === g(he).Percentage ? "%" : "元"), 1)
                  ])) : X("", !0),
                  g(r).action == g(ie).IncreaseBudget || g(r).action == g(ie).LowerBudget ? (E(), T(re, { key: 2 }, [
                    g(r).params.valueType === g(he).Percentage ? (E(), T("label", bS, [
                      O("div", yS, [
                        O("div", wS, [
                          Ke(O("input", {
                            type: "checkbox",
                            "onUpdate:modelValue": j[10] || (j[10] = (I) => Ie(s) ? s.value = I : null),
                            id: "maxBudget"
                          }, null, 512), [
                            [zs, g(s)]
                          ]),
                          ES,
                          g(s) ? (E(), T("div", DS, [
                            _e(wn, {
                              modelValue: g(r).params.limit,
                              "onUpdate:modelValue": j[11] || (j[11] = (I) => g(r).params.limit = I),
                              type: "number",
                              required: !0
                            }, null, 8, ["modelValue"]),
                            OS
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
    })) : (E(), T("div", {
      key: 0,
      class: "p3-b text-true-blue-3 flex ml-auto w-fit cursor-pointer hover:text-true-blue-2",
      onClick: j[0] || (j[0] = (ne) => a.value = !0)
    }, " + 加入動作 "));
  }
}), TS = { class: "flex flex-col gap-2 relative pt-2" }, kS = { class: "flex items-center gap-2" }, NS = { class: "flex items-center gap-2" }, IS = /* @__PURE__ */ O("span", { class: "p3-b" }, "平台", -1), AS = /* @__PURE__ */ O("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), CS = ["value"], SS = {
  key: 0,
  class: "flex items-center gap-2"
}, PS = /* @__PURE__ */ O("span", { class: "p3-b" }, "層級", -1), MS = /* @__PURE__ */ O("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), LS = ["value"], xS = {
  key: 1,
  class: "flex items-center gap-2"
}, RS = /* @__PURE__ */ O("span", { class: "p4-b" }, "目標", -1), FS = /* @__PURE__ */ O("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), YS = ["value"], VS = {
  key: 0,
  class: "flex flex-col my-2"
}, US = { class: "flex items-center gap-2 relative" }, jS = /* @__PURE__ */ O("span", { class: "p4-b" }, "指定目標", -1), BS = ["value"], HS = { key: 0 }, WS = {
  key: 0,
  class: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex justify-center bg-dark-3 rounded bg-opacity-50 z-[2]"
}, GS = { class: "relative bg-light-5 rounded-xs shadow-01 w-4/5 p-4 h-fit top-4 max-h-[90%] flex flex-col" }, KS = /* @__PURE__ */ O("span", { class: "p1-b flex justify-center mb-1" }, "請選擇目標", -1), zS = { key: 0 }, qS = { class: "flex flex-col gap-2 mt-2 flex-1 overflow-y-auto" }, ZS = { class: "flex gap-3 items-center justify-center mt-4" }, XS = {
  key: 2,
  class: "flex items-center gap-1"
}, JS = /* @__PURE__ */ O("span", { class: "p3-b" }, "條件", -1), QS = /* @__PURE__ */ O("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), eP = ["value"], tP = {
  key: 3,
  class: "flex gap-2 flex-wrap"
}, nP = { class: "flex gap-2" }, rP = { class: "flex items-center gap-1" }, aP = /* @__PURE__ */ O("span", { class: "p3-b" }, "運算", -1), sP = /* @__PURE__ */ O("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), oP = ["value"], iP = {
  key: 0,
  class: "p4-b flex items-center justify-center"
}, lP = { key: 1 }, uP = ["onClick"], cP = ["value"], dP = {
  key: 0,
  class: "flex items-center gap-1"
}, fP = /* @__PURE__ */ O("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), vP = ["value"], pP = {
  key: 1,
  class: "flex items-center gap-1"
}, mP = /* @__PURE__ */ O("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), hP = ["value"], gP = {
  key: 2,
  class: "flex gap-1 items-center"
}, _P = {
  key: 4,
  class: "flex items-center gap-2"
}, bP = /* @__PURE__ */ O("label", { for: "comparison" }, "加入比較區間", -1), gn = "", yP = /* @__PURE__ */ Se({
  __name: "ConditionItem",
  props: {
    modelValue: {},
    index: {}
  },
  emits: ["update:modelValue", "removeItem"],
  setup(e, { emit: t }) {
    const n = e, { t: r } = Za.global, a = C(() => n.modelValue ?? {}), s = C(() => {
      var G;
      return ((G = a.value) == null ? void 0 : G.client) == nt.Google ? Xn : Jn;
    }), o = {
      target: {
        value: ""
      }
    }, i = C(() => a.value.client ? a.value.client : ""), l = (G) => {
      a.value.client = Number(G.target.value), delete a.value.target, u(o);
    }, c = C(() => a.value.adLevel ? a.value.adLevel : ""), u = (G) => {
      a.value.adLevel = Number(G.target.value), p.value != gn && t("update:modelValue", {
        client: i.value,
        adLevel: c.value
      }), delete a.value.action, delete a.value.target, v(o);
    }, d = C(() => a.value.targetType ? a.value.targetType : ""), v = (G) => {
      a.value.targetType = Number(G.target.value), delete a.value.action, delete a.value.target, a.value.targetType === tn.ForID && (a.value.target = []);
    }, p = C(() => a.value.conditionType ? a.value.conditionType : ""), h = (G) => a.value.conditionType = G.target.value, m = C(() => a.value.dateRangeType ? a.value.dateRangeType : ""), b = (G) => {
      a.value.dateRangeType = Number(G.target.value), Number(G.target.value) !== jt.SpecifiedTime && delete a.value.dateRange;
    }, f = C(() => a.value.operation ? a.value.operation : ""), y = (G) => a.value.operation = G.target.value, k = C(() => a.value.valueType ? a.value.valueType : ""), w = (G) => a.value.valueType = G.target.value, P = {
      [nt.Google]: {
        [Xn.Campaign]: {
          Clicks: pe.Clicks,
          Impressions: pe.Impressions,
          Cpc: pe.Cpc,
          Spend: pe.Spend,
          Conversions: pe.Conversions,
          ConversionSpend: pe.ConversionSpend,
          ReturnOnADSpending: pe.ReturnOnADSpending
        },
        [Xn.AdGroup]: {
          Clicks: pe.Clicks,
          Impressions: pe.Impressions,
          Cpc: pe.Cpc,
          Spend: pe.Spend,
          Conversions: pe.Conversions,
          ConversionSpend: pe.ConversionSpend,
          ReturnOnADSpending: pe.ReturnOnADSpending
        },
        [Xn.Account]: {
          BudgetRemaining: pe.BudgetRemaining,
          Clicks: pe.Clicks,
          Impressions: pe.Impressions,
          Cpc: pe.Cpc,
          Spend: pe.Spend,
          Conversions: pe.Conversions,
          ConversionSpend: pe.ConversionSpend,
          ReturnOnADSpending: pe.ReturnOnADSpending
        }
      },
      [nt.Facebook]: {
        [Jn.Campaign]: {
          Clicks: pe.Clicks,
          BudgetCap: pe.BudgetCap,
          Impressions: pe.Impressions,
          Cpc: pe.Cpc,
          Spend: pe.Spend,
          Conversions: pe.Conversions,
          ConversionSpend: pe.ConversionSpend,
          ReturnOnADSpending: pe.ReturnOnADSpending
        },
        [Jn.AdGroup]: {
          Clicks: pe.Clicks,
          Impressions: pe.Impressions,
          Cpc: pe.Cpc,
          Spend: pe.Spend,
          Conversions: pe.Conversions,
          ConversionSpend: pe.ConversionSpend,
          ReturnOnADSpending: pe.ReturnOnADSpending
        },
        [Jn.Account]: {
          BudgetRemaining: pe.BudgetRemaining,
          Clicks: pe.Clicks,
          Impressions: pe.Impressions,
          Cpc: pe.Cpc,
          Spend: pe.Spend,
          Conversions: pe.Conversions,
          ConversionSpend: pe.ConversionSpend,
          ReturnOnADSpending: pe.ReturnOnADSpending
        }
      }
    }, N = C(() => {
      if (i.value && c.value) {
        const G = P[i.value];
        if (G) {
          const $ = G[c.value];
          if ($)
            return $;
        }
      }
      return {};
    }), x = te(!1);
    En("addTarget", (G) => {
      var j;
      (j = a.value) != null && j.target || (a.value.target = []);
      const $ = a.value.target.findIndex(
        (ne) => ne.id === G.id
      );
      $ === -1 ? a.value.target.push({
        id: G.id,
        name: G.name
      }) : a.value.target.splice($, 1);
    });
    const M = te(), R = async () => {
      const G = await qo({
        method: "get",
        url: `${qs()}/heybear/api/automation/platform-target?client=${i.value}&adLevel=${c.value}`,
        withCredentials: !0,
        headers: {
          Authorization: Zs()
        }
      });
      console.log(G.data.data), M.value = G.data.data;
    }, B = C(() => {
      const G = ee.value.trim().toLowerCase(), $ = (Y) => Y.name.toLowerCase().includes(G), j = (Y) => {
        let I = [];
        for (const Z of Y)
          if ($(Z) && (!Z.children || Z.children.length === 0) && I.push(Z), Z.children && Z.children.length > 0) {
            const se = j(Z.children);
            se.length > 0 && I.push({
              id: Z.id,
              name: Z.name,
              children: se
            });
          }
        return I;
      }, ne = [];
      for (const Y of M.value)
        if (Y.children) {
          const I = j(Y.children);
          I.length > 0 && ne.push({
            id: Y.id,
            name: Y.name,
            children: I
          });
        } else
          ne.push({
            id: Y.id,
            name: Y.name
          });
      return ne;
    }), V = te(!1), q = () => {
      const G = B.value, $ = (j) => {
        for (const ne of j)
          ne.children && ne.children.length > 0 ? $(ne.children) : a.value.target.push(ne);
      };
      a.value.target.length ? a.value.target = [] : (a.value.target = [], $(G));
    }, ce = async () => {
      x.value = !0, V.value = !0, await R(), V.value = !1;
    }, ee = te(""), le = te(!1);
    Vn(() => {
      le.value = !0;
    });
    function ge(G) {
      const $ = new Date(G.start), j = new Date(G.end), ne = new Date($ - 1), Y = new Date(ne - (j - $)), I = { year: "numeric", month: "2-digit", day: "2-digit" }, Z = Y.toLocaleDateString(
        "zh-TW",
        I
      ), se = ne.toLocaleDateString(
        "zh-TW",
        I
      );
      return `${Z}-${se}`;
    }
    const De = C(() => n.modelValue.comparison ? m.value === -1 ? a.value.dateRange ? `與${ge(a.value.dateRange)}相比` : "" : {
      [jt.Today]: "與作天相比",
      [jt.Yesterday]: "與前一天相比",
      [jt.Last3Days]: "與前3天相比",
      [jt.Last7Days]: "與前7天相比",
      [jt.ThisMonth]: "與上個月相比"
    }[m.value] : "");
    return (G, $) => (E(), Ue(Rr, {
      title: "條件" + (G.index + 1)
    }, {
      default: et(() => {
        var j, ne;
        return [
          O("div", TS, [
            O("div", {
              class: "cursor-pointer text-dark-4 absolute -top-2.5 -right-1.5 p4-b",
              onClick: $[0] || ($[0] = (Y) => t("removeItem"))
            }, " 刪除 "),
            O("div", kS, [
              O("label", NS, [
                IS,
                Ke(O("select", {
                  class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                  "onUpdate:modelValue": $[1] || ($[1] = (Y) => Ie(i) ? i.value = Y : null),
                  onChange: l,
                  required: ""
                }, [
                  AS,
                  (E(!0), T(re, null, Ee(g(nt), (Y, I) => (E(), T(re, { key: I }, [
                    Number.isInteger(Y) ? X("", !0) : (E(), T("option", {
                      key: 0,
                      value: I
                    }, fe(Y), 9, CS))
                  ], 64))), 128))
                ], 544), [
                  [at, g(i)]
                ])
              ]),
              g(i) != gn ? (E(), T("label", SS, [
                PS,
                Ke(O("select", {
                  class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                  "onUpdate:modelValue": $[2] || ($[2] = (Y) => Ie(c) ? c.value = Y : null),
                  onChange: u,
                  required: ""
                }, [
                  MS,
                  (E(!0), T(re, null, Ee(g(s), (Y, I) => (E(), T(re, { key: I }, [
                    Number.isInteger(Y) ? X("", !0) : (E(), T("option", {
                      key: 0,
                      value: I
                    }, fe(g(r)(`${g(nt)[g(i)]}${Y}`)), 9, LS))
                  ], 64))), 128))
                ], 544), [
                  [at, g(c)]
                ])
              ])) : X("", !0),
              g(c) != gn ? (E(), T("label", xS, [
                RS,
                Ke(O("select", {
                  class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                  "onUpdate:modelValue": $[3] || ($[3] = (Y) => Ie(d) ? d.value = Y : null),
                  onChange: v,
                  required: ""
                }, [
                  FS,
                  (E(!0), T(re, null, Ee(g(tn), (Y, I) => (E(), T(re, { key: I }, [
                    Number.isInteger(Y) ? X("", !0) : (E(), T("option", {
                      key: 0,
                      value: I
                    }, fe(g(r)(Y)), 9, YS))
                  ], 64))), 128))
                ], 544), [
                  [at, g(d)]
                ])
              ])) : X("", !0)
            ]),
            g(d) === g(tn).ForID ? (E(), T("div", VS, [
              O("label", US, [
                jS,
                O("div", {
                  class: "p4-r px-1.5 z-[2] py-0.5 text-true-blue-2 rounded bg-true-blue-5 flex w-fit cursor-pointer hover:bg-true-blue-4",
                  onClick: ce
                }, " 編輯 "),
                (j = g(a)) != null && j.target ? (E(), T("input", {
                  key: 0,
                  type: "text",
                  class: "opacity-0 absolute left-0 top-0",
                  required: "",
                  value: (ne = g(a)) != null && ne.target.length ? "123" : ""
                }, null, 8, BS)) : X("", !0)
              ]),
              g(d) === g(tn).ForID ? (E(), T("div", HS, [
                (E(!0), T(re, null, Ee(g(a).target, (Y, I) => (E(), T("span", {
                  class: "p4-r text-true-blue-3 px-0.5",
                  key: Y.id
                }, fe(Y.name) + fe(I !== g(a).target.length - 1 ? "," : ""), 1))), 128))
              ])) : X("", !0)
            ])) : X("", !0),
            g(le) ? (E(), Ue(lu, {
              key: 1,
              to: "#editor-container"
            }, [
              g(x) ? (E(), T("div", WS, [
                O("div", GS, [
                  KS,
                  _e(wn, {
                    modelValue: g(ee),
                    "onUpdate:modelValue": $[4] || ($[4] = (Y) => Ie(ee) ? ee.value = Y : null)
                  }, null, 8, ["modelValue"]),
                  O("div", {
                    class: "mt-2 flex w-fit ml-auto justify-end p4-b text-true-blue-3 cursor-pointer",
                    onClick: q
                  }, " 全選 "),
                  g(V) ? (E(), T("div", zS, "loading...")) : (E(), T(re, { key: 1 }, [
                    O("div", qS, [
                      (E(!0), T(re, null, Ee(g(B), (Y) => {
                        var I;
                        return E(), Ue(Zo, {
                          key: Y.id,
                          target: Y,
                          targets: (I = g(a)) == null ? void 0 : I.target
                        }, null, 8, ["target", "targets"]);
                      }), 128))
                    ]),
                    O("div", ZS, [
                      O("div", {
                        class: "p3-b flex cursor-pointer items-center gap-1 rounded bg-true-blue-2 px-1.5 py-0.5 text-light-5 hover:bg-true-blue-1",
                        onClick: $[5] || ($[5] = (Y) => x.value = !1)
                      }, " 確定 ")
                    ])
                  ], 64))
                ])
              ])) : X("", !0)
            ])) : X("", !0),
            g(d) != gn ? (E(), T("label", XS, [
              JS,
              Ke(O("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": $[6] || ($[6] = (Y) => Ie(p) ? p.value = Y : null),
                onChange: h,
                required: ""
              }, [
                QS,
                (E(!0), T(re, null, Ee(g(N), (Y, I) => (E(), T("option", {
                  key: I,
                  value: Y
                }, fe(g(r)(I)), 9, eP))), 128))
              ], 544), [
                [at, g(p)]
              ])
            ])) : X("", !0),
            g(p) != gn ? (E(), T("div", tP, [
              O("div", nP, [
                O("label", rP, [
                  aP,
                  Ke(O("select", {
                    class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                    "onUpdate:modelValue": $[7] || ($[7] = (Y) => Ie(m) ? m.value = Y : null),
                    onChange: b,
                    required: ""
                  }, [
                    sP,
                    (E(!0), T(re, null, Ee(g(jt), (Y, I) => (E(), T(re, { key: I }, [
                      Number.isInteger(Y) ? X("", !0) : (E(), T("option", {
                        key: 0,
                        value: I
                      }, fe(g(r)(Y)), 9, oP))
                    ], 64))), 128))
                  ], 544), [
                    [at, g(m)]
                  ])
                ]),
                G.modelValue.comparison && g(De) !== "" ? (E(), T("div", iP, fe(g(De)), 1)) : X("", !0),
                g(m) == g(jt).SpecifiedTime ? (E(), T("div", lP, [
                  _e(g(Co), {
                    modelValue: g(a).dateRange,
                    "onUpdate:modelValue": $[8] || ($[8] = (Y) => g(a).dateRange = Y),
                    modelModifiers: { range: !0 },
                    mode: "date",
                    "is-required": ""
                  }, {
                    default: et(({ togglePopover: Y, inputValue: I }) => [
                      O("button", {
                        class: "p3-b flex relative cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 transition-all hover:bg-light-3 hover:bg-opacity-50",
                        onClick: Y
                      }, [
                        O("input", {
                          value: I.end,
                          required: "",
                          class: "opacity-0 absolute w-full h-full pointer-events-none"
                        }, null, 8, cP),
                        zr(" " + fe(I.start && I.end ? `${I.start}-${I.end}` : "請選定區間"), 1)
                      ], 8, uP)
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ])) : X("", !0)
              ]),
              g(m) != "" ? (E(), T("label", dP, [
                Ke(O("select", {
                  class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                  "onUpdate:modelValue": $[9] || ($[9] = (Y) => Ie(f) ? f.value = Y : null),
                  onChange: y,
                  required: ""
                }, [
                  fP,
                  (E(!0), T(re, null, Ee(g(Js), (Y, I) => (E(), T(re, { key: I }, [
                    Number.isInteger(Y) ? X("", !0) : (E(), T("option", {
                      key: 0,
                      value: Y
                    }, fe(g(r)(I)), 9, vP))
                  ], 64))), 128))
                ], 544), [
                  [at, g(f)]
                ])
              ])) : X("", !0),
              g(f) != gn ? (E(), T("label", pP, [
                Ke(O("select", {
                  class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                  "onUpdate:modelValue": $[10] || ($[10] = (Y) => Ie(k) ? k.value = Y : null),
                  onChange: w,
                  required: ""
                }, [
                  mP,
                  (E(!0), T(re, null, Ee(g(he), (Y, I) => (E(), T(re, { key: I }, [
                    Number.isInteger(Y) ? X("", !0) : (E(), T("option", {
                      key: 0,
                      value: Y
                    }, fe(g(r)(`condition${I}`)), 9, hP))
                  ], 64))), 128))
                ], 544), [
                  [at, g(k)]
                ])
              ])) : X("", !0),
              g(k) != gn ? (E(), T("div", gP, [
                _e(wn, {
                  modelValue: g(a).value,
                  "onUpdate:modelValue": $[11] || ($[11] = (Y) => g(a).value = Y),
                  type: "number",
                  required: !0
                }, null, 8, ["modelValue"]),
                O("span", null, fe(g(a).valueType === g(he).Percentage ? "%" : "元"), 1)
              ])) : X("", !0)
            ])) : X("", !0),
            g(m) != gn ? (E(), T("div", _P, [
              Ke(O("input", {
                type: "checkbox",
                "onUpdate:modelValue": $[12] || ($[12] = (Y) => G.modelValue.comparison = Y),
                id: "comparison"
              }, null, 512), [
                [zs, G.modelValue.comparison]
              ]),
              bP
            ])) : X("", !0)
          ])
        ];
      }),
      _: 1
    }, 8, ["title"]));
  }
}), wP = {
  key: 0,
  class: "flex items-center justify-center gap-3"
}, EP = /* @__PURE__ */ O("div", { class: "h-[1px] flex-1 bg-light-3" }, null, -1), DP = /* @__PURE__ */ O("p", { class: "p4-b to-dark-4" }, "且", -1), OP = /* @__PURE__ */ O("div", { class: "h-[1px] flex-1 bg-light-3" }, null, -1), $P = [
  EP,
  DP,
  OP
], TP = {
  key: 0,
  class: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex justify-center items-center bg-dark-3 rounded bg-opacity-50 z-[2]"
}, kP = { class: "relative bg-light-5 rounded-xs shadow-01 w-4/5 p-4" }, NP = /* @__PURE__ */ O("span", { class: "p1-b flex justify-center mb-1" }, "請選擇條件", -1), IP = { class: "flex flex-col gap-2 mt-2" }, AP = { class: "flex flex-col flex-1" }, CP = { class: "p3-b" }, SP = { class: "p4-r text-dark-4" }, PP = { class: "flex gap-3 items-center justify-center mt-4" }, MP = /* @__PURE__ */ Se({
  __name: "Condition",
  setup(e) {
    const t = te(!1), n = Fe("eventData"), r = te(n.value.conditions ?? []);
    Ce(
      r,
      (p) => {
        n.value.conditions = p;
      },
      { deep: !0 }
    );
    const a = () => {
      r.value.push({}), t.value = !1;
    }, s = (p) => {
      r.value.splice(p, 1);
    }, o = te(""), i = te([]), l = C(() => "title"), c = async () => {
      const p = await qo({
        method: "get",
        url: `${qs()}/heybear/api/automation/template`,
        data: { type: 2 },
        withCredentials: !0,
        headers: {
          Authorization: Zs()
        }
      });
      i.value = p.data.data;
    }, u = C(() => {
      const p = o.value.toLowerCase();
      return i.value.filter(
        (h) => h[l.value].toLowerCase().includes(p)
      );
    }), d = te(!1), v = async () => {
      t.value = !0, d.value = !0, await c(), d.value = !1;
    };
    return (p, h) => (E(), T(re, null, [
      (E(!0), T(re, null, Ee(g(r), (m, b) => (E(), T(re, { key: b }, [
        _e(yP, {
          index: b,
          modelValue: g(r)[b],
          "onUpdate:modelValue": (f) => g(r)[b] = f,
          onRemoveItem: (f) => s(b)
        }, null, 8, ["index", "modelValue", "onUpdate:modelValue", "onRemoveItem"]),
        b + 1 !== g(r).length ? (E(), T("div", wP, $P)) : X("", !0)
      ], 64))), 128)),
      O("div", {
        class: "p3-b text-true-blue-3 flex ml-auto w-fit cursor-pointer hover:text-true-blue-2",
        onClick: v
      }, " + 加入條件 "),
      g(t) ? (E(), T("div", TP, [
        O("div", kP, [
          NP,
          _e(wn, {
            placeholder: "輸入關鍵字搜尋 ex: 轉換數",
            modelValue: g(o),
            "onUpdate:modelValue": h[0] || (h[0] = (m) => Ie(o) ? o.value = m : null)
          }, null, 8, ["modelValue"]),
          O("div", IP, [
            (E(!0), T(re, null, Ee(g(u), (m) => (E(), T("div", {
              class: "border border-dark-5 rounded items-center py-1 px-3 flex gap-1 hover:bg-true-blue-5 cursor-pointer",
              key: m.id
            }, [
              O("div", AP, [
                O("span", CP, fe(m.title), 1),
                O("span", SP, fe(m.description), 1)
              ]),
              _e(g(xA), {
                size: 18,
                class: "text-dark-3",
                weight: "bold"
              })
            ]))), 128))
          ]),
          O("div", {
            class: "border ml-auto mt-2 border-true-blue-3 text-true-blue-3 rounded px-1 w-fit p3-r cursor-pointer hover:text-true-blue-2 hover:border-true-blue-2",
            onClick: a
          }, " 自訂 "),
          O("div", PP, [
            O("div", {
              class: "p3-b flex cursor-pointer items-center gap-1 rounded bg-true-blue-2 px-1.5 py-0.5 text-light-5 hover:bg-true-blue-1",
              onClick: h[1] || (h[1] = (m) => t.value = !1)
            }, " 確定 ")
          ])
        ])
      ])) : X("", !0)
    ], 64));
  }
}), LP = { class: "flex items-center gap-2" }, xP = /* @__PURE__ */ O("span", { class: "p4-b" }, "以電子郵件寄出結果", -1), RP = /* @__PURE__ */ O("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), FP = ["value"], YP = /* @__PURE__ */ Se({
  __name: "Notification",
  setup(e) {
    const { t } = Za.global, n = Fe("eventData"), r = te(
      n.value.notify ?? {
        email: Xs.All
      }
    );
    return Ce(
      r,
      (a) => {
        n.value.notify = a;
      },
      { deep: !0 }
    ), (a, s) => (E(), T("div", null, [
      O("label", LP, [
        xP,
        Ke(O("select", {
          class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
          "onUpdate:modelValue": s[0] || (s[0] = (o) => g(r).email = o)
        }, [
          RP,
          (E(!0), T(re, null, Ee(g(Qs), (o, i) => (E(), T(re, { key: i }, [
            Number.isInteger(o) ? X("", !0) : (E(), T("option", {
              key: 0,
              value: Number(i)
            }, fe(g(t)(`mail${o}`)), 9, FP))
          ], 64))), 128))
        ], 512), [
          [at, g(r).email]
        ])
      ])
    ]));
  }
}), Ad = (e) => (Vd("data-v-6bf0f4f0"), e = e(), Ud(), e), VP = ["onSubmit"], UP = /* @__PURE__ */ Ad(() => /* @__PURE__ */ O("div", { class: "p1-b" }, "建立自動化規則", -1)), jP = /* @__PURE__ */ Ad(() => /* @__PURE__ */ O("span", { class: "p4-b" }, "規則名稱*", -1)), BP = {
  key: 0,
  class: "text-red-1"
}, HP = 100, WP = /* @__PURE__ */ Se({
  __name: "TCEventEditorApp",
  props: {
    data: {}
  },
  emits: ["update:data"],
  setup(e, { expose: t, emit: n }) {
    const r = e, a = C(() => JSON.parse(r.data || "{}")), s = (u) => {
      const d = Object.fromEntries(
        Object.entries(u).filter(([v, p]) => p !== null)
      );
      return JSON.stringify(d, null, 4);
    }, o = te([]), i = (u) => {
      u.preventDefault(), n("update:data", s(a.value));
    }, l = (u) => {
      var d;
      (d = c.value) == null || d.click();
    };
    En("eventData", a), En("checkDataValid", o);
    const c = te();
    return t({
      saveData: l
    }), (u, d) => r.data ? (E(), T("form", {
      key: 0,
      class: "flex flex-col gap-5 relative",
      id: "editor-container",
      onSubmit: iu(i, ["prevent"])
    }, [
      UP,
      _e(Rr, { title: "基本資料" }, {
        default: et(() => [
          O("div", null, [
            jP,
            _e(wn, {
              modelValue: g(a).title,
              "onUpdate:modelValue": d[0] || (d[0] = (v) => g(a).title = v),
              maxLength: HP,
              required: !0
            }, null, 8, ["modelValue"])
          ])
        ]),
        _: 1
      }),
      _e(Rr, { title: "執行時間" }, {
        default: et(() => [
          _e(IN, {
            frequency: g(a).frequency,
            "onUpdate:frequency": d[1] || (d[1] = (v) => g(a).frequency = v),
            interval: g(a).interval,
            "onUpdate:interval": d[2] || (d[2] = (v) => g(a).interval = v)
          }, null, 8, ["frequency", "interval"])
        ]),
        _: 1
      }),
      _e(Rr, { title: "通知" }, {
        default: et(() => [
          _e(YP)
        ]),
        _: 1
      }),
      _e($S),
      _e(MP),
      g(o).length ? (E(), T("span", BP, "資料未填寫完整")) : X("", !0),
      O("button", {
        ref_key: "submitBtn",
        ref: c,
        class: "p-2 px-3 rounded bg-slate-100 hover:bg-sky-500 hover:text-white"
      }, " 保存 ", 512)
    ], 40, VP)) : X("", !0);
  }
});
const GP = /* @__PURE__ */ eo(WP, [["__scopeId", "data-v-6bf0f4f0"]]), KP = (e) => {
  e.component("TCEventEditorApp", GP);
}, JP = {
  install: KP
};
export {
  GP as TCEventEditorApp,
  XP as TCEventItems,
  JP as default,
  qP as setApiUrlBase,
  ZP as setToken
};
