import { defineComponent as Se, openBlock as O, createElementBlock as T, createElementVNode as w, toDisplayString as ie, ref as ne, watchEffect as ps, computed as C, watch as Te, onBeforeUnmount as ic, Fragment as te, unref as p, renderList as he, createBlock as qe, createCommentVNode as Q, withDirectives as Pe, isRef as be, vModelSelect as Be, reactive as hs, onMounted as hn, onUnmounted as xr, toRefs as lc, h as Fn, provide as qn, inject as yt, resolveDynamicComponent as al, normalizeProps as sl, mergeProps as rr, renderSlot as jt, normalizeClass as Ge, normalizeStyle as Er, withKeys as lo, createVNode as me, withCtx as ze, nextTick as Yn, toRef as xa, resolveComponent as fn, Transition as ol, createTextVNode as Rr, withModifiers as il, guardReactiveProps as uc, resolveDirective as cc, toHandlers as dc, vModelCheckbox as ta, getCurrentInstance as Tr, effectScope as fc, shallowRef as vc, onBeforeMount as mc, Text as pc, Teleport as ll, createStaticVNode as hc, pushScopeId as gc, popScopeId as _c } from "vue";
function pC(e) {
}
class bc {
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
var Qe = /* @__PURE__ */ ((e) => (e[e.Google = 1] = "Google", e[e.Facebook = 2] = "Facebook", e))(Qe || {}), bt = /* @__PURE__ */ ((e) => (e[e.Campaign = 1] = "Campaign", e[e.AdGroup = 2] = "AdGroup", e[e.Ad = 3] = "Ad", e[e.AdTag = 4] = "AdTag", e))(bt || {}), vt = /* @__PURE__ */ ((e) => (e[e.Campaign = 1] = "Campaign", e[e.AdGroup = 2] = "AdGroup", e[e.Ad = 3] = "Ad", e[e.AdTag = 4] = "AdTag", e))(vt || {}), vn = /* @__PURE__ */ ((e) => (e[e.ForAll = 1] = "ForAll", e[e.ForID = 2] = "ForID", e[e.ForActive = 3] = "ForActive", e))(vn || {}), Vn = /* @__PURE__ */ ((e) => (e[e.Account = 1] = "Account", e[e.Campaign = 2] = "Campaign", e[e.AdGroup = 3] = "AdGroup", e))(Vn || {}), Un = /* @__PURE__ */ ((e) => (e[e.Account = 1] = "Account", e[e.Campaign = 2] = "Campaign", e[e.AdGroup = 3] = "AdGroup", e))(Un || {}), Re = /* @__PURE__ */ ((e) => (e[e.Never = -1] = "Never", e[e.Hour = 1] = "Hour", e[e.Day = 2] = "Day", e[e.Week = 3] = "Week", e[e.Month = 4] = "Month", e[e.Annual = 5] = "Annual", e))(Re || {}), It = /* @__PURE__ */ ((e) => (e[e.Sunday = 0] = "Sunday", e[e.Monday = 1] = "Monday", e[e.Tuesday = 2] = "Tuesday", e[e.Wednesday = 3] = "Wednesday", e[e.Thursday = 4] = "Thursday", e[e.Friday = 5] = "Friday", e[e.Saturday = 6] = "Saturday", e[e.Weekday = -1] = "Weekday", e[e.Weekend = -2] = "Weekend", e))(It || {}), un = /* @__PURE__ */ ((e) => (e[e.First = 1] = "First", e[e.Second = 2] = "Second", e[e.Third = 3] = "Third", e[e.Fourth = 4] = "Fourth", e[e.Fifth = 5] = "Fifth", e[e.Last = -1] = "Last", e))(un || {}), ct = /* @__PURE__ */ ((e) => (e[e.January = 1] = "January", e[e.February = 2] = "February", e[e.March = 3] = "March", e[e.April = 4] = "April", e[e.May = 5] = "May", e[e.June = 6] = "June", e[e.July = 7] = "July", e[e.August = 8] = "August", e[e.September = 9] = "September", e[e.October = 10] = "October", e[e.November = 11] = "November", e[e.December = 12] = "December", e))(ct || {}), re = /* @__PURE__ */ ((e) => (e[e.SetNewBudget = 1] = "SetNewBudget", e[e.IncreaseBudget = 2] = "IncreaseBudget", e[e.LowerBudget = 3] = "LowerBudget", e[e.OpenProject = 4] = "OpenProject", e[e.SuspendProject = 5] = "SuspendProject", e[e.None = -1] = "None", e))(re || {}), jn = /* @__PURE__ */ ((e) => (e.DailyBudget = "dailyBudget", e.TotalBudget = "totalBudget", e))(jn || {}), ae = /* @__PURE__ */ ((e) => (e.Value = "value", e.Percentage = "percentage", e))(ae || {}), fe = /* @__PURE__ */ ((e) => (e.BudgetRemaining = "budgetRemaining", e.BudgetCap = "budgetCap", e.Clicks = "clicks", e.Impressions = "impressions", e.Cpc = "CPC", e.Spend = "spend", e.Conversions = "conversions", e.ConversionSpend = "conversionSpend", e.ReturnOnADSpending = "roas", e))(fe || {}), wr = /* @__PURE__ */ ((e) => (e[e.Today = 1] = "Today", e[e.Yesterday = 2] = "Yesterday", e[e.Last3Days = 3] = "Last3Days", e[e.Last7Days = 4] = "Last7Days", e[e.ThisMonth = 5] = "ThisMonth", e[e.SpecifiedTime = -1] = "SpecifiedTime", e))(wr || {}), gs = /* @__PURE__ */ ((e) => (e.MoreThan = ">", e.GreaterOrEqualTo = ">=", e.Equal = "==", e.LessThan = "<", e.LessThanOrEqualTo = "<=", e))(gs || {}), _s = /* @__PURE__ */ ((e) => (e[e.AbnormalityOrError = 0] = "AbnormalityOrError", e[e.Error = 1] = "Error", e[e.None = -1] = "None", e))(_s || {});
const hC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ActionType: re,
  AdLevelTypeFacebook: vt,
  AdLevelTypeGoogle: bt,
  BudgetType: jn,
  ClientType: Qe,
  ConditionAdLevelTypeFacebook: Un,
  ConditionAdLevelTypeGoogle: Vn,
  ConditionType: fe,
  DateRangeType: wr,
  EventActionTargetType: vn,
  EventHelper: bc,
  FrequencyType: Re,
  MonthType: ct,
  OperationType: gs,
  ValueType: ae,
  WeekOrdinalWordsType: un,
  WeekdaysType: It,
  emailType: _s
}, Symbol.toStringTag, { value: "Module" })), yc = { class: "flex" }, Dc = ["checked", "id"], Ec = ["for"], wc = /* @__PURE__ */ Se({
  __name: "CheckBox",
  props: {
    label: {},
    checked: { type: Boolean },
    fieldId: {}
  },
  emits: ["update:checked"],
  setup(e, { emit: t }) {
    return (n, r) => (O(), T("div", yc, [
      w("input", {
        onInput: r[0] || (r[0] = (s) => n.$emit("update:checked", s.target.checked)),
        type: "checkbox",
        checked: n.checked,
        id: n.fieldId,
        class: "hidden"
      }, null, 40, Dc),
      w("label", {
        for: n.fieldId,
        class: "p3-r cursor-pointer rounded border hover:bg-light-4 border-dark-5 px-1 py-0.5 flex justify-center items-center text-dark-2 min-w-[1.75rem] min-h-[1.75rem]"
      }, ie(n.label), 9, Ec)
    ]));
  }
});
const bs = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
  return n;
}, uo = /* @__PURE__ */ bs(wc, [["__scopeId", "data-v-8bd665ed"]]), Oc = {
  key: 0,
  class: "flex gap-1.5 flex-wrap"
}, $c = {
  key: 1,
  class: "flex gap-2 items-center"
}, kc = /* @__PURE__ */ w("span", { class: "p3-r" }, "指定", -1), Nc = ["value"], Tc = { class: "flex gap-4 flex-wrap" }, Ic = /* @__PURE__ */ Se({
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
    const n = e, r = ne(n.monthDate), s = ne(n.weekOrdinal), a = ne(n.weekdays), o = ne(n.yearMonths), i = (b, d, g = !1) => {
      if (g) {
        d.findIndex((k) => k === b) === -1 ? d.push(b) : d.splice(d.indexOf(b), 1), d.sort((k, _) => k - _);
        return;
      }
      d.value.findIndex((k) => k === b) === -1 ? d.value.push(b) : d.value.splice(d.value.indexOf(b), 1), d.value.sort((k, _) => k - _);
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
    const l = ne([
      { name: "星期日", id: It.Sunday },
      { name: "星期一", id: It.Monday },
      { name: "星期二", id: It.Tuesday },
      { name: "星期三", id: It.Wednesday },
      { name: "星期四", id: It.Thursday },
      { name: "星期五", id: It.Friday },
      { name: "星期六", id: It.Saturday },
      { name: "平日", id: It.Weekday },
      { name: "週末", id: It.Weekend }
    ]), u = ne([
      { name: "第一週", id: un.First },
      { name: "第二週", id: un.Second },
      { name: "第三週", id: un.Third },
      { name: "第四週", id: un.Fourth },
      { name: "第五週", id: un.Fifth },
      { name: "最後一週", id: un.Last }
    ]), c = ne([
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
    ]), m = ne([
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
    ]), f = C(() => {
      if (n.type === Re.Week)
        return [
          {
            key: a,
            label: "weekdaysOrigin",
            options: l.value
          }
        ];
      if (n.type === Re.Month) {
        if (y.value.id === 0)
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
        if (y.value.id === 1)
          return [
            {
              key: r,
              label: "monthDateOrigin",
              options: c.value
            }
          ];
      }
      if (n.type === Re.Annual) {
        if (y.value.id === 0)
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
        if (y.value.id === 1)
          return [
            {
              key: r,
              label: "monthDateOrigin",
              options: c.value
            }
          ];
      }
    }), v = C(() => n.type === Re.Month || n.type === Re.Annual ? !0 : (r.value = [], s.value = [], a.value = [], o.value = [], !1)), E = ne([
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
    ]), y = ne(E.value[0]);
    return Te(y, (b) => {
      if (b.id === 0) {
        r.value = [];
        return;
      }
      if (b.id === 1) {
        s.value = [], a.value = [];
        return;
      }
    }), Te(
      () => n.type,
      (b) => {
        (b === Re.Month || b === Re.Annual) && (b != Re.Annual && (o.value = []), c.value && c.value.length > 0 ? y.value = E.value[1] : y.value = E.value[0]);
      },
      { immediate: !0 }
    ), ic(() => {
      r.value = [], s.value = [], a.value = [], o.value = [];
    }), (b, d) => (O(), T(te, null, [
      b.type === p(Re).Annual ? (O(), T("div", Oc, [
        (O(!0), T(te, null, he(p(m), (g) => {
          var k;
          return O(), qe(uo, {
            key: g.id,
            checked: (k = p(o)) == null ? void 0 : k.includes(g.id),
            "onUpdate:checked": (_) => i(g.id, p(o), !0),
            fieldId: g.name,
            label: g.name
          }, null, 8, ["checked", "onUpdate:checked", "fieldId", "label"]);
        }), 128))
      ])) : Q("", !0),
      p(v) ? (O(), T("div", $c, [
        kc,
        Pe(w("select", {
          class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
          "onUpdate:modelValue": d[0] || (d[0] = (g) => be(y) ? y.value = g : null)
        }, [
          (O(!0), T(te, null, he(p(E), (g, k) => (O(), T("option", {
            key: k,
            value: g
          }, ie(g.name), 9, Nc))), 128))
        ], 512), [
          [Be, p(y)]
        ])
      ])) : Q("", !0),
      w("div", Tc, [
        (O(!0), T(te, null, he(p(f), (g) => (O(), T("div", {
          class: "flex gap-1 flex-wrap",
          key: g
        }, [
          (O(!0), T(te, null, he(g.options, (k) => {
            var _;
            return O(), qe(uo, {
              key: k.id,
              checked: (_ = g.key.value) == null ? void 0 : _.includes(k.id),
              "onUpdate:checked": (M) => i(k.id, g.key),
              fieldId: k.name,
              label: k.name
            }, null, 8, ["checked", "onUpdate:checked", "fieldId", "label"]);
          }), 128))
        ]))), 128))
      ])
    ], 64));
  }
});
var dt = "top", Ot = "bottom", $t = "right", ft = "left", ys = "auto", Fr = [dt, Ot, $t, ft], zn = "start", Ir = "end", Mc = "clippingParents", ul = "viewport", pr = "popper", Cc = "reference", co = /* @__PURE__ */ Fr.reduce(function(e, t) {
  return e.concat([t + "-" + zn, t + "-" + Ir]);
}, []), cl = /* @__PURE__ */ [].concat(Fr, [ys]).reduce(function(e, t) {
  return e.concat([t, t + "-" + zn, t + "-" + Ir]);
}, []), Pc = "beforeRead", Lc = "read", Sc = "afterRead", Ac = "beforeMain", xc = "main", Rc = "afterMain", Fc = "beforeWrite", Yc = "write", Vc = "afterWrite", Uc = [Pc, Lc, Sc, Ac, xc, Rc, Fc, Yc, Vc];
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
function jc(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, s = t.attributes[n] || {}, a = t.elements[n];
    !Et(a) || !Wt(a) || (Object.assign(a.style, r), Object.keys(s).forEach(function(o) {
      var i = s[o];
      i === !1 ? a.removeAttribute(o) : a.setAttribute(o, i === !0 ? "" : i);
    }));
  });
}
function Wc(e) {
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
const Hc = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: jc,
  effect: Wc,
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
function dl() {
  return !/^((?!chrome|android).)*safari/i.test(Ba());
}
function Zn(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), s = 1, a = 1;
  t && Et(e) && (s = e.offsetWidth > 0 && Xn(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Xn(r.height) / e.offsetHeight || 1);
  var o = On(e) ? ht(e) : window, i = o.visualViewport, l = !dl() && n, u = (r.left + (l && i ? i.offsetLeft : 0)) / s, c = (r.top + (l && i ? i.offsetTop : 0)) / a, m = r.width / s, f = r.height / a;
  return {
    width: m,
    height: f,
    top: c,
    right: u + m,
    bottom: c + f,
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
function fl(e, t) {
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
function Bc(e) {
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
function fo(e) {
  return !Et(e) || // https://github.com/popperjs/popper-core/issues/837
  Zt(e).position === "fixed" ? null : e.offsetParent;
}
function Gc(e) {
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
  for (var t = ht(e), n = fo(e); n && Bc(n) && Zt(n).position === "static"; )
    n = fo(n);
  return n && (Wt(n) === "html" || Wt(n) === "body" && Zt(n).position === "static") ? t : n || Gc(e) || t;
}
function ws(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Or(e, t, n) {
  return wn(e, na(t, n));
}
function Kc(e, t, n) {
  var r = Or(e, t, n);
  return r > n ? n : r;
}
function vl() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function ml(e) {
  return Object.assign({}, vl(), e);
}
function pl(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var qc = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, ml(typeof t != "number" ? t : pl(t, Fr));
};
function zc(e) {
  var t, n = e.state, r = e.name, s = e.options, a = n.elements.arrow, o = n.modifiersData.popperOffsets, i = Ut(n.placement), l = ws(i), u = [ft, $t].indexOf(i) >= 0, c = u ? "height" : "width";
  if (!(!a || !o)) {
    var m = qc(s.padding, n), f = Es(a), v = l === "y" ? dt : ft, E = l === "y" ? Ot : $t, y = n.rects.reference[c] + n.rects.reference[l] - o[l] - n.rects.popper[c], b = o[l] - n.rects.reference[l], d = Yr(a), g = d ? l === "y" ? d.clientHeight || 0 : d.clientWidth || 0 : 0, k = y / 2 - b / 2, _ = m[v], M = g - f[c] - m[E], N = g / 2 - f[c] / 2 + k, A = Or(_, N, M), P = l;
    n.modifiersData[r] = (t = {}, t[P] = A, t.centerOffset = A - N, t);
  }
}
function Xc(e) {
  var t = e.state, n = e.options, r = n.element, s = r === void 0 ? "[data-popper-arrow]" : r;
  s != null && (typeof s == "string" && (s = t.elements.popper.querySelector(s), !s) || fl(t.elements.popper, s) && (t.elements.arrow = s));
}
const Zc = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: zc,
  effect: Xc,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Jn(e) {
  return e.split("-")[1];
}
var Jc = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Qc(e, t) {
  var n = e.x, r = e.y, s = t.devicePixelRatio || 1;
  return {
    x: Xn(n * s) / s || 0,
    y: Xn(r * s) / s || 0
  };
}
function vo(e) {
  var t, n = e.popper, r = e.popperRect, s = e.placement, a = e.variation, o = e.offsets, i = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, m = e.isFixed, f = o.x, v = f === void 0 ? 0 : f, E = o.y, y = E === void 0 ? 0 : E, b = typeof c == "function" ? c({
    x: v,
    y
  }) : {
    x: v,
    y
  };
  v = b.x, y = b.y;
  var d = o.hasOwnProperty("x"), g = o.hasOwnProperty("y"), k = ft, _ = dt, M = window;
  if (u) {
    var N = Yr(n), A = "clientHeight", P = "clientWidth";
    if (N === ht(n) && (N = gn(n), Zt(N).position !== "static" && i === "absolute" && (A = "scrollHeight", P = "scrollWidth")), N = N, s === dt || (s === ft || s === $t) && a === Ir) {
      _ = Ot;
      var L = m && N === M && M.visualViewport ? M.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        N[A]
      );
      y -= L - r.height, y *= l ? 1 : -1;
    }
    if (s === ft || (s === dt || s === Ot) && a === Ir) {
      k = $t;
      var x = m && N === M && M.visualViewport ? M.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        N[P]
      );
      v -= x - r.width, v *= l ? 1 : -1;
    }
  }
  var U = Object.assign({
    position: i
  }, u && Jc), F = c === !0 ? Qc({
    x: v,
    y
  }, ht(n)) : {
    x: v,
    y
  };
  if (v = F.x, y = F.y, l) {
    var X;
    return Object.assign({}, U, (X = {}, X[_] = g ? "0" : "", X[k] = d ? "0" : "", X.transform = (M.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + y + "px)" : "translate3d(" + v + "px, " + y + "px, 0)", X));
  }
  return Object.assign({}, U, (t = {}, t[_] = g ? y + "px" : "", t[k] = d ? v + "px" : "", t.transform = "", t));
}
function ed(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, s = r === void 0 ? !0 : r, a = n.adaptive, o = a === void 0 ? !0 : a, i = n.roundOffsets, l = i === void 0 ? !0 : i, u = {
    placement: Ut(t.placement),
    variation: Jn(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: s,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, vo(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: o,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, vo(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const td = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: ed,
  data: {}
};
var Hr = {
  passive: !0
};
function nd(e) {
  var t = e.state, n = e.instance, r = e.options, s = r.scroll, a = s === void 0 ? !0 : s, o = r.resize, i = o === void 0 ? !0 : o, l = ht(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(c) {
    c.addEventListener("scroll", n.update, Hr);
  }), i && l.addEventListener("resize", n.update, Hr), function() {
    a && u.forEach(function(c) {
      c.removeEventListener("scroll", n.update, Hr);
    }), i && l.removeEventListener("resize", n.update, Hr);
  };
}
const rd = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: nd,
  data: {}
};
var ad = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Xr(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return ad[t];
  });
}
var sd = {
  start: "end",
  end: "start"
};
function mo(e) {
  return e.replace(/start|end/g, function(t) {
    return sd[t];
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
function od(e, t) {
  var n = ht(e), r = gn(e), s = n.visualViewport, a = r.clientWidth, o = r.clientHeight, i = 0, l = 0;
  if (s) {
    a = s.width, o = s.height;
    var u = dl();
    (u || !u && t === "fixed") && (i = s.offsetLeft, l = s.offsetTop);
  }
  return {
    width: a,
    height: o,
    x: i + $s(e),
    y: l
  };
}
function id(e) {
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
function hl(e) {
  return ["html", "body", "#document"].indexOf(Wt(e)) >= 0 ? e.ownerDocument.body : Et(e) && ks(e) ? e : hl(Da(e));
}
function $r(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = hl(e), s = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = ht(r), o = s ? [a].concat(a.visualViewport || [], ks(r) ? r : []) : r, i = t.concat(o);
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
function ld(e, t) {
  var n = Zn(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function po(e, t, n) {
  return t === ul ? Ga(od(e, n)) : On(t) ? ld(t, n) : Ga(id(gn(e)));
}
function ud(e) {
  var t = $r(Da(e)), n = ["absolute", "fixed"].indexOf(Zt(e).position) >= 0, r = n && Et(e) ? Yr(e) : e;
  return On(r) ? t.filter(function(s) {
    return On(s) && fl(s, r) && Wt(s) !== "body";
  }) : [];
}
function cd(e, t, n, r) {
  var s = t === "clippingParents" ? ud(e) : [].concat(t), a = [].concat(s, [n]), o = a[0], i = a.reduce(function(l, u) {
    var c = po(e, u, r);
    return l.top = wn(c.top, l.top), l.right = na(c.right, l.right), l.bottom = na(c.bottom, l.bottom), l.left = wn(c.left, l.left), l;
  }, po(e, o, r));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function gl(e) {
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
  var n = t, r = n.placement, s = r === void 0 ? e.placement : r, a = n.strategy, o = a === void 0 ? e.strategy : a, i = n.boundary, l = i === void 0 ? Mc : i, u = n.rootBoundary, c = u === void 0 ? ul : u, m = n.elementContext, f = m === void 0 ? pr : m, v = n.altBoundary, E = v === void 0 ? !1 : v, y = n.padding, b = y === void 0 ? 0 : y, d = ml(typeof b != "number" ? b : pl(b, Fr)), g = f === pr ? Cc : pr, k = e.rects.popper, _ = e.elements[E ? g : f], M = cd(On(_) ? _ : _.contextElement || gn(e.elements.popper), l, c, o), N = Zn(e.elements.reference), A = gl({
    reference: N,
    element: k,
    strategy: "absolute",
    placement: s
  }), P = Ga(Object.assign({}, k, A)), L = f === pr ? P : N, x = {
    top: M.top - L.top + d.top,
    bottom: L.bottom - M.bottom + d.bottom,
    left: M.left - L.left + d.left,
    right: L.right - M.right + d.right
  }, U = e.modifiersData.offset;
  if (f === pr && U) {
    var F = U[s];
    Object.keys(x).forEach(function(X) {
      var le = [$t, Ot].indexOf(X) >= 0 ? 1 : -1, H = [dt, Ot].indexOf(X) >= 0 ? "y" : "x";
      x[X] += F[H] * le;
    });
  }
  return x;
}
function dd(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = n.boundary, a = n.rootBoundary, o = n.padding, i = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? cl : l, c = Jn(r), m = c ? i ? co : co.filter(function(E) {
    return Jn(E) === c;
  }) : Fr, f = m.filter(function(E) {
    return u.indexOf(E) >= 0;
  });
  f.length === 0 && (f = m);
  var v = f.reduce(function(E, y) {
    return E[y] = Mr(e, {
      placement: y,
      boundary: s,
      rootBoundary: a,
      padding: o
    })[Ut(y)], E;
  }, {});
  return Object.keys(v).sort(function(E, y) {
    return v[E] - v[y];
  });
}
function fd(e) {
  if (Ut(e) === ys)
    return [];
  var t = Xr(e);
  return [mo(e), t, mo(t)];
}
function vd(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var s = n.mainAxis, a = s === void 0 ? !0 : s, o = n.altAxis, i = o === void 0 ? !0 : o, l = n.fallbackPlacements, u = n.padding, c = n.boundary, m = n.rootBoundary, f = n.altBoundary, v = n.flipVariations, E = v === void 0 ? !0 : v, y = n.allowedAutoPlacements, b = t.options.placement, d = Ut(b), g = d === b, k = l || (g || !E ? [Xr(b)] : fd(b)), _ = [b].concat(k).reduce(function(ee, Ee) {
      return ee.concat(Ut(Ee) === ys ? dd(t, {
        placement: Ee,
        boundary: c,
        rootBoundary: m,
        padding: u,
        flipVariations: E,
        allowedAutoPlacements: y
      }) : Ee);
    }, []), M = t.rects.reference, N = t.rects.popper, A = /* @__PURE__ */ new Map(), P = !0, L = _[0], x = 0; x < _.length; x++) {
      var U = _[x], F = Ut(U), X = Jn(U) === zn, le = [dt, Ot].indexOf(F) >= 0, H = le ? "width" : "height", G = Mr(t, {
        placement: U,
        boundary: c,
        rootBoundary: m,
        altBoundary: f,
        padding: u
      }), j = le ? X ? $t : ft : X ? Ot : dt;
      M[H] > N[H] && (j = Xr(j));
      var Y = Xr(j), V = [];
      if (a && V.push(G[F] <= 0), i && V.push(G[j] <= 0, G[Y] <= 0), V.every(function(ee) {
        return ee;
      })) {
        L = U, P = !1;
        break;
      }
      A.set(U, V);
    }
    if (P)
      for (var $ = E ? 3 : 1, q = function(Ee) {
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
const md = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: vd,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function ho(e, t, n) {
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
function go(e) {
  return [dt, $t, Ot, ft].some(function(t) {
    return e[t] >= 0;
  });
}
function pd(e) {
  var t = e.state, n = e.name, r = t.rects.reference, s = t.rects.popper, a = t.modifiersData.preventOverflow, o = Mr(t, {
    elementContext: "reference"
  }), i = Mr(t, {
    altBoundary: !0
  }), l = ho(o, r), u = ho(i, s, a), c = go(l), m = go(u);
  t.modifiersData[n] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: u,
    isReferenceHidden: c,
    hasPopperEscaped: m
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": c,
    "data-popper-escaped": m
  });
}
const hd = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: pd
};
function gd(e, t, n) {
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
function _d(e) {
  var t = e.state, n = e.options, r = e.name, s = n.offset, a = s === void 0 ? [0, 0] : s, o = cl.reduce(function(c, m) {
    return c[m] = gd(m, t.rects, a), c;
  }, {}), i = o[t.placement], l = i.x, u = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = o;
}
const bd = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: _d
};
function yd(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = gl({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Dd = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: yd,
  data: {}
};
function Ed(e) {
  return e === "x" ? "y" : "x";
}
function wd(e) {
  var t = e.state, n = e.options, r = e.name, s = n.mainAxis, a = s === void 0 ? !0 : s, o = n.altAxis, i = o === void 0 ? !1 : o, l = n.boundary, u = n.rootBoundary, c = n.altBoundary, m = n.padding, f = n.tether, v = f === void 0 ? !0 : f, E = n.tetherOffset, y = E === void 0 ? 0 : E, b = Mr(t, {
    boundary: l,
    rootBoundary: u,
    padding: m,
    altBoundary: c
  }), d = Ut(t.placement), g = Jn(t.placement), k = !g, _ = ws(d), M = Ed(_), N = t.modifiersData.popperOffsets, A = t.rects.reference, P = t.rects.popper, L = typeof y == "function" ? y(Object.assign({}, t.rects, {
    placement: t.placement
  })) : y, x = typeof L == "number" ? {
    mainAxis: L,
    altAxis: L
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, L), U = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, F = {
    x: 0,
    y: 0
  };
  if (N) {
    if (a) {
      var X, le = _ === "y" ? dt : ft, H = _ === "y" ? Ot : $t, G = _ === "y" ? "height" : "width", j = N[_], Y = j + b[le], V = j - b[H], $ = v ? -P[G] / 2 : 0, q = g === zn ? A[G] : P[G], pe = g === zn ? -P[G] : -A[G], $e = t.elements.arrow, ee = v && $e ? Es($e) : {
        width: 0,
        height: 0
      }, Ee = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : vl(), ge = Ee[le], Ce = Ee[H], Ne = Or(0, A[G], ee[G]), De = k ? A[G] / 2 - $ - Ne - ge - x.mainAxis : q - Ne - ge - x.mainAxis, Ve = k ? -A[G] / 2 + $ + Ne + Ce + x.mainAxis : pe + Ne + Ce + x.mainAxis, Ye = t.elements.arrow && Yr(t.elements.arrow), Je = Ye ? _ === "y" ? Ye.clientTop || 0 : Ye.clientLeft || 0 : 0, D = (X = U == null ? void 0 : U[_]) != null ? X : 0, h = j + De - D - Je, S = j + Ve - D, J = Or(v ? na(Y, h) : Y, j, v ? wn(V, S) : V);
      N[_] = J, F[_] = J - j;
    }
    if (i) {
      var oe, _e = _ === "x" ? dt : ft, nt = _ === "x" ? Ot : $t, He = N[M], gt = M === "y" ? "height" : "width", At = He + b[_e], Ie = He - b[nt], R = [dt, ft].indexOf(d) !== -1, B = (oe = U == null ? void 0 : U[M]) != null ? oe : 0, Ue = R ? At : He - A[gt] - P[gt] - B + x.altAxis, je = R ? He + A[gt] + P[gt] - B - x.altAxis : Ie, xt = v && R ? Kc(Ue, He, je) : Or(v ? Ue : At, He, v ? je : Ie);
      N[M] = xt, F[M] = xt - He;
    }
    t.modifiersData[r] = F;
  }
}
const Od = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: wd,
  requiresIfExists: ["offset"]
};
function $d(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function kd(e) {
  return e === ht(e) || !Et(e) ? Os(e) : $d(e);
}
function Nd(e) {
  var t = e.getBoundingClientRect(), n = Xn(t.width) / e.offsetWidth || 1, r = Xn(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Td(e, t, n) {
  n === void 0 && (n = !1);
  var r = Et(t), s = Et(t) && Nd(t), a = gn(t), o = Zn(e, s, n), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((Wt(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  ks(a)) && (i = kd(t)), Et(t) ? (l = Zn(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = $s(a))), {
    x: o.left + i.scrollLeft - l.x,
    y: o.top + i.scrollTop - l.y,
    width: o.width,
    height: o.height
  };
}
function Id(e) {
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
function Md(e) {
  var t = Id(e);
  return Uc.reduce(function(n, r) {
    return n.concat(t.filter(function(s) {
      return s.phase === r;
    }));
  }, []);
}
function Cd(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Pd(e) {
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
var _o = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function bo() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Ld(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, s = t.defaultOptions, a = s === void 0 ? _o : s;
  return function(i, l, u) {
    u === void 0 && (u = a);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, _o, a),
      modifiersData: {},
      elements: {
        reference: i,
        popper: l
      },
      attributes: {},
      styles: {}
    }, m = [], f = !1, v = {
      state: c,
      setOptions: function(d) {
        var g = typeof d == "function" ? d(c.options) : d;
        y(), c.options = Object.assign({}, a, c.options, g), c.scrollParents = {
          reference: On(i) ? $r(i) : i.contextElement ? $r(i.contextElement) : [],
          popper: $r(l)
        };
        var k = Md(Pd([].concat(r, c.options.modifiers)));
        return c.orderedModifiers = k.filter(function(_) {
          return _.enabled;
        }), E(), v.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var d = c.elements, g = d.reference, k = d.popper;
          if (bo(g, k)) {
            c.rects = {
              reference: Td(g, Yr(k), c.options.strategy === "fixed"),
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
                instance: v
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Cd(function() {
        return new Promise(function(b) {
          v.forceUpdate(), b(c);
        });
      }),
      destroy: function() {
        y(), f = !0;
      }
    };
    if (!bo(i, l))
      return v;
    v.setOptions(u).then(function(b) {
      !f && u.onFirstUpdate && u.onFirstUpdate(b);
    });
    function E() {
      c.orderedModifiers.forEach(function(b) {
        var d = b.name, g = b.options, k = g === void 0 ? {} : g, _ = b.effect;
        if (typeof _ == "function") {
          var M = _({
            state: c,
            name: d,
            instance: v,
            options: k
          }), N = function() {
          };
          m.push(M || N);
        }
      });
    }
    function y() {
      m.forEach(function(b) {
        return b();
      }), m = [];
    }
    return v;
  };
}
var Sd = [rd, Dd, td, Hc, bd, md, Od, Zc, hd], Ad = /* @__PURE__ */ Ld({
  defaultModifiers: Sd
}), xd = Object.defineProperty, Rd = (e, t, n) => t in e ? xd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, se = (e, t, n) => (Rd(e, typeof t != "symbol" ? t + "" : t, n), n);
const en = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
  return n;
}, Fd = {}, Yd = {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  viewBox: "0 0 24 24"
}, Vd = /* @__PURE__ */ w("polyline", { points: "9 18 15 12 9 6" }, null, -1), Ud = [
  Vd
];
function jd(e, t) {
  return O(), T("svg", Yd, Ud);
}
const Wd = /* @__PURE__ */ en(Fd, [["render", jd]]), Hd = {}, Bd = {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  viewBox: "0 0 24 24"
}, Gd = /* @__PURE__ */ w("polyline", { points: "15 18 9 12 15 6" }, null, -1), Kd = [
  Gd
];
function qd(e, t) {
  return O(), T("svg", Bd, Kd);
}
const zd = /* @__PURE__ */ en(Hd, [["render", qd]]), Xd = {}, Zd = {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  viewBox: "0 0 24 24"
}, Jd = /* @__PURE__ */ w("polyline", { points: "6 9 12 15 18 9" }, null, -1), Qd = [
  Jd
];
function ef(e, t) {
  return O(), T("svg", Zd, Qd);
}
const tf = /* @__PURE__ */ en(Xd, [["render", ef]]), nf = {}, rf = {
  fill: "none",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  viewBox: "0 0 24 24"
}, af = /* @__PURE__ */ w("path", { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" }, null, -1), sf = [
  af
];
function of(e, t) {
  return O(), T("svg", rf, sf);
}
const lf = /* @__PURE__ */ en(nf, [["render", of]]), uf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IconChevronDown: tf,
  IconChevronLeft: zd,
  IconChevronRight: Wd,
  IconClock: lf
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
    const t = e, n = C(() => t.width || t.size), r = C(() => t.height || t.size), s = C(() => uf[`Icon${t.name}`]);
    return (a, o) => (O(), qe(al(p(s)), {
      width: p(n),
      height: p(r),
      class: "vc-base-icon"
    }, null, 8, ["width", "height"]));
  }
});
function _l() {
  return typeof window < "u";
}
function cf(e) {
  return _l() && e in window;
}
function df(e) {
  const t = ne(!1), n = C(() => t.value ? "dark" : "light");
  let r, s;
  function a(v) {
    t.value = v.matches;
  }
  function o() {
    cf("matchMedia") && (r = window.matchMedia("(prefers-color-scheme: dark)"), r.addEventListener("change", a), t.value = r.matches);
  }
  function i() {
    const { selector: v = ":root", darkClass: E = "dark" } = e.value, y = document.querySelector(v);
    t.value = y.classList.contains(E);
  }
  function l(v) {
    const { selector: E = ":root", darkClass: y = "dark" } = v;
    if (_l() && E && y) {
      const b = document.querySelector(E);
      b && (s = new MutationObserver(i), s.observe(b, {
        attributes: !0,
        attributeFilter: ["class"]
      }), t.value = b.classList.contains(y));
    }
  }
  function u() {
    m();
    const v = typeof e.value;
    v === "string" && e.value.toLowerCase() === "system" ? o() : v === "object" ? l(e.value) : t.value = !!e.value;
  }
  const c = Te(() => e.value, () => u(), {
    immediate: !0
  });
  function m() {
    r && (r.removeEventListener("change", a), r = void 0), s && (s.disconnect(), s = void 0);
  }
  function f() {
    m(), c();
  }
  return xr(() => f()), {
    isDark: t,
    displayMode: n,
    cleanup: f
  };
}
var Br = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ff(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var vf = typeof Br == "object" && Br && Br.Object === Object && Br, bl = vf, mf = bl, pf = typeof self == "object" && self && self.Object === Object && self, hf = mf || pf || Function("return this")(), Bt = hf, gf = Bt, _f = gf.Symbol, Ea = _f, yo = Ea, yl = Object.prototype, bf = yl.hasOwnProperty, yf = yl.toString, hr = yo ? yo.toStringTag : void 0;
function Df(e) {
  var t = bf.call(e, hr), n = e[hr];
  try {
    e[hr] = void 0;
    var r = !0;
  } catch {
  }
  var s = yf.call(e);
  return r && (t ? e[hr] = n : delete e[hr]), s;
}
var Ef = Df, wf = Object.prototype, Of = wf.toString;
function $f(e) {
  return Of.call(e);
}
var kf = $f, Do = Ea, Nf = Ef, Tf = kf, If = "[object Null]", Mf = "[object Undefined]", Eo = Do ? Do.toStringTag : void 0;
function Cf(e) {
  return e == null ? e === void 0 ? Mf : If : Eo && Eo in Object(e) ? Nf(e) : Tf(e);
}
var Gt = Cf;
function Pf(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var tn = Pf, Lf = Gt, Sf = tn, Af = "[object AsyncFunction]", xf = "[object Function]", Rf = "[object GeneratorFunction]", Ff = "[object Proxy]";
function Yf(e) {
  if (!Sf(e))
    return !1;
  var t = Lf(e);
  return t == xf || t == Rf || t == Af || t == Ff;
}
var Mn = Yf, Vf = Array.isArray, Lt = Vf;
function Uf(e) {
  return e != null && typeof e == "object";
}
var St = Uf, jf = Gt, Wf = Lt, Hf = St, Bf = "[object String]";
function Gf(e) {
  return typeof e == "string" || !Wf(e) && Hf(e) && jf(e) == Bf;
}
var Yt = Gf, Kf = Gt, qf = St, zf = "[object Boolean]";
function Xf(e) {
  return e === !0 || e === !1 || qf(e) && Kf(e) == zf;
}
var Zf = Xf, Jf = Gt, Qf = St, ev = "[object Number]";
function tv(e) {
  return typeof e == "number" || Qf(e) && Jf(e) == ev;
}
var Pt = tv, nv = Gt, rv = St, av = "[object Date]";
function sv(e) {
  return rv(e) && nv(e) == av;
}
var ov = sv;
function iv(e) {
  return function(t) {
    return e(t);
  };
}
var Dl = iv, Cr = {}, lv = {
  get exports() {
    return Cr;
  },
  set exports(e) {
    Cr = e;
  }
};
(function(e, t) {
  var n = bl, r = t && !t.nodeType && t, s = r && !0 && e && !e.nodeType && e, a = s && s.exports === r, o = a && n.process, i = function() {
    try {
      var l = s && s.require && s.require("util").types;
      return l || o && o.binding && o.binding("util");
    } catch {
    }
  }();
  e.exports = i;
})(lv, Cr);
var uv = ov, cv = Dl, wo = Cr, Oo = wo && wo.isDate, dv = Oo ? cv(Oo) : uv, fv = dv, vv = Gt, mv = St, pv = "[object Symbol]";
function hv(e) {
  return typeof e == "symbol" || mv(e) && vv(e) == pv;
}
var Ns = hv, gv = Lt, _v = Ns, bv = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, yv = /^\w*$/;
function Dv(e, t) {
  if (gv(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || _v(e) ? !0 : yv.test(e) || !bv.test(e) || t != null && e in Object(t);
}
var Ts = Dv, Ev = Bt, wv = Ev["__core-js_shared__"], Ov = wv, Ra = Ov, $o = function() {
  var e = /[^.]+$/.exec(Ra && Ra.keys && Ra.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function $v(e) {
  return !!$o && $o in e;
}
var kv = $v, Nv = Function.prototype, Tv = Nv.toString;
function Iv(e) {
  if (e != null) {
    try {
      return Tv.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var El = Iv, Mv = Mn, Cv = kv, Pv = tn, Lv = El, Sv = /[\\^$.*+?()[\]{}|]/g, Av = /^\[object .+?Constructor\]$/, xv = Function.prototype, Rv = Object.prototype, Fv = xv.toString, Yv = Rv.hasOwnProperty, Vv = RegExp(
  "^" + Fv.call(Yv).replace(Sv, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Uv(e) {
  if (!Pv(e) || Cv(e))
    return !1;
  var t = Mv(e) ? Vv : Av;
  return t.test(Lv(e));
}
var jv = Uv;
function Wv(e, t) {
  return e == null ? void 0 : e[t];
}
var Hv = Wv, Bv = jv, Gv = Hv;
function Kv(e, t) {
  var n = Gv(e, t);
  return Bv(n) ? n : void 0;
}
var Cn = Kv, qv = Cn, zv = qv(Object, "create"), wa = zv, ko = wa;
function Xv() {
  this.__data__ = ko ? ko(null) : {}, this.size = 0;
}
var Zv = Xv;
function Jv(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Qv = Jv, em = wa, tm = "__lodash_hash_undefined__", nm = Object.prototype, rm = nm.hasOwnProperty;
function am(e) {
  var t = this.__data__;
  if (em) {
    var n = t[e];
    return n === tm ? void 0 : n;
  }
  return rm.call(t, e) ? t[e] : void 0;
}
var sm = am, om = wa, im = Object.prototype, lm = im.hasOwnProperty;
function um(e) {
  var t = this.__data__;
  return om ? t[e] !== void 0 : lm.call(t, e);
}
var cm = um, dm = wa, fm = "__lodash_hash_undefined__";
function vm(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = dm && t === void 0 ? fm : t, this;
}
var mm = vm, pm = Zv, hm = Qv, gm = sm, _m = cm, bm = mm;
function ar(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ar.prototype.clear = pm;
ar.prototype.delete = hm;
ar.prototype.get = gm;
ar.prototype.has = _m;
ar.prototype.set = bm;
var ym = ar;
function Dm() {
  this.__data__ = [], this.size = 0;
}
var Em = Dm;
function wm(e, t) {
  return e === t || e !== e && t !== t;
}
var sr = wm, Om = sr;
function $m(e, t) {
  for (var n = e.length; n--; )
    if (Om(e[n][0], t))
      return n;
  return -1;
}
var Oa = $m, km = Oa, Nm = Array.prototype, Tm = Nm.splice;
function Im(e) {
  var t = this.__data__, n = km(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : Tm.call(t, n, 1), --this.size, !0;
}
var Mm = Im, Cm = Oa;
function Pm(e) {
  var t = this.__data__, n = Cm(t, e);
  return n < 0 ? void 0 : t[n][1];
}
var Lm = Pm, Sm = Oa;
function Am(e) {
  return Sm(this.__data__, e) > -1;
}
var xm = Am, Rm = Oa;
function Fm(e, t) {
  var n = this.__data__, r = Rm(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
var Ym = Fm, Vm = Em, Um = Mm, jm = Lm, Wm = xm, Hm = Ym;
function or(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
or.prototype.clear = Vm;
or.prototype.delete = Um;
or.prototype.get = jm;
or.prototype.has = Wm;
or.prototype.set = Hm;
var $a = or, Bm = Cn, Gm = Bt, Km = Bm(Gm, "Map"), Is = Km, No = ym, qm = $a, zm = Is;
function Xm() {
  this.size = 0, this.__data__ = {
    hash: new No(),
    map: new (zm || qm)(),
    string: new No()
  };
}
var Zm = Xm;
function Jm(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var Qm = Jm, ep = Qm;
function tp(e, t) {
  var n = e.__data__;
  return ep(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
var ka = tp, np = ka;
function rp(e) {
  var t = np(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var ap = rp, sp = ka;
function op(e) {
  return sp(this, e).get(e);
}
var ip = op, lp = ka;
function up(e) {
  return lp(this, e).has(e);
}
var cp = up, dp = ka;
function fp(e, t) {
  var n = dp(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
var vp = fp, mp = Zm, pp = ap, hp = ip, gp = cp, _p = vp;
function ir(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ir.prototype.clear = mp;
ir.prototype.delete = pp;
ir.prototype.get = hp;
ir.prototype.has = gp;
ir.prototype.set = _p;
var Ms = ir, wl = Ms, bp = "Expected a function";
function Cs(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(bp);
  var n = function() {
    var r = arguments, s = t ? t.apply(this, r) : r[0], a = n.cache;
    if (a.has(s))
      return a.get(s);
    var o = e.apply(this, r);
    return n.cache = a.set(s, o) || a, o;
  };
  return n.cache = new (Cs.Cache || wl)(), n;
}
Cs.Cache = wl;
var yp = Cs, Dp = yp, Ep = 500;
function wp(e) {
  var t = Dp(e, function(r) {
    return n.size === Ep && n.clear(), r;
  }), n = t.cache;
  return t;
}
var Op = wp, $p = Op, kp = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Np = /\\(\\)?/g, Tp = $p(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(kp, function(n, r, s, a) {
    t.push(s ? a.replace(Np, "$1") : r || n);
  }), t;
}), Ip = Tp;
function Mp(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, s = Array(r); ++n < r; )
    s[n] = t(e[n], n, e);
  return s;
}
var Cp = Mp, To = Ea, Pp = Cp, Lp = Lt, Sp = Ns, Ap = 1 / 0, Io = To ? To.prototype : void 0, Mo = Io ? Io.toString : void 0;
function Ol(e) {
  if (typeof e == "string")
    return e;
  if (Lp(e))
    return Pp(e, Ol) + "";
  if (Sp(e))
    return Mo ? Mo.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Ap ? "-0" : t;
}
var xp = Ol, Rp = xp;
function Fp(e) {
  return e == null ? "" : Rp(e);
}
var Yp = Fp, Vp = Lt, Up = Ts, jp = Ip, Wp = Yp;
function Hp(e, t) {
  return Vp(e) ? e : Up(e, t) ? [e] : jp(Wp(e));
}
var $l = Hp, Bp = Ns, Gp = 1 / 0;
function Kp(e) {
  if (typeof e == "string" || Bp(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Gp ? "-0" : t;
}
var Na = Kp, qp = $l, zp = Na;
function Xp(e, t) {
  t = qp(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[zp(t[n++])];
  return n && n == r ? e : void 0;
}
var kl = Xp, Zp = kl;
function Jp(e, t, n) {
  var r = e == null ? void 0 : Zp(e, t);
  return r === void 0 ? n : r;
}
var Dn = Jp, Qp = Cn, eh = function() {
  try {
    var e = Qp(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Nl = eh, Co = Nl;
function th(e, t, n) {
  t == "__proto__" && Co ? Co(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
var Ta = th, nh = Ta, rh = sr, ah = Object.prototype, sh = ah.hasOwnProperty;
function oh(e, t, n) {
  var r = e[t];
  (!(sh.call(e, t) && rh(r, n)) || n === void 0 && !(t in e)) && nh(e, t, n);
}
var ih = oh, lh = 9007199254740991, uh = /^(?:0|[1-9]\d*)$/;
function ch(e, t) {
  var n = typeof e;
  return t = t ?? lh, !!t && (n == "number" || n != "symbol" && uh.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Ps = ch;
function dh(e) {
  return function(t, n, r) {
    for (var s = -1, a = Object(t), o = r(t), i = o.length; i--; ) {
      var l = o[e ? i : ++s];
      if (n(a[l], l, a) === !1)
        break;
    }
    return t;
  };
}
var fh = dh, vh = fh, mh = vh(), Tl = mh;
function ph(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var hh = ph, gh = Gt, _h = St, bh = "[object Arguments]";
function yh(e) {
  return _h(e) && gh(e) == bh;
}
var Dh = yh, Po = Dh, Eh = St, Il = Object.prototype, wh = Il.hasOwnProperty, Oh = Il.propertyIsEnumerable, $h = Po(function() {
  return arguments;
}()) ? Po : function(e) {
  return Eh(e) && wh.call(e, "callee") && !Oh.call(e, "callee");
}, Ls = $h, er = {}, kh = {
  get exports() {
    return er;
  },
  set exports(e) {
    er = e;
  }
};
function Nh() {
  return !1;
}
var Th = Nh;
(function(e, t) {
  var n = Bt, r = Th, s = t && !t.nodeType && t, a = s && !0 && e && !e.nodeType && e, o = a && a.exports === s, i = o ? n.Buffer : void 0, l = i ? i.isBuffer : void 0, u = l || r;
  e.exports = u;
})(kh, er);
var Ih = 9007199254740991;
function Mh(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Ih;
}
var Ss = Mh, Ch = Gt, Ph = Ss, Lh = St, Sh = "[object Arguments]", Ah = "[object Array]", xh = "[object Boolean]", Rh = "[object Date]", Fh = "[object Error]", Yh = "[object Function]", Vh = "[object Map]", Uh = "[object Number]", jh = "[object Object]", Wh = "[object RegExp]", Hh = "[object Set]", Bh = "[object String]", Gh = "[object WeakMap]", Kh = "[object ArrayBuffer]", qh = "[object DataView]", zh = "[object Float32Array]", Xh = "[object Float64Array]", Zh = "[object Int8Array]", Jh = "[object Int16Array]", Qh = "[object Int32Array]", eg = "[object Uint8Array]", tg = "[object Uint8ClampedArray]", ng = "[object Uint16Array]", rg = "[object Uint32Array]", xe = {};
xe[zh] = xe[Xh] = xe[Zh] = xe[Jh] = xe[Qh] = xe[eg] = xe[tg] = xe[ng] = xe[rg] = !0;
xe[Sh] = xe[Ah] = xe[Kh] = xe[xh] = xe[qh] = xe[Rh] = xe[Fh] = xe[Yh] = xe[Vh] = xe[Uh] = xe[jh] = xe[Wh] = xe[Hh] = xe[Bh] = xe[Gh] = !1;
function ag(e) {
  return Lh(e) && Ph(e.length) && !!xe[Ch(e)];
}
var sg = ag, og = sg, ig = Dl, Lo = Cr, So = Lo && Lo.isTypedArray, lg = So ? ig(So) : og, As = lg, ug = hh, cg = Ls, dg = Lt, fg = er, vg = Ps, mg = As, pg = Object.prototype, hg = pg.hasOwnProperty;
function gg(e, t) {
  var n = dg(e), r = !n && cg(e), s = !n && !r && fg(e), a = !n && !r && !s && mg(e), o = n || r || s || a, i = o ? ug(e.length, String) : [], l = i.length;
  for (var u in e)
    (t || hg.call(e, u)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    s && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    vg(u, l))) && i.push(u);
  return i;
}
var Ml = gg, _g = Object.prototype;
function bg(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || _g;
  return e === n;
}
var xs = bg;
function yg(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var Cl = yg, Dg = Cl, Eg = Dg(Object.keys, Object), wg = Eg, Og = xs, $g = wg, kg = Object.prototype, Ng = kg.hasOwnProperty;
function Tg(e) {
  if (!Og(e))
    return $g(e);
  var t = [];
  for (var n in Object(e))
    Ng.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
var Ig = Tg, Mg = Mn, Cg = Ss;
function Pg(e) {
  return e != null && Cg(e.length) && !Mg(e);
}
var Vr = Pg, Lg = Ml, Sg = Ig, Ag = Vr;
function xg(e) {
  return Ag(e) ? Lg(e) : Sg(e);
}
var Rs = xg, Rg = Tl, Fg = Rs;
function Yg(e, t) {
  return e && Rg(e, t, Fg);
}
var Pl = Yg, Vg = $a;
function Ug() {
  this.__data__ = new Vg(), this.size = 0;
}
var jg = Ug;
function Wg(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
var Hg = Wg;
function Bg(e) {
  return this.__data__.get(e);
}
var Gg = Bg;
function Kg(e) {
  return this.__data__.has(e);
}
var qg = Kg, zg = $a, Xg = Is, Zg = Ms, Jg = 200;
function Qg(e, t) {
  var n = this.__data__;
  if (n instanceof zg) {
    var r = n.__data__;
    if (!Xg || r.length < Jg - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new Zg(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
var e_ = Qg, t_ = $a, n_ = jg, r_ = Hg, a_ = Gg, s_ = qg, o_ = e_;
function lr(e) {
  var t = this.__data__ = new t_(e);
  this.size = t.size;
}
lr.prototype.clear = n_;
lr.prototype.delete = r_;
lr.prototype.get = a_;
lr.prototype.has = s_;
lr.prototype.set = o_;
var Fs = lr, i_ = "__lodash_hash_undefined__";
function l_(e) {
  return this.__data__.set(e, i_), this;
}
var u_ = l_;
function c_(e) {
  return this.__data__.has(e);
}
var d_ = c_, f_ = Ms, v_ = u_, m_ = d_;
function ra(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new f_(); ++t < n; )
    this.add(e[t]);
}
ra.prototype.add = ra.prototype.push = v_;
ra.prototype.has = m_;
var p_ = ra;
function h_(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
var Ll = h_;
function g_(e, t) {
  return e.has(t);
}
var __ = g_, b_ = p_, y_ = Ll, D_ = __, E_ = 1, w_ = 2;
function O_(e, t, n, r, s, a) {
  var o = n & E_, i = e.length, l = t.length;
  if (i != l && !(o && l > i))
    return !1;
  var u = a.get(e), c = a.get(t);
  if (u && c)
    return u == t && c == e;
  var m = -1, f = !0, v = n & w_ ? new b_() : void 0;
  for (a.set(e, t), a.set(t, e); ++m < i; ) {
    var E = e[m], y = t[m];
    if (r)
      var b = o ? r(y, E, m, t, e, a) : r(E, y, m, e, t, a);
    if (b !== void 0) {
      if (b)
        continue;
      f = !1;
      break;
    }
    if (v) {
      if (!y_(t, function(d, g) {
        if (!D_(v, g) && (E === d || s(E, d, n, r, a)))
          return v.push(g);
      })) {
        f = !1;
        break;
      }
    } else if (!(E === y || s(E, y, n, r, a))) {
      f = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), f;
}
var Sl = O_, $_ = Bt, k_ = $_.Uint8Array, Al = k_;
function N_(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, s) {
    n[++t] = [s, r];
  }), n;
}
var T_ = N_;
function I_(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var M_ = I_, Ao = Ea, xo = Al, C_ = sr, P_ = Sl, L_ = T_, S_ = M_, A_ = 1, x_ = 2, R_ = "[object Boolean]", F_ = "[object Date]", Y_ = "[object Error]", V_ = "[object Map]", U_ = "[object Number]", j_ = "[object RegExp]", W_ = "[object Set]", H_ = "[object String]", B_ = "[object Symbol]", G_ = "[object ArrayBuffer]", K_ = "[object DataView]", Ro = Ao ? Ao.prototype : void 0, Fa = Ro ? Ro.valueOf : void 0;
function q_(e, t, n, r, s, a, o) {
  switch (n) {
    case K_:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case G_:
      return !(e.byteLength != t.byteLength || !a(new xo(e), new xo(t)));
    case R_:
    case F_:
    case U_:
      return C_(+e, +t);
    case Y_:
      return e.name == t.name && e.message == t.message;
    case j_:
    case H_:
      return e == t + "";
    case V_:
      var i = L_;
    case W_:
      var l = r & A_;
      if (i || (i = S_), e.size != t.size && !l)
        return !1;
      var u = o.get(e);
      if (u)
        return u == t;
      r |= x_, o.set(e, t);
      var c = P_(i(e), i(t), r, s, a, o);
      return o.delete(e), c;
    case B_:
      if (Fa)
        return Fa.call(e) == Fa.call(t);
  }
  return !1;
}
var z_ = q_;
function X_(e, t) {
  for (var n = -1, r = t.length, s = e.length; ++n < r; )
    e[s + n] = t[n];
  return e;
}
var Z_ = X_, J_ = Z_, Q_ = Lt;
function eb(e, t, n) {
  var r = t(e);
  return Q_(e) ? r : J_(r, n(e));
}
var tb = eb;
function nb(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, s = 0, a = []; ++n < r; ) {
    var o = e[n];
    t(o, n, e) && (a[s++] = o);
  }
  return a;
}
var rb = nb;
function ab() {
  return [];
}
var sb = ab, ob = rb, ib = sb, lb = Object.prototype, ub = lb.propertyIsEnumerable, Fo = Object.getOwnPropertySymbols, cb = Fo ? function(e) {
  return e == null ? [] : (e = Object(e), ob(Fo(e), function(t) {
    return ub.call(e, t);
  }));
} : ib, db = cb, fb = tb, vb = db, mb = Rs;
function pb(e) {
  return fb(e, mb, vb);
}
var hb = pb, Yo = hb, gb = 1, _b = Object.prototype, bb = _b.hasOwnProperty;
function yb(e, t, n, r, s, a) {
  var o = n & gb, i = Yo(e), l = i.length, u = Yo(t), c = u.length;
  if (l != c && !o)
    return !1;
  for (var m = l; m--; ) {
    var f = i[m];
    if (!(o ? f in t : bb.call(t, f)))
      return !1;
  }
  var v = a.get(e), E = a.get(t);
  if (v && E)
    return v == t && E == e;
  var y = !0;
  a.set(e, t), a.set(t, e);
  for (var b = o; ++m < l; ) {
    f = i[m];
    var d = e[f], g = t[f];
    if (r)
      var k = o ? r(g, d, f, t, e, a) : r(d, g, f, e, t, a);
    if (!(k === void 0 ? d === g || s(d, g, n, r, a) : k)) {
      y = !1;
      break;
    }
    b || (b = f == "constructor");
  }
  if (y && !b) {
    var _ = e.constructor, M = t.constructor;
    _ != M && "constructor" in e && "constructor" in t && !(typeof _ == "function" && _ instanceof _ && typeof M == "function" && M instanceof M) && (y = !1);
  }
  return a.delete(e), a.delete(t), y;
}
var Db = yb, Eb = Cn, wb = Bt, Ob = Eb(wb, "DataView"), $b = Ob, kb = Cn, Nb = Bt, Tb = kb(Nb, "Promise"), Ib = Tb, Mb = Cn, Cb = Bt, Pb = Mb(Cb, "Set"), Lb = Pb, Sb = Cn, Ab = Bt, xb = Sb(Ab, "WeakMap"), Rb = xb, Ka = $b, qa = Is, za = Ib, Xa = Lb, Za = Rb, xl = Gt, ur = El, Vo = "[object Map]", Fb = "[object Object]", Uo = "[object Promise]", jo = "[object Set]", Wo = "[object WeakMap]", Ho = "[object DataView]", Yb = ur(Ka), Vb = ur(qa), Ub = ur(za), jb = ur(Xa), Wb = ur(Za), yn = xl;
(Ka && yn(new Ka(new ArrayBuffer(1))) != Ho || qa && yn(new qa()) != Vo || za && yn(za.resolve()) != Uo || Xa && yn(new Xa()) != jo || Za && yn(new Za()) != Wo) && (yn = function(e) {
  var t = xl(e), n = t == Fb ? e.constructor : void 0, r = n ? ur(n) : "";
  if (r)
    switch (r) {
      case Yb:
        return Ho;
      case Vb:
        return Vo;
      case Ub:
        return Uo;
      case jb:
        return jo;
      case Wb:
        return Wo;
    }
  return t;
});
var Hb = yn, Ya = Fs, Bb = Sl, Gb = z_, Kb = Db, Bo = Hb, Go = Lt, Ko = er, qb = As, zb = 1, qo = "[object Arguments]", zo = "[object Array]", Gr = "[object Object]", Xb = Object.prototype, Xo = Xb.hasOwnProperty;
function Zb(e, t, n, r, s, a) {
  var o = Go(e), i = Go(t), l = o ? zo : Bo(e), u = i ? zo : Bo(t);
  l = l == qo ? Gr : l, u = u == qo ? Gr : u;
  var c = l == Gr, m = u == Gr, f = l == u;
  if (f && Ko(e)) {
    if (!Ko(t))
      return !1;
    o = !0, c = !1;
  }
  if (f && !c)
    return a || (a = new Ya()), o || qb(e) ? Bb(e, t, n, r, s, a) : Gb(e, t, l, n, r, s, a);
  if (!(n & zb)) {
    var v = c && Xo.call(e, "__wrapped__"), E = m && Xo.call(t, "__wrapped__");
    if (v || E) {
      var y = v ? e.value() : e, b = E ? t.value() : t;
      return a || (a = new Ya()), s(y, b, n, r, a);
    }
  }
  return f ? (a || (a = new Ya()), Kb(e, t, n, r, s, a)) : !1;
}
var Jb = Zb, Qb = Jb, Zo = St;
function Rl(e, t, n, r, s) {
  return e === t ? !0 : e == null || t == null || !Zo(e) && !Zo(t) ? e !== e && t !== t : Qb(e, t, n, r, Rl, s);
}
var Fl = Rl, e1 = Fs, t1 = Fl, n1 = 1, r1 = 2;
function a1(e, t, n, r) {
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
      var m = new e1();
      if (r)
        var f = r(u, c, l, e, t, m);
      if (!(f === void 0 ? t1(c, u, n1 | r1, r, m) : f))
        return !1;
    }
  }
  return !0;
}
var s1 = a1, o1 = tn;
function i1(e) {
  return e === e && !o1(e);
}
var Yl = i1, l1 = Yl, u1 = Rs;
function c1(e) {
  for (var t = u1(e), n = t.length; n--; ) {
    var r = t[n], s = e[r];
    t[n] = [r, s, l1(s)];
  }
  return t;
}
var d1 = c1;
function f1(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
var Vl = f1, v1 = s1, m1 = d1, p1 = Vl;
function h1(e) {
  var t = m1(e);
  return t.length == 1 && t[0][2] ? p1(t[0][0], t[0][1]) : function(n) {
    return n === e || v1(n, e, t);
  };
}
var g1 = h1;
function _1(e, t) {
  return e != null && t in Object(e);
}
var b1 = _1, y1 = $l, D1 = Ls, E1 = Lt, w1 = Ps, O1 = Ss, $1 = Na;
function k1(e, t, n) {
  t = y1(t, e);
  for (var r = -1, s = t.length, a = !1; ++r < s; ) {
    var o = $1(t[r]);
    if (!(a = e != null && n(e, o)))
      break;
    e = e[o];
  }
  return a || ++r != s ? a : (s = e == null ? 0 : e.length, !!s && O1(s) && w1(o, s) && (E1(e) || D1(e)));
}
var Ul = k1, N1 = b1, T1 = Ul;
function I1(e, t) {
  return e != null && T1(e, t, N1);
}
var M1 = I1, C1 = Fl, P1 = Dn, L1 = M1, S1 = Ts, A1 = Yl, x1 = Vl, R1 = Na, F1 = 1, Y1 = 2;
function V1(e, t) {
  return S1(e) && A1(t) ? x1(R1(e), t) : function(n) {
    var r = P1(n, e);
    return r === void 0 && r === t ? L1(n, e) : C1(t, r, F1 | Y1);
  };
}
var U1 = V1;
function j1(e) {
  return e;
}
var Ys = j1;
function W1(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var H1 = W1, B1 = kl;
function G1(e) {
  return function(t) {
    return B1(t, e);
  };
}
var K1 = G1, q1 = H1, z1 = K1, X1 = Ts, Z1 = Na;
function J1(e) {
  return X1(e) ? q1(Z1(e)) : z1(e);
}
var Q1 = J1, ey = g1, ty = U1, ny = Ys, ry = Lt, ay = Q1;
function sy(e) {
  return typeof e == "function" ? e : e == null ? ny : typeof e == "object" ? ry(e) ? ty(e[0], e[1]) : ey(e) : ay(e);
}
var jl = sy, oy = Ta, iy = Pl, ly = jl;
function uy(e, t) {
  var n = {};
  return t = ly(t), iy(e, function(r, s, a) {
    oy(n, s, t(r, s, a));
  }), n;
}
var cy = uy;
function dy(e, t, n) {
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
var Wl = dy, fy = Wl, Jo = Math.max;
function vy(e, t, n) {
  return t = Jo(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, s = -1, a = Jo(r.length - t, 0), o = Array(a); ++s < a; )
      o[s] = r[t + s];
    s = -1;
    for (var i = Array(t + 1); ++s < t; )
      i[s] = r[s];
    return i[t] = n(o), fy(e, this, i);
  };
}
var my = vy;
function py(e) {
  return function() {
    return e;
  };
}
var hy = py, gy = hy, Qo = Nl, _y = Ys, by = Qo ? function(e, t) {
  return Qo(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: gy(t),
    writable: !0
  });
} : _y, yy = by, Dy = 800, Ey = 16, wy = Date.now;
function Oy(e) {
  var t = 0, n = 0;
  return function() {
    var r = wy(), s = Ey - (r - n);
    if (n = r, s > 0) {
      if (++t >= Dy)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var $y = Oy, ky = yy, Ny = $y, Ty = Ny(ky), Iy = Ty, My = Ys, Cy = my, Py = Iy;
function Ly(e, t) {
  return Py(Cy(e, t, My), e + "");
}
var Vs = Ly, Sy = sr, Ay = Vr, xy = Ps, Ry = tn;
function Fy(e, t, n) {
  if (!Ry(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? Ay(n) && xy(t, n.length) : r == "string" && t in n) ? Sy(n[t], e) : !1;
}
var Us = Fy;
function Yy(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var Vy = Yy, Uy = tn, jy = xs, Wy = Vy, Hy = Object.prototype, By = Hy.hasOwnProperty;
function Gy(e) {
  if (!Uy(e))
    return Wy(e);
  var t = jy(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !By.call(e, r)) || n.push(r);
  return n;
}
var Ky = Gy, qy = Ml, zy = Ky, Xy = Vr;
function Zy(e) {
  return Xy(e) ? qy(e, !0) : zy(e);
}
var js = Zy, Jy = Vs, Qy = sr, e0 = Us, t0 = js, Hl = Object.prototype, n0 = Hl.hasOwnProperty, r0 = Jy(function(e, t) {
  e = Object(e);
  var n = -1, r = t.length, s = r > 2 ? t[2] : void 0;
  for (s && e0(t[0], t[1], s) && (r = 1); ++n < r; )
    for (var a = t[n], o = t0(a), i = -1, l = o.length; ++i < l; ) {
      var u = o[i], c = e[u];
      (c === void 0 || Qy(c, Hl[u]) && !n0.call(e, u)) && (e[u] = a[u]);
    }
  return e;
}), ei = r0, a0 = Ta, s0 = sr;
function o0(e, t, n) {
  (n !== void 0 && !s0(e[t], n) || n === void 0 && !(t in e)) && a0(e, t, n);
}
var Bl = o0, aa = {}, i0 = {
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
    var m = u.length, f = i ? i(m) : new u.constructor(m);
    return u.copy(f), f;
  }
  e.exports = l;
})(i0, aa);
var ti = Al;
function l0(e) {
  var t = new e.constructor(e.byteLength);
  return new ti(t).set(new ti(e)), t;
}
var u0 = l0, c0 = u0;
function d0(e, t) {
  var n = t ? c0(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var f0 = d0;
function v0(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
var m0 = v0, p0 = tn, ni = Object.create, h0 = function() {
  function e() {
  }
  return function(t) {
    if (!p0(t))
      return {};
    if (ni)
      return ni(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}(), g0 = h0, _0 = Cl, b0 = _0(Object.getPrototypeOf, Object), Gl = b0, y0 = g0, D0 = Gl, E0 = xs;
function w0(e) {
  return typeof e.constructor == "function" && !E0(e) ? y0(D0(e)) : {};
}
var O0 = w0, $0 = Vr, k0 = St;
function N0(e) {
  return k0(e) && $0(e);
}
var T0 = N0, I0 = Gt, M0 = Gl, C0 = St, P0 = "[object Object]", L0 = Function.prototype, S0 = Object.prototype, Kl = L0.toString, A0 = S0.hasOwnProperty, x0 = Kl.call(Object);
function R0(e) {
  if (!C0(e) || I0(e) != P0)
    return !1;
  var t = M0(e);
  if (t === null)
    return !0;
  var n = A0.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && Kl.call(n) == x0;
}
var F0 = R0;
function Y0(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
var ql = Y0, V0 = ih, U0 = Ta;
function j0(e, t, n, r) {
  var s = !n;
  n || (n = {});
  for (var a = -1, o = t.length; ++a < o; ) {
    var i = t[a], l = r ? r(n[i], e[i], i, n, e) : void 0;
    l === void 0 && (l = e[i]), s ? U0(n, i, l) : V0(n, i, l);
  }
  return n;
}
var W0 = j0, H0 = W0, B0 = js;
function G0(e) {
  return H0(e, B0(e));
}
var K0 = G0, ri = Bl, q0 = aa, z0 = f0, X0 = m0, Z0 = O0, ai = Ls, si = Lt, J0 = T0, Q0 = er, eD = Mn, tD = tn, nD = F0, rD = As, oi = ql, aD = K0;
function sD(e, t, n, r, s, a, o) {
  var i = oi(e, n), l = oi(t, n), u = o.get(l);
  if (u) {
    ri(e, n, u);
    return;
  }
  var c = a ? a(i, l, n + "", e, t, o) : void 0, m = c === void 0;
  if (m) {
    var f = si(l), v = !f && Q0(l), E = !f && !v && rD(l);
    c = l, f || v || E ? si(i) ? c = i : J0(i) ? c = X0(i) : v ? (m = !1, c = q0(l, !0)) : E ? (m = !1, c = z0(l, !0)) : c = [] : nD(l) || ai(l) ? (c = i, ai(i) ? c = aD(i) : (!tD(i) || eD(i)) && (c = Z0(l))) : m = !1;
  }
  m && (o.set(l, c), s(c, l, r, a, o), o.delete(l)), ri(e, n, c);
}
var oD = sD, iD = Fs, lD = Bl, uD = Tl, cD = oD, dD = tn, fD = js, vD = ql;
function zl(e, t, n, r, s) {
  e !== t && uD(t, function(a, o) {
    if (s || (s = new iD()), dD(a))
      cD(e, t, o, n, zl, r, s);
    else {
      var i = r ? r(vD(e, o), a, o + "", e, t, s) : void 0;
      i === void 0 && (i = a), lD(e, o, i);
    }
  }, fD);
}
var Xl = zl, mD = Xl, ii = tn;
function Zl(e, t, n, r, s, a) {
  return ii(e) && ii(t) && (a.set(t, e), mD(e, t, void 0, Zl, a), a.delete(t)), e;
}
var pD = Zl, hD = Vs, gD = Us;
function _D(e) {
  return hD(function(t, n) {
    var r = -1, s = n.length, a = s > 1 ? n[s - 1] : void 0, o = s > 2 ? n[2] : void 0;
    for (a = e.length > 3 && typeof a == "function" ? (s--, a) : void 0, o && gD(n[0], n[1], o) && (a = s < 3 ? void 0 : a, s = 1), t = Object(t); ++r < s; ) {
      var i = n[r];
      i && e(t, i, r, a);
    }
    return t;
  });
}
var bD = _D, yD = Xl, DD = bD, ED = DD(function(e, t, n, r) {
  yD(e, t, n, r);
}), wD = ED, OD = Wl, $D = Vs, kD = pD, ND = wD, TD = $D(function(e) {
  return e.push(void 0, kD), OD(ND, void 0, e);
}), Pr = TD, ID = Object.prototype, MD = ID.hasOwnProperty;
function CD(e, t) {
  return e != null && MD.call(e, t);
}
var PD = CD, LD = PD, SD = Ul;
function AD(e, t) {
  return e != null && SD(e, t, LD);
}
var Jl = AD, xD = Vr;
function RD(e, t) {
  return function(n, r) {
    if (n == null)
      return n;
    if (!xD(n))
      return e(n, r);
    for (var s = n.length, a = t ? s : -1, o = Object(n); (t ? a-- : ++a < s) && r(o[a], a, o) !== !1; )
      ;
    return n;
  };
}
var FD = RD, YD = Pl, VD = FD, UD = VD(YD), jD = UD;
function WD(e) {
  return e && e.length ? e[0] : void 0;
}
var Ql = WD;
function HD(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
var Wn = HD, BD = jD;
function GD(e, t) {
  var n;
  return BD(e, function(r, s, a) {
    return n = t(r, s, a), !n;
  }), !!n;
}
var KD = GD, qD = Ll, zD = jl, XD = KD, ZD = Lt, JD = Us;
function QD(e, t, n) {
  var r = ZD(e) ? qD : XD;
  return n && JD(e, t, n) && (t = void 0), r(e, zD(t));
}
var eE = QD;
const tE = (e) => Object.prototype.toString.call(e).slice(8, -1), Bn = (e) => fv(e) && !isNaN(e.getTime()), Jt = (e) => tE(e) === "Object", Ws = Jl, li = (e, t) => eE(t, (n) => Jl(e, n)), Me = (e, t, n = "0") => {
  for (e = e != null ? String(e) : "", t = t || 2; e.length < t; )
    e = `${n}${e}`;
  return e;
}, wt = (e) => Array.isArray(e), Xt = (e) => wt(e) && e.length > 0, sa = (e) => e == null ? e ?? null : document && Yt(e) ? document.querySelector(e) : e.$el ?? e, cn = (e, t, n, r = void 0) => {
  e.removeEventListener(t, n, r);
}, dn = (e, t, n, r = void 0) => (e.addEventListener(t, n, r), () => cn(e, t, n, r)), Zr = (e, t) => !!e && !!t && (e === t || e.contains(t)), Kr = (e, t) => {
  (e.key === " " || e.key === "Enter") && (t(e), e.preventDefault());
}, eu = (e, ...t) => {
  const n = {};
  let r;
  for (r in e)
    t.includes(r) || (n[r] = e[r]);
  return n;
}, tu = (e, t) => {
  const n = {};
  return t.forEach((r) => {
    r in e && (n[r] = e[r]);
  }), n;
};
function nE(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
const oa = () => {
  function e() {
    return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
  }
  return `${e() + e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`;
}, rE = ["base", "start", "end", "startEnd"], aE = [
  "class",
  "wrapperClass",
  "contentClass",
  "style",
  "contentStyle",
  "color",
  "fillMode"
], sE = { base: {}, start: {}, end: {} };
function Hs(e, t, n = sE) {
  let r = e, s = {};
  t === !0 || Yt(t) ? (r = Yt(t) ? t : r, s = { ...n }) : Jt(t) && (li(t, rE) ? s = { ...t } : s = {
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
    i === !0 || Yt(i) ? (l = Yt(i) ? i : l, a[o] = { color: l }) : Jt(i) && (li(i, aE) ? a[o] = { ...i } : a[o] = {}), Pr(a[o], { color: l });
  }), a;
}
class oE {
  constructor() {
    se(this, "type", "highlight");
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
    se(this, "type", ""), se(this, "collectionType", ""), this.type = t, this.collectionType = n;
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
class iE extends Bs {
  constructor() {
    super("content", "content");
  }
  normalizeConfig(t, n) {
    return Hs("base", n);
  }
}
class lE extends Bs {
  constructor() {
    super("dot", "dots");
  }
}
class uE extends Bs {
  constructor() {
    super("bar", "bars");
  }
}
class cE {
  constructor(t) {
    se(this, "color"), se(this, "renderers", [
      new iE(),
      new oE(),
      new lE(),
      new uE()
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
const dE = 300, fE = 60, vE = 80, mE = {
  maxSwipeTime: dE,
  minHorizontalSwipeDistance: fE,
  maxVerticalSwipeDistance: vE
}, pE = "MMMM YYYY", hE = "W", gE = "MMM", _E = "h A", bE = [
  "L",
  "YYYY-MM-DD",
  "YYYY/MM/DD"
], yE = [
  "L h:mm A",
  "YYYY-MM-DD h:mm A",
  "YYYY/MM/DD h:mm A"
], DE = [
  "L HH:mm",
  "YYYY-MM-DD HH:mm",
  "YYYY/MM/DD HH:mm"
], EE = [
  "h:mm A"
], wE = [
  "HH:mm"
], OE = "WWW, MMM D, YYYY", $E = [
  "L",
  "YYYY-MM-DD",
  "YYYY/MM/DD"
], kE = "iso", NE = "YYYY-MM-DDTHH:mm:ss.SSSZ", TE = {
  title: pE,
  weekdays: hE,
  navMonths: gE,
  hours: _E,
  input: bE,
  inputDateTime: yE,
  inputDateTime24hr: DE,
  inputTime: EE,
  inputTime24hr: wE,
  dayPopover: OE,
  data: $E,
  model: kE,
  iso: NE
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
const IE = Object.entries(Qt).reduce(
  (e, [t, { dow: n, L: r }]) => (e[t] = {
    id: t,
    firstDayOfWeek: n,
    masks: { L: r }
  }, e),
  {}
), ME = {
  componentPrefix: "V",
  color: "blue",
  isDark: !1,
  navVisibility: "click",
  titlePosition: "center",
  transition: "slide-h",
  touch: mE,
  masks: TE,
  locales: IE,
  datePicker: {
    updateOnInput: !0,
    inputDebounce: 1e3,
    popover: {
      visibility: "hover-focus",
      placement: "bottom-start",
      isInteractive: !0
    }
  }
}, Ja = hs(ME), CE = C(() => cy(Ja.locales, (e) => (e.masks = Pr(e.masks, Ja.masks), e))), mn = (e) => typeof window < "u" && Ws(window.__vcalendar__, e) ? Dn(window.__vcalendar__, e) : Dn(Ja, e);
var ia = {}, PE = {
  get exports() {
    return ia;
  },
  set exports(e) {
    ia = e;
  }
}, la = {}, LE = {
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
})(LE, la);
var ua = {}, SE = {
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
})(SE, ua);
var ca = {}, AE = {
  get exports() {
    return ca;
  },
  set exports(e) {
    ca = e;
  }
}, da = {}, xE = {
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
      for (var c = l.formatToParts(u), m = [], f = 0; f < c.length; f++) {
        var v = r[c[f].type];
        v >= 0 && (m[v] = parseInt(c[f].value, 10));
      }
      return m;
    } catch (E) {
      if (E instanceof RangeError)
        return [NaN];
      throw E;
    }
  }
  function a(l, u) {
    var c = l.format(u).replace(/\u200E/g, ""), m = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(c);
    return [m[3], m[1], m[2], m[4], m[5], m[6]];
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
})(xE, da);
var fa = {}, RE = {
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
})(RE, fa);
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = l;
  var n = s(da), r = s(fa);
  function s(y) {
    return y && y.__esModule ? y : { default: y };
  }
  var a = 36e5, o = 6e4, i = {
    timezone: /([Z+-].*)$/,
    timezoneZ: /^(Z)$/,
    timezoneHH: /^([+-]\d{2})$/,
    timezoneHHMM: /^([+-]\d{2}):?(\d{2})$/
  };
  function l(y, b, d) {
    var g, k;
    if (!y || (g = i.timezoneZ.exec(y), g))
      return 0;
    var _;
    if (g = i.timezoneHH.exec(y), g)
      return _ = parseInt(g[1], 10), f(_) ? -(_ * a) : NaN;
    if (g = i.timezoneHHMM.exec(y), g) {
      _ = parseInt(g[1], 10);
      var M = parseInt(g[2], 10);
      return f(_, M) ? (k = Math.abs(_) * a + M * o, _ > 0 ? -k : k) : NaN;
    }
    if (E(y)) {
      b = new Date(b || Date.now());
      var N = d ? b : u(b), A = c(N, y), P = d ? A : m(b, A, y);
      return -P;
    }
    return NaN;
  }
  function u(y) {
    return (0, r.default)(y.getFullYear(), y.getMonth(), y.getDate(), y.getHours(), y.getMinutes(), y.getSeconds(), y.getMilliseconds());
  }
  function c(y, b) {
    var d = (0, n.default)(y, b), g = (0, r.default)(d[0], d[1] - 1, d[2], d[3] % 24, d[4], d[5], 0).getTime(), k = y.getTime(), _ = k % 1e3;
    return k -= _ >= 0 ? _ : 1e3 + _, g - k;
  }
  function m(y, b, d) {
    var g = y.getTime(), k = g - b, _ = c(new Date(k), d);
    if (b === _)
      return b;
    k -= _ - b;
    var M = c(new Date(k), d);
    return _ === M ? _ : Math.max(_, M);
  }
  function f(y, b) {
    return -23 <= y && y <= 23 && (b == null || 0 <= b && b <= 59);
  }
  var v = {};
  function E(y) {
    if (v[y])
      return !0;
    try {
      return new Intl.DateTimeFormat(void 0, {
        timeZone: y
      }), v[y] = !0, !0;
    } catch {
      return !1;
    }
  }
  e.exports = t.default;
})(AE, ca);
var va = {}, FE = {
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
})(FE, va);
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = m;
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
  function m(P, L) {
    if (arguments.length < 1)
      throw new TypeError("1 argument required, but only " + arguments.length + " present");
    if (P === null)
      return /* @__PURE__ */ new Date(NaN);
    var x = L || {}, U = x.additionalDigits == null ? u : (0, n.default)(x.additionalDigits);
    if (U !== 2 && U !== 1 && U !== 0)
      throw new RangeError("additionalDigits must be 0, 1 or 2");
    if (P instanceof Date || typeof P == "object" && Object.prototype.toString.call(P) === "[object Date]")
      return new Date(P.getTime());
    if (typeof P == "number" || Object.prototype.toString.call(P) === "[object Number]")
      return new Date(P);
    if (!(typeof P == "string" || Object.prototype.toString.call(P) === "[object String]"))
      return /* @__PURE__ */ new Date(NaN);
    var F = f(P), X = v(F.date, U), le = X.year, H = X.restDateString, G = E(H, le);
    if (isNaN(G))
      return /* @__PURE__ */ new Date(NaN);
    if (G) {
      var j = G.getTime(), Y = 0, V;
      if (F.time && (Y = y(F.time), isNaN(Y)))
        return /* @__PURE__ */ new Date(NaN);
      if (F.timeZone || x.timeZone) {
        if (V = (0, s.default)(F.timeZone || x.timeZone, new Date(j + Y)), isNaN(V))
          return /* @__PURE__ */ new Date(NaN);
      } else
        V = (0, r.default)(new Date(j + Y)), V = (0, r.default)(new Date(j + Y + V));
      return new Date(j + Y + V);
    } else
      return /* @__PURE__ */ new Date(NaN);
  }
  function f(P) {
    var L = {}, x = c.dateTimePattern.exec(P), U;
    if (x ? (L.date = x[1], U = x[3]) : (x = c.datePattern.exec(P), x ? (L.date = x[1], U = x[2]) : (L.date = null, U = P)), U) {
      var F = c.timeZone.exec(U);
      F ? (L.time = U.replace(F[1], ""), L.timeZone = F[1].trim()) : L.time = U;
    }
    return L;
  }
  function v(P, L) {
    var x = c.YYY[L], U = c.YYYYY[L], F;
    if (F = c.YYYY.exec(P) || U.exec(P), F) {
      var X = F[1];
      return {
        year: parseInt(X, 10),
        restDateString: P.slice(X.length)
      };
    }
    if (F = c.YY.exec(P) || x.exec(P), F) {
      var le = F[1];
      return {
        year: parseInt(le, 10) * 100,
        restDateString: P.slice(le.length)
      };
    }
    return {
      year: null
    };
  }
  function E(P, L) {
    if (L === null)
      return null;
    var x, U, F, X;
    if (P.length === 0)
      return U = /* @__PURE__ */ new Date(0), U.setUTCFullYear(L), U;
    if (x = c.MM.exec(P), x)
      return U = /* @__PURE__ */ new Date(0), F = parseInt(x[1], 10) - 1, _(L, F) ? (U.setUTCFullYear(L, F), U) : /* @__PURE__ */ new Date(NaN);
    if (x = c.DDD.exec(P), x) {
      U = /* @__PURE__ */ new Date(0);
      var le = parseInt(x[1], 10);
      return M(L, le) ? (U.setUTCFullYear(L, 0, le), U) : /* @__PURE__ */ new Date(NaN);
    }
    if (x = c.MMDD.exec(P), x) {
      U = /* @__PURE__ */ new Date(0), F = parseInt(x[1], 10) - 1;
      var H = parseInt(x[2], 10);
      return _(L, F, H) ? (U.setUTCFullYear(L, F, H), U) : /* @__PURE__ */ new Date(NaN);
    }
    if (x = c.Www.exec(P), x)
      return X = parseInt(x[1], 10) - 1, N(L, X) ? b(L, X) : /* @__PURE__ */ new Date(NaN);
    if (x = c.WwwD.exec(P), x) {
      X = parseInt(x[1], 10) - 1;
      var G = parseInt(x[2], 10) - 1;
      return N(L, X, G) ? b(L, X, G) : /* @__PURE__ */ new Date(NaN);
    }
    return null;
  }
  function y(P) {
    var L, x, U;
    if (L = c.HH.exec(P), L)
      return x = parseFloat(L[1].replace(",", ".")), A(x) ? x % 24 * i : NaN;
    if (L = c.HHMM.exec(P), L)
      return x = parseInt(L[1], 10), U = parseFloat(L[2].replace(",", ".")), A(x, U) ? x % 24 * i + U * l : NaN;
    if (L = c.HHMMSS.exec(P), L) {
      x = parseInt(L[1], 10), U = parseInt(L[2], 10);
      var F = parseFloat(L[3].replace(",", "."));
      return A(x, U, F) ? x % 24 * i + U * l + F * 1e3 : NaN;
    }
    return null;
  }
  function b(P, L, x) {
    L = L || 0, x = x || 0;
    var U = /* @__PURE__ */ new Date(0);
    U.setUTCFullYear(P, 0, 4);
    var F = U.getUTCDay() || 7, X = L * 7 + x + 1 - F;
    return U.setUTCDate(U.getUTCDate() + X), U;
  }
  var d = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], g = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function k(P) {
    return P % 400 === 0 || P % 4 === 0 && P % 100 !== 0;
  }
  function _(P, L, x) {
    if (L < 0 || L > 11)
      return !1;
    if (x != null) {
      if (x < 1)
        return !1;
      var U = k(P);
      if (U && x > g[L] || !U && x > d[L])
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
})(PE, ia);
const YE = /* @__PURE__ */ ff(ia);
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
var VE = {};
function Gs() {
  return VE;
}
function $n(e, t) {
  var n, r, s, a, o, i, l, u;
  at(1, arguments);
  var c = Gs(), m = cr((n = (r = (s = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (o = t.locale) === null || o === void 0 || (i = o.options) === null || i === void 0 ? void 0 : i.weekStartsOn) !== null && s !== void 0 ? s : c.weekStartsOn) !== null && r !== void 0 ? r : (l = c.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(m >= 0 && m <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var f = nn(e), v = f.getDay(), E = (v < m ? 7 : 0) + v - m;
  return f.setDate(f.getDate() - E), f.setHours(0, 0, 0, 0), f;
}
function ui(e) {
  var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
var UE = 6048e5;
function jE(e, t, n) {
  at(2, arguments);
  var r = $n(e, n), s = $n(t, n), a = r.getTime() - ui(r), o = s.getTime() - ui(s);
  return Math.round((a - o) / UE);
}
function WE(e) {
  at(1, arguments);
  var t = nn(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function HE(e) {
  at(1, arguments);
  var t = nn(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function BE(e, t) {
  return at(1, arguments), jE(WE(e), HE(e), t) + 1;
}
function GE(e, t) {
  var n, r, s, a, o, i, l, u;
  at(1, arguments);
  var c = nn(e), m = c.getFullYear(), f = Gs(), v = cr((n = (r = (s = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (o = t.locale) === null || o === void 0 || (i = o.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && s !== void 0 ? s : f.firstWeekContainsDate) !== null && r !== void 0 ? r : (l = f.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(v >= 1 && v <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var E = /* @__PURE__ */ new Date(0);
  E.setFullYear(m + 1, 0, v), E.setHours(0, 0, 0, 0);
  var y = $n(E, t), b = /* @__PURE__ */ new Date(0);
  b.setFullYear(m, 0, v), b.setHours(0, 0, 0, 0);
  var d = $n(b, t);
  return c.getTime() >= y.getTime() ? m + 1 : c.getTime() >= d.getTime() ? m : m - 1;
}
function KE(e, t) {
  var n, r, s, a, o, i, l, u;
  at(1, arguments);
  var c = Gs(), m = cr((n = (r = (s = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (o = t.locale) === null || o === void 0 || (i = o.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && s !== void 0 ? s : c.firstWeekContainsDate) !== null && r !== void 0 ? r : (l = c.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), f = GE(e, t), v = /* @__PURE__ */ new Date(0);
  v.setFullYear(f, 0, m), v.setHours(0, 0, 0, 0);
  var E = $n(v, t);
  return E;
}
var qE = 6048e5;
function zE(e, t) {
  at(1, arguments);
  var n = nn(e), r = $n(n, t).getTime() - KE(n, t).getTime();
  return Math.round(r / qE) + 1;
}
function ma(e) {
  return at(1, arguments), $n(e, {
    weekStartsOn: 1
  });
}
function XE(e) {
  at(1, arguments);
  var t = nn(e), n = t.getFullYear(), r = /* @__PURE__ */ new Date(0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  var s = ma(r), a = /* @__PURE__ */ new Date(0);
  a.setFullYear(n, 0, 4), a.setHours(0, 0, 0, 0);
  var o = ma(a);
  return t.getTime() >= s.getTime() ? n + 1 : t.getTime() >= o.getTime() ? n : n - 1;
}
function ZE(e) {
  at(1, arguments);
  var t = XE(e), n = /* @__PURE__ */ new Date(0);
  n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0);
  var r = ma(n);
  return r;
}
var JE = 6048e5;
function QE(e) {
  at(1, arguments);
  var t = nn(e), n = ma(t).getTime() - ZE(t).getTime();
  return Math.round(n / JE) + 1;
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
function ci(e, t) {
  at(2, arguments);
  var n = cr(t);
  return pa(e, n * 12);
}
var xn = /* @__PURE__ */ ((e) => (e.Any = "any", e.All = "all", e))(xn || {}), nu = /* @__PURE__ */ ((e) => (e.Days = "days", e.Weeks = "weeks", e.Months = "months", e.Years = "years", e))(nu || {}), ru = /* @__PURE__ */ ((e) => (e.Days = "days", e.Weekdays = "weekdays", e.Weeks = "weeks", e.Months = "months", e.Years = "years", e))(ru || {}), au = /* @__PURE__ */ ((e) => (e.OrdinalWeekdays = "ordinalWeekdays", e))(au || {});
class ew {
  constructor(t, n, r) {
    se(this, "validated", !0), this.type = t, this.interval = n, this.from = r, this.from || (console.error(
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
        return _w(this.from.date, n) % this.interval === 0;
      case "months":
        return bw(this.from.date, n) % this.interval === 0;
      case "years":
        return fu(this.from.date, n) % this.interval === 0;
      default:
        return !1;
    }
  }
}
class dr {
  constructor(t, n, r, s) {
    se(this, "components", []), this.type = t, this.validator = r, this.getter = s, this.components = this.normalizeComponents(n);
  }
  static create(t, n) {
    switch (t) {
      case "days":
        return new tw(n);
      case "weekdays":
        return new nw(n);
      case "weeks":
        return new rw(n);
      case "months":
        return new aw(n);
      case "years":
        return new sw(n);
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
class tw extends dr {
  constructor(t) {
    super(
      "days",
      t,
      lw,
      ({ day: n, dayFromEnd: r }) => [n, -r]
    );
  }
}
class nw extends dr {
  constructor(t) {
    super(
      "weekdays",
      t,
      Qa,
      ({ weekday: n }) => [n]
    );
  }
}
class rw extends dr {
  constructor(t) {
    super(
      "weeks",
      t,
      uw,
      ({ week: n, weekFromEnd: r }) => [n, -r]
    );
  }
}
class aw extends dr {
  constructor(t) {
    super("months", t, cw, ({ month: n }) => [
      n
    ]);
  }
}
class sw extends dr {
  constructor(t) {
    super("years", t, Pt, ({ year: n }) => [n]);
  }
}
class ow {
  constructor(t, n) {
    se(this, "components"), this.type = t, this.components = this.normalizeComponents(n);
  }
  normalizeArrayConfig(t) {
    const n = [];
    return t.forEach((r, s) => {
      if (Pt(r)) {
        if (s === 0)
          return;
        if (!di(t[0])) {
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
        if (!di(t[0])) {
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
class iw {
  constructor(t) {
    se(this, "type", "function"), se(this, "validated", !0), this.fn = t, Mn(t) || (console.error(
      "The function rule requires a valid function. This rule will be skipped."
    ), this.validated = !1);
  }
  passes(t) {
    return this.validated ? this.fn(t) : !0;
  }
}
class ha {
  constructor(t, n = {}, r) {
    se(this, "validated", !0), se(this, "config"), se(this, "type", xn.Any), se(this, "from"), se(this, "until"), se(this, "rules", []), se(this, "locale", new _a()), this.parent = r, n.locale && (this.locale = n.locale), this.config = t, Mn(t) ? (this.type = xn.All, this.rules = [new iw(t)]) : wt(t) ? (this.type = xn.Any, this.rules = t.map((s) => new ha(s, n, this))) : Jt(t) ? (this.type = xn.All, this.from = t.from ? this.locale.getDateParts(t.from) : r == null ? void 0 : r.from, this.until = t.until ? this.locale.getDateParts(t.until) : r == null ? void 0 : r.until, this.rules = this.getObjectRules(t)) : (console.error("Rule group configuration must be an object or an array."), this.validated = !1);
  }
  getObjectRules(t) {
    const n = [];
    if (t.every && (Yt(t.every) && (t.every = [1, `${t.every}s`]), wt(t.every))) {
      const [r = 1, s = nu.Days] = t.every;
      n.push(new ew(s, r, this.from));
    }
    return Object.values(ru).forEach((r) => {
      r in t && n.push(dr.create(r, t[r]));
    }), Object.values(au).forEach((r) => {
      r in t && n.push(new ow(r, t[r]));
    }), t.on != null && (wt(t.on) || (t.on = [t.on]), n.push(
      new ha(t.on, { locale: this.locale }, this.parent)
    )), n;
  }
  passes(t) {
    return this.validated ? this.from && t.dayIndex <= this.from.dayIndex || this.until && t.dayIndex >= this.until.dayIndex ? !1 : this.type === xn.Any ? this.rules.some((n) => n.passes(t)) : this.rules.every((n) => n.passes(t)) : !0;
  }
}
function lw(e) {
  return Pt(e) ? e >= 1 && e <= 31 : !1;
}
function Qa(e) {
  return Pt(e) ? e >= 1 && e <= 7 : !1;
}
function uw(e) {
  return Pt(e) ? e >= -6 && e <= -1 || e >= 1 && e <= 6 : !1;
}
function cw(e) {
  return Pt(e) ? e >= 1 && e <= 12 : !1;
}
function di(e) {
  return !(!Pt(e) || e < -5 || e > 5 || e === 0);
}
const dw = {
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
}, rt = 7, fw = 6, su = 1e3, ou = su * 60, iu = ou * 60, Qr = iu * 24, vw = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], mw = ["L", "iso"], yr = {
  milliseconds: [0, 999, 3],
  seconds: [0, 59, 2],
  minutes: [0, 59, 2],
  hours: [0, 23, 2]
}, lu = /d{1,2}|W{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|Z{1,4}|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g, pw = /\[([^]*?)\]/gm, fi = {
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
}, an = /\d\d?/, hw = /\d{3}/, gw = /\d{4}/, gr = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF/]+(\s*?[\u0600-\u06FF]+){1,2}/i, vi = () => {
}, mi = (e) => (t, n, r) => {
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
  d: [an, vi],
  W: [gr, vi],
  M: [
    an,
    (e, t) => {
      e.month = t - 1;
    }
  ],
  MMM: [gr, mi("monthNamesShort")],
  MMMM: [gr, mi("monthNames")],
  YY: [
    an,
    (e, t) => {
      const r = +(/* @__PURE__ */ new Date()).getFullYear().toString().substr(0, 2);
      e.year = +`${t > 68 ? r - 1 : r}${t}`;
    }
  ],
  YYYY: [
    gw,
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
    hw,
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
function uu(e, t) {
  return (Xt(e) && e || [
    Yt(e) && e || "YYYY-MM-DD"
  ]).map(
    (n) => mw.reduce(
      (r, s) => r.replace(s, t.masks[s] || ""),
      n
    )
  );
}
function cu(e) {
  return Jt(e) && "year" in e && "month" in e && "day" in e;
}
function pi(e, t = 1) {
  const n = e.getDay() + 1, r = n >= t ? t - n : -(7 - (t - n));
  return it(e, r);
}
function du(e, t, n) {
  const r = Date.UTC(e, t - 1, n);
  return Ks(/* @__PURE__ */ new Date(0), new Date(r));
}
function Ks(e, t) {
  return Math.round((t.getTime() - e.getTime()) / Qr);
}
function _w(e, t) {
  return Math.ceil(Ks(pi(e), pi(t)) / 7);
}
function fu(e, t) {
  return t.getUTCFullYear() - e.getUTCFullYear();
}
function bw(e, t) {
  return fu(e, t) * 12 + (t.getMonth() - e.getMonth());
}
function vu(e, t = "") {
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
    return YE(c, { timeZone: t });
  }
  return new Date(r, s - 1, a, o, i, l, u);
}
function yw(e, t) {
  let n = new Date(e.getTime());
  t.timezone && (n = new Date(
    e.toLocaleString("en-US", { timeZone: t.timezone })
  ), n.setMilliseconds(e.getMilliseconds()));
  const r = n.getMilliseconds(), s = n.getSeconds(), a = n.getMinutes(), o = n.getHours(), i = r + s * su + a * ou + o * iu, l = n.getMonth() + 1, u = n.getFullYear(), c = t.getMonthParts(l, u), m = n.getDate(), f = c.numDays - m + 1, v = n.getDay() + 1, E = Math.floor((m - 1) / 7 + 1), y = Math.floor((c.numDays - m) / 7 + 1), b = Math.ceil(
    (m + Math.abs(c.firstWeekday - c.firstDayOfWeek)) / 7
  ), d = c.numWeeks - b + 1, g = c.weeknumbers[b], k = du(u, l, m);
  return {
    milliseconds: r,
    seconds: s,
    minutes: a,
    hours: o,
    time: i,
    day: m,
    dayFromEnd: f,
    weekday: v,
    weekdayOrdinal: E,
    weekdayOrdinalFromEnd: y,
    week: b,
    weekFromEnd: d,
    weeknumber: g,
    month: l,
    year: u,
    date: n,
    dateTime: n.getTime(),
    dayIndex: k,
    timezoneOffset: 0,
    isValid: !0
  };
}
function Dw(e, t, n) {
  return `${t}-${e}-${n}`;
}
function Ew(e, t, n) {
  const r = t % 4 === 0 && t % 100 !== 0 || t % 400 === 0, s = new Date(t, e - 1, 1), a = s.getDay() + 1, o = e === 2 && r ? 29 : vw[e - 1], i = n - 1, l = BE(s, {
    weekStartsOn: i
  }), u = [], c = [];
  for (let m = 0; m < l; m++) {
    const f = it(s, m * 7);
    u.push(zE(f, { weekStartsOn: i })), c.push(QE(f));
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
function ww() {
  const e = [];
  for (let s = 0; s < rt; s++)
    e.push(
      vu({
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
  return ww().map((r) => n.format(r));
}
function Ow() {
  const e = [];
  for (let t = 0; t <= 24; t++)
    e.push(new Date(2e3, 0, 1, t));
  return e;
}
function $w(e = void 0) {
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
function mu() {
  const e = [];
  for (let t = 0; t < 12; t++)
    e.push(new Date(2e3, t, 15));
  return e;
}
function hi(e, t = void 0) {
  const n = new Intl.DateTimeFormat(t, {
    month: e,
    timeZone: "UTC"
  });
  return mu().map((r) => n.format(r));
}
function kw(e, t, n) {
  return Pt(t) ? t === e : wt(t) ? t.includes(e) : Mn(t) ? t(e, n) : !(t.min != null && t.min > e || t.max != null && t.max < e || t.interval != null && e % t.interval !== 0);
}
function Dr(e, t, n) {
  const r = [], [s, a, o] = t;
  for (let i = s; i <= a; i++)
    (n == null || kw(i, n, e)) && r.push({
      value: i,
      label: Me(i, o)
    });
  return r;
}
function Nw(e, t) {
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
function Tw(e, t, n, r) {
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
function Iw(e, t) {
  const n = { ...e };
  return Object.entries(t).forEach(([r, s]) => {
    const a = yr[r], o = e[r];
    n[r] = Tw(
      e,
      a,
      o,
      s
    );
  }), n;
}
function gi(e, t, n) {
  return uu(t, n).map((s) => {
    if (typeof s != "string")
      throw new Error("Invalid mask");
    let a = e;
    if (a.length > 1e3)
      return !1;
    let o = !0;
    const i = {};
    if (s.replace(lu, (c) => {
      if (Le[c]) {
        const m = Le[c], f = a.search(m[0]);
        ~f ? a.replace(m[0], (v) => (m[1](i, v, n), a = a.substr(f + v.length), v)) : o = !1;
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
function Mw(e, t, n) {
  if (e == null)
    return "";
  let r = uu(t, n)[0];
  /Z$/.test(r) && (n.timezone = "utc");
  const s = [];
  r = r.replace(pw, (o, i) => (s.push(i), "??"));
  const a = n.getDateParts(e);
  return r = r.replace(
    lu,
    (o) => o in fi ? fi[o](a, n) : o.slice(1, o.length - 1)
  ), r.replace(/\?\?/g, () => s.shift());
}
const Cw = {
  daily: ["year", "month", "day"],
  weekly: ["year", "month", "week"],
  monthly: ["year", "month"]
};
function Pw({
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
  } = e, m = o + (o < a ? rt : 0) - a;
  let f = !0, v = !1, E = !1, y = 0;
  const b = new Intl.DateTimeFormat(r.id, {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric"
  });
  let d = t.numDays - m + 1, g = t.numDays - d + 1, k = Math.floor((d - 1) / rt + 1), _ = 1, M = t.numWeeks, N = 1, A = t.month, P = t.year;
  const L = /* @__PURE__ */ new Date(), x = L.getDate(), U = L.getMonth() + 1, F = L.getFullYear();
  for (let X = 1; X <= fw; X++) {
    for (let le = 1, H = a; le <= rt; le++, H += H === rt ? 1 - rt : 1) {
      f && H === o && (d = 1, g = e.numDays, k = Math.floor((d - 1) / rt + 1), _ = Math.floor((u - d) / rt + 1), M = 1, N = c, A = e.month, P = e.year, f = !1, v = !0);
      const G = r.getDateFromParams(P, A, d, 0, 0, 0, 0), j = r.getDateFromParams(P, A, d, 12, 0, 0, 0), Y = r.getDateFromParams(
        P,
        A,
        d,
        23,
        59,
        59,
        999
      ), V = G, $ = `${Me(P, 4)}-${Me(A, 2)}-${Me(d, 2)}`, q = le, pe = rt - le, $e = l[X - 1], ee = i[X - 1], Ee = d === x && A === U && P === F, ge = v && d === 1, Ce = v && d === u, Ne = X === 1, De = X === c, Ve = le === 1, Ye = le === rt, Je = du(P, A, d);
      s.push({
        locale: r,
        id: $,
        position: ++y,
        label: d.toString(),
        ariaLabel: b.format(new Date(P, A - 1, d)),
        day: d,
        dayFromEnd: g,
        weekday: H,
        weekdayPosition: q,
        weekdayPositionFromEnd: pe,
        weekdayOrdinal: k,
        weekdayOrdinalFromEnd: _,
        week: M,
        weekFromEnd: N,
        weekPosition: X,
        weeknumber: $e,
        isoWeeknumber: ee,
        month: A,
        year: P,
        date: V,
        startDate: G,
        endDate: Y,
        noonDate: j,
        dayIndex: Je,
        isToday: Ee,
        isFirstDay: ge,
        isLastDay: Ce,
        isDisabled: !v,
        isFocusable: !v,
        isFocused: !1,
        inMonth: v,
        inPrevMonth: f,
        inNextMonth: E,
        onTop: Ne,
        onBottom: De,
        onLeft: Ve,
        onRight: Ye,
        classes: [
          `id-${$}`,
          `day-${d}`,
          `day-from-end-${g}`,
          `weekday-${H}`,
          `weekday-position-${q}`,
          `weekday-ordinal-${k}`,
          `weekday-ordinal-from-end-${_}`,
          `week-${M}`,
          `week-from-end-${N}`,
          {
            "is-today": Ee,
            "is-first-day": ge,
            "is-last-day": Ce,
            "in-month": v,
            "in-prev-month": f,
            "in-next-month": E,
            "on-top": Ne,
            "on-bottom": De,
            "on-left": Ve,
            "on-right": Ye
          }
        ]
      }), v && Ce ? (v = !1, E = !0, d = 1, g = u, k = 1, _ = Math.floor((u - d) / rt + 1), M = 1, N = n.numWeeks, A = n.month, P = n.year) : (d++, g--, k = Math.floor((d - 1) / rt + 1), _ = Math.floor((u - d) / rt + 1));
    }
    M++, N--;
  }
  return s;
}
function Lw(e, t, n, r) {
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
function Sw(e, t) {
  return e.days.map((n) => ({
    label: t.formatDate(n.date, t.masks.weekdays),
    weekday: n.weekday
  }));
}
function pu(e, t, n) {
  return tu(
    n.getDateParts(n.toDate(e)),
    Cw[t]
  );
}
function hu({ day: e, week: t, month: n, year: r }, s, a, o) {
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
function gu(e, t, n) {
  return (e || !1) && !es(e, t) && !ga(e, n);
}
function Aw(e, t) {
  return !e && t || e && !t ? !1 : !e && !t ? !0 : (e = e, t = t, e.year === t.year && e.month === t.month && e.week === t.week && e.day === t.day);
}
function xw(e, t, n, r) {
  if (!Vt(e) || !Vt(t))
    return [];
  const s = [];
  for (; !ga(e, t); )
    s.push(e), e = hu(e, 1, n, r);
  return s;
}
function _u(e) {
  const { day: t, week: n, month: r, year: s } = e;
  let a = `${s}-${Me(r, 2)}`;
  return n && (a = `${a}-w${n}`), t && (a = `${a}-${Me(t, 2)}`), a;
}
function Rw(e, t) {
  const { month: n, year: r, showWeeknumbers: s, showIsoWeeknumbers: a } = e, o = new Date(r, n - 1, 15), i = t.getMonthParts(n, r), l = t.getPrevMonthParts(n, r), u = t.getNextMonthParts(n, r), c = Pw({ monthComps: i, prevMonthComps: l, nextMonthComps: u }, t), m = Lw(c, s, a, t), f = Sw(m[0], t);
  return {
    id: _u(e),
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
    weeks: m,
    weekdays: f
  };
}
function Fw(e, t) {
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
class _i {
  constructor(t, n, r) {
    se(this, "keys", []), se(this, "store", {}), this.size = t, this.createKey = n, this.createItem = r;
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
    se(this, "order"), se(this, "locale"), se(this, "start", null), se(this, "end", null), se(this, "repeat", null);
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
class Yw {
  constructor() {
    se(this, "records", {});
  }
  render(t, n, r) {
    var s, a, o, i;
    let l = null;
    const u = r[0].dayIndex, c = r[r.length - 1].dayIndex;
    return n.hasRepeat ? r.forEach((m) => {
      var f, v;
      if (n.startsOnDay(m)) {
        const E = n.daySpan < 1 / 0 ? n.daySpan : 1;
        l = {
          startDay: m.dayIndex,
          startTime: ((f = n.start) == null ? void 0 : f.time) ?? 0,
          endDay: m.dayIndex + E - 1,
          endTime: ((v = n.end) == null ? void 0 : v.time) ?? Qr
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
        const l = s === i.startDay, u = s === i.endDay, c = l ? i.startTime : 0, m = new Date(t.startDate.getTime() + c), f = u ? i.endTime : Qr, v = new Date(t.endDate.getTime() + f), E = c === 0 && f === Qr, y = a.order || 0;
        r.push({
          ...i,
          data: a,
          onStart: l,
          onEnd: u,
          startTime: c,
          startDate: m,
          endTime: f,
          endDate: v,
          allDay: E,
          order: y
        });
      });
    }), r.sort((a, o) => a.order - o.order), r;
  }
}
const Vw = 12, Uw = 5;
function jw(e, t) {
  const n = new Intl.DateTimeFormat().resolvedOptions().locale;
  let r;
  Yt(e) ? r = e : Ws(e, "id") && (r = e.id), r = (r || n).toLowerCase();
  const s = Object.keys(t), a = (l) => s.find((u) => u.toLowerCase() === l);
  r = a(r) || a(r.substring(0, 2)) || n;
  const o = {
    ...t["en-IE"],
    ...t[r],
    id: r,
    monthCacheSize: Vw,
    pageCacheSize: Uw
  };
  return Jt(e) ? Pr(e, o) : o;
}
class _a {
  constructor(t = void 0, n) {
    se(this, "id"), se(this, "daysInWeek"), se(this, "firstDayOfWeek"), se(this, "masks"), se(this, "timezone"), se(this, "hourLabels"), se(this, "dayNames"), se(this, "dayNamesShort"), se(this, "dayNamesShorter"), se(this, "dayNamesNarrow"), se(this, "monthNames"), se(this, "monthNamesShort"), se(this, "relativeTimeNames"), se(this, "amPm", ["am", "pm"]), se(this, "monthCache"), se(this, "pageCache");
    const { id: r, firstDayOfWeek: s, masks: a, monthCacheSize: o, pageCacheSize: i } = jw(t, CE.value);
    this.monthCache = new _i(
      o,
      Dw,
      Ew
    ), this.pageCache = new _i(i, _u, Rw), this.id = r, this.daysInWeek = rt, this.firstDayOfWeek = nE(s, 1, rt), this.masks = a, this.timezone = n || void 0, this.hourLabels = this.getHourLabels(), this.dayNames = Va("long", this.id), this.dayNamesShort = Va("short", this.id), this.dayNamesShorter = this.dayNamesShort.map((l) => l.substring(0, 2)), this.dayNamesNarrow = Va("narrow", this.id), this.monthNames = hi("long", this.id), this.monthNamesShort = hi("short", this.id), this.relativeTimeNames = $w(this.id);
  }
  formatDate(t, n) {
    return Mw(t, n, this);
  }
  parseDate(t, n) {
    return gi(t, n, this);
  }
  toDate(t, n = {}) {
    const r = /* @__PURE__ */ new Date(NaN);
    let s = r;
    const { fillDate: a, mask: o, patch: i, rules: l } = n;
    if (Pt(t) ? (n.type = "number", s = /* @__PURE__ */ new Date(+t)) : Yt(t) ? (n.type = "string", s = t ? gi(t, o || "iso", this) : r) : Bn(t) ? (n.type = "date", s = new Date(t.getTime())) : cu(t) && (n.type = "object", s = this.getDateFromParts(t)), s && (i || l)) {
      let u = this.getDateParts(s);
      if (i && a != null) {
        const c = this.getDateParts(this.toDate(a));
        u = this.getDateParts(
          this.toDate({ ...c, ...tu(u, dw[i]) })
        );
      }
      l && (u = Iw(u, l)), s = this.getDateFromParts(u);
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
    return yw(t, this);
  }
  getDateFromParts(t) {
    return vu(t, this.timezone);
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
    return Fw(t, n);
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
    return Ow().map((t) => this.formatDate(t, this.masks.hours));
  }
  getDayId(t) {
    return this.formatDate(t, "YYYY-MM-DD");
  }
}
class bu {
  constructor(t, n, r) {
    se(this, "key", ""), se(this, "hashcode", ""), se(this, "highlight", null), se(this, "content", null), se(this, "dot", null), se(this, "bar", null), se(this, "event", null), se(this, "popover", null), se(this, "customData", null), se(this, "ranges"), se(this, "hasRanges", !1), se(this, "order", 0), se(this, "pinPage", !1), se(this, "maxRepeatSpan", 0), se(this, "locale");
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
const yu = "__vc_base_context__", Du = {
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
function Eu(e) {
  const t = C(() => e.color ?? ""), n = C(() => e.isDark ?? !1), { displayMode: r } = df(n), s = C(() => new cE(t.value)), a = C(() => {
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
  }), l = C(() => new bu(
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
  return qn(yu, u), u;
}
function Ww(e) {
  return yt(yu, Eu(e));
}
const Hw = (e, t, {
  maxSwipeTime: n,
  minHorizontalSwipeDistance: r,
  maxVerticalSwipeDistance: s
}) => {
  if (!e || !e.addEventListener || !Mn(t))
    return null;
  let a = 0, o = 0, i = null, l = !1;
  function u(m) {
    const f = m.changedTouches[0];
    a = f.screenX, o = f.screenY, i = (/* @__PURE__ */ new Date()).getTime(), l = !0;
  }
  function c(m) {
    if (!l || !i)
      return;
    l = !1;
    const f = m.changedTouches[0], v = f.screenX - a, E = f.screenY - o;
    if ((/* @__PURE__ */ new Date()).getTime() - i < n && Math.abs(v) >= r && Math.abs(E) <= s) {
      const b = { toLeft: !1, toRight: !1 };
      v < 0 ? b.toLeft = !0 : b.toRight = !0, t(b);
    }
  }
  return dn(e, "touchstart", u, { passive: !0 }), dn(e, "touchend", c, { passive: !0 }), () => {
    cn(e, "touchstart", u), cn(e, "touchend", c);
  };
}, ea = {}, Bw = (e, t = 10) => {
  ea[e] = Date.now() + t;
}, Gw = (e, t) => {
  if (e in ea) {
    const n = ea[e];
    if (Date.now() < n)
      return;
    delete ea[e];
  }
  t();
}, Kw = {
  ...Du,
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
}, qw = [
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
], wu = "__vc_calendar_context__";
function zw(e, { emit: t, slots: n }) {
  const r = ne(null), s = ne(null), a = ne(null), o = ne((/* @__PURE__ */ new Date()).getDate()), i = ne(!1), l = ne(oa()), u = ne(oa()), c = ne(e.view), m = ne([]), f = ne("");
  let v = null, E = null;
  const {
    theme: y,
    color: b,
    displayMode: d,
    locale: g,
    masks: k,
    disabledAttribute: _,
    disabledDates: M
  } = Ww(e), N = C(() => e.rows * e.columns), A = C(() => e.step || N.value), P = C(() => Ql(m.value) ?? null), L = C(() => Wn(m.value) ?? null), x = C(
    () => e.minPage || (e.minDate ? q(e.minDate) : null)
  ), U = C(
    () => e.maxPage || (e.maxDate ? q(e.maxDate) : null)
  ), F = C(() => e.navVisibility), X = C(() => !!e.showWeeknumbers), le = C(() => !!e.showIsoWeeknumbers), H = C(() => c.value === "monthly"), G = C(() => c.value === "weekly"), j = C(() => c.value === "daily"), Y = () => {
    i.value = !0, t("transition-start");
  }, V = () => {
    i.value = !1, t("transition-end"), v && (v.resolve(!0), v = null);
  }, $ = (W, z, de = c.value) => hu(W, z, de, g.value), q = (W) => pu(W, c.value, g.value), pe = (W) => {
    !_.value || !Ne.value || (W.isDisabled = Ne.value.cellExists(
      _.value.key,
      W.dayIndex
    ));
  }, $e = (W) => {
    W.isFocusable = W.inMonth && W.day === o.value;
  }, ee = (W, z) => {
    for (const de of W)
      for (const I of de.days)
        if (z(I) === !1)
          return;
  }, Ee = C(
    () => m.value.reduce((W, z) => (W.push(...z.viewDays), W), [])
  ), ge = C(() => {
    const W = [];
    return (e.attributes || []).forEach((z, de) => {
      if (!z || !z.dates)
        return;
      const I = Ws(z, "key") ? z.key : de, K = z.order || 0;
      W.push(
        new bu(
          {
            ...z,
            key: I,
            order: K
          },
          y.value,
          g.value
        )
      );
    }), _.value && W.push(_.value), W;
  }), Ce = C(() => Xt(ge.value)), Ne = C(() => {
    const W = new Yw();
    return ge.value.forEach((z) => {
      z.ranges.forEach((de) => {
        W.render(z, de, Ee.value);
      });
    }), W;
  }), De = C(() => Ee.value.reduce((W, z) => (W[z.dayIndex] = { day: z, cells: [] }, W[z.dayIndex].cells.push(...Ne.value.getCells(z)), W), {})), Ve = (W, z) => {
    const de = e.showWeeknumbers || e.showIsoWeeknumbers;
    return de == null ? "" : Zf(de) ? de ? "left" : "" : de.startsWith("right") ? z > 1 ? "right" : de : W > 1 ? "left" : de;
  }, Ye = () => {
    var W, z;
    if (!Ce.value)
      return null;
    const de = ge.value.find((ue) => ue.pinPage) || ge.value[0];
    if (!de || !de.hasRanges)
      return null;
    const [I] = de.ranges, K = ((W = I.start) == null ? void 0 : W.date) || ((z = I.end) == null ? void 0 : z.date);
    return K ? q(K) : null;
  }, Je = () => {
    if (Vt(P.value))
      return P.value;
    const W = Ye();
    return Vt(W) ? W : q(/* @__PURE__ */ new Date());
  }, D = (W, z = {}) => {
    const { view: de = c.value, position: I = 1, force: K } = z, ue = I > 0 ? 1 - I : -(N.value + I);
    let we = $(W, ue, de), Ke = $(we, N.value - 1, de);
    return K || (es(we, x.value) ? we = x.value : ga(Ke, U.value) && (we = $(U.value, 1 - N.value)), Ke = $(we, N.value - 1)), { fromPage: we, toPage: Ke };
  }, h = (W, z, de = "") => {
    if (de === "none" || de === "fade")
      return de;
    if ((W == null ? void 0 : W.view) !== (z == null ? void 0 : z.view))
      return "fade";
    const I = ga(z, W), K = es(z, W);
    return !I && !K ? "fade" : de === "slide-v" ? K ? "slide-down" : "slide-up" : K ? "slide-right" : "slide-left";
  }, S = (W = {}) => new Promise((z, de) => {
    const { position: I = 1, force: K = !1, transition: ue } = W, we = Vt(W.page) ? W.page : Je(), { fromPage: Ke } = D(we, {
      position: I,
      force: K
    }), Tt = [];
    for (let lt = 0; lt < N.value; lt++) {
      const Sn = $(Ke, lt), vr = lt + 1, jr = Math.ceil(vr / e.columns), _t = e.rows - jr + 1, Wr = vr % e.columns || e.columns, mr = e.columns - Wr + 1, Aa = Ve(Wr, mr);
      Tt.push(
        g.value.getPage({
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
          showIsoWeeknumbers: le.value,
          weeknumberPosition: Aa
        })
      );
    }
    f.value = h(
      m.value[0],
      Tt[0],
      ue
    ), m.value = Tt, f.value && f.value !== "none" ? v = {
      resolve: z,
      reject: de
    } : z(!0);
  }), J = (W) => {
    const z = P.value ?? q(/* @__PURE__ */ new Date());
    return $(z, W);
  }, oe = (W, z = {}) => {
    const de = Vt(W) ? W : q(W);
    return Object.assign(
      z,
      D(de, {
        ...z,
        force: !0
      })
    ), xw(
      z.fromPage,
      z.toPage,
      c.value,
      g.value
    ).map((K) => gu(K, x.value, U.value)).every((K) => K);
  }, _e = (W, z = {}) => oe(J(W), z), nt = C(() => _e(-A.value)), He = C(() => _e(A.value)), gt = async (W, z = {}) => !z.force && !oe(W, z) ? !1 : (z.fromPage && !Aw(z.fromPage, P.value) && (s.value && s.value.hide({ hideDelay: 0 }), z.view && (Bw("view", 10), c.value = z.view), await S({
    ...z,
    page: z.fromPage,
    position: 1,
    force: !0
  }), t("did-move", m.value)), !0), At = (W, z = {}) => gt(J(W), z), Ie = () => At(-A.value), R = () => At(A.value), B = (W) => {
    const z = H.value ? ".in-month" : "", de = `.id-${g.value.getDayId(W)}${z}`, I = `${de}.vc-focusable, ${de} .vc-focusable`, K = r.value;
    if (K) {
      const ue = K.querySelector(I);
      if (ue)
        return ue.focus(), !0;
    }
    return !1;
  }, Ue = async (W, z = {}) => B(W) ? !0 : (await gt(W, z), B(W)), je = (W, z) => {
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
        z.altKey ? I = ci(de, -1) : I = pa(de, -1);
        break;
      }
      case "PageDown": {
        z.altKey ? I = ci(de, 1) : I = pa(de, 1);
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
    !e.disablePageSwipe && r.value && (E = Hw(
      r.value,
      ({ toLeft: W = !1, toRight: z = !1 }) => {
        W ? R() : z && Ie();
      },
      mn("touch")
    ));
  }), xr(() => {
    m.value = [], E && E();
  }), Te(
    () => g.value,
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
      Gw("view", () => {
        S();
      }), t("update:view", c.value);
    }
  ), Te(
    () => o.value,
    () => {
      ee(m.value, (W) => $e(W));
    }
  ), ps(() => {
    t("update:pages", m.value), ee(m.value, (W) => {
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
    pages: m,
    transitionName: f,
    theme: y,
    color: b,
    displayMode: d,
    locale: g,
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
    maxPage: U,
    isMonthly: H,
    isWeekly: G,
    isDaily: j,
    navVisibility: F,
    showWeeknumbers: X,
    showIsoWeeknumbers: le,
    getDateAddress: q,
    canMove: oe,
    canMoveBy: _e,
    move: gt,
    moveBy: At,
    movePrev: Ie,
    moveNext: R,
    onTransitionBeforeEnter: Y,
    onTransitionAfterEnter: V,
    tryFocusDate: B,
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
  return qn(wu, Ur), Ur;
}
function Pn() {
  const e = yt(wu);
  if (e)
    return e;
  throw new Error(
    "Calendar context missing. Please verify this component is nested within a valid context provider."
  );
}
const Xw = {
  inheritAttrs: !1
}, Kn = /* @__PURE__ */ Se({
  ...Xw,
  __name: "CalendarSlot",
  props: {
    name: null
  },
  setup(e) {
    const { slots: t } = Pn();
    return (n, r) => p(t)[e.name] ? (O(), qe(al(p(t)[e.name]), sl(rr({ key: 0 }, n.$attrs)), null, 16)) : jt(n.$slots, "default", { key: 1 });
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
function Ou(e) {
  document && document.dispatchEvent(
    new CustomEvent("toggle-popover", {
      detail: e
    })
  );
}
function $u(e) {
  const { visibility: t } = e, n = t === "click", r = t === "hover", s = t === "hover-focus", a = t === "focus";
  e.autoHide = !n;
  let o = !1, i = !1;
  const l = (E) => {
    n && (Ou({
      ...e,
      target: e.target || E.currentTarget
    }), E.stopPropagation());
  }, u = (E) => {
    o || (o = !0, (r || s) && ts({
      ...e,
      target: e.target || E.currentTarget
    }));
  }, c = () => {
    o && (o = !1, (r || s && !i) && ba(e));
  }, m = (E) => {
    i || (i = !0, (a || s) && ts({
      ...e,
      target: e.target || E.currentTarget
    }));
  }, f = (E) => {
    i && !Zr(E.currentTarget, E.relatedTarget) && (i = !1, (a || s && !o) && ba(e));
  }, v = {};
  switch (e.visibility) {
    case "click":
      v.click = l;
      break;
    case "hover":
      v.mousemove = u, v.mouseleave = c;
      break;
    case "focus":
      v.focusin = m, v.focusout = f;
      break;
    case "hover-focus":
      v.mousemove = u, v.mouseleave = c, v.focusin = m, v.focusout = f;
      break;
  }
  return v;
}
const bi = (e) => {
  const t = sa(e);
  if (t == null)
    return;
  const n = t.popoverHandlers;
  !n || !n.length || (n.forEach((r) => r()), delete t.popoverHandlers);
}, yi = (e, t) => {
  const n = sa(e);
  if (n == null)
    return;
  const r = [], s = $u(t);
  Object.entries(s).forEach(([a, o]) => {
    r.push(dn(n, a, o));
  }), n.popoverHandlers = r;
}, ku = {
  mounted(e, t) {
    const { value: n } = t;
    n && yi(e, n);
  },
  updated(e, t) {
    const { oldValue: n, value: r } = t, s = n == null ? void 0 : n.visibility, a = r == null ? void 0 : r.visibility;
    s !== a && (s && (bi(e), a || ba(n)), a && yi(e, r));
  },
  unmounted(e) {
    bi(e);
  }
}, Zw = ["disabled"], Jw = {
  key: 1,
  type: "button",
  class: "vc-title"
}, Qw = ["disabled"], Nu = /* @__PURE__ */ Se({
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
      const { page: y } = t;
      return {
        id: n.value,
        visibility: r.value,
        placement: l.value,
        modifiers: [{ name: "flip", options: { fallbackPlacements: ["bottom"] } }],
        data: { page: y },
        isInteractive: !0
      };
    }), c = C(() => t.page.titlePosition.includes("left")), m = C(() => t.page.titlePosition.includes("right")), f = C(() => t.layout ? t.layout : c.value ? "tu-pn" : m.value ? "pn-tu" : "p-tu-n;"), v = C(() => ({
      prev: f.value.includes("p") && !t.hideArrows,
      title: f.value.includes("t") && !t.hideTitle,
      next: f.value.includes("n") && !t.hideArrows
    })), E = C(() => ({ gridTemplateColumns: f.value.split("").map((b) => {
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
    return (y, b) => (O(), T("div", {
      class: Ge(["vc-header", { "is-lg": e.isLg, "is-xl": e.isXl, "is-2xl": e.is2xl }]),
      style: Er(p(E))
    }, [
      p(v).prev ? (O(), T("button", {
        key: 0,
        type: "button",
        class: "vc-arrow vc-prev vc-focus",
        disabled: !p(s),
        onClick: b[0] || (b[0] = //@ts-ignore
        (...d) => p(a) && p(a)(...d)),
        onKeydown: b[1] || (b[1] = lo(
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
      ], 40, Zw)) : Q("", !0),
      p(v).title ? Pe((O(), T("button", Jw, [
        me(Kn, {
          name: "header-title",
          title: e.page.title
        }, {
          default: ze(() => [
            w("span", null, ie(e.page.title), 1)
          ]),
          _: 1
        }, 8, ["title"])
      ])), [
        [p(ku), p(u)]
      ]) : Q("", !0),
      p(v).next ? (O(), T("button", {
        key: 2,
        type: "button",
        class: "vc-arrow vc-next vc-focus",
        disabled: !p(o),
        onClick: b[2] || (b[2] = //@ts-ignore
        (...d) => p(i) && p(i)(...d)),
        onKeydown: b[3] || (b[3] = lo(
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
      ], 40, Qw)) : Q("", !0)
    ], 6));
  }
}), eO = Se({
  directives: { popover: ku },
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
      onDayKeydown: m
    } = Pn(), f = C(() => e.day), v = C(() => r.value.getCells(f.value)), E = C(
      () => v.value.map((H) => H.data)
    ), y = C(() => ({
      ...f.value,
      attributes: E.value,
      attributeCells: v.value
    }));
    function b({ data: H }, { popovers: G }) {
      const { key: j, customData: Y, popover: V } = H;
      if (!V)
        return;
      const $ = ei(
        {
          key: j,
          customData: Y,
          attribute: H
        },
        { ...V },
        {
          visibility: V.label ? "hover" : "click",
          placement: "bottom",
          isInteractive: !V.label
        }
      );
      G.splice(0, 0, $);
    }
    const d = C(() => {
      const H = {
        ...n.value.prepareRender({}),
        popovers: []
      };
      return v.value.forEach((G) => {
        n.value.render(G, H), b(G, H);
      }), H;
    }), g = C(() => d.value.highlights), k = C(() => !!Xt(g.value)), _ = C(() => d.value.content), M = C(() => d.value.dots), N = C(() => !!Xt(M.value)), A = C(() => d.value.bars), P = C(() => !!Xt(A.value)), L = C(() => d.value.popovers), x = C(
      () => L.value.map((H) => H.attribute)
    ), U = C(() => [
      "vc-day",
      ...f.value.classes,
      { "vc-day-box-center-center": !a["day-content"] },
      { "is-not-in-month": !e.day.inMonth }
    ]), F = C(() => {
      let H;
      f.value.isFocusable ? H = "0" : H = "-1";
      const G = [
        "vc-day-content vc-focusable vc-focus vc-attr",
        { "vc-disabled": f.value.isDisabled },
        Dn(Wn(g.value), "contentClass"),
        Dn(Wn(_.value), "class") || ""
      ], j = {
        ...Dn(Wn(g.value), "contentStyle"),
        ...Dn(Wn(_.value), "style")
      };
      return {
        class: G,
        style: j,
        tabindex: H,
        "aria-label": f.value.ariaLabel,
        "aria-disabled": !!f.value.isDisabled,
        role: "button"
      };
    }), X = C(() => ({
      click(H) {
        o(y.value, H);
      },
      mouseenter(H) {
        i(y.value, H);
      },
      mouseleave(H) {
        l(y.value, H);
      },
      focusin(H) {
        u(y.value, H);
      },
      focusout(H) {
        c(y.value, H);
      },
      keydown(H) {
        m(y.value, H);
      }
    })), le = C(() => Xt(L.value) ? ei(
      {
        id: s.value,
        data: { day: f, attributes: x.value }
      },
      ...L.value
    ) : null);
    return {
      attributes: E,
      attributeCells: v,
      bars: A,
      dayClasses: U,
      dayContentProps: F,
      dayContentEvents: X,
      dayPopover: le,
      glyphs: d,
      dots: M,
      hasDots: N,
      hasBars: P,
      highlights: g,
      hasHighlights: k,
      locale: t,
      popovers: L
    };
  }
}), tO = {
  key: 0,
  class: "vc-highlights vc-day-layer"
}, nO = {
  key: 1,
  class: "vc-day-layer vc-day-box-center-bottom"
}, rO = { class: "vc-dots" }, aO = {
  key: 2,
  class: "vc-day-layer vc-day-box-center-bottom"
}, sO = { class: "vc-bars" };
function oO(e, t, n, r, s, a) {
  const o = fn("CalendarSlot"), i = cc("popover");
  return O(), T("div", {
    class: Ge(e.dayClasses)
  }, [
    e.hasHighlights ? (O(), T("div", tO, [
      (O(!0), T(te, null, he(e.highlights, ({ key: l, wrapperClass: u, class: c, style: m }) => (O(), T("div", {
        key: l,
        class: Ge(u)
      }, [
        w("div", {
          class: Ge(c),
          style: Er(m)
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
        Pe((O(), T("div", rr(e.dayContentProps, dc(e.dayContentEvents, !0)), [
          Rr(ie(e.day.label), 1)
        ], 16)), [
          [i, e.dayPopover]
        ])
      ]),
      _: 1
    }, 8, ["day", "attributes", "attribute-cells", "dayProps", "dayEvents", "locale"]),
    e.hasDots ? (O(), T("div", nO, [
      w("div", rO, [
        (O(!0), T(te, null, he(e.dots, ({ key: l, class: u, style: c }) => (O(), T("span", {
          key: l,
          class: Ge(u),
          style: Er(c)
        }, null, 6))), 128))
      ])
    ])) : Q("", !0),
    e.hasBars ? (O(), T("div", aO, [
      w("div", sO, [
        (O(!0), T(te, null, he(e.bars, ({ key: l, class: u, style: c }) => (O(), T("span", {
          key: l,
          class: Ge(u),
          style: Er(c)
        }, null, 6))), 128))
      ])
    ])) : Q("", !0)
  ], 2);
}
const iO = /* @__PURE__ */ en(eO, [["render", oO]]), lO = {
  name: "CalendarPane",
  inheritAttrs: !1,
  components: { CalendarHeader: Nu, CalendarDay: iO },
  props: {
    page: { type: Object, required: !0 }
  },
  setup() {
    const { onWeeknumberClick: e } = Pn();
    return {
      onWeeknumberClick: e
    };
  }
}, uO = { class: "vc-weekdays" }, cO = ["onClick"];
function dO(e, t, n, r, s, a) {
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
    w("div", {
      class: Ge(["vc-weeks", {
        [`vc-show-weeknumbers-${n.page.weeknumberPosition}`]: n.page.weeknumberPosition
      }])
    }, [
      w("div", uO, [
        (O(!0), T(te, null, he(n.page.weekdays, ({ weekday: l, label: u }, c) => (O(), T("div", {
          key: c,
          class: Ge(`vc-weekday vc-weekday-${l}`)
        }, ie(u), 3))), 128))
      ]),
      (O(!0), T(te, null, he(n.page.viewWeeks, (l) => (O(), T("div", {
        key: `weeknumber-${l.weeknumber}`,
        class: "vc-week"
      }, [
        n.page.weeknumberPosition ? (O(), T("div", {
          key: 0,
          class: Ge(["vc-weeknumber", `is-${n.page.weeknumberPosition}`])
        }, [
          w("span", {
            class: Ge(["vc-weeknumber-content"]),
            onClick: (u) => r.onWeeknumberClick(l, u)
          }, ie(l.weeknumberDisplay), 9, cO)
        ], 2)) : Q("", !0),
        (O(!0), T(te, null, he(l.days, (u) => (O(), qe(i, {
          key: u.id,
          day: u
        }, null, 8, ["day"]))), 128))
      ]))), 128))
    ], 2)
  ], 2);
}
const fO = /* @__PURE__ */ en(lO, [["render", dO]]), vO = Se({
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
    function m() {
      a && (a.destroy(), a = null);
    }
    function f() {
      Yn(() => {
        const $ = sa(o.target);
        !$ || !r.value || (a && a.state.elements.reference !== $ && m(), a ? a.update() : a = Ad(
          $,
          r.value,
          u.value
        ));
      });
    }
    function v($) {
      Object.assign(o, eu($, "force"));
    }
    function E($, q) {
      clearTimeout(n), $ > 0 ? n = setTimeout(q, $) : q();
    }
    function y($) {
      return !$ || !a ? !1 : sa($) === a.state.elements.reference;
    }
    async function b($ = {}) {
      o.force || ($.force && (o.force = !0), E($.showDelay ?? e.showDelay, () => {
        o.isVisible && (o.force = !1, t("after-show")), v({
          ...$,
          isVisible: !0
        }), f();
      }));
    }
    function d($ = {}) {
      a && ($.target && !y($.target) || o.force || ($.force && (o.force = !0), E($.hideDelay ?? e.hideDelay, () => {
        o.isVisible || (o.force = !1), o.isVisible = !1;
      })));
    }
    function g($ = {}) {
      $.target != null && (o.isVisible && y($.target) ? d($) : b($));
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
      !$.id || $.id !== e.id || b($);
    }
    function N({ detail: $ }) {
      !$.id || $.id !== e.id || d($);
    }
    function A({ detail: $ }) {
      !$.id || $.id !== e.id || g($);
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
    function U($) {
      o.force = !1, t("after-show", $);
    }
    function F($) {
      t("before-hide", $);
    }
    function X($) {
      o.force = !1, m(), t("after-hide", $);
    }
    function le($) {
      $.stopPropagation();
    }
    function H() {
      o.isHovered = !0, o.isInteractive && ["hover", "hover-focus"].includes(o.visibility) && b();
    }
    function G() {
      if (o.isHovered = !1, !a)
        return;
      const $ = a.state.elements.reference;
      o.autoHide && !o.isFocused && (!$ || $ !== document.activeElement) && ["hover", "hover-focus"].includes(o.visibility) && d();
    }
    function j() {
      o.isFocused = !0, o.isInteractive && ["focus", "hover-focus"].includes(o.visibility) && b();
    }
    function Y($) {
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
      m(), V(), L();
    }), {
      ...lc(o),
      popoverRef: r,
      alignment: c,
      hide: d,
      setupPopper: f,
      beforeEnter: x,
      afterEnter: U,
      beforeLeave: F,
      afterLeave: X,
      onClick: le,
      onMouseOver: H,
      onMouseLeave: G,
      onFocusIn: j,
      onFocusOut: Y
    };
  }
});
function mO(e, t, n, r, s, a) {
  return O(), T("div", {
    class: Ge(["vc-popover-content-wrapper", { "is-interactive": e.isInteractive }]),
    ref: "popoverRef",
    onClick: t[0] || (t[0] = (...o) => e.onClick && e.onClick(...o)),
    onMouseover: t[1] || (t[1] = (...o) => e.onMouseOver && e.onMouseOver(...o)),
    onMouseleave: t[2] || (t[2] = (...o) => e.onMouseLeave && e.onMouseLeave(...o)),
    onFocusin: t[3] || (t[3] = (...o) => e.onFocusIn && e.onFocusIn(...o)),
    onFocusout: t[4] || (t[4] = (...o) => e.onFocusOut && e.onFocusOut(...o))
  }, [
    me(ol, {
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
            Rr(ie(e.data), 1)
          ]),
          w("span", {
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
const qs = /* @__PURE__ */ en(vO, [["render", mO]]), pO = {
  value: { type: Object, required: !0 }
}, hO = ["input"], gO = "__vc_calendar_nav_context__";
function _O(e, { emit: t }) {
  const n = ne(!0), r = ne(0), s = ne(0), a = 12, o = ne(null), { locale: i, masks: l, canMove: u, getDateAddress: c } = Pn();
  function m() {
    setTimeout(() => {
      if (o.value == null)
        return;
      const ee = o.value.querySelector(
        ".vc-nav-item:not(:disabled)"
      );
      ee && ee.focus();
    }, 10);
  }
  function f(ee, Ee) {
    t("input", { month: ee, year: Ee }, { position: x.value });
  }
  function v(ee) {
    r.value = ee, n.value = !0, m();
  }
  function E(ee) {
    const { year: Ee } = c(/* @__PURE__ */ new Date()), ge = ee * a, Ce = ge + a, Ne = [];
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
        click: () => v(De)
      });
    }
    return Ne;
  }
  function y(ee) {
    const { month: Ee, year: ge } = c(/* @__PURE__ */ new Date());
    return mu().map((Ce, Ne) => {
      const De = Ne + 1;
      return {
        month: De,
        year: ee,
        id: `${ee}.${Me(De, 2)}`,
        label: i.value.formatDate(Ce, l.value.navMonths),
        ariaLabel: i.value.formatDate(Ce, "MMMM YYYY"),
        isActive: De === P.value && ee === L.value,
        isCurrent: De === Ee && ee === ge,
        isDisabled: !u(
          { month: De, year: ee },
          { position: x.value }
        ),
        click: () => f(De, ee)
      };
    });
  }
  function b(ee) {
    return Math.floor(ee / a);
  }
  function d() {
    n.value = !n.value;
  }
  function g() {
    Y.value && (n.value && _(), N());
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
    var ee;
    return ((ee = e.value) == null ? void 0 : ee.month) || 0;
  }), L = C(() => {
    var ee;
    return ((ee = e.value) == null ? void 0 : ee.year) || 0;
  }), x = C(() => {
    var ee;
    return ((ee = e.value) == null ? void 0 : ee.position) || 1;
  }), U = C(() => y(r.value)), F = C(() => E(s.value)), X = C(() => Ql(F.value.map((ee) => ee.year))), le = C(() => Wn(F.value.map((ee) => ee.year))), H = C(() => n.value ? r.value : `${X.value} - ${le.value}`), G = C(
    () => y(r.value - 1).some((ee) => !ee.isDisabled)
  ), j = C(
    () => E(s.value - 1).some((ee) => !ee.isDisabled)
  ), Y = C(
    () => n.value ? G.value : j.value
  ), V = C(
    () => y(r.value + 1).some((ee) => !ee.isDisabled)
  ), $ = C(
    () => E(s.value + 1).some((ee) => !ee.isDisabled)
  ), q = C(
    () => n.value ? V.value : $.value
  ), pe = C(
    () => n.value ? U.value : F.value
  );
  Te(
    () => L.value,
    () => {
      r.value = L.value;
    }
  ), Te(
    () => r.value,
    (ee) => {
      s.value = b(ee);
    }
  ), r.value = L.value, hn(() => m());
  const $e = {
    navContainer: o,
    title: H,
    monthMode: n,
    currentMonth: P,
    currentYear: L,
    activeItems: pe,
    prevItemsEnabled: Y,
    nextItemsEnabled: q,
    toggleMode: d,
    movePrev: g,
    moveNext: k,
    movePrevYear: _,
    moveNextYear: M,
    movePrevYearGroup: N,
    moveNextYearGroup: A
  };
  return qn(gO, $e), $e;
}
const bO = { class: "vc-nav-header" }, yO = ["disabled"], DO = ["disabled"], EO = { class: "vc-nav-items" }, wO = ["data-id", "aria-label", "disabled", "onClick", "onKeydown"], OO = /* @__PURE__ */ Se({
  __name: "CalendarNav",
  props: pO,
  emits: hO,
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
    } = _O(n, { emit: t });
    return (m, f) => (O(), T("div", {
      class: "vc-nav-container",
      ref_key: "navContainer",
      ref: r
    }, [
      w("div", bO, [
        w("button", {
          type: "button",
          class: "vc-nav-arrow is-left vc-focus",
          disabled: !p(a),
          onClick: f[0] || (f[0] = //@ts-ignore
          (...v) => p(u) && p(u)(...v)),
          onKeydown: f[1] || (f[1] = (v) => p(Kr)(v, p(u)))
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
        ], 40, yO),
        w("button", {
          type: "button",
          class: "vc-nav-title vc-focus",
          onClick: f[2] || (f[2] = //@ts-ignore
          (...v) => p(l) && p(l)(...v)),
          onKeydown: f[3] || (f[3] = (v) => p(Kr)(v, p(l)))
        }, ie(p(s)), 33),
        w("button", {
          type: "button",
          class: "vc-nav-arrow is-right vc-focus",
          disabled: !p(o),
          onClick: f[4] || (f[4] = //@ts-ignore
          (...v) => p(c) && p(c)(...v)),
          onKeydown: f[5] || (f[5] = (v) => p(Kr)(v, p(c)))
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
        ], 40, DO)
      ]),
      w("div", EO, [
        (O(!0), T(te, null, he(p(i), (v) => (O(), T("button", {
          key: v.label,
          type: "button",
          "data-id": v.id,
          "aria-label": v.ariaLabel,
          class: Ge(["vc-nav-item vc-focus", [
            v.isActive ? "is-active" : v.isCurrent ? "is-current" : ""
          ]]),
          disabled: v.isDisabled,
          onClick: v.click,
          onKeydown: (E) => p(Kr)(E, v.click)
        }, ie(v.label), 43, wO))), 128))
      ])
    ], 512));
  }
}), $O = {
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
        me(OO, {
          value: l.page,
          onInput: p(a)
        }, null, 8, ["value", "onInput"])
      ]),
      _: 1
    }, 8, ["id", "class"]));
  }
}, kO = Se({
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
}), NO = { class: "vc-day-popover-row" }, TO = {
  key: 0,
  class: "vc-day-popover-row-indicator"
}, IO = { class: "vc-day-popover-row-label" };
function MO(e, t, n, r, s, a) {
  return O(), T("div", NO, [
    e.indicator ? (O(), T("div", TO, [
      w("span", {
        class: Ge(e.indicator.class)
      }, null, 2)
    ])) : Q("", !0),
    w("div", IO, [
      jt(e.$slots, "default", {}, () => [
        Rr(ie(e.attribute.popover ? e.attribute.popover.label : "No content provided"), 1)
      ])
    ])
  ]);
}
const CO = /* @__PURE__ */ en(kO, [["render", MO]]), PO = { class: "vc-day-popover-container" }, LO = {
  key: 0,
  class: "vc-day-popover-header"
}, SO = /* @__PURE__ */ Se({
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
      default: ze(({ data: { day: c, attributes: m }, hide: f }) => [
        jt(l.$slots, "default", {
          day: c,
          dayTitle: i(c),
          attributes: m,
          format: o,
          masks: p(s),
          hide: f
        }, () => [
          w("div", PO, [
            p(s).dayPopover ? (O(), T("div", LO, ie(i(c)), 1)) : Q("", !0),
            (O(!0), T(te, null, he(m, (v) => (O(), qe(CO, {
              key: v.key,
              attribute: v
            }, null, 8, ["attribute"]))), 128))
          ])
        ])
      ]),
      _: 3
    }, 8, ["id", "class"]));
  }
}), AO = Se({
  name: "Calendar",
  components: {
    CalendarHeader: Nu,
    CalendarPane: fO,
    CalendarNavPopover: $O,
    CalendarDayPopover: SO
  },
  emits: qw,
  props: Kw,
  setup(e, { emit: t, slots: n }) {
    return zw(e, { emit: t, slots: n });
  }
}), xO = { class: "vc-pane-header-wrapper" };
function RO(e, t, n, r, s, a) {
  const o = fn("CalendarHeader"), i = fn("CalendarPane"), l = fn("CalendarDayPopover"), u = fn("CalendarNavPopover");
  return O(), T(te, null, [
    w("div", rr({ "data-helptext": "Press the arrow keys to navigate by day, Home and End to navigate to week ends, PageUp and PageDown to navigate by month, Alt+PageUp and Alt+PageDown to navigate by year" }, e.$attrs, {
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
      onMouseup: t[0] || (t[0] = il(() => {
      }, ["prevent"])),
      ref: "containerRef"
    }), [
      w("div", {
        class: Ge(["vc-pane-container", { "in-transition": e.inTransition }])
      }, [
        w("div", xO, [
          e.firstPage ? (O(), qe(o, {
            key: 0,
            page: e.firstPage,
            "is-lg": "",
            "hide-title": ""
          }, null, 8, ["page"])) : Q("", !0)
        ]),
        me(ol, {
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
              (O(!0), T(te, null, he(e.pages, (c) => (O(), qe(i, {
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
        jt(e.$slots, "day-popover", sl(uc(c)))
      ]),
      _: 3
    }),
    me(u)
  ], 64);
}
const FO = /* @__PURE__ */ en(AO, [["render", RO]]), YO = { class: "vc-base-select" }, VO = ["value"], UO = ["value", "disabled"], jO = {
  inheritAttrs: !1
}, _r = /* @__PURE__ */ Object.assign(jO, {
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
    return (t, n) => (O(), T("div", YO, [
      e.showIcon ? (O(), qe(Qn, {
        key: 0,
        name: "ChevronDown",
        size: e.small ? "16" : "18"
      }, null, 8, ["size"])) : Q("", !0),
      w("select", rr(t.$attrs, {
        value: e.modelValue,
        class: ["vc-focus", {
          "vc-has-icon": e.showIcon,
          "vc-align-right": e.alignRight,
          "vc-align-left": e.alignLeft,
          "vc-small": e.small
        }],
        onChange: n[0] || (n[0] = (r) => t.$emit("update:modelValue", r.target.value))
      }), [
        (O(!0), T(te, null, he(e.options, (r) => (O(), T("option", {
          key: r.value,
          value: r.value,
          disabled: r.disabled
        }, ie(r.label), 9, UO))), 128))
      ], 16, VO)
    ]));
  }
}), Tu = "__vc_date_picker_context__", WO = {
  ...Du,
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
}, HO = [
  "update:modelValue",
  "drag",
  "dayclick",
  "daykeydown",
  "popover-will-show",
  "popover-did-show",
  "popover-will-hide",
  "popover-did-hide"
];
function BO(e, t) {
  const n = Eu(e), { locale: r, masks: s, disabledAttribute: a } = n, { emit: o } = t, i = ne(!1), l = ne(oa()), u = ne(null), c = ne(null), m = ne(["", ""]), f = ne(null), v = ne(null);
  let E, y, b = !0;
  const d = C(() => e.isRange || e.modelModifiers.range === !0), g = C(
    () => d.value && u.value != null ? u.value.start : null
  ), k = C(
    () => d.value && u.value != null ? u.value.end : null
  ), _ = C(() => e.mode.toLowerCase() === "date"), M = C(
    () => e.mode.toLowerCase() === "datetime"
  ), N = C(() => e.mode.toLowerCase() === "time"), A = C(() => !!c.value), P = C(() => {
    let I = "date";
    e.modelModifiers.number && (I = "number"), e.modelModifiers.string && (I = "string");
    const K = s.value.modelValue || "iso";
    return $e({ type: I, mask: K });
  }), L = C(
    () => nt(c.value ?? u.value)
  ), x = C(() => N.value ? e.is24hr ? s.value.inputTime24hr : s.value.inputTime : M.value ? e.is24hr ? s.value.inputDateTime24hr : s.value.inputDateTime : s.value.input), U = C(() => /[Hh]/g.test(x.value)), F = C(
    () => /[dD]{1,2}|Do|W{1,4}|M{1,4}|YY(?:YY)?/g.test(x.value)
  ), X = C(() => {
    if (U.value && F.value)
      return "dateTime";
    if (F.value)
      return "date";
    if (U.value)
      return "time";
  }), le = C(() => {
    var I;
    const K = ((I = f.value) == null ? void 0 : I.$el.previousElementSibling) ?? void 0;
    return Pr({}, e.popover, mn("datePicker.popover"), {
      target: K
    });
  }), H = C(
    () => $u({
      ...le.value,
      id: l.value
    })
  ), G = C(() => d.value ? {
    start: m.value[0],
    end: m.value[1]
  } : m.value[0]), j = C(() => {
    const I = ["start", "end"].map((K) => ({
      input: J(K),
      change: oe(K),
      keyup: _e,
      ...e.popover && H.value
    }));
    return d.value ? {
      start: I[0],
      end: I[1]
    } : I[0];
  }), Y = C(() => {
    if (!ge(u.value))
      return null;
    const I = {
      key: "select-drag",
      ...e.selectAttribute,
      dates: u.value,
      pinPage: !0
    }, { dot: K, bar: ue, highlight: we, content: Ke } = I;
    return !K && !ue && !we && !Ke && (I.highlight = !0), I;
  }), V = C(() => {
    if (!d.value || !ge(c.value))
      return null;
    const I = {
      key: "select-drag",
      ...e.dragAttribute,
      dates: c.value
    }, { dot: K, bar: ue, highlight: we, content: Ke } = I;
    return !K && !ue && !we && !Ke && (I.highlight = {
      startEnd: {
        fillMode: "outline"
      }
    }), I;
  }), $ = C(() => {
    const I = wt(e.attributes) ? [...e.attributes] : [];
    return V.value ? I.unshift(V.value) : Y.value && I.unshift(Y.value), I;
  }), q = C(() => $e(
    e.rules === "auto" ? pe() : e.rules ?? {}
  ));
  function pe() {
    const I = {
      ms: [0, 999],
      sec: [0, 59],
      min: [0, 59],
      hr: [0, 23]
    }, K = _.value ? 0 : e.timeAccuracy;
    return [0, 1].map((ue) => {
      switch (K) {
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
  function ee(I) {
    return $e(I).map(
      (K, ue) => ({
        ...K,
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
  function Ce(I, K) {
    const ue = Bn(I), we = Bn(K);
    return !ue && !we ? !0 : ue !== we ? !1 : I.getTime() === K.getTime();
  }
  function Ne(I, K) {
    if (d.value) {
      const ue = ge(I), we = ge(K);
      return !ue && !we ? !0 : ue !== we ? !1 : Ce(I.start, K.start) && Ce(I.end, K.end);
    }
    return Ce(I, K);
  }
  function De(I) {
    return !ge(I) || !a.value ? !1 : a.value.intersectsRange(r.value.range(I));
  }
  function Ve(I, K, ue, we) {
    if (!ge(I))
      return null;
    if (d.value) {
      const Ke = r.value.toDate(I.start, {
        ...K[0],
        fillDate: g.value ?? void 0,
        patch: ue
      }), Tt = r.value.toDate(I.end, {
        ...K[1],
        fillDate: k.value ?? void 0,
        patch: ue
      });
      return bn({ start: Ke, end: Tt }, we);
    }
    return r.value.toDateOrNull(I, {
      ...K[0],
      fillDate: u.value,
      patch: ue
    });
  }
  function Ye(I, K) {
    return d.value ? ge(I) ? {
      start: r.value.fromDate(I.start, K[0]),
      end: r.value.fromDate(I.end, K[1])
    } : null : r.value.fromDate(I, K[0]);
  }
  function Je(I, K = {}) {
    return clearTimeout(E), new Promise((ue) => {
      const { debounce: we = 0, ...Ke } = K;
      we > 0 ? E = window.setTimeout(() => {
        ue(D(I, Ke));
      }, we) : ue(D(I, Ke));
    });
  }
  function D(I, {
    config: K = P.value,
    patch: ue = "dateTime",
    clearIfEqual: we = !1,
    formatInput: Ke = !0,
    hidePopover: Tt = !1,
    dragging: lt = A.value,
    targetPriority: Sn,
    moveToValue: vr = !1
  } = {}) {
    const jr = ee(K);
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
    const io = Ye(
      _t,
      P.value
    );
    return Aa && (b = !1, o(lt ? "drag" : "update:modelValue", io), Yn(() => b = !0)), Tt && !lt && kt(), Ke && h(), vr && Yn(() => W(Sn ?? "start")), io;
  }
  function h() {
    Yn(() => {
      const I = ee({
        type: "string",
        mask: x.value
      }), K = Ye(
        c.value || u.value,
        I
      );
      d.value ? m.value = [K && K.start, K && K.end] : m.value = [K, ""];
    });
  }
  function S(I, K, ue) {
    m.value.splice(K === "start" ? 0 : 1, 1, I);
    const we = d.value ? {
      start: m.value[0],
      end: m.value[1] || m.value[0]
    } : I, Ke = {
      type: "string",
      mask: x.value
    };
    Je(we, {
      ...ue,
      config: Ke,
      patch: X.value,
      targetPriority: K,
      moveToValue: !0
    });
  }
  function J(I) {
    return (K) => {
      e.updateOnInput && S(K.currentTarget.value, I, {
        formatInput: !1,
        hidePopover: !1,
        debounce: e.inputDebounce
      });
    };
  }
  function oe(I) {
    return (K) => {
      S(K.currentTarget.value, I, {
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
  function B(I) {
    const K = {
      patch: "date",
      formatInput: !0,
      hidePopover: !0
    };
    if (d.value) {
      const ue = !A.value;
      ue ? y = { start: I.startDate, end: I.endDate } : y != null && (y.end = I.date), Je(y, {
        ...K,
        dragging: ue
      });
    } else
      Je(I.date, {
        ...K,
        clearIfEqual: !e.isRequired
      });
  }
  function Ue(I, K) {
    B(I), o("dayclick", I, K);
  }
  function je(I, K) {
    switch (K.key) {
      case " ":
      case "Enter": {
        B(I), K.preventDefault();
        break;
      }
      case "Escape":
        kt();
    }
    o("daykeydown", I, K);
  }
  function xt(I, K) {
    !A.value || y == null || (y.end = I.date, Je(bn(y), {
      patch: "date",
      formatInput: !0
    }));
  }
  function rn(I = {}) {
    ts({
      ...le.value,
      ...I,
      isInteractive: !0,
      id: l.value
    });
  }
  function kt(I = {}) {
    ba({
      hideDelay: 10,
      force: !0,
      ...le.value,
      ...I,
      id: l.value
    });
  }
  function Nt(I) {
    Ou({
      ...le.value,
      ...I,
      isInteractive: !0,
      id: l.value
    });
  }
  function bn(I, K) {
    const { start: ue, end: we } = I;
    if (ue > we)
      switch (K) {
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
      const K = d.value ? I ? g.value : k.value : u.value;
      return pu(K, "monthly", r.value);
    }
    return null;
  }
  async function Sa(I, K = {}) {
    return v.value == null ? !1 : v.value.move(I, K);
  }
  async function Ur(I, K = {}) {
    return v.value == null ? !1 : v.value.moveBy(I, K);
  }
  async function W(I, K = {}) {
    if (v.value == null)
      return !1;
    const { firstPage: ue, lastPage: we, move: Ke } = v.value, Tt = I !== "end", lt = Ln(Tt), Sn = Tt ? 1 : -1;
    return !lt || gu(lt, ue, we) ? !1 : Ke(lt, {
      position: Sn,
      ...K
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
      b && D(I, {
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
    popoverRef: f,
    popoverEvents: H,
    calendarRef: v,
    isRange: d,
    isTimeMode: N,
    isDateTimeMode: M,
    is24hr: xa(e, "is24hr"),
    hideTimeHeader: xa(e, "hideTimeHeader"),
    timeAccuracy: xa(e, "timeAccuracy"),
    isDragging: A,
    inputValue: G,
    inputEvents: j,
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
  return qn(Tu, de), de;
}
function GO() {
  const e = yt(Tu);
  if (e)
    return e;
  throw new Error(
    "DatePicker context missing. Please verify this component is nested within a valid context provider."
  );
}
const KO = [
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
], qO = [
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
function zO(e) {
  const t = GO(), {
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
  function m(F) {
    F = Object.assign(v.value, F);
    let X = null;
    if (r.value) {
      const le = f.value ? F : a.value[0], H = f.value ? a.value[1] : F;
      X = { start: le, end: H };
    } else
      X = F;
    c(X, {
      patch: "time",
      targetPriority: f.value ? "start" : "end",
      moveToValue: !0
    });
  }
  const f = C(() => e.position === 0), v = C(
    () => a.value[e.position] || { isValid: !1 }
  ), E = C(() => cu(v.value)), y = C(() => !!v.value.isValid), b = C(() => !l.value && y.value), d = C(() => {
    if (!E.value)
      return null;
    let F = n.value.toDate(v.value);
    return v.value.hours === 24 && (F = new Date(F.getTime() - 1)), F;
  }), g = C({
    get() {
      return v.value.hours;
    },
    set(F) {
      m({ hours: F });
    }
  }), k = C({
    get() {
      return v.value.minutes;
    },
    set(F) {
      m({ minutes: F });
    }
  }), _ = C({
    get() {
      return v.value.seconds;
    },
    set(F) {
      m({ seconds: F });
    }
  }), M = C({
    get() {
      return v.value.milliseconds;
    },
    set(F) {
      m({ milliseconds: F });
    }
  }), N = C({
    get() {
      return v.value.hours < 12;
    },
    set(F) {
      F = String(F).toLowerCase() == "true";
      let X = g.value;
      F && X >= 12 ? X -= 12 : !F && X < 12 && (X += 12), m({ hours: X });
    }
  }), A = C(
    () => Nw(v.value, o.value[e.position])
  ), P = C(() => KO.filter(
    (F) => A.value.hours.some((X) => X.value === F.value)
  )), L = C(() => qO.filter(
    (F) => A.value.hours.some((X) => X.value === F.value)
  )), x = C(() => i.value ? A.value.hours : N.value ? P.value : L.value), U = C(() => {
    const F = [];
    return Xt(P.value) && F.push({ value: !0, label: "AM" }), Xt(L.value) && F.push({ value: !1, label: "PM" }), F;
  });
  return {
    ...t,
    showHeader: b,
    timeAccuracy: u,
    parts: v,
    isValid: y,
    date: d,
    hours: g,
    minutes: k,
    seconds: _,
    milliseconds: M,
    options: A,
    hourOptions: x,
    isAM: N,
    isAMOptions: U,
    is24hr: i
  };
}
const XO = {
  key: 0,
  class: "vc-time-header"
}, ZO = { class: "vc-time-weekday" }, JO = { class: "vc-time-month" }, QO = { class: "vc-time-day" }, e$ = { class: "vc-time-year" }, t$ = { class: "vc-time-select-group" }, n$ = /* @__PURE__ */ w("span", { class: "vc-time-colon" }, ":", -1), r$ = /* @__PURE__ */ w("span", { class: "vc-time-colon" }, ":", -1), a$ = /* @__PURE__ */ w("span", { class: "vc-time-decimal" }, ".", -1), s$ = /* @__PURE__ */ Se({
  __name: "TimePicker",
  props: {
    position: null
  },
  setup(e, { expose: t }) {
    const r = zO(e);
    t(r);
    const {
      locale: s,
      isValid: a,
      date: o,
      hours: i,
      minutes: l,
      seconds: u,
      milliseconds: c,
      options: m,
      hourOptions: f,
      isTimeMode: v,
      isAM: E,
      isAMOptions: y,
      is24hr: b,
      showHeader: d,
      timeAccuracy: g
    } = r;
    return (k, _) => (O(), T("div", {
      class: Ge(["vc-time-picker", [{ "vc-invalid": !p(a), "vc-attached": !p(v) }]])
    }, [
      jt(k.$slots, "time-header", {}, () => [
        p(d) && p(o) ? (O(), T("div", XO, [
          w("span", ZO, ie(p(s).formatDate(p(o), "WWW")), 1),
          w("span", JO, ie(p(s).formatDate(p(o), "MMM")), 1),
          w("span", QO, ie(p(s).formatDate(p(o), "D")), 1),
          w("span", e$, ie(p(s).formatDate(p(o), "YYYY")), 1)
        ])) : Q("", !0)
      ]),
      w("div", t$, [
        me(Qn, {
          name: "Clock",
          size: "17"
        }),
        me(_r, {
          modelValue: p(i),
          "onUpdate:modelValue": _[0] || (_[0] = (M) => be(i) ? i.value = M : null),
          modelModifiers: { number: !0 },
          options: p(f),
          "align-right": ""
        }, null, 8, ["modelValue", "options"]),
        p(g) > 1 ? (O(), T(te, { key: 0 }, [
          n$,
          me(_r, {
            modelValue: p(l),
            "onUpdate:modelValue": _[1] || (_[1] = (M) => be(l) ? l.value = M : null),
            modelModifiers: { number: !0 },
            options: p(m).minutes,
            "align-left": p(g) === 2
          }, null, 8, ["modelValue", "options", "align-left"])
        ], 64)) : Q("", !0),
        p(g) > 2 ? (O(), T(te, { key: 1 }, [
          r$,
          me(_r, {
            modelValue: p(u),
            "onUpdate:modelValue": _[2] || (_[2] = (M) => be(u) ? u.value = M : null),
            modelModifiers: { number: !0 },
            options: p(m).seconds,
            "align-left": p(g) === 3
          }, null, 8, ["modelValue", "options", "align-left"])
        ], 64)) : Q("", !0),
        p(g) > 3 ? (O(), T(te, { key: 2 }, [
          a$,
          me(_r, {
            modelValue: p(c),
            "onUpdate:modelValue": _[3] || (_[3] = (M) => be(c) ? c.value = M : null),
            modelModifiers: { number: !0 },
            options: p(m).milliseconds,
            "align-left": ""
          }, null, 8, ["modelValue", "options"])
        ], 64)) : Q("", !0),
        p(b) ? Q("", !0) : (O(), qe(_r, {
          key: 3,
          modelValue: p(E),
          "onUpdate:modelValue": _[4] || (_[4] = (M) => be(E) ? E.value = M : null),
          options: p(y)
        }, null, 8, ["modelValue", "options"]))
      ])
    ], 2));
  }
}), zs = Se({
  name: "DatePicker",
  inheritAttrs: !1,
  emits: HO,
  props: WO,
  setup(e, t) {
    const n = BO(e, t), { slots: r, attrs: s } = t, {
      isTimeMode: a,
      isRange: o,
      isDateTimeMode: i,
      color: l,
      displayMode: u,
      dateParts: c,
      datePickerPopoverId: m,
      attributes: f,
      calendarRef: v,
      popoverRef: E,
      showCalendar: y,
      onDayClick: b,
      onDayMouseEnter: d,
      onDayKeydown: g,
      onPopoverBeforeShow: k,
      onPopoverAfterShow: _,
      onPopoverBeforeHide: M,
      onPopoverAfterHide: N
    } = n;
    t.expose(n);
    const A = hs(eu(n, "calendarRef", "popoverRef")), P = () => (o.value ? [0, 1] : [0]).map((F) => Fn(s$, { position: F })), L = () => {
      if (!c.value)
        return null;
      const U = i.value ? { ...r, footer: P } : r;
      return Fn(
        FO,
        {
          ...s,
          attributes: f.value,
          ref: v,
          onDayclick: b,
          onDaymouseenter: d,
          onDaykeydown: g
        },
        U
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
      if (y.value)
        return L();
    };
    return r.default ? () => [
      // Popover trigger
      r.default(A),
      // Popover content
      Fn(
        qs,
        {
          id: m.value,
          placement: "bottom-start",
          class: `vc-date-picker-content vc-${l.value} vc-${u.value}`,
          ref: E,
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
const o$ = { class: "flex flex-col gap-2" }, i$ = { class: "flex items-center gap-2" }, l$ = /* @__PURE__ */ w("label", {
  for: "due",
  class: "p3-b"
}, "結束於指定日期", -1), u$ = ["onClick"], c$ = /* @__PURE__ */ Se({
  __name: "DuePicker",
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, r = C({
      get: () => n.modelValue,
      set: (a) => t("update:modelValue", a)
    }), s = ne(!1);
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
    }), (a, o) => (O(), T("div", o$, [
      w("div", i$, [
        Pe(w("input", {
          type: "checkbox",
          "onUpdate:modelValue": o[0] || (o[0] = (i) => be(s) ? s.value = i : null),
          id: "due"
        }, null, 512), [
          [ta, p(s)]
        ]),
        l$,
        p(s) ? (O(), qe(p(zs), {
          key: 0,
          modelValue: p(r),
          "onUpdate:modelValue": o[1] || (o[1] = (i) => be(r) ? r.value = i : null),
          mode: "dateTime",
          timezone: "UTC",
          "min-Date": /* @__PURE__ */ new Date()
        }, {
          default: ze(({ togglePopover: i, inputValue: l }) => [
            w("button", {
              class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 transition-all hover:bg-light-3 hover:bg-opacity-50",
              onClick: i
            }, ie(l || "請選定結束日期"), 9, u$)
          ]),
          _: 1
        }, 8, ["modelValue", "min-Date"])) : Q("", !0)
      ])
    ]));
  }
}), d$ = { class: "flex w-auto items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-1.5" }, f$ = ["value", "type", "placeholder", "maxLength", "required"], v$ = /* @__PURE__ */ Se({
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
    return (s, a) => (O(), T("div", d$, [
      w("input", {
        value: s.modelValue,
        onInput: r,
        type: s.type,
        class: "p3-b w-full border-none outline-none shadow-none",
        placeholder: s.placeholder,
        maxLength: s.maxLength,
        required: s.required
      }, null, 40, f$)
    ]));
  }
});
const Mt = /* @__PURE__ */ bs(v$, [["__scopeId", "data-v-068dea7c"]]);
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
const m$ = /\{([0-9a-zA-Z]+)\}/g;
function Xs(e, ...t) {
  return t.length === 1 && ke(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(m$, (n, r) => t.hasOwnProperty(r) ? t[r] : "");
}
const Kt = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), p$ = (e, t, n) => h$({ l: e, k: t, s: n }), h$ = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Ze = (e) => typeof e == "number" && isFinite(e), g$ = (e) => Mu(e) === "[object Date]", pn = (e) => Mu(e) === "[object RegExp]", Ia = (e) => ve(e) && Object.keys(e).length === 0, tt = Object.assign;
let Di;
const zt = () => Di || (Di = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ei(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const _$ = Object.prototype.hasOwnProperty;
function Zs(e, t) {
  return _$.call(e, t);
}
const Ae = Array.isArray, Fe = (e) => typeof e == "function", Z = (e) => typeof e == "string", ye = (e) => typeof e == "boolean", ke = (e) => e !== null && typeof e == "object", Iu = Object.prototype.toString, Mu = (e) => Iu.call(e), ve = (e) => {
  if (!ke(e))
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t.constructor === Object;
}, b$ = (e) => e == null ? "" : Ae(e) || ve(e) && e.toString === Iu ? JSON.stringify(e, null, 2) : String(e);
function y$(e, t = "") {
  return e.reduce((n, r, s) => s === 0 ? n + r : n + t + r, "");
}
const wi = 2;
function D$(e, t = 0, n = e.length) {
  const r = e.split(/\r?\n/);
  let s = 0;
  const a = [];
  for (let o = 0; o < r.length; o++)
    if (s += r[o].length + 1, s >= t) {
      for (let i = o - wi; i <= o + wi || n > s; i++) {
        if (i < 0 || i >= r.length)
          continue;
        const l = i + 1;
        a.push(`${l}${" ".repeat(3 - String(l).length)}|  ${r[i]}`);
        const u = r[i].length;
        if (i === o) {
          const c = t - (s - u) + 1, m = Math.max(1, n > s ? u - c : n - t);
          a.push("   |  " + " ".repeat(c) + "^".repeat(m));
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
const Oi = {};
function E$(e) {
  Oi[e] || (Oi[e] = !0, et(e));
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
function w$(e, t, n) {
  return { line: e, column: t, offset: n };
}
function ns(e, t, n) {
  const r = { start: e, end: t };
  return n != null && (r.source = n), r;
}
const O$ = /\{([0-9a-zA-Z]+)\}/g;
function $$(e, ...t) {
  return t.length === 1 && k$(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(O$, (n, r) => t.hasOwnProperty(r) ? t[r] : "");
}
const Cu = Object.assign, $i = (e) => typeof e == "string", k$ = (e) => e !== null && typeof e == "object";
function Pu(e, t = "") {
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
}, N$ = {
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
  const { domain: r, messages: s, args: a } = n, o = $$((s || N$)[e] || "", ...a || []), i = new SyntaxError(String(o));
  return i.code = e, t && (i.location = t), i.domain = r, i;
}
function T$(e) {
  throw e;
}
const I$ = /<\/?[\w\s="/.':;#-\/]+>/, M$ = (e) => I$.test(e), qt = " ", C$ = "\r", st = `
`, P$ = String.fromCharCode(8232), L$ = String.fromCharCode(8233);
function S$(e) {
  const t = e;
  let n = 0, r = 1, s = 1, a = 0;
  const o = (A) => t[A] === C$ && t[A + 1] === st, i = (A) => t[A] === st, l = (A) => t[A] === L$, u = (A) => t[A] === P$, c = (A) => o(A) || i(A) || l(A) || u(A), m = () => n, f = () => r, v = () => s, E = () => a, y = (A) => o(A) || l(A) || u(A) ? st : t[A], b = () => y(n), d = () => y(n + a);
  function g() {
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
      g();
    a = 0;
  }
  return {
    index: m,
    line: f,
    column: v,
    peekOffset: E,
    charAt: y,
    currentChar: b,
    currentPeek: d,
    next: g,
    peek: k,
    reset: _,
    resetPeek: M,
    skipToPeek: N
  };
}
const sn = void 0, A$ = ".", ki = "'", x$ = "tokenizer";
function R$(e, t = {}) {
  const n = t.location !== !1, r = S$(e), s = () => r.index(), a = () => w$(r.line(), r.column(), r.index()), o = a(), i = s(), l = {
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
  function m(D, h, S, ...J) {
    const oe = u();
    if (h.column += S, h.offset += S, c) {
      const _e = n ? ns(oe.startLoc, h) : null, nt = fr(D, _e, {
        domain: x$,
        args: J
      });
      c(nt);
    }
  }
  function f(D, h, S) {
    D.endLoc = a(), D.currentType = h;
    const J = { type: h };
    return n && (J.loc = ns(D.startLoc, D.endLoc)), S != null && (J.value = S), J;
  }
  const v = (D) => f(
    D,
    14
    /* TokenTypes.EOF */
  );
  function E(D, h) {
    return D.currentChar() === h ? (D.next(), h) : (m(ce.EXPECTED_TOKEN, a(), 0, h), "");
  }
  function y(D) {
    let h = "";
    for (; D.currentPeek() === qt || D.currentPeek() === st; )
      h += D.currentPeek(), D.peek();
    return h;
  }
  function b(D) {
    const h = y(D);
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
  function g(D) {
    if (D === sn)
      return !1;
    const h = D.charCodeAt(0);
    return h >= 48 && h <= 57;
  }
  function k(D, h) {
    const { currentType: S } = h;
    if (S !== 2)
      return !1;
    y(D);
    const J = d(D.currentPeek());
    return D.resetPeek(), J;
  }
  function _(D, h) {
    const { currentType: S } = h;
    if (S !== 2)
      return !1;
    y(D);
    const J = D.currentPeek() === "-" ? D.peek() : D.currentPeek(), oe = g(J);
    return D.resetPeek(), oe;
  }
  function M(D, h) {
    const { currentType: S } = h;
    if (S !== 2)
      return !1;
    y(D);
    const J = D.currentPeek() === ki;
    return D.resetPeek(), J;
  }
  function N(D, h) {
    const { currentType: S } = h;
    if (S !== 8)
      return !1;
    y(D);
    const J = D.currentPeek() === ".";
    return D.resetPeek(), J;
  }
  function A(D, h) {
    const { currentType: S } = h;
    if (S !== 9)
      return !1;
    y(D);
    const J = d(D.currentPeek());
    return D.resetPeek(), J;
  }
  function P(D, h) {
    const { currentType: S } = h;
    if (!(S === 8 || S === 12))
      return !1;
    y(D);
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
    }, oe = J();
    return D.resetPeek(), oe;
  }
  function x(D) {
    y(D);
    const h = D.currentPeek() === "|";
    return D.resetPeek(), h;
  }
  function U(D) {
    const h = y(D), S = D.currentPeek() === "%" && D.peek() === "{";
    return D.resetPeek(), {
      isModulo: S,
      hasSpace: h.length > 0
    };
  }
  function F(D, h = !0) {
    const S = (oe = !1, _e = "", nt = !1) => {
      const He = D.currentPeek();
      return He === "{" ? _e === "%" ? !1 : oe : He === "@" || !He ? _e === "%" ? !0 : oe : He === "%" ? (D.peek(), S(oe, "%", !0)) : He === "|" ? _e === "%" || nt ? !0 : !(_e === qt || _e === st) : He === qt ? (D.peek(), S(!0, qt, nt)) : He === st ? (D.peek(), S(!0, st, nt)) : !0;
    }, J = S();
    return h && D.resetPeek(), J;
  }
  function X(D, h) {
    const S = D.currentChar();
    return S === sn ? sn : h(S) ? (D.next(), S) : null;
  }
  function le(D) {
    return X(D, (S) => {
      const J = S.charCodeAt(0);
      return J >= 97 && J <= 122 || // a-z
      J >= 65 && J <= 90 || // A-Z
      J >= 48 && J <= 57 || // 0-9
      J === 95 || // _
      J === 36;
    });
  }
  function H(D) {
    return X(D, (S) => {
      const J = S.charCodeAt(0);
      return J >= 48 && J <= 57;
    });
  }
  function G(D) {
    return X(D, (S) => {
      const J = S.charCodeAt(0);
      return J >= 48 && J <= 57 || // 0-9
      J >= 65 && J <= 70 || // A-F
      J >= 97 && J <= 102;
    });
  }
  function j(D) {
    let h = "", S = "";
    for (; h = H(D); )
      S += h;
    return S;
  }
  function Y(D) {
    b(D);
    const h = D.currentChar();
    return h !== "%" && m(ce.EXPECTED_TOKEN, a(), 0, h), D.next(), "%";
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
    b(D);
    let h = "", S = "";
    for (; h = le(D); )
      S += h;
    return D.currentChar() === sn && m(ce.UNTERMINATED_CLOSING_BRACE, a(), 0), S;
  }
  function q(D) {
    b(D);
    let h = "";
    return D.currentChar() === "-" ? (D.next(), h += `-${j(D)}`) : h += j(D), D.currentChar() === sn && m(ce.UNTERMINATED_CLOSING_BRACE, a(), 0), h;
  }
  function pe(D) {
    b(D), E(D, "'");
    let h = "", S = "";
    const J = (_e) => _e !== ki && _e !== st;
    for (; h = X(D, J); )
      h === "\\" ? S += $e(D) : S += h;
    const oe = D.currentChar();
    return oe === st || oe === sn ? (m(ce.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0), oe === st && (D.next(), E(D, "'")), S) : (E(D, "'"), S);
  }
  function $e(D) {
    const h = D.currentChar();
    switch (h) {
      case "\\":
      case "'":
        return D.next(), `\\${h}`;
      case "u":
        return ee(D, h, 4);
      case "U":
        return ee(D, h, 6);
      default:
        return m(ce.UNKNOWN_ESCAPE_SEQUENCE, a(), 0, h), "";
    }
  }
  function ee(D, h, S) {
    E(D, h);
    let J = "";
    for (let oe = 0; oe < S; oe++) {
      const _e = G(D);
      if (!_e) {
        m(ce.INVALID_UNICODE_ESCAPE_SEQUENCE, a(), 0, `\\${h}${J}${D.currentChar()}`);
        break;
      }
      J += _e;
    }
    return `\\${h}${J}`;
  }
  function Ee(D) {
    b(D);
    let h = "", S = "";
    const J = (oe) => oe !== "{" && oe !== "}" && oe !== qt && oe !== st;
    for (; h = X(D, J); )
      S += h;
    return S;
  }
  function ge(D) {
    let h = "", S = "";
    for (; h = le(D); )
      S += h;
    return S;
  }
  function Ce(D) {
    const h = (S = !1, J) => {
      const oe = D.currentChar();
      return oe === "{" || oe === "%" || oe === "@" || oe === "|" || oe === "(" || oe === ")" || !oe || oe === qt ? J : oe === st || oe === A$ ? (J += oe, D.next(), h(S, J)) : (J += oe, D.next(), h(!0, J));
    };
    return h(!1, "");
  }
  function Ne(D) {
    b(D);
    const h = E(
      D,
      "|"
      /* TokenChars.Pipe */
    );
    return b(D), h;
  }
  function De(D, h) {
    let S = null;
    switch (D.currentChar()) {
      case "{":
        return h.braceNest >= 1 && m(ce.NOT_ALLOW_NEST_PLACEHOLDER, a(), 0), D.next(), S = f(
          h,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), b(D), h.braceNest++, S;
      case "}":
        return h.braceNest > 0 && h.currentType === 2 && m(ce.EMPTY_PLACEHOLDER, a(), 0), D.next(), S = f(
          h,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), h.braceNest--, h.braceNest > 0 && b(D), h.inLinked && h.braceNest === 0 && (h.inLinked = !1), S;
      case "@":
        return h.braceNest > 0 && m(ce.UNTERMINATED_CLOSING_BRACE, a(), 0), S = Ve(D, h) || v(h), h.braceNest = 0, S;
      default:
        let oe = !0, _e = !0, nt = !0;
        if (x(D))
          return h.braceNest > 0 && m(ce.UNTERMINATED_CLOSING_BRACE, a(), 0), S = f(h, 1, Ne(D)), h.braceNest = 0, h.inLinked = !1, S;
        if (h.braceNest > 0 && (h.currentType === 5 || h.currentType === 6 || h.currentType === 7))
          return m(ce.UNTERMINATED_CLOSING_BRACE, a(), 0), h.braceNest = 0, Ye(D, h);
        if (oe = k(D, h))
          return S = f(h, 5, $(D)), b(D), S;
        if (_e = _(D, h))
          return S = f(h, 6, q(D)), b(D), S;
        if (nt = M(D, h))
          return S = f(h, 7, pe(D)), b(D), S;
        if (!oe && !_e && !nt)
          return S = f(h, 13, Ee(D)), m(ce.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, S.value), b(D), S;
        break;
    }
    return S;
  }
  function Ve(D, h) {
    const { currentType: S } = h;
    let J = null;
    const oe = D.currentChar();
    switch ((S === 8 || S === 9 || S === 12 || S === 10) && (oe === st || oe === qt) && m(ce.INVALID_LINKED_FORMAT, a(), 0), oe) {
      case "@":
        return D.next(), J = f(
          h,
          8,
          "@"
          /* TokenChars.LinkedAlias */
        ), h.inLinked = !0, J;
      case ".":
        return b(D), D.next(), f(
          h,
          9,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return b(D), D.next(), f(
          h,
          10,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return x(D) ? (J = f(h, 1, Ne(D)), h.braceNest = 0, h.inLinked = !1, J) : N(D, h) || P(D, h) ? (b(D), Ve(D, h)) : A(D, h) ? (b(D), f(h, 12, ge(D))) : L(D, h) ? (b(D), oe === "{" ? De(D, h) || J : f(h, 11, Ce(D))) : (S === 8 && m(ce.INVALID_LINKED_FORMAT, a(), 0), h.braceNest = 0, h.inLinked = !1, Ye(D, h));
    }
  }
  function Ye(D, h) {
    let S = {
      type: 14
      /* TokenTypes.EOF */
    };
    if (h.braceNest > 0)
      return De(D, h) || v(h);
    if (h.inLinked)
      return Ve(D, h) || v(h);
    switch (D.currentChar()) {
      case "{":
        return De(D, h) || v(h);
      case "}":
        return m(ce.UNBALANCED_CLOSING_BRACE, a(), 0), D.next(), f(
          h,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return Ve(D, h) || v(h);
      default:
        if (x(D))
          return S = f(h, 1, Ne(D)), h.braceNest = 0, h.inLinked = !1, S;
        const { isModulo: oe, hasSpace: _e } = U(D);
        if (oe)
          return _e ? f(h, 0, V(D)) : f(h, 4, Y(D));
        if (F(D))
          return f(h, 0, V(D));
        break;
    }
    return S;
  }
  function Je() {
    const { currentType: D, offset: h, startLoc: S, endLoc: J } = l;
    return l.lastType = D, l.lastOffset = h, l.lastStartLoc = S, l.lastEndLoc = J, l.offset = s(), l.startLoc = a(), r.currentChar() === sn ? f(
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
const F$ = "parser", Y$ = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function V$(e, t, n) {
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
function U$(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function r(d, g, k, _, ...M) {
    const N = d.currentPosition();
    if (N.offset += _, N.column += _, n) {
      const A = t ? ns(k, N) : null, P = fr(g, A, {
        domain: F$,
        args: M
      });
      n(P);
    }
  }
  function s(d, g, k) {
    const _ = { type: d };
    return t && (_.start = g, _.end = g, _.loc = { start: k, end: k }), _;
  }
  function a(d, g, k, _) {
    _ && (d.type = _), t && (d.end = g, d.loc && (d.loc.end = k));
  }
  function o(d, g) {
    const k = d.context(), _ = s(3, k.offset, k.startLoc);
    return _.value = g, a(_, d.currentOffset(), d.currentPosition()), _;
  }
  function i(d, g) {
    const k = d.context(), { lastOffset: _, lastStartLoc: M } = k, N = s(5, _, M);
    return N.index = parseInt(g, 10), d.nextToken(), a(N, d.currentOffset(), d.currentPosition()), N;
  }
  function l(d, g) {
    const k = d.context(), { lastOffset: _, lastStartLoc: M } = k, N = s(4, _, M);
    return N.key = g, d.nextToken(), a(N, d.currentOffset(), d.currentPosition()), N;
  }
  function u(d, g) {
    const k = d.context(), { lastOffset: _, lastStartLoc: M } = k, N = s(9, _, M);
    return N.value = g.replace(Y$, V$), d.nextToken(), a(N, d.currentOffset(), d.currentPosition()), N;
  }
  function c(d) {
    const g = d.nextToken(), k = d.context(), { lastOffset: _, lastStartLoc: M } = k, N = s(8, _, M);
    return g.type !== 12 ? (r(d, ce.UNEXPECTED_EMPTY_LINKED_MODIFIER, k.lastStartLoc, 0), N.value = "", a(N, _, M), {
      nextConsumeToken: g,
      node: N
    }) : (g.value == null && r(d, ce.UNEXPECTED_LEXICAL_ANALYSIS, k.lastStartLoc, 0, Rt(g)), N.value = g.value || "", a(N, d.currentOffset(), d.currentPosition()), {
      node: N
    });
  }
  function m(d, g) {
    const k = d.context(), _ = s(7, k.offset, k.startLoc);
    return _.value = g, a(_, d.currentOffset(), d.currentPosition()), _;
  }
  function f(d) {
    const g = d.context(), k = s(6, g.offset, g.startLoc);
    let _ = d.nextToken();
    if (_.type === 9) {
      const M = c(d);
      k.modifier = M.node, _ = M.nextConsumeToken || d.nextToken();
    }
    switch (_.type !== 10 && r(d, ce.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, Rt(_)), _ = d.nextToken(), _.type === 2 && (_ = d.nextToken()), _.type) {
      case 11:
        _.value == null && r(d, ce.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, Rt(_)), k.key = m(d, _.value || "");
        break;
      case 5:
        _.value == null && r(d, ce.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, Rt(_)), k.key = l(d, _.value || "");
        break;
      case 6:
        _.value == null && r(d, ce.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, Rt(_)), k.key = i(d, _.value || "");
        break;
      case 7:
        _.value == null && r(d, ce.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, Rt(_)), k.key = u(d, _.value || "");
        break;
      default:
        r(d, ce.UNEXPECTED_EMPTY_LINKED_KEY, g.lastStartLoc, 0);
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
  function v(d) {
    const g = d.context(), k = g.currentType === 1 ? d.currentOffset() : g.offset, _ = g.currentType === 1 ? g.endLoc : g.startLoc, M = s(2, k, _);
    M.items = [];
    let N = null;
    do {
      const L = N || d.nextToken();
      switch (N = null, L.type) {
        case 0:
          L.value == null && r(d, ce.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, Rt(L)), M.items.push(o(d, L.value || ""));
          break;
        case 6:
          L.value == null && r(d, ce.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, Rt(L)), M.items.push(i(d, L.value || ""));
          break;
        case 5:
          L.value == null && r(d, ce.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, Rt(L)), M.items.push(l(d, L.value || ""));
          break;
        case 7:
          L.value == null && r(d, ce.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, Rt(L)), M.items.push(u(d, L.value || ""));
          break;
        case 8:
          const x = f(d);
          M.items.push(x.node), N = x.nextConsumeToken || null;
          break;
      }
    } while (g.currentType !== 14 && g.currentType !== 1);
    const A = g.currentType === 1 ? g.lastOffset : d.currentOffset(), P = g.currentType === 1 ? g.lastEndLoc : d.currentPosition();
    return a(M, A, P), M;
  }
  function E(d, g, k, _) {
    const M = d.context();
    let N = _.items.length === 0;
    const A = s(1, g, k);
    A.cases = [], A.cases.push(_);
    do {
      const P = v(d);
      N || (N = P.items.length === 0), A.cases.push(P);
    } while (M.currentType !== 14);
    return N && r(d, ce.MUST_HAVE_MESSAGES_IN_PLURAL, k, 0), a(A, d.currentOffset(), d.currentPosition()), A;
  }
  function y(d) {
    const g = d.context(), { offset: k, startLoc: _ } = g, M = v(d);
    return g.currentType === 14 ? M : E(d, k, _, M);
  }
  function b(d) {
    const g = R$(d, Cu({}, e)), k = g.context(), _ = s(0, k.offset, k.startLoc);
    return t && _.loc && (_.loc.source = d), _.body = y(g), e.onCacheKey && (_.cacheKey = e.onCacheKey(d)), k.currentType !== 14 && r(g, ce.UNEXPECTED_LEXICAL_ANALYSIS, k.lastStartLoc, 0, d[k.offset] || ""), a(_, g.currentOffset(), g.currentPosition()), _;
  }
  return { parse: b };
}
function Rt(e) {
  if (e.type === 14)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function j$(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (a) => (n.helpers.add(a), a) };
}
function Ni(e, t) {
  for (let n = 0; n < e.length; n++)
    eo(e[n], t);
}
function eo(e, t) {
  switch (e.type) {
    case 1:
      Ni(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      Ni(e.items, t);
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
function W$(e, t = {}) {
  const n = j$(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && eo(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function H$(e) {
  const t = e.body;
  return t.type === 2 ? Ti(t) : t.cases.forEach((n) => Ti(n)), e;
}
function Ti(e) {
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
      e.static = Pu(t);
      for (let n = 0; n < e.items.length; n++) {
        const r = e.items[n];
        (r.type === 3 || r.type === 9) && delete r.value;
      }
    }
  }
}
const B$ = "minifier";
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
        domain: B$,
        args: [e.type]
      });
  }
  delete e.type;
}
const G$ = "parser";
function K$(e, t) {
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
  function u(b, d) {
    i.code += b;
  }
  function c(b, d = !0) {
    const g = d ? s : "";
    u(a ? g + "  ".repeat(b) : g);
  }
  function m(b = !0) {
    const d = ++i.indentLevel;
    b && c(d);
  }
  function f(b = !0) {
    const d = --i.indentLevel;
    b && c(d);
  }
  function v() {
    c(i.indentLevel);
  }
  return {
    context: l,
    push: u,
    indent: m,
    deindent: f,
    newline: v,
    helper: (b) => `_${b}`,
    needIndent: () => i.needIndent
  };
}
function q$(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), tr(e, t.key), t.modifier ? (e.push(", "), tr(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function z$(e, t) {
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
function X$(e, t) {
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
function Z$(e, t) {
  t.body ? tr(e, t.body) : e.push("null");
}
function tr(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      Z$(e, t);
      break;
    case 1:
      X$(e, t);
      break;
    case 2:
      z$(e, t);
      break;
    case 6:
      q$(e, t);
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
        domain: G$,
        args: [t.type]
      });
  }
}
const J$ = (e, t = {}) => {
  const n = $i(t.mode) ? t.mode : "normal", r = $i(t.filename) ? t.filename : "message.intl", s = !!t.sourceMap, a = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, o = t.needIndent ? t.needIndent : n !== "arrow", i = e.helpers || [], l = K$(e, {
    mode: n,
    filename: r,
    sourceMap: s,
    breakLineCode: a,
    needIndent: o
  });
  l.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), l.indent(o), i.length > 0 && (l.push(`const { ${Pu(i.map((m) => `${m}: _${m}`), ", ")} } = ctx`), l.newline()), l.push("return "), tr(l, e), l.deindent(o), l.push("}"), delete e.helpers;
  const { code: u, map: c } = l.context();
  return {
    ast: e,
    code: u,
    map: c ? c.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function Q$(e, t = {}) {
  const n = Cu({}, t), r = !!n.jit, s = !!n.minify, a = n.optimize == null ? !0 : n.optimize, i = U$(n).parse(e);
  return r ? (a && H$(i), s && Rn(i), { ast: i, code: "" }) : (W$(i, n), J$(i, n));
}
/*!
  * core-base v9.5.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */
function ek() {
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
const tk = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function nk(e) {
  return tk.test(e);
}
function rk(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function ak(e) {
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
function sk(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : nk(t) ? rk(t) : "*" + t;
}
function ok(e) {
  const t = [];
  let n = -1, r = 0, s = 0, a, o, i, l, u, c, m;
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
    ](), s++;
  }, f[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (s > 0)
      s--, r = 4, f[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (s = 0, o === void 0 || (o = sk(o), o === !1))
        return !1;
      f[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function v() {
    const E = e[n + 1];
    if (r === 5 && E === "'" || r === 6 && E === '"')
      return n++, i = "\\" + E, f[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; r !== null; )
    if (n++, a = e[n], !(a === "\\" && v())) {
      if (l = ak(a), m = _n[r], u = m[l] || m.l || 8, u === 8 || (r = u[0], u[1] !== void 0 && (c = f[u[1]], c && (i = a, c() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const Ii = /* @__PURE__ */ new Map();
function ik(e, t) {
  return ke(e) ? e[t] : null;
}
function lk(e, t) {
  if (!ke(e))
    return null;
  let n = Ii.get(t);
  if (n || (n = ok(t), n && Ii.set(t, n)), !n)
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
const uk = (e) => e, ck = (e) => "", dk = "text", fk = (e) => e.length === 0 ? "" : y$(e), vk = b$;
function Mi(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function mk(e) {
  const t = Ze(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Ze(e.named.count) || Ze(e.named.n)) ? Ze(e.named.count) ? e.named.count : Ze(e.named.n) ? e.named.n : t : t;
}
function pk(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function hk(e = {}) {
  const t = e.locale, n = mk(e), r = ke(e.pluralRules) && Z(t) && Fe(e.pluralRules[t]) ? e.pluralRules[t] : Mi, s = ke(e.pluralRules) && Z(t) && Fe(e.pluralRules[t]) ? Mi : void 0, a = (d) => d[r(n, d.length, s)], o = e.list || [], i = (d) => o[d], l = e.named || {};
  Ze(e.pluralIndex) && pk(n, l);
  const u = (d) => l[d];
  function c(d) {
    const g = Fe(e.messages) ? e.messages(d) : ke(e.messages) ? e.messages[d] : !1;
    return g || (e.parent ? e.parent.message(d) : ck);
  }
  const m = (d) => e.modifiers ? e.modifiers[d] : uk, f = ve(e.processor) && Fe(e.processor.normalize) ? e.processor.normalize : fk, v = ve(e.processor) && Fe(e.processor.interpolate) ? e.processor.interpolate : vk, E = ve(e.processor) && Z(e.processor.type) ? e.processor.type : dk, b = {
    list: i,
    named: u,
    plural: a,
    linked: (d, ...g) => {
      const [k, _] = g;
      let M = "text", N = "";
      g.length === 1 ? ke(k) ? (N = k.modifier || N, M = k.type || M) : Z(k) && (N = k || N) : g.length === 2 && (Z(k) && (N = k || N), Z(_) && (M = _ || M));
      const A = c(d)(b), P = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        M === "vnode" && Ae(A) && N ? A[0] : A
      );
      return N ? m(N)(P, M) : P;
    },
    message: c,
    type: E,
    interpolate: v,
    normalize: f,
    values: tt({}, o, l)
  };
  return b;
}
let Lr = null;
function gk(e) {
  Lr = e;
}
function _k(e, t, n) {
  Lr && Lr.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: n
  });
}
const bk = /* @__PURE__ */ yk(
  "function:translate"
  /* IntlifyDevToolsHooks.FunctionTranslate */
);
function yk(e) {
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
}, Dk = {
  [ot.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
  [ot.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
  [ot.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
  [ot.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
  [ot.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
  [ot.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale.",
  [ot.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: "This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future."
};
function Nn(e, ...t) {
  return Xs(Dk[e], ...t);
}
function to(e, t) {
  return t.locale != null ? Ci(t.locale) : Ci(e.locale);
}
let Ua;
function Ci(e) {
  return Z(e) ? e : Ua != null && e.resolvedOnce ? Ua : Ua = e();
}
function Ek(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...Ae(t) ? t : ke(t) ? Object.keys(t) : Z(t) ? [t] : [n]
  ])];
}
function Lu(e, t, n) {
  const r = Z(n) ? n : nr, s = e;
  s.__localeChainCache || (s.__localeChainCache = /* @__PURE__ */ new Map());
  let a = s.__localeChainCache.get(r);
  if (!a) {
    a = [];
    let o = [n];
    for (; Ae(o); )
      o = Pi(a, o, t);
    const i = Ae(t) || !ve(t) ? t : t.default ? t.default : null;
    o = Z(i) ? [i] : i, Ae(o) && Pi(a, o, !1), s.__localeChainCache.set(r, a);
  }
  return a;
}
function Pi(e, t, n) {
  let r = !0;
  for (let s = 0; s < t.length && ye(r); s++) {
    const a = t[s];
    Z(a) && (r = wk(e, t[s], n));
  }
  return r;
}
function wk(e, t, n) {
  let r;
  const s = t.split("-");
  do {
    const a = s.join("-");
    r = Ok(e, a, n), s.splice(-1, 1);
  } while (s.length && r === !0);
  return r;
}
function Ok(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== "!";
    const s = t.replace(/!/g, "");
    e.push(s), (Ae(n) || ve(n)) && n[s] && (r = n[s]);
  }
  return r;
}
const $k = "9.5.0", Ma = -1, nr = "en-US", ya = "", Li = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function kk() {
  return {
    upper: (e, t) => t === "text" && Z(e) ? e.toUpperCase() : t === "vnode" && ke(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && Z(e) ? e.toLowerCase() : t === "vnode" && ke(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && Z(e) ? Li(e) : t === "vnode" && ke(e) && "__v_isVNode" in e ? Li(e.children) : e
  };
}
let Su;
function Si(e) {
  Su = e;
}
let Au;
function Nk(e) {
  Au = e;
}
let xu;
function Tk(e) {
  xu = e;
}
let Ru = null;
const Ai = (e) => {
  Ru = e;
}, Ik = () => Ru;
let Fu = null;
const xi = (e) => {
  Fu = e;
}, Mk = () => Fu;
let Ri = 0;
function Ck(e = {}) {
  const t = Fe(e.onWarn) ? e.onWarn : et, n = Z(e.version) ? e.version : $k, r = Z(e.locale) || Fe(e.locale) ? e.locale : nr, s = Fe(r) ? nr : r, a = Ae(e.fallbackLocale) || ve(e.fallbackLocale) || Z(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : s, o = ve(e.messages) ? e.messages : { [s]: {} }, i = ve(e.datetimeFormats) ? e.datetimeFormats : { [s]: {} }, l = ve(e.numberFormats) ? e.numberFormats : { [s]: {} }, u = tt({}, e.modifiers || {}, kk()), c = e.pluralRules || {}, m = Fe(e.missing) ? e.missing : null, f = ye(e.missingWarn) || pn(e.missingWarn) ? e.missingWarn : !0, v = ye(e.fallbackWarn) || pn(e.fallbackWarn) ? e.fallbackWarn : !0, E = !!e.fallbackFormat, y = !!e.unresolving, b = Fe(e.postTranslation) ? e.postTranslation : null, d = ve(e.processor) ? e.processor : null, g = ye(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, k = !!e.escapeParameter, _ = Fe(e.messageCompiler) ? e.messageCompiler : Su;
  process.env.NODE_ENV !== "production" && Fe(e.messageCompiler) && E$(Nn(ot.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
  const M = Fe(e.messageResolver) ? e.messageResolver : Au || ik, N = Fe(e.localeFallbacker) ? e.localeFallbacker : xu || Ek, A = ke(e.fallbackContext) ? e.fallbackContext : void 0, P = e, L = ke(P.__datetimeFormatters) ? P.__datetimeFormatters : /* @__PURE__ */ new Map(), x = ke(P.__numberFormatters) ? P.__numberFormatters : /* @__PURE__ */ new Map(), U = ke(P.__meta) ? P.__meta : {};
  Ri++;
  const F = {
    version: n,
    cid: Ri,
    locale: r,
    fallbackLocale: a,
    messages: o,
    modifiers: u,
    pluralRules: c,
    missing: m,
    missingWarn: f,
    fallbackWarn: v,
    fallbackFormat: E,
    unresolving: y,
    postTranslation: b,
    processor: d,
    warnHtmlMessage: g,
    escapeParameter: k,
    messageCompiler: _,
    messageResolver: M,
    localeFallbacker: N,
    fallbackContext: A,
    onWarn: t,
    __meta: U
  };
  return F.datetimeFormats = i, F.numberFormats = l, F.__datetimeFormatters = L, F.__numberFormatters = x, process.env.NODE_ENV !== "production" && (F.__v_emitter = P.__v_emitter != null ? P.__v_emitter : void 0), (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && _k(F, n, U), F;
}
function Ca(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function Yu(e, t) {
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
    return process.env.NODE_ENV !== "production" && Yu(r, t) && o(Nn(ot.NOT_FOUND_KEY, { key: t, locale: n })), t;
}
function br(e, t, n) {
  const r = e;
  r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function ja(e) {
  return (n) => Pk(n, e);
}
function Pk(e, t) {
  const n = t.b || t.body;
  if ((n.t || n.type) === 1) {
    const r = n, s = r.c || r.cases;
    return e.plural(s.reduce((a, o) => [
      ...a,
      Fi(e, o)
    ], []));
  } else
    return Fi(e, n);
}
function Fi(e, t) {
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
const Vu = ce.__EXTEND_POINT__, qr = Js(Vu), Dt = {
  INVALID_ARGUMENT: Vu,
  INVALID_DATE_ARGUMENT: qr(),
  INVALID_ISO_DATE_ARGUMENT: qr(),
  NOT_SUPPORT_NON_STRING_MESSAGE: qr(),
  __EXTEND_POINT__: qr()
  // 22
};
function En(e) {
  return fr(e, null, process.env.NODE_ENV !== "production" ? { messages: Lk } : void 0);
}
const Lk = {
  [Dt.INVALID_ARGUMENT]: "Invalid arguments",
  [Dt.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [Dt.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
  [Dt.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message"
}, Sk = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function Uu(e, t) {
  t && M$(e) && et(Xs(Sk, { source: e }));
}
const ju = (e) => e;
let Hn = /* @__PURE__ */ Object.create(null);
const Tn = (e) => ke(e) && (e.t === 0 || e.type === 0) && ("b" in e || "body" in e);
function Wu(e, t = {}) {
  let n = !1;
  const r = t.onError || T$;
  return t.onError = (s) => {
    n = !0, r(s);
  }, { ...Q$(e, t), detectError: n };
}
const Ak = (e, t) => {
  if (!Z(e))
    throw En(Dt.NOT_SUPPORT_NON_STRING_MESSAGE);
  {
    const n = ye(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && Uu(e, n);
    const s = (t.onCacheKey || ju)(e), a = Hn[s];
    if (a)
      return a;
    const { code: o, detectError: i } = Wu(e, t), l = new Function(`return ${o}`)();
    return i ? l : Hn[s] = l;
  }
};
function xk(e, t) {
  if (__INTLIFY_JIT_COMPILATION__ && !__INTLIFY_DROP_MESSAGE_COMPILER__ && Z(e)) {
    const n = ye(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && Uu(e, n);
    const s = (t.onCacheKey || ju)(e), a = Hn[s];
    if (a)
      return a;
    const { ast: o, detectError: i } = Wu(e, {
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
const Yi = () => "", Ct = (e) => Fe(e);
function Vi(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: s, messageCompiler: a, fallbackLocale: o, messages: i } = e, [l, u] = as(...t), c = ye(u.missingWarn) ? u.missingWarn : e.missingWarn, m = ye(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, f = ye(u.escapeParameter) ? u.escapeParameter : e.escapeParameter, v = !!u.resolvedMessage, E = Z(u.default) || ye(u.default) ? ye(u.default) ? a ? l : () => l : u.default : n ? a ? l : () => l : "", y = n || E !== "", b = to(e, u);
  f && Rk(u);
  let [d, g, k] = v ? [
    l,
    b,
    i[b] || {}
  ] : Hu(e, l, b, o, m, c), _ = d, M = l;
  if (!v && !(Z(_) || Tn(_) || Ct(_)) && y && (_ = E, M = _), !v && (!(Z(_) || Tn(_) || Ct(_)) || !Z(g)))
    return s ? Ma : l;
  if (process.env.NODE_ENV !== "production" && Z(_) && e.messageCompiler == null)
    return et(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${l}'.`), l;
  let N = !1;
  const A = () => {
    N = !0;
  }, P = Ct(_) ? _ : Bu(e, l, g, _, M, A);
  if (N)
    return _;
  const L = Uk(e, g, k, u), x = hk(L), U = Fk(e, P, x), F = r ? r(U, l) : U;
  if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    const X = {
      timestamp: Date.now(),
      key: Z(l) ? l : Ct(_) ? _.key : "",
      locale: g || (Ct(_) ? _.locale : ""),
      format: Z(_) ? _ : Ct(_) ? _.source : "",
      message: F
    };
    X.meta = tt({}, e.__meta, Ik() || {}), bk(X);
  }
  return F;
}
function Rk(e) {
  Ae(e.list) ? e.list = e.list.map((t) => Z(t) ? Ei(t) : t) : ke(e.named) && Object.keys(e.named).forEach((t) => {
    Z(e.named[t]) && (e.named[t] = Ei(e.named[t]));
  });
}
function Hu(e, t, n, r, s, a) {
  const { messages: o, onWarn: i, messageResolver: l, localeFallbacker: u } = e, c = u(e, r, n);
  let m = {}, f, v = null, E = n, y = null;
  const b = "translate";
  for (let d = 0; d < c.length; d++) {
    if (f = y = c[d], process.env.NODE_ENV !== "production" && n !== f && Ca(s, t) && i(Nn(ot.FALLBACK_TO_TRANSLATE, {
      key: t,
      target: f
    })), process.env.NODE_ENV !== "production" && n !== f) {
      const N = e.__v_emitter;
      N && N.emit("fallback", {
        type: b,
        key: t,
        from: E,
        to: y,
        groupId: `${b}:${t}`
      });
    }
    m = o[f] || {};
    let g = null, k, _;
    if (process.env.NODE_ENV !== "production" && Ht && (g = window.performance.now(), k = "intlify-message-resolve-start", _ = "intlify-message-resolve-end", pt && pt(k)), (v = l(m, t)) === null && (v = m[t]), process.env.NODE_ENV !== "production" && Ht) {
      const N = window.performance.now(), A = e.__v_emitter;
      A && g && v && A.emit("message-resolve", {
        type: "message-resolve",
        key: t,
        message: v,
        time: N - g,
        groupId: `${b}:${t}`
      }), k && _ && pt && kn && (pt(_), kn("intlify message resolve", k, _));
    }
    if (Z(v) || Tn(v) || Ct(v))
      break;
    const M = no(
      e,
      // eslint-disable-line @typescript-eslint/no-explicit-any
      t,
      f,
      a,
      b
    );
    M !== t && (v = M), E = y;
  }
  return [v, f, m];
}
function Bu(e, t, n, r, s, a) {
  const { messageCompiler: o, warnHtmlMessage: i } = e;
  if (Ct(r)) {
    const f = r;
    return f.locale = f.locale || n, f.key = f.key || t, f;
  }
  if (o == null) {
    const f = () => r;
    return f.locale = n, f.key = t, f;
  }
  let l = null, u, c;
  process.env.NODE_ENV !== "production" && Ht && (l = window.performance.now(), u = "intlify-message-compilation-start", c = "intlify-message-compilation-end", pt && pt(u));
  const m = o(r, Yk(e, n, s, r, i, a));
  if (process.env.NODE_ENV !== "production" && Ht) {
    const f = window.performance.now(), v = e.__v_emitter;
    v && l && v.emit("message-compilation", {
      type: "message-compilation",
      message: r,
      time: f - l,
      groupId: `translate:${t}`
    }), u && c && pt && kn && (pt(c), kn("intlify message compilation", u, c));
  }
  return m.locale = n, m.key = t, m.source = r, m;
}
function Fk(e, t, n) {
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
function Yk(e, t, n, r, s, a) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: s,
    onError: (o) => {
      if (a && a(o), process.env.NODE_ENV !== "production") {
        const i = Vk(r), l = `Message compilation error: ${o.message}`, u = o.location && i && D$(i, o.location.start.offset, o.location.end.offset), c = e.__v_emitter;
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
    onCacheKey: (o) => p$(t, n, o)
  };
}
function Vk(e) {
  var t;
  if (!Z(e)) {
    if ((t = e.loc) != null && t.source)
      return e.loc.source;
  }
}
function Uk(e, t, n, r) {
  const { modifiers: s, pluralRules: a, messageResolver: o, fallbackLocale: i, fallbackWarn: l, missingWarn: u, fallbackContext: c } = e, f = {
    locale: t,
    modifiers: s,
    pluralRules: a,
    messages: (v) => {
      let E = o(n, v);
      if (E == null && c) {
        const [, , y] = Hu(c, v, t, i, l, u);
        E = o(y, v);
      }
      if (Z(E) || Tn(E)) {
        let y = !1;
        const d = Bu(e, v, t, E, v, () => {
          y = !0;
        });
        return y ? Yi : d;
      } else
        return Ct(E) ? E : Yi;
    }
  };
  return e.processor && (f.processor = e.processor), r.list && (f.list = r.list), r.named && (f.named = r.named), Ze(r.plural) && (f.pluralIndex = r.plural), f;
}
const Ui = typeof Intl < "u", Gu = {
  dateTimeFormat: Ui && typeof Intl.DateTimeFormat < "u",
  numberFormat: Ui && typeof Intl.NumberFormat < "u"
};
function ji(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: s, onWarn: a, localeFallbacker: o } = e, { __datetimeFormatters: i } = e;
  if (process.env.NODE_ENV !== "production" && !Gu.dateTimeFormat)
    return a(Nn(ot.CANNOT_FORMAT_DATE)), ya;
  const [l, u, c, m] = ss(...t), f = ye(c.missingWarn) ? c.missingWarn : e.missingWarn, v = ye(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn, E = !!c.part, y = to(e, c), b = o(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    s,
    y
  );
  if (!Z(l) || l === "")
    return new Intl.DateTimeFormat(y, m).format(u);
  let d = {}, g, k = null, _ = y, M = null;
  const N = "datetime format";
  for (let L = 0; L < b.length; L++) {
    if (g = M = b[L], process.env.NODE_ENV !== "production" && y !== g && Ca(v, l) && a(Nn(ot.FALLBACK_TO_DATE_FORMAT, {
      key: l,
      target: g
    })), process.env.NODE_ENV !== "production" && y !== g) {
      const x = e.__v_emitter;
      x && x.emit("fallback", {
        type: N,
        key: l,
        from: _,
        to: M,
        groupId: `${N}:${l}`
      });
    }
    if (d = n[g] || {}, k = d[l], ve(k))
      break;
    no(e, l, g, f, N), _ = M;
  }
  if (!ve(k) || !Z(g))
    return r ? Ma : l;
  let A = `${g}__${l}`;
  Ia(m) || (A = `${A}__${JSON.stringify(m)}`);
  let P = i.get(A);
  return P || (P = new Intl.DateTimeFormat(g, tt({}, k, m)), i.set(A, P)), E ? P.formatToParts(u) : P.format(u);
}
const Ku = [
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
  } else if (g$(t)) {
    if (isNaN(t.getTime()))
      throw En(Dt.INVALID_DATE_ARGUMENT);
    i = t;
  } else if (Ze(t))
    i = t;
  else
    throw En(Dt.INVALID_ARGUMENT);
  return Z(n) ? a.key = n : ve(n) && Object.keys(n).forEach((l) => {
    Ku.includes(l) ? o[l] = n[l] : a[l] = n[l];
  }), Z(r) ? a.locale = r : ve(r) && (o = r), ve(s) && (o = s), [a.key || "", i, a, o];
}
function Wi(e, t, n) {
  const r = e;
  for (const s in n) {
    const a = `${t}__${s}`;
    r.__datetimeFormatters.has(a) && r.__datetimeFormatters.delete(a);
  }
}
function Hi(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: s, onWarn: a, localeFallbacker: o } = e, { __numberFormatters: i } = e;
  if (process.env.NODE_ENV !== "production" && !Gu.numberFormat)
    return a(Nn(ot.CANNOT_FORMAT_NUMBER)), ya;
  const [l, u, c, m] = os(...t), f = ye(c.missingWarn) ? c.missingWarn : e.missingWarn, v = ye(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn, E = !!c.part, y = to(e, c), b = o(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    s,
    y
  );
  if (!Z(l) || l === "")
    return new Intl.NumberFormat(y, m).format(u);
  let d = {}, g, k = null, _ = y, M = null;
  const N = "number format";
  for (let L = 0; L < b.length; L++) {
    if (g = M = b[L], process.env.NODE_ENV !== "production" && y !== g && Ca(v, l) && a(Nn(ot.FALLBACK_TO_NUMBER_FORMAT, {
      key: l,
      target: g
    })), process.env.NODE_ENV !== "production" && y !== g) {
      const x = e.__v_emitter;
      x && x.emit("fallback", {
        type: N,
        key: l,
        from: _,
        to: M,
        groupId: `${N}:${l}`
      });
    }
    if (d = n[g] || {}, k = d[l], ve(k))
      break;
    no(e, l, g, f, N), _ = M;
  }
  if (!ve(k) || !Z(g))
    return r ? Ma : l;
  let A = `${g}__${l}`;
  Ia(m) || (A = `${A}__${JSON.stringify(m)}`);
  let P = i.get(A);
  return P || (P = new Intl.NumberFormat(g, tt({}, k, m)), i.set(A, P)), E ? P.formatToParts(u) : P.format(u);
}
const qu = [
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
    qu.includes(l) ? o[l] = n[l] : a[l] = n[l];
  }), Z(r) ? a.locale = r : ve(r) && (o = r), ve(s) && (o = s), [a.key || "", i, a, o];
}
function Bi(e, t, n) {
  const r = e;
  for (const s in n) {
    const a = `${t}__${s}`;
    r.__numberFormatters.has(a) && r.__numberFormatters.delete(a);
  }
}
ek();
function jk() {
  return zu().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function zu() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const Wk = typeof Proxy == "function", Hk = "devtools-plugin:setup", Bk = "plugin:settings:set";
let An, is;
function Gk() {
  var e;
  return An !== void 0 || (typeof window < "u" && window.performance ? (An = !0, is = window.performance) : typeof global < "u" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (An = !0, is = global.perf_hooks.performance) : An = !1), An;
}
function Kk() {
  return Gk() ? is.now() : Date.now();
}
class qk {
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
        return Kk();
      }
    }, n && n.on(Bk, (o, i) => {
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
function zk(e, t) {
  const n = e, r = zu(), s = jk(), a = Wk && n.enableEarlyProxy;
  if (s && (r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !a))
    s.emit(Hk, e, t);
  else {
    const o = a ? new qk(n, s) : null;
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
const Xk = "9.5.0";
function Zk() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (zt().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (zt().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (zt().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (zt().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (zt().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const Xu = ot.__EXTEND_POINT__, on = Js(Xu), We = {
  FALLBACK_TO_ROOT: Xu,
  NOT_SUPPORTED_PRESERVE: on(),
  NOT_SUPPORTED_FORMATTER: on(),
  NOT_SUPPORTED_PRESERVE_DIRECTIVE: on(),
  NOT_SUPPORTED_GET_CHOICE_INDEX: on(),
  COMPONENT_NAME_LEGACY_COMPATIBLE: on(),
  NOT_FOUND_PARENT_SCOPE: on(),
  IGNORE_OBJ_FLATTEN: on(),
  NOTICE_DROP_ALLOW_COMPOSITION: on()
  // 17
}, Jk = {
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
  return Xs(Jk[e], ...t);
}
const Zu = Dt.__EXTEND_POINT__, ut = Js(Zu), Oe = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: Zu,
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
  return fr(e, null, process.env.NODE_ENV !== "production" ? { messages: Qk, args: t } : void 0);
}
const Qk = {
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
}, ls = /* @__PURE__ */ Kt("__translateVNode"), us = /* @__PURE__ */ Kt("__datetimeParts"), cs = /* @__PURE__ */ Kt("__numberParts"), In = /* @__PURE__ */ Kt("__enableEmitter"), Sr = /* @__PURE__ */ Kt("__disableEmitter"), Ju = Kt("__setPluralRules"), Qu = /* @__PURE__ */ Kt("__injectWithOption"), ds = /* @__PURE__ */ Kt("__dispose");
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
function ec(e) {
  return e.type;
}
function tc(e, t, n) {
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
function Gi(e) {
  return me(pc, null, e, 0);
}
const Ki = "__INTLIFY_META__";
let qi = 0;
function zi(e) {
  return (t, n, r, s) => e(n, r, Tr() || void 0, s);
}
const eN = () => {
  const e = Tr();
  let t = null;
  return e && (t = ec(e)[Ki]) ? { [Ki]: t } : null;
};
function ro(e = {}, t) {
  const { __root: n, __injectWithOption: r } = e, s = n === void 0;
  let a = ye(e.inheritLocale) ? e.inheritLocale : !0;
  const o = ne(
    // prettier-ignore
    n && a ? n.locale.value : Z(e.locale) ? e.locale : nr
  ), i = ne(
    // prettier-ignore
    n && a ? n.fallbackLocale.value : Z(e.fallbackLocale) || Ae(e.fallbackLocale) || ve(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o.value
  ), l = ne(Pa(o.value, e)), u = ne(ve(e.datetimeFormats) ? e.datetimeFormats : { [o.value]: {} }), c = ne(ve(e.numberFormats) ? e.numberFormats : { [o.value]: {} });
  let m = n ? n.missingWarn : ye(e.missingWarn) || pn(e.missingWarn) ? e.missingWarn : !0, f = n ? n.fallbackWarn : ye(e.fallbackWarn) || pn(e.fallbackWarn) ? e.fallbackWarn : !0, v = n ? n.fallbackRoot : ye(e.fallbackRoot) ? e.fallbackRoot : !0, E = !!e.fallbackFormat, y = Fe(e.missing) ? e.missing : null, b = Fe(e.missing) ? zi(e.missing) : null, d = Fe(e.postTranslation) ? e.postTranslation : null, g = n ? n.warnHtmlMessage : ye(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, k = !!e.escapeParameter;
  const _ = n ? n.modifiers : ve(e.modifiers) ? e.modifiers : {};
  let M = e.pluralRules || n && n.pluralRules, N;
  N = (() => {
    s && xi(null);
    const R = {
      version: Xk,
      locale: o.value,
      fallbackLocale: i.value,
      messages: l.value,
      modifiers: _,
      pluralRules: M,
      missing: b === null ? void 0 : b,
      missingWarn: m,
      fallbackWarn: f,
      fallbackFormat: E,
      unresolving: !0,
      postTranslation: d === null ? void 0 : d,
      warnHtmlMessage: g,
      escapeParameter: k,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    R.datetimeFormats = u.value, R.numberFormats = c.value, R.__datetimeFormatters = ve(N) ? N.__datetimeFormatters : void 0, R.__numberFormatters = ve(N) ? N.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (R.__v_emitter = ve(N) ? N.__v_emitter : void 0);
    const B = Ck(R);
    return s && xi(B), B;
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
  }), U = C(() => l.value), F = /* @__PURE__ */ C(() => u.value), X = /* @__PURE__ */ C(() => c.value);
  function le() {
    return Fe(d) ? d : null;
  }
  function H(R) {
    d = R, N.postTranslation = R;
  }
  function G() {
    return y;
  }
  function j(R) {
    R !== null && (b = zi(R)), y = R, N.missing = b;
  }
  function Y(R, B) {
    return R !== "translate" || !B.resolvedMessage;
  }
  const V = (R, B, Ue, je, xt, rn) => {
    P();
    let kt;
    try {
      (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && Ai(eN()), s || (N.fallbackContext = n ? Mk() : void 0), kt = R(N);
    } finally {
      (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && Ai(null), s || (N.fallbackContext = void 0);
    }
    if (Ze(kt) && kt === Ma) {
      const [Nt, bn] = B();
      if (process.env.NODE_ENV !== "production" && n && Z(Nt) && Y(Ue, bn) && (v && (Ca(f, Nt) || Yu(m, Nt)) && et(mt(We.FALLBACK_TO_ROOT, {
        key: Nt,
        type: Ue
      })), process.env.NODE_ENV !== "production")) {
        const { __v_emitter: Ln } = N;
        Ln && v && Ln.emit("fallback", {
          type: Ue,
          key: Nt,
          to: "global",
          groupId: `${Ue}:${Nt}`
        });
      }
      return n && v ? je(n) : xt(Nt);
    } else {
      if (rn(kt))
        return kt;
      throw Xe(Oe.UNEXPECTED_RETURN_TYPE);
    }
  };
  function $(...R) {
    return V((B) => Reflect.apply(Vi, null, [B, ...R]), () => as(...R), "translate", (B) => Reflect.apply(B.t, B, [...R]), (B) => B, (B) => Z(B));
  }
  function q(...R) {
    const [B, Ue, je] = R;
    if (je && !ke(je))
      throw Xe(Oe.INVALID_ARGUMENT);
    return $(B, Ue, tt({ resolvedMessage: !0 }, je || {}));
  }
  function pe(...R) {
    return V((B) => Reflect.apply(ji, null, [B, ...R]), () => ss(...R), "datetime format", (B) => Reflect.apply(B.d, B, [...R]), () => ya, (B) => Z(B));
  }
  function $e(...R) {
    return V((B) => Reflect.apply(Hi, null, [B, ...R]), () => os(...R), "number format", (B) => Reflect.apply(B.n, B, [...R]), () => ya, (B) => Z(B));
  }
  function ee(R) {
    return R.map((B) => Z(B) || Ze(B) || ye(B) ? Gi(String(B)) : B);
  }
  const ge = {
    normalize: ee,
    interpolate: (R) => R,
    type: "vnode"
  };
  function Ce(...R) {
    return V(
      (B) => {
        let Ue;
        const je = B;
        try {
          je.processor = ge, Ue = Reflect.apply(Vi, null, [je, ...R]);
        } finally {
          je.processor = null;
        }
        return Ue;
      },
      () => as(...R),
      "translate",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (B) => B[ls](...R),
      (B) => [Gi(B)],
      (B) => Ae(B)
    );
  }
  function Ne(...R) {
    return V(
      (B) => Reflect.apply(Hi, null, [B, ...R]),
      () => os(...R),
      "number format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (B) => B[cs](...R),
      () => [],
      (B) => Z(B) || Ae(B)
    );
  }
  function De(...R) {
    return V(
      (B) => Reflect.apply(ji, null, [B, ...R]),
      () => ss(...R),
      "datetime format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (B) => B[us](...R),
      () => [],
      (B) => Z(B) || Ae(B)
    );
  }
  function Ve(R) {
    M = R, N.pluralRules = M;
  }
  function Ye(R, B) {
    if (!R)
      return !1;
    const Ue = Z(B) ? B : o.value, je = h(Ue);
    return N.messageResolver(je, R) !== null;
  }
  function Je(R) {
    let B = null;
    const Ue = Lu(N, i.value, o.value);
    for (let je = 0; je < Ue.length; je++) {
      const xt = l.value[Ue[je]] || {}, rn = N.messageResolver(xt, R);
      if (rn != null) {
        B = rn;
        break;
      }
    }
    return B;
  }
  function D(R) {
    const B = Je(R);
    return B ?? (n ? n.tm(R) || {} : {});
  }
  function h(R) {
    return l.value[R] || {};
  }
  function S(R, B) {
    l.value[R] = B, N.messages = l.value;
  }
  function J(R, B) {
    l.value[R] = l.value[R] || {}, kr(B, l.value[R]), N.messages = l.value;
  }
  function oe(R) {
    return u.value[R] || {};
  }
  function _e(R, B) {
    u.value[R] = B, N.datetimeFormats = u.value, Wi(N, R, B);
  }
  function nt(R, B) {
    u.value[R] = tt(u.value[R] || {}, B), N.datetimeFormats = u.value, Wi(N, R, B);
  }
  function He(R) {
    return c.value[R] || {};
  }
  function gt(R, B) {
    c.value[R] = B, N.numberFormats = c.value, Bi(N, R, B);
  }
  function At(R, B) {
    c.value[R] = tt(c.value[R] || {}, B), N.numberFormats = c.value, Bi(N, R, B);
  }
  qi++, n && Ht && (Te(n.locale, (R) => {
    a && (o.value = R, N.locale = R, br(N, o.value, i.value));
  }), Te(n.fallbackLocale, (R) => {
    a && (i.value = R, N.fallbackLocale = R, br(N, o.value, i.value));
  }));
  const Ie = {
    id: qi,
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
    messages: U,
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
      return m;
    },
    set missingWarn(R) {
      m = R, N.missingWarn = m;
    },
    get fallbackWarn() {
      return f;
    },
    set fallbackWarn(R) {
      f = R, N.fallbackWarn = f;
    },
    get fallbackRoot() {
      return v;
    },
    set fallbackRoot(R) {
      v = R;
    },
    get fallbackFormat() {
      return E;
    },
    set fallbackFormat(R) {
      E = R, N.fallbackFormat = E;
    },
    get warnHtmlMessage() {
      return g;
    },
    set warnHtmlMessage(R) {
      g = R, N.warnHtmlMessage = R;
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
    getPostTranslationHandler: le,
    setPostTranslationHandler: H,
    getMissingHandler: G,
    setMissingHandler: j,
    [Ju]: Ve
  };
  return Ie.datetimeFormats = F, Ie.numberFormats = X, Ie.rt = q, Ie.te = Ye, Ie.tm = D, Ie.d = pe, Ie.n = $e, Ie.getDateTimeFormat = oe, Ie.setDateTimeFormat = _e, Ie.mergeDateTimeFormat = nt, Ie.getNumberFormat = He, Ie.setNumberFormat = gt, Ie.mergeNumberFormat = At, Ie[Qu] = r, Ie[ls] = Ce, Ie[us] = De, Ie[cs] = Ne, process.env.NODE_ENV !== "production" && (Ie[In] = (R) => {
    N.__v_emitter = R;
  }, Ie[Sr] = () => {
    N.__v_emitter = void 0;
  }), Ie;
}
function tN(e) {
  const t = Z(e.locale) ? e.locale : nr, n = Z(e.fallbackLocale) || Ae(e.fallbackLocale) || ve(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t, r = Fe(e.missing) ? e.missing : void 0, s = ye(e.silentTranslationWarn) || pn(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0, a = ye(e.silentFallbackWarn) || pn(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0, o = ye(e.fallbackRoot) ? e.fallbackRoot : !0, i = !!e.formatFallbackMessages, l = ve(e.modifiers) ? e.modifiers : {}, u = e.pluralizationRules, c = Fe(e.postTranslation) ? e.postTranslation : void 0, m = Z(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0, f = !!e.escapeParameterHtml, v = ye(e.sync) ? e.sync : !0;
  process.env.NODE_ENV !== "production" && e.formatter && et(mt(We.NOT_SUPPORTED_FORMATTER)), process.env.NODE_ENV !== "production" && e.preserveDirectiveContent && et(mt(We.NOT_SUPPORTED_PRESERVE_DIRECTIVE));
  let E = e.messages;
  if (ve(e.sharedMessages)) {
    const M = e.sharedMessages;
    E = Object.keys(M).reduce((A, P) => {
      const L = A[P] || (A[P] = {});
      return tt(L, M[P]), A;
    }, E || {});
  }
  const { __i18n: y, __root: b, __injectWithOption: d } = e, g = e.datetimeFormats, k = e.numberFormats, _ = e.flatJson;
  return {
    locale: t,
    fallbackLocale: n,
    messages: E,
    flatJson: _,
    datetimeFormats: g,
    numberFormats: k,
    missing: r,
    missingWarn: s,
    fallbackWarn: a,
    fallbackRoot: o,
    fallbackFormat: i,
    modifiers: l,
    pluralRules: u,
    postTranslation: c,
    warnHtmlMessage: m,
    escapeParameter: f,
    messageResolver: e.messageResolver,
    inheritLocale: v,
    __i18n: y,
    __root: b,
    __injectWithOption: d
  };
}
function vs(e = {}, t) {
  {
    const n = ro(tN(e)), { __extender: r } = e, s = {
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
        let c = null, m = null;
        if (!Z(o))
          throw Xe(Oe.INVALID_ARGUMENT);
        const f = o;
        return Z(i) ? u.locale = i : Ae(i) ? c = i : ve(i) && (m = i), Ae(l) ? c = l : ve(l) && (m = l), Reflect.apply(n.t, n, [
          f,
          c || m || {},
          u
        ]);
      },
      rt(...a) {
        return Reflect.apply(n.rt, n, [...a]);
      },
      // tc
      tc(...a) {
        const [o, i, l] = a, u = { plural: 1 };
        let c = null, m = null;
        if (!Z(o))
          throw Xe(Oe.INVALID_ARGUMENT);
        const f = o;
        return Z(i) ? u.locale = i : Ze(i) ? u.plural = i : Ae(i) ? c = i : ve(i) && (m = i), Z(l) ? u.locale = l : Ae(l) ? c = l : ve(l) && (m = l), Reflect.apply(n.t, n, [
          f,
          c || m || {},
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
function nN({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, s) => [
    ...r,
    // prettier-ignore
    ...s.type === te ? s.children : [s]
  ], []) : t.reduce((n, r) => {
    const s = e[r];
    return s && (n[r] = s()), n;
  }, {});
}
function nc(e) {
  return te;
}
const rN = /* @__PURE__ */ Se({
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
    const { slots: n, attrs: r } = t, s = e.i18n || oo({
      useScope: e.scope,
      __useComponent: !0
    });
    return () => {
      const a = Object.keys(n).filter((m) => m !== "_"), o = {};
      e.locale && (o.locale = e.locale), e.plural !== void 0 && (o.plural = Z(e.plural) ? +e.plural : e.plural);
      const i = nN(t, a), l = s[ls](e.keypath, i, o), u = tt({}, r), c = Z(e.tag) || ke(e.tag) ? e.tag : nc();
      return Fn(c, u, l);
    };
  }
}), Wa = rN;
function aN(e) {
  return Ae(e) && !Z(e[0]);
}
function rc(e, t, n, r) {
  const { slots: s, attrs: a } = t;
  return () => {
    const o = { part: !0 };
    let i = {};
    e.locale && (o.locale = e.locale), Z(e.format) ? o.key = e.format : ke(e.format) && (Z(e.format.key) && (o.key = e.format.key), i = Object.keys(e.format).reduce((f, v) => n.includes(v) ? tt({}, f, { [v]: e.format[v] }) : f, {}));
    const l = r(e.value, o, i);
    let u = [o.key];
    Ae(l) ? u = l.map((f, v) => {
      const E = s[f.type], y = E ? E({ [f.type]: f.value, index: v, parts: l }) : [f.value];
      return aN(y) && (y[0].key = `${f.type}-${v}`), y;
    }) : Z(l) && (u = [l]);
    const c = tt({}, a), m = Z(e.tag) || ke(e.tag) ? e.tag : nc();
    return Fn(m, c, u);
  };
}
const sN = /* @__PURE__ */ Se({
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
    const n = e.i18n || oo({
      useScope: "parent",
      __useComponent: !0
    });
    return rc(e, t, qu, (...r) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[cs](...r)
    ));
  }
}), Xi = sN, oN = /* @__PURE__ */ Se({
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
    const n = e.i18n || oo({
      useScope: "parent",
      __useComponent: !0
    });
    return rc(e, t, Ku, (...r) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[us](...r)
    ));
  }
}), Zi = oN;
function iN(e, t) {
  const n = e;
  if (e.mode === "composition")
    return n.__getInstance(t) || e.global;
  {
    const r = n.__getInstance(t);
    return r != null ? r.__composer : e.global.__composer;
  }
}
function lN(e) {
  const t = (o) => {
    const { instance: i, modifiers: l, value: u } = o;
    if (!i || !i.$)
      throw Xe(Oe.UNEXPECTED_ERROR);
    const c = iN(e, i.$);
    process.env.NODE_ENV !== "production" && l.preserve && et(mt(We.NOT_SUPPORTED_PRESERVE));
    const m = Ji(u);
    return [
      Reflect.apply(c.t, c, [...Qi(m)]),
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
        const l = o.__composer, u = Ji(i);
        o.textContent = Reflect.apply(l.t, l, [
          ...Qi(u)
        ]);
      }
    },
    getSSRProps: (o) => {
      const [i] = t(o);
      return { textContent: i };
    }
  };
}
function Ji(e) {
  if (Z(e))
    return { path: e };
  if (ve(e)) {
    if (!("path" in e))
      throw Xe(Oe.REQUIRED_VALUE, "path");
    return e;
  } else
    throw Xe(Oe.INVALID_VALUE);
}
function Qi(e) {
  const { path: t, locale: n, args: r, choice: s, plural: a } = e, o = {}, i = r || {};
  return Z(n) && (o.locale = n), Ze(s) && (o.plural = s), Ze(a) && (o.plural = a), [t, i, o];
}
function uN(e, t, ...n) {
  const r = ve(n[0]) ? n[0] : {}, s = !!r.useI18nComponentName, a = ye(r.globalInstall) ? r.globalInstall : !0;
  process.env.NODE_ENV !== "production" && a && s && et(mt(We.COMPONENT_NAME_LEGACY_COMPATIBLE, {
    name: Wa.name
  })), a && ([s ? "i18n" : Wa.name, "I18nT"].forEach((o) => e.component(o, Wa)), [Xi.name, "I18nN"].forEach((o) => e.component(o, Xi)), [Zi.name, "I18nD"].forEach((o) => e.component(o, Zi))), e.directive("t", lN(t));
}
const Ha = {
  "vue-devtools-plugin-vue-i18n": "Vue I18n devtools",
  "vue-i18n-resource-inspector": "I18n Resources",
  "vue-i18n-timeline": "Vue I18n"
}, cN = {
  "vue-i18n-resource-inspector": "Search for scopes ..."
}, dN = {
  "vue-i18n-timeline": 16764185
}, ac = "vue-i18n: composer properties";
let ms;
async function fN(e, t) {
  return new Promise((n, r) => {
    try {
      zk({
        id: "vue-devtools-plugin-vue-i18n",
        label: Ha[
          "vue-devtools-plugin-vue-i18n"
          /* VueDevToolsIDs.PLUGIN */
        ],
        packageName: "vue-i18n",
        homepage: "https://vue-i18n.intlify.dev",
        logo: "https://vue-i18n.intlify.dev/vue-i18n-devtools-logo.png",
        componentStateTypes: [ac],
        app: e
        // eslint-disable-line @typescript-eslint/no-explicit-any
      }, (s) => {
        ms = s, s.on.visitComponentTree(({ componentInstance: o, treeNode: i }) => {
          vN(o, i, t);
        }), s.on.inspectComponent(({ componentInstance: o, instanceData: i }) => {
          o.vnode.el && o.vnode.el.__VUE_I18N__ && i && (t.mode === "legacy" ? o.vnode.el.__VUE_I18N__ !== t.global.__composer && el(i, o.vnode.el.__VUE_I18N__) : el(i, o.vnode.el.__VUE_I18N__));
        }), s.addInspector({
          id: "vue-i18n-resource-inspector",
          label: Ha[
            "vue-i18n-resource-inspector"
            /* VueDevToolsIDs.CUSTOM_INSPECTOR */
          ],
          icon: "language",
          treeFilterPlaceholder: cN[
            "vue-i18n-resource-inspector"
            /* VueDevToolsIDs.CUSTOM_INSPECTOR */
          ]
        }), s.on.getInspectorTree((o) => {
          o.app === e && o.inspectorId === "vue-i18n-resource-inspector" && _N(o, t);
        });
        const a = /* @__PURE__ */ new Map();
        s.on.getInspectorState(async (o) => {
          if (o.app === e && o.inspectorId === "vue-i18n-resource-inspector")
            if (s.unhighlightElement(), yN(o, t), o.nodeId === "global") {
              if (!a.has(o.app)) {
                const [i] = await s.getComponentInstances(o.app);
                a.set(o.app, i);
              }
              s.highlightElement(a.get(o.app));
            } else {
              const i = bN(o.nodeId, t);
              i && s.highlightElement(i);
            }
        }), s.on.editInspectorState((o) => {
          o.app === e && o.inspectorId === "vue-i18n-resource-inspector" && EN(o, t);
        }), s.addTimelineLayer({
          id: "vue-i18n-timeline",
          label: Ha[
            "vue-i18n-timeline"
            /* VueDevToolsIDs.TIMELINE */
          ],
          color: dN[
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
function sc(e) {
  return e.type.name || e.type.displayName || e.type.__file || "Anonymous";
}
function vN(e, t, n) {
  const r = n.mode === "composition" ? n.global : n.global.__composer;
  if (e && e.vnode.el && e.vnode.el.__VUE_I18N__ && e.vnode.el.__VUE_I18N__ !== r) {
    const s = {
      label: `i18n (${sc(e)} Scope)`,
      textColor: 0,
      backgroundColor: 16764185
    };
    t.tags.push(s);
  }
}
function el(e, t) {
  const n = ac;
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
    Fe(r) && "source" in r ? t[n] = gN(r) : Tn(r) && r.loc && r.loc.source ? t[n] = r.loc.source : ke(r) ? t[n] = so(r) : t[n] = r;
  }), t;
}
const mN = {
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "&": "&amp;"
};
function pN(e) {
  return e.replace(/[<>"&]/g, hN);
}
function hN(e) {
  return mN[e] || e;
}
function gN(e) {
  return {
    _custom: {
      type: "function",
      display: `<span>ƒ</span> ${e.source ? `("${pN(e.source)}")` : "(?)"}`
    }
  };
}
function _N(e, t) {
  e.rootNodes.push({
    id: "global",
    label: "Global Scope"
  });
  const n = t.mode === "composition" ? t.global : t.global.__composer;
  for (const [r, s] of t.__instances) {
    const a = t.mode === "composition" ? s : s.__composer;
    n !== a && e.rootNodes.push({
      id: a.id.toString(),
      label: `${sc(r)} Scope`
    });
  }
}
function bN(e, t) {
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
function oc(e, t) {
  if (e === "global")
    return t.mode === "composition" ? t.global : t.global.__composer;
  {
    const n = Array.from(t.__instances.values()).find((r) => r.id.toString() === e);
    return n ? t.mode === "composition" ? n : n.__composer : null;
  }
}
function yN(e, t) {
  const n = oc(e.nodeId, t);
  return n && (e.state = DN(n)), null;
}
function DN(e) {
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
function EN(e, t) {
  const n = oc(e.nodeId, t);
  if (n) {
    const [r] = e.path;
    r === "locale" && Z(e.state.value) ? n.locale.value = e.state.value : r === "fallbackLocale" && (Z(e.state.value) || Ae(e.state.value) || ke(e.state.value)) ? n.fallbackLocale.value = e.state.value : r === "inheritLocale" && ye(e.state.value) && (n.inheritLocale = e.state.value);
  }
}
function wN(e, t, n) {
  return {
    beforeCreate() {
      const r = Tr();
      if (!r)
        throw Xe(Oe.UNEXPECTED_ERROR);
      const s = this.$options;
      if (s.i18n) {
        const a = s.i18n;
        if (s.__i18n && (a.__i18n = s.__i18n), a.__root = t, this === this.$root)
          this.$i18n = tl(e, a);
        else {
          a.__injectWithOption = !0, a.__extender = n.__vueI18nExtend, this.$i18n = vs(a);
          const o = this.$i18n;
          o.__extender && (o.__disposer = o.__extender(this.$i18n));
        }
      } else if (s.__i18n)
        if (this === this.$root)
          this.$i18n = tl(e, s);
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
      s.__i18nGlobal && tc(t, s, s), this.$t = (...a) => this.$i18n.t(...a), this.$rt = (...a) => this.$i18n.rt(...a), this.$tc = (...a) => this.$i18n.tc(...a), this.$te = (a, o) => this.$i18n.te(a, o), this.$d = (...a) => this.$i18n.d(...a), this.$n = (...a) => this.$i18n.n(...a), this.$tm = (a) => this.$i18n.tm(a), n.__setInstance(r, this.$i18n);
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
function tl(e, t) {
  e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[Ju](t.pluralizationRules || e.pluralizationRules);
  const n = Pa(e.locale, {
    messages: t.messages,
    __i18n: t.__i18n
  });
  return Object.keys(n).forEach((r) => e.mergeLocaleMessage(r, n[r])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach((r) => e.mergeDateTimeFormat(r, t.datetimeFormats[r])), t.numberFormats && Object.keys(t.numberFormats).forEach((r) => e.mergeNumberFormat(r, t.numberFormats[r])), e;
}
const ON = /* @__PURE__ */ Kt("global-vue-i18n");
function $N(e = {}, t) {
  const n = __VUE_I18N_LEGACY_API__ && ye(e.legacy) ? e.legacy : __VUE_I18N_LEGACY_API__, r = ye(e.globalInjection) ? e.globalInjection : !0, s = __VUE_I18N_LEGACY_API__ && n ? !!e.allowComposition : !0, a = /* @__PURE__ */ new Map(), [o, i] = kN(e, n), l = /* @__PURE__ */ Kt(process.env.NODE_ENV !== "production" ? "vue-i18n" : "");
  process.env.NODE_ENV !== "production" && n && s && et(mt(We.NOTICE_DROP_ALLOW_COMPOSITION));
  function u(f) {
    return a.get(f) || null;
  }
  function c(f, v) {
    a.set(f, v);
  }
  function m(f) {
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
        return s;
      },
      // install plugin
      async install(v, ...E) {
        if (process.env.NODE_ENV !== "production" && (v.__VUE_I18N__ = f), v.__VUE_I18N_SYMBOL__ = l, v.provide(v.__VUE_I18N_SYMBOL__, f), ve(E[0])) {
          const d = E[0];
          f.__composerExtend = d.__composerExtend, f.__vueI18nExtend = d.__vueI18nExtend;
        }
        let y = null;
        !n && r && (y = AN(v, f.global)), __VUE_I18N_FULL_INSTALL__ && uN(v, f, ...E), __VUE_I18N_LEGACY_API__ && n && v.mixin(wN(i, i.__composer, f));
        const b = v.unmount;
        if (v.unmount = () => {
          y && y(), f.dispose(), b();
        }, process.env.NODE_ENV !== "production") {
          if (!await fN(v, f))
            throw Xe(Oe.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN);
          const g = Qs();
          if (n) {
            const k = i;
            k.__enableEmitter && k.__enableEmitter(g);
          } else {
            const k = i;
            k[In] && k[In](g);
          }
          g.on("*", Ar);
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
      __deleteInstance: m
    };
    return f;
  }
}
function oo(e = {}) {
  const t = Tr();
  if (t == null)
    throw Xe(Oe.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw Xe(Oe.NOT_INSTALLED);
  const n = NN(t), r = IN(n), s = ec(t), a = TN(e, s);
  if (__VUE_I18N_LEGACY_API__ && n.mode === "legacy" && !e.__useComponent) {
    if (!n.allowComposition)
      throw Xe(Oe.NOT_AVAILABLE_IN_LEGACY_MODE);
    return LN(t, a, r, e);
  }
  if (a === "global")
    return tc(r, e, s), r;
  if (a === "parent") {
    let l = MN(n, t, e.__useComponent);
    return l == null && (process.env.NODE_ENV !== "production" && et(mt(We.NOT_FOUND_PARENT_SCOPE)), l = r), l;
  }
  const o = n;
  let i = o.__getInstance(t);
  if (i == null) {
    const l = tt({}, e);
    "__i18n" in s && (l.__i18n = s.__i18n), r && (l.__root = r), i = ro(l), o.__composerExtend && (i[ds] = o.__composerExtend(i)), PN(o, t, i), o.__setInstance(t, i);
  }
  return i;
}
function kN(e, t, n) {
  const r = fc();
  {
    const s = __VUE_I18N_LEGACY_API__ && t ? r.run(() => vs(e)) : r.run(() => ro(e));
    if (s == null)
      throw Xe(Oe.UNEXPECTED_ERROR);
    return [r, s];
  }
}
function NN(e) {
  {
    const t = yt(e.isCE ? ON : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t)
      throw Xe(e.isCE ? Oe.NOT_INSTALLED_WITH_PROVIDE : Oe.UNEXPECTED_ERROR);
    return t;
  }
}
function TN(e, t) {
  return Ia(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function IN(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function MN(e, t, n = !1) {
  let r = null;
  const s = t.root;
  let a = CN(t, n);
  for (; a != null; ) {
    const o = e;
    if (e.mode === "composition")
      r = o.__getInstance(a);
    else if (__VUE_I18N_LEGACY_API__) {
      const i = o.__getInstance(a);
      i != null && (r = i.__composer, n && r && !r[Qu] && (r = null));
    }
    if (r != null || s === a)
      break;
    a = a.parent;
  }
  return r;
}
function CN(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function PN(e, t, n) {
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
function LN(e, t, n, r = {}) {
  const s = t === "local", a = vc(null);
  if (s && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n))
    throw Xe(Oe.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
  const o = ye(r.inheritLocale) ? r.inheritLocale : !Z(r.locale), i = ne(
    // prettier-ignore
    !s || o ? n.locale.value : Z(r.locale) ? r.locale : nr
  ), l = ne(
    // prettier-ignore
    !s || o ? n.fallbackLocale.value : Z(r.fallbackLocale) || Ae(r.fallbackLocale) || ve(r.fallbackLocale) || r.fallbackLocale === !1 ? r.fallbackLocale : i.value
  ), u = ne(Pa(i.value, r)), c = ne(ve(r.datetimeFormats) ? r.datetimeFormats : { [i.value]: {} }), m = ne(ve(r.numberFormats) ? r.numberFormats : { [i.value]: {} }), f = s ? n.missingWarn : ye(r.missingWarn) || pn(r.missingWarn) ? r.missingWarn : !0, v = s ? n.fallbackWarn : ye(r.fallbackWarn) || pn(r.fallbackWarn) ? r.fallbackWarn : !0, E = s ? n.fallbackRoot : ye(r.fallbackRoot) ? r.fallbackRoot : !0, y = !!r.fallbackFormat, b = Fe(r.missing) ? r.missing : null, d = Fe(r.postTranslation) ? r.postTranslation : null, g = s ? n.warnHtmlMessage : ye(r.warnHtmlMessage) ? r.warnHtmlMessage : !0, k = !!r.escapeParameter, _ = s ? n.modifiers : ve(r.modifiers) ? r.modifiers : {}, M = r.pluralRules || s && n.pluralRules;
  function N() {
    return [
      i.value,
      l.value,
      u.value,
      c.value,
      m.value
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
  }), L = C(() => a.value ? a.value.messages.value : u.value), x = C(() => c.value), U = C(() => m.value);
  function F() {
    return a.value ? a.value.getPostTranslationHandler() : d;
  }
  function X(h) {
    a.value && a.value.setPostTranslationHandler(h);
  }
  function le() {
    return a.value ? a.value.getMissingHandler() : b;
  }
  function H(h) {
    a.value && a.value.setMissingHandler(h);
  }
  function G(h) {
    return N(), h();
  }
  function j(...h) {
    return a.value ? G(() => Reflect.apply(a.value.t, null, [...h])) : G(() => "");
  }
  function Y(...h) {
    return a.value ? Reflect.apply(a.value.rt, null, [...h]) : "";
  }
  function V(...h) {
    return a.value ? G(() => Reflect.apply(a.value.d, null, [...h])) : G(() => "");
  }
  function $(...h) {
    return a.value ? G(() => Reflect.apply(a.value.n, null, [...h])) : G(() => "");
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
  function ee(h, S) {
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
    a.value && (a.value.setNumberFormat(h, S), m.value[h] = S);
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
    numberFormats: U,
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
      return a.value ? a.value.missingWarn : f;
    },
    set missingWarn(h) {
      a.value && (a.value.missingWarn = h);
    },
    get fallbackWarn() {
      return a.value ? a.value.fallbackWarn : v;
    },
    set fallbackWarn(h) {
      a.value && (a.value.missingWarn = h);
    },
    get fallbackRoot() {
      return a.value ? a.value.fallbackRoot : E;
    },
    set fallbackRoot(h) {
      a.value && (a.value.fallbackRoot = h);
    },
    get fallbackFormat() {
      return a.value ? a.value.fallbackFormat : y;
    },
    set fallbackFormat(h) {
      a.value && (a.value.fallbackFormat = h);
    },
    get warnHtmlMessage() {
      return a.value ? a.value.warnHtmlMessage : g;
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
    t: j,
    getPostTranslationHandler: F,
    setPostTranslationHandler: X,
    getMissingHandler: le,
    setMissingHandler: H,
    rt: Y,
    d: V,
    n: $,
    tm: q,
    te: pe,
    getLocaleMessage: $e,
    setLocaleMessage: ee,
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
    }), Object.keys(m.value).forEach((S) => {
      h.mergeNumberFormat(S, m.value[S]);
    }), h.escapeParameter = k, h.fallbackFormat = y, h.fallbackRoot = E, h.fallbackWarn = v, h.missingWarn = f, h.warnHtmlMessage = g;
  }
  return mc(() => {
    if (e.proxy == null || e.proxy.$i18n == null)
      throw Xe(Oe.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
    const h = a.value = e.proxy.$i18n.__composer;
    t === "global" ? (i.value = h.locale.value, l.value = h.fallbackLocale.value, u.value = h.messages.value, c.value = h.datetimeFormats.value, m.value = h.numberFormats.value) : s && D(h);
  }), Je;
}
const SN = [
  "locale",
  "fallbackLocale",
  "availableLocales"
], nl = ["t", "rt", "d", "n", "tm", "te"];
function AN(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  return SN.forEach((s) => {
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
  }), e.config.globalProperties.$i18n = n, nl.forEach((s) => {
    const a = Object.getOwnPropertyDescriptor(t, s);
    if (!a || !a.value)
      throw Xe(Oe.UNEXPECTED_ERROR);
    Object.defineProperty(e.config.globalProperties, `$${s}`, a);
  }), () => {
    delete e.config.globalProperties.$i18n, nl.forEach((s) => {
      delete e.config.globalProperties[`$${s}`];
    });
  };
}
Zk();
__INTLIFY_JIT_COMPILATION__ ? Si(xk) : Si(Ak);
Nk(lk);
Tk(Lu);
if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const e = zt();
  e.__INTLIFY__ = !0, gk(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
const xN = {
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
}, RN = {
  zh_TW: xN
}, La = $N({
  locale: "zh_TW",
  legacy: !1,
  globalInjection: !0,
  messages: RN
}), FN = { class: "flex flex-col gap-3" }, YN = /* @__PURE__ */ w("div", { class: "flex items-center justify-center gap-3 my-2" }, [
  /* @__PURE__ */ w("p", { class: "p4-b" }, "日期時間"),
  /* @__PURE__ */ w("div", { class: "h-[1px] flex-1 bg-light-3" })
], -1), VN = { class: "flex flex-col gap-2" }, UN = { class: "flex gap-2 items-center" }, jN = /* @__PURE__ */ w("span", { class: "p4-b" }, "開始", -1), WN = ["onClick"], HN = ["value"], BN = /* @__PURE__ */ w("div", { class: "flex items-center justify-center gap-3 w-full my-2" }, [
  /* @__PURE__ */ w("p", { class: "p4-b" }, "重複頻率"),
  /* @__PURE__ */ w("div", { class: "h-[1px] flex-1 bg-light-3" })
], -1), GN = { class: "flex space-x-2 items-center" }, KN = { class: "flex items-center gap-2" }, qN = /* @__PURE__ */ w("span", { class: "p4-b" }, "重複", -1), zN = ["value"], XN = /* @__PURE__ */ w("option", { value: 0 }, "自訂", -1), ZN = { class: "p4-b" }, JN = {
  key: 0,
  class: "flex items-center gap-2"
}, QN = { class: "flex items-center gap-2" }, eT = /* @__PURE__ */ w("span", { class: "p4-b" }, "頻率", -1), tT = /* @__PURE__ */ w("option", {
  value: "-1",
  disabled: ""
}, "請選擇", -1), nT = ["value"], rT = {
  key: 0,
  class: "flex items-center gap-2"
}, aT = /* @__PURE__ */ w("span", { class: "p4-b" }, "每", -1), sT = { class: "p4-b" }, rl = 1, oT = /* @__PURE__ */ Se({
  __name: "RepeatFrequency",
  props: {
    frequency: {},
    interval: {}
  },
  emits: ["update:frequency", "update:interval"],
  setup(e, { emit: t }) {
    const n = e, { t: r } = La.global, s = yt("eventData"), a = ne(!0);
    Te(s, () => {
      a.value = !0;
    });
    const o = ne(n.interval ?? rl);
    Te(o, (E) => {
      E || (E = rl), t("update:interval", E);
    });
    const i = ne(n.frequency);
    Te(i, (E) => {
      t("update:frequency", E);
    });
    const l = C({
      get: () => s.value.weekdays ?? [],
      set: (E) => {
        s.value.weekdays = E;
      }
    }), u = C({
      get: () => s.value.weekOrdinal ?? [],
      set: (E) => {
        s.value.weekOrdinal = E;
      }
    }), c = C({
      get: () => s.value.monthDate ?? [],
      set: (E) => {
        s.value.monthDate = E;
      }
    }), m = C({
      get: () => s.value.yearMonths ?? [],
      set: (E) => {
        s.value.yearMonths = E;
      }
    }), f = C(() => {
      if (v.value == Re.Never)
        return "只執行一次";
      if (v.value == Re.Hour)
        return "每小時執行一次";
      if (v.value == Re.Day)
        return "每日執行一次";
      if (v.value == Re.Week)
        return "每週執行一次";
      if (v.value == Re.Month)
        return "每月執行一次";
      if (v.value == Re.Annual)
        return "每年執行一次";
      const E = {
        1: "小時",
        2: "日",
        3: "週",
        4: "月",
        5: "年"
      };
      return v.value == 0 ? `每${o.value ?? ""}${E[i.value] ?? ""}執行一次` : "";
    }), v = ne(-1);
    return n.interval == 1 && (v.value = n.frequency), Te(
      v,
      (E) => {
        Re[E] && (t("update:frequency", E), t("update:interval", 1), i.value = v.value, s.value.weekdays = null, s.value.weekOrdinal = null, s.value.monthDate = null, s.value.yearMonths = null), s.value.customInterval = E === 0;
      },
      { immediate: !0 }
    ), (E, y) => (O(), T("div", FN, [
      YN,
      w("div", VN, [
        w("div", UN, [
          jN,
          me(p(zs), {
            modelValue: p(s).start,
            "onUpdate:modelValue": y[0] || (y[0] = (b) => p(s).start = b),
            mode: "dateTime",
            timezone: "UTC",
            "min-Date": /* @__PURE__ */ new Date(),
            "is-required": ""
          }, {
            default: ze(({ togglePopover: b, inputValue: d }) => [
              w("button", {
                class: "p3-b flex w-fit cursor-pointer relative items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 transition-all hover:bg-light-3 hover:bg-opacity-50",
                onClick: b
              }, [
                w("input", {
                  value: d,
                  required: "",
                  class: "opacity-0 absolute w-full h-full pointer-events-none"
                }, null, 8, HN),
                Rr(" " + ie(d || "請選定執行日期"), 1)
              ], 8, WN)
            ]),
            _: 1
          }, 8, ["modelValue", "min-Date"])
        ])
      ]),
      BN,
      w("div", GN, [
        w("label", KN, [
          qN,
          Pe(w("select", {
            class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
            "onUpdate:modelValue": y[1] || (y[1] = (b) => be(v) ? v.value = b : null)
          }, [
            (O(!0), T(te, null, he(p(Re), (b, d) => (O(), T(te, { key: d }, [
              Number.isInteger(b) ? (O(), T("option", {
                key: 0,
                value: b
              }, ie(p(r)(d)), 9, zN)) : Q("", !0)
            ], 64))), 128)),
            XN
          ], 512), [
            [Be, p(v)]
          ])
        ]),
        w("span", ZN, ie(p(f)), 1)
      ]),
      p(Re)[p(v)] == null ? (O(), T("div", JN, [
        w("label", QN, [
          eT,
          Pe(w("select", {
            class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
            "onUpdate:modelValue": y[2] || (y[2] = (b) => be(i) ? i.value = b : null)
          }, [
            tT,
            (O(!0), T(te, null, he(p(Re), (b, d) => (O(), T(te, { key: d }, [
              b != p(Re).Never && Number.isInteger(b) ? (O(), T("option", {
                key: 0,
                value: b
              }, ie(p(r)(d)), 9, nT)) : Q("", !0)
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
            "onUpdate:modelValue": y[3] || (y[3] = (b) => be(o) ? o.value = b : null),
            type: "number"
          }, null, 8, ["modelValue"]),
          w("span", sT, ie(p(r)(`s${p(Re)[p(i)]}`)), 1)
        ])) : Q("", !0)
      ])) : Q("", !0),
      p(Re)[p(v)] == null ? (O(), qe(Ic, {
        key: 1,
        type: p(i),
        weekdays: p(l),
        "onUpdate:weekdays": y[4] || (y[4] = (b) => be(l) ? l.value = b : null),
        weekOrdinal: p(u),
        "onUpdate:weekOrdinal": y[5] || (y[5] = (b) => be(u) ? u.value = b : null),
        monthDate: p(c),
        "onUpdate:monthDate": y[6] || (y[6] = (b) => be(c) ? c.value = b : null),
        yearMonths: p(m),
        "onUpdate:yearMonths": y[7] || (y[7] = (b) => be(m) ? m.value = b : null)
      }, null, 8, ["type", "weekdays", "weekOrdinal", "monthDate", "yearMonths"])) : Q("", !0),
      p(i) !== -1 ? (O(), qe(c$, {
        key: 2,
        modelValue: p(s).due,
        "onUpdate:modelValue": y[8] || (y[8] = (b) => p(s).due = b)
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
      w("div", lT, ie(t.title), 1),
      jt(t.$slots, "default")
    ]));
  }
}), uT = { class: "flex flex-col gap-2" }, cT = { class: "flex items-center gap-2 relative pt-2" }, dT = { class: "flex items-center gap-2" }, fT = /* @__PURE__ */ w("span", { class: "p4-b" }, "平台", -1), vT = /* @__PURE__ */ w("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), mT = ["value"], pT = {
  key: 0,
  class: "flex items-center gap-2"
}, hT = /* @__PURE__ */ w("span", { class: "p4-b" }, "層級", -1), gT = /* @__PURE__ */ w("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), _T = ["value"], bT = {
  key: 1,
  class: "flex items-center gap-2"
}, yT = /* @__PURE__ */ w("span", { class: "p4-b" }, "目標", -1), DT = /* @__PURE__ */ w("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), ET = ["value"], wT = {
  key: 0,
  class: "flex flex-col"
}, OT = /* @__PURE__ */ w("span", { class: "p4-b" }, "指定目標", -1), $T = { key: 0 }, kT = {
  key: 0,
  class: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex justify-center items-center bg-dark-3 rounded bg-opacity-50 z-[2]"
}, NT = { class: "relative bg-light-5 rounded-xs shadow-01 w-4/5 p-4 min-h-[300px] h-fit" }, TT = /* @__PURE__ */ w("span", { class: "p1-b flex justify-center mb-1" }, "請選擇目標", -1), IT = { class: "flex flex-col gap-2 mt-2" }, MT = ["onClick"], CT = { class: "flex flex-col flex-1" }, PT = { class: "p3-b" }, LT = { class: "p4-r" }, ST = {
  key: 2,
  class: "flex flex-col gap-2"
}, AT = { class: "flex items-center gap-2" }, xT = /* @__PURE__ */ w("span", { class: "p4-b" }, "執行", -1), RT = /* @__PURE__ */ w("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), FT = ["value"], YT = {
  key: 0,
  class: "flex gap-x-2 gap-y-3 flex-wrap"
}, VT = { class: "flex items-center gap-2" }, UT = /* @__PURE__ */ w("span", { class: "p4-b" }, "類型", -1), jT = /* @__PURE__ */ w("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), WT = ["value"], HT = {
  key: 0,
  class: "flex items-center gap-2"
}, BT = /* @__PURE__ */ w("span", { class: "p4-b" }, "調整", -1), GT = /* @__PURE__ */ w("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), KT = ["value"], qT = {
  key: 1,
  class: "flex items-center gap-2"
}, zT = { class: "flex items-center gap-2" }, XT = /* @__PURE__ */ w("span", { class: "p4-b" }, "類型", -1), ZT = /* @__PURE__ */ w("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), JT = ["value"], QT = {
  key: 0,
  class: "flex items-center gap-2"
}, eI = /* @__PURE__ */ w("span", { class: "p4-b" }, "調整", -1), tI = /* @__PURE__ */ w("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), nI = ["value"], rI = {
  key: 1,
  class: "flex items-center gap-2"
}, aI = {
  key: 2,
  class: "flex items-center gap-2 w-full"
}, sI = { class: "flex flex-col gap-2" }, oI = { class: "flex items-center gap-2" }, iI = /* @__PURE__ */ w("label", { for: "maxBudget" }, "設定預算上限", -1), lI = {
  key: 0,
  class: "flex gap-2 items-center"
}, uI = /* @__PURE__ */ w("span", null, "元", -1), cI = { class: "flex items-center gap-2" }, dI = /* @__PURE__ */ w("span", { class: "p4-b" }, "類型", -1), fI = /* @__PURE__ */ w("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), vI = ["value"], mI = {
  key: 0,
  class: "flex items-center gap-2"
}, pI = /* @__PURE__ */ w("span", { class: "p4-b" }, "調整", -1), hI = /* @__PURE__ */ w("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), gI = ["value"], _I = {
  key: 1,
  class: "flex items-center gap-2"
}, bI = {
  key: 2,
  class: "flex items-center gap-2 w-full"
}, yI = { class: "flex flex-col gap-2" }, DI = { class: "flex items-center gap-2" }, EI = /* @__PURE__ */ w("label", {
  for: "maxBudget",
  class: "p3-b"
}, "設定預算下限", -1), wI = {
  key: 0,
  class: "flex gap-2 items-center"
}, OI = /* @__PURE__ */ w("span", null, "元", -1), Ft = "", $I = /* @__PURE__ */ Se({
  __name: "EventAction",
  setup(e) {
    const { t } = La.global, n = yt("eventData"), r = ne(n.value.action ?? {}), s = ne(!!Object.keys(r.value).length), a = ne(!1);
    Te(a, (Y) => {
      var V, $, q, pe, $e;
      (V = r.value.params) != null && V.limit || (q = ($ = r.value) == null ? void 0 : $.params) == null || delete q.limit, Y || ($e = (pe = r.value) == null ? void 0 : pe.params) == null || delete $e.limit;
    }), ps(() => {
      var Y, V, $, q, pe;
      ((Y = r.value) == null ? void 0 : Y.action) == re.SetNewBudget || ((V = r.value) == null ? void 0 : V.action) == re.IncreaseBudget || (($ = r.value) == null ? void 0 : $.action) == re.LowerBudget || delete r.value.params, a.value = !!((pe = (q = r.value) == null ? void 0 : q.params) != null && pe.limit);
    }), Te(
      r,
      (Y) => {
        n.value.action = Y;
      },
      { deep: !0 }
    );
    const o = C(() => {
      var Y;
      return ((Y = n.value.action) == null ? void 0 : Y.client) == Qe.Google ? bt : vt;
    }), i = {
      [Qe.Google]: {
        [bt.Campaign]: {
          SetNewBudget: re.SetNewBudget,
          IncreaseBudget: re.IncreaseBudget,
          LowerBudget: re.LowerBudget,
          OpenProject: re.OpenProject,
          SuspendProject: re.SuspendProject,
          None: re.None
        },
        [bt.AdGroup]: {
          SuspendProject: re.SuspendProject,
          None: re.None
        },
        [bt.AdTag]: {
          SuspendProject: re.SuspendProject,
          None: re.None
        },
        [bt.Ad]: {
          SuspendProject: re.SuspendProject,
          None: re.None
        }
      },
      [Qe.Facebook]: {
        [vt.Campaign]: {
          SetNewBudget: re.SetNewBudget,
          IncreaseBudget: re.IncreaseBudget,
          LowerBudget: re.LowerBudget,
          OpenProject: re.OpenProject,
          SuspendProject: re.SuspendProject,
          None: re.None
        },
        [vt.AdGroup]: {
          SetNewBudget: re.SetNewBudget,
          IncreaseBudget: re.IncreaseBudget,
          LowerBudget: re.LowerBudget,
          OpenProject: re.OpenProject,
          SuspendProject: re.SuspendProject,
          None: re.None
        },
        [vt.AdTag]: {
          SuspendProject: re.SuspendProject,
          None: re.None
        },
        [vt.Ad]: {
          SuspendProject: re.SuspendProject,
          None: re.None
        }
      }
    }, l = C(() => {
      var $, q;
      const Y = ($ = r.value) == null ? void 0 : $.client, V = (q = r.value) == null ? void 0 : q.adLevel;
      if (Y && V) {
        const pe = i[Y];
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
          [re.SetNewBudget]: [ae.Value],
          [re.IncreaseBudget]: [ae.Percentage, ae.Value],
          [re.LowerBudget]: [ae.Percentage, ae.Value],
          [re.OpenProject]: [ae.Percentage, ae.Value],
          [re.SuspendProject]: [ae.Percentage, ae.Value],
          [re.None]: [ae.Percentage, ae.Value]
        },
        [bt.AdGroup]: {
          [re.SuspendProject]: [ae.Percentage, ae.Value],
          [re.None]: [ae.Percentage, ae.Value]
        },
        [bt.AdTag]: {
          [re.SuspendProject]: [ae.Percentage, ae.Value],
          [re.None]: [ae.Percentage, ae.Value]
        },
        [bt.Ad]: {
          [re.SuspendProject]: [ae.Percentage, ae.Value],
          [re.None]: [ae.Percentage, ae.Value]
        }
      },
      [Qe.Facebook]: {
        [vt.Campaign]: {
          [re.SetNewBudget]: [ae.Value],
          [re.IncreaseBudget]: [ae.Percentage, ae.Value],
          [re.LowerBudget]: [ae.Percentage, ae.Value],
          [re.OpenProject]: [ae.Percentage, ae.Value],
          [re.SuspendProject]: [ae.Percentage, ae.Value],
          [re.None]: [ae.Percentage, ae.Value]
        },
        [vt.AdGroup]: {
          [re.SetNewBudget]: [ae.Value],
          [re.IncreaseBudget]: [ae.Percentage, ae.Value],
          [re.LowerBudget]: [ae.Percentage, ae.Value],
          [re.OpenProject]: [ae.Percentage, ae.Value],
          [re.SuspendProject]: [ae.Percentage, ae.Value],
          [re.None]: [ae.Percentage, ae.Value]
        },
        [vt.AdTag]: {
          [re.SuspendProject]: [ae.Percentage, ae.Value],
          [re.None]: [ae.Percentage, ae.Value]
        },
        [vt.Ad]: {
          [re.SuspendProject]: [ae.Percentage, ae.Value],
          [re.None]: [ae.Percentage, ae.Value]
        }
      }
    }, c = C(() => {
      var q, pe, $e;
      const Y = (q = r.value) == null ? void 0 : q.client, V = (pe = r.value) == null ? void 0 : pe.adLevel, $ = ($e = r.value) == null ? void 0 : $e.action;
      if (Y && V && $) {
        const ee = u[Y];
        if (ee) {
          const Ee = ee[V];
          if (Ee) {
            const ge = Ee[$];
            if (ge)
              return ge;
          }
        }
      }
      return [ae.Percentage, ae.Value];
    }), m = C(() => r.value.client ? r.value.client : ""), f = (Y) => {
      r.value.client = Number(Y.target.value), delete r.value.target;
    }, v = C(() => r.value.adLevel ? r.value.adLevel : ""), E = (Y) => {
      r.value.adLevel = Number(Y.target.value), delete r.value.action, delete r.value.target;
    }, y = C(() => r.value.targetType ? r.value.targetType : ""), b = (Y) => {
      r.value.targetType = Number(Y.target.value), delete r.value.action, delete r.value.target;
    }, d = C(() => r.value.action ? r.value.action : ""), g = (Y) => r.value.action = Number(Y.target.value), k = C(() => {
      var Y;
      return (Y = r.value) != null && Y.params || (r.value.params = {}), r.value.params.budgetType ? r.value.params.budgetType : "";
    }), _ = (Y) => r.value.params.budgetType = Y.target.value, M = C(() => {
      var Y;
      return (Y = r.value) != null && Y.params || (r.value.params = {}), r.value.params.valueType ? r.value.params.valueType : "";
    }), N = (Y) => r.value.params.valueType = Y.target.value, A = ne(!1), P = (Y) => {
      var $;
      ($ = r.value) != null && $.target || (r.value.target = []);
      const V = r.value.target.findIndex(
        (q) => q.id === Y.id
      );
      V === -1 ? r.value.target.push(Y) : r.value.target.splice(V, 1);
    }, L = ne(), x = async () => {
      L.value = [
        { id: 1, name: "qwe" },
        { id: 2, name: "asd" },
        { id: 3, name: "zxc" },
        { id: 4, name: "rty" },
        { id: 5, name: "bgfb" }
      ];
    }, U = C(() => "name"), F = C(() => {
      const Y = le.value.toLowerCase();
      return L.value.filter(
        (V) => V[U.value].toLowerCase().includes(Y)
      );
    }), X = async () => {
      await x(), A.value = !0;
    }, le = ne(""), H = () => {
      r.value.target = F.value;
    }, G = ne(!1);
    hn(() => {
      G.value = !0;
    });
    const j = () => {
      s.value = !1, r.value = {}, Yn(() => {
        delete n.value.action;
      });
    };
    return C(() => {
      const Y = m.value, V = r.value.adLevel, $ = k.value;
      console.log("object");
      const q = Y === Qe.Google && V === bt.Campaign, pe = Y === Qe.Facebook && V === vt.Campaign, $e = Y === Qe.Facebook && V === vt.AdGroup, ee = q || pe || $e, Ee = $ === jn.DailyBudget ? "日預算" : "總預算", ge = `${Qe[Y]}${o.value[V]}`, Ce = ee ? `若${t(ge)}設定為${Ee}，則不會變更` : "";
      return { show: ee, msg: Ce };
    }), (Y, V) => p(s) ? (O(), qe(Nr, {
      key: 1,
      title: "動作"
    }, {
      default: ze(() => [
        w("div", uT, [
          w("div", cT, [
            w("div", {
              class: "cursor-pointer text-dark-4 absolute -top-2.5 -right-1.5 p4-b",
              onClick: j
            }, " 刪除 "),
            w("label", dT, [
              fT,
              Pe(w("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": V[1] || (V[1] = ($) => be(m) ? m.value = $ : null),
                onChange: f,
                required: ""
              }, [
                vT,
                (O(!0), T(te, null, he(p(Qe), ($, q) => (O(), T(te, { key: q }, [
                  Number.isInteger($) ? Q("", !0) : (O(), T("option", {
                    key: 0,
                    value: q
                  }, ie($), 9, mT))
                ], 64))), 128))
              ], 544), [
                [Be, p(m)]
              ])
            ]),
            p(m) != Ft ? (O(), T("label", pT, [
              hT,
              Pe(w("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": V[2] || (V[2] = ($) => be(v) ? v.value = $ : null),
                onChange: E,
                required: ""
              }, [
                gT,
                (O(!0), T(te, null, he(p(o), ($, q) => (O(), T(te, { key: q }, [
                  Number.isInteger($) ? Q("", !0) : (O(), T("option", {
                    key: 0,
                    value: q
                  }, ie(p(t)(`${p(Qe)[p(m)]}${$}`)), 9, _T))
                ], 64))), 128))
              ], 544), [
                [Be, p(v)]
              ])
            ])) : Q("", !0),
            p(v) != Ft ? (O(), T("label", bT, [
              yT,
              Pe(w("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": V[3] || (V[3] = ($) => be(y) ? y.value = $ : null),
                onChange: b,
                required: ""
              }, [
                DT,
                (O(!0), T(te, null, he(p(vn), ($, q) => (O(), T(te, { key: q }, [
                  Number.isInteger($) ? Q("", !0) : (O(), T("option", {
                    key: 0,
                    value: q
                  }, ie(p(t)($)), 9, ET))
                ], 64))), 128))
              ], 544), [
                [Be, p(y)]
              ])
            ])) : Q("", !0)
          ]),
          p(y) === p(vn).ForID ? (O(), T("div", wT, [
            w("label", { class: "flex items-center gap-2" }, [
              OT,
              w("div", {
                class: "p4-r px-1.5 py-0.5 text-true-blue-2 rounded bg-true-blue-5 flex w-fit cursor-pointer hover:bg-true-blue-4",
                onClick: X
              }, " 編輯 ")
            ]),
            p(y) === p(vn).ForID ? (O(), T("div", $T, [
              (O(!0), T(te, null, he(p(r).target, ($, q) => (O(), T("span", {
                class: "p4-r text-true-blue-3 px-0.5",
                key: $.id
              }, ie($.name) + ie(q !== p(r).target.length - 1 ? "," : ""), 1))), 128))
            ])) : Q("", !0)
          ])) : Q("", !0),
          p(G) ? (O(), qe(ll, {
            key: 1,
            to: "#editor-container"
          }, [
            p(A) ? (O(), T("div", kT, [
              w("div", NT, [
                w("div", {
                  class: "absolute top-1 right-2 cursor-pointer",
                  onClick: V[4] || (V[4] = ($) => A.value = !1)
                }, " X "),
                TT,
                me(Mt, {
                  modelValue: p(le),
                  "onUpdate:modelValue": V[5] || (V[5] = ($) => be(le) ? le.value = $ : null)
                }, null, 8, ["modelValue"]),
                w("div", {
                  class: "mt-2 flex w-full justify-end p4-b text-true-blue-3",
                  onClick: H
                }, " 全選 "),
                w("div", IT, [
                  (O(!0), T(te, null, he(p(F), ($) => {
                    var q;
                    return O(), T("div", {
                      class: "border border-dark-5 rounded py-1 px-3 flex gap-1 hover:border-transparent hover:bg-true-blue-5 cursor-pointer",
                      key: $.id,
                      onClick: (pe) => P($)
                    }, [
                      w("div", CT, [
                        w("span", PT, ie($.id), 1),
                        w("span", LT, ie($.name), 1)
                      ]),
                      w("div", {
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
          p(y) !== Ft ? (O(), T("div", ST, [
            w("label", AT, [
              xT,
              Pe(w("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": V[6] || (V[6] = ($) => be(d) ? d.value = $ : null),
                onChange: g,
                required: ""
              }, [
                RT,
                (O(!0), T(te, null, he(p(l), ($, q) => (O(), T("option", {
                  key: q,
                  value: $
                }, ie(p(t)(q)), 9, FT))), 128))
              ], 544), [
                [Be, p(d)]
              ])
            ]),
            p(v) != Ft ? (O(), T("div", YT, [
              p(r).action == p(re).SetNewBudget ? (O(), T(te, { key: 0 }, [
                w("label", VT, [
                  UT,
                  Pe(w("select", {
                    class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                    "onUpdate:modelValue": V[7] || (V[7] = ($) => be(k) ? k.value = $ : null),
                    onChange: _,
                    required: ""
                  }, [
                    jT,
                    (O(!0), T(te, null, he(p(jn), ($, q) => (O(), T(te, { key: q }, [
                      Number.isInteger($) ? Q("", !0) : (O(), T("option", {
                        key: 0,
                        value: $
                      }, ie(p(t)($)), 9, WT))
                    ], 64))), 128))
                  ], 544), [
                    [Be, p(k)]
                  ])
                ]),
                p(k) != Ft ? (O(), T("label", HT, [
                  BT,
                  Pe(w("select", {
                    class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                    "onUpdate:modelValue": V[8] || (V[8] = ($) => be(M) ? M.value = $ : null),
                    onChange: N,
                    required: ""
                  }, [
                    GT,
                    (O(!0), T(te, null, he(p(c), ($, q) => (O(), T("option", {
                      key: q,
                      value: $
                    }, ie(p(t)(`action${$}`)), 9, KT))), 128))
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
                  w("span", null, ie(p(r).params.valueType === p(ae).Percentage ? "%" : "元"), 1)
                ])) : Q("", !0)
              ], 64)) : p(r).action == p(re).IncreaseBudget ? (O(), T(te, { key: 1 }, [
                w("label", zT, [
                  XT,
                  Pe(w("select", {
                    class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                    "onUpdate:modelValue": V[10] || (V[10] = ($) => be(k) ? k.value = $ : null),
                    onChange: _,
                    required: ""
                  }, [
                    ZT,
                    (O(!0), T(te, null, he(p(jn), ($, q) => (O(), T(te, { key: q }, [
                      Number.isInteger($) ? Q("", !0) : (O(), T("option", {
                        key: 0,
                        value: $
                      }, ie(p(t)($)), 9, JT))
                    ], 64))), 128))
                  ], 544), [
                    [Be, p(k)]
                  ])
                ]),
                p(k) != Ft ? (O(), T("label", QT, [
                  eI,
                  Pe(w("select", {
                    class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                    "onUpdate:modelValue": V[11] || (V[11] = ($) => be(M) ? M.value = $ : null),
                    onChange: N,
                    required: ""
                  }, [
                    tI,
                    (O(!0), T(te, null, he(p(c), ($, q) => (O(), T("option", {
                      key: q,
                      value: $
                    }, ie(p(t)(`action${$}`)), 9, nI))), 128))
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
                  w("span", null, ie(p(r).params.valueType === p(ae).Percentage ? "%" : "元"), 1)
                ])) : Q("", !0),
                p(r).params.valueType === p(ae).Percentage ? (O(), T("label", aI, [
                  w("div", sI, [
                    w("div", oI, [
                      Pe(w("input", {
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
              ], 64)) : p(r).action == p(re).LowerBudget ? (O(), T(te, { key: 2 }, [
                w("label", cI, [
                  dI,
                  Pe(w("select", {
                    class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                    "onUpdate:modelValue": V[15] || (V[15] = ($) => be(k) ? k.value = $ : null),
                    onChange: _,
                    required: ""
                  }, [
                    fI,
                    (O(!0), T(te, null, he(p(jn), ($, q) => (O(), T(te, { key: q }, [
                      Number.isInteger($) ? Q("", !0) : (O(), T("option", {
                        key: 0,
                        value: $
                      }, ie(p(t)($)), 9, vI))
                    ], 64))), 128))
                  ], 544), [
                    [Be, p(k)]
                  ])
                ]),
                p(k) != Ft ? (O(), T("label", mI, [
                  pI,
                  Pe(w("select", {
                    class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                    "onUpdate:modelValue": V[16] || (V[16] = ($) => be(M) ? M.value = $ : null),
                    onChange: N
                  }, [
                    hI,
                    (O(!0), T(te, null, he(p(c), ($, q) => (O(), T("option", {
                      key: q,
                      value: $
                    }, ie(p(t)(`action${$}`)), 9, gI))), 128))
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
                  w("span", null, ie(p(r).params.valueType === p(ae).Percentage ? "%" : "元"), 1)
                ])) : Q("", !0),
                p(r).params.valueType === p(ae).Percentage ? (O(), T("div", bI, [
                  w("div", yI, [
                    w("div", DI, [
                      Pe(w("input", {
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
}), kI = { class: "flex flex-col gap-2 relative pt-2" }, NI = { class: "flex items-center gap-2" }, TI = { class: "flex items-center gap-2" }, II = /* @__PURE__ */ w("span", { class: "p3-b" }, "平台", -1), MI = /* @__PURE__ */ w("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), CI = ["value"], PI = {
  key: 0,
  class: "flex items-center gap-2"
}, LI = /* @__PURE__ */ w("span", { class: "p3-b" }, "層級", -1), SI = /* @__PURE__ */ w("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), AI = ["value"], xI = {
  key: 1,
  class: "flex items-center gap-2"
}, RI = /* @__PURE__ */ w("span", { class: "p4-b" }, "目標", -1), FI = /* @__PURE__ */ w("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), YI = ["value"], VI = {
  key: 0,
  class: "flex flex-col"
}, UI = /* @__PURE__ */ w("span", { class: "p4-b" }, "指定目標", -1), jI = { key: 0 }, WI = {
  key: 0,
  class: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex justify-center items-center bg-dark-3 rounded bg-opacity-50 z-[2]"
}, HI = { class: "relative bg-light-5 rounded-xs shadow-01 w-4/5 p-4 min-h-[300px] h-fit" }, BI = /* @__PURE__ */ w("span", { class: "p1-b flex justify-center mb-1" }, "請選擇目標", -1), GI = { class: "flex flex-col gap-2 mt-2" }, KI = ["onClick"], qI = { class: "flex flex-col flex-1" }, zI = { class: "p3-b" }, XI = { class: "p4-r" }, ZI = {
  key: 2,
  class: "flex items-center gap-1"
}, JI = /* @__PURE__ */ w("span", { class: "p3-b" }, "條件", -1), QI = /* @__PURE__ */ w("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), eM = ["value"], tM = {
  key: 3,
  class: "flex gap-2 flex-wrap"
}, nM = { class: "flex gap-2" }, rM = { class: "flex items-center gap-1" }, aM = /* @__PURE__ */ w("span", { class: "p3-b" }, "運算", -1), sM = /* @__PURE__ */ w("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), oM = ["value"], iM = { key: 0 }, lM = ["onClick"], uM = {
  key: 0,
  class: "flex items-center gap-1"
}, cM = /* @__PURE__ */ w("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), dM = ["value"], fM = {
  key: 1,
  class: "flex items-center gap-1"
}, vM = /* @__PURE__ */ w("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), mM = ["value"], pM = {
  key: 4,
  class: "flex items-center gap-2"
}, hM = /* @__PURE__ */ w("label", { for: "comparison" }, "加入比較區間", -1), ln = "", gM = /* @__PURE__ */ Se({
  __name: "ConditionItem",
  props: {
    modelValue: {},
    index: {}
  },
  emits: ["update:modelValue", "removeItem"],
  setup(e, { emit: t }) {
    const n = e, { t: r } = La.global, s = C(() => n.modelValue ?? {}), a = C(() => {
      var H;
      return ((H = s.value) == null ? void 0 : H.client) == Qe.Google ? Vn : Un;
    }), o = C(() => s.value.client ? s.value.client : ""), i = (H) => s.value.client = Number(H.target.value), l = C(() => s.value.adLevel ? s.value.adLevel : ""), u = (H) => {
      s.value.adLevel = Number(H.target.value), f.value != ln && t("update:modelValue", {
        client: o.value,
        adLevel: l.value
      });
    }, c = C(() => s.value.targetType ? s.value.targetType : ""), m = (H) => {
      s.value.targetType = Number(H.target.value), delete s.value.action, delete s.value.target;
    }, f = C(() => s.value.conditionType ? s.value.conditionType : ""), v = (H) => s.value.conditionType = H.target.value, E = C(() => s.value.dateRangeType ? s.value.dateRangeType : ""), y = (H) => {
      s.value.dateRangeType = Number(H.target.value), Number(H.target.value) !== wr.SpecifiedTime && delete s.value.dateRange;
    }, b = C(() => s.value.operation ? s.value.operation : ""), d = (H) => s.value.operation = H.target.value, g = C(() => s.value.valueType ? s.value.valueType : ""), k = (H) => s.value.valueType = H.target.value, _ = {
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
    }, M = C(() => {
      if (o.value && l.value) {
        const H = _[o.value];
        if (H) {
          const G = H[l.value];
          if (G)
            return G;
        }
      }
      return {};
    }), N = ne(!1), A = (H) => {
      var j;
      (j = s.value) != null && j.target || (s.value.target = []);
      const G = s.value.target.findIndex(
        (Y) => Y.id === H.id
      );
      G === -1 ? s.value.target.push(H) : s.value.target.splice(G, 1);
    }, P = ne(), L = async () => {
      P.value = [
        { id: 1, name: "qwe" },
        { id: 2, name: "asd" },
        { id: 3, name: "zxc" },
        { id: 4, name: "rty" },
        { id: 5, name: "bgfb" }
      ];
    }, x = C(() => "name"), U = C(() => {
      const H = X.value.toLowerCase();
      return P.value.filter(
        (G) => G[x.value].toLowerCase().includes(H)
      );
    }), F = async () => {
      await L(), N.value = !0;
    }, X = ne(""), le = ne(!1);
    return hn(() => {
      le.value = !0;
    }), (H, G) => (O(), qe(Nr, {
      title: "條件" + (H.index + 1)
    }, {
      default: ze(() => [
        w("div", kI, [
          w("div", {
            class: "cursor-pointer text-dark-4 absolute -top-2.5 -right-1.5 p4-b",
            onClick: G[0] || (G[0] = (j) => t("removeItem"))
          }, " 刪除 "),
          w("div", NI, [
            w("label", TI, [
              II,
              Pe(w("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": G[1] || (G[1] = (j) => be(o) ? o.value = j : null),
                onChange: i,
                required: ""
              }, [
                MI,
                (O(!0), T(te, null, he(p(Qe), (j, Y) => (O(), T(te, { key: Y }, [
                  Number.isInteger(j) ? Q("", !0) : (O(), T("option", {
                    key: 0,
                    value: Y
                  }, ie(j), 9, CI))
                ], 64))), 128))
              ], 544), [
                [Be, p(o)]
              ])
            ]),
            p(o) != ln ? (O(), T("label", PI, [
              LI,
              Pe(w("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": G[2] || (G[2] = (j) => be(l) ? l.value = j : null),
                onChange: u,
                required: ""
              }, [
                SI,
                (O(!0), T(te, null, he(p(a), (j, Y) => (O(), T(te, { key: Y }, [
                  Number.isInteger(j) ? Q("", !0) : (O(), T("option", {
                    key: 0,
                    value: Y
                  }, ie(p(r)(`${p(Qe)[p(o)]}${j}`)), 9, AI))
                ], 64))), 128))
              ], 544), [
                [Be, p(l)]
              ])
            ])) : Q("", !0),
            p(l) != ln ? (O(), T("label", xI, [
              RI,
              Pe(w("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": G[3] || (G[3] = (j) => be(c) ? c.value = j : null),
                onChange: m,
                required: ""
              }, [
                FI,
                (O(!0), T(te, null, he(p(vn), (j, Y) => (O(), T(te, { key: Y }, [
                  Number.isInteger(j) ? Q("", !0) : (O(), T("option", {
                    key: 0,
                    value: Y
                  }, ie(p(r)(j)), 9, YI))
                ], 64))), 128))
              ], 544), [
                [Be, p(c)]
              ])
            ])) : Q("", !0)
          ]),
          p(c) === p(vn).ForID ? (O(), T("div", VI, [
            w("label", { class: "flex items-center gap-2" }, [
              UI,
              w("div", {
                class: "p4-r px-1.5 py-0.5 text-true-blue-2 rounded bg-true-blue-5 flex w-fit cursor-pointer hover:bg-true-blue-4",
                onClick: F
              }, " 編輯 ")
            ]),
            p(c) === p(vn).ForID ? (O(), T("div", jI, [
              (O(!0), T(te, null, he(p(s).target, (j, Y) => (O(), T("span", {
                class: "p4-r text-true-blue-3 px-0.5",
                key: j.id
              }, ie(j.name) + ie(Y !== p(s).target.length - 1 ? "," : ""), 1))), 128))
            ])) : Q("", !0)
          ])) : Q("", !0),
          p(le) ? (O(), qe(ll, {
            key: 1,
            to: "#editor-container"
          }, [
            p(N) ? (O(), T("div", WI, [
              w("div", HI, [
                w("div", {
                  class: "absolute top-1 right-2 cursor-pointer",
                  onClick: G[4] || (G[4] = (j) => N.value = !1)
                }, " X "),
                BI,
                me(Mt, {
                  modelValue: p(X),
                  "onUpdate:modelValue": G[5] || (G[5] = (j) => be(X) ? X.value = j : null)
                }, null, 8, ["modelValue"]),
                w("div", GI, [
                  (O(!0), T(te, null, he(p(U), (j) => {
                    var Y;
                    return O(), T("div", {
                      class: "border border-dark-5 rounded py-1 px-3 flex gap-1 hover:border-transparent hover:bg-true-blue-5 cursor-pointer",
                      key: j.id,
                      onClick: (V) => A(j)
                    }, [
                      w("div", qI, [
                        w("span", zI, ie(j.id), 1),
                        w("span", XI, ie(j.name), 1)
                      ]),
                      w("div", {
                        class: Ge(["rounded h-3 w-3 border", [
                          p(s).target && (Y = p(s)) != null && Y.target.find((V) => V.id === j.id) ? "bg-red-1" : ""
                        ]])
                      }, null, 2)
                    ], 8, KI);
                  }), 128))
                ])
              ])
            ])) : Q("", !0)
          ])) : Q("", !0),
          p(c) != ln ? (O(), T("label", ZI, [
            JI,
            Pe(w("select", {
              class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
              "onUpdate:modelValue": G[6] || (G[6] = (j) => be(f) ? f.value = j : null),
              onChange: v,
              required: ""
            }, [
              QI,
              (O(!0), T(te, null, he(p(M), (j, Y) => (O(), T("option", {
                key: Y,
                value: j
              }, ie(p(r)(Y)), 9, eM))), 128))
            ], 544), [
              [Be, p(f)]
            ])
          ])) : Q("", !0),
          p(f) != ln ? (O(), T("div", tM, [
            w("div", nM, [
              w("label", rM, [
                aM,
                Pe(w("select", {
                  class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                  "onUpdate:modelValue": G[7] || (G[7] = (j) => be(E) ? E.value = j : null),
                  onChange: y,
                  required: ""
                }, [
                  sM,
                  (O(!0), T(te, null, he(p(wr), (j, Y) => (O(), T(te, { key: Y }, [
                    Number.isInteger(j) ? Q("", !0) : (O(), T("option", {
                      key: 0,
                      value: Y
                    }, ie(p(r)(j)), 9, oM))
                  ], 64))), 128))
                ], 544), [
                  [Be, p(E)]
                ])
              ]),
              p(E) == p(wr).SpecifiedTime ? (O(), T("div", iM, [
                me(p(zs), {
                  modelValue: p(s).dateRange,
                  "onUpdate:modelValue": G[8] || (G[8] = (j) => p(s).dateRange = j),
                  modelModifiers: { range: !0 },
                  mode: "date"
                }, {
                  default: ze(({ togglePopover: j, inputValue: Y }) => [
                    w("button", {
                      class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 transition-all hover:bg-light-3 hover:bg-opacity-50",
                      onClick: j
                    }, ie(Y.start && Y.end ? `${Y.start}-${Y.end}` : "請選定執行日期"), 9, lM)
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ])) : Q("", !0)
            ]),
            p(E) != "" ? (O(), T("label", uM, [
              Pe(w("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": G[9] || (G[9] = (j) => be(b) ? b.value = j : null),
                onChange: d,
                required: ""
              }, [
                cM,
                (O(!0), T(te, null, he(p(gs), (j, Y) => (O(), T(te, { key: Y }, [
                  Number.isInteger(j) ? Q("", !0) : (O(), T("option", {
                    key: 0,
                    value: j
                  }, ie(p(r)(Y)), 9, dM))
                ], 64))), 128))
              ], 544), [
                [Be, p(b)]
              ])
            ])) : Q("", !0),
            p(b) != ln ? (O(), T("label", fM, [
              Pe(w("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": G[10] || (G[10] = (j) => be(g) ? g.value = j : null),
                onChange: k,
                required: ""
              }, [
                vM,
                (O(!0), T(te, null, he(p(ae), (j, Y) => (O(), T(te, { key: Y }, [
                  Number.isInteger(j) ? Q("", !0) : (O(), T("option", {
                    key: 0,
                    value: j
                  }, ie(p(r)(`condition${Y}`)), 9, mM))
                ], 64))), 128))
              ], 544), [
                [Be, p(g)]
              ])
            ])) : Q("", !0),
            p(g) != ln ? (O(), qe(Mt, {
              key: 2,
              modelValue: p(s).value,
              "onUpdate:modelValue": G[11] || (G[11] = (j) => p(s).value = j),
              type: "number",
              required: !0
            }, null, 8, ["modelValue"])) : Q("", !0)
          ])) : Q("", !0),
          p(f) != ln ? (O(), T("div", pM, [
            Pe(w("input", {
              type: "checkbox",
              "onUpdate:modelValue": G[12] || (G[12] = (j) => H.modelValue.comparison = j),
              id: "comparison"
            }, null, 512), [
              [ta, H.modelValue.comparison]
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
}, bM = /* @__PURE__ */ w("div", { class: "h-[1px] flex-1 bg-light-3" }, null, -1), yM = /* @__PURE__ */ w("p", { class: "p4-b to-dark-4" }, "且", -1), DM = /* @__PURE__ */ w("div", { class: "h-[1px] flex-1 bg-light-3" }, null, -1), EM = [
  bM,
  yM,
  DM
], wM = {
  key: 0,
  class: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex justify-center items-center bg-dark-3 rounded bg-opacity-50 z-[2]"
}, OM = { class: "relative bg-light-5 rounded-xs shadow-01 w-4/5 p-4" }, $M = /* @__PURE__ */ w("span", { class: "p1-b flex justify-center mb-1" }, "請選擇條件", -1), kM = /* @__PURE__ */ hc('<div class="flex flex-col gap-2 mt-2"><div class="border border-dark-5 rounded py-1 px-3 flex gap-1 hover:border-transparent hover:bg-true-blue-5 cursor-pointer"><div class="flex flex-col flex-1"><span class="p3-b">當帳戶剩餘預算 小於指定金額，執行動作</span><span class="p4-r">ex: 帳戶剩餘預算小於 1000 元</span></div><div class="flex justify-center items-center">O</div></div></div>', 1), NM = /* @__PURE__ */ Se({
  __name: "Condition",
  setup(e) {
    const t = ne(!1), n = yt("eventData"), r = ne(n.value.conditions ?? []);
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
    return (o, i) => (O(), T(te, null, [
      (O(!0), T(te, null, he(p(r), (l, u) => (O(), T(te, { key: u }, [
        me(gM, {
          index: u,
          modelValue: p(r)[u],
          "onUpdate:modelValue": (c) => p(r)[u] = c,
          onRemoveItem: (c) => a(u)
        }, null, 8, ["index", "modelValue", "onUpdate:modelValue", "onRemoveItem"]),
        u + 1 !== p(r).length ? (O(), T("div", _M, EM)) : Q("", !0)
      ], 64))), 128)),
      w("div", {
        class: "p3-b text-true-blue-3 flex ml-auto w-fit cursor-pointer hover:text-true-blue-2",
        onClick: i[0] || (i[0] = (l) => t.value = !p(t))
      }, " + 加入條件 "),
      p(t) ? (O(), T("div", wM, [
        w("div", OM, [
          w("div", {
            class: "absolute top-1 right-2 cursor-pointer",
            onClick: i[1] || (i[1] = (l) => t.value = !1)
          }, " X "),
          $M,
          me(Mt),
          kM,
          w("div", {
            class: "border ml-auto mt-2 border-true-blue-3 text-true-blue-3 rounded px-1 w-fit p3-r cursor-pointer hover:text-true-blue-2 hover:border-true-blue-2",
            onClick: s
          }, " 自訂 ")
        ])
      ])) : Q("", !0)
    ], 64));
  }
}), TM = { class: "flex items-center gap-2" }, IM = /* @__PURE__ */ w("span", { class: "p4-b" }, "以電子郵件寄出結果", -1), MM = /* @__PURE__ */ w("option", {
  value: "-2",
  disabled: ""
}, "請選擇", -1), CM = ["value"], PM = /* @__PURE__ */ Se({
  __name: "Notification",
  setup(e) {
    const { t } = La.global, n = yt("eventData"), r = ne(
      n.value.notification ?? {
        email: -2
      }
    );
    return hn(() => {
      r.value.email === -2 && (r.value.email = 0);
    }), Te(
      r,
      (s) => {
        n.value.notification = s;
      },
      { deep: !0 }
    ), (s, a) => (O(), T("div", null, [
      w("label", TM, [
        IM,
        Pe(w("select", {
          class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
          "onUpdate:modelValue": a[0] || (a[0] = (o) => p(r).email = o)
        }, [
          MM,
          (O(!0), T(te, null, he(p(_s), (o, i) => (O(), T(te, { key: i }, [
            Number.isInteger(o) ? Q("", !0) : (O(), T("option", {
              key: 0,
              value: Number(i)
            }, ie(p(t)(`mail${o}`)), 9, CM))
          ], 64))), 128))
        ], 512), [
          [Be, p(r).email]
        ])
      ])
    ]));
  }
}), LM = ["width", "height", "fill", "transform"], SM = { key: 0 }, AM = /* @__PURE__ */ w("path", { d: "M225.6,62.64l-88-48.17a19.91,19.91,0,0,0-19.2,0l-88,48.17A20,20,0,0,0,20,80.19v95.62a20,20,0,0,0,10.4,17.55l88,48.17a19.89,19.89,0,0,0,19.2,0l88-48.17A20,20,0,0,0,236,175.81V80.19A20,20,0,0,0,225.6,62.64ZM128,36.57,200,76,128,115.4,56,76ZM44,96.79l72,39.4v76.67L44,173.44Zm96,116.07V136.19l72-39.4v76.65Z" }, null, -1), xM = [
  AM
], RM = { key: 1 }, FM = /* @__PURE__ */ w("path", {
  d: "M128,129.09V232a8,8,0,0,1-3.84-1l-88-48.16a8,8,0,0,1-4.16-7V80.2a8,8,0,0,1,.7-3.27Z",
  opacity: "0.2"
}, null, -1), YM = /* @__PURE__ */ w("path", { d: "M223.68,66.15,135.68,18h0a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32h0l80.34,44L128,120,47.66,76ZM40,90l80,43.78v85.79L40,175.82Zm96,129.57V133.82L216,90v85.78Z" }, null, -1), VM = [
  FM,
  YM
], UM = { key: 2 }, jM = /* @__PURE__ */ w("path", { d: "M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,120,47.65,76,128,32l80.35,44Zm8,99.64V133.83l80-43.78v85.76Z" }, null, -1), WM = [
  jM
], HM = { key: 3 }, BM = /* @__PURE__ */ w("path", { d: "M222.72,67.9l-88-48.17a13.9,13.9,0,0,0-13.44,0l-88,48.18A14,14,0,0,0,26,80.18v95.64a14,14,0,0,0,7.28,12.27l88,48.18a13.92,13.92,0,0,0,13.44,0l88-48.18A14,14,0,0,0,230,175.82V80.18A14,14,0,0,0,222.72,67.9ZM127,30.25a2,2,0,0,1,1.92,0L212.51,76,128,122.24,43.49,76ZM39,177.57a2,2,0,0,1-1-1.75V86.66l84,46V223Zm177.92,0L134,223V132.64l84-46v89.16A2,2,0,0,1,217,177.57Z" }, null, -1), GM = [
  BM
], KM = { key: 4 }, qM = /* @__PURE__ */ w("path", { d: "M223.68,66.15,135.68,18h0a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32h0l80.34,44L128,120,47.66,76ZM40,90l80,43.78v85.79L40,175.82Zm96,129.57V133.82L216,90v85.78Z" }, null, -1), zM = [
  qM
], XM = { key: 5 }, ZM = /* @__PURE__ */ w("path", { d: "M221.76,69.66l-88-48.18a12,12,0,0,0-11.52,0l-88,48.18A12,12,0,0,0,28,80.18v95.64a12,12,0,0,0,6.24,10.52l88,48.18a11.95,11.95,0,0,0,11.52,0l88-48.18A12,12,0,0,0,228,175.82V80.18A12,12,0,0,0,221.76,69.66ZM126.08,28.5a3.94,3.94,0,0,1,3.84,0L216.67,76,128,124.52,39.33,76Zm-88,150.83A4,4,0,0,1,36,175.82V83.29l88,48.16v94.91Zm179.84,0-85.92,47V131.45l88-48.16v92.53A4,4,0,0,1,217.92,179.32Z" }, null, -1), JM = [
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
    return (c, m) => (O(), T("svg", rr({
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
}), tC = (e) => (gc("data-v-015ed2c9"), e = e(), _c(), e), nC = ["onSubmit"], rC = { class: "p1-b" }, aC = /* @__PURE__ */ tC(() => /* @__PURE__ */ w("span", { class: "p4-b" }, "規則名稱*", -1)), sC = {
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
      const m = Object.fromEntries(
        Object.entries(c).filter(([f, v]) => v !== null)
      );
      return JSON.stringify(m, null, 4);
    }, o = ne([]), i = (c) => {
      c.preventDefault(), n("update:data", a(s.value));
    }, l = (c) => {
      var m;
      (m = u.value) == null || m.click();
    };
    qn("eventData", s), qn("checkDataValid", o);
    const u = ne();
    return t({
      saveData: l
    }), (c, m) => r.data ? (O(), T("form", {
      key: 0,
      class: "p-5 rounded border flex flex-col gap-5 relative",
      id: "editor-container",
      onSubmit: il(i, ["prevent"])
    }, [
      w("div", rC, [
        Rr("建立自動化規則"),
        me(p(eC))
      ]),
      me(Nr, { title: "基本資料" }, {
        default: ze(() => [
          w("div", null, [
            aC,
            me(Mt, {
              modelValue: p(s).title,
              "onUpdate:modelValue": m[0] || (m[0] = (f) => p(s).title = f),
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
            "onUpdate:frequency": m[1] || (m[1] = (f) => p(s).frequency = f),
            interval: p(s).interval,
            "onUpdate:interval": m[2] || (m[2] = (f) => p(s).interval = f)
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
      w("button", {
        ref_key: "submitBtn",
        ref: u,
        class: "p-2 px-3 rounded bg-slate-100 hover:bg-sky-500 hover:text-white"
      }, " 保存 ", 512)
    ], 40, nC)) : Q("", !0);
  }
});
const lC = /* @__PURE__ */ bs(iC, [["__scopeId", "data-v-015ed2c9"]]), uC = { class: "bg-white p-3 rounded-xl flex w-4/5 min-h-[80%] max-h-96" }, cC = { class: "flex flex-col gap-2 py-2 px-4" }, dC = /* @__PURE__ */ w("div", { class: "w-[1px] h-auto bg-dark-4" }, null, -1), fC = /* @__PURE__ */ w("div", { class: "flex-1 h-auto bg-red-1" }, null, -1), gC = /* @__PURE__ */ Se({
  __name: "QuickSetup",
  setup(e) {
    const t = ne(!1), n = () => {
      t.value = !0;
    }, r = ne(["選擇平台", "執行動作", "設定條件", "執行時間"]);
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
            w("div", uC, [
              w("div", cC, [
                (O(!0), T(te, null, he(p(r), (i, l) => (O(), T("div", {
                  key: i,
                  class: "flex flex-col"
                }, [
                  w("span", null, " Step." + ie(l + 1), 1),
                  w("span", null, ie(i), 1)
                ]))), 128))
              ]),
              dC,
              fC
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        w("div", { onClick: n }, [
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
