import { defineComponent as Ve, openBlock as O, createElementBlock as T, createElementVNode as E, toDisplayString as pe, ref as ae, watchEffect as Ui, computed as P, watch as Re, onBeforeUnmount as Vm, Fragment as oe, unref as _, renderList as Ne, createBlock as et, createCommentVNode as J, withDirectives as ot, isRef as xe, vModelSelect as yt, reactive as Vi, onMounted as Ir, onUnmounted as ts, toRefs as Wm, h as Hr, provide as dr, inject as Ke, resolveDynamicComponent as Dd, normalizeProps as Od, mergeProps as zn, renderSlot as Xt, normalizeClass as ct, normalizeStyle as xa, withKeys as du, createVNode as De, withCtx as vt, nextTick as Br, toRef as Vo, resolveComponent as br, Transition as Ed, createTextVNode as ns, withModifiers as kd, guardReactiveProps as jm, resolveDirective as Hm, toHandlers as Bm, vModelCheckbox as Wi, getCurrentInstance as ja, effectScope as Gm, shallowRef as zm, onBeforeMount as qm, Text as Km, Teleport as Sd, pushScopeId as Zm, popScopeId as Xm } from "vue";
let Td = "", Md = "";
function o8(e) {
  Td = e;
}
function i8(e) {
  Md = e;
}
function ji() {
  return Td;
}
function Hi() {
  return Md;
}
class Jm {
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
var Bi = /* @__PURE__ */ ((e) => (e[e.None = -1] = "None", e[e.All = 1] = "All", e[e.Error = 2] = "Error", e))(Bi || {}), $d = /* @__PURE__ */ ((e) => (e[e.Off = 0] = "Off", e[e.On = 1] = "On", e))($d || {}), _t = /* @__PURE__ */ ((e) => (e[e.Google = 1] = "Google", e[e.Facebook = 2] = "Facebook", e))(_t || {}), Ht = /* @__PURE__ */ ((e) => (e[e.Campaign = 2] = "Campaign", e[e.AdGroup = 3] = "AdGroup", e[e.Ad = 4] = "Ad", e[e.AdTag = 5] = "AdTag", e))(Ht || {}), xt = /* @__PURE__ */ ((e) => (e[e.Campaign = 2] = "Campaign", e[e.AdGroup = 3] = "AdGroup", e[e.Ad = 4] = "Ad", e[e.AdTag = 5] = "AdTag", e))(xt || {}), Rn = /* @__PURE__ */ ((e) => (e[e.ForAll = 1] = "ForAll", e[e.ForID = 2] = "ForID", e[e.ForActive = 3] = "ForActive", e))(Rn || {}), Gr = /* @__PURE__ */ ((e) => (e[e.Account = 1] = "Account", e[e.Campaign = 2] = "Campaign", e[e.AdGroup = 3] = "AdGroup", e))(Gr || {}), zr = /* @__PURE__ */ ((e) => (e[e.Account = 1] = "Account", e[e.Campaign = 2] = "Campaign", e[e.AdGroup = 3] = "AdGroup", e))(zr || {}), Ge = /* @__PURE__ */ ((e) => (e[e.Never = -1] = "Never", e[e.Hour = 1] = "Hour", e[e.Day = 2] = "Day", e[e.Week = 3] = "Week", e[e.Month = 4] = "Month", e[e.Annual = 5] = "Annual", e))(Ge || {}), Bt = /* @__PURE__ */ ((e) => (e[e.Sunday = 0] = "Sunday", e[e.Monday = 1] = "Monday", e[e.Tuesday = 2] = "Tuesday", e[e.Wednesday = 3] = "Wednesday", e[e.Thursday = 4] = "Thursday", e[e.Friday = 5] = "Friday", e[e.Saturday = 6] = "Saturday", e[e.Weekday = -1] = "Weekday", e[e.Weekend = -2] = "Weekend", e))(Bt || {}), Ln = /* @__PURE__ */ ((e) => (e[e.First = 1] = "First", e[e.Second = 2] = "Second", e[e.Third = 3] = "Third", e[e.Fourth = 4] = "Fourth", e[e.Fifth = 5] = "Fifth", e[e.Last = -1] = "Last", e))(Ln || {}), It = /* @__PURE__ */ ((e) => (e[e.January = 1] = "January", e[e.February = 2] = "February", e[e.March = 3] = "March", e[e.April = 4] = "April", e[e.May = 5] = "May", e[e.June = 6] = "June", e[e.July = 7] = "July", e[e.August = 8] = "August", e[e.September = 9] = "September", e[e.October = 10] = "October", e[e.November = 11] = "November", e[e.December = 12] = "December", e))(It || {}), ce = /* @__PURE__ */ ((e) => (e[e.SetNewBudget = 1] = "SetNewBudget", e[e.IncreaseBudget = 2] = "IncreaseBudget", e[e.LowerBudget = 3] = "LowerBudget", e[e.OpenProject = 4] = "OpenProject", e[e.SuspendProject = 5] = "SuspendProject", e[e.None = -1] = "None", e))(ce || {}), Ls = /* @__PURE__ */ ((e) => (e.DailyBudget = "dailyBudget", e.TotalBudget = "totalBudget", e))(Ls || {}), be = /* @__PURE__ */ ((e) => (e.Value = "value", e.Percentage = "percentage", e))(be || {}), ge = /* @__PURE__ */ ((e) => (e.BudgetRemaining = "accountBudget", e.BudgetCap = "budgetCap", e.Clicks = "clicks", e.Impressions = "impressions", e.Cpc = "cpc", e.Spend = "cost", e.Conversions = "conversions", e.ConversionSpend = "conversionsValue", e.ReturnOnADSpending = "roas", e))(ge || {}), _n = /* @__PURE__ */ ((e) => (e[e.Today = 1] = "Today", e[e.Yesterday = 2] = "Yesterday", e[e.Last3Days = 3] = "Last3Days", e[e.Last7Days = 4] = "Last7Days", e[e.ThisMonth = 5] = "ThisMonth", e[e.SpecifiedTime = -1] = "SpecifiedTime", e))(_n || {}), Gi = /* @__PURE__ */ ((e) => (e.MoreThan = ">", e.GreaterOrEqualTo = ">=", e.Equal = "==", e.LessThan = "<", e.LessThanOrEqualTo = "<=", e))(Gi || {}), zi = /* @__PURE__ */ ((e) => (e[e.AbnormalityOrError = 1] = "AbnormalityOrError", e[e.Error = 2] = "Error", e[e.None = -1] = "None", e))(zi || {});
const l8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ActionType: ce,
  AdLevelTypeFacebook: xt,
  AdLevelTypeGoogle: Ht,
  BudgetType: Ls,
  ClientType: _t,
  ConditionAdLevelTypeFacebook: zr,
  ConditionAdLevelTypeGoogle: Gr,
  ConditionType: ge,
  DateRangeType: _n,
  EmailNotify: Bi,
  EventActionTargetType: Rn,
  EventHelper: Jm,
  FrequencyType: Ge,
  MonthType: It,
  OperationType: Gi,
  ToggleNotify: $d,
  ValueType: be,
  WeekOrdinalWordsType: Ln,
  WeekdaysType: Bt,
  emailType: zi
}, Symbol.toStringTag, { value: "Module" })), Qm = { class: "flex" }, ev = ["checked", "id"], tv = ["for"], nv = /* @__PURE__ */ Ve({
  __name: "CheckBox",
  props: {
    label: {},
    checked: { type: Boolean },
    fieldId: {}
  },
  emits: ["update:checked"],
  setup(e, { emit: t }) {
    return (n, r) => (O(), T("div", Qm, [
      E("input", {
        onInput: r[0] || (r[0] = (a) => n.$emit("update:checked", a.target.checked)),
        type: "checkbox",
        checked: n.checked,
        id: n.fieldId,
        class: "hidden"
      }, null, 40, ev),
      E("label", {
        for: n.fieldId,
        class: "p3-r cursor-pointer rounded border hover:bg-light-4 border-dark-5 px-1 py-0.5 flex justify-center items-center text-dark-2 min-w-[1.75rem] min-h-[1.75rem]"
      }, pe(n.label), 9, tv)
    ]));
  }
});
const qi = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, a] of t)
    n[r] = a;
  return n;
}, fu = /* @__PURE__ */ qi(nv, [["__scopeId", "data-v-8bd665ed"]]), rv = {
  key: 0,
  class: "flex gap-1.5 flex-wrap"
}, av = {
  key: 1,
  class: "flex gap-2 items-center"
}, sv = /* @__PURE__ */ E("span", { class: "p3-r" }, "指定", -1), ov = ["value"], iv = { class: "flex gap-4 flex-wrap" }, lv = /* @__PURE__ */ Ve({
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
    const n = e, r = ae(n.monthDate), a = ae(n.weekOrdinal), s = ae(n.weekdays), o = ae(n.yearMonths), i = (y, h, b = !1) => {
      if (b) {
        h.findIndex((S) => S === y) === -1 ? h.push(y) : h.splice(h.indexOf(y), 1), h.sort((S, w) => S - w);
        return;
      }
      h.value.findIndex((S) => S === y) === -1 ? h.value.push(y) : h.value.splice(h.value.indexOf(y), 1), h.value.sort((S, w) => S - w);
    };
    Ui(() => {
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
    const l = ae([
      { name: "星期日", id: Bt.Sunday },
      { name: "星期一", id: Bt.Monday },
      { name: "星期二", id: Bt.Tuesday },
      { name: "星期三", id: Bt.Wednesday },
      { name: "星期四", id: Bt.Thursday },
      { name: "星期五", id: Bt.Friday },
      { name: "星期六", id: Bt.Saturday },
      { name: "平日", id: Bt.Weekday },
      { name: "週末", id: Bt.Weekend }
    ]), c = ae([
      { name: "第一週", id: Ln.First },
      { name: "第二週", id: Ln.Second },
      { name: "第三週", id: Ln.Third },
      { name: "第四週", id: Ln.Fourth },
      { name: "第五週", id: Ln.Fifth },
      { name: "最後一週", id: Ln.Last }
    ]), u = ae([
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
    ]), d = ae([
      {
        name: "一月",
        id: It.January
      },
      {
        name: "二月",
        id: It.February
      },
      {
        name: "三月",
        id: It.March
      },
      {
        name: "四月",
        id: It.April
      },
      {
        name: "五月",
        id: It.May
      },
      {
        name: "六月",
        id: It.June
      },
      {
        name: "七月",
        id: It.July
      },
      {
        name: "八月",
        id: It.August
      },
      {
        name: "九月",
        id: It.September
      },
      {
        name: "十月",
        id: It.October
      },
      {
        name: "十一月",
        id: It.November
      },
      {
        name: "十二月",
        id: It.December
      }
    ]), f = P(() => {
      if (n.type === Ge.Week)
        return [
          {
            key: s,
            label: "weekdaysOrigin",
            options: l.value
          }
        ];
      if (n.type === Ge.Month) {
        if (v.value.id === 0)
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
        if (v.value.id === 1)
          return [
            {
              key: r,
              label: "monthDateOrigin",
              options: u.value
            }
          ];
      }
      if (n.type === Ge.Annual) {
        if (v.value.id === 0)
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
        if (v.value.id === 1)
          return [
            {
              key: r,
              label: "monthDateOrigin",
              options: u.value
            }
          ];
      }
    }), m = P(() => n.type === Ge.Month || n.type === Ge.Annual ? !0 : (r.value = [], a.value = [], s.value = [], o.value = [], !1)), p = ae([
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
    ]), v = ae(p.value[0]);
    return Re(v, (y) => {
      if (y.id === 0) {
        r.value = [];
        return;
      }
      if (y.id === 1) {
        a.value = [], s.value = [];
        return;
      }
    }), Re(
      () => n.type,
      (y) => {
        (y === Ge.Month || y === Ge.Annual) && (y != Ge.Annual && (o.value = []), u.value && u.value.length > 0 ? v.value = p.value[1] : v.value = p.value[0]);
      },
      { immediate: !0 }
    ), Vm(() => {
      r.value = [], a.value = [], s.value = [], o.value = [];
    }), (y, h) => (O(), T(oe, null, [
      y.type === _(Ge).Annual ? (O(), T("div", rv, [
        (O(!0), T(oe, null, Ne(_(d), (b) => {
          var S;
          return O(), et(fu, {
            key: b.id,
            checked: (S = _(o)) == null ? void 0 : S.includes(b.id),
            "onUpdate:checked": (w) => i(b.id, _(o), !0),
            fieldId: b.name,
            label: b.name
          }, null, 8, ["checked", "onUpdate:checked", "fieldId", "label"]);
        }), 128))
      ])) : J("", !0),
      _(m) ? (O(), T("div", av, [
        sv,
        ot(E("select", {
          class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
          "onUpdate:modelValue": h[0] || (h[0] = (b) => xe(v) ? v.value = b : null)
        }, [
          (O(!0), T(oe, null, Ne(_(p), (b, S) => (O(), T("option", {
            key: S,
            value: b
          }, pe(b.name), 9, ov))), 128))
        ], 512), [
          [yt, _(v)]
        ])
      ])) : J("", !0),
      E("div", iv, [
        (O(!0), T(oe, null, Ne(_(f), (b) => (O(), T("div", {
          class: "flex gap-1 flex-wrap",
          key: b
        }, [
          (O(!0), T(oe, null, Ne(b.options, (S) => {
            var w;
            return O(), et(fu, {
              key: S.id,
              checked: (w = b.key.value) == null ? void 0 : w.includes(S.id),
              "onUpdate:checked": (C) => i(S.id, b.key),
              fieldId: S.name,
              label: S.name
            }, null, 8, ["checked", "onUpdate:checked", "fieldId", "label"]);
          }), 128))
        ]))), 128))
      ])
    ], 64));
  }
});
var At = "top", Jt = "bottom", Qt = "right", Lt = "left", Ki = "auto", rs = [At, Jt, Qt, Lt], ra = "start", Ha = "end", uv = "clippingParents", Nd = "viewport", Sa = "popper", cv = "reference", hu = /* @__PURE__ */ rs.reduce(function(e, t) {
  return e.concat([t + "-" + ra, t + "-" + Ha]);
}, []), Pd = /* @__PURE__ */ [].concat(rs, [Ki]).reduce(function(e, t) {
  return e.concat([t, t + "-" + ra, t + "-" + Ha]);
}, []), dv = "beforeRead", fv = "read", hv = "afterRead", mv = "beforeMain", vv = "main", pv = "afterMain", _v = "beforeWrite", gv = "write", yv = "afterWrite", bv = [dv, fv, hv, mv, vv, pv, _v, gv, yv];
function On(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Ut(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Sr(e) {
  var t = Ut(e).Element;
  return e instanceof t || e instanceof Element;
}
function qt(e) {
  var t = Ut(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Zi(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Ut(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function wv(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, a = t.attributes[n] || {}, s = t.elements[n];
    !qt(s) || !On(s) || (Object.assign(s.style, r), Object.keys(a).forEach(function(o) {
      var i = a[o];
      i === !1 ? s.removeAttribute(o) : s.setAttribute(o, i === !0 ? "" : i);
    }));
  });
}
function Dv(e) {
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
      !qt(a) || !On(a) || (Object.assign(a.style, i), Object.keys(s).forEach(function(l) {
        a.removeAttribute(l);
      }));
    });
  };
}
const Ov = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: wv,
  effect: Dv,
  requires: ["computeStyles"]
};
function Dn(e) {
  return e.split("-")[0];
}
var Er = Math.max, xs = Math.min, aa = Math.round;
function ai() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Id() {
  return !/^((?!chrome|android).)*safari/i.test(ai());
}
function sa(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), a = 1, s = 1;
  t && qt(e) && (a = e.offsetWidth > 0 && aa(r.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && aa(r.height) / e.offsetHeight || 1);
  var o = Sr(e) ? Ut(e) : window, i = o.visualViewport, l = !Id() && n, c = (r.left + (l && i ? i.offsetLeft : 0)) / a, u = (r.top + (l && i ? i.offsetTop : 0)) / s, d = r.width / a, f = r.height / s;
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
function Xi(e) {
  var t = sa(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function Cd(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Zi(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function jn(e) {
  return Ut(e).getComputedStyle(e);
}
function Ev(e) {
  return ["table", "td", "th"].indexOf(On(e)) >= 0;
}
function mr(e) {
  return ((Sr(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function lo(e) {
  return On(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Zi(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    mr(e)
  );
}
function mu(e) {
  return !qt(e) || // https://github.com/popperjs/popper-core/issues/837
  jn(e).position === "fixed" ? null : e.offsetParent;
}
function kv(e) {
  var t = /firefox/i.test(ai()), n = /Trident/i.test(ai());
  if (n && qt(e)) {
    var r = jn(e);
    if (r.position === "fixed")
      return null;
  }
  var a = lo(e);
  for (Zi(a) && (a = a.host); qt(a) && ["html", "body"].indexOf(On(a)) < 0; ) {
    var s = jn(a);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none")
      return a;
    a = a.parentNode;
  }
  return null;
}
function as(e) {
  for (var t = Ut(e), n = mu(e); n && Ev(n) && jn(n).position === "static"; )
    n = mu(n);
  return n && (On(n) === "html" || On(n) === "body" && jn(n).position === "static") ? t : n || kv(e) || t;
}
function Ji(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Ra(e, t, n) {
  return Er(e, xs(t, n));
}
function Sv(e, t, n) {
  var r = Ra(e, t, n);
  return r > n ? n : r;
}
function Ad() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Ld(e) {
  return Object.assign({}, Ad(), e);
}
function xd(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var Tv = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, Ld(typeof t != "number" ? t : xd(t, rs));
};
function Mv(e) {
  var t, n = e.state, r = e.name, a = e.options, s = n.elements.arrow, o = n.modifiersData.popperOffsets, i = Dn(n.placement), l = Ji(i), c = [Lt, Qt].indexOf(i) >= 0, u = c ? "height" : "width";
  if (!(!s || !o)) {
    var d = Tv(a.padding, n), f = Xi(s), m = l === "y" ? At : Lt, p = l === "y" ? Jt : Qt, v = n.rects.reference[u] + n.rects.reference[l] - o[l] - n.rects.popper[u], y = o[l] - n.rects.reference[l], h = as(s), b = h ? l === "y" ? h.clientHeight || 0 : h.clientWidth || 0 : 0, S = v / 2 - y / 2, w = d[m], C = b - f[u] - d[p], M = b / 2 - f[u] / 2 + S, x = Ra(w, M, C), I = l;
    n.modifiersData[r] = (t = {}, t[I] = x, t.centerOffset = x - M, t);
  }
}
function $v(e) {
  var t = e.state, n = e.options, r = n.element, a = r === void 0 ? "[data-popper-arrow]" : r;
  a != null && (typeof a == "string" && (a = t.elements.popper.querySelector(a), !a) || Cd(t.elements.popper, a) && (t.elements.arrow = a));
}
const Nv = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Mv,
  effect: $v,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function oa(e) {
  return e.split("-")[1];
}
var Pv = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Iv(e, t) {
  var n = e.x, r = e.y, a = t.devicePixelRatio || 1;
  return {
    x: aa(n * a) / a || 0,
    y: aa(r * a) / a || 0
  };
}
function vu(e) {
  var t, n = e.popper, r = e.popperRect, a = e.placement, s = e.variation, o = e.offsets, i = e.position, l = e.gpuAcceleration, c = e.adaptive, u = e.roundOffsets, d = e.isFixed, f = o.x, m = f === void 0 ? 0 : f, p = o.y, v = p === void 0 ? 0 : p, y = typeof u == "function" ? u({
    x: m,
    y: v
  }) : {
    x: m,
    y: v
  };
  m = y.x, v = y.y;
  var h = o.hasOwnProperty("x"), b = o.hasOwnProperty("y"), S = Lt, w = At, C = window;
  if (c) {
    var M = as(n), x = "clientHeight", I = "clientWidth";
    if (M === Ut(n) && (M = mr(n), jn(M).position !== "static" && i === "absolute" && (x = "scrollHeight", I = "scrollWidth")), M = M, a === At || (a === Lt || a === Qt) && s === Ha) {
      w = Jt;
      var A = d && M === C && C.visualViewport ? C.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        M[x]
      );
      v -= A - r.height, v *= l ? 1 : -1;
    }
    if (a === Lt || (a === At || a === Jt) && s === Ha) {
      S = Qt;
      var R = d && M === C && C.visualViewport ? C.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        M[I]
      );
      m -= R - r.width, m *= l ? 1 : -1;
    }
  }
  var j = Object.assign({
    position: i
  }, c && Pv), U = u === !0 ? Iv({
    x: m,
    y: v
  }, Ut(n)) : {
    x: m,
    y: v
  };
  if (m = U.x, v = U.y, l) {
    var Z;
    return Object.assign({}, j, (Z = {}, Z[w] = b ? "0" : "", Z[S] = h ? "0" : "", Z.transform = (C.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + v + "px)" : "translate3d(" + m + "px, " + v + "px, 0)", Z));
  }
  return Object.assign({}, j, (t = {}, t[w] = b ? v + "px" : "", t[S] = h ? m + "px" : "", t.transform = "", t));
}
function Cv(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, a = r === void 0 ? !0 : r, s = n.adaptive, o = s === void 0 ? !0 : s, i = n.roundOffsets, l = i === void 0 ? !0 : i, c = {
    placement: Dn(t.placement),
    variation: oa(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: a,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, vu(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: o,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, vu(Object.assign({}, c, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Av = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Cv,
  data: {}
};
var vs = {
  passive: !0
};
function Lv(e) {
  var t = e.state, n = e.instance, r = e.options, a = r.scroll, s = a === void 0 ? !0 : a, o = r.resize, i = o === void 0 ? !0 : o, l = Ut(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && c.forEach(function(u) {
    u.addEventListener("scroll", n.update, vs);
  }), i && l.addEventListener("resize", n.update, vs), function() {
    s && c.forEach(function(u) {
      u.removeEventListener("scroll", n.update, vs);
    }), i && l.removeEventListener("resize", n.update, vs);
  };
}
const xv = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Lv,
  data: {}
};
var Rv = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Es(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Rv[t];
  });
}
var Yv = {
  start: "end",
  end: "start"
};
function pu(e) {
  return e.replace(/start|end/g, function(t) {
    return Yv[t];
  });
}
function Qi(e) {
  var t = Ut(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function el(e) {
  return sa(mr(e)).left + Qi(e).scrollLeft;
}
function Fv(e, t) {
  var n = Ut(e), r = mr(e), a = n.visualViewport, s = r.clientWidth, o = r.clientHeight, i = 0, l = 0;
  if (a) {
    s = a.width, o = a.height;
    var c = Id();
    (c || !c && t === "fixed") && (i = a.offsetLeft, l = a.offsetTop);
  }
  return {
    width: s,
    height: o,
    x: i + el(e),
    y: l
  };
}
function Uv(e) {
  var t, n = mr(e), r = Qi(e), a = (t = e.ownerDocument) == null ? void 0 : t.body, s = Er(n.scrollWidth, n.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), o = Er(n.scrollHeight, n.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), i = -r.scrollLeft + el(e), l = -r.scrollTop;
  return jn(a || n).direction === "rtl" && (i += Er(n.clientWidth, a ? a.clientWidth : 0) - s), {
    width: s,
    height: o,
    x: i,
    y: l
  };
}
function tl(e) {
  var t = jn(e), n = t.overflow, r = t.overflowX, a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + a + r);
}
function Rd(e) {
  return ["html", "body", "#document"].indexOf(On(e)) >= 0 ? e.ownerDocument.body : qt(e) && tl(e) ? e : Rd(lo(e));
}
function Ya(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Rd(e), a = r === ((n = e.ownerDocument) == null ? void 0 : n.body), s = Ut(r), o = a ? [s].concat(s.visualViewport || [], tl(r) ? r : []) : r, i = t.concat(o);
  return a ? i : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    i.concat(Ya(lo(o)))
  );
}
function si(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Vv(e, t) {
  var n = sa(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function _u(e, t, n) {
  return t === Nd ? si(Fv(e, n)) : Sr(t) ? Vv(t, n) : si(Uv(mr(e)));
}
function Wv(e) {
  var t = Ya(lo(e)), n = ["absolute", "fixed"].indexOf(jn(e).position) >= 0, r = n && qt(e) ? as(e) : e;
  return Sr(r) ? t.filter(function(a) {
    return Sr(a) && Cd(a, r) && On(a) !== "body";
  }) : [];
}
function jv(e, t, n, r) {
  var a = t === "clippingParents" ? Wv(e) : [].concat(t), s = [].concat(a, [n]), o = s[0], i = s.reduce(function(l, c) {
    var u = _u(e, c, r);
    return l.top = Er(u.top, l.top), l.right = xs(u.right, l.right), l.bottom = xs(u.bottom, l.bottom), l.left = Er(u.left, l.left), l;
  }, _u(e, o, r));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function Yd(e) {
  var t = e.reference, n = e.element, r = e.placement, a = r ? Dn(r) : null, s = r ? oa(r) : null, o = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2, l;
  switch (a) {
    case At:
      l = {
        x: o,
        y: t.y - n.height
      };
      break;
    case Jt:
      l = {
        x: o,
        y: t.y + t.height
      };
      break;
    case Qt:
      l = {
        x: t.x + t.width,
        y: i
      };
      break;
    case Lt:
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
  var c = a ? Ji(a) : null;
  if (c != null) {
    var u = c === "y" ? "height" : "width";
    switch (s) {
      case ra:
        l[c] = l[c] - (t[u] / 2 - n[u] / 2);
        break;
      case Ha:
        l[c] = l[c] + (t[u] / 2 - n[u] / 2);
        break;
    }
  }
  return l;
}
function Ba(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, a = r === void 0 ? e.placement : r, s = n.strategy, o = s === void 0 ? e.strategy : s, i = n.boundary, l = i === void 0 ? uv : i, c = n.rootBoundary, u = c === void 0 ? Nd : c, d = n.elementContext, f = d === void 0 ? Sa : d, m = n.altBoundary, p = m === void 0 ? !1 : m, v = n.padding, y = v === void 0 ? 0 : v, h = Ld(typeof y != "number" ? y : xd(y, rs)), b = f === Sa ? cv : Sa, S = e.rects.popper, w = e.elements[p ? b : f], C = jv(Sr(w) ? w : w.contextElement || mr(e.elements.popper), l, u, o), M = sa(e.elements.reference), x = Yd({
    reference: M,
    element: S,
    strategy: "absolute",
    placement: a
  }), I = si(Object.assign({}, S, x)), A = f === Sa ? I : M, R = {
    top: C.top - A.top + h.top,
    bottom: A.bottom - C.bottom + h.bottom,
    left: C.left - A.left + h.left,
    right: A.right - C.right + h.right
  }, j = e.modifiersData.offset;
  if (f === Sa && j) {
    var U = j[a];
    Object.keys(R).forEach(function(Z) {
      var me = [Qt, Jt].indexOf(Z) >= 0 ? 1 : -1, te = [At, Jt].indexOf(Z) >= 0 ? "y" : "x";
      R[Z] += U[te] * me;
    });
  }
  return R;
}
function Hv(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, a = n.boundary, s = n.rootBoundary, o = n.padding, i = n.flipVariations, l = n.allowedAutoPlacements, c = l === void 0 ? Pd : l, u = oa(r), d = u ? i ? hu : hu.filter(function(p) {
    return oa(p) === u;
  }) : rs, f = d.filter(function(p) {
    return c.indexOf(p) >= 0;
  });
  f.length === 0 && (f = d);
  var m = f.reduce(function(p, v) {
    return p[v] = Ba(e, {
      placement: v,
      boundary: a,
      rootBoundary: s,
      padding: o
    })[Dn(v)], p;
  }, {});
  return Object.keys(m).sort(function(p, v) {
    return m[p] - m[v];
  });
}
function Bv(e) {
  if (Dn(e) === Ki)
    return [];
  var t = Es(e);
  return [pu(e), t, pu(t)];
}
function Gv(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var a = n.mainAxis, s = a === void 0 ? !0 : a, o = n.altAxis, i = o === void 0 ? !0 : o, l = n.fallbackPlacements, c = n.padding, u = n.boundary, d = n.rootBoundary, f = n.altBoundary, m = n.flipVariations, p = m === void 0 ? !0 : m, v = n.allowedAutoPlacements, y = t.options.placement, h = Dn(y), b = h === y, S = l || (b || !p ? [Es(y)] : Bv(y)), w = [y].concat(S).reduce(function(N, X) {
      return N.concat(Dn(X) === Ki ? Hv(t, {
        placement: X,
        boundary: u,
        rootBoundary: d,
        padding: c,
        flipVariations: p,
        allowedAutoPlacements: v
      }) : X);
    }, []), C = t.rects.reference, M = t.rects.popper, x = /* @__PURE__ */ new Map(), I = !0, A = w[0], R = 0; R < w.length; R++) {
      var j = w[R], U = Dn(j), Z = oa(j) === ra, me = [At, Jt].indexOf(U) >= 0, te = me ? "width" : "height", fe = Ba(t, {
        placement: j,
        boundary: u,
        rootBoundary: d,
        altBoundary: f,
        padding: c
      }), we = me ? Z ? Qt : Lt : Z ? Jt : At;
      C[te] > M[te] && (we = Es(we));
      var Me = Es(we), z = [];
      if (s && z.push(fe[U] <= 0), i && z.push(fe[we] <= 0, fe[Me] <= 0), z.every(function(N) {
        return N;
      })) {
        A = j, I = !1;
        break;
      }
      x.set(j, z);
    }
    if (I)
      for (var k = p ? 3 : 1, W = function(X) {
        var le = w.find(function(Ce) {
          var $e = x.get(Ce);
          if ($e)
            return $e.slice(0, X).every(function(ke) {
              return ke;
            });
        });
        if (le)
          return A = le, "break";
      }, re = k; re > 0; re--) {
        var F = W(re);
        if (F === "break")
          break;
      }
    t.placement !== A && (t.modifiersData[r]._skip = !0, t.placement = A, t.reset = !0);
  }
}
const zv = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Gv,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function gu(e, t, n) {
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
function yu(e) {
  return [At, Qt, Jt, Lt].some(function(t) {
    return e[t] >= 0;
  });
}
function qv(e) {
  var t = e.state, n = e.name, r = t.rects.reference, a = t.rects.popper, s = t.modifiersData.preventOverflow, o = Ba(t, {
    elementContext: "reference"
  }), i = Ba(t, {
    altBoundary: !0
  }), l = gu(o, r), c = gu(i, a, s), u = yu(l), d = yu(c);
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
const Kv = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: qv
};
function Zv(e, t, n) {
  var r = Dn(e), a = [Lt, At].indexOf(r) >= 0 ? -1 : 1, s = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, o = s[0], i = s[1];
  return o = o || 0, i = (i || 0) * a, [Lt, Qt].indexOf(r) >= 0 ? {
    x: i,
    y: o
  } : {
    x: o,
    y: i
  };
}
function Xv(e) {
  var t = e.state, n = e.options, r = e.name, a = n.offset, s = a === void 0 ? [0, 0] : a, o = Pd.reduce(function(u, d) {
    return u[d] = Zv(d, t.rects, s), u;
  }, {}), i = o[t.placement], l = i.x, c = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += c), t.modifiersData[r] = o;
}
const Jv = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Xv
};
function Qv(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Yd({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const ep = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Qv,
  data: {}
};
function tp(e) {
  return e === "x" ? "y" : "x";
}
function np(e) {
  var t = e.state, n = e.options, r = e.name, a = n.mainAxis, s = a === void 0 ? !0 : a, o = n.altAxis, i = o === void 0 ? !1 : o, l = n.boundary, c = n.rootBoundary, u = n.altBoundary, d = n.padding, f = n.tether, m = f === void 0 ? !0 : f, p = n.tetherOffset, v = p === void 0 ? 0 : p, y = Ba(t, {
    boundary: l,
    rootBoundary: c,
    padding: d,
    altBoundary: u
  }), h = Dn(t.placement), b = oa(t.placement), S = !b, w = Ji(h), C = tp(w), M = t.modifiersData.popperOffsets, x = t.rects.reference, I = t.rects.popper, A = typeof v == "function" ? v(Object.assign({}, t.rects, {
    placement: t.placement
  })) : v, R = typeof A == "number" ? {
    mainAxis: A,
    altAxis: A
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, A), j = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, U = {
    x: 0,
    y: 0
  };
  if (M) {
    if (s) {
      var Z, me = w === "y" ? At : Lt, te = w === "y" ? Jt : Qt, fe = w === "y" ? "height" : "width", we = M[w], Me = we + y[me], z = we - y[te], k = m ? -I[fe] / 2 : 0, W = b === ra ? x[fe] : I[fe], re = b === ra ? -I[fe] : -x[fe], F = t.elements.arrow, N = m && F ? Xi(F) : {
        width: 0,
        height: 0
      }, X = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Ad(), le = X[me], Ce = X[te], $e = Ra(0, x[fe], N[fe]), ke = S ? x[fe] / 2 - k - $e - le - R.mainAxis : W - $e - le - R.mainAxis, nt = S ? -x[fe] / 2 + k + $e + Ce + R.mainAxis : re + $e + Ce + R.mainAxis, tt = t.elements.arrow && as(t.elements.arrow), pt = tt ? w === "y" ? tt.clientTop || 0 : tt.clientLeft || 0 : 0, D = (Z = j == null ? void 0 : j[w]) != null ? Z : 0, g = we + ke - D - pt, L = we + nt - D, ee = Ra(m ? xs(Me, g) : Me, we, m ? Er(z, L) : z);
      M[w] = ee, U[w] = ee - we;
    }
    if (i) {
      var ue, Ee = w === "x" ? At : Lt, wt = w === "x" ? Jt : Qt, it = M[C], Wt = C === "y" ? "height" : "width", mn = it + y[Ee], We = it - y[wt], Y = [At, Lt].indexOf(h) !== -1, B = (ue = j == null ? void 0 : j[C]) != null ? ue : 0, rt = Y ? mn : it - x[Wt] - I[Wt] - B + R.altAxis, at = Y ? it + x[Wt] + I[Wt] - B - R.altAxis : We, vn = m && Y ? Sv(rt, it, at) : Ra(m ? rt : mn, it, m ? at : We);
      M[C] = vn, U[C] = vn - it;
    }
    t.modifiersData[r] = U;
  }
}
const rp = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: np,
  requiresIfExists: ["offset"]
};
function ap(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function sp(e) {
  return e === Ut(e) || !qt(e) ? Qi(e) : ap(e);
}
function op(e) {
  var t = e.getBoundingClientRect(), n = aa(t.width) / e.offsetWidth || 1, r = aa(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function ip(e, t, n) {
  n === void 0 && (n = !1);
  var r = qt(t), a = qt(t) && op(t), s = mr(t), o = sa(e, a, n), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((On(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  tl(s)) && (i = sp(t)), qt(t) ? (l = sa(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : s && (l.x = el(s))), {
    x: o.left + i.scrollLeft - l.x,
    y: o.top + i.scrollTop - l.y,
    width: o.width,
    height: o.height
  };
}
function lp(e) {
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
function up(e) {
  var t = lp(e);
  return bv.reduce(function(n, r) {
    return n.concat(t.filter(function(a) {
      return a.phase === r;
    }));
  }, []);
}
function cp(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function dp(e) {
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
var bu = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function wu() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function fp(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, a = t.defaultOptions, s = a === void 0 ? bu : a;
  return function(i, l, c) {
    c === void 0 && (c = s);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, bu, s),
      modifiersData: {},
      elements: {
        reference: i,
        popper: l
      },
      attributes: {},
      styles: {}
    }, d = [], f = !1, m = {
      state: u,
      setOptions: function(h) {
        var b = typeof h == "function" ? h(u.options) : h;
        v(), u.options = Object.assign({}, s, u.options, b), u.scrollParents = {
          reference: Sr(i) ? Ya(i) : i.contextElement ? Ya(i.contextElement) : [],
          popper: Ya(l)
        };
        var S = up(dp([].concat(r, u.options.modifiers)));
        return u.orderedModifiers = S.filter(function(w) {
          return w.enabled;
        }), p(), m.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var h = u.elements, b = h.reference, S = h.popper;
          if (wu(b, S)) {
            u.rects = {
              reference: ip(b, as(S), u.options.strategy === "fixed"),
              popper: Xi(S)
            }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(R) {
              return u.modifiersData[R.name] = Object.assign({}, R.data);
            });
            for (var w = 0; w < u.orderedModifiers.length; w++) {
              if (u.reset === !0) {
                u.reset = !1, w = -1;
                continue;
              }
              var C = u.orderedModifiers[w], M = C.fn, x = C.options, I = x === void 0 ? {} : x, A = C.name;
              typeof M == "function" && (u = M({
                state: u,
                options: I,
                name: A,
                instance: m
              }) || u);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: cp(function() {
        return new Promise(function(y) {
          m.forceUpdate(), y(u);
        });
      }),
      destroy: function() {
        v(), f = !0;
      }
    };
    if (!wu(i, l))
      return m;
    m.setOptions(c).then(function(y) {
      !f && c.onFirstUpdate && c.onFirstUpdate(y);
    });
    function p() {
      u.orderedModifiers.forEach(function(y) {
        var h = y.name, b = y.options, S = b === void 0 ? {} : b, w = y.effect;
        if (typeof w == "function") {
          var C = w({
            state: u,
            name: h,
            instance: m,
            options: S
          }), M = function() {
          };
          d.push(C || M);
        }
      });
    }
    function v() {
      d.forEach(function(y) {
        return y();
      }), d = [];
    }
    return m;
  };
}
var hp = [xv, ep, Av, Ov, Jv, zv, rp, Nv, Kv], mp = /* @__PURE__ */ fp({
  defaultModifiers: hp
}), vp = Object.defineProperty, pp = (e, t, n) => t in e ? vp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ie = (e, t, n) => (pp(e, typeof t != "symbol" ? t + "" : t, n), n);
const qn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, a] of t)
    n[r] = a;
  return n;
}, _p = {}, gp = {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  viewBox: "0 0 24 24"
}, yp = /* @__PURE__ */ E("polyline", { points: "9 18 15 12 9 6" }, null, -1), bp = [
  yp
];
function wp(e, t) {
  return O(), T("svg", gp, bp);
}
const Dp = /* @__PURE__ */ qn(_p, [["render", wp]]), Op = {}, Ep = {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  viewBox: "0 0 24 24"
}, kp = /* @__PURE__ */ E("polyline", { points: "15 18 9 12 15 6" }, null, -1), Sp = [
  kp
];
function Tp(e, t) {
  return O(), T("svg", Ep, Sp);
}
const Mp = /* @__PURE__ */ qn(Op, [["render", Tp]]), $p = {}, Np = {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  viewBox: "0 0 24 24"
}, Pp = /* @__PURE__ */ E("polyline", { points: "6 9 12 15 18 9" }, null, -1), Ip = [
  Pp
];
function Cp(e, t) {
  return O(), T("svg", Np, Ip);
}
const Ap = /* @__PURE__ */ qn($p, [["render", Cp]]), Lp = {}, xp = {
  fill: "none",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  viewBox: "0 0 24 24"
}, Rp = /* @__PURE__ */ E("path", { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" }, null, -1), Yp = [
  Rp
];
function Fp(e, t) {
  return O(), T("svg", xp, Yp);
}
const Up = /* @__PURE__ */ qn(Lp, [["render", Fp]]), Vp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IconChevronDown: Ap,
  IconChevronLeft: Mp,
  IconChevronRight: Dp,
  IconClock: Up
}, Symbol.toStringTag, { value: "Module" })), ia = /* @__PURE__ */ Ve({
  __name: "BaseIcon",
  props: {
    name: { type: String, required: !0 },
    width: { type: String },
    height: { type: String },
    size: { type: String, default: "26" },
    viewBox: { type: String }
  },
  setup(e) {
    const t = e, n = P(() => t.width || t.size), r = P(() => t.height || t.size), a = P(() => Vp[`Icon${t.name}`]);
    return (s, o) => (O(), et(Dd(_(a)), {
      width: _(n),
      height: _(r),
      class: "vc-base-icon"
    }, null, 8, ["width", "height"]));
  }
});
function Fd() {
  return typeof window < "u";
}
function Wp(e) {
  return Fd() && e in window;
}
function jp(e) {
  const t = ae(!1), n = P(() => t.value ? "dark" : "light");
  let r, a;
  function s(m) {
    t.value = m.matches;
  }
  function o() {
    Wp("matchMedia") && (r = window.matchMedia("(prefers-color-scheme: dark)"), r.addEventListener("change", s), t.value = r.matches);
  }
  function i() {
    const { selector: m = ":root", darkClass: p = "dark" } = e.value, v = document.querySelector(m);
    t.value = v.classList.contains(p);
  }
  function l(m) {
    const { selector: p = ":root", darkClass: v = "dark" } = m;
    if (Fd() && p && v) {
      const y = document.querySelector(p);
      y && (a = new MutationObserver(i), a.observe(y, {
        attributes: !0,
        attributeFilter: ["class"]
      }), t.value = y.classList.contains(v));
    }
  }
  function c() {
    d();
    const m = typeof e.value;
    m === "string" && e.value.toLowerCase() === "system" ? o() : m === "object" ? l(e.value) : t.value = !!e.value;
  }
  const u = Re(() => e.value, () => c(), {
    immediate: !0
  });
  function d() {
    r && (r.removeEventListener("change", s), r = void 0), a && (a.disconnect(), a = void 0);
  }
  function f() {
    d(), u();
  }
  return ts(() => f()), {
    isDark: t,
    displayMode: n,
    cleanup: f
  };
}
var ps = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Hp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Bp = typeof ps == "object" && ps && ps.Object === Object && ps, Ud = Bp, Gp = Ud, zp = typeof self == "object" && self && self.Object === Object && self, qp = Gp || zp || Function("return this")(), Sn = qp, Kp = Sn, Zp = Kp.Symbol, uo = Zp, Du = uo, Vd = Object.prototype, Xp = Vd.hasOwnProperty, Jp = Vd.toString, Ta = Du ? Du.toStringTag : void 0;
function Qp(e) {
  var t = Xp.call(e, Ta), n = e[Ta];
  try {
    e[Ta] = void 0;
    var r = !0;
  } catch {
  }
  var a = Jp.call(e);
  return r && (t ? e[Ta] = n : delete e[Ta]), a;
}
var e_ = Qp, t_ = Object.prototype, n_ = t_.toString;
function r_(e) {
  return n_.call(e);
}
var a_ = r_, Ou = uo, s_ = e_, o_ = a_, i_ = "[object Null]", l_ = "[object Undefined]", Eu = Ou ? Ou.toStringTag : void 0;
function u_(e) {
  return e == null ? e === void 0 ? l_ : i_ : Eu && Eu in Object(e) ? s_(e) : o_(e);
}
var Tn = u_;
function c_(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Kn = c_, d_ = Tn, f_ = Kn, h_ = "[object AsyncFunction]", m_ = "[object Function]", v_ = "[object GeneratorFunction]", p_ = "[object Proxy]";
function __(e) {
  if (!f_(e))
    return !1;
  var t = d_(e);
  return t == m_ || t == v_ || t == h_ || t == p_;
}
var Cr = __, g_ = Array.isArray, dn = g_;
function y_(e) {
  return e != null && typeof e == "object";
}
var fn = y_, b_ = Tn, w_ = dn, D_ = fn, O_ = "[object String]";
function E_(e) {
  return typeof e == "string" || !w_(e) && D_(e) && b_(e) == O_;
}
var yn = E_, k_ = Tn, S_ = fn, T_ = "[object Boolean]";
function M_(e) {
  return e === !0 || e === !1 || S_(e) && k_(e) == T_;
}
var $_ = M_, N_ = Tn, P_ = fn, I_ = "[object Number]";
function C_(e) {
  return typeof e == "number" || P_(e) && N_(e) == I_;
}
var ln = C_, A_ = Tn, L_ = fn, x_ = "[object Date]";
function R_(e) {
  return L_(e) && A_(e) == x_;
}
var Y_ = R_;
function F_(e) {
  return function(t) {
    return e(t);
  };
}
var Wd = F_, Ga = {}, U_ = {
  get exports() {
    return Ga;
  },
  set exports(e) {
    Ga = e;
  }
};
(function(e, t) {
  var n = Ud, r = t && !t.nodeType && t, a = r && !0 && e && !e.nodeType && e, s = a && a.exports === r, o = s && n.process, i = function() {
    try {
      var l = a && a.require && a.require("util").types;
      return l || o && o.binding && o.binding("util");
    } catch {
    }
  }();
  e.exports = i;
})(U_, Ga);
var V_ = Y_, W_ = Wd, ku = Ga, Su = ku && ku.isDate, j_ = Su ? W_(Su) : V_, H_ = j_, B_ = Tn, G_ = fn, z_ = "[object Symbol]";
function q_(e) {
  return typeof e == "symbol" || G_(e) && B_(e) == z_;
}
var nl = q_, K_ = dn, Z_ = nl, X_ = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, J_ = /^\w*$/;
function Q_(e, t) {
  if (K_(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Z_(e) ? !0 : J_.test(e) || !X_.test(e) || t != null && e in Object(t);
}
var rl = Q_, eg = Sn, tg = eg["__core-js_shared__"], ng = tg, Wo = ng, Tu = function() {
  var e = /[^.]+$/.exec(Wo && Wo.keys && Wo.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function rg(e) {
  return !!Tu && Tu in e;
}
var ag = rg, sg = Function.prototype, og = sg.toString;
function ig(e) {
  if (e != null) {
    try {
      return og.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var jd = ig, lg = Cr, ug = ag, cg = Kn, dg = jd, fg = /[\\^$.*+?()[\]{}|]/g, hg = /^\[object .+?Constructor\]$/, mg = Function.prototype, vg = Object.prototype, pg = mg.toString, _g = vg.hasOwnProperty, gg = RegExp(
  "^" + pg.call(_g).replace(fg, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function yg(e) {
  if (!cg(e) || ug(e))
    return !1;
  var t = lg(e) ? gg : hg;
  return t.test(dg(e));
}
var bg = yg;
function wg(e, t) {
  return e == null ? void 0 : e[t];
}
var Dg = wg, Og = bg, Eg = Dg;
function kg(e, t) {
  var n = Eg(e, t);
  return Og(n) ? n : void 0;
}
var Ar = kg, Sg = Ar, Tg = Sg(Object, "create"), co = Tg, Mu = co;
function Mg() {
  this.__data__ = Mu ? Mu(null) : {}, this.size = 0;
}
var $g = Mg;
function Ng(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Pg = Ng, Ig = co, Cg = "__lodash_hash_undefined__", Ag = Object.prototype, Lg = Ag.hasOwnProperty;
function xg(e) {
  var t = this.__data__;
  if (Ig) {
    var n = t[e];
    return n === Cg ? void 0 : n;
  }
  return Lg.call(t, e) ? t[e] : void 0;
}
var Rg = xg, Yg = co, Fg = Object.prototype, Ug = Fg.hasOwnProperty;
function Vg(e) {
  var t = this.__data__;
  return Yg ? t[e] !== void 0 : Ug.call(t, e);
}
var Wg = Vg, jg = co, Hg = "__lodash_hash_undefined__";
function Bg(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = jg && t === void 0 ? Hg : t, this;
}
var Gg = Bg, zg = $g, qg = Pg, Kg = Rg, Zg = Wg, Xg = Gg;
function fa(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
fa.prototype.clear = zg;
fa.prototype.delete = qg;
fa.prototype.get = Kg;
fa.prototype.has = Zg;
fa.prototype.set = Xg;
var Jg = fa;
function Qg() {
  this.__data__ = [], this.size = 0;
}
var e1 = Qg;
function t1(e, t) {
  return e === t || e !== e && t !== t;
}
var ha = t1, n1 = ha;
function r1(e, t) {
  for (var n = e.length; n--; )
    if (n1(e[n][0], t))
      return n;
  return -1;
}
var fo = r1, a1 = fo, s1 = Array.prototype, o1 = s1.splice;
function i1(e) {
  var t = this.__data__, n = a1(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : o1.call(t, n, 1), --this.size, !0;
}
var l1 = i1, u1 = fo;
function c1(e) {
  var t = this.__data__, n = u1(t, e);
  return n < 0 ? void 0 : t[n][1];
}
var d1 = c1, f1 = fo;
function h1(e) {
  return f1(this.__data__, e) > -1;
}
var m1 = h1, v1 = fo;
function p1(e, t) {
  var n = this.__data__, r = v1(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
var _1 = p1, g1 = e1, y1 = l1, b1 = d1, w1 = m1, D1 = _1;
function ma(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ma.prototype.clear = g1;
ma.prototype.delete = y1;
ma.prototype.get = b1;
ma.prototype.has = w1;
ma.prototype.set = D1;
var ho = ma, O1 = Ar, E1 = Sn, k1 = O1(E1, "Map"), al = k1, $u = Jg, S1 = ho, T1 = al;
function M1() {
  this.size = 0, this.__data__ = {
    hash: new $u(),
    map: new (T1 || S1)(),
    string: new $u()
  };
}
var $1 = M1;
function N1(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var P1 = N1, I1 = P1;
function C1(e, t) {
  var n = e.__data__;
  return I1(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
var mo = C1, A1 = mo;
function L1(e) {
  var t = A1(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var x1 = L1, R1 = mo;
function Y1(e) {
  return R1(this, e).get(e);
}
var F1 = Y1, U1 = mo;
function V1(e) {
  return U1(this, e).has(e);
}
var W1 = V1, j1 = mo;
function H1(e, t) {
  var n = j1(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
var B1 = H1, G1 = $1, z1 = x1, q1 = F1, K1 = W1, Z1 = B1;
function va(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
va.prototype.clear = G1;
va.prototype.delete = z1;
va.prototype.get = q1;
va.prototype.has = K1;
va.prototype.set = Z1;
var sl = va, Hd = sl, X1 = "Expected a function";
function ol(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(X1);
  var n = function() {
    var r = arguments, a = t ? t.apply(this, r) : r[0], s = n.cache;
    if (s.has(a))
      return s.get(a);
    var o = e.apply(this, r);
    return n.cache = s.set(a, o) || s, o;
  };
  return n.cache = new (ol.Cache || Hd)(), n;
}
ol.Cache = Hd;
var J1 = ol, Q1 = J1, ey = 500;
function ty(e) {
  var t = Q1(e, function(r) {
    return n.size === ey && n.clear(), r;
  }), n = t.cache;
  return t;
}
var ny = ty, ry = ny, ay = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, sy = /\\(\\)?/g, oy = ry(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(ay, function(n, r, a, s) {
    t.push(a ? s.replace(sy, "$1") : r || n);
  }), t;
}), iy = oy;
function ly(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, a = Array(r); ++n < r; )
    a[n] = t(e[n], n, e);
  return a;
}
var uy = ly, Nu = uo, cy = uy, dy = dn, fy = nl, hy = 1 / 0, Pu = Nu ? Nu.prototype : void 0, Iu = Pu ? Pu.toString : void 0;
function Bd(e) {
  if (typeof e == "string")
    return e;
  if (dy(e))
    return cy(e, Bd) + "";
  if (fy(e))
    return Iu ? Iu.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -hy ? "-0" : t;
}
var my = Bd, vy = my;
function py(e) {
  return e == null ? "" : vy(e);
}
var _y = py, gy = dn, yy = rl, by = iy, wy = _y;
function Dy(e, t) {
  return gy(e) ? e : yy(e, t) ? [e] : by(wy(e));
}
var Gd = Dy, Oy = nl, Ey = 1 / 0;
function ky(e) {
  if (typeof e == "string" || Oy(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Ey ? "-0" : t;
}
var vo = ky, Sy = Gd, Ty = vo;
function My(e, t) {
  t = Sy(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[Ty(t[n++])];
  return n && n == r ? e : void 0;
}
var zd = My, $y = zd;
function Ny(e, t, n) {
  var r = e == null ? void 0 : $y(e, t);
  return r === void 0 ? n : r;
}
var wr = Ny, Py = Ar, Iy = function() {
  try {
    var e = Py(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), qd = Iy, Cu = qd;
function Cy(e, t, n) {
  t == "__proto__" && Cu ? Cu(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
var po = Cy, Ay = po, Ly = ha, xy = Object.prototype, Ry = xy.hasOwnProperty;
function Yy(e, t, n) {
  var r = e[t];
  (!(Ry.call(e, t) && Ly(r, n)) || n === void 0 && !(t in e)) && Ay(e, t, n);
}
var Fy = Yy, Uy = 9007199254740991, Vy = /^(?:0|[1-9]\d*)$/;
function Wy(e, t) {
  var n = typeof e;
  return t = t ?? Uy, !!t && (n == "number" || n != "symbol" && Vy.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var il = Wy;
function jy(e) {
  return function(t, n, r) {
    for (var a = -1, s = Object(t), o = r(t), i = o.length; i--; ) {
      var l = o[e ? i : ++a];
      if (n(s[l], l, s) === !1)
        break;
    }
    return t;
  };
}
var Hy = jy, By = Hy, Gy = By(), Kd = Gy;
function zy(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var qy = zy, Ky = Tn, Zy = fn, Xy = "[object Arguments]";
function Jy(e) {
  return Zy(e) && Ky(e) == Xy;
}
var Qy = Jy, Au = Qy, e0 = fn, Zd = Object.prototype, t0 = Zd.hasOwnProperty, n0 = Zd.propertyIsEnumerable, r0 = Au(function() {
  return arguments;
}()) ? Au : function(e) {
  return e0(e) && t0.call(e, "callee") && !n0.call(e, "callee");
}, ll = r0, la = {}, a0 = {
  get exports() {
    return la;
  },
  set exports(e) {
    la = e;
  }
};
function s0() {
  return !1;
}
var o0 = s0;
(function(e, t) {
  var n = Sn, r = o0, a = t && !t.nodeType && t, s = a && !0 && e && !e.nodeType && e, o = s && s.exports === a, i = o ? n.Buffer : void 0, l = i ? i.isBuffer : void 0, c = l || r;
  e.exports = c;
})(a0, la);
var i0 = 9007199254740991;
function l0(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= i0;
}
var ul = l0, u0 = Tn, c0 = ul, d0 = fn, f0 = "[object Arguments]", h0 = "[object Array]", m0 = "[object Boolean]", v0 = "[object Date]", p0 = "[object Error]", _0 = "[object Function]", g0 = "[object Map]", y0 = "[object Number]", b0 = "[object Object]", w0 = "[object RegExp]", D0 = "[object Set]", O0 = "[object String]", E0 = "[object WeakMap]", k0 = "[object ArrayBuffer]", S0 = "[object DataView]", T0 = "[object Float32Array]", M0 = "[object Float64Array]", $0 = "[object Int8Array]", N0 = "[object Int16Array]", P0 = "[object Int32Array]", I0 = "[object Uint8Array]", C0 = "[object Uint8ClampedArray]", A0 = "[object Uint16Array]", L0 = "[object Uint32Array]", qe = {};
qe[T0] = qe[M0] = qe[$0] = qe[N0] = qe[P0] = qe[I0] = qe[C0] = qe[A0] = qe[L0] = !0;
qe[f0] = qe[h0] = qe[k0] = qe[m0] = qe[S0] = qe[v0] = qe[p0] = qe[_0] = qe[g0] = qe[y0] = qe[b0] = qe[w0] = qe[D0] = qe[O0] = qe[E0] = !1;
function x0(e) {
  return d0(e) && c0(e.length) && !!qe[u0(e)];
}
var R0 = x0, Y0 = R0, F0 = Wd, Lu = Ga, xu = Lu && Lu.isTypedArray, U0 = xu ? F0(xu) : Y0, cl = U0, V0 = qy, W0 = ll, j0 = dn, H0 = la, B0 = il, G0 = cl, z0 = Object.prototype, q0 = z0.hasOwnProperty;
function K0(e, t) {
  var n = j0(e), r = !n && W0(e), a = !n && !r && H0(e), s = !n && !r && !a && G0(e), o = n || r || a || s, i = o ? V0(e.length, String) : [], l = i.length;
  for (var c in e)
    (t || q0.call(e, c)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    B0(c, l))) && i.push(c);
  return i;
}
var Xd = K0, Z0 = Object.prototype;
function X0(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || Z0;
  return e === n;
}
var dl = X0;
function J0(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var Jd = J0, Q0 = Jd, eb = Q0(Object.keys, Object), tb = eb, nb = dl, rb = tb, ab = Object.prototype, sb = ab.hasOwnProperty;
function ob(e) {
  if (!nb(e))
    return rb(e);
  var t = [];
  for (var n in Object(e))
    sb.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
var ib = ob, lb = Cr, ub = ul;
function cb(e) {
  return e != null && ub(e.length) && !lb(e);
}
var ss = cb, db = Xd, fb = ib, hb = ss;
function mb(e) {
  return hb(e) ? db(e) : fb(e);
}
var fl = mb, vb = Kd, pb = fl;
function _b(e, t) {
  return e && vb(e, t, pb);
}
var Qd = _b, gb = ho;
function yb() {
  this.__data__ = new gb(), this.size = 0;
}
var bb = yb;
function wb(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
var Db = wb;
function Ob(e) {
  return this.__data__.get(e);
}
var Eb = Ob;
function kb(e) {
  return this.__data__.has(e);
}
var Sb = kb, Tb = ho, Mb = al, $b = sl, Nb = 200;
function Pb(e, t) {
  var n = this.__data__;
  if (n instanceof Tb) {
    var r = n.__data__;
    if (!Mb || r.length < Nb - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new $b(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
var Ib = Pb, Cb = ho, Ab = bb, Lb = Db, xb = Eb, Rb = Sb, Yb = Ib;
function pa(e) {
  var t = this.__data__ = new Cb(e);
  this.size = t.size;
}
pa.prototype.clear = Ab;
pa.prototype.delete = Lb;
pa.prototype.get = xb;
pa.prototype.has = Rb;
pa.prototype.set = Yb;
var hl = pa, Fb = "__lodash_hash_undefined__";
function Ub(e) {
  return this.__data__.set(e, Fb), this;
}
var Vb = Ub;
function Wb(e) {
  return this.__data__.has(e);
}
var jb = Wb, Hb = sl, Bb = Vb, Gb = jb;
function Rs(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new Hb(); ++t < n; )
    this.add(e[t]);
}
Rs.prototype.add = Rs.prototype.push = Bb;
Rs.prototype.has = Gb;
var zb = Rs;
function qb(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
var ef = qb;
function Kb(e, t) {
  return e.has(t);
}
var Zb = Kb, Xb = zb, Jb = ef, Qb = Zb, ew = 1, tw = 2;
function nw(e, t, n, r, a, s) {
  var o = n & ew, i = e.length, l = t.length;
  if (i != l && !(o && l > i))
    return !1;
  var c = s.get(e), u = s.get(t);
  if (c && u)
    return c == t && u == e;
  var d = -1, f = !0, m = n & tw ? new Xb() : void 0;
  for (s.set(e, t), s.set(t, e); ++d < i; ) {
    var p = e[d], v = t[d];
    if (r)
      var y = o ? r(v, p, d, t, e, s) : r(p, v, d, e, t, s);
    if (y !== void 0) {
      if (y)
        continue;
      f = !1;
      break;
    }
    if (m) {
      if (!Jb(t, function(h, b) {
        if (!Qb(m, b) && (p === h || a(p, h, n, r, s)))
          return m.push(b);
      })) {
        f = !1;
        break;
      }
    } else if (!(p === v || a(p, v, n, r, s))) {
      f = !1;
      break;
    }
  }
  return s.delete(e), s.delete(t), f;
}
var tf = nw, rw = Sn, aw = rw.Uint8Array, nf = aw;
function sw(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, a) {
    n[++t] = [a, r];
  }), n;
}
var ow = sw;
function iw(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var lw = iw, Ru = uo, Yu = nf, uw = ha, cw = tf, dw = ow, fw = lw, hw = 1, mw = 2, vw = "[object Boolean]", pw = "[object Date]", _w = "[object Error]", gw = "[object Map]", yw = "[object Number]", bw = "[object RegExp]", ww = "[object Set]", Dw = "[object String]", Ow = "[object Symbol]", Ew = "[object ArrayBuffer]", kw = "[object DataView]", Fu = Ru ? Ru.prototype : void 0, jo = Fu ? Fu.valueOf : void 0;
function Sw(e, t, n, r, a, s, o) {
  switch (n) {
    case kw:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Ew:
      return !(e.byteLength != t.byteLength || !s(new Yu(e), new Yu(t)));
    case vw:
    case pw:
    case yw:
      return uw(+e, +t);
    case _w:
      return e.name == t.name && e.message == t.message;
    case bw:
    case Dw:
      return e == t + "";
    case gw:
      var i = dw;
    case ww:
      var l = r & hw;
      if (i || (i = fw), e.size != t.size && !l)
        return !1;
      var c = o.get(e);
      if (c)
        return c == t;
      r |= mw, o.set(e, t);
      var u = cw(i(e), i(t), r, a, s, o);
      return o.delete(e), u;
    case Ow:
      if (jo)
        return jo.call(e) == jo.call(t);
  }
  return !1;
}
var Tw = Sw;
function Mw(e, t) {
  for (var n = -1, r = t.length, a = e.length; ++n < r; )
    e[a + n] = t[n];
  return e;
}
var $w = Mw, Nw = $w, Pw = dn;
function Iw(e, t, n) {
  var r = t(e);
  return Pw(e) ? r : Nw(r, n(e));
}
var Cw = Iw;
function Aw(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, a = 0, s = []; ++n < r; ) {
    var o = e[n];
    t(o, n, e) && (s[a++] = o);
  }
  return s;
}
var Lw = Aw;
function xw() {
  return [];
}
var Rw = xw, Yw = Lw, Fw = Rw, Uw = Object.prototype, Vw = Uw.propertyIsEnumerable, Uu = Object.getOwnPropertySymbols, Ww = Uu ? function(e) {
  return e == null ? [] : (e = Object(e), Yw(Uu(e), function(t) {
    return Vw.call(e, t);
  }));
} : Fw, jw = Ww, Hw = Cw, Bw = jw, Gw = fl;
function zw(e) {
  return Hw(e, Gw, Bw);
}
var qw = zw, Vu = qw, Kw = 1, Zw = Object.prototype, Xw = Zw.hasOwnProperty;
function Jw(e, t, n, r, a, s) {
  var o = n & Kw, i = Vu(e), l = i.length, c = Vu(t), u = c.length;
  if (l != u && !o)
    return !1;
  for (var d = l; d--; ) {
    var f = i[d];
    if (!(o ? f in t : Xw.call(t, f)))
      return !1;
  }
  var m = s.get(e), p = s.get(t);
  if (m && p)
    return m == t && p == e;
  var v = !0;
  s.set(e, t), s.set(t, e);
  for (var y = o; ++d < l; ) {
    f = i[d];
    var h = e[f], b = t[f];
    if (r)
      var S = o ? r(b, h, f, t, e, s) : r(h, b, f, e, t, s);
    if (!(S === void 0 ? h === b || a(h, b, n, r, s) : S)) {
      v = !1;
      break;
    }
    y || (y = f == "constructor");
  }
  if (v && !y) {
    var w = e.constructor, C = t.constructor;
    w != C && "constructor" in e && "constructor" in t && !(typeof w == "function" && w instanceof w && typeof C == "function" && C instanceof C) && (v = !1);
  }
  return s.delete(e), s.delete(t), v;
}
var Qw = Jw, eD = Ar, tD = Sn, nD = eD(tD, "DataView"), rD = nD, aD = Ar, sD = Sn, oD = aD(sD, "Promise"), iD = oD, lD = Ar, uD = Sn, cD = lD(uD, "Set"), dD = cD, fD = Ar, hD = Sn, mD = fD(hD, "WeakMap"), vD = mD, oi = rD, ii = al, li = iD, ui = dD, ci = vD, rf = Tn, _a = jd, Wu = "[object Map]", pD = "[object Object]", ju = "[object Promise]", Hu = "[object Set]", Bu = "[object WeakMap]", Gu = "[object DataView]", _D = _a(oi), gD = _a(ii), yD = _a(li), bD = _a(ui), wD = _a(ci), yr = rf;
(oi && yr(new oi(new ArrayBuffer(1))) != Gu || ii && yr(new ii()) != Wu || li && yr(li.resolve()) != ju || ui && yr(new ui()) != Hu || ci && yr(new ci()) != Bu) && (yr = function(e) {
  var t = rf(e), n = t == pD ? e.constructor : void 0, r = n ? _a(n) : "";
  if (r)
    switch (r) {
      case _D:
        return Gu;
      case gD:
        return Wu;
      case yD:
        return ju;
      case bD:
        return Hu;
      case wD:
        return Bu;
    }
  return t;
});
var DD = yr, Ho = hl, OD = tf, ED = Tw, kD = Qw, zu = DD, qu = dn, Ku = la, SD = cl, TD = 1, Zu = "[object Arguments]", Xu = "[object Array]", _s = "[object Object]", MD = Object.prototype, Ju = MD.hasOwnProperty;
function $D(e, t, n, r, a, s) {
  var o = qu(e), i = qu(t), l = o ? Xu : zu(e), c = i ? Xu : zu(t);
  l = l == Zu ? _s : l, c = c == Zu ? _s : c;
  var u = l == _s, d = c == _s, f = l == c;
  if (f && Ku(e)) {
    if (!Ku(t))
      return !1;
    o = !0, u = !1;
  }
  if (f && !u)
    return s || (s = new Ho()), o || SD(e) ? OD(e, t, n, r, a, s) : ED(e, t, l, n, r, a, s);
  if (!(n & TD)) {
    var m = u && Ju.call(e, "__wrapped__"), p = d && Ju.call(t, "__wrapped__");
    if (m || p) {
      var v = m ? e.value() : e, y = p ? t.value() : t;
      return s || (s = new Ho()), a(v, y, n, r, s);
    }
  }
  return f ? (s || (s = new Ho()), kD(e, t, n, r, a, s)) : !1;
}
var ND = $D, PD = ND, Qu = fn;
function af(e, t, n, r, a) {
  return e === t ? !0 : e == null || t == null || !Qu(e) && !Qu(t) ? e !== e && t !== t : PD(e, t, n, r, af, a);
}
var sf = af, ID = hl, CD = sf, AD = 1, LD = 2;
function xD(e, t, n, r) {
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
      var d = new ID();
      if (r)
        var f = r(c, u, l, e, t, d);
      if (!(f === void 0 ? CD(u, c, AD | LD, r, d) : f))
        return !1;
    }
  }
  return !0;
}
var RD = xD, YD = Kn;
function FD(e) {
  return e === e && !YD(e);
}
var of = FD, UD = of, VD = fl;
function WD(e) {
  for (var t = VD(e), n = t.length; n--; ) {
    var r = t[n], a = e[r];
    t[n] = [r, a, UD(a)];
  }
  return t;
}
var jD = WD;
function HD(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
var lf = HD, BD = RD, GD = jD, zD = lf;
function qD(e) {
  var t = GD(e);
  return t.length == 1 && t[0][2] ? zD(t[0][0], t[0][1]) : function(n) {
    return n === e || BD(n, e, t);
  };
}
var KD = qD;
function ZD(e, t) {
  return e != null && t in Object(e);
}
var XD = ZD, JD = Gd, QD = ll, eO = dn, tO = il, nO = ul, rO = vo;
function aO(e, t, n) {
  t = JD(t, e);
  for (var r = -1, a = t.length, s = !1; ++r < a; ) {
    var o = rO(t[r]);
    if (!(s = e != null && n(e, o)))
      break;
    e = e[o];
  }
  return s || ++r != a ? s : (a = e == null ? 0 : e.length, !!a && nO(a) && tO(o, a) && (eO(e) || QD(e)));
}
var uf = aO, sO = XD, oO = uf;
function iO(e, t) {
  return e != null && oO(e, t, sO);
}
var lO = iO, uO = sf, cO = wr, dO = lO, fO = rl, hO = of, mO = lf, vO = vo, pO = 1, _O = 2;
function gO(e, t) {
  return fO(e) && hO(t) ? mO(vO(e), t) : function(n) {
    var r = cO(n, e);
    return r === void 0 && r === t ? dO(n, e) : uO(t, r, pO | _O);
  };
}
var yO = gO;
function bO(e) {
  return e;
}
var ml = bO;
function wO(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var DO = wO, OO = zd;
function EO(e) {
  return function(t) {
    return OO(t, e);
  };
}
var kO = EO, SO = DO, TO = kO, MO = rl, $O = vo;
function NO(e) {
  return MO(e) ? SO($O(e)) : TO(e);
}
var PO = NO, IO = KD, CO = yO, AO = ml, LO = dn, xO = PO;
function RO(e) {
  return typeof e == "function" ? e : e == null ? AO : typeof e == "object" ? LO(e) ? CO(e[0], e[1]) : IO(e) : xO(e);
}
var cf = RO, YO = po, FO = Qd, UO = cf;
function VO(e, t) {
  var n = {};
  return t = UO(t), FO(e, function(r, a, s) {
    YO(n, a, t(r, a, s));
  }), n;
}
var WO = VO;
function jO(e, t, n) {
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
var df = jO, HO = df, ec = Math.max;
function BO(e, t, n) {
  return t = ec(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, a = -1, s = ec(r.length - t, 0), o = Array(s); ++a < s; )
      o[a] = r[t + a];
    a = -1;
    for (var i = Array(t + 1); ++a < t; )
      i[a] = r[a];
    return i[t] = n(o), HO(e, this, i);
  };
}
var GO = BO;
function zO(e) {
  return function() {
    return e;
  };
}
var qO = zO, KO = qO, tc = qd, ZO = ml, XO = tc ? function(e, t) {
  return tc(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: KO(t),
    writable: !0
  });
} : ZO, JO = XO, QO = 800, eE = 16, tE = Date.now;
function nE(e) {
  var t = 0, n = 0;
  return function() {
    var r = tE(), a = eE - (r - n);
    if (n = r, a > 0) {
      if (++t >= QO)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var rE = nE, aE = JO, sE = rE, oE = sE(aE), iE = oE, lE = ml, uE = GO, cE = iE;
function dE(e, t) {
  return cE(uE(e, t, lE), e + "");
}
var vl = dE, fE = ha, hE = ss, mE = il, vE = Kn;
function pE(e, t, n) {
  if (!vE(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? hE(n) && mE(t, n.length) : r == "string" && t in n) ? fE(n[t], e) : !1;
}
var pl = pE;
function _E(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var gE = _E, yE = Kn, bE = dl, wE = gE, DE = Object.prototype, OE = DE.hasOwnProperty;
function EE(e) {
  if (!yE(e))
    return wE(e);
  var t = bE(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !OE.call(e, r)) || n.push(r);
  return n;
}
var kE = EE, SE = Xd, TE = kE, ME = ss;
function $E(e) {
  return ME(e) ? SE(e, !0) : TE(e);
}
var _l = $E, NE = vl, PE = ha, IE = pl, CE = _l, ff = Object.prototype, AE = ff.hasOwnProperty, LE = NE(function(e, t) {
  e = Object(e);
  var n = -1, r = t.length, a = r > 2 ? t[2] : void 0;
  for (a && IE(t[0], t[1], a) && (r = 1); ++n < r; )
    for (var s = t[n], o = CE(s), i = -1, l = o.length; ++i < l; ) {
      var c = o[i], u = e[c];
      (u === void 0 || PE(u, ff[c]) && !AE.call(e, c)) && (e[c] = s[c]);
    }
  return e;
}), nc = LE, xE = po, RE = ha;
function YE(e, t, n) {
  (n !== void 0 && !RE(e[t], n) || n === void 0 && !(t in e)) && xE(e, t, n);
}
var hf = YE, Ys = {}, FE = {
  get exports() {
    return Ys;
  },
  set exports(e) {
    Ys = e;
  }
};
(function(e, t) {
  var n = Sn, r = t && !t.nodeType && t, a = r && !0 && e && !e.nodeType && e, s = a && a.exports === r, o = s ? n.Buffer : void 0, i = o ? o.allocUnsafe : void 0;
  function l(c, u) {
    if (u)
      return c.slice();
    var d = c.length, f = i ? i(d) : new c.constructor(d);
    return c.copy(f), f;
  }
  e.exports = l;
})(FE, Ys);
var rc = nf;
function UE(e) {
  var t = new e.constructor(e.byteLength);
  return new rc(t).set(new rc(e)), t;
}
var VE = UE, WE = VE;
function jE(e, t) {
  var n = t ? WE(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var HE = jE;
function BE(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
var GE = BE, zE = Kn, ac = Object.create, qE = function() {
  function e() {
  }
  return function(t) {
    if (!zE(t))
      return {};
    if (ac)
      return ac(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}(), KE = qE, ZE = Jd, XE = ZE(Object.getPrototypeOf, Object), mf = XE, JE = KE, QE = mf, ek = dl;
function tk(e) {
  return typeof e.constructor == "function" && !ek(e) ? JE(QE(e)) : {};
}
var nk = tk, rk = ss, ak = fn;
function sk(e) {
  return ak(e) && rk(e);
}
var ok = sk, ik = Tn, lk = mf, uk = fn, ck = "[object Object]", dk = Function.prototype, fk = Object.prototype, vf = dk.toString, hk = fk.hasOwnProperty, mk = vf.call(Object);
function vk(e) {
  if (!uk(e) || ik(e) != ck)
    return !1;
  var t = lk(e);
  if (t === null)
    return !0;
  var n = hk.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && vf.call(n) == mk;
}
var pk = vk;
function _k(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
var pf = _k, gk = Fy, yk = po;
function bk(e, t, n, r) {
  var a = !n;
  n || (n = {});
  for (var s = -1, o = t.length; ++s < o; ) {
    var i = t[s], l = r ? r(n[i], e[i], i, n, e) : void 0;
    l === void 0 && (l = e[i]), a ? yk(n, i, l) : gk(n, i, l);
  }
  return n;
}
var wk = bk, Dk = wk, Ok = _l;
function Ek(e) {
  return Dk(e, Ok(e));
}
var kk = Ek, sc = hf, Sk = Ys, Tk = HE, Mk = GE, $k = nk, oc = ll, ic = dn, Nk = ok, Pk = la, Ik = Cr, Ck = Kn, Ak = pk, Lk = cl, lc = pf, xk = kk;
function Rk(e, t, n, r, a, s, o) {
  var i = lc(e, n), l = lc(t, n), c = o.get(l);
  if (c) {
    sc(e, n, c);
    return;
  }
  var u = s ? s(i, l, n + "", e, t, o) : void 0, d = u === void 0;
  if (d) {
    var f = ic(l), m = !f && Pk(l), p = !f && !m && Lk(l);
    u = l, f || m || p ? ic(i) ? u = i : Nk(i) ? u = Mk(i) : m ? (d = !1, u = Sk(l, !0)) : p ? (d = !1, u = Tk(l, !0)) : u = [] : Ak(l) || oc(l) ? (u = i, oc(i) ? u = xk(i) : (!Ck(i) || Ik(i)) && (u = $k(l))) : d = !1;
  }
  d && (o.set(l, u), a(u, l, r, s, o), o.delete(l)), sc(e, n, u);
}
var Yk = Rk, Fk = hl, Uk = hf, Vk = Kd, Wk = Yk, jk = Kn, Hk = _l, Bk = pf;
function _f(e, t, n, r, a) {
  e !== t && Vk(t, function(s, o) {
    if (a || (a = new Fk()), jk(s))
      Wk(e, t, o, n, _f, r, a);
    else {
      var i = r ? r(Bk(e, o), s, o + "", e, t, a) : void 0;
      i === void 0 && (i = s), Uk(e, o, i);
    }
  }, Hk);
}
var gf = _f, Gk = gf, uc = Kn;
function yf(e, t, n, r, a, s) {
  return uc(e) && uc(t) && (s.set(t, e), Gk(e, t, void 0, yf, s), s.delete(t)), e;
}
var zk = yf, qk = vl, Kk = pl;
function Zk(e) {
  return qk(function(t, n) {
    var r = -1, a = n.length, s = a > 1 ? n[a - 1] : void 0, o = a > 2 ? n[2] : void 0;
    for (s = e.length > 3 && typeof s == "function" ? (a--, s) : void 0, o && Kk(n[0], n[1], o) && (s = a < 3 ? void 0 : s, a = 1), t = Object(t); ++r < a; ) {
      var i = n[r];
      i && e(t, i, r, s);
    }
    return t;
  });
}
var Xk = Zk, Jk = gf, Qk = Xk, eS = Qk(function(e, t, n, r) {
  Jk(e, t, n, r);
}), tS = eS, nS = df, rS = vl, aS = zk, sS = tS, oS = rS(function(e) {
  return e.push(void 0, aS), nS(sS, void 0, e);
}), za = oS, iS = Object.prototype, lS = iS.hasOwnProperty;
function uS(e, t) {
  return e != null && lS.call(e, t);
}
var cS = uS, dS = cS, fS = uf;
function hS(e, t) {
  return e != null && fS(e, t, dS);
}
var bf = hS, mS = ss;
function vS(e, t) {
  return function(n, r) {
    if (n == null)
      return n;
    if (!mS(n))
      return e(n, r);
    for (var a = n.length, s = t ? a : -1, o = Object(n); (t ? s-- : ++s < a) && r(o[s], s, o) !== !1; )
      ;
    return n;
  };
}
var pS = vS, _S = Qd, gS = pS, yS = gS(_S), bS = yS;
function wS(e) {
  return e && e.length ? e[0] : void 0;
}
var wf = wS;
function DS(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
var qr = DS, OS = bS;
function ES(e, t) {
  var n;
  return OS(e, function(r, a, s) {
    return n = t(r, a, s), !n;
  }), !!n;
}
var kS = ES, SS = ef, TS = cf, MS = kS, $S = dn, NS = pl;
function PS(e, t, n) {
  var r = $S(e) ? SS : MS;
  return n && NS(e, t, n) && (t = void 0), r(e, TS(t));
}
var IS = PS;
const CS = (e) => Object.prototype.toString.call(e).slice(8, -1), Xr = (e) => H_(e) && !isNaN(e.getTime()), Hn = (e) => CS(e) === "Object", gl = bf, cc = (e, t) => IS(t, (n) => bf(e, n)), je = (e, t, n = "0") => {
  for (e = e != null ? String(e) : "", t = t || 2; e.length < t; )
    e = `${n}${e}`;
  return e;
}, Kt = (e) => Array.isArray(e), Yn = (e) => Kt(e) && e.length > 0, Fs = (e) => e == null ? e ?? null : document && yn(e) ? document.querySelector(e) : e.$el ?? e, sr = (e, t, n, r = void 0) => {
  e.removeEventListener(t, n, r);
}, or = (e, t, n, r = void 0) => (e.addEventListener(t, n, r), () => sr(e, t, n, r)), ks = (e, t) => !!e && !!t && (e === t || e.contains(t)), gs = (e, t) => {
  (e.key === " " || e.key === "Enter") && (t(e), e.preventDefault());
}, Df = (e, ...t) => {
  const n = {};
  let r;
  for (r in e)
    t.includes(r) || (n[r] = e[r]);
  return n;
}, Of = (e, t) => {
  const n = {};
  return t.forEach((r) => {
    r in e && (n[r] = e[r]);
  }), n;
};
function AS(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
const Us = () => {
  function e() {
    return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
  }
  return `${e() + e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`;
}, LS = ["base", "start", "end", "startEnd"], xS = [
  "class",
  "wrapperClass",
  "contentClass",
  "style",
  "contentStyle",
  "color",
  "fillMode"
], RS = { base: {}, start: {}, end: {} };
function yl(e, t, n = RS) {
  let r = e, a = {};
  t === !0 || yn(t) ? (r = yn(t) ? t : r, a = { ...n }) : Hn(t) && (cc(t, LS) ? a = { ...t } : a = {
    base: { ...t },
    start: { ...t },
    end: { ...t }
  });
  const s = za(
    a,
    { start: a.startEnd, end: a.startEnd },
    n
  );
  return Object.entries(s).forEach(([o, i]) => {
    let l = r;
    i === !0 || yn(i) ? (l = yn(i) ? i : l, s[o] = { color: l }) : Hn(i) && (cc(i, xS) ? s[o] = { ...i } : s[o] = {}), za(s[o], { color: l });
  }), s;
}
class YS {
  constructor() {
    ie(this, "type", "highlight");
  }
  normalizeConfig(t, n) {
    return yl(t, n, {
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
class bl {
  constructor(t, n) {
    ie(this, "type", ""), ie(this, "collectionType", ""), this.type = t, this.collectionType = n;
  }
  normalizeConfig(t, n) {
    return yl(t, n);
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
class FS extends bl {
  constructor() {
    super("content", "content");
  }
  normalizeConfig(t, n) {
    return yl("base", n);
  }
}
class US extends bl {
  constructor() {
    super("dot", "dots");
  }
}
class VS extends bl {
  constructor() {
    super("bar", "bars");
  }
}
class WS {
  constructor(t) {
    ie(this, "color"), ie(this, "renderers", [
      new FS(),
      new YS(),
      new US(),
      new VS()
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
const jS = 300, HS = 60, BS = 80, GS = {
  maxSwipeTime: jS,
  minHorizontalSwipeDistance: HS,
  maxVerticalSwipeDistance: BS
}, zS = "MMMM YYYY", qS = "W", KS = "MMM", ZS = "h A", XS = [
  "L",
  "YYYY-MM-DD",
  "YYYY/MM/DD"
], JS = [
  "L h:mm A",
  "YYYY-MM-DD h:mm A",
  "YYYY/MM/DD h:mm A"
], QS = [
  "L HH:mm",
  "YYYY-MM-DD HH:mm",
  "YYYY/MM/DD HH:mm"
], eT = [
  "h:mm A"
], tT = [
  "HH:mm"
], nT = "WWW, MMM D, YYYY", rT = [
  "L",
  "YYYY-MM-DD",
  "YYYY/MM/DD"
], aT = "iso", sT = "YYYY-MM-DDTHH:mm:ss.SSSZ", oT = {
  title: zS,
  weekdays: qS,
  navMonths: KS,
  hours: ZS,
  input: XS,
  inputDateTime: JS,
  inputDateTime24hr: QS,
  inputTime: eT,
  inputTime24hr: tT,
  dayPopover: nT,
  data: rT,
  model: aT,
  iso: sT
}, Bn = {
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
Bn.en = Bn["en-US"];
Bn.es = Bn["es-ES"];
Bn.no = Bn.nb;
Bn.zh = Bn["zh-CN"];
const iT = Object.entries(Bn).reduce(
  (e, [t, { dow: n, L: r }]) => (e[t] = {
    id: t,
    firstDayOfWeek: n,
    masks: { L: r }
  }, e),
  {}
), lT = {
  componentPrefix: "V",
  color: "blue",
  isDark: !1,
  navVisibility: "click",
  titlePosition: "center",
  transition: "slide-h",
  touch: GS,
  masks: oT,
  locales: iT,
  datePicker: {
    updateOnInput: !0,
    inputDebounce: 1e3,
    popover: {
      visibility: "hover-focus",
      placement: "bottom-start",
      isInteractive: !0
    }
  }
}, di = Vi(lT), uT = P(() => WO(di.locales, (e) => (e.masks = za(e.masks, di.masks), e))), fr = (e) => typeof window < "u" && gl(window.__vcalendar__, e) ? wr(window.__vcalendar__, e) : wr(di, e);
var Vs = {}, cT = {
  get exports() {
    return Vs;
  },
  set exports(e) {
    Vs = e;
  }
}, Ws = {}, dT = {
  get exports() {
    return Ws;
  },
  set exports(e) {
    Ws = e;
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
})(dT, Ws);
var js = {}, fT = {
  get exports() {
    return js;
  },
  set exports(e) {
    js = e;
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
})(fT, js);
var Hs = {}, hT = {
  get exports() {
    return Hs;
  },
  set exports(e) {
    Hs = e;
  }
}, Bs = {}, mT = {
  get exports() {
    return Bs;
  },
  set exports(e) {
    Bs = e;
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
      for (var u = l.formatToParts(c), d = [], f = 0; f < u.length; f++) {
        var m = r[u[f].type];
        m >= 0 && (d[m] = parseInt(u[f].value, 10));
      }
      return d;
    } catch (p) {
      if (p instanceof RangeError)
        return [NaN];
      throw p;
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
})(mT, Bs);
var Gs = {}, vT = {
  get exports() {
    return Gs;
  },
  set exports(e) {
    Gs = e;
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
})(vT, Gs);
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = l;
  var n = a(Bs), r = a(Gs);
  function a(v) {
    return v && v.__esModule ? v : { default: v };
  }
  var s = 36e5, o = 6e4, i = {
    timezone: /([Z+-].*)$/,
    timezoneZ: /^(Z)$/,
    timezoneHH: /^([+-]\d{2})$/,
    timezoneHHMM: /^([+-]\d{2}):?(\d{2})$/
  };
  function l(v, y, h) {
    var b, S;
    if (!v || (b = i.timezoneZ.exec(v), b))
      return 0;
    var w;
    if (b = i.timezoneHH.exec(v), b)
      return w = parseInt(b[1], 10), f(w) ? -(w * s) : NaN;
    if (b = i.timezoneHHMM.exec(v), b) {
      w = parseInt(b[1], 10);
      var C = parseInt(b[2], 10);
      return f(w, C) ? (S = Math.abs(w) * s + C * o, w > 0 ? -S : S) : NaN;
    }
    if (p(v)) {
      y = new Date(y || Date.now());
      var M = h ? y : c(y), x = u(M, v), I = h ? x : d(y, x, v);
      return -I;
    }
    return NaN;
  }
  function c(v) {
    return (0, r.default)(v.getFullYear(), v.getMonth(), v.getDate(), v.getHours(), v.getMinutes(), v.getSeconds(), v.getMilliseconds());
  }
  function u(v, y) {
    var h = (0, n.default)(v, y), b = (0, r.default)(h[0], h[1] - 1, h[2], h[3] % 24, h[4], h[5], 0).getTime(), S = v.getTime(), w = S % 1e3;
    return S -= w >= 0 ? w : 1e3 + w, b - S;
  }
  function d(v, y, h) {
    var b = v.getTime(), S = b - y, w = u(new Date(S), h);
    if (y === w)
      return y;
    S -= w - y;
    var C = u(new Date(S), h);
    return w === C ? w : Math.max(w, C);
  }
  function f(v, y) {
    return -23 <= v && v <= 23 && (y == null || 0 <= y && y <= 59);
  }
  var m = {};
  function p(v) {
    if (m[v])
      return !0;
    try {
      return new Intl.DateTimeFormat(void 0, {
        timeZone: v
      }), m[v] = !0, !0;
    } catch {
      return !1;
    }
  }
  e.exports = t.default;
})(hT, Hs);
var zs = {}, pT = {
  get exports() {
    return zs;
  },
  set exports(e) {
    zs = e;
  }
};
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = void 0;
  var n = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/, r = n;
  t.default = r, e.exports = t.default;
})(pT, zs);
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = d;
  var n = o(Ws), r = o(js), a = o(Hs), s = o(zs);
  function o(I) {
    return I && I.__esModule ? I : { default: I };
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
  function d(I, A) {
    if (arguments.length < 1)
      throw new TypeError("1 argument required, but only " + arguments.length + " present");
    if (I === null)
      return /* @__PURE__ */ new Date(NaN);
    var R = A || {}, j = R.additionalDigits == null ? c : (0, n.default)(R.additionalDigits);
    if (j !== 2 && j !== 1 && j !== 0)
      throw new RangeError("additionalDigits must be 0, 1 or 2");
    if (I instanceof Date || typeof I == "object" && Object.prototype.toString.call(I) === "[object Date]")
      return new Date(I.getTime());
    if (typeof I == "number" || Object.prototype.toString.call(I) === "[object Number]")
      return new Date(I);
    if (!(typeof I == "string" || Object.prototype.toString.call(I) === "[object String]"))
      return /* @__PURE__ */ new Date(NaN);
    var U = f(I), Z = m(U.date, j), me = Z.year, te = Z.restDateString, fe = p(te, me);
    if (isNaN(fe))
      return /* @__PURE__ */ new Date(NaN);
    if (fe) {
      var we = fe.getTime(), Me = 0, z;
      if (U.time && (Me = v(U.time), isNaN(Me)))
        return /* @__PURE__ */ new Date(NaN);
      if (U.timeZone || R.timeZone) {
        if (z = (0, a.default)(U.timeZone || R.timeZone, new Date(we + Me)), isNaN(z))
          return /* @__PURE__ */ new Date(NaN);
      } else
        z = (0, r.default)(new Date(we + Me)), z = (0, r.default)(new Date(we + Me + z));
      return new Date(we + Me + z);
    } else
      return /* @__PURE__ */ new Date(NaN);
  }
  function f(I) {
    var A = {}, R = u.dateTimePattern.exec(I), j;
    if (R ? (A.date = R[1], j = R[3]) : (R = u.datePattern.exec(I), R ? (A.date = R[1], j = R[2]) : (A.date = null, j = I)), j) {
      var U = u.timeZone.exec(j);
      U ? (A.time = j.replace(U[1], ""), A.timeZone = U[1].trim()) : A.time = j;
    }
    return A;
  }
  function m(I, A) {
    var R = u.YYY[A], j = u.YYYYY[A], U;
    if (U = u.YYYY.exec(I) || j.exec(I), U) {
      var Z = U[1];
      return {
        year: parseInt(Z, 10),
        restDateString: I.slice(Z.length)
      };
    }
    if (U = u.YY.exec(I) || R.exec(I), U) {
      var me = U[1];
      return {
        year: parseInt(me, 10) * 100,
        restDateString: I.slice(me.length)
      };
    }
    return {
      year: null
    };
  }
  function p(I, A) {
    if (A === null)
      return null;
    var R, j, U, Z;
    if (I.length === 0)
      return j = /* @__PURE__ */ new Date(0), j.setUTCFullYear(A), j;
    if (R = u.MM.exec(I), R)
      return j = /* @__PURE__ */ new Date(0), U = parseInt(R[1], 10) - 1, w(A, U) ? (j.setUTCFullYear(A, U), j) : /* @__PURE__ */ new Date(NaN);
    if (R = u.DDD.exec(I), R) {
      j = /* @__PURE__ */ new Date(0);
      var me = parseInt(R[1], 10);
      return C(A, me) ? (j.setUTCFullYear(A, 0, me), j) : /* @__PURE__ */ new Date(NaN);
    }
    if (R = u.MMDD.exec(I), R) {
      j = /* @__PURE__ */ new Date(0), U = parseInt(R[1], 10) - 1;
      var te = parseInt(R[2], 10);
      return w(A, U, te) ? (j.setUTCFullYear(A, U, te), j) : /* @__PURE__ */ new Date(NaN);
    }
    if (R = u.Www.exec(I), R)
      return Z = parseInt(R[1], 10) - 1, M(A, Z) ? y(A, Z) : /* @__PURE__ */ new Date(NaN);
    if (R = u.WwwD.exec(I), R) {
      Z = parseInt(R[1], 10) - 1;
      var fe = parseInt(R[2], 10) - 1;
      return M(A, Z, fe) ? y(A, Z, fe) : /* @__PURE__ */ new Date(NaN);
    }
    return null;
  }
  function v(I) {
    var A, R, j;
    if (A = u.HH.exec(I), A)
      return R = parseFloat(A[1].replace(",", ".")), x(R) ? R % 24 * i : NaN;
    if (A = u.HHMM.exec(I), A)
      return R = parseInt(A[1], 10), j = parseFloat(A[2].replace(",", ".")), x(R, j) ? R % 24 * i + j * l : NaN;
    if (A = u.HHMMSS.exec(I), A) {
      R = parseInt(A[1], 10), j = parseInt(A[2], 10);
      var U = parseFloat(A[3].replace(",", "."));
      return x(R, j, U) ? R % 24 * i + j * l + U * 1e3 : NaN;
    }
    return null;
  }
  function y(I, A, R) {
    A = A || 0, R = R || 0;
    var j = /* @__PURE__ */ new Date(0);
    j.setUTCFullYear(I, 0, 4);
    var U = j.getUTCDay() || 7, Z = A * 7 + R + 1 - U;
    return j.setUTCDate(j.getUTCDate() + Z), j;
  }
  var h = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], b = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function S(I) {
    return I % 400 === 0 || I % 4 === 0 && I % 100 !== 0;
  }
  function w(I, A, R) {
    if (A < 0 || A > 11)
      return !1;
    if (R != null) {
      if (R < 1)
        return !1;
      var j = S(I);
      if (j && R > b[A] || !j && R > h[A])
        return !1;
    }
    return !0;
  }
  function C(I, A) {
    if (A < 1)
      return !1;
    var R = S(I);
    return !(R && A > 366 || !R && A > 365);
  }
  function M(I, A, R) {
    return !(A < 0 || A > 52 || R != null && (R < 0 || R > 6));
  }
  function x(I, A, R) {
    return !(I != null && (I < 0 || I >= 25) || A != null && (A < 0 || A >= 60) || R != null && (R < 0 || R >= 60));
  }
  e.exports = t.default;
})(cT, Vs);
const _T = /* @__PURE__ */ Hp(Vs);
function Et(e, t) {
  if (t.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present");
}
function Ss(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ss = function(n) {
    return typeof n;
  } : Ss = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Ss(e);
}
function Zn(e) {
  Et(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || Ss(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), /* @__PURE__ */ new Date(NaN));
}
function ga(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
var gT = {};
function wl() {
  return gT;
}
function Tr(e, t) {
  var n, r, a, s, o, i, l, c;
  Et(1, arguments);
  var u = wl(), d = ga((n = (r = (a = (s = t == null ? void 0 : t.weekStartsOn) !== null && s !== void 0 ? s : t == null || (o = t.locale) === null || o === void 0 || (i = o.options) === null || i === void 0 ? void 0 : i.weekStartsOn) !== null && a !== void 0 ? a : u.weekStartsOn) !== null && r !== void 0 ? r : (l = u.locale) === null || l === void 0 || (c = l.options) === null || c === void 0 ? void 0 : c.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var f = Zn(e), m = f.getDay(), p = (m < d ? 7 : 0) + m - d;
  return f.setDate(f.getDate() - p), f.setHours(0, 0, 0, 0), f;
}
function dc(e) {
  var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
var yT = 6048e5;
function bT(e, t, n) {
  Et(2, arguments);
  var r = Tr(e, n), a = Tr(t, n), s = r.getTime() - dc(r), o = a.getTime() - dc(a);
  return Math.round((s - o) / yT);
}
function wT(e) {
  Et(1, arguments);
  var t = Zn(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function DT(e) {
  Et(1, arguments);
  var t = Zn(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function OT(e, t) {
  return Et(1, arguments), bT(wT(e), DT(e), t) + 1;
}
function ET(e, t) {
  var n, r, a, s, o, i, l, c;
  Et(1, arguments);
  var u = Zn(e), d = u.getFullYear(), f = wl(), m = ga((n = (r = (a = (s = t == null ? void 0 : t.firstWeekContainsDate) !== null && s !== void 0 ? s : t == null || (o = t.locale) === null || o === void 0 || (i = o.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && a !== void 0 ? a : f.firstWeekContainsDate) !== null && r !== void 0 ? r : (l = f.locale) === null || l === void 0 || (c = l.options) === null || c === void 0 ? void 0 : c.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(m >= 1 && m <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var p = /* @__PURE__ */ new Date(0);
  p.setFullYear(d + 1, 0, m), p.setHours(0, 0, 0, 0);
  var v = Tr(p, t), y = /* @__PURE__ */ new Date(0);
  y.setFullYear(d, 0, m), y.setHours(0, 0, 0, 0);
  var h = Tr(y, t);
  return u.getTime() >= v.getTime() ? d + 1 : u.getTime() >= h.getTime() ? d : d - 1;
}
function kT(e, t) {
  var n, r, a, s, o, i, l, c;
  Et(1, arguments);
  var u = wl(), d = ga((n = (r = (a = (s = t == null ? void 0 : t.firstWeekContainsDate) !== null && s !== void 0 ? s : t == null || (o = t.locale) === null || o === void 0 || (i = o.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && a !== void 0 ? a : u.firstWeekContainsDate) !== null && r !== void 0 ? r : (l = u.locale) === null || l === void 0 || (c = l.options) === null || c === void 0 ? void 0 : c.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), f = ET(e, t), m = /* @__PURE__ */ new Date(0);
  m.setFullYear(f, 0, d), m.setHours(0, 0, 0, 0);
  var p = Tr(m, t);
  return p;
}
var ST = 6048e5;
function TT(e, t) {
  Et(1, arguments);
  var n = Zn(e), r = Tr(n, t).getTime() - kT(n, t).getTime();
  return Math.round(r / ST) + 1;
}
function qs(e) {
  return Et(1, arguments), Tr(e, {
    weekStartsOn: 1
  });
}
function MT(e) {
  Et(1, arguments);
  var t = Zn(e), n = t.getFullYear(), r = /* @__PURE__ */ new Date(0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  var a = qs(r), s = /* @__PURE__ */ new Date(0);
  s.setFullYear(n, 0, 4), s.setHours(0, 0, 0, 0);
  var o = qs(s);
  return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= o.getTime() ? n : n - 1;
}
function $T(e) {
  Et(1, arguments);
  var t = MT(e), n = /* @__PURE__ */ new Date(0);
  n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0);
  var r = qs(n);
  return r;
}
var NT = 6048e5;
function PT(e) {
  Et(1, arguments);
  var t = Zn(e), n = qs(t).getTime() - $T(t).getTime();
  return Math.round(n / NT) + 1;
}
function $t(e, t) {
  Et(2, arguments);
  var n = Zn(e), r = ga(t);
  return isNaN(r) ? /* @__PURE__ */ new Date(NaN) : (r && n.setDate(n.getDate() + r), n);
}
function Ks(e, t) {
  Et(2, arguments);
  var n = Zn(e), r = ga(t);
  if (isNaN(r))
    return /* @__PURE__ */ new Date(NaN);
  if (!r)
    return n;
  var a = n.getDate(), s = new Date(n.getTime());
  s.setMonth(n.getMonth() + r + 1, 0);
  var o = s.getDate();
  return a >= o ? s : (n.setFullYear(s.getFullYear(), s.getMonth(), a), n);
}
function fc(e, t) {
  Et(2, arguments);
  var n = ga(t);
  return Ks(e, n * 12);
}
var Vr = /* @__PURE__ */ ((e) => (e.Any = "any", e.All = "all", e))(Vr || {}), Ef = /* @__PURE__ */ ((e) => (e.Days = "days", e.Weeks = "weeks", e.Months = "months", e.Years = "years", e))(Ef || {}), kf = /* @__PURE__ */ ((e) => (e.Days = "days", e.Weekdays = "weekdays", e.Weeks = "weeks", e.Months = "months", e.Years = "years", e))(kf || {}), Sf = /* @__PURE__ */ ((e) => (e.OrdinalWeekdays = "ordinalWeekdays", e))(Sf || {});
class IT {
  constructor(t, n, r) {
    ie(this, "validated", !0), this.type = t, this.interval = n, this.from = r, this.from || (console.error(
      'A valid "from" date is required for date interval rule. This rule will be skipped.'
    ), this.validated = !1);
  }
  passes(t) {
    if (!this.validated)
      return !0;
    const { date: n } = t;
    switch (this.type) {
      case "days":
        return Dl(this.from.date, n) % this.interval === 0;
      case "weeks":
        return ZT(this.from.date, n) % this.interval === 0;
      case "months":
        return XT(this.from.date, n) % this.interval === 0;
      case "years":
        return Af(this.from.date, n) % this.interval === 0;
      default:
        return !1;
    }
  }
}
class ya {
  constructor(t, n, r, a) {
    ie(this, "components", []), this.type = t, this.validator = r, this.getter = a, this.components = this.normalizeComponents(n);
  }
  static create(t, n) {
    switch (t) {
      case "days":
        return new CT(n);
      case "weekdays":
        return new AT(n);
      case "weeks":
        return new LT(n);
      case "months":
        return new xT(n);
      case "years":
        return new RT(n);
    }
  }
  normalizeComponents(t) {
    if (this.validator(t))
      return [t];
    if (!Kt(t))
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
class CT extends ya {
  constructor(t) {
    super(
      "days",
      t,
      UT,
      ({ day: n, dayFromEnd: r }) => [n, -r]
    );
  }
}
class AT extends ya {
  constructor(t) {
    super(
      "weekdays",
      t,
      fi,
      ({ weekday: n }) => [n]
    );
  }
}
class LT extends ya {
  constructor(t) {
    super(
      "weeks",
      t,
      VT,
      ({ week: n, weekFromEnd: r }) => [n, -r]
    );
  }
}
class xT extends ya {
  constructor(t) {
    super("months", t, WT, ({ month: n }) => [
      n
    ]);
  }
}
class RT extends ya {
  constructor(t) {
    super("years", t, ln, ({ year: n }) => [n]);
  }
}
class YT {
  constructor(t, n) {
    ie(this, "components"), this.type = t, this.components = this.normalizeComponents(n);
  }
  normalizeArrayConfig(t) {
    const n = [];
    return t.forEach((r, a) => {
      if (ln(r)) {
        if (a === 0)
          return;
        if (!hc(t[0])) {
          console.error(
            `Ordinal range for "${this.type}" rule is from -5 to -1 or 1 to 5. This rule will be skipped.`
          );
          return;
        }
        if (!fi(r)) {
          console.error(
            `Acceptable range for "${this.type}" rule is from 1 to 5. This rule will be skipped`
          );
          return;
        }
        n.push([t[0], r]);
      } else
        Kt(r) && n.push(...this.normalizeArrayConfig(r));
    }), n;
  }
  normalizeComponents(t) {
    const n = [];
    return t.forEach((r, a) => {
      if (ln(r)) {
        if (a === 0)
          return;
        if (!hc(t[0])) {
          console.error(
            `Ordinal range for "${this.type}" rule is from -5 to -1 or 1 to 5. This rule will be skipped.`
          );
          return;
        }
        if (!fi(r)) {
          console.error(
            `Acceptable range for "${this.type}" rule is from 1 to 5. This rule will be skipped`
          );
          return;
        }
        n.push([t[0], r]);
      } else
        Kt(r) && n.push(...this.normalizeArrayConfig(r));
    }), n;
  }
  passes(t) {
    const { weekday: n, weekdayOrdinal: r, weekdayOrdinalFromEnd: a } = t;
    return this.components.some(
      ([s, o]) => (s === r || s === -a) && n === o
    );
  }
}
class FT {
  constructor(t) {
    ie(this, "type", "function"), ie(this, "validated", !0), this.fn = t, Cr(t) || (console.error(
      "The function rule requires a valid function. This rule will be skipped."
    ), this.validated = !1);
  }
  passes(t) {
    return this.validated ? this.fn(t) : !0;
  }
}
class Zs {
  constructor(t, n = {}, r) {
    ie(this, "validated", !0), ie(this, "config"), ie(this, "type", Vr.Any), ie(this, "from"), ie(this, "until"), ie(this, "rules", []), ie(this, "locale", new Js()), this.parent = r, n.locale && (this.locale = n.locale), this.config = t, Cr(t) ? (this.type = Vr.All, this.rules = [new FT(t)]) : Kt(t) ? (this.type = Vr.Any, this.rules = t.map((a) => new Zs(a, n, this))) : Hn(t) ? (this.type = Vr.All, this.from = t.from ? this.locale.getDateParts(t.from) : r == null ? void 0 : r.from, this.until = t.until ? this.locale.getDateParts(t.until) : r == null ? void 0 : r.until, this.rules = this.getObjectRules(t)) : (console.error("Rule group configuration must be an object or an array."), this.validated = !1);
  }
  getObjectRules(t) {
    const n = [];
    if (t.every && (yn(t.every) && (t.every = [1, `${t.every}s`]), Kt(t.every))) {
      const [r = 1, a = Ef.Days] = t.every;
      n.push(new IT(a, r, this.from));
    }
    return Object.values(kf).forEach((r) => {
      r in t && n.push(ya.create(r, t[r]));
    }), Object.values(Sf).forEach((r) => {
      r in t && n.push(new YT(r, t[r]));
    }), t.on != null && (Kt(t.on) || (t.on = [t.on]), n.push(
      new Zs(t.on, { locale: this.locale }, this.parent)
    )), n;
  }
  passes(t) {
    return this.validated ? this.from && t.dayIndex <= this.from.dayIndex || this.until && t.dayIndex >= this.until.dayIndex ? !1 : this.type === Vr.Any ? this.rules.some((n) => n.passes(t)) : this.rules.every((n) => n.passes(t)) : !0;
  }
}
function UT(e) {
  return ln(e) ? e >= 1 && e <= 31 : !1;
}
function fi(e) {
  return ln(e) ? e >= 1 && e <= 7 : !1;
}
function VT(e) {
  return ln(e) ? e >= -6 && e <= -1 || e >= 1 && e <= 6 : !1;
}
function WT(e) {
  return ln(e) ? e >= 1 && e <= 12 : !1;
}
function hc(e) {
  return !(!ln(e) || e < -5 || e > 5 || e === 0);
}
const jT = {
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
}, Dt = 7, HT = 6, Tf = 1e3, Mf = Tf * 60, $f = Mf * 60, Ts = $f * 24, BT = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], GT = ["L", "iso"], Aa = {
  milliseconds: [0, 999, 3],
  seconds: [0, 59, 2],
  minutes: [0, 59, 2],
  hours: [0, 23, 2]
}, Nf = /d{1,2}|W{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|Z{1,4}|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g, zT = /\[([^]*?)\]/gm, mc = {
  D(e) {
    return e.day;
  },
  DD(e) {
    return je(e.day, 2);
  },
  // Do(d: DateParts, l: Locale) {
  //   return l.DoFn(d.day);
  // },
  d(e) {
    return e.weekday - 1;
  },
  dd(e) {
    return je(e.weekday - 1, 2);
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
    return je(e.month, 2);
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
    return je(e.year, 4);
  },
  h(e) {
    return e.hours % 12 || 12;
  },
  hh(e) {
    return je(e.hours % 12 || 12, 2);
  },
  H(e) {
    return e.hours;
  },
  HH(e) {
    return je(e.hours, 2);
  },
  m(e) {
    return e.minutes;
  },
  mm(e) {
    return je(e.minutes, 2);
  },
  s(e) {
    return e.seconds;
  },
  ss(e) {
    return je(e.seconds, 2);
  },
  S(e) {
    return Math.round(e.milliseconds / 100);
  },
  SS(e) {
    return je(Math.round(e.milliseconds / 10), 2);
  },
  SSS(e) {
    return je(e.milliseconds, 3);
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
    return `${t > 0 ? "-" : "+"}${je(Math.floor(Math.abs(t) / 60), 2)}`;
  },
  ZZZ(e) {
    const t = e.timezoneOffset;
    return `${t > 0 ? "-" : "+"}${je(
      Math.floor(Math.abs(t) / 60) * 100 + Math.abs(t) % 60,
      4
    )}`;
  },
  ZZZZ(e) {
    const t = e.timezoneOffset;
    return `${t > 0 ? "-" : "+"}${je(Math.floor(Math.abs(t) / 60), 2)}:${je(
      Math.abs(t) % 60,
      2
    )}`;
  }
}, er = /\d\d?/, qT = /\d{3}/, KT = /\d{4}/, Ma = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF/]+(\s*?[\u0600-\u06FF]+){1,2}/i, vc = () => {
}, pc = (e) => (t, n, r) => {
  const a = r[e].indexOf(
    n.charAt(0).toUpperCase() + n.substr(1).toLowerCase()
  );
  ~a && (t.month = a);
}, Be = {
  D: [
    er,
    (e, t) => {
      e.day = t;
    }
  ],
  Do: [
    new RegExp(er.source + Ma.source),
    (e, t) => {
      e.day = parseInt(t, 10);
    }
  ],
  d: [er, vc],
  W: [Ma, vc],
  M: [
    er,
    (e, t) => {
      e.month = t - 1;
    }
  ],
  MMM: [Ma, pc("monthNamesShort")],
  MMMM: [Ma, pc("monthNames")],
  YY: [
    er,
    (e, t) => {
      const r = +(/* @__PURE__ */ new Date()).getFullYear().toString().substr(0, 2);
      e.year = +`${t > 68 ? r - 1 : r}${t}`;
    }
  ],
  YYYY: [
    KT,
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
    qT,
    (e, t) => {
      e.milliseconds = t;
    }
  ],
  h: [
    er,
    (e, t) => {
      e.hours = t;
    }
  ],
  m: [
    er,
    (e, t) => {
      e.minutes = t;
    }
  ],
  s: [
    er,
    (e, t) => {
      e.seconds = t;
    }
  ],
  a: [
    Ma,
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
Be.DD = Be.D;
Be.dd = Be.d;
Be.WWWW = Be.WWW = Be.WW = Be.W;
Be.MM = Be.M;
Be.mm = Be.m;
Be.hh = Be.H = Be.HH = Be.h;
Be.ss = Be.s;
Be.A = Be.a;
Be.ZZZZ = Be.ZZZ = Be.ZZ = Be.Z;
function Pf(e, t) {
  return (Yn(e) && e || [
    yn(e) && e || "YYYY-MM-DD"
  ]).map(
    (n) => GT.reduce(
      (r, a) => r.replace(a, t.masks[a] || ""),
      n
    )
  );
}
function If(e) {
  return Hn(e) && "year" in e && "month" in e && "day" in e;
}
function _c(e, t = 1) {
  const n = e.getDay() + 1, r = n >= t ? t - n : -(7 - (t - n));
  return $t(e, r);
}
function Cf(e, t, n) {
  const r = Date.UTC(e, t - 1, n);
  return Dl(/* @__PURE__ */ new Date(0), new Date(r));
}
function Dl(e, t) {
  return Math.round((t.getTime() - e.getTime()) / Ts);
}
function ZT(e, t) {
  return Math.ceil(Dl(_c(e), _c(t)) / 7);
}
function Af(e, t) {
  return t.getUTCFullYear() - e.getUTCFullYear();
}
function XT(e, t) {
  return Af(e, t) * 12 + (t.getMonth() - e.getMonth());
}
function Lf(e, t = "") {
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
    const u = `${je(r, 4)}-${je(a, 2)}-${je(s, 2)}T${je(
      o,
      2
    )}:${je(i, 2)}:${je(l, 2)}.${je(c, 3)}`;
    return _T(u, { timeZone: t });
  }
  return new Date(r, a - 1, s, o, i, l, c);
}
function JT(e, t) {
  let n = new Date(e.getTime());
  t.timezone && (n = new Date(
    e.toLocaleString("en-US", { timeZone: t.timezone })
  ), n.setMilliseconds(e.getMilliseconds()));
  const r = n.getMilliseconds(), a = n.getSeconds(), s = n.getMinutes(), o = n.getHours(), i = r + a * Tf + s * Mf + o * $f, l = n.getMonth() + 1, c = n.getFullYear(), u = t.getMonthParts(l, c), d = n.getDate(), f = u.numDays - d + 1, m = n.getDay() + 1, p = Math.floor((d - 1) / 7 + 1), v = Math.floor((u.numDays - d) / 7 + 1), y = Math.ceil(
    (d + Math.abs(u.firstWeekday - u.firstDayOfWeek)) / 7
  ), h = u.numWeeks - y + 1, b = u.weeknumbers[y], S = Cf(c, l, d);
  return {
    milliseconds: r,
    seconds: a,
    minutes: s,
    hours: o,
    time: i,
    day: d,
    dayFromEnd: f,
    weekday: m,
    weekdayOrdinal: p,
    weekdayOrdinalFromEnd: v,
    week: y,
    weekFromEnd: h,
    weeknumber: b,
    month: l,
    year: c,
    date: n,
    dateTime: n.getTime(),
    dayIndex: S,
    timezoneOffset: 0,
    isValid: !0
  };
}
function QT(e, t, n) {
  return `${t}-${e}-${n}`;
}
function eM(e, t, n) {
  const r = t % 4 === 0 && t % 100 !== 0 || t % 400 === 0, a = new Date(t, e - 1, 1), s = a.getDay() + 1, o = e === 2 && r ? 29 : BT[e - 1], i = n - 1, l = OT(a, {
    weekStartsOn: i
  }), c = [], u = [];
  for (let d = 0; d < l; d++) {
    const f = $t(a, d * 7);
    c.push(TT(f, { weekStartsOn: i })), u.push(PT(f));
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
function tM() {
  const e = [];
  for (let a = 0; a < Dt; a++)
    e.push(
      Lf({
        year: 2020,
        month: 1,
        day: 5 + a,
        hours: 12
      })
    );
  return e;
}
function Bo(e, t = void 0) {
  const n = new Intl.DateTimeFormat(t, {
    weekday: e
  });
  return tM().map((r) => n.format(r));
}
function nM() {
  const e = [];
  for (let t = 0; t <= 24; t++)
    e.push(new Date(2e3, 0, 1, t));
  return e;
}
function rM(e = void 0) {
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
function xf() {
  const e = [];
  for (let t = 0; t < 12; t++)
    e.push(new Date(2e3, t, 15));
  return e;
}
function gc(e, t = void 0) {
  const n = new Intl.DateTimeFormat(t, {
    month: e,
    timeZone: "UTC"
  });
  return xf().map((r) => n.format(r));
}
function aM(e, t, n) {
  return ln(t) ? t === e : Kt(t) ? t.includes(e) : Cr(t) ? t(e, n) : !(t.min != null && t.min > e || t.max != null && t.max < e || t.interval != null && e % t.interval !== 0);
}
function La(e, t, n) {
  const r = [], [a, s, o] = t;
  for (let i = a; i <= s; i++)
    (n == null || aM(i, n, e)) && r.push({
      value: i,
      label: je(i, o)
    });
  return r;
}
function sM(e, t) {
  return {
    milliseconds: La(
      e,
      Aa.milliseconds,
      t.milliseconds
    ),
    seconds: La(e, Aa.seconds, t.seconds),
    minutes: La(e, Aa.minutes, t.minutes),
    hours: La(e, Aa.hours, t.hours)
  };
}
function oM(e, t, n, r) {
  const s = La(e, t, r).reduce((o, i) => {
    if (i.disabled)
      return o;
    if (isNaN(o))
      return i.value;
    const l = Math.abs(o - n);
    return Math.abs(i.value - n) < l ? i.value : o;
  }, NaN);
  return isNaN(s) ? n : s;
}
function iM(e, t) {
  const n = { ...e };
  return Object.entries(t).forEach(([r, a]) => {
    const s = Aa[r], o = e[r];
    n[r] = oM(
      e,
      s,
      o,
      a
    );
  }), n;
}
function yc(e, t, n) {
  return Pf(t, n).map((a) => {
    if (typeof a != "string")
      throw new Error("Invalid mask");
    let s = e;
    if (s.length > 1e3)
      return !1;
    let o = !0;
    const i = {};
    if (a.replace(Nf, (u) => {
      if (Be[u]) {
        const d = Be[u], f = s.search(d[0]);
        ~f ? s.replace(d[0], (m) => (d[1](i, m, n), s = s.substr(f + m.length), m)) : o = !1;
      }
      return Be[u] ? "" : u.slice(1, u.length - 1);
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
function lM(e, t, n) {
  if (e == null)
    return "";
  let r = Pf(t, n)[0];
  /Z$/.test(r) && (n.timezone = "utc");
  const a = [];
  r = r.replace(zT, (o, i) => (a.push(i), "??"));
  const s = n.getDateParts(e);
  return r = r.replace(
    Nf,
    (o) => o in mc ? mc[o](s, n) : o.slice(1, o.length - 1)
  ), r.replace(/\?\?/g, () => a.shift());
}
const uM = {
  daily: ["year", "month", "day"],
  weekly: ["year", "month", "week"],
  monthly: ["year", "month"]
};
function cM({
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
  } = e, d = o + (o < s ? Dt : 0) - s;
  let f = !0, m = !1, p = !1, v = 0;
  const y = new Intl.DateTimeFormat(r.id, {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric"
  });
  let h = t.numDays - d + 1, b = t.numDays - h + 1, S = Math.floor((h - 1) / Dt + 1), w = 1, C = t.numWeeks, M = 1, x = t.month, I = t.year;
  const A = /* @__PURE__ */ new Date(), R = A.getDate(), j = A.getMonth() + 1, U = A.getFullYear();
  for (let Z = 1; Z <= HT; Z++) {
    for (let me = 1, te = s; me <= Dt; me++, te += te === Dt ? 1 - Dt : 1) {
      f && te === o && (h = 1, b = e.numDays, S = Math.floor((h - 1) / Dt + 1), w = Math.floor((c - h) / Dt + 1), C = 1, M = u, x = e.month, I = e.year, f = !1, m = !0);
      const fe = r.getDateFromParams(I, x, h, 0, 0, 0, 0), we = r.getDateFromParams(I, x, h, 12, 0, 0, 0), Me = r.getDateFromParams(
        I,
        x,
        h,
        23,
        59,
        59,
        999
      ), z = fe, k = `${je(I, 4)}-${je(x, 2)}-${je(h, 2)}`, W = me, re = Dt - me, F = l[Z - 1], N = i[Z - 1], X = h === R && x === j && I === U, le = m && h === 1, Ce = m && h === c, $e = Z === 1, ke = Z === u, nt = me === 1, tt = me === Dt, pt = Cf(I, x, h);
      a.push({
        locale: r,
        id: k,
        position: ++v,
        label: h.toString(),
        ariaLabel: y.format(new Date(I, x - 1, h)),
        day: h,
        dayFromEnd: b,
        weekday: te,
        weekdayPosition: W,
        weekdayPositionFromEnd: re,
        weekdayOrdinal: S,
        weekdayOrdinalFromEnd: w,
        week: C,
        weekFromEnd: M,
        weekPosition: Z,
        weeknumber: F,
        isoWeeknumber: N,
        month: x,
        year: I,
        date: z,
        startDate: fe,
        endDate: Me,
        noonDate: we,
        dayIndex: pt,
        isToday: X,
        isFirstDay: le,
        isLastDay: Ce,
        isDisabled: !m,
        isFocusable: !m,
        isFocused: !1,
        inMonth: m,
        inPrevMonth: f,
        inNextMonth: p,
        onTop: $e,
        onBottom: ke,
        onLeft: nt,
        onRight: tt,
        classes: [
          `id-${k}`,
          `day-${h}`,
          `day-from-end-${b}`,
          `weekday-${te}`,
          `weekday-position-${W}`,
          `weekday-ordinal-${S}`,
          `weekday-ordinal-from-end-${w}`,
          `week-${C}`,
          `week-from-end-${M}`,
          {
            "is-today": X,
            "is-first-day": le,
            "is-last-day": Ce,
            "in-month": m,
            "in-prev-month": f,
            "in-next-month": p,
            "on-top": $e,
            "on-bottom": ke,
            "on-left": nt,
            "on-right": tt
          }
        ]
      }), m && Ce ? (m = !1, p = !0, h = 1, b = c, S = 1, w = Math.floor((c - h) / Dt + 1), C = 1, M = n.numWeeks, x = n.month, I = n.year) : (h++, b--, S = Math.floor((h - 1) / Dt + 1), w = Math.floor((c - h) / Dt + 1));
    }
    C++, M--;
  }
  return a;
}
function dM(e, t, n, r) {
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
  }, Array(e.length / Dt));
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
function fM(e, t) {
  return e.days.map((n) => ({
    label: t.formatDate(n.date, t.masks.weekdays),
    weekday: n.weekday
  }));
}
function Rf(e, t, n) {
  return Of(
    n.getDateParts(n.toDate(e)),
    uM[t]
  );
}
function Yf({ day: e, week: t, month: n, year: r }, a, s, o) {
  if (s === "daily" && e) {
    const i = new Date(r, n - 1, e), l = $t(i, a);
    return {
      day: l.getDate(),
      month: l.getMonth() + 1,
      year: l.getFullYear()
    };
  } else if (s === "weekly" && t) {
    const l = o.getMonthParts(n, r).firstDayOfMonth, c = $t(l, (t - 1 + a) * 7), u = o.getDateParts(c);
    return {
      week: u.week,
      month: u.month,
      year: u.year
    };
  } else {
    const i = new Date(r, n - 1, 1), l = Ks(i, a);
    return {
      month: l.getMonth() + 1,
      year: l.getFullYear()
    };
  }
}
function bn(e) {
  return e != null && e.month != null && e.year != null;
}
function hi(e, t) {
  return !bn(e) || !bn(t) ? !1 : (e = e, t = t, e.year !== t.year ? e.year < t.year : e.month && t.month && e.month !== t.month ? e.month < t.month : e.week && t.week && e.week !== t.week ? e.week < t.week : e.day && t.day && e.day !== t.day ? e.day < t.day : !1);
}
function Xs(e, t) {
  return !bn(e) || !bn(t) ? !1 : (e = e, t = t, e.year !== t.year ? e.year > t.year : e.month && t.month && e.month !== t.month ? e.month > t.month : e.week && t.week && e.week !== t.week ? e.week > t.week : e.day && t.day && e.day !== t.day ? e.day > t.day : !1);
}
function Ff(e, t, n) {
  return (e || !1) && !hi(e, t) && !Xs(e, n);
}
function hM(e, t) {
  return !e && t || e && !t ? !1 : !e && !t ? !0 : (e = e, t = t, e.year === t.year && e.month === t.month && e.week === t.week && e.day === t.day);
}
function mM(e, t, n, r) {
  if (!bn(e) || !bn(t))
    return [];
  const a = [];
  for (; !Xs(e, t); )
    a.push(e), e = Yf(e, 1, n, r);
  return a;
}
function Uf(e) {
  const { day: t, week: n, month: r, year: a } = e;
  let s = `${a}-${je(r, 2)}`;
  return n && (s = `${s}-w${n}`), t && (s = `${s}-${je(t, 2)}`), s;
}
function vM(e, t) {
  const { month: n, year: r, showWeeknumbers: a, showIsoWeeknumbers: s } = e, o = new Date(r, n - 1, 15), i = t.getMonthParts(n, r), l = t.getPrevMonthParts(n, r), c = t.getNextMonthParts(n, r), u = cM({ monthComps: i, prevMonthComps: l, nextMonthComps: c }, t), d = dM(u, a, s, t), f = fM(d[0], t);
  return {
    id: Uf(e),
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
    weekdays: f
  };
}
function pM(e, t) {
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
class bc {
  constructor(t, n, r) {
    ie(this, "keys", []), ie(this, "store", {}), this.size = t, this.createKey = n, this.createItem = r;
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
class Jr {
  constructor(t, n = new Js()) {
    ie(this, "order"), ie(this, "locale"), ie(this, "start", null), ie(this, "end", null), ie(this, "repeat", null);
    var r;
    this.locale = n;
    const { start: a, end: s, span: o, order: i, repeat: l } = t;
    Xr(a) && (this.start = n.getDateParts(a)), Xr(s) ? this.end = n.getDateParts(s) : this.start != null && o && (this.end = n.getDateParts($t(this.start.date, o - 1))), this.order = i ?? 0, l && (this.repeat = new Zs(
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
    return (Kt(t) ? t : [t]).filter((r) => r).map((r) => Jr.from(r, n));
  }
  static from(t, n) {
    if (t instanceof Jr)
      return t;
    const r = {
      start: null,
      end: null
    };
    return t != null && (Kt(t) ? (r.start = t[0] ?? null, r.end = t[1] ?? null) : Hn(t) ? Object.assign(r, t) : (r.start = t, r.end = t)), r.start != null && (r.start = new Date(r.start)), r.end != null && (r.end = new Date(r.end)), new Jr(r, n);
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
class _M {
  constructor() {
    ie(this, "records", {});
  }
  render(t, n, r) {
    var a, s, o, i;
    let l = null;
    const c = r[0].dayIndex, u = r[r.length - 1].dayIndex;
    return n.hasRepeat ? r.forEach((d) => {
      var f, m;
      if (n.startsOnDay(d)) {
        const p = n.daySpan < 1 / 0 ? n.daySpan : 1;
        l = {
          startDay: d.dayIndex,
          startTime: ((f = n.start) == null ? void 0 : f.time) ?? 0,
          endDay: d.dayIndex + p - 1,
          endTime: ((m = n.end) == null ? void 0 : m.time) ?? Ts
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
        const l = a === i.startDay, c = a === i.endDay, u = l ? i.startTime : 0, d = new Date(t.startDate.getTime() + u), f = c ? i.endTime : Ts, m = new Date(t.endDate.getTime() + f), p = u === 0 && f === Ts, v = s.order || 0;
        r.push({
          ...i,
          data: s,
          onStart: l,
          onEnd: c,
          startTime: u,
          startDate: d,
          endTime: f,
          endDate: m,
          allDay: p,
          order: v
        });
      });
    }), r.sort((s, o) => s.order - o.order), r;
  }
}
const gM = 12, yM = 5;
function bM(e, t) {
  const n = new Intl.DateTimeFormat().resolvedOptions().locale;
  let r;
  yn(e) ? r = e : gl(e, "id") && (r = e.id), r = (r || n).toLowerCase();
  const a = Object.keys(t), s = (l) => a.find((c) => c.toLowerCase() === l);
  r = s(r) || s(r.substring(0, 2)) || n;
  const o = {
    ...t["en-IE"],
    ...t[r],
    id: r,
    monthCacheSize: gM,
    pageCacheSize: yM
  };
  return Hn(e) ? za(e, o) : o;
}
let Js = class {
  constructor(t = void 0, n) {
    ie(this, "id"), ie(this, "daysInWeek"), ie(this, "firstDayOfWeek"), ie(this, "masks"), ie(this, "timezone"), ie(this, "hourLabels"), ie(this, "dayNames"), ie(this, "dayNamesShort"), ie(this, "dayNamesShorter"), ie(this, "dayNamesNarrow"), ie(this, "monthNames"), ie(this, "monthNamesShort"), ie(this, "relativeTimeNames"), ie(this, "amPm", ["am", "pm"]), ie(this, "monthCache"), ie(this, "pageCache");
    const { id: r, firstDayOfWeek: a, masks: s, monthCacheSize: o, pageCacheSize: i } = bM(t, uT.value);
    this.monthCache = new bc(
      o,
      QT,
      eM
    ), this.pageCache = new bc(i, Uf, vM), this.id = r, this.daysInWeek = Dt, this.firstDayOfWeek = AS(a, 1, Dt), this.masks = s, this.timezone = n || void 0, this.hourLabels = this.getHourLabels(), this.dayNames = Bo("long", this.id), this.dayNamesShort = Bo("short", this.id), this.dayNamesShorter = this.dayNamesShort.map((l) => l.substring(0, 2)), this.dayNamesNarrow = Bo("narrow", this.id), this.monthNames = gc("long", this.id), this.monthNamesShort = gc("short", this.id), this.relativeTimeNames = rM(this.id);
  }
  formatDate(t, n) {
    return lM(t, n, this);
  }
  parseDate(t, n) {
    return yc(t, n, this);
  }
  toDate(t, n = {}) {
    const r = /* @__PURE__ */ new Date(NaN);
    let a = r;
    const { fillDate: s, mask: o, patch: i, rules: l } = n;
    if (ln(t) ? (n.type = "number", a = /* @__PURE__ */ new Date(+t)) : yn(t) ? (n.type = "string", a = t ? yc(t, o || "iso", this) : r) : Xr(t) ? (n.type = "date", a = new Date(t.getTime())) : If(t) && (n.type = "object", a = this.getDateFromParts(t)), a && (i || l)) {
      let c = this.getDateParts(a);
      if (i && s != null) {
        const u = this.getDateParts(this.toDate(s));
        c = this.getDateParts(
          this.toDate({ ...u, ...Of(c, jT[i]) })
        );
      }
      l && (c = iM(c, l)), a = this.getDateFromParts(c);
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
    return Jr.from(t, this);
  }
  ranges(t) {
    return Jr.fromMany(t, this);
  }
  getDateParts(t) {
    return JT(t, this);
  }
  getDateFromParts(t) {
    return Lf(t, this.timezone);
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
    return pM(t, n);
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
    return nM().map((t) => this.formatDate(t, this.masks.hours));
  }
  getDayId(t) {
    return this.formatDate(t, "YYYY-MM-DD");
  }
};
class Vf {
  constructor(t, n, r) {
    ie(this, "key", ""), ie(this, "hashcode", ""), ie(this, "highlight", null), ie(this, "content", null), ie(this, "dot", null), ie(this, "bar", null), ie(this, "event", null), ie(this, "popover", null), ie(this, "customData", null), ie(this, "ranges"), ie(this, "hasRanges", !1), ie(this, "order", 0), ie(this, "pinPage", !1), ie(this, "maxRepeatSpan", 0), ie(this, "locale");
    const { dates: a } = Object.assign(
      this,
      { hashcode: "", order: 0, pinPage: !1 },
      t
    );
    this.key || (this.key = Us()), this.locale = r, n.normalizeGlyphs(this), this.ranges = r.ranges(a ?? []), this.hasRanges = !!Yn(this.ranges), this.maxRepeatSpan = this.ranges.filter((s) => s.hasRepeat).map((s) => s.daySpan).reduce((s, o) => Math.max(s, o), 0);
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
    for (this.maxRepeatSpan > 1 && (s = this.locale.getDateParts($t(s.date, -this.maxRepeatSpan))); s.dayIndex <= n.dayIndex; ) {
      for (const o of a)
        if (o.startsOnDay(s))
          return !0;
      s = this.locale.getDateParts($t(s.date, 1));
    }
    return !1;
  }
}
const Wf = "__vc_base_context__", jf = {
  color: {
    type: String,
    default: () => fr("color")
  },
  isDark: {
    type: [Boolean, String, Object],
    default: () => fr("isDark")
  },
  firstDayOfWeek: Number,
  masks: Object,
  locale: [String, Object],
  timezone: String,
  minDate: null,
  maxDate: null,
  disabledDates: null
};
function Hf(e) {
  const t = P(() => e.color ?? ""), n = P(() => e.isDark ?? !1), { displayMode: r } = jp(n), a = P(() => new WS(t.value)), s = P(() => {
    if (e.locale instanceof Js)
      return e.locale;
    const u = Hn(e.locale) ? e.locale : {
      id: e.locale,
      firstDayOfWeek: e.firstDayOfWeek,
      masks: e.masks
    };
    return new Js(u, e.timezone);
  }), o = P(() => s.value.masks), i = P(() => {
    const u = e.disabledDates ?? [];
    return e.minDate != null && u.push({
      start: null,
      end: $t(s.value.toDate(e.minDate), -1)
    }), e.maxDate != null && u.push({
      start: $t(s.value.toDate(e.maxDate), 1),
      end: null
    }), s.value.ranges(u);
  }), l = P(() => new Vf(
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
  return dr(Wf, c), c;
}
function wM(e) {
  return Ke(Wf, Hf(e));
}
const DM = (e, t, {
  maxSwipeTime: n,
  minHorizontalSwipeDistance: r,
  maxVerticalSwipeDistance: a
}) => {
  if (!e || !e.addEventListener || !Cr(t))
    return null;
  let s = 0, o = 0, i = null, l = !1;
  function c(d) {
    const f = d.changedTouches[0];
    s = f.screenX, o = f.screenY, i = (/* @__PURE__ */ new Date()).getTime(), l = !0;
  }
  function u(d) {
    if (!l || !i)
      return;
    l = !1;
    const f = d.changedTouches[0], m = f.screenX - s, p = f.screenY - o;
    if ((/* @__PURE__ */ new Date()).getTime() - i < n && Math.abs(m) >= r && Math.abs(p) <= a) {
      const y = { toLeft: !1, toRight: !1 };
      m < 0 ? y.toLeft = !0 : y.toRight = !0, t(y);
    }
  }
  return or(e, "touchstart", c, { passive: !0 }), or(e, "touchend", u, { passive: !0 }), () => {
    sr(e, "touchstart", c), sr(e, "touchend", u);
  };
}, Ms = {}, OM = (e, t = 10) => {
  Ms[e] = Date.now() + t;
}, EM = (e, t) => {
  if (e in Ms) {
    const n = Ms[e];
    if (Date.now() < n)
      return;
    delete Ms[e];
  }
  t();
}, kM = {
  ...jf,
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
    default: () => fr("titlePosition")
  },
  navVisibility: {
    type: String,
    default: () => fr("navVisibility")
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
}, SM = [
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
], Bf = "__vc_calendar_context__";
function TM(e, { emit: t, slots: n }) {
  const r = ae(null), a = ae(null), s = ae(null), o = ae((/* @__PURE__ */ new Date()).getDate()), i = ae(!1), l = ae(Us()), c = ae(Us()), u = ae(e.view), d = ae([]), f = ae("");
  let m = null, p = null;
  const {
    theme: v,
    color: y,
    displayMode: h,
    locale: b,
    masks: S,
    disabledAttribute: w,
    disabledDates: C
  } = wM(e), M = P(() => e.rows * e.columns), x = P(() => e.step || M.value), I = P(() => wf(d.value) ?? null), A = P(() => qr(d.value) ?? null), R = P(
    () => e.minPage || (e.minDate ? W(e.minDate) : null)
  ), j = P(
    () => e.maxPage || (e.maxDate ? W(e.maxDate) : null)
  ), U = P(() => e.navVisibility), Z = P(() => !!e.showWeeknumbers), me = P(() => !!e.showIsoWeeknumbers), te = P(() => u.value === "monthly"), fe = P(() => u.value === "weekly"), we = P(() => u.value === "daily"), Me = () => {
    i.value = !0, t("transition-start");
  }, z = () => {
    i.value = !1, t("transition-end"), m && (m.resolve(!0), m = null);
  }, k = (H, K, _e = u.value) => Yf(H, K, _e, b.value), W = (H) => Rf(H, u.value, b.value), re = (H) => {
    !w.value || !$e.value || (H.isDisabled = $e.value.cellExists(
      w.value.key,
      H.dayIndex
    ));
  }, F = (H) => {
    H.isFocusable = H.inMonth && H.day === o.value;
  }, N = (H, K) => {
    for (const _e of H)
      for (const $ of _e.days)
        if (K($) === !1)
          return;
  }, X = P(
    () => d.value.reduce((H, K) => (H.push(...K.viewDays), H), [])
  ), le = P(() => {
    const H = [];
    return (e.attributes || []).forEach((K, _e) => {
      if (!K || !K.dates)
        return;
      const $ = gl(K, "key") ? K.key : _e, q = K.order || 0;
      H.push(
        new Vf(
          {
            ...K,
            key: $,
            order: q
          },
          v.value,
          b.value
        )
      );
    }), w.value && H.push(w.value), H;
  }), Ce = P(() => Yn(le.value)), $e = P(() => {
    const H = new _M();
    return le.value.forEach((K) => {
      K.ranges.forEach((_e) => {
        H.render(K, _e, X.value);
      });
    }), H;
  }), ke = P(() => X.value.reduce((H, K) => (H[K.dayIndex] = { day: K, cells: [] }, H[K.dayIndex].cells.push(...$e.value.getCells(K)), H), {})), nt = (H, K) => {
    const _e = e.showWeeknumbers || e.showIsoWeeknumbers;
    return _e == null ? "" : $_(_e) ? _e ? "left" : "" : _e.startsWith("right") ? K > 1 ? "right" : _e : H > 1 ? "left" : _e;
  }, tt = () => {
    var H, K;
    if (!Ce.value)
      return null;
    const _e = le.value.find((he) => he.pinPage) || le.value[0];
    if (!_e || !_e.hasRanges)
      return null;
    const [$] = _e.ranges, q = ((H = $.start) == null ? void 0 : H.date) || ((K = $.end) == null ? void 0 : K.date);
    return q ? W(q) : null;
  }, pt = () => {
    if (bn(I.value))
      return I.value;
    const H = tt();
    return bn(H) ? H : W(/* @__PURE__ */ new Date());
  }, D = (H, K = {}) => {
    const { view: _e = u.value, position: $ = 1, force: q } = K, he = $ > 0 ? 1 - $ : -(M.value + $);
    let Pe = k(H, he, _e), ut = k(Pe, M.value - 1, _e);
    return q || (hi(Pe, R.value) ? Pe = R.value : Xs(ut, j.value) && (Pe = k(j.value, 1 - M.value)), ut = k(Pe, M.value - 1)), { fromPage: Pe, toPage: ut };
  }, g = (H, K, _e = "") => {
    if (_e === "none" || _e === "fade")
      return _e;
    if ((H == null ? void 0 : H.view) !== (K == null ? void 0 : K.view))
      return "fade";
    const $ = Xs(K, H), q = hi(K, H);
    return !$ && !q ? "fade" : _e === "slide-v" ? q ? "slide-down" : "slide-up" : q ? "slide-right" : "slide-left";
  }, L = (H = {}) => new Promise((K, _e) => {
    const { position: $ = 1, force: q = !1, transition: he } = H, Pe = bn(H.page) ? H.page : pt(), { fromPage: ut } = D(Pe, {
      position: $,
      force: q
    }), an = [];
    for (let Nt = 0; Nt < M.value; Nt++) {
      const Yr = k(ut, Nt), Ea = Nt + 1, hs = Math.ceil(Ea / e.columns), jt = e.rows - hs + 1, ms = Ea % e.columns || e.columns, ka = e.columns - ms + 1, Uo = nt(ms, ka);
      an.push(
        b.value.getPage({
          ...Yr,
          view: u.value,
          titlePosition: e.titlePosition,
          trimWeeks: e.trimWeeks,
          position: Ea,
          row: hs,
          rowFromEnd: jt,
          column: ms,
          columnFromEnd: ka,
          showWeeknumbers: Z.value,
          showIsoWeeknumbers: me.value,
          weeknumberPosition: Uo
        })
      );
    }
    f.value = g(
      d.value[0],
      an[0],
      he
    ), d.value = an, f.value && f.value !== "none" ? m = {
      resolve: K,
      reject: _e
    } : K(!0);
  }), ee = (H) => {
    const K = I.value ?? W(/* @__PURE__ */ new Date());
    return k(K, H);
  }, ue = (H, K = {}) => {
    const _e = bn(H) ? H : W(H);
    return Object.assign(
      K,
      D(_e, {
        ...K,
        force: !0
      })
    ), mM(
      K.fromPage,
      K.toPage,
      u.value,
      b.value
    ).map((q) => Ff(q, R.value, j.value)).every((q) => q);
  }, Ee = (H, K = {}) => ue(ee(H), K), wt = P(() => Ee(-x.value)), it = P(() => Ee(x.value)), Wt = async (H, K = {}) => !K.force && !ue(H, K) ? !1 : (K.fromPage && !hM(K.fromPage, I.value) && (a.value && a.value.hide({ hideDelay: 0 }), K.view && (OM("view", 10), u.value = K.view), await L({
    ...K,
    page: K.fromPage,
    position: 1,
    force: !0
  }), t("did-move", d.value)), !0), mn = (H, K = {}) => Wt(ee(H), K), We = () => mn(-x.value), Y = () => mn(x.value), B = (H) => {
    const K = te.value ? ".in-month" : "", _e = `.id-${b.value.getDayId(H)}${K}`, $ = `${_e}.vc-focusable, ${_e} .vc-focusable`, q = r.value;
    if (q) {
      const he = q.querySelector($);
      if (he)
        return he.focus(), !0;
    }
    return !1;
  }, rt = async (H, K = {}) => B(H) ? !0 : (await Wt(H, K), B(H)), at = (H, K) => {
    o.value = H.day, t("dayclick", H, K);
  }, vn = (H, K) => {
    t("daymouseenter", H, K);
  }, Qn = (H, K) => {
    t("daymouseleave", H, K);
  }, nn = (H, K) => {
    o.value = H.day, s.value = H, H.isFocused = !0, t("dayfocusin", H, K);
  }, rn = (H, K) => {
    s.value = null, H.isFocused = !1, t("dayfocusout", H, K);
  }, pr = (H, K) => {
    t("daykeydown", H, K);
    const _e = H.noonDate;
    let $ = null;
    switch (K.key) {
      case "ArrowLeft": {
        $ = $t(_e, -1);
        break;
      }
      case "ArrowRight": {
        $ = $t(_e, 1);
        break;
      }
      case "ArrowUp": {
        $ = $t(_e, -7);
        break;
      }
      case "ArrowDown": {
        $ = $t(_e, 7);
        break;
      }
      case "Home": {
        $ = $t(_e, -H.weekdayPosition + 1);
        break;
      }
      case "End": {
        $ = $t(_e, H.weekdayPositionFromEnd);
        break;
      }
      case "PageUp": {
        K.altKey ? $ = fc(_e, -1) : $ = Ks(_e, -1);
        break;
      }
      case "PageDown": {
        K.altKey ? $ = fc(_e, 1) : $ = Ks(_e, 1);
        break;
      }
    }
    $ && (K.preventDefault(), rt($).catch());
  }, Rr = (H) => {
    const K = s.value;
    K != null && pr(K, H);
  }, Fo = (H, K) => {
    t("weeknumberclick", H, K);
  };
  L({
    page: e.initialPage,
    position: e.initialPagePosition
  }), Ir(() => {
    !e.disablePageSwipe && r.value && (p = DM(
      r.value,
      ({ toLeft: H = !1, toRight: K = !1 }) => {
        H ? Y() : K && We();
      },
      fr("touch")
    ));
  }), ts(() => {
    d.value = [], p && p();
  }), Re(
    () => b.value,
    () => {
      L();
    }
  ), Re(
    () => M.value,
    () => L()
  ), Re(
    () => e.view,
    () => u.value = e.view
  ), Re(
    () => u.value,
    () => {
      EM("view", () => {
        L();
      }), t("update:view", u.value);
    }
  ), Re(
    () => o.value,
    () => {
      N(d.value, (H) => F(H));
    }
  ), Ui(() => {
    t("update:pages", d.value), N(d.value, (H) => {
      re(H), F(H);
    });
  });
  const fs = {
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
    transitionName: f,
    theme: v,
    color: y,
    displayMode: h,
    locale: b,
    masks: S,
    attributes: le,
    disabledAttribute: w,
    disabledDates: C,
    attributeContext: $e,
    days: X,
    dayCells: ke,
    count: M,
    step: x,
    firstPage: I,
    lastPage: A,
    canMovePrev: wt,
    canMoveNext: it,
    minPage: R,
    maxPage: j,
    isMonthly: te,
    isWeekly: fe,
    isDaily: we,
    navVisibility: U,
    showWeeknumbers: Z,
    showIsoWeeknumbers: me,
    getDateAddress: W,
    canMove: ue,
    canMoveBy: Ee,
    move: Wt,
    moveBy: mn,
    movePrev: We,
    moveNext: Y,
    onTransitionBeforeEnter: Me,
    onTransitionAfterEnter: z,
    tryFocusDate: B,
    focusDate: rt,
    onKeydown: Rr,
    onDayKeydown: pr,
    onDayClick: at,
    onDayMouseenter: vn,
    onDayMouseleave: Qn,
    onDayFocusin: nn,
    onDayFocusout: rn,
    onWeeknumberClick: Fo
  };
  return dr(Bf, fs), fs;
}
function Lr() {
  const e = Ke(Bf);
  if (e)
    return e;
  throw new Error(
    "Calendar context missing. Please verify this component is nested within a valid context provider."
  );
}
const MM = {
  inheritAttrs: !1
}, Qr = /* @__PURE__ */ Ve({
  ...MM,
  __name: "CalendarSlot",
  props: {
    name: null
  },
  setup(e) {
    const { slots: t } = Lr();
    return (n, r) => _(t)[e.name] ? (O(), et(Dd(_(t)[e.name]), Od(zn({ key: 0 }, n.$attrs)), null, 16)) : Xt(n.$slots, "default", { key: 1 });
  }
});
function mi(e) {
  document && document.dispatchEvent(
    new CustomEvent("show-popover", {
      detail: e
    })
  );
}
function Qs(e) {
  document && document.dispatchEvent(
    new CustomEvent("hide-popover", {
      detail: e
    })
  );
}
function Gf(e) {
  document && document.dispatchEvent(
    new CustomEvent("toggle-popover", {
      detail: e
    })
  );
}
function zf(e) {
  const { visibility: t } = e, n = t === "click", r = t === "hover", a = t === "hover-focus", s = t === "focus";
  e.autoHide = !n;
  let o = !1, i = !1;
  const l = (p) => {
    n && (Gf({
      ...e,
      target: e.target || p.currentTarget
    }), p.stopPropagation());
  }, c = (p) => {
    o || (o = !0, (r || a) && mi({
      ...e,
      target: e.target || p.currentTarget
    }));
  }, u = () => {
    o && (o = !1, (r || a && !i) && Qs(e));
  }, d = (p) => {
    i || (i = !0, (s || a) && mi({
      ...e,
      target: e.target || p.currentTarget
    }));
  }, f = (p) => {
    i && !ks(p.currentTarget, p.relatedTarget) && (i = !1, (s || a && !o) && Qs(e));
  }, m = {};
  switch (e.visibility) {
    case "click":
      m.click = l;
      break;
    case "hover":
      m.mousemove = c, m.mouseleave = u;
      break;
    case "focus":
      m.focusin = d, m.focusout = f;
      break;
    case "hover-focus":
      m.mousemove = c, m.mouseleave = u, m.focusin = d, m.focusout = f;
      break;
  }
  return m;
}
const wc = (e) => {
  const t = Fs(e);
  if (t == null)
    return;
  const n = t.popoverHandlers;
  !n || !n.length || (n.forEach((r) => r()), delete t.popoverHandlers);
}, Dc = (e, t) => {
  const n = Fs(e);
  if (n == null)
    return;
  const r = [], a = zf(t);
  Object.entries(a).forEach(([s, o]) => {
    r.push(or(n, s, o));
  }), n.popoverHandlers = r;
}, qf = {
  mounted(e, t) {
    const { value: n } = t;
    n && Dc(e, n);
  },
  updated(e, t) {
    const { oldValue: n, value: r } = t, a = n == null ? void 0 : n.visibility, s = r == null ? void 0 : r.visibility;
    a !== s && (a && (wc(e), s || Qs(n)), s && Dc(e, r));
  },
  unmounted(e) {
    wc(e);
  }
}, $M = ["disabled"], NM = {
  key: 1,
  type: "button",
  class: "vc-title"
}, PM = ["disabled"], Kf = /* @__PURE__ */ Ve({
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
    } = Lr(), l = P(() => {
      switch (t.page.titlePosition) {
        case "left":
          return "bottom-start";
        case "right":
          return "bottom-end";
        default:
          return "bottom";
      }
    }), c = P(() => {
      const { page: v } = t;
      return {
        id: n.value,
        visibility: r.value,
        placement: l.value,
        modifiers: [{ name: "flip", options: { fallbackPlacements: ["bottom"] } }],
        data: { page: v },
        isInteractive: !0
      };
    }), u = P(() => t.page.titlePosition.includes("left")), d = P(() => t.page.titlePosition.includes("right")), f = P(() => t.layout ? t.layout : u.value ? "tu-pn" : d.value ? "pn-tu" : "p-tu-n;"), m = P(() => ({
      prev: f.value.includes("p") && !t.hideArrows,
      title: f.value.includes("t") && !t.hideTitle,
      next: f.value.includes("n") && !t.hideArrows
    })), p = P(() => ({ gridTemplateColumns: f.value.split("").map((y) => {
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
    return (v, y) => (O(), T("div", {
      class: ct(["vc-header", { "is-lg": e.isLg, "is-xl": e.isXl, "is-2xl": e.is2xl }]),
      style: xa(_(p))
    }, [
      _(m).prev ? (O(), T("button", {
        key: 0,
        type: "button",
        class: "vc-arrow vc-prev vc-focus",
        disabled: !_(a),
        onClick: y[0] || (y[0] = //@ts-ignore
        (...h) => _(s) && _(s)(...h)),
        onKeydown: y[1] || (y[1] = du(
          //@ts-ignore
          (...h) => _(s) && _(s)(...h),
          ["space", "enter"]
        ))
      }, [
        De(Qr, {
          name: "header-prev-button",
          disabled: !_(a)
        }, {
          default: vt(() => [
            De(ia, {
              name: "ChevronLeft",
              size: "24"
            })
          ]),
          _: 1
        }, 8, ["disabled"])
      ], 40, $M)) : J("", !0),
      _(m).title ? ot((O(), T("button", NM, [
        De(Qr, {
          name: "header-title",
          title: e.page.title
        }, {
          default: vt(() => [
            E("span", null, pe(e.page.title), 1)
          ]),
          _: 1
        }, 8, ["title"])
      ])), [
        [_(qf), _(c)]
      ]) : J("", !0),
      _(m).next ? (O(), T("button", {
        key: 2,
        type: "button",
        class: "vc-arrow vc-next vc-focus",
        disabled: !_(o),
        onClick: y[2] || (y[2] = //@ts-ignore
        (...h) => _(i) && _(i)(...h)),
        onKeydown: y[3] || (y[3] = du(
          //@ts-ignore
          (...h) => _(i) && _(i)(...h),
          ["space", "enter"]
        ))
      }, [
        De(Qr, {
          name: "header-next-button",
          disabled: !_(o)
        }, {
          default: vt(() => [
            De(ia, {
              name: "ChevronRight",
              size: "24"
            })
          ]),
          _: 1
        }, 8, ["disabled"])
      ], 40, PM)) : J("", !0)
    ], 6));
  }
}), IM = Ve({
  directives: { popover: qf },
  components: { CalendarSlot: Qr },
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
    } = Lr(), f = P(() => e.day), m = P(() => r.value.getCells(f.value)), p = P(
      () => m.value.map((te) => te.data)
    ), v = P(() => ({
      ...f.value,
      attributes: p.value,
      attributeCells: m.value
    }));
    function y({ data: te }, { popovers: fe }) {
      const { key: we, customData: Me, popover: z } = te;
      if (!z)
        return;
      const k = nc(
        {
          key: we,
          customData: Me,
          attribute: te
        },
        { ...z },
        {
          visibility: z.label ? "hover" : "click",
          placement: "bottom",
          isInteractive: !z.label
        }
      );
      fe.splice(0, 0, k);
    }
    const h = P(() => {
      const te = {
        ...n.value.prepareRender({}),
        popovers: []
      };
      return m.value.forEach((fe) => {
        n.value.render(fe, te), y(fe, te);
      }), te;
    }), b = P(() => h.value.highlights), S = P(() => !!Yn(b.value)), w = P(() => h.value.content), C = P(() => h.value.dots), M = P(() => !!Yn(C.value)), x = P(() => h.value.bars), I = P(() => !!Yn(x.value)), A = P(() => h.value.popovers), R = P(
      () => A.value.map((te) => te.attribute)
    ), j = P(() => [
      "vc-day",
      ...f.value.classes,
      { "vc-day-box-center-center": !s["day-content"] },
      { "is-not-in-month": !e.day.inMonth }
    ]), U = P(() => {
      let te;
      f.value.isFocusable ? te = "0" : te = "-1";
      const fe = [
        "vc-day-content vc-focusable vc-focus vc-attr",
        { "vc-disabled": f.value.isDisabled },
        wr(qr(b.value), "contentClass"),
        wr(qr(w.value), "class") || ""
      ], we = {
        ...wr(qr(b.value), "contentStyle"),
        ...wr(qr(w.value), "style")
      };
      return {
        class: fe,
        style: we,
        tabindex: te,
        "aria-label": f.value.ariaLabel,
        "aria-disabled": !!f.value.isDisabled,
        role: "button"
      };
    }), Z = P(() => ({
      click(te) {
        o(v.value, te);
      },
      mouseenter(te) {
        i(v.value, te);
      },
      mouseleave(te) {
        l(v.value, te);
      },
      focusin(te) {
        c(v.value, te);
      },
      focusout(te) {
        u(v.value, te);
      },
      keydown(te) {
        d(v.value, te);
      }
    })), me = P(() => Yn(A.value) ? nc(
      {
        id: a.value,
        data: { day: f, attributes: R.value }
      },
      ...A.value
    ) : null);
    return {
      attributes: p,
      attributeCells: m,
      bars: x,
      dayClasses: j,
      dayContentProps: U,
      dayContentEvents: Z,
      dayPopover: me,
      glyphs: h,
      dots: C,
      hasDots: M,
      hasBars: I,
      highlights: b,
      hasHighlights: S,
      locale: t,
      popovers: A
    };
  }
}), CM = {
  key: 0,
  class: "vc-highlights vc-day-layer"
}, AM = {
  key: 1,
  class: "vc-day-layer vc-day-box-center-bottom"
}, LM = { class: "vc-dots" }, xM = {
  key: 2,
  class: "vc-day-layer vc-day-box-center-bottom"
}, RM = { class: "vc-bars" };
function YM(e, t, n, r, a, s) {
  const o = br("CalendarSlot"), i = Hm("popover");
  return O(), T("div", {
    class: ct(e.dayClasses)
  }, [
    e.hasHighlights ? (O(), T("div", CM, [
      (O(!0), T(oe, null, Ne(e.highlights, ({ key: l, wrapperClass: c, class: u, style: d }) => (O(), T("div", {
        key: l,
        class: ct(c)
      }, [
        E("div", {
          class: ct(u),
          style: xa(d)
        }, null, 6)
      ], 2))), 128))
    ])) : J("", !0),
    De(o, {
      name: "day-content",
      day: e.day,
      attributes: e.attributes,
      "attribute-cells": e.attributeCells,
      dayProps: e.dayContentProps,
      dayEvents: e.dayContentEvents,
      locale: e.locale
    }, {
      default: vt(() => [
        ot((O(), T("div", zn(e.dayContentProps, Bm(e.dayContentEvents, !0)), [
          ns(pe(e.day.label), 1)
        ], 16)), [
          [i, e.dayPopover]
        ])
      ]),
      _: 1
    }, 8, ["day", "attributes", "attribute-cells", "dayProps", "dayEvents", "locale"]),
    e.hasDots ? (O(), T("div", AM, [
      E("div", LM, [
        (O(!0), T(oe, null, Ne(e.dots, ({ key: l, class: c, style: u }) => (O(), T("span", {
          key: l,
          class: ct(c),
          style: xa(u)
        }, null, 6))), 128))
      ])
    ])) : J("", !0),
    e.hasBars ? (O(), T("div", xM, [
      E("div", RM, [
        (O(!0), T(oe, null, Ne(e.bars, ({ key: l, class: c, style: u }) => (O(), T("span", {
          key: l,
          class: ct(c),
          style: xa(u)
        }, null, 6))), 128))
      ])
    ])) : J("", !0)
  ], 2);
}
const FM = /* @__PURE__ */ qn(IM, [["render", YM]]), UM = {
  name: "CalendarPane",
  inheritAttrs: !1,
  components: { CalendarHeader: Kf, CalendarDay: FM },
  props: {
    page: { type: Object, required: !0 }
  },
  setup() {
    const { onWeeknumberClick: e } = Lr();
    return {
      onWeeknumberClick: e
    };
  }
}, VM = { class: "vc-weekdays" }, WM = ["onClick"];
function jM(e, t, n, r, a, s) {
  const o = br("CalendarHeader"), i = br("CalendarDay");
  return O(), T("div", {
    class: ct([
      "vc-pane",
      `row-${n.page.row}`,
      `row-from-end-${n.page.rowFromEnd}`,
      `column-${n.page.column}`,
      `column-from-end-${n.page.columnFromEnd}`
    ]),
    ref: "pane"
  }, [
    De(o, {
      page: n.page,
      "is-lg": "",
      "hide-arrows": ""
    }, null, 8, ["page"]),
    E("div", {
      class: ct(["vc-weeks", {
        [`vc-show-weeknumbers-${n.page.weeknumberPosition}`]: n.page.weeknumberPosition
      }])
    }, [
      E("div", VM, [
        (O(!0), T(oe, null, Ne(n.page.weekdays, ({ weekday: l, label: c }, u) => (O(), T("div", {
          key: u,
          class: ct(`vc-weekday vc-weekday-${l}`)
        }, pe(c), 3))), 128))
      ]),
      (O(!0), T(oe, null, Ne(n.page.viewWeeks, (l) => (O(), T("div", {
        key: `weeknumber-${l.weeknumber}`,
        class: "vc-week"
      }, [
        n.page.weeknumberPosition ? (O(), T("div", {
          key: 0,
          class: ct(["vc-weeknumber", `is-${n.page.weeknumberPosition}`])
        }, [
          E("span", {
            class: ct(["vc-weeknumber-content"]),
            onClick: (c) => r.onWeeknumberClick(l, c)
          }, pe(l.weeknumberDisplay), 9, WM)
        ], 2)) : J("", !0),
        (O(!0), T(oe, null, Ne(l.days, (c) => (O(), et(i, {
          key: c.id,
          day: c
        }, null, 8, ["day"]))), 128))
      ]))), 128))
    ], 2)
  ], 2);
}
const HM = /* @__PURE__ */ qn(UM, [["render", jM]]), BM = Ve({
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
    const r = ae();
    let a = null, s = null;
    const o = Vi({
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
    function i(k) {
      k && (o.direction = k.split("-")[0]);
    }
    function l({ placement: k, options: W }) {
      i(k || (W == null ? void 0 : W.placement));
    }
    const c = P(() => ({
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
    })), u = P(() => {
      const k = o.direction === "left" || o.direction === "right";
      let W = "";
      if (o.placement) {
        const re = o.placement.split("-");
        re.length > 1 && (W = re[1]);
      }
      return ["start", "top", "left"].includes(W) ? k ? "top" : "left" : ["end", "bottom", "right"].includes(W) ? k ? "bottom" : "right" : k ? "middle" : "center";
    });
    function d() {
      s && (s.destroy(), s = null);
    }
    function f() {
      Br(() => {
        const k = Fs(o.target);
        !k || !r.value || (s && s.state.elements.reference !== k && d(), s ? s.update() : s = mp(
          k,
          r.value,
          c.value
        ));
      });
    }
    function m(k) {
      Object.assign(o, Df(k, "force"));
    }
    function p(k, W) {
      clearTimeout(n), k > 0 ? n = setTimeout(W, k) : W();
    }
    function v(k) {
      return !k || !s ? !1 : Fs(k) === s.state.elements.reference;
    }
    async function y(k = {}) {
      o.force || (k.force && (o.force = !0), p(k.showDelay ?? e.showDelay, () => {
        o.isVisible && (o.force = !1, t("after-show")), m({
          ...k,
          isVisible: !0
        }), f();
      }));
    }
    function h(k = {}) {
      s && (k.target && !v(k.target) || o.force || (k.force && (o.force = !0), p(k.hideDelay ?? e.hideDelay, () => {
        o.isVisible || (o.force = !1), o.isVisible = !1;
      })));
    }
    function b(k = {}) {
      k.target != null && (o.isVisible && v(k.target) ? h(k) : y(k));
    }
    function S(k) {
      if (!s)
        return;
      const W = s.state.elements.reference;
      if (!r.value || !W)
        return;
      const re = k.target;
      ks(r.value, re) || ks(W, re) || h({ force: !0 });
    }
    function w(k) {
      (k.key === "Esc" || k.key === "Escape") && h();
    }
    function C({ detail: k }) {
      !k.id || k.id !== e.id || y(k);
    }
    function M({ detail: k }) {
      !k.id || k.id !== e.id || h(k);
    }
    function x({ detail: k }) {
      !k.id || k.id !== e.id || b(k);
    }
    function I() {
      or(document, "keydown", w), or(document, "click", S), or(document, "show-popover", C), or(document, "hide-popover", M), or(document, "toggle-popover", x);
    }
    function A() {
      sr(document, "keydown", w), sr(document, "click", S), sr(document, "show-popover", C), sr(document, "hide-popover", M), sr(document, "toggle-popover", x);
    }
    function R(k) {
      t("before-show", k);
    }
    function j(k) {
      o.force = !1, t("after-show", k);
    }
    function U(k) {
      t("before-hide", k);
    }
    function Z(k) {
      o.force = !1, d(), t("after-hide", k);
    }
    function me(k) {
      k.stopPropagation();
    }
    function te() {
      o.isHovered = !0, o.isInteractive && ["hover", "hover-focus"].includes(o.visibility) && y();
    }
    function fe() {
      if (o.isHovered = !1, !s)
        return;
      const k = s.state.elements.reference;
      o.autoHide && !o.isFocused && (!k || k !== document.activeElement) && ["hover", "hover-focus"].includes(o.visibility) && h();
    }
    function we() {
      o.isFocused = !0, o.isInteractive && ["focus", "hover-focus"].includes(o.visibility) && y();
    }
    function Me(k) {
      ["focus", "hover-focus"].includes(o.visibility) && (!k.relatedTarget || !ks(r.value, k.relatedTarget)) && (o.isFocused = !1, !o.isHovered && o.autoHide && h());
    }
    function z() {
      a != null && (a.disconnect(), a = null);
    }
    return Re(
      () => r.value,
      (k) => {
        z(), k && (a = new ResizeObserver(() => {
          s && s.update();
        }), a.observe(k));
      }
    ), Re(() => o.placement, i, {
      immediate: !0
    }), Ir(() => {
      I();
    }), ts(() => {
      d(), z(), A();
    }), {
      ...Wm(o),
      popoverRef: r,
      alignment: u,
      hide: h,
      setupPopper: f,
      beforeEnter: R,
      afterEnter: j,
      beforeLeave: U,
      afterLeave: Z,
      onClick: me,
      onMouseOver: te,
      onMouseLeave: fe,
      onFocusIn: we,
      onFocusOut: Me
    };
  }
});
function GM(e, t, n, r, a, s) {
  return O(), T("div", {
    class: ct(["vc-popover-content-wrapper", { "is-interactive": e.isInteractive }]),
    ref: "popoverRef",
    onClick: t[0] || (t[0] = (...o) => e.onClick && e.onClick(...o)),
    onMouseover: t[1] || (t[1] = (...o) => e.onMouseOver && e.onMouseOver(...o)),
    onMouseleave: t[2] || (t[2] = (...o) => e.onMouseLeave && e.onMouseLeave(...o)),
    onFocusin: t[3] || (t[3] = (...o) => e.onFocusIn && e.onFocusIn(...o)),
    onFocusout: t[4] || (t[4] = (...o) => e.onFocusOut && e.onFocusOut(...o))
  }, [
    De(Ed, {
      name: `vc-${e.transition}`,
      appear: "",
      onBeforeEnter: e.beforeEnter,
      onAfterEnter: e.afterEnter,
      onBeforeLeave: e.beforeLeave,
      onAfterLeave: e.afterLeave
    }, {
      default: vt(() => [
        e.isVisible ? (O(), T("div", zn({
          key: 0,
          tabindex: "-1",
          class: `vc-popover-content direction-${e.direction}`
        }, e.$attrs), [
          Xt(e.$slots, "default", {
            direction: e.direction,
            alignment: e.alignment,
            data: e.data,
            hide: e.hide
          }, () => [
            ns(pe(e.data), 1)
          ]),
          E("span", {
            class: ct([
              "vc-popover-caret",
              `direction-${e.direction}`,
              `align-${e.alignment}`
            ])
          }, null, 2)
        ], 16)) : J("", !0)
      ]),
      _: 3
    }, 8, ["name", "onBeforeEnter", "onAfterEnter", "onBeforeLeave", "onAfterLeave"])
  ], 34);
}
const Ol = /* @__PURE__ */ qn(BM, [["render", GM]]), zM = {
  value: { type: Object, required: !0 }
}, qM = ["input"], KM = "__vc_calendar_nav_context__";
function ZM(e, { emit: t }) {
  const n = ae(!0), r = ae(0), a = ae(0), s = 12, o = ae(null), { locale: i, masks: l, canMove: c, getDateAddress: u } = Lr();
  function d() {
    setTimeout(() => {
      if (o.value == null)
        return;
      const N = o.value.querySelector(
        ".vc-nav-item:not(:disabled)"
      );
      N && N.focus();
    }, 10);
  }
  function f(N, X) {
    t("input", { month: N, year: X }, { position: R.value });
  }
  function m(N) {
    r.value = N, n.value = !0, d();
  }
  function p(N) {
    const { year: X } = u(/* @__PURE__ */ new Date()), le = N * s, Ce = le + s, $e = [];
    for (let ke = le; ke < Ce; ke += 1) {
      let nt = !1;
      for (let tt = 1; tt < 12 && (nt = c({ month: tt, year: ke }, { position: R.value }), !nt); tt++)
        ;
      $e.push({
        year: ke,
        id: ke.toString(),
        label: ke.toString(),
        ariaLabel: ke.toString(),
        isActive: ke === A.value,
        isCurrent: ke === X,
        isDisabled: !nt,
        click: () => m(ke)
      });
    }
    return $e;
  }
  function v(N) {
    const { month: X, year: le } = u(/* @__PURE__ */ new Date());
    return xf().map((Ce, $e) => {
      const ke = $e + 1;
      return {
        month: ke,
        year: N,
        id: `${N}.${je(ke, 2)}`,
        label: i.value.formatDate(Ce, l.value.navMonths),
        ariaLabel: i.value.formatDate(Ce, "MMMM YYYY"),
        isActive: ke === I.value && N === A.value,
        isCurrent: ke === X && N === le,
        isDisabled: !c(
          { month: ke, year: N },
          { position: R.value }
        ),
        click: () => f(ke, N)
      };
    });
  }
  function y(N) {
    return Math.floor(N / s);
  }
  function h() {
    n.value = !n.value;
  }
  function b() {
    Me.value && (n.value && w(), M());
  }
  function S() {
    W.value && (n.value && C(), x());
  }
  function w() {
    r.value--;
  }
  function C() {
    r.value++;
  }
  function M() {
    a.value--;
  }
  function x() {
    a.value++;
  }
  const I = P(() => {
    var N;
    return ((N = e.value) == null ? void 0 : N.month) || 0;
  }), A = P(() => {
    var N;
    return ((N = e.value) == null ? void 0 : N.year) || 0;
  }), R = P(() => {
    var N;
    return ((N = e.value) == null ? void 0 : N.position) || 1;
  }), j = P(() => v(r.value)), U = P(() => p(a.value)), Z = P(() => wf(U.value.map((N) => N.year))), me = P(() => qr(U.value.map((N) => N.year))), te = P(() => n.value ? r.value : `${Z.value} - ${me.value}`), fe = P(
    () => v(r.value - 1).some((N) => !N.isDisabled)
  ), we = P(
    () => p(a.value - 1).some((N) => !N.isDisabled)
  ), Me = P(
    () => n.value ? fe.value : we.value
  ), z = P(
    () => v(r.value + 1).some((N) => !N.isDisabled)
  ), k = P(
    () => p(a.value + 1).some((N) => !N.isDisabled)
  ), W = P(
    () => n.value ? z.value : k.value
  ), re = P(
    () => n.value ? j.value : U.value
  );
  Re(
    () => A.value,
    () => {
      r.value = A.value;
    }
  ), Re(
    () => r.value,
    (N) => {
      a.value = y(N);
    }
  ), r.value = A.value, Ir(() => d());
  const F = {
    navContainer: o,
    title: te,
    monthMode: n,
    currentMonth: I,
    currentYear: A,
    activeItems: re,
    prevItemsEnabled: Me,
    nextItemsEnabled: W,
    toggleMode: h,
    movePrev: b,
    moveNext: S,
    movePrevYear: w,
    moveNextYear: C,
    movePrevYearGroup: M,
    moveNextYearGroup: x
  };
  return dr(KM, F), F;
}
const XM = { class: "vc-nav-header" }, JM = ["disabled"], QM = ["disabled"], e2 = { class: "vc-nav-items" }, t2 = ["data-id", "aria-label", "disabled", "onClick", "onKeydown"], n2 = /* @__PURE__ */ Ve({
  __name: "CalendarNav",
  props: zM,
  emits: qM,
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
    } = ZM(n, { emit: t });
    return (d, f) => (O(), T("div", {
      class: "vc-nav-container",
      ref_key: "navContainer",
      ref: r
    }, [
      E("div", XM, [
        E("button", {
          type: "button",
          class: "vc-nav-arrow is-left vc-focus",
          disabled: !_(s),
          onClick: f[0] || (f[0] = //@ts-ignore
          (...m) => _(c) && _(c)(...m)),
          onKeydown: f[1] || (f[1] = (m) => _(gs)(m, _(c)))
        }, [
          De(Qr, {
            name: "nav-prev-button",
            move: _(c),
            disabled: !_(s)
          }, {
            default: vt(() => [
              De(ia, {
                name: "ChevronLeft",
                width: "22px",
                height: "24px"
              })
            ]),
            _: 1
          }, 8, ["move", "disabled"])
        ], 40, JM),
        E("button", {
          type: "button",
          class: "vc-nav-title vc-focus",
          onClick: f[2] || (f[2] = //@ts-ignore
          (...m) => _(l) && _(l)(...m)),
          onKeydown: f[3] || (f[3] = (m) => _(gs)(m, _(l)))
        }, pe(_(a)), 33),
        E("button", {
          type: "button",
          class: "vc-nav-arrow is-right vc-focus",
          disabled: !_(o),
          onClick: f[4] || (f[4] = //@ts-ignore
          (...m) => _(u) && _(u)(...m)),
          onKeydown: f[5] || (f[5] = (m) => _(gs)(m, _(u)))
        }, [
          De(Qr, {
            name: "nav-next-button",
            move: _(u),
            disabled: !_(o)
          }, {
            default: vt(() => [
              De(ia, {
                name: "ChevronRight",
                width: "22px",
                height: "24px"
              })
            ]),
            _: 1
          }, 8, ["move", "disabled"])
        ], 40, QM)
      ]),
      E("div", e2, [
        (O(!0), T(oe, null, Ne(_(i), (m) => (O(), T("button", {
          key: m.label,
          type: "button",
          "data-id": m.id,
          "aria-label": m.ariaLabel,
          class: ct(["vc-nav-item vc-focus", [
            m.isActive ? "is-active" : m.isCurrent ? "is-current" : ""
          ]]),
          disabled: m.isDisabled,
          onClick: m.click,
          onKeydown: (p) => _(gs)(p, m.click)
        }, pe(m.label), 43, t2))), 128))
      ])
    ], 512));
  }
}), r2 = {
  __name: "CalendarNavPopover",
  setup(e) {
    const { navPopoverId: t, color: n, displayMode: r, navPopoverRef: a, move: s } = Lr();
    return (o, i) => (O(), et(Ol, {
      id: _(t),
      class: ct(["vc-nav-popover-container", `vc-${_(n)}`, `vc-${_(r)}`]),
      ref_key: "navPopoverRef",
      ref: a
    }, {
      default: vt(({ data: l }) => [
        De(n2, {
          value: l.page,
          onInput: _(s)
        }, null, 8, ["value", "onInput"])
      ]),
      _: 1
    }, 8, ["id", "class"]));
  }
}, a2 = Ve({
  name: "PopoverRow",
  props: {
    attribute: { type: Object, required: !0 }
  },
  setup(e) {
    return {
      indicator: P(() => {
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
}), s2 = { class: "vc-day-popover-row" }, o2 = {
  key: 0,
  class: "vc-day-popover-row-indicator"
}, i2 = { class: "vc-day-popover-row-label" };
function l2(e, t, n, r, a, s) {
  return O(), T("div", s2, [
    e.indicator ? (O(), T("div", o2, [
      E("span", {
        class: ct(e.indicator.class)
      }, null, 2)
    ])) : J("", !0),
    E("div", i2, [
      Xt(e.$slots, "default", {}, () => [
        ns(pe(e.attribute.popover ? e.attribute.popover.label : "No content provided"), 1)
      ])
    ])
  ]);
}
const u2 = /* @__PURE__ */ qn(a2, [["render", l2]]), c2 = { class: "vc-day-popover-container" }, d2 = {
  key: 0,
  class: "vc-day-popover-header"
}, f2 = /* @__PURE__ */ Ve({
  __name: "CalendarDayPopover",
  setup(e) {
    const { dayPopoverId: t, displayMode: n, color: r, masks: a, locale: s } = Lr();
    function o(l, c) {
      return s.value.formatDate(l, c);
    }
    function i(l) {
      return s.value.formatDate(l.date, a.value.dayPopover);
    }
    return (l, c) => (O(), et(Ol, {
      id: _(t),
      class: ct([`vc-${_(r)}`, `vc-${_(n)}`])
    }, {
      default: vt(({ data: { day: u, attributes: d }, hide: f }) => [
        Xt(l.$slots, "default", {
          day: u,
          dayTitle: i(u),
          attributes: d,
          format: o,
          masks: _(a),
          hide: f
        }, () => [
          E("div", c2, [
            _(a).dayPopover ? (O(), T("div", d2, pe(i(u)), 1)) : J("", !0),
            (O(!0), T(oe, null, Ne(d, (m) => (O(), et(u2, {
              key: m.key,
              attribute: m
            }, null, 8, ["attribute"]))), 128))
          ])
        ])
      ]),
      _: 3
    }, 8, ["id", "class"]));
  }
}), h2 = Ve({
  name: "Calendar",
  components: {
    CalendarHeader: Kf,
    CalendarPane: HM,
    CalendarNavPopover: r2,
    CalendarDayPopover: f2
  },
  emits: SM,
  props: kM,
  setup(e, { emit: t, slots: n }) {
    return TM(e, { emit: t, slots: n });
  }
}), m2 = { class: "vc-pane-header-wrapper" };
function v2(e, t, n, r, a, s) {
  const o = br("CalendarHeader"), i = br("CalendarPane"), l = br("CalendarDayPopover"), c = br("CalendarNavPopover");
  return O(), T(oe, null, [
    E("div", zn({ "data-helptext": "Press the arrow keys to navigate by day, Home and End to navigate to week ends, PageUp and PageDown to navigate by month, Alt+PageUp and Alt+PageDown to navigate by year" }, e.$attrs, {
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
      onMouseup: t[0] || (t[0] = kd(() => {
      }, ["prevent"])),
      ref: "containerRef"
    }), [
      E("div", {
        class: ct(["vc-pane-container", { "in-transition": e.inTransition }])
      }, [
        E("div", m2, [
          e.firstPage ? (O(), et(o, {
            key: 0,
            page: e.firstPage,
            "is-lg": "",
            "hide-title": ""
          }, null, 8, ["page"])) : J("", !0)
        ]),
        De(Ed, {
          name: `vc-${e.transitionName}`,
          onBeforeEnter: e.onTransitionBeforeEnter,
          onAfterEnter: e.onTransitionAfterEnter
        }, {
          default: vt(() => [
            (O(), T("div", {
              key: e.pages[0].id,
              class: "vc-pane-layout",
              style: xa({
                gridTemplateColumns: `repeat(${e.columns}, 1fr)`
              })
            }, [
              (O(!0), T(oe, null, Ne(e.pages, (u) => (O(), et(i, {
                key: u.id,
                page: u
              }, null, 8, ["page"]))), 128))
            ], 4))
          ]),
          _: 1
        }, 8, ["name", "onBeforeEnter", "onAfterEnter"]),
        Xt(e.$slots, "footer")
      ], 2)
    ], 16),
    De(l, null, {
      default: vt((u) => [
        Xt(e.$slots, "day-popover", Od(jm(u)))
      ]),
      _: 3
    }),
    De(c)
  ], 64);
}
const p2 = /* @__PURE__ */ qn(h2, [["render", v2]]), _2 = { class: "vc-base-select" }, g2 = ["value"], y2 = ["value", "disabled"], b2 = {
  inheritAttrs: !1
}, $a = /* @__PURE__ */ Object.assign(b2, {
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
    return (t, n) => (O(), T("div", _2, [
      e.showIcon ? (O(), et(ia, {
        key: 0,
        name: "ChevronDown",
        size: e.small ? "16" : "18"
      }, null, 8, ["size"])) : J("", !0),
      E("select", zn(t.$attrs, {
        value: e.modelValue,
        class: ["vc-focus", {
          "vc-has-icon": e.showIcon,
          "vc-align-right": e.alignRight,
          "vc-align-left": e.alignLeft,
          "vc-small": e.small
        }],
        onChange: n[0] || (n[0] = (r) => t.$emit("update:modelValue", r.target.value))
      }), [
        (O(!0), T(oe, null, Ne(e.options, (r) => (O(), T("option", {
          key: r.value,
          value: r.value,
          disabled: r.disabled
        }, pe(r.label), 9, y2))), 128))
      ], 16, g2)
    ]));
  }
}), Zf = "__vc_date_picker_context__", w2 = {
  ...jf,
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
    default: () => fr("datePicker.updateOnInput")
  },
  inputDebounce: {
    type: Number,
    default: () => fr("datePicker.inputDebounce")
  },
  popover: {
    type: [Boolean, Object],
    default: !0
  },
  dragAttribute: Object,
  selectAttribute: Object,
  attributes: [Object, Array]
}, D2 = [
  "update:modelValue",
  "drag",
  "dayclick",
  "daykeydown",
  "popover-will-show",
  "popover-did-show",
  "popover-will-hide",
  "popover-did-hide"
];
function O2(e, t) {
  const n = Hf(e), { locale: r, masks: a, disabledAttribute: s } = n, { emit: o } = t, i = ae(!1), l = ae(Us()), c = ae(null), u = ae(null), d = ae(["", ""]), f = ae(null), m = ae(null);
  let p, v, y = !0;
  const h = P(() => e.isRange || e.modelModifiers.range === !0), b = P(
    () => h.value && c.value != null ? c.value.start : null
  ), S = P(
    () => h.value && c.value != null ? c.value.end : null
  ), w = P(() => e.mode.toLowerCase() === "date"), C = P(
    () => e.mode.toLowerCase() === "datetime"
  ), M = P(() => e.mode.toLowerCase() === "time"), x = P(() => !!u.value), I = P(() => {
    let $ = "date";
    e.modelModifiers.number && ($ = "number"), e.modelModifiers.string && ($ = "string");
    const q = a.value.modelValue || "iso";
    return F({ type: $, mask: q });
  }), A = P(
    () => wt(u.value ?? c.value)
  ), R = P(() => M.value ? e.is24hr ? a.value.inputTime24hr : a.value.inputTime : C.value ? e.is24hr ? a.value.inputDateTime24hr : a.value.inputDateTime : a.value.input), j = P(() => /[Hh]/g.test(R.value)), U = P(
    () => /[dD]{1,2}|Do|W{1,4}|M{1,4}|YY(?:YY)?/g.test(R.value)
  ), Z = P(() => {
    if (j.value && U.value)
      return "dateTime";
    if (U.value)
      return "date";
    if (j.value)
      return "time";
  }), me = P(() => {
    var $;
    const q = (($ = f.value) == null ? void 0 : $.$el.previousElementSibling) ?? void 0;
    return za({}, e.popover, fr("datePicker.popover"), {
      target: q
    });
  }), te = P(
    () => zf({
      ...me.value,
      id: l.value
    })
  ), fe = P(() => h.value ? {
    start: d.value[0],
    end: d.value[1]
  } : d.value[0]), we = P(() => {
    const $ = ["start", "end"].map((q) => ({
      input: ee(q),
      change: ue(q),
      keyup: Ee,
      ...e.popover && te.value
    }));
    return h.value ? {
      start: $[0],
      end: $[1]
    } : $[0];
  }), Me = P(() => {
    if (!le(c.value))
      return null;
    const $ = {
      key: "select-drag",
      ...e.selectAttribute,
      dates: c.value,
      pinPage: !0
    }, { dot: q, bar: he, highlight: Pe, content: ut } = $;
    return !q && !he && !Pe && !ut && ($.highlight = !0), $;
  }), z = P(() => {
    if (!h.value || !le(u.value))
      return null;
    const $ = {
      key: "select-drag",
      ...e.dragAttribute,
      dates: u.value
    }, { dot: q, bar: he, highlight: Pe, content: ut } = $;
    return !q && !he && !Pe && !ut && ($.highlight = {
      startEnd: {
        fillMode: "outline"
      }
    }), $;
  }), k = P(() => {
    const $ = Kt(e.attributes) ? [...e.attributes] : [];
    return z.value ? $.unshift(z.value) : Me.value && $.unshift(Me.value), $;
  }), W = P(() => F(
    e.rules === "auto" ? re() : e.rules ?? {}
  ));
  function re() {
    const $ = {
      ms: [0, 999],
      sec: [0, 59],
      min: [0, 59],
      hr: [0, 23]
    }, q = w.value ? 0 : e.timeAccuracy;
    return [0, 1].map((he) => {
      switch (q) {
        case 0:
          return {
            hours: $.hr[he],
            minutes: $.min[he],
            seconds: $.sec[he],
            milliseconds: $.ms[he]
          };
        case 1:
          return {
            minutes: $.min[he],
            seconds: $.sec[he],
            milliseconds: $.ms[he]
          };
        case 3:
          return { milliseconds: $.ms[he] };
        case 4:
          return {};
        default:
          return { seconds: $.sec[he], milliseconds: $.ms[he] };
      }
    });
  }
  function F($) {
    return Kt($) ? $.length === 1 ? [$[0], $[0]] : $ : [$, $];
  }
  function N($) {
    return F($).map(
      (q, he) => ({
        ...q,
        rules: W.value[he]
      })
    );
  }
  function X($) {
    return ln($) ? !isNaN($) : Xr($) ? !isNaN($.getTime()) : yn($) ? $ !== "" : $ != null;
  }
  function le($) {
    return h.value ? Hn($) && X($.start) && X($.end) : X($);
  }
  function Ce($, q) {
    const he = Xr($), Pe = Xr(q);
    return !he && !Pe ? !0 : he !== Pe ? !1 : $.getTime() === q.getTime();
  }
  function $e($, q) {
    if (h.value) {
      const he = le($), Pe = le(q);
      return !he && !Pe ? !0 : he !== Pe ? !1 : Ce($.start, q.start) && Ce($.end, q.end);
    }
    return Ce($, q);
  }
  function ke($) {
    return !le($) || !s.value ? !1 : s.value.intersectsRange(r.value.range($));
  }
  function nt($, q, he, Pe) {
    if (!le($))
      return null;
    if (h.value) {
      const ut = r.value.toDate($.start, {
        ...q[0],
        fillDate: b.value ?? void 0,
        patch: he
      }), an = r.value.toDate($.end, {
        ...q[1],
        fillDate: S.value ?? void 0,
        patch: he
      });
      return pr({ start: ut, end: an }, Pe);
    }
    return r.value.toDateOrNull($, {
      ...q[0],
      fillDate: c.value,
      patch: he
    });
  }
  function tt($, q) {
    return h.value ? le($) ? {
      start: r.value.fromDate($.start, q[0]),
      end: r.value.fromDate($.end, q[1])
    } : null : r.value.fromDate($, q[0]);
  }
  function pt($, q = {}) {
    return clearTimeout(p), new Promise((he) => {
      const { debounce: Pe = 0, ...ut } = q;
      Pe > 0 ? p = window.setTimeout(() => {
        he(D($, ut));
      }, Pe) : he(D($, ut));
    });
  }
  function D($, {
    config: q = I.value,
    patch: he = "dateTime",
    clearIfEqual: Pe = !1,
    formatInput: ut = !0,
    hidePopover: an = !1,
    dragging: Nt = x.value,
    targetPriority: Yr,
    moveToValue: Ea = !1
  } = {}) {
    const hs = N(q);
    let jt = nt(
      $,
      hs,
      he,
      Yr
    );
    if (ke(jt)) {
      if (Nt)
        return null;
      jt = c.value, an = !1;
    } else
      jt == null && e.isRequired ? jt = c.value : (
        // Clear value if same value was passed
        jt != null && $e(c.value, jt) && Pe && (jt = null)
      );
    const ka = Nt ? u : c, Uo = !$e(ka.value, jt);
    ka.value = jt, Nt || (u.value = null);
    const cu = tt(
      jt,
      I.value
    );
    return Uo && (y = !1, o(Nt ? "drag" : "update:modelValue", cu), Br(() => y = !0)), an && !Nt && nn(), ut && g(), Ea && Br(() => H(Yr ?? "start")), cu;
  }
  function g() {
    Br(() => {
      const $ = N({
        type: "string",
        mask: R.value
      }), q = tt(
        u.value || c.value,
        $
      );
      h.value ? d.value = [q && q.start, q && q.end] : d.value = [q, ""];
    });
  }
  function L($, q, he) {
    d.value.splice(q === "start" ? 0 : 1, 1, $);
    const Pe = h.value ? {
      start: d.value[0],
      end: d.value[1] || d.value[0]
    } : $, ut = {
      type: "string",
      mask: R.value
    };
    pt(Pe, {
      ...he,
      config: ut,
      patch: Z.value,
      targetPriority: q,
      moveToValue: !0
    });
  }
  function ee($) {
    return (q) => {
      e.updateOnInput && L(q.currentTarget.value, $, {
        formatInput: !1,
        hidePopover: !1,
        debounce: e.inputDebounce
      });
    };
  }
  function ue($) {
    return (q) => {
      L(q.currentTarget.value, $, {
        formatInput: !0,
        hidePopover: !1
      });
    };
  }
  function Ee($) {
    $.key === "Escape" && pt(c.value, {
      formatInput: !0,
      hidePopover: !0
    });
  }
  function wt($) {
    return h.value ? [
      $ && $.start ? r.value.getDateParts($.start) : null,
      $ && $.end ? r.value.getDateParts($.end) : null
    ] : [$ ? r.value.getDateParts($) : null];
  }
  function it() {
    u.value = null, g();
  }
  function Wt($) {
    o("popover-will-show", $);
  }
  function mn($) {
    o("popover-did-show", $);
  }
  function We($) {
    it(), o("popover-will-hide", $);
  }
  function Y($) {
    o("popover-did-hide", $);
  }
  function B($) {
    const q = {
      patch: "date",
      formatInput: !0,
      hidePopover: !0
    };
    if (h.value) {
      const he = !x.value;
      he ? v = { start: $.startDate, end: $.endDate } : v != null && (v.end = $.date), pt(v, {
        ...q,
        dragging: he
      });
    } else
      pt($.date, {
        ...q,
        clearIfEqual: !e.isRequired
      });
  }
  function rt($, q) {
    B($), o("dayclick", $, q);
  }
  function at($, q) {
    switch (q.key) {
      case " ":
      case "Enter": {
        B($), q.preventDefault();
        break;
      }
      case "Escape":
        nn();
    }
    o("daykeydown", $, q);
  }
  function vn($, q) {
    !x.value || v == null || (v.end = $.date, pt(pr(v), {
      patch: "date",
      formatInput: !0
    }));
  }
  function Qn($ = {}) {
    mi({
      ...me.value,
      ...$,
      isInteractive: !0,
      id: l.value
    });
  }
  function nn($ = {}) {
    Qs({
      hideDelay: 10,
      force: !0,
      ...me.value,
      ...$,
      id: l.value
    });
  }
  function rn($) {
    Gf({
      ...me.value,
      ...$,
      isInteractive: !0,
      id: l.value
    });
  }
  function pr($, q) {
    const { start: he, end: Pe } = $;
    if (he > Pe)
      switch (q) {
        case "start":
          return { start: he, end: he };
        case "end":
          return { start: Pe, end: Pe };
        default:
          return { start: Pe, end: he };
      }
    return { start: he, end: Pe };
  }
  function Rr($) {
    if (le(c.value)) {
      const q = h.value ? $ ? b.value : S.value : c.value;
      return Rf(q, "monthly", r.value);
    }
    return null;
  }
  async function Fo($, q = {}) {
    return m.value == null ? !1 : m.value.move($, q);
  }
  async function fs($, q = {}) {
    return m.value == null ? !1 : m.value.moveBy($, q);
  }
  async function H($, q = {}) {
    if (m.value == null)
      return !1;
    const { firstPage: he, lastPage: Pe, move: ut } = m.value, an = $ !== "end", Nt = Rr(an), Yr = an ? 1 : -1;
    return !Nt || Ff(Nt, he, Pe) ? !1 : ut(Nt, {
      position: Yr,
      ...q
    });
  }
  Re(
    () => e.isRange,
    ($) => {
      $ && console.warn(
        "The `is-range` prop will be deprecated in future releases. Please use the `range` modifier."
      );
    },
    { immediate: !0 }
  ), Re(
    () => R.value,
    () => g()
  ), Re(
    () => e.modelValue,
    ($) => {
      y && D($, {
        formatInput: !0,
        hidePopover: !1
      });
    }
  ), Re(
    () => W.value,
    () => {
      Hn(e.rules) && D(e.modelValue, {
        formatInput: !0,
        hidePopover: !1
      });
    }
  ), Re(
    () => e.timezone,
    () => {
      D(c.value, { formatInput: !0 });
    }
  );
  const K = F(I.value);
  c.value = nt(e.modelValue, K, "dateTime"), Ir(() => {
    D(e.modelValue, {
      formatInput: !0,
      hidePopover: !1
    });
  }), Br(() => i.value = !0);
  const _e = {
    ...n,
    showCalendar: i,
    datePickerPopoverId: l,
    popoverRef: f,
    popoverEvents: te,
    calendarRef: m,
    isRange: h,
    isTimeMode: M,
    isDateTimeMode: C,
    is24hr: Vo(e, "is24hr"),
    hideTimeHeader: Vo(e, "hideTimeHeader"),
    timeAccuracy: Vo(e, "timeAccuracy"),
    isDragging: x,
    inputValue: fe,
    inputEvents: we,
    dateParts: A,
    attributes: k,
    rules: W,
    move: Fo,
    moveBy: fs,
    moveToValue: H,
    updateValue: pt,
    showPopover: Qn,
    hidePopover: nn,
    togglePopover: rn,
    onDayClick: rt,
    onDayKeydown: at,
    onDayMouseEnter: vn,
    onPopoverBeforeShow: Wt,
    onPopoverAfterShow: mn,
    onPopoverBeforeHide: We,
    onPopoverAfterHide: Y
  };
  return dr(Zf, _e), _e;
}
function E2() {
  const e = Ke(Zf);
  if (e)
    return e;
  throw new Error(
    "DatePicker context missing. Please verify this component is nested within a valid context provider."
  );
}
const k2 = [
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
], S2 = [
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
function T2(e) {
  const t = E2(), {
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
  function d(U) {
    U = Object.assign(m.value, U);
    let Z = null;
    if (r.value) {
      const me = f.value ? U : s.value[0], te = f.value ? s.value[1] : U;
      Z = { start: me, end: te };
    } else
      Z = U;
    u(Z, {
      patch: "time",
      targetPriority: f.value ? "start" : "end",
      moveToValue: !0
    });
  }
  const f = P(() => e.position === 0), m = P(
    () => s.value[e.position] || { isValid: !1 }
  ), p = P(() => If(m.value)), v = P(() => !!m.value.isValid), y = P(() => !l.value && v.value), h = P(() => {
    if (!p.value)
      return null;
    let U = n.value.toDate(m.value);
    return m.value.hours === 24 && (U = new Date(U.getTime() - 1)), U;
  }), b = P({
    get() {
      return m.value.hours;
    },
    set(U) {
      d({ hours: U });
    }
  }), S = P({
    get() {
      return m.value.minutes;
    },
    set(U) {
      d({ minutes: U });
    }
  }), w = P({
    get() {
      return m.value.seconds;
    },
    set(U) {
      d({ seconds: U });
    }
  }), C = P({
    get() {
      return m.value.milliseconds;
    },
    set(U) {
      d({ milliseconds: U });
    }
  }), M = P({
    get() {
      return m.value.hours < 12;
    },
    set(U) {
      U = String(U).toLowerCase() == "true";
      let Z = b.value;
      U && Z >= 12 ? Z -= 12 : !U && Z < 12 && (Z += 12), d({ hours: Z });
    }
  }), x = P(
    () => sM(m.value, o.value[e.position])
  ), I = P(() => k2.filter(
    (U) => x.value.hours.some((Z) => Z.value === U.value)
  )), A = P(() => S2.filter(
    (U) => x.value.hours.some((Z) => Z.value === U.value)
  )), R = P(() => i.value ? x.value.hours : M.value ? I.value : A.value), j = P(() => {
    const U = [];
    return Yn(I.value) && U.push({ value: !0, label: "AM" }), Yn(A.value) && U.push({ value: !1, label: "PM" }), U;
  });
  return {
    ...t,
    showHeader: y,
    timeAccuracy: c,
    parts: m,
    isValid: v,
    date: h,
    hours: b,
    minutes: S,
    seconds: w,
    milliseconds: C,
    options: x,
    hourOptions: R,
    isAM: M,
    isAMOptions: j,
    is24hr: i
  };
}
const M2 = {
  key: 0,
  class: "vc-time-header"
}, $2 = { class: "vc-time-weekday" }, N2 = { class: "vc-time-month" }, P2 = { class: "vc-time-day" }, I2 = { class: "vc-time-year" }, C2 = { class: "vc-time-select-group" }, A2 = /* @__PURE__ */ E("span", { class: "vc-time-colon" }, ":", -1), L2 = /* @__PURE__ */ E("span", { class: "vc-time-colon" }, ":", -1), x2 = /* @__PURE__ */ E("span", { class: "vc-time-decimal" }, ".", -1), R2 = /* @__PURE__ */ Ve({
  __name: "TimePicker",
  props: {
    position: null
  },
  setup(e, { expose: t }) {
    const r = T2(e);
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
      hourOptions: f,
      isTimeMode: m,
      isAM: p,
      isAMOptions: v,
      is24hr: y,
      showHeader: h,
      timeAccuracy: b
    } = r;
    return (S, w) => (O(), T("div", {
      class: ct(["vc-time-picker", [{ "vc-invalid": !_(s), "vc-attached": !_(m) }]])
    }, [
      Xt(S.$slots, "time-header", {}, () => [
        _(h) && _(o) ? (O(), T("div", M2, [
          E("span", $2, pe(_(a).formatDate(_(o), "WWW")), 1),
          E("span", N2, pe(_(a).formatDate(_(o), "MMM")), 1),
          E("span", P2, pe(_(a).formatDate(_(o), "D")), 1),
          E("span", I2, pe(_(a).formatDate(_(o), "YYYY")), 1)
        ])) : J("", !0)
      ]),
      E("div", C2, [
        De(ia, {
          name: "Clock",
          size: "17"
        }),
        De($a, {
          modelValue: _(i),
          "onUpdate:modelValue": w[0] || (w[0] = (C) => xe(i) ? i.value = C : null),
          modelModifiers: { number: !0 },
          options: _(f),
          "align-right": ""
        }, null, 8, ["modelValue", "options"]),
        _(b) > 1 ? (O(), T(oe, { key: 0 }, [
          A2,
          De($a, {
            modelValue: _(l),
            "onUpdate:modelValue": w[1] || (w[1] = (C) => xe(l) ? l.value = C : null),
            modelModifiers: { number: !0 },
            options: _(d).minutes,
            "align-left": _(b) === 2
          }, null, 8, ["modelValue", "options", "align-left"])
        ], 64)) : J("", !0),
        _(b) > 2 ? (O(), T(oe, { key: 1 }, [
          L2,
          De($a, {
            modelValue: _(c),
            "onUpdate:modelValue": w[2] || (w[2] = (C) => xe(c) ? c.value = C : null),
            modelModifiers: { number: !0 },
            options: _(d).seconds,
            "align-left": _(b) === 3
          }, null, 8, ["modelValue", "options", "align-left"])
        ], 64)) : J("", !0),
        _(b) > 3 ? (O(), T(oe, { key: 2 }, [
          x2,
          De($a, {
            modelValue: _(u),
            "onUpdate:modelValue": w[3] || (w[3] = (C) => xe(u) ? u.value = C : null),
            modelModifiers: { number: !0 },
            options: _(d).milliseconds,
            "align-left": ""
          }, null, 8, ["modelValue", "options"])
        ], 64)) : J("", !0),
        _(y) ? J("", !0) : (O(), et($a, {
          key: 3,
          modelValue: _(p),
          "onUpdate:modelValue": w[4] || (w[4] = (C) => xe(p) ? p.value = C : null),
          options: _(v)
        }, null, 8, ["modelValue", "options"]))
      ])
    ], 2));
  }
}), El = Ve({
  name: "DatePicker",
  inheritAttrs: !1,
  emits: D2,
  props: w2,
  setup(e, t) {
    const n = O2(e, t), { slots: r, attrs: a } = t, {
      isTimeMode: s,
      isRange: o,
      isDateTimeMode: i,
      color: l,
      displayMode: c,
      dateParts: u,
      datePickerPopoverId: d,
      attributes: f,
      calendarRef: m,
      popoverRef: p,
      showCalendar: v,
      onDayClick: y,
      onDayMouseEnter: h,
      onDayKeydown: b,
      onPopoverBeforeShow: S,
      onPopoverAfterShow: w,
      onPopoverBeforeHide: C,
      onPopoverAfterHide: M
    } = n;
    t.expose(n);
    const x = Vi(Df(n, "calendarRef", "popoverRef")), I = () => (o.value ? [0, 1] : [0]).map((U) => Hr(R2, { position: U })), A = () => {
      if (!u.value)
        return null;
      const j = i.value ? { ...r, footer: I } : r;
      return Hr(
        p2,
        {
          ...a,
          attributes: f.value,
          ref: m,
          onDayclick: y,
          onDaymouseenter: h,
          onDaykeydown: b
        },
        j
      );
    }, R = () => {
      if (s.value)
        return Hr(
          "div",
          {
            class: `vc-container vc-bordered vc-${l.value} vc-${c.value}`
          },
          [I()]
        );
      if (v.value)
        return A();
    };
    return r.default ? () => [
      // Popover trigger
      r.default(x),
      // Popover content
      Hr(
        Ol,
        {
          id: d.value,
          placement: "bottom-start",
          class: `vc-date-picker-content vc-${l.value} vc-${c.value}`,
          ref: p,
          "onBefore-show": S,
          "onAfter-show": w,
          "onBefore-hide": C,
          "onAfter-hide": M
        },
        {
          default: R
        }
      )
    ] : R;
  }
});
//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Xf;
function ne() {
  return Xf.apply(null, arguments);
}
function Y2(e) {
  Xf = e;
}
function un(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function kr(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function Fe(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function kl(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (Fe(e, t))
      return !1;
  return !0;
}
function Ct(e) {
  return e === void 0;
}
function Gn(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function os(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function Jf(e, t) {
  var n = [], r, a = e.length;
  for (r = 0; r < a; ++r)
    n.push(t(e[r], r));
  return n;
}
function ir(e, t) {
  for (var n in t)
    Fe(t, n) && (e[n] = t[n]);
  return Fe(t, "toString") && (e.toString = t.toString), Fe(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function Mn(e, t, n, r) {
  return Dh(e, t, n, r, !0).utc();
}
function F2() {
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
function Oe(e) {
  return e._pf == null && (e._pf = F2()), e._pf;
}
var vi;
Array.prototype.some ? vi = Array.prototype.some : vi = function(e) {
  var t = Object(this), n = t.length >>> 0, r;
  for (r = 0; r < n; r++)
    if (r in t && e.call(this, t[r], r, t))
      return !0;
  return !1;
};
function Sl(e) {
  if (e._isValid == null) {
    var t = Oe(e), n = vi.call(t.parsedDateParts, function(a) {
      return a != null;
    }), r = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
    if (e._strict && (r = r && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0), Object.isFrozen == null || !Object.isFrozen(e))
      e._isValid = r;
    else
      return r;
  }
  return e._isValid;
}
function _o(e) {
  var t = Mn(NaN);
  return e != null ? ir(Oe(t), e) : Oe(t).userInvalidated = !0, t;
}
var Oc = ne.momentProperties = [], Go = !1;
function Tl(e, t) {
  var n, r, a, s = Oc.length;
  if (Ct(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), Ct(t._i) || (e._i = t._i), Ct(t._f) || (e._f = t._f), Ct(t._l) || (e._l = t._l), Ct(t._strict) || (e._strict = t._strict), Ct(t._tzm) || (e._tzm = t._tzm), Ct(t._isUTC) || (e._isUTC = t._isUTC), Ct(t._offset) || (e._offset = t._offset), Ct(t._pf) || (e._pf = Oe(t)), Ct(t._locale) || (e._locale = t._locale), s > 0)
    for (n = 0; n < s; n++)
      r = Oc[n], a = t[r], Ct(a) || (e[r] = a);
  return e;
}
function is(e) {
  Tl(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), Go === !1 && (Go = !0, ne.updateOffset(this), Go = !1);
}
function cn(e) {
  return e instanceof is || e != null && e._isAMomentObject != null;
}
function Qf(e) {
  ne.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function en(e, t) {
  var n = !0;
  return ir(function() {
    if (ne.deprecationHandler != null && ne.deprecationHandler(null, e), n) {
      var r = [], a, s, o, i = arguments.length;
      for (s = 0; s < i; s++) {
        if (a = "", typeof arguments[s] == "object") {
          a += `
[` + s + "] ";
          for (o in arguments[0])
            Fe(arguments[0], o) && (a += o + ": " + arguments[0][o] + ", ");
          a = a.slice(0, -2);
        } else
          a = arguments[s];
        r.push(a);
      }
      Qf(
        e + `
Arguments: ` + Array.prototype.slice.call(r).join("") + `
` + new Error().stack
      ), n = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var Ec = {};
function eh(e, t) {
  ne.deprecationHandler != null && ne.deprecationHandler(e, t), Ec[e] || (Qf(t), Ec[e] = !0);
}
ne.suppressDeprecationWarnings = !1;
ne.deprecationHandler = null;
function $n(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function U2(e) {
  var t, n;
  for (n in e)
    Fe(e, n) && (t = e[n], $n(t) ? this[n] = t : this["_" + n] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function pi(e, t) {
  var n = ir({}, e), r;
  for (r in t)
    Fe(t, r) && (kr(e[r]) && kr(t[r]) ? (n[r] = {}, ir(n[r], e[r]), ir(n[r], t[r])) : t[r] != null ? n[r] = t[r] : delete n[r]);
  for (r in e)
    Fe(e, r) && !Fe(t, r) && kr(e[r]) && (n[r] = ir({}, n[r]));
  return n;
}
function Ml(e) {
  e != null && this.set(e);
}
var _i;
Object.keys ? _i = Object.keys : _i = function(e) {
  var t, n = [];
  for (t in e)
    Fe(e, t) && n.push(t);
  return n;
};
var V2 = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function W2(e, t, n) {
  var r = this._calendar[e] || this._calendar.sameElse;
  return $n(r) ? r.call(t, n) : r;
}
function En(e, t, n) {
  var r = "" + Math.abs(e), a = t - r.length, s = e >= 0;
  return (s ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, a)).toString().substr(1) + r;
}
var $l = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, ys = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, zo = {}, ea = {};
function de(e, t, n, r) {
  var a = r;
  typeof r == "string" && (a = function() {
    return this[r]();
  }), e && (ea[e] = a), t && (ea[t[0]] = function() {
    return En(a.apply(this, arguments), t[1], t[2]);
  }), n && (ea[n] = function() {
    return this.localeData().ordinal(
      a.apply(this, arguments),
      e
    );
  });
}
function j2(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function H2(e) {
  var t = e.match($l), n, r;
  for (n = 0, r = t.length; n < r; n++)
    ea[t[n]] ? t[n] = ea[t[n]] : t[n] = j2(t[n]);
  return function(a) {
    var s = "", o;
    for (o = 0; o < r; o++)
      s += $n(t[o]) ? t[o].call(a, e) : t[o];
    return s;
  };
}
function $s(e, t) {
  return e.isValid() ? (t = th(t, e.localeData()), zo[t] = zo[t] || H2(t), zo[t](e)) : e.localeData().invalidDate();
}
function th(e, t) {
  var n = 5;
  function r(a) {
    return t.longDateFormat(a) || a;
  }
  for (ys.lastIndex = 0; n >= 0 && ys.test(e); )
    e = e.replace(
      ys,
      r
    ), ys.lastIndex = 0, n -= 1;
  return e;
}
var B2 = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function G2(e) {
  var t = this._longDateFormat[e], n = this._longDateFormat[e.toUpperCase()];
  return t || !n ? t : (this._longDateFormat[e] = n.match($l).map(function(r) {
    return r === "MMMM" || r === "MM" || r === "DD" || r === "dddd" ? r.slice(1) : r;
  }).join(""), this._longDateFormat[e]);
}
var z2 = "Invalid date";
function q2() {
  return this._invalidDate;
}
var K2 = "%d", Z2 = /\d{1,2}/;
function X2(e) {
  return this._ordinal.replace("%d", e);
}
var J2 = {
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
function Q2(e, t, n, r) {
  var a = this._relativeTime[n];
  return $n(a) ? a(e, t, n, r) : a.replace(/%d/i, e);
}
function e$(e, t) {
  var n = this._relativeTime[e > 0 ? "future" : "past"];
  return $n(n) ? n(t) : n.replace(/%s/i, t);
}
var Fa = {};
function kt(e, t) {
  var n = e.toLowerCase();
  Fa[n] = Fa[n + "s"] = Fa[t] = e;
}
function tn(e) {
  return typeof e == "string" ? Fa[e] || Fa[e.toLowerCase()] : void 0;
}
function Nl(e) {
  var t = {}, n, r;
  for (r in e)
    Fe(e, r) && (n = tn(r), n && (t[n] = e[r]));
  return t;
}
var nh = {};
function St(e, t) {
  nh[e] = t;
}
function t$(e) {
  var t = [], n;
  for (n in e)
    Fe(e, n) && t.push({ unit: n, priority: nh[n] });
  return t.sort(function(r, a) {
    return r.priority - a.priority;
  }), t;
}
function go(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
function Gt(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function Te(e) {
  var t = +e, n = 0;
  return t !== 0 && isFinite(t) && (n = Gt(t)), n;
}
function ba(e, t) {
  return function(n) {
    return n != null ? (rh(this, e, n), ne.updateOffset(this, t), this) : eo(this, e);
  };
}
function eo(e, t) {
  return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
}
function rh(e, t, n) {
  e.isValid() && !isNaN(n) && (t === "FullYear" && go(e.year()) && e.month() === 1 && e.date() === 29 ? (n = Te(n), e._d["set" + (e._isUTC ? "UTC" : "") + t](
    n,
    e.month(),
    Eo(n, e.month())
  )) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n));
}
function n$(e) {
  return e = tn(e), $n(this[e]) ? this[e]() : this;
}
function r$(e, t) {
  if (typeof e == "object") {
    e = Nl(e);
    var n = t$(e), r, a = n.length;
    for (r = 0; r < a; r++)
      this[n[r].unit](e[n[r].unit]);
  } else if (e = tn(e), $n(this[e]))
    return this[e](t);
  return this;
}
var ah = /\d/, Vt = /\d\d/, sh = /\d{3}/, Pl = /\d{4}/, yo = /[+-]?\d{6}/, Xe = /\d\d?/, oh = /\d\d\d\d?/, ih = /\d\d\d\d\d\d?/, bo = /\d{1,3}/, Il = /\d{1,4}/, wo = /[+-]?\d{1,6}/, wa = /\d+/, Do = /[+-]?\d+/, a$ = /Z|[+-]\d\d:?\d\d/gi, Oo = /Z|[+-]\d\d(?::?\d\d)?/gi, s$ = /[+-]?\d+(\.\d{1,3})?/, ls = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, to;
to = {};
function se(e, t, n) {
  to[e] = $n(t) ? t : function(r, a) {
    return r && n ? n : t;
  };
}
function o$(e, t) {
  return Fe(to, e) ? to[e](t._strict, t._locale) : new RegExp(i$(e));
}
function i$(e) {
  return Rt(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, n, r, a, s) {
        return n || r || a || s;
      }
    )
  );
}
function Rt(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
var gi = {};
function He(e, t) {
  var n, r = t, a;
  for (typeof e == "string" && (e = [e]), Gn(t) && (r = function(s, o) {
    o[t] = Te(s);
  }), a = e.length, n = 0; n < a; n++)
    gi[e[n]] = r;
}
function us(e, t) {
  He(e, function(n, r, a, s) {
    a._w = a._w || {}, t(n, a._w, a, s);
  });
}
function l$(e, t, n) {
  t != null && Fe(gi, e) && gi[e](t, n._a, n, e);
}
var Ot = 0, Fn = 1, gn = 2, mt = 3, on = 4, Un = 5, Dr = 6, u$ = 7, c$ = 8;
function d$(e, t) {
  return (e % t + t) % t;
}
var lt;
Array.prototype.indexOf ? lt = Array.prototype.indexOf : lt = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function Eo(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var n = d$(t, 12);
  return e += (t - n) / 12, n === 1 ? go(e) ? 29 : 28 : 31 - n % 7 % 2;
}
de("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
de("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
de("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
kt("month", "M");
St("month", 8);
se("M", Xe);
se("MM", Xe, Vt);
se("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
se("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
He(["M", "MM"], function(e, t) {
  t[Fn] = Te(e) - 1;
});
He(["MMM", "MMMM"], function(e, t, n, r) {
  var a = n._locale.monthsParse(e, r, n._strict);
  a != null ? t[Fn] = a : Oe(n).invalidMonth = e;
});
var f$ = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), lh = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), uh = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, h$ = ls, m$ = ls;
function v$(e, t) {
  return e ? un(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || uh).test(t) ? "format" : "standalone"][e.month()] : un(this._months) ? this._months : this._months.standalone;
}
function p$(e, t) {
  return e ? un(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[uh.test(t) ? "format" : "standalone"][e.month()] : un(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function _$(e, t, n) {
  var r, a, s, o = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r)
      s = Mn([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(
        s,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[r] = this.months(s, "").toLocaleLowerCase();
  return n ? t === "MMM" ? (a = lt.call(this._shortMonthsParse, o), a !== -1 ? a : null) : (a = lt.call(this._longMonthsParse, o), a !== -1 ? a : null) : t === "MMM" ? (a = lt.call(this._shortMonthsParse, o), a !== -1 ? a : (a = lt.call(this._longMonthsParse, o), a !== -1 ? a : null)) : (a = lt.call(this._longMonthsParse, o), a !== -1 ? a : (a = lt.call(this._shortMonthsParse, o), a !== -1 ? a : null));
}
function g$(e, t, n) {
  var r, a, s;
  if (this._monthsParseExact)
    return _$.call(this, e, t, n);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++) {
    if (a = Mn([2e3, r]), n && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp(
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
function ch(e, t) {
  var n;
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = Te(t);
    else if (t = e.localeData().monthsParse(t), !Gn(t))
      return e;
  }
  return n = Math.min(e.date(), Eo(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e;
}
function dh(e) {
  return e != null ? (ch(this, e), ne.updateOffset(this, !0), this) : eo(this, "Month");
}
function y$() {
  return Eo(this.year(), this.month());
}
function b$(e) {
  return this._monthsParseExact ? (Fe(this, "_monthsRegex") || fh.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (Fe(this, "_monthsShortRegex") || (this._monthsShortRegex = h$), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function w$(e) {
  return this._monthsParseExact ? (Fe(this, "_monthsRegex") || fh.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (Fe(this, "_monthsRegex") || (this._monthsRegex = m$), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function fh() {
  function e(o, i) {
    return i.length - o.length;
  }
  var t = [], n = [], r = [], a, s;
  for (a = 0; a < 12; a++)
    s = Mn([2e3, a]), t.push(this.monthsShort(s, "")), n.push(this.months(s, "")), r.push(this.months(s, "")), r.push(this.monthsShort(s, ""));
  for (t.sort(e), n.sort(e), r.sort(e), a = 0; a < 12; a++)
    t[a] = Rt(t[a]), n[a] = Rt(n[a]);
  for (a = 0; a < 24; a++)
    r[a] = Rt(r[a]);
  this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
de("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? En(e, 4) : "+" + e;
});
de(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
de(0, ["YYYY", 4], 0, "year");
de(0, ["YYYYY", 5], 0, "year");
de(0, ["YYYYYY", 6, !0], 0, "year");
kt("year", "y");
St("year", 1);
se("Y", Do);
se("YY", Xe, Vt);
se("YYYY", Il, Pl);
se("YYYYY", wo, yo);
se("YYYYYY", wo, yo);
He(["YYYYY", "YYYYYY"], Ot);
He("YYYY", function(e, t) {
  t[Ot] = e.length === 2 ? ne.parseTwoDigitYear(e) : Te(e);
});
He("YY", function(e, t) {
  t[Ot] = ne.parseTwoDigitYear(e);
});
He("Y", function(e, t) {
  t[Ot] = parseInt(e, 10);
});
function Ua(e) {
  return go(e) ? 366 : 365;
}
ne.parseTwoDigitYear = function(e) {
  return Te(e) + (Te(e) > 68 ? 1900 : 2e3);
};
var hh = ba("FullYear", !0);
function D$() {
  return go(this.year());
}
function O$(e, t, n, r, a, s, o) {
  var i;
  return e < 100 && e >= 0 ? (i = new Date(e + 400, t, n, r, a, s, o), isFinite(i.getFullYear()) && i.setFullYear(e)) : i = new Date(e, t, n, r, a, s, o), i;
}
function qa(e) {
  var t, n;
  return e < 100 && e >= 0 ? (n = Array.prototype.slice.call(arguments), n[0] = e + 400, t = new Date(Date.UTC.apply(null, n)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function no(e, t, n) {
  var r = 7 + t - n, a = (7 + qa(e, 0, r).getUTCDay() - t) % 7;
  return -a + r - 1;
}
function mh(e, t, n, r, a) {
  var s = (7 + n - r) % 7, o = no(e, r, a), i = 1 + 7 * (t - 1) + s + o, l, c;
  return i <= 0 ? (l = e - 1, c = Ua(l) + i) : i > Ua(e) ? (l = e + 1, c = i - Ua(e)) : (l = e, c = i), {
    year: l,
    dayOfYear: c
  };
}
function Ka(e, t, n) {
  var r = no(e.year(), t, n), a = Math.floor((e.dayOfYear() - r - 1) / 7) + 1, s, o;
  return a < 1 ? (o = e.year() - 1, s = a + Vn(o, t, n)) : a > Vn(e.year(), t, n) ? (s = a - Vn(e.year(), t, n), o = e.year() + 1) : (o = e.year(), s = a), {
    week: s,
    year: o
  };
}
function Vn(e, t, n) {
  var r = no(e, t, n), a = no(e + 1, t, n);
  return (Ua(e) - r + a) / 7;
}
de("w", ["ww", 2], "wo", "week");
de("W", ["WW", 2], "Wo", "isoWeek");
kt("week", "w");
kt("isoWeek", "W");
St("week", 5);
St("isoWeek", 5);
se("w", Xe);
se("ww", Xe, Vt);
se("W", Xe);
se("WW", Xe, Vt);
us(
  ["w", "ww", "W", "WW"],
  function(e, t, n, r) {
    t[r.substr(0, 1)] = Te(e);
  }
);
function E$(e) {
  return Ka(e, this._week.dow, this._week.doy).week;
}
var k$ = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function S$() {
  return this._week.dow;
}
function T$() {
  return this._week.doy;
}
function M$(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function $$(e) {
  var t = Ka(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
de("d", 0, "do", "day");
de("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
de("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
de("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
de("e", 0, 0, "weekday");
de("E", 0, 0, "isoWeekday");
kt("day", "d");
kt("weekday", "e");
kt("isoWeekday", "E");
St("day", 11);
St("weekday", 11);
St("isoWeekday", 11);
se("d", Xe);
se("e", Xe);
se("E", Xe);
se("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
se("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
se("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
us(["dd", "ddd", "dddd"], function(e, t, n, r) {
  var a = n._locale.weekdaysParse(e, r, n._strict);
  a != null ? t.d = a : Oe(n).invalidWeekday = e;
});
us(["d", "e", "E"], function(e, t, n, r) {
  t[r] = Te(e);
});
function N$(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function P$(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function Cl(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var I$ = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), vh = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), C$ = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), A$ = ls, L$ = ls, x$ = ls;
function R$(e, t) {
  var n = un(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? Cl(n, this._week.dow) : e ? n[e.day()] : n;
}
function Y$(e) {
  return e === !0 ? Cl(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function F$(e) {
  return e === !0 ? Cl(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function U$(e, t, n) {
  var r, a, s, o = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0; r < 7; ++r)
      s = Mn([2e3, 1]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(
        s,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[r] = this.weekdaysShort(
        s,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(s, "").toLocaleLowerCase();
  return n ? t === "dddd" ? (a = lt.call(this._weekdaysParse, o), a !== -1 ? a : null) : t === "ddd" ? (a = lt.call(this._shortWeekdaysParse, o), a !== -1 ? a : null) : (a = lt.call(this._minWeekdaysParse, o), a !== -1 ? a : null) : t === "dddd" ? (a = lt.call(this._weekdaysParse, o), a !== -1 || (a = lt.call(this._shortWeekdaysParse, o), a !== -1) ? a : (a = lt.call(this._minWeekdaysParse, o), a !== -1 ? a : null)) : t === "ddd" ? (a = lt.call(this._shortWeekdaysParse, o), a !== -1 || (a = lt.call(this._weekdaysParse, o), a !== -1) ? a : (a = lt.call(this._minWeekdaysParse, o), a !== -1 ? a : null)) : (a = lt.call(this._minWeekdaysParse, o), a !== -1 || (a = lt.call(this._weekdaysParse, o), a !== -1) ? a : (a = lt.call(this._shortWeekdaysParse, o), a !== -1 ? a : null));
}
function V$(e, t, n) {
  var r, a, s;
  if (this._weekdaysParseExact)
    return U$.call(this, e, t, n);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) {
    if (a = Mn([2e3, 1]).day(r), n && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp(
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
function W$(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
  return e != null ? (e = N$(e, this.localeData()), this.add(e - t, "d")) : t;
}
function j$(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function H$(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = P$(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function B$(e) {
  return this._weekdaysParseExact ? (Fe(this, "_weekdaysRegex") || Al.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (Fe(this, "_weekdaysRegex") || (this._weekdaysRegex = A$), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function G$(e) {
  return this._weekdaysParseExact ? (Fe(this, "_weekdaysRegex") || Al.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (Fe(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = L$), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function z$(e) {
  return this._weekdaysParseExact ? (Fe(this, "_weekdaysRegex") || Al.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (Fe(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = x$), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function Al() {
  function e(u, d) {
    return d.length - u.length;
  }
  var t = [], n = [], r = [], a = [], s, o, i, l, c;
  for (s = 0; s < 7; s++)
    o = Mn([2e3, 1]).day(s), i = Rt(this.weekdaysMin(o, "")), l = Rt(this.weekdaysShort(o, "")), c = Rt(this.weekdays(o, "")), t.push(i), n.push(l), r.push(c), a.push(i), a.push(l), a.push(c);
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
function Ll() {
  return this.hours() % 12 || 12;
}
function q$() {
  return this.hours() || 24;
}
de("H", ["HH", 2], 0, "hour");
de("h", ["hh", 2], 0, Ll);
de("k", ["kk", 2], 0, q$);
de("hmm", 0, 0, function() {
  return "" + Ll.apply(this) + En(this.minutes(), 2);
});
de("hmmss", 0, 0, function() {
  return "" + Ll.apply(this) + En(this.minutes(), 2) + En(this.seconds(), 2);
});
de("Hmm", 0, 0, function() {
  return "" + this.hours() + En(this.minutes(), 2);
});
de("Hmmss", 0, 0, function() {
  return "" + this.hours() + En(this.minutes(), 2) + En(this.seconds(), 2);
});
function ph(e, t) {
  de(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
ph("a", !0);
ph("A", !1);
kt("hour", "h");
St("hour", 13);
function _h(e, t) {
  return t._meridiemParse;
}
se("a", _h);
se("A", _h);
se("H", Xe);
se("h", Xe);
se("k", Xe);
se("HH", Xe, Vt);
se("hh", Xe, Vt);
se("kk", Xe, Vt);
se("hmm", oh);
se("hmmss", ih);
se("Hmm", oh);
se("Hmmss", ih);
He(["H", "HH"], mt);
He(["k", "kk"], function(e, t, n) {
  var r = Te(e);
  t[mt] = r === 24 ? 0 : r;
});
He(["a", "A"], function(e, t, n) {
  n._isPm = n._locale.isPM(e), n._meridiem = e;
});
He(["h", "hh"], function(e, t, n) {
  t[mt] = Te(e), Oe(n).bigHour = !0;
});
He("hmm", function(e, t, n) {
  var r = e.length - 2;
  t[mt] = Te(e.substr(0, r)), t[on] = Te(e.substr(r)), Oe(n).bigHour = !0;
});
He("hmmss", function(e, t, n) {
  var r = e.length - 4, a = e.length - 2;
  t[mt] = Te(e.substr(0, r)), t[on] = Te(e.substr(r, 2)), t[Un] = Te(e.substr(a)), Oe(n).bigHour = !0;
});
He("Hmm", function(e, t, n) {
  var r = e.length - 2;
  t[mt] = Te(e.substr(0, r)), t[on] = Te(e.substr(r));
});
He("Hmmss", function(e, t, n) {
  var r = e.length - 4, a = e.length - 2;
  t[mt] = Te(e.substr(0, r)), t[on] = Te(e.substr(r, 2)), t[Un] = Te(e.substr(a));
});
function K$(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var Z$ = /[ap]\.?m?\.?/i, X$ = ba("Hours", !0);
function J$(e, t, n) {
  return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM";
}
var gh = {
  calendar: V2,
  longDateFormat: B2,
  invalidDate: z2,
  ordinal: K2,
  dayOfMonthOrdinalParse: Z2,
  relativeTime: J2,
  months: f$,
  monthsShort: lh,
  week: k$,
  weekdays: I$,
  weekdaysMin: C$,
  weekdaysShort: vh,
  meridiemParse: Z$
}, Je = {}, Na = {}, Za;
function Q$(e, t) {
  var n, r = Math.min(e.length, t.length);
  for (n = 0; n < r; n += 1)
    if (e[n] !== t[n])
      return n;
  return r;
}
function kc(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function eN(e) {
  for (var t = 0, n, r, a, s; t < e.length; ) {
    for (s = kc(e[t]).split("-"), n = s.length, r = kc(e[t + 1]), r = r ? r.split("-") : null; n > 0; ) {
      if (a = ko(s.slice(0, n).join("-")), a)
        return a;
      if (r && r.length >= n && Q$(s, r) >= n - 1)
        break;
      n--;
    }
    t++;
  }
  return Za;
}
function tN(e) {
  return e.match("^[^/\\\\]*$") != null;
}
function ko(e) {
  var t = null, n;
  if (Je[e] === void 0 && typeof module < "u" && module && module.exports && tN(e))
    try {
      t = Za._abbr, n = require, n("./locale/" + e), ur(t);
    } catch {
      Je[e] = null;
    }
  return Je[e];
}
function ur(e, t) {
  var n;
  return e && (Ct(t) ? n = Xn(e) : n = xl(e, t), n ? Za = n : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), Za._abbr;
}
function xl(e, t) {
  if (t !== null) {
    var n, r = gh;
    if (t.abbr = e, Je[e] != null)
      eh(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), r = Je[e]._config;
    else if (t.parentLocale != null)
      if (Je[t.parentLocale] != null)
        r = Je[t.parentLocale]._config;
      else if (n = ko(t.parentLocale), n != null)
        r = n._config;
      else
        return Na[t.parentLocale] || (Na[t.parentLocale] = []), Na[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return Je[e] = new Ml(pi(r, t)), Na[e] && Na[e].forEach(function(a) {
      xl(a.name, a.config);
    }), ur(e), Je[e];
  } else
    return delete Je[e], null;
}
function nN(e, t) {
  if (t != null) {
    var n, r, a = gh;
    Je[e] != null && Je[e].parentLocale != null ? Je[e].set(pi(Je[e]._config, t)) : (r = ko(e), r != null && (a = r._config), t = pi(a, t), r == null && (t.abbr = e), n = new Ml(t), n.parentLocale = Je[e], Je[e] = n), ur(e);
  } else
    Je[e] != null && (Je[e].parentLocale != null ? (Je[e] = Je[e].parentLocale, e === ur() && ur(e)) : Je[e] != null && delete Je[e]);
  return Je[e];
}
function Xn(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return Za;
  if (!un(e)) {
    if (t = ko(e), t)
      return t;
    e = [e];
  }
  return eN(e);
}
function rN() {
  return _i(Je);
}
function Rl(e) {
  var t, n = e._a;
  return n && Oe(e).overflow === -2 && (t = n[Fn] < 0 || n[Fn] > 11 ? Fn : n[gn] < 1 || n[gn] > Eo(n[Ot], n[Fn]) ? gn : n[mt] < 0 || n[mt] > 24 || n[mt] === 24 && (n[on] !== 0 || n[Un] !== 0 || n[Dr] !== 0) ? mt : n[on] < 0 || n[on] > 59 ? on : n[Un] < 0 || n[Un] > 59 ? Un : n[Dr] < 0 || n[Dr] > 999 ? Dr : -1, Oe(e)._overflowDayOfYear && (t < Ot || t > gn) && (t = gn), Oe(e)._overflowWeeks && t === -1 && (t = u$), Oe(e)._overflowWeekday && t === -1 && (t = c$), Oe(e).overflow = t), e;
}
var aN = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, sN = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, oN = /Z|[+-]\d\d(?::?\d\d)?/, bs = [
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
], qo = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], iN = /^\/?Date\((-?\d+)/i, lN = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, uN = {
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
function yh(e) {
  var t, n, r = e._i, a = aN.exec(r) || sN.exec(r), s, o, i, l, c = bs.length, u = qo.length;
  if (a) {
    for (Oe(e).iso = !0, t = 0, n = c; t < n; t++)
      if (bs[t][1].exec(a[1])) {
        o = bs[t][0], s = bs[t][2] !== !1;
        break;
      }
    if (o == null) {
      e._isValid = !1;
      return;
    }
    if (a[3]) {
      for (t = 0, n = u; t < n; t++)
        if (qo[t][1].exec(a[3])) {
          i = (a[2] || " ") + qo[t][0];
          break;
        }
      if (i == null) {
        e._isValid = !1;
        return;
      }
    }
    if (!s && i != null) {
      e._isValid = !1;
      return;
    }
    if (a[4])
      if (oN.exec(a[4]))
        l = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = o + (i || "") + (l || ""), Fl(e);
  } else
    e._isValid = !1;
}
function cN(e, t, n, r, a, s) {
  var o = [
    dN(e),
    lh.indexOf(t),
    parseInt(n, 10),
    parseInt(r, 10),
    parseInt(a, 10)
  ];
  return s && o.push(parseInt(s, 10)), o;
}
function dN(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function fN(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function hN(e, t, n) {
  if (e) {
    var r = vh.indexOf(e), a = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (r !== a)
      return Oe(n).weekdayMismatch = !0, n._isValid = !1, !1;
  }
  return !0;
}
function mN(e, t, n) {
  if (e)
    return uN[e];
  if (t)
    return 0;
  var r = parseInt(n, 10), a = r % 100, s = (r - a) / 100;
  return s * 60 + a;
}
function bh(e) {
  var t = lN.exec(fN(e._i)), n;
  if (t) {
    if (n = cN(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !hN(t[1], n, e))
      return;
    e._a = n, e._tzm = mN(t[8], t[9], t[10]), e._d = qa.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), Oe(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function vN(e) {
  var t = iN.exec(e._i);
  if (t !== null) {
    e._d = /* @__PURE__ */ new Date(+t[1]);
    return;
  }
  if (yh(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (bh(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : ne.createFromInputFallback(e);
}
ne.createFromInputFallback = en(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function Wr(e, t, n) {
  return e ?? t ?? n;
}
function pN(e) {
  var t = new Date(ne.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function Yl(e) {
  var t, n, r = [], a, s, o;
  if (!e._d) {
    for (a = pN(e), e._w && e._a[gn] == null && e._a[Fn] == null && _N(e), e._dayOfYear != null && (o = Wr(e._a[Ot], a[Ot]), (e._dayOfYear > Ua(o) || e._dayOfYear === 0) && (Oe(e)._overflowDayOfYear = !0), n = qa(o, 0, e._dayOfYear), e._a[Fn] = n.getUTCMonth(), e._a[gn] = n.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = r[t] = a[t];
    for (; t < 7; t++)
      e._a[t] = r[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[mt] === 24 && e._a[on] === 0 && e._a[Un] === 0 && e._a[Dr] === 0 && (e._nextDay = !0, e._a[mt] = 0), e._d = (e._useUTC ? qa : O$).apply(
      null,
      r
    ), s = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[mt] = 24), e._w && typeof e._w.d < "u" && e._w.d !== s && (Oe(e).weekdayMismatch = !0);
  }
}
function _N(e) {
  var t, n, r, a, s, o, i, l, c;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (s = 1, o = 4, n = Wr(
    t.GG,
    e._a[Ot],
    Ka(Ze(), 1, 4).year
  ), r = Wr(t.W, 1), a = Wr(t.E, 1), (a < 1 || a > 7) && (l = !0)) : (s = e._locale._week.dow, o = e._locale._week.doy, c = Ka(Ze(), s, o), n = Wr(t.gg, e._a[Ot], c.year), r = Wr(t.w, c.week), t.d != null ? (a = t.d, (a < 0 || a > 6) && (l = !0)) : t.e != null ? (a = t.e + s, (t.e < 0 || t.e > 6) && (l = !0)) : a = s), r < 1 || r > Vn(n, s, o) ? Oe(e)._overflowWeeks = !0 : l != null ? Oe(e)._overflowWeekday = !0 : (i = mh(n, r, a, s, o), e._a[Ot] = i.year, e._dayOfYear = i.dayOfYear);
}
ne.ISO_8601 = function() {
};
ne.RFC_2822 = function() {
};
function Fl(e) {
  if (e._f === ne.ISO_8601) {
    yh(e);
    return;
  }
  if (e._f === ne.RFC_2822) {
    bh(e);
    return;
  }
  e._a = [], Oe(e).empty = !0;
  var t = "" + e._i, n, r, a, s, o, i = t.length, l = 0, c, u;
  for (a = th(e._f, e._locale).match($l) || [], u = a.length, n = 0; n < u; n++)
    s = a[n], r = (t.match(o$(s, e)) || [])[0], r && (o = t.substr(0, t.indexOf(r)), o.length > 0 && Oe(e).unusedInput.push(o), t = t.slice(
      t.indexOf(r) + r.length
    ), l += r.length), ea[s] ? (r ? Oe(e).empty = !1 : Oe(e).unusedTokens.push(s), l$(s, r, e)) : e._strict && !r && Oe(e).unusedTokens.push(s);
  Oe(e).charsLeftOver = i - l, t.length > 0 && Oe(e).unusedInput.push(t), e._a[mt] <= 12 && Oe(e).bigHour === !0 && e._a[mt] > 0 && (Oe(e).bigHour = void 0), Oe(e).parsedDateParts = e._a.slice(0), Oe(e).meridiem = e._meridiem, e._a[mt] = gN(
    e._locale,
    e._a[mt],
    e._meridiem
  ), c = Oe(e).era, c !== null && (e._a[Ot] = e._locale.erasConvertYear(c, e._a[Ot])), Yl(e), Rl(e);
}
function gN(e, t, n) {
  var r;
  return n == null ? t : e.meridiemHour != null ? e.meridiemHour(t, n) : (e.isPM != null && (r = e.isPM(n), r && t < 12 && (t += 12), !r && t === 12 && (t = 0)), t);
}
function yN(e) {
  var t, n, r, a, s, o, i = !1, l = e._f.length;
  if (l === 0) {
    Oe(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (a = 0; a < l; a++)
    s = 0, o = !1, t = Tl({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[a], Fl(t), Sl(t) && (o = !0), s += Oe(t).charsLeftOver, s += Oe(t).unusedTokens.length * 10, Oe(t).score = s, i ? s < r && (r = s, n = t) : (r == null || s < r || o) && (r = s, n = t, o && (i = !0));
  ir(e, n || t);
}
function bN(e) {
  if (!e._d) {
    var t = Nl(e._i), n = t.day === void 0 ? t.date : t.day;
    e._a = Jf(
      [t.year, t.month, n, t.hour, t.minute, t.second, t.millisecond],
      function(r) {
        return r && parseInt(r, 10);
      }
    ), Yl(e);
  }
}
function wN(e) {
  var t = new is(Rl(wh(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function wh(e) {
  var t = e._i, n = e._f;
  return e._locale = e._locale || Xn(e._l), t === null || n === void 0 && t === "" ? _o({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), cn(t) ? new is(Rl(t)) : (os(t) ? e._d = t : un(n) ? yN(e) : n ? Fl(e) : DN(e), Sl(e) || (e._d = null), e));
}
function DN(e) {
  var t = e._i;
  Ct(t) ? e._d = new Date(ne.now()) : os(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? vN(e) : un(t) ? (e._a = Jf(t.slice(0), function(n) {
    return parseInt(n, 10);
  }), Yl(e)) : kr(t) ? bN(e) : Gn(t) ? e._d = new Date(t) : ne.createFromInputFallback(e);
}
function Dh(e, t, n, r, a) {
  var s = {};
  return (t === !0 || t === !1) && (r = t, t = void 0), (n === !0 || n === !1) && (r = n, n = void 0), (kr(e) && kl(e) || un(e) && e.length === 0) && (e = void 0), s._isAMomentObject = !0, s._useUTC = s._isUTC = a, s._l = n, s._i = e, s._f = t, s._strict = r, wN(s);
}
function Ze(e, t, n, r) {
  return Dh(e, t, n, r, !1);
}
var ON = en(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = Ze.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : _o();
  }
), EN = en(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = Ze.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : _o();
  }
);
function Oh(e, t) {
  var n, r;
  if (t.length === 1 && un(t[0]) && (t = t[0]), !t.length)
    return Ze();
  for (n = t[0], r = 1; r < t.length; ++r)
    (!t[r].isValid() || t[r][e](n)) && (n = t[r]);
  return n;
}
function kN() {
  var e = [].slice.call(arguments, 0);
  return Oh("isBefore", e);
}
function SN() {
  var e = [].slice.call(arguments, 0);
  return Oh("isAfter", e);
}
var TN = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, Pa = [
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
function MN(e) {
  var t, n = !1, r, a = Pa.length;
  for (t in e)
    if (Fe(e, t) && !(lt.call(Pa, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (r = 0; r < a; ++r)
    if (e[Pa[r]]) {
      if (n)
        return !1;
      parseFloat(e[Pa[r]]) !== Te(e[Pa[r]]) && (n = !0);
    }
  return !0;
}
function $N() {
  return this._isValid;
}
function NN() {
  return hn(NaN);
}
function So(e) {
  var t = Nl(e), n = t.year || 0, r = t.quarter || 0, a = t.month || 0, s = t.week || t.isoWeek || 0, o = t.day || 0, i = t.hour || 0, l = t.minute || 0, c = t.second || 0, u = t.millisecond || 0;
  this._isValid = MN(t), this._milliseconds = +u + c * 1e3 + // 1000
  l * 6e4 + // 1000 * 60
  i * 1e3 * 60 * 60, this._days = +o + s * 7, this._months = +a + r * 3 + n * 12, this._data = {}, this._locale = Xn(), this._bubble();
}
function Ns(e) {
  return e instanceof So;
}
function yi(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function PN(e, t, n) {
  var r = Math.min(e.length, t.length), a = Math.abs(e.length - t.length), s = 0, o;
  for (o = 0; o < r; o++)
    (n && e[o] !== t[o] || !n && Te(e[o]) !== Te(t[o])) && s++;
  return s + a;
}
function Eh(e, t) {
  de(e, 0, 0, function() {
    var n = this.utcOffset(), r = "+";
    return n < 0 && (n = -n, r = "-"), r + En(~~(n / 60), 2) + t + En(~~n % 60, 2);
  });
}
Eh("Z", ":");
Eh("ZZ", "");
se("Z", Oo);
se("ZZ", Oo);
He(["Z", "ZZ"], function(e, t, n) {
  n._useUTC = !0, n._tzm = Ul(Oo, e);
});
var IN = /([\+\-]|\d\d)/gi;
function Ul(e, t) {
  var n = (t || "").match(e), r, a, s;
  return n === null ? null : (r = n[n.length - 1] || [], a = (r + "").match(IN) || ["-", 0, 0], s = +(a[1] * 60) + Te(a[2]), s === 0 ? 0 : a[0] === "+" ? s : -s);
}
function Vl(e, t) {
  var n, r;
  return t._isUTC ? (n = t.clone(), r = (cn(e) || os(e) ? e.valueOf() : Ze(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + r), ne.updateOffset(n, !1), n) : Ze(e).local();
}
function bi(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
ne.updateOffset = function() {
};
function CN(e, t, n) {
  var r = this._offset || 0, a;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = Ul(Oo, e), e === null)
        return this;
    } else
      Math.abs(e) < 16 && !n && (e = e * 60);
    return !this._isUTC && t && (a = bi(this)), this._offset = e, this._isUTC = !0, a != null && this.add(a, "m"), r !== e && (!t || this._changeInProgress ? Th(
      this,
      hn(e - r, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, ne.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? r : bi(this);
}
function AN(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function LN(e) {
  return this.utcOffset(0, e);
}
function xN(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(bi(this), "m")), this;
}
function RN() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = Ul(a$, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function YN(e) {
  return this.isValid() ? (e = e ? Ze(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function FN() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function UN() {
  if (!Ct(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return Tl(e, this), e = wh(e), e._a ? (t = e._isUTC ? Mn(e._a) : Ze(e._a), this._isDSTShifted = this.isValid() && PN(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function VN() {
  return this.isValid() ? !this._isUTC : !1;
}
function WN() {
  return this.isValid() ? this._isUTC : !1;
}
function kh() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var jN = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, HN = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function hn(e, t) {
  var n = e, r = null, a, s, o;
  return Ns(e) ? n = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : Gn(e) || !isNaN(+e) ? (n = {}, t ? n[t] = +e : n.milliseconds = +e) : (r = jN.exec(e)) ? (a = r[1] === "-" ? -1 : 1, n = {
    y: 0,
    d: Te(r[gn]) * a,
    h: Te(r[mt]) * a,
    m: Te(r[on]) * a,
    s: Te(r[Un]) * a,
    ms: Te(yi(r[Dr] * 1e3)) * a
    // the millisecond decimal point is included in the match
  }) : (r = HN.exec(e)) ? (a = r[1] === "-" ? -1 : 1, n = {
    y: _r(r[2], a),
    M: _r(r[3], a),
    w: _r(r[4], a),
    d: _r(r[5], a),
    h: _r(r[6], a),
    m: _r(r[7], a),
    s: _r(r[8], a)
  }) : n == null ? n = {} : typeof n == "object" && ("from" in n || "to" in n) && (o = BN(
    Ze(n.from),
    Ze(n.to)
  ), n = {}, n.ms = o.milliseconds, n.M = o.months), s = new So(n), Ns(e) && Fe(e, "_locale") && (s._locale = e._locale), Ns(e) && Fe(e, "_isValid") && (s._isValid = e._isValid), s;
}
hn.fn = So.prototype;
hn.invalid = NN;
function _r(e, t) {
  var n = e && parseFloat(e.replace(",", "."));
  return (isNaN(n) ? 0 : n) * t;
}
function Sc(e, t) {
  var n = {};
  return n.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n;
}
function BN(e, t) {
  var n;
  return e.isValid() && t.isValid() ? (t = Vl(t, e), e.isBefore(t) ? n = Sc(e, t) : (n = Sc(t, e), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : { milliseconds: 0, months: 0 };
}
function Sh(e, t) {
  return function(n, r) {
    var a, s;
    return r !== null && !isNaN(+r) && (eh(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), s = n, n = r, r = s), a = hn(n, r), Th(this, a, e), this;
  };
}
function Th(e, t, n, r) {
  var a = t._milliseconds, s = yi(t._days), o = yi(t._months);
  e.isValid() && (r = r ?? !0, o && ch(e, eo(e, "Month") + o * n), s && rh(e, "Date", eo(e, "Date") + s * n), a && e._d.setTime(e._d.valueOf() + a * n), r && ne.updateOffset(e, s || o));
}
var GN = Sh(1, "add"), zN = Sh(-1, "subtract");
function Mh(e) {
  return typeof e == "string" || e instanceof String;
}
function qN(e) {
  return cn(e) || os(e) || Mh(e) || Gn(e) || ZN(e) || KN(e) || e === null || e === void 0;
}
function KN(e) {
  var t = kr(e) && !kl(e), n = !1, r = [
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
  ], a, s, o = r.length;
  for (a = 0; a < o; a += 1)
    s = r[a], n = n || Fe(e, s);
  return t && n;
}
function ZN(e) {
  var t = un(e), n = !1;
  return t && (n = e.filter(function(r) {
    return !Gn(r) && Mh(e);
  }).length === 0), t && n;
}
function XN(e) {
  var t = kr(e) && !kl(e), n = !1, r = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], a, s;
  for (a = 0; a < r.length; a += 1)
    s = r[a], n = n || Fe(e, s);
  return t && n;
}
function JN(e, t) {
  var n = e.diff(t, "days", !0);
  return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse";
}
function QN(e, t) {
  arguments.length === 1 && (arguments[0] ? qN(arguments[0]) ? (e = arguments[0], t = void 0) : XN(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var n = e || Ze(), r = Vl(n, this).startOf("day"), a = ne.calendarFormat(this, r) || "sameElse", s = t && ($n(t[a]) ? t[a].call(this, n) : t[a]);
  return this.format(
    s || this.localeData().calendar(a, this, Ze(n))
  );
}
function eP() {
  return new is(this);
}
function tP(e, t) {
  var n = cn(e) ? e : Ze(e);
  return this.isValid() && n.isValid() ? (t = tn(t) || "millisecond", t === "millisecond" ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function nP(e, t) {
  var n = cn(e) ? e : Ze(e);
  return this.isValid() && n.isValid() ? (t = tn(t) || "millisecond", t === "millisecond" ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf()) : !1;
}
function rP(e, t, n, r) {
  var a = cn(e) ? e : Ze(e), s = cn(t) ? t : Ze(t);
  return this.isValid() && a.isValid() && s.isValid() ? (r = r || "()", (r[0] === "(" ? this.isAfter(a, n) : !this.isBefore(a, n)) && (r[1] === ")" ? this.isBefore(s, n) : !this.isAfter(s, n))) : !1;
}
function aP(e, t) {
  var n = cn(e) ? e : Ze(e), r;
  return this.isValid() && n.isValid() ? (t = tn(t) || "millisecond", t === "millisecond" ? this.valueOf() === n.valueOf() : (r = n.valueOf(), this.clone().startOf(t).valueOf() <= r && r <= this.clone().endOf(t).valueOf())) : !1;
}
function sP(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function oP(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function iP(e, t, n) {
  var r, a, s;
  if (!this.isValid())
    return NaN;
  if (r = Vl(e, this), !r.isValid())
    return NaN;
  switch (a = (r.utcOffset() - this.utcOffset()) * 6e4, t = tn(t), t) {
    case "year":
      s = Ps(this, r) / 12;
      break;
    case "month":
      s = Ps(this, r);
      break;
    case "quarter":
      s = Ps(this, r) / 3;
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
  return n ? s : Gt(s);
}
function Ps(e, t) {
  if (e.date() < t.date())
    return -Ps(t, e);
  var n = (t.year() - e.year()) * 12 + (t.month() - e.month()), r = e.clone().add(n, "months"), a, s;
  return t - r < 0 ? (a = e.clone().add(n - 1, "months"), s = (t - r) / (r - a)) : (a = e.clone().add(n + 1, "months"), s = (t - r) / (a - r)), -(n + s) || 0;
}
ne.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
ne.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function lP() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function uP(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, n = t ? this.clone().utc() : this;
  return n.year() < 0 || n.year() > 9999 ? $s(
    n,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : $n(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", $s(n, "Z")) : $s(
    n,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function cP() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", n, r, a, s;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), n = "[" + e + '("]', r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", a = "-MM-DD[T]HH:mm:ss.SSS", s = t + '[")]', this.format(n + r + a + s);
}
function dP(e) {
  e || (e = this.isUtc() ? ne.defaultFormatUtc : ne.defaultFormat);
  var t = $s(this, e);
  return this.localeData().postformat(t);
}
function fP(e, t) {
  return this.isValid() && (cn(e) && e.isValid() || Ze(e).isValid()) ? hn({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function hP(e) {
  return this.from(Ze(), e);
}
function mP(e, t) {
  return this.isValid() && (cn(e) && e.isValid() || Ze(e).isValid()) ? hn({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function vP(e) {
  return this.to(Ze(), e);
}
function $h(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = Xn(e), t != null && (this._locale = t), this);
}
var Nh = en(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function Ph() {
  return this._locale;
}
var ro = 1e3, ta = 60 * ro, ao = 60 * ta, Ih = (365 * 400 + 97) * 24 * ao;
function na(e, t) {
  return (e % t + t) % t;
}
function Ch(e, t, n) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, n) - Ih : new Date(e, t, n).valueOf();
}
function Ah(e, t, n) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, n) - Ih : Date.UTC(e, t, n);
}
function pP(e) {
  var t, n;
  if (e = tn(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (n = this._isUTC ? Ah : Ch, e) {
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
      t = this._d.valueOf(), t -= na(
        t + (this._isUTC ? 0 : this.utcOffset() * ta),
        ao
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= na(t, ta);
      break;
    case "second":
      t = this._d.valueOf(), t -= na(t, ro);
      break;
  }
  return this._d.setTime(t), ne.updateOffset(this, !0), this;
}
function _P(e) {
  var t, n;
  if (e = tn(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (n = this._isUTC ? Ah : Ch, e) {
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
      t = this._d.valueOf(), t += ao - na(
        t + (this._isUTC ? 0 : this.utcOffset() * ta),
        ao
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += ta - na(t, ta) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += ro - na(t, ro) - 1;
      break;
  }
  return this._d.setTime(t), ne.updateOffset(this, !0), this;
}
function gP() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function yP() {
  return Math.floor(this.valueOf() / 1e3);
}
function bP() {
  return new Date(this.valueOf());
}
function wP() {
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
function DP() {
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
function OP() {
  return this.isValid() ? this.toISOString() : null;
}
function EP() {
  return Sl(this);
}
function kP() {
  return ir({}, Oe(this));
}
function SP() {
  return Oe(this).overflow;
}
function TP() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
de("N", 0, 0, "eraAbbr");
de("NN", 0, 0, "eraAbbr");
de("NNN", 0, 0, "eraAbbr");
de("NNNN", 0, 0, "eraName");
de("NNNNN", 0, 0, "eraNarrow");
de("y", ["y", 1], "yo", "eraYear");
de("y", ["yy", 2], 0, "eraYear");
de("y", ["yyy", 3], 0, "eraYear");
de("y", ["yyyy", 4], 0, "eraYear");
se("N", Wl);
se("NN", Wl);
se("NNN", Wl);
se("NNNN", YP);
se("NNNNN", FP);
He(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, n, r) {
    var a = n._locale.erasParse(e, r, n._strict);
    a ? Oe(n).era = a : Oe(n).invalidEra = e;
  }
);
se("y", wa);
se("yy", wa);
se("yyy", wa);
se("yyyy", wa);
se("yo", UP);
He(["y", "yy", "yyy", "yyyy"], Ot);
He(["yo"], function(e, t, n, r) {
  var a;
  n._locale._eraYearOrdinalRegex && (a = e.match(n._locale._eraYearOrdinalRegex)), n._locale.eraYearOrdinalParse ? t[Ot] = n._locale.eraYearOrdinalParse(e, a) : t[Ot] = parseInt(e, 10);
});
function MP(e, t) {
  var n, r, a, s = this._eras || Xn("en")._eras;
  for (n = 0, r = s.length; n < r; ++n) {
    switch (typeof s[n].since) {
      case "string":
        a = ne(s[n].since).startOf("day"), s[n].since = a.valueOf();
        break;
    }
    switch (typeof s[n].until) {
      case "undefined":
        s[n].until = 1 / 0;
        break;
      case "string":
        a = ne(s[n].until).startOf("day").valueOf(), s[n].until = a.valueOf();
        break;
    }
  }
  return s;
}
function $P(e, t, n) {
  var r, a, s = this.eras(), o, i, l;
  for (e = e.toUpperCase(), r = 0, a = s.length; r < a; ++r)
    if (o = s[r].name.toUpperCase(), i = s[r].abbr.toUpperCase(), l = s[r].narrow.toUpperCase(), n)
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (i === e)
            return s[r];
          break;
        case "NNNN":
          if (o === e)
            return s[r];
          break;
        case "NNNNN":
          if (l === e)
            return s[r];
          break;
      }
    else if ([o, i, l].indexOf(e) >= 0)
      return s[r];
}
function NP(e, t) {
  var n = e.since <= e.until ? 1 : -1;
  return t === void 0 ? ne(e.since).year() : ne(e.since).year() + (t - e.offset) * n;
}
function PP() {
  var e, t, n, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
      return r[e].name;
  return "";
}
function IP() {
  var e, t, n, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
      return r[e].narrow;
  return "";
}
function CP() {
  var e, t, n, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
      return r[e].abbr;
  return "";
}
function AP() {
  var e, t, n, r, a = this.localeData().eras();
  for (e = 0, t = a.length; e < t; ++e)
    if (n = a[e].since <= a[e].until ? 1 : -1, r = this.clone().startOf("day").valueOf(), a[e].since <= r && r <= a[e].until || a[e].until <= r && r <= a[e].since)
      return (this.year() - ne(a[e].since).year()) * n + a[e].offset;
  return this.year();
}
function LP(e) {
  return Fe(this, "_erasNameRegex") || jl.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function xP(e) {
  return Fe(this, "_erasAbbrRegex") || jl.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function RP(e) {
  return Fe(this, "_erasNarrowRegex") || jl.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function Wl(e, t) {
  return t.erasAbbrRegex(e);
}
function YP(e, t) {
  return t.erasNameRegex(e);
}
function FP(e, t) {
  return t.erasNarrowRegex(e);
}
function UP(e, t) {
  return t._eraYearOrdinalRegex || wa;
}
function jl() {
  var e = [], t = [], n = [], r = [], a, s, o = this.eras();
  for (a = 0, s = o.length; a < s; ++a)
    t.push(Rt(o[a].name)), e.push(Rt(o[a].abbr)), n.push(Rt(o[a].narrow)), r.push(Rt(o[a].name)), r.push(Rt(o[a].abbr)), r.push(Rt(o[a].narrow));
  this._erasRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  );
}
de(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
de(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function To(e, t) {
  de(0, [e, e.length], 0, t);
}
To("gggg", "weekYear");
To("ggggg", "weekYear");
To("GGGG", "isoWeekYear");
To("GGGGG", "isoWeekYear");
kt("weekYear", "gg");
kt("isoWeekYear", "GG");
St("weekYear", 1);
St("isoWeekYear", 1);
se("G", Do);
se("g", Do);
se("GG", Xe, Vt);
se("gg", Xe, Vt);
se("GGGG", Il, Pl);
se("gggg", Il, Pl);
se("GGGGG", wo, yo);
se("ggggg", wo, yo);
us(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, n, r) {
    t[r.substr(0, 2)] = Te(e);
  }
);
us(["gg", "GG"], function(e, t, n, r) {
  t[r] = ne.parseTwoDigitYear(e);
});
function VP(e) {
  return Lh.call(
    this,
    e,
    this.week(),
    this.weekday(),
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function WP(e) {
  return Lh.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function jP() {
  return Vn(this.year(), 1, 4);
}
function HP() {
  return Vn(this.isoWeekYear(), 1, 4);
}
function BP() {
  var e = this.localeData()._week;
  return Vn(this.year(), e.dow, e.doy);
}
function GP() {
  var e = this.localeData()._week;
  return Vn(this.weekYear(), e.dow, e.doy);
}
function Lh(e, t, n, r, a) {
  var s;
  return e == null ? Ka(this, r, a).year : (s = Vn(e, r, a), t > s && (t = s), zP.call(this, e, t, n, r, a));
}
function zP(e, t, n, r, a) {
  var s = mh(e, t, n, r, a), o = qa(s.year, 0, s.dayOfYear);
  return this.year(o.getUTCFullYear()), this.month(o.getUTCMonth()), this.date(o.getUTCDate()), this;
}
de("Q", 0, "Qo", "quarter");
kt("quarter", "Q");
St("quarter", 7);
se("Q", ah);
He("Q", function(e, t) {
  t[Fn] = (Te(e) - 1) * 3;
});
function qP(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
de("D", ["DD", 2], "Do", "date");
kt("date", "D");
St("date", 9);
se("D", Xe);
se("DD", Xe, Vt);
se("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
He(["D", "DD"], gn);
He("Do", function(e, t) {
  t[gn] = Te(e.match(Xe)[0]);
});
var xh = ba("Date", !0);
de("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
kt("dayOfYear", "DDD");
St("dayOfYear", 4);
se("DDD", bo);
se("DDDD", sh);
He(["DDD", "DDDD"], function(e, t, n) {
  n._dayOfYear = Te(e);
});
function KP(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
de("m", ["mm", 2], 0, "minute");
kt("minute", "m");
St("minute", 14);
se("m", Xe);
se("mm", Xe, Vt);
He(["m", "mm"], on);
var ZP = ba("Minutes", !1);
de("s", ["ss", 2], 0, "second");
kt("second", "s");
St("second", 15);
se("s", Xe);
se("ss", Xe, Vt);
He(["s", "ss"], Un);
var XP = ba("Seconds", !1);
de("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
de(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
de(0, ["SSS", 3], 0, "millisecond");
de(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
de(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
de(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
de(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
de(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
de(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
kt("millisecond", "ms");
St("millisecond", 16);
se("S", bo, ah);
se("SS", bo, Vt);
se("SSS", bo, sh);
var lr, Rh;
for (lr = "SSSS"; lr.length <= 9; lr += "S")
  se(lr, wa);
function JP(e, t) {
  t[Dr] = Te(("0." + e) * 1e3);
}
for (lr = "S"; lr.length <= 9; lr += "S")
  He(lr, JP);
Rh = ba("Milliseconds", !1);
de("z", 0, 0, "zoneAbbr");
de("zz", 0, 0, "zoneName");
function QP() {
  return this._isUTC ? "UTC" : "";
}
function eI() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var G = is.prototype;
G.add = GN;
G.calendar = QN;
G.clone = eP;
G.diff = iP;
G.endOf = _P;
G.format = dP;
G.from = fP;
G.fromNow = hP;
G.to = mP;
G.toNow = vP;
G.get = n$;
G.invalidAt = SP;
G.isAfter = tP;
G.isBefore = nP;
G.isBetween = rP;
G.isSame = aP;
G.isSameOrAfter = sP;
G.isSameOrBefore = oP;
G.isValid = EP;
G.lang = Nh;
G.locale = $h;
G.localeData = Ph;
G.max = EN;
G.min = ON;
G.parsingFlags = kP;
G.set = r$;
G.startOf = pP;
G.subtract = zN;
G.toArray = wP;
G.toObject = DP;
G.toDate = bP;
G.toISOString = uP;
G.inspect = cP;
typeof Symbol < "u" && Symbol.for != null && (G[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
G.toJSON = OP;
G.toString = lP;
G.unix = yP;
G.valueOf = gP;
G.creationData = TP;
G.eraName = PP;
G.eraNarrow = IP;
G.eraAbbr = CP;
G.eraYear = AP;
G.year = hh;
G.isLeapYear = D$;
G.weekYear = VP;
G.isoWeekYear = WP;
G.quarter = G.quarters = qP;
G.month = dh;
G.daysInMonth = y$;
G.week = G.weeks = M$;
G.isoWeek = G.isoWeeks = $$;
G.weeksInYear = BP;
G.weeksInWeekYear = GP;
G.isoWeeksInYear = jP;
G.isoWeeksInISOWeekYear = HP;
G.date = xh;
G.day = G.days = W$;
G.weekday = j$;
G.isoWeekday = H$;
G.dayOfYear = KP;
G.hour = G.hours = X$;
G.minute = G.minutes = ZP;
G.second = G.seconds = XP;
G.millisecond = G.milliseconds = Rh;
G.utcOffset = CN;
G.utc = LN;
G.local = xN;
G.parseZone = RN;
G.hasAlignedHourOffset = YN;
G.isDST = FN;
G.isLocal = VN;
G.isUtcOffset = WN;
G.isUtc = kh;
G.isUTC = kh;
G.zoneAbbr = QP;
G.zoneName = eI;
G.dates = en(
  "dates accessor is deprecated. Use date instead.",
  xh
);
G.months = en(
  "months accessor is deprecated. Use month instead",
  dh
);
G.years = en(
  "years accessor is deprecated. Use year instead",
  hh
);
G.zone = en(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  AN
);
G.isDSTShifted = en(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  UN
);
function tI(e) {
  return Ze(e * 1e3);
}
function nI() {
  return Ze.apply(null, arguments).parseZone();
}
function Yh(e) {
  return e;
}
var Ue = Ml.prototype;
Ue.calendar = W2;
Ue.longDateFormat = G2;
Ue.invalidDate = q2;
Ue.ordinal = X2;
Ue.preparse = Yh;
Ue.postformat = Yh;
Ue.relativeTime = Q2;
Ue.pastFuture = e$;
Ue.set = U2;
Ue.eras = MP;
Ue.erasParse = $P;
Ue.erasConvertYear = NP;
Ue.erasAbbrRegex = xP;
Ue.erasNameRegex = LP;
Ue.erasNarrowRegex = RP;
Ue.months = v$;
Ue.monthsShort = p$;
Ue.monthsParse = g$;
Ue.monthsRegex = w$;
Ue.monthsShortRegex = b$;
Ue.week = E$;
Ue.firstDayOfYear = T$;
Ue.firstDayOfWeek = S$;
Ue.weekdays = R$;
Ue.weekdaysMin = F$;
Ue.weekdaysShort = Y$;
Ue.weekdaysParse = V$;
Ue.weekdaysRegex = B$;
Ue.weekdaysShortRegex = G$;
Ue.weekdaysMinRegex = z$;
Ue.isPM = K$;
Ue.meridiem = J$;
function so(e, t, n, r) {
  var a = Xn(), s = Mn().set(r, t);
  return a[n](s, e);
}
function Fh(e, t, n) {
  if (Gn(e) && (t = e, e = void 0), e = e || "", t != null)
    return so(e, t, n, "month");
  var r, a = [];
  for (r = 0; r < 12; r++)
    a[r] = so(e, r, n, "month");
  return a;
}
function Hl(e, t, n, r) {
  typeof e == "boolean" ? (Gn(t) && (n = t, t = void 0), t = t || "") : (t = e, n = t, e = !1, Gn(t) && (n = t, t = void 0), t = t || "");
  var a = Xn(), s = e ? a._week.dow : 0, o, i = [];
  if (n != null)
    return so(t, (n + s) % 7, r, "day");
  for (o = 0; o < 7; o++)
    i[o] = so(t, (o + s) % 7, r, "day");
  return i;
}
function rI(e, t) {
  return Fh(e, t, "months");
}
function aI(e, t) {
  return Fh(e, t, "monthsShort");
}
function sI(e, t, n) {
  return Hl(e, t, n, "weekdays");
}
function oI(e, t, n) {
  return Hl(e, t, n, "weekdaysShort");
}
function iI(e, t, n) {
  return Hl(e, t, n, "weekdaysMin");
}
ur("en", {
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
    var t = e % 10, n = Te(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
    return e + n;
  }
});
ne.lang = en(
  "moment.lang is deprecated. Use moment.locale instead.",
  ur
);
ne.langData = en(
  "moment.langData is deprecated. Use moment.localeData instead.",
  Xn
);
var In = Math.abs;
function lI() {
  var e = this._data;
  return this._milliseconds = In(this._milliseconds), this._days = In(this._days), this._months = In(this._months), e.milliseconds = In(e.milliseconds), e.seconds = In(e.seconds), e.minutes = In(e.minutes), e.hours = In(e.hours), e.months = In(e.months), e.years = In(e.years), this;
}
function Uh(e, t, n, r) {
  var a = hn(t, n);
  return e._milliseconds += r * a._milliseconds, e._days += r * a._days, e._months += r * a._months, e._bubble();
}
function uI(e, t) {
  return Uh(this, e, t, 1);
}
function cI(e, t) {
  return Uh(this, e, t, -1);
}
function Tc(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function dI() {
  var e = this._milliseconds, t = this._days, n = this._months, r = this._data, a, s, o, i, l;
  return e >= 0 && t >= 0 && n >= 0 || e <= 0 && t <= 0 && n <= 0 || (e += Tc(wi(n) + t) * 864e5, t = 0, n = 0), r.milliseconds = e % 1e3, a = Gt(e / 1e3), r.seconds = a % 60, s = Gt(a / 60), r.minutes = s % 60, o = Gt(s / 60), r.hours = o % 24, t += Gt(o / 24), l = Gt(Vh(t)), n += l, t -= Tc(wi(l)), i = Gt(n / 12), n %= 12, r.days = t, r.months = n, r.years = i, this;
}
function Vh(e) {
  return e * 4800 / 146097;
}
function wi(e) {
  return e * 146097 / 4800;
}
function fI(e) {
  if (!this.isValid())
    return NaN;
  var t, n, r = this._milliseconds;
  if (e = tn(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + r / 864e5, n = this._months + Vh(t), e) {
      case "month":
        return n;
      case "quarter":
        return n / 3;
      case "year":
        return n / 12;
    }
  else
    switch (t = this._days + Math.round(wi(this._months)), e) {
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
function hI() {
  return this.isValid() ? this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + Te(this._months / 12) * 31536e6 : NaN;
}
function Jn(e) {
  return function() {
    return this.as(e);
  };
}
var mI = Jn("ms"), vI = Jn("s"), pI = Jn("m"), _I = Jn("h"), gI = Jn("d"), yI = Jn("w"), bI = Jn("M"), wI = Jn("Q"), DI = Jn("y");
function OI() {
  return hn(this);
}
function EI(e) {
  return e = tn(e), this.isValid() ? this[e + "s"]() : NaN;
}
function xr(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var kI = xr("milliseconds"), SI = xr("seconds"), TI = xr("minutes"), MI = xr("hours"), $I = xr("days"), NI = xr("months"), PI = xr("years");
function II() {
  return Gt(this.days() / 7);
}
var An = Math.round, Kr = {
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
function CI(e, t, n, r, a) {
  return a.relativeTime(t || 1, !!n, e, r);
}
function AI(e, t, n, r) {
  var a = hn(e).abs(), s = An(a.as("s")), o = An(a.as("m")), i = An(a.as("h")), l = An(a.as("d")), c = An(a.as("M")), u = An(a.as("w")), d = An(a.as("y")), f = s <= n.ss && ["s", s] || s < n.s && ["ss", s] || o <= 1 && ["m"] || o < n.m && ["mm", o] || i <= 1 && ["h"] || i < n.h && ["hh", i] || l <= 1 && ["d"] || l < n.d && ["dd", l];
  return n.w != null && (f = f || u <= 1 && ["w"] || u < n.w && ["ww", u]), f = f || c <= 1 && ["M"] || c < n.M && ["MM", c] || d <= 1 && ["y"] || ["yy", d], f[2] = t, f[3] = +e > 0, f[4] = r, CI.apply(null, f);
}
function LI(e) {
  return e === void 0 ? An : typeof e == "function" ? (An = e, !0) : !1;
}
function xI(e, t) {
  return Kr[e] === void 0 ? !1 : t === void 0 ? Kr[e] : (Kr[e] = t, e === "s" && (Kr.ss = t - 1), !0);
}
function RI(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var n = !1, r = Kr, a, s;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (n = e), typeof t == "object" && (r = Object.assign({}, Kr, t), t.s != null && t.ss == null && (r.ss = t.s - 1)), a = this.localeData(), s = AI(this, !n, r, a), n && (s = a.pastFuture(+this, s)), a.postformat(s);
}
var Ko = Math.abs;
function Fr(e) {
  return (e > 0) - (e < 0) || +e;
}
function Mo() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = Ko(this._milliseconds) / 1e3, t = Ko(this._days), n = Ko(this._months), r, a, s, o, i = this.asSeconds(), l, c, u, d;
  return i ? (r = Gt(e / 60), a = Gt(r / 60), e %= 60, r %= 60, s = Gt(n / 12), n %= 12, o = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", l = i < 0 ? "-" : "", c = Fr(this._months) !== Fr(i) ? "-" : "", u = Fr(this._days) !== Fr(i) ? "-" : "", d = Fr(this._milliseconds) !== Fr(i) ? "-" : "", l + "P" + (s ? c + s + "Y" : "") + (n ? c + n + "M" : "") + (t ? u + t + "D" : "") + (a || r || e ? "T" : "") + (a ? d + a + "H" : "") + (r ? d + r + "M" : "") + (e ? d + o + "S" : "")) : "P0D";
}
var Le = So.prototype;
Le.isValid = $N;
Le.abs = lI;
Le.add = uI;
Le.subtract = cI;
Le.as = fI;
Le.asMilliseconds = mI;
Le.asSeconds = vI;
Le.asMinutes = pI;
Le.asHours = _I;
Le.asDays = gI;
Le.asWeeks = yI;
Le.asMonths = bI;
Le.asQuarters = wI;
Le.asYears = DI;
Le.valueOf = hI;
Le._bubble = dI;
Le.clone = OI;
Le.get = EI;
Le.milliseconds = kI;
Le.seconds = SI;
Le.minutes = TI;
Le.hours = MI;
Le.days = $I;
Le.weeks = II;
Le.months = NI;
Le.years = PI;
Le.humanize = RI;
Le.toISOString = Mo;
Le.toString = Mo;
Le.toJSON = Mo;
Le.locale = $h;
Le.localeData = Ph;
Le.toIsoString = en(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  Mo
);
Le.lang = Nh;
de("X", 0, 0, "unix");
de("x", 0, 0, "valueOf");
se("x", Do);
se("X", s$);
He("X", function(e, t, n) {
  n._d = new Date(parseFloat(e) * 1e3);
});
He("x", function(e, t, n) {
  n._d = new Date(Te(e));
});
//! moment.js
ne.version = "2.29.4";
Y2(Ze);
ne.fn = G;
ne.min = kN;
ne.max = SN;
ne.now = TN;
ne.utc = Mn;
ne.unix = tI;
ne.months = rI;
ne.isDate = os;
ne.locale = ur;
ne.invalid = _o;
ne.duration = hn;
ne.isMoment = cn;
ne.weekdays = sI;
ne.parseZone = nI;
ne.localeData = Xn;
ne.isDuration = Ns;
ne.monthsShort = aI;
ne.weekdaysMin = iI;
ne.defineLocale = xl;
ne.updateLocale = nN;
ne.locales = rN;
ne.weekdaysShort = oI;
ne.normalizeUnits = tn;
ne.relativeTimeRounding = LI;
ne.relativeTimeThreshold = xI;
ne.calendarFormat = JN;
ne.prototype = G;
ne.HTML5_FMT = {
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
const YI = { class: "flex flex-col gap-2" }, FI = { class: "flex items-center gap-2" }, UI = /* @__PURE__ */ E("label", {
  for: "due",
  class: "p3-b"
}, "結束於指定日期", -1), VI = ["onClick"], WI = /* @__PURE__ */ Ve({
  __name: "DuePicker",
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, r = P({
      get: () => n.modelValue,
      set: (s) => t("update:modelValue", s)
    }), a = ae(!1);
    return Re(
      () => n.modelValue,
      (s) => {
        s && (a.value = !0);
      },
      { immediate: !0 }
    ), Re(a, (s) => {
      s || t("update:modelValue", null);
    }), ts(() => {
      t("update:modelValue", null);
    }), (s, o) => (O(), T("div", YI, [
      E("div", FI, [
        ot(E("input", {
          type: "checkbox",
          "onUpdate:modelValue": o[0] || (o[0] = (i) => xe(a) ? a.value = i : null),
          id: "due"
        }, null, 512), [
          [Wi, _(a)]
        ]),
        UI,
        _(a) ? (O(), et(_(El), {
          key: 0,
          modelValue: _(r),
          "onUpdate:modelValue": o[1] || (o[1] = (i) => xe(r) ? r.value = i : null),
          mode: "dateTime",
          timezone: "UTC",
          "min-Date": /* @__PURE__ */ new Date(),
          is24hr: ""
        }, {
          default: vt(({ togglePopover: i, inputValue: l }) => [
            E("button", {
              class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 transition-all hover:bg-light-3 hover:bg-opacity-50",
              onClick: i
            }, pe(l ? _(ne).utc(l).local().format("YYYY-MM-DD HH:mm") : "請選定結束日期"), 9, VI)
          ]),
          _: 1
        }, 8, ["modelValue", "min-Date"])) : J("", !0)
      ])
    ]));
  }
}), jI = { class: "flex w-auto items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-1.5" }, HI = ["value", "type", "placeholder", "maxLength", "required"], BI = /* @__PURE__ */ Ve({
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
    return (a, s) => (O(), T("div", jI, [
      E("input", {
        value: a.modelValue,
        onInput: r,
        type: a.type,
        class: "p3-b w-full border-none outline-none shadow-none placeholder:text-dark-5",
        placeholder: a.placeholder,
        maxLength: a.maxLength,
        required: a.required
      }, null, 40, HI)
    ]));
  }
});
const cr = /* @__PURE__ */ qi(BI, [["__scopeId", "data-v-661b5eb1"]]);
/*!
  * shared v9.5.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */
const kn = typeof window < "u";
let Ft, Mr;
if (process.env.NODE_ENV !== "production") {
  const e = kn && window.performance;
  e && e.mark && e.measure && e.clearMarks && // @ts-ignore browser compat
  e.clearMeasures && (Ft = (t) => {
    e.mark(t);
  }, Mr = (t, n, r) => {
    e.measure(t, n, r), e.clearMarks(n), e.clearMarks(r);
  });
}
const GI = /\{([0-9a-zA-Z]+)\}/g;
function Bl(e, ...t) {
  return t.length === 1 && Ye(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(GI, (n, r) => t.hasOwnProperty(r) ? t[r] : "");
}
const Nn = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), zI = (e, t, n) => qI({ l: e, k: t, s: n }), qI = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), ht = (e) => typeof e == "number" && isFinite(e), KI = (e) => jh(e) === "[object Date]", hr = (e) => jh(e) === "[object RegExp]", $o = (e) => ye(e) && Object.keys(e).length === 0, bt = Object.assign;
let Mc;
const xn = () => Mc || (Mc = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function $c(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const ZI = Object.prototype.hasOwnProperty;
function Gl(e, t) {
  return ZI.call(e, t);
}
const ze = Array.isArray, Qe = (e) => typeof e == "function", Q = (e) => typeof e == "string", Se = (e) => typeof e == "boolean", Ye = (e) => e !== null && typeof e == "object", Wh = Object.prototype.toString, jh = (e) => Wh.call(e), ye = (e) => {
  if (!Ye(e))
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t.constructor === Object;
}, XI = (e) => e == null ? "" : ze(e) || ye(e) && e.toString === Wh ? JSON.stringify(e, null, 2) : String(e);
function JI(e, t = "") {
  return e.reduce((n, r, a) => a === 0 ? n + r : n + t + r, "");
}
const Nc = 2;
function QI(e, t = 0, n = e.length) {
  const r = e.split(/\r?\n/);
  let a = 0;
  const s = [];
  for (let o = 0; o < r.length; o++)
    if (a += r[o].length + 1, a >= t) {
      for (let i = o - Nc; i <= o + Nc || n > a; i++) {
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
function zl(e) {
  let t = e;
  return () => ++t;
}
function gt(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const Pc = {};
function eC(e) {
  Pc[e] || (Pc[e] = !0, gt(e));
}
function ql() {
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
function tC(e, t, n) {
  return { line: e, column: t, offset: n };
}
function Di(e, t, n) {
  const r = { start: e, end: t };
  return n != null && (r.source = n), r;
}
const nC = /\{([0-9a-zA-Z]+)\}/g;
function rC(e, ...t) {
  return t.length === 1 && aC(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(nC, (n, r) => t.hasOwnProperty(r) ? t[r] : "");
}
const Hh = Object.assign, Ic = (e) => typeof e == "string", aC = (e) => e !== null && typeof e == "object";
function Bh(e, t = "") {
  return e.reduce((n, r, a) => a === 0 ? n + r : n + t + r, "");
}
const ve = {
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
}, sC = {
  // tokenizer error messages
  [ve.EXPECTED_TOKEN]: "Expected token: '{0}'",
  [ve.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
  [ve.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
  [ve.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
  [ve.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
  [ve.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
  [ve.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
  [ve.EMPTY_PLACEHOLDER]: "Empty placeholder",
  [ve.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
  [ve.INVALID_LINKED_FORMAT]: "Invalid linked format",
  // parser error messages
  [ve.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
  [ve.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
  [ve.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
  [ve.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
  // generator error messages
  [ve.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
  // minimizer error messages
  [ve.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
};
function Da(e, t, n = {}) {
  const { domain: r, messages: a, args: s } = n, o = rC((a || sC)[e] || "", ...s || []), i = new SyntaxError(String(o));
  return i.code = e, t && (i.location = t), i.domain = r, i;
}
function oC(e) {
  throw e;
}
const iC = /<\/?[\w\s="/.':;#-\/]+>/, lC = (e) => iC.test(e), Cn = " ", uC = "\r", Tt = `
`, cC = String.fromCharCode(8232), dC = String.fromCharCode(8233);
function fC(e) {
  const t = e;
  let n = 0, r = 1, a = 1, s = 0;
  const o = (x) => t[x] === uC && t[x + 1] === Tt, i = (x) => t[x] === Tt, l = (x) => t[x] === dC, c = (x) => t[x] === cC, u = (x) => o(x) || i(x) || l(x) || c(x), d = () => n, f = () => r, m = () => a, p = () => s, v = (x) => o(x) || l(x) || c(x) ? Tt : t[x], y = () => v(n), h = () => v(n + s);
  function b() {
    return s = 0, u(n) && (r++, a = 0), o(n) && n++, n++, a++, t[n];
  }
  function S() {
    return o(n + s) && s++, s++, t[n + s];
  }
  function w() {
    n = 0, r = 1, a = 1, s = 0;
  }
  function C(x = 0) {
    s = x;
  }
  function M() {
    const x = n + s;
    for (; x !== n; )
      b();
    s = 0;
  }
  return {
    index: d,
    line: f,
    column: m,
    peekOffset: p,
    charAt: v,
    currentChar: y,
    currentPeek: h,
    next: b,
    peek: S,
    reset: w,
    resetPeek: C,
    skipToPeek: M
  };
}
const tr = void 0, hC = ".", Cc = "'", mC = "tokenizer";
function vC(e, t = {}) {
  const n = t.location !== !1, r = fC(e), a = () => r.index(), s = () => tC(r.line(), r.column(), r.index()), o = s(), i = a(), l = {
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
  function d(D, g, L, ...ee) {
    const ue = c();
    if (g.column += L, g.offset += L, u) {
      const Ee = n ? Di(ue.startLoc, g) : null, wt = Da(D, Ee, {
        domain: mC,
        args: ee
      });
      u(wt);
    }
  }
  function f(D, g, L) {
    D.endLoc = s(), D.currentType = g;
    const ee = { type: g };
    return n && (ee.loc = Di(D.startLoc, D.endLoc)), L != null && (ee.value = L), ee;
  }
  const m = (D) => f(
    D,
    14
    /* TokenTypes.EOF */
  );
  function p(D, g) {
    return D.currentChar() === g ? (D.next(), g) : (d(ve.EXPECTED_TOKEN, s(), 0, g), "");
  }
  function v(D) {
    let g = "";
    for (; D.currentPeek() === Cn || D.currentPeek() === Tt; )
      g += D.currentPeek(), D.peek();
    return g;
  }
  function y(D) {
    const g = v(D);
    return D.skipToPeek(), g;
  }
  function h(D) {
    if (D === tr)
      return !1;
    const g = D.charCodeAt(0);
    return g >= 97 && g <= 122 || // a-z
    g >= 65 && g <= 90 || // A-Z
    g === 95;
  }
  function b(D) {
    if (D === tr)
      return !1;
    const g = D.charCodeAt(0);
    return g >= 48 && g <= 57;
  }
  function S(D, g) {
    const { currentType: L } = g;
    if (L !== 2)
      return !1;
    v(D);
    const ee = h(D.currentPeek());
    return D.resetPeek(), ee;
  }
  function w(D, g) {
    const { currentType: L } = g;
    if (L !== 2)
      return !1;
    v(D);
    const ee = D.currentPeek() === "-" ? D.peek() : D.currentPeek(), ue = b(ee);
    return D.resetPeek(), ue;
  }
  function C(D, g) {
    const { currentType: L } = g;
    if (L !== 2)
      return !1;
    v(D);
    const ee = D.currentPeek() === Cc;
    return D.resetPeek(), ee;
  }
  function M(D, g) {
    const { currentType: L } = g;
    if (L !== 8)
      return !1;
    v(D);
    const ee = D.currentPeek() === ".";
    return D.resetPeek(), ee;
  }
  function x(D, g) {
    const { currentType: L } = g;
    if (L !== 9)
      return !1;
    v(D);
    const ee = h(D.currentPeek());
    return D.resetPeek(), ee;
  }
  function I(D, g) {
    const { currentType: L } = g;
    if (!(L === 8 || L === 12))
      return !1;
    v(D);
    const ee = D.currentPeek() === ":";
    return D.resetPeek(), ee;
  }
  function A(D, g) {
    const { currentType: L } = g;
    if (L !== 10)
      return !1;
    const ee = () => {
      const Ee = D.currentPeek();
      return Ee === "{" ? h(D.peek()) : Ee === "@" || Ee === "%" || Ee === "|" || Ee === ":" || Ee === "." || Ee === Cn || !Ee ? !1 : Ee === Tt ? (D.peek(), ee()) : h(Ee);
    }, ue = ee();
    return D.resetPeek(), ue;
  }
  function R(D) {
    v(D);
    const g = D.currentPeek() === "|";
    return D.resetPeek(), g;
  }
  function j(D) {
    const g = v(D), L = D.currentPeek() === "%" && D.peek() === "{";
    return D.resetPeek(), {
      isModulo: L,
      hasSpace: g.length > 0
    };
  }
  function U(D, g = !0) {
    const L = (ue = !1, Ee = "", wt = !1) => {
      const it = D.currentPeek();
      return it === "{" ? Ee === "%" ? !1 : ue : it === "@" || !it ? Ee === "%" ? !0 : ue : it === "%" ? (D.peek(), L(ue, "%", !0)) : it === "|" ? Ee === "%" || wt ? !0 : !(Ee === Cn || Ee === Tt) : it === Cn ? (D.peek(), L(!0, Cn, wt)) : it === Tt ? (D.peek(), L(!0, Tt, wt)) : !0;
    }, ee = L();
    return g && D.resetPeek(), ee;
  }
  function Z(D, g) {
    const L = D.currentChar();
    return L === tr ? tr : g(L) ? (D.next(), L) : null;
  }
  function me(D) {
    return Z(D, (L) => {
      const ee = L.charCodeAt(0);
      return ee >= 97 && ee <= 122 || // a-z
      ee >= 65 && ee <= 90 || // A-Z
      ee >= 48 && ee <= 57 || // 0-9
      ee === 95 || // _
      ee === 36;
    });
  }
  function te(D) {
    return Z(D, (L) => {
      const ee = L.charCodeAt(0);
      return ee >= 48 && ee <= 57;
    });
  }
  function fe(D) {
    return Z(D, (L) => {
      const ee = L.charCodeAt(0);
      return ee >= 48 && ee <= 57 || // 0-9
      ee >= 65 && ee <= 70 || // A-F
      ee >= 97 && ee <= 102;
    });
  }
  function we(D) {
    let g = "", L = "";
    for (; g = te(D); )
      L += g;
    return L;
  }
  function Me(D) {
    y(D);
    const g = D.currentChar();
    return g !== "%" && d(ve.EXPECTED_TOKEN, s(), 0, g), D.next(), "%";
  }
  function z(D) {
    let g = "";
    for (; ; ) {
      const L = D.currentChar();
      if (L === "{" || L === "}" || L === "@" || L === "|" || !L)
        break;
      if (L === "%")
        if (U(D))
          g += L, D.next();
        else
          break;
      else if (L === Cn || L === Tt)
        if (U(D))
          g += L, D.next();
        else {
          if (R(D))
            break;
          g += L, D.next();
        }
      else
        g += L, D.next();
    }
    return g;
  }
  function k(D) {
    y(D);
    let g = "", L = "";
    for (; g = me(D); )
      L += g;
    return D.currentChar() === tr && d(ve.UNTERMINATED_CLOSING_BRACE, s(), 0), L;
  }
  function W(D) {
    y(D);
    let g = "";
    return D.currentChar() === "-" ? (D.next(), g += `-${we(D)}`) : g += we(D), D.currentChar() === tr && d(ve.UNTERMINATED_CLOSING_BRACE, s(), 0), g;
  }
  function re(D) {
    y(D), p(D, "'");
    let g = "", L = "";
    const ee = (Ee) => Ee !== Cc && Ee !== Tt;
    for (; g = Z(D, ee); )
      g === "\\" ? L += F(D) : L += g;
    const ue = D.currentChar();
    return ue === Tt || ue === tr ? (d(ve.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, s(), 0), ue === Tt && (D.next(), p(D, "'")), L) : (p(D, "'"), L);
  }
  function F(D) {
    const g = D.currentChar();
    switch (g) {
      case "\\":
      case "'":
        return D.next(), `\\${g}`;
      case "u":
        return N(D, g, 4);
      case "U":
        return N(D, g, 6);
      default:
        return d(ve.UNKNOWN_ESCAPE_SEQUENCE, s(), 0, g), "";
    }
  }
  function N(D, g, L) {
    p(D, g);
    let ee = "";
    for (let ue = 0; ue < L; ue++) {
      const Ee = fe(D);
      if (!Ee) {
        d(ve.INVALID_UNICODE_ESCAPE_SEQUENCE, s(), 0, `\\${g}${ee}${D.currentChar()}`);
        break;
      }
      ee += Ee;
    }
    return `\\${g}${ee}`;
  }
  function X(D) {
    y(D);
    let g = "", L = "";
    const ee = (ue) => ue !== "{" && ue !== "}" && ue !== Cn && ue !== Tt;
    for (; g = Z(D, ee); )
      L += g;
    return L;
  }
  function le(D) {
    let g = "", L = "";
    for (; g = me(D); )
      L += g;
    return L;
  }
  function Ce(D) {
    const g = (L = !1, ee) => {
      const ue = D.currentChar();
      return ue === "{" || ue === "%" || ue === "@" || ue === "|" || ue === "(" || ue === ")" || !ue || ue === Cn ? ee : ue === Tt || ue === hC ? (ee += ue, D.next(), g(L, ee)) : (ee += ue, D.next(), g(!0, ee));
    };
    return g(!1, "");
  }
  function $e(D) {
    y(D);
    const g = p(
      D,
      "|"
      /* TokenChars.Pipe */
    );
    return y(D), g;
  }
  function ke(D, g) {
    let L = null;
    switch (D.currentChar()) {
      case "{":
        return g.braceNest >= 1 && d(ve.NOT_ALLOW_NEST_PLACEHOLDER, s(), 0), D.next(), L = f(
          g,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), y(D), g.braceNest++, L;
      case "}":
        return g.braceNest > 0 && g.currentType === 2 && d(ve.EMPTY_PLACEHOLDER, s(), 0), D.next(), L = f(
          g,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), g.braceNest--, g.braceNest > 0 && y(D), g.inLinked && g.braceNest === 0 && (g.inLinked = !1), L;
      case "@":
        return g.braceNest > 0 && d(ve.UNTERMINATED_CLOSING_BRACE, s(), 0), L = nt(D, g) || m(g), g.braceNest = 0, L;
      default:
        let ue = !0, Ee = !0, wt = !0;
        if (R(D))
          return g.braceNest > 0 && d(ve.UNTERMINATED_CLOSING_BRACE, s(), 0), L = f(g, 1, $e(D)), g.braceNest = 0, g.inLinked = !1, L;
        if (g.braceNest > 0 && (g.currentType === 5 || g.currentType === 6 || g.currentType === 7))
          return d(ve.UNTERMINATED_CLOSING_BRACE, s(), 0), g.braceNest = 0, tt(D, g);
        if (ue = S(D, g))
          return L = f(g, 5, k(D)), y(D), L;
        if (Ee = w(D, g))
          return L = f(g, 6, W(D)), y(D), L;
        if (wt = C(D, g))
          return L = f(g, 7, re(D)), y(D), L;
        if (!ue && !Ee && !wt)
          return L = f(g, 13, X(D)), d(ve.INVALID_TOKEN_IN_PLACEHOLDER, s(), 0, L.value), y(D), L;
        break;
    }
    return L;
  }
  function nt(D, g) {
    const { currentType: L } = g;
    let ee = null;
    const ue = D.currentChar();
    switch ((L === 8 || L === 9 || L === 12 || L === 10) && (ue === Tt || ue === Cn) && d(ve.INVALID_LINKED_FORMAT, s(), 0), ue) {
      case "@":
        return D.next(), ee = f(
          g,
          8,
          "@"
          /* TokenChars.LinkedAlias */
        ), g.inLinked = !0, ee;
      case ".":
        return y(D), D.next(), f(
          g,
          9,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return y(D), D.next(), f(
          g,
          10,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return R(D) ? (ee = f(g, 1, $e(D)), g.braceNest = 0, g.inLinked = !1, ee) : M(D, g) || I(D, g) ? (y(D), nt(D, g)) : x(D, g) ? (y(D), f(g, 12, le(D))) : A(D, g) ? (y(D), ue === "{" ? ke(D, g) || ee : f(g, 11, Ce(D))) : (L === 8 && d(ve.INVALID_LINKED_FORMAT, s(), 0), g.braceNest = 0, g.inLinked = !1, tt(D, g));
    }
  }
  function tt(D, g) {
    let L = {
      type: 14
      /* TokenTypes.EOF */
    };
    if (g.braceNest > 0)
      return ke(D, g) || m(g);
    if (g.inLinked)
      return nt(D, g) || m(g);
    switch (D.currentChar()) {
      case "{":
        return ke(D, g) || m(g);
      case "}":
        return d(ve.UNBALANCED_CLOSING_BRACE, s(), 0), D.next(), f(
          g,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return nt(D, g) || m(g);
      default:
        if (R(D))
          return L = f(g, 1, $e(D)), g.braceNest = 0, g.inLinked = !1, L;
        const { isModulo: ue, hasSpace: Ee } = j(D);
        if (ue)
          return Ee ? f(g, 0, z(D)) : f(g, 4, Me(D));
        if (U(D))
          return f(g, 0, z(D));
        break;
    }
    return L;
  }
  function pt() {
    const { currentType: D, offset: g, startLoc: L, endLoc: ee } = l;
    return l.lastType = D, l.lastOffset = g, l.lastStartLoc = L, l.lastEndLoc = ee, l.offset = a(), l.startLoc = s(), r.currentChar() === tr ? f(
      l,
      14
      /* TokenTypes.EOF */
    ) : tt(r, l);
  }
  return {
    nextToken: pt,
    currentOffset: a,
    currentPosition: s,
    context: c
  };
}
const pC = "parser", _C = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function gC(e, t, n) {
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
function yC(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function r(h, b, S, w, ...C) {
    const M = h.currentPosition();
    if (M.offset += w, M.column += w, n) {
      const x = t ? Di(S, M) : null, I = Da(b, x, {
        domain: pC,
        args: C
      });
      n(I);
    }
  }
  function a(h, b, S) {
    const w = { type: h };
    return t && (w.start = b, w.end = b, w.loc = { start: S, end: S }), w;
  }
  function s(h, b, S, w) {
    w && (h.type = w), t && (h.end = b, h.loc && (h.loc.end = S));
  }
  function o(h, b) {
    const S = h.context(), w = a(3, S.offset, S.startLoc);
    return w.value = b, s(w, h.currentOffset(), h.currentPosition()), w;
  }
  function i(h, b) {
    const S = h.context(), { lastOffset: w, lastStartLoc: C } = S, M = a(5, w, C);
    return M.index = parseInt(b, 10), h.nextToken(), s(M, h.currentOffset(), h.currentPosition()), M;
  }
  function l(h, b) {
    const S = h.context(), { lastOffset: w, lastStartLoc: C } = S, M = a(4, w, C);
    return M.key = b, h.nextToken(), s(M, h.currentOffset(), h.currentPosition()), M;
  }
  function c(h, b) {
    const S = h.context(), { lastOffset: w, lastStartLoc: C } = S, M = a(9, w, C);
    return M.value = b.replace(_C, gC), h.nextToken(), s(M, h.currentOffset(), h.currentPosition()), M;
  }
  function u(h) {
    const b = h.nextToken(), S = h.context(), { lastOffset: w, lastStartLoc: C } = S, M = a(8, w, C);
    return b.type !== 12 ? (r(h, ve.UNEXPECTED_EMPTY_LINKED_MODIFIER, S.lastStartLoc, 0), M.value = "", s(M, w, C), {
      nextConsumeToken: b,
      node: M
    }) : (b.value == null && r(h, ve.UNEXPECTED_LEXICAL_ANALYSIS, S.lastStartLoc, 0, pn(b)), M.value = b.value || "", s(M, h.currentOffset(), h.currentPosition()), {
      node: M
    });
  }
  function d(h, b) {
    const S = h.context(), w = a(7, S.offset, S.startLoc);
    return w.value = b, s(w, h.currentOffset(), h.currentPosition()), w;
  }
  function f(h) {
    const b = h.context(), S = a(6, b.offset, b.startLoc);
    let w = h.nextToken();
    if (w.type === 9) {
      const C = u(h);
      S.modifier = C.node, w = C.nextConsumeToken || h.nextToken();
    }
    switch (w.type !== 10 && r(h, ve.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, pn(w)), w = h.nextToken(), w.type === 2 && (w = h.nextToken()), w.type) {
      case 11:
        w.value == null && r(h, ve.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, pn(w)), S.key = d(h, w.value || "");
        break;
      case 5:
        w.value == null && r(h, ve.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, pn(w)), S.key = l(h, w.value || "");
        break;
      case 6:
        w.value == null && r(h, ve.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, pn(w)), S.key = i(h, w.value || "");
        break;
      case 7:
        w.value == null && r(h, ve.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, pn(w)), S.key = c(h, w.value || "");
        break;
      default:
        r(h, ve.UNEXPECTED_EMPTY_LINKED_KEY, b.lastStartLoc, 0);
        const C = h.context(), M = a(7, C.offset, C.startLoc);
        return M.value = "", s(M, C.offset, C.startLoc), S.key = M, s(S, C.offset, C.startLoc), {
          nextConsumeToken: w,
          node: S
        };
    }
    return s(S, h.currentOffset(), h.currentPosition()), {
      node: S
    };
  }
  function m(h) {
    const b = h.context(), S = b.currentType === 1 ? h.currentOffset() : b.offset, w = b.currentType === 1 ? b.endLoc : b.startLoc, C = a(2, S, w);
    C.items = [];
    let M = null;
    do {
      const A = M || h.nextToken();
      switch (M = null, A.type) {
        case 0:
          A.value == null && r(h, ve.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, pn(A)), C.items.push(o(h, A.value || ""));
          break;
        case 6:
          A.value == null && r(h, ve.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, pn(A)), C.items.push(i(h, A.value || ""));
          break;
        case 5:
          A.value == null && r(h, ve.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, pn(A)), C.items.push(l(h, A.value || ""));
          break;
        case 7:
          A.value == null && r(h, ve.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, pn(A)), C.items.push(c(h, A.value || ""));
          break;
        case 8:
          const R = f(h);
          C.items.push(R.node), M = R.nextConsumeToken || null;
          break;
      }
    } while (b.currentType !== 14 && b.currentType !== 1);
    const x = b.currentType === 1 ? b.lastOffset : h.currentOffset(), I = b.currentType === 1 ? b.lastEndLoc : h.currentPosition();
    return s(C, x, I), C;
  }
  function p(h, b, S, w) {
    const C = h.context();
    let M = w.items.length === 0;
    const x = a(1, b, S);
    x.cases = [], x.cases.push(w);
    do {
      const I = m(h);
      M || (M = I.items.length === 0), x.cases.push(I);
    } while (C.currentType !== 14);
    return M && r(h, ve.MUST_HAVE_MESSAGES_IN_PLURAL, S, 0), s(x, h.currentOffset(), h.currentPosition()), x;
  }
  function v(h) {
    const b = h.context(), { offset: S, startLoc: w } = b, C = m(h);
    return b.currentType === 14 ? C : p(h, S, w, C);
  }
  function y(h) {
    const b = vC(h, Hh({}, e)), S = b.context(), w = a(0, S.offset, S.startLoc);
    return t && w.loc && (w.loc.source = h), w.body = v(b), e.onCacheKey && (w.cacheKey = e.onCacheKey(h)), S.currentType !== 14 && r(b, ve.UNEXPECTED_LEXICAL_ANALYSIS, S.lastStartLoc, 0, h[S.offset] || ""), s(w, b.currentOffset(), b.currentPosition()), w;
  }
  return { parse: y };
}
function pn(e) {
  if (e.type === 14)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function bC(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (s) => (n.helpers.add(s), s) };
}
function Ac(e, t) {
  for (let n = 0; n < e.length; n++)
    Kl(e[n], t);
}
function Kl(e, t) {
  switch (e.type) {
    case 1:
      Ac(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      Ac(e.items, t);
      break;
    case 6:
      Kl(e.key, t), t.helper(
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
function wC(e, t = {}) {
  const n = bC(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && Kl(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function DC(e) {
  const t = e.body;
  return t.type === 2 ? Lc(t) : t.cases.forEach((n) => Lc(n)), e;
}
function Lc(e) {
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
      e.static = Bh(t);
      for (let n = 0; n < e.items.length; n++) {
        const r = e.items[n];
        (r.type === 3 || r.type === 9) && delete r.value;
      }
    }
  }
}
const OC = "minifier";
function jr(e) {
  switch (e.t = e.type, e.type) {
    case 0:
      const t = e;
      jr(t.body), t.b = t.body, delete t.body;
      break;
    case 1:
      const n = e, r = n.cases;
      for (let u = 0; u < r.length; u++)
        jr(r[u]);
      n.c = r, delete n.cases;
      break;
    case 2:
      const a = e, s = a.items;
      for (let u = 0; u < s.length; u++)
        jr(s[u]);
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
      jr(i.key), i.k = i.key, delete i.key, i.modifier && (jr(i.modifier), i.m = i.modifier, delete i.modifier);
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
      throw Da(ve.UNHANDLED_MINIFIER_NODE_TYPE, null, {
        domain: OC,
        args: [e.type]
      });
  }
  delete e.type;
}
const EC = "parser";
function kC(e, t) {
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
  function c(y, h) {
    i.code += y;
  }
  function u(y, h = !0) {
    const b = h ? a : "";
    c(s ? b + "  ".repeat(y) : b);
  }
  function d(y = !0) {
    const h = ++i.indentLevel;
    y && u(h);
  }
  function f(y = !0) {
    const h = --i.indentLevel;
    y && u(h);
  }
  function m() {
    u(i.indentLevel);
  }
  return {
    context: l,
    push: c,
    indent: d,
    deindent: f,
    newline: m,
    helper: (y) => `_${y}`,
    needIndent: () => i.needIndent
  };
}
function SC(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), ua(e, t.key), t.modifier ? (e.push(", "), ua(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function TC(e, t) {
  const { helper: n, needIndent: r } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(r());
  const a = t.items.length;
  for (let s = 0; s < a && (ua(e, t.items[s]), s !== a - 1); s++)
    e.push(", ");
  e.deindent(r()), e.push("])");
}
function MC(e, t) {
  const { helper: n, needIndent: r } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(r());
    const a = t.cases.length;
    for (let s = 0; s < a && (ua(e, t.cases[s]), s !== a - 1); s++)
      e.push(", ");
    e.deindent(r()), e.push("])");
  }
}
function $C(e, t) {
  t.body ? ua(e, t.body) : e.push("null");
}
function ua(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      $C(e, t);
      break;
    case 1:
      MC(e, t);
      break;
    case 2:
      TC(e, t);
      break;
    case 6:
      SC(e, t);
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
      throw Da(ve.UNHANDLED_CODEGEN_NODE_TYPE, null, {
        domain: EC,
        args: [t.type]
      });
  }
}
const NC = (e, t = {}) => {
  const n = Ic(t.mode) ? t.mode : "normal", r = Ic(t.filename) ? t.filename : "message.intl", a = !!t.sourceMap, s = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, o = t.needIndent ? t.needIndent : n !== "arrow", i = e.helpers || [], l = kC(e, {
    mode: n,
    filename: r,
    sourceMap: a,
    breakLineCode: s,
    needIndent: o
  });
  l.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), l.indent(o), i.length > 0 && (l.push(`const { ${Bh(i.map((d) => `${d}: _${d}`), ", ")} } = ctx`), l.newline()), l.push("return "), ua(l, e), l.deindent(o), l.push("}"), delete e.helpers;
  const { code: c, map: u } = l.context();
  return {
    ast: e,
    code: c,
    map: u ? u.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function PC(e, t = {}) {
  const n = Hh({}, t), r = !!n.jit, a = !!n.minify, s = n.optimize == null ? !0 : n.optimize, i = yC(n).parse(e);
  return r ? (s && DC(i), a && jr(i), { ast: i, code: "" }) : (wC(i, n), NC(i, n));
}
/*!
  * core-base v9.5.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */
function IC() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (xn().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (xn().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (xn().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const vr = [];
vr[
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
vr[
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
vr[
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
vr[
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
vr[
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
vr[
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
vr[
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
const CC = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function AC(e) {
  return CC.test(e);
}
function LC(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function xC(e) {
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
function RC(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : AC(t) ? LC(t) : "*" + t;
}
function YC(e) {
  const t = [];
  let n = -1, r = 0, a = 0, s, o, i, l, c, u, d;
  const f = [];
  f[
    0
    /* Actions.APPEND */
  ] = () => {
    o === void 0 ? o = i : o += i;
  }, f[
    1
    /* Actions.PUSH */
  ] = () => {
    o !== void 0 && (t.push(o), o = void 0);
  }, f[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    f[
      0
      /* Actions.APPEND */
    ](), a++;
  }, f[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (a > 0)
      a--, r = 4, f[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (a = 0, o === void 0 || (o = RC(o), o === !1))
        return !1;
      f[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function m() {
    const p = e[n + 1];
    if (r === 5 && p === "'" || r === 6 && p === '"')
      return n++, i = "\\" + p, f[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; r !== null; )
    if (n++, s = e[n], !(s === "\\" && m())) {
      if (l = xC(s), d = vr[r], c = d[l] || d.l || 8, c === 8 || (r = c[0], c[1] !== void 0 && (u = f[c[1]], u && (i = s, u() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const xc = /* @__PURE__ */ new Map();
function FC(e, t) {
  return Ye(e) ? e[t] : null;
}
function UC(e, t) {
  if (!Ye(e))
    return null;
  let n = xc.get(t);
  if (n || (n = YC(t), n && xc.set(t, n)), !n)
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
const VC = (e) => e, WC = (e) => "", jC = "text", HC = (e) => e.length === 0 ? "" : JI(e), BC = XI;
function Rc(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function GC(e) {
  const t = ht(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (ht(e.named.count) || ht(e.named.n)) ? ht(e.named.count) ? e.named.count : ht(e.named.n) ? e.named.n : t : t;
}
function zC(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function qC(e = {}) {
  const t = e.locale, n = GC(e), r = Ye(e.pluralRules) && Q(t) && Qe(e.pluralRules[t]) ? e.pluralRules[t] : Rc, a = Ye(e.pluralRules) && Q(t) && Qe(e.pluralRules[t]) ? Rc : void 0, s = (h) => h[r(n, h.length, a)], o = e.list || [], i = (h) => o[h], l = e.named || {};
  ht(e.pluralIndex) && zC(n, l);
  const c = (h) => l[h];
  function u(h) {
    const b = Qe(e.messages) ? e.messages(h) : Ye(e.messages) ? e.messages[h] : !1;
    return b || (e.parent ? e.parent.message(h) : WC);
  }
  const d = (h) => e.modifiers ? e.modifiers[h] : VC, f = ye(e.processor) && Qe(e.processor.normalize) ? e.processor.normalize : HC, m = ye(e.processor) && Qe(e.processor.interpolate) ? e.processor.interpolate : BC, p = ye(e.processor) && Q(e.processor.type) ? e.processor.type : jC, y = {
    list: i,
    named: c,
    plural: s,
    linked: (h, ...b) => {
      const [S, w] = b;
      let C = "text", M = "";
      b.length === 1 ? Ye(S) ? (M = S.modifier || M, C = S.type || C) : Q(S) && (M = S || M) : b.length === 2 && (Q(S) && (M = S || M), Q(w) && (C = w || C));
      const x = u(h)(y), I = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        C === "vnode" && ze(x) && M ? x[0] : x
      );
      return M ? d(M)(I, C) : I;
    },
    message: u,
    type: p,
    interpolate: m,
    normalize: f,
    values: bt({}, o, l)
  };
  return y;
}
let Xa = null;
function KC(e) {
  Xa = e;
}
function ZC(e, t, n) {
  Xa && Xa.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: n
  });
}
const XC = /* @__PURE__ */ JC(
  "function:translate"
  /* IntlifyDevToolsHooks.FunctionTranslate */
);
function JC(e) {
  return (t) => Xa && Xa.emit(e, t);
}
const Mt = {
  NOT_FOUND_KEY: 1,
  FALLBACK_TO_TRANSLATE: 2,
  CANNOT_FORMAT_NUMBER: 3,
  FALLBACK_TO_NUMBER_FORMAT: 4,
  CANNOT_FORMAT_DATE: 5,
  FALLBACK_TO_DATE_FORMAT: 6,
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: 7,
  __EXTEND_POINT__: 8
}, QC = {
  [Mt.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
  [Mt.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
  [Mt.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
  [Mt.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
  [Mt.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
  [Mt.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale.",
  [Mt.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: "This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future."
};
function $r(e, ...t) {
  return Bl(QC[e], ...t);
}
function Zl(e, t) {
  return t.locale != null ? Yc(t.locale) : Yc(e.locale);
}
let Zo;
function Yc(e) {
  return Q(e) ? e : Zo != null && e.resolvedOnce ? Zo : Zo = e();
}
function eA(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...ze(t) ? t : Ye(t) ? Object.keys(t) : Q(t) ? [t] : [n]
  ])];
}
function Gh(e, t, n) {
  const r = Q(n) ? n : ca, a = e;
  a.__localeChainCache || (a.__localeChainCache = /* @__PURE__ */ new Map());
  let s = a.__localeChainCache.get(r);
  if (!s) {
    s = [];
    let o = [n];
    for (; ze(o); )
      o = Fc(s, o, t);
    const i = ze(t) || !ye(t) ? t : t.default ? t.default : null;
    o = Q(i) ? [i] : i, ze(o) && Fc(s, o, !1), a.__localeChainCache.set(r, s);
  }
  return s;
}
function Fc(e, t, n) {
  let r = !0;
  for (let a = 0; a < t.length && Se(r); a++) {
    const s = t[a];
    Q(s) && (r = tA(e, t[a], n));
  }
  return r;
}
function tA(e, t, n) {
  let r;
  const a = t.split("-");
  do {
    const s = a.join("-");
    r = nA(e, s, n), a.splice(-1, 1);
  } while (a.length && r === !0);
  return r;
}
function nA(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== "!";
    const a = t.replace(/!/g, "");
    e.push(a), (ze(n) || ye(n)) && n[a] && (r = n[a]);
  }
  return r;
}
const rA = "9.5.0", No = -1, ca = "en-US", oo = "", Uc = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function aA() {
  return {
    upper: (e, t) => t === "text" && Q(e) ? e.toUpperCase() : t === "vnode" && Ye(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && Q(e) ? e.toLowerCase() : t === "vnode" && Ye(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && Q(e) ? Uc(e) : t === "vnode" && Ye(e) && "__v_isVNode" in e ? Uc(e.children) : e
  };
}
let zh;
function Vc(e) {
  zh = e;
}
let qh;
function sA(e) {
  qh = e;
}
let Kh;
function oA(e) {
  Kh = e;
}
let Zh = null;
const Wc = (e) => {
  Zh = e;
}, iA = () => Zh;
let Xh = null;
const jc = (e) => {
  Xh = e;
}, lA = () => Xh;
let Hc = 0;
function uA(e = {}) {
  const t = Qe(e.onWarn) ? e.onWarn : gt, n = Q(e.version) ? e.version : rA, r = Q(e.locale) || Qe(e.locale) ? e.locale : ca, a = Qe(r) ? ca : r, s = ze(e.fallbackLocale) || ye(e.fallbackLocale) || Q(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : a, o = ye(e.messages) ? e.messages : { [a]: {} }, i = ye(e.datetimeFormats) ? e.datetimeFormats : { [a]: {} }, l = ye(e.numberFormats) ? e.numberFormats : { [a]: {} }, c = bt({}, e.modifiers || {}, aA()), u = e.pluralRules || {}, d = Qe(e.missing) ? e.missing : null, f = Se(e.missingWarn) || hr(e.missingWarn) ? e.missingWarn : !0, m = Se(e.fallbackWarn) || hr(e.fallbackWarn) ? e.fallbackWarn : !0, p = !!e.fallbackFormat, v = !!e.unresolving, y = Qe(e.postTranslation) ? e.postTranslation : null, h = ye(e.processor) ? e.processor : null, b = Se(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, S = !!e.escapeParameter, w = Qe(e.messageCompiler) ? e.messageCompiler : zh;
  process.env.NODE_ENV !== "production" && Qe(e.messageCompiler) && eC($r(Mt.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
  const C = Qe(e.messageResolver) ? e.messageResolver : qh || FC, M = Qe(e.localeFallbacker) ? e.localeFallbacker : Kh || eA, x = Ye(e.fallbackContext) ? e.fallbackContext : void 0, I = e, A = Ye(I.__datetimeFormatters) ? I.__datetimeFormatters : /* @__PURE__ */ new Map(), R = Ye(I.__numberFormatters) ? I.__numberFormatters : /* @__PURE__ */ new Map(), j = Ye(I.__meta) ? I.__meta : {};
  Hc++;
  const U = {
    version: n,
    cid: Hc,
    locale: r,
    fallbackLocale: s,
    messages: o,
    modifiers: c,
    pluralRules: u,
    missing: d,
    missingWarn: f,
    fallbackWarn: m,
    fallbackFormat: p,
    unresolving: v,
    postTranslation: y,
    processor: h,
    warnHtmlMessage: b,
    escapeParameter: S,
    messageCompiler: w,
    messageResolver: C,
    localeFallbacker: M,
    fallbackContext: x,
    onWarn: t,
    __meta: j
  };
  return U.datetimeFormats = i, U.numberFormats = l, U.__datetimeFormatters = A, U.__numberFormatters = R, process.env.NODE_ENV !== "production" && (U.__v_emitter = I.__v_emitter != null ? I.__v_emitter : void 0), (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && ZC(U, n, j), U;
}
function Po(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function Jh(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function Xl(e, t, n, r, a) {
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
    return Q(i) ? i : t;
  } else
    return process.env.NODE_ENV !== "production" && Jh(r, t) && o($r(Mt.NOT_FOUND_KEY, { key: t, locale: n })), t;
}
function Ia(e, t, n) {
  const r = e;
  r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function Xo(e) {
  return (n) => cA(n, e);
}
function cA(e, t) {
  const n = t.b || t.body;
  if ((n.t || n.type) === 1) {
    const r = n, a = r.c || r.cases;
    return e.plural(a.reduce((s, o) => [
      ...s,
      Bc(e, o)
    ], []));
  } else
    return Bc(e, n);
}
function Bc(e, t) {
  const n = t.s || t.static;
  if (n)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const r = (t.i || t.items).reduce((a, s) => [...a, Oi(e, s)], []);
    return e.normalize(r);
  }
}
function Oi(e, t) {
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
      return e.linked(Oi(e, i.k || i.key), l ? Oi(e, l) : void 0, e.type);
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
const Qh = ve.__EXTEND_POINT__, ws = zl(Qh), zt = {
  INVALID_ARGUMENT: Qh,
  INVALID_DATE_ARGUMENT: ws(),
  INVALID_ISO_DATE_ARGUMENT: ws(),
  NOT_SUPPORT_NON_STRING_MESSAGE: ws(),
  __EXTEND_POINT__: ws()
  // 22
};
function Or(e) {
  return Da(e, null, process.env.NODE_ENV !== "production" ? { messages: dA } : void 0);
}
const dA = {
  [zt.INVALID_ARGUMENT]: "Invalid arguments",
  [zt.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [zt.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
  [zt.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message"
}, fA = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function em(e, t) {
  t && lC(e) && gt(Bl(fA, { source: e }));
}
const tm = (e) => e;
let Zr = /* @__PURE__ */ Object.create(null);
const Nr = (e) => Ye(e) && (e.t === 0 || e.type === 0) && ("b" in e || "body" in e);
function nm(e, t = {}) {
  let n = !1;
  const r = t.onError || oC;
  return t.onError = (a) => {
    n = !0, r(a);
  }, { ...PC(e, t), detectError: n };
}
const hA = (e, t) => {
  if (!Q(e))
    throw Or(zt.NOT_SUPPORT_NON_STRING_MESSAGE);
  {
    const n = Se(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && em(e, n);
    const a = (t.onCacheKey || tm)(e), s = Zr[a];
    if (s)
      return s;
    const { code: o, detectError: i } = nm(e, t), l = new Function(`return ${o}`)();
    return i ? l : Zr[a] = l;
  }
};
function mA(e, t) {
  if (__INTLIFY_JIT_COMPILATION__ && !__INTLIFY_DROP_MESSAGE_COMPILER__ && Q(e)) {
    const n = Se(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && em(e, n);
    const a = (t.onCacheKey || tm)(e), s = Zr[a];
    if (s)
      return s;
    const { ast: o, detectError: i } = nm(e, {
      ...t,
      location: process.env.NODE_ENV !== "production",
      jit: !0
    }), l = Xo(o);
    return i ? l : Zr[a] = l;
  } else {
    if (process.env.NODE_ENV !== "production" && !Nr(e))
      return gt(`the message that is resolve with key '${t.key}' is not supported for jit compilation`), () => e;
    const n = e.cacheKey;
    if (n) {
      const r = Zr[n];
      return r || (Zr[n] = Xo(e));
    } else
      return Xo(e);
  }
}
const Gc = () => "", sn = (e) => Qe(e);
function zc(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: a, messageCompiler: s, fallbackLocale: o, messages: i } = e, [l, c] = Ei(...t), u = Se(c.missingWarn) ? c.missingWarn : e.missingWarn, d = Se(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn, f = Se(c.escapeParameter) ? c.escapeParameter : e.escapeParameter, m = !!c.resolvedMessage, p = Q(c.default) || Se(c.default) ? Se(c.default) ? s ? l : () => l : c.default : n ? s ? l : () => l : "", v = n || p !== "", y = Zl(e, c);
  f && vA(c);
  let [h, b, S] = m ? [
    l,
    y,
    i[y] || {}
  ] : rm(e, l, y, o, d, u), w = h, C = l;
  if (!m && !(Q(w) || Nr(w) || sn(w)) && v && (w = p, C = w), !m && (!(Q(w) || Nr(w) || sn(w)) || !Q(b)))
    return a ? No : l;
  if (process.env.NODE_ENV !== "production" && Q(w) && e.messageCompiler == null)
    return gt(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${l}'.`), l;
  let M = !1;
  const x = () => {
    M = !0;
  }, I = sn(w) ? w : am(e, l, b, w, C, x);
  if (M)
    return w;
  const A = yA(e, b, S, c), R = qC(A), j = pA(e, I, R), U = r ? r(j, l) : j;
  if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    const Z = {
      timestamp: Date.now(),
      key: Q(l) ? l : sn(w) ? w.key : "",
      locale: b || (sn(w) ? w.locale : ""),
      format: Q(w) ? w : sn(w) ? w.source : "",
      message: U
    };
    Z.meta = bt({}, e.__meta, iA() || {}), XC(Z);
  }
  return U;
}
function vA(e) {
  ze(e.list) ? e.list = e.list.map((t) => Q(t) ? $c(t) : t) : Ye(e.named) && Object.keys(e.named).forEach((t) => {
    Q(e.named[t]) && (e.named[t] = $c(e.named[t]));
  });
}
function rm(e, t, n, r, a, s) {
  const { messages: o, onWarn: i, messageResolver: l, localeFallbacker: c } = e, u = c(e, r, n);
  let d = {}, f, m = null, p = n, v = null;
  const y = "translate";
  for (let h = 0; h < u.length; h++) {
    if (f = v = u[h], process.env.NODE_ENV !== "production" && n !== f && Po(a, t) && i($r(Mt.FALLBACK_TO_TRANSLATE, {
      key: t,
      target: f
    })), process.env.NODE_ENV !== "production" && n !== f) {
      const M = e.__v_emitter;
      M && M.emit("fallback", {
        type: y,
        key: t,
        from: p,
        to: v,
        groupId: `${y}:${t}`
      });
    }
    d = o[f] || {};
    let b = null, S, w;
    if (process.env.NODE_ENV !== "production" && kn && (b = window.performance.now(), S = "intlify-message-resolve-start", w = "intlify-message-resolve-end", Ft && Ft(S)), (m = l(d, t)) === null && (m = d[t]), process.env.NODE_ENV !== "production" && kn) {
      const M = window.performance.now(), x = e.__v_emitter;
      x && b && m && x.emit("message-resolve", {
        type: "message-resolve",
        key: t,
        message: m,
        time: M - b,
        groupId: `${y}:${t}`
      }), S && w && Ft && Mr && (Ft(w), Mr("intlify message resolve", S, w));
    }
    if (Q(m) || Nr(m) || sn(m))
      break;
    const C = Xl(
      e,
      // eslint-disable-line @typescript-eslint/no-explicit-any
      t,
      f,
      s,
      y
    );
    C !== t && (m = C), p = v;
  }
  return [m, f, d];
}
function am(e, t, n, r, a, s) {
  const { messageCompiler: o, warnHtmlMessage: i } = e;
  if (sn(r)) {
    const f = r;
    return f.locale = f.locale || n, f.key = f.key || t, f;
  }
  if (o == null) {
    const f = () => r;
    return f.locale = n, f.key = t, f;
  }
  let l = null, c, u;
  process.env.NODE_ENV !== "production" && kn && (l = window.performance.now(), c = "intlify-message-compilation-start", u = "intlify-message-compilation-end", Ft && Ft(c));
  const d = o(r, _A(e, n, a, r, i, s));
  if (process.env.NODE_ENV !== "production" && kn) {
    const f = window.performance.now(), m = e.__v_emitter;
    m && l && m.emit("message-compilation", {
      type: "message-compilation",
      message: r,
      time: f - l,
      groupId: `translate:${t}`
    }), c && u && Ft && Mr && (Ft(u), Mr("intlify message compilation", c, u));
  }
  return d.locale = n, d.key = t, d.source = r, d;
}
function pA(e, t, n) {
  let r = null, a, s;
  process.env.NODE_ENV !== "production" && kn && (r = window.performance.now(), a = "intlify-message-evaluation-start", s = "intlify-message-evaluation-end", Ft && Ft(a));
  const o = t(n);
  if (process.env.NODE_ENV !== "production" && kn) {
    const i = window.performance.now(), l = e.__v_emitter;
    l && r && l.emit("message-evaluation", {
      type: "message-evaluation",
      value: o,
      time: i - r,
      groupId: `translate:${t.key}`
    }), a && s && Ft && Mr && (Ft(s), Mr("intlify message evaluation", a, s));
  }
  return o;
}
function Ei(...e) {
  const [t, n, r] = e, a = {};
  if (!Q(t) && !ht(t) && !sn(t) && !Nr(t))
    throw Or(zt.INVALID_ARGUMENT);
  const s = ht(t) ? String(t) : (sn(t), t);
  return ht(n) ? a.plural = n : Q(n) ? a.default = n : ye(n) && !$o(n) ? a.named = n : ze(n) && (a.list = n), ht(r) ? a.plural = r : Q(r) ? a.default = r : ye(r) && bt(a, r), [s, a];
}
function _A(e, t, n, r, a, s) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: a,
    onError: (o) => {
      if (s && s(o), process.env.NODE_ENV !== "production") {
        const i = gA(r), l = `Message compilation error: ${o.message}`, c = o.location && i && QI(i, o.location.start.offset, o.location.end.offset), u = e.__v_emitter;
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
    onCacheKey: (o) => zI(t, n, o)
  };
}
function gA(e) {
  var t;
  if (!Q(e)) {
    if ((t = e.loc) != null && t.source)
      return e.loc.source;
  }
}
function yA(e, t, n, r) {
  const { modifiers: a, pluralRules: s, messageResolver: o, fallbackLocale: i, fallbackWarn: l, missingWarn: c, fallbackContext: u } = e, f = {
    locale: t,
    modifiers: a,
    pluralRules: s,
    messages: (m) => {
      let p = o(n, m);
      if (p == null && u) {
        const [, , v] = rm(u, m, t, i, l, c);
        p = o(v, m);
      }
      if (Q(p) || Nr(p)) {
        let v = !1;
        const h = am(e, m, t, p, m, () => {
          v = !0;
        });
        return v ? Gc : h;
      } else
        return sn(p) ? p : Gc;
    }
  };
  return e.processor && (f.processor = e.processor), r.list && (f.list = r.list), r.named && (f.named = r.named), ht(r.plural) && (f.pluralIndex = r.plural), f;
}
const qc = typeof Intl < "u", sm = {
  dateTimeFormat: qc && typeof Intl.DateTimeFormat < "u",
  numberFormat: qc && typeof Intl.NumberFormat < "u"
};
function Kc(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: a, onWarn: s, localeFallbacker: o } = e, { __datetimeFormatters: i } = e;
  if (process.env.NODE_ENV !== "production" && !sm.dateTimeFormat)
    return s($r(Mt.CANNOT_FORMAT_DATE)), oo;
  const [l, c, u, d] = ki(...t), f = Se(u.missingWarn) ? u.missingWarn : e.missingWarn, m = Se(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, p = !!u.part, v = Zl(e, u), y = o(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    a,
    v
  );
  if (!Q(l) || l === "")
    return new Intl.DateTimeFormat(v, d).format(c);
  let h = {}, b, S = null, w = v, C = null;
  const M = "datetime format";
  for (let A = 0; A < y.length; A++) {
    if (b = C = y[A], process.env.NODE_ENV !== "production" && v !== b && Po(m, l) && s($r(Mt.FALLBACK_TO_DATE_FORMAT, {
      key: l,
      target: b
    })), process.env.NODE_ENV !== "production" && v !== b) {
      const R = e.__v_emitter;
      R && R.emit("fallback", {
        type: M,
        key: l,
        from: w,
        to: C,
        groupId: `${M}:${l}`
      });
    }
    if (h = n[b] || {}, S = h[l], ye(S))
      break;
    Xl(e, l, b, f, M), w = C;
  }
  if (!ye(S) || !Q(b))
    return r ? No : l;
  let x = `${b}__${l}`;
  $o(d) || (x = `${x}__${JSON.stringify(d)}`);
  let I = i.get(x);
  return I || (I = new Intl.DateTimeFormat(b, bt({}, S, d)), i.set(x, I)), p ? I.formatToParts(c) : I.format(c);
}
const om = [
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
function ki(...e) {
  const [t, n, r, a] = e, s = {};
  let o = {}, i;
  if (Q(t)) {
    const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l)
      throw Or(zt.INVALID_ISO_DATE_ARGUMENT);
    const c = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
    i = new Date(c);
    try {
      i.toISOString();
    } catch {
      throw Or(zt.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (KI(t)) {
    if (isNaN(t.getTime()))
      throw Or(zt.INVALID_DATE_ARGUMENT);
    i = t;
  } else if (ht(t))
    i = t;
  else
    throw Or(zt.INVALID_ARGUMENT);
  return Q(n) ? s.key = n : ye(n) && Object.keys(n).forEach((l) => {
    om.includes(l) ? o[l] = n[l] : s[l] = n[l];
  }), Q(r) ? s.locale = r : ye(r) && (o = r), ye(a) && (o = a), [s.key || "", i, s, o];
}
function Zc(e, t, n) {
  const r = e;
  for (const a in n) {
    const s = `${t}__${a}`;
    r.__datetimeFormatters.has(s) && r.__datetimeFormatters.delete(s);
  }
}
function Xc(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: a, onWarn: s, localeFallbacker: o } = e, { __numberFormatters: i } = e;
  if (process.env.NODE_ENV !== "production" && !sm.numberFormat)
    return s($r(Mt.CANNOT_FORMAT_NUMBER)), oo;
  const [l, c, u, d] = Si(...t), f = Se(u.missingWarn) ? u.missingWarn : e.missingWarn, m = Se(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, p = !!u.part, v = Zl(e, u), y = o(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    a,
    v
  );
  if (!Q(l) || l === "")
    return new Intl.NumberFormat(v, d).format(c);
  let h = {}, b, S = null, w = v, C = null;
  const M = "number format";
  for (let A = 0; A < y.length; A++) {
    if (b = C = y[A], process.env.NODE_ENV !== "production" && v !== b && Po(m, l) && s($r(Mt.FALLBACK_TO_NUMBER_FORMAT, {
      key: l,
      target: b
    })), process.env.NODE_ENV !== "production" && v !== b) {
      const R = e.__v_emitter;
      R && R.emit("fallback", {
        type: M,
        key: l,
        from: w,
        to: C,
        groupId: `${M}:${l}`
      });
    }
    if (h = n[b] || {}, S = h[l], ye(S))
      break;
    Xl(e, l, b, f, M), w = C;
  }
  if (!ye(S) || !Q(b))
    return r ? No : l;
  let x = `${b}__${l}`;
  $o(d) || (x = `${x}__${JSON.stringify(d)}`);
  let I = i.get(x);
  return I || (I = new Intl.NumberFormat(b, bt({}, S, d)), i.set(x, I)), p ? I.formatToParts(c) : I.format(c);
}
const im = [
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
function Si(...e) {
  const [t, n, r, a] = e, s = {};
  let o = {};
  if (!ht(t))
    throw Or(zt.INVALID_ARGUMENT);
  const i = t;
  return Q(n) ? s.key = n : ye(n) && Object.keys(n).forEach((l) => {
    im.includes(l) ? o[l] = n[l] : s[l] = n[l];
  }), Q(r) ? s.locale = r : ye(r) && (o = r), ye(a) && (o = a), [s.key || "", i, s, o];
}
function Jc(e, t, n) {
  const r = e;
  for (const a in n) {
    const s = `${t}__${a}`;
    r.__numberFormatters.has(s) && r.__numberFormatters.delete(s);
  }
}
IC();
function bA() {
  return lm().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function lm() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const wA = typeof Proxy == "function", DA = "devtools-plugin:setup", OA = "plugin:settings:set";
let Ur, Ti;
function EA() {
  var e;
  return Ur !== void 0 || (typeof window < "u" && window.performance ? (Ur = !0, Ti = window.performance) : typeof global < "u" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (Ur = !0, Ti = global.perf_hooks.performance) : Ur = !1), Ur;
}
function kA() {
  return EA() ? Ti.now() : Date.now();
}
class SA {
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
        return kA();
      }
    }, n && n.on(OA, (o, i) => {
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
function TA(e, t) {
  const n = e, r = lm(), a = bA(), s = wA && n.enableEarlyProxy;
  if (a && (r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !s))
    a.emit(DA, e, t);
  else {
    const o = s ? new SA(n, a) : null;
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
const MA = "9.5.0";
function $A() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (xn().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (xn().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (xn().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (xn().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (xn().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const um = Mt.__EXTEND_POINT__, nr = zl(um), st = {
  FALLBACK_TO_ROOT: um,
  NOT_SUPPORTED_PRESERVE: nr(),
  NOT_SUPPORTED_FORMATTER: nr(),
  NOT_SUPPORTED_PRESERVE_DIRECTIVE: nr(),
  NOT_SUPPORTED_GET_CHOICE_INDEX: nr(),
  COMPONENT_NAME_LEGACY_COMPATIBLE: nr(),
  NOT_FOUND_PARENT_SCOPE: nr(),
  IGNORE_OBJ_FLATTEN: nr(),
  NOTICE_DROP_ALLOW_COMPOSITION: nr()
  // 17
}, NA = {
  [st.FALLBACK_TO_ROOT]: "Fall back to {type} '{key}' with root locale.",
  [st.NOT_SUPPORTED_PRESERVE]: "Not supported 'preserve'.",
  [st.NOT_SUPPORTED_FORMATTER]: "Not supported 'formatter'.",
  [st.NOT_SUPPORTED_PRESERVE_DIRECTIVE]: "Not supported 'preserveDirectiveContent'.",
  [st.NOT_SUPPORTED_GET_CHOICE_INDEX]: "Not supported 'getChoiceIndex'.",
  [st.COMPONENT_NAME_LEGACY_COMPATIBLE]: "Component name legacy compatible: '{name}' -> 'i18n'",
  [st.NOT_FOUND_PARENT_SCOPE]: "Not found parent scope. use the global scope.",
  [st.IGNORE_OBJ_FLATTEN]: "Ignore object flatten: '{key}' key has an string value",
  [st.NOTICE_DROP_ALLOW_COMPOSITION]: "'allowComposition' option will be dropped in the next major version. For more information, please see 👉 https://tinyurl.com/2p97mcze"
};
function Yt(e, ...t) {
  return Bl(NA[e], ...t);
}
const cm = zt.__EXTEND_POINT__, Pt = zl(cm), Ie = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: cm,
  // legacy module errors
  INVALID_ARGUMENT: Pt(),
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: Pt(),
  NOT_INSTALLED: Pt(),
  NOT_AVAILABLE_IN_LEGACY_MODE: Pt(),
  // directive module errors
  REQUIRED_VALUE: Pt(),
  INVALID_VALUE: Pt(),
  // vue-devtools errors
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: Pt(),
  NOT_INSTALLED_WITH_PROVIDE: Pt(),
  // unexpected error
  UNEXPECTED_ERROR: Pt(),
  // not compatible legacy vue-i18n constructor
  NOT_COMPATIBLE_LEGACY_VUE_I18N: Pt(),
  // bridge support vue 2.x only
  BRIDGE_SUPPORT_VUE_2_ONLY: Pt(),
  // need to define `i18n` option in `allowComposition: true` and `useScope: 'local' at `useI18n``
  MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: Pt(),
  // Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: Pt(),
  // for enhancement
  __EXTEND_POINT__: Pt()
  // 37
};
function dt(e, ...t) {
  return Da(e, null, process.env.NODE_ENV !== "production" ? { messages: PA, args: t } : void 0);
}
const PA = {
  [Ie.UNEXPECTED_RETURN_TYPE]: "Unexpected return type in composer",
  [Ie.INVALID_ARGUMENT]: "Invalid argument",
  [Ie.MUST_BE_CALL_SETUP_TOP]: "Must be called at the top of a `setup` function",
  [Ie.NOT_INSTALLED]: "Need to install with `app.use` function",
  [Ie.UNEXPECTED_ERROR]: "Unexpected error",
  [Ie.NOT_AVAILABLE_IN_LEGACY_MODE]: "Not available in legacy mode",
  [Ie.REQUIRED_VALUE]: "Required in value: {0}",
  [Ie.INVALID_VALUE]: "Invalid value",
  [Ie.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: "Cannot setup vue-devtools plugin",
  [Ie.NOT_INSTALLED_WITH_PROVIDE]: "Need to install with `provide` function",
  [Ie.NOT_COMPATIBLE_LEGACY_VUE_I18N]: "Not compatible legacy VueI18n.",
  [Ie.BRIDGE_SUPPORT_VUE_2_ONLY]: "vue-i18n-bridge support Vue 2.x only",
  [Ie.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION]: "Must define ‘i18n’ option or custom block in Composition API with using local scope in Legacy API mode",
  [Ie.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]: "Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"
}, Mi = /* @__PURE__ */ Nn("__translateVNode"), $i = /* @__PURE__ */ Nn("__datetimeParts"), Ni = /* @__PURE__ */ Nn("__numberParts"), Pr = /* @__PURE__ */ Nn("__enableEmitter"), Ja = /* @__PURE__ */ Nn("__disableEmitter"), dm = Nn("__setPluralRules"), fm = /* @__PURE__ */ Nn("__injectWithOption"), Pi = /* @__PURE__ */ Nn("__dispose");
function Ii(e) {
  if (!Ye(e))
    return e;
  for (const t in e)
    if (Gl(e, t))
      if (!t.includes("."))
        Ye(e[t]) && Ii(e[t]);
      else {
        const n = t.split("."), r = n.length - 1;
        let a = e, s = !1;
        for (let o = 0; o < r; o++) {
          if (n[o] in a || (a[n[o]] = {}), !Ye(a[n[o]])) {
            process.env.NODE_ENV !== "production" && gt(Yt(st.IGNORE_OBJ_FLATTEN, {
              key: n[o]
            })), s = !0;
            break;
          }
          a = a[n[o]];
        }
        s || (a[n[r]] = e[t], delete e[t]), Ye(a[n[r]]) && Ii(a[n[r]]);
      }
  return e;
}
function Io(e, t) {
  const { messages: n, __i18n: r, messageResolver: a, flatJson: s } = t, o = ye(n) ? n : ze(r) ? {} : { [e]: {} };
  if (ze(r) && r.forEach((i) => {
    if ("locale" in i && "resource" in i) {
      const { locale: l, resource: c } = i;
      l ? (o[l] = o[l] || {}, Va(c, o[l])) : Va(c, o);
    } else
      Q(i) && Va(JSON.parse(i), o);
  }), a == null && s)
    for (const i in o)
      Gl(o, i) && Ii(o[i]);
  return o;
}
const Ds = (e) => !Ye(e) || ze(e);
function Va(e, t) {
  if (Ds(e) || Ds(t))
    throw dt(Ie.INVALID_VALUE);
  for (const n in e)
    Gl(e, n) && (Ds(e[n]) || Ds(t[n]) ? t[n] = e[n] : Va(e[n], t[n]));
}
function hm(e) {
  return e.type;
}
function mm(e, t, n) {
  let r = Ye(t.messages) ? t.messages : {};
  "__i18nGlobal" in n && (r = Io(e.locale.value, {
    messages: r,
    __i18n: n.__i18nGlobal
  }));
  const a = Object.keys(r);
  a.length && a.forEach((s) => {
    e.mergeLocaleMessage(s, r[s]);
  });
  {
    if (Ye(t.datetimeFormats)) {
      const s = Object.keys(t.datetimeFormats);
      s.length && s.forEach((o) => {
        e.mergeDateTimeFormat(o, t.datetimeFormats[o]);
      });
    }
    if (Ye(t.numberFormats)) {
      const s = Object.keys(t.numberFormats);
      s.length && s.forEach((o) => {
        e.mergeNumberFormat(o, t.numberFormats[o]);
      });
    }
  }
}
function Qc(e) {
  return De(Km, null, e, 0);
}
const ed = "__INTLIFY_META__";
let td = 0;
function nd(e) {
  return (t, n, r, a) => e(n, r, ja() || void 0, a);
}
const IA = () => {
  const e = ja();
  let t = null;
  return e && (t = hm(e)[ed]) ? { [ed]: t } : null;
};
function Jl(e = {}, t) {
  const { __root: n, __injectWithOption: r } = e, a = n === void 0;
  let s = Se(e.inheritLocale) ? e.inheritLocale : !0;
  const o = ae(
    // prettier-ignore
    n && s ? n.locale.value : Q(e.locale) ? e.locale : ca
  ), i = ae(
    // prettier-ignore
    n && s ? n.fallbackLocale.value : Q(e.fallbackLocale) || ze(e.fallbackLocale) || ye(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o.value
  ), l = ae(Io(o.value, e)), c = ae(ye(e.datetimeFormats) ? e.datetimeFormats : { [o.value]: {} }), u = ae(ye(e.numberFormats) ? e.numberFormats : { [o.value]: {} });
  let d = n ? n.missingWarn : Se(e.missingWarn) || hr(e.missingWarn) ? e.missingWarn : !0, f = n ? n.fallbackWarn : Se(e.fallbackWarn) || hr(e.fallbackWarn) ? e.fallbackWarn : !0, m = n ? n.fallbackRoot : Se(e.fallbackRoot) ? e.fallbackRoot : !0, p = !!e.fallbackFormat, v = Qe(e.missing) ? e.missing : null, y = Qe(e.missing) ? nd(e.missing) : null, h = Qe(e.postTranslation) ? e.postTranslation : null, b = n ? n.warnHtmlMessage : Se(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, S = !!e.escapeParameter;
  const w = n ? n.modifiers : ye(e.modifiers) ? e.modifiers : {};
  let C = e.pluralRules || n && n.pluralRules, M;
  M = (() => {
    a && jc(null);
    const Y = {
      version: MA,
      locale: o.value,
      fallbackLocale: i.value,
      messages: l.value,
      modifiers: w,
      pluralRules: C,
      missing: y === null ? void 0 : y,
      missingWarn: d,
      fallbackWarn: f,
      fallbackFormat: p,
      unresolving: !0,
      postTranslation: h === null ? void 0 : h,
      warnHtmlMessage: b,
      escapeParameter: S,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    Y.datetimeFormats = c.value, Y.numberFormats = u.value, Y.__datetimeFormatters = ye(M) ? M.__datetimeFormatters : void 0, Y.__numberFormatters = ye(M) ? M.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (Y.__v_emitter = ye(M) ? M.__v_emitter : void 0);
    const B = uA(Y);
    return a && jc(B), B;
  })(), Ia(M, o.value, i.value);
  function I() {
    return [
      o.value,
      i.value,
      l.value,
      c.value,
      u.value
    ];
  }
  const A = P({
    get: () => o.value,
    set: (Y) => {
      o.value = Y, M.locale = o.value;
    }
  }), R = P({
    get: () => i.value,
    set: (Y) => {
      i.value = Y, M.fallbackLocale = i.value, Ia(M, o.value, Y);
    }
  }), j = P(() => l.value), U = /* @__PURE__ */ P(() => c.value), Z = /* @__PURE__ */ P(() => u.value);
  function me() {
    return Qe(h) ? h : null;
  }
  function te(Y) {
    h = Y, M.postTranslation = Y;
  }
  function fe() {
    return v;
  }
  function we(Y) {
    Y !== null && (y = nd(Y)), v = Y, M.missing = y;
  }
  function Me(Y, B) {
    return Y !== "translate" || !B.resolvedMessage;
  }
  const z = (Y, B, rt, at, vn, Qn) => {
    I();
    let nn;
    try {
      (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && Wc(IA()), a || (M.fallbackContext = n ? lA() : void 0), nn = Y(M);
    } finally {
      (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && Wc(null), a || (M.fallbackContext = void 0);
    }
    if (ht(nn) && nn === No) {
      const [rn, pr] = B();
      if (process.env.NODE_ENV !== "production" && n && Q(rn) && Me(rt, pr) && (m && (Po(f, rn) || Jh(d, rn)) && gt(Yt(st.FALLBACK_TO_ROOT, {
        key: rn,
        type: rt
      })), process.env.NODE_ENV !== "production")) {
        const { __v_emitter: Rr } = M;
        Rr && m && Rr.emit("fallback", {
          type: rt,
          key: rn,
          to: "global",
          groupId: `${rt}:${rn}`
        });
      }
      return n && m ? at(n) : vn(rn);
    } else {
      if (Qn(nn))
        return nn;
      throw dt(Ie.UNEXPECTED_RETURN_TYPE);
    }
  };
  function k(...Y) {
    return z((B) => Reflect.apply(zc, null, [B, ...Y]), () => Ei(...Y), "translate", (B) => Reflect.apply(B.t, B, [...Y]), (B) => B, (B) => Q(B));
  }
  function W(...Y) {
    const [B, rt, at] = Y;
    if (at && !Ye(at))
      throw dt(Ie.INVALID_ARGUMENT);
    return k(B, rt, bt({ resolvedMessage: !0 }, at || {}));
  }
  function re(...Y) {
    return z((B) => Reflect.apply(Kc, null, [B, ...Y]), () => ki(...Y), "datetime format", (B) => Reflect.apply(B.d, B, [...Y]), () => oo, (B) => Q(B));
  }
  function F(...Y) {
    return z((B) => Reflect.apply(Xc, null, [B, ...Y]), () => Si(...Y), "number format", (B) => Reflect.apply(B.n, B, [...Y]), () => oo, (B) => Q(B));
  }
  function N(Y) {
    return Y.map((B) => Q(B) || ht(B) || Se(B) ? Qc(String(B)) : B);
  }
  const le = {
    normalize: N,
    interpolate: (Y) => Y,
    type: "vnode"
  };
  function Ce(...Y) {
    return z(
      (B) => {
        let rt;
        const at = B;
        try {
          at.processor = le, rt = Reflect.apply(zc, null, [at, ...Y]);
        } finally {
          at.processor = null;
        }
        return rt;
      },
      () => Ei(...Y),
      "translate",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (B) => B[Mi](...Y),
      (B) => [Qc(B)],
      (B) => ze(B)
    );
  }
  function $e(...Y) {
    return z(
      (B) => Reflect.apply(Xc, null, [B, ...Y]),
      () => Si(...Y),
      "number format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (B) => B[Ni](...Y),
      () => [],
      (B) => Q(B) || ze(B)
    );
  }
  function ke(...Y) {
    return z(
      (B) => Reflect.apply(Kc, null, [B, ...Y]),
      () => ki(...Y),
      "datetime format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (B) => B[$i](...Y),
      () => [],
      (B) => Q(B) || ze(B)
    );
  }
  function nt(Y) {
    C = Y, M.pluralRules = C;
  }
  function tt(Y, B) {
    if (!Y)
      return !1;
    const rt = Q(B) ? B : o.value, at = g(rt);
    return M.messageResolver(at, Y) !== null;
  }
  function pt(Y) {
    let B = null;
    const rt = Gh(M, i.value, o.value);
    for (let at = 0; at < rt.length; at++) {
      const vn = l.value[rt[at]] || {}, Qn = M.messageResolver(vn, Y);
      if (Qn != null) {
        B = Qn;
        break;
      }
    }
    return B;
  }
  function D(Y) {
    const B = pt(Y);
    return B ?? (n ? n.tm(Y) || {} : {});
  }
  function g(Y) {
    return l.value[Y] || {};
  }
  function L(Y, B) {
    l.value[Y] = B, M.messages = l.value;
  }
  function ee(Y, B) {
    l.value[Y] = l.value[Y] || {}, Va(B, l.value[Y]), M.messages = l.value;
  }
  function ue(Y) {
    return c.value[Y] || {};
  }
  function Ee(Y, B) {
    c.value[Y] = B, M.datetimeFormats = c.value, Zc(M, Y, B);
  }
  function wt(Y, B) {
    c.value[Y] = bt(c.value[Y] || {}, B), M.datetimeFormats = c.value, Zc(M, Y, B);
  }
  function it(Y) {
    return u.value[Y] || {};
  }
  function Wt(Y, B) {
    u.value[Y] = B, M.numberFormats = u.value, Jc(M, Y, B);
  }
  function mn(Y, B) {
    u.value[Y] = bt(u.value[Y] || {}, B), M.numberFormats = u.value, Jc(M, Y, B);
  }
  td++, n && kn && (Re(n.locale, (Y) => {
    s && (o.value = Y, M.locale = Y, Ia(M, o.value, i.value));
  }), Re(n.fallbackLocale, (Y) => {
    s && (i.value = Y, M.fallbackLocale = Y, Ia(M, o.value, i.value));
  }));
  const We = {
    id: td,
    locale: A,
    fallbackLocale: R,
    get inheritLocale() {
      return s;
    },
    set inheritLocale(Y) {
      s = Y, Y && n && (o.value = n.locale.value, i.value = n.fallbackLocale.value, Ia(M, o.value, i.value));
    },
    get availableLocales() {
      return Object.keys(l.value).sort();
    },
    messages: j,
    get modifiers() {
      return w;
    },
    get pluralRules() {
      return C || {};
    },
    get isGlobal() {
      return a;
    },
    get missingWarn() {
      return d;
    },
    set missingWarn(Y) {
      d = Y, M.missingWarn = d;
    },
    get fallbackWarn() {
      return f;
    },
    set fallbackWarn(Y) {
      f = Y, M.fallbackWarn = f;
    },
    get fallbackRoot() {
      return m;
    },
    set fallbackRoot(Y) {
      m = Y;
    },
    get fallbackFormat() {
      return p;
    },
    set fallbackFormat(Y) {
      p = Y, M.fallbackFormat = p;
    },
    get warnHtmlMessage() {
      return b;
    },
    set warnHtmlMessage(Y) {
      b = Y, M.warnHtmlMessage = Y;
    },
    get escapeParameter() {
      return S;
    },
    set escapeParameter(Y) {
      S = Y, M.escapeParameter = Y;
    },
    t: k,
    getLocaleMessage: g,
    setLocaleMessage: L,
    mergeLocaleMessage: ee,
    getPostTranslationHandler: me,
    setPostTranslationHandler: te,
    getMissingHandler: fe,
    setMissingHandler: we,
    [dm]: nt
  };
  return We.datetimeFormats = U, We.numberFormats = Z, We.rt = W, We.te = tt, We.tm = D, We.d = re, We.n = F, We.getDateTimeFormat = ue, We.setDateTimeFormat = Ee, We.mergeDateTimeFormat = wt, We.getNumberFormat = it, We.setNumberFormat = Wt, We.mergeNumberFormat = mn, We[fm] = r, We[Mi] = Ce, We[$i] = ke, We[Ni] = $e, process.env.NODE_ENV !== "production" && (We[Pr] = (Y) => {
    M.__v_emitter = Y;
  }, We[Ja] = () => {
    M.__v_emitter = void 0;
  }), We;
}
function CA(e) {
  const t = Q(e.locale) ? e.locale : ca, n = Q(e.fallbackLocale) || ze(e.fallbackLocale) || ye(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t, r = Qe(e.missing) ? e.missing : void 0, a = Se(e.silentTranslationWarn) || hr(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0, s = Se(e.silentFallbackWarn) || hr(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0, o = Se(e.fallbackRoot) ? e.fallbackRoot : !0, i = !!e.formatFallbackMessages, l = ye(e.modifiers) ? e.modifiers : {}, c = e.pluralizationRules, u = Qe(e.postTranslation) ? e.postTranslation : void 0, d = Q(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0, f = !!e.escapeParameterHtml, m = Se(e.sync) ? e.sync : !0;
  process.env.NODE_ENV !== "production" && e.formatter && gt(Yt(st.NOT_SUPPORTED_FORMATTER)), process.env.NODE_ENV !== "production" && e.preserveDirectiveContent && gt(Yt(st.NOT_SUPPORTED_PRESERVE_DIRECTIVE));
  let p = e.messages;
  if (ye(e.sharedMessages)) {
    const C = e.sharedMessages;
    p = Object.keys(C).reduce((x, I) => {
      const A = x[I] || (x[I] = {});
      return bt(A, C[I]), x;
    }, p || {});
  }
  const { __i18n: v, __root: y, __injectWithOption: h } = e, b = e.datetimeFormats, S = e.numberFormats, w = e.flatJson;
  return {
    locale: t,
    fallbackLocale: n,
    messages: p,
    flatJson: w,
    datetimeFormats: b,
    numberFormats: S,
    missing: r,
    missingWarn: a,
    fallbackWarn: s,
    fallbackRoot: o,
    fallbackFormat: i,
    modifiers: l,
    pluralRules: c,
    postTranslation: u,
    warnHtmlMessage: d,
    escapeParameter: f,
    messageResolver: e.messageResolver,
    inheritLocale: m,
    __i18n: v,
    __root: y,
    __injectWithOption: h
  };
}
function Ci(e = {}, t) {
  {
    const n = Jl(CA(e)), { __extender: r } = e, a = {
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
        return process.env.NODE_ENV !== "production" && gt(Yt(st.NOT_SUPPORTED_FORMATTER)), {
          interpolate() {
            return [];
          }
        };
      },
      set formatter(s) {
        process.env.NODE_ENV !== "production" && gt(Yt(st.NOT_SUPPORTED_FORMATTER));
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
        return Se(n.missingWarn) ? !n.missingWarn : n.missingWarn;
      },
      set silentTranslationWarn(s) {
        n.missingWarn = Se(s) ? !s : s;
      },
      // silentFallbackWarn
      get silentFallbackWarn() {
        return Se(n.fallbackWarn) ? !n.fallbackWarn : n.fallbackWarn;
      },
      set silentFallbackWarn(s) {
        n.fallbackWarn = Se(s) ? !s : s;
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
        return process.env.NODE_ENV !== "production" && gt(Yt(st.NOT_SUPPORTED_PRESERVE_DIRECTIVE)), !0;
      },
      set preserveDirectiveContent(s) {
        process.env.NODE_ENV !== "production" && gt(Yt(st.NOT_SUPPORTED_PRESERVE_DIRECTIVE));
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
        if (!Q(o))
          throw dt(Ie.INVALID_ARGUMENT);
        const f = o;
        return Q(i) ? c.locale = i : ze(i) ? u = i : ye(i) && (d = i), ze(l) ? u = l : ye(l) && (d = l), Reflect.apply(n.t, n, [
          f,
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
        if (!Q(o))
          throw dt(Ie.INVALID_ARGUMENT);
        const f = o;
        return Q(i) ? c.locale = i : ht(i) ? c.plural = i : ze(i) ? u = i : ye(i) && (d = i), Q(l) ? c.locale = l : ze(l) ? u = l : ye(l) && (d = l), Reflect.apply(n.t, n, [
          f,
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
        return process.env.NODE_ENV !== "production" && gt(Yt(st.NOT_SUPPORTED_GET_CHOICE_INDEX)), -1;
      }
    };
    return a.__extender = r, process.env.NODE_ENV !== "production" && (a.__enableEmitter = (s) => {
      const o = n;
      o[Pr] && o[Pr](s);
    }, a.__disableEmitter = () => {
      const s = n;
      s[Ja] && s[Ja]();
    }), a;
  }
}
const Ql = {
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
function AA({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, a) => [
    ...r,
    // prettier-ignore
    ...a.type === oe ? a.children : [a]
  ], []) : t.reduce((n, r) => {
    const a = e[r];
    return a && (n[r] = a()), n;
  }, {});
}
function vm(e) {
  return oe;
}
const LA = /* @__PURE__ */ Ve({
  /* eslint-disable */
  name: "i18n-t",
  props: bt({
    keypath: {
      type: String,
      required: !0
    },
    plural: {
      type: [Number, String],
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      validator: (e) => ht(e) || !isNaN(e)
    }
  }, Ql),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const { slots: n, attrs: r } = t, a = e.i18n || tu({
      useScope: e.scope,
      __useComponent: !0
    });
    return () => {
      const s = Object.keys(n).filter((d) => d !== "_"), o = {};
      e.locale && (o.locale = e.locale), e.plural !== void 0 && (o.plural = Q(e.plural) ? +e.plural : e.plural);
      const i = AA(t, s), l = a[Mi](e.keypath, i, o), c = bt({}, r), u = Q(e.tag) || Ye(e.tag) ? e.tag : vm();
      return Hr(u, c, l);
    };
  }
}), Jo = LA;
function xA(e) {
  return ze(e) && !Q(e[0]);
}
function pm(e, t, n, r) {
  const { slots: a, attrs: s } = t;
  return () => {
    const o = { part: !0 };
    let i = {};
    e.locale && (o.locale = e.locale), Q(e.format) ? o.key = e.format : Ye(e.format) && (Q(e.format.key) && (o.key = e.format.key), i = Object.keys(e.format).reduce((f, m) => n.includes(m) ? bt({}, f, { [m]: e.format[m] }) : f, {}));
    const l = r(e.value, o, i);
    let c = [o.key];
    ze(l) ? c = l.map((f, m) => {
      const p = a[f.type], v = p ? p({ [f.type]: f.value, index: m, parts: l }) : [f.value];
      return xA(v) && (v[0].key = `${f.type}-${m}`), v;
    }) : Q(l) && (c = [l]);
    const u = bt({}, s), d = Q(e.tag) || Ye(e.tag) ? e.tag : vm();
    return Hr(d, u, c);
  };
}
const RA = /* @__PURE__ */ Ve({
  /* eslint-disable */
  name: "i18n-n",
  props: bt({
    value: {
      type: Number,
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, Ql),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const n = e.i18n || tu({
      useScope: "parent",
      __useComponent: !0
    });
    return pm(e, t, im, (...r) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[Ni](...r)
    ));
  }
}), rd = RA, YA = /* @__PURE__ */ Ve({
  /* eslint-disable */
  name: "i18n-d",
  props: bt({
    value: {
      type: [Number, Date],
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, Ql),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const n = e.i18n || tu({
      useScope: "parent",
      __useComponent: !0
    });
    return pm(e, t, om, (...r) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[$i](...r)
    ));
  }
}), ad = YA;
function FA(e, t) {
  const n = e;
  if (e.mode === "composition")
    return n.__getInstance(t) || e.global;
  {
    const r = n.__getInstance(t);
    return r != null ? r.__composer : e.global.__composer;
  }
}
function UA(e) {
  const t = (o) => {
    const { instance: i, modifiers: l, value: c } = o;
    if (!i || !i.$)
      throw dt(Ie.UNEXPECTED_ERROR);
    const u = FA(e, i.$);
    process.env.NODE_ENV !== "production" && l.preserve && gt(Yt(st.NOT_SUPPORTED_PRESERVE));
    const d = sd(c);
    return [
      Reflect.apply(u.t, u, [...od(d)]),
      u
    ];
  };
  return {
    created: (o, i) => {
      const [l, c] = t(i);
      kn && e.global === c && (o.__i18nWatcher = Re(c.locale, () => {
        i.instance && i.instance.$forceUpdate();
      })), o.__composer = c, o.textContent = l;
    },
    unmounted: (o) => {
      kn && o.__i18nWatcher && (o.__i18nWatcher(), o.__i18nWatcher = void 0, delete o.__i18nWatcher), o.__composer && (o.__composer = void 0, delete o.__composer);
    },
    beforeUpdate: (o, { value: i }) => {
      if (o.__composer) {
        const l = o.__composer, c = sd(i);
        o.textContent = Reflect.apply(l.t, l, [
          ...od(c)
        ]);
      }
    },
    getSSRProps: (o) => {
      const [i] = t(o);
      return { textContent: i };
    }
  };
}
function sd(e) {
  if (Q(e))
    return { path: e };
  if (ye(e)) {
    if (!("path" in e))
      throw dt(Ie.REQUIRED_VALUE, "path");
    return e;
  } else
    throw dt(Ie.INVALID_VALUE);
}
function od(e) {
  const { path: t, locale: n, args: r, choice: a, plural: s } = e, o = {}, i = r || {};
  return Q(n) && (o.locale = n), ht(a) && (o.plural = a), ht(s) && (o.plural = s), [t, i, o];
}
function VA(e, t, ...n) {
  const r = ye(n[0]) ? n[0] : {}, a = !!r.useI18nComponentName, s = Se(r.globalInstall) ? r.globalInstall : !0;
  process.env.NODE_ENV !== "production" && s && a && gt(Yt(st.COMPONENT_NAME_LEGACY_COMPATIBLE, {
    name: Jo.name
  })), s && ([a ? "i18n" : Jo.name, "I18nT"].forEach((o) => e.component(o, Jo)), [rd.name, "I18nN"].forEach((o) => e.component(o, rd)), [ad.name, "I18nD"].forEach((o) => e.component(o, ad))), e.directive("t", UA(t));
}
const Qo = {
  "vue-devtools-plugin-vue-i18n": "Vue I18n devtools",
  "vue-i18n-resource-inspector": "I18n Resources",
  "vue-i18n-timeline": "Vue I18n"
}, WA = {
  "vue-i18n-resource-inspector": "Search for scopes ..."
}, jA = {
  "vue-i18n-timeline": 16764185
}, _m = "vue-i18n: composer properties";
let Ai;
async function HA(e, t) {
  return new Promise((n, r) => {
    try {
      TA({
        id: "vue-devtools-plugin-vue-i18n",
        label: Qo[
          "vue-devtools-plugin-vue-i18n"
          /* VueDevToolsIDs.PLUGIN */
        ],
        packageName: "vue-i18n",
        homepage: "https://vue-i18n.intlify.dev",
        logo: "https://vue-i18n.intlify.dev/vue-i18n-devtools-logo.png",
        componentStateTypes: [_m],
        app: e
        // eslint-disable-line @typescript-eslint/no-explicit-any
      }, (a) => {
        Ai = a, a.on.visitComponentTree(({ componentInstance: o, treeNode: i }) => {
          BA(o, i, t);
        }), a.on.inspectComponent(({ componentInstance: o, instanceData: i }) => {
          o.vnode.el && o.vnode.el.__VUE_I18N__ && i && (t.mode === "legacy" ? o.vnode.el.__VUE_I18N__ !== t.global.__composer && id(i, o.vnode.el.__VUE_I18N__) : id(i, o.vnode.el.__VUE_I18N__));
        }), a.addInspector({
          id: "vue-i18n-resource-inspector",
          label: Qo[
            "vue-i18n-resource-inspector"
            /* VueDevToolsIDs.CUSTOM_INSPECTOR */
          ],
          icon: "language",
          treeFilterPlaceholder: WA[
            "vue-i18n-resource-inspector"
            /* VueDevToolsIDs.CUSTOM_INSPECTOR */
          ]
        }), a.on.getInspectorTree((o) => {
          o.app === e && o.inspectorId === "vue-i18n-resource-inspector" && ZA(o, t);
        });
        const s = /* @__PURE__ */ new Map();
        a.on.getInspectorState(async (o) => {
          if (o.app === e && o.inspectorId === "vue-i18n-resource-inspector")
            if (a.unhighlightElement(), JA(o, t), o.nodeId === "global") {
              if (!s.has(o.app)) {
                const [i] = await a.getComponentInstances(o.app);
                s.set(o.app, i);
              }
              a.highlightElement(s.get(o.app));
            } else {
              const i = XA(o.nodeId, t);
              i && a.highlightElement(i);
            }
        }), a.on.editInspectorState((o) => {
          o.app === e && o.inspectorId === "vue-i18n-resource-inspector" && eL(o, t);
        }), a.addTimelineLayer({
          id: "vue-i18n-timeline",
          label: Qo[
            "vue-i18n-timeline"
            /* VueDevToolsIDs.TIMELINE */
          ],
          color: jA[
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
function gm(e) {
  return e.type.name || e.type.displayName || e.type.__file || "Anonymous";
}
function BA(e, t, n) {
  const r = n.mode === "composition" ? n.global : n.global.__composer;
  if (e && e.vnode.el && e.vnode.el.__VUE_I18N__ && e.vnode.el.__VUE_I18N__ !== r) {
    const a = {
      label: `i18n (${gm(e)} Scope)`,
      textColor: 0,
      backgroundColor: 16764185
    };
    t.tags.push(a);
  }
}
function id(e, t) {
  const n = _m;
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
    value: eu(t.messages.value)
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
function eu(e) {
  const t = {};
  return Object.keys(e).forEach((n) => {
    const r = e[n];
    Qe(r) && "source" in r ? t[n] = KA(r) : Nr(r) && r.loc && r.loc.source ? t[n] = r.loc.source : Ye(r) ? t[n] = eu(r) : t[n] = r;
  }), t;
}
const GA = {
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "&": "&amp;"
};
function zA(e) {
  return e.replace(/[<>"&]/g, qA);
}
function qA(e) {
  return GA[e] || e;
}
function KA(e) {
  return {
    _custom: {
      type: "function",
      display: `<span>ƒ</span> ${e.source ? `("${zA(e.source)}")` : "(?)"}`
    }
  };
}
function ZA(e, t) {
  e.rootNodes.push({
    id: "global",
    label: "Global Scope"
  });
  const n = t.mode === "composition" ? t.global : t.global.__composer;
  for (const [r, a] of t.__instances) {
    const s = t.mode === "composition" ? a : a.__composer;
    n !== s && e.rootNodes.push({
      id: s.id.toString(),
      label: `${gm(r)} Scope`
    });
  }
}
function XA(e, t) {
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
function ym(e, t) {
  if (e === "global")
    return t.mode === "composition" ? t.global : t.global.__composer;
  {
    const n = Array.from(t.__instances.values()).find((r) => r.id.toString() === e);
    return n ? t.mode === "composition" ? n : n.__composer : null;
  }
}
function JA(e, t) {
  const n = ym(e.nodeId, t);
  return n && (e.state = QA(n)), null;
}
function QA(e) {
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
      value: eu(e.messages.value)
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
function Qa(e, t) {
  if (Ai) {
    let n;
    t && "groupId" in t && (n = t.groupId, delete t.groupId), Ai.addTimelineEvent({
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
function eL(e, t) {
  const n = ym(e.nodeId, t);
  if (n) {
    const [r] = e.path;
    r === "locale" && Q(e.state.value) ? n.locale.value = e.state.value : r === "fallbackLocale" && (Q(e.state.value) || ze(e.state.value) || Ye(e.state.value)) ? n.fallbackLocale.value = e.state.value : r === "inheritLocale" && Se(e.state.value) && (n.inheritLocale = e.state.value);
  }
}
function tL(e, t, n) {
  return {
    beforeCreate() {
      const r = ja();
      if (!r)
        throw dt(Ie.UNEXPECTED_ERROR);
      const a = this.$options;
      if (a.i18n) {
        const s = a.i18n;
        if (a.__i18n && (s.__i18n = a.__i18n), s.__root = t, this === this.$root)
          this.$i18n = ld(e, s);
        else {
          s.__injectWithOption = !0, s.__extender = n.__vueI18nExtend, this.$i18n = Ci(s);
          const o = this.$i18n;
          o.__extender && (o.__disposer = o.__extender(this.$i18n));
        }
      } else if (a.__i18n)
        if (this === this.$root)
          this.$i18n = ld(e, a);
        else {
          this.$i18n = Ci({
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
      a.__i18nGlobal && mm(t, a, a), this.$t = (...s) => this.$i18n.t(...s), this.$rt = (...s) => this.$i18n.rt(...s), this.$tc = (...s) => this.$i18n.tc(...s), this.$te = (s, o) => this.$i18n.te(s, o), this.$d = (...s) => this.$i18n.d(...s), this.$n = (...s) => this.$i18n.n(...s), this.$tm = (s) => this.$i18n.tm(s), n.__setInstance(r, this.$i18n);
    },
    mounted() {
      if (process.env.NODE_ENV !== "production" && this.$el && this.$i18n) {
        const r = this.$i18n;
        this.$el.__VUE_I18N__ = r.__composer;
        const a = this.__v_emitter = ql();
        r.__enableEmitter && r.__enableEmitter(a), a.on("*", Qa);
      }
    },
    unmounted() {
      const r = ja();
      if (!r)
        throw dt(Ie.UNEXPECTED_ERROR);
      const a = this.$i18n;
      process.env.NODE_ENV !== "production" && this.$el && this.$el.__VUE_I18N__ && (this.__v_emitter && (this.__v_emitter.off("*", Qa), delete this.__v_emitter), this.$i18n && (a.__disableEmitter && a.__disableEmitter(), delete this.$el.__VUE_I18N__)), delete this.$t, delete this.$rt, delete this.$tc, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, a.__disposer && (a.__disposer(), delete a.__disposer, delete a.__extender), n.__deleteInstance(r), delete this.$i18n;
    }
  };
}
function ld(e, t) {
  e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[dm](t.pluralizationRules || e.pluralizationRules);
  const n = Io(e.locale, {
    messages: t.messages,
    __i18n: t.__i18n
  });
  return Object.keys(n).forEach((r) => e.mergeLocaleMessage(r, n[r])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach((r) => e.mergeDateTimeFormat(r, t.datetimeFormats[r])), t.numberFormats && Object.keys(t.numberFormats).forEach((r) => e.mergeNumberFormat(r, t.numberFormats[r])), e;
}
const nL = /* @__PURE__ */ Nn("global-vue-i18n");
function rL(e = {}, t) {
  const n = __VUE_I18N_LEGACY_API__ && Se(e.legacy) ? e.legacy : __VUE_I18N_LEGACY_API__, r = Se(e.globalInjection) ? e.globalInjection : !0, a = __VUE_I18N_LEGACY_API__ && n ? !!e.allowComposition : !0, s = /* @__PURE__ */ new Map(), [o, i] = aL(e, n), l = /* @__PURE__ */ Nn(process.env.NODE_ENV !== "production" ? "vue-i18n" : "");
  process.env.NODE_ENV !== "production" && n && a && gt(Yt(st.NOTICE_DROP_ALLOW_COMPOSITION));
  function c(f) {
    return s.get(f) || null;
  }
  function u(f, m) {
    s.set(f, m);
  }
  function d(f) {
    s.delete(f);
  }
  {
    const f = {
      // mode
      get mode() {
        return __VUE_I18N_LEGACY_API__ && n ? "legacy" : "composition";
      },
      // allowComposition
      get allowComposition() {
        return a;
      },
      // install plugin
      async install(m, ...p) {
        if (process.env.NODE_ENV !== "production" && (m.__VUE_I18N__ = f), m.__VUE_I18N_SYMBOL__ = l, m.provide(m.__VUE_I18N_SYMBOL__, f), ye(p[0])) {
          const h = p[0];
          f.__composerExtend = h.__composerExtend, f.__vueI18nExtend = h.__vueI18nExtend;
        }
        let v = null;
        !n && r && (v = hL(m, f.global)), __VUE_I18N_FULL_INSTALL__ && VA(m, f, ...p), __VUE_I18N_LEGACY_API__ && n && m.mixin(tL(i, i.__composer, f));
        const y = m.unmount;
        if (m.unmount = () => {
          v && v(), f.dispose(), y();
        }, process.env.NODE_ENV !== "production") {
          if (!await HA(m, f))
            throw dt(Ie.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN);
          const b = ql();
          if (n) {
            const S = i;
            S.__enableEmitter && S.__enableEmitter(b);
          } else {
            const S = i;
            S[Pr] && S[Pr](b);
          }
          b.on("*", Qa);
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
    return f;
  }
}
function tu(e = {}) {
  const t = ja();
  if (t == null)
    throw dt(Ie.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw dt(Ie.NOT_INSTALLED);
  const n = sL(t), r = iL(n), a = hm(t), s = oL(e, a);
  if (__VUE_I18N_LEGACY_API__ && n.mode === "legacy" && !e.__useComponent) {
    if (!n.allowComposition)
      throw dt(Ie.NOT_AVAILABLE_IN_LEGACY_MODE);
    return dL(t, s, r, e);
  }
  if (s === "global")
    return mm(r, e, a), r;
  if (s === "parent") {
    let l = lL(n, t, e.__useComponent);
    return l == null && (process.env.NODE_ENV !== "production" && gt(Yt(st.NOT_FOUND_PARENT_SCOPE)), l = r), l;
  }
  const o = n;
  let i = o.__getInstance(t);
  if (i == null) {
    const l = bt({}, e);
    "__i18n" in a && (l.__i18n = a.__i18n), r && (l.__root = r), i = Jl(l), o.__composerExtend && (i[Pi] = o.__composerExtend(i)), cL(o, t, i), o.__setInstance(t, i);
  }
  return i;
}
function aL(e, t, n) {
  const r = Gm();
  {
    const a = __VUE_I18N_LEGACY_API__ && t ? r.run(() => Ci(e)) : r.run(() => Jl(e));
    if (a == null)
      throw dt(Ie.UNEXPECTED_ERROR);
    return [r, a];
  }
}
function sL(e) {
  {
    const t = Ke(e.isCE ? nL : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t)
      throw dt(e.isCE ? Ie.NOT_INSTALLED_WITH_PROVIDE : Ie.UNEXPECTED_ERROR);
    return t;
  }
}
function oL(e, t) {
  return $o(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function iL(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function lL(e, t, n = !1) {
  let r = null;
  const a = t.root;
  let s = uL(t, n);
  for (; s != null; ) {
    const o = e;
    if (e.mode === "composition")
      r = o.__getInstance(s);
    else if (__VUE_I18N_LEGACY_API__) {
      const i = o.__getInstance(s);
      i != null && (r = i.__composer, n && r && !r[fm] && (r = null));
    }
    if (r != null || a === s)
      break;
    s = s.parent;
  }
  return r;
}
function uL(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function cL(e, t, n) {
  let r = null;
  Ir(() => {
    if (process.env.NODE_ENV !== "production" && t.vnode.el) {
      t.vnode.el.__VUE_I18N__ = n, r = ql();
      const a = n;
      a[Pr] && a[Pr](r), r.on("*", Qa);
    }
  }, t), ts(() => {
    const a = n;
    process.env.NODE_ENV !== "production" && t.vnode.el && t.vnode.el.__VUE_I18N__ && (r && r.off("*", Qa), a[Ja] && a[Ja](), delete t.vnode.el.__VUE_I18N__), e.__deleteInstance(t);
    const s = a[Pi];
    s && (s(), delete a[Pi]);
  }, t);
}
function dL(e, t, n, r = {}) {
  const a = t === "local", s = zm(null);
  if (a && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n))
    throw dt(Ie.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
  const o = Se(r.inheritLocale) ? r.inheritLocale : !Q(r.locale), i = ae(
    // prettier-ignore
    !a || o ? n.locale.value : Q(r.locale) ? r.locale : ca
  ), l = ae(
    // prettier-ignore
    !a || o ? n.fallbackLocale.value : Q(r.fallbackLocale) || ze(r.fallbackLocale) || ye(r.fallbackLocale) || r.fallbackLocale === !1 ? r.fallbackLocale : i.value
  ), c = ae(Io(i.value, r)), u = ae(ye(r.datetimeFormats) ? r.datetimeFormats : { [i.value]: {} }), d = ae(ye(r.numberFormats) ? r.numberFormats : { [i.value]: {} }), f = a ? n.missingWarn : Se(r.missingWarn) || hr(r.missingWarn) ? r.missingWarn : !0, m = a ? n.fallbackWarn : Se(r.fallbackWarn) || hr(r.fallbackWarn) ? r.fallbackWarn : !0, p = a ? n.fallbackRoot : Se(r.fallbackRoot) ? r.fallbackRoot : !0, v = !!r.fallbackFormat, y = Qe(r.missing) ? r.missing : null, h = Qe(r.postTranslation) ? r.postTranslation : null, b = a ? n.warnHtmlMessage : Se(r.warnHtmlMessage) ? r.warnHtmlMessage : !0, S = !!r.escapeParameter, w = a ? n.modifiers : ye(r.modifiers) ? r.modifiers : {}, C = r.pluralRules || a && n.pluralRules;
  function M() {
    return [
      i.value,
      l.value,
      c.value,
      u.value,
      d.value
    ];
  }
  const x = P({
    get: () => s.value ? s.value.locale.value : i.value,
    set: (g) => {
      s.value && (s.value.locale.value = g), i.value = g;
    }
  }), I = P({
    get: () => s.value ? s.value.fallbackLocale.value : l.value,
    set: (g) => {
      s.value && (s.value.fallbackLocale.value = g), l.value = g;
    }
  }), A = P(() => s.value ? s.value.messages.value : c.value), R = P(() => u.value), j = P(() => d.value);
  function U() {
    return s.value ? s.value.getPostTranslationHandler() : h;
  }
  function Z(g) {
    s.value && s.value.setPostTranslationHandler(g);
  }
  function me() {
    return s.value ? s.value.getMissingHandler() : y;
  }
  function te(g) {
    s.value && s.value.setMissingHandler(g);
  }
  function fe(g) {
    return M(), g();
  }
  function we(...g) {
    return s.value ? fe(() => Reflect.apply(s.value.t, null, [...g])) : fe(() => "");
  }
  function Me(...g) {
    return s.value ? Reflect.apply(s.value.rt, null, [...g]) : "";
  }
  function z(...g) {
    return s.value ? fe(() => Reflect.apply(s.value.d, null, [...g])) : fe(() => "");
  }
  function k(...g) {
    return s.value ? fe(() => Reflect.apply(s.value.n, null, [...g])) : fe(() => "");
  }
  function W(g) {
    return s.value ? s.value.tm(g) : {};
  }
  function re(g, L) {
    return s.value ? s.value.te(g, L) : !1;
  }
  function F(g) {
    return s.value ? s.value.getLocaleMessage(g) : {};
  }
  function N(g, L) {
    s.value && (s.value.setLocaleMessage(g, L), c.value[g] = L);
  }
  function X(g, L) {
    s.value && s.value.mergeLocaleMessage(g, L);
  }
  function le(g) {
    return s.value ? s.value.getDateTimeFormat(g) : {};
  }
  function Ce(g, L) {
    s.value && (s.value.setDateTimeFormat(g, L), u.value[g] = L);
  }
  function $e(g, L) {
    s.value && s.value.mergeDateTimeFormat(g, L);
  }
  function ke(g) {
    return s.value ? s.value.getNumberFormat(g) : {};
  }
  function nt(g, L) {
    s.value && (s.value.setNumberFormat(g, L), d.value[g] = L);
  }
  function tt(g, L) {
    s.value && s.value.mergeNumberFormat(g, L);
  }
  const pt = {
    get id() {
      return s.value ? s.value.id : -1;
    },
    locale: x,
    fallbackLocale: I,
    messages: A,
    datetimeFormats: R,
    numberFormats: j,
    get inheritLocale() {
      return s.value ? s.value.inheritLocale : o;
    },
    set inheritLocale(g) {
      s.value && (s.value.inheritLocale = g);
    },
    get availableLocales() {
      return s.value ? s.value.availableLocales : Object.keys(c.value);
    },
    get modifiers() {
      return s.value ? s.value.modifiers : w;
    },
    get pluralRules() {
      return s.value ? s.value.pluralRules : C;
    },
    get isGlobal() {
      return s.value ? s.value.isGlobal : !1;
    },
    get missingWarn() {
      return s.value ? s.value.missingWarn : f;
    },
    set missingWarn(g) {
      s.value && (s.value.missingWarn = g);
    },
    get fallbackWarn() {
      return s.value ? s.value.fallbackWarn : m;
    },
    set fallbackWarn(g) {
      s.value && (s.value.missingWarn = g);
    },
    get fallbackRoot() {
      return s.value ? s.value.fallbackRoot : p;
    },
    set fallbackRoot(g) {
      s.value && (s.value.fallbackRoot = g);
    },
    get fallbackFormat() {
      return s.value ? s.value.fallbackFormat : v;
    },
    set fallbackFormat(g) {
      s.value && (s.value.fallbackFormat = g);
    },
    get warnHtmlMessage() {
      return s.value ? s.value.warnHtmlMessage : b;
    },
    set warnHtmlMessage(g) {
      s.value && (s.value.warnHtmlMessage = g);
    },
    get escapeParameter() {
      return s.value ? s.value.escapeParameter : S;
    },
    set escapeParameter(g) {
      s.value && (s.value.escapeParameter = g);
    },
    t: we,
    getPostTranslationHandler: U,
    setPostTranslationHandler: Z,
    getMissingHandler: me,
    setMissingHandler: te,
    rt: Me,
    d: z,
    n: k,
    tm: W,
    te: re,
    getLocaleMessage: F,
    setLocaleMessage: N,
    mergeLocaleMessage: X,
    getDateTimeFormat: le,
    setDateTimeFormat: Ce,
    mergeDateTimeFormat: $e,
    getNumberFormat: ke,
    setNumberFormat: nt,
    mergeNumberFormat: tt
  };
  function D(g) {
    g.locale.value = i.value, g.fallbackLocale.value = l.value, Object.keys(c.value).forEach((L) => {
      g.mergeLocaleMessage(L, c.value[L]);
    }), Object.keys(u.value).forEach((L) => {
      g.mergeDateTimeFormat(L, u.value[L]);
    }), Object.keys(d.value).forEach((L) => {
      g.mergeNumberFormat(L, d.value[L]);
    }), g.escapeParameter = S, g.fallbackFormat = v, g.fallbackRoot = p, g.fallbackWarn = m, g.missingWarn = f, g.warnHtmlMessage = b;
  }
  return qm(() => {
    if (e.proxy == null || e.proxy.$i18n == null)
      throw dt(Ie.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
    const g = s.value = e.proxy.$i18n.__composer;
    t === "global" ? (i.value = g.locale.value, l.value = g.fallbackLocale.value, c.value = g.messages.value, u.value = g.datetimeFormats.value, d.value = g.numberFormats.value) : a && D(g);
  }), pt;
}
const fL = [
  "locale",
  "fallbackLocale",
  "availableLocales"
], ud = ["t", "rt", "d", "n", "tm", "te"];
function hL(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  return fL.forEach((a) => {
    const s = Object.getOwnPropertyDescriptor(t, a);
    if (!s)
      throw dt(Ie.UNEXPECTED_ERROR);
    const o = xe(s.value) ? {
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
  }), e.config.globalProperties.$i18n = n, ud.forEach((a) => {
    const s = Object.getOwnPropertyDescriptor(t, a);
    if (!s || !s.value)
      throw dt(Ie.UNEXPECTED_ERROR);
    Object.defineProperty(e.config.globalProperties, `$${a}`, s);
  }), () => {
    delete e.config.globalProperties.$i18n, ud.forEach((a) => {
      delete e.config.globalProperties[`$${a}`];
    });
  };
}
$A();
__INTLIFY_JIT_COMPILATION__ ? Vc(mA) : Vc(hA);
sA(UC);
oA(Gh);
if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const e = xn();
  e.__INTLIFY__ = !0, KC(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
const mL = {
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
}, vL = {
  zh_TW: mL
}, Co = rL({
  locale: "zh_TW",
  legacy: !1,
  globalInjection: !0,
  messages: vL
}), pL = { class: "flex flex-col gap-3" }, _L = /* @__PURE__ */ E("div", { class: "flex items-center justify-center gap-3 my-2" }, [
  /* @__PURE__ */ E("p", { class: "p4-b" }, "日期時間"),
  /* @__PURE__ */ E("div", { class: "h-[1px] flex-1 bg-light-3" })
], -1), gL = { class: "flex flex-col gap-2" }, yL = { class: "flex gap-2 items-center" }, bL = /* @__PURE__ */ E("span", { class: "p4-b" }, "開始", -1), wL = ["onClick"], DL = ["value"], OL = /* @__PURE__ */ E("div", { class: "flex items-center justify-center gap-3 w-full my-2" }, [
  /* @__PURE__ */ E("p", { class: "p4-b" }, "重複頻率"),
  /* @__PURE__ */ E("div", { class: "h-[1px] flex-1 bg-light-3" })
], -1), EL = { class: "flex space-x-2 items-center" }, kL = { class: "flex items-center gap-2" }, SL = /* @__PURE__ */ E("span", { class: "p4-b" }, "重複", -1), TL = ["value"], ML = /* @__PURE__ */ E("option", { value: 0 }, "自訂", -1), $L = { class: "p4-b" }, NL = {
  key: 0,
  class: "flex items-center gap-2"
}, PL = { class: "flex items-center gap-2" }, IL = /* @__PURE__ */ E("span", { class: "p4-b" }, "頻率", -1), CL = /* @__PURE__ */ E("option", {
  value: "-1",
  disabled: ""
}, "請選擇", -1), AL = ["value"], LL = {
  key: 0,
  class: "flex items-center gap-2"
}, xL = /* @__PURE__ */ E("span", { class: "p4-b" }, "每", -1), RL = { class: "p4-b" }, cd = 1, YL = /* @__PURE__ */ Ve({
  __name: "RepeatFrequency",
  props: {
    frequency: {},
    interval: {}
  },
  emits: ["update:frequency", "update:interval"],
  setup(e, { emit: t }) {
    const n = e, { t: r } = Co.global, a = Ke("eventData"), s = ae(!0);
    Re(a, () => {
      s.value = !0;
    });
    const o = ae(n.interval ?? cd);
    Re(o, (p) => {
      p || (p = cd), t("update:interval", p);
    });
    const i = ae(n.frequency);
    Re(i, (p) => {
      t("update:frequency", p);
    });
    const l = P({
      get: () => a.value.weekdays ?? [],
      set: (p) => {
        a.value.weekdays = p;
      }
    }), c = P({
      get: () => a.value.weekOrdinal ?? [],
      set: (p) => {
        a.value.weekOrdinal = p;
      }
    }), u = P({
      get: () => a.value.monthDate ?? [],
      set: (p) => {
        a.value.monthDate = p;
      }
    }), d = P({
      get: () => a.value.yearMonths ?? [],
      set: (p) => {
        a.value.yearMonths = p;
      }
    }), f = P(() => {
      if (m.value == Ge.Never)
        return "只執行一次";
      if (m.value == Ge.Hour)
        return "每小時執行一次";
      if (m.value == Ge.Day)
        return "每日執行一次";
      if (m.value == Ge.Week)
        return "每週執行一次";
      if (m.value == Ge.Month)
        return "每月執行一次";
      if (m.value == Ge.Annual)
        return "每年執行一次";
      const p = {
        1: "小時",
        2: "日",
        3: "週",
        4: "月",
        5: "年"
      };
      return m.value == 0 ? `每${o.value ?? ""}${p[i.value] ?? ""}執行一次` : "";
    }), m = ae(-1);
    return n.interval == 1 && (m.value = n.frequency), Re(
      m,
      (p) => {
        Ge[p] && (t("update:frequency", p), t("update:interval", 1), i.value = m.value, a.value.weekdays = null, a.value.weekOrdinal = null, a.value.monthDate = null, a.value.yearMonths = null), a.value.customInterval = p === 0;
      },
      { immediate: !0 }
    ), (p, v) => (O(), T("div", pL, [
      _L,
      E("div", gL, [
        E("div", yL, [
          bL,
          De(_(El), {
            modelValue: _(a).start,
            "onUpdate:modelValue": v[0] || (v[0] = (y) => _(a).start = y),
            mode: "dateTime",
            "min-Date": /* @__PURE__ */ new Date(),
            "is-required": "",
            is24hr: ""
          }, {
            default: vt(({ togglePopover: y, inputValue: h }) => [
              E("button", {
                class: "p3-b flex w-fit cursor-pointer relative items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 transition-all hover:bg-light-3 hover:bg-opacity-50",
                onClick: y
              }, [
                E("input", {
                  value: h,
                  required: "",
                  class: "opacity-0 absolute w-full h-full pointer-events-none"
                }, null, 8, DL),
                ns(" " + pe(h || "請選定執行日期"), 1)
              ], 8, wL)
            ]),
            _: 1
          }, 8, ["modelValue", "min-Date"])
        ])
      ]),
      OL,
      E("div", EL, [
        E("label", kL, [
          SL,
          ot(E("select", {
            class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
            "onUpdate:modelValue": v[1] || (v[1] = (y) => xe(m) ? m.value = y : null)
          }, [
            (O(!0), T(oe, null, Ne(_(Ge), (y, h) => (O(), T(oe, { key: h }, [
              Number.isInteger(y) ? (O(), T("option", {
                key: 0,
                value: y
              }, pe(_(r)(h)), 9, TL)) : J("", !0)
            ], 64))), 128)),
            ML
          ], 512), [
            [yt, _(m)]
          ])
        ]),
        E("span", $L, pe(_(f)), 1)
      ]),
      _(Ge)[_(m)] == null ? (O(), T("div", NL, [
        E("label", PL, [
          IL,
          ot(E("select", {
            class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
            "onUpdate:modelValue": v[2] || (v[2] = (y) => xe(i) ? i.value = y : null)
          }, [
            CL,
            (O(!0), T(oe, null, Ne(_(Ge), (y, h) => (O(), T(oe, { key: h }, [
              y != _(Ge).Never && Number.isInteger(y) ? (O(), T("option", {
                key: 0,
                value: y
              }, pe(_(r)(h)), 9, AL)) : J("", !0)
            ], 64))), 128))
          ], 512), [
            [yt, _(i)]
          ])
        ]),
        _(i) != -1 ? (O(), T("label", LL, [
          xL,
          De(cr, {
            class: "!w-10 text-center",
            modelValue: _(o),
            "onUpdate:modelValue": v[3] || (v[3] = (y) => xe(o) ? o.value = y : null),
            type: "number"
          }, null, 8, ["modelValue"]),
          E("span", RL, pe(_(r)(`s${_(Ge)[_(i)]}`)), 1)
        ])) : J("", !0)
      ])) : J("", !0),
      _(Ge)[_(m)] == null ? (O(), et(lv, {
        key: 1,
        type: _(i),
        weekdays: _(l),
        "onUpdate:weekdays": v[4] || (v[4] = (y) => xe(l) ? l.value = y : null),
        weekOrdinal: _(c),
        "onUpdate:weekOrdinal": v[5] || (v[5] = (y) => xe(c) ? c.value = y : null),
        monthDate: _(u),
        "onUpdate:monthDate": v[6] || (v[6] = (y) => xe(u) ? u.value = y : null),
        yearMonths: _(d),
        "onUpdate:yearMonths": v[7] || (v[7] = (y) => xe(d) ? d.value = y : null)
      }, null, 8, ["type", "weekdays", "weekOrdinal", "monthDate", "yearMonths"])) : J("", !0),
      _(i) !== -1 ? (O(), et(WI, {
        key: 2,
        modelValue: _(a).due,
        "onUpdate:modelValue": v[8] || (v[8] = (y) => _(a).due = y)
      }, null, 8, ["modelValue"])) : J("", !0)
    ]));
  }
}), FL = { class: "relative border rounded border-light-3 py-4 px-3" }, UL = { class: "p3-b absolute left-2 -top-3 text-dark-3 bg-light-5" }, Wa = /* @__PURE__ */ Ve({
  __name: "OuterBlock",
  props: {
    title: {}
  },
  setup(e) {
    return (t, n) => (O(), T("div", FL, [
      E("div", UL, pe(t.title), 1),
      Xt(t.$slots, "default")
    ]));
  }
});
function bm(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: VL } = Object.prototype, { getPrototypeOf: nu } = Object, Ao = ((e) => (t) => {
  const n = VL.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Pn = (e) => (e = e.toLowerCase(), (t) => Ao(t) === e), Lo = (e) => (t) => typeof t === e, { isArray: Oa } = Array, es = Lo("undefined");
function WL(e) {
  return e !== null && !es(e) && e.constructor !== null && !es(e.constructor) && Zt(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const wm = Pn("ArrayBuffer");
function jL(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && wm(e.buffer), t;
}
const HL = Lo("string"), Zt = Lo("function"), Dm = Lo("number"), xo = (e) => e !== null && typeof e == "object", BL = (e) => e === !0 || e === !1, Is = (e) => {
  if (Ao(e) !== "object")
    return !1;
  const t = nu(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, GL = Pn("Date"), zL = Pn("File"), qL = Pn("Blob"), KL = Pn("FileList"), ZL = (e) => xo(e) && Zt(e.pipe), XL = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Zt(e.append) && ((t = Ao(e)) === "formdata" || // detect form-data instance
  t === "object" && Zt(e.toString) && e.toString() === "[object FormData]"));
}, JL = Pn("URLSearchParams"), QL = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function cs(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, a;
  if (typeof e != "object" && (e = [e]), Oa(e))
    for (r = 0, a = e.length; r < a; r++)
      t.call(null, e[r], r, e);
  else {
    const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e), o = s.length;
    let i;
    for (r = 0; r < o; r++)
      i = s[r], t.call(null, e[i], i, e);
  }
}
function Om(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, a;
  for (; r-- > 0; )
    if (a = n[r], t === a.toLowerCase())
      return a;
  return null;
}
const Em = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), km = (e) => !es(e) && e !== Em;
function Li() {
  const { caseless: e } = km(this) && this || {}, t = {}, n = (r, a) => {
    const s = e && Om(t, a) || a;
    Is(t[s]) && Is(r) ? t[s] = Li(t[s], r) : Is(r) ? t[s] = Li({}, r) : Oa(r) ? t[s] = r.slice() : t[s] = r;
  };
  for (let r = 0, a = arguments.length; r < a; r++)
    arguments[r] && cs(arguments[r], n);
  return t;
}
const ex = (e, t, n, { allOwnKeys: r } = {}) => (cs(t, (a, s) => {
  n && Zt(a) ? e[s] = bm(a, n) : e[s] = a;
}, { allOwnKeys: r }), e), tx = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), nx = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, rx = (e, t, n, r) => {
  let a, s, o;
  const i = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (a = Object.getOwnPropertyNames(e), s = a.length; s-- > 0; )
      o = a[s], (!r || r(o, e, t)) && !i[o] && (t[o] = e[o], i[o] = !0);
    e = n !== !1 && nu(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, ax = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, sx = (e) => {
  if (!e)
    return null;
  if (Oa(e))
    return e;
  let t = e.length;
  if (!Dm(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, ox = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && nu(Uint8Array)), ix = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let a;
  for (; (a = r.next()) && !a.done; ) {
    const s = a.value;
    t.call(e, s[0], s[1]);
  }
}, lx = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, ux = Pn("HTMLFormElement"), cx = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, a) {
    return r.toUpperCase() + a;
  }
), dd = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), dx = Pn("RegExp"), Sm = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  cs(n, (a, s) => {
    let o;
    (o = t(a, s, e)) !== !1 && (r[s] = o || a);
  }), Object.defineProperties(e, r);
}, fx = (e) => {
  Sm(e, (t, n) => {
    if (Zt(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (Zt(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, hx = (e, t) => {
  const n = {}, r = (a) => {
    a.forEach((s) => {
      n[s] = !0;
    });
  };
  return Oa(e) ? r(e) : r(String(e).split(t)), n;
}, mx = () => {
}, vx = (e, t) => (e = +e, Number.isFinite(e) ? e : t), ei = "abcdefghijklmnopqrstuvwxyz", fd = "0123456789", Tm = {
  DIGIT: fd,
  ALPHA: ei,
  ALPHA_DIGIT: ei + ei.toUpperCase() + fd
}, px = (e = 16, t = Tm.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function _x(e) {
  return !!(e && Zt(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const gx = (e) => {
  const t = new Array(10), n = (r, a) => {
    if (xo(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[a] = r;
        const s = Oa(r) ? [] : {};
        return cs(r, (o, i) => {
          const l = n(o, a + 1);
          !es(l) && (s[i] = l);
        }), t[a] = void 0, s;
      }
    }
    return r;
  };
  return n(e, 0);
}, yx = Pn("AsyncFunction"), bx = (e) => e && (xo(e) || Zt(e)) && Zt(e.then) && Zt(e.catch), V = {
  isArray: Oa,
  isArrayBuffer: wm,
  isBuffer: WL,
  isFormData: XL,
  isArrayBufferView: jL,
  isString: HL,
  isNumber: Dm,
  isBoolean: BL,
  isObject: xo,
  isPlainObject: Is,
  isUndefined: es,
  isDate: GL,
  isFile: zL,
  isBlob: qL,
  isRegExp: dx,
  isFunction: Zt,
  isStream: ZL,
  isURLSearchParams: JL,
  isTypedArray: ox,
  isFileList: KL,
  forEach: cs,
  merge: Li,
  extend: ex,
  trim: QL,
  stripBOM: tx,
  inherits: nx,
  toFlatObject: rx,
  kindOf: Ao,
  kindOfTest: Pn,
  endsWith: ax,
  toArray: sx,
  forEachEntry: ix,
  matchAll: lx,
  isHTMLForm: ux,
  hasOwnProperty: dd,
  hasOwnProp: dd,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Sm,
  freezeMethods: fx,
  toObjectSet: hx,
  toCamelCase: cx,
  noop: mx,
  toFiniteNumber: vx,
  findKey: Om,
  global: Em,
  isContextDefined: km,
  ALPHABET: Tm,
  generateString: px,
  isSpecCompliantForm: _x,
  toJSONObject: gx,
  isAsyncFn: yx,
  isThenable: bx
};
function Ae(e, t, n, r, a) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), a && (this.response = a);
}
V.inherits(Ae, Error, {
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
const Mm = Ae.prototype, $m = {};
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
  $m[e] = { value: e };
});
Object.defineProperties(Ae, $m);
Object.defineProperty(Mm, "isAxiosError", { value: !0 });
Ae.from = (e, t, n, r, a, s) => {
  const o = Object.create(Mm);
  return V.toFlatObject(e, o, function(l) {
    return l !== Error.prototype;
  }, (i) => i !== "isAxiosError"), Ae.call(o, e.message, t, n, r, a), o.cause = e, o.name = e.name, s && Object.assign(o, s), o;
};
const wx = null;
function xi(e) {
  return V.isPlainObject(e) || V.isArray(e);
}
function Nm(e) {
  return V.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function hd(e, t, n) {
  return e ? e.concat(t).map(function(a, s) {
    return a = Nm(a), !n && s ? "[" + a + "]" : a;
  }).join(n ? "." : "") : t;
}
function Dx(e) {
  return V.isArray(e) && !e.some(xi);
}
const Ox = V.toFlatObject(V, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Ro(e, t, n) {
  if (!V.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = V.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(v, y) {
    return !V.isUndefined(y[v]);
  });
  const r = n.metaTokens, a = n.visitor || u, s = n.dots, o = n.indexes, l = (n.Blob || typeof Blob < "u" && Blob) && V.isSpecCompliantForm(t);
  if (!V.isFunction(a))
    throw new TypeError("visitor must be a function");
  function c(p) {
    if (p === null)
      return "";
    if (V.isDate(p))
      return p.toISOString();
    if (!l && V.isBlob(p))
      throw new Ae("Blob is not supported. Use a Buffer instead.");
    return V.isArrayBuffer(p) || V.isTypedArray(p) ? l && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function u(p, v, y) {
    let h = p;
    if (p && !y && typeof p == "object") {
      if (V.endsWith(v, "{}"))
        v = r ? v : v.slice(0, -2), p = JSON.stringify(p);
      else if (V.isArray(p) && Dx(p) || (V.isFileList(p) || V.endsWith(v, "[]")) && (h = V.toArray(p)))
        return v = Nm(v), h.forEach(function(S, w) {
          !(V.isUndefined(S) || S === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? hd([v], w, s) : o === null ? v : v + "[]",
            c(S)
          );
        }), !1;
    }
    return xi(p) ? !0 : (t.append(hd(y, v, s), c(p)), !1);
  }
  const d = [], f = Object.assign(Ox, {
    defaultVisitor: u,
    convertValue: c,
    isVisitable: xi
  });
  function m(p, v) {
    if (!V.isUndefined(p)) {
      if (d.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
      d.push(p), V.forEach(p, function(h, b) {
        (!(V.isUndefined(h) || h === null) && a.call(
          t,
          h,
          V.isString(b) ? b.trim() : b,
          v,
          f
        )) === !0 && m(h, v ? v.concat(b) : [b]);
      }), d.pop();
    }
  }
  if (!V.isObject(e))
    throw new TypeError("data must be an object");
  return m(e), t;
}
function md(e) {
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
function ru(e, t) {
  this._pairs = [], e && Ro(e, this, t);
}
const Pm = ru.prototype;
Pm.append = function(t, n) {
  this._pairs.push([t, n]);
};
Pm.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, md);
  } : md;
  return this._pairs.map(function(a) {
    return n(a[0]) + "=" + n(a[1]);
  }, "").join("&");
};
function Ex(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Im(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || Ex, a = n && n.serialize;
  let s;
  if (a ? s = a(t, n) : s = V.isURLSearchParams(t) ? t.toString() : new ru(t, n).toString(r), s) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
class kx {
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
const vd = kx, Cm = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Sx = typeof URLSearchParams < "u" ? URLSearchParams : ru, Tx = typeof FormData < "u" ? FormData : null, Mx = typeof Blob < "u" ? Blob : null, $x = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), Nx = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), wn = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Sx,
    FormData: Tx,
    Blob: Mx
  },
  isStandardBrowserEnv: $x,
  isStandardBrowserWebWorkerEnv: Nx,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function Px(e, t) {
  return Ro(e, new wn.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, a, s) {
      return wn.isNode && V.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Ix(e) {
  return V.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Cx(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const a = n.length;
  let s;
  for (r = 0; r < a; r++)
    s = n[r], t[s] = e[s];
  return t;
}
function Am(e) {
  function t(n, r, a, s) {
    let o = n[s++];
    const i = Number.isFinite(+o), l = s >= n.length;
    return o = !o && V.isArray(a) ? a.length : o, l ? (V.hasOwnProp(a, o) ? a[o] = [a[o], r] : a[o] = r, !i) : ((!a[o] || !V.isObject(a[o])) && (a[o] = []), t(n, r, a[o], s) && V.isArray(a[o]) && (a[o] = Cx(a[o])), !i);
  }
  if (V.isFormData(e) && V.isFunction(e.entries)) {
    const n = {};
    return V.forEachEntry(e, (r, a) => {
      t(Ix(r), a, n, 0);
    }), n;
  }
  return null;
}
function Ax(e, t, n) {
  if (V.isString(e))
    try {
      return (t || JSON.parse)(e), V.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const au = {
  transitional: Cm,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", a = r.indexOf("application/json") > -1, s = V.isObject(t);
    if (s && V.isHTMLForm(t) && (t = new FormData(t)), V.isFormData(t))
      return a && a ? JSON.stringify(Am(t)) : t;
    if (V.isArrayBuffer(t) || V.isBuffer(t) || V.isStream(t) || V.isFile(t) || V.isBlob(t))
      return t;
    if (V.isArrayBufferView(t))
      return t.buffer;
    if (V.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let i;
    if (s) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Px(t, this.formSerializer).toString();
      if ((i = V.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return Ro(
          i ? { "files[]": t } : t,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return s || a ? (n.setContentType("application/json", !1), Ax(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || au.transitional, r = n && n.forcedJSONParsing, a = this.responseType === "json";
    if (t && V.isString(t) && (r && !this.responseType || a)) {
      const o = !(n && n.silentJSONParsing) && a;
      try {
        return JSON.parse(t);
      } catch (i) {
        if (o)
          throw i.name === "SyntaxError" ? Ae.from(i, Ae.ERR_BAD_RESPONSE, this, null, this.response) : i;
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
    FormData: wn.classes.FormData,
    Blob: wn.classes.Blob
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
  au.headers[e] = {};
});
const su = au, Lx = V.toObjectSet([
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
]), xx = (e) => {
  const t = {};
  let n, r, a;
  return e && e.split(`
`).forEach(function(o) {
    a = o.indexOf(":"), n = o.substring(0, a).trim().toLowerCase(), r = o.substring(a + 1).trim(), !(!n || t[n] && Lx[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, pd = Symbol("internals");
function Ca(e) {
  return e && String(e).trim().toLowerCase();
}
function Cs(e) {
  return e === !1 || e == null ? e : V.isArray(e) ? e.map(Cs) : String(e);
}
function Rx(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Yx = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ti(e, t, n, r, a) {
  if (V.isFunction(r))
    return r.call(this, t, n);
  if (a && (t = n), !!V.isString(t)) {
    if (V.isString(r))
      return t.indexOf(r) !== -1;
    if (V.isRegExp(r))
      return r.test(t);
  }
}
function Fx(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Ux(e, t) {
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
class Yo {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const a = this;
    function s(i, l, c) {
      const u = Ca(l);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const d = V.findKey(a, u);
      (!d || a[d] === void 0 || c === !0 || c === void 0 && a[d] !== !1) && (a[d || l] = Cs(i));
    }
    const o = (i, l) => V.forEach(i, (c, u) => s(c, u, l));
    return V.isPlainObject(t) || t instanceof this.constructor ? o(t, n) : V.isString(t) && (t = t.trim()) && !Yx(t) ? o(xx(t), n) : t != null && s(n, t, r), this;
  }
  get(t, n) {
    if (t = Ca(t), t) {
      const r = V.findKey(this, t);
      if (r) {
        const a = this[r];
        if (!n)
          return a;
        if (n === !0)
          return Rx(a);
        if (V.isFunction(n))
          return n.call(this, a, r);
        if (V.isRegExp(n))
          return n.exec(a);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Ca(t), t) {
      const r = V.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || ti(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let a = !1;
    function s(o) {
      if (o = Ca(o), o) {
        const i = V.findKey(r, o);
        i && (!n || ti(r, r[i], i, n)) && (delete r[i], a = !0);
      }
    }
    return V.isArray(t) ? t.forEach(s) : s(t), a;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, a = !1;
    for (; r--; ) {
      const s = n[r];
      (!t || ti(this, this[s], s, t, !0)) && (delete this[s], a = !0);
    }
    return a;
  }
  normalize(t) {
    const n = this, r = {};
    return V.forEach(this, (a, s) => {
      const o = V.findKey(r, s);
      if (o) {
        n[o] = Cs(a), delete n[s];
        return;
      }
      const i = t ? Fx(s) : String(s).trim();
      i !== s && delete n[s], n[i] = Cs(a), r[i] = !0;
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
    const r = (this[pd] = this[pd] = {
      accessors: {}
    }).accessors, a = this.prototype;
    function s(o) {
      const i = Ca(o);
      r[i] || (Ux(a, o), r[i] = !0);
    }
    return V.isArray(t) ? t.forEach(s) : s(t), this;
  }
}
Yo.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
V.reduceDescriptors(Yo.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
V.freezeMethods(Yo);
const Wn = Yo;
function ni(e, t) {
  const n = this || su, r = t || n, a = Wn.from(r.headers);
  let s = r.data;
  return V.forEach(e, function(i) {
    s = i.call(n, s, a.normalize(), t ? t.status : void 0);
  }), a.normalize(), s;
}
function Lm(e) {
  return !!(e && e.__CANCEL__);
}
function ds(e, t, n) {
  Ae.call(this, e ?? "canceled", Ae.ERR_CANCELED, t, n), this.name = "CanceledError";
}
V.inherits(ds, Ae, {
  __CANCEL__: !0
});
function Vx(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new Ae(
    "Request failed with status code " + n.status,
    [Ae.ERR_BAD_REQUEST, Ae.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const Wx = wn.isStandardBrowserEnv ? (
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
function jx(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Hx(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function xm(e, t) {
  return e && !jx(t) ? Hx(e, t) : t;
}
const Bx = wn.isStandardBrowserEnv ? (
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
function Gx(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function zx(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let a = 0, s = 0, o;
  return t = t !== void 0 ? t : 1e3, function(l) {
    const c = Date.now(), u = r[s];
    o || (o = c), n[a] = l, r[a] = c;
    let d = s, f = 0;
    for (; d !== a; )
      f += n[d++], d = d % e;
    if (a = (a + 1) % e, a === s && (s = (s + 1) % e), c - o < t)
      return;
    const m = u && c - u;
    return m ? Math.round(f * 1e3 / m) : void 0;
  };
}
function _d(e, t) {
  let n = 0;
  const r = zx(50, 250);
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
const qx = typeof XMLHttpRequest < "u", Kx = qx && function(e) {
  return new Promise(function(n, r) {
    let a = e.data;
    const s = Wn.from(e.headers).normalize(), o = e.responseType;
    let i;
    function l() {
      e.cancelToken && e.cancelToken.unsubscribe(i), e.signal && e.signal.removeEventListener("abort", i);
    }
    let c;
    V.isFormData(a) && (wn.isStandardBrowserEnv || wn.isStandardBrowserWebWorkerEnv ? s.setContentType(!1) : s.getContentType(/^\s*multipart\/form-data/) ? V.isString(c = s.getContentType()) && s.setContentType(c.replace(/^\s*(multipart\/form-data);+/, "$1")) : s.setContentType("multipart/form-data"));
    let u = new XMLHttpRequest();
    if (e.auth) {
      const p = e.auth.username || "", v = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      s.set("Authorization", "Basic " + btoa(p + ":" + v));
    }
    const d = xm(e.baseURL, e.url);
    u.open(e.method.toUpperCase(), Im(d, e.params, e.paramsSerializer), !0), u.timeout = e.timeout;
    function f() {
      if (!u)
        return;
      const p = Wn.from(
        "getAllResponseHeaders" in u && u.getAllResponseHeaders()
      ), y = {
        data: !o || o === "text" || o === "json" ? u.responseText : u.response,
        status: u.status,
        statusText: u.statusText,
        headers: p,
        config: e,
        request: u
      };
      Vx(function(b) {
        n(b), l();
      }, function(b) {
        r(b), l();
      }, y), u = null;
    }
    if ("onloadend" in u ? u.onloadend = f : u.onreadystatechange = function() {
      !u || u.readyState !== 4 || u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0) || setTimeout(f);
    }, u.onabort = function() {
      u && (r(new Ae("Request aborted", Ae.ECONNABORTED, e, u)), u = null);
    }, u.onerror = function() {
      r(new Ae("Network Error", Ae.ERR_NETWORK, e, u)), u = null;
    }, u.ontimeout = function() {
      let v = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const y = e.transitional || Cm;
      e.timeoutErrorMessage && (v = e.timeoutErrorMessage), r(new Ae(
        v,
        y.clarifyTimeoutError ? Ae.ETIMEDOUT : Ae.ECONNABORTED,
        e,
        u
      )), u = null;
    }, wn.isStandardBrowserEnv) {
      const p = (e.withCredentials || Bx(d)) && e.xsrfCookieName && Wx.read(e.xsrfCookieName);
      p && s.set(e.xsrfHeaderName, p);
    }
    a === void 0 && s.setContentType(null), "setRequestHeader" in u && V.forEach(s.toJSON(), function(v, y) {
      u.setRequestHeader(y, v);
    }), V.isUndefined(e.withCredentials) || (u.withCredentials = !!e.withCredentials), o && o !== "json" && (u.responseType = e.responseType), typeof e.onDownloadProgress == "function" && u.addEventListener("progress", _d(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", _d(e.onUploadProgress)), (e.cancelToken || e.signal) && (i = (p) => {
      u && (r(!p || p.type ? new ds(null, e, u) : p), u.abort(), u = null);
    }, e.cancelToken && e.cancelToken.subscribe(i), e.signal && (e.signal.aborted ? i() : e.signal.addEventListener("abort", i)));
    const m = Gx(d);
    if (m && wn.protocols.indexOf(m) === -1) {
      r(new Ae("Unsupported protocol " + m + ":", Ae.ERR_BAD_REQUEST, e));
      return;
    }
    u.send(a || null);
  });
}, Ri = {
  http: wx,
  xhr: Kx
};
V.forEach(Ri, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const gd = (e) => `- ${e}`, Zx = (e) => V.isFunction(e) || e === null || e === !1, Rm = {
  getAdapter: (e) => {
    e = V.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const a = {};
    for (let s = 0; s < t; s++) {
      n = e[s];
      let o;
      if (r = n, !Zx(n) && (r = Ri[(o = String(n)).toLowerCase()], r === void 0))
        throw new Ae(`Unknown adapter '${o}'`);
      if (r)
        break;
      a[o || "#" + s] = r;
    }
    if (!r) {
      const s = Object.entries(a).map(
        ([i, l]) => `adapter ${i} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let o = t ? s.length > 1 ? `since :
` + s.map(gd).join(`
`) : " " + gd(s[0]) : "as no adapter specified";
      throw new Ae(
        "There is no suitable adapter to dispatch the request " + o,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: Ri
};
function ri(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new ds(null, e);
}
function yd(e) {
  return ri(e), e.headers = Wn.from(e.headers), e.data = ni.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Rm.getAdapter(e.adapter || su.adapter)(e).then(function(r) {
    return ri(e), r.data = ni.call(
      e,
      e.transformResponse,
      r
    ), r.headers = Wn.from(r.headers), r;
  }, function(r) {
    return Lm(r) || (ri(e), r && r.response && (r.response.data = ni.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = Wn.from(r.response.headers))), Promise.reject(r);
  });
}
const bd = (e) => e instanceof Wn ? e.toJSON() : e;
function da(e, t) {
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
    headers: (c, u) => a(bd(c), bd(u), !0)
  };
  return V.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const d = l[u] || a, f = d(e[u], t[u], u);
    V.isUndefined(f) && d !== i || (n[u] = f);
  }), n;
}
const Ym = "1.5.1", ou = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  ou[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const wd = {};
ou.transitional = function(t, n, r) {
  function a(s, o) {
    return "[Axios v" + Ym + "] Transitional option '" + s + "'" + o + (r ? ". " + r : "");
  }
  return (s, o, i) => {
    if (t === !1)
      throw new Ae(
        a(o, " has been removed" + (n ? " in " + n : "")),
        Ae.ERR_DEPRECATED
      );
    return n && !wd[o] && (wd[o] = !0, console.warn(
      a(
        o,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(s, o, i) : !0;
  };
};
function Xx(e, t, n) {
  if (typeof e != "object")
    throw new Ae("options must be an object", Ae.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let a = r.length;
  for (; a-- > 0; ) {
    const s = r[a], o = t[s];
    if (o) {
      const i = e[s], l = i === void 0 || o(i, s, e);
      if (l !== !0)
        throw new Ae("option " + s + " must be " + l, Ae.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new Ae("Unknown option " + s, Ae.ERR_BAD_OPTION);
  }
}
const Yi = {
  assertOptions: Xx,
  validators: ou
}, rr = Yi.validators;
class io {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new vd(),
      response: new vd()
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = da(this.defaults, n);
    const { transitional: r, paramsSerializer: a, headers: s } = n;
    r !== void 0 && Yi.assertOptions(r, {
      silentJSONParsing: rr.transitional(rr.boolean),
      forcedJSONParsing: rr.transitional(rr.boolean),
      clarifyTimeoutError: rr.transitional(rr.boolean)
    }, !1), a != null && (V.isFunction(a) ? n.paramsSerializer = {
      serialize: a
    } : Yi.assertOptions(a, {
      encode: rr.function,
      serialize: rr.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let o = s && V.merge(
      s.common,
      s[n.method]
    );
    s && V.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (p) => {
        delete s[p];
      }
    ), n.headers = Wn.concat(o, s);
    const i = [];
    let l = !0;
    this.interceptors.request.forEach(function(v) {
      typeof v.runWhen == "function" && v.runWhen(n) === !1 || (l = l && v.synchronous, i.unshift(v.fulfilled, v.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(v) {
      c.push(v.fulfilled, v.rejected);
    });
    let u, d = 0, f;
    if (!l) {
      const p = [yd.bind(this), void 0];
      for (p.unshift.apply(p, i), p.push.apply(p, c), f = p.length, u = Promise.resolve(n); d < f; )
        u = u.then(p[d++], p[d++]);
      return u;
    }
    f = i.length;
    let m = n;
    for (d = 0; d < f; ) {
      const p = i[d++], v = i[d++];
      try {
        m = p(m);
      } catch (y) {
        v.call(this, y);
        break;
      }
    }
    try {
      u = yd.call(this, m);
    } catch (p) {
      return Promise.reject(p);
    }
    for (d = 0, f = c.length; d < f; )
      u = u.then(c[d++], c[d++]);
    return u;
  }
  getUri(t) {
    t = da(this.defaults, t);
    const n = xm(t.baseURL, t.url);
    return Im(n, t.params, t.paramsSerializer);
  }
}
V.forEach(["delete", "get", "head", "options"], function(t) {
  io.prototype[t] = function(n, r) {
    return this.request(da(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
V.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(s, o, i) {
      return this.request(da(i || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: o
      }));
    };
  }
  io.prototype[t] = n(), io.prototype[t + "Form"] = n(!0);
});
const As = io;
class iu {
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
      r.reason || (r.reason = new ds(s, o, i), n(r.reason));
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
      token: new iu(function(a) {
        t = a;
      }),
      cancel: t
    };
  }
}
const Jx = iu;
function Qx(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function eR(e) {
  return V.isObject(e) && e.isAxiosError === !0;
}
const Fi = {
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
Object.entries(Fi).forEach(([e, t]) => {
  Fi[t] = e;
});
const tR = Fi;
function Fm(e) {
  const t = new As(e), n = bm(As.prototype.request, t);
  return V.extend(n, As.prototype, t, { allOwnKeys: !0 }), V.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(a) {
    return Fm(da(e, a));
  }, n;
}
const ft = Fm(su);
ft.Axios = As;
ft.CanceledError = ds;
ft.CancelToken = Jx;
ft.isCancel = Lm;
ft.VERSION = Ym;
ft.toFormData = Ro;
ft.AxiosError = Ae;
ft.Cancel = ft.CanceledError;
ft.all = function(t) {
  return Promise.all(t);
};
ft.spread = Qx;
ft.isAxiosError = eR;
ft.mergeConfig = da;
ft.AxiosHeaders = Wn;
ft.formToJSON = (e) => Am(V.isHTMLForm(e) ? new FormData(e) : e);
ft.getAdapter = Rm.getAdapter;
ft.HttpStatusCode = tR;
ft.default = ft;
const lu = ft, nR = ["width", "height", "fill", "transform"], rR = { key: 0 }, aR = /* @__PURE__ */ E("path", { d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm48.49-108.49a12,12,0,0,1,0,17l-40,40a12,12,0,0,1-17,0l-40-40a12,12,0,0,1,17-17L128,135l31.51-31.52A12,12,0,0,1,176.49,103.51Z" }, null, -1), sR = [
  aR
], oR = { key: 1 }, iR = /* @__PURE__ */ E("path", {
  d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
  opacity: "0.2"
}, null, -1), lR = /* @__PURE__ */ E("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-109.66a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L128,140.69l34.34-34.35A8,8,0,0,1,173.66,106.34Z" }, null, -1), uR = [
  iR,
  lR
], cR = { key: 2 }, dR = /* @__PURE__ */ E("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,93.66-40,40a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L128,140.69l34.34-34.35a8,8,0,0,1,11.32,11.32Z" }, null, -1), fR = [
  dR
], hR = { key: 3 }, mR = /* @__PURE__ */ E("path", { d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm44.24-110.24a6,6,0,0,1,0,8.48l-40,40a6,6,0,0,1-8.48,0l-40-40a6,6,0,0,1,8.48-8.48L128,143.51l35.76-35.75A6,6,0,0,1,172.24,107.76Z" }, null, -1), vR = [
  mR
], pR = { key: 4 }, _R = /* @__PURE__ */ E("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-109.66a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L128,140.69l34.34-34.35A8,8,0,0,1,173.66,106.34Z" }, null, -1), gR = [
  _R
], yR = { key: 5 }, bR = /* @__PURE__ */ E("path", { d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm42.83-110.83a4,4,0,0,1,0,5.66l-40,40a4,4,0,0,1-5.66,0l-40-40a4,4,0,0,1,5.66-5.66L128,146.34l37.17-37.17A4,4,0,0,1,170.83,109.17Z" }, null, -1), wR = [
  bR
], DR = {
  name: "PhCaretCircleDown"
}, OR = /* @__PURE__ */ Ve({
  ...DR,
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
    const t = e, n = Ke("weight", "regular"), r = Ke("size", "1em"), a = Ke("color", "currentColor"), s = Ke("mirrored", !1), o = P(() => t.weight ?? n), i = P(() => t.size ?? r), l = P(() => t.color ?? a), c = P(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : s ? "scale(-1, 1)" : void 0);
    return (u, d) => (O(), T("svg", zn({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: i.value,
      height: i.value,
      fill: l.value,
      transform: c.value
    }, u.$attrs), [
      Xt(u.$slots, "default"),
      o.value === "bold" ? (O(), T("g", rR, sR)) : o.value === "duotone" ? (O(), T("g", oR, uR)) : o.value === "fill" ? (O(), T("g", cR, fR)) : o.value === "light" ? (O(), T("g", hR, vR)) : o.value === "regular" ? (O(), T("g", pR, gR)) : o.value === "thin" ? (O(), T("g", yR, wR)) : J("", !0)
    ], 16, nR));
  }
}), ER = ["width", "height", "fill", "transform"], kR = { key: 0 }, SR = /* @__PURE__ */ E("path", { d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm32.49-92.49a12,12,0,0,1,0,17l-40,40a12,12,0,0,1-17-17L135,128,103.51,96.49a12,12,0,0,1,17-17Z" }, null, -1), TR = [
  SR
], MR = { key: 1 }, $R = /* @__PURE__ */ E("path", {
  d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
  opacity: "0.2"
}, null, -1), NR = /* @__PURE__ */ E("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm29.66-93.66a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32-11.32L140.69,128,106.34,93.66a8,8,0,0,1,11.32-11.32Z" }, null, -1), PR = [
  $R,
  NR
], IR = { key: 2 }, CR = /* @__PURE__ */ E("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm29.66,109.66-40,40a8,8,0,0,1-11.32-11.32L140.69,128,106.34,93.66a8,8,0,0,1,11.32-11.32l40,40A8,8,0,0,1,157.66,133.66Z" }, null, -1), AR = [
  CR
], LR = { key: 3 }, xR = /* @__PURE__ */ E("path", { d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm28.24-94.24a6,6,0,0,1,0,8.48l-40,40a6,6,0,0,1-8.48-8.48L143.51,128,107.76,92.24a6,6,0,0,1,8.48-8.48Z" }, null, -1), RR = [
  xR
], YR = { key: 4 }, FR = /* @__PURE__ */ E("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm29.66-93.66a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32-11.32L140.69,128,106.34,93.66a8,8,0,0,1,11.32-11.32Z" }, null, -1), UR = [
  FR
], VR = { key: 5 }, WR = /* @__PURE__ */ E("path", { d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm26.83-94.83a4,4,0,0,1,0,5.66l-40,40a4,4,0,0,1-5.66-5.66L146.34,128,109.17,90.83a4,4,0,0,1,5.66-5.66Z" }, null, -1), jR = [
  WR
], HR = {
  name: "PhCaretCircleRight"
}, BR = /* @__PURE__ */ Ve({
  ...HR,
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
    const t = e, n = Ke("weight", "regular"), r = Ke("size", "1em"), a = Ke("color", "currentColor"), s = Ke("mirrored", !1), o = P(() => t.weight ?? n), i = P(() => t.size ?? r), l = P(() => t.color ?? a), c = P(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : s ? "scale(-1, 1)" : void 0);
    return (u, d) => (O(), T("svg", zn({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: i.value,
      height: i.value,
      fill: l.value,
      transform: c.value
    }, u.$attrs), [
      Xt(u.$slots, "default"),
      o.value === "bold" ? (O(), T("g", kR, TR)) : o.value === "duotone" ? (O(), T("g", MR, PR)) : o.value === "fill" ? (O(), T("g", IR, AR)) : o.value === "light" ? (O(), T("g", LR, RR)) : o.value === "regular" ? (O(), T("g", YR, UR)) : o.value === "thin" ? (O(), T("g", VR, jR)) : J("", !0)
    ], 16, ER));
  }
}), GR = ["width", "height", "fill", "transform"], zR = { key: 0 }, qR = /* @__PURE__ */ E("path", { d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm48.49-76.49a12,12,0,0,1-17,17L128,121,96.49,152.49a12,12,0,0,1-17-17l40-40a12,12,0,0,1,17,0Z" }, null, -1), KR = [
  qR
], ZR = { key: 1 }, XR = /* @__PURE__ */ E("path", {
  d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
  opacity: "0.2"
}, null, -1), JR = /* @__PURE__ */ E("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-77.66a8,8,0,0,1-11.32,11.32L128,115.31,93.66,149.66a8,8,0,0,1-11.32-11.32l40-40a8,8,0,0,1,11.32,0Z" }, null, -1), QR = [
  XR,
  JR
], eY = { key: 2 }, tY = /* @__PURE__ */ E("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,125.66a8,8,0,0,1-11.32,0L128,115.31,93.66,149.66a8,8,0,0,1-11.32-11.32l40-40a8,8,0,0,1,11.32,0l40,40A8,8,0,0,1,173.66,149.66Z" }, null, -1), nY = [
  tY
], rY = { key: 3 }, aY = /* @__PURE__ */ E("path", { d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm44.24-78.24a6,6,0,1,1-8.48,8.48L128,112.49,92.24,148.24a6,6,0,0,1-8.48-8.48l40-40a6,6,0,0,1,8.48,0Z" }, null, -1), sY = [
  aY
], oY = { key: 4 }, iY = /* @__PURE__ */ E("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-77.66a8,8,0,0,1-11.32,11.32L128,115.31,93.66,149.66a8,8,0,0,1-11.32-11.32l40-40a8,8,0,0,1,11.32,0Z" }, null, -1), lY = [
  iY
], uY = { key: 5 }, cY = /* @__PURE__ */ E("path", { d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm42.83-78.83a4,4,0,0,1-5.66,5.66L128,109.66,90.83,146.83a4,4,0,0,1-5.66-5.66l40-40a4,4,0,0,1,5.66,0Z" }, null, -1), dY = [
  cY
], fY = {
  name: "PhCaretCircleUp"
}, hY = /* @__PURE__ */ Ve({
  ...fY,
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
    const t = e, n = Ke("weight", "regular"), r = Ke("size", "1em"), a = Ke("color", "currentColor"), s = Ke("mirrored", !1), o = P(() => t.weight ?? n), i = P(() => t.size ?? r), l = P(() => t.color ?? a), c = P(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : s ? "scale(-1, 1)" : void 0);
    return (u, d) => (O(), T("svg", zn({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: i.value,
      height: i.value,
      fill: l.value,
      transform: c.value
    }, u.$attrs), [
      Xt(u.$slots, "default"),
      o.value === "bold" ? (O(), T("g", zR, KR)) : o.value === "duotone" ? (O(), T("g", ZR, QR)) : o.value === "fill" ? (O(), T("g", eY, nY)) : o.value === "light" ? (O(), T("g", rY, sY)) : o.value === "regular" ? (O(), T("g", oY, lY)) : o.value === "thin" ? (O(), T("g", uY, dY)) : J("", !0)
    ], 16, GR));
  }
}), mY = ["width", "height", "fill", "transform"], vY = { key: 0 }, pY = /* @__PURE__ */ E("path", { d: "M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" }, null, -1), _Y = [
  pY
], gY = { key: 1 }, yY = /* @__PURE__ */ E("path", {
  d: "M232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Z",
  opacity: "0.2"
}, null, -1), bY = /* @__PURE__ */ E("path", { d: "M205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z" }, null, -1), wY = [
  yY,
  bY
], DY = { key: 2 }, OY = /* @__PURE__ */ E("path", { d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z" }, null, -1), EY = [
  OY
], kY = { key: 3 }, SY = /* @__PURE__ */ E("path", { d: "M228.24,76.24l-128,128a6,6,0,0,1-8.48,0l-56-56a6,6,0,0,1,8.48-8.48L96,191.51,219.76,67.76a6,6,0,0,1,8.48,8.48Z" }, null, -1), TY = [
  SY
], MY = { key: 4 }, $Y = /* @__PURE__ */ E("path", { d: "M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" }, null, -1), NY = [
  $Y
], PY = { key: 5 }, IY = /* @__PURE__ */ E("path", { d: "M226.83,74.83l-128,128a4,4,0,0,1-5.66,0l-56-56a4,4,0,0,1,5.66-5.66L96,194.34,221.17,69.17a4,4,0,1,1,5.66,5.66Z" }, null, -1), CY = [
  IY
], AY = {
  name: "PhCheck"
}, LY = /* @__PURE__ */ Ve({
  ...AY,
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
    const t = e, n = Ke("weight", "regular"), r = Ke("size", "1em"), a = Ke("color", "currentColor"), s = Ke("mirrored", !1), o = P(() => t.weight ?? n), i = P(() => t.size ?? r), l = P(() => t.color ?? a), c = P(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : s ? "scale(-1, 1)" : void 0);
    return (u, d) => (O(), T("svg", zn({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: i.value,
      height: i.value,
      fill: l.value,
      transform: c.value
    }, u.$attrs), [
      Xt(u.$slots, "default"),
      o.value === "bold" ? (O(), T("g", vY, _Y)) : o.value === "duotone" ? (O(), T("g", gY, wY)) : o.value === "fill" ? (O(), T("g", DY, EY)) : o.value === "light" ? (O(), T("g", kY, TY)) : o.value === "regular" ? (O(), T("g", MY, NY)) : o.value === "thin" ? (O(), T("g", PY, CY)) : J("", !0)
    ], 16, mY));
  }
}), xY = { class: "py-1 flex gap-1 items-center flex-col justify-center" }, RY = { class: "border-b border-light-3 flex-1 flex gap-2 pb-2 w-full" }, YY = { class: "flex justify-between w-full items-center" }, FY = { class: "p4-r flex-1" }, UY = {
  key: 0,
  class: "flex flex-col gap-2 pl-4 w-full"
}, uu = /* @__PURE__ */ Ve({
  __name: "EventActionTargetItem",
  props: {
    target: {},
    targets: {}
  },
  setup(e) {
    const t = Ke("addTarget"), n = ae(!0);
    return (r, a) => {
      var s, o, i;
      return O(), T("div", xY, [
        E("div", RY, [
          (s = r.target) != null && s.children ? J("", !0) : (O(), T("div", {
            key: 0,
            class: "rounded p-0.5 border border-dark-3",
            onClick: a[0] || (a[0] = (l) => _(t)(r.target))
          }, [
            De(_(LY), {
              size: "12",
              weight: "bold",
              class: ct(["opacity-0 text-dark-2", {
                " opacity-100": r.targets.find((l) => l === r.target.id)
              }])
            }, null, 8, ["class"])
          ])),
          E("div", YY, [
            E("span", FY, pe(r.target.name), 1),
            (o = r.target) != null && o.children ? (O(), T("div", {
              key: 0,
              onClick: a[1] || (a[1] = (l) => n.value = !_(n)),
              class: "flex-shrink-0 cursor-pointer"
            }, [
              _(n) ? (O(), et(_(OR), {
                key: 0,
                size: 14
              })) : (O(), et(_(hY), {
                key: 1,
                size: 14
              }))
            ])) : J("", !0)
          ])
        ]),
        (i = r.target) != null && i.children && _(n) ? (O(), T("div", UY, [
          (O(!0), T(oe, null, Ne(r.target.children, (l) => (O(), et(uu, {
            target: l,
            targets: r.targets
          }, null, 8, ["target", "targets"]))), 256))
        ])) : J("", !0)
      ]);
    };
  }
}), VY = { class: "flex flex-col gap-2" }, WY = { class: "flex items-center gap-2 relative pt-2" }, jY = { class: "flex items-center gap-2" }, HY = /* @__PURE__ */ E("span", { class: "p4-b" }, "平台", -1), BY = /* @__PURE__ */ E("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), GY = ["value"], zY = {
  key: 0,
  class: "flex items-center gap-2"
}, qY = /* @__PURE__ */ E("span", { class: "p4-b" }, "層級", -1), KY = /* @__PURE__ */ E("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), ZY = ["value"], XY = {
  key: 1,
  class: "flex items-center gap-2"
}, JY = /* @__PURE__ */ E("span", { class: "p4-b" }, "目標", -1), QY = /* @__PURE__ */ E("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), eF = ["value"], tF = {
  key: 0,
  class: "flex flex-col my-2"
}, nF = { class: "flex items-center gap-2 relative" }, rF = /* @__PURE__ */ E("span", { class: "p4-b" }, "指定目標", -1), aF = ["value"], sF = { key: 0 }, oF = { class: "p4-r text-true-blue-3 px-0.5" }, iF = {
  key: 0,
  class: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex justify-center bg-dark-3 rounded bg-opacity-50 z-[2]"
}, lF = { class: "relative bg-light-5 rounded-xs shadow-01 w-4/5 p-4 h-fit top-4 max-h-[90%] flex flex-col" }, uF = /* @__PURE__ */ E("span", { class: "p1-b flex justify-center mb-1" }, "請選擇目標", -1), cF = { key: 0 }, dF = { class: "flex flex-col gap-2 mt-2 flex-1 overflow-y-auto" }, fF = { class: "flex gap-3 items-center justify-center mt-4" }, hF = {
  key: 2,
  class: "flex flex-col gap-2"
}, mF = { class: "flex items-center gap-2" }, vF = /* @__PURE__ */ E("span", { class: "p4-b" }, "執行", -1), pF = /* @__PURE__ */ E("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), _F = ["value"], gF = {
  key: 0,
  class: "flex gap-x-2 gap-y-3 flex-wrap"
}, yF = { class: "flex items-center gap-2" }, bF = /* @__PURE__ */ E("span", { class: "p4-b" }, "類型", -1), wF = /* @__PURE__ */ E("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), DF = ["value"], OF = {
  key: 0,
  class: "p4-r"
}, EF = {
  key: 0,
  class: "flex items-center gap-2"
}, kF = /* @__PURE__ */ E("span", { class: "p4-b" }, "調整", -1), SF = /* @__PURE__ */ E("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), TF = ["value"], MF = {
  key: 1,
  class: "flex items-center gap-2"
}, $F = {
  key: 0,
  class: "flex items-center gap-2 w-full"
}, NF = { class: "flex flex-col gap-2" }, PF = { class: "flex items-center gap-2" }, IF = /* @__PURE__ */ E("label", { for: "maxBudget" }, "設定預算上限", -1), CF = {
  key: 0,
  class: "flex gap-2 items-center"
}, AF = /* @__PURE__ */ E("span", null, "元", -1), gr = "", LF = /* @__PURE__ */ Ve({
  __name: "EventAction",
  setup(e) {
    const { t } = Co.global, n = Ke("eventData"), r = ae(n.value.action ?? {}), a = ae(!!Object.keys(r.value).length), s = ae(!1);
    Re(s, (k) => {
      var W, re, F, N, X;
      (W = r.value.params) != null && W.limit || (F = (re = r.value) == null ? void 0 : re.params) == null || delete F.limit, k || (X = (N = r.value) == null ? void 0 : N.params) == null || delete X.limit;
    }), Ui(() => {
      var k, W, re, F, N;
      ((k = r.value) == null ? void 0 : k.action) == ce.SetNewBudget || ((W = r.value) == null ? void 0 : W.action) == ce.IncreaseBudget || ((re = r.value) == null ? void 0 : re.action) == ce.LowerBudget || delete r.value.params, s.value = !!((N = (F = r.value) == null ? void 0 : F.params) != null && N.limit);
    }), Re(
      r,
      (k) => {
        n.value.action = k;
      },
      { deep: !0 }
    );
    const o = P(() => {
      var k;
      return ((k = n.value.action) == null ? void 0 : k.client) == _t.Google ? Ht : xt;
    }), i = {
      [_t.Google]: {
        [Ht.Campaign]: {
          SetNewBudget: ce.SetNewBudget,
          IncreaseBudget: ce.IncreaseBudget,
          LowerBudget: ce.LowerBudget,
          OpenProject: ce.OpenProject,
          SuspendProject: ce.SuspendProject
        },
        [Ht.AdGroup]: {
          OpenProject: ce.OpenProject,
          SuspendProject: ce.SuspendProject
        },
        [Ht.AdTag]: {
          OpenProject: ce.OpenProject,
          SuspendProject: ce.SuspendProject
        },
        [Ht.Ad]: {
          OpenProject: ce.OpenProject,
          SuspendProject: ce.SuspendProject
        }
      },
      [_t.Facebook]: {
        [xt.Campaign]: {
          SetNewBudget: ce.SetNewBudget,
          IncreaseBudget: ce.IncreaseBudget,
          LowerBudget: ce.LowerBudget,
          OpenProject: ce.OpenProject,
          SuspendProject: ce.SuspendProject
        },
        [xt.AdGroup]: {
          SetNewBudget: ce.SetNewBudget,
          IncreaseBudget: ce.IncreaseBudget,
          LowerBudget: ce.LowerBudget,
          OpenProject: ce.OpenProject,
          SuspendProject: ce.SuspendProject
        },
        [xt.AdTag]: {
          OpenProject: ce.OpenProject,
          SuspendProject: ce.SuspendProject
        },
        [xt.Ad]: {
          OpenProject: ce.OpenProject,
          SuspendProject: ce.SuspendProject
        }
      }
    }, l = P(() => {
      var re, F;
      const k = (re = r.value) == null ? void 0 : re.client, W = (F = r.value) == null ? void 0 : F.adLevel;
      if (k && W) {
        const N = i[k];
        if (N) {
          const X = N[W];
          if (X)
            return X;
        }
      }
      return {};
    }), c = {
      [_t.Google]: {
        [Ht.Campaign]: {
          [ce.SetNewBudget]: [be.Value],
          [ce.IncreaseBudget]: [be.Percentage, be.Value],
          [ce.LowerBudget]: [be.Percentage, be.Value],
          [ce.OpenProject]: [be.Percentage, be.Value],
          [ce.SuspendProject]: [be.Percentage, be.Value]
        },
        [Ht.AdGroup]: {
          [ce.SuspendProject]: [be.Percentage, be.Value]
        },
        [Ht.AdTag]: {
          [ce.SuspendProject]: [be.Percentage, be.Value]
        },
        [Ht.Ad]: {
          [ce.SuspendProject]: [be.Percentage, be.Value]
        }
      },
      [_t.Facebook]: {
        [xt.Campaign]: {
          [ce.SetNewBudget]: [be.Value],
          [ce.IncreaseBudget]: [be.Percentage, be.Value],
          [ce.LowerBudget]: [be.Percentage, be.Value],
          [ce.OpenProject]: [be.Percentage, be.Value],
          [ce.SuspendProject]: [be.Percentage, be.Value]
        },
        [xt.AdGroup]: {
          [ce.SetNewBudget]: [be.Value],
          [ce.IncreaseBudget]: [be.Percentage, be.Value],
          [ce.LowerBudget]: [be.Percentage, be.Value],
          [ce.OpenProject]: [be.Percentage, be.Value],
          [ce.SuspendProject]: [be.Percentage, be.Value]
        },
        [xt.AdTag]: {
          [ce.SuspendProject]: [be.Percentage, be.Value]
        },
        [xt.Ad]: {
          [ce.SuspendProject]: [be.Percentage, be.Value]
        }
      }
    }, u = P(() => {
      var F, N, X;
      const k = (F = r.value) == null ? void 0 : F.client, W = (N = r.value) == null ? void 0 : N.adLevel, re = (X = r.value) == null ? void 0 : X.action;
      if (k && W && re) {
        const le = c[k];
        if (le) {
          const Ce = le[W];
          if (Ce) {
            const $e = Ce[re];
            if ($e)
              return $e;
          }
        }
      }
      return [be.Percentage, be.Value];
    }), d = {
      target: {
        value: ""
      }
    }, f = P(() => r.value.client ? r.value.client : ""), m = (k) => {
      r.value.client = Number(k.target.value), delete r.value.target, v(d);
    }, p = P(() => r.value.adLevel ? r.value.adLevel : ""), v = (k) => {
      r.value.adLevel = Number(k.target.value), delete r.value.action, delete r.value.target, h(d);
    }, y = P(() => r.value.targetType ? r.value.targetType : ""), h = (k) => {
      r.value.targetType = Number(k.target.value);
    }, b = P(() => r.value.action ? r.value.action : ""), S = (k) => {
      r.value.action = Number(k.target.value);
    }, w = P(() => {
      var k;
      return (k = r.value) != null && k.params || (r.value.params = {}), r.value.params.budgetType ? r.value.params.budgetType : "";
    }), C = (k) => r.value.params.budgetType = k.target.value, M = P(() => {
      var k;
      return (k = r.value) != null && k.params || (r.value.params = {}), r.value.params.valueType ? r.value.params.valueType : "";
    }), x = (k) => r.value.params.valueType = k.target.value, I = ae(!1);
    dr("addTarget", (k) => {
      var re;
      (re = r.value) != null && re.target || (r.value.target = []);
      const W = r.value.target.findIndex(
        (F) => F === k.id
      );
      W === -1 ? r.value.target.push(k.id) : r.value.target.splice(W, 1);
    });
    const R = ae(), j = async () => {
      const k = await lu({
        method: "get",
        url: `${ji()}/heybear/api/automation/platform-target?client=${f.value}&adLevel=${p.value}`,
        withCredentials: !0,
        headers: {
          Authorization: Hi()
        }
      });
      for (const W of k.data.data)
        console.log(W);
      R.value = k.data.data;
    }, U = ae(!1), Z = P(() => {
      const k = te.value.trim().toLowerCase(), W = (N) => N.name.toLowerCase().includes(k), re = (N) => {
        let X = [];
        for (const le of N)
          if (W(le) && (!le.children || le.children.length === 0) && X.push(le), le.children && le.children.length > 0) {
            const Ce = re(le.children);
            Ce.length > 0 && X.push({
              id: le.id,
              name: le.name,
              children: Ce
            });
          }
        return X;
      }, F = [];
      for (const N of R.value)
        if (N.children) {
          const X = re(N.children);
          X.length > 0 && F.push({
            id: N.id,
            name: N.name,
            children: X
          });
        } else
          F.push({
            id: N.id,
            name: N.name
          });
      return F;
    }), me = async () => {
      I.value = !0, U.value = !0, await j(), U.value = !1;
    };
    Re(I, (k) => {
      k || (te.value = "");
    });
    const te = ae(""), fe = () => {
      const k = Z.value, W = (re) => {
        for (const F of re)
          F.children && F.children.length > 0 ? W(F.children) : r.value.target.push(F.id);
      };
      r.value.target.length ? r.value.target = [] : (r.value.target = [], W(k));
    }, we = ae(!1);
    Ir(() => {
      we.value = !0;
    });
    const Me = () => {
      a.value = !1, r.value = {}, Br(() => {
        delete n.value.action;
      });
    }, z = P(() => {
      const k = f.value, W = r.value.adLevel, re = w.value;
      if (re === "")
        return { show: !1 };
      const F = k === _t.Google && W === Ht.Campaign, N = k === _t.Facebook && W === xt.Campaign, X = k === _t.Facebook && W === xt.AdGroup, le = F || N || X, Ce = re === Ls.DailyBudget ? "日預算" : "總預算", $e = `${_t[k]}${o.value[W]}`, ke = le ? `若${t($e)}設定為${re !== gr ? Ce : ""}，則不會變更` : "";
      return { show: le, msg: ke };
    });
    return (k, W) => _(a) ? (O(), et(Wa, {
      key: 1,
      title: "動作"
    }, {
      default: vt(() => {
        var re, F;
        return [
          E("div", VY, [
            E("div", WY, [
              E("div", {
                class: "cursor-pointer text-dark-4 absolute -top-2.5 -right-1.5 p4-b",
                onClick: Me
              }, " 刪除 "),
              E("label", jY, [
                HY,
                ot(E("select", {
                  class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                  "onUpdate:modelValue": W[1] || (W[1] = (N) => xe(f) ? f.value = N : null),
                  onChange: m,
                  required: ""
                }, [
                  BY,
                  (O(!0), T(oe, null, Ne(_(_t), (N, X) => (O(), T(oe, { key: X }, [
                    Number.isInteger(N) ? J("", !0) : (O(), T("option", {
                      key: 0,
                      value: X
                    }, pe(N), 9, GY))
                  ], 64))), 128))
                ], 544), [
                  [yt, _(f)]
                ])
              ]),
              _(f) != gr ? (O(), T("label", zY, [
                qY,
                ot(E("select", {
                  class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                  "onUpdate:modelValue": W[2] || (W[2] = (N) => xe(p) ? p.value = N : null),
                  onChange: v,
                  required: ""
                }, [
                  KY,
                  (O(!0), T(oe, null, Ne(_(o), (N, X) => (O(), T(oe, { key: X }, [
                    Number.isInteger(N) ? J("", !0) : (O(), T("option", {
                      key: 0,
                      value: X
                    }, pe(_(t)(`${_(_t)[_(f)]}${N}`)), 9, ZY))
                  ], 64))), 128))
                ], 544), [
                  [yt, _(p)]
                ])
              ])) : J("", !0),
              _(p) != gr ? (O(), T("label", XY, [
                JY,
                ot(E("select", {
                  class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                  "onUpdate:modelValue": W[3] || (W[3] = (N) => xe(y) ? y.value = N : null),
                  onChange: h,
                  required: ""
                }, [
                  QY,
                  (O(!0), T(oe, null, Ne(_(Rn), (N, X) => (O(), T(oe, { key: X }, [
                    Number.isInteger(N) ? J("", !0) : (O(), T("option", {
                      key: 0,
                      value: X
                    }, pe(_(t)(N)), 9, eF))
                  ], 64))), 128))
                ], 544), [
                  [yt, _(y)]
                ])
              ])) : J("", !0)
            ]),
            _(y) === _(Rn).ForID ? (O(), T("div", tF, [
              E("label", nF, [
                rF,
                E("div", {
                  class: "p4-r px-1.5 py-0.5 text-true-blue-2 rounded bg-true-blue-5 flex w-fit cursor-pointer hover:bg-true-blue-4 z-[2]",
                  onClick: me
                }, " 編輯 "),
                (re = _(r)) != null && re.target ? (O(), T("input", {
                  key: 0,
                  type: "text",
                  class: "opacity-0 absolute left-0 top-0",
                  required: "",
                  value: (F = _(r)) != null && F.target.length ? "123" : ""
                }, null, 8, aF)) : J("", !0)
              ]),
              _(y) === _(Rn).ForID ? (O(), T("div", sF, [
                E("span", oF, pe(_(r).target && _(r).target.length ? `已選${_(r).target.length}個目標` : "尚未選擇目標"), 1)
              ])) : J("", !0)
            ])) : J("", !0),
            _(we) ? (O(), et(Sd, {
              key: 1,
              to: "#editor-container"
            }, [
              _(I) ? (O(), T("div", iF, [
                E("div", lF, [
                  uF,
                  De(cr, {
                    modelValue: _(te),
                    "onUpdate:modelValue": W[4] || (W[4] = (N) => xe(te) ? te.value = N : null)
                  }, null, 8, ["modelValue"]),
                  E("div", {
                    class: "mt-2 flex w-fit ml-auto justify-end p4-b text-true-blue-3 cursor-pointer",
                    onClick: fe
                  }, " 全選 "),
                  _(U) ? (O(), T("div", cF, "loading...")) : (O(), T(oe, { key: 1 }, [
                    E("div", dF, [
                      (O(!0), T(oe, null, Ne(_(Z), (N) => {
                        var X;
                        return O(), et(uu, {
                          key: N.id,
                          target: N,
                          targets: ((X = _(r)) == null ? void 0 : X.target) ?? []
                        }, null, 8, ["target", "targets"]);
                      }), 128))
                    ]),
                    E("div", fF, [
                      E("div", {
                        class: "p3-b flex cursor-pointer items-center gap-1 rounded bg-true-blue-2 px-1.5 py-0.5 text-light-5 hover:bg-true-blue-1",
                        onClick: W[5] || (W[5] = (N) => I.value = !1)
                      }, " 確定 ")
                    ])
                  ], 64))
                ])
              ])) : J("", !0)
            ])) : J("", !0),
            _(y) !== gr ? (O(), T("div", hF, [
              E("label", mF, [
                vF,
                ot(E("select", {
                  class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                  "onUpdate:modelValue": W[6] || (W[6] = (N) => xe(b) ? b.value = N : null),
                  onChange: S,
                  required: ""
                }, [
                  pF,
                  (O(!0), T(oe, null, Ne(_(l), (N, X) => (O(), T("option", {
                    key: X,
                    value: N
                  }, pe(_(t)(X)), 9, _F))), 128))
                ], 544), [
                  [yt, _(b)]
                ])
              ]),
              _(p) != gr ? (O(), T("div", gF, [
                _(r).action == _(ce).SetNewBudget || _(r).action == _(ce).IncreaseBudget || _(r).action == _(ce).LowerBudget ? (O(), T(oe, { key: 0 }, [
                  E("label", yF, [
                    bF,
                    ot(E("select", {
                      class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                      "onUpdate:modelValue": W[7] || (W[7] = (N) => xe(w) ? w.value = N : null),
                      onChange: C,
                      required: ""
                    }, [
                      wF,
                      (O(!0), T(oe, null, Ne(_(Ls), (N, X) => (O(), T(oe, { key: X }, [
                        Number.isInteger(N) ? J("", !0) : (O(), T("option", {
                          key: 0,
                          value: N
                        }, pe(_(t)(N)), 9, DF))
                      ], 64))), 128))
                    ], 544), [
                      [yt, _(w)]
                    ]),
                    _(z).show ? (O(), T("span", OF, pe(_(z).msg), 1)) : J("", !0)
                  ]),
                  _(w) != gr ? (O(), T("label", EF, [
                    kF,
                    ot(E("select", {
                      class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                      "onUpdate:modelValue": W[8] || (W[8] = (N) => xe(M) ? M.value = N : null),
                      onChange: x,
                      required: ""
                    }, [
                      SF,
                      (O(!0), T(oe, null, Ne(_(u), (N, X) => (O(), T("option", {
                        key: X,
                        value: N
                      }, pe(_(t)(`action${N}`)), 9, TF))), 128))
                    ], 544), [
                      [yt, _(M)]
                    ])
                  ])) : J("", !0),
                  _(M) != gr ? (O(), T("label", MF, [
                    De(cr, {
                      modelValue: _(r).params.value,
                      "onUpdate:modelValue": W[9] || (W[9] = (N) => _(r).params.value = N),
                      type: "number",
                      required: !0
                    }, null, 8, ["modelValue"]),
                    E("span", null, pe(_(r).params.valueType === _(be).Percentage ? "%" : "元"), 1)
                  ])) : J("", !0),
                  _(r).action == _(ce).IncreaseBudget || _(r).action == _(ce).LowerBudget ? (O(), T(oe, { key: 2 }, [
                    _(r).params.valueType === _(be).Percentage ? (O(), T("label", $F, [
                      E("div", NF, [
                        E("div", PF, [
                          ot(E("input", {
                            type: "checkbox",
                            "onUpdate:modelValue": W[10] || (W[10] = (N) => xe(s) ? s.value = N : null),
                            id: "maxBudget"
                          }, null, 512), [
                            [Wi, _(s)]
                          ]),
                          IF,
                          _(s) ? (O(), T("div", CF, [
                            De(cr, {
                              modelValue: _(r).params.limit,
                              "onUpdate:modelValue": W[11] || (W[11] = (N) => _(r).params.limit = N),
                              type: "number",
                              required: !0
                            }, null, 8, ["modelValue"]),
                            AF
                          ])) : J("", !0)
                        ])
                      ])
                    ])) : J("", !0)
                  ], 64)) : J("", !0)
                ], 64)) : J("", !0)
              ])) : J("", !0)
            ])) : J("", !0)
          ])
        ];
      }),
      _: 1
    })) : (O(), T("div", {
      key: 0,
      class: "p3-b text-true-blue-3 flex ml-auto w-fit cursor-pointer hover:text-true-blue-2",
      onClick: W[0] || (W[0] = (re) => a.value = !0)
    }, " + 加入動作 "));
  }
}), xF = { class: "flex flex-col gap-2 relative pt-2" }, RF = { class: "flex items-center gap-2" }, YF = { class: "flex items-center gap-2" }, FF = /* @__PURE__ */ E("span", { class: "p3-b" }, "平台", -1), UF = /* @__PURE__ */ E("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), VF = ["value"], WF = {
  key: 0,
  class: "flex items-center gap-2"
}, jF = /* @__PURE__ */ E("span", { class: "p3-b" }, "層級", -1), HF = /* @__PURE__ */ E("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), BF = ["value"], GF = {
  key: 1,
  class: "flex items-center gap-2"
}, zF = /* @__PURE__ */ E("span", { class: "p4-b" }, "目標", -1), qF = /* @__PURE__ */ E("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), KF = ["value"], ZF = {
  key: 0,
  class: "flex flex-col my-2"
}, XF = { class: "flex items-center gap-2 relative" }, JF = /* @__PURE__ */ E("span", { class: "p4-b" }, "指定目標", -1), QF = ["value"], e4 = { key: 0 }, t4 = {
  key: 0,
  class: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex justify-center bg-dark-3 rounded bg-opacity-50 z-[2]"
}, n4 = { class: "relative bg-light-5 rounded-xs shadow-01 w-4/5 p-4 h-fit top-4 max-h-[90%] flex flex-col" }, r4 = /* @__PURE__ */ E("span", { class: "p1-b flex justify-center mb-1" }, "請選擇目標", -1), a4 = { key: 0 }, s4 = { class: "flex flex-col gap-2 mt-2 flex-1 overflow-y-auto" }, o4 = { class: "flex gap-3 items-center justify-center mt-4" }, i4 = {
  key: 2,
  class: "flex items-center gap-1"
}, l4 = /* @__PURE__ */ E("span", { class: "p3-b" }, "條件", -1), u4 = /* @__PURE__ */ E("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), c4 = ["value"], d4 = {
  key: 3,
  class: "flex gap-2 flex-wrap"
}, f4 = { class: "flex gap-2" }, h4 = { class: "flex items-center gap-1" }, m4 = /* @__PURE__ */ E("span", { class: "p3-b" }, "運算", -1), v4 = /* @__PURE__ */ E("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), p4 = ["value"], _4 = {
  key: 0,
  class: "p4-b flex items-center justify-center"
}, g4 = { key: 1 }, y4 = ["onClick"], b4 = ["value"], w4 = {
  key: 0,
  class: "flex items-center gap-1"
}, D4 = /* @__PURE__ */ E("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), O4 = ["value"], E4 = {
  key: 1,
  class: "flex items-center gap-1"
}, k4 = /* @__PURE__ */ E("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), S4 = ["value"], T4 = {
  key: 2,
  class: "flex gap-1 items-center"
}, M4 = {
  key: 4,
  class: "flex items-center gap-2"
}, $4 = /* @__PURE__ */ E("label", { for: "comparison" }, "加入比較區間", -1), ar = "", N4 = /* @__PURE__ */ Ve({
  __name: "ConditionItem",
  props: {
    modelValue: {},
    index: {}
  },
  emits: ["update:modelValue", "removeItem"],
  setup(e, { emit: t }) {
    const n = e, { t: r } = Co.global, a = P(() => n.modelValue ?? {}), s = P(() => {
      var z;
      return ((z = a.value) == null ? void 0 : z.client) == _t.Google ? Gr : zr;
    }), o = {
      target: {
        value: ""
      }
    }, i = P(() => a.value.client ? a.value.client : ""), l = (z) => {
      a.value.client = Number(z.target.value), delete a.value.target, u(o);
    }, c = P(() => a.value.adLevel ? a.value.adLevel : ""), u = (z) => {
      a.value.adLevel = Number(z.target.value), m.value != ar && t("update:modelValue", {
        client: i.value,
        adLevel: c.value
      }), delete a.value.action, delete a.value.target, f(o);
    }, d = P(() => a.value.targetType ? a.value.targetType : ""), f = (z) => {
      a.value.targetType = Number(z.target.value), delete a.value.action, delete a.value.target, a.value.targetType === Rn.ForID && (a.value.target = []);
    }, m = P(() => a.value.conditionType ? a.value.conditionType : ""), p = (z) => a.value.conditionType = z.target.value, v = P(() => a.value.dateRangeType ? a.value.dateRangeType : ""), y = (z) => {
      a.value.dateRangeType = Number(z.target.value), Number(z.target.value) !== _n.SpecifiedTime && delete a.value.dateRange;
    }, h = P(() => a.value.operation ? a.value.operation : ""), b = (z) => a.value.operation = z.target.value, S = P(() => a.value.valueType ? a.value.valueType : ""), w = (z) => a.value.valueType = z.target.value, C = {
      [_t.Google]: {
        [Gr.Campaign]: {
          Clicks: ge.Clicks,
          Impressions: ge.Impressions,
          Cpc: ge.Cpc,
          Spend: ge.Spend,
          Conversions: ge.Conversions,
          ConversionSpend: ge.ConversionSpend,
          ReturnOnADSpending: ge.ReturnOnADSpending
        },
        [Gr.AdGroup]: {
          Clicks: ge.Clicks,
          Impressions: ge.Impressions,
          Cpc: ge.Cpc,
          Spend: ge.Spend,
          Conversions: ge.Conversions,
          ConversionSpend: ge.ConversionSpend,
          ReturnOnADSpending: ge.ReturnOnADSpending
        },
        [Gr.Account]: {
          BudgetRemaining: ge.BudgetRemaining,
          Clicks: ge.Clicks,
          Impressions: ge.Impressions,
          Cpc: ge.Cpc,
          Spend: ge.Spend,
          Conversions: ge.Conversions,
          ConversionSpend: ge.ConversionSpend,
          ReturnOnADSpending: ge.ReturnOnADSpending
        }
      },
      [_t.Facebook]: {
        [zr.Campaign]: {
          Clicks: ge.Clicks,
          BudgetCap: ge.BudgetCap,
          Impressions: ge.Impressions,
          Cpc: ge.Cpc,
          Spend: ge.Spend,
          Conversions: ge.Conversions,
          ConversionSpend: ge.ConversionSpend,
          ReturnOnADSpending: ge.ReturnOnADSpending
        },
        [zr.AdGroup]: {
          Clicks: ge.Clicks,
          Impressions: ge.Impressions,
          Cpc: ge.Cpc,
          Spend: ge.Spend,
          Conversions: ge.Conversions,
          ConversionSpend: ge.ConversionSpend,
          ReturnOnADSpending: ge.ReturnOnADSpending
        },
        [zr.Account]: {
          BudgetRemaining: ge.BudgetRemaining,
          Clicks: ge.Clicks,
          Impressions: ge.Impressions,
          Cpc: ge.Cpc,
          Spend: ge.Spend,
          Conversions: ge.Conversions,
          ConversionSpend: ge.ConversionSpend,
          ReturnOnADSpending: ge.ReturnOnADSpending
        }
      }
    }, M = P(() => {
      if (i.value && c.value) {
        const z = C[i.value];
        if (z) {
          const k = z[c.value];
          if (k)
            return k;
        }
      }
      return {};
    }), x = ae(!1);
    dr("addTarget", (z) => {
      var W;
      (W = a.value) != null && W.target || (a.value.target = []);
      const k = a.value.target.findIndex(
        (re) => re.id === z.id
      );
      k === -1 ? a.value.target.push({
        id: z.id,
        name: z.name
      }) : a.value.target.splice(k, 1);
    });
    const A = ae(), R = async () => {
      const z = await lu({
        method: "get",
        url: `${ji()}/heybear/api/automation/platform-target?client=${i.value}&adLevel=${c.value}`,
        withCredentials: !0,
        headers: {
          Authorization: Hi()
        }
      });
      console.log(z.data.data), A.value = z.data.data;
    }, j = P(() => {
      const z = te.value.trim().toLowerCase(), k = (F) => F.name.toLowerCase().includes(z), W = (F) => {
        let N = [];
        for (const X of F)
          if (k(X) && (!X.children || X.children.length === 0) && N.push(X), X.children && X.children.length > 0) {
            const le = W(X.children);
            le.length > 0 && N.push({
              id: X.id,
              name: X.name,
              children: le
            });
          }
        return N;
      }, re = [];
      for (const F of A.value)
        if (F.children) {
          const N = W(F.children);
          N.length > 0 && re.push({
            id: F.id,
            name: F.name,
            children: N
          });
        } else
          re.push({
            id: F.id,
            name: F.name
          });
      return re;
    }), U = ae(!1), Z = () => {
      const z = j.value, k = (W) => {
        for (const re of W)
          re.children && re.children.length > 0 ? k(re.children) : a.value.target.push(re);
      };
      a.value.target.length ? a.value.target = [] : (a.value.target = [], k(z));
    }, me = async () => {
      x.value = !0, U.value = !0, await R(), U.value = !1;
    }, te = ae(""), fe = ae(!1);
    Ir(() => {
      fe.value = !0;
    });
    function we(z) {
      const k = new Date(z.start), W = new Date(z.end), re = new Date(k - 1), F = new Date(re - (W - k)), N = { year: "numeric", month: "2-digit", day: "2-digit" }, X = F.toLocaleDateString(
        "zh-TW",
        N
      ), le = re.toLocaleDateString(
        "zh-TW",
        N
      );
      return `${X}-${le}`;
    }
    const Me = P(() => n.modelValue.comparison ? v.value === -1 ? a.value.dateRange ? `與${we(a.value.dateRange)}相比` : "" : {
      [_n.Today]: "與作天相比",
      [_n.Yesterday]: "與前一天相比",
      [_n.Last3Days]: "與前3天相比",
      [_n.Last7Days]: "與前7天相比",
      [_n.ThisMonth]: "與上個月相比"
    }[v.value] : "");
    return Re(
      a,
      (z) => {
        console.log(z.dateRange);
      },
      { deep: !0 }
    ), (z, k) => (O(), et(Wa, {
      title: "條件" + (z.index + 1)
    }, {
      default: vt(() => {
        var W, re;
        return [
          E("div", xF, [
            E("div", {
              class: "cursor-pointer text-dark-4 absolute -top-2.5 -right-1.5 p4-b",
              onClick: k[0] || (k[0] = (F) => t("removeItem"))
            }, " 刪除 "),
            E("div", RF, [
              E("label", YF, [
                FF,
                ot(E("select", {
                  class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                  "onUpdate:modelValue": k[1] || (k[1] = (F) => xe(i) ? i.value = F : null),
                  onChange: l,
                  required: ""
                }, [
                  UF,
                  (O(!0), T(oe, null, Ne(_(_t), (F, N) => (O(), T(oe, { key: N }, [
                    Number.isInteger(F) ? J("", !0) : (O(), T("option", {
                      key: 0,
                      value: N
                    }, pe(F), 9, VF))
                  ], 64))), 128))
                ], 544), [
                  [yt, _(i)]
                ])
              ]),
              _(i) != ar ? (O(), T("label", WF, [
                jF,
                ot(E("select", {
                  class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                  "onUpdate:modelValue": k[2] || (k[2] = (F) => xe(c) ? c.value = F : null),
                  onChange: u,
                  required: ""
                }, [
                  HF,
                  (O(!0), T(oe, null, Ne(_(s), (F, N) => (O(), T(oe, { key: N }, [
                    Number.isInteger(F) ? J("", !0) : (O(), T("option", {
                      key: 0,
                      value: N
                    }, pe(_(r)(`${_(_t)[_(i)]}${F}`)), 9, BF))
                  ], 64))), 128))
                ], 544), [
                  [yt, _(c)]
                ])
              ])) : J("", !0),
              _(c) != ar ? (O(), T("label", GF, [
                zF,
                ot(E("select", {
                  class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                  "onUpdate:modelValue": k[3] || (k[3] = (F) => xe(d) ? d.value = F : null),
                  onChange: f,
                  required: ""
                }, [
                  qF,
                  (O(!0), T(oe, null, Ne(_(Rn), (F, N) => (O(), T(oe, { key: N }, [
                    Number.isInteger(F) ? J("", !0) : (O(), T("option", {
                      key: 0,
                      value: N
                    }, pe(_(r)(F)), 9, KF))
                  ], 64))), 128))
                ], 544), [
                  [yt, _(d)]
                ])
              ])) : J("", !0)
            ]),
            _(d) === _(Rn).ForID ? (O(), T("div", ZF, [
              E("label", XF, [
                JF,
                E("div", {
                  class: "p4-r px-1.5 z-[2] py-0.5 text-true-blue-2 rounded bg-true-blue-5 flex w-fit cursor-pointer hover:bg-true-blue-4",
                  onClick: me
                }, " 編輯 "),
                (W = _(a)) != null && W.target ? (O(), T("input", {
                  key: 0,
                  type: "text",
                  class: "opacity-0 absolute left-0 top-0",
                  required: "",
                  value: (re = _(a)) != null && re.target.length ? "123" : ""
                }, null, 8, QF)) : J("", !0)
              ]),
              _(d) === _(Rn).ForID ? (O(), T("div", e4, [
                (O(!0), T(oe, null, Ne(_(a).target, (F, N) => (O(), T("span", {
                  class: "p4-r text-true-blue-3 px-0.5",
                  key: F.id
                }, pe(F.name) + pe(N !== _(a).target.length - 1 ? "," : ""), 1))), 128))
              ])) : J("", !0)
            ])) : J("", !0),
            _(fe) ? (O(), et(Sd, {
              key: 1,
              to: "#editor-container"
            }, [
              _(x) ? (O(), T("div", t4, [
                E("div", n4, [
                  r4,
                  De(cr, {
                    modelValue: _(te),
                    "onUpdate:modelValue": k[4] || (k[4] = (F) => xe(te) ? te.value = F : null)
                  }, null, 8, ["modelValue"]),
                  E("div", {
                    class: "mt-2 flex w-fit ml-auto justify-end p4-b text-true-blue-3 cursor-pointer",
                    onClick: Z
                  }, " 全選 "),
                  _(U) ? (O(), T("div", a4, "loading...")) : (O(), T(oe, { key: 1 }, [
                    E("div", s4, [
                      (O(!0), T(oe, null, Ne(_(j), (F) => {
                        var N;
                        return O(), et(uu, {
                          key: F.id,
                          target: F,
                          targets: (N = _(a)) == null ? void 0 : N.target
                        }, null, 8, ["target", "targets"]);
                      }), 128))
                    ]),
                    E("div", o4, [
                      E("div", {
                        class: "p3-b flex cursor-pointer items-center gap-1 rounded bg-true-blue-2 px-1.5 py-0.5 text-light-5 hover:bg-true-blue-1",
                        onClick: k[5] || (k[5] = (F) => x.value = !1)
                      }, " 確定 ")
                    ])
                  ], 64))
                ])
              ])) : J("", !0)
            ])) : J("", !0),
            _(d) != ar ? (O(), T("label", i4, [
              l4,
              ot(E("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": k[6] || (k[6] = (F) => xe(m) ? m.value = F : null),
                onChange: p,
                required: ""
              }, [
                u4,
                (O(!0), T(oe, null, Ne(_(M), (F, N) => (O(), T("option", {
                  key: N,
                  value: F
                }, pe(_(r)(N)), 9, c4))), 128))
              ], 544), [
                [yt, _(m)]
              ])
            ])) : J("", !0),
            _(m) != ar ? (O(), T("div", d4, [
              E("div", f4, [
                E("label", h4, [
                  m4,
                  ot(E("select", {
                    class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                    "onUpdate:modelValue": k[7] || (k[7] = (F) => xe(v) ? v.value = F : null),
                    onChange: y,
                    required: ""
                  }, [
                    v4,
                    (O(!0), T(oe, null, Ne(_(_n), (F, N) => (O(), T(oe, { key: N }, [
                      Number.isInteger(F) ? J("", !0) : (O(), T("option", {
                        key: 0,
                        value: N
                      }, pe(_(r)(F)), 9, p4))
                    ], 64))), 128))
                  ], 544), [
                    [yt, _(v)]
                  ])
                ]),
                z.modelValue.comparison && _(Me) !== "" ? (O(), T("div", _4, pe(_(Me)), 1)) : J("", !0),
                _(v) == _(_n).SpecifiedTime ? (O(), T("div", g4, [
                  De(_(El), {
                    modelValue: _(a).dateRange,
                    "onUpdate:modelValue": k[8] || (k[8] = (F) => _(a).dateRange = F),
                    modelModifiers: { range: !0 }
                  }, {
                    default: vt(({ togglePopover: F, inputValue: N }) => [
                      E("button", {
                        class: "p3-b flex relative cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 transition-all hover:bg-light-3 hover:bg-opacity-50",
                        onClick: F
                      }, [
                        E("input", {
                          value: N.end,
                          required: "",
                          class: "opacity-0 absolute w-full h-full pointer-events-none"
                        }, null, 8, b4),
                        ns(" " + pe(N.start && N.end ? `${_(ne).utc(N.start).local().format("YYYY-MM-DD")}-${_(ne).utc(N.end).local().format("YYYY-MM-DD")}` : "請選定區間"), 1)
                      ], 8, y4)
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ])) : J("", !0)
              ]),
              _(v) != "" ? (O(), T("label", w4, [
                ot(E("select", {
                  class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                  "onUpdate:modelValue": k[9] || (k[9] = (F) => xe(h) ? h.value = F : null),
                  onChange: b,
                  required: ""
                }, [
                  D4,
                  (O(!0), T(oe, null, Ne(_(Gi), (F, N) => (O(), T(oe, { key: N }, [
                    Number.isInteger(F) ? J("", !0) : (O(), T("option", {
                      key: 0,
                      value: F
                    }, pe(_(r)(N)), 9, O4))
                  ], 64))), 128))
                ], 544), [
                  [yt, _(h)]
                ])
              ])) : J("", !0),
              _(h) != ar ? (O(), T("label", E4, [
                ot(E("select", {
                  class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                  "onUpdate:modelValue": k[10] || (k[10] = (F) => xe(S) ? S.value = F : null),
                  onChange: w,
                  required: ""
                }, [
                  k4,
                  (O(!0), T(oe, null, Ne(_(be), (F, N) => (O(), T(oe, { key: N }, [
                    Number.isInteger(F) ? J("", !0) : (O(), T("option", {
                      key: 0,
                      value: F
                    }, pe(_(r)(`condition${N}`)), 9, S4))
                  ], 64))), 128))
                ], 544), [
                  [yt, _(S)]
                ])
              ])) : J("", !0),
              _(S) != ar ? (O(), T("div", T4, [
                De(cr, {
                  modelValue: _(a).value,
                  "onUpdate:modelValue": k[11] || (k[11] = (F) => _(a).value = F),
                  type: "number",
                  required: !0
                }, null, 8, ["modelValue"]),
                E("span", null, pe(_(a).valueType === _(be).Percentage ? "%" : "元"), 1)
              ])) : J("", !0)
            ])) : J("", !0),
            _(v) != ar ? (O(), T("div", M4, [
              ot(E("input", {
                type: "checkbox",
                "onUpdate:modelValue": k[12] || (k[12] = (F) => z.modelValue.comparison = F),
                id: "comparison"
              }, null, 512), [
                [Wi, z.modelValue.comparison]
              ]),
              $4
            ])) : J("", !0)
          ])
        ];
      }),
      _: 1
    }, 8, ["title"]));
  }
}), P4 = {
  key: 0,
  class: "flex items-center justify-center gap-3"
}, I4 = /* @__PURE__ */ E("div", { class: "h-[1px] flex-1 bg-light-3" }, null, -1), C4 = /* @__PURE__ */ E("p", { class: "p4-b to-dark-4" }, "且", -1), A4 = /* @__PURE__ */ E("div", { class: "h-[1px] flex-1 bg-light-3" }, null, -1), L4 = [
  I4,
  C4,
  A4
], x4 = {
  key: 0,
  class: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex justify-center items-center bg-dark-3 rounded bg-opacity-50 z-[2]"
}, R4 = { class: "relative bg-light-5 rounded-xs shadow-01 w-4/5 p-4" }, Y4 = /* @__PURE__ */ E("span", { class: "p1-b flex justify-center mb-1" }, "請選擇條件", -1), F4 = { class: "flex flex-col gap-2 mt-2" }, U4 = { class: "flex flex-col flex-1" }, V4 = { class: "p3-b" }, W4 = { class: "p4-r text-dark-4" }, j4 = { class: "flex gap-3 items-center justify-center mt-4" }, H4 = /* @__PURE__ */ Ve({
  __name: "Condition",
  setup(e) {
    const t = ae(!1), n = Ke("eventData"), r = ae(n.value.conditions ?? []);
    Re(
      r,
      (m) => {
        n.value.conditions = m;
      },
      { deep: !0 }
    );
    const a = () => {
      r.value.push({}), t.value = !1;
    }, s = (m) => {
      r.value.splice(m, 1);
    }, o = ae(""), i = ae([]), l = P(() => "title"), c = async () => {
      const m = await lu({
        method: "get",
        url: `${ji()}/heybear/api/automation/template`,
        data: { type: 2 },
        withCredentials: !0,
        headers: {
          Authorization: Hi()
        }
      });
      i.value = m.data.data;
    }, u = P(() => {
      const m = o.value.toLowerCase();
      return i.value.filter(
        (p) => p[l.value].toLowerCase().includes(m)
      );
    }), d = ae(!1), f = async () => {
      t.value = !0, d.value = !0, await c(), d.value = !1;
    };
    return (m, p) => (O(), T(oe, null, [
      (O(!0), T(oe, null, Ne(_(r), (v, y) => (O(), T(oe, { key: y }, [
        De(N4, {
          index: y,
          modelValue: _(r)[y],
          "onUpdate:modelValue": (h) => _(r)[y] = h,
          onRemoveItem: (h) => s(y)
        }, null, 8, ["index", "modelValue", "onUpdate:modelValue", "onRemoveItem"]),
        y + 1 !== _(r).length ? (O(), T("div", P4, L4)) : J("", !0)
      ], 64))), 128)),
      E("div", {
        class: "p3-b text-true-blue-3 flex ml-auto w-fit cursor-pointer hover:text-true-blue-2",
        onClick: f
      }, " + 加入條件 "),
      _(t) ? (O(), T("div", x4, [
        E("div", R4, [
          Y4,
          De(cr, {
            placeholder: "輸入關鍵字搜尋 ex: 轉換數",
            modelValue: _(o),
            "onUpdate:modelValue": p[0] || (p[0] = (v) => xe(o) ? o.value = v : null)
          }, null, 8, ["modelValue"]),
          E("div", F4, [
            (O(!0), T(oe, null, Ne(_(u), (v) => (O(), T("div", {
              class: "border border-dark-5 rounded items-center py-1 px-3 flex gap-1 hover:bg-true-blue-5 cursor-pointer",
              key: v.id
            }, [
              E("div", U4, [
                E("span", V4, pe(v.title), 1),
                E("span", W4, pe(v.description), 1)
              ]),
              De(_(BR), {
                size: 18,
                class: "text-dark-3",
                weight: "bold"
              })
            ]))), 128))
          ]),
          E("div", {
            class: "border ml-auto mt-2 border-true-blue-3 text-true-blue-3 rounded px-1 w-fit p3-r cursor-pointer hover:text-true-blue-2 hover:border-true-blue-2",
            onClick: a
          }, " 自訂 "),
          E("div", j4, [
            E("div", {
              class: "p3-b flex cursor-pointer items-center gap-1 rounded bg-true-blue-2 px-1.5 py-0.5 text-light-5 hover:bg-true-blue-1",
              onClick: p[1] || (p[1] = (v) => t.value = !1)
            }, " 確定 ")
          ])
        ])
      ])) : J("", !0)
    ], 64));
  }
}), B4 = { class: "flex items-center gap-2" }, G4 = /* @__PURE__ */ E("span", { class: "p4-b" }, "以電子郵件寄出結果", -1), z4 = /* @__PURE__ */ E("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), q4 = ["value"], K4 = /* @__PURE__ */ Ve({
  __name: "Notification",
  setup(e) {
    const { t } = Co.global, n = Ke("eventData"), r = ae(
      n.value.notify ?? {
        email: Bi.All
      }
    );
    return Re(
      r,
      (a) => {
        n.value.notify = a;
      },
      { deep: !0, immediate: !0 }
    ), (a, s) => (O(), T("div", null, [
      E("label", B4, [
        G4,
        ot(E("select", {
          class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
          "onUpdate:modelValue": s[0] || (s[0] = (o) => _(r).email = o)
        }, [
          z4,
          (O(!0), T(oe, null, Ne(_(zi), (o, i) => (O(), T(oe, { key: i }, [
            Number.isInteger(o) ? J("", !0) : (O(), T("option", {
              key: 0,
              value: Number(i)
            }, pe(_(t)(`mail${o}`)), 9, q4))
          ], 64))), 128))
        ], 512), [
          [yt, _(r).email]
        ])
      ])
    ]));
  }
}), Os = {
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
function Z4(e) {
  const t = new Date(e.start).toLocaleString("zh-TW", {
    hour12: !1
  }), n = e.due ? new Date(e.due).toLocaleString("zh-TW", { hour12: !1 }) : null;
  if (e.frequency === Ge.Never)
    return `於 ${t} 起`;
  const r = Os.frequency[Ge[e.frequency]], a = e.weekdays ? e.weekdays.map((c) => Os.weekdays[Bt[c]]).join("、") : "", s = e.weekOrdinal ? e.weekOrdinal.map((c) => Os.weekOrdinal[Ln[c]]).join("、") : "", o = e.monthDate ? `第${e.monthDate.join("、")}號`.replace("-1", "最後一天") : "", i = e.yearMonths ? `第${e.yearMonths.reverse().join("、")}個月` : "";
  let l = `於 ${t} 起，${Os.every}${e.interval}${r}`;
  if (s || a || o || i) {
    l += "的";
    const c = [];
    i && c.push(`${i}的`), o && c.push(o), s && c.push(`${s}的`), a && c.push(a), l += c.join("");
  }
  return n && (l += `，並於 ${n} 結束循環`), l;
}
const Um = (e) => (Zm("data-v-34d2679a"), e = e(), Xm(), e), X4 = ["onSubmit"], J4 = /* @__PURE__ */ Um(() => /* @__PURE__ */ E("div", { class: "p1-b" }, "建立自動化規則", -1)), Q4 = /* @__PURE__ */ Um(() => /* @__PURE__ */ E("span", { class: "p4-b" }, "規則名稱*", -1)), e8 = {
  key: 0,
  class: "text-red-1"
}, t8 = 100, n8 = /* @__PURE__ */ Ve({
  __name: "TCEventEditorApp",
  props: {
    data: {}
  },
  emits: ["update:data"],
  setup(e, { expose: t, emit: n }) {
    const r = e, a = P(() => JSON.parse(r.data || "{}")), s = (u) => {
      const d = Object.fromEntries(
        Object.entries(u).filter(([f, m]) => m !== null)
      );
      return JSON.stringify(d, null, 4);
    }, o = ae([]), i = (u) => {
      u.preventDefault(), n("update:data", s(a.value)), console.log(Z4(a.value));
    }, l = (u) => {
      var d;
      (d = c.value) == null || d.click();
    };
    dr("eventData", a), dr("checkDataValid", o);
    const c = ae();
    return t({
      saveData: l
    }), (u, d) => r.data ? (O(), T("form", {
      key: 0,
      class: "flex flex-col gap-5 relative p-5",
      id: "editor-container",
      onSubmit: kd(i, ["prevent"])
    }, [
      J4,
      De(Wa, { title: "基本資料" }, {
        default: vt(() => [
          E("div", null, [
            Q4,
            De(cr, {
              modelValue: _(a).title,
              "onUpdate:modelValue": d[0] || (d[0] = (f) => _(a).title = f),
              maxLength: t8,
              required: !0
            }, null, 8, ["modelValue"])
          ])
        ]),
        _: 1
      }),
      De(Wa, { title: "執行時間" }, {
        default: vt(() => [
          De(YL, {
            frequency: _(a).frequency,
            "onUpdate:frequency": d[1] || (d[1] = (f) => _(a).frequency = f),
            interval: _(a).interval,
            "onUpdate:interval": d[2] || (d[2] = (f) => _(a).interval = f)
          }, null, 8, ["frequency", "interval"])
        ]),
        _: 1
      }),
      De(Wa, { title: "通知" }, {
        default: vt(() => [
          De(K4)
        ]),
        _: 1
      }),
      De(LF),
      De(H4),
      _(o).length ? (O(), T("span", e8, "資料未填寫完整")) : J("", !0),
      E("button", {
        ref_key: "submitBtn",
        ref: c,
        class: "p-2 px-3 rounded bg-slate-100 hover:bg-sky-500 hover:text-white hidden"
      }, " 保存 ", 512)
    ], 40, X4)) : J("", !0);
  }
});
const r8 = /* @__PURE__ */ qi(n8, [["__scopeId", "data-v-34d2679a"]]), a8 = (e) => {
  e.component("TCEventEditorApp", r8);
}, c8 = {
  install: a8
};
export {
  r8 as TCEventEditorApp,
  l8 as TCEventItems,
  c8 as default,
  Z4 as getDescription,
  o8 as setApiUrlBase,
  i8 as setToken
};
