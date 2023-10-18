import { defineComponent as Se, openBlock as O, createElementBlock as T, createElementVNode as E, toDisplayString as le, ref as re, watchEffect as ps, computed as C, watch as Te, onBeforeUnmount as oc, Fragment as ne, unref as p, renderList as he, createBlock as qe, createCommentVNode as Q, withDirectives as Pe, isRef as be, vModelSelect as Be, reactive as hs, onMounted as hn, onUnmounted as xr, toRefs as ic, h as Fn, provide as qn, inject as yt, resolveDynamicComponent as rl, normalizeProps as al, mergeProps as rr, renderSlot as jt, normalizeClass as Ge, normalizeStyle as Er, withKeys as io, createVNode as me, withCtx as ze, nextTick as Yn, toRef as xa, resolveComponent as fn, Transition as sl, createTextVNode as Rr, withModifiers as ol, guardReactiveProps as lc, resolveDirective as uc, toHandlers as cc, vModelCheckbox as ta, getCurrentInstance as Tr, effectScope as dc, shallowRef as fc, onBeforeMount as vc, Text as mc, Teleport as il, createStaticVNode as pc, pushScopeId as hc, popScopeId as gc } from "vue";
function pC(e) {
}
class _c {
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
var Qe = /* @__PURE__ */ ((e) => (e[e.Google = 1] = "Google", e[e.Facebook = 2] = "Facebook", e))(Qe || {}), bt = /* @__PURE__ */ ((e) => (e[e.Campaign = 1] = "Campaign", e[e.AdGroup = 2] = "AdGroup", e[e.Ad = 3] = "Ad", e[e.AdTag = 4] = "AdTag", e))(bt || {}), vt = /* @__PURE__ */ ((e) => (e[e.Campaign = 1] = "Campaign", e[e.AdGroup = 2] = "AdGroup", e[e.Ad = 3] = "Ad", e[e.AdTag = 4] = "AdTag", e))(vt || {}), vn = /* @__PURE__ */ ((e) => (e[e.ForAll = 1] = "ForAll", e[e.ForID = 2] = "ForID", e[e.ForActive = 3] = "ForActive", e))(vn || {}), Vn = /* @__PURE__ */ ((e) => (e[e.Account = 1] = "Account", e[e.Campaign = 2] = "Campaign", e[e.AdGroup = 3] = "AdGroup", e))(Vn || {}), Un = /* @__PURE__ */ ((e) => (e[e.Account = 1] = "Account", e[e.Campaign = 2] = "Campaign", e[e.AdGroup = 3] = "AdGroup", e))(Un || {}), Re = /* @__PURE__ */ ((e) => (e[e.Never = -1] = "Never", e[e.Hour = 1] = "Hour", e[e.Day = 2] = "Day", e[e.Week = 3] = "Week", e[e.Month = 4] = "Month", e[e.Annual = 5] = "Annual", e))(Re || {}), It = /* @__PURE__ */ ((e) => (e[e.Sunday = 0] = "Sunday", e[e.Monday = 1] = "Monday", e[e.Tuesday = 2] = "Tuesday", e[e.Wednesday = 3] = "Wednesday", e[e.Thursday = 4] = "Thursday", e[e.Friday = 5] = "Friday", e[e.Saturday = 6] = "Saturday", e[e.Weekday = -1] = "Weekday", e[e.Weekend = -2] = "Weekend", e))(It || {}), un = /* @__PURE__ */ ((e) => (e[e.First = 1] = "First", e[e.Second = 2] = "Second", e[e.Third = 3] = "Third", e[e.Fourth = 4] = "Fourth", e[e.Fifth = 5] = "Fifth", e[e.Last = -1] = "Last", e))(un || {}), ct = /* @__PURE__ */ ((e) => (e[e.January = 1] = "January", e[e.February = 2] = "February", e[e.March = 3] = "March", e[e.April = 4] = "April", e[e.May = 5] = "May", e[e.June = 6] = "June", e[e.July = 7] = "July", e[e.August = 8] = "August", e[e.September = 9] = "September", e[e.October = 10] = "October", e[e.November = 11] = "November", e[e.December = 12] = "December", e))(ct || {}), ae = /* @__PURE__ */ ((e) => (e[e.SetNewBudget = 1] = "SetNewBudget", e[e.IncreaseBudget = 2] = "IncreaseBudget", e[e.LowerBudget = 3] = "LowerBudget", e[e.OpenProject = 4] = "OpenProject", e[e.SuspendProject = 5] = "SuspendProject", e[e.None = -1] = "None", e))(ae || {}), jn = /* @__PURE__ */ ((e) => (e.DailyBudget = "dailyBudget", e.TotalBudget = "totalBudget", e))(jn || {}), se = /* @__PURE__ */ ((e) => (e.Value = "value", e.Percentage = "percentage", e))(se || {}), fe = /* @__PURE__ */ ((e) => (e.BudgetRemaining = "budgetRemaining", e.BudgetCap = "budgetCap", e.Clicks = "clicks", e.Impressions = "impressions", e.Cpc = "CPC", e.Spend = "spend", e.Conversions = "conversions", e.ConversionSpend = "conversionSpend", e.ReturnOnADSpending = "roas", e))(fe || {}), wr = /* @__PURE__ */ ((e) => (e[e.Today = 1] = "Today", e[e.Yesterday = 2] = "Yesterday", e[e.Last3Days = 3] = "Last3Days", e[e.Last7Days = 4] = "Last7Days", e[e.ThisMonth = 5] = "ThisMonth", e[e.SpecifiedTime = -1] = "SpecifiedTime", e))(wr || {}), gs = /* @__PURE__ */ ((e) => (e.MoreThan = ">", e.GreaterOrEqualTo = ">=", e.Equal = "==", e.LessThan = "<", e.LessThanOrEqualTo = "<=", e))(gs || {}), _s = /* @__PURE__ */ ((e) => (e[e.AbnormalityOrError = 0] = "AbnormalityOrError", e[e.Error = 1] = "Error", e[e.None = -1] = "None", e))(_s || {});
const hC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ActionType: ae,
  AdLevelTypeFacebook: vt,
  AdLevelTypeGoogle: bt,
  BudgetType: jn,
  ClientType: Qe,
  ConditionAdLevelTypeFacebook: Un,
  ConditionAdLevelTypeGoogle: Vn,
  ConditionType: fe,
  DateRangeType: wr,
  EventActionTargetType: vn,
  EventHelper: _c,
  FrequencyType: Re,
  MonthType: ct,
  OperationType: gs,
  ValueType: se,
  WeekOrdinalWordsType: un,
  WeekdaysType: It,
  emailType: _s
}, Symbol.toStringTag, { value: "Module" })), bc = { class: "flex" }, yc = ["checked", "id"], Dc = ["for"], Ec = /* @__PURE__ */ Se({
  __name: "CheckBox",
  props: {
    label: {},
    checked: { type: Boolean },
    fieldId: {}
  },
  emits: ["update:checked"],
  setup(e, { emit: t }) {
    return (n, r) => (O(), T("div", bc, [
      E("input", {
        onInput: r[0] || (r[0] = (s) => n.$emit("update:checked", s.target.checked)),
        type: "checkbox",
        checked: n.checked,
        id: n.fieldId,
        class: "hidden"
      }, null, 40, yc),
      E("label", {
        for: n.fieldId,
        class: "p3-r cursor-pointer rounded border hover:bg-light-4 border-dark-5 px-1 py-0.5 flex justify-center items-center text-dark-2 min-w-[1.75rem] min-h-[1.75rem]"
      }, le(n.label), 9, Dc)
    ]));
  }
});
const bs = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
  return n;
}, lo = /* @__PURE__ */ bs(Ec, [["__scopeId", "data-v-8bd665ed"]]), wc = {
  key: 0,
  class: "flex gap-1.5 flex-wrap"
}, Oc = {
  key: 1,
  class: "flex gap-2 items-center"
}, $c = /* @__PURE__ */ E("span", { class: "p3-r" }, "指定", -1), kc = ["value"], Nc = { class: "flex gap-4 flex-wrap" }, Tc = /* @__PURE__ */ Se({
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
    const n = e, r = re(n.monthDate), s = re(n.weekOrdinal), a = re(n.weekdays), o = re(n.yearMonths), i = (y, d, b = !1) => {
      if (b) {
        d.findIndex((k) => k === y) === -1 ? d.push(y) : d.splice(d.indexOf(y), 1), d.sort((k, _) => k - _);
        return;
      }
      d.value.findIndex((k) => k === y) === -1 ? d.value.push(y) : d.value.splice(d.value.indexOf(y), 1), d.value.sort((k, _) => k - _);
    };
    ps(() => {
      t(
        "update:monthDate",
        r.value.length ? r.value : null
      ), t(
        "update:weekOrdinal",
        s.value.length ? s.value : null
      ), t(
        "update:weekdays",
        a.value.length ? a.value : null
      ), t(
        "update:yearMonths",
        o.value.length ? o.value : null
      );
    });
    const l = re([
      { name: "星期日", id: It.Sunday },
      { name: "星期一", id: It.Monday },
      { name: "星期二", id: It.Tuesday },
      { name: "星期三", id: It.Wednesday },
      { name: "星期四", id: It.Thursday },
      { name: "星期五", id: It.Friday },
      { name: "星期六", id: It.Saturday },
      { name: "平日", id: It.Weekday },
      { name: "週末", id: It.Weekend }
    ]), u = re([
      { name: "第一週", id: un.First },
      { name: "第二週", id: un.Second },
      { name: "第三週", id: un.Third },
      { name: "第四週", id: un.Fourth },
      { name: "第五週", id: un.Fifth },
      { name: "最後一週", id: un.Last }
    ]), c = re([
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
    ]), v = re([
      {
        name: "一月",
        id: ct.January
      },
      {
        name: "二月",
        id: ct.February
      },
      {
        name: "三月",
        id: ct.March
      },
      {
        name: "四月",
        id: ct.April
      },
      {
        name: "五月",
        id: ct.May
      },
      {
        name: "六月",
        id: ct.June
      },
      {
        name: "七月",
        id: ct.July
      },
      {
        name: "八月",
        id: ct.August
      },
      {
        name: "九月",
        id: ct.September
      },
      {
        name: "十月",
        id: ct.October
      },
      {
        name: "十一月",
        id: ct.November
      },
      {
        name: "十二月",
        id: ct.December
      }
    ]), m = C(() => {
      if (n.type === Re.Week)
        return [
          {
            key: a,
            label: "weekdaysOrigin",
            options: l.value
          }
        ];
      if (n.type === Re.Month) {
        if (g.value.id === 0)
          return [
            {
              key: s,
              label: "weekOrdinalOrigin",
              options: u.value
            },
            {
              key: a,
              label: "weekdaysOrigin",
              options: l.value
            }
          ];
        if (g.value.id === 1)
          return [
            {
              key: r,
              label: "monthDateOrigin",
              options: c.value
            }
          ];
      }
      if (n.type === Re.Annual) {
        if (g.value.id === 0)
          return [
            {
              key: s,
              label: "weekOrdinalOrigin",
              options: u.value
            },
            {
              key: a,
              label: "weekdaysOrigin",
              options: l.value
            }
          ];
        if (g.value.id === 1)
          return [
            {
              key: r,
              label: "monthDateOrigin",
              options: c.value
            }
          ];
      }
    }), f = C(() => n.type === Re.Month || n.type === Re.Annual ? !0 : (r.value = [], s.value = [], a.value = [], o.value = [], !1)), w = re([
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
    ]), g = re(w.value[0]);
    return Te(g, (y) => {
      if (y.id === 0) {
        r.value = [];
        return;
      }
      if (y.id === 1) {
        s.value = [], a.value = [];
        return;
      }
    }), Te(
      () => n.type,
      (y) => {
        (y === Re.Month || y === Re.Annual) && (y != Re.Annual && (o.value = []), c.value && c.value.length > 0 ? g.value = w.value[1] : g.value = w.value[0]);
      },
      { immediate: !0 }
    ), oc(() => {
      r.value = [], s.value = [], a.value = [], o.value = [];
    }), (y, d) => (O(), T(ne, null, [
      y.type === p(Re).Annual ? (O(), T("div", wc, [
        (O(!0), T(ne, null, he(p(v), (b) => {
          var k;
          return O(), qe(lo, {
            key: b.id,
            checked: (k = p(o)) == null ? void 0 : k.includes(b.id),
            "onUpdate:checked": (_) => i(b.id, p(o), !0),
            fieldId: b.name,
            label: b.name
          }, null, 8, ["checked", "onUpdate:checked", "fieldId", "label"]);
        }), 128))
      ])) : Q("", !0),
      p(f) ? (O(), T("div", Oc, [
        $c,
        Pe(E("select", {
          class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
          "onUpdate:modelValue": d[0] || (d[0] = (b) => be(g) ? g.value = b : null)
        }, [
          (O(!0), T(ne, null, he(p(w), (b, k) => (O(), T("option", {
            key: k,
            value: b
          }, le(b.name), 9, kc))), 128))
        ], 512), [
          [Be, p(g)]
        ])
      ])) : Q("", !0),
      E("div", Nc, [
        (O(!0), T(ne, null, he(p(m), (b) => (O(), T("div", {
          class: "flex gap-1 flex-wrap",
          key: b
        }, [
          (O(!0), T(ne, null, he(b.options, (k) => {
            var _;
            return O(), qe(lo, {
              key: k.id,
              checked: (_ = b.key.value) == null ? void 0 : _.includes(k.id),
              "onUpdate:checked": (M) => i(k.id, b.key),
              fieldId: k.name,
              label: k.name
            }, null, 8, ["checked", "onUpdate:checked", "fieldId", "label"]);
          }), 128))
        ]))), 128))
      ])
    ], 64));
  }
});
var dt = "top", Ot = "bottom", $t = "right", ft = "left", ys = "auto", Fr = [dt, Ot, $t, ft], zn = "start", Ir = "end", Ic = "clippingParents", ll = "viewport", pr = "popper", Mc = "reference", uo = /* @__PURE__ */ Fr.reduce(function(e, t) {
  return e.concat([t + "-" + zn, t + "-" + Ir]);
}, []), ul = /* @__PURE__ */ [].concat(Fr, [ys]).reduce(function(e, t) {
  return e.concat([t, t + "-" + zn, t + "-" + Ir]);
}, []), Cc = "beforeRead", Pc = "read", Lc = "afterRead", Sc = "beforeMain", Ac = "main", xc = "afterMain", Rc = "beforeWrite", Fc = "write", Yc = "afterWrite", Vc = [Cc, Pc, Lc, Sc, Ac, xc, Rc, Fc, Yc];
function Wt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function ht(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function On(e) {
  var t = ht(e).Element;
  return e instanceof t || e instanceof Element;
}
function Et(e) {
  var t = ht(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Ds(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = ht(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Uc(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, s = t.attributes[n] || {}, a = t.elements[n];
    !Et(a) || !Wt(a) || (Object.assign(a.style, r), Object.keys(s).forEach(function(o) {
      var i = s[o];
      i === !1 ? a.removeAttribute(o) : a.setAttribute(o, i === !0 ? "" : i);
    }));
  });
}
function jc(e) {
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
      var s = t.elements[r], a = t.attributes[r] || {}, o = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), i = o.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !Et(s) || !Wt(s) || (Object.assign(s.style, i), Object.keys(a).forEach(function(l) {
        s.removeAttribute(l);
      }));
    });
  };
}
const Wc = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Uc,
  effect: jc,
  requires: ["computeStyles"]
};
function Ut(e) {
  return e.split("-")[0];
}
var wn = Math.max, na = Math.min, Xn = Math.round;
function Ba() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function cl() {
  return !/^((?!chrome|android).)*safari/i.test(Ba());
}
function Zn(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), s = 1, a = 1;
  t && Et(e) && (s = e.offsetWidth > 0 && Xn(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Xn(r.height) / e.offsetHeight || 1);
  var o = On(e) ? ht(e) : window, i = o.visualViewport, l = !cl() && n, u = (r.left + (l && i ? i.offsetLeft : 0)) / s, c = (r.top + (l && i ? i.offsetTop : 0)) / a, v = r.width / s, m = r.height / a;
  return {
    width: v,
    height: m,
    top: c,
    right: u + v,
    bottom: c + m,
    left: u,
    x: u,
    y: c
  };
}
function Es(e) {
  var t = Zn(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function dl(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Ds(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Zt(e) {
  return ht(e).getComputedStyle(e);
}
function Hc(e) {
  return ["table", "td", "th"].indexOf(Wt(e)) >= 0;
}
function gn(e) {
  return ((On(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Da(e) {
  return Wt(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Ds(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    gn(e)
  );
}
function co(e) {
  return !Et(e) || // https://github.com/popperjs/popper-core/issues/837
  Zt(e).position === "fixed" ? null : e.offsetParent;
}
function Bc(e) {
  var t = /firefox/i.test(Ba()), n = /Trident/i.test(Ba());
  if (n && Et(e)) {
    var r = Zt(e);
    if (r.position === "fixed")
      return null;
  }
  var s = Da(e);
  for (Ds(s) && (s = s.host); Et(s) && ["html", "body"].indexOf(Wt(s)) < 0; ) {
    var a = Zt(s);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function Yr(e) {
  for (var t = ht(e), n = co(e); n && Hc(n) && Zt(n).position === "static"; )
    n = co(n);
  return n && (Wt(n) === "html" || Wt(n) === "body" && Zt(n).position === "static") ? t : n || Bc(e) || t;
}
function ws(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Or(e, t, n) {
  return wn(e, na(t, n));
}
function Gc(e, t, n) {
  var r = Or(e, t, n);
  return r > n ? n : r;
}
function fl() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function vl(e) {
  return Object.assign({}, fl(), e);
}
function ml(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var Kc = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, vl(typeof t != "number" ? t : ml(t, Fr));
};
function qc(e) {
  var t, n = e.state, r = e.name, s = e.options, a = n.elements.arrow, o = n.modifiersData.popperOffsets, i = Ut(n.placement), l = ws(i), u = [ft, $t].indexOf(i) >= 0, c = u ? "height" : "width";
  if (!(!a || !o)) {
    var v = Kc(s.padding, n), m = Es(a), f = l === "y" ? dt : ft, w = l === "y" ? Ot : $t, g = n.rects.reference[c] + n.rects.reference[l] - o[l] - n.rects.popper[c], y = o[l] - n.rects.reference[l], d = Yr(a), b = d ? l === "y" ? d.clientHeight || 0 : d.clientWidth || 0 : 0, k = g / 2 - y / 2, _ = v[f], M = b - m[c] - v[w], N = b / 2 - m[c] / 2 + k, A = Or(_, N, M), P = l;
    n.modifiersData[r] = (t = {}, t[P] = A, t.centerOffset = A - N, t);
  }
}
function zc(e) {
  var t = e.state, n = e.options, r = n.element, s = r === void 0 ? "[data-popper-arrow]" : r;
  s != null && (typeof s == "string" && (s = t.elements.popper.querySelector(s), !s) || dl(t.elements.popper, s) && (t.elements.arrow = s));
}
const Xc = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: qc,
  effect: zc,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Jn(e) {
  return e.split("-")[1];
}
var Zc = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Jc(e, t) {
  var n = e.x, r = e.y, s = t.devicePixelRatio || 1;
  return {
    x: Xn(n * s) / s || 0,
    y: Xn(r * s) / s || 0
  };
}
function fo(e) {
  var t, n = e.popper, r = e.popperRect, s = e.placement, a = e.variation, o = e.offsets, i = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, v = e.isFixed, m = o.x, f = m === void 0 ? 0 : m, w = o.y, g = w === void 0 ? 0 : w, y = typeof c == "function" ? c({
    x: f,
    y: g
  }) : {
    x: f,
    y: g
  };
  f = y.x, g = y.y;
  var d = o.hasOwnProperty("x"), b = o.hasOwnProperty("y"), k = ft, _ = dt, M = window;
  if (u) {
    var N = Yr(n), A = "clientHeight", P = "clientWidth";
    if (N === ht(n) && (N = gn(n), Zt(N).position !== "static" && i === "absolute" && (A = "scrollHeight", P = "scrollWidth")), N = N, s === dt || (s === ft || s === $t) && a === Ir) {
      _ = Ot;
      var L = v && N === M && M.visualViewport ? M.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        N[A]
      );
      g -= L - r.height, g *= l ? 1 : -1;
    }
    if (s === ft || (s === dt || s === Ot) && a === Ir) {
      k = $t;
      var x = v && N === M && M.visualViewport ? M.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        N[P]
      );
      f -= x - r.width, f *= l ? 1 : -1;
    }
  }
  var j = Object.assign({
    position: i
  }, u && Zc), F = c === !0 ? Jc({
    x: f,
    y: g
  }, ht(n)) : {
    x: f,
    y: g
  };
  if (f = F.x, g = F.y, l) {
    var X;
    return Object.assign({}, j, (X = {}, X[_] = b ? "0" : "", X[k] = d ? "0" : "", X.transform = (M.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + g + "px)" : "translate3d(" + f + "px, " + g + "px, 0)", X));
  }
  return Object.assign({}, j, (t = {}, t[_] = b ? g + "px" : "", t[k] = d ? f + "px" : "", t.transform = "", t));
}
function Qc(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, s = r === void 0 ? !0 : r, a = n.adaptive, o = a === void 0 ? !0 : a, i = n.roundOffsets, l = i === void 0 ? !0 : i, u = {
    placement: Ut(t.placement),
    variation: Jn(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: s,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, fo(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: o,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, fo(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const ed = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Qc,
  data: {}
};
var Hr = {
  passive: !0
};
function td(e) {
  var t = e.state, n = e.instance, r = e.options, s = r.scroll, a = s === void 0 ? !0 : s, o = r.resize, i = o === void 0 ? !0 : o, l = ht(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(c) {
    c.addEventListener("scroll", n.update, Hr);
  }), i && l.addEventListener("resize", n.update, Hr), function() {
    a && u.forEach(function(c) {
      c.removeEventListener("scroll", n.update, Hr);
    }), i && l.removeEventListener("resize", n.update, Hr);
  };
}
const nd = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: td,
  data: {}
};
var rd = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Xr(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return rd[t];
  });
}
var ad = {
  start: "end",
  end: "start"
};
function vo(e) {
  return e.replace(/start|end/g, function(t) {
    return ad[t];
  });
}
function Os(e) {
  var t = ht(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function $s(e) {
  return Zn(gn(e)).left + Os(e).scrollLeft;
}
function sd(e, t) {
  var n = ht(e), r = gn(e), s = n.visualViewport, a = r.clientWidth, o = r.clientHeight, i = 0, l = 0;
  if (s) {
    a = s.width, o = s.height;
    var u = cl();
    (u || !u && t === "fixed") && (i = s.offsetLeft, l = s.offsetTop);
  }
  return {
    width: a,
    height: o,
    x: i + $s(e),
    y: l
  };
}
function od(e) {
  var t, n = gn(e), r = Os(e), s = (t = e.ownerDocument) == null ? void 0 : t.body, a = wn(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), o = wn(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), i = -r.scrollLeft + $s(e), l = -r.scrollTop;
  return Zt(s || n).direction === "rtl" && (i += wn(n.clientWidth, s ? s.clientWidth : 0) - a), {
    width: a,
    height: o,
    x: i,
    y: l
  };
}
function ks(e) {
  var t = Zt(e), n = t.overflow, r = t.overflowX, s = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + s + r);
}
function pl(e) {
  return ["html", "body", "#document"].indexOf(Wt(e)) >= 0 ? e.ownerDocument.body : Et(e) && ks(e) ? e : pl(Da(e));
}
function $r(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = pl(e), s = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = ht(r), o = s ? [a].concat(a.visualViewport || [], ks(r) ? r : []) : r, i = t.concat(o);
  return s ? i : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    i.concat($r(Da(o)))
  );
}
function Ga(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function id(e, t) {
  var n = Zn(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function mo(e, t, n) {
  return t === ll ? Ga(sd(e, n)) : On(t) ? id(t, n) : Ga(od(gn(e)));
}
function ld(e) {
  var t = $r(Da(e)), n = ["absolute", "fixed"].indexOf(Zt(e).position) >= 0, r = n && Et(e) ? Yr(e) : e;
  return On(r) ? t.filter(function(s) {
    return On(s) && dl(s, r) && Wt(s) !== "body";
  }) : [];
}
function ud(e, t, n, r) {
  var s = t === "clippingParents" ? ld(e) : [].concat(t), a = [].concat(s, [n]), o = a[0], i = a.reduce(function(l, u) {
    var c = mo(e, u, r);
    return l.top = wn(c.top, l.top), l.right = na(c.right, l.right), l.bottom = na(c.bottom, l.bottom), l.left = wn(c.left, l.left), l;
  }, mo(e, o, r));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function hl(e) {
  var t = e.reference, n = e.element, r = e.placement, s = r ? Ut(r) : null, a = r ? Jn(r) : null, o = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2, l;
  switch (s) {
    case dt:
      l = {
        x: o,
        y: t.y - n.height
      };
      break;
    case Ot:
      l = {
        x: o,
        y: t.y + t.height
      };
      break;
    case $t:
      l = {
        x: t.x + t.width,
        y: i
      };
      break;
    case ft:
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
  var u = s ? ws(s) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (a) {
      case zn:
        l[u] = l[u] - (t[c] / 2 - n[c] / 2);
        break;
      case Ir:
        l[u] = l[u] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return l;
}
function Mr(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = r === void 0 ? e.placement : r, a = n.strategy, o = a === void 0 ? e.strategy : a, i = n.boundary, l = i === void 0 ? Ic : i, u = n.rootBoundary, c = u === void 0 ? ll : u, v = n.elementContext, m = v === void 0 ? pr : v, f = n.altBoundary, w = f === void 0 ? !1 : f, g = n.padding, y = g === void 0 ? 0 : g, d = vl(typeof y != "number" ? y : ml(y, Fr)), b = m === pr ? Mc : pr, k = e.rects.popper, _ = e.elements[w ? b : m], M = ud(On(_) ? _ : _.contextElement || gn(e.elements.popper), l, c, o), N = Zn(e.elements.reference), A = hl({
    reference: N,
    element: k,
    strategy: "absolute",
    placement: s
  }), P = Ga(Object.assign({}, k, A)), L = m === pr ? P : N, x = {
    top: M.top - L.top + d.top,
    bottom: L.bottom - M.bottom + d.bottom,
    left: M.left - L.left + d.left,
    right: L.right - M.right + d.right
  }, j = e.modifiersData.offset;
  if (m === pr && j) {
    var F = j[s];
    Object.keys(x).forEach(function(X) {
      var K = [$t, Ot].indexOf(X) >= 0 ? 1 : -1, U = [dt, Ot].indexOf(X) >= 0 ? "y" : "x";
      x[X] += F[U] * K;
    });
  }
  return x;
}
function cd(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = n.boundary, a = n.rootBoundary, o = n.padding, i = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? ul : l, c = Jn(r), v = c ? i ? uo : uo.filter(function(w) {
    return Jn(w) === c;
  }) : Fr, m = v.filter(function(w) {
    return u.indexOf(w) >= 0;
  });
  m.length === 0 && (m = v);
  var f = m.reduce(function(w, g) {
    return w[g] = Mr(e, {
      placement: g,
      boundary: s,
      rootBoundary: a,
      padding: o
    })[Ut(g)], w;
  }, {});
  return Object.keys(f).sort(function(w, g) {
    return f[w] - f[g];
  });
}
function dd(e) {
  if (Ut(e) === ys)
    return [];
  var t = Xr(e);
  return [vo(e), t, vo(t)];
}
function fd(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var s = n.mainAxis, a = s === void 0 ? !0 : s, o = n.altAxis, i = o === void 0 ? !0 : o, l = n.fallbackPlacements, u = n.padding, c = n.boundary, v = n.rootBoundary, m = n.altBoundary, f = n.flipVariations, w = f === void 0 ? !0 : f, g = n.allowedAutoPlacements, y = t.options.placement, d = Ut(y), b = d === y, k = l || (b || !w ? [Xr(y)] : dd(y)), _ = [y].concat(k).reduce(function(te, Ee) {
      return te.concat(Ut(Ee) === ys ? cd(t, {
        placement: Ee,
        boundary: c,
        rootBoundary: v,
        padding: u,
        flipVariations: w,
        allowedAutoPlacements: g
      }) : Ee);
    }, []), M = t.rects.reference, N = t.rects.popper, A = /* @__PURE__ */ new Map(), P = !0, L = _[0], x = 0; x < _.length; x++) {
      var j = _[x], F = Ut(j), X = Jn(j) === zn, K = [dt, Ot].indexOf(F) >= 0, U = K ? "width" : "height", Y = Mr(t, {
        placement: j,
        boundary: c,
        rootBoundary: v,
        altBoundary: m,
        padding: u
      }), ee = K ? X ? $t : ft : X ? Ot : dt;
      M[U] > N[U] && (ee = Xr(ee));
      var B = Xr(ee), V = [];
      if (a && V.push(Y[F] <= 0), i && V.push(Y[ee] <= 0, Y[B] <= 0), V.every(function(te) {
        return te;
      })) {
        L = j, P = !1;
        break;
      }
      A.set(j, V);
    }
    if (P)
      for (var $ = w ? 3 : 1, q = function(Ee) {
        var ge = _.find(function(Ce) {
          var Ne = A.get(Ce);
          if (Ne)
            return Ne.slice(0, Ee).every(function(De) {
              return De;
            });
        });
        if (ge)
          return L = ge, "break";
      }, pe = $; pe > 0; pe--) {
        var $e = q(pe);
        if ($e === "break")
          break;
      }
    t.placement !== L && (t.modifiersData[r]._skip = !0, t.placement = L, t.reset = !0);
  }
}
const vd = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: fd,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function po(e, t, n) {
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
function ho(e) {
  return [dt, $t, Ot, ft].some(function(t) {
    return e[t] >= 0;
  });
}
function md(e) {
  var t = e.state, n = e.name, r = t.rects.reference, s = t.rects.popper, a = t.modifiersData.preventOverflow, o = Mr(t, {
    elementContext: "reference"
  }), i = Mr(t, {
    altBoundary: !0
  }), l = po(o, r), u = po(i, s, a), c = ho(l), v = ho(u);
  t.modifiersData[n] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: u,
    isReferenceHidden: c,
    hasPopperEscaped: v
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": c,
    "data-popper-escaped": v
  });
}
const pd = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: md
};
function hd(e, t, n) {
  var r = Ut(e), s = [ft, dt].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, o = a[0], i = a[1];
  return o = o || 0, i = (i || 0) * s, [ft, $t].indexOf(r) >= 0 ? {
    x: i,
    y: o
  } : {
    x: o,
    y: i
  };
}
function gd(e) {
  var t = e.state, n = e.options, r = e.name, s = n.offset, a = s === void 0 ? [0, 0] : s, o = ul.reduce(function(c, v) {
    return c[v] = hd(v, t.rects, a), c;
  }, {}), i = o[t.placement], l = i.x, u = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = o;
}
const _d = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: gd
};
function bd(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = hl({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const yd = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: bd,
  data: {}
};
function Dd(e) {
  return e === "x" ? "y" : "x";
}
function Ed(e) {
  var t = e.state, n = e.options, r = e.name, s = n.mainAxis, a = s === void 0 ? !0 : s, o = n.altAxis, i = o === void 0 ? !1 : o, l = n.boundary, u = n.rootBoundary, c = n.altBoundary, v = n.padding, m = n.tether, f = m === void 0 ? !0 : m, w = n.tetherOffset, g = w === void 0 ? 0 : w, y = Mr(t, {
    boundary: l,
    rootBoundary: u,
    padding: v,
    altBoundary: c
  }), d = Ut(t.placement), b = Jn(t.placement), k = !b, _ = ws(d), M = Dd(_), N = t.modifiersData.popperOffsets, A = t.rects.reference, P = t.rects.popper, L = typeof g == "function" ? g(Object.assign({}, t.rects, {
    placement: t.placement
  })) : g, x = typeof L == "number" ? {
    mainAxis: L,
    altAxis: L
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, L), j = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, F = {
    x: 0,
    y: 0
  };
  if (N) {
    if (a) {
      var X, K = _ === "y" ? dt : ft, U = _ === "y" ? Ot : $t, Y = _ === "y" ? "height" : "width", ee = N[_], B = ee + y[K], V = ee - y[U], $ = f ? -P[Y] / 2 : 0, q = b === zn ? A[Y] : P[Y], pe = b === zn ? -P[Y] : -A[Y], $e = t.elements.arrow, te = f && $e ? Es($e) : {
        width: 0,
        height: 0
      }, Ee = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : fl(), ge = Ee[K], Ce = Ee[U], Ne = Or(0, A[Y], te[Y]), De = k ? A[Y] / 2 - $ - Ne - ge - x.mainAxis : q - Ne - ge - x.mainAxis, Ve = k ? -A[Y] / 2 + $ + Ne + Ce + x.mainAxis : pe + Ne + Ce + x.mainAxis, Ye = t.elements.arrow && Yr(t.elements.arrow), Je = Ye ? _ === "y" ? Ye.clientTop || 0 : Ye.clientLeft || 0 : 0, D = (X = j == null ? void 0 : j[_]) != null ? X : 0, h = ee + De - D - Je, S = ee + Ve - D, J = Or(f ? na(B, h) : B, ee, f ? wn(V, S) : V);
      N[_] = J, F[_] = J - ee;
    }
    if (i) {
      var ie, _e = _ === "x" ? dt : ft, nt = _ === "x" ? Ot : $t, He = N[M], gt = M === "y" ? "height" : "width", At = He + y[_e], Ie = He - y[nt], R = [dt, ft].indexOf(d) !== -1, H = (ie = j == null ? void 0 : j[M]) != null ? ie : 0, Ue = R ? At : He - A[gt] - P[gt] - H + x.altAxis, je = R ? He + A[gt] + P[gt] - H - x.altAxis : Ie, xt = f && R ? Gc(Ue, He, je) : Or(f ? Ue : At, He, f ? je : Ie);
      N[M] = xt, F[M] = xt - He;
    }
    t.modifiersData[r] = F;
  }
}
const wd = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Ed,
  requiresIfExists: ["offset"]
};
function Od(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function $d(e) {
  return e === ht(e) || !Et(e) ? Os(e) : Od(e);
}
function kd(e) {
  var t = e.getBoundingClientRect(), n = Xn(t.width) / e.offsetWidth || 1, r = Xn(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Nd(e, t, n) {
  n === void 0 && (n = !1);
  var r = Et(t), s = Et(t) && kd(t), a = gn(t), o = Zn(e, s, n), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((Wt(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  ks(a)) && (i = $d(t)), Et(t) ? (l = Zn(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = $s(a))), {
    x: o.left + i.scrollLeft - l.x,
    y: o.top + i.scrollTop - l.y,
    width: o.width,
    height: o.height
  };
}
function Td(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function s(a) {
    n.add(a.name);
    var o = [].concat(a.requires || [], a.requiresIfExists || []);
    o.forEach(function(i) {
      if (!n.has(i)) {
        var l = t.get(i);
        l && s(l);
      }
    }), r.push(a);
  }
  return e.forEach(function(a) {
    n.has(a.name) || s(a);
  }), r;
}
function Id(e) {
  var t = Td(e);
  return Vc.reduce(function(n, r) {
    return n.concat(t.filter(function(s) {
      return s.phase === r;
    }));
  }, []);
}
function Md(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Cd(e) {
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
var go = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function _o() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Pd(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, s = t.defaultOptions, a = s === void 0 ? go : s;
  return function(i, l, u) {
    u === void 0 && (u = a);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, go, a),
      modifiersData: {},
      elements: {
        reference: i,
        popper: l
      },
      attributes: {},
      styles: {}
    }, v = [], m = !1, f = {
      state: c,
      setOptions: function(d) {
        var b = typeof d == "function" ? d(c.options) : d;
        g(), c.options = Object.assign({}, a, c.options, b), c.scrollParents = {
          reference: On(i) ? $r(i) : i.contextElement ? $r(i.contextElement) : [],
          popper: $r(l)
        };
        var k = Id(Cd([].concat(r, c.options.modifiers)));
        return c.orderedModifiers = k.filter(function(_) {
          return _.enabled;
        }), w(), f.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!m) {
          var d = c.elements, b = d.reference, k = d.popper;
          if (_o(b, k)) {
            c.rects = {
              reference: Nd(b, Yr(k), c.options.strategy === "fixed"),
              popper: Es(k)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(x) {
              return c.modifiersData[x.name] = Object.assign({}, x.data);
            });
            for (var _ = 0; _ < c.orderedModifiers.length; _++) {
              if (c.reset === !0) {
                c.reset = !1, _ = -1;
                continue;
              }
              var M = c.orderedModifiers[_], N = M.fn, A = M.options, P = A === void 0 ? {} : A, L = M.name;
              typeof N == "function" && (c = N({
                state: c,
                options: P,
                name: L,
                instance: f
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Md(function() {
        return new Promise(function(y) {
          f.forceUpdate(), y(c);
        });
      }),
      destroy: function() {
        g(), m = !0;
      }
    };
    if (!_o(i, l))
      return f;
    f.setOptions(u).then(function(y) {
      !m && u.onFirstUpdate && u.onFirstUpdate(y);
    });
    function w() {
      c.orderedModifiers.forEach(function(y) {
        var d = y.name, b = y.options, k = b === void 0 ? {} : b, _ = y.effect;
        if (typeof _ == "function") {
          var M = _({
            state: c,
            name: d,
            instance: f,
            options: k
          }), N = function() {
          };
          v.push(M || N);
        }
      });
    }
    function g() {
      v.forEach(function(y) {
        return y();
      }), v = [];
    }
    return f;
  };
}
var Ld = [nd, yd, ed, Wc, _d, vd, wd, Xc, pd], Sd = /* @__PURE__ */ Pd({
  defaultModifiers: Ld
}), Ad = Object.defineProperty, xd = (e, t, n) => t in e ? Ad(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, oe = (e, t, n) => (xd(e, typeof t != "symbol" ? t + "" : t, n), n);
const en = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
  return n;
}, Rd = {}, Fd = {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  viewBox: "0 0 24 24"
}, Yd = /* @__PURE__ */ E("polyline", { points: "9 18 15 12 9 6" }, null, -1), Vd = [
  Yd
];
function Ud(e, t) {
  return O(), T("svg", Fd, Vd);
}
const jd = /* @__PURE__ */ en(Rd, [["render", Ud]]), Wd = {}, Hd = {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  viewBox: "0 0 24 24"
}, Bd = /* @__PURE__ */ E("polyline", { points: "15 18 9 12 15 6" }, null, -1), Gd = [
  Bd
];
function Kd(e, t) {
  return O(), T("svg", Hd, Gd);
}
const qd = /* @__PURE__ */ en(Wd, [["render", Kd]]), zd = {}, Xd = {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  viewBox: "0 0 24 24"
}, Zd = /* @__PURE__ */ E("polyline", { points: "6 9 12 15 18 9" }, null, -1), Jd = [
  Zd
];
function Qd(e, t) {
  return O(), T("svg", Xd, Jd);
}
const ef = /* @__PURE__ */ en(zd, [["render", Qd]]), tf = {}, nf = {
  fill: "none",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  viewBox: "0 0 24 24"
}, rf = /* @__PURE__ */ E("path", { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" }, null, -1), af = [
  rf
];
function sf(e, t) {
  return O(), T("svg", nf, af);
}
const of = /* @__PURE__ */ en(tf, [["render", sf]]), lf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IconChevronDown: ef,
  IconChevronLeft: qd,
  IconChevronRight: jd,
  IconClock: of
}, Symbol.toStringTag, { value: "Module" })), Qn = /* @__PURE__ */ Se({
  __name: "BaseIcon",
  props: {
    name: { type: String, required: !0 },
    width: { type: String },
    height: { type: String },
    size: { type: String, default: "26" },
    viewBox: { type: String }
  },
  setup(e) {
    const t = e, n = C(() => t.width || t.size), r = C(() => t.height || t.size), s = C(() => lf[`Icon${t.name}`]);
    return (a, o) => (O(), qe(rl(p(s)), {
      width: p(n),
      height: p(r),
      class: "vc-base-icon"
    }, null, 8, ["width", "height"]));
  }
});
function gl() {
  return typeof window < "u";
}
function uf(e) {
  return gl() && e in window;
}
function cf(e) {
  const t = re(!1), n = C(() => t.value ? "dark" : "light");
  let r, s;
  function a(f) {
    t.value = f.matches;
  }
  function o() {
    uf("matchMedia") && (r = window.matchMedia("(prefers-color-scheme: dark)"), r.addEventListener("change", a), t.value = r.matches);
  }
  function i() {
    const { selector: f = ":root", darkClass: w = "dark" } = e.value, g = document.querySelector(f);
    t.value = g.classList.contains(w);
  }
  function l(f) {
    const { selector: w = ":root", darkClass: g = "dark" } = f;
    if (gl() && w && g) {
      const y = document.querySelector(w);
      y && (s = new MutationObserver(i), s.observe(y, {
        attributes: !0,
        attributeFilter: ["class"]
      }), t.value = y.classList.contains(g));
    }
  }
  function u() {
    v();
    const f = typeof e.value;
    f === "string" && e.value.toLowerCase() === "system" ? o() : f === "object" ? l(e.value) : t.value = !!e.value;
  }
  const c = Te(() => e.value, () => u(), {
    immediate: !0
  });
  function v() {
    r && (r.removeEventListener("change", a), r = void 0), s && (s.disconnect(), s = void 0);
  }
  function m() {
    v(), c();
  }
  return xr(() => m()), {
    isDark: t,
    displayMode: n,
    cleanup: m
  };
}
var Br = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function df(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ff = typeof Br == "object" && Br && Br.Object === Object && Br, _l = ff, vf = _l, mf = typeof self == "object" && self && self.Object === Object && self, pf = vf || mf || Function("return this")(), Bt = pf, hf = Bt, gf = hf.Symbol, Ea = gf, bo = Ea, bl = Object.prototype, _f = bl.hasOwnProperty, bf = bl.toString, hr = bo ? bo.toStringTag : void 0;
function yf(e) {
  var t = _f.call(e, hr), n = e[hr];
  try {
    e[hr] = void 0;
    var r = !0;
  } catch {
  }
  var s = bf.call(e);
  return r && (t ? e[hr] = n : delete e[hr]), s;
}
var Df = yf, Ef = Object.prototype, wf = Ef.toString;
function Of(e) {
  return wf.call(e);
}
var $f = Of, yo = Ea, kf = Df, Nf = $f, Tf = "[object Null]", If = "[object Undefined]", Do = yo ? yo.toStringTag : void 0;
function Mf(e) {
  return e == null ? e === void 0 ? If : Tf : Do && Do in Object(e) ? kf(e) : Nf(e);
}
var Gt = Mf;
function Cf(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var tn = Cf, Pf = Gt, Lf = tn, Sf = "[object AsyncFunction]", Af = "[object Function]", xf = "[object GeneratorFunction]", Rf = "[object Proxy]";
function Ff(e) {
  if (!Lf(e))
    return !1;
  var t = Pf(e);
  return t == Af || t == xf || t == Sf || t == Rf;
}
var Mn = Ff, Yf = Array.isArray, Lt = Yf;
function Vf(e) {
  return e != null && typeof e == "object";
}
var St = Vf, Uf = Gt, jf = Lt, Wf = St, Hf = "[object String]";
function Bf(e) {
  return typeof e == "string" || !jf(e) && Wf(e) && Uf(e) == Hf;
}
var Yt = Bf, Gf = Gt, Kf = St, qf = "[object Boolean]";
function zf(e) {
  return e === !0 || e === !1 || Kf(e) && Gf(e) == qf;
}
var Xf = zf, Zf = Gt, Jf = St, Qf = "[object Number]";
function ev(e) {
  return typeof e == "number" || Jf(e) && Zf(e) == Qf;
}
var Pt = ev, tv = Gt, nv = St, rv = "[object Date]";
function av(e) {
  return nv(e) && tv(e) == rv;
}
var sv = av;
function ov(e) {
  return function(t) {
    return e(t);
  };
}
var yl = ov, Cr = {}, iv = {
  get exports() {
    return Cr;
  },
  set exports(e) {
    Cr = e;
  }
};
(function(e, t) {
  var n = _l, r = t && !t.nodeType && t, s = r && !0 && e && !e.nodeType && e, a = s && s.exports === r, o = a && n.process, i = function() {
    try {
      var l = s && s.require && s.require("util").types;
      return l || o && o.binding && o.binding("util");
    } catch {
    }
  }();
  e.exports = i;
})(iv, Cr);
var lv = sv, uv = yl, Eo = Cr, wo = Eo && Eo.isDate, cv = wo ? uv(wo) : lv, dv = cv, fv = Gt, vv = St, mv = "[object Symbol]";
function pv(e) {
  return typeof e == "symbol" || vv(e) && fv(e) == mv;
}
var Ns = pv, hv = Lt, gv = Ns, _v = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, bv = /^\w*$/;
function yv(e, t) {
  if (hv(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || gv(e) ? !0 : bv.test(e) || !_v.test(e) || t != null && e in Object(t);
}
var Ts = yv, Dv = Bt, Ev = Dv["__core-js_shared__"], wv = Ev, Ra = wv, Oo = function() {
  var e = /[^.]+$/.exec(Ra && Ra.keys && Ra.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Ov(e) {
  return !!Oo && Oo in e;
}
var $v = Ov, kv = Function.prototype, Nv = kv.toString;
function Tv(e) {
  if (e != null) {
    try {
      return Nv.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Dl = Tv, Iv = Mn, Mv = $v, Cv = tn, Pv = Dl, Lv = /[\\^$.*+?()[\]{}|]/g, Sv = /^\[object .+?Constructor\]$/, Av = Function.prototype, xv = Object.prototype, Rv = Av.toString, Fv = xv.hasOwnProperty, Yv = RegExp(
  "^" + Rv.call(Fv).replace(Lv, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Vv(e) {
  if (!Cv(e) || Mv(e))
    return !1;
  var t = Iv(e) ? Yv : Sv;
  return t.test(Pv(e));
}
var Uv = Vv;
function jv(e, t) {
  return e == null ? void 0 : e[t];
}
var Wv = jv, Hv = Uv, Bv = Wv;
function Gv(e, t) {
  var n = Bv(e, t);
  return Hv(n) ? n : void 0;
}
var Cn = Gv, Kv = Cn, qv = Kv(Object, "create"), wa = qv, $o = wa;
function zv() {
  this.__data__ = $o ? $o(null) : {}, this.size = 0;
}
var Xv = zv;
function Zv(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Jv = Zv, Qv = wa, em = "__lodash_hash_undefined__", tm = Object.prototype, nm = tm.hasOwnProperty;
function rm(e) {
  var t = this.__data__;
  if (Qv) {
    var n = t[e];
    return n === em ? void 0 : n;
  }
  return nm.call(t, e) ? t[e] : void 0;
}
var am = rm, sm = wa, om = Object.prototype, im = om.hasOwnProperty;
function lm(e) {
  var t = this.__data__;
  return sm ? t[e] !== void 0 : im.call(t, e);
}
var um = lm, cm = wa, dm = "__lodash_hash_undefined__";
function fm(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = cm && t === void 0 ? dm : t, this;
}
var vm = fm, mm = Xv, pm = Jv, hm = am, gm = um, _m = vm;
function ar(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ar.prototype.clear = mm;
ar.prototype.delete = pm;
ar.prototype.get = hm;
ar.prototype.has = gm;
ar.prototype.set = _m;
var bm = ar;
function ym() {
  this.__data__ = [], this.size = 0;
}
var Dm = ym;
function Em(e, t) {
  return e === t || e !== e && t !== t;
}
var sr = Em, wm = sr;
function Om(e, t) {
  for (var n = e.length; n--; )
    if (wm(e[n][0], t))
      return n;
  return -1;
}
var Oa = Om, $m = Oa, km = Array.prototype, Nm = km.splice;
function Tm(e) {
  var t = this.__data__, n = $m(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : Nm.call(t, n, 1), --this.size, !0;
}
var Im = Tm, Mm = Oa;
function Cm(e) {
  var t = this.__data__, n = Mm(t, e);
  return n < 0 ? void 0 : t[n][1];
}
var Pm = Cm, Lm = Oa;
function Sm(e) {
  return Lm(this.__data__, e) > -1;
}
var Am = Sm, xm = Oa;
function Rm(e, t) {
  var n = this.__data__, r = xm(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
var Fm = Rm, Ym = Dm, Vm = Im, Um = Pm, jm = Am, Wm = Fm;
function or(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
or.prototype.clear = Ym;
or.prototype.delete = Vm;
or.prototype.get = Um;
or.prototype.has = jm;
or.prototype.set = Wm;
var $a = or, Hm = Cn, Bm = Bt, Gm = Hm(Bm, "Map"), Is = Gm, ko = bm, Km = $a, qm = Is;
function zm() {
  this.size = 0, this.__data__ = {
    hash: new ko(),
    map: new (qm || Km)(),
    string: new ko()
  };
}
var Xm = zm;
function Zm(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var Jm = Zm, Qm = Jm;
function ep(e, t) {
  var n = e.__data__;
  return Qm(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
var ka = ep, tp = ka;
function np(e) {
  var t = tp(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var rp = np, ap = ka;
function sp(e) {
  return ap(this, e).get(e);
}
var op = sp, ip = ka;
function lp(e) {
  return ip(this, e).has(e);
}
var up = lp, cp = ka;
function dp(e, t) {
  var n = cp(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
var fp = dp, vp = Xm, mp = rp, pp = op, hp = up, gp = fp;
function ir(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ir.prototype.clear = vp;
ir.prototype.delete = mp;
ir.prototype.get = pp;
ir.prototype.has = hp;
ir.prototype.set = gp;
var Ms = ir, El = Ms, _p = "Expected a function";
function Cs(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(_p);
  var n = function() {
    var r = arguments, s = t ? t.apply(this, r) : r[0], a = n.cache;
    if (a.has(s))
      return a.get(s);
    var o = e.apply(this, r);
    return n.cache = a.set(s, o) || a, o;
  };
  return n.cache = new (Cs.Cache || El)(), n;
}
Cs.Cache = El;
var bp = Cs, yp = bp, Dp = 500;
function Ep(e) {
  var t = yp(e, function(r) {
    return n.size === Dp && n.clear(), r;
  }), n = t.cache;
  return t;
}
var wp = Ep, Op = wp, $p = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, kp = /\\(\\)?/g, Np = Op(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace($p, function(n, r, s, a) {
    t.push(s ? a.replace(kp, "$1") : r || n);
  }), t;
}), Tp = Np;
function Ip(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, s = Array(r); ++n < r; )
    s[n] = t(e[n], n, e);
  return s;
}
var Mp = Ip, No = Ea, Cp = Mp, Pp = Lt, Lp = Ns, Sp = 1 / 0, To = No ? No.prototype : void 0, Io = To ? To.toString : void 0;
function wl(e) {
  if (typeof e == "string")
    return e;
  if (Pp(e))
    return Cp(e, wl) + "";
  if (Lp(e))
    return Io ? Io.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Sp ? "-0" : t;
}
var Ap = wl, xp = Ap;
function Rp(e) {
  return e == null ? "" : xp(e);
}
var Fp = Rp, Yp = Lt, Vp = Ts, Up = Tp, jp = Fp;
function Wp(e, t) {
  return Yp(e) ? e : Vp(e, t) ? [e] : Up(jp(e));
}
var Ol = Wp, Hp = Ns, Bp = 1 / 0;
function Gp(e) {
  if (typeof e == "string" || Hp(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Bp ? "-0" : t;
}
var Na = Gp, Kp = Ol, qp = Na;
function zp(e, t) {
  t = Kp(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[qp(t[n++])];
  return n && n == r ? e : void 0;
}
var $l = zp, Xp = $l;
function Zp(e, t, n) {
  var r = e == null ? void 0 : Xp(e, t);
  return r === void 0 ? n : r;
}
var Dn = Zp, Jp = Cn, Qp = function() {
  try {
    var e = Jp(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), kl = Qp, Mo = kl;
function eh(e, t, n) {
  t == "__proto__" && Mo ? Mo(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
var Ta = eh, th = Ta, nh = sr, rh = Object.prototype, ah = rh.hasOwnProperty;
function sh(e, t, n) {
  var r = e[t];
  (!(ah.call(e, t) && nh(r, n)) || n === void 0 && !(t in e)) && th(e, t, n);
}
var oh = sh, ih = 9007199254740991, lh = /^(?:0|[1-9]\d*)$/;
function uh(e, t) {
  var n = typeof e;
  return t = t ?? ih, !!t && (n == "number" || n != "symbol" && lh.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Ps = uh;
function ch(e) {
  return function(t, n, r) {
    for (var s = -1, a = Object(t), o = r(t), i = o.length; i--; ) {
      var l = o[e ? i : ++s];
      if (n(a[l], l, a) === !1)
        break;
    }
    return t;
  };
}
var dh = ch, fh = dh, vh = fh(), Nl = vh;
function mh(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var ph = mh, hh = Gt, gh = St, _h = "[object Arguments]";
function bh(e) {
  return gh(e) && hh(e) == _h;
}
var yh = bh, Co = yh, Dh = St, Tl = Object.prototype, Eh = Tl.hasOwnProperty, wh = Tl.propertyIsEnumerable, Oh = Co(function() {
  return arguments;
}()) ? Co : function(e) {
  return Dh(e) && Eh.call(e, "callee") && !wh.call(e, "callee");
}, Ls = Oh, er = {}, $h = {
  get exports() {
    return er;
  },
  set exports(e) {
    er = e;
  }
};
function kh() {
  return !1;
}
var Nh = kh;
(function(e, t) {
  var n = Bt, r = Nh, s = t && !t.nodeType && t, a = s && !0 && e && !e.nodeType && e, o = a && a.exports === s, i = o ? n.Buffer : void 0, l = i ? i.isBuffer : void 0, u = l || r;
  e.exports = u;
})($h, er);
var Th = 9007199254740991;
function Ih(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Th;
}
var Ss = Ih, Mh = Gt, Ch = Ss, Ph = St, Lh = "[object Arguments]", Sh = "[object Array]", Ah = "[object Boolean]", xh = "[object Date]", Rh = "[object Error]", Fh = "[object Function]", Yh = "[object Map]", Vh = "[object Number]", Uh = "[object Object]", jh = "[object RegExp]", Wh = "[object Set]", Hh = "[object String]", Bh = "[object WeakMap]", Gh = "[object ArrayBuffer]", Kh = "[object DataView]", qh = "[object Float32Array]", zh = "[object Float64Array]", Xh = "[object Int8Array]", Zh = "[object Int16Array]", Jh = "[object Int32Array]", Qh = "[object Uint8Array]", eg = "[object Uint8ClampedArray]", tg = "[object Uint16Array]", ng = "[object Uint32Array]", xe = {};
xe[qh] = xe[zh] = xe[Xh] = xe[Zh] = xe[Jh] = xe[Qh] = xe[eg] = xe[tg] = xe[ng] = !0;
xe[Lh] = xe[Sh] = xe[Gh] = xe[Ah] = xe[Kh] = xe[xh] = xe[Rh] = xe[Fh] = xe[Yh] = xe[Vh] = xe[Uh] = xe[jh] = xe[Wh] = xe[Hh] = xe[Bh] = !1;
function rg(e) {
  return Ph(e) && Ch(e.length) && !!xe[Mh(e)];
}
var ag = rg, sg = ag, og = yl, Po = Cr, Lo = Po && Po.isTypedArray, ig = Lo ? og(Lo) : sg, As = ig, lg = ph, ug = Ls, cg = Lt, dg = er, fg = Ps, vg = As, mg = Object.prototype, pg = mg.hasOwnProperty;
function hg(e, t) {
  var n = cg(e), r = !n && ug(e), s = !n && !r && dg(e), a = !n && !r && !s && vg(e), o = n || r || s || a, i = o ? lg(e.length, String) : [], l = i.length;
  for (var u in e)
    (t || pg.call(e, u)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    s && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    fg(u, l))) && i.push(u);
  return i;
}
var Il = hg, gg = Object.prototype;
function _g(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || gg;
  return e === n;
}
var xs = _g;
function bg(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var Ml = bg, yg = Ml, Dg = yg(Object.keys, Object), Eg = Dg, wg = xs, Og = Eg, $g = Object.prototype, kg = $g.hasOwnProperty;
function Ng(e) {
  if (!wg(e))
    return Og(e);
  var t = [];
  for (var n in Object(e))
    kg.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
var Tg = Ng, Ig = Mn, Mg = Ss;
function Cg(e) {
  return e != null && Mg(e.length) && !Ig(e);
}
var Vr = Cg, Pg = Il, Lg = Tg, Sg = Vr;
function Ag(e) {
  return Sg(e) ? Pg(e) : Lg(e);
}
var Rs = Ag, xg = Nl, Rg = Rs;
function Fg(e, t) {
  return e && xg(e, t, Rg);
}
var Cl = Fg, Yg = $a;
function Vg() {
  this.__data__ = new Yg(), this.size = 0;
}
var Ug = Vg;
function jg(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
var Wg = jg;
function Hg(e) {
  return this.__data__.get(e);
}
var Bg = Hg;
function Gg(e) {
  return this.__data__.has(e);
}
var Kg = Gg, qg = $a, zg = Is, Xg = Ms, Zg = 200;
function Jg(e, t) {
  var n = this.__data__;
  if (n instanceof qg) {
    var r = n.__data__;
    if (!zg || r.length < Zg - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new Xg(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
var Qg = Jg, e_ = $a, t_ = Ug, n_ = Wg, r_ = Bg, a_ = Kg, s_ = Qg;
function lr(e) {
  var t = this.__data__ = new e_(e);
  this.size = t.size;
}
lr.prototype.clear = t_;
lr.prototype.delete = n_;
lr.prototype.get = r_;
lr.prototype.has = a_;
lr.prototype.set = s_;
var Fs = lr, o_ = "__lodash_hash_undefined__";
function i_(e) {
  return this.__data__.set(e, o_), this;
}
var l_ = i_;
function u_(e) {
  return this.__data__.has(e);
}
var c_ = u_, d_ = Ms, f_ = l_, v_ = c_;
function ra(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new d_(); ++t < n; )
    this.add(e[t]);
}
ra.prototype.add = ra.prototype.push = f_;
ra.prototype.has = v_;
var m_ = ra;
function p_(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
var Pl = p_;
function h_(e, t) {
  return e.has(t);
}
var g_ = h_, __ = m_, b_ = Pl, y_ = g_, D_ = 1, E_ = 2;
function w_(e, t, n, r, s, a) {
  var o = n & D_, i = e.length, l = t.length;
  if (i != l && !(o && l > i))
    return !1;
  var u = a.get(e), c = a.get(t);
  if (u && c)
    return u == t && c == e;
  var v = -1, m = !0, f = n & E_ ? new __() : void 0;
  for (a.set(e, t), a.set(t, e); ++v < i; ) {
    var w = e[v], g = t[v];
    if (r)
      var y = o ? r(g, w, v, t, e, a) : r(w, g, v, e, t, a);
    if (y !== void 0) {
      if (y)
        continue;
      m = !1;
      break;
    }
    if (f) {
      if (!b_(t, function(d, b) {
        if (!y_(f, b) && (w === d || s(w, d, n, r, a)))
          return f.push(b);
      })) {
        m = !1;
        break;
      }
    } else if (!(w === g || s(w, g, n, r, a))) {
      m = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), m;
}
var Ll = w_, O_ = Bt, $_ = O_.Uint8Array, Sl = $_;
function k_(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, s) {
    n[++t] = [s, r];
  }), n;
}
var N_ = k_;
function T_(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var I_ = T_, So = Ea, Ao = Sl, M_ = sr, C_ = Ll, P_ = N_, L_ = I_, S_ = 1, A_ = 2, x_ = "[object Boolean]", R_ = "[object Date]", F_ = "[object Error]", Y_ = "[object Map]", V_ = "[object Number]", U_ = "[object RegExp]", j_ = "[object Set]", W_ = "[object String]", H_ = "[object Symbol]", B_ = "[object ArrayBuffer]", G_ = "[object DataView]", xo = So ? So.prototype : void 0, Fa = xo ? xo.valueOf : void 0;
function K_(e, t, n, r, s, a, o) {
  switch (n) {
    case G_:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case B_:
      return !(e.byteLength != t.byteLength || !a(new Ao(e), new Ao(t)));
    case x_:
    case R_:
    case V_:
      return M_(+e, +t);
    case F_:
      return e.name == t.name && e.message == t.message;
    case U_:
    case W_:
      return e == t + "";
    case Y_:
      var i = P_;
    case j_:
      var l = r & S_;
      if (i || (i = L_), e.size != t.size && !l)
        return !1;
      var u = o.get(e);
      if (u)
        return u == t;
      r |= A_, o.set(e, t);
      var c = C_(i(e), i(t), r, s, a, o);
      return o.delete(e), c;
    case H_:
      if (Fa)
        return Fa.call(e) == Fa.call(t);
  }
  return !1;
}
var q_ = K_;
function z_(e, t) {
  for (var n = -1, r = t.length, s = e.length; ++n < r; )
    e[s + n] = t[n];
  return e;
}
var X_ = z_, Z_ = X_, J_ = Lt;
function Q_(e, t, n) {
  var r = t(e);
  return J_(e) ? r : Z_(r, n(e));
}
var eb = Q_;
function tb(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, s = 0, a = []; ++n < r; ) {
    var o = e[n];
    t(o, n, e) && (a[s++] = o);
  }
  return a;
}
var nb = tb;
function rb() {
  return [];
}
var ab = rb, sb = nb, ob = ab, ib = Object.prototype, lb = ib.propertyIsEnumerable, Ro = Object.getOwnPropertySymbols, ub = Ro ? function(e) {
  return e == null ? [] : (e = Object(e), sb(Ro(e), function(t) {
    return lb.call(e, t);
  }));
} : ob, cb = ub, db = eb, fb = cb, vb = Rs;
function mb(e) {
  return db(e, vb, fb);
}
var pb = mb, Fo = pb, hb = 1, gb = Object.prototype, _b = gb.hasOwnProperty;
function bb(e, t, n, r, s, a) {
  var o = n & hb, i = Fo(e), l = i.length, u = Fo(t), c = u.length;
  if (l != c && !o)
    return !1;
  for (var v = l; v--; ) {
    var m = i[v];
    if (!(o ? m in t : _b.call(t, m)))
      return !1;
  }
  var f = a.get(e), w = a.get(t);
  if (f && w)
    return f == t && w == e;
  var g = !0;
  a.set(e, t), a.set(t, e);
  for (var y = o; ++v < l; ) {
    m = i[v];
    var d = e[m], b = t[m];
    if (r)
      var k = o ? r(b, d, m, t, e, a) : r(d, b, m, e, t, a);
    if (!(k === void 0 ? d === b || s(d, b, n, r, a) : k)) {
      g = !1;
      break;
    }
    y || (y = m == "constructor");
  }
  if (g && !y) {
    var _ = e.constructor, M = t.constructor;
    _ != M && "constructor" in e && "constructor" in t && !(typeof _ == "function" && _ instanceof _ && typeof M == "function" && M instanceof M) && (g = !1);
  }
  return a.delete(e), a.delete(t), g;
}
var yb = bb, Db = Cn, Eb = Bt, wb = Db(Eb, "DataView"), Ob = wb, $b = Cn, kb = Bt, Nb = $b(kb, "Promise"), Tb = Nb, Ib = Cn, Mb = Bt, Cb = Ib(Mb, "Set"), Pb = Cb, Lb = Cn, Sb = Bt, Ab = Lb(Sb, "WeakMap"), xb = Ab, Ka = Ob, qa = Is, za = Tb, Xa = Pb, Za = xb, Al = Gt, ur = Dl, Yo = "[object Map]", Rb = "[object Object]", Vo = "[object Promise]", Uo = "[object Set]", jo = "[object WeakMap]", Wo = "[object DataView]", Fb = ur(Ka), Yb = ur(qa), Vb = ur(za), Ub = ur(Xa), jb = ur(Za), yn = Al;
(Ka && yn(new Ka(new ArrayBuffer(1))) != Wo || qa && yn(new qa()) != Yo || za && yn(za.resolve()) != Vo || Xa && yn(new Xa()) != Uo || Za && yn(new Za()) != jo) && (yn = function(e) {
  var t = Al(e), n = t == Rb ? e.constructor : void 0, r = n ? ur(n) : "";
  if (r)
    switch (r) {
      case Fb:
        return Wo;
      case Yb:
        return Yo;
      case Vb:
        return Vo;
      case Ub:
        return Uo;
      case jb:
        return jo;
    }
  return t;
});
var Wb = yn, Ya = Fs, Hb = Ll, Bb = q_, Gb = yb, Ho = Wb, Bo = Lt, Go = er, Kb = As, qb = 1, Ko = "[object Arguments]", qo = "[object Array]", Gr = "[object Object]", zb = Object.prototype, zo = zb.hasOwnProperty;
function Xb(e, t, n, r, s, a) {
  var o = Bo(e), i = Bo(t), l = o ? qo : Ho(e), u = i ? qo : Ho(t);
  l = l == Ko ? Gr : l, u = u == Ko ? Gr : u;
  var c = l == Gr, v = u == Gr, m = l == u;
  if (m && Go(e)) {
    if (!Go(t))
      return !1;
    o = !0, c = !1;
  }
  if (m && !c)
    return a || (a = new Ya()), o || Kb(e) ? Hb(e, t, n, r, s, a) : Bb(e, t, l, n, r, s, a);
  if (!(n & qb)) {
    var f = c && zo.call(e, "__wrapped__"), w = v && zo.call(t, "__wrapped__");
    if (f || w) {
      var g = f ? e.value() : e, y = w ? t.value() : t;
      return a || (a = new Ya()), s(g, y, n, r, a);
    }
  }
  return m ? (a || (a = new Ya()), Gb(e, t, n, r, s, a)) : !1;
}
var Zb = Xb, Jb = Zb, Xo = St;
function xl(e, t, n, r, s) {
  return e === t ? !0 : e == null || t == null || !Xo(e) && !Xo(t) ? e !== e && t !== t : Jb(e, t, n, r, xl, s);
}
var Rl = xl, Qb = Fs, e1 = Rl, t1 = 1, n1 = 2;
function r1(e, t, n, r) {
  var s = n.length, a = s, o = !r;
  if (e == null)
    return !a;
  for (e = Object(e); s--; ) {
    var i = n[s];
    if (o && i[2] ? i[1] !== e[i[0]] : !(i[0] in e))
      return !1;
  }
  for (; ++s < a; ) {
    i = n[s];
    var l = i[0], u = e[l], c = i[1];
    if (o && i[2]) {
      if (u === void 0 && !(l in e))
        return !1;
    } else {
      var v = new Qb();
      if (r)
        var m = r(u, c, l, e, t, v);
      if (!(m === void 0 ? e1(c, u, t1 | n1, r, v) : m))
        return !1;
    }
  }
  return !0;
}
var a1 = r1, s1 = tn;
function o1(e) {
  return e === e && !s1(e);
}
var Fl = o1, i1 = Fl, l1 = Rs;
function u1(e) {
  for (var t = l1(e), n = t.length; n--; ) {
    var r = t[n], s = e[r];
    t[n] = [r, s, i1(s)];
  }
  return t;
}
var c1 = u1;
function d1(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
var Yl = d1, f1 = a1, v1 = c1, m1 = Yl;
function p1(e) {
  var t = v1(e);
  return t.length == 1 && t[0][2] ? m1(t[0][0], t[0][1]) : function(n) {
    return n === e || f1(n, e, t);
  };
}
var h1 = p1;
function g1(e, t) {
  return e != null && t in Object(e);
}
var _1 = g1, b1 = Ol, y1 = Ls, D1 = Lt, E1 = Ps, w1 = Ss, O1 = Na;
function $1(e, t, n) {
  t = b1(t, e);
  for (var r = -1, s = t.length, a = !1; ++r < s; ) {
    var o = O1(t[r]);
    if (!(a = e != null && n(e, o)))
      break;
    e = e[o];
  }
  return a || ++r != s ? a : (s = e == null ? 0 : e.length, !!s && w1(s) && E1(o, s) && (D1(e) || y1(e)));
}
var Vl = $1, k1 = _1, N1 = Vl;
function T1(e, t) {
  return e != null && N1(e, t, k1);
}
var I1 = T1, M1 = Rl, C1 = Dn, P1 = I1, L1 = Ts, S1 = Fl, A1 = Yl, x1 = Na, R1 = 1, F1 = 2;
function Y1(e, t) {
  return L1(e) && S1(t) ? A1(x1(e), t) : function(n) {
    var r = C1(n, e);
    return r === void 0 && r === t ? P1(n, e) : M1(t, r, R1 | F1);
  };
}
var V1 = Y1;
function U1(e) {
  return e;
}
var Ys = U1;
function j1(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var W1 = j1, H1 = $l;
function B1(e) {
  return function(t) {
    return H1(t, e);
  };
}
var G1 = B1, K1 = W1, q1 = G1, z1 = Ts, X1 = Na;
function Z1(e) {
  return z1(e) ? K1(X1(e)) : q1(e);
}
var J1 = Z1, Q1 = h1, ey = V1, ty = Ys, ny = Lt, ry = J1;
function ay(e) {
  return typeof e == "function" ? e : e == null ? ty : typeof e == "object" ? ny(e) ? ey(e[0], e[1]) : Q1(e) : ry(e);
}
var Ul = ay, sy = Ta, oy = Cl, iy = Ul;
function ly(e, t) {
  var n = {};
  return t = iy(t), oy(e, function(r, s, a) {
    sy(n, s, t(r, s, a));
  }), n;
}
var uy = ly;
function cy(e, t, n) {
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
var jl = cy, dy = jl, Zo = Math.max;
function fy(e, t, n) {
  return t = Zo(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, s = -1, a = Zo(r.length - t, 0), o = Array(a); ++s < a; )
      o[s] = r[t + s];
    s = -1;
    for (var i = Array(t + 1); ++s < t; )
      i[s] = r[s];
    return i[t] = n(o), dy(e, this, i);
  };
}
var vy = fy;
function my(e) {
  return function() {
    return e;
  };
}
var py = my, hy = py, Jo = kl, gy = Ys, _y = Jo ? function(e, t) {
  return Jo(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: hy(t),
    writable: !0
  });
} : gy, by = _y, yy = 800, Dy = 16, Ey = Date.now;
function wy(e) {
  var t = 0, n = 0;
  return function() {
    var r = Ey(), s = Dy - (r - n);
    if (n = r, s > 0) {
      if (++t >= yy)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var Oy = wy, $y = by, ky = Oy, Ny = ky($y), Ty = Ny, Iy = Ys, My = vy, Cy = Ty;
function Py(e, t) {
  return Cy(My(e, t, Iy), e + "");
}
var Vs = Py, Ly = sr, Sy = Vr, Ay = Ps, xy = tn;
function Ry(e, t, n) {
  if (!xy(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? Sy(n) && Ay(t, n.length) : r == "string" && t in n) ? Ly(n[t], e) : !1;
}
var Us = Ry;
function Fy(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var Yy = Fy, Vy = tn, Uy = xs, jy = Yy, Wy = Object.prototype, Hy = Wy.hasOwnProperty;
function By(e) {
  if (!Vy(e))
    return jy(e);
  var t = Uy(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !Hy.call(e, r)) || n.push(r);
  return n;
}
var Gy = By, Ky = Il, qy = Gy, zy = Vr;
function Xy(e) {
  return zy(e) ? Ky(e, !0) : qy(e);
}
var js = Xy, Zy = Vs, Jy = sr, Qy = Us, e0 = js, Wl = Object.prototype, t0 = Wl.hasOwnProperty, n0 = Zy(function(e, t) {
  e = Object(e);
  var n = -1, r = t.length, s = r > 2 ? t[2] : void 0;
  for (s && Qy(t[0], t[1], s) && (r = 1); ++n < r; )
    for (var a = t[n], o = e0(a), i = -1, l = o.length; ++i < l; ) {
      var u = o[i], c = e[u];
      (c === void 0 || Jy(c, Wl[u]) && !t0.call(e, u)) && (e[u] = a[u]);
    }
  return e;
}), Qo = n0, r0 = Ta, a0 = sr;
function s0(e, t, n) {
  (n !== void 0 && !a0(e[t], n) || n === void 0 && !(t in e)) && r0(e, t, n);
}
var Hl = s0, aa = {}, o0 = {
  get exports() {
    return aa;
  },
  set exports(e) {
    aa = e;
  }
};
(function(e, t) {
  var n = Bt, r = t && !t.nodeType && t, s = r && !0 && e && !e.nodeType && e, a = s && s.exports === r, o = a ? n.Buffer : void 0, i = o ? o.allocUnsafe : void 0;
  function l(u, c) {
    if (c)
      return u.slice();
    var v = u.length, m = i ? i(v) : new u.constructor(v);
    return u.copy(m), m;
  }
  e.exports = l;
})(o0, aa);
var ei = Sl;
function i0(e) {
  var t = new e.constructor(e.byteLength);
  return new ei(t).set(new ei(e)), t;
}
var l0 = i0, u0 = l0;
function c0(e, t) {
  var n = t ? u0(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var d0 = c0;
function f0(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
var v0 = f0, m0 = tn, ti = Object.create, p0 = function() {
  function e() {
  }
  return function(t) {
    if (!m0(t))
      return {};
    if (ti)
      return ti(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}(), h0 = p0, g0 = Ml, _0 = g0(Object.getPrototypeOf, Object), Bl = _0, b0 = h0, y0 = Bl, D0 = xs;
function E0(e) {
  return typeof e.constructor == "function" && !D0(e) ? b0(y0(e)) : {};
}
var w0 = E0, O0 = Vr, $0 = St;
function k0(e) {
  return $0(e) && O0(e);
}
var N0 = k0, T0 = Gt, I0 = Bl, M0 = St, C0 = "[object Object]", P0 = Function.prototype, L0 = Object.prototype, Gl = P0.toString, S0 = L0.hasOwnProperty, A0 = Gl.call(Object);
function x0(e) {
  if (!M0(e) || T0(e) != C0)
    return !1;
  var t = I0(e);
  if (t === null)
    return !0;
  var n = S0.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && Gl.call(n) == A0;
}
var R0 = x0;
function F0(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
var Kl = F0, Y0 = oh, V0 = Ta;
function U0(e, t, n, r) {
  var s = !n;
  n || (n = {});
  for (var a = -1, o = t.length; ++a < o; ) {
    var i = t[a], l = r ? r(n[i], e[i], i, n, e) : void 0;
    l === void 0 && (l = e[i]), s ? V0(n, i, l) : Y0(n, i, l);
  }
  return n;
}
var j0 = U0, W0 = j0, H0 = js;
function B0(e) {
  return W0(e, H0(e));
}
var G0 = B0, ni = Hl, K0 = aa, q0 = d0, z0 = v0, X0 = w0, ri = Ls, ai = Lt, Z0 = N0, J0 = er, Q0 = Mn, eD = tn, tD = R0, nD = As, si = Kl, rD = G0;
function aD(e, t, n, r, s, a, o) {
  var i = si(e, n), l = si(t, n), u = o.get(l);
  if (u) {
    ni(e, n, u);
    return;
  }
  var c = a ? a(i, l, n + "", e, t, o) : void 0, v = c === void 0;
  if (v) {
    var m = ai(l), f = !m && J0(l), w = !m && !f && nD(l);
    c = l, m || f || w ? ai(i) ? c = i : Z0(i) ? c = z0(i) : f ? (v = !1, c = K0(l, !0)) : w ? (v = !1, c = q0(l, !0)) : c = [] : tD(l) || ri(l) ? (c = i, ri(i) ? c = rD(i) : (!eD(i) || Q0(i)) && (c = X0(l))) : v = !1;
  }
  v && (o.set(l, c), s(c, l, r, a, o), o.delete(l)), ni(e, n, c);
}
var sD = aD, oD = Fs, iD = Hl, lD = Nl, uD = sD, cD = tn, dD = js, fD = Kl;
function ql(e, t, n, r, s) {
  e !== t && lD(t, function(a, o) {
    if (s || (s = new oD()), cD(a))
      uD(e, t, o, n, ql, r, s);
    else {
      var i = r ? r(fD(e, o), a, o + "", e, t, s) : void 0;
      i === void 0 && (i = a), iD(e, o, i);
    }
  }, dD);
}
var zl = ql, vD = zl, oi = tn;
function Xl(e, t, n, r, s, a) {
  return oi(e) && oi(t) && (a.set(t, e), vD(e, t, void 0, Xl, a), a.delete(t)), e;
}
var mD = Xl, pD = Vs, hD = Us;
function gD(e) {
  return pD(function(t, n) {
    var r = -1, s = n.length, a = s > 1 ? n[s - 1] : void 0, o = s > 2 ? n[2] : void 0;
    for (a = e.length > 3 && typeof a == "function" ? (s--, a) : void 0, o && hD(n[0], n[1], o) && (a = s < 3 ? void 0 : a, s = 1), t = Object(t); ++r < s; ) {
      var i = n[r];
      i && e(t, i, r, a);
    }
    return t;
  });
}
var _D = gD, bD = zl, yD = _D, DD = yD(function(e, t, n, r) {
  bD(e, t, n, r);
}), ED = DD, wD = jl, OD = Vs, $D = mD, kD = ED, ND = OD(function(e) {
  return e.push(void 0, $D), wD(kD, void 0, e);
}), Pr = ND, TD = Object.prototype, ID = TD.hasOwnProperty;
function MD(e, t) {
  return e != null && ID.call(e, t);
}
var CD = MD, PD = CD, LD = Vl;
function SD(e, t) {
  return e != null && LD(e, t, PD);
}
var Zl = SD, AD = Vr;
function xD(e, t) {
  return function(n, r) {
    if (n == null)
      return n;
    if (!AD(n))
      return e(n, r);
    for (var s = n.length, a = t ? s : -1, o = Object(n); (t ? a-- : ++a < s) && r(o[a], a, o) !== !1; )
      ;
    return n;
  };
}
var RD = xD, FD = Cl, YD = RD, VD = YD(FD), UD = VD;
function jD(e) {
  return e && e.length ? e[0] : void 0;
}
var Jl = jD;
function WD(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
var Wn = WD, HD = UD;
function BD(e, t) {
  var n;
  return HD(e, function(r, s, a) {
    return n = t(r, s, a), !n;
  }), !!n;
}
var GD = BD, KD = Pl, qD = Ul, zD = GD, XD = Lt, ZD = Us;
function JD(e, t, n) {
  var r = XD(e) ? KD : zD;
  return n && ZD(e, t, n) && (t = void 0), r(e, qD(t));
}
var QD = JD;
const eE = (e) => Object.prototype.toString.call(e).slice(8, -1), Bn = (e) => dv(e) && !isNaN(e.getTime()), Jt = (e) => eE(e) === "Object", Ws = Zl, ii = (e, t) => QD(t, (n) => Zl(e, n)), Me = (e, t, n = "0") => {
  for (e = e != null ? String(e) : "", t = t || 2; e.length < t; )
    e = `${n}${e}`;
  return e;
}, wt = (e) => Array.isArray(e), Xt = (e) => wt(e) && e.length > 0, sa = (e) => e == null ? e ?? null : document && Yt(e) ? document.querySelector(e) : e.$el ?? e, cn = (e, t, n, r = void 0) => {
  e.removeEventListener(t, n, r);
}, dn = (e, t, n, r = void 0) => (e.addEventListener(t, n, r), () => cn(e, t, n, r)), Zr = (e, t) => !!e && !!t && (e === t || e.contains(t)), Kr = (e, t) => {
  (e.key === " " || e.key === "Enter") && (t(e), e.preventDefault());
}, Ql = (e, ...t) => {
  const n = {};
  let r;
  for (r in e)
    t.includes(r) || (n[r] = e[r]);
  return n;
}, eu = (e, t) => {
  const n = {};
  return t.forEach((r) => {
    r in e && (n[r] = e[r]);
  }), n;
};
function tE(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
const oa = () => {
  function e() {
    return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
  }
  return `${e() + e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`;
}, nE = ["base", "start", "end", "startEnd"], rE = [
  "class",
  "wrapperClass",
  "contentClass",
  "style",
  "contentStyle",
  "color",
  "fillMode"
], aE = { base: {}, start: {}, end: {} };
function Hs(e, t, n = aE) {
  let r = e, s = {};
  t === !0 || Yt(t) ? (r = Yt(t) ? t : r, s = { ...n }) : Jt(t) && (ii(t, nE) ? s = { ...t } : s = {
    base: { ...t },
    start: { ...t },
    end: { ...t }
  });
  const a = Pr(
    s,
    { start: s.startEnd, end: s.startEnd },
    n
  );
  return Object.entries(a).forEach(([o, i]) => {
    let l = r;
    i === !0 || Yt(i) ? (l = Yt(i) ? i : l, a[o] = { color: l }) : Jt(i) && (ii(i, rE) ? a[o] = { ...i } : a[o] = {}), Pr(a[o], { color: l });
  }), a;
}
class sE {
  constructor() {
    oe(this, "type", "highlight");
  }
  normalizeConfig(t, n) {
    return Hs(t, n, {
      base: { fillMode: "light" },
      start: { fillMode: "solid" },
      end: { fillMode: "solid" }
    });
  }
  prepareRender(t) {
    t.highlights = [], t.content || (t.content = []);
  }
  render({ data: t, onStart: n, onEnd: r }, s) {
    const { key: a, highlight: o } = t;
    if (!o)
      return;
    const { highlights: i } = s, { base: l, start: u, end: c } = o;
    n && r ? i.push({
      ...u,
      key: a,
      wrapperClass: `vc-day-layer vc-day-box-center-center vc-attr vc-${u.color}`,
      class: [`vc-highlight vc-highlight-bg-${u.fillMode}`, u.class],
      contentClass: [
        `vc-attr vc-highlight-content-${u.fillMode} vc-${u.color}`,
        u.contentClass
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
      ...u,
      key: a,
      wrapperClass: `vc-day-layer vc-day-box-center-center vc-attr vc-${u.color}`,
      class: [`vc-highlight vc-highlight-bg-${u.fillMode}`, u.class],
      contentClass: [
        `vc-attr vc-highlight-content-${u.fillMode} vc-${u.color}`,
        u.contentClass
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
      ...c,
      key: a,
      wrapperClass: `vc-day-layer vc-day-box-center-center vc-attr vc-${c.color}`,
      class: [`vc-highlight vc-highlight-bg-${c.fillMode}`, c.class],
      contentClass: [
        `vc-attr vc-highlight-content-${c.fillMode} vc-${c.color}`,
        c.contentClass
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
class Bs {
  constructor(t, n) {
    oe(this, "type", ""), oe(this, "collectionType", ""), this.type = t, this.collectionType = n;
  }
  normalizeConfig(t, n) {
    return Hs(t, n);
  }
  prepareRender(t) {
    t[this.collectionType] = [];
  }
  render({ data: t, onStart: n, onEnd: r }, s) {
    const { key: a } = t, o = t[this.type];
    if (!a || !o)
      return;
    const i = s[this.collectionType], { base: l, start: u, end: c } = o;
    n ? i.push({
      ...u,
      key: a,
      class: [
        `vc-${this.type} vc-${this.type}-start vc-${u.color} vc-attr`,
        u.class
      ]
    }) : r ? i.push({
      ...c,
      key: a,
      class: [
        `vc-${this.type} vc-${this.type}-end vc-${c.color} vc-attr`,
        c.class
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
class oE extends Bs {
  constructor() {
    super("content", "content");
  }
  normalizeConfig(t, n) {
    return Hs("base", n);
  }
}
class iE extends Bs {
  constructor() {
    super("dot", "dots");
  }
}
class lE extends Bs {
  constructor() {
    super("bar", "bars");
  }
}
class uE {
  constructor(t) {
    oe(this, "color"), oe(this, "renderers", [
      new oE(),
      new sE(),
      new iE(),
      new lE()
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
const cE = 300, dE = 60, fE = 80, vE = {
  maxSwipeTime: cE,
  minHorizontalSwipeDistance: dE,
  maxVerticalSwipeDistance: fE
}, mE = "MMMM YYYY", pE = "W", hE = "MMM", gE = "h A", _E = [
  "L",
  "YYYY-MM-DD",
  "YYYY/MM/DD"
], bE = [
  "L h:mm A",
  "YYYY-MM-DD h:mm A",
  "YYYY/MM/DD h:mm A"
], yE = [
  "L HH:mm",
  "YYYY-MM-DD HH:mm",
  "YYYY/MM/DD HH:mm"
], DE = [
  "h:mm A"
], EE = [
  "HH:mm"
], wE = "WWW, MMM D, YYYY", OE = [
  "L",
  "YYYY-MM-DD",
  "YYYY/MM/DD"
], $E = "iso", kE = "YYYY-MM-DDTHH:mm:ss.SSSZ", NE = {
  title: mE,
  weekdays: pE,
  navMonths: hE,
  hours: gE,
  input: _E,
  inputDateTime: bE,
  inputDateTime24hr: yE,
  inputTime: DE,
  inputTime24hr: EE,
  dayPopover: wE,
  data: OE,
  model: $E,
  iso: kE
}, Qt = {
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
Qt.en = Qt["en-US"];
Qt.es = Qt["es-ES"];
Qt.no = Qt.nb;
Qt.zh = Qt["zh-CN"];
const TE = Object.entries(Qt).reduce(
  (e, [t, { dow: n, L: r }]) => (e[t] = {
    id: t,
    firstDayOfWeek: n,
    masks: { L: r }
  }, e),
  {}
), IE = {
  componentPrefix: "V",
  color: "blue",
  isDark: !1,
  navVisibility: "click",
  titlePosition: "center",
  transition: "slide-h",
  touch: vE,
  masks: NE,
  locales: TE,
  datePicker: {
    updateOnInput: !0,
    inputDebounce: 1e3,
    popover: {
      visibility: "hover-focus",
      placement: "bottom-start",
      isInteractive: !0
    }
  }
}, Ja = hs(IE), ME = C(() => uy(Ja.locales, (e) => (e.masks = Pr(e.masks, Ja.masks), e))), mn = (e) => typeof window < "u" && Ws(window.__vcalendar__, e) ? Dn(window.__vcalendar__, e) : Dn(Ja, e);
var ia = {}, CE = {
  get exports() {
    return ia;
  },
  set exports(e) {
    ia = e;
  }
}, la = {}, PE = {
  get exports() {
    return la;
  },
  set exports(e) {
    la = e;
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
})(PE, la);
var ua = {}, LE = {
  get exports() {
    return ua;
  },
  set exports(e) {
    ua = e;
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
})(LE, ua);
var ca = {}, SE = {
  get exports() {
    return ca;
  },
  set exports(e) {
    ca = e;
  }
}, da = {}, AE = {
  get exports() {
    return da;
  },
  set exports(e) {
    da = e;
  }
};
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  function n(l, u) {
    var c = i(u);
    return c.formatToParts ? s(c, l) : a(c, l);
  }
  var r = {
    year: 0,
    month: 1,
    day: 2,
    hour: 3,
    minute: 4,
    second: 5
  };
  function s(l, u) {
    try {
      for (var c = l.formatToParts(u), v = [], m = 0; m < c.length; m++) {
        var f = r[c[m].type];
        f >= 0 && (v[f] = parseInt(c[m].value, 10));
      }
      return v;
    } catch (w) {
      if (w instanceof RangeError)
        return [NaN];
      throw w;
    }
  }
  function a(l, u) {
    var c = l.format(u).replace(/\u200E/g, ""), v = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(c);
    return [v[3], v[1], v[2], v[4], v[5], v[6]];
  }
  var o = {};
  function i(l) {
    if (!o[l]) {
      var u = new Intl.DateTimeFormat("en-US", {
        hour12: !1,
        timeZone: "America/New_York",
        year: "numeric",
        month: "numeric",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      }).format(/* @__PURE__ */ new Date("2014-06-25T04:00:00.123Z")), c = u === "06/25/2014, 00:00:00" || u === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
      o[l] = c ? new Intl.DateTimeFormat("en-US", {
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
})(AE, da);
var fa = {}, xE = {
  get exports() {
    return fa;
  },
  set exports(e) {
    fa = e;
  }
};
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  function n(r, s, a, o, i, l, u) {
    var c = /* @__PURE__ */ new Date(0);
    return c.setUTCFullYear(r, s, a), c.setUTCHours(o, i, l, u), c;
  }
  e.exports = t.default;
})(xE, fa);
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = l;
  var n = s(da), r = s(fa);
  function s(g) {
    return g && g.__esModule ? g : { default: g };
  }
  var a = 36e5, o = 6e4, i = {
    timezone: /([Z+-].*)$/,
    timezoneZ: /^(Z)$/,
    timezoneHH: /^([+-]\d{2})$/,
    timezoneHHMM: /^([+-]\d{2}):?(\d{2})$/
  };
  function l(g, y, d) {
    var b, k;
    if (!g || (b = i.timezoneZ.exec(g), b))
      return 0;
    var _;
    if (b = i.timezoneHH.exec(g), b)
      return _ = parseInt(b[1], 10), m(_) ? -(_ * a) : NaN;
    if (b = i.timezoneHHMM.exec(g), b) {
      _ = parseInt(b[1], 10);
      var M = parseInt(b[2], 10);
      return m(_, M) ? (k = Math.abs(_) * a + M * o, _ > 0 ? -k : k) : NaN;
    }
    if (w(g)) {
      y = new Date(y || Date.now());
      var N = d ? y : u(y), A = c(N, g), P = d ? A : v(y, A, g);
      return -P;
    }
    return NaN;
  }
  function u(g) {
    return (0, r.default)(g.getFullYear(), g.getMonth(), g.getDate(), g.getHours(), g.getMinutes(), g.getSeconds(), g.getMilliseconds());
  }
  function c(g, y) {
    var d = (0, n.default)(g, y), b = (0, r.default)(d[0], d[1] - 1, d[2], d[3] % 24, d[4], d[5], 0).getTime(), k = g.getTime(), _ = k % 1e3;
    return k -= _ >= 0 ? _ : 1e3 + _, b - k;
  }
  function v(g, y, d) {
    var b = g.getTime(), k = b - y, _ = c(new Date(k), d);
    if (y === _)
      return y;
    k -= _ - y;
    var M = c(new Date(k), d);
    return _ === M ? _ : Math.max(_, M);
  }
  function m(g, y) {
    return -23 <= g && g <= 23 && (y == null || 0 <= y && y <= 59);
  }
  var f = {};
  function w(g) {
    if (f[g])
      return !0;
    try {
      return new Intl.DateTimeFormat(void 0, {
        timeZone: g
      }), f[g] = !0, !0;
    } catch {
      return !1;
    }
  }
  e.exports = t.default;
})(SE, ca);
var va = {}, RE = {
  get exports() {
    return va;
  },
  set exports(e) {
    va = e;
  }
};
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = void 0;
  var n = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/, r = n;
  t.default = r, e.exports = t.default;
})(RE, va);
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = v;
  var n = o(la), r = o(ua), s = o(ca), a = o(va);
  function o(P) {
    return P && P.__esModule ? P : { default: P };
  }
  var i = 36e5, l = 6e4, u = 2, c = {
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
  function v(P, L) {
    if (arguments.length < 1)
      throw new TypeError("1 argument required, but only " + arguments.length + " present");
    if (P === null)
      return /* @__PURE__ */ new Date(NaN);
    var x = L || {}, j = x.additionalDigits == null ? u : (0, n.default)(x.additionalDigits);
    if (j !== 2 && j !== 1 && j !== 0)
      throw new RangeError("additionalDigits must be 0, 1 or 2");
    if (P instanceof Date || typeof P == "object" && Object.prototype.toString.call(P) === "[object Date]")
      return new Date(P.getTime());
    if (typeof P == "number" || Object.prototype.toString.call(P) === "[object Number]")
      return new Date(P);
    if (!(typeof P == "string" || Object.prototype.toString.call(P) === "[object String]"))
      return /* @__PURE__ */ new Date(NaN);
    var F = m(P), X = f(F.date, j), K = X.year, U = X.restDateString, Y = w(U, K);
    if (isNaN(Y))
      return /* @__PURE__ */ new Date(NaN);
    if (Y) {
      var ee = Y.getTime(), B = 0, V;
      if (F.time && (B = g(F.time), isNaN(B)))
        return /* @__PURE__ */ new Date(NaN);
      if (F.timeZone || x.timeZone) {
        if (V = (0, s.default)(F.timeZone || x.timeZone, new Date(ee + B)), isNaN(V))
          return /* @__PURE__ */ new Date(NaN);
      } else
        V = (0, r.default)(new Date(ee + B)), V = (0, r.default)(new Date(ee + B + V));
      return new Date(ee + B + V);
    } else
      return /* @__PURE__ */ new Date(NaN);
  }
  function m(P) {
    var L = {}, x = c.dateTimePattern.exec(P), j;
    if (x ? (L.date = x[1], j = x[3]) : (x = c.datePattern.exec(P), x ? (L.date = x[1], j = x[2]) : (L.date = null, j = P)), j) {
      var F = c.timeZone.exec(j);
      F ? (L.time = j.replace(F[1], ""), L.timeZone = F[1].trim()) : L.time = j;
    }
    return L;
  }
  function f(P, L) {
    var x = c.YYY[L], j = c.YYYYY[L], F;
    if (F = c.YYYY.exec(P) || j.exec(P), F) {
      var X = F[1];
      return {
        year: parseInt(X, 10),
        restDateString: P.slice(X.length)
      };
    }
    if (F = c.YY.exec(P) || x.exec(P), F) {
      var K = F[1];
      return {
        year: parseInt(K, 10) * 100,
        restDateString: P.slice(K.length)
      };
    }
    return {
      year: null
    };
  }
  function w(P, L) {
    if (L === null)
      return null;
    var x, j, F, X;
    if (P.length === 0)
      return j = /* @__PURE__ */ new Date(0), j.setUTCFullYear(L), j;
    if (x = c.MM.exec(P), x)
      return j = /* @__PURE__ */ new Date(0), F = parseInt(x[1], 10) - 1, _(L, F) ? (j.setUTCFullYear(L, F), j) : /* @__PURE__ */ new Date(NaN);
    if (x = c.DDD.exec(P), x) {
      j = /* @__PURE__ */ new Date(0);
      var K = parseInt(x[1], 10);
      return M(L, K) ? (j.setUTCFullYear(L, 0, K), j) : /* @__PURE__ */ new Date(NaN);
    }
    if (x = c.MMDD.exec(P), x) {
      j = /* @__PURE__ */ new Date(0), F = parseInt(x[1], 10) - 1;
      var U = parseInt(x[2], 10);
      return _(L, F, U) ? (j.setUTCFullYear(L, F, U), j) : /* @__PURE__ */ new Date(NaN);
    }
    if (x = c.Www.exec(P), x)
      return X = parseInt(x[1], 10) - 1, N(L, X) ? y(L, X) : /* @__PURE__ */ new Date(NaN);
    if (x = c.WwwD.exec(P), x) {
      X = parseInt(x[1], 10) - 1;
      var Y = parseInt(x[2], 10) - 1;
      return N(L, X, Y) ? y(L, X, Y) : /* @__PURE__ */ new Date(NaN);
    }
    return null;
  }
  function g(P) {
    var L, x, j;
    if (L = c.HH.exec(P), L)
      return x = parseFloat(L[1].replace(",", ".")), A(x) ? x % 24 * i : NaN;
    if (L = c.HHMM.exec(P), L)
      return x = parseInt(L[1], 10), j = parseFloat(L[2].replace(",", ".")), A(x, j) ? x % 24 * i + j * l : NaN;
    if (L = c.HHMMSS.exec(P), L) {
      x = parseInt(L[1], 10), j = parseInt(L[2], 10);
      var F = parseFloat(L[3].replace(",", "."));
      return A(x, j, F) ? x % 24 * i + j * l + F * 1e3 : NaN;
    }
    return null;
  }
  function y(P, L, x) {
    L = L || 0, x = x || 0;
    var j = /* @__PURE__ */ new Date(0);
    j.setUTCFullYear(P, 0, 4);
    var F = j.getUTCDay() || 7, X = L * 7 + x + 1 - F;
    return j.setUTCDate(j.getUTCDate() + X), j;
  }
  var d = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], b = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function k(P) {
    return P % 400 === 0 || P % 4 === 0 && P % 100 !== 0;
  }
  function _(P, L, x) {
    if (L < 0 || L > 11)
      return !1;
    if (x != null) {
      if (x < 1)
        return !1;
      var j = k(P);
      if (j && x > b[L] || !j && x > d[L])
        return !1;
    }
    return !0;
  }
  function M(P, L) {
    if (L < 1)
      return !1;
    var x = k(P);
    return !(x && L > 366 || !x && L > 365);
  }
  function N(P, L, x) {
    return !(L < 0 || L > 52 || x != null && (x < 0 || x > 6));
  }
  function A(P, L, x) {
    return !(P != null && (P < 0 || P >= 25) || L != null && (L < 0 || L >= 60) || x != null && (x < 0 || x >= 60));
  }
  e.exports = t.default;
})(CE, ia);
const FE = /* @__PURE__ */ df(ia);
function at(e, t) {
  if (t.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present");
}
function Jr(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Jr = function(n) {
    return typeof n;
  } : Jr = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Jr(e);
}
function nn(e) {
  at(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || Jr(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), /* @__PURE__ */ new Date(NaN));
}
function cr(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
var YE = {};
function Gs() {
  return YE;
}
function $n(e, t) {
  var n, r, s, a, o, i, l, u;
  at(1, arguments);
  var c = Gs(), v = cr((n = (r = (s = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (o = t.locale) === null || o === void 0 || (i = o.options) === null || i === void 0 ? void 0 : i.weekStartsOn) !== null && s !== void 0 ? s : c.weekStartsOn) !== null && r !== void 0 ? r : (l = c.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(v >= 0 && v <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var m = nn(e), f = m.getDay(), w = (f < v ? 7 : 0) + f - v;
  return m.setDate(m.getDate() - w), m.setHours(0, 0, 0, 0), m;
}
function li(e) {
  var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
var VE = 6048e5;
function UE(e, t, n) {
  at(2, arguments);
  var r = $n(e, n), s = $n(t, n), a = r.getTime() - li(r), o = s.getTime() - li(s);
  return Math.round((a - o) / VE);
}
function jE(e) {
  at(1, arguments);
  var t = nn(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function WE(e) {
  at(1, arguments);
  var t = nn(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function HE(e, t) {
  return at(1, arguments), UE(jE(e), WE(e), t) + 1;
}
function BE(e, t) {
  var n, r, s, a, o, i, l, u;
  at(1, arguments);
  var c = nn(e), v = c.getFullYear(), m = Gs(), f = cr((n = (r = (s = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (o = t.locale) === null || o === void 0 || (i = o.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && s !== void 0 ? s : m.firstWeekContainsDate) !== null && r !== void 0 ? r : (l = m.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(f >= 1 && f <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var w = /* @__PURE__ */ new Date(0);
  w.setFullYear(v + 1, 0, f), w.setHours(0, 0, 0, 0);
  var g = $n(w, t), y = /* @__PURE__ */ new Date(0);
  y.setFullYear(v, 0, f), y.setHours(0, 0, 0, 0);
  var d = $n(y, t);
  return c.getTime() >= g.getTime() ? v + 1 : c.getTime() >= d.getTime() ? v : v - 1;
}
function GE(e, t) {
  var n, r, s, a, o, i, l, u;
  at(1, arguments);
  var c = Gs(), v = cr((n = (r = (s = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (o = t.locale) === null || o === void 0 || (i = o.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && s !== void 0 ? s : c.firstWeekContainsDate) !== null && r !== void 0 ? r : (l = c.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), m = BE(e, t), f = /* @__PURE__ */ new Date(0);
  f.setFullYear(m, 0, v), f.setHours(0, 0, 0, 0);
  var w = $n(f, t);
  return w;
}
var KE = 6048e5;
function qE(e, t) {
  at(1, arguments);
  var n = nn(e), r = $n(n, t).getTime() - GE(n, t).getTime();
  return Math.round(r / KE) + 1;
}
function ma(e) {
  return at(1, arguments), $n(e, {
    weekStartsOn: 1
  });
}
function zE(e) {
  at(1, arguments);
  var t = nn(e), n = t.getFullYear(), r = /* @__PURE__ */ new Date(0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  var s = ma(r), a = /* @__PURE__ */ new Date(0);
  a.setFullYear(n, 0, 4), a.setHours(0, 0, 0, 0);
  var o = ma(a);
  return t.getTime() >= s.getTime() ? n + 1 : t.getTime() >= o.getTime() ? n : n - 1;
}
function XE(e) {
  at(1, arguments);
  var t = zE(e), n = /* @__PURE__ */ new Date(0);
  n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0);
  var r = ma(n);
  return r;
}
var ZE = 6048e5;
function JE(e) {
  at(1, arguments);
  var t = nn(e), n = ma(t).getTime() - XE(t).getTime();
  return Math.round(n / ZE) + 1;
}
function it(e, t) {
  at(2, arguments);
  var n = nn(e), r = cr(t);
  return isNaN(r) ? /* @__PURE__ */ new Date(NaN) : (r && n.setDate(n.getDate() + r), n);
}
function pa(e, t) {
  at(2, arguments);
  var n = nn(e), r = cr(t);
  if (isNaN(r))
    return /* @__PURE__ */ new Date(NaN);
  if (!r)
    return n;
  var s = n.getDate(), a = new Date(n.getTime());
  a.setMonth(n.getMonth() + r + 1, 0);
  var o = a.getDate();
  return s >= o ? a : (n.setFullYear(a.getFullYear(), a.getMonth(), s), n);
}
function ui(e, t) {
  at(2, arguments);
  var n = cr(t);
  return pa(e, n * 12);
}
var xn = /* @__PURE__ */ ((e) => (e.Any = "any", e.All = "all", e))(xn || {}), tu = /* @__PURE__ */ ((e) => (e.Days = "days", e.Weeks = "weeks", e.Months = "months", e.Years = "years", e))(tu || {}), nu = /* @__PURE__ */ ((e) => (e.Days = "days", e.Weekdays = "weekdays", e.Weeks = "weeks", e.Months = "months", e.Years = "years", e))(nu || {}), ru = /* @__PURE__ */ ((e) => (e.OrdinalWeekdays = "ordinalWeekdays", e))(ru || {});
class QE {
  constructor(t, n, r) {
    oe(this, "validated", !0), this.type = t, this.interval = n, this.from = r, this.from || (console.error(
      'A valid "from" date is required for date interval rule. This rule will be skipped.'
    ), this.validated = !1);
  }
  passes(t) {
    if (!this.validated)
      return !0;
    const { date: n } = t;
    switch (this.type) {
      case "days":
        return Ks(this.from.date, n) % this.interval === 0;
      case "weeks":
        return gw(this.from.date, n) % this.interval === 0;
      case "months":
        return _w(this.from.date, n) % this.interval === 0;
      case "years":
        return du(this.from.date, n) % this.interval === 0;
      default:
        return !1;
    }
  }
}
class dr {
  constructor(t, n, r, s) {
    oe(this, "components", []), this.type = t, this.validator = r, this.getter = s, this.components = this.normalizeComponents(n);
  }
  static create(t, n) {
    switch (t) {
      case "days":
        return new ew(n);
      case "weekdays":
        return new tw(n);
      case "weeks":
        return new nw(n);
      case "months":
        return new rw(n);
      case "years":
        return new aw(n);
    }
  }
  normalizeComponents(t) {
    if (this.validator(t))
      return [t];
    if (!wt(t))
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
class ew extends dr {
  constructor(t) {
    super(
      "days",
      t,
      iw,
      ({ day: n, dayFromEnd: r }) => [n, -r]
    );
  }
}
class tw extends dr {
  constructor(t) {
    super(
      "weekdays",
      t,
      Qa,
      ({ weekday: n }) => [n]
    );
  }
}
class nw extends dr {
  constructor(t) {
    super(
      "weeks",
      t,
      lw,
      ({ week: n, weekFromEnd: r }) => [n, -r]
    );
  }
}
class rw extends dr {
  constructor(t) {
    super("months", t, uw, ({ month: n }) => [
      n
    ]);
  }
}
class aw extends dr {
  constructor(t) {
    super("years", t, Pt, ({ year: n }) => [n]);
  }
}
class sw {
  constructor(t, n) {
    oe(this, "components"), this.type = t, this.components = this.normalizeComponents(n);
  }
  normalizeArrayConfig(t) {
    const n = [];
    return t.forEach((r, s) => {
      if (Pt(r)) {
        if (s === 0)
          return;
        if (!ci(t[0])) {
          console.error(
            `Ordinal range for "${this.type}" rule is from -5 to -1 or 1 to 5. This rule will be skipped.`
          );
          return;
        }
        if (!Qa(r)) {
          console.error(
            `Acceptable range for "${this.type}" rule is from 1 to 5. This rule will be skipped`
          );
          return;
        }
        n.push([t[0], r]);
      } else
        wt(r) && n.push(...this.normalizeArrayConfig(r));
    }), n;
  }
  normalizeComponents(t) {
    const n = [];
    return t.forEach((r, s) => {
      if (Pt(r)) {
        if (s === 0)
          return;
        if (!ci(t[0])) {
          console.error(
            `Ordinal range for "${this.type}" rule is from -5 to -1 or 1 to 5. This rule will be skipped.`
          );
          return;
        }
        if (!Qa(r)) {
          console.error(
            `Acceptable range for "${this.type}" rule is from 1 to 5. This rule will be skipped`
          );
          return;
        }
        n.push([t[0], r]);
      } else
        wt(r) && n.push(...this.normalizeArrayConfig(r));
    }), n;
  }
  passes(t) {
    const { weekday: n, weekdayOrdinal: r, weekdayOrdinalFromEnd: s } = t;
    return this.components.some(
      ([a, o]) => (a === r || a === -s) && n === o
    );
  }
}
class ow {
  constructor(t) {
    oe(this, "type", "function"), oe(this, "validated", !0), this.fn = t, Mn(t) || (console.error(
      "The function rule requires a valid function. This rule will be skipped."
    ), this.validated = !1);
  }
  passes(t) {
    return this.validated ? this.fn(t) : !0;
  }
}
class ha {
  constructor(t, n = {}, r) {
    oe(this, "validated", !0), oe(this, "config"), oe(this, "type", xn.Any), oe(this, "from"), oe(this, "until"), oe(this, "rules", []), oe(this, "locale", new _a()), this.parent = r, n.locale && (this.locale = n.locale), this.config = t, Mn(t) ? (this.type = xn.All, this.rules = [new ow(t)]) : wt(t) ? (this.type = xn.Any, this.rules = t.map((s) => new ha(s, n, this))) : Jt(t) ? (this.type = xn.All, this.from = t.from ? this.locale.getDateParts(t.from) : r == null ? void 0 : r.from, this.until = t.until ? this.locale.getDateParts(t.until) : r == null ? void 0 : r.until, this.rules = this.getObjectRules(t)) : (console.error("Rule group configuration must be an object or an array."), this.validated = !1);
  }
  getObjectRules(t) {
    const n = [];
    if (t.every && (Yt(t.every) && (t.every = [1, `${t.every}s`]), wt(t.every))) {
      const [r = 1, s = tu.Days] = t.every;
      n.push(new QE(s, r, this.from));
    }
    return Object.values(nu).forEach((r) => {
      r in t && n.push(dr.create(r, t[r]));
    }), Object.values(ru).forEach((r) => {
      r in t && n.push(new sw(r, t[r]));
    }), t.on != null && (wt(t.on) || (t.on = [t.on]), n.push(
      new ha(t.on, { locale: this.locale }, this.parent)
    )), n;
  }
  passes(t) {
    return this.validated ? this.from && t.dayIndex <= this.from.dayIndex || this.until && t.dayIndex >= this.until.dayIndex ? !1 : this.type === xn.Any ? this.rules.some((n) => n.passes(t)) : this.rules.every((n) => n.passes(t)) : !0;
  }
}
function iw(e) {
  return Pt(e) ? e >= 1 && e <= 31 : !1;
}
function Qa(e) {
  return Pt(e) ? e >= 1 && e <= 7 : !1;
}
function lw(e) {
  return Pt(e) ? e >= -6 && e <= -1 || e >= 1 && e <= 6 : !1;
}
function uw(e) {
  return Pt(e) ? e >= 1 && e <= 12 : !1;
}
function ci(e) {
  return !(!Pt(e) || e < -5 || e > 5 || e === 0);
}
const cw = {
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
}, rt = 7, dw = 6, au = 1e3, su = au * 60, ou = su * 60, Qr = ou * 24, fw = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], vw = ["L", "iso"], yr = {
  milliseconds: [0, 999, 3],
  seconds: [0, 59, 2],
  minutes: [0, 59, 2],
  hours: [0, 23, 2]
}, iu = /d{1,2}|W{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|Z{1,4}|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g, mw = /\[([^]*?)\]/gm, di = {
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
}, an = /\d\d?/, pw = /\d{3}/, hw = /\d{4}/, gr = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF/]+(\s*?[\u0600-\u06FF]+){1,2}/i, fi = () => {
}, vi = (e) => (t, n, r) => {
  const s = r[e].indexOf(
    n.charAt(0).toUpperCase() + n.substr(1).toLowerCase()
  );
  ~s && (t.month = s);
}, Le = {
  D: [
    an,
    (e, t) => {
      e.day = t;
    }
  ],
  Do: [
    new RegExp(an.source + gr.source),
    (e, t) => {
      e.day = parseInt(t, 10);
    }
  ],
  d: [an, fi],
  W: [gr, fi],
  M: [
    an,
    (e, t) => {
      e.month = t - 1;
    }
  ],
  MMM: [gr, vi("monthNamesShort")],
  MMMM: [gr, vi("monthNames")],
  YY: [
    an,
    (e, t) => {
      const r = +(/* @__PURE__ */ new Date()).getFullYear().toString().substr(0, 2);
      e.year = +`${t > 68 ? r - 1 : r}${t}`;
    }
  ],
  YYYY: [
    hw,
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
    pw,
    (e, t) => {
      e.milliseconds = t;
    }
  ],
  h: [
    an,
    (e, t) => {
      e.hours = t;
    }
  ],
  m: [
    an,
    (e, t) => {
      e.minutes = t;
    }
  ],
  s: [
    an,
    (e, t) => {
      e.seconds = t;
    }
  ],
  a: [
    gr,
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
function lu(e, t) {
  return (Xt(e) && e || [
    Yt(e) && e || "YYYY-MM-DD"
  ]).map(
    (n) => vw.reduce(
      (r, s) => r.replace(s, t.masks[s] || ""),
      n
    )
  );
}
function uu(e) {
  return Jt(e) && "year" in e && "month" in e && "day" in e;
}
function mi(e, t = 1) {
  const n = e.getDay() + 1, r = n >= t ? t - n : -(7 - (t - n));
  return it(e, r);
}
function cu(e, t, n) {
  const r = Date.UTC(e, t - 1, n);
  return Ks(/* @__PURE__ */ new Date(0), new Date(r));
}
function Ks(e, t) {
  return Math.round((t.getTime() - e.getTime()) / Qr);
}
function gw(e, t) {
  return Math.ceil(Ks(mi(e), mi(t)) / 7);
}
function du(e, t) {
  return t.getUTCFullYear() - e.getUTCFullYear();
}
function _w(e, t) {
  return du(e, t) * 12 + (t.getMonth() - e.getMonth());
}
function fu(e, t = "") {
  const n = /* @__PURE__ */ new Date(), {
    year: r = n.getFullYear(),
    month: s = n.getMonth() + 1,
    day: a = n.getDate(),
    hours: o = 0,
    minutes: i = 0,
    seconds: l = 0,
    milliseconds: u = 0
  } = e;
  if (t) {
    const c = `${Me(r, 4)}-${Me(s, 2)}-${Me(a, 2)}T${Me(
      o,
      2
    )}:${Me(i, 2)}:${Me(l, 2)}.${Me(u, 3)}`;
    return FE(c, { timeZone: t });
  }
  return new Date(r, s - 1, a, o, i, l, u);
}
function bw(e, t) {
  let n = new Date(e.getTime());
  t.timezone && (n = new Date(
    e.toLocaleString("en-US", { timeZone: t.timezone })
  ), n.setMilliseconds(e.getMilliseconds()));
  const r = n.getMilliseconds(), s = n.getSeconds(), a = n.getMinutes(), o = n.getHours(), i = r + s * au + a * su + o * ou, l = n.getMonth() + 1, u = n.getFullYear(), c = t.getMonthParts(l, u), v = n.getDate(), m = c.numDays - v + 1, f = n.getDay() + 1, w = Math.floor((v - 1) / 7 + 1), g = Math.floor((c.numDays - v) / 7 + 1), y = Math.ceil(
    (v + Math.abs(c.firstWeekday - c.firstDayOfWeek)) / 7
  ), d = c.numWeeks - y + 1, b = c.weeknumbers[y], k = cu(u, l, v);
  return {
    milliseconds: r,
    seconds: s,
    minutes: a,
    hours: o,
    time: i,
    day: v,
    dayFromEnd: m,
    weekday: f,
    weekdayOrdinal: w,
    weekdayOrdinalFromEnd: g,
    week: y,
    weekFromEnd: d,
    weeknumber: b,
    month: l,
    year: u,
    date: n,
    dateTime: n.getTime(),
    dayIndex: k,
    timezoneOffset: 0,
    isValid: !0
  };
}
function yw(e, t, n) {
  return `${t}-${e}-${n}`;
}
function Dw(e, t, n) {
  const r = t % 4 === 0 && t % 100 !== 0 || t % 400 === 0, s = new Date(t, e - 1, 1), a = s.getDay() + 1, o = e === 2 && r ? 29 : fw[e - 1], i = n - 1, l = HE(s, {
    weekStartsOn: i
  }), u = [], c = [];
  for (let v = 0; v < l; v++) {
    const m = it(s, v * 7);
    u.push(qE(m, { weekStartsOn: i })), c.push(JE(m));
  }
  return {
    firstDayOfWeek: n,
    firstDayOfMonth: s,
    inLeapYear: r,
    firstWeekday: a,
    numDays: o,
    numWeeks: l,
    month: e,
    year: t,
    weeknumbers: u,
    isoWeeknumbers: c
  };
}
function Ew() {
  const e = [];
  for (let s = 0; s < rt; s++)
    e.push(
      fu({
        year: 2020,
        month: 1,
        day: 5 + s,
        hours: 12
      })
    );
  return e;
}
function Va(e, t = void 0) {
  const n = new Intl.DateTimeFormat(t, {
    weekday: e
  });
  return Ew().map((r) => n.format(r));
}
function ww() {
  const e = [];
  for (let t = 0; t <= 24; t++)
    e.push(new Date(2e3, 0, 1, t));
  return e;
}
function Ow(e = void 0) {
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
    const a = n.formatToParts(100, s);
    return r[s] = a[1].unit, r;
  }, {});
}
function vu() {
  const e = [];
  for (let t = 0; t < 12; t++)
    e.push(new Date(2e3, t, 15));
  return e;
}
function pi(e, t = void 0) {
  const n = new Intl.DateTimeFormat(t, {
    month: e,
    timeZone: "UTC"
  });
  return vu().map((r) => n.format(r));
}
function $w(e, t, n) {
  return Pt(t) ? t === e : wt(t) ? t.includes(e) : Mn(t) ? t(e, n) : !(t.min != null && t.min > e || t.max != null && t.max < e || t.interval != null && e % t.interval !== 0);
}
function Dr(e, t, n) {
  const r = [], [s, a, o] = t;
  for (let i = s; i <= a; i++)
    (n == null || $w(i, n, e)) && r.push({
      value: i,
      label: Me(i, o)
    });
  return r;
}
function kw(e, t) {
  return {
    milliseconds: Dr(
      e,
      yr.milliseconds,
      t.milliseconds
    ),
    seconds: Dr(e, yr.seconds, t.seconds),
    minutes: Dr(e, yr.minutes, t.minutes),
    hours: Dr(e, yr.hours, t.hours)
  };
}
function Nw(e, t, n, r) {
  const a = Dr(e, t, r).reduce((o, i) => {
    if (i.disabled)
      return o;
    if (isNaN(o))
      return i.value;
    const l = Math.abs(o - n);
    return Math.abs(i.value - n) < l ? i.value : o;
  }, NaN);
  return isNaN(a) ? n : a;
}
function Tw(e, t) {
  const n = { ...e };
  return Object.entries(t).forEach(([r, s]) => {
    const a = yr[r], o = e[r];
    n[r] = Nw(
      e,
      a,
      o,
      s
    );
  }), n;
}
function hi(e, t, n) {
  return lu(t, n).map((s) => {
    if (typeof s != "string")
      throw new Error("Invalid mask");
    let a = e;
    if (a.length > 1e3)
      return !1;
    let o = !0;
    const i = {};
    if (s.replace(iu, (c) => {
      if (Le[c]) {
        const v = Le[c], m = a.search(v[0]);
        ~m ? a.replace(v[0], (f) => (v[1](i, f, n), a = a.substr(m + f.length), f)) : o = !1;
      }
      return Le[c] ? "" : c.slice(1, c.length - 1);
    }), !o)
      return !1;
    const l = /* @__PURE__ */ new Date();
    i.hours != null && (i.isPm === !0 && +i.hours != 12 ? i.hours = +i.hours + 12 : i.isPm === !1 && +i.hours == 12 && (i.hours = 0));
    let u;
    return i.timezoneOffset != null ? (i.minutes = +(i.minutes || 0) - +i.timezoneOffset, u = new Date(
      Date.UTC(
        i.year || l.getFullYear(),
        i.month || 0,
        i.day || 1,
        i.hours || 0,
        i.minutes || 0,
        i.seconds || 0,
        i.milliseconds || 0
      )
    )) : u = n.getDateFromParts({
      year: i.year || l.getFullYear(),
      month: (i.month || 0) + 1,
      day: i.day || 1,
      hours: i.hours || 0,
      minutes: i.minutes || 0,
      seconds: i.seconds || 0,
      milliseconds: i.milliseconds || 0
    }), u;
  }).find((s) => s) || new Date(e);
}
function Iw(e, t, n) {
  if (e == null)
    return "";
  let r = lu(t, n)[0];
  /Z$/.test(r) && (n.timezone = "utc");
  const s = [];
  r = r.replace(mw, (o, i) => (s.push(i), "??"));
  const a = n.getDateParts(e);
  return r = r.replace(
    iu,
    (o) => o in di ? di[o](a, n) : o.slice(1, o.length - 1)
  ), r.replace(/\?\?/g, () => s.shift());
}
const Mw = {
  daily: ["year", "month", "day"],
  weekly: ["year", "month", "week"],
  monthly: ["year", "month"]
};
function Cw({
  monthComps: e,
  prevMonthComps: t,
  nextMonthComps: n
}, r) {
  const s = [], {
    firstDayOfWeek: a,
    firstWeekday: o,
    isoWeeknumbers: i,
    weeknumbers: l,
    numDays: u,
    numWeeks: c
  } = e, v = o + (o < a ? rt : 0) - a;
  let m = !0, f = !1, w = !1, g = 0;
  const y = new Intl.DateTimeFormat(r.id, {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric"
  });
  let d = t.numDays - v + 1, b = t.numDays - d + 1, k = Math.floor((d - 1) / rt + 1), _ = 1, M = t.numWeeks, N = 1, A = t.month, P = t.year;
  const L = /* @__PURE__ */ new Date(), x = L.getDate(), j = L.getMonth() + 1, F = L.getFullYear();
  for (let X = 1; X <= dw; X++) {
    for (let K = 1, U = a; K <= rt; K++, U += U === rt ? 1 - rt : 1) {
      m && U === o && (d = 1, b = e.numDays, k = Math.floor((d - 1) / rt + 1), _ = Math.floor((u - d) / rt + 1), M = 1, N = c, A = e.month, P = e.year, m = !1, f = !0);
      const Y = r.getDateFromParams(P, A, d, 0, 0, 0, 0), ee = r.getDateFromParams(P, A, d, 12, 0, 0, 0), B = r.getDateFromParams(
        P,
        A,
        d,
        23,
        59,
        59,
        999
      ), V = Y, $ = `${Me(P, 4)}-${Me(A, 2)}-${Me(d, 2)}`, q = K, pe = rt - K, $e = l[X - 1], te = i[X - 1], Ee = d === x && A === j && P === F, ge = f && d === 1, Ce = f && d === u, Ne = X === 1, De = X === c, Ve = K === 1, Ye = K === rt, Je = cu(P, A, d);
      s.push({
        locale: r,
        id: $,
        position: ++g,
        label: d.toString(),
        ariaLabel: y.format(new Date(P, A - 1, d)),
        day: d,
        dayFromEnd: b,
        weekday: U,
        weekdayPosition: q,
        weekdayPositionFromEnd: pe,
        weekdayOrdinal: k,
        weekdayOrdinalFromEnd: _,
        week: M,
        weekFromEnd: N,
        weekPosition: X,
        weeknumber: $e,
        isoWeeknumber: te,
        month: A,
        year: P,
        date: V,
        startDate: Y,
        endDate: B,
        noonDate: ee,
        dayIndex: Je,
        isToday: Ee,
        isFirstDay: ge,
        isLastDay: Ce,
        isDisabled: !f,
        isFocusable: !f,
        isFocused: !1,
        inMonth: f,
        inPrevMonth: m,
        inNextMonth: w,
        onTop: Ne,
        onBottom: De,
        onLeft: Ve,
        onRight: Ye,
        classes: [
          `id-${$}`,
          `day-${d}`,
          `day-from-end-${b}`,
          `weekday-${U}`,
          `weekday-position-${q}`,
          `weekday-ordinal-${k}`,
          `weekday-ordinal-from-end-${_}`,
          `week-${M}`,
          `week-from-end-${N}`,
          {
            "is-today": Ee,
            "is-first-day": ge,
            "is-last-day": Ce,
            "in-month": f,
            "in-prev-month": m,
            "in-next-month": w,
            "on-top": Ne,
            "on-bottom": De,
            "on-left": Ve,
            "on-right": Ye
          }
        ]
      }), f && Ce ? (f = !1, w = !0, d = 1, b = u, k = 1, _ = Math.floor((u - d) / rt + 1), M = 1, N = n.numWeeks, A = n.month, P = n.year) : (d++, b--, k = Math.floor((d - 1) / rt + 1), _ = Math.floor((u - d) / rt + 1));
    }
    M++, N--;
  }
  return s;
}
function Pw(e, t, n, r) {
  const s = e.reduce((a, o, i) => {
    const l = Math.floor(i / 7);
    let u = a[l];
    return u || (u = {
      id: `week-${l + 1}`,
      title: "",
      week: o.week,
      weekPosition: o.weekPosition,
      weeknumber: o.weeknumber,
      isoWeeknumber: o.isoWeeknumber,
      weeknumberDisplay: t ? o.weeknumber : n ? o.isoWeeknumber : void 0,
      days: []
    }, a[l] = u), u.days.push(o), a;
  }, Array(e.length / rt));
  return s.forEach((a) => {
    const o = a.days[0], i = a.days[a.days.length - 1];
    o.month === i.month ? a.title = `${r.formatDate(o.date, "MMMM YYYY")}` : o.year === i.year ? a.title = `${r.formatDate(
      o.date,
      "MMM"
    )} - ${r.formatDate(i.date, "MMM YYYY")}` : a.title = `${r.formatDate(
      o.date,
      "MMM YYYY"
    )} - ${r.formatDate(i.date, "MMM YYYY")}`;
  }), s;
}
function Lw(e, t) {
  return e.days.map((n) => ({
    label: t.formatDate(n.date, t.masks.weekdays),
    weekday: n.weekday
  }));
}
function mu(e, t, n) {
  return eu(
    n.getDateParts(n.toDate(e)),
    Mw[t]
  );
}
function pu({ day: e, week: t, month: n, year: r }, s, a, o) {
  if (a === "daily" && e) {
    const i = new Date(r, n - 1, e), l = it(i, s);
    return {
      day: l.getDate(),
      month: l.getMonth() + 1,
      year: l.getFullYear()
    };
  } else if (a === "weekly" && t) {
    const l = o.getMonthParts(n, r).firstDayOfMonth, u = it(l, (t - 1 + s) * 7), c = o.getDateParts(u);
    return {
      week: c.week,
      month: c.month,
      year: c.year
    };
  } else {
    const i = new Date(r, n - 1, 1), l = pa(i, s);
    return {
      month: l.getMonth() + 1,
      year: l.getFullYear()
    };
  }
}
function Vt(e) {
  return e != null && e.month != null && e.year != null;
}
function es(e, t) {
  return !Vt(e) || !Vt(t) ? !1 : (e = e, t = t, e.year !== t.year ? e.year < t.year : e.month && t.month && e.month !== t.month ? e.month < t.month : e.week && t.week && e.week !== t.week ? e.week < t.week : e.day && t.day && e.day !== t.day ? e.day < t.day : !1);
}
function ga(e, t) {
  return !Vt(e) || !Vt(t) ? !1 : (e = e, t = t, e.year !== t.year ? e.year > t.year : e.month && t.month && e.month !== t.month ? e.month > t.month : e.week && t.week && e.week !== t.week ? e.week > t.week : e.day && t.day && e.day !== t.day ? e.day > t.day : !1);
}
function hu(e, t, n) {
  return (e || !1) && !es(e, t) && !ga(e, n);
}
function Sw(e, t) {
  return !e && t || e && !t ? !1 : !e && !t ? !0 : (e = e, t = t, e.year === t.year && e.month === t.month && e.week === t.week && e.day === t.day);
}
function Aw(e, t, n, r) {
  if (!Vt(e) || !Vt(t))
    return [];
  const s = [];
  for (; !ga(e, t); )
    s.push(e), e = pu(e, 1, n, r);
  return s;
}
function gu(e) {
  const { day: t, week: n, month: r, year: s } = e;
  let a = `${s}-${Me(r, 2)}`;
  return n && (a = `${a}-w${n}`), t && (a = `${a}-${Me(t, 2)}`), a;
}
function xw(e, t) {
  const { month: n, year: r, showWeeknumbers: s, showIsoWeeknumbers: a } = e, o = new Date(r, n - 1, 15), i = t.getMonthParts(n, r), l = t.getPrevMonthParts(n, r), u = t.getNextMonthParts(n, r), c = Cw({ monthComps: i, prevMonthComps: l, nextMonthComps: u }, t), v = Pw(c, s, a, t), m = Lw(v[0], t);
  return {
    id: gu(e),
    month: n,
    year: r,
    monthTitle: t.formatDate(o, t.masks.title),
    shortMonthLabel: t.formatDate(o, "MMM"),
    monthLabel: t.formatDate(o, "MMMM"),
    shortYearLabel: r.toString().substring(2),
    yearLabel: r.toString(),
    monthComps: i,
    prevMonthComps: l,
    nextMonthComps: u,
    days: c,
    weeks: v,
    weekdays: m
  };
}
function Rw(e, t) {
  const { day: n, week: r, view: s, trimWeeks: a } = e, o = {
    ...t,
    ...e,
    title: "",
    viewDays: [],
    viewWeeks: []
  };
  switch (s) {
    case "daily": {
      let i = o.days.find((u) => u.inMonth);
      n ? i = o.days.find((u) => u.day === n && u.inMonth) || i : r && (i = o.days.find((u) => u.week === r && u.inMonth));
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
        a ? o.monthComps.numWeeks : void 0
      ), o.viewDays = o.days;
      break;
    }
  }
  return o;
}
class gi {
  constructor(t, n, r) {
    oe(this, "keys", []), oe(this, "store", {}), this.size = t, this.createKey = n, this.createItem = r;
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
class Gn {
  constructor(t, n = new _a()) {
    oe(this, "order"), oe(this, "locale"), oe(this, "start", null), oe(this, "end", null), oe(this, "repeat", null);
    var r;
    this.locale = n;
    const { start: s, end: a, span: o, order: i, repeat: l } = t;
    Bn(s) && (this.start = n.getDateParts(s)), Bn(a) ? this.end = n.getDateParts(a) : this.start != null && o && (this.end = n.getDateParts(it(this.start.date, o - 1))), this.order = i ?? 0, l && (this.repeat = new ha(
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
    return (wt(t) ? t : [t]).filter((r) => r).map((r) => Gn.from(r, n));
  }
  static from(t, n) {
    if (t instanceof Gn)
      return t;
    const r = {
      start: null,
      end: null
    };
    return t != null && (wt(t) ? (r.start = t[0] ?? null, r.end = t[1] ?? null) : Jt(t) ? Object.assign(r, t) : (r.start = t, r.end = t)), r.start != null && (r.start = new Date(r.start)), r.end != null && (r.end = new Date(r.end)), new Gn(r, n);
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
class Fw {
  constructor() {
    oe(this, "records", {});
  }
  render(t, n, r) {
    var s, a, o, i;
    let l = null;
    const u = r[0].dayIndex, c = r[r.length - 1].dayIndex;
    return n.hasRepeat ? r.forEach((v) => {
      var m, f;
      if (n.startsOnDay(v)) {
        const w = n.daySpan < 1 / 0 ? n.daySpan : 1;
        l = {
          startDay: v.dayIndex,
          startTime: ((m = n.start) == null ? void 0 : m.time) ?? 0,
          endDay: v.dayIndex + w - 1,
          endTime: ((f = n.end) == null ? void 0 : f.time) ?? Qr
        }, this.getRangeRecords(t).push(l);
      }
    }) : n.intersectsDayRange(u, c) && (l = {
      startDay: ((s = n.start) == null ? void 0 : s.dayIndex) ?? -1 / 0,
      startTime: ((a = n.start) == null ? void 0 : a.time) ?? -1 / 0,
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
    return this.getCells(n).find((a) => a.data.key === t);
  }
  cellExists(t, n) {
    const r = this.records[t];
    return r == null ? !1 : r.ranges.some(
      (s) => s.startDay <= n && s.endDay >= n
    );
  }
  getCells(t) {
    const n = Object.values(this.records), r = [], { dayIndex: s } = t;
    return n.forEach(({ data: a, ranges: o }) => {
      o.filter((i) => i.startDay <= s && i.endDay >= s).forEach((i) => {
        const l = s === i.startDay, u = s === i.endDay, c = l ? i.startTime : 0, v = new Date(t.startDate.getTime() + c), m = u ? i.endTime : Qr, f = new Date(t.endDate.getTime() + m), w = c === 0 && m === Qr, g = a.order || 0;
        r.push({
          ...i,
          data: a,
          onStart: l,
          onEnd: u,
          startTime: c,
          startDate: v,
          endTime: m,
          endDate: f,
          allDay: w,
          order: g
        });
      });
    }), r.sort((a, o) => a.order - o.order), r;
  }
}
const Yw = 12, Vw = 5;
function Uw(e, t) {
  const n = new Intl.DateTimeFormat().resolvedOptions().locale;
  let r;
  Yt(e) ? r = e : Ws(e, "id") && (r = e.id), r = (r || n).toLowerCase();
  const s = Object.keys(t), a = (l) => s.find((u) => u.toLowerCase() === l);
  r = a(r) || a(r.substring(0, 2)) || n;
  const o = {
    ...t["en-IE"],
    ...t[r],
    id: r,
    monthCacheSize: Yw,
    pageCacheSize: Vw
  };
  return Jt(e) ? Pr(e, o) : o;
}
class _a {
  constructor(t = void 0, n) {
    oe(this, "id"), oe(this, "daysInWeek"), oe(this, "firstDayOfWeek"), oe(this, "masks"), oe(this, "timezone"), oe(this, "hourLabels"), oe(this, "dayNames"), oe(this, "dayNamesShort"), oe(this, "dayNamesShorter"), oe(this, "dayNamesNarrow"), oe(this, "monthNames"), oe(this, "monthNamesShort"), oe(this, "relativeTimeNames"), oe(this, "amPm", ["am", "pm"]), oe(this, "monthCache"), oe(this, "pageCache");
    const { id: r, firstDayOfWeek: s, masks: a, monthCacheSize: o, pageCacheSize: i } = Uw(t, ME.value);
    this.monthCache = new gi(
      o,
      yw,
      Dw
    ), this.pageCache = new gi(i, gu, xw), this.id = r, this.daysInWeek = rt, this.firstDayOfWeek = tE(s, 1, rt), this.masks = a, this.timezone = n || void 0, this.hourLabels = this.getHourLabels(), this.dayNames = Va("long", this.id), this.dayNamesShort = Va("short", this.id), this.dayNamesShorter = this.dayNamesShort.map((l) => l.substring(0, 2)), this.dayNamesNarrow = Va("narrow", this.id), this.monthNames = pi("long", this.id), this.monthNamesShort = pi("short", this.id), this.relativeTimeNames = Ow(this.id);
  }
  formatDate(t, n) {
    return Iw(t, n, this);
  }
  parseDate(t, n) {
    return hi(t, n, this);
  }
  toDate(t, n = {}) {
    const r = /* @__PURE__ */ new Date(NaN);
    let s = r;
    const { fillDate: a, mask: o, patch: i, rules: l } = n;
    if (Pt(t) ? (n.type = "number", s = /* @__PURE__ */ new Date(+t)) : Yt(t) ? (n.type = "string", s = t ? hi(t, o || "iso", this) : r) : Bn(t) ? (n.type = "date", s = new Date(t.getTime())) : uu(t) && (n.type = "object", s = this.getDateFromParts(t)), s && (i || l)) {
      let u = this.getDateParts(s);
      if (i && a != null) {
        const c = this.getDateParts(this.toDate(a));
        u = this.getDateParts(
          this.toDate({ ...c, ...eu(u, cw[i]) })
        );
      }
      l && (u = Tw(u, l)), s = this.getDateFromParts(u);
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
    return Gn.from(t, this);
  }
  ranges(t) {
    return Gn.fromMany(t, this);
  }
  getDateParts(t) {
    return bw(t, this);
  }
  getDateFromParts(t) {
    return fu(t, this.timezone);
  }
  getDateFromParams(t, n, r, s, a, o, i) {
    return this.getDateFromParts({
      year: t,
      month: n,
      day: r,
      hours: s,
      minutes: a,
      seconds: o,
      milliseconds: i
    });
  }
  getPage(t) {
    const n = this.pageCache.getOrSet(t, this);
    return Rw(t, n);
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
    return ww().map((t) => this.formatDate(t, this.masks.hours));
  }
  getDayId(t) {
    return this.formatDate(t, "YYYY-MM-DD");
  }
}
class _u {
  constructor(t, n, r) {
    oe(this, "key", ""), oe(this, "hashcode", ""), oe(this, "highlight", null), oe(this, "content", null), oe(this, "dot", null), oe(this, "bar", null), oe(this, "event", null), oe(this, "popover", null), oe(this, "customData", null), oe(this, "ranges"), oe(this, "hasRanges", !1), oe(this, "order", 0), oe(this, "pinPage", !1), oe(this, "maxRepeatSpan", 0), oe(this, "locale");
    const { dates: s } = Object.assign(
      this,
      { hashcode: "", order: 0, pinPage: !1 },
      t
    );
    this.key || (this.key = oa()), this.locale = r, n.normalizeGlyphs(this), this.ranges = r.ranges(s ?? []), this.hasRanges = !!Xt(this.ranges), this.maxRepeatSpan = this.ranges.filter((a) => a.hasRepeat).map((a) => a.daySpan).reduce((a, o) => Math.max(a, o), 0);
  }
  intersectsRange({ start: t, end: n }) {
    if (t == null || n == null)
      return !1;
    const r = this.ranges.filter((o) => !o.hasRepeat);
    for (const o of r)
      if (o.intersectsDayRange(t.dayIndex, n.dayIndex))
        return !0;
    const s = this.ranges.filter((o) => o.hasRepeat);
    if (!s.length)
      return !1;
    let a = t;
    for (this.maxRepeatSpan > 1 && (a = this.locale.getDateParts(it(a.date, -this.maxRepeatSpan))); a.dayIndex <= n.dayIndex; ) {
      for (const o of s)
        if (o.startsOnDay(a))
          return !0;
      a = this.locale.getDateParts(it(a.date, 1));
    }
    return !1;
  }
}
const bu = "__vc_base_context__", yu = {
  color: {
    type: String,
    default: () => mn("color")
  },
  isDark: {
    type: [Boolean, String, Object],
    default: () => mn("isDark")
  },
  firstDayOfWeek: Number,
  masks: Object,
  locale: [String, Object],
  timezone: String,
  minDate: null,
  maxDate: null,
  disabledDates: null
};
function Du(e) {
  const t = C(() => e.color ?? ""), n = C(() => e.isDark ?? !1), { displayMode: r } = cf(n), s = C(() => new uE(t.value)), a = C(() => {
    if (e.locale instanceof _a)
      return e.locale;
    const c = Jt(e.locale) ? e.locale : {
      id: e.locale,
      firstDayOfWeek: e.firstDayOfWeek,
      masks: e.masks
    };
    return new _a(c, e.timezone);
  }), o = C(() => a.value.masks), i = C(() => {
    const c = e.disabledDates ?? [];
    return e.minDate != null && c.push({
      start: null,
      end: it(a.value.toDate(e.minDate), -1)
    }), e.maxDate != null && c.push({
      start: it(a.value.toDate(e.maxDate), 1),
      end: null
    }), a.value.ranges(c);
  }), l = C(() => new _u(
    {
      key: "disabled",
      dates: i.value,
      order: 100
    },
    s.value,
    a.value
  )), u = {
    color: t,
    isDark: n,
    displayMode: r,
    theme: s,
    locale: a,
    masks: o,
    disabledDates: i,
    disabledAttribute: l
  };
  return qn(bu, u), u;
}
function jw(e) {
  return yt(bu, Du(e));
}
const Ww = (e, t, {
  maxSwipeTime: n,
  minHorizontalSwipeDistance: r,
  maxVerticalSwipeDistance: s
}) => {
  if (!e || !e.addEventListener || !Mn(t))
    return null;
  let a = 0, o = 0, i = null, l = !1;
  function u(v) {
    const m = v.changedTouches[0];
    a = m.screenX, o = m.screenY, i = (/* @__PURE__ */ new Date()).getTime(), l = !0;
  }
  function c(v) {
    if (!l || !i)
      return;
    l = !1;
    const m = v.changedTouches[0], f = m.screenX - a, w = m.screenY - o;
    if ((/* @__PURE__ */ new Date()).getTime() - i < n && Math.abs(f) >= r && Math.abs(w) <= s) {
      const y = { toLeft: !1, toRight: !1 };
      f < 0 ? y.toLeft = !0 : y.toRight = !0, t(y);
    }
  }
  return dn(e, "touchstart", u, { passive: !0 }), dn(e, "touchend", c, { passive: !0 }), () => {
    cn(e, "touchstart", u), cn(e, "touchend", c);
  };
}, ea = {}, Hw = (e, t = 10) => {
  ea[e] = Date.now() + t;
}, Bw = (e, t) => {
  if (e in ea) {
    const n = ea[e];
    if (Date.now() < n)
      return;
    delete ea[e];
  }
  t();
}, Gw = {
  ...yu,
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
    default: () => mn("titlePosition")
  },
  navVisibility: {
    type: String,
    default: () => mn("navVisibility")
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
}, Kw = [
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
], Eu = "__vc_calendar_context__";
function qw(e, { emit: t, slots: n }) {
  const r = re(null), s = re(null), a = re(null), o = re((/* @__PURE__ */ new Date()).getDate()), i = re(!1), l = re(oa()), u = re(oa()), c = re(e.view), v = re([]), m = re("");
  let f = null, w = null;
  const {
    theme: g,
    color: y,
    displayMode: d,
    locale: b,
    masks: k,
    disabledAttribute: _,
    disabledDates: M
  } = jw(e), N = C(() => e.rows * e.columns), A = C(() => e.step || N.value), P = C(() => Jl(v.value) ?? null), L = C(() => Wn(v.value) ?? null), x = C(
    () => e.minPage || (e.minDate ? q(e.minDate) : null)
  ), j = C(
    () => e.maxPage || (e.maxDate ? q(e.maxDate) : null)
  ), F = C(() => e.navVisibility), X = C(() => !!e.showWeeknumbers), K = C(() => !!e.showIsoWeeknumbers), U = C(() => c.value === "monthly"), Y = C(() => c.value === "weekly"), ee = C(() => c.value === "daily"), B = () => {
    i.value = !0, t("transition-start");
  }, V = () => {
    i.value = !1, t("transition-end"), f && (f.resolve(!0), f = null);
  }, $ = (W, z, de = c.value) => pu(W, z, de, b.value), q = (W) => mu(W, c.value, b.value), pe = (W) => {
    !_.value || !Ne.value || (W.isDisabled = Ne.value.cellExists(
      _.value.key,
      W.dayIndex
    ));
  }, $e = (W) => {
    W.isFocusable = W.inMonth && W.day === o.value;
  }, te = (W, z) => {
    for (const de of W)
      for (const I of de.days)
        if (z(I) === !1)
          return;
  }, Ee = C(
    () => v.value.reduce((W, z) => (W.push(...z.viewDays), W), [])
  ), ge = C(() => {
    const W = [];
    return (e.attributes || []).forEach((z, de) => {
      if (!z || !z.dates)
        return;
      const I = Ws(z, "key") ? z.key : de, G = z.order || 0;
      W.push(
        new _u(
          {
            ...z,
            key: I,
            order: G
          },
          g.value,
          b.value
        )
      );
    }), _.value && W.push(_.value), W;
  }), Ce = C(() => Xt(ge.value)), Ne = C(() => {
    const W = new Fw();
    return ge.value.forEach((z) => {
      z.ranges.forEach((de) => {
        W.render(z, de, Ee.value);
      });
    }), W;
  }), De = C(() => Ee.value.reduce((W, z) => (W[z.dayIndex] = { day: z, cells: [] }, W[z.dayIndex].cells.push(...Ne.value.getCells(z)), W), {})), Ve = (W, z) => {
    const de = e.showWeeknumbers || e.showIsoWeeknumbers;
    return de == null ? "" : Xf(de) ? de ? "left" : "" : de.startsWith("right") ? z > 1 ? "right" : de : W > 1 ? "left" : de;
  }, Ye = () => {
    var W, z;
    if (!Ce.value)
      return null;
    const de = ge.value.find((ue) => ue.pinPage) || ge.value[0];
    if (!de || !de.hasRanges)
      return null;
    const [I] = de.ranges, G = ((W = I.start) == null ? void 0 : W.date) || ((z = I.end) == null ? void 0 : z.date);
    return G ? q(G) : null;
  }, Je = () => {
    if (Vt(P.value))
      return P.value;
    const W = Ye();
    return Vt(W) ? W : q(/* @__PURE__ */ new Date());
  }, D = (W, z = {}) => {
    const { view: de = c.value, position: I = 1, force: G } = z, ue = I > 0 ? 1 - I : -(N.value + I);
    let we = $(W, ue, de), Ke = $(we, N.value - 1, de);
    return G || (es(we, x.value) ? we = x.value : ga(Ke, j.value) && (we = $(j.value, 1 - N.value)), Ke = $(we, N.value - 1)), { fromPage: we, toPage: Ke };
  }, h = (W, z, de = "") => {
    if (de === "none" || de === "fade")
      return de;
    if ((W == null ? void 0 : W.view) !== (z == null ? void 0 : z.view))
      return "fade";
    const I = ga(z, W), G = es(z, W);
    return !I && !G ? "fade" : de === "slide-v" ? G ? "slide-down" : "slide-up" : G ? "slide-right" : "slide-left";
  }, S = (W = {}) => new Promise((z, de) => {
    const { position: I = 1, force: G = !1, transition: ue } = W, we = Vt(W.page) ? W.page : Je(), { fromPage: Ke } = D(we, {
      position: I,
      force: G
    }), Tt = [];
    for (let lt = 0; lt < N.value; lt++) {
      const Sn = $(Ke, lt), vr = lt + 1, jr = Math.ceil(vr / e.columns), _t = e.rows - jr + 1, Wr = vr % e.columns || e.columns, mr = e.columns - Wr + 1, Aa = Ve(Wr, mr);
      Tt.push(
        b.value.getPage({
          ...Sn,
          view: c.value,
          titlePosition: e.titlePosition,
          trimWeeks: e.trimWeeks,
          position: vr,
          row: jr,
          rowFromEnd: _t,
          column: Wr,
          columnFromEnd: mr,
          showWeeknumbers: X.value,
          showIsoWeeknumbers: K.value,
          weeknumberPosition: Aa
        })
      );
    }
    m.value = h(
      v.value[0],
      Tt[0],
      ue
    ), v.value = Tt, m.value && m.value !== "none" ? f = {
      resolve: z,
      reject: de
    } : z(!0);
  }), J = (W) => {
    const z = P.value ?? q(/* @__PURE__ */ new Date());
    return $(z, W);
  }, ie = (W, z = {}) => {
    const de = Vt(W) ? W : q(W);
    return Object.assign(
      z,
      D(de, {
        ...z,
        force: !0
      })
    ), Aw(
      z.fromPage,
      z.toPage,
      c.value,
      b.value
    ).map((G) => hu(G, x.value, j.value)).every((G) => G);
  }, _e = (W, z = {}) => ie(J(W), z), nt = C(() => _e(-A.value)), He = C(() => _e(A.value)), gt = async (W, z = {}) => !z.force && !ie(W, z) ? !1 : (z.fromPage && !Sw(z.fromPage, P.value) && (s.value && s.value.hide({ hideDelay: 0 }), z.view && (Hw("view", 10), c.value = z.view), await S({
    ...z,
    page: z.fromPage,
    position: 1,
    force: !0
  }), t("did-move", v.value)), !0), At = (W, z = {}) => gt(J(W), z), Ie = () => At(-A.value), R = () => At(A.value), H = (W) => {
    const z = U.value ? ".in-month" : "", de = `.id-${b.value.getDayId(W)}${z}`, I = `${de}.vc-focusable, ${de} .vc-focusable`, G = r.value;
    if (G) {
      const ue = G.querySelector(I);
      if (ue)
        return ue.focus(), !0;
    }
    return !1;
  }, Ue = async (W, z = {}) => H(W) ? !0 : (await gt(W, z), H(W)), je = (W, z) => {
    o.value = W.day, t("dayclick", W, z);
  }, xt = (W, z) => {
    t("daymouseenter", W, z);
  }, rn = (W, z) => {
    t("daymouseleave", W, z);
  }, kt = (W, z) => {
    o.value = W.day, a.value = W, W.isFocused = !0, t("dayfocusin", W, z);
  }, Nt = (W, z) => {
    a.value = null, W.isFocused = !1, t("dayfocusout", W, z);
  }, bn = (W, z) => {
    t("daykeydown", W, z);
    const de = W.noonDate;
    let I = null;
    switch (z.key) {
      case "ArrowLeft": {
        I = it(de, -1);
        break;
      }
      case "ArrowRight": {
        I = it(de, 1);
        break;
      }
      case "ArrowUp": {
        I = it(de, -7);
        break;
      }
      case "ArrowDown": {
        I = it(de, 7);
        break;
      }
      case "Home": {
        I = it(de, -W.weekdayPosition + 1);
        break;
      }
      case "End": {
        I = it(de, W.weekdayPositionFromEnd);
        break;
      }
      case "PageUp": {
        z.altKey ? I = ui(de, -1) : I = pa(de, -1);
        break;
      }
      case "PageDown": {
        z.altKey ? I = ui(de, 1) : I = pa(de, 1);
        break;
      }
    }
    I && (z.preventDefault(), Ue(I).catch());
  }, Ln = (W) => {
    const z = a.value;
    z != null && bn(z, W);
  }, Sa = (W, z) => {
    t("weeknumberclick", W, z);
  };
  S({
    page: e.initialPage,
    position: e.initialPagePosition
  }), hn(() => {
    !e.disablePageSwipe && r.value && (w = Ww(
      r.value,
      ({ toLeft: W = !1, toRight: z = !1 }) => {
        W ? R() : z && Ie();
      },
      mn("touch")
    ));
  }), xr(() => {
    v.value = [], w && w();
  }), Te(
    () => b.value,
    () => {
      S();
    }
  ), Te(
    () => N.value,
    () => S()
  ), Te(
    () => e.view,
    () => c.value = e.view
  ), Te(
    () => c.value,
    () => {
      Bw("view", () => {
        S();
      }), t("update:view", c.value);
    }
  ), Te(
    () => o.value,
    () => {
      te(v.value, (W) => $e(W));
    }
  ), ps(() => {
    t("update:pages", v.value), te(v.value, (W) => {
      pe(W), $e(W);
    });
  });
  const Ur = {
    emit: t,
    slots: n,
    containerRef: r,
    navPopoverRef: s,
    focusedDay: a,
    inTransition: i,
    navPopoverId: l,
    dayPopoverId: u,
    view: c,
    pages: v,
    transitionName: m,
    theme: g,
    color: y,
    displayMode: d,
    locale: b,
    masks: k,
    attributes: ge,
    disabledAttribute: _,
    disabledDates: M,
    attributeContext: Ne,
    days: Ee,
    dayCells: De,
    count: N,
    step: A,
    firstPage: P,
    lastPage: L,
    canMovePrev: nt,
    canMoveNext: He,
    minPage: x,
    maxPage: j,
    isMonthly: U,
    isWeekly: Y,
    isDaily: ee,
    navVisibility: F,
    showWeeknumbers: X,
    showIsoWeeknumbers: K,
    getDateAddress: q,
    canMove: ie,
    canMoveBy: _e,
    move: gt,
    moveBy: At,
    movePrev: Ie,
    moveNext: R,
    onTransitionBeforeEnter: B,
    onTransitionAfterEnter: V,
    tryFocusDate: H,
    focusDate: Ue,
    onKeydown: Ln,
    onDayKeydown: bn,
    onDayClick: je,
    onDayMouseenter: xt,
    onDayMouseleave: rn,
    onDayFocusin: kt,
    onDayFocusout: Nt,
    onWeeknumberClick: Sa
  };
  return qn(Eu, Ur), Ur;
}
function Pn() {
  const e = yt(Eu);
  if (e)
    return e;
  throw new Error(
    "Calendar context missing. Please verify this component is nested within a valid context provider."
  );
}
const zw = {
  inheritAttrs: !1
}, Kn = /* @__PURE__ */ Se({
  ...zw,
  __name: "CalendarSlot",
  props: {
    name: null
  },
  setup(e) {
    const { slots: t } = Pn();
    return (n, r) => p(t)[e.name] ? (O(), qe(rl(p(t)[e.name]), al(rr({ key: 0 }, n.$attrs)), null, 16)) : jt(n.$slots, "default", { key: 1 });
  }
});
function ts(e) {
  document && document.dispatchEvent(
    new CustomEvent("show-popover", {
      detail: e
    })
  );
}
function ba(e) {
  document && document.dispatchEvent(
    new CustomEvent("hide-popover", {
      detail: e
    })
  );
}
function wu(e) {
  document && document.dispatchEvent(
    new CustomEvent("toggle-popover", {
      detail: e
    })
  );
}
function Ou(e) {
  const { visibility: t } = e, n = t === "click", r = t === "hover", s = t === "hover-focus", a = t === "focus";
  e.autoHide = !n;
  let o = !1, i = !1;
  const l = (w) => {
    n && (wu({
      ...e,
      target: e.target || w.currentTarget
    }), w.stopPropagation());
  }, u = (w) => {
    o || (o = !0, (r || s) && ts({
      ...e,
      target: e.target || w.currentTarget
    }));
  }, c = () => {
    o && (o = !1, (r || s && !i) && ba(e));
  }, v = (w) => {
    i || (i = !0, (a || s) && ts({
      ...e,
      target: e.target || w.currentTarget
    }));
  }, m = (w) => {
    i && !Zr(w.currentTarget, w.relatedTarget) && (i = !1, (a || s && !o) && ba(e));
  }, f = {};
  switch (e.visibility) {
    case "click":
      f.click = l;
      break;
    case "hover":
      f.mousemove = u, f.mouseleave = c;
      break;
    case "focus":
      f.focusin = v, f.focusout = m;
      break;
    case "hover-focus":
      f.mousemove = u, f.mouseleave = c, f.focusin = v, f.focusout = m;
      break;
  }
  return f;
}
const _i = (e) => {
  const t = sa(e);
  if (t == null)
    return;
  const n = t.popoverHandlers;
  !n || !n.length || (n.forEach((r) => r()), delete t.popoverHandlers);
}, bi = (e, t) => {
  const n = sa(e);
  if (n == null)
    return;
  const r = [], s = Ou(t);
  Object.entries(s).forEach(([a, o]) => {
    r.push(dn(n, a, o));
  }), n.popoverHandlers = r;
}, $u = {
  mounted(e, t) {
    const { value: n } = t;
    n && bi(e, n);
  },
  updated(e, t) {
    const { oldValue: n, value: r } = t, s = n == null ? void 0 : n.visibility, a = r == null ? void 0 : r.visibility;
    s !== a && (s && (_i(e), a || ba(n)), a && bi(e, r));
  },
  unmounted(e) {
    _i(e);
  }
}, Xw = ["disabled"], Zw = {
  key: 1,
  type: "button",
  class: "vc-title"
}, Jw = ["disabled"], ku = /* @__PURE__ */ Se({
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
      movePrev: a,
      canMoveNext: o,
      moveNext: i
    } = Pn(), l = C(() => {
      switch (t.page.titlePosition) {
        case "left":
          return "bottom-start";
        case "right":
          return "bottom-end";
        default:
          return "bottom";
      }
    }), u = C(() => {
      const { page: g } = t;
      return {
        id: n.value,
        visibility: r.value,
        placement: l.value,
        modifiers: [{ name: "flip", options: { fallbackPlacements: ["bottom"] } }],
        data: { page: g },
        isInteractive: !0
      };
    }), c = C(() => t.page.titlePosition.includes("left")), v = C(() => t.page.titlePosition.includes("right")), m = C(() => t.layout ? t.layout : c.value ? "tu-pn" : v.value ? "pn-tu" : "p-tu-n;"), f = C(() => ({
      prev: m.value.includes("p") && !t.hideArrows,
      title: m.value.includes("t") && !t.hideTitle,
      next: m.value.includes("n") && !t.hideArrows
    })), w = C(() => ({ gridTemplateColumns: m.value.split("").map((y) => {
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
    return (g, y) => (O(), T("div", {
      class: Ge(["vc-header", { "is-lg": e.isLg, "is-xl": e.isXl, "is-2xl": e.is2xl }]),
      style: Er(p(w))
    }, [
      p(f).prev ? (O(), T("button", {
        key: 0,
        type: "button",
        class: "vc-arrow vc-prev vc-focus",
        disabled: !p(s),
        onClick: y[0] || (y[0] = //@ts-ignore
        (...d) => p(a) && p(a)(...d)),
        onKeydown: y[1] || (y[1] = io(
          //@ts-ignore
          (...d) => p(a) && p(a)(...d),
          ["space", "enter"]
        ))
      }, [
        me(Kn, {
          name: "header-prev-button",
          disabled: !p(s)
        }, {
          default: ze(() => [
            me(Qn, {
              name: "ChevronLeft",
              size: "24"
            })
          ]),
          _: 1
        }, 8, ["disabled"])
      ], 40, Xw)) : Q("", !0),
      p(f).title ? Pe((O(), T("button", Zw, [
        me(Kn, {
          name: "header-title",
          title: e.page.title
        }, {
          default: ze(() => [
            E("span", null, le(e.page.title), 1)
          ]),
          _: 1
        }, 8, ["title"])
      ])), [
        [p($u), p(u)]
      ]) : Q("", !0),
      p(f).next ? (O(), T("button", {
        key: 2,
        type: "button",
        class: "vc-arrow vc-next vc-focus",
        disabled: !p(o),
        onClick: y[2] || (y[2] = //@ts-ignore
        (...d) => p(i) && p(i)(...d)),
        onKeydown: y[3] || (y[3] = io(
          //@ts-ignore
          (...d) => p(i) && p(i)(...d),
          ["space", "enter"]
        ))
      }, [
        me(Kn, {
          name: "header-next-button",
          disabled: !p(o)
        }, {
          default: ze(() => [
            me(Qn, {
              name: "ChevronRight",
              size: "24"
            })
          ]),
          _: 1
        }, 8, ["disabled"])
      ], 40, Jw)) : Q("", !0)
    ], 6));
  }
}), Qw = Se({
  directives: { popover: $u },
  components: { CalendarSlot: Kn },
  props: {
    day: { type: Object, required: !0 }
  },
  setup(e) {
    const {
      locale: t,
      theme: n,
      attributeContext: r,
      dayPopoverId: s,
      slots: a,
      onDayClick: o,
      onDayMouseenter: i,
      onDayMouseleave: l,
      onDayFocusin: u,
      onDayFocusout: c,
      onDayKeydown: v
    } = Pn(), m = C(() => e.day), f = C(() => r.value.getCells(m.value)), w = C(
      () => f.value.map((U) => U.data)
    ), g = C(() => ({
      ...m.value,
      attributes: w.value,
      attributeCells: f.value
    }));
    function y({ data: U }, { popovers: Y }) {
      const { key: ee, customData: B, popover: V } = U;
      if (!V)
        return;
      const $ = Qo(
        {
          key: ee,
          customData: B,
          attribute: U
        },
        { ...V },
        {
          visibility: V.label ? "hover" : "click",
          placement: "bottom",
          isInteractive: !V.label
        }
      );
      Y.splice(0, 0, $);
    }
    const d = C(() => {
      const U = {
        ...n.value.prepareRender({}),
        popovers: []
      };
      return f.value.forEach((Y) => {
        n.value.render(Y, U), y(Y, U);
      }), U;
    }), b = C(() => d.value.highlights), k = C(() => !!Xt(b.value)), _ = C(() => d.value.content), M = C(() => d.value.dots), N = C(() => !!Xt(M.value)), A = C(() => d.value.bars), P = C(() => !!Xt(A.value)), L = C(() => d.value.popovers), x = C(
      () => L.value.map((U) => U.attribute)
    ), j = C(() => [
      "vc-day",
      ...m.value.classes,
      { "vc-day-box-center-center": !a["day-content"] },
      { "is-not-in-month": !e.day.inMonth }
    ]), F = C(() => {
      let U;
      m.value.isFocusable ? U = "0" : U = "-1";
      const Y = [
        "vc-day-content vc-focusable vc-focus vc-attr",
        { "vc-disabled": m.value.isDisabled },
        Dn(Wn(b.value), "contentClass"),
        Dn(Wn(_.value), "class") || ""
      ], ee = {
        ...Dn(Wn(b.value), "contentStyle"),
        ...Dn(Wn(_.value), "style")
      };
      return {
        class: Y,
        style: ee,
        tabindex: U,
        "aria-label": m.value.ariaLabel,
        "aria-disabled": !!m.value.isDisabled,
        role: "button"
      };
    }), X = C(() => ({
      click(U) {
        o(g.value, U);
      },
      mouseenter(U) {
        i(g.value, U);
      },
      mouseleave(U) {
        l(g.value, U);
      },
      focusin(U) {
        u(g.value, U);
      },
      focusout(U) {
        c(g.value, U);
      },
      keydown(U) {
        v(g.value, U);
      }
    })), K = C(() => Xt(L.value) ? Qo(
      {
        id: s.value,
        data: { day: m, attributes: x.value }
      },
      ...L.value
    ) : null);
    return {
      attributes: w,
      attributeCells: f,
      bars: A,
      dayClasses: j,
      dayContentProps: F,
      dayContentEvents: X,
      dayPopover: K,
      glyphs: d,
      dots: M,
      hasDots: N,
      hasBars: P,
      highlights: b,
      hasHighlights: k,
      locale: t,
      popovers: L
    };
  }
}), eO = {
  key: 0,
  class: "vc-highlights vc-day-layer"
}, tO = {
  key: 1,
  class: "vc-day-layer vc-day-box-center-bottom"
}, nO = { class: "vc-dots" }, rO = {
  key: 2,
  class: "vc-day-layer vc-day-box-center-bottom"
}, aO = { class: "vc-bars" };
function sO(e, t, n, r, s, a) {
  const o = fn("CalendarSlot"), i = uc("popover");
  return O(), T("div", {
    class: Ge(e.dayClasses)
  }, [
    e.hasHighlights ? (O(), T("div", eO, [
      (O(!0), T(ne, null, he(e.highlights, ({ key: l, wrapperClass: u, class: c, style: v }) => (O(), T("div", {
        key: l,
        class: Ge(u)
      }, [
        E("div", {
          class: Ge(c),
          style: Er(v)
        }, null, 6)
      ], 2))), 128))
    ])) : Q("", !0),
    me(o, {
      name: "day-content",
      day: e.day,
      attributes: e.attributes,
      "attribute-cells": e.attributeCells,
      dayProps: e.dayContentProps,
      dayEvents: e.dayContentEvents,
      locale: e.locale
    }, {
      default: ze(() => [
        Pe((O(), T("div", rr(e.dayContentProps, cc(e.dayContentEvents, !0)), [
          Rr(le(e.day.label), 1)
        ], 16)), [
          [i, e.dayPopover]
        ])
      ]),
      _: 1
    }, 8, ["day", "attributes", "attribute-cells", "dayProps", "dayEvents", "locale"]),
    e.hasDots ? (O(), T("div", tO, [
      E("div", nO, [
        (O(!0), T(ne, null, he(e.dots, ({ key: l, class: u, style: c }) => (O(), T("span", {
          key: l,
          class: Ge(u),
          style: Er(c)
        }, null, 6))), 128))
      ])
    ])) : Q("", !0),
    e.hasBars ? (O(), T("div", rO, [
      E("div", aO, [
        (O(!0), T(ne, null, he(e.bars, ({ key: l, class: u, style: c }) => (O(), T("span", {
          key: l,
          class: Ge(u),
          style: Er(c)
        }, null, 6))), 128))
      ])
    ])) : Q("", !0)
  ], 2);
}
const oO = /* @__PURE__ */ en(Qw, [["render", sO]]), iO = {
  name: "CalendarPane",
  inheritAttrs: !1,
  components: { CalendarHeader: ku, CalendarDay: oO },
  props: {
    page: { type: Object, required: !0 }
  },
  setup() {
    const { onWeeknumberClick: e } = Pn();
    return {
      onWeeknumberClick: e
    };
  }
}, lO = { class: "vc-weekdays" }, uO = ["onClick"];
function cO(e, t, n, r, s, a) {
  const o = fn("CalendarHeader"), i = fn("CalendarDay");
  return O(), T("div", {
    class: Ge([
      "vc-pane",
      `row-${n.page.row}`,
      `row-from-end-${n.page.rowFromEnd}`,
      `column-${n.page.column}`,
      `column-from-end-${n.page.columnFromEnd}`
    ]),
    ref: "pane"
  }, [
    me(o, {
      page: n.page,
      "is-lg": "",
      "hide-arrows": ""
    }, null, 8, ["page"]),
    E("div", {
      class: Ge(["vc-weeks", {
        [`vc-show-weeknumbers-${n.page.weeknumberPosition}`]: n.page.weeknumberPosition
      }])
    }, [
      E("div", lO, [
        (O(!0), T(ne, null, he(n.page.weekdays, ({ weekday: l, label: u }, c) => (O(), T("div", {
          key: c,
          class: Ge(`vc-weekday vc-weekday-${l}`)
        }, le(u), 3))), 128))
      ]),
      (O(!0), T(ne, null, he(n.page.viewWeeks, (l) => (O(), T("div", {
        key: `weeknumber-${l.weeknumber}`,
        class: "vc-week"
      }, [
        n.page.weeknumberPosition ? (O(), T("div", {
          key: 0,
          class: Ge(["vc-weeknumber", `is-${n.page.weeknumberPosition}`])
        }, [
          E("span", {
            class: Ge(["vc-weeknumber-content"]),
            onClick: (u) => r.onWeeknumberClick(l, u)
          }, le(l.weeknumberDisplay), 9, uO)
        ], 2)) : Q("", !0),
        (O(!0), T(ne, null, he(l.days, (u) => (O(), qe(i, {
          key: u.id,
          day: u
        }, null, 8, ["day"]))), 128))
      ]))), 128))
    ], 2)
  ], 2);
}
const dO = /* @__PURE__ */ en(iO, [["render", cO]]), fO = Se({
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
    const r = re();
    let s = null, a = null;
    const o = hs({
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
    function l({ placement: $, options: q }) {
      i($ || (q == null ? void 0 : q.placement));
    }
    const u = C(() => ({
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
    })), c = C(() => {
      const $ = o.direction === "left" || o.direction === "right";
      let q = "";
      if (o.placement) {
        const pe = o.placement.split("-");
        pe.length > 1 && (q = pe[1]);
      }
      return ["start", "top", "left"].includes(q) ? $ ? "top" : "left" : ["end", "bottom", "right"].includes(q) ? $ ? "bottom" : "right" : $ ? "middle" : "center";
    });
    function v() {
      a && (a.destroy(), a = null);
    }
    function m() {
      Yn(() => {
        const $ = sa(o.target);
        !$ || !r.value || (a && a.state.elements.reference !== $ && v(), a ? a.update() : a = Sd(
          $,
          r.value,
          u.value
        ));
      });
    }
    function f($) {
      Object.assign(o, Ql($, "force"));
    }
    function w($, q) {
      clearTimeout(n), $ > 0 ? n = setTimeout(q, $) : q();
    }
    function g($) {
      return !$ || !a ? !1 : sa($) === a.state.elements.reference;
    }
    async function y($ = {}) {
      o.force || ($.force && (o.force = !0), w($.showDelay ?? e.showDelay, () => {
        o.isVisible && (o.force = !1, t("after-show")), f({
          ...$,
          isVisible: !0
        }), m();
      }));
    }
    function d($ = {}) {
      a && ($.target && !g($.target) || o.force || ($.force && (o.force = !0), w($.hideDelay ?? e.hideDelay, () => {
        o.isVisible || (o.force = !1), o.isVisible = !1;
      })));
    }
    function b($ = {}) {
      $.target != null && (o.isVisible && g($.target) ? d($) : y($));
    }
    function k($) {
      if (!a)
        return;
      const q = a.state.elements.reference;
      if (!r.value || !q)
        return;
      const pe = $.target;
      Zr(r.value, pe) || Zr(q, pe) || d({ force: !0 });
    }
    function _($) {
      ($.key === "Esc" || $.key === "Escape") && d();
    }
    function M({ detail: $ }) {
      !$.id || $.id !== e.id || y($);
    }
    function N({ detail: $ }) {
      !$.id || $.id !== e.id || d($);
    }
    function A({ detail: $ }) {
      !$.id || $.id !== e.id || b($);
    }
    function P() {
      dn(document, "keydown", _), dn(document, "click", k), dn(document, "show-popover", M), dn(document, "hide-popover", N), dn(document, "toggle-popover", A);
    }
    function L() {
      cn(document, "keydown", _), cn(document, "click", k), cn(document, "show-popover", M), cn(document, "hide-popover", N), cn(document, "toggle-popover", A);
    }
    function x($) {
      t("before-show", $);
    }
    function j($) {
      o.force = !1, t("after-show", $);
    }
    function F($) {
      t("before-hide", $);
    }
    function X($) {
      o.force = !1, v(), t("after-hide", $);
    }
    function K($) {
      $.stopPropagation();
    }
    function U() {
      o.isHovered = !0, o.isInteractive && ["hover", "hover-focus"].includes(o.visibility) && y();
    }
    function Y() {
      if (o.isHovered = !1, !a)
        return;
      const $ = a.state.elements.reference;
      o.autoHide && !o.isFocused && (!$ || $ !== document.activeElement) && ["hover", "hover-focus"].includes(o.visibility) && d();
    }
    function ee() {
      o.isFocused = !0, o.isInteractive && ["focus", "hover-focus"].includes(o.visibility) && y();
    }
    function B($) {
      ["focus", "hover-focus"].includes(o.visibility) && (!$.relatedTarget || !Zr(r.value, $.relatedTarget)) && (o.isFocused = !1, !o.isHovered && o.autoHide && d());
    }
    function V() {
      s != null && (s.disconnect(), s = null);
    }
    return Te(
      () => r.value,
      ($) => {
        V(), $ && (s = new ResizeObserver(() => {
          a && a.update();
        }), s.observe($));
      }
    ), Te(() => o.placement, i, {
      immediate: !0
    }), hn(() => {
      P();
    }), xr(() => {
      v(), V(), L();
    }), {
      ...ic(o),
      popoverRef: r,
      alignment: c,
      hide: d,
      setupPopper: m,
      beforeEnter: x,
      afterEnter: j,
      beforeLeave: F,
      afterLeave: X,
      onClick: K,
      onMouseOver: U,
      onMouseLeave: Y,
      onFocusIn: ee,
      onFocusOut: B
    };
  }
});
function vO(e, t, n, r, s, a) {
  return O(), T("div", {
    class: Ge(["vc-popover-content-wrapper", { "is-interactive": e.isInteractive }]),
    ref: "popoverRef",
    onClick: t[0] || (t[0] = (...o) => e.onClick && e.onClick(...o)),
    onMouseover: t[1] || (t[1] = (...o) => e.onMouseOver && e.onMouseOver(...o)),
    onMouseleave: t[2] || (t[2] = (...o) => e.onMouseLeave && e.onMouseLeave(...o)),
    onFocusin: t[3] || (t[3] = (...o) => e.onFocusIn && e.onFocusIn(...o)),
    onFocusout: t[4] || (t[4] = (...o) => e.onFocusOut && e.onFocusOut(...o))
  }, [
    me(sl, {
      name: `vc-${e.transition}`,
      appear: "",
      onBeforeEnter: e.beforeEnter,
      onAfterEnter: e.afterEnter,
      onBeforeLeave: e.beforeLeave,
      onAfterLeave: e.afterLeave
    }, {
      default: ze(() => [
        e.isVisible ? (O(), T("div", rr({
          key: 0,
          tabindex: "-1",
          class: `vc-popover-content direction-${e.direction}`
        }, e.$attrs), [
          jt(e.$slots, "default", {
            direction: e.direction,
            alignment: e.alignment,
            data: e.data,
            hide: e.hide
          }, () => [
            Rr(le(e.data), 1)
          ]),
          E("span", {
            class: Ge([
              "vc-popover-caret",
              `direction-${e.direction}`,
              `align-${e.alignment}`
            ])
          }, null, 2)
        ], 16)) : Q("", !0)
      ]),
      _: 3
    }, 8, ["name", "onBeforeEnter", "onAfterEnter", "onBeforeLeave", "onAfterLeave"])
  ], 34);
}
const qs = /* @__PURE__ */ en(fO, [["render", vO]]), mO = {
  value: { type: Object, required: !0 }
}, pO = ["input"], hO = "__vc_calendar_nav_context__";
function gO(e, { emit: t }) {
  const n = re(!0), r = re(0), s = re(0), a = 12, o = re(null), { locale: i, masks: l, canMove: u, getDateAddress: c } = Pn();
  function v() {
    setTimeout(() => {
      if (o.value == null)
        return;
      const te = o.value.querySelector(
        ".vc-nav-item:not(:disabled)"
      );
      te && te.focus();
    }, 10);
  }
  function m(te, Ee) {
    t("input", { month: te, year: Ee }, { position: x.value });
  }
  function f(te) {
    r.value = te, n.value = !0, v();
  }
  function w(te) {
    const { year: Ee } = c(/* @__PURE__ */ new Date()), ge = te * a, Ce = ge + a, Ne = [];
    for (let De = ge; De < Ce; De += 1) {
      let Ve = !1;
      for (let Ye = 1; Ye < 12 && (Ve = u({ month: Ye, year: De }, { position: x.value }), !Ve); Ye++)
        ;
      Ne.push({
        year: De,
        id: De.toString(),
        label: De.toString(),
        ariaLabel: De.toString(),
        isActive: De === L.value,
        isCurrent: De === Ee,
        isDisabled: !Ve,
        click: () => f(De)
      });
    }
    return Ne;
  }
  function g(te) {
    const { month: Ee, year: ge } = c(/* @__PURE__ */ new Date());
    return vu().map((Ce, Ne) => {
      const De = Ne + 1;
      return {
        month: De,
        year: te,
        id: `${te}.${Me(De, 2)}`,
        label: i.value.formatDate(Ce, l.value.navMonths),
        ariaLabel: i.value.formatDate(Ce, "MMMM YYYY"),
        isActive: De === P.value && te === L.value,
        isCurrent: De === Ee && te === ge,
        isDisabled: !u(
          { month: De, year: te },
          { position: x.value }
        ),
        click: () => m(De, te)
      };
    });
  }
  function y(te) {
    return Math.floor(te / a);
  }
  function d() {
    n.value = !n.value;
  }
  function b() {
    B.value && (n.value && _(), N());
  }
  function k() {
    q.value && (n.value && M(), A());
  }
  function _() {
    r.value--;
  }
  function M() {
    r.value++;
  }
  function N() {
    s.value--;
  }
  function A() {
    s.value++;
  }
  const P = C(() => {
    var te;
    return ((te = e.value) == null ? void 0 : te.month) || 0;
  }), L = C(() => {
    var te;
    return ((te = e.value) == null ? void 0 : te.year) || 0;
  }), x = C(() => {
    var te;
    return ((te = e.value) == null ? void 0 : te.position) || 1;
  }), j = C(() => g(r.value)), F = C(() => w(s.value)), X = C(() => Jl(F.value.map((te) => te.year))), K = C(() => Wn(F.value.map((te) => te.year))), U = C(() => n.value ? r.value : `${X.value} - ${K.value}`), Y = C(
    () => g(r.value - 1).some((te) => !te.isDisabled)
  ), ee = C(
    () => w(s.value - 1).some((te) => !te.isDisabled)
  ), B = C(
    () => n.value ? Y.value : ee.value
  ), V = C(
    () => g(r.value + 1).some((te) => !te.isDisabled)
  ), $ = C(
    () => w(s.value + 1).some((te) => !te.isDisabled)
  ), q = C(
    () => n.value ? V.value : $.value
  ), pe = C(
    () => n.value ? j.value : F.value
  );
  Te(
    () => L.value,
    () => {
      r.value = L.value;
    }
  ), Te(
    () => r.value,
    (te) => {
      s.value = y(te);
    }
  ), r.value = L.value, hn(() => v());
  const $e = {
    navContainer: o,
    title: U,
    monthMode: n,
    currentMonth: P,
    currentYear: L,
    activeItems: pe,
    prevItemsEnabled: B,
    nextItemsEnabled: q,
    toggleMode: d,
    movePrev: b,
    moveNext: k,
    movePrevYear: _,
    moveNextYear: M,
    movePrevYearGroup: N,
    moveNextYearGroup: A
  };
  return qn(hO, $e), $e;
}
const _O = { class: "vc-nav-header" }, bO = ["disabled"], yO = ["disabled"], DO = { class: "vc-nav-items" }, EO = ["data-id", "aria-label", "disabled", "onClick", "onKeydown"], wO = /* @__PURE__ */ Se({
  __name: "CalendarNav",
  props: mO,
  emits: pO,
  setup(e, { emit: t }) {
    const n = e, {
      navContainer: r,
      title: s,
      prevItemsEnabled: a,
      nextItemsEnabled: o,
      activeItems: i,
      toggleMode: l,
      movePrev: u,
      moveNext: c
    } = gO(n, { emit: t });
    return (v, m) => (O(), T("div", {
      class: "vc-nav-container",
      ref_key: "navContainer",
      ref: r
    }, [
      E("div", _O, [
        E("button", {
          type: "button",
          class: "vc-nav-arrow is-left vc-focus",
          disabled: !p(a),
          onClick: m[0] || (m[0] = //@ts-ignore
          (...f) => p(u) && p(u)(...f)),
          onKeydown: m[1] || (m[1] = (f) => p(Kr)(f, p(u)))
        }, [
          me(Kn, {
            name: "nav-prev-button",
            move: p(u),
            disabled: !p(a)
          }, {
            default: ze(() => [
              me(Qn, {
                name: "ChevronLeft",
                width: "22px",
                height: "24px"
              })
            ]),
            _: 1
          }, 8, ["move", "disabled"])
        ], 40, bO),
        E("button", {
          type: "button",
          class: "vc-nav-title vc-focus",
          onClick: m[2] || (m[2] = //@ts-ignore
          (...f) => p(l) && p(l)(...f)),
          onKeydown: m[3] || (m[3] = (f) => p(Kr)(f, p(l)))
        }, le(p(s)), 33),
        E("button", {
          type: "button",
          class: "vc-nav-arrow is-right vc-focus",
          disabled: !p(o),
          onClick: m[4] || (m[4] = //@ts-ignore
          (...f) => p(c) && p(c)(...f)),
          onKeydown: m[5] || (m[5] = (f) => p(Kr)(f, p(c)))
        }, [
          me(Kn, {
            name: "nav-next-button",
            move: p(c),
            disabled: !p(o)
          }, {
            default: ze(() => [
              me(Qn, {
                name: "ChevronRight",
                width: "22px",
                height: "24px"
              })
            ]),
            _: 1
          }, 8, ["move", "disabled"])
        ], 40, yO)
      ]),
      E("div", DO, [
        (O(!0), T(ne, null, he(p(i), (f) => (O(), T("button", {
          key: f.label,
          type: "button",
          "data-id": f.id,
          "aria-label": f.ariaLabel,
          class: Ge(["vc-nav-item vc-focus", [
            f.isActive ? "is-active" : f.isCurrent ? "is-current" : ""
          ]]),
          disabled: f.isDisabled,
          onClick: f.click,
          onKeydown: (w) => p(Kr)(w, f.click)
        }, le(f.label), 43, EO))), 128))
      ])
    ], 512));
  }
}), OO = {
  __name: "CalendarNavPopover",
  setup(e) {
    const { navPopoverId: t, color: n, displayMode: r, navPopoverRef: s, move: a } = Pn();
    return (o, i) => (O(), qe(qs, {
      id: p(t),
      class: Ge(["vc-nav-popover-container", `vc-${p(n)}`, `vc-${p(r)}`]),
      ref_key: "navPopoverRef",
      ref: s
    }, {
      default: ze(({ data: l }) => [
        me(wO, {
          value: l.page,
          onInput: p(a)
        }, null, 8, ["value", "onInput"])
      ]),
      _: 1
    }, 8, ["id", "class"]));
  }
}, $O = Se({
  name: "PopoverRow",
  props: {
    attribute: { type: Object, required: !0 }
  },
  setup(e) {
    return {
      indicator: C(() => {
        const { content: n, highlight: r, dot: s, bar: a, popover: o } = e.attribute;
        return o && o.hideIndicator ? null : n ? {
          class: `vc-bar vc-day-popover-row-bar vc-attr vc-${n.base.color}`
        } : r ? {
          class: `vc-highlight-bg-solid vc-day-popover-row-highlight vc-attr vc-${r.base.color}`
        } : s ? {
          class: `vc-dot vc-attr vc-${s.base.color}`
        } : a ? {
          class: `vc-bar vc-day-popover-row-bar vc-attr vc-${a.base.color}`
        } : null;
      })
    };
  }
}), kO = { class: "vc-day-popover-row" }, NO = {
  key: 0,
  class: "vc-day-popover-row-indicator"
}, TO = { class: "vc-day-popover-row-label" };
function IO(e, t, n, r, s, a) {
  return O(), T("div", kO, [
    e.indicator ? (O(), T("div", NO, [
      E("span", {
        class: Ge(e.indicator.class)
      }, null, 2)
    ])) : Q("", !0),
    E("div", TO, [
      jt(e.$slots, "default", {}, () => [
        Rr(le(e.attribute.popover ? e.attribute.popover.label : "No content provided"), 1)
      ])
    ])
  ]);
}
const MO = /* @__PURE__ */ en($O, [["render", IO]]), CO = { class: "vc-day-popover-container" }, PO = {
  key: 0,
  class: "vc-day-popover-header"
}, LO = /* @__PURE__ */ Se({
  __name: "CalendarDayPopover",
  setup(e) {
    const { dayPopoverId: t, displayMode: n, color: r, masks: s, locale: a } = Pn();
    function o(l, u) {
      return a.value.formatDate(l, u);
    }
    function i(l) {
      return a.value.formatDate(l.date, s.value.dayPopover);
    }
    return (l, u) => (O(), qe(qs, {
      id: p(t),
      class: Ge([`vc-${p(r)}`, `vc-${p(n)}`])
    }, {
      default: ze(({ data: { day: c, attributes: v }, hide: m }) => [
        jt(l.$slots, "default", {
          day: c,
          dayTitle: i(c),
          attributes: v,
          format: o,
          masks: p(s),
          hide: m
        }, () => [
          E("div", CO, [
            p(s).dayPopover ? (O(), T("div", PO, le(i(c)), 1)) : Q("", !0),
            (O(!0), T(ne, null, he(v, (f) => (O(), qe(MO, {
              key: f.key,
              attribute: f
            }, null, 8, ["attribute"]))), 128))
          ])
        ])
      ]),
      _: 3
    }, 8, ["id", "class"]));
  }
}), SO = Se({
  name: "Calendar",
  components: {
    CalendarHeader: ku,
    CalendarPane: dO,
    CalendarNavPopover: OO,
    CalendarDayPopover: LO
  },
  emits: Kw,
  props: Gw,
  setup(e, { emit: t, slots: n }) {
    return qw(e, { emit: t, slots: n });
  }
}), AO = { class: "vc-pane-header-wrapper" };
function xO(e, t, n, r, s, a) {
  const o = fn("CalendarHeader"), i = fn("CalendarPane"), l = fn("CalendarDayPopover"), u = fn("CalendarNavPopover");
  return O(), T(ne, null, [
    E("div", rr({ "data-helptext": "Press the arrow keys to navigate by day, Home and End to navigate to week ends, PageUp and PageDown to navigate by month, Alt+PageUp and Alt+PageDown to navigate by year" }, e.$attrs, {
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
      onMouseup: t[0] || (t[0] = ol(() => {
      }, ["prevent"])),
      ref: "containerRef"
    }), [
      E("div", {
        class: Ge(["vc-pane-container", { "in-transition": e.inTransition }])
      }, [
        E("div", AO, [
          e.firstPage ? (O(), qe(o, {
            key: 0,
            page: e.firstPage,
            "is-lg": "",
            "hide-title": ""
          }, null, 8, ["page"])) : Q("", !0)
        ]),
        me(sl, {
          name: `vc-${e.transitionName}`,
          onBeforeEnter: e.onTransitionBeforeEnter,
          onAfterEnter: e.onTransitionAfterEnter
        }, {
          default: ze(() => [
            (O(), T("div", {
              key: e.pages[0].id,
              class: "vc-pane-layout",
              style: Er({
                gridTemplateColumns: `repeat(${e.columns}, 1fr)`
              })
            }, [
              (O(!0), T(ne, null, he(e.pages, (c) => (O(), qe(i, {
                key: c.id,
                page: c
              }, null, 8, ["page"]))), 128))
            ], 4))
          ]),
          _: 1
        }, 8, ["name", "onBeforeEnter", "onAfterEnter"]),
        jt(e.$slots, "footer")
      ], 2)
    ], 16),
    me(l, null, {
      default: ze((c) => [
        jt(e.$slots, "day-popover", al(lc(c)))
      ]),
      _: 3
    }),
    me(u)
  ], 64);
}
const RO = /* @__PURE__ */ en(SO, [["render", xO]]), FO = { class: "vc-base-select" }, YO = ["value"], VO = ["value", "disabled"], UO = {
  inheritAttrs: !1
}, _r = /* @__PURE__ */ Object.assign(UO, {
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
    return (t, n) => (O(), T("div", FO, [
      e.showIcon ? (O(), qe(Qn, {
        key: 0,
        name: "ChevronDown",
        size: e.small ? "16" : "18"
      }, null, 8, ["size"])) : Q("", !0),
      E("select", rr(t.$attrs, {
        value: e.modelValue,
        class: ["vc-focus", {
          "vc-has-icon": e.showIcon,
          "vc-align-right": e.alignRight,
          "vc-align-left": e.alignLeft,
          "vc-small": e.small
        }],
        onChange: n[0] || (n[0] = (r) => t.$emit("update:modelValue", r.target.value))
      }), [
        (O(!0), T(ne, null, he(e.options, (r) => (O(), T("option", {
          key: r.value,
          value: r.value,
          disabled: r.disabled
        }, le(r.label), 9, VO))), 128))
      ], 16, YO)
    ]));
  }
}), Nu = "__vc_date_picker_context__", jO = {
  ...yu,
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
    default: () => mn("datePicker.updateOnInput")
  },
  inputDebounce: {
    type: Number,
    default: () => mn("datePicker.inputDebounce")
  },
  popover: {
    type: [Boolean, Object],
    default: !0
  },
  dragAttribute: Object,
  selectAttribute: Object,
  attributes: [Object, Array]
}, WO = [
  "update:modelValue",
  "drag",
  "dayclick",
  "daykeydown",
  "popover-will-show",
  "popover-did-show",
  "popover-will-hide",
  "popover-did-hide"
];
function HO(e, t) {
  const n = Du(e), { locale: r, masks: s, disabledAttribute: a } = n, { emit: o } = t, i = re(!1), l = re(oa()), u = re(null), c = re(null), v = re(["", ""]), m = re(null), f = re(null);
  let w, g, y = !0;
  const d = C(() => e.isRange || e.modelModifiers.range === !0), b = C(
    () => d.value && u.value != null ? u.value.start : null
  ), k = C(
    () => d.value && u.value != null ? u.value.end : null
  ), _ = C(() => e.mode.toLowerCase() === "date"), M = C(
    () => e.mode.toLowerCase() === "datetime"
  ), N = C(() => e.mode.toLowerCase() === "time"), A = C(() => !!c.value), P = C(() => {
    let I = "date";
    e.modelModifiers.number && (I = "number"), e.modelModifiers.string && (I = "string");
    const G = s.value.modelValue || "iso";
    return $e({ type: I, mask: G });
  }), L = C(
    () => nt(c.value ?? u.value)
  ), x = C(() => N.value ? e.is24hr ? s.value.inputTime24hr : s.value.inputTime : M.value ? e.is24hr ? s.value.inputDateTime24hr : s.value.inputDateTime : s.value.input), j = C(() => /[Hh]/g.test(x.value)), F = C(
    () => /[dD]{1,2}|Do|W{1,4}|M{1,4}|YY(?:YY)?/g.test(x.value)
  ), X = C(() => {
    if (j.value && F.value)
      return "dateTime";
    if (F.value)
      return "date";
    if (j.value)
      return "time";
  }), K = C(() => {
    var I;
    const G = ((I = m.value) == null ? void 0 : I.$el.previousElementSibling) ?? void 0;
    return Pr({}, e.popover, mn("datePicker.popover"), {
      target: G
    });
  }), U = C(
    () => Ou({
      ...K.value,
      id: l.value
    })
  ), Y = C(() => d.value ? {
    start: v.value[0],
    end: v.value[1]
  } : v.value[0]), ee = C(() => {
    const I = ["start", "end"].map((G) => ({
      input: J(G),
      change: ie(G),
      keyup: _e,
      ...e.popover && U.value
    }));
    return d.value ? {
      start: I[0],
      end: I[1]
    } : I[0];
  }), B = C(() => {
    if (!ge(u.value))
      return null;
    const I = {
      key: "select-drag",
      ...e.selectAttribute,
      dates: u.value,
      pinPage: !0
    }, { dot: G, bar: ue, highlight: we, content: Ke } = I;
    return !G && !ue && !we && !Ke && (I.highlight = !0), I;
  }), V = C(() => {
    if (!d.value || !ge(c.value))
      return null;
    const I = {
      key: "select-drag",
      ...e.dragAttribute,
      dates: c.value
    }, { dot: G, bar: ue, highlight: we, content: Ke } = I;
    return !G && !ue && !we && !Ke && (I.highlight = {
      startEnd: {
        fillMode: "outline"
      }
    }), I;
  }), $ = C(() => {
    const I = wt(e.attributes) ? [...e.attributes] : [];
    return V.value ? I.unshift(V.value) : B.value && I.unshift(B.value), I;
  }), q = C(() => $e(
    e.rules === "auto" ? pe() : e.rules ?? {}
  ));
  function pe() {
    const I = {
      ms: [0, 999],
      sec: [0, 59],
      min: [0, 59],
      hr: [0, 23]
    }, G = _.value ? 0 : e.timeAccuracy;
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
  function $e(I) {
    return wt(I) ? I.length === 1 ? [I[0], I[0]] : I : [I, I];
  }
  function te(I) {
    return $e(I).map(
      (G, ue) => ({
        ...G,
        rules: q.value[ue]
      })
    );
  }
  function Ee(I) {
    return Pt(I) ? !isNaN(I) : Bn(I) ? !isNaN(I.getTime()) : Yt(I) ? I !== "" : I != null;
  }
  function ge(I) {
    return d.value ? Jt(I) && Ee(I.start) && Ee(I.end) : Ee(I);
  }
  function Ce(I, G) {
    const ue = Bn(I), we = Bn(G);
    return !ue && !we ? !0 : ue !== we ? !1 : I.getTime() === G.getTime();
  }
  function Ne(I, G) {
    if (d.value) {
      const ue = ge(I), we = ge(G);
      return !ue && !we ? !0 : ue !== we ? !1 : Ce(I.start, G.start) && Ce(I.end, G.end);
    }
    return Ce(I, G);
  }
  function De(I) {
    return !ge(I) || !a.value ? !1 : a.value.intersectsRange(r.value.range(I));
  }
  function Ve(I, G, ue, we) {
    if (!ge(I))
      return null;
    if (d.value) {
      const Ke = r.value.toDate(I.start, {
        ...G[0],
        fillDate: b.value ?? void 0,
        patch: ue
      }), Tt = r.value.toDate(I.end, {
        ...G[1],
        fillDate: k.value ?? void 0,
        patch: ue
      });
      return bn({ start: Ke, end: Tt }, we);
    }
    return r.value.toDateOrNull(I, {
      ...G[0],
      fillDate: u.value,
      patch: ue
    });
  }
  function Ye(I, G) {
    return d.value ? ge(I) ? {
      start: r.value.fromDate(I.start, G[0]),
      end: r.value.fromDate(I.end, G[1])
    } : null : r.value.fromDate(I, G[0]);
  }
  function Je(I, G = {}) {
    return clearTimeout(w), new Promise((ue) => {
      const { debounce: we = 0, ...Ke } = G;
      we > 0 ? w = window.setTimeout(() => {
        ue(D(I, Ke));
      }, we) : ue(D(I, Ke));
    });
  }
  function D(I, {
    config: G = P.value,
    patch: ue = "dateTime",
    clearIfEqual: we = !1,
    formatInput: Ke = !0,
    hidePopover: Tt = !1,
    dragging: lt = A.value,
    targetPriority: Sn,
    moveToValue: vr = !1
  } = {}) {
    const jr = te(G);
    let _t = Ve(
      I,
      jr,
      ue,
      Sn
    );
    if (De(_t)) {
      if (lt)
        return null;
      _t = u.value, Tt = !1;
    } else
      _t == null && e.isRequired ? _t = u.value : (
        // Clear value if same value was passed
        _t != null && Ne(u.value, _t) && we && (_t = null)
      );
    const mr = lt ? c : u, Aa = !Ne(mr.value, _t);
    mr.value = _t, lt || (c.value = null);
    const oo = Ye(
      _t,
      P.value
    );
    return Aa && (y = !1, o(lt ? "drag" : "update:modelValue", oo), Yn(() => y = !0)), Tt && !lt && kt(), Ke && h(), vr && Yn(() => W(Sn ?? "start")), oo;
  }
  function h() {
    Yn(() => {
      const I = te({
        type: "string",
        mask: x.value
      }), G = Ye(
        c.value || u.value,
        I
      );
      d.value ? v.value = [G && G.start, G && G.end] : v.value = [G, ""];
    });
  }
  function S(I, G, ue) {
    v.value.splice(G === "start" ? 0 : 1, 1, I);
    const we = d.value ? {
      start: v.value[0],
      end: v.value[1] || v.value[0]
    } : I, Ke = {
      type: "string",
      mask: x.value
    };
    Je(we, {
      ...ue,
      config: Ke,
      patch: X.value,
      targetPriority: G,
      moveToValue: !0
    });
  }
  function J(I) {
    return (G) => {
      e.updateOnInput && S(G.currentTarget.value, I, {
        formatInput: !1,
        hidePopover: !1,
        debounce: e.inputDebounce
      });
    };
  }
  function ie(I) {
    return (G) => {
      S(G.currentTarget.value, I, {
        formatInput: !0,
        hidePopover: !1
      });
    };
  }
  function _e(I) {
    I.key === "Escape" && Je(u.value, {
      formatInput: !0,
      hidePopover: !0
    });
  }
  function nt(I) {
    return d.value ? [
      I && I.start ? r.value.getDateParts(I.start) : null,
      I && I.end ? r.value.getDateParts(I.end) : null
    ] : [I ? r.value.getDateParts(I) : null];
  }
  function He() {
    c.value = null, h();
  }
  function gt(I) {
    o("popover-will-show", I);
  }
  function At(I) {
    o("popover-did-show", I);
  }
  function Ie(I) {
    He(), o("popover-will-hide", I);
  }
  function R(I) {
    o("popover-did-hide", I);
  }
  function H(I) {
    const G = {
      patch: "date",
      formatInput: !0,
      hidePopover: !0
    };
    if (d.value) {
      const ue = !A.value;
      ue ? g = { start: I.startDate, end: I.endDate } : g != null && (g.end = I.date), Je(g, {
        ...G,
        dragging: ue
      });
    } else
      Je(I.date, {
        ...G,
        clearIfEqual: !e.isRequired
      });
  }
  function Ue(I, G) {
    H(I), o("dayclick", I, G);
  }
  function je(I, G) {
    switch (G.key) {
      case " ":
      case "Enter": {
        H(I), G.preventDefault();
        break;
      }
      case "Escape":
        kt();
    }
    o("daykeydown", I, G);
  }
  function xt(I, G) {
    !A.value || g == null || (g.end = I.date, Je(bn(g), {
      patch: "date",
      formatInput: !0
    }));
  }
  function rn(I = {}) {
    ts({
      ...K.value,
      ...I,
      isInteractive: !0,
      id: l.value
    });
  }
  function kt(I = {}) {
    ba({
      hideDelay: 10,
      force: !0,
      ...K.value,
      ...I,
      id: l.value
    });
  }
  function Nt(I) {
    wu({
      ...K.value,
      ...I,
      isInteractive: !0,
      id: l.value
    });
  }
  function bn(I, G) {
    const { start: ue, end: we } = I;
    if (ue > we)
      switch (G) {
        case "start":
          return { start: ue, end: ue };
        case "end":
          return { start: we, end: we };
        default:
          return { start: we, end: ue };
      }
    return { start: ue, end: we };
  }
  function Ln(I) {
    if (ge(u.value)) {
      const G = d.value ? I ? b.value : k.value : u.value;
      return mu(G, "monthly", r.value);
    }
    return null;
  }
  async function Sa(I, G = {}) {
    return f.value == null ? !1 : f.value.move(I, G);
  }
  async function Ur(I, G = {}) {
    return f.value == null ? !1 : f.value.moveBy(I, G);
  }
  async function W(I, G = {}) {
    if (f.value == null)
      return !1;
    const { firstPage: ue, lastPage: we, move: Ke } = f.value, Tt = I !== "end", lt = Ln(Tt), Sn = Tt ? 1 : -1;
    return !lt || hu(lt, ue, we) ? !1 : Ke(lt, {
      position: Sn,
      ...G
    });
  }
  Te(
    () => e.isRange,
    (I) => {
      I && console.warn(
        "The `is-range` prop will be deprecated in future releases. Please use the `range` modifier."
      );
    },
    { immediate: !0 }
  ), Te(
    () => x.value,
    () => h()
  ), Te(
    () => e.modelValue,
    (I) => {
      y && D(I, {
        formatInput: !0,
        hidePopover: !1
      });
    }
  ), Te(
    () => q.value,
    () => {
      Jt(e.rules) && D(e.modelValue, {
        formatInput: !0,
        hidePopover: !1
      });
    }
  ), Te(
    () => e.timezone,
    () => {
      D(u.value, { formatInput: !0 });
    }
  );
  const z = $e(P.value);
  u.value = Ve(e.modelValue, z, "dateTime"), hn(() => {
    D(e.modelValue, {
      formatInput: !0,
      hidePopover: !1
    });
  }), Yn(() => i.value = !0);
  const de = {
    ...n,
    showCalendar: i,
    datePickerPopoverId: l,
    popoverRef: m,
    popoverEvents: U,
    calendarRef: f,
    isRange: d,
    isTimeMode: N,
    isDateTimeMode: M,
    is24hr: xa(e, "is24hr"),
    hideTimeHeader: xa(e, "hideTimeHeader"),
    timeAccuracy: xa(e, "timeAccuracy"),
    isDragging: A,
    inputValue: Y,
    inputEvents: ee,
    dateParts: L,
    attributes: $,
    rules: q,
    move: Sa,
    moveBy: Ur,
    moveToValue: W,
    updateValue: Je,
    showPopover: rn,
    hidePopover: kt,
    togglePopover: Nt,
    onDayClick: Ue,
    onDayKeydown: je,
    onDayMouseEnter: xt,
    onPopoverBeforeShow: gt,
    onPopoverAfterShow: At,
    onPopoverBeforeHide: Ie,
    onPopoverAfterHide: R
  };
  return qn(Nu, de), de;
}
function BO() {
  const e = yt(Nu);
  if (e)
    return e;
  throw new Error(
    "DatePicker context missing. Please verify this component is nested within a valid context provider."
  );
}
const GO = [
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
], KO = [
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
function qO(e) {
  const t = BO(), {
    locale: n,
    isRange: r,
    isTimeMode: s,
    dateParts: a,
    rules: o,
    is24hr: i,
    hideTimeHeader: l,
    timeAccuracy: u,
    updateValue: c
  } = t;
  function v(F) {
    F = Object.assign(f.value, F);
    let X = null;
    if (r.value) {
      const K = m.value ? F : a.value[0], U = m.value ? a.value[1] : F;
      X = { start: K, end: U };
    } else
      X = F;
    c(X, {
      patch: "time",
      targetPriority: m.value ? "start" : "end",
      moveToValue: !0
    });
  }
  const m = C(() => e.position === 0), f = C(
    () => a.value[e.position] || { isValid: !1 }
  ), w = C(() => uu(f.value)), g = C(() => !!f.value.isValid), y = C(() => !l.value && g.value), d = C(() => {
    if (!w.value)
      return null;
    let F = n.value.toDate(f.value);
    return f.value.hours === 24 && (F = new Date(F.getTime() - 1)), F;
  }), b = C({
    get() {
      return f.value.hours;
    },
    set(F) {
      v({ hours: F });
    }
  }), k = C({
    get() {
      return f.value.minutes;
    },
    set(F) {
      v({ minutes: F });
    }
  }), _ = C({
    get() {
      return f.value.seconds;
    },
    set(F) {
      v({ seconds: F });
    }
  }), M = C({
    get() {
      return f.value.milliseconds;
    },
    set(F) {
      v({ milliseconds: F });
    }
  }), N = C({
    get() {
      return f.value.hours < 12;
    },
    set(F) {
      F = String(F).toLowerCase() == "true";
      let X = b.value;
      F && X >= 12 ? X -= 12 : !F && X < 12 && (X += 12), v({ hours: X });
    }
  }), A = C(
    () => kw(f.value, o.value[e.position])
  ), P = C(() => GO.filter(
    (F) => A.value.hours.some((X) => X.value === F.value)
  )), L = C(() => KO.filter(
    (F) => A.value.hours.some((X) => X.value === F.value)
  )), x = C(() => i.value ? A.value.hours : N.value ? P.value : L.value), j = C(() => {
    const F = [];
    return Xt(P.value) && F.push({ value: !0, label: "AM" }), Xt(L.value) && F.push({ value: !1, label: "PM" }), F;
  });
  return {
    ...t,
    showHeader: y,
    timeAccuracy: u,
    parts: f,
    isValid: g,
    date: d,
    hours: b,
    minutes: k,
    seconds: _,
    milliseconds: M,
    options: A,
    hourOptions: x,
    isAM: N,
    isAMOptions: j,
    is24hr: i
  };
}
const zO = {
  key: 0,
  class: "vc-time-header"
}, XO = { class: "vc-time-weekday" }, ZO = { class: "vc-time-month" }, JO = { class: "vc-time-day" }, QO = { class: "vc-time-year" }, e$ = { class: "vc-time-select-group" }, t$ = /* @__PURE__ */ E("span", { class: "vc-time-colon" }, ":", -1), n$ = /* @__PURE__ */ E("span", { class: "vc-time-colon" }, ":", -1), r$ = /* @__PURE__ */ E("span", { class: "vc-time-decimal" }, ".", -1), a$ = /* @__PURE__ */ Se({
  __name: "TimePicker",
  props: {
    position: null
  },
  setup(e, { expose: t }) {
    const r = qO(e);
    t(r);
    const {
      locale: s,
      isValid: a,
      date: o,
      hours: i,
      minutes: l,
      seconds: u,
      milliseconds: c,
      options: v,
      hourOptions: m,
      isTimeMode: f,
      isAM: w,
      isAMOptions: g,
      is24hr: y,
      showHeader: d,
      timeAccuracy: b
    } = r;
    return (k, _) => (O(), T("div", {
      class: Ge(["vc-time-picker", [{ "vc-invalid": !p(a), "vc-attached": !p(f) }]])
    }, [
      jt(k.$slots, "time-header", {}, () => [
        p(d) && p(o) ? (O(), T("div", zO, [
          E("span", XO, le(p(s).formatDate(p(o), "WWW")), 1),
          E("span", ZO, le(p(s).formatDate(p(o), "MMM")), 1),
          E("span", JO, le(p(s).formatDate(p(o), "D")), 1),
          E("span", QO, le(p(s).formatDate(p(o), "YYYY")), 1)
        ])) : Q("", !0)
      ]),
      E("div", e$, [
        me(Qn, {
          name: "Clock",
          size: "17"
        }),
        me(_r, {
          modelValue: p(i),
          "onUpdate:modelValue": _[0] || (_[0] = (M) => be(i) ? i.value = M : null),
          modelModifiers: { number: !0 },
          options: p(m),
          "align-right": ""
        }, null, 8, ["modelValue", "options"]),
        p(b) > 1 ? (O(), T(ne, { key: 0 }, [
          t$,
          me(_r, {
            modelValue: p(l),
            "onUpdate:modelValue": _[1] || (_[1] = (M) => be(l) ? l.value = M : null),
            modelModifiers: { number: !0 },
            options: p(v).minutes,
            "align-left": p(b) === 2
          }, null, 8, ["modelValue", "options", "align-left"])
        ], 64)) : Q("", !0),
        p(b) > 2 ? (O(), T(ne, { key: 1 }, [
          n$,
          me(_r, {
            modelValue: p(u),
            "onUpdate:modelValue": _[2] || (_[2] = (M) => be(u) ? u.value = M : null),
            modelModifiers: { number: !0 },
            options: p(v).seconds,
            "align-left": p(b) === 3
          }, null, 8, ["modelValue", "options", "align-left"])
        ], 64)) : Q("", !0),
        p(b) > 3 ? (O(), T(ne, { key: 2 }, [
          r$,
          me(_r, {
            modelValue: p(c),
            "onUpdate:modelValue": _[3] || (_[3] = (M) => be(c) ? c.value = M : null),
            modelModifiers: { number: !0 },
            options: p(v).milliseconds,
            "align-left": ""
          }, null, 8, ["modelValue", "options"])
        ], 64)) : Q("", !0),
        p(y) ? Q("", !0) : (O(), qe(_r, {
          key: 3,
          modelValue: p(w),
          "onUpdate:modelValue": _[4] || (_[4] = (M) => be(w) ? w.value = M : null),
          options: p(g)
        }, null, 8, ["modelValue", "options"]))
      ])
    ], 2));
  }
}), zs = Se({
  name: "DatePicker",
  inheritAttrs: !1,
  emits: WO,
  props: jO,
  setup(e, t) {
    const n = HO(e, t), { slots: r, attrs: s } = t, {
      isTimeMode: a,
      isRange: o,
      isDateTimeMode: i,
      color: l,
      displayMode: u,
      dateParts: c,
      datePickerPopoverId: v,
      attributes: m,
      calendarRef: f,
      popoverRef: w,
      showCalendar: g,
      onDayClick: y,
      onDayMouseEnter: d,
      onDayKeydown: b,
      onPopoverBeforeShow: k,
      onPopoverAfterShow: _,
      onPopoverBeforeHide: M,
      onPopoverAfterHide: N
    } = n;
    t.expose(n);
    const A = hs(Ql(n, "calendarRef", "popoverRef")), P = () => (o.value ? [0, 1] : [0]).map((F) => Fn(a$, { position: F })), L = () => {
      if (!c.value)
        return null;
      const j = i.value ? { ...r, footer: P } : r;
      return Fn(
        RO,
        {
          ...s,
          attributes: m.value,
          ref: f,
          onDayclick: y,
          onDaymouseenter: d,
          onDaykeydown: b
        },
        j
      );
    }, x = () => {
      if (a.value)
        return Fn(
          "div",
          {
            class: `vc-container vc-bordered vc-${l.value} vc-${u.value}`
          },
          [P()]
        );
      if (g.value)
        return L();
    };
    return r.default ? () => [
      // Popover trigger
      r.default(A),
      // Popover content
      Fn(
        qs,
        {
          id: v.value,
          placement: "bottom-start",
          class: `vc-date-picker-content vc-${l.value} vc-${u.value}`,
          ref: w,
          "onBefore-show": k,
          "onAfter-show": _,
          "onBefore-hide": M,
          "onAfter-hide": N
        },
        {
          default: x
        }
      )
    ] : x;
  }
});
const s$ = { class: "flex flex-col gap-2" }, o$ = { class: "flex items-center gap-2" }, i$ = /* @__PURE__ */ E("label", {
  for: "due",
  class: "p3-b"
}, "結束於指定日期", -1), l$ = ["onClick"], u$ = /* @__PURE__ */ Se({
  __name: "DuePicker",
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, r = C({
      get: () => n.modelValue,
      set: (a) => t("update:modelValue", a)
    }), s = re(!1);
    return Te(
      () => n.modelValue,
      (a) => {
        a && (s.value = !0);
      },
      { immediate: !0 }
    ), Te(s, (a) => {
      a || t("update:modelValue", null);
    }), xr(() => {
      t("update:modelValue", null);
    }), (a, o) => (O(), T("div", s$, [
      E("div", o$, [
        Pe(E("input", {
          type: "checkbox",
          "onUpdate:modelValue": o[0] || (o[0] = (i) => be(s) ? s.value = i : null),
          id: "due"
        }, null, 512), [
          [ta, p(s)]
        ]),
        i$,
        p(s) ? (O(), qe(p(zs), {
          key: 0,
          modelValue: p(r),
          "onUpdate:modelValue": o[1] || (o[1] = (i) => be(r) ? r.value = i : null),
          mode: "dateTime",
          timezone: "UTC",
          "min-Date": /* @__PURE__ */ new Date()
        }, {
          default: ze(({ togglePopover: i, inputValue: l }) => [
            E("button", {
              class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 transition-all hover:bg-light-3 hover:bg-opacity-50",
              onClick: i
            }, le(l || "請選定結束日期"), 9, l$)
          ]),
          _: 1
        }, 8, ["modelValue", "min-Date"])) : Q("", !0)
      ])
    ]));
  }
}), c$ = { class: "flex w-auto items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-1.5" }, d$ = ["value", "type", "placeholder", "maxLength", "required"], f$ = /* @__PURE__ */ Se({
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
    function r(s) {
      n.type === "number" && !s.target.value && (s.target.value = 0), t(
        "update:modelValue",
        n.type == "number" ? Number(s.target.value) : s.target.value
      );
    }
    return (s, a) => (O(), T("div", c$, [
      E("input", {
        value: s.modelValue,
        onInput: r,
        type: s.type,
        class: "p3-b w-full border-none outline-none shadow-none",
        placeholder: s.placeholder,
        maxLength: s.maxLength,
        required: s.required
      }, null, 40, d$)
    ]));
  }
});
const Mt = /* @__PURE__ */ bs(f$, [["__scopeId", "data-v-068dea7c"]]);
/*!
  * shared v9.5.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */
const Ht = typeof window < "u";
let pt, kn;
if (process.env.NODE_ENV !== "production") {
  const e = Ht && window.performance;
  e && e.mark && e.measure && e.clearMarks && // @ts-ignore browser compat
  e.clearMeasures && (pt = (t) => {
    e.mark(t);
  }, kn = (t, n, r) => {
    e.measure(t, n, r), e.clearMarks(n), e.clearMarks(r);
  });
}
const v$ = /\{([0-9a-zA-Z]+)\}/g;
function Xs(e, ...t) {
  return t.length === 1 && ke(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(v$, (n, r) => t.hasOwnProperty(r) ? t[r] : "");
}
const Kt = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), m$ = (e, t, n) => p$({ l: e, k: t, s: n }), p$ = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Ze = (e) => typeof e == "number" && isFinite(e), h$ = (e) => Iu(e) === "[object Date]", pn = (e) => Iu(e) === "[object RegExp]", Ia = (e) => ve(e) && Object.keys(e).length === 0, tt = Object.assign;
let yi;
const zt = () => yi || (yi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Di(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const g$ = Object.prototype.hasOwnProperty;
function Zs(e, t) {
  return g$.call(e, t);
}
const Ae = Array.isArray, Fe = (e) => typeof e == "function", Z = (e) => typeof e == "string", ye = (e) => typeof e == "boolean", ke = (e) => e !== null && typeof e == "object", Tu = Object.prototype.toString, Iu = (e) => Tu.call(e), ve = (e) => {
  if (!ke(e))
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t.constructor === Object;
}, _$ = (e) => e == null ? "" : Ae(e) || ve(e) && e.toString === Tu ? JSON.stringify(e, null, 2) : String(e);
function b$(e, t = "") {
  return e.reduce((n, r, s) => s === 0 ? n + r : n + t + r, "");
}
const Ei = 2;
function y$(e, t = 0, n = e.length) {
  const r = e.split(/\r?\n/);
  let s = 0;
  const a = [];
  for (let o = 0; o < r.length; o++)
    if (s += r[o].length + 1, s >= t) {
      for (let i = o - Ei; i <= o + Ei || n > s; i++) {
        if (i < 0 || i >= r.length)
          continue;
        const l = i + 1;
        a.push(`${l}${" ".repeat(3 - String(l).length)}|  ${r[i]}`);
        const u = r[i].length;
        if (i === o) {
          const c = t - (s - u) + 1, v = Math.max(1, n > s ? u - c : n - t);
          a.push("   |  " + " ".repeat(c) + "^".repeat(v));
        } else if (i > o) {
          if (n > s) {
            const c = Math.max(Math.min(n - s, u), 1);
            a.push("   |  " + "^".repeat(c));
          }
          s += u + 1;
        }
      }
      break;
    }
  return a.join(`
`);
}
function Js(e) {
  let t = e;
  return () => ++t;
}
function et(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const wi = {};
function D$(e) {
  wi[e] || (wi[e] = !0, et(e));
}
function Qs() {
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
function E$(e, t, n) {
  return { line: e, column: t, offset: n };
}
function ns(e, t, n) {
  const r = { start: e, end: t };
  return n != null && (r.source = n), r;
}
const w$ = /\{([0-9a-zA-Z]+)\}/g;
function O$(e, ...t) {
  return t.length === 1 && $$(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(w$, (n, r) => t.hasOwnProperty(r) ? t[r] : "");
}
const Mu = Object.assign, Oi = (e) => typeof e == "string", $$ = (e) => e !== null && typeof e == "object";
function Cu(e, t = "") {
  return e.reduce((n, r, s) => s === 0 ? n + r : n + t + r, "");
}
const ce = {
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
}, k$ = {
  // tokenizer error messages
  [ce.EXPECTED_TOKEN]: "Expected token: '{0}'",
  [ce.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
  [ce.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
  [ce.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
  [ce.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
  [ce.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
  [ce.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
  [ce.EMPTY_PLACEHOLDER]: "Empty placeholder",
  [ce.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
  [ce.INVALID_LINKED_FORMAT]: "Invalid linked format",
  // parser error messages
  [ce.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
  [ce.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
  [ce.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
  [ce.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
  // generator error messages
  [ce.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
  // minimizer error messages
  [ce.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
};
function fr(e, t, n = {}) {
  const { domain: r, messages: s, args: a } = n, o = O$((s || k$)[e] || "", ...a || []), i = new SyntaxError(String(o));
  return i.code = e, t && (i.location = t), i.domain = r, i;
}
function N$(e) {
  throw e;
}
const T$ = /<\/?[\w\s="/.':;#-\/]+>/, I$ = (e) => T$.test(e), qt = " ", M$ = "\r", st = `
`, C$ = String.fromCharCode(8232), P$ = String.fromCharCode(8233);
function L$(e) {
  const t = e;
  let n = 0, r = 1, s = 1, a = 0;
  const o = (A) => t[A] === M$ && t[A + 1] === st, i = (A) => t[A] === st, l = (A) => t[A] === P$, u = (A) => t[A] === C$, c = (A) => o(A) || i(A) || l(A) || u(A), v = () => n, m = () => r, f = () => s, w = () => a, g = (A) => o(A) || l(A) || u(A) ? st : t[A], y = () => g(n), d = () => g(n + a);
  function b() {
    return a = 0, c(n) && (r++, s = 0), o(n) && n++, n++, s++, t[n];
  }
  function k() {
    return o(n + a) && a++, a++, t[n + a];
  }
  function _() {
    n = 0, r = 1, s = 1, a = 0;
  }
  function M(A = 0) {
    a = A;
  }
  function N() {
    const A = n + a;
    for (; A !== n; )
      b();
    a = 0;
  }
  return {
    index: v,
    line: m,
    column: f,
    peekOffset: w,
    charAt: g,
    currentChar: y,
    currentPeek: d,
    next: b,
    peek: k,
    reset: _,
    resetPeek: M,
    skipToPeek: N
  };
}
const sn = void 0, S$ = ".", $i = "'", A$ = "tokenizer";
function x$(e, t = {}) {
  const n = t.location !== !1, r = L$(e), s = () => r.index(), a = () => E$(r.line(), r.column(), r.index()), o = a(), i = s(), l = {
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
  }, u = () => l, { onError: c } = t;
  function v(D, h, S, ...J) {
    const ie = u();
    if (h.column += S, h.offset += S, c) {
      const _e = n ? ns(ie.startLoc, h) : null, nt = fr(D, _e, {
        domain: A$,
        args: J
      });
      c(nt);
    }
  }
  function m(D, h, S) {
    D.endLoc = a(), D.currentType = h;
    const J = { type: h };
    return n && (J.loc = ns(D.startLoc, D.endLoc)), S != null && (J.value = S), J;
  }
  const f = (D) => m(
    D,
    14
    /* TokenTypes.EOF */
  );
  function w(D, h) {
    return D.currentChar() === h ? (D.next(), h) : (v(ce.EXPECTED_TOKEN, a(), 0, h), "");
  }
  function g(D) {
    let h = "";
    for (; D.currentPeek() === qt || D.currentPeek() === st; )
      h += D.currentPeek(), D.peek();
    return h;
  }
  function y(D) {
    const h = g(D);
    return D.skipToPeek(), h;
  }
  function d(D) {
    if (D === sn)
      return !1;
    const h = D.charCodeAt(0);
    return h >= 97 && h <= 122 || // a-z
    h >= 65 && h <= 90 || // A-Z
    h === 95;
  }
  function b(D) {
    if (D === sn)
      return !1;
    const h = D.charCodeAt(0);
    return h >= 48 && h <= 57;
  }
  function k(D, h) {
    const { currentType: S } = h;
    if (S !== 2)
      return !1;
    g(D);
    const J = d(D.currentPeek());
    return D.resetPeek(), J;
  }
  function _(D, h) {
    const { currentType: S } = h;
    if (S !== 2)
      return !1;
    g(D);
    const J = D.currentPeek() === "-" ? D.peek() : D.currentPeek(), ie = b(J);
    return D.resetPeek(), ie;
  }
  function M(D, h) {
    const { currentType: S } = h;
    if (S !== 2)
      return !1;
    g(D);
    const J = D.currentPeek() === $i;
    return D.resetPeek(), J;
  }
  function N(D, h) {
    const { currentType: S } = h;
    if (S !== 8)
      return !1;
    g(D);
    const J = D.currentPeek() === ".";
    return D.resetPeek(), J;
  }
  function A(D, h) {
    const { currentType: S } = h;
    if (S !== 9)
      return !1;
    g(D);
    const J = d(D.currentPeek());
    return D.resetPeek(), J;
  }
  function P(D, h) {
    const { currentType: S } = h;
    if (!(S === 8 || S === 12))
      return !1;
    g(D);
    const J = D.currentPeek() === ":";
    return D.resetPeek(), J;
  }
  function L(D, h) {
    const { currentType: S } = h;
    if (S !== 10)
      return !1;
    const J = () => {
      const _e = D.currentPeek();
      return _e === "{" ? d(D.peek()) : _e === "@" || _e === "%" || _e === "|" || _e === ":" || _e === "." || _e === qt || !_e ? !1 : _e === st ? (D.peek(), J()) : d(_e);
    }, ie = J();
    return D.resetPeek(), ie;
  }
  function x(D) {
    g(D);
    const h = D.currentPeek() === "|";
    return D.resetPeek(), h;
  }
  function j(D) {
    const h = g(D), S = D.currentPeek() === "%" && D.peek() === "{";
    return D.resetPeek(), {
      isModulo: S,
      hasSpace: h.length > 0
    };
  }
  function F(D, h = !0) {
    const S = (ie = !1, _e = "", nt = !1) => {
      const He = D.currentPeek();
      return He === "{" ? _e === "%" ? !1 : ie : He === "@" || !He ? _e === "%" ? !0 : ie : He === "%" ? (D.peek(), S(ie, "%", !0)) : He === "|" ? _e === "%" || nt ? !0 : !(_e === qt || _e === st) : He === qt ? (D.peek(), S(!0, qt, nt)) : He === st ? (D.peek(), S(!0, st, nt)) : !0;
    }, J = S();
    return h && D.resetPeek(), J;
  }
  function X(D, h) {
    const S = D.currentChar();
    return S === sn ? sn : h(S) ? (D.next(), S) : null;
  }
  function K(D) {
    return X(D, (S) => {
      const J = S.charCodeAt(0);
      return J >= 97 && J <= 122 || // a-z
      J >= 65 && J <= 90 || // A-Z
      J >= 48 && J <= 57 || // 0-9
      J === 95 || // _
      J === 36;
    });
  }
  function U(D) {
    return X(D, (S) => {
      const J = S.charCodeAt(0);
      return J >= 48 && J <= 57;
    });
  }
  function Y(D) {
    return X(D, (S) => {
      const J = S.charCodeAt(0);
      return J >= 48 && J <= 57 || // 0-9
      J >= 65 && J <= 70 || // A-F
      J >= 97 && J <= 102;
    });
  }
  function ee(D) {
    let h = "", S = "";
    for (; h = U(D); )
      S += h;
    return S;
  }
  function B(D) {
    y(D);
    const h = D.currentChar();
    return h !== "%" && v(ce.EXPECTED_TOKEN, a(), 0, h), D.next(), "%";
  }
  function V(D) {
    let h = "";
    for (; ; ) {
      const S = D.currentChar();
      if (S === "{" || S === "}" || S === "@" || S === "|" || !S)
        break;
      if (S === "%")
        if (F(D))
          h += S, D.next();
        else
          break;
      else if (S === qt || S === st)
        if (F(D))
          h += S, D.next();
        else {
          if (x(D))
            break;
          h += S, D.next();
        }
      else
        h += S, D.next();
    }
    return h;
  }
  function $(D) {
    y(D);
    let h = "", S = "";
    for (; h = K(D); )
      S += h;
    return D.currentChar() === sn && v(ce.UNTERMINATED_CLOSING_BRACE, a(), 0), S;
  }
  function q(D) {
    y(D);
    let h = "";
    return D.currentChar() === "-" ? (D.next(), h += `-${ee(D)}`) : h += ee(D), D.currentChar() === sn && v(ce.UNTERMINATED_CLOSING_BRACE, a(), 0), h;
  }
  function pe(D) {
    y(D), w(D, "'");
    let h = "", S = "";
    const J = (_e) => _e !== $i && _e !== st;
    for (; h = X(D, J); )
      h === "\\" ? S += $e(D) : S += h;
    const ie = D.currentChar();
    return ie === st || ie === sn ? (v(ce.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0), ie === st && (D.next(), w(D, "'")), S) : (w(D, "'"), S);
  }
  function $e(D) {
    const h = D.currentChar();
    switch (h) {
      case "\\":
      case "'":
        return D.next(), `\\${h}`;
      case "u":
        return te(D, h, 4);
      case "U":
        return te(D, h, 6);
      default:
        return v(ce.UNKNOWN_ESCAPE_SEQUENCE, a(), 0, h), "";
    }
  }
  function te(D, h, S) {
    w(D, h);
    let J = "";
    for (let ie = 0; ie < S; ie++) {
      const _e = Y(D);
      if (!_e) {
        v(ce.INVALID_UNICODE_ESCAPE_SEQUENCE, a(), 0, `\\${h}${J}${D.currentChar()}`);
        break;
      }
      J += _e;
    }
    return `\\${h}${J}`;
  }
  function Ee(D) {
    y(D);
    let h = "", S = "";
    const J = (ie) => ie !== "{" && ie !== "}" && ie !== qt && ie !== st;
    for (; h = X(D, J); )
      S += h;
    return S;
  }
  function ge(D) {
    let h = "", S = "";
    for (; h = K(D); )
      S += h;
    return S;
  }
  function Ce(D) {
    const h = (S = !1, J) => {
      const ie = D.currentChar();
      return ie === "{" || ie === "%" || ie === "@" || ie === "|" || ie === "(" || ie === ")" || !ie || ie === qt ? J : ie === st || ie === S$ ? (J += ie, D.next(), h(S, J)) : (J += ie, D.next(), h(!0, J));
    };
    return h(!1, "");
  }
  function Ne(D) {
    y(D);
    const h = w(
      D,
      "|"
      /* TokenChars.Pipe */
    );
    return y(D), h;
  }
  function De(D, h) {
    let S = null;
    switch (D.currentChar()) {
      case "{":
        return h.braceNest >= 1 && v(ce.NOT_ALLOW_NEST_PLACEHOLDER, a(), 0), D.next(), S = m(
          h,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), y(D), h.braceNest++, S;
      case "}":
        return h.braceNest > 0 && h.currentType === 2 && v(ce.EMPTY_PLACEHOLDER, a(), 0), D.next(), S = m(
          h,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), h.braceNest--, h.braceNest > 0 && y(D), h.inLinked && h.braceNest === 0 && (h.inLinked = !1), S;
      case "@":
        return h.braceNest > 0 && v(ce.UNTERMINATED_CLOSING_BRACE, a(), 0), S = Ve(D, h) || f(h), h.braceNest = 0, S;
      default:
        let ie = !0, _e = !0, nt = !0;
        if (x(D))
          return h.braceNest > 0 && v(ce.UNTERMINATED_CLOSING_BRACE, a(), 0), S = m(h, 1, Ne(D)), h.braceNest = 0, h.inLinked = !1, S;
        if (h.braceNest > 0 && (h.currentType === 5 || h.currentType === 6 || h.currentType === 7))
          return v(ce.UNTERMINATED_CLOSING_BRACE, a(), 0), h.braceNest = 0, Ye(D, h);
        if (ie = k(D, h))
          return S = m(h, 5, $(D)), y(D), S;
        if (_e = _(D, h))
          return S = m(h, 6, q(D)), y(D), S;
        if (nt = M(D, h))
          return S = m(h, 7, pe(D)), y(D), S;
        if (!ie && !_e && !nt)
          return S = m(h, 13, Ee(D)), v(ce.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, S.value), y(D), S;
        break;
    }
    return S;
  }
  function Ve(D, h) {
    const { currentType: S } = h;
    let J = null;
    const ie = D.currentChar();
    switch ((S === 8 || S === 9 || S === 12 || S === 10) && (ie === st || ie === qt) && v(ce.INVALID_LINKED_FORMAT, a(), 0), ie) {
      case "@":
        return D.next(), J = m(
          h,
          8,
          "@"
          /* TokenChars.LinkedAlias */
        ), h.inLinked = !0, J;
      case ".":
        return y(D), D.next(), m(
          h,
          9,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return y(D), D.next(), m(
          h,
          10,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return x(D) ? (J = m(h, 1, Ne(D)), h.braceNest = 0, h.inLinked = !1, J) : N(D, h) || P(D, h) ? (y(D), Ve(D, h)) : A(D, h) ? (y(D), m(h, 12, ge(D))) : L(D, h) ? (y(D), ie === "{" ? De(D, h) || J : m(h, 11, Ce(D))) : (S === 8 && v(ce.INVALID_LINKED_FORMAT, a(), 0), h.braceNest = 0, h.inLinked = !1, Ye(D, h));
    }
  }
  function Ye(D, h) {
    let S = {
      type: 14
      /* TokenTypes.EOF */
    };
    if (h.braceNest > 0)
      return De(D, h) || f(h);
    if (h.inLinked)
      return Ve(D, h) || f(h);
    switch (D.currentChar()) {
      case "{":
        return De(D, h) || f(h);
      case "}":
        return v(ce.UNBALANCED_CLOSING_BRACE, a(), 0), D.next(), m(
          h,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return Ve(D, h) || f(h);
      default:
        if (x(D))
          return S = m(h, 1, Ne(D)), h.braceNest = 0, h.inLinked = !1, S;
        const { isModulo: ie, hasSpace: _e } = j(D);
        if (ie)
          return _e ? m(h, 0, V(D)) : m(h, 4, B(D));
        if (F(D))
          return m(h, 0, V(D));
        break;
    }
    return S;
  }
  function Je() {
    const { currentType: D, offset: h, startLoc: S, endLoc: J } = l;
    return l.lastType = D, l.lastOffset = h, l.lastStartLoc = S, l.lastEndLoc = J, l.offset = s(), l.startLoc = a(), r.currentChar() === sn ? m(
      l,
      14
      /* TokenTypes.EOF */
    ) : Ye(r, l);
  }
  return {
    nextToken: Je,
    currentOffset: s,
    currentPosition: a,
    context: u
  };
}
const R$ = "parser", F$ = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Y$(e, t, n) {
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
function V$(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function r(d, b, k, _, ...M) {
    const N = d.currentPosition();
    if (N.offset += _, N.column += _, n) {
      const A = t ? ns(k, N) : null, P = fr(b, A, {
        domain: R$,
        args: M
      });
      n(P);
    }
  }
  function s(d, b, k) {
    const _ = { type: d };
    return t && (_.start = b, _.end = b, _.loc = { start: k, end: k }), _;
  }
  function a(d, b, k, _) {
    _ && (d.type = _), t && (d.end = b, d.loc && (d.loc.end = k));
  }
  function o(d, b) {
    const k = d.context(), _ = s(3, k.offset, k.startLoc);
    return _.value = b, a(_, d.currentOffset(), d.currentPosition()), _;
  }
  function i(d, b) {
    const k = d.context(), { lastOffset: _, lastStartLoc: M } = k, N = s(5, _, M);
    return N.index = parseInt(b, 10), d.nextToken(), a(N, d.currentOffset(), d.currentPosition()), N;
  }
  function l(d, b) {
    const k = d.context(), { lastOffset: _, lastStartLoc: M } = k, N = s(4, _, M);
    return N.key = b, d.nextToken(), a(N, d.currentOffset(), d.currentPosition()), N;
  }
  function u(d, b) {
    const k = d.context(), { lastOffset: _, lastStartLoc: M } = k, N = s(9, _, M);
    return N.value = b.replace(F$, Y$), d.nextToken(), a(N, d.currentOffset(), d.currentPosition()), N;
  }
  function c(d) {
    const b = d.nextToken(), k = d.context(), { lastOffset: _, lastStartLoc: M } = k, N = s(8, _, M);
    return b.type !== 12 ? (r(d, ce.UNEXPECTED_EMPTY_LINKED_MODIFIER, k.lastStartLoc, 0), N.value = "", a(N, _, M), {
      nextConsumeToken: b,
      node: N
    }) : (b.value == null && r(d, ce.UNEXPECTED_LEXICAL_ANALYSIS, k.lastStartLoc, 0, Rt(b)), N.value = b.value || "", a(N, d.currentOffset(), d.currentPosition()), {
      node: N
    });
  }
  function v(d, b) {
    const k = d.context(), _ = s(7, k.offset, k.startLoc);
    return _.value = b, a(_, d.currentOffset(), d.currentPosition()), _;
  }
  function m(d) {
    const b = d.context(), k = s(6, b.offset, b.startLoc);
    let _ = d.nextToken();
    if (_.type === 9) {
      const M = c(d);
      k.modifier = M.node, _ = M.nextConsumeToken || d.nextToken();
    }
    switch (_.type !== 10 && r(d, ce.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Rt(_)), _ = d.nextToken(), _.type === 2 && (_ = d.nextToken()), _.type) {
      case 11:
        _.value == null && r(d, ce.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Rt(_)), k.key = v(d, _.value || "");
        break;
      case 5:
        _.value == null && r(d, ce.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Rt(_)), k.key = l(d, _.value || "");
        break;
      case 6:
        _.value == null && r(d, ce.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Rt(_)), k.key = i(d, _.value || "");
        break;
      case 7:
        _.value == null && r(d, ce.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Rt(_)), k.key = u(d, _.value || "");
        break;
      default:
        r(d, ce.UNEXPECTED_EMPTY_LINKED_KEY, b.lastStartLoc, 0);
        const M = d.context(), N = s(7, M.offset, M.startLoc);
        return N.value = "", a(N, M.offset, M.startLoc), k.key = N, a(k, M.offset, M.startLoc), {
          nextConsumeToken: _,
          node: k
        };
    }
    return a(k, d.currentOffset(), d.currentPosition()), {
      node: k
    };
  }
  function f(d) {
    const b = d.context(), k = b.currentType === 1 ? d.currentOffset() : b.offset, _ = b.currentType === 1 ? b.endLoc : b.startLoc, M = s(2, k, _);
    M.items = [];
    let N = null;
    do {
      const L = N || d.nextToken();
      switch (N = null, L.type) {
        case 0:
          L.value == null && r(d, ce.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Rt(L)), M.items.push(o(d, L.value || ""));
          break;
        case 6:
          L.value == null && r(d, ce.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Rt(L)), M.items.push(i(d, L.value || ""));
          break;
        case 5:
          L.value == null && r(d, ce.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Rt(L)), M.items.push(l(d, L.value || ""));
          break;
        case 7:
          L.value == null && r(d, ce.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Rt(L)), M.items.push(u(d, L.value || ""));
          break;
        case 8:
          const x = m(d);
          M.items.push(x.node), N = x.nextConsumeToken || null;
          break;
      }
    } while (b.currentType !== 14 && b.currentType !== 1);
    const A = b.currentType === 1 ? b.lastOffset : d.currentOffset(), P = b.currentType === 1 ? b.lastEndLoc : d.currentPosition();
    return a(M, A, P), M;
  }
  function w(d, b, k, _) {
    const M = d.context();
    let N = _.items.length === 0;
    const A = s(1, b, k);
    A.cases = [], A.cases.push(_);
    do {
      const P = f(d);
      N || (N = P.items.length === 0), A.cases.push(P);
    } while (M.currentType !== 14);
    return N && r(d, ce.MUST_HAVE_MESSAGES_IN_PLURAL, k, 0), a(A, d.currentOffset(), d.currentPosition()), A;
  }
  function g(d) {
    const b = d.context(), { offset: k, startLoc: _ } = b, M = f(d);
    return b.currentType === 14 ? M : w(d, k, _, M);
  }
  function y(d) {
    const b = x$(d, Mu({}, e)), k = b.context(), _ = s(0, k.offset, k.startLoc);
    return t && _.loc && (_.loc.source = d), _.body = g(b), e.onCacheKey && (_.cacheKey = e.onCacheKey(d)), k.currentType !== 14 && r(b, ce.UNEXPECTED_LEXICAL_ANALYSIS, k.lastStartLoc, 0, d[k.offset] || ""), a(_, b.currentOffset(), b.currentPosition()), _;
  }
  return { parse: y };
}
function Rt(e) {
  if (e.type === 14)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function U$(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (a) => (n.helpers.add(a), a) };
}
function ki(e, t) {
  for (let n = 0; n < e.length; n++)
    eo(e[n], t);
}
function eo(e, t) {
  switch (e.type) {
    case 1:
      ki(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      ki(e.items, t);
      break;
    case 6:
      eo(e.key, t), t.helper(
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
function j$(e, t = {}) {
  const n = U$(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && eo(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function W$(e) {
  const t = e.body;
  return t.type === 2 ? Ni(t) : t.cases.forEach((n) => Ni(n)), e;
}
function Ni(e) {
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
      e.static = Cu(t);
      for (let n = 0; n < e.items.length; n++) {
        const r = e.items[n];
        (r.type === 3 || r.type === 9) && delete r.value;
      }
    }
  }
}
const H$ = "minifier";
function Rn(e) {
  switch (e.t = e.type, e.type) {
    case 0:
      const t = e;
      Rn(t.body), t.b = t.body, delete t.body;
      break;
    case 1:
      const n = e, r = n.cases;
      for (let c = 0; c < r.length; c++)
        Rn(r[c]);
      n.c = r, delete n.cases;
      break;
    case 2:
      const s = e, a = s.items;
      for (let c = 0; c < a.length; c++)
        Rn(a[c]);
      s.i = a, delete s.items, s.static && (s.s = s.static, delete s.static);
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
      Rn(i.key), i.k = i.key, delete i.key, i.modifier && (Rn(i.modifier), i.m = i.modifier, delete i.modifier);
      break;
    case 5:
      const l = e;
      l.i = l.index, delete l.index;
      break;
    case 4:
      const u = e;
      u.k = u.key, delete u.key;
      break;
    default:
      throw fr(ce.UNHANDLED_MINIFIER_NODE_TYPE, null, {
        domain: H$,
        args: [e.type]
      });
  }
  delete e.type;
}
const B$ = "parser";
function G$(e, t) {
  const { sourceMap: n, filename: r, breakLineCode: s, needIndent: a } = t, o = t.location !== !1, i = {
    filename: r,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode: s,
    needIndent: a,
    indentLevel: 0
  };
  o && e.loc && (i.source = e.loc.source);
  const l = () => i;
  function u(y, d) {
    i.code += y;
  }
  function c(y, d = !0) {
    const b = d ? s : "";
    u(a ? b + "  ".repeat(y) : b);
  }
  function v(y = !0) {
    const d = ++i.indentLevel;
    y && c(d);
  }
  function m(y = !0) {
    const d = --i.indentLevel;
    y && c(d);
  }
  function f() {
    c(i.indentLevel);
  }
  return {
    context: l,
    push: u,
    indent: v,
    deindent: m,
    newline: f,
    helper: (y) => `_${y}`,
    needIndent: () => i.needIndent
  };
}
function K$(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), tr(e, t.key), t.modifier ? (e.push(", "), tr(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function q$(e, t) {
  const { helper: n, needIndent: r } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(r());
  const s = t.items.length;
  for (let a = 0; a < s && (tr(e, t.items[a]), a !== s - 1); a++)
    e.push(", ");
  e.deindent(r()), e.push("])");
}
function z$(e, t) {
  const { helper: n, needIndent: r } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(r());
    const s = t.cases.length;
    for (let a = 0; a < s && (tr(e, t.cases[a]), a !== s - 1); a++)
      e.push(", ");
    e.deindent(r()), e.push("])");
  }
}
function X$(e, t) {
  t.body ? tr(e, t.body) : e.push("null");
}
function tr(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      X$(e, t);
      break;
    case 1:
      z$(e, t);
      break;
    case 2:
      q$(e, t);
      break;
    case 6:
      K$(e, t);
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
      throw fr(ce.UNHANDLED_CODEGEN_NODE_TYPE, null, {
        domain: B$,
        args: [t.type]
      });
  }
}
const Z$ = (e, t = {}) => {
  const n = Oi(t.mode) ? t.mode : "normal", r = Oi(t.filename) ? t.filename : "message.intl", s = !!t.sourceMap, a = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, o = t.needIndent ? t.needIndent : n !== "arrow", i = e.helpers || [], l = G$(e, {
    mode: n,
    filename: r,
    sourceMap: s,
    breakLineCode: a,
    needIndent: o
  });
  l.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), l.indent(o), i.length > 0 && (l.push(`const { ${Cu(i.map((v) => `${v}: _${v}`), ", ")} } = ctx`), l.newline()), l.push("return "), tr(l, e), l.deindent(o), l.push("}"), delete e.helpers;
  const { code: u, map: c } = l.context();
  return {
    ast: e,
    code: u,
    map: c ? c.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function J$(e, t = {}) {
  const n = Mu({}, t), r = !!n.jit, s = !!n.minify, a = n.optimize == null ? !0 : n.optimize, i = V$(n).parse(e);
  return r ? (a && W$(i), s && Rn(i), { ast: i, code: "" }) : (j$(i, n), Z$(i, n));
}
/*!
  * core-base v9.5.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */
function Q$() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (zt().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (zt().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (zt().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const _n = [];
_n[
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
_n[
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
_n[
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
_n[
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
_n[
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
_n[
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
_n[
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
const ek = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function tk(e) {
  return ek.test(e);
}
function nk(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function rk(e) {
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
function ak(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : tk(t) ? nk(t) : "*" + t;
}
function sk(e) {
  const t = [];
  let n = -1, r = 0, s = 0, a, o, i, l, u, c, v;
  const m = [];
  m[
    0
    /* Actions.APPEND */
  ] = () => {
    o === void 0 ? o = i : o += i;
  }, m[
    1
    /* Actions.PUSH */
  ] = () => {
    o !== void 0 && (t.push(o), o = void 0);
  }, m[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    m[
      0
      /* Actions.APPEND */
    ](), s++;
  }, m[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (s > 0)
      s--, r = 4, m[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (s = 0, o === void 0 || (o = ak(o), o === !1))
        return !1;
      m[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function f() {
    const w = e[n + 1];
    if (r === 5 && w === "'" || r === 6 && w === '"')
      return n++, i = "\\" + w, m[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; r !== null; )
    if (n++, a = e[n], !(a === "\\" && f())) {
      if (l = rk(a), v = _n[r], u = v[l] || v.l || 8, u === 8 || (r = u[0], u[1] !== void 0 && (c = m[u[1]], c && (i = a, c() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const Ti = /* @__PURE__ */ new Map();
function ok(e, t) {
  return ke(e) ? e[t] : null;
}
function ik(e, t) {
  if (!ke(e))
    return null;
  let n = Ti.get(t);
  if (n || (n = sk(t), n && Ti.set(t, n)), !n)
    return null;
  const r = n.length;
  let s = e, a = 0;
  for (; a < r; ) {
    const o = s[n[a]];
    if (o === void 0)
      return null;
    s = o, a++;
  }
  return s;
}
const lk = (e) => e, uk = (e) => "", ck = "text", dk = (e) => e.length === 0 ? "" : b$(e), fk = _$;
function Ii(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function vk(e) {
  const t = Ze(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Ze(e.named.count) || Ze(e.named.n)) ? Ze(e.named.count) ? e.named.count : Ze(e.named.n) ? e.named.n : t : t;
}
function mk(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function pk(e = {}) {
  const t = e.locale, n = vk(e), r = ke(e.pluralRules) && Z(t) && Fe(e.pluralRules[t]) ? e.pluralRules[t] : Ii, s = ke(e.pluralRules) && Z(t) && Fe(e.pluralRules[t]) ? Ii : void 0, a = (d) => d[r(n, d.length, s)], o = e.list || [], i = (d) => o[d], l = e.named || {};
  Ze(e.pluralIndex) && mk(n, l);
  const u = (d) => l[d];
  function c(d) {
    const b = Fe(e.messages) ? e.messages(d) : ke(e.messages) ? e.messages[d] : !1;
    return b || (e.parent ? e.parent.message(d) : uk);
  }
  const v = (d) => e.modifiers ? e.modifiers[d] : lk, m = ve(e.processor) && Fe(e.processor.normalize) ? e.processor.normalize : dk, f = ve(e.processor) && Fe(e.processor.interpolate) ? e.processor.interpolate : fk, w = ve(e.processor) && Z(e.processor.type) ? e.processor.type : ck, y = {
    list: i,
    named: u,
    plural: a,
    linked: (d, ...b) => {
      const [k, _] = b;
      let M = "text", N = "";
      b.length === 1 ? ke(k) ? (N = k.modifier || N, M = k.type || M) : Z(k) && (N = k || N) : b.length === 2 && (Z(k) && (N = k || N), Z(_) && (M = _ || M));
      const A = c(d)(y), P = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        M === "vnode" && Ae(A) && N ? A[0] : A
      );
      return N ? v(N)(P, M) : P;
    },
    message: c,
    type: w,
    interpolate: f,
    normalize: m,
    values: tt({}, o, l)
  };
  return y;
}
let Lr = null;
function hk(e) {
  Lr = e;
}
function gk(e, t, n) {
  Lr && Lr.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: n
  });
}
const _k = /* @__PURE__ */ bk(
  "function:translate"
  /* IntlifyDevToolsHooks.FunctionTranslate */
);
function bk(e) {
  return (t) => Lr && Lr.emit(e, t);
}
const ot = {
  NOT_FOUND_KEY: 1,
  FALLBACK_TO_TRANSLATE: 2,
  CANNOT_FORMAT_NUMBER: 3,
  FALLBACK_TO_NUMBER_FORMAT: 4,
  CANNOT_FORMAT_DATE: 5,
  FALLBACK_TO_DATE_FORMAT: 6,
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: 7,
  __EXTEND_POINT__: 8
}, yk = {
  [ot.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
  [ot.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
  [ot.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
  [ot.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
  [ot.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
  [ot.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale.",
  [ot.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: "This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future."
};
function Nn(e, ...t) {
  return Xs(yk[e], ...t);
}
function to(e, t) {
  return t.locale != null ? Mi(t.locale) : Mi(e.locale);
}
let Ua;
function Mi(e) {
  return Z(e) ? e : Ua != null && e.resolvedOnce ? Ua : Ua = e();
}
function Dk(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...Ae(t) ? t : ke(t) ? Object.keys(t) : Z(t) ? [t] : [n]
  ])];
}
function Pu(e, t, n) {
  const r = Z(n) ? n : nr, s = e;
  s.__localeChainCache || (s.__localeChainCache = /* @__PURE__ */ new Map());
  let a = s.__localeChainCache.get(r);
  if (!a) {
    a = [];
    let o = [n];
    for (; Ae(o); )
      o = Ci(a, o, t);
    const i = Ae(t) || !ve(t) ? t : t.default ? t.default : null;
    o = Z(i) ? [i] : i, Ae(o) && Ci(a, o, !1), s.__localeChainCache.set(r, a);
  }
  return a;
}
function Ci(e, t, n) {
  let r = !0;
  for (let s = 0; s < t.length && ye(r); s++) {
    const a = t[s];
    Z(a) && (r = Ek(e, t[s], n));
  }
  return r;
}
function Ek(e, t, n) {
  let r;
  const s = t.split("-");
  do {
    const a = s.join("-");
    r = wk(e, a, n), s.splice(-1, 1);
  } while (s.length && r === !0);
  return r;
}
function wk(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== "!";
    const s = t.replace(/!/g, "");
    e.push(s), (Ae(n) || ve(n)) && n[s] && (r = n[s]);
  }
  return r;
}
const Ok = "9.5.0", Ma = -1, nr = "en-US", ya = "", Pi = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function $k() {
  return {
    upper: (e, t) => t === "text" && Z(e) ? e.toUpperCase() : t === "vnode" && ke(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && Z(e) ? e.toLowerCase() : t === "vnode" && ke(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && Z(e) ? Pi(e) : t === "vnode" && ke(e) && "__v_isVNode" in e ? Pi(e.children) : e
  };
}
let Lu;
function Li(e) {
  Lu = e;
}
let Su;
function kk(e) {
  Su = e;
}
let Au;
function Nk(e) {
  Au = e;
}
let xu = null;
const Si = (e) => {
  xu = e;
}, Tk = () => xu;
let Ru = null;
const Ai = (e) => {
  Ru = e;
}, Ik = () => Ru;
let xi = 0;
function Mk(e = {}) {
  const t = Fe(e.onWarn) ? e.onWarn : et, n = Z(e.version) ? e.version : Ok, r = Z(e.locale) || Fe(e.locale) ? e.locale : nr, s = Fe(r) ? nr : r, a = Ae(e.fallbackLocale) || ve(e.fallbackLocale) || Z(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : s, o = ve(e.messages) ? e.messages : { [s]: {} }, i = ve(e.datetimeFormats) ? e.datetimeFormats : { [s]: {} }, l = ve(e.numberFormats) ? e.numberFormats : { [s]: {} }, u = tt({}, e.modifiers || {}, $k()), c = e.pluralRules || {}, v = Fe(e.missing) ? e.missing : null, m = ye(e.missingWarn) || pn(e.missingWarn) ? e.missingWarn : !0, f = ye(e.fallbackWarn) || pn(e.fallbackWarn) ? e.fallbackWarn : !0, w = !!e.fallbackFormat, g = !!e.unresolving, y = Fe(e.postTranslation) ? e.postTranslation : null, d = ve(e.processor) ? e.processor : null, b = ye(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, k = !!e.escapeParameter, _ = Fe(e.messageCompiler) ? e.messageCompiler : Lu;
  process.env.NODE_ENV !== "production" && Fe(e.messageCompiler) && D$(Nn(ot.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
  const M = Fe(e.messageResolver) ? e.messageResolver : Su || ok, N = Fe(e.localeFallbacker) ? e.localeFallbacker : Au || Dk, A = ke(e.fallbackContext) ? e.fallbackContext : void 0, P = e, L = ke(P.__datetimeFormatters) ? P.__datetimeFormatters : /* @__PURE__ */ new Map(), x = ke(P.__numberFormatters) ? P.__numberFormatters : /* @__PURE__ */ new Map(), j = ke(P.__meta) ? P.__meta : {};
  xi++;
  const F = {
    version: n,
    cid: xi,
    locale: r,
    fallbackLocale: a,
    messages: o,
    modifiers: u,
    pluralRules: c,
    missing: v,
    missingWarn: m,
    fallbackWarn: f,
    fallbackFormat: w,
    unresolving: g,
    postTranslation: y,
    processor: d,
    warnHtmlMessage: b,
    escapeParameter: k,
    messageCompiler: _,
    messageResolver: M,
    localeFallbacker: N,
    fallbackContext: A,
    onWarn: t,
    __meta: j
  };
  return F.datetimeFormats = i, F.numberFormats = l, F.__datetimeFormatters = L, F.__numberFormatters = x, process.env.NODE_ENV !== "production" && (F.__v_emitter = P.__v_emitter != null ? P.__v_emitter : void 0), (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && gk(F, n, j), F;
}
function Ca(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function Fu(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function no(e, t, n, r, s) {
  const { missing: a, onWarn: o } = e;
  if (process.env.NODE_ENV !== "production") {
    const i = e.__v_emitter;
    i && i.emit("missing", {
      locale: n,
      key: t,
      type: s,
      groupId: `${s}:${t}`
    });
  }
  if (a !== null) {
    const i = a(e, n, t, s);
    return Z(i) ? i : t;
  } else
    return process.env.NODE_ENV !== "production" && Fu(r, t) && o(Nn(ot.NOT_FOUND_KEY, { key: t, locale: n })), t;
}
function br(e, t, n) {
  const r = e;
  r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function ja(e) {
  return (n) => Ck(n, e);
}
function Ck(e, t) {
  const n = t.b || t.body;
  if ((n.t || n.type) === 1) {
    const r = n, s = r.c || r.cases;
    return e.plural(s.reduce((a, o) => [
      ...a,
      Ri(e, o)
    ], []));
  } else
    return Ri(e, n);
}
function Ri(e, t) {
  const n = t.s || t.static;
  if (n)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const r = (t.i || t.items).reduce((s, a) => [...s, rs(e, a)], []);
    return e.normalize(r);
  }
}
function rs(e, t) {
  const n = t.t || t.type;
  switch (n) {
    case 3:
      const r = t;
      return r.v || r.value;
    case 9:
      const s = t;
      return s.v || s.value;
    case 4:
      const a = t;
      return e.interpolate(e.named(a.k || a.key));
    case 5:
      const o = t;
      return e.interpolate(e.list(o.i != null ? o.i : o.index));
    case 6:
      const i = t, l = i.m || i.modifier;
      return e.linked(rs(e, i.k || i.key), l ? rs(e, l) : void 0, e.type);
    case 7:
      const u = t;
      return u.v || u.value;
    case 8:
      const c = t;
      return c.v || c.value;
    default:
      throw new Error(`unhandled node type on format message part: ${n}`);
  }
}
const Yu = ce.__EXTEND_POINT__, qr = Js(Yu), Dt = {
  INVALID_ARGUMENT: Yu,
  INVALID_DATE_ARGUMENT: qr(),
  INVALID_ISO_DATE_ARGUMENT: qr(),
  NOT_SUPPORT_NON_STRING_MESSAGE: qr(),
  __EXTEND_POINT__: qr()
  // 22
};
function En(e) {
  return fr(e, null, process.env.NODE_ENV !== "production" ? { messages: Pk } : void 0);
}
const Pk = {
  [Dt.INVALID_ARGUMENT]: "Invalid arguments",
  [Dt.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [Dt.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
  [Dt.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message"
}, Lk = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function Vu(e, t) {
  t && I$(e) && et(Xs(Lk, { source: e }));
}
const Uu = (e) => e;
let Hn = /* @__PURE__ */ Object.create(null);
const Tn = (e) => ke(e) && (e.t === 0 || e.type === 0) && ("b" in e || "body" in e);
function ju(e, t = {}) {
  let n = !1;
  const r = t.onError || N$;
  return t.onError = (s) => {
    n = !0, r(s);
  }, { ...J$(e, t), detectError: n };
}
const Sk = (e, t) => {
  if (!Z(e))
    throw En(Dt.NOT_SUPPORT_NON_STRING_MESSAGE);
  {
    const n = ye(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && Vu(e, n);
    const s = (t.onCacheKey || Uu)(e), a = Hn[s];
    if (a)
      return a;
    const { code: o, detectError: i } = ju(e, t), l = new Function(`return ${o}`)();
    return i ? l : Hn[s] = l;
  }
};
function Ak(e, t) {
  if (__INTLIFY_JIT_COMPILATION__ && !__INTLIFY_DROP_MESSAGE_COMPILER__ && Z(e)) {
    const n = ye(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && Vu(e, n);
    const s = (t.onCacheKey || Uu)(e), a = Hn[s];
    if (a)
      return a;
    const { ast: o, detectError: i } = ju(e, {
      ...t,
      location: process.env.NODE_ENV !== "production",
      jit: !0
    }), l = ja(o);
    return i ? l : Hn[s] = l;
  } else {
    if (process.env.NODE_ENV !== "production" && !Tn(e))
      return et(`the message that is resolve with key '${t.key}' is not supported for jit compilation`), () => e;
    const n = e.cacheKey;
    if (n) {
      const r = Hn[n];
      return r || (Hn[n] = ja(e));
    } else
      return ja(e);
  }
}
const Fi = () => "", Ct = (e) => Fe(e);
function Yi(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: s, messageCompiler: a, fallbackLocale: o, messages: i } = e, [l, u] = as(...t), c = ye(u.missingWarn) ? u.missingWarn : e.missingWarn, v = ye(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, m = ye(u.escapeParameter) ? u.escapeParameter : e.escapeParameter, f = !!u.resolvedMessage, w = Z(u.default) || ye(u.default) ? ye(u.default) ? a ? l : () => l : u.default : n ? a ? l : () => l : "", g = n || w !== "", y = to(e, u);
  m && xk(u);
  let [d, b, k] = f ? [
    l,
    y,
    i[y] || {}
  ] : Wu(e, l, y, o, v, c), _ = d, M = l;
  if (!f && !(Z(_) || Tn(_) || Ct(_)) && g && (_ = w, M = _), !f && (!(Z(_) || Tn(_) || Ct(_)) || !Z(b)))
    return s ? Ma : l;
  if (process.env.NODE_ENV !== "production" && Z(_) && e.messageCompiler == null)
    return et(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${l}'.`), l;
  let N = !1;
  const A = () => {
    N = !0;
  }, P = Ct(_) ? _ : Hu(e, l, b, _, M, A);
  if (N)
    return _;
  const L = Vk(e, b, k, u), x = pk(L), j = Rk(e, P, x), F = r ? r(j, l) : j;
  if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    const X = {
      timestamp: Date.now(),
      key: Z(l) ? l : Ct(_) ? _.key : "",
      locale: b || (Ct(_) ? _.locale : ""),
      format: Z(_) ? _ : Ct(_) ? _.source : "",
      message: F
    };
    X.meta = tt({}, e.__meta, Tk() || {}), _k(X);
  }
  return F;
}
function xk(e) {
  Ae(e.list) ? e.list = e.list.map((t) => Z(t) ? Di(t) : t) : ke(e.named) && Object.keys(e.named).forEach((t) => {
    Z(e.named[t]) && (e.named[t] = Di(e.named[t]));
  });
}
function Wu(e, t, n, r, s, a) {
  const { messages: o, onWarn: i, messageResolver: l, localeFallbacker: u } = e, c = u(e, r, n);
  let v = {}, m, f = null, w = n, g = null;
  const y = "translate";
  for (let d = 0; d < c.length; d++) {
    if (m = g = c[d], process.env.NODE_ENV !== "production" && n !== m && Ca(s, t) && i(Nn(ot.FALLBACK_TO_TRANSLATE, {
      key: t,
      target: m
    })), process.env.NODE_ENV !== "production" && n !== m) {
      const N = e.__v_emitter;
      N && N.emit("fallback", {
        type: y,
        key: t,
        from: w,
        to: g,
        groupId: `${y}:${t}`
      });
    }
    v = o[m] || {};
    let b = null, k, _;
    if (process.env.NODE_ENV !== "production" && Ht && (b = window.performance.now(), k = "intlify-message-resolve-start", _ = "intlify-message-resolve-end", pt && pt(k)), (f = l(v, t)) === null && (f = v[t]), process.env.NODE_ENV !== "production" && Ht) {
      const N = window.performance.now(), A = e.__v_emitter;
      A && b && f && A.emit("message-resolve", {
        type: "message-resolve",
        key: t,
        message: f,
        time: N - b,
        groupId: `${y}:${t}`
      }), k && _ && pt && kn && (pt(_), kn("intlify message resolve", k, _));
    }
    if (Z(f) || Tn(f) || Ct(f))
      break;
    const M = no(
      e,
      // eslint-disable-line @typescript-eslint/no-explicit-any
      t,
      m,
      a,
      y
    );
    M !== t && (f = M), w = g;
  }
  return [f, m, v];
}
function Hu(e, t, n, r, s, a) {
  const { messageCompiler: o, warnHtmlMessage: i } = e;
  if (Ct(r)) {
    const m = r;
    return m.locale = m.locale || n, m.key = m.key || t, m;
  }
  if (o == null) {
    const m = () => r;
    return m.locale = n, m.key = t, m;
  }
  let l = null, u, c;
  process.env.NODE_ENV !== "production" && Ht && (l = window.performance.now(), u = "intlify-message-compilation-start", c = "intlify-message-compilation-end", pt && pt(u));
  const v = o(r, Fk(e, n, s, r, i, a));
  if (process.env.NODE_ENV !== "production" && Ht) {
    const m = window.performance.now(), f = e.__v_emitter;
    f && l && f.emit("message-compilation", {
      type: "message-compilation",
      message: r,
      time: m - l,
      groupId: `translate:${t}`
    }), u && c && pt && kn && (pt(c), kn("intlify message compilation", u, c));
  }
  return v.locale = n, v.key = t, v.source = r, v;
}
function Rk(e, t, n) {
  let r = null, s, a;
  process.env.NODE_ENV !== "production" && Ht && (r = window.performance.now(), s = "intlify-message-evaluation-start", a = "intlify-message-evaluation-end", pt && pt(s));
  const o = t(n);
  if (process.env.NODE_ENV !== "production" && Ht) {
    const i = window.performance.now(), l = e.__v_emitter;
    l && r && l.emit("message-evaluation", {
      type: "message-evaluation",
      value: o,
      time: i - r,
      groupId: `translate:${t.key}`
    }), s && a && pt && kn && (pt(a), kn("intlify message evaluation", s, a));
  }
  return o;
}
function as(...e) {
  const [t, n, r] = e, s = {};
  if (!Z(t) && !Ze(t) && !Ct(t) && !Tn(t))
    throw En(Dt.INVALID_ARGUMENT);
  const a = Ze(t) ? String(t) : (Ct(t), t);
  return Ze(n) ? s.plural = n : Z(n) ? s.default = n : ve(n) && !Ia(n) ? s.named = n : Ae(n) && (s.list = n), Ze(r) ? s.plural = r : Z(r) ? s.default = r : ve(r) && tt(s, r), [a, s];
}
function Fk(e, t, n, r, s, a) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: s,
    onError: (o) => {
      if (a && a(o), process.env.NODE_ENV !== "production") {
        const i = Yk(r), l = `Message compilation error: ${o.message}`, u = o.location && i && y$(i, o.location.start.offset, o.location.end.offset), c = e.__v_emitter;
        c && i && c.emit("compile-error", {
          message: i,
          error: o.message,
          start: o.location && o.location.start.offset,
          end: o.location && o.location.end.offset,
          groupId: `translate:${n}`
        }), console.error(u ? `${l}
${u}` : l);
      } else
        throw o;
    },
    onCacheKey: (o) => m$(t, n, o)
  };
}
function Yk(e) {
  var t;
  if (!Z(e)) {
    if ((t = e.loc) != null && t.source)
      return e.loc.source;
  }
}
function Vk(e, t, n, r) {
  const { modifiers: s, pluralRules: a, messageResolver: o, fallbackLocale: i, fallbackWarn: l, missingWarn: u, fallbackContext: c } = e, m = {
    locale: t,
    modifiers: s,
    pluralRules: a,
    messages: (f) => {
      let w = o(n, f);
      if (w == null && c) {
        const [, , g] = Wu(c, f, t, i, l, u);
        w = o(g, f);
      }
      if (Z(w) || Tn(w)) {
        let g = !1;
        const d = Hu(e, f, t, w, f, () => {
          g = !0;
        });
        return g ? Fi : d;
      } else
        return Ct(w) ? w : Fi;
    }
  };
  return e.processor && (m.processor = e.processor), r.list && (m.list = r.list), r.named && (m.named = r.named), Ze(r.plural) && (m.pluralIndex = r.plural), m;
}
const Vi = typeof Intl < "u", Bu = {
  dateTimeFormat: Vi && typeof Intl.DateTimeFormat < "u",
  numberFormat: Vi && typeof Intl.NumberFormat < "u"
};
function Ui(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: s, onWarn: a, localeFallbacker: o } = e, { __datetimeFormatters: i } = e;
  if (process.env.NODE_ENV !== "production" && !Bu.dateTimeFormat)
    return a(Nn(ot.CANNOT_FORMAT_DATE)), ya;
  const [l, u, c, v] = ss(...t), m = ye(c.missingWarn) ? c.missingWarn : e.missingWarn, f = ye(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn, w = !!c.part, g = to(e, c), y = o(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    s,
    g
  );
  if (!Z(l) || l === "")
    return new Intl.DateTimeFormat(g, v).format(u);
  let d = {}, b, k = null, _ = g, M = null;
  const N = "datetime format";
  for (let L = 0; L < y.length; L++) {
    if (b = M = y[L], process.env.NODE_ENV !== "production" && g !== b && Ca(f, l) && a(Nn(ot.FALLBACK_TO_DATE_FORMAT, {
      key: l,
      target: b
    })), process.env.NODE_ENV !== "production" && g !== b) {
      const x = e.__v_emitter;
      x && x.emit("fallback", {
        type: N,
        key: l,
        from: _,
        to: M,
        groupId: `${N}:${l}`
      });
    }
    if (d = n[b] || {}, k = d[l], ve(k))
      break;
    no(e, l, b, m, N), _ = M;
  }
  if (!ve(k) || !Z(b))
    return r ? Ma : l;
  let A = `${b}__${l}`;
  Ia(v) || (A = `${A}__${JSON.stringify(v)}`);
  let P = i.get(A);
  return P || (P = new Intl.DateTimeFormat(b, tt({}, k, v)), i.set(A, P)), w ? P.formatToParts(u) : P.format(u);
}
const Gu = [
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
function ss(...e) {
  const [t, n, r, s] = e, a = {};
  let o = {}, i;
  if (Z(t)) {
    const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l)
      throw En(Dt.INVALID_ISO_DATE_ARGUMENT);
    const u = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
    i = new Date(u);
    try {
      i.toISOString();
    } catch {
      throw En(Dt.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (h$(t)) {
    if (isNaN(t.getTime()))
      throw En(Dt.INVALID_DATE_ARGUMENT);
    i = t;
  } else if (Ze(t))
    i = t;
  else
    throw En(Dt.INVALID_ARGUMENT);
  return Z(n) ? a.key = n : ve(n) && Object.keys(n).forEach((l) => {
    Gu.includes(l) ? o[l] = n[l] : a[l] = n[l];
  }), Z(r) ? a.locale = r : ve(r) && (o = r), ve(s) && (o = s), [a.key || "", i, a, o];
}
function ji(e, t, n) {
  const r = e;
  for (const s in n) {
    const a = `${t}__${s}`;
    r.__datetimeFormatters.has(a) && r.__datetimeFormatters.delete(a);
  }
}
function Wi(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: s, onWarn: a, localeFallbacker: o } = e, { __numberFormatters: i } = e;
  if (process.env.NODE_ENV !== "production" && !Bu.numberFormat)
    return a(Nn(ot.CANNOT_FORMAT_NUMBER)), ya;
  const [l, u, c, v] = os(...t), m = ye(c.missingWarn) ? c.missingWarn : e.missingWarn, f = ye(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn, w = !!c.part, g = to(e, c), y = o(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    s,
    g
  );
  if (!Z(l) || l === "")
    return new Intl.NumberFormat(g, v).format(u);
  let d = {}, b, k = null, _ = g, M = null;
  const N = "number format";
  for (let L = 0; L < y.length; L++) {
    if (b = M = y[L], process.env.NODE_ENV !== "production" && g !== b && Ca(f, l) && a(Nn(ot.FALLBACK_TO_NUMBER_FORMAT, {
      key: l,
      target: b
    })), process.env.NODE_ENV !== "production" && g !== b) {
      const x = e.__v_emitter;
      x && x.emit("fallback", {
        type: N,
        key: l,
        from: _,
        to: M,
        groupId: `${N}:${l}`
      });
    }
    if (d = n[b] || {}, k = d[l], ve(k))
      break;
    no(e, l, b, m, N), _ = M;
  }
  if (!ve(k) || !Z(b))
    return r ? Ma : l;
  let A = `${b}__${l}`;
  Ia(v) || (A = `${A}__${JSON.stringify(v)}`);
  let P = i.get(A);
  return P || (P = new Intl.NumberFormat(b, tt({}, k, v)), i.set(A, P)), w ? P.formatToParts(u) : P.format(u);
}
const Ku = [
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
function os(...e) {
  const [t, n, r, s] = e, a = {};
  let o = {};
  if (!Ze(t))
    throw En(Dt.INVALID_ARGUMENT);
  const i = t;
  return Z(n) ? a.key = n : ve(n) && Object.keys(n).forEach((l) => {
    Ku.includes(l) ? o[l] = n[l] : a[l] = n[l];
  }), Z(r) ? a.locale = r : ve(r) && (o = r), ve(s) && (o = s), [a.key || "", i, a, o];
}
function Hi(e, t, n) {
  const r = e;
  for (const s in n) {
    const a = `${t}__${s}`;
    r.__numberFormatters.has(a) && r.__numberFormatters.delete(a);
  }
}
Q$();
function Uk() {
  return qu().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function qu() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const jk = typeof Proxy == "function", Wk = "devtools-plugin:setup", Hk = "plugin:settings:set";
let An, is;
function Bk() {
  var e;
  return An !== void 0 || (typeof window < "u" && window.performance ? (An = !0, is = window.performance) : typeof global < "u" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (An = !0, is = global.perf_hooks.performance) : An = !1), An;
}
function Gk() {
  return Bk() ? is.now() : Date.now();
}
class Kk {
  constructor(t, n) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n;
    const r = {};
    if (t.settings)
      for (const o in t.settings) {
        const i = t.settings[o];
        r[o] = i.defaultValue;
      }
    const s = `__vue-devtools-plugin-settings__${t.id}`;
    let a = Object.assign({}, r);
    try {
      const o = localStorage.getItem(s), i = JSON.parse(o);
      Object.assign(a, i);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return a;
      },
      setSettings(o) {
        try {
          localStorage.setItem(s, JSON.stringify(o));
        } catch {
        }
        a = o;
      },
      now() {
        return Gk();
      }
    }, n && n.on(Hk, (o, i) => {
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
      }), this.fallbacks[i](...l)) : (...l) => new Promise((u) => {
        this.targetQueue.push({
          method: i,
          args: l,
          resolve: u
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
function qk(e, t) {
  const n = e, r = qu(), s = Uk(), a = jk && n.enableEarlyProxy;
  if (s && (r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !a))
    s.emit(Wk, e, t);
  else {
    const o = a ? new Kk(n, s) : null;
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
const zk = "9.5.0";
function Xk() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (zt().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (zt().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (zt().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (zt().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (zt().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const zu = ot.__EXTEND_POINT__, on = Js(zu), We = {
  FALLBACK_TO_ROOT: zu,
  NOT_SUPPORTED_PRESERVE: on(),
  NOT_SUPPORTED_FORMATTER: on(),
  NOT_SUPPORTED_PRESERVE_DIRECTIVE: on(),
  NOT_SUPPORTED_GET_CHOICE_INDEX: on(),
  COMPONENT_NAME_LEGACY_COMPATIBLE: on(),
  NOT_FOUND_PARENT_SCOPE: on(),
  IGNORE_OBJ_FLATTEN: on(),
  NOTICE_DROP_ALLOW_COMPOSITION: on()
  // 17
}, Zk = {
  [We.FALLBACK_TO_ROOT]: "Fall back to {type} '{key}' with root locale.",
  [We.NOT_SUPPORTED_PRESERVE]: "Not supported 'preserve'.",
  [We.NOT_SUPPORTED_FORMATTER]: "Not supported 'formatter'.",
  [We.NOT_SUPPORTED_PRESERVE_DIRECTIVE]: "Not supported 'preserveDirectiveContent'.",
  [We.NOT_SUPPORTED_GET_CHOICE_INDEX]: "Not supported 'getChoiceIndex'.",
  [We.COMPONENT_NAME_LEGACY_COMPATIBLE]: "Component name legacy compatible: '{name}' -> 'i18n'",
  [We.NOT_FOUND_PARENT_SCOPE]: "Not found parent scope. use the global scope.",
  [We.IGNORE_OBJ_FLATTEN]: "Ignore object flatten: '{key}' key has an string value",
  [We.NOTICE_DROP_ALLOW_COMPOSITION]: "'allowComposition' option will be dropped in the next major version. For more information, please see 👉 https://tinyurl.com/2p97mcze"
};
function mt(e, ...t) {
  return Xs(Zk[e], ...t);
}
const Xu = Dt.__EXTEND_POINT__, ut = Js(Xu), Oe = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: Xu,
  // legacy module errors
  INVALID_ARGUMENT: ut(),
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: ut(),
  NOT_INSTALLED: ut(),
  NOT_AVAILABLE_IN_LEGACY_MODE: ut(),
  // directive module errors
  REQUIRED_VALUE: ut(),
  INVALID_VALUE: ut(),
  // vue-devtools errors
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: ut(),
  NOT_INSTALLED_WITH_PROVIDE: ut(),
  // unexpected error
  UNEXPECTED_ERROR: ut(),
  // not compatible legacy vue-i18n constructor
  NOT_COMPATIBLE_LEGACY_VUE_I18N: ut(),
  // bridge support vue 2.x only
  BRIDGE_SUPPORT_VUE_2_ONLY: ut(),
  // need to define `i18n` option in `allowComposition: true` and `useScope: 'local' at `useI18n``
  MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: ut(),
  // Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: ut(),
  // for enhancement
  __EXTEND_POINT__: ut()
  // 37
};
function Xe(e, ...t) {
  return fr(e, null, process.env.NODE_ENV !== "production" ? { messages: Jk, args: t } : void 0);
}
const Jk = {
  [Oe.UNEXPECTED_RETURN_TYPE]: "Unexpected return type in composer",
  [Oe.INVALID_ARGUMENT]: "Invalid argument",
  [Oe.MUST_BE_CALL_SETUP_TOP]: "Must be called at the top of a `setup` function",
  [Oe.NOT_INSTALLED]: "Need to install with `app.use` function",
  [Oe.UNEXPECTED_ERROR]: "Unexpected error",
  [Oe.NOT_AVAILABLE_IN_LEGACY_MODE]: "Not available in legacy mode",
  [Oe.REQUIRED_VALUE]: "Required in value: {0}",
  [Oe.INVALID_VALUE]: "Invalid value",
  [Oe.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: "Cannot setup vue-devtools plugin",
  [Oe.NOT_INSTALLED_WITH_PROVIDE]: "Need to install with `provide` function",
  [Oe.NOT_COMPATIBLE_LEGACY_VUE_I18N]: "Not compatible legacy VueI18n.",
  [Oe.BRIDGE_SUPPORT_VUE_2_ONLY]: "vue-i18n-bridge support Vue 2.x only",
  [Oe.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION]: "Must define ‘i18n’ option or custom block in Composition API with using local scope in Legacy API mode",
  [Oe.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]: "Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"
}, ls = /* @__PURE__ */ Kt("__translateVNode"), us = /* @__PURE__ */ Kt("__datetimeParts"), cs = /* @__PURE__ */ Kt("__numberParts"), In = /* @__PURE__ */ Kt("__enableEmitter"), Sr = /* @__PURE__ */ Kt("__disableEmitter"), Zu = Kt("__setPluralRules"), Ju = /* @__PURE__ */ Kt("__injectWithOption"), ds = /* @__PURE__ */ Kt("__dispose");
function fs(e) {
  if (!ke(e))
    return e;
  for (const t in e)
    if (Zs(e, t))
      if (!t.includes("."))
        ke(e[t]) && fs(e[t]);
      else {
        const n = t.split("."), r = n.length - 1;
        let s = e, a = !1;
        for (let o = 0; o < r; o++) {
          if (n[o] in s || (s[n[o]] = {}), !ke(s[n[o]])) {
            process.env.NODE_ENV !== "production" && et(mt(We.IGNORE_OBJ_FLATTEN, {
              key: n[o]
            })), a = !0;
            break;
          }
          s = s[n[o]];
        }
        a || (s[n[r]] = e[t], delete e[t]), ke(s[n[r]]) && fs(s[n[r]]);
      }
  return e;
}
function Pa(e, t) {
  const { messages: n, __i18n: r, messageResolver: s, flatJson: a } = t, o = ve(n) ? n : Ae(r) ? {} : { [e]: {} };
  if (Ae(r) && r.forEach((i) => {
    if ("locale" in i && "resource" in i) {
      const { locale: l, resource: u } = i;
      l ? (o[l] = o[l] || {}, kr(u, o[l])) : kr(u, o);
    } else
      Z(i) && kr(JSON.parse(i), o);
  }), s == null && a)
    for (const i in o)
      Zs(o, i) && fs(o[i]);
  return o;
}
const zr = (e) => !ke(e) || Ae(e);
function kr(e, t) {
  if (zr(e) || zr(t))
    throw Xe(Oe.INVALID_VALUE);
  for (const n in e)
    Zs(e, n) && (zr(e[n]) || zr(t[n]) ? t[n] = e[n] : kr(e[n], t[n]));
}
function Qu(e) {
  return e.type;
}
function ec(e, t, n) {
  let r = ke(t.messages) ? t.messages : {};
  "__i18nGlobal" in n && (r = Pa(e.locale.value, {
    messages: r,
    __i18n: n.__i18nGlobal
  }));
  const s = Object.keys(r);
  s.length && s.forEach((a) => {
    e.mergeLocaleMessage(a, r[a]);
  });
  {
    if (ke(t.datetimeFormats)) {
      const a = Object.keys(t.datetimeFormats);
      a.length && a.forEach((o) => {
        e.mergeDateTimeFormat(o, t.datetimeFormats[o]);
      });
    }
    if (ke(t.numberFormats)) {
      const a = Object.keys(t.numberFormats);
      a.length && a.forEach((o) => {
        e.mergeNumberFormat(o, t.numberFormats[o]);
      });
    }
  }
}
function Bi(e) {
  return me(mc, null, e, 0);
}
const Gi = "__INTLIFY_META__";
let Ki = 0;
function qi(e) {
  return (t, n, r, s) => e(n, r, Tr() || void 0, s);
}
const Qk = () => {
  const e = Tr();
  let t = null;
  return e && (t = Qu(e)[Gi]) ? { [Gi]: t } : null;
};
function ro(e = {}, t) {
  const { __root: n, __injectWithOption: r } = e, s = n === void 0;
  let a = ye(e.inheritLocale) ? e.inheritLocale : !0;
  const o = re(
    // prettier-ignore
    n && a ? n.locale.value : Z(e.locale) ? e.locale : nr
  ), i = re(
    // prettier-ignore
    n && a ? n.fallbackLocale.value : Z(e.fallbackLocale) || Ae(e.fallbackLocale) || ve(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o.value
  ), l = re(Pa(o.value, e)), u = re(ve(e.datetimeFormats) ? e.datetimeFormats : { [o.value]: {} }), c = re(ve(e.numberFormats) ? e.numberFormats : { [o.value]: {} });
  let v = n ? n.missingWarn : ye(e.missingWarn) || pn(e.missingWarn) ? e.missingWarn : !0, m = n ? n.fallbackWarn : ye(e.fallbackWarn) || pn(e.fallbackWarn) ? e.fallbackWarn : !0, f = n ? n.fallbackRoot : ye(e.fallbackRoot) ? e.fallbackRoot : !0, w = !!e.fallbackFormat, g = Fe(e.missing) ? e.missing : null, y = Fe(e.missing) ? qi(e.missing) : null, d = Fe(e.postTranslation) ? e.postTranslation : null, b = n ? n.warnHtmlMessage : ye(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, k = !!e.escapeParameter;
  const _ = n ? n.modifiers : ve(e.modifiers) ? e.modifiers : {};
  let M = e.pluralRules || n && n.pluralRules, N;
  N = (() => {
    s && Ai(null);
    const R = {
      version: zk,
      locale: o.value,
      fallbackLocale: i.value,
      messages: l.value,
      modifiers: _,
      pluralRules: M,
      missing: y === null ? void 0 : y,
      missingWarn: v,
      fallbackWarn: m,
      fallbackFormat: w,
      unresolving: !0,
      postTranslation: d === null ? void 0 : d,
      warnHtmlMessage: b,
      escapeParameter: k,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    R.datetimeFormats = u.value, R.numberFormats = c.value, R.__datetimeFormatters = ve(N) ? N.__datetimeFormatters : void 0, R.__numberFormatters = ve(N) ? N.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (R.__v_emitter = ve(N) ? N.__v_emitter : void 0);
    const H = Mk(R);
    return s && Ai(H), H;
  })(), br(N, o.value, i.value);
  function P() {
    return [
      o.value,
      i.value,
      l.value,
      u.value,
      c.value
    ];
  }
  const L = C({
    get: () => o.value,
    set: (R) => {
      o.value = R, N.locale = o.value;
    }
  }), x = C({
    get: () => i.value,
    set: (R) => {
      i.value = R, N.fallbackLocale = i.value, br(N, o.value, R);
    }
  }), j = C(() => l.value), F = /* @__PURE__ */ C(() => u.value), X = /* @__PURE__ */ C(() => c.value);
  function K() {
    return Fe(d) ? d : null;
  }
  function U(R) {
    d = R, N.postTranslation = R;
  }
  function Y() {
    return g;
  }
  function ee(R) {
    R !== null && (y = qi(R)), g = R, N.missing = y;
  }
  function B(R, H) {
    return R !== "translate" || !H.resolvedMessage;
  }
  const V = (R, H, Ue, je, xt, rn) => {
    P();
    let kt;
    try {
      (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && Si(Qk()), s || (N.fallbackContext = n ? Ik() : void 0), kt = R(N);
    } finally {
      (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && Si(null), s || (N.fallbackContext = void 0);
    }
    if (Ze(kt) && kt === Ma) {
      const [Nt, bn] = H();
      if (process.env.NODE_ENV !== "production" && n && Z(Nt) && B(Ue, bn) && (f && (Ca(m, Nt) || Fu(v, Nt)) && et(mt(We.FALLBACK_TO_ROOT, {
        key: Nt,
        type: Ue
      })), process.env.NODE_ENV !== "production")) {
        const { __v_emitter: Ln } = N;
        Ln && f && Ln.emit("fallback", {
          type: Ue,
          key: Nt,
          to: "global",
          groupId: `${Ue}:${Nt}`
        });
      }
      return n && f ? je(n) : xt(Nt);
    } else {
      if (rn(kt))
        return kt;
      throw Xe(Oe.UNEXPECTED_RETURN_TYPE);
    }
  };
  function $(...R) {
    return V((H) => Reflect.apply(Yi, null, [H, ...R]), () => as(...R), "translate", (H) => Reflect.apply(H.t, H, [...R]), (H) => H, (H) => Z(H));
  }
  function q(...R) {
    const [H, Ue, je] = R;
    if (je && !ke(je))
      throw Xe(Oe.INVALID_ARGUMENT);
    return $(H, Ue, tt({ resolvedMessage: !0 }, je || {}));
  }
  function pe(...R) {
    return V((H) => Reflect.apply(Ui, null, [H, ...R]), () => ss(...R), "datetime format", (H) => Reflect.apply(H.d, H, [...R]), () => ya, (H) => Z(H));
  }
  function $e(...R) {
    return V((H) => Reflect.apply(Wi, null, [H, ...R]), () => os(...R), "number format", (H) => Reflect.apply(H.n, H, [...R]), () => ya, (H) => Z(H));
  }
  function te(R) {
    return R.map((H) => Z(H) || Ze(H) || ye(H) ? Bi(String(H)) : H);
  }
  const ge = {
    normalize: te,
    interpolate: (R) => R,
    type: "vnode"
  };
  function Ce(...R) {
    return V(
      (H) => {
        let Ue;
        const je = H;
        try {
          je.processor = ge, Ue = Reflect.apply(Yi, null, [je, ...R]);
        } finally {
          je.processor = null;
        }
        return Ue;
      },
      () => as(...R),
      "translate",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (H) => H[ls](...R),
      (H) => [Bi(H)],
      (H) => Ae(H)
    );
  }
  function Ne(...R) {
    return V(
      (H) => Reflect.apply(Wi, null, [H, ...R]),
      () => os(...R),
      "number format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (H) => H[cs](...R),
      () => [],
      (H) => Z(H) || Ae(H)
    );
  }
  function De(...R) {
    return V(
      (H) => Reflect.apply(Ui, null, [H, ...R]),
      () => ss(...R),
      "datetime format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (H) => H[us](...R),
      () => [],
      (H) => Z(H) || Ae(H)
    );
  }
  function Ve(R) {
    M = R, N.pluralRules = M;
  }
  function Ye(R, H) {
    if (!R)
      return !1;
    const Ue = Z(H) ? H : o.value, je = h(Ue);
    return N.messageResolver(je, R) !== null;
  }
  function Je(R) {
    let H = null;
    const Ue = Pu(N, i.value, o.value);
    for (let je = 0; je < Ue.length; je++) {
      const xt = l.value[Ue[je]] || {}, rn = N.messageResolver(xt, R);
      if (rn != null) {
        H = rn;
        break;
      }
    }
    return H;
  }
  function D(R) {
    const H = Je(R);
    return H ?? (n ? n.tm(R) || {} : {});
  }
  function h(R) {
    return l.value[R] || {};
  }
  function S(R, H) {
    l.value[R] = H, N.messages = l.value;
  }
  function J(R, H) {
    l.value[R] = l.value[R] || {}, kr(H, l.value[R]), N.messages = l.value;
  }
  function ie(R) {
    return u.value[R] || {};
  }
  function _e(R, H) {
    u.value[R] = H, N.datetimeFormats = u.value, ji(N, R, H);
  }
  function nt(R, H) {
    u.value[R] = tt(u.value[R] || {}, H), N.datetimeFormats = u.value, ji(N, R, H);
  }
  function He(R) {
    return c.value[R] || {};
  }
  function gt(R, H) {
    c.value[R] = H, N.numberFormats = c.value, Hi(N, R, H);
  }
  function At(R, H) {
    c.value[R] = tt(c.value[R] || {}, H), N.numberFormats = c.value, Hi(N, R, H);
  }
  Ki++, n && Ht && (Te(n.locale, (R) => {
    a && (o.value = R, N.locale = R, br(N, o.value, i.value));
  }), Te(n.fallbackLocale, (R) => {
    a && (i.value = R, N.fallbackLocale = R, br(N, o.value, i.value));
  }));
  const Ie = {
    id: Ki,
    locale: L,
    fallbackLocale: x,
    get inheritLocale() {
      return a;
    },
    set inheritLocale(R) {
      a = R, R && n && (o.value = n.locale.value, i.value = n.fallbackLocale.value, br(N, o.value, i.value));
    },
    get availableLocales() {
      return Object.keys(l.value).sort();
    },
    messages: j,
    get modifiers() {
      return _;
    },
    get pluralRules() {
      return M || {};
    },
    get isGlobal() {
      return s;
    },
    get missingWarn() {
      return v;
    },
    set missingWarn(R) {
      v = R, N.missingWarn = v;
    },
    get fallbackWarn() {
      return m;
    },
    set fallbackWarn(R) {
      m = R, N.fallbackWarn = m;
    },
    get fallbackRoot() {
      return f;
    },
    set fallbackRoot(R) {
      f = R;
    },
    get fallbackFormat() {
      return w;
    },
    set fallbackFormat(R) {
      w = R, N.fallbackFormat = w;
    },
    get warnHtmlMessage() {
      return b;
    },
    set warnHtmlMessage(R) {
      b = R, N.warnHtmlMessage = R;
    },
    get escapeParameter() {
      return k;
    },
    set escapeParameter(R) {
      k = R, N.escapeParameter = R;
    },
    t: $,
    getLocaleMessage: h,
    setLocaleMessage: S,
    mergeLocaleMessage: J,
    getPostTranslationHandler: K,
    setPostTranslationHandler: U,
    getMissingHandler: Y,
    setMissingHandler: ee,
    [Zu]: Ve
  };
  return Ie.datetimeFormats = F, Ie.numberFormats = X, Ie.rt = q, Ie.te = Ye, Ie.tm = D, Ie.d = pe, Ie.n = $e, Ie.getDateTimeFormat = ie, Ie.setDateTimeFormat = _e, Ie.mergeDateTimeFormat = nt, Ie.getNumberFormat = He, Ie.setNumberFormat = gt, Ie.mergeNumberFormat = At, Ie[Ju] = r, Ie[ls] = Ce, Ie[us] = De, Ie[cs] = Ne, process.env.NODE_ENV !== "production" && (Ie[In] = (R) => {
    N.__v_emitter = R;
  }, Ie[Sr] = () => {
    N.__v_emitter = void 0;
  }), Ie;
}
function eN(e) {
  const t = Z(e.locale) ? e.locale : nr, n = Z(e.fallbackLocale) || Ae(e.fallbackLocale) || ve(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t, r = Fe(e.missing) ? e.missing : void 0, s = ye(e.silentTranslationWarn) || pn(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0, a = ye(e.silentFallbackWarn) || pn(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0, o = ye(e.fallbackRoot) ? e.fallbackRoot : !0, i = !!e.formatFallbackMessages, l = ve(e.modifiers) ? e.modifiers : {}, u = e.pluralizationRules, c = Fe(e.postTranslation) ? e.postTranslation : void 0, v = Z(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0, m = !!e.escapeParameterHtml, f = ye(e.sync) ? e.sync : !0;
  process.env.NODE_ENV !== "production" && e.formatter && et(mt(We.NOT_SUPPORTED_FORMATTER)), process.env.NODE_ENV !== "production" && e.preserveDirectiveContent && et(mt(We.NOT_SUPPORTED_PRESERVE_DIRECTIVE));
  let w = e.messages;
  if (ve(e.sharedMessages)) {
    const M = e.sharedMessages;
    w = Object.keys(M).reduce((A, P) => {
      const L = A[P] || (A[P] = {});
      return tt(L, M[P]), A;
    }, w || {});
  }
  const { __i18n: g, __root: y, __injectWithOption: d } = e, b = e.datetimeFormats, k = e.numberFormats, _ = e.flatJson;
  return {
    locale: t,
    fallbackLocale: n,
    messages: w,
    flatJson: _,
    datetimeFormats: b,
    numberFormats: k,
    missing: r,
    missingWarn: s,
    fallbackWarn: a,
    fallbackRoot: o,
    fallbackFormat: i,
    modifiers: l,
    pluralRules: u,
    postTranslation: c,
    warnHtmlMessage: v,
    escapeParameter: m,
    messageResolver: e.messageResolver,
    inheritLocale: f,
    __i18n: g,
    __root: y,
    __injectWithOption: d
  };
}
function vs(e = {}, t) {
  {
    const n = ro(eN(e)), { __extender: r } = e, s = {
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
        return process.env.NODE_ENV !== "production" && et(mt(We.NOT_SUPPORTED_FORMATTER)), {
          interpolate() {
            return [];
          }
        };
      },
      set formatter(a) {
        process.env.NODE_ENV !== "production" && et(mt(We.NOT_SUPPORTED_FORMATTER));
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
        return ye(n.missingWarn) ? !n.missingWarn : n.missingWarn;
      },
      set silentTranslationWarn(a) {
        n.missingWarn = ye(a) ? !a : a;
      },
      // silentFallbackWarn
      get silentFallbackWarn() {
        return ye(n.fallbackWarn) ? !n.fallbackWarn : n.fallbackWarn;
      },
      set silentFallbackWarn(a) {
        n.fallbackWarn = ye(a) ? !a : a;
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
        return process.env.NODE_ENV !== "production" && et(mt(We.NOT_SUPPORTED_PRESERVE_DIRECTIVE)), !0;
      },
      set preserveDirectiveContent(a) {
        process.env.NODE_ENV !== "production" && et(mt(We.NOT_SUPPORTED_PRESERVE_DIRECTIVE));
      },
      // pluralizationRules
      get pluralizationRules() {
        return n.pluralRules || {};
      },
      // for internal
      __composer: n,
      // t
      t(...a) {
        const [o, i, l] = a, u = {};
        let c = null, v = null;
        if (!Z(o))
          throw Xe(Oe.INVALID_ARGUMENT);
        const m = o;
        return Z(i) ? u.locale = i : Ae(i) ? c = i : ve(i) && (v = i), Ae(l) ? c = l : ve(l) && (v = l), Reflect.apply(n.t, n, [
          m,
          c || v || {},
          u
        ]);
      },
      rt(...a) {
        return Reflect.apply(n.rt, n, [...a]);
      },
      // tc
      tc(...a) {
        const [o, i, l] = a, u = { plural: 1 };
        let c = null, v = null;
        if (!Z(o))
          throw Xe(Oe.INVALID_ARGUMENT);
        const m = o;
        return Z(i) ? u.locale = i : Ze(i) ? u.plural = i : Ae(i) ? c = i : ve(i) && (v = i), Z(l) ? u.locale = l : Ae(l) ? c = l : ve(l) && (v = l), Reflect.apply(n.t, n, [
          m,
          c || v || {},
          u
        ]);
      },
      // te
      te(a, o) {
        return n.te(a, o);
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
      setLocaleMessage(a, o) {
        n.setLocaleMessage(a, o);
      },
      // mergeLocaleMessage
      mergeLocaleMessage(a, o) {
        n.mergeLocaleMessage(a, o);
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
      setDateTimeFormat(a, o) {
        n.setDateTimeFormat(a, o);
      },
      // mergeDateTimeFormat
      mergeDateTimeFormat(a, o) {
        n.mergeDateTimeFormat(a, o);
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
      setNumberFormat(a, o) {
        n.setNumberFormat(a, o);
      },
      // mergeNumberFormat
      mergeNumberFormat(a, o) {
        n.mergeNumberFormat(a, o);
      },
      // getChoiceIndex
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      getChoiceIndex(a, o) {
        return process.env.NODE_ENV !== "production" && et(mt(We.NOT_SUPPORTED_GET_CHOICE_INDEX)), -1;
      }
    };
    return s.__extender = r, process.env.NODE_ENV !== "production" && (s.__enableEmitter = (a) => {
      const o = n;
      o[In] && o[In](a);
    }, s.__disableEmitter = () => {
      const a = n;
      a[Sr] && a[Sr]();
    }), s;
  }
}
const ao = {
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
function tN({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, s) => [
    ...r,
    // prettier-ignore
    ...s.type === ne ? s.children : [s]
  ], []) : t.reduce((n, r) => {
    const s = e[r];
    return s && (n[r] = s()), n;
  }, {});
}
function tc(e) {
  return ne;
}
const nN = /* @__PURE__ */ Se({
  /* eslint-disable */
  name: "i18n-t",
  props: tt({
    keypath: {
      type: String,
      required: !0
    },
    plural: {
      type: [Number, String],
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      validator: (e) => Ze(e) || !isNaN(e)
    }
  }, ao),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const { slots: n, attrs: r } = t, s = e.i18n || La({
      useScope: e.scope,
      __useComponent: !0
    });
    return () => {
      const a = Object.keys(n).filter((v) => v !== "_"), o = {};
      e.locale && (o.locale = e.locale), e.plural !== void 0 && (o.plural = Z(e.plural) ? +e.plural : e.plural);
      const i = tN(t, a), l = s[ls](e.keypath, i, o), u = tt({}, r), c = Z(e.tag) || ke(e.tag) ? e.tag : tc();
      return Fn(c, u, l);
    };
  }
}), Wa = nN;
function rN(e) {
  return Ae(e) && !Z(e[0]);
}
function nc(e, t, n, r) {
  const { slots: s, attrs: a } = t;
  return () => {
    const o = { part: !0 };
    let i = {};
    e.locale && (o.locale = e.locale), Z(e.format) ? o.key = e.format : ke(e.format) && (Z(e.format.key) && (o.key = e.format.key), i = Object.keys(e.format).reduce((m, f) => n.includes(f) ? tt({}, m, { [f]: e.format[f] }) : m, {}));
    const l = r(e.value, o, i);
    let u = [o.key];
    Ae(l) ? u = l.map((m, f) => {
      const w = s[m.type], g = w ? w({ [m.type]: m.value, index: f, parts: l }) : [m.value];
      return rN(g) && (g[0].key = `${m.type}-${f}`), g;
    }) : Z(l) && (u = [l]);
    const c = tt({}, a), v = Z(e.tag) || ke(e.tag) ? e.tag : tc();
    return Fn(v, c, u);
  };
}
const aN = /* @__PURE__ */ Se({
  /* eslint-disable */
  name: "i18n-n",
  props: tt({
    value: {
      type: Number,
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, ao),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const n = e.i18n || La({
      useScope: "parent",
      __useComponent: !0
    });
    return nc(e, t, Ku, (...r) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[cs](...r)
    ));
  }
}), zi = aN, sN = /* @__PURE__ */ Se({
  /* eslint-disable */
  name: "i18n-d",
  props: tt({
    value: {
      type: [Number, Date],
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, ao),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const n = e.i18n || La({
      useScope: "parent",
      __useComponent: !0
    });
    return nc(e, t, Gu, (...r) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[us](...r)
    ));
  }
}), Xi = sN;
function oN(e, t) {
  const n = e;
  if (e.mode === "composition")
    return n.__getInstance(t) || e.global;
  {
    const r = n.__getInstance(t);
    return r != null ? r.__composer : e.global.__composer;
  }
}
function iN(e) {
  const t = (o) => {
    const { instance: i, modifiers: l, value: u } = o;
    if (!i || !i.$)
      throw Xe(Oe.UNEXPECTED_ERROR);
    const c = oN(e, i.$);
    process.env.NODE_ENV !== "production" && l.preserve && et(mt(We.NOT_SUPPORTED_PRESERVE));
    const v = Zi(u);
    return [
      Reflect.apply(c.t, c, [...Ji(v)]),
      c
    ];
  };
  return {
    created: (o, i) => {
      const [l, u] = t(i);
      Ht && e.global === u && (o.__i18nWatcher = Te(u.locale, () => {
        i.instance && i.instance.$forceUpdate();
      })), o.__composer = u, o.textContent = l;
    },
    unmounted: (o) => {
      Ht && o.__i18nWatcher && (o.__i18nWatcher(), o.__i18nWatcher = void 0, delete o.__i18nWatcher), o.__composer && (o.__composer = void 0, delete o.__composer);
    },
    beforeUpdate: (o, { value: i }) => {
      if (o.__composer) {
        const l = o.__composer, u = Zi(i);
        o.textContent = Reflect.apply(l.t, l, [
          ...Ji(u)
        ]);
      }
    },
    getSSRProps: (o) => {
      const [i] = t(o);
      return { textContent: i };
    }
  };
}
function Zi(e) {
  if (Z(e))
    return { path: e };
  if (ve(e)) {
    if (!("path" in e))
      throw Xe(Oe.REQUIRED_VALUE, "path");
    return e;
  } else
    throw Xe(Oe.INVALID_VALUE);
}
function Ji(e) {
  const { path: t, locale: n, args: r, choice: s, plural: a } = e, o = {}, i = r || {};
  return Z(n) && (o.locale = n), Ze(s) && (o.plural = s), Ze(a) && (o.plural = a), [t, i, o];
}
function lN(e, t, ...n) {
  const r = ve(n[0]) ? n[0] : {}, s = !!r.useI18nComponentName, a = ye(r.globalInstall) ? r.globalInstall : !0;
  process.env.NODE_ENV !== "production" && a && s && et(mt(We.COMPONENT_NAME_LEGACY_COMPATIBLE, {
    name: Wa.name
  })), a && ([s ? "i18n" : Wa.name, "I18nT"].forEach((o) => e.component(o, Wa)), [zi.name, "I18nN"].forEach((o) => e.component(o, zi)), [Xi.name, "I18nD"].forEach((o) => e.component(o, Xi))), e.directive("t", iN(t));
}
const Ha = {
  "vue-devtools-plugin-vue-i18n": "Vue I18n devtools",
  "vue-i18n-resource-inspector": "I18n Resources",
  "vue-i18n-timeline": "Vue I18n"
}, uN = {
  "vue-i18n-resource-inspector": "Search for scopes ..."
}, cN = {
  "vue-i18n-timeline": 16764185
}, rc = "vue-i18n: composer properties";
let ms;
async function dN(e, t) {
  return new Promise((n, r) => {
    try {
      qk({
        id: "vue-devtools-plugin-vue-i18n",
        label: Ha[
          "vue-devtools-plugin-vue-i18n"
          /* VueDevToolsIDs.PLUGIN */
        ],
        packageName: "vue-i18n",
        homepage: "https://vue-i18n.intlify.dev",
        logo: "https://vue-i18n.intlify.dev/vue-i18n-devtools-logo.png",
        componentStateTypes: [rc],
        app: e
        // eslint-disable-line @typescript-eslint/no-explicit-any
      }, (s) => {
        ms = s, s.on.visitComponentTree(({ componentInstance: o, treeNode: i }) => {
          fN(o, i, t);
        }), s.on.inspectComponent(({ componentInstance: o, instanceData: i }) => {
          o.vnode.el && o.vnode.el.__VUE_I18N__ && i && (t.mode === "legacy" ? o.vnode.el.__VUE_I18N__ !== t.global.__composer && Qi(i, o.vnode.el.__VUE_I18N__) : Qi(i, o.vnode.el.__VUE_I18N__));
        }), s.addInspector({
          id: "vue-i18n-resource-inspector",
          label: Ha[
            "vue-i18n-resource-inspector"
            /* VueDevToolsIDs.CUSTOM_INSPECTOR */
          ],
          icon: "language",
          treeFilterPlaceholder: uN[
            "vue-i18n-resource-inspector"
            /* VueDevToolsIDs.CUSTOM_INSPECTOR */
          ]
        }), s.on.getInspectorTree((o) => {
          o.app === e && o.inspectorId === "vue-i18n-resource-inspector" && gN(o, t);
        });
        const a = /* @__PURE__ */ new Map();
        s.on.getInspectorState(async (o) => {
          if (o.app === e && o.inspectorId === "vue-i18n-resource-inspector")
            if (s.unhighlightElement(), bN(o, t), o.nodeId === "global") {
              if (!a.has(o.app)) {
                const [i] = await s.getComponentInstances(o.app);
                a.set(o.app, i);
              }
              s.highlightElement(a.get(o.app));
            } else {
              const i = _N(o.nodeId, t);
              i && s.highlightElement(i);
            }
        }), s.on.editInspectorState((o) => {
          o.app === e && o.inspectorId === "vue-i18n-resource-inspector" && DN(o, t);
        }), s.addTimelineLayer({
          id: "vue-i18n-timeline",
          label: Ha[
            "vue-i18n-timeline"
            /* VueDevToolsIDs.TIMELINE */
          ],
          color: cN[
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
function ac(e) {
  return e.type.name || e.type.displayName || e.type.__file || "Anonymous";
}
function fN(e, t, n) {
  const r = n.mode === "composition" ? n.global : n.global.__composer;
  if (e && e.vnode.el && e.vnode.el.__VUE_I18N__ && e.vnode.el.__VUE_I18N__ !== r) {
    const s = {
      label: `i18n (${ac(e)} Scope)`,
      textColor: 0,
      backgroundColor: 16764185
    };
    t.tags.push(s);
  }
}
function Qi(e, t) {
  const n = rc;
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
    value: so(t.messages.value)
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
function so(e) {
  const t = {};
  return Object.keys(e).forEach((n) => {
    const r = e[n];
    Fe(r) && "source" in r ? t[n] = hN(r) : Tn(r) && r.loc && r.loc.source ? t[n] = r.loc.source : ke(r) ? t[n] = so(r) : t[n] = r;
  }), t;
}
const vN = {
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "&": "&amp;"
};
function mN(e) {
  return e.replace(/[<>"&]/g, pN);
}
function pN(e) {
  return vN[e] || e;
}
function hN(e) {
  return {
    _custom: {
      type: "function",
      display: `<span>ƒ</span> ${e.source ? `("${mN(e.source)}")` : "(?)"}`
    }
  };
}
function gN(e, t) {
  e.rootNodes.push({
    id: "global",
    label: "Global Scope"
  });
  const n = t.mode === "composition" ? t.global : t.global.__composer;
  for (const [r, s] of t.__instances) {
    const a = t.mode === "composition" ? s : s.__composer;
    n !== a && e.rootNodes.push({
      id: a.id.toString(),
      label: `${ac(r)} Scope`
    });
  }
}
function _N(e, t) {
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
function sc(e, t) {
  if (e === "global")
    return t.mode === "composition" ? t.global : t.global.__composer;
  {
    const n = Array.from(t.__instances.values()).find((r) => r.id.toString() === e);
    return n ? t.mode === "composition" ? n : n.__composer : null;
  }
}
function bN(e, t) {
  const n = sc(e.nodeId, t);
  return n && (e.state = yN(n)), null;
}
function yN(e) {
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
  const s = "Locale messages info", a = [
    {
      type: s,
      key: "messages",
      editable: !1,
      value: so(e.messages.value)
    }
  ];
  t[s] = a;
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
    const l = "Datetime formats info", u = [
      {
        type: l,
        key: "numberFormats",
        editable: !1,
        value: e.numberFormats.value
      }
    ];
    t[l] = u;
  }
  return t;
}
function Ar(e, t) {
  if (ms) {
    let n;
    t && "groupId" in t && (n = t.groupId, delete t.groupId), ms.addTimelineEvent({
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
function DN(e, t) {
  const n = sc(e.nodeId, t);
  if (n) {
    const [r] = e.path;
    r === "locale" && Z(e.state.value) ? n.locale.value = e.state.value : r === "fallbackLocale" && (Z(e.state.value) || Ae(e.state.value) || ke(e.state.value)) ? n.fallbackLocale.value = e.state.value : r === "inheritLocale" && ye(e.state.value) && (n.inheritLocale = e.state.value);
  }
}
function EN(e, t, n) {
  return {
    beforeCreate() {
      const r = Tr();
      if (!r)
        throw Xe(Oe.UNEXPECTED_ERROR);
      const s = this.$options;
      if (s.i18n) {
        const a = s.i18n;
        if (s.__i18n && (a.__i18n = s.__i18n), a.__root = t, this === this.$root)
          this.$i18n = el(e, a);
        else {
          a.__injectWithOption = !0, a.__extender = n.__vueI18nExtend, this.$i18n = vs(a);
          const o = this.$i18n;
          o.__extender && (o.__disposer = o.__extender(this.$i18n));
        }
      } else if (s.__i18n)
        if (this === this.$root)
          this.$i18n = el(e, s);
        else {
          this.$i18n = vs({
            __i18n: s.__i18n,
            __injectWithOption: !0,
            __extender: n.__vueI18nExtend,
            __root: t
          });
          const a = this.$i18n;
          a.__extender && (a.__disposer = a.__extender(this.$i18n));
        }
      else
        this.$i18n = e;
      s.__i18nGlobal && ec(t, s, s), this.$t = (...a) => this.$i18n.t(...a), this.$rt = (...a) => this.$i18n.rt(...a), this.$tc = (...a) => this.$i18n.tc(...a), this.$te = (a, o) => this.$i18n.te(a, o), this.$d = (...a) => this.$i18n.d(...a), this.$n = (...a) => this.$i18n.n(...a), this.$tm = (a) => this.$i18n.tm(a), n.__setInstance(r, this.$i18n);
    },
    mounted() {
      if (process.env.NODE_ENV !== "production" && this.$el && this.$i18n) {
        const r = this.$i18n;
        this.$el.__VUE_I18N__ = r.__composer;
        const s = this.__v_emitter = Qs();
        r.__enableEmitter && r.__enableEmitter(s), s.on("*", Ar);
      }
    },
    unmounted() {
      const r = Tr();
      if (!r)
        throw Xe(Oe.UNEXPECTED_ERROR);
      const s = this.$i18n;
      process.env.NODE_ENV !== "production" && this.$el && this.$el.__VUE_I18N__ && (this.__v_emitter && (this.__v_emitter.off("*", Ar), delete this.__v_emitter), this.$i18n && (s.__disableEmitter && s.__disableEmitter(), delete this.$el.__VUE_I18N__)), delete this.$t, delete this.$rt, delete this.$tc, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, s.__disposer && (s.__disposer(), delete s.__disposer, delete s.__extender), n.__deleteInstance(r), delete this.$i18n;
    }
  };
}
function el(e, t) {
  e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[Zu](t.pluralizationRules || e.pluralizationRules);
  const n = Pa(e.locale, {
    messages: t.messages,
    __i18n: t.__i18n
  });
  return Object.keys(n).forEach((r) => e.mergeLocaleMessage(r, n[r])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach((r) => e.mergeDateTimeFormat(r, t.datetimeFormats[r])), t.numberFormats && Object.keys(t.numberFormats).forEach((r) => e.mergeNumberFormat(r, t.numberFormats[r])), e;
}
const wN = /* @__PURE__ */ Kt("global-vue-i18n");
function ON(e = {}, t) {
  const n = __VUE_I18N_LEGACY_API__ && ye(e.legacy) ? e.legacy : __VUE_I18N_LEGACY_API__, r = ye(e.globalInjection) ? e.globalInjection : !0, s = __VUE_I18N_LEGACY_API__ && n ? !!e.allowComposition : !0, a = /* @__PURE__ */ new Map(), [o, i] = $N(e, n), l = /* @__PURE__ */ Kt(process.env.NODE_ENV !== "production" ? "vue-i18n" : "");
  process.env.NODE_ENV !== "production" && n && s && et(mt(We.NOTICE_DROP_ALLOW_COMPOSITION));
  function u(m) {
    return a.get(m) || null;
  }
  function c(m, f) {
    a.set(m, f);
  }
  function v(m) {
    a.delete(m);
  }
  {
    const m = {
      // mode
      get mode() {
        return __VUE_I18N_LEGACY_API__ && n ? "legacy" : "composition";
      },
      // allowComposition
      get allowComposition() {
        return s;
      },
      // install plugin
      async install(f, ...w) {
        if (process.env.NODE_ENV !== "production" && (f.__VUE_I18N__ = m), f.__VUE_I18N_SYMBOL__ = l, f.provide(f.__VUE_I18N_SYMBOL__, m), ve(w[0])) {
          const d = w[0];
          m.__composerExtend = d.__composerExtend, m.__vueI18nExtend = d.__vueI18nExtend;
        }
        let g = null;
        !n && r && (g = SN(f, m.global)), __VUE_I18N_FULL_INSTALL__ && lN(f, m, ...w), __VUE_I18N_LEGACY_API__ && n && f.mixin(EN(i, i.__composer, m));
        const y = f.unmount;
        if (f.unmount = () => {
          g && g(), m.dispose(), y();
        }, process.env.NODE_ENV !== "production") {
          if (!await dN(f, m))
            throw Xe(Oe.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN);
          const b = Qs();
          if (n) {
            const k = i;
            k.__enableEmitter && k.__enableEmitter(b);
          } else {
            const k = i;
            k[In] && k[In](b);
          }
          b.on("*", Ar);
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
      __instances: a,
      // @internal
      __getInstance: u,
      // @internal
      __setInstance: c,
      // @internal
      __deleteInstance: v
    };
    return m;
  }
}
function La(e = {}) {
  const t = Tr();
  if (t == null)
    throw Xe(Oe.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw Xe(Oe.NOT_INSTALLED);
  const n = kN(t), r = TN(n), s = Qu(t), a = NN(e, s);
  if (__VUE_I18N_LEGACY_API__ && n.mode === "legacy" && !e.__useComponent) {
    if (!n.allowComposition)
      throw Xe(Oe.NOT_AVAILABLE_IN_LEGACY_MODE);
    return PN(t, a, r, e);
  }
  if (a === "global")
    return ec(r, e, s), r;
  if (a === "parent") {
    let l = IN(n, t, e.__useComponent);
    return l == null && (process.env.NODE_ENV !== "production" && et(mt(We.NOT_FOUND_PARENT_SCOPE)), l = r), l;
  }
  const o = n;
  let i = o.__getInstance(t);
  if (i == null) {
    const l = tt({}, e);
    "__i18n" in s && (l.__i18n = s.__i18n), r && (l.__root = r), i = ro(l), o.__composerExtend && (i[ds] = o.__composerExtend(i)), CN(o, t, i), o.__setInstance(t, i);
  }
  return i;
}
function $N(e, t, n) {
  const r = dc();
  {
    const s = __VUE_I18N_LEGACY_API__ && t ? r.run(() => vs(e)) : r.run(() => ro(e));
    if (s == null)
      throw Xe(Oe.UNEXPECTED_ERROR);
    return [r, s];
  }
}
function kN(e) {
  {
    const t = yt(e.isCE ? wN : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t)
      throw Xe(e.isCE ? Oe.NOT_INSTALLED_WITH_PROVIDE : Oe.UNEXPECTED_ERROR);
    return t;
  }
}
function NN(e, t) {
  return Ia(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function TN(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function IN(e, t, n = !1) {
  let r = null;
  const s = t.root;
  let a = MN(t, n);
  for (; a != null; ) {
    const o = e;
    if (e.mode === "composition")
      r = o.__getInstance(a);
    else if (__VUE_I18N_LEGACY_API__) {
      const i = o.__getInstance(a);
      i != null && (r = i.__composer, n && r && !r[Ju] && (r = null));
    }
    if (r != null || s === a)
      break;
    a = a.parent;
  }
  return r;
}
function MN(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function CN(e, t, n) {
  let r = null;
  hn(() => {
    if (process.env.NODE_ENV !== "production" && t.vnode.el) {
      t.vnode.el.__VUE_I18N__ = n, r = Qs();
      const s = n;
      s[In] && s[In](r), r.on("*", Ar);
    }
  }, t), xr(() => {
    const s = n;
    process.env.NODE_ENV !== "production" && t.vnode.el && t.vnode.el.__VUE_I18N__ && (r && r.off("*", Ar), s[Sr] && s[Sr](), delete t.vnode.el.__VUE_I18N__), e.__deleteInstance(t);
    const a = s[ds];
    a && (a(), delete s[ds]);
  }, t);
}
function PN(e, t, n, r = {}) {
  const s = t === "local", a = fc(null);
  if (s && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n))
    throw Xe(Oe.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
  const o = ye(r.inheritLocale) ? r.inheritLocale : !Z(r.locale), i = re(
    // prettier-ignore
    !s || o ? n.locale.value : Z(r.locale) ? r.locale : nr
  ), l = re(
    // prettier-ignore
    !s || o ? n.fallbackLocale.value : Z(r.fallbackLocale) || Ae(r.fallbackLocale) || ve(r.fallbackLocale) || r.fallbackLocale === !1 ? r.fallbackLocale : i.value
  ), u = re(Pa(i.value, r)), c = re(ve(r.datetimeFormats) ? r.datetimeFormats : { [i.value]: {} }), v = re(ve(r.numberFormats) ? r.numberFormats : { [i.value]: {} }), m = s ? n.missingWarn : ye(r.missingWarn) || pn(r.missingWarn) ? r.missingWarn : !0, f = s ? n.fallbackWarn : ye(r.fallbackWarn) || pn(r.fallbackWarn) ? r.fallbackWarn : !0, w = s ? n.fallbackRoot : ye(r.fallbackRoot) ? r.fallbackRoot : !0, g = !!r.fallbackFormat, y = Fe(r.missing) ? r.missing : null, d = Fe(r.postTranslation) ? r.postTranslation : null, b = s ? n.warnHtmlMessage : ye(r.warnHtmlMessage) ? r.warnHtmlMessage : !0, k = !!r.escapeParameter, _ = s ? n.modifiers : ve(r.modifiers) ? r.modifiers : {}, M = r.pluralRules || s && n.pluralRules;
  function N() {
    return [
      i.value,
      l.value,
      u.value,
      c.value,
      v.value
    ];
  }
  const A = C({
    get: () => a.value ? a.value.locale.value : i.value,
    set: (h) => {
      a.value && (a.value.locale.value = h), i.value = h;
    }
  }), P = C({
    get: () => a.value ? a.value.fallbackLocale.value : l.value,
    set: (h) => {
      a.value && (a.value.fallbackLocale.value = h), l.value = h;
    }
  }), L = C(() => a.value ? a.value.messages.value : u.value), x = C(() => c.value), j = C(() => v.value);
  function F() {
    return a.value ? a.value.getPostTranslationHandler() : d;
  }
  function X(h) {
    a.value && a.value.setPostTranslationHandler(h);
  }
  function K() {
    return a.value ? a.value.getMissingHandler() : y;
  }
  function U(h) {
    a.value && a.value.setMissingHandler(h);
  }
  function Y(h) {
    return N(), h();
  }
  function ee(...h) {
    return a.value ? Y(() => Reflect.apply(a.value.t, null, [...h])) : Y(() => "");
  }
  function B(...h) {
    return a.value ? Reflect.apply(a.value.rt, null, [...h]) : "";
  }
  function V(...h) {
    return a.value ? Y(() => Reflect.apply(a.value.d, null, [...h])) : Y(() => "");
  }
  function $(...h) {
    return a.value ? Y(() => Reflect.apply(a.value.n, null, [...h])) : Y(() => "");
  }
  function q(h) {
    return a.value ? a.value.tm(h) : {};
  }
  function pe(h, S) {
    return a.value ? a.value.te(h, S) : !1;
  }
  function $e(h) {
    return a.value ? a.value.getLocaleMessage(h) : {};
  }
  function te(h, S) {
    a.value && (a.value.setLocaleMessage(h, S), u.value[h] = S);
  }
  function Ee(h, S) {
    a.value && a.value.mergeLocaleMessage(h, S);
  }
  function ge(h) {
    return a.value ? a.value.getDateTimeFormat(h) : {};
  }
  function Ce(h, S) {
    a.value && (a.value.setDateTimeFormat(h, S), c.value[h] = S);
  }
  function Ne(h, S) {
    a.value && a.value.mergeDateTimeFormat(h, S);
  }
  function De(h) {
    return a.value ? a.value.getNumberFormat(h) : {};
  }
  function Ve(h, S) {
    a.value && (a.value.setNumberFormat(h, S), v.value[h] = S);
  }
  function Ye(h, S) {
    a.value && a.value.mergeNumberFormat(h, S);
  }
  const Je = {
    get id() {
      return a.value ? a.value.id : -1;
    },
    locale: A,
    fallbackLocale: P,
    messages: L,
    datetimeFormats: x,
    numberFormats: j,
    get inheritLocale() {
      return a.value ? a.value.inheritLocale : o;
    },
    set inheritLocale(h) {
      a.value && (a.value.inheritLocale = h);
    },
    get availableLocales() {
      return a.value ? a.value.availableLocales : Object.keys(u.value);
    },
    get modifiers() {
      return a.value ? a.value.modifiers : _;
    },
    get pluralRules() {
      return a.value ? a.value.pluralRules : M;
    },
    get isGlobal() {
      return a.value ? a.value.isGlobal : !1;
    },
    get missingWarn() {
      return a.value ? a.value.missingWarn : m;
    },
    set missingWarn(h) {
      a.value && (a.value.missingWarn = h);
    },
    get fallbackWarn() {
      return a.value ? a.value.fallbackWarn : f;
    },
    set fallbackWarn(h) {
      a.value && (a.value.missingWarn = h);
    },
    get fallbackRoot() {
      return a.value ? a.value.fallbackRoot : w;
    },
    set fallbackRoot(h) {
      a.value && (a.value.fallbackRoot = h);
    },
    get fallbackFormat() {
      return a.value ? a.value.fallbackFormat : g;
    },
    set fallbackFormat(h) {
      a.value && (a.value.fallbackFormat = h);
    },
    get warnHtmlMessage() {
      return a.value ? a.value.warnHtmlMessage : b;
    },
    set warnHtmlMessage(h) {
      a.value && (a.value.warnHtmlMessage = h);
    },
    get escapeParameter() {
      return a.value ? a.value.escapeParameter : k;
    },
    set escapeParameter(h) {
      a.value && (a.value.escapeParameter = h);
    },
    t: ee,
    getPostTranslationHandler: F,
    setPostTranslationHandler: X,
    getMissingHandler: K,
    setMissingHandler: U,
    rt: B,
    d: V,
    n: $,
    tm: q,
    te: pe,
    getLocaleMessage: $e,
    setLocaleMessage: te,
    mergeLocaleMessage: Ee,
    getDateTimeFormat: ge,
    setDateTimeFormat: Ce,
    mergeDateTimeFormat: Ne,
    getNumberFormat: De,
    setNumberFormat: Ve,
    mergeNumberFormat: Ye
  };
  function D(h) {
    h.locale.value = i.value, h.fallbackLocale.value = l.value, Object.keys(u.value).forEach((S) => {
      h.mergeLocaleMessage(S, u.value[S]);
    }), Object.keys(c.value).forEach((S) => {
      h.mergeDateTimeFormat(S, c.value[S]);
    }), Object.keys(v.value).forEach((S) => {
      h.mergeNumberFormat(S, v.value[S]);
    }), h.escapeParameter = k, h.fallbackFormat = g, h.fallbackRoot = w, h.fallbackWarn = f, h.missingWarn = m, h.warnHtmlMessage = b;
  }
  return vc(() => {
    if (e.proxy == null || e.proxy.$i18n == null)
      throw Xe(Oe.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
    const h = a.value = e.proxy.$i18n.__composer;
    t === "global" ? (i.value = h.locale.value, l.value = h.fallbackLocale.value, u.value = h.messages.value, c.value = h.datetimeFormats.value, v.value = h.numberFormats.value) : s && D(h);
  }), Je;
}
const LN = [
  "locale",
  "fallbackLocale",
  "availableLocales"
], tl = ["t", "rt", "d", "n", "tm", "te"];
function SN(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  return LN.forEach((s) => {
    const a = Object.getOwnPropertyDescriptor(t, s);
    if (!a)
      throw Xe(Oe.UNEXPECTED_ERROR);
    const o = be(a.value) ? {
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
    Object.defineProperty(n, s, o);
  }), e.config.globalProperties.$i18n = n, tl.forEach((s) => {
    const a = Object.getOwnPropertyDescriptor(t, s);
    if (!a || !a.value)
      throw Xe(Oe.UNEXPECTED_ERROR);
    Object.defineProperty(e.config.globalProperties, `$${s}`, a);
  }), () => {
    delete e.config.globalProperties.$i18n, tl.forEach((s) => {
      delete e.config.globalProperties[`$${s}`];
    });
  };
}
Xk();
__INTLIFY_JIT_COMPILATION__ ? Li(Ak) : Li(Sk);
kk(ik);
Nk(Pu);
if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const e = zt();
  e.__INTLIFY__ = !0, hk(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
const AN = {
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
}, xN = {
  zh_TW: AN
}, RN = ON({
  locale: "zh_TW",
  legacy: !1,
  globalInjection: !0,
  messages: xN
}), FN = { class: "flex flex-col gap-3" }, YN = /* @__PURE__ */ E("div", { class: "flex items-center justify-center gap-3 my-2" }, [
  /* @__PURE__ */ E("p", { class: "p4-b" }, "日期時間"),
  /* @__PURE__ */ E("div", { class: "h-[1px] flex-1 bg-light-3" })
], -1), VN = { class: "flex flex-col gap-2" }, UN = { class: "flex gap-2 items-center" }, jN = /* @__PURE__ */ E("span", { class: "p4-b" }, "開始", -1), WN = ["onClick"], HN = ["value"], BN = /* @__PURE__ */ E("div", { class: "flex items-center justify-center gap-3 w-full my-2" }, [
  /* @__PURE__ */ E("p", { class: "p4-b" }, "重複頻率"),
  /* @__PURE__ */ E("div", { class: "h-[1px] flex-1 bg-light-3" })
], -1), GN = { class: "flex space-x-2 items-center" }, KN = { class: "flex items-center gap-2" }, qN = /* @__PURE__ */ E("span", { class: "p4-b" }, "重複", -1), zN = ["value"], XN = /* @__PURE__ */ E("option", { value: 0 }, "自訂", -1), ZN = { class: "p4-b" }, JN = {
  key: 0,
  class: "flex items-center gap-2"
}, QN = { class: "flex items-center gap-2" }, eT = /* @__PURE__ */ E("span", { class: "p4-b" }, "頻率", -1), tT = /* @__PURE__ */ E("option", {
  value: "-1",
  disabled: ""
}, "請選擇", -1), nT = ["value"], rT = {
  key: 0,
  class: "flex items-center gap-2"
}, aT = /* @__PURE__ */ E("span", { class: "p4-b" }, "每", -1), sT = { class: "p4-b" }, nl = 1, oT = /* @__PURE__ */ Se({
  __name: "RepeatFrequency",
  props: {
    frequency: {},
    interval: {}
  },
  emits: ["update:frequency", "update:interval"],
  setup(e, { emit: t }) {
    const n = e, { t: r } = RN.global, s = yt("eventData"), a = re(!0);
    Te(s, () => {
      a.value = !0;
    });
    const o = re(n.interval ?? nl);
    Te(o, (w) => {
      w || (w = nl), t("update:interval", w);
    });
    const i = re(n.frequency);
    Te(i, (w) => {
      t("update:frequency", w);
    });
    const l = C({
      get: () => s.value.weekdays ?? [],
      set: (w) => {
        s.value.weekdays = w;
      }
    }), u = C({
      get: () => s.value.weekOrdinal ?? [],
      set: (w) => {
        s.value.weekOrdinal = w;
      }
    }), c = C({
      get: () => s.value.monthDate ?? [],
      set: (w) => {
        s.value.monthDate = w;
      }
    }), v = C({
      get: () => s.value.yearMonths ?? [],
      set: (w) => {
        s.value.yearMonths = w;
      }
    }), m = C(() => {
      if (f.value == Re.Never)
        return "只執行一次";
      if (f.value == Re.Hour)
        return "每小時執行一次";
      if (f.value == Re.Day)
        return "每日執行一次";
      if (f.value == Re.Week)
        return "每週執行一次";
      if (f.value == Re.Month)
        return "每月執行一次";
      if (f.value == Re.Annual)
        return "每年執行一次";
      const w = {
        1: "小時",
        2: "日",
        3: "週",
        4: "月",
        5: "年"
      };
      return f.value == 0 ? `每${o.value ?? ""}${w[i.value] ?? ""}執行一次` : "";
    }), f = re(-1);
    return n.interval == 1 && (f.value = n.frequency), Te(
      f,
      (w) => {
        Re[w] && (t("update:frequency", w), t("update:interval", 1), i.value = f.value, s.value.weekdays = null, s.value.weekOrdinal = null, s.value.monthDate = null, s.value.yearMonths = null), s.value.customInterval = w === 0;
      },
      { immediate: !0 }
    ), (w, g) => (O(), T("div", FN, [
      YN,
      E("div", VN, [
        E("div", UN, [
          jN,
          me(p(zs), {
            modelValue: p(s).start,
            "onUpdate:modelValue": g[0] || (g[0] = (y) => p(s).start = y),
            mode: "dateTime",
            timezone: "UTC",
            "min-Date": /* @__PURE__ */ new Date(),
            "is-required": ""
          }, {
            default: ze(({ togglePopover: y, inputValue: d }) => [
              E("button", {
                class: "p3-b flex w-fit cursor-pointer relative items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 transition-all hover:bg-light-3 hover:bg-opacity-50",
                onClick: y
              }, [
                E("input", {
                  value: d,
                  required: "",
                  class: "opacity-0 absolute w-full h-full pointer-events-none"
                }, null, 8, HN),
                Rr(" " + le(d || "請選定執行日期"), 1)
              ], 8, WN)
            ]),
            _: 1
          }, 8, ["modelValue", "min-Date"])
        ])
      ]),
      BN,
      E("div", GN, [
        E("label", KN, [
          qN,
          Pe(E("select", {
            class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
            "onUpdate:modelValue": g[1] || (g[1] = (y) => be(f) ? f.value = y : null)
          }, [
            (O(!0), T(ne, null, he(p(Re), (y, d) => (O(), T(ne, { key: d }, [
              Number.isInteger(y) ? (O(), T("option", {
                key: 0,
                value: y
              }, le(p(r)(d)), 9, zN)) : Q("", !0)
            ], 64))), 128)),
            XN
          ], 512), [
            [Be, p(f)]
          ])
        ]),
        E("span", ZN, le(p(m)), 1)
      ]),
      p(Re)[p(f)] == null ? (O(), T("div", JN, [
        E("label", QN, [
          eT,
          Pe(E("select", {
            class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
            "onUpdate:modelValue": g[2] || (g[2] = (y) => be(i) ? i.value = y : null)
          }, [
            tT,
            (O(!0), T(ne, null, he(p(Re), (y, d) => (O(), T(ne, { key: d }, [
              y != p(Re).Never && Number.isInteger(y) ? (O(), T("option", {
                key: 0,
                value: y
              }, le(p(r)(d)), 9, nT)) : Q("", !0)
            ], 64))), 128))
          ], 512), [
            [Be, p(i)]
          ])
        ]),
        p(i) != -1 ? (O(), T("label", rT, [
          aT,
          me(Mt, {
            class: "!w-10 text-center",
            modelValue: p(o),
            "onUpdate:modelValue": g[3] || (g[3] = (y) => be(o) ? o.value = y : null),
            type: "number"
          }, null, 8, ["modelValue"]),
          E("span", sT, le(p(r)(`s${p(Re)[p(i)]}`)), 1)
        ])) : Q("", !0)
      ])) : Q("", !0),
      p(Re)[p(f)] == null ? (O(), qe(Tc, {
        key: 1,
        type: p(i),
        weekdays: p(l),
        "onUpdate:weekdays": g[4] || (g[4] = (y) => be(l) ? l.value = y : null),
        weekOrdinal: p(u),
        "onUpdate:weekOrdinal": g[5] || (g[5] = (y) => be(u) ? u.value = y : null),
        monthDate: p(c),
        "onUpdate:monthDate": g[6] || (g[6] = (y) => be(c) ? c.value = y : null),
        yearMonths: p(v),
        "onUpdate:yearMonths": g[7] || (g[7] = (y) => be(v) ? v.value = y : null)
      }, null, 8, ["type", "weekdays", "weekOrdinal", "monthDate", "yearMonths"])) : Q("", !0),
      p(i) !== -1 ? (O(), qe(u$, {
        key: 2,
        modelValue: p(s).due,
        "onUpdate:modelValue": g[8] || (g[8] = (y) => p(s).due = y)
      }, null, 8, ["modelValue"])) : Q("", !0)
    ]));
  }
}), iT = { class: "relative border rounded border-light-3 py-4 px-3" }, lT = { class: "p3-b absolute left-2 -top-3 text-dark-3 bg-light-5" }, Nr = /* @__PURE__ */ Se({
  __name: "OuterBlock",
  props: {
    title: {}
  },
  setup(e) {
    return (t, n) => (O(), T("div", iT, [
      E("div", lT, le(t.title), 1),
      jt(t.$slots, "default")
    ]));
  }
}), uT = { class: "flex flex-col gap-2" }, cT = { class: "flex items-center gap-2 relative pt-2" }, dT = { class: "flex items-center gap-2" }, fT = /* @__PURE__ */ E("span", { class: "p4-b" }, "平台", -1), vT = /* @__PURE__ */ E("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), mT = ["value"], pT = {
  key: 0,
  class: "flex items-center gap-2"
}, hT = /* @__PURE__ */ E("span", { class: "p4-b" }, "層級", -1), gT = /* @__PURE__ */ E("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), _T = ["value"], bT = {
  key: 1,
  class: "flex items-center gap-2"
}, yT = /* @__PURE__ */ E("span", { class: "p4-b" }, "目標", -1), DT = /* @__PURE__ */ E("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), ET = ["value"], wT = {
  key: 0,
  class: "flex flex-col"
}, OT = /* @__PURE__ */ E("span", { class: "p4-b" }, "指定目標", -1), $T = { key: 0 }, kT = {
  key: 0,
  class: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex justify-center items-center bg-dark-3 rounded bg-opacity-50 z-[2]"
}, NT = { class: "relative bg-light-5 rounded-xs shadow-01 w-4/5 p-4 min-h-[300px] h-fit" }, TT = /* @__PURE__ */ E("span", { class: "p1-b flex justify-center mb-1" }, "請選擇目標", -1), IT = { class: "flex flex-col gap-2 mt-2" }, MT = ["onClick"], CT = { class: "flex flex-col flex-1" }, PT = { class: "p3-b" }, LT = { class: "p4-r" }, ST = {
  key: 2,
  class: "flex flex-col gap-2"
}, AT = { class: "flex items-center gap-2" }, xT = /* @__PURE__ */ E("span", { class: "p4-b" }, "執行", -1), RT = /* @__PURE__ */ E("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), FT = ["value"], YT = {
  key: 0,
  class: "flex gap-x-2 gap-y-3 flex-wrap"
}, VT = { class: "flex items-center gap-2" }, UT = /* @__PURE__ */ E("span", { class: "p4-b" }, "類型", -1), jT = /* @__PURE__ */ E("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), WT = ["value"], HT = {
  key: 0,
  class: "flex items-center gap-2"
}, BT = /* @__PURE__ */ E("span", { class: "p4-b" }, "調整", -1), GT = /* @__PURE__ */ E("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), KT = ["value"], qT = {
  key: 1,
  class: "flex items-center gap-2"
}, zT = { class: "flex items-center gap-2" }, XT = /* @__PURE__ */ E("span", { class: "p4-b" }, "類型", -1), ZT = /* @__PURE__ */ E("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), JT = ["value"], QT = {
  key: 0,
  class: "flex items-center gap-2"
}, eI = /* @__PURE__ */ E("span", { class: "p4-b" }, "調整", -1), tI = /* @__PURE__ */ E("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), nI = ["value"], rI = {
  key: 1,
  class: "flex items-center gap-2"
}, aI = {
  key: 2,
  class: "flex items-center gap-2 w-full"
}, sI = { class: "flex flex-col gap-2" }, oI = { class: "flex items-center gap-2" }, iI = /* @__PURE__ */ E("label", { for: "maxBudget" }, "設定預算上限", -1), lI = {
  key: 0,
  class: "flex gap-2 items-center"
}, uI = /* @__PURE__ */ E("span", null, "元", -1), cI = { class: "flex items-center gap-2" }, dI = /* @__PURE__ */ E("span", { class: "p4-b" }, "類型", -1), fI = /* @__PURE__ */ E("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), vI = ["value"], mI = {
  key: 0,
  class: "flex items-center gap-2"
}, pI = /* @__PURE__ */ E("span", { class: "p4-b" }, "調整", -1), hI = /* @__PURE__ */ E("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), gI = ["value"], _I = {
  key: 1,
  class: "flex items-center gap-2"
}, bI = {
  key: 2,
  class: "flex items-center gap-2 w-full"
}, yI = { class: "flex flex-col gap-2" }, DI = { class: "flex items-center gap-2" }, EI = /* @__PURE__ */ E("label", {
  for: "maxBudget",
  class: "p3-b"
}, "設定預算下限", -1), wI = {
  key: 0,
  class: "flex gap-2 items-center"
}, OI = /* @__PURE__ */ E("span", null, "元", -1), Ft = "", $I = /* @__PURE__ */ Se({
  __name: "EventAction",
  setup(e) {
    const { t } = La(), n = yt("eventData"), r = re(n.value.action ?? {}), s = re(!!Object.keys(r.value).length), a = re(!1);
    Te(a, (B) => {
      var V, $, q, pe, $e;
      (V = r.value.params) != null && V.limit || (q = ($ = r.value) == null ? void 0 : $.params) == null || delete q.limit, B || ($e = (pe = r.value) == null ? void 0 : pe.params) == null || delete $e.limit;
    }), ps(() => {
      var B, V, $, q, pe;
      ((B = r.value) == null ? void 0 : B.action) == ae.SetNewBudget || ((V = r.value) == null ? void 0 : V.action) == ae.IncreaseBudget || (($ = r.value) == null ? void 0 : $.action) == ae.LowerBudget || delete r.value.params, a.value = !!((pe = (q = r.value) == null ? void 0 : q.params) != null && pe.limit);
    }), Te(
      r,
      (B) => {
        n.value.action = B;
      },
      { deep: !0 }
    );
    const o = C(() => {
      var B;
      return ((B = n.value.action) == null ? void 0 : B.client) == Qe.Google ? bt : vt;
    }), i = {
      [Qe.Google]: {
        [bt.Campaign]: {
          SetNewBudget: ae.SetNewBudget,
          IncreaseBudget: ae.IncreaseBudget,
          LowerBudget: ae.LowerBudget,
          OpenProject: ae.OpenProject,
          SuspendProject: ae.SuspendProject,
          None: ae.None
        },
        [bt.AdGroup]: {
          SuspendProject: ae.SuspendProject,
          None: ae.None
        },
        [bt.AdTag]: {
          SuspendProject: ae.SuspendProject,
          None: ae.None
        },
        [bt.Ad]: {
          SuspendProject: ae.SuspendProject,
          None: ae.None
        }
      },
      [Qe.Facebook]: {
        [vt.Campaign]: {
          SetNewBudget: ae.SetNewBudget,
          IncreaseBudget: ae.IncreaseBudget,
          LowerBudget: ae.LowerBudget,
          OpenProject: ae.OpenProject,
          SuspendProject: ae.SuspendProject,
          None: ae.None
        },
        [vt.AdGroup]: {
          SetNewBudget: ae.SetNewBudget,
          IncreaseBudget: ae.IncreaseBudget,
          LowerBudget: ae.LowerBudget,
          OpenProject: ae.OpenProject,
          SuspendProject: ae.SuspendProject,
          None: ae.None
        },
        [vt.AdTag]: {
          SuspendProject: ae.SuspendProject,
          None: ae.None
        },
        [vt.Ad]: {
          SuspendProject: ae.SuspendProject,
          None: ae.None
        }
      }
    }, l = C(() => {
      var $, q;
      const B = ($ = r.value) == null ? void 0 : $.client, V = (q = r.value) == null ? void 0 : q.adLevel;
      if (B && V) {
        const pe = i[B];
        if (pe) {
          const $e = pe[V];
          if ($e)
            return $e;
        }
      }
      return {};
    }), u = {
      [Qe.Google]: {
        [bt.Campaign]: {
          [ae.SetNewBudget]: [se.Value],
          [ae.IncreaseBudget]: [se.Percentage, se.Value],
          [ae.LowerBudget]: [se.Percentage, se.Value],
          [ae.OpenProject]: [se.Percentage, se.Value],
          [ae.SuspendProject]: [se.Percentage, se.Value],
          [ae.None]: [se.Percentage, se.Value]
        },
        [bt.AdGroup]: {
          [ae.SuspendProject]: [se.Percentage, se.Value],
          [ae.None]: [se.Percentage, se.Value]
        },
        [bt.AdTag]: {
          [ae.SuspendProject]: [se.Percentage, se.Value],
          [ae.None]: [se.Percentage, se.Value]
        },
        [bt.Ad]: {
          [ae.SuspendProject]: [se.Percentage, se.Value],
          [ae.None]: [se.Percentage, se.Value]
        }
      },
      [Qe.Facebook]: {
        [vt.Campaign]: {
          [ae.SetNewBudget]: [se.Value],
          [ae.IncreaseBudget]: [se.Percentage, se.Value],
          [ae.LowerBudget]: [se.Percentage, se.Value],
          [ae.OpenProject]: [se.Percentage, se.Value],
          [ae.SuspendProject]: [se.Percentage, se.Value],
          [ae.None]: [se.Percentage, se.Value]
        },
        [vt.AdGroup]: {
          [ae.SetNewBudget]: [se.Value],
          [ae.IncreaseBudget]: [se.Percentage, se.Value],
          [ae.LowerBudget]: [se.Percentage, se.Value],
          [ae.OpenProject]: [se.Percentage, se.Value],
          [ae.SuspendProject]: [se.Percentage, se.Value],
          [ae.None]: [se.Percentage, se.Value]
        },
        [vt.AdTag]: {
          [ae.SuspendProject]: [se.Percentage, se.Value],
          [ae.None]: [se.Percentage, se.Value]
        },
        [vt.Ad]: {
          [ae.SuspendProject]: [se.Percentage, se.Value],
          [ae.None]: [se.Percentage, se.Value]
        }
      }
    }, c = C(() => {
      var q, pe, $e;
      const B = (q = r.value) == null ? void 0 : q.client, V = (pe = r.value) == null ? void 0 : pe.adLevel, $ = ($e = r.value) == null ? void 0 : $e.action;
      if (B && V && $) {
        const te = u[B];
        if (te) {
          const Ee = te[V];
          if (Ee) {
            const ge = Ee[$];
            if (ge)
              return ge;
          }
        }
      }
      return [se.Percentage, se.Value];
    }), v = C(() => r.value.client ? r.value.client : ""), m = (B) => {
      r.value.client = Number(B.target.value), delete r.value.target;
    }, f = C(() => r.value.adLevel ? r.value.adLevel : ""), w = (B) => {
      r.value.adLevel = Number(B.target.value), delete r.value.action, delete r.value.target;
    }, g = C(() => r.value.targetType ? r.value.targetType : ""), y = (B) => {
      r.value.targetType = Number(B.target.value), delete r.value.action, delete r.value.target;
    }, d = C(() => r.value.action ? r.value.action : ""), b = (B) => r.value.action = Number(B.target.value), k = C(() => {
      var B;
      return (B = r.value) != null && B.params || (r.value.params = {}), r.value.params.budgetType ? r.value.params.budgetType : "";
    }), _ = (B) => r.value.params.budgetType = B.target.value, M = C(() => {
      var B;
      return (B = r.value) != null && B.params || (r.value.params = {}), r.value.params.valueType ? r.value.params.valueType : "";
    }), N = (B) => r.value.params.valueType = B.target.value, A = re(!1), P = (B) => {
      var $;
      ($ = r.value) != null && $.target || (r.value.target = []);
      const V = r.value.target.findIndex(
        (q) => q.id === B.id
      );
      V === -1 ? r.value.target.push(B) : r.value.target.splice(V, 1);
    }, L = re(), x = async () => {
      L.value = [
        { id: 1, name: "qwe" },
        { id: 2, name: "asd" },
        { id: 3, name: "zxc" },
        { id: 4, name: "rty" },
        { id: 5, name: "bgfb" }
      ];
    }, j = C(() => "name"), F = C(() => {
      const B = K.value.toLowerCase();
      return L.value.filter(
        (V) => V[j.value].toLowerCase().includes(B)
      );
    }), X = async () => {
      await x(), A.value = !0;
    }, K = re(""), U = () => {
      r.value.target = F.value;
    }, Y = re(!1);
    hn(() => {
      Y.value = !0;
    });
    const ee = () => {
      s.value = !1, r.value = {}, Yn(() => {
        delete n.value.action;
      });
    };
    return C(() => {
      const B = v.value, V = r.value.adLevel, $ = k.value;
      console.log("object");
      const q = B === Qe.Google && V === bt.Campaign, pe = B === Qe.Facebook && V === vt.Campaign, $e = B === Qe.Facebook && V === vt.AdGroup, te = q || pe || $e, Ee = $ === jn.DailyBudget ? "日預算" : "總預算", ge = `${Qe[B]}${o.value[V]}`, Ce = te ? `若${t(ge)}設定為${Ee}，則不會變更` : "";
      return { show: te, msg: Ce };
    }), (B, V) => p(s) ? (O(), qe(Nr, {
      key: 1,
      title: "動作"
    }, {
      default: ze(() => [
        E("div", uT, [
          E("div", cT, [
            E("div", {
              class: "cursor-pointer text-dark-4 absolute -top-2.5 -right-1.5 p4-b",
              onClick: ee
            }, " 刪除 "),
            E("label", dT, [
              fT,
              Pe(E("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": V[1] || (V[1] = ($) => be(v) ? v.value = $ : null),
                onChange: m,
                required: ""
              }, [
                vT,
                (O(!0), T(ne, null, he(p(Qe), ($, q) => (O(), T(ne, { key: q }, [
                  Number.isInteger($) ? Q("", !0) : (O(), T("option", {
                    key: 0,
                    value: q
                  }, le($), 9, mT))
                ], 64))), 128))
              ], 544), [
                [Be, p(v)]
              ])
            ]),
            p(v) != Ft ? (O(), T("label", pT, [
              hT,
              Pe(E("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": V[2] || (V[2] = ($) => be(f) ? f.value = $ : null),
                onChange: w,
                required: ""
              }, [
                gT,
                (O(!0), T(ne, null, he(p(o), ($, q) => (O(), T(ne, { key: q }, [
                  Number.isInteger($) ? Q("", !0) : (O(), T("option", {
                    key: 0,
                    value: q
                  }, le(B.$t(`${p(Qe)[p(v)]}${$}`)), 9, _T))
                ], 64))), 128))
              ], 544), [
                [Be, p(f)]
              ])
            ])) : Q("", !0),
            p(f) != Ft ? (O(), T("label", bT, [
              yT,
              Pe(E("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": V[3] || (V[3] = ($) => be(g) ? g.value = $ : null),
                onChange: y,
                required: ""
              }, [
                DT,
                (O(!0), T(ne, null, he(p(vn), ($, q) => (O(), T(ne, { key: q }, [
                  Number.isInteger($) ? Q("", !0) : (O(), T("option", {
                    key: 0,
                    value: q
                  }, le(B.$t($)), 9, ET))
                ], 64))), 128))
              ], 544), [
                [Be, p(g)]
              ])
            ])) : Q("", !0)
          ]),
          p(g) === p(vn).ForID ? (O(), T("div", wT, [
            E("label", { class: "flex items-center gap-2" }, [
              OT,
              E("div", {
                class: "p4-r px-1.5 py-0.5 text-true-blue-2 rounded bg-true-blue-5 flex w-fit cursor-pointer hover:bg-true-blue-4",
                onClick: X
              }, " 編輯 ")
            ]),
            p(g) === p(vn).ForID ? (O(), T("div", $T, [
              (O(!0), T(ne, null, he(p(r).target, ($, q) => (O(), T("span", {
                class: "p4-r text-true-blue-3 px-0.5",
                key: $.id
              }, le($.name) + le(q !== p(r).target.length - 1 ? "," : ""), 1))), 128))
            ])) : Q("", !0)
          ])) : Q("", !0),
          p(Y) ? (O(), qe(il, {
            key: 1,
            to: "#editor-container"
          }, [
            p(A) ? (O(), T("div", kT, [
              E("div", NT, [
                E("div", {
                  class: "absolute top-1 right-2 cursor-pointer",
                  onClick: V[4] || (V[4] = ($) => A.value = !1)
                }, " X "),
                TT,
                me(Mt, {
                  modelValue: p(K),
                  "onUpdate:modelValue": V[5] || (V[5] = ($) => be(K) ? K.value = $ : null)
                }, null, 8, ["modelValue"]),
                E("div", {
                  class: "mt-2 flex w-full justify-end p4-b text-true-blue-3",
                  onClick: U
                }, " 全選 "),
                E("div", IT, [
                  (O(!0), T(ne, null, he(p(F), ($) => {
                    var q;
                    return O(), T("div", {
                      class: "border border-dark-5 rounded py-1 px-3 flex gap-1 hover:border-transparent hover:bg-true-blue-5 cursor-pointer",
                      key: $.id,
                      onClick: (pe) => P($)
                    }, [
                      E("div", CT, [
                        E("span", PT, le($.id), 1),
                        E("span", LT, le($.name), 1)
                      ]),
                      E("div", {
                        class: Ge(["rounded h-3 w-3 border", [
                          p(r).target && (q = p(r)) != null && q.target.find((pe) => pe.id === $.id) ? "bg-red-1" : ""
                        ]])
                      }, null, 2)
                    ], 8, MT);
                  }), 128))
                ])
              ])
            ])) : Q("", !0)
          ])) : Q("", !0),
          p(g) !== Ft ? (O(), T("div", ST, [
            E("label", AT, [
              xT,
              Pe(E("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": V[6] || (V[6] = ($) => be(d) ? d.value = $ : null),
                onChange: b,
                required: ""
              }, [
                RT,
                (O(!0), T(ne, null, he(p(l), ($, q) => (O(), T("option", {
                  key: q,
                  value: $
                }, le(B.$t(q)), 9, FT))), 128))
              ], 544), [
                [Be, p(d)]
              ])
            ]),
            p(f) != Ft ? (O(), T("div", YT, [
              p(r).action == p(ae).SetNewBudget ? (O(), T(ne, { key: 0 }, [
                E("label", VT, [
                  UT,
                  Pe(E("select", {
                    class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                    "onUpdate:modelValue": V[7] || (V[7] = ($) => be(k) ? k.value = $ : null),
                    onChange: _,
                    required: ""
                  }, [
                    jT,
                    (O(!0), T(ne, null, he(p(jn), ($, q) => (O(), T(ne, { key: q }, [
                      Number.isInteger($) ? Q("", !0) : (O(), T("option", {
                        key: 0,
                        value: $
                      }, le(B.$t($)), 9, WT))
                    ], 64))), 128))
                  ], 544), [
                    [Be, p(k)]
                  ])
                ]),
                p(k) != Ft ? (O(), T("label", HT, [
                  BT,
                  Pe(E("select", {
                    class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                    "onUpdate:modelValue": V[8] || (V[8] = ($) => be(M) ? M.value = $ : null),
                    onChange: N,
                    required: ""
                  }, [
                    GT,
                    (O(!0), T(ne, null, he(p(c), ($, q) => (O(), T("option", {
                      key: q,
                      value: $
                    }, le(B.$t(`action${$}`)), 9, KT))), 128))
                  ], 544), [
                    [Be, p(M)]
                  ])
                ])) : Q("", !0),
                p(M) != Ft ? (O(), T("label", qT, [
                  me(Mt, {
                    modelValue: p(r).params.value,
                    "onUpdate:modelValue": V[9] || (V[9] = ($) => p(r).params.value = $),
                    type: "number",
                    required: !0
                  }, null, 8, ["modelValue"]),
                  E("span", null, le(p(r).params.valueType === p(se).Percentage ? "%" : "元"), 1)
                ])) : Q("", !0)
              ], 64)) : p(r).action == p(ae).IncreaseBudget ? (O(), T(ne, { key: 1 }, [
                E("label", zT, [
                  XT,
                  Pe(E("select", {
                    class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                    "onUpdate:modelValue": V[10] || (V[10] = ($) => be(k) ? k.value = $ : null),
                    onChange: _,
                    required: ""
                  }, [
                    ZT,
                    (O(!0), T(ne, null, he(p(jn), ($, q) => (O(), T(ne, { key: q }, [
                      Number.isInteger($) ? Q("", !0) : (O(), T("option", {
                        key: 0,
                        value: $
                      }, le(B.$t($)), 9, JT))
                    ], 64))), 128))
                  ], 544), [
                    [Be, p(k)]
                  ])
                ]),
                p(k) != Ft ? (O(), T("label", QT, [
                  eI,
                  Pe(E("select", {
                    class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                    "onUpdate:modelValue": V[11] || (V[11] = ($) => be(M) ? M.value = $ : null),
                    onChange: N,
                    required: ""
                  }, [
                    tI,
                    (O(!0), T(ne, null, he(p(c), ($, q) => (O(), T("option", {
                      key: q,
                      value: $
                    }, le(B.$t(`action${$}`)), 9, nI))), 128))
                  ], 544), [
                    [Be, p(M)]
                  ])
                ])) : Q("", !0),
                p(M) != Ft ? (O(), T("label", rI, [
                  me(Mt, {
                    modelValue: p(r).params.value,
                    "onUpdate:modelValue": V[12] || (V[12] = ($) => p(r).params.value = $),
                    type: "number",
                    required: !0
                  }, null, 8, ["modelValue"]),
                  E("span", null, le(p(r).params.valueType === p(se).Percentage ? "%" : "元"), 1)
                ])) : Q("", !0),
                p(r).params.valueType === p(se).Percentage ? (O(), T("label", aI, [
                  E("div", sI, [
                    E("div", oI, [
                      Pe(E("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": V[13] || (V[13] = ($) => be(a) ? a.value = $ : null),
                        id: "maxBudget"
                      }, null, 512), [
                        [ta, p(a)]
                      ]),
                      iI,
                      p(a) ? (O(), T("div", lI, [
                        me(Mt, {
                          modelValue: p(r).params.limit,
                          "onUpdate:modelValue": V[14] || (V[14] = ($) => p(r).params.limit = $),
                          type: "number",
                          required: !0
                        }, null, 8, ["modelValue"]),
                        uI
                      ])) : Q("", !0)
                    ])
                  ])
                ])) : Q("", !0)
              ], 64)) : p(r).action == p(ae).LowerBudget ? (O(), T(ne, { key: 2 }, [
                E("label", cI, [
                  dI,
                  Pe(E("select", {
                    class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                    "onUpdate:modelValue": V[15] || (V[15] = ($) => be(k) ? k.value = $ : null),
                    onChange: _,
                    required: ""
                  }, [
                    fI,
                    (O(!0), T(ne, null, he(p(jn), ($, q) => (O(), T(ne, { key: q }, [
                      Number.isInteger($) ? Q("", !0) : (O(), T("option", {
                        key: 0,
                        value: $
                      }, le(B.$t($)), 9, vI))
                    ], 64))), 128))
                  ], 544), [
                    [Be, p(k)]
                  ])
                ]),
                p(k) != Ft ? (O(), T("label", mI, [
                  pI,
                  Pe(E("select", {
                    class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                    "onUpdate:modelValue": V[16] || (V[16] = ($) => be(M) ? M.value = $ : null),
                    onChange: N
                  }, [
                    hI,
                    (O(!0), T(ne, null, he(p(c), ($, q) => (O(), T("option", {
                      key: q,
                      value: $
                    }, le(B.$t(`action${$}`)), 9, gI))), 128))
                  ], 544), [
                    [Be, p(M)]
                  ])
                ])) : Q("", !0),
                p(M) != Ft ? (O(), T("label", _I, [
                  me(Mt, {
                    modelValue: p(r).params.value,
                    "onUpdate:modelValue": V[17] || (V[17] = ($) => p(r).params.value = $),
                    type: "number",
                    required: !0
                  }, null, 8, ["modelValue"]),
                  E("span", null, le(p(r).params.valueType === p(se).Percentage ? "%" : "元"), 1)
                ])) : Q("", !0),
                p(r).params.valueType === p(se).Percentage ? (O(), T("div", bI, [
                  E("div", yI, [
                    E("div", DI, [
                      Pe(E("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": V[18] || (V[18] = ($) => be(a) ? a.value = $ : null),
                        id: "maxBudget"
                      }, null, 512), [
                        [ta, p(a)]
                      ]),
                      EI,
                      p(a) ? (O(), T("div", wI, [
                        me(Mt, {
                          modelValue: p(r).params.limit,
                          "onUpdate:modelValue": V[19] || (V[19] = ($) => p(r).params.limit = $),
                          type: "number",
                          required: !0
                        }, null, 8, ["modelValue"]),
                        OI
                      ])) : Q("", !0)
                    ])
                  ])
                ])) : Q("", !0)
              ], 64)) : Q("", !0)
            ])) : Q("", !0)
          ])) : Q("", !0)
        ])
      ]),
      _: 1
    })) : (O(), T("div", {
      key: 0,
      class: "p3-b text-true-blue-3 flex ml-auto w-fit cursor-pointer hover:text-true-blue-2",
      onClick: V[0] || (V[0] = ($) => s.value = !0)
    }, " + 加入動作 "));
  }
}), kI = { class: "flex flex-col gap-2 relative pt-2" }, NI = { class: "flex items-center gap-2" }, TI = { class: "flex items-center gap-2" }, II = /* @__PURE__ */ E("span", { class: "p3-b" }, "平台", -1), MI = /* @__PURE__ */ E("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), CI = ["value"], PI = {
  key: 0,
  class: "flex items-center gap-2"
}, LI = /* @__PURE__ */ E("span", { class: "p3-b" }, "層級", -1), SI = /* @__PURE__ */ E("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), AI = ["value"], xI = {
  key: 1,
  class: "flex items-center gap-2"
}, RI = /* @__PURE__ */ E("span", { class: "p4-b" }, "目標", -1), FI = /* @__PURE__ */ E("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), YI = ["value"], VI = {
  key: 0,
  class: "flex flex-col"
}, UI = /* @__PURE__ */ E("span", { class: "p4-b" }, "指定目標", -1), jI = { key: 0 }, WI = {
  key: 0,
  class: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex justify-center items-center bg-dark-3 rounded bg-opacity-50 z-[2]"
}, HI = { class: "relative bg-light-5 rounded-xs shadow-01 w-4/5 p-4 min-h-[300px] h-fit" }, BI = /* @__PURE__ */ E("span", { class: "p1-b flex justify-center mb-1" }, "請選擇目標", -1), GI = { class: "flex flex-col gap-2 mt-2" }, KI = ["onClick"], qI = { class: "flex flex-col flex-1" }, zI = { class: "p3-b" }, XI = { class: "p4-r" }, ZI = {
  key: 2,
  class: "flex items-center gap-1"
}, JI = /* @__PURE__ */ E("span", { class: "p3-b" }, "條件", -1), QI = /* @__PURE__ */ E("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), eM = ["value"], tM = {
  key: 3,
  class: "flex gap-2 flex-wrap"
}, nM = { class: "flex gap-2" }, rM = { class: "flex items-center gap-1" }, aM = /* @__PURE__ */ E("span", { class: "p3-b" }, "運算", -1), sM = /* @__PURE__ */ E("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), oM = ["value"], iM = { key: 0 }, lM = ["onClick"], uM = {
  key: 0,
  class: "flex items-center gap-1"
}, cM = /* @__PURE__ */ E("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), dM = ["value"], fM = {
  key: 1,
  class: "flex items-center gap-1"
}, vM = /* @__PURE__ */ E("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), mM = ["value"], pM = {
  key: 4,
  class: "flex items-center gap-2"
}, hM = /* @__PURE__ */ E("label", { for: "comparison" }, "加入比較區間", -1), ln = "", gM = /* @__PURE__ */ Se({
  __name: "ConditionItem",
  props: {
    modelValue: {},
    index: {}
  },
  emits: ["update:modelValue", "removeItem"],
  setup(e, { emit: t }) {
    const n = e, r = C(() => n.modelValue ?? {}), s = C(() => {
      var K;
      return ((K = r.value) == null ? void 0 : K.client) == Qe.Google ? Vn : Un;
    }), a = C(() => r.value.client ? r.value.client : ""), o = (K) => r.value.client = Number(K.target.value), i = C(() => r.value.adLevel ? r.value.adLevel : ""), l = (K) => {
      r.value.adLevel = Number(K.target.value), v.value != ln && t("update:modelValue", {
        client: a.value,
        adLevel: i.value
      });
    }, u = C(() => r.value.targetType ? r.value.targetType : ""), c = (K) => {
      r.value.targetType = Number(K.target.value), delete r.value.action, delete r.value.target;
    }, v = C(() => r.value.conditionType ? r.value.conditionType : ""), m = (K) => r.value.conditionType = K.target.value, f = C(() => r.value.dateRangeType ? r.value.dateRangeType : ""), w = (K) => {
      r.value.dateRangeType = Number(K.target.value), Number(K.target.value) !== wr.SpecifiedTime && delete r.value.dateRange;
    }, g = C(() => r.value.operation ? r.value.operation : ""), y = (K) => r.value.operation = K.target.value, d = C(() => r.value.valueType ? r.value.valueType : ""), b = (K) => r.value.valueType = K.target.value, k = {
      [Qe.Google]: {
        [Vn.Campaign]: {
          Clicks: fe.Clicks,
          Impressions: fe.Impressions,
          Cpc: fe.Cpc,
          Spend: fe.Spend,
          Conversions: fe.Conversions,
          ConversionSpend: fe.ConversionSpend,
          ReturnOnADSpending: fe.ReturnOnADSpending
        },
        [Vn.AdGroup]: {
          Clicks: fe.Clicks,
          Impressions: fe.Impressions,
          Cpc: fe.Cpc,
          Spend: fe.Spend,
          Conversions: fe.Conversions,
          ConversionSpend: fe.ConversionSpend,
          ReturnOnADSpending: fe.ReturnOnADSpending
        },
        [Vn.Account]: {
          BudgetRemaining: fe.BudgetRemaining,
          Clicks: fe.Clicks,
          Impressions: fe.Impressions,
          Cpc: fe.Cpc,
          Spend: fe.Spend,
          Conversions: fe.Conversions,
          ConversionSpend: fe.ConversionSpend,
          ReturnOnADSpending: fe.ReturnOnADSpending
        }
      },
      [Qe.Facebook]: {
        [Un.Campaign]: {
          Clicks: fe.Clicks,
          BudgetCap: fe.BudgetCap,
          Impressions: fe.Impressions,
          Cpc: fe.Cpc,
          Spend: fe.Spend,
          Conversions: fe.Conversions,
          ConversionSpend: fe.ConversionSpend,
          ReturnOnADSpending: fe.ReturnOnADSpending
        },
        [Un.AdGroup]: {
          Clicks: fe.Clicks,
          Impressions: fe.Impressions,
          Cpc: fe.Cpc,
          Spend: fe.Spend,
          Conversions: fe.Conversions,
          ConversionSpend: fe.ConversionSpend,
          ReturnOnADSpending: fe.ReturnOnADSpending
        },
        [Un.Account]: {
          BudgetRemaining: fe.BudgetRemaining,
          Clicks: fe.Clicks,
          Impressions: fe.Impressions,
          Cpc: fe.Cpc,
          Spend: fe.Spend,
          Conversions: fe.Conversions,
          ConversionSpend: fe.ConversionSpend,
          ReturnOnADSpending: fe.ReturnOnADSpending
        }
      }
    }, _ = C(() => {
      if (a.value && i.value) {
        const K = k[a.value];
        if (K) {
          const U = K[i.value];
          if (U)
            return U;
        }
      }
      return {};
    }), M = re(!1), N = (K) => {
      var Y;
      (Y = r.value) != null && Y.target || (r.value.target = []);
      const U = r.value.target.findIndex(
        (ee) => ee.id === K.id
      );
      U === -1 ? r.value.target.push(K) : r.value.target.splice(U, 1);
    }, A = re(), P = async () => {
      A.value = [
        { id: 1, name: "qwe" },
        { id: 2, name: "asd" },
        { id: 3, name: "zxc" },
        { id: 4, name: "rty" },
        { id: 5, name: "bgfb" }
      ];
    }, L = C(() => "name"), x = C(() => {
      const K = F.value.toLowerCase();
      return A.value.filter(
        (U) => U[L.value].toLowerCase().includes(K)
      );
    }), j = async () => {
      await P(), M.value = !0;
    }, F = re(""), X = re(!1);
    return hn(() => {
      X.value = !0;
    }), (K, U) => (O(), qe(Nr, {
      title: "條件" + (K.index + 1)
    }, {
      default: ze(() => [
        E("div", kI, [
          E("div", {
            class: "cursor-pointer text-dark-4 absolute -top-2.5 -right-1.5 p4-b",
            onClick: U[0] || (U[0] = (Y) => t("removeItem"))
          }, " 刪除 "),
          E("div", NI, [
            E("label", TI, [
              II,
              Pe(E("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": U[1] || (U[1] = (Y) => be(a) ? a.value = Y : null),
                onChange: o,
                required: ""
              }, [
                MI,
                (O(!0), T(ne, null, he(p(Qe), (Y, ee) => (O(), T(ne, { key: ee }, [
                  Number.isInteger(Y) ? Q("", !0) : (O(), T("option", {
                    key: 0,
                    value: ee
                  }, le(Y), 9, CI))
                ], 64))), 128))
              ], 544), [
                [Be, p(a)]
              ])
            ]),
            p(a) != ln ? (O(), T("label", PI, [
              LI,
              Pe(E("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": U[2] || (U[2] = (Y) => be(i) ? i.value = Y : null),
                onChange: l,
                required: ""
              }, [
                SI,
                (O(!0), T(ne, null, he(p(s), (Y, ee) => (O(), T(ne, { key: ee }, [
                  Number.isInteger(Y) ? Q("", !0) : (O(), T("option", {
                    key: 0,
                    value: ee
                  }, le(K.$t(`${p(Qe)[p(a)]}${Y}`)), 9, AI))
                ], 64))), 128))
              ], 544), [
                [Be, p(i)]
              ])
            ])) : Q("", !0),
            p(i) != ln ? (O(), T("label", xI, [
              RI,
              Pe(E("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": U[3] || (U[3] = (Y) => be(u) ? u.value = Y : null),
                onChange: c,
                required: ""
              }, [
                FI,
                (O(!0), T(ne, null, he(p(vn), (Y, ee) => (O(), T(ne, { key: ee }, [
                  Number.isInteger(Y) ? Q("", !0) : (O(), T("option", {
                    key: 0,
                    value: ee
                  }, le(K.$t(Y)), 9, YI))
                ], 64))), 128))
              ], 544), [
                [Be, p(u)]
              ])
            ])) : Q("", !0)
          ]),
          p(u) === p(vn).ForID ? (O(), T("div", VI, [
            E("label", { class: "flex items-center gap-2" }, [
              UI,
              E("div", {
                class: "p4-r px-1.5 py-0.5 text-true-blue-2 rounded bg-true-blue-5 flex w-fit cursor-pointer hover:bg-true-blue-4",
                onClick: j
              }, " 編輯 ")
            ]),
            p(u) === p(vn).ForID ? (O(), T("div", jI, [
              (O(!0), T(ne, null, he(p(r).target, (Y, ee) => (O(), T("span", {
                class: "p4-r text-true-blue-3 px-0.5",
                key: Y.id
              }, le(Y.name) + le(ee !== p(r).target.length - 1 ? "," : ""), 1))), 128))
            ])) : Q("", !0)
          ])) : Q("", !0),
          p(X) ? (O(), qe(il, {
            key: 1,
            to: "#editor-container"
          }, [
            p(M) ? (O(), T("div", WI, [
              E("div", HI, [
                E("div", {
                  class: "absolute top-1 right-2 cursor-pointer",
                  onClick: U[4] || (U[4] = (Y) => M.value = !1)
                }, " X "),
                BI,
                me(Mt, {
                  modelValue: p(F),
                  "onUpdate:modelValue": U[5] || (U[5] = (Y) => be(F) ? F.value = Y : null)
                }, null, 8, ["modelValue"]),
                E("div", GI, [
                  (O(!0), T(ne, null, he(p(x), (Y) => {
                    var ee;
                    return O(), T("div", {
                      class: "border border-dark-5 rounded py-1 px-3 flex gap-1 hover:border-transparent hover:bg-true-blue-5 cursor-pointer",
                      key: Y.id,
                      onClick: (B) => N(Y)
                    }, [
                      E("div", qI, [
                        E("span", zI, le(Y.id), 1),
                        E("span", XI, le(Y.name), 1)
                      ]),
                      E("div", {
                        class: Ge(["rounded h-3 w-3 border", [
                          p(r).target && (ee = p(r)) != null && ee.target.find((B) => B.id === Y.id) ? "bg-red-1" : ""
                        ]])
                      }, null, 2)
                    ], 8, KI);
                  }), 128))
                ])
              ])
            ])) : Q("", !0)
          ])) : Q("", !0),
          p(u) != ln ? (O(), T("label", ZI, [
            JI,
            Pe(E("select", {
              class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
              "onUpdate:modelValue": U[6] || (U[6] = (Y) => be(v) ? v.value = Y : null),
              onChange: m,
              required: ""
            }, [
              QI,
              (O(!0), T(ne, null, he(p(_), (Y, ee) => (O(), T("option", {
                key: ee,
                value: Y
              }, le(K.$t(ee)), 9, eM))), 128))
            ], 544), [
              [Be, p(v)]
            ])
          ])) : Q("", !0),
          p(v) != ln ? (O(), T("div", tM, [
            E("div", nM, [
              E("label", rM, [
                aM,
                Pe(E("select", {
                  class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                  "onUpdate:modelValue": U[7] || (U[7] = (Y) => be(f) ? f.value = Y : null),
                  onChange: w,
                  required: ""
                }, [
                  sM,
                  (O(!0), T(ne, null, he(p(wr), (Y, ee) => (O(), T(ne, { key: ee }, [
                    Number.isInteger(Y) ? Q("", !0) : (O(), T("option", {
                      key: 0,
                      value: ee
                    }, le(K.$t(Y)), 9, oM))
                  ], 64))), 128))
                ], 544), [
                  [Be, p(f)]
                ])
              ]),
              p(f) == p(wr).SpecifiedTime ? (O(), T("div", iM, [
                me(p(zs), {
                  modelValue: p(r).dateRange,
                  "onUpdate:modelValue": U[8] || (U[8] = (Y) => p(r).dateRange = Y),
                  modelModifiers: { range: !0 },
                  mode: "date"
                }, {
                  default: ze(({ togglePopover: Y, inputValue: ee }) => [
                    E("button", {
                      class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 transition-all hover:bg-light-3 hover:bg-opacity-50",
                      onClick: Y
                    }, le(ee.start && ee.end ? `${ee.start}-${ee.end}` : "請選定執行日期"), 9, lM)
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ])) : Q("", !0)
            ]),
            p(f) != "" ? (O(), T("label", uM, [
              Pe(E("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": U[9] || (U[9] = (Y) => be(g) ? g.value = Y : null),
                onChange: y,
                required: ""
              }, [
                cM,
                (O(!0), T(ne, null, he(p(gs), (Y, ee) => (O(), T(ne, { key: ee }, [
                  Number.isInteger(Y) ? Q("", !0) : (O(), T("option", {
                    key: 0,
                    value: Y
                  }, le(K.$t(ee)), 9, dM))
                ], 64))), 128))
              ], 544), [
                [Be, p(g)]
              ])
            ])) : Q("", !0),
            p(g) != ln ? (O(), T("label", fM, [
              Pe(E("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": U[10] || (U[10] = (Y) => be(d) ? d.value = Y : null),
                onChange: b,
                required: ""
              }, [
                vM,
                (O(!0), T(ne, null, he(p(se), (Y, ee) => (O(), T(ne, { key: ee }, [
                  Number.isInteger(Y) ? Q("", !0) : (O(), T("option", {
                    key: 0,
                    value: Y
                  }, le(K.$t(`condition${ee}`)), 9, mM))
                ], 64))), 128))
              ], 544), [
                [Be, p(d)]
              ])
            ])) : Q("", !0),
            p(d) != ln ? (O(), qe(Mt, {
              key: 2,
              modelValue: p(r).value,
              "onUpdate:modelValue": U[11] || (U[11] = (Y) => p(r).value = Y),
              type: "number",
              required: !0
            }, null, 8, ["modelValue"])) : Q("", !0)
          ])) : Q("", !0),
          p(v) != ln ? (O(), T("div", pM, [
            Pe(E("input", {
              type: "checkbox",
              "onUpdate:modelValue": U[12] || (U[12] = (Y) => K.modelValue.comparison = Y),
              id: "comparison"
            }, null, 512), [
              [ta, K.modelValue.comparison]
            ]),
            hM
          ])) : Q("", !0)
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), _M = {
  key: 0,
  class: "flex items-center justify-center gap-3"
}, bM = /* @__PURE__ */ E("div", { class: "h-[1px] flex-1 bg-light-3" }, null, -1), yM = /* @__PURE__ */ E("p", { class: "p4-b to-dark-4" }, "且", -1), DM = /* @__PURE__ */ E("div", { class: "h-[1px] flex-1 bg-light-3" }, null, -1), EM = [
  bM,
  yM,
  DM
], wM = {
  key: 0,
  class: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex justify-center items-center bg-dark-3 rounded bg-opacity-50 z-[2]"
}, OM = { class: "relative bg-light-5 rounded-xs shadow-01 w-4/5 p-4" }, $M = /* @__PURE__ */ E("span", { class: "p1-b flex justify-center mb-1" }, "請選擇條件", -1), kM = /* @__PURE__ */ pc('<div class="flex flex-col gap-2 mt-2"><div class="border border-dark-5 rounded py-1 px-3 flex gap-1 hover:border-transparent hover:bg-true-blue-5 cursor-pointer"><div class="flex flex-col flex-1"><span class="p3-b">當帳戶剩餘預算 小於指定金額，執行動作</span><span class="p4-r">ex: 帳戶剩餘預算小於 1000 元</span></div><div class="flex justify-center items-center">O</div></div></div>', 1), NM = /* @__PURE__ */ Se({
  __name: "Condition",
  setup(e) {
    const t = re(!1), n = yt("eventData"), r = re(n.value.conditions ?? []);
    Te(
      r,
      (o) => {
        n.value.conditions = o;
      },
      { deep: !0 }
    );
    const s = () => {
      r.value.push({}), t.value = !1;
    }, a = (o) => {
      r.value.splice(o, 1);
    };
    return (o, i) => (O(), T(ne, null, [
      (O(!0), T(ne, null, he(p(r), (l, u) => (O(), T(ne, { key: u }, [
        me(gM, {
          index: u,
          modelValue: p(r)[u],
          "onUpdate:modelValue": (c) => p(r)[u] = c,
          onRemoveItem: (c) => a(u)
        }, null, 8, ["index", "modelValue", "onUpdate:modelValue", "onRemoveItem"]),
        u + 1 !== p(r).length ? (O(), T("div", _M, EM)) : Q("", !0)
      ], 64))), 128)),
      E("div", {
        class: "p3-b text-true-blue-3 flex ml-auto w-fit cursor-pointer hover:text-true-blue-2",
        onClick: i[0] || (i[0] = (l) => t.value = !p(t))
      }, " + 加入條件 "),
      p(t) ? (O(), T("div", wM, [
        E("div", OM, [
          E("div", {
            class: "absolute top-1 right-2 cursor-pointer",
            onClick: i[1] || (i[1] = (l) => t.value = !1)
          }, " X "),
          $M,
          me(Mt),
          kM,
          E("div", {
            class: "border ml-auto mt-2 border-true-blue-3 text-true-blue-3 rounded px-1 w-fit p3-r cursor-pointer hover:text-true-blue-2 hover:border-true-blue-2",
            onClick: s
          }, " 自訂 ")
        ])
      ])) : Q("", !0)
    ], 64));
  }
}), TM = { class: "flex items-center gap-2" }, IM = /* @__PURE__ */ E("span", { class: "p4-b" }, "以電子郵件寄出結果", -1), MM = /* @__PURE__ */ E("option", {
  value: "-2",
  disabled: ""
}, "請選擇", -1), CM = ["value"], PM = /* @__PURE__ */ Se({
  __name: "Notification",
  setup(e) {
    const t = yt("eventData"), n = re(
      t.value.notification ?? {
        email: -2
      }
    );
    return hn(() => {
      n.value.email === -2 && (n.value.email = 0);
    }), Te(
      n,
      (r) => {
        t.value.notification = r;
      },
      { deep: !0 }
    ), (r, s) => (O(), T("div", null, [
      E("label", TM, [
        IM,
        Pe(E("select", {
          class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
          "onUpdate:modelValue": s[0] || (s[0] = (a) => p(n).email = a)
        }, [
          MM,
          (O(!0), T(ne, null, he(p(_s), (a, o) => (O(), T(ne, { key: o }, [
            Number.isInteger(a) ? Q("", !0) : (O(), T("option", {
              key: 0,
              value: Number(o)
            }, le(r.$t(`mail${a}`)), 9, CM))
          ], 64))), 128))
        ], 512), [
          [Be, p(n).email]
        ])
      ])
    ]));
  }
}), LM = ["width", "height", "fill", "transform"], SM = { key: 0 }, AM = /* @__PURE__ */ E("path", { d: "M225.6,62.64l-88-48.17a19.91,19.91,0,0,0-19.2,0l-88,48.17A20,20,0,0,0,20,80.19v95.62a20,20,0,0,0,10.4,17.55l88,48.17a19.89,19.89,0,0,0,19.2,0l88-48.17A20,20,0,0,0,236,175.81V80.19A20,20,0,0,0,225.6,62.64ZM128,36.57,200,76,128,115.4,56,76ZM44,96.79l72,39.4v76.67L44,173.44Zm96,116.07V136.19l72-39.4v76.65Z" }, null, -1), xM = [
  AM
], RM = { key: 1 }, FM = /* @__PURE__ */ E("path", {
  d: "M128,129.09V232a8,8,0,0,1-3.84-1l-88-48.16a8,8,0,0,1-4.16-7V80.2a8,8,0,0,1,.7-3.27Z",
  opacity: "0.2"
}, null, -1), YM = /* @__PURE__ */ E("path", { d: "M223.68,66.15,135.68,18h0a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32h0l80.34,44L128,120,47.66,76ZM40,90l80,43.78v85.79L40,175.82Zm96,129.57V133.82L216,90v85.78Z" }, null, -1), VM = [
  FM,
  YM
], UM = { key: 2 }, jM = /* @__PURE__ */ E("path", { d: "M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,120,47.65,76,128,32l80.35,44Zm8,99.64V133.83l80-43.78v85.76Z" }, null, -1), WM = [
  jM
], HM = { key: 3 }, BM = /* @__PURE__ */ E("path", { d: "M222.72,67.9l-88-48.17a13.9,13.9,0,0,0-13.44,0l-88,48.18A14,14,0,0,0,26,80.18v95.64a14,14,0,0,0,7.28,12.27l88,48.18a13.92,13.92,0,0,0,13.44,0l88-48.18A14,14,0,0,0,230,175.82V80.18A14,14,0,0,0,222.72,67.9ZM127,30.25a2,2,0,0,1,1.92,0L212.51,76,128,122.24,43.49,76ZM39,177.57a2,2,0,0,1-1-1.75V86.66l84,46V223Zm177.92,0L134,223V132.64l84-46v89.16A2,2,0,0,1,217,177.57Z" }, null, -1), GM = [
  BM
], KM = { key: 4 }, qM = /* @__PURE__ */ E("path", { d: "M223.68,66.15,135.68,18h0a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32h0l80.34,44L128,120,47.66,76ZM40,90l80,43.78v85.79L40,175.82Zm96,129.57V133.82L216,90v85.78Z" }, null, -1), zM = [
  qM
], XM = { key: 5 }, ZM = /* @__PURE__ */ E("path", { d: "M221.76,69.66l-88-48.18a12,12,0,0,0-11.52,0l-88,48.18A12,12,0,0,0,28,80.18v95.64a12,12,0,0,0,6.24,10.52l88,48.18a11.95,11.95,0,0,0,11.52,0l88-48.18A12,12,0,0,0,228,175.82V80.18A12,12,0,0,0,221.76,69.66ZM126.08,28.5a3.94,3.94,0,0,1,3.84,0L216.67,76,128,124.52,39.33,76Zm-88,150.83A4,4,0,0,1,36,175.82V83.29l88,48.16v94.91Zm179.84,0-85.92,47V131.45l88-48.16v92.53A4,4,0,0,1,217.92,179.32Z" }, null, -1), JM = [
  ZM
], QM = {
  name: "PhCube"
}, eC = /* @__PURE__ */ Se({
  ...QM,
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
    const t = e, n = yt("weight", "regular"), r = yt("size", "1em"), s = yt("color", "currentColor"), a = yt("mirrored", !1), o = C(() => t.weight ?? n), i = C(() => t.size ?? r), l = C(() => t.color ?? s), u = C(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : a ? "scale(-1, 1)" : void 0);
    return (c, v) => (O(), T("svg", rr({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: i.value,
      height: i.value,
      fill: l.value,
      transform: u.value
    }, c.$attrs), [
      jt(c.$slots, "default"),
      o.value === "bold" ? (O(), T("g", SM, xM)) : o.value === "duotone" ? (O(), T("g", RM, VM)) : o.value === "fill" ? (O(), T("g", UM, WM)) : o.value === "light" ? (O(), T("g", HM, GM)) : o.value === "regular" ? (O(), T("g", KM, zM)) : o.value === "thin" ? (O(), T("g", XM, JM)) : Q("", !0)
    ], 16, LM));
  }
}), tC = (e) => (hc("data-v-015ed2c9"), e = e(), gc(), e), nC = ["onSubmit"], rC = { class: "p1-b" }, aC = /* @__PURE__ */ tC(() => /* @__PURE__ */ E("span", { class: "p4-b" }, "規則名稱*", -1)), sC = {
  key: 0,
  class: "text-red-1"
}, oC = 100, iC = /* @__PURE__ */ Se({
  __name: "TCEventEditorApp",
  props: {
    data: {}
  },
  emits: ["update:data"],
  setup(e, { expose: t, emit: n }) {
    const r = e, s = C(() => JSON.parse(r.data || "{}")), a = (c) => {
      const v = Object.fromEntries(
        Object.entries(c).filter(([m, f]) => f !== null)
      );
      return JSON.stringify(v, null, 4);
    }, o = re([]), i = (c) => {
      c.preventDefault(), n("update:data", a(s.value));
    }, l = (c) => {
      var v;
      (v = u.value) == null || v.click();
    };
    qn("eventData", s), qn("checkDataValid", o);
    const u = re();
    return t({
      saveData: l
    }), (c, v) => r.data ? (O(), T("form", {
      key: 0,
      class: "p-5 rounded border flex flex-col gap-5 relative",
      id: "editor-container",
      onSubmit: ol(i, ["prevent"])
    }, [
      E("div", rC, [
        Rr("建立自動化規則"),
        me(p(eC))
      ]),
      me(Nr, { title: "基本資料" }, {
        default: ze(() => [
          E("div", null, [
            aC,
            me(Mt, {
              modelValue: p(s).title,
              "onUpdate:modelValue": v[0] || (v[0] = (m) => p(s).title = m),
              maxLength: oC,
              required: !0
            }, null, 8, ["modelValue"])
          ])
        ]),
        _: 1
      }),
      me(Nr, { title: "執行時間" }, {
        default: ze(() => [
          me(oT, {
            frequency: p(s).frequency,
            "onUpdate:frequency": v[1] || (v[1] = (m) => p(s).frequency = m),
            interval: p(s).interval,
            "onUpdate:interval": v[2] || (v[2] = (m) => p(s).interval = m)
          }, null, 8, ["frequency", "interval"])
        ]),
        _: 1
      }),
      me(Nr, { title: "通知" }, {
        default: ze(() => [
          me(PM)
        ]),
        _: 1
      }),
      me($I),
      me(NM),
      p(o).length ? (O(), T("span", sC, "資料未填寫完整")) : Q("", !0),
      E("button", {
        ref_key: "submitBtn",
        ref: u,
        class: "p-2 px-3 rounded bg-slate-100 hover:bg-sky-500 hover:text-white"
      }, " 保存 ", 512)
    ], 40, nC)) : Q("", !0);
  }
});
const lC = /* @__PURE__ */ bs(iC, [["__scopeId", "data-v-015ed2c9"]]), uC = { class: "bg-white p-3 rounded-xl flex w-4/5 min-h-[80%] max-h-96" }, cC = { class: "flex flex-col gap-2 py-2 px-4" }, dC = /* @__PURE__ */ E("div", { class: "w-[1px] h-auto bg-dark-4" }, null, -1), fC = /* @__PURE__ */ E("div", { class: "flex-1 h-auto bg-red-1" }, null, -1), gC = /* @__PURE__ */ Se({
  __name: "QuickSetup",
  setup(e) {
    const t = re(!1), n = () => {
      t.value = !0;
    }, r = re(["選擇平台", "執行動作", "設定條件", "執行時間"]);
    return (s, a) => {
      const o = fn("vue-final-modal");
      return O(), T("div", null, [
        me(o, {
          modelValue: p(t),
          "onUpdate:modelValue": a[0] || (a[0] = (i) => be(t) ? t.value = i : null),
          "content-class": "flex h-full w-full justify-center items-center",
          "hide-overlay": !1,
          "esc-to-close": !0,
          "click-to-close": !0
        }, {
          default: ze(() => [
            E("div", uC, [
              E("div", cC, [
                (O(!0), T(ne, null, he(p(r), (i, l) => (O(), T("div", {
                  key: i,
                  class: "flex flex-col"
                }, [
                  E("span", null, " Step." + le(l + 1), 1),
                  E("span", null, le(i), 1)
                ]))), 128))
              ]),
              dC,
              fC
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        E("div", { onClick: n }, [
          jt(s.$slots, "default")
        ])
      ]);
    };
  }
}), vC = (e) => {
  e.component("TCEventEditorApp", lC);
}, _C = {
  install: vC
};
export {
  gC as QuickSetup,
  lC as TCEventEditorApp,
  hC as TCEventItems,
  _C as default,
  pC as setApiUrlBase
};
