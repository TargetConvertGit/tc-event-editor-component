import { defineComponent as Pe, openBlock as E, createElementBlock as T, createElementVNode as w, toDisplayString as le, ref as ne, watchEffect as ss, computed as C, watch as ke, onBeforeUnmount as Yu, Fragment as te, unref as h, renderList as me, createBlock as Ke, createCommentVNode as J, withDirectives as Ie, isRef as _e, vModelSelect as je, reactive as os, onMounted as vn, onUnmounted as Ir, toRefs as Fu, h as An, provide as Bn, inject as gt, resolveDynamicComponent as Ui, normalizeProps as ji, mergeProps as Qn, renderSlot as Ft, normalizeClass as He, normalizeStyle as _r, withKeys as Zs, createVNode as ve, withCtx as qe, nextTick as Ln, toRef as Ma, resolveComponent as un, Transition as Bi, createTextVNode as Cr, withModifiers as Hi, guardReactiveProps as Vu, resolveDirective as Uu, toHandlers as ju, vModelCheckbox as zr, getCurrentInstance as is, shallowRef as Bu, onBeforeMount as Hu, Text as Wu, Teleport as Wi, createStaticVNode as Gu, pushScopeId as Ku, popScopeId as qu } from "vue";
function fI(e) {
}
class zu {
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
var Xe = /* @__PURE__ */ ((e) => (e[e.Google = 1] = "Google", e[e.Facebook = 2] = "Facebook", e))(Xe || {}), mt = /* @__PURE__ */ ((e) => (e[e.Campaign = 1] = "Campaign", e[e.AdGroup = 2] = "AdGroup", e[e.Ad = 3] = "Ad", e[e.AdTag = 4] = "AdTag", e))(mt || {}), ct = /* @__PURE__ */ ((e) => (e[e.Campaign = 1] = "Campaign", e[e.AdGroup = 2] = "AdGroup", e[e.Ad = 3] = "Ad", e[e.AdTag = 4] = "AdTag", e))(ct || {}), cn = /* @__PURE__ */ ((e) => (e[e.ForAll = 1] = "ForAll", e[e.ForID = 2] = "ForID", e[e.ForActive = 3] = "ForActive", e))(cn || {}), Sn = /* @__PURE__ */ ((e) => (e[e.Account = 1] = "Account", e[e.Campaign = 2] = "Campaign", e[e.AdGroup = 3] = "AdGroup", e))(Sn || {}), xn = /* @__PURE__ */ ((e) => (e[e.Account = 1] = "Account", e[e.Campaign = 2] = "Campaign", e[e.AdGroup = 3] = "AdGroup", e))(xn || {}), xe = /* @__PURE__ */ ((e) => (e[e.Never = -1] = "Never", e[e.Hour = 1] = "Hour", e[e.Day = 2] = "Day", e[e.Week = 3] = "Week", e[e.Month = 4] = "Month", e[e.Annual = 5] = "Annual", e))(xe || {}), kt = /* @__PURE__ */ ((e) => (e[e.Sunday = 0] = "Sunday", e[e.Monday = 1] = "Monday", e[e.Tuesday = 2] = "Tuesday", e[e.Wednesday = 3] = "Wednesday", e[e.Thursday = 4] = "Thursday", e[e.Friday = 5] = "Friday", e[e.Saturday = 6] = "Saturday", e[e.Weekday = -1] = "Weekday", e[e.Weekend = -2] = "Weekend", e))(kt || {}), sn = /* @__PURE__ */ ((e) => (e[e.First = 1] = "First", e[e.Second = 2] = "Second", e[e.Third = 3] = "Third", e[e.Fourth = 4] = "Fourth", e[e.Fifth = 5] = "Fifth", e[e.Last = -1] = "Last", e))(sn || {}), it = /* @__PURE__ */ ((e) => (e[e.January = 1] = "January", e[e.February = 2] = "February", e[e.March = 3] = "March", e[e.April = 4] = "April", e[e.May = 5] = "May", e[e.June = 6] = "June", e[e.July = 7] = "July", e[e.August = 8] = "August", e[e.September = 9] = "September", e[e.October = 10] = "October", e[e.November = 11] = "November", e[e.December = 12] = "December", e))(it || {}), ae = /* @__PURE__ */ ((e) => (e[e.SetNewBudget = 1] = "SetNewBudget", e[e.IncreaseBudget = 2] = "IncreaseBudget", e[e.LowerBudget = 3] = "LowerBudget", e[e.OpenProject = 4] = "OpenProject", e[e.SuspendProject = 5] = "SuspendProject", e[e.None = -1] = "None", e))(ae || {}), Rn = /* @__PURE__ */ ((e) => (e.DailyBudget = "dailyBudget", e.TotalBudget = "totalBudget", e))(Rn || {}), se = /* @__PURE__ */ ((e) => (e.Value = "value", e.Percentage = "percentage", e))(se || {}), fe = /* @__PURE__ */ ((e) => (e.BudgetRemaining = "budgetRemaining", e.BudgetCap = "budgetCap", e.Clicks = "clicks", e.Impressions = "impressions", e.Cpc = "CPC", e.Spend = "spend", e.Conversions = "conversions", e.ConversionSpend = "conversionSpend", e.ReturnOnADSpending = "roas", e))(fe || {}), br = /* @__PURE__ */ ((e) => (e[e.Today = 1] = "Today", e[e.Yesterday = 2] = "Yesterday", e[e.Last3Days = 3] = "Last3Days", e[e.Last7Days = 4] = "Last7Days", e[e.ThisMonth = 5] = "ThisMonth", e[e.SpecifiedTime = -1] = "SpecifiedTime", e))(br || {}), ls = /* @__PURE__ */ ((e) => (e.MoreThan = ">", e.GreaterOrEqualTo = ">=", e.Equal = "==", e.LessThan = "<", e.LessThanOrEqualTo = "<=", e))(ls || {}), us = /* @__PURE__ */ ((e) => (e[e.AbnormalityOrError = 0] = "AbnormalityOrError", e[e.Error = 1] = "Error", e[e.None = -1] = "None", e))(us || {});
const vI = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ActionType: ae,
  AdLevelTypeFacebook: ct,
  AdLevelTypeGoogle: mt,
  BudgetType: Rn,
  ClientType: Xe,
  ConditionAdLevelTypeFacebook: xn,
  ConditionAdLevelTypeGoogle: Sn,
  ConditionType: fe,
  DateRangeType: br,
  EventActionTargetType: cn,
  EventHelper: zu,
  FrequencyType: xe,
  MonthType: it,
  OperationType: ls,
  ValueType: se,
  WeekOrdinalWordsType: sn,
  WeekdaysType: kt,
  emailType: us
}, Symbol.toStringTag, { value: "Module" })), Xu = { class: "flex" }, Zu = ["checked", "id"], Ju = ["for"], Qu = /* @__PURE__ */ Pe({
  __name: "CheckBox",
  props: {
    label: {},
    checked: { type: Boolean },
    fieldId: {}
  },
  emits: ["update:checked"],
  setup(e, { emit: t }) {
    return (n, r) => (E(), T("div", Xu, [
      w("input", {
        onInput: r[0] || (r[0] = (s) => n.$emit("update:checked", s.target.checked)),
        type: "checkbox",
        checked: n.checked,
        id: n.fieldId,
        class: "hidden"
      }, null, 40, Zu),
      w("label", {
        for: n.fieldId,
        class: "p3-r cursor-pointer rounded border hover:bg-light-4 border-dark-5 px-1 py-0.5 flex justify-center items-center text-dark-2 min-w-[1.75rem] min-h-[1.75rem]"
      }, le(n.label), 9, Ju)
    ]));
  }
});
const cs = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
  return n;
}, Js = /* @__PURE__ */ cs(Qu, [["__scopeId", "data-v-8bd665ed"]]), ec = {
  key: 0,
  class: "flex gap-1.5 flex-wrap"
}, tc = {
  key: 1,
  class: "flex gap-2 items-center"
}, nc = /* @__PURE__ */ w("span", { class: "p3-r" }, "指定", -1), rc = ["value"], ac = { class: "flex gap-4 flex-wrap" }, sc = /* @__PURE__ */ Pe({
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
    const n = e, r = ne(n.monthDate), s = ne(n.weekOrdinal), a = ne(n.weekdays), o = ne(n.yearMonths), i = (D, d, b = !1) => {
      if (b) {
        d.findIndex((k) => k === D) === -1 ? d.push(D) : d.splice(d.indexOf(D), 1), d.sort((k, _) => k - _);
        return;
      }
      d.value.findIndex((k) => k === D) === -1 ? d.value.push(D) : d.value.splice(d.value.indexOf(D), 1), d.value.sort((k, _) => k - _);
    };
    ss(() => {
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
      { name: "星期日", id: kt.Sunday },
      { name: "星期一", id: kt.Monday },
      { name: "星期二", id: kt.Tuesday },
      { name: "星期三", id: kt.Wednesday },
      { name: "星期四", id: kt.Thursday },
      { name: "星期五", id: kt.Friday },
      { name: "星期六", id: kt.Saturday },
      { name: "平日", id: kt.Weekday },
      { name: "週末", id: kt.Weekend }
    ]), u = ne([
      { name: "第一週", id: sn.First },
      { name: "第二週", id: sn.Second },
      { name: "第三週", id: sn.Third },
      { name: "第四週", id: sn.Fourth },
      { name: "第五週", id: sn.Fifth },
      { name: "最後一週", id: sn.Last }
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
    ]), p = ne([
      {
        name: "一月",
        id: it.January
      },
      {
        name: "二月",
        id: it.February
      },
      {
        name: "三月",
        id: it.March
      },
      {
        name: "四月",
        id: it.April
      },
      {
        name: "五月",
        id: it.May
      },
      {
        name: "六月",
        id: it.June
      },
      {
        name: "七月",
        id: it.July
      },
      {
        name: "八月",
        id: it.August
      },
      {
        name: "九月",
        id: it.September
      },
      {
        name: "十月",
        id: it.October
      },
      {
        name: "十一月",
        id: it.November
      },
      {
        name: "十二月",
        id: it.December
      }
    ]), v = C(() => {
      if (n.type === xe.Week)
        return [
          {
            key: a,
            label: "weekdaysOrigin",
            options: l.value
          }
        ];
      if (n.type === xe.Month) {
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
      if (n.type === xe.Annual) {
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
    }), f = C(() => n.type === xe.Month || n.type === xe.Annual ? !0 : (r.value = [], s.value = [], a.value = [], o.value = [], !1)), O = ne([
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
    ]), g = ne(O.value[0]);
    return ke(g, (D) => {
      if (D.id === 0) {
        r.value = [];
        return;
      }
      if (D.id === 1) {
        s.value = [], a.value = [];
        return;
      }
    }), ke(
      () => n.type,
      (D) => {
        (D === xe.Month || D === xe.Annual) && (D != xe.Annual && (o.value = []), c.value && c.value.length > 0 ? g.value = O.value[1] : g.value = O.value[0]);
      },
      { immediate: !0 }
    ), Yu(() => {
      r.value = [], s.value = [], a.value = [], o.value = [];
    }), (D, d) => (E(), T(te, null, [
      D.type === h(xe).Annual ? (E(), T("div", ec, [
        (E(!0), T(te, null, me(h(p), (b) => {
          var k;
          return E(), Ke(Js, {
            key: b.id,
            checked: (k = h(o)) == null ? void 0 : k.includes(b.id),
            "onUpdate:checked": (_) => i(b.id, h(o), !0),
            fieldId: b.name,
            label: b.name
          }, null, 8, ["checked", "onUpdate:checked", "fieldId", "label"]);
        }), 128))
      ])) : J("", !0),
      h(f) ? (E(), T("div", tc, [
        nc,
        Ie(w("select", {
          class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
          "onUpdate:modelValue": d[0] || (d[0] = (b) => _e(g) ? g.value = b : null)
        }, [
          (E(!0), T(te, null, me(h(O), (b, k) => (E(), T("option", {
            key: k,
            value: b
          }, le(b.name), 9, rc))), 128))
        ], 512), [
          [je, h(g)]
        ])
      ])) : J("", !0),
      w("div", ac, [
        (E(!0), T(te, null, me(h(v), (b) => (E(), T("div", {
          class: "flex gap-1 flex-wrap",
          key: b
        }, [
          (E(!0), T(te, null, me(b.options, (k) => {
            var _;
            return E(), Ke(Js, {
              key: k.id,
              checked: (_ = b.key.value) == null ? void 0 : _.includes(k.id),
              "onUpdate:checked": (I) => i(k.id, b.key),
              fieldId: k.name,
              label: k.name
            }, null, 8, ["checked", "onUpdate:checked", "fieldId", "label"]);
          }), 128))
        ]))), 128))
      ])
    ], 64));
  }
});
var lt = "top", Dt = "bottom", wt = "right", ut = "left", ds = "auto", Pr = [lt, Dt, wt, ut], Hn = "start", $r = "end", oc = "clippingParents", Gi = "viewport", dr = "popper", ic = "reference", Qs = /* @__PURE__ */ Pr.reduce(function(e, t) {
  return e.concat([t + "-" + Hn, t + "-" + $r]);
}, []), Ki = /* @__PURE__ */ [].concat(Pr, [ds]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Hn, t + "-" + $r]);
}, []), lc = "beforeRead", uc = "read", cc = "afterRead", dc = "beforeMain", fc = "main", vc = "afterMain", pc = "beforeWrite", mc = "write", hc = "afterWrite", gc = [lc, uc, cc, dc, fc, vc, pc, mc, hc];
function Vt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function ft(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function wn(e) {
  var t = ft(e).Element;
  return e instanceof t || e instanceof Element;
}
function bt(e) {
  var t = ft(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function fs(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = ft(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function _c(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, s = t.attributes[n] || {}, a = t.elements[n];
    !bt(a) || !Vt(a) || (Object.assign(a.style, r), Object.keys(s).forEach(function(o) {
      var i = s[o];
      i === !1 ? a.removeAttribute(o) : a.setAttribute(o, i === !0 ? "" : i);
    }));
  });
}
function bc(e) {
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
      !bt(s) || !Vt(s) || (Object.assign(s.style, i), Object.keys(a).forEach(function(l) {
        s.removeAttribute(l);
      }));
    });
  };
}
const yc = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: _c,
  effect: bc,
  requires: ["computeStyles"]
};
function Yt(e) {
  return e.split("-")[0];
}
var Dn = Math.max, Xr = Math.min, Wn = Math.round;
function xa() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function qi() {
  return !/^((?!chrome|android).)*safari/i.test(xa());
}
function Gn(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), s = 1, a = 1;
  t && bt(e) && (s = e.offsetWidth > 0 && Wn(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Wn(r.height) / e.offsetHeight || 1);
  var o = wn(e) ? ft(e) : window, i = o.visualViewport, l = !qi() && n, u = (r.left + (l && i ? i.offsetLeft : 0)) / s, c = (r.top + (l && i ? i.offsetTop : 0)) / a, p = r.width / s, v = r.height / a;
  return {
    width: p,
    height: v,
    top: c,
    right: u + p,
    bottom: c + v,
    left: u,
    x: u,
    y: c
  };
}
function vs(e) {
  var t = Gn(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function zi(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && fs(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Kt(e) {
  return ft(e).getComputedStyle(e);
}
function Dc(e) {
  return ["table", "td", "th"].indexOf(Vt(e)) >= 0;
}
function pn(e) {
  return ((wn(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function ma(e) {
  return Vt(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (fs(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    pn(e)
  );
}
function eo(e) {
  return !bt(e) || // https://github.com/popperjs/popper-core/issues/837
  Kt(e).position === "fixed" ? null : e.offsetParent;
}
function wc(e) {
  var t = /firefox/i.test(xa()), n = /Trident/i.test(xa());
  if (n && bt(e)) {
    var r = Kt(e);
    if (r.position === "fixed")
      return null;
  }
  var s = ma(e);
  for (fs(s) && (s = s.host); bt(s) && ["html", "body"].indexOf(Vt(s)) < 0; ) {
    var a = Kt(s);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function Ar(e) {
  for (var t = ft(e), n = eo(e); n && Dc(n) && Kt(n).position === "static"; )
    n = eo(n);
  return n && (Vt(n) === "html" || Vt(n) === "body" && Kt(n).position === "static") ? t : n || wc(e) || t;
}
function ps(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function yr(e, t, n) {
  return Dn(e, Xr(t, n));
}
function Ec(e, t, n) {
  var r = yr(e, t, n);
  return r > n ? n : r;
}
function Xi() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Zi(e) {
  return Object.assign({}, Xi(), e);
}
function Ji(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var $c = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, Zi(typeof t != "number" ? t : Ji(t, Pr));
};
function Oc(e) {
  var t, n = e.state, r = e.name, s = e.options, a = n.elements.arrow, o = n.modifiersData.popperOffsets, i = Yt(n.placement), l = ps(i), u = [ut, wt].indexOf(i) >= 0, c = u ? "height" : "width";
  if (!(!a || !o)) {
    var p = $c(s.padding, n), v = vs(a), f = l === "y" ? lt : ut, O = l === "y" ? Dt : wt, g = n.rects.reference[c] + n.rects.reference[l] - o[l] - n.rects.popper[c], D = o[l] - n.rects.reference[l], d = Ar(a), b = d ? l === "y" ? d.clientHeight || 0 : d.clientWidth || 0 : 0, k = g / 2 - D / 2, _ = p[f], I = b - v[c] - p[O], N = b / 2 - v[c] / 2 + k, x = yr(_, N, I), P = l;
    n.modifiersData[r] = (t = {}, t[P] = x, t.centerOffset = x - N, t);
  }
}
function kc(e) {
  var t = e.state, n = e.options, r = n.element, s = r === void 0 ? "[data-popper-arrow]" : r;
  s != null && (typeof s == "string" && (s = t.elements.popper.querySelector(s), !s) || zi(t.elements.popper, s) && (t.elements.arrow = s));
}
const Nc = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Oc,
  effect: kc,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Kn(e) {
  return e.split("-")[1];
}
var Tc = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Mc(e, t) {
  var n = e.x, r = e.y, s = t.devicePixelRatio || 1;
  return {
    x: Wn(n * s) / s || 0,
    y: Wn(r * s) / s || 0
  };
}
function to(e) {
  var t, n = e.popper, r = e.popperRect, s = e.placement, a = e.variation, o = e.offsets, i = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, p = e.isFixed, v = o.x, f = v === void 0 ? 0 : v, O = o.y, g = O === void 0 ? 0 : O, D = typeof c == "function" ? c({
    x: f,
    y: g
  }) : {
    x: f,
    y: g
  };
  f = D.x, g = D.y;
  var d = o.hasOwnProperty("x"), b = o.hasOwnProperty("y"), k = ut, _ = lt, I = window;
  if (u) {
    var N = Ar(n), x = "clientHeight", P = "clientWidth";
    if (N === ft(n) && (N = pn(n), Kt(N).position !== "static" && i === "absolute" && (x = "scrollHeight", P = "scrollWidth")), N = N, s === lt || (s === ut || s === wt) && a === $r) {
      _ = Dt;
      var A = p && N === I && I.visualViewport ? I.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        N[x]
      );
      g -= A - r.height, g *= l ? 1 : -1;
    }
    if (s === ut || (s === lt || s === Dt) && a === $r) {
      k = wt;
      var S = p && N === I && I.visualViewport ? I.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        N[P]
      );
      f -= S - r.width, f *= l ? 1 : -1;
    }
  }
  var j = Object.assign({
    position: i
  }, u && Tc), Y = c === !0 ? Mc({
    x: f,
    y: g
  }, ft(n)) : {
    x: f,
    y: g
  };
  if (f = Y.x, g = Y.y, l) {
    var X;
    return Object.assign({}, j, (X = {}, X[_] = b ? "0" : "", X[k] = d ? "0" : "", X.transform = (I.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + g + "px)" : "translate3d(" + f + "px, " + g + "px, 0)", X));
  }
  return Object.assign({}, j, (t = {}, t[_] = b ? g + "px" : "", t[k] = d ? f + "px" : "", t.transform = "", t));
}
function Ic(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, s = r === void 0 ? !0 : r, a = n.adaptive, o = a === void 0 ? !0 : a, i = n.roundOffsets, l = i === void 0 ? !0 : i, u = {
    placement: Yt(t.placement),
    variation: Kn(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: s,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, to(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: o,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, to(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Cc = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Ic,
  data: {}
};
var Yr = {
  passive: !0
};
function Pc(e) {
  var t = e.state, n = e.instance, r = e.options, s = r.scroll, a = s === void 0 ? !0 : s, o = r.resize, i = o === void 0 ? !0 : o, l = ft(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(c) {
    c.addEventListener("scroll", n.update, Yr);
  }), i && l.addEventListener("resize", n.update, Yr), function() {
    a && u.forEach(function(c) {
      c.removeEventListener("scroll", n.update, Yr);
    }), i && l.removeEventListener("resize", n.update, Yr);
  };
}
const Ac = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Pc,
  data: {}
};
var Lc = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Hr(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Lc[t];
  });
}
var Sc = {
  start: "end",
  end: "start"
};
function no(e) {
  return e.replace(/start|end/g, function(t) {
    return Sc[t];
  });
}
function ms(e) {
  var t = ft(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function hs(e) {
  return Gn(pn(e)).left + ms(e).scrollLeft;
}
function xc(e, t) {
  var n = ft(e), r = pn(e), s = n.visualViewport, a = r.clientWidth, o = r.clientHeight, i = 0, l = 0;
  if (s) {
    a = s.width, o = s.height;
    var u = qi();
    (u || !u && t === "fixed") && (i = s.offsetLeft, l = s.offsetTop);
  }
  return {
    width: a,
    height: o,
    x: i + hs(e),
    y: l
  };
}
function Rc(e) {
  var t, n = pn(e), r = ms(e), s = (t = e.ownerDocument) == null ? void 0 : t.body, a = Dn(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), o = Dn(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), i = -r.scrollLeft + hs(e), l = -r.scrollTop;
  return Kt(s || n).direction === "rtl" && (i += Dn(n.clientWidth, s ? s.clientWidth : 0) - a), {
    width: a,
    height: o,
    x: i,
    y: l
  };
}
function gs(e) {
  var t = Kt(e), n = t.overflow, r = t.overflowX, s = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + s + r);
}
function Qi(e) {
  return ["html", "body", "#document"].indexOf(Vt(e)) >= 0 ? e.ownerDocument.body : bt(e) && gs(e) ? e : Qi(ma(e));
}
function Dr(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Qi(e), s = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = ft(r), o = s ? [a].concat(a.visualViewport || [], gs(r) ? r : []) : r, i = t.concat(o);
  return s ? i : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    i.concat(Dr(ma(o)))
  );
}
function Ra(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Yc(e, t) {
  var n = Gn(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function ro(e, t, n) {
  return t === Gi ? Ra(xc(e, n)) : wn(t) ? Yc(t, n) : Ra(Rc(pn(e)));
}
function Fc(e) {
  var t = Dr(ma(e)), n = ["absolute", "fixed"].indexOf(Kt(e).position) >= 0, r = n && bt(e) ? Ar(e) : e;
  return wn(r) ? t.filter(function(s) {
    return wn(s) && zi(s, r) && Vt(s) !== "body";
  }) : [];
}
function Vc(e, t, n, r) {
  var s = t === "clippingParents" ? Fc(e) : [].concat(t), a = [].concat(s, [n]), o = a[0], i = a.reduce(function(l, u) {
    var c = ro(e, u, r);
    return l.top = Dn(c.top, l.top), l.right = Xr(c.right, l.right), l.bottom = Xr(c.bottom, l.bottom), l.left = Dn(c.left, l.left), l;
  }, ro(e, o, r));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function el(e) {
  var t = e.reference, n = e.element, r = e.placement, s = r ? Yt(r) : null, a = r ? Kn(r) : null, o = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2, l;
  switch (s) {
    case lt:
      l = {
        x: o,
        y: t.y - n.height
      };
      break;
    case Dt:
      l = {
        x: o,
        y: t.y + t.height
      };
      break;
    case wt:
      l = {
        x: t.x + t.width,
        y: i
      };
      break;
    case ut:
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
  var u = s ? ps(s) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (a) {
      case Hn:
        l[u] = l[u] - (t[c] / 2 - n[c] / 2);
        break;
      case $r:
        l[u] = l[u] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return l;
}
function Or(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = r === void 0 ? e.placement : r, a = n.strategy, o = a === void 0 ? e.strategy : a, i = n.boundary, l = i === void 0 ? oc : i, u = n.rootBoundary, c = u === void 0 ? Gi : u, p = n.elementContext, v = p === void 0 ? dr : p, f = n.altBoundary, O = f === void 0 ? !1 : f, g = n.padding, D = g === void 0 ? 0 : g, d = Zi(typeof D != "number" ? D : Ji(D, Pr)), b = v === dr ? ic : dr, k = e.rects.popper, _ = e.elements[O ? b : v], I = Vc(wn(_) ? _ : _.contextElement || pn(e.elements.popper), l, c, o), N = Gn(e.elements.reference), x = el({
    reference: N,
    element: k,
    strategy: "absolute",
    placement: s
  }), P = Ra(Object.assign({}, k, x)), A = v === dr ? P : N, S = {
    top: I.top - A.top + d.top,
    bottom: A.bottom - I.bottom + d.bottom,
    left: I.left - A.left + d.left,
    right: A.right - I.right + d.right
  }, j = e.modifiersData.offset;
  if (v === dr && j) {
    var Y = j[s];
    Object.keys(S).forEach(function(X) {
      var K = [wt, Dt].indexOf(X) >= 0 ? 1 : -1, U = [lt, Dt].indexOf(X) >= 0 ? "y" : "x";
      S[X] += Y[U] * K;
    });
  }
  return S;
}
function Uc(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = n.boundary, a = n.rootBoundary, o = n.padding, i = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? Ki : l, c = Kn(r), p = c ? i ? Qs : Qs.filter(function(O) {
    return Kn(O) === c;
  }) : Pr, v = p.filter(function(O) {
    return u.indexOf(O) >= 0;
  });
  v.length === 0 && (v = p);
  var f = v.reduce(function(O, g) {
    return O[g] = Or(e, {
      placement: g,
      boundary: s,
      rootBoundary: a,
      padding: o
    })[Yt(g)], O;
  }, {});
  return Object.keys(f).sort(function(O, g) {
    return f[O] - f[g];
  });
}
function jc(e) {
  if (Yt(e) === ds)
    return [];
  var t = Hr(e);
  return [no(e), t, no(t)];
}
function Bc(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var s = n.mainAxis, a = s === void 0 ? !0 : s, o = n.altAxis, i = o === void 0 ? !0 : o, l = n.fallbackPlacements, u = n.padding, c = n.boundary, p = n.rootBoundary, v = n.altBoundary, f = n.flipVariations, O = f === void 0 ? !0 : f, g = n.allowedAutoPlacements, D = t.options.placement, d = Yt(D), b = d === D, k = l || (b || !O ? [Hr(D)] : jc(D)), _ = [D].concat(k).reduce(function(ee, De) {
      return ee.concat(Yt(De) === ds ? Uc(t, {
        placement: De,
        boundary: c,
        rootBoundary: p,
        padding: u,
        flipVariations: O,
        allowedAutoPlacements: g
      }) : De);
    }, []), I = t.rects.reference, N = t.rects.popper, x = /* @__PURE__ */ new Map(), P = !0, A = _[0], S = 0; S < _.length; S++) {
      var j = _[S], Y = Yt(j), X = Kn(j) === Hn, K = [lt, Dt].indexOf(Y) >= 0, U = K ? "width" : "height", F = Or(t, {
        placement: j,
        boundary: c,
        rootBoundary: p,
        altBoundary: v,
        padding: u
      }), Q = K ? X ? wt : ut : X ? Dt : lt;
      I[U] > N[U] && (Q = Hr(Q));
      var W = Hr(Q), V = [];
      if (a && V.push(F[Y] <= 0), i && V.push(F[Q] <= 0, F[W] <= 0), V.every(function(ee) {
        return ee;
      })) {
        A = j, P = !1;
        break;
      }
      x.set(j, V);
    }
    if (P)
      for (var $ = O ? 3 : 1, q = function(De) {
        var he = _.find(function(Me) {
          var $e = x.get(Me);
          if ($e)
            return $e.slice(0, De).every(function(be) {
              return be;
            });
        });
        if (he)
          return A = he, "break";
      }, pe = $; pe > 0; pe--) {
        var Ee = q(pe);
        if (Ee === "break")
          break;
      }
    t.placement !== A && (t.modifiersData[r]._skip = !0, t.placement = A, t.reset = !0);
  }
}
const Hc = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Bc,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function ao(e, t, n) {
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
function so(e) {
  return [lt, wt, Dt, ut].some(function(t) {
    return e[t] >= 0;
  });
}
function Wc(e) {
  var t = e.state, n = e.name, r = t.rects.reference, s = t.rects.popper, a = t.modifiersData.preventOverflow, o = Or(t, {
    elementContext: "reference"
  }), i = Or(t, {
    altBoundary: !0
  }), l = ao(o, r), u = ao(i, s, a), c = so(l), p = so(u);
  t.modifiersData[n] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: u,
    isReferenceHidden: c,
    hasPopperEscaped: p
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": c,
    "data-popper-escaped": p
  });
}
const Gc = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Wc
};
function Kc(e, t, n) {
  var r = Yt(e), s = [ut, lt].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, o = a[0], i = a[1];
  return o = o || 0, i = (i || 0) * s, [ut, wt].indexOf(r) >= 0 ? {
    x: i,
    y: o
  } : {
    x: o,
    y: i
  };
}
function qc(e) {
  var t = e.state, n = e.options, r = e.name, s = n.offset, a = s === void 0 ? [0, 0] : s, o = Ki.reduce(function(c, p) {
    return c[p] = Kc(p, t.rects, a), c;
  }, {}), i = o[t.placement], l = i.x, u = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = o;
}
const zc = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: qc
};
function Xc(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = el({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Zc = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Xc,
  data: {}
};
function Jc(e) {
  return e === "x" ? "y" : "x";
}
function Qc(e) {
  var t = e.state, n = e.options, r = e.name, s = n.mainAxis, a = s === void 0 ? !0 : s, o = n.altAxis, i = o === void 0 ? !1 : o, l = n.boundary, u = n.rootBoundary, c = n.altBoundary, p = n.padding, v = n.tether, f = v === void 0 ? !0 : v, O = n.tetherOffset, g = O === void 0 ? 0 : O, D = Or(t, {
    boundary: l,
    rootBoundary: u,
    padding: p,
    altBoundary: c
  }), d = Yt(t.placement), b = Kn(t.placement), k = !b, _ = ps(d), I = Jc(_), N = t.modifiersData.popperOffsets, x = t.rects.reference, P = t.rects.popper, A = typeof g == "function" ? g(Object.assign({}, t.rects, {
    placement: t.placement
  })) : g, S = typeof A == "number" ? {
    mainAxis: A,
    altAxis: A
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, A), j = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, Y = {
    x: 0,
    y: 0
  };
  if (N) {
    if (a) {
      var X, K = _ === "y" ? lt : ut, U = _ === "y" ? Dt : wt, F = _ === "y" ? "height" : "width", Q = N[_], W = Q + D[K], V = Q - D[U], $ = f ? -P[F] / 2 : 0, q = b === Hn ? x[F] : P[F], pe = b === Hn ? -P[F] : -x[F], Ee = t.elements.arrow, ee = f && Ee ? vs(Ee) : {
        width: 0,
        height: 0
      }, De = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Xi(), he = De[K], Me = De[U], $e = yr(0, x[F], ee[F]), be = k ? x[F] / 2 - $ - $e - he - S.mainAxis : q - $e - he - S.mainAxis, Ye = k ? -x[F] / 2 + $ + $e + Me + S.mainAxis : pe + $e + Me + S.mainAxis, Re = t.elements.arrow && Ar(t.elements.arrow), ze = Re ? _ === "y" ? Re.clientTop || 0 : Re.clientLeft || 0 : 0, y = (X = j == null ? void 0 : j[_]) != null ? X : 0, m = Q + be - y - ze, L = Q + Ye - y, Z = yr(f ? Xr(W, m) : W, Q, f ? Dn(V, L) : V);
      N[_] = Z, Y[_] = Z - Q;
    }
    if (i) {
      var ie, ge = _ === "x" ? lt : ut, Ze = _ === "x" ? Dt : wt, Ue = N[I], vt = I === "y" ? "height" : "width", Pt = Ue + D[ge], Ne = Ue - D[Ze], R = [lt, ut].indexOf(d) !== -1, H = (ie = j == null ? void 0 : j[I]) != null ? ie : 0, Fe = R ? Pt : Ue - x[vt] - P[vt] - H + S.altAxis, Ve = R ? Ue + x[vt] + P[vt] - H - S.altAxis : Ne, At = f && R ? Ec(Fe, Ue, Ve) : yr(f ? Fe : Pt, Ue, f ? Ve : Ne);
      N[I] = At, Y[I] = At - Ue;
    }
    t.modifiersData[r] = Y;
  }
}
const ed = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Qc,
  requiresIfExists: ["offset"]
};
function td(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function nd(e) {
  return e === ft(e) || !bt(e) ? ms(e) : td(e);
}
function rd(e) {
  var t = e.getBoundingClientRect(), n = Wn(t.width) / e.offsetWidth || 1, r = Wn(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function ad(e, t, n) {
  n === void 0 && (n = !1);
  var r = bt(t), s = bt(t) && rd(t), a = pn(t), o = Gn(e, s, n), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((Vt(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  gs(a)) && (i = nd(t)), bt(t) ? (l = Gn(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = hs(a))), {
    x: o.left + i.scrollLeft - l.x,
    y: o.top + i.scrollTop - l.y,
    width: o.width,
    height: o.height
  };
}
function sd(e) {
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
function od(e) {
  var t = sd(e);
  return gc.reduce(function(n, r) {
    return n.concat(t.filter(function(s) {
      return s.phase === r;
    }));
  }, []);
}
function id(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function ld(e) {
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
var oo = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function io() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function ud(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, s = t.defaultOptions, a = s === void 0 ? oo : s;
  return function(i, l, u) {
    u === void 0 && (u = a);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, oo, a),
      modifiersData: {},
      elements: {
        reference: i,
        popper: l
      },
      attributes: {},
      styles: {}
    }, p = [], v = !1, f = {
      state: c,
      setOptions: function(d) {
        var b = typeof d == "function" ? d(c.options) : d;
        g(), c.options = Object.assign({}, a, c.options, b), c.scrollParents = {
          reference: wn(i) ? Dr(i) : i.contextElement ? Dr(i.contextElement) : [],
          popper: Dr(l)
        };
        var k = od(ld([].concat(r, c.options.modifiers)));
        return c.orderedModifiers = k.filter(function(_) {
          return _.enabled;
        }), O(), f.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!v) {
          var d = c.elements, b = d.reference, k = d.popper;
          if (io(b, k)) {
            c.rects = {
              reference: ad(b, Ar(k), c.options.strategy === "fixed"),
              popper: vs(k)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(S) {
              return c.modifiersData[S.name] = Object.assign({}, S.data);
            });
            for (var _ = 0; _ < c.orderedModifiers.length; _++) {
              if (c.reset === !0) {
                c.reset = !1, _ = -1;
                continue;
              }
              var I = c.orderedModifiers[_], N = I.fn, x = I.options, P = x === void 0 ? {} : x, A = I.name;
              typeof N == "function" && (c = N({
                state: c,
                options: P,
                name: A,
                instance: f
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: id(function() {
        return new Promise(function(D) {
          f.forceUpdate(), D(c);
        });
      }),
      destroy: function() {
        g(), v = !0;
      }
    };
    if (!io(i, l))
      return f;
    f.setOptions(u).then(function(D) {
      !v && u.onFirstUpdate && u.onFirstUpdate(D);
    });
    function O() {
      c.orderedModifiers.forEach(function(D) {
        var d = D.name, b = D.options, k = b === void 0 ? {} : b, _ = D.effect;
        if (typeof _ == "function") {
          var I = _({
            state: c,
            name: d,
            instance: f,
            options: k
          }), N = function() {
          };
          p.push(I || N);
        }
      });
    }
    function g() {
      p.forEach(function(D) {
        return D();
      }), p = [];
    }
    return f;
  };
}
var cd = [Ac, Zc, Cc, yc, zc, Hc, ed, Nc, Gc], dd = /* @__PURE__ */ ud({
  defaultModifiers: cd
}), fd = Object.defineProperty, vd = (e, t, n) => t in e ? fd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, oe = (e, t, n) => (vd(e, typeof t != "symbol" ? t + "" : t, n), n);
const Xt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
  return n;
}, pd = {}, md = {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  viewBox: "0 0 24 24"
}, hd = /* @__PURE__ */ w("polyline", { points: "9 18 15 12 9 6" }, null, -1), gd = [
  hd
];
function _d(e, t) {
  return E(), T("svg", md, gd);
}
const bd = /* @__PURE__ */ Xt(pd, [["render", _d]]), yd = {}, Dd = {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  viewBox: "0 0 24 24"
}, wd = /* @__PURE__ */ w("polyline", { points: "15 18 9 12 15 6" }, null, -1), Ed = [
  wd
];
function $d(e, t) {
  return E(), T("svg", Dd, Ed);
}
const Od = /* @__PURE__ */ Xt(yd, [["render", $d]]), kd = {}, Nd = {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  viewBox: "0 0 24 24"
}, Td = /* @__PURE__ */ w("polyline", { points: "6 9 12 15 18 9" }, null, -1), Md = [
  Td
];
function Id(e, t) {
  return E(), T("svg", Nd, Md);
}
const Cd = /* @__PURE__ */ Xt(kd, [["render", Id]]), Pd = {}, Ad = {
  fill: "none",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  viewBox: "0 0 24 24"
}, Ld = /* @__PURE__ */ w("path", { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" }, null, -1), Sd = [
  Ld
];
function xd(e, t) {
  return E(), T("svg", Ad, Sd);
}
const Rd = /* @__PURE__ */ Xt(Pd, [["render", xd]]), Yd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IconChevronDown: Cd,
  IconChevronLeft: Od,
  IconChevronRight: bd,
  IconClock: Rd
}, Symbol.toStringTag, { value: "Module" })), qn = /* @__PURE__ */ Pe({
  __name: "BaseIcon",
  props: {
    name: { type: String, required: !0 },
    width: { type: String },
    height: { type: String },
    size: { type: String, default: "26" },
    viewBox: { type: String }
  },
  setup(e) {
    const t = e, n = C(() => t.width || t.size), r = C(() => t.height || t.size), s = C(() => Yd[`Icon${t.name}`]);
    return (a, o) => (E(), Ke(Ui(h(s)), {
      width: h(n),
      height: h(r),
      class: "vc-base-icon"
    }, null, 8, ["width", "height"]));
  }
});
function tl() {
  return typeof window < "u";
}
function Fd(e) {
  return tl() && e in window;
}
function Vd(e) {
  const t = ne(!1), n = C(() => t.value ? "dark" : "light");
  let r, s;
  function a(f) {
    t.value = f.matches;
  }
  function o() {
    Fd("matchMedia") && (r = window.matchMedia("(prefers-color-scheme: dark)"), r.addEventListener("change", a), t.value = r.matches);
  }
  function i() {
    const { selector: f = ":root", darkClass: O = "dark" } = e.value, g = document.querySelector(f);
    t.value = g.classList.contains(O);
  }
  function l(f) {
    const { selector: O = ":root", darkClass: g = "dark" } = f;
    if (tl() && O && g) {
      const D = document.querySelector(O);
      D && (s = new MutationObserver(i), s.observe(D, {
        attributes: !0,
        attributeFilter: ["class"]
      }), t.value = D.classList.contains(g));
    }
  }
  function u() {
    p();
    const f = typeof e.value;
    f === "string" && e.value.toLowerCase() === "system" ? o() : f === "object" ? l(e.value) : t.value = !!e.value;
  }
  const c = ke(() => e.value, () => u(), {
    immediate: !0
  });
  function p() {
    r && (r.removeEventListener("change", a), r = void 0), s && (s.disconnect(), s = void 0);
  }
  function v() {
    p(), c();
  }
  return Ir(() => v()), {
    isDark: t,
    displayMode: n,
    cleanup: v
  };
}
var Fr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ud(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var jd = typeof Fr == "object" && Fr && Fr.Object === Object && Fr, nl = jd, Bd = nl, Hd = typeof self == "object" && self && self.Object === Object && self, Wd = Bd || Hd || Function("return this")(), Ut = Wd, Gd = Ut, Kd = Gd.Symbol, ha = Kd, lo = ha, rl = Object.prototype, qd = rl.hasOwnProperty, zd = rl.toString, fr = lo ? lo.toStringTag : void 0;
function Xd(e) {
  var t = qd.call(e, fr), n = e[fr];
  try {
    e[fr] = void 0;
    var r = !0;
  } catch {
  }
  var s = zd.call(e);
  return r && (t ? e[fr] = n : delete e[fr]), s;
}
var Zd = Xd, Jd = Object.prototype, Qd = Jd.toString;
function ef(e) {
  return Qd.call(e);
}
var tf = ef, uo = ha, nf = Zd, rf = tf, af = "[object Null]", sf = "[object Undefined]", co = uo ? uo.toStringTag : void 0;
function of(e) {
  return e == null ? e === void 0 ? sf : af : co && co in Object(e) ? nf(e) : rf(e);
}
var jt = of;
function lf(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Zt = lf, uf = jt, cf = Zt, df = "[object AsyncFunction]", ff = "[object Function]", vf = "[object GeneratorFunction]", pf = "[object Proxy]";
function mf(e) {
  if (!cf(e))
    return !1;
  var t = uf(e);
  return t == ff || t == vf || t == df || t == pf;
}
var kn = mf, hf = Array.isArray, It = hf;
function gf(e) {
  return e != null && typeof e == "object";
}
var Ct = gf, _f = jt, bf = It, yf = Ct, Df = "[object String]";
function wf(e) {
  return typeof e == "string" || !bf(e) && yf(e) && _f(e) == Df;
}
var xt = wf, Ef = jt, $f = Ct, Of = "[object Boolean]";
function kf(e) {
  return e === !0 || e === !1 || $f(e) && Ef(e) == Of;
}
var Nf = kf, Tf = jt, Mf = Ct, If = "[object Number]";
function Cf(e) {
  return typeof e == "number" || Mf(e) && Tf(e) == If;
}
var Mt = Cf, Pf = jt, Af = Ct, Lf = "[object Date]";
function Sf(e) {
  return Af(e) && Pf(e) == Lf;
}
var xf = Sf;
function Rf(e) {
  return function(t) {
    return e(t);
  };
}
var al = Rf, kr = {}, Yf = {
  get exports() {
    return kr;
  },
  set exports(e) {
    kr = e;
  }
};
(function(e, t) {
  var n = nl, r = t && !t.nodeType && t, s = r && !0 && e && !e.nodeType && e, a = s && s.exports === r, o = a && n.process, i = function() {
    try {
      var l = s && s.require && s.require("util").types;
      return l || o && o.binding && o.binding("util");
    } catch {
    }
  }();
  e.exports = i;
})(Yf, kr);
var Ff = xf, Vf = al, fo = kr, vo = fo && fo.isDate, Uf = vo ? Vf(vo) : Ff, jf = Uf, Bf = jt, Hf = Ct, Wf = "[object Symbol]";
function Gf(e) {
  return typeof e == "symbol" || Hf(e) && Bf(e) == Wf;
}
var _s = Gf, Kf = It, qf = _s, zf = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Xf = /^\w*$/;
function Zf(e, t) {
  if (Kf(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || qf(e) ? !0 : Xf.test(e) || !zf.test(e) || t != null && e in Object(t);
}
var bs = Zf, Jf = Ut, Qf = Jf["__core-js_shared__"], ev = Qf, Ia = ev, po = function() {
  var e = /[^.]+$/.exec(Ia && Ia.keys && Ia.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function tv(e) {
  return !!po && po in e;
}
var nv = tv, rv = Function.prototype, av = rv.toString;
function sv(e) {
  if (e != null) {
    try {
      return av.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var sl = sv, ov = kn, iv = nv, lv = Zt, uv = sl, cv = /[\\^$.*+?()[\]{}|]/g, dv = /^\[object .+?Constructor\]$/, fv = Function.prototype, vv = Object.prototype, pv = fv.toString, mv = vv.hasOwnProperty, hv = RegExp(
  "^" + pv.call(mv).replace(cv, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function gv(e) {
  if (!lv(e) || iv(e))
    return !1;
  var t = ov(e) ? hv : dv;
  return t.test(uv(e));
}
var _v = gv;
function bv(e, t) {
  return e == null ? void 0 : e[t];
}
var yv = bv, Dv = _v, wv = yv;
function Ev(e, t) {
  var n = wv(e, t);
  return Dv(n) ? n : void 0;
}
var Nn = Ev, $v = Nn, Ov = $v(Object, "create"), ga = Ov, mo = ga;
function kv() {
  this.__data__ = mo ? mo(null) : {}, this.size = 0;
}
var Nv = kv;
function Tv(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Mv = Tv, Iv = ga, Cv = "__lodash_hash_undefined__", Pv = Object.prototype, Av = Pv.hasOwnProperty;
function Lv(e) {
  var t = this.__data__;
  if (Iv) {
    var n = t[e];
    return n === Cv ? void 0 : n;
  }
  return Av.call(t, e) ? t[e] : void 0;
}
var Sv = Lv, xv = ga, Rv = Object.prototype, Yv = Rv.hasOwnProperty;
function Fv(e) {
  var t = this.__data__;
  return xv ? t[e] !== void 0 : Yv.call(t, e);
}
var Vv = Fv, Uv = ga, jv = "__lodash_hash_undefined__";
function Bv(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Uv && t === void 0 ? jv : t, this;
}
var Hv = Bv, Wv = Nv, Gv = Mv, Kv = Sv, qv = Vv, zv = Hv;
function er(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
er.prototype.clear = Wv;
er.prototype.delete = Gv;
er.prototype.get = Kv;
er.prototype.has = qv;
er.prototype.set = zv;
var Xv = er;
function Zv() {
  this.__data__ = [], this.size = 0;
}
var Jv = Zv;
function Qv(e, t) {
  return e === t || e !== e && t !== t;
}
var tr = Qv, ep = tr;
function tp(e, t) {
  for (var n = e.length; n--; )
    if (ep(e[n][0], t))
      return n;
  return -1;
}
var _a = tp, np = _a, rp = Array.prototype, ap = rp.splice;
function sp(e) {
  var t = this.__data__, n = np(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : ap.call(t, n, 1), --this.size, !0;
}
var op = sp, ip = _a;
function lp(e) {
  var t = this.__data__, n = ip(t, e);
  return n < 0 ? void 0 : t[n][1];
}
var up = lp, cp = _a;
function dp(e) {
  return cp(this.__data__, e) > -1;
}
var fp = dp, vp = _a;
function pp(e, t) {
  var n = this.__data__, r = vp(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
var mp = pp, hp = Jv, gp = op, _p = up, bp = fp, yp = mp;
function nr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
nr.prototype.clear = hp;
nr.prototype.delete = gp;
nr.prototype.get = _p;
nr.prototype.has = bp;
nr.prototype.set = yp;
var ba = nr, Dp = Nn, wp = Ut, Ep = Dp(wp, "Map"), ys = Ep, ho = Xv, $p = ba, Op = ys;
function kp() {
  this.size = 0, this.__data__ = {
    hash: new ho(),
    map: new (Op || $p)(),
    string: new ho()
  };
}
var Np = kp;
function Tp(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var Mp = Tp, Ip = Mp;
function Cp(e, t) {
  var n = e.__data__;
  return Ip(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
var ya = Cp, Pp = ya;
function Ap(e) {
  var t = Pp(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var Lp = Ap, Sp = ya;
function xp(e) {
  return Sp(this, e).get(e);
}
var Rp = xp, Yp = ya;
function Fp(e) {
  return Yp(this, e).has(e);
}
var Vp = Fp, Up = ya;
function jp(e, t) {
  var n = Up(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
var Bp = jp, Hp = Np, Wp = Lp, Gp = Rp, Kp = Vp, qp = Bp;
function rr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
rr.prototype.clear = Hp;
rr.prototype.delete = Wp;
rr.prototype.get = Gp;
rr.prototype.has = Kp;
rr.prototype.set = qp;
var Ds = rr, ol = Ds, zp = "Expected a function";
function ws(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(zp);
  var n = function() {
    var r = arguments, s = t ? t.apply(this, r) : r[0], a = n.cache;
    if (a.has(s))
      return a.get(s);
    var o = e.apply(this, r);
    return n.cache = a.set(s, o) || a, o;
  };
  return n.cache = new (ws.Cache || ol)(), n;
}
ws.Cache = ol;
var Xp = ws, Zp = Xp, Jp = 500;
function Qp(e) {
  var t = Zp(e, function(r) {
    return n.size === Jp && n.clear(), r;
  }), n = t.cache;
  return t;
}
var em = Qp, tm = em, nm = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, rm = /\\(\\)?/g, am = tm(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(nm, function(n, r, s, a) {
    t.push(s ? a.replace(rm, "$1") : r || n);
  }), t;
}), sm = am;
function om(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, s = Array(r); ++n < r; )
    s[n] = t(e[n], n, e);
  return s;
}
var im = om, go = ha, lm = im, um = It, cm = _s, dm = 1 / 0, _o = go ? go.prototype : void 0, bo = _o ? _o.toString : void 0;
function il(e) {
  if (typeof e == "string")
    return e;
  if (um(e))
    return lm(e, il) + "";
  if (cm(e))
    return bo ? bo.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -dm ? "-0" : t;
}
var fm = il, vm = fm;
function pm(e) {
  return e == null ? "" : vm(e);
}
var mm = pm, hm = It, gm = bs, _m = sm, bm = mm;
function ym(e, t) {
  return hm(e) ? e : gm(e, t) ? [e] : _m(bm(e));
}
var ll = ym, Dm = _s, wm = 1 / 0;
function Em(e) {
  if (typeof e == "string" || Dm(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -wm ? "-0" : t;
}
var Da = Em, $m = ll, Om = Da;
function km(e, t) {
  t = $m(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[Om(t[n++])];
  return n && n == r ? e : void 0;
}
var ul = km, Nm = ul;
function Tm(e, t, n) {
  var r = e == null ? void 0 : Nm(e, t);
  return r === void 0 ? n : r;
}
var bn = Tm, Mm = Nn, Im = function() {
  try {
    var e = Mm(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), cl = Im, yo = cl;
function Cm(e, t, n) {
  t == "__proto__" && yo ? yo(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
var wa = Cm, Pm = wa, Am = tr, Lm = Object.prototype, Sm = Lm.hasOwnProperty;
function xm(e, t, n) {
  var r = e[t];
  (!(Sm.call(e, t) && Am(r, n)) || n === void 0 && !(t in e)) && Pm(e, t, n);
}
var Rm = xm, Ym = 9007199254740991, Fm = /^(?:0|[1-9]\d*)$/;
function Vm(e, t) {
  var n = typeof e;
  return t = t ?? Ym, !!t && (n == "number" || n != "symbol" && Fm.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Es = Vm;
function Um(e) {
  return function(t, n, r) {
    for (var s = -1, a = Object(t), o = r(t), i = o.length; i--; ) {
      var l = o[e ? i : ++s];
      if (n(a[l], l, a) === !1)
        break;
    }
    return t;
  };
}
var jm = Um, Bm = jm, Hm = Bm(), dl = Hm;
function Wm(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var Gm = Wm, Km = jt, qm = Ct, zm = "[object Arguments]";
function Xm(e) {
  return qm(e) && Km(e) == zm;
}
var Zm = Xm, Do = Zm, Jm = Ct, fl = Object.prototype, Qm = fl.hasOwnProperty, eh = fl.propertyIsEnumerable, th = Do(function() {
  return arguments;
}()) ? Do : function(e) {
  return Jm(e) && Qm.call(e, "callee") && !eh.call(e, "callee");
}, $s = th, zn = {}, nh = {
  get exports() {
    return zn;
  },
  set exports(e) {
    zn = e;
  }
};
function rh() {
  return !1;
}
var ah = rh;
(function(e, t) {
  var n = Ut, r = ah, s = t && !t.nodeType && t, a = s && !0 && e && !e.nodeType && e, o = a && a.exports === s, i = o ? n.Buffer : void 0, l = i ? i.isBuffer : void 0, u = l || r;
  e.exports = u;
})(nh, zn);
var sh = 9007199254740991;
function oh(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= sh;
}
var Os = oh, ih = jt, lh = Os, uh = Ct, ch = "[object Arguments]", dh = "[object Array]", fh = "[object Boolean]", vh = "[object Date]", ph = "[object Error]", mh = "[object Function]", hh = "[object Map]", gh = "[object Number]", _h = "[object Object]", bh = "[object RegExp]", yh = "[object Set]", Dh = "[object String]", wh = "[object WeakMap]", Eh = "[object ArrayBuffer]", $h = "[object DataView]", Oh = "[object Float32Array]", kh = "[object Float64Array]", Nh = "[object Int8Array]", Th = "[object Int16Array]", Mh = "[object Int32Array]", Ih = "[object Uint8Array]", Ch = "[object Uint8ClampedArray]", Ph = "[object Uint16Array]", Ah = "[object Uint32Array]", Le = {};
Le[Oh] = Le[kh] = Le[Nh] = Le[Th] = Le[Mh] = Le[Ih] = Le[Ch] = Le[Ph] = Le[Ah] = !0;
Le[ch] = Le[dh] = Le[Eh] = Le[fh] = Le[$h] = Le[vh] = Le[ph] = Le[mh] = Le[hh] = Le[gh] = Le[_h] = Le[bh] = Le[yh] = Le[Dh] = Le[wh] = !1;
function Lh(e) {
  return uh(e) && lh(e.length) && !!Le[ih(e)];
}
var Sh = Lh, xh = Sh, Rh = al, wo = kr, Eo = wo && wo.isTypedArray, Yh = Eo ? Rh(Eo) : xh, ks = Yh, Fh = Gm, Vh = $s, Uh = It, jh = zn, Bh = Es, Hh = ks, Wh = Object.prototype, Gh = Wh.hasOwnProperty;
function Kh(e, t) {
  var n = Uh(e), r = !n && Vh(e), s = !n && !r && jh(e), a = !n && !r && !s && Hh(e), o = n || r || s || a, i = o ? Fh(e.length, String) : [], l = i.length;
  for (var u in e)
    (t || Gh.call(e, u)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    s && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Bh(u, l))) && i.push(u);
  return i;
}
var vl = Kh, qh = Object.prototype;
function zh(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || qh;
  return e === n;
}
var Ns = zh;
function Xh(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var pl = Xh, Zh = pl, Jh = Zh(Object.keys, Object), Qh = Jh, eg = Ns, tg = Qh, ng = Object.prototype, rg = ng.hasOwnProperty;
function ag(e) {
  if (!eg(e))
    return tg(e);
  var t = [];
  for (var n in Object(e))
    rg.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
var sg = ag, og = kn, ig = Os;
function lg(e) {
  return e != null && ig(e.length) && !og(e);
}
var Lr = lg, ug = vl, cg = sg, dg = Lr;
function fg(e) {
  return dg(e) ? ug(e) : cg(e);
}
var Ts = fg, vg = dl, pg = Ts;
function mg(e, t) {
  return e && vg(e, t, pg);
}
var ml = mg, hg = ba;
function gg() {
  this.__data__ = new hg(), this.size = 0;
}
var _g = gg;
function bg(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
var yg = bg;
function Dg(e) {
  return this.__data__.get(e);
}
var wg = Dg;
function Eg(e) {
  return this.__data__.has(e);
}
var $g = Eg, Og = ba, kg = ys, Ng = Ds, Tg = 200;
function Mg(e, t) {
  var n = this.__data__;
  if (n instanceof Og) {
    var r = n.__data__;
    if (!kg || r.length < Tg - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new Ng(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
var Ig = Mg, Cg = ba, Pg = _g, Ag = yg, Lg = wg, Sg = $g, xg = Ig;
function ar(e) {
  var t = this.__data__ = new Cg(e);
  this.size = t.size;
}
ar.prototype.clear = Pg;
ar.prototype.delete = Ag;
ar.prototype.get = Lg;
ar.prototype.has = Sg;
ar.prototype.set = xg;
var Ms = ar, Rg = "__lodash_hash_undefined__";
function Yg(e) {
  return this.__data__.set(e, Rg), this;
}
var Fg = Yg;
function Vg(e) {
  return this.__data__.has(e);
}
var Ug = Vg, jg = Ds, Bg = Fg, Hg = Ug;
function Zr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new jg(); ++t < n; )
    this.add(e[t]);
}
Zr.prototype.add = Zr.prototype.push = Bg;
Zr.prototype.has = Hg;
var Wg = Zr;
function Gg(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
var hl = Gg;
function Kg(e, t) {
  return e.has(t);
}
var qg = Kg, zg = Wg, Xg = hl, Zg = qg, Jg = 1, Qg = 2;
function e_(e, t, n, r, s, a) {
  var o = n & Jg, i = e.length, l = t.length;
  if (i != l && !(o && l > i))
    return !1;
  var u = a.get(e), c = a.get(t);
  if (u && c)
    return u == t && c == e;
  var p = -1, v = !0, f = n & Qg ? new zg() : void 0;
  for (a.set(e, t), a.set(t, e); ++p < i; ) {
    var O = e[p], g = t[p];
    if (r)
      var D = o ? r(g, O, p, t, e, a) : r(O, g, p, e, t, a);
    if (D !== void 0) {
      if (D)
        continue;
      v = !1;
      break;
    }
    if (f) {
      if (!Xg(t, function(d, b) {
        if (!Zg(f, b) && (O === d || s(O, d, n, r, a)))
          return f.push(b);
      })) {
        v = !1;
        break;
      }
    } else if (!(O === g || s(O, g, n, r, a))) {
      v = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), v;
}
var gl = e_, t_ = Ut, n_ = t_.Uint8Array, _l = n_;
function r_(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, s) {
    n[++t] = [s, r];
  }), n;
}
var a_ = r_;
function s_(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var o_ = s_, $o = ha, Oo = _l, i_ = tr, l_ = gl, u_ = a_, c_ = o_, d_ = 1, f_ = 2, v_ = "[object Boolean]", p_ = "[object Date]", m_ = "[object Error]", h_ = "[object Map]", g_ = "[object Number]", __ = "[object RegExp]", b_ = "[object Set]", y_ = "[object String]", D_ = "[object Symbol]", w_ = "[object ArrayBuffer]", E_ = "[object DataView]", ko = $o ? $o.prototype : void 0, Ca = ko ? ko.valueOf : void 0;
function $_(e, t, n, r, s, a, o) {
  switch (n) {
    case E_:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case w_:
      return !(e.byteLength != t.byteLength || !a(new Oo(e), new Oo(t)));
    case v_:
    case p_:
    case g_:
      return i_(+e, +t);
    case m_:
      return e.name == t.name && e.message == t.message;
    case __:
    case y_:
      return e == t + "";
    case h_:
      var i = u_;
    case b_:
      var l = r & d_;
      if (i || (i = c_), e.size != t.size && !l)
        return !1;
      var u = o.get(e);
      if (u)
        return u == t;
      r |= f_, o.set(e, t);
      var c = l_(i(e), i(t), r, s, a, o);
      return o.delete(e), c;
    case D_:
      if (Ca)
        return Ca.call(e) == Ca.call(t);
  }
  return !1;
}
var O_ = $_;
function k_(e, t) {
  for (var n = -1, r = t.length, s = e.length; ++n < r; )
    e[s + n] = t[n];
  return e;
}
var N_ = k_, T_ = N_, M_ = It;
function I_(e, t, n) {
  var r = t(e);
  return M_(e) ? r : T_(r, n(e));
}
var C_ = I_;
function P_(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, s = 0, a = []; ++n < r; ) {
    var o = e[n];
    t(o, n, e) && (a[s++] = o);
  }
  return a;
}
var A_ = P_;
function L_() {
  return [];
}
var S_ = L_, x_ = A_, R_ = S_, Y_ = Object.prototype, F_ = Y_.propertyIsEnumerable, No = Object.getOwnPropertySymbols, V_ = No ? function(e) {
  return e == null ? [] : (e = Object(e), x_(No(e), function(t) {
    return F_.call(e, t);
  }));
} : R_, U_ = V_, j_ = C_, B_ = U_, H_ = Ts;
function W_(e) {
  return j_(e, H_, B_);
}
var G_ = W_, To = G_, K_ = 1, q_ = Object.prototype, z_ = q_.hasOwnProperty;
function X_(e, t, n, r, s, a) {
  var o = n & K_, i = To(e), l = i.length, u = To(t), c = u.length;
  if (l != c && !o)
    return !1;
  for (var p = l; p--; ) {
    var v = i[p];
    if (!(o ? v in t : z_.call(t, v)))
      return !1;
  }
  var f = a.get(e), O = a.get(t);
  if (f && O)
    return f == t && O == e;
  var g = !0;
  a.set(e, t), a.set(t, e);
  for (var D = o; ++p < l; ) {
    v = i[p];
    var d = e[v], b = t[v];
    if (r)
      var k = o ? r(b, d, v, t, e, a) : r(d, b, v, e, t, a);
    if (!(k === void 0 ? d === b || s(d, b, n, r, a) : k)) {
      g = !1;
      break;
    }
    D || (D = v == "constructor");
  }
  if (g && !D) {
    var _ = e.constructor, I = t.constructor;
    _ != I && "constructor" in e && "constructor" in t && !(typeof _ == "function" && _ instanceof _ && typeof I == "function" && I instanceof I) && (g = !1);
  }
  return a.delete(e), a.delete(t), g;
}
var Z_ = X_, J_ = Nn, Q_ = Ut, eb = J_(Q_, "DataView"), tb = eb, nb = Nn, rb = Ut, ab = nb(rb, "Promise"), sb = ab, ob = Nn, ib = Ut, lb = ob(ib, "Set"), ub = lb, cb = Nn, db = Ut, fb = cb(db, "WeakMap"), vb = fb, Ya = tb, Fa = ys, Va = sb, Ua = ub, ja = vb, bl = jt, sr = sl, Mo = "[object Map]", pb = "[object Object]", Io = "[object Promise]", Co = "[object Set]", Po = "[object WeakMap]", Ao = "[object DataView]", mb = sr(Ya), hb = sr(Fa), gb = sr(Va), _b = sr(Ua), bb = sr(ja), _n = bl;
(Ya && _n(new Ya(new ArrayBuffer(1))) != Ao || Fa && _n(new Fa()) != Mo || Va && _n(Va.resolve()) != Io || Ua && _n(new Ua()) != Co || ja && _n(new ja()) != Po) && (_n = function(e) {
  var t = bl(e), n = t == pb ? e.constructor : void 0, r = n ? sr(n) : "";
  if (r)
    switch (r) {
      case mb:
        return Ao;
      case hb:
        return Mo;
      case gb:
        return Io;
      case _b:
        return Co;
      case bb:
        return Po;
    }
  return t;
});
var yb = _n, Pa = Ms, Db = gl, wb = O_, Eb = Z_, Lo = yb, So = It, xo = zn, $b = ks, Ob = 1, Ro = "[object Arguments]", Yo = "[object Array]", Vr = "[object Object]", kb = Object.prototype, Fo = kb.hasOwnProperty;
function Nb(e, t, n, r, s, a) {
  var o = So(e), i = So(t), l = o ? Yo : Lo(e), u = i ? Yo : Lo(t);
  l = l == Ro ? Vr : l, u = u == Ro ? Vr : u;
  var c = l == Vr, p = u == Vr, v = l == u;
  if (v && xo(e)) {
    if (!xo(t))
      return !1;
    o = !0, c = !1;
  }
  if (v && !c)
    return a || (a = new Pa()), o || $b(e) ? Db(e, t, n, r, s, a) : wb(e, t, l, n, r, s, a);
  if (!(n & Ob)) {
    var f = c && Fo.call(e, "__wrapped__"), O = p && Fo.call(t, "__wrapped__");
    if (f || O) {
      var g = f ? e.value() : e, D = O ? t.value() : t;
      return a || (a = new Pa()), s(g, D, n, r, a);
    }
  }
  return v ? (a || (a = new Pa()), Eb(e, t, n, r, s, a)) : !1;
}
var Tb = Nb, Mb = Tb, Vo = Ct;
function yl(e, t, n, r, s) {
  return e === t ? !0 : e == null || t == null || !Vo(e) && !Vo(t) ? e !== e && t !== t : Mb(e, t, n, r, yl, s);
}
var Dl = yl, Ib = Ms, Cb = Dl, Pb = 1, Ab = 2;
function Lb(e, t, n, r) {
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
      var p = new Ib();
      if (r)
        var v = r(u, c, l, e, t, p);
      if (!(v === void 0 ? Cb(c, u, Pb | Ab, r, p) : v))
        return !1;
    }
  }
  return !0;
}
var Sb = Lb, xb = Zt;
function Rb(e) {
  return e === e && !xb(e);
}
var wl = Rb, Yb = wl, Fb = Ts;
function Vb(e) {
  for (var t = Fb(e), n = t.length; n--; ) {
    var r = t[n], s = e[r];
    t[n] = [r, s, Yb(s)];
  }
  return t;
}
var Ub = Vb;
function jb(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
var El = jb, Bb = Sb, Hb = Ub, Wb = El;
function Gb(e) {
  var t = Hb(e);
  return t.length == 1 && t[0][2] ? Wb(t[0][0], t[0][1]) : function(n) {
    return n === e || Bb(n, e, t);
  };
}
var Kb = Gb;
function qb(e, t) {
  return e != null && t in Object(e);
}
var zb = qb, Xb = ll, Zb = $s, Jb = It, Qb = Es, ey = Os, ty = Da;
function ny(e, t, n) {
  t = Xb(t, e);
  for (var r = -1, s = t.length, a = !1; ++r < s; ) {
    var o = ty(t[r]);
    if (!(a = e != null && n(e, o)))
      break;
    e = e[o];
  }
  return a || ++r != s ? a : (s = e == null ? 0 : e.length, !!s && ey(s) && Qb(o, s) && (Jb(e) || Zb(e)));
}
var $l = ny, ry = zb, ay = $l;
function sy(e, t) {
  return e != null && ay(e, t, ry);
}
var oy = sy, iy = Dl, ly = bn, uy = oy, cy = bs, dy = wl, fy = El, vy = Da, py = 1, my = 2;
function hy(e, t) {
  return cy(e) && dy(t) ? fy(vy(e), t) : function(n) {
    var r = ly(n, e);
    return r === void 0 && r === t ? uy(n, e) : iy(t, r, py | my);
  };
}
var gy = hy;
function _y(e) {
  return e;
}
var Is = _y;
function by(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var yy = by, Dy = ul;
function wy(e) {
  return function(t) {
    return Dy(t, e);
  };
}
var Ey = wy, $y = yy, Oy = Ey, ky = bs, Ny = Da;
function Ty(e) {
  return ky(e) ? $y(Ny(e)) : Oy(e);
}
var My = Ty, Iy = Kb, Cy = gy, Py = Is, Ay = It, Ly = My;
function Sy(e) {
  return typeof e == "function" ? e : e == null ? Py : typeof e == "object" ? Ay(e) ? Cy(e[0], e[1]) : Iy(e) : Ly(e);
}
var Ol = Sy, xy = wa, Ry = ml, Yy = Ol;
function Fy(e, t) {
  var n = {};
  return t = Yy(t), Ry(e, function(r, s, a) {
    xy(n, s, t(r, s, a));
  }), n;
}
var Vy = Fy;
function Uy(e, t, n) {
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
var kl = Uy, jy = kl, Uo = Math.max;
function By(e, t, n) {
  return t = Uo(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, s = -1, a = Uo(r.length - t, 0), o = Array(a); ++s < a; )
      o[s] = r[t + s];
    s = -1;
    for (var i = Array(t + 1); ++s < t; )
      i[s] = r[s];
    return i[t] = n(o), jy(e, this, i);
  };
}
var Hy = By;
function Wy(e) {
  return function() {
    return e;
  };
}
var Gy = Wy, Ky = Gy, jo = cl, qy = Is, zy = jo ? function(e, t) {
  return jo(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Ky(t),
    writable: !0
  });
} : qy, Xy = zy, Zy = 800, Jy = 16, Qy = Date.now;
function e1(e) {
  var t = 0, n = 0;
  return function() {
    var r = Qy(), s = Jy - (r - n);
    if (n = r, s > 0) {
      if (++t >= Zy)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var t1 = e1, n1 = Xy, r1 = t1, a1 = r1(n1), s1 = a1, o1 = Is, i1 = Hy, l1 = s1;
function u1(e, t) {
  return l1(i1(e, t, o1), e + "");
}
var Cs = u1, c1 = tr, d1 = Lr, f1 = Es, v1 = Zt;
function p1(e, t, n) {
  if (!v1(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? d1(n) && f1(t, n.length) : r == "string" && t in n) ? c1(n[t], e) : !1;
}
var Ps = p1;
function m1(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var h1 = m1, g1 = Zt, _1 = Ns, b1 = h1, y1 = Object.prototype, D1 = y1.hasOwnProperty;
function w1(e) {
  if (!g1(e))
    return b1(e);
  var t = _1(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !D1.call(e, r)) || n.push(r);
  return n;
}
var E1 = w1, $1 = vl, O1 = E1, k1 = Lr;
function N1(e) {
  return k1(e) ? $1(e, !0) : O1(e);
}
var As = N1, T1 = Cs, M1 = tr, I1 = Ps, C1 = As, Nl = Object.prototype, P1 = Nl.hasOwnProperty, A1 = T1(function(e, t) {
  e = Object(e);
  var n = -1, r = t.length, s = r > 2 ? t[2] : void 0;
  for (s && I1(t[0], t[1], s) && (r = 1); ++n < r; )
    for (var a = t[n], o = C1(a), i = -1, l = o.length; ++i < l; ) {
      var u = o[i], c = e[u];
      (c === void 0 || M1(c, Nl[u]) && !P1.call(e, u)) && (e[u] = a[u]);
    }
  return e;
}), Bo = A1, L1 = wa, S1 = tr;
function x1(e, t, n) {
  (n !== void 0 && !S1(e[t], n) || n === void 0 && !(t in e)) && L1(e, t, n);
}
var Tl = x1, Jr = {}, R1 = {
  get exports() {
    return Jr;
  },
  set exports(e) {
    Jr = e;
  }
};
(function(e, t) {
  var n = Ut, r = t && !t.nodeType && t, s = r && !0 && e && !e.nodeType && e, a = s && s.exports === r, o = a ? n.Buffer : void 0, i = o ? o.allocUnsafe : void 0;
  function l(u, c) {
    if (c)
      return u.slice();
    var p = u.length, v = i ? i(p) : new u.constructor(p);
    return u.copy(v), v;
  }
  e.exports = l;
})(R1, Jr);
var Ho = _l;
function Y1(e) {
  var t = new e.constructor(e.byteLength);
  return new Ho(t).set(new Ho(e)), t;
}
var F1 = Y1, V1 = F1;
function U1(e, t) {
  var n = t ? V1(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var j1 = U1;
function B1(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
var H1 = B1, W1 = Zt, Wo = Object.create, G1 = function() {
  function e() {
  }
  return function(t) {
    if (!W1(t))
      return {};
    if (Wo)
      return Wo(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}(), K1 = G1, q1 = pl, z1 = q1(Object.getPrototypeOf, Object), Ml = z1, X1 = K1, Z1 = Ml, J1 = Ns;
function Q1(e) {
  return typeof e.constructor == "function" && !J1(e) ? X1(Z1(e)) : {};
}
var e0 = Q1, t0 = Lr, n0 = Ct;
function r0(e) {
  return n0(e) && t0(e);
}
var a0 = r0, s0 = jt, o0 = Ml, i0 = Ct, l0 = "[object Object]", u0 = Function.prototype, c0 = Object.prototype, Il = u0.toString, d0 = c0.hasOwnProperty, f0 = Il.call(Object);
function v0(e) {
  if (!i0(e) || s0(e) != l0)
    return !1;
  var t = o0(e);
  if (t === null)
    return !0;
  var n = d0.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && Il.call(n) == f0;
}
var p0 = v0;
function m0(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
var Cl = m0, h0 = Rm, g0 = wa;
function _0(e, t, n, r) {
  var s = !n;
  n || (n = {});
  for (var a = -1, o = t.length; ++a < o; ) {
    var i = t[a], l = r ? r(n[i], e[i], i, n, e) : void 0;
    l === void 0 && (l = e[i]), s ? g0(n, i, l) : h0(n, i, l);
  }
  return n;
}
var b0 = _0, y0 = b0, D0 = As;
function w0(e) {
  return y0(e, D0(e));
}
var E0 = w0, Go = Tl, $0 = Jr, O0 = j1, k0 = H1, N0 = e0, Ko = $s, qo = It, T0 = a0, M0 = zn, I0 = kn, C0 = Zt, P0 = p0, A0 = ks, zo = Cl, L0 = E0;
function S0(e, t, n, r, s, a, o) {
  var i = zo(e, n), l = zo(t, n), u = o.get(l);
  if (u) {
    Go(e, n, u);
    return;
  }
  var c = a ? a(i, l, n + "", e, t, o) : void 0, p = c === void 0;
  if (p) {
    var v = qo(l), f = !v && M0(l), O = !v && !f && A0(l);
    c = l, v || f || O ? qo(i) ? c = i : T0(i) ? c = k0(i) : f ? (p = !1, c = $0(l, !0)) : O ? (p = !1, c = O0(l, !0)) : c = [] : P0(l) || Ko(l) ? (c = i, Ko(i) ? c = L0(i) : (!C0(i) || I0(i)) && (c = N0(l))) : p = !1;
  }
  p && (o.set(l, c), s(c, l, r, a, o), o.delete(l)), Go(e, n, c);
}
var x0 = S0, R0 = Ms, Y0 = Tl, F0 = dl, V0 = x0, U0 = Zt, j0 = As, B0 = Cl;
function Pl(e, t, n, r, s) {
  e !== t && F0(t, function(a, o) {
    if (s || (s = new R0()), U0(a))
      V0(e, t, o, n, Pl, r, s);
    else {
      var i = r ? r(B0(e, o), a, o + "", e, t, s) : void 0;
      i === void 0 && (i = a), Y0(e, o, i);
    }
  }, j0);
}
var Al = Pl, H0 = Al, Xo = Zt;
function Ll(e, t, n, r, s, a) {
  return Xo(e) && Xo(t) && (a.set(t, e), H0(e, t, void 0, Ll, a), a.delete(t)), e;
}
var W0 = Ll, G0 = Cs, K0 = Ps;
function q0(e) {
  return G0(function(t, n) {
    var r = -1, s = n.length, a = s > 1 ? n[s - 1] : void 0, o = s > 2 ? n[2] : void 0;
    for (a = e.length > 3 && typeof a == "function" ? (s--, a) : void 0, o && K0(n[0], n[1], o) && (a = s < 3 ? void 0 : a, s = 1), t = Object(t); ++r < s; ) {
      var i = n[r];
      i && e(t, i, r, a);
    }
    return t;
  });
}
var z0 = q0, X0 = Al, Z0 = z0, J0 = Z0(function(e, t, n, r) {
  X0(e, t, n, r);
}), Q0 = J0, eD = kl, tD = Cs, nD = W0, rD = Q0, aD = tD(function(e) {
  return e.push(void 0, nD), eD(rD, void 0, e);
}), Nr = aD, sD = Object.prototype, oD = sD.hasOwnProperty;
function iD(e, t) {
  return e != null && oD.call(e, t);
}
var lD = iD, uD = lD, cD = $l;
function dD(e, t) {
  return e != null && cD(e, t, uD);
}
var Sl = dD, fD = Lr;
function vD(e, t) {
  return function(n, r) {
    if (n == null)
      return n;
    if (!fD(n))
      return e(n, r);
    for (var s = n.length, a = t ? s : -1, o = Object(n); (t ? a-- : ++a < s) && r(o[a], a, o) !== !1; )
      ;
    return n;
  };
}
var pD = vD, mD = ml, hD = pD, gD = hD(mD), _D = gD;
function bD(e) {
  return e && e.length ? e[0] : void 0;
}
var xl = bD;
function yD(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
var Yn = yD, DD = _D;
function wD(e, t) {
  var n;
  return DD(e, function(r, s, a) {
    return n = t(r, s, a), !n;
  }), !!n;
}
var ED = wD, $D = hl, OD = Ol, kD = ED, ND = It, TD = Ps;
function MD(e, t, n) {
  var r = ND(e) ? $D : kD;
  return n && TD(e, t, n) && (t = void 0), r(e, OD(t));
}
var ID = MD;
const CD = (e) => Object.prototype.toString.call(e).slice(8, -1), Vn = (e) => jf(e) && !isNaN(e.getTime()), qt = (e) => CD(e) === "Object", Ls = Sl, Zo = (e, t) => ID(t, (n) => Sl(e, n)), Te = (e, t, n = "0") => {
  for (e = e != null ? String(e) : "", t = t || 2; e.length < t; )
    e = `${n}${e}`;
  return e;
}, yt = (e) => Array.isArray(e), Wt = (e) => yt(e) && e.length > 0, Qr = (e) => e == null ? e ?? null : document && xt(e) ? document.querySelector(e) : e.$el ?? e, on = (e, t, n, r = void 0) => {
  e.removeEventListener(t, n, r);
}, ln = (e, t, n, r = void 0) => (e.addEventListener(t, n, r), () => on(e, t, n, r)), Wr = (e, t) => !!e && !!t && (e === t || e.contains(t)), Ur = (e, t) => {
  (e.key === " " || e.key === "Enter") && (t(e), e.preventDefault());
}, Rl = (e, ...t) => {
  const n = {};
  let r;
  for (r in e)
    t.includes(r) || (n[r] = e[r]);
  return n;
}, Yl = (e, t) => {
  const n = {};
  return t.forEach((r) => {
    r in e && (n[r] = e[r]);
  }), n;
};
function PD(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
const ea = () => {
  function e() {
    return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
  }
  return `${e() + e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`;
}, AD = ["base", "start", "end", "startEnd"], LD = [
  "class",
  "wrapperClass",
  "contentClass",
  "style",
  "contentStyle",
  "color",
  "fillMode"
], SD = { base: {}, start: {}, end: {} };
function Ss(e, t, n = SD) {
  let r = e, s = {};
  t === !0 || xt(t) ? (r = xt(t) ? t : r, s = { ...n }) : qt(t) && (Zo(t, AD) ? s = { ...t } : s = {
    base: { ...t },
    start: { ...t },
    end: { ...t }
  });
  const a = Nr(
    s,
    { start: s.startEnd, end: s.startEnd },
    n
  );
  return Object.entries(a).forEach(([o, i]) => {
    let l = r;
    i === !0 || xt(i) ? (l = xt(i) ? i : l, a[o] = { color: l }) : qt(i) && (Zo(i, LD) ? a[o] = { ...i } : a[o] = {}), Nr(a[o], { color: l });
  }), a;
}
class xD {
  constructor() {
    oe(this, "type", "highlight");
  }
  normalizeConfig(t, n) {
    return Ss(t, n, {
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
class xs {
  constructor(t, n) {
    oe(this, "type", ""), oe(this, "collectionType", ""), this.type = t, this.collectionType = n;
  }
  normalizeConfig(t, n) {
    return Ss(t, n);
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
class RD extends xs {
  constructor() {
    super("content", "content");
  }
  normalizeConfig(t, n) {
    return Ss("base", n);
  }
}
class YD extends xs {
  constructor() {
    super("dot", "dots");
  }
}
class FD extends xs {
  constructor() {
    super("bar", "bars");
  }
}
class VD {
  constructor(t) {
    oe(this, "color"), oe(this, "renderers", [
      new RD(),
      new xD(),
      new YD(),
      new FD()
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
const UD = 300, jD = 60, BD = 80, HD = {
  maxSwipeTime: UD,
  minHorizontalSwipeDistance: jD,
  maxVerticalSwipeDistance: BD
}, WD = "MMMM YYYY", GD = "W", KD = "MMM", qD = "h A", zD = [
  "L",
  "YYYY-MM-DD",
  "YYYY/MM/DD"
], XD = [
  "L h:mm A",
  "YYYY-MM-DD h:mm A",
  "YYYY/MM/DD h:mm A"
], ZD = [
  "L HH:mm",
  "YYYY-MM-DD HH:mm",
  "YYYY/MM/DD HH:mm"
], JD = [
  "h:mm A"
], QD = [
  "HH:mm"
], ew = "WWW, MMM D, YYYY", tw = [
  "L",
  "YYYY-MM-DD",
  "YYYY/MM/DD"
], nw = "iso", rw = "YYYY-MM-DDTHH:mm:ss.SSSZ", aw = {
  title: WD,
  weekdays: GD,
  navMonths: KD,
  hours: qD,
  input: zD,
  inputDateTime: XD,
  inputDateTime24hr: ZD,
  inputTime: JD,
  inputTime24hr: QD,
  dayPopover: ew,
  data: tw,
  model: nw,
  iso: rw
}, zt = {
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
zt.en = zt["en-US"];
zt.es = zt["es-ES"];
zt.no = zt.nb;
zt.zh = zt["zh-CN"];
const sw = Object.entries(zt).reduce(
  (e, [t, { dow: n, L: r }]) => (e[t] = {
    id: t,
    firstDayOfWeek: n,
    masks: { L: r }
  }, e),
  {}
), ow = {
  componentPrefix: "V",
  color: "blue",
  isDark: !1,
  navVisibility: "click",
  titlePosition: "center",
  transition: "slide-h",
  touch: HD,
  masks: aw,
  locales: sw,
  datePicker: {
    updateOnInput: !0,
    inputDebounce: 1e3,
    popover: {
      visibility: "hover-focus",
      placement: "bottom-start",
      isInteractive: !0
    }
  }
}, Ba = os(ow), iw = C(() => Vy(Ba.locales, (e) => (e.masks = Nr(e.masks, Ba.masks), e))), dn = (e) => typeof window < "u" && Ls(window.__vcalendar__, e) ? bn(window.__vcalendar__, e) : bn(Ba, e);
var ta = {}, lw = {
  get exports() {
    return ta;
  },
  set exports(e) {
    ta = e;
  }
}, na = {}, uw = {
  get exports() {
    return na;
  },
  set exports(e) {
    na = e;
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
})(uw, na);
var ra = {}, cw = {
  get exports() {
    return ra;
  },
  set exports(e) {
    ra = e;
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
})(cw, ra);
var aa = {}, dw = {
  get exports() {
    return aa;
  },
  set exports(e) {
    aa = e;
  }
}, sa = {}, fw = {
  get exports() {
    return sa;
  },
  set exports(e) {
    sa = e;
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
      for (var c = l.formatToParts(u), p = [], v = 0; v < c.length; v++) {
        var f = r[c[v].type];
        f >= 0 && (p[f] = parseInt(c[v].value, 10));
      }
      return p;
    } catch (O) {
      if (O instanceof RangeError)
        return [NaN];
      throw O;
    }
  }
  function a(l, u) {
    var c = l.format(u).replace(/\u200E/g, ""), p = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(c);
    return [p[3], p[1], p[2], p[4], p[5], p[6]];
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
})(fw, sa);
var oa = {}, vw = {
  get exports() {
    return oa;
  },
  set exports(e) {
    oa = e;
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
})(vw, oa);
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = l;
  var n = s(sa), r = s(oa);
  function s(g) {
    return g && g.__esModule ? g : { default: g };
  }
  var a = 36e5, o = 6e4, i = {
    timezone: /([Z+-].*)$/,
    timezoneZ: /^(Z)$/,
    timezoneHH: /^([+-]\d{2})$/,
    timezoneHHMM: /^([+-]\d{2}):?(\d{2})$/
  };
  function l(g, D, d) {
    var b, k;
    if (!g || (b = i.timezoneZ.exec(g), b))
      return 0;
    var _;
    if (b = i.timezoneHH.exec(g), b)
      return _ = parseInt(b[1], 10), v(_) ? -(_ * a) : NaN;
    if (b = i.timezoneHHMM.exec(g), b) {
      _ = parseInt(b[1], 10);
      var I = parseInt(b[2], 10);
      return v(_, I) ? (k = Math.abs(_) * a + I * o, _ > 0 ? -k : k) : NaN;
    }
    if (O(g)) {
      D = new Date(D || Date.now());
      var N = d ? D : u(D), x = c(N, g), P = d ? x : p(D, x, g);
      return -P;
    }
    return NaN;
  }
  function u(g) {
    return (0, r.default)(g.getFullYear(), g.getMonth(), g.getDate(), g.getHours(), g.getMinutes(), g.getSeconds(), g.getMilliseconds());
  }
  function c(g, D) {
    var d = (0, n.default)(g, D), b = (0, r.default)(d[0], d[1] - 1, d[2], d[3] % 24, d[4], d[5], 0).getTime(), k = g.getTime(), _ = k % 1e3;
    return k -= _ >= 0 ? _ : 1e3 + _, b - k;
  }
  function p(g, D, d) {
    var b = g.getTime(), k = b - D, _ = c(new Date(k), d);
    if (D === _)
      return D;
    k -= _ - D;
    var I = c(new Date(k), d);
    return _ === I ? _ : Math.max(_, I);
  }
  function v(g, D) {
    return -23 <= g && g <= 23 && (D == null || 0 <= D && D <= 59);
  }
  var f = {};
  function O(g) {
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
})(dw, aa);
var ia = {}, pw = {
  get exports() {
    return ia;
  },
  set exports(e) {
    ia = e;
  }
};
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = void 0;
  var n = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/, r = n;
  t.default = r, e.exports = t.default;
})(pw, ia);
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = p;
  var n = o(na), r = o(ra), s = o(aa), a = o(ia);
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
  function p(P, A) {
    if (arguments.length < 1)
      throw new TypeError("1 argument required, but only " + arguments.length + " present");
    if (P === null)
      return /* @__PURE__ */ new Date(NaN);
    var S = A || {}, j = S.additionalDigits == null ? u : (0, n.default)(S.additionalDigits);
    if (j !== 2 && j !== 1 && j !== 0)
      throw new RangeError("additionalDigits must be 0, 1 or 2");
    if (P instanceof Date || typeof P == "object" && Object.prototype.toString.call(P) === "[object Date]")
      return new Date(P.getTime());
    if (typeof P == "number" || Object.prototype.toString.call(P) === "[object Number]")
      return new Date(P);
    if (!(typeof P == "string" || Object.prototype.toString.call(P) === "[object String]"))
      return /* @__PURE__ */ new Date(NaN);
    var Y = v(P), X = f(Y.date, j), K = X.year, U = X.restDateString, F = O(U, K);
    if (isNaN(F))
      return /* @__PURE__ */ new Date(NaN);
    if (F) {
      var Q = F.getTime(), W = 0, V;
      if (Y.time && (W = g(Y.time), isNaN(W)))
        return /* @__PURE__ */ new Date(NaN);
      if (Y.timeZone || S.timeZone) {
        if (V = (0, s.default)(Y.timeZone || S.timeZone, new Date(Q + W)), isNaN(V))
          return /* @__PURE__ */ new Date(NaN);
      } else
        V = (0, r.default)(new Date(Q + W)), V = (0, r.default)(new Date(Q + W + V));
      return new Date(Q + W + V);
    } else
      return /* @__PURE__ */ new Date(NaN);
  }
  function v(P) {
    var A = {}, S = c.dateTimePattern.exec(P), j;
    if (S ? (A.date = S[1], j = S[3]) : (S = c.datePattern.exec(P), S ? (A.date = S[1], j = S[2]) : (A.date = null, j = P)), j) {
      var Y = c.timeZone.exec(j);
      Y ? (A.time = j.replace(Y[1], ""), A.timeZone = Y[1].trim()) : A.time = j;
    }
    return A;
  }
  function f(P, A) {
    var S = c.YYY[A], j = c.YYYYY[A], Y;
    if (Y = c.YYYY.exec(P) || j.exec(P), Y) {
      var X = Y[1];
      return {
        year: parseInt(X, 10),
        restDateString: P.slice(X.length)
      };
    }
    if (Y = c.YY.exec(P) || S.exec(P), Y) {
      var K = Y[1];
      return {
        year: parseInt(K, 10) * 100,
        restDateString: P.slice(K.length)
      };
    }
    return {
      year: null
    };
  }
  function O(P, A) {
    if (A === null)
      return null;
    var S, j, Y, X;
    if (P.length === 0)
      return j = /* @__PURE__ */ new Date(0), j.setUTCFullYear(A), j;
    if (S = c.MM.exec(P), S)
      return j = /* @__PURE__ */ new Date(0), Y = parseInt(S[1], 10) - 1, _(A, Y) ? (j.setUTCFullYear(A, Y), j) : /* @__PURE__ */ new Date(NaN);
    if (S = c.DDD.exec(P), S) {
      j = /* @__PURE__ */ new Date(0);
      var K = parseInt(S[1], 10);
      return I(A, K) ? (j.setUTCFullYear(A, 0, K), j) : /* @__PURE__ */ new Date(NaN);
    }
    if (S = c.MMDD.exec(P), S) {
      j = /* @__PURE__ */ new Date(0), Y = parseInt(S[1], 10) - 1;
      var U = parseInt(S[2], 10);
      return _(A, Y, U) ? (j.setUTCFullYear(A, Y, U), j) : /* @__PURE__ */ new Date(NaN);
    }
    if (S = c.Www.exec(P), S)
      return X = parseInt(S[1], 10) - 1, N(A, X) ? D(A, X) : /* @__PURE__ */ new Date(NaN);
    if (S = c.WwwD.exec(P), S) {
      X = parseInt(S[1], 10) - 1;
      var F = parseInt(S[2], 10) - 1;
      return N(A, X, F) ? D(A, X, F) : /* @__PURE__ */ new Date(NaN);
    }
    return null;
  }
  function g(P) {
    var A, S, j;
    if (A = c.HH.exec(P), A)
      return S = parseFloat(A[1].replace(",", ".")), x(S) ? S % 24 * i : NaN;
    if (A = c.HHMM.exec(P), A)
      return S = parseInt(A[1], 10), j = parseFloat(A[2].replace(",", ".")), x(S, j) ? S % 24 * i + j * l : NaN;
    if (A = c.HHMMSS.exec(P), A) {
      S = parseInt(A[1], 10), j = parseInt(A[2], 10);
      var Y = parseFloat(A[3].replace(",", "."));
      return x(S, j, Y) ? S % 24 * i + j * l + Y * 1e3 : NaN;
    }
    return null;
  }
  function D(P, A, S) {
    A = A || 0, S = S || 0;
    var j = /* @__PURE__ */ new Date(0);
    j.setUTCFullYear(P, 0, 4);
    var Y = j.getUTCDay() || 7, X = A * 7 + S + 1 - Y;
    return j.setUTCDate(j.getUTCDate() + X), j;
  }
  var d = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], b = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function k(P) {
    return P % 400 === 0 || P % 4 === 0 && P % 100 !== 0;
  }
  function _(P, A, S) {
    if (A < 0 || A > 11)
      return !1;
    if (S != null) {
      if (S < 1)
        return !1;
      var j = k(P);
      if (j && S > b[A] || !j && S > d[A])
        return !1;
    }
    return !0;
  }
  function I(P, A) {
    if (A < 1)
      return !1;
    var S = k(P);
    return !(S && A > 366 || !S && A > 365);
  }
  function N(P, A, S) {
    return !(A < 0 || A > 52 || S != null && (S < 0 || S > 6));
  }
  function x(P, A, S) {
    return !(P != null && (P < 0 || P >= 25) || A != null && (A < 0 || A >= 60) || S != null && (S < 0 || S >= 60));
  }
  e.exports = t.default;
})(lw, ta);
const mw = /* @__PURE__ */ Ud(ta);
function tt(e, t) {
  if (t.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present");
}
function Gr(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Gr = function(n) {
    return typeof n;
  } : Gr = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Gr(e);
}
function Jt(e) {
  tt(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || Gr(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), /* @__PURE__ */ new Date(NaN));
}
function or(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
var hw = {};
function Rs() {
  return hw;
}
function En(e, t) {
  var n, r, s, a, o, i, l, u;
  tt(1, arguments);
  var c = Rs(), p = or((n = (r = (s = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (o = t.locale) === null || o === void 0 || (i = o.options) === null || i === void 0 ? void 0 : i.weekStartsOn) !== null && s !== void 0 ? s : c.weekStartsOn) !== null && r !== void 0 ? r : (l = c.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(p >= 0 && p <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var v = Jt(e), f = v.getDay(), O = (f < p ? 7 : 0) + f - p;
  return v.setDate(v.getDate() - O), v.setHours(0, 0, 0, 0), v;
}
function Jo(e) {
  var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
var gw = 6048e5;
function _w(e, t, n) {
  tt(2, arguments);
  var r = En(e, n), s = En(t, n), a = r.getTime() - Jo(r), o = s.getTime() - Jo(s);
  return Math.round((a - o) / gw);
}
function bw(e) {
  tt(1, arguments);
  var t = Jt(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function yw(e) {
  tt(1, arguments);
  var t = Jt(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function Dw(e, t) {
  return tt(1, arguments), _w(bw(e), yw(e), t) + 1;
}
function ww(e, t) {
  var n, r, s, a, o, i, l, u;
  tt(1, arguments);
  var c = Jt(e), p = c.getFullYear(), v = Rs(), f = or((n = (r = (s = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (o = t.locale) === null || o === void 0 || (i = o.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && s !== void 0 ? s : v.firstWeekContainsDate) !== null && r !== void 0 ? r : (l = v.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(f >= 1 && f <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var O = /* @__PURE__ */ new Date(0);
  O.setFullYear(p + 1, 0, f), O.setHours(0, 0, 0, 0);
  var g = En(O, t), D = /* @__PURE__ */ new Date(0);
  D.setFullYear(p, 0, f), D.setHours(0, 0, 0, 0);
  var d = En(D, t);
  return c.getTime() >= g.getTime() ? p + 1 : c.getTime() >= d.getTime() ? p : p - 1;
}
function Ew(e, t) {
  var n, r, s, a, o, i, l, u;
  tt(1, arguments);
  var c = Rs(), p = or((n = (r = (s = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (o = t.locale) === null || o === void 0 || (i = o.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && s !== void 0 ? s : c.firstWeekContainsDate) !== null && r !== void 0 ? r : (l = c.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), v = ww(e, t), f = /* @__PURE__ */ new Date(0);
  f.setFullYear(v, 0, p), f.setHours(0, 0, 0, 0);
  var O = En(f, t);
  return O;
}
var $w = 6048e5;
function Ow(e, t) {
  tt(1, arguments);
  var n = Jt(e), r = En(n, t).getTime() - Ew(n, t).getTime();
  return Math.round(r / $w) + 1;
}
function la(e) {
  return tt(1, arguments), En(e, {
    weekStartsOn: 1
  });
}
function kw(e) {
  tt(1, arguments);
  var t = Jt(e), n = t.getFullYear(), r = /* @__PURE__ */ new Date(0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  var s = la(r), a = /* @__PURE__ */ new Date(0);
  a.setFullYear(n, 0, 4), a.setHours(0, 0, 0, 0);
  var o = la(a);
  return t.getTime() >= s.getTime() ? n + 1 : t.getTime() >= o.getTime() ? n : n - 1;
}
function Nw(e) {
  tt(1, arguments);
  var t = kw(e), n = /* @__PURE__ */ new Date(0);
  n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0);
  var r = la(n);
  return r;
}
var Tw = 6048e5;
function Mw(e) {
  tt(1, arguments);
  var t = Jt(e), n = la(t).getTime() - Nw(t).getTime();
  return Math.round(n / Tw) + 1;
}
function at(e, t) {
  tt(2, arguments);
  var n = Jt(e), r = or(t);
  return isNaN(r) ? /* @__PURE__ */ new Date(NaN) : (r && n.setDate(n.getDate() + r), n);
}
function ua(e, t) {
  tt(2, arguments);
  var n = Jt(e), r = or(t);
  if (isNaN(r))
    return /* @__PURE__ */ new Date(NaN);
  if (!r)
    return n;
  var s = n.getDate(), a = new Date(n.getTime());
  a.setMonth(n.getMonth() + r + 1, 0);
  var o = a.getDate();
  return s >= o ? a : (n.setFullYear(a.getFullYear(), a.getMonth(), s), n);
}
function Qo(e, t) {
  tt(2, arguments);
  var n = or(t);
  return ua(e, n * 12);
}
var Cn = /* @__PURE__ */ ((e) => (e.Any = "any", e.All = "all", e))(Cn || {}), Fl = /* @__PURE__ */ ((e) => (e.Days = "days", e.Weeks = "weeks", e.Months = "months", e.Years = "years", e))(Fl || {}), Vl = /* @__PURE__ */ ((e) => (e.Days = "days", e.Weekdays = "weekdays", e.Weeks = "weeks", e.Months = "months", e.Years = "years", e))(Vl || {}), Ul = /* @__PURE__ */ ((e) => (e.OrdinalWeekdays = "ordinalWeekdays", e))(Ul || {});
class Iw {
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
        return Ys(this.from.date, n) % this.interval === 0;
      case "weeks":
        return qw(this.from.date, n) % this.interval === 0;
      case "months":
        return zw(this.from.date, n) % this.interval === 0;
      case "years":
        return zl(this.from.date, n) % this.interval === 0;
      default:
        return !1;
    }
  }
}
class ir {
  constructor(t, n, r, s) {
    oe(this, "components", []), this.type = t, this.validator = r, this.getter = s, this.components = this.normalizeComponents(n);
  }
  static create(t, n) {
    switch (t) {
      case "days":
        return new Cw(n);
      case "weekdays":
        return new Pw(n);
      case "weeks":
        return new Aw(n);
      case "months":
        return new Lw(n);
      case "years":
        return new Sw(n);
    }
  }
  normalizeComponents(t) {
    if (this.validator(t))
      return [t];
    if (!yt(t))
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
class Cw extends ir {
  constructor(t) {
    super(
      "days",
      t,
      Yw,
      ({ day: n, dayFromEnd: r }) => [n, -r]
    );
  }
}
class Pw extends ir {
  constructor(t) {
    super(
      "weekdays",
      t,
      Ha,
      ({ weekday: n }) => [n]
    );
  }
}
class Aw extends ir {
  constructor(t) {
    super(
      "weeks",
      t,
      Fw,
      ({ week: n, weekFromEnd: r }) => [n, -r]
    );
  }
}
class Lw extends ir {
  constructor(t) {
    super("months", t, Vw, ({ month: n }) => [
      n
    ]);
  }
}
class Sw extends ir {
  constructor(t) {
    super("years", t, Mt, ({ year: n }) => [n]);
  }
}
class xw {
  constructor(t, n) {
    oe(this, "components"), this.type = t, this.components = this.normalizeComponents(n);
  }
  normalizeArrayConfig(t) {
    const n = [];
    return t.forEach((r, s) => {
      if (Mt(r)) {
        if (s === 0)
          return;
        if (!ei(t[0])) {
          console.error(
            `Ordinal range for "${this.type}" rule is from -5 to -1 or 1 to 5. This rule will be skipped.`
          );
          return;
        }
        if (!Ha(r)) {
          console.error(
            `Acceptable range for "${this.type}" rule is from 1 to 5. This rule will be skipped`
          );
          return;
        }
        n.push([t[0], r]);
      } else
        yt(r) && n.push(...this.normalizeArrayConfig(r));
    }), n;
  }
  normalizeComponents(t) {
    const n = [];
    return t.forEach((r, s) => {
      if (Mt(r)) {
        if (s === 0)
          return;
        if (!ei(t[0])) {
          console.error(
            `Ordinal range for "${this.type}" rule is from -5 to -1 or 1 to 5. This rule will be skipped.`
          );
          return;
        }
        if (!Ha(r)) {
          console.error(
            `Acceptable range for "${this.type}" rule is from 1 to 5. This rule will be skipped`
          );
          return;
        }
        n.push([t[0], r]);
      } else
        yt(r) && n.push(...this.normalizeArrayConfig(r));
    }), n;
  }
  passes(t) {
    const { weekday: n, weekdayOrdinal: r, weekdayOrdinalFromEnd: s } = t;
    return this.components.some(
      ([a, o]) => (a === r || a === -s) && n === o
    );
  }
}
class Rw {
  constructor(t) {
    oe(this, "type", "function"), oe(this, "validated", !0), this.fn = t, kn(t) || (console.error(
      "The function rule requires a valid function. This rule will be skipped."
    ), this.validated = !1);
  }
  passes(t) {
    return this.validated ? this.fn(t) : !0;
  }
}
class ca {
  constructor(t, n = {}, r) {
    oe(this, "validated", !0), oe(this, "config"), oe(this, "type", Cn.Any), oe(this, "from"), oe(this, "until"), oe(this, "rules", []), oe(this, "locale", new fa()), this.parent = r, n.locale && (this.locale = n.locale), this.config = t, kn(t) ? (this.type = Cn.All, this.rules = [new Rw(t)]) : yt(t) ? (this.type = Cn.Any, this.rules = t.map((s) => new ca(s, n, this))) : qt(t) ? (this.type = Cn.All, this.from = t.from ? this.locale.getDateParts(t.from) : r == null ? void 0 : r.from, this.until = t.until ? this.locale.getDateParts(t.until) : r == null ? void 0 : r.until, this.rules = this.getObjectRules(t)) : (console.error("Rule group configuration must be an object or an array."), this.validated = !1);
  }
  getObjectRules(t) {
    const n = [];
    if (t.every && (xt(t.every) && (t.every = [1, `${t.every}s`]), yt(t.every))) {
      const [r = 1, s = Fl.Days] = t.every;
      n.push(new Iw(s, r, this.from));
    }
    return Object.values(Vl).forEach((r) => {
      r in t && n.push(ir.create(r, t[r]));
    }), Object.values(Ul).forEach((r) => {
      r in t && n.push(new xw(r, t[r]));
    }), t.on != null && (yt(t.on) || (t.on = [t.on]), n.push(
      new ca(t.on, { locale: this.locale }, this.parent)
    )), n;
  }
  passes(t) {
    return this.validated ? this.from && t.dayIndex <= this.from.dayIndex || this.until && t.dayIndex >= this.until.dayIndex ? !1 : this.type === Cn.Any ? this.rules.some((n) => n.passes(t)) : this.rules.every((n) => n.passes(t)) : !0;
  }
}
function Yw(e) {
  return Mt(e) ? e >= 1 && e <= 31 : !1;
}
function Ha(e) {
  return Mt(e) ? e >= 1 && e <= 7 : !1;
}
function Fw(e) {
  return Mt(e) ? e >= -6 && e <= -1 || e >= 1 && e <= 6 : !1;
}
function Vw(e) {
  return Mt(e) ? e >= 1 && e <= 12 : !1;
}
function ei(e) {
  return !(!Mt(e) || e < -5 || e > 5 || e === 0);
}
const Uw = {
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
}, Je = 7, jw = 6, jl = 1e3, Bl = jl * 60, Hl = Bl * 60, Kr = Hl * 24, Bw = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Hw = ["L", "iso"], hr = {
  milliseconds: [0, 999, 3],
  seconds: [0, 59, 2],
  minutes: [0, 59, 2],
  hours: [0, 23, 2]
}, Wl = /d{1,2}|W{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|Z{1,4}|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g, Ww = /\[([^]*?)\]/gm, ti = {
  D(e) {
    return e.day;
  },
  DD(e) {
    return Te(e.day, 2);
  },
  // Do(d: DateParts, l: Locale) {
  //   return l.DoFn(d.day);
  // },
  d(e) {
    return e.weekday - 1;
  },
  dd(e) {
    return Te(e.weekday - 1, 2);
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
    return Te(e.month, 2);
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
    return Te(e.year, 4);
  },
  h(e) {
    return e.hours % 12 || 12;
  },
  hh(e) {
    return Te(e.hours % 12 || 12, 2);
  },
  H(e) {
    return e.hours;
  },
  HH(e) {
    return Te(e.hours, 2);
  },
  m(e) {
    return e.minutes;
  },
  mm(e) {
    return Te(e.minutes, 2);
  },
  s(e) {
    return e.seconds;
  },
  ss(e) {
    return Te(e.seconds, 2);
  },
  S(e) {
    return Math.round(e.milliseconds / 100);
  },
  SS(e) {
    return Te(Math.round(e.milliseconds / 10), 2);
  },
  SSS(e) {
    return Te(e.milliseconds, 3);
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
    return `${t > 0 ? "-" : "+"}${Te(Math.floor(Math.abs(t) / 60), 2)}`;
  },
  ZZZ(e) {
    const t = e.timezoneOffset;
    return `${t > 0 ? "-" : "+"}${Te(
      Math.floor(Math.abs(t) / 60) * 100 + Math.abs(t) % 60,
      4
    )}`;
  },
  ZZZZ(e) {
    const t = e.timezoneOffset;
    return `${t > 0 ? "-" : "+"}${Te(Math.floor(Math.abs(t) / 60), 2)}:${Te(
      Math.abs(t) % 60,
      2
    )}`;
  }
}, tn = /\d\d?/, Gw = /\d{3}/, Kw = /\d{4}/, vr = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF/]+(\s*?[\u0600-\u06FF]+){1,2}/i, ni = () => {
}, ri = (e) => (t, n, r) => {
  const s = r[e].indexOf(
    n.charAt(0).toUpperCase() + n.substr(1).toLowerCase()
  );
  ~s && (t.month = s);
}, Ce = {
  D: [
    tn,
    (e, t) => {
      e.day = t;
    }
  ],
  Do: [
    new RegExp(tn.source + vr.source),
    (e, t) => {
      e.day = parseInt(t, 10);
    }
  ],
  d: [tn, ni],
  W: [vr, ni],
  M: [
    tn,
    (e, t) => {
      e.month = t - 1;
    }
  ],
  MMM: [vr, ri("monthNamesShort")],
  MMMM: [vr, ri("monthNames")],
  YY: [
    tn,
    (e, t) => {
      const r = +(/* @__PURE__ */ new Date()).getFullYear().toString().substr(0, 2);
      e.year = +`${t > 68 ? r - 1 : r}${t}`;
    }
  ],
  YYYY: [
    Kw,
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
    Gw,
    (e, t) => {
      e.milliseconds = t;
    }
  ],
  h: [
    tn,
    (e, t) => {
      e.hours = t;
    }
  ],
  m: [
    tn,
    (e, t) => {
      e.minutes = t;
    }
  ],
  s: [
    tn,
    (e, t) => {
      e.seconds = t;
    }
  ],
  a: [
    vr,
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
Ce.DD = Ce.D;
Ce.dd = Ce.d;
Ce.WWWW = Ce.WWW = Ce.WW = Ce.W;
Ce.MM = Ce.M;
Ce.mm = Ce.m;
Ce.hh = Ce.H = Ce.HH = Ce.h;
Ce.ss = Ce.s;
Ce.A = Ce.a;
Ce.ZZZZ = Ce.ZZZ = Ce.ZZ = Ce.Z;
function Gl(e, t) {
  return (Wt(e) && e || [
    xt(e) && e || "YYYY-MM-DD"
  ]).map(
    (n) => Hw.reduce(
      (r, s) => r.replace(s, t.masks[s] || ""),
      n
    )
  );
}
function Kl(e) {
  return qt(e) && "year" in e && "month" in e && "day" in e;
}
function ai(e, t = 1) {
  const n = e.getDay() + 1, r = n >= t ? t - n : -(7 - (t - n));
  return at(e, r);
}
function ql(e, t, n) {
  const r = Date.UTC(e, t - 1, n);
  return Ys(/* @__PURE__ */ new Date(0), new Date(r));
}
function Ys(e, t) {
  return Math.round((t.getTime() - e.getTime()) / Kr);
}
function qw(e, t) {
  return Math.ceil(Ys(ai(e), ai(t)) / 7);
}
function zl(e, t) {
  return t.getUTCFullYear() - e.getUTCFullYear();
}
function zw(e, t) {
  return zl(e, t) * 12 + (t.getMonth() - e.getMonth());
}
function Xl(e, t = "") {
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
    const c = `${Te(r, 4)}-${Te(s, 2)}-${Te(a, 2)}T${Te(
      o,
      2
    )}:${Te(i, 2)}:${Te(l, 2)}.${Te(u, 3)}`;
    return mw(c, { timeZone: t });
  }
  return new Date(r, s - 1, a, o, i, l, u);
}
function Xw(e, t) {
  let n = new Date(e.getTime());
  t.timezone && (n = new Date(
    e.toLocaleString("en-US", { timeZone: t.timezone })
  ), n.setMilliseconds(e.getMilliseconds()));
  const r = n.getMilliseconds(), s = n.getSeconds(), a = n.getMinutes(), o = n.getHours(), i = r + s * jl + a * Bl + o * Hl, l = n.getMonth() + 1, u = n.getFullYear(), c = t.getMonthParts(l, u), p = n.getDate(), v = c.numDays - p + 1, f = n.getDay() + 1, O = Math.floor((p - 1) / 7 + 1), g = Math.floor((c.numDays - p) / 7 + 1), D = Math.ceil(
    (p + Math.abs(c.firstWeekday - c.firstDayOfWeek)) / 7
  ), d = c.numWeeks - D + 1, b = c.weeknumbers[D], k = ql(u, l, p);
  return {
    milliseconds: r,
    seconds: s,
    minutes: a,
    hours: o,
    time: i,
    day: p,
    dayFromEnd: v,
    weekday: f,
    weekdayOrdinal: O,
    weekdayOrdinalFromEnd: g,
    week: D,
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
function Zw(e, t, n) {
  return `${t}-${e}-${n}`;
}
function Jw(e, t, n) {
  const r = t % 4 === 0 && t % 100 !== 0 || t % 400 === 0, s = new Date(t, e - 1, 1), a = s.getDay() + 1, o = e === 2 && r ? 29 : Bw[e - 1], i = n - 1, l = Dw(s, {
    weekStartsOn: i
  }), u = [], c = [];
  for (let p = 0; p < l; p++) {
    const v = at(s, p * 7);
    u.push(Ow(v, { weekStartsOn: i })), c.push(Mw(v));
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
function Qw() {
  const e = [];
  for (let s = 0; s < Je; s++)
    e.push(
      Xl({
        year: 2020,
        month: 1,
        day: 5 + s,
        hours: 12
      })
    );
  return e;
}
function Aa(e, t = void 0) {
  const n = new Intl.DateTimeFormat(t, {
    weekday: e
  });
  return Qw().map((r) => n.format(r));
}
function eE() {
  const e = [];
  for (let t = 0; t <= 24; t++)
    e.push(new Date(2e3, 0, 1, t));
  return e;
}
function tE(e = void 0) {
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
function Zl() {
  const e = [];
  for (let t = 0; t < 12; t++)
    e.push(new Date(2e3, t, 15));
  return e;
}
function si(e, t = void 0) {
  const n = new Intl.DateTimeFormat(t, {
    month: e,
    timeZone: "UTC"
  });
  return Zl().map((r) => n.format(r));
}
function nE(e, t, n) {
  return Mt(t) ? t === e : yt(t) ? t.includes(e) : kn(t) ? t(e, n) : !(t.min != null && t.min > e || t.max != null && t.max < e || t.interval != null && e % t.interval !== 0);
}
function gr(e, t, n) {
  const r = [], [s, a, o] = t;
  for (let i = s; i <= a; i++)
    (n == null || nE(i, n, e)) && r.push({
      value: i,
      label: Te(i, o)
    });
  return r;
}
function rE(e, t) {
  return {
    milliseconds: gr(
      e,
      hr.milliseconds,
      t.milliseconds
    ),
    seconds: gr(e, hr.seconds, t.seconds),
    minutes: gr(e, hr.minutes, t.minutes),
    hours: gr(e, hr.hours, t.hours)
  };
}
function aE(e, t, n, r) {
  const a = gr(e, t, r).reduce((o, i) => {
    if (i.disabled)
      return o;
    if (isNaN(o))
      return i.value;
    const l = Math.abs(o - n);
    return Math.abs(i.value - n) < l ? i.value : o;
  }, NaN);
  return isNaN(a) ? n : a;
}
function sE(e, t) {
  const n = { ...e };
  return Object.entries(t).forEach(([r, s]) => {
    const a = hr[r], o = e[r];
    n[r] = aE(
      e,
      a,
      o,
      s
    );
  }), n;
}
function oi(e, t, n) {
  return Gl(t, n).map((s) => {
    if (typeof s != "string")
      throw new Error("Invalid mask");
    let a = e;
    if (a.length > 1e3)
      return !1;
    let o = !0;
    const i = {};
    if (s.replace(Wl, (c) => {
      if (Ce[c]) {
        const p = Ce[c], v = a.search(p[0]);
        ~v ? a.replace(p[0], (f) => (p[1](i, f, n), a = a.substr(v + f.length), f)) : o = !1;
      }
      return Ce[c] ? "" : c.slice(1, c.length - 1);
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
function oE(e, t, n) {
  if (e == null)
    return "";
  let r = Gl(t, n)[0];
  /Z$/.test(r) && (n.timezone = "utc");
  const s = [];
  r = r.replace(Ww, (o, i) => (s.push(i), "??"));
  const a = n.getDateParts(e);
  return r = r.replace(
    Wl,
    (o) => o in ti ? ti[o](a, n) : o.slice(1, o.length - 1)
  ), r.replace(/\?\?/g, () => s.shift());
}
const iE = {
  daily: ["year", "month", "day"],
  weekly: ["year", "month", "week"],
  monthly: ["year", "month"]
};
function lE({
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
  } = e, p = o + (o < a ? Je : 0) - a;
  let v = !0, f = !1, O = !1, g = 0;
  const D = new Intl.DateTimeFormat(r.id, {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric"
  });
  let d = t.numDays - p + 1, b = t.numDays - d + 1, k = Math.floor((d - 1) / Je + 1), _ = 1, I = t.numWeeks, N = 1, x = t.month, P = t.year;
  const A = /* @__PURE__ */ new Date(), S = A.getDate(), j = A.getMonth() + 1, Y = A.getFullYear();
  for (let X = 1; X <= jw; X++) {
    for (let K = 1, U = a; K <= Je; K++, U += U === Je ? 1 - Je : 1) {
      v && U === o && (d = 1, b = e.numDays, k = Math.floor((d - 1) / Je + 1), _ = Math.floor((u - d) / Je + 1), I = 1, N = c, x = e.month, P = e.year, v = !1, f = !0);
      const F = r.getDateFromParams(P, x, d, 0, 0, 0, 0), Q = r.getDateFromParams(P, x, d, 12, 0, 0, 0), W = r.getDateFromParams(
        P,
        x,
        d,
        23,
        59,
        59,
        999
      ), V = F, $ = `${Te(P, 4)}-${Te(x, 2)}-${Te(d, 2)}`, q = K, pe = Je - K, Ee = l[X - 1], ee = i[X - 1], De = d === S && x === j && P === Y, he = f && d === 1, Me = f && d === u, $e = X === 1, be = X === c, Ye = K === 1, Re = K === Je, ze = ql(P, x, d);
      s.push({
        locale: r,
        id: $,
        position: ++g,
        label: d.toString(),
        ariaLabel: D.format(new Date(P, x - 1, d)),
        day: d,
        dayFromEnd: b,
        weekday: U,
        weekdayPosition: q,
        weekdayPositionFromEnd: pe,
        weekdayOrdinal: k,
        weekdayOrdinalFromEnd: _,
        week: I,
        weekFromEnd: N,
        weekPosition: X,
        weeknumber: Ee,
        isoWeeknumber: ee,
        month: x,
        year: P,
        date: V,
        startDate: F,
        endDate: W,
        noonDate: Q,
        dayIndex: ze,
        isToday: De,
        isFirstDay: he,
        isLastDay: Me,
        isDisabled: !f,
        isFocusable: !f,
        isFocused: !1,
        inMonth: f,
        inPrevMonth: v,
        inNextMonth: O,
        onTop: $e,
        onBottom: be,
        onLeft: Ye,
        onRight: Re,
        classes: [
          `id-${$}`,
          `day-${d}`,
          `day-from-end-${b}`,
          `weekday-${U}`,
          `weekday-position-${q}`,
          `weekday-ordinal-${k}`,
          `weekday-ordinal-from-end-${_}`,
          `week-${I}`,
          `week-from-end-${N}`,
          {
            "is-today": De,
            "is-first-day": he,
            "is-last-day": Me,
            "in-month": f,
            "in-prev-month": v,
            "in-next-month": O,
            "on-top": $e,
            "on-bottom": be,
            "on-left": Ye,
            "on-right": Re
          }
        ]
      }), f && Me ? (f = !1, O = !0, d = 1, b = u, k = 1, _ = Math.floor((u - d) / Je + 1), I = 1, N = n.numWeeks, x = n.month, P = n.year) : (d++, b--, k = Math.floor((d - 1) / Je + 1), _ = Math.floor((u - d) / Je + 1));
    }
    I++, N--;
  }
  return s;
}
function uE(e, t, n, r) {
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
  }, Array(e.length / Je));
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
function cE(e, t) {
  return e.days.map((n) => ({
    label: t.formatDate(n.date, t.masks.weekdays),
    weekday: n.weekday
  }));
}
function Jl(e, t, n) {
  return Yl(
    n.getDateParts(n.toDate(e)),
    iE[t]
  );
}
function Ql({ day: e, week: t, month: n, year: r }, s, a, o) {
  if (a === "daily" && e) {
    const i = new Date(r, n - 1, e), l = at(i, s);
    return {
      day: l.getDate(),
      month: l.getMonth() + 1,
      year: l.getFullYear()
    };
  } else if (a === "weekly" && t) {
    const l = o.getMonthParts(n, r).firstDayOfMonth, u = at(l, (t - 1 + s) * 7), c = o.getDateParts(u);
    return {
      week: c.week,
      month: c.month,
      year: c.year
    };
  } else {
    const i = new Date(r, n - 1, 1), l = ua(i, s);
    return {
      month: l.getMonth() + 1,
      year: l.getFullYear()
    };
  }
}
function Rt(e) {
  return e != null && e.month != null && e.year != null;
}
function Wa(e, t) {
  return !Rt(e) || !Rt(t) ? !1 : (e = e, t = t, e.year !== t.year ? e.year < t.year : e.month && t.month && e.month !== t.month ? e.month < t.month : e.week && t.week && e.week !== t.week ? e.week < t.week : e.day && t.day && e.day !== t.day ? e.day < t.day : !1);
}
function da(e, t) {
  return !Rt(e) || !Rt(t) ? !1 : (e = e, t = t, e.year !== t.year ? e.year > t.year : e.month && t.month && e.month !== t.month ? e.month > t.month : e.week && t.week && e.week !== t.week ? e.week > t.week : e.day && t.day && e.day !== t.day ? e.day > t.day : !1);
}
function eu(e, t, n) {
  return (e || !1) && !Wa(e, t) && !da(e, n);
}
function dE(e, t) {
  return !e && t || e && !t ? !1 : !e && !t ? !0 : (e = e, t = t, e.year === t.year && e.month === t.month && e.week === t.week && e.day === t.day);
}
function fE(e, t, n, r) {
  if (!Rt(e) || !Rt(t))
    return [];
  const s = [];
  for (; !da(e, t); )
    s.push(e), e = Ql(e, 1, n, r);
  return s;
}
function tu(e) {
  const { day: t, week: n, month: r, year: s } = e;
  let a = `${s}-${Te(r, 2)}`;
  return n && (a = `${a}-w${n}`), t && (a = `${a}-${Te(t, 2)}`), a;
}
function vE(e, t) {
  const { month: n, year: r, showWeeknumbers: s, showIsoWeeknumbers: a } = e, o = new Date(r, n - 1, 15), i = t.getMonthParts(n, r), l = t.getPrevMonthParts(n, r), u = t.getNextMonthParts(n, r), c = lE({ monthComps: i, prevMonthComps: l, nextMonthComps: u }, t), p = uE(c, s, a, t), v = cE(p[0], t);
  return {
    id: tu(e),
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
    weeks: p,
    weekdays: v
  };
}
function pE(e, t) {
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
class ii {
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
class Un {
  constructor(t, n = new fa()) {
    oe(this, "order"), oe(this, "locale"), oe(this, "start", null), oe(this, "end", null), oe(this, "repeat", null);
    var r;
    this.locale = n;
    const { start: s, end: a, span: o, order: i, repeat: l } = t;
    Vn(s) && (this.start = n.getDateParts(s)), Vn(a) ? this.end = n.getDateParts(a) : this.start != null && o && (this.end = n.getDateParts(at(this.start.date, o - 1))), this.order = i ?? 0, l && (this.repeat = new ca(
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
    return (yt(t) ? t : [t]).filter((r) => r).map((r) => Un.from(r, n));
  }
  static from(t, n) {
    if (t instanceof Un)
      return t;
    const r = {
      start: null,
      end: null
    };
    return t != null && (yt(t) ? (r.start = t[0] ?? null, r.end = t[1] ?? null) : qt(t) ? Object.assign(r, t) : (r.start = t, r.end = t)), r.start != null && (r.start = new Date(r.start)), r.end != null && (r.end = new Date(r.end)), new Un(r, n);
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
class mE {
  constructor() {
    oe(this, "records", {});
  }
  render(t, n, r) {
    var s, a, o, i;
    let l = null;
    const u = r[0].dayIndex, c = r[r.length - 1].dayIndex;
    return n.hasRepeat ? r.forEach((p) => {
      var v, f;
      if (n.startsOnDay(p)) {
        const O = n.daySpan < 1 / 0 ? n.daySpan : 1;
        l = {
          startDay: p.dayIndex,
          startTime: ((v = n.start) == null ? void 0 : v.time) ?? 0,
          endDay: p.dayIndex + O - 1,
          endTime: ((f = n.end) == null ? void 0 : f.time) ?? Kr
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
        const l = s === i.startDay, u = s === i.endDay, c = l ? i.startTime : 0, p = new Date(t.startDate.getTime() + c), v = u ? i.endTime : Kr, f = new Date(t.endDate.getTime() + v), O = c === 0 && v === Kr, g = a.order || 0;
        r.push({
          ...i,
          data: a,
          onStart: l,
          onEnd: u,
          startTime: c,
          startDate: p,
          endTime: v,
          endDate: f,
          allDay: O,
          order: g
        });
      });
    }), r.sort((a, o) => a.order - o.order), r;
  }
}
const hE = 12, gE = 5;
function _E(e, t) {
  const n = new Intl.DateTimeFormat().resolvedOptions().locale;
  let r;
  xt(e) ? r = e : Ls(e, "id") && (r = e.id), r = (r || n).toLowerCase();
  const s = Object.keys(t), a = (l) => s.find((u) => u.toLowerCase() === l);
  r = a(r) || a(r.substring(0, 2)) || n;
  const o = {
    ...t["en-IE"],
    ...t[r],
    id: r,
    monthCacheSize: hE,
    pageCacheSize: gE
  };
  return qt(e) ? Nr(e, o) : o;
}
class fa {
  constructor(t = void 0, n) {
    oe(this, "id"), oe(this, "daysInWeek"), oe(this, "firstDayOfWeek"), oe(this, "masks"), oe(this, "timezone"), oe(this, "hourLabels"), oe(this, "dayNames"), oe(this, "dayNamesShort"), oe(this, "dayNamesShorter"), oe(this, "dayNamesNarrow"), oe(this, "monthNames"), oe(this, "monthNamesShort"), oe(this, "relativeTimeNames"), oe(this, "amPm", ["am", "pm"]), oe(this, "monthCache"), oe(this, "pageCache");
    const { id: r, firstDayOfWeek: s, masks: a, monthCacheSize: o, pageCacheSize: i } = _E(t, iw.value);
    this.monthCache = new ii(
      o,
      Zw,
      Jw
    ), this.pageCache = new ii(i, tu, vE), this.id = r, this.daysInWeek = Je, this.firstDayOfWeek = PD(s, 1, Je), this.masks = a, this.timezone = n || void 0, this.hourLabels = this.getHourLabels(), this.dayNames = Aa("long", this.id), this.dayNamesShort = Aa("short", this.id), this.dayNamesShorter = this.dayNamesShort.map((l) => l.substring(0, 2)), this.dayNamesNarrow = Aa("narrow", this.id), this.monthNames = si("long", this.id), this.monthNamesShort = si("short", this.id), this.relativeTimeNames = tE(this.id);
  }
  formatDate(t, n) {
    return oE(t, n, this);
  }
  parseDate(t, n) {
    return oi(t, n, this);
  }
  toDate(t, n = {}) {
    const r = /* @__PURE__ */ new Date(NaN);
    let s = r;
    const { fillDate: a, mask: o, patch: i, rules: l } = n;
    if (Mt(t) ? (n.type = "number", s = /* @__PURE__ */ new Date(+t)) : xt(t) ? (n.type = "string", s = t ? oi(t, o || "iso", this) : r) : Vn(t) ? (n.type = "date", s = new Date(t.getTime())) : Kl(t) && (n.type = "object", s = this.getDateFromParts(t)), s && (i || l)) {
      let u = this.getDateParts(s);
      if (i && a != null) {
        const c = this.getDateParts(this.toDate(a));
        u = this.getDateParts(
          this.toDate({ ...c, ...Yl(u, Uw[i]) })
        );
      }
      l && (u = sE(u, l)), s = this.getDateFromParts(u);
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
    return Un.from(t, this);
  }
  ranges(t) {
    return Un.fromMany(t, this);
  }
  getDateParts(t) {
    return Xw(t, this);
  }
  getDateFromParts(t) {
    return Xl(t, this.timezone);
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
    return pE(t, n);
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
    return eE().map((t) => this.formatDate(t, this.masks.hours));
  }
  getDayId(t) {
    return this.formatDate(t, "YYYY-MM-DD");
  }
}
class nu {
  constructor(t, n, r) {
    oe(this, "key", ""), oe(this, "hashcode", ""), oe(this, "highlight", null), oe(this, "content", null), oe(this, "dot", null), oe(this, "bar", null), oe(this, "event", null), oe(this, "popover", null), oe(this, "customData", null), oe(this, "ranges"), oe(this, "hasRanges", !1), oe(this, "order", 0), oe(this, "pinPage", !1), oe(this, "maxRepeatSpan", 0), oe(this, "locale");
    const { dates: s } = Object.assign(
      this,
      { hashcode: "", order: 0, pinPage: !1 },
      t
    );
    this.key || (this.key = ea()), this.locale = r, n.normalizeGlyphs(this), this.ranges = r.ranges(s ?? []), this.hasRanges = !!Wt(this.ranges), this.maxRepeatSpan = this.ranges.filter((a) => a.hasRepeat).map((a) => a.daySpan).reduce((a, o) => Math.max(a, o), 0);
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
    for (this.maxRepeatSpan > 1 && (a = this.locale.getDateParts(at(a.date, -this.maxRepeatSpan))); a.dayIndex <= n.dayIndex; ) {
      for (const o of s)
        if (o.startsOnDay(a))
          return !0;
      a = this.locale.getDateParts(at(a.date, 1));
    }
    return !1;
  }
}
const ru = "__vc_base_context__", au = {
  color: {
    type: String,
    default: () => dn("color")
  },
  isDark: {
    type: [Boolean, String, Object],
    default: () => dn("isDark")
  },
  firstDayOfWeek: Number,
  masks: Object,
  locale: [String, Object],
  timezone: String,
  minDate: null,
  maxDate: null,
  disabledDates: null
};
function su(e) {
  const t = C(() => e.color ?? ""), n = C(() => e.isDark ?? !1), { displayMode: r } = Vd(n), s = C(() => new VD(t.value)), a = C(() => {
    if (e.locale instanceof fa)
      return e.locale;
    const c = qt(e.locale) ? e.locale : {
      id: e.locale,
      firstDayOfWeek: e.firstDayOfWeek,
      masks: e.masks
    };
    return new fa(c, e.timezone);
  }), o = C(() => a.value.masks), i = C(() => {
    const c = e.disabledDates ?? [];
    return e.minDate != null && c.push({
      start: null,
      end: at(a.value.toDate(e.minDate), -1)
    }), e.maxDate != null && c.push({
      start: at(a.value.toDate(e.maxDate), 1),
      end: null
    }), a.value.ranges(c);
  }), l = C(() => new nu(
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
  return Bn(ru, u), u;
}
function bE(e) {
  return gt(ru, su(e));
}
const yE = (e, t, {
  maxSwipeTime: n,
  minHorizontalSwipeDistance: r,
  maxVerticalSwipeDistance: s
}) => {
  if (!e || !e.addEventListener || !kn(t))
    return null;
  let a = 0, o = 0, i = null, l = !1;
  function u(p) {
    const v = p.changedTouches[0];
    a = v.screenX, o = v.screenY, i = (/* @__PURE__ */ new Date()).getTime(), l = !0;
  }
  function c(p) {
    if (!l || !i)
      return;
    l = !1;
    const v = p.changedTouches[0], f = v.screenX - a, O = v.screenY - o;
    if ((/* @__PURE__ */ new Date()).getTime() - i < n && Math.abs(f) >= r && Math.abs(O) <= s) {
      const D = { toLeft: !1, toRight: !1 };
      f < 0 ? D.toLeft = !0 : D.toRight = !0, t(D);
    }
  }
  return ln(e, "touchstart", u, { passive: !0 }), ln(e, "touchend", c, { passive: !0 }), () => {
    on(e, "touchstart", u), on(e, "touchend", c);
  };
}, qr = {}, DE = (e, t = 10) => {
  qr[e] = Date.now() + t;
}, wE = (e, t) => {
  if (e in qr) {
    const n = qr[e];
    if (Date.now() < n)
      return;
    delete qr[e];
  }
  t();
}, EE = {
  ...au,
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
    default: () => dn("titlePosition")
  },
  navVisibility: {
    type: String,
    default: () => dn("navVisibility")
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
}, $E = [
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
], ou = "__vc_calendar_context__";
function OE(e, { emit: t, slots: n }) {
  const r = ne(null), s = ne(null), a = ne(null), o = ne((/* @__PURE__ */ new Date()).getDate()), i = ne(!1), l = ne(ea()), u = ne(ea()), c = ne(e.view), p = ne([]), v = ne("");
  let f = null, O = null;
  const {
    theme: g,
    color: D,
    displayMode: d,
    locale: b,
    masks: k,
    disabledAttribute: _,
    disabledDates: I
  } = bE(e), N = C(() => e.rows * e.columns), x = C(() => e.step || N.value), P = C(() => xl(p.value) ?? null), A = C(() => Yn(p.value) ?? null), S = C(
    () => e.minPage || (e.minDate ? q(e.minDate) : null)
  ), j = C(
    () => e.maxPage || (e.maxDate ? q(e.maxDate) : null)
  ), Y = C(() => e.navVisibility), X = C(() => !!e.showWeeknumbers), K = C(() => !!e.showIsoWeeknumbers), U = C(() => c.value === "monthly"), F = C(() => c.value === "weekly"), Q = C(() => c.value === "daily"), W = () => {
    i.value = !0, t("transition-start");
  }, V = () => {
    i.value = !1, t("transition-end"), f && (f.resolve(!0), f = null);
  }, $ = (B, z, de = c.value) => Ql(B, z, de, b.value), q = (B) => Jl(B, c.value, b.value), pe = (B) => {
    !_.value || !$e.value || (B.isDisabled = $e.value.cellExists(
      _.value.key,
      B.dayIndex
    ));
  }, Ee = (B) => {
    B.isFocusable = B.inMonth && B.day === o.value;
  }, ee = (B, z) => {
    for (const de of B)
      for (const M of de.days)
        if (z(M) === !1)
          return;
  }, De = C(
    () => p.value.reduce((B, z) => (B.push(...z.viewDays), B), [])
  ), he = C(() => {
    const B = [];
    return (e.attributes || []).forEach((z, de) => {
      if (!z || !z.dates)
        return;
      const M = Ls(z, "key") ? z.key : de, G = z.order || 0;
      B.push(
        new nu(
          {
            ...z,
            key: M,
            order: G
          },
          g.value,
          b.value
        )
      );
    }), _.value && B.push(_.value), B;
  }), Me = C(() => Wt(he.value)), $e = C(() => {
    const B = new mE();
    return he.value.forEach((z) => {
      z.ranges.forEach((de) => {
        B.render(z, de, De.value);
      });
    }), B;
  }), be = C(() => De.value.reduce((B, z) => (B[z.dayIndex] = { day: z, cells: [] }, B[z.dayIndex].cells.push(...$e.value.getCells(z)), B), {})), Ye = (B, z) => {
    const de = e.showWeeknumbers || e.showIsoWeeknumbers;
    return de == null ? "" : Nf(de) ? de ? "left" : "" : de.startsWith("right") ? z > 1 ? "right" : de : B > 1 ? "left" : de;
  }, Re = () => {
    var B, z;
    if (!Me.value)
      return null;
    const de = he.value.find((ue) => ue.pinPage) || he.value[0];
    if (!de || !de.hasRanges)
      return null;
    const [M] = de.ranges, G = ((B = M.start) == null ? void 0 : B.date) || ((z = M.end) == null ? void 0 : z.date);
    return G ? q(G) : null;
  }, ze = () => {
    if (Rt(P.value))
      return P.value;
    const B = Re();
    return Rt(B) ? B : q(/* @__PURE__ */ new Date());
  }, y = (B, z = {}) => {
    const { view: de = c.value, position: M = 1, force: G } = z, ue = M > 0 ? 1 - M : -(N.value + M);
    let we = $(B, ue, de), We = $(we, N.value - 1, de);
    return G || (Wa(we, S.value) ? we = S.value : da(We, j.value) && (we = $(j.value, 1 - N.value)), We = $(we, N.value - 1)), { fromPage: we, toPage: We };
  }, m = (B, z, de = "") => {
    if (de === "none" || de === "fade")
      return de;
    if ((B == null ? void 0 : B.view) !== (z == null ? void 0 : z.view))
      return "fade";
    const M = da(z, B), G = Wa(z, B);
    return !M && !G ? "fade" : de === "slide-v" ? G ? "slide-down" : "slide-up" : G ? "slide-right" : "slide-left";
  }, L = (B = {}) => new Promise((z, de) => {
    const { position: M = 1, force: G = !1, transition: ue } = B, we = Rt(B.page) ? B.page : ze(), { fromPage: We } = y(we, {
      position: M,
      force: G
    }), Ot = [];
    for (let st = 0; st < N.value; st++) {
      const In = $(We, st), ur = st + 1, xr = Math.ceil(ur / e.columns), pt = e.rows - xr + 1, Rr = ur % e.columns || e.columns, cr = e.columns - Rr + 1, Ta = Ye(Rr, cr);
      Ot.push(
        b.value.getPage({
          ...In,
          view: c.value,
          titlePosition: e.titlePosition,
          trimWeeks: e.trimWeeks,
          position: ur,
          row: xr,
          rowFromEnd: pt,
          column: Rr,
          columnFromEnd: cr,
          showWeeknumbers: X.value,
          showIsoWeeknumbers: K.value,
          weeknumberPosition: Ta
        })
      );
    }
    v.value = m(
      p.value[0],
      Ot[0],
      ue
    ), p.value = Ot, v.value && v.value !== "none" ? f = {
      resolve: z,
      reject: de
    } : z(!0);
  }), Z = (B) => {
    const z = P.value ?? q(/* @__PURE__ */ new Date());
    return $(z, B);
  }, ie = (B, z = {}) => {
    const de = Rt(B) ? B : q(B);
    return Object.assign(
      z,
      y(de, {
        ...z,
        force: !0
      })
    ), fE(
      z.fromPage,
      z.toPage,
      c.value,
      b.value
    ).map((G) => eu(G, S.value, j.value)).every((G) => G);
  }, ge = (B, z = {}) => ie(Z(B), z), Ze = C(() => ge(-x.value)), Ue = C(() => ge(x.value)), vt = async (B, z = {}) => !z.force && !ie(B, z) ? !1 : (z.fromPage && !dE(z.fromPage, P.value) && (s.value && s.value.hide({ hideDelay: 0 }), z.view && (DE("view", 10), c.value = z.view), await L({
    ...z,
    page: z.fromPage,
    position: 1,
    force: !0
  }), t("did-move", p.value)), !0), Pt = (B, z = {}) => vt(Z(B), z), Ne = () => Pt(-x.value), R = () => Pt(x.value), H = (B) => {
    const z = U.value ? ".in-month" : "", de = `.id-${b.value.getDayId(B)}${z}`, M = `${de}.vc-focusable, ${de} .vc-focusable`, G = r.value;
    if (G) {
      const ue = G.querySelector(M);
      if (ue)
        return ue.focus(), !0;
    }
    return !1;
  }, Fe = async (B, z = {}) => H(B) ? !0 : (await vt(B, z), H(B)), Ve = (B, z) => {
    o.value = B.day, t("dayclick", B, z);
  }, At = (B, z) => {
    t("daymouseenter", B, z);
  }, en = (B, z) => {
    t("daymouseleave", B, z);
  }, Et = (B, z) => {
    o.value = B.day, a.value = B, B.isFocused = !0, t("dayfocusin", B, z);
  }, $t = (B, z) => {
    a.value = null, B.isFocused = !1, t("dayfocusout", B, z);
  }, gn = (B, z) => {
    t("daykeydown", B, z);
    const de = B.noonDate;
    let M = null;
    switch (z.key) {
      case "ArrowLeft": {
        M = at(de, -1);
        break;
      }
      case "ArrowRight": {
        M = at(de, 1);
        break;
      }
      case "ArrowUp": {
        M = at(de, -7);
        break;
      }
      case "ArrowDown": {
        M = at(de, 7);
        break;
      }
      case "Home": {
        M = at(de, -B.weekdayPosition + 1);
        break;
      }
      case "End": {
        M = at(de, B.weekdayPositionFromEnd);
        break;
      }
      case "PageUp": {
        z.altKey ? M = Qo(de, -1) : M = ua(de, -1);
        break;
      }
      case "PageDown": {
        z.altKey ? M = Qo(de, 1) : M = ua(de, 1);
        break;
      }
    }
    M && (z.preventDefault(), Fe(M).catch());
  }, Mn = (B) => {
    const z = a.value;
    z != null && gn(z, B);
  }, Na = (B, z) => {
    t("weeknumberclick", B, z);
  };
  L({
    page: e.initialPage,
    position: e.initialPagePosition
  }), vn(() => {
    !e.disablePageSwipe && r.value && (O = yE(
      r.value,
      ({ toLeft: B = !1, toRight: z = !1 }) => {
        B ? R() : z && Ne();
      },
      dn("touch")
    ));
  }), Ir(() => {
    p.value = [], O && O();
  }), ke(
    () => b.value,
    () => {
      L();
    }
  ), ke(
    () => N.value,
    () => L()
  ), ke(
    () => e.view,
    () => c.value = e.view
  ), ke(
    () => c.value,
    () => {
      wE("view", () => {
        L();
      }), t("update:view", c.value);
    }
  ), ke(
    () => o.value,
    () => {
      ee(p.value, (B) => Ee(B));
    }
  ), ss(() => {
    t("update:pages", p.value), ee(p.value, (B) => {
      pe(B), Ee(B);
    });
  });
  const Sr = {
    emit: t,
    slots: n,
    containerRef: r,
    navPopoverRef: s,
    focusedDay: a,
    inTransition: i,
    navPopoverId: l,
    dayPopoverId: u,
    view: c,
    pages: p,
    transitionName: v,
    theme: g,
    color: D,
    displayMode: d,
    locale: b,
    masks: k,
    attributes: he,
    disabledAttribute: _,
    disabledDates: I,
    attributeContext: $e,
    days: De,
    dayCells: be,
    count: N,
    step: x,
    firstPage: P,
    lastPage: A,
    canMovePrev: Ze,
    canMoveNext: Ue,
    minPage: S,
    maxPage: j,
    isMonthly: U,
    isWeekly: F,
    isDaily: Q,
    navVisibility: Y,
    showWeeknumbers: X,
    showIsoWeeknumbers: K,
    getDateAddress: q,
    canMove: ie,
    canMoveBy: ge,
    move: vt,
    moveBy: Pt,
    movePrev: Ne,
    moveNext: R,
    onTransitionBeforeEnter: W,
    onTransitionAfterEnter: V,
    tryFocusDate: H,
    focusDate: Fe,
    onKeydown: Mn,
    onDayKeydown: gn,
    onDayClick: Ve,
    onDayMouseenter: At,
    onDayMouseleave: en,
    onDayFocusin: Et,
    onDayFocusout: $t,
    onWeeknumberClick: Na
  };
  return Bn(ou, Sr), Sr;
}
function Tn() {
  const e = gt(ou);
  if (e)
    return e;
  throw new Error(
    "Calendar context missing. Please verify this component is nested within a valid context provider."
  );
}
const kE = {
  inheritAttrs: !1
}, jn = /* @__PURE__ */ Pe({
  ...kE,
  __name: "CalendarSlot",
  props: {
    name: null
  },
  setup(e) {
    const { slots: t } = Tn();
    return (n, r) => h(t)[e.name] ? (E(), Ke(Ui(h(t)[e.name]), ji(Qn({ key: 0 }, n.$attrs)), null, 16)) : Ft(n.$slots, "default", { key: 1 });
  }
});
function Ga(e) {
  document && document.dispatchEvent(
    new CustomEvent("show-popover", {
      detail: e
    })
  );
}
function va(e) {
  document && document.dispatchEvent(
    new CustomEvent("hide-popover", {
      detail: e
    })
  );
}
function iu(e) {
  document && document.dispatchEvent(
    new CustomEvent("toggle-popover", {
      detail: e
    })
  );
}
function lu(e) {
  const { visibility: t } = e, n = t === "click", r = t === "hover", s = t === "hover-focus", a = t === "focus";
  e.autoHide = !n;
  let o = !1, i = !1;
  const l = (O) => {
    n && (iu({
      ...e,
      target: e.target || O.currentTarget
    }), O.stopPropagation());
  }, u = (O) => {
    o || (o = !0, (r || s) && Ga({
      ...e,
      target: e.target || O.currentTarget
    }));
  }, c = () => {
    o && (o = !1, (r || s && !i) && va(e));
  }, p = (O) => {
    i || (i = !0, (a || s) && Ga({
      ...e,
      target: e.target || O.currentTarget
    }));
  }, v = (O) => {
    i && !Wr(O.currentTarget, O.relatedTarget) && (i = !1, (a || s && !o) && va(e));
  }, f = {};
  switch (e.visibility) {
    case "click":
      f.click = l;
      break;
    case "hover":
      f.mousemove = u, f.mouseleave = c;
      break;
    case "focus":
      f.focusin = p, f.focusout = v;
      break;
    case "hover-focus":
      f.mousemove = u, f.mouseleave = c, f.focusin = p, f.focusout = v;
      break;
  }
  return f;
}
const li = (e) => {
  const t = Qr(e);
  if (t == null)
    return;
  const n = t.popoverHandlers;
  !n || !n.length || (n.forEach((r) => r()), delete t.popoverHandlers);
}, ui = (e, t) => {
  const n = Qr(e);
  if (n == null)
    return;
  const r = [], s = lu(t);
  Object.entries(s).forEach(([a, o]) => {
    r.push(ln(n, a, o));
  }), n.popoverHandlers = r;
}, uu = {
  mounted(e, t) {
    const { value: n } = t;
    n && ui(e, n);
  },
  updated(e, t) {
    const { oldValue: n, value: r } = t, s = n == null ? void 0 : n.visibility, a = r == null ? void 0 : r.visibility;
    s !== a && (s && (li(e), a || va(n)), a && ui(e, r));
  },
  unmounted(e) {
    li(e);
  }
}, NE = ["disabled"], TE = {
  key: 1,
  type: "button",
  class: "vc-title"
}, ME = ["disabled"], cu = /* @__PURE__ */ Pe({
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
    } = Tn(), l = C(() => {
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
    }), c = C(() => t.page.titlePosition.includes("left")), p = C(() => t.page.titlePosition.includes("right")), v = C(() => t.layout ? t.layout : c.value ? "tu-pn" : p.value ? "pn-tu" : "p-tu-n;"), f = C(() => ({
      prev: v.value.includes("p") && !t.hideArrows,
      title: v.value.includes("t") && !t.hideTitle,
      next: v.value.includes("n") && !t.hideArrows
    })), O = C(() => ({ gridTemplateColumns: v.value.split("").map((D) => {
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
    return (g, D) => (E(), T("div", {
      class: He(["vc-header", { "is-lg": e.isLg, "is-xl": e.isXl, "is-2xl": e.is2xl }]),
      style: _r(h(O))
    }, [
      h(f).prev ? (E(), T("button", {
        key: 0,
        type: "button",
        class: "vc-arrow vc-prev vc-focus",
        disabled: !h(s),
        onClick: D[0] || (D[0] = //@ts-ignore
        (...d) => h(a) && h(a)(...d)),
        onKeydown: D[1] || (D[1] = Zs(
          //@ts-ignore
          (...d) => h(a) && h(a)(...d),
          ["space", "enter"]
        ))
      }, [
        ve(jn, {
          name: "header-prev-button",
          disabled: !h(s)
        }, {
          default: qe(() => [
            ve(qn, {
              name: "ChevronLeft",
              size: "24"
            })
          ]),
          _: 1
        }, 8, ["disabled"])
      ], 40, NE)) : J("", !0),
      h(f).title ? Ie((E(), T("button", TE, [
        ve(jn, {
          name: "header-title",
          title: e.page.title
        }, {
          default: qe(() => [
            w("span", null, le(e.page.title), 1)
          ]),
          _: 1
        }, 8, ["title"])
      ])), [
        [h(uu), h(u)]
      ]) : J("", !0),
      h(f).next ? (E(), T("button", {
        key: 2,
        type: "button",
        class: "vc-arrow vc-next vc-focus",
        disabled: !h(o),
        onClick: D[2] || (D[2] = //@ts-ignore
        (...d) => h(i) && h(i)(...d)),
        onKeydown: D[3] || (D[3] = Zs(
          //@ts-ignore
          (...d) => h(i) && h(i)(...d),
          ["space", "enter"]
        ))
      }, [
        ve(jn, {
          name: "header-next-button",
          disabled: !h(o)
        }, {
          default: qe(() => [
            ve(qn, {
              name: "ChevronRight",
              size: "24"
            })
          ]),
          _: 1
        }, 8, ["disabled"])
      ], 40, ME)) : J("", !0)
    ], 6));
  }
}), IE = Pe({
  directives: { popover: uu },
  components: { CalendarSlot: jn },
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
      onDayKeydown: p
    } = Tn(), v = C(() => e.day), f = C(() => r.value.getCells(v.value)), O = C(
      () => f.value.map((U) => U.data)
    ), g = C(() => ({
      ...v.value,
      attributes: O.value,
      attributeCells: f.value
    }));
    function D({ data: U }, { popovers: F }) {
      const { key: Q, customData: W, popover: V } = U;
      if (!V)
        return;
      const $ = Bo(
        {
          key: Q,
          customData: W,
          attribute: U
        },
        { ...V },
        {
          visibility: V.label ? "hover" : "click",
          placement: "bottom",
          isInteractive: !V.label
        }
      );
      F.splice(0, 0, $);
    }
    const d = C(() => {
      const U = {
        ...n.value.prepareRender({}),
        popovers: []
      };
      return f.value.forEach((F) => {
        n.value.render(F, U), D(F, U);
      }), U;
    }), b = C(() => d.value.highlights), k = C(() => !!Wt(b.value)), _ = C(() => d.value.content), I = C(() => d.value.dots), N = C(() => !!Wt(I.value)), x = C(() => d.value.bars), P = C(() => !!Wt(x.value)), A = C(() => d.value.popovers), S = C(
      () => A.value.map((U) => U.attribute)
    ), j = C(() => [
      "vc-day",
      ...v.value.classes,
      { "vc-day-box-center-center": !a["day-content"] },
      { "is-not-in-month": !e.day.inMonth }
    ]), Y = C(() => {
      let U;
      v.value.isFocusable ? U = "0" : U = "-1";
      const F = [
        "vc-day-content vc-focusable vc-focus vc-attr",
        { "vc-disabled": v.value.isDisabled },
        bn(Yn(b.value), "contentClass"),
        bn(Yn(_.value), "class") || ""
      ], Q = {
        ...bn(Yn(b.value), "contentStyle"),
        ...bn(Yn(_.value), "style")
      };
      return {
        class: F,
        style: Q,
        tabindex: U,
        "aria-label": v.value.ariaLabel,
        "aria-disabled": !!v.value.isDisabled,
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
        p(g.value, U);
      }
    })), K = C(() => Wt(A.value) ? Bo(
      {
        id: s.value,
        data: { day: v, attributes: S.value }
      },
      ...A.value
    ) : null);
    return {
      attributes: O,
      attributeCells: f,
      bars: x,
      dayClasses: j,
      dayContentProps: Y,
      dayContentEvents: X,
      dayPopover: K,
      glyphs: d,
      dots: I,
      hasDots: N,
      hasBars: P,
      highlights: b,
      hasHighlights: k,
      locale: t,
      popovers: A
    };
  }
}), CE = {
  key: 0,
  class: "vc-highlights vc-day-layer"
}, PE = {
  key: 1,
  class: "vc-day-layer vc-day-box-center-bottom"
}, AE = { class: "vc-dots" }, LE = {
  key: 2,
  class: "vc-day-layer vc-day-box-center-bottom"
}, SE = { class: "vc-bars" };
function xE(e, t, n, r, s, a) {
  const o = un("CalendarSlot"), i = Uu("popover");
  return E(), T("div", {
    class: He(e.dayClasses)
  }, [
    e.hasHighlights ? (E(), T("div", CE, [
      (E(!0), T(te, null, me(e.highlights, ({ key: l, wrapperClass: u, class: c, style: p }) => (E(), T("div", {
        key: l,
        class: He(u)
      }, [
        w("div", {
          class: He(c),
          style: _r(p)
        }, null, 6)
      ], 2))), 128))
    ])) : J("", !0),
    ve(o, {
      name: "day-content",
      day: e.day,
      attributes: e.attributes,
      "attribute-cells": e.attributeCells,
      dayProps: e.dayContentProps,
      dayEvents: e.dayContentEvents,
      locale: e.locale
    }, {
      default: qe(() => [
        Ie((E(), T("div", Qn(e.dayContentProps, ju(e.dayContentEvents, !0)), [
          Cr(le(e.day.label), 1)
        ], 16)), [
          [i, e.dayPopover]
        ])
      ]),
      _: 1
    }, 8, ["day", "attributes", "attribute-cells", "dayProps", "dayEvents", "locale"]),
    e.hasDots ? (E(), T("div", PE, [
      w("div", AE, [
        (E(!0), T(te, null, me(e.dots, ({ key: l, class: u, style: c }) => (E(), T("span", {
          key: l,
          class: He(u),
          style: _r(c)
        }, null, 6))), 128))
      ])
    ])) : J("", !0),
    e.hasBars ? (E(), T("div", LE, [
      w("div", SE, [
        (E(!0), T(te, null, me(e.bars, ({ key: l, class: u, style: c }) => (E(), T("span", {
          key: l,
          class: He(u),
          style: _r(c)
        }, null, 6))), 128))
      ])
    ])) : J("", !0)
  ], 2);
}
const RE = /* @__PURE__ */ Xt(IE, [["render", xE]]), YE = {
  name: "CalendarPane",
  inheritAttrs: !1,
  components: { CalendarHeader: cu, CalendarDay: RE },
  props: {
    page: { type: Object, required: !0 }
  },
  setup() {
    const { onWeeknumberClick: e } = Tn();
    return {
      onWeeknumberClick: e
    };
  }
}, FE = { class: "vc-weekdays" }, VE = ["onClick"];
function UE(e, t, n, r, s, a) {
  const o = un("CalendarHeader"), i = un("CalendarDay");
  return E(), T("div", {
    class: He([
      "vc-pane",
      `row-${n.page.row}`,
      `row-from-end-${n.page.rowFromEnd}`,
      `column-${n.page.column}`,
      `column-from-end-${n.page.columnFromEnd}`
    ]),
    ref: "pane"
  }, [
    ve(o, {
      page: n.page,
      "is-lg": "",
      "hide-arrows": ""
    }, null, 8, ["page"]),
    w("div", {
      class: He(["vc-weeks", {
        [`vc-show-weeknumbers-${n.page.weeknumberPosition}`]: n.page.weeknumberPosition
      }])
    }, [
      w("div", FE, [
        (E(!0), T(te, null, me(n.page.weekdays, ({ weekday: l, label: u }, c) => (E(), T("div", {
          key: c,
          class: He(`vc-weekday vc-weekday-${l}`)
        }, le(u), 3))), 128))
      ]),
      (E(!0), T(te, null, me(n.page.viewWeeks, (l) => (E(), T("div", {
        key: `weeknumber-${l.weeknumber}`,
        class: "vc-week"
      }, [
        n.page.weeknumberPosition ? (E(), T("div", {
          key: 0,
          class: He(["vc-weeknumber", `is-${n.page.weeknumberPosition}`])
        }, [
          w("span", {
            class: He(["vc-weeknumber-content"]),
            onClick: (u) => r.onWeeknumberClick(l, u)
          }, le(l.weeknumberDisplay), 9, VE)
        ], 2)) : J("", !0),
        (E(!0), T(te, null, me(l.days, (u) => (E(), Ke(i, {
          key: u.id,
          day: u
        }, null, 8, ["day"]))), 128))
      ]))), 128))
    ], 2)
  ], 2);
}
const jE = /* @__PURE__ */ Xt(YE, [["render", UE]]), BE = Pe({
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
    const o = os({
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
    function p() {
      a && (a.destroy(), a = null);
    }
    function v() {
      Ln(() => {
        const $ = Qr(o.target);
        !$ || !r.value || (a && a.state.elements.reference !== $ && p(), a ? a.update() : a = dd(
          $,
          r.value,
          u.value
        ));
      });
    }
    function f($) {
      Object.assign(o, Rl($, "force"));
    }
    function O($, q) {
      clearTimeout(n), $ > 0 ? n = setTimeout(q, $) : q();
    }
    function g($) {
      return !$ || !a ? !1 : Qr($) === a.state.elements.reference;
    }
    async function D($ = {}) {
      o.force || ($.force && (o.force = !0), O($.showDelay ?? e.showDelay, () => {
        o.isVisible && (o.force = !1, t("after-show")), f({
          ...$,
          isVisible: !0
        }), v();
      }));
    }
    function d($ = {}) {
      a && ($.target && !g($.target) || o.force || ($.force && (o.force = !0), O($.hideDelay ?? e.hideDelay, () => {
        o.isVisible || (o.force = !1), o.isVisible = !1;
      })));
    }
    function b($ = {}) {
      $.target != null && (o.isVisible && g($.target) ? d($) : D($));
    }
    function k($) {
      if (!a)
        return;
      const q = a.state.elements.reference;
      if (!r.value || !q)
        return;
      const pe = $.target;
      Wr(r.value, pe) || Wr(q, pe) || d({ force: !0 });
    }
    function _($) {
      ($.key === "Esc" || $.key === "Escape") && d();
    }
    function I({ detail: $ }) {
      !$.id || $.id !== e.id || D($);
    }
    function N({ detail: $ }) {
      !$.id || $.id !== e.id || d($);
    }
    function x({ detail: $ }) {
      !$.id || $.id !== e.id || b($);
    }
    function P() {
      ln(document, "keydown", _), ln(document, "click", k), ln(document, "show-popover", I), ln(document, "hide-popover", N), ln(document, "toggle-popover", x);
    }
    function A() {
      on(document, "keydown", _), on(document, "click", k), on(document, "show-popover", I), on(document, "hide-popover", N), on(document, "toggle-popover", x);
    }
    function S($) {
      t("before-show", $);
    }
    function j($) {
      o.force = !1, t("after-show", $);
    }
    function Y($) {
      t("before-hide", $);
    }
    function X($) {
      o.force = !1, p(), t("after-hide", $);
    }
    function K($) {
      $.stopPropagation();
    }
    function U() {
      o.isHovered = !0, o.isInteractive && ["hover", "hover-focus"].includes(o.visibility) && D();
    }
    function F() {
      if (o.isHovered = !1, !a)
        return;
      const $ = a.state.elements.reference;
      o.autoHide && !o.isFocused && (!$ || $ !== document.activeElement) && ["hover", "hover-focus"].includes(o.visibility) && d();
    }
    function Q() {
      o.isFocused = !0, o.isInteractive && ["focus", "hover-focus"].includes(o.visibility) && D();
    }
    function W($) {
      ["focus", "hover-focus"].includes(o.visibility) && (!$.relatedTarget || !Wr(r.value, $.relatedTarget)) && (o.isFocused = !1, !o.isHovered && o.autoHide && d());
    }
    function V() {
      s != null && (s.disconnect(), s = null);
    }
    return ke(
      () => r.value,
      ($) => {
        V(), $ && (s = new ResizeObserver(() => {
          a && a.update();
        }), s.observe($));
      }
    ), ke(() => o.placement, i, {
      immediate: !0
    }), vn(() => {
      P();
    }), Ir(() => {
      p(), V(), A();
    }), {
      ...Fu(o),
      popoverRef: r,
      alignment: c,
      hide: d,
      setupPopper: v,
      beforeEnter: S,
      afterEnter: j,
      beforeLeave: Y,
      afterLeave: X,
      onClick: K,
      onMouseOver: U,
      onMouseLeave: F,
      onFocusIn: Q,
      onFocusOut: W
    };
  }
});
function HE(e, t, n, r, s, a) {
  return E(), T("div", {
    class: He(["vc-popover-content-wrapper", { "is-interactive": e.isInteractive }]),
    ref: "popoverRef",
    onClick: t[0] || (t[0] = (...o) => e.onClick && e.onClick(...o)),
    onMouseover: t[1] || (t[1] = (...o) => e.onMouseOver && e.onMouseOver(...o)),
    onMouseleave: t[2] || (t[2] = (...o) => e.onMouseLeave && e.onMouseLeave(...o)),
    onFocusin: t[3] || (t[3] = (...o) => e.onFocusIn && e.onFocusIn(...o)),
    onFocusout: t[4] || (t[4] = (...o) => e.onFocusOut && e.onFocusOut(...o))
  }, [
    ve(Bi, {
      name: `vc-${e.transition}`,
      appear: "",
      onBeforeEnter: e.beforeEnter,
      onAfterEnter: e.afterEnter,
      onBeforeLeave: e.beforeLeave,
      onAfterLeave: e.afterLeave
    }, {
      default: qe(() => [
        e.isVisible ? (E(), T("div", Qn({
          key: 0,
          tabindex: "-1",
          class: `vc-popover-content direction-${e.direction}`
        }, e.$attrs), [
          Ft(e.$slots, "default", {
            direction: e.direction,
            alignment: e.alignment,
            data: e.data,
            hide: e.hide
          }, () => [
            Cr(le(e.data), 1)
          ]),
          w("span", {
            class: He([
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
const Fs = /* @__PURE__ */ Xt(BE, [["render", HE]]), WE = {
  value: { type: Object, required: !0 }
}, GE = ["input"], KE = "__vc_calendar_nav_context__";
function qE(e, { emit: t }) {
  const n = ne(!0), r = ne(0), s = ne(0), a = 12, o = ne(null), { locale: i, masks: l, canMove: u, getDateAddress: c } = Tn();
  function p() {
    setTimeout(() => {
      if (o.value == null)
        return;
      const ee = o.value.querySelector(
        ".vc-nav-item:not(:disabled)"
      );
      ee && ee.focus();
    }, 10);
  }
  function v(ee, De) {
    t("input", { month: ee, year: De }, { position: S.value });
  }
  function f(ee) {
    r.value = ee, n.value = !0, p();
  }
  function O(ee) {
    const { year: De } = c(/* @__PURE__ */ new Date()), he = ee * a, Me = he + a, $e = [];
    for (let be = he; be < Me; be += 1) {
      let Ye = !1;
      for (let Re = 1; Re < 12 && (Ye = u({ month: Re, year: be }, { position: S.value }), !Ye); Re++)
        ;
      $e.push({
        year: be,
        id: be.toString(),
        label: be.toString(),
        ariaLabel: be.toString(),
        isActive: be === A.value,
        isCurrent: be === De,
        isDisabled: !Ye,
        click: () => f(be)
      });
    }
    return $e;
  }
  function g(ee) {
    const { month: De, year: he } = c(/* @__PURE__ */ new Date());
    return Zl().map((Me, $e) => {
      const be = $e + 1;
      return {
        month: be,
        year: ee,
        id: `${ee}.${Te(be, 2)}`,
        label: i.value.formatDate(Me, l.value.navMonths),
        ariaLabel: i.value.formatDate(Me, "MMMM YYYY"),
        isActive: be === P.value && ee === A.value,
        isCurrent: be === De && ee === he,
        isDisabled: !u(
          { month: be, year: ee },
          { position: S.value }
        ),
        click: () => v(be, ee)
      };
    });
  }
  function D(ee) {
    return Math.floor(ee / a);
  }
  function d() {
    n.value = !n.value;
  }
  function b() {
    W.value && (n.value && _(), N());
  }
  function k() {
    q.value && (n.value && I(), x());
  }
  function _() {
    r.value--;
  }
  function I() {
    r.value++;
  }
  function N() {
    s.value--;
  }
  function x() {
    s.value++;
  }
  const P = C(() => {
    var ee;
    return ((ee = e.value) == null ? void 0 : ee.month) || 0;
  }), A = C(() => {
    var ee;
    return ((ee = e.value) == null ? void 0 : ee.year) || 0;
  }), S = C(() => {
    var ee;
    return ((ee = e.value) == null ? void 0 : ee.position) || 1;
  }), j = C(() => g(r.value)), Y = C(() => O(s.value)), X = C(() => xl(Y.value.map((ee) => ee.year))), K = C(() => Yn(Y.value.map((ee) => ee.year))), U = C(() => n.value ? r.value : `${X.value} - ${K.value}`), F = C(
    () => g(r.value - 1).some((ee) => !ee.isDisabled)
  ), Q = C(
    () => O(s.value - 1).some((ee) => !ee.isDisabled)
  ), W = C(
    () => n.value ? F.value : Q.value
  ), V = C(
    () => g(r.value + 1).some((ee) => !ee.isDisabled)
  ), $ = C(
    () => O(s.value + 1).some((ee) => !ee.isDisabled)
  ), q = C(
    () => n.value ? V.value : $.value
  ), pe = C(
    () => n.value ? j.value : Y.value
  );
  ke(
    () => A.value,
    () => {
      r.value = A.value;
    }
  ), ke(
    () => r.value,
    (ee) => {
      s.value = D(ee);
    }
  ), r.value = A.value, vn(() => p());
  const Ee = {
    navContainer: o,
    title: U,
    monthMode: n,
    currentMonth: P,
    currentYear: A,
    activeItems: pe,
    prevItemsEnabled: W,
    nextItemsEnabled: q,
    toggleMode: d,
    movePrev: b,
    moveNext: k,
    movePrevYear: _,
    moveNextYear: I,
    movePrevYearGroup: N,
    moveNextYearGroup: x
  };
  return Bn(KE, Ee), Ee;
}
const zE = { class: "vc-nav-header" }, XE = ["disabled"], ZE = ["disabled"], JE = { class: "vc-nav-items" }, QE = ["data-id", "aria-label", "disabled", "onClick", "onKeydown"], e$ = /* @__PURE__ */ Pe({
  __name: "CalendarNav",
  props: WE,
  emits: GE,
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
    } = qE(n, { emit: t });
    return (p, v) => (E(), T("div", {
      class: "vc-nav-container",
      ref_key: "navContainer",
      ref: r
    }, [
      w("div", zE, [
        w("button", {
          type: "button",
          class: "vc-nav-arrow is-left vc-focus",
          disabled: !h(a),
          onClick: v[0] || (v[0] = //@ts-ignore
          (...f) => h(u) && h(u)(...f)),
          onKeydown: v[1] || (v[1] = (f) => h(Ur)(f, h(u)))
        }, [
          ve(jn, {
            name: "nav-prev-button",
            move: h(u),
            disabled: !h(a)
          }, {
            default: qe(() => [
              ve(qn, {
                name: "ChevronLeft",
                width: "22px",
                height: "24px"
              })
            ]),
            _: 1
          }, 8, ["move", "disabled"])
        ], 40, XE),
        w("button", {
          type: "button",
          class: "vc-nav-title vc-focus",
          onClick: v[2] || (v[2] = //@ts-ignore
          (...f) => h(l) && h(l)(...f)),
          onKeydown: v[3] || (v[3] = (f) => h(Ur)(f, h(l)))
        }, le(h(s)), 33),
        w("button", {
          type: "button",
          class: "vc-nav-arrow is-right vc-focus",
          disabled: !h(o),
          onClick: v[4] || (v[4] = //@ts-ignore
          (...f) => h(c) && h(c)(...f)),
          onKeydown: v[5] || (v[5] = (f) => h(Ur)(f, h(c)))
        }, [
          ve(jn, {
            name: "nav-next-button",
            move: h(c),
            disabled: !h(o)
          }, {
            default: qe(() => [
              ve(qn, {
                name: "ChevronRight",
                width: "22px",
                height: "24px"
              })
            ]),
            _: 1
          }, 8, ["move", "disabled"])
        ], 40, ZE)
      ]),
      w("div", JE, [
        (E(!0), T(te, null, me(h(i), (f) => (E(), T("button", {
          key: f.label,
          type: "button",
          "data-id": f.id,
          "aria-label": f.ariaLabel,
          class: He(["vc-nav-item vc-focus", [
            f.isActive ? "is-active" : f.isCurrent ? "is-current" : ""
          ]]),
          disabled: f.isDisabled,
          onClick: f.click,
          onKeydown: (O) => h(Ur)(O, f.click)
        }, le(f.label), 43, QE))), 128))
      ])
    ], 512));
  }
}), t$ = {
  __name: "CalendarNavPopover",
  setup(e) {
    const { navPopoverId: t, color: n, displayMode: r, navPopoverRef: s, move: a } = Tn();
    return (o, i) => (E(), Ke(Fs, {
      id: h(t),
      class: He(["vc-nav-popover-container", `vc-${h(n)}`, `vc-${h(r)}`]),
      ref_key: "navPopoverRef",
      ref: s
    }, {
      default: qe(({ data: l }) => [
        ve(e$, {
          value: l.page,
          onInput: h(a)
        }, null, 8, ["value", "onInput"])
      ]),
      _: 1
    }, 8, ["id", "class"]));
  }
}, n$ = Pe({
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
}), r$ = { class: "vc-day-popover-row" }, a$ = {
  key: 0,
  class: "vc-day-popover-row-indicator"
}, s$ = { class: "vc-day-popover-row-label" };
function o$(e, t, n, r, s, a) {
  return E(), T("div", r$, [
    e.indicator ? (E(), T("div", a$, [
      w("span", {
        class: He(e.indicator.class)
      }, null, 2)
    ])) : J("", !0),
    w("div", s$, [
      Ft(e.$slots, "default", {}, () => [
        Cr(le(e.attribute.popover ? e.attribute.popover.label : "No content provided"), 1)
      ])
    ])
  ]);
}
const i$ = /* @__PURE__ */ Xt(n$, [["render", o$]]), l$ = { class: "vc-day-popover-container" }, u$ = {
  key: 0,
  class: "vc-day-popover-header"
}, c$ = /* @__PURE__ */ Pe({
  __name: "CalendarDayPopover",
  setup(e) {
    const { dayPopoverId: t, displayMode: n, color: r, masks: s, locale: a } = Tn();
    function o(l, u) {
      return a.value.formatDate(l, u);
    }
    function i(l) {
      return a.value.formatDate(l.date, s.value.dayPopover);
    }
    return (l, u) => (E(), Ke(Fs, {
      id: h(t),
      class: He([`vc-${h(r)}`, `vc-${h(n)}`])
    }, {
      default: qe(({ data: { day: c, attributes: p }, hide: v }) => [
        Ft(l.$slots, "default", {
          day: c,
          dayTitle: i(c),
          attributes: p,
          format: o,
          masks: h(s),
          hide: v
        }, () => [
          w("div", l$, [
            h(s).dayPopover ? (E(), T("div", u$, le(i(c)), 1)) : J("", !0),
            (E(!0), T(te, null, me(p, (f) => (E(), Ke(i$, {
              key: f.key,
              attribute: f
            }, null, 8, ["attribute"]))), 128))
          ])
        ])
      ]),
      _: 3
    }, 8, ["id", "class"]));
  }
}), d$ = Pe({
  name: "Calendar",
  components: {
    CalendarHeader: cu,
    CalendarPane: jE,
    CalendarNavPopover: t$,
    CalendarDayPopover: c$
  },
  emits: $E,
  props: EE,
  setup(e, { emit: t, slots: n }) {
    return OE(e, { emit: t, slots: n });
  }
}), f$ = { class: "vc-pane-header-wrapper" };
function v$(e, t, n, r, s, a) {
  const o = un("CalendarHeader"), i = un("CalendarPane"), l = un("CalendarDayPopover"), u = un("CalendarNavPopover");
  return E(), T(te, null, [
    w("div", Qn({ "data-helptext": "Press the arrow keys to navigate by day, Home and End to navigate to week ends, PageUp and PageDown to navigate by month, Alt+PageUp and Alt+PageDown to navigate by year" }, e.$attrs, {
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
      onMouseup: t[0] || (t[0] = Hi(() => {
      }, ["prevent"])),
      ref: "containerRef"
    }), [
      w("div", {
        class: He(["vc-pane-container", { "in-transition": e.inTransition }])
      }, [
        w("div", f$, [
          e.firstPage ? (E(), Ke(o, {
            key: 0,
            page: e.firstPage,
            "is-lg": "",
            "hide-title": ""
          }, null, 8, ["page"])) : J("", !0)
        ]),
        ve(Bi, {
          name: `vc-${e.transitionName}`,
          onBeforeEnter: e.onTransitionBeforeEnter,
          onAfterEnter: e.onTransitionAfterEnter
        }, {
          default: qe(() => [
            (E(), T("div", {
              key: e.pages[0].id,
              class: "vc-pane-layout",
              style: _r({
                gridTemplateColumns: `repeat(${e.columns}, 1fr)`
              })
            }, [
              (E(!0), T(te, null, me(e.pages, (c) => (E(), Ke(i, {
                key: c.id,
                page: c
              }, null, 8, ["page"]))), 128))
            ], 4))
          ]),
          _: 1
        }, 8, ["name", "onBeforeEnter", "onAfterEnter"]),
        Ft(e.$slots, "footer")
      ], 2)
    ], 16),
    ve(l, null, {
      default: qe((c) => [
        Ft(e.$slots, "day-popover", ji(Vu(c)))
      ]),
      _: 3
    }),
    ve(u)
  ], 64);
}
const p$ = /* @__PURE__ */ Xt(d$, [["render", v$]]), m$ = { class: "vc-base-select" }, h$ = ["value"], g$ = ["value", "disabled"], _$ = {
  inheritAttrs: !1
}, pr = /* @__PURE__ */ Object.assign(_$, {
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
    return (t, n) => (E(), T("div", m$, [
      e.showIcon ? (E(), Ke(qn, {
        key: 0,
        name: "ChevronDown",
        size: e.small ? "16" : "18"
      }, null, 8, ["size"])) : J("", !0),
      w("select", Qn(t.$attrs, {
        value: e.modelValue,
        class: ["vc-focus", {
          "vc-has-icon": e.showIcon,
          "vc-align-right": e.alignRight,
          "vc-align-left": e.alignLeft,
          "vc-small": e.small
        }],
        onChange: n[0] || (n[0] = (r) => t.$emit("update:modelValue", r.target.value))
      }), [
        (E(!0), T(te, null, me(e.options, (r) => (E(), T("option", {
          key: r.value,
          value: r.value,
          disabled: r.disabled
        }, le(r.label), 9, g$))), 128))
      ], 16, h$)
    ]));
  }
}), du = "__vc_date_picker_context__", b$ = {
  ...au,
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
    default: () => dn("datePicker.updateOnInput")
  },
  inputDebounce: {
    type: Number,
    default: () => dn("datePicker.inputDebounce")
  },
  popover: {
    type: [Boolean, Object],
    default: !0
  },
  dragAttribute: Object,
  selectAttribute: Object,
  attributes: [Object, Array]
}, y$ = [
  "update:modelValue",
  "drag",
  "dayclick",
  "daykeydown",
  "popover-will-show",
  "popover-did-show",
  "popover-will-hide",
  "popover-did-hide"
];
function D$(e, t) {
  const n = su(e), { locale: r, masks: s, disabledAttribute: a } = n, { emit: o } = t, i = ne(!1), l = ne(ea()), u = ne(null), c = ne(null), p = ne(["", ""]), v = ne(null), f = ne(null);
  let O, g, D = !0;
  const d = C(() => e.isRange || e.modelModifiers.range === !0), b = C(
    () => d.value && u.value != null ? u.value.start : null
  ), k = C(
    () => d.value && u.value != null ? u.value.end : null
  ), _ = C(() => e.mode.toLowerCase() === "date"), I = C(
    () => e.mode.toLowerCase() === "datetime"
  ), N = C(() => e.mode.toLowerCase() === "time"), x = C(() => !!c.value), P = C(() => {
    let M = "date";
    e.modelModifiers.number && (M = "number"), e.modelModifiers.string && (M = "string");
    const G = s.value.modelValue || "iso";
    return Ee({ type: M, mask: G });
  }), A = C(
    () => Ze(c.value ?? u.value)
  ), S = C(() => N.value ? e.is24hr ? s.value.inputTime24hr : s.value.inputTime : I.value ? e.is24hr ? s.value.inputDateTime24hr : s.value.inputDateTime : s.value.input), j = C(() => /[Hh]/g.test(S.value)), Y = C(
    () => /[dD]{1,2}|Do|W{1,4}|M{1,4}|YY(?:YY)?/g.test(S.value)
  ), X = C(() => {
    if (j.value && Y.value)
      return "dateTime";
    if (Y.value)
      return "date";
    if (j.value)
      return "time";
  }), K = C(() => {
    var M;
    const G = ((M = v.value) == null ? void 0 : M.$el.previousElementSibling) ?? void 0;
    return Nr({}, e.popover, dn("datePicker.popover"), {
      target: G
    });
  }), U = C(
    () => lu({
      ...K.value,
      id: l.value
    })
  ), F = C(() => d.value ? {
    start: p.value[0],
    end: p.value[1]
  } : p.value[0]), Q = C(() => {
    const M = ["start", "end"].map((G) => ({
      input: Z(G),
      change: ie(G),
      keyup: ge,
      ...e.popover && U.value
    }));
    return d.value ? {
      start: M[0],
      end: M[1]
    } : M[0];
  }), W = C(() => {
    if (!he(u.value))
      return null;
    const M = {
      key: "select-drag",
      ...e.selectAttribute,
      dates: u.value,
      pinPage: !0
    }, { dot: G, bar: ue, highlight: we, content: We } = M;
    return !G && !ue && !we && !We && (M.highlight = !0), M;
  }), V = C(() => {
    if (!d.value || !he(c.value))
      return null;
    const M = {
      key: "select-drag",
      ...e.dragAttribute,
      dates: c.value
    }, { dot: G, bar: ue, highlight: we, content: We } = M;
    return !G && !ue && !we && !We && (M.highlight = {
      startEnd: {
        fillMode: "outline"
      }
    }), M;
  }), $ = C(() => {
    const M = yt(e.attributes) ? [...e.attributes] : [];
    return V.value ? M.unshift(V.value) : W.value && M.unshift(W.value), M;
  }), q = C(() => Ee(
    e.rules === "auto" ? pe() : e.rules ?? {}
  ));
  function pe() {
    const M = {
      ms: [0, 999],
      sec: [0, 59],
      min: [0, 59],
      hr: [0, 23]
    }, G = _.value ? 0 : e.timeAccuracy;
    return [0, 1].map((ue) => {
      switch (G) {
        case 0:
          return {
            hours: M.hr[ue],
            minutes: M.min[ue],
            seconds: M.sec[ue],
            milliseconds: M.ms[ue]
          };
        case 1:
          return {
            minutes: M.min[ue],
            seconds: M.sec[ue],
            milliseconds: M.ms[ue]
          };
        case 3:
          return { milliseconds: M.ms[ue] };
        case 4:
          return {};
        default:
          return { seconds: M.sec[ue], milliseconds: M.ms[ue] };
      }
    });
  }
  function Ee(M) {
    return yt(M) ? M.length === 1 ? [M[0], M[0]] : M : [M, M];
  }
  function ee(M) {
    return Ee(M).map(
      (G, ue) => ({
        ...G,
        rules: q.value[ue]
      })
    );
  }
  function De(M) {
    return Mt(M) ? !isNaN(M) : Vn(M) ? !isNaN(M.getTime()) : xt(M) ? M !== "" : M != null;
  }
  function he(M) {
    return d.value ? qt(M) && De(M.start) && De(M.end) : De(M);
  }
  function Me(M, G) {
    const ue = Vn(M), we = Vn(G);
    return !ue && !we ? !0 : ue !== we ? !1 : M.getTime() === G.getTime();
  }
  function $e(M, G) {
    if (d.value) {
      const ue = he(M), we = he(G);
      return !ue && !we ? !0 : ue !== we ? !1 : Me(M.start, G.start) && Me(M.end, G.end);
    }
    return Me(M, G);
  }
  function be(M) {
    return !he(M) || !a.value ? !1 : a.value.intersectsRange(r.value.range(M));
  }
  function Ye(M, G, ue, we) {
    if (!he(M))
      return null;
    if (d.value) {
      const We = r.value.toDate(M.start, {
        ...G[0],
        fillDate: b.value ?? void 0,
        patch: ue
      }), Ot = r.value.toDate(M.end, {
        ...G[1],
        fillDate: k.value ?? void 0,
        patch: ue
      });
      return gn({ start: We, end: Ot }, we);
    }
    return r.value.toDateOrNull(M, {
      ...G[0],
      fillDate: u.value,
      patch: ue
    });
  }
  function Re(M, G) {
    return d.value ? he(M) ? {
      start: r.value.fromDate(M.start, G[0]),
      end: r.value.fromDate(M.end, G[1])
    } : null : r.value.fromDate(M, G[0]);
  }
  function ze(M, G = {}) {
    return clearTimeout(O), new Promise((ue) => {
      const { debounce: we = 0, ...We } = G;
      we > 0 ? O = window.setTimeout(() => {
        ue(y(M, We));
      }, we) : ue(y(M, We));
    });
  }
  function y(M, {
    config: G = P.value,
    patch: ue = "dateTime",
    clearIfEqual: we = !1,
    formatInput: We = !0,
    hidePopover: Ot = !1,
    dragging: st = x.value,
    targetPriority: In,
    moveToValue: ur = !1
  } = {}) {
    const xr = ee(G);
    let pt = Ye(
      M,
      xr,
      ue,
      In
    );
    if (be(pt)) {
      if (st)
        return null;
      pt = u.value, Ot = !1;
    } else
      pt == null && e.isRequired ? pt = u.value : (
        // Clear value if same value was passed
        pt != null && $e(u.value, pt) && we && (pt = null)
      );
    const cr = st ? c : u, Ta = !$e(cr.value, pt);
    cr.value = pt, st || (c.value = null);
    const Xs = Re(
      pt,
      P.value
    );
    return Ta && (D = !1, o(st ? "drag" : "update:modelValue", Xs), Ln(() => D = !0)), Ot && !st && Et(), We && m(), ur && Ln(() => B(In ?? "start")), Xs;
  }
  function m() {
    Ln(() => {
      const M = ee({
        type: "string",
        mask: S.value
      }), G = Re(
        c.value || u.value,
        M
      );
      d.value ? p.value = [G && G.start, G && G.end] : p.value = [G, ""];
    });
  }
  function L(M, G, ue) {
    p.value.splice(G === "start" ? 0 : 1, 1, M);
    const we = d.value ? {
      start: p.value[0],
      end: p.value[1] || p.value[0]
    } : M, We = {
      type: "string",
      mask: S.value
    };
    ze(we, {
      ...ue,
      config: We,
      patch: X.value,
      targetPriority: G,
      moveToValue: !0
    });
  }
  function Z(M) {
    return (G) => {
      e.updateOnInput && L(G.currentTarget.value, M, {
        formatInput: !1,
        hidePopover: !1,
        debounce: e.inputDebounce
      });
    };
  }
  function ie(M) {
    return (G) => {
      L(G.currentTarget.value, M, {
        formatInput: !0,
        hidePopover: !1
      });
    };
  }
  function ge(M) {
    M.key === "Escape" && ze(u.value, {
      formatInput: !0,
      hidePopover: !0
    });
  }
  function Ze(M) {
    return d.value ? [
      M && M.start ? r.value.getDateParts(M.start) : null,
      M && M.end ? r.value.getDateParts(M.end) : null
    ] : [M ? r.value.getDateParts(M) : null];
  }
  function Ue() {
    c.value = null, m();
  }
  function vt(M) {
    o("popover-will-show", M);
  }
  function Pt(M) {
    o("popover-did-show", M);
  }
  function Ne(M) {
    Ue(), o("popover-will-hide", M);
  }
  function R(M) {
    o("popover-did-hide", M);
  }
  function H(M) {
    const G = {
      patch: "date",
      formatInput: !0,
      hidePopover: !0
    };
    if (d.value) {
      const ue = !x.value;
      ue ? g = { start: M.startDate, end: M.endDate } : g != null && (g.end = M.date), ze(g, {
        ...G,
        dragging: ue
      });
    } else
      ze(M.date, {
        ...G,
        clearIfEqual: !e.isRequired
      });
  }
  function Fe(M, G) {
    H(M), o("dayclick", M, G);
  }
  function Ve(M, G) {
    switch (G.key) {
      case " ":
      case "Enter": {
        H(M), G.preventDefault();
        break;
      }
      case "Escape":
        Et();
    }
    o("daykeydown", M, G);
  }
  function At(M, G) {
    !x.value || g == null || (g.end = M.date, ze(gn(g), {
      patch: "date",
      formatInput: !0
    }));
  }
  function en(M = {}) {
    Ga({
      ...K.value,
      ...M,
      isInteractive: !0,
      id: l.value
    });
  }
  function Et(M = {}) {
    va({
      hideDelay: 10,
      force: !0,
      ...K.value,
      ...M,
      id: l.value
    });
  }
  function $t(M) {
    iu({
      ...K.value,
      ...M,
      isInteractive: !0,
      id: l.value
    });
  }
  function gn(M, G) {
    const { start: ue, end: we } = M;
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
  function Mn(M) {
    if (he(u.value)) {
      const G = d.value ? M ? b.value : k.value : u.value;
      return Jl(G, "monthly", r.value);
    }
    return null;
  }
  async function Na(M, G = {}) {
    return f.value == null ? !1 : f.value.move(M, G);
  }
  async function Sr(M, G = {}) {
    return f.value == null ? !1 : f.value.moveBy(M, G);
  }
  async function B(M, G = {}) {
    if (f.value == null)
      return !1;
    const { firstPage: ue, lastPage: we, move: We } = f.value, Ot = M !== "end", st = Mn(Ot), In = Ot ? 1 : -1;
    return !st || eu(st, ue, we) ? !1 : We(st, {
      position: In,
      ...G
    });
  }
  ke(
    () => e.isRange,
    (M) => {
      M && console.warn(
        "The `is-range` prop will be deprecated in future releases. Please use the `range` modifier."
      );
    },
    { immediate: !0 }
  ), ke(
    () => S.value,
    () => m()
  ), ke(
    () => e.modelValue,
    (M) => {
      D && y(M, {
        formatInput: !0,
        hidePopover: !1
      });
    }
  ), ke(
    () => q.value,
    () => {
      qt(e.rules) && y(e.modelValue, {
        formatInput: !0,
        hidePopover: !1
      });
    }
  ), ke(
    () => e.timezone,
    () => {
      y(u.value, { formatInput: !0 });
    }
  );
  const z = Ee(P.value);
  u.value = Ye(e.modelValue, z, "dateTime"), vn(() => {
    y(e.modelValue, {
      formatInput: !0,
      hidePopover: !1
    });
  }), Ln(() => i.value = !0);
  const de = {
    ...n,
    showCalendar: i,
    datePickerPopoverId: l,
    popoverRef: v,
    popoverEvents: U,
    calendarRef: f,
    isRange: d,
    isTimeMode: N,
    isDateTimeMode: I,
    is24hr: Ma(e, "is24hr"),
    hideTimeHeader: Ma(e, "hideTimeHeader"),
    timeAccuracy: Ma(e, "timeAccuracy"),
    isDragging: x,
    inputValue: F,
    inputEvents: Q,
    dateParts: A,
    attributes: $,
    rules: q,
    move: Na,
    moveBy: Sr,
    moveToValue: B,
    updateValue: ze,
    showPopover: en,
    hidePopover: Et,
    togglePopover: $t,
    onDayClick: Fe,
    onDayKeydown: Ve,
    onDayMouseEnter: At,
    onPopoverBeforeShow: vt,
    onPopoverAfterShow: Pt,
    onPopoverBeforeHide: Ne,
    onPopoverAfterHide: R
  };
  return Bn(du, de), de;
}
function w$() {
  const e = gt(du);
  if (e)
    return e;
  throw new Error(
    "DatePicker context missing. Please verify this component is nested within a valid context provider."
  );
}
const E$ = [
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
], $$ = [
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
function O$(e) {
  const t = w$(), {
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
  function p(Y) {
    Y = Object.assign(f.value, Y);
    let X = null;
    if (r.value) {
      const K = v.value ? Y : a.value[0], U = v.value ? a.value[1] : Y;
      X = { start: K, end: U };
    } else
      X = Y;
    c(X, {
      patch: "time",
      targetPriority: v.value ? "start" : "end",
      moveToValue: !0
    });
  }
  const v = C(() => e.position === 0), f = C(
    () => a.value[e.position] || { isValid: !1 }
  ), O = C(() => Kl(f.value)), g = C(() => !!f.value.isValid), D = C(() => !l.value && g.value), d = C(() => {
    if (!O.value)
      return null;
    let Y = n.value.toDate(f.value);
    return f.value.hours === 24 && (Y = new Date(Y.getTime() - 1)), Y;
  }), b = C({
    get() {
      return f.value.hours;
    },
    set(Y) {
      p({ hours: Y });
    }
  }), k = C({
    get() {
      return f.value.minutes;
    },
    set(Y) {
      p({ minutes: Y });
    }
  }), _ = C({
    get() {
      return f.value.seconds;
    },
    set(Y) {
      p({ seconds: Y });
    }
  }), I = C({
    get() {
      return f.value.milliseconds;
    },
    set(Y) {
      p({ milliseconds: Y });
    }
  }), N = C({
    get() {
      return f.value.hours < 12;
    },
    set(Y) {
      Y = String(Y).toLowerCase() == "true";
      let X = b.value;
      Y && X >= 12 ? X -= 12 : !Y && X < 12 && (X += 12), p({ hours: X });
    }
  }), x = C(
    () => rE(f.value, o.value[e.position])
  ), P = C(() => E$.filter(
    (Y) => x.value.hours.some((X) => X.value === Y.value)
  )), A = C(() => $$.filter(
    (Y) => x.value.hours.some((X) => X.value === Y.value)
  )), S = C(() => i.value ? x.value.hours : N.value ? P.value : A.value), j = C(() => {
    const Y = [];
    return Wt(P.value) && Y.push({ value: !0, label: "AM" }), Wt(A.value) && Y.push({ value: !1, label: "PM" }), Y;
  });
  return {
    ...t,
    showHeader: D,
    timeAccuracy: u,
    parts: f,
    isValid: g,
    date: d,
    hours: b,
    minutes: k,
    seconds: _,
    milliseconds: I,
    options: x,
    hourOptions: S,
    isAM: N,
    isAMOptions: j,
    is24hr: i
  };
}
const k$ = {
  key: 0,
  class: "vc-time-header"
}, N$ = { class: "vc-time-weekday" }, T$ = { class: "vc-time-month" }, M$ = { class: "vc-time-day" }, I$ = { class: "vc-time-year" }, C$ = { class: "vc-time-select-group" }, P$ = /* @__PURE__ */ w("span", { class: "vc-time-colon" }, ":", -1), A$ = /* @__PURE__ */ w("span", { class: "vc-time-colon" }, ":", -1), L$ = /* @__PURE__ */ w("span", { class: "vc-time-decimal" }, ".", -1), S$ = /* @__PURE__ */ Pe({
  __name: "TimePicker",
  props: {
    position: null
  },
  setup(e, { expose: t }) {
    const r = O$(e);
    t(r);
    const {
      locale: s,
      isValid: a,
      date: o,
      hours: i,
      minutes: l,
      seconds: u,
      milliseconds: c,
      options: p,
      hourOptions: v,
      isTimeMode: f,
      isAM: O,
      isAMOptions: g,
      is24hr: D,
      showHeader: d,
      timeAccuracy: b
    } = r;
    return (k, _) => (E(), T("div", {
      class: He(["vc-time-picker", [{ "vc-invalid": !h(a), "vc-attached": !h(f) }]])
    }, [
      Ft(k.$slots, "time-header", {}, () => [
        h(d) && h(o) ? (E(), T("div", k$, [
          w("span", N$, le(h(s).formatDate(h(o), "WWW")), 1),
          w("span", T$, le(h(s).formatDate(h(o), "MMM")), 1),
          w("span", M$, le(h(s).formatDate(h(o), "D")), 1),
          w("span", I$, le(h(s).formatDate(h(o), "YYYY")), 1)
        ])) : J("", !0)
      ]),
      w("div", C$, [
        ve(qn, {
          name: "Clock",
          size: "17"
        }),
        ve(pr, {
          modelValue: h(i),
          "onUpdate:modelValue": _[0] || (_[0] = (I) => _e(i) ? i.value = I : null),
          modelModifiers: { number: !0 },
          options: h(v),
          "align-right": ""
        }, null, 8, ["modelValue", "options"]),
        h(b) > 1 ? (E(), T(te, { key: 0 }, [
          P$,
          ve(pr, {
            modelValue: h(l),
            "onUpdate:modelValue": _[1] || (_[1] = (I) => _e(l) ? l.value = I : null),
            modelModifiers: { number: !0 },
            options: h(p).minutes,
            "align-left": h(b) === 2
          }, null, 8, ["modelValue", "options", "align-left"])
        ], 64)) : J("", !0),
        h(b) > 2 ? (E(), T(te, { key: 1 }, [
          A$,
          ve(pr, {
            modelValue: h(u),
            "onUpdate:modelValue": _[2] || (_[2] = (I) => _e(u) ? u.value = I : null),
            modelModifiers: { number: !0 },
            options: h(p).seconds,
            "align-left": h(b) === 3
          }, null, 8, ["modelValue", "options", "align-left"])
        ], 64)) : J("", !0),
        h(b) > 3 ? (E(), T(te, { key: 2 }, [
          L$,
          ve(pr, {
            modelValue: h(c),
            "onUpdate:modelValue": _[3] || (_[3] = (I) => _e(c) ? c.value = I : null),
            modelModifiers: { number: !0 },
            options: h(p).milliseconds,
            "align-left": ""
          }, null, 8, ["modelValue", "options"])
        ], 64)) : J("", !0),
        h(D) ? J("", !0) : (E(), Ke(pr, {
          key: 3,
          modelValue: h(O),
          "onUpdate:modelValue": _[4] || (_[4] = (I) => _e(O) ? O.value = I : null),
          options: h(g)
        }, null, 8, ["modelValue", "options"]))
      ])
    ], 2));
  }
}), Vs = Pe({
  name: "DatePicker",
  inheritAttrs: !1,
  emits: y$,
  props: b$,
  setup(e, t) {
    const n = D$(e, t), { slots: r, attrs: s } = t, {
      isTimeMode: a,
      isRange: o,
      isDateTimeMode: i,
      color: l,
      displayMode: u,
      dateParts: c,
      datePickerPopoverId: p,
      attributes: v,
      calendarRef: f,
      popoverRef: O,
      showCalendar: g,
      onDayClick: D,
      onDayMouseEnter: d,
      onDayKeydown: b,
      onPopoverBeforeShow: k,
      onPopoverAfterShow: _,
      onPopoverBeforeHide: I,
      onPopoverAfterHide: N
    } = n;
    t.expose(n);
    const x = os(Rl(n, "calendarRef", "popoverRef")), P = () => (o.value ? [0, 1] : [0]).map((Y) => An(S$, { position: Y })), A = () => {
      if (!c.value)
        return null;
      const j = i.value ? { ...r, footer: P } : r;
      return An(
        p$,
        {
          ...s,
          attributes: v.value,
          ref: f,
          onDayclick: D,
          onDaymouseenter: d,
          onDaykeydown: b
        },
        j
      );
    }, S = () => {
      if (a.value)
        return An(
          "div",
          {
            class: `vc-container vc-bordered vc-${l.value} vc-${u.value}`
          },
          [P()]
        );
      if (g.value)
        return A();
    };
    return r.default ? () => [
      // Popover trigger
      r.default(x),
      // Popover content
      An(
        Fs,
        {
          id: p.value,
          placement: "bottom-start",
          class: `vc-date-picker-content vc-${l.value} vc-${u.value}`,
          ref: O,
          "onBefore-show": k,
          "onAfter-show": _,
          "onBefore-hide": I,
          "onAfter-hide": N
        },
        {
          default: S
        }
      )
    ] : S;
  }
});
const x$ = { class: "flex flex-col gap-2" }, R$ = { class: "flex items-center gap-2" }, Y$ = /* @__PURE__ */ w("label", {
  for: "due",
  class: "p3-b"
}, "結束於指定日期", -1), F$ = ["onClick"], V$ = /* @__PURE__ */ Pe({
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
    return ke(
      () => n.modelValue,
      (a) => {
        a && (s.value = !0);
      },
      { immediate: !0 }
    ), ke(s, (a) => {
      a || t("update:modelValue", null);
    }), Ir(() => {
      t("update:modelValue", null);
    }), (a, o) => (E(), T("div", x$, [
      w("div", R$, [
        Ie(w("input", {
          type: "checkbox",
          "onUpdate:modelValue": o[0] || (o[0] = (i) => _e(s) ? s.value = i : null),
          id: "due"
        }, null, 512), [
          [zr, h(s)]
        ]),
        Y$,
        h(s) ? (E(), Ke(h(Vs), {
          key: 0,
          modelValue: h(r),
          "onUpdate:modelValue": o[1] || (o[1] = (i) => _e(r) ? r.value = i : null),
          mode: "dateTime",
          timezone: "UTC",
          "min-Date": /* @__PURE__ */ new Date()
        }, {
          default: qe(({ togglePopover: i, inputValue: l }) => [
            w("button", {
              class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 transition-all hover:bg-light-3 hover:bg-opacity-50",
              onClick: i
            }, le(l || "請選定結束日期"), 9, F$)
          ]),
          _: 1
        }, 8, ["modelValue", "min-Date"])) : J("", !0)
      ])
    ]));
  }
}), U$ = { class: "flex w-auto items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-1.5" }, j$ = ["value", "type", "placeholder", "maxLength", "required"], B$ = /* @__PURE__ */ Pe({
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
    return (s, a) => (E(), T("div", U$, [
      w("input", {
        value: s.modelValue,
        onInput: r,
        type: s.type,
        class: "p3-b w-full border-none outline-none shadow-none",
        placeholder: s.placeholder,
        maxLength: s.maxLength,
        required: s.required
      }, null, 40, j$)
    ]));
  }
});
const Nt = /* @__PURE__ */ cs(B$, [["__scopeId", "data-v-068dea7c"]]), H$ = { class: "flex flex-col gap-3" }, W$ = /* @__PURE__ */ w("div", { class: "flex items-center justify-center gap-3 my-2" }, [
  /* @__PURE__ */ w("p", { class: "p4-b" }, "日期時間"),
  /* @__PURE__ */ w("div", { class: "h-[1px] flex-1 bg-light-3" })
], -1), G$ = { class: "flex flex-col gap-2" }, K$ = { class: "flex gap-2 items-center" }, q$ = /* @__PURE__ */ w("span", { class: "p4-b" }, "開始", -1), z$ = ["onClick"], X$ = ["value"], Z$ = /* @__PURE__ */ w("div", { class: "flex items-center justify-center gap-3 w-full my-2" }, [
  /* @__PURE__ */ w("p", { class: "p4-b" }, "重複頻率"),
  /* @__PURE__ */ w("div", { class: "h-[1px] flex-1 bg-light-3" })
], -1), J$ = { class: "flex space-x-2 items-center" }, Q$ = { class: "flex items-center gap-2" }, eO = /* @__PURE__ */ w("span", { class: "p4-b" }, "重複", -1), tO = ["value"], nO = /* @__PURE__ */ w("option", { value: 0 }, "自訂", -1), rO = { class: "p4-b" }, aO = {
  key: 0,
  class: "flex items-center gap-2"
}, sO = { class: "flex items-center gap-2" }, oO = /* @__PURE__ */ w("span", { class: "p4-b" }, "頻率", -1), iO = /* @__PURE__ */ w("option", {
  value: "-1",
  disabled: ""
}, "請選擇", -1), lO = ["value"], uO = {
  key: 0,
  class: "flex items-center gap-2"
}, cO = /* @__PURE__ */ w("span", { class: "p4-b" }, "每", -1), dO = { class: "p4-b" }, ci = 1, fO = /* @__PURE__ */ Pe({
  __name: "RepeatFrequency",
  props: {
    frequency: {},
    interval: {}
  },
  emits: ["update:frequency", "update:interval"],
  setup(e, { emit: t }) {
    const n = e, r = gt("eventData"), s = ne(!0);
    ke(r, () => {
      s.value = !0;
    });
    const a = ne(n.interval ?? ci);
    ke(a, (f) => {
      f || (f = ci), t("update:interval", f);
    });
    const o = ne(n.frequency);
    ke(o, (f) => {
      t("update:frequency", f);
    });
    const i = C({
      get: () => r.value.weekdays ?? [],
      set: (f) => {
        r.value.weekdays = f;
      }
    }), l = C({
      get: () => r.value.weekOrdinal ?? [],
      set: (f) => {
        r.value.weekOrdinal = f;
      }
    }), u = C({
      get: () => r.value.monthDate ?? [],
      set: (f) => {
        r.value.monthDate = f;
      }
    }), c = C({
      get: () => r.value.yearMonths ?? [],
      set: (f) => {
        r.value.yearMonths = f;
      }
    }), p = C(() => {
      if (v.value == xe.Never)
        return "只執行一次";
      if (v.value == xe.Hour)
        return "每小時執行一次";
      if (v.value == xe.Day)
        return "每日執行一次";
      if (v.value == xe.Week)
        return "每週執行一次";
      if (v.value == xe.Month)
        return "每月執行一次";
      if (v.value == xe.Annual)
        return "每年執行一次";
      const f = {
        1: "小時",
        2: "日",
        3: "週",
        4: "月",
        5: "年"
      };
      return v.value == 0 ? `每${a.value ?? ""}${f[o.value] ?? ""}執行一次` : "";
    }), v = ne(-1);
    return n.interval == 1 && (v.value = n.frequency), ke(
      v,
      (f) => {
        xe[f] && (t("update:frequency", f), t("update:interval", 1), o.value = v.value, r.value.weekdays = null, r.value.weekOrdinal = null, r.value.monthDate = null, r.value.yearMonths = null), r.value.customInterval = f === 0;
      },
      { immediate: !0 }
    ), (f, O) => (E(), T("div", H$, [
      W$,
      w("div", G$, [
        w("div", K$, [
          q$,
          ve(h(Vs), {
            modelValue: h(r).start,
            "onUpdate:modelValue": O[0] || (O[0] = (g) => h(r).start = g),
            mode: "dateTime",
            timezone: "UTC",
            "min-Date": /* @__PURE__ */ new Date(),
            "is-required": ""
          }, {
            default: qe(({ togglePopover: g, inputValue: D }) => [
              w("button", {
                class: "p3-b flex w-fit cursor-pointer relative items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 transition-all hover:bg-light-3 hover:bg-opacity-50",
                onClick: g
              }, [
                w("input", {
                  value: D,
                  required: "",
                  class: "opacity-0 absolute w-full h-full pointer-events-none"
                }, null, 8, X$),
                Cr(" " + le(D || "請選定執行日期"), 1)
              ], 8, z$)
            ]),
            _: 1
          }, 8, ["modelValue", "min-Date"])
        ])
      ]),
      Z$,
      w("div", J$, [
        w("label", Q$, [
          eO,
          Ie(w("select", {
            class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
            "onUpdate:modelValue": O[1] || (O[1] = (g) => _e(v) ? v.value = g : null)
          }, [
            (E(!0), T(te, null, me(h(xe), (g, D) => (E(), T(te, { key: D }, [
              Number.isInteger(g) ? (E(), T("option", {
                key: 0,
                value: g
              }, le(f.$t(D)), 9, tO)) : J("", !0)
            ], 64))), 128)),
            nO
          ], 512), [
            [je, h(v)]
          ])
        ]),
        w("span", rO, le(h(p)), 1)
      ]),
      h(xe)[h(v)] == null ? (E(), T("div", aO, [
        w("label", sO, [
          oO,
          Ie(w("select", {
            class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
            "onUpdate:modelValue": O[2] || (O[2] = (g) => _e(o) ? o.value = g : null)
          }, [
            iO,
            (E(!0), T(te, null, me(h(xe), (g, D) => (E(), T(te, { key: D }, [
              g != h(xe).Never && Number.isInteger(g) ? (E(), T("option", {
                key: 0,
                value: g
              }, le(f.$t(D)), 9, lO)) : J("", !0)
            ], 64))), 128))
          ], 512), [
            [je, h(o)]
          ])
        ]),
        h(o) != -1 ? (E(), T("label", uO, [
          cO,
          ve(Nt, {
            class: "!w-10 text-center",
            modelValue: h(a),
            "onUpdate:modelValue": O[3] || (O[3] = (g) => _e(a) ? a.value = g : null),
            type: "number"
          }, null, 8, ["modelValue"]),
          w("span", dO, le(f.$t(`s${h(xe)[h(o)]}`)), 1)
        ])) : J("", !0)
      ])) : J("", !0),
      h(xe)[h(v)] == null ? (E(), Ke(sc, {
        key: 1,
        type: h(o),
        weekdays: h(i),
        "onUpdate:weekdays": O[4] || (O[4] = (g) => _e(i) ? i.value = g : null),
        weekOrdinal: h(l),
        "onUpdate:weekOrdinal": O[5] || (O[5] = (g) => _e(l) ? l.value = g : null),
        monthDate: h(u),
        "onUpdate:monthDate": O[6] || (O[6] = (g) => _e(u) ? u.value = g : null),
        yearMonths: h(c),
        "onUpdate:yearMonths": O[7] || (O[7] = (g) => _e(c) ? c.value = g : null)
      }, null, 8, ["type", "weekdays", "weekOrdinal", "monthDate", "yearMonths"])) : J("", !0),
      h(o) !== -1 ? (E(), Ke(V$, {
        key: 2,
        modelValue: h(r).due,
        "onUpdate:modelValue": O[8] || (O[8] = (g) => h(r).due = g)
      }, null, 8, ["modelValue"])) : J("", !0)
    ]));
  }
}), vO = { class: "relative border rounded border-light-3 py-4 px-3" }, pO = { class: "p3-b absolute left-2 -top-3 text-dark-3 bg-light-5" }, wr = /* @__PURE__ */ Pe({
  __name: "OuterBlock",
  props: {
    title: {}
  },
  setup(e) {
    return (t, n) => (E(), T("div", vO, [
      w("div", pO, le(t.title), 1),
      Ft(t.$slots, "default")
    ]));
  }
});
/*!
  * shared v9.5.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */
const fn = typeof window < "u";
let dt, $n;
if (process.env.NODE_ENV !== "production") {
  const e = fn && window.performance;
  e && e.mark && e.measure && e.clearMarks && // @ts-ignore browser compat
  e.clearMeasures && (dt = (t) => {
    e.mark(t);
  }, $n = (t, n, r) => {
    e.measure(t, n, r), e.clearMarks(n), e.clearMarks(r);
  });
}
const mO = /\{([0-9a-zA-Z]+)\}/g;
function Us(e, ...t) {
  return t.length === 1 && Oe(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(mO, (n, r) => t.hasOwnProperty(r) ? t[r] : "");
}
const Qt = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), hO = (e, t, n) => gO({ l: e, k: t, s: n }), gO = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Qe = (e) => typeof e == "number" && isFinite(e), _O = (e) => vu(e) === "[object Date]", Xn = (e) => vu(e) === "[object RegExp]", Ea = (e) => ye(e) && Object.keys(e).length === 0, et = Object.assign;
let di;
const Ht = () => di || (di = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function fi(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const bO = Object.prototype.hasOwnProperty;
function js(e, t) {
  return bO.call(e, t);
}
const Ge = Array.isArray, Be = (e) => typeof e == "function", re = (e) => typeof e == "string", Ae = (e) => typeof e == "boolean", Oe = (e) => e !== null && typeof e == "object", fu = Object.prototype.toString, vu = (e) => fu.call(e), ye = (e) => {
  if (!Oe(e))
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t.constructor === Object;
}, yO = (e) => e == null ? "" : Ge(e) || ye(e) && e.toString === fu ? JSON.stringify(e, null, 2) : String(e);
function DO(e, t = "") {
  return e.reduce((n, r, s) => s === 0 ? n + r : n + t + r, "");
}
const vi = 2;
function wO(e, t = 0, n = e.length) {
  const r = e.split(/\r?\n/);
  let s = 0;
  const a = [];
  for (let o = 0; o < r.length; o++)
    if (s += r[o].length + 1, s >= t) {
      for (let i = o - vi; i <= o + vi || n > s; i++) {
        if (i < 0 || i >= r.length)
          continue;
        const l = i + 1;
        a.push(`${l}${" ".repeat(3 - String(l).length)}|  ${r[i]}`);
        const u = r[i].length;
        if (i === o) {
          const c = t - (s - u) + 1, p = Math.max(1, n > s ? u - c : n - t);
          a.push("   |  " + " ".repeat(c) + "^".repeat(p));
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
function Bs(e) {
  let t = e;
  return () => ++t;
}
function mn(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const pi = {};
function EO(e) {
  pi[e] || (pi[e] = !0, mn(e));
}
function $O() {
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
function OO(e, t, n) {
  return { line: e, column: t, offset: n };
}
function Ka(e, t, n) {
  const r = { start: e, end: t };
  return n != null && (r.source = n), r;
}
const kO = /\{([0-9a-zA-Z]+)\}/g;
function NO(e, ...t) {
  return t.length === 1 && TO(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(kO, (n, r) => t.hasOwnProperty(r) ? t[r] : "");
}
const pu = Object.assign, mi = (e) => typeof e == "string", TO = (e) => e !== null && typeof e == "object";
function mu(e, t = "") {
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
}, MO = {
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
function lr(e, t, n = {}) {
  const { domain: r, messages: s, args: a } = n, o = NO((s || MO)[e] || "", ...a || []), i = new SyntaxError(String(o));
  return i.code = e, t && (i.location = t), i.domain = r, i;
}
function IO(e) {
  throw e;
}
const CO = /<\/?[\w\s="/.':;#-\/]+>/, PO = (e) => CO.test(e), Bt = " ", AO = "\r", nt = `
`, LO = String.fromCharCode(8232), SO = String.fromCharCode(8233);
function xO(e) {
  const t = e;
  let n = 0, r = 1, s = 1, a = 0;
  const o = (x) => t[x] === AO && t[x + 1] === nt, i = (x) => t[x] === nt, l = (x) => t[x] === SO, u = (x) => t[x] === LO, c = (x) => o(x) || i(x) || l(x) || u(x), p = () => n, v = () => r, f = () => s, O = () => a, g = (x) => o(x) || l(x) || u(x) ? nt : t[x], D = () => g(n), d = () => g(n + a);
  function b() {
    return a = 0, c(n) && (r++, s = 0), o(n) && n++, n++, s++, t[n];
  }
  function k() {
    return o(n + a) && a++, a++, t[n + a];
  }
  function _() {
    n = 0, r = 1, s = 1, a = 0;
  }
  function I(x = 0) {
    a = x;
  }
  function N() {
    const x = n + a;
    for (; x !== n; )
      b();
    a = 0;
  }
  return {
    index: p,
    line: v,
    column: f,
    peekOffset: O,
    charAt: g,
    currentChar: D,
    currentPeek: d,
    next: b,
    peek: k,
    reset: _,
    resetPeek: I,
    skipToPeek: N
  };
}
const nn = void 0, RO = ".", hi = "'", YO = "tokenizer";
function FO(e, t = {}) {
  const n = t.location !== !1, r = xO(e), s = () => r.index(), a = () => OO(r.line(), r.column(), r.index()), o = a(), i = s(), l = {
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
  function p(y, m, L, ...Z) {
    const ie = u();
    if (m.column += L, m.offset += L, c) {
      const ge = n ? Ka(ie.startLoc, m) : null, Ze = lr(y, ge, {
        domain: YO,
        args: Z
      });
      c(Ze);
    }
  }
  function v(y, m, L) {
    y.endLoc = a(), y.currentType = m;
    const Z = { type: m };
    return n && (Z.loc = Ka(y.startLoc, y.endLoc)), L != null && (Z.value = L), Z;
  }
  const f = (y) => v(
    y,
    14
    /* TokenTypes.EOF */
  );
  function O(y, m) {
    return y.currentChar() === m ? (y.next(), m) : (p(ce.EXPECTED_TOKEN, a(), 0, m), "");
  }
  function g(y) {
    let m = "";
    for (; y.currentPeek() === Bt || y.currentPeek() === nt; )
      m += y.currentPeek(), y.peek();
    return m;
  }
  function D(y) {
    const m = g(y);
    return y.skipToPeek(), m;
  }
  function d(y) {
    if (y === nn)
      return !1;
    const m = y.charCodeAt(0);
    return m >= 97 && m <= 122 || // a-z
    m >= 65 && m <= 90 || // A-Z
    m === 95;
  }
  function b(y) {
    if (y === nn)
      return !1;
    const m = y.charCodeAt(0);
    return m >= 48 && m <= 57;
  }
  function k(y, m) {
    const { currentType: L } = m;
    if (L !== 2)
      return !1;
    g(y);
    const Z = d(y.currentPeek());
    return y.resetPeek(), Z;
  }
  function _(y, m) {
    const { currentType: L } = m;
    if (L !== 2)
      return !1;
    g(y);
    const Z = y.currentPeek() === "-" ? y.peek() : y.currentPeek(), ie = b(Z);
    return y.resetPeek(), ie;
  }
  function I(y, m) {
    const { currentType: L } = m;
    if (L !== 2)
      return !1;
    g(y);
    const Z = y.currentPeek() === hi;
    return y.resetPeek(), Z;
  }
  function N(y, m) {
    const { currentType: L } = m;
    if (L !== 8)
      return !1;
    g(y);
    const Z = y.currentPeek() === ".";
    return y.resetPeek(), Z;
  }
  function x(y, m) {
    const { currentType: L } = m;
    if (L !== 9)
      return !1;
    g(y);
    const Z = d(y.currentPeek());
    return y.resetPeek(), Z;
  }
  function P(y, m) {
    const { currentType: L } = m;
    if (!(L === 8 || L === 12))
      return !1;
    g(y);
    const Z = y.currentPeek() === ":";
    return y.resetPeek(), Z;
  }
  function A(y, m) {
    const { currentType: L } = m;
    if (L !== 10)
      return !1;
    const Z = () => {
      const ge = y.currentPeek();
      return ge === "{" ? d(y.peek()) : ge === "@" || ge === "%" || ge === "|" || ge === ":" || ge === "." || ge === Bt || !ge ? !1 : ge === nt ? (y.peek(), Z()) : d(ge);
    }, ie = Z();
    return y.resetPeek(), ie;
  }
  function S(y) {
    g(y);
    const m = y.currentPeek() === "|";
    return y.resetPeek(), m;
  }
  function j(y) {
    const m = g(y), L = y.currentPeek() === "%" && y.peek() === "{";
    return y.resetPeek(), {
      isModulo: L,
      hasSpace: m.length > 0
    };
  }
  function Y(y, m = !0) {
    const L = (ie = !1, ge = "", Ze = !1) => {
      const Ue = y.currentPeek();
      return Ue === "{" ? ge === "%" ? !1 : ie : Ue === "@" || !Ue ? ge === "%" ? !0 : ie : Ue === "%" ? (y.peek(), L(ie, "%", !0)) : Ue === "|" ? ge === "%" || Ze ? !0 : !(ge === Bt || ge === nt) : Ue === Bt ? (y.peek(), L(!0, Bt, Ze)) : Ue === nt ? (y.peek(), L(!0, nt, Ze)) : !0;
    }, Z = L();
    return m && y.resetPeek(), Z;
  }
  function X(y, m) {
    const L = y.currentChar();
    return L === nn ? nn : m(L) ? (y.next(), L) : null;
  }
  function K(y) {
    return X(y, (L) => {
      const Z = L.charCodeAt(0);
      return Z >= 97 && Z <= 122 || // a-z
      Z >= 65 && Z <= 90 || // A-Z
      Z >= 48 && Z <= 57 || // 0-9
      Z === 95 || // _
      Z === 36;
    });
  }
  function U(y) {
    return X(y, (L) => {
      const Z = L.charCodeAt(0);
      return Z >= 48 && Z <= 57;
    });
  }
  function F(y) {
    return X(y, (L) => {
      const Z = L.charCodeAt(0);
      return Z >= 48 && Z <= 57 || // 0-9
      Z >= 65 && Z <= 70 || // A-F
      Z >= 97 && Z <= 102;
    });
  }
  function Q(y) {
    let m = "", L = "";
    for (; m = U(y); )
      L += m;
    return L;
  }
  function W(y) {
    D(y);
    const m = y.currentChar();
    return m !== "%" && p(ce.EXPECTED_TOKEN, a(), 0, m), y.next(), "%";
  }
  function V(y) {
    let m = "";
    for (; ; ) {
      const L = y.currentChar();
      if (L === "{" || L === "}" || L === "@" || L === "|" || !L)
        break;
      if (L === "%")
        if (Y(y))
          m += L, y.next();
        else
          break;
      else if (L === Bt || L === nt)
        if (Y(y))
          m += L, y.next();
        else {
          if (S(y))
            break;
          m += L, y.next();
        }
      else
        m += L, y.next();
    }
    return m;
  }
  function $(y) {
    D(y);
    let m = "", L = "";
    for (; m = K(y); )
      L += m;
    return y.currentChar() === nn && p(ce.UNTERMINATED_CLOSING_BRACE, a(), 0), L;
  }
  function q(y) {
    D(y);
    let m = "";
    return y.currentChar() === "-" ? (y.next(), m += `-${Q(y)}`) : m += Q(y), y.currentChar() === nn && p(ce.UNTERMINATED_CLOSING_BRACE, a(), 0), m;
  }
  function pe(y) {
    D(y), O(y, "'");
    let m = "", L = "";
    const Z = (ge) => ge !== hi && ge !== nt;
    for (; m = X(y, Z); )
      m === "\\" ? L += Ee(y) : L += m;
    const ie = y.currentChar();
    return ie === nt || ie === nn ? (p(ce.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0), ie === nt && (y.next(), O(y, "'")), L) : (O(y, "'"), L);
  }
  function Ee(y) {
    const m = y.currentChar();
    switch (m) {
      case "\\":
      case "'":
        return y.next(), `\\${m}`;
      case "u":
        return ee(y, m, 4);
      case "U":
        return ee(y, m, 6);
      default:
        return p(ce.UNKNOWN_ESCAPE_SEQUENCE, a(), 0, m), "";
    }
  }
  function ee(y, m, L) {
    O(y, m);
    let Z = "";
    for (let ie = 0; ie < L; ie++) {
      const ge = F(y);
      if (!ge) {
        p(ce.INVALID_UNICODE_ESCAPE_SEQUENCE, a(), 0, `\\${m}${Z}${y.currentChar()}`);
        break;
      }
      Z += ge;
    }
    return `\\${m}${Z}`;
  }
  function De(y) {
    D(y);
    let m = "", L = "";
    const Z = (ie) => ie !== "{" && ie !== "}" && ie !== Bt && ie !== nt;
    for (; m = X(y, Z); )
      L += m;
    return L;
  }
  function he(y) {
    let m = "", L = "";
    for (; m = K(y); )
      L += m;
    return L;
  }
  function Me(y) {
    const m = (L = !1, Z) => {
      const ie = y.currentChar();
      return ie === "{" || ie === "%" || ie === "@" || ie === "|" || ie === "(" || ie === ")" || !ie || ie === Bt ? Z : ie === nt || ie === RO ? (Z += ie, y.next(), m(L, Z)) : (Z += ie, y.next(), m(!0, Z));
    };
    return m(!1, "");
  }
  function $e(y) {
    D(y);
    const m = O(
      y,
      "|"
      /* TokenChars.Pipe */
    );
    return D(y), m;
  }
  function be(y, m) {
    let L = null;
    switch (y.currentChar()) {
      case "{":
        return m.braceNest >= 1 && p(ce.NOT_ALLOW_NEST_PLACEHOLDER, a(), 0), y.next(), L = v(
          m,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), D(y), m.braceNest++, L;
      case "}":
        return m.braceNest > 0 && m.currentType === 2 && p(ce.EMPTY_PLACEHOLDER, a(), 0), y.next(), L = v(
          m,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), m.braceNest--, m.braceNest > 0 && D(y), m.inLinked && m.braceNest === 0 && (m.inLinked = !1), L;
      case "@":
        return m.braceNest > 0 && p(ce.UNTERMINATED_CLOSING_BRACE, a(), 0), L = Ye(y, m) || f(m), m.braceNest = 0, L;
      default:
        let ie = !0, ge = !0, Ze = !0;
        if (S(y))
          return m.braceNest > 0 && p(ce.UNTERMINATED_CLOSING_BRACE, a(), 0), L = v(m, 1, $e(y)), m.braceNest = 0, m.inLinked = !1, L;
        if (m.braceNest > 0 && (m.currentType === 5 || m.currentType === 6 || m.currentType === 7))
          return p(ce.UNTERMINATED_CLOSING_BRACE, a(), 0), m.braceNest = 0, Re(y, m);
        if (ie = k(y, m))
          return L = v(m, 5, $(y)), D(y), L;
        if (ge = _(y, m))
          return L = v(m, 6, q(y)), D(y), L;
        if (Ze = I(y, m))
          return L = v(m, 7, pe(y)), D(y), L;
        if (!ie && !ge && !Ze)
          return L = v(m, 13, De(y)), p(ce.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, L.value), D(y), L;
        break;
    }
    return L;
  }
  function Ye(y, m) {
    const { currentType: L } = m;
    let Z = null;
    const ie = y.currentChar();
    switch ((L === 8 || L === 9 || L === 12 || L === 10) && (ie === nt || ie === Bt) && p(ce.INVALID_LINKED_FORMAT, a(), 0), ie) {
      case "@":
        return y.next(), Z = v(
          m,
          8,
          "@"
          /* TokenChars.LinkedAlias */
        ), m.inLinked = !0, Z;
      case ".":
        return D(y), y.next(), v(
          m,
          9,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return D(y), y.next(), v(
          m,
          10,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return S(y) ? (Z = v(m, 1, $e(y)), m.braceNest = 0, m.inLinked = !1, Z) : N(y, m) || P(y, m) ? (D(y), Ye(y, m)) : x(y, m) ? (D(y), v(m, 12, he(y))) : A(y, m) ? (D(y), ie === "{" ? be(y, m) || Z : v(m, 11, Me(y))) : (L === 8 && p(ce.INVALID_LINKED_FORMAT, a(), 0), m.braceNest = 0, m.inLinked = !1, Re(y, m));
    }
  }
  function Re(y, m) {
    let L = {
      type: 14
      /* TokenTypes.EOF */
    };
    if (m.braceNest > 0)
      return be(y, m) || f(m);
    if (m.inLinked)
      return Ye(y, m) || f(m);
    switch (y.currentChar()) {
      case "{":
        return be(y, m) || f(m);
      case "}":
        return p(ce.UNBALANCED_CLOSING_BRACE, a(), 0), y.next(), v(
          m,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return Ye(y, m) || f(m);
      default:
        if (S(y))
          return L = v(m, 1, $e(y)), m.braceNest = 0, m.inLinked = !1, L;
        const { isModulo: ie, hasSpace: ge } = j(y);
        if (ie)
          return ge ? v(m, 0, V(y)) : v(m, 4, W(y));
        if (Y(y))
          return v(m, 0, V(y));
        break;
    }
    return L;
  }
  function ze() {
    const { currentType: y, offset: m, startLoc: L, endLoc: Z } = l;
    return l.lastType = y, l.lastOffset = m, l.lastStartLoc = L, l.lastEndLoc = Z, l.offset = s(), l.startLoc = a(), r.currentChar() === nn ? v(
      l,
      14
      /* TokenTypes.EOF */
    ) : Re(r, l);
  }
  return {
    nextToken: ze,
    currentOffset: s,
    currentPosition: a,
    context: u
  };
}
const VO = "parser", UO = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function jO(e, t, n) {
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
function BO(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function r(d, b, k, _, ...I) {
    const N = d.currentPosition();
    if (N.offset += _, N.column += _, n) {
      const x = t ? Ka(k, N) : null, P = lr(b, x, {
        domain: VO,
        args: I
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
    const k = d.context(), { lastOffset: _, lastStartLoc: I } = k, N = s(5, _, I);
    return N.index = parseInt(b, 10), d.nextToken(), a(N, d.currentOffset(), d.currentPosition()), N;
  }
  function l(d, b) {
    const k = d.context(), { lastOffset: _, lastStartLoc: I } = k, N = s(4, _, I);
    return N.key = b, d.nextToken(), a(N, d.currentOffset(), d.currentPosition()), N;
  }
  function u(d, b) {
    const k = d.context(), { lastOffset: _, lastStartLoc: I } = k, N = s(9, _, I);
    return N.value = b.replace(UO, jO), d.nextToken(), a(N, d.currentOffset(), d.currentPosition()), N;
  }
  function c(d) {
    const b = d.nextToken(), k = d.context(), { lastOffset: _, lastStartLoc: I } = k, N = s(8, _, I);
    return b.type !== 12 ? (r(d, ce.UNEXPECTED_EMPTY_LINKED_MODIFIER, k.lastStartLoc, 0), N.value = "", a(N, _, I), {
      nextConsumeToken: b,
      node: N
    }) : (b.value == null && r(d, ce.UNEXPECTED_LEXICAL_ANALYSIS, k.lastStartLoc, 0, Lt(b)), N.value = b.value || "", a(N, d.currentOffset(), d.currentPosition()), {
      node: N
    });
  }
  function p(d, b) {
    const k = d.context(), _ = s(7, k.offset, k.startLoc);
    return _.value = b, a(_, d.currentOffset(), d.currentPosition()), _;
  }
  function v(d) {
    const b = d.context(), k = s(6, b.offset, b.startLoc);
    let _ = d.nextToken();
    if (_.type === 9) {
      const I = c(d);
      k.modifier = I.node, _ = I.nextConsumeToken || d.nextToken();
    }
    switch (_.type !== 10 && r(d, ce.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Lt(_)), _ = d.nextToken(), _.type === 2 && (_ = d.nextToken()), _.type) {
      case 11:
        _.value == null && r(d, ce.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Lt(_)), k.key = p(d, _.value || "");
        break;
      case 5:
        _.value == null && r(d, ce.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Lt(_)), k.key = l(d, _.value || "");
        break;
      case 6:
        _.value == null && r(d, ce.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Lt(_)), k.key = i(d, _.value || "");
        break;
      case 7:
        _.value == null && r(d, ce.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Lt(_)), k.key = u(d, _.value || "");
        break;
      default:
        r(d, ce.UNEXPECTED_EMPTY_LINKED_KEY, b.lastStartLoc, 0);
        const I = d.context(), N = s(7, I.offset, I.startLoc);
        return N.value = "", a(N, I.offset, I.startLoc), k.key = N, a(k, I.offset, I.startLoc), {
          nextConsumeToken: _,
          node: k
        };
    }
    return a(k, d.currentOffset(), d.currentPosition()), {
      node: k
    };
  }
  function f(d) {
    const b = d.context(), k = b.currentType === 1 ? d.currentOffset() : b.offset, _ = b.currentType === 1 ? b.endLoc : b.startLoc, I = s(2, k, _);
    I.items = [];
    let N = null;
    do {
      const A = N || d.nextToken();
      switch (N = null, A.type) {
        case 0:
          A.value == null && r(d, ce.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Lt(A)), I.items.push(o(d, A.value || ""));
          break;
        case 6:
          A.value == null && r(d, ce.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Lt(A)), I.items.push(i(d, A.value || ""));
          break;
        case 5:
          A.value == null && r(d, ce.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Lt(A)), I.items.push(l(d, A.value || ""));
          break;
        case 7:
          A.value == null && r(d, ce.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, Lt(A)), I.items.push(u(d, A.value || ""));
          break;
        case 8:
          const S = v(d);
          I.items.push(S.node), N = S.nextConsumeToken || null;
          break;
      }
    } while (b.currentType !== 14 && b.currentType !== 1);
    const x = b.currentType === 1 ? b.lastOffset : d.currentOffset(), P = b.currentType === 1 ? b.lastEndLoc : d.currentPosition();
    return a(I, x, P), I;
  }
  function O(d, b, k, _) {
    const I = d.context();
    let N = _.items.length === 0;
    const x = s(1, b, k);
    x.cases = [], x.cases.push(_);
    do {
      const P = f(d);
      N || (N = P.items.length === 0), x.cases.push(P);
    } while (I.currentType !== 14);
    return N && r(d, ce.MUST_HAVE_MESSAGES_IN_PLURAL, k, 0), a(x, d.currentOffset(), d.currentPosition()), x;
  }
  function g(d) {
    const b = d.context(), { offset: k, startLoc: _ } = b, I = f(d);
    return b.currentType === 14 ? I : O(d, k, _, I);
  }
  function D(d) {
    const b = FO(d, pu({}, e)), k = b.context(), _ = s(0, k.offset, k.startLoc);
    return t && _.loc && (_.loc.source = d), _.body = g(b), e.onCacheKey && (_.cacheKey = e.onCacheKey(d)), k.currentType !== 14 && r(b, ce.UNEXPECTED_LEXICAL_ANALYSIS, k.lastStartLoc, 0, d[k.offset] || ""), a(_, b.currentOffset(), b.currentPosition()), _;
  }
  return { parse: D };
}
function Lt(e) {
  if (e.type === 14)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function HO(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (a) => (n.helpers.add(a), a) };
}
function gi(e, t) {
  for (let n = 0; n < e.length; n++)
    Hs(e[n], t);
}
function Hs(e, t) {
  switch (e.type) {
    case 1:
      gi(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      gi(e.items, t);
      break;
    case 6:
      Hs(e.key, t), t.helper(
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
function WO(e, t = {}) {
  const n = HO(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && Hs(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function GO(e) {
  const t = e.body;
  return t.type === 2 ? _i(t) : t.cases.forEach((n) => _i(n)), e;
}
function _i(e) {
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
      e.static = mu(t);
      for (let n = 0; n < e.items.length; n++) {
        const r = e.items[n];
        (r.type === 3 || r.type === 9) && delete r.value;
      }
    }
  }
}
const KO = "minifier";
function Pn(e) {
  switch (e.t = e.type, e.type) {
    case 0:
      const t = e;
      Pn(t.body), t.b = t.body, delete t.body;
      break;
    case 1:
      const n = e, r = n.cases;
      for (let c = 0; c < r.length; c++)
        Pn(r[c]);
      n.c = r, delete n.cases;
      break;
    case 2:
      const s = e, a = s.items;
      for (let c = 0; c < a.length; c++)
        Pn(a[c]);
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
      Pn(i.key), i.k = i.key, delete i.key, i.modifier && (Pn(i.modifier), i.m = i.modifier, delete i.modifier);
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
      throw lr(ce.UNHANDLED_MINIFIER_NODE_TYPE, null, {
        domain: KO,
        args: [e.type]
      });
  }
  delete e.type;
}
const qO = "parser";
function zO(e, t) {
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
  function u(D, d) {
    i.code += D;
  }
  function c(D, d = !0) {
    const b = d ? s : "";
    u(a ? b + "  ".repeat(D) : b);
  }
  function p(D = !0) {
    const d = ++i.indentLevel;
    D && c(d);
  }
  function v(D = !0) {
    const d = --i.indentLevel;
    D && c(d);
  }
  function f() {
    c(i.indentLevel);
  }
  return {
    context: l,
    push: u,
    indent: p,
    deindent: v,
    newline: f,
    helper: (D) => `_${D}`,
    needIndent: () => i.needIndent
  };
}
function XO(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), Zn(e, t.key), t.modifier ? (e.push(", "), Zn(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function ZO(e, t) {
  const { helper: n, needIndent: r } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(r());
  const s = t.items.length;
  for (let a = 0; a < s && (Zn(e, t.items[a]), a !== s - 1); a++)
    e.push(", ");
  e.deindent(r()), e.push("])");
}
function JO(e, t) {
  const { helper: n, needIndent: r } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(r());
    const s = t.cases.length;
    for (let a = 0; a < s && (Zn(e, t.cases[a]), a !== s - 1); a++)
      e.push(", ");
    e.deindent(r()), e.push("])");
  }
}
function QO(e, t) {
  t.body ? Zn(e, t.body) : e.push("null");
}
function Zn(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      QO(e, t);
      break;
    case 1:
      JO(e, t);
      break;
    case 2:
      ZO(e, t);
      break;
    case 6:
      XO(e, t);
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
      throw lr(ce.UNHANDLED_CODEGEN_NODE_TYPE, null, {
        domain: qO,
        args: [t.type]
      });
  }
}
const ek = (e, t = {}) => {
  const n = mi(t.mode) ? t.mode : "normal", r = mi(t.filename) ? t.filename : "message.intl", s = !!t.sourceMap, a = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, o = t.needIndent ? t.needIndent : n !== "arrow", i = e.helpers || [], l = zO(e, {
    mode: n,
    filename: r,
    sourceMap: s,
    breakLineCode: a,
    needIndent: o
  });
  l.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), l.indent(o), i.length > 0 && (l.push(`const { ${mu(i.map((p) => `${p}: _${p}`), ", ")} } = ctx`), l.newline()), l.push("return "), Zn(l, e), l.deindent(o), l.push("}"), delete e.helpers;
  const { code: u, map: c } = l.context();
  return {
    ast: e,
    code: u,
    map: c ? c.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function tk(e, t = {}) {
  const n = pu({}, t), r = !!n.jit, s = !!n.minify, a = n.optimize == null ? !0 : n.optimize, i = BO(n).parse(e);
  return r ? (a && GO(i), s && Pn(i), { ast: i, code: "" }) : (WO(i, n), ek(i, n));
}
/*!
  * core-base v9.5.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */
function nk() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Ht().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (Ht().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Ht().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const hn = [];
hn[
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
hn[
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
hn[
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
hn[
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
hn[
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
hn[
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
hn[
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
const rk = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function ak(e) {
  return rk.test(e);
}
function sk(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function ok(e) {
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
function ik(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : ak(t) ? sk(t) : "*" + t;
}
function lk(e) {
  const t = [];
  let n = -1, r = 0, s = 0, a, o, i, l, u, c, p;
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
      if (s = 0, o === void 0 || (o = ik(o), o === !1))
        return !1;
      v[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function f() {
    const O = e[n + 1];
    if (r === 5 && O === "'" || r === 6 && O === '"')
      return n++, i = "\\" + O, v[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; r !== null; )
    if (n++, a = e[n], !(a === "\\" && f())) {
      if (l = ok(a), p = hn[r], u = p[l] || p.l || 8, u === 8 || (r = u[0], u[1] !== void 0 && (c = v[u[1]], c && (i = a, c() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const bi = /* @__PURE__ */ new Map();
function uk(e, t) {
  return Oe(e) ? e[t] : null;
}
function ck(e, t) {
  if (!Oe(e))
    return null;
  let n = bi.get(t);
  if (n || (n = lk(t), n && bi.set(t, n)), !n)
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
const dk = (e) => e, fk = (e) => "", vk = "text", pk = (e) => e.length === 0 ? "" : DO(e), mk = yO;
function yi(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function hk(e) {
  const t = Qe(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Qe(e.named.count) || Qe(e.named.n)) ? Qe(e.named.count) ? e.named.count : Qe(e.named.n) ? e.named.n : t : t;
}
function gk(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function _k(e = {}) {
  const t = e.locale, n = hk(e), r = Oe(e.pluralRules) && re(t) && Be(e.pluralRules[t]) ? e.pluralRules[t] : yi, s = Oe(e.pluralRules) && re(t) && Be(e.pluralRules[t]) ? yi : void 0, a = (d) => d[r(n, d.length, s)], o = e.list || [], i = (d) => o[d], l = e.named || {};
  Qe(e.pluralIndex) && gk(n, l);
  const u = (d) => l[d];
  function c(d) {
    const b = Be(e.messages) ? e.messages(d) : Oe(e.messages) ? e.messages[d] : !1;
    return b || (e.parent ? e.parent.message(d) : fk);
  }
  const p = (d) => e.modifiers ? e.modifiers[d] : dk, v = ye(e.processor) && Be(e.processor.normalize) ? e.processor.normalize : pk, f = ye(e.processor) && Be(e.processor.interpolate) ? e.processor.interpolate : mk, O = ye(e.processor) && re(e.processor.type) ? e.processor.type : vk, D = {
    list: i,
    named: u,
    plural: a,
    linked: (d, ...b) => {
      const [k, _] = b;
      let I = "text", N = "";
      b.length === 1 ? Oe(k) ? (N = k.modifier || N, I = k.type || I) : re(k) && (N = k || N) : b.length === 2 && (re(k) && (N = k || N), re(_) && (I = _ || I));
      const x = c(d)(D), P = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        I === "vnode" && Ge(x) && N ? x[0] : x
      );
      return N ? p(N)(P, I) : P;
    },
    message: c,
    type: O,
    interpolate: f,
    normalize: v,
    values: et({}, o, l)
  };
  return D;
}
let Tr = null;
function bk(e) {
  Tr = e;
}
function yk(e, t, n) {
  Tr && Tr.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: n
  });
}
const Dk = /* @__PURE__ */ wk(
  "function:translate"
  /* IntlifyDevToolsHooks.FunctionTranslate */
);
function wk(e) {
  return (t) => Tr && Tr.emit(e, t);
}
const rt = {
  NOT_FOUND_KEY: 1,
  FALLBACK_TO_TRANSLATE: 2,
  CANNOT_FORMAT_NUMBER: 3,
  FALLBACK_TO_NUMBER_FORMAT: 4,
  CANNOT_FORMAT_DATE: 5,
  FALLBACK_TO_DATE_FORMAT: 6,
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: 7,
  __EXTEND_POINT__: 8
}, Ek = {
  [rt.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
  [rt.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
  [rt.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
  [rt.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
  [rt.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
  [rt.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale.",
  [rt.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: "This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future."
};
function On(e, ...t) {
  return Us(Ek[e], ...t);
}
function Ws(e, t) {
  return t.locale != null ? Di(t.locale) : Di(e.locale);
}
let La;
function Di(e) {
  return re(e) ? e : La != null && e.resolvedOnce ? La : La = e();
}
function $k(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...Ge(t) ? t : Oe(t) ? Object.keys(t) : re(t) ? [t] : [n]
  ])];
}
function hu(e, t, n) {
  const r = re(n) ? n : Mr, s = e;
  s.__localeChainCache || (s.__localeChainCache = /* @__PURE__ */ new Map());
  let a = s.__localeChainCache.get(r);
  if (!a) {
    a = [];
    let o = [n];
    for (; Ge(o); )
      o = wi(a, o, t);
    const i = Ge(t) || !ye(t) ? t : t.default ? t.default : null;
    o = re(i) ? [i] : i, Ge(o) && wi(a, o, !1), s.__localeChainCache.set(r, a);
  }
  return a;
}
function wi(e, t, n) {
  let r = !0;
  for (let s = 0; s < t.length && Ae(r); s++) {
    const a = t[s];
    re(a) && (r = Ok(e, t[s], n));
  }
  return r;
}
function Ok(e, t, n) {
  let r;
  const s = t.split("-");
  do {
    const a = s.join("-");
    r = kk(e, a, n), s.splice(-1, 1);
  } while (s.length && r === !0);
  return r;
}
function kk(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== "!";
    const s = t.replace(/!/g, "");
    e.push(s), (Ge(n) || ye(n)) && n[s] && (r = n[s]);
  }
  return r;
}
const Nk = "9.5.0", $a = -1, Mr = "en-US", pa = "", Ei = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Tk() {
  return {
    upper: (e, t) => t === "text" && re(e) ? e.toUpperCase() : t === "vnode" && Oe(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && re(e) ? e.toLowerCase() : t === "vnode" && Oe(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && re(e) ? Ei(e) : t === "vnode" && Oe(e) && "__v_isVNode" in e ? Ei(e.children) : e
  };
}
let gu;
function $i(e) {
  gu = e;
}
let _u;
function Mk(e) {
  _u = e;
}
let bu;
function Ik(e) {
  bu = e;
}
let yu = null;
const Oi = (e) => {
  yu = e;
}, Ck = () => yu;
let Du = null;
const ki = (e) => {
  Du = e;
}, Pk = () => Du;
let Ni = 0;
function Ak(e = {}) {
  const t = Be(e.onWarn) ? e.onWarn : mn, n = re(e.version) ? e.version : Nk, r = re(e.locale) || Be(e.locale) ? e.locale : Mr, s = Be(r) ? Mr : r, a = Ge(e.fallbackLocale) || ye(e.fallbackLocale) || re(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : s, o = ye(e.messages) ? e.messages : { [s]: {} }, i = ye(e.datetimeFormats) ? e.datetimeFormats : { [s]: {} }, l = ye(e.numberFormats) ? e.numberFormats : { [s]: {} }, u = et({}, e.modifiers || {}, Tk()), c = e.pluralRules || {}, p = Be(e.missing) ? e.missing : null, v = Ae(e.missingWarn) || Xn(e.missingWarn) ? e.missingWarn : !0, f = Ae(e.fallbackWarn) || Xn(e.fallbackWarn) ? e.fallbackWarn : !0, O = !!e.fallbackFormat, g = !!e.unresolving, D = Be(e.postTranslation) ? e.postTranslation : null, d = ye(e.processor) ? e.processor : null, b = Ae(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, k = !!e.escapeParameter, _ = Be(e.messageCompiler) ? e.messageCompiler : gu;
  process.env.NODE_ENV !== "production" && Be(e.messageCompiler) && EO(On(rt.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
  const I = Be(e.messageResolver) ? e.messageResolver : _u || uk, N = Be(e.localeFallbacker) ? e.localeFallbacker : bu || $k, x = Oe(e.fallbackContext) ? e.fallbackContext : void 0, P = e, A = Oe(P.__datetimeFormatters) ? P.__datetimeFormatters : /* @__PURE__ */ new Map(), S = Oe(P.__numberFormatters) ? P.__numberFormatters : /* @__PURE__ */ new Map(), j = Oe(P.__meta) ? P.__meta : {};
  Ni++;
  const Y = {
    version: n,
    cid: Ni,
    locale: r,
    fallbackLocale: a,
    messages: o,
    modifiers: u,
    pluralRules: c,
    missing: p,
    missingWarn: v,
    fallbackWarn: f,
    fallbackFormat: O,
    unresolving: g,
    postTranslation: D,
    processor: d,
    warnHtmlMessage: b,
    escapeParameter: k,
    messageCompiler: _,
    messageResolver: I,
    localeFallbacker: N,
    fallbackContext: x,
    onWarn: t,
    __meta: j
  };
  return Y.datetimeFormats = i, Y.numberFormats = l, Y.__datetimeFormatters = A, Y.__numberFormatters = S, process.env.NODE_ENV !== "production" && (Y.__v_emitter = P.__v_emitter != null ? P.__v_emitter : void 0), (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && yk(Y, n, j), Y;
}
function Oa(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function wu(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function Gs(e, t, n, r, s) {
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
    return re(i) ? i : t;
  } else
    return process.env.NODE_ENV !== "production" && wu(r, t) && o(On(rt.NOT_FOUND_KEY, { key: t, locale: n })), t;
}
function mr(e, t, n) {
  const r = e;
  r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function Sa(e) {
  return (n) => Lk(n, e);
}
function Lk(e, t) {
  const n = t.b || t.body;
  if ((n.t || n.type) === 1) {
    const r = n, s = r.c || r.cases;
    return e.plural(s.reduce((a, o) => [
      ...a,
      Ti(e, o)
    ], []));
  } else
    return Ti(e, n);
}
function Ti(e, t) {
  const n = t.s || t.static;
  if (n)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const r = (t.i || t.items).reduce((s, a) => [...s, qa(e, a)], []);
    return e.normalize(r);
  }
}
function qa(e, t) {
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
      return e.linked(qa(e, i.k || i.key), l ? qa(e, l) : void 0, e.type);
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
const Eu = ce.__EXTEND_POINT__, jr = Bs(Eu), _t = {
  INVALID_ARGUMENT: Eu,
  INVALID_DATE_ARGUMENT: jr(),
  INVALID_ISO_DATE_ARGUMENT: jr(),
  NOT_SUPPORT_NON_STRING_MESSAGE: jr(),
  __EXTEND_POINT__: jr()
  // 22
};
function yn(e) {
  return lr(e, null, process.env.NODE_ENV !== "production" ? { messages: Sk } : void 0);
}
const Sk = {
  [_t.INVALID_ARGUMENT]: "Invalid arguments",
  [_t.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [_t.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
  [_t.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message"
}, xk = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function $u(e, t) {
  t && PO(e) && mn(Us(xk, { source: e }));
}
const Ou = (e) => e;
let Fn = /* @__PURE__ */ Object.create(null);
const Jn = (e) => Oe(e) && (e.t === 0 || e.type === 0) && ("b" in e || "body" in e);
function ku(e, t = {}) {
  let n = !1;
  const r = t.onError || IO;
  return t.onError = (s) => {
    n = !0, r(s);
  }, { ...tk(e, t), detectError: n };
}
const Rk = (e, t) => {
  if (!re(e))
    throw yn(_t.NOT_SUPPORT_NON_STRING_MESSAGE);
  {
    const n = Ae(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && $u(e, n);
    const s = (t.onCacheKey || Ou)(e), a = Fn[s];
    if (a)
      return a;
    const { code: o, detectError: i } = ku(e, t), l = new Function(`return ${o}`)();
    return i ? l : Fn[s] = l;
  }
};
function Yk(e, t) {
  if (__INTLIFY_JIT_COMPILATION__ && !__INTLIFY_DROP_MESSAGE_COMPILER__ && re(e)) {
    const n = Ae(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && $u(e, n);
    const s = (t.onCacheKey || Ou)(e), a = Fn[s];
    if (a)
      return a;
    const { ast: o, detectError: i } = ku(e, {
      ...t,
      location: process.env.NODE_ENV !== "production",
      jit: !0
    }), l = Sa(o);
    return i ? l : Fn[s] = l;
  } else {
    if (process.env.NODE_ENV !== "production" && !Jn(e))
      return mn(`the message that is resolve with key '${t.key}' is not supported for jit compilation`), () => e;
    const n = e.cacheKey;
    if (n) {
      const r = Fn[n];
      return r || (Fn[n] = Sa(e));
    } else
      return Sa(e);
  }
}
const Mi = () => "", Tt = (e) => Be(e);
function Ii(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: s, messageCompiler: a, fallbackLocale: o, messages: i } = e, [l, u] = za(...t), c = Ae(u.missingWarn) ? u.missingWarn : e.missingWarn, p = Ae(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, v = Ae(u.escapeParameter) ? u.escapeParameter : e.escapeParameter, f = !!u.resolvedMessage, O = re(u.default) || Ae(u.default) ? Ae(u.default) ? a ? l : () => l : u.default : n ? a ? l : () => l : "", g = n || O !== "", D = Ws(e, u);
  v && Fk(u);
  let [d, b, k] = f ? [
    l,
    D,
    i[D] || {}
  ] : Nu(e, l, D, o, p, c), _ = d, I = l;
  if (!f && !(re(_) || Jn(_) || Tt(_)) && g && (_ = O, I = _), !f && (!(re(_) || Jn(_) || Tt(_)) || !re(b)))
    return s ? $a : l;
  if (process.env.NODE_ENV !== "production" && re(_) && e.messageCompiler == null)
    return mn(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${l}'.`), l;
  let N = !1;
  const x = () => {
    N = !0;
  }, P = Tt(_) ? _ : Tu(e, l, b, _, I, x);
  if (N)
    return _;
  const A = Bk(e, b, k, u), S = _k(A), j = Vk(e, P, S), Y = r ? r(j, l) : j;
  if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    const X = {
      timestamp: Date.now(),
      key: re(l) ? l : Tt(_) ? _.key : "",
      locale: b || (Tt(_) ? _.locale : ""),
      format: re(_) ? _ : Tt(_) ? _.source : "",
      message: Y
    };
    X.meta = et({}, e.__meta, Ck() || {}), Dk(X);
  }
  return Y;
}
function Fk(e) {
  Ge(e.list) ? e.list = e.list.map((t) => re(t) ? fi(t) : t) : Oe(e.named) && Object.keys(e.named).forEach((t) => {
    re(e.named[t]) && (e.named[t] = fi(e.named[t]));
  });
}
function Nu(e, t, n, r, s, a) {
  const { messages: o, onWarn: i, messageResolver: l, localeFallbacker: u } = e, c = u(e, r, n);
  let p = {}, v, f = null, O = n, g = null;
  const D = "translate";
  for (let d = 0; d < c.length; d++) {
    if (v = g = c[d], process.env.NODE_ENV !== "production" && n !== v && Oa(s, t) && i(On(rt.FALLBACK_TO_TRANSLATE, {
      key: t,
      target: v
    })), process.env.NODE_ENV !== "production" && n !== v) {
      const N = e.__v_emitter;
      N && N.emit("fallback", {
        type: D,
        key: t,
        from: O,
        to: g,
        groupId: `${D}:${t}`
      });
    }
    p = o[v] || {};
    let b = null, k, _;
    if (process.env.NODE_ENV !== "production" && fn && (b = window.performance.now(), k = "intlify-message-resolve-start", _ = "intlify-message-resolve-end", dt && dt(k)), (f = l(p, t)) === null && (f = p[t]), process.env.NODE_ENV !== "production" && fn) {
      const N = window.performance.now(), x = e.__v_emitter;
      x && b && f && x.emit("message-resolve", {
        type: "message-resolve",
        key: t,
        message: f,
        time: N - b,
        groupId: `${D}:${t}`
      }), k && _ && dt && $n && (dt(_), $n("intlify message resolve", k, _));
    }
    if (re(f) || Jn(f) || Tt(f))
      break;
    const I = Gs(
      e,
      // eslint-disable-line @typescript-eslint/no-explicit-any
      t,
      v,
      a,
      D
    );
    I !== t && (f = I), O = g;
  }
  return [f, v, p];
}
function Tu(e, t, n, r, s, a) {
  const { messageCompiler: o, warnHtmlMessage: i } = e;
  if (Tt(r)) {
    const v = r;
    return v.locale = v.locale || n, v.key = v.key || t, v;
  }
  if (o == null) {
    const v = () => r;
    return v.locale = n, v.key = t, v;
  }
  let l = null, u, c;
  process.env.NODE_ENV !== "production" && fn && (l = window.performance.now(), u = "intlify-message-compilation-start", c = "intlify-message-compilation-end", dt && dt(u));
  const p = o(r, Uk(e, n, s, r, i, a));
  if (process.env.NODE_ENV !== "production" && fn) {
    const v = window.performance.now(), f = e.__v_emitter;
    f && l && f.emit("message-compilation", {
      type: "message-compilation",
      message: r,
      time: v - l,
      groupId: `translate:${t}`
    }), u && c && dt && $n && (dt(c), $n("intlify message compilation", u, c));
  }
  return p.locale = n, p.key = t, p.source = r, p;
}
function Vk(e, t, n) {
  let r = null, s, a;
  process.env.NODE_ENV !== "production" && fn && (r = window.performance.now(), s = "intlify-message-evaluation-start", a = "intlify-message-evaluation-end", dt && dt(s));
  const o = t(n);
  if (process.env.NODE_ENV !== "production" && fn) {
    const i = window.performance.now(), l = e.__v_emitter;
    l && r && l.emit("message-evaluation", {
      type: "message-evaluation",
      value: o,
      time: i - r,
      groupId: `translate:${t.key}`
    }), s && a && dt && $n && (dt(a), $n("intlify message evaluation", s, a));
  }
  return o;
}
function za(...e) {
  const [t, n, r] = e, s = {};
  if (!re(t) && !Qe(t) && !Tt(t) && !Jn(t))
    throw yn(_t.INVALID_ARGUMENT);
  const a = Qe(t) ? String(t) : (Tt(t), t);
  return Qe(n) ? s.plural = n : re(n) ? s.default = n : ye(n) && !Ea(n) ? s.named = n : Ge(n) && (s.list = n), Qe(r) ? s.plural = r : re(r) ? s.default = r : ye(r) && et(s, r), [a, s];
}
function Uk(e, t, n, r, s, a) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: s,
    onError: (o) => {
      if (a && a(o), process.env.NODE_ENV !== "production") {
        const i = jk(r), l = `Message compilation error: ${o.message}`, u = o.location && i && wO(i, o.location.start.offset, o.location.end.offset), c = e.__v_emitter;
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
    onCacheKey: (o) => hO(t, n, o)
  };
}
function jk(e) {
  var t;
  if (!re(e)) {
    if ((t = e.loc) != null && t.source)
      return e.loc.source;
  }
}
function Bk(e, t, n, r) {
  const { modifiers: s, pluralRules: a, messageResolver: o, fallbackLocale: i, fallbackWarn: l, missingWarn: u, fallbackContext: c } = e, v = {
    locale: t,
    modifiers: s,
    pluralRules: a,
    messages: (f) => {
      let O = o(n, f);
      if (O == null && c) {
        const [, , g] = Nu(c, f, t, i, l, u);
        O = o(g, f);
      }
      if (re(O) || Jn(O)) {
        let g = !1;
        const d = Tu(e, f, t, O, f, () => {
          g = !0;
        });
        return g ? Mi : d;
      } else
        return Tt(O) ? O : Mi;
    }
  };
  return e.processor && (v.processor = e.processor), r.list && (v.list = r.list), r.named && (v.named = r.named), Qe(r.plural) && (v.pluralIndex = r.plural), v;
}
const Ci = typeof Intl < "u", Mu = {
  dateTimeFormat: Ci && typeof Intl.DateTimeFormat < "u",
  numberFormat: Ci && typeof Intl.NumberFormat < "u"
};
function Pi(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: s, onWarn: a, localeFallbacker: o } = e, { __datetimeFormatters: i } = e;
  if (process.env.NODE_ENV !== "production" && !Mu.dateTimeFormat)
    return a(On(rt.CANNOT_FORMAT_DATE)), pa;
  const [l, u, c, p] = Xa(...t), v = Ae(c.missingWarn) ? c.missingWarn : e.missingWarn, f = Ae(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn, O = !!c.part, g = Ws(e, c), D = o(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    s,
    g
  );
  if (!re(l) || l === "")
    return new Intl.DateTimeFormat(g, p).format(u);
  let d = {}, b, k = null, _ = g, I = null;
  const N = "datetime format";
  for (let A = 0; A < D.length; A++) {
    if (b = I = D[A], process.env.NODE_ENV !== "production" && g !== b && Oa(f, l) && a(On(rt.FALLBACK_TO_DATE_FORMAT, {
      key: l,
      target: b
    })), process.env.NODE_ENV !== "production" && g !== b) {
      const S = e.__v_emitter;
      S && S.emit("fallback", {
        type: N,
        key: l,
        from: _,
        to: I,
        groupId: `${N}:${l}`
      });
    }
    if (d = n[b] || {}, k = d[l], ye(k))
      break;
    Gs(e, l, b, v, N), _ = I;
  }
  if (!ye(k) || !re(b))
    return r ? $a : l;
  let x = `${b}__${l}`;
  Ea(p) || (x = `${x}__${JSON.stringify(p)}`);
  let P = i.get(x);
  return P || (P = new Intl.DateTimeFormat(b, et({}, k, p)), i.set(x, P)), O ? P.formatToParts(u) : P.format(u);
}
const Iu = [
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
function Xa(...e) {
  const [t, n, r, s] = e, a = {};
  let o = {}, i;
  if (re(t)) {
    const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l)
      throw yn(_t.INVALID_ISO_DATE_ARGUMENT);
    const u = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
    i = new Date(u);
    try {
      i.toISOString();
    } catch {
      throw yn(_t.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (_O(t)) {
    if (isNaN(t.getTime()))
      throw yn(_t.INVALID_DATE_ARGUMENT);
    i = t;
  } else if (Qe(t))
    i = t;
  else
    throw yn(_t.INVALID_ARGUMENT);
  return re(n) ? a.key = n : ye(n) && Object.keys(n).forEach((l) => {
    Iu.includes(l) ? o[l] = n[l] : a[l] = n[l];
  }), re(r) ? a.locale = r : ye(r) && (o = r), ye(s) && (o = s), [a.key || "", i, a, o];
}
function Ai(e, t, n) {
  const r = e;
  for (const s in n) {
    const a = `${t}__${s}`;
    r.__datetimeFormatters.has(a) && r.__datetimeFormatters.delete(a);
  }
}
function Li(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: s, onWarn: a, localeFallbacker: o } = e, { __numberFormatters: i } = e;
  if (process.env.NODE_ENV !== "production" && !Mu.numberFormat)
    return a(On(rt.CANNOT_FORMAT_NUMBER)), pa;
  const [l, u, c, p] = Za(...t), v = Ae(c.missingWarn) ? c.missingWarn : e.missingWarn, f = Ae(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn, O = !!c.part, g = Ws(e, c), D = o(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    s,
    g
  );
  if (!re(l) || l === "")
    return new Intl.NumberFormat(g, p).format(u);
  let d = {}, b, k = null, _ = g, I = null;
  const N = "number format";
  for (let A = 0; A < D.length; A++) {
    if (b = I = D[A], process.env.NODE_ENV !== "production" && g !== b && Oa(f, l) && a(On(rt.FALLBACK_TO_NUMBER_FORMAT, {
      key: l,
      target: b
    })), process.env.NODE_ENV !== "production" && g !== b) {
      const S = e.__v_emitter;
      S && S.emit("fallback", {
        type: N,
        key: l,
        from: _,
        to: I,
        groupId: `${N}:${l}`
      });
    }
    if (d = n[b] || {}, k = d[l], ye(k))
      break;
    Gs(e, l, b, v, N), _ = I;
  }
  if (!ye(k) || !re(b))
    return r ? $a : l;
  let x = `${b}__${l}`;
  Ea(p) || (x = `${x}__${JSON.stringify(p)}`);
  let P = i.get(x);
  return P || (P = new Intl.NumberFormat(b, et({}, k, p)), i.set(x, P)), O ? P.formatToParts(u) : P.format(u);
}
const Cu = [
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
function Za(...e) {
  const [t, n, r, s] = e, a = {};
  let o = {};
  if (!Qe(t))
    throw yn(_t.INVALID_ARGUMENT);
  const i = t;
  return re(n) ? a.key = n : ye(n) && Object.keys(n).forEach((l) => {
    Cu.includes(l) ? o[l] = n[l] : a[l] = n[l];
  }), re(r) ? a.locale = r : ye(r) && (o = r), ye(s) && (o = s), [a.key || "", i, a, o];
}
function Si(e, t, n) {
  const r = e;
  for (const s in n) {
    const a = `${t}__${s}`;
    r.__numberFormatters.has(a) && r.__numberFormatters.delete(a);
  }
}
nk();
/*!
  * vue-i18n v9.5.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */
const Hk = "9.5.0";
function Wk() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (Ht().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (Ht().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (Ht().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Ht().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Ht().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const Pu = rt.__EXTEND_POINT__, rn = Bs(Pu), ht = {
  FALLBACK_TO_ROOT: Pu,
  NOT_SUPPORTED_PRESERVE: rn(),
  NOT_SUPPORTED_FORMATTER: rn(),
  NOT_SUPPORTED_PRESERVE_DIRECTIVE: rn(),
  NOT_SUPPORTED_GET_CHOICE_INDEX: rn(),
  COMPONENT_NAME_LEGACY_COMPATIBLE: rn(),
  NOT_FOUND_PARENT_SCOPE: rn(),
  IGNORE_OBJ_FLATTEN: rn(),
  NOTICE_DROP_ALLOW_COMPOSITION: rn()
  // 17
}, Gk = {
  [ht.FALLBACK_TO_ROOT]: "Fall back to {type} '{key}' with root locale.",
  [ht.NOT_SUPPORTED_PRESERVE]: "Not supported 'preserve'.",
  [ht.NOT_SUPPORTED_FORMATTER]: "Not supported 'formatter'.",
  [ht.NOT_SUPPORTED_PRESERVE_DIRECTIVE]: "Not supported 'preserveDirectiveContent'.",
  [ht.NOT_SUPPORTED_GET_CHOICE_INDEX]: "Not supported 'getChoiceIndex'.",
  [ht.COMPONENT_NAME_LEGACY_COMPATIBLE]: "Component name legacy compatible: '{name}' -> 'i18n'",
  [ht.NOT_FOUND_PARENT_SCOPE]: "Not found parent scope. use the global scope.",
  [ht.IGNORE_OBJ_FLATTEN]: "Ignore object flatten: '{key}' key has an string value",
  [ht.NOTICE_DROP_ALLOW_COMPOSITION]: "'allowComposition' option will be dropped in the next major version. For more information, please see 👉 https://tinyurl.com/2p97mcze"
};
function Ks(e, ...t) {
  return Us(Gk[e], ...t);
}
const Au = _t.__EXTEND_POINT__, ot = Bs(Au), Se = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: Au,
  // legacy module errors
  INVALID_ARGUMENT: ot(),
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: ot(),
  NOT_INSTALLED: ot(),
  NOT_AVAILABLE_IN_LEGACY_MODE: ot(),
  // directive module errors
  REQUIRED_VALUE: ot(),
  INVALID_VALUE: ot(),
  // vue-devtools errors
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: ot(),
  NOT_INSTALLED_WITH_PROVIDE: ot(),
  // unexpected error
  UNEXPECTED_ERROR: ot(),
  // not compatible legacy vue-i18n constructor
  NOT_COMPATIBLE_LEGACY_VUE_I18N: ot(),
  // bridge support vue 2.x only
  BRIDGE_SUPPORT_VUE_2_ONLY: ot(),
  // need to define `i18n` option in `allowComposition: true` and `useScope: 'local' at `useI18n``
  MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: ot(),
  // Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: ot(),
  // for enhancement
  __EXTEND_POINT__: ot()
  // 37
};
function Gt(e, ...t) {
  return lr(e, null, process.env.NODE_ENV !== "production" ? { messages: Kk, args: t } : void 0);
}
const Kk = {
  [Se.UNEXPECTED_RETURN_TYPE]: "Unexpected return type in composer",
  [Se.INVALID_ARGUMENT]: "Invalid argument",
  [Se.MUST_BE_CALL_SETUP_TOP]: "Must be called at the top of a `setup` function",
  [Se.NOT_INSTALLED]: "Need to install with `app.use` function",
  [Se.UNEXPECTED_ERROR]: "Unexpected error",
  [Se.NOT_AVAILABLE_IN_LEGACY_MODE]: "Not available in legacy mode",
  [Se.REQUIRED_VALUE]: "Required in value: {0}",
  [Se.INVALID_VALUE]: "Invalid value",
  [Se.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: "Cannot setup vue-devtools plugin",
  [Se.NOT_INSTALLED_WITH_PROVIDE]: "Need to install with `provide` function",
  [Se.NOT_COMPATIBLE_LEGACY_VUE_I18N]: "Not compatible legacy VueI18n.",
  [Se.BRIDGE_SUPPORT_VUE_2_ONLY]: "vue-i18n-bridge support Vue 2.x only",
  [Se.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION]: "Must define ‘i18n’ option or custom block in Composition API with using local scope in Legacy API mode",
  [Se.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]: "Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"
}, Ja = /* @__PURE__ */ Qt("__translateVNode"), Qa = /* @__PURE__ */ Qt("__datetimeParts"), es = /* @__PURE__ */ Qt("__numberParts"), ts = /* @__PURE__ */ Qt("__enableEmitter"), ns = /* @__PURE__ */ Qt("__disableEmitter"), qk = Qt("__setPluralRules"), Lu = /* @__PURE__ */ Qt("__injectWithOption"), rs = /* @__PURE__ */ Qt("__dispose");
function as(e) {
  if (!Oe(e))
    return e;
  for (const t in e)
    if (js(e, t))
      if (!t.includes("."))
        Oe(e[t]) && as(e[t]);
      else {
        const n = t.split("."), r = n.length - 1;
        let s = e, a = !1;
        for (let o = 0; o < r; o++) {
          if (n[o] in s || (s[n[o]] = {}), !Oe(s[n[o]])) {
            process.env.NODE_ENV !== "production" && mn(Ks(ht.IGNORE_OBJ_FLATTEN, {
              key: n[o]
            })), a = !0;
            break;
          }
          s = s[n[o]];
        }
        a || (s[n[r]] = e[t], delete e[t]), Oe(s[n[r]]) && as(s[n[r]]);
      }
  return e;
}
function qs(e, t) {
  const { messages: n, __i18n: r, messageResolver: s, flatJson: a } = t, o = ye(n) ? n : Ge(r) ? {} : { [e]: {} };
  if (Ge(r) && r.forEach((i) => {
    if ("locale" in i && "resource" in i) {
      const { locale: l, resource: u } = i;
      l ? (o[l] = o[l] || {}, Er(u, o[l])) : Er(u, o);
    } else
      re(i) && Er(JSON.parse(i), o);
  }), s == null && a)
    for (const i in o)
      js(o, i) && as(o[i]);
  return o;
}
const Br = (e) => !Oe(e) || Ge(e);
function Er(e, t) {
  if (Br(e) || Br(t))
    throw Gt(Se.INVALID_VALUE);
  for (const n in e)
    js(e, n) && (Br(e[n]) || Br(t[n]) ? t[n] = e[n] : Er(e[n], t[n]));
}
function Su(e) {
  return e.type;
}
function zk(e, t, n) {
  let r = Oe(t.messages) ? t.messages : {};
  "__i18nGlobal" in n && (r = qs(e.locale.value, {
    messages: r,
    __i18n: n.__i18nGlobal
  }));
  const s = Object.keys(r);
  s.length && s.forEach((a) => {
    e.mergeLocaleMessage(a, r[a]);
  });
  {
    if (Oe(t.datetimeFormats)) {
      const a = Object.keys(t.datetimeFormats);
      a.length && a.forEach((o) => {
        e.mergeDateTimeFormat(o, t.datetimeFormats[o]);
      });
    }
    if (Oe(t.numberFormats)) {
      const a = Object.keys(t.numberFormats);
      a.length && a.forEach((o) => {
        e.mergeNumberFormat(o, t.numberFormats[o]);
      });
    }
  }
}
function xi(e) {
  return ve(Wu, null, e, 0);
}
const Ri = "__INTLIFY_META__";
let Yi = 0;
function Fi(e) {
  return (t, n, r, s) => e(n, r, is() || void 0, s);
}
const Xk = () => {
  const e = is();
  let t = null;
  return e && (t = Su(e)[Ri]) ? { [Ri]: t } : null;
};
function Zk(e = {}, t) {
  const { __root: n, __injectWithOption: r } = e, s = n === void 0;
  let a = Ae(e.inheritLocale) ? e.inheritLocale : !0;
  const o = ne(
    // prettier-ignore
    n && a ? n.locale.value : re(e.locale) ? e.locale : Mr
  ), i = ne(
    // prettier-ignore
    n && a ? n.fallbackLocale.value : re(e.fallbackLocale) || Ge(e.fallbackLocale) || ye(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o.value
  ), l = ne(qs(o.value, e)), u = ne(ye(e.datetimeFormats) ? e.datetimeFormats : { [o.value]: {} }), c = ne(ye(e.numberFormats) ? e.numberFormats : { [o.value]: {} });
  let p = n ? n.missingWarn : Ae(e.missingWarn) || Xn(e.missingWarn) ? e.missingWarn : !0, v = n ? n.fallbackWarn : Ae(e.fallbackWarn) || Xn(e.fallbackWarn) ? e.fallbackWarn : !0, f = n ? n.fallbackRoot : Ae(e.fallbackRoot) ? e.fallbackRoot : !0, O = !!e.fallbackFormat, g = Be(e.missing) ? e.missing : null, D = Be(e.missing) ? Fi(e.missing) : null, d = Be(e.postTranslation) ? e.postTranslation : null, b = n ? n.warnHtmlMessage : Ae(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, k = !!e.escapeParameter;
  const _ = n ? n.modifiers : ye(e.modifiers) ? e.modifiers : {};
  let I = e.pluralRules || n && n.pluralRules, N;
  N = (() => {
    s && ki(null);
    const R = {
      version: Hk,
      locale: o.value,
      fallbackLocale: i.value,
      messages: l.value,
      modifiers: _,
      pluralRules: I,
      missing: D === null ? void 0 : D,
      missingWarn: p,
      fallbackWarn: v,
      fallbackFormat: O,
      unresolving: !0,
      postTranslation: d === null ? void 0 : d,
      warnHtmlMessage: b,
      escapeParameter: k,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    R.datetimeFormats = u.value, R.numberFormats = c.value, R.__datetimeFormatters = ye(N) ? N.__datetimeFormatters : void 0, R.__numberFormatters = ye(N) ? N.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (R.__v_emitter = ye(N) ? N.__v_emitter : void 0);
    const H = Ak(R);
    return s && ki(H), H;
  })(), mr(N, o.value, i.value);
  function P() {
    return [
      o.value,
      i.value,
      l.value,
      u.value,
      c.value
    ];
  }
  const A = C({
    get: () => o.value,
    set: (R) => {
      o.value = R, N.locale = o.value;
    }
  }), S = C({
    get: () => i.value,
    set: (R) => {
      i.value = R, N.fallbackLocale = i.value, mr(N, o.value, R);
    }
  }), j = C(() => l.value), Y = /* @__PURE__ */ C(() => u.value), X = /* @__PURE__ */ C(() => c.value);
  function K() {
    return Be(d) ? d : null;
  }
  function U(R) {
    d = R, N.postTranslation = R;
  }
  function F() {
    return g;
  }
  function Q(R) {
    R !== null && (D = Fi(R)), g = R, N.missing = D;
  }
  function W(R, H) {
    return R !== "translate" || !H.resolvedMessage;
  }
  const V = (R, H, Fe, Ve, At, en) => {
    P();
    let Et;
    try {
      (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && Oi(Xk()), s || (N.fallbackContext = n ? Pk() : void 0), Et = R(N);
    } finally {
      (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && Oi(null), s || (N.fallbackContext = void 0);
    }
    if (Qe(Et) && Et === $a) {
      const [$t, gn] = H();
      if (process.env.NODE_ENV !== "production" && n && re($t) && W(Fe, gn) && (f && (Oa(v, $t) || wu(p, $t)) && mn(Ks(ht.FALLBACK_TO_ROOT, {
        key: $t,
        type: Fe
      })), process.env.NODE_ENV !== "production")) {
        const { __v_emitter: Mn } = N;
        Mn && f && Mn.emit("fallback", {
          type: Fe,
          key: $t,
          to: "global",
          groupId: `${Fe}:${$t}`
        });
      }
      return n && f ? Ve(n) : At($t);
    } else {
      if (en(Et))
        return Et;
      throw Gt(Se.UNEXPECTED_RETURN_TYPE);
    }
  };
  function $(...R) {
    return V((H) => Reflect.apply(Ii, null, [H, ...R]), () => za(...R), "translate", (H) => Reflect.apply(H.t, H, [...R]), (H) => H, (H) => re(H));
  }
  function q(...R) {
    const [H, Fe, Ve] = R;
    if (Ve && !Oe(Ve))
      throw Gt(Se.INVALID_ARGUMENT);
    return $(H, Fe, et({ resolvedMessage: !0 }, Ve || {}));
  }
  function pe(...R) {
    return V((H) => Reflect.apply(Pi, null, [H, ...R]), () => Xa(...R), "datetime format", (H) => Reflect.apply(H.d, H, [...R]), () => pa, (H) => re(H));
  }
  function Ee(...R) {
    return V((H) => Reflect.apply(Li, null, [H, ...R]), () => Za(...R), "number format", (H) => Reflect.apply(H.n, H, [...R]), () => pa, (H) => re(H));
  }
  function ee(R) {
    return R.map((H) => re(H) || Qe(H) || Ae(H) ? xi(String(H)) : H);
  }
  const he = {
    normalize: ee,
    interpolate: (R) => R,
    type: "vnode"
  };
  function Me(...R) {
    return V(
      (H) => {
        let Fe;
        const Ve = H;
        try {
          Ve.processor = he, Fe = Reflect.apply(Ii, null, [Ve, ...R]);
        } finally {
          Ve.processor = null;
        }
        return Fe;
      },
      () => za(...R),
      "translate",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (H) => H[Ja](...R),
      (H) => [xi(H)],
      (H) => Ge(H)
    );
  }
  function $e(...R) {
    return V(
      (H) => Reflect.apply(Li, null, [H, ...R]),
      () => Za(...R),
      "number format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (H) => H[es](...R),
      () => [],
      (H) => re(H) || Ge(H)
    );
  }
  function be(...R) {
    return V(
      (H) => Reflect.apply(Pi, null, [H, ...R]),
      () => Xa(...R),
      "datetime format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (H) => H[Qa](...R),
      () => [],
      (H) => re(H) || Ge(H)
    );
  }
  function Ye(R) {
    I = R, N.pluralRules = I;
  }
  function Re(R, H) {
    if (!R)
      return !1;
    const Fe = re(H) ? H : o.value, Ve = m(Fe);
    return N.messageResolver(Ve, R) !== null;
  }
  function ze(R) {
    let H = null;
    const Fe = hu(N, i.value, o.value);
    for (let Ve = 0; Ve < Fe.length; Ve++) {
      const At = l.value[Fe[Ve]] || {}, en = N.messageResolver(At, R);
      if (en != null) {
        H = en;
        break;
      }
    }
    return H;
  }
  function y(R) {
    const H = ze(R);
    return H ?? (n ? n.tm(R) || {} : {});
  }
  function m(R) {
    return l.value[R] || {};
  }
  function L(R, H) {
    l.value[R] = H, N.messages = l.value;
  }
  function Z(R, H) {
    l.value[R] = l.value[R] || {}, Er(H, l.value[R]), N.messages = l.value;
  }
  function ie(R) {
    return u.value[R] || {};
  }
  function ge(R, H) {
    u.value[R] = H, N.datetimeFormats = u.value, Ai(N, R, H);
  }
  function Ze(R, H) {
    u.value[R] = et(u.value[R] || {}, H), N.datetimeFormats = u.value, Ai(N, R, H);
  }
  function Ue(R) {
    return c.value[R] || {};
  }
  function vt(R, H) {
    c.value[R] = H, N.numberFormats = c.value, Si(N, R, H);
  }
  function Pt(R, H) {
    c.value[R] = et(c.value[R] || {}, H), N.numberFormats = c.value, Si(N, R, H);
  }
  Yi++, n && fn && (ke(n.locale, (R) => {
    a && (o.value = R, N.locale = R, mr(N, o.value, i.value));
  }), ke(n.fallbackLocale, (R) => {
    a && (i.value = R, N.fallbackLocale = R, mr(N, o.value, i.value));
  }));
  const Ne = {
    id: Yi,
    locale: A,
    fallbackLocale: S,
    get inheritLocale() {
      return a;
    },
    set inheritLocale(R) {
      a = R, R && n && (o.value = n.locale.value, i.value = n.fallbackLocale.value, mr(N, o.value, i.value));
    },
    get availableLocales() {
      return Object.keys(l.value).sort();
    },
    messages: j,
    get modifiers() {
      return _;
    },
    get pluralRules() {
      return I || {};
    },
    get isGlobal() {
      return s;
    },
    get missingWarn() {
      return p;
    },
    set missingWarn(R) {
      p = R, N.missingWarn = p;
    },
    get fallbackWarn() {
      return v;
    },
    set fallbackWarn(R) {
      v = R, N.fallbackWarn = v;
    },
    get fallbackRoot() {
      return f;
    },
    set fallbackRoot(R) {
      f = R;
    },
    get fallbackFormat() {
      return O;
    },
    set fallbackFormat(R) {
      O = R, N.fallbackFormat = O;
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
    getLocaleMessage: m,
    setLocaleMessage: L,
    mergeLocaleMessage: Z,
    getPostTranslationHandler: K,
    setPostTranslationHandler: U,
    getMissingHandler: F,
    setMissingHandler: Q,
    [qk]: Ye
  };
  return Ne.datetimeFormats = Y, Ne.numberFormats = X, Ne.rt = q, Ne.te = Re, Ne.tm = y, Ne.d = pe, Ne.n = Ee, Ne.getDateTimeFormat = ie, Ne.setDateTimeFormat = ge, Ne.mergeDateTimeFormat = Ze, Ne.getNumberFormat = Ue, Ne.setNumberFormat = vt, Ne.mergeNumberFormat = Pt, Ne[Lu] = r, Ne[Ja] = Me, Ne[Qa] = be, Ne[es] = $e, process.env.NODE_ENV !== "production" && (Ne[ts] = (R) => {
    N.__v_emitter = R;
  }, Ne[ns] = () => {
    N.__v_emitter = void 0;
  }), Ne;
}
const zs = {
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
function Jk({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, s) => [
    ...r,
    // prettier-ignore
    ...s.type === te ? s.children : [s]
  ], []) : t.reduce((n, r) => {
    const s = e[r];
    return s && (n[r] = s()), n;
  }, {});
}
function xu(e) {
  return te;
}
et({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    validator: (e) => Qe(e) || !isNaN(e)
  }
}, zs);
function Qk(e) {
  return Ge(e) && !re(e[0]);
}
function Ru(e, t, n, r) {
  const { slots: s, attrs: a } = t;
  return () => {
    const o = { part: !0 };
    let i = {};
    e.locale && (o.locale = e.locale), re(e.format) ? o.key = e.format : Oe(e.format) && (re(e.format.key) && (o.key = e.format.key), i = Object.keys(e.format).reduce((v, f) => n.includes(f) ? et({}, v, { [f]: e.format[f] }) : v, {}));
    const l = r(e.value, o, i);
    let u = [o.key];
    Ge(l) ? u = l.map((v, f) => {
      const O = s[v.type], g = O ? O({ [v.type]: v.value, index: f, parts: l }) : [v.value];
      return Qk(g) && (g[0].key = `${v.type}-${f}`), g;
    }) : re(l) && (u = [l]);
    const c = et({}, a), p = re(e.tag) || Oe(e.tag) ? e.tag : xu();
    return An(p, c, u);
  };
}
et({
  value: {
    type: Number,
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, zs);
et({
  value: {
    type: [Number, Date],
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, zs);
function Vi(e, t) {
}
const eN = /* @__PURE__ */ Qt("global-vue-i18n");
function ka(e = {}) {
  const t = is();
  if (t == null)
    throw Gt(Se.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw Gt(Se.NOT_INSTALLED);
  const n = tN(t), r = rN(n), s = Su(t), a = nN(e, s);
  if (__VUE_I18N_LEGACY_API__ && n.mode === "legacy" && !e.__useComponent) {
    if (!n.allowComposition)
      throw Gt(Se.NOT_AVAILABLE_IN_LEGACY_MODE);
    return iN(t, a, r, e);
  }
  if (a === "global")
    return zk(r, e, s), r;
  if (a === "parent") {
    let l = aN(n, t, e.__useComponent);
    return l == null && (process.env.NODE_ENV !== "production" && mn(Ks(ht.NOT_FOUND_PARENT_SCOPE)), l = r), l;
  }
  const o = n;
  let i = o.__getInstance(t);
  if (i == null) {
    const l = et({}, e);
    "__i18n" in s && (l.__i18n = s.__i18n), r && (l.__root = r), i = Zk(l), o.__composerExtend && (i[rs] = o.__composerExtend(i)), oN(o, t, i), o.__setInstance(t, i);
  }
  return i;
}
function tN(e) {
  {
    const t = gt(e.isCE ? eN : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t)
      throw Gt(e.isCE ? Se.NOT_INSTALLED_WITH_PROVIDE : Se.UNEXPECTED_ERROR);
    return t;
  }
}
function nN(e, t) {
  return Ea(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function rN(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function aN(e, t, n = !1) {
  let r = null;
  const s = t.root;
  let a = sN(t, n);
  for (; a != null; ) {
    const o = e;
    if (e.mode === "composition")
      r = o.__getInstance(a);
    else if (__VUE_I18N_LEGACY_API__) {
      const i = o.__getInstance(a);
      i != null && (r = i.__composer, n && r && !r[Lu] && (r = null));
    }
    if (r != null || s === a)
      break;
    a = a.parent;
  }
  return r;
}
function sN(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function oN(e, t, n) {
  let r = null;
  vn(() => {
    if (process.env.NODE_ENV !== "production" && t.vnode.el) {
      t.vnode.el.__VUE_I18N__ = n, r = $O();
      const s = n;
      s[ts] && s[ts](r), r.on("*", Vi);
    }
  }, t), Ir(() => {
    const s = n;
    process.env.NODE_ENV !== "production" && t.vnode.el && t.vnode.el.__VUE_I18N__ && (r && r.off("*", Vi), s[ns] && s[ns](), delete t.vnode.el.__VUE_I18N__), e.__deleteInstance(t);
    const a = s[rs];
    a && (a(), delete s[rs]);
  }, t);
}
function iN(e, t, n, r = {}) {
  const s = t === "local", a = Bu(null);
  if (s && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n))
    throw Gt(Se.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
  const o = Ae(r.inheritLocale) ? r.inheritLocale : !re(r.locale), i = ne(
    // prettier-ignore
    !s || o ? n.locale.value : re(r.locale) ? r.locale : Mr
  ), l = ne(
    // prettier-ignore
    !s || o ? n.fallbackLocale.value : re(r.fallbackLocale) || Ge(r.fallbackLocale) || ye(r.fallbackLocale) || r.fallbackLocale === !1 ? r.fallbackLocale : i.value
  ), u = ne(qs(i.value, r)), c = ne(ye(r.datetimeFormats) ? r.datetimeFormats : { [i.value]: {} }), p = ne(ye(r.numberFormats) ? r.numberFormats : { [i.value]: {} }), v = s ? n.missingWarn : Ae(r.missingWarn) || Xn(r.missingWarn) ? r.missingWarn : !0, f = s ? n.fallbackWarn : Ae(r.fallbackWarn) || Xn(r.fallbackWarn) ? r.fallbackWarn : !0, O = s ? n.fallbackRoot : Ae(r.fallbackRoot) ? r.fallbackRoot : !0, g = !!r.fallbackFormat, D = Be(r.missing) ? r.missing : null, d = Be(r.postTranslation) ? r.postTranslation : null, b = s ? n.warnHtmlMessage : Ae(r.warnHtmlMessage) ? r.warnHtmlMessage : !0, k = !!r.escapeParameter, _ = s ? n.modifiers : ye(r.modifiers) ? r.modifiers : {}, I = r.pluralRules || s && n.pluralRules;
  function N() {
    return [
      i.value,
      l.value,
      u.value,
      c.value,
      p.value
    ];
  }
  const x = C({
    get: () => a.value ? a.value.locale.value : i.value,
    set: (m) => {
      a.value && (a.value.locale.value = m), i.value = m;
    }
  }), P = C({
    get: () => a.value ? a.value.fallbackLocale.value : l.value,
    set: (m) => {
      a.value && (a.value.fallbackLocale.value = m), l.value = m;
    }
  }), A = C(() => a.value ? a.value.messages.value : u.value), S = C(() => c.value), j = C(() => p.value);
  function Y() {
    return a.value ? a.value.getPostTranslationHandler() : d;
  }
  function X(m) {
    a.value && a.value.setPostTranslationHandler(m);
  }
  function K() {
    return a.value ? a.value.getMissingHandler() : D;
  }
  function U(m) {
    a.value && a.value.setMissingHandler(m);
  }
  function F(m) {
    return N(), m();
  }
  function Q(...m) {
    return a.value ? F(() => Reflect.apply(a.value.t, null, [...m])) : F(() => "");
  }
  function W(...m) {
    return a.value ? Reflect.apply(a.value.rt, null, [...m]) : "";
  }
  function V(...m) {
    return a.value ? F(() => Reflect.apply(a.value.d, null, [...m])) : F(() => "");
  }
  function $(...m) {
    return a.value ? F(() => Reflect.apply(a.value.n, null, [...m])) : F(() => "");
  }
  function q(m) {
    return a.value ? a.value.tm(m) : {};
  }
  function pe(m, L) {
    return a.value ? a.value.te(m, L) : !1;
  }
  function Ee(m) {
    return a.value ? a.value.getLocaleMessage(m) : {};
  }
  function ee(m, L) {
    a.value && (a.value.setLocaleMessage(m, L), u.value[m] = L);
  }
  function De(m, L) {
    a.value && a.value.mergeLocaleMessage(m, L);
  }
  function he(m) {
    return a.value ? a.value.getDateTimeFormat(m) : {};
  }
  function Me(m, L) {
    a.value && (a.value.setDateTimeFormat(m, L), c.value[m] = L);
  }
  function $e(m, L) {
    a.value && a.value.mergeDateTimeFormat(m, L);
  }
  function be(m) {
    return a.value ? a.value.getNumberFormat(m) : {};
  }
  function Ye(m, L) {
    a.value && (a.value.setNumberFormat(m, L), p.value[m] = L);
  }
  function Re(m, L) {
    a.value && a.value.mergeNumberFormat(m, L);
  }
  const ze = {
    get id() {
      return a.value ? a.value.id : -1;
    },
    locale: x,
    fallbackLocale: P,
    messages: A,
    datetimeFormats: S,
    numberFormats: j,
    get inheritLocale() {
      return a.value ? a.value.inheritLocale : o;
    },
    set inheritLocale(m) {
      a.value && (a.value.inheritLocale = m);
    },
    get availableLocales() {
      return a.value ? a.value.availableLocales : Object.keys(u.value);
    },
    get modifiers() {
      return a.value ? a.value.modifiers : _;
    },
    get pluralRules() {
      return a.value ? a.value.pluralRules : I;
    },
    get isGlobal() {
      return a.value ? a.value.isGlobal : !1;
    },
    get missingWarn() {
      return a.value ? a.value.missingWarn : v;
    },
    set missingWarn(m) {
      a.value && (a.value.missingWarn = m);
    },
    get fallbackWarn() {
      return a.value ? a.value.fallbackWarn : f;
    },
    set fallbackWarn(m) {
      a.value && (a.value.missingWarn = m);
    },
    get fallbackRoot() {
      return a.value ? a.value.fallbackRoot : O;
    },
    set fallbackRoot(m) {
      a.value && (a.value.fallbackRoot = m);
    },
    get fallbackFormat() {
      return a.value ? a.value.fallbackFormat : g;
    },
    set fallbackFormat(m) {
      a.value && (a.value.fallbackFormat = m);
    },
    get warnHtmlMessage() {
      return a.value ? a.value.warnHtmlMessage : b;
    },
    set warnHtmlMessage(m) {
      a.value && (a.value.warnHtmlMessage = m);
    },
    get escapeParameter() {
      return a.value ? a.value.escapeParameter : k;
    },
    set escapeParameter(m) {
      a.value && (a.value.escapeParameter = m);
    },
    t: Q,
    getPostTranslationHandler: Y,
    setPostTranslationHandler: X,
    getMissingHandler: K,
    setMissingHandler: U,
    rt: W,
    d: V,
    n: $,
    tm: q,
    te: pe,
    getLocaleMessage: Ee,
    setLocaleMessage: ee,
    mergeLocaleMessage: De,
    getDateTimeFormat: he,
    setDateTimeFormat: Me,
    mergeDateTimeFormat: $e,
    getNumberFormat: be,
    setNumberFormat: Ye,
    mergeNumberFormat: Re
  };
  function y(m) {
    m.locale.value = i.value, m.fallbackLocale.value = l.value, Object.keys(u.value).forEach((L) => {
      m.mergeLocaleMessage(L, u.value[L]);
    }), Object.keys(c.value).forEach((L) => {
      m.mergeDateTimeFormat(L, c.value[L]);
    }), Object.keys(p.value).forEach((L) => {
      m.mergeNumberFormat(L, p.value[L]);
    }), m.escapeParameter = k, m.fallbackFormat = g, m.fallbackRoot = O, m.fallbackWarn = f, m.missingWarn = v, m.warnHtmlMessage = b;
  }
  return Hu(() => {
    if (e.proxy == null || e.proxy.$i18n == null)
      throw Gt(Se.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
    const m = a.value = e.proxy.$i18n.__composer;
    t === "global" ? (i.value = m.locale.value, l.value = m.fallbackLocale.value, u.value = m.messages.value, c.value = m.datetimeFormats.value, p.value = m.numberFormats.value) : s && y(m);
  }), ze;
}
Wk();
__INTLIFY_JIT_COMPILATION__ ? $i(Yk) : $i(Rk);
Mk(ck);
Ik(hu);
if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const e = Ht();
  e.__INTLIFY__ = !0, bk(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
const lN = { class: "flex flex-col gap-2" }, uN = { class: "flex items-center gap-2 relative pt-2" }, cN = { class: "flex items-center gap-2" }, dN = /* @__PURE__ */ w("span", { class: "p4-b" }, "平台", -1), fN = /* @__PURE__ */ w("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), vN = ["value"], pN = {
  key: 0,
  class: "flex items-center gap-2"
}, mN = /* @__PURE__ */ w("span", { class: "p4-b" }, "層級", -1), hN = /* @__PURE__ */ w("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), gN = ["value"], _N = {
  key: 1,
  class: "flex items-center gap-2"
}, bN = /* @__PURE__ */ w("span", { class: "p4-b" }, "目標", -1), yN = /* @__PURE__ */ w("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), DN = ["value"], wN = {
  key: 0,
  class: "flex flex-col"
}, EN = /* @__PURE__ */ w("span", { class: "p4-b" }, "指定目標", -1), $N = { key: 0 }, ON = {
  key: 0,
  class: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex justify-center items-center bg-dark-3 rounded bg-opacity-50 z-[2]"
}, kN = { class: "relative bg-light-5 rounded-xs shadow-01 w-4/5 p-4 min-h-[300px] h-fit" }, NN = /* @__PURE__ */ w("span", { class: "p1-b flex justify-center mb-1" }, "請選擇目標", -1), TN = { class: "flex flex-col gap-2 mt-2" }, MN = ["onClick"], IN = { class: "flex flex-col flex-1" }, CN = { class: "p3-b" }, PN = { class: "p4-r" }, AN = {
  key: 2,
  class: "flex flex-col gap-2"
}, LN = { class: "flex items-center gap-2" }, SN = /* @__PURE__ */ w("span", { class: "p4-b" }, "執行", -1), xN = /* @__PURE__ */ w("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), RN = ["value"], YN = {
  key: 0,
  class: "flex gap-x-2 gap-y-3 flex-wrap"
}, FN = { class: "flex items-center gap-2" }, VN = /* @__PURE__ */ w("span", { class: "p4-b" }, "類型", -1), UN = /* @__PURE__ */ w("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), jN = ["value"], BN = {
  key: 0,
  class: "flex items-center gap-2"
}, HN = /* @__PURE__ */ w("span", { class: "p4-b" }, "調整", -1), WN = /* @__PURE__ */ w("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), GN = ["value"], KN = {
  key: 1,
  class: "flex items-center gap-2"
}, qN = { class: "flex items-center gap-2" }, zN = /* @__PURE__ */ w("span", { class: "p4-b" }, "類型", -1), XN = /* @__PURE__ */ w("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), ZN = ["value"], JN = {
  key: 0,
  class: "flex items-center gap-2"
}, QN = /* @__PURE__ */ w("span", { class: "p4-b" }, "調整", -1), eT = /* @__PURE__ */ w("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), tT = ["value"], nT = {
  key: 1,
  class: "flex items-center gap-2"
}, rT = {
  key: 2,
  class: "flex items-center gap-2 w-full"
}, aT = { class: "flex flex-col gap-2" }, sT = { class: "flex items-center gap-2" }, oT = /* @__PURE__ */ w("label", { for: "maxBudget" }, "設定預算上限", -1), iT = {
  key: 0,
  class: "flex gap-2 items-center"
}, lT = /* @__PURE__ */ w("span", null, "元", -1), uT = { class: "flex items-center gap-2" }, cT = /* @__PURE__ */ w("span", { class: "p4-b" }, "類型", -1), dT = /* @__PURE__ */ w("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), fT = ["value"], vT = {
  key: 0,
  class: "flex items-center gap-2"
}, pT = /* @__PURE__ */ w("span", { class: "p4-b" }, "調整", -1), mT = /* @__PURE__ */ w("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), hT = ["value"], gT = {
  key: 1,
  class: "flex items-center gap-2"
}, _T = {
  key: 2,
  class: "flex items-center gap-2 w-full"
}, bT = { class: "flex flex-col gap-2" }, yT = { class: "flex items-center gap-2" }, DT = /* @__PURE__ */ w("label", {
  for: "maxBudget",
  class: "p3-b"
}, "設定預算下限", -1), wT = {
  key: 0,
  class: "flex gap-2 items-center"
}, ET = /* @__PURE__ */ w("span", null, "元", -1), St = "", $T = /* @__PURE__ */ Pe({
  __name: "EventAction",
  setup(e) {
    const { t } = ka(), n = gt("eventData"), r = ne(n.value.action ?? {}), s = ne(!!Object.keys(r.value).length), a = ne(!1);
    ke(a, (W) => {
      var V, $, q, pe, Ee;
      (V = r.value.params) != null && V.limit || (q = ($ = r.value) == null ? void 0 : $.params) == null || delete q.limit, W || (Ee = (pe = r.value) == null ? void 0 : pe.params) == null || delete Ee.limit;
    }), ss(() => {
      var W, V, $, q, pe;
      ((W = r.value) == null ? void 0 : W.action) == ae.SetNewBudget || ((V = r.value) == null ? void 0 : V.action) == ae.IncreaseBudget || (($ = r.value) == null ? void 0 : $.action) == ae.LowerBudget || delete r.value.params, a.value = !!((pe = (q = r.value) == null ? void 0 : q.params) != null && pe.limit);
    }), ke(
      r,
      (W) => {
        n.value.action = W;
      },
      { deep: !0 }
    );
    const o = C(() => {
      var W;
      return ((W = n.value.action) == null ? void 0 : W.client) == Xe.Google ? mt : ct;
    }), i = {
      [Xe.Google]: {
        [mt.Campaign]: {
          SetNewBudget: ae.SetNewBudget,
          IncreaseBudget: ae.IncreaseBudget,
          LowerBudget: ae.LowerBudget,
          OpenProject: ae.OpenProject,
          SuspendProject: ae.SuspendProject,
          None: ae.None
        },
        [mt.AdGroup]: {
          SuspendProject: ae.SuspendProject,
          None: ae.None
        },
        [mt.AdTag]: {
          SuspendProject: ae.SuspendProject,
          None: ae.None
        },
        [mt.Ad]: {
          SuspendProject: ae.SuspendProject,
          None: ae.None
        }
      },
      [Xe.Facebook]: {
        [ct.Campaign]: {
          SetNewBudget: ae.SetNewBudget,
          IncreaseBudget: ae.IncreaseBudget,
          LowerBudget: ae.LowerBudget,
          OpenProject: ae.OpenProject,
          SuspendProject: ae.SuspendProject,
          None: ae.None
        },
        [ct.AdGroup]: {
          SetNewBudget: ae.SetNewBudget,
          IncreaseBudget: ae.IncreaseBudget,
          LowerBudget: ae.LowerBudget,
          OpenProject: ae.OpenProject,
          SuspendProject: ae.SuspendProject,
          None: ae.None
        },
        [ct.AdTag]: {
          SuspendProject: ae.SuspendProject,
          None: ae.None
        },
        [ct.Ad]: {
          SuspendProject: ae.SuspendProject,
          None: ae.None
        }
      }
    }, l = C(() => {
      var $, q;
      const W = ($ = r.value) == null ? void 0 : $.client, V = (q = r.value) == null ? void 0 : q.adLevel;
      if (W && V) {
        const pe = i[W];
        if (pe) {
          const Ee = pe[V];
          if (Ee)
            return Ee;
        }
      }
      return {};
    }), u = {
      [Xe.Google]: {
        [mt.Campaign]: {
          [ae.SetNewBudget]: [se.Value],
          [ae.IncreaseBudget]: [se.Percentage, se.Value],
          [ae.LowerBudget]: [se.Percentage, se.Value],
          [ae.OpenProject]: [se.Percentage, se.Value],
          [ae.SuspendProject]: [se.Percentage, se.Value],
          [ae.None]: [se.Percentage, se.Value]
        },
        [mt.AdGroup]: {
          [ae.SuspendProject]: [se.Percentage, se.Value],
          [ae.None]: [se.Percentage, se.Value]
        },
        [mt.AdTag]: {
          [ae.SuspendProject]: [se.Percentage, se.Value],
          [ae.None]: [se.Percentage, se.Value]
        },
        [mt.Ad]: {
          [ae.SuspendProject]: [se.Percentage, se.Value],
          [ae.None]: [se.Percentage, se.Value]
        }
      },
      [Xe.Facebook]: {
        [ct.Campaign]: {
          [ae.SetNewBudget]: [se.Value],
          [ae.IncreaseBudget]: [se.Percentage, se.Value],
          [ae.LowerBudget]: [se.Percentage, se.Value],
          [ae.OpenProject]: [se.Percentage, se.Value],
          [ae.SuspendProject]: [se.Percentage, se.Value],
          [ae.None]: [se.Percentage, se.Value]
        },
        [ct.AdGroup]: {
          [ae.SetNewBudget]: [se.Value],
          [ae.IncreaseBudget]: [se.Percentage, se.Value],
          [ae.LowerBudget]: [se.Percentage, se.Value],
          [ae.OpenProject]: [se.Percentage, se.Value],
          [ae.SuspendProject]: [se.Percentage, se.Value],
          [ae.None]: [se.Percentage, se.Value]
        },
        [ct.AdTag]: {
          [ae.SuspendProject]: [se.Percentage, se.Value],
          [ae.None]: [se.Percentage, se.Value]
        },
        [ct.Ad]: {
          [ae.SuspendProject]: [se.Percentage, se.Value],
          [ae.None]: [se.Percentage, se.Value]
        }
      }
    }, c = C(() => {
      var q, pe, Ee;
      const W = (q = r.value) == null ? void 0 : q.client, V = (pe = r.value) == null ? void 0 : pe.adLevel, $ = (Ee = r.value) == null ? void 0 : Ee.action;
      if (W && V && $) {
        const ee = u[W];
        if (ee) {
          const De = ee[V];
          if (De) {
            const he = De[$];
            if (he)
              return he;
          }
        }
      }
      return [se.Percentage, se.Value];
    }), p = C(() => r.value.client ? r.value.client : ""), v = (W) => {
      r.value.client = Number(W.target.value), delete r.value.target;
    }, f = C(() => r.value.adLevel ? r.value.adLevel : ""), O = (W) => {
      r.value.adLevel = Number(W.target.value), delete r.value.action, delete r.value.target;
    }, g = C(() => r.value.targetType ? r.value.targetType : ""), D = (W) => {
      r.value.targetType = Number(W.target.value), delete r.value.action, delete r.value.target;
    }, d = C(() => r.value.action ? r.value.action : ""), b = (W) => r.value.action = Number(W.target.value), k = C(() => {
      var W;
      return (W = r.value) != null && W.params || (r.value.params = {}), r.value.params.budgetType ? r.value.params.budgetType : "";
    }), _ = (W) => r.value.params.budgetType = W.target.value, I = C(() => {
      var W;
      return (W = r.value) != null && W.params || (r.value.params = {}), r.value.params.valueType ? r.value.params.valueType : "";
    }), N = (W) => r.value.params.valueType = W.target.value, x = ne(!1), P = (W) => {
      var $;
      ($ = r.value) != null && $.target || (r.value.target = []);
      const V = r.value.target.findIndex(
        (q) => q.id === W.id
      );
      V === -1 ? r.value.target.push(W) : r.value.target.splice(V, 1);
    }, A = ne(), S = async () => {
      A.value = [
        { id: 1, name: "qwe" },
        { id: 2, name: "asd" },
        { id: 3, name: "zxc" },
        { id: 4, name: "rty" },
        { id: 5, name: "bgfb" }
      ];
    }, j = C(() => "name"), Y = C(() => {
      const W = K.value.toLowerCase();
      return A.value.filter(
        (V) => V[j.value].toLowerCase().includes(W)
      );
    }), X = async () => {
      await S(), x.value = !0;
    }, K = ne(""), U = () => {
      r.value.target = Y.value;
    }, F = ne(!1);
    vn(() => {
      F.value = !0;
    });
    const Q = () => {
      s.value = !1, r.value = {}, Ln(() => {
        delete n.value.action;
      });
    };
    return C(() => {
      const W = p.value, V = r.value.adLevel, $ = k.value;
      console.log("object");
      const q = W === Xe.Google && V === mt.Campaign, pe = W === Xe.Facebook && V === ct.Campaign, Ee = W === Xe.Facebook && V === ct.AdGroup, ee = q || pe || Ee, De = $ === Rn.DailyBudget ? "日預算" : "總預算", he = `${Xe[W]}${o.value[V]}`, Me = ee ? `若${t(he)}設定為${De}，則不會變更` : "";
      return { show: ee, msg: Me };
    }), (W, V) => h(s) ? (E(), Ke(wr, {
      key: 1,
      title: "動作"
    }, {
      default: qe(() => [
        w("div", lN, [
          w("div", uN, [
            w("div", {
              class: "cursor-pointer text-dark-4 absolute -top-2.5 -right-1.5 p4-b",
              onClick: Q
            }, " 刪除 "),
            w("label", cN, [
              dN,
              Ie(w("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": V[1] || (V[1] = ($) => _e(p) ? p.value = $ : null),
                onChange: v,
                required: ""
              }, [
                fN,
                (E(!0), T(te, null, me(h(Xe), ($, q) => (E(), T(te, { key: q }, [
                  Number.isInteger($) ? J("", !0) : (E(), T("option", {
                    key: 0,
                    value: q
                  }, le($), 9, vN))
                ], 64))), 128))
              ], 544), [
                [je, h(p)]
              ])
            ]),
            h(p) != St ? (E(), T("label", pN, [
              mN,
              Ie(w("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": V[2] || (V[2] = ($) => _e(f) ? f.value = $ : null),
                onChange: O,
                required: ""
              }, [
                hN,
                (E(!0), T(te, null, me(h(o), ($, q) => (E(), T(te, { key: q }, [
                  Number.isInteger($) ? J("", !0) : (E(), T("option", {
                    key: 0,
                    value: q
                  }, le(W.$t(`${h(Xe)[h(p)]}${$}`)), 9, gN))
                ], 64))), 128))
              ], 544), [
                [je, h(f)]
              ])
            ])) : J("", !0),
            h(f) != St ? (E(), T("label", _N, [
              bN,
              Ie(w("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": V[3] || (V[3] = ($) => _e(g) ? g.value = $ : null),
                onChange: D,
                required: ""
              }, [
                yN,
                (E(!0), T(te, null, me(h(cn), ($, q) => (E(), T(te, { key: q }, [
                  Number.isInteger($) ? J("", !0) : (E(), T("option", {
                    key: 0,
                    value: q
                  }, le(W.$t($)), 9, DN))
                ], 64))), 128))
              ], 544), [
                [je, h(g)]
              ])
            ])) : J("", !0)
          ]),
          h(g) === h(cn).ForID ? (E(), T("div", wN, [
            w("label", { class: "flex items-center gap-2" }, [
              EN,
              w("div", {
                class: "p4-r px-1.5 py-0.5 text-true-blue-2 rounded bg-true-blue-5 flex w-fit cursor-pointer hover:bg-true-blue-4",
                onClick: X
              }, " 編輯 ")
            ]),
            h(g) === h(cn).ForID ? (E(), T("div", $N, [
              (E(!0), T(te, null, me(h(r).target, ($, q) => (E(), T("span", {
                class: "p4-r text-true-blue-3 px-0.5",
                key: $.id
              }, le($.name) + le(q !== h(r).target.length - 1 ? "," : ""), 1))), 128))
            ])) : J("", !0)
          ])) : J("", !0),
          h(F) ? (E(), Ke(Wi, {
            key: 1,
            to: "#editor-container"
          }, [
            h(x) ? (E(), T("div", ON, [
              w("div", kN, [
                w("div", {
                  class: "absolute top-1 right-2 cursor-pointer",
                  onClick: V[4] || (V[4] = ($) => x.value = !1)
                }, " X "),
                NN,
                ve(Nt, {
                  modelValue: h(K),
                  "onUpdate:modelValue": V[5] || (V[5] = ($) => _e(K) ? K.value = $ : null)
                }, null, 8, ["modelValue"]),
                w("div", {
                  class: "mt-2 flex w-full justify-end p4-b text-true-blue-3",
                  onClick: U
                }, " 全選 "),
                w("div", TN, [
                  (E(!0), T(te, null, me(h(Y), ($) => {
                    var q;
                    return E(), T("div", {
                      class: "border border-dark-5 rounded py-1 px-3 flex gap-1 hover:border-transparent hover:bg-true-blue-5 cursor-pointer",
                      key: $.id,
                      onClick: (pe) => P($)
                    }, [
                      w("div", IN, [
                        w("span", CN, le($.id), 1),
                        w("span", PN, le($.name), 1)
                      ]),
                      w("div", {
                        class: He(["rounded h-3 w-3 border", [
                          h(r).target && (q = h(r)) != null && q.target.find((pe) => pe.id === $.id) ? "bg-red-1" : ""
                        ]])
                      }, null, 2)
                    ], 8, MN);
                  }), 128))
                ])
              ])
            ])) : J("", !0)
          ])) : J("", !0),
          h(g) !== St ? (E(), T("div", AN, [
            w("label", LN, [
              SN,
              Ie(w("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": V[6] || (V[6] = ($) => _e(d) ? d.value = $ : null),
                onChange: b,
                required: ""
              }, [
                xN,
                (E(!0), T(te, null, me(h(l), ($, q) => (E(), T("option", {
                  key: q,
                  value: $
                }, le(W.$t(q)), 9, RN))), 128))
              ], 544), [
                [je, h(d)]
              ])
            ]),
            h(f) != St ? (E(), T("div", YN, [
              h(r).action == h(ae).SetNewBudget ? (E(), T(te, { key: 0 }, [
                w("label", FN, [
                  VN,
                  Ie(w("select", {
                    class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                    "onUpdate:modelValue": V[7] || (V[7] = ($) => _e(k) ? k.value = $ : null),
                    onChange: _,
                    required: ""
                  }, [
                    UN,
                    (E(!0), T(te, null, me(h(Rn), ($, q) => (E(), T(te, { key: q }, [
                      Number.isInteger($) ? J("", !0) : (E(), T("option", {
                        key: 0,
                        value: $
                      }, le(W.$t($)), 9, jN))
                    ], 64))), 128))
                  ], 544), [
                    [je, h(k)]
                  ])
                ]),
                h(k) != St ? (E(), T("label", BN, [
                  HN,
                  Ie(w("select", {
                    class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                    "onUpdate:modelValue": V[8] || (V[8] = ($) => _e(I) ? I.value = $ : null),
                    onChange: N,
                    required: ""
                  }, [
                    WN,
                    (E(!0), T(te, null, me(h(c), ($, q) => (E(), T("option", {
                      key: q,
                      value: $
                    }, le(W.$t(`action${$}`)), 9, GN))), 128))
                  ], 544), [
                    [je, h(I)]
                  ])
                ])) : J("", !0),
                h(I) != St ? (E(), T("label", KN, [
                  ve(Nt, {
                    modelValue: h(r).params.value,
                    "onUpdate:modelValue": V[9] || (V[9] = ($) => h(r).params.value = $),
                    type: "number",
                    required: !0
                  }, null, 8, ["modelValue"]),
                  w("span", null, le(h(r).params.valueType === h(se).Percentage ? "%" : "元"), 1)
                ])) : J("", !0)
              ], 64)) : h(r).action == h(ae).IncreaseBudget ? (E(), T(te, { key: 1 }, [
                w("label", qN, [
                  zN,
                  Ie(w("select", {
                    class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                    "onUpdate:modelValue": V[10] || (V[10] = ($) => _e(k) ? k.value = $ : null),
                    onChange: _,
                    required: ""
                  }, [
                    XN,
                    (E(!0), T(te, null, me(h(Rn), ($, q) => (E(), T(te, { key: q }, [
                      Number.isInteger($) ? J("", !0) : (E(), T("option", {
                        key: 0,
                        value: $
                      }, le(W.$t($)), 9, ZN))
                    ], 64))), 128))
                  ], 544), [
                    [je, h(k)]
                  ])
                ]),
                h(k) != St ? (E(), T("label", JN, [
                  QN,
                  Ie(w("select", {
                    class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                    "onUpdate:modelValue": V[11] || (V[11] = ($) => _e(I) ? I.value = $ : null),
                    onChange: N,
                    required: ""
                  }, [
                    eT,
                    (E(!0), T(te, null, me(h(c), ($, q) => (E(), T("option", {
                      key: q,
                      value: $
                    }, le(W.$t(`action${$}`)), 9, tT))), 128))
                  ], 544), [
                    [je, h(I)]
                  ])
                ])) : J("", !0),
                h(I) != St ? (E(), T("label", nT, [
                  ve(Nt, {
                    modelValue: h(r).params.value,
                    "onUpdate:modelValue": V[12] || (V[12] = ($) => h(r).params.value = $),
                    type: "number",
                    required: !0
                  }, null, 8, ["modelValue"]),
                  w("span", null, le(h(r).params.valueType === h(se).Percentage ? "%" : "元"), 1)
                ])) : J("", !0),
                h(r).params.valueType === h(se).Percentage ? (E(), T("label", rT, [
                  w("div", aT, [
                    w("div", sT, [
                      Ie(w("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": V[13] || (V[13] = ($) => _e(a) ? a.value = $ : null),
                        id: "maxBudget"
                      }, null, 512), [
                        [zr, h(a)]
                      ]),
                      oT,
                      h(a) ? (E(), T("div", iT, [
                        ve(Nt, {
                          modelValue: h(r).params.limit,
                          "onUpdate:modelValue": V[14] || (V[14] = ($) => h(r).params.limit = $),
                          type: "number",
                          required: !0
                        }, null, 8, ["modelValue"]),
                        lT
                      ])) : J("", !0)
                    ])
                  ])
                ])) : J("", !0)
              ], 64)) : h(r).action == h(ae).LowerBudget ? (E(), T(te, { key: 2 }, [
                w("label", uT, [
                  cT,
                  Ie(w("select", {
                    class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                    "onUpdate:modelValue": V[15] || (V[15] = ($) => _e(k) ? k.value = $ : null),
                    onChange: _,
                    required: ""
                  }, [
                    dT,
                    (E(!0), T(te, null, me(h(Rn), ($, q) => (E(), T(te, { key: q }, [
                      Number.isInteger($) ? J("", !0) : (E(), T("option", {
                        key: 0,
                        value: $
                      }, le(W.$t($)), 9, fT))
                    ], 64))), 128))
                  ], 544), [
                    [je, h(k)]
                  ])
                ]),
                h(k) != St ? (E(), T("label", vT, [
                  pT,
                  Ie(w("select", {
                    class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                    "onUpdate:modelValue": V[16] || (V[16] = ($) => _e(I) ? I.value = $ : null),
                    onChange: N
                  }, [
                    mT,
                    (E(!0), T(te, null, me(h(c), ($, q) => (E(), T("option", {
                      key: q,
                      value: $
                    }, le(W.$t(`action${$}`)), 9, hT))), 128))
                  ], 544), [
                    [je, h(I)]
                  ])
                ])) : J("", !0),
                h(I) != St ? (E(), T("label", gT, [
                  ve(Nt, {
                    modelValue: h(r).params.value,
                    "onUpdate:modelValue": V[17] || (V[17] = ($) => h(r).params.value = $),
                    type: "number",
                    required: !0
                  }, null, 8, ["modelValue"]),
                  w("span", null, le(h(r).params.valueType === h(se).Percentage ? "%" : "元"), 1)
                ])) : J("", !0),
                h(r).params.valueType === h(se).Percentage ? (E(), T("div", _T, [
                  w("div", bT, [
                    w("div", yT, [
                      Ie(w("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": V[18] || (V[18] = ($) => _e(a) ? a.value = $ : null),
                        id: "maxBudget"
                      }, null, 512), [
                        [zr, h(a)]
                      ]),
                      DT,
                      h(a) ? (E(), T("div", wT, [
                        ve(Nt, {
                          modelValue: h(r).params.limit,
                          "onUpdate:modelValue": V[19] || (V[19] = ($) => h(r).params.limit = $),
                          type: "number",
                          required: !0
                        }, null, 8, ["modelValue"]),
                        ET
                      ])) : J("", !0)
                    ])
                  ])
                ])) : J("", !0)
              ], 64)) : J("", !0)
            ])) : J("", !0)
          ])) : J("", !0)
        ])
      ]),
      _: 1
    })) : (E(), T("div", {
      key: 0,
      class: "p3-b text-true-blue-3 flex ml-auto w-fit cursor-pointer hover:text-true-blue-2",
      onClick: V[0] || (V[0] = ($) => s.value = !0)
    }, " + 加入動作 "));
  }
}), OT = { class: "flex flex-col gap-2 relative pt-2" }, kT = { class: "flex items-center gap-2" }, NT = { class: "flex items-center gap-2" }, TT = /* @__PURE__ */ w("span", { class: "p3-b" }, "平台", -1), MT = /* @__PURE__ */ w("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), IT = ["value"], CT = {
  key: 0,
  class: "flex items-center gap-2"
}, PT = /* @__PURE__ */ w("span", { class: "p3-b" }, "層級", -1), AT = /* @__PURE__ */ w("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), LT = ["value"], ST = {
  key: 1,
  class: "flex items-center gap-2"
}, xT = /* @__PURE__ */ w("span", { class: "p4-b" }, "目標", -1), RT = /* @__PURE__ */ w("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), YT = ["value"], FT = {
  key: 0,
  class: "flex flex-col"
}, VT = /* @__PURE__ */ w("span", { class: "p4-b" }, "指定目標", -1), UT = { key: 0 }, jT = {
  key: 0,
  class: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex justify-center items-center bg-dark-3 rounded bg-opacity-50 z-[2]"
}, BT = { class: "relative bg-light-5 rounded-xs shadow-01 w-4/5 p-4 min-h-[300px] h-fit" }, HT = /* @__PURE__ */ w("span", { class: "p1-b flex justify-center mb-1" }, "請選擇目標", -1), WT = { class: "flex flex-col gap-2 mt-2" }, GT = ["onClick"], KT = { class: "flex flex-col flex-1" }, qT = { class: "p3-b" }, zT = { class: "p4-r" }, XT = {
  key: 2,
  class: "flex items-center gap-1"
}, ZT = /* @__PURE__ */ w("span", { class: "p3-b" }, "條件", -1), JT = /* @__PURE__ */ w("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), QT = ["value"], eM = {
  key: 3,
  class: "flex gap-2 flex-wrap"
}, tM = { class: "flex gap-2" }, nM = { class: "flex items-center gap-1" }, rM = /* @__PURE__ */ w("span", { class: "p3-b" }, "運算", -1), aM = /* @__PURE__ */ w("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), sM = ["value"], oM = { key: 0 }, iM = ["onClick"], lM = {
  key: 0,
  class: "flex items-center gap-1"
}, uM = /* @__PURE__ */ w("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), cM = ["value"], dM = {
  key: 1,
  class: "flex items-center gap-1"
}, fM = /* @__PURE__ */ w("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), vM = ["value"], pM = {
  key: 4,
  class: "flex items-center gap-2"
}, mM = /* @__PURE__ */ w("label", { for: "comparison" }, "加入比較區間", -1), an = "", hM = /* @__PURE__ */ Pe({
  __name: "ConditionItem",
  props: {
    modelValue: {},
    index: {}
  },
  emits: ["update:modelValue", "removeItem"],
  setup(e, { emit: t }) {
    const n = e, r = C(() => n.modelValue ?? {}), s = C(() => {
      var K;
      return ((K = r.value) == null ? void 0 : K.client) == Xe.Google ? Sn : xn;
    }), a = C(() => r.value.client ? r.value.client : ""), o = (K) => r.value.client = Number(K.target.value), i = C(() => r.value.adLevel ? r.value.adLevel : ""), l = (K) => {
      r.value.adLevel = Number(K.target.value), p.value != an && t("update:modelValue", {
        client: a.value,
        adLevel: i.value
      });
    }, u = C(() => r.value.targetType ? r.value.targetType : ""), c = (K) => {
      r.value.targetType = Number(K.target.value), delete r.value.action, delete r.value.target;
    }, p = C(() => r.value.conditionType ? r.value.conditionType : ""), v = (K) => r.value.conditionType = K.target.value, f = C(() => r.value.dateRangeType ? r.value.dateRangeType : ""), O = (K) => {
      r.value.dateRangeType = Number(K.target.value), Number(K.target.value) !== br.SpecifiedTime && delete r.value.dateRange;
    }, g = C(() => r.value.operation ? r.value.operation : ""), D = (K) => r.value.operation = K.target.value, d = C(() => r.value.valueType ? r.value.valueType : ""), b = (K) => r.value.valueType = K.target.value, k = {
      [Xe.Google]: {
        [Sn.Campaign]: {
          Clicks: fe.Clicks,
          Impressions: fe.Impressions,
          Cpc: fe.Cpc,
          Spend: fe.Spend,
          Conversions: fe.Conversions,
          ConversionSpend: fe.ConversionSpend,
          ReturnOnADSpending: fe.ReturnOnADSpending
        },
        [Sn.AdGroup]: {
          Clicks: fe.Clicks,
          Impressions: fe.Impressions,
          Cpc: fe.Cpc,
          Spend: fe.Spend,
          Conversions: fe.Conversions,
          ConversionSpend: fe.ConversionSpend,
          ReturnOnADSpending: fe.ReturnOnADSpending
        },
        [Sn.Account]: {
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
      [Xe.Facebook]: {
        [xn.Campaign]: {
          Clicks: fe.Clicks,
          BudgetCap: fe.BudgetCap,
          Impressions: fe.Impressions,
          Cpc: fe.Cpc,
          Spend: fe.Spend,
          Conversions: fe.Conversions,
          ConversionSpend: fe.ConversionSpend,
          ReturnOnADSpending: fe.ReturnOnADSpending
        },
        [xn.AdGroup]: {
          Clicks: fe.Clicks,
          Impressions: fe.Impressions,
          Cpc: fe.Cpc,
          Spend: fe.Spend,
          Conversions: fe.Conversions,
          ConversionSpend: fe.ConversionSpend,
          ReturnOnADSpending: fe.ReturnOnADSpending
        },
        [xn.Account]: {
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
    }), I = ne(!1), N = (K) => {
      var F;
      (F = r.value) != null && F.target || (r.value.target = []);
      const U = r.value.target.findIndex(
        (Q) => Q.id === K.id
      );
      U === -1 ? r.value.target.push(K) : r.value.target.splice(U, 1);
    }, x = ne(), P = async () => {
      x.value = [
        { id: 1, name: "qwe" },
        { id: 2, name: "asd" },
        { id: 3, name: "zxc" },
        { id: 4, name: "rty" },
        { id: 5, name: "bgfb" }
      ];
    }, A = C(() => "name"), S = C(() => {
      const K = Y.value.toLowerCase();
      return x.value.filter(
        (U) => U[A.value].toLowerCase().includes(K)
      );
    }), j = async () => {
      await P(), I.value = !0;
    }, Y = ne(""), X = ne(!1);
    return vn(() => {
      X.value = !0;
    }), (K, U) => (E(), Ke(wr, {
      title: "條件" + (K.index + 1)
    }, {
      default: qe(() => [
        w("div", OT, [
          w("div", {
            class: "cursor-pointer text-dark-4 absolute -top-2.5 -right-1.5 p4-b",
            onClick: U[0] || (U[0] = (F) => t("removeItem"))
          }, " 刪除 "),
          w("div", kT, [
            w("label", NT, [
              TT,
              Ie(w("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": U[1] || (U[1] = (F) => _e(a) ? a.value = F : null),
                onChange: o,
                required: ""
              }, [
                MT,
                (E(!0), T(te, null, me(h(Xe), (F, Q) => (E(), T(te, { key: Q }, [
                  Number.isInteger(F) ? J("", !0) : (E(), T("option", {
                    key: 0,
                    value: Q
                  }, le(F), 9, IT))
                ], 64))), 128))
              ], 544), [
                [je, h(a)]
              ])
            ]),
            h(a) != an ? (E(), T("label", CT, [
              PT,
              Ie(w("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": U[2] || (U[2] = (F) => _e(i) ? i.value = F : null),
                onChange: l,
                required: ""
              }, [
                AT,
                (E(!0), T(te, null, me(h(s), (F, Q) => (E(), T(te, { key: Q }, [
                  Number.isInteger(F) ? J("", !0) : (E(), T("option", {
                    key: 0,
                    value: Q
                  }, le(K.$t(`${h(Xe)[h(a)]}${F}`)), 9, LT))
                ], 64))), 128))
              ], 544), [
                [je, h(i)]
              ])
            ])) : J("", !0),
            h(i) != an ? (E(), T("label", ST, [
              xT,
              Ie(w("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": U[3] || (U[3] = (F) => _e(u) ? u.value = F : null),
                onChange: c,
                required: ""
              }, [
                RT,
                (E(!0), T(te, null, me(h(cn), (F, Q) => (E(), T(te, { key: Q }, [
                  Number.isInteger(F) ? J("", !0) : (E(), T("option", {
                    key: 0,
                    value: Q
                  }, le(K.$t(F)), 9, YT))
                ], 64))), 128))
              ], 544), [
                [je, h(u)]
              ])
            ])) : J("", !0)
          ]),
          h(u) === h(cn).ForID ? (E(), T("div", FT, [
            w("label", { class: "flex items-center gap-2" }, [
              VT,
              w("div", {
                class: "p4-r px-1.5 py-0.5 text-true-blue-2 rounded bg-true-blue-5 flex w-fit cursor-pointer hover:bg-true-blue-4",
                onClick: j
              }, " 編輯 ")
            ]),
            h(u) === h(cn).ForID ? (E(), T("div", UT, [
              (E(!0), T(te, null, me(h(r).target, (F, Q) => (E(), T("span", {
                class: "p4-r text-true-blue-3 px-0.5",
                key: F.id
              }, le(F.name) + le(Q !== h(r).target.length - 1 ? "," : ""), 1))), 128))
            ])) : J("", !0)
          ])) : J("", !0),
          h(X) ? (E(), Ke(Wi, {
            key: 1,
            to: "#editor-container"
          }, [
            h(I) ? (E(), T("div", jT, [
              w("div", BT, [
                w("div", {
                  class: "absolute top-1 right-2 cursor-pointer",
                  onClick: U[4] || (U[4] = (F) => I.value = !1)
                }, " X "),
                HT,
                ve(Nt, {
                  modelValue: h(Y),
                  "onUpdate:modelValue": U[5] || (U[5] = (F) => _e(Y) ? Y.value = F : null)
                }, null, 8, ["modelValue"]),
                w("div", WT, [
                  (E(!0), T(te, null, me(h(S), (F) => {
                    var Q;
                    return E(), T("div", {
                      class: "border border-dark-5 rounded py-1 px-3 flex gap-1 hover:border-transparent hover:bg-true-blue-5 cursor-pointer",
                      key: F.id,
                      onClick: (W) => N(F)
                    }, [
                      w("div", KT, [
                        w("span", qT, le(F.id), 1),
                        w("span", zT, le(F.name), 1)
                      ]),
                      w("div", {
                        class: He(["rounded h-3 w-3 border", [
                          h(r).target && (Q = h(r)) != null && Q.target.find((W) => W.id === F.id) ? "bg-red-1" : ""
                        ]])
                      }, null, 2)
                    ], 8, GT);
                  }), 128))
                ])
              ])
            ])) : J("", !0)
          ])) : J("", !0),
          h(u) != an ? (E(), T("label", XT, [
            ZT,
            Ie(w("select", {
              class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
              "onUpdate:modelValue": U[6] || (U[6] = (F) => _e(p) ? p.value = F : null),
              onChange: v,
              required: ""
            }, [
              JT,
              (E(!0), T(te, null, me(h(_), (F, Q) => (E(), T("option", {
                key: Q,
                value: F
              }, le(K.$t(Q)), 9, QT))), 128))
            ], 544), [
              [je, h(p)]
            ])
          ])) : J("", !0),
          h(p) != an ? (E(), T("div", eM, [
            w("div", tM, [
              w("label", nM, [
                rM,
                Ie(w("select", {
                  class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                  "onUpdate:modelValue": U[7] || (U[7] = (F) => _e(f) ? f.value = F : null),
                  onChange: O,
                  required: ""
                }, [
                  aM,
                  (E(!0), T(te, null, me(h(br), (F, Q) => (E(), T(te, { key: Q }, [
                    Number.isInteger(F) ? J("", !0) : (E(), T("option", {
                      key: 0,
                      value: Q
                    }, le(K.$t(F)), 9, sM))
                  ], 64))), 128))
                ], 544), [
                  [je, h(f)]
                ])
              ]),
              h(f) == h(br).SpecifiedTime ? (E(), T("div", oM, [
                ve(h(Vs), {
                  modelValue: h(r).dateRange,
                  "onUpdate:modelValue": U[8] || (U[8] = (F) => h(r).dateRange = F),
                  modelModifiers: { range: !0 },
                  mode: "date"
                }, {
                  default: qe(({ togglePopover: F, inputValue: Q }) => [
                    w("button", {
                      class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 transition-all hover:bg-light-3 hover:bg-opacity-50",
                      onClick: F
                    }, le(Q.start && Q.end ? `${Q.start}-${Q.end}` : "請選定執行日期"), 9, iM)
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ])) : J("", !0)
            ]),
            h(f) != "" ? (E(), T("label", lM, [
              Ie(w("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": U[9] || (U[9] = (F) => _e(g) ? g.value = F : null),
                onChange: D,
                required: ""
              }, [
                uM,
                (E(!0), T(te, null, me(h(ls), (F, Q) => (E(), T(te, { key: Q }, [
                  Number.isInteger(F) ? J("", !0) : (E(), T("option", {
                    key: 0,
                    value: F
                  }, le(K.$t(Q)), 9, cM))
                ], 64))), 128))
              ], 544), [
                [je, h(g)]
              ])
            ])) : J("", !0),
            h(g) != an ? (E(), T("label", dM, [
              Ie(w("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": U[10] || (U[10] = (F) => _e(d) ? d.value = F : null),
                onChange: b,
                required: ""
              }, [
                fM,
                (E(!0), T(te, null, me(h(se), (F, Q) => (E(), T(te, { key: Q }, [
                  Number.isInteger(F) ? J("", !0) : (E(), T("option", {
                    key: 0,
                    value: F
                  }, le(K.$t(`condition${Q}`)), 9, vM))
                ], 64))), 128))
              ], 544), [
                [je, h(d)]
              ])
            ])) : J("", !0),
            h(d) != an ? (E(), Ke(Nt, {
              key: 2,
              modelValue: h(r).value,
              "onUpdate:modelValue": U[11] || (U[11] = (F) => h(r).value = F),
              type: "number",
              required: !0
            }, null, 8, ["modelValue"])) : J("", !0)
          ])) : J("", !0),
          h(p) != an ? (E(), T("div", pM, [
            Ie(w("input", {
              type: "checkbox",
              "onUpdate:modelValue": U[12] || (U[12] = (F) => K.modelValue.comparison = F),
              id: "comparison"
            }, null, 512), [
              [zr, K.modelValue.comparison]
            ]),
            mM
          ])) : J("", !0)
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), gM = {
  key: 0,
  class: "flex items-center justify-center gap-3"
}, _M = /* @__PURE__ */ w("div", { class: "h-[1px] flex-1 bg-light-3" }, null, -1), bM = /* @__PURE__ */ w("p", { class: "p4-b to-dark-4" }, "且", -1), yM = /* @__PURE__ */ w("div", { class: "h-[1px] flex-1 bg-light-3" }, null, -1), DM = [
  _M,
  bM,
  yM
], wM = {
  key: 0,
  class: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex justify-center items-center bg-dark-3 rounded bg-opacity-50 z-[2]"
}, EM = { class: "relative bg-light-5 rounded-xs shadow-01 w-4/5 p-4" }, $M = /* @__PURE__ */ w("span", { class: "p1-b flex justify-center mb-1" }, "請選擇條件", -1), OM = /* @__PURE__ */ Gu('<div class="flex flex-col gap-2 mt-2"><div class="border border-dark-5 rounded py-1 px-3 flex gap-1 hover:border-transparent hover:bg-true-blue-5 cursor-pointer"><div class="flex flex-col flex-1"><span class="p3-b">當帳戶剩餘預算 小於指定金額，執行動作</span><span class="p4-r">ex: 帳戶剩餘預算小於 1000 元</span></div><div class="flex justify-center items-center">O</div></div></div>', 1), kM = /* @__PURE__ */ Pe({
  __name: "Condition",
  setup(e) {
    const t = ne(!1), n = gt("eventData"), r = ne(n.value.conditions ?? []);
    ke(
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
    return (o, i) => (E(), T(te, null, [
      (E(!0), T(te, null, me(h(r), (l, u) => (E(), T(te, { key: u }, [
        ve(hM, {
          index: u,
          modelValue: h(r)[u],
          "onUpdate:modelValue": (c) => h(r)[u] = c,
          onRemoveItem: (c) => a(u)
        }, null, 8, ["index", "modelValue", "onUpdate:modelValue", "onRemoveItem"]),
        u + 1 !== h(r).length ? (E(), T("div", gM, DM)) : J("", !0)
      ], 64))), 128)),
      w("div", {
        class: "p3-b text-true-blue-3 flex ml-auto w-fit cursor-pointer hover:text-true-blue-2",
        onClick: i[0] || (i[0] = (l) => t.value = !h(t))
      }, " + 加入條件 "),
      h(t) ? (E(), T("div", wM, [
        w("div", EM, [
          w("div", {
            class: "absolute top-1 right-2 cursor-pointer",
            onClick: i[1] || (i[1] = (l) => t.value = !1)
          }, " X "),
          $M,
          ve(Nt),
          OM,
          w("div", {
            class: "border ml-auto mt-2 border-true-blue-3 text-true-blue-3 rounded px-1 w-fit p3-r cursor-pointer hover:text-true-blue-2 hover:border-true-blue-2",
            onClick: s
          }, " 自訂 ")
        ])
      ])) : J("", !0)
    ], 64));
  }
}), NM = { class: "flex items-center gap-2" }, TM = /* @__PURE__ */ w("span", { class: "p4-b" }, "以電子郵件寄出結果", -1), MM = /* @__PURE__ */ w("option", {
  value: "-2",
  disabled: ""
}, "請選擇", -1), IM = ["value"], CM = /* @__PURE__ */ Pe({
  __name: "Notification",
  setup(e) {
    const t = gt("eventData"), n = ne(
      t.value.notification ?? {
        email: -2
      }
    );
    return vn(() => {
      n.value.email === -2 && (n.value.email = 0);
    }), ke(
      n,
      (r) => {
        t.value.notification = r;
      },
      { deep: !0 }
    ), (r, s) => (E(), T("div", null, [
      w("label", NM, [
        TM,
        Ie(w("select", {
          class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
          "onUpdate:modelValue": s[0] || (s[0] = (a) => h(n).email = a)
        }, [
          MM,
          (E(!0), T(te, null, me(h(us), (a, o) => (E(), T(te, { key: o }, [
            Number.isInteger(a) ? J("", !0) : (E(), T("option", {
              key: 0,
              value: Number(o)
            }, le(r.$t(`mail${a}`)), 9, IM))
          ], 64))), 128))
        ], 512), [
          [je, h(n).email]
        ])
      ])
    ]));
  }
}), PM = ["width", "height", "fill", "transform"], AM = { key: 0 }, LM = /* @__PURE__ */ w("path", { d: "M225.6,62.64l-88-48.17a19.91,19.91,0,0,0-19.2,0l-88,48.17A20,20,0,0,0,20,80.19v95.62a20,20,0,0,0,10.4,17.55l88,48.17a19.89,19.89,0,0,0,19.2,0l88-48.17A20,20,0,0,0,236,175.81V80.19A20,20,0,0,0,225.6,62.64ZM128,36.57,200,76,128,115.4,56,76ZM44,96.79l72,39.4v76.67L44,173.44Zm96,116.07V136.19l72-39.4v76.65Z" }, null, -1), SM = [
  LM
], xM = { key: 1 }, RM = /* @__PURE__ */ w("path", {
  d: "M128,129.09V232a8,8,0,0,1-3.84-1l-88-48.16a8,8,0,0,1-4.16-7V80.2a8,8,0,0,1,.7-3.27Z",
  opacity: "0.2"
}, null, -1), YM = /* @__PURE__ */ w("path", { d: "M223.68,66.15,135.68,18h0a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32h0l80.34,44L128,120,47.66,76ZM40,90l80,43.78v85.79L40,175.82Zm96,129.57V133.82L216,90v85.78Z" }, null, -1), FM = [
  RM,
  YM
], VM = { key: 2 }, UM = /* @__PURE__ */ w("path", { d: "M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,120,47.65,76,128,32l80.35,44Zm8,99.64V133.83l80-43.78v85.76Z" }, null, -1), jM = [
  UM
], BM = { key: 3 }, HM = /* @__PURE__ */ w("path", { d: "M222.72,67.9l-88-48.17a13.9,13.9,0,0,0-13.44,0l-88,48.18A14,14,0,0,0,26,80.18v95.64a14,14,0,0,0,7.28,12.27l88,48.18a13.92,13.92,0,0,0,13.44,0l88-48.18A14,14,0,0,0,230,175.82V80.18A14,14,0,0,0,222.72,67.9ZM127,30.25a2,2,0,0,1,1.92,0L212.51,76,128,122.24,43.49,76ZM39,177.57a2,2,0,0,1-1-1.75V86.66l84,46V223Zm177.92,0L134,223V132.64l84-46v89.16A2,2,0,0,1,217,177.57Z" }, null, -1), WM = [
  HM
], GM = { key: 4 }, KM = /* @__PURE__ */ w("path", { d: "M223.68,66.15,135.68,18h0a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32h0l80.34,44L128,120,47.66,76ZM40,90l80,43.78v85.79L40,175.82Zm96,129.57V133.82L216,90v85.78Z" }, null, -1), qM = [
  KM
], zM = { key: 5 }, XM = /* @__PURE__ */ w("path", { d: "M221.76,69.66l-88-48.18a12,12,0,0,0-11.52,0l-88,48.18A12,12,0,0,0,28,80.18v95.64a12,12,0,0,0,6.24,10.52l88,48.18a11.95,11.95,0,0,0,11.52,0l88-48.18A12,12,0,0,0,228,175.82V80.18A12,12,0,0,0,221.76,69.66ZM126.08,28.5a3.94,3.94,0,0,1,3.84,0L216.67,76,128,124.52,39.33,76Zm-88,150.83A4,4,0,0,1,36,175.82V83.29l88,48.16v94.91Zm179.84,0-85.92,47V131.45l88-48.16v92.53A4,4,0,0,1,217.92,179.32Z" }, null, -1), ZM = [
  XM
], JM = {
  name: "PhCube"
}, QM = /* @__PURE__ */ Pe({
  ...JM,
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
    const t = e, n = gt("weight", "regular"), r = gt("size", "1em"), s = gt("color", "currentColor"), a = gt("mirrored", !1), o = C(() => t.weight ?? n), i = C(() => t.size ?? r), l = C(() => t.color ?? s), u = C(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : a ? "scale(-1, 1)" : void 0);
    return (c, p) => (E(), T("svg", Qn({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: i.value,
      height: i.value,
      fill: l.value,
      transform: u.value
    }, c.$attrs), [
      Ft(c.$slots, "default"),
      o.value === "bold" ? (E(), T("g", AM, SM)) : o.value === "duotone" ? (E(), T("g", xM, FM)) : o.value === "fill" ? (E(), T("g", VM, jM)) : o.value === "light" ? (E(), T("g", BM, WM)) : o.value === "regular" ? (E(), T("g", GM, qM)) : o.value === "thin" ? (E(), T("g", zM, ZM)) : J("", !0)
    ], 16, PM));
  }
}), eI = (e) => (Ku("data-v-ba929421"), e = e(), qu(), e), tI = ["onSubmit"], nI = { class: "p1-b" }, rI = /* @__PURE__ */ eI(() => /* @__PURE__ */ w("span", { class: "p4-b" }, "規則名稱*", -1)), aI = {
  key: 0,
  class: "text-red-1"
}, sI = 100, oI = /* @__PURE__ */ Pe({
  __name: "TCEventEditorApp",
  props: {
    data: {}
  },
  emits: ["update:data"],
  setup(e, { expose: t, emit: n }) {
    const r = e, s = C(() => JSON.parse(r.data || "{}")), a = (c) => {
      const p = Object.fromEntries(
        Object.entries(c).filter(([v, f]) => f !== null)
      );
      return JSON.stringify(p, null, 4);
    }, o = ne([]), i = (c) => {
      c.preventDefault(), n("update:data", a(s.value));
    }, l = (c) => {
      var p;
      (p = u.value) == null || p.click();
    };
    Bn("eventData", s), Bn("checkDataValid", o);
    const u = ne();
    return t({
      saveData: l
    }), (c, p) => r.data ? (E(), T("form", {
      key: 0,
      class: "p-5 rounded border flex flex-col gap-5 relative",
      id: "editor-container",
      onSubmit: Hi(i, ["prevent"])
    }, [
      w("div", nI, [
        Cr("建立自動化規則"),
        ve(h(QM))
      ]),
      ve(wr, { title: "基本資料" }, {
        default: qe(() => [
          w("div", null, [
            rI,
            ve(Nt, {
              modelValue: h(s).title,
              "onUpdate:modelValue": p[0] || (p[0] = (v) => h(s).title = v),
              maxLength: sI,
              required: !0
            }, null, 8, ["modelValue"])
          ])
        ]),
        _: 1
      }),
      ve(wr, { title: "執行時間" }, {
        default: qe(() => [
          ve(fO, {
            frequency: h(s).frequency,
            "onUpdate:frequency": p[1] || (p[1] = (v) => h(s).frequency = v),
            interval: h(s).interval,
            "onUpdate:interval": p[2] || (p[2] = (v) => h(s).interval = v)
          }, null, 8, ["frequency", "interval"])
        ]),
        _: 1
      }),
      ve(wr, { title: "通知" }, {
        default: qe(() => [
          ve(CM)
        ]),
        _: 1
      }),
      ve($T),
      ve(kM),
      h(o).length ? (E(), T("span", aI, "資料未填寫完整")) : J("", !0),
      w("button", {
        ref_key: "submitBtn",
        ref: u,
        class: "p-2 px-3 rounded bg-slate-100 hover:bg-sky-500 hover:text-white"
      }, " 保存 ", 512)
    ], 40, tI)) : J("", !0);
  }
});
const pI = /* @__PURE__ */ cs(oI, [["__scopeId", "data-v-ba929421"]]), iI = { class: "bg-white p-3 rounded-xl flex w-4/5 min-h-[80%] max-h-96" }, lI = { class: "flex flex-col gap-2 py-2 px-4" }, uI = /* @__PURE__ */ w("div", { class: "w-[1px] h-auto bg-dark-4" }, null, -1), cI = /* @__PURE__ */ w("div", { class: "flex-1 h-auto bg-red-1" }, null, -1), mI = /* @__PURE__ */ Pe({
  __name: "QuickSetup",
  setup(e) {
    const t = ne(!1), n = () => {
      t.value = !0;
    }, r = ne(["選擇平台", "執行動作", "設定條件", "執行時間"]);
    return (s, a) => {
      const o = un("vue-final-modal");
      return E(), T("div", null, [
        ve(o, {
          modelValue: h(t),
          "onUpdate:modelValue": a[0] || (a[0] = (i) => _e(t) ? t.value = i : null),
          "content-class": "flex h-full w-full justify-center items-center",
          "hide-overlay": !1,
          "esc-to-close": !0,
          "click-to-close": !0
        }, {
          default: qe(() => [
            w("div", iI, [
              w("div", lI, [
                (E(!0), T(te, null, me(h(r), (i, l) => (E(), T("div", {
                  key: i,
                  class: "flex flex-col"
                }, [
                  w("span", null, " Step." + le(l + 1), 1),
                  w("span", null, le(i), 1)
                ]))), 128))
              ]),
              uI,
              cI
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        w("div", { onClick: n }, [
          Ft(s.$slots, "default")
        ])
      ]);
    };
  }
});
export {
  mI as QuickSetup,
  pI as TCEventEditorApp,
  vI as TCEventItems,
  fI as setApiUrlBase
};
