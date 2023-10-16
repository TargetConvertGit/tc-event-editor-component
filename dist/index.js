import { defineComponent as Ae, openBlock as O, createElementBlock as I, createElementVNode as E, toDisplayString as le, ref as ne, watchEffect as ss, computed as M, watch as ke, onBeforeUnmount as Yu, Fragment as te, unref as h, renderList as me, createBlock as Ke, createCommentVNode as J, withDirectives as Ce, isRef as _e, vModelSelect as je, reactive as os, onMounted as fn, onUnmounted as Ir, toRefs as Fu, h as An, provide as Bn, inject as vn, resolveDynamicComponent as Ui, normalizeProps as ji, mergeProps as Cr, renderSlot as Gt, normalizeClass as He, normalizeStyle as gr, withKeys as Zs, createVNode as ve, withCtx as qe, nextTick as Ln, toRef as Ia, resolveComponent as Bt, Transition as Bi, createTextVNode as Mr, withModifiers as Hi, guardReactiveProps as Vu, resolveDirective as Uu, toHandlers as ju, vModelCheckbox as zr, getCurrentInstance as is, shallowRef as Bu, onBeforeMount as Hu, Text as Wu, Teleport as Wi, createStaticVNode as Gu, pushScopeId as Ku, popScopeId as qu } from "vue";
function HI(e) {
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
var Xe = /* @__PURE__ */ ((e) => (e[e.Google = 1] = "Google", e[e.Facebook = 2] = "Facebook", e))(Xe || {}), mt = /* @__PURE__ */ ((e) => (e[e.Campaign = 1] = "Campaign", e[e.AdGroup = 2] = "AdGroup", e[e.Ad = 3] = "Ad", e[e.AdTag = 4] = "AdTag", e))(mt || {}), ct = /* @__PURE__ */ ((e) => (e[e.Campaign = 1] = "Campaign", e[e.AdGroup = 2] = "AdGroup", e[e.Ad = 3] = "Ad", e[e.AdTag = 4] = "AdTag", e))(ct || {}), un = /* @__PURE__ */ ((e) => (e[e.ForAll = 1] = "ForAll", e[e.ForID = 2] = "ForID", e[e.ForActive = 3] = "ForActive", e))(un || {}), Sn = /* @__PURE__ */ ((e) => (e[e.Account = 1] = "Account", e[e.Campaign = 2] = "Campaign", e[e.AdGroup = 3] = "AdGroup", e))(Sn || {}), xn = /* @__PURE__ */ ((e) => (e[e.Account = 1] = "Account", e[e.Campaign = 2] = "Campaign", e[e.AdGroup = 3] = "AdGroup", e))(xn || {}), xe = /* @__PURE__ */ ((e) => (e[e.Never = -1] = "Never", e[e.Hour = 1] = "Hour", e[e.Day = 2] = "Day", e[e.Week = 3] = "Week", e[e.Month = 4] = "Month", e[e.Annual = 5] = "Annual", e))(xe || {}), $t = /* @__PURE__ */ ((e) => (e[e.Sunday = 0] = "Sunday", e[e.Monday = 1] = "Monday", e[e.Tuesday = 2] = "Tuesday", e[e.Wednesday = 3] = "Wednesday", e[e.Thursday = 4] = "Thursday", e[e.Friday = 5] = "Friday", e[e.Saturday = 6] = "Saturday", e[e.Weekday = -1] = "Weekday", e[e.Weekend = -2] = "Weekend", e))($t || {}), sn = /* @__PURE__ */ ((e) => (e[e.First = 1] = "First", e[e.Second = 2] = "Second", e[e.Third = 3] = "Third", e[e.Fourth = 4] = "Fourth", e[e.Fifth = 5] = "Fifth", e[e.Last = -1] = "Last", e))(sn || {}), it = /* @__PURE__ */ ((e) => (e[e.January = 1] = "January", e[e.February = 2] = "February", e[e.March = 3] = "March", e[e.April = 4] = "April", e[e.May = 5] = "May", e[e.June = 6] = "June", e[e.July = 7] = "July", e[e.August = 8] = "August", e[e.September = 9] = "September", e[e.October = 10] = "October", e[e.November = 11] = "November", e[e.December = 12] = "December", e))(it || {}), ae = /* @__PURE__ */ ((e) => (e[e.SetNewBudget = 1] = "SetNewBudget", e[e.IncreaseBudget = 2] = "IncreaseBudget", e[e.LowerBudget = 3] = "LowerBudget", e[e.OpenProject = 4] = "OpenProject", e[e.SuspendProject = 5] = "SuspendProject", e[e.None = -1] = "None", e))(ae || {}), Rn = /* @__PURE__ */ ((e) => (e.DailyBudget = "dailyBudget", e.TotalBudget = "totalBudget", e))(Rn || {}), se = /* @__PURE__ */ ((e) => (e.Value = "value", e.Percentage = "percentage", e))(se || {}), fe = /* @__PURE__ */ ((e) => (e.BudgetRemaining = "budgetRemaining", e.BudgetCap = "budgetCap", e.Clicks = "clicks", e.Impressions = "impressions", e.Cpc = "CPC", e.Spend = "spend", e.Conversions = "conversions", e.ConversionSpend = "conversionSpend", e.ReturnOnADSpending = "roas", e))(fe || {}), _r = /* @__PURE__ */ ((e) => (e[e.Today = 1] = "Today", e[e.Yesterday = 2] = "Yesterday", e[e.Last3Days = 3] = "Last3Days", e[e.Last7Days = 4] = "Last7Days", e[e.ThisMonth = 5] = "ThisMonth", e[e.SpecifiedTime = -1] = "SpecifiedTime", e))(_r || {}), ls = /* @__PURE__ */ ((e) => (e.MoreThan = ">", e.GreaterOrEqualTo = ">=", e.Equal = "==", e.LessThan = "<", e.LessThanOrEqualTo = "<=", e))(ls || {}), us = /* @__PURE__ */ ((e) => (e[e.AbnormalityOrError = 0] = "AbnormalityOrError", e[e.Error = 1] = "Error", e[e.None = -1] = "None", e))(us || {});
const WI = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ActionType: ae,
  AdLevelTypeFacebook: ct,
  AdLevelTypeGoogle: mt,
  BudgetType: Rn,
  ClientType: Xe,
  ConditionAdLevelTypeFacebook: xn,
  ConditionAdLevelTypeGoogle: Sn,
  ConditionType: fe,
  DateRangeType: _r,
  EventActionTargetType: un,
  EventHelper: zu,
  FrequencyType: xe,
  MonthType: it,
  OperationType: ls,
  ValueType: se,
  WeekOrdinalWordsType: sn,
  WeekdaysType: $t,
  emailType: us
}, Symbol.toStringTag, { value: "Module" })), Xu = { class: "flex" }, Zu = ["checked", "id"], Ju = ["for"], Qu = /* @__PURE__ */ Ae({
  __name: "CheckBox",
  props: {
    label: {},
    checked: { type: Boolean },
    fieldId: {}
  },
  emits: ["update:checked"],
  setup(e, { emit: t }) {
    return (n, r) => (O(), I("div", Xu, [
      E("input", {
        onInput: r[0] || (r[0] = (s) => n.$emit("update:checked", s.target.checked)),
        type: "checkbox",
        checked: n.checked,
        id: n.fieldId,
        class: "hidden"
      }, null, 40, Zu),
      E("label", {
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
}, nc = /* @__PURE__ */ E("span", { class: "p3-r" }, "指定", -1), rc = ["value"], ac = { class: "flex gap-4 flex-wrap" }, sc = /* @__PURE__ */ Ae({
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
    const n = e, r = ne(n.monthDate), s = ne(n.weekOrdinal), a = ne(n.weekdays), o = ne(n.yearMonths), i = (D, f, b = !1) => {
      if (b) {
        f.findIndex((k) => k === D) === -1 ? f.push(D) : f.splice(f.indexOf(D), 1), f.sort((k, _) => k - _);
        return;
      }
      f.value.findIndex((k) => k === D) === -1 ? f.value.push(D) : f.value.splice(f.value.indexOf(D), 1), f.value.sort((k, _) => k - _);
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
      { name: "星期日", id: $t.Sunday },
      { name: "星期一", id: $t.Monday },
      { name: "星期二", id: $t.Tuesday },
      { name: "星期三", id: $t.Wednesday },
      { name: "星期四", id: $t.Thursday },
      { name: "星期五", id: $t.Friday },
      { name: "星期六", id: $t.Saturday },
      { name: "平日", id: $t.Weekday },
      { name: "週末", id: $t.Weekend }
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
    ]), v = M(() => {
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
    }), d = M(() => n.type === xe.Month || n.type === xe.Annual ? !0 : (r.value = [], s.value = [], a.value = [], o.value = [], !1)), $ = ne([
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
    ]), g = ne($.value[0]);
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
        (D === xe.Month || D === xe.Annual) && (D != xe.Annual && (o.value = []), c.value && c.value.length > 0 ? g.value = $.value[1] : g.value = $.value[0]);
      },
      { immediate: !0 }
    ), Yu(() => {
      r.value = [], s.value = [], a.value = [], o.value = [];
    }), (D, f) => (O(), I(te, null, [
      D.type === h(xe).Annual ? (O(), I("div", ec, [
        (O(!0), I(te, null, me(h(p), (b) => {
          var k;
          return O(), Ke(Js, {
            key: b.id,
            checked: (k = h(o)) == null ? void 0 : k.includes(b.id),
            "onUpdate:checked": (_) => i(b.id, h(o), !0),
            fieldId: b.name,
            label: b.name
          }, null, 8, ["checked", "onUpdate:checked", "fieldId", "label"]);
        }), 128))
      ])) : J("", !0),
      h(d) ? (O(), I("div", tc, [
        nc,
        Ce(E("select", {
          class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
          "onUpdate:modelValue": f[0] || (f[0] = (b) => _e(g) ? g.value = b : null)
        }, [
          (O(!0), I(te, null, me(h($), (b, k) => (O(), I("option", {
            key: k,
            value: b
          }, le(b.name), 9, rc))), 128))
        ], 512), [
          [je, h(g)]
        ])
      ])) : J("", !0),
      E("div", ac, [
        (O(!0), I(te, null, me(h(v), (b) => (O(), I("div", {
          class: "flex gap-1 flex-wrap",
          key: b
        }, [
          (O(!0), I(te, null, me(b.options, (k) => {
            var _;
            return O(), Ke(Js, {
              key: k.id,
              checked: (_ = b.key.value) == null ? void 0 : _.includes(k.id),
              "onUpdate:checked": (C) => i(k.id, b.key),
              fieldId: k.name,
              label: k.name
            }, null, 8, ["checked", "onUpdate:checked", "fieldId", "label"]);
          }), 128))
        ]))), 128))
      ])
    ], 64));
  }
});
var lt = "top", yt = "bottom", Dt = "right", ut = "left", ds = "auto", Pr = [lt, yt, Dt, ut], Hn = "start", Er = "end", oc = "clippingParents", Gi = "viewport", cr = "popper", ic = "reference", Qs = /* @__PURE__ */ Pr.reduce(function(e, t) {
  return e.concat([t + "-" + Hn, t + "-" + Er]);
}, []), Ki = /* @__PURE__ */ [].concat(Pr, [ds]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Hn, t + "-" + Er]);
}, []), lc = "beforeRead", uc = "read", cc = "afterRead", dc = "beforeMain", fc = "main", vc = "afterMain", pc = "beforeWrite", mc = "write", hc = "afterWrite", gc = [lc, uc, cc, dc, fc, vc, pc, mc, hc];
function Yt(e) {
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
function _t(e) {
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
    !_t(a) || !Yt(a) || (Object.assign(a.style, r), Object.keys(s).forEach(function(o) {
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
      !_t(s) || !Yt(s) || (Object.assign(s.style, i), Object.keys(a).forEach(function(l) {
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
function Rt(e) {
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
  t && _t(e) && (s = e.offsetWidth > 0 && Wn(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Wn(r.height) / e.offsetHeight || 1);
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
  return ["table", "td", "th"].indexOf(Yt(e)) >= 0;
}
function pn(e) {
  return ((wn(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function ma(e) {
  return Yt(e) === "html" ? e : (
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
  return !_t(e) || // https://github.com/popperjs/popper-core/issues/837
  Kt(e).position === "fixed" ? null : e.offsetParent;
}
function wc(e) {
  var t = /firefox/i.test(xa()), n = /Trident/i.test(xa());
  if (n && _t(e)) {
    var r = Kt(e);
    if (r.position === "fixed")
      return null;
  }
  var s = ma(e);
  for (fs(s) && (s = s.host); _t(s) && ["html", "body"].indexOf(Yt(s)) < 0; ) {
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
  return n && (Yt(n) === "html" || Yt(n) === "body" && Kt(n).position === "static") ? t : n || wc(e) || t;
}
function ps(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function br(e, t, n) {
  return Dn(e, Xr(t, n));
}
function Ec(e, t, n) {
  var r = br(e, t, n);
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
var Oc = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, Zi(typeof t != "number" ? t : Ji(t, Pr));
};
function $c(e) {
  var t, n = e.state, r = e.name, s = e.options, a = n.elements.arrow, o = n.modifiersData.popperOffsets, i = Rt(n.placement), l = ps(i), u = [ut, Dt].indexOf(i) >= 0, c = u ? "height" : "width";
  if (!(!a || !o)) {
    var p = Oc(s.padding, n), v = vs(a), d = l === "y" ? lt : ut, $ = l === "y" ? yt : Dt, g = n.rects.reference[c] + n.rects.reference[l] - o[l] - n.rects.popper[c], D = o[l] - n.rects.reference[l], f = Ar(a), b = f ? l === "y" ? f.clientHeight || 0 : f.clientWidth || 0 : 0, k = g / 2 - D / 2, _ = p[d], C = b - v[c] - p[$], N = b / 2 - v[c] / 2 + k, x = br(_, N, C), P = l;
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
  fn: $c,
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
function Ic(e, t) {
  var n = e.x, r = e.y, s = t.devicePixelRatio || 1;
  return {
    x: Wn(n * s) / s || 0,
    y: Wn(r * s) / s || 0
  };
}
function to(e) {
  var t, n = e.popper, r = e.popperRect, s = e.placement, a = e.variation, o = e.offsets, i = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, p = e.isFixed, v = o.x, d = v === void 0 ? 0 : v, $ = o.y, g = $ === void 0 ? 0 : $, D = typeof c == "function" ? c({
    x: d,
    y: g
  }) : {
    x: d,
    y: g
  };
  d = D.x, g = D.y;
  var f = o.hasOwnProperty("x"), b = o.hasOwnProperty("y"), k = ut, _ = lt, C = window;
  if (u) {
    var N = Ar(n), x = "clientHeight", P = "clientWidth";
    if (N === ft(n) && (N = pn(n), Kt(N).position !== "static" && i === "absolute" && (x = "scrollHeight", P = "scrollWidth")), N = N, s === lt || (s === ut || s === Dt) && a === Er) {
      _ = yt;
      var A = p && N === C && C.visualViewport ? C.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        N[x]
      );
      g -= A - r.height, g *= l ? 1 : -1;
    }
    if (s === ut || (s === lt || s === yt) && a === Er) {
      k = Dt;
      var S = p && N === C && C.visualViewport ? C.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        N[P]
      );
      d -= S - r.width, d *= l ? 1 : -1;
    }
  }
  var j = Object.assign({
    position: i
  }, u && Tc), Y = c === !0 ? Ic({
    x: d,
    y: g
  }, ft(n)) : {
    x: d,
    y: g
  };
  if (d = Y.x, g = Y.y, l) {
    var X;
    return Object.assign({}, j, (X = {}, X[_] = b ? "0" : "", X[k] = f ? "0" : "", X.transform = (C.devicePixelRatio || 1) <= 1 ? "translate(" + d + "px, " + g + "px)" : "translate3d(" + d + "px, " + g + "px, 0)", X));
  }
  return Object.assign({}, j, (t = {}, t[_] = b ? g + "px" : "", t[k] = f ? d + "px" : "", t.transform = "", t));
}
function Cc(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, s = r === void 0 ? !0 : r, a = n.adaptive, o = a === void 0 ? !0 : a, i = n.roundOffsets, l = i === void 0 ? !0 : i, u = {
    placement: Rt(t.placement),
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
const Mc = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Cc,
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
  return ["html", "body", "#document"].indexOf(Yt(e)) >= 0 ? e.ownerDocument.body : _t(e) && gs(e) ? e : Qi(ma(e));
}
function yr(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Qi(e), s = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = ft(r), o = s ? [a].concat(a.visualViewport || [], gs(r) ? r : []) : r, i = t.concat(o);
  return s ? i : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    i.concat(yr(ma(o)))
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
  var t = yr(ma(e)), n = ["absolute", "fixed"].indexOf(Kt(e).position) >= 0, r = n && _t(e) ? Ar(e) : e;
  return wn(r) ? t.filter(function(s) {
    return wn(s) && zi(s, r) && Yt(s) !== "body";
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
  var t = e.reference, n = e.element, r = e.placement, s = r ? Rt(r) : null, a = r ? Kn(r) : null, o = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2, l;
  switch (s) {
    case lt:
      l = {
        x: o,
        y: t.y - n.height
      };
      break;
    case yt:
      l = {
        x: o,
        y: t.y + t.height
      };
      break;
    case Dt:
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
      case Er:
        l[u] = l[u] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return l;
}
function Or(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = r === void 0 ? e.placement : r, a = n.strategy, o = a === void 0 ? e.strategy : a, i = n.boundary, l = i === void 0 ? oc : i, u = n.rootBoundary, c = u === void 0 ? Gi : u, p = n.elementContext, v = p === void 0 ? cr : p, d = n.altBoundary, $ = d === void 0 ? !1 : d, g = n.padding, D = g === void 0 ? 0 : g, f = Zi(typeof D != "number" ? D : Ji(D, Pr)), b = v === cr ? ic : cr, k = e.rects.popper, _ = e.elements[$ ? b : v], C = Vc(wn(_) ? _ : _.contextElement || pn(e.elements.popper), l, c, o), N = Gn(e.elements.reference), x = el({
    reference: N,
    element: k,
    strategy: "absolute",
    placement: s
  }), P = Ra(Object.assign({}, k, x)), A = v === cr ? P : N, S = {
    top: C.top - A.top + f.top,
    bottom: A.bottom - C.bottom + f.bottom,
    left: C.left - A.left + f.left,
    right: A.right - C.right + f.right
  }, j = e.modifiersData.offset;
  if (v === cr && j) {
    var Y = j[s];
    Object.keys(S).forEach(function(X) {
      var K = [Dt, yt].indexOf(X) >= 0 ? 1 : -1, U = [lt, yt].indexOf(X) >= 0 ? "y" : "x";
      S[X] += Y[U] * K;
    });
  }
  return S;
}
function Uc(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = n.boundary, a = n.rootBoundary, o = n.padding, i = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? Ki : l, c = Kn(r), p = c ? i ? Qs : Qs.filter(function($) {
    return Kn($) === c;
  }) : Pr, v = p.filter(function($) {
    return u.indexOf($) >= 0;
  });
  v.length === 0 && (v = p);
  var d = v.reduce(function($, g) {
    return $[g] = Or(e, {
      placement: g,
      boundary: s,
      rootBoundary: a,
      padding: o
    })[Rt(g)], $;
  }, {});
  return Object.keys(d).sort(function($, g) {
    return d[$] - d[g];
  });
}
function jc(e) {
  if (Rt(e) === ds)
    return [];
  var t = Hr(e);
  return [no(e), t, no(t)];
}
function Bc(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var s = n.mainAxis, a = s === void 0 ? !0 : s, o = n.altAxis, i = o === void 0 ? !0 : o, l = n.fallbackPlacements, u = n.padding, c = n.boundary, p = n.rootBoundary, v = n.altBoundary, d = n.flipVariations, $ = d === void 0 ? !0 : d, g = n.allowedAutoPlacements, D = t.options.placement, f = Rt(D), b = f === D, k = l || (b || !$ ? [Hr(D)] : jc(D)), _ = [D].concat(k).reduce(function(ee, De) {
      return ee.concat(Rt(De) === ds ? Uc(t, {
        placement: De,
        boundary: c,
        rootBoundary: p,
        padding: u,
        flipVariations: $,
        allowedAutoPlacements: g
      }) : De);
    }, []), C = t.rects.reference, N = t.rects.popper, x = /* @__PURE__ */ new Map(), P = !0, A = _[0], S = 0; S < _.length; S++) {
      var j = _[S], Y = Rt(j), X = Kn(j) === Hn, K = [lt, yt].indexOf(Y) >= 0, U = K ? "width" : "height", F = Or(t, {
        placement: j,
        boundary: c,
        rootBoundary: p,
        altBoundary: v,
        padding: u
      }), Q = K ? X ? Dt : ut : X ? yt : lt;
      C[U] > N[U] && (Q = Hr(Q));
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
      for (var w = $ ? 3 : 1, q = function(De) {
        var he = _.find(function(Ie) {
          var Oe = x.get(Ie);
          if (Oe)
            return Oe.slice(0, De).every(function(be) {
              return be;
            });
        });
        if (he)
          return A = he, "break";
      }, pe = w; pe > 0; pe--) {
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
  return [lt, Dt, yt, ut].some(function(t) {
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
  var r = Rt(e), s = [ut, lt].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, o = a[0], i = a[1];
  return o = o || 0, i = (i || 0) * s, [ut, Dt].indexOf(r) >= 0 ? {
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
  var t = e.state, n = e.options, r = e.name, s = n.mainAxis, a = s === void 0 ? !0 : s, o = n.altAxis, i = o === void 0 ? !1 : o, l = n.boundary, u = n.rootBoundary, c = n.altBoundary, p = n.padding, v = n.tether, d = v === void 0 ? !0 : v, $ = n.tetherOffset, g = $ === void 0 ? 0 : $, D = Or(t, {
    boundary: l,
    rootBoundary: u,
    padding: p,
    altBoundary: c
  }), f = Rt(t.placement), b = Kn(t.placement), k = !b, _ = ps(f), C = Jc(_), N = t.modifiersData.popperOffsets, x = t.rects.reference, P = t.rects.popper, A = typeof g == "function" ? g(Object.assign({}, t.rects, {
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
      var X, K = _ === "y" ? lt : ut, U = _ === "y" ? yt : Dt, F = _ === "y" ? "height" : "width", Q = N[_], W = Q + D[K], V = Q - D[U], w = d ? -P[F] / 2 : 0, q = b === Hn ? x[F] : P[F], pe = b === Hn ? -P[F] : -x[F], Ee = t.elements.arrow, ee = d && Ee ? vs(Ee) : {
        width: 0,
        height: 0
      }, De = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Xi(), he = De[K], Ie = De[U], Oe = br(0, x[F], ee[F]), be = k ? x[F] / 2 - w - Oe - he - S.mainAxis : q - Oe - he - S.mainAxis, Ye = k ? -x[F] / 2 + w + Oe + Ie + S.mainAxis : pe + Oe + Ie + S.mainAxis, Re = t.elements.arrow && Ar(t.elements.arrow), ze = Re ? _ === "y" ? Re.clientTop || 0 : Re.clientLeft || 0 : 0, y = (X = j == null ? void 0 : j[_]) != null ? X : 0, m = Q + be - y - ze, L = Q + Ye - y, Z = br(d ? Xr(W, m) : W, Q, d ? Dn(V, L) : V);
      N[_] = Z, Y[_] = Z - Q;
    }
    if (i) {
      var ie, ge = _ === "x" ? lt : ut, Ze = _ === "x" ? yt : Dt, Ue = N[C], vt = C === "y" ? "height" : "width", Mt = Ue + D[ge], Ne = Ue - D[Ze], R = [lt, ut].indexOf(f) !== -1, H = (ie = j == null ? void 0 : j[C]) != null ? ie : 0, Fe = R ? Mt : Ue - x[vt] - P[vt] - H + S.altAxis, Ve = R ? Ue + x[vt] + P[vt] - H - S.altAxis : Ne, Pt = d && R ? Ec(Fe, Ue, Ve) : br(d ? Fe : Mt, Ue, d ? Ve : Ne);
      N[C] = Pt, Y[C] = Pt - Ue;
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
  return e === ft(e) || !_t(e) ? ms(e) : td(e);
}
function rd(e) {
  var t = e.getBoundingClientRect(), n = Wn(t.width) / e.offsetWidth || 1, r = Wn(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function ad(e, t, n) {
  n === void 0 && (n = !1);
  var r = _t(t), s = _t(t) && rd(t), a = pn(t), o = Gn(e, s, n), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((Yt(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  gs(a)) && (i = nd(t)), _t(t) ? (l = Gn(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = hs(a))), {
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
    }, p = [], v = !1, d = {
      state: c,
      setOptions: function(f) {
        var b = typeof f == "function" ? f(c.options) : f;
        g(), c.options = Object.assign({}, a, c.options, b), c.scrollParents = {
          reference: wn(i) ? yr(i) : i.contextElement ? yr(i.contextElement) : [],
          popper: yr(l)
        };
        var k = od(ld([].concat(r, c.options.modifiers)));
        return c.orderedModifiers = k.filter(function(_) {
          return _.enabled;
        }), $(), d.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!v) {
          var f = c.elements, b = f.reference, k = f.popper;
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
              var C = c.orderedModifiers[_], N = C.fn, x = C.options, P = x === void 0 ? {} : x, A = C.name;
              typeof N == "function" && (c = N({
                state: c,
                options: P,
                name: A,
                instance: d
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: id(function() {
        return new Promise(function(D) {
          d.forceUpdate(), D(c);
        });
      }),
      destroy: function() {
        g(), v = !0;
      }
    };
    if (!io(i, l))
      return d;
    d.setOptions(u).then(function(D) {
      !v && u.onFirstUpdate && u.onFirstUpdate(D);
    });
    function $() {
      c.orderedModifiers.forEach(function(D) {
        var f = D.name, b = D.options, k = b === void 0 ? {} : b, _ = D.effect;
        if (typeof _ == "function") {
          var C = _({
            state: c,
            name: f,
            instance: d,
            options: k
          }), N = function() {
          };
          p.push(C || N);
        }
      });
    }
    function g() {
      p.forEach(function(D) {
        return D();
      }), p = [];
    }
    return d;
  };
}
var cd = [Ac, Zc, Mc, yc, zc, Hc, ed, Nc, Gc], dd = /* @__PURE__ */ ud({
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
}, hd = /* @__PURE__ */ E("polyline", { points: "9 18 15 12 9 6" }, null, -1), gd = [
  hd
];
function _d(e, t) {
  return O(), I("svg", md, gd);
}
const bd = /* @__PURE__ */ Xt(pd, [["render", _d]]), yd = {}, Dd = {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  viewBox: "0 0 24 24"
}, wd = /* @__PURE__ */ E("polyline", { points: "15 18 9 12 15 6" }, null, -1), Ed = [
  wd
];
function Od(e, t) {
  return O(), I("svg", Dd, Ed);
}
const $d = /* @__PURE__ */ Xt(yd, [["render", Od]]), kd = {}, Nd = {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  viewBox: "0 0 24 24"
}, Td = /* @__PURE__ */ E("polyline", { points: "6 9 12 15 18 9" }, null, -1), Id = [
  Td
];
function Cd(e, t) {
  return O(), I("svg", Nd, Id);
}
const Md = /* @__PURE__ */ Xt(kd, [["render", Cd]]), Pd = {}, Ad = {
  fill: "none",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  viewBox: "0 0 24 24"
}, Ld = /* @__PURE__ */ E("path", { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" }, null, -1), Sd = [
  Ld
];
function xd(e, t) {
  return O(), I("svg", Ad, Sd);
}
const Rd = /* @__PURE__ */ Xt(Pd, [["render", xd]]), Yd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IconChevronDown: Md,
  IconChevronLeft: $d,
  IconChevronRight: bd,
  IconClock: Rd
}, Symbol.toStringTag, { value: "Module" })), qn = /* @__PURE__ */ Ae({
  __name: "BaseIcon",
  props: {
    name: { type: String, required: !0 },
    width: { type: String },
    height: { type: String },
    size: { type: String, default: "26" },
    viewBox: { type: String }
  },
  setup(e) {
    const t = e, n = M(() => t.width || t.size), r = M(() => t.height || t.size), s = M(() => Yd[`Icon${t.name}`]);
    return (a, o) => (O(), Ke(Ui(h(s)), {
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
  const t = ne(!1), n = M(() => t.value ? "dark" : "light");
  let r, s;
  function a(d) {
    t.value = d.matches;
  }
  function o() {
    Fd("matchMedia") && (r = window.matchMedia("(prefers-color-scheme: dark)"), r.addEventListener("change", a), t.value = r.matches);
  }
  function i() {
    const { selector: d = ":root", darkClass: $ = "dark" } = e.value, g = document.querySelector(d);
    t.value = g.classList.contains($);
  }
  function l(d) {
    const { selector: $ = ":root", darkClass: g = "dark" } = d;
    if (tl() && $ && g) {
      const D = document.querySelector($);
      D && (s = new MutationObserver(i), s.observe(D, {
        attributes: !0,
        attributeFilter: ["class"]
      }), t.value = D.classList.contains(g));
    }
  }
  function u() {
    p();
    const d = typeof e.value;
    d === "string" && e.value.toLowerCase() === "system" ? o() : d === "object" ? l(e.value) : t.value = !!e.value;
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
var jd = typeof Fr == "object" && Fr && Fr.Object === Object && Fr, nl = jd, Bd = nl, Hd = typeof self == "object" && self && self.Object === Object && self, Wd = Bd || Hd || Function("return this")(), Ft = Wd, Gd = Ft, Kd = Gd.Symbol, ha = Kd, lo = ha, rl = Object.prototype, qd = rl.hasOwnProperty, zd = rl.toString, dr = lo ? lo.toStringTag : void 0;
function Xd(e) {
  var t = qd.call(e, dr), n = e[dr];
  try {
    e[dr] = void 0;
    var r = !0;
  } catch {
  }
  var s = zd.call(e);
  return r && (t ? e[dr] = n : delete e[dr]), s;
}
var Zd = Xd, Jd = Object.prototype, Qd = Jd.toString;
function ef(e) {
  return Qd.call(e);
}
var tf = ef, uo = ha, nf = Zd, rf = tf, af = "[object Null]", sf = "[object Undefined]", co = uo ? uo.toStringTag : void 0;
function of(e) {
  return e == null ? e === void 0 ? sf : af : co && co in Object(e) ? nf(e) : rf(e);
}
var Vt = of;
function lf(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Zt = lf, uf = Vt, cf = Zt, df = "[object AsyncFunction]", ff = "[object Function]", vf = "[object GeneratorFunction]", pf = "[object Proxy]";
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
var Ct = gf, _f = Vt, bf = It, yf = Ct, Df = "[object String]";
function wf(e) {
  return typeof e == "string" || !bf(e) && yf(e) && _f(e) == Df;
}
var St = wf, Ef = Vt, Of = Ct, $f = "[object Boolean]";
function kf(e) {
  return e === !0 || e === !1 || Of(e) && Ef(e) == $f;
}
var Nf = kf, Tf = Vt, If = Ct, Cf = "[object Number]";
function Mf(e) {
  return typeof e == "number" || If(e) && Tf(e) == Cf;
}
var Tt = Mf, Pf = Vt, Af = Ct, Lf = "[object Date]";
function Sf(e) {
  return Af(e) && Pf(e) == Lf;
}
var xf = Sf;
function Rf(e) {
  return function(t) {
    return e(t);
  };
}
var al = Rf, $r = {}, Yf = {
  get exports() {
    return $r;
  },
  set exports(e) {
    $r = e;
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
})(Yf, $r);
var Ff = xf, Vf = al, fo = $r, vo = fo && fo.isDate, Uf = vo ? Vf(vo) : Ff, jf = Uf, Bf = Vt, Hf = Ct, Wf = "[object Symbol]";
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
var bs = Zf, Jf = Ft, Qf = Jf["__core-js_shared__"], ev = Qf, Ca = ev, po = function() {
  var e = /[^.]+$/.exec(Ca && Ca.keys && Ca.keys.IE_PROTO || "");
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
var Nn = Ev, Ov = Nn, $v = Ov(Object, "create"), ga = $v, mo = ga;
function kv() {
  this.__data__ = mo ? mo(null) : {}, this.size = 0;
}
var Nv = kv;
function Tv(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Iv = Tv, Cv = ga, Mv = "__lodash_hash_undefined__", Pv = Object.prototype, Av = Pv.hasOwnProperty;
function Lv(e) {
  var t = this.__data__;
  if (Cv) {
    var n = t[e];
    return n === Mv ? void 0 : n;
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
var Hv = Bv, Wv = Nv, Gv = Iv, Kv = Sv, qv = Vv, zv = Hv;
function Qn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Qn.prototype.clear = Wv;
Qn.prototype.delete = Gv;
Qn.prototype.get = Kv;
Qn.prototype.has = qv;
Qn.prototype.set = zv;
var Xv = Qn;
function Zv() {
  this.__data__ = [], this.size = 0;
}
var Jv = Zv;
function Qv(e, t) {
  return e === t || e !== e && t !== t;
}
var er = Qv, ep = er;
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
function tr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
tr.prototype.clear = hp;
tr.prototype.delete = gp;
tr.prototype.get = _p;
tr.prototype.has = bp;
tr.prototype.set = yp;
var ba = tr, Dp = Nn, wp = Ft, Ep = Dp(wp, "Map"), ys = Ep, ho = Xv, Op = ba, $p = ys;
function kp() {
  this.size = 0, this.__data__ = {
    hash: new ho(),
    map: new ($p || Op)(),
    string: new ho()
  };
}
var Np = kp;
function Tp(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var Ip = Tp, Cp = Ip;
function Mp(e, t) {
  var n = e.__data__;
  return Cp(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
var ya = Mp, Pp = ya;
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
function nr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
nr.prototype.clear = Hp;
nr.prototype.delete = Wp;
nr.prototype.get = Gp;
nr.prototype.has = Kp;
nr.prototype.set = qp;
var Ds = nr, ol = Ds, zp = "Expected a function";
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
var Da = Em, Om = ll, $m = Da;
function km(e, t) {
  t = Om(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[$m(t[n++])];
  return n && n == r ? e : void 0;
}
var ul = km, Nm = ul;
function Tm(e, t, n) {
  var r = e == null ? void 0 : Nm(e, t);
  return r === void 0 ? n : r;
}
var bn = Tm, Im = Nn, Cm = function() {
  try {
    var e = Im(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), cl = Cm, yo = cl;
function Mm(e, t, n) {
  t == "__proto__" && yo ? yo(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
var wa = Mm, Pm = wa, Am = er, Lm = Object.prototype, Sm = Lm.hasOwnProperty;
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
var Gm = Wm, Km = Vt, qm = Ct, zm = "[object Arguments]";
function Xm(e) {
  return qm(e) && Km(e) == zm;
}
var Zm = Xm, Do = Zm, Jm = Ct, fl = Object.prototype, Qm = fl.hasOwnProperty, eh = fl.propertyIsEnumerable, th = Do(function() {
  return arguments;
}()) ? Do : function(e) {
  return Jm(e) && Qm.call(e, "callee") && !eh.call(e, "callee");
}, Os = th, zn = {}, nh = {
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
  var n = Ft, r = ah, s = t && !t.nodeType && t, a = s && !0 && e && !e.nodeType && e, o = a && a.exports === s, i = o ? n.Buffer : void 0, l = i ? i.isBuffer : void 0, u = l || r;
  e.exports = u;
})(nh, zn);
var sh = 9007199254740991;
function oh(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= sh;
}
var $s = oh, ih = Vt, lh = $s, uh = Ct, ch = "[object Arguments]", dh = "[object Array]", fh = "[object Boolean]", vh = "[object Date]", ph = "[object Error]", mh = "[object Function]", hh = "[object Map]", gh = "[object Number]", _h = "[object Object]", bh = "[object RegExp]", yh = "[object Set]", Dh = "[object String]", wh = "[object WeakMap]", Eh = "[object ArrayBuffer]", Oh = "[object DataView]", $h = "[object Float32Array]", kh = "[object Float64Array]", Nh = "[object Int8Array]", Th = "[object Int16Array]", Ih = "[object Int32Array]", Ch = "[object Uint8Array]", Mh = "[object Uint8ClampedArray]", Ph = "[object Uint16Array]", Ah = "[object Uint32Array]", Le = {};
Le[$h] = Le[kh] = Le[Nh] = Le[Th] = Le[Ih] = Le[Ch] = Le[Mh] = Le[Ph] = Le[Ah] = !0;
Le[ch] = Le[dh] = Le[Eh] = Le[fh] = Le[Oh] = Le[vh] = Le[ph] = Le[mh] = Le[hh] = Le[gh] = Le[_h] = Le[bh] = Le[yh] = Le[Dh] = Le[wh] = !1;
function Lh(e) {
  return uh(e) && lh(e.length) && !!Le[ih(e)];
}
var Sh = Lh, xh = Sh, Rh = al, wo = $r, Eo = wo && wo.isTypedArray, Yh = Eo ? Rh(Eo) : xh, ks = Yh, Fh = Gm, Vh = Os, Uh = It, jh = zn, Bh = Es, Hh = ks, Wh = Object.prototype, Gh = Wh.hasOwnProperty;
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
var sg = ag, og = kn, ig = $s;
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
var Og = Eg, $g = ba, kg = ys, Ng = Ds, Tg = 200;
function Ig(e, t) {
  var n = this.__data__;
  if (n instanceof $g) {
    var r = n.__data__;
    if (!kg || r.length < Tg - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new Ng(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
var Cg = Ig, Mg = ba, Pg = _g, Ag = yg, Lg = wg, Sg = Og, xg = Cg;
function rr(e) {
  var t = this.__data__ = new Mg(e);
  this.size = t.size;
}
rr.prototype.clear = Pg;
rr.prototype.delete = Ag;
rr.prototype.get = Lg;
rr.prototype.has = Sg;
rr.prototype.set = xg;
var Is = rr, Rg = "__lodash_hash_undefined__";
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
  var p = -1, v = !0, d = n & Qg ? new zg() : void 0;
  for (a.set(e, t), a.set(t, e); ++p < i; ) {
    var $ = e[p], g = t[p];
    if (r)
      var D = o ? r(g, $, p, t, e, a) : r($, g, p, e, t, a);
    if (D !== void 0) {
      if (D)
        continue;
      v = !1;
      break;
    }
    if (d) {
      if (!Xg(t, function(f, b) {
        if (!Zg(d, b) && ($ === f || s($, f, n, r, a)))
          return d.push(b);
      })) {
        v = !1;
        break;
      }
    } else if (!($ === g || s($, g, n, r, a))) {
      v = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), v;
}
var gl = e_, t_ = Ft, n_ = t_.Uint8Array, _l = n_;
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
var o_ = s_, Oo = ha, $o = _l, i_ = er, l_ = gl, u_ = a_, c_ = o_, d_ = 1, f_ = 2, v_ = "[object Boolean]", p_ = "[object Date]", m_ = "[object Error]", h_ = "[object Map]", g_ = "[object Number]", __ = "[object RegExp]", b_ = "[object Set]", y_ = "[object String]", D_ = "[object Symbol]", w_ = "[object ArrayBuffer]", E_ = "[object DataView]", ko = Oo ? Oo.prototype : void 0, Ma = ko ? ko.valueOf : void 0;
function O_(e, t, n, r, s, a, o) {
  switch (n) {
    case E_:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case w_:
      return !(e.byteLength != t.byteLength || !a(new $o(e), new $o(t)));
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
      if (Ma)
        return Ma.call(e) == Ma.call(t);
  }
  return !1;
}
var $_ = O_;
function k_(e, t) {
  for (var n = -1, r = t.length, s = e.length; ++n < r; )
    e[s + n] = t[n];
  return e;
}
var N_ = k_, T_ = N_, I_ = It;
function C_(e, t, n) {
  var r = t(e);
  return I_(e) ? r : T_(r, n(e));
}
var M_ = C_;
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
} : R_, U_ = V_, j_ = M_, B_ = U_, H_ = Ts;
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
  var d = a.get(e), $ = a.get(t);
  if (d && $)
    return d == t && $ == e;
  var g = !0;
  a.set(e, t), a.set(t, e);
  for (var D = o; ++p < l; ) {
    v = i[p];
    var f = e[v], b = t[v];
    if (r)
      var k = o ? r(b, f, v, t, e, a) : r(f, b, v, e, t, a);
    if (!(k === void 0 ? f === b || s(f, b, n, r, a) : k)) {
      g = !1;
      break;
    }
    D || (D = v == "constructor");
  }
  if (g && !D) {
    var _ = e.constructor, C = t.constructor;
    _ != C && "constructor" in e && "constructor" in t && !(typeof _ == "function" && _ instanceof _ && typeof C == "function" && C instanceof C) && (g = !1);
  }
  return a.delete(e), a.delete(t), g;
}
var Z_ = X_, J_ = Nn, Q_ = Ft, eb = J_(Q_, "DataView"), tb = eb, nb = Nn, rb = Ft, ab = nb(rb, "Promise"), sb = ab, ob = Nn, ib = Ft, lb = ob(ib, "Set"), ub = lb, cb = Nn, db = Ft, fb = cb(db, "WeakMap"), vb = fb, Ya = tb, Fa = ys, Va = sb, Ua = ub, ja = vb, bl = Vt, ar = sl, Io = "[object Map]", pb = "[object Object]", Co = "[object Promise]", Mo = "[object Set]", Po = "[object WeakMap]", Ao = "[object DataView]", mb = ar(Ya), hb = ar(Fa), gb = ar(Va), _b = ar(Ua), bb = ar(ja), _n = bl;
(Ya && _n(new Ya(new ArrayBuffer(1))) != Ao || Fa && _n(new Fa()) != Io || Va && _n(Va.resolve()) != Co || Ua && _n(new Ua()) != Mo || ja && _n(new ja()) != Po) && (_n = function(e) {
  var t = bl(e), n = t == pb ? e.constructor : void 0, r = n ? ar(n) : "";
  if (r)
    switch (r) {
      case mb:
        return Ao;
      case hb:
        return Io;
      case gb:
        return Co;
      case _b:
        return Mo;
      case bb:
        return Po;
    }
  return t;
});
var yb = _n, Pa = Is, Db = gl, wb = $_, Eb = Z_, Lo = yb, So = It, xo = zn, Ob = ks, $b = 1, Ro = "[object Arguments]", Yo = "[object Array]", Vr = "[object Object]", kb = Object.prototype, Fo = kb.hasOwnProperty;
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
    return a || (a = new Pa()), o || Ob(e) ? Db(e, t, n, r, s, a) : wb(e, t, l, n, r, s, a);
  if (!(n & $b)) {
    var d = c && Fo.call(e, "__wrapped__"), $ = p && Fo.call(t, "__wrapped__");
    if (d || $) {
      var g = d ? e.value() : e, D = $ ? t.value() : t;
      return a || (a = new Pa()), s(g, D, n, r, a);
    }
  }
  return v ? (a || (a = new Pa()), Eb(e, t, n, r, s, a)) : !1;
}
var Tb = Nb, Ib = Tb, Vo = Ct;
function yl(e, t, n, r, s) {
  return e === t ? !0 : e == null || t == null || !Vo(e) && !Vo(t) ? e !== e && t !== t : Ib(e, t, n, r, yl, s);
}
var Dl = yl, Cb = Is, Mb = Dl, Pb = 1, Ab = 2;
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
      var p = new Cb();
      if (r)
        var v = r(u, c, l, e, t, p);
      if (!(v === void 0 ? Mb(c, u, Pb | Ab, r, p) : v))
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
var zb = qb, Xb = ll, Zb = Os, Jb = It, Qb = Es, ey = $s, ty = Da;
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
var Ol = ny, ry = zb, ay = Ol;
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
var Cs = _y;
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
var Ey = wy, Oy = yy, $y = Ey, ky = bs, Ny = Da;
function Ty(e) {
  return ky(e) ? Oy(Ny(e)) : $y(e);
}
var Iy = Ty, Cy = Kb, My = gy, Py = Cs, Ay = It, Ly = Iy;
function Sy(e) {
  return typeof e == "function" ? e : e == null ? Py : typeof e == "object" ? Ay(e) ? My(e[0], e[1]) : Cy(e) : Ly(e);
}
var $l = Sy, xy = wa, Ry = ml, Yy = $l;
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
var Gy = Wy, Ky = Gy, jo = cl, qy = Cs, zy = jo ? function(e, t) {
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
var t1 = e1, n1 = Xy, r1 = t1, a1 = r1(n1), s1 = a1, o1 = Cs, i1 = Hy, l1 = s1;
function u1(e, t) {
  return l1(i1(e, t, o1), e + "");
}
var Ms = u1, c1 = er, d1 = Lr, f1 = Es, v1 = Zt;
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
var E1 = w1, O1 = vl, $1 = E1, k1 = Lr;
function N1(e) {
  return k1(e) ? O1(e, !0) : $1(e);
}
var As = N1, T1 = Ms, I1 = er, C1 = Ps, M1 = As, Nl = Object.prototype, P1 = Nl.hasOwnProperty, A1 = T1(function(e, t) {
  e = Object(e);
  var n = -1, r = t.length, s = r > 2 ? t[2] : void 0;
  for (s && C1(t[0], t[1], s) && (r = 1); ++n < r; )
    for (var a = t[n], o = M1(a), i = -1, l = o.length; ++i < l; ) {
      var u = o[i], c = e[u];
      (c === void 0 || I1(c, Nl[u]) && !P1.call(e, u)) && (e[u] = a[u]);
    }
  return e;
}), Bo = A1, L1 = wa, S1 = er;
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
  var n = Ft, r = t && !t.nodeType && t, s = r && !0 && e && !e.nodeType && e, a = s && s.exports === r, o = a ? n.Buffer : void 0, i = o ? o.allocUnsafe : void 0;
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
}(), K1 = G1, q1 = pl, z1 = q1(Object.getPrototypeOf, Object), Il = z1, X1 = K1, Z1 = Il, J1 = Ns;
function Q1(e) {
  return typeof e.constructor == "function" && !J1(e) ? X1(Z1(e)) : {};
}
var eD = Q1, tD = Lr, nD = Ct;
function rD(e) {
  return nD(e) && tD(e);
}
var aD = rD, sD = Vt, oD = Il, iD = Ct, lD = "[object Object]", uD = Function.prototype, cD = Object.prototype, Cl = uD.toString, dD = cD.hasOwnProperty, fD = Cl.call(Object);
function vD(e) {
  if (!iD(e) || sD(e) != lD)
    return !1;
  var t = oD(e);
  if (t === null)
    return !0;
  var n = dD.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && Cl.call(n) == fD;
}
var pD = vD;
function mD(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
var Ml = mD, hD = Rm, gD = wa;
function _D(e, t, n, r) {
  var s = !n;
  n || (n = {});
  for (var a = -1, o = t.length; ++a < o; ) {
    var i = t[a], l = r ? r(n[i], e[i], i, n, e) : void 0;
    l === void 0 && (l = e[i]), s ? gD(n, i, l) : hD(n, i, l);
  }
  return n;
}
var bD = _D, yD = bD, DD = As;
function wD(e) {
  return yD(e, DD(e));
}
var ED = wD, Go = Tl, OD = Jr, $D = j1, kD = H1, ND = eD, Ko = Os, qo = It, TD = aD, ID = zn, CD = kn, MD = Zt, PD = pD, AD = ks, zo = Ml, LD = ED;
function SD(e, t, n, r, s, a, o) {
  var i = zo(e, n), l = zo(t, n), u = o.get(l);
  if (u) {
    Go(e, n, u);
    return;
  }
  var c = a ? a(i, l, n + "", e, t, o) : void 0, p = c === void 0;
  if (p) {
    var v = qo(l), d = !v && ID(l), $ = !v && !d && AD(l);
    c = l, v || d || $ ? qo(i) ? c = i : TD(i) ? c = kD(i) : d ? (p = !1, c = OD(l, !0)) : $ ? (p = !1, c = $D(l, !0)) : c = [] : PD(l) || Ko(l) ? (c = i, Ko(i) ? c = LD(i) : (!MD(i) || CD(i)) && (c = ND(l))) : p = !1;
  }
  p && (o.set(l, c), s(c, l, r, a, o), o.delete(l)), Go(e, n, c);
}
var xD = SD, RD = Is, YD = Tl, FD = dl, VD = xD, UD = Zt, jD = As, BD = Ml;
function Pl(e, t, n, r, s) {
  e !== t && FD(t, function(a, o) {
    if (s || (s = new RD()), UD(a))
      VD(e, t, o, n, Pl, r, s);
    else {
      var i = r ? r(BD(e, o), a, o + "", e, t, s) : void 0;
      i === void 0 && (i = a), YD(e, o, i);
    }
  }, jD);
}
var Al = Pl, HD = Al, Xo = Zt;
function Ll(e, t, n, r, s, a) {
  return Xo(e) && Xo(t) && (a.set(t, e), HD(e, t, void 0, Ll, a), a.delete(t)), e;
}
var WD = Ll, GD = Ms, KD = Ps;
function qD(e) {
  return GD(function(t, n) {
    var r = -1, s = n.length, a = s > 1 ? n[s - 1] : void 0, o = s > 2 ? n[2] : void 0;
    for (a = e.length > 3 && typeof a == "function" ? (s--, a) : void 0, o && KD(n[0], n[1], o) && (a = s < 3 ? void 0 : a, s = 1), t = Object(t); ++r < s; ) {
      var i = n[r];
      i && e(t, i, r, a);
    }
    return t;
  });
}
var zD = qD, XD = Al, ZD = zD, JD = ZD(function(e, t, n, r) {
  XD(e, t, n, r);
}), QD = JD, e0 = kl, t0 = Ms, n0 = WD, r0 = QD, a0 = t0(function(e) {
  return e.push(void 0, n0), e0(r0, void 0, e);
}), kr = a0, s0 = Object.prototype, o0 = s0.hasOwnProperty;
function i0(e, t) {
  return e != null && o0.call(e, t);
}
var l0 = i0, u0 = l0, c0 = Ol;
function d0(e, t) {
  return e != null && c0(e, t, u0);
}
var Sl = d0, f0 = Lr;
function v0(e, t) {
  return function(n, r) {
    if (n == null)
      return n;
    if (!f0(n))
      return e(n, r);
    for (var s = n.length, a = t ? s : -1, o = Object(n); (t ? a-- : ++a < s) && r(o[a], a, o) !== !1; )
      ;
    return n;
  };
}
var p0 = v0, m0 = ml, h0 = p0, g0 = h0(m0), _0 = g0;
function b0(e) {
  return e && e.length ? e[0] : void 0;
}
var xl = b0;
function y0(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
var Yn = y0, D0 = _0;
function w0(e, t) {
  var n;
  return D0(e, function(r, s, a) {
    return n = t(r, s, a), !n;
  }), !!n;
}
var E0 = w0, O0 = hl, $0 = $l, k0 = E0, N0 = It, T0 = Ps;
function I0(e, t, n) {
  var r = N0(e) ? O0 : k0;
  return n && T0(e, t, n) && (t = void 0), r(e, $0(t));
}
var C0 = I0;
const M0 = (e) => Object.prototype.toString.call(e).slice(8, -1), Vn = (e) => jf(e) && !isNaN(e.getTime()), qt = (e) => M0(e) === "Object", Ls = Sl, Zo = (e, t) => C0(t, (n) => Sl(e, n)), Te = (e, t, n = "0") => {
  for (e = e != null ? String(e) : "", t = t || 2; e.length < t; )
    e = `${n}${e}`;
  return e;
}, bt = (e) => Array.isArray(e), Ht = (e) => bt(e) && e.length > 0, Qr = (e) => e == null ? e ?? null : document && St(e) ? document.querySelector(e) : e.$el ?? e, on = (e, t, n, r = void 0) => {
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
function P0(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
const ea = () => {
  function e() {
    return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
  }
  return `${e() + e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`;
}, A0 = ["base", "start", "end", "startEnd"], L0 = [
  "class",
  "wrapperClass",
  "contentClass",
  "style",
  "contentStyle",
  "color",
  "fillMode"
], S0 = { base: {}, start: {}, end: {} };
function Ss(e, t, n = S0) {
  let r = e, s = {};
  t === !0 || St(t) ? (r = St(t) ? t : r, s = { ...n }) : qt(t) && (Zo(t, A0) ? s = { ...t } : s = {
    base: { ...t },
    start: { ...t },
    end: { ...t }
  });
  const a = kr(
    s,
    { start: s.startEnd, end: s.startEnd },
    n
  );
  return Object.entries(a).forEach(([o, i]) => {
    let l = r;
    i === !0 || St(i) ? (l = St(i) ? i : l, a[o] = { color: l }) : qt(i) && (Zo(i, L0) ? a[o] = { ...i } : a[o] = {}), kr(a[o], { color: l });
  }), a;
}
class x0 {
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
class R0 extends xs {
  constructor() {
    super("content", "content");
  }
  normalizeConfig(t, n) {
    return Ss("base", n);
  }
}
class Y0 extends xs {
  constructor() {
    super("dot", "dots");
  }
}
class F0 extends xs {
  constructor() {
    super("bar", "bars");
  }
}
class V0 {
  constructor(t) {
    oe(this, "color"), oe(this, "renderers", [
      new R0(),
      new x0(),
      new Y0(),
      new F0()
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
const U0 = 300, j0 = 60, B0 = 80, H0 = {
  maxSwipeTime: U0,
  minHorizontalSwipeDistance: j0,
  maxVerticalSwipeDistance: B0
}, W0 = "MMMM YYYY", G0 = "W", K0 = "MMM", q0 = "h A", z0 = [
  "L",
  "YYYY-MM-DD",
  "YYYY/MM/DD"
], X0 = [
  "L h:mm A",
  "YYYY-MM-DD h:mm A",
  "YYYY/MM/DD h:mm A"
], Z0 = [
  "L HH:mm",
  "YYYY-MM-DD HH:mm",
  "YYYY/MM/DD HH:mm"
], J0 = [
  "h:mm A"
], Q0 = [
  "HH:mm"
], ew = "WWW, MMM D, YYYY", tw = [
  "L",
  "YYYY-MM-DD",
  "YYYY/MM/DD"
], nw = "iso", rw = "YYYY-MM-DDTHH:mm:ss.SSSZ", aw = {
  title: W0,
  weekdays: G0,
  navMonths: K0,
  hours: q0,
  input: z0,
  inputDateTime: X0,
  inputDateTime24hr: Z0,
  inputTime: J0,
  inputTime24hr: Q0,
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
  touch: H0,
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
}, Ba = os(ow), iw = M(() => Vy(Ba.locales, (e) => (e.masks = kr(e.masks, Ba.masks), e))), cn = (e) => typeof window < "u" && Ls(window.__vcalendar__, e) ? bn(window.__vcalendar__, e) : bn(Ba, e);
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
        var d = r[c[v].type];
        d >= 0 && (p[d] = parseInt(c[v].value, 10));
      }
      return p;
    } catch ($) {
      if ($ instanceof RangeError)
        return [NaN];
      throw $;
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
  function l(g, D, f) {
    var b, k;
    if (!g || (b = i.timezoneZ.exec(g), b))
      return 0;
    var _;
    if (b = i.timezoneHH.exec(g), b)
      return _ = parseInt(b[1], 10), v(_) ? -(_ * a) : NaN;
    if (b = i.timezoneHHMM.exec(g), b) {
      _ = parseInt(b[1], 10);
      var C = parseInt(b[2], 10);
      return v(_, C) ? (k = Math.abs(_) * a + C * o, _ > 0 ? -k : k) : NaN;
    }
    if ($(g)) {
      D = new Date(D || Date.now());
      var N = f ? D : u(D), x = c(N, g), P = f ? x : p(D, x, g);
      return -P;
    }
    return NaN;
  }
  function u(g) {
    return (0, r.default)(g.getFullYear(), g.getMonth(), g.getDate(), g.getHours(), g.getMinutes(), g.getSeconds(), g.getMilliseconds());
  }
  function c(g, D) {
    var f = (0, n.default)(g, D), b = (0, r.default)(f[0], f[1] - 1, f[2], f[3] % 24, f[4], f[5], 0).getTime(), k = g.getTime(), _ = k % 1e3;
    return k -= _ >= 0 ? _ : 1e3 + _, b - k;
  }
  function p(g, D, f) {
    var b = g.getTime(), k = b - D, _ = c(new Date(k), f);
    if (D === _)
      return D;
    k -= _ - D;
    var C = c(new Date(k), f);
    return _ === C ? _ : Math.max(_, C);
  }
  function v(g, D) {
    return -23 <= g && g <= 23 && (D == null || 0 <= D && D <= 59);
  }
  var d = {};
  function $(g) {
    if (d[g])
      return !0;
    try {
      return new Intl.DateTimeFormat(void 0, {
        timeZone: g
      }), d[g] = !0, !0;
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
    var Y = v(P), X = d(Y.date, j), K = X.year, U = X.restDateString, F = $(U, K);
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
  function d(P, A) {
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
  function $(P, A) {
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
      return C(A, K) ? (j.setUTCFullYear(A, 0, K), j) : /* @__PURE__ */ new Date(NaN);
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
  var f = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], b = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
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
      if (j && S > b[A] || !j && S > f[A])
        return !1;
    }
    return !0;
  }
  function C(P, A) {
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
function sr(e) {
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
  var c = Rs(), p = sr((n = (r = (s = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (o = t.locale) === null || o === void 0 || (i = o.options) === null || i === void 0 ? void 0 : i.weekStartsOn) !== null && s !== void 0 ? s : c.weekStartsOn) !== null && r !== void 0 ? r : (l = c.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(p >= 0 && p <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var v = Jt(e), d = v.getDay(), $ = (d < p ? 7 : 0) + d - p;
  return v.setDate(v.getDate() - $), v.setHours(0, 0, 0, 0), v;
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
  var c = Jt(e), p = c.getFullYear(), v = Rs(), d = sr((n = (r = (s = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (o = t.locale) === null || o === void 0 || (i = o.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && s !== void 0 ? s : v.firstWeekContainsDate) !== null && r !== void 0 ? r : (l = v.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(d >= 1 && d <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var $ = /* @__PURE__ */ new Date(0);
  $.setFullYear(p + 1, 0, d), $.setHours(0, 0, 0, 0);
  var g = En($, t), D = /* @__PURE__ */ new Date(0);
  D.setFullYear(p, 0, d), D.setHours(0, 0, 0, 0);
  var f = En(D, t);
  return c.getTime() >= g.getTime() ? p + 1 : c.getTime() >= f.getTime() ? p : p - 1;
}
function Ew(e, t) {
  var n, r, s, a, o, i, l, u;
  tt(1, arguments);
  var c = Rs(), p = sr((n = (r = (s = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (o = t.locale) === null || o === void 0 || (i = o.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && s !== void 0 ? s : c.firstWeekContainsDate) !== null && r !== void 0 ? r : (l = c.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), v = ww(e, t), d = /* @__PURE__ */ new Date(0);
  d.setFullYear(v, 0, p), d.setHours(0, 0, 0, 0);
  var $ = En(d, t);
  return $;
}
var Ow = 6048e5;
function $w(e, t) {
  tt(1, arguments);
  var n = Jt(e), r = En(n, t).getTime() - Ew(n, t).getTime();
  return Math.round(r / Ow) + 1;
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
function Iw(e) {
  tt(1, arguments);
  var t = Jt(e), n = la(t).getTime() - Nw(t).getTime();
  return Math.round(n / Tw) + 1;
}
function at(e, t) {
  tt(2, arguments);
  var n = Jt(e), r = sr(t);
  return isNaN(r) ? /* @__PURE__ */ new Date(NaN) : (r && n.setDate(n.getDate() + r), n);
}
function ua(e, t) {
  tt(2, arguments);
  var n = Jt(e), r = sr(t);
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
  var n = sr(t);
  return ua(e, n * 12);
}
var Mn = /* @__PURE__ */ ((e) => (e.Any = "any", e.All = "all", e))(Mn || {}), Fl = /* @__PURE__ */ ((e) => (e.Days = "days", e.Weeks = "weeks", e.Months = "months", e.Years = "years", e))(Fl || {}), Vl = /* @__PURE__ */ ((e) => (e.Days = "days", e.Weekdays = "weekdays", e.Weeks = "weeks", e.Months = "months", e.Years = "years", e))(Vl || {}), Ul = /* @__PURE__ */ ((e) => (e.OrdinalWeekdays = "ordinalWeekdays", e))(Ul || {});
class Cw {
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
class or {
  constructor(t, n, r, s) {
    oe(this, "components", []), this.type = t, this.validator = r, this.getter = s, this.components = this.normalizeComponents(n);
  }
  static create(t, n) {
    switch (t) {
      case "days":
        return new Mw(n);
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
    if (!bt(t))
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
class Mw extends or {
  constructor(t) {
    super(
      "days",
      t,
      Yw,
      ({ day: n, dayFromEnd: r }) => [n, -r]
    );
  }
}
class Pw extends or {
  constructor(t) {
    super(
      "weekdays",
      t,
      Ha,
      ({ weekday: n }) => [n]
    );
  }
}
class Aw extends or {
  constructor(t) {
    super(
      "weeks",
      t,
      Fw,
      ({ week: n, weekFromEnd: r }) => [n, -r]
    );
  }
}
class Lw extends or {
  constructor(t) {
    super("months", t, Vw, ({ month: n }) => [
      n
    ]);
  }
}
class Sw extends or {
  constructor(t) {
    super("years", t, Tt, ({ year: n }) => [n]);
  }
}
class xw {
  constructor(t, n) {
    oe(this, "components"), this.type = t, this.components = this.normalizeComponents(n);
  }
  normalizeArrayConfig(t) {
    const n = [];
    return t.forEach((r, s) => {
      if (Tt(r)) {
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
        bt(r) && n.push(...this.normalizeArrayConfig(r));
    }), n;
  }
  normalizeComponents(t) {
    const n = [];
    return t.forEach((r, s) => {
      if (Tt(r)) {
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
        bt(r) && n.push(...this.normalizeArrayConfig(r));
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
    oe(this, "validated", !0), oe(this, "config"), oe(this, "type", Mn.Any), oe(this, "from"), oe(this, "until"), oe(this, "rules", []), oe(this, "locale", new fa()), this.parent = r, n.locale && (this.locale = n.locale), this.config = t, kn(t) ? (this.type = Mn.All, this.rules = [new Rw(t)]) : bt(t) ? (this.type = Mn.Any, this.rules = t.map((s) => new ca(s, n, this))) : qt(t) ? (this.type = Mn.All, this.from = t.from ? this.locale.getDateParts(t.from) : r == null ? void 0 : r.from, this.until = t.until ? this.locale.getDateParts(t.until) : r == null ? void 0 : r.until, this.rules = this.getObjectRules(t)) : (console.error("Rule group configuration must be an object or an array."), this.validated = !1);
  }
  getObjectRules(t) {
    const n = [];
    if (t.every && (St(t.every) && (t.every = [1, `${t.every}s`]), bt(t.every))) {
      const [r = 1, s = Fl.Days] = t.every;
      n.push(new Cw(s, r, this.from));
    }
    return Object.values(Vl).forEach((r) => {
      r in t && n.push(or.create(r, t[r]));
    }), Object.values(Ul).forEach((r) => {
      r in t && n.push(new xw(r, t[r]));
    }), t.on != null && (bt(t.on) || (t.on = [t.on]), n.push(
      new ca(t.on, { locale: this.locale }, this.parent)
    )), n;
  }
  passes(t) {
    return this.validated ? this.from && t.dayIndex <= this.from.dayIndex || this.until && t.dayIndex >= this.until.dayIndex ? !1 : this.type === Mn.Any ? this.rules.some((n) => n.passes(t)) : this.rules.every((n) => n.passes(t)) : !0;
  }
}
function Yw(e) {
  return Tt(e) ? e >= 1 && e <= 31 : !1;
}
function Ha(e) {
  return Tt(e) ? e >= 1 && e <= 7 : !1;
}
function Fw(e) {
  return Tt(e) ? e >= -6 && e <= -1 || e >= 1 && e <= 6 : !1;
}
function Vw(e) {
  return Tt(e) ? e >= 1 && e <= 12 : !1;
}
function ei(e) {
  return !(!Tt(e) || e < -5 || e > 5 || e === 0);
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
}, Je = 7, jw = 6, jl = 1e3, Bl = jl * 60, Hl = Bl * 60, Kr = Hl * 24, Bw = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Hw = ["L", "iso"], mr = {
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
}, tn = /\d\d?/, Gw = /\d{3}/, Kw = /\d{4}/, fr = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF/]+(\s*?[\u0600-\u06FF]+){1,2}/i, ni = () => {
}, ri = (e) => (t, n, r) => {
  const s = r[e].indexOf(
    n.charAt(0).toUpperCase() + n.substr(1).toLowerCase()
  );
  ~s && (t.month = s);
}, Me = {
  D: [
    tn,
    (e, t) => {
      e.day = t;
    }
  ],
  Do: [
    new RegExp(tn.source + fr.source),
    (e, t) => {
      e.day = parseInt(t, 10);
    }
  ],
  d: [tn, ni],
  W: [fr, ni],
  M: [
    tn,
    (e, t) => {
      e.month = t - 1;
    }
  ],
  MMM: [fr, ri("monthNamesShort")],
  MMMM: [fr, ri("monthNames")],
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
    fr,
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
function Gl(e, t) {
  return (Ht(e) && e || [
    St(e) && e || "YYYY-MM-DD"
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
  const r = n.getMilliseconds(), s = n.getSeconds(), a = n.getMinutes(), o = n.getHours(), i = r + s * jl + a * Bl + o * Hl, l = n.getMonth() + 1, u = n.getFullYear(), c = t.getMonthParts(l, u), p = n.getDate(), v = c.numDays - p + 1, d = n.getDay() + 1, $ = Math.floor((p - 1) / 7 + 1), g = Math.floor((c.numDays - p) / 7 + 1), D = Math.ceil(
    (p + Math.abs(c.firstWeekday - c.firstDayOfWeek)) / 7
  ), f = c.numWeeks - D + 1, b = c.weeknumbers[D], k = ql(u, l, p);
  return {
    milliseconds: r,
    seconds: s,
    minutes: a,
    hours: o,
    time: i,
    day: p,
    dayFromEnd: v,
    weekday: d,
    weekdayOrdinal: $,
    weekdayOrdinalFromEnd: g,
    week: D,
    weekFromEnd: f,
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
    u.push($w(v, { weekStartsOn: i })), c.push(Iw(v));
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
  return Tt(t) ? t === e : bt(t) ? t.includes(e) : kn(t) ? t(e, n) : !(t.min != null && t.min > e || t.max != null && t.max < e || t.interval != null && e % t.interval !== 0);
}
function hr(e, t, n) {
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
    milliseconds: hr(
      e,
      mr.milliseconds,
      t.milliseconds
    ),
    seconds: hr(e, mr.seconds, t.seconds),
    minutes: hr(e, mr.minutes, t.minutes),
    hours: hr(e, mr.hours, t.hours)
  };
}
function aE(e, t, n, r) {
  const a = hr(e, t, r).reduce((o, i) => {
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
    const a = mr[r], o = e[r];
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
      if (Me[c]) {
        const p = Me[c], v = a.search(p[0]);
        ~v ? a.replace(p[0], (d) => (p[1](i, d, n), a = a.substr(v + d.length), d)) : o = !1;
      }
      return Me[c] ? "" : c.slice(1, c.length - 1);
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
  let v = !0, d = !1, $ = !1, g = 0;
  const D = new Intl.DateTimeFormat(r.id, {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric"
  });
  let f = t.numDays - p + 1, b = t.numDays - f + 1, k = Math.floor((f - 1) / Je + 1), _ = 1, C = t.numWeeks, N = 1, x = t.month, P = t.year;
  const A = /* @__PURE__ */ new Date(), S = A.getDate(), j = A.getMonth() + 1, Y = A.getFullYear();
  for (let X = 1; X <= jw; X++) {
    for (let K = 1, U = a; K <= Je; K++, U += U === Je ? 1 - Je : 1) {
      v && U === o && (f = 1, b = e.numDays, k = Math.floor((f - 1) / Je + 1), _ = Math.floor((u - f) / Je + 1), C = 1, N = c, x = e.month, P = e.year, v = !1, d = !0);
      const F = r.getDateFromParams(P, x, f, 0, 0, 0, 0), Q = r.getDateFromParams(P, x, f, 12, 0, 0, 0), W = r.getDateFromParams(
        P,
        x,
        f,
        23,
        59,
        59,
        999
      ), V = F, w = `${Te(P, 4)}-${Te(x, 2)}-${Te(f, 2)}`, q = K, pe = Je - K, Ee = l[X - 1], ee = i[X - 1], De = f === S && x === j && P === Y, he = d && f === 1, Ie = d && f === u, Oe = X === 1, be = X === c, Ye = K === 1, Re = K === Je, ze = ql(P, x, f);
      s.push({
        locale: r,
        id: w,
        position: ++g,
        label: f.toString(),
        ariaLabel: D.format(new Date(P, x - 1, f)),
        day: f,
        dayFromEnd: b,
        weekday: U,
        weekdayPosition: q,
        weekdayPositionFromEnd: pe,
        weekdayOrdinal: k,
        weekdayOrdinalFromEnd: _,
        week: C,
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
        isLastDay: Ie,
        isDisabled: !d,
        isFocusable: !d,
        isFocused: !1,
        inMonth: d,
        inPrevMonth: v,
        inNextMonth: $,
        onTop: Oe,
        onBottom: be,
        onLeft: Ye,
        onRight: Re,
        classes: [
          `id-${w}`,
          `day-${f}`,
          `day-from-end-${b}`,
          `weekday-${U}`,
          `weekday-position-${q}`,
          `weekday-ordinal-${k}`,
          `weekday-ordinal-from-end-${_}`,
          `week-${C}`,
          `week-from-end-${N}`,
          {
            "is-today": De,
            "is-first-day": he,
            "is-last-day": Ie,
            "in-month": d,
            "in-prev-month": v,
            "in-next-month": $,
            "on-top": Oe,
            "on-bottom": be,
            "on-left": Ye,
            "on-right": Re
          }
        ]
      }), d && Ie ? (d = !1, $ = !0, f = 1, b = u, k = 1, _ = Math.floor((u - f) / Je + 1), C = 1, N = n.numWeeks, x = n.month, P = n.year) : (f++, b--, k = Math.floor((f - 1) / Je + 1), _ = Math.floor((u - f) / Je + 1));
    }
    C++, N--;
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
function xt(e) {
  return e != null && e.month != null && e.year != null;
}
function Wa(e, t) {
  return !xt(e) || !xt(t) ? !1 : (e = e, t = t, e.year !== t.year ? e.year < t.year : e.month && t.month && e.month !== t.month ? e.month < t.month : e.week && t.week && e.week !== t.week ? e.week < t.week : e.day && t.day && e.day !== t.day ? e.day < t.day : !1);
}
function da(e, t) {
  return !xt(e) || !xt(t) ? !1 : (e = e, t = t, e.year !== t.year ? e.year > t.year : e.month && t.month && e.month !== t.month ? e.month > t.month : e.week && t.week && e.week !== t.week ? e.week > t.week : e.day && t.day && e.day !== t.day ? e.day > t.day : !1);
}
function eu(e, t, n) {
  return (e || !1) && !Wa(e, t) && !da(e, n);
}
function dE(e, t) {
  return !e && t || e && !t ? !1 : !e && !t ? !0 : (e = e, t = t, e.year === t.year && e.month === t.month && e.week === t.week && e.day === t.day);
}
function fE(e, t, n, r) {
  if (!xt(e) || !xt(t))
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
    return (bt(t) ? t : [t]).filter((r) => r).map((r) => Un.from(r, n));
  }
  static from(t, n) {
    if (t instanceof Un)
      return t;
    const r = {
      start: null,
      end: null
    };
    return t != null && (bt(t) ? (r.start = t[0] ?? null, r.end = t[1] ?? null) : qt(t) ? Object.assign(r, t) : (r.start = t, r.end = t)), r.start != null && (r.start = new Date(r.start)), r.end != null && (r.end = new Date(r.end)), new Un(r, n);
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
      var v, d;
      if (n.startsOnDay(p)) {
        const $ = n.daySpan < 1 / 0 ? n.daySpan : 1;
        l = {
          startDay: p.dayIndex,
          startTime: ((v = n.start) == null ? void 0 : v.time) ?? 0,
          endDay: p.dayIndex + $ - 1,
          endTime: ((d = n.end) == null ? void 0 : d.time) ?? Kr
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
        const l = s === i.startDay, u = s === i.endDay, c = l ? i.startTime : 0, p = new Date(t.startDate.getTime() + c), v = u ? i.endTime : Kr, d = new Date(t.endDate.getTime() + v), $ = c === 0 && v === Kr, g = a.order || 0;
        r.push({
          ...i,
          data: a,
          onStart: l,
          onEnd: u,
          startTime: c,
          startDate: p,
          endTime: v,
          endDate: d,
          allDay: $,
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
  St(e) ? r = e : Ls(e, "id") && (r = e.id), r = (r || n).toLowerCase();
  const s = Object.keys(t), a = (l) => s.find((u) => u.toLowerCase() === l);
  r = a(r) || a(r.substring(0, 2)) || n;
  const o = {
    ...t["en-IE"],
    ...t[r],
    id: r,
    monthCacheSize: hE,
    pageCacheSize: gE
  };
  return qt(e) ? kr(e, o) : o;
}
class fa {
  constructor(t = void 0, n) {
    oe(this, "id"), oe(this, "daysInWeek"), oe(this, "firstDayOfWeek"), oe(this, "masks"), oe(this, "timezone"), oe(this, "hourLabels"), oe(this, "dayNames"), oe(this, "dayNamesShort"), oe(this, "dayNamesShorter"), oe(this, "dayNamesNarrow"), oe(this, "monthNames"), oe(this, "monthNamesShort"), oe(this, "relativeTimeNames"), oe(this, "amPm", ["am", "pm"]), oe(this, "monthCache"), oe(this, "pageCache");
    const { id: r, firstDayOfWeek: s, masks: a, monthCacheSize: o, pageCacheSize: i } = _E(t, iw.value);
    this.monthCache = new ii(
      o,
      Zw,
      Jw
    ), this.pageCache = new ii(i, tu, vE), this.id = r, this.daysInWeek = Je, this.firstDayOfWeek = P0(s, 1, Je), this.masks = a, this.timezone = n || void 0, this.hourLabels = this.getHourLabels(), this.dayNames = Aa("long", this.id), this.dayNamesShort = Aa("short", this.id), this.dayNamesShorter = this.dayNamesShort.map((l) => l.substring(0, 2)), this.dayNamesNarrow = Aa("narrow", this.id), this.monthNames = si("long", this.id), this.monthNamesShort = si("short", this.id), this.relativeTimeNames = tE(this.id);
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
    if (Tt(t) ? (n.type = "number", s = /* @__PURE__ */ new Date(+t)) : St(t) ? (n.type = "string", s = t ? oi(t, o || "iso", this) : r) : Vn(t) ? (n.type = "date", s = new Date(t.getTime())) : Kl(t) && (n.type = "object", s = this.getDateFromParts(t)), s && (i || l)) {
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
    this.key || (this.key = ea()), this.locale = r, n.normalizeGlyphs(this), this.ranges = r.ranges(s ?? []), this.hasRanges = !!Ht(this.ranges), this.maxRepeatSpan = this.ranges.filter((a) => a.hasRepeat).map((a) => a.daySpan).reduce((a, o) => Math.max(a, o), 0);
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
    default: () => cn("color")
  },
  isDark: {
    type: [Boolean, String, Object],
    default: () => cn("isDark")
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
  const t = M(() => e.color ?? ""), n = M(() => e.isDark ?? !1), { displayMode: r } = Vd(n), s = M(() => new V0(t.value)), a = M(() => {
    if (e.locale instanceof fa)
      return e.locale;
    const c = qt(e.locale) ? e.locale : {
      id: e.locale,
      firstDayOfWeek: e.firstDayOfWeek,
      masks: e.masks
    };
    return new fa(c, e.timezone);
  }), o = M(() => a.value.masks), i = M(() => {
    const c = e.disabledDates ?? [];
    return e.minDate != null && c.push({
      start: null,
      end: at(a.value.toDate(e.minDate), -1)
    }), e.maxDate != null && c.push({
      start: at(a.value.toDate(e.maxDate), 1),
      end: null
    }), a.value.ranges(c);
  }), l = M(() => new nu(
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
  return vn(ru, su(e));
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
    const v = p.changedTouches[0], d = v.screenX - a, $ = v.screenY - o;
    if ((/* @__PURE__ */ new Date()).getTime() - i < n && Math.abs(d) >= r && Math.abs($) <= s) {
      const D = { toLeft: !1, toRight: !1 };
      d < 0 ? D.toLeft = !0 : D.toRight = !0, t(D);
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
    default: () => cn("titlePosition")
  },
  navVisibility: {
    type: String,
    default: () => cn("navVisibility")
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
}, OE = [
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
function $E(e, { emit: t, slots: n }) {
  const r = ne(null), s = ne(null), a = ne(null), o = ne((/* @__PURE__ */ new Date()).getDate()), i = ne(!1), l = ne(ea()), u = ne(ea()), c = ne(e.view), p = ne([]), v = ne("");
  let d = null, $ = null;
  const {
    theme: g,
    color: D,
    displayMode: f,
    locale: b,
    masks: k,
    disabledAttribute: _,
    disabledDates: C
  } = bE(e), N = M(() => e.rows * e.columns), x = M(() => e.step || N.value), P = M(() => xl(p.value) ?? null), A = M(() => Yn(p.value) ?? null), S = M(
    () => e.minPage || (e.minDate ? q(e.minDate) : null)
  ), j = M(
    () => e.maxPage || (e.maxDate ? q(e.maxDate) : null)
  ), Y = M(() => e.navVisibility), X = M(() => !!e.showWeeknumbers), K = M(() => !!e.showIsoWeeknumbers), U = M(() => c.value === "monthly"), F = M(() => c.value === "weekly"), Q = M(() => c.value === "daily"), W = () => {
    i.value = !0, t("transition-start");
  }, V = () => {
    i.value = !1, t("transition-end"), d && (d.resolve(!0), d = null);
  }, w = (B, z, de = c.value) => Ql(B, z, de, b.value), q = (B) => Jl(B, c.value, b.value), pe = (B) => {
    !_.value || !Oe.value || (B.isDisabled = Oe.value.cellExists(
      _.value.key,
      B.dayIndex
    ));
  }, Ee = (B) => {
    B.isFocusable = B.inMonth && B.day === o.value;
  }, ee = (B, z) => {
    for (const de of B)
      for (const T of de.days)
        if (z(T) === !1)
          return;
  }, De = M(
    () => p.value.reduce((B, z) => (B.push(...z.viewDays), B), [])
  ), he = M(() => {
    const B = [];
    return (e.attributes || []).forEach((z, de) => {
      if (!z || !z.dates)
        return;
      const T = Ls(z, "key") ? z.key : de, G = z.order || 0;
      B.push(
        new nu(
          {
            ...z,
            key: T,
            order: G
          },
          g.value,
          b.value
        )
      );
    }), _.value && B.push(_.value), B;
  }), Ie = M(() => Ht(he.value)), Oe = M(() => {
    const B = new mE();
    return he.value.forEach((z) => {
      z.ranges.forEach((de) => {
        B.render(z, de, De.value);
      });
    }), B;
  }), be = M(() => De.value.reduce((B, z) => (B[z.dayIndex] = { day: z, cells: [] }, B[z.dayIndex].cells.push(...Oe.value.getCells(z)), B), {})), Ye = (B, z) => {
    const de = e.showWeeknumbers || e.showIsoWeeknumbers;
    return de == null ? "" : Nf(de) ? de ? "left" : "" : de.startsWith("right") ? z > 1 ? "right" : de : B > 1 ? "left" : de;
  }, Re = () => {
    var B, z;
    if (!Ie.value)
      return null;
    const de = he.value.find((ue) => ue.pinPage) || he.value[0];
    if (!de || !de.hasRanges)
      return null;
    const [T] = de.ranges, G = ((B = T.start) == null ? void 0 : B.date) || ((z = T.end) == null ? void 0 : z.date);
    return G ? q(G) : null;
  }, ze = () => {
    if (xt(P.value))
      return P.value;
    const B = Re();
    return xt(B) ? B : q(/* @__PURE__ */ new Date());
  }, y = (B, z = {}) => {
    const { view: de = c.value, position: T = 1, force: G } = z, ue = T > 0 ? 1 - T : -(N.value + T);
    let we = w(B, ue, de), We = w(we, N.value - 1, de);
    return G || (Wa(we, S.value) ? we = S.value : da(We, j.value) && (we = w(j.value, 1 - N.value)), We = w(we, N.value - 1)), { fromPage: we, toPage: We };
  }, m = (B, z, de = "") => {
    if (de === "none" || de === "fade")
      return de;
    if ((B == null ? void 0 : B.view) !== (z == null ? void 0 : z.view))
      return "fade";
    const T = da(z, B), G = Wa(z, B);
    return !T && !G ? "fade" : de === "slide-v" ? G ? "slide-down" : "slide-up" : G ? "slide-right" : "slide-left";
  }, L = (B = {}) => new Promise((z, de) => {
    const { position: T = 1, force: G = !1, transition: ue } = B, we = xt(B.page) ? B.page : ze(), { fromPage: We } = y(we, {
      position: T,
      force: G
    }), Ot = [];
    for (let st = 0; st < N.value; st++) {
      const Cn = w(We, st), lr = st + 1, xr = Math.ceil(lr / e.columns), pt = e.rows - xr + 1, Rr = lr % e.columns || e.columns, ur = e.columns - Rr + 1, Ta = Ye(Rr, ur);
      Ot.push(
        b.value.getPage({
          ...Cn,
          view: c.value,
          titlePosition: e.titlePosition,
          trimWeeks: e.trimWeeks,
          position: lr,
          row: xr,
          rowFromEnd: pt,
          column: Rr,
          columnFromEnd: ur,
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
    ), p.value = Ot, v.value && v.value !== "none" ? d = {
      resolve: z,
      reject: de
    } : z(!0);
  }), Z = (B) => {
    const z = P.value ?? q(/* @__PURE__ */ new Date());
    return w(z, B);
  }, ie = (B, z = {}) => {
    const de = xt(B) ? B : q(B);
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
  }, ge = (B, z = {}) => ie(Z(B), z), Ze = M(() => ge(-x.value)), Ue = M(() => ge(x.value)), vt = async (B, z = {}) => !z.force && !ie(B, z) ? !1 : (z.fromPage && !dE(z.fromPage, P.value) && (s.value && s.value.hide({ hideDelay: 0 }), z.view && (DE("view", 10), c.value = z.view), await L({
    ...z,
    page: z.fromPage,
    position: 1,
    force: !0
  }), t("did-move", p.value)), !0), Mt = (B, z = {}) => vt(Z(B), z), Ne = () => Mt(-x.value), R = () => Mt(x.value), H = (B) => {
    const z = U.value ? ".in-month" : "", de = `.id-${b.value.getDayId(B)}${z}`, T = `${de}.vc-focusable, ${de} .vc-focusable`, G = r.value;
    if (G) {
      const ue = G.querySelector(T);
      if (ue)
        return ue.focus(), !0;
    }
    return !1;
  }, Fe = async (B, z = {}) => H(B) ? !0 : (await vt(B, z), H(B)), Ve = (B, z) => {
    o.value = B.day, t("dayclick", B, z);
  }, Pt = (B, z) => {
    t("daymouseenter", B, z);
  }, en = (B, z) => {
    t("daymouseleave", B, z);
  }, wt = (B, z) => {
    o.value = B.day, a.value = B, B.isFocused = !0, t("dayfocusin", B, z);
  }, Et = (B, z) => {
    a.value = null, B.isFocused = !1, t("dayfocusout", B, z);
  }, gn = (B, z) => {
    t("daykeydown", B, z);
    const de = B.noonDate;
    let T = null;
    switch (z.key) {
      case "ArrowLeft": {
        T = at(de, -1);
        break;
      }
      case "ArrowRight": {
        T = at(de, 1);
        break;
      }
      case "ArrowUp": {
        T = at(de, -7);
        break;
      }
      case "ArrowDown": {
        T = at(de, 7);
        break;
      }
      case "Home": {
        T = at(de, -B.weekdayPosition + 1);
        break;
      }
      case "End": {
        T = at(de, B.weekdayPositionFromEnd);
        break;
      }
      case "PageUp": {
        z.altKey ? T = Qo(de, -1) : T = ua(de, -1);
        break;
      }
      case "PageDown": {
        z.altKey ? T = Qo(de, 1) : T = ua(de, 1);
        break;
      }
    }
    T && (z.preventDefault(), Fe(T).catch());
  }, In = (B) => {
    const z = a.value;
    z != null && gn(z, B);
  }, Na = (B, z) => {
    t("weeknumberclick", B, z);
  };
  L({
    page: e.initialPage,
    position: e.initialPagePosition
  }), fn(() => {
    !e.disablePageSwipe && r.value && ($ = yE(
      r.value,
      ({ toLeft: B = !1, toRight: z = !1 }) => {
        B ? R() : z && Ne();
      },
      cn("touch")
    ));
  }), Ir(() => {
    p.value = [], $ && $();
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
    displayMode: f,
    locale: b,
    masks: k,
    attributes: he,
    disabledAttribute: _,
    disabledDates: C,
    attributeContext: Oe,
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
    moveBy: Mt,
    movePrev: Ne,
    moveNext: R,
    onTransitionBeforeEnter: W,
    onTransitionAfterEnter: V,
    tryFocusDate: H,
    focusDate: Fe,
    onKeydown: In,
    onDayKeydown: gn,
    onDayClick: Ve,
    onDayMouseenter: Pt,
    onDayMouseleave: en,
    onDayFocusin: wt,
    onDayFocusout: Et,
    onWeeknumberClick: Na
  };
  return Bn(ou, Sr), Sr;
}
function Tn() {
  const e = vn(ou);
  if (e)
    return e;
  throw new Error(
    "Calendar context missing. Please verify this component is nested within a valid context provider."
  );
}
const kE = {
  inheritAttrs: !1
}, jn = /* @__PURE__ */ Ae({
  ...kE,
  __name: "CalendarSlot",
  props: {
    name: null
  },
  setup(e) {
    const { slots: t } = Tn();
    return (n, r) => h(t)[e.name] ? (O(), Ke(Ui(h(t)[e.name]), ji(Cr({ key: 0 }, n.$attrs)), null, 16)) : Gt(n.$slots, "default", { key: 1 });
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
  const l = ($) => {
    n && (iu({
      ...e,
      target: e.target || $.currentTarget
    }), $.stopPropagation());
  }, u = ($) => {
    o || (o = !0, (r || s) && Ga({
      ...e,
      target: e.target || $.currentTarget
    }));
  }, c = () => {
    o && (o = !1, (r || s && !i) && va(e));
  }, p = ($) => {
    i || (i = !0, (a || s) && Ga({
      ...e,
      target: e.target || $.currentTarget
    }));
  }, v = ($) => {
    i && !Wr($.currentTarget, $.relatedTarget) && (i = !1, (a || s && !o) && va(e));
  }, d = {};
  switch (e.visibility) {
    case "click":
      d.click = l;
      break;
    case "hover":
      d.mousemove = u, d.mouseleave = c;
      break;
    case "focus":
      d.focusin = p, d.focusout = v;
      break;
    case "hover-focus":
      d.mousemove = u, d.mouseleave = c, d.focusin = p, d.focusout = v;
      break;
  }
  return d;
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
}, IE = ["disabled"], cu = /* @__PURE__ */ Ae({
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
    } = Tn(), l = M(() => {
      switch (t.page.titlePosition) {
        case "left":
          return "bottom-start";
        case "right":
          return "bottom-end";
        default:
          return "bottom";
      }
    }), u = M(() => {
      const { page: g } = t;
      return {
        id: n.value,
        visibility: r.value,
        placement: l.value,
        modifiers: [{ name: "flip", options: { fallbackPlacements: ["bottom"] } }],
        data: { page: g },
        isInteractive: !0
      };
    }), c = M(() => t.page.titlePosition.includes("left")), p = M(() => t.page.titlePosition.includes("right")), v = M(() => t.layout ? t.layout : c.value ? "tu-pn" : p.value ? "pn-tu" : "p-tu-n;"), d = M(() => ({
      prev: v.value.includes("p") && !t.hideArrows,
      title: v.value.includes("t") && !t.hideTitle,
      next: v.value.includes("n") && !t.hideArrows
    })), $ = M(() => ({ gridTemplateColumns: v.value.split("").map((D) => {
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
    return (g, D) => (O(), I("div", {
      class: He(["vc-header", { "is-lg": e.isLg, "is-xl": e.isXl, "is-2xl": e.is2xl }]),
      style: gr(h($))
    }, [
      h(d).prev ? (O(), I("button", {
        key: 0,
        type: "button",
        class: "vc-arrow vc-prev vc-focus",
        disabled: !h(s),
        onClick: D[0] || (D[0] = //@ts-ignore
        (...f) => h(a) && h(a)(...f)),
        onKeydown: D[1] || (D[1] = Zs(
          //@ts-ignore
          (...f) => h(a) && h(a)(...f),
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
      h(d).title ? Ce((O(), I("button", TE, [
        ve(jn, {
          name: "header-title",
          title: e.page.title
        }, {
          default: qe(() => [
            E("span", null, le(e.page.title), 1)
          ]),
          _: 1
        }, 8, ["title"])
      ])), [
        [h(uu), h(u)]
      ]) : J("", !0),
      h(d).next ? (O(), I("button", {
        key: 2,
        type: "button",
        class: "vc-arrow vc-next vc-focus",
        disabled: !h(o),
        onClick: D[2] || (D[2] = //@ts-ignore
        (...f) => h(i) && h(i)(...f)),
        onKeydown: D[3] || (D[3] = Zs(
          //@ts-ignore
          (...f) => h(i) && h(i)(...f),
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
      ], 40, IE)) : J("", !0)
    ], 6));
  }
}), CE = Ae({
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
    } = Tn(), v = M(() => e.day), d = M(() => r.value.getCells(v.value)), $ = M(
      () => d.value.map((U) => U.data)
    ), g = M(() => ({
      ...v.value,
      attributes: $.value,
      attributeCells: d.value
    }));
    function D({ data: U }, { popovers: F }) {
      const { key: Q, customData: W, popover: V } = U;
      if (!V)
        return;
      const w = Bo(
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
      F.splice(0, 0, w);
    }
    const f = M(() => {
      const U = {
        ...n.value.prepareRender({}),
        popovers: []
      };
      return d.value.forEach((F) => {
        n.value.render(F, U), D(F, U);
      }), U;
    }), b = M(() => f.value.highlights), k = M(() => !!Ht(b.value)), _ = M(() => f.value.content), C = M(() => f.value.dots), N = M(() => !!Ht(C.value)), x = M(() => f.value.bars), P = M(() => !!Ht(x.value)), A = M(() => f.value.popovers), S = M(
      () => A.value.map((U) => U.attribute)
    ), j = M(() => [
      "vc-day",
      ...v.value.classes,
      { "vc-day-box-center-center": !a["day-content"] },
      { "is-not-in-month": !e.day.inMonth }
    ]), Y = M(() => {
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
    }), X = M(() => ({
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
    })), K = M(() => Ht(A.value) ? Bo(
      {
        id: s.value,
        data: { day: v, attributes: S.value }
      },
      ...A.value
    ) : null);
    return {
      attributes: $,
      attributeCells: d,
      bars: x,
      dayClasses: j,
      dayContentProps: Y,
      dayContentEvents: X,
      dayPopover: K,
      glyphs: f,
      dots: C,
      hasDots: N,
      hasBars: P,
      highlights: b,
      hasHighlights: k,
      locale: t,
      popovers: A
    };
  }
}), ME = {
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
  const o = Bt("CalendarSlot"), i = Uu("popover");
  return O(), I("div", {
    class: He(e.dayClasses)
  }, [
    e.hasHighlights ? (O(), I("div", ME, [
      (O(!0), I(te, null, me(e.highlights, ({ key: l, wrapperClass: u, class: c, style: p }) => (O(), I("div", {
        key: l,
        class: He(u)
      }, [
        E("div", {
          class: He(c),
          style: gr(p)
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
        Ce((O(), I("div", Cr(e.dayContentProps, ju(e.dayContentEvents, !0)), [
          Mr(le(e.day.label), 1)
        ], 16)), [
          [i, e.dayPopover]
        ])
      ]),
      _: 1
    }, 8, ["day", "attributes", "attribute-cells", "dayProps", "dayEvents", "locale"]),
    e.hasDots ? (O(), I("div", PE, [
      E("div", AE, [
        (O(!0), I(te, null, me(e.dots, ({ key: l, class: u, style: c }) => (O(), I("span", {
          key: l,
          class: He(u),
          style: gr(c)
        }, null, 6))), 128))
      ])
    ])) : J("", !0),
    e.hasBars ? (O(), I("div", LE, [
      E("div", SE, [
        (O(!0), I(te, null, me(e.bars, ({ key: l, class: u, style: c }) => (O(), I("span", {
          key: l,
          class: He(u),
          style: gr(c)
        }, null, 6))), 128))
      ])
    ])) : J("", !0)
  ], 2);
}
const RE = /* @__PURE__ */ Xt(CE, [["render", xE]]), YE = {
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
  const o = Bt("CalendarHeader"), i = Bt("CalendarDay");
  return O(), I("div", {
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
    E("div", {
      class: He(["vc-weeks", {
        [`vc-show-weeknumbers-${n.page.weeknumberPosition}`]: n.page.weeknumberPosition
      }])
    }, [
      E("div", FE, [
        (O(!0), I(te, null, me(n.page.weekdays, ({ weekday: l, label: u }, c) => (O(), I("div", {
          key: c,
          class: He(`vc-weekday vc-weekday-${l}`)
        }, le(u), 3))), 128))
      ]),
      (O(!0), I(te, null, me(n.page.viewWeeks, (l) => (O(), I("div", {
        key: `weeknumber-${l.weeknumber}`,
        class: "vc-week"
      }, [
        n.page.weeknumberPosition ? (O(), I("div", {
          key: 0,
          class: He(["vc-weeknumber", `is-${n.page.weeknumberPosition}`])
        }, [
          E("span", {
            class: He(["vc-weeknumber-content"]),
            onClick: (u) => r.onWeeknumberClick(l, u)
          }, le(l.weeknumberDisplay), 9, VE)
        ], 2)) : J("", !0),
        (O(!0), I(te, null, me(l.days, (u) => (O(), Ke(i, {
          key: u.id,
          day: u
        }, null, 8, ["day"]))), 128))
      ]))), 128))
    ], 2)
  ], 2);
}
const jE = /* @__PURE__ */ Xt(YE, [["render", UE]]), BE = Ae({
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
    function i(w) {
      w && (o.direction = w.split("-")[0]);
    }
    function l({ placement: w, options: q }) {
      i(w || (q == null ? void 0 : q.placement));
    }
    const u = M(() => ({
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
    })), c = M(() => {
      const w = o.direction === "left" || o.direction === "right";
      let q = "";
      if (o.placement) {
        const pe = o.placement.split("-");
        pe.length > 1 && (q = pe[1]);
      }
      return ["start", "top", "left"].includes(q) ? w ? "top" : "left" : ["end", "bottom", "right"].includes(q) ? w ? "bottom" : "right" : w ? "middle" : "center";
    });
    function p() {
      a && (a.destroy(), a = null);
    }
    function v() {
      Ln(() => {
        const w = Qr(o.target);
        !w || !r.value || (a && a.state.elements.reference !== w && p(), a ? a.update() : a = dd(
          w,
          r.value,
          u.value
        ));
      });
    }
    function d(w) {
      Object.assign(o, Rl(w, "force"));
    }
    function $(w, q) {
      clearTimeout(n), w > 0 ? n = setTimeout(q, w) : q();
    }
    function g(w) {
      return !w || !a ? !1 : Qr(w) === a.state.elements.reference;
    }
    async function D(w = {}) {
      o.force || (w.force && (o.force = !0), $(w.showDelay ?? e.showDelay, () => {
        o.isVisible && (o.force = !1, t("after-show")), d({
          ...w,
          isVisible: !0
        }), v();
      }));
    }
    function f(w = {}) {
      a && (w.target && !g(w.target) || o.force || (w.force && (o.force = !0), $(w.hideDelay ?? e.hideDelay, () => {
        o.isVisible || (o.force = !1), o.isVisible = !1;
      })));
    }
    function b(w = {}) {
      w.target != null && (o.isVisible && g(w.target) ? f(w) : D(w));
    }
    function k(w) {
      if (!a)
        return;
      const q = a.state.elements.reference;
      if (!r.value || !q)
        return;
      const pe = w.target;
      Wr(r.value, pe) || Wr(q, pe) || f({ force: !0 });
    }
    function _(w) {
      (w.key === "Esc" || w.key === "Escape") && f();
    }
    function C({ detail: w }) {
      !w.id || w.id !== e.id || D(w);
    }
    function N({ detail: w }) {
      !w.id || w.id !== e.id || f(w);
    }
    function x({ detail: w }) {
      !w.id || w.id !== e.id || b(w);
    }
    function P() {
      ln(document, "keydown", _), ln(document, "click", k), ln(document, "show-popover", C), ln(document, "hide-popover", N), ln(document, "toggle-popover", x);
    }
    function A() {
      on(document, "keydown", _), on(document, "click", k), on(document, "show-popover", C), on(document, "hide-popover", N), on(document, "toggle-popover", x);
    }
    function S(w) {
      t("before-show", w);
    }
    function j(w) {
      o.force = !1, t("after-show", w);
    }
    function Y(w) {
      t("before-hide", w);
    }
    function X(w) {
      o.force = !1, p(), t("after-hide", w);
    }
    function K(w) {
      w.stopPropagation();
    }
    function U() {
      o.isHovered = !0, o.isInteractive && ["hover", "hover-focus"].includes(o.visibility) && D();
    }
    function F() {
      if (o.isHovered = !1, !a)
        return;
      const w = a.state.elements.reference;
      o.autoHide && !o.isFocused && (!w || w !== document.activeElement) && ["hover", "hover-focus"].includes(o.visibility) && f();
    }
    function Q() {
      o.isFocused = !0, o.isInteractive && ["focus", "hover-focus"].includes(o.visibility) && D();
    }
    function W(w) {
      ["focus", "hover-focus"].includes(o.visibility) && (!w.relatedTarget || !Wr(r.value, w.relatedTarget)) && (o.isFocused = !1, !o.isHovered && o.autoHide && f());
    }
    function V() {
      s != null && (s.disconnect(), s = null);
    }
    return ke(
      () => r.value,
      (w) => {
        V(), w && (s = new ResizeObserver(() => {
          a && a.update();
        }), s.observe(w));
      }
    ), ke(() => o.placement, i, {
      immediate: !0
    }), fn(() => {
      P();
    }), Ir(() => {
      p(), V(), A();
    }), {
      ...Fu(o),
      popoverRef: r,
      alignment: c,
      hide: f,
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
  return O(), I("div", {
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
        e.isVisible ? (O(), I("div", Cr({
          key: 0,
          tabindex: "-1",
          class: `vc-popover-content direction-${e.direction}`
        }, e.$attrs), [
          Gt(e.$slots, "default", {
            direction: e.direction,
            alignment: e.alignment,
            data: e.data,
            hide: e.hide
          }, () => [
            Mr(le(e.data), 1)
          ]),
          E("span", {
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
  function d(ee) {
    r.value = ee, n.value = !0, p();
  }
  function $(ee) {
    const { year: De } = c(/* @__PURE__ */ new Date()), he = ee * a, Ie = he + a, Oe = [];
    for (let be = he; be < Ie; be += 1) {
      let Ye = !1;
      for (let Re = 1; Re < 12 && (Ye = u({ month: Re, year: be }, { position: S.value }), !Ye); Re++)
        ;
      Oe.push({
        year: be,
        id: be.toString(),
        label: be.toString(),
        ariaLabel: be.toString(),
        isActive: be === A.value,
        isCurrent: be === De,
        isDisabled: !Ye,
        click: () => d(be)
      });
    }
    return Oe;
  }
  function g(ee) {
    const { month: De, year: he } = c(/* @__PURE__ */ new Date());
    return Zl().map((Ie, Oe) => {
      const be = Oe + 1;
      return {
        month: be,
        year: ee,
        id: `${ee}.${Te(be, 2)}`,
        label: i.value.formatDate(Ie, l.value.navMonths),
        ariaLabel: i.value.formatDate(Ie, "MMMM YYYY"),
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
  function f() {
    n.value = !n.value;
  }
  function b() {
    W.value && (n.value && _(), N());
  }
  function k() {
    q.value && (n.value && C(), x());
  }
  function _() {
    r.value--;
  }
  function C() {
    r.value++;
  }
  function N() {
    s.value--;
  }
  function x() {
    s.value++;
  }
  const P = M(() => {
    var ee;
    return ((ee = e.value) == null ? void 0 : ee.month) || 0;
  }), A = M(() => {
    var ee;
    return ((ee = e.value) == null ? void 0 : ee.year) || 0;
  }), S = M(() => {
    var ee;
    return ((ee = e.value) == null ? void 0 : ee.position) || 1;
  }), j = M(() => g(r.value)), Y = M(() => $(s.value)), X = M(() => xl(Y.value.map((ee) => ee.year))), K = M(() => Yn(Y.value.map((ee) => ee.year))), U = M(() => n.value ? r.value : `${X.value} - ${K.value}`), F = M(
    () => g(r.value - 1).some((ee) => !ee.isDisabled)
  ), Q = M(
    () => $(s.value - 1).some((ee) => !ee.isDisabled)
  ), W = M(
    () => n.value ? F.value : Q.value
  ), V = M(
    () => g(r.value + 1).some((ee) => !ee.isDisabled)
  ), w = M(
    () => $(s.value + 1).some((ee) => !ee.isDisabled)
  ), q = M(
    () => n.value ? V.value : w.value
  ), pe = M(
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
  ), r.value = A.value, fn(() => p());
  const Ee = {
    navContainer: o,
    title: U,
    monthMode: n,
    currentMonth: P,
    currentYear: A,
    activeItems: pe,
    prevItemsEnabled: W,
    nextItemsEnabled: q,
    toggleMode: f,
    movePrev: b,
    moveNext: k,
    movePrevYear: _,
    moveNextYear: C,
    movePrevYearGroup: N,
    moveNextYearGroup: x
  };
  return Bn(KE, Ee), Ee;
}
const zE = { class: "vc-nav-header" }, XE = ["disabled"], ZE = ["disabled"], JE = { class: "vc-nav-items" }, QE = ["data-id", "aria-label", "disabled", "onClick", "onKeydown"], eO = /* @__PURE__ */ Ae({
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
    return (p, v) => (O(), I("div", {
      class: "vc-nav-container",
      ref_key: "navContainer",
      ref: r
    }, [
      E("div", zE, [
        E("button", {
          type: "button",
          class: "vc-nav-arrow is-left vc-focus",
          disabled: !h(a),
          onClick: v[0] || (v[0] = //@ts-ignore
          (...d) => h(u) && h(u)(...d)),
          onKeydown: v[1] || (v[1] = (d) => h(Ur)(d, h(u)))
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
        E("button", {
          type: "button",
          class: "vc-nav-title vc-focus",
          onClick: v[2] || (v[2] = //@ts-ignore
          (...d) => h(l) && h(l)(...d)),
          onKeydown: v[3] || (v[3] = (d) => h(Ur)(d, h(l)))
        }, le(h(s)), 33),
        E("button", {
          type: "button",
          class: "vc-nav-arrow is-right vc-focus",
          disabled: !h(o),
          onClick: v[4] || (v[4] = //@ts-ignore
          (...d) => h(c) && h(c)(...d)),
          onKeydown: v[5] || (v[5] = (d) => h(Ur)(d, h(c)))
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
      E("div", JE, [
        (O(!0), I(te, null, me(h(i), (d) => (O(), I("button", {
          key: d.label,
          type: "button",
          "data-id": d.id,
          "aria-label": d.ariaLabel,
          class: He(["vc-nav-item vc-focus", [
            d.isActive ? "is-active" : d.isCurrent ? "is-current" : ""
          ]]),
          disabled: d.isDisabled,
          onClick: d.click,
          onKeydown: ($) => h(Ur)($, d.click)
        }, le(d.label), 43, QE))), 128))
      ])
    ], 512));
  }
}), tO = {
  __name: "CalendarNavPopover",
  setup(e) {
    const { navPopoverId: t, color: n, displayMode: r, navPopoverRef: s, move: a } = Tn();
    return (o, i) => (O(), Ke(Fs, {
      id: h(t),
      class: He(["vc-nav-popover-container", `vc-${h(n)}`, `vc-${h(r)}`]),
      ref_key: "navPopoverRef",
      ref: s
    }, {
      default: qe(({ data: l }) => [
        ve(eO, {
          value: l.page,
          onInput: h(a)
        }, null, 8, ["value", "onInput"])
      ]),
      _: 1
    }, 8, ["id", "class"]));
  }
}, nO = Ae({
  name: "PopoverRow",
  props: {
    attribute: { type: Object, required: !0 }
  },
  setup(e) {
    return {
      indicator: M(() => {
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
}), rO = { class: "vc-day-popover-row" }, aO = {
  key: 0,
  class: "vc-day-popover-row-indicator"
}, sO = { class: "vc-day-popover-row-label" };
function oO(e, t, n, r, s, a) {
  return O(), I("div", rO, [
    e.indicator ? (O(), I("div", aO, [
      E("span", {
        class: He(e.indicator.class)
      }, null, 2)
    ])) : J("", !0),
    E("div", sO, [
      Gt(e.$slots, "default", {}, () => [
        Mr(le(e.attribute.popover ? e.attribute.popover.label : "No content provided"), 1)
      ])
    ])
  ]);
}
const iO = /* @__PURE__ */ Xt(nO, [["render", oO]]), lO = { class: "vc-day-popover-container" }, uO = {
  key: 0,
  class: "vc-day-popover-header"
}, cO = /* @__PURE__ */ Ae({
  __name: "CalendarDayPopover",
  setup(e) {
    const { dayPopoverId: t, displayMode: n, color: r, masks: s, locale: a } = Tn();
    function o(l, u) {
      return a.value.formatDate(l, u);
    }
    function i(l) {
      return a.value.formatDate(l.date, s.value.dayPopover);
    }
    return (l, u) => (O(), Ke(Fs, {
      id: h(t),
      class: He([`vc-${h(r)}`, `vc-${h(n)}`])
    }, {
      default: qe(({ data: { day: c, attributes: p }, hide: v }) => [
        Gt(l.$slots, "default", {
          day: c,
          dayTitle: i(c),
          attributes: p,
          format: o,
          masks: h(s),
          hide: v
        }, () => [
          E("div", lO, [
            h(s).dayPopover ? (O(), I("div", uO, le(i(c)), 1)) : J("", !0),
            (O(!0), I(te, null, me(p, (d) => (O(), Ke(iO, {
              key: d.key,
              attribute: d
            }, null, 8, ["attribute"]))), 128))
          ])
        ])
      ]),
      _: 3
    }, 8, ["id", "class"]));
  }
}), dO = Ae({
  name: "Calendar",
  components: {
    CalendarHeader: cu,
    CalendarPane: jE,
    CalendarNavPopover: tO,
    CalendarDayPopover: cO
  },
  emits: OE,
  props: EE,
  setup(e, { emit: t, slots: n }) {
    return $E(e, { emit: t, slots: n });
  }
}), fO = { class: "vc-pane-header-wrapper" };
function vO(e, t, n, r, s, a) {
  const o = Bt("CalendarHeader"), i = Bt("CalendarPane"), l = Bt("CalendarDayPopover"), u = Bt("CalendarNavPopover");
  return O(), I(te, null, [
    E("div", Cr({ "data-helptext": "Press the arrow keys to navigate by day, Home and End to navigate to week ends, PageUp and PageDown to navigate by month, Alt+PageUp and Alt+PageDown to navigate by year" }, e.$attrs, {
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
      E("div", {
        class: He(["vc-pane-container", { "in-transition": e.inTransition }])
      }, [
        E("div", fO, [
          e.firstPage ? (O(), Ke(o, {
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
            (O(), I("div", {
              key: e.pages[0].id,
              class: "vc-pane-layout",
              style: gr({
                gridTemplateColumns: `repeat(${e.columns}, 1fr)`
              })
            }, [
              (O(!0), I(te, null, me(e.pages, (c) => (O(), Ke(i, {
                key: c.id,
                page: c
              }, null, 8, ["page"]))), 128))
            ], 4))
          ]),
          _: 1
        }, 8, ["name", "onBeforeEnter", "onAfterEnter"]),
        Gt(e.$slots, "footer")
      ], 2)
    ], 16),
    ve(l, null, {
      default: qe((c) => [
        Gt(e.$slots, "day-popover", ji(Vu(c)))
      ]),
      _: 3
    }),
    ve(u)
  ], 64);
}
const pO = /* @__PURE__ */ Xt(dO, [["render", vO]]), mO = { class: "vc-base-select" }, hO = ["value"], gO = ["value", "disabled"], _O = {
  inheritAttrs: !1
}, vr = /* @__PURE__ */ Object.assign(_O, {
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
    return (t, n) => (O(), I("div", mO, [
      e.showIcon ? (O(), Ke(qn, {
        key: 0,
        name: "ChevronDown",
        size: e.small ? "16" : "18"
      }, null, 8, ["size"])) : J("", !0),
      E("select", Cr(t.$attrs, {
        value: e.modelValue,
        class: ["vc-focus", {
          "vc-has-icon": e.showIcon,
          "vc-align-right": e.alignRight,
          "vc-align-left": e.alignLeft,
          "vc-small": e.small
        }],
        onChange: n[0] || (n[0] = (r) => t.$emit("update:modelValue", r.target.value))
      }), [
        (O(!0), I(te, null, me(e.options, (r) => (O(), I("option", {
          key: r.value,
          value: r.value,
          disabled: r.disabled
        }, le(r.label), 9, gO))), 128))
      ], 16, hO)
    ]));
  }
}), du = "__vc_date_picker_context__", bO = {
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
    default: () => cn("datePicker.updateOnInput")
  },
  inputDebounce: {
    type: Number,
    default: () => cn("datePicker.inputDebounce")
  },
  popover: {
    type: [Boolean, Object],
    default: !0
  },
  dragAttribute: Object,
  selectAttribute: Object,
  attributes: [Object, Array]
}, yO = [
  "update:modelValue",
  "drag",
  "dayclick",
  "daykeydown",
  "popover-will-show",
  "popover-did-show",
  "popover-will-hide",
  "popover-did-hide"
];
function DO(e, t) {
  const n = su(e), { locale: r, masks: s, disabledAttribute: a } = n, { emit: o } = t, i = ne(!1), l = ne(ea()), u = ne(null), c = ne(null), p = ne(["", ""]), v = ne(null), d = ne(null);
  let $, g, D = !0;
  const f = M(() => e.isRange || e.modelModifiers.range === !0), b = M(
    () => f.value && u.value != null ? u.value.start : null
  ), k = M(
    () => f.value && u.value != null ? u.value.end : null
  ), _ = M(() => e.mode.toLowerCase() === "date"), C = M(
    () => e.mode.toLowerCase() === "datetime"
  ), N = M(() => e.mode.toLowerCase() === "time"), x = M(() => !!c.value), P = M(() => {
    let T = "date";
    e.modelModifiers.number && (T = "number"), e.modelModifiers.string && (T = "string");
    const G = s.value.modelValue || "iso";
    return Ee({ type: T, mask: G });
  }), A = M(
    () => Ze(c.value ?? u.value)
  ), S = M(() => N.value ? e.is24hr ? s.value.inputTime24hr : s.value.inputTime : C.value ? e.is24hr ? s.value.inputDateTime24hr : s.value.inputDateTime : s.value.input), j = M(() => /[Hh]/g.test(S.value)), Y = M(
    () => /[dD]{1,2}|Do|W{1,4}|M{1,4}|YY(?:YY)?/g.test(S.value)
  ), X = M(() => {
    if (j.value && Y.value)
      return "dateTime";
    if (Y.value)
      return "date";
    if (j.value)
      return "time";
  }), K = M(() => {
    var T;
    const G = ((T = v.value) == null ? void 0 : T.$el.previousElementSibling) ?? void 0;
    return kr({}, e.popover, cn("datePicker.popover"), {
      target: G
    });
  }), U = M(
    () => lu({
      ...K.value,
      id: l.value
    })
  ), F = M(() => f.value ? {
    start: p.value[0],
    end: p.value[1]
  } : p.value[0]), Q = M(() => {
    const T = ["start", "end"].map((G) => ({
      input: Z(G),
      change: ie(G),
      keyup: ge,
      ...e.popover && U.value
    }));
    return f.value ? {
      start: T[0],
      end: T[1]
    } : T[0];
  }), W = M(() => {
    if (!he(u.value))
      return null;
    const T = {
      key: "select-drag",
      ...e.selectAttribute,
      dates: u.value,
      pinPage: !0
    }, { dot: G, bar: ue, highlight: we, content: We } = T;
    return !G && !ue && !we && !We && (T.highlight = !0), T;
  }), V = M(() => {
    if (!f.value || !he(c.value))
      return null;
    const T = {
      key: "select-drag",
      ...e.dragAttribute,
      dates: c.value
    }, { dot: G, bar: ue, highlight: we, content: We } = T;
    return !G && !ue && !we && !We && (T.highlight = {
      startEnd: {
        fillMode: "outline"
      }
    }), T;
  }), w = M(() => {
    const T = bt(e.attributes) ? [...e.attributes] : [];
    return V.value ? T.unshift(V.value) : W.value && T.unshift(W.value), T;
  }), q = M(() => Ee(
    e.rules === "auto" ? pe() : e.rules ?? {}
  ));
  function pe() {
    const T = {
      ms: [0, 999],
      sec: [0, 59],
      min: [0, 59],
      hr: [0, 23]
    }, G = _.value ? 0 : e.timeAccuracy;
    return [0, 1].map((ue) => {
      switch (G) {
        case 0:
          return {
            hours: T.hr[ue],
            minutes: T.min[ue],
            seconds: T.sec[ue],
            milliseconds: T.ms[ue]
          };
        case 1:
          return {
            minutes: T.min[ue],
            seconds: T.sec[ue],
            milliseconds: T.ms[ue]
          };
        case 3:
          return { milliseconds: T.ms[ue] };
        case 4:
          return {};
        default:
          return { seconds: T.sec[ue], milliseconds: T.ms[ue] };
      }
    });
  }
  function Ee(T) {
    return bt(T) ? T.length === 1 ? [T[0], T[0]] : T : [T, T];
  }
  function ee(T) {
    return Ee(T).map(
      (G, ue) => ({
        ...G,
        rules: q.value[ue]
      })
    );
  }
  function De(T) {
    return Tt(T) ? !isNaN(T) : Vn(T) ? !isNaN(T.getTime()) : St(T) ? T !== "" : T != null;
  }
  function he(T) {
    return f.value ? qt(T) && De(T.start) && De(T.end) : De(T);
  }
  function Ie(T, G) {
    const ue = Vn(T), we = Vn(G);
    return !ue && !we ? !0 : ue !== we ? !1 : T.getTime() === G.getTime();
  }
  function Oe(T, G) {
    if (f.value) {
      const ue = he(T), we = he(G);
      return !ue && !we ? !0 : ue !== we ? !1 : Ie(T.start, G.start) && Ie(T.end, G.end);
    }
    return Ie(T, G);
  }
  function be(T) {
    return !he(T) || !a.value ? !1 : a.value.intersectsRange(r.value.range(T));
  }
  function Ye(T, G, ue, we) {
    if (!he(T))
      return null;
    if (f.value) {
      const We = r.value.toDate(T.start, {
        ...G[0],
        fillDate: b.value ?? void 0,
        patch: ue
      }), Ot = r.value.toDate(T.end, {
        ...G[1],
        fillDate: k.value ?? void 0,
        patch: ue
      });
      return gn({ start: We, end: Ot }, we);
    }
    return r.value.toDateOrNull(T, {
      ...G[0],
      fillDate: u.value,
      patch: ue
    });
  }
  function Re(T, G) {
    return f.value ? he(T) ? {
      start: r.value.fromDate(T.start, G[0]),
      end: r.value.fromDate(T.end, G[1])
    } : null : r.value.fromDate(T, G[0]);
  }
  function ze(T, G = {}) {
    return clearTimeout($), new Promise((ue) => {
      const { debounce: we = 0, ...We } = G;
      we > 0 ? $ = window.setTimeout(() => {
        ue(y(T, We));
      }, we) : ue(y(T, We));
    });
  }
  function y(T, {
    config: G = P.value,
    patch: ue = "dateTime",
    clearIfEqual: we = !1,
    formatInput: We = !0,
    hidePopover: Ot = !1,
    dragging: st = x.value,
    targetPriority: Cn,
    moveToValue: lr = !1
  } = {}) {
    const xr = ee(G);
    let pt = Ye(
      T,
      xr,
      ue,
      Cn
    );
    if (be(pt)) {
      if (st)
        return null;
      pt = u.value, Ot = !1;
    } else
      pt == null && e.isRequired ? pt = u.value : (
        // Clear value if same value was passed
        pt != null && Oe(u.value, pt) && we && (pt = null)
      );
    const ur = st ? c : u, Ta = !Oe(ur.value, pt);
    ur.value = pt, st || (c.value = null);
    const Xs = Re(
      pt,
      P.value
    );
    return Ta && (D = !1, o(st ? "drag" : "update:modelValue", Xs), Ln(() => D = !0)), Ot && !st && wt(), We && m(), lr && Ln(() => B(Cn ?? "start")), Xs;
  }
  function m() {
    Ln(() => {
      const T = ee({
        type: "string",
        mask: S.value
      }), G = Re(
        c.value || u.value,
        T
      );
      f.value ? p.value = [G && G.start, G && G.end] : p.value = [G, ""];
    });
  }
  function L(T, G, ue) {
    p.value.splice(G === "start" ? 0 : 1, 1, T);
    const we = f.value ? {
      start: p.value[0],
      end: p.value[1] || p.value[0]
    } : T, We = {
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
  function Z(T) {
    return (G) => {
      e.updateOnInput && L(G.currentTarget.value, T, {
        formatInput: !1,
        hidePopover: !1,
        debounce: e.inputDebounce
      });
    };
  }
  function ie(T) {
    return (G) => {
      L(G.currentTarget.value, T, {
        formatInput: !0,
        hidePopover: !1
      });
    };
  }
  function ge(T) {
    T.key === "Escape" && ze(u.value, {
      formatInput: !0,
      hidePopover: !0
    });
  }
  function Ze(T) {
    return f.value ? [
      T && T.start ? r.value.getDateParts(T.start) : null,
      T && T.end ? r.value.getDateParts(T.end) : null
    ] : [T ? r.value.getDateParts(T) : null];
  }
  function Ue() {
    c.value = null, m();
  }
  function vt(T) {
    o("popover-will-show", T);
  }
  function Mt(T) {
    o("popover-did-show", T);
  }
  function Ne(T) {
    Ue(), o("popover-will-hide", T);
  }
  function R(T) {
    o("popover-did-hide", T);
  }
  function H(T) {
    const G = {
      patch: "date",
      formatInput: !0,
      hidePopover: !0
    };
    if (f.value) {
      const ue = !x.value;
      ue ? g = { start: T.startDate, end: T.endDate } : g != null && (g.end = T.date), ze(g, {
        ...G,
        dragging: ue
      });
    } else
      ze(T.date, {
        ...G,
        clearIfEqual: !e.isRequired
      });
  }
  function Fe(T, G) {
    H(T), o("dayclick", T, G);
  }
  function Ve(T, G) {
    switch (G.key) {
      case " ":
      case "Enter": {
        H(T), G.preventDefault();
        break;
      }
      case "Escape":
        wt();
    }
    o("daykeydown", T, G);
  }
  function Pt(T, G) {
    !x.value || g == null || (g.end = T.date, ze(gn(g), {
      patch: "date",
      formatInput: !0
    }));
  }
  function en(T = {}) {
    Ga({
      ...K.value,
      ...T,
      isInteractive: !0,
      id: l.value
    });
  }
  function wt(T = {}) {
    va({
      hideDelay: 10,
      force: !0,
      ...K.value,
      ...T,
      id: l.value
    });
  }
  function Et(T) {
    iu({
      ...K.value,
      ...T,
      isInteractive: !0,
      id: l.value
    });
  }
  function gn(T, G) {
    const { start: ue, end: we } = T;
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
  function In(T) {
    if (he(u.value)) {
      const G = f.value ? T ? b.value : k.value : u.value;
      return Jl(G, "monthly", r.value);
    }
    return null;
  }
  async function Na(T, G = {}) {
    return d.value == null ? !1 : d.value.move(T, G);
  }
  async function Sr(T, G = {}) {
    return d.value == null ? !1 : d.value.moveBy(T, G);
  }
  async function B(T, G = {}) {
    if (d.value == null)
      return !1;
    const { firstPage: ue, lastPage: we, move: We } = d.value, Ot = T !== "end", st = In(Ot), Cn = Ot ? 1 : -1;
    return !st || eu(st, ue, we) ? !1 : We(st, {
      position: Cn,
      ...G
    });
  }
  ke(
    () => e.isRange,
    (T) => {
      T && console.warn(
        "The `is-range` prop will be deprecated in future releases. Please use the `range` modifier."
      );
    },
    { immediate: !0 }
  ), ke(
    () => S.value,
    () => m()
  ), ke(
    () => e.modelValue,
    (T) => {
      D && y(T, {
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
  u.value = Ye(e.modelValue, z, "dateTime"), fn(() => {
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
    calendarRef: d,
    isRange: f,
    isTimeMode: N,
    isDateTimeMode: C,
    is24hr: Ia(e, "is24hr"),
    hideTimeHeader: Ia(e, "hideTimeHeader"),
    timeAccuracy: Ia(e, "timeAccuracy"),
    isDragging: x,
    inputValue: F,
    inputEvents: Q,
    dateParts: A,
    attributes: w,
    rules: q,
    move: Na,
    moveBy: Sr,
    moveToValue: B,
    updateValue: ze,
    showPopover: en,
    hidePopover: wt,
    togglePopover: Et,
    onDayClick: Fe,
    onDayKeydown: Ve,
    onDayMouseEnter: Pt,
    onPopoverBeforeShow: vt,
    onPopoverAfterShow: Mt,
    onPopoverBeforeHide: Ne,
    onPopoverAfterHide: R
  };
  return Bn(du, de), de;
}
function wO() {
  const e = vn(du);
  if (e)
    return e;
  throw new Error(
    "DatePicker context missing. Please verify this component is nested within a valid context provider."
  );
}
const EO = [
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
], OO = [
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
function $O(e) {
  const t = wO(), {
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
    Y = Object.assign(d.value, Y);
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
  const v = M(() => e.position === 0), d = M(
    () => a.value[e.position] || { isValid: !1 }
  ), $ = M(() => Kl(d.value)), g = M(() => !!d.value.isValid), D = M(() => !l.value && g.value), f = M(() => {
    if (!$.value)
      return null;
    let Y = n.value.toDate(d.value);
    return d.value.hours === 24 && (Y = new Date(Y.getTime() - 1)), Y;
  }), b = M({
    get() {
      return d.value.hours;
    },
    set(Y) {
      p({ hours: Y });
    }
  }), k = M({
    get() {
      return d.value.minutes;
    },
    set(Y) {
      p({ minutes: Y });
    }
  }), _ = M({
    get() {
      return d.value.seconds;
    },
    set(Y) {
      p({ seconds: Y });
    }
  }), C = M({
    get() {
      return d.value.milliseconds;
    },
    set(Y) {
      p({ milliseconds: Y });
    }
  }), N = M({
    get() {
      return d.value.hours < 12;
    },
    set(Y) {
      Y = String(Y).toLowerCase() == "true";
      let X = b.value;
      Y && X >= 12 ? X -= 12 : !Y && X < 12 && (X += 12), p({ hours: X });
    }
  }), x = M(
    () => rE(d.value, o.value[e.position])
  ), P = M(() => EO.filter(
    (Y) => x.value.hours.some((X) => X.value === Y.value)
  )), A = M(() => OO.filter(
    (Y) => x.value.hours.some((X) => X.value === Y.value)
  )), S = M(() => i.value ? x.value.hours : N.value ? P.value : A.value), j = M(() => {
    const Y = [];
    return Ht(P.value) && Y.push({ value: !0, label: "AM" }), Ht(A.value) && Y.push({ value: !1, label: "PM" }), Y;
  });
  return {
    ...t,
    showHeader: D,
    timeAccuracy: u,
    parts: d,
    isValid: g,
    date: f,
    hours: b,
    minutes: k,
    seconds: _,
    milliseconds: C,
    options: x,
    hourOptions: S,
    isAM: N,
    isAMOptions: j,
    is24hr: i
  };
}
const kO = {
  key: 0,
  class: "vc-time-header"
}, NO = { class: "vc-time-weekday" }, TO = { class: "vc-time-month" }, IO = { class: "vc-time-day" }, CO = { class: "vc-time-year" }, MO = { class: "vc-time-select-group" }, PO = /* @__PURE__ */ E("span", { class: "vc-time-colon" }, ":", -1), AO = /* @__PURE__ */ E("span", { class: "vc-time-colon" }, ":", -1), LO = /* @__PURE__ */ E("span", { class: "vc-time-decimal" }, ".", -1), SO = /* @__PURE__ */ Ae({
  __name: "TimePicker",
  props: {
    position: null
  },
  setup(e, { expose: t }) {
    const r = $O(e);
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
      isTimeMode: d,
      isAM: $,
      isAMOptions: g,
      is24hr: D,
      showHeader: f,
      timeAccuracy: b
    } = r;
    return (k, _) => (O(), I("div", {
      class: He(["vc-time-picker", [{ "vc-invalid": !h(a), "vc-attached": !h(d) }]])
    }, [
      Gt(k.$slots, "time-header", {}, () => [
        h(f) && h(o) ? (O(), I("div", kO, [
          E("span", NO, le(h(s).formatDate(h(o), "WWW")), 1),
          E("span", TO, le(h(s).formatDate(h(o), "MMM")), 1),
          E("span", IO, le(h(s).formatDate(h(o), "D")), 1),
          E("span", CO, le(h(s).formatDate(h(o), "YYYY")), 1)
        ])) : J("", !0)
      ]),
      E("div", MO, [
        ve(qn, {
          name: "Clock",
          size: "17"
        }),
        ve(vr, {
          modelValue: h(i),
          "onUpdate:modelValue": _[0] || (_[0] = (C) => _e(i) ? i.value = C : null),
          modelModifiers: { number: !0 },
          options: h(v),
          "align-right": ""
        }, null, 8, ["modelValue", "options"]),
        h(b) > 1 ? (O(), I(te, { key: 0 }, [
          PO,
          ve(vr, {
            modelValue: h(l),
            "onUpdate:modelValue": _[1] || (_[1] = (C) => _e(l) ? l.value = C : null),
            modelModifiers: { number: !0 },
            options: h(p).minutes,
            "align-left": h(b) === 2
          }, null, 8, ["modelValue", "options", "align-left"])
        ], 64)) : J("", !0),
        h(b) > 2 ? (O(), I(te, { key: 1 }, [
          AO,
          ve(vr, {
            modelValue: h(u),
            "onUpdate:modelValue": _[2] || (_[2] = (C) => _e(u) ? u.value = C : null),
            modelModifiers: { number: !0 },
            options: h(p).seconds,
            "align-left": h(b) === 3
          }, null, 8, ["modelValue", "options", "align-left"])
        ], 64)) : J("", !0),
        h(b) > 3 ? (O(), I(te, { key: 2 }, [
          LO,
          ve(vr, {
            modelValue: h(c),
            "onUpdate:modelValue": _[3] || (_[3] = (C) => _e(c) ? c.value = C : null),
            modelModifiers: { number: !0 },
            options: h(p).milliseconds,
            "align-left": ""
          }, null, 8, ["modelValue", "options"])
        ], 64)) : J("", !0),
        h(D) ? J("", !0) : (O(), Ke(vr, {
          key: 3,
          modelValue: h($),
          "onUpdate:modelValue": _[4] || (_[4] = (C) => _e($) ? $.value = C : null),
          options: h(g)
        }, null, 8, ["modelValue", "options"]))
      ])
    ], 2));
  }
}), Vs = Ae({
  name: "DatePicker",
  inheritAttrs: !1,
  emits: yO,
  props: bO,
  setup(e, t) {
    const n = DO(e, t), { slots: r, attrs: s } = t, {
      isTimeMode: a,
      isRange: o,
      isDateTimeMode: i,
      color: l,
      displayMode: u,
      dateParts: c,
      datePickerPopoverId: p,
      attributes: v,
      calendarRef: d,
      popoverRef: $,
      showCalendar: g,
      onDayClick: D,
      onDayMouseEnter: f,
      onDayKeydown: b,
      onPopoverBeforeShow: k,
      onPopoverAfterShow: _,
      onPopoverBeforeHide: C,
      onPopoverAfterHide: N
    } = n;
    t.expose(n);
    const x = os(Rl(n, "calendarRef", "popoverRef")), P = () => (o.value ? [0, 1] : [0]).map((Y) => An(SO, { position: Y })), A = () => {
      if (!c.value)
        return null;
      const j = i.value ? { ...r, footer: P } : r;
      return An(
        pO,
        {
          ...s,
          attributes: v.value,
          ref: d,
          onDayclick: D,
          onDaymouseenter: f,
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
          ref: $,
          "onBefore-show": k,
          "onAfter-show": _,
          "onBefore-hide": C,
          "onAfter-hide": N
        },
        {
          default: S
        }
      )
    ] : S;
  }
});
const xO = { class: "flex flex-col gap-2" }, RO = { class: "flex items-center gap-2" }, YO = /* @__PURE__ */ E("label", {
  for: "due",
  class: "p3-b"
}, "結束於指定日期", -1), FO = ["onClick"], VO = /* @__PURE__ */ Ae({
  __name: "DuePicker",
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, r = M({
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
    }), (a, o) => (O(), I("div", xO, [
      E("div", RO, [
        Ce(E("input", {
          type: "checkbox",
          "onUpdate:modelValue": o[0] || (o[0] = (i) => _e(s) ? s.value = i : null),
          id: "due"
        }, null, 512), [
          [zr, h(s)]
        ]),
        YO,
        h(s) ? (O(), Ke(h(Vs), {
          key: 0,
          modelValue: h(r),
          "onUpdate:modelValue": o[1] || (o[1] = (i) => _e(r) ? r.value = i : null),
          mode: "dateTime",
          timezone: "UTC",
          "min-Date": /* @__PURE__ */ new Date()
        }, {
          default: qe(({ togglePopover: i, inputValue: l }) => [
            E("button", {
              class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 transition-all hover:bg-light-3 hover:bg-opacity-50",
              onClick: i
            }, le(l || "請選定結束日期"), 9, FO)
          ]),
          _: 1
        }, 8, ["modelValue", "min-Date"])) : J("", !0)
      ])
    ]));
  }
}), UO = { class: "flex w-auto items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-1.5" }, jO = ["value", "type", "placeholder", "maxLength", "required"], BO = /* @__PURE__ */ Ae({
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
    return (s, a) => (O(), I("div", UO, [
      E("input", {
        value: s.modelValue,
        onInput: r,
        type: s.type,
        class: "p3-b w-full border-none outline-none shadow-none",
        placeholder: s.placeholder,
        maxLength: s.maxLength,
        required: s.required
      }, null, 40, jO)
    ]));
  }
});
const kt = /* @__PURE__ */ cs(BO, [["__scopeId", "data-v-068dea7c"]]), HO = { class: "flex flex-col gap-3" }, WO = /* @__PURE__ */ E("div", { class: "flex items-center justify-center gap-3 my-2" }, [
  /* @__PURE__ */ E("p", { class: "p4-b" }, "日期時間"),
  /* @__PURE__ */ E("div", { class: "h-[1px] flex-1 bg-light-3" })
], -1), GO = { class: "flex flex-col gap-2" }, KO = { class: "flex gap-2 items-center" }, qO = /* @__PURE__ */ E("span", { class: "p4-b" }, "開始", -1), zO = ["onClick"], XO = ["value"], ZO = /* @__PURE__ */ E("div", { class: "flex items-center justify-center gap-3 w-full my-2" }, [
  /* @__PURE__ */ E("p", { class: "p4-b" }, "重複頻率"),
  /* @__PURE__ */ E("div", { class: "h-[1px] flex-1 bg-light-3" })
], -1), JO = { class: "flex space-x-2 items-center" }, QO = { class: "flex items-center gap-2" }, e$ = /* @__PURE__ */ E("span", { class: "p4-b" }, "重複", -1), t$ = ["value"], n$ = /* @__PURE__ */ E("option", { value: 0 }, "自訂", -1), r$ = { class: "p4-b" }, a$ = {
  key: 0,
  class: "flex items-center gap-2"
}, s$ = { class: "flex items-center gap-2" }, o$ = /* @__PURE__ */ E("span", { class: "p4-b" }, "頻率", -1), i$ = /* @__PURE__ */ E("option", {
  value: "-1",
  disabled: ""
}, "請選擇", -1), l$ = ["value"], u$ = {
  key: 0,
  class: "flex items-center gap-2"
}, c$ = /* @__PURE__ */ E("span", { class: "p4-b" }, "每", -1), d$ = { class: "p4-b" }, ci = 1, f$ = /* @__PURE__ */ Ae({
  __name: "RepeatFrequency",
  props: {
    frequency: {},
    interval: {}
  },
  emits: ["update:frequency", "update:interval"],
  setup(e, { emit: t }) {
    const n = e, r = vn("eventData"), s = ne(!0);
    ke(r, () => {
      s.value = !0;
    });
    const a = ne(n.interval ?? ci);
    ke(a, (d) => {
      d || (d = ci), t("update:interval", d);
    });
    const o = ne(n.frequency);
    ke(o, (d) => {
      t("update:frequency", d);
    });
    const i = M({
      get: () => r.value.weekdays ?? [],
      set: (d) => {
        r.value.weekdays = d;
      }
    }), l = M({
      get: () => r.value.weekOrdinal ?? [],
      set: (d) => {
        r.value.weekOrdinal = d;
      }
    }), u = M({
      get: () => r.value.monthDate ?? [],
      set: (d) => {
        r.value.monthDate = d;
      }
    }), c = M({
      get: () => r.value.yearMonths ?? [],
      set: (d) => {
        r.value.yearMonths = d;
      }
    }), p = M(() => {
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
      const d = {
        1: "小時",
        2: "日",
        3: "週",
        4: "月",
        5: "年"
      };
      return v.value == 0 ? `每${a.value ?? ""}${d[o.value] ?? ""}執行一次` : "";
    }), v = ne(-1);
    return n.interval == 1 && (v.value = n.frequency), ke(
      v,
      (d) => {
        xe[d] && (t("update:frequency", d), t("update:interval", 1), o.value = v.value, r.value.weekdays = null, r.value.weekOrdinal = null, r.value.monthDate = null, r.value.yearMonths = null), r.value.customInterval = d === 0;
      },
      { immediate: !0 }
    ), (d, $) => (O(), I("div", HO, [
      WO,
      E("div", GO, [
        E("div", KO, [
          qO,
          ve(h(Vs), {
            modelValue: h(r).start,
            "onUpdate:modelValue": $[0] || ($[0] = (g) => h(r).start = g),
            mode: "dateTime",
            timezone: "UTC",
            "min-Date": /* @__PURE__ */ new Date(),
            "is-required": ""
          }, {
            default: qe(({ togglePopover: g, inputValue: D }) => [
              E("button", {
                class: "p3-b flex w-fit cursor-pointer relative items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 transition-all hover:bg-light-3 hover:bg-opacity-50",
                onClick: g
              }, [
                E("input", {
                  value: D,
                  required: "",
                  class: "opacity-0 absolute w-full h-full pointer-events-none"
                }, null, 8, XO),
                Mr(" " + le(D || "請選定執行日期"), 1)
              ], 8, zO)
            ]),
            _: 1
          }, 8, ["modelValue", "min-Date"])
        ])
      ]),
      ZO,
      E("div", JO, [
        E("label", QO, [
          e$,
          Ce(E("select", {
            class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
            "onUpdate:modelValue": $[1] || ($[1] = (g) => _e(v) ? v.value = g : null)
          }, [
            (O(!0), I(te, null, me(h(xe), (g, D) => (O(), I(te, { key: D }, [
              Number.isInteger(g) ? (O(), I("option", {
                key: 0,
                value: g
              }, le(d.$t(D)), 9, t$)) : J("", !0)
            ], 64))), 128)),
            n$
          ], 512), [
            [je, h(v)]
          ])
        ]),
        E("span", r$, le(h(p)), 1)
      ]),
      h(xe)[h(v)] == null ? (O(), I("div", a$, [
        E("label", s$, [
          o$,
          Ce(E("select", {
            class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
            "onUpdate:modelValue": $[2] || ($[2] = (g) => _e(o) ? o.value = g : null)
          }, [
            i$,
            (O(!0), I(te, null, me(h(xe), (g, D) => (O(), I(te, { key: D }, [
              g != h(xe).Never && Number.isInteger(g) ? (O(), I("option", {
                key: 0,
                value: g
              }, le(d.$t(D)), 9, l$)) : J("", !0)
            ], 64))), 128))
          ], 512), [
            [je, h(o)]
          ])
        ]),
        h(o) != -1 ? (O(), I("label", u$, [
          c$,
          ve(kt, {
            class: "!w-10 text-center",
            modelValue: h(a),
            "onUpdate:modelValue": $[3] || ($[3] = (g) => _e(a) ? a.value = g : null),
            type: "number"
          }, null, 8, ["modelValue"]),
          E("span", d$, le(d.$t(`s${h(xe)[h(o)]}`)), 1)
        ])) : J("", !0)
      ])) : J("", !0),
      h(xe)[h(v)] == null ? (O(), Ke(sc, {
        key: 1,
        type: h(o),
        weekdays: h(i),
        "onUpdate:weekdays": $[4] || ($[4] = (g) => _e(i) ? i.value = g : null),
        weekOrdinal: h(l),
        "onUpdate:weekOrdinal": $[5] || ($[5] = (g) => _e(l) ? l.value = g : null),
        monthDate: h(u),
        "onUpdate:monthDate": $[6] || ($[6] = (g) => _e(u) ? u.value = g : null),
        yearMonths: h(c),
        "onUpdate:yearMonths": $[7] || ($[7] = (g) => _e(c) ? c.value = g : null)
      }, null, 8, ["type", "weekdays", "weekOrdinal", "monthDate", "yearMonths"])) : J("", !0),
      h(o) !== -1 ? (O(), Ke(VO, {
        key: 2,
        modelValue: h(r).due,
        "onUpdate:modelValue": $[8] || ($[8] = (g) => h(r).due = g)
      }, null, 8, ["modelValue"])) : J("", !0)
    ]));
  }
}), v$ = { class: "relative border rounded border-light-3 py-4 px-3" }, p$ = { class: "p3-b absolute left-2 -top-3 text-dark-3 bg-light-5" }, Dr = /* @__PURE__ */ Ae({
  __name: "OuterBlock",
  props: {
    title: {}
  },
  setup(e) {
    return (t, n) => (O(), I("div", v$, [
      E("div", p$, le(t.title), 1),
      Gt(t.$slots, "default")
    ]));
  }
});
/*!
  * shared v9.5.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */
const dn = typeof window < "u";
let dt, On;
if (process.env.NODE_ENV !== "production") {
  const e = dn && window.performance;
  e && e.mark && e.measure && e.clearMarks && // @ts-ignore browser compat
  e.clearMeasures && (dt = (t) => {
    e.mark(t);
  }, On = (t, n, r) => {
    e.measure(t, n, r), e.clearMarks(n), e.clearMarks(r);
  });
}
const m$ = /\{([0-9a-zA-Z]+)\}/g;
function Us(e, ...t) {
  return t.length === 1 && $e(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(m$, (n, r) => t.hasOwnProperty(r) ? t[r] : "");
}
const Qt = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), h$ = (e, t, n) => g$({ l: e, k: t, s: n }), g$ = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Qe = (e) => typeof e == "number" && isFinite(e), _$ = (e) => vu(e) === "[object Date]", Xn = (e) => vu(e) === "[object RegExp]", Ea = (e) => ye(e) && Object.keys(e).length === 0, et = Object.assign;
let di;
const jt = () => di || (di = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function fi(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const b$ = Object.prototype.hasOwnProperty;
function js(e, t) {
  return b$.call(e, t);
}
const Ge = Array.isArray, Be = (e) => typeof e == "function", re = (e) => typeof e == "string", Pe = (e) => typeof e == "boolean", $e = (e) => e !== null && typeof e == "object", fu = Object.prototype.toString, vu = (e) => fu.call(e), ye = (e) => {
  if (!$e(e))
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t.constructor === Object;
}, y$ = (e) => e == null ? "" : Ge(e) || ye(e) && e.toString === fu ? JSON.stringify(e, null, 2) : String(e);
function D$(e, t = "") {
  return e.reduce((n, r, s) => s === 0 ? n + r : n + t + r, "");
}
const vi = 2;
function w$(e, t = 0, n = e.length) {
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
function E$(e) {
  pi[e] || (pi[e] = !0, mn(e));
}
function O$() {
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
function $$(e, t, n) {
  return { line: e, column: t, offset: n };
}
function Ka(e, t, n) {
  const r = { start: e, end: t };
  return n != null && (r.source = n), r;
}
const k$ = /\{([0-9a-zA-Z]+)\}/g;
function N$(e, ...t) {
  return t.length === 1 && T$(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(k$, (n, r) => t.hasOwnProperty(r) ? t[r] : "");
}
const pu = Object.assign, mi = (e) => typeof e == "string", T$ = (e) => e !== null && typeof e == "object";
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
}, I$ = {
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
function ir(e, t, n = {}) {
  const { domain: r, messages: s, args: a } = n, o = N$((s || I$)[e] || "", ...a || []), i = new SyntaxError(String(o));
  return i.code = e, t && (i.location = t), i.domain = r, i;
}
function C$(e) {
  throw e;
}
const M$ = /<\/?[\w\s="/.':;#-\/]+>/, P$ = (e) => M$.test(e), Ut = " ", A$ = "\r", nt = `
`, L$ = String.fromCharCode(8232), S$ = String.fromCharCode(8233);
function x$(e) {
  const t = e;
  let n = 0, r = 1, s = 1, a = 0;
  const o = (x) => t[x] === A$ && t[x + 1] === nt, i = (x) => t[x] === nt, l = (x) => t[x] === S$, u = (x) => t[x] === L$, c = (x) => o(x) || i(x) || l(x) || u(x), p = () => n, v = () => r, d = () => s, $ = () => a, g = (x) => o(x) || l(x) || u(x) ? nt : t[x], D = () => g(n), f = () => g(n + a);
  function b() {
    return a = 0, c(n) && (r++, s = 0), o(n) && n++, n++, s++, t[n];
  }
  function k() {
    return o(n + a) && a++, a++, t[n + a];
  }
  function _() {
    n = 0, r = 1, s = 1, a = 0;
  }
  function C(x = 0) {
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
    column: d,
    peekOffset: $,
    charAt: g,
    currentChar: D,
    currentPeek: f,
    next: b,
    peek: k,
    reset: _,
    resetPeek: C,
    skipToPeek: N
  };
}
const nn = void 0, R$ = ".", hi = "'", Y$ = "tokenizer";
function F$(e, t = {}) {
  const n = t.location !== !1, r = x$(e), s = () => r.index(), a = () => $$(r.line(), r.column(), r.index()), o = a(), i = s(), l = {
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
      const ge = n ? Ka(ie.startLoc, m) : null, Ze = ir(y, ge, {
        domain: Y$,
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
  const d = (y) => v(
    y,
    14
    /* TokenTypes.EOF */
  );
  function $(y, m) {
    return y.currentChar() === m ? (y.next(), m) : (p(ce.EXPECTED_TOKEN, a(), 0, m), "");
  }
  function g(y) {
    let m = "";
    for (; y.currentPeek() === Ut || y.currentPeek() === nt; )
      m += y.currentPeek(), y.peek();
    return m;
  }
  function D(y) {
    const m = g(y);
    return y.skipToPeek(), m;
  }
  function f(y) {
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
    const Z = f(y.currentPeek());
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
  function C(y, m) {
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
    const Z = f(y.currentPeek());
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
      return ge === "{" ? f(y.peek()) : ge === "@" || ge === "%" || ge === "|" || ge === ":" || ge === "." || ge === Ut || !ge ? !1 : ge === nt ? (y.peek(), Z()) : f(ge);
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
      return Ue === "{" ? ge === "%" ? !1 : ie : Ue === "@" || !Ue ? ge === "%" ? !0 : ie : Ue === "%" ? (y.peek(), L(ie, "%", !0)) : Ue === "|" ? ge === "%" || Ze ? !0 : !(ge === Ut || ge === nt) : Ue === Ut ? (y.peek(), L(!0, Ut, Ze)) : Ue === nt ? (y.peek(), L(!0, nt, Ze)) : !0;
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
      else if (L === Ut || L === nt)
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
  function w(y) {
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
    D(y), $(y, "'");
    let m = "", L = "";
    const Z = (ge) => ge !== hi && ge !== nt;
    for (; m = X(y, Z); )
      m === "\\" ? L += Ee(y) : L += m;
    const ie = y.currentChar();
    return ie === nt || ie === nn ? (p(ce.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0), ie === nt && (y.next(), $(y, "'")), L) : ($(y, "'"), L);
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
    $(y, m);
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
    const Z = (ie) => ie !== "{" && ie !== "}" && ie !== Ut && ie !== nt;
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
  function Ie(y) {
    const m = (L = !1, Z) => {
      const ie = y.currentChar();
      return ie === "{" || ie === "%" || ie === "@" || ie === "|" || ie === "(" || ie === ")" || !ie || ie === Ut ? Z : ie === nt || ie === R$ ? (Z += ie, y.next(), m(L, Z)) : (Z += ie, y.next(), m(!0, Z));
    };
    return m(!1, "");
  }
  function Oe(y) {
    D(y);
    const m = $(
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
        return m.braceNest > 0 && p(ce.UNTERMINATED_CLOSING_BRACE, a(), 0), L = Ye(y, m) || d(m), m.braceNest = 0, L;
      default:
        let ie = !0, ge = !0, Ze = !0;
        if (S(y))
          return m.braceNest > 0 && p(ce.UNTERMINATED_CLOSING_BRACE, a(), 0), L = v(m, 1, Oe(y)), m.braceNest = 0, m.inLinked = !1, L;
        if (m.braceNest > 0 && (m.currentType === 5 || m.currentType === 6 || m.currentType === 7))
          return p(ce.UNTERMINATED_CLOSING_BRACE, a(), 0), m.braceNest = 0, Re(y, m);
        if (ie = k(y, m))
          return L = v(m, 5, w(y)), D(y), L;
        if (ge = _(y, m))
          return L = v(m, 6, q(y)), D(y), L;
        if (Ze = C(y, m))
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
    switch ((L === 8 || L === 9 || L === 12 || L === 10) && (ie === nt || ie === Ut) && p(ce.INVALID_LINKED_FORMAT, a(), 0), ie) {
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
        return S(y) ? (Z = v(m, 1, Oe(y)), m.braceNest = 0, m.inLinked = !1, Z) : N(y, m) || P(y, m) ? (D(y), Ye(y, m)) : x(y, m) ? (D(y), v(m, 12, he(y))) : A(y, m) ? (D(y), ie === "{" ? be(y, m) || Z : v(m, 11, Ie(y))) : (L === 8 && p(ce.INVALID_LINKED_FORMAT, a(), 0), m.braceNest = 0, m.inLinked = !1, Re(y, m));
    }
  }
  function Re(y, m) {
    let L = {
      type: 14
      /* TokenTypes.EOF */
    };
    if (m.braceNest > 0)
      return be(y, m) || d(m);
    if (m.inLinked)
      return Ye(y, m) || d(m);
    switch (y.currentChar()) {
      case "{":
        return be(y, m) || d(m);
      case "}":
        return p(ce.UNBALANCED_CLOSING_BRACE, a(), 0), y.next(), v(
          m,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return Ye(y, m) || d(m);
      default:
        if (S(y))
          return L = v(m, 1, Oe(y)), m.braceNest = 0, m.inLinked = !1, L;
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
const V$ = "parser", U$ = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function j$(e, t, n) {
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
function B$(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function r(f, b, k, _, ...C) {
    const N = f.currentPosition();
    if (N.offset += _, N.column += _, n) {
      const x = t ? Ka(k, N) : null, P = ir(b, x, {
        domain: V$,
        args: C
      });
      n(P);
    }
  }
  function s(f, b, k) {
    const _ = { type: f };
    return t && (_.start = b, _.end = b, _.loc = { start: k, end: k }), _;
  }
  function a(f, b, k, _) {
    _ && (f.type = _), t && (f.end = b, f.loc && (f.loc.end = k));
  }
  function o(f, b) {
    const k = f.context(), _ = s(3, k.offset, k.startLoc);
    return _.value = b, a(_, f.currentOffset(), f.currentPosition()), _;
  }
  function i(f, b) {
    const k = f.context(), { lastOffset: _, lastStartLoc: C } = k, N = s(5, _, C);
    return N.index = parseInt(b, 10), f.nextToken(), a(N, f.currentOffset(), f.currentPosition()), N;
  }
  function l(f, b) {
    const k = f.context(), { lastOffset: _, lastStartLoc: C } = k, N = s(4, _, C);
    return N.key = b, f.nextToken(), a(N, f.currentOffset(), f.currentPosition()), N;
  }
  function u(f, b) {
    const k = f.context(), { lastOffset: _, lastStartLoc: C } = k, N = s(9, _, C);
    return N.value = b.replace(U$, j$), f.nextToken(), a(N, f.currentOffset(), f.currentPosition()), N;
  }
  function c(f) {
    const b = f.nextToken(), k = f.context(), { lastOffset: _, lastStartLoc: C } = k, N = s(8, _, C);
    return b.type !== 12 ? (r(f, ce.UNEXPECTED_EMPTY_LINKED_MODIFIER, k.lastStartLoc, 0), N.value = "", a(N, _, C), {
      nextConsumeToken: b,
      node: N
    }) : (b.value == null && r(f, ce.UNEXPECTED_LEXICAL_ANALYSIS, k.lastStartLoc, 0, At(b)), N.value = b.value || "", a(N, f.currentOffset(), f.currentPosition()), {
      node: N
    });
  }
  function p(f, b) {
    const k = f.context(), _ = s(7, k.offset, k.startLoc);
    return _.value = b, a(_, f.currentOffset(), f.currentPosition()), _;
  }
  function v(f) {
    const b = f.context(), k = s(6, b.offset, b.startLoc);
    let _ = f.nextToken();
    if (_.type === 9) {
      const C = c(f);
      k.modifier = C.node, _ = C.nextConsumeToken || f.nextToken();
    }
    switch (_.type !== 10 && r(f, ce.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, At(_)), _ = f.nextToken(), _.type === 2 && (_ = f.nextToken()), _.type) {
      case 11:
        _.value == null && r(f, ce.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, At(_)), k.key = p(f, _.value || "");
        break;
      case 5:
        _.value == null && r(f, ce.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, At(_)), k.key = l(f, _.value || "");
        break;
      case 6:
        _.value == null && r(f, ce.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, At(_)), k.key = i(f, _.value || "");
        break;
      case 7:
        _.value == null && r(f, ce.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, At(_)), k.key = u(f, _.value || "");
        break;
      default:
        r(f, ce.UNEXPECTED_EMPTY_LINKED_KEY, b.lastStartLoc, 0);
        const C = f.context(), N = s(7, C.offset, C.startLoc);
        return N.value = "", a(N, C.offset, C.startLoc), k.key = N, a(k, C.offset, C.startLoc), {
          nextConsumeToken: _,
          node: k
        };
    }
    return a(k, f.currentOffset(), f.currentPosition()), {
      node: k
    };
  }
  function d(f) {
    const b = f.context(), k = b.currentType === 1 ? f.currentOffset() : b.offset, _ = b.currentType === 1 ? b.endLoc : b.startLoc, C = s(2, k, _);
    C.items = [];
    let N = null;
    do {
      const A = N || f.nextToken();
      switch (N = null, A.type) {
        case 0:
          A.value == null && r(f, ce.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, At(A)), C.items.push(o(f, A.value || ""));
          break;
        case 6:
          A.value == null && r(f, ce.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, At(A)), C.items.push(i(f, A.value || ""));
          break;
        case 5:
          A.value == null && r(f, ce.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, At(A)), C.items.push(l(f, A.value || ""));
          break;
        case 7:
          A.value == null && r(f, ce.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, At(A)), C.items.push(u(f, A.value || ""));
          break;
        case 8:
          const S = v(f);
          C.items.push(S.node), N = S.nextConsumeToken || null;
          break;
      }
    } while (b.currentType !== 14 && b.currentType !== 1);
    const x = b.currentType === 1 ? b.lastOffset : f.currentOffset(), P = b.currentType === 1 ? b.lastEndLoc : f.currentPosition();
    return a(C, x, P), C;
  }
  function $(f, b, k, _) {
    const C = f.context();
    let N = _.items.length === 0;
    const x = s(1, b, k);
    x.cases = [], x.cases.push(_);
    do {
      const P = d(f);
      N || (N = P.items.length === 0), x.cases.push(P);
    } while (C.currentType !== 14);
    return N && r(f, ce.MUST_HAVE_MESSAGES_IN_PLURAL, k, 0), a(x, f.currentOffset(), f.currentPosition()), x;
  }
  function g(f) {
    const b = f.context(), { offset: k, startLoc: _ } = b, C = d(f);
    return b.currentType === 14 ? C : $(f, k, _, C);
  }
  function D(f) {
    const b = F$(f, pu({}, e)), k = b.context(), _ = s(0, k.offset, k.startLoc);
    return t && _.loc && (_.loc.source = f), _.body = g(b), e.onCacheKey && (_.cacheKey = e.onCacheKey(f)), k.currentType !== 14 && r(b, ce.UNEXPECTED_LEXICAL_ANALYSIS, k.lastStartLoc, 0, f[k.offset] || ""), a(_, b.currentOffset(), b.currentPosition()), _;
  }
  return { parse: D };
}
function At(e) {
  if (e.type === 14)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function H$(e, t = {}) {
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
function W$(e, t = {}) {
  const n = H$(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && Hs(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function G$(e) {
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
const K$ = "minifier";
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
      throw ir(ce.UNHANDLED_MINIFIER_NODE_TYPE, null, {
        domain: K$,
        args: [e.type]
      });
  }
  delete e.type;
}
const q$ = "parser";
function z$(e, t) {
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
  function u(D, f) {
    i.code += D;
  }
  function c(D, f = !0) {
    const b = f ? s : "";
    u(a ? b + "  ".repeat(D) : b);
  }
  function p(D = !0) {
    const f = ++i.indentLevel;
    D && c(f);
  }
  function v(D = !0) {
    const f = --i.indentLevel;
    D && c(f);
  }
  function d() {
    c(i.indentLevel);
  }
  return {
    context: l,
    push: u,
    indent: p,
    deindent: v,
    newline: d,
    helper: (D) => `_${D}`,
    needIndent: () => i.needIndent
  };
}
function X$(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), Zn(e, t.key), t.modifier ? (e.push(", "), Zn(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function Z$(e, t) {
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
function J$(e, t) {
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
function Q$(e, t) {
  t.body ? Zn(e, t.body) : e.push("null");
}
function Zn(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      Q$(e, t);
      break;
    case 1:
      J$(e, t);
      break;
    case 2:
      Z$(e, t);
      break;
    case 6:
      X$(e, t);
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
      throw ir(ce.UNHANDLED_CODEGEN_NODE_TYPE, null, {
        domain: q$,
        args: [t.type]
      });
  }
}
const ek = (e, t = {}) => {
  const n = mi(t.mode) ? t.mode : "normal", r = mi(t.filename) ? t.filename : "message.intl", s = !!t.sourceMap, a = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, o = t.needIndent ? t.needIndent : n !== "arrow", i = e.helpers || [], l = z$(e, {
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
  const n = pu({}, t), r = !!n.jit, s = !!n.minify, a = n.optimize == null ? !0 : n.optimize, i = B$(n).parse(e);
  return r ? (a && G$(i), s && Pn(i), { ast: i, code: "" }) : (W$(i, n), ek(i, n));
}
/*!
  * core-base v9.5.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */
function nk() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (jt().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (jt().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (jt().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
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
  function d() {
    const $ = e[n + 1];
    if (r === 5 && $ === "'" || r === 6 && $ === '"')
      return n++, i = "\\" + $, v[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; r !== null; )
    if (n++, a = e[n], !(a === "\\" && d())) {
      if (l = ok(a), p = hn[r], u = p[l] || p.l || 8, u === 8 || (r = u[0], u[1] !== void 0 && (c = v[u[1]], c && (i = a, c() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const bi = /* @__PURE__ */ new Map();
function uk(e, t) {
  return $e(e) ? e[t] : null;
}
function ck(e, t) {
  if (!$e(e))
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
const dk = (e) => e, fk = (e) => "", vk = "text", pk = (e) => e.length === 0 ? "" : D$(e), mk = y$;
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
  const t = e.locale, n = hk(e), r = $e(e.pluralRules) && re(t) && Be(e.pluralRules[t]) ? e.pluralRules[t] : yi, s = $e(e.pluralRules) && re(t) && Be(e.pluralRules[t]) ? yi : void 0, a = (f) => f[r(n, f.length, s)], o = e.list || [], i = (f) => o[f], l = e.named || {};
  Qe(e.pluralIndex) && gk(n, l);
  const u = (f) => l[f];
  function c(f) {
    const b = Be(e.messages) ? e.messages(f) : $e(e.messages) ? e.messages[f] : !1;
    return b || (e.parent ? e.parent.message(f) : fk);
  }
  const p = (f) => e.modifiers ? e.modifiers[f] : dk, v = ye(e.processor) && Be(e.processor.normalize) ? e.processor.normalize : pk, d = ye(e.processor) && Be(e.processor.interpolate) ? e.processor.interpolate : mk, $ = ye(e.processor) && re(e.processor.type) ? e.processor.type : vk, D = {
    list: i,
    named: u,
    plural: a,
    linked: (f, ...b) => {
      const [k, _] = b;
      let C = "text", N = "";
      b.length === 1 ? $e(k) ? (N = k.modifier || N, C = k.type || C) : re(k) && (N = k || N) : b.length === 2 && (re(k) && (N = k || N), re(_) && (C = _ || C));
      const x = c(f)(D), P = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        C === "vnode" && Ge(x) && N ? x[0] : x
      );
      return N ? p(N)(P, C) : P;
    },
    message: c,
    type: $,
    interpolate: d,
    normalize: v,
    values: et({}, o, l)
  };
  return D;
}
let Nr = null;
function bk(e) {
  Nr = e;
}
function yk(e, t, n) {
  Nr && Nr.emit("i18n:init", {
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
  return (t) => Nr && Nr.emit(e, t);
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
function $n(e, ...t) {
  return Us(Ek[e], ...t);
}
function Ws(e, t) {
  return t.locale != null ? Di(t.locale) : Di(e.locale);
}
let La;
function Di(e) {
  return re(e) ? e : La != null && e.resolvedOnce ? La : La = e();
}
function Ok(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...Ge(t) ? t : $e(t) ? Object.keys(t) : re(t) ? [t] : [n]
  ])];
}
function hu(e, t, n) {
  const r = re(n) ? n : Tr, s = e;
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
  for (let s = 0; s < t.length && Pe(r); s++) {
    const a = t[s];
    re(a) && (r = $k(e, t[s], n));
  }
  return r;
}
function $k(e, t, n) {
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
const Nk = "9.5.0", Oa = -1, Tr = "en-US", pa = "", Ei = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Tk() {
  return {
    upper: (e, t) => t === "text" && re(e) ? e.toUpperCase() : t === "vnode" && $e(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && re(e) ? e.toLowerCase() : t === "vnode" && $e(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && re(e) ? Ei(e) : t === "vnode" && $e(e) && "__v_isVNode" in e ? Ei(e.children) : e
  };
}
let gu;
function Oi(e) {
  gu = e;
}
let _u;
function Ik(e) {
  _u = e;
}
let bu;
function Ck(e) {
  bu = e;
}
let yu = null;
const $i = (e) => {
  yu = e;
}, Mk = () => yu;
let Du = null;
const ki = (e) => {
  Du = e;
}, Pk = () => Du;
let Ni = 0;
function Ak(e = {}) {
  const t = Be(e.onWarn) ? e.onWarn : mn, n = re(e.version) ? e.version : Nk, r = re(e.locale) || Be(e.locale) ? e.locale : Tr, s = Be(r) ? Tr : r, a = Ge(e.fallbackLocale) || ye(e.fallbackLocale) || re(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : s, o = ye(e.messages) ? e.messages : { [s]: {} }, i = ye(e.datetimeFormats) ? e.datetimeFormats : { [s]: {} }, l = ye(e.numberFormats) ? e.numberFormats : { [s]: {} }, u = et({}, e.modifiers || {}, Tk()), c = e.pluralRules || {}, p = Be(e.missing) ? e.missing : null, v = Pe(e.missingWarn) || Xn(e.missingWarn) ? e.missingWarn : !0, d = Pe(e.fallbackWarn) || Xn(e.fallbackWarn) ? e.fallbackWarn : !0, $ = !!e.fallbackFormat, g = !!e.unresolving, D = Be(e.postTranslation) ? e.postTranslation : null, f = ye(e.processor) ? e.processor : null, b = Pe(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, k = !!e.escapeParameter, _ = Be(e.messageCompiler) ? e.messageCompiler : gu;
  process.env.NODE_ENV !== "production" && Be(e.messageCompiler) && E$($n(rt.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
  const C = Be(e.messageResolver) ? e.messageResolver : _u || uk, N = Be(e.localeFallbacker) ? e.localeFallbacker : bu || Ok, x = $e(e.fallbackContext) ? e.fallbackContext : void 0, P = e, A = $e(P.__datetimeFormatters) ? P.__datetimeFormatters : /* @__PURE__ */ new Map(), S = $e(P.__numberFormatters) ? P.__numberFormatters : /* @__PURE__ */ new Map(), j = $e(P.__meta) ? P.__meta : {};
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
    fallbackWarn: d,
    fallbackFormat: $,
    unresolving: g,
    postTranslation: D,
    processor: f,
    warnHtmlMessage: b,
    escapeParameter: k,
    messageCompiler: _,
    messageResolver: C,
    localeFallbacker: N,
    fallbackContext: x,
    onWarn: t,
    __meta: j
  };
  return Y.datetimeFormats = i, Y.numberFormats = l, Y.__datetimeFormatters = A, Y.__numberFormatters = S, process.env.NODE_ENV !== "production" && (Y.__v_emitter = P.__v_emitter != null ? P.__v_emitter : void 0), (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && yk(Y, n, j), Y;
}
function $a(e, t) {
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
    return process.env.NODE_ENV !== "production" && wu(r, t) && o($n(rt.NOT_FOUND_KEY, { key: t, locale: n })), t;
}
function pr(e, t, n) {
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
const Eu = ce.__EXTEND_POINT__, jr = Bs(Eu), gt = {
  INVALID_ARGUMENT: Eu,
  INVALID_DATE_ARGUMENT: jr(),
  INVALID_ISO_DATE_ARGUMENT: jr(),
  NOT_SUPPORT_NON_STRING_MESSAGE: jr(),
  __EXTEND_POINT__: jr()
  // 22
};
function yn(e) {
  return ir(e, null, process.env.NODE_ENV !== "production" ? { messages: Sk } : void 0);
}
const Sk = {
  [gt.INVALID_ARGUMENT]: "Invalid arguments",
  [gt.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [gt.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
  [gt.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message"
}, xk = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function Ou(e, t) {
  t && P$(e) && mn(Us(xk, { source: e }));
}
const $u = (e) => e;
let Fn = /* @__PURE__ */ Object.create(null);
const Jn = (e) => $e(e) && (e.t === 0 || e.type === 0) && ("b" in e || "body" in e);
function ku(e, t = {}) {
  let n = !1;
  const r = t.onError || C$;
  return t.onError = (s) => {
    n = !0, r(s);
  }, { ...tk(e, t), detectError: n };
}
const Rk = (e, t) => {
  if (!re(e))
    throw yn(gt.NOT_SUPPORT_NON_STRING_MESSAGE);
  {
    const n = Pe(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && Ou(e, n);
    const s = (t.onCacheKey || $u)(e), a = Fn[s];
    if (a)
      return a;
    const { code: o, detectError: i } = ku(e, t), l = new Function(`return ${o}`)();
    return i ? l : Fn[s] = l;
  }
};
function Yk(e, t) {
  if (__INTLIFY_JIT_COMPILATION__ && !__INTLIFY_DROP_MESSAGE_COMPILER__ && re(e)) {
    const n = Pe(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && Ou(e, n);
    const s = (t.onCacheKey || $u)(e), a = Fn[s];
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
const Ii = () => "", Nt = (e) => Be(e);
function Ci(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: s, messageCompiler: a, fallbackLocale: o, messages: i } = e, [l, u] = za(...t), c = Pe(u.missingWarn) ? u.missingWarn : e.missingWarn, p = Pe(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, v = Pe(u.escapeParameter) ? u.escapeParameter : e.escapeParameter, d = !!u.resolvedMessage, $ = re(u.default) || Pe(u.default) ? Pe(u.default) ? a ? l : () => l : u.default : n ? a ? l : () => l : "", g = n || $ !== "", D = Ws(e, u);
  v && Fk(u);
  let [f, b, k] = d ? [
    l,
    D,
    i[D] || {}
  ] : Nu(e, l, D, o, p, c), _ = f, C = l;
  if (!d && !(re(_) || Jn(_) || Nt(_)) && g && (_ = $, C = _), !d && (!(re(_) || Jn(_) || Nt(_)) || !re(b)))
    return s ? Oa : l;
  if (process.env.NODE_ENV !== "production" && re(_) && e.messageCompiler == null)
    return mn(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${l}'.`), l;
  let N = !1;
  const x = () => {
    N = !0;
  }, P = Nt(_) ? _ : Tu(e, l, b, _, C, x);
  if (N)
    return _;
  const A = Bk(e, b, k, u), S = _k(A), j = Vk(e, P, S), Y = r ? r(j, l) : j;
  if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    const X = {
      timestamp: Date.now(),
      key: re(l) ? l : Nt(_) ? _.key : "",
      locale: b || (Nt(_) ? _.locale : ""),
      format: re(_) ? _ : Nt(_) ? _.source : "",
      message: Y
    };
    X.meta = et({}, e.__meta, Mk() || {}), Dk(X);
  }
  return Y;
}
function Fk(e) {
  Ge(e.list) ? e.list = e.list.map((t) => re(t) ? fi(t) : t) : $e(e.named) && Object.keys(e.named).forEach((t) => {
    re(e.named[t]) && (e.named[t] = fi(e.named[t]));
  });
}
function Nu(e, t, n, r, s, a) {
  const { messages: o, onWarn: i, messageResolver: l, localeFallbacker: u } = e, c = u(e, r, n);
  let p = {}, v, d = null, $ = n, g = null;
  const D = "translate";
  for (let f = 0; f < c.length; f++) {
    if (v = g = c[f], process.env.NODE_ENV !== "production" && n !== v && $a(s, t) && i($n(rt.FALLBACK_TO_TRANSLATE, {
      key: t,
      target: v
    })), process.env.NODE_ENV !== "production" && n !== v) {
      const N = e.__v_emitter;
      N && N.emit("fallback", {
        type: D,
        key: t,
        from: $,
        to: g,
        groupId: `${D}:${t}`
      });
    }
    p = o[v] || {};
    let b = null, k, _;
    if (process.env.NODE_ENV !== "production" && dn && (b = window.performance.now(), k = "intlify-message-resolve-start", _ = "intlify-message-resolve-end", dt && dt(k)), (d = l(p, t)) === null && (d = p[t]), process.env.NODE_ENV !== "production" && dn) {
      const N = window.performance.now(), x = e.__v_emitter;
      x && b && d && x.emit("message-resolve", {
        type: "message-resolve",
        key: t,
        message: d,
        time: N - b,
        groupId: `${D}:${t}`
      }), k && _ && dt && On && (dt(_), On("intlify message resolve", k, _));
    }
    if (re(d) || Jn(d) || Nt(d))
      break;
    const C = Gs(
      e,
      // eslint-disable-line @typescript-eslint/no-explicit-any
      t,
      v,
      a,
      D
    );
    C !== t && (d = C), $ = g;
  }
  return [d, v, p];
}
function Tu(e, t, n, r, s, a) {
  const { messageCompiler: o, warnHtmlMessage: i } = e;
  if (Nt(r)) {
    const v = r;
    return v.locale = v.locale || n, v.key = v.key || t, v;
  }
  if (o == null) {
    const v = () => r;
    return v.locale = n, v.key = t, v;
  }
  let l = null, u, c;
  process.env.NODE_ENV !== "production" && dn && (l = window.performance.now(), u = "intlify-message-compilation-start", c = "intlify-message-compilation-end", dt && dt(u));
  const p = o(r, Uk(e, n, s, r, i, a));
  if (process.env.NODE_ENV !== "production" && dn) {
    const v = window.performance.now(), d = e.__v_emitter;
    d && l && d.emit("message-compilation", {
      type: "message-compilation",
      message: r,
      time: v - l,
      groupId: `translate:${t}`
    }), u && c && dt && On && (dt(c), On("intlify message compilation", u, c));
  }
  return p.locale = n, p.key = t, p.source = r, p;
}
function Vk(e, t, n) {
  let r = null, s, a;
  process.env.NODE_ENV !== "production" && dn && (r = window.performance.now(), s = "intlify-message-evaluation-start", a = "intlify-message-evaluation-end", dt && dt(s));
  const o = t(n);
  if (process.env.NODE_ENV !== "production" && dn) {
    const i = window.performance.now(), l = e.__v_emitter;
    l && r && l.emit("message-evaluation", {
      type: "message-evaluation",
      value: o,
      time: i - r,
      groupId: `translate:${t.key}`
    }), s && a && dt && On && (dt(a), On("intlify message evaluation", s, a));
  }
  return o;
}
function za(...e) {
  const [t, n, r] = e, s = {};
  if (!re(t) && !Qe(t) && !Nt(t) && !Jn(t))
    throw yn(gt.INVALID_ARGUMENT);
  const a = Qe(t) ? String(t) : (Nt(t), t);
  return Qe(n) ? s.plural = n : re(n) ? s.default = n : ye(n) && !Ea(n) ? s.named = n : Ge(n) && (s.list = n), Qe(r) ? s.plural = r : re(r) ? s.default = r : ye(r) && et(s, r), [a, s];
}
function Uk(e, t, n, r, s, a) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: s,
    onError: (o) => {
      if (a && a(o), process.env.NODE_ENV !== "production") {
        const i = jk(r), l = `Message compilation error: ${o.message}`, u = o.location && i && w$(i, o.location.start.offset, o.location.end.offset), c = e.__v_emitter;
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
    onCacheKey: (o) => h$(t, n, o)
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
    messages: (d) => {
      let $ = o(n, d);
      if ($ == null && c) {
        const [, , g] = Nu(c, d, t, i, l, u);
        $ = o(g, d);
      }
      if (re($) || Jn($)) {
        let g = !1;
        const f = Tu(e, d, t, $, d, () => {
          g = !0;
        });
        return g ? Ii : f;
      } else
        return Nt($) ? $ : Ii;
    }
  };
  return e.processor && (v.processor = e.processor), r.list && (v.list = r.list), r.named && (v.named = r.named), Qe(r.plural) && (v.pluralIndex = r.plural), v;
}
const Mi = typeof Intl < "u", Iu = {
  dateTimeFormat: Mi && typeof Intl.DateTimeFormat < "u",
  numberFormat: Mi && typeof Intl.NumberFormat < "u"
};
function Pi(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: s, onWarn: a, localeFallbacker: o } = e, { __datetimeFormatters: i } = e;
  if (process.env.NODE_ENV !== "production" && !Iu.dateTimeFormat)
    return a($n(rt.CANNOT_FORMAT_DATE)), pa;
  const [l, u, c, p] = Xa(...t), v = Pe(c.missingWarn) ? c.missingWarn : e.missingWarn, d = Pe(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn, $ = !!c.part, g = Ws(e, c), D = o(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    s,
    g
  );
  if (!re(l) || l === "")
    return new Intl.DateTimeFormat(g, p).format(u);
  let f = {}, b, k = null, _ = g, C = null;
  const N = "datetime format";
  for (let A = 0; A < D.length; A++) {
    if (b = C = D[A], process.env.NODE_ENV !== "production" && g !== b && $a(d, l) && a($n(rt.FALLBACK_TO_DATE_FORMAT, {
      key: l,
      target: b
    })), process.env.NODE_ENV !== "production" && g !== b) {
      const S = e.__v_emitter;
      S && S.emit("fallback", {
        type: N,
        key: l,
        from: _,
        to: C,
        groupId: `${N}:${l}`
      });
    }
    if (f = n[b] || {}, k = f[l], ye(k))
      break;
    Gs(e, l, b, v, N), _ = C;
  }
  if (!ye(k) || !re(b))
    return r ? Oa : l;
  let x = `${b}__${l}`;
  Ea(p) || (x = `${x}__${JSON.stringify(p)}`);
  let P = i.get(x);
  return P || (P = new Intl.DateTimeFormat(b, et({}, k, p)), i.set(x, P)), $ ? P.formatToParts(u) : P.format(u);
}
const Cu = [
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
      throw yn(gt.INVALID_ISO_DATE_ARGUMENT);
    const u = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
    i = new Date(u);
    try {
      i.toISOString();
    } catch {
      throw yn(gt.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (_$(t)) {
    if (isNaN(t.getTime()))
      throw yn(gt.INVALID_DATE_ARGUMENT);
    i = t;
  } else if (Qe(t))
    i = t;
  else
    throw yn(gt.INVALID_ARGUMENT);
  return re(n) ? a.key = n : ye(n) && Object.keys(n).forEach((l) => {
    Cu.includes(l) ? o[l] = n[l] : a[l] = n[l];
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
  if (process.env.NODE_ENV !== "production" && !Iu.numberFormat)
    return a($n(rt.CANNOT_FORMAT_NUMBER)), pa;
  const [l, u, c, p] = Za(...t), v = Pe(c.missingWarn) ? c.missingWarn : e.missingWarn, d = Pe(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn, $ = !!c.part, g = Ws(e, c), D = o(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    s,
    g
  );
  if (!re(l) || l === "")
    return new Intl.NumberFormat(g, p).format(u);
  let f = {}, b, k = null, _ = g, C = null;
  const N = "number format";
  for (let A = 0; A < D.length; A++) {
    if (b = C = D[A], process.env.NODE_ENV !== "production" && g !== b && $a(d, l) && a($n(rt.FALLBACK_TO_NUMBER_FORMAT, {
      key: l,
      target: b
    })), process.env.NODE_ENV !== "production" && g !== b) {
      const S = e.__v_emitter;
      S && S.emit("fallback", {
        type: N,
        key: l,
        from: _,
        to: C,
        groupId: `${N}:${l}`
      });
    }
    if (f = n[b] || {}, k = f[l], ye(k))
      break;
    Gs(e, l, b, v, N), _ = C;
  }
  if (!ye(k) || !re(b))
    return r ? Oa : l;
  let x = `${b}__${l}`;
  Ea(p) || (x = `${x}__${JSON.stringify(p)}`);
  let P = i.get(x);
  return P || (P = new Intl.NumberFormat(b, et({}, k, p)), i.set(x, P)), $ ? P.formatToParts(u) : P.format(u);
}
const Mu = [
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
    throw yn(gt.INVALID_ARGUMENT);
  const i = t;
  return re(n) ? a.key = n : ye(n) && Object.keys(n).forEach((l) => {
    Mu.includes(l) ? o[l] = n[l] : a[l] = n[l];
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
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (jt().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (jt().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (jt().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (jt().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (jt().__INTLIFY_PROD_DEVTOOLS__ = !1);
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
const Au = gt.__EXTEND_POINT__, ot = Bs(Au), Se = {
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
function Wt(e, ...t) {
  return ir(e, null, process.env.NODE_ENV !== "production" ? { messages: Kk, args: t } : void 0);
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
  if (!$e(e))
    return e;
  for (const t in e)
    if (js(e, t))
      if (!t.includes("."))
        $e(e[t]) && as(e[t]);
      else {
        const n = t.split("."), r = n.length - 1;
        let s = e, a = !1;
        for (let o = 0; o < r; o++) {
          if (n[o] in s || (s[n[o]] = {}), !$e(s[n[o]])) {
            process.env.NODE_ENV !== "production" && mn(Ks(ht.IGNORE_OBJ_FLATTEN, {
              key: n[o]
            })), a = !0;
            break;
          }
          s = s[n[o]];
        }
        a || (s[n[r]] = e[t], delete e[t]), $e(s[n[r]]) && as(s[n[r]]);
      }
  return e;
}
function qs(e, t) {
  const { messages: n, __i18n: r, messageResolver: s, flatJson: a } = t, o = ye(n) ? n : Ge(r) ? {} : { [e]: {} };
  if (Ge(r) && r.forEach((i) => {
    if ("locale" in i && "resource" in i) {
      const { locale: l, resource: u } = i;
      l ? (o[l] = o[l] || {}, wr(u, o[l])) : wr(u, o);
    } else
      re(i) && wr(JSON.parse(i), o);
  }), s == null && a)
    for (const i in o)
      js(o, i) && as(o[i]);
  return o;
}
const Br = (e) => !$e(e) || Ge(e);
function wr(e, t) {
  if (Br(e) || Br(t))
    throw Wt(Se.INVALID_VALUE);
  for (const n in e)
    js(e, n) && (Br(e[n]) || Br(t[n]) ? t[n] = e[n] : wr(e[n], t[n]));
}
function Su(e) {
  return e.type;
}
function zk(e, t, n) {
  let r = $e(t.messages) ? t.messages : {};
  "__i18nGlobal" in n && (r = qs(e.locale.value, {
    messages: r,
    __i18n: n.__i18nGlobal
  }));
  const s = Object.keys(r);
  s.length && s.forEach((a) => {
    e.mergeLocaleMessage(a, r[a]);
  });
  {
    if ($e(t.datetimeFormats)) {
      const a = Object.keys(t.datetimeFormats);
      a.length && a.forEach((o) => {
        e.mergeDateTimeFormat(o, t.datetimeFormats[o]);
      });
    }
    if ($e(t.numberFormats)) {
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
  let a = Pe(e.inheritLocale) ? e.inheritLocale : !0;
  const o = ne(
    // prettier-ignore
    n && a ? n.locale.value : re(e.locale) ? e.locale : Tr
  ), i = ne(
    // prettier-ignore
    n && a ? n.fallbackLocale.value : re(e.fallbackLocale) || Ge(e.fallbackLocale) || ye(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o.value
  ), l = ne(qs(o.value, e)), u = ne(ye(e.datetimeFormats) ? e.datetimeFormats : { [o.value]: {} }), c = ne(ye(e.numberFormats) ? e.numberFormats : { [o.value]: {} });
  let p = n ? n.missingWarn : Pe(e.missingWarn) || Xn(e.missingWarn) ? e.missingWarn : !0, v = n ? n.fallbackWarn : Pe(e.fallbackWarn) || Xn(e.fallbackWarn) ? e.fallbackWarn : !0, d = n ? n.fallbackRoot : Pe(e.fallbackRoot) ? e.fallbackRoot : !0, $ = !!e.fallbackFormat, g = Be(e.missing) ? e.missing : null, D = Be(e.missing) ? Fi(e.missing) : null, f = Be(e.postTranslation) ? e.postTranslation : null, b = n ? n.warnHtmlMessage : Pe(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, k = !!e.escapeParameter;
  const _ = n ? n.modifiers : ye(e.modifiers) ? e.modifiers : {};
  let C = e.pluralRules || n && n.pluralRules, N;
  N = (() => {
    s && ki(null);
    const R = {
      version: Hk,
      locale: o.value,
      fallbackLocale: i.value,
      messages: l.value,
      modifiers: _,
      pluralRules: C,
      missing: D === null ? void 0 : D,
      missingWarn: p,
      fallbackWarn: v,
      fallbackFormat: $,
      unresolving: !0,
      postTranslation: f === null ? void 0 : f,
      warnHtmlMessage: b,
      escapeParameter: k,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    R.datetimeFormats = u.value, R.numberFormats = c.value, R.__datetimeFormatters = ye(N) ? N.__datetimeFormatters : void 0, R.__numberFormatters = ye(N) ? N.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (R.__v_emitter = ye(N) ? N.__v_emitter : void 0);
    const H = Ak(R);
    return s && ki(H), H;
  })(), pr(N, o.value, i.value);
  function P() {
    return [
      o.value,
      i.value,
      l.value,
      u.value,
      c.value
    ];
  }
  const A = M({
    get: () => o.value,
    set: (R) => {
      o.value = R, N.locale = o.value;
    }
  }), S = M({
    get: () => i.value,
    set: (R) => {
      i.value = R, N.fallbackLocale = i.value, pr(N, o.value, R);
    }
  }), j = M(() => l.value), Y = /* @__PURE__ */ M(() => u.value), X = /* @__PURE__ */ M(() => c.value);
  function K() {
    return Be(f) ? f : null;
  }
  function U(R) {
    f = R, N.postTranslation = R;
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
  const V = (R, H, Fe, Ve, Pt, en) => {
    P();
    let wt;
    try {
      (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && $i(Xk()), s || (N.fallbackContext = n ? Pk() : void 0), wt = R(N);
    } finally {
      (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && $i(null), s || (N.fallbackContext = void 0);
    }
    if (Qe(wt) && wt === Oa) {
      const [Et, gn] = H();
      if (process.env.NODE_ENV !== "production" && n && re(Et) && W(Fe, gn) && (d && ($a(v, Et) || wu(p, Et)) && mn(Ks(ht.FALLBACK_TO_ROOT, {
        key: Et,
        type: Fe
      })), process.env.NODE_ENV !== "production")) {
        const { __v_emitter: In } = N;
        In && d && In.emit("fallback", {
          type: Fe,
          key: Et,
          to: "global",
          groupId: `${Fe}:${Et}`
        });
      }
      return n && d ? Ve(n) : Pt(Et);
    } else {
      if (en(wt))
        return wt;
      throw Wt(Se.UNEXPECTED_RETURN_TYPE);
    }
  };
  function w(...R) {
    return V((H) => Reflect.apply(Ci, null, [H, ...R]), () => za(...R), "translate", (H) => Reflect.apply(H.t, H, [...R]), (H) => H, (H) => re(H));
  }
  function q(...R) {
    const [H, Fe, Ve] = R;
    if (Ve && !$e(Ve))
      throw Wt(Se.INVALID_ARGUMENT);
    return w(H, Fe, et({ resolvedMessage: !0 }, Ve || {}));
  }
  function pe(...R) {
    return V((H) => Reflect.apply(Pi, null, [H, ...R]), () => Xa(...R), "datetime format", (H) => Reflect.apply(H.d, H, [...R]), () => pa, (H) => re(H));
  }
  function Ee(...R) {
    return V((H) => Reflect.apply(Li, null, [H, ...R]), () => Za(...R), "number format", (H) => Reflect.apply(H.n, H, [...R]), () => pa, (H) => re(H));
  }
  function ee(R) {
    return R.map((H) => re(H) || Qe(H) || Pe(H) ? xi(String(H)) : H);
  }
  const he = {
    normalize: ee,
    interpolate: (R) => R,
    type: "vnode"
  };
  function Ie(...R) {
    return V(
      (H) => {
        let Fe;
        const Ve = H;
        try {
          Ve.processor = he, Fe = Reflect.apply(Ci, null, [Ve, ...R]);
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
  function Oe(...R) {
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
    C = R, N.pluralRules = C;
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
      const Pt = l.value[Fe[Ve]] || {}, en = N.messageResolver(Pt, R);
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
    l.value[R] = l.value[R] || {}, wr(H, l.value[R]), N.messages = l.value;
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
  function Mt(R, H) {
    c.value[R] = et(c.value[R] || {}, H), N.numberFormats = c.value, Si(N, R, H);
  }
  Yi++, n && dn && (ke(n.locale, (R) => {
    a && (o.value = R, N.locale = R, pr(N, o.value, i.value));
  }), ke(n.fallbackLocale, (R) => {
    a && (i.value = R, N.fallbackLocale = R, pr(N, o.value, i.value));
  }));
  const Ne = {
    id: Yi,
    locale: A,
    fallbackLocale: S,
    get inheritLocale() {
      return a;
    },
    set inheritLocale(R) {
      a = R, R && n && (o.value = n.locale.value, i.value = n.fallbackLocale.value, pr(N, o.value, i.value));
    },
    get availableLocales() {
      return Object.keys(l.value).sort();
    },
    messages: j,
    get modifiers() {
      return _;
    },
    get pluralRules() {
      return C || {};
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
      return d;
    },
    set fallbackRoot(R) {
      d = R;
    },
    get fallbackFormat() {
      return $;
    },
    set fallbackFormat(R) {
      $ = R, N.fallbackFormat = $;
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
    t: w,
    getLocaleMessage: m,
    setLocaleMessage: L,
    mergeLocaleMessage: Z,
    getPostTranslationHandler: K,
    setPostTranslationHandler: U,
    getMissingHandler: F,
    setMissingHandler: Q,
    [qk]: Ye
  };
  return Ne.datetimeFormats = Y, Ne.numberFormats = X, Ne.rt = q, Ne.te = Re, Ne.tm = y, Ne.d = pe, Ne.n = Ee, Ne.getDateTimeFormat = ie, Ne.setDateTimeFormat = ge, Ne.mergeDateTimeFormat = Ze, Ne.getNumberFormat = Ue, Ne.setNumberFormat = vt, Ne.mergeNumberFormat = Mt, Ne[Lu] = r, Ne[Ja] = Ie, Ne[Qa] = be, Ne[es] = Oe, process.env.NODE_ENV !== "production" && (Ne[ts] = (R) => {
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
    e.locale && (o.locale = e.locale), re(e.format) ? o.key = e.format : $e(e.format) && (re(e.format.key) && (o.key = e.format.key), i = Object.keys(e.format).reduce((v, d) => n.includes(d) ? et({}, v, { [d]: e.format[d] }) : v, {}));
    const l = r(e.value, o, i);
    let u = [o.key];
    Ge(l) ? u = l.map((v, d) => {
      const $ = s[v.type], g = $ ? $({ [v.type]: v.value, index: d, parts: l }) : [v.value];
      return Qk(g) && (g[0].key = `${v.type}-${d}`), g;
    }) : re(l) && (u = [l]);
    const c = et({}, a), p = re(e.tag) || $e(e.tag) ? e.tag : xu();
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
    throw Wt(Se.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw Wt(Se.NOT_INSTALLED);
  const n = tN(t), r = rN(n), s = Su(t), a = nN(e, s);
  if (__VUE_I18N_LEGACY_API__ && n.mode === "legacy" && !e.__useComponent) {
    if (!n.allowComposition)
      throw Wt(Se.NOT_AVAILABLE_IN_LEGACY_MODE);
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
    const t = vn(e.isCE ? eN : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t)
      throw Wt(e.isCE ? Se.NOT_INSTALLED_WITH_PROVIDE : Se.UNEXPECTED_ERROR);
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
  fn(() => {
    if (process.env.NODE_ENV !== "production" && t.vnode.el) {
      t.vnode.el.__VUE_I18N__ = n, r = O$();
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
    throw Wt(Se.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
  const o = Pe(r.inheritLocale) ? r.inheritLocale : !re(r.locale), i = ne(
    // prettier-ignore
    !s || o ? n.locale.value : re(r.locale) ? r.locale : Tr
  ), l = ne(
    // prettier-ignore
    !s || o ? n.fallbackLocale.value : re(r.fallbackLocale) || Ge(r.fallbackLocale) || ye(r.fallbackLocale) || r.fallbackLocale === !1 ? r.fallbackLocale : i.value
  ), u = ne(qs(i.value, r)), c = ne(ye(r.datetimeFormats) ? r.datetimeFormats : { [i.value]: {} }), p = ne(ye(r.numberFormats) ? r.numberFormats : { [i.value]: {} }), v = s ? n.missingWarn : Pe(r.missingWarn) || Xn(r.missingWarn) ? r.missingWarn : !0, d = s ? n.fallbackWarn : Pe(r.fallbackWarn) || Xn(r.fallbackWarn) ? r.fallbackWarn : !0, $ = s ? n.fallbackRoot : Pe(r.fallbackRoot) ? r.fallbackRoot : !0, g = !!r.fallbackFormat, D = Be(r.missing) ? r.missing : null, f = Be(r.postTranslation) ? r.postTranslation : null, b = s ? n.warnHtmlMessage : Pe(r.warnHtmlMessage) ? r.warnHtmlMessage : !0, k = !!r.escapeParameter, _ = s ? n.modifiers : ye(r.modifiers) ? r.modifiers : {}, C = r.pluralRules || s && n.pluralRules;
  function N() {
    return [
      i.value,
      l.value,
      u.value,
      c.value,
      p.value
    ];
  }
  const x = M({
    get: () => a.value ? a.value.locale.value : i.value,
    set: (m) => {
      a.value && (a.value.locale.value = m), i.value = m;
    }
  }), P = M({
    get: () => a.value ? a.value.fallbackLocale.value : l.value,
    set: (m) => {
      a.value && (a.value.fallbackLocale.value = m), l.value = m;
    }
  }), A = M(() => a.value ? a.value.messages.value : u.value), S = M(() => c.value), j = M(() => p.value);
  function Y() {
    return a.value ? a.value.getPostTranslationHandler() : f;
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
  function w(...m) {
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
  function Ie(m, L) {
    a.value && (a.value.setDateTimeFormat(m, L), c.value[m] = L);
  }
  function Oe(m, L) {
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
      return a.value ? a.value.pluralRules : C;
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
      return a.value ? a.value.fallbackWarn : d;
    },
    set fallbackWarn(m) {
      a.value && (a.value.missingWarn = m);
    },
    get fallbackRoot() {
      return a.value ? a.value.fallbackRoot : $;
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
    n: w,
    tm: q,
    te: pe,
    getLocaleMessage: Ee,
    setLocaleMessage: ee,
    mergeLocaleMessage: De,
    getDateTimeFormat: he,
    setDateTimeFormat: Ie,
    mergeDateTimeFormat: Oe,
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
    }), m.escapeParameter = k, m.fallbackFormat = g, m.fallbackRoot = $, m.fallbackWarn = d, m.missingWarn = v, m.warnHtmlMessage = b;
  }
  return Hu(() => {
    if (e.proxy == null || e.proxy.$i18n == null)
      throw Wt(Se.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
    const m = a.value = e.proxy.$i18n.__composer;
    t === "global" ? (i.value = m.locale.value, l.value = m.fallbackLocale.value, u.value = m.messages.value, c.value = m.datetimeFormats.value, p.value = m.numberFormats.value) : s && y(m);
  }), ze;
}
Wk();
__INTLIFY_JIT_COMPILATION__ ? Oi(Yk) : Oi(Rk);
Ik(ck);
Ck(hu);
if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const e = jt();
  e.__INTLIFY__ = !0, bk(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
const lN = { class: "flex flex-col gap-2" }, uN = { class: "flex items-center gap-2 relative pt-2" }, cN = { class: "flex items-center gap-2" }, dN = /* @__PURE__ */ E("span", { class: "p4-b" }, "平台", -1), fN = /* @__PURE__ */ E("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), vN = ["value"], pN = {
  key: 0,
  class: "flex items-center gap-2"
}, mN = /* @__PURE__ */ E("span", { class: "p4-b" }, "層級", -1), hN = /* @__PURE__ */ E("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), gN = ["value"], _N = {
  key: 1,
  class: "flex items-center gap-2"
}, bN = /* @__PURE__ */ E("span", { class: "p4-b" }, "目標", -1), yN = /* @__PURE__ */ E("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), DN = ["value"], wN = {
  key: 0,
  class: "flex flex-col"
}, EN = /* @__PURE__ */ E("span", { class: "p4-b" }, "指定目標", -1), ON = { key: 0 }, $N = {
  key: 0,
  class: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex justify-center items-center bg-dark-3 rounded bg-opacity-50 z-[2]"
}, kN = { class: "relative bg-light-5 rounded-xs shadow-01 w-4/5 p-4 min-h-[300px] h-fit" }, NN = /* @__PURE__ */ E("span", { class: "p1-b flex justify-center mb-1" }, "請選擇目標", -1), TN = { class: "flex flex-col gap-2 mt-2" }, IN = ["onClick"], CN = { class: "flex flex-col flex-1" }, MN = { class: "p3-b" }, PN = { class: "p4-r" }, AN = {
  key: 2,
  class: "flex flex-col gap-2"
}, LN = { class: "flex items-center gap-2" }, SN = /* @__PURE__ */ E("span", { class: "p4-b" }, "執行", -1), xN = /* @__PURE__ */ E("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), RN = ["value"], YN = {
  key: 0,
  class: "flex gap-x-2 gap-y-3 flex-wrap"
}, FN = { class: "flex items-center gap-2" }, VN = /* @__PURE__ */ E("span", { class: "p4-b" }, "類型", -1), UN = /* @__PURE__ */ E("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), jN = ["value"], BN = {
  key: 0,
  class: "flex items-center gap-2"
}, HN = /* @__PURE__ */ E("span", { class: "p4-b" }, "調整", -1), WN = /* @__PURE__ */ E("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), GN = ["value"], KN = {
  key: 1,
  class: "flex items-center gap-2"
}, qN = { class: "flex items-center gap-2" }, zN = /* @__PURE__ */ E("span", { class: "p4-b" }, "類型", -1), XN = /* @__PURE__ */ E("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), ZN = ["value"], JN = {
  key: 0,
  class: "flex items-center gap-2"
}, QN = /* @__PURE__ */ E("span", { class: "p4-b" }, "調整", -1), eT = /* @__PURE__ */ E("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), tT = ["value"], nT = {
  key: 1,
  class: "flex items-center gap-2"
}, rT = {
  key: 2,
  class: "flex items-center gap-2 w-full"
}, aT = { class: "flex flex-col gap-2" }, sT = { class: "flex items-center gap-2" }, oT = /* @__PURE__ */ E("label", { for: "maxBudget" }, "設定預算上限", -1), iT = {
  key: 0,
  class: "flex gap-2 items-center"
}, lT = /* @__PURE__ */ E("span", null, "元", -1), uT = { class: "flex items-center gap-2" }, cT = /* @__PURE__ */ E("span", { class: "p4-b" }, "類型", -1), dT = /* @__PURE__ */ E("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), fT = ["value"], vT = {
  key: 0,
  class: "flex items-center gap-2"
}, pT = /* @__PURE__ */ E("span", { class: "p4-b" }, "調整", -1), mT = /* @__PURE__ */ E("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), hT = ["value"], gT = {
  key: 1,
  class: "flex items-center gap-2"
}, _T = {
  key: 2,
  class: "flex items-center gap-2 w-full"
}, bT = { class: "flex flex-col gap-2" }, yT = { class: "flex items-center gap-2" }, DT = /* @__PURE__ */ E("label", {
  for: "maxBudget",
  class: "p3-b"
}, "設定預算下限", -1), wT = {
  key: 0,
  class: "flex gap-2 items-center"
}, ET = /* @__PURE__ */ E("span", null, "元", -1), Lt = "", OT = /* @__PURE__ */ Ae({
  __name: "EventAction",
  setup(e) {
    const { t } = ka(), n = vn("eventData"), r = ne(n.value.action ?? {}), s = ne(!!Object.keys(r.value).length), a = ne(!1);
    ke(a, (W) => {
      var V, w, q, pe, Ee;
      (V = r.value.params) != null && V.limit || (q = (w = r.value) == null ? void 0 : w.params) == null || delete q.limit, W || (Ee = (pe = r.value) == null ? void 0 : pe.params) == null || delete Ee.limit;
    }), ss(() => {
      var W, V, w, q, pe;
      ((W = r.value) == null ? void 0 : W.action) == ae.SetNewBudget || ((V = r.value) == null ? void 0 : V.action) == ae.IncreaseBudget || ((w = r.value) == null ? void 0 : w.action) == ae.LowerBudget || delete r.value.params, a.value = !!((pe = (q = r.value) == null ? void 0 : q.params) != null && pe.limit);
    }), ke(
      r,
      (W) => {
        n.value.action = W;
      },
      { deep: !0 }
    );
    const o = M(() => {
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
    }, l = M(() => {
      var w, q;
      const W = (w = r.value) == null ? void 0 : w.client, V = (q = r.value) == null ? void 0 : q.adLevel;
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
    }, c = M(() => {
      var q, pe, Ee;
      const W = (q = r.value) == null ? void 0 : q.client, V = (pe = r.value) == null ? void 0 : pe.adLevel, w = (Ee = r.value) == null ? void 0 : Ee.action;
      if (W && V && w) {
        const ee = u[W];
        if (ee) {
          const De = ee[V];
          if (De) {
            const he = De[w];
            if (he)
              return he;
          }
        }
      }
      return [se.Percentage, se.Value];
    }), p = M(() => r.value.client ? r.value.client : ""), v = (W) => {
      r.value.client = Number(W.target.value), delete r.value.target;
    }, d = M(() => r.value.adLevel ? r.value.adLevel : ""), $ = (W) => {
      r.value.adLevel = Number(W.target.value), delete r.value.action, delete r.value.target;
    }, g = M(() => r.value.targetType ? r.value.targetType : ""), D = (W) => {
      r.value.targetType = Number(W.target.value), delete r.value.action, delete r.value.target;
    }, f = M(() => r.value.action ? r.value.action : ""), b = (W) => r.value.action = Number(W.target.value), k = M(() => {
      var W;
      return (W = r.value) != null && W.params || (r.value.params = {}), r.value.params.budgetType ? r.value.params.budgetType : "";
    }), _ = (W) => r.value.params.budgetType = W.target.value, C = M(() => {
      var W;
      return (W = r.value) != null && W.params || (r.value.params = {}), r.value.params.valueType ? r.value.params.valueType : "";
    }), N = (W) => r.value.params.valueType = W.target.value, x = ne(!1), P = (W) => {
      var w;
      (w = r.value) != null && w.target || (r.value.target = []);
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
    }, j = M(() => "name"), Y = M(() => {
      const W = K.value.toLowerCase();
      return A.value.filter(
        (V) => V[j.value].toLowerCase().includes(W)
      );
    }), X = async () => {
      await S(), x.value = !0;
    }, K = ne(""), U = () => {
      r.value.target = Y.value;
    }, F = ne(!1);
    fn(() => {
      F.value = !0;
    });
    const Q = () => {
      s.value = !1, r.value = {}, Ln(() => {
        delete n.value.action;
      });
    };
    return M(() => {
      const W = p.value, V = r.value.adLevel, w = k.value;
      console.log("object");
      const q = W === Xe.Google && V === mt.Campaign, pe = W === Xe.Facebook && V === ct.Campaign, Ee = W === Xe.Facebook && V === ct.AdGroup, ee = q || pe || Ee, De = w === Rn.DailyBudget ? "日預算" : "總預算", he = `${Xe[W]}${o.value[V]}`, Ie = ee ? `若${t(he)}設定為${De}，則不會變更` : "";
      return { show: ee, msg: Ie };
    }), (W, V) => h(s) ? (O(), Ke(Dr, {
      key: 1,
      title: "動作"
    }, {
      default: qe(() => [
        E("div", lN, [
          E("div", uN, [
            E("div", {
              class: "cursor-pointer text-dark-4 absolute -top-2.5 -right-1.5 p4-b",
              onClick: Q
            }, " 刪除 "),
            E("label", cN, [
              dN,
              Ce(E("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": V[1] || (V[1] = (w) => _e(p) ? p.value = w : null),
                onChange: v,
                required: ""
              }, [
                fN,
                (O(!0), I(te, null, me(h(Xe), (w, q) => (O(), I(te, { key: q }, [
                  Number.isInteger(w) ? J("", !0) : (O(), I("option", {
                    key: 0,
                    value: q
                  }, le(w), 9, vN))
                ], 64))), 128))
              ], 544), [
                [je, h(p)]
              ])
            ]),
            h(p) != Lt ? (O(), I("label", pN, [
              mN,
              Ce(E("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": V[2] || (V[2] = (w) => _e(d) ? d.value = w : null),
                onChange: $,
                required: ""
              }, [
                hN,
                (O(!0), I(te, null, me(h(o), (w, q) => (O(), I(te, { key: q }, [
                  Number.isInteger(w) ? J("", !0) : (O(), I("option", {
                    key: 0,
                    value: q
                  }, le(W.$t(`${h(Xe)[h(p)]}${w}`)), 9, gN))
                ], 64))), 128))
              ], 544), [
                [je, h(d)]
              ])
            ])) : J("", !0),
            h(d) != Lt ? (O(), I("label", _N, [
              bN,
              Ce(E("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": V[3] || (V[3] = (w) => _e(g) ? g.value = w : null),
                onChange: D,
                required: ""
              }, [
                yN,
                (O(!0), I(te, null, me(h(un), (w, q) => (O(), I(te, { key: q }, [
                  Number.isInteger(w) ? J("", !0) : (O(), I("option", {
                    key: 0,
                    value: q
                  }, le(W.$t(w)), 9, DN))
                ], 64))), 128))
              ], 544), [
                [je, h(g)]
              ])
            ])) : J("", !0)
          ]),
          h(g) === h(un).ForID ? (O(), I("div", wN, [
            E("label", { class: "flex items-center gap-2" }, [
              EN,
              E("div", {
                class: "p4-r px-1.5 py-0.5 text-true-blue-2 rounded bg-true-blue-5 flex w-fit cursor-pointer hover:bg-true-blue-4",
                onClick: X
              }, " 編輯 ")
            ]),
            h(g) === h(un).ForID ? (O(), I("div", ON, [
              (O(!0), I(te, null, me(h(r).target, (w, q) => (O(), I("span", {
                class: "p4-r text-true-blue-3 px-0.5",
                key: w.id
              }, le(w.name) + le(q !== h(r).target.length - 1 ? "," : ""), 1))), 128))
            ])) : J("", !0)
          ])) : J("", !0),
          h(F) ? (O(), Ke(Wi, {
            key: 1,
            to: "#editor-container"
          }, [
            h(x) ? (O(), I("div", $N, [
              E("div", kN, [
                E("div", {
                  class: "absolute top-1 right-2 cursor-pointer",
                  onClick: V[4] || (V[4] = (w) => x.value = !1)
                }, " X "),
                NN,
                ve(kt, {
                  modelValue: h(K),
                  "onUpdate:modelValue": V[5] || (V[5] = (w) => _e(K) ? K.value = w : null)
                }, null, 8, ["modelValue"]),
                E("div", {
                  class: "mt-2 flex w-full justify-end p4-b text-true-blue-3",
                  onClick: U
                }, " 全選 "),
                E("div", TN, [
                  (O(!0), I(te, null, me(h(Y), (w) => {
                    var q;
                    return O(), I("div", {
                      class: "border border-dark-5 rounded py-1 px-3 flex gap-1 hover:border-transparent hover:bg-true-blue-5 cursor-pointer",
                      key: w.id,
                      onClick: (pe) => P(w)
                    }, [
                      E("div", CN, [
                        E("span", MN, le(w.id), 1),
                        E("span", PN, le(w.name), 1)
                      ]),
                      E("div", {
                        class: He(["rounded h-3 w-3 border", [
                          h(r).target && (q = h(r)) != null && q.target.find((pe) => pe.id === w.id) ? "bg-red-1" : ""
                        ]])
                      }, null, 2)
                    ], 8, IN);
                  }), 128))
                ])
              ])
            ])) : J("", !0)
          ])) : J("", !0),
          h(g) !== Lt ? (O(), I("div", AN, [
            E("label", LN, [
              SN,
              Ce(E("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": V[6] || (V[6] = (w) => _e(f) ? f.value = w : null),
                onChange: b,
                required: ""
              }, [
                xN,
                (O(!0), I(te, null, me(h(l), (w, q) => (O(), I("option", {
                  key: q,
                  value: w
                }, le(W.$t(q)), 9, RN))), 128))
              ], 544), [
                [je, h(f)]
              ])
            ]),
            h(d) != Lt ? (O(), I("div", YN, [
              h(r).action == h(ae).SetNewBudget ? (O(), I(te, { key: 0 }, [
                E("label", FN, [
                  VN,
                  Ce(E("select", {
                    class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                    "onUpdate:modelValue": V[7] || (V[7] = (w) => _e(k) ? k.value = w : null),
                    onChange: _,
                    required: ""
                  }, [
                    UN,
                    (O(!0), I(te, null, me(h(Rn), (w, q) => (O(), I(te, { key: q }, [
                      Number.isInteger(w) ? J("", !0) : (O(), I("option", {
                        key: 0,
                        value: w
                      }, le(W.$t(w)), 9, jN))
                    ], 64))), 128))
                  ], 544), [
                    [je, h(k)]
                  ])
                ]),
                h(k) != Lt ? (O(), I("label", BN, [
                  HN,
                  Ce(E("select", {
                    class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                    "onUpdate:modelValue": V[8] || (V[8] = (w) => _e(C) ? C.value = w : null),
                    onChange: N,
                    required: ""
                  }, [
                    WN,
                    (O(!0), I(te, null, me(h(c), (w, q) => (O(), I("option", {
                      key: q,
                      value: w
                    }, le(W.$t(`action${w}`)), 9, GN))), 128))
                  ], 544), [
                    [je, h(C)]
                  ])
                ])) : J("", !0),
                h(C) != Lt ? (O(), I("label", KN, [
                  ve(kt, {
                    modelValue: h(r).params.value,
                    "onUpdate:modelValue": V[9] || (V[9] = (w) => h(r).params.value = w),
                    type: "number",
                    required: !0
                  }, null, 8, ["modelValue"]),
                  E("span", null, le(h(r).params.valueType === h(se).Percentage ? "%" : "元"), 1)
                ])) : J("", !0)
              ], 64)) : h(r).action == h(ae).IncreaseBudget ? (O(), I(te, { key: 1 }, [
                E("label", qN, [
                  zN,
                  Ce(E("select", {
                    class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                    "onUpdate:modelValue": V[10] || (V[10] = (w) => _e(k) ? k.value = w : null),
                    onChange: _,
                    required: ""
                  }, [
                    XN,
                    (O(!0), I(te, null, me(h(Rn), (w, q) => (O(), I(te, { key: q }, [
                      Number.isInteger(w) ? J("", !0) : (O(), I("option", {
                        key: 0,
                        value: w
                      }, le(W.$t(w)), 9, ZN))
                    ], 64))), 128))
                  ], 544), [
                    [je, h(k)]
                  ])
                ]),
                h(k) != Lt ? (O(), I("label", JN, [
                  QN,
                  Ce(E("select", {
                    class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                    "onUpdate:modelValue": V[11] || (V[11] = (w) => _e(C) ? C.value = w : null),
                    onChange: N,
                    required: ""
                  }, [
                    eT,
                    (O(!0), I(te, null, me(h(c), (w, q) => (O(), I("option", {
                      key: q,
                      value: w
                    }, le(W.$t(`action${w}`)), 9, tT))), 128))
                  ], 544), [
                    [je, h(C)]
                  ])
                ])) : J("", !0),
                h(C) != Lt ? (O(), I("label", nT, [
                  ve(kt, {
                    modelValue: h(r).params.value,
                    "onUpdate:modelValue": V[12] || (V[12] = (w) => h(r).params.value = w),
                    type: "number",
                    required: !0
                  }, null, 8, ["modelValue"]),
                  E("span", null, le(h(r).params.valueType === h(se).Percentage ? "%" : "元"), 1)
                ])) : J("", !0),
                h(r).params.valueType === h(se).Percentage ? (O(), I("label", rT, [
                  E("div", aT, [
                    E("div", sT, [
                      Ce(E("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": V[13] || (V[13] = (w) => _e(a) ? a.value = w : null),
                        id: "maxBudget"
                      }, null, 512), [
                        [zr, h(a)]
                      ]),
                      oT,
                      h(a) ? (O(), I("div", iT, [
                        ve(kt, {
                          modelValue: h(r).params.limit,
                          "onUpdate:modelValue": V[14] || (V[14] = (w) => h(r).params.limit = w),
                          type: "number",
                          required: !0
                        }, null, 8, ["modelValue"]),
                        lT
                      ])) : J("", !0)
                    ])
                  ])
                ])) : J("", !0)
              ], 64)) : h(r).action == h(ae).LowerBudget ? (O(), I(te, { key: 2 }, [
                E("label", uT, [
                  cT,
                  Ce(E("select", {
                    class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                    "onUpdate:modelValue": V[15] || (V[15] = (w) => _e(k) ? k.value = w : null),
                    onChange: _,
                    required: ""
                  }, [
                    dT,
                    (O(!0), I(te, null, me(h(Rn), (w, q) => (O(), I(te, { key: q }, [
                      Number.isInteger(w) ? J("", !0) : (O(), I("option", {
                        key: 0,
                        value: w
                      }, le(W.$t(w)), 9, fT))
                    ], 64))), 128))
                  ], 544), [
                    [je, h(k)]
                  ])
                ]),
                h(k) != Lt ? (O(), I("label", vT, [
                  pT,
                  Ce(E("select", {
                    class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                    "onUpdate:modelValue": V[16] || (V[16] = (w) => _e(C) ? C.value = w : null),
                    onChange: N
                  }, [
                    mT,
                    (O(!0), I(te, null, me(h(c), (w, q) => (O(), I("option", {
                      key: q,
                      value: w
                    }, le(W.$t(`action${w}`)), 9, hT))), 128))
                  ], 544), [
                    [je, h(C)]
                  ])
                ])) : J("", !0),
                h(C) != Lt ? (O(), I("label", gT, [
                  ve(kt, {
                    modelValue: h(r).params.value,
                    "onUpdate:modelValue": V[17] || (V[17] = (w) => h(r).params.value = w),
                    type: "number",
                    required: !0
                  }, null, 8, ["modelValue"]),
                  E("span", null, le(h(r).params.valueType === h(se).Percentage ? "%" : "元"), 1)
                ])) : J("", !0),
                h(r).params.valueType === h(se).Percentage ? (O(), I("div", _T, [
                  E("div", bT, [
                    E("div", yT, [
                      Ce(E("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": V[18] || (V[18] = (w) => _e(a) ? a.value = w : null),
                        id: "maxBudget"
                      }, null, 512), [
                        [zr, h(a)]
                      ]),
                      DT,
                      h(a) ? (O(), I("div", wT, [
                        ve(kt, {
                          modelValue: h(r).params.limit,
                          "onUpdate:modelValue": V[19] || (V[19] = (w) => h(r).params.limit = w),
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
    })) : (O(), I("div", {
      key: 0,
      class: "p3-b text-true-blue-3 flex ml-auto w-fit cursor-pointer hover:text-true-blue-2",
      onClick: V[0] || (V[0] = (w) => s.value = !0)
    }, " + 加入動作 "));
  }
}), $T = { class: "flex flex-col gap-2 relative pt-2" }, kT = { class: "flex items-center gap-2" }, NT = { class: "flex items-center gap-2" }, TT = /* @__PURE__ */ E("span", { class: "p3-b" }, "平台", -1), IT = /* @__PURE__ */ E("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), CT = ["value"], MT = {
  key: 0,
  class: "flex items-center gap-2"
}, PT = /* @__PURE__ */ E("span", { class: "p3-b" }, "層級", -1), AT = /* @__PURE__ */ E("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), LT = ["value"], ST = {
  key: 1,
  class: "flex items-center gap-2"
}, xT = /* @__PURE__ */ E("span", { class: "p4-b" }, "目標", -1), RT = /* @__PURE__ */ E("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), YT = ["value"], FT = {
  key: 0,
  class: "flex flex-col"
}, VT = /* @__PURE__ */ E("span", { class: "p4-b" }, "指定目標", -1), UT = { key: 0 }, jT = {
  key: 0,
  class: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex justify-center items-center bg-dark-3 rounded bg-opacity-50 z-[2]"
}, BT = { class: "relative bg-light-5 rounded-xs shadow-01 w-4/5 p-4 min-h-[300px] h-fit" }, HT = /* @__PURE__ */ E("span", { class: "p1-b flex justify-center mb-1" }, "請選擇目標", -1), WT = { class: "flex flex-col gap-2 mt-2" }, GT = ["onClick"], KT = { class: "flex flex-col flex-1" }, qT = { class: "p3-b" }, zT = { class: "p4-r" }, XT = {
  key: 2,
  class: "flex items-center gap-1"
}, ZT = /* @__PURE__ */ E("span", { class: "p3-b" }, "條件", -1), JT = /* @__PURE__ */ E("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), QT = ["value"], eI = {
  key: 3,
  class: "flex gap-2 flex-wrap"
}, tI = { class: "flex gap-2" }, nI = { class: "flex items-center gap-1" }, rI = /* @__PURE__ */ E("span", { class: "p3-b" }, "運算", -1), aI = /* @__PURE__ */ E("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), sI = ["value"], oI = { key: 0 }, iI = ["onClick"], lI = {
  key: 0,
  class: "flex items-center gap-1"
}, uI = /* @__PURE__ */ E("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), cI = ["value"], dI = {
  key: 1,
  class: "flex items-center gap-1"
}, fI = /* @__PURE__ */ E("option", {
  value: "",
  disabled: ""
}, "請選擇", -1), vI = ["value"], pI = {
  key: 4,
  class: "flex items-center gap-2"
}, mI = /* @__PURE__ */ E("label", { for: "comparison" }, "加入比較區間", -1), an = "", hI = /* @__PURE__ */ Ae({
  __name: "ConditionItem",
  props: {
    modelValue: {},
    index: {}
  },
  emits: ["update:modelValue", "removeItem"],
  setup(e, { emit: t }) {
    const n = e, r = M(() => n.modelValue ?? {}), s = M(() => {
      var K;
      return ((K = r.value) == null ? void 0 : K.client) == Xe.Google ? Sn : xn;
    }), a = M(() => r.value.client ? r.value.client : ""), o = (K) => r.value.client = Number(K.target.value), i = M(() => r.value.adLevel ? r.value.adLevel : ""), l = (K) => {
      r.value.adLevel = Number(K.target.value), p.value != an && t("update:modelValue", {
        client: a.value,
        adLevel: i.value
      });
    }, u = M(() => r.value.targetType ? r.value.targetType : ""), c = (K) => {
      r.value.targetType = Number(K.target.value), delete r.value.action, delete r.value.target;
    }, p = M(() => r.value.conditionType ? r.value.conditionType : ""), v = (K) => r.value.conditionType = K.target.value, d = M(() => r.value.dateRangeType ? r.value.dateRangeType : ""), $ = (K) => {
      r.value.dateRangeType = Number(K.target.value), Number(K.target.value) !== _r.SpecifiedTime && delete r.value.dateRange;
    }, g = M(() => r.value.operation ? r.value.operation : ""), D = (K) => r.value.operation = K.target.value, f = M(() => r.value.valueType ? r.value.valueType : ""), b = (K) => r.value.valueType = K.target.value, k = {
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
    }, _ = M(() => {
      if (a.value && i.value) {
        const K = k[a.value];
        if (K) {
          const U = K[i.value];
          if (U)
            return U;
        }
      }
      return {};
    }), C = ne(!1), N = (K) => {
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
    }, A = M(() => "name"), S = M(() => {
      const K = Y.value.toLowerCase();
      return x.value.filter(
        (U) => U[A.value].toLowerCase().includes(K)
      );
    }), j = async () => {
      await P(), C.value = !0;
    }, Y = ne(""), X = ne(!1);
    return fn(() => {
      X.value = !0;
    }), (K, U) => (O(), Ke(Dr, {
      title: "條件" + (K.index + 1)
    }, {
      default: qe(() => [
        E("div", $T, [
          E("div", {
            class: "cursor-pointer text-dark-4 absolute -top-2.5 -right-1.5 p4-b",
            onClick: U[0] || (U[0] = (F) => t("removeItem"))
          }, " 刪除 "),
          E("div", kT, [
            E("label", NT, [
              TT,
              Ce(E("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": U[1] || (U[1] = (F) => _e(a) ? a.value = F : null),
                onChange: o,
                required: ""
              }, [
                IT,
                (O(!0), I(te, null, me(h(Xe), (F, Q) => (O(), I(te, { key: Q }, [
                  Number.isInteger(F) ? J("", !0) : (O(), I("option", {
                    key: 0,
                    value: Q
                  }, le(F), 9, CT))
                ], 64))), 128))
              ], 544), [
                [je, h(a)]
              ])
            ]),
            h(a) != an ? (O(), I("label", MT, [
              PT,
              Ce(E("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": U[2] || (U[2] = (F) => _e(i) ? i.value = F : null),
                onChange: l,
                required: ""
              }, [
                AT,
                (O(!0), I(te, null, me(h(s), (F, Q) => (O(), I(te, { key: Q }, [
                  Number.isInteger(F) ? J("", !0) : (O(), I("option", {
                    key: 0,
                    value: Q
                  }, le(K.$t(`${h(Xe)[h(a)]}${F}`)), 9, LT))
                ], 64))), 128))
              ], 544), [
                [je, h(i)]
              ])
            ])) : J("", !0),
            h(i) != an ? (O(), I("label", ST, [
              xT,
              Ce(E("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": U[3] || (U[3] = (F) => _e(u) ? u.value = F : null),
                onChange: c,
                required: ""
              }, [
                RT,
                (O(!0), I(te, null, me(h(un), (F, Q) => (O(), I(te, { key: Q }, [
                  Number.isInteger(F) ? J("", !0) : (O(), I("option", {
                    key: 0,
                    value: Q
                  }, le(K.$t(F)), 9, YT))
                ], 64))), 128))
              ], 544), [
                [je, h(u)]
              ])
            ])) : J("", !0)
          ]),
          h(u) === h(un).ForID ? (O(), I("div", FT, [
            E("label", { class: "flex items-center gap-2" }, [
              VT,
              E("div", {
                class: "p4-r px-1.5 py-0.5 text-true-blue-2 rounded bg-true-blue-5 flex w-fit cursor-pointer hover:bg-true-blue-4",
                onClick: j
              }, " 編輯 ")
            ]),
            h(u) === h(un).ForID ? (O(), I("div", UT, [
              (O(!0), I(te, null, me(h(r).target, (F, Q) => (O(), I("span", {
                class: "p4-r text-true-blue-3 px-0.5",
                key: F.id
              }, le(F.name) + le(Q !== h(r).target.length - 1 ? "," : ""), 1))), 128))
            ])) : J("", !0)
          ])) : J("", !0),
          h(X) ? (O(), Ke(Wi, {
            key: 1,
            to: "#editor-container"
          }, [
            h(C) ? (O(), I("div", jT, [
              E("div", BT, [
                E("div", {
                  class: "absolute top-1 right-2 cursor-pointer",
                  onClick: U[4] || (U[4] = (F) => C.value = !1)
                }, " X "),
                HT,
                ve(kt, {
                  modelValue: h(Y),
                  "onUpdate:modelValue": U[5] || (U[5] = (F) => _e(Y) ? Y.value = F : null)
                }, null, 8, ["modelValue"]),
                E("div", WT, [
                  (O(!0), I(te, null, me(h(S), (F) => {
                    var Q;
                    return O(), I("div", {
                      class: "border border-dark-5 rounded py-1 px-3 flex gap-1 hover:border-transparent hover:bg-true-blue-5 cursor-pointer",
                      key: F.id,
                      onClick: (W) => N(F)
                    }, [
                      E("div", KT, [
                        E("span", qT, le(F.id), 1),
                        E("span", zT, le(F.name), 1)
                      ]),
                      E("div", {
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
          h(u) != an ? (O(), I("label", XT, [
            ZT,
            Ce(E("select", {
              class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
              "onUpdate:modelValue": U[6] || (U[6] = (F) => _e(p) ? p.value = F : null),
              onChange: v,
              required: ""
            }, [
              JT,
              (O(!0), I(te, null, me(h(_), (F, Q) => (O(), I("option", {
                key: Q,
                value: F
              }, le(K.$t(Q)), 9, QT))), 128))
            ], 544), [
              [je, h(p)]
            ])
          ])) : J("", !0),
          h(p) != an ? (O(), I("div", eI, [
            E("div", tI, [
              E("label", nI, [
                rI,
                Ce(E("select", {
                  class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                  "onUpdate:modelValue": U[7] || (U[7] = (F) => _e(d) ? d.value = F : null),
                  onChange: $,
                  required: ""
                }, [
                  aI,
                  (O(!0), I(te, null, me(h(_r), (F, Q) => (O(), I(te, { key: Q }, [
                    Number.isInteger(F) ? J("", !0) : (O(), I("option", {
                      key: 0,
                      value: Q
                    }, le(K.$t(F)), 9, sI))
                  ], 64))), 128))
                ], 544), [
                  [je, h(d)]
                ])
              ]),
              h(d) == h(_r).SpecifiedTime ? (O(), I("div", oI, [
                ve(h(Vs), {
                  modelValue: h(r).dateRange,
                  "onUpdate:modelValue": U[8] || (U[8] = (F) => h(r).dateRange = F),
                  modelModifiers: { range: !0 },
                  mode: "date"
                }, {
                  default: qe(({ togglePopover: F, inputValue: Q }) => [
                    E("button", {
                      class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 transition-all hover:bg-light-3 hover:bg-opacity-50",
                      onClick: F
                    }, le(Q.start && Q.end ? `${Q.start}-${Q.end}` : "請選定執行日期"), 9, iI)
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ])) : J("", !0)
            ]),
            h(d) != "" ? (O(), I("label", lI, [
              Ce(E("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": U[9] || (U[9] = (F) => _e(g) ? g.value = F : null),
                onChange: D,
                required: ""
              }, [
                uI,
                (O(!0), I(te, null, me(h(ls), (F, Q) => (O(), I(te, { key: Q }, [
                  Number.isInteger(F) ? J("", !0) : (O(), I("option", {
                    key: 0,
                    value: F
                  }, le(K.$t(Q)), 9, cI))
                ], 64))), 128))
              ], 544), [
                [je, h(g)]
              ])
            ])) : J("", !0),
            h(g) != an ? (O(), I("label", dI, [
              Ce(E("select", {
                class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
                "onUpdate:modelValue": U[10] || (U[10] = (F) => _e(f) ? f.value = F : null),
                onChange: b,
                required: ""
              }, [
                fI,
                (O(!0), I(te, null, me(h(se), (F, Q) => (O(), I(te, { key: Q }, [
                  Number.isInteger(F) ? J("", !0) : (O(), I("option", {
                    key: 0,
                    value: F
                  }, le(K.$t(`condition${Q}`)), 9, vI))
                ], 64))), 128))
              ], 544), [
                [je, h(f)]
              ])
            ])) : J("", !0),
            h(f) != an ? (O(), Ke(kt, {
              key: 2,
              modelValue: h(r).value,
              "onUpdate:modelValue": U[11] || (U[11] = (F) => h(r).value = F),
              type: "number",
              required: !0
            }, null, 8, ["modelValue"])) : J("", !0)
          ])) : J("", !0),
          h(p) != an ? (O(), I("div", pI, [
            Ce(E("input", {
              type: "checkbox",
              "onUpdate:modelValue": U[12] || (U[12] = (F) => K.modelValue.comparison = F),
              id: "comparison"
            }, null, 512), [
              [zr, K.modelValue.comparison]
            ]),
            mI
          ])) : J("", !0)
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), gI = {
  key: 0,
  class: "flex items-center justify-center gap-3"
}, _I = /* @__PURE__ */ E("div", { class: "h-[1px] flex-1 bg-light-3" }, null, -1), bI = /* @__PURE__ */ E("p", { class: "p4-b to-dark-4" }, "且", -1), yI = /* @__PURE__ */ E("div", { class: "h-[1px] flex-1 bg-light-3" }, null, -1), DI = [
  _I,
  bI,
  yI
], wI = {
  key: 0,
  class: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex justify-center items-center bg-dark-3 rounded bg-opacity-50 z-[2]"
}, EI = { class: "relative bg-light-5 rounded-xs shadow-01 w-4/5 p-4" }, OI = /* @__PURE__ */ E("span", { class: "p1-b flex justify-center mb-1" }, "請選擇條件", -1), $I = /* @__PURE__ */ Gu('<div class="flex flex-col gap-2 mt-2"><div class="border border-dark-5 rounded py-1 px-3 flex gap-1 hover:border-transparent hover:bg-true-blue-5 cursor-pointer"><div class="flex flex-col flex-1"><span class="p3-b">當帳戶剩餘預算 小於指定金額，執行動作</span><span class="p4-r">ex: 帳戶剩餘預算小於 1000 元</span></div><div class="flex justify-center items-center">O</div></div></div>', 1), kI = /* @__PURE__ */ Ae({
  __name: "Condition",
  setup(e) {
    const t = ne(!1), n = vn("eventData"), r = ne(n.value.conditions ?? []);
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
    return (o, i) => (O(), I(te, null, [
      (O(!0), I(te, null, me(h(r), (l, u) => (O(), I(te, { key: u }, [
        ve(hI, {
          index: u,
          modelValue: h(r)[u],
          "onUpdate:modelValue": (c) => h(r)[u] = c,
          onRemoveItem: (c) => a(u)
        }, null, 8, ["index", "modelValue", "onUpdate:modelValue", "onRemoveItem"]),
        u + 1 !== h(r).length ? (O(), I("div", gI, DI)) : J("", !0)
      ], 64))), 128)),
      E("div", {
        class: "p3-b text-true-blue-3 flex ml-auto w-fit cursor-pointer hover:text-true-blue-2",
        onClick: i[0] || (i[0] = (l) => t.value = !h(t))
      }, " + 加入條件 "),
      h(t) ? (O(), I("div", wI, [
        E("div", EI, [
          E("div", {
            class: "absolute top-1 right-2 cursor-pointer",
            onClick: i[1] || (i[1] = (l) => t.value = !1)
          }, " X "),
          OI,
          ve(kt),
          $I,
          E("div", {
            class: "border ml-auto mt-2 border-true-blue-3 text-true-blue-3 rounded px-1 w-fit p3-r cursor-pointer hover:text-true-blue-2 hover:border-true-blue-2",
            onClick: s
          }, " 自訂 ")
        ])
      ])) : J("", !0)
    ], 64));
  }
}), NI = { class: "flex items-center gap-2" }, TI = /* @__PURE__ */ E("span", { class: "p4-b" }, "以電子郵件寄出結果", -1), II = /* @__PURE__ */ E("option", {
  value: "-2",
  disabled: ""
}, "請選擇", -1), CI = ["value"], MI = /* @__PURE__ */ Ae({
  __name: "Notification",
  setup(e) {
    const t = vn("eventData"), n = ne(
      t.value.notification ?? {
        email: -2
      }
    );
    return fn(() => {
      n.value.email === -2 && (n.value.email = 0);
    }), ke(
      n,
      (r) => {
        t.value.notification = r;
      },
      { deep: !0 }
    ), (r, s) => (O(), I("div", null, [
      E("label", NI, [
        TI,
        Ce(E("select", {
          class: "p3-b flex cursor-pointer items-center justify-center gap-2 rounded border border-dark-5 bg-light-5 py-1 px-2 outline-none transition-all hover:bg-light-3 hover:bg-opacity-50",
          "onUpdate:modelValue": s[0] || (s[0] = (a) => h(n).email = a)
        }, [
          II,
          (O(!0), I(te, null, me(h(us), (a, o) => (O(), I(te, { key: o }, [
            Number.isInteger(a) ? J("", !0) : (O(), I("option", {
              key: 0,
              value: Number(o)
            }, le(r.$t(`mail${a}`)), 9, CI))
          ], 64))), 128))
        ], 512), [
          [je, h(n).email]
        ])
      ])
    ]));
  }
}), PI = (e) => (Ku("data-v-9d5fc027"), e = e(), qu(), e), AI = ["onSubmit"], LI = { class: "p1-b" }, SI = /* @__PURE__ */ PI(() => /* @__PURE__ */ E("span", { class: "p4-b" }, "規則名稱*", -1)), xI = {
  key: 0,
  class: "text-red-1"
}, RI = 100, YI = /* @__PURE__ */ Ae({
  __name: "TCEventEditorApp",
  props: {
    data: {}
  },
  emits: ["update:data"],
  setup(e, { expose: t, emit: n }) {
    const r = e, s = M(() => JSON.parse(r.data || "{}")), a = (c) => {
      const p = Object.fromEntries(
        Object.entries(c).filter(([v, d]) => d !== null)
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
    }), (c, p) => {
      const v = Bt("PhCube");
      return r.data ? (O(), I("form", {
        key: 0,
        class: "p-5 rounded border flex flex-col gap-5 relative",
        id: "editor-container",
        onSubmit: Hi(i, ["prevent"])
      }, [
        E("div", LI, [
          Mr("建立自動化規則 "),
          ve(v)
        ]),
        ve(Dr, { title: "基本資料" }, {
          default: qe(() => [
            E("div", null, [
              SI,
              ve(kt, {
                modelValue: h(s).title,
                "onUpdate:modelValue": p[0] || (p[0] = (d) => h(s).title = d),
                maxLength: RI,
                required: !0
              }, null, 8, ["modelValue"])
            ])
          ]),
          _: 1
        }),
        ve(Dr, { title: "執行時間" }, {
          default: qe(() => [
            ve(f$, {
              frequency: h(s).frequency,
              "onUpdate:frequency": p[1] || (p[1] = (d) => h(s).frequency = d),
              interval: h(s).interval,
              "onUpdate:interval": p[2] || (p[2] = (d) => h(s).interval = d)
            }, null, 8, ["frequency", "interval"])
          ]),
          _: 1
        }),
        ve(Dr, { title: "通知" }, {
          default: qe(() => [
            ve(MI)
          ]),
          _: 1
        }),
        ve(OT),
        ve(kI),
        h(o).length ? (O(), I("span", xI, "資料未填寫完整")) : J("", !0),
        E("button", {
          ref_key: "submitBtn",
          ref: u,
          class: "p-2 px-3 rounded bg-slate-100 hover:bg-sky-500 hover:text-white"
        }, " 保存 ", 512)
      ], 40, AI)) : J("", !0);
    };
  }
});
const GI = /* @__PURE__ */ cs(YI, [["__scopeId", "data-v-9d5fc027"]]), FI = { class: "bg-white p-3 rounded-xl flex w-4/5 min-h-[80%] max-h-96" }, VI = { class: "flex flex-col gap-2 py-2 px-4" }, UI = /* @__PURE__ */ E("div", { class: "w-[1px] h-auto bg-dark-4" }, null, -1), jI = /* @__PURE__ */ E("div", { class: "flex-1 h-auto bg-red-1" }, null, -1), KI = /* @__PURE__ */ Ae({
  __name: "QuickSetup",
  setup(e) {
    const t = ne(!1), n = () => {
      t.value = !0;
    }, r = ne(["選擇平台", "執行動作", "設定條件", "執行時間"]);
    return (s, a) => {
      const o = Bt("vue-final-modal");
      return O(), I("div", null, [
        ve(o, {
          modelValue: h(t),
          "onUpdate:modelValue": a[0] || (a[0] = (i) => _e(t) ? t.value = i : null),
          "content-class": "flex h-full w-full justify-center items-center",
          "hide-overlay": !1,
          "esc-to-close": !0,
          "click-to-close": !0
        }, {
          default: qe(() => [
            E("div", FI, [
              E("div", VI, [
                (O(!0), I(te, null, me(h(r), (i, l) => (O(), I("div", {
                  key: i,
                  class: "flex flex-col"
                }, [
                  E("span", null, " Step." + le(l + 1), 1),
                  E("span", null, le(i), 1)
                ]))), 128))
              ]),
              UI,
              jI
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        E("div", { onClick: n }, [
          Gt(s.$slots, "default")
        ])
      ]);
    };
  }
});
export {
  KI as QuickSetup,
  GI as TCEventEditorApp,
  WI as TCEventItems,
  HI as setApiUrlBase
};
